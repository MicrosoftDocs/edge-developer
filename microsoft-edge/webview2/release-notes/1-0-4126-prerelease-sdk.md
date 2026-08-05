---
title: Prerelease SDK 1.0.4126-prerelease, for Runtime 151 - SDK (Jul. 7, 2026)
description: Release notes for Microsoft Edge WebView2, Prerelease SDK 1.0.4126-prerelease - SDK.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 07/07/2026
---
# Prerelease SDK 1.0.4126-prerelease, for Runtime 151 - SDK (Jul. 7, 2026)

Release Date: Jul. 7, 2026

[NuGet package for WebView2 SDK 1.0.4126-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.4126-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 151.0.4126.0 or higher.

**Detailed contents:**
* [Experimental APIs (Phase 1: Experimental in Prerelease)](#experimental-apis-phase-1-experimental-in-prerelease)
   * [Crash Report in ProcessFailed event](#crash-report-in-processfailed-event)
   * [Configure per-origin reputation checking (SmartScreen) settings](#configure-per-origin-reputation-checking-smartscreen-settings)
* [See also](#see-also)


<!-- ====================================================================== -->
## Experimental APIs (Phase 1: Experimental in Prerelease)

The following APIs are in Phase 1: Experimental in Prerelease, and have been added in this Prerelease SDK.


<!-- ------------------------------ -->
#### Crash Report in `ProcessFailed` event

The CrashReport API provides crash diagnostic data when a WebView2 process fails with a crash.  When a `ProcessFailed` event is raised, the host application can access the `CrashReport` property on the `ProcessFailedEventArgs` to retrieve crash signature details, including:
* The exception code.
* The faulting module name and version.
* The fault offset.
* The crash report ID.
* The bucket ID.
* The time the crash was reported.

`ProcessFailedEventArgs.CrashReport` is `null` when the failure didn't produce a crash report, such as in these scenarios:
* A normal exit.
* An external kill of the process.
* A launch failure.
* A hang.

`ProcessFailedEventArgs.CrashReport` may also be `null` for certain crash-type failures where no report was produced.  Host apps should always check for `null` before accessing properties.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2CrashReport Class](/dotnet/api/microsoft.web.webview2.core.corewebview2crashreport?view=webview2-dotnet-1.0.4126-prerelease&preserve-view=true)
   * [CoreWebView2CrashReport.BucketId Property](/dotnet/api/microsoft.web.webview2.core.corewebview2crashreport.bucketid?view=webview2-dotnet-1.0.4126-prerelease&preserve-view=true)
   * [CoreWebView2CrashReport.CrashReportId Property](/dotnet/api/microsoft.web.webview2.core.corewebview2crashreport.crashreportid?view=webview2-dotnet-1.0.4126-prerelease&preserve-view=true)
   * [CoreWebView2CrashReport.ExceptionCode Property](/dotnet/api/microsoft.web.webview2.core.corewebview2crashreport.exceptioncode?view=webview2-dotnet-1.0.4126-prerelease&preserve-view=true)
   * [CoreWebView2CrashReport.FaultingModuleName Property](/dotnet/api/microsoft.web.webview2.core.corewebview2crashreport.faultingmodulename?view=webview2-dotnet-1.0.4126-prerelease&preserve-view=true)
   * [CoreWebView2CrashReport.FaultingModuleVersion Property](/dotnet/api/microsoft.web.webview2.core.corewebview2crashreport.faultingmoduleversion?view=webview2-dotnet-1.0.4126-prerelease&preserve-view=true)
   * [CoreWebView2CrashReport.FaultOffset Property](/dotnet/api/microsoft.web.webview2.core.corewebview2crashreport.faultoffset?view=webview2-dotnet-1.0.4126-prerelease&preserve-view=true)
   * [CoreWebView2CrashReport.ReportTime Property](/dotnet/api/microsoft.web.webview2.core.corewebview2crashreport.reporttime?view=webview2-dotnet-1.0.4126-prerelease&preserve-view=true)

* `CoreWebView2ProcessFailedEventArgs` Class:
   * [CoreWebView2ProcessFailedEventArgs.CrashReport Property](/dotnet/api/microsoft.web.webview2.core.corewebview2processfailedeventargs.crashreport?view=webview2-dotnet-1.0.4126-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2CrashReport Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2crashreport?view=webview2-winrt-1.0.4126-prerelease&preserve-view=true)
   * [CoreWebView2CrashReport.BucketId Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2crashreport?view=webview2-winrt-1.0.4126-prerelease&preserve-view=true#bucketid)
   * [CoreWebView2CrashReport.CrashReportId Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2crashreport?view=webview2-winrt-1.0.4126-prerelease&preserve-view=true#crashreportid)
   * [CoreWebView2CrashReport.ExceptionCode Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2crashreport?view=webview2-winrt-1.0.4126-prerelease&preserve-view=true#exceptioncode)
   * [CoreWebView2CrashReport.FaultingModuleName Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2crashreport?view=webview2-winrt-1.0.4126-prerelease&preserve-view=true#faultingmodulename)
   * [CoreWebView2CrashReport.FaultingModuleVersion Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2crashreport?view=webview2-winrt-1.0.4126-prerelease&preserve-view=true#faultingmoduleversion)
   * [CoreWebView2CrashReport.FaultOffset Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2crashreport?view=webview2-winrt-1.0.4126-prerelease&preserve-view=true#faultoffset)
   * [CoreWebView2CrashReport.ReportTime Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2crashreport?view=webview2-winrt-1.0.4126-prerelease&preserve-view=true#reporttime)

* `CoreWebView2ProcessFailedEventArgs` Class:
   * [CoreWebView2ProcessFailedEventArgs.CrashReport Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2processfailedeventargs?view=webview2-winrt-1.0.4126-prerelease&preserve-view=true#crashreport)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalCrashReport](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcrashreport?view=webview2-1.0.4126-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalCrashReport::get_BucketId](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcrashreport?view=webview2-1.0.4126-prerelease&preserve-view=true#get_bucketid)
   * [ICoreWebView2ExperimentalCrashReport::get_CrashReportId](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcrashreport?view=webview2-1.0.4126-prerelease&preserve-view=true#get_crashreportid)
   * [ICoreWebView2ExperimentalCrashReport::get_ExceptionCode](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcrashreport?view=webview2-1.0.4126-prerelease&preserve-view=true#get_exceptioncode)
   * [ICoreWebView2ExperimentalCrashReport::get_FaultingModuleName](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcrashreport?view=webview2-1.0.4126-prerelease&preserve-view=true#get_faultingmodulename)
   * [ICoreWebView2ExperimentalCrashReport::get_FaultingModuleVersion](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcrashreport?view=webview2-1.0.4126-prerelease&preserve-view=true#get_faultingmoduleversion)
   * [ICoreWebView2ExperimentalCrashReport::get_FaultOffset](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcrashreport?view=webview2-1.0.4126-prerelease&preserve-view=true#get_faultoffset)
   * [ICoreWebView2ExperimentalCrashReport::get_ReportTime](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcrashreport?view=webview2-1.0.4126-prerelease&preserve-view=true#get_reporttime)

* [ICoreWebView2ExperimentalProcessFailedEventArgs2](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprocessfailedeventargs2?view=webview2-1.0.4126-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalProcessFailedEventArgs2::get_CrashReport](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprocessfailedeventargs2?view=webview2-1.0.4126-prerelease&preserve-view=true#get_crashreport)

---


<!-- ------------------------------ -->
#### Configure per-origin reputation checking (SmartScreen) settings

The `ReputationChecking` feature allows a WebView2 app to skip SmartScreen reputation checks for navigations and downloads from specific trusted origins.  `ReputationChecking` is a member of the `CoreWebView2OriginFeature` enum.

When this feature is set to `CoreWebView2OriginFeatureState.Disabled` for an origin, phishing and malware reputation checks are bypassed for that origin.  If this feature isn't configured for an origin, the `CoreWebView2Settings.IsReputationCheckingRequired` setting, which is global, applies; the preference at the browser-process level is applied for all the processes utilizing it.

If `CoreWebView2Settings.IsReputationCheckingRequired` is set to `false`, setting `CoreWebView2OriginFeatureState.Enabled` for an origin doesn't re-enable reputation checks for that origin; `CoreWebView2Settings.IsReputationCheckingRequired` takes precedence.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2OriginFeature` Enum:
   * [ReputationChecking](/dotnet/api/microsoft.web.webview2.core.corewebview2originfeature?view=webview2-dotnet-1.0.4126-prerelease&preserve-view=true)

* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.SetOriginFeatures Method](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.setoriginfeatures?view=webview2-dotnet-1.0.4126-prerelease&preserve-view=true)

Older supporting APIs:

* [CoreWebView2OriginFeatureState Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2originfeaturestate)
   * `Enabled`
   * `Disabled`

* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.IsReputationCheckingRequired Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.isreputationcheckingrequired)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2OriginFeature` Enum:
   * [ReputationChecking](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2originfeature?view=webview2-winrt-1.0.4126-prerelease&preserve-view=true)

* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.SetOriginFeatures Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.4126-prerelease&preserve-view=true#setoriginfeatures)

Older supporting APIs:

* [CoreWebView2OriginFeatureState Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2originfeaturestate)
   * `Enabled`
   * `Disabled`

* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.IsReputationCheckingRequired Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings#isreputationcheckingrequired)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2ExperimentalProfile16`:
   * [ICoreWebView2ExperimentalProfile16::SetOriginFeatures](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile16?view=webview2-1.0.4126-prerelease&preserve-view=true#setoriginfeatures)

* `COREWEBVIEW2_ORIGIN_FEATURE` enum:
   * [COREWEBVIEW2_ORIGIN_FEATURE_REPUTATION_CHECKING](/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.4126-prerelease&preserve-view=true#corewebview2_origin_feature)

Older supporting APIs:

* `ICoreWebView2Settings8`:
   * [ICoreWebView2Settings8::get_IsReputationCheckingRequired](/microsoft-edge/webview2/reference/win32/icorewebview2settings8#get_isreputationcheckingrequired)
   * [ICoreWebView2Settings8::put_IsReputationCheckingRequired](/microsoft-edge/webview2/reference/win32/icorewebview2settings8#put_isreputationcheckingrequired)

* [COREWEBVIEW2_ORIGIN_FEATURE_STATE enum](/microsoft-edge/webview2/reference/win32/webview2experimental-idl#corewebview2_origin_feature_state)
   * `COREWEBVIEW2_ORIGIN_FEATURE_STATE_ENABLED`
   * `COREWEBVIEW2_ORIGIN_FEATURE_STATE_DISABLED`

---


<!-- ====================================================================== -->
## See also

* [Release notes for the WebView2 SDK](./index.md)
