---
title: Release Notes for WebView2 Prerelease SDK 1.0.1466-prerelease
description: Release notes for Microsoft Edge WebView2 for Win32, WPF, and WinForms, covering new features, APIs, and fixes.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 10/31/2022
---
# Release Notes for WebView2 Prerelease SDK 1.0.1466-prerelease

Release Date: October 31, 2022

[NuGet package for WebView2 SDK 1.0.1466-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1466-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 109.0.1466.0 or higher.


<!-- ====================================================================== -->
## Experimental APIs

This Prerelease SDK adds the following experimental APIs:

* Added support for creating a shared memory based buffer with a specified size:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2SharedBuffer Class](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedbuffer?view=webview2-dotnet-1.0.1466-prerelease&preserve-view=true)
    * `Buffer`
    * `FileMappingHandle`
    * `Size`
    * `Close`
    * `Dispose`
    * `OpenStream`

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2SharedBuffer Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedbuffer?view=webview2-winrt-1.0.1466-prerelease&preserve-view=true)
    * `Buffer`
    * `Size`
    * `Close`
    * `OpenStream`

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalSharedBuffer](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsharedbuffer?view=webview2-1.0.1466-prerelease&preserve-view=true)
    * `Close`
    * `get_Buffer`
    * `get_FileMappingHandle`
    * `get_Size`
    * `OpenStream`

---

*  Added support for accessing a shared buffer object from the script of the main frame or `iframe`:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.PostSharedBufferToScript Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.postsharedbuffertoscript?view=webview2-dotnet-1.0.1466-prerelease&preserve-view=true)
* [CoreWebView2Frame.PostSharedBufferToScript Method](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.postsharedbuffertoscript?view=webview2-dotnet-1.0.1466-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.PostSharedBufferToScript Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1466-prerelease&preserve-view=true#postsharedbuffertoscript)
* [CoreWebView2Frame.PostSharedBufferToScript Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame?view=webview2-winrt-1.0.1466-prerelease&preserve-view=true#postsharedbuffertoscript)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Experimental18::PostSharedBufferToScript](/microsoft-edge/webview2/reference/win32/icorewebview2experimental18?view=webview2-1.0.1466-prerelease&preserve-view=true#postsharedbuffertoscript)
* [ICoreWebView2ExperimentalFrame4::PostSharedBufferToScript](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframe4?view=webview2-1.0.1466-prerelease&preserve-view=true#postsharedbuffertoscript)

---

*  Added support for running JavaScript code from the `JavaScript` parameter in the current top-level document:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2ScriptException Class](/dotnet/api/microsoft.web.webview2.core.corewebview2scriptexception?view=webview2-dotnet-1.0.1466-prerelease&preserve-view=true)
   * `ColumnNumber`
   * `LineNumber`
   * `Message`
   * `Name`
   * `ToJson`

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2ScriptException Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2scriptexception?view=webview2-winrt-1.0.1466-prerelease&preserve-view=true)
   * `ColumnNumber`
   * `LineNumber`
   * `Message`
   * `Name`
   * `ToJson`

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalScriptException](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalscriptexception?view=webview2-1.0.1466-prerelease&preserve-view=true)
   * `get_ColumnNumber`
   * `get_LineNumber`
   * `get_Message`
   * `get_Name`
   * `get_ToJson`

---


<!-- ====================================================================== -->
## Bug fixes

*   Fixed a bug in which the custom header title in print settings could be wrong. ([Issue #2093](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2093))
*   Display `AllowedCertificateAuthorities` in `add_ClientCertificateRequested` event as a `Base64` string.  (Runtime-only)  ([Issue #2346](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2346))
*   Fixed a bug in which the default footer URI in print settings is missing. ([Issue #2851](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2851))
*   Fixed a bug that produces a null pointer exception that's related to print settings.  (Runtime-only)  ([Issue #2858](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2858))
*   Fixed a bug that reports navigation failure when redirecting to a server that has been configured with Client Certificate Authentication and when the `WebResourceRequested` event is subscribed to.  (Runtime-only)
*   Fixed an `AddHostObjectToScript` bug in which, when JavaScript calls an async method and then a synchronous method, the async method call might fail.


<!-- ====================================================================== -->
## See also

* [Release Notes for the WebView2 SDK](./index.md)
* [WebView2 Roadmap](../roadmap.md)
