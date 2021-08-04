---
description: Version Models used for Microsoft Edge WebView2
title: Understand WebView2 SDK versions
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 08/03/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, wpf apps, wpf, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---
# Understand WebView2 SDK versions

<!-- todo: cover Fixed Version.  when/if to specify "the Evergreen Runtime", instead of just "the Runtime".  does it work, contrasting "preview channel" vs. "Runtime" as terminology for mutually exclusive options? -->

The NuGet package for the WebView2 SDK contains both a release and prerelease package.  Either use a prerelease SDK with a preview channel of Microsoft Edge, or use a release SDK with the WebView2 Runtime.

*   During development and testing of your WebView2 app, to use experimental WebView2 APIs, use the following combination:
    *   A _prerelease_ version of the WebView2 SDK.
    *   A _preview channel_ of Microsoft Edge.

*   For a production release of your WebView2 app, use the following combination:
    *   A _release_ version of the WebView2 SDK.
    *   The WebView2 _Runtime_.

These two combinations are described below.


## Use a prerelease version of the SDK along with a preview channel of Microsoft Edge

When developing an Evergreen WebView2 app, regularly test the app against the latest Microsoft Edge preview channels, in addition to testing against the WebView2 Runtime.  Because the web platform is constantly evolving, regular testing is the best way to ensure your app will continue to work as intended.

When you use a WebView2 SDK _prerelease_ package, use a Microsoft Edge preview channel on the client on a development machine.  Preview channels are also called _Insiders_ channels.  The Canary preview channel is recommended rather than Beta or Dev, because Canary is most recent.

