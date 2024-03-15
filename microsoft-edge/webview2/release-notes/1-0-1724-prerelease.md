---
title: Release Notes for WebView2 Prerelease SDK 1.0.1724-prerelease
description: Release notes for Microsoft Edge WebView2 for Win32, WPF, and WinForms, covering new features, APIs, and fixes.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 03/20/2023
---
# Release Notes for WebView2 Prerelease SDK 1.0.1724-prerelease

Release Date: March 20, 2023

[NuGet package for WebView2 SDK 1.0.1724-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1724-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 113.0.1724.0 or higher.


<!-- ====================================================================== -->
## Experimental APIs

This Prerelease SDK adds the following experimental APIs:


<!-- ------------------------------ -->
*  Added `AdditionalObjects` for WebMessage received:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2WebMessageReceivedEventArgs.AdditionalObjects Property](/dotnet/api/microsoft.web.webview2.core.corewebview2webmessagereceivedeventargs.additionalobjects?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2WebMessageReceivedEventArgs.AdditionalObjects Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2webmessagereceivedeventargs?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#additionalobjects)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalWebMessageReceivedEventArgs::get_AdditionalObjects](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalwebmessagereceivedeventargs?view=webview2-1.0.1724-prerelease&preserve-view=true#get_additionalobjects)

---


<!-- ------------------------------ -->
*  Added Window Management permission type:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2PermissionKind.WindowManagement Enum Value](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionkind?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2PermissionKind.WindowManagement Enum Value](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionkind?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true)

##### [Win32/C++](#tab/win32cpp)

* [COREWEBVIEW2_PERMISSION_KIND_WINDOW_MANAGEMENT Enum Value](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.1724-prerelease&preserve-view=true#corewebview2_permission_kind)

---


<!-- ------------------------------ -->
*  Added support for launching external URIs:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.LaunchingExternalUriScheme Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.launchingexternalurischeme?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)

