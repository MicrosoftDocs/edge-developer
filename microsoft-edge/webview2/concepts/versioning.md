---
title: Understand the different WebView2 SDK versions
description: Understand the different WebView2 SDK versions, and version models used for Microsoft Edge WebView2.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 08/03/2021
---
# Understand the different WebView2 SDK versions

The NuGet package for the WebView2 SDK contains both a release and prerelease package.  Either use a prerelease SDK with a preview channel of Microsoft Edge, or use a release SDK with the WebView2 Runtime.

_Prerelease_ SDK packages are for use during development if you want to test the latest WebView2 APIs, including the experimental APIs, before support for those APIs is added to the Runtime.  The Canary channel is recommended, because it has the implementations of the latest APIs.  When you want to test and use experimental WebView2 APIs, use the following combination:
*  A _prerelease_ version of the WebView2 SDK.
*  A _preview channel_ of Microsoft Edge on your development client.

_Release_ SDK packages only contain stable APIs, not experimental APIs.  When you're working on a production release of your WebView2 app, use the following combination:
*  A _release_ version of the WebView2 SDK.
*  The WebView2 _Runtime_ on your development client.

More detail about the prerelease and release SDK packages is provided below.


<!-- ====================================================================== -->
## Use a prerelease version of the SDK along with a preview channel of Microsoft Edge

When developing an Evergreen WebView2 app, regularly test the app against the latest Microsoft Edge preview channel, in addition to testing against the WebView2 Runtime.  Because the web platform is constantly evolving, regular testing is the best way to ensure your app will continue to work as intended.

When you use a WebView2 SDK _prerelease_ package, use a Microsoft Edge preview channel on your development client.  Preview channels are also called _Insiders_ channels.  The Canary preview channel is recommended rather than Beta or Dev, because Canary is most recent and has implementations of the latest experimental APIs.

