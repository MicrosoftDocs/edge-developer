---
description: Versioning Models used for Microsoft Edge WebView2
title: Versioning of Microsoft Edge WebView2
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/22/2020
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, wpf apps, wpf, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---

# Understanding WebView2 package versions  

WebView2 depends on Microsoft Edge to function. Each WebView2 SDK requires that a minimum browser version is installed.  The minimum version reflected in the package version of the SDK.  For example, if you use the `SDK package version 0.9.488`, then you must install Microsoft Edge with a build number of 488 or later. The browser version is also specified in the WebView2 [Release Notes][Webview2Releasenotes].  For more information on the latest releases of the browser, see [Browser Channels][DeployedgeChannels].  

> [!NOTE]
> WebView2 is currently in preview.  While, the Microsoft Edge WebView team strives to ensure backward compatibility between browser versions and SDKs, it is not guaranteed as some newer versions of the browser may not support older SDK versions.  If there are breaking changes between browser versions and SDKs, the Microsoft Edge WebView team specifies the changes in the [release notes][Webview2Releasenotes].  

In the future, the Microsoft Edge WebView team plans to change the distribution model.  The Microsoft Edge WebView team plans to remove the direct dependency on the Microsoft Edge browser from WebView2.  For more information, see [WebView2 Runtime][Webview2IndexEdgeRuntime].  
 
## Release and pre-release package  

In preview, the release package contains the following.  

*   [Win32 C/C++ APIs][Webview2ReferenceWin3209538]: APIs in the SDK that are expected to remain the same at GA. 

In preview, the pre-release package contains the following.  

*   .NET APIs: [WPF][Webview2ReferenceWpf09515], [WinForms][Webview2ReferenceWinforms09515], and [Core][Webview2ReferenceDotnet09538]
*   Experimental APIs.  For more information, see the [Experimantal APIs](#experimental-apis) section.  

### Experimental APIs  

The WebView Team is testing APIs that represent future functionality named Experimental APIs.  The Experimental APIs are marked as `experimental` in the SDK.  Some of the Experimental APIs may ship as fully stable APIs in the release package.  Expect all of Experimental APIS to change before shipping.  Please evaluate the Experimental APIs and share feedback using the [WebView feedback repo][GithubMicrosoftedgeWebviewfeedback].   

> [!CAUTION]
> Do not to ship an application that has a dependency on an Experimental API.  

### Roadmap  

After WebView2 reaches a stable general available state, the release package contains all of the stable, supported Win32 C/C++ and .NET APIs.  The pre-release package contains experimental APIs that are subject to change based upon developer feedback and shared insights.  

<!--links -->

[Webview2IndexEdgeRuntime]: ./distribution.md#microsoft-edge-webview2-runtime "Microsoft Edge WebView2 Runtime - Distribution of Applications using WebView2 | Microsoft Docs"  
[Webview2ReferenceDotnet09538]: ../reference/dotnet/0-9-538-reference-webview2.md "Reference (WebView2) | Microsoft Docs"  
[Webview2ReferenceWinforms09515]: ../reference/winforms/0-9-515-reference-webview2,md "Reference (WebView2) | Microsoft Docs"  
[Webview2ReferenceWin3209538]: ../reference/win32/0-9-538-reference-webview2.md "Reference (WebView2) | Microsoft Docs"  
[Webview2ReferenceWpf09515]: ../reference/wpf/0-9-515-reference-webview2.md "Reference (WebView2) | Microsoft Docs"  
[Webview2Releasenotes]: ../releasenotes.md "Release notes for WebView2 SDK | Microsoft Docs"  

[DeployedgeChannels]: /deployedge/microsoft-edge-channels "Overview of the Microsoft Edge channels | Microsoft Docs"  

[GithubMicrosoftedgeWebviewfeedback]: https://github.com/MicrosoftEdge/WebViewFeedback "WebView Feedback - MicrosoftEdge/WebViewFeedback | GitHub"  
