---
title: Release Notes for WebView2 Prerelease SDK 1.0.1549-prerelease
description: Release notes for Microsoft Edge WebView2 for Win32, WPF, and WinForms, covering new features, APIs, and fixes.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 12/12/2022
---
# Release Notes for WebView2 Prerelease SDK 1.0.1549-prerelease

Release Date: December 12, 2022

[NuGet package for WebView2 SDK 1.0.1549-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1549-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 110.0.1549.0 or higher.


<!-- ====================================================================== -->
## Experimental APIs

This Prerelease SDK adds the following experimental APIs:

*  Added support for the Locale Region API:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2ControllerOptions.LocaleRegion Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controlleroptions.localeregion?view=webview2-dotnet-1.0.1549-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2ControllerOptions.LocaleRegion Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controlleroptions?view=webview2-winrt-1.0.1549-prerelease&preserve-view=true#localeregion)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalControllerOptions](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontrolleroptions?view=webview2-1.0.1549-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalControllerOptions::LocaleRegion property (get](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontrolleroptions?view=webview2-1.0.1549-prerelease&preserve-view=true#get_localeregion), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontrolleroptions?view=webview2-1.0.1549-prerelease&preserve-view=true#put_localeregion)

---


*  Added support for the tracking prevention API:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2EnvironmentOptions.EnableTrackingPrevention Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.enabletrackingprevention?view=webview2-dotnet-1.0.1549-prerelease&preserve-view=true)
* [CoreWebView2Profile.PreferredTrackingPreventionLevel Property](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.preferredtrackingpreventionlevel?view=webview2-dotnet-1.0.1549-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2EnvironmentOptions.EnableTrackingPrevention Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions?view=webview2-winrt-1.0.1549-prerelease&preserve-view=true#enabletrackingprevention)
* [CoreWebView2Profile.PreferredTrackingPreventionLevel Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1549-prerelease&preserve-view=true#preferredtrackingpreventionlevel)

##### [Win32/C++](#tab/win32cpp)

*  [ICoreWebView2ExperimentalEnvironmentOptions2](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions2?view=webview2-1.0.1549-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalEnvironmentOptions2::EnableTrackingPrevention property (get](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironmentoptions2?view=webview2-1.0.1549-prerelease&preserve-view=true#get_enabletrackingprevention), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironmentoptions2?view=webview2-1.0.1549-prerelease&preserve-view=true#put_enabletrackingprevention)
* [ICoreWebView2ExperimentalProfile5](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile5?view=webview2-1.0.1549-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalProfile5::PreferredTrackingPreventionLevel property (get](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile5?view=webview2-1.0.1549-prerelease&preserve-view=true#get_preferredtrackingpreventionlevel), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile5?view=webview2-1.0.1549-prerelease&preserve-view=true#put_preferredtrackingpreventionlevel)

---


<!-- ====================================================================== -->
## Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.


<!-- ------------------------------ -->
*  Added support for the Print API:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.PrintAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.printasync?view=webview2-dotnet-1.0.1549-prerelease&preserve-view=true)
* [CoreWebView2.PrintToPdfStreamAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.printtopdfstreamasync?view=webview2-dotnet-1.0.1549-prerelease&preserve-view=true)
* [CoreWebView2.ShowPrintUI Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.showprintui?view=webview2-dotnet-1.0.1549-prerelease&preserve-view=true)
* [CoreWebView2PrintSettings Class](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings?view=webview2-dotnet-1.0.1549-prerelease&preserve-view=true)
   * [CoreWebView2PrintSettings.Collation Property](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings.collation?view=webview2-dotnet-1.0.1549-prerelease&preserve-view=true)
   * [CoreWebView2PrintSettings.ColorMode Property](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings.colormode?view=webview2-dotnet-1.0.1549-prerelease&preserve-view=true)
   * [CoreWebView2PrintSettings.Copies Property](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings.copies?view=webview2-dotnet-1.0.1549-prerelease&preserve-view=true#microsoft-web-webview2-core-corewebview2printsettings-copies)
   * [CoreWebView2PrintSettings.Duplex Property](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings.duplex?view=webview2-dotnet-1.0.1549-prerelease&preserve-view=true)
   * [CoreWebView2PrintSettings.MediaSize Property](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings.mediasize?view=webview2-dotnet-1.0.1549-prerelease&preserve-view=true)
   * [CoreWebView2PrintSettings.PageRanges Property](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings.pageranges?view=webview2-dotnet-1.0.1549-prerelease&preserve-view=true)
   * [CoreWebView2PrintSettings.PagesPerSide Property](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings.pagesperside?view=webview2-dotnet-1.0.1549-prerelease&preserve-view=true)
   * [CoreWebView2PrintSettings.PrinterName Property](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings.printername?view=webview2-dotnet-1.0.1549-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.PrintAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1549-prerelease&preserve-view=true#printasync)
* [CoreWebView2.PrintToPdfStreamAsync](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1549-prerelease&preserve-view=true#printtopdfstreamasync)
* [CoreWebView2.ShowPrintUI Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1549-prerelease&preserve-view=true#showprintui)
* [CoreWebView2PrintSettings Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings?view=webview2-winrt-1.0.1549-prerelease&preserve-view=true)
   * [CoreWebView2PrintSettings.Collation Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings?view=webview2-winrt-1.0.1549-prerelease&preserve-view=true#collation)
   * [CoreWebView2PrintSettings.ColorMode Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings?view=webview2-winrt-1.0.1549-prerelease&preserve-view=true#colormode)
   * [CoreWebView2PrintSettings.Copies Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings?view=webview2-winrt-1.0.1549-prerelease&preserve-view=true#copies)
   * [CoreWebView2PrintSettings.Duplex Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings?view=webview2-winrt-1.0.1549-prerelease&preserve-view=true#duplex)
   * [CoreWebView2PrintSettings.MediaSize Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings?view=webview2-winrt-1.0.1549-prerelease&preserve-view=true#mediasize)
   * [CoreWebView2PrintSettings.PageRanges Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings?view=webview2-winrt-1.0.1549-prerelease&preserve-view=true#pageranges)
   * [CoreWebView2PrintSettings.PagesPerSide Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings?view=webview2-winrt-1.0.1549-prerelease&preserve-view=true#pagesperside)
   * [CoreWebView2PrintSettings.PrinterName Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings?view=webview2-winrt-1.0.1549-prerelease&preserve-view=true#printername)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_16](/microsoft-edge/webview2/reference/win32/icorewebview2_16?view=webview2-1.0.1549-prerelease&preserve-view=true)
   * [ICoreWebView2_16::Print](/microsoft-edge/webview2/reference/win32/icorewebview2_16?view=webview2-1.0.1549-prerelease&preserve-view=true#print)
   * [ICoreWebView2_16::PrintToPdfStream](/microsoft-edge/webview2/reference/win32/icorewebview2_16?view=webview2-1.0.1549-prerelease&preserve-view=true#printtopdfstream)
   * [ICoreWebView2_16::ShowPrintUI](/microsoft-edge/webview2/reference/win32/icorewebview2_16?view=webview2-1.0.1549-prerelease&preserve-view=true#showprintui)
* [ICoreWebView2PrintCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2printcompletedhandler?view=webview2-1.0.1549-prerelease&preserve-view=true)
* [ICoreWebView2PrintToPdfStreamCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2printtopdfstreamcompletedhandler?view=webview2-1.0.1549-prerelease&preserve-view=true)
* [ICoreWebView2PrintSettings2](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1549-prerelease&preserve-view=true)
   * [ICoreWebView2PrintSettings2::Collation property (get](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1549-prerelease&preserve-view=true#get_collation), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1549-prerelease&preserve-view=true#put_collation)
   * [ICoreWebView2PrintSettings2::ColorMode property (get](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1549-prerelease&preserve-view=true#get_colormode), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1549-prerelease&preserve-view=true#put_colormode)
   * [ICoreWebView2PrintSettings2::Copies property (get](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1549-prerelease&preserve-view=true#get_copies), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1549-prerelease&preserve-view=true#put_copies)
   * [ICoreWebView2PrintSettings2::Duplex property (get](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1549-prerelease&preserve-view=true#get_duplex), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1549-prerelease&preserve-view=true#put_duplex)
   * [ICoreWebView2PrintSettings2::MediaSize property (get](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1549-prerelease&preserve-view=true#get_mediasize), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1549-prerelease&preserve-view=true#put_mediasize)
   * [ICoreWebView2PrintSettings2::PageRanges property (get](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1549-prerelease&preserve-view=true#get_pageranges), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1549-prerelease&preserve-view=true#put_pageranges)
   * [ICoreWebView2PrintSettings2::PagesPerSide property (get](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1549-prerelease&preserve-view=true#get_pagesperside), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1549-prerelease&preserve-view=true#put_pagesperside)
   * [ICoreWebView2PrintSettings2::PrinterName property (get](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1549-prerelease&preserve-view=true#get_printername), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1549-prerelease&preserve-view=true#put_printername)

---

*  Added support for Custom Crash Reporting API:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2EnvironmentOptions.IsCustomCrashReportingEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.iscustomcrashreportingenabled?view=webview2-dotnet-1.0.1549-prerelease&preserve-view=true)
* [CoreWebView2Environment.FailureReportFolderPath Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.failurereportfolderpath?view=webview2-dotnet-1.0.1549-prerelease&preserve-view=true#microsoft-web-webview2-core-corewebview2environment-failurereportfolderpath)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2EnvironmentOptions.IsCustomCrashReportingEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions?view=webview2-winrt-1.0.1549-prerelease&preserve-view=true#iscustomcrashreportingenabled)
* [CoreWebView2Environment.FailureReportFolderPath Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment?view=webview2-winrt-1.0.1549-prerelease&preserve-view=true#failurereportfolderpath)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2EnvironmentOptions3::IsCustomCrashReportingEnabled property (get](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions3?view=webview2-1.0.1549-prerelease&preserve-view=true#get_iscustomcrashreportingenabled), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions3?view=webview2-1.0.1549-prerelease&preserve-view=true#put_iscustomcrashreportingenabled)
* [ICoreWebView2Environment11::FailureReportFolderPath property (get)](/microsoft-edge/webview2/reference/win32/icorewebview2environment11?view=webview2-1.0.1549-prerelease&preserve-view=true#get_failurereportfolderpath)<!--no put-->

---


<!-- ====================================================================== -->
## Bug fixes

*  Fixed some nullptr issues where now some public APIs which take nullptr as input parameters do not crash the WebView2.
*  Disabled "Open link as Profile" in the WebView2 context menu.
*  Fixed bug where the whole tool bar will be blank when hiding Bookmarks, Search, and PageSelector buttons simultaneously. ([Issue #2866](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2866))
*  Fix post data missing in form submit with control click. ([Issue #2652](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2652))
*  Fixed a bug where the user is not able to get the custom context menu on PDF Viewer. ([Issue #2607](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2607))
*  Fix drag/drop within the WebView2 for composition hosted WebViews.
*  Fixed a bug where the app crashes when trying to move focus to WebView2 when it is disabled.
*  Remove read aloud icon in address bar in a WebView2 popup window.
*  Fixed an issue where context menu shows unexpected items in WebView2 popup window.


<!-- ====================================================================== -->
## See also

* [Release Notes for the WebView2 SDK](./index.md)
* [WebView2 Roadmap](../roadmap.md)
