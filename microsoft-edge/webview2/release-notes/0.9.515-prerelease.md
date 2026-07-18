---
title: Prerelease SDK 0.9.515-prerelease, for Runtime 84 (May 14, 2020)
description: Release notes for Microsoft Edge WebView2.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 06/11/2026
---
# Prerelease SDK 0.9.515-prerelease, for Runtime 84 (May 14, 2020)

Release Date: May 14, 2020

[NuGet package for WebView2 SDK 0.9.515-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/0.9.515-prerelease)

This Prerelease version of the WebView2 SDK requires Microsoft Edge version 84.0.515.0 or later.

* > [!IMPORTANT]
   > **Announcement**:  WebView2 now supports Windows Forms and WPF on .NET Framework 4.6.2 or later and .NET Core 3.0 or later in the **prerelease package**.

* For more information about building WPF apps, see [Get started with WebView2 in WPF apps](../get-started/wpf.md) and the WebView2 [WPF Reference](/dotnet/api/microsoft.web.webview2.wpf) for WPF-specific APIs.
* For more information about building Windows Forms apps, see [Get started with WebView2 in WinForms apps](../get-started/winforms.md) and the WebView2 [Windows Forms Reference](/dotnet/api/microsoft.web.webview2.winforms) for Windows Forms specific APIs.
* For more information about the CoreWebView2 APIs, see [.NET Reference](/dotnet/api/microsoft.web.webview2.core).
* > [!CAUTION]
   > **Known Issues**:  The WebView2 team is aware of some issues in the prerelease that are being resolved in future releases.
   >
   > * **DPI Awareness**:  WebView2 for WPF is currently not DPI aware.  When initializing WebView2 on high DPI monitors, there is a known issue where the WebView2 control at first initializes as a fraction of the window until the window is resized.
   > * **WPF Designer**:  The WPF designer isn't currently supported.  Add the WebView2 control in your app by directly modifying the appropriate XAML in a text editor.

<!-- end of Prerelease SDK 0.9.515-prerelease, for Runtime 84 (May 14, 2020) -->
