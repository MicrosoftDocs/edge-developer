---
title: Introduction to Microsoft Edge WebView2
description: Host web content in your Win32, .NET, UWP apps with the Microsoft Edge WebView2 control.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.localizationpriority: high
ms.technology: webview
ms.date: 11/12/2021
---
# Introduction to Microsoft Edge WebView2

The Microsoft Edge WebView2 control allows you to embed web technologies (HTML, CSS, and JavaScript) in your native apps.  The WebView2 control uses [Microsoft Edge](https://www.microsoftedgeinsider.com) as the rendering engine to display the web content in native apps.

With WebView2, you can embed web code in different parts of your native app, or build all of the native app within a single WebView2 instance.

![Diagram of an app with native UI areas in the left and top left, and WebView2 UI areas in the top right and bottom.](media/webview2/what-webview.png)

To start building a WebView2 app, see [Get started with WebView2](get-started/get-started.md).


<!-- ====================================================================== -->
## Hybrid app approach

Developers must often decide between building a web app or a native app.  This decision hinges on the tradeoff between reach and power:

*  Web apps allow for a broad reach.  As a Web developer, you can reuse most of your code across different platforms.

*  To access all the powerful capabilities of a native platform, use a native app.

The following diagram shows the spectrum of apps, from maximum reach, to maximum power:

![The spectrum of apps, from maximum reach but less power, to an optimal hybrid blend, to maximum power but less reach.](media/webview2/web-native.png)

*  Wide **reach** includes websites and Progressive Web Apps.

*  In the middle are hybrid apps, such as WebViews and Electron.

*  Maximum **power** is native apps.

Hybrid apps, in the middle of this spectrum, allow you to enjoy the best of both worlds: the ubiquity and strength of the web platform, combined with the power and full capabilities of the native platform.


<!-- ====================================================================== -->
## WebView2 benefits

*  **Web ecosystem and skill set**.  Utilize the entire web platform, libraries, tooling, and talent that exists within the web ecosystem.

*  **Rapid innovation**.  Web development allows for faster deployment and iteration.

*  **Windows 7, 8, 10, and 11 support**.  Support for a consistent user experience across Windows 7, Windows 8, Windows 10, and Windows 11.

*  **Native capabilities**.  Access the full set of Native APIs.

*  **Code-sharing**.  Add web code to your codebase allows for increased reuse across multiple platforms.

*  **Microsoft support**.  Microsoft provides support and adds new feature requests on supported platforms.

*  **Evergreen distribution**.  Rely on an up-to-date version of Chromium with regular platform updates and security patches.

*  **Fixed Version distribution**.  Optionally package a specific version of the Chromium bits in your app.

*  **Incremental adoption**.  Add web components piece-by-piece to your app.


<!-- ====================================================================== -->
## Supported platforms

The following programming environments are supported:

*  Win32 C/C++
*  .NET Framework 4.5 or later
*  .NET Core 3.1 or later
*  .NET 5
*  .NET 6
*  [WinUI 2.0](/windows/apps/winui/winui2/)
*  [WinUI 3.0](/windows/apps/winui/winui3/)

WebView2 apps can run on the following versions of Windows:

*  Windows 11
*  Windows 10
*  Windows 10 IoT Enterprise LTSC x32 2019
*  Windows 10 IoT Enterprise LTSC x64 2019
*  Windows 10 IoT Enterprise 21h1 x64
*  Windows 8.1
*  Windows 7 \*\*
*  Windows Server 2019
*  Windows Server 2016
*  Windows Server 2012
*  Windows Server 2012 R2
*  Windows Server 2008 R2 \*\*

\*\*WebView2 support for Windows 7 and Windows Server 2008 R2 have the same support timeline as Microsoft Edge.  See [Microsoft Edge supported Operating Systems](/deployedge/microsoft-edge-supported-operating-systems).


<!-- ====================================================================== -->
## See also

<!-- possibly remove some of these and rely on TOC instead -->

* [Overview of WebView2 features and APIs](concepts/overview-features-apis.md)
* [Understand the different WebView2 SDK versions](concepts/versioning.md)
* [Distribute your app and the WebView2 Runtime](concepts/distribution.md)
* [Best practices for developing secure WebView2 apps](concepts/security.md)
* [Manage user data folders](concepts/user-data-folder.md)
* [How to Debug with WebView2](how-to/debug.md)
* [Automating and testing WebView2 with Microsoft Edge WebDriver](how-to/webdriver.md)
* [WebView2Samples repo](https://github.com/MicrosoftEdge/WebView2Samples) - Samples that demonstrate WebView2 SDK features and API usage patterns, including recently added WebView2 features.
