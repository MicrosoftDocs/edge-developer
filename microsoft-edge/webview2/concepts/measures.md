---
title: Prevent antivirus/EDR/DLP tools from blocking or crashing WebView2-hosted apps
description: Prevent antivirus/EDR/DLP tools from blocking or crashing WebView2-hosted apps.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 02/17/2026
---
# Prevent antivirus/EDR/DLP tools from blocking or crashing WebView2-hosted apps
<!--
the draft doc: "Security Hardening measures impacting WebView2 V2.docx"
best practices for IT administrators re: Antivirus, DLP, and EDR tools, to ensure that they are not blocking WebView2 App functionality
-->

**Applies to:** Microsoft Edge WebView2 Runtime (Evergreen & Fixed), Windows desktop applications embedding WebView2, and Windows components using WebView2 for web-based UI.

**Also relevant to:** Non-Microsoft antivirus, EDR, DLP, and proxy/TLS interception products that may interfere with [WebView2](/microsoft-365-apps/deploy/webview2-install) processes.


<!-- ====================================================================== -->
## Overview

Enterprise security tools—AV, EDR, DLP, and TLS inspection—can disrupt WebView2’s [multi-process architecture](/microsoft-edge/webview2/concepts/process-model) by blocking child processes, tightening folder ACLs, or injecting DLLs.  When this happens, WebView2-hosted experiences may **blank-screen**, **freeze**, or **fail to initialize**.  For background, see [WebView2 process model](/microsoft-edge/webview2/concepts/process-model).

> [!NOTE]
> **Platform Boundary Disclaimer**
>
> WebView2 does not implement app-specific logic or bypass enterprise security policies.
>
> This guidance is for IT admins and security vendors to configure their environments without breaking WebView2’s multi-process architecture.


<!-- ====================================================================== -->
## Why WebView2 appears in enterprise workloads

Many **Microsoft 365 Apps** and **Windows features** use WebView2 to deliver modern, consistent UI.  For example, Outlook features rely on the WebView2 Runtime to function.  Windows Search uses WebView2 for parts of its UI. See [WebView2 for Microsoft 365 Apps](/microsoft-365-apps/deploy/webview2-install) and the WebView2 [documentation landing page](/microsoft-edge/webview2/landing/).


<!-- ====================================================================== -->
## Quick guidance for IT admins

