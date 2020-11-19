---
description: Versioning Models used for Microsoft Edge WebView2
title: Versioning of Microsoft Edge WebView2
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 11/18/2020
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, wpf apps, wpf, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---
# Understand WebView2 SDK versions

New versions of the WebView2 SDK are shipped at the same general cadence as the Microsoft Edge \(Chromium\) browser, which is approximately every six weeks.  

## Release and prerelease package  

The WebView2 NuGet package contains both a release and pre-release package.  

The release package is forward compatible and contains the [Win32 C/C++ APIs][ReferenceWin32].  APIs in this SDK are fully supported.  

The prerelease package is a superset of the release package with the additional components listed below.  

*   .NET APIs: [WPF][DotnetMicrosoftWebWebview2WpfNamespace], [WinForms][DotnetMicrosoftWebWebview2WinformsNamespace], and [Core][DotnetMicrosoftWebWebview2CoreNamespace]  
*   Experimental APIs:  For more information, navigate to the [Experimental APIs](#experimental-apis) section.  

### Roadmap  

The release package contains all of the stable, supported Win32 C/C++ APIs.  In the future, the release package will contain all stable, supported .NET APIs when they're made generally available.  The prerelease package contains experimental APIs that are subject to change based on your feedback. 

## Experimental APIs  

The WebView team is seeking feedback on experimental APIs that may be included in future releases.  The experimental APIs are marked as `experimental` in the SDK.  You can evaluate the Experimental APIs and share feedback using the [WebView feedback repo][GithubMicrosoftedgeWebviewfeedback].  

> [!CAUTION]
> Experimental APIs may be introduced, modified, and removed from SDK to SDK.  Avoid using the experimental APIs in production apps.  

> [!NOTE]
> Experimental APIs may not be available in your installed version of the WebView2 Runtime.  

## Matching WebView2 Runtime versions  
WebView2 applications require users to install a [WebView2 Runtime][MicrosoftDeveloperEdgeWebview2]. The WebView2 Runtime updates automatically to the latest version that's available. In some scenarios, users may need to stop automatic WebView2 Runtime updates, which can cause application compatibility issues.

If WebView2 Runtime updates are stopped, ensure you understand the minimum version of the [WebView2 Runtime][MicrosoftDeveloperEdgeWebview2] that's required by your application. Consider the following two items:  

1. **The minimum required version of the SDK:** This information is specified in the WebView2 [Release Notes][Releasenotes]. For example, for SDK version [1.0.622.22](https://docs.microsoft.com/microsoft-edge/webview2/releasenotes#1062222), you must install either the [WebView2 Runtime][MicrosoftDeveloperEdgeWebview2] or a [non-stable Microsoft Edge channel][MicrosoftedgeinsiderDownload] with a build number of **86.0.616.0** or later. The minimum version required will only change when there's a breaking change in the web platform.

2. **The minimum required version for the interfaces and APIs you depend on:** New interfaces and APIs are added periodically to WebView2. Different APIs and interfaces within an SDK require different versions of the WebView2 Runtime depending on when they were introduced. For example, a new API or interface added in SDK version [1.0.622.22](https://docs.microsoft.com/microsoft-edge/webview2/releasenotes#1062222) will have a minimum WebView2 Runtime requirement that corresponds to the build number of the package number: **86.0.622.0**. An API or interface added in a subsequent SDK release requires the WebView2 Runtime that has the same version number as the SDK. You can determine if the WebView2 Runtime version supports an interface or API [programmatically](#determining-interface-and-api-WebView2-Runtime requirement).

> [!IMPORTANT]
> When developing Evergreen WebView2 applications, regularly test your application against the latest versions of the WebView2 Runtime and non-stable Microsoft Edge browsers.  Because the web platform is constantly evolving, regular testing is the best way to ensure your application performs as intended.  

### Determining WebView2 Runtime requirement

Depending on which SDK you use, consider the following items: 

*   **Win32 C/C++**.  When using `QueryInterface` to obtain a new interface, check for a return value of `E_NOINTERFACE`.  This value may indicate that the WebView2 Runtime is a previous version, and doesn't support that interface. Navigate to the WebView2API Sample for an [example](https://github.com/MicrosoftEdge/WebView2Samples/blob/8ec7de9d3e80a942bc7025cffad98eee75e11e64/SampleApps/WebView2APISample/AppWindow.cpp#L622) of how this works.
*   **.NET and WinUI**.  Check for a `No such interface supported` exception when using methods, properties, and events that were added to more recent SDKs.  This exception may occur when the WebView2 Runtime is a previous version, and doesn't support those APIs.  

If an API is unavailable, consider removing the associated feature, or inform your users that they need to update their version of the WebView2 Runtime.  



 

<!--## Versioning  

After you have used a particular version of the SDK to build your app, your app may end up running with an older or newer version of installed browser binaries.  Until version 1.0.0.0 of WebView2 there may be breaking changes during updates that prevent your SDK from working with different versions of installed browser binaries.  After version 1.0.0.0, different versions of the SDK may work with different versions of the installed browser by using the following best practices.  

1.  To account for breaking changes to the API be sure to check for failure when requesting the DLL export `CreateCoreWebView2Environment` and when running `QueryInterface` on any `CoreWebView2` object.  A return value of `E_NOINTERFACE` indicates that the SDK is not compatible with the Microsoft Edge browser binaries.  
1.  Checking for failure from `QueryInterface` also accounts for cases where the SDK is newer than the version of the Microsoft Edge browser and your app attempts to use an interface of which the Microsoft Edge browser is unaware.  

1.  When an interface is unavailable, you may consider disabling the associated feature if possible, or otherwise informing your users to update their browsers.  -->  

<!--links -->  

[Releasenotes]: ../releasenotes.md "Release notes for WebView2 SDK | Microsoft Docs"  

[DeployedgeChannels]: /deployedge/microsoft-edge-channels "Overview of the Microsoft Edge channels | Microsoft Docs"  

[DotnetMicrosoftWebWebview2CoreNamespace]: /dotnet/api/microsoft.web.webview2.core "Microsoft.Web.WebView2.Core Namespace | Microsoft Docs"  
[DotnetMicrosoftWebWebview2WpfNamespace]: /dotnet/api/microsoft.web.webview2.wpf "Microsoft.Web.WebView2.Wpf Namespace | Microsoft Docs"  
[DotnetMicrosoftWebWebview2WinformsNamespace]: /dotnet/api/microsoft.web.webview2.winforms "Microsoft.Web.WebView2.WinForms Namespace | Microsoft Docs"  
[ReferenceWin32]: /microsoft-edge/webview2/reference/win32 "WebView2 Win32 C++ Reference | Microsoft Docs"  

[MicrosoftDeveloperEdgeWebview2]: https://developer.microsoft.com/microsoft-edge/webview2/ "Microsoft Edge WebView2 | Microsoft Developer"  

[GithubMicrosoftedgeWebviewfeedback]: https://github.com/MicrosoftEdge/WebViewFeedback "WebView Feedback - MicrosoftEdge/WebViewFeedback | GitHub"  

[MicrosoftedgeinsiderDownload]: https://www.microsoftedgeinsider.com/download "Download Microsoft Edge Insider Channels"  
