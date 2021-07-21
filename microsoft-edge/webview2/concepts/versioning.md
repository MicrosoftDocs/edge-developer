---
description: Version Models used for Microsoft Edge WebView2
title: Understand WebView2 SDK versions
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/20/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, wpf apps, wpf, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---
# Understand WebView2 SDK versions

The WebView team recommends that you use the Canary preview channel of Microsoft Edge when you use a prerelease version of the WebView2 SDK package, and use the Evergreen WebView2 Runtime when you use a release version of the WebView2 SDK package.

New versions of the WebView2 SDK are shipped at the same general cadence as the Microsoft Edge \(Chromium\) browser, which is approximately every six weeks.


## Key points

To use the WebView2 APIs, 86.0.616.0 is the necessary (but not sufficient) minimum version of Microsoft Edge or the WebView2 Runtime.
WebView2 APIs are forward-compatible; a WebView2 API works when using a WebView2 Runtime that has an equal or higher build number as the SDK build number in which the API was introduced.
For example, if an API is introduced in SDK 1.0.900.0, that API would work with Runtime 94.0.1000.0, but not with Runtime 90.0.700.0.
The build number is the third part of the four-part version number for the Webview2 SDK and for Microsoft Edge or the WebView2 Runtime.

Runtime 86.0.616.0 is a special release, because it is the General Availability release.  Any WebView2 API that was in the General Availability release (WebView2 SDK version 616) works with Runtime version 616 and later.

When you use a WebView2 SDK that has a build number equal to or less than the WebView2 Runtime, every API that you have access to in that SDK works with that version of the Runtime.  When you use a WebView2 SDK that has a build number greater than the WebView2 Runtime, the newer APIs' implementations are not yet available in the Runtime, and therefore cannot work.

If you use the Evergreen Runtime, you can't guarantee that a client's Runtime has been updated to be equal to or greater than your SDK build number, because the Admin might have turned off updating of the WebView2 Runtime, or the client might be offline long-term.  Therefore, it's a good practice to wrap any calls to relatively new WebView2 APIs by using `QueryInterface` or `try-catch`.


### Older explanation
<!-- todo: dissolve/merge with the above -->

When you develop and distribute a WebView2 app, the client must at least have a version of the Runtime that can use the set of APIs in the WebView2 General Availability release (build 616) and create a WebView2.  The client ideally should have a version of the Runtime that supports all of the latest APIs that are in the SDK version you use to develop the app.  You must coordinate the WebView2 SDK version that you use for development, and the WebView2 Runtime version that's installed on client machines.

*  The set of APIs in the WebView2 General Availability release (build 616) requires that the client has WebView2 Runtime version `86.0.616.0` or newer.
*  Full support for the latest APIs in an SDK release requires that the Runtime on the client have a version number greater than or equal to the SDK version.


## Release and prerelease packages

The NuGet package for the WebView2 SDK contains both a release and prerelease package.

*  The _release_ package of the SDK contains all of the stable Win32 C/C++ and .NET APIs.  APIs that are in the release package are fully supported.  The release package is forward-compatible and contains the following components:
    *  [Win32 C/C++ APIs][ReferenceWin32].
    *  .NET APIs:  [WPF][DotnetMicrosoftWebWebview2WpfNamespace], [WinForms][DotnetMicrosoftWebWebview2WinformsNamespace], and [Core][DotnetMicrosoftWebWebview2CoreNamespace].  

