---
title: Runtime 149 (Jun. 11, 2026)
description: Release notes for Microsoft Edge WebView2 Runtime 149.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 06/11/2026
---
# Runtime 149 (Jun. 11, 2026)

Release notes for Microsoft Edge WebView2 Runtime 149, release date: Jun. 11, 2026

**Detailed contents:**
* [Bug fixes](#bug-fixes)
* [Preview Runtime 149 (May 11, 2026)](#preview-runtime-149-may-11-2026)
   * [Bug fixes in the preview Runtime](#bug-fixes-in-the-preview-runtime)
* [See also](#see-also)


<!-- ====================================================================== -->
## Bug fixes

* Mapped `TERMINATION_STATUS_LAUNCH_FAILED_OS_POLICY` to `kLaunchFailed`.

* Updated the failure reason classification to `OOM`, for a process that's been killed to reclaim memory.

* Added trusted origin check during host object access.

* Fixed the **Print** dialog's dropdown lists not being selected in `WebView2CompositionControl`.  ([Issue #5195](https://github.com/MicrosoftEdge/WebView2Feedback/issues/5195))


<!-- ====================================================================== -->
## Preview Runtime 149 (May 11, 2026)

Release notes for Microsoft Edge WebView2 Preview Runtime 149, release date: May 11, 2026

Runtime 149 (Jun. 11, 2026) includes these changes.


<!-- ------------------------------ -->
#### Bug fixes in the preview Runtime

* Fixed double character in UWP.

* Fixed the `Caption controls` background color setting API. After this change, to close your app, the app will also need to intercept the `Close` call and handle the call itself.

* Fixed forwarding of network events for iframe, where the iframe had its own isolated CDP session.

* Improved error handling when Post Message (such as `CoreWebView2ServiceWorker.PostWebMessageAsJson` or `chrome.webview.postMessage`) is called on a service worker.

* Reduced string allocations in `GetDefaultHostAppExeName`.

* Fixed an updater issue where the currently used WebView2 Runtime is deleted after installing a new version, causing a crash during new controller creation in an already running app.


<!-- ====================================================================== -->
## See also

* [Release notes for WebView2](../index.md)
   * [Release notes for the WebView2 Runtime](./index.md)
   * [Release notes for WebView2 SDKs](../sdk/index.md)
