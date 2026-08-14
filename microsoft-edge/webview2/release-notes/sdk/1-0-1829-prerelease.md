---
title: Prerelease SDK 1.0.1829-prerelease, for Runtime 115 (May 8, 2023)
description: Release notes for Microsoft Edge WebView2, for Prerelease SDK 1.0.1829-prerelease.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 06/11/2026
---
# Prerelease SDK 1.0.1829-prerelease, for Runtime 115 (May 8, 2023)

Release Date: May 8, 2023

[NuGet package for WebView2 SDK 1.0.1829-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1829-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 115.0.1829.0 or later.

**Detailed contents:**
* [Promotions to Phase 2 (Stable in Prerelease)](#promotions-to-phase-2-stable-in-prerelease)
   * [Enhanced support for multiple profiles: Configure General Autofill and Password Autosave](#enhanced-support-for-multiple-profiles-configure-general-autofill-and-password-autosave)
* [Bug fixes](#bug-fixes)
* [See also](#see-also)


<!-- ====================================================================== -->
## Promotions to Phase 2 (Stable in Prerelease)

The following APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, and are included in this Prerelease SDK.


<!-- ------------------------------ -->
#### Enhanced support for multiple profiles: Configure General Autofill and Password Autosave

Enhanced support for multiple profiles, to allow configuring General Autofill and Password Autosave settings for different profiles.

The previous phase isn't in the release notes.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.IsGeneralAutofillEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.isgeneralautofillenabled?view=webview2-dotnet-1.0.1829-prerelease&preserve-view=true)
   * [CoreWebView2Profile.IsPasswordAutosaveEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.ispasswordautosaveenabled?view=webview2-dotnet-1.0.1829-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.IsGeneralAutofillEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1829-prerelease&preserve-view=true#isgeneralautofillenabled)
   * [CoreWebView2Profile.IsPasswordAutosaveEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1829-prerelease&preserve-view=true#ispasswordautosaveenabled)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2Profile6` interface:
   * [ICoreWebView2Profile6::get_IsPasswordAutosaveEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2profile6?view=webview2-1.0.1829-prerelease&preserve-view=true#get_ispasswordautosaveenabled)
   * [ICoreWebView2Profile6::put_IsPasswordAutosaveEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2profile6?view=webview2-1.0.1829-prerelease&preserve-view=true#put_ispasswordautosaveenabled)
   * [ICoreWebView2Profile6::get_IsGeneralAutofillEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2profile6?view=webview2-1.0.1829-prerelease&preserve-view=true#get_isgeneralautofillenabled)
   * [ICoreWebView2Profile6::put_IsGeneralAutofillEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2profile6?view=webview2-1.0.1829-prerelease&preserve-view=true#put_isgeneralautofillenabled)

---


<!-- ====================================================================== -->
## Bug fixes

<!-- assume items for both runtime & sdk: -->

* Disabled the Chrome Web Store info banner that displays the option to allow extensions installation. ([Issue #3312](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3312))

* Fixed an issue where a custom menu item wasn't firing. ([Issue #3300](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3300))

* Fixed a crash during initialization when creating a WebView2 using WPF and SDK version 1.0.1722.32, which is now deprecated (see [SDK 1.0.1722.32 is deprecated](./1-0-1722-45.md#sdk-10172232-is-deprecated) in _Release SDK 1.0.1722.45, for Runtime 112 (Apr. 13, 2023)_).  ([Issue #3375](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3375))

* Fixed an issue with visual hosted owned windows, where clicking into the Find bar from outside the window didn't activate the Find bar.

<!-- end both -->


<!-- ====================================================================== -->
## See also

* [Runtime 115.0.1901.177 (Jul. 24, 2023)](../runtime/115.md)
* [Release notes for WebView2](../index.md)
   * [Release notes for the WebView2 Runtime](../runtime/index.md)
   * [Release notes for WebView2 SDKs](./index.md)
