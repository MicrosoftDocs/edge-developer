---
title: Release notes for the WebView2 SDK
description: Release notes for Microsoft Edge WebView2, covering new features, APIs, and fixes for Win32, WPF, and WinForms.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 08/03/2026
---
# Release notes for the WebView2 SDK
<!--
https://learn.microsoft.com/microsoft-edge/webview2/release-notes/
https://aka.ms/webviewrelease
-->

<!-- maintenance:
copy from ./includes/templates.md

move sections older than 1 year from ./index.md to ./archive.md, & enter work item: update links in announcements
https://github.com/MicrosoftEdge/WebView2Announcements/issues?q=is%3Aissue%20state%3Aopen%20SDK%20Release
but keep Release 123 together with Prerelease 123, favoring index.md being longer

when change an h2 heading or move h2 sections from index.md to archive.md, enter a work item: update link in announcements
todo: update links in announcements, since the Prerelease headings & Release headings in index.md & archive.md changed; AB#62191954
-->

The following new features and bug fixes are in the WebView2 Release SDK and Prerelease SDK, for SDKs during the past year.


<!-- ====================================================================== -->
## Prerelease SDK 1.0.4181-prerelease, for Runtime 152 (Aug. 3, 2026)

Release Date: Aug. 3, 2026

[NuGet package for WebView2 SDK 1.0.4181-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.4181-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 152.0.4181.0 or higher.


<!-- ------------------------------ -->
#### Experimental APIs (Phase 1: Experimental in Prerelease)

The following APIs are in Phase 1: Experimental in Prerelease, and have been added in this Prerelease SDK.


<!-- ---------- -->
###### Diagnostic Monitor API

The `DiagnosticMonitor` API provides an observation-only logging surface that lets a host application collect detailed diagnostic signals from WebView2.  A monitor observes signals from all WebViews, profiles, and the environment through a single `DiagnosticReceived` event.

The event is for offline analysis or telemetry forwarding; it cannot be intercepted, modified, or deferred.
 
A host app creates a monitor by calling `CoreWebView2Environment.CreateDiagnosticMonitor`.  A newly created monitor is inert and delivers no events until the app opts in per category by calling `SetDiagnosticFilter` with a diagnostic category (such as `NetworkRequest`) and a JSON filter string. 

Passing `"{}"` to `SetDiagnosticFilter` receives all events in that category.  A non-empty JSON object applies field-level matching (such as for filtering network requests) to specific `errorCode` or `httpMethod` values.

Calling `SetDiagnosticFilter` again for the same category replaces the previous filter.
 
Each `DiagnosticReceived` event exposes the `Category`, `Scope`, `Timestamp`, and a `DetailsAsJson` payload whose schema is defined per category with a set of guaranteed fields.  The API is JSON-in/JSON-out by design, so new categories and fields can ship without breaking the API contract; consumers must ignore unknown keys.

Releasing or closing the monitor stops all events and clears all filters.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2DiagnosticCategory Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2diagnosticcategory?view=webview2-dotnet-1.0.4181-prerelease&preserve-view=true)
   * `NetworkRequest`

* [CoreWebView2DiagnosticMonitor Class](/dotnet/api/microsoft.web.webview2.core.corewebview2diagnosticmonitor?view=webview2-dotnet-1.0.4181-prerelease&preserve-view=true)
   * [CoreWebView2DiagnosticMonitor.Close Method](/dotnet/api/microsoft.web.webview2.core.corewebview2diagnosticmonitor.close?view=webview2-dotnet-1.0.4181-prerelease&preserve-view=true)
   * [CoreWebView2DiagnosticMonitor.DiagnosticReceived Event](/dotnet/api/microsoft.web.webview2.core.corewebview2diagnosticmonitor.diagnosticreceived?view=webview2-dotnet-1.0.4181-prerelease&preserve-view=true)
   * [CoreWebView2DiagnosticMonitor.RemoveDiagnosticFilter Method](/dotnet/api/microsoft.web.webview2.core.corewebview2diagnosticmonitor.removediagnosticfilter?view=webview2-dotnet-1.0.4181-prerelease&preserve-view=true)
   * [CoreWebView2DiagnosticMonitor.SetDiagnosticFilter Method](/dotnet/api/microsoft.web.webview2.core.corewebview2diagnosticmonitor.setdiagnosticfilter?view=webview2-dotnet-1.0.4181-prerelease&preserve-view=true)

* [CoreWebView2DiagnosticReceivedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2diagnosticreceivedeventargs?view=webview2-dotnet-1.0.4181-prerelease&preserve-view=true)
   * [CoreWebView2DiagnosticReceivedEventArgs.Category Property](/dotnet/api/microsoft.web.webview2.core.corewebview2diagnosticreceivedeventargs.category?view=webview2-dotnet-1.0.4181-prerelease&preserve-view=true)
   * [CoreWebView2DiagnosticReceivedEventArgs.DetailsAsJson Property](/dotnet/api/microsoft.web.webview2.core.corewebview2diagnosticreceivedeventargs.detailsasjson?view=webview2-dotnet-1.0.4181-prerelease&preserve-view=true)
   * [CoreWebView2DiagnosticReceivedEventArgs.Scope Property](/dotnet/api/microsoft.web.webview2.core.corewebview2diagnosticreceivedeventargs.scope?view=webview2-dotnet-1.0.4181-prerelease&preserve-view=true)
   * [CoreWebView2DiagnosticReceivedEventArgs.Timestamp Property](/dotnet/api/microsoft.web.webview2.core.corewebview2diagnosticreceivedeventargs.timestamp?view=webview2-dotnet-1.0.4181-prerelease&preserve-view=true)

* [CoreWebView2DiagnosticScope Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2diagnosticscope?view=webview2-dotnet-1.0.4181-prerelease&preserve-view=true)
   * `Environment`
   * `Profile`
   * `Webview`

* `CoreWebView2Environment` Class:
   * [CoreWebView2Environment.CreateDiagnosticMonitor Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.creatediagnosticmonitor?view=webview2-dotnet-1.0.4181-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2DiagnosticCategory Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2diagnosticcategory?view=webview2-winrt-1.0.4181-prerelease&preserve-view=true)
   * `NetworkRequest`

