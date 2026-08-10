---
title: Prerelease Runtime 149 (May 11, 2026)
description: Release notes for Microsoft Edge WebView2 Prerelease Runtime 149.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 06/11/2026
---
# Prerelease Runtime 149 (May 11, 2026)

Release Date: May 11, 2026


<!-- ====================================================================== -->
## Bug fixes

* Fixed double character in UWP.

* Fixed the `Caption controls` background color setting API. After this change, to close your app, the app will also need to intercept the `Close` call and handle the call itself.

* Fixed forwarding of network events for iframe, where the iframe had its own isolated CDP session.

* Improved error handling when Post Message (such as `CoreWebView2ServiceWorker.PostWebMessageAsJson` or `chrome.webview.postMessage`) is called on a service worker.

* Reduced string allocations in `GetDefaultHostAppExeName`.

* Fixed an updater issue where the currently used WebView2 Runtime is deleted after installing a new version, causing a crash during new controller creation in an already running app.


<!-- ====================================================================== -->
## See also

* [Release notes for the WebView2 SDK](./index.md)
