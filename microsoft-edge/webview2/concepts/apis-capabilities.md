---
title: Survey of WebView2 APIs and their capabilities
description: Survey of WebView2 APIs and their capabilities.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 06/06/2022
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

* [CoreWebView2 Class](/dotnet/api/microsoft.web.webview2.core.corewebview2)
* [CoreWebView2Controller Class](/dotnet/api/microsoft.web.webview2.core.corewebview2controller)
* [CoreWebView2Environment Class](/dotnet/api/microsoft.web.webview2.core.corewebview2environment)
* [CoreWebView2Settings Class](/dotnet/api/microsoft.web.webview2.core.corewebview2settings)


# [C++](#tab/cpp)

* [ICoreWebView2](/microsoft-edge/webview2/reference/win32/icorewebview2)
* [ICoreWebView2Controller](/microsoft-edge/webview2/reference/win32/icorewebview2controller)
* [ICoreWebView2Environment](/microsoft-edge/webview2/reference/win32/icorewebview2environment)
* [ICoreWebView2Settings](/microsoft-edge/webview2/reference/win32/icorewebview2settings)

---

Cross-platform API implementation: Most of the WebView2 APIs are initially developed for C++, and then most of the C++ APIs are wrapped as C# APIs.  This way, there is a consistent parallelism and equivalence across platforms and programming languages.
<!-- link prefix: https://docs.microsoft.com -->


<!-- ====================================================================== -->
## Web/native interop

The Microsoft Edge WebView2 control lets you embed web content into native applications. You can communicate between native code and web code using simple messages, JavaScript code, and native objects. 

Some common use cases include:
*  Update the native host window title after navigating to a different website.
*  Send a native camera object and use its methods from a web app.
*  Run a dedicated JavaScript file on the web side of an application.

For more information, see:
* [Interop of native-side and web-side code](../how-to/communicate-btwn-web-native.md)
* [Call web-side code from native-side code](../how-to/javascript.md)
* [Call native-side code from web-side code](../how-to/hostobject.md)

The following are the main APIs for communicating between web and native code.


<!-- ------------------------------ -->
#### Main APIs

# [C#](#tab/c-sharp)

* [CoreWebView2 Class](/dotnet/api/microsoft.web.webview2.core.corewebview2)
   * [AddHostObjectToScript Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.addhostobjecttoscript)
   * [AddScriptToExecuteOnDocumentCreatedAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.addscripttoexecuteondocumentcreatedasync)
   * [ExecuteScriptAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.executescriptasync)
   * [PostWebMessageAsJson Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.postwebmessageasjson)
   * [PostWebMessageAsString Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.postwebmessageasstring)
   * [RemoveHostObjectFromScript Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.removehostobjectfromscript)
   * [RemoveScriptToExecuteOnDocumentCreated Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.removescripttoexecuteondocumentcreated)
   * [ScriptDialogOpening Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.scriptdialogopening)
   * [WebMessageReceived Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.webmessagereceived)
   * [WebResourceResponseReceived Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.webresourceresponsereceived)

* [CoreWebView2ScriptDialogKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2scriptdialogkind)

* [CoreWebView2Settings](/dotnet/api/microsoft.web.webview2.core.corewebview2settings)
   * [AreHostObjectsAllowed Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.arehostobjectsallowed)
   * [IsWebMessageEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.iswebmessageenabled)

* [CoreWebView2WebResourceResponse Class](/dotnet/api/microsoft.web.webview2.core.corewebview2webresourceresponse)

* [CoreWebView2WebResourceResponseView Class](/dotnet/api/microsoft.web.webview2.core.corewebview2webresourceresponseview)


# [C++](#tab/cpp)

