---
description: Host web content in your Win32, .NET, UWP apps with the Microsoft Edge WebView2 control
title: Microsoft Edge WebView2 Control
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 02/24/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, CoreWebView2, ICoreWebView2Host, browser control, edge html, Windows Forms, WinForms, WPF, .NET, WinUI, Project Reunion
---
# Introduction to Microsoft Edge WebView2  

The Microsoft Edge WebView2 control enables you to embed web technologies \(HTML, CSS, and JavaScript\) in your native apps.  The WebView2 control uses [Microsoft Edge (Chromium)][MicrosoftedgeinsiderMain] as the rendering engine to display the web content in native apps.  With WebView2, you may embed web code in different parts of your native app.  Build all of the native app within a single WebView instance.  For information on how to start building a WebView2 app, navigate to [Get Started](#getting-started).  

:::image type="complex" source="./media/WebView2/whatwebview.png" alt-text="What is WebView?" lightbox="./media/WebView2/whatwebview.png":::
   What is WebView?  
:::image-end:::  

## Hybrid app approach  

Developers must often decide between building a web app or a native app.  The decision hinges on the trade-off between reach and power.  Web apps allow for a broad reach.  As a Web developer, you may reuse most of your code across different platforms.  To access the all capabilities of a native platform, use a native app.  

:::image type="complex" source="./media/WebView2/webnative.png" alt-text="Web native" lightbox="./media/WebView2/webnative.png":::
   Web native  
:::image-end:::  

Hybrid apps allow developers to enjoy the best of both worlds.  Hybrid app developers benefit from the following advantages.  

*   The ubiquity and strength of the web platform.  
*   The power and full capabilities of the native platform.  
    
## WebView2 benefits   

<!--  
:::image type="complex" source="./media/WebView2/webviewreasons.png" alt-text="WebView reasons" lightbox="./media/WebView2/webviewreasons.png":::
   WebView reasons  
:::image-end:::  
-->  

:::row:::
   :::column span="1":::
      :::image type="icon" source="./media/webview-reasons-web-ecosystem-skillset.msft.png":::  
      **Web ecosystem \& skillset**  
      Utilize the entire web platform, libraries, tooling, and talent that exists within the web ecosystem.  
   :::column-end:::
   :::column span="1":::
      :::image type="icon" source="./media/webview-reasons-rapid-innovation.msft.png":::  
      **Rapid innovation**  
      Web development allows for faster deployment and iteration.  
   :::column-end:::
   :::column span="1":::
      :::image type="icon" source="./media/webview-reasons-windows-7-8-10-support.msft.png":::  
      **Windows 7, 8, and 10 support**  
      Support for a consistent user experience across Windows 7, Windows 8, and Windows 10.  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      :::image type="icon" source="./media/webview-reasons-native-capabilities.msft.png":::  
      **Native capabilities**  
      Access the full set of Native APIs.  
   :::column-end:::
   :::column span="1":::
      :::image type="icon" source="./media/webview-reasons-code-sharing.msft.png":::  
      **Code-sharing**  
      Add web code to your codebase allows for increased reuse across multiple platforms.  
   :::column-end:::
   :::column span="1":::
      :::image type="icon" source="./media/webview-reasons-microsoft-support.msft.png":::  
      **Microsoft support**  
      Microsoft provides support and adds new feature requests when WebView2 releases at Generally Availability \(GA\).  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      :::image type="icon" source="./media/webview-reasons-evergreen.msft.png":::  
      **Evergreen distribution**  
      Rely on an up-to-date version of Chromium with regular platform updates and security patches.  
   :::column-end:::
   :::column span="1":::
      :::image type="icon" source="./media/webview-reasons-fixed.msft.png":::  
      **Fixed**  
      \(coming soon\)  Choose to package the Chromium bits in your app.  
   :::column-end:::
   :::column span="1":::
      :::image type="icon" source="./media/webview-reasons-incremental-adoption.msft.png":::  
      **Incremental adoption**  
      Add web components piece by piece to your app.  
   :::column-end:::
:::row-end:::  

## Getting started  

To build and test your app using the WebView2 control, you need to have <!--both [Microsoft Edge (Chromium)][MicrosoftedgeinsiderDownload] and  -->the [WebView2 SDK][NugetPackagesMicrosoftWebWebView2] installed.  Select one of the following options to get started.  

*   [Getting Started with Win32 C/C++][Webview2GettingstartedWin32]  
*   [Getting Started with WPF][Webview2GettingstartedWpf]  
*   [Getting Started with WinForms][Webview2GettingstartedWinforms]  
*   [Getting Started with WinUI3][Webview2GettingstartedWinui]  

The [WebView2 Samples][GithubMicrosoftedgeWebview2samples] repository contains samples that demonstrate all of the WebView2 SDK features and API usage patterns.  As more features are added to the WebView2 SDK, the sample apps will be updated.  

## Supported platforms  

A General Availability \(GA\) or Preview version is available on the following programming environments.  

*   Win32 C/C++ \(GA\)  
*   .NET Framework 4.5 or later  
*   .NET Core 3.1 or later  
*   .NET 5  
*   [WinUI 3.0][UwpToolkitsWinui3] \(Preview\)  

You may run WebView2 apps on the following versions of Windows.  

*   Windows 10  
*   Windows 8.1  
*   Windows 7 \*\*  
*   Windows Server 2019  
*   Windows Server 2016  
*   Windows Server 2012  
*   Windows Server 2012 R2  
*   Windows Server 2008 R2 \*\*  

> [!IMPORTANT]
> \*\* WebView2 support for Windows 7 and Windows Server 2008 R2 has the same support cycle as Microsoft Edge.  For more information, navigate to [Microsoft Edge supported Operating Systems][DeployedgeMicrosoftEdgeSupportedOS].  

## Next steps  

For more information on how to build and deploy WebView2 apps, review the conceptual documentation and how-to guides.  

#### Concepts  

*   [Understand WebView2 SDK versions][Webview2ConceptsVersioning]  
*   [Distribution of apps using WebView2][Webview2ConceptsDistribution]  
*   [Best practices for developing secure WebView2 apps][Webview2ConceptsSecurity]  
*   [Manage User Data Folder in WebView2 apps][Webview2ConceptsUserdatafolder]  
 
#### How-To guides  

*   [How to Debug with WebView2][Webview2HowtoDebug]  
*   [Automating and testing WebView2 with Microsoft Edge Driver][Webview2HowtoWebdriver]  

## Getting in touch with the Microsoft Edge WebView team  

[!INCLUDE [contact WebView team note](./includes/contact-webview-team-note.md)]  

<!-- links -->  

[Webview2ConceptsDistribution]: ./concepts/distribution.md "Distribution of apps using WebView2 | Microsoft Docs"  
[Webview2ConceptsSecurity]: ./concepts/security.md "Best practices for developing secure WebView2 apps | Microsoft Docs"  
[Webview2ConceptsUserdatafolder]: ./concepts/userdatafolder.md "Managing the User Data Folder | Microsoft Docs"  
[Webview2ConceptsVersioning]: ./concepts/versioning.md "Understand WebView2 SDK versions | Microsoft Docs"  
[Webview2GettingstartedWin32]: ./gettingstarted/win32.md "Getting started with WebView2 | Microsoft Docs"  
[Webview2GettingstartedWinforms]: ./gettingstarted/winforms.md "Getting started with WebView2 in Windows Forms apps (Preview) | Microsoft Docs"  
[Webview2GettingstartedWinui]: ./gettingstarted/winui.md "Getting started with WebView2 in WinUI3 (Preview) | Microsoft Docs"  
[Webview2GettingstartedWpf]: ./gettingstarted/wpf.md "Getting started with WebView2 in WPF (Preview) | Microsoft Docs"  
[Webview2HowtoDebug]: ./howto/debug.md "How to Debug with WebView2 | Microsoft Docs"  
[Webview2HowtoWebdriver]: ./howto/webdriver.md "Automating and testing WebView2 with Microsoft Edge Driver | Microsoft Docs"  
[Webview2Releasenotes]: ./releasenotes.md "Release notes for WebView2 SDK | Microsoft Docs"  

[UwpToolkitsWinui3]: /uwp/toolkits/winui3/index "Windows UI Library 3 Preview 2 (July 2020) | Microsoft Docs"  

[DeployedgeMicrosoftEdgeSupportedOS]: /deployedge/microsoft-edge-supported-operating-systems "Microsoft Edge supported Operating Systems | Microsoft Docs"  

[GithubMicrosoftedgeWebview2samples]: https://github.com/MicrosoftEdge/WebView2Samples "WebView2 Samples - MicrosoftEdge/WebView2Samples | GitHub"  
[GithubMicrosoftedgeWebviewfeddback]: https://github.com/MicrosoftEdge/WebViewFeedback "WebView Feedback - MicrosoftEdge/WebViewFeedback | GitHub"  

[MicrosoftedgeinsiderMain]: https://www.microsoftedgeinsider.com "Microsoft Edge Insider"  
[MicrosoftedgeinsiderDownload]: https://www.microsoftedgeinsider.com/download "Download Microsoft Edge Insider"  

[NugetPackagesMicrosoftWebWebView2]: https://www.nuget.org/packages/Microsoft.Web.WebView2 "Microsoft.Web.WebView2 | NuGet Gallery"  
