---
description: Version Models used for Microsoft Edge WebView2
title: Understand WebView2 SDK versions
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/06/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, wpf apps, wpf, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---
# Understand WebView2 SDK versions  

New versions of the WebView2 SDK are shipped at the same general cadence as the Microsoft Edge \(Chromium\) browser, which is approximately every six weeks.  

## Release and prerelease package  

The WebView2 NuGet package contains both a release and pre-release package.  

The **release package** is forward-compatible and contains the following components.  

*   [Win32 C/C++ APIs][ReferenceWin32]
*   .NET APIs:  [WPF][DotnetMicrosoftWebWebview2WpfNamespace], [WinForms][DotnetMicrosoftWebWebview2WinformsNamespace], and [Core][DotnetMicrosoftWebWebview2CoreNamespace].  
    
APIs in the WebView2 SDK are fully supported.  

The **prerelease package** is a superset of the release package with [Experimental APIs](#experimental-apis).  Avoid using the prerelease version of the WebView2 SDK to build production apps.

### Roadmap  

The release package contains all of the stable, supported Win32 C/C++ and .NET APIs.  The prerelease package contains experimental APIs that are subject to change based on your feedback.

## Experimental APIs  

The WebView team is seeking feedback on experimental WebView2 APIs that might be included in future releases.  The experimental APIs are marked as `experimental` in the WebView2 SDK.  To help you evaluate the experimental APIs and share your feedback, navigate to the [WebView feedback repo][GithubMicrosoftedgeWebviewfeedback].

> [!CAUTION]
> Avoid using the experimental APIs in production apps.  Experimental APIs might be introduced, modified, and removed from a particular SDK version.

> [!NOTE]
> Experimental APIs might not be available in your installed version of the WebView2 Runtime.  


## Matching WebView2 Runtime versions  

WebView2 apps require users to install a [WebView2 Runtime][MicrosoftDeveloperEdgeWebview2].  The WebView2 Runtime automatically updates to the latest version available.  In some scenarios, users might want to stop automatic WebView2 Runtime updates, which might cause app compatibility issues.  

If WebView2 Runtime updates are stopped, ensure that you understand the minimum version of the [WebView2 Runtime][MicrosoftDeveloperEdgeWebview2] that is required by your app.  Consider the minimum required version of the WebView2 SDK, and the minimum required version of the NuGet package.

### The minimum required version of the WebView2 SDK

The minimum required version of the WebView2 SDK in order to successfully load a WebView2 instance is found in the WebView2 [Release Notes][Webview2ReleaseNotes] under **Minimum Microsoft Edge version to load**.

The minimum version to load required by the WebView2 SDK only changes when a breaking change occurs in the web platform.

For example, for version [1.0.622.22][Webview2ReleaseNotes1062222] of the WebView2 SDK, you must install either the [WebView2 Runtime][MicrosoftDeveloperEdgeWebview2] or a [non-stable Microsoft Edge channel][MicrosoftedgeinsiderDownload] that has a build number of `86.0.616.0` or newer.

### The minimum required version of the NuGet package

The minimum required version of the NuGet package required to support the interfaces and APIs in your app is found in [Release notes for WebView2 SDK][Webview2ReleaseNotes] under **Full API Compatibility**.

New interfaces and APIs are periodically added to WebView2.  APIs and interfaces that are bundled in different versions of the WebView2 SDK require different versions of the WebView2 Runtime, because APIs and interface are added to the WebView2 SDK at different times.

The required WebView2 Runtime version matches the build number (the third number) of the WebView2 SDK version that the API was first introduced in.  For example, a new API or interface added in SDK version [1.0.622.22][Webview2ReleaseNotes1062222] requires the WebView2 Runtime version `86.0.622.0` or newer.

An API or interface added in a later release of the WebView2 SDK requires a WebView2 Runtime that has the same version number as the WebView2 SDK.

To help determine whether the WebView2 Runtime version supports an interface or API, navigate to [Determine WebView2 Runtime requirement](#determine-webview2-runtime-requirement).  

    
> [!IMPORTANT]
> When developing [Evergreen WebView2 apps][Webview2ConceptsDistributionEvergreenDistributionMode], regularly test your app against the latest versions of the WebView2 Runtime and non-stable Microsoft Edge channels.  Because the web platform is constantly evolving, regular testing is the best way to ensure your app performs as intended.  

### Determine WebView2 Runtime requirement  

Depending on which version of the WebView2 SDK you use, consider the following items:

*   **Win32 C/C++**.  When using `QueryInterface` to obtain a new interface, verify a return value of `E_NOINTERFACE`.  The value may indicate that the WebView2 Runtime is a previous version, and doesn't support that interface.  For an example of how it works, navigate to [Line 622 - AppWindow.cpp][GithubMicrosoftedgeWebview2samplesSampleappsWebview2apisampleAppwindowCppL622].  
*   **.NET and WinUI**.  Check for a `No such interface supported` exception when using methods, properties, and events that were added to more recent SDKs.<!--better?: to more recent versions of the WebView2 SDK.-->  The exception may occur when the WebView2 Runtime is a previous version, and does not support the APIs.  
    
If an API is unavailable, consider removing the associated feature, or inform your users that they must update the WebView2 Runtime to use the feature.

<!--
## Versioning  

After you have used a particular version of the WebView2 SDK to build your app, your app might end up running with an older or newer version of the installed browser binaries.  Until version 1.0.0.0 of WebView2, there might be breaking changes during updates that prevent your SDK from working with different versions of installed browser binaries.  After version 1.0.0.0, different versions of the WebView2 SDK can work with different versions of the installed browser by using the following best practices:

1.  To account for breaking changes to the API, be sure to check for failure when requesting the DLL export `CreateCoreWebView2Environment` and when running `QueryInterface` on any `CoreWebView2` object.  A return value of `E_NOINTERFACE` indicates that the WebView2 SDK is not compatible with the Microsoft Edge browser binaries.  

1.  Checking for failure from `QueryInterface` also accounts for cases where the WebView2 SDK is newer than the version of the Microsoft Edge browser and your app attempts to use an interface of which the Microsoft Edge browser is unaware.  

1.  When an interface is unavailable, you may consider disabling the associated feature if possible, or otherwise informing your users to update their browsers.  
-->  

<!--links -->  
[Webview2ConceptsDistributionEvergreenDistributionMode]: ./distribution.md#evergreen-distribution-mode "Evergreen distribution mode - Distributing a WebView2 app | Microsoft Docs"  
[Webview2ReleaseNotes]: ../release-notes.md "Release notes for WebView2 SDK | Microsoft Docs"  
[Webview2ReleaseNotes1062222]: ../release-notes.md#1062222 "1.0.622.22 - Release notes for WebView2 SDK | Microsoft Docs"   
<!-- external links -->
[DeployedgeChannels]: /deployedge/microsoft-edge-channels "Overview of the Microsoft Edge channels | Microsoft Docs"  

[DotnetMicrosoftWebWebview2CoreNamespace]: /dotnet/api/microsoft.web.webview2.core "Microsoft.Web.WebView2.Core Namespace | Microsoft Docs"  
[DotnetMicrosoftWebWebview2WpfNamespace]: /dotnet/api/microsoft.web.webview2.wpf "Microsoft.Web.WebView2.Wpf Namespace | Microsoft Docs"  
[DotnetMicrosoftWebWebview2WinformsNamespace]: /dotnet/api/microsoft.web.webview2.winforms "Microsoft.Web.WebView2.WinForms Namespace | Microsoft Docs"  
[ReferenceWin32]: /microsoft-edge/webview2/reference/win32 "WebView2 Win32 C++ Reference | Microsoft Docs"  

[MicrosoftDeveloperEdgeWebview2]: https://developer.microsoft.com/microsoft-edge/webview2/ "Microsoft Edge WebView2 | Microsoft Developer"  

[GithubMicrosoftedgeWebviewfeedback]: https://github.com/MicrosoftEdge/WebViewFeedback "WebView Feedback - MicrosoftEdge/WebViewFeedback | GitHub"  
[GithubMicrosoftedgeWebview2samplesSampleappsWebview2apisampleAppwindowCppL622]: https://github.com/MicrosoftEdge/WebView2Samples/blob/8ec7de9d3e80a942bc7025cffad98eee75e11e64/SampleApps/WebView2APISample/AppWindow.cpp#L622 "Line 622 - AppWindow.cpp - MicrosoftEdge/WebView2Samples | GitHub"  

[MicrosoftedgeinsiderDownload]: https://www.microsoftedgeinsider.com/download "Download Microsoft Edge Insider Channels"  
