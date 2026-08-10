---
title: Prerelease Runtime 150 (Jun. 11, 2026)
description: Release notes for Microsoft Edge WebView2 Prerelease Runtime 150.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 06/11/2026
---
# Prerelease Runtime 150 (Jun. 11, 2026)


<!-- ====================================================================== -->
## Breaking change: Enable Windows shell handwriting support for WebView2 in WindowToVisual mode

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
## Bug fixes

* Added total-count histograms for WebView2 environment and controller creation attempts.

* Mapped `TERMINATION_STATUS_LAUNCH_FAILED_OS_POLICY` to `kLaunchFailed`.

* Updated the failure reason classification to `OOM`, for a process that's been killed to reclaim memory.

* Added a system memory snapshot at out-of-memory (OOM) detection time for analysis.

* Fixed the silent closing of a popup, when the host expects the popup to remain open.

* Added trusted origin check during host object access.

* Reduced redundant map lookups in WebView2 URL request manager, for improved performance.

* Eliminated unnecessary string allocations in WebView2 cookie layer, for improved performance.


<!-- ====================================================================== -->
## See also

* [Release notes for the WebView2 SDK](./index.md)
