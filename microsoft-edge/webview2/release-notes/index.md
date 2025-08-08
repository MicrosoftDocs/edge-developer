---
title: Release Notes for the WebView2 SDK
description: Release notes for Microsoft Edge WebView2, covering new features, APIs, and fixes for Win32, WPF, and WinForms.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 08/11/2025
---

# Release Notes for the WebView2 SDK

These Release Notes provide information about new features and bug fixes that are included in the WebView2 Release SDK and the WebView2 Prerelease SDK.

<!--
the templates to copy for incoming sections are in ./includes/templates.md

this webpage covers the most recent 6 months; periodically move oldest h2 sections from bottom of present file to archive.md.  eg covers:
Aug 2025
Jul 2025
Jun 2025
May 2025
Apr 2025
Mar 2025

moved to archive:
none b/c changed from 5 mo to 6 mo
-->

<!-- Aug 2025 Release SDK -->
<!-- ====================================================================== -->

## 1.0.3405.78

Release Date: August 11, 2025

[NuGet package for WebView2 SDK 1.0.3405.78](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3405.78)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 139.0.3405.78 or higher.

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 139.0.3405.78 or higher.

<!-- ------------------------------ -->

#### Promotions

The following APIs have been promoted from Phase 2: Stable in Prerelease, to Phase 3: Stable in Release, and are now included in this Release SDK.

<!-- ------------------------------ -->

###### Customize the Find behavior (Find API)

The Find API allows you to programmatically control **Find** operations, and enables adding the following functionality to your app:

- Customize **Find** options, including **Find Term**, **Case Sensitivity**, **Word Matching**, **Match Highlighting**, and **Default UI Suppression**.
- Find text strings and navigate among them within a WebView2 control.
- Programmatically initiate **Find** operations, and navigate **Find** results.
- Suppress the default **Find** UI.
- Track the status of **Find** operations.

There are known issues with the Find API for PDF documents. When you view a PDF document within a WebView2 control, the **Find** feature currently only provides the first index and the number of matches found. For example, if the string occurs three times in a PDF, the UI would say **1/3** and would not support programmatically calling **Next** or **Previous**.

We're actively investigating these issues, and we encourage you to report any problems you encounter, by using the [WebView2Feedback](https://github.com/MicrosoftEdge/WebViewFeedback) repo.

##### [.NET/C#](#tab/dotnetcsharp)

- `CoreWebView2` Class:

  - [CoreWebView2.Find Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.find?view=webview2-dotnet-1.0.3405.78&preserve-view=true)

- `CoreWebView2Environment` Class:

  - [CoreWebView2Environment.CreateFindOptions Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createfindoptions?view=webview2-dotnet-1.0.3405.78&preserve-view=true)

- [CoreWebView2Find Class](/dotnet/api/microsoft.web.webview2.core.corewebview2find?view=webview2-dotnet-1.0.3405.78&preserve-view=true)

  - [CoreWebView2Find.ActiveMatchIndex Property](/dotnet/api/microsoft.web.webview2.core.corewebview2find.activematchindex?view=webview2-dotnet-1.0.3405.78&preserve-view=true)
  - [CoreWebView2Find.ActiveMatchIndexChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2find.activematchindexchanged?view=webview2-dotnet-1.0.3405.78&preserve-view=true)
  - [CoreWebView2Find.FindNext Method](/dotnet/api/microsoft.web.webview2.core.corewebview2find.findnext?view=webview2-dotnet-1.0.3405.78&preserve-view=true)
  - [CoreWebView2Find.FindPrevious Method](/dotnet/api/microsoft.web.webview2.core.corewebview2find.findprevious?view=webview2-dotnet-1.0.3405.78&preserve-view=true)
  - [CoreWebView2Find.MatchCount Property](/dotnet/api/microsoft.web.webview2.core.corewebview2find.matchcount?view=webview2-dotnet-1.0.3405.78&preserve-view=true)
  - [CoreWebView2Find.MatchCountChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2find.matchcountchanged?view=webview2-dotnet-1.0.3405.78&preserve-view=true)
  - [CoreWebView2Find.StartAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2find.startasync?view=webview2-dotnet-1.0.3405.78&preserve-view=true)
  - [CoreWebView2Find.Stop Method](/dotnet/api/microsoft.web.webview2.core.corewebview2find.stop?view=webview2-dotnet-1.0.3405.78&preserve-view=true)

