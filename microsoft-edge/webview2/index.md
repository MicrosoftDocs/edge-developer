---
description: Host web content in your Win32 app with the Microsoft Edge WebView 2 control
title: Microsoft Edge WebView2 Control
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 02/20/2020
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---

# Introduction to Microsoft Edge WebView2 (Preview)

The Microsoft Edge WebView2 control enables you to embed web technologies (HTML, CSS, JavaScript) in your native applications. The WebView2 control uses [Microsoft Edge (Chromium)](https://www.microsoftedgeinsider.com/) as the rendering engine to display the web content in native applications. With WebView2, developers can embed web code in different parts of their native application, or build the entire native application within a single WebView. For information on how to start building a WebView2 application, see [Get Started](index.md#getting-started).

![whatwebview](./media/WebView2/whatwebview.PNG)


> [!NOTE]
> The WebView2 Preview is intended for early prototyping and to gather feedback to help us shape the API. We do not recommend that you use this in your production apps because there may be [breaking changes](releasenotes.md).

## Hybrid Application Approach

Developers often have to choose between building a web application or a native application. This decision hinges on the trade-off between reach and power. Web applications allow for a broad reach. Web developers can reuse most, if not all of their code, across all different platforms. Native applications, however, can utilize the capabilities of the entire native platform.

![webnative](./media/WebView2/webnative.PNG)


Hybrid applications allow developers to enjoy the best of both worlds. Hybrid application developers benefit from the ubiquity and strength of the web platform, and the power and full capabilities of the native platform.

## WebView2 Benefits 
![webviewreasons](./media/WebView2/webviewreasons.PNG)

1. Web ecosystem & skillset: utilize the entire web platform, libraries, tooling, and talent that exists within the web ecosystem.
2. Rapid Innovation: web development allows for faster deployment and iteration.
3. Windows 7, 8, 10 support: support for a consistent user experience across Windows 7, 8, and 10.
4. Native Capabilities: access the full set of Native APIs.
5. Code sharing: adding web code to your codebase allows for increased re-use across multiple platforms.
6. Microsoft support: When WebView2 GA’s, Microsoft will provide support and add new feature requests.
7. Evergreen distribution: rely on an up-to-date version of Chromium with regular platform updates and security patches.
8. Fixed distribution (coming soon): choice to package the Chromium bits in your application.
9. **Incremental Adoption:** add web components piece by piece into your application

## Getting Started
To build and test your application using the WebView2 control, you need to have both [Microsoft Edge (Chromium)](https://www.microsoftedgeinsider.com/download/) and the [WebView2 SDK](https://aka.ms/webviewnuget)installed. Select one of the options below to get started! 
- [Getting Started with Win32 C/C++]()
- [Getting Started with WPF]()
- [Getting Started with WinForms]()

The [WebView2 Samples](https://github.com/MicrosoftEdge/WebView2Samples) repository contains samples that demonstrate all of the WebView2 SDK's features and their API use patterns. As we add more features to the WebView2 SDK, we will regularly update our sample applications.
- [Win32 C/C++ Sample]()
- [WPF Sample]()
- [WinForms Sample]()

## Next Steps
For more thorough information on how to build and deploy WebView2 application checkout our conceptual documentation and how-to guides.

### Concepts
1. [WebView2 SDK and Microsoft Edge Versioning]()
2. [Distributing WebView2 Applications]()
3. [Utilizing and Disabling Microsoft Edge Browser Features in WebView2]()

### How-To Guides
1. [Debugging WebView2 with DevTools and Visual Studio Script Debugging]()
2. [Automating and Debugging WebView2 with Microsoft EdgeDriver]()

## Supported Platforms
A developer preview is available for: 

* Win32 C/C++.
* .NET Framework 4.6.2 or later.
* .NET Core 3.0 or later.
* [WinUI 3.0](https://docs.microsoft.com/uwp/toolkits/winui3/) on Windows 10, Windows 8.1, Windows 8, Windows 7, Windows Server 2016, Windows Server 2012/2012R2, and Windows Server 2008 R2. 

## Getting in touch with the WebView2 team

Help us build a richer WebView2 experience by sharing your feedback. Visit our [feedback repo](https://aka.ms/webviewfeedback) to submit feature requests or bug reports. It’s also a good place to search for known issues.
During developer preview, we will also be collecting telemetry data to help us build a better WebView. Users can turn off WebView data collection by navigating to edge://settings/privacy in the browser and turning off browser data collection.
