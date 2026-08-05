---
title: Prerelease SDK 1.0.3965-prerelease, for Runtime 148 - Runtime (Apr. 13, 2026)
description: Release notes for Microsoft Edge WebView2, for Prerelease SDK 1.0.3965-prerelease - Runtime.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 06/11/2026
---
# Prerelease SDK 1.0.3965-prerelease, for Runtime 148 - Runtime (Apr. 13, 2026)

Release Date: April 13, 2026


<!-- ====================================================================== -->
## Breaking change: Granular process failure reasons for the `ProcessFailed` event

The `ProcessFailed` event fires when a WebView2-associated process (such as a renderer or GPU process) exits unexpectedly, allowing apps to respond with recovery logic or diagnostics.

Before this change: The `CoreWebView2ProcessFailedEventArgs.Reason` property returned `Unexpected` for three distinct exit scenarios (normal exit, abnormal exit, and code integrity failure), making it impossible for apps to distinguish between them.

After this change: When the `msWebView2GranularProcessFailedReason` feature flag is enabled, the `CoreWebView2ProcessFailedEventArgs.Reason` property returns the following new, granular `CoreWebView2ProcessFailedReason` enum values, instead of `Unexpected`:

* `NormalExit` — The process exited normally (exit code 0).

* `AbnormalExit` — The process exited abnormally (non-zero exit code), but did not crash or get killed.

* `IntegrityFailure` — The OS terminated the process due to a code integrity failure, such as when a DLL fails Windows Code Integrity verification.

The `msWebView2GranularProcessFailedReason` feature flag is disabled by default in releases 148 and 149, giving apps two releases to proactively test.  Starting in release 150, the feature will be enabled by default, and apps will receive the granular values.  To validate your WebView2 app's behavior, enable the feature flag, as follows:

`set WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS=--enable-features=msWebView2GranularProcessFailedReason`

This is a bug fix for the Runtime and SDK.  These enum members are a modification of an existing stable API, and are available as part of this Prerelease SDK.

See also:
* [[Breaking Change] Granular process failure reasons for the ProcessFailed event (Issue #131)](https://github.com/MicrosoftEdge/WebView2Announcements/issues/131)

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2ProcessFailedEventArgs` Class
   * [CoreWebView2ProcessFailedEventArgs.Reason Property](/dotnet/api/microsoft.web.webview2.core.corewebview2processfailedeventargs.reason?view=webview2-dotnet-1.0.3965-prerelease&preserve-view=true)

* [CoreWebView2ProcessFailedReason Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2processfailedreason?view=webview2-dotnet-1.0.3965-prerelease&preserve-view=true)
   * `AbnormalExit`
   * `IntegrityFailure`
   * `NormalExit`

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2ProcessFailedEventArgs` Class
   * [CoreWebView2ProcessFailedEventArgs.Reason Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2processfailedeventargs?view=webview2-winrt-1.0.3965-prerelease&preserve-view=true#reason)

* [CoreWebView2ProcessFailedReason Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2processfailedreason?view=webview2-winrt-1.0.3965-prerelease&preserve-view=true)
   * `AbnormalExit`
   * `IntegrityFailure`
   * `NormalExit`

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2ProcessFailedEventArgs2`
   * [ICoreWebView2ProcessFailedEventArgs2::get_Reason](/microsoft-edge/webview2/reference/win32/icorewebview2processfailedeventargs2?view=webview2-1.0.3965-prerelease&preserve-view=true#get_reason)

* [COREWEBVIEW2_PROCESS_FAILED_REASON enum](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.3965-prerelease&preserve-view=true#corewebview2_process_failed_reason)
   * `COREWEBVIEW2_PROCESS_FAILED_REASON_ABNORMAL_EXIT`
   * `COREWEBVIEW2_PROCESS_FAILED_REASON_INTEGRITY_FAILURE`
   * `COREWEBVIEW2_PROCESS_FAILED_REASON_NORMAL_EXIT`

---


<!-- ====================================================================== -->
## Bug fixes

* Breaking change: Supplemented the `CoreWebView2ProcessFailedReason.Unexpected` enum member by adding more granular values, for the `CoreWebView2ProcessFailedReason` enum that's returned by the `CoreWebView2ProcessFailedEventArgs.Reason` property.  This is a breaking change.  See [Breaking change: Granular process failure reasons for the `ProcessFailed` event](#breaking-change-granular-process-failure-reasons-for-the-processfailed-event), above.

* Fixed **Print** dialog dropdown selection issues in `WebView2CompositionControl`.  ([Issue #5195](https://github.com/MicrosoftEdge/WebView2Feedback/issues/5195))

* Disabled the Domain Actions component for WebView2.

* Disabled `WebUSBDetector` notification for WebView2.

* Fixed stale `ICoreWebView2Profile3::get_PreferredTrackingPreventionLevel`.

* Fixed WDP clients being unable to connect to a remote debugging server.

* Fixed an issue for the WPF sample app, where closing the window left a lingering WPF process.


<!-- ====================================================================== -->
## See also

* [Release notes for the WebView2 SDK](./index.md)
