---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: Microsoft Edge WebView2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/11/2019
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
[GetWebView2BrowserVersionInfo](#getwebview2browserversioninfo) | Get the browser version info including channel name if it is not the stable channel or the Embedded Edge.

## Members

#### CreateWebView2EnvironmentWithDetails 

> public STDAPI [CreateWebView2EnvironmentWithDetails](#createwebview2environmentwithdetails)(PCWSTR browserExecutableFolder,PCWSTR userDataFolder,PCWSTR additionalBrowserArguments,[IWebView2CreateWebView2EnvironmentCompletedHandler](IWebView2CreateWebView2EnvironmentCompletedHandler.md#iwebview2createwebview2environmentcompletedhandler) * environment_created_handler)

DLL export to create a WebView2 environment with a custom version of Edge, user data directory and/or additional browser switches.

browserExecutableFolder is the relative path to the folder that contains the embedded Edge. The embedded Edge can be obtained by copying the version named folder of an installed Edge, like 73.0.52.0 sub folder of an installed 73.0.52.0 Edge. The folder should have msedge.exe, msedge.dll, etc. Use null or empty string for browserExecutableFolder to create WebView using Edge installed on the machine, in which case the API will try to find a compatible version of Edge installed on the machine according to the channel preference trying to find first per user install and then per machine install.

The default channel search order is stable, beta, dev, and canary. When there is an override WEBVIEW2_RELEASE_CHANNEL_PREFERENCE environment variable or applicable releaseChannelPreference registry value with the value of 1, the channel search order is reversed.

userDataFolder can be specified to change the default user data folder location for WebView2. The path can be an absolute file path or a relative file path that is interpreted as relative to the current process's executable. Otherwise, for UWP apps, the default user data folder will be the app data folder for the package; for non-UWP apps, the default user data folder `{Executable File Name}.WebView2` will be created in the same directory next to the app executable. WebView2 creation can fail if the executable is running in a directory that the process doesn't have permission to create a new folder in. The app is responsible to clean up its user data folder when it is done.

additionalBrowserArguments can be specified to change the behavior of the WebView. These will be passed to the browser process as part of the command line. See [Run Chromium with Flags](https://aka.ms/RunChromiumWithFlags) for more information about command line switches to browser process. If the app is launched with a command line switch `--edge-webview-switches=xxx` the value of that switch (xxx in the above example) will also be appended to the browser process command line. Certain switches like `--user-data-dir` are internal and important to WebView. Those switches will be ignored even if specified. If the same switches are specified multiple times, the last one wins. Note that this also applies to switches like `--enable-features`. There is no attempt to merge the different values of the same switch. App process's command line `--edge-webview-switches` value are processed after the additionalBrowserArguments parameter is processed. Also note that as a browser process might be shared among WebViews, the switches are not guaranteed to be applied except for the first WebView that starts the browser process. If parsing failed for the specified switches, they will be ignored. `nullptr` will run browser process with no flags.

environment_created_handler is the handler result to the async operation which will contain the WebView2Environment that got created.

The browserExecutableFolder, userDataFolder and additionalBrowserArguments members of the environmentParams may be overridden by values either specified in environment variables or in the registry.

When creating a WebView2Environment the following environment variables are checked:

```cpp
WEBVIEW2_BROWSER_EXECUTABLE_FOLDER
WEBVIEW2_USER_DATA_FOLDER
WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS
WEBVIEW2_RELEASE_CHANNEL_PREFERENCE
```

If an override environment variable is found then we use the browserExecutableFolder, userDataFolder and additionalBrowserArguments values as replacements for the corresponding values in CreateWebView2EnvironmentWithDetails parameters.

While not strictly an override, there exists an additional environment variable that can be set:

```cpp
WEBVIEW2_WAIT_FOR_SCRIPT_DEBUGGER
```

When found with a non-empty value, this indicates that the WebView is being launched under a script debugger. In this case, the WebView will issue a `Page.waitForDebugger` CDP command that will cause script execution inside the WebView to pause on launch, until a debugger issues a corresponding `Runtime.runIfWaitingForDebugger` CDP command to resume execution. Note: There is no registry key equivalent of this environment variable.

If none of those environment variables exist, then the registry is examined next. The following registry keys are checked:

```cpp
[{Root}\Software\Policies\Microsoft\EmbeddedBrowserWebView\LoaderOverride\{AppId}]
"releaseChannelPreference"=dword:00000000
"browserExecutableFolder"=""
"userDataFolder"=""
"additionalBrowserArguments"=""
```

First we check with Root as HKLM and then HKCU. AppId is first set to the Application User Model ID of the caller's process, then if there's no corresponding registry key the AppId is set to the executable name of the caller's process, or if that isn't a registry key then '*'. If an override registry key is found then we use the browserExecutableFolder, userDataFolder and additionalBrowserArguments registry values as replacements for the corresponding values in CreateWebView2EnvironmentWithDetails parameters. If any of those registry values isn't present, then the parameter passed to CreateWebView2Environment is used.

#### CreateWebView2Environment 

> public STDAPI [CreateWebView2Environment](#createwebview2environment)([IWebView2CreateWebView2EnvironmentCompletedHandler](IWebView2CreateWebView2EnvironmentCompletedHandler.md#iwebview2createwebview2environmentcompletedhandler) * environment_created_handler)

Creates an evergreen WebView2 Environment using the installed Edge version.

This is equivalent to calling CreateWebView2EnvironmentWithDetails with nullptr for browserExecutableFolder, userDataFolder, additionalBrowserArguments. See CreateWebView2EnvironmentWithDetails for more details.

#### GetWebView2BrowserVersionInfo 

> public STDAPI [GetWebView2BrowserVersionInfo](#getwebview2browserversioninfo)(PCWSTR browserExecutableFolder,LPWSTR * versionInfo)

Get the browser version info including channel name if it is not the stable channel or the Embedded Edge.

Channel names are beta, dev, and canary. If an override exists for the browserExecutableFolder or the channel preference, the override will be used. If there isn't an override, then the parameter passed to GetWebView2BrowserVersionInfo is used.

