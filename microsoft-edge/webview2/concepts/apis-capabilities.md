---
title: Survey of WebView2 APIs and their capabilities
description: Survey of WebView2 APIs and their capabilities.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 06/03/2022
---
# Survey of WebView2 APIs and their capabilities

This article provides:
*  A high-level understanding of the capabilities of the WebView2 technology.
*  Concepts about what you can do with the WebView2 APIs.
*  High-level description of WebView2 technology for app developers.
*  Better fundamentals + understanding of WebView2 technology.

Audience: App developers who are curious about the WebView2 technology and would like to know if WebView2 is for them.


<!-- ====================================================================== -->
## High-level interfaces spanning multiple areas

This article categorizes the WebView2 interfaces, at a high level, for WebView2.  This article also lists selected members of interfaces.  These interfaces contain properties, methods, and events that span multiple categories in this article:


# [C#](#tab/c-sharp)

* [CoreWebView2 Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2)
* [CoreWebView2Controller Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2controller)
* [CoreWebView2Environment Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2environment)
* [CoreWebView2Settings Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2settings)


# [C++](#tab/cpp)

* [ICoreWebView2](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2)
* [ICoreWebView2Controller](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2controller)
* [ICoreWebView2Environment](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2environment)
* [ICoreWebView2Settings](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2settings)

---

Cross-platform API implementation: Most of the WebView2 APIs are initially developed for C++, and then most of the C++ APIs are wrapped as C# APIs.  This way, there is a consistent parallelism and equivalence across platforms and programming languages.
<!-- link prefix: https://docs.microsoft.com -->


<!-- ====================================================================== -->
## Web/Native Interop

The Microsoft Edge WebView2 control lets you embed web content into native applications. You can communicate between native code and web code using simple messages, JavaScript code, and native objects. 

Some common use cases include:
*  Update the native host window title after navigating to a different website.
*  Send a native camera object and use its methods from a web app.
*  Run a dedicated JavaScript file on the web side of an application.

For more information, see:
* [Interop of native-side and web-side code](../how-to/communicate-btwn-web-native.md)
* [Call web-side code from native-side code](../how-to/javascript.md)
* [Call native-side code from web-side code](../how-to/hostobject.md)

The following are some APIs that are important when communicating between web and native code.


<!-- ------------------------------ -->
#### Main APIs

# [C#](#tab/c-sharp)

* [CoreWebView2 Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2)
   * [WebMessageReceived Event](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.webmessagereceived)
   * [AddHostObjectToScript Method](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.addhostobjecttoscript)
   * [RemoveHostObjectFromScript Method](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.removehostobjectfromscript)
   * [ScriptDialogOpening Event](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.scriptdialogopening)
   * [AddScriptToExecuteOnDocumentCreatedAsync Method](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.addscripttoexecuteondocumentcreatedasync)
   * [RemoveScriptToExecuteOnDocumentCreated](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.removescripttoexecuteondocumentcreated)
   * [ExecuteScript](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.executescriptasync)
   * [PostWebMessageAsJson](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.postwebmessageasjson)
   * [PostWebMessageAsString](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.postwebmessageasstring)

* [CoreWebView2ScriptDialogKind Enum](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2scriptdialogkind)

