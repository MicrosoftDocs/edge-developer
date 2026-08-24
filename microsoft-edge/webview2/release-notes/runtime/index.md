---
title: Release notes for the WebView2 Runtime
description: Microsoft Edge WebView2 Runtime new features, APIs, and fixes for Win32, WPF, and WinForms.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 08/24/2026
---
# Release notes for the WebView2 Runtime

<!-- maint:
list past 10 releases (runtimes)
in toc.yml, add new relnotes pages, move relnotes pages to archive
in /webview2/release-notes/runtime/index.md, add new relnotes link, remove earliest relnotes link -->
Release notes for recent Runtimes:

* [Preview Runtime 153.n.nnnn.nn (Mmm. dd, yyyy)](./153.md)
* [Runtime 152.0.4191.47 (Aug. 24, 2026)](./152.md)
* [Runtime 151.0.4129.50 (Aug. 3, 2026)](./151.md)
* [Runtime 150.0.4078.44 (Jul. 7, 2026)](./150.md)
* [Runtime 149.0.4022.49 (Jun. 11, 2026)](./149.md)
* [Runtime 148.0.3967.48 (May 11, 2026)](./148.md)
* [Runtime 147.0.3912.50 (Apr. 13, 2026)](./147.md)
* [Runtime 146.0.3856.49 (Mar. 16, 2026)](./146.md)
* [Runtime 145.0.3800.47 (Feb. 16, 2026)](./145.md)
* [Runtime 144.0.3719.77 (Jan. 27, 2026)](./144.md)

For earlier release notes, see **Archive** in the table of contents.

To learn more about the WebView2 Runtime and decide how to distribute the Runtime with your app, see [Evergreen vs. fixed version of the WebView2 Runtime](../../concepts/evergreen-vs-fixed-version.md).

You can download the WebView2 Evergreen Runtime or a Fixed Version Runtime at [Microsoft Edge WebView2](https://developer.microsoft.com/microsoft-edge/webview2).

Release notes entries correspond to historical releases of the WebView2 Runtime, and are not updated over time.  References to "new features" and "experimental APIs" might become outdated as new versions of the WebView2 Runtime are released.


<!-- ====================================================================== -->
## Release cadence

The WebView2 Runtime has a 2-week release cadence, in sync with Microsoft Edge.

See also:
* [Microsoft Edge release schedule](/deployedge/microsoft-edge-release-schedule)


<!-- ====================================================================== -->
## Recommended browser channel and Runtime

Make sure to re-compile your WebView2 app after updating the WebView2 SDK NuGet package.  The WebView2 team recommends the following:

* Use the Canary preview channel of Microsoft Edge (which includes the WebView2 Preview Runtime) when you do early testing and development using a Prerelease version of the WebView2 SDK package.

  Canary is the recommended preview channel, because it ships at the fastest cadence and has the newest APIs. 

  Prerelease testing of WebView2 SDKs uses a preview channel of Microsoft Edge (Beta, Dev, or Canary), which includes the WebView2 Preview Runtime.  See [Prerelease testing using preview channels](../../how-to/prerelease-testing.md).

* Use the Evergreen WebView2 Runtime when you use a release version of the WebView2 SDK package.

See also:
* [Matching the Runtime version with the SDK version](../../concepts/versioning.md#matching-the-runtime-version-with-the-sdk-version) in _Prerelease and Release SDKs for WebView2_.


<!-- ====================================================================== -->
## Updating the Runtime

WebView2 changes may require an update to the WebView2 Runtime, the WebView2 SDK, or both.  Most new APIs require both Runtime and SDK updates.

WebView2 shares code and binaries with the Microsoft Edge browser, and is released around the same time.  As a result, WebView2 Runtime releases generally also include Microsoft Edge updates.

* For Microsoft Edge updates, see [Release notes for Microsoft Edge Stable Channel](/deployedge/microsoft-edge-relnote-stable-channel) and [Release notes for Microsoft Edge Beta Channel](/deployedge/microsoft-edge-relnote-beta-channel).

* To update the WebView2 Runtime on your development machine and on user machines, see [Distribute your app and the WebView2 Runtime](../../concepts/distribution.md).  To view or get the latest WebView2 Runtime versions, see [Download the WebView2 Runtime](https://developer.microsoft.com/microsoft-edge/webview2#download-the-webview2-runtime) in the _Microsoft Edge WebView2_ page at developer.microsoft.com.

To obtain a WebView2 Preview Runtime, use the following combination:
* A Prerelease version of the WebView2 SDK.
* A preview channel of Microsoft Edge (containing the WebView2 Preview Runtime) on your development client.

See also:
* [Prerelease and Release SDKs for WebView2](../../concepts/versioning.md)
* [Updating the SDK](../sdk/index.md#updating-the-sdk) in _Release notes for WebView2 SDKs_.


<!-- ====================================================================== -->
## Minimum version of the browser or Runtime to load WebView2

To load WebView2, the minimum version of Microsoft Edge or the WebView2 Runtime is 86.0.616.0; see [Runtime 86.0.705.50 (Jan. 25, 2021)](./86.md).  The minimum version to load WebView2 only changes when a breaking change occurs in the web platform.

To use a Prerelease SDK along with a Microsoft Edge preview channel (containing the WebView2 Preview Runtime), see [Test upcoming APIs and features](../../how-to/set-preview-channel.md).

<!--
Cross-framework API conventions

Events:
No EventHandler or CompletedHandler in .NET or WinRT.
General event pattern:
- Win32: add/remove_XYZ + XYZEventHandler
- .NET/WinRT: XYZ event

Async methods:
- Win32: XYZ method + XYZCompletedHandler
- .NET/WinRT: XYZAsync
-->

Release notes entries correspond to historical releases of WebView2, and are not updated over time.  References to "new features" and "experimental APIs" might become outdated as new versions of WebView2 are released.


<!-- ====================================================================== -->
## See also

* [Release notes for WebView2](../index.md)<!-- toc bucket 1.1 -->
   * [Release notes for WebView2 SDKs](../sdk/index.md)
* [Overview of WebView2 APIs](../../concepts/overview-features-apis.md)<!-- toc bucket 2.1 -->
* [Contact the WebView2 team](../../contact.md)<!-- toc bucket: bottom -->
* [Release notes for Microsoft Edge web platform](../../../web-platform/release-notes/index.md)
* [Microsoft Edge release schedule](/deployedge/microsoft-edge-release-schedule)
