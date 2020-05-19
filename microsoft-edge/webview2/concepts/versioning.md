---
description: Versioning Models used for Microsoft Edge WebView2
title: Versioning of Microsoft Edge WebView2
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/19/2020
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, wpf apps, wpf, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---

# Understanding browser versions and WebView2  

WebView2 depends on Microsoft Edge to function.  Each WebView2 SDK requires that a minimum browser version is installed.  This browser version is specified in our [Release Notes][Webview2Releasenotes].  You may see the minimum version reflected in the package version of the SDK.  For example, if you use the `SDK package version 0.9.488`, then you must install Microsoft Edge with a build number of 488 or later.  For more information on the latest releases of the browser, see [Browser Channels][DeployedgeChannels].  

> [!NOTE]
> WebView2 is currently in Preview.  While, the Microsoft Edge WebView team strives to ensure backward compatibility between browser versions and SDKs, it is not guaranteed as some newer versions of the browser may not support older SDK versions.  If there are breaking changes between browser versions and SDKs, the Microsoft Edge WebView team indicates the changes in the [release notes][Webview2Releasenotes].  

In the future, the Microsoft Edge WebView team plans to change the distribution model.  The Microsoft Edge WebView team plans to remove the direct dependency on the Microsoft Edge browser from WebView2.  To learn more, see [WebView2 Runtime][Webview2IndexEdgeRuntime] in the [Distribution][Webview2Distibution] section.  

## Experimental APIs  

While WebView2 is a preview, the APIs in the SDK are expected to remain the same at GA.  There are [experimental APIs][Webview2ReferenceWin3209488Experimental] included in the SDK.  Please evaluate the experimental APIs and send your feedback using the [WebView feedback repo][GithubMicrosoftedgeWebviewfeedback].  

### Roadmap  

After WebView2 reaches a stable general available state and we release the 1.0.0 SDK, the Microsoft Edge WebView team plans to move all experimental APIs to a pre-release package.  The pre-release package continues to allow for feedback and insight into the latest features, while the stable release version maintains backward compatibility.  

<!--links -->

[Webview2Distibution]: ./distribution.md "Distribution of Applications using WebView2 | Microsoft Docs"  
[Webview2IndexEdgeRuntime]: ./distribution.md#microsoft-edge-webview2-runtime "Microsoft Edge WebView2 Runtime - Distribution of Applications using WebView2 | Microsoft Docs"  
[Webview2ReferenceWin3209488Experimental]: ../reference/win32/0-9-488-reference-webview2.md#experimental "Experimental - Reference (WebView2) | Microsoft Docs"  
[Webview2Releasenotes]: ../releasenotes.md "Release notes for WebView2 SDK | Microsoft Docs"  

[DeployedgeChannels]: /deployedge/microsoft-edge-channels "Overview of the Microsoft Edge channels | Microsoft Docs"  

[GithubMicrosoftedgeWebviewfeedback]: https://github.com/MicrosoftEdge/WebViewFeedback "WebView Feedback - MicrosoftEdge/WebViewFeedback | GitHub"  
