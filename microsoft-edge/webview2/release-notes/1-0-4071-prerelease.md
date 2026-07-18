---
title: Prerelease SDK 1.0.4071-prerelease, for Runtime 150 (Jun. 11, 2026)
description: Release notes for Microsoft Edge WebView2, for Prerelease SDK 1.0.4071-prerelease.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 06/11/2026
---
# Prerelease SDK 1.0.4071-prerelease, for Runtime 150 (Jun. 11, 2026)

Release Date: Jun. 11, 2026

[NuGet package for WebView2 SDK 1.0.4071-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.4071-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 150.0.4071.0 or later.


<!-- ====================================================================== -->
## Breaking changes


<!-- ------------------------------ -->
#### Enable Windows shell handwriting support for WebView2 in WindowToVisual mode

WebView2 is introducing support for Windows shell handwriting (pen handwriting-to-text) for edit fields inside WebView2 instances that are hosted in Window to Visual (`WindowToVisual`) mode on Windows.

This change affects only `WindowToVisual` hosting mode.  `WindowToWindow` hosting mode already supports Windows shell handwriting, and `VisualToVisual` hosting mode isn't supported by this change.

Before this change: WebView2 in `WindowToVisual` mode doesn't register an `ITfHandwritingSink` on the Text Services Framework (TSF) thread.  Windows shell handwriting can still work, but handwriting target determination uses the OS UI Automation (UIA)-based path.

After this change: If the `msAbydosForWindowlessWV2` feature flag is disabled, the behavior remains the same as before this change, including the UIA-based handwriting target determination path.

If the `msAbydosForWindowlessWV2` feature flag is enabled, WebView2 in `WindowToVisual` mode registers a per-instance `ITfHandwritingSink` on the TSF thread.  This enables Windows shell handwriting for edit fields inside WebView2, and changes how TSF handwriting events are routed on the shared TSF thread.

If your app already registers its own `ITfHandwritingSink` on its TSF thread, pen handwriting will continue to work for your app's native edit fields, and pen handwriting will also work inside WebView2 edit fields.

If your app doesn't register its own `ITfHandwritingSink`, pen handwriting may stop working for your app's native edit fields after this change is enabled by default.  This occurs because WebView2 returns `E_NOTIMPL` for HWNDs that it doesn't own, expecting TSF to chain to another registered sink.  If no host sink is registered, TSF doesn't fall back to the default UIA-based handwriting target resolution.

To preserve pen handwriting support for your app's native edit fields, register your own `ITfHandwritingSink` on the TSF thread.  Pen handwriting inside WebView2 edit fields is enabled automatically by this change.

You can proactively validate your WebView2 app's behavior by enabling the following feature flag before launching your app:

```cmd
set WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS=--enable-features=msAbydosForWindowlessWV2
```

In releases 149 and 150, the `msAbydosForWindowlessWV2` feature flag is disabled by default, giving apps time to proactively test.  Starting in release 151, the feature is planned to be enabled by default.

By testing your WebView2 app with this feature flag enabled, you can identify whether any native edit-field handwriting workflows in your app depend on registering a host `ITfHandwritingSink`.

See also:
* [[Breaking Change] Enabling Windows ShellHandwriting Support for WebView2 in WindowToVisual Mode (Issue #134)](https://github.com/MicrosoftEdge/WebView2Announcements/issues/134)
* [Windowed vs. Visual hosting of WebView2](../concepts/windowed-vs-visual-hosting.md)
* [WebView2 browser flags](../concepts/webview-features-flags.md) - the `msAbydosForWindowlessWV2` feature flag.


<!-- ====================================================================== -->
## General changes


<!-- ------------------------------ -->
#### Deprecation of DevToolsProtocolExtension NuGet package

[NuGet package for DevToolsProtocolExtension 1.0.2901](https://www.nuget.org/packages/Microsoft.Web.WebView2.DevToolsProtocolExtension)

The `Microsoft.Web.WebView2.DevToolsProtocolExtension` NuGet package is being deprecated, and no further versions of this package will be published.  This deprecation is not linked to any WebView2 Release SDK or Prerelease SDK.

The DevToolsProtocolExtension package provides a strongly-typed .NET wrapper over the Chrome DevTools Protocol (CDP) for use in WebView2 apps.  The existing published versions (`1.0.824`, `1.0.2271`, and `1.0.2901`) remain available on NuGet Gallery and are not being removed.

See also:
* [[Deprecation] Microsoft.Web.WebView2.DevToolsProtocolExtension NuGet package](https://github.com/MicrosoftEdge/WebView2Announcements/issues/135)

**Recommended alternative:**

All CDP calls can be made directly via the WebView2 CDP APIs, without using the extension package.  See [Use the Chrome DevTools Protocol (CDP) in WebView2 apps](../how-to/chromium-devtools-protocol.md) and the following:

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
## Experimental APIs (Phase 1: Experimental in Prerelease)

No Experimental APIs have been added in this Prerelease SDK.


<!-- ====================================================================== -->
## Promotions to Phase 2 (Stable in Prerelease)

No APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, in this Prerelease SDK.


<!-- ====================================================================== -->
## Bug fixes

This Prerelease SDK includes the following bug fixes.


<!-- ------------------------------ -->
#### Runtime and SDK

* Added total-count histograms for WebView2 environment and controller creation attempts.


<!-- ------------------------------ -->
#### Runtime-only

* Mapped `TERMINATION_STATUS_LAUNCH_FAILED_OS_POLICY` to `kLaunchFailed`.
* Updated the failure reason classification to `OOM`, for a process that's been killed to reclaim memory.
* Added a system memory snapshot at out-of-memory (OOM) detection time for analysis.
* Fixed the silent closing of a popup, when the host expects the popup to remain open.
* Added trusted origin check during host object access.
* Reduced redundant map lookups in WebView2 URL request manager, for improved performance.
* Eliminated unnecessary string allocations in WebView2 cookie layer, for improved performance.


<!-- ------------------------------ -->
#### SDK-only

* Fixed container safety issues in WebView2 frame and listener code.
* WinRT event subscription now keeps the projection wrapper alive until the handler is unsubscribed.
