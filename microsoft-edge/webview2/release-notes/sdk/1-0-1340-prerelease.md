---
title: Prerelease SDK 1.0.1340-prerelease, for Runtime 105 (Aug. 8, 2022)
description: Release notes for Microsoft Edge WebView2, for Prerelease SDK 1.0.1340-prerelease.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 06/11/2026
---
# Prerelease SDK 1.0.1340-prerelease, for Runtime 105 (Aug. 8, 2022)

Release notes for Microsoft Edge WebView2 Prerelease SDK, release date: Aug. 8, 2022.

[NuGet package for WebView2 SDK 1.0.1340-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1340-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 105.0.1340.0 or later.

**Detailed contents:**
* [Experimental APIs (Phase 1: Experimental in Prerelease)](#experimental-apis-phase-1-experimental-in-prerelease)
   * [WebResourceRequested for workers](#webresourcerequested-for-workers)
   * [Custom scheme registration](#custom-scheme-registration)
* [Bug fixes](#bug-fixes)
* [See also](#see-also)


<!-- ====================================================================== -->
## Experimental APIs (Phase 1: Experimental in Prerelease)

The following Experimental APIs have been added in this Prerelease SDK.


<!-- ------------------------------ -->
#### `WebResourceRequested` for workers

Added support for `WebResourceRequested` for workers, which allows setting filters in order to receive `WebResourceRequested` events for service workers, shared workers, and different origin iframes.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.AddWebResourceRequestedFilter(uri, resourceContext, requestSourceKinds) Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.addwebresourcerequestedfilter?view=webview2-dotnet-1.0.1340-prerelease&preserve-view=true#microsoft-web-webview2-core-corewebview2-addwebresourcerequestedfilter(system-string-microsoft-web-webview2-core-corewebview2webresourcecontext-microsoft-web-webview2-core-corewebview2webresourcerequestsourcekinds))
* [CoreWebView2.RemoveWebResourceRequestedFilter(uri, resourceContext, requestSourceKinds) Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.removewebresourcerequestedfilter?view=webview2-dotnet-1.0.1340-prerelease&preserve-view=true#microsoft-web-webview2-core-corewebview2-removewebresourcerequestedfilter(system-string-microsoft-web-webview2-core-corewebview2webresourcecontext-microsoft-web-webview2-core-corewebview2webresourcerequestsourcekinds))
* [CoreWebView2WebResourceRequestedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2webresourcerequestedeventargs?view=webview2-dotnet-1.0.1340-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.AddWebResourceRequestedFilter(uri, resourceContext, requestSourceKinds) Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1340-prerelease&preserve-view=true#addwebresourcerequestedfilter)
* [CoreWebView2.RemoveWebResourceRequestedFilter(uri, resourceContext, requestSourceKinds) Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1340-prerelease&preserve-view=true#removewebresourcerequestedfilter)
* [CoreWebView2WebResourceRequestedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2webresourcerequestedeventargs?view=webview2-winrt-1.0.1340-prerelease&preserve-view=true)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Experimental16.AddWebResourceRequestedFilterWithRequestSourceKinds](/microsoft-edge/webview2/reference/win32/icorewebview2experimental16?view=webview2-1.0.1340-prerelease&preserve-view=true#addwebresourcerequestedfilterwithrequestsourcekinds)
* [ICoreWebView2Experimental16.RemoveWebResourceRequestedFilterWithRequestSourceKinds](/microsoft-edge/webview2/reference/win32/icorewebview2experimental16?view=webview2-1.0.1340-prerelease&preserve-view=true#removewebresourcerequestedfilterwithrequestsourcekinds)
* [ICoreWebView2ExperimentalWebResourceRequestedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalwebresourcerequestedeventargs?view=webview2-1.0.1340-prerelease&preserve-view=true)

---


<!-- ------------------------------ -->
#### Custom scheme registration

Added support for custom scheme registration which allows WebView2 apps to be able to handle `WebResourceRequested` event for requests with the specified scheme and be able to navigate the WebView2 control to the custom scheme.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2EnvironmentOptions Class](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions?view=webview2-dotnet-1.0.1340-prerelease&preserve-view=true)
* [CoreWebView2CustomSchemeRegistration Class](/dotnet/api/microsoft.web.webview2.core.corewebview2customschemeregistration?view=webview2-dotnet-1.0.1340-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2EnvironmentOptions Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions?view=webview2-winrt-1.0.1340-prerelease&preserve-view=true)
* [CoreWebView2CustomSchemeRegistration Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2customschemeregistration?view=webview2-winrt-1.0.1340-prerelease&preserve-view=true)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalEnvironmentOptions](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironmentoptions?view=webview2-1.0.1340-prerelease&preserve-view=true)
* [ICoreWebView2ExperimentalCustomSchemeRegistration](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcustomschemeregistration?view=webview2-1.0.1340-prerelease&preserve-view=true)

---


<!-- ====================================================================== -->
## Bug fixes

* Added the ability for developers to explicitly specify the path from which to load the WebView2Loader.dll. ([Issue #767](https://github.com/MicrosoftEdge/WebView2Feedback/issues/767))

* Added useful error messages when using `CallDevToolsProtocolMethod`. ([Issue #1609](https://github.com/MicrosoftEdge/WebView2Feedback/issues/1609))

* Fixed a bug in finding and loading the `WebView2Loader.dll` in some .NET apps. ([Issue #2372](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2372))

* Fixed a bug where `DownloadStarting` event was not fired when retrying a download. ([Issue #2489](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2489))

* Fixed an issue in service worker caching if the path was too long. ([Issue #1900](https://github.com/MicrosoftEdge/WebView2Feedback/issues/1900))

* Improved performance for **wv2winrt** `IMap` and `IMapView` projections into JavaScript.

* Adding support for HWND_MESSAGE to be used as WebView2 parent window to support headless scenarios.  ([Issue #202](https://github.com/MicrosoftEdge/WebView2Feedback/issues/202))

* Improved handling of running as admin user apps.

* Fixed online/offline status and notifications when using WebView2 in UWP apps.

* GDI scaling can now be enabled for WebView2.  WebView2 will respect the GDI scaling setting of the hosting application without additional work needed from the app.  ([Issue #1700](https://github.com/MicrosoftEdge/WebView2Feedback/issues/1700))

* Fixed a bug where focus is not returned to the application after closing the find bar for windowed mode. ([Issue #1225](https://github.com/MicrosoftEdge/WebView2Feedback/issues/1225))


<!-- ====================================================================== -->
## See also

* [Runtime 105.0.1343.22 (Sep. 6, 2022)](../runtime/105.md)
* [Release notes for WebView2](../index.md)
   * [Release notes for the WebView2 Runtime](../runtime/index.md)
   * [Release notes for WebView2 SDKs](./index.md)
