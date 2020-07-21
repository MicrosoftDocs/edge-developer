---
description: Embed web technologies (HTML, CSS, and JavaScript) in your native applications with the Microsoft Edge WebView2 control
title: Microsoft.Web.WebView2.Core.CoreWebView2Environment
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/20/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: Microsoft.Web.WebView2, Core, webview2, webview, dotnet, wpf, winforms, app, edge, CoreWebView2, CoreWebView2Controller, browser control, edge html, Microsoft.Web.WebView2.Core.CoreWebView2Environment
---

# Microsoft.Web.WebView2.Core.CoreWebView2Environment class 

Namespace: Microsoft.Web.WebView2.Core\
Assembly: Microsoft.Web.WebView2.Core.dll

This represents the WebView2 Environment.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[BrowserVersionString](#browserversionstring) | The browser version info of the current CoreWebView2Environment, including channel name if it is not the stable channel.
[NewBrowserVersionAvailable](#newbrowserversionavailable) | The NewBrowserVersionAvailable event fires when a newer version of the Edge browser is installed and available to use via WebView2.
[CompareBrowserVersions](#comparebrowserversions) | Compare browser versions correctly to determine which version is newer, older or same.
[CreateAsync](#createasync) | Creates an evergreen WebView2 Environment using the installed Edge version.
[CreateCoreWebView2CompositionControllerAsync](#createcorewebview2compositioncontrollerasync) | Asynchronously create a new WebView for use with visual hosting.
[CreateCoreWebView2ControllerAsync](#createcorewebview2controllerasync) | Asynchronously create a new WebView.
[CreateCoreWebView2PointerInfo](#createcorewebview2pointerinfo) | Create an empty CoreWebView2PointerInfo.
[CreateWebResourceResponse](#createwebresourceresponse) | Create a new web resource response object.
[GetAvailableBrowserVersionString](#getavailablebrowserversionstring) | Get the browser version info including channel name if it is not the stable channel or the Embedded Edge.
[GetProviderForHwnd](#getproviderforhwnd) | Returns the UI Automation Provider for the CoreWebView2CompositionController that corresponds with the given HWND.

WebViews created from an environment run on the Browser process specified with environment parameters and objects created from an environment should be used in the same environment. Using it in different environments are not guaranteed to be compatible and may fail.

## Members

#### BrowserVersionString 

The browser version info of the current CoreWebView2Environment, including channel name if it is not the stable channel.

> public string [BrowserVersionString](#browserversionstring)

This matches the format of the GetAvailableCoreWebView2BrowserVersionString API. Channel names are 'beta', 'dev', and 'canary'.

#### NewBrowserVersionAvailable 

The NewBrowserVersionAvailable event fires when a newer version of the Edge browser is installed and available to use via WebView2.

> public event EventHandler< object > [NewBrowserVersionAvailable](#newbrowserversionavailable)

To use the newer version of the browser you must create a new environment and WebView. This event will only be fired for new version from the same Edge channel that the code is running from. When not running with installed Edge, no event will be fired.

Because a user data folder can only be used by one browser process at a time, if you want to use the same user data folder in the WebViews using the new version of the browser, you must close the environment and WebViews that are using the older version of the browser first. Or simply prompt the user to restart the app.

#### CompareBrowserVersions 

Compare browser versions correctly to determine which version is newer, older or same.

> public static int [CompareBrowserVersions](#comparebrowserversions)(string version1, string version2)

Returns -1, 0 or 1 depending on whether version1 is less than, equal to or greater than version2, respectively.

##### Parameters
* `version1` One of the version strings to compare. 

* `version2` The other version string to compare.

#### CreateAsync 

Creates an evergreen WebView2 Environment using the installed Edge version.

> public static async Task< [CoreWebView2Environment](microsoft-web-webview2-core-corewebview2environment.md) > [CreateAsync](#createasync)(string browserExecutableFolder, string userDataFolder, CoreWebView2EnvironmentOptions options)

##### Parameters
* `browserExecutableFolder` The relative path to the folder that contains the embedded Edge. 

* `userDataFolder` userDataFolder can be specified to change the default user data folder location for WebView2. 

* `options` Options used to create WebView2 Environment.

#### CreateCoreWebView2CompositionControllerAsync 

[!INCLUDE [prerelease-note](../../includes/prerelease-note.md)]

Asynchronously create a new WebView for use with visual hosting.

> public async Task< [CoreWebView2CompositionController](microsoft-web-webview2-core-corewebview2compositioncontroller.md) > [CreateCoreWebView2CompositionControllerAsync](#createcorewebview2compositioncontrollerasync)(IntPtr ParentWindow)

parentWindow is the HWND in which the app will connect the visual tree of the WebView. This will be the HWND that the app will receive pointer/ mouse input meant for the WebView (and will need to use SendMouseInput/ SendPointerInput to forward). If the app moves the WebView visual tree to underneath a different window, then it needs to set CoreWebView2CompositionController.ParentWindow to update the new parent HWND of the visual tree.

Set RootVisualTarget property on the created CoreWebView2CompositionController to provide a visual to host the browser's visual tree.

It is recommended that the application set Application User Model ID for the process or the application window. If none is set, during WebView creation a generated Application User Model ID is set to root window of parentWindow.

#### CreateCoreWebView2ControllerAsync 

Asynchronously create a new WebView.

> public async Task< [CoreWebView2Controller](microsoft-web-webview2-core-corewebview2controller.md) > [CreateCoreWebView2ControllerAsync](#createcorewebview2controllerasync)(IntPtr ParentWindow)

parentWindow is the HWND in which the WebView should be displayed and from which receive input. The WebView will add a child window to the provided window during WebView creation. Z-order and other things impacted by sibling window order will be affected accordingly.

It is recommended that the application set Application User Model ID for the process or the application window. If none is set, during WebView creation a generated Application User Model ID is set to root window of parentWindow.

#### CreateCoreWebView2PointerInfo 

[!INCLUDE [prerelease-note](../../includes/prerelease-note.md)]

Create an empty CoreWebView2PointerInfo.

> public [CoreWebView2PointerInfo](microsoft-web-webview2-core-corewebview2pointerinfo.md) [CreateCoreWebView2PointerInfo](#createcorewebview2pointerinfo)()

The returned CoreWebView2PointerInfo needs to be populated with all of the relevant info before calling SendPointerInput.

#### CreateWebResourceResponse 

Create a new web resource response object.

> public HttpResponseMessage [CreateWebResourceResponse](#createwebresourceresponse)(Stream Content, int StatusCode, string ReasonPhrase, string Headers)

The headers is the raw response header string delimited by newline. It's also possible to create this object with empty headers string and then use the CoreWebView2HttpResponseHeaders to construct the headers line by line. For information on other parameters see CoreWebView2WebResourceResponse.

#### GetAvailableBrowserVersionString 

Get the browser version info including channel name if it is not the stable channel or the Embedded Edge.

> public static string [GetAvailableBrowserVersionString](#getavailablebrowserversionstring)(string browserExecutableFolder)

##### Parameters
* `browserExecutableFolder` The relative path to the folder that contains the embedded Edge.

#### GetProviderForHwnd 

[!INCLUDE [prerelease-note](../../includes/prerelease-note.md)]

Returns the UI Automation Provider for the CoreWebView2CompositionController that corresponds with the given HWND.

> public object [GetProviderForHwnd](#getproviderforhwnd)(IntPtr hwnd)

