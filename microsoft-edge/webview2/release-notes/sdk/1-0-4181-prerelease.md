---
title: SDK 1.0.4181-prerelease, for Runtime 152 (Aug. 3, 2026)
description: Release notes for Microsoft Edge WebView2 SDK 1.0.4181-prerelease.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 08/03/2026
---
# SDK 1.0.4181-prerelease, for Runtime 152 (Aug. 3, 2026)

Release notes for Microsoft Edge WebView2 Prerelease SDK, release date: Aug. 3, 2026.

[NuGet package for WebView2 SDK 1.0.4181-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.4181-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 152.0.4181.0 or later; see [Runtime 152.n.nnnn.nn (Mmm. dd, yyyy)](../runtime/152.md).


<!-- ====================================================================== -->
## Experimental APIs (Phase 1: Experimental in Prerelease)

The following APIs are in Phase 1: Experimental in Prerelease, and have been added in this Prerelease SDK.


<!-- ------------------------------ -->
#### Diagnostic Monitor API

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
   * `Webview`
   * `Profile`
   * `Environment`

* `CoreWebView2Environment` Class:
   * [CoreWebView2Environment.CreateDiagnosticMonitor Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.creatediagnosticmonitor?view=webview2-dotnet-1.0.4181-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2DiagnosticCategory Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2diagnosticcategory?view=webview2-winrt-1.0.4181-prerelease&preserve-view=true)
   * `NetworkRequest`

* [CoreWebView2DiagnosticMonitor Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2diagnosticmonitor?view=webview2-winrt-1.0.4181-prerelease&preserve-view=true)
   * [CoreWebView2DiagnosticMonitor.Close Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2diagnosticmonitor?view=webview2-winrt-1.0.4181-prerelease&preserve-view=true#close)
   * [CoreWebView2DiagnosticMonitor.RemoveDiagnosticFilter Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2diagnosticmonitor?view=webview2-winrt-1.0.4181-prerelease&preserve-view=true#removediagnosticfilter)
   * [CoreWebView2DiagnosticMonitor.SetDiagnosticFilter Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2diagnosticmonitor?view=webview2-winrt-1.0.4181-prerelease&preserve-view=true#setdiagnosticfilter)
   * [CoreWebView2DiagnosticMonitor.DiagnosticReceived Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2diagnosticmonitor?view=webview2-winrt-1.0.4181-prerelease&preserve-view=true#diagnosticreceived)

* [CoreWebView2DiagnosticReceivedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2diagnosticreceivedeventargs?view=webview2-winrt-1.0.4181-prerelease&preserve-view=true)
   * [CoreWebView2DiagnosticReceivedEventArgs.Category Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2diagnosticreceivedeventargs?view=webview2-winrt-1.0.4181-prerelease&preserve-view=true#category)
   * [CoreWebView2DiagnosticReceivedEventArgs.DetailsAsJson Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2diagnosticreceivedeventargs?view=webview2-winrt-1.0.4181-prerelease&preserve-view=true#detailsasjson)
   * [CoreWebView2DiagnosticReceivedEventArgs.Scope Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2diagnosticreceivedeventargs?view=webview2-winrt-1.0.4181-prerelease&preserve-view=true#scope)
   * [CoreWebView2DiagnosticReceivedEventArgs.Timestamp Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2diagnosticreceivedeventargs?view=webview2-winrt-1.0.4181-prerelease&preserve-view=true#timestamp)

* [CoreWebView2DiagnosticScope Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2diagnosticscope?view=webview2-winrt-1.0.4181-prerelease&preserve-view=true)
   * `Webview`
   * `Profile`
   * `Environment`

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


<!-- ====================================================================== -->
## Bug fixes

* Fixed a WPF crash when changing display topology in composition-controlled apps.


<!-- ====================================================================== -->
## See also

* [Runtime 152.n.nnnn.nn (Mmm. dd, yyyy)](../runtime/152.md)
* [Release notes for WebView2](../index.md)
   * [Release notes for the WebView2 Runtime](../runtime/index.md)
   * [Release notes for WebView2 SDKs](./index.md)
