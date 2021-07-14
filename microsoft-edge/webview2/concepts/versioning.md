---
description: Version Models used for Microsoft Edge WebView2
title: Understand WebView2 SDK versions
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/13/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, wpf apps, wpf, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---
# Understand WebView2 SDK versions

New versions of the WebView2 SDK are shipped at the same general cadence as the Microsoft Edge \(Chromium\) browser, which is approximately every six weeks.  

When you develop and distribute a WebView2 app, the client must at least have a version of the Runtime that can use the core APIs and create a WebView2.  The client ideally should have a version of the Runtime that supports all of the latest APIs that are in the SDK version you use to develop the app.  You must coordinate the WebView2 SDK version that you use for development, and the WebView2 Runtime version that's installed on client machines.

*  Core API functionality requires that the client has WebView2 Runtime version `86.0.616.0` or newer.
*  Full support for the latest APIs in an SDK release requires that the Runtime on the client have a version number greater than or equal to the SDK version.


## Release and prerelease packages

The NuGet package for the WebView2 SDK contains both a release and prerelease package.

*  The _release_ package of the SDK contains all of the stable Win32 C/C++ and .NET APIs.  APIs that are in the release package are fully supported.  The release package is forward-compatible and contains the following components:
    *  [Win32 C/C++ APIs][ReferenceWin32].
    *  .NET APIs:  [WPF][DotnetMicrosoftWebWebview2WpfNamespace], [WinForms][DotnetMicrosoftWebWebview2WinformsNamespace], and [Core][DotnetMicrosoftWebWebview2CoreNamespace].  

