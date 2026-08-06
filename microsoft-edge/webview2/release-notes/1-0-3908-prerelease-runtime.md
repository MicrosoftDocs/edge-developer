---
title: Prerelease SDK 1.0.3908-prerelease, for Runtime 147 - Runtime (Mar. 16, 2026)
description: Release notes for Microsoft Edge WebView2, for Prerelease SDK 1.0.3908-prerelease - Runtime.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 06/11/2026
---
# Prerelease SDK 1.0.3908-prerelease, for Runtime 147 - Runtime (Mar. 16, 2026)

Release Date: Mar. 16, 2026


<!-- ====================================================================== -->
## Bug fixes

* Fixed a bug where disconnecting a screen didn't change the screen resolution correctly.

* Fixed per-monitor DPI in `window.getScreenDetails()`.  ([Issue #4826](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4826))

* Disabled the domain actions component for WebView2.

* Fixed Print-to-PDF API failure when printing PDFs.  ([Issue #5499](https://github.com/MicrosoftEdge/WebView2Feedback/issues/5499))

* Fixed an issue causing Narrator to announce the structural `HWND`, which doesn't have any UI.

* Fixed WebView2 transparency.

* Fixed the API for setting the background color of the **Caption** control.


<!-- ====================================================================== -->
## See also

* [Release notes for the WebView2 SDK](./index.md)
