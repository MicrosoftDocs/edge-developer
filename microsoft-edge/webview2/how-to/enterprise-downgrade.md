---
title: Downgrade the WebView Runtime to an earlier version
description: If a new version of the WebView2 Runtime version introduces a regression in a specific WebView2 app, an IT Admin can downgrade the WebView Runtime to a previous version, by using the DowngradeVersion policy, as a temporary solution.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 08/19/2026
---
# Downgrade the WebView Runtime to an earlier version

If a new version of the WebView2 Runtime version introduces a regression in a specific WebView2 app, an IT Admin can downgrade the WebView Runtime to a previous version, by using the `DowngradeVersion` policy, as a temporary solution.

**Detailed contents:**
* [Overview of enterprise downgrade](#overview-of-enterprise-downgrade)
   * [How enterprise downgrade works](#how-enterprise-downgrade-works)
   * [Why enterprise downgrade exists](#why-enterprise-downgrade-exists)
   * [Applicable WebView2 apps](#applicable-webview2-apps)
   * [Policy configuration and precedence](#policy-configuration-and-precedence)
   * [Core design principles](#core-design-principles)
* [Temporarily downgrading the WebView2 Runtime](#temporarily-downgrading-the-webview2-runtime)
   * [Option 1: Group Policy (GPO)](#option-1-group-policy-gpo)
   * [Option 2: Registry Editor (regedit)](#option-2-registry-editor-regedit)
   * [Important notes](#important-notes)
   * [Process flow: How downgrade is implemented](#process-flow-how-downgrade-is-implemented)
* [Limitations of downgrading the WebView2 Runtime](#limitations-of-downgrading-the-webview2-runtime)
   * [Version limitations](#version-limitations)
   * [Scope limitations](#scope-limitations)
   * [Shared User Data Folder (UDF) constraints](#shared-user-data-folder-udf-constraints)
* [Risks of downgrading the WebView2 Runtime](#risks-of-downgrading-the-webview2-runtime)
   * [Security risks](#security-risks)
   * [Data integrity risks](#data-integrity-risks)
   * [App compatibility risks](#app-compatibility-risks)
   * [Operational risks](#operational-risks)
* [Testing and troubleshooting downgrading of the Runtime](#testing-and-troubleshooting-downgrading-of-the-runtime)
   * [Verifying that the Runtime downgrade was applied](#verifying-that-the-runtime-downgrade-was-applied)
      * [1. Check the versioned folder](#1-check-the-versioned-folder)
      * [2. Check the registry policy](#2-check-the-registry-policy)
      * [3. Check the BrowserExecutableFolder redirect](#3-check-the-browserexecutablefolder-redirect)
   * [Triggering a force-update](#triggering-a-force-update)
   * [Diagnostics tools for deeper troubleshooting](#diagnostics-tools-for-deeper-troubleshooting)
   * [Common issues and resolution](#common-issues-and-resolution)
* [Reverting downgrading the WebView Runtime](#reverting-downgrading-the-webview-runtime)
   * [Option 1: Disable group policy (recommended)](#option-1-disable-group-policy-recommended)
   * [Option 2: Remove the policy via the registry](#option-2-remove-the-policy-via-the-registry)
   * [Option 3: Automatic expiry](#option-3-automatic-expiry)
   * [Post-revert behavior](#post-revert-behavior)
* [Escalating and contacting the WebView2 team](#escalating-and-contacting-the-webview2-team)
* [See also](#see-also)


<!-- ====================================================================== -->
## Overview of enterprise downgrade

In an enterprise, the IT Admin can downgrade the WebView Runtime to a previous version, as a temporary measure, by using the `DowngradeVersion` policy.  When using the Evergreen Runtime, if a new Runtime version introduces a regression, each WebView2 app and each Windows component that uses the WebView2 Runtime is likely to be impacted.  Enterprise Downgrade offers a short-term mitigation approach for the IT Admin to restore impacted productivity.

See [DowngradeVersion](/deployedge/microsoft-edge-webview-policies#downgradeversion) in _Microsoft Edge WebView2 - Policies_.  The `DowngradeVersion` policy is a controlled version downgrade capability that allows an enterprise IT Admin to temporarily revert a specific WebView2 application (WebView2 app) to use a previous version of the WebView2 Runtime via Group Policy when a critical regression disrupts business operations.

The **Evergreen** distribution model means that the WebView2 Runtime updates automatically alongside Microsoft Edge, so that the WebView2 app always runs on the latest version of the WebView2 Runtime, without manual intervention.  The Evergreen WebView2 Runtime ensures that the WebView2 app gets security patches and feature improvements automatically.  The enterprise IT Admin cannot uninstall the impacting WebView2 Runtime update.

**WebView2** is a browser control that allows Windows applications (such as Microsoft Teams, Outlook, and third-party enterprise software) to embed web content by using the Microsoft Edge rendering engine.


<!-- ------------------------------ -->
#### How enterprise downgrade works

1. The IT Admin identifies that a new WebView2 Runtime version has broken a specific WebView2 app.

1. The IT Admin sets a Group Policy that specifies that for this WebView2 app, use a specific previous version of the WebView2 Runtime, instead of the latest WebView2 Runtime.

   Only WebView2 Runtime version N-1 or N-2 relative to the current Evergreen WebView2 Runtime version is supported.  Downgrading to a version of the WebView2 Runtime that's earlier than version N-2 is rejected.

1. The Edge Updater downloads and installs the older WebView2 Runtime version _side-by-side_ with the current WebView2 Runtime.

1. The WebView2 Loader redirects only the targeted WebView2 app to the older WebView2 Runtime.

1. All other WebView2 apps on the device continue using the latest WebView2 Runtime version; they are unaffected by the downgrade.

1. The downgrade automatically expires after the pinned version is no longer within the two most recent previous versions of the WebView2 Runtime.


<!-- ------------------------------ -->
#### Why enterprise downgrade exists

Enterprise Downgrade is a last-resort recovery tool.  Enterprise Downgrade is targeted, time-bound, and managed by the enterprise IT Admin in partnership with WebView2 app owners.  Enterprise Downgrade is not a version-pinning mechanism.

Enterprise Downgrade provides a temporary, Admin-controlled version downgrade for the specific WebView2 app that's affected, while the platform team prepares a proper fix.  Enterprise Downgrade should only be used as a last-resort recovery measure, when a critical regression is actively disrupting business operations and no other mitigation (such as a hotfix, feature flag, or update pause) can resolve the issue in a timely manner.  The downgrade buys time for the platform team to ship a proper fix; the downgrade is not a substitute for shipping a proper fix.

In mission-critical enterprise environments, unexpected regressions in the WebView2 Runtime can halt business workflows with no immediate remedy.  Even brief outages result in lost revenue, missed SLAs, and increased operational costs.  Mission-critical enterprise environments include, for example:
* Healthcare systems
* Financial trading platforms
* Retail point-of-sale
* Government services


<!-- ------------------------------ -->
#### Applicable WebView2 apps

Enterprise Downgrade of the WebView2 Runtime doesn't automatically affect any WebView2 app.  The IT Admin must explicitly configure the `DowngradeVersion` policy for a specific WebView2 app.  The policy then applies only to that specific WebView2 app.

The following types of WebView2 apps can be targeted:

* Any WebView2 Evergreen-Runtime app running on enterprise-managed Windows devices.

   * The IT Admin specifies the target by either:
      * The Application User Model ID (AUMID), for packaged/MSIX apps.
      * The executable name (such as `teams.exe`).

   * If both an AUMID and `.exe` name entry exist for the same WebView2 app, the AUMID entry takes precedence.

The following types of WebView2 apps are not affected by the `DowngradeVersion` policy:

* WebView2 apps that aren't specified in the `DowngradeVersion` policy.
   * Such apps continue to use the latest WebView2 Evergreen Runtime.

* WebView2 apps on consumer devices or unmanaged devices.

* WebView2 apps that use an app-bundled (Fixed Version) WebView2 Runtime.


<!-- ------------------------------ -->
#### Policy configuration and precedence

HKEY_CURRENT_USER (HKCU) is not supported; this is a machine-level enterprise policy only (HKEY_LOCAL_MACHINE (HKLM)).

| Location | Path |
|---|---|
| **Group Policy (recommended)** | **Computer Configuration** > **Administrative Templates** > **Microsoft Edge WebView2** > **Configure per-application WebView2 downgrade version** |
| **Registry** | `HKLM\Software\Policies\Microsoft\Edge\WebView2\DowngradeVersion` |

**Precedence when multiple policies exist (highest to lowest):**

1. **DowngradeVersion policy** — always wins.

1. **BrowserExecutableFolder** — if set independently by the IT Admin.

1. **Default Evergreen Runtime** — lowest.

If both `DowngradeVersion` and `BrowserExecutableFolder` are independently configured, `DowngradeVersion` takes precedence and overrides the `BrowserExecutableFolder` redirect.


<!-- ------------------------------ -->
#### Core design principles

* **Enterprise IT Admin Driven:** Only IT Admins can initiate downgrade via Group Policy.  Developers and end users cannot trigger it.

* **Updater Service Compliance:** The Edge Updater downloads the required version if needed and continues normal updates for all other apps.

* **Automatic Expiry:** A downgraded version remains valid only as long as it is within the two most recent previous versions (N-1 or N-2).  Once two subsequent new major versions release beyond the downgraded version, the downgrade expires and the app automatically reverts to the latest Runtime.  Microsoft recommends that the IT Admin should remove the stale policy after it auto-expires.

* **Per-App Targeting:** Downgrade is applied per-app, not device-wide.  Each WebView2 app must be individually specified in the policy.


<!-- ====================================================================== -->
## Temporarily downgrading the WebView2 Runtime


<!-- ------------------------------ -->
#### Option 1: Group Policy (GPO)

This is the recommended approach for enterprise environments.  Group Policy ensures centralized, auditable management across managed devices.

1. Open the Group Policy Editor (`gpedit.msc`).

1. Navigate to: **Computer Configuration > Administrative Templates > Microsoft Edge WebView2**

1. Find **Configure per-application WebView2 downgrade version**.

1. Enable the policy, and enter this information:

   * **Name:** The application identifier (AUMID).  Or, the `.exe` name, such as `teams.exe`.

   * **Value:** The target four-part version number (such as 151.0.2178.0).


<!-- ------------------------------ -->
#### Option 2: Registry Editor (regedit)

For targeted configuration on individual machines.  Requires local administrator privileges.

1. Open `regedit` as Administrator.

1. Navigate to: `HKEY_LOCAL_MACHINE\Software\Policies\Microsoft\Edge\WebView2`

1. Create a new key named `DowngradeVersion` (if it doesn't exist).

1. Inside the `DowngradeVersion` key, create a new `String Value (REG_SZ)`:

   * **Value name:** The AUMID or executable name (such as `teams.exe`).

   * **Value data:** The target major version number.

      * Set the value to the target full version string using the four-part numeric format (such as 151.0.2178.0).

      * The IT Admin can find the exact four-part version number in the [Microsoft Edge release notes for Stable and Extended Stable Channels](/deployedge/microsoft-edge-relnote-stable-channel)

      * **Example values:**
         * Name: `teams.exe`, Value: `151.0.2178.0`
         * Name: `outlook.exe`, Value: `152.0.2164.0`

1. Restart the WebView2 app, for the policy to take effect.

**Example:**

```
Key:   HKLM\Software\Policies\Microsoft\Edge\WebView2\DowngradeVersion
Value: teams.exe = "145"
Value: outlook.exe = "146"
```


<!-- ------------------------------ -->
#### Important notes

* Only **HKLM** is supported (HKCU is ignored).

* The following values are not supported:
   * Major-only values (such as 151).
   * Wildcard values (such as 151.*).
   * Values that are not exact four-part numeric versions.

* The WebView2 loader resolves the Runtime installation directory only when a folder that exactly matches the configured full version exists.  For example, 151.0.2178.0 must match 151.0.2178.0 exactly.

  If no exact matching folder is found, the policy has no effect, and the Runtime defaults to the `BrowserExecutableFolder` policy or the Evergreen Runtime (the default auto-updating Runtime).

* The updater<!-- todo: Edge Updater? --> will **automatically download** the required version if it satisfies the N-1 and/or N-2 conditions.  The IT Admin doesn't need to pre-stage version folders on disk.

* No restart of the machine is needed, but the WebView2 app must be restarted, and it might take up to 1 hour for the downgrade to take effect.

* Policy latency for the WebView2 app: Changes take effect within **1 hour** of deployment.  This is aligned with the Microsoft Edge and WebView2 update task cadence.  To trigger a force update, see [Triggering a force update](#triggering-a-force-update), below.

* Runtime downgrade policy enforcement overrides the following:
   * Maintenance windows.
   * Extended update intervals.
   * Cached last-check timestamps.


<!-- ------------------------------ -->
#### Process flow: How downgrade is implemented

1. The IT Admin sets policy by using Group Policy, specifying the `AppId` and `TargetVersion`.

1. The Updater<!-- todo: Edge Updater? --> reads the policy, and validates that `TargetVersion` is within N-1 or N-2.

1. Downloads<!-- todo: who is the actor? the WebView2 app? --> the downgraded version of the WebView2 Runtime, if needed, as a side-by-side install.

1. Sets<!-- todo: who is the actor? --> `BrowserExecutableFolder` policy for the target app to redirect it to the specified Runtime version.

1. Maintains<!-- todo: who is the actor? --> mapping as long as the downgraded version stays within the supported range.

1. Cleans up<!-- todo: who is the actor? --> and reverts the app to the latest Runtime version when the pinned Runtime version falls outside of the supported range or the policy is removed.

If a WebView2 Runtime downgrade policy is active but the target WebView2 Runtime version is not yet downloaded (such as due to network or disk constraints), the WebView2 app continues running on the currently available WebView2 Runtime until the earlier WebView2 Runtime is present.  The WebView2 app will _not_ fail to launch solely because the downgraded version of the WebView2 Runtime is pending download.


<!-- ====================================================================== -->
## Limitations of downgrading the WebView2 Runtime


<!-- ------------------------------ -->
#### Version limitations

| Limitation | Detail |
|---|---|
| **Version range** | Only version N-1 or N-2 of the WebView2 Runtime relative to the current Evergreen Runtime version is supported.  Downgrading to an WebView2 Runtime that's earlier than the two previous Runtime versions is rejected. |
| **Version format** | Only major version numbers (digits only).  Full version strings, dots, or wildcards are invalid. |
| **Automatic expiry** | A downgraded version of the WebView2 Runtime remains active only while it is within the two most recent previous versions.  After two subsequent new versions of the Runtime release beyond the pinned version, the downgrade automatically expires, and the app reverts to the latest WebView2 Runtime. |
| **Availability** | The downgrade feature is available for Microsoft Edge WebView2 version 150 or later, only. |


<!-- ------------------------------ -->
#### Scope limitations

| Limitation | Detail |
|---|---|
| **Enterprise-only** | Not supported on consumer or unmanaged devices. |
| **Machine-level only** | Policy can only be set at the level of the local machine (HKEY_LOCAL_MACHINE (HKLM)).  Setting the downgrade policy for the current user (HKEY_CURRENT_USER (HKCU)) is not supported; there's no user-level policy, or individual user-level control. |
| **Per-app targeting** | Cannot perform enterprise-wide downgrade across all WebView2 apps.  Each WebView2 app must be individually targeted. |
| **No developer control** | Only an IT Admin can initiate downgrading the WebView2 Runtime.  A Developer cannot trigger downgrade of the WebView2 Runtime, such as via an API. |
| **No indefinite pinning** | The solution does NOT support long-term or permanent version pinning. |


<!-- ------------------------------ -->
#### Shared User Data Folder (UDF) constraints

The IT Admin must downgrade all WebView2 apps that share the same User Data Folder (UDF), to use the same WebView2 Runtime version.

WebView2 apps can share a WebView2 User Data Folder (UDF) to reuse browser state.  Very few apps share a User Data Folder (UDF); the only known apps that share a UDF are the Office Suite apps: Excel, Word, and PowerPoint.

Accessing the same UDF from different WebView2 Runtime versions is unsafe.  If WebView2 app A is downgraded, and WebView2 app B shares the same UDF but is not downgraded, both WebView2 app A and WebView2 app B will fail fast on launch.


<!-- ====================================================================== -->
## Risks of downgrading the WebView2 Runtime


<!-- ------------------------------ -->
#### Security risks

| Risk | Description |
|---|---|
| **Reintroduced vulnerabilities** | Downgrading reintroduces patched vulnerabilities that have been fixed in newer versions. |
| **Compliance weakening** | Older versions may violate compliance in regulated environments. |
| **Expanded attack surface** | Managing multiple downgraded versions increases the persistence of outdated clients. |


<!-- ------------------------------ -->
#### Data integrity risks

| Risk | Description |
|---|---|
| **Storage corruption** | Downgrade can cause corruption or incompatibility if storage formats, schemas, or APIs have changed between versions (cookies, IndexedDB, Local Storage). |
| **Schema mismatches** | Unlike Edge browser which uses User Data Snapshots, WebView2 does not implement platform-level snapshotting. |
| **User data loss** | Profile instability and potential data loss if storage formats are incompatible. |


<!-- ------------------------------ -->
#### App compatibility risks

| Risk | Description |
|---|---|
| **Feature dependency breaks** | A WebView2 app that uses newer WebView2 APIs or behaviors might fail or behave unpredictably after downgrading the WebView2 Runtime. |
| **Performance regressions** | Older versions of the WebView2 Runtime might introduce slower page loads, higher memory usage, and degraded experiences. |
| **App malfunction** | Downgrading the WebView2 Runtime can cause a WebView2 app to malfunction, due to reliance on recently introduced features or rendering changes. |


<!-- ------------------------------ -->
#### Operational risks

| Risk | Description |
|---|---|
| **Version fragmentation** | Supporting downgrade at the app level can lead to version drift across apps on the same device. |
| **Sedimentation** | Multiple older versions accumulate on devices over time, increasing complexity. |
| **Increased disk usage** | An additional WebView2 Runtime version is installed side-by-side with the current Evergreen WebView2 Runtime version, consuming extra disk space on each device. |
| **Coordination complexity** | Downgrade requires careful coordination between the IT Admin, the WebView2 app owner, and the platform team. |


<!-- ====================================================================== -->
## Testing and troubleshooting downgrading of the Runtime


<!-- ------------------------------ -->
#### Verifying that the Runtime downgrade was applied

After setting the WebView2 Runtime downgrade policy and restarting the target WebView2 app, do the following.


<!-- ---------- -->
###### 1. Check the versioned folder

1. In File Explorer, navigate to: `C:\Program Files (x86)\Microsoft\EdgeWebView\Application\`

1. Confirm that a new folder appears, matching the downgraded version (such as `145.x.xxxx.xx`).

   The presence of this versioned folder indicates that the updater has fetched and staged the downgraded WebView2 Runtime.


<!-- ---------- -->
###### 2. Check the registry policy

1. Confirm that the `DowngradeVersion` key is set, under: `HKLM\Software\Policies\Microsoft\Edge\WebView2\DowngradeVersion`

1. Verify that entries match your configured `AppId` → `TargetVersion`.


<!-- ---------- -->
###### 3. Check the `BrowserExecutableFolder` redirect

*  The `BrowserExecutableFolder` policy should be set automatically to point the app to the downgraded Runtime path.


<!-- ------------------------------ -->
#### Triggering a force-update

After setting the `DowngradeVersion` policy, the Edge Updater needs to download the target version.  By default, this happens within approximately 1 hour (aligned with the Edge/WebView2 update task cadence).

To trigger an immediate update:

1. Open PowerShell as Administrator.

1. Find the Edge Update task:

   `Get-ScheduledTask -TaskPath "\Microsoft\EdgeUpdate\*" | Select TaskName, TaskPath`

1. Run the task:

   `Start-ScheduledTask -TaskName "<task name from step 2>"`

1. Wait a few minutes for the download to complete.

1. Restart the WebView2 app.


<!-- ------------------------------ -->
#### Diagnostics tools for deeper troubleshooting

The following tools are for **troubleshooting issues** — they are not required for standard verification:

| Tool | Purpose |
|---|---|
| **edge://webview2-internals** | View active WebView2 processes, Runtime version in use. |
| **ETW Tracing** | Capture low-level diagnostic logs for update/downgrade events. |
| **Event Viewer** | Check Application logs for WebView2 update errors or policy enforcement failures. |


<!-- ------------------------------ -->
#### Common issues and resolution

| Symptom | Likely Cause | Resolution |
|---|---|---|
| App still running on latest version | App not restarted. | Restart the WebView2 app (not the machine). |
| Downgraded folder not appearing | Version is outside the "N-1 or N-2" range. | Verify that the target version is within the two most recent previous versions. |
| App fails fast on launch (all apps sharing a User Data Folder (UDF)). | Shared UDF version mismatch. | Downgrade all apps that use the same UDF to the same version. |
| Policy not taking effect. | Incorrect key path or value format. | Verify the HKLM path, the value name format (AUMID or `exe`), and four-part numeric format (such as 151.0.2178.0). |
| Multiple apps are impacted unexpectedly. | Shared User Data Folder | Identify User Data Folder (UDF) sharing, and make sure all affected apps are aligned. |
| The downgrade auto-reverted unexpectedly. | Pinned version fell outside supported range | It is expected behavior, that the downgrade of the WebView2 Runtime expires after the Runtime version is no longer within version N-1 or N-2 (the two earlier versions of the Runtime). |


<!-- ====================================================================== -->
## Reverting downgrading the WebView Runtime


<!-- ------------------------------ -->
#### Option 1: Disable group policy (recommended)

Important: Do not delete registry keys directly.  Always use Group Policy (GPO) to disable the policy, to ensure clean removal and avoid orphaned configuration.

If GPO was used to configure downgrade:

1. Open the Group Policy Editor (`gpedit.msc`).

1. Navigate to: **Computer Configuration > Administrative Templates > Microsoft Edge WebView2**

1. Set "**Configure per-application WebView2 downgrade version**" to **Disabled** or **Not Configured**.

1. Restart the WebView2 app.

   The app will revert to the latest Evergreen Runtime on next launch.


<!-- ------------------------------ -->
#### Option 2: Remove the policy via the registry

Caution: Direct registry manipulation should only be used if the original policy was set via Registry Editor.  If Group Policy (GPO) was used, always revert by using GPO, to ensure consistency.

If the policy was originally set directly via Registry (not recommended in production):

1. Open `regedit` as Administrator.

1. Navigate to: `HKEY_LOCAL_MACHINE\Software\Policies\Microsoft\Edge\WebView2\DowngradeVersion`

1. Delete the specific value (such as`teams.exe`).

1. Restart the WebView2 app.


<!-- ------------------------------ -->
#### Option 3: Automatic expiry

The downgrade expires automatically when the pinned version is no longer within the two most recent previous versions:

* **Trigger:** Two subsequent new Evergreen versions release beyond the pinned version.

* **Behavior:** The updater automatically reverts applicable apps to the latest Runtime.

* **Admin action required:** Remove the stale policy once it auto-expires.

* **Example:** If you downgrade to version 145 while 147 is current (145 is N-2), and then version 148 release, version 145 is now three versions behind → downgrade auto-expires.


<!-- ------------------------------ -->
#### Post-revert behavior

| Action | What Happens |
|---|---|
| **Application restart** | The WebView2 app picks up the latest WebView Runtime during the next launch of the app. |
| **BrowserExecutableFolder** | Automatically removed; the WebView2 app returns to using the default WebView2 Runtime path. |
| **Downgraded Runtime bits** | Cleaned up by the updater on a scheduled cadence. |
| **User data** | Remains in place; no automatic data migration occurs. |


<!-- ====================================================================== -->
## Escalating and contacting the WebView2 team

| Aspect | Value |
|---|---|
| **Area Path:** | Edge\Web Experience\WebView2\Distribution |
| **DL:** | [wv2addr@microsoft.com](mailto:wv2addr@microsoft.com) |

**Escalation Path:**

1. Enterprise Admin contacts Microsoft CSS.

1. CSS troubleshoots using this guide.

1. If unresolved → CSS escalates to WebView2 Platform team ICM.

   Owning Service: Edge Browser customer incidents.

   Owning Team: Edge WebView2.

See also:
* [Contact the WebView2 team](../contact.md)


<!-- ====================================================================== -->
## See also
<!-- all links in article -->

* [Enterprise management of WebView2 Runtimes](../concepts/enterprise.md)
* [DowngradeVersion](/deployedge/microsoft-edge-webview-policies#downgradeversion) in _Microsoft Edge WebView2 - Policies_.
* [Microsoft Edge release notes for Stable and Extended Stable Channels](/deployedge/microsoft-edge-relnote-stable-channel)
* [Contact the WebView2 team](../contact.md)
