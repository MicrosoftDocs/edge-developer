---
title: Prevent security tools from blocking or crashing WebView2-hosted apps
description: Prevent antivirus, Endpoint Detection and Response (EDR), or Data Loss Prevention (DLP) tools from blocking or crashing WebView2-hosted apps.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 02/17/2026
---
# Prevent security tools from blocking or crashing WebView2-hosted apps
<!-- compare title:
* [Prevent antivirus and DLP tools from blocking or crashing Microsoft Teams](/troubleshoot/microsoftteams/teams-administration/include-exclude-teams-from-antivirus-dlp)
-->

<!-- todo:
use h4's
   uniform doc design all sections
1. rewrite/reformat - done
2. check logic against draft doc
3. finalize wording & formatting
-->
<!-- todo: global:
change from "vendors" to "you"?  
todo: define more, audience in terms of "vendors", at start.  can we say always you?  define 'vendors'; clarify the audiences
-->

These are best practices for IT administrators and security vendors, to ensure that security tools are not blocking WebView2 App functionality or crashing WebView2-hosted apps.

IT admins and security vendors should use the practices and procedures below to configure their environments without breaking WebView2's multi-process architecture.

Such security tools include:

* Antivirus tools.
* Data Loss Prevention (DLP) tools.
* Endpoint Detection and Response (EDR) tools.


