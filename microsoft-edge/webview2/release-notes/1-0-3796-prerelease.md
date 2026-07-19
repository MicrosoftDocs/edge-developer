---
title: Prerelease SDK 1.0.3796-prerelease, for Runtime 145 (Jan. 19, 2026)
description: Release notes for Microsoft Edge WebView2, for Prerelease SDK 1.0.3796-prerelease.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 06/11/2026
---
# Prerelease SDK 1.0.3796-prerelease, for Runtime 145 (Jan. 19, 2026)

Release Date: Jan. 19, 2026

[NuGet package for WebView2 SDK 1.0.3796-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3796-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 145.0.3796.0 or later.

**Detailed contents:**
* [Experimental APIs (Phase 1: Experimental in Prerelease)](#experimental-apis-phase-1-experimental-in-prerelease)
   * [Enhanced Security Mode Level](#enhanced-security-mode-level)
* [Promotions to Phase 2 (Stable in Prerelease)](#promotions-to-phase-2-stable-in-prerelease)
* [Bug fixes](#bug-fixes)
   * [Runtime-only](#runtime-only)
   * [SDK-only](#sdk-only)
* [See also](#see-also)


<!-- ====================================================================== -->
## Experimental APIs (Phase 1: Experimental in Prerelease)

The following APIs are in Phase 1: Experimental in Prerelease, and have been added in this Prerelease SDK.


<!-- ------------------------------ -->
#### Enhanced Security Mode Level

The Enhanced Security Mode Level API enables configuring Enhanced Security Mode (ESM) for WebView2 instances.  ESM reduces the risk of memory-related vulnerabilities by disabling JavaScript Just-in-Time (JIT) compilation and enabling additional operating system protections.

To control the ESM level for all WebView2 instances that share the same profile, use the `EnhancedSecurityModeLevel` property on `CoreWebView2Profile` (or `ICoreWebView2ExperimentalProfile9`):

* Use the `Off` value to completely disable Enhanced Security Mode (default behavior).

* Use the `Strict` value to enable enhanced security for all sites.  This disables JIT compilation and applies additional OS-level protections, improving security but potentially reducing JavaScript performance.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2EnhancedSecurityModeLevel Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2enhancedsecuritymodelevel?view=webview2-dotnet-1.0.3796-prerelease&preserve-view=true)
   * `CoreWebView2EnhancedSecurityModeLevel.Off`
   * `CoreWebView2EnhancedSecurityModeLevel.Strict`

* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.EnhancedSecurityModeLevel Property](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.enhancedsecuritymodelevel?view=webview2-dotnet-1.0.3796-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2EnhancedSecurityModeLevel Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2enhancedsecuritymodelevel?view=webview2-winrt-1.0.3796-prerelease&preserve-view=true)
   * `CoreWebView2EnhancedSecurityModeLevel.Off`
   * `CoreWebView2EnhancedSecurityModeLevel.Strict`

* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.EnhancedSecurityModeLevel Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.3796-prerelease&preserve-view=true#enhancedsecuritymodelevel)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalProfile9](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile9?view=webview2-1.0.3796-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalProfile9::get_EnhancedSecurityModeLevel](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile9?view=webview2-1.0.3796-prerelease&preserve-view=true#get_enhancedsecuritymodelevel)
   * [ICoreWebView2ExperimentalProfile9::put_EnhancedSecurityModeLevel](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile9?view=webview2-1.0.3796-prerelease&preserve-view=true#put_enhancedsecuritymodelevel)

* [COREWEBVIEW2_ENHANCED_SECURITY_MODE_LEVEL enum](/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.3796-prerelease&preserve-view=true#corewebview2_enhanced_security_mode_level)
   * `COREWEBVIEW2_ENHANCED_SECURITY_MODE_LEVEL_OFF`
   * `COREWEBVIEW2_ENHANCED_SECURITY_MODE_LEVEL_STRICT`

---


<!-- ====================================================================== -->
## Promotions to Phase 2 (Stable in Prerelease)

No APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, in this Prerelease SDK.


<!-- ====================================================================== -->
## Bug fixes

This Prerelease SDK includes the following bug fixes.


<!-- ------------------------------ -->
#### Runtime-only

* Fixed `chrome.webview` unavailability.
* Disabled background update of network time.


<!-- ------------------------------ -->
#### SDK-only

* Added the article [Performance best practices for WebView2 apps](../concepts/performance.md), about how to improve the startup speed, memory usage, and responsiveness of a WebView2 app.


<!-- ====================================================================== -->
## See also

* [Release notes for the WebView2 SDK](./index.md)
