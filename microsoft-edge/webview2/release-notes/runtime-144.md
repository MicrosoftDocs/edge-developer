---
title: Runtime 144 (Jan. 27, 2026)
description: Release notes for Microsoft Edge WebView2 Runtime 144.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 06/11/2026
---
# Runtime 144 (Jan. 27, 2026)

Release notes for Microsoft Edge WebView2 Runtime 144, release date: Jan. 27, 2026

This release includes the changes listed in [Prerelease Runtime 144 (Dec. 8, 2025)](./runtime-144-prerelease.md).


<!-- ====================================================================== -->
## Bug fixes

* Fixed `chrome.webview` unavailability.


<!-- ====================================================================== -->
## Prerelease Runtime 144 (Dec. 8, 2025)

Release notes for Microsoft Edge WebView2 Prerelease Runtime 144, release date: Dec. 8, 2025

Runtime 144 (Jan. 27, 2026) includes these changes.


<!-- ------------------------------ -->
#### Bug fixes in prerelease

* Fixed local network access triggering a permission alert pop-up window.<!-- fixed regression; this fix was listed previously -->

* Fixed a regression of the `setColorScheme` API.

* Fixed deferred initialization for `ICoreWebView2NewWindowRequestedEventArgs` for the command-line switch `enable-new-window-requested-deferred-initialization`.


<!-- ====================================================================== -->
## See also

* [Release notes for WebView2](./index.md)
   * [Release notes for the WebView2 Runtime](./index-runtime.md)
   * [Release notes for WebView2 SDKs](./index-sdk.md)
