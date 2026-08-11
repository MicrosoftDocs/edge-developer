---
title: Prerelease Runtime 151 (Jul. 7, 2026)
description: Release notes for Microsoft Edge WebView2 Prerelease Runtime 151.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 07/07/2026
---
# Prerelease Runtime 151 (Jul. 7, 2026)

Release Date: Jul. 7, 2026


<!-- ====================================================================== -->
## WebView2 Runtime is changing to a 2-week release cadence

Starting with version 152 (Aug. 24, 2026), the WebView2 Runtime moves to a 2-week release cadence.  This is aligned with Microsoft Edge.  WebView2 Runtime version 151 is the final release that's on a 4-week release cadence.

See [[Announcement] WebView2 Runtime moves to a 2-week release cadence (starting v152)](https://github.com/MicrosoftEdge/WebView2Announcements/issues/137).


<!-- ====================================================================== -->
## Run your WebView2 host application at standard user integrity rather than elevated

Run your WebView2 host application at standard user integrity rather than elevated.  See [Recommended privilege level for WebView2 host applications](../concepts/security.md#recommended-privilege-level-for-webview2-host-applications) in _Develop secure WebView2 apps_.


<!-- ====================================================================== -->
## Bug fixes

* Fixed the reentrancy for frame deletion.

* Fixed object wrapper access for a User Authorization File (UAF).

* Stamped the browser-authoritative origin on the host pipe, to prevent a `WebMessageReceivedEventArgs.Source` spoof.

* Restricted the access to a singleton host pipe, in a deprecated WebView2.

* Removed the `origin` parameter from methods that access a native object.

* Hardened WebView2 virtual-host `kDeny` enforcement against renderer spoofing and New Technology File System (NTFS)-junction escapes.

* Fixed the window-to-visual UI Automation (UIA) tree.

* Fixed a regression in the `AddScriptToExecuteOnDocumentCreated` API.

* Implemented `OnRendererResponsive` for hang outcome tracking.


<!-- ====================================================================== -->
## See also

* [Release notes for WebView2](./index.md)