- [CoreWebView2FindOptions Class](/dotnet/api/microsoft.web.webview2.core.corewebview2findoptions?view=webview2-dotnet-1.0.3405.78&preserve-view=true)
  - [CoreWebView2FindOptions.FindTerm Property](/dotnet/api/microsoft.web.webview2.core.corewebview2findoptions.findterm?view=webview2-dotnet-1.0.3405.78&preserve-view=true)
  - [CoreWebView2FindOptions.IsCaseSensitive Property](/dotnet/api/microsoft.web.webview2.core.corewebview2findoptions.iscasesensitive?view=webview2-dotnet-1.0.3405.78&preserve-view=true)
  - [CoreWebView2FindOptions.ShouldHighlightAllMatches Property](/dotnet/api/microsoft.web.webview2.core.corewebview2findoptions.shouldhighlightallmatches?view=webview2-dotnet-1.0.3405.78&preserve-view=true)
  - [CoreWebView2FindOptions.ShouldMatchWord Property](/dotnet/api/microsoft.web.webview2.core.corewebview2findoptions.shouldmatchword?view=webview2-dotnet-1.0.3405.78&preserve-view=true)
  - [CoreWebView2FindOptions.SuppressDefaultFindDialog Property](/dotnet/api/microsoft.web.webview2.core.corewebview2findoptions.suppressdefaultfinddialog?view=webview2-dotnet-1.0.3405.78&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

- `CoreWebView2` Class:

  - [CoreWebView2.Find Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.3405.78&preserve-view=true#find)

- `CoreWebView2Environment` Class:

  - [CoreWebView2Environment.CreateFindOptions Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment?view=webview2-winrt-1.0.3405.78&preserve-view=true#createfindoptions)

- [CoreWebView2Find Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3405.78&preserve-view=true)

  - [CoreWebView2Find.ActiveMatchIndex Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3405.78&preserve-view=true#activematchindex)
  - [CoreWebView2Find.ActiveMatchIndexChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3405.78&preserve-view=true#activematchindexchanged)
  - [CoreWebView2Find.FindNext Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3405.78&preserve-view=true#findnext)
  - [CoreWebView2Find.FindPrevious Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3405.78&preserve-view=true#findprevious)
  - [CoreWebView2Find.MatchCount Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3405.78&preserve-view=true#matchcount)
  - [CoreWebView2Find.MatchCountChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3405.78&preserve-view=true#matchcountchanged)
  - [CoreWebView2Find.StartAsync Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3405.78&preserve-view=true#startasync)
  - [CoreWebView2Find.Stop Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3405.78&preserve-view=true#stop)

- [CoreWebView2FindOptions Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2findoptions?view=webview2-winrt-1.0.3405.78&preserve-view=true)
  - [CoreWebView2FindOptions.FindTerm Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2findoptions?view=webview2-winrt-1.0.3405.78&preserve-view=true#findterm)
  - [CoreWebView2FindOptions.IsCaseSensitive Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2findoptions?view=webview2-winrt-1.0.3405.78&preserve-view=true#iscasesensitive)
  - [CoreWebView2FindOptions.ShouldHighlightAllMatches Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2findoptions?view=webview2-winrt-1.0.3405.78&preserve-view=true#shouldhighlightallmatches)
  - [CoreWebView2FindOptions.ShouldMatchWord Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2findoptions?view=webview2-winrt-1.0.3405.78&preserve-view=true#shouldmatchword)
  - [CoreWebView2FindOptions.SuppressDefaultFindDialog Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2findoptions?view=webview2-winrt-1.0.3405.78&preserve-view=true#suppressdefaultfinddialog)

##### [Win32/C++](#tab/win32cpp)

- [ICoreWebView2_28](/microsoft-edge/webview2/reference/win32/icorewebview2_28?view=webview2-1.0.3405.78&preserve-view=true)

  - [ICoreWebView2_28::get_Find](/microsoft-edge/webview2/reference/win32/icorewebview2_28?view=webview2-1.0.3405.78&preserve-view=true#get_find)

- [ICoreWebView2Environment15](/microsoft-edge/webview2/reference/win32/icorewebview2environment15?view=webview2-1.0.3405.78&preserve-view=true)

  - [ICoreWebView2Environment15::CreateFindOptions](/microsoft-edge/webview2/reference/win32/icorewebview2environment15?view=webview2-1.0.3405.78&preserve-view=true#createfindoptions)

- [ICoreWebView2Find](/microsoft-edge/webview2/reference/win32/icorewebview2find?view=webview2-1.0.3405.78&preserve-view=true)

  - [ICoreWebView2Find::add_ActiveMatchIndexChanged](/microsoft-edge/webview2/reference/win32/icorewebview2find?view=webview2-1.0.3405.78&preserve-view=true#add_activematchindexchanged)
  - [ICoreWebView2Find::add_MatchCountChanged](/microsoft-edge/webview2/reference/win32/icorewebview2find?view=webview2-1.0.3405.78&preserve-view=true#add_matchcountchanged)
  - [ICoreWebView2Find::FindNext](/microsoft-edge/webview2/reference/win32/icorewebview2find?view=webview2-1.0.3405.78&preserve-view=true#findnext)
  - [ICoreWebView2Find::FindPrevious](/microsoft-edge/webview2/reference/win32/icorewebview2find?view=webview2-1.0.3405.78&preserve-view=true#findprevious)
  - [ICoreWebView2Find::get_ActiveMatchIndex](/microsoft-edge/webview2/reference/win32/icorewebview2find?view=webview2-1.0.3405.78&preserve-view=true#get_activematchindex)
  - [ICoreWebView2Find::get_MatchCount](/microsoft-edge/webview2/reference/win32/icorewebview2find?view=webview2-1.0.3405.78&preserve-view=true#get_matchcount)
  - [ICoreWebView2Find::remove_ActiveMatchIndexChanged](/microsoft-edge/webview2/reference/win32/icorewebview2find?view=webview2-1.0.3405.78&preserve-view=true#remove_activematchindexchanged)
  - [ICoreWebView2Find::remove_MatchCountChanged](/microsoft-edge/webview2/reference/win32/icorewebview2find?view=webview2-1.0.3405.78&preserve-view=true#remove_matchcountchanged)
  - [ICoreWebView2Find::Start](/microsoft-edge/webview2/reference/win32/icorewebview2find?view=webview2-1.0.3405.78&preserve-view=true#start)
  - [ICoreWebView2Find::Stop](/microsoft-edge/webview2/reference/win32/icorewebview2find?view=webview2-1.0.3405.78&preserve-view=true#stop)

- [ICoreWebView2FindActiveMatchIndexChangedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2findactivematchindexchangedeventhandler?view=webview2-1.0.3405.78&preserve-view=true)

- [ICoreWebView2FindMatchCountChangedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2findmatchcountchangedeventhandler?view=webview2-1.0.3405.78&preserve-view=true)

- [ICoreWebView2FindOptions](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3405.78&preserve-view=true)

  - [ICoreWebView2FindOptions::get_FindTerm](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3405.78&preserve-view=true#get_findterm)
  - [ICoreWebView2FindOptions::get_IsCaseSensitive](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3405.78&preserve-view=true#get_iscasesensitive)
  - [ICoreWebView2FindOptions::get_ShouldHighlightAllMatches](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3405.78&preserve-view=true#get_shouldhighlightallmatches)
  - [ICoreWebView2FindOptions::get_ShouldMatchWord](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3405.78&preserve-view=true#get_shouldmatchword)
  - [ICoreWebView2FindOptions::get_SuppressDefaultFindDialog](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3405.78&preserve-view=true#get_suppressdefaultfinddialog)
  - [ICoreWebView2FindOptions::put_FindTerm](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3405.78&preserve-view=true#put_findterm)
  - [ICoreWebView2FindOptions::put_IsCaseSensitive](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3405.78&preserve-view=true#put_iscasesensitive)
  - [ICoreWebView2FindOptions::put_ShouldHighlightAllMatches](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3405.78&preserve-view=true#put_shouldhighlightallmatches)
  - [ICoreWebView2FindOptions::put_ShouldMatchWord](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3405.78&preserve-view=true#put_shouldmatchword)
  - [ICoreWebView2FindOptions::put_SuppressDefaultFindDialog](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3405.78&preserve-view=true#put_suppressdefaultfinddialog)

- [ICoreWebView2FindStartCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2findstartcompletedhandler?view=webview2-1.0.3405.78&preserve-view=true)

---

###### Allow input event messages to pass through the browser window

The `CoreWebView2ControllerOptions` class now has an `AllowHostInputProcessing` property, which allows user input event messages (keyboard, mouse, touch, or pen) to pass through the browser window, to be received by an app process window.

##### [.NET/C#](#tab/dotnetcsharp)

- `CoreWebView2ControllerOptions` Class:
  - [CoreWebView2ControllerOptions.AllowHostInputProcessing Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controlleroptions.allowhostinputprocessing?view=webview2-dotnet-1.0.3405.78&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

- [CoreWebView2ControllerOptions Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controlleroptions?view=webview2-winrt-1.0.3405.78&preserve-view=true)

- [CoreWebView2ControllerOptions.AllowHostInputProcessing Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controlleroptions?view=webview2-winrt-1.0.3405.78&preserve-view=true#allowhostinputprocessing)

##### [Win32/C++](#tab/win32cpp)

- [ICoreWebView2ControllerOptions4](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions4?view=webview2-1.0.3405.78&preserve-view=true)

  - [ICoreWebView2ControllerOptions4::get_AllowHostInputProcessing](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions4?view=webview2-1.0.3405.78&preserve-view=true#get_allowhostinputprocessing)
  - [ICoreWebView2ControllerOptions4::put_AllowHostInputProcessing](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions4?view=webview2-1.0.3405.78&preserve-view=true#put_allowhostinputprocessing)

<!-- ------------------------------ -->

#### Bug fixes

<!-- ---------- -->

###### Runtime-only

- Fixed a crash in Devtools on Windows Server and Windows 10.

<!-- end of Aug 2025 Release SDK -->

<!-- Aug 2025 Prerelease SDK -->
<!-- ====================================================================== -->

## 1.0.3477-prerelease

Release Date: August 11, 2025

[NuGet package for WebView2 SDK 1.0.3477-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3477-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 140.0.3477.0 or higher.

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 140.0.3477.0 or higher.

<!-- ------------------------------ -->

#### Experimental APIs

No Experimental APIs have been added in this Prerelease SDK.

---

<!-- ------------------------------ -->

#### Promotions

No APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, in this Prerelease SDK.

<!-- ------------------------------ -->

#### Bug fixes

<!-- ---------- -->

###### Runtime-only

- Fixed `put_UserAgent` not working for service workers.
- Fixed a crash in Devtools on Windows Server and Windows 10.
- Removed browser process tracking after calling `remove_BrowserProcessExited`.
- Fixed a memory leak issue in `hostObject` async function calls.
- Fixed touch not working in visual hosting after a long tap.

<!-- end of Aug 2025 Prerelease SDK -->

<!-- Jul 2025 Release SDK -->
<!-- ====================================================================== -->

## 1.0.3351.48

Release Date: July 1, 2025

[NuGet package for WebView2 SDK 1.0.3351.48](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3351.48)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 138.0.3351.48 or higher.

<!-- ------------------------------ -->

#### Promotions

The following APIs have been promoted from Phase 2: Stable in Prerelease, to Phase 3: Stable in Release, and are now included in this Release SDK.

<!-- ---------- -->

###### Allow input event messages to pass through the browser window

The `CoreWebView2ControllerOptions` class now has an `AllowHostInputProcessing` property, which allows user input event messages (keyboard, mouse, touch, or pen) to pass through the browser window, to be received by an app process window.

##### [.NET/C#](#tab/dotnetcsharp)

- `CoreWebView2ControllerOptions` Class:
  - [CoreWebView2ControllerOptions.AllowHostInputProcessing Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controlleroptions.allowhostinputprocessing?view=webview2-dotnet-1.0.3351.48&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

- `CoreWebView2ControllerOptions` Class:
  - [CoreWebView2ControllerOptions.AllowHostInputProcessing Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controlleroptions?view=webview2-winrt-1.0.3351.48&preserve-view=true#allowhostinputprocessing)

##### [Win32/C++](#tab/win32cpp)

- [ICoreWebView2ControllerOptions4](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions4?view=webview2-1.0.3351.48&preserve-view=true)
  - [ICoreWebView2ControllerOptions4::get_AllowHostInputProcessing](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions4?view=webview2-1.0.3351.48&preserve-view=true#get_allowhostinputprocessing)
  - [ICoreWebView2ControllerOptions4::put_AllowHostInputProcessing](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions4?view=webview2-1.0.3351.48&preserve-view=true#put_allowhostinputprocessing)

---

<!-- ------------------------------ -->

#### Bug fixes

<!-- ---------- -->
<!-- ###### Runtime and SDK -->

<!-- * Fixed behavior.  ([Issue #]()) -->

<!-- ---------- -->

###### Runtime-only

- Fixed a blackbox issue on dialogs in visual hosting.

<!-- ---------- -->
<!-- ###### SDK-only -->

<!-- * Fixed behavior.  ([Issue #]()) -->

<!-- end of Jul 2025 Release SDK -->

<!-- Jul 2025 Prerelease SDK -->
<!-- ====================================================================== -->

## 1.0.3415-prerelease

Release Date: July 14, 2025

[NuGet package for WebView2 SDK 1.0.3415-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3415-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 140.0.3415.0 or higher.

<!-- ------------------------------ -->

#### Experimental APIs

The following APIs are in Phase 1: Experimental in Prerelease, and have been added in this Prerelease SDK.

<!-- ---------- -->

###### Enable background processing and offline support (WebView2 Worker APIs)

The WebView2 Worker APIs allow host applications to interact with Web Workers to offload tasks from the main thread, improve responsiveness, and support background operations. These Web Workers include Dedicated Workers, Shared Workers, and Service Workers.

These APIs provide:

- **Lifecycle Events:** Monitor creation and destruction of workers.
- **Messaging Interfaces:** Communicate with workers using `PostMessage` and `WebMessageReceived`.
- **Worker Management:** Query and retrieve worker registrations and instances.

##### [.NET/C#](#tab/dotnetcsharp)

<!-- 1 -->

- `CoreWebView2` Class:
  - [CoreWebView2.DedicatedWorkerCreated Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.dedicatedworkercreated?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)

<!-- 2 -->

- [CoreWebView2DedicatedWorker Class](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworker?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2DedicatedWorker.DedicatedWorkerCreated Event](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworker.dedicatedworkercreated?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2DedicatedWorker.Destroying Event](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworker.destroying?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2DedicatedWorker.PostWebMessageAsJson Method](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworker.postwebmessageasjson?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2DedicatedWorker.PostWebMessageAsString Method](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworker.postwebmessageasstring?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2DedicatedWorker.ScriptUri Property](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworker.scripturi?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2DedicatedWorker.WebMessageReceived Event](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworker.webmessagereceived?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)

<!-- 3 -->

- [CoreWebView2DedicatedWorkerCreatedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworkercreatedeventargs?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2DedicatedWorkerCreatedEventArgs.OriginalSourceFrameInfo Property](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworkercreatedeventargs.originalsourceframeinfo?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2DedicatedWorkerCreatedEventArgs.Worker Property](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworkercreatedeventargs.worker?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)

<!-- 4 -->

- `CoreWebView2Frame` Class:
  - [CoreWebView2Frame.DedicatedWorkerCreated Event](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.dedicatedworkercreated?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)

<!-- 5 -->

- `CoreWebView2Profile` Class:
  - [CoreWebView2Profile.ServiceWorkerManager Property](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.serviceworkermanager?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2Profile.SharedWorkerManager Property](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.sharedworkermanager?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)

<!-- 6 -->

- [CoreWebView2ServiceWorker Class](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworker?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2ServiceWorker.Destroying Event](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworker.destroying?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2ServiceWorker.PostWebMessageAsJson Method](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworker.postwebmessageasjson?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2ServiceWorker.PostWebMessageAsString Method](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworker.postwebmessageasstring?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2ServiceWorker.ScriptUri Property](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworker.scripturi?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2ServiceWorker.WebMessageReceived Event](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworker.webmessagereceived?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)

<!-- 7 -->

- [CoreWebView2ServiceWorkerActivatedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkeractivatedeventargs?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2ServiceWorkerActivatedEventArgs.ActiveServiceWorker Property](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkeractivatedeventargs.activeserviceworker?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)

<!-- 8 -->

- [CoreWebView2ServiceWorkerManager Class](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkermanager?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2ServiceWorkerManager.GetServiceWorkerRegistrationsAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkermanager.getserviceworkerregistrationsasync?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2ServiceWorkerManager.GetServiceWorkerRegistrationsAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkermanager.getserviceworkerregistrationsasync?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2ServiceWorkerManager.ServiceWorkerRegistered Event](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkermanager.serviceworkerregistered?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)

<!-- 9 -->

- [CoreWebView2ServiceWorkerRegisteredEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkerregisteredeventargs?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2ServiceWorkerRegisteredEventArgs.ServiceWorkerRegistration Property](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkerregisteredeventargs.serviceworkerregistration?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)

<!-- 10 -->

- [CoreWebView2ServiceWorkerRegistration Class](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkerregistration?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2ServiceWorkerRegistration.ActiveServiceWorker Property](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkerregistration.activeserviceworker?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2ServiceWorkerRegistration.Origin Property](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkerregistration.origin?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2ServiceWorkerRegistration.ScopeUri Property](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkerregistration.scopeuri?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2ServiceWorkerRegistration.ServiceWorkerActivated Event](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkerregistration.serviceworkeractivated?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2ServiceWorkerRegistration.TopLevelOrigin Property](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkerregistration.toplevelorigin?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2ServiceWorkerRegistration.Unregistering Event](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkerregistration.unregistering?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)

<!-- 11 -->

- [CoreWebView2SharedWorker Class](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworker?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2SharedWorker.Destroying Event](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworker.destroying?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2SharedWorker.Origin Property](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworker.origin?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2SharedWorker.ScriptUri Property](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworker.scripturi?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2SharedWorker.TopLevelOrigin Property](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworker.toplevelorigin?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)

<!-- 12 -->

- [CoreWebView2SharedWorkerCreatedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworkercreatedeventargs?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2SharedWorkerCreatedEventArgs.Worker Property](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworkercreatedeventargs.worker?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)

<!-- 13 -->

- [CoreWebView2SharedWorkerManager Class](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworkermanager?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2SharedWorkerManager.GetSharedWorkersAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworkermanager.getsharedworkersasync?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2SharedWorkerManager.SharedWorkerCreated Event](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworkermanager.sharedworkercreated?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

<!-- 1 -->

- `CoreWebView2` Class:
  - [CoreWebView2.DedicatedWorkerCreated Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#dedicatedworkercreated)

<!-- 2 -->

- [CoreWebView2DedicatedWorker Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworker?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2DedicatedWorker.DedicatedWorkerCreated Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworker?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#dedicatedworkercreated)
  - [CoreWebView2DedicatedWorker.Destroying Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworker?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#destroying)
  - [CoreWebView2DedicatedWorker.PostWebMessageAsJson Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworker?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#postwebmessageasjson)
  - [CoreWebView2DedicatedWorker.PostWebMessageAsString Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworker?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#postwebmessageasstring)
  - [CoreWebView2DedicatedWorker.ScriptUri Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworker?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#scripturi)
  - [CoreWebView2DedicatedWorker.WebMessageReceived Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworker?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#webmessagereceived)

<!-- 3 -->

- [CoreWebView2DedicatedWorkerCreatedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworkercreatedeventargs?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2DedicatedWorkerCreatedEventArgs.Worker Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworkercreatedeventargs?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#worker)
  - [CoreWebView2DedicatedWorkerCreatedEventArgs.OriginalSourceFrameInfo Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworkercreatedeventargs?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#originalsourceframeinfo)

<!-- 4 -->

- `CoreWebView2Frame` Class:
  - [CoreWebView2Frame.DedicatedWorkerCreated Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#dedicatedworkercreated)

<!-- 5 -->

- `CoreWebView2Profile` Class:
  - [CoreWebView2Profile.ServiceWorkerManager Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#serviceworkermanager)
  - [CoreWebView2Profile.SharedWorkerManager Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#sharedworkermanager)

<!-- 6 -->

- [CoreWebView2ServiceWorker Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworker?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2ServiceWorker.Destroying Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworker?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#destroying)
  - [CoreWebView2ServiceWorker.PostWebMessageAsJson Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworker?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#postwebmessageasjson)
  - [CoreWebView2ServiceWorker.PostWebMessageAsString Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworker?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#postwebmessageasstring)
  - [CoreWebView2ServiceWorker.ScriptUri Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworker?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#scripturi)
  - [CoreWebView2ServiceWorker.WebMessageReceived Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworker?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#webmessagereceived)

<!-- 7 -->

- [CoreWebView2ServiceWorkerActivatedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkeractivatedeventargs?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2ServiceWorkerActivatedEventArgs.ActiveServiceWorker Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkeractivatedeventargs?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#activeserviceworker)

<!-- 8 -->

- [CoreWebView2ServiceWorkerManager Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkermanager?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2ServiceWorkerManager.GetServiceWorkerRegistrationsAsync Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkermanager?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#getserviceworkerregistrationsasync)
  - [CoreWebView2ServiceWorkerManager.GetServiceWorkerRegistrationsAsync Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkermanager?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#getserviceworkerregistrationsasync)
  - [CoreWebView2ServiceWorkerManager.ServiceWorkerRegistered Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkermanager?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#serviceworkerregistered)

<!-- 9 -->

- [CoreWebView2ServiceWorkerRegisteredEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkerregisteredeventargs?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2ServiceWorkerRegisteredEventArgs.ServiceWorkerRegistration Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkerregisteredeventargs?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#serviceworkerregistration)

<!-- 10 -->

- [CoreWebView2ServiceWorkerRegistration Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkerregistration?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2ServiceWorkerRegistration.ActiveServiceWorker Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkerregistration?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#activeserviceworker)
  - [CoreWebView2ServiceWorkerRegistration.Origin Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkerregistration?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#origin)
  - [CoreWebView2ServiceWorkerRegistration.ScopeUri Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkerregistration?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#scopeuri)
  - [CoreWebView2ServiceWorkerRegistration.ServiceWorkerActivated Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkerregistration?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#serviceworkeractivated)
  - [CoreWebView2ServiceWorkerRegistration.TopLevelOrigin Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkerregistration?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#toplevelorigin)
  - [CoreWebView2ServiceWorkerRegistration.Unregistering Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkerregistration?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#unregistering)

<!-- 11 -->

- [CoreWebView2SharedWorker Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworker?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2SharedWorker.Destroying Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworker?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#destroying)
  - [CoreWebView2SharedWorker.Origin Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworker?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#origin)
  - [CoreWebView2SharedWorker.ScriptUri Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworker?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#scripturi)
  - [CoreWebView2SharedWorker.TopLevelOrigin Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworker?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#toplevelorigin)

<!-- 12 -->

- [CoreWebView2SharedWorkerCreatedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworkercreatedeventargs?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2SharedWorkerCreatedEventArgs.Worker Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworkercreatedeventargs?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#worker)

<!-- 13 -->

- [CoreWebView2SharedWorkerManager Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworkermanager?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2SharedWorkerManager.GetSharedWorkersAsync Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworkermanager?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#getsharedworkersasync)
  - [CoreWebView2SharedWorkerManager.SharedWorkerCreated Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworkermanager?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#sharedworkercreated)

##### [Win32/C++](#tab/win32cpp)

<!-- 1 -->

- [ICoreWebView2Experimental30](/microsoft-edge/webview2/reference/win32/icorewebview2experimental30?view=webview2-1.0.3415-prerelease&preserve-view=true)
  - [ICoreWebView2Experimental30::add_DedicatedWorkerCreated](/microsoft-edge/webview2/reference/win32/icorewebview2experimental30?view=webview2-1.0.3415-prerelease&preserve-view=true#add_dedicatedworkercreated)
  - [ICoreWebView2Experimental30::remove_DedicatedWorkerCreated](/microsoft-edge/webview2/reference/win32/icorewebview2experimental30?view=webview2-1.0.3415-prerelease&preserve-view=true#remove_dedicatedworkercreated)

<!-- 2 -->

- [ICoreWebView2ExperimentalDedicatedWorker](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldedicatedworker?view=webview2-1.0.3415-prerelease&preserve-view=true)
  - [ICoreWebView2ExperimentalDedicatedWorker::add_DedicatedWorkerCreated](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldedicatedworker?view=webview2-1.0.3415-prerelease&preserve-view=true#add_dedicatedworkercreated)
  - [ICoreWebView2ExperimentalDedicatedWorker::add_Destroying](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldedicatedworker?view=webview2-1.0.3415-prerelease&preserve-view=true#add_destroying)
  - [ICoreWebView2ExperimentalDedicatedWorker::add_WebMessageReceived](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldedicatedworker?view=webview2-1.0.3415-prerelease&preserve-view=true#add_webmessagereceived)
  - [ICoreWebView2ExperimentalDedicatedWorker::get_ScriptUri](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldedicatedworker?view=webview2-1.0.3415-prerelease&preserve-view=true#get_scripturi)
  - [ICoreWebView2ExperimentalDedicatedWorker::PostWebMessageAsJson](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldedicatedworker?view=webview2-1.0.3415-prerelease&preserve-view=true#postwebmessageasjson)
  - [ICoreWebView2ExperimentalDedicatedWorker::PostWebMessageAsString](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldedicatedworker?view=webview2-1.0.3415-prerelease&preserve-view=true#postwebmessageasstring)
  - [ICoreWebView2ExperimentalDedicatedWorker::remove_DedicatedWorkerCreated](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldedicatedworker?view=webview2-1.0.3415-prerelease&preserve-view=true#remove_dedicatedworkercreated)
  - [ICoreWebView2ExperimentalDedicatedWorker::remove_Destroying](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldedicatedworker?view=webview2-1.0.3415-prerelease&preserve-view=true#remove_destroying)
  - [ICoreWebView2ExperimentalDedicatedWorker::remove_WebMessageReceived](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldedicatedworker?view=webview2-1.0.3415-prerelease&preserve-view=true#remove_webmessagereceived)

<!-- 3 -->

- [ICoreWebView2ExperimentalDedicatedWorkerCreatedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldedicatedworkercreatedeventargs?view=webview2-1.0.3415-prerelease&preserve-view=true)
  - [ICoreWebView2ExperimentalDedicatedWorkerCreatedEventArgs::get_OriginalSourceFrameInfo](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldedicatedworkercreatedeventargs?view=webview2-1.0.3415-prerelease&preserve-view=true#get_originalsourceframeinfo)
  - [ICoreWebView2ExperimentalDedicatedWorkerCreatedEventArgs::get_Worker](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldedicatedworkercreatedeventargs?view=webview2-1.0.3415-prerelease&preserve-view=true#get_worker)

<!-- win32-only -->

- [ICoreWebView2ExperimentalDedicatedWorkerCreatedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldedicatedworkercreatedeventhandler?view=webview2-1.0.3415-prerelease&preserve-view=true)

<!-- win32-only -->

- [ICoreWebView2ExperimentalDedicatedWorkerDedicatedWorkerCreatedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldedicatedworkerdedicatedworkercreatedeventhandler?view=webview2-1.0.3415-prerelease&preserve-view=true)

<!-- win32-only -->

- [ICoreWebView2ExperimentalDedicatedWorkerDestroyingEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldedicatedworkerdestroyingeventhandler?view=webview2-1.0.3415-prerelease&preserve-view=true)

<!-- win32-only -->

- [ICoreWebView2ExperimentalDedicatedWorkerWebMessageReceivedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldedicatedworkerwebmessagereceivedeventhandler?view=webview2-1.0.3415-prerelease&preserve-view=true)

<!-- 4 -->

- [ICoreWebView2ExperimentalFrame9](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframe9?view=webview2-1.0.3415-prerelease&preserve-view=true)
  - [ICoreWebView2ExperimentalFrame9::add_DedicatedWorkerCreated](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframe9?view=webview2-1.0.3415-prerelease&preserve-view=true#add_dedicatedworkercreated)
  - [ICoreWebView2ExperimentalFrame9::remove_DedicatedWorkerCreated](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframe9?view=webview2-1.0.3415-prerelease&preserve-view=true#remove_dedicatedworkercreated)

<!-- win32-only -->

- [ICoreWebView2ExperimentalFrameDedicatedWorkerCreatedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframededicatedworkercreatedeventhandler?view=webview2-1.0.3415-prerelease&preserve-view=true)

<!-- win32-only -->

- [ICoreWebView2ExperimentalGetServiceWorkerRegistrationsCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalgetserviceworkerregistrationscompletedhandler?view=webview2-1.0.3415-prerelease&preserve-view=true)

<!-- win32-only -->

- [ICoreWebView2ExperimentalGetSharedWorkersCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalgetsharedworkerscompletedhandler?view=webview2-1.0.3415-prerelease&preserve-view=true)

<!-- 5 -->

- [ICoreWebView2ExperimentalProfile13](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile13?view=webview2-1.0.3415-prerelease&preserve-view=true)
  - [ICoreWebView2ExperimentalProfile13::get_ServiceWorkerManager](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile13?view=webview2-1.0.3415-prerelease&preserve-view=true#get_serviceworkermanager)
  - [ICoreWebView2ExperimentalProfile13::get_SharedWorkerManager](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile13?view=webview2-1.0.3415-prerelease&preserve-view=true#get_sharedworkermanager)

<!-- 6 -->

- [ICoreWebView2ExperimentalServiceWorker](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworker?view=webview2-1.0.3415-prerelease&preserve-view=true)
  - [ICoreWebView2ExperimentalServiceWorker::add_Destroying](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworker?view=webview2-1.0.3415-prerelease&preserve-view=true#add_destroying)
  - [ICoreWebView2ExperimentalServiceWorker::add_WebMessageReceived](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworker?view=webview2-1.0.3415-prerelease&preserve-view=true#add_webmessagereceived)
  - [ICoreWebView2ExperimentalServiceWorker::get_ScriptUri](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworker?view=webview2-1.0.3415-prerelease&preserve-view=true#get_scripturi)
  - [ICoreWebView2ExperimentalServiceWorker::PostWebMessageAsJson](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworker?view=webview2-1.0.3415-prerelease&preserve-view=true#postwebmessageasjson)
  - [ICoreWebView2ExperimentalServiceWorker::PostWebMessageAsString](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworker?view=webview2-1.0.3415-prerelease&preserve-view=true#postwebmessageasstring)
  - [ICoreWebView2ExperimentalServiceWorker::remove_Destroying](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworker?view=webview2-1.0.3415-prerelease&preserve-view=true#remove_destroying)
  - [ICoreWebView2ExperimentalServiceWorker::remove_WebMessageReceived](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworker?view=webview2-1.0.3415-prerelease&preserve-view=true#remove_webmessagereceived)

<!-- 7 -->

- [ICoreWebView2ExperimentalServiceWorkerActivatedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkeractivatedeventargs?view=webview2-1.0.3415-prerelease&preserve-view=true)
  - [ICoreWebView2ExperimentalServiceWorkerActivatedEventArgs::get_ActiveServiceWorker](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkeractivatedeventargs?view=webview2-1.0.3415-prerelease&preserve-view=true#get_activeserviceworker)

<!-- win32-only -->

- [ICoreWebView2ExperimentalServiceWorkerActivatedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkeractivatedeventhandler?view=webview2-1.0.3415-prerelease&preserve-view=true)

<!-- win32-only -->

- [ICoreWebView2ExperimentalServiceWorkerDestroyingEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkerdestroyingeventhandler?view=webview2-1.0.3415-prerelease&preserve-view=true)

<!-- 8 -->

- [ICoreWebView2ExperimentalServiceWorkerManager](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkermanager?view=webview2-1.0.3415-prerelease&preserve-view=true)
  - [ICoreWebView2ExperimentalServiceWorkerManager::add_ServiceWorkerRegistered](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkermanager?view=webview2-1.0.3415-prerelease&preserve-view=true#add_serviceworkerregistered)
  - [ICoreWebView2ExperimentalServiceWorkerManager::GetServiceWorkerRegistrations](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkermanager?view=webview2-1.0.3415-prerelease&preserve-view=true#getserviceworkerregistrations)
  - [ICoreWebView2ExperimentalServiceWorkerManager::GetServiceWorkerRegistrationsForScope](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkermanager?view=webview2-1.0.3415-prerelease&preserve-view=true#getserviceworkerregistrationsforscope)
  - [ICoreWebView2ExperimentalServiceWorkerManager::remove_ServiceWorkerRegistered](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkermanager?view=webview2-1.0.3415-prerelease&preserve-view=true#remove_serviceworkerregistered)

<!-- 9 -->

- [ICoreWebView2ExperimentalServiceWorkerRegisteredEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkerregisteredeventargs?view=webview2-1.0.3415-prerelease&preserve-view=true)
  - [ICoreWebView2ExperimentalServiceWorkerRegisteredEventArgs::get_ServiceWorkerRegistration](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkerregisteredeventargs?view=webview2-1.0.3415-prerelease&preserve-view=true#get_serviceworkerregistration)

<!-- win32-only -->

- [ICoreWebView2ExperimentalServiceWorkerRegisteredEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkerregisteredeventhandler?view=webview2-1.0.3415-prerelease&preserve-view=true)

<!-- 10 -->

- [ICoreWebView2ExperimentalServiceWorkerRegistration](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkerregistration?view=webview2-1.0.3415-prerelease&preserve-view=true)
  - [ICoreWebView2ExperimentalServiceWorkerRegistration::add_ServiceWorkerActivated](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkerregistration?view=webview2-1.0.3415-prerelease&preserve-view=true#add_serviceworkeractivated)
  - [ICoreWebView2ExperimentalServiceWorkerRegistration::add_Unregistering](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkerregistration?view=webview2-1.0.3415-prerelease&preserve-view=true#add_unregistering)
  - [ICoreWebView2ExperimentalServiceWorkerRegistration::get_ActiveServiceWorker](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkerregistration?view=webview2-1.0.3415-prerelease&preserve-view=true#get_activeserviceworker)
  - [ICoreWebView2ExperimentalServiceWorkerRegistration::get_Origin](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkerregistration?view=webview2-1.0.3415-prerelease&preserve-view=true#get_origin)
  - [ICoreWebView2ExperimentalServiceWorkerRegistration::get_ScopeUri](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkerregistration?view=webview2-1.0.3415-prerelease&preserve-view=true#get_scopeuri)
  - [ICoreWebView2ExperimentalServiceWorkerRegistration::get_TopLevelOrigin](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkerregistration?view=webview2-1.0.3415-prerelease&preserve-view=true#get_toplevelorigin)
  - [ICoreWebView2ExperimentalServiceWorkerRegistration::remove_ServiceWorkerActivated](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkerregistration?view=webview2-1.0.3415-prerelease&preserve-view=true#remove_serviceworkeractivated)
  - [ICoreWebView2ExperimentalServiceWorkerRegistration::remove_Unregistering](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkerregistration?view=webview2-1.0.3415-prerelease&preserve-view=true#remove_unregistering)

<!-- win32-only -->

- [ICoreWebView2ExperimentalServiceWorkerRegistrationCollectionView](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkerregistrationcollectionview?view=webview2-1.0.3415-prerelease&preserve-view=true)
  - [ICoreWebView2ExperimentalServiceWorkerRegistrationCollectionView::get_Count](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkerregistrationcollectionview?view=webview2-1.0.3415-prerelease&preserve-view=true#get_count)
  - [ICoreWebView2ExperimentalServiceWorkerRegistrationCollectionView::GetValueAtIndex](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkerregistrationcollectionview?view=webview2-1.0.3415-prerelease&preserve-view=true#getvalueatindex)

<!-- win32-only -->

- [ICoreWebView2ExperimentalServiceWorkerRegistrationUnregisteringEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkerregistrationunregisteringeventhandler?view=webview2-1.0.3415-prerelease&preserve-view=true)

<!-- win32-only -->

- [ICoreWebView2ExperimentalServiceWorkerWebMessageReceivedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalserviceworkerwebmessagereceivedeventhandler?view=webview2-1.0.3415-prerelease&preserve-view=true)

<!-- 11 -->

- [ICoreWebView2ExperimentalSharedWorker](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsharedworker?view=webview2-1.0.3415-prerelease&preserve-view=true)
  - [ICoreWebView2ExperimentalSharedWorker::add_Destroying](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsharedworker?view=webview2-1.0.3415-prerelease&preserve-view=true#add_destroying)
  - [ICoreWebView2ExperimentalSharedWorker::get_Origin](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsharedworker?view=webview2-1.0.3415-prerelease&preserve-view=true#get_origin)
  - [ICoreWebView2ExperimentalSharedWorker::get_ScriptUri](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsharedworker?view=webview2-1.0.3415-prerelease&preserve-view=true#get_scripturi)
  - [ICoreWebView2ExperimentalSharedWorker::get_TopLevelOrigin](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsharedworker?view=webview2-1.0.3415-prerelease&preserve-view=true#get_toplevelorigin)
  - [ICoreWebView2ExperimentalSharedWorker::remove_Destroying](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsharedworker?view=webview2-1.0.3415-prerelease&preserve-view=true#remove_destroying)

<!-- win32-only -->

- [ICoreWebView2ExperimentalSharedWorkerCollectionView](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsharedworkercollectionview?view=webview2-1.0.3415-prerelease&preserve-view=true)
  - [ICoreWebView2ExperimentalSharedWorkerCollectionView::get_Count](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsharedworkercollectionview?view=webview2-1.0.3415-prerelease&preserve-view=true#get_count)
  - [ICoreWebView2ExperimentalSharedWorkerCollectionView::GetValueAtIndex](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsharedworkercollectionview?view=webview2-1.0.3415-prerelease&preserve-view=true#getvalueatindex)

<!-- 12 -->

- [ICoreWebView2ExperimentalSharedWorkerCreatedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsharedworkercreatedeventargs?view=webview2-1.0.3415-prerelease&preserve-view=true)
  - [ICoreWebView2ExperimentalSharedWorkerCreatedEventArgs::get_Worker](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsharedworkercreatedeventargs?view=webview2-1.0.3415-prerelease&preserve-view=true#get_worker)

<!-- win32-only -->

- [ICoreWebView2ExperimentalSharedWorkerCreatedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsharedworkercreatedeventhandler?view=webview2-1.0.3415-prerelease&preserve-view=true)

<!-- win32-only -->

- [ICoreWebView2ExperimentalSharedWorkerDestroyingEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsharedworkerdestroyingeventhandler?view=webview2-1.0.3415-prerelease&preserve-view=true)

<!-- 13 -->

- [ICoreWebView2ExperimentalSharedWorkerManager](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsharedworkermanager?view=webview2-1.0.3415-prerelease&preserve-view=true)
  - [ICoreWebView2ExperimentalSharedWorkerManager::add_SharedWorkerCreated](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsharedworkermanager?view=webview2-1.0.3415-prerelease&preserve-view=true#add_sharedworkercreated)
  - [ICoreWebView2ExperimentalSharedWorkerManager::GetSharedWorkers](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsharedworkermanager?view=webview2-1.0.3415-prerelease&preserve-view=true#getsharedworkers)
  - [ICoreWebView2ExperimentalSharedWorkerManager::remove_SharedWorkerCreated](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsharedworkermanager?view=webview2-1.0.3415-prerelease&preserve-view=true#remove_sharedworkercreated)

---

<!-- ---------- -->

###### Render custom title bars (Window Controls Overlay API)

The Window Controls Overlay API enables developers to create custom title bars by rendering caption buttons (minimize, maximize, restore, close) directly inside the WebView2 window. The Window Controls Overlay appears in the top corner of the WebView, and integrates seamlessly with your app's UI.

Use this API when:

- You want to replace the default OS title bar with a fully customized in-app title bar.
- You're working with non-client region features, such as `app-region: drag` and `IsNonClientRegionSupportEnabled`.

This API is ideal for apps that require a modern, immersive UI experience.

##### [.NET/C#](#tab/dotnetcsharp)

- `CoreWebView2` Class:

  - [CoreWebView2.WindowControlsOverlay Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.windowcontrolsoverlay?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)

- [CoreWebView2WindowControlsOverlay Class](/dotnet/api/microsoft.web.webview2.core.corewebview2windowcontrolsoverlay?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2WindowControlsOverlay.IsEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2windowcontrolsoverlay.isenabled?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2WindowControlsOverlay.BackgroundColor Property](/dotnet/api/microsoft.web.webview2.core.corewebview2windowcontrolsoverlay.backgroundcolor?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2WindowControlsOverlay.Height Property](/dotnet/api/microsoft.web.webview2.core.corewebview2windowcontrolsoverlay.height?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

- `CoreWebView2` Class:

  - [CoreWebView2.WindowControlsOverlay Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#windowcontrolsoverlay)

- [CoreWebView2WindowControlsOverlay Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2windowcontrolsoverlay?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2WindowControlsOverlay.IsEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2windowcontrolsoverlay?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#isenabled)
  - [CoreWebView2WindowControlsOverlay.BackgroundColor Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2windowcontrolsoverlay?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#backgroundcolor)
  - [CoreWebView2WindowControlsOverlay.Height Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2windowcontrolsoverlay?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#height)

##### [Win32/C++](#tab/win32cpp)

- [ICoreWebView2Experimental31](/microsoft-edge/webview2/reference/win32/icorewebview2experimental31?view=webview2-1.0.3415-prerelease&preserve-view=true)

  - [ICoreWebView2Experimental31::get_WindowControlsOverlay](/microsoft-edge/webview2/reference/win32/icorewebview2experimental31?view=webview2-1.0.3415-prerelease&preserve-view=true#get_windowcontrolsoverlay)

- [ICoreWebView2ExperimentalWindowControlsOverlay](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalwindowcontrolsoverlay?view=webview2-1.0.3415-prerelease&preserve-view=true)
  - [ICoreWebView2ExperimentalWindowControlsOverlay::get_BackgroundColor](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalwindowcontrolsoverlay?view=webview2-1.0.3415-prerelease&preserve-view=true#get_backgroundcolor)
  - [ICoreWebView2ExperimentalWindowControlsOverlay::get_Height](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalwindowcontrolsoverlay?view=webview2-1.0.3415-prerelease&preserve-view=true#get_height)
  - [ICoreWebView2ExperimentalWindowControlsOverlay::get_IsEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalwindowcontrolsoverlay?view=webview2-1.0.3415-prerelease&preserve-view=true#get_isenabled)
  - [ICoreWebView2ExperimentalWindowControlsOverlay::put_BackgroundColor](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalwindowcontrolsoverlay?view=webview2-1.0.3415-prerelease&preserve-view=true#put_backgroundcolor)
  - [ICoreWebView2ExperimentalWindowControlsOverlay::put_Height](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalwindowcontrolsoverlay?view=webview2-1.0.3415-prerelease&preserve-view=true#put_height)
  - [ICoreWebView2ExperimentalWindowControlsOverlay::put_IsEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalwindowcontrolsoverlay?view=webview2-1.0.3415-prerelease&preserve-view=true#put_isenabled)

---

<!-- ------------------------------ -->

#### Promotions

The following APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, and are included in this Prerelease SDK.

<!-- ---------- -->

###### Customize the Find behavior (Find API)

The Find API allows you to programmatically control **Find** operations, and enables adding the following functionality to your app:

- Customize **Find** options, including **Find Term**, **Case Sensitivity**, **Word Matching**, **Match Highlighting**, and **Default UI Suppression**.
- Find text strings and navigate among them within a WebView2 control.
- Programmatically initiate **Find** operations, and navigate **Find** results.
- Suppress the default **Find** UI.
- Track the status of **Find** operations.

There are known issues with the Find API for PDF documents. When you view a PDF document within a WebView2 control, the **Find** feature currently only provides the first index and the number of matches found. For example, if the string occurs three times in a PDF, the UI would say **1/3** and would not support programmatically calling **Next** or **Previous**.

We're actively investigating these issues, and we encourage you to report any problems you encounter, by using the [WebView2Feedback](https://github.com/MicrosoftEdge/WebViewFeedback) repo.

##### [.NET/C#](#tab/dotnetcsharp)

- `CoreWebView2` Class:

  - [CoreWebView2.Find Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.find?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true) -->

- `CoreWebView2Environment` Class:

  - [CoreWebView2Environment.CreateFindOptions Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createfindoptions?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)

- [CoreWebView2Find Class](/dotnet/api/microsoft.web.webview2.core.corewebview2find?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true) -->

  - [CoreWebView2Find.ActiveMatchIndex Property](/dotnet/api/microsoft.web.webview2.core.corewebview2find.activematchindex?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)

  - [CoreWebView2Find.ActiveMatchIndexChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2find.activematchindexchanged?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)

  - [CoreWebView2Find.FindNext Method](/dotnet/api/microsoft.web.webview2.core.corewebview2find.findnext?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)

  - [CoreWebView2Find.FindPrevious Method](/dotnet/api/microsoft.web.webview2.core.corewebview2find.findprevious?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2Find.MatchCount Property](/dotnet/api/microsoft.web.webview2.core.corewebview2find.matchcount?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2Find.MatchCountChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2find.matchcountchanged?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2Find.StartAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2find.startasync?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2Find.Stop Method](/dotnet/api/microsoft.web.webview2.core.corewebview2find.stop?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)

- [CoreWebView2FindOptions Class](/dotnet/api/microsoft.web.webview2.core.corewebview2findoptions?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2FindOptions.FindTerm Property](/dotnet/api/microsoft.web.webview2.core.corewebview2findoptions.findterm?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2FindOptions.IsCaseSensitive Property](/dotnet/api/microsoft.web.webview2.core.corewebview2findoptions.iscasesensitive?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2FindOptions.ShouldHighlightAllMatches Property](/dotnet/api/microsoft.web.webview2.core.corewebview2findoptions.shouldhighlightallmatches?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2FindOptions.ShouldMatchWord Property](/dotnet/api/microsoft.web.webview2.core.corewebview2findoptions.shouldmatchword?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)
  - [CoreWebView2FindOptions.SuppressDefaultFindDialog Property](/dotnet/api/microsoft.web.webview2.core.corewebview2findoptions.suppressdefaultfinddialog?view=webview2-dotnet-1.0.3415-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

- `CoreWebView2` Class:

  - [CoreWebView2.Find Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#find) -->

* [CoreWebView2Find Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true)

  - [CoreWebView2Find.ActiveMatchIndex Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#activematchindex)
  - [CoreWebView2Find.ActiveMatchIndexChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#activematchindexchanged)
  - [CoreWebView2Find.FindNext Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#findnext)
  - [CoreWebView2Find.FindPrevious Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#findprevious)
  - [CoreWebView2Find.MatchCount Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#matchcount)
  - [CoreWebView2Find.MatchCountChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#matchcountchanged)
  - [CoreWebView2Find.StartAsync Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#startasync)
  - [CoreWebView2Find.Stop Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#stop)

  * [CoreWebView2Environment.CreateFindOptions Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#createfindoptions)

- [CoreWebView2Find Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true) -->

  - [CoreWebView2Find.ActiveMatchIndex Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#activematchindex) -->

  - [CoreWebView2Find.ActiveMatchIndexChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#activematchindexchanged) -->

  - [CoreWebView2Find.FindNext Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#findnext) -->

  - [CoreWebView2Find.FindPrevious Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#findprevious) -->

  - [CoreWebView2Find.MatchCount Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#matchcount) -->

  - [CoreWebView2Find.MatchCountChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#matchcountchanged) -->

  - [CoreWebView2Find.StartAsync Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#startasync) -->

  - [CoreWebView2FindOptions Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2findoptions?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true) -->

  - [CoreWebView2FindOptions.FindTerm Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2findoptions?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#findterm) -->

  - [CoreWebView2FindOptions.IsCaseSensitive Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2findoptions?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#iscasesensitive)

  - [CoreWebView2FindOptions.ShouldHighlightAllMatches Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2findoptions?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#shouldhighlightallmatches)

  - [CoreWebView2FindOptions.ShouldMatchWord Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2findoptions?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#shouldmatchword)

  - [CoreWebView2FindOptions.SuppressDefaultFindDialog Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2findoptions?view=webview2-winrt-1.0.3415-prerelease&preserve-view=true#suppressdefaultfinddialog)

##### [Win32/C++](#tab/win32cpp)

- [ICoreWebView2_28](/microsoft-edge/webview2/reference/win32/icorewebview2_28?view=webview2-1.0.3415-prerelease&preserve-view=true)

* [ICoreWebView2Environment15](/microsoft-edge/webview2/reference/win32/icorewebview2environment15?view=webview2-1.0.3415-prerelease&preserve-view=true)

  - [ICoreWebView2Environment15::CreateFindOptions](/microsoft-edge/webview2/reference/win32/icorewebview2environment15?view=webview2-1.0.3415-prerelease&preserve-view=true#createfindoptions)

* [ICoreWebView2Find](/microsoft-edge/webview2/reference/win32/icorewebview2find?view=webview2-1.0.3415-prerelease&preserve-view=true)
  - [ICoreWebView2Find::add_ActiveMatchIndexChanged](/microsoft-edge/webview2/reference/win32/icorewebview2find?view=webview2-1.0.3415-prerelease&preserve-view=true#add_activematchindexchanged)
  - [ICoreWebView2Find::add_MatchCountChanged](/microsoft-edge/webview2/reference/win32/icorewebview2find?view=webview2-1.0.3415-prerelease&preserve-view=true#add_matchcountchanged)
  - [ICoreWebView2Find::FindNext](/microsoft-edge/webview2/reference/win32/icorewebview2find?view=webview2-1.0.3415-prerelease&preserve-view=true#findnext)
  - [ICoreWebView2Find::FindPrevious](/microsoft-edge/webview2/reference/win32/icorewebview2find?view=webview2-1.0.3415-prerelease&preserve-view=true#findprevious)
  - [ICoreWebView2Find::get_ActiveMatchIndex](/microsoft-edge/webview2/reference/win32/icorewebview2find?view=webview2-1.0.3415-prerelease&preserve-view=true#get_activematchindex)
  - [ICoreWebView2Find::get_MatchCount](/microsoft-edge/webview2/reference/win32/icorewebview2find?view=webview2-1.0.3415-prerelease&preserve-view=true#get_matchcount)
  - [ICoreWebView2Find::remove_ActiveMatchIndexChanged](/microsoft-edge/webview2/reference/win32/icorewebview2find?view=webview2-1.0.3415-prerelease&preserve-view=true#remove_activematchindexchanged)
  - [ICoreWebView2Find::remove_MatchCountChanged](/microsoft-edge/webview2/reference/win32/icorewebview2find?view=webview2-1.0.3415-prerelease&preserve-view=true#remove_matchcountchanged)
  - [ICoreWebView2Find::Start](/microsoft-edge/webview2/reference/win32/icorewebview2find?view=webview2-1.0.3415-prerelease&preserve-view=true#start)
  - [ICoreWebView2Find::Stop](/microsoft-edge/webview2/reference/win32/icorewebview2find?view=webview2-1.0.3415-prerelease&preserve-view=true#stop)

- [ICoreWebView2Environment15::CreateFindOptions](/microsoft-edge/webview2/reference/win32/icorewebview2environment15?view=webview2-1.0.3415-prerelease&preserve-view=true#createfindoptions)

- [ICoreWebView2Find](/microsoft-edge/webview2/reference/win32/icorewebview2find?view=webview2-1.0.3415-prerelease&preserve-view=true)

* [ICoreWebView2FindOptions](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3415-prerelease&preserve-view=true)
  - [ICoreWebView2FindOptions::get_FindTerm](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3415-prerelease&preserve-view=true#get_findterm)
  - [ICoreWebView2FindOptions::get_IsCaseSensitive](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3415-prerelease&preserve-view=true#get_iscasesensitive)
  - [ICoreWebView2FindOptions::get_ShouldHighlightAllMatches](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3415-prerelease&preserve-view=true#get_shouldhighlightallmatches)
  - [ICoreWebView2FindOptions::get_ShouldMatchWord](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3415-prerelease&preserve-view=true#get_shouldmatchword)
  - [ICoreWebView2FindOptions::get_SuppressDefaultFindDialog](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3415-prerelease&preserve-view=true#get_suppressdefaultfinddialog)
  - [ICoreWebView2FindOptions::put_FindTerm](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3415-prerelease&preserve-view=true#put_findterm)
  - [ICoreWebView2FindOptions::put_IsCaseSensitive](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3415-prerelease&preserve-view=true#put_iscasesensitive)
  - [ICoreWebView2FindOptions::put_ShouldHighlightAllMatches](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3415-prerelease&preserve-view=true#put_shouldhighlightallmatches)
  - [ICoreWebView2FindOptions::put_ShouldMatchWord](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3415-prerelease&preserve-view=true#put_shouldmatchword)
  - [ICoreWebView2FindOptions::put_SuppressDefaultFindDialog](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3415-prerelease&preserve-view=true#put_suppressdefaultfinddialog)

- [ICoreWebView2FindActiveMatchIndexChangedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2findactivematchindexchangedeventhandler?view=webview2-1.0.3415-prerelease&preserve-view=true)

- [ICoreWebView2FindMatchCountChangedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2findmatchcountchangedeventhandler?view=webview2-1.0.3415-prerelease&preserve-view=true)

- [ICoreWebView2FindOptions](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3415-prerelease&preserve-view=true)

  - [ICoreWebView2FindOptions::get_FindTerm](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3415-prerelease&preserve-view=true#get_findterm)
  - [ICoreWebView2FindOptions::get_IsCaseSensitive](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3415-prerelease&preserve-view=true#get_iscasesensitive)
  - [ICoreWebView2FindOptions::get_ShouldHighlightAllMatches](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3415-prerelease&preserve-view=true#get_shouldhighlightallmatches)
  - [ICoreWebView2FindOptions::get_ShouldMatchWord](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3415-prerelease&preserve-view=true#get_shouldmatchword)
  - [ICoreWebView2FindOptions::get_SuppressDefaultFindDialog](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3415-prerelease&preserve-view=true#get_suppressdefaultfinddialog)
  - [ICoreWebView2FindOptions::put_FindTerm](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3415-prerelease&preserve-view=true#put_findterm)
  - [ICoreWebView2FindOptions::put_IsCaseSensitive](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3415-prerelease&preserve-view=true#put_iscasesensitive)
  - [ICoreWebView2FindOptions::put_ShouldHighlightAllMatches](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3415-prerelease&preserve-view=true#put_shouldhighlightallmatches)
  - [ICoreWebView2FindOptions::put_ShouldMatchWord](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3415-prerelease&preserve-view=true#put_shouldmatchword)
  - [ICoreWebView2FindOptions::put_SuppressDefaultFindDialog](/microsoft-edge/webview2/reference/win32/icorewebview2findoptions?view=webview2-1.0.3415-prerelease&preserve-view=true#put_suppressdefaultfinddialog)

  - [ICoreWebView2FindStartCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2findstartcompletedhandler?view=webview2-1.0.3415-prerelease&preserve-view=true)

<!-- ------------------------------ -->

#### Bug fixes

<!-- ---------- -->
<!-- ###### Runtime and SDK -->

<!-- * Fixed behavior.  ([Issue #]()) -->

<!-- ---------- -->

###### Runtime-only

- Fixed a blackbox issue on dialogs in visual hosting.
- Fixed `put_UserAgent` not working for service workers.
- Fixed crash in DevTools on Windows Server and Windows 10.

<!-- ---------- -->
<!-- ###### SDK-only -->

<!-- * Fixed behavior.  ([Issue #]()) -->

<!-- end of Jul 2025 Prerelease SDK -->

<!-- Jun 2025 Release SDK -->
<!-- ====================================================================== -->

## 1.0.3296.44

Release Date: June 03, 2025

[NuGet package for WebView2 SDK 1.0.3296.44](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3296.44)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 137.0.3296.44 or higher.

<!-- ------------------------------ -->

#### Promotions

The following APIs have been promoted to Stable and are now included in this Release SDK.

<!-- ---------- -->

###### Set default background color on WebView2 initialization (DefaultBackgroundColor API)

The DefaultBackgroundColor API allows users to set the `DefaultBackgroundColor` property at initialization. This prevents a disruptive white flash during the WebView2 loading process.

##### [.NET/C#](#tab/dotnetcsharp)

- `CoreWebView2ControllerOptions` Class:
  - [CoreWebView2ControllerOptions.DefaultBackgroundColor Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controlleroptions.defaultbackgroundcolor?view=webview2-dotnet-1.0.3296.44&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

- `CoreWebView2ControllerOptions` Class:
  - [CoreWebView2ControllerOptions.DefaultBackgroundColor Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controlleroptions?view=webview2-winrt-1.0.3296.44&preserve-view=true#defaultbackgroundcolor)

##### [Win32/C++](#tab/win32cpp)

- [ICoreWebView2ControllerOptions3](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions3?view=webview2-1.0.3296.44&preserve-view=true)
  - [ICoreWebView2ControllerOptions3::get_DefaultBackgroundColor](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions3?view=webview2-1.0.3296.44&preserve-view=true#get_defaultbackgroundcolor)
  - [ICoreWebView2ControllerOptions3::put_DefaultBackgroundColor](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions3?view=webview2-1.0.3296.44&preserve-view=true#put_defaultbackgroundcolor)

---

<!-- ------------------------------ -->

#### Bug fixes

<!-- ---------- -->

###### Runtime-only

- Fixed the margins in the printed PDF.

<!-- end of Jun 2025 Release SDK -->

<!-- Jun 2025 Prerelease SDK -->
<!-- ====================================================================== -->

## 1.0.3344-prerelease

Release Date: June 03, 2025

[NuGet package for WebView2 SDK 1.0.3344-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3344-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 138.0.3344.0 or higher.

<!-- ------------------------------ -->

#### Experimental APIs

No Experimental APIs have been added in this Prerelease SDK.

<!-- ------------------------------ -->

#### Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.

<!-- ---------- -->

###### Allow input event messages to pass through the browser window

The `CoreWebView2ControllerOptions` class now has an `AllowHostInputProcessing` property, which allows user input event messages (keyboard, mouse, touch, or pen) to pass through the browser window, to be received by an app process window.

##### [.NET/C#](#tab/dotnetcsharp)

- `CoreWebView2ControllerOptions` Class:
  - [CoreWebView2ControllerOptions.AllowHostInputProcessing Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controlleroptions.allowhostinputprocessing?view=webview2-dotnet-1.0.3344-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

- `CoreWebView2ControllerOptions` Class:
  - [CoreWebView2ControllerOptions.AllowHostInputProcessing Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controlleroptions?view=webview2-winrt-1.0.3344-prerelease&preserve-view=true#allowhostinputprocessing)

##### [Win32/C++](#tab/win32cpp)

- [ICoreWebView2ControllerOptions4](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions4?view=webview2-1.0.3344-prerelease&preserve-view=true)
  - [ICoreWebView2ControllerOptions4::get_AllowHostInputProcessing](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions4?view=webview2-1.0.3344-prerelease&preserve-view=true#get_allowhostinputprocessing)
  - [ICoreWebView2ControllerOptions4::put_AllowHostInputProcessing](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions4?view=webview2-1.0.3344-prerelease&preserve-view=true#put_allowhostinputprocessing)

---

<!-- ------------------------------ -->

#### Bug fixes

<!-- ---------- -->

###### Runtime-only

- Fixed a bug where a mouse event doesn't fire after a touch event.
- Disabled Web capture on the WebView2 control.
- Fixed the **Downloads** dialog.
- Fixed an issue with downloads in the default browser frame. ([Issue #5196](https://github.com/MicrosoftEdge/WebView2Feedback/issues/5196))
- Fixed the margins in the printed PDF.

<!-- end of June 2025 Prerelease SDK -->

<!-- May 2025 Release SDK -->
<!-- ====================================================================== -->

## 1.0.3240.44

Release Date: May 05, 2025

[NuGet package for WebView2 SDK 1.0.3240.44](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3240.44)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 136.0.3240.44 or higher.

<!-- ------------------------------ -->

#### Promotions

The following APIs have been promoted to Stable and are now included in this Release SDK.

<!-- ---------- -->

###### Track navigation history for nested iframes (FrameCreatedEvent API)

The FrameCreatedEvent API supports nested iframes, such as recording the navigation history for a second-level iframe. Without this API, WebView2 only tracks first-level iframes, which are the direct child iframes of the main frame. Using this API, your app can subscribe to the nested iframe creation event, giving the app access to all properties, methods, and events of `CoreWebView2Frame` for the nested iframe.

Use this API to manage iframe tracking on a page that contains multiple levels of iframes. You can choose to track any of the following:

- Only the main page and first-level iframes (the default behavior).
- A partial WebView2 frames tree with specific iframes of interest.
- The full WebView2 frames tree.

##### [.NET/C#](#tab/dotnetcsharp)

- `CoreWebView2Frame` Class:
  - [CoreWebView2Frame.FrameCreated Event](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.framecreated?view=webview2-dotnet-1.0.3240.44&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

- `CoreWebView2Frame` Class:
  - [CoreWebView2Frame.FrameCreated Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame?view=webview2-winrt-1.0.3240.44&preserve-view=true#framecreated)

##### [Win32/C++](#tab/win32cpp)

- [ICoreWebView2Frame7](/microsoft-edge/webview2/reference/win32/icorewebview2frame7?view=webview2-1.0.3240.44&preserve-view=true)

  - [ICoreWebView2Frame7::add_FrameCreated](/microsoft-edge/webview2/reference/win32/icorewebview2frame7?view=webview2-1.0.3240.44&preserve-view=true#add_framecreated)
  - [ICoreWebView2Frame7::remove_FrameCreated](/microsoft-edge/webview2/reference/win32/icorewebview2frame7?view=webview2-1.0.3240.44&preserve-view=true#remove_framecreated)

- [ICoreWebView2FrameChildFrameCreatedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2framechildframecreatedeventhandler?view=webview2-1.0.3240.44&preserve-view=true)<!-- win32 only -->

---

<!-- ------------------------------ -->

#### Bug fixes

<!-- ---------- -->

###### Runtime-only

- Fixed an issue where downloads from within the default browser frame didn't complete. ([Issue #5196](https://github.com/MicrosoftEdge/WebView2Feedback/issues/5196))
- Fixed an issue where the pipe name was incorrectly returned, leading to a crash in some UWP apps.

<!-- end of May 2025 Release SDK -->

<!-- May 2025 Prerelease SDK -->
<!-- ====================================================================== -->

## 1.0.3296-prerelease

Release Date: May 12, 2025

[NuGet package for WebView2 SDK 1.0.3296-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3296-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 137.0.3296.0 or higher.

<!-- ------------------------------ -->

#### Experimental APIs

No Experimental APIs have been added in this Prerelease SDK.

<!-- ------------------------------ -->

#### Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.

<!-- ---------- -->

###### Set default background color on WebView2 initialization (DefaultBackgroundColor API)

The DefaultBackgroundColor API allows users to set the `DefaultBackgroundColor` property at initialization. This prevents a disruptive white flash during the WebView2 loading process.

##### [.NET/C#](#tab/dotnetcsharp)

- `CoreWebView2ControllerOptions` Class:
  - [CoreWebView2ControllerOptions.DefaultBackgroundColor Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controlleroptions.defaultbackgroundcolor?view=webview2-dotnet-1.0.3296-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

- `CoreWebView2ControllerOptions` Class:
  - [CoreWebView2ControllerOptions.DefaultBackgroundColor Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controlleroptions?view=webview2-winrt-1.0.3296-prerelease&preserve-view=true#defaultbackgroundcolor)

##### [Win32/C++](#tab/win32cpp)

- [ICoreWebView2ControllerOptions3](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions3?view=webview2-1.0.3296-prerelease&preserve-view=true)
  - [ICoreWebView2ControllerOptions3::get_DefaultBackgroundColor](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions3?view=webview2-1.0.3296-prerelease&preserve-view=true#get_defaultbackgroundcolor)
  - [ICoreWebView2ControllerOptions3::put_DefaultBackgroundColor](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions3?view=webview2-1.0.3296-prerelease&preserve-view=true#put_defaultbackgroundcolor)

---

<!-- ------------------------------ -->

#### Bug fixes

<!-- ---------- -->

###### Runtime-only

- Fixed the **Find** bar no longer appearing after the window is shifted.
- Fixed a bug where the app wasn't able to cancel navigation to login pages via the `NavigationStarting` event.
- Fixed an issue where downloads from within the default browser frame didn't complete. ([Issue #5196](https://github.com/MicrosoftEdge/WebView2Feedback/issues/5196))
- Fixed an issue where the pipe name was incorrectly returned, leading to a crash in some UWP apps.

<!-- end of May 2025 Prerelease SDK -->

<!-- Apr 2025 Release SDK -->
<!-- ====================================================================== -->

## 1.0.3179.45

Release Date: April 07, 2025

[NuGet package for WebView2 SDK 1.0.3179.45](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3179.45)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 135.0.3179.45 or higher.

<!-- ------------------------------ -->

#### Promotions

No additional APIs have been promoted to Stable and added in this Release SDK.

<!-- ------------------------------ -->

#### Bug fixes

<!-- ---------- -->

###### Runtime-only

- Fixed the HTML Select element (\<select\>) to make it selectable, in WPF apps.
- Fixed navigation of `edge://crashes` within a WebView2 control.
- Fixed potential crash and UI issues when invoking the Windows Credentials UI from a WebView2 instance.<!-- https://www.bing.com/search?q=Windows+Credential+UI -->
- Fixed a bug where users were unable to type in an input field with autofill info. ([Issue #5144](https://github.com/MicrosoftEdge/WebView2Feedback/issues/5144))

<!-- end of Apr 2025 Release SDK -->

<!-- Apr 2025 Prerelease SDK -->
<!-- ====================================================================== -->

## 1.0.3230-prerelease

Release Date: April 07, 2025

[NuGet package for WebView2 SDK 1.0.3230-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3230-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 136.0.3230.0 or higher.

<!-- ------------------------------ -->

#### Experimental APIs

No Experimental APIs have been added in this Prerelease SDK.

<!-- ------------------------------ -->

#### Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.

<!-- ---------- -->

###### Track navigation history for nested iframes (FrameCreatedEvent API)

The FrameCreatedEvent API supports nested iframes, such as recording the navigation history for a second-level iframe. Without this API, WebView2 only tracks first-level iframes, which are the direct child iframes of the main frame. Using this API, your app can subscribe to the nested iframe creation event, giving the app access to all properties, methods, and events of `CoreWebView2Frame` for the nested iframe.

Use this API to manage iframe tracking on a page that contains multiple levels of iframes. You can choose to track any of the following:

- Only the main page and first-level iframes (the default behavior).
- A partial WebView2 frames tree with specific iframes of interest.
- The full WebView2 frames tree.

##### [.NET/C#](#tab/dotnetcsharp)

- `CoreWebView2Frame` Class:
  - [CoreWebView2Frame.FrameCreated Event](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.framecreated?view=webview2-dotnet-1.0.3230-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

- `CoreWebView2Frame` Class:
  - [CoreWebView2Frame.FrameCreated Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame?view=webview2-winrt-1.0.3230-prerelease&preserve-view=true#framecreated)

##### [Win32/C++](#tab/win32cpp)

- [ICoreWebView2Frame7](/microsoft-edge/webview2/reference/win32/icorewebview2frame7?view=webview2-1.0.3230-prerelease&preserve-view=true)<!-- vs. ICoreWebView2ExperimentalFrame8 -->

  - [ICoreWebView2Frame7::add_FrameCreated](/microsoft-edge/webview2/reference/win32/icorewebview2frame7?view=webview2-1.0.3230-prerelease&preserve-view=true#add_framecreated)
  - [ICoreWebView2Frame7::remove_FrameCreated](/microsoft-edge/webview2/reference/win32/icorewebview2frame7?view=webview2-1.0.3230-prerelease&preserve-view=true#remove_framecreated)

- [ICoreWebView2FrameChildFrameCreatedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2framechildframecreatedeventhandler?view=webview2-1.0.3230-prerelease&preserve-view=true)<!-- win32 only --><!-- vs. ICoreWebView2ExperimentalFrameChildFrameCreatedEventHandler -->

---

<!-- ------------------------------ -->

#### Bug fixes

<!-- ---------- -->

###### Runtime-only

- Fixed an issue in WPF where the \<datalist\> dropdown closed when the mouse moved outside the WebView2 control bounds.
- Fixed navigation of `edge://crashes` within a WebView2 control.
- Fixed the HTML Select element (\<select\>) to make it selectable, in WPF apps.
- Fixed potential crash and UI issues when invoking the Windows Credentials UI from a WebView2 instance.<!-- https://www.bing.com/search?q=Windows+Credential+UI -->
- Fixed bug where users unable to type in input field with autofill info. ([Issue #5144](https://github.com/MicrosoftEdge/WebView2Feedback/issues/5144))
- Fixed a regression in the [Status bar](../concepts/overview-features-apis.md#status-bar) APIs.

<!-- ---------- -->

###### SDK-only

- Fixed **Tab**, **Shift+Tab**, and **Arrow** keys in Window to Visual hosting mode.

<!-- end of Apr 2025 Prerelease SDK -->

<!-- Mar 2025 Release SDK -->
<!-- ====================================================================== -->

## 1.0.3124.44

Release Date: March 10, 2025

[NuGet package for WebView2 SDK 1.0.3124.44](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3124.44)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 134.0.3124.44 or higher.

<!-- ------------------------------ -->

#### Promotions

No additional APIs have been promoted to Stable and added in this Release SDK.

<!-- ------------------------------ -->

#### Bug fixes

<!-- ---------- -->

###### Runtime-only

- Extensions won't get disabled in WebView2 by using `AddBrowserExtensionAsync`, regardless of whether developer mode is on. ([Issue #5113](https://github.com/MicrosoftEdge/WebView2Feedback/issues/5113))
- Disabled background update of network time. ([Issue #5047](https://github.com/MicrosoftEdge/WebView2Feedback/issues/5047))
- Fixed the download popup not being displayed when `target="_blank"`. ([Issue #5063](https://github.com/MicrosoftEdge/WebView2Feedback/issues/5063))

<!-- end of Mar 2025 Release SDK -->

<!-- Mar 2025 Prerelease SDK -->
<!-- ====================================================================== -->

## 1.0.3171-prerelease

Release Date: March 10, 2025

[NuGet package for WebView2 SDK 1.0.3171-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3171-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 135.0.3171.0 or higher.

<!-- ------------------------------ -->

#### Experimental APIs

No Experimental APIs have been added in this Prerelease SDK.

<!-- ------------------------------ -->

#### Promotions

No APIs have been promoted from Experimental to Stable in this Prerelease SDK.

<!-- ------------------------------ -->

#### Bug fixes

<!-- ---------- -->

###### Runtime and SDK

- Fixed host object async method exception handling. ([Issue #3402](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3402))
- Fixed documentation for `CoreWebVIew2.Navigate`. ([Issue #5091](https://github.com/MicrosoftEdge/WebView2Feedback/issues/5091))

<!-- ---------- -->

###### Runtime-only

- Fixed an "Add to Chrome" store installation regression.
- Fixed folder uploads in UWP and WinUI. ([Issue #3275](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3275))
- Extensions won't get disabled in WebView2 by using `AddBrowserExtensionAsync`, regardless of whether developer mode is on. ([Issue #5113](https://github.com/MicrosoftEdge/WebView2Feedback/issues/5113))
- Disabled background update of network time. ([Issue #5047](https://github.com/MicrosoftEdge/WebView2Feedback/issues/5047))
- Fixed the download popup not being displayed when `target="_blank"`. ([Issue #5063](https://github.com/MicrosoftEdge/WebView2Feedback/issues/5063))

<!-- ---------- -->

###### SDK-only

- Fixes a crash that could occur when the Garbage Collector calls `Finalize` on a thread other than the main thread.

<!-- end of Mar 2025 Prerelease SDK -->

<!-- ====================================================================== -->

## See also

- [About Release Notes for the WebView2 SDK](./about.md)
- [Archived Release Notes for the WebView2 SDK](./archive.md)
- [Overview of WebView2 APIs](../concepts/overview-features-apis.md) - outlines many of the APIs, by feature area, that are in Release SDK packages.
- [Contacting the Microsoft Edge WebView2 team](../contact.md)
- [Release notes for Microsoft Edge web platform](../../web-platform/release-notes/index.md)

API Reference:

- [WebView2 API Reference](../webview2-api-reference.md)
  - .NET: [Microsoft.Web.WebView2.Core Namespace](/dotnet/api/microsoft.web.webview2.core)<!-- https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core -->
  - WinRT: [Microsoft.Web.WebView2.Core Namespace](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/)<!-- https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/ -->
  - Win32: [Reference (WebView2 Win32 C++)](/microsoft-edge/webview2/reference/win32/)<!-- https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/ -->
