---
description: Host web content in your Win32 app with the Microsoft Edge WebView 2 control
title: Microsoft Edge WebView2 Control
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/21/2020
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, CoreWebView2, ICoreWebView2Host, browser control, edge html, Windows Forms, WinForms, WPF, .NET
---

# Introduction to Microsoft Edge WebView2 (Preview)  

The Microsoft Edge WebView2 control enables you to embed web technologies \(HTML, CSS, and JavaScript\) in your native applications.  The WebView2 control uses [Microsoft Edge (Chromium)](https://www.microsoftedgeinsider.com) as the rendering engine to display the web content in native applications.  With WebView2, you may embed web code in different parts of your native application, or build the entire native application within a single WebView.  For information on how to start building a WebView2 application, see [Get Started](./index.md#getting-started).  

:::image type="complex" source="./media/WebView2/whatwebview.png" alt-text="What is WebView":::
   What is WebView  
:::image-end:::  

> [!NOTE]
> The WebView2 Preview is intended for early prototyping and to gather feedback to help to shape the API.  The Microsoft Edge WebView team does not recommend that you use the preview in your production apps because there may be [breaking changes](./releasenotes.md).  

## Hybrid application approach  

Developers often have to choose between building a web application or a native application.  The decision hinges on the trade-off between reach and power.  Web applications allow for a broad reach.  As a Web developer, you may reuse most, if not all of your code, across all different platforms.  Native applications, however, utilize the capabilities of the entire native platform.  

:::image type="complex" source="./media/WebView2/webnative.png" alt-text="Web native":::
   Web native  
:::image-end:::  

Hybrid applications allow developers to enjoy the best of both worlds.  Hybrid application developers benefit from the ubiquity and strength of the web platform, and the power and full capabilities of the native platform.  

## WebView2 benefits   

:::image type="complex" source="./media/WebView2/webviewreasons.png" alt-text="WebView reasons":::
   WebView reasons  
:::image-end:::  

:::row:::
   :::column span="1":::
      **Web ecosystem \& skillset**  
      Utilize the entire web platform, libraries, tooling, and talent that exists within the web ecosystem.  
   :::column-end:::
   :::column span="1":::
      **Rapid innovation**  
      Web development allows for faster deployment and iteration.  
   :::column-end:::
   :::column span="1":::
      **Windows 7, 8, 10 support**  
      Support for a consistent user experience across Windows 7, 8, and 10.  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Native capabilities**  
      Access the full set of Native APIs.  
   :::column-end:::
   :::column span="1":::
      **Code-sharing**  
      Add web code to your codebase allows for increased re-use across multiple platforms.  
   :::column-end:::
   :::column span="1":::
      **Microsoft support**  
      Microsoft provides support and adds new feature requests when WebView2 is release as GA.  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Evergreen distribution**  
      Rely on an up-to-date version of Chromium with regular platform updates and security patches.  
   :::column-end:::
   :::column span="1":::
      **Fixed** \(coming soon\)  
      Choose to package the Chromium bits in your application.  
   :::column-end:::
   :::column span="1":::
      **Incremental adoption**  
      Add web components piece by piece to your application.  
   :::column-end:::
:::row-end:::

## Getting started  

To build and test your application using the WebView2 control, you need to have both [Microsoft Edge (Chromium)](https://www.microsoftedgeinsider.com/download) and the [WebView2 SDK](https://aka.ms/webviewnuget) installed.  Select one of the following options to get started.  

*   [Getting Started with Win32 C/C++](./gettingstarted/win32.md)  
*   [Getting Started with WPF](./gettingstarted/wpf.md)  
*   [Getting Started with WinForms](./gettingstarted/winforms.md)  

The [WebView2 Samples](https://github.com/MicrosoftEdge/WebView2Samples) repository contains samples that demonstrate all of the WebView2 SDKs features and API usage patterns. As more features are added to the WebView2 SDK, the sample applications will be updated.   

## Supported platforms  

A developer preview is available on the following programming environments.  

*   Win32 C/C++  
*   .NET Framework 4.6.2 or later  
*   .NET Core 3.0 or later  
*   [WinUI 3.0](/uwp/toolkits/winui3/)  

You are able to run WebView2 applications on the following versions of Windows.  

*   Windows 10  
*   Windows 8.1  
*   Windows 8  
*   Windows 7  
*   Windows Server 2016  
*   Windows Server 2012  
*   Windows Server 2012R2  
*   Windows Server 2008 R2  

## Next steps  

For more detailed information on how to build and deploy WebView2 applications, checkout the conceptual documentation and how-to guides.  

#### Concepts  

*   [WebView2 SDK and Microsoft Edge versioning](./concepts/versioning.md)
*   [Distributing WebView2 applications](./concepts/distribution.md)  
 
#### How-To guides  

*   [Debugging WebView2 with DevTools and Visual Studio script debugging](./howto/debug.md)  
*   [Automating and debugging WebView2 with Microsoft EdgeDriver](./howto/webdriver.md)  

<!--todo: add how-tos when available  -->  

## Getting in touch with the WebView2 team  

Help build a richer WebView2 experience by sharing your feedback.  Visit the WebView [feedback repo](https://aka.ms/webviewfeedback) to submit feature requests or bug reports.  It is also a good place to search for known issues.  

> [!NOTE]
> During developer preview, the Microsoft Edge WebView team also collects data to help build a better WebView.  Users may turn off WebView data collection by navigating to `edge://settings/privacy` in the Microsoft Edge browser and turning off browser data collection.  
