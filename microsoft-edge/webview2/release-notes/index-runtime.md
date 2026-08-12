---
title: Release notes for the WebView2 Runtime
description: Microsoft Edge WebView2 Runtime new features, APIs, and fixes for Win32, WPF, and WinForms.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 08/05/2026
---
# Release notes for the WebView2 Runtime

<!-- maint:
list past 10 releases (runtimes)
in toc.yml, add new relnotes pages, move relnotes pages to archive
in /webview2/release-notes/index.md, add new relnotes links, remove earliest relnotes links
keep release nnn & prerelease nnn together
152-143: -->
Release notes for recent Runtimes:
* [Prerelease Runtime 152 (Aug. 3, 2026)](./runtime-152-prerelease.md)
* [Runtime 151 (Aug. 3, 2026)](./runtime-151.md)
* [Runtime 150 (Jul. 7, 2026)](./runtime-150.md)
   * [Prerelease Runtime 150 (Jun. 11, 2026)](./runtime-150-prerelease.md)
* [Runtime 149 (Jun. 11, 2026)](./runtime-149.md)
   * [Prerelease Runtime 149 (May 11, 2026)](./runtime-149-prerelease.md)
* [Runtime 148 (May 11, 2026)](./runtime-148.md)
   * [Prerelease Runtime 148 (Apr. 13, 2026)](./runtime-148-prerelease.md)
* [Runtime 147 (Apr. 13, 2026)](./runtime-147.md)
   * [Prerelease Runtime 147 (Mar. 16, 2026)](./runtime-147-prerelease.md)
* [Runtime 146 (Mar. 16, 2026)](./runtime-146.md)
   * [Prerelease Runtime 146 (Feb. 16, 2026)](./runtime-146-prerelease.md)
* [Runtime 145 (Feb. 16, 2026)](./runtime-145.md)
   * [Prerelease Runtime 145 (Jan. 19, 2026)](./runtime-145-prerelease.md)
* [Runtime 144 (Jan. 27, 2026)](./runtime-144.md)
   * [Prerelease Runtime 144 (Dec. 8, 2025)](./runtime-144-prerelease.md)
* [Runtime 143 (Dec. 8, 2025)](./runtime-143.md)
   * [Prerelease Runtime 143 (Nov. 7, 2025)](./runtime-143-prerelease.md)

For earlier release notes, see **Archive** in the table of contents.

You can view the list of [Microsoft.Web.WebView2](https://www.nuget.org/packages/Microsoft.Web.WebView2) SDK packages at the NuGet site.

Generally, release notes apply across the supported platforms, which are listed in [WebView2 API Reference](../webview2-api-reference.md).  For an outline of APIs that are in Release SDK packages, see [Overview of WebView2 APIs](../concepts/overview-features-apis.md).

Release notes entries correspond to historical releases of WebView2, and are not updated over time.  References to "new features" and "experimental APIs" might become outdated as new versions of WebView2 are released.


<!-- ====================================================================== -->
## Release cadence

The following have a 2-week release cadence:
* The WebView2 Runtime.
* Release notes about the WebView2 Runtime.

See also:
* [Microsoft Edge release schedule](/deployedge/microsoft-edge-release-schedule)


<!-- ====================================================================== -->
## Recommended browser channel and Runtime

Make sure to re-compile your WebView2 app after updating the WebView2 SDK NuGet package.  The WebView2 team recommends the following:

* Use the Canary preview channel of Microsoft Edge when you develop using a Prerelease version of the WebView2 SDK package.  Canary is the recommended preview channel, because it ships at the fastest cadence and has the newest APIs.

* Use the Evergreen WebView2 Runtime when you use a release version of the WebView2 SDK package.

For more information, see [Matching the Runtime version with the SDK version](../concepts/versioning.md#matching-the-runtime-version-with-the-sdk-version) in _Prerelease and Release SDKs for WebView2_.


<!-- ====================================================================== -->
## Minimum version of the browser or Runtime to load WebView2

To load WebView2, the minimum version of Microsoft Edge or the WebView2 Runtime is 86.0.616.0.  The minimum version to load WebView2 only changes when a breaking change occurs in the web platform.

To use a Prerelease SDK along with a Microsoft Edge preview channel, see [Test upcoming APIs and features](../how-to/set-preview-channel.md).

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
## Updating the Runtime

WebView2 changes may require an update to the Runtime, SDK, or both.  Most new APIs require both Runtime and SDK updates.

WebView2 shares code and binaries with the Microsoft Edge browser, and is released around the same time.  As a result, WebView2 Runtime releases generally also include Microsoft Edge updates.

* For Microsoft Edge updates, see [Release notes for Microsoft Edge Stable Channel](/deployedge/microsoft-edge-relnote-stable-channel) and [Release notes for Microsoft Edge Beta Channel](/deployedge/microsoft-edge-relnote-beta-channel).

* To update the WebView2 Runtime on your development machine and on user machines, see [Distribute your app and the WebView2 Runtime](../concepts/distribution.md).  To view or get the latest WebView2 Runtime versions, see [Download the WebView2 Runtime](https://developer.microsoft.com/microsoft-edge/webview2#download-the-webview2-runtime) in the _Microsoft Edge WebView2_ page at developer.microsoft.com.

See also:
* [Updating the SDK](./index-sdk.md#updating-the-sdk) in _Release notes for WebView2 SDKs_.


<!-- ====================================================================== -->
## See also

* [Release notes for WebView2](./index.md)<!-- toc bucket 1.1 -->
   * [Release notes for WebView2 SDKs](./index-sdk.md)
* [Overview of WebView2 APIs](../concepts/overview-features-apis.md)<!-- toc bucket 2.1 -->
* [Contact the WebView2 team](../contact.md)<!-- toc bucket: bottom -->
* [Release notes for Microsoft Edge web platform](../../web-platform/release-notes/index.md)
* [Microsoft Edge release schedule](/deployedge/microsoft-edge-release-schedule)

API Reference:
* [WebView2 API Reference](../webview2-api-reference.md)
   * .NET: [Microsoft.Web.WebView2.Core Namespace](/dotnet/api/microsoft.web.webview2.core)<!-- https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core -->
   * WinRT: [Microsoft.Web.WebView2.Core Namespace](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/)<!-- https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/ -->
   * Win32: [Reference (WebView2 Win32 C++)](/microsoft-edge/webview2/reference/win32/)<!-- https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/ -->
