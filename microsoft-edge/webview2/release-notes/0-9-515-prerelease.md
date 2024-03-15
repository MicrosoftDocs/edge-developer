---
title: Release Notes for WebView2 Prerelease SDK 0.9.515-prerelease
description: New features, APIs, and fixes in WebView2 Prerelease SDK 0.9.515-prerelease.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 05/14/2020
---
# Release Notes for WebView2 Prerelease SDK 0.9.515-prerelease

Release Date: May 14, 2020

[NuGet package for WebView2 SDK 0.9.515-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/0.9.515-prerelease)

This prerelease version of the WebView2 SDK requires Microsoft Edge version 84.0.515.0 or higher.


<!-- ====================================================================== -->
## WPF apps and Windows Forms apps

> [!IMPORTANT]
> **Announcement**:  WebView2 now supports WPF and Windows Forms on .NET Framework 4.6.2 or later and .NET Core 3.0 or later in the **prerelease package**.

For more information about building WPF apps, see [Get started with WebView2 in WPF apps](../get-started/wpf.md) and the WebView2 [WPF Reference](/dotnet/api/microsoft.web.webview2.wpf) for WPF-specific APIs.

For more information about building Windows Forms apps, see [Get started with WebView2 in WinForms apps](../get-started/winforms.md) and the WebView2 [Windows Forms Reference](/dotnet/api/microsoft.web.webview2.winforms) for Windows Forms specific APIs.

For more information about the CoreWebView2 APIs, see [.NET Reference](/dotnet/api/microsoft.web.webview2.core).


<!-- ====================================================================== -->
## Known issues

This Prerelease SDK has the following issues.


<!-- ------------------------------ -->
#### DPI Awareness

WebView2 for WPF is currently not DPI-aware.  When initializing WebView2 on high DPI monitors, there is a known issue where the WebView2 control at first initializes as a fraction of the window until the window is resized.


<!-- ------------------------------ -->
#### WPF designer

The WPF designer isn't currently supported.  Add the WebView2 control in your app by directly modifying the appropriate XAML in a text editor.


<!-- ====================================================================== -->
## See also

* [Release Notes for the WebView2 SDK](./index.md)
* [WebView2 Roadmap](../roadmap.md)
