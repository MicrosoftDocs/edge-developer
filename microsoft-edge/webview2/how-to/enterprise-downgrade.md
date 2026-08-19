---
title: WebView2 Enterprise Downgrade Guide
description: WebView2 Enterprise Downgrade Guide.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 08/19/2026
---
# WebView2 Enterprise Downgrade Guide

**Detailed contents:**
* [1. What Is Enterprise Downgrade?](#1-what-is-enterprise-downgrade)
   * [Background](#background)
   * [What Enterprise Downgrade Solves](#what-enterprise-downgrade-solves)
   * [Why It Exists](#why-it-exists)
   * [Applicable Applications](#applicable-applications)
   * [Policy Configuration & Precedence](#policy-configuration--precedence)
   * [Core Design Principles](#core-design-principles)
* [2. How to Downgrade — Steps](#2-how-to-downgrade--steps)
   * [Option 1: Group Policy (GPO) — Recommended for Enterprise](#option-1-group-policy-gpo--recommended-for-enterprise)
   * [Option 2: Registry Editor (regedit)](#option-2-registry-editor-regedit)
   * [Important Notes](#important-notes)
   * [Process Flow (How It Works Under the Hood)](#process-flow-how-it-works-under-the-hood)
* [3. Limitations of Downgrade](#3-limitations-of-downgrade)
   * [Version Limitations](#version-limitations)
   * [Scope Limitations](#scope-limitations)
   * [Shared User Data Folder (UDF) Constraints](#shared-user-data-folder-udf-constraints)
* [4. Risks Associated with Downgrade](#4-risks-associated-with-downgrade)
   * [Security Risks](#security-risks)
   * [Data Integrity Risks](#data-integrity-risks)
   * [Application Compatibility Risks](#application-compatibility-risks)
   * [Operational Risks](#operational-risks)
* [5. Testing & Troubleshooting](#5-testing--troubleshooting)
   * [Verifying Downgrade Applied](#verifying-downgrade-applied)
      * [1. Check the versioned folder](#1-check-the-versioned-folder)
      * [2. Check registry policy](#2-check-registry-policy)
      * [3. Check BrowserExecutableFolder redirect](#3-check-browserexecutablefolder-redirect)
   * [Triggering a Force Update](#triggering-a-force-update)
   * [Diagnostics Tools (For Deeper Troubleshooting)](#diagnostics-tools-for-deeper-troubleshooting)
   * [Common Issues & Resolution](#common-issues--resolution)
* [6. How to Revert from Downgrade](#6-how-to-revert-from-downgrade)
   * [Option 1: Disable Group Policy (Recommended)](#option-1-disable-group-policy-recommended)
   * [Option 2: Remove Policy via Registry](#option-2-remove-policy-via-registry)
   * [Option 3: Automatic Expiry](#option-3-automatic-expiry)
   * [Post-Revert Behavior](#post-revert-behavior)
* [7. Escalation & Contact](#7-escalation--contact)

Policy Documentation: [DowngradeVersion](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-webview-policies#downgradeversion) in _Microsoft Edge WebView2 - Policies_.


<!-- ====================================================================== -->
## 1. What Is Enterprise Downgrade?


<!-- ------------------------------ -->
#### Background

**WebView2** is a browser control that allows Windows applications (such as Microsoft Teams, Outlook, and third-party enterprise software) to embed web content using the Microsoft Edge rendering engine.  The **Evergreen** distribution model means the WebView2 runtime updates automatically alongside Edge — applications always run on the latest version without manual intervention.

While Evergreen ensures applications get security patches and feature improvements automatically, it also means that if a new runtime version introduces a regression, each application and Windows component that uses them is likely to be impacted.  Although enterprise administrators cannot uninstall the impacting update, Enterprise Downgrade offers a short-term mitigation approach to restore impacted productivity.


<!-- ------------------------------ -->
#### What Enterprise Downgrade Solves

The **DowngradeVersion** policy is a controlled version downgrade capability that allows enterprise IT administrators to temporarily revert specific WebView2 applications to a previous runtime version via Group Policy when a critical regression disrupts business operations.

How it works at a high level:

1. Admin identifies that a new WebView2 version has broken a specific application

2. Admin sets a Group Policy specifying: "For this application, use version X instead of the latest".  (Note: Only N-1 or N-2 relative to the current Evergreen version is supported.  Downgrades to versions beyond N-2 are rejected.)

3. The Edge Updater downloads and installs the older version **side-by-side** with the current one

4. The WebView2 Loader redirects only the targeted application to the older runtime

5. All other applications on the device continue using the latest version unaffected

6. The downgrade automatically expires once the pinned version is no longer within the two most recent previous versions


<!-- ------------------------------ -->
#### Why It Exists

In mission-critical enterprise environments, for e.g. healthcare systems, financial trading platforms, retail point-of-sale, government services, unexpected regressions in the WebView2 runtime can halt business workflows with no immediate remedy.  Even brief outages result in lost revenue, missed SLAs, and increased operational costs.

Enterprise Downgrade provides a **temporary, admin-controlled version downgrade** for the specific application affected, while the platform team prepares a proper fix.

🔑 Key Principle: Downgrade is a last-resort recovery tool — targeted, time-bound, and managed by enterprise admins in partnership with application owners.  It is not a version-pinning mechanism.


<!-- ------------------------------ -->
#### Applicable Applications

Enterprise Downgrade does **not** automatically affect any application.  It is a policy that an IT administrator must explicitly configure for specific applications.  Only then does it apply.

**Which apps can be targeted:**

*  Any WebView2 Evergreen application running on enterprise-managed Windows devices

*  The admin specifies the target by **executable** name (e.g., `teams.exe`) or **AUMID** (Application User Model ID, for packaged/MSIX apps)

*  If both an AUMID and exe name entry exist for the same application, the AUMID entry takes precedence

**Which apps are NOT affected:**

*  Applications not named in the policy continue the latest Evergreen runtime

*  Consumer/unmanaged devices are entirely out of scope

*  App-bundled (Fixed Version) WebView2 runtimes are out of scope


<!-- ------------------------------ -->
#### Policy Configuration & Precedence


| Location | Path |
|---|---|
| **Group Policy (recommended)** | Computer Configuration > Administrative Templates > Microsoft Edge WebView2 > Configure per-application WebView2 downgrade version |
| **Registry** | `HKLM\Software\Policies\Microsoft\Edge\WebView2\DowngradeVersion` |

📄 Note: HKCU is not supported — this is a machine-level enterprise policy only.

**Precedence when multiple policies exist (highest to lowest):**

1. **DowngradeVersion policy** — always wins

2. **BrowserExecutableFolder** — if set independently by the admin

3. **Default Evergreen runtime** — lowest

If both DowngradeVersion and BrowserExecutableFolder are independently configured, DowngradeVersion takes precedence and overrides the BrowserExecutableFolder redirect.


<!-- ------------------------------ -->
#### Core Design Principles

* **Enterprise IT Admin Driven:** Only IT administrators can initiate downgrade via Group Policy.  Developers and end users cannot trigger it.

* **Updater Service Compliance:** The Edge Updater downloads the required version if needed and continues normal updates for all other apps.

* **Automatic Expiry:** A downgraded version remains valid only as long as it is within the two most recent previous versions (N-1 or N-2).  Once two subsequent new major versions release beyond the downgraded version, the downgrade expires and the app automatically reverts to the latest runtime.  Microsoft recommends admins to remove the stale policies once it auto-expires.

* **Per-App Targeting:** Downgrade is applied per-application, not device-wide.  Each application must be individually specified.


<!-- ====================================================================== -->
## 2. How to Downgrade — Steps


<!-- ------------------------------ -->
#### Option 1: Group Policy (GPO) — Recommended for Enterprise

This is the recommended approach for enterprise environments.  Group Policy ensures centralized, auditable management across managed devices.

1. Open Group Policy Editor (`gpedit.msc`)

2. Navigate to: **Computer Configuration > Administrative Templates > Microsoft Edge WebView2**

3. Find "**Configure per-application WebView2 downgrade version**"

4. Enable the policy and add entries:

   * **Name:** Application identifier (AUMID or exe name, e.g., `teams.exe`)

   * **Value:** Target four part version number (e.g., `145`)


<!-- ------------------------------ -->
#### Option 2: Registry Editor (regedit)

For targeted configuration on individual machines.  Requires local administrator privileges.

1. Open `regedit` as Administrator

2. Navigate to: `HKEY_LOCAL_MACHINE\Software\Policies\Microsoft\Edge\WebView2`

3. Create a new key named `DowngradeVersion` (if it doesn't exist)

4. Inside the DowngradeVersion key, create a new **String Value (REG_SZ)**:

   * **Value name:** The AUMID or executable name (e.g., teams.exe)

   * **Value data:** The target major version number
      * Set the value to the target full version string using the 4-part numeric format (for example, 151.0.2178.0)
      * Admins can find the exact 4-part version number in the [Microsoft Edge release notes for Stable Channel](/deployedge/microsoft-edge-relnote-stable-channel)
      * **Example value:**
         o Name: teams.exe, Value: 151.0.2178.0
         o Name: outlook.exe, Value: 152.0.2164.0

5. Restart the WebView2 application for the policy to take effect

**Example:**

```
Key:   HKLM\Software\Policies\Microsoft\Edge\WebView2\DowngradeVersion
Value: teams.exe = "145"
Value: outlook.exe = "146"
```


<!-- ------------------------------ -->
#### Important Notes

* Only **HKLM** is supported (HKCU is ignored)

* Values that are Major-only values (for example, 151), wildcard values (for example, 151.*), and values that are not exact 4-part numeric versions are not supported.

* The WebView2 loader resolves the runtime installation directory only when a folder that exactly matches the configured full version exists (for example, 151.0.2178.0 must match 151.0.2178.0 exactly).  If no exact matching folder is found, the policy has no effect and the runtime defaults to the BrowserExecutableFolder policy or the Evergreen runtime (the default auto-updating runtime).

* The updater will **automatically download** the required version if it satisfies N-1/N-2 conditions — admins do not need to pre-stage version folders on disk

* No restart of the machine is needed, but the **WebView2 app must be restarted** and it may take upto 1 hr for the downgrade to take effect

* Policy application latency: Changes take effect within **1 hour** of deployment (aligned with Edge/WebView2 update task cadence).  To trigger a force update refer to step [here](#triggering-a-force-update).

* Downgrade policy enforcement overrides maintenance windows, extended update intervals, and cached last-check timestamps


<!-- ------------------------------ -->
#### Process Flow (How It Works Under the Hood)

1. Admin sets policy using Group Policy, specifying AppId and TargetVersion

2. Updater reads policy and validates that TargetVersion is within N-1 or N-2

3. Downloads the downgraded version if needed (side-by-side install)

4. Sets `BrowserExecutableFolder` policy for the target app to redirect it to the specified runtime version

5. Maintains mapping as long as the downgraded version stays within the supported range

6. Cleans up and reverts app to latest version when the pinned version falls outside the supported range or the policy is removed

📄 Note: If a downgrade policy is active but the target runtime version is not yet downloaded (e.g., due to network or disk constraints), applications will continue running on the currently available runtime until the downgraded bits are present.  Applications will NOT fail to launch solely because downgraded bits are pending download.


<!-- ====================================================================== -->
## 3. Limitations of Downgrade


<!-- ------------------------------ -->
#### Version Limitations

| Limitation | Detail |
|---|---|
| **Version range** | Only N-1 or N-2 relative to the current Evergreen version.  Downgrades beyond two versions are rejected. |
| **Version format** | Only major version numbers (digits only).  Full version strings, dots, or wildcards are invalid. |
| **Automatic expiry** | A downgraded version remains active only while it is within the two most recent previous versions.  Once two subsequent new versions release beyond the pinned version, the downgrade automatically expires and the app reverts to the latest runtime. |
| **Availability** | Feature available from version 150 onwards only. |


<!-- ------------------------------ -->
#### Scope Limitations

| Limitation | Detail |
|---|---|
| **Enterprise-only** | Not supported on consumer or unmanaged devices. |
| **Machine-level only** | Policy set at HKLM only.  HKCU is not supported.  No user-level policy or individual user control. |
| **Per-app targeting** | Cannot perform enterprise-wide downgrade across all apps.  Each app must be individually targeted. |
| **No developer control** | Only IT administrators can initiate downgrade.  Developers cannot trigger downgrade via APIs. |
| **No indefinite pinning** | The solution does NOT support long-term or permanent version pinning. |


<!-- ------------------------------ -->
#### Shared User Data Folder (UDF) Constraints

Applications may share a WebView2 User Data Folder (UDF) to reuse browser state.  Accessing the same UDF from different WebView2 runtime versions is **unsafe** and will result in failures:

**If App A is downgraded and App B shares the same UDF but is not downgraded:**

*  Both App A and App B will fail fast on launch

*  Admin must downgrade all apps sharing the same UDF to the same version

📄 Note: The number of apps sharing a UDF is currently very limited.  As far as we know the only apps that share a UDF today are the Office Suite apps: Excel, Word and PowerPoint.


<!-- ====================================================================== -->
## 4. Risks Associated with Downgrade


<!-- ------------------------------ -->
#### Security Risks

| Risk | Description |
|---|---|
| **Reintroduced vulnerabilities** | Downgrading reintroduces patched vulnerabilities that have been fixed in newer versions |
| **Compliance weakening** | Older versions may violate compliance in regulated environments |
| **Expanded attack surface** | Managing multiple downgraded versions increases the persistence of outdated clients |


<!-- ------------------------------ -->
#### Data Integrity Risks

| Risk | Description |
|---|---|
| **Storage corruption** | Downgrade can cause corruption or incompatibility if storage formats, schemas, or APIs have changed between versions (cookies, IndexedDB, Local Storage) |
| **Schema mismatches** | Unlike Edge browser which uses User Data Snapshots, WebView2 does not implement platform-level snapshotting |
| **User data loss** | Profile instability and potential data loss if storage formats are incompatible |


<!-- ------------------------------ -->
#### Application Compatibility Risks

| Risk | Description |
|---|---|
| **Feature dependency breaks** | Applications using newer WebView2 APIs or behaviours may fail or behave unpredictably after downgrade |
| **Performance regressions** | Older versions may introduce slower page loads, higher memory usage, and degraded experiences |
| **App malfunction** | Downgrades can cause applications to malfunction due to reliance on recently introduced features or rendering changes |


<!-- ------------------------------ -->
#### Operational Risks

| Risk | Description |
|---|---|
| **Version fragmentation** | Supporting downgrade at the app level can lead to version drift across apps on the same device |
| **Sedimentation** | Multiple older versions accumulate on devices over time, increasing complexity |
| **Increased disk usage** | An additional WebView2 runtime version is installed side-by-side with the current Evergreen version, consuming extra disk space on each device |
| **Coordination complexity** | Downgrade requires careful coordination between IT admins, application owners, and platform teams |

⚠️ Given these risks, Enterprise Downgrade should only be used as a last-resort recovery measure — when a critical regression is actively disrupting business operations and no other mitigation (hotfix, feature flag, update pause) can resolve the issue in a timely manner.  The downgrade buys time for the platform team to ship a proper fix; it is not a substitute for one.


<!-- ====================================================================== -->
## 5. Testing & Troubleshooting


<!-- ------------------------------ -->
#### Verifying Downgrade Applied

After setting the policy and restarting the target WebView2 application:


<!-- ---------- -->
###### 1. Check the versioned folder

*  Navigate to: `C:\Program Files (x86)\Microsoft\EdgeWebView\Application\`

*  Confirm a new folder appears matching the downgraded version (e.g., `145.x.xxxx.xx`)

*  The presence of this versioned folder indicates the updater has fetched and staged the downgraded runtime


<!-- ---------- -->
###### 2. Check registry policy

*  Confirm the `DowngradeVersion` key is set under: `HKLM\Software\Policies\Microsoft\Edge\WebView2\DowngradeVersion`
*  Verify entries match your configured AppId → TargetVersion


<!-- ---------- -->
###### 3. Check BrowserExecutableFolder redirect

*  The `BrowserExecutableFolder` policy should be set automatically to point the app to the downgraded runtime path


<!-- ------------------------------ -->
#### Triggering a Force Update

After setting the DowngradeVersion policy, the Edge Updater needs to download the target version.  By default, this happens within ~1 hour (aligned with the Edge/WebView2 update task cadence).  To trigger an immediate update, follow the below steps:

1. Open PowerShell as Administrator

2. Find the Edge Update task:

   `Get-ScheduledTask -TaskPath "\Microsoft\EdgeUpdate\*" | Select TaskName, TaskPath`

3. Run the task:

   `Start-ScheduledTask -TaskName "<task name from step 2>"`

4. Wait a few minutes for the download to complete

5. Restart the WebView2 application


<!-- ------------------------------ -->
#### Diagnostics Tools (For Deeper Troubleshooting)

The following tools are for **troubleshooting issues** — they are not required for standard verification:

| Tool | Purpose |
|---|---|
| **edge://webview2-internals** | View active WebView2 processes, runtime version in use |
| **ETW Tracing** | Capture low-level diagnostic logs for update/downgrade events |
| **Event Viewer** | Check Application logs for WebView2 update errors or policy enforcement failures |


<!-- ------------------------------ -->
#### Common Issues & Resolution

| Symptom | Likely Cause | Resolution |
|---|---|---|
| App still running on latest version | App not restarted | Restart the WebView2 application (not the machine) |
| Downgraded folder not appearing | Version outside N-1/N-2 range | Verify the target version is within the two most recent previous versions |
| App fails fast on launch (all apps sharing UDF) | Shared UDF version mismatch | Downgrade ALL apps using the same User Data Folder to the same version |
| Policy not taking effect | Incorrect key path or value format | Verify HKLM path, value name format (AUMID or exe), and 4 part value |
| Multiple apps impacted unexpectedly | Shared User Data Folder | Identify UDF sharing and ensure all affected apps are aligned |
| Downgrade auto-reverted unexpectedly | Pinned version fell outside supported range | Expected behavior — downgrade expires once the version is no longer within N-1/N-2 |


<!-- ====================================================================== -->
## 6. How to Revert from Downgrade


<!-- ------------------------------ -->
#### Option 1: Disable Group Policy (Recommended)

If GPO was used to configure downgrade:

1. Open Group Policy Editor (`gpedit.msc`)

2. Navigate to: **Computer Configuration > Administrative Templates > Microsoft Edge WebView2**

3. Set "**Configure per-application WebView2 downgrade version**" to **Disabled** or **Not Configured**

4. Restart the WebView2 application

5. The app will revert to the latest Evergreen runtime on next launch

📄 Important: Do NOT delete registry keys directly.  Always use GPO to disable the policy to ensure clean removal and avoid orphaned configuration.


<!-- ------------------------------ -->
#### Option 2: Remove Policy via Registry

If the policy was originally set directly via Registry (not recommended in production):

1. Open `regedit` as Administrator

2. Navigate to: `HKEY_LOCAL_MACHINE\Software\Policies\Microsoft\Edge\WebView2\DowngradeVersion`

3. Delete the specific value (e.g., `teams.exe`)

4. Restart the WebView2 application

⚠️ Caution: Direct registry manipulation should only be used if the original policy was set via Registry Editor.  If GPO was used, always revert using GPO to ensure consistency.


<!-- ------------------------------ -->
#### Option 3: Automatic Expiry

The downgrade expires automatically when the pinned version is no longer within the two most recent previous versions:

* **Trigger:** Two subsequent new Evergreen versions release beyond the pinned version

* **Behavior:** The updater automatically reverts applicable apps to the latest runtime.

* **Admin action required:** Remove the stale policy once it auto-expires.

* **Example:** If you downgrade to version 145 while 147 is current (145 is N-2), and then version 148 release, version 145 is now three versions behind → downgrade auto-expires


<!-- ------------------------------ -->
#### Post-Revert Behavior

| Action | What Happens |
|---|---|
| **Application restart** | App picks up the latest runtime on next launch |
| **BrowserExecutableFolder** | Automatically removed; app returns to default runtime path |
| **Downgraded runtime bits** | Cleaned up by the updater on a scheduled cadence |
| **User data** | Remains in place; no automatic data migration occurs |


<!-- ====================================================================== -->
## 7. Escalation & Contact

| Aspect | Value |
|---|---|
| **Area Path:** | Edge\Web Experience\WebView2\Distribution |
| **DL:** | [wv2addr@microsoft.com](mailto:wv2addr@microsoft.com) |

**Escalation Path:**

1. Enterprise Admin contacts Microsoft CSS

2. CSS troubleshoots using this guide

3. If unresolved → CSS escalates to WebView2 Platform team ICM

   Owning Service: Edge Browser customer incidents

   Owning Team: Edge WebView2
