---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: Microsoft Edge WebView2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/29/2019
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge
---

# Globals 

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[CreateWebView2EnvironmentWithDetails](#createwebview2environmentwithdetails) | DLL export to create a WebView2 environment with a custom version of Edge, user data directory and/or additional browser switches.
[CreateWebView2Environment](#createwebview2environment) | Creates an evergreen WebView2 Environment using the installed Edge version.

## Members

#### CreateWebView2EnvironmentWithDetails 

> public STDAPI [CreateWebView2EnvironmentWithDetails](#webview2_8idl_1a2c6f99f8774694a7cfb8522f37c2c099)(PCWSTR browserExecutableFolder,PCWSTR userDataFolder,WEBVIEW2_RELEASE_CHANNEL_PREFERENCE releaseChannelPreference,PCWSTR additionalBrowserArguments,[IWebView2CreateWebView2EnvironmentCompletedHandler](IWebView2CreateWebView2EnvironmentCompletedHandler.md#interface_i_web_view2_create_web_view2_environment_completed_handler) * environment_created_handler)

DLL export to create a WebView2 environment with a custom version of Edge, user data directory and/or additional browser switches.

browserExecutableFolder is the relative path to the folder that contains the embedded Edge. The embedded Edge can be obtained by copying the version named folder of an installed Edge, like 73.0.52.0 sub folder of an installed 73.0.52.0 Edge. The folder should have msedge.exe, msedge.dll, etc. Use null or empty string for browserExecutableFolder to create WebView using Edge installed on the machine, in which case the API will try to find the installed Edge for the channel specified in the releaseChannelPreference parameter first per user install and then per machine install.

userDataFolder can be specified to change the default user data folder location for the embedded browser. The path can be an absolute location or a relative location to the executable.

additionalBrowserArguments can be specified to change the behaviour of the WebView. These will be passed to the browser process as part of the command line. See [Run Chromium with Flags](https://aka.ms/RunChromiumWithFlags) for more information about command line switches to browser process. If the app is launched with a command line switch &ndash;edge-webview-switches=xxx the value of that switch (xxx in the above example) will also be appended to the browser process command line. Certain switches like &ndash;user-data-dir are internal and important to WebView. Those switches will be ignored even if specified. If the same switches are specified multiple times, the last one wins. Note that this also applies to switches like &ndash;enable-features. There is no attempt to merge the different values of the same switch. App process's command line &ndash;edge-webview-switches value are processed after additional_switches parameter is processed. Also note that as browser process might be shared among WebViews, the switches is not guaranteed to be applied except for the first WebView that starts the browser process. If parsing failed for the specified switches, they will be ignored. nullptr will run browser process with no flags.

releaseChannelPreference is the release channel to use when browserExecutableFolder is null or empty string. See browserExecutableFolder for more information.

environment_created_handler is the handler result to the async operation which will contain the WebView2Environment that got created.

The browserExecutableFolder, userDataFolder, additionalBrowserArguments, and releaseChannelPreference members of the environmentParams may be overridden by values in the registry. When creating a WebView2Environment the following registry keys are checked:

```cpp
[{Root}\Software\Policies\Microsoft\EmbeddedBrowserWebView\LoaderOverride\{AppId}]
"releaseChannelPreference"=dword:00000000
"browserExecutableFolder"=""
"userDataFolder"=""
"additionalBrowserArguments"=""
```

First we check with Root as HKLM and then HKCU. AppId is first set to the Application User Model ID of the caller's process, then if there's no corresponding regsitry key the AppId is set to the executable name of the caller's process, or if that isn't a registry key then '*'. If an override registry key is found then we use the browserExecutableFolder, userDataFolder, additionalBrowserArguments, and releaseChannelPreference registry values as replacements for the corresponding values in CreateWebView2EnvironmentWithDetails parameters. If any of those registry values isn't present, then the parameter passed to CreateWebView2Environment is used.

#### CreateWebView2Environment 

> public STDAPI [CreateWebView2Environment](#webview2_8idl_1aced004c0da5db43a2e1bec42807b7024)([IWebView2CreateWebView2EnvironmentCompletedHandler](IWebView2CreateWebView2EnvironmentCompletedHandler.md#interface_i_web_view2_create_web_view2_environment_completed_handler) * environment_created_handler)

Creates an evergreen WebView2 Environment using the installed Edge version.

This is equivalent to calling CreateWebView2EnvironmentWithDetails with nullptr for browserExecutableFolder, userDataFolder, additionalBrowserArguments, and WEBVIEW2_RELEASE_CHANNEL_PREFERENCE_STABLE for releaseChannelPreference. See CreateWebView2EnvironmentWithDetails for more details.

