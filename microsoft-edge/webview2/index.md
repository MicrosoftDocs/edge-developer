---
description: Host web content in your Win32 app with the Microsoft Edge WebView 2 control
title: Microsoft Edge WebView2 Control
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/18/2020
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

## Hybrid Application Approach  

Developers often have to choose between building a web application or a native application.  The decision hinges on the trade-off between reach and power.  Web applications allow for a broad reach.  As a Web developer, you may reuse most, if not all of your code, across all different platforms.  Native applications, however, utilize the capabilities of the entire native platform.  

:::image type="complex" source="./media/WebView2/webnative.png" alt-text="Web native":::
   Web native  
:::image-end:::  

Hybrid applications allow developers to enjoy the best of both worlds.  Hybrid application developers benefit from the ubiquity and strength of the web platform, and the power and full capabilities of the native platform.  

## WebView2 Benefits   

:::image type="complex" source="./media/WebView2/webviewreasons.png" alt-text="WebView reasons":::
   WebView reasons  
:::image-end:::  

:::row:::
   :::column span="1":::
      **Web ecosystem \& skillset**  
      Utilize the entire web platform, libraries, tooling, and talent that exists within the web ecosystem.  
   :::column-end:::
   :::column span="1":::
      **Rapid Innovation**  
      Web development allows for faster deployment and iteration.  
   :::column-end:::
   :::column span="1":::
      **Windows 7, 8, 10 support**  
      Support for a consistent user experience across Windows 7, 8, and 10.  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Native Capabilities**  
      Access the full set of Native APIs.  
   :::column-end:::
   :::column span="1":::
      **Code sharing**  
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
      **Fixed distribution** \(coming soon\)  
      Choose to package the Chromium bits in your application.  
   :::column-end:::
   :::column span="1":::
      **Incremental adoption**  
      Add web components piece by piece to your application.  
   :::column-end:::
:::row-end:::  

## Getting Started  

To build and test your application using the WebView2 control, you need to have both [Microsoft Edge (Chromium)](https://www.microsoftedgeinsider.com/download) and the [WebView2 SDK](https://aka.ms/webviewnuget) installed.  Select one of the following options to get started.  

*   [Getting Started with Win32 C/C++](./gettingstarted/win32.md)  
*   [Getting Started with WPF](./gettingstarted/wpf.md)  
*   [Getting Started with WinForms](./gettingstarted/winforms.md)  

The [WebView2 Samples](https://github.com/MicrosoftEdge/WebView2Samples) repository contains samples that demonstrate all of the WebView2 SDKs features and API usage patterns. As more features are added to the WebView2 SDK, the sample applications will be updated.   

## Supported Platforms  

A developer preview is available on the following programming environments.  

*   Win32 C/C++  
*   .NET Framework 4.6.2 or later  
*   .NET Core 3.0 or later  
*   [WinUI 3.0](/uwp/toolkits/winui3/)  

You mun run Windows 10, Windows 8.1, Windows 8, Windows 7, Windows Server 2016, Windows Server 2012/2012R2, or Windows Server 2008 R2.   

## App Distribution  

The WebView2 control utilizes the Microsoft Edge \(Chromium\) browser.  When distributing your app it is important to ensure that the Edge browser is installed on all user machines where your application runs.  You should also be aware of which version and channel is installed, for example  Stable, Beta, Dev, or Canary.  The WebView2 controller utilizes the most stable version of the browser when installed on a machine.  

### Future Planned Changes  

We recognize that the Edge browser may not be available on all user machines your application is intended to run, or that control of the Edge browser install process may be difficult.  To ensure your application runs on all machines, independent of the install status of the client Microsoft Edge browser, the Microsoft Edge WebView team releases the Microsoft Edge WebView2 Runtime.  The Microsoft Edge WebView team further updates WebView2 search for the stable version of the Runtime before searching for pre-release versions of the installed browser.  

We also recognize that some app developers operate in constrained environments, and so intend to support two distribution options, evergreen and fixed version.  

Evergreen is the recommended distribution model for most developers.  In this mode updates to the WebView2 Runtime is fully managed by Microsoft keeping you up to date automatically without additional effort from your application.  With this self-updating model you can be assured that your app is taking advantage of the latest features and security updates for hosted web content.  

For constrained environments, the Microsoft Edge WebView team also supports a fixed version distribution model.  In this model, your application selects and packages a specific WebView2 version.  Updates to the WebView version are the responsibility of the application and are independent of any managed Microsoft update mechanisms.  You should choose this model if it is crucial to be able to have absolute control over the browser version and you are taking advantage of update times of your application.  

## Microsoft Edge WebView2 Runtime  

The Microsoft Edge WebView2 Runtime is a packaging of the browser binaries optimized for use by WebView2 applications.  It functions stand-alone or side-by-side with a client Microsoft Edge Browser installation.  A single install of the run-time supports any number of WebView2 applications.  Installation of the runtime does not appear as a browser install to end-user, for example no desktop shortcuts, start menu entry, or protocol registration.  

An application utilizing WebView2 must ensure the installation of the Microsoft Edge WebView2 Runtime has occurred.  At application install time you should check the current install status, which can be determined by using [GetAvailableCoreWebView2BrowserVersionString](./reference/win32/0-9-488/webview2-idl.md#getavailablecorewebview2browserversionstring).  If the WebView2 Runtime is not available, you should chain the Microsoft Edge WebView2 Runtime Installer to your install flow.  

## Microsoft Edge WebView2 SDK  

To utilize WebView2 within your app you must install and reference the [WebView2 SDK](https://aka.ms/webviewnuget) in your application.  The WebView2 NuGet releases contain both a release and pre-release version.  The release version contains the public APIs the Microsoft Edge WebView team currently intends to release to general availability.   

### Next Steps  

For more detailed information on how to build and deploy WebView2 applications, checkout our conceptual documentation and how-to guides.  

#### Concepts  

*   [WebView2 SDK and Microsoft Edge Versioning](./concepts/versioning.md)  
*   [Distributing WebView2 Applications](./concepts/distribution.md)  

#### How-To Guides  

*   [Debugging WebView2 with DevTools and Visual Studio Script Debugging](./how-to/debugging.md)  
*   [Automating and Debugging WebView2 with Microsoft EdgeDriver](./how-to/webdriver.md)  

## Getting in touch with the WebView2 team  

Help build a richer WebView2 experience by sharing your feedback.  Visit the WebView [feedback repo](https://aka.ms/webviewfeedback) to submit feature requests or bug reports.  It is also a good place to search for known issues.  

> [!NOTE]
> During developer preview, the Microsoft Edge WebView team also collects data to help build a better WebView.  Users may turn off WebView data collection by navigating to `edge://settings/privacy` in the Microsoft Edge browser and turning off browser data collection.  
