---
title: Prerelease SDK 1.0.4312-prerelease, for Runtime 156 (Oct. 12, 2026)
description: Release notes for Microsoft Edge WebView2 SDK 1-0-4312-prerelease.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 10/12/2026
---
# Prerelease SDK 1.0.4312-prerelease, for Runtime 156 (Oct. 12, 2026)

Release notes for Microsoft Edge WebView2 Prerelease SDK, release date: Oct. 12, 2026.

[NuGet package for WebView2 SDK 1.0.4312-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.4312-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 156.0.4312.0 or later; see [Runtime 156.0.4314.42 (Oct. 23, 2026)](../runtime/156.md).


<!-- ====================================================================== -->
## Promotions to Phase 2 (Stable in Prerelease)

The following APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, and are included in this Prerelease SDK.


<!-- ------------------------------ -->
#### Crash Report in ProcessFailed event

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

Previous phase: [Crash Report in ProcessFailed event](./1-0-4126-prerelease.md#crash-report-in-processfailed-event) in _Prerelease SDK 1.0.4126-prerelease, for Runtime 151 (Jul. 7, 2026)_.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2CrashReport Class](/dotnet/api/microsoft.web.webview2.core.corewebview2crashreport?view=webview2-dotnet-1.0.4312-prerelease&preserve-view=true)
   * [CoreWebView2CrashReport.BucketId Property](/dotnet/api/microsoft.web.webview2.core.corewebview2crashreport.bucketid?view=webview2-dotnet-1.0.4312-prerelease&preserve-view=true)
   * [CoreWebView2CrashReport.CrashReportId Property](/dotnet/api/microsoft.web.webview2.core.corewebview2crashreport.crashreportid?view=webview2-dotnet-1.0.4312-prerelease&preserve-view=true)
   * [CoreWebView2CrashReport.ExceptionCode Property](/dotnet/api/microsoft.web.webview2.core.corewebview2crashreport.exceptioncode?view=webview2-dotnet-1.0.4312-prerelease&preserve-view=true)
   * [CoreWebView2CrashReport.FaultingModuleName Property](/dotnet/api/microsoft.web.webview2.core.corewebview2crashreport.faultingmodulename?view=webview2-dotnet-1.0.4312-prerelease&preserve-view=true)
   * [CoreWebView2CrashReport.FaultingModuleVersion Property](/dotnet/api/microsoft.web.webview2.core.corewebview2crashreport.faultingmoduleversion?view=webview2-dotnet-1.0.4312-prerelease&preserve-view=true)
   * [CoreWebView2CrashReport.FaultOffset Property](/dotnet/api/microsoft.web.webview2.core.corewebview2crashreport.faultoffset?view=webview2-dotnet-1.0.4312-prerelease&preserve-view=true)
   * [CoreWebView2CrashReport.ReportTime Property](/dotnet/api/microsoft.web.webview2.core.corewebview2crashreport.reporttime?view=webview2-dotnet-1.0.4312-prerelease&preserve-view=true)

* `CoreWebView2ProcessFailedEventArgs` Class:
   * [CoreWebView2ProcessFailedEventArgs.CrashReport Property](/dotnet/api/microsoft.web.webview2.core.corewebview2processfailedeventargs.crashreport?view=webview2-dotnet-1.0.4312-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2CrashReport Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2crashreport?view=webview2-winrt-1.0.4312-prerelease&preserve-view=true)
   * [CoreWebView2CrashReport.BucketId Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2crashreport?view=webview2-winrt-1.0.4312-prerelease&preserve-view=true#bucketid)
   * [CoreWebView2CrashReport.CrashReportId Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2crashreport?view=webview2-winrt-1.0.4312-prerelease&preserve-view=true#crashreportid)
   * [CoreWebView2CrashReport.ExceptionCode Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2crashreport?view=webview2-winrt-1.0.4312-prerelease&preserve-view=true#exceptioncode)
   * [CoreWebView2CrashReport.FaultingModuleName Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2crashreport?view=webview2-winrt-1.0.4312-prerelease&preserve-view=true#faultingmodulename)
   * [CoreWebView2CrashReport.FaultingModuleVersion Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2crashreport?view=webview2-winrt-1.0.4312-prerelease&preserve-view=true#faultingmoduleversion)
   * [CoreWebView2CrashReport.FaultOffset Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2crashreport?view=webview2-winrt-1.0.4312-prerelease&preserve-view=true#faultoffset)
   * [CoreWebView2CrashReport.ReportTime Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2crashreport?view=webview2-winrt-1.0.4312-prerelease&preserve-view=true#reporttime)

* `CoreWebView2ProcessFailedEventArgs` Class:
   * [CoreWebView2ProcessFailedEventArgs.CrashReport Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2processfailedeventargs?view=webview2-winrt-1.0.4312-prerelease&preserve-view=true#crashreport)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2CrashReport](/microsoft-edge/webview2/reference/win32/icorewebview2crashreport?view=webview2-1.0.4312-prerelease&preserve-view=true)
  * [ICoreWebView2CrashReport::get_BucketId](/microsoft-edge/webview2/reference/win32/icorewebview2crashreport?view=webview2-1.0.4312-prerelease&preserve-view=true#get_bucketid)
  * [ICoreWebView2CrashReport::get_CrashReportId](/microsoft-edge/webview2/reference/win32/icorewebview2crashreport?view=webview2-1.0.4312-prerelease&preserve-view=true#get_crashreportid)
  * [ICoreWebView2CrashReport::get_ExceptionCode](/microsoft-edge/webview2/reference/win32/icorewebview2crashreport?view=webview2-1.0.4312-prerelease&preserve-view=true#get_exceptioncode)
  * [ICoreWebView2CrashReport::get_FaultingModuleName](/microsoft-edge/webview2/reference/win32/icorewebview2crashreport?view=webview2-1.0.4312-prerelease&preserve-view=true#get_faultingmodulename)
  * [ICoreWebView2CrashReport::get_FaultingModuleVersion](/microsoft-edge/webview2/reference/win32/icorewebview2crashreport?view=webview2-1.0.4312-prerelease&preserve-view=true#get_faultingmoduleversion)
  * [ICoreWebView2CrashReport::get_FaultOffset](/microsoft-edge/webview2/reference/win32/icorewebview2crashreport?view=webview2-1.0.4312-prerelease&preserve-view=true#get_faultoffset)
  * [ICoreWebView2CrashReport::get_ReportTime](/microsoft-edge/webview2/reference/win32/icorewebview2crashreport?view=webview2-1.0.4312-prerelease&preserve-view=true#get_reporttime)

* [ICoreWebView2ProcessFailedEventArgs4](/microsoft-edge/webview2/reference/win32/icorewebview2processfailedeventargs4?view=webview2-1.0.4312-prerelease&preserve-view=true)
  * [ICoreWebView2ProcessFailedEventArgs4::get_CrashReport](/microsoft-edge/webview2/reference/win32/icorewebview2processfailedeventargs4?view=webview2-1.0.4312-prerelease&preserve-view=true#get_crashreport)

---


<!-- ====================================================================== -->
## See also

* [Runtime 156.0.4314.42 (Oct. 23, 2026)](../runtime/156.md)
* [Release notes for WebView2](../index.md)
   * [Release notes for the WebView2 Runtime](../runtime/index.md)
   * [Release notes for WebView2 SDKs](./index.md)
