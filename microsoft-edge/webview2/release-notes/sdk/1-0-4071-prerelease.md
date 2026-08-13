---
title: SDK 1.0.4071-prerelease, for Runtime 150 (Jun. 11, 2026)
description: Release notes for Microsoft Edge WebView2 SDK 1.0.4071-prerelease.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 06/11/2026
---
# SDK 1.0.4071-prerelease, for Runtime 150 (Jun. 11, 2026)

Release Date: Jun. 11, 2026

[NuGet package for WebView2 SDK 1.0.4071-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.4071-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 150.0.4071.0 or later.


<!-- ====================================================================== -->
## Deprecation of DevToolsProtocolExtension NuGet package

[NuGet package for DevToolsProtocolExtension 1.0.2901](https://www.nuget.org/packages/Microsoft.Web.WebView2.DevToolsProtocolExtension)

The `Microsoft.Web.WebView2.DevToolsProtocolExtension` NuGet package is being deprecated, and no further versions of this package will be published.  This deprecation is not linked to any WebView2 Release SDK or Prerelease SDK.

The DevToolsProtocolExtension package provides a strongly-typed .NET wrapper over the Chrome DevTools Protocol (CDP) for use in WebView2 apps.  The existing published versions (`1.0.824`, `1.0.2271`, and `1.0.2901`) remain available on NuGet Gallery and are not being removed.

See also:
* [[Deprecation] Microsoft.Web.WebView2.DevToolsProtocolExtension NuGet package](https://github.com/MicrosoftEdge/WebView2Announcements/issues/135)

**Recommended alternative:**

All CDP calls can be made directly via the WebView2 CDP APIs, without using the extension package.  See [Use the Chrome DevTools Protocol (CDP) in WebView2 apps](../../how-to/chromium-devtools-protocol.md) and the following:

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.CallDevToolsProtocolMethodAsync(String, String) Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.calldevtoolsprotocolmethodasync)
   * [CoreWebView2.CallDevToolsProtocolMethodForSessionAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.calldevtoolsprotocolmethodforsessionasync)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.CallDevToolsProtocolMethodAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#calldevtoolsprotocolmethodasync)
   * [CoreWebView2.CallDevToolsProtocolMethodForSessionAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#calldevtoolsprotocolmethodforsessionasync)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2` interface:
   * [ICoreWebView2::CallDevToolsProtocolMethod method](/microsoft-edge/webview2/reference/win32/icorewebview2#calldevtoolsprotocolmethod)
* `ICoreWebView2_11` interface:
   * [ICoreWebView2_11::CallDevToolsProtocolMethodForSession method](/microsoft-edge/webview2/reference/win32/icorewebview2_11#calldevtoolspotocolmethodforsession)

---


<!-- ====================================================================== -->
## Bug fixes

* Added total-count histograms for WebView2 environment and controller creation attempts.

* Fixed container safety issues in WebView2 frame and listener code.

* WinRT event subscription now keeps the projection wrapper alive until the handler is unsubscribed.


<!-- ====================================================================== -->
## See also

* [Runtime 150.0.4078.44 (Jul. 7, 2026)](../runtime/150.md)
* [Release notes for WebView2](../index.md)
   * [Release notes for the WebView2 Runtime](../runtime/index.md)
   * [Release notes for WebView2 SDKs](./index.md)
