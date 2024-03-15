---
title: Release Notes for WebView2 Prerelease SDK 1.0.1414-prerelease
description: Release notes for Microsoft Edge WebView2 for Win32, WPF, and WinForms, covering new features, APIs, and fixes.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 10/11/2022
---
# Release Notes for WebView2 Prerelease SDK 1.0.1414-prerelease

Release Date: October 11, 2022

[NuGet package for WebView2 SDK 1.0.1414-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1414-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 107.0.1414.0 or higher.


<!-- ====================================================================== -->
## Experimental APIs

This Prerelease SDK adds the following experimental APIs:

*  Added support for the Print API:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.PrintAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.printasync?view=webview2-dotnet-1.0.1414-prerelease&preserve-view=true)
* [CoreWebView2.PrintToPdfStreamAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.printtopdfstreamasync?view=webview2-dotnet-1.0.1414-prerelease&preserve-view=true)
* [CoreWebView2.ShowPrintUI Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.showprintui?view=webview2-dotnet-1.0.1414-prerelease&preserve-view=true)
* [CoreWebView2PrintSettings Class](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings?view=webview2-dotnet-1.0.1414-prerelease&preserve-view=true)
   * [CoreWebView2PrintSettings.Collation Property](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings.collation?view=webview2-dotnet-1.0.1414-prerelease&preserve-view=true)
   * [CoreWebView2PrintSettings.ColorMode Property](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings.colormode?view=webview2-dotnet-1.0.1414-prerelease&preserve-view=true)
   * [CoreWebView2PrintSettings.Copies Property](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings.copies?view=webview2-dotnet-1.0.1414-prerelease&preserve-view=true#microsoft-web-webview2-core-corewebview2printsettings-copies)
   * [CoreWebView2PrintSettings.Duplex Property](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings.duplex?view=webview2-dotnet-1.0.1414-prerelease&preserve-view=true)
   * [CoreWebView2PrintSettings.MediaSize Property](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings.mediasize?view=webview2-dotnet-1.0.1414-prerelease&preserve-view=true)
   * [CoreWebView2PrintSettings.PageRanges Property](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings.pageranges?view=webview2-dotnet-1.0.1414-prerelease&preserve-view=true)
   * [CoreWebView2PrintSettings.PagesPerSide Property](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings.pagesperside?view=webview2-dotnet-1.0.1414-prerelease&preserve-view=true)
   * [CoreWebView2PrintSettings.PrinterName Property](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings.printername?view=webview2-dotnet-1.0.1414-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.PrintAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1414-prerelease&preserve-view=true#printasync)
* [CoreWebView2.PrintToPdfStreamAsync](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1414-prerelease&preserve-view=true#printtopdfstreamasync)
* [CoreWebView2.ShowPrintUI Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1414-prerelease&preserve-view=true#showprintui)
* [CoreWebView2PrintSettings Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings?view=webview2-winrt-1.0.1414-prerelease&preserve-view=true)
   * [CoreWebView2PrintSettings.Collation Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings?view=webview2-winrt-1.0.1414-prerelease&preserve-view=true#collation)
   * [CoreWebView2PrintSettings.ColorMode Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings?view=webview2-winrt-1.0.1414-prerelease&preserve-view=true#colormode)
   * [CoreWebView2PrintSettings.Copies Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings?view=webview2-winrt-1.0.1414-prerelease&preserve-view=true#copies)
   * [CoreWebView2PrintSettings.Duplex Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings?view=webview2-winrt-1.0.1414-prerelease&preserve-view=true#duplex)
   * [CoreWebView2PrintSettings.MediaSize Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings?view=webview2-winrt-1.0.1414-prerelease&preserve-view=true#mediasize)
   * [CoreWebView2PrintSettings.PageRanges Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings?view=webview2-winrt-1.0.1414-prerelease&preserve-view=true#pageranges)
   * [CoreWebView2PrintSettings.PagesPerSide Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings?view=webview2-winrt-1.0.1414-prerelease&preserve-view=true#pagesperside)
   * [CoreWebView2PrintSettings.PrinterName Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings?view=webview2-winrt-1.0.1414-prerelease&preserve-view=true#printername)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Experimental17::Print](/microsoft-edge/webview2/reference/win32/icorewebview2experimental17?view=webview2-1.0.1414-prerelease&preserve-view=true#print)
* [ICoreWebView2Experimental17::PrintToPdfStream](/microsoft-edge/webview2/reference/win32/icorewebview2experimental17?view=webview2-1.0.1414-prerelease&preserve-view=true#printtopdfstream)
* [ICoreWebView2Experimental17::ShowPrintUI](/microsoft-edge/webview2/reference/win32/icorewebview2experimental17?view=webview2-1.0.1414-prerelease&preserve-view=true#showprintui)
* [ICoreWebView2ExperimentalPrintCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprintcompletedhandler?view=webview2-1.0.1414-prerelease&preserve-view=true)
* [ICorewebView2ExperimentalPrintToPdfStreamCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprinttopdfstreamcompletedhandler?view=webview2-1.0.1414-prerelease&preserve-view=true)
* [ICoreWebView2ExperimentalPrintSettings2](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprintsettings2?view=webview2-1.0.1414-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalPrintSettings2::Collation property (get](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprintsettings2?view=webview2-1.0.1414-prerelease&preserve-view=true#get_collation), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprintsettings2?view=webview2-1.0.1414-prerelease&preserve-view=true#put_collation)
   * [ICoreWebView2ExperimentalPrintSettings2::ColorMode property (get](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprintsettings2?view=webview2-1.0.1414-prerelease&preserve-view=true#get_colormode), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprintsettings2?view=webview2-1.0.1414-prerelease&preserve-view=true#put_colormode)
   * [ICoreWebView2ExperimentalPrintSettings2::Copies property (get](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprintsettings2?view=webview2-1.0.1414-prerelease&preserve-view=true#get_copies), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprintsettings2?view=webview2-1.0.1414-prerelease&preserve-view=true#put_copies)
   * [ICoreWebView2ExperimentalPrintSettings2::Duplex property (get](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprintsettings2?view=webview2-1.0.1414-prerelease&preserve-view=true#get_duplex), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprintsettings2?view=webview2-1.0.1414-prerelease&preserve-view=true#put_duplex)
   * [ICoreWebView2ExperimentalPrintSettings2::MediaSize property (get](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprintsettings2?view=webview2-1.0.1414-prerelease&preserve-view=true#get_mediasize), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprintsettings2?view=webview2-1.0.1414-prerelease&preserve-view=true#put_mediasize)
   * [ICoreWebView2ExperimentalPrintSettings2::PageRanges property (get](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprintsettings2?view=webview2-1.0.1414-prerelease&preserve-view=true#get_pageranges), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprintsettings2?view=webview2-1.0.1414-prerelease&preserve-view=true#put_pageranges)
   * [ICoreWebView2ExperimentalPrintSettings2::PagesPerSide property (get](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprintsettings2?view=webview2-1.0.1414-prerelease&preserve-view=true#get_pagesperside), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprintsettings2?view=webview2-1.0.1414-prerelease&preserve-view=true#put_pagesperside)
   * [ICoreWebView2ExperimentalPrintSettings2::PrinterName property (get](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprintsettings2?view=webview2-1.0.1414-prerelease&preserve-view=true#get_printername), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprintsettings2?view=webview2-1.0.1414-prerelease&preserve-view=true#put_printername)

---

*  Added support for SmartScreen API:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Settings.IsReputationCheckingRequired Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.isreputationcheckingrequired?view=webview2-dotnet-1.0.1414-prerelease&preserve-view=true#microsoft-web-webview2-core-corewebview2settings-isreputationcheckingrequired)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Settings.IsReputationCheckingRequired Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings?view=webview2-winrt-1.0.1414-prerelease&preserve-view=true#isreputationcheckingrequired)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalSettings7::IsReputationCheckingRequired property (get](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsettings7?view=webview2-1.0.1414-prerelease&preserve-view=true#get_isreputationcheckingrequired), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsettings7?view=webview2-1.0.1414-prerelease&preserve-view=true#put_isreputationcheckingrequired)

---

*  Added support for Custom Crash Reporting API:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2EnvironmentOptions.IsCustomCrashReportingEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.iscustomcrashreportingenabled?view=webview2-dotnet-1.0.1414-prerelease&preserve-view=true#microsoft-web-webview2-core-corewebview2environmentoptions-iscustomcrashreportingenabled)

* [CoreWebView2Environment.FailureReportFolderPath Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.failurereportfolderpath?view=webview2-dotnet-1.0.1414-prerelease&preserve-view=true#microsoft-web-webview2-core-corewebview2environment-failurereportfolderpath)


##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2EnvironmentOptions.IsCustomCrashReportingEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions?view=webview2-winrt-1.0.1414-prerelease&preserve-view=true#iscustomcrashreportingenabled)
* [CoreWebView2Environment.FailureReportFolderPath Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment?view=webview2-winrt-1.0.1414-prerelease&preserve-view=true#failurereportfolderpath)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalEnvironmentOptions2::IsCustomCrashReportingEnabled property (get](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironmentoptions2?view=webview2-1.0.1414-prerelease&preserve-view=true#get_iscustomcrashreportingenabled), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironmentoptions2?view=webview2-1.0.1414-prerelease&preserve-view=true#put_iscustomcrashreportingenabled)
* [ICoreWebView2ExperimentalEnvironment::FailureReportFolderPath property (get)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment?view=webview2-1.0.1414-prerelease&preserve-view=true#get_failurereportfolderpath)<!--no put-->

---


<!-- ====================================================================== -->
## Bug fixes for 1.0.1414-prerelease
<!-- another section links to here -->

*   Removed three-dot menu with a broken link from the downloads page.  (Runtime-only)  ([Issue #2753](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2753))
*   Fixed a bug in the WebView2 WinRT JS Projection tool (wv2winrt) where C++20 projects failed to compile.  ([Issue #2768](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2768))
*   Fixed a crash which could occur with the WebView2 WinRT API while closing down WebView2 if you subscribed to any events, especially the `CoreWebView2.GetDevToolsEventReceiver` event.  (SDK-only)
*   Fixed a bug where it wasn't possible to dismiss the download popup after minimizing the window.  (Runtime-only)


<!-- ====================================================================== -->
## See also

* [Release Notes for the WebView2 SDK](./index.md)
* [WebView2 Roadmap](../roadmap.md)
