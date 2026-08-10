---
title: Runtime 150 (Jul. 7, 2026)
description: Release notes for Microsoft Edge WebView2 Runtime 150.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 07/07/2026
---
# Runtime 150 (Jul. 7, 2026)

Release Date: Jul. 7, 2026

This release includes the changes listed in [Prerelease Runtime 150 (Jun. 11, 2026)](./runtime-150-prerelease.md).


<!-- ====================================================================== -->
## WebView2 Runtime is changing to a 2-week release cadence

Starting with version 152 (Aug. 24, 2026), the WebView2 Runtime moves to a 2-week release cadence.  This is aligned with Microsoft Edge.  WebView2 Runtime version 151 is the final release that's on a 4-week release cadence.

See [[Announcement] WebView2 Runtime moves to a 2-week release cadence (starting v152)](https://github.com/MicrosoftEdge/WebView2Announcements/issues/137).


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


<!-- ====================================================================== -->
## See also

* [Release notes for the WebView2 SDK](./index.md)