**Detailed contents:**
* [Applicability](#applicability)
* [Overview](#overview)
   * [Platform boundary disclaimer](#platform-boundary-disclaimer)
* [Why WebView2 appears in enterprise workloads](#why-webview2-appears-in-enterprise-workloads)
* [Quick guidance for IT admins](#quick-guidance-for-it-admins)
   * [Allowlist WebView2 Runtime and app's host executables](#allowlist-webview2-runtime-and-apps-host-executables)
   * [Preserve default ACLs on Runtime folders and app's UDF](#preserve-default-acls-on-runtime-folders-and-apps-udf)
   * [Don't inject DLLs into WebView2 processes](#dont-inject-dlls-into-webview2-processes)
   * [Permit child processes (renderer, Graphics Processing Unit (GPU), network, Crashpad)](#permit-child-processes-renderer-graphics-processing-unit-gpu-network-crashpad)
   * [Avoid broad, global exclusions](#avoid-broad-global-exclusions)
   * [Trust internal proxy Certificate Authorities (CAs), and allow essential sign-in or Content Delivery Network (CDN) endpoints](#trust-internal-proxy-certificate-authorities-cas-and-allow-essential-sign-in-or-content-delivery-network-cdn-endpoints)
* [Symptoms](#symptoms)
   * [1. Blank or white embedded window](#1-blank-or-white-embedded-window)
   * [2. Initialization error](#2-initialization-error)
   * [3. Sign-in loops; state not persisted](#3-sign-in-loops-state-not-persisted)
   * [4. Transport Layer Security (TLS) errors](#4-transport-layer-security-tls-errors)
   * [5. Crashes or freezing](#5-crashes-or-freezing)
   * [6. Slow startup](#6-slow-startup)
* [Common causes and how to fix them](#common-causes-and-how-to-fix-them)
   * [Runtime initialization blocked (Windows Defender Application Control (WDAC) or AppLocker deny or hardened Access Control Lists (ACLs))](#runtime-initialization-blocked-windows-defender-application-control-wdac-or-applocker-deny-or-hardened-access-control-lists-acls)
      * [Symptoms](#symptoms-1)
      * [Solutions](#solutions)
   * [Spawning of child processes is blocked or hooked](#spawning-of-child-processes-is-blocked-or-hooked)
      * [Symptoms](#symptoms-2)
      * [Solutions](#solutions-1)
   * [User data folder (UDF) writes are blocked](#user-data-folder-udf-writes-are-blocked)
      * [Symptoms](#symptoms-3)
      * [Solutions](#solutions-2)
   * [Network inspection vs. Transport Layer Security (TLS) inspection is misaligned](#network-inspection-vs-transport-layer-security-tls-inspection-is-misaligned)
      * [Symptoms](#symptoms-4)
      * [Solutions](#solutions-3)
   * [An Access Control List (ACL) mismatch with the Integrity level](#an-access-control-list-acl-mismatch-with-the-integrity-level)
      * [Symptoms](#symptoms-5)
      * [Solutions](#solutions-4)
   * [Aggressive real-time scanning](#aggressive-real-time-scanning)
      * [Symptoms](#symptoms-6)
      * [Solutions](#solutions-5)
* [Tools in which to check for the symptoms](#tools-in-which-to-check-for-the-symptoms)
   * [Task Manager](#task-manager)
   * [Event Viewer](#event-viewer)
   * [Security logs](#security-logs)
   * [Reliability Monitor](#reliability-monitor)
* [Required executables and folders](#required-executables-and-folders)
   * [WebView2 Runtime](#webview2-runtime)
   * [Evergreen WebView2 Runtime folder](#evergreen-webview2-runtime-folder)
   * [System-provided WebView2 Runtime binary files](#system-provided-webview2-runtime-binary-files)
   * [App data](#app-data)
* [Performance impact](#performance-impact)
* [Checklist for IT admins](#checklist-for-it-admins)
   * [Allowlist msedgewebview2.exe and host executables](#allowlist-msedgewebview2exe-and-host-executables)
   * [Preserve Access Control Lists (ACLs) and Low IL (LowIL)](#preserve-access-control-lists-acls-and-low-il-lowil)
   * [Permit child processes](#permit-child-processes)
   * [Enable writes to the user data folder (UDF)](#enable-writes-to-the-user-data-folder-udf)
   * [Align Transport Layer Security (TLS) and Proxy](#align-transport-layer-security-tls-and-proxy)
   * [Allow updates of the Evergreen WebView2 Runtime](#allow-updates-of-the-evergreen-webview2-runtime)
   * [Policy hygiene](#policy-hygiene)
* [Security vendor guidance for Antivirus (AV), Endpoint Detection and Response (EDR), or Data Loss Prevention (DLP) providers](#security-vendor-guidance-for-antivirus-av-endpoint-detection-and-response-edr-or-data-loss-prevention-dlp-providers)
   * [Trust the WebView2 Runtime by signature](#trust-the-webview2-runtime-by-signature)
   * [Use Edge security connectors instead of dynamic-link library (DLL) injection](#use-edge-security-connectors-instead-of-dynamic-link-library-dll-injection)
   * [Runtime folder access and child process creation](#runtime-folder-access-and-child-process-creation)
   * [Don't block Runtime updates](#dont-block-runtime-updates)
* [Diagnostics, crash reports, and process events](#diagnostics-crash-reports-and-process-events)
* [See also](#see-also)


<!-- ====================================================================== -->
## Applicability

This article applies to the following:

* The Microsoft Edge WebView2 Runtime (Evergreen and fixed-version).

* Windows desktop applications that embed the WebView2 control.

* Windows components that use WebView2 for the web-based portion of the UI.

* Non-Microsoft antivirus, Endpoint Detection and Response (EDR), Data Loss Prevention (DLP), and proxy or Transport Layer Security (TLS) interception products that might interfere with WebView2 processes.

See:
* [Microsoft Edge WebView2 and Microsoft 365 Apps](/microsoft-365-apps/deploy/webview2-install)


<!-- ====================================================================== -->
## Overview

Enterprise security tools include:

* Antivirus (AV).

* Endpoint Detection and Response (EDR).

* Data Loss Prevention (DLP).

* Transport Layer Security (TLS) inspection.

Enterprise security tools can disrupt WebView2's multi-process architecture by:

* Blocking child processes.

* Tightening folder Access Control Lists (ACLs).

* Injecting dynamic-link libraries (DLLs).

When such disruption occurs, WebView2-hosted experiences might blank-screen, freeze, or fail to initialize.

See:
* [Process model for WebView2 apps](./process-model.md)


<!-- ------------------------------ -->
#### Platform boundary disclaimer

WebView2 doesn't implement app-specific logic.

WebView2 doesn't bypass enterprise security policies.


<!-- ====================================================================== -->
## Why WebView2 appears in enterprise workloads

Many **Microsoft 365 Apps** and **Windows features** use WebView2 to deliver a modern, consistent UI.

For example, Outlook features rely on the WebView2 Runtime to function.

Windows Search uses WebView2 for parts of its UI.

See:
* [WebView2 documentation](../landing/index.yml)
* [WebView2 for Microsoft 365 Apps](/microsoft-365-apps/deploy/webview2-install)


<!-- ====================================================================== -->
## Quick guidance for IT admins<!-- todo: flatten low-value heading -->
<!--
## Best practices
## Best practices for IT admins
-->
<!-- todo: combine section with "Checklist for IT admins" -->


<!-- ------------------------------ -->
#### Allowlist WebView2 Runtime and app's host executables

Allowlist the WebView2 Runtime (`msedgewebview2.exe`) and the app's host executables.

See:
* [Prevent antivirus and DLP tools from blocking or crashing Microsoft Teams](/troubleshoot/microsoftteams/teams-administration/include-exclude-teams-from-antivirus-dlp)


<!-- ------------------------------ -->
#### Preserve default ACLs on Runtime folders and app's UDF

Preserve default Access Control Lists (ACLs) on WebView2 Runtime folders and the app's user data folder.

The `LowIL/AppContainer`<!-- todo: clarify LowIL, clarify AppContainer --> must Read/Execute the WebView2 Runtime and write to the user data folder (UDF).
<!-- Low integrity level process (LowIL) -->

System locations that are managed by the operating system (OS) are handled entirely by Windows, and must not be modified.

See:
* [Manage user data folders](./user-data-folder.md)


<!-- ------------------------------ -->
#### Don't inject DLLs into WebView2 processes

Don't inject dynamic-link libraries (DLLs) into WebView2 processes.  Use Microsoft Edge security connectors instead.

See:
* [Microsoft Edge for Business Security Connectors](/deployedge/microsoft-edge-connectors-overview)


<!-- ------------------------------ -->
#### Permit child processes (renderer, Graphics Processing Unit (GPU), network, Crashpad)

Permit child processes and don't terminate them.  The child processes include:

* Renderer
* Graphics Processing Unit (GPU)
* Network
* Crashpad

See:
* [Handling process-related events in WebView2](./process-related-events.md)
* [Crash Dumps](https://github.com/MicrosoftEdge/WebView2Feedback/blob/main/diagnostics/crash.md) - WebView2Feedback repo.


<!-- ------------------------------ -->
#### Avoid broad, global exclusions

Tune scanning with scoped exclusions for the WebView2 Runtime directory and user data folder (UDF).

Avoid broad, global exclusions.


<!-- ------------------------------ -->
#### Trust internal proxy Certificate Authorities (CAs), and allow essential sign-in or Content Delivery Network (CDN) endpoints

Align Transport Layer Security (TLS) policies with Chromium:

* Trust internal proxy Certificate Authorities (CAs).

* Allow essential sign-in endpoints.

* Allow essential Content Delivery Network (CDN) endpoints.


<!-- ====================================================================== -->
## Symptoms<!-- todo: flatten low-value heading -->

The following symptoms are important.<!-- todo: real lead-in -->


<!-- ------------------------------ -->
#### 1. Blank or white embedded window

If there is a blank or white embedded window, make sure WebView2 processes are present in Task Manager process model.

See:
* [Process model for WebView2 apps](./process-model.md)


<!-- ------------------------------ -->
#### 2. Initialization error

There might be an initialization error, such as `E_FAIL`.  In this case, app content never loads enterprise management.<!-- todo: clarify, standardize wording -->

See:
* [Enterprise management of WebView2 Runtimes](./enterprise.md)


<!-- ------------------------------ -->
#### 3. Sign-in loops; state not persisted

In the case of a sign-in loop, state is not persisted when user data folder (UDF) writes are blocked.

* Controlled Folder Access (CFA).<!-- todo: lead-in for list -->

* Data Loss Prevention (DLP).

See:
* [Manage user data folders](./user-data-folder.md)


<!-- ------------------------------ -->
#### 4. Transport Layer Security (TLS) errors

Transport Layer Security (TLS) errors (such as `ERR_CERT_*`)

Along with login redirect failures under interception.<!-- todo: clarify "under" -->


<!-- ------------------------------ -->
#### 5. Crashes or freezing

Crash or freeze tied to dynamic-link library (DLL) injection or blocked renderer, Graphics Processing Unit (GPU), or Crashpad.

See:
* [Handling process-related events in WebView2](./process-related-events.md)
* [Crash Dumps](https://github.com/MicrosoftEdge/WebView2Feedback/blob/main/diagnostics/crash.md) - WebView2Feedback repo.


<!-- ------------------------------ -->
#### 6. Slow startup

Slow startup due to deep real-time scanning of the WebView2 Runtime and the user data folder (UDF).

See:
* [Enterprise management of WebView2 Runtimes](./enterprise.md)


<!-- ====================================================================== -->
## Common causes and how to fix them<!-- todo: flatten low-value heading -->


<!-- ------------------------------ -->
#### Runtime initialization blocked (Windows Defender Application Control (WDAC) or AppLocker deny or hardened Access Control Lists (ACLs))

Runtime initialization is blocked, for any of the following:

* Windows Defender Application Control (WDAC).

* AppLocker deny or hardened<!-- todo: clarify "deny or hardened --> Access Control Lists (ACLs).


<!-- ---------- -->
###### Symptoms

* Immediate init<!-- todo: initialization? --> error.

* There are no child processes.

* The view is blank.


<!-- ---------- -->
###### Solutions

Allowlist the WebView2 Runtime (`msedgewebview2.exe`) and host executables.

See:
* [Prevent antivirus and DLP tools from blocking or crashing Microsoft Teams](/troubleshoot/microsoftteams/teams-administration/include-exclude-teams-from-antivirus-dlp)

Use publisher rules.

See:
* [Understanding the publisher rule condition in AppLocker](/windows/security/application-security/application-control/app-control-for-business/applocker/understanding-the-publisher-rule-condition-in-applocker)


Restore default Access Control Lists (ACLs).

See:
* [Enterprise management of WebView2 Runtimes](./enterprise.md)

See:
* [Prevent antivirus and DLP tools from blocking or crashing Microsoft Teams](/troubleshoot/microsoftteams/teams-administration/include-exclude-teams-from-antivirus-dlp)
* [Understanding the publisher rule condition in AppLocker](/windows/security/application-security/application-control/app-control-for-business/applocker/understanding-the-publisher-rule-condition-in-applocker)
* [Enterprise management of WebView2 Runtimes](./enterprise.md)


<!-- ------------------------------ -->
#### Spawning of child processes is blocked or hooked


<!-- ---------- -->
###### Symptoms

The main process starts, but content never loads, and the app freezes.


<!-- ---------- -->
###### Solutions

Permit renderer<!-- todo: what renderer? clarify -->, Graphics Processing Unit (GPU), network<!-- todo: what network? clarify -->, and Crashpad.

Avoid dynamic-link library (DLL) injection.

Prefer Edge connectors.

See:
* [Microsoft Edge for Business Security Connectors](/deployedge/microsoft-edge-connectors-overview)
* [Handling process-related events in WebView2](./process-related-events.md)
* [Crash Dumps](https://github.com/MicrosoftEdge/WebView2Feedback/blob/main/diagnostics/crash.md) - WebView2Feedback repo.


<!-- ------------------------------ -->
#### User data folder (UDF) writes are blocked

* Controlled Folder Access<!-- todo: lead-in -->

* Data Loss Prevention (DLP)


<!-- ---------- -->
###### Symptoms

Sign-in loops; settings don't persist; blank initial page.


<!-- ---------- -->
###### Solutions

Allow writes to the app's user data folder; use per-app Controlled Folder Access (CFA) exceptions or Data Loss Prevention (DLP) exceptions.

Avoid placing the WebView2 user data folder (UDF) on network shares, and ensure Data Loss Prevention (DLP) policies do not misclassify normal browser data (such as cookies, cache, or local storage) as exfiltration attempts.

_Exfiltration_ is the unauthorized transfer of data from a system, network, or cloud environment to an external destination without permission.

See:
* [Manage user data folders](./user-data-folder.md)


<!-- ------------------------------ -->
#### Network inspection vs. Transport Layer Security (TLS) inspection is misaligned


<!-- ---------- -->
###### Symptoms

* `ERR_CERT_*`<!-- todo: elaborate -->

* Sign-in loops (login loops).

* Service workers failing.


<!-- ---------- -->
###### Solutions

Install the enterprise proxy's root Certificate Authority (CA) so that WebView2 trusts intercepted HTTPS traffic.

Ensure that authentication endpoints and Content Delivery Network (CDN) endpoints that are used by the WebView2 app are explicitly allowed.

Validate authentication endpoints and Content Delivery Network (CDN) endpoints.

See:
* [Enterprise management of WebView2 Runtimes](./enterprise.md)


<!-- ------------------------------ -->
#### An Access Control List (ACL) mismatch with the Integrity level


<!-- ---------- -->
###### Symptoms

The App works<!-- todo: what works? --> only at higher privilege; fails<!-- todo: what fails? --> for UWP/AppContainer<!-- todo: is this one item, or two items? -->.

Universal Windows Platform (UWP)<!-- todo: use above? -->


<!-- ---------- -->
###### Solutions


Keep default `ALL APPLICATION PACKAGES` permissions on WebView2 Runtime directories; a Low integrity level process (LowIL) must **read/execute**.

See:
* [Enterprise management of WebView2 Runtimes](./enterprise.md)

This includes the Evergreen WebView2 Runtime path under `C:\Program Files (x86)\Microsoft\EdgeWebView\Application\<version>\`, which must retain `ALL APPLICATION PACKAGES` Read/Execute permissions.

<!-- todo: clarify, break up; the modifier is confusing: the *System32-based*, as opposed to a non-System32-based Runtime?  or make sep aside that the whatever Runtime is s32-based? -->

The System32-based WebView2<!-- todo: global: delete "wv2"? --> Runtime is owned and serviced by Windows.

The System32-based WebView2<!-- todo: review --> Runtime must not be modified, replaced, quarantined, or cleaned by Antivirus (AV), Endpoint Detection and Response (EDR), or Data Loss Prevention (DLP) tools.

The System32-based WebView2<!-- todo: review --> Runtime's default Access Control Lists (ACLs) must be preserved exactly as shipped.


<!-- ------------------------------ -->
#### Aggressive real-time scanning


<!-- ---------- -->
###### Symptoms

* Slow startup.

* A transient white screen, when perform a navigation.


<!-- ---------- -->
###### Solutions

Configure **scoped exclusions** for WebView2 Runtime binaries and user data folder (UDF); avoid broad exclusions.

See:
* [Enterprise management of WebView2 Runtimes](./enterprise.md)
* [Manage user data folders](./user-data-folder.md)


<!-- ====================================================================== -->
## Tools in which to check for the symptoms

Admins can use standard Windows tools to quickly validate whether the listed symptoms are caused by WebView2 being blocked, failing to initialize, or crashing.

These tools include:
* Task Manager.
* Event Viewer.
* Security logs.
* Reliability Monitor.

Details are below.


<!-- ------------------------------ -->
#### Task Manager

Under the host application, verify that the WebView2 Runtime (`msedgewebview2.exe`) and its child processes appear.

The child processes include:

* Renderer.
* Graphics Processing Unit (GPU).
* Network.
* Crashpad.

If no WebView2 child processes appear, the WebView2 Runtime or child process spawning is blocked: 

* Windows Defender Application Control (WDAC) injection.<!-- todo: what's this list? need lead-in/transition -->

* Endpoint Detection and Response (EDR) injection.

* Dynamic-link library (DLL) injection.

If renderer (Graphics Processing Unit (GPU)) processes appear briefly and then disappear, the following might be terminating the renderer (Graphics Processing Unit (GPU)) processes:

* Endpoint Detection and Response (EDR) hooking.

* Antivirus (AV) hooking.

* Dynamic-link library (DLL) injection.


<!-- ------------------------------ -->
#### Event Viewer

Event Viewer (Windows Logs > Application / System).

Look for:

* App or WebView2 initialization failures.

* Windows Defender Application Control (WDAC) or AppLocker _blocked execution_ events.

* Controlled Folder Access (CFA) or Data Loss Prevention (DLP) _file write denial_ events that affect the user data folder (UDF).

* Transport Layer Security (TLS), certificate, or network policy failures that affect sign-in flows.


<!-- ------------------------------ -->
#### Security logs

* Controlled Folder Access (CFA) blocks.

* Data Loss Prevention (DLP) policy blocks.

* AppLocker or Application Control denials.  These typically map to symptoms like sign-in loops, blank screens, or settings not persisting.


<!-- ------------------------------ -->
#### Reliability Monitor

Identify repeated crashes of renderer, Graphics Processing Unit (GPU), or Crashpad processes.

These process crashes are correlated with:

* Freezing problems.

* Blank screen problems.

* WebView2 Runtime instability.


<!-- ====================================================================== -->
## Required executables and folders

Overview list:
* WebView2 Runtime
* Evergreen WebView2 Runtime folder
* System-provided WebView2 Runtime binary files
* App data


<!-- ------------------------------ -->
#### WebView2 Runtime

To obtain the WebView2 Runtime (`msedgewebview2.exe`), see:
* [Microsoft Edge WebView2](https://developer.microsoft.com/microsoft-edge/webview2) at Developer.microsoft.com.


<!-- ------------------------------ -->
#### Evergreen WebView2 Runtime folder

Typical path of versioned subfolders: `C:\Program Files (x86)\Microsoft\EdgeWebView\Application\<version>\`

These are versioned subfolders that are updated via Microsoft Edge servicing.

See:
* [Evergreen vs. fixed version of the WebView2 Runtime](./evergreen-vs-fixed-version.md)
* [Distribute your app and the WebView2 Runtime](./distribution.md)


<!-- ------------------------------ -->
#### System-provided WebView2 Runtime binary files

Some Windows components might load WebView2 Runtime binary files directly from `C:\Windows\System32`.  These binary files are owned by the operating system.

These OS-owned WebView2 Runtime binary files:

* Must not be modified, quarantined, or replaced.

* Might not match the Evergreen WebView2 Runtime version that's used by desktop apps.

* Are serviced exclusively through Windows Update, not through WebView2 installers.


<!-- ------------------------------ -->
#### App data

Web content state lives in the app's user data folder.  Web content state includes:

* Cookies.
* Cache.
* Local storage.

See:
* [Manage user data folders](./user-data-folder.md)


<!-- ====================================================================== -->
## Performance impact

Extensive scanning or hooking into processes can slow down startup and page loading times.

Instead, use scoped exclusions for WebView2<!-- todo: review --> Runtime binaries and user data folder (UDF), rather than opting for wide-ranging, high-risk disables.

Treat child processes like browser processes; avoid terminating such child processes.

Child processes include:
* Renderer.
* Graphics Processing Unit (GPU).
* Network.
* Crashpad.

Do not end Crashpad or Graphics Processing Unit (GPU) processes, because they're crucial for stability and rendering.

See:
* [Enterprise management of WebView2 Runtimes](./enterprise.md)
* [Handling process-related events in WebView2](./process-related-events.md)


<!-- ====================================================================== -->
## Checklist for IT admins<!-- todo: flatten low-value heading -->
<!-- merge with "Quick guidance for IT admins" -->

As an IT admin, use the following practices.


<!-- ------------------------------ -->
#### Allowlist `msedgewebview2.exe` and host executables

Allowlist the WebView2 Runtime (`msedgewebview2.exe`) and host executables.

Prefer publisher rules.

See:
* [Understanding the publisher rule condition in AppLocker](/windows/security/application-security/application-control/app-control-for-business/applocker/understanding-the-publisher-rule-condition-in-applocker)


<!-- ------------------------------ -->
#### Preserve Access Control Lists (ACLs) and Low IL (LowIL)

Preserve Access Control Lists (ACLs) and IL<!-- todo: LowIL? --> on WebView2 Runtime folders.<!-- Low integrity level process (LowIL) -->

A Low integrity level process (LowIL) must Read/Execute enterprise management<!-- todo: clarify -->.

See:
* [Enterprise management of WebView2 Runtimes](./enterprise.md)


<!-- ------------------------------ -->
#### Permit child processes

Permit child processes.

Avoid dynamic-link library (DLL) injection.

Use Microsoft Edge connectors.

See:
* [Handling process-related events in WebView2](./process-related-events.md)
* [Microsoft Edge for Business Security Connectors](/deployedge/microsoft-edge-connectors-overview)


<!-- ------------------------------ -->
#### Enable writes to the user data folder (UDF)

Enable user data folder (UDF) writes for the user data folder (UDF).

These UDF writes can be from:
* Per-app Controlled Folder Access (CFA) exceptions.
* Per-app Data Loss Prevention (DLP) exceptions.

See:
* [Manage user data folders](./user-data-folder.md)


<!-- ------------------------------ -->
#### Align Transport Layer Security (TLS) and Proxy<!-- todo: clarify -->

Align Transport Layer Security (TLS) and Proxy<!-- todo: clarify --> as for Chromium.

Install trusted Certificate Authorities (CAs).

Allow required endpoints.


<!-- ------------------------------ -->
#### Allow updates of the Evergreen WebView2 Runtime

Allow updates of the Evergreen WebView2 Runtime; don't block servicing.

See:
* [Enterprise management of WebView2 Runtimes](./enterprise.md)
* [Evergreen vs. fixed version of the WebView2 Runtime](./evergreen-vs-fixed-version.md)


<!-- ------------------------------ -->
#### Policy hygiene

Do not apply Edge browser–only group policies just because of assuming that those policies affect WebView2.

Most such policies don't affect WebView2, and unsupported policies can break WebView2 features.


<!-- ====================================================================== -->
## Security vendor guidance for Antivirus (AV), Endpoint Detection and Response (EDR), or Data Loss Prevention (DLP) providers

Security vendors should follow these practices for:

* Antivirus (AV).
* Endpoint Detection and Response (EDR).
* Data Loss Prevention (DLP) providers<!-- todo: vendors?  providers?  same?  define "providers" -->.


<!-- ------------------------------ -->
#### Trust the WebView2 Runtime by signature

Recognize and trust the WebView2 Runtime (`msedgewebview2.exe`) by signature; allow child processes.


<!-- ------------------------------ -->
#### Use Edge security connectors instead of dynamic-link library (DLL) injection

Avoid dynamic-link library (DLL) injection; prefer Edge security connectors for Data Loss Prevention (DLP), reporting, or device trust.

See:
* [Microsoft Edge for Business Security Connectors](/deployedge/microsoft-edge-connectors-overview)

Dynamic-link library (DLL) injection into renderer or Graphics Processing Unit (GPU) processes breaks Chromium's sandboxing model, and commonly causes renderer crashes.

Security vendors<!-- todo: global: you? define 'vendors'; clarify the audiences --> should use supported Edge security connectors instead of low-level hooks.


<!-- ------------------------------ -->
#### Runtime folder access and child process creation

Keep WebView2<!-- todo: review added word --> Runtime folder access and child process creation unrestricted; permit Crashpad.

See:
* [Handling process-related events in WebView2](./process-related-events.md).
* [Crash Dumps](https://github.com/MicrosoftEdge/WebView2Feedback/blob/main/diagnostics/crash.md) - WebView2Feedback repo.


<!-- ------------------------------ -->
#### Don't block Runtime updates

Do not block Evergreen WebView2 Runtime updates.

See:
* [Enterprise management of WebView2 Runtimes](./enterprise.md)


<!-- ====================================================================== -->
## Diagnostics, crash reports, and process events

Crash reports are saved under the app's user data folder (UDF) at `EBWebView\Crashpad\reports\`.

Use crash diagnostics together with process events to triage repeated failures.

See:
* [Handling process-related events in WebView2](./process-related-events.md)
* [Crash Dumps](https://github.com/MicrosoftEdge/WebView2Feedback/blob/main/diagnostics/crash.md) - WebView2Feedback repo.


<!-- ====================================================================== -->
## See also
<!-- all links in page -->

* [WebView2 documentation](../landing/index.yml)<!-- toc bucket 0 -->
* [Handling process-related events in WebView2](./process-related-events.md)<!-- toc bucket 6 -->
* [Evergreen vs. fixed version of the WebView2 Runtime](./evergreen-vs-fixed-version.md)<!-- toc bucket 7 node 1 -->
* [Distribute your app and the WebView2 Runtime](./distribution.md)<!-- toc bucket 7 node 2 -->
* [Enterprise management of WebView2 Runtimes](./enterprise.md)<!-- toc bucket 7 node 3 -->
* [Process model for WebView2 apps](./process-model.md)<!-- toc bucket 11 -->
* [Manage user data folders](./user-data-folder.md)<!-- toc bucket 12 -->

Learn.microsoft.com:
* [Microsoft Edge for Business Security Connectors](/deployedge/microsoft-edge-connectors-overview)
* [Microsoft Edge WebView2 and Microsoft 365 Apps](/microsoft-365-apps/deploy/webview2-install)
* [Prevent antivirus and DLP tools from blocking or crashing Microsoft Teams](/troubleshoot/microsoftteams/teams-administration/include-exclude-teams-from-antivirus-dlp)
* [Understanding the publisher rule condition in AppLocker](/windows/security/application-security/application-control/app-control-for-business/applocker/understanding-the-publisher-rule-condition-in-applocker)
* [WebView2 for Microsoft 365 Apps](/microsoft-365-apps/deploy/webview2-install)

External:
* [Microsoft Edge WebView2](https://developer.microsoft.com/microsoft-edge/webview2) at Developer.microsoft.com.
* [Crash Dumps](https://github.com/MicrosoftEdge/WebView2Feedback/blob/main/diagnostics/crash.md) - WebView2Feedback repo.