* [CoreWebView2Settings](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2settings)
   * [AreHostObjectsAllowed Property](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2settings.arehostobjectsallowed)
   * [IsWebMessageEnabled Property](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2settings.iswebmessageenabled?view=webview2-dotnet-1.0.1210.39#microsoft-web-webview2-core-corewebview2settings-iswebmessageenabled)

* [CoreWebView2WebResourceResponse Class](/dotnet/api/microsoft.web.webview2.core.corewebview2webresourceresponse)

* [CoreWebView2.WebResourceResponseReceived Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.webresourceresponsereceived)

* [CoreWebView2WebResourceResponseView Class](/dotnet/api/microsoft.web.webview2.core.corewebview2webresourceresponseview)


# [C++](#tab/cpp)

* [ICoreWebView2WebMessageReceivedEventArgs](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2webmessagereceivedeventargs)
<!-- c# links to "WebMessageReceived Event" -->

* [ICoreWebView2WebResourceResponse](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2webresourceresponse)
<!-- c# links to "CoreWebView2WebResourceResponse Class" -->

* [ICoreWebView2WebResourceResponseReceivedEventArgs](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2webresourceresponsereceivedeventargs)
<!-- c# links to "CoreWebView2.WebResourceResponseReceived Event" -->

* [ICoreWebView2WebResourceResponseView](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2webresourceresponseview)
<!-- c# links to "CoreWebView2WebResourceResponseView Class" -->

* [ICoreWebView2Settings](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2settings)
   * [IsWebMessageEnabled](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2settings#get_iswebmessageenabled)
<!-- c# links to "IsWebMessageEnabled Property" -->

* [ICoreWebView2](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2)<!--c# links to "CoreWebView2 Class"-->
   * [add_WebMessageReceived](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#add_webmessagereceived)<!-- c# links to "WebMessageReceived Event" -->
   * [remove_WebMessageReceived](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#remove_webmessagereceived)<!-- c# links to "WebMessageReceived Event" -->
   * [AddHostObjectToScript](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#addhostobjecttoscript)<!--c# links to same name-->
   * [RemoveHostObjectFromScript](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#removehostobjectfromscript)<!--c# links to same name-->
   * [add_ScriptDialogOpening](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#add_scriptdialogopening)<!--c# links to "ScriptDialogOpening Event"-->
   * [remove_ScriptDialogOpening](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#remove_scriptdialogopening)<!--c# links to "ScriptDialogOpening Event"-->
   * [AddScriptToExecuteOnDocumentCreated](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#addscripttoexecuteondocumentcreated)<!--c# links to "AddScriptToExecuteOnDocumentCreatedAsync Method"-->
   * [RemoveScriptToExecuteOnDocumentCreated](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#removescripttoexecuteondocumentcreated)<!--c# links to same name-->
   * [ExecuteScript](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#executescript)<!--c# links to same name-->
   * [PostWebMessageAsJson](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#postwebmessageasjson)<!--c# links to same name-->
   * [PostWebMessageAsString](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#postwebmessageasstring)<!--c# links to same name-->
   * [COREWEBVIEW2_SCRIPT_DIALOG_KIND](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#corewebview2_script_dialog_kind)<!--c# links to CoreWebView2ScriptDialogKind Enum-->

* `ICoreWebView2Settings`
   * [get_AreHostObjectsAllowed](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2settings#get_arehostobjectsallowed)
<!-- c# links to "AreHostObjectsAllowed Property" -->

---

See also:
* [API Reference overview](../how-to/webresourcerequested.md#api-reference-overview) in _Custom management of network requests_.  <!--The present link is theoretically exact dup - merge into that article and link to that API Ref section from here, what about WinRT version of article?-->


<!-- ====================================================================== -->
## Working with JavaScript in WebView2


# [C#](#tab/c-sharp)

* [CoreWebView2 Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2)
   * [ScriptDialogOpening Event](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2.scriptdialogopening?view=webview2-dotnet-1.0.1210.39)

* [CoreWebView2Settings](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2settings)
   * [AreDefaultContextMenusEnabled Property](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2settings.aredefaultcontextmenusenabled?view=webview2-dotnet-1.0.1210.39#microsoft-web-webview2-core-corewebview2settings-aredefaultcontextmenusenabled)
   * [IsScriptEnabled Property](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2settings.isscriptenabled?view=webview2-dotnet-1.0.1210.39#microsoft-web-webview2-core-corewebview2settings-isscriptenabled)


# [C++](#tab/cpp)

* [ICoreWebView2](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2)
<!-- c# links to "CoreWebView2 Class" -->

* [ICoreWebView2ScriptDialogOpeningEventArgs](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2scriptdialogopeningeventargs)
<!-- c# links to "ScriptDialogOpening Event" -->

* [ICoreWebView2Settings](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2settings)
   * [get_AreDefaultContextMenusEnabled](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2settings#get_aredefaultcontextmenusenabled)<!-- c# links to "AreDefaultContextMenusEnabled Property" -->
   * [put_AreDefaultContextMenusEnabled](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2settings#put_aredefaultcontextmenusenabled)<!-- c# links to "AreDefaultContextMenusEnabled Property" -->
   * [put_IsScriptEnabled](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2settings#put_isscriptenabled)<!-- c# links to "IsScriptEnabled Property" -->
   * [get_IsScriptEnabled](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2settings#get_isscriptenabled)<!-- c# links to "IsScriptEnabled Property" -->

---

See also:
* []()
* Working with JavaScript in WebView2 - TODO: link avail?<!-- there are only narrow topical articles eg using JS in native/web interop -->



<!-- ====================================================================== -->
## Browser features

This section covers features inherited from the browser and available in a WebView2 control.  These APIs allow developers the ability to toggle and change these inherited features.


<!-- ------------------------------ -->
### Printing

Printing content in a WebView2 control.

# [C#](#tab/c-sharp)

* [CoreWebView2PrintOrientation Enum](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2printorientation?view=webview2-dotnet-1.0.1210.39)


# [C++](#tab/cpp)

* `ICoreWebView2`
   * [COREWEBVIEW2_PRINT_ORIENTATION](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-1.0.1210.39#corewebview2_print_orientation)<!-- c# links to "CoreWebView2PrintOrientation Enum" -->

*  `ICoreWebView2_7`
   * `PrintToPdf` ~= [interface ICoreWebView2ExperimentalPrintToPdfCompletedHandler](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprinttopdfcompletedhandler) - prints the current page to PDF.  Has optional custom settings.

*  `ICoreWebView2PrintSettings`

*  `ICoreWebview2Environment6`
   * `CreatePrintSettings`

---

See also:
* []()



<!-- ------------------------------ -->
### Cookies

Working with cookies in a WebView2 control.

# [C#](#tab/c-sharp)

* [CoreWebView2 Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2)


# [C++](#tab/cpp)

* [ICoreWebView2](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2)

*  `ICoreWebView2`
   * `COREWEBVIEW2_COOKIE_SAME_SITE_KIND`
*  `ICoreWebView2Cookie`
*  `ICoreWebView2CookieList`
*  `ICoreWebView2CookieManager`
*  `ICoreWebView2_2`
   * `Get_cookieManager`

---

See also:
* []()


<!-- ------------------------------ -->
### Image capture

Capturing images using the key press combination `Ctrl`+`Shift`+`S` (TODO: confirm)

# [C#](#tab/c-sharp)

* [CoreWebView2 Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2)


# [C++](#tab/cpp)

* [ICoreWebView2](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2)

*  `ICoreWebView2`
   * `CapturePreview`
   * `COREWEBVIEW2_CAPTURE_PREVIEW_IMAGE_FORMAT`

---

See also:
* []()


<!-- ------------------------------ -->
### Downloads

Working with file downloads in a WebView2 control.

# [C#](#tab/c-sharp)

* [CoreWebView2 Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2)


# [C++](#tab/cpp)

* [ICoreWebView2](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2)

*  `ICoreWebView2`
   * `COREWEBVIEW2_DEFAULT_DOWNLOAD_DIALOG_CORNER_ALIGNMENT`
   * `COREWEBVIEW2_DOWNLOAD_INTERRUPT_REASON`
   * `COREWEBVIEW2_DOWNLOAD_STATE`
   * `COREWEBVIEW2_HOST_RESOURCE_ACCESS_KIND`
*  `ICoreWebView2DownloadOperation`
*  `ICoreWebView2DownloadStartingEventArgs`
*  `ICoreWebView2_4`
   * `Add_DownloadStarting`
*  `ICoreWebView2_9`
   * `Add_IsDefaultDownloadDialogOpenChanged`
   * `CloseDefaultDownlaodDialog`
   * `Get_defaultDownloadDialogCornerAlignment`
   * `Get_DefaultDownloadDialogMargin`
   * `Get_IsDefaultDownloadDialogOpen`
   * `OpenDefaultDownloadDialog`

---

See also:
* []()


<!-- ------------------------------ -->
### Permissions

How to assign permissions to WebView2 controls to do _<!-- TODO: confirm -->

# [C#](#tab/c-sharp)

* [CoreWebView2 Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2)


# [C++](#tab/cpp)

* [ICoreWebView2](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2)

*  `ICoreWebView2PermissionRequestedEventArgs`
*  `ICoreWebView2`
   * `Add_PermissionRequested`
   * `Remove_PermissionRequested`
   * `COREWEBVIEW2_PERMISSION_KIND`
   * `COREWEBVIEW2_PERMISSION_STATE`

---

See also:
* []()


<!-- ------------------------------ -->
### Context menus

The WebView2 control provides a default context menu, and you can create your own context menu when using a WebView2 control.  Use the **ContextMenuRequested** API to customize the context-menus (right-click menus) of a WebView2 app.  For example, you can do any of the following:

*  Add a custom context menu.

   Instead of using the default context menu, your host app can draw its own context menu by using the information that's sent from the WebView2 context menu.  Your app handles the `ContextMenuRequested` event.  You can use the data provided in the Event arguments of `ContextMenuRequested` to display a custom context menu with entries of your choice.  For this case, you handle the event and request a deferral.

   You can add default menu items and/or custom menu items to a custom context menu.

*  Add default menu items to a custom context menu.

*  Add custom menu items to a default context menu.

*  Remove default or custom menu items from the default context menu.

*  Disable context menus.


# [C#](#tab/c-sharp)

* [CoreWebView2 Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2)


# [C++](#tab/cpp)

* [ICoreWebView2](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2)

*  `add_ContextMenuRequested`
*  `CallDevToolsProtocolMethodForSession`
*  `remove_ContextMenuRequested`
*  `ICoreWebView2Settings`
   * `AreDefaultContextMenusEnabled`

---

<!-- get links from Context Menus article or link to there -->
See also:
* [Customize context menus in WebView2](../how-to/context-menus.md)
   * [API Reference overview](../how-to/context-menus.md#api-reference-overview)


<!-- ------------------------------ -->
### Status Bar

Learn how to monitor the browser's status bar for changes.

# [C#](#tab/c-sharp)

* [CoreWebView2 Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2)


# [C++](#tab/cpp)

* [ICoreWebView2](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2)

*  `add_StatusBarTextChanged`
*  `get_StatusBarText`
*  `remove_StatusBarTextChanged`
*  `ICoreWebView2Settings`
   * `IsStatusBarEnabled`

---

See also:
* []()


<!-- ------------------------------ -->
### User Agent

Learn how to detect the user agent string in a WebView2 control.

# [C#](#tab/c-sharp)

* [CoreWebView2 Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2)


# [C++](#tab/cpp)

* [ICoreWebView2](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2)

*  `ICoreWebView2Settings`
   * `UserAgent`

---

See also:
* []()


<!-- ------------------------------ -->
### Autofill

Leverage the browsers autofill functionality in a WebView2 control.

# [C#](#tab/c-sharp)

* [CoreWebView2 Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2)


# [C++](#tab/cpp)

* [ICoreWebView2](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2)

*  `ICoreWebView2Settings4`
   * `IsGeneralAutofillEnabled`
   * `IsPasswordAutosaveEnabled`
   * `IsGeneralAutofillEnabled`
   * `IsPasswordAutosaveEnabled`

---

See also:
* []()


<!-- ------------------------------ -->
### Audio

Control audio settings in a WebView2 control.

# [C#](#tab/c-sharp)

* [CoreWebView2 Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2)


# [C++](#tab/cpp)

* [ICoreWebView2](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2)

*  `ICoreWebView2_8`
   * `Add_IsDocumentPlayingAudioChanged`
   * `Add_IsMutedChanged`
   * `Get_IsDocumentPlayingAudio`
   * `Get_IsMuted`

---

See also:
* []()


<!-- ====================================================================== -->
## Managing WV2 Processes

Learn how to work with the process that your WebView2 runs in on the host computer.

# [C#](#tab/c-sharp)

* [CoreWebView2 Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2)


# [C++](#tab/cpp)

* [ICoreWebView2](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2)

*  `ICoreWebView2`
   * `COREWEBVIEW2_PROCESS_FAILED_KIND`
   * `COREWEBVIEW2_PROCESS_FAILED_REASON`
   * `COREWEBVIEW2_PROCESS_KIND`
*  `ICoreWebView2BrowserProcessExitedEventArgs`
*  `ICoreWebView2Environment.BrowserProcessExitedEventArgs`
*  `ICoreWebView2ProcessFailedEventArgs`
*  `ICoreWebView2ProcessInfo`
*  `ICoreWebView2ProcessInfoCollection`
*  `ICoreWebView2`
   * `Add_ProcessFailed`
   * `Remove_ProcessFailed`
   * `get_BrowserProcessID`
   * `COREWEBVIEW2_BROWSER_PROCESS_EXIT_KIND`
*  `ICoreWebView2Environment5`
   * `Add_BrowserProcessExited`
   * `Remove_BrowserProcessExited`
*  `ICoreWebView2Environment8`
   * `Add_ProcessInfosChanged`
   * `GetProcessInfos`
   * `remove_ProcessInfosChanged`

---

See also:
* []()


<!-- ====================================================================== -->
## Navigation

Learn how to manage page navigation in a WebView2.

# [C#](#tab/c-sharp)

* [CoreWebView2 Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2)


# [C++](#tab/cpp)

* [ICoreWebView2](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2)

*  `ICoreWebView2`
   * `Add_FrameNavigationCompleted`
   * `add_FrameNavigationStarting`
   * `remove_FrameNavigationCompleted`
   * `add_NavigationCompleted`
   * `remove_NavigationCompleted`
   * `add_NavigationStarting`
   * `remove_NavigationStarting` 
   * `Add_HistoryChanged`
   * `Add_SourceChanged`
   * `Remove_SourceChanged`
   * `Get_CanGoBack`
   * `get_CanGoFroward`
   * `get_Source`
   * `GoBack`
   * `GoForward`
   * `Navigate`
   * `NavigateToString`
   * `Stop`
   * `COREWEBVIEW2_WEB_ERRORS_STATUS`
   * `COREWEBVIEW2_WEB_RESOURCE_CONTEXT`
*  `ICoreWebView2_2`
   * `NavigateWithWebResourceRequest`
*  `ICoreWebView2_3`
   * `SetVirtuaHostNameToFolderMapping` <!--TODO: check typo in API name/casing-->
   * `ClearVirtualHostNameToFolderMapping`
*  `ICoreWebView2NavigationCompletedEventArgs`
*  `ICoreWebView2NavigationCompletedEventArgs`
*  `ICoreWebView2NavigationStartingEventArgs`
*  `ICoreWebView2SourceChangedEventArgs`

---

See also:
* []()


<!-- ====================================================================== -->
## Web Content


<!-- ------------------------------ -->
### Web Resource Requested

Learn how to make an external call to a resource on the web.

# [C#](#tab/c-sharp)

* [CoreWebView2 Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2)


# [C++](#tab/cpp)

* [ICoreWebView2](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2)

*  `ICoreWebView2`
   * `Add_WebResourceRequested`
   * `Remove_WebResourceRequested`
   * `AddWebResourceRequestedFilter`
   * `RemoveWebResourceRequestedFilter`
   * `Reload`
*  `ICoreWebView2_2`
   * `Add_WebResourceResponseReceived`
   * `Remove_WebResourceResponseReceived`
   * `NavigateWithWebResourceRequest`
*  `ICoreWebView2Environment`
   * `CreateWebResourceResponse` 
*  `ICoreWebView2Environment2`
   * `CreateWebResourceRequest`
*  `ICoreWebView2WebResourceRequest`
*  `ICoreWebView2WebResourceRequestedEventArgs`

---

See also:
* []()


<!-- ------------------------------ -->
### DOM/Content Loaded

Learn how to handle events when content is loaded in the WebView2.

# [C#](#tab/c-sharp)

* [CoreWebView2 Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2)


# [C++](#tab/cpp)

* [ICoreWebView2](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2)

*  `ICoreWebView2ContentLoadingEventArgs`
*  `ICoreWebView2.ContentLoading Event`
*  `ICoreWebView2DOMContentLoadedEventArgsICoreWebView2` 
   * `Add_ContentLoading`
   * `Remove_ContentLoading`
*  `ICoreWebView2_2`
   * `Add_DOMContentLoaded`
   * `Remove_DOMContentLoaded`
*  `ICoreWebView2`
   * `Add_ContainsFullScreenElementChanged`
   * `get_ContainsFullScreenElement`
   * `remove_ContainsFullScreenElementChanged`
   * `Add_DocumentTitleChanged`
   * `Remove_DocumentTitleChanged`
   * `get_DocumentTitle`
*  `ICoreWebView2Controller`
   * `Close`

---

See also:
* []()


<!-- ------------------------------ -->
### Server/Client Certificates

Learn how to work with certificates in WebView2 controls (TODO: confirm)

# [C#](#tab/c-sharp)

* [CoreWebView2 Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2)


# [C++](#tab/cpp)

* [ICoreWebView2](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2)

*  `ICoreWebView2`
   * `COREWEBVIEW2_CLIENT_CERTIFICATE_KIND`
*  `ICoreWebView2ClientCertificate`
*  `ICoreWebView2ClientCertificateCollection`
*  `ICoreWebView2ClientCertificateRequestedEventArgs`
*  `ICoreWebView2_5`
   * `add_ClientCertificateRequested`

---

See also:
* []()


<!-- ====================================================================== -->
## Working with Chrome Developer Protocol (CDP)

Learn how to automate tasks in the DevTools in a WebView2 control using CDP (TODO: confirm)


# [C#](#tab/c-sharp)

* [CoreWebView2 Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2)


# [C++](#tab/cpp)

* [ICoreWebView2](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2)

*  `ICoreWebView2DevToolsProtocolEventReceivedEventArgs` 
*  `ICoreWebView2DevToolsProtocolEventReceiver` 
*  `CallDevToolsProtocolMethodForSession` <!--TODO: (WebView2 Win32 C++ ICoreWebView2_11)-->
*  `ICoreWebView2Settings`
   * `AreDevToolsEnabled`
*  `ICoreWebView2`
   * `CallDevToolsProtocolMethod`
   * `GetDevToolsProtocolEventReceiver` 
   * `OpenDevToolsWindow`

---

See also:
* []()


<!-- ====================================================================== -->
## iFrames

Learn how to work with iFrames in content displayed in WebView2 controls


# [C#](#tab/c-sharp)

* [CoreWebView2 Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2)


# [C++](#tab/cpp)

* [ICoreWebView2](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2)

*  `ICoreWebView2Frame`
*  `ICoreWebView2FrameCreatedEventArgs`
*  `ICoreWebView2FrameInfo`
*  `ICoreWebView2FrameInfoCollection`
*  `ICoreWebView2FrameInfoCollectionIterator`
*  `ICoreWebView2`
   * `Add_FrameNavigationCompleted`
   * `Remove_FrameNavigationCompleted`
   * `Add_FrameNavigationStarting`
   * `Remove_frameNavigationStarting`
   * `Add_HistoryChanged`
   * `Remove_HistoryChanged`
   * `IcoreWebView2_4Add_FrameCreated` <!--TODO: check typo in API name/casing-->

---

See also:
* []()


<!-- ====================================================================== -->
## Authentication

<!-- selling point / value prop: easy configuration of wv2 apps - support user accounts -->

Learn how to handle basic authentication in WebView2 controls.

# [C#](#tab/c-sharp)

* [CoreWebView2 Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2)


# [C++](#tab/cpp)

* [ICoreWebView2](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2)

*  `ICoreWebView2BasicAuthenticationRequestedEventArgs`
*  `ICoreWebView2BasicAuthenticationResponse`
*  `ICoreWebView2HttpHeadersCollectionIterator`
*  `ICoreWebView2HttpRequestHeaders`
*  `ICoreWebView2HttpResponseHeaders`
*  `ICoreWebView2`
   * `Add_BasicAutheneticationRequested` <!--TODO: check typo in API name/casing-->

---

See also:
* []()


<!-- ====================================================================== -->
## Environment setup

Learn how to specify settings before WebView2 controls are created.

<!-- selling point / value prop: easy configuration of wv2 apps

*  What is "envir setup" - of the control?  after I add the wv2 ctrl to the page?  What do we mean here by "envir"?
*  Why care about it

-->

<!-- link to a doc about this if avail.  eg Auth has a doc to link to. -->


# [C#](#tab/c-sharp)

* [CoreWebView2 Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2)


# [C++](#tab/cpp)

* [ICoreWebView2](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2)

*  `ICoreWebView2Environment`
   * `Add_NewBrowserVersionAvailable`
   * `Get_browserVersionString`
*  `ICoreWebView2EnvionmentOptions` <!--TODO: check typo in API name/casing-->
*  `ICore_WebView2_2`
   * `Get_Environment`

---

See also:
* []()


<!-- ====================================================================== -->
## Rendering WebView2 in native apps (Hosting)

These APIS are used to set up the WV2 rendering system in native apps.  For example, how wv2 renders output into the host app, how wv2 handles input, focus, accessibility (applies to C++ only)

# [C#](#tab/c-sharp)

* [CoreWebView2 Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2)


# [C++](#tab/cpp)

* [ICoreWebView2](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2)

*  `ICoreWebView2Controller` (Hosting-related settings for WebView) – app or wv2 elements host WebView
   * `Get_CoreWebView2`
*  `ICoreWebView2CompositionController`
*  `ICoreWebView2Controller`
*  `ICoreWebView2`
   * `Add_NewWindowRequested`
   * `Remove_NewWindowRequested`
*  `ICoreWebView2Environment`
   * `CreateCoreWebView2Controller`
*  `ICoreWebView2Environment3`
   * `CreateCoreWebview2CompositionController`
*  `ICoreWebView2Environment4`
   * `GetProviderForHwnd`

---

See also:
* []()


<!-- ------------------------------ -->
### WebView2 Properties (UI?)

# [C#](#tab/c-sharp)

* [CoreWebView2 Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2)


# [C++](#tab/cpp)

* [ICoreWebView2](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2)

*  `ICoreWebView2`
   * `COREWEBVIEW2_BOUNDS_MODE`
   * `COREWEBVIEW2_COLOR`
*  `ICoreWebView2Controller`
   * `Close`
   * `Get_Bounds`
   * `Get_IsVisible`
   * `ZoomFactorChanged`
   * `Get_ZoomFactor`
   * `SetBoundsAndZoomFactor`
*  `ICoreWebView2Controller2`
   * `Get_DefaultBackgroundColor`
   * `Put_DefaultBackgroundColor`
*  `ICoreWebView2Controller3`
   * `Get_BoundsMode`

---

See also:
* []()


<!-- ====================================================================== -->
## Window Management

All tasks related to the management of a window.

# [C#](#tab/c-sharp)

* [CoreWebView2 Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2)


# [C++](#tab/cpp)

* [ICoreWebView2](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2)

*  `IcoreWebView2NewWindowRequestedEventArgs` <!--TODO: check typo in API name/casing-->
*  `IcoreWebView2WindowFeatures` <!--TODO: check typo in API name/casing-->
*  `IcoreWebView2`
   * `Add_WindowCloseRequested`
   * `Remove_WindowCloseRequested`
   * `COREWEBVIEW2_MOVE_FOCUS_REASON`
*  `ICoreWebView2MoveFocusRequestedEventArgs`
*  `ICoreWebview2Controller`
   * `GotFocus`
   * `LostFocus`
   * `MoveFocusRequested`
   * `MoveFocus`
   * `Get_ParentWindow`
   * `NotifyParentWindowPositionChanged`
*  `ICoreWebView2Controller3`
   * `Add_RasterizationScaleChanged`
   * `Get_BoundsMode`
   * `Get_ShouldDetectMonitorScaleChanges`
   * `Remove_RasterizationScaleChanged`

---

See also:
* []()


<!-- ====================================================================== -->
## User Data

Learn how to work with the user data folder.

# [C#](#tab/c-sharp)

* [CoreWebView2 Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2)


# [C++](#tab/cpp)

* [ICoreWebView2](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2)

*  `ICoreWebView2Environment7`
   * `Get_UserDataFolder`

---

See also:
* []()


<!-- ====================================================================== -->
## Input


<!-- ------------------------------ -->
### Keyboard input

Handling key press events, so that your app has keyboard support.

# [C#](#tab/c-sharp)

* [CoreWebView2 Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2)


# [C++](#tab/cpp)

* [ICoreWebView2](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2)

*  `ICoreWebView2`
   * `COREWEBVIEW2_KEY_EVENT_KIND`
   * `COREWEBVIEW2_MOUSE_EVENT_KIND`
   * `COREWEBVIEW2_MOUSE_EVENT_VIRTUAL_KEYS`
   * `COREWEBVIEW2_PHYSICAL_KEY_STATUS`
*  `ICoreWebView2AcceleratorKeyPressedEventArgs`
*  `ICoreWebView2Controller`
   * `AcceleratorKeyPressed`
*  `ICoreWebView2Settings3`
   * `AreBrowswerAcceleratorKeysEnabled` <!--TODO: check typo in API name/casing-->

---

See also:
* []()


<!-- ------------------------------ -->
### Mouse input

Learn how to work with the mouse for input on a WebView2 control.

# [C#](#tab/c-sharp)

* [CoreWebView2 Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2)


# [C++](#tab/cpp)

* [ICoreWebView2](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2)

*  `ICoreWebView2`
   * `COREWEBVIEW2_POINTER_EVENT_KIND`
*  `ICoreWebView2PointerInfo`
*  `ICoreWebView2Environment3`
   * `CreateCoreWebView2PointerInfo`
*  `Touch inputICoreWebView2Settings6`
   * `IsSwipeNavigationEnabled`

---

See also:
* []()


<!-- ------------------------------ -->
### Pinch zoom

Learn how to work with touch input in a WebView2 control.


# [C#](#tab/c-sharp)

* [CoreWebView2 Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2)


# [C++](#tab/cpp)

* [ICoreWebView2](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2)

*  `ICoreWebView2Settings`
   * `IsZoomControlEnabled`
*  `ICoreWebView2Settings5`
   * `IsPinchZoomEnabled`

---

See also:
* []()


<!-- ====================================================================== -->
## Performance optimizations/tools and debugging

Learn how to handle performance related events for WebView2 controls.


# [C#](#tab/c-sharp)

* [CoreWebView2 Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2)
   * Properties
      * `IsSuspended`
   * Methods
      * `Resume`
      * `TrySuspendAsync`
      * `OpenTaskManagerWindow`

* [CoreWebView2Controller Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2controller)
   * Properties
      * `IsVisible`

*  `CoreWebView2Settings`
   * Properties
      * [IsBuiltInErrorPageEnabled](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2settings.isbuiltinerrorpageenabled#microsoft-web-webview2-core-corewebview2settings-isbuiltinerrorpageenabled) <!--TODO: clarify note: (probs for navigation and process)-->

<!-- *  `MemoryUsageTargetLevel` not found in C#--> -->


# [C++](#tab/cpp)

* [ICoreWebView2_3](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2_3)
   * `get_IsSuspended`
   * `Resume`
   * `TrySuspend`

*  [ICoreWebView2_6](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2_6)
   * `OpenTaskManagerWindow`

* [ICoreWebView2Controller](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2controller)
   * `put_IsVisible`

* [ICoreWebView2Experimental5](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimental5)
   * `put_MemoryUsageTargetLevel`

*  [ICoreWebView2Settings](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2settings)
   * `get_IsBuiltInErrorPageEnabled` <!--TODO: clarify note: (probs for navigation and process)-->

---

See also:
* []()


<!-- ====================================================================== -->
## Misc.

<!-- description -->


# [C#](#tab/c-sharp)

* [CoreWebView2.Settings Property](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.settings#microsoft-web-webview2-core-corewebview2-settings)

* [CoreWebView2Deferral Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2deferral)

<!-- * CoreWebView2StringCollection -->


# [C++](#tab/cpp)

* [ICoreWebView2Deferral](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2deferral)

* [ICoreWebView2StringCollection](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2stringcollection)
   * `get_Count`
   * `GetValueAtIndex`

* `ICoreWebView2`
   * [get_Settings](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#get_settings)

---

See also:
* []()


<!-- ====================================================================== -->
## See also

* []()
