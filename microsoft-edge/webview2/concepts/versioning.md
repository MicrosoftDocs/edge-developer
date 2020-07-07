---
description: Versioning Models used for Microsoft Edge WebView2
title: Versioning of Microsoft Edge WebView2
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/06/2020
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, wpf apps, wpf, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---

# Understand WebView2 SDK versions  

WebView2 depends on Microsoft Edge to function.  Each WebView2 SDK requires that a minimum browser version is installed.  The minimum version is reflected in the package version of the SDK.  For example, if you use the `SDK package version 0.9.488`, then you must install Microsoft Edge with a build number of 488 or later.  The browser version is also specified in the WebView2 [Release Notes][Releasenotes].  For more information on the latest releases of the browser, see [Browser Channels][DeployedgeChannels].  

> [!NOTE]
> WebView2 is currently in preview.  While the WebView team strives to ensure backward compatibility between browser versions and SDKs, it is not guaranteed since newer versions of the browser may not support older SDK versions.  If there are breaking changes between browser versions and SDKs, the WebView team specifies the changes in the [release notes][Releasenotes].  

In the future, the  WebView team plans to change the distribution model for WebView2 applications.  For more information, see see [Evergreen distribution mode][DistributionEvergreenMode].  
 
## Release and pre-release package  

In preview, the release package contains the following.  

*   [Win32 C/C++ APIs][ReferenceWin3209538]: APIs in the SDK that are expected to remain the same at GA.  

In preview, the pre-release package contains the following components.  

*   .NET APIs: [WPF][ReferenceWpf09515], [WinForms][ReferenceWinforms09515], and [Core][ReferenceDotnet09538]  
*   Experimental APIs.  For more information, see the [Experimental APIs](#experimental-apis) section.  

### Experimental APIs  

The WebView Team is testing APIs that represent future functionality named Experimental APIs.  The Experimental APIs are marked as `experimental` in the SDK.  Some Experimental APIs may ship as fully stable APIs in the release package.  You should expect all experimental APIs to change before release.  Please evaluate the Experimental APIs and share feedback using the [WebView feedback repo][GithubMicrosoftedgeWebviewfeedback].   

> [!CAUTION]
> Avoid using the experimental APIs in production applications.  

### Roadmap  

After WebView2 reaches a stable general available state, the release package contains all of the stable, supported Win32 C/C++ and .NET APIs.  The pre-release package contains experimental APIs that are subject to change based upon developer feedback and shared insights.  

<!--## Versioning  

After you have used a particular version of the SDK to build your app, your app may end up running with an older or newer version of installed browser binaries.  Until version 1.0.0.0 of WebView2 there may be breaking changes during updates that prevent your SDK from working with different versions of installed browser binaries.  After version 1.0.0.0, different versions of the SDK may work with different versions of the installed browser by using the following best practices.  

1.  To account for breaking changes to the API be sure to check for failure when requesting the DLL export `CreateCoreWebView2Environment` and when running `QueryInterface` on any `CoreWebView2` object.  A return value of `E_NOINTERFACE` indicates that the SDK is not compatible with the Microsoft Edge browser binaries.  
1.  Checking for failure from `QueryInterface` also accounts for cases where the SDK is newer than the version of the Microsoft Edge browser and your app attempts to use an interface of which the Microsoft Edge browser is unaware.  

1.  When an interface is unavailable, you may consider disabling the associated feature if possible, or otherwise informing your users to update their browsers.  -->  

<!--links -->

[DistributionEvergreenMode]: ./distribution.md#evergreen-distribution-mode "Evergreen distribution mode - Distribution of Applications using WebView2 | Microsoft Docs"  
[ReferenceDotnet09538]: ../reference/dotnet/0-9-538-reference-webview2.md "Reference (WebView2) | Microsoft Docs"  
[ReferenceWinforms09515]: ../reference/winforms/0-9-515-reference-webview2.md "Reference (WebView2) | Microsoft Docs"  
[ReferenceWin3209538]: ../reference/win32/0-9-538-reference-webview2.md "Reference (WebView2) | Microsoft Docs"  
[ReferenceWpf09515]: ../reference/wpf/0-9-515-reference-webview2.md "Reference (WebView2) | Microsoft Docs"  
[Releasenotes]: ../releasenotes.md "Release notes for WebView2 SDK | Microsoft Docs"  

[DeployedgeChannels]: /deployedge/microsoft-edge-channels "Overview of the Microsoft Edge channels | Microsoft Docs"  

[GithubMicrosoftedgeWebviewfeedback]: https://github.com/MicrosoftEdge/WebViewFeedback "WebView Feedback - MicrosoftEdge/WebViewFeedback | GitHub"  
