---
title: Introduction to Microsoft Edge WebView2
description: Host web content in your Win32, .NET, UWP apps with the Microsoft Edge WebView2 control.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.localizationpriority: high
ms.subservice: webview
ms.date: 06/10/2025
---
# Introduction to Microsoft Edge WebView2

The Microsoft Edge WebView2 control allows you to embed web technologies (HTML, CSS, and JavaScript) in your native apps.  The WebView2 control uses Microsoft Edge as the rendering engine to display the web content in native apps.

With WebView2, you can embed web code in different parts of your native app, or build all of the native app within a single WebView2 instance.

![Diagram of an app with native UI areas in the left and top left, and WebView2 UI areas in the top right and bottom](./index-images/what-webview.png)


<!-- ====================================================================== -->
## Hybrid app approach

Developers must often decide between building a web app or a native app.  This decision hinges on the tradeoff between reach and power:

*  Web apps allow for a broad reach.  As a Web developer, you can reuse most of your code across different platforms.

*  To access all the powerful capabilities of a native platform, use a native app.

The following diagram shows the spectrum of apps, from maximum reach, to maximum power:

![The spectrum of apps, from maximum reach but less power, to an optimal hybrid blend, to maximum power but less reach](./index-images/web-native.png)

*  Wide **reach** includes websites and Progressive Web Apps.

*  In the middle are hybrid apps, such as WebViews and Electron.

*  Maximum **power** is native apps.

Hybrid apps, in the middle of this spectrum, allow you to enjoy the best of both worlds: the ubiquity and strength of the web platform, combined with the power and full capabilities of the native platform.


<!-- ====================================================================== -->
## WebView2 benefits

*  **Web ecosystem and skill set**.  Utilize the entire web platform, libraries, tooling, and talent that exists within the web ecosystem.

*  **Rapid innovation**.  Web development allows for faster deployment and iteration.

*  **Windows 10 and 11 support**.  Support for a consistent user experience across Windows 10 and Windows 11.

*  **Native capabilities**.  Access the full set of Native APIs.

*  **Code-sharing**.  Add web code to your codebase allows for increased reuse across multiple platforms.

*  **Microsoft support**.  Microsoft provides support and adds new feature requests on supported platforms.

*  **Evergreen distribution**.  Rely on an up-to-date version of Chromium with regular platform updates and security patches.

*  **Fixed Version distribution**.  Optionally package a specific version of the Chromium bits in your app.

*  **Incremental adoption**.  Add web components piece-by-piece to your app.


<!-- ====================================================================== -->
## Supported Windows versions

The Windows operating systems that are supported by Webview2 are the same as those supported by Microsoft Edge.

For more information about other supported operating systems, see [Microsoft Edge supported Operating Systems](/deployedge/microsoft-edge-supported-operating-systems).


<!-- ------------------------------ -->
#### Windows Client

WebView2 apps can run on the following versions of Windows Client:

<!-- newest last, per linked page -->
* Windows 10 SAC 1709 and later
* Windows 10 Enterprise 2015 LTSC
* Windows 10 Enterprise 2016 LTSC
* Windows 10 Enterprise 2019 LTSC
* Windows 10 Enterprise 2021 LTSC
* Windows 10 Enterprise multi-session
* Windows 10 IoT Enterprise SAC
* Windows 10 IoT Enterprise 2019 LTSC
* Windows 10 IoT Enterprise 2021 LTSC
* Windows 11
* Windows 11 Enterprise multi-session
* Windows 11 IoT Enterprise 2024 LTSC

For details, see [Windows Client](/deployedge/microsoft-edge-supported-operating-systems#windows-client) in _Microsoft Edge supported Operating Systems_.


<!-- ------------------------------ -->
#### Windows Server

WebView2 apps can run on the following versions of Windows Server:

* Windows Server 2016 (LTSC)
* Windows Server 2019 (LTSC)
* Windows Server 2022 (LTSC)
* Windows Server (SAC)

For details, see [Windows Server](/deployedge/microsoft-edge-supported-operating-systems#windows-server) in _Microsoft Edge supported Operating Systems_.


<!-- ====================================================================== -->
## Supported programming environments and devices

The following programming environments are supported for WebView2:

*  Win32 C/C++
*  .NET Framework 4.6.2 or later
*  .NET Core 3.1 or later
*  .NET 5 or later
*  [WinUI 2.0](/windows/apps/winui/winui2/)
*  [WinUI 3.0](/windows/apps/winui/winui3/)

In addition to Windows devices, WebView2 is also supported on the following devices:
*  Xbox
*  HoloLens 2


<!-- ====================================================================== -->
## Sequence of samples to install and run

To start learning WebView2, use the following recommended sequence:

1. Install Visual Studio, install preview channels of Microsoft Edge, and clone the `WebView2Samples` repo.  See [Set up your Dev environment for WebView2](./how-to/machine-setup.md).
1. Install and run the main sample.  See [Win32 sample app](./samples/webview2apissample.md).
1. Install and run the sample for your target platform, if it's a platform other than Win32.  See [WebView2 sample apps](./samples/index.md).
1. Install and run the finished Getting Started tutorial for your target platform (if the finished project is provided).  See [Getting Started tutorials](./get-started/get-started.md).
1. Do the Getting Started steps to add WebView2 code to the Visual Studio starter project for your platform.  See [Getting Started tutorials](./get-started/get-started.md).

Some samples might require updating an SDK, as explained in the article for each sample.

After your environment is set up and the samples build and run on your machine, you can develop your app by reading the other documentation, such as [Overview of WebView2 APIs](./concepts/overview-features-apis.md).


<!-- ====================================================================== -->
## See also

* [Overview of WebView2 APIs](concepts/overview-features-apis.md)
* [Distribute your app and the WebView2 Runtime](concepts/distribution.md)

Edge Enterprise docs:
* [Microsoft Edge release schedule](/deployedge/microsoft-edge-release-schedule)

developer.microsoft.com:
* [Microsoft Edge WebView2](https://developer.microsoft.com/microsoft-edge/webview2) - initial introduction to WebView2 features at developer.microsoft.com.

Microsoft.com:
* [Become a Microsoft Edge Insider](https://www.microsoft.com/edge/download/insider) - download a preview channel of Microsoft Edge (Beta, Dev, or Canary).

YouTube:
* [Building, Deploying, and Managing WebView2 Applications](https://www.youtube.com/watch?v=LX-eXvcSx6c) - March 2, 2021.
