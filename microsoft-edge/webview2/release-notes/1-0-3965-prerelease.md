---
title: Prerelease SDK 1.0.3965-prerelease, for Runtime 148 (Apr. 13, 2026)
description: Release notes for Microsoft Edge WebView2, for Prerelease SDK 1.0.3965-prerelease.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 06/11/2026
---
# Prerelease SDK 1.0.3965-prerelease, for Runtime 148 (Apr. 13, 2026)

Release Date: April 13, 2026

[NuGet package for WebView2 SDK 1.0.3965-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3965-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 148.0.3965.0 or later.


<!-- ====================================================================== -->
## Breaking changes


<!-- ------------------------------ -->
#### Granular process failure reasons for the `ProcessFailed` event

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
## Experimental APIs (Phase 1: Experimental in Prerelease)

The following APIs are in Phase 1: Experimental in Prerelease, and have been added in this Prerelease SDK.


<!-- ------------------------------ -->
#### Origin Configuration API for WebView2

The Origin Configuration API enables WebView2 apps to apply different feature and security policies based on the origin of hosted content.  By default, WebView2 enforces a uniform policy across all origins.  This API allows apps to selectively enable or disable specific features (such as Enhanced Security Mode) for individual origins or origin patterns.

Use the `SetOriginFeatures` method on `CoreWebView2Profile` to configure feature settings for one or more origins.  Origins can be specified as exact strings (such as `https://contoso.com`) or wildcard patterns (such as `https://[*.]contoso.com`) to match subdomains, protocols, or ports.

When multiple configurations apply to the same origin, the most specific pattern takes precedence, evaluated by hostname, then scheme, then port.

Use `GetEffectiveFeaturesForOrigin` to asynchronously retrieve the computed feature settings for a given origin.

##### [.NET/C#](#tab/dotnetcsharp)

<!-- 3 -->
* [CoreWebView2OriginFeature Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2originfeature?view=webview2-dotnet-1.0.3965-prerelease&preserve-view=true)
   * `EnhancedSecurityMode`

<!-- 1 -->
* [CoreWebView2OriginFeatureSetting Class](/dotnet/api/microsoft.web.webview2.core.corewebview2originfeaturesetting?view=webview2-dotnet-1.0.3965-prerelease&preserve-view=true)
   * [CoreWebView2OriginFeatureSetting.Feature Property](/dotnet/api/microsoft.web.webview2.core.corewebview2originfeaturesetting.feature?view=webview2-dotnet-1.0.3965-prerelease&preserve-view=true)
   * [CoreWebView2OriginFeatureSetting.State Property](/dotnet/api/microsoft.web.webview2.core.corewebview2originfeaturesetting.state?view=webview2-dotnet-1.0.3965-prerelease&preserve-view=true)

<!-- 4 -->
* [CoreWebView2OriginFeatureState Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2originfeaturestate?view=webview2-dotnet-1.0.3965-prerelease&preserve-view=true)
   * `Disabled`
   * `Enabled`

<!-- 2 -->
* `CoreWebView2Profile Class`
   * [CoreWebView2Profile.GetEffectiveFeaturesForOriginAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.geteffectivefeaturesfororiginasync?view=webview2-dotnet-1.0.3965-prerelease&preserve-view=true)
   * [CoreWebView2Profile.SetOriginFeatures Method](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.setoriginfeatures?view=webview2-dotnet-1.0.3965-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

<!-- 3 -->
* [CoreWebView2OriginFeature Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2originfeature?view=webview2-winrt-1.0.3965-prerelease&preserve-view=true)
   * `EnhancedSecurityMode`

<!-- 1 -->
* [CoreWebView2OriginFeatureSetting Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2originfeaturesetting?view=webview2-winrt-1.0.3965-prerelease&preserve-view=true)
   * [CoreWebView2OriginFeatureSetting.Feature Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2originfeaturesetting?view=webview2-winrt-1.0.3965-prerelease&preserve-view=true#feature)
   * [CoreWebView2OriginFeatureSetting.State Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2originfeaturesetting?view=webview2-winrt-1.0.3965-prerelease&preserve-view=true#state)

<!-- 4 -->
* [CoreWebView2OriginFeatureState Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2originfeaturestate?view=webview2-winrt-1.0.3965-prerelease&preserve-view=true)
   * `Disabled`
   * `Enabled`

<!-- 2 -->
* `CoreWebView2Profile Class`
   * [CoreWebView2Profile.GetEffectiveFeaturesForOriginAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.3965-prerelease&preserve-view=true#geteffectivefeaturesfororiginasync)
   * [CoreWebView2Profile.SetOriginFeatures Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.3965-prerelease&preserve-view=true#setoriginfeatures)

##### [Win32/C++](#tab/win32cpp)

<!-- win32 only: -->
* [ICoreWebView2ExperimentalGetEffectiveFeaturesForOriginCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalgeteffectivefeaturesfororigincompletedhandler?view=webview2-1.0.3965-prerelease&preserve-view=true)

<!-- 1 -->
* [ICoreWebView2ExperimentalOriginFeatureSetting](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaloriginfeaturesetting?view=webview2-1.0.3965-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalOriginFeatureSetting::get_Feature](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaloriginfeaturesetting?view=webview2-1.0.3965-prerelease&preserve-view=true#get_feature)
   * [ICoreWebView2ExperimentalOriginFeatureSetting::get_State](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaloriginfeaturesetting?view=webview2-1.0.3965-prerelease&preserve-view=true#get_state)

<!-- win32 only: -->
* [ICoreWebView2ExperimentalOriginFeatureSettingCollectionView](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaloriginfeaturesettingcollectionview?view=webview2-1.0.3965-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalOriginFeatureSettingCollectionView::get_Count](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaloriginfeaturesettingcollectionview?view=webview2-1.0.3965-prerelease&preserve-view=true#get_count)
   * [ICoreWebView2ExperimentalOriginFeatureSettingCollectionView::GetValueAtIndex](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaloriginfeaturesettingcollectionview?view=webview2-1.0.3965-prerelease&preserve-view=true#getvalueatindex)

<!-- 2 -->
* [ICoreWebView2ExperimentalProfile16](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile16?view=webview2-1.0.3965-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalProfile16::CreateOriginFeatureSetting](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile16?view=webview2-1.0.3965-prerelease&preserve-view=true#createoriginfeaturesetting)<!-- win32 only -->
   * [ICoreWebView2ExperimentalProfile16::GetEffectiveFeaturesForOrigin](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile16?view=webview2-1.0.3965-prerelease&preserve-view=true#geteffectivefeaturesfororigin)
   * [ICoreWebView2ExperimentalProfile16::SetOriginFeatures](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile16?view=webview2-1.0.3965-prerelease&preserve-view=true#setoriginfeatures)

<!-- 3 -->
* [COREWEBVIEW2_ORIGIN_FEATURE enum](/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.3965-prerelease&preserve-view=true#corewebview2_origin_feature)
   * `COREWEBVIEW2_ORIGIN_FEATURE_ENHANCED_SECURITY_MODE`

<!-- 4 -->
* [COREWEBVIEW2_ORIGIN_FEATURE_STATE enum](/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.3965-prerelease&preserve-view=true#corewebview2_origin_feature_state)
   * `COREWEBVIEW2_ORIGIN_FEATURE_STATE_DISABLED`
   * `COREWEBVIEW2_ORIGIN_FEATURE_STATE_ENABLED`

---


<!-- ====================================================================== -->
## Phase 2 (Stable in Prerelease)

The following enum members are a modification of an existing stable API, and are available as part of this Prerelease SDK.


<!-- ------------------------------ -->
#### Granular process failure reasons for the `ProcessFailed` event

Supplemented the `CoreWebView2ProcessFailedReason.Unexpected` enum member by adding more granular values, for the `CoreWebView2ProcessFailedReason` enum that's returned by the `CoreWebView2ProcessFailedEventArgs.Reason` property.

This is a breaking change; see [Granular process failure reasons for the `ProcessFailed` event](#granular-process-failure-reasons-for-the-processfailed-event), above.


<!-- ====================================================================== -->
## Bug fixes

This Prerelease SDK includes the following bug fixes.


<!-- ------------------------------ -->
#### Runtime and SDK

* Supplemented the `CoreWebView2ProcessFailedReason.Unexpected` enum member by adding more granular values, for the `CoreWebView2ProcessFailedReason` enum that's returned by the `CoreWebView2ProcessFailedEventArgs.Reason` property.  This is a breaking change.  See [Granular process failure reasons for the `ProcessFailed` event](#granular-process-failure-reasons-for-the-processfailed-event), above.


<!-- ------------------------------ -->
#### Runtime-only

* Fixed **Print** dialog dropdown selection issues in `WebView2CompositionControl`.  ([Issue #5195](https://github.com/MicrosoftEdge/WebView2Feedback/issues/5195))

* Disabled the Domain Actions component for WebView2.

* Disabled `WebUSBDetector` notification for WebView2.

* Fixed stale `ICoreWebView2Profile3::get_PreferredTrackingPreventionLevel`.

* Fixed WDP clients being unable to connect to a remote debugging server.

* Fixed an issue for the WPF sample app, where closing the window left a lingering WPF process.


<!-- ------------------------------ -->
#### SDK-only

* Enabled histogram logging for browser process crashes in WebView2.


<!-- ====================================================================== -->
## See also

* [Release notes for the WebView2 SDK](./index.md)
