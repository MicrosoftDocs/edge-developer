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

The NuGet package for the WebView2 SDK contains both a release and prerelease package.  Either use a prerelease SDK with a preview channel of Microsoft Edge, or use a release SDK with the WebView2 Runtime.

_Prerelease_ SDK packages are for use during development if you want to test the latest WebView2 APIs, including the experimental APIs, before support for those APIs is added to the Runtime.  The Canary channel is recommended, because it has the implementations of the latest APIs.  When you want to test and use experimental WebView2 APIs, use the following combination:
*   A _prerelease_ version of the WebView2 SDK.
*   A _preview channel_ of Microsoft Edge on your development client.

_Release_ SDK packages only contain stable APIs, not experimental APIs.  When you're working on a production release of your WebView2 app, use the following combination:
*   A _release_ version of the WebView2 SDK.
*   The WebView2 _Runtime_ on your development client.

More detail about the prerelease and release SDK packages is provided below.


<!-- ====================================================================== -->
## Use a prerelease version of the SDK along with a preview channel of Microsoft Edge

When developing an Evergreen WebView2 app, regularly test the app against the latest Microsoft Edge preview channel, in addition to testing against the WebView2 Runtime.  Because the web platform is constantly evolving, regular testing is the best way to ensure your app will continue to work as intended.

When you use a WebView2 SDK _prerelease_ package, use a Microsoft Edge preview channel on your development client.  Preview channels are also called _Insiders_ channels.  The Canary preview channel is recommended rather than Beta or Dev, because Canary is most recent and has implementations of the latest experimental APIs.

