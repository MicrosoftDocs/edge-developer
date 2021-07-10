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

You must coordinate the WebView2 SDK version and the WebView2 Runtime version.

When using WebView2, you need a compatible version of the WebView2 SDK and the WebView2 Runtime, particularly if your app uses new APIs.
The version number of the Runtime must be greater than or equal to the version number of the SDK.
_Version number_ here means the third part of the four-part version number, such as 616.

New versions of the WebView2 SDK are shipped at the same general cadence as the Microsoft Edge \(Chromium\) browser, which is approximately every six weeks.  


## Release and prerelease package  

The WebView2 NuGet package contains both a release and prerelease package.

*  The release package contains all of the stable, supported Win32 C/C++ and .NET APIs.
*  The prerelease package is a superset of the release package, with additional, [Experimental APIs](#experimental-apis) that are subject to change based on your feedback.

The **release package** is forward-compatible and contains the following components.  

*  [Win32 C/C++ APIs][ReferenceWin32]
*  .NET APIs:  [WPF][DotnetMicrosoftWebWebview2WpfNamespace], [WinForms][DotnetMicrosoftWebWebview2WinformsNamespace], and [Core][DotnetMicrosoftWebWebview2CoreNamespace].  
    
APIs that are in the release package of the WebView2 SDK are fully supported.

Avoid using the prerelease version of the WebView2 SDK to build production apps.


## Experimental APIs  

The WebView team is seeking feedback on experimental WebView2 APIs that might be included in future releases.  The experimental APIs are marked as `experimental` in the WebView2 SDK.  To help you evaluate the experimental APIs and share your feedback, navigate to the [WebView feedback repo][GithubMicrosoftedgeWebviewfeedback].

> [!CAUTION]
> Avoid using the experimental APIs in production apps.  Experimental APIs might be introduced, modified, and removed from a particular SDK version.

> [!NOTE]
> Experimental APIs might not be available in your installed version of the WebView2 Runtime.  


## Matching WebView2 Runtime versions  

In the WebView2 documentation, _the NuGet package_ means the NuGet package for the WebView2 SDK.

<!-- incoming text: -->
The SDK has a minimum Runtime version requirement.

For example, if your WebView2 app uses the WebView2 SDK version 616, a client machine must have WebView2 Runtime version 616 or higher, particularly if the app uses the APIs that were recently added.
As another example, if the WebView2 SDK version is 800 but the WebView2 Runtime version number is 616, most WebView2 API calls will work, but the APIs that were added in SDK version 617 through 800 won't work.

To find the minimum required Runtime version that supports a particular new API, see [Release notes for WebView2 SDK][Webview2ReleaseNotes], under the "Required Runtime version" part of each release's entry.  Also check the release version numbers in the [Applies to](/dotnet/api/microsoft.web.webview2.winforms.webview2#applies-to) section of the _WebView2 Class_ reference page.
<!-- too specific: /dotnet/api/microsoft.web.webview2.winforms.webview2?view=webview2-dotnet-1.0.864.35#applies-to -->

If your code calls a new WebView2 API, the WebView2 Runtime on the client machine might be older and not support that API, so a best practice is to look up what version of the SDK first added that API.

For a new API that your WebView2 app uses, you should handle the lack of Runtime support, such as by using `QueryInterface` or `try/catch`.  Find out when the API was introduced, and then find out what version of the Runtime is required to support that API.

Find what version of the WebView2 runtime is needed, to support all the APIs in a version of the WebView2 API.  To do this, see the **Applies to** section of each entry in [Release notes for WebView2 SDK][Webview2ReleaseNotes].  Also check the **Applies to** section of [WebView2 Class](/dotnet/api/microsoft.web.webview2.winforms.webview2#applies-to).<!--same link as above; normalize both-->  For example, for WebView2 SDK version 1.0.664.37, the third part of the SDK version number is 664, so to support the APIs that were added in that version of the SDK, the client machines need to have a Runtime that's version 664 or higher.

Determine which version of the Runtime is required.  In [Release notes for WebView2 SDK][Webview2ReleaseNotes], find the section for your SDK version, and then look up what version of the Runtime to use to have full API compatibility, and also look up the Runtime version number to just get WebView2 working.  Use `QueryInterface` or `try/catch`, for newer WebView2 API calls.

<!-- / end of incoming text -->


WebView2 apps require users to install a [WebView2 Runtime][MicrosoftDeveloperEdgeWebview2].  The WebView2 Runtime automatically updates to the latest version available.  In some scenarios, a user or an IT admin might choose to prevent automatic updating of the WebView2 Runtime.  The resulting outdated Runtime on the client might cause compatibility issues between your updated WebView2 app and the outdated Runtime.

In case updating the WebView2 Runtime is prevented on the client, make sure that you know the minimum version number of the [WebView2 Runtime][MicrosoftDeveloperEdgeWebview2] that is required by your app, as follows.


### The minimum required version of the WebView2 SDK

Most of the APIs in the WebView2 SDK can be used against Microsoft Edge or the WebView2 Runtime version 616.  The WebView2 Runtime needs to have a build number that is greater than or equal to the version number of the WebView2 SDK.  For each WebView2 API, look up which WebView2 SDK version number introduced that API.  Make sure that the Runtime version number is equal to or greater than the SDK version.  A best practice is to check for support, for newer APIs, by using `QueryInterface` or `try/catch`.

The minimum required version of the WebView2 SDK in order to successfully load a WebView2 instance is found in the WebView2 [Release Notes][Webview2ReleaseNotes] under **Minimum Microsoft Edge version to load**.

The minimum version to load required by the WebView2 SDK only changes when a breaking change occurs in the web platform.

For example, for version [1.0.622.22][Webview2ReleaseNotes1062222] of the WebView2 SDK, you must install either the [WebView2 Runtime][MicrosoftDeveloperEdgeWebview2] or a non-stable Microsoft Edge channel (from [Microsoft Edge WebView2][MicrosoftedgeinsiderDownload]) that has a build number of `86.0.616.0` or newer.

### The minimum required version of the NuGet package

The minimum required version of the WebView2 SDK (a NuGet package) that is required to support the interfaces and APIs in your app is found in [Release notes for WebView2 SDK][Webview2ReleaseNotes] under **Required Runtime version**.

New interfaces and APIs are periodically added to WebView2.  APIs and interfaces that are bundled in different versions of the WebView2 SDK require different versions of the WebView2 Runtime, because APIs and interface are added to the WebView2 SDK at different times.

The required WebView2 Runtime version matches the build number (the third number) of the WebView2 SDK version that the API was first introduced in.  For example, a new API or interface added in SDK version [1.0.622.22][Webview2ReleaseNotes1062222] requires the WebView2 Runtime version `86.0.622.0` or newer.

An API or interface added in a later release of the WebView2 SDK requires a WebView2 Runtime that has the same version number as the WebView2 SDK, or higher.

To help determine whether the WebView2 Runtime version supports an interface or API, navigate to [Determine WebView2 Runtime requirement](#determine-webview2-runtime-requirement).  

    
> [!IMPORTANT]
> When developing [Evergreen WebView2 apps][Webview2ConceptsDistributionEvergreenDistributionMode], regularly test your app against the latest versions of the WebView2 Runtime and non-stable Microsoft Edge channels.  Because the web platform is constantly evolving, regular testing is the best way to ensure your app performs as intended.  

### Determine WebView2 Runtime requirement  

Depending on which version of the WebView2 SDK you use, consider the following items:

*   **Win32 C/C++**.  When using `QueryInterface` to obtain a new interface, test for a return value of `E_NOINTERFACE`.  The value might indicate that the client's WebView2 Runtime is outdated and doesn't support that interface.  For an example of checking for the existence of specific WebView2 APIs in the Runtime, navigate to [Line 622 - AppWindow.cpp][GithubMicrosoftedgeWebview2samplesSampleappsWebview2apisampleAppwindowCppL622].<!-- outdated?  that cpp file contains neither "catch" nor "queryinterface" nor "E_NOINTERFACE" -->
*   **.NET and WinUI**.  Check for a `No such interface supported` exception when using methods, properties, and events that were added to more recent SDKs.<!--better?: to more recent versions of the WebView2 SDK.-->  This exception can occur when the WebView2 Runtime is an older version that does not support the recently added APIs.  
    
If an API is unavailable, consider removing the associated feature, or inform your users ["users or IT admins"?] that they must update the WebView2 Runtime to use the feature.
<!-- Do users/admins update the Runtime, or does the dev's code do that? -->


<!-- why is this section commented out in the repo?  uncomment it?
## Versioning  

(in this commented-out section, change "browser" to "WebView2 Runtime"?)

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
[ReferenceWin32]: /microsoft-edge/webview2/reference/win32 "WebView2 Win32 C++ Reference | Microsoft Docs"  

[MicrosoftDeveloperEdgeWebview2]: https://developer.microsoft.com/microsoft-edge/webview2/ "Microsoft Edge WebView2 | Microsoft Developer"  

[GithubMicrosoftedgeWebviewfeedback]: https://github.com/MicrosoftEdge/WebViewFeedback "WebView Feedback - MicrosoftEdge/WebViewFeedback | GitHub"  
[GithubMicrosoftedgeWebview2samplesSampleappsWebview2apisampleAppwindowCppL622]: https://github.com/MicrosoftEdge/WebView2Samples/blob/8ec7de9d3e80a942bc7025cffad98eee75e11e64/SampleApps/WebView2APISample/AppWindow.cpp#L622 "Line 622 - AppWindow.cpp - MicrosoftEdge/WebView2Samples | GitHub"  

[MicrosoftedgeinsiderDownload]: https://www.microsoftedgeinsider.com/download "Download Microsoft Edge Insider Channels"  
