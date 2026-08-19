---
title: Enterprise downgrade of the WebView Runtime to a previous version
description: WebView2 Enterprise Downgrade guide.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 08/19/2026
---
# Enterprise downgrade of the WebView Runtime to a previous version

In an enterprise, the IT Admin can downgrade the WebView Runtime to a previous version, as a temporary measure.

**Detailed contents:**
* [Overview](#overview)
   * [What enterprise downgrade solves](#what-enterprise-downgrade-solves)
   * [Why enterprise downgrade exists](#why-enterprise-downgrade-exists)
   * [Applicable applications](#applicable-applications)
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
   * [Application compatibility risks](#application-compatibility-risks)
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

Policy documentation: [DowngradeVersion](/deployedge/microsoft-edge-webview-policies#downgradeversion) in _Microsoft Edge WebView2 - Policies_.


<!-- ====================================================================== -->
## Overview

**WebView2** is a browser control that allows Windows applications (such as Microsoft Teams, Outlook, and third-party enterprise software) to embed web content using the Microsoft Edge rendering engine.  The **Evergreen** distribution model means the WebView2 Runtime updates automatically alongside Edge — applications always run on the latest version without manual intervention.

While Evergreen ensures applications get security patches and feature improvements automatically, it also means that if a new Runtime version introduces a regression, each application and Windows component that uses them is likely to be impacted.  Although enterprise IT Admins cannot uninstall the impacting update, Enterprise Downgrade offers a short-term mitigation approach to restore impacted productivity.


<!-- ------------------------------ -->
#### What enterprise downgrade solves

The [DowngradeVersion](/deployedge/microsoft-edge-webview-policies#downgradeversion) policy is a controlled version downgrade capability that allows an enterprise IT Admin to temporarily revert specific WebView2 applications to a previous Runtime version via Group Policy when a critical regression disrupts business operations.

How enterprise downgrade works:

1. The IT Admin identifies that a new WebView2 version has broken a specific application.

1. The IT Admin sets a Group Policy specifying: "For this application, use version X instead of the latest."

   Only N-1 or N-2 relative to the current Evergreen version is supported.  Downgrades to versions beyond N-2 are rejected.

1. The Edge Updater downloads and installs the older WebView2 Runtime version **side-by-side** with the current WebView2 Runtime.

1. The WebView2 Loader redirects only the targeted application to the older WebView2 Runtime.

1. All other applications on the device continue using the latest version unaffected.

1. The downgrade automatically expires once the pinned version is no longer within the two most recent previous versions.


<!-- ------------------------------ -->
#### Why enterprise downgrade exists

In mission-critical enterprise environments, unexpected regressions in the WebView2 Runtime can halt business workflows with no immediate remedy.  Even brief outages result in lost revenue, missed SLAs, and increased operational costs.

Enterprise Downgrade provides a **temporary, Admin-controlled version downgrade** for the specific application affected, while the platform team prepares a proper fix.

🔑 Key Principle: Enterprise Downgrade is a last-resort recovery tool — targeted, time-bound, and managed by the enterprise IT Admin in partnership with application owners.  Enterprise Downgrade is not a version-pinning mechanism.

Mission-critical enterprise environments include, for example:
* Healthcare systems
* Financial trading platforms
* Retail point-of-sale
* Government services


<!-- ------------------------------ -->
#### Applicable applications

Enterprise Downgrade does **not** automatically affect any application.  It is a policy that an IT Admin must explicitly configure for specific applications.  Only then does it apply.

**Which apps can be targeted:**

*  Any WebView2 Evergreen application running on enterprise-managed Windows devices.

*  The IT Admin specifies the target by **executable** name (such as `teams.exe`) or **AUMID** (Application User Model ID, for packaged/MSIX apps).

*  If both an AUMID and exe name entry exist for the same application, the AUMID entry takes precedence.

**Which apps are NOT affected:**

*  Applications that are not named in the policy continue to use the latest Evergreen Runtime.

*  Consumer or unmanaged devices are entirely out of scope.

*  App-bundled (Fixed Version) WebView2 Runtimes are out of scope.


<!-- ------------------------------ -->
#### Policy configuration and precedence


| Location | Path |
|---|---|
| **Group Policy (recommended)** | Computer Configuration > Administrative Templates > Microsoft Edge WebView2 > Configure per-application WebView2 downgrade version. |
| **Registry** | `HKLM\Software\Policies\Microsoft\Edge\WebView2\DowngradeVersion` |

📄 Note: HKCU is not supported — this is a machine-level enterprise policy only.

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

* **Per-App Targeting:** Downgrade is applied per-application, not device-wide.  Each application must be individually specified.


<!-- ====================================================================== -->
## Temporarily downgrading the WebView2 Runtime


<!-- ------------------------------ -->
#### Option 1: Group Policy (GPO)

This is the recommended approach for enterprise environments.  Group Policy ensures centralized, auditable management across managed devices.

1. Open the Group Policy Editor (`gpedit.msc`).

1. Navigate to: **Computer Configuration > Administrative Templates > Microsoft Edge WebView2**

1. Find **Configure per-application WebView2 downgrade version**.

1. Enable the policy, and enter this information:

   * **Name:** The application identifier (AUMID or exe name, such as `teams.exe`).

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

1. Restart the WebView2 application, for the policy to take effect.

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

* The updater will **automatically download** the required version if it satisfies N-1/N-2 conditions.  The IT Admin doesn't need to pre-stage version folders on disk.

* No restart of the machine is needed, but the WebView2 app must be restarted, and it might take up to 1 hour for the downgrade to take effect.

* Policy application latency: Changes take effect within **1 hour** of deployment.  This is aligned with the Microsoft Edge and WebView2 update task cadence.  To trigger a force update, see [Triggering a force update](#triggering-a-force-update), below.

* Downgrade policy enforcement overrides the following:
   * Maintenance windows.
   * Extended update intervals.
   * Cached last-check timestamps.


<!-- ------------------------------ -->
#### Process flow: How downgrade is implemented

1. The IT Admin sets policy by using Group Policy, specifying the `AppId` and `TargetVersion`.

1. The Updater reads the policy, and validates that `TargetVersion` is within N-1 or N-2.

1. Downloads the downgraded version if needed (side-by-side install).

1. Sets `BrowserExecutableFolder` policy for the target app to redirect it to the specified Runtime version.

1. Maintains mapping as long as the downgraded version stays within the supported range.

1. Cleans up and reverts the app to the latest Runtime version when the pinned Runtime version falls outside of the supported range or the policy is removed.

📄 Note: If a downgrade policy is active but the target Runtime version is not yet downloaded (such as due to network or disk constraints), applications will continue running on the currently available Runtime until the downgraded bits are present.  Applications will NOT fail to launch solely because downgraded bits are pending download.


<!-- ====================================================================== -->
## Limitations of downgrading the WebView2 Runtime


<!-- ------------------------------ -->
#### Version limitations

| Limitation | Detail |
|---|---|
| **Version range** | Only N-1 or N-2 relative to the current Evergreen version.  Downgrades beyond two versions are rejected. |
| **Version format** | Only major version numbers (digits only).  Full version strings, dots, or wildcards are invalid. |
| **Automatic expiry** | A downgraded version remains active only while it is within the two most recent previous versions.  Once two subsequent new versions release beyond the pinned version, the downgrade automatically expires and the app reverts to the latest Runtime. |
| **Availability** | Feature available from version 150 onwards only. |


<!-- ------------------------------ -->
#### Scope limitations

| Limitation | Detail |
|---|---|
| **Enterprise-only** | Not supported on consumer or unmanaged devices. |
| **Machine-level only** | Policy set at HKLM only.  HKCU is not supported.  No user-level policy or individual user control. |
| **Per-app targeting** | Cannot perform enterprise-wide downgrade across all apps.  Each app must be individually targeted. |
| **No developer control** | Only IT Admins can initiate downgrade.  Developers cannot trigger downgrade via APIs. |
| **No indefinite pinning** | The solution does NOT support long-term or permanent version pinning. |


<!-- ------------------------------ -->
#### Shared User Data Folder (UDF) constraints

Applications may share a WebView2 User Data Folder (UDF) to reuse browser state.  Accessing the same UDF from different WebView2 Runtime versions is **unsafe** and will result in failures:

**If App A is downgraded and App B shares the same UDF but is not downgraded:**

* Both App A and App B will fail fast on launch.

* The IT Admin must downgrade all apps that share the same UDF to the same Runtime version.

📄 Note: Very few apps share a User Data Folder (UDF).  The only known apps that share a UDF are the Office Suite apps: Excel, Word, and PowerPoint.


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
#### Application compatibility risks

| Risk | Description |
|---|---|
| **Feature dependency breaks** | Applications using newer WebView2 APIs or behaviours may fail or behave unpredictably after downgrade. |
| **Performance regressions** | Older versions may introduce slower page loads, higher memory usage, and degraded experiences. |
| **App malfunction** | Downgrades can cause applications to malfunction due to reliance on recently introduced features or rendering changes. |


<!-- ------------------------------ -->
#### Operational risks

| Risk | Description |
|---|---|
| **Version fragmentation** | Supporting downgrade at the app level can lead to version drift across apps on the same device. |
| **Sedimentation** | Multiple older versions accumulate on devices over time, increasing complexity. |
| **Increased disk usage** | An additional WebView2 Runtime version is installed side-by-side with the current Evergreen version, consuming extra disk space on each device. |
| **Coordination complexity** | Downgrade requires careful coordination between IT Admins, application owners, and platform teams. |

⚠️ Given these risks, Enterprise Downgrade should only be used as a last-resort recovery measure — when a critical regression is actively disrupting business operations and no other mitigation (hotfix, feature flag, update pause) can resolve the issue in a timely manner.  The downgrade buys time for the platform team to ship a proper fix; the downgrade is not a substitute for shipping a proper fix.


<!-- ====================================================================== -->
## Testing and troubleshooting downgrading of the Runtime


<!-- ------------------------------ -->
#### Verifying that the Runtime downgrade was applied

After setting the policy and restarting the target WebView2 application:


<!-- ---------- -->
###### 1. Check the versioned folder

1. In File Explorer, navigate to: `C:\Program Files (x86)\Microsoft\EdgeWebView\Application\`

1. Confirm that a new folder appears, matching the downgraded version (such as `145.x.xxxx.xx`).

   The presence of this versioned folder indicates that the updater has fetched and staged the downgraded Runtime.


<!-- ---------- -->
###### 2. Check the registry policy

1. Confirm that the `DowngradeVersion` key is set, under: `HKLM\Software\Policies\Microsoft\Edge\WebView2\DowngradeVersion`

1. Verify that entries match your configured `AppId` → `TargetVersion`.


<!-- ---------- -->
###### 3. Check the `BrowserExecutableFolder` redirect

*  The `BrowserExecutableFolder` policy should be set automatically to point the app to the downgraded Runtime path.


<!-- ------------------------------ -->
#### Triggering a force-update

After setting the `DowngradeVersion` policy, the Edge Updater needs to download the target version.  By default, this happens within ~1 hour (aligned with the Edge/WebView2 update task cadence).  To trigger an immediate update, follow the below steps:

1. Open PowerShell as Administrator.

1. Find the Edge Update task:

   `Get-ScheduledTask -TaskPath "\Microsoft\EdgeUpdate\*" | Select TaskName, TaskPath`

1. Run the task:

   `Start-ScheduledTask -TaskName "<task name from step 2>"`

1. Wait a few minutes for the download to complete.

1. Restart the WebView2 application.


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
| App still running on latest version | App not restarted | Restart the WebView2 application (not the machine). |
| Downgraded folder not appearing | Version outside N-1/N-2 range | Verify the target version is within the two most recent previous versions |
| App fails fast on launch (all apps sharing UDF) | Shared UDF version mismatch | Downgrade ALL apps using the same User Data Folder to the same version |
| Policy not taking effect | Incorrect key path or value format | Verify HKLM path, value name format (AUMID or exe), and 4 part value |
| Multiple apps impacted unexpectedly | Shared User Data Folder | Identify UDF sharing and ensure all affected apps are aligned |
| Downgrade auto-reverted unexpectedly | Pinned version fell outside supported range | Expected behavior — downgrade expires once the version is no longer within N-1/N-2 |


<!-- ====================================================================== -->
## Reverting downgrading the WebView Runtime


<!-- ------------------------------ -->
#### Option 1: Disable group policy (recommended)

If GPO was used to configure downgrade:

1. Open the Group Policy Editor (`gpedit.msc`).

1. Navigate to: **Computer Configuration > Administrative Templates > Microsoft Edge WebView2**

1. Set "**Configure per-application WebView2 downgrade version**" to **Disabled** or **Not Configured**.

1. Restart the WebView2 application.

   The app will revert to the latest Evergreen Runtime on next launch.

📄 Important: Do NOT delete registry keys directly.  Always use Group Policy (GPO) to disable the policy, to ensure clean removal and avoid orphaned configuration.


<!-- ------------------------------ -->
#### Option 2: Remove the policy via the registry

If the policy was originally set directly via Registry (not recommended in production):

1. Open `regedit` as Administrator.

1. Navigate to: `HKEY_LOCAL_MACHINE\Software\Policies\Microsoft\Edge\WebView2\DowngradeVersion`

1. Delete the specific value (such as`teams.exe`).

1. Restart the WebView2 application.

⚠️ Caution: Direct registry manipulation should only be used if the original policy was set via Registry Editor.  If GPO was used, always revert using GPO to ensure consistency.


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
| **Application restart** | App picks up the latest Runtime on next launch. |
| **BrowserExecutableFolder** | Automatically removed; app returns to default Runtime path. |
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