The SDK _prerelease_ package is a superset of the SDK release package, with method signatures for more, [Experimental APIs](#experimental-apis).  Preview channels provide the implementations of the experimental WebView2 APIs.  The experimental APIs are subject to change based on your feedback.  Avoid using the SDK prerelease package to build production apps.

For information about temporarily pointing your app to a preview channel instead of defaulting to the WebView2 Runtime, navigate to [Switch to a preview channel to test upcoming APIs and features](../how-to/set-preview-channel.md).


<!-- ====================================================================== -->
## Use a release version of the SDK along with the Runtime

When you use a WebView2 SDK _release_ package, use the WebView2 Evergreen _Runtime_ on your development client, rather than a Microsoft Edge preview channel.  By default, a WebView2 app targets the Runtime rather than Microsoft Edge.  By design, the Microsoft Edge Stable channel doesn't support WebView2.

The SDK _release_ package contains all of the stable Win32 C/C++ and .NET APIs, and doesn't include method signatures for experimental APIs.  All of the APIs that are in an SDK release package are fully supported, in an equal or higher build number of the WebView2 Runtime.

The SDK release package contains the following components:
*  [Win32 C/C++ APIs](/microsoft-edge/webview2/reference/win32).
*  .NET APIs:  [WPF](/dotnet/api/microsoft.web.webview2.wpf), [WinForms](/dotnet/api/microsoft.web.webview2.winforms), and [Core](/dotnet/api/microsoft.web.webview2.core).

For more information about automatic updating of the Evergreen Runtime, navigate to [Distribute a WebView2 app and the WebView2 Runtime](./distribution.md).


<!-- ====================================================================== -->
## Release cadence

New versions of the WebView2 SDK are shipped at the same general cadence as the Microsoft Edge browser, which has been approximately every six weeks.  This cadence is planned to change to every four weeks starting with Microsoft Edge version 94.


<!-- ====================================================================== -->
## Minimum version and build number to instantiate WebView2

For the client to be able to create a WebView2 instance and use the set of APIs in the WebView2 General Availability release (SDK build 616), the client must have WebView2 Runtime version 86.0.616.0 or higher.  Runtime 86.0.616.0 is a special release, because it is the General Availability release.

On a development machine, the client must have either the Microsoft Edge preview channel version 86.0.616.0 or higher, or the WebView2 Runtime version 86.0.616.0 or higher.


<!-- ====================================================================== -->
## Forward compatibility of APIs

The WebView2 _release_ SDK has been forward-compatible ever since version 1 (that is, SDK version [1.0.622.22](../release-notes.md#1062222)).
You can update your WebView2 app to use the latest APIs from the most recent release version of the SDK.  Your app will continue to work on clients because clients automatically have the latest WebView2 Evergreen Runtime.

The WebView2 APIs in an SDK _release_ package are stable and forward-compatible.  A WebView2 API works when using a WebView2 Runtime that has an equal or higher build number as the SDK build number in which the API was introduced.  The build number is the third part of the four-part version number for the Webview2 SDK, and of the four-part version number for Microsoft Edge and the WebView2 Runtime.

*  When you use a WebView2 SDK that has a build number _equal to or less than_ the WebView2 Runtime, every API that you have access to in that SDK works with that version of the Runtime.
*  When you use a WebView2 SDK that has a build number _greater than_ the WebView2 Runtime, the newer APIs' implementations are not available in the Runtime.

<!-- create diagram showing 3 SDK releases on a timeline, which ones would work w/ a given runtime -->
For example, if an API is introduced in SDK 1.0.**900**.0, that API would work with Runtime 94.0.**900+**.0, but not with Runtime 90.0.**700**.0.

<!-- dup statements, delete? -->
You must coordinate the WebView2 SDK version that you use for development, and the WebView2 Runtime version that's installed on client machines.
The client should have a version of the Runtime that supports all of the latest APIs that are in the SDK version you use to develop the app.
For full support for the latest APIs in a release version of the SDK, the Runtime on the client must have a build number that's greater than or equal to the SDK build number.


<!-- ====================================================================== -->
## Experimental APIs

The experimental APIs in a WebView2 SDK _prerelease_ package are not guaranteed to be forward-compatible and might be removed in future Runtime updates.
When a _prerelease_ version of the WebView2 SDK is initially made available, that SDK only works with Microsoft Edge Canary.  Soon after that, the prerelease SDK also works with the Beta and Dev channels.
Use a prerelease SDK to try out new APIs early and provide feedback before the new APIs are promoted to become stable, forward-compatible APIs.

For full support of experimental APIs, use a Microsoft Edge preview channel, not the WebView2 Evergreen Runtime.
Any experimental APIs that are in a prerelease SDK are not guaranteed to be forward-compatible.
The APIs that are in an SDK _release_ version are forward-compatible.  For more information, see [Forward compatibility of APIs](#forward-compatibility-of-apis) above.

The WebView2 team is seeking feedback on experimental WebView2 APIs that might be promoted to Stable in future releases.
The experimental APIs are indicated as "experimental" in the WebView2 SDK Reference documentation.
To help you evaluate the experimental APIs and share your feedback, navigate to the [WebView feedback repo](https://github.com/MicrosoftEdge/WebViewFeedback).

Avoid using the experimental APIs in production apps.  In subsequent versions of the SDK, experimental APIs might be modified, removed, or added.  After the release of an API as stable and public, the experimental version of that API is supported for two releases in a deprecated state.


<!-- ====================================================================== -->
## Matching the Runtime version with the SDK version

In the Evergreen distribution approach, the client's WebView2 Runtime automatically updates to the latest version available.
However, a user or IT admin might choose to prevent automatic updating of the WebView2 Runtime.
The resulting outdated Runtime on the client might cause compatibility issues with your updated WebView2 app that uses new APIs from a recent SDK.

In case updating the WebView2 Runtime is prevented on the client, make sure that you know the minimum build number of the [WebView2 Runtime](https://developer.microsoft.com/microsoft-edge/webview2/) that is required by your app.
The minimum required Runtime version to support the General Availability release of the SDK (build 616) is older than for the latest Runtime.
The latest Runtime supports all APIs that are in the latest SDK release build.

To check the compatibility between specific build numbers of the SDK and the Runtime or Microsoft Edge preview channel, navigate to [Release notes for WebView2 SDK](../release-notes.md).


<!-- ====================================================================== -->
## Feature-detecting to test whether the installed Runtime supports recently added APIs

<!-- this is the main section about QI; other articles should have a couple paragraphs only, and link to here -->

If your app uses the Evergreen Runtime rather than Fixed Version, you should wrap any calls to relatively new WebView2 APIs by using `QueryInterface` or `try-catch`.  There are edge cases where a client's Evergreen Runtime is not the latest build and therefore falls behind the SDK build number, because the Admin might have turned off updating of the WebView2 Runtime, or the client might be offline.

When you develop a WebView2 app using a recent version of the WebView2 SDK, if you use a recently added API, you should test or "feature-detect" whether that API is present in the client's installed WebView2 Runtime.  How your app programmatically tests for API support depends on the coding platform.

*   **Win32 C/C++**.  When requesting the DLL export `CreateCoreWebView2Environment` and when running `QueryInterface` on any `CoreWebView2` object, test for a return value of `E_NOINTERFACE`.  That return value likely indicates that the client's WebView2 Runtime is an older version that doesn't support that interface.  For an example of checking for the existence of specific WebView2 APIs in the Runtime, find `try_query` in [AppWindow.cpp](https://github.com/MicrosoftEdge/WebView2Samples/blob/8ec7de9d3e80a942bc7025cffad98eee75e11e64/SampleApps/WebView2APISample/AppWindow.cpp#L622).  This file wraps WebView2 API calls in the `CHECK_FAILURE` macro function, defined in `CheckFailure.h`.

*   **.NET and WinUI**.  Use `try/catch` and check for a `No such interface supported` exception when using methods, properties, and events that were added to more recent versions of the WebView2 SDK.  This exception likely indicates that the client's WebView2 Runtime is an older version that doesn't support that API.

If your code determines that an API is unavailable in the client's installed WebView2 Runtime, you should provide graceful fallback for the associated feature, or inform the user that they must update the WebView2 Runtime to use the feature.

This technique is listed as a WebView2 development best practice, at [Test whether APIs are supported by the installed WebView2 Runtime](developer-guide.md#test-whether-newer-apis-are-supported-by-the-installed-webview2-runtime).