* [CoreWebView2DiagnosticMonitor Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2diagnosticmonitor?view=webview2-winrt-1.0.4181-prerelease&preserve-view=true)
   * [CoreWebView2DiagnosticMonitor.Close Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2diagnosticmonitor?view=webview2-winrt-1.0.4181-prerelease&preserve-view=true#close)
   * [CoreWebView2DiagnosticMonitor.DiagnosticReceived Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2diagnosticmonitor?view=webview2-winrt-1.0.4181-prerelease&preserve-view=true#diagnosticreceived)
   * [CoreWebView2DiagnosticMonitor.RemoveDiagnosticFilter Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2diagnosticmonitor?view=webview2-winrt-1.0.4181-prerelease&preserve-view=true#removediagnosticfilter)
   * [CoreWebView2DiagnosticMonitor.SetDiagnosticFilter Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2diagnosticmonitor?view=webview2-winrt-1.0.4181-prerelease&preserve-view=true#setdiagnosticfilter)

* [CoreWebView2DiagnosticReceivedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2diagnosticreceivedeventargs?view=webview2-winrt-1.0.4181-prerelease&preserve-view=true)
   * [CoreWebView2DiagnosticReceivedEventArgs.Category Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2diagnosticreceivedeventargs?view=webview2-winrt-1.0.4181-prerelease&preserve-view=true#category)
   * [CoreWebView2DiagnosticReceivedEventArgs.DetailsAsJson Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2diagnosticreceivedeventargs?view=webview2-winrt-1.0.4181-prerelease&preserve-view=true#detailsasjson)
   * [CoreWebView2DiagnosticReceivedEventArgs.Scope Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2diagnosticreceivedeventargs?view=webview2-winrt-1.0.4181-prerelease&preserve-view=true#scope)
   * [CoreWebView2DiagnosticReceivedEventArgs.Timestamp Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2diagnosticreceivedeventargs?view=webview2-winrt-1.0.4181-prerelease&preserve-view=true#timestamp)

* [CoreWebView2DiagnosticScope Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2diagnosticscope?view=webview2-winrt-1.0.4181-prerelease&preserve-view=true)
   * `Environment`
   * `Profile`
   * `Webview`

* `CoreWebView2Environment` Class:
   * [CoreWebView2Environment.CreateDiagnosticMonitor Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment?view=webview2-winrt-1.0.4181-prerelease&preserve-view=true#creatediagnosticmonitor)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalDiagnosticMonitor](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldiagnosticmonitor?view=webview2-1.0.4181-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalDiagnosticMonitor::add_DiagnosticReceived](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldiagnosticmonitor?view=webview2-1.0.4181-prerelease&preserve-view=true#add_diagnosticreceived)
   * [ICoreWebView2ExperimentalDiagnosticMonitor::Close](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldiagnosticmonitor?view=webview2-1.0.4181-prerelease&preserve-view=true#close)
   * [ICoreWebView2ExperimentalDiagnosticMonitor::remove_DiagnosticReceived](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldiagnosticmonitor?view=webview2-1.0.4181-prerelease&preserve-view=true#remove_diagnosticreceived)
   * [ICoreWebView2ExperimentalDiagnosticMonitor::RemoveDiagnosticFilter](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldiagnosticmonitor?view=webview2-1.0.4181-prerelease&preserve-view=true#removediagnosticfilter)
   * [ICoreWebView2ExperimentalDiagnosticMonitor::SetDiagnosticFilter](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldiagnosticmonitor?view=webview2-1.0.4181-prerelease&preserve-view=true#setdiagnosticfilter)

* [ICoreWebView2ExperimentalDiagnosticReceivedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldiagnosticreceivedeventargs?view=webview2-1.0.4181-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalDiagnosticReceivedEventArgs::get_Category](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldiagnosticreceivedeventargs?view=webview2-1.0.4181-prerelease&preserve-view=true#get_category)
   * [ICoreWebView2ExperimentalDiagnosticReceivedEventArgs::get_DetailsAsJson](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldiagnosticreceivedeventargs?view=webview2-1.0.4181-prerelease&preserve-view=true#get_detailsasjson)
   * [ICoreWebView2ExperimentalDiagnosticReceivedEventArgs::get_Scope](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldiagnosticreceivedeventargs?view=webview2-1.0.4181-prerelease&preserve-view=true#get_scope)
   * [ICoreWebView2ExperimentalDiagnosticReceivedEventArgs::get_Timestamp](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldiagnosticreceivedeventargs?view=webview2-1.0.4181-prerelease&preserve-view=true#get_timestamp)

* [ICoreWebView2ExperimentalDiagnosticReceivedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldiagnosticreceivedeventhandler?view=webview2-1.0.4181-prerelease&preserve-view=true)<!-- win32 only -->

* [ICoreWebView2ExperimentalEnvironment16](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment16?view=webview2-1.0.4181-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalEnvironment16::CreateDiagnosticMonitor](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment16?view=webview2-1.0.4181-prerelease&preserve-view=true#creatediagnosticmonitor)

* [COREWEBVIEW2_DIAGNOSTIC_CATEGORY enum](/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.4181-prerelease&preserve-view=true#corewebview2_diagnostic_category)
   * `COREWEBVIEW2_DIAGNOSTIC_CATEGORY_NETWORK_REQUEST`

* [COREWEBVIEW2_DIAGNOSTIC_SCOPE enum](/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.4181-prerelease&preserve-view=true#corewebview2_diagnostic_scope)
   * `COREWEBVIEW2_DIAGNOSTIC_SCOPE_WEBVIEW`
   * `COREWEBVIEW2_DIAGNOSTIC_SCOPE_PROFILE`
   * `COREWEBVIEW2_DIAGNOSTIC_SCOPE_ENVIRONMENT`

---


<!-- ------------------------------ -->
#### Promotions to Phase 2 (Stable in Prerelease)

No APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, in this Prerelease SDK.


<!-- ------------------------------ -->
#### Bug fixes

This Prerelease SDK includes the following bug fixes.


<!-- ---------- -->
###### Runtime-only

* Fixed the `Caption controls` background color setting API.  After this change, to close your app, the app will also need to intercept the `Close` call and handle the call itself.
* Restricted access to a singleton host pipe in legacy WebView2 clients.
* Removed implicit `window.gc` addition on WebViews.
* Fixed the "download shortcut" announcement by screen readers.
* Fixed the Min/Max/Close flicker issue in Windows Control Overlay.
* Fixed honoring a custom scale factor for PDF printing.
* Fixed the anchoring logic for the minimal window download popup.
* Fixed the inability to drag a window via the top border of a custom title bar.

###### SDK-only

* Fixed a WPF crash when changing display topology in composition-controlled apps.
* Fixed a WebView2/CEF window class collision by using module-unique suffixes.

<!-- end of Prerelease SDK 1.0.4181-prerelease, for Runtime 152 (Aug. 3, 2026) -->


<!-- ====================================================================== -->
## Release SDK 1.0.4129.50, for Runtime 151 (Aug. 3, 2026)

Release Date: Aug. 3, 2026

[NuGet package for WebView2 SDK 1.0.4129.50](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.4129.50)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 151.0.4129.50 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 3 (Stable in Release)

No additional APIs have been promoted from Phase 2: Stable in Prerelease, to Phase 3: Stable in Release, in this Release SDK.


<!-- ------------------------------ -->
#### Bug fixes

This Release SDK includes the following bug fixes.


<!-- ---------- -->
###### Runtime-only

* Restricted access to a singleton host pipe in legacy WebView2 clients.

<!-- end of Release SDK 1.0.4129.50, for Runtime 151 (Aug. 3, 2026) -->


<!-- ====================================================================== -->
## Prerelease SDK 1.0.4126-prerelease, for Runtime 151 (Jul. 7, 2026)

Release Date: Jul. 7, 2026

[NuGet package for WebView2 SDK 1.0.4126-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.4126-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 151.0.4126.0 or higher.


<!-- ------------------------------ -->
#### General changes


<!-- ---------- -->
###### WebView2 Runtime is changing to a 2-week release cadence

Starting with version 152 (Aug. 24, 2026), the WebView2 Runtime moves to a 2-week release cadence.  This is aligned with Microsoft Edge.  WebView2 Runtime version 151 is the final release that's on a 4-week release cadence.

See [[Announcement] WebView2 Runtime moves to a 2-week release cadence (starting v152)](https://github.com/MicrosoftEdge/WebView2Announcements/issues/137).


<!-- ------------------------------ -->
#### Experimental APIs (Phase 1: Experimental in Prerelease)

The following APIs are in Phase 1: Experimental in Prerelease, and have been added in this Prerelease SDK.


<!-- ---------- -->
###### Crash Report in `ProcessFailed` event

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


<!-- ---------- -->
###### Configure per-origin reputation checking (SmartScreen) settings

The `ReputationChecking` feature allows a WebView2 app to skip SmartScreen reputation checks for navigations and downloads from specific trusted origins.  `ReputationChecking` is a member of the `CoreWebView2OriginFeature` enum.

When this feature is set to `CoreWebView2OriginFeatureState.Disabled` for an origin, phishing and malware reputation checks are bypassed for that origin.  If this feature isn't configured for an origin, the `CoreWebView2Settings.IsReputationCheckingRequired` setting, which is global, applies; the preference at the browser-process level is applied for all the processes utilizing it.

If `CoreWebView2Settings.IsReputationCheckingRequired` is set to `false`, setting `CoreWebView2OriginFeatureState.Enabled` for an origin doesn't re-enable reputation checks for that origin; `CoreWebView2Settings.IsReputationCheckingRequired` takes precedence.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2OriginFeature` Enum:
   * [ReputationChecking](/dotnet/api/microsoft.web.webview2.core.corewebview2originfeature?view=webview2-dotnet-1.0.4126-prerelease&preserve-view=true)

* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.SetOriginFeatures Method](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.setoriginfeatures)

Older supporting APIs:

* [CoreWebView2OriginFeatureState` Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2originfeaturestate)
   * `Enabled`
   * `Disabled`

* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.IsReputationCheckingRequired Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.isreputationcheckingrequired)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.SetOriginFeatures Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile#setoriginfeatures)

* `CoreWebView2OriginFeature` Enum:
   * [ReputationChecking](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2originfeature?view=webview2-winrt-1.0.4126-prerelease&preserve-view=true)

Older supporting APIs:

* [CoreWebView2OriginFeatureState` Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2originfeaturestate)
   * `Enabled`
   * `Disabled`

* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.IsReputationCheckingRequired Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings#isreputationcheckingrequired)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2Profile`:
   * [ICoreWebView2Profile::SetOriginFeatures](/microsoft-edge/webview2/reference/win32/icorewebview2profile?view=webview2-1.0.4126-prerelease&preserve-view=true#setoriginfeatures)

* `COREWEBVIEW2_ORIGIN_FEATURE` enum:
   * [COREWEBVIEW2_ORIGIN_FEATURE_REPUTATION_CHECKING](/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.4126-prerelease&preserve-view=true#corewebview2_origin_feature_reputation_checking)

Older supporting APIs:

* `ICoreWebView2Settings8`:
   * [ICoreWebView2Settings8::get_IsReputationCheckingRequired](/microsoft-edge/webview2/reference/win32/icorewebview2settings8#get_isreputationcheckingrequired)
   * [ICoreWebView2Settings8::put_IsReputationCheckingRequired](/microsoft-edge/webview2/reference/win32/icorewebview2settings8#put_isreputationcheckingrequired)

* [COREWEBVIEW2_ORIGIN_FEATURE_STATE enum](/microsoft-edge/webview2/reference/win32/webview2experimental-idl#corewebview2_origin_feature_state)
   * `COREWEBVIEW2_ORIGIN_FEATURE_STATE_ENABLED`
   * `COREWEBVIEW2_ORIGIN_FEATURE_STATE_DISABLED`

---


<!-- ------------------------------ -->
#### Promotions to Phase 2 (Stable in Prerelease)

No APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, in this Prerelease SDK.


<!-- ------------------------------ -->
#### Bug fixes

This Prerelease SDK includes the following bug fixes.


<!-- ---------- -->
###### Runtime-only

* Fixed the reentrancy for frame deletion.
* Fixed object wrapper access for a User Authorization File (UAF).
* Stamped the browser-authoritative origin on the host pipe, to prevent a `WebMessageReceivedEventArgs.Source` spoof.
* Restricted the access to a singleton host pipe, in a deprecated WebView2.
* Removed the `origin` parameter from methods that access a native object.
* Hardened WebView2 virtual-host `kDeny` enforcement against renderer spoofing and New Technology File System (NTFS)-junction escapes.
* Fixed the window-to-visual UI Automation (UIA) tree.
* Fixed a regression in the `AddScriptToExecuteOnDocumentCreated` API.
* Implemented `OnRendererResponsive` for hang outcome tracking.

<!-- end of Prerelease SDK 1.0.4126-prerelease, for Runtime 151 (Jul. 7, 2026) -->


<!-- ====================================================================== -->
## Release SDK 1.0.4078.44, for Runtime 150 (Jul. 7, 2026)

Release Date: Jul. 7, 2026

[NuGet package for WebView2 SDK 1.0.4078.44](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.4078.44)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 150.0.4078.44 or higher.


<!-- ------------------------------ -->
#### General changes


<!-- ---------- -->
###### WebView2 Runtime is changing to a 2-week release cadence

See [WebView2 Runtime is changing to a 2-week release cadence](#webview2-runtime-is-changing-to-a-2-week-release-cadence), in the Prerelease section above.


<!-- ------------------------------ -->
#### Promotions to Phase 3 (Stable in Release)

No additional APIs have been promoted from Phase 2: Stable in Prerelease, to Phase 3: Stable in Release, in this Release SDK.


<!-- ------------------------------ -->
#### Bug fixes

This Release SDK includes the following bug fixes.


<!-- ---------- -->
###### Runtime-only

* Fixed the reentrancy for frame deletion.
* Fixed object wrapper access for a User Authorization File (UAF).
* Stamped the browser-authoritative origin on the host pipe, to prevent a `WebMessageReceivedEventArgs.Source` spoof.
* Restricted the access to a singleton host pipe, in a deprecated WebView2.
* Removed the `origin` parameter from methods that access a native object.
* Hardened WebView2 virtual-host `kDeny` enforcement against renderer spoofing and New Technology File System (NTFS)-junction escapes.
* Fixed the window-to-visual UI Automation (UIA) tree.
* Fixed a regression in the `AddScriptToExecuteOnDocumentCreated` API.

<!-- end of Release SDK 1.0.4078.44, for Runtime 150 (Jul. 7, 2026) -->


<!-- ====================================================================== -->
## Prerelease SDK 1.0.4071-prerelease, for Runtime 150 (Jun. 11, 2026)

Release Date: Jun. 11, 2026

[NuGet package for WebView2 SDK 1.0.4071-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.4071-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 150.0.4071.0 or later.


<!-- ------------------------------ -->
#### Breaking changes


<!-- ---------- -->
###### Enable Windows shell handwriting support for WebView2 in WindowToVisual mode

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


<!-- ------------------------------ -->
#### General changes


<!-- ---------- -->
###### Deprecation of DevToolsProtocolExtension NuGet package

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


<!-- ------------------------------ -->
#### Experimental APIs (Phase 1: Experimental in Prerelease)

No Experimental APIs have been added in this Prerelease SDK.


<!-- ------------------------------ -->
#### Promotions to Phase 2 (Stable in Prerelease)

No APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, in this Prerelease SDK.


<!-- ------------------------------ -->
#### Bug fixes

This Prerelease SDK includes the following bug fixes.


<!-- ---------- -->
###### Runtime and SDK

* Added total-count histograms for WebView2 environment and controller creation attempts.


<!-- ---------- -->
###### Runtime-only

* Mapped `TERMINATION_STATUS_LAUNCH_FAILED_OS_POLICY` to `kLaunchFailed`.
* Updated the failure reason classification to `OOM`, for a process that's been killed to reclaim memory.
* Added a system memory snapshot at out-of-memory (OOM) detection time for analysis.
* Fixed the silent closing of a popup, when the host expects the popup to remain open.
* Added trusted origin check during host object access.
* Reduced redundant map lookups in WebView2 URL request manager, for improved performance.
* Eliminated unnecessary string allocations in WebView2 cookie layer, for improved performance.


<!-- ---------- -->
###### SDK-only

* Fixed container safety issues in WebView2 frame and listener code.
* WinRT event subscription now keeps the projection wrapper alive until the handler is unsubscribed.

<!-- end of Prerelease SDK 1.0.4071-prerelease, for Runtime 150 (Jun. 11, 2026) -->


<!-- ====================================================================== -->
## Release SDK 1.0.4022.49, for Runtime 149 (Jun. 11, 2026)

Release Date: Jun. 11, 2026

[NuGet package for WebView2 SDK 1.0.4022.49](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.4022.49)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 149.0.4022.49 or later.


<!-- ------------------------------ -->
#### Promotions to Phase 3 (Stable in Release)

The following APIs have been promoted from Phase 2: Stable in Prerelease, to Phase 3: Stable in Release, and are now included in this Release SDK.


<!-- ---------- -->
###### Enable background processing and offline support (WebView2 Worker APIs)

The WebView2 Worker APIs allow host applications to interact with Web Workers to offload tasks from the main thread, improve responsiveness, and support background operations.  These Web Workers include Dedicated Workers, Shared Workers, and Service Workers.

These APIs provide:
* **Lifecycle Events:** Monitor creation and destruction of workers.
* **Messaging Interfaces:** Communicate with workers using `PostMessage` and `WebMessageReceived`; specifically:
   * `CoreWebView2ServiceWorker.PostWebMessageAsJson`
   * `CoreWebView2ServiceWorker.PostWebMessageAsString`
   * `CoreWebView2DedicatedWorker.PostWebMessageAsJson`
   * `CoreWebView2DedicatedWorker.PostWebMessageAsString`
   * `CoreWebView2ServiceWorker.WebMessageReceived`
   * `CoreWebView2DedicatedWorker.WebMessageReceived`
   * `chrome.webview.postMessage`
   * Not: `chrome.webview.postMessageWithAdditionalObjects`
* **Worker Management:** Query and retrieve worker registrations and instances.

##### [.NET/C#](#tab/dotnetcsharp)

<!-- 1 -->
* `CoreWebView2` Class:
   * [CoreWebView2.DedicatedWorkerCreated Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.dedicatedworkercreated?view=webview2-dotnet-1.0.4022.49&preserve-view=true)

<!-- 2 -->
* [CoreWebView2DedicatedWorker Class](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworker?view=webview2-dotnet-1.0.4022.49&preserve-view=true)
   * [CoreWebView2DedicatedWorker.DedicatedWorkerCreated Event](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworker.dedicatedworkercreated?view=webview2-dotnet-1.0.4022.49&preserve-view=true)
   * [CoreWebView2DedicatedWorker.Destroying Event](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworker.destroying?view=webview2-dotnet-1.0.4022.49&preserve-view=true)
   * [CoreWebView2DedicatedWorker.PostWebMessageAsJson Method](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworker.postwebmessageasjson?view=webview2-dotnet-1.0.4022.49&preserve-view=true)
   * [CoreWebView2DedicatedWorker.PostWebMessageAsString Method](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworker.postwebmessageasstring?view=webview2-dotnet-1.0.4022.49&preserve-view=true)
   * [CoreWebView2DedicatedWorker.ScriptUri Property](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworker.scripturi?view=webview2-dotnet-1.0.4022.49&preserve-view=true)
   * [CoreWebView2DedicatedWorker.WebMessageReceived Event](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworker.webmessagereceived?view=webview2-dotnet-1.0.4022.49&preserve-view=true)

<!-- 3 -->
* [CoreWebView2DedicatedWorkerCreatedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworkercreatedeventargs?view=webview2-dotnet-1.0.4022.49&preserve-view=true)
   * [CoreWebView2DedicatedWorkerCreatedEventArgs.OriginalSourceFrameInfo Property](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworkercreatedeventargs.originalsourceframeinfo?view=webview2-dotnet-1.0.4022.49&preserve-view=true)
   * [CoreWebView2DedicatedWorkerCreatedEventArgs.Worker Property](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworkercreatedeventargs.worker?view=webview2-dotnet-1.0.4022.49&preserve-view=true)

<!-- 4 -->
* `CoreWebView2Frame` Class:
   * [CoreWebView2Frame.DedicatedWorkerCreated Event](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.dedicatedworkercreated?view=webview2-dotnet-1.0.4022.49&preserve-view=true)

<!-- 5 -->
* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.AreWebViewScriptApisEnabledForServiceWorkers Property](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.arewebviewscriptapisenabledforserviceworkers?view=webview2-dotnet-1.0.4022.49&preserve-view=true)
   * [CoreWebView2Profile.ServiceWorkerManager Property](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.serviceworkermanager?view=webview2-dotnet-1.0.4022.49&preserve-view=true)
   * [CoreWebView2Profile.SharedWorkerManager Property](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.sharedworkermanager?view=webview2-dotnet-1.0.4022.49&preserve-view=true)

<!-- 6 -->
* [CoreWebView2ServiceWorker Class](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworker?view=webview2-dotnet-1.0.4022.49&preserve-view=true)
   * [CoreWebView2ServiceWorker.Destroying Event](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworker.destroying?view=webview2-dotnet-1.0.4022.49&preserve-view=true)
   * [CoreWebView2ServiceWorker.PostWebMessageAsJson Method](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworker.postwebmessageasjson?view=webview2-dotnet-1.0.4022.49&preserve-view=true)
   * [CoreWebView2ServiceWorker.PostWebMessageAsString Method](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworker.postwebmessageasstring?view=webview2-dotnet-1.0.4022.49&preserve-view=true)
   * [CoreWebView2ServiceWorker.ScriptUri Property](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworker.scripturi?view=webview2-dotnet-1.0.4022.49&preserve-view=true)
   * [CoreWebView2ServiceWorker.WebMessageReceived Event](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworker.webmessagereceived?view=webview2-dotnet-1.0.4022.49&preserve-view=true)

<!-- 7 -->
* [CoreWebView2ServiceWorkerActivatedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkeractivatedeventargs?view=webview2-dotnet-1.0.4022.49&preserve-view=true)
   * [CoreWebView2ServiceWorkerActivatedEventArgs.ActiveServiceWorker Property](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkeractivatedeventargs.activeserviceworker?view=webview2-dotnet-1.0.4022.49&preserve-view=true)

<!-- 8 -->
* [CoreWebView2ServiceWorkerManager Class](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkermanager?view=webview2-dotnet-1.0.4022.49&preserve-view=true)
   * [CoreWebView2ServiceWorkerManager.GetServiceWorkerRegistrationsAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkermanager.getserviceworkerregistrationsasync?view=webview2-dotnet-1.0.4022.49&preserve-view=true)
   * [CoreWebView2ServiceWorkerManager.GetServiceWorkerRegistrationsAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkermanager.getserviceworkerregistrationsasync?view=webview2-dotnet-1.0.4022.49&preserve-view=true)
   * [CoreWebView2ServiceWorkerManager.ServiceWorkerRegistered Event](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkermanager.serviceworkerregistered?view=webview2-dotnet-1.0.4022.49&preserve-view=true)

<!-- 9 -->
* [CoreWebView2ServiceWorkerRegisteredEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkerregisteredeventargs?view=webview2-dotnet-1.0.4022.49&preserve-view=true)
   * [CoreWebView2ServiceWorkerRegisteredEventArgs.ServiceWorkerRegistration Property](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkerregisteredeventargs.serviceworkerregistration?view=webview2-dotnet-1.0.4022.49&preserve-view=true)

<!-- 10 -->
* [CoreWebView2ServiceWorkerRegistration Class](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkerregistration?view=webview2-dotnet-1.0.4022.49&preserve-view=true)
   * [CoreWebView2ServiceWorkerRegistration.ActiveServiceWorker Property](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkerregistration.activeserviceworker?view=webview2-dotnet-1.0.4022.49&preserve-view=true)
   * [CoreWebView2ServiceWorkerRegistration.Origin Property](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkerregistration.origin?view=webview2-dotnet-1.0.4022.49&preserve-view=true)
   * [CoreWebView2ServiceWorkerRegistration.ScopeUri Property](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkerregistration.scopeuri?view=webview2-dotnet-1.0.4022.49&preserve-view=true)
   * [CoreWebView2ServiceWorkerRegistration.ServiceWorkerActivated Event](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkerregistration.serviceworkeractivated?view=webview2-dotnet-1.0.4022.49&preserve-view=true)
   * [CoreWebView2ServiceWorkerRegistration.TopLevelOrigin Property](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkerregistration.toplevelorigin?view=webview2-dotnet-1.0.4022.49&preserve-view=true)
   * [CoreWebView2ServiceWorkerRegistration.Unregistering Event](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkerregistration.unregistering?view=webview2-dotnet-1.0.4022.49&preserve-view=true)

<!-- 11 -->
* [CoreWebView2SharedWorker Class](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworker?view=webview2-dotnet-1.0.4022.49&preserve-view=true)
   * [CoreWebView2SharedWorker.Destroying Event](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworker.destroying?view=webview2-dotnet-1.0.4022.49&preserve-view=true)
   * [CoreWebView2SharedWorker.Origin Property](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworker.origin?view=webview2-dotnet-1.0.4022.49&preserve-view=true)
   * [CoreWebView2SharedWorker.ScriptUri Property](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworker.scripturi?view=webview2-dotnet-1.0.4022.49&preserve-view=true)
   * [CoreWebView2SharedWorker.TopLevelOrigin Property](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworker.toplevelorigin?view=webview2-dotnet-1.0.4022.49&preserve-view=true)

<!-- 12 -->
* [CoreWebView2SharedWorkerCreatedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworkercreatedeventargs?view=webview2-dotnet-1.0.4022.49&preserve-view=true)
   * [CoreWebView2SharedWorkerCreatedEventArgs.Worker Property](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworkercreatedeventargs.worker?view=webview2-dotnet-1.0.4022.49&preserve-view=true)

<!-- 13 -->
* [CoreWebView2SharedWorkerManager Class](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworkermanager?view=webview2-dotnet-1.0.4022.49&preserve-view=true)
   * [CoreWebView2SharedWorkerManager.GetSharedWorkersAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworkermanager.getsharedworkersasync?view=webview2-dotnet-1.0.4022.49&preserve-view=true)
   * [CoreWebView2SharedWorkerManager.SharedWorkerCreated Event](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworkermanager.sharedworkercreated?view=webview2-dotnet-1.0.4022.49&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

<!-- 1 -->
* `CoreWebView2` Class:
   * [CoreWebView2.DedicatedWorkerCreated Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.4022.49&preserve-view=true#dedicatedworkercreated)

<!-- 2 -->
* [CoreWebView2DedicatedWorker Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworker?view=webview2-winrt-1.0.4022.49&preserve-view=true)
   * [CoreWebView2DedicatedWorker.DedicatedWorkerCreated Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworker?view=webview2-winrt-1.0.4022.49&preserve-view=true#dedicatedworkercreated)
   * [CoreWebView2DedicatedWorker.Destroying Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworker?view=webview2-winrt-1.0.4022.49&preserve-view=true#destroying)
   * [CoreWebView2DedicatedWorker.PostWebMessageAsJson Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworker?view=webview2-winrt-1.0.4022.49&preserve-view=true#postwebmessageasjson)
   * [CoreWebView2DedicatedWorker.PostWebMessageAsString Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworker?view=webview2-winrt-1.0.4022.49&preserve-view=true#postwebmessageasstring)
   * [CoreWebView2DedicatedWorker.ScriptUri Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworker?view=webview2-winrt-1.0.4022.49&preserve-view=true#scripturi)
   * [CoreWebView2DedicatedWorker.WebMessageReceived Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworker?view=webview2-winrt-1.0.4022.49&preserve-view=true#webmessagereceived)

<!-- 3 -->
* [CoreWebView2DedicatedWorkerCreatedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworkercreatedeventargs?view=webview2-winrt-1.0.4022.49&preserve-view=true)
   * [CoreWebView2DedicatedWorkerCreatedEventArgs.OriginalSourceFrameInfo Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworkercreatedeventargs?view=webview2-winrt-1.0.4022.49&preserve-view=true#originalsourceframeinfo)
   * [CoreWebView2DedicatedWorkerCreatedEventArgs.Worker Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworkercreatedeventargs?view=webview2-winrt-1.0.4022.49&preserve-view=true#worker)

<!-- 4 -->
* `CoreWebView2Frame` Class:
   * [CoreWebView2Frame.DedicatedWorkerCreated Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame?view=webview2-winrt-1.0.4022.49&preserve-view=true#dedicatedworkercreated)

<!-- 5 -->
* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.AreWebViewScriptApisEnabledForServiceWorkers Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.4022.49&preserve-view=true#arewebviewscriptapisenabledforserviceworkers)
   * [CoreWebView2Profile.ServiceWorkerManager Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.4022.49&preserve-view=true#serviceworkermanager)
   * [CoreWebView2Profile.SharedWorkerManager Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.4022.49&preserve-view=true#sharedworkermanager)

<!-- 6 -->
* [CoreWebView2ServiceWorker Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworker?view=webview2-winrt-1.0.4022.49&preserve-view=true)
   * [CoreWebView2ServiceWorker.Destroying Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworker?view=webview2-winrt-1.0.4022.49&preserve-view=true#destroying)
   * [CoreWebView2ServiceWorker.PostWebMessageAsJson Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworker?view=webview2-winrt-1.0.4022.49&preserve-view=true#postwebmessageasjson)
   * [CoreWebView2ServiceWorker.PostWebMessageAsString Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworker?view=webview2-winrt-1.0.4022.49&preserve-view=true#postwebmessageasstring)
   * [CoreWebView2ServiceWorker.ScriptUri Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworker?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#scripturi)
   * [CoreWebView2ServiceWorker.WebMessageReceived Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworker?view=webview2-winrt-1.0.4022.49&preserve-view=true#webmessagereceived)

<!-- 7 -->
* [CoreWebView2ServiceWorkerActivatedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkeractivatedeventargs?view=webview2-winrt-1.0.4022.49&preserve-view=true)
   * [CoreWebView2ServiceWorkerActivatedEventArgs.ActiveServiceWorker Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkeractivatedeventargs?view=webview2-winrt-1.0.4022.49&preserve-view=true#activeserviceworker)

<!-- 8 -->
* [CoreWebView2ServiceWorkerManager Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkermanager?view=webview2-winrt-1.0.4022.49&preserve-view=true)
   * [CoreWebView2ServiceWorkerManager.GetServiceWorkerRegistrationsAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkermanager?view=webview2-winrt-1.0.4022.49&preserve-view=true#getserviceworkerregistrationsasync)
   * [CoreWebView2ServiceWorkerManager.GetServiceWorkerRegistrationsAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkermanager?view=webview2-winrt-1.0.4022.49&preserve-view=true#getserviceworkerregistrationsasync)
   * [CoreWebView2ServiceWorkerManager.ServiceWorkerRegistered Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkermanager?view=webview2-winrt-1.0.4022.49&preserve-view=true#serviceworkerregistered)

<!-- 9 -->
* [CoreWebView2ServiceWorkerRegisteredEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkerregisteredeventargs?view=webview2-winrt-1.0.4022.49&preserve-view=true)
   * [CoreWebView2ServiceWorkerRegisteredEventArgs.ServiceWorkerRegistration Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkerregisteredeventargs?view=webview2-winrt-1.0.4022.49&preserve-view=true#serviceworkerregistration)

<!-- 10 -->
* [CoreWebView2ServiceWorkerRegistration Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkerregistration?view=webview2-winrt-1.0.4022.49&preserve-view=true)
   * [CoreWebView2ServiceWorkerRegistration.ActiveServiceWorker Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkerregistration?view=webview2-winrt-1.0.4022.49&preserve-view=true#activeserviceworker)
   * [CoreWebView2ServiceWorkerRegistration.Origin Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkerregistration?view=webview2-winrt-1.0.4022.49&preserve-view=true#origin)
   * [CoreWebView2ServiceWorkerRegistration.ScopeUri Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkerregistration?view=webview2-winrt-1.0.4022.49&preserve-view=true#scopeuri)
   * [CoreWebView2ServiceWorkerRegistration.ServiceWorkerActivated Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkerregistration?view=webview2-winrt-1.0.4022.49&preserve-view=true#serviceworkeractivated)
   * [CoreWebView2ServiceWorkerRegistration.TopLevelOrigin Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkerregistration?view=webview2-winrt-1.0.4022.49&preserve-view=true#toplevelorigin)
   * [CoreWebView2ServiceWorkerRegistration.Unregistering Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkerregistration?view=webview2-winrt-1.0.4022.49&preserve-view=true#unregistering)

<!-- 11 -->
* [CoreWebView2SharedWorker Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworker?view=webview2-winrt-1.0.4022.49&preserve-view=true)
   * [CoreWebView2SharedWorker.Destroying Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworker?view=webview2-winrt-1.0.4022.49&preserve-view=true#destroying)
   * [CoreWebView2SharedWorker.Origin Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworker?view=webview2-winrt-1.0.4022.49&preserve-view=true#origin)
   * [CoreWebView2SharedWorker.ScriptUri Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworker?view=webview2-winrt-1.0.4022.49&preserve-view=true#scripturi)
   * [CoreWebView2SharedWorker.TopLevelOrigin Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworker?view=webview2-winrt-1.0.4022.49&preserve-view=true#toplevelorigin)

<!-- 12 -->
* [CoreWebView2SharedWorkerCreatedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworkercreatedeventargs?view=webview2-winrt-1.0.4022.49&preserve-view=true)
   * [CoreWebView2SharedWorkerCreatedEventArgs.Worker Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworkercreatedeventargs?view=webview2-winrt-1.0.4022.49&preserve-view=true#worker)

<!-- 13 -->
* [CoreWebView2SharedWorkerManager Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworkermanager?view=webview2-winrt-1.0.4022.49&preserve-view=true)
   * [CoreWebView2SharedWorkerManager.GetSharedWorkersAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworkermanager?view=webview2-winrt-1.0.4022.49&preserve-view=true#getsharedworkersasync)
   * [CoreWebView2SharedWorkerManager.SharedWorkerCreated Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworkermanager?view=webview2-winrt-1.0.4022.49&preserve-view=true#sharedworkercreated)

##### [Win32/C++](#tab/win32cpp)

<!-- 1 -->
* [ICoreWebView2_29](/microsoft-edge/webview2/reference/win32/icorewebview2_29?view=webview2-1.0.4022.49&preserve-view=true)
  * [ICoreWebView2_29::add_DedicatedWorkerCreated](/microsoft-edge/webview2/reference/win32/icorewebview2_29?view=webview2-1.0.4022.49&preserve-view=true#add_dedicatedworkercreated)
  * [ICoreWebView2_29::remove_DedicatedWorkerCreated](/microsoft-edge/webview2/reference/win32/icorewebview2_29?view=webview2-1.0.4022.49&preserve-view=true#remove_dedicatedworkercreated)

<!-- 2 -->
* [ICoreWebView2DedicatedWorker](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworker?view=webview2-1.0.4022.49&preserve-view=true)
  * [ICoreWebView2DedicatedWorker::add_DedicatedWorkerCreated](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworker?view=webview2-1.0.4022.49&preserve-view=true#add_dedicatedworkercreated)
  * [ICoreWebView2DedicatedWorker::add_Destroying](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworker?view=webview2-1.0.4022.49&preserve-view=true#add_destroying)
  * [ICoreWebView2DedicatedWorker::add_WebMessageReceived](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworker?view=webview2-1.0.4022.49&preserve-view=true#add_webmessagereceived)
  * [ICoreWebView2DedicatedWorker::get_ScriptUri](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworker?view=webview2-1.0.4022.49&preserve-view=true#get_scripturi)
  * [ICoreWebView2DedicatedWorker::PostWebMessageAsJson](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworker?view=webview2-1.0.4022.49&preserve-view=true#postwebmessageasjson)
  * [ICoreWebView2DedicatedWorker::PostWebMessageAsString](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworker?view=webview2-1.0.4022.49&preserve-view=true#postwebmessageasstring)
  * [ICoreWebView2DedicatedWorker::remove_DedicatedWorkerCreated](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworker?view=webview2-1.0.4022.49&preserve-view=true#remove_dedicatedworkercreated)
  * [ICoreWebView2DedicatedWorker::remove_Destroying](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworker?view=webview2-1.0.4022.49&preserve-view=true#remove_destroying)
  * [ICoreWebView2DedicatedWorker::remove_WebMessageReceived](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworker?view=webview2-1.0.4022.49&preserve-view=true#remove_webmessagereceived)

<!-- 3 -->
* [ICoreWebView2DedicatedWorkerCreatedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworkercreatedeventargs?view=webview2-1.0.4022.49&preserve-view=true)
  * [ICoreWebView2DedicatedWorkerCreatedEventArgs::get_OriginalSourceFrameInfo](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworkercreatedeventargs?view=webview2-1.0.4022.49&preserve-view=true#get_originalsourceframeinfo)
  * [ICoreWebView2DedicatedWorkerCreatedEventArgs::get_Worker](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworkercreatedeventargs?view=webview2-1.0.4022.49&preserve-view=true#get_worker)

<!-- win32 only -->
* [ICoreWebView2DedicatedWorkerCreatedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworkercreatedeventhandler?view=webview2-1.0.4022.49&preserve-view=true)

<!-- win32 only -->
* [ICoreWebView2DedicatedWorkerDedicatedWorkerCreatedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworkerdedicatedworkercreatedeventhandler?view=webview2-1.0.4022.49&preserve-view=true)

<!-- win32 only -->
* [ICoreWebView2DedicatedWorkerDestroyingEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworkerdestroyingeventhandler?view=webview2-1.0.4022.49&preserve-view=true)

<!-- win32 only -->
* [ICoreWebView2DedicatedWorkerWebMessageReceivedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworkerwebmessagereceivedeventhandler?view=webview2-1.0.4022.49&preserve-view=true)

<!-- 4 -->
* [ICoreWebView2Frame8](/microsoft-edge/webview2/reference/win32/icorewebview2frame8?view=webview2-1.0.4022.49&preserve-view=true)
  * [ICoreWebView2Frame8::add_DedicatedWorkerCreated](/microsoft-edge/webview2/reference/win32/icorewebview2frame8?view=webview2-1.0.4022.49&preserve-view=true#add_dedicatedworkercreated)
  * [ICoreWebView2Frame8::remove_DedicatedWorkerCreated](/microsoft-edge/webview2/reference/win32/icorewebview2frame8?view=webview2-1.0.4022.49&preserve-view=true#remove_dedicatedworkercreated)

<!-- win32 only -->
* [ICoreWebView2FrameDedicatedWorkerCreatedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2framededicatedworkercreatedeventhandler?view=webview2-1.0.4022.49&preserve-view=true)

<!-- win32 only -->
* [ICoreWebView2GetServiceWorkerRegistrationsCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2getserviceworkerregistrationscompletedhandler?view=webview2-1.0.4022.49&preserve-view=true)

<!-- win32 only -->
* [ICoreWebView2GetSharedWorkersCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2getsharedworkerscompletedhandler?view=webview2-1.0.4022.49&preserve-view=true)

<!-- 5 -->
* [ICoreWebView2Profile9](/microsoft-edge/webview2/reference/win32/icorewebview2profile9?view=webview2-1.0.4022.49&preserve-view=true)
  * [ICoreWebView2Profile9::get_AreWebViewScriptApisEnabledForServiceWorkers](/microsoft-edge/webview2/reference/win32/icorewebview2profile9?view=webview2-1.0.4022.49&preserve-view=true#get_arewebviewscriptapisenabledforserviceworkers)
  * [ICoreWebView2Profile9::get_ServiceWorkerManager](/microsoft-edge/webview2/reference/win32/icorewebview2profile9?view=webview2-1.0.4022.49&preserve-view=true#get_serviceworkermanager)
  * [ICoreWebView2Profile9::get_SharedWorkerManager](/microsoft-edge/webview2/reference/win32/icorewebview2profile9?view=webview2-1.0.4022.49&preserve-view=true#get_sharedworkermanager)
  * [ICoreWebView2Profile9::put_AreWebViewScriptApisEnabledForServiceWorkers](/microsoft-edge/webview2/reference/win32/icorewebview2profile9?view=webview2-1.0.4022.49&preserve-view=true#put_arewebviewscriptapisenabledforserviceworkers)

<!-- 6 -->
* [ICoreWebView2ServiceWorker](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworker?view=webview2-1.0.4022.49&preserve-view=true)
  * [ICoreWebView2ServiceWorker::add_Destroying](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworker?view=webview2-1.0.4022.49&preserve-view=true#add_destroying)
  * [ICoreWebView2ServiceWorker::add_WebMessageReceived](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworker?view=webview2-1.0.4022.49&preserve-view=true#add_webmessagereceived)
  * [ICoreWebView2ServiceWorker::get_ScriptUri](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworker?view=webview2-1.0.4022.49&preserve-view=true#get_scripturi)
  * [ICoreWebView2ServiceWorker::PostWebMessageAsJson](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworker?view=webview2-1.0.4022.49&preserve-view=true#postwebmessageasjson)
  * [ICoreWebView2ServiceWorker::PostWebMessageAsString](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworker?view=webview2-1.0.4022.49&preserve-view=true#postwebmessageasstring)
  * [ICoreWebView2ServiceWorker::remove_Destroying](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworker?view=webview2-1.0.4022.49&preserve-view=true#remove_destroying)
  * [ICoreWebView2ServiceWorker::remove_WebMessageReceived](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworker?view=webview2-1.0.4022.49&preserve-view=true#remove_webmessagereceived)

<!-- 7 -->
* [ICoreWebView2ServiceWorkerActivatedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkeractivatedeventargs?view=webview2-1.0.4022.49&preserve-view=true)
  * [ICoreWebView2ServiceWorkerActivatedEventArgs::get_ActiveServiceWorker](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkeractivatedeventargs?view=webview2-1.0.4022.49&preserve-view=true#get_activeserviceworker)

<!-- win32 only -->
* [ICoreWebView2ServiceWorkerActivatedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkeractivatedeventhandler?view=webview2-1.0.4022.49&preserve-view=true)

<!-- win32 only -->
* [ICoreWebView2ServiceWorkerDestroyingEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerdestroyingeventhandler?view=webview2-1.0.4022.49&preserve-view=true)

<!-- 8 -->
* [ICoreWebView2ServiceWorkerManager](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkermanager?view=webview2-1.0.4022.49&preserve-view=true)
  * [ICoreWebView2ServiceWorkerManager::add_ServiceWorkerRegistered](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkermanager?view=webview2-1.0.4022.49&preserve-view=true#add_serviceworkerregistered)
  * [ICoreWebView2ServiceWorkerManager::GetServiceWorkerRegistrations](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkermanager?view=webview2-1.0.4022.49&preserve-view=true#getserviceworkerregistrations)
  * [ICoreWebView2ServiceWorkerManager::GetServiceWorkerRegistrationsForScope](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkermanager?view=webview2-1.0.4022.49&preserve-view=true#getserviceworkerregistrationsforscope)
  * [ICoreWebView2ServiceWorkerManager::remove_ServiceWorkerRegistered](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkermanager?view=webview2-1.0.4022.49&preserve-view=true#remove_serviceworkerregistered)

<!-- 9 -->
* [ICoreWebView2ServiceWorkerRegisteredEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregisteredeventargs?view=webview2-1.0.4022.49&preserve-view=true)
  * [ICoreWebView2ServiceWorkerRegisteredEventArgs::get_ServiceWorkerRegistration](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregisteredeventargs?view=webview2-1.0.4022.49&preserve-view=true#get_serviceworkerregistration)

<!-- win32 only -->
* [ICoreWebView2ServiceWorkerRegisteredEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregisteredeventhandler?view=webview2-1.0.4022.49&preserve-view=true)

<!-- 10 -->
* [ICoreWebView2ServiceWorkerRegistration](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregistration?view=webview2-1.0.4022.49&preserve-view=true)
  * [ICoreWebView2ServiceWorkerRegistration::add_ServiceWorkerActivated](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregistration?view=webview2-1.0.4022.49&preserve-view=true#add_serviceworkeractivated)
  * [ICoreWebView2ServiceWorkerRegistration::add_Unregistering](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregistration?view=webview2-1.0.4022.49&preserve-view=true#add_unregistering)
  * [ICoreWebView2ServiceWorkerRegistration::get_ActiveServiceWorker](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregistration?view=webview2-1.0.4022.49&preserve-view=true#get_activeserviceworker)
  * [ICoreWebView2ServiceWorkerRegistration::get_Origin](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregistration?view=webview2-1.0.4022.49&preserve-view=true#get_origin)
  * [ICoreWebView2ServiceWorkerRegistration::get_ScopeUri](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregistration?view=webview2-1.0.4022.49&preserve-view=true#get_scopeuri)
  * [ICoreWebView2ServiceWorkerRegistration::get_TopLevelOrigin](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregistration?view=webview2-1.0.4022.49&preserve-view=true#get_toplevelorigin)
  * [ICoreWebView2ServiceWorkerRegistration::remove_ServiceWorkerActivated](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregistration?view=webview2-1.0.4022.49&preserve-view=true#remove_serviceworkeractivated)
  * [ICoreWebView2ServiceWorkerRegistration::remove_Unregistering](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregistration?view=webview2-1.0.4022.49&preserve-view=true#remove_unregistering)

<!-- win32 only -->
* [ICoreWebView2ServiceWorkerRegistrationCollectionView](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregistrationcollectionview?view=webview2-1.0.4022.49&preserve-view=true)
  * [ICoreWebView2ServiceWorkerRegistrationCollectionView::get_Count](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregistrationcollectionview?view=webview2-1.0.4022.49&preserve-view=true#get_count)
  * [ICoreWebView2ServiceWorkerRegistrationCollectionView::GetValueAtIndex](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregistrationcollectionview?view=webview2-1.0.4022.49&preserve-view=true#getvalueatindex)

<!-- win32 only -->
* [ICoreWebView2ServiceWorkerRegistrationUnregisteringEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregistrationunregisteringeventhandler?view=webview2-1.0.4022.49&preserve-view=true)

<!-- win32 only -->
* [ICoreWebView2ServiceWorkerWebMessageReceivedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerwebmessagereceivedeventhandler?view=webview2-1.0.4022.49&preserve-view=true)

<!-- 11 -->
* [ICoreWebView2SharedWorker](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworker?view=webview2-1.0.4022.49&preserve-view=true)
  * [ICoreWebView2SharedWorker::add_Destroying](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworker?view=webview2-1.0.4022.49&preserve-view=true#add_destroying)
  * [ICoreWebView2SharedWorker::get_Origin](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworker?view=webview2-1.0.4022.49&preserve-view=true#get_origin)
  * [ICoreWebView2SharedWorker::get_ScriptUri](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworker?view=webview2-1.0.4022.49&preserve-view=true#get_scripturi)
  * [ICoreWebView2SharedWorker::get_TopLevelOrigin](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworker?view=webview2-1.0.4022.49&preserve-view=true#get_toplevelorigin)
  * [ICoreWebView2SharedWorker::remove_Destroying](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworker?view=webview2-1.0.4022.49&preserve-view=true#remove_destroying)

<!-- win32 only -->
* [ICoreWebView2SharedWorkerCollectionView](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworkercollectionview?view=webview2-1.0.4022.49&preserve-view=true)
  * [ICoreWebView2SharedWorkerCollectionView::get_Count](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworkercollectionview?view=webview2-1.0.4022.49&preserve-view=true#get_count)
  * [ICoreWebView2SharedWorkerCollectionView::GetValueAtIndex](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworkercollectionview?view=webview2-1.0.4022.49&preserve-view=true#getvalueatindex)

<!-- 12 -->
* [ICoreWebView2SharedWorkerCreatedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworkercreatedeventargs?view=webview2-1.0.4022.49&preserve-view=true)
  * [ICoreWebView2SharedWorkerCreatedEventArgs::get_Worker](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworkercreatedeventargs?view=webview2-1.0.4022.49&preserve-view=true#get_worker)

<!-- win32 only -->
* [ICoreWebView2SharedWorkerCreatedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworkercreatedeventhandler?view=webview2-1.0.4022.49&preserve-view=true)

<!-- win32 only -->
* [ICoreWebView2SharedWorkerDestroyingEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworkerdestroyingeventhandler?view=webview2-1.0.4022.49&preserve-view=true)

<!-- 13 -->
* [ICoreWebView2SharedWorkerManager](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworkermanager?view=webview2-1.0.4022.49&preserve-view=true)
  * [ICoreWebView2SharedWorkerManager::add_SharedWorkerCreated](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworkermanager?view=webview2-1.0.4022.49&preserve-view=true#add_sharedworkercreated)
  * [ICoreWebView2SharedWorkerManager::GetSharedWorkers](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworkermanager?view=webview2-1.0.4022.49&preserve-view=true#getsharedworkers)
  * [ICoreWebView2SharedWorkerManager::remove_SharedWorkerCreated](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworkermanager?view=webview2-1.0.4022.49&preserve-view=true#remove_sharedworkercreated)

---


<!-- ------------------------------ -->
#### Bug fixes

This Release SDK includes the following bug fixes.


<!-- ---------- -->
###### Runtime-only

* Mapped `TERMINATION_STATUS_LAUNCH_FAILED_OS_POLICY` to `kLaunchFailed`.
* Updated the failure reason classification to `OOM`, for a process that's been killed to reclaim memory.
* Added trusted origin check during host object access.
* Fixed the **Print** dialog's dropdown lists not being selected in `WebView2CompositionControl`.  ([Issue #5195](https://github.com/MicrosoftEdge/WebView2Feedback/issues/5195))


<!-- ---------- -->
###### SDK-only

* Fixed container safety issues in WebView2 frame and listener code.

<!-- end of Release SDK 1.0.4022.49, for Runtime 149 (Jun. 11, 2026) -->


<!-- ====================================================================== -->
## Prerelease SDK 1.0.4015-prerelease, for Runtime 149 (May 11, 2026)

Release Date: May 11, 2026

[NuGet package for WebView2 SDK 1.0.4015-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.4015-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 149.0.4015.0 or later.


<!-- ------------------------------ -->
#### Breaking changes


<!-- ---------- -->
###### `EnhancedSecurityModeLevel` replaced by `EnhancedSecurityModeState`

The `CoreWebView2Profile.EnhancedSecurityModeLevel` property and the `CoreWebView2EnhancedSecurityModeLevel` enum are deprecated and will be removed in a future release.  Replace all usage of these APIs in your WebView2 application, as follows.

The old property, `CoreWebView2Profile.EnhancedSecurityModeLevel`, controlled whether Enhanced Security Mode (ESM) is enabled or disabled for all WebView2 instances associated with a profile.  This property has been renamed to `EnhancedSecurityModeState`, to more clearly communicate the state of Enhanced Security Mode.

**Before this change:** The `CoreWebView2Profile.EnhancedSecurityModeLevel` property used the `CoreWebView2EnhancedSecurityModeLevel` enum with values `Off` and `Strict`.

**After this change:** The `CoreWebView2Profile.EnhancedSecurityModeState` property uses the `CoreWebView2EnhancedSecurityModeState` enum with values `Disabled` and `Enabled`:

* `CoreWebView2EnhancedSecurityModeState.Disabled` — Enhanced Security Mode is disabled.
   * Replaces `CoreWebView2EnhancedSecurityModeLevel.Off`.

* `CoreWebView2EnhancedSecurityModeState.Enabled` — Enhanced Security Mode is enabled.
   * Disables JavaScript Just-in-Time (JIT) compilation.
   * Enables additional operating system protections.
   * Replaces `CoreWebView2EnhancedSecurityModeLevel.Strict`.

See also:
* [Enhanced security mode state](#enhanced-security-mode-state), below.
* [[Breaking Change] `EnhancedSecurityModeLevel` replaced by `EnhancedSecurityModeState` (Issue #132)](https://github.com/MicrosoftEdge/WebView2Announcements/issues/132)


<!-- ------------------------------ -->
#### Experimental APIs (Phase 1: Experimental in Prerelease)

The following APIs are in Phase 1: Experimental in Prerelease, and have been added in this Prerelease SDK.


<!-- ---------- -->
###### Enhanced security mode state

The `EnhancedSecurityModeState` property on `CoreWebView2Profile` controls whether Enhanced Security Mode (ESM) is enabled or disabled for all WebView2 instances that are associated with a profile.

When enabled, Enhanced Security Mode disables JavaScript Just-in-Time (JIT) compilation and enables additional operating system protections, reducing the attack surface, at the cost of some JavaScript performance.

The default value is `Disabled`.  Changes apply immediately to new navigations; existing pages require a reload.

This setting does not persist, and resets when the profile is destroyed and recreated.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2EnhancedSecurityModeState Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2enhancedsecuritymodestate?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * `Disabled`
   * `Enabled`

* `CoreWebView2Profile` Class
   * [CoreWebView2Profile.EnhancedSecurityModeState Property](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.enhancedsecuritymodestate?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2EnhancedSecurityModeState Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2enhancedsecuritymodestate?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true)
   * `Disabled`
   * `Enabled`

* `CoreWebView2Profile` Class
   * [CoreWebView2Profile.EnhancedSecurityModeState Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#enhancedsecuritymodestate)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalProfile17](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile17?view=webview2-1.0.4015-prerelease&preserve-view=true)
  * [ICoreWebView2ExperimentalProfile17::get_EnhancedSecurityModeState](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile17?view=webview2-1.0.4015-prerelease&preserve-view=true#get_enhancedsecuritymodestate)
  * [ICoreWebView2ExperimentalProfile17::put_EnhancedSecurityModeState](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile17?view=webview2-1.0.4015-prerelease&preserve-view=true#put_enhancedsecuritymodestate)

* [COREWEBVIEW2_ENHANCED_SECURITY_MODE_STATE enum](/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.4015-prerelease&preserve-view=true#corewebview2_enhanced_security_mode_state)
  * `COREWEBVIEW2_ENHANCED_SECURITY_MODE_STATE_DISABLED`
  * `COREWEBVIEW2_ENHANCED_SECURITY_MODE_STATE_ENABLED`

---


<!-- ------------------------------ -->
#### Promotions to Phase 2 (Stable in Prerelease)

The following APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, and are included in this Prerelease SDK.


<!-- ---------- -->
###### Enable background processing and offline support (WebView2 Worker APIs)

The WebView2 Worker APIs allow host applications to interact with Web Workers to offload tasks from the main thread, improve responsiveness, and support background operations.  These Web Workers include Dedicated Workers, Shared Workers, and Service Workers.

These APIs provide:
* **Lifecycle Events:** Monitor creation and destruction of workers.
* **Messaging Interfaces:** Communicate with workers using `PostMessage` and `WebMessageReceived`; specifically:
   * `CoreWebView2ServiceWorker.PostWebMessageAsJson`
   * `CoreWebView2ServiceWorker.PostWebMessageAsString`
   * `CoreWebView2DedicatedWorker.PostWebMessageAsJson`
   * `CoreWebView2DedicatedWorker.PostWebMessageAsString`
   * `CoreWebView2ServiceWorker.WebMessageReceived`
   * `CoreWebView2DedicatedWorker.WebMessageReceived`
   * `chrome.webview.postMessage`
   * Not: `chrome.webview.postMessageWithAdditionalObjects`
* **Worker Management:** Query and retrieve worker registrations and instances.

##### [.NET/C#](#tab/dotnetcsharp)

<!-- 1 -->
* `CoreWebView2` Class:
   * [CoreWebView2.DedicatedWorkerCreated Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.dedicatedworkercreated?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)

<!-- 2 -->
* [CoreWebView2DedicatedWorker Class](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworker?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2DedicatedWorker.DedicatedWorkerCreated Event](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworker.dedicatedworkercreated?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2DedicatedWorker.Destroying Event](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworker.destroying?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2DedicatedWorker.PostWebMessageAsJson Method](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworker.postwebmessageasjson?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2DedicatedWorker.PostWebMessageAsString Method](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworker.postwebmessageasstring?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2DedicatedWorker.ScriptUri Property](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworker.scripturi?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2DedicatedWorker.WebMessageReceived Event](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworker.webmessagereceived?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)

<!-- 3 -->
* [CoreWebView2DedicatedWorkerCreatedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworkercreatedeventargs?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2DedicatedWorkerCreatedEventArgs.OriginalSourceFrameInfo Property](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworkercreatedeventargs.originalsourceframeinfo?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2DedicatedWorkerCreatedEventArgs.Worker Property](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworkercreatedeventargs.worker?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)

<!-- 4 -->
* `CoreWebView2Frame` Class:
   * [CoreWebView2Frame.DedicatedWorkerCreated Event](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.dedicatedworkercreated?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)

<!-- 5 -->
* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.AreWebViewScriptApisEnabledForServiceWorkers Property](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.arewebviewscriptapisenabledforserviceworkers?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2Profile.ServiceWorkerManager Property](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.serviceworkermanager?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2Profile.SharedWorkerManager Property](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.sharedworkermanager?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)

<!-- 6 -->
* [CoreWebView2ServiceWorker Class](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworker?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorker.Destroying Event](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworker.destroying?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorker.PostWebMessageAsJson Method](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworker.postwebmessageasjson?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorker.PostWebMessageAsString Method](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworker.postwebmessageasstring?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorker.ScriptUri Property](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworker.scripturi?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorker.WebMessageReceived Event](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworker.webmessagereceived?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)

<!-- 7 -->
* [CoreWebView2ServiceWorkerActivatedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkeractivatedeventargs?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorkerActivatedEventArgs.ActiveServiceWorker Property](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkeractivatedeventargs.activeserviceworker?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)

<!-- 8 -->
* [CoreWebView2ServiceWorkerManager Class](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkermanager?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorkerManager.GetServiceWorkerRegistrationsAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkermanager.getserviceworkerregistrationsasync?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorkerManager.GetServiceWorkerRegistrationsAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkermanager.getserviceworkerregistrationsasync?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorkerManager.ServiceWorkerRegistered Event](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkermanager.serviceworkerregistered?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)

<!-- 9 -->
* [CoreWebView2ServiceWorkerRegisteredEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkerregisteredeventargs?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorkerRegisteredEventArgs.ServiceWorkerRegistration Property](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkerregisteredeventargs.serviceworkerregistration?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)

<!-- 10 -->
* [CoreWebView2ServiceWorkerRegistration Class](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkerregistration?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorkerRegistration.ActiveServiceWorker Property](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkerregistration.activeserviceworker?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorkerRegistration.Origin Property](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkerregistration.origin?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorkerRegistration.ScopeUri Property](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkerregistration.scopeuri?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorkerRegistration.ServiceWorkerActivated Event](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkerregistration.serviceworkeractivated?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorkerRegistration.TopLevelOrigin Property](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkerregistration.toplevelorigin?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorkerRegistration.Unregistering Event](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkerregistration.unregistering?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)

<!-- 11 -->
* [CoreWebView2SharedWorker Class](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworker?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2SharedWorker.Destroying Event](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworker.destroying?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2SharedWorker.Origin Property](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworker.origin?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2SharedWorker.ScriptUri Property](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworker.scripturi?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2SharedWorker.TopLevelOrigin Property](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworker.toplevelorigin?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)

<!-- 12 -->
* [CoreWebView2SharedWorkerCreatedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworkercreatedeventargs?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2SharedWorkerCreatedEventArgs.Worker Property](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworkercreatedeventargs.worker?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)

<!-- 13 -->
* [CoreWebView2SharedWorkerManager Class](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworkermanager?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2SharedWorkerManager.GetSharedWorkersAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworkermanager.getsharedworkersasync?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2SharedWorkerManager.SharedWorkerCreated Event](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworkermanager.sharedworkercreated?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

<!-- 1 -->
* `CoreWebView2` Class:
   * [CoreWebView2.DedicatedWorkerCreated Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#dedicatedworkercreated)

<!-- 2 -->
* [CoreWebView2DedicatedWorker Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworker?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2DedicatedWorker.DedicatedWorkerCreated Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworker?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#dedicatedworkercreated)
   * [CoreWebView2DedicatedWorker.Destroying Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworker?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#destroying)
   * [CoreWebView2DedicatedWorker.PostWebMessageAsJson Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworker?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#postwebmessageasjson)
   * [CoreWebView2DedicatedWorker.PostWebMessageAsString Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworker?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#postwebmessageasstring)
   * [CoreWebView2DedicatedWorker.ScriptUri Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworker?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#scripturi)
   * [CoreWebView2DedicatedWorker.WebMessageReceived Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworker?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#webmessagereceived)

<!-- 3 -->
* [CoreWebView2DedicatedWorkerCreatedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworkercreatedeventargs?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2DedicatedWorkerCreatedEventArgs.OriginalSourceFrameInfo Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworkercreatedeventargs?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#originalsourceframeinfo)
   * [CoreWebView2DedicatedWorkerCreatedEventArgs.Worker Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworkercreatedeventargs?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#worker)

<!-- 4 -->
* `CoreWebView2Frame` Class:
   * [CoreWebView2Frame.DedicatedWorkerCreated Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#dedicatedworkercreated)

<!-- 5 -->
* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.AreWebViewScriptApisEnabledForServiceWorkers Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#arewebviewscriptapisenabledforserviceworkers)
   * [CoreWebView2Profile.ServiceWorkerManager Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#serviceworkermanager)
   * [CoreWebView2Profile.SharedWorkerManager Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#sharedworkermanager)

<!-- 6 -->
* [CoreWebView2ServiceWorker Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworker?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorker.Destroying Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworker?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#destroying)
   * [CoreWebView2ServiceWorker.PostWebMessageAsJson Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworker?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#postwebmessageasjson)
   * [CoreWebView2ServiceWorker.PostWebMessageAsString Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworker?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#postwebmessageasstring)
   * [CoreWebView2ServiceWorker.ScriptUri Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworker?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#scripturi)
   * [CoreWebView2ServiceWorker.WebMessageReceived Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworker?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#webmessagereceived)

<!-- 7 -->
* [CoreWebView2ServiceWorkerActivatedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkeractivatedeventargs?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorkerActivatedEventArgs.ActiveServiceWorker Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkeractivatedeventargs?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#activeserviceworker)

<!-- 8 -->
* [CoreWebView2ServiceWorkerManager Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkermanager?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorkerManager.GetServiceWorkerRegistrationsAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkermanager?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#getserviceworkerregistrationsasync)
   * [CoreWebView2ServiceWorkerManager.GetServiceWorkerRegistrationsAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkermanager?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#getserviceworkerregistrationsasync)
   * [CoreWebView2ServiceWorkerManager.ServiceWorkerRegistered Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkermanager?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#serviceworkerregistered)

<!-- 9 -->
* [CoreWebView2ServiceWorkerRegisteredEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkerregisteredeventargs?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorkerRegisteredEventArgs.ServiceWorkerRegistration Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkerregisteredeventargs?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#serviceworkerregistration)

<!-- 10 -->
* [CoreWebView2ServiceWorkerRegistration Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkerregistration?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorkerRegistration.ActiveServiceWorker Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkerregistration?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#activeserviceworker)
   * [CoreWebView2ServiceWorkerRegistration.Origin Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkerregistration?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#origin)
   * [CoreWebView2ServiceWorkerRegistration.ScopeUri Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkerregistration?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#scopeuri)
   * [CoreWebView2ServiceWorkerRegistration.ServiceWorkerActivated Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkerregistration?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#serviceworkeractivated)
   * [CoreWebView2ServiceWorkerRegistration.TopLevelOrigin Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkerregistration?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#toplevelorigin)
   * [CoreWebView2ServiceWorkerRegistration.Unregistering Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkerregistration?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#unregistering)

<!-- 11 -->
* [CoreWebView2SharedWorker Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworker?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2SharedWorker.Destroying Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworker?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#destroying)
   * [CoreWebView2SharedWorker.Origin Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworker?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#origin)
   * [CoreWebView2SharedWorker.ScriptUri Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworker?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#scripturi)
   * [CoreWebView2SharedWorker.TopLevelOrigin Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworker?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#toplevelorigin)

<!-- 12 -->
* [CoreWebView2SharedWorkerCreatedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworkercreatedeventargs?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2SharedWorkerCreatedEventArgs.Worker Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworkercreatedeventargs?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#worker)

<!-- 13 -->
* [CoreWebView2SharedWorkerManager Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworkermanager?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2SharedWorkerManager.GetSharedWorkersAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworkermanager?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#getsharedworkersasync)
   * [CoreWebView2SharedWorkerManager.SharedWorkerCreated Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworkermanager?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#sharedworkercreated)

##### [Win32/C++](#tab/win32cpp)

<!-- 1 -->
* [ICoreWebView2_29](/microsoft-edge/webview2/reference/win32/icorewebview2_29?view=webview2-1.0.4015-prerelease&preserve-view=true)
  * [ICoreWebView2_29::add_DedicatedWorkerCreated](/microsoft-edge/webview2/reference/win32/icorewebview2_29?view=webview2-1.0.4015-prerelease&preserve-view=true#add_dedicatedworkercreated)
  * [ICoreWebView2_29::remove_DedicatedWorkerCreated](/microsoft-edge/webview2/reference/win32/icorewebview2_29?view=webview2-1.0.4015-prerelease&preserve-view=true#remove_dedicatedworkercreated)

<!-- 2 -->
* [ICoreWebView2DedicatedWorker](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworker?view=webview2-1.0.4015-prerelease&preserve-view=true)
  * [ICoreWebView2DedicatedWorker::add_DedicatedWorkerCreated](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworker?view=webview2-1.0.4015-prerelease&preserve-view=true#add_dedicatedworkercreated)
  * [ICoreWebView2DedicatedWorker::add_Destroying](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworker?view=webview2-1.0.4015-prerelease&preserve-view=true#add_destroying)
  * [ICoreWebView2DedicatedWorker::add_WebMessageReceived](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworker?view=webview2-1.0.4015-prerelease&preserve-view=true#add_webmessagereceived)
  * [ICoreWebView2DedicatedWorker::get_ScriptUri](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworker?view=webview2-1.0.4015-prerelease&preserve-view=true#get_scripturi)
  * [ICoreWebView2DedicatedWorker::PostWebMessageAsJson](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworker?view=webview2-1.0.4015-prerelease&preserve-view=true#postwebmessageasjson)
  * [ICoreWebView2DedicatedWorker::PostWebMessageAsString](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworker?view=webview2-1.0.4015-prerelease&preserve-view=true#postwebmessageasstring)
  * [ICoreWebView2DedicatedWorker::remove_DedicatedWorkerCreated](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworker?view=webview2-1.0.4015-prerelease&preserve-view=true#remove_dedicatedworkercreated)
  * [ICoreWebView2DedicatedWorker::remove_Destroying](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworker?view=webview2-1.0.4015-prerelease&preserve-view=true#remove_destroying)
  * [ICoreWebView2DedicatedWorker::remove_WebMessageReceived](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworker?view=webview2-1.0.4015-prerelease&preserve-view=true#remove_webmessagereceived)

<!-- 3 -->
* [ICoreWebView2DedicatedWorkerCreatedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworkercreatedeventargs?view=webview2-1.0.4015-prerelease&preserve-view=true)
  * [ICoreWebView2DedicatedWorkerCreatedEventArgs::get_OriginalSourceFrameInfo](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworkercreatedeventargs?view=webview2-1.0.4015-prerelease&preserve-view=true#get_originalsourceframeinfo)
  * [ICoreWebView2DedicatedWorkerCreatedEventArgs::get_Worker](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworkercreatedeventargs?view=webview2-1.0.4015-prerelease&preserve-view=true#get_worker)

<!-- win32 only -->
* [ICoreWebView2DedicatedWorkerCreatedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworkercreatedeventhandler?view=webview2-1.0.4015-prerelease&preserve-view=true)

<!-- win32 only -->
* [ICoreWebView2DedicatedWorkerDedicatedWorkerCreatedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworkerdedicatedworkercreatedeventhandler?view=webview2-1.0.4015-prerelease&preserve-view=true)

<!-- win32 only -->
* [ICoreWebView2DedicatedWorkerDestroyingEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworkerdestroyingeventhandler?view=webview2-1.0.4015-prerelease&preserve-view=true)

<!-- win32 only -->
* [ICoreWebView2DedicatedWorkerWebMessageReceivedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworkerwebmessagereceivedeventhandler?view=webview2-1.0.4015-prerelease&preserve-view=true)

<!-- 4 -->
* [ICoreWebView2Frame8](/microsoft-edge/webview2/reference/win32/icorewebview2frame8?view=webview2-1.0.4015-prerelease&preserve-view=true)
  * [ICoreWebView2Frame8::add_DedicatedWorkerCreated](/microsoft-edge/webview2/reference/win32/icorewebview2frame8?view=webview2-1.0.4015-prerelease&preserve-view=true#add_dedicatedworkercreated)
  * [ICoreWebView2Frame8::remove_DedicatedWorkerCreated](/microsoft-edge/webview2/reference/win32/icorewebview2frame8?view=webview2-1.0.4015-prerelease&preserve-view=true#remove_dedicatedworkercreated)

<!-- win32 only -->
* [ICoreWebView2FrameDedicatedWorkerCreatedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2framededicatedworkercreatedeventhandler?view=webview2-1.0.4015-prerelease&preserve-view=true)

<!-- win32 only -->
* [ICoreWebView2GetServiceWorkerRegistrationsCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2getserviceworkerregistrationscompletedhandler?view=webview2-1.0.4015-prerelease&preserve-view=true)

<!-- win32 only -->
* [ICoreWebView2GetSharedWorkersCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2getsharedworkerscompletedhandler?view=webview2-1.0.4015-prerelease&preserve-view=true)

<!-- 5 -->
* [ICoreWebView2Profile9](/microsoft-edge/webview2/reference/win32/icorewebview2profile9?view=webview2-1.0.4015-prerelease&preserve-view=true)
  * [ICoreWebView2Profile9::get_AreWebViewScriptApisEnabledForServiceWorkers](/microsoft-edge/webview2/reference/win32/icorewebview2profile9?view=webview2-1.0.4015-prerelease&preserve-view=true#get_arewebviewscriptapisenabledforserviceworkers)
  * [ICoreWebView2Profile9::get_ServiceWorkerManager](/microsoft-edge/webview2/reference/win32/icorewebview2profile9?view=webview2-1.0.4015-prerelease&preserve-view=true#get_serviceworkermanager)
  * [ICoreWebView2Profile9::get_SharedWorkerManager](/microsoft-edge/webview2/reference/win32/icorewebview2profile9?view=webview2-1.0.4015-prerelease&preserve-view=true#get_sharedworkermanager)
  * [ICoreWebView2Profile9::put_AreWebViewScriptApisEnabledForServiceWorkers](/microsoft-edge/webview2/reference/win32/icorewebview2profile9?view=webview2-1.0.4015-prerelease&preserve-view=true#put_arewebviewscriptapisenabledforserviceworkers)

<!-- 6 -->
* [ICoreWebView2ServiceWorker](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworker?view=webview2-1.0.4015-prerelease&preserve-view=true)
  * [ICoreWebView2ServiceWorker::add_Destroying](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworker?view=webview2-1.0.4015-prerelease&preserve-view=true#add_destroying)
  * [ICoreWebView2ServiceWorker::add_WebMessageReceived](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworker?view=webview2-1.0.4015-prerelease&preserve-view=true#add_webmessagereceived)
  * [ICoreWebView2ServiceWorker::get_ScriptUri](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworker?view=webview2-1.0.4015-prerelease&preserve-view=true#get_scripturi)
  * [ICoreWebView2ServiceWorker::PostWebMessageAsJson](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworker?view=webview2-1.0.4015-prerelease&preserve-view=true#postwebmessageasjson)
  * [ICoreWebView2ServiceWorker::PostWebMessageAsString](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworker?view=webview2-1.0.4015-prerelease&preserve-view=true#postwebmessageasstring)
  * [ICoreWebView2ServiceWorker::remove_Destroying](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworker?view=webview2-1.0.4015-prerelease&preserve-view=true#remove_destroying)
  * [ICoreWebView2ServiceWorker::remove_WebMessageReceived](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworker?view=webview2-1.0.4015-prerelease&preserve-view=true#remove_webmessagereceived)

<!-- 7 -->
* [ICoreWebView2ServiceWorkerActivatedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkeractivatedeventargs?view=webview2-1.0.4015-prerelease&preserve-view=true)
  * [ICoreWebView2ServiceWorkerActivatedEventArgs::get_ActiveServiceWorker](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkeractivatedeventargs?view=webview2-1.0.4015-prerelease&preserve-view=true#get_activeserviceworker)

<!-- win32 only -->
* [ICoreWebView2ServiceWorkerActivatedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkeractivatedeventhandler?view=webview2-1.0.4015-prerelease&preserve-view=true)

<!-- win32 only -->
* [ICoreWebView2ServiceWorkerDestroyingEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerdestroyingeventhandler?view=webview2-1.0.4015-prerelease&preserve-view=true)

<!-- 8 -->
* [ICoreWebView2ServiceWorkerManager](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkermanager?view=webview2-1.0.4015-prerelease&preserve-view=true)
  * [ICoreWebView2ServiceWorkerManager::add_ServiceWorkerRegistered](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkermanager?view=webview2-1.0.4015-prerelease&preserve-view=true#add_serviceworkerregistered)
  * [ICoreWebView2ServiceWorkerManager::GetServiceWorkerRegistrations](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkermanager?view=webview2-1.0.4015-prerelease&preserve-view=true#getserviceworkerregistrations)
  * [ICoreWebView2ServiceWorkerManager::GetServiceWorkerRegistrationsForScope](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkermanager?view=webview2-1.0.4015-prerelease&preserve-view=true#getserviceworkerregistrationsforscope)
  * [ICoreWebView2ServiceWorkerManager::remove_ServiceWorkerRegistered](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkermanager?view=webview2-1.0.4015-prerelease&preserve-view=true#remove_serviceworkerregistered)

<!-- 9 -->
* [ICoreWebView2ServiceWorkerRegisteredEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregisteredeventargs?view=webview2-1.0.4015-prerelease&preserve-view=true)
  * [ICoreWebView2ServiceWorkerRegisteredEventArgs::get_ServiceWorkerRegistration](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregisteredeventargs?view=webview2-1.0.4015-prerelease&preserve-view=true#get_serviceworkerregistration)

<!-- win32 only -->
* [ICoreWebView2ServiceWorkerRegisteredEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregisteredeventhandler?view=webview2-1.0.4015-prerelease&preserve-view=true)

<!-- 10 -->
* [ICoreWebView2ServiceWorkerRegistration](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregistration?view=webview2-1.0.4015-prerelease&preserve-view=true)
  * [ICoreWebView2ServiceWorkerRegistration::add_ServiceWorkerActivated](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregistration?view=webview2-1.0.4015-prerelease&preserve-view=true#add_serviceworkeractivated)
  * [ICoreWebView2ServiceWorkerRegistration::add_Unregistering](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregistration?view=webview2-1.0.4015-prerelease&preserve-view=true#add_unregistering)
  * [ICoreWebView2ServiceWorkerRegistration::get_ActiveServiceWorker](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregistration?view=webview2-1.0.4015-prerelease&preserve-view=true#get_activeserviceworker)
  * [ICoreWebView2ServiceWorkerRegistration::get_Origin](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregistration?view=webview2-1.0.4015-prerelease&preserve-view=true#get_origin)
  * [ICoreWebView2ServiceWorkerRegistration::get_ScopeUri](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregistration?view=webview2-1.0.4015-prerelease&preserve-view=true#get_scopeuri)
  * [ICoreWebView2ServiceWorkerRegistration::get_TopLevelOrigin](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregistration?view=webview2-1.0.4015-prerelease&preserve-view=true#get_toplevelorigin)
  * [ICoreWebView2ServiceWorkerRegistration::remove_ServiceWorkerActivated](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregistration?view=webview2-1.0.4015-prerelease&preserve-view=true#remove_serviceworkeractivated)
  * [ICoreWebView2ServiceWorkerRegistration::remove_Unregistering](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregistration?view=webview2-1.0.4015-prerelease&preserve-view=true#remove_unregistering)

<!-- win32 only -->
* [ICoreWebView2ServiceWorkerRegistrationCollectionView](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregistrationcollectionview?view=webview2-1.0.4015-prerelease&preserve-view=true)
  * [ICoreWebView2ServiceWorkerRegistrationCollectionView::get_Count](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregistrationcollectionview?view=webview2-1.0.4015-prerelease&preserve-view=true#get_count)
  * [ICoreWebView2ServiceWorkerRegistrationCollectionView::GetValueAtIndex](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregistrationcollectionview?view=webview2-1.0.4015-prerelease&preserve-view=true#getvalueatindex)

<!-- win32 only -->
* [ICoreWebView2ServiceWorkerRegistrationUnregisteringEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregistrationunregisteringeventhandler?view=webview2-1.0.4015-prerelease&preserve-view=true)

<!-- win32 only -->
* [ICoreWebView2ServiceWorkerWebMessageReceivedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerwebmessagereceivedeventhandler?view=webview2-1.0.4015-prerelease&preserve-view=true)

<!-- 11 -->
* [ICoreWebView2SharedWorker](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworker?view=webview2-1.0.4015-prerelease&preserve-view=true)
  * [ICoreWebView2SharedWorker::add_Destroying](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworker?view=webview2-1.0.4015-prerelease&preserve-view=true#add_destroying)
  * [ICoreWebView2SharedWorker::get_Origin](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworker?view=webview2-1.0.4015-prerelease&preserve-view=true#get_origin)
  * [ICoreWebView2SharedWorker::get_ScriptUri](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworker?view=webview2-1.0.4015-prerelease&preserve-view=true#get_scripturi)
  * [ICoreWebView2SharedWorker::get_TopLevelOrigin](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworker?view=webview2-1.0.4015-prerelease&preserve-view=true#get_toplevelorigin)
  * [ICoreWebView2SharedWorker::remove_Destroying](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworker?view=webview2-1.0.4015-prerelease&preserve-view=true#remove_destroying)

<!-- win32 only -->
* [ICoreWebView2SharedWorkerCollectionView](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworkercollectionview?view=webview2-1.0.4015-prerelease&preserve-view=true)
  * [ICoreWebView2SharedWorkerCollectionView::get_Count](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworkercollectionview?view=webview2-1.0.4015-prerelease&preserve-view=true#get_count)
  * [ICoreWebView2SharedWorkerCollectionView::GetValueAtIndex](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworkercollectionview?view=webview2-1.0.4015-prerelease&preserve-view=true#getvalueatindex)

<!-- 12 -->
* [ICoreWebView2SharedWorkerCreatedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworkercreatedeventargs?view=webview2-1.0.4015-prerelease&preserve-view=true)
  * [ICoreWebView2SharedWorkerCreatedEventArgs::get_Worker](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworkercreatedeventargs?view=webview2-1.0.4015-prerelease&preserve-view=true#get_worker)

<!-- win32 only -->
* [ICoreWebView2SharedWorkerCreatedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworkercreatedeventhandler?view=webview2-1.0.4015-prerelease&preserve-view=true)

<!-- win32 only -->
* [ICoreWebView2SharedWorkerDestroyingEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworkerdestroyingeventhandler?view=webview2-1.0.4015-prerelease&preserve-view=true)

<!-- 13 -->
* [ICoreWebView2SharedWorkerManager](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworkermanager?view=webview2-1.0.4015-prerelease&preserve-view=true)
  * [ICoreWebView2SharedWorkerManager::add_SharedWorkerCreated](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworkermanager?view=webview2-1.0.4015-prerelease&preserve-view=true#add_sharedworkercreated)
  * [ICoreWebView2SharedWorkerManager::GetSharedWorkers](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworkermanager?view=webview2-1.0.4015-prerelease&preserve-view=true#getsharedworkers)
  * [ICoreWebView2SharedWorkerManager::remove_SharedWorkerCreated](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworkermanager?view=webview2-1.0.4015-prerelease&preserve-view=true#remove_sharedworkercreated)

---


<!-- ------------------------------ -->
#### Bug fixes

This Prerelease SDK includes the following bug fixes.


<!-- ---------- -->
###### Runtime-only

* Fixed double character in UWP.
* Fixed the `Caption controls` background color setting API.  After this change, to close your app, the app will also need to intercept the `Close` call and handle the call itself.
* Fixed forwarding of network events for iframe, where the iframe had its own isolated CDP session.
* Improved error handling when Post Message (such as `CoreWebView2ServiceWorker.PostWebMessageAsJson` or `chrome.webview.postMessage`) is called on a service worker.
* Reduced string allocations in `GetDefaultHostAppExeName`.
* Fixed an updater issue where the currently used WebView2 Runtime is deleted after installing a new version, causing a crash during new controller creation in an already running app.

<!-- end of Prerelease SDK 1.0.4015-prerelease, for Runtime 149 (May 11, 2026) -->


<!-- ====================================================================== -->
## Release SDK 1.0.3967.48, for Runtime 148 (May 11, 2026)

Release Date: May 11, 2026

[NuGet package for WebView2 SDK 1.0.3967.48](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3967.48)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 148.0.3967.48 or later.


<!-- ------------------------------ -->
#### Promotions to Phase 3 (Stable in Release)

No additional APIs have been promoted from Phase 2: Stable in Prerelease, to Phase 3: Stable in Release, in this Release SDK.


<!-- ------------------------------ -->
#### Bug fixes

This Release SDK includes the following bug fixes.


<!-- ---------- -->
###### Runtime-only

* Fixed an updater issue where the currently used WebView2 Runtime is deleted after installing a new version, causing a crash during new controller creation in an already running app.

<!-- end of Release SDK 1.0.3967.48, for Runtime 148 (May 11, 2026) -->


<!-- ====================================================================== -->
## Prerelease SDK 1.0.3965-prerelease, for Runtime 148 (Apr. 13, 2026)

Release Date: April 13, 2026

[NuGet package for WebView2 SDK 1.0.3965-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3965-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 148.0.3965.0 or later.


<!-- ------------------------------ -->
#### Breaking changes


<!-- ---------- -->
###### Granular process failure reasons for the `ProcessFailed` event

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


<!-- ------------------------------ -->
#### Experimental APIs (Phase 1: Experimental in Prerelease)

The following APIs are in Phase 1: Experimental in Prerelease, and have been added in this Prerelease SDK.


<!-- ---------- -->
###### Origin Configuration API for WebView2

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


<!-- ------------------------------ -->
#### Phase 2 (Stable in Prerelease)

The following enum members are a modification of an existing stable API, and are available as part of this Prerelease SDK.


<!-- ---------- -->
###### Granular process failure reasons for the `ProcessFailed` event

Supplemented the `CoreWebView2ProcessFailedReason.Unexpected` enum member by adding more granular values, for the `CoreWebView2ProcessFailedReason` enum that's returned by the `CoreWebView2ProcessFailedEventArgs.Reason` property.

This is a breaking change; see [Granular process failure reasons for the `ProcessFailed` event](#granular-process-failure-reasons-for-the-processfailed-event), above.


<!-- ------------------------------ -->
#### Bug fixes

This Prerelease SDK includes the following bug fixes.


<!-- ---------- -->
###### Runtime and SDK

* Supplemented the `CoreWebView2ProcessFailedReason.Unexpected` enum member by adding more granular values, for the `CoreWebView2ProcessFailedReason` enum that's returned by the `CoreWebView2ProcessFailedEventArgs.Reason` property.  This is a breaking change.  See [Granular process failure reasons for the `ProcessFailed` event](#granular-process-failure-reasons-for-the-processfailed-event), above.


<!-- ---------- -->
###### Runtime-only

* Fixed **Print** dialog dropdown selection issues in `WebView2CompositionControl`.  ([Issue #5195](https://github.com/MicrosoftEdge/WebView2Feedback/issues/5195))

* Disabled the Domain Actions component for WebView2.

* Disabled `WebUSBDetector` notification for WebView2.

* Fixed stale `ICoreWebView2Profile3::get_PreferredTrackingPreventionLevel`.

* Fixed WDP clients being unable to connect to a remote debugging server.

* Fixed an issue for the WPF sample app, where closing the window left a lingering WPF process.


<!-- ---------- -->
###### SDK-only

* Enabled histogram logging for browser process crashes in WebView2.

<!-- end of Prerelease SDK 1.0.3965-prerelease, for Runtime 148 (Apr. 13, 2026) -->


<!-- ====================================================================== -->
## Release SDK 1.0.3912.50, for Runtime 147 (Apr. 13, 2026)

Release Date: Apr. 13, 2026

[NuGet package for WebView2 SDK 1.0.3912.50](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3912.50)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 147.0.3912.50 or later.


<!-- ------------------------------ -->
#### Promotions to Phase 3 (Stable in Release)

No additional APIs have been promoted from Phase 2: Stable in Prerelease, to Phase 3: Stable in Release, in this Release SDK.


<!-- ------------------------------ -->
#### Bug fixes

This Release SDK includes the following bug fixes.


<!-- ---------- -->
###### Runtime-only

* Disabled the Domain Actions component for WebView2.

* Fixed WDP clients being unable to connect to a remote debugging server.

<!-- end of Release SDK 1.0.3912.50, for Runtime 147 (Apr. 13, 2026) -->


<!-- ====================================================================== -->
## Prerelease SDK 1.0.3908-prerelease, for Runtime 147 (Mar. 16, 2026)

Release Date: Mar. 16, 2026

[NuGet package for WebView2 SDK 1.0.3908-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3908-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 147.0.3908.0 or later.


<!-- ------------------------------ -->
#### Experimental APIs (Phase 1: Experimental in Prerelease)

No Experimental APIs have been added in this Prerelease SDK.


<!-- ------------------------------ -->
#### Promotions to Phase 2 (Stable in Prerelease)

The following APIs skipped Phase 1: Experimental in Prerelease, and have been directly added to Phase 2: Stable in Prerelease, and are included in this Prerelease SDK.


<!-- ---------- -->
###### Manage persistent storage permissions for web content

The `PersistentStorage` permission allows a WebView2 app to handle requests from web content to persist data that's created by Storage APIs, service workers, and related technologies.  The `PersistentStorage` permission is an enum member in the `CoreWebView2PermissionKind` enum.

When this permission is granted, the browser doesn't evict stored data during low-disk-space scenarios.  This ensures reliable offline and caching behavior for the site.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2PermissionKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionkind?view=webview2-dotnet-1.0.3908-prerelease&preserve-view=true)
   * `PersistentStorage`

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2PermissionKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionkind?view=webview2-winrt-1.0.3908-prerelease&preserve-view=true)
   * `PersistentStorage`

##### [Win32/C++](#tab/win32cpp)

* [COREWEBVIEW2_PERMISSION_KIND enum](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.3908-prerelease&preserve-view=true#corewebview2_permission_kind)
   * `COREWEBVIEW2_PERMISSION_KIND_PERSISTENT_STORAGE`

---


<!-- ------------------------------ -->
#### Bug fixes

This Prerelease SDK includes the following bug fixes.


<!-- ---------- -->
###### Runtime-only

* Fixed a bug where disconnecting a screen didn't change the screen resolution correctly.

* Fixed per-monitor DPI in `window.getScreenDetails()`.  ([Issue #4826](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4826))

* Disabled the domain actions component for WebView2.

* Fixed Print-to-PDF API failure when printing PDFs.  ([Issue #5499](https://github.com/MicrosoftEdge/WebView2Feedback/issues/5499))

* Fixed an issue causing Narrator to announce the structural `HWND`, which doesn't have any UI.

* Fixed WebView2 transparency.

* Fixed the API for setting the background color of the **Caption** control.
<!-- later wording:
* Fixed the `Caption controls` background color setting API.  After this change, to close your app, the app will also need to intercept the `Close` call and handle the call itself.
-->

<!-- end of Prerelease SDK 1.0.3908-prerelease, for Runtime 147 (Mar. 16, 2026) -->


<!-- ====================================================================== -->
## Release SDK 1.0.3856.49, for Runtime 146 (Mar. 16, 2026)

Release Date: Mar. 16, 2026

[NuGet package for WebView2 SDK 1.0.3856.49](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3856.49)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 146.0.3856.49 or later.


<!-- ------------------------------ -->
#### Promotions to Phase 3 (Stable in Release)

No additional APIs have been promoted from Phase 2: Stable in Prerelease, to Phase 3: Stable in Release, in this Release SDK.


<!-- ------------------------------ -->
#### Bug fixes

This Release SDK includes the following bug fixes.


<!-- ---------- -->
###### Runtime-only

* Fixed Print-to-PDF API failure when printing PDFs.  ([Issue #5499](https://github.com/MicrosoftEdge/WebView2Feedback/issues/5499))

<!-- end of Release SDK 1.0.3856.49, for Runtime 146 (Mar. 16, 2026) -->


<!-- ====================================================================== -->
## Prerelease SDK 1.0.3848-prerelease, for Runtime 146 (Feb. 16, 2026)

Release Date: Feb. 16, 2026

[NuGet package for WebView2 SDK 1.0.3848-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3848-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 146.0.3848.0 or later.


<!-- ------------------------------ -->
#### Breaking changes


<!-- ---------- -->
###### Enable WebView2-specific Javascript APIs for service workers

The new `AreWebViewScriptApisEnabledForServiceWorkers` setting provides an explicit and reliable way to control the availability of WebView2‑specific JavaScript APIs (`chrome.webview`) within service worker scripts.

This setting is disabled by default for WebView2 applications.  Apps that don't explicitly enable this setting won't have access to WebView2‑specific JavaScript APIs in service worker scripts.  As a result, service worker–based `chrome.webview.postMessage` communication with the WebView2 host application will not function unless the setting is enabled.

Going forward, WebView2 will rely on the `AreWebViewScriptApisEnabledForServiceWorkers` setting as the authoritative mechanism for enabling WebView2‑specific JavaScript APIs in service worker scripts.  This ensures predictable, secure, and deterministic behavior.

You can proactively validate your WebView2 app's behavior by enabling service worker JavaScript API exposure in your WebView2 app.
To do so, configure your app to enable the following setting:

```
AreWebViewScriptApisEnabledForServiceWorkers = true
```

By testing your WebView2 app with this setting enabled, you can identify any workflows that depend on WebView2‑specific service worker APIs, such as `chrome.webview.postMessage` communication between service workers and the host application.

Currently, the `chrome` and `chrome.webview` objects are available to service worker scripts when using the `ServiceWorkerRegistered` event.  However, starting with the next release, the `AreWebViewScriptApisEnabledForServiceWorkers` setting will be the sole mechanism that determines whether these objects are exposed to service worker scripts.  Please test this setting before the next release, and report any issues you encounter.  For details, see [[Breaking Change] Enabling WebView2 specific JavaScript API's for Service Workers](https://github.com/MicrosoftEdge/WebView2Announcements/issues/127).

See also [Control whether WebView Script APIs are enabled for service workers](#control-whether-webview-script-apis-are-enabled-for-service-workers), below.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2Profile` Class
   * [CoreWebView2Profile.AreWebViewScriptApisEnabledForServiceWorkers Property](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.arewebviewscriptapisenabledforserviceworkers?view=webview2-dotnet-1.0.3848-prerelease&preserve-view=true)

* `CoreWebView2ServiceWorkerManager` Class:
   * [CoreWebView2ServiceWorkerManager.ServiceWorkerRegistered Event](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkermanager.serviceworkerregistered?view=webview2-dotnet-1.0.3848-prerelease&preserve-view=true)

* [WebView class](../reference/javascript/webview.yml) in the JavaScript Reference.

* [`chrome.webview.postMessage`](../reference/javascript/webview.yml#webview2script-webview-postmessage-member(1)) in the JavaScript Reference.

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2Profile` Class
   * [CoreWebView2Profile.AreWebViewScriptApisEnabledForServiceWorkers Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.3848-prerelease&preserve-view=true#arewebviewscriptapisenabledforserviceworkers)

* `CoreWebView2ServiceWorkerManager` Class:
   * [CoreWebView2ServiceWorkerManager.ServiceWorkerRegistered Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkermanager?view=webview2-winrt-1.0.3848-prerelease&preserve-view=true#serviceworkerregistered)

* [WebView class](../reference/javascript/webview.yml) in the JavaScript Reference.

* [`chrome.webview.postMessage`](../reference/javascript/webview.yml#webview2script-webview-postmessage-member(1)) in the JavaScript Reference.

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalProfile15](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile15?view=webview2-1.0.3848-prerelease&preserve-view=true)
  * [ICoreWebView2ExperimentalProfile15::get_AreWebViewScriptApisEnabledForServiceWorkers](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile15?view=webview2-1.0.3848-prerelease&preserve-view=true#get_arewebviewscriptapisenabledforserviceworkers)
  * [ICoreWebView2ExperimentalProfile15::put_AreWebViewScriptApisEnabledForServiceWorkers](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile15?view=webview2-1.0.3848-prerelease&preserve-view=true#put_arewebviewscriptapisenabledforserviceworkers)

* `ICoreWebView2ExperimentalServiceWorkerManager`
   * [ICoreWebView2ExperimentalServiceWorkerManager::add_ServiceWorkerRegistered](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkermanager?view=webview2-1.0.3848-prerelease&preserve-view=true#add_serviceworkerregistered)

* [WebView class](../reference/javascript/webview.yml) in the JavaScript Reference.

* [`chrome.webview.postMessage`](../reference/javascript/webview.yml#webview2script-webview-postmessage-member(1)) in the JavaScript Reference.

---


<!-- ---------- -->
###### Local Network Access (LNA) in WebView2

The Chromium browser engine has introduced Local Network Access (LNA).  LNA is a security feature that prevents web pages from making requests to private or local network resources, unless the webpage has explicit permission to access the private or local network resources.  Examples of such resources are `localhost`, `192.168.*`, or `10.*`.

LNA is currently disabled by default for WebView2 apps, but you can enable LNA support via the `msWebViewAllowLocalNetworkAccessChecks` flag.  For WebView2 apps, no action is required at this time.  For information about the flag, see [Available WebView2 browser flags](../concepts/webview-features-flags.md#available-webview2-browser-flags) in _WebView2 browser flags_.

After the upstream, Chromium code base stabilizes, we plan to add additional enum values in the `CoreWebView2PermissionKind` enum, to support LNA via the `SetPermissionState` method.  These new enum values will be used by the UWP `WebView.PermissionRequested` event, to give your WebView2 app explicit control over the Local Network Access (LNA) feature.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.SetPermissionStateAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.setpermissionstateasync?view=webview2-dotnet-1.0.3848-prerelease&preserve-view=true)

* [CoreWebView2PermissionKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionkind?view=webview2-dotnet-1.0.3848-prerelease&preserve-view=true)

* [WebView.PermissionRequested Event](/uwp/api/windows.ui.xaml.controls.webview.permissionrequested) - UWP.

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.SetPermissionStateAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.3848-prerelease&preserve-view=true#setpermissionstateasync)

* [CoreWebView2PermissionKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionkind?view=webview2-winrt-1.0.3848-prerelease&preserve-view=true)

* [WebView.PermissionRequested Event](/uwp/api/windows.ui.xaml.controls.webview.permissionrequested) - UWP.

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2Profile4`:
   * [ICoreWebView2Profile4::SetPermissionState](/microsoft-edge/webview2/reference/win32/icorewebview2profile4?view=webview2-1.0.3848-prerelease&preserve-view=true#setpermissionstate)

* [COREWEBVIEW2_PERMISSION_KIND enum](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.3848-prerelease&preserve-view=true#corewebview2_permission_kind)

* [WebView.PermissionRequested Event](/uwp/api/windows.ui.xaml.controls.webview.permissionrequested) - UWP.

---

You can proactively test the Local Network Access (LNA) feature in your WebView2 app.  To test your app with the LNA feature, launch your WebView2 app with the following flag:

```
--enable-features=LocalNetworkAccessChecks,msWebViewAllowLocalNetworkAccessChecks
```

By testing your app when launched with this flag, you can then identify any workflows that might be affected by the LNA feature.

After the LNA feature stabilizes, we'll share an updated timeline for enabling the LNA feature.  For details, see [[Breaking Change] Local Network Access (LNA) in WebView2 - Rollout Plan](https://github.com/MicrosoftEdge/WebView2Announcements/issues/126).


<!-- ------------------------------ -->
#### Experimental APIs (Phase 1: Experimental in Prerelease)

The following APIs are in Phase 1: Experimental in Prerelease, and have been added in this Prerelease SDK.


<!-- ---------- -->
###### Control whether WebView Script APIs are enabled for service workers

Use the `AreWebViewScriptApisEnabledForServiceWorkers` property on `CoreWebView2Profile` to control whether WebView Script APIs are enabled for service workers.

See also [Enable WebView2-specific Javascript APIs for service workers](#enable-webview2-specific-javascript-apis-for-service-workers), above.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2Profile` Class
   * [CoreWebView2Profile.AreWebViewScriptApisEnabledForServiceWorkers Property](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.arewebviewscriptapisenabledforserviceworkers?view=webview2-dotnet-1.0.3848-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2Profile` Class
   * [CoreWebView2Profile.AreWebViewScriptApisEnabledForServiceWorkers Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.3848-prerelease&preserve-view=true#arewebviewscriptapisenabledforserviceworkers)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalProfile15](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile15?view=webview2-1.0.3848-prerelease&preserve-view=true)
  * [ICoreWebView2ExperimentalProfile15::get_AreWebViewScriptApisEnabledForServiceWorkers](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile15?view=webview2-1.0.3848-prerelease&preserve-view=true#get_arewebviewscriptapisenabledforserviceworkers)
  * [ICoreWebView2ExperimentalProfile15::put_AreWebViewScriptApisEnabledForServiceWorkers](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile15?view=webview2-1.0.3848-prerelease&preserve-view=true#put_arewebviewscriptapisenabledforserviceworkers)

---


<!-- ------------------------------ -->
#### Promotions to Phase 2 (Stable in Prerelease)

No APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, in this Prerelease SDK.


<!-- ------------------------------ -->
#### Bug fixes

This Prerelease SDK includes the following bug fixes.


<!-- ---------- -->
###### Runtime-only

* Fixed the PDF toolbar disappearing when all options in a region are removed.  ([Issue #4738](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4738))

* Fixed a white flash that occurred when Windows Search became visible after being hidden.

* Fixed the title bar shadow so that it's not displayed in a transparent WebView2 control.  ([Issue #5492](https://github.com/MicrosoftEdge/WebView2Feedback/issues/5492))

* Fixed WebView2 transparency.

* Fixed a Local Network Access (LNA) prompts issue, by disabling LNA checks in WebView2.

<!-- end of Prerelease SDK 1.0.3848-prerelease, for Runtime 146 (Feb. 16, 2026) -->


<!-- ====================================================================== -->
## Release SDK 1.0.3800.47, for Runtime 145 (Feb. 16, 2026)

Release Date: Feb. 16, 2026

[NuGet package for WebView2 SDK 1.0.3800.47](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3800.47)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 145.0.3800.47 or later.


<!-- ------------------------------ -->
#### Promotions to Phase 3 (Stable in Release)

No additional APIs have been promoted from Phase 2: Stable in Prerelease, to Phase 3: Stable in Release, in this Release SDK.


<!-- ------------------------------ -->
#### Bug fixes

This Release SDK includes the following bug fixes.


<!-- ---------- -->
###### Runtime-only

* Fixed the title bar shadow so that it's not displayed in a transparent WebView2 control.  ([Issue #5492](https://github.com/MicrosoftEdge/WebView2Feedback/issues/5492))

* Fixed a Local Network Access (LNA) prompts issue, by disabling LNA checks in WebView2.

* Fixed WebView2 transparency.

<!-- end of Release SDK 1.0.3800.47, for Runtime 145 (Feb. 16, 2026) -->


<!-- ====================================================================== -->
## Prerelease SDK 1.0.3796-prerelease, for Runtime 145 (Jan. 19, 2026)

Release Date: Jan. 19, 2026

[NuGet package for WebView2 SDK 1.0.3796-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3796-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 145.0.3796.0 or later.


<!-- ------------------------------ -->
#### Experimental APIs (Phase 1: Experimental in Prerelease)

The following APIs are in Phase 1: Experimental in Prerelease, and have been added in this Prerelease SDK.


<!-- ---------- -->
###### Enhanced Security Mode Level

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


<!-- ------------------------------ -->
#### Promotions to Phase 2 (Stable in Prerelease)

No APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, in this Prerelease SDK.


<!-- ------------------------------ -->
#### Bug fixes

This Prerelease SDK includes the following bug fixes.


<!-- ---------- -->
###### Runtime-only

* Fixed `chrome.webview` unavailability.
* Disabled background update of network time.


<!-- ---------- -->
###### SDK-only

* Added the article [Performance best practices for WebView2 apps](../concepts/performance.md), about how to improve the startup speed, memory usage, and responsiveness of a WebView2 app.

<!-- end of Prerelease SDK 1.0.3796-prerelease, for Runtime 145 (Jan. 19, 2026) -->


<!-- ====================================================================== -->
## Release SDK 1.0.3719.77, for Runtime 144 (Jan. 27, 2026)

Release Date: Jan. 27, 2026

[NuGet package for WebView2 SDK 1.0.3719.77](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3719.77)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 144.0.3719.77 or later.


<!-- ------------------------------ -->
#### Promotions to Phase 3 (Stable in Release)

The following APIs have been promoted from Phase 2: Stable in Prerelease, to Phase 3: Stable in Release, and are now included in this Release SDK.


<!-- ---------- -->
###### Customize the drag and drop behavior (DragStarting API)

The `DragStarting` API overrides the default drag and drop behavior when running in visual hosting mode.  The `DragStarting` event notifies your app when the user starts a drag operation in the WebView2, and provides the state that's necessary to override the default WebView2 drag operation with your own logic.

* Use `DragStarting` on the `ICoreWebView2CompositionController5` to add an event handler that's invoked when the drag operation is starting.
* Use `ICoreWebView2DragStartingEventArgs` to start your own drag operation.
   * Use the `GetDeferral` method to execute any async drag logic and call back into the WebView at a later time.
   * Use the `Handled` property to let the WebView2 know whether to use its own drag logic.

##### [.NET/C#](#tab/dotnetcsharp)

N/A

##### [WinRT/C#](#tab/winrtcsharp)

N/A

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2CompositionController5](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller5?view=webview2-1.0.3719.77&preserve-view=true)
  * [ICoreWebView2CompositionController5::add_DragStarting](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller5?view=webview2-1.0.3719.77&preserve-view=true#add_dragstarting)
  * [ICoreWebView2CompositionController5::remove_DragStarting](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller5?view=webview2-1.0.3719.77&preserve-view=true#remove_dragstarting)

<!-- exception: rt interop docs -->
* [ICoreWebView2CompositionControllerInterop3](/microsoft-edge/webview2/reference/winrt/interop/icorewebview2compositioncontrollerinterop3?view=webview2-winrt-1.0.3719.77&preserve-view=true)
  * [ICoreWebView2CompositionControllerInterop3::add_DragStarting](/microsoft-edge/webview2/reference/winrt/interop/icorewebview2compositioncontrollerinterop3?view=webview2-winrt-1.0.3719.77&preserve-view=true#add_dragstarting)
  * [ICoreWebView2CompositionControllerInterop3::remove_DragStarting](/microsoft-edge/webview2/reference/winrt/interop/icorewebview2compositioncontrollerinterop3?view=webview2-winrt-1.0.3719.77&preserve-view=true#remove_dragstarting)

* [ICoreWebView2DragStartingEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2dragstartingeventargs?view=webview2-1.0.3719.77&preserve-view=true)
  * [ICoreWebView2DragStartingEventArgs::get_AllowedDropEffects](/microsoft-edge/webview2/reference/win32/icorewebview2dragstartingeventargs?view=webview2-1.0.3719.77&preserve-view=true#get_alloweddropeffects)
  * [ICoreWebView2DragStartingEventArgs::get_Data](/microsoft-edge/webview2/reference/win32/icorewebview2dragstartingeventargs?view=webview2-1.0.3719.77&preserve-view=true#get_data)
  * [ICoreWebView2DragStartingEventArgs::get_Handled](/microsoft-edge/webview2/reference/win32/icorewebview2dragstartingeventargs?view=webview2-1.0.3719.77&preserve-view=true#get_handled)
  * [ICoreWebView2DragStartingEventArgs::get_Position](/microsoft-edge/webview2/reference/win32/icorewebview2dragstartingeventargs?view=webview2-1.0.3719.77&preserve-view=true#get_position)
  * [ICoreWebView2DragStartingEventArgs::GetDeferral](/microsoft-edge/webview2/reference/win32/icorewebview2dragstartingeventargs?view=webview2-1.0.3719.77&preserve-view=true#getdeferral)
  * [ICoreWebView2DragStartingEventArgs::put_Handled](/microsoft-edge/webview2/reference/win32/icorewebview2dragstartingeventargs?view=webview2-1.0.3719.77&preserve-view=true#put_handled)

* [ICoreWebView2DragStartingEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2dragstartingeventhandler?view=webview2-1.0.3719.77&preserve-view=true)

---


<!-- ------------------------------ -->
#### Bug fixes

This Release SDK includes the following bug fixes.


<!-- ---------- -->
###### Runtime-only

* Fixed `chrome.webview` unavailability.


<!-- ---------- -->
###### SDK-only

* Added the article [Performance best practices for WebView2 apps](../concepts/performance.md), about how to improve the startup speed, memory usage, and responsiveness of a WebView2 app.

<!-- end of Release SDK 1.0.3719.77, for Runtime 144 (Jan. 27, 2026) -->


<!-- ====================================================================== -->
## Prerelease SDK 1.0.3712-prerelease, for Runtime 144 (Dec. 8, 2025)

Release Date: Dec. 8, 2025

[NuGet package for WebView2 SDK 1.0.3712-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3712-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 144.0.3712.0 or later.


<!-- ------------------------------ -->
#### Experimental APIs (Phase 1: Experimental in Prerelease)

The following APIs are in Phase 1: Experimental in Prerelease, and have been added in this Prerelease SDK.


<!-- ---------- -->
###### Customize port range behavior

The Allowed Port Range APIs enable restricting or customizing the network port ranges that WebView2 can use for various transport protocols and scopes.  This provides enhanced security control.

* Use `SetAllowedPortRange` on the `CoreWebView2EnvironmentOptions` (or `ICoreWebView2ExperimentalEnvironmentOptions`) instance to configure port restrictions during environment creation.

   * Use the `scope` parameter to specify whether the configuration applies to all components (`Default`) or only to WebRTC peer-to-peer connections (`WebRtc`).  Currently only `WebRtc` is supported.

   * Use the `protocol` parameter to specify the transport protocol (currently supports `Udp`).

   * Specify `minPort` and `maxPort` values between 1025-65535 (inclusive), or use (0,0) to reset/remove restrictions.

* Use `GetEffectiveAllowedPortRange` on the `CoreWebView2EnvironmentOptions` (or `ICoreWebView2ExperimentalEnvironmentOptions`) instance to retrieve the active port range configuration for a specific scope and protocol.

   * Returns the explicitly set range for the given scope, or inherits from the `Default` scope if not set.

   * Returns (0,0) if no restrictions are configured for the specified scope.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2EnvironmentOptions` Class
   * [CoreWebView2EnvironmentOptions.GetEffectiveAllowedPortRange Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.geteffectiveallowedportrange?view=webview2-dotnet-1.0.3712-prerelease&preserve-view=true)
   * [CoreWebView2EnvironmentOptions.SetAllowedPortRange Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.setallowedportrange?view=webview2-dotnet-1.0.3712-prerelease&preserve-view=true)

* [CoreWebView2AllowedPortRangeScope Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2allowedportrangescope?view=webview2-dotnet-1.0.3712-prerelease&preserve-view=true)
   * `CoreWebView2AllowedPortRangeScope.Default`
   * `CoreWebView2AllowedPortRangeScope.WebRtc`

* [CoreWebView2TransportProtocolKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2transportprotocolkind?view=webview2-dotnet-1.0.3712-prerelease&preserve-view=true)
   * `CoreWebView2TransportProtocolKind.Udp`

##### [WinRT/C#](#tab/winrtcsharp)

N/A

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalEnvironmentOptions](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironmentoptions?view=webview2-1.0.3712-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalEnvironmentOptions::GetEffectiveAllowedPortRange](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironmentoptions?view=webview2-1.0.3712-prerelease&preserve-view=true#geteffectiveallowedportrange)
   * [ICoreWebView2ExperimentalEnvironmentOptions::SetAllowedPortRange](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironmentoptions?view=webview2-1.0.3712-prerelease&preserve-view=true#setallowedportrange)

* [COREWEBVIEW2_ALLOWED_PORT_RANGE_SCOPE Enum](/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.3712-prerelease&preserve-view=true#corewebview2_allowed_port_range_scope)
  * `COREWEBVIEW2_ALLOWED_PORT_RANGE_SCOPE_DEFAULT`
  * `COREWEBVIEW2_ALLOWED_PORT_RANGE_SCOPE_WEB_RTC`

* [COREWEBVIEW2_TRANSPORT_PROTOCOL_KIND enum](/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.3712-prerelease&preserve-view=true#corewebview2_transport_protocol_kind)
  * `COREWEBVIEW2_TRANSPORT_PROTOCOL_KIND_UDP`

---


<!-- ------------------------------ -->
#### Promotions to Phase 2 (Stable in Prerelease)

The following APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, and are included in this Prerelease SDK.


<!-- ---------- -->
###### Customize the drag and drop behavior (DragStarting API)

The `DragStarting` API overrides the default drag and drop behavior when running in visual hosting mode.  The `DragStarting` event notifies your app when the user starts a drag operation in the WebView2, and provides the state that's necessary to override the default WebView2 drag operation with your own logic.

* Use `DragStarting` on the `ICoreWebView2CompositionController5` to add an event handler that's invoked when the drag operation is starting.
* Use `ICoreWebView2DragStartingEventArgs` to start your own drag operation.
   * Use the `GetDeferral` method to execute any async drag logic and call back into the WebView at a later time.
   * Use the `Handled` property to let the WebView2 know whether to use its own drag logic.

##### [.NET/C#](#tab/dotnetcsharp)

N/A

##### [WinRT/C#](#tab/winrtcsharp)

N/A

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2CompositionController5](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller5?view=webview2-1.0.3712-prerelease&preserve-view=true)
  * [ICoreWebView2CompositionController5::add_DragStarting](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller5?view=webview2-1.0.3712-prerelease&preserve-view=true#add_dragstarting)
  * [ICoreWebView2CompositionController5::remove_DragStarting](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller5?view=webview2-1.0.3712-prerelease&preserve-view=true#remove_dragstarting)

<!-- exception: rt interop docs -->
* [ICoreWebView2CompositionControllerInterop3](/microsoft-edge/webview2/reference/winrt/interop/icorewebview2compositioncontrollerinterop3?view=webview2-winrt-1.0.3712-prerelease&preserve-view=true)
  * [ICoreWebView2CompositionControllerInterop3::add_DragStarting](/microsoft-edge/webview2/reference/winrt/interop/icorewebview2compositioncontrollerinterop3?view=webview2-winrt-1.0.3712-prerelease&preserve-view=true#add_dragstarting)
  * [ICoreWebView2CompositionControllerInterop3::remove_DragStarting](/microsoft-edge/webview2/reference/winrt/interop/icorewebview2compositioncontrollerinterop3?view=webview2-winrt-1.0.3712-prerelease&preserve-view=true#remove_dragstarting)

* [ICoreWebView2DragStartingEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2dragstartingeventargs?view=webview2-1.0.3712-prerelease&preserve-view=true)
  * [ICoreWebView2DragStartingEventArgs::get_AllowedDropEffects](/microsoft-edge/webview2/reference/win32/icorewebview2dragstartingeventargs?view=webview2-1.0.3712-prerelease&preserve-view=true#get_alloweddropeffects)
  * [ICoreWebView2DragStartingEventArgs::get_Data](/microsoft-edge/webview2/reference/win32/icorewebview2dragstartingeventargs?view=webview2-1.0.3712-prerelease&preserve-view=true#get_data)
  * [ICoreWebView2DragStartingEventArgs::get_Handled](/microsoft-edge/webview2/reference/win32/icorewebview2dragstartingeventargs?view=webview2-1.0.3712-prerelease&preserve-view=true#get_handled)
  * [ICoreWebView2DragStartingEventArgs::get_Position](/microsoft-edge/webview2/reference/win32/icorewebview2dragstartingeventargs?view=webview2-1.0.3712-prerelease&preserve-view=true#get_position)
  * [ICoreWebView2DragStartingEventArgs::GetDeferral](/microsoft-edge/webview2/reference/win32/icorewebview2dragstartingeventargs?view=webview2-1.0.3712-prerelease&preserve-view=true#getdeferral)
  * [ICoreWebView2DragStartingEventArgs::put_Handled](/microsoft-edge/webview2/reference/win32/icorewebview2dragstartingeventargs?view=webview2-1.0.3712-prerelease&preserve-view=true#put_handled)

* [ICoreWebView2DragStartingEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2dragstartingeventhandler?view=webview2-1.0.3712-prerelease&preserve-view=true)

---

<!-- ------------------------------ -->
#### Bug fixes

This Prerelease SDK includes the following bug fixes.

<!-- ---------- -->
###### Runtime-only

* Fixed local network access triggering a permission alert pop-up window.<!-- fixed regression; this fix was listed previously -->
* Fixed a regression of the `setColorScheme` API.
* Fixed deferred initialization for `ICoreWebView2NewWindowRequestedEventArgs` for the command-line switch `enable-new-window-requested-deferred-initialization`.

<!-- end of Prerelease SDK 1.0.3712-prerelease, for Runtime 144 (Dec. 8, 2025) -->


<!-- ====================================================================== -->
## Release SDK 1.0.3650.58, for Runtime 143 (Dec. 8, 2025)

Release Date: Dec. 8, 2025

[NuGet package for WebView2 SDK 1.0.3650.58](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3650.58)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 143.0.3650.58 or later.


<!-- ------------------------------ -->
#### Promotions to Phase 3 (Stable in Release)

No additional APIs have been promoted from Phase 2: Stable in Prerelease, to Phase 3: Stable in Release, in this Release SDK.


<!-- ------------------------------ -->
#### Bug fixes

###### Runtime-only

* Fixed local network access triggering a permission alert pop-up window.<!-- fixed regression; this fix was listed previously -->

<!-- end of Release SDK 1.0.3650.58, for Runtime 143 (Dec. 8, 2025) -->


<!-- ====================================================================== -->
## Prerelease SDK 1.0.3650-prerelease, for Runtime 143 (Nov. 7, 2025)

Release Date: Nov. 7, 2025

[NuGet package for WebView2 SDK 1.0.3650-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3650-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 143.0.3650.0 or later.


<!-- ------------------------------ -->
#### Experimental APIs (Phase 1: Experimental in Prerelease)

No Experimental APIs have been added in this Prerelease SDK.


<!-- ------------------------------ -->
#### Promotions to Phase 2 (Stable in Prerelease)

No APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, in this Prerelease SDK.


<!-- ------------------------------ -->
#### Bug fixes

This Prerelease SDK includes the following bug fixes.


<!-- ---------- -->
###### Runtime-only

* Disabled creation of a "Speculative Renderer" process.
* Fixed a **Find** dialog synchronization issue while programmatically doing a Find.

<!-- end of Prerelease SDK 1.0.3650-prerelease, for Runtime 143 (Nov. 7, 2025) -->


<!-- ====================================================================== -->
## Release SDK 1.0.3595.46, for Runtime 142 (Nov. 3, 2025)

Release Date: Nov. 3, 2025

[NuGet package for WebView2 SDK 1.0.3595.46](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3595.46)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 142.0.3595.46 or later.


<!-- ------------------------------ -->
#### Promotions to Phase 3 (Stable in Release)

No additional APIs have been promoted from Phase 2: Stable in Prerelease, to Phase 3: Stable in Release, in this Release SDK.


<!-- ------------------------------ -->
#### Bug fixes

This Release SDK includes the following bug fixes.


<!-- ---------- -->
###### Runtime-only

* Disabled creation of a "Speculative Renderer" process.

<!-- end of Release SDK 1.0.3595.46, for Runtime 142 (Nov. 3, 2025) -->


<!-- ====================================================================== -->
## Prerelease SDK 1.0.3590-prerelease, for Runtime 142 (Oct. 7, 2025)

Release Date: Oct. 7, 2025

[NuGet package for WebView2 SDK 1.0.3590-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3590-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 142.0.3590.0 or later.


<!-- ------------------------------ -->
#### Experimental APIs (Phase 1: Experimental in Prerelease)

The following APIs are in Phase 1: Experimental in Prerelease, and have been added in this Prerelease SDK.


<!-- ---------- -->
###### Sensitivity label support

A new Sensitivity Info API in WebView2 enables applications to access sensitivity label information communicated by webpages through the [Page Interaction Restriction Manager](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/PageInteractionRestrictionManager/explainer.md).  This feature helps host applications detect and respond to sensitive content.

Key capabilities:

* **Configure Page Interaction Restriction Manager availability** - Configure a list of URL filters for the Page Interaction Restriction Manager.  After the list has been configured, the Page Interaction Restriction Manager becomes available on pages in the allow list.  These pages can send sensitivity labels to the platform via the API.

* **Sensitivity Info exposure** - `CoreWebView2` now exposes a `SensitivityInfo` property and a `SensitivityInfoChanged` event, allowing applications to listen for updates to sensitivity label information.

Sensitivity label support is initially available on Win32 only.  Support for .NET and WinRT is planned for a future release.

##### [.NET/C#](#tab/dotnetcsharp)

Pending.

##### [WinRT/C#](#tab/winrtcsharp)

Pending.

##### [Win32/C++](#tab/win32cpp)

<!-- CoreWebView2 -->
* [ICoreWebView2Experimental32](/microsoft-edge/webview2/reference/win32/icorewebview2experimental32?view=webview2-1.0.3590-prerelease&preserve-view=true)
  * [ICoreWebView2Experimental32::add_SensitivityInfoChanged](/microsoft-edge/webview2/reference/win32/icorewebview2experimental32?view=webview2-1.0.3590-prerelease&preserve-view=true#add_sensitivityinfochanged)
  * [ICoreWebView2Experimental32::get_SensitivityInfo](/microsoft-edge/webview2/reference/win32/icorewebview2experimental32?view=webview2-1.0.3590-prerelease&preserve-view=true#get_sensitivityinfo)
  * [ICoreWebView2Experimental32::remove_SensitivityInfoChanged](/microsoft-edge/webview2/reference/win32/icorewebview2experimental32?view=webview2-1.0.3590-prerelease&preserve-view=true#remove_sensitivityinfochanged)

<!-- CoreWebView2MipSensitivityLabel -->
* [ICoreWebView2ExperimentalMipSensitivityLabel](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalmipsensitivitylabel?view=webview2-1.0.3590-prerelease&preserve-view=true)
  * [ICoreWebView2ExperimentalMipSensitivityLabel::get_LabelId](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalmipsensitivitylabel?view=webview2-1.0.3590-prerelease&preserve-view=true#get_labelid)
  * [ICoreWebView2ExperimentalMipSensitivityLabel::get_OrganizationId](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalmipsensitivitylabel?view=webview2-1.0.3590-prerelease&preserve-view=true#get_organizationid)

<!-- CoreWebView2Profile -->
* [ICoreWebView2ExperimentalProfile14](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile14?view=webview2-1.0.3590-prerelease&preserve-view=true)
  * [ICoreWebView2ExperimentalProfile14::SetPageInteractionRestrictionManagerAllowList](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile14?view=webview2-1.0.3590-prerelease&preserve-view=true#setpageinteractionrestrictionmanagerallowlist)

<!-- CoreWebView2SensitivityInfo -->
* [ICoreWebView2ExperimentalSensitivityInfo](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsensitivityinfo?view=webview2-1.0.3590-prerelease&preserve-view=true)
  * [ICoreWebView2ExperimentalSensitivityInfo::get_SensitivityLabels](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsensitivityinfo?view=webview2-1.0.3590-prerelease&preserve-view=true#get_sensitivitylabels)
  * [ICoreWebView2ExperimentalSensitivityInfo::get_SensitivityLabelsState](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsensitivityinfo?view=webview2-1.0.3590-prerelease&preserve-view=true#get_sensitivitylabelsstate)

<!-- CoreWebView2SensitivityInfoChangedEventHandler -->
* [ICoreWebView2ExperimentalSensitivityInfoChangedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsensitivityinfochangedeventhandler?view=webview2-1.0.3590-prerelease&preserve-view=true)<!-- win32-only -->

<!-- CoreWebView2SensitivityLabel -->
* [ICoreWebView2ExperimentalSensitivityLabel](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsensitivitylabel?view=webview2-1.0.3590-prerelease&preserve-view=true)
  * [ICoreWebView2ExperimentalSensitivityLabel::get_LabelKind](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsensitivitylabel?view=webview2-1.0.3590-prerelease&preserve-view=true#get_labelkind)

<!-- CoreWebView2SensitivityLabelCollectionView -->
* [ICoreWebView2ExperimentalSensitivityLabelCollectionView](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsensitivitylabelcollectionview?view=webview2-1.0.3590-prerelease&preserve-view=true)<!-- win32-only -->
  * [ICoreWebView2ExperimentalSensitivityLabelCollectionView::get_Count](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsensitivitylabelcollectionview?view=webview2-1.0.3590-prerelease&preserve-view=true#get_count)
  * [ICoreWebView2ExperimentalSensitivityLabelCollectionView::GetValueAtIndex](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsensitivitylabelcollectionview?view=webview2-1.0.3590-prerelease&preserve-view=true#getvalueatindex)

* [COREWEBVIEW2_SENSITIVITY_LABEL_KIND enum](/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.3590-prerelease&preserve-view=true#corewebview2_sensitivity_label_kind)
  * `COREWEBVIEW2_SENSITIVITY_LABEL_KIND_MIP`

* [COREWEBVIEW2_SENSITIVITY_LABELS_STATE enum](/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.3590-prerelease&preserve-view=true#corewebview2_sensitivity_labels_state)
  * `COREWEBVIEW2_SENSITIVITY_LABELS_STATE_NOT_APPLICABLE`
  * `COREWEBVIEW2_SENSITIVITY_LABELS_STATE_PENDING`
  * `COREWEBVIEW2_SENSITIVITY_LABELS_STATE_AVAILABLE`

---


<!-- ------------------------------ -->
#### Promotions to Phase 2 (Stable in Prerelease)

No APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, in this Prerelease SDK.


<!-- ------------------------------ -->
#### Bug fixes

This Prerelease SDK includes the following bug fixes.


<!-- ---------- -->
###### Runtime-only

* Fixed a dangling pointer in file system access permission context.
* Fixed the UI hanging during drag-and-drop in WinUI3.
* Fixed local network access triggering a permission alert pop-up window.
* Resolved an issue where an extra region was appearing in the accessibility tree.
* Fixed an issue where downloads in the default browser frame didn't work.


<!-- ---------- -->
###### SDK-only

* Fixed a BinSkim error for `WebView2Loader.dll`.

<!-- end of Prerelease SDK 1.0.3590-prerelease, for Runtime 142 (Oct. 7, 2025) -->


<!-- ====================================================================== -->
## Release SDK 1.0.3537.50, for Runtime 141 (Oct. 6, 2025)

Release Date: Oct. 6, 2025

[NuGet package for WebView2 SDK 1.0.3537.50](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3537.50)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 141.0.3537.50 or later.


<!-- ------------------------------ -->
#### Promotions to Phase 3 (Stable in Release)

No additional APIs have been promoted from Phase 2: Stable in Prerelease, to Phase 3: Stable in Release, in this Release SDK.


<!-- ------------------------------ -->
#### Bug fixes

This Release SDK includes the following bug fixes.


<!-- ---------- -->
###### Runtime-only

* Fixed local network access triggering a permission alert pop-up window.


<!-- ---------- -->
###### SDK-only

* Fixed a BinSkim error for `WebView2Loader.dll`.

<!-- end of Release SDK 1.0.3537.50, for Runtime 141 (Oct. 6, 2025) -->


<!-- ====================================================================== -->
## Prerelease SDK 1.0.3530-prerelease, for Runtime 141 (Sep. 8, 2025)

Release Date: Sep. 8, 2025

[NuGet package for WebView2 SDK 1.0.3530-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3530-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 141.0.3530.0 or later.


<!-- ------------------------------ -->
#### General changes

This Prerelease SDK focuses on making WebView2 work better, through behind-the-scenes improvements.
* The testing infrastructure has been strengthened.
* The validation of APIs has been enhanced, to ensure that the APIs perform reliably across different scenarios.

These foundational improvements provide stable, thoroughly tested functionality for building WebView2 apps.


<!-- ------------------------------ -->
#### Experimental APIs (Phase 1: Experimental in Prerelease)

No Experimental APIs have been added in this Prerelease SDK.


<!-- ------------------------------ -->
#### Promotions to Phase 2 (Stable in Prerelease)

No APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, in this Prerelease SDK.


<!-- ------------------------------ -->
#### Bug fixes

This Prerelease SDK includes the following bug fixes.


<!-- ---------- -->
###### SDK-only

* Fixed a memory leak in WPF Composition Controller.

<!-- end of Prerelease SDK 1.0.3530-prerelease, for Runtime 141 (Sep. 8, 2025) -->


<!-- ====================================================================== -->
## Release SDK 1.0.3485.44, for Runtime 140 (Sep. 8, 2025)

Release Date: Sep. 8, 2025

[NuGet package for WebView2 SDK 1.0.3485.44](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3485.44)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 140.0.3485.44 or later.


<!-- ------------------------------ -->
#### General changes

This Release SDK focuses on making WebView2 work better, through behind-the-scenes improvements.
* The testing infrastructure has been strengthened.
* The validation of APIs has been enhanced, to ensure that the APIs perform reliably across different scenarios.

These foundational improvements provide stable, thoroughly tested functionality for building WebView2 apps.


<!-- ------------------------------ -->
#### Promotions to Phase 3 (Stable in Release)

No additional APIs have been promoted from Phase 2: Stable in Prerelease, to Phase 3: Stable in Release, in this Release SDK.


<!-- ------------------------------ -->
#### Bug fixes

There are no bug fixes in this Release SDK.

<!-- end of Release SDK 1.0.3485.44, for Runtime 140 (Sep. 8, 2025) -->


<!-- ====================================================================== -->
## Prerelease SDK 1.0.3477-prerelease, for Runtime 140 (Aug. 11, 2025)

Release Date: Aug. 11, 2025

[NuGet package for WebView2 SDK 1.0.3477-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3477-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 140.0.3477.0 or later.


<!-- ------------------------------ -->
#### Experimental APIs (Phase 1: Experimental in Prerelease)

No Experimental APIs have been added in this Prerelease SDK.


<!-- ------------------------------ -->
#### Promotions to Phase 2 (Stable in Prerelease)

No APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, in this Prerelease SDK.


<!-- ------------------------------ -->
#### Bug fixes


<!-- ---------- -->
###### Runtime-only

* Fixed `put_UserAgent` not working for service workers.
* Fixed a crash in Devtools on Windows Server and Windows 10.
* Removed browser process tracking after calling `remove_BrowserProcessExited`.
* Fixed a memory leak issue in `hostObject` async function calls.
* Fixed touch not working in visual hosting after a long tap.

<!-- end of Prerelease SDK 1.0.3477-prerelease, for Runtime 140 (Aug. 11, 2025) -->


<!-- ====================================================================== -->
## See also

* [Archived release notes for the WebView2 SDK](./archive.md)
* [About release notes for the WebView2 SDK](./about.md)
* [Overview of WebView2 APIs](../concepts/overview-features-apis.md) - outlines many of the APIs, by feature area, that are in Release SDK packages.
* [Contacting the Microsoft Edge WebView2 team](../contact.md)
* [Release notes for Microsoft Edge web platform](../../web-platform/release-notes/index.md)

API Reference:
* [WebView2 API Reference](../webview2-api-reference.md)
   * .NET: [Microsoft.Web.WebView2.Core Namespace](/dotnet/api/microsoft.web.webview2.core)<!-- https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core -->
   * WinRT: [Microsoft.Web.WebView2.Core Namespace](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/)<!-- https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/ -->
   * Win32: [Reference (WebView2 Win32 C++)](/microsoft-edge/webview2/reference/win32/)<!-- https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/ -->
