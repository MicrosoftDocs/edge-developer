---
title: Prevent security tools from blocking WebView2-hosted apps
description: Prevent antivirus, Endpoint Detection and Response (EDR), or Data Loss Prevention (DLP) tools from blocking or crashing WebView2-hosted apps.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 02/26/2026
---
# Prevent security tools from blocking WebView2-hosted apps
<!-- audience: specify "the IT administrator" or "the security software vendor" instead of "you"; article has two audiences -->

These are best practices for IT administrators and security software vendors, to ensure that security tools are not blocking WebView2 App functionality or crashing WebView2-hosted apps.

IT administrators and security software vendors should use the practices and procedures below to configure their environments and security tools to avoid breaking WebView2's multi-process architecture.

**Detailed contents:**
* [Security tools to configure](#security-tools-to-configure)
   * [Symptoms of Enterprise configuration problems](#symptoms-of-enterprise-configuration-problems)
* [Update Enterprise security policies if needed](#update-enterprise-security-policies-if-needed)
* [Allowlist the WebView2 Runtime and app's host executables](#allowlist-the-webview2-runtime-and-apps-host-executables)
   * [Runtime initialization is blocked](#runtime-initialization-is-blocked)
      * [Symptoms](#symptoms)
      * [Solutions](#solutions)
* [Obtain the WebView2 Runtime](#obtain-the-webview2-runtime)
* [Preserve default ACLs on Runtime folders and app's UDF](#preserve-default-acls-on-runtime-folders-and-apps-udf)
* [App data](#app-data)
* [Grant permission to write to the user data folder (UDF)](#grant-permission-to-write-to-the-user-data-folder-udf)
   * [Sign-in loop; state not persisted; settings don't persist; blank initial page](#sign-in-loop-state-not-persisted-settings-dont-persist-blank-initial-page)
      * [Solutions](#solutions-1)
* [Runtime folder access and child process creation](#runtime-folder-access-and-child-process-creation)
* [Don't inject DLLs into WebView2 processes](#dont-inject-dlls-into-webview2-processes)
   * [Crashes or freezing](#crashes-or-freezing)
   * [Content never loads](#content-never-loads)
      * [Solutions](#solutions-2)
* [Permit child processes](#permit-child-processes)
* [Avoid broad, global exclusions](#avoid-broad-global-exclusions)
   * [Slow startup](#slow-startup)
      * [Solutions](#solutions-3)
* [Trust internal proxy Certificate Authorities (CAs), and allow essential sign-in or Content Delivery Network (CDN) endpoints](#trust-internal-proxy-certificate-authorities-cas-and-allow-essential-sign-in-or-content-delivery-network-cdn-endpoints)
* [Trust the WebView2 Runtime by signature](#trust-the-webview2-runtime-by-signature)
* [System-provided WebView2 Runtime binary files](#system-provided-webview2-runtime-binary-files)
* [Preserve Access Control Lists (ACLs) and Low Integrity Level (LowIL)](#preserve-access-control-lists-acls-and-low-integrity-level-lowil)
* [Align Transport Layer Security (TLS) inspection and proxy configuration](#align-transport-layer-security-tls-inspection-and-proxy-configuration)
   * [SSL decryption by a firewall or proxy](#ssl-decryption-by-a-firewall-or-proxy)
   * [ERR_CERT_* error](#err_cert_-error)
      * [Solutions](#solutions-4)
* [Allow updates of the Evergreen WebView2 Runtime](#allow-updates-of-the-evergreen-webview2-runtime)
   * [App only works with higher privilege](#app-only-works-with-higher-privilege)
      * [Solutions](#solutions-5)
* [Don't apply Edge browser–only group policies](#dont-apply-edge-browseronly-group-policies)
* [Tools in which to check for the symptoms and causes](#tools-in-which-to-check-for-the-symptoms-and-causes)
   * [Task Manager](#task-manager)
   * [Blank or white embedded window](#blank-or-white-embedded-window)
   * [Event Viewer](#event-viewer)
   * [Security logs](#security-logs)
   * [Diagnostics, crash reports, and process events](#diagnostics-crash-reports-and-process-events)
   * [Reliability Monitor](#reliability-monitor)
* [Applicability to tools](#applicability-to-tools)
* [Resolving performance issues](#resolving-performance-issues)
* [Why WebView2 appears in enterprise workloads](#why-webview2-appears-in-enterprise-workloads)
* [See also](#see-also)


<!-- ====================================================================== -->
## Security tools to configure

Security tools to configure appropriately include:

* Antivirus (AV) tools.
* Data Loss Prevention (DLP) tools.
* Endpoint Detection and Response (EDR) tools.

Enterprise security tools also include:

* Transport Layer Security (TLS) inspection.


<!-- ------------------------------ -->
#### Symptoms of Enterprise configuration problems

Enterprise security tools, if not following the best practices below, can disrupt WebView2's multi-process architecture by:

* Blocking child processes.
* Tightening folder Access Control Lists (ACLs).
* Injecting dynamic-link libraries (DLLs).

When such disruption occurs, WebView2-hosted experiences might blank-screen, freeze, or fail to initialize.

See:
* [Process model for WebView2 apps](./process-model.md)


<!-- ====================================================================== -->
## Update Enterprise security policies if needed

WebView2 honors all Enterprise security policies.

If any tools or policies don't allow some of the WebView2 DLLs to load, the Enterprise IT administrator needs to update the Enterprise security policies.

WebView2 doesn't implement app-specific logic.


<!-- ====================================================================== -->
## Allowlist the WebView2 Runtime and app's host executables

Allowlist the WebView2 Runtime (`msedgewebview2.exe`) and the app's host executables.

See:
* [Prevent antivirus and DLP tools from blocking or crashing Microsoft Teams](/troubleshoot/microsoftteams/teams-administration/include-exclude-teams-from-antivirus-dlp) - in Microsoft Teams troubleshooting.

Prefer publisher rules.

See:
* [Understanding the publisher rule condition in AppLocker](/windows/security/application-security/application-control/app-control-for-business/applocker/understanding-the-publisher-rule-condition-in-applocker) - in Windows Security (Application Control for Windows).


<!-- ------------------------------ -->
#### Runtime initialization is blocked

Issues:

* There might be an initialization error, such as `E_FAIL`.  In this case, the WebView2 control fails to initialize, and the app content never loads.

* Runtime initialization is blocked, for any of the following tools:

   * Windows Defender Application Control (WDAC).

   * AppLocker deny rules; policies that explicitly block execution.

   * Access Control Lists (ACLs) that have been tightened beyond the default settings; permissions that have been made more restrictive than the OS defaults.


<!-- ---------- -->
###### Symptoms

* Transport Layer Security (TLS) errors, such as `ERR_CERT_*`.

* Login redirect failures that occur when Transport Layer Security (TLS) inspection is enabled.

* An immediate initialization error.

* There are no child processes.

* The view is blank.


<!-- ---------- -->
###### Solutions

Allowlist the WebView2 Runtime (`msedgewebview2.exe`) and host executables.

See:
* [Prevent antivirus and DLP tools from blocking or crashing Microsoft Teams](/troubleshoot/microsoftteams/teams-administration/include-exclude-teams-from-antivirus-dlp) - in Microsoft Teams troubleshooting.

Use publisher rules.

See:
* [Understanding the publisher rule condition in AppLocker](/windows/security/application-security/application-control/app-control-for-business/applocker/understanding-the-publisher-rule-condition-in-applocker) - in Windows Security (Application Control for Windows).

Restore default Access Control Lists (ACLs).

See:
* [Enterprise management of WebView2 Runtimes](./enterprise.md)



<!-- ====================================================================== -->
## Preserve default Access Control Lists (ACLs) on Runtime folders

Preserve the default Access Control Lists (ACLs) on WebView2 Runtime folders.

Don't modify the default Access Control Lists (ACLs) that Windows sets on the WebView2 Runtime folders.

If security tools modify the ACLs on Runtime folders, these sandboxed processes might lose the permissions they need to read and execute the Runtime binaries, which can cause blank screens, initialization failures, or crashes.

See:
* [Enterprise management of WebView2 Runtimes](./enterprise.md)


<!-- ====================================================================== -->
## Preserve Low Integrity Level (LowIL) on Runtime folders

Preserve the Low Integrity Level (LowIL) settings on WebView2 Runtime folders.  WebView2 runs renderer processes at a Low Integrity Level, to limit their access to system resources. 

A Low Integrity Level process (LowIL) must be able to Read and Execute the WebView2 Runtime binaries.

* **Low Integrity Level (LowIL):** A Windows security mechanism that restricts a process's ability to write to higher-integrity objects (such as most user-profile and system locations).  WebView2 renderer processes run at Low IL to reduce the impact of a compromised process.

See:
* [Enterprise management of WebView2 Runtimes](./enterprise.md)


<!-- ====================================================================== -->
## Preserve default Access Control Lists (ACLs) on the app's user data folder (UDF)

Don't modify the default Access Control Lists (ACLs) that Windows sets on the app's user data folder (UDF).  Modifying these ACLs can prevent LowIL and AppContainer processes from functioning correctly.

**AppContainer** is a more restrictive Windows sandbox that limits a process's access to only explicitly granted resources.  On supported OS versions, WebView2 might run renderer processes inside an `AppContainer`, for additional isolation.

The `LowIL/AppContainer` must have the permission to:

* Read and execute the WebView2 Runtime.

* Write to the user data folder (UDF).

WebView2 runs certain child processes at a Low Integrity Level (`LowIL`) or inside an `AppContainer` sandbox to limit their access to system resources.

These sandboxed processes must still be able to:

* Read and execute the WebView2 Runtime binaries.

* Write to the app's user data folder (UDF).

If security tools tighten the Access Control Lists (ACLs) on these folders, sandboxed processes might lose the access they need, which can cause blank screens, initialization failures, or crashes.

System locations that are managed by the operating system (OS) are handled entirely by Windows, and must not be modified.

See:
* [Manage user data folders](./user-data-folder.md)


<!-- ====================================================================== -->
## Grant permission to write to the user data folder (UDF)

Give write permission to allow the WebView2 app to write to the user data folder (UDF).

These writes to the UDF can be from:

* Per-app Controlled Folder Access (CFA) exceptions.

* Per-app Data Loss Prevention (DLP) exceptions.

Web content state lives in the app's user data folder (UDF).  Web content state includes:
* Cookies.
* Cache.
* Local storage.

See:
* [Manage user data folders](./user-data-folder.md)


<!-- ------------------------------ -->
#### Sign-in loop; state not persisted; settings don't persist; blank initial page

In the case of a sign-in loop, state is not persisted when user data folder (UDF) writes are blocked.


<!-- ---------- -->
###### Solutions

Allow writes to the app's user data folder; use per-app Controlled Folder Access (CFA) exceptions or Data Loss Prevention (DLP) exceptions.

Avoid placing the WebView2 user data folder (UDF) on a network share.

Ensure that Data Loss Prevention (DLP) policies do not misclassify normal browser data (such as cookies, cache, or local storage) as exfiltration attempts.  _Exfiltration_ is the unauthorized transfer of data from a system, network, or cloud environment to an external destination without permission.

See:
* [Manage user data folders](./user-data-folder.md)


<!-- ====================================================================== -->
## Allow Runtime folder access, child processes, and child process creation

Audience: Security software vendors.

Keep WebView2 Runtime folder access unrestricted.

Permit child processes and don't terminate them.  The child processes include:

* Renderer
* Graphics Processing Unit (GPU)
* Network
* Crashpad

Keep WebView2 Runtime child process creation unrestricted; permit Crashpad.

See:
* [Handling process-related events in WebView2](./process-related-events.md)
* [Crash Dumps](https://github.com/MicrosoftEdge/WebView2Feedback/blob/main/diagnostics/crash.md) - WebView2Feedback repo.


<!-- ====================================================================== -->
## Don't inject DLLs into WebView2 processes

Use Microsoft Edge security connectors.

Avoid dynamic-link library (DLL) injection.

Don't inject dynamic-link libraries (DLLs) into WebView2 processes.  Use Microsoft Edge security connectors instead.

Prefer Microsoft Edge security connectors for Data Loss Prevention (DLP), reporting, or device trust.

Dynamic-link library (DLL) injection into renderer or Graphics Processing Unit (GPU) processes breaks Chromium's sandboxing model, and commonly causes renderer crashes.

Security software vendors should use supported Edge security connectors instead of low-level hooks.

See:
* [Microsoft Edge for Business Security Connectors](/deployedge/microsoft-edge-connectors-overview) - in Microsoft Edge Enterprise documentation.


<!-- ------------------------------ -->
#### Crashes or freezing

Crash or freeze tied to dynamic-link library (DLL) injection or blocked renderer, Graphics Processing Unit (GPU), or Crashpad.

See:
* [Handling process-related events in WebView2](./process-related-events.md)
* [Crash Dumps](https://github.com/MicrosoftEdge/WebView2Feedback/blob/main/diagnostics/crash.md) - WebView2Feedback repo.


<!-- ------------------------------ -->
#### Content never loads

Issue: The main process starts, but content never loads, and the app freezes.

Spawning of child processes is blocked or hooked.


<!-- ---------- -->
###### Solutions

Permit WebView2 child processes:
* Renderer.
* Graphics Processing Unit (GPU).
* Network.
* Crashpad.

These are the child processes that WebView2 instantiates.

Avoid dynamic-link library (DLL) injection.

Prefer Edge connectors.

See:
* [Microsoft Edge for Business Security Connectors](/deployedge/microsoft-edge-connectors-overview) - in Microsoft Edge Enterprise documentation.
* [Handling process-related events in WebView2](./process-related-events.md)
* [Crash Dumps](https://github.com/MicrosoftEdge/WebView2Feedback/blob/main/diagnostics/crash.md) - WebView2Feedback repo.


<!-- ====================================================================== -->
## Avoid broad, global exclusions


<!-- ------------------------------ -->
#### Slow startup

Issues:
* Slow startup due to deep real-time scanning of the WebView2 Runtime and the user data folder (UDF).
* A transient white screen, when perform a navigation.
* Aggressive real-time scanning.


<!-- ---------- -->
###### Solutions

Configure **scoped exclusions** for WebView2 Runtime binaries and user data folder (UDF); avoid broad exclusions.

Tune scanning with scoped exclusions for the WebView2 Runtime directory and user data folder (UDF).

Avoid broad, global exclusions.

See:
* [Enterprise management of WebView2 Runtimes](./enterprise.md)
* [Manage user data folders](./user-data-folder.md)


<!-- ====================================================================== -->
## Trust internal proxy Certificate Authorities (CAs), and allow essential sign-in or Content Delivery Network (CDN) endpoints

Align Transport Layer Security (TLS) policies with Chromium:

* Trust internal proxy Certificate Authorities (CAs); install trusted Certificate Authorities (CAs).

* Allow essential sign-in endpoints, or other required endpoints.

* Allow essential Content Delivery Network (CDN) endpoints.

Preserve the default Access Control Lists (ACLs) and Low Integrity Level (LowIL) settings on WebView2 Runtime folders.

* A Low Integrity Level process (LowIL) must be able to Read and Execute the WebView2 Runtime binaries.

* Don't modify the default ACLs that the operating system sets on the Runtime folders.  WebView2's sandboxed renderer processes run at Low Integrity Level, and require these permissions, to function correctly.


<!-- ====================================================================== -->
## Trust the WebView2 Runtime by signature

Recognize and trust the WebView2 Runtime (`msedgewebview2.exe`) by signature; allow child processes.


<!-- ====================================================================== -->
## Don't modify WebView2 Runtime files that Windows components load from `C:\Windows\System32`

Don't modify, quarantine, or replace WebView2 Runtime binary files that Windows components load directly from `C:\Windows\System32`.

Some Windows components might load WebView2 Runtime binary files directly from `C:\Windows\System32`.  These binary files are owned by the operating system.

These OS-owned WebView2 Runtime binary files:

* Might not match the Evergreen WebView2 Runtime version that's used by desktop apps.

* Are serviced exclusively through Windows Update, not through WebView2 installers.


<!-- ====================================================================== -->
## Align Transport Layer Security (TLS) inspection and proxy configuration

Symptoms:

* Transport Layer Security (TLS) errors (such as `ERR_CERT_*`).

* Login redirect failures that occur when TLS inspection is enabled.

Align Transport Layer Security (TLS) inspection and proxy configuration with Chromium-based browser requirements.

If your environment uses TLS inspection, ensure that the inspection certificates are trusted by the operating system's certificate store. 


<!-- ------------------------------ -->
#### SSL decryption by a firewall or proxy

An example of using TLS inspection is SSL decryption by a firewall or proxy.

If your environment routes traffic through a proxy server, ensure that WebView2 processes can reach the required endpoints through the proxy.


<!-- ------------------------------ -->
#### `ERR_CERT_*` error

Issues:

* `ERR_CERT_*` errors.

* Sign-in loops (login loops).

* Service workers failing.

Network inspection vs. Transport Layer Security (TLS) inspection is misaligned.


<!-- ---------- -->
###### Solutions

Install the enterprise proxy's root Certificate Authority (CA) so that WebView2 trusts intercepted HTTPS traffic.

Ensure that authentication endpoints and Content Delivery Network (CDN) endpoints that are used by the WebView2 app are explicitly allowed.

Validate authentication endpoints and Content Delivery Network (CDN) endpoints.

See:
* [Enterprise management of WebView2 Runtimes](./enterprise.md)


<!-- ====================================================================== -->
## Allow updates of the Evergreen WebView2 Runtime

Do not block updates of the Evergreen WebView2 Runtime.

Allow updates of the Evergreen WebView2 Runtime; don't block servicing.

Microsoft Edge servicing updates the following versioned subfolders:

`C:\Program Files (x86)\Microsoft\EdgeWebView\Application\<version>\`

See:
* [Enterprise management of WebView2 Runtimes](./enterprise.md)
* [Evergreen vs. fixed version of the WebView2 Runtime](./evergreen-vs-fixed-version.md)
* [Distribute your app and the WebView2 Runtime](./distribution.md)


<!-- ------------------------------ -->
#### App only works with higher privilege

There's an Access Control List (ACL) mismatch with the Integrity Level

Issue: The app works only at higher privilege.  The app fails in the following environments:

* **Universal Windows Platform (UWP)** — Apps that run inside the Windows app sandbox with restricted permissions.

* **AppContainer** — A Windows security sandbox that limits a process's access to only explicitly granted resources.


<!-- ---------- -->
###### Solutions

Keep default `ALL APPLICATION PACKAGES` permissions on WebView2 Runtime directories; a Low integrity level process (LowIL) must **read/execute**.

See:
* [Enterprise management of WebView2 Runtimes](./enterprise.md)

This includes the Evergreen WebView2 Runtime path under `C:\Program Files (x86)\Microsoft\EdgeWebView\Application\<version>\`, which must retain `ALL APPLICATION PACKAGES` Read/Execute permissions.

The System32-based WebView2 Runtime is owned and serviced by Windows.

The System32-based WebView2 Runtime must not be modified, replaced, quarantined, or cleaned by Antivirus (AV), Endpoint Detection and Response (EDR), or Data Loss Prevention (DLP) tools.

The System32-based WebView2 Runtime's default Access Control Lists (ACLs) must be preserved exactly as shipped.


<!-- ====================================================================== -->
## Don't apply Edge browser–only group policies

Most group policies that apply to Microsoft Edge don't affect WebView2, and unsupported policies can break WebView2 features.
    
Don't use Microsoft Edge–only group policies to affect WebView2.


<!-- ====================================================================== -->
## Tools in which to check for the symptoms and causes

Audience: IT administrators.

IT administrators can use standard Windows tools to determine whether the listed symptoms are caused by:
* WebView2 being blocked.
* WebView2 failing to initialize.
* WebView2 crashing.


<!-- ------------------------------ -->
#### Task Manager

Under the host application, verify that the WebView2 Runtime (`msedgewebview2.exe`) and its child processes appear.

The child processes include:

* Renderer.
* Graphics Processing Unit (GPU).
* Network.
* Crashpad.

If no WebView2 child processes appear, the WebView2 Runtime or child process spawning is blocked, due to one of the following being enabled on the machine:

* Windows Defender Application Control (WDAC).

* Endpoint Detection and Response (EDR).

* Dynamic-link library (DLL) injection.

If renderer (or Graphics Processing Unit (GPU)) processes appear briefly and then disappear, the following might be terminating the renderer (or Graphics Processing Unit (GPU)) processes:

* Endpoint Detection and Response (EDR) hooking.

* Antivirus (AV) hooking.

* Dynamic-link library (DLL) injection.


<!-- ------------------------------ -->
#### Blank or white embedded window

If there is a blank or white embedded window, make sure WebView2 processes are present in Task Manager.

See:
* [Process model for WebView2 apps](./process-model.md)


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
#### Diagnostics, crash reports, and process events

Crash reports are saved under the app's user data folder (UDF) at `EBWebView\Crashpad\reports\`.

Use crash diagnostics together with process events to triage repeated failures.

See:
* [Handling process-related events in WebView2](./process-related-events.md)
* [Crash Dumps](https://github.com/MicrosoftEdge/WebView2Feedback/blob/main/diagnostics/crash.md) - WebView2Feedback repo.


<!-- ------------------------------ -->
#### Reliability Monitor

Identify repeated crashes of renderer, Graphics Processing Unit (GPU), or Crashpad processes.

These process crashes are correlated with:

* Freezing problems.

* Blank screen problems.

* WebView2 Runtime instability.


<!-- ====================================================================== -->
## Applicability to tools

Audience: IT administrators and security software vendors.

Various types of apps can interact with WebView2.  The following are the applicability to different forms of WebView2.

This article applies to the following tools or software:

* The Microsoft Edge WebView2 Runtime (Evergreen and fixed-version).

* Windows desktop applications that embed the WebView2 control.

* Windows components that use WebView2 for the web-based portion of the UI.

* Non-Microsoft antivirus, Endpoint Detection and Response (EDR), Data Loss Prevention (DLP), and proxy or Transport Layer Security (TLS) interception products that might interfere with WebView2 processes.

See:
* [Microsoft Edge WebView2 and Microsoft 365 Apps](/microsoft-365-apps/deploy/webview2-install) - in Deployment guide for Microsoft 365 Apps.


<!-- ====================================================================== -->
## Resolving performance issues

Audience: IT administrators and security software vendors.


<!-- ~~ -->

To use this section:

1. The IT administrator uses this information to identify an issue that the IT administrator is seeing with launching or using WebView2 in their app, and figure out which security software is causing the issue.

1. The IT administrator contacts the security software vendor.

1. The security software vendor uses this content to figure out what they need to do to ensure that WebView2 is not blocked.

Extensive scanning or hooking into processes can slow down startup and page loading times.

Instead, use scoped exclusions for WebView2 Runtime binaries and user data folder (UDF), rather than opting for wide-ranging, high-risk disables.

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
## Why WebView2 appears in enterprise workloads

Audience: IT administrators and security software vendors.

Many **Microsoft 365 Apps** and **Windows features** use WebView2 to deliver a modern, consistent UI.

For example, Outlook features rely on the WebView2 Runtime to function.

Windows Search uses WebView2 for parts of its UI.

See:
* [WebView2 documentation](../landing/index.yml)
* [Microsoft Edge WebView2 and Microsoft 365 Apps](/microsoft-365-apps/deploy/webview2-install) - in Deployment guide for Microsoft 365 Apps.


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
* [Microsoft Edge for Business Security Connectors](/deployedge/microsoft-edge-connectors-overview) - in Microsoft Edge Enterprise documentation.
* [Microsoft Edge WebView2 and Microsoft 365 Apps](/microsoft-365-apps/deploy/webview2-install) - in Deployment guide for Microsoft 365 Apps.
* [Understanding the publisher rule condition in AppLocker](/windows/security/application-security/application-control/app-control-for-business/applocker/understanding-the-publisher-rule-condition-in-applocker) - in Windows Security (Application Control for Windows).
* [Prevent antivirus and DLP tools from blocking or crashing Microsoft Teams](/troubleshoot/microsoftteams/teams-administration/include-exclude-teams-from-antivirus-dlp) - in Microsoft Teams troubleshooting.

External:
* [Microsoft Edge WebView2](https://developer.microsoft.com/microsoft-edge/webview2) - Developer.microsoft.com.
* [Crash Dumps](https://github.com/MicrosoftEdge/WebView2Feedback/blob/main/diagnostics/crash.md) - WebView2Feedback repo.