1. Allowlist the WebView2 runtime [msedgewebview2.exe](https://developer.microsoft.com/en-us/microsoft-edge/webview2) and the app’s host executables (see [Teams guidance](/troubleshoot/microsoftteams/teams-administration/include-exclude-teams-from-antivirus-dlp)).
1. Preserve default ACLs on WebView2 runtime folders and the app’s [User Data Folder](/microsoft-edge/webview2/concepts/user-data-folder) (LowIL/AppContainer must read/execute runtime and write User Data Folder (UDF)). OS‑managed system locations are handled entirely by Windows and must not be modified.
1. Do not inject DLLs into WebView2 processes; use [Edge security connectors](/deployedge/microsoft-edge-connectors-overview) instead.
1. Permit child processes (renderer/GPU/network/Crashpad) and don’t terminate them; see [process events](/microsoft-edge/webview2/concepts/process-related-events) and [crash diagnostics](https://github.com/MicrosoftEdge/WebView2Feedback/blob/main/diagnostics/crash.md).
1. Tune scanning with scoped exclusions for the runtime directory and UDF; avoid broad/global exclusions.
1. Align TLS policies with Chromium; trust internal proxy CAs and allow essential login/CDN endpoints.


<!-- ====================================================================== -->
## Symptoms

1. **Blank/white embedded window**; WebView2 processes absent in Task Manager ([process model](/microsoft-edge/webview2/concepts/process-model)).
1. **Initialization error** (for example, E_FAIL), app content never loads ([enterprise management](/microsoft-edge/webview2/concepts/enterprise)).
1. **Sign-in loops / state not persisted** when [UDF](/microsoft-edge/webview2/concepts/user-data-folder) writes are blocked (CFA/DLP).
1. **TLS errors** (for example, `ERR_CERT_*`) and login redirect failures under interception.
1. **Crash/Freeze** tied to DLL injection or blocked renderer/GPU/Crashpad ([process events](/microsoft-edge/webview2/concepts/process-related-events), [crash diagnostics](https://github.com/MicrosoftEdge/WebView2Feedback/blob/main/diagnostics/crash.md)).
1. **Slow startup** due to deep real-time scanning of runtime/UDF ([enterprise guidance](/microsoft-edge/webview2/concepts/enterprise)).


<!-- ====================================================================== -->
## Common causes and how to fix them

| Cause | Typical symptoms | Action for admins/vendors |
|---|---|---|
| **Runtime initialization blocked (WDAC/AppLocker deny or hardened ACLs)** | Immediate init error, no child processes, blank view | Allowlist [msedgewebview2.exe](https://developer.microsoft.com/en-us/microsoft-edge/webview2) and host executables (see [Teams allowlisting](/troubleshoot/microsoftteams/teams-administration/include-exclude-teams-from-antivirus-dlp)). Use [publisher rules](/windows/security/application-security/application-control/app-control-for-business/applocker/understanding-the-publisher-rule-condition-in-applocker).  Restore default ACLs per [enterprise management](/microsoft-edge/webview2/concepts/enterprise). |
| **Child process spawning blocked or hooked** | Main process starts; content never loads; freezes | Permit renderer/GPU/network/**Crashpad**; avoid DLL injection. Prefer [Edge connectors](/deployedge/microsoft-edge-connectors-overview). See [process events](/microsoft-edge/webview2/concepts/process-related-events) and [crash diagnostics](https://github.com/MicrosoftEdge/WebView2Feedback/blob/main/diagnostics/crash.md). |
| **UDF writes blocked (Controlled Folder Access / DLP)** | Sign-in loops; settings don’t persist; blank initial page | Allow writes to the app’s [User Data Folder](/microsoft-edge/webview2/concepts/user-data-folder); use per app CFA/DLP exceptions.  Avoid placing the WebView2 user data folder on network shares, and ensure DLP policies do not misclassify normal browser data (cookies, cache, localStorage) as exfiltration attempts. |
| **Network/TLS inspection misaligned** | ERR_CERT_*, login loops, service workers failing | Install the enterprise proxy’s root CA so WebView2 trusts intercepted HTTPS traffic, and ensure authentication and CDN endpoints used by your app are explicitly allowed. Validate authentication/CDN endpoints per [enterprise management](/microsoft-edge/webview2/concepts/enterprise). |
| **ACL / Integrity level mismatch** | Works only at higher privilege; fails for UWP/AppContainer | Keep default **ALL APPLICATION PACKAGES** permissions on runtime directories; LowIL must **read/execute**.  Guidance: [enterprise management](/microsoft-edge/webview2/concepts/enterprise). This includes the Evergreen runtime path under `C:\Program Files (x86)\Microsoft\EdgeWebView\Application\<version>\`, which must retain ALL APPLICATION PACKAGES read/execute permissions.  The System32based<!-- todo --> runtime is owned and serviced by Windows. It must not be modified, replaced, quarantined, or cleaned by AV/EDR/DLP tools. Its default ACLs must be preserved exactly as shipped. |
| **Aggressive real-time scanning** | Slow startup, transient white screen on navigation | Configure **scoped exclusions** for runtime binaries and [UDF](/microsoft-edge/webview2/concepts/user-data-folder); avoid broad exclusions. See [enterprise guidance](/microsoft-edge/webview2/concepts/enterprise). |


<!-- ====================================================================== -->
## Where to check these symptoms

Admins can use standard Windows tools to quickly validate whether the listed symptoms are caused by WebView2 being blocked, failing to initialize, or crashing:

* **Task Manager**
   * Under the host application, verify that **msedgewebview2.exe** and its **child processes** (renderer, GPU, network, Crashpad) appear.
   * **If WebView2 child processes do not appear at all**, the runtime or child process spawning is blocked (WDAC/EDR/DLL injection).
   * **If renderer/GPU processes appear briefly and disappear**, EDR/AV hooking or DLL injection may be terminating them.

* **Event Viewer** (Windows Logs → Application / System).  Look for:
   * App or WebView2 initialization failures
   * WDAC/AppLocker **blocked execution** events
   * CFA/DLP **file write denial** events affecting the User Data Folder
   * TLS, certificate, or network policy failures affecting login flows

* **Security Logs**
   * CFA (Controlled Folder Access) blocks
   * DLP policy blocks
   * AppLocker / Application Control denials - These typically map to symptoms like sign-in loops, blank screens, or settings not persisting.

* Reliability Monitor
   * Identify **repeated crashes** of renderer, GPU, or Crashpad processes.  These correlate with freeze/blank screen problems and runtime instability.


<!-- ====================================================================== -->
## Required executables and folders

* **WebView2 runtime:** [msedgewebview2.exe](https://developer.microsoft.com/en-us/microsoft-edge/webview2)

* **Evergreen runtime folder (typical):** `C:\Program Files (x86)\Microsoft\EdgeWebView\Application\<version>\` — versioned subfolders updated via Edge servicing ([Evergreen vs Fixed](/microsoft-edge/webview2/concepts/evergreen-vs-fixed-version), [distribution](/microsoft-edge/webview2/concepts/distribution)).<!-- todo: vs Fixed -->

* **System provided runtime:** Some Windows components may load WebView2 runtime binaries directly from `C:\Windows\System32`.  These OS-owned binaries:

   * **must not be modified, quarantined, or replaced**,

   * may not match the Evergreen runtime version used by desktop apps,

   * are serviced exclusively through **Windows Update**, not WebView2 installers.

* **App data:** Web content state lives in the app’s [User Data Folder](/microsoft-edge/webview2/concepts/user-data-folder) (cookies, cache, local storage).


<!-- ====================================================================== -->
## Performance impact

Extensive scanning or hooking into processes can slow down startup and page loading times. Instead, use **scoped exclusions** for runtime binaries and **UDF** rather than opting for wide-ranging, high-risk disables.  Treat child processes—such as renderer, GPU, network, and **Crashpad**—like browser processes; avoid terminating them.** It's essential not to end Crashpad and GPU processes since they're crucial for both stability and rendering.  For additional information, refer to the [enterprise guidance](/microsoft-edge/webview2/concepts/enterprise) and [process events](/microsoft-edge/webview2/concepts/process-related-events).


<!-- ====================================================================== -->
## Admin checklist

* **Allowlist** [msedgewebview2.exe](https://developer.microsoft.com/en-us/microsoft-edge/webview2) and host executables; prefer [publisher rules](/windows/security/application-security/application-control/app-control-for-business/applocker/understanding-the-publisher-rule-condition-in-applocker).
* **Preserve ACLs/IL** on runtime folders; Low IL must **read/execute** ([enterprise management](/microsoft-edge/webview2/concepts/enterprise)).
* **Permit child processes**; avoid DLL injection; use [Edge connectors](/deployedge/microsoft-edge-connectors-overview) and review [process events](/microsoft-edge/webview2/concepts/process-related-events).
* **Enable UDF writes** (per app CFA/DLP exceptions) for the [User Data Folder](/microsoft-edge/webview2/concepts/user-data-folder).
* **Align TLS/Proxy** (install trusted CAs; allow required endpoints) as for Chromium.
* **Allow Evergreen updates**; don’t block servicing ([enterprise management](/microsoft-edge/webview2/concepts/enterprise), [evergreen vs fixed](/microsoft-edge/webview2/concepts/evergreen-vs-fixed-version)).<!-- todo: vs Fixed -->
* **Policy hygiene:** Do not apply Edge browser–only group policies assuming they affect WebView2 — most do not, and unsupported policies can break WebView2 features.


<!-- ====================================================================== -->
## Vendor guidance (AV/EDR/DLP providers)

* Recognize and trust [msedgewebview2.exe](https://developer.microsoft.com/en-us/microsoft-edge/webview2) by signature; allow child processes.
* Avoid DLL injection; prefer [Edge security connectors](/deployedge/microsoft-edge-connectors-overview) for DLP/reporting/device trust.  DLL injection into renderer/GPU processes breaks Chromium’s sandboxing model and commonly causes renderer crashes; vendors should use supported Edge security connectors instead of low-level hooks.
* Keep runtime folder access and child process creation **unrestricted**; permit **Crashpad** (see [process events](/microsoft-edge/webview2/concepts/process-related-events) and [crash diagnostics](https://github.com/MicrosoftEdge/WebView2Feedback/blob/main/diagnostics/crash.md)).
* Do not block Evergreen runtime **updates** ([enterprise management](/microsoft-edge/webview2/concepts/enterprise)).


<!-- ====================================================================== -->
## Diagnostics

Crash reports are saved under the app’s **UDF** at `EBWebView\Crashpad\reports\`. Use [crash diagnostics](https://github.com/MicrosoftEdge/WebView2Feedback/blob/main/diagnostics/crash.md) together with [process events](/microsoft-edge/webview2/concepts/process-related-events) to triage repeated failures.
