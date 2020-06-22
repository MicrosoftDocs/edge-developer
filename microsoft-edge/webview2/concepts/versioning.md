---
description: Versioning Models used for Microsoft Edge WebView2
title: Versioning of Microsoft Edge WebView2
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/08/2020
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, wpf apps, wpf, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---

# Understanding WebView2 package versions  

WebView2 depends on Microsoft Edge to function. Each WebView2 SDK requires that a minimum browser version is installed. The minimum version reflected in the package version of the SDK.  For example, if you use the `SDK package version 0.9.488`, then you must install Microsoft Edge with a build number of 488 or later. This browser version is also specified in our [Release Notes][Webview2Releasenotes]. For more information on the latest releases of the browser, see [Browser Channels][DeployedgeChannels].  

> [!NOTE]
> WebView2 is currently in Preview.  While, the Microsoft Edge WebView team strives to ensure backward compatibility between browser versions and SDKs, it is not guaranteed as some newer versions of the browser may not support older SDK versions.  If there are breaking changes between browser versions and SDKs, the Microsoft Edge WebView team indicates the changes in the [release notes][Webview2Releasenotes].  

In the future, the Microsoft Edge WebView team plans to change the distribution model.  The Microsoft Edge WebView team plans to remove the direct dependency on the Microsoft Edge browser from WebView2.  To learn more, see [WebView2 Runtime][Webview2IndexEdgeRuntime] in the [Distribution][Webview2Distibution] section.  
 
## Release and Pre-Release Package

While WebView2 is in preview,

The **release package** contains:
*   [Win32 C/C++ APIs](../reference/win32/0-9-538-reference-webview2) in the SDK that are expected to remain the same at GA

The **pre-release package** contains:
*   .NET APIs: [WPF](../reference/wpf/0-9-515-reference-webview2), [WinForms](../reference/winforms/0-9-515-reference-webview2), and [Core](../reference/dotnet/0-9-538-reference-webview2)
*   APIs marked as `Experimental` in the SDK.  

### Experimental APIs
Experimental APIs are APIs the WebView team is testing that represent functionality we plan to add in the future. These APIs are likely to change before shipping as fully stable APIs in the release package. Please evaluate these APIs and share feedback using the [WebView feedback repo][GithubMicrosoftedgeWebviewfeedback]. 

> [!IMPORTANT]
> It is strongly advised not to ship an application that has a dependency on an Experimental API.

### Roadmap  

After WebView2 reaches a stable general available state, the release package will contain all stable and supported Win32 C/C++ and .NET APIs.  The pre-release package will contain experimental APIs that are subject to change based on developer feedback and insights.

<!--links -->

[Webview2Distibution]: ./distribution.md "Distribution of Applications using WebView2 | Microsoft Docs"  
[Webview2IndexEdgeRuntime]: ./distribution.md#microsoft-edge-webview2-runtime "Microsoft Edge WebView2 Runtime - Distribution of Applications using WebView2 | Microsoft Docs"  
[Webview2ReferenceWin3209538Experimental]: ../reference/win32/0-9-538-reference-webview2.md#experimental "Experimental - Reference (WebView2) | Microsoft Docs"  
[Webview2Releasenotes]: ../releasenotes.md "Release notes for WebView2 SDK | Microsoft Docs"  

[DeployedgeChannels]: /deployedge/microsoft-edge-channels "Overview of the Microsoft Edge channels | Microsoft Docs"  

[GithubMicrosoftedgeWebviewfeedback]: https://github.com/MicrosoftEdge/WebViewFeedback "WebView Feedback - MicrosoftEdge/WebViewFeedback | GitHub"  