* [ICoreWebView2](/microsoft-edge/webview2/reference/win32/icorewebview2)<!--c# links to "CoreWebView2 Class"-->
   * [add_ScriptDialogOpening](/microsoft-edge/webview2/reference/win32/icorewebview2#add_scriptdialogopening)<!--c# links to "ScriptDialogOpening Event"-->
   * [add_WebMessageReceived](/microsoft-edge/webview2/reference/win32/icorewebview2#add_webmessagereceived)<!-- c# links to "WebMessageReceived Event" -->
   * [AddHostObjectToScript](/microsoft-edge/webview2/reference/win32/icorewebview2#addhostobjecttoscript)<!--c# links to same name-->
   * [AddScriptToExecuteOnDocumentCreated](/microsoft-edge/webview2/reference/win32/icorewebview2#addscripttoexecuteondocumentcreated)<!--c# links to "AddScriptToExecuteOnDocumentCreatedAsync Method"-->
   * [ExecuteScript](/microsoft-edge/webview2/reference/win32/icorewebview2#executescript)<!--c# links to same name-->
   * [PostWebMessageAsJson](/microsoft-edge/webview2/reference/win32/icorewebview2#postwebmessageasjson)<!--c# links to same name-->
   * [PostWebMessageAsString](/microsoft-edge/webview2/reference/win32/icorewebview2#postwebmessageasstring)<!--c# links to same name-->
   * [remove_ScriptDialogOpening](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_scriptdialogopening)<!--c# links to "ScriptDialogOpening Event"-->
   * [remove_WebMessageReceived](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_webmessagereceived)<!-- c# links to "WebMessageReceived Event" -->
   * [RemoveHostObjectFromScript](/microsoft-edge/webview2/reference/win32/icorewebview2#removehostobjectfromscript)<!--c# links to same name-->
   * [RemoveScriptToExecuteOnDocumentCreated](/microsoft-edge/webview2/reference/win32/icorewebview2#removescripttoexecuteondocumentcreated)<!--c# links to same name-->
   * [COREWEBVIEW2_SCRIPT_DIALOG_KIND](/microsoft-edge/webview2/reference/win32/icorewebview2#corewebview2_script_dialog_kind)<!--c# links to CoreWebView2ScriptDialogKind Enum-->

* [ICoreWebView2Settings](/microsoft-edge/webview2/reference/win32/icorewebview2settings)<!-- c# links to "CoreWebView2Settings" -->
   * [get_AreHostObjectsAllowed](/microsoft-edge/webview2/reference/win32/icorewebview2settings#get_arehostobjectsallowed)<!-- c# links to "AreHostObjectsAllowed Property" -->
   * [IsWebMessageEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings#get_iswebmessageenabled)<!-- c# links to "IsWebMessageEnabled Property" -->

* [ICoreWebView2WebMessageReceivedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2webmessagereceivedeventargs)<!-- c# links to "WebMessageReceived Event" -->

* [ICoreWebView2WebResourceResponse](/microsoft-edge/webview2/reference/win32/icorewebview2webresourceresponse)<!-- c# links to "CoreWebView2WebResourceResponse Class" -->

* [ICoreWebView2WebResourceResponseReceivedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2webresourceresponsereceivedeventargs)<!-- c# links to "CoreWebView2.WebResourceResponseReceived Event" -->

* [ICoreWebView2WebResourceResponseView](/microsoft-edge/webview2/reference/win32/icorewebview2webresourceresponseview)<!-- c# links to "CoreWebView2WebResourceResponseView Class" -->

---

See also:
* [API Reference overview](../how-to/webresourcerequested.md#api-reference-overview) in _Custom management of network requests_.  <!--The present link is theoretically exact dup - merge into that article and link to that API Ref section from here, what about WinRT version of article?-->


<!-- ====================================================================== -->
## Working with JavaScript in WebView2


# [C#](#tab/c-sharp)

* [CoreWebView2 Class](/dotnet/api/microsoft.web.webview2.core.corewebview2)
   * [ScriptDialogOpening Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.scriptdialogopening)

* [CoreWebView2Settings Class](/dotnet/api/microsoft.web.webview2.core.corewebview2settings)
   * [AreDefaultContextMenusEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.aredefaultcontextmenusenabled)
   * [IsScriptEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.isscriptenabled)


# [C++](#tab/cpp)

* [ICoreWebView2](/microsoft-edge/webview2/reference/win32/icorewebview2)
<!-- c# links to "CoreWebView2 Class" -->

* [ICoreWebView2ScriptDialogOpeningEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2scriptdialogopeningeventargs)
<!-- c# links to "ScriptDialogOpening Event" -->

* [ICoreWebView2Settings](/microsoft-edge/webview2/reference/win32/icorewebview2settings)
   * [get_AreDefaultContextMenusEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings#get_aredefaultcontextmenusenabled)<!-- c# links to "AreDefaultContextMenusEnabled Property" -->
   * [put_AreDefaultContextMenusEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings#put_aredefaultcontextmenusenabled)<!-- c# links to "AreDefaultContextMenusEnabled Property" -->
   * [put_IsScriptEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings#put_isscriptenabled)<!-- c# links to "IsScriptEnabled Property" -->
   * [get_IsScriptEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings#get_isscriptenabled)<!-- c# links to "IsScriptEnabled Property" -->

---

See also:
<!--* []()-->
* Working with JavaScript in WebView2 - TODO: link avail?<!-- there are only narrow topical articles eg using JS in native/web interop -->


<!-- ====================================================================== -->
## Browser features

This section covers features inherited from the browser and available in a WebView2 control.  These APIs allow developers the ability to toggle and change these inherited features.


<!-- ------------------------------ -->
### Printing

Printing content in a WebView2 control.

# [C#](#tab/c-sharp)

* [CoreWebView2 Class](/dotnet/api/microsoft.web.webview2.core.corewebview2)
   * [PrintToPdfAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.printtopdfasync)

* [CoreWebView2Environment](/dotnet/api/microsoft.web.webview2.core.corewebview2environment)
   * [CreatePrintSettings Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createprintsettings)

* [CoreWebView2PrintOrientation Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2printorientation)

* [CoreWebView2PrintSettings Class](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings)


# [C++](#tab/cpp)

* [ICoreWebView2](/microsoft-edge/webview2/reference/win32/icorewebview2)
   * [COREWEBVIEW2_PRINT_ORIENTATION](/microsoft-edge/webview2/reference/win32/icorewebview2#corewebview2_print_orientation)<!-- c# links to "CoreWebView2PrintOrientation Enum" -->

*  [ICoreWebView2_7](/microsoft-edge/webview2/reference/win32/icorewebview2_7)
   * [PrintToPdf](/microsoft-edge/webview2/reference/win32/icorewebview2_7#printtopdf)<!-- c# links to "CoreWebView2.PrintToPdfAsync Method" -->

*  [ICoreWebview2Environment6](/microsoft-edge/webview2/reference/win32/icorewebview2environment6)
   * [CreatePrintSettings](/microsoft-edge/webview2/reference/win32/icorewebview2environment6#createprintsettings)<!-- c# links to "CreatePrintSettings Method" -->

*  [ICoreWebView2PrintSettings](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings)<!-- c# links to "CoreWebView2PrintSettings Class" -->

---

See also:
<!--* []()-->


<!-- ------------------------------ -->
### Cookies

Working with cookies in a WebView2 control.

# [C#](#tab/c-sharp)

* [CoreWebView2](/dotnet/api/microsoft.web.webview2.core.corewebview2)
   * [CookieManager Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.cookiemanager#microsoft-web-webview2-core-corewebview2-cookiemanager)

* [CoreWebView2Cookie Class](/dotnet/api/microsoft.web.webview2.core.corewebview2cookie)

* [CoreWebView2CookieList Class](/dotnet/api/microsoft.web.webview2.core.corewebview2cookielist)

* [CoreWebView2CookieManager Class](/dotnet/api/microsoft.web.webview2.core.corewebview2cookiemanager)

* [CoreWebView2CookieSameSiteKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2cookiesamesitekind)


# [C++](#tab/cpp)

* [ICoreWebView2](/microsoft-edge/webview2/reference/win32/icorewebview2)
   * [COREWEBVIEW2_COOKIE_SAME_SITE_KIND](/microsoft-edge/webview2/reference/win32/icorewebview2#corewebview2_cookie_same_site_kind)<!-- c# links to "CoreWebView2CookieSameSiteKind Enum" -->

*  [ICoreWebView2_2](/microsoft-edge/webview2/reference/win32/icorewebview2_2)
   * [get_CookieManager](/microsoft-edge/webview2/reference/win32/icorewebview2_2#get_cookiemanager)<!-- c# links to "CookieManager Property" -->

*  [ICoreWebView2Cookie](/microsoft-edge/webview2/reference/win32/icorewebview2cookie)<!-- c# links to "CoreWebView2Cookie Class" -->

*  [ICoreWebView2CookieList](/microsoft-edge/webview2/reference/win32/icorewebview2cookielist)<!-- c# links to "CoreWebView2CookieList Class" -->

*  [ICoreWebView2CookieManager](/microsoft-edge/webview2/reference/win32/icorewebview2cookiemanager)<!-- c# links to "CoreWebView2CookieManager Class" -->

---

See also:
* [View, edit, and delete cookies](/microsoft-edge/devtools-guide-chromium/storage/cookies)
<!-- no WebView2 page with "cookie" in title -->


<!-- ------------------------------ -->
### Image capture

Capturing images using the key press combination `Ctrl`+`Shift`+`S` (TODO: confirm)<!--macOS too-->


# [C#](#tab/c-sharp)

* [CoreWebView2 Class](/dotnet/api/microsoft.web.webview2.core.corewebview2)
   * [CapturePreviewAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.capturepreviewasync)

* [CoreWebView2CapturePreviewImageFormat Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2capturepreviewimageformat)


# [C++](#tab/cpp)

* [ICoreWebView2](/microsoft-edge/webview2/reference/win32/icorewebview2)<!-- c# links to "CoreWebView2 Class" -->
   * [CapturePreview](/microsoft-edge/webview2/reference/win32/icorewebview2#capturepreview)<!-- c# links to "CapturePreviewAsync Method" -->
   * [COREWEBVIEW2_CAPTURE_PREVIEW_IMAGE_FORMAT](/microsoft-edge/webview2/reference/win32/icorewebview2#corewebview2_capture_preview_image_format)<!-- c# links to "CoreWebView2CapturePreviewImageFormat Enum" -->

---

See also:
<!--* []()-->


<!-- ------------------------------ -->
### Downloads

Working with file downloads in a WebView2 control.

# [C#](#tab/c-sharp)

* [CoreWebView2 Class](/dotnet/api/microsoft.web.webview2.core.corewebview2)
   * [DownloadStarting Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.downloadstarting)
   * [IsDefaultDownloadDialogOpenChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.isdefaultdownloaddialogopenchanged)
   * [CloseDefaultDownloadDialog Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.closedefaultdownloaddialog)
   * [DefaultDownloadDialogCornerAlignment Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.defaultdownloaddialogcorneralignment)
   * [DefaultDownloadDialogMargin Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.defaultdownloaddialogmargin)
   * [IsDefaultDownloadDialogOpen Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.isdefaultdownloaddialogopen)
   * [OpenDefaultDownloadDialog Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.opendefaultdownloaddialog)

* [CoreWebView2DefaultDownloadDialogCornerAlignment Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2defaultdownloaddialogcorneralignment)

* [CoreWebView2DownloadInterruptReason Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2downloadinterruptreason)

* [CoreWebView2DownloadOperation Class](/dotnet/api/microsoft.web.webview2.core.corewebview2downloadoperation)

* [CoreWebView2DownloadStartingEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2downloadstartingeventargs)

* [CoreWebView2DownloadState Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2downloadstate)

* [CoreWebView2HostResourceAccessKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2hostresourceaccesskind)


# [C++](#tab/cpp)

* [ICoreWebView2](/microsoft-edge/webview2/reference/win32/icorewebview2)<!-- c# links to "CoreWebView2 Class" -->
   * [COREWEBVIEW2_DEFAULT_DOWNLOAD_DIALOG_CORNER_ALIGNMENT](/microsoft-edge/webview2/reference/win32/icorewebview2#corewebview2_default_download_dialog_corner_alignment)<!-- c# links to "CoreWebView2DefaultDownloadDialogCornerAlignment Enum" -->
   * [COREWEBVIEW2_DOWNLOAD_INTERRUPT_REASON](/microsoft-edge/webview2/reference/win32/icorewebview2#corewebview2_download_interrupt_reason)<!-- c# links to "CoreWebView2DownloadInterruptReason Enum" -->
   * [COREWEBVIEW2_DOWNLOAD_STATE](/microsoft-edge/webview2/reference/win32/icorewebview2#corewebview2_download_state)<!-- c# links to "CoreWebView2DownloadState Enum" -->
   * [COREWEBVIEW2_HOST_RESOURCE_ACCESS_KIND](/microsoft-edge/webview2/reference/win32/icorewebview2#corewebview2_host_resource_access_kind)<!-- c# links to "CoreWebView2HostResourceAccessKind Enum" -->

* [ICoreWebView2_4](/microsoft-edge/webview2/reference/win32/icorewebview2_4)<!-- c# links to "CoreWebView2 Class" -->
   * [add_DownloadStarting](/microsoft-edge/webview2/reference/win32/icorewebview2_4#add_downloadstarting)<!-- c# links to "DownloadStarting Event" -->

* [ICoreWebView2_9](/microsoft-edge/webview2/reference/win32/icorewebview2_9)<!-- c# links to "CoreWebView2 Class" -->
   * [add_IsDefaultDownloadDialogOpenChanged](/microsoft-edge/webview2/reference/win32/icorewebview2_9#add_isdefaultdownloaddialogopenchanged)<!-- c# links to "IsDefaultDownloadDialogOpenChanged Event" -->
   * [CloseDefaultDownloadDialog](/microsoft-edge/webview2/reference/win32/icorewebview2_9#closedefaultdownloaddialog)<!-- c# links to "CloseDefaultDownloadDialog Method" -->
   * [get_DefaultDownloadDialogCornerAlignment](/microsoft-edge/webview2/reference/win32/icorewebview2_9#get_defaultdownloaddialogcorneralignment)<!-- c# links to "DefaultDownloadDialogCornerAlignment Property" -->
   * [get_DefaultDownloadDialogMargin](/microsoft-edge/webview2/reference/win32/icorewebview2_9#get_defaultdownloaddialogmargin)<!-- c# links to "DefaultDownloadDialogMargin Property" -->
   * [get_IsDefaultDownloadDialogOpen](/microsoft-edge/webview2/reference/win32/icorewebview2_9#get_isdefaultdownloaddialogopen)<!-- c# links to "IsDefaultDownloadDialogOpen Property" -->
   * [OpenDefaultDownloadDialog](/microsoft-edge/webview2/reference/win32/icorewebview2_9#opendefaultdownloaddialog)<!-- c# links to "OpenDefaultDownloadDialog Method" -->

*  [ICoreWebView2DownloadOperation](/microsoft-edge/webview2/reference/win32/icorewebview2downloadoperation)<!-- c# links to "CoreWebView2DownloadOperation Class" -->

*  [ICoreWebView2DownloadStartingEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2downloadstartingeventargs)<!-- c# links to "CoreWebView2DownloadStartingEventArgs Class" -->

---

See also:
<!--* []()-->


<!-- ------------------------------ -->
### Permissions

How to assign permissions to WebView2 controls to do _<!-- TODO: confirm -->

# [C#](#tab/c-sharp)

* [CoreWebView2 Class](/dotnet/api/microsoft.web.webview2.core.corewebview2)
   * [PermissionRequested Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.permissionrequested)

* [CoreWebView2PermissionKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionkind)

* [CoreWebView2PermissionRequestedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionrequestedeventargs)

* [CoreWebView2PermissionState Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionstate)


# [C++](#tab/cpp)

* [ICoreWebView2](/microsoft-edge/webview2/reference/win32/icorewebview2)<!-- c# links to "CoreWebView2 Class" -->
   * [add_PermissionRequested](/microsoft-edge/webview2/reference/win32/icorewebview2#add_permissionrequested)<!-- c# links to "PermissionRequested Event" -->
   * [remove_PermissionRequested](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_permissionrequested)<!-- c# links to "PermissionRequested Event" -->
   * [COREWEBVIEW2_PERMISSION_KIND](/microsoft-edge/webview2/reference/win32/icorewebview2#corewebview2_permission_kind)<!-- c# links to "CoreWebView2PermissionKind Enum" -->
   * [COREWEBVIEW2_PERMISSION_STATE](/microsoft-edge/webview2/reference/win32/icorewebview2#corewebview2_permission_state)<!-- c# links to "CoreWebView2PermissionState Enum" -->

* [ICoreWebView2PermissionRequestedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2permissionrequestedeventargs)<!-- c# links to "CoreWebView2PermissionRequestedEventArgs Class" -->

---

See also:
<!--* []()-->


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

* [CoreWebView2 Class](/dotnet/api/microsoft.web.webview2.core.corewebview2)
   * [ContextMenuRequested Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.contextmenurequested)
   * [CallDevToolsProtocolMethodForSessionAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.calldevtoolsprotocolmethodforsessionasync)

* [CoreWebView2Settings Class](/dotnet/api/microsoft.web.webview2.core.corewebview2settings)
   * [AreDefaultContextMenusEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.aredefaultcontextmenusenabled)


# [C++](#tab/cpp)

* [ICoreWebView2_11](/microsoft-edge/webview2/reference/win32/icorewebview2_11)<!-- c# links to "CoreWebView2 Class" -->
   * [add_ContextMenuRequested](/microsoft-edge/webview2/reference/win32/icorewebview2_11#add_contextmenurequested)<!-- c# links to "ContextMenuRequested Event" -->
   * [CallDevToolsProtocolMethodForSession](/microsoft-edge/webview2/reference/win32/icorewebview2_11#calldevtoolsprotocolmethodforsession)<!-- c# links to "CallDevToolsProtocolMethodForSessionAsync Method" -->
   * [remove_ContextMenuRequested](/microsoft-edge/webview2/reference/win32/icorewebview2_11#remove_contextmenurequested)<!-- c# links to "ContextMenuRequested Event" -->

* [ICoreWebView2Settings](/microsoft-edge/webview2/reference/win32/icorewebview2settings)<!-- c# links to "CoreWebView2Settings Class" -->
   * [get_AreDefaultContextMenusEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings#get_aredefaultcontextmenusenabled)<!-- c# links to "AreDefaultContextMenusEnabled Property" -->
   * [put_AreDefaultContextMenusEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings#put_aredefaultcontextmenusenabled)<!-- c# links to "AreDefaultContextMenusEnabled Property" -->

---

<!-- get links from Context Menus article or link to there -->
See also:
* [Customize context menus in WebView2](../how-to/context-menus.md)
   * [API Reference overview](../how-to/context-menus.md#api-reference-overview)


<!-- ------------------------------ -->
### Status Bar

Learn how to monitor the browser's status bar for changes.

# [C#](#tab/c-sharp)

* [CoreWebView2 Class](/dotnet/api/microsoft.web.webview2.core.corewebview2)
   * [StatusBarTextChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.statusbartextchanged)
   * [StatusBarText Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.statusbartext)

* [CoreWebView2Settings Class](/dotnet/api/microsoft.web.webview2.core.corewebview2settings)
   * [IsStatusBarEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.isstatusbarenabled)


# [C++](#tab/cpp)

* [ICoreWebView2_12](/microsoft-edge/webview2/reference/win32/icorewebview2_12)<!-- c# links to "CoreWebView2 Class" -->
   * [add_StatusBarTextChanged](/microsoft-edge/webview2/reference/win32/icorewebview2_12#add_statusbartextchanged)<!-- c# links to "StatusBarTextChanged Event" -->
   * [get_StatusBarText](/microsoft-edge/webview2/reference/win32/icorewebview2_12#get_statusbartext)<!-- c# links to "StatusBarText Property" -->
   * [remove_StatusBarTextChanged](/microsoft-edge/webview2/reference/win32/icorewebview2_12#remove_statusbartextchanged)<!-- c# links to "StatusBarTextChanged Event" -->

* [ICoreWebView2Settings](/microsoft-edge/webview2/reference/win32/icorewebview2settings)<!-- c# links to "CoreWebView2Settings Class" -->
   * [get_IsStatusBarEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings#get_isstatusbarenabled)<!-- c# links to "IsStatusBarEnabled Property" -->
   * [put_IsStatusBarEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings#put_isstatusbarenabled)<!-- c# links to "IsStatusBarEnabled Property" -->

---

See also:
<!--* []()-->


<!-- ------------------------------ -->
### User Agent

Learn how to detect the user agent string in a WebView2 control.

# [C#](#tab/c-sharp)

* [CoreWebView2Settings Class](/dotnet/api/microsoft.web.webview2.core.corewebview2settings)
   * [UserAgent Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.useragent)


# [C++](#tab/cpp)

* [ICoreWebView2Settings2](/microsoft-edge/webview2/reference/win32/icorewebview2settings2)<!-- c# links to "CoreWebView2Settings Class" -->
   * [get_UserAgent](/microsoft-edge/webview2/reference/win32/icorewebview2settings2#get_useragent)<!-- c# links to "UserAgent Property" -->
   * [put_UserAgent](/microsoft-edge/webview2/reference/win32/icorewebview2settings2#put_useragent)<!-- c# links to "UserAgent Property" -->

---

See also:
<!--* []()-->


<!-- ------------------------------ -->
### Autofill

Leverage the browsers autofill functionality in a WebView2 control.

# [C#](#tab/c-sharp)

* [CoreWebView2Settings Class](/dotnet/api/microsoft.web.webview2.core.corewebview2settings)
   * [IsGeneralAutofillEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.isgeneralautofillenabled)
   * [IsPasswordAutosaveEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.ispasswordautosaveenabled)


# [C++](#tab/cpp)

* [ICoreWebView2Settings4](/microsoft-edge/webview2/reference/win32/icorewebview2settings4)<!-- c# links to "CoreWebView2Settings Class" -->
   * [get_IsGeneralAutofillEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings4#get_isgeneralautofillenabled)<!-- c# links to "IsGeneralAutofillEnabled Property" -->
   * [get_IsPasswordAutosaveEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings4#get_ispasswordautosaveenabled)<!-- c# links to "IsPasswordAutosaveEnabled Property" -->
   * [put_IsGeneralAutofillEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings4#put_isgeneralautofillenabled)<!-- c# links to "IsGeneralAutofillEnabled Property" -->
   * [put_IsPasswordAutosaveEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings4#put_ispasswordautosaveenabled)<!-- c# links to "IsPasswordAutosaveEnabled Property" -->

---

See also:
<!--* []()-->


<!-- ------------------------------ -->
### Audio

Control audio settings in a WebView2 control.

# [C#](#tab/c-sharp)

* [CoreWebView2 Class](/dotnet/api/microsoft.web.webview2.core.corewebview2)
   * [IsDocumentPlayingAudioChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.isdocumentplayingaudiochanged)
   * [IsMutedChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.ismutedchanged)
   * [IsDocumentPlayingAudio Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.isdocumentplayingaudio)
   * [IsMuted Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.ismuted)


# [C++](#tab/cpp)

* [ICoreWebView2_8](/microsoft-edge/webview2/reference/win32/icorewebview2_8)<!-- c# links to "CoreWebView2 Class" -->
   * [add_IsDocumentPlayingAudioChanged](/microsoft-edge/webview2/reference/win32/icorewebview2_8#add_isdocumentplayingaudiochanged)<!-- c# links to "IsDocumentPlayingAudioChanged Event" -->
   * [add_IsMutedChanged](/microsoft-edge/webview2/reference/win32/icorewebview2_8#add_ismutedchanged)<!-- c# links to "IsMutedChanged Event" -->
   * [get_IsDocumentPlayingAudio](/microsoft-edge/webview2/reference/win32/icorewebview2_8#get_isdocumentplayingaudio)<!-- c# links to "IsDocumentPlayingAudio Property" -->
   * [get_IsMuted](/microsoft-edge/webview2/reference/win32/icorewebview2_8#get_ismuted)<!-- c# links to "IsMuted Property" -->

---

See also:
<!--* []()-->


<!-- ====================================================================== -->
## Managing WebView2 processes

Learn how to work with the process that your WebView2 runs in on the host computer.

# [C#](#tab/c-sharp)

* [CoreWebView2 Class](/dotnet/api/microsoft.web.webview2.core.corewebview2)
   * [ProcessFailed Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.processfailed)
   * [BrowserProcessId Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.browserprocessid)

* [CoreWebView2BrowserProcessExitedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2browserprocessexitedeventargs)

* [CoreWebView2BrowserProcessExitKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2browserprocessexitkind)

* [CoreWebView2Environment](/dotnet/api/microsoft.web.webview2.core.corewebview2environment)
   * [BrowserProcessExited Event](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.browserprocessexited)
   * [GetProcessInfos Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.getprocessinfos)
   * [ProcessInfosChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.processinfoschanged)

* [CoreWebView2ProcessFailedKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2processfailedkind)

* [CoreWebView2ProcessFailedReason Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2processfailedreason)

* [CoreWebView2ProcessKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2processkind)

* [CoreWebView2ProcessFailedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2processfailedeventargs)

* [CoreWebView2ProcessInfo Class](/dotnet/api/microsoft.web.webview2.core.corewebview2processinfo)


# [C++](#tab/cpp)

* [ICoreWebView2](/microsoft-edge/webview2/reference/win32/icorewebview2)<!-- c# links to "CoreWebView2 Class" -->
   * [add_ProcessFailed](/microsoft-edge/webview2/reference/win32/icorewebview2#add_processfailed)<!-- c# links to "ProcessFailed Event" -->
   * [get_BrowserProcessId](/microsoft-edge/webview2/reference/win32/icorewebview2#get_browserprocessid)<!-- c# links to "BrowserProcessId Property" -->
   * [remove_ProcessFailed](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_processfailed)<!-- c# links to "ProcessFailed Event" -->
   * [COREWEBVIEW2_PROCESS_FAILED_KIND](/microsoft-edge/webview2/reference/win32/icorewebview2#corewebview2_process_failed_kind)<!-- c# links to "CoreWebView2ProcessFailedKind Enum" -->
   * [COREWEBVIEW2_PROCESS_FAILED_REASON](/microsoft-edge/webview2/reference/win32/icorewebview2#corewebview2_process_failed_reason)<!-- c# links to "CoreWebView2ProcessFailedReason Enum" -->
   * [COREWEBVIEW2_PROCESS_KIND](/microsoft-edge/webview2/reference/win32/icorewebview2#corewebview2_process_kind)<!-- c# links to "CoreWebView2ProcessKind Enum" -->
   * [COREWEBVIEW2_BROWSER_PROCESS_EXIT_KIND](/microsoft-edge/webview2/reference/win32/icorewebview2#corewebview2_browser_process_exit_kind)<!-- c# links to "CoreWebView2BrowserProcessExitKind Enum" -->

* [ICoreWebView2BrowserProcessExitedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2browserprocessexitedeventargs)<!-- c# links to "CoreWebView2BrowserProcessExitedEventArgs Class" -->

* [ICoreWebView2ProcessFailedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2processfailedeventargs)<!-- c# links to "CoreWebView2ProcessFailedEventArgs Class" -->

* [ICoreWebView2ProcessInfo](/microsoft-edge/webview2/reference/win32/icorewebview2processinfo)<!-- c# links to "CoreWebView2ProcessInfo Class" -->

* [ICoreWebView2ProcessInfoCollection](/microsoft-edge/webview2/reference/win32/icorewebview2processinfocollection)<!-- c# links to n/a -->

* [ICoreWebView2Environment5](/microsoft-edge/webview2/reference/win32/icorewebview2environment5)<!-- c# links to "CoreWebView2Environment" -->
   * [add_BrowserProcessExited](/microsoft-edge/webview2/reference/win32/icorewebview2environment5#add_browserprocessexited)<!-- c# links to "BrowserProcessExited Event" -->
   * [remove_BrowserProcessExited](/microsoft-edge/webview2/reference/win32/icorewebview2environment5#remove_browserprocessexited)<!-- c# links to "BrowserProcessExited Event" -->

* [ICoreWebView2Environment8](/microsoft-edge/webview2/reference/win32/icorewebview2environment8)<!-- c# links to "CoreWebView2Environment" -->
   * [add_ProcessInfosChanged](/microsoft-edge/webview2/reference/win32/icorewebview2environment8#add_processinfoschanged)<!-- c# links to "ProcessInfosChanged Event" -->
   * [GetProcessInfos](/microsoft-edge/webview2/reference/win32/icorewebview2environment8#getprocessinfos)<!-- c# links to "GetProcessInfos Method" -->
   * [remove_ProcessInfosChanged](/microsoft-edge/webview2/reference/win32/icorewebview2environment8#remove_processinfoschanged)<!-- c# links to "ProcessInfosChanged Event" -->

---

See also:
<!--* []()-->


<!-- ====================================================================== -->
## Navigation

Learn how to manage page navigation in a WebView2.

# [C#](#tab/c-sharp)

* [CoreWebView2 Class](/dotnet/api/microsoft.web.webview2.core.corewebview2)
   * [CanGoBack Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.cangoback)
   * [CanGoForward Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.cangoforward)
   * [ClearVirtualHostNameToFolderMapping Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.clearvirtualhostnametofoldermapping)
   * [FrameNavigationCompleted Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.framenavigationcompleted)
   * [FrameNavigationStarting Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.framenavigationstarting)
   * [GoBack Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.goback)
   * [GoForward Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.goforward)
   * [HistoryChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.historychanged)
   * [Navigate Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.navigate)
   * [NavigateToString Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.navigatetostring)
   * [NavigateWithWebResourceRequest Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.navigatewithwebresourcerequest)
   * [NavigationCompleted Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.navigationcompleted)
   * [NavigationStarting Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.navigationstarting)
   * [SetVirtualHostNameToFolderMapping Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.setvirtualhostnametofoldermapping)
   * [Source Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.source)
   * [SourceChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.sourcechanged)
   * [Stop Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.stop)

* [CoreWebView2NavigationCompletedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2navigationcompletedeventargs)

* [CoreWebView2NavigationStartingEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2navigationstartingeventargs)

* [CoreWebView2SourceChangedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2sourcechangedeventargs)

* [CoreWebView2WebErrorStatus Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2weberrorstatus)

* [CoreWebView2WebResourceContext Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2webresourcecontext)


# [C++](#tab/cpp)

* [ICoreWebView2](/microsoft-edge/webview2/reference/win32/icorewebview2)<!-- c# links to "CoreWebView2 Class" -->
   * [add_FrameNavigationCompleted](/microsoft-edge/webview2/reference/win32/icorewebview2#add_framenavigationcompleted)<!-- c# links to "FrameNavigationCompleted Event" -->
   * [add_FrameNavigationStarting](/microsoft-edge/webview2/reference/win32/icorewebview2#add_framenavigationstarting)<!-- c# links to "FrameNavigationStarting Event" -->
   * [add_HistoryChanged](/microsoft-edge/webview2/reference/win32/icorewebview2#add_historychanged)<!-- c# links to "HistoryChanged Event" -->
   * [add_NavigationCompleted](/microsoft-edge/webview2/reference/win32/icorewebview2#add_navigationcompleted)<!-- c# links to "NavigationCompleted Event" -->
   * [add_NavigationStarting](/microsoft-edge/webview2/reference/win32/icorewebview2#add_navigationstarting)<!-- c# links to "NavigationStarting Event" -->
   * [add_SourceChanged](/microsoft-edge/webview2/reference/win32/icorewebview2#add_sourcechanged)<!-- c# links to "SourceChanged Event" -->
   * [get_CanGoBack](/microsoft-edge/webview2/reference/win32/icorewebview2#get_cangoback)<!-- c# links to "CanGoBack Property" -->
   * [get_CanGoFroward](/microsoft-edge/webview2/reference/win32/icorewebview2#get_cangoforward)<!-- c# links to "CanGoForward Property" -->
   * [get_Source](/microsoft-edge/webview2/reference/win32/icorewebview2#get_source)<!-- c# links to "Source Property" -->
   * [GoBack](/microsoft-edge/webview2/reference/win32/icorewebview2#goback)<!-- c# links to "GoBack Method" -->
   * [GoForward](/microsoft-edge/webview2/reference/win32/icorewebview2#goforward)<!-- c# links to "GoForward Method" -->
   * [Navigate](/microsoft-edge/webview2/reference/win32/icorewebview2#navigate)<!-- c# links to "Navigate Method" -->
   * [NavigateToString](/microsoft-edge/webview2/reference/win32/icorewebview2#navigatetostring)<!-- c# links to "NavigateToString Method" -->
   * [remove_FrameNavigationCompleted](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_framenavigationcompleted)<!-- c# links to "FrameNavigationCompleted Event" -->
   * [remove_NavigationCompleted](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_navigationcompleted)<!-- c# links to "NavigationCompleted Event" -->
   * [remove_NavigationStarting](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_navigationstarting)<!-- c# links to "NavigationStarting Event" -->
   * [remove_SourceChanged](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_sourcechanged)<!-- c# links to "SourceChanged Event" -->
   * [Stop](/microsoft-edge/webview2/reference/win32/icorewebview2#stop)<!-- c# links to "Stop Method" -->
   * [COREWEBVIEW2_WEB_ERROR_STATUS](/microsoft-edge/webview2/reference/win32/icorewebview2#corewebview2_web_error_status)<!-- c# links to "CoreWebView2WebErrorStatus Enum" -->
   * [COREWEBVIEW2_WEB_RESOURCE_CONTEXT](/microsoft-edge/webview2/reference/win32/icorewebview2#corewebview2_web_resource_context)<!-- c# links to "CoreWebView2WebResourceContext Enum" -->

* [ICoreWebView2_2](/microsoft-edge/webview2/reference/win32/icorewebview2_2)<!-- c# links to "CoreWebView2 Class" -->
   * [NavigateWithWebResourceRequest](/microsoft-edge/webview2/reference/win32/icorewebview2_2#navigatewithwebresourcerequest)<!-- c# links to "NavigateWithWebResourceRequest Method" -->

* [ICoreWebView2_3](/microsoft-edge/webview2/reference/win32/icorewebview2_3)<!-- c# links to "CoreWebView2 Class" -->
   * [ClearVirtualHostNameToFolderMapping](/microsoft-edge/webview2/reference/win32/icorewebview2_3#clearvirtualhostnametofoldermapping)<!-- c# links to "ClearVirtualHostNameToFolderMapping Method" -->
   * [SetVirtualHostNameToFolderMapping](/microsoft-edge/webview2/reference/win32/icorewebview2_3#setvirtualhostnametofoldermapping)<!-- c# links to "SetVirtualHostNameToFolderMapping Method" -->

* [ICoreWebView2NavigationCompletedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2navigationcompletedeventargs)<!-- c# links to "CoreWebView2NavigationCompletedEventArgs Class" -->

* [ICoreWebView2NavigationStartingEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2navigationstartingeventargs)<!-- c# links to "CoreWebView2NavigationStartingEventArgs Class" -->

* [ICoreWebView2SourceChangedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2sourcechangedeventargs)<!-- c# links to "CoreWebView2SourceChangedEventArgs Class" -->

---

See also:
<!--* []()-->


<!-- ====================================================================== -->
## Web content


<!-- ------------------------------ -->
### Web Resource Requested

Learn how to make an external call to a resource on the web.

# [C#](#tab/c-sharp)

* [CoreWebView2 Class](/dotnet/api/microsoft.web.webview2.core.corewebview2)
   * [AddWebResourceRequestedFilter Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.addwebresourcerequestedfilter)
   * [NavigateWithWebResourceRequest Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.navigatewithwebresourcerequest)
   * [Reload Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.reload)
   * [RemoveWebResourceRequestedFilter Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.removewebresourcerequestedfilter)
   * [WebResourceRequested Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.webresourcerequested)
   * [WebResourceResponseReceived Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.webresourceresponsereceived)

* [CoreWebView2Environment Class](/dotnet/api/microsoft.web.webview2.core.corewebview2environment)
   * [CreateWebResourceRequest Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createwebresourcerequest)
   * [CreateWebResourceResponse Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createwebresourceresponse)

* [CoreWebView2WebResourceRequest Class](/dotnet/api/microsoft.web.webview2.core.corewebview2webresourcerequest)

* [CoreWebView2WebResourceRequestedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2webresourcerequestedeventargs)


# [C++](#tab/cpp)

* [ICoreWebView2](/microsoft-edge/webview2/reference/win32/icorewebview2)<!-- c# links to "CoreWebView2 Class" -->
   * [add_WebResourceRequested](/microsoft-edge/webview2/reference/win32/icorewebview2#add_webresourcerequested)<!-- c# links to "WebResourceRequested Event" -->
   * [AddWebResourceRequestedFilter](/microsoft-edge/webview2/reference/win32/icorewebview2#addwebresourcerequestedfilter)<!-- c# links to "AddWebResourceRequestedFilter Method" -->
   * [Reload](/microsoft-edge/webview2/reference/win32/icorewebview2#reload)<!-- c# links to "Reload Method" -->
   * [remove_WebResourceRequested](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_webresourcerequested)<!-- c# links to "WebResourceRequested Event" -->
   * [RemoveWebResourceRequestedFilter](/microsoft-edge/webview2/reference/win32/icorewebview2#removewebresourcerequestedfilter)<!-- c# links to "RemoveWebResourceRequestedFilter Method" -->

* [ICoreWebView2_2](/microsoft-edge/webview2/reference/win32/icorewebview2_2)<!-- c# links to "CoreWebView2 Class" -->
   * [add_WebResourceResponseReceived](/microsoft-edge/webview2/reference/win32/icorewebview2_2#add_webresourceresponsereceived)<!-- c# links to "WebResourceResponseReceived Event" -->
   * [NavigateWithWebResourceRequest](/microsoft-edge/webview2/reference/win32/icorewebview2_2#navigatewithwebresourcerequest)<!-- c# links to "NavigateWithWebResourceRequest Method" -->
   * [remove_WebResourceResponseReceived](/microsoft-edge/webview2/reference/win32/icorewebview2_2#remove_webresourceresponsereceived)<!-- c# links to "WebResourceResponseReceived Event" -->

* [ICoreWebView2Environment](/microsoft-edge/webview2/reference/win32/icorewebview2environment)<!-- c# links to "CoreWebView2Environment Class" -->
   * [CreateWebResourceResponse](/microsoft-edge/webview2/reference/win32/icorewebview2environment#createwebresourceresponse)<!-- c# links to "CreateWebResourceResponse Method" --> 

* [ICoreWebView2Environment2](/microsoft-edge/webview2/reference/win32/icorewebview2environment2)<!-- c# links to "CoreWebView2Environment Class" -->
   * [CreateWebResourceRequest](/microsoft-edge/webview2/reference/win32/icorewebview2environment2#createwebresourcerequest)<!-- c# links to "CreateWebResourceRequest Method" -->

* [ICoreWebView2WebResourceRequest](/microsoft-edge/webview2/reference/win32/icorewebview2webresourcerequest)<!-- c# links to "CoreWebView2WebResourceRequest Class" -->

* [ICoreWebView2WebResourceRequestedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2webresourcerequestedeventargs)<!-- c# links to "CoreWebView2WebResourceRequestedEventArgs Class" -->

---

See also:
<!--* []()-->


<!-- ------------------------------ -->
### DOM/Content loaded

Learn how to handle events when content is loaded in the WebView2.

# [C#](#tab/c-sharp)

* [CoreWebView2 Class](/dotnet/api/microsoft.web.webview2.core.corewebview2)
   * [ContainsFullScreenElementChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.containsfullscreenelementchanged)
   * [ContentLoading Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.contentloading)
   * [DocumentTitleChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.documenttitlechanged)
   * [ContainsFullScreenElement Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.containsfullscreenelement)
   * [DocumentTitle Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.documenttitle)
   * [DOMContentLoaded Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.domcontentloaded)

* [CoreWebView2ContentLoadingEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2contentloadingeventargs)

* [CoreWebView2Controller Class](/dotnet/api/microsoft.web.webview2.core.corewebview2controller)
   * [Close Method](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.close)

* [CoreWebView2DOMContentLoadedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2domcontentloadedeventargs)


# [C++](#tab/cpp)

* [ICoreWebView2](/microsoft-edge/webview2/reference/win32/icorewebview2)<!-- c# links to "CoreWebView2 Class" -->
   * [add_ContainsFullScreenElementChanged](/microsoft-edge/webview2/reference/win32/icorewebview2#add_containsfullscreenelementchanged)<!-- c# links to "ContainsFullScreenElementChanged Event" -->
   * [add_ContentLoading](/microsoft-edge/webview2/reference/win32/icorewebview2#add_contentloading)<!-- c# links to "ContentLoading Event" -->
   * [add_DocumentTitleChanged](/microsoft-edge/webview2/reference/win32/icorewebview2#add_documenttitlechanged)<!-- c# links to "DocumentTitleChanged Event" -->
   * [get_ContainsFullScreenElement](/microsoft-edge/webview2/reference/win32/icorewebview2#get_containsfullscreenelement)<!-- c# links to "ContainsFullScreenElement Property" -->
   * [get_DocumentTitle](/microsoft-edge/webview2/reference/win32/icorewebview2#get_documenttitle)<!-- c# links to "DocumentTitle Property" -->
   * [remove_ContainsFullScreenElementChanged](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_containsfullscreenelementchanged)<!-- c# links to "ContainsFullScreenElementChanged Event" -->
   * [remove_ContentLoading](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_contentloading)<!-- c# links to "ContentLoading Event" -->
   * [remove_DocumentTitleChanged](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_documenttitlechanged)<!-- c# links to "DocumentTitleChanged Event" -->

* [ICoreWebView2_2](/microsoft-edge/webview2/reference/win32/icorewebview2_2)<!-- c# links to "CoreWebView2 Class" -->
   * [add_DOMContentLoaded](/microsoft-edge/webview2/reference/win32/icorewebview2_2#add_domcontentloaded)<!-- c# links to "DOMContentLoaded Event" -->
   * [remove_DOMContentLoaded](/microsoft-edge/webview2/reference/win32/icorewebview2_2#remove_domcontentloaded)<!-- c# links to "DOMContentLoaded Event" -->

* [ICoreWebView2ContentLoadingEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2contentloadingeventargs)<!-- c# links to "CoreWebView2ContentLoadingEventArgs Class" -->

* [ICoreWebView2Controller](/microsoft-edge/webview2/reference/win32/icorewebview2controller)<!-- c# links to "CoreWebView2Controller Class" -->
   * [Close](/microsoft-edge/webview2/reference/win32/icorewebview2controller#close)<!-- c# links to "Close Method" -->

* [ICoreWebView2DOMContentLoadedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2domcontentloadedeventargs)<!-- c# links to "CoreWebView2DOMContentLoadedEventArgs Class" -->

---

See also:
<!--* []()-->


<!-- ------------------------------ -->
### Server/Client Certificates

Learn how to work with certificates in WebView2 controls (TODO: confirm)

# [C#](#tab/c-sharp)

* [CoreWebView2 Class](/dotnet/api/microsoft.web.webview2.core.corewebview2)
   * [ClientCertificateRequested Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.clientcertificaterequested)

* [CoreWebView2ClientCertificate Class](/dotnet/api/microsoft.web.webview2.core.corewebview2clientcertificate)

* [CoreWebView2ClientCertificateKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2clientcertificatekind)

* [CoreWebView2ClientCertificateRequestedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2clientcertificaterequestedeventargs)


# [C++](#tab/cpp)

* [ICoreWebView2](/microsoft-edge/webview2/reference/win32/icorewebview2)<!-- c# links to "CoreWebView2 Class" -->
   * [COREWEBVIEW2_CLIENT_CERTIFICATE_KIND](/microsoft-edge/webview2/reference/win32/icorewebview2#corewebview2_client_certificate_kind)<!-- c# links to "CoreWebView2ClientCertificateKind Enum" -->

* [ICoreWebView2ClientCertificate](/microsoft-edge/webview2/reference/win32/icorewebview2clientcertificate)<!-- c# links to "CoreWebView2ClientCertificate Class" -->

* [ICoreWebView2ClientCertificateCollection](/microsoft-edge/webview2/reference/win32/icorewebview2clientcertificatecollection)<!-- c# links to n/a -->

* [ICoreWebView2ClientCertificateRequestedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2clientcertificaterequestedeventargs)<!-- c# links to "CoreWebView2ClientCertificateRequestedEventArgs Class" -->

* [ICoreWebView2_5](/microsoft-edge/webview2/reference/win32/icorewebview2_5)<!-- c# links to "CoreWebView2 Class" -->
   * [add_ClientCertificateRequested](/microsoft-edge/webview2/reference/win32/icorewebview2_5#add_clientcertificaterequested)<!-- c# links to "ClientCertificateRequested Event" -->

---

See also:
<!--* []()-->


<!-- ====================================================================== -->
## Working with Chrome Developer Protocol (CDP)

Learn how to automate tasks in the DevTools in a WebView2 control using CDP (TODO: confirm)


# [C#](#tab/c-sharp)

* [CoreWebView2 Class](/dotnet/api/microsoft.web.webview2.core.corewebview2)
   * [CallDevToolsProtocolMethodAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.calldevtoolsprotocolmethodasync)
   * [CallDevToolsProtocolMethodForSessionAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.calldevtoolsprotocolmethodforsessionasync)
   * [GetDevToolsProtocolEventReceiver Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.getdevtoolsprotocoleventreceiver)
   * [OpenDevToolsWindow Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.opendevtoolswindow)

* [CoreWebView2DevToolsProtocolEventReceivedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2devtoolsprotocoleventreceivedeventargs)

* [CoreWebView2DevToolsProtocolEventReceiver Class](/dotnet/api/microsoft.web.webview2.core.corewebview2devtoolsprotocoleventreceiver)

* [CoreWebView2Settings Class](/dotnet/api/microsoft.web.webview2.core.corewebview2settings)
   * [AreDevToolsEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.aredevtoolsenabled)


# [C++](#tab/cpp)

* [ICoreWebView2](/microsoft-edge/webview2/reference/win32/icorewebview2)<!-- c# links to "CoreWebView2 Class" -->
   * [CallDevToolsProtocolMethod](/microsoft-edge/webview2/reference/win32/icorewebview2#calldevtoolsprotocolmethod)<!-- c# links to "CallDevToolsProtocolMethodAsync Method" -->
   * [GetDevToolsProtocolEventReceiver](/microsoft-edge/webview2/reference/win32/icorewebview2#getdevtoolsprotocoleventreceiver)<!-- c# links to "GetDevToolsProtocolEventReceiver Method" -->
   * [OpenDevToolsWindow](/microsoft-edge/webview2/reference/win32/icorewebview2#opendevtoolswindow)<!-- c# links to "OpenDevToolsWindow Method" -->

* [ICoreWebView2DevToolsProtocolEventReceivedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2devtoolsprotocoleventreceivedeventargs)<!-- c# links to "CoreWebView2DevToolsProtocolEventReceivedEventArgs Class" -->

* [ICoreWebView2DevToolsProtocolEventReceiver](/microsoft-edge/webview2/reference/win32/icorewebview2devtoolsprotocoleventreceiver)<!-- c# links to "CoreWebView2DevToolsProtocolEventReceiver Class" -->

* [ICoreWebView2_11](/microsoft-edge/webview2/reference/win32/icorewebview2_11)<!-- c# links to "CoreWebView2 Class" -->
   * [CallDevToolsProtocolMethodForSession](/microsoft-edge/webview2/reference/win32/icorewebview2_11#calldevtoolspotocolmethodforsession)<!-- c# links to "CallDevToolsProtocolMethodForSessionAsync Method" -->

* [ICoreWebView2Settings](/microsoft-edge/webview2/reference/win32/icorewebview2settings)<!-- c# links to "CoreWebView2Settings Class" -->
   * [get_AreDevToolsEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings#get_aredevtoolsenabled)<!-- c# links to "AreDevToolsEnabled Property" -->
   * [put_AreDevToolsEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings#put_aredevtoolsenabled)<!-- c# links to "AreDevToolsEnabled Property" -->

---

See also:
<!--* []()-->


<!-- ====================================================================== -->
## iFrames

Learn how to work with iFrames in content displayed in WebView2 controls


# [C#](#tab/c-sharp)

* [CoreWebView2 Class](/dotnet/api/microsoft.web.webview2.core.corewebview2)
   * [FrameCreated Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.framecreated)
   * [FrameNavigationCompleted Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.framenavigationcompleted)
   * [FrameNavigationStarting Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.framenavigationstarting)
   * [HistoryChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.historychanged)

* [CoreWebView2Frame Class](/dotnet/api/microsoft.web.webview2.core.corewebview2frame)

* [CoreWebView2FrameCreatedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2framecreatedeventargs)

* [CoreWebView2FrameInfo Class](/dotnet/api/microsoft.web.webview2.core.corewebview2frameinfo)


# [C++](#tab/cpp)

* [ICoreWebView2](/microsoft-edge/webview2/reference/win32/icorewebview2)<!-- c# links to "CoreWebView2 Class" -->
   * [add_FrameNavigationCompleted](/microsoft-edge/webview2/reference/win32/icorewebview2#add_framenavigationcompleted)<!-- c# links to "FrameNavigationCompleted Event" -->
   * [add_FrameNavigationStarting](/microsoft-edge/webview2/reference/win32/icorewebview2#add_framenavigationstarting)<!-- c# links to "FrameNavigationStarting Event" -->
   * [add_HistoryChanged](/microsoft-edge/webview2/reference/win32/icorewebview2#add_historychanged)<!-- c# links to "HistoryChanged Event" -->
   * [remove_FrameNavigationCompleted](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_framenavigationcompleted)<!-- c# links to "FrameNavigationCompleted Event" -->
   * [remove_FrameNavigationStarting](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_framenavigationstarting)<!-- c# links to "FrameNavigationStarting Event" -->
   * [remove_HistoryChanged](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_historychanged)<!-- c# links to "HistoryChanged Event" -->

* [ICoreWebView2_4](/microsoft-edge/webview2/reference/win32/icorewebview2_4)<!-- c# links to "CoreWebView2 Class" -->
   * [add_FrameCreated](/microsoft-edge/webview2/reference/win32/icorewebview2_4#add_framecreated)<!-- c# links to "FrameCreated Event" -->

* [ICoreWebView2Frame](/microsoft-edge/webview2/reference/win32/icorewebview2frame)<!-- c# links to "CoreWebView2Frame Class" -->

* [ICoreWebView2FrameCreatedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2framecreatedeventargs)<!-- c# links to "CoreWebView2FrameCreatedEventArgs Class" -->

* [ICoreWebView2FrameInfo](/microsoft-edge/webview2/reference/win32/icorewebview2frameinfo)<!-- c# links to "CoreWebView2FrameInfo Class" -->

* [ICoreWebView2FrameInfoCollection](/microsoft-edge/webview2/reference/win32/icorewebview2frameinfocollection)<!-- c# links to n/a -->

* [ICoreWebView2FrameInfoCollectionIterator](/microsoft-edge/webview2/reference/win32/icorewebview2frameinfocollectioniterator)<!-- c# links to n/a -->

---

See also:
<!--* []()-->


<!-- ====================================================================== -->
## Authentication

<!-- selling point / value prop: easy configuration of WebView2 apps - support user accounts -->

Learn how to handle basic authentication in WebView2 controls.

# [C#](#tab/c-sharp)

* [CoreWebView2 Class](/dotnet/api/microsoft.web.webview2.core.corewebview2)
   * [BasicAuthenticationRequested Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.basicauthenticationrequested)

* [CoreWebView2BasicAuthenticationRequestedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2basicauthenticationrequestedeventargs)

* [CoreWebView2BasicAuthenticationResponse Class](/dotnet/api/microsoft.web.webview2.core.corewebview2basicauthenticationresponse)

* [CoreWebView2HttpHeadersCollectionIterator Class](/dotnet/api/microsoft.web.webview2.core.corewebview2httpheaderscollectioniterator)<!--TODO: why does this collectioniterator class exist in c#, usu not needed-->

* [CoreWebView2HttpRequestHeaders Class](/dotnet/api/microsoft.web.webview2.core.corewebview2httprequestheaders)

* [CoreWebView2HttpResponseHeaders Class](/dotnet/api/microsoft.web.webview2.core.corewebview2httpresponseheaders)


# [C++](#tab/cpp)

* [ICoreWebView2_10](/microsoft-edge/webview2/reference/win32/icorewebview2_10)<!-- c# links to "CoreWebView2 Class" -->
   * [add_BasicAuthenticationRequested](/microsoft-edge/webview2/reference/win32/icorewebview2_10#add_basicauthenticationrequested)<!-- c# links to "BasicAuthenticationRequested Event" -->

* [ICoreWebView2BasicAuthenticationRequestedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2basicauthenticationrequestedeventargs)<!-- c# links to "CoreWebView2BasicAuthenticationRequestedEventArgs Class" -->

* [ICoreWebView2BasicAuthenticationResponse](/microsoft-edge/webview2/reference/win32/icorewebview2basicauthenticationresponse)<!-- c# links to "CoreWebView2BasicAuthenticationResponse Class" -->

* [ICoreWebView2HttpHeadersCollectionIterator](/microsoft-edge/webview2/reference/win32/icorewebview2httpheaderscollectioniterator)<!-- c# links to "CoreWebView2HttpHeadersCollectionIterator Class" -->

* [ICoreWebView2HttpRequestHeaders](/microsoft-edge/webview2/reference/win32/icorewebview2httprequestheaders)<!-- c# links to "CoreWebView2HttpRequestHeaders Class" -->

* [ICoreWebView2HttpResponseHeaders](/microsoft-edge/webview2/reference/win32/icorewebview2httpresponseheaders)<!-- c# links to "CoreWebView2HttpResponseHeaders Class" -->

---

See also:
<!--* []()-->


<!-- ====================================================================== -->
## Environment setup

Learn how to specify settings before WebView2 controls are created.

<!-- selling point / value prop: easy configuration of WebView2 apps

*  What is "envir setup" - of the control?  after I add the WebView2 control to the page?  What do we mean here by "envir"?
*  Why care about it

-->

<!-- link to a doc about this if avail.  eg Auth has a doc to link to. -->


# [C#](#tab/c-sharp)

* [CoreWebView2 Class](/dotnet/api/microsoft.web.webview2.core.corewebview2)
   * [Environment Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.environment)

* [CoreWebView2Environment Class](/dotnet/api/microsoft.web.webview2.core.corewebview2environment)
   * [BrowserVersionString Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.browserversionstring)
   * [NewBrowserVersionAvailable Event](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.newbrowserversionavailable)

* [CoreWebView2EnvironmentOptions Class](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions)


# [C++](#tab/cpp)

* [ICoreWebView2_2](/microsoft-edge/webview2/reference/win32/icorewebview2_2)<!-- c# links to "CoreWebView2 Class" -->
   * [get_Environment](/microsoft-edge/webview2/reference/win32/icorewebview2_2#get_environment)<!-- c# links to "Environment Property" -->

* [ICoreWebView2Environment](/microsoft-edge/webview2/reference/win32/icorewebview2environment)<!-- c# links to "CoreWebView2Environment Class" -->
   * [add_NewBrowserVersionAvailable](/microsoft-edge/webview2/reference/win32/icorewebview2environment#add_newbrowserversionavailable)<!-- c# links to "NewBrowserVersionAvailable Event" -->
   * [get_BrowserVersionString](/microsoft-edge/webview2/reference/win32/icorewebview2environment#get_browserversionstring)<!-- c# links to "BrowserVersionString Property" -->

* [ICoreWebView2EnvironmentOptions](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions)<!-- c# links to "CoreWebView2EnvironmentOptions Class" -->

---

See also:
<!--* []()-->


<!-- ====================================================================== -->
## Rendering WebView2 in native apps (Hosting)

These APIS are used to set up the WebView2 rendering system in native apps.  For example, how WebView2 renders output into the host app, how WebView2 handles input, focus, accessibility (applies to C++ only).

# [C#](#tab/c-sharp)

* [CoreWebView2 Class](/dotnet/api/microsoft.web.webview2.core.corewebview2)
   * [NewWindowRequested Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.newwindowrequested)
   * [remove_NewWindowRequested]()

* [CoreWebView2CompositionController Class](/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller)

* [CoreWebView2Controller Class](/dotnet/api/microsoft.web.webview2.core.corewebview2controller)
   * [CoreWebView2 Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.corewebview2)

* [CoreWebView2Environment Class](/dotnet/api/microsoft.web.webview2.core.corewebview2environment)
   * [CreateCoreWebView2ControllerAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createcorewebview2controllerasync)<!--CAUTION: 2 overloads of this method-->
   * [CreateCoreWebView2CompositionControllerAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createcorewebview2compositioncontrollerasync)<!--CAUTION: 2 overloads of this method-->
<!-- 
   * [GetAutomationProviderForWindow Method]()  TODO: no C# link, ok? 
-->


# [C++](#tab/cpp)

* [ICoreWebView2](/microsoft-edge/webview2/reference/win32/icorewebview2)<!-- c# links to "CoreWebView2 Class" -->
   * [add_NewWindowRequested](/microsoft-edge/webview2/reference/win32/icorewebview2#add_newwindowrequested)<!-- c# links to "NewWindowRequested Event" -->
   * [remove_NewWindowRequested](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_newwindowrequested)<!-- c# links to "NewWindowRequested Event" -->

* [ICoreWebView2CompositionController](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller)<!-- c# links to "CoreWebView2CompositionController Class" -->

* [ICoreWebView2Controller](/microsoft-edge/webview2/reference/win32/icorewebview2controller)<!-- c# links to "CoreWebView2Controller Class" --> (Hosting-related settings for WebView) – app or WebView2 elements host WebView <!--TODO - move this comment, avoid text on API items here-->
   * [get_CoreWebView2](/microsoft-edge/webview2/reference/win32/icorewebview2controller#get_corewebview2)<!-- c# links to "CoreWebView2 Property" -->

* [ICoreWebView2Environment](/microsoft-edge/webview2/reference/win32/icorewebview2environment)<!-- c# links to "CoreWebView2Environment Class" -->
   * [CreateCoreWebView2Controller](/microsoft-edge/webview2/reference/win32/icorewebview2environment#createcorewebview2controller)<!-- c# links to "CreateCoreWebView2ControllerAsync Method" -->

* [ICoreWebView2Environment3](/microsoft-edge/webview2/reference/win32/icorewebview2environment3)<!-- c# links to "CoreWebView2Environment Class" -->
   * [CreateCoreWebview2CompositionController](/microsoft-edge/webview2/reference/win32/icorewebview2environment3#createcorewebview2compositioncontroller)<!-- c# links to "CreateCoreWebView2CompositionControllerAsync Method" -->

* [ICoreWebView2Environment4](/microsoft-edge/webview2/reference/win32/icorewebview2environment4)<!-- c# links to n/a -->
   * [GetAutomationProviderForWindow](/microsoft-edge/webview2/reference/win32/icorewebview2environment4#getautomationproviderforwindow)<!-- c# links to n/a -->

---

See also:
<!--* []()-->


<!-- ------------------------------ -->
### WebView2 Properties (UI?)


# [C#](#tab/c-sharp)

* [CoreWebView2BoundsMode Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2boundsmode)

* [CoreWebView2Color Struct](/dotnet/api/microsoft.web.webview2.core.corewebview2color)

* [CoreWebView2Controller Class](/dotnet/api/microsoft.web.webview2.core.corewebview2controller)
   * [Bounds Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.bounds)
   * [BoundsMode Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.boundsmode)
   * [Close Method](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.close)
   * [DefaultBackgroundColor Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.defaultbackgroundcolor)
   * [IsVisible Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.isvisible)
   * [SetBoundsAndZoomFactor Method](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.setboundsandzoomfactor)
   * [ZoomFactor Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.zoomfactor)
   * [ZoomFactorChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.zoomfactorchanged)


# [C++](#tab/cpp)

* [ICoreWebView2](/microsoft-edge/webview2/reference/win32/icorewebview2)<!-- c# links to n/a -->
   * [COREWEBVIEW2_BOUNDS_MODE](/microsoft-edge/webview2/reference/win32/icorewebview2#corewebview2_bounds_mode)<!-- c# links to "CoreWebView2BoundsMode Enum" -->
   * [COREWEBVIEW2_COLOR](/microsoft-edge/webview2/reference/win32/icorewebview2#corewebview2_color)<!-- c# links to "CoreWebView2Color Struct" -->

* [ICoreWebView2Controller](/microsoft-edge/webview2/reference/win32/icorewebview2controller)<!-- c# links to "CoreWebView2Controller Class" -->
   * [add_ZoomFactorChanged](/microsoft-edge/webview2/reference/win32/icorewebview2controller#add_zoomfactorchanged)<!-- c# links to "ZoomFactorChanged Event" -->
   * [Close](/microsoft-edge/webview2/reference/win32/icorewebview2controller#close)<!-- c# links to "Close Method" -->
   * [get_Bounds](/microsoft-edge/webview2/reference/win32/icorewebview2controller#get_bounds)<!-- c# links to "Bounds Property" -->
   * [get_IsVisible](/microsoft-edge/webview2/reference/win32/icorewebview2controller#get_isvisible)<!-- c# links to "IsVisible Property" -->
   * [get_ZoomFactor](/microsoft-edge/webview2/reference/win32/icorewebview2controller#get_zoomfactor)<!-- c# links to "ZoomFactor Property" -->
   * [SetBoundsAndZoomFactor](/microsoft-edge/webview2/reference/win32/icorewebview2controller#setboundsandzoomfactor)<!-- c# links to "SetBoundsAndZoomFactor Method" -->

* [ICoreWebView2Controller2](/microsoft-edge/webview2/reference/win32/icorewebview2controller2)<!-- c# links to "CoreWebView2Controller Class" -->
   * [get_DefaultBackgroundColor](/microsoft-edge/webview2/reference/win32/icorewebview2controller2#get_defaultbackgroundcolor)<!-- c# links to "DefaultBackgroundColor Property" -->
   * [put_DefaultBackgroundColor](/microsoft-edge/webview2/reference/win32/icorewebview2controller2#put_defaultbackgroundcolor)<!-- c# links to "DefaultBackgroundColor Property" -->

* [ICoreWebView2Controller3](/microsoft-edge/webview2/reference/win32/icorewebview2controller3)<!-- c# links to "CoreWebView2Controller Class" -->
   * [get_BoundsMode](/microsoft-edge/webview2/reference/win32/icorewebview2controller3#get_boundsmode)<!-- c# links to "BoundsMode Property" -->

---

See also:
<!--* []()-->


<!-- ====================================================================== -->
## Window management

All tasks related to the management of a window.

# [C#](#tab/c-sharp)

* [CoreWebView2 Class](/dotnet/api/microsoft.web.webview2.core.corewebview2)
   * [WindowCloseRequested Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.windowcloserequested)

* [CoreWebView2MoveFocusReason Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2movefocusreason)

* [CoreWebView2NewWindowRequestedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2newwindowrequestedeventargs)

* [CoreWebView2WindowFeatures Class](/dotnet/api/microsoft.web.webview2.core.corewebview2windowfeatures)

* [CoreWebView2MoveFocusRequestedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2movefocusrequestedeventargs)

* [CoreWebview2Controller Class](/dotnet/api/microsoft.web.webview2.core.corewebview2controller)
   * [BoundsMode Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.boundsmode)
   * [GotFocus Event](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.gotfocus)
   * [LostFocus Event](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.lostfocus)
   * [MoveFocus Method](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.movefocus)
   * [MoveFocusRequested Event](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.movefocusrequested)
   * [NotifyParentWindowPositionChanged Method](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.notifyparentwindowpositionchanged)
   * [ParentWindow Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.parentwindow)
   * [RasterizationScaleChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.rasterizationscalechanged)
   * [ShouldDetectMonitorScaleChanges Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.shoulddetectmonitorscalechanges)


# [C++](#tab/cpp)

* [ICoreWebView2](/microsoft-edge/webview2/reference/win32/icorewebview2)<!-- c# links to "CoreWebView2 Class" -->
   * [add_WindowCloseRequested](/microsoft-edge/webview2/reference/win32/icorewebview2#add_windowcloserequested)<!-- c# links to "WindowCloseRequested Event" -->
   * [remove_WindowCloseRequested](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_windowcloserequested)<!-- c# links to "WindowCloseRequested Event" -->
   * [COREWEBVIEW2_MOVE_FOCUS_REASON](/microsoft-edge/webview2/reference/win32/icorewebview2#corewebview2_move_focus_reason)<!-- c# links to "CoreWebView2MoveFocusReason Enum" -->

* [ICoreWebView2NewWindowRequestedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2newwindowrequestedeventargs)<!-- c# links to "CoreWebView2NewWindowRequestedEventArgs" -->

* [ICoreWebView2WindowFeatures](/microsoft-edge/webview2/reference/win32/icorewebview2windowfeatures)<!-- c# links to "CoreWebView2WindowFeatures Class" -->

* [ICoreWebView2MoveFocusRequestedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2movefocusrequestedeventargs)<!-- c# links to "CoreWebView2MoveFocusRequestedEventArgs Class" -->

* [ICoreWebview2Controller](/microsoft-edge/webview2/reference/win32/icorewebview2controller)<!-- c# links to "CoreWebview2Controller Class" -->
   * [add_GotFocus](/microsoft-edge/webview2/reference/win32/icorewebview2controller#add_gotfocus)<!-- c# links to "GotFocus Event" -->
   * [add_LostFocus](/microsoft-edge/webview2/reference/win32/icorewebview2controller#add_lostfocus)<!-- c# links to "LostFocus Event" -->
   * [add_MoveFocusRequested](/microsoft-edge/webview2/reference/win32/icorewebview2controller#add_movefocusrequested)<!-- c# links to "MoveFocusRequested Event" -->
   * [get_ParentWindow](/microsoft-edge/webview2/reference/win32/icorewebview2controller#get_parentwindow)<!-- c# links to "ParentWindow Property" -->
   * [MoveFocus](/microsoft-edge/webview2/reference/win32/icorewebview2controller#movefocus)<!-- c# links to "MoveFocus Method" -->
   * [NotifyParentWindowPositionChanged](/microsoft-edge/webview2/reference/win32/icorewebview2controller#notifyparentwindowpositionchanged)<!-- c# links to "NotifyParentWindowPositionChanged Method" -->

* [ICoreWebView2Controller3](/microsoft-edge/webview2/reference/win32/icorewebview2controller3)<!-- c# links to "CoreWebview2Controller Class" -->
   * [add_RasterizationScaleChanged](/microsoft-edge/webview2/reference/win32/icorewebview2controller3#add_rasterizationscalechanged)<!-- c# links to "RasterizationScaleChanged Event" -->
   * [get_BoundsMode](/microsoft-edge/webview2/reference/win32/icorewebview2controller3#get_boundsmode)<!-- c# links to "BoundsMode Property" -->
   * [get_ShouldDetectMonitorScaleChanges](/microsoft-edge/webview2/reference/win32/icorewebview2controller3#get_shoulddetectmonitorscalechanges)<!-- c# links to "ShouldDetectMonitorScaleChanges Property" -->
   * [remove_RasterizationScaleChanged](/microsoft-edge/webview2/reference/win32/icorewebview2controller3#remove_rasterizationscalechanged)<!-- c# links to "RasterizationScaleChanged Event" -->

---

See also:
<!--* []()-->


<!-- ====================================================================== -->
## User data

Learn how to work with the user data folder.

# [C#](#tab/c-sharp)

* [CoreWebView2Environment Class](/dotnet/api/microsoft.web.webview2.core.corewebview2environment)
   * [UserDataFolder Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.userdatafolder)


# [C++](#tab/cpp)

* [ICoreWebView2Environment7](/microsoft-edge/webview2/reference/win32/icorewebview2environment7)<!-- c# links to "CoreWebView2Environment Class" -->
   * [get_UserDataFolder](/microsoft-edge/webview2/reference/win32/icorewebview2environment7#get_userdatafolder)<!-- c# links to "UserDataFolder Property" -->

---

See also:
* [Manage user data folders](user-data-folder.md)


<!-- ====================================================================== -->
## Input


<!-- ------------------------------ -->
### Keyboard input

Handling key press events, so that your app has keyboard support.

# [C#](#tab/c-sharp)

* [CoreWebView2AcceleratorKeyPressedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2acceleratorkeypressedeventargs)

* [CoreWebView2Controller Class](/dotnet/api/microsoft.web.webview2.core.corewebview2controller)
   * [AcceleratorKeyPressed Event](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.acceleratorkeypressed)

* [CoreWebView2KeyEventKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2keyeventkind)

* [CoreWebView2MouseEventKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2mouseeventkind)

* [CoreWebView2MouseEventVirtualKeys Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2mouseeventvirtualkeys)

* [CoreWebView2PhysicalKeyStatus Struct](/dotnet/api/microsoft.web.webview2.core.corewebview2physicalkeystatus)

* [CoreWebView2Settings Class](/dotnet/api/microsoft.web.webview2.core.corewebview2settings)
   * [AreBrowserAcceleratorKeysEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.arebrowseracceleratorkeysenabled)


# [C++](#tab/cpp)

* [ICoreWebView2](/microsoft-edge/webview2/reference/win32/icorewebview2)<!-- c# links to n/a -->
   * [COREWEBVIEW2_KEY_EVENT_KIND](/microsoft-edge/webview2/reference/win32/icorewebview2#corewebview2_key_event_kind)<!-- c# links to "CoreWebView2KeyEventKind Enum" -->
   * [COREWEBVIEW2_MOUSE_EVENT_KIND](/microsoft-edge/webview2/reference/win32/icorewebview2#corewebview2_mouse_event_kind)<!-- c# links to "CoreWebView2MouseEventKind Enum" -->
   * [COREWEBVIEW2_MOUSE_EVENT_VIRTUAL_KEYS](/microsoft-edge/webview2/reference/win32/icorewebview2#corewebview2_mouse_event_virtual_keys)<!-- c# links to "CoreWebView2MouseEventVirtualKeys Enum" -->
   * [COREWEBVIEW2_PHYSICAL_KEY_STATUS](/microsoft-edge/webview2/reference/win32/icorewebview2#corewebview2_physical_key_status)<!-- c# links to "CoreWebView2PhysicalKeyStatus Struct" -->

* [ICoreWebView2AcceleratorKeyPressedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2acceleratorkeypressedeventargs)<!-- c# links to "CoreWebView2AcceleratorKeyPressedEventArgs Class" -->

* [ICoreWebView2Controller](/microsoft-edge/webview2/reference/win32/icorewebview2controller)<!-- c# links to "CoreWebView2Controller Class" -->
   * [add_AcceleratorKeyPressed](/microsoft-edge/webview2/reference/win32/icorewebview2controller#add_acceleratorkeypressed)<!-- c# links to "AcceleratorKeyPressed Event" -->
   * [remove_AcceleratorKeyPressed](/microsoft-edge/webview2/reference/win32/icorewebview2controller#remove_acceleratorkeypressed)<!-- c# links to "AcceleratorKeyPressed Event" -->

* [ICoreWebView2Settings3](/microsoft-edge/webview2/reference/win32/icorewebview2settings3)<!-- c# links to "CoreWebView2Settings Class" -->
   * [get_AreBrowserAcceleratorKeysEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings3#get_arebrowseracceleratorkeysenabled)<!-- c# links to "AreBrowserAcceleratorKeysEnabled Property" -->
   * [put_AreBrowserAcceleratorKeysEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings3#put_arebrowseracceleratorkeysenabled)<!-- c# links to "AreBrowserAcceleratorKeysEnabled Property" -->

---

See also:
<!--* []()-->


<!-- ------------------------------ -->
### Mouse input

Learn how to work with the mouse for input on a WebView2 control.


# [C#](#tab/c-sharp)

* [CoreWebView2PointerEventKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2pointereventkind)

* [CoreWebView2PointerInfo Class](/dotnet/api/microsoft.web.webview2.core.corewebview2pointerinfo)

* [CoreWebView2Environment Class](/dotnet/api/microsoft.web.webview2.core.corewebview2environment)
   * [CreateCoreWebView2PointerInfo Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createcorewebview2pointerinfo)


# [C++](#tab/cpp)

* [ICoreWebView2](/microsoft-edge/webview2/reference/win32/icorewebview2)<!-- c# links to n/a -->
   * [COREWEBVIEW2_POINTER_EVENT_KIND](/microsoft-edge/webview2/reference/win32/icorewebview2#corewebview2_pointer_event_kind)<!-- c# links to "CoreWebView2PointerEventKind Enum" -->

* [ICoreWebView2PointerInfo](/microsoft-edge/webview2/reference/win32/icorewebview2pointerinfo)<!-- c# links to "CoreWebView2PointerInfo Class" -->

* [ICoreWebView2Environment3](/microsoft-edge/webview2/reference/win32/icorewebview2environment3)<!-- c# links to "CoreWebView2Environment Class" -->
   * [CreateCoreWebView2PointerInfo](/microsoft-edge/webview2/reference/win32/icorewebview2environment3#createcorewebview2pointerinfo)<!-- c# links to "CreateCoreWebView2PointerInfo Method" -->

---

See also:
<!--* []()-->


<!-- ------------------------------ -->
### Touch input
<!-- TODO: stray heading in link in orig doc? should there be "Keyboard; Mouse; Touch input; Pinch zoom" sections? -->

# [C#](#tab/c-sharp)

* [CoreWebView2Settings Class](/dotnet/api/microsoft.web.webview2.core.corewebview2settings)
   * [IsSwipeNavigationEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.isswipenavigationenabled)


# [C++](#tab/cpp)

* [ICoreWebView2Settings6](/microsoft-edge/webview2/reference/win32/icorewebview2settings6)<!-- c# links to "CoreWebView2Settings Class" -->
   * [get_IsSwipeNavigationEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings6#get_isswipenavigationenabled)<!-- c# links to "IsSwipeNavigationEnabled Property" -->
   * [put_IsSwipeNavigationEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings6#put_isswipenavigationenabled)<!-- c# links to "IsSwipeNavigationEnabled Property" -->

---

See also:
<!--* []()-->


<!-- ------------------------------ -->
### Pinch zoom

Learn how to work with touch input in a WebView2 control.


# [C#](#tab/c-sharp)

* [CoreWebView2Settings Class](/dotnet/api/microsoft.web.webview2.core.corewebview2settings)
   * [IsPinchZoomEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.ispinchzoomenabled)
   * [IsZoomControlEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.iszoomcontrolenabled)


# [C++](#tab/cpp)

* [ICoreWebView2Settings](/microsoft-edge/webview2/reference/win32/icorewebview2settings)<!-- c# links to "CoreWebView2Settings Class" -->
   * [get_IsZoomControlEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings#get_iszoomcontrolenabled)<!-- c# links to "IsZoomControlEnabled Property" -->
   * [put_IsZoomControlEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings#put_iszoomcontrolenabled)<!-- c# links to "IsZoomControlEnabled Property" -->

* [ICoreWebView2Settings5](/microsoft-edge/webview2/reference/win32/icorewebview2settings5)<!-- c# links to "CoreWebView2Settings Class" -->
   * [get_IsPinchZoomEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings5#get_ispinchzoomenabled)<!-- c# links to "IsPinchZoomEnabled Property" -->
   * [put_IsPinchZoomEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings5#put_ispinchzoomenabled)<!-- c# links to "IsPinchZoomEnabled Property" -->

---

See also:
<!--* []()-->


<!-- ====================================================================== -->
## Performance optimizations/tools and debugging

Learn how to handle performance related events for WebView2 controls.


# [C#](#tab/c-sharp)

* [CoreWebView2 Class](/dotnet/api/microsoft.web.webview2.core.corewebview2)
   * [IsSuspended Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.issuspended)
   * [MemoryUsageTargetLevel Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.memoryusagetargetlevel)
   * [Resume Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.resume)
   * [TrySuspendAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.trysuspendasync)
   * [OpenTaskManagerWindow Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.opentaskmanagerwindow)

* [CoreWebView2Controller Class](/dotnet/api/microsoft.web.webview2.core.corewebview2controller)
   * [IsVisible Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.isvisible)

* [CoreWebView2Settings Class](/dotnet/api/microsoft.web.webview2.core.corewebview2settings)
   * [IsBuiltInErrorPageEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.isbuiltinerrorpageenabled#microsoft-web-webview2-core-corewebview2settings-isbuiltinerrorpageenabled) <!--TODO: clarify note: (probs for navigation and process)-->


# [C++](#tab/cpp)

* [ICoreWebView2_3](/microsoft-edge/webview2/reference/win32/icorewebview2_3)<!-- c# links to "CoreWebView2 Class" -->
   * [get_IsSuspended](/microsoft-edge/webview2/reference/win32/icorewebview2_3#get_issuspended)<!-- c# links to "IsSuspended Property" -->
   * [Resume](/microsoft-edge/webview2/reference/win32/icorewebview2_3#resume)<!-- c# links to "Resume Method" -->
   * [TrySuspend](/microsoft-edge/webview2/reference/win32/icorewebview2_3#trysuspend)<!-- c# links to "TrySuspendAsync Method" -->

*  [ICoreWebView2_6](/microsoft-edge/webview2/reference/win32/icorewebview2_6)<!-- c# links to "CoreWebView2 Class" -->
   * [OpenTaskManagerWindow](/microsoft-edge/webview2/reference/win32/icorewebview2_6#opentaskmanagerwindow)<!-- c# links to "OpenTaskManagerWindow Method" -->

* [ICoreWebView2Controller](/microsoft-edge/webview2/reference/win32/icorewebview2controller)<!-- c# links to "CoreWebView2Controller Class" -->
   * [get_IsVisible](/microsoft-edge/webview2/reference/win32/icorewebview2controller#get_isvisible)<!-- c# links to "IsVisible Property" -->
   * [put_IsVisible](/microsoft-edge/webview2/reference/win32/icorewebview2controller#put_isvisible)<!-- c# links to "IsVisible Property" -->

* [ICoreWebView2Experimental5](/microsoft-edge/webview2/reference/win32/icorewebview2experimental5)<!-- c# links to "CoreWebView2 Class" -->
   * [put_MemoryUsageTargetLevel](/microsoft-edge/webview2/reference/win32/icorewebview2experimental5#put_memoryusagetargetlevel)<!-- c# links to "MemoryUsageTargetLevel Property" -->

*  [ICoreWebView2Settings](/microsoft-edge/webview2/reference/win32/icorewebview2settings)<!-- c# links to "CoreWebView2Settings Class" -->
   * [get_IsBuiltInErrorPageEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings#get_isbuiltinerrorpageenabled)<!-- c# links to "IsBuiltInErrorPageEnabled Property" --> <!--TODO: clarify note: (probs for navigation and process)-->

---

See also:
<!--* []()-->


<!-- ====================================================================== -->
## Misc.

<!-- description -->


# [C#](#tab/c-sharp)

* [CoreWebView2 Class](/dotnet/api/microsoft.web.webview2.core.corewebview2)
   * [Settings Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.settings)

* [CoreWebView2Deferral Class](/dotnet/api/microsoft.web.webview2.core.corewebview2deferral)


# [C++](#tab/cpp)

* [ICoreWebView2](/microsoft-edge/webview2/reference/win32/icorewebview2)<!-- c# links to "CoreWebView2 Class" -->
   * [get_Settings](/microsoft-edge/webview2/reference/win32/icorewebview2#get_settings)<!-- c# links to "Settings Property" -->

* [ICoreWebView2Deferral](/microsoft-edge/webview2/reference/win32/icorewebview2deferral)<!-- c# links to "CoreWebView2Deferral Class" -->

* [ICoreWebView2StringCollection](/microsoft-edge/webview2/reference/win32/icorewebview2stringcollection)<!-- c# links to n/a -->
   * [get_Count]()<!-- c# links to n/a -->
   * [GetValueAtIndex]()<!-- c# links to n/a -->

---

See also:
<!--* []()-->


<!-- ====================================================================== -->
## See also

<!--* []()-->