*  The _prerelease_ package of the SDK is a superset of the release package, with additional, [Experimental APIs](#experimental-apis) that are subject to change based on your feedback.  Avoid using the prerelease version of the WebView2 SDK to build production apps.


## Experimental APIs  

The WebView team is seeking feedback on experimental WebView2 APIs that might be included in future releases.  The experimental APIs are marked as `experimental` in the WebView2 SDK.<!--rather, are in an IExperimental interface?-->  To help you evaluate the experimental APIs and share your feedback, navigate to the [WebView feedback repo][GithubMicrosoftedgeWebviewfeedback].

> [!CAUTION]
> Avoid using the experimental APIs in production apps.  Experimental APIs might be introduced, modified, and removed from a particular SDK version.

> [!NOTE]
> Experimental APIs might not be available in your installed version of the WebView2 Runtime.  


## Matching the Runtime version with the SDK version

A WebView2 production app requires that the [WebView2 Runtime][MicrosoftDeveloperEdgeWebview2] is present on the client.  In the Evergreen distribution approach, the installed WebView2 Runtime automatically updates to the latest version available; however, a user or IT admin might choose to prevent automatic updating of the WebView2 Runtime.  The resulting outdated Runtime on the client might cause compatibility issues between your updated WebView2 app that uses new APIs from a recent SDK, and the older Runtime.

In case updating the WebView2 Runtime is prevented on the client, make sure that you know the minimum version number of the [WebView2 Runtime][MicrosoftDeveloperEdgeWebview2] that is required by your app.  The minimum required Runtime version for _core_ WebView2 API support is older than for the latest, _full_ API support.

### Minimum version for core API support

To successfully load a WebView2 instance and use the core WebView2 APIs, the client (or development machine) must a certain baseline version of the WebView2 Runtime (or Microsoft Edge).  If the installed Runtime version on the client is lower than the SDK version that was used to develop the WebView2 app, the core WebView2 API calls will work, but any APIs that were added in subsequent SDK versions won't work.

For example, to support the core APIs that are in version [1.0.622.22][Webview2ReleaseNotes1062222] of the WebView2 SDK,
*   The development machine must have either:
    *   A [WebView2 Runtime][MicrosoftDeveloperEdgeWebview2] that has a build number of `86.0.616.0` or newer.
    *   An [Insider Microsoft Edge channel][MicrosoftedgeinsiderDownload] that has a build number of `86.0.616.0` or newer.
*   The client must have a [WebView2 Runtime][MicrosoftDeveloperEdgeWebview2] that has a build number of `86.0.616.0` or newer.

The minimum version of the Runtime required by the WebView2 SDK for core API support only changes when a breaking change occurs in the web platform.  For more information, navigate to [Minimum version of browser and Runtime for core API support](../release-notes.md), in the WebView2 SDK Release notes.

### Minimum version for full API support

To use the entire set of APIs that are in a version of the SDK, the client's installed WebView2 Runtime (or a non-stable channel of Microsoft Edge) needs to have a version number that is greater than or equal to the version number of the WebView2 SDK.  If an API is added to a version of the SDK, and your app uses that API, the API must be present in the client's installed version of the Runtime, or an exception will be thrown.

The minimum required Runtime version to support an API matches the build number (the third number) of the SDK version that the API was first introduced in.  For example, a new API or interface that was added in WebView2 SDK version [1.0.622.22][Webview2ReleaseNotes1062222] requires WebView2 Runtime version `86.0.622.0` or later.

To manually look up the Runtime or browser version requirements for full API support for a specific SDK version, navigate to [Release notes for WebView2 SDK](../release-notes.md).  Then check the section for the specific SDK release.

In your WebView2 app, to programmatically test whether a recent API is supported, a best practice is to check for support by using `QueryInterface` or `try/catch`.  This approach is described below.


## Testing against non-stable channels
   
> [!IMPORTANT]
> When developing [Evergreen WebView2 apps][Webview2ConceptsDistributionEvergreenDistributionMode], regularly test your app against the latest non-stable Microsoft Edge channels and the WebView2 Runtime.  Because the web platform is constantly evolving, regular testing is the best way to ensure your app performs as intended.


## Testing whether the client's Runtime supports a recent API

When you develop a WebView2 app using a recent version of the WebView2 SDK, when you use a recently added API, it's a good practice to test the client's installed WebView2 Runtime to check whether that API is present.  How your app programmatically tests for API support depends on the coding platform.

*   **Win32 C/C++**.  When using `QueryInterface` to obtain a new interface, test for a return value of `E_NOINTERFACE`.  That return value likely indicates that the client's WebView2 Runtime is an older version that doesn't support that interface.  For an example of checking for the existence of specific WebView2 APIs in the Runtime, navigate to [Line 622 - AppWindow.cpp][GithubMicrosoftedgeWebview2samplesSampleappsWebview2apisampleAppwindowCppL622].<!-- outdated?  that cpp file contains neither "catch" nor "queryinterface" nor "E_NOINTERFACE" -->

*   **.NET and WinUI**.  Use `try/catch` and check for a `No such interface supported` exception when using methods, properties, and events that were added to more recent versions of the WebView2 SDK.  This exception likely indicates that the client's WebView2 Runtime is an older version that doesn't support that API.
    
If an API is unavailable in the client's installed WebView2 Runtime, consider turning off the associated feature for the user, or inform the user that they must update the WebView2 Runtime to use the feature.


<!-- Is this section commented out because deprecated?  delete or uncomment the section?
## Versioning  

After you have used a particular version of the WebView2 SDK to build your app, your app might end up running with an older or newer version of the installed browser binaries.  Until version 1.0.0.0 of WebView2, there might be breaking changes during updates that prevent your SDK from working with different versions of installed browser binaries.  After version 1.0.0.0, different versions of the WebView2 SDK can work with different versions of the installed browser by using the following best practices:

1.  To account for breaking changes to the API, be sure to check for failure when requesting the DLL export `CreateCoreWebView2Environment` and when running `QueryInterface` on any `CoreWebView2` object.  A return value of `E_NOINTERFACE` indicates that the WebView2 SDK is not compatible with the Microsoft Edge browser binaries.  

1.  Checking for failure from `QueryInterface` also accounts for cases where the WebView2 SDK is newer than the version of the Microsoft Edge browser and your app attempts to use an interface of which the Microsoft Edge browser is unaware.  

1.  When an interface is unavailable, consider disabling the associated feature if possible, or inform your users to update their browsers.
-->  


<!--links -->  
[Webview2ConceptsDistributionEvergreenDistributionMode]: ./distribution.md#evergreen-distribution-mode "Evergreen distribution mode - Distribute a WebView2 app and the WebView2 Runtime | Microsoft Docs"  
[Webview2ReleaseNotes]: ../release-notes.md "Release notes for WebView2 SDK | Microsoft Docs"  
[Webview2ReleaseNotes1062222]: ../release-notes.md#1062222 "1.0.622.22 - Release notes for WebView2 SDK | Microsoft Docs"   
<!-- external links -->
[DeployedgeChannels]: /deployedge/microsoft-edge-channels "Overview of the Microsoft Edge channels | Microsoft Docs"  

[DotnetMicrosoftWebWebview2CoreNamespace]: /dotnet/api/microsoft.web.webview2.core "Microsoft.Web.WebView2.Core Namespace | Microsoft Docs"  
[DotnetMicrosoftWebWebview2WpfNamespace]: /dotnet/api/microsoft.web.webview2.wpf "Microsoft.Web.WebView2.Wpf Namespace | Microsoft Docs"  
[DotnetMicrosoftWebWebview2WinformsNamespace]: /dotnet/api/microsoft.web.webview2.winforms "Microsoft.Web.WebView2.WinForms Namespace | Microsoft Docs"  
[DotnetApiWebview2WinformsWebview2Appliesto]: /dotnet/api/microsoft.web.webview2.winforms.webview2#applies-to "WebView2 Class | Microsoft Docs"
[ReferenceWin32]: /microsoft-edge/webview2/reference/win32 "WebView2 Win32 C++ Reference | Microsoft Docs"  

[MicrosoftDeveloperEdgeWebview2]: https://developer.microsoft.com/microsoft-edge/webview2/ "Microsoft Edge WebView2 | Microsoft Developer"  

[GithubMicrosoftedgeWebviewfeedback]: https://github.com/MicrosoftEdge/WebViewFeedback "WebView Feedback - MicrosoftEdge/WebViewFeedback | GitHub"  
[GithubMicrosoftedgeWebview2samplesSampleappsWebview2apisampleAppwindowCppL622]: https://github.com/MicrosoftEdge/WebView2Samples/blob/8ec7de9d3e80a942bc7025cffad98eee75e11e64/SampleApps/WebView2APISample/AppWindow.cpp#L622 "Line 622 - AppWindow.cpp - MicrosoftEdge/WebView2Samples | GitHub"  

[MicrosoftedgeinsiderDownload]: https://www.microsoftedgeinsider.com/download "Download Microsoft Edge Insider Channels"