* [CoreWebView2LaunchingExternalUriSchemeEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2launchingexternalurischemeeventargs?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.Cancel Property](/dotnet/api/microsoft.web.webview2.core.corewebview2launchingexternalurischemeeventargs.cancel?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.GetDeferral Method](/dotnet/api/microsoft.web.webview2.core.corewebview2launchingexternalurischemeeventargs.getdeferral?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.InitiatingOrigin Property](/dotnet/api/microsoft.web.webview2.core.corewebview2launchingexternalurischemeeventargs.initiatingorigin?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.IsUserInitiated Property](/dotnet/api/microsoft.web.webview2.core.corewebview2launchingexternalurischemeeventargs.isuserinitiated?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.Uri Property](/dotnet/api/microsoft.web.webview2.core.corewebview2launchingexternalurischemeeventargs.uri?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.LaunchingExternalUriScheme Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#launchingexternalurischeme)

* [CoreWebView2LaunchingExternalUriSchemeEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2launchingexternalurischemeeventargs?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.Cancel Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2launchingexternalurischemeeventargs?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#cancel)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.GetDeferral Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2launchingexternalurischemeeventargs?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#getdeferral)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.InitiatingOrigin Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2launchingexternalurischemeeventargs?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#initiatingorigin)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.IsUserInitiated Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2launchingexternalurischemeeventargs?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#isuserinitiated)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.Uri Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2launchingexternalurischemeeventargs?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#uri)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Experimental21::add_LaunchingExternalUriScheme](/microsoft-edge/webview2/reference/win32/icorewebview2experimental21?view=webview2-1.0.1724-prerelease&preserve-view=true#add_launchingexternalurischeme)

* [ICoreWebView2Experimental21::remove_LaunchingExternalUriScheme](/microsoft-edge/webview2/reference/win32/icorewebview2experimental21?view=webview2-1.0.1724-prerelease&preserve-view=true#remove_launchingexternalurischeme)

* [ICoreWebView2ExperimentalLaunchingExternalUriSchemeEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentallaunchingexternalurischemeeventhandler?view=webview2-1.0.1724-prerelease&preserve-view=true)
  * [ICoreWebView2ExperimentalLaunchingExternalUriSchemeEventHandler::Invoke](/microsoft-edge/webview2/reference/win32/icorewebview2experimentallaunchingexternalurischemeeventhandler?view=webview2-1.0.1724-prerelease&preserve-view=true#invoke)

* [ICoreWebView2ExperimentalLaunchingExternalUriSchemeEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2experimentallaunchingexternalurischemeeventargs?view=webview2-1.0.1724-prerelease&preserve-view=true)
  * [ICoreWebView2ExperimentalLaunchingExternalUriSchemeEventArgs::get_Uri](/microsoft-edge/webview2/reference/win32/icorewebview2experimentallaunchingexternalurischemeeventargs?view=webview2-1.0.1724-prerelease&preserve-view=true#get_uri)
  * [ICoreWebView2ExperimentalLaunchingExternalUriSchemeEventArgs::get_InitiatingOrigin](/microsoft-edge/webview2/reference/win32/icorewebview2experimentallaunchingexternalurischemeeventargs?view=webview2-1.0.1724-prerelease&preserve-view=true#get_initiatingorigin)
  * [ICoreWebView2ExperimentalLaunchingExternalUriSchemeEventArgs::get_IsUserInitiated](/microsoft-edge/webview2/reference/win32/icorewebview2experimentallaunchingexternalurischemeeventargs?view=webview2-1.0.1724-prerelease&preserve-view=true#get_isuserinitiated)
  * [ICoreWebView2ExperimentalLaunchingExternalUriSchemeEventArgs::get_Cancel](/microsoft-edge/webview2/reference/win32/icorewebview2experimentallaunchingexternalurischemeeventargs?view=webview2-1.0.1724-prerelease&preserve-view=true#get_cancel)
  * [ICoreWebView2ExperimentalLaunchingExternalUriSchemeEventArgs::put_Cancel](/microsoft-edge/webview2/reference/win32/icorewebview2experimentallaunchingexternalurischemeeventargs?view=webview2-1.0.1724-prerelease&preserve-view=true#put_cancel)
  * [ICoreWebView2ExperimentalLaunchingExternalUriSchemeEventArgs::GetDeferral](/microsoft-edge/webview2/reference/win32/icorewebview2experimentallaunchingexternalurischemeeventargs?view=webview2-1.0.1724-prerelease&preserve-view=true#getdeferral)

---


<!-- ------------------------------ -->
*  Added support for texture streaming:

##### [.NET/C#](#tab/dotnetcsharp)

The `Environment` interface that returns the `TextureStream` interface:
* [CoreWebView2Environment.CreateTextureStream Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createtexturestream?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
* [CoreWebView2Environment.RenderAdapterLUIDChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.renderadapterluidchanged?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
* [CoreWebView2Environment.RenderAdapterLUID Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.renderadapterluid?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)

The `TextureStream` interface:
* [CoreWebView2TextureStream Class](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestream?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
    * [CoreWebView2TextureStream.AddAllowedOrigin Method](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestream.addallowedorigin?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
    * [CoreWebView2TextureStream.CloseTexture Method](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestream.closetexture?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
    * [CoreWebView2TextureStream.CreateTexture Method](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestream.createtexture?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
    * [CoreWebView2TextureStream.ErrorReceived Event](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestream.errorreceived?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
    * [CoreWebView2TextureStream.GetAvailableTexture Method](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestream.getavailabletexture?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
    * [CoreWebView2TextureStream.Id Property](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestream.id?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
    * [CoreWebView2TextureStream.PresentTexture Method](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestream.presenttexture?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
    * [CoreWebView2TextureStream.RemoveAllowedOrigin Method](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestream.removeallowedorigin?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
    * [CoreWebView2TextureStream.SetD3DDevice Method](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestream.setd3ddevice?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
    * [CoreWebView2TextureStream.StartRequested Event](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestream.startrequested?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
    * [CoreWebView2TextureStream.Stop Method](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestream.stop?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
    * [CoreWebView2TextureStream.Stopped Event](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestream.stopped?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
    * [CoreWebView2TextureStream.WebTextureReceived Event](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestream.webtexturereceived?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
    * [CoreWebView2TextureStream.WebTextureStreamStopped Event](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestream.webtexturestreamstopped?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)

ErrorReceivedEventArgs:
* [CoreWebView2TextureStreamErrorReceivedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestreamerrorreceivedeventargs?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2TextureStreamErrorReceivedEventArgs.Kind Property](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestreamerrorreceivedeventargs.kind?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2TextureStreamErrorReceivedEventArgs.texture Property](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestreamerrorreceivedeventargs.texture?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)

WebTextureReceivedEventArgs:
* [CoreWebView2TextureStreamWebTextureReceivedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestreamwebtexturereceivedeventargs?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
* [CoreWebView2TextureStreamWebTextureReceivedEventArgs.WebTexture Property](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestreamwebtexturereceivedeventargs.webtexture?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)

TextureStream error kind enum:
* [CoreWebView2TextureStreamErrorKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestreamerrorkind?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2TextureStreamErrorKind.CoreWebView2TextureStreamErrorNoVideoTrackStarted Enum Value](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestreamerrorkind?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2TextureStreamErrorKind.CoreWebView2TextureStreamErrorTextureError Enum Value](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestreamerrorkind?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2TextureStreamErrorKind.CoreWebView2TextureStreamErrorTextureInUse Enum Value](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestreamerrorkind?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)

The `Texture` interface that the host writes to so that the Renderer will render on it:
* [CoreWebView2Texture Class](/dotnet/api/microsoft.web.webview2.core.corewebview2texture?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2Texture.Handle Property](/dotnet/api/microsoft.web.webview2.core.corewebview2texture.handle?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2Texture.Resource Property](/dotnet/api/microsoft.web.webview2.core.corewebview2texture.resource?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2Texture.Timestamp Property](/dotnet/api/microsoft.web.webview2.core.corewebview2texture.timestamp?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)

The received `WebTexture` interface that the Renderer writes to so that the host will read on it:
* [CoreWebView2WebTexture Class](/dotnet/api/microsoft.web.webview2.core.corewebview2webtexture?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2WebTexture.Handle Property](/dotnet/api/microsoft.web.webview2.core.corewebview2webtexture.handle?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2WebTexture.Resource Property](/dotnet/api/microsoft.web.webview2.core.corewebview2webtexture.resource?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2WebTexture.Timestamp Property](/dotnet/api/microsoft.web.webview2.core.corewebview2webtexture.timestamp?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

The `Environment` interface that returns the `TextureStream` interface:
* [CoreWebView2Environment.CreateTextureStream Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#createtexturestream)
* [CoreWebView2Environment.RenderAdapterLUIDChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#renderadapterluidchanged)
* [CoreWebView2Environment.RenderAdapterLUID Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#renderadapterluid)

The `TextureStream` interface:
* [CoreWebView2TextureStream Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestream?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true)
    * [CoreWebView2TextureStream.AddAllowedOrigin Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestream?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#addallowedorigin)
    * [CoreWebView2TextureStream.CloseTexture Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestream?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#closetexture)
    * [CoreWebView2TextureStream.CreateTexture Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestream?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#createtexture)
    * [CoreWebView2TextureStream.ErrorReceived Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestream?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#errorreceived)
    * [CoreWebView2TextureStream.GetAvailableTexture Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestream?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#getavailabletexture)
    * [CoreWebView2TextureStream.Id Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestream?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#id)
    * [CoreWebView2TextureStream.PresentTexture Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestream?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#presenttexture)
    * [CoreWebView2TextureStream.RemoveAllowedOrigin Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestream?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#removeallowedorigin)
    * [CoreWebView2TextureStream.SetD3DDevice Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestream?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#setd3ddevice)
    * [CoreWebView2TextureStream.StartRequested Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestream?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#startrequested)
    * [CoreWebView2TextureStream.Stop Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestream?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#stop)
    * [CoreWebView2TextureStream.Stopped Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestream?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#stopped)
    * [CoreWebView2TextureStream.WebTextureReceived Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestream?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#webtexturereceived)
    * [CoreWebView2TextureStream.WebTextureStreamStopped Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestream?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#webtexturestreamstopped)

ErrorReceivedEventArgs:
* [CoreWebView2TextureStreamErrorReceivedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestreamerrorreceivedeventargs?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2TextureStreamErrorReceivedEventArgs.Kind Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestreamerrorreceivedeventargs?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#kind)

WebTextureReceivedEventArgs:
* [CoreWebView2TextureStreamWebTextureReceivedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestreamwebtexturereceivedeventargs?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2TextureStreamWebTextureReceivedEventArgs.WebTexture Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestreamwebtexturereceivedeventargs?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#webtexture)

TextureStream error kind enum:
* [CoreWebView2TextureStreamErrorKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestreamerrorkind?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2TextureStreamErrorKind.CoreWebView2TextureStreamErrorNoVideoTrackStarted Enum Value](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestreamerrorkind?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2TextureStreamErrorKind.CoreWebView2TextureStreamErrorTextureError Enum Value](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestreamerrorkind?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2TextureStreamErrorKind.CoreWebView2TextureStreamErrorTextureInUse Enum Value](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestreamerrorkind?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true)

The `Texture` interface that the host writes to so that the Renderer will render on it:
* [CoreWebView2Texture Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texture?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2Texture.Resource Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texture?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#resource)
   * [CoreWebView2Texture.Timestamp Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texture?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#timestamp)

The received `WebTexture` interface that the Renderer writes to so that the host will read on it:
* [CoreWebView2WebTexture Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2webtexture?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2WebTexture.Resource Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2webtexture?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#resource)
   * [CoreWebView2WebTexture.Timestamp Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2webtexture?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#timestamp)

##### [Win32/C++](#tab/win32cpp)

The `Environment` interface that returns the `TextureStream` interface:
* [ICoreWebView2ExperimentalEnvironment12](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment12?view=webview2-1.0.1724-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalEnvironment12::CreateTextureStream](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment12?view=webview2-1.0.1724-prerelease&preserve-view=true#createtexturestream)
   * [ICoreWebView2ExperimentalEnvironment12::RenderAdapterLUID (get)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment12?view=webview2-1.0.1724-prerelease&preserve-view=true#get_renderadapterluid)
   * [ICoreWebView2ExperimentalEnvironment12::RenderAdapterLUIDChanged (add, remove)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment12?view=webview2-1.0.1724-prerelease&preserve-view=true#add_renderadapterluidchanged)

The `TextureStream` interface:
* [ICoreWebView2ExperimentalTextureStream](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalTextureStream::add_ErrorReceived](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#add_errorreceived)
   * [ICoreWebView2ExperimentalTextureStream::add_StartRequested](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#add_startrequested)
   * [ICoreWebView2ExperimentalTextureStream::add_Stopped](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#add_stopped)
   * [ICoreWebView2ExperimentalTextureStream::add_WebTextureReceived](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#add_webtexturereceived)
   * [ICoreWebView2ExperimentalTextureStream::add_WebTextureStreamStopped](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#add_webtexturestreamstopped)
   * [ICoreWebView2ExperimentalTextureStream::AddAllowedOrigin](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#addallowedorigin)
   * [ICoreWebView2ExperimentalTextureStream::CloseTexture](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#closetexture)
   * [ICoreWebView2ExperimentalTextureStream::CreateTexture](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#createtexture)
   * [ICoreWebView2ExperimentalTextureStream::get_Id](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#get_id)
   * [ICoreWebView2ExperimentalTextureStream::GetAvailableTexture](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#getavailabletexture)
   * [ICoreWebView2ExperimentalTextureStream::PresentTexture](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#presenttexture)
   * [ICoreWebView2ExperimentalTextureStream::remove_ErrorReceived](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#remove_errorreceived)
   * [ICoreWebView2ExperimentalTextureStream::remove_StartRequested](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#remove_startrequested)
   * [ICoreWebView2ExperimentalTextureStream::remove_Stopped](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#remove_stopped)
   * [ICoreWebView2ExperimentalTextureStream::remove_WebTextureReceived](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#remove_webtexturereceived)
   * [ICoreWebView2ExperimentalTextureStream::remove_WebTextureStreamStopped](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#remove_webtexturestreamstopped)
   * [ICoreWebView2ExperimentalTextureStream::RemoveAllowedOrigin](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#removeallowedorigin)
   * [ICoreWebView2ExperimentalTextureStream::SetD3DDevice](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#setd3ddevice)
   * [ICoreWebView2ExperimentalTextureStream::Stop](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#stop)

Supplemental `TextureStream*` interfaces:
* [ICoreWebView2ExperimentalTextureStreamStartRequestedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestreamstartrequestedeventhandler?view=webview2-1.0.1724-prerelease&preserve-view=true)
* [ICoreWebView2ExperimentalTextureStreamStoppedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestreamstoppedeventhandler?view=webview2-1.0.1724-prerelease&preserve-view=true)
* [ICoreWebView2ExperimentalTextureStreamErrorReceivedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestreamerrorreceivedeventhandler?view=webview2-1.0.1724-prerelease&preserve-view=true)
* [ICoreWebView2ExperimentalTextureStreamErrorReceivedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestreamerrorreceivedeventargs?view=webview2-1.0.1724-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalTextureStreamErrorReceivedEventArgs::get_Kind](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestreamerrorreceivedeventargs?view=webview2-1.0.1724-prerelease&preserve-view=true#get_kind)
   * [ICoreWebView2ExperimentalTextureStreamErrorReceivedEventArgs::get_Texture](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestreamerrorreceivedeventargs?view=webview2-1.0.1724-prerelease&preserve-view=true#get_texture)
* [ICoreWebView2ExperimentalTextureStreamWebTextureReceivedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestreamwebtexturereceivedeventhandler?view=webview2-1.0.1724-prerelease&preserve-view=true)
* [ICoreWebView2ExperimentalTextureStreamWebTextureReceivedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestreamwebtexturereceivedeventargs?view=webview2-1.0.1724-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalTextureStreamWebTextureReceivedEventArgs::get_WebTexture](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestreamwebtexturereceivedeventargs?view=webview2-1.0.1724-prerelease&preserve-view=true#get_webtexture)
* [ICoreWebView2ExperimentalTextureStreamWebTextureStreamStoppedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestreamwebtexturestreamstoppedeventhandler?view=webview2-1.0.1724-prerelease&preserve-view=true)

TextureStream error kind enum:
* [COREWEBVIEW2_TEXTURE_STREAM_ERROR_KIND Enum](/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.1724-prerelease&preserve-view=true#corewebview2_texture_stream_error_kind)

Other interfaces (`RenderAdapter`):
* [ICoreWebView2ExperimentalRenderAdapterLUIDChangedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalrenderadapterluidchangedeventhandler?view=webview2-1.0.1724-prerelease&preserve-view=true)

The `Texture` interface that the host writes to so that the Renderer will render on it:
* [ICoreWebView2ExperimentalTexture](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexture?view=webview2-1.0.1724-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalTexture::get_Handle](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexture?view=webview2-1.0.1724-prerelease&preserve-view=true#get_handle)
   * [ICoreWebView2ExperimentalTexture::get_Resource](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexture?view=webview2-1.0.1724-prerelease&preserve-view=true#get_resource)
   * [ICoreWebView2ExperimentalTexture::get_Timestamp](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexture?view=webview2-1.0.1724-prerelease&preserve-view=true#get_timestamp)
   * [ICoreWebView2ExperimentalTexture::put_Timestamp](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexture?view=webview2-1.0.1724-prerelease&preserve-view=true#put_timestamp)

The received `WebTexture` interface that the Renderer writes to so that the host will read on it:
* [ICoreWebView2ExperimentalWebTexture](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalwebtexture?view=webview2-1.0.1724-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalWebTexture::get_Handle](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalwebtexture?view=webview2-1.0.1724-prerelease&preserve-view=true#get_handle)
   * [ICoreWebView2ExperimentalWebTexture::get_Resource](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalwebtexture?view=webview2-1.0.1724-prerelease&preserve-view=true#get_resource)
   * [ICoreWebView2ExperimentalWebTexture::get_Timestamp](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalwebtexture?view=webview2-1.0.1724-prerelease&preserve-view=true#get_timestamp)

---


<!-- ------------------------------ -->
*  Added support for profile management: custom data partition, cookie manager and profile deletion:

##### [.NET/C#](#tab/dotnetcsharp)

Added support for custom data partition:
* [CoreWebView2.CustomDataPartitionId Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.customdatapartitionid?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
* [CoreWebView2Profile.ClearCustomDataPartitionAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.clearcustomdatapartitionasync?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)

Added support for cookie manager:
* [CoreWebView2Profile.CookieManager Property](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.cookiemanager?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)

Add support for managing profile deletion:
* [CoreWebView2Profile.Delete Method](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.delete?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
* [CoreWebView2Profile.Deleted Event](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.deleted?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

Added support for custom data partition:
* [CoreWebView2.CustomDataPartitionId Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#customdatapartitionid)
* [CoreWebView2Profile.ClearCustomDataPartitionAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#clearcustomdatapartitionasync)

Added support for cookie manager:
* [CoreWebView2Profile.CookieManager Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#cookiemanager)

Add support for managing profile deletion:
* [CoreWebView2Profile.Delete Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#delete)
* [CoreWebView2Profile.Deleted Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#deleted)

##### [Win32/C++](#tab/win32cpp)

Added support for custom data partition:
* [ICoreWebView2Experimental20](/microsoft-edge/webview2/reference/win32/icorewebview2experimental20?view=webview2-1.0.1724-prerelease&preserve-view=true)
   * [ICoreWebView2Experimental20::get_CustomDataPartitionId](/microsoft-edge/webview2/reference/win32/icorewebview2experimental20?view=webview2-1.0.1724-prerelease&preserve-view=true#get_customdatapartitionid)
   * [ICoreWebView2Experimental20::put_CustomDataPartitionId](/microsoft-edge/webview2/reference/win32/icorewebview2experimental20?view=webview2-1.0.1724-prerelease&preserve-view=true#put_customdatapartitionid)
* [ICoreWebView2ExperimentalProfile7](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile7?view=webview2-1.0.1724-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalProfile7::ClearCustomDataPartition](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile7?view=webview2-1.0.1724-prerelease&preserve-view=true#clearcustomdatapartition)
* [ICoreWebView2ExperimentalClearCustomDataPartitionCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalclearcustomdatapartitioncompletedhandler?view=webview2-1.0.1724-prerelease&preserve-view=true)

Added support for cookie manager:
* [ICoreWebView2ExperimentalProfile8](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile8?view=webview2-1.0.1724-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalProfile8::get_CookieManager](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile8?view=webview2-1.0.1724-prerelease&preserve-view=true#get_cookiemanager)

Add support for managing profile deletion:
* [ICoreWebView2ExperimentalProfile10](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile10?view=webview2-1.0.1724-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalProfile10::Delete](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile10?view=webview2-1.0.1724-prerelease&preserve-view=true#delete)
   * [ICoreWebView2ExperimentalProfile10::add_Deleted](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile10?view=webview2-1.0.1724-prerelease&preserve-view=true#add_deleted)
   * [ICoreWebView2ExperimentalProfile10::remove_Deleted](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile10?view=webview2-1.0.1724-prerelease&preserve-view=true#remove_deleted)
* [ICoreWebView2ExperimentalProfileDeletedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofiledeletedeventhandler?view=webview2-1.0.1724-prerelease&preserve-view=true)

---


<!-- ====================================================================== -->
## Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.


<!-- ------------------------------ -->
*  Managing smartscreen API:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Settings Class](/dotnet/api/microsoft.web.webview2.core.corewebview2settings?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2Settings.IsReputationCheckingRequired Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.isreputationcheckingrequired?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Settings Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2Settings.IsReputationCheckingRequired Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#isreputationcheckingrequired)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Settings8](/microsoft-edge/webview2/reference/win32/icorewebview2settings8?view=webview2-1.0.1724-prerelease&preserve-view=true)
   * [ICoreWebView2Settings8::get_IsReputationCheckingRequired](/microsoft-edge/webview2/reference/win32/icorewebview2settings8?view=webview2-1.0.1724-prerelease&preserve-view=true#get_isreputationcheckingrequired)
   * [ICoreWebView2Settings8::put_IsReputationCheckingRequired](/microsoft-edge/webview2/reference/win32/icorewebview2settings8?view=webview2-1.0.1724-prerelease&preserve-view=true#put_isreputationcheckingrequired)

---


<!-- ====================================================================== -->
## Bug fixes

*  Fixed a bug in `PrintAsync` and `PrintToPdfStreamAsync` that throws an exception when print settings are null.
*  Improved handling of apps running elevated.  (Runtime-only)
*  Added support for window management permission kind.  (Runtime and SDK)
*  Reliability improvement.  (Runtime-only)


<!-- ====================================================================== -->
## See also

* [Release Notes for the WebView2 SDK](./index.md)
* [WebView2 Roadmap](../roadmap.md)
