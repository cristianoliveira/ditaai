import importlib.util
import json
import tempfile
import unittest
from pathlib import Path
from zipfile import ZipFile


spec = importlib.util.spec_from_file_location(
    "publish_cws_release", Path(__file__).with_name("publish-cws-release.py")
)
release = importlib.util.module_from_spec(spec)
spec.loader.exec_module(release)


class Response:
    def __init__(self, body=None, status=200, text=""):
        self.body = body or {}
        self.status_code = status
        self.text = text
        self.ok = status < 400
        self.content = b"present" if body is not None else b""

    def json(self):
        return self.body


class Session:
    def __init__(self, responses):
        self.responses = iter(responses)
        self.calls = []

    def request(self, method, url, **kwargs):
        self.calls.append((method, url, kwargs))
        return next(self.responses)


class UploadTests(unittest.TestCase):
    def test_accepts_completed_upload(self):
        session = Session([])
        result = release.wait_for_upload(session, "item", {"uploadState": "SUCCEEDED"})
        self.assertEqual(result["uploadState"], "SUCCEEDED")
        self.assertEqual(session.calls, [])

    def test_polls_in_progress_until_succeeded(self):
        session = Session([Response({"lastAsyncUploadState": "SUCCEEDED"})])
        result = release.wait_for_upload(
            session,
            "item",
            {"uploadState": "IN_PROGRESS"},
            attempts=2,
            sleep=lambda _: None,
        )
        self.assertEqual(result["lastAsyncUploadState"], "SUCCEEDED")
        self.assertEqual(session.calls[0][0:2], ("GET", "item:fetchStatus"))

    def test_fails_on_upload_failure(self):
        with self.assertRaisesRegex(SystemExit, "FAILED"):
            release.wait_for_upload(Session([]), "item", {"uploadState": "FAILED"})

    def test_fails_when_upload_times_out(self):
        session = Session([Response({"lastAsyncUploadState": "IN_PROGRESS"})])
        with self.assertRaisesRegex(SystemExit, "IN_PROGRESS"):
            release.wait_for_upload(
                session,
                "item",
                {"uploadState": "IN_PROGRESS"},
                attempts=1,
                sleep=lambda _: None,
            )

    def test_previous_failed_upload_does_not_block_retry(self):
        status = {"lastAsyncUploadState": "FAILED", "publishedItemRevisionStatus": {"distributionChannels": []}}
        self.assertEqual(release.request(Session([Response(status)]), "GET", "item:fetchStatus"), status)

    def test_rejects_api_http_error(self):
        session = Session([Response(status=403, text="denied")])
        with self.assertRaisesRegex(SystemExit, "403.*denied"):
            release.request(session, "GET", "url")

    def test_submit_blocks_warnings(self):
        session = Session([Response({"state": "PENDING_REVIEW"})])
        release.submit_for_review(session, "item")
        method, url, kwargs = session.calls[0]
        self.assertEqual((method, url), ("POST", "item:publish"))
        self.assertEqual(kwargs["json"], {"blockOnWarnings": True})

    def test_rejects_unrecognized_publish_state(self):
        with self.assertRaisesRegex(SystemExit, "Unexpected publish state"):
            release.submit_for_review(Session([Response({"state": "REJECTED"})]), "item")

    def test_rejects_publish_warnings_even_on_http_success(self):
        response = Response({"state": "PENDING_REVIEW", "warningInfo": {"warnings": [{"code": "policy"}]}})
        with self.assertRaisesRegex(SystemExit, "publish warnings"):
            release.submit_for_review(Session([response]), "item")

    def test_rejects_version_not_greater_than_published(self):
        with self.assertRaisesRegex(SystemExit, "greater than published"):
            release.check_version_increases("1.2.3", ["1.2.3"])
        with self.assertRaisesRegex(SystemExit, "greater than published"):
            release.check_version_increases("1.2.3", ["1.2.3.0"])

    def test_rejects_artifact_that_differs_from_requested_version(self):
        with tempfile.TemporaryDirectory() as directory:
            archive = Path(directory) / "release.zip"
            with ZipFile(archive, "w") as zipped:
                zipped.writestr("manifest.json", json.dumps({"manifest_version": 3, "version": "1.2.2"}))
            with self.assertRaisesRegex(SystemExit, "ZIP manifest version"):
                release.check_archive_version(archive, "1.2.3")

    def test_accepts_root_manifest_matching_requested_version(self):
        with tempfile.TemporaryDirectory() as directory:
            archive = Path(directory) / "release.zip"
            with ZipFile(archive, "w") as zipped:
                zipped.writestr("manifest.json", json.dumps({"manifest_version": 3, "version": "1.2.3"}))
            release.check_archive_version(archive, "1.2.3")

    def test_rejects_duplicate_manifest_in_artifact(self):
        with tempfile.TemporaryDirectory() as directory:
            archive = Path(directory) / "release.zip"
            with ZipFile(archive, "w") as zipped:
                zipped.writestr("manifest.json", '{"version":"1.2.3"}')
                zipped.writestr("manifest.json", '{"version":"1.2.3"}')
            with self.assertRaisesRegex(SystemExit, "exactly one root manifest"):
                release.check_archive_version(archive, "1.2.3")


if __name__ == "__main__":
    unittest.main()
