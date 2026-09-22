# Chrome Web Store release

The repository has a registered Chrome Web Store developer account and the one-time fee is paid. This workflow submits a new version of an **existing** listing; it does not create the listing or handle listing assets/privacy disclosures.

## One-time setup

1. If DitaAi is not yet listed, create its item in the Chrome Web Store Developer Dashboard and complete the listing, privacy, and policy disclosures. A listing is required before API publishing.
2. In Google Cloud, create/select a project, enable the Chrome Web Store API, create a service account, and link it to the Web Store publisher account as described in [Chrome Web Store service accounts](https://developer.chrome.com/docs/webstore/service-accounts). Link only a trusted service account: dashboard access is publisher-wide, not restricted to one item. Download its JSON key securely; never commit it.
3. In GitHub, protect `main` and release tags so only trusted maintainers can change them. Release tags must point to commits reachable from protected `main`. Add an environment named `chrome-web-store` and configure **required reviewers** (and prevent self-review as appropriate). Environment protection is only an approval gate when reviewers are configured.
4. In that environment, add secret `CWS_SERVICE_ACCOUNT_JSON` (entire service-account JSON). Add variables `CWS_PUBLISHER_ID` and `CWS_ITEM_ID` using the publisher and existing extension item IDs from the dashboard/API.

## Release procedure

1. Merge this workflow and scripts onto `main`.
2. On the source commit intended for release, run `just bump MAJOR.MINOR.PATCH` (for example `just bump 1.2.3`). This updates `package.json`, the numeric `manifest.version` in `wxt.config.ts`, and the development `version_name`. Commit that source change, then create and push an immutable matching tag `vMAJOR.MINOR.PATCH` (for example `v1.2.3`). The dispatch input, tag, and built manifest must all match; the workflow rejects branch dispatches, mismatched tags, and mismatched source manifest versions.
3. Dispatch **Chrome Web Store release** from that tag. The build job installs frozen dependencies, blocks on high-severity `pnpm audit` findings, runs `pnpm ci` and release-helper tests, then runs extension E2E tests in Chromium (which build the Chrome extension). It packages that tested build and verifies the ZIP contains a root `manifest.json` whose version already matches the requested version. Packaging does not rewrite the build. The ZIP is retained as a workflow artifact.
4. A reviewer approves the `chrome-web-store` environment job. The privileged job checks out its publisher script from trusted `main` rather than the release tag; the untrusted build job has no store credentials. It compares the requested version with the currently published version, uploads the ZIP to the configured existing item, waits for an in-progress upload, and submits with warnings blocked. API errors fail the job. Review/approval by the Chrome Web Store may still be required before rollout.

Chrome manifest versions are numeric dotted components (no `v`, hash, or prerelease suffix). The packaging step never rewrites the built manifest: it verifies that the source tag, dispatch input, and artifact version agree. The workflow serializes releases to avoid concurrent uploads to one item. Never put service-account credentials in repository variables, build steps, artifacts, or source control.

See [Using the Chrome Web Store API](https://developer.chrome.com/docs/webstore/using-api) for API behavior and dashboard setup.