The SDK _prerelease_ package is a superset of the SDK release package, with method signatures for more, [Experimental APIs](#experimental-apis).  Preview channels provide the implementations of the experimental WebView2 APIs.  The experimental APIs are subject to change based on your feedback.  Avoid using the SDK prerelease package to build production apps.

For information about temporarily pointing your app to a preview channel instead of defaulting to the WebView2 Runtime, see [Test upcoming APIs and features](../how-to/set-preview-channel.md).


<!-- ====================================================================== -->
## Use a release version of the SDK along with the Runtime

When you use a WebView2 SDK _release_ package, use the WebView2 Evergreen _Runtime_ on your development client, rather than a Microsoft Edge preview channel.  By default, a WebView2 app targets the Runtime rather than Microsoft Edge.  By design, the Microsoft Edge Stable channel doesn't support WebView2.

The SDK _release_ package contains all of the stable Win32 C/C++ and .NET APIs, and doesn't include method signatures for experimental APIs.  All of the APIs that are in an SDK release package are fully supported, in an equal or higher build number of the WebView2 Runtime.

The SDK release package contains the following components:
*  [Win32 C/C++ APIs](/microsoft-edge/webview2/reference/win32).
*  .NET APIs:  [WPF](/dotnet/api/microsoft.web.webview2.wpf), [WinForms](/dotnet/api/microsoft.web.webview2.winforms), and [Core](/dotnet/api/microsoft.web.webview2.core).

For more information about automatic updating of the Evergreen Runtime, see [Distribute your app and the WebView2 Runtime](distribution.md).


<!-- ====================================================================== -->
## Release cadence

New versions of the WebView2 SDK are shipped at the same general cadence as the Microsoft Edge browser, which is approximately every four weeks.


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

*  When you use a WebView2 SDK that has a build number _greater than_ the WebView2 Runtime, the newer APIs' implementations aren't available in the Runtime.

<!-- create diagram showing 3 SDK releases on a timeline, which ones would work w/ a given runtime -->
For example, if an API is introduced in SDK 1.0.**900**.0, that API would work with Runtime 94.0.**900+**.0, but not with Runtime 90.0.**700**.0.

<!-- dup statements, delete? -->
You must coordinate the WebView2 SDK version that you use for development, and the WebView2 Runtime version that's installed on client machines.
The client should have a version of the Runtime that supports all of the latest APIs that are in the SDK version you use to develop the app.
For full support for the latest APIs in a release version of the SDK, the Runtime on the client must have a build number that's greater than or equal to the SDK build number.


<!-- ====================================================================== -->
## Experimental APIs

Prerelease versions of the WebView2 SDK, but not release versions of the WebView2 SDK, contain experimental APIs.  Use experimental APIs to try out new forthcoming features that are in development.

### Developing with experimental APIs and providing feedback

The experimental APIs in a WebView2 SDK _prerelease_ package aren't guaranteed to be forward-compatible and might be removed in future Runtime updates.  When a _prerelease_ version of the WebView2 SDK is initially made available, that SDK only works with Microsoft Edge Canary.  Soon after that, the prerelease SDK also works with the Beta and Dev channels.  Use a prerelease SDK to try out new APIs early and provide feedback before the new APIs are promoted to become stable, forward-compatible APIs.

For full support of experimental APIs, use a Microsoft Edge preview channel, not the WebView2 Evergreen Runtime.  Any experimental APIs that are in a prerelease SDK aren't guaranteed to be forward-compatible.  The APIs that are in an SDK _release_ version are forward-compatible.  For more information, see [Forward compatibility of APIs](#forward-compatibility-of-apis) above.

The WebView2 team is seeking feedback on experimental WebView2 APIs that might be promoted to Stable in future releases.  The experimental APIs are indicated as "experimental" in the WebView2 SDK Reference documentation.

To help you evaluate the experimental APIs and share your feedback, use the [WebView2Feedback](https://github.com/MicrosoftEdge/WebViewFeedback) repo.


### Moving from experimental APIs to stable APIs

When moving your WebView2 app from using an experimental API to using a new, stable API:

*  Update your SDK package version.

*  Update code to use stable API instead of experimental API (for COM).

*  Always use feature detection, to ensure that the API is implemented in the WebView2 Runtime.  See [Feature-detecting to test whether the installed Runtime supports recently added APIs](#feature-detecting-to-test-whether-the-installed-runtime-supports-recently-added-apis) below.

*  Note for .NET only: In a prerelease WebView2 SDK, the .NET stable APIs will fallback to the corresponding experimental APIs, if the user's WebView2 Runtime has only the experimental API and doesn't have the stable API.

<!-- earlier version where we worked-up the above takeaway points: -->

Here's how to set up your app to fall back to using experimental APIs, for your subset of users who don't yet have the latest WebView2 Runtime.  Use these considerations when moving your app from using experimental APIs to stable APIs.

*  Use feature detection; see [Feature-detecting to test whether the installed Runtime supports recently added APIs](#feature-detecting-to-test-whether-the-installed-runtime-supports-recently-added-apis) below.

*  Note that on .NET, if the stable API doesn't exist in the WebView2 Runtime, WebView2 automatically falls back to the experimental API implementation.  So your fallback code is relied on less often.

Once an API has been moved from experimental to stable APIs, you need to move your app's code to the stable API, because the stable API will be supported with bug fixes, while the experimental API will be deprecated, and in the next SDK release, the deprecated experimental API isn't available.

<!-- 
For other platforms, not well supported, let us know how badly needed, but not normal/commonplace to do this.
For Win32, where there isn't fallback, see sample for how to handle that.  For COM, we don't have a "deprecated" header file, so you have to manually copy the old interface from the previous SDK. 
For WinRT, __
-->

*  If you want to be able to maintain the minimal Runtime version for you app, try to use Stable APIs, and if the API doesn't exist in the Runtime, have your code fall back to using the experimental API.
   *  Only for .NET, only for APIs that match up with the experimental APIs, auto fallback (you have to be using prerelease SDK, for this to happen).

Audience: WebView2 app devs who are moving app from experimental APIs to stable APIs.

If your WebView2 app is using WebView2 experimental APIs and you're trying to move your app to using stable APIs, use feature detection to have your app fall back to using experimental APIs in the case of users who don't yet have the latest WebView2 Runtime.
When you move to stable APIs, it requires that the users have the up-to-date WebView2 Runtime.  Some users won't have the latest Runtime, so you'll want to fall back to experimental APIs, by using feature detection.

Using experimental APIs is not recommended for production apps.

If you're still experimenting with these APIs, but we have already shipped a stable API and we've deprecated the experimental API, here's a way that will make those APIs continue to work.

Avoid using the experimental APIs in production apps.  In subsequent versions of the SDK, experimental APIs might be modified, removed, or added.  After the release of an API as stable, the experimental version of that API is supported for <!--at least; guaranteed-->two releases in a deprecated state.

Auto-fallback on .NET only works for prerelease SDKs.

If you're using a new stable API, you should have fallback detection.

<!-- from intake doc: -->

This feature helps transition from experimental WebView2 APIs to the corresponding stable WebView2 APIs.

When introducing the stable version of an API, the experimental API continues to exist in a deprecated form. You can keep using the experimental API without interruption. When moving to stable APIs, your app can still use the WebView2 Runtime version that supported the experimental APIs, so you can move to the stable API without changing your minimum required WebView2 Runtime version.

This policy changes the implementation of the WebView2 APIs and Runtime so that the experimental APIs can still be used after the stable APIs are introduced, and for the stable API to fall back to the experimental implementation, if the Runtime is older and doesn't support the stable API.

This is a WebView2 SDK/Runtime feature.


<!-- ====================================================================== -->
## Matching the Runtime version with the SDK version

In the Evergreen distribution approach, the client's WebView2 Runtime automatically updates to the latest version available.  However, a user or IT admin might choose to prevent automatic updating of the WebView2 Runtime.  The resulting outdated Runtime on the client might cause compatibility issues with your updated WebView2 app that uses new APIs from a recent SDK.

In case updating the WebView2 Runtime is prevented on the client, make sure that you know the minimum build number of the [WebView2 Runtime](https://developer.microsoft.com/microsoft-edge/webview2/) that is required by your app.  The minimum required Runtime version to support the General Availability release of the SDK (build 616) is older than for the latest Runtime.
The latest Runtime supports all APIs that are in the latest SDK release build.  

To check the compatibility between specific build numbers of the SDK and the Runtime or Microsoft Edge preview channel, see [Release Notes for the WebView2 SDK](../release-notes.md).


<!-- ====================================================================== -->
## Feature-detecting to test whether the installed Runtime supports recently added APIs

<!-- this is the main section about QI; other articles should have a couple paragraphs only, and link to here -->

If your app uses the Evergreen Runtime rather than Fixed Version, you should wrap any calls to relatively new WebView2 APIs by using `QueryInterface` or `try-catch`.  There are edge cases where a client's Evergreen Runtime isn't the latest build and therefore falls behind the SDK build number, because the Admin might have turned off updating of the WebView2 Runtime, or the client might be offline.

When you develop a WebView2 app using a recent version of the WebView2 SDK, if you use a recently added API, you should test or "feature-detect" whether that API is present in the client's installed WebView2 Runtime.  How your app programmatically tests for API support depends on the coding platform.

*  **Win32 C/C++**.  When requesting the DLL export `CreateCoreWebView2Environment` and when running `QueryInterface` on any `CoreWebView2` object, test for a return value of `E_NOINTERFACE`.  That return value likely indicates that the client's WebView2 Runtime is an older version that doesn't support that interface.

   For an example of checking for the existence of specific WebView2 APIs in the Runtime, find `try_query` in [AppWindow.cpp](https://github.com/MicrosoftEdge/WebView2Samples/blob/8ec7de9d3e80a942bc7025cffad98eee75e11e64/SampleApps/WebView2APISample/AppWindow.cpp#L622).  This file wraps WebView2 API calls in the `CHECK_FAILURE` macro function, defined in `CheckFailure.h`.

*  **.NET and WinUI**.  Use `try/catch` and check for a `No such interface supported` exception when using methods, properties, and events that were added to more recent versions of the WebView2 SDK.  This exception likely indicates that the client's WebView2 Runtime is an older version that doesn't support that API.

If your code determines that an API is unavailable in the client's installed WebView2 Runtime, you should provide graceful fallback for the associated feature, or inform the user that they must update the WebView2 Runtime to use the feature.

This technique is listed as a WebView2 development best practice, at [Test whether APIs are supported by the installed WebView2 Runtime](developer-guide.md#test-whether-newer-apis-are-supported-by-the-installed-webview2-runtime).
