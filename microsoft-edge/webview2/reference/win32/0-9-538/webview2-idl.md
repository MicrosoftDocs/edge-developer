---
description: Embed web technologies (HTML, CSS, and JavaScript) in your native applications with the Microsoft Edge WebView2 control
title: Globals
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/16/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html
---

# Globals 

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[CompareBrowserVersions](#comparebrowserversions) | This method is for anyone want to compare version correctly to determine which version is newer, older or same.
[CreateCoreWebView2Environment](#createcorewebview2environment) | Creates an evergreen WebView2 Environment using the installed Edge version.
[CreateCoreWebView2EnvironmentWithOptions](#createcorewebview2environmentwithoptions) | DLL export to create a WebView2 environment with a custom version of Edge, user data directory and/or additional options.
[GetAvailableCoreWebView2BrowserVersionString](#getavailablecorewebview2browserversionstring) | Get the browser version info including channel name if it is not the stable channel or the Embedded Edge.

## Members

#### CompareBrowserVersions 

> public STDAPI [CompareBrowserVersions](#comparebrowserversions)(PCWSTR version1, PCWSTR version2, int * result)

This method is for anyone want to compare version correctly to determine which version is newer, older or same.

It can be used to determine whether to use webview2 or certain feature base on version. Sets the value of result to -1, 0 or 1 if version1 is less than, equal or greater than version2 respectively. Returns E_INVALIDARG if it fails to parse any of the version strings or any input parameter is null. Input can directly use the versionInfo obtained from GetAvailableCoreWebView2BrowserVersionString, channel info will be ignored.

#### CreateCoreWebView2Environment 

> public STDAPI [CreateCoreWebView2Environment](#createcorewebview2environment)([ICoreWebView2CreateCoreWebView2EnvironmentCompletedHandler](icorewebview2createcorewebview2environmentcompletedhandler.md) * environment_created_handler)

Creates an evergreen WebView2 Environment using the installed Edge version.

This is equivalent to calling CreateCoreWebView2EnvironmentWithOptions with nullptr for browserExecutableFolder, userDataFolder, additionalBrowserArguments. See CreateCoreWebView2EnvironmentWithOptions for more details.

#### CreateCoreWebView2EnvironmentWithOptions 

> public STDAPI [CreateCoreWebView2EnvironmentWithOptions](#createcorewebview2environmentwithoptions)(PCWSTR browserExecutableFolder, PCWSTR userDataFolder, [ICoreWebView2EnvironmentOptions](icorewebview2environmentoptions.md) * environmentOptions, [ICoreWebView2CreateCoreWebView2EnvironmentCompletedHandler](icorewebview2createcorewebview2environmentcompletedhandler.md) * environment_created_handler)

DLL export to create a WebView2 environment with a custom version of Edge, user data directory and/or additional options.

Use `browserExecutableFolder` to specify whether WebView2 controls use an embedded version of Edge, or the installed version of Edge that exists on a client machine. To use an embedded version of Edge, pass the relative path of the folder that contains the embedded version of Edge to `browserExecutableFolder`. To obtain the embedded version of Edge, copy the versioned folder name from your installed version of Edge on a client machine. For example, copy the `73.0.52.0` folder from the folder where Edge version 73.0.52.0 was installed. Ensure that the folder has both the **msedgewebview2.exe** and **msedge.dll** files. To create WebView2 controls that use the installed version of Edge that exists on client machines, pass a null or empty string to `browserExecutableFolder`. In this scenario, the API tries to find a compatible version of Edge that is installed on the client machine (first at the machine level, and then per user) using the selected channel preference.

The default channel search order is stable, beta, dev, and canary. When there is an override WEBVIEW2_RELEASE_CHANNEL_PREFERENCE environment variable or applicable releaseChannelPreference registry value with the value of 1, the channel search order is reversed.

userDataFolder can be specified to change the default user data folder location for WebView2. The path can be an absolute file path or a relative file path that is interpreted as relative to the current process's executable. Otherwise, for UWP apps, the default user data folder will be the app data folder for the package; for non-UWP apps, the default user data folder `{Executable File Name}.WebView2` will be created in the same directory next to the app executable. WebView2 creation can fail if the executable is running in a directory that the process doesn't have permission to create a new folder in. The app is responsible to clean up its user data folder when it is done.

Note that as a browser process might be shared among WebViews, WebView creation will fail with HRESULT_FROM_WIN32(ERROR_INVALID_STATE) if the specified options does not match the options of the WebViews that are currently running in the shared browser process.

environment_created_handler is the handler result to the async operation which will contain the WebView2Environment that got created.

The browserExecutableFolder, userDataFolder and additionalBrowserArguments of the environmentOptions may be overridden by values either specified in environment variables or in the registry.

When creating a WebView2Environment the following environment variables are checked:

```
WEBVIEW2_BROWSER_EXECUTABLE_FOLDER
WEBVIEW2_USER_DATA_FOLDER
WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS
WEBVIEW2_RELEASE_CHANNEL_PREFERENCE
```

If an override environment variable is found then we use the browserExecutableFolder, userDataFolder and additionalBrowserArguments values as replacements for the corresponding values in CreateCoreWebView2EnvironmentWithOptions parameters.

While not strictly overrides, there exists additional environment variables that can be set:

```
WEBVIEW2_WAIT_FOR_SCRIPT_DEBUGGER
```

When found with a non-empty value, this indicates that the WebView is being launched under a script debugger. In this case, the WebView will issue a `Page.waitForDebugger` CDP command that will cause script execution inside the WebView to pause on launch, until a debugger issues a corresponding `Runtime.runIfWaitingForDebugger` CDP command to resume execution. Note: There is no registry key equivalent of this environment variable.

```
WEBVIEW2_PIPE_FOR_SCRIPT_DEBUGGER
```

When found with a non-empty value, this indicates that the WebView is being launched under a script debugger that also supports host applications that use multiple WebViews. The value is used as the identifier for a named pipe that will be opened and written to when a new WebView is created by the host application. The payload will match that of the remote-debugging-port JSON target and can be used by the external debugger to attach to a specific WebView instance. The format of the pipe created by the debugger should be: `\\.\pipe\WebView2\Debugger\{app_name}\{pipe_name}` where:

* `{app_name}` is the host application exe filename, e.g. WebView2Example.exe

* `{pipe_name}` is the value set for WEBVIEW2_PIPE_FOR_SCRIPT_DEBUGGER.

To enable debugging of the targets identified by the JSON you will also need to set the WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS environment variable to send `--remote-debugging-port={port_num}` where:

* `{port_num}` is the port on which the CDP server will bind.

Be aware that setting both the WEBVIEW2_PIPE_FOR_SCRIPT_DEBUGGER and WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS environment variables will cause the WebViews hosted in your application and their contents to be exposed to 3rd party applications such as debuggers.

Note: There is no registry key equivalent of this environment variable.

If none of those environment variables exist, then the registry is examined next. The following registry keys are checked:

```
[{Root}\Software\Policies\Microsoft\EmbeddedBrowserWebView\LoaderOverride\{AppId}]
"releaseChannelPreference"=dword:00000000
"browserExecutableFolder"=""
"userDataFolder"=""
"additionalBrowserArguments"=""
```

In the unlikely scenario where some instances of WebView are open during a browser update we could end up blocking the deletion of old Edge browsers. To avoid running out of disk space a new WebView creation will fail with the next error if it detects that there are many old versions present.

```
ERROR_DISK_FULL
```

The default maximum number of Edge versions allowed is 20.

The maximum number of old Edge versions allowed can be overwritten with the value of the following environment variable.

```
WEBVIEW2_MAX_INSTANCES
```

If the Webview depends on an installed Edge and it is uninstalled any subsequent creation will fail with the next error

```
ERROR_PRODUCT_UNINSTALLED
```

First we check with Root as HKLM and then HKCU. AppId is first set to the Application User Model ID of the caller's process, then if there's no corresponding registry key the AppId is set to the executable name of the caller's process, or if that isn't a registry key then '*'. If an override registry key is found then we use the browserExecutableFolder, userDataFolder and additionalBrowserArguments registry values as replacements for the corresponding values in CreateCoreWebView2EnvironmentWithOptions parameters.

#### GetAvailableCoreWebView2BrowserVersionString 

> public STDAPI [GetAvailableCoreWebView2BrowserVersionString](#getavailablecorewebview2browserversionstring)(PCWSTR browserExecutableFolder, LPWSTR * versionInfo)

Get the browser version info including channel name if it is not the stable channel or the Embedded Edge.

Channel names are beta, dev, and canary. If an override exists for the browserExecutableFolder or the channel preference, the override will be used. If there isn't an override, then the parameter passed to GetAvailableCoreWebView2BrowserVersionString is used.