*  The _prerelease_ package of the SDK is a superset of the release package, with additional, [Experimental APIs](#experimental-apis) that are subject to change based on your feedback.  Avoid using the prerelease version of the WebView2 SDK to build production apps.


<!-- possibly condense section, having added para3 -->
## Experimental APIs  

<!-- from paragraph 3 of post from github issue 341: -->
### Experimental APIs are not guaranteed to be forward-compatible

Any experimental APIs in a pre-release SDK are not guaranteed to be forward-compatible.   When a _pre-release_ version of the WebView2 SDK is initially made available, that SDK only works with Microsoft Edge Canary.  After that, the SDK works with the Beta and Dev channels, for the development phase of your app.  A pre-release version of the WebView2 SDK is meant for developers to try out new APIs early and provide feedback before the new APIs are promoted to become stable, forward-compatible APIs.

For a release version of your app, use a _Release_ version of the WebView2 SDK.  The _stable_ (non-experimental) APIs that are in that SDK version are forward-compatible.  

The WebView2 SDK has been forward-compatible ever since version 1.  If your WebView2 app uses the current version of the SDK, your app continues to work even after the client's WebView2 Runtime is updated.  However, any experimental APIs that are in a version of the WebView2 SDK are not guaranteed to be forward-compatible.
<!-- /para3 -->

The WebView team is seeking feedback on experimental WebView2 APIs that might be included in future releases.  The experimental APIs are marked as `experimental` in the WebView2 SDK.<!--rather, are in an IExperimental interface?-->  To help you evaluate the experimental APIs and share your feedback, navigate to the [WebView feedback repo][GithubMicrosoftedgeWebviewfeedback].

> [!CAUTION]
> Avoid using the experimental APIs in production apps.  Experimental APIs might be introduced, modified, and removed from a particular SDK version.

> [!NOTE]
> Experimental APIs might not be available in your installed version of the WebView2 Runtime.  


## Matching the Runtime version with the SDK version

A WebView2 production app requires that the [WebView2 Runtime][MicrosoftDeveloperEdgeWebview2] is present on the client.  In the Evergreen distribution approach, the installed WebView2 Runtime automatically updates to the latest version available; however, a user or IT admin might choose to prevent automatic updating of the WebView2 Runtime.  The resulting outdated Runtime on the client might cause compatibility issues between your updated WebView2 app that uses new APIs from a recent SDK, and the older Runtime.

In case updating the WebView2 Runtime is prevented on the client, make sure that you know the minimum version number of the [WebView2 Runtime][MicrosoftDeveloperEdgeWebview2] that is required by your app.  The minimum required Runtime version to support the General Availability release of the SDK (build 616) is older than for the latest Runtime.  The latest Runtime supports all APIs that are in the latest SDK release build.

### Minimum version for GA API support

To successfully load a WebView2 instance and use the GA WebView2 APIs, the client (or development machine) must a certain baseline version of the WebView2 Runtime (or Microsoft Edge).  If the installed Runtime version on the client is lower than the SDK version that was used to develop the WebView2 app, the core(todo: reword) WebView2 API calls will work, but any APIs that were added in subsequent SDK versions won't work.

For example, to support the core(todo: reword) APIs that are in version [1.0.622.22][Webview2ReleaseNotes1062222] of the WebView2 SDK,
*   The development machine must have either:
    *   A [WebView2 Runtime][MicrosoftDeveloperEdgeWebview2] that has a build number of `86.0.616.0` or newer.
    *   A [Microsoft Edge Insider (preview) Channel][MicrosoftedgeinsiderDownload] that has a build number of `86.0.616.0` or newer.
*   The client must have a [WebView2 Runtime][MicrosoftDeveloperEdgeWebview2] that has a build number of `86.0.616.0` or newer.

The minimum version of the Runtime required by the WebView2 SDK for core(todo: reword) API support only changes when a breaking change occurs in the web platform.  For more information, navigate to [Minimum version of the browser or Runtime to load WebView2](../release-notes.md#minimum-version-of-the-browser-or-runtime-to-load-webview2), in the WebView2 SDK Release notes.

### Minimum version for full API support

To use the entire set of APIs that are in a version of the SDK, the client's installed WebView2 Runtime needs to have a version number that is greater than or equal to the version number of the WebView2 SDK.  If an API is added to a version of the SDK, and your app uses that API, the API must be present in the client's installed version of the Runtime, or an exception will be thrown.

The minimum required Runtime version to support an API matches the build number (the third number) of the SDK version that the API was first introduced in.  For example, a new API or interface that was added in WebView2 SDK version [1.0.622.22][Webview2ReleaseNotes1062222] requires WebView2 Runtime version `86.0.622.0` or later.

To manually look up the Runtime or browser version requirements for full API support for a specific SDK version, navigate to [Release notes for WebView2 SDK](../release-notes.md).  Then check the section for the specific SDK release.

In your WebView2 app, to programmatically test whether a recent API is supported, a best practice is to check for support by using `QueryInterface` or `try/catch`.  This approach is described below.


## Testing against Microsoft Edge preview channels
   
> [!IMPORTANT]
> When developing [Evergreen WebView2 apps][Webview2ConceptsDistributionEvergreenDistributionMode], regularly test your app against the latest Microsoft Edge preview channels and the WebView2 Runtime.  Because the web platform is constantly evolving, regular testing is the best way to ensure your app performs as intended.


## Testing whether the installed Runtime supports a recent API

When you develop a WebView2 app using a recent version of the WebView2 SDK, when you use a recently added API, it's a good practice to test the client's installed WebView2 Runtime to check whether that API is present.  How your app programmatically tests for API support depends on the coding platform.

*   **Win32 C/C++**.  When using `QueryInterface` to obtain a new interface, test for a return value of `E_NOINTERFACE`.  That return value likely indicates that the client's WebView2 Runtime is an older version that doesn't support that interface.  For an example of checking for the existence of specific WebView2 APIs in the Runtime, navigate to [Line 622 - AppWindow.cpp][GithubMicrosoftedgeWebview2samplesSampleappsWebview2apisampleAppwindowCppL622].  This file wraps WebView2 API calls in the `CHECK_FAILURE` macro function, defined in `CheckFailure.h`.

*   **.NET and WinUI**.  Use `try/catch` and check for a `No such interface supported` exception when using methods, properties, and events that were added to more recent versions of the WebView2 SDK.  This exception likely indicates that the client's WebView2 Runtime is an older version that doesn't support that API.
    
If an API is unavailable in the client's installed WebView2 Runtime, consider providing graceful fallback for the associated feature for the user, or inform the user that they must update the WebView2 Runtime to use the feature.

<!-- uncomment parts of this section?
## Versioning  

After you have used a particular version of the WebView2 SDK to build your app, your app might end up running with an older or newer version of the installed WebView2 Runtime. 

There might be breaking changes during updates that prevent your SDK from working with different versions of the client's installed WebView2 Runtime.

Different versions of the WebView2 SDK can work with different versions of the client's installed WebView2 Runtime by using the following best practices:

1.  To account for breaking changes to the API, be sure to check for failure when requesting the DLL export `CreateCoreWebView2Environment` and when running `QueryInterface` on any `CoreWebView2` object.  A return value of `E_NOINTERFACE` indicates that the WebView2 SDK is not compatible with the client's installed WebView2 Runtime.

1.  Checking for failure from `QueryInterface` also accounts for cases where the WebView2 SDK is newer than the client's installed WebView2 Runtime and your app attempts to use an interface of which the installed Runtime is unaware.

1.  When an interface is unavailable in the client's installed Runtime, consider disabling the associated feature if possible, or inform your users to update their WebView2 Runtime.
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
