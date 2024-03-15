---
title: Release Notes for WebView2 Prerelease SDK 1.0.2194-prerelease
description: Release notes for Microsoft Edge WebView2 for Win32, WPF, and WinForms, covering new features, APIs, and fixes.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 11/06/2023
---
# Release Notes for WebView2 Prerelease SDK 1.0.2194-prerelease

Release Date: November 6, 2023

[NuGet package for WebView2 SDK 1.0.2194-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2194-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 120.0.2194.0 or higher.


<!-- ====================================================================== -->
## Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.

* Support for browser extensions in WebView2:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2BrowserExtension Class](/dotnet/api/microsoft.web.webview2.core.corewebview2browserextension?view=webview2-dotnet-1.0.2194-prerelease&preserve-view=true)
* `CoreWebView2EnvironmentOptions` Class:
   * [CoreWebView2EnvironmentOptions.AreBrowserExtensionsEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.arebrowserextensionsenabled?view=webview2-dotnet-1.0.2194-prerelease&preserve-view=true)
* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.AddBrowserExtensionAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.addbrowserextensionasync?view=webview2-dotnet-1.0.2194-prerelease&preserve-view=true)
   * [CoreWebView2Profile.GetBrowserExtensionsAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.getbrowserextensionsasync?view=webview2-dotnet-1.0.2194-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2BrowserExtension Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2browserextension?view=webview2-winrt-1.0.2194-prerelease&preserve-view=true)
* `CoreWebView2EnvironmentOptions` Class:
   * [CoreWebView2EnvironmentOptions.AreBrowserExtensionsEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions?view=webview2-winrt-1.0.2194-prerelease&preserve-view=true#arebrowserextensionsenabled)
* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.AddBrowserExtensionAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.2194-prerelease&preserve-view=true#addbrowserextensionasync)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2BrowserExtension](/microsoft-edge/webview2/reference/win32/icorewebview2browserextension?view=webview2-1.0.2194-prerelease&preserve-view=true)
    * [ICoreWebView2BrowserExtension::get_Id](/microsoft-edge/webview2/reference/win32/icorewebview2browserextension?view=webview2-1.0.2194-prerelease&preserve-view=true#get_id)
    * [ICoreWebView2BrowserExtension::get_Name](/microsoft-edge/webview2/reference/win32/icorewebview2browserextension?view=webview2-1.0.2194-prerelease&preserve-view=true#get_name)
    * [ICoreWebView2BrowserExtension::Remove](/microsoft-edge/webview2/reference/win32/icorewebview2browserextension?view=webview2-1.0.2194-prerelease&preserve-view=true#remove)
    * [ICoreWebView2BrowserExtension::get_IsEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2browserextension?view=webview2-1.0.2194-prerelease&preserve-view=true#get_isenabled)
    * [ICoreWebView2BrowserExtension::Enable](/microsoft-edge/webview2/reference/win32/icorewebview2browserextension?view=webview2-1.0.2194-prerelease&preserve-view=true#enable)
* [ICoreWebView2BrowserExtensionEnableCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2browserextensionenablecompletedhandler?view=webview2-1.0.2194-prerelease&preserve-view=true)
* [ICoreWebView2BrowserExtensionRemoveCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2browserextensionremovecompletedhandler?view=webview2-1.0.2194-prerelease&preserve-view=true)
* [ICoreWebView2BrowserExtensionList](/microsoft-edge/webview2/reference/win32/icorewebview2browserextensionlist?view=webview2-1.0.2194-prerelease&preserve-view=true)
    * [ICoreWebView2BrowserExtensionList::get_Count](/microsoft-edge/webview2/reference/win32/icorewebview2browserextensionlist?view=webview2-1.0.2194-prerelease&preserve-view=true#get_count)
    * [ICoreWebView2BrowserExtensionList::GetValueAtIndex](/microsoft-edge/webview2/reference/win32/icorewebview2browserextensionlist?view=webview2-1.0.2194-prerelease&preserve-view=true#getvalueatindex)
* [ICoreWebView2EnvironmentOptions6](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions6?view=webview2-1.0.2194-prerelease&preserve-view=true)
    * [ICoreWebView2EnvironmentOptions6::get_AreBrowserExtensionsEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions6?view=webview2-1.0.2194-prerelease&preserve-view=true#get_arebrowserextensionsenabled)
    * [ICoreWebView2EnvironmentOptions6::put_AreBrowserExtensionsEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions6?view=webview2-1.0.2194-prerelease&preserve-view=true#put_arebrowserextensionsenabled)
* [ICoreWebView2Profile7](/microsoft-edge/webview2/reference/win32/icorewebview2profile7?view=webview2-1.0.2194-prerelease&preserve-view=true)
    * [ICoreWebView2Profile7::AddBrowserExtension](/microsoft-edge/webview2/reference/win32/icorewebview2profile7?view=webview2-1.0.2194-prerelease&preserve-view=true#addbrowserextension)
    * [ICoreWebView2Profile7::GetBrowserExtensions](/microsoft-edge/webview2/reference/win32/icorewebview2profile7?view=webview2-1.0.2194-prerelease&preserve-view=true#getbrowserextensions)
* [ICoreWebView2ProfileAddBrowserExtensionCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2profileaddbrowserextensioncompletedhandler?view=webview2-1.0.2194-prerelease&preserve-view=true)
* [ICoreWebView2ProfileGetBrowserExtensionsCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2profilegetbrowserextensionscompletedhandler?view=webview2-1.0.2194-prerelease&preserve-view=true)

---


<!-- ====================================================================== -->
## Bug fixes

* Fixed an issue where WebView2 would sometimes render blurry content or no content after changing monitor scale or switching between RDP and docking modes.  (Runtime-only)
* Fixed an issue in `TextServicesFoundation` causing a crash when a WebView2 instance was destroyed.  (Runtime-only)
* Fixes a memory leak in .NET when web messages are sent from WebView2, but aren't read from the application side.  (Runtime and SDK)  ([Issue #3794](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3794))
* Fixed an issue causing the `ScaleFactor` setting to not work properly for all WebView2 Print APIs.  (Runtime-only)  ([Issue #4082](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4082))


<!-- ====================================================================== -->
## See also

* [Release Notes for the WebView2 SDK](./index.md)
* [WebView2 Roadmap](../roadmap.md)