The SDK _prerelease_ package is a superset of the SDK release package, with method signatures for additional, [Experimental APIs](#experimental-apis).  Preview channels provide the implementations of the experimental WebView2 APIs.  The experimental APIs are subject to change based on your feedback.  Avoid using the SDK prerelease package to build production apps.

For information about temporarily pointing your app to a preview channel instead of defaulting to the WebView2 Runtime, navigate to [Switch to a preview channel to test upcoming APIs and features](../how-to/set-preview-channel.md).


## Use a release version of the SDK along with the Runtime

When you use a WebView2 SDK _release_ package, use the WebView2 Evergreen _Runtime_ on the client, rather than a Microsoft Edge channel.
A WebView2 app targets the Runtime on the client by default, rather than targeting a Microsoft Edge channel.
By design, the Stable version of Microsoft Edge doesn't support WebView2.

The SDK _release_ package contains all of the stable Win32 C/C++ and .NET APIs, and doesn't include method signatures for experimental APIs.
All of the APIs that are in an SDK release package are fully supported, in an equal or higher build number of the WebView2 Runtime.

The SDK release package contains the following components:
*  [Win32 C/C++ APIs][ReferenceWin32].
*  .NET APIs:  [WPF][DotnetMicrosoftWebWebview2WpfNamespace], [WinForms][DotnetMicrosoftWebWebview2WinformsNamespace], and [Core][DotnetMicrosoftWebWebview2CoreNamespace].

The WebView2 _release_ SDK has been forward-compatible ever since version 1 (that is, SDK version [1.0.622.22](../release-notes.md#1062222)).
You can update your WebView2 app to use the latest APIs from the most recent release version of the SDK.  Your app will continue to work on clients because clients automatically have the latest WebView2 Evergreen Runtime.

For more information about automatic updating of the Evergreen Runtime, navigate to [Distribute a WebView2 app and the WebView2 Runtime][Webview2ConceptsDistribution].


## Release cadence

New versions of the WebView2 SDK are shipped at the same general cadence as the Microsoft Edge \(Chromium\) browser, which is approximately every four weeks.
This cadence changed from six weeks to four weeks starting with Microsoft Edge version 92.


## Minimum version and build number to instantiate WebView2

For the client to be able to create a WebView2 instance and use the set of APIs in the WebView2 General Availability release (SDK build 616), the client must have WebView2 Runtime version 86.0.616.0 or higher.  Runtime 86.0.616.0 is a special release, because it is the General Availability release.

On a development machine, the client must have either the Microsoft Edge preview channel version 86.0.616.0 or higher, or the WebView2 Runtime version 86.0.616.0 or higher.


## Forward compatibility of APIs

The WebView2 APIs in an SDK _release_ package are (the stable APIs) are forward-compatible; a WebView2 API works when using a WebView2 Runtime that has an equal or higher build number as the SDK build number in which the API was introduced.  The build number is the third part of the four-part version number for the Webview2 SDK and for Microsoft Edge or the WebView2 Runtime.

*  When you use a WebView2 SDK that has a build number _equal to or less than_ the WebView2 Runtime, every API that you have access to in that SDK works with that version of the Runtime.
*  When you use a WebView2 SDK that has a build number _greater than_ the WebView2 Runtime, the newer APIs' implementations are not available in the Runtime.

<!-- create diagram showing 3 SDK releases on a timeline, which ones would work w/ a given runtime -->
For example, if an API is introduced in SDK 1.0.**900**.0, that API would work with Runtime 94.0.**900+**.0, but not with Runtime 90.0.**700**.0.

You must coordinate the WebView2 SDK version that you use for development, and the WebView2 Runtime version that's installed on client machines.
The client should have a version of the Runtime that supports all of the latest APIs that are in the SDK version you use to develop the app.
Full support for the latest APIs in a release version of the SDK requires that the Runtime on the client have a build number that's greater than or equal to the SDK build number.


## Experimental APIs

Any experimental APIs in a WebView2 SDK _prerelease_ package are not guaranteed to be forward-compatible and might be removed in future Runtime updates.
When a _prerelease_ version of the WebView2 SDK is initially made available, that SDK only works with Microsoft Edge Canary.
Soon after that, the SDK also works with the Beta and Dev channels.
An SDK prerelease version is meant for developers to try out new APIs early and provide feedback before the new APIs are promoted to become stable, forward-compatible APIs.

For full support of experimental APIs, use a Microsoft Edge preview channel, not the WebView2 Evergreen Runtime.
The APIs that are in an SDK release version are forward-compatible.
Any experimental APIs that are in an SDK are not guaranteed to be forward-compatible.

The WebView2 team is seeking feedback on experimental WebView2 APIs that might be promoted to Stable in future releases.
The experimental APIs are indicated as "experimental" in the WebView2 SDK Reference documentation.
To help you evaluate the experimental APIs and share your feedback, navigate to the [WebView feedback repo][GithubMicrosoftedgeWebviewfeedback].

In subsequent versions of the SDK, experimental APIs might be introduced, modified, or removed.
Avoid using the experimental APIs in production apps.
After the release of an API as stable and public, Microsoft supports the experimental version of that API for two releases in a deprecated state.


## Matching the Runtime version with the SDK version

In the Evergreen distribution approach, the client's WebView2 Runtime automatically updates to the latest version available.
However, a user or IT admin might choose to prevent automatic updating of the WebView2 Runtime.
The resulting outdated Runtime on the client might cause compatibility issues between your updated WebView2 app that uses new APIs from a recent SDK, and the older Runtime.

In case updating the WebView2 Runtime is prevented on the client, make sure that you know the minimum build number of the [WebView2 Runtime][MicrosoftDeveloperEdgeWebview2] that is required by your app.
The minimum required Runtime version to support the General Availability release of the SDK (build 616) is older than for the latest Runtime.
The latest Runtime supports all APIs that are in the latest SDK release build.


## Feature-detecting to test whether the installed Runtime supports recently added APIs

If you use the Evergreen Runtime, there are edge cases where a client's Runtime is not the latest and therefore falls behind the SDK build number, because the Admin might have turned off updating of the WebView2 Runtime, or the client might be offline long-term.
Therefore, it's a good practice to wrap any calls to relatively new WebView2 APIs by using `QueryInterface` or `try-catch`.

When you develop a WebView2 app using a recent version of the WebView2 SDK, when you use a recently added API, it's a good practice to test or "feature-detect" whether that API is present in the client's installed WebView2 Runtime.
How your app programmatically tests for API support depends on the coding platform.

*   **Win32 C/C++**.  When requesting the DLL export `CreateCoreWebView2Environment` and when running `QueryInterface` on any `CoreWebView2` object, test for a return value of `E_NOINTERFACE`.  That return value likely indicates that the client's WebView2 Runtime is an older version that doesn't support that interface.  For an example of checking for the existence of specific WebView2 APIs in the Runtime, find `try_query` in [AppWindow.cpp][GithubMicrosoftedgeWebview2samplesSampleappsWebview2apisampleAppwindowCpp].  This file wraps WebView2 API calls in the `CHECK_FAILURE` macro function, defined in `CheckFailure.h`.

*   **.NET and WinUI**.  Use `try/catch` and check for a `No such interface supported` exception when using methods, properties, and events that were added to more recent versions of the WebView2 SDK.  This exception likely indicates that the client's WebView2 Runtime is an older version that doesn't support that API.

If an API is unavailable in the client's installed WebView2 Runtime, consider providing graceful fallback for the associated feature for the user, or inform the user that they must update the WebView2 Runtime to use the feature.


<!--links -->
[Webview2ConceptsDistribution]: ./distribution.md "Distribute a WebView2 app and the WebView2 Runtime | Microsoft Docs"
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
[GithubMicrosoftedgeWebview2samplesSampleappsWebview2apisampleAppwindowCpp]: https://github.com/MicrosoftEdge/WebView2Samples/blob/8ec7de9d3e80a942bc7025cffad98eee75e11e64/SampleApps/WebView2APISample/AppWindow.cpp#L622 "AppWindow.cpp - MicrosoftEdge/WebView2Samples | GitHub"

[MicrosoftedgeinsiderDownload]: https://www.microsoftedgeinsider.com/download "Download Microsoft Edge Insider Channels"
