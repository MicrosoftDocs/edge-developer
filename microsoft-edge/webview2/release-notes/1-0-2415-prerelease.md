---
title: Release Notes for WebView2 Prerelease SDK 1.0.2415-prerelease
description: Release notes for Microsoft Edge WebView2 for Win32, WPF, and WinForms, covering new features, APIs, and fixes.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 02/26/2024
---
# Release Notes for WebView2 Prerelease SDK 1.0.2415-prerelease

Release Date: February 26, 2024

[NuGet package for WebView2 SDK 1.0.2415-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2415-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 123.0.2415.0 or higher.


<!-- ====================================================================== -->
## Breaking changes


<!-- ------------------------------ -->
* The behavior of the `InitiatingOrigin` property of `CoreWebView2LaunchingExternalUriSchemeEventArgs` has changed.  If the `InitiatingOrigin` is an [opaque origin](https://html.spec.whatwg.org/multipage/browsers.html#concept-origin-opaque), the `InitiatingOrigin` that's reported in the event args is its precursor origin.  The _precursor origin_ is the origin that created the opaque origin.  For example, if a frame that's at `example.com` opens a subframe that has a different opaque origin, the subframe's precursor origin is `example.com`.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2LaunchingExternalUriSchemeEventArgs` Class:
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.InitiatingOrigin Property](/dotnet/api/microsoft.web.webview2.core.corewebview2launchingexternalurischemeeventargs.initiatingorigin?view=webview2-dotnet-1.0.2415-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2LaunchingExternalUriSchemeEventArgs` Class:
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.InitiatingOrigin Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2launchingexternalurischemeeventargs?view=webview2-winrt-1.0.2415-prerelease&preserve-view=true#initiatingorigin)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2LaunchingExternalUriSchemeEventArgs`:
   * [ICoreWebView2LaunchingExternalUriSchemeEventArgs::get_InitiatingOrigin](/microsoft-edge/webview2/reference/win32/icorewebview2launchingexternalurischemeeventargs?view=webview2-1.0.2415-prerelease&preserve-view=true#get_initiatingorigin)<!--no put-->

---


<!-- ------------------------------ -->
* The members of the `CoreWebView2TextureStreamErrorKind` enum have been renamed:

##### [.NET/C#](#tab/dotnetcsharp)

Old member names:
* [CoreWebView2TextureStreamErrorKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestreamerrorkind?view=webview2-dotnet-1.0.2357-prerelease&preserve-view=true)
   * `CoreWebView2TextureStreamErrorNoVideoTrackStarted`
   * `CoreWebView2TextureStreamErrorTextureError`
   * `CoreWebView2TextureStreamErrorTextureInUse`

New member names:
* [CoreWebView2TextureStreamErrorKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestreamerrorkind?view=webview2-dotnet-1.0.2415-prerelease&preserve-view=true)
   * `NoVideoTrackStarted`
   * `TextureError`
   * `TextureInUse`

##### [WinRT/C#](#tab/winrtcsharp)

Old member names:
* [CoreWebView2TextureStreamErrorKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestreamerrorkind?view=webview2-winrt-1.0.2357-prerelease&preserve-view=true)
   * `CoreWebView2TextureStreamErrorNoVideoTrackStarted`
   * `CoreWebView2TextureStreamErrorTextureError`
   * `CoreWebView2TextureStreamErrorTextureInUse`

New member names:
* [CoreWebView2TextureStreamErrorKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestreamerrorkind?view=webview2-winrt-1.0.2415-prerelease&preserve-view=true)
   * `NoVideoTrackStarted`
   * `TextureError`
   * `TextureInUse`

##### [Win32/C++](#tab/win32cpp)

Old member names:
* [COREWEBVIEW2_TEXTURE_STREAM_ERROR_KIND enum](/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.2357-prerelease&preserve-view=true#corewebview2_texture_stream_error_kind)
   * `COREWEBVIEW2_TEXTURE_STREAM_ERROR_NO_VIDEO_TRACK_STARTED`
   * `COREWEBVIEW2_TEXTURE_STREAM_ERROR_TEXTURE_ERROR`
   * `COREWEBVIEW2_TEXTURE_STREAM_ERROR_TEXTURE_IN_USE`

New member names:
* [COREWEBVIEW2_TEXTURE_STREAM_ERROR_KIND enum](/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.2415-prerelease&preserve-view=true#corewebview2_texture_stream_error_kind)
   * `COREWEBVIEW2_TEXTURE_STREAM_ERROR_KIND_NO_VIDEO_TRACK_STARTED`
   * `COREWEBVIEW2_TEXTURE_STREAM_ERROR_KIND_TEXTURE_ERROR`
   * `COREWEBVIEW2_TEXTURE_STREAM_ERROR_KIND_TEXTURE_IN_USE`

---


<!-- ====================================================================== -->
## Experimental APIs

This Prerelease SDK adds the following experimental APIs:

* The `CoreWebView2ControllerOptions` class now has an `AllowHostInputProcessing` property, which allows user input messages (keyboard, mouse, touch, and pen) to pass through the browser window to be received by an app process window.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2ControllerOptions` Class:
   * [CoreWebView2ControllerOptions.AllowHostInputProcessing Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controlleroptions.allowhostinputprocessing?view=webview2-dotnet-1.0.2415-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2ControllerOptions` Class:
   * [CoreWebView2ControllerOptions.AllowHostInputProcessing Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controlleroptions?view=webview2-winrt-1.0.2415-prerelease&preserve-view=true#allowhostinputprocessing)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalControllerOptions2](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontrolleroptions2?view=webview2-1.0.2415-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalControllerOptions2::get_AllowHostInputProcessing](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontrolleroptions2?view=webview2-1.0.2415-prerelease&preserve-view=true#get_allowhostinputprocessing)
   * [ICoreWebView2ExperimentalControllerOptions2::put_AllowHostInputProcessing](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontrolleroptions2?view=webview2-1.0.2415-prerelease&preserve-view=true#put_allowhostinputprocessing)

---


<!-- ====================================================================== -->
## Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.


<!-- ------------------------------ -->
* Added a new API to provide hit-testing results on the regions that a WebView2 contains.  This API is useful for visually hosted applications that want to handle mouse events on the non-client area of the WebView2 window.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2CompositionController` Class:
   * [CoreWebView2CompositionController.GetNonClientRegionAtPoint Method](/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.getnonclientregionatpoint?view=webview2-dotnet-1.0.2415-prerelease&preserve-view=true)
   * [CoreWebView2CompositionController.QueryNonClientRegion Method](/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.querynonclientregion?view=webview2-dotnet-1.0.2415-prerelease&preserve-view=true)
   * [CoreWebView2CompositionController.NonClientRegionChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.nonclientregionchanged?view=webview2-dotnet-1.0.2415-prerelease&preserve-view=true)

* [CoreWebView2NonClientRegionChangedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2nonclientregionchangedeventargs?view=webview2-dotnet-1.0.2415-prerelease&preserve-view=true)
   * [CoreWebView2NonClientRegionChangedEventArgs.RegionKind Property](/dotnet/api/microsoft.web.webview2.core.corewebview2nonclientregionchangedeventargs.regionkind?view=webview2-dotnet-1.0.2415-prerelease&preserve-view=true)

* [CoreWebView2NonClientRegionKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2nonclientregionkind?view=webview2-dotnet-1.0.2415-prerelease&preserve-view=true)

* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.IsNonClientRegionSupportEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.isnonclientregionsupportenabled?view=webview2-dotnet-1.0.2415-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2CompositionController` Class:
   * [CoreWebView2CompositionController.GetNonClientRegionAtPoint Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2compositioncontroller?view=webview2-winrt-1.0.2415-prerelease&preserve-view=true#getnonclientregionatpoint)
   * [CoreWebView2CompositionController.QueryNonClientRegion Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2compositioncontroller?view=webview2-winrt-1.0.2415-prerelease&preserve-view=true#querynonclientregion)
   * [CoreWebView2CompositionController.NonClientRegionChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2compositioncontroller?view=webview2-winrt-1.0.2415-prerelease&preserve-view=true#nonclientregionchanged)

* [CoreWebView2NonClientRegionChangedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2nonclientregionchangedeventargs?view=webview2-winrt-1.0.2415-prerelease&preserve-view=true)
   * [CoreWebView2NonClientRegionChangedEventArgs.RegionKind Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2nonclientregionchangedeventargs?view=webview2-winrt-1.0.2415-prerelease&preserve-view=true#regionkind)

* [CoreWebView2NonClientRegionKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2nonclientregionkind?view=webview2-winrt-1.0.2415-prerelease&preserve-view=true)

* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.IsNonClientRegionSupportEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings?view=webview2-winrt-1.0.2415-prerelease&preserve-view=true#isnonclientregionsupportenabled)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2CompositionController4](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller4?view=webview2-1.0.2415-prerelease&preserve-view=true)
   * [ICoreWebView2CompositionController4::GetNonClientRegionAtPoint](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller4?view=webview2-1.0.2415-prerelease&preserve-view=true#getnonclientregionatpoint)
   * [ICoreWebView2CompositionController4::QueryNonClientRegion](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller4?view=webview2-1.0.2415-prerelease&preserve-view=true#querynonclientregion)
   * [ICoreWebView2CompositionController4::add_NonClientRegionChanged](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller4?view=webview2-1.0.2415-prerelease&preserve-view=true#add_nonclientregionchanged)
   * [ICoreWebView2CompositionController4::remove_NonClientRegionChanged](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller4?view=webview2-1.0.2415-prerelease&preserve-view=true#remove_nonclientregionchanged)

* [ICoreWebView2NonClientRegionChangedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2nonclientregionchangedeventargs?view=webview2-1.0.2415-prerelease&preserve-view=true)
   * [ICoreWebView2NonClientRegionChangedEventArgs::get_RegionKind](/microsoft-edge/webview2/reference/win32/icorewebview2nonclientregionchangedeventargs?view=webview2-1.0.2415-prerelease&preserve-view=true#get_regionkind)<!--no put-->

* [ICoreWebView2NonClientRegionChangedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2nonclientregionchangedeventhandler?view=webview2-1.0.2415-prerelease&preserve-view=true)

* [ICoreWebView2RegionRectCollectionView](/microsoft-edge/webview2/reference/win32/icorewebview2regionrectcollectionview?view=webview2-1.0.2415-prerelease&preserve-view=true)

* [ICoreWebView2Settings9](/microsoft-edge/webview2/reference/win32/icorewebview2settings9?view=webview2-1.0.2415-prerelease&preserve-view=true)
   * [ICoreWebView2Settings9::get_IsNonClientRegionSupportEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings9?view=webview2-1.0.2415-prerelease&preserve-view=true#get_isnonclientregionsupportenabled)
   * [ICoreWebView2Settings9::put_IsNonClientRegionSupportEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings9?view=webview2-1.0.2415-prerelease&preserve-view=true#put_isnonclientregionsupportenabled)

* [COREWEBVIEW2_NON_CLIENT_REGION_KIND enum](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.2415-prerelease&preserve-view=true#corewebview2_non_client_region_kind)

---


<!-- ====================================================================== -->
## Bug fixes

#### Runtime-only

* Fixed the camera or mic not being able to open in Google Meet or Microsoft Teams meetings when the permission request is set to "not persisted" (that is, `SavesInProfile = false`).  ([Issue #3592](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3592))

* Fixed appending an empty `--edge-webview-custom-scheme` command-line switch in a WebView2 browser process.

* Disabled the global `UserDataFolder` registry key, so that this registry key can only be applied per-app.

* Fixed the `NewWindowRequested` event not being fired when opened by a browser extension. ([Issue #3841](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3841))

* Fixed the `NewWindowRequested` event not being fired when opening a view source. ([Issue #4162](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4162))

* Fixed an issue to fire `StateChanged` and `BytesReceivedChanged` events when a download involves navigation.

* Fixed a bug where the `BeforeUnload` dialog caused the WebView2 window to unexpectedly jump position. ([Issue #4350](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4350))

* Fixed an issue where `PrintAsync` prints a blank page if it is called too soon, before the PDF is fully loaded.  ([Issue #3779](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3779))


<!-- ====================================================================== -->
## See also

* [Release Notes for the WebView2 SDK](./index.md)
* [WebView2 Roadmap](../roadmap.md)
