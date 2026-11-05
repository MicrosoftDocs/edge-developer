---
title: Prerelease SDK 1.0.4365-prerelease, for Runtime 158 (Oct. 28, 2026)
description: Release notes for Microsoft Edge WebView2 SDK 1.0.4365-prerelease.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 10/28/2026
---
# Prerelease SDK 1.0.4365-prerelease, for Runtime 158 (Oct. 28, 2026)

Release notes for Microsoft Edge WebView2 Prerelease SDK, release date: Oct. 28, 2026.

[NuGet package for WebView2 SDK 1.0.4365-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.4365-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 158.0.4365.0 or later; see [Preview Runtime 158.0.4370.1 (Nov. 5, 2026)](../runtime/158.md).


<!-- ====================================================================== -->
## Breaking changes

Breaking changes are planned for v159, regarding the WebView2 Runtime.

See:
* [Upcoming breaking change: Removing the `msAbydosHandwritingAttr` WebView2 browser flag](../runtime/156.md#upcoming-breaking-change-removing-the-msabydoshandwritingattr-webview2-browser-flag)<!-- todo later: when 159.md exists, change link from 156 to 159 --> in _Runtime 156.0.4314.42 (Oct. 23, 2026)_.
* [Upcoming breaking change: Required ACL setup for app-managed WebView2 Fixed Version runtimes on Windows](../runtime/156.md#upcoming-breaking-change-required-acl-setup-for-app-managed-webview2-fixed-version-runtimes-on-windows)<!-- todo later: when 159.md exists, change link from 156 to 159 --> in _Runtime 156.0.4314.42 (Oct. 23, 2026)_.


<!-- ====================================================================== -->
## Experimental APIs (Phase 1: Experimental in Prerelease)

The following APIs are in Phase 1: Experimental in Prerelease, and have been added in this Prerelease SDK.


<!-- ------------------------------ -->
#### `CoreWebView2ContextMenuTarget` class adds members `GetSpellCheckSuggestions` and `HasSpellingError`

_todo: add desc, maybe reword heading_

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2ContextMenuTarget` Class:
   * [CoreWebView2ContextMenuTarget.GetSpellCheckSuggestionsAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenutarget.getspellchecksuggestionsasync?view=webview2-dotnet-1.0.4365-prerelease&preserve-view=true)
   * [CoreWebView2ContextMenuTarget.HasSpellingError Property](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenutarget.hasspellingerror?view=webview2-dotnet-1.0.4365-prerelease&preserve-view=true)

* [CoreWebView2SpellCheckSuggestion Class](/dotnet/api/microsoft.web.webview2.core.corewebview2spellchecksuggestion?view=webview2-dotnet-1.0.4365-prerelease&preserve-view=true)
   * [CoreWebView2SpellCheckSuggestion.CommandId Property](/dotnet/api/microsoft.web.webview2.core.corewebview2spellchecksuggestion.commandid?view=webview2-dotnet-1.0.4365-prerelease&preserve-view=true)
   * [CoreWebView2SpellCheckSuggestion.SuggestionText Property](/dotnet/api/microsoft.web.webview2.core.corewebview2spellchecksuggestion.suggestiontext?view=webview2-dotnet-1.0.4365-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2ContextMenuTarget` Class:
   * [CoreWebView2ContextMenuTarget.GetSpellCheckSuggestionsAsync Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2contextmenutarget?view=webview2-winrt-1.0.4365-prerelease&preserve-view=true#getspellchecksuggestionsasync)
   * [CoreWebView2ContextMenuTarget.HasSpellingError Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2contextmenutarget?view=webview2-winrt-1.0.4365-prerelease&preserve-view=true#hasspellingerror)

* [CoreWebView2SpellCheckSuggestion Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2spellchecksuggestion?view=webview2-winrt-1.0.4365-prerelease&preserve-view=true)
   * [CoreWebView2SpellCheckSuggestion.CommandId Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2spellchecksuggestion?view=webview2-winrt-1.0.4365-prerelease&preserve-view=true#commandid)
   * [CoreWebView2SpellCheckSuggestion.SuggestionText Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2spellchecksuggestion?view=webview2-winrt-1.0.4365-prerelease&preserve-view=true#suggestiontext)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalContextMenuTarget2](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenutarget2?view=webview2-1.0.4365-prerelease&preserve-view=true)
  * [ICoreWebView2ExperimentalContextMenuTarget2::get_HasSpellingError](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenutarget2?view=webview2-1.0.4365-prerelease&preserve-view=true#get_hasspellingerror)
  * [ICoreWebView2ExperimentalContextMenuTarget2::GetSpellCheckSuggestions](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenutarget2?view=webview2-1.0.4365-prerelease&preserve-view=true#getspellchecksuggestions)

* [ICoreWebView2ExperimentalGetSpellCheckSuggestionsCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalgetspellchecksuggestionscompletedhandler?view=webview2-1.0.4365-prerelease&preserve-view=true)<!-- win32 only -->

* [ICoreWebView2ExperimentalSpellCheckSuggestion](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalspellchecksuggestion?view=webview2-1.0.4365-prerelease&preserve-view=true)
  * [ICoreWebView2ExperimentalSpellCheckSuggestion::get_CommandId](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalspellchecksuggestion?view=webview2-1.0.4365-prerelease&preserve-view=true#get_commandid)
  * [ICoreWebView2ExperimentalSpellCheckSuggestion::get_SuggestionText](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalspellchecksuggestion?view=webview2-1.0.4365-prerelease&preserve-view=true#get_suggestiontext)

* [ICoreWebView2ExperimentalSpellCheckSuggestionCollectionView](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalspellchecksuggestioncollectionview?view=webview2-1.0.4365-prerelease&preserve-view=true)<!-- todo: if not new, unlink --><!-- win32 only -->
  * [ICoreWebView2ExperimentalSpellCheckSuggestionCollectionView::get_Count](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalspellchecksuggestioncollectionview?view=webview2-1.0.4365-prerelease&preserve-view=true#get_count)
  * [ICoreWebView2ExperimentalSpellCheckSuggestionCollectionView::GetValueAtIndex](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalspellchecksuggestioncollectionview?view=webview2-1.0.4365-prerelease&preserve-view=true#getvalueatindex)

---


<!-- ====================================================================== -->
## Bug fixes

* Deprecated the PPAPI process-kind and process-failure enum values.  The values remain available for compatibility, but are no longer emitted, because WebView2 no longer creates PPAPI processes.<!-- from relnotes script output file Prerelease_SDK_release_notes_158.0.4365.0.md; SDK and Runtime -->


<!-- ====================================================================== -->
## See also

* [Preview Runtime 158.0.4370.1 (Nov. 5, 2026)](../runtime/158.md)
* [Release notes for WebView2](../index.md)
   * [Release notes for the WebView2 Runtime](../runtime/index.md)
   * [Release notes for WebView2 SDKs](./index.md)
