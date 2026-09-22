#!/usr/bin/env python3
"""Upload and submit a Chrome Web Store ZIP using a service account."""
import json
import os
import re
import sys
import time
from pathlib import Path
from zipfile import BadZipFile, ZipFile

SCOPE = "https://www.googleapis.com/auth/chromewebstore"
BASE = "https://chromewebstore.googleapis.com"


def fail(message):
    raise SystemExit(message)


def request(session, method, url, **kwargs):
    response = session.request(method, url, timeout=60, **kwargs)
    if not response.ok:
        fail(f"Chrome Web Store API {method} failed ({response.status_code}): {response.text[:1000]}")
    result = response.json() if response.content else {}
    return result


def numeric_version(value):
    if not re.fullmatch(r"\d+(\.\d+){0,3}", value):
        fail(f"Invalid Chrome manifest version: {value}")
    parts = tuple(map(int, value.split(".")))
    return parts + (0,) * (4 - len(parts))


def check_archive_version(archive, expected_version):
    try:
        with ZipFile(archive) as zipped:
            manifests = [entry for entry in zipped.infolist() if entry.filename == "manifest.json"]
            if len(manifests) != 1:
                fail("Release ZIP must contain exactly one root manifest.json")
            if manifests[0].file_size > 1024 * 1024:
                fail("Release ZIP manifest.json is too large")
            manifest = json.loads(zipped.read(manifests[0]))
    except (OSError, BadZipFile, ValueError) as error:
        fail(f"Cannot read release ZIP manifest: {error}")
    if manifest.get("manifest_version") != 3 or manifest.get("version") != expected_version:
        fail(f"ZIP manifest version must equal release {expected_version}")
    display_version = manifest.get("version_name")
    if display_version != expected_version and not (
        isinstance(display_version, str) and display_version.startswith(f"{expected_version}-")
    ):
        fail(f"ZIP manifest version_name must match release {expected_version}")


def published_versions(status):
    channels = status.get("publishedItemRevisionStatus", {}).get("distributionChannels", [])
    return [channel["crxVersion"] for channel in channels if channel.get("crxVersion")]


def check_version_increases(version, store_versions):
    requested = numeric_version(version)
    if store_versions and requested <= max(map(numeric_version, store_versions)):
        fail(f"Requested {version} must be greater than published version(s): {', '.join(store_versions)}")


def wait_for_upload(session, item_url, upload, *, attempts=30, delay=10, sleep=time.sleep):
    state = upload.get("uploadState")
    for _ in range(attempts):
        if state != "IN_PROGRESS":
            break
        sleep(delay)
        upload = request(session, "GET", f"{item_url}:fetchStatus")
        state = upload.get("lastAsyncUploadState")
    if state != "SUCCEEDED":
        fail(f"Upload did not reach SUCCEEDED (state={state!r}): {upload}")
    return upload


def submit_for_review(session, item_url):
    result = request(session, "POST", f"{item_url}:publish", json={"blockOnWarnings": True})
    if result.get("state") not in ("PENDING_REVIEW", "STAGED", "PUBLISHED", "PUBLISHED_TO_TESTERS"):
        fail(f"Unexpected publish state: {result}")
    if result.get("warningInfo", {}).get("warnings"):
        fail(f"Chrome Web Store returned publish warnings: {result['warningInfo']}")
    return result


def main():
    if len(sys.argv) != 3:
        fail("Usage: publish-cws-release.py ZIP VERSION")
    archive, version = Path(sys.argv[1]), sys.argv[2]
    numeric_version(version)
    check_archive_version(archive, version)
    publisher, item = os.environ.get("CWS_PUBLISHER_ID"), os.environ.get("CWS_ITEM_ID")
    key_json = os.environ.get("CWS_SERVICE_ACCOUNT_JSON")
    if not publisher or not item or not key_json:
        fail("Set CWS_PUBLISHER_ID, CWS_ITEM_ID and CWS_SERVICE_ACCOUNT_JSON in the protected environment")

    # Imports are delayed so API behavior can be tested without Google credentials/dependencies.
    from google.auth.transport.requests import AuthorizedSession
    from google.oauth2 import service_account

    credentials = service_account.Credentials.from_service_account_info(json.loads(key_json), scopes=[SCOPE])
    session = AuthorizedSession(credentials)
    item_url = f"{BASE}/v2/publishers/{publisher}/items/{item}"
    status = request(session, "GET", f"{item_url}:fetchStatus")
    check_version_increases(version, published_versions(status))

    uploaded = request(
        session,
        "POST",
        f"{BASE}/upload/v2/publishers/{publisher}/items/{item}:upload",
        headers={"Content-Type": "application/zip"},
        data=archive.read_bytes(),
    )
    wait_for_upload(session, item_url, uploaded)

    published = submit_for_review(session, item_url)
    print(f"Submitted {item} version {version} for Chrome Web Store review: {published}")


if __name__ == "__main__":
    main()
