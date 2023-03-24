---
title: Overview of WebView2 features and APIs
description: Overview of WebView2 features and APIs.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 03/24/2023
---
# Overview of WebView2 features and APIs

Embedding the WebView2 control in your app gives your app access to various methods and properties that are provided through the WebView2 classes or interfaces.  WebView2 has hundreds of APIs that provide a vast set of capabilities, ranging from enhancing your app's native-platform capabilities, to enabling your app to modify browser experiences.  This article provides a high-level grouping of the WebView2 APIs to help you understand the different things you can do using WebView2.

When hosting the WebView2 control, your app has access to the following features and APIs:

| Feature area | Purpose |
|---|---|
| [Main classes: Environment, Controller, and Core](#main-classes-environment-controller-and-core) | The `CoreWebView2Environment`, `CoreWebView2Controller`, and `CoreWebView2` classes (or equivalent interfaces) work together so your app can host a WebView2 browser control and access its browser features.  These large classes expose a wide range of APIs that your host app can access to provide the below categories of browser-related features for your users. |
| [Web/native interop](#webnative-interop) | Embed web content into native applications.  Communicate between native code and web code using simple messages, JavaScript code, and native objects. |
| [Browser features](#browser-features) | The WebView2 control gives your app access to many browser features.  You can modify these browser features and turn them on or off. |
| [Process management](#process-management) | Get information about running WebView2 processes, exiting processes, and failed processes, so your app can take action accordingly. |
| [Navigate to pages and manage loaded content](#navigate-to-pages-and-manage-loaded-content) | Manage navigation to webpages and manage content that's loaded in the webpages. |
| [iframes](#iframes) | Embed other webpages into your own webpage.  Detect when embedded webpages are created, detect when embedded webpages are navigating, and optionally bypass x-frame options. |
| [Authentication](#authentication) | Your app can handle basic authentication using the WebView2 control.  _Basic authentication_ is a specific authentication approach that's part of the HTTP protocol. |
| [Rendering WebView2 in non-framework apps](#rendering-webview2-in-non-framework-apps) | Use these APIs to set up the WebView2 rendering system if your host app doesn't use a UI framework.  This rendering setup controls how WebView2 renders output into your host app, and how WebView2 handles input, focus, and accessibility. |
| [Rendering WebView2 using Composition](#rendering-webview2-using-composition) | For composition-based WebView2 rendering, use `CoreWebView2Environment` to create a `CoreWebView2CompositionController`.  `CoreWebView2CompositionController` provides the same APIs as `CoreWebView2Controller`, but also includes APIs for composition-based rendering. |
| [User data](#user-data) | Manage the user data folder (UDF), which is a folder on the user's machine.  The UDF contains data related to the host app and WebView2.  WebView2 apps use user data folders to store browser data, such as cookies, permissions, and cached resources.  Manage multiple profiles under a single UDF. |
| [Performance and debugging](#performance-and-debugging) | Analyze and debug performance, handle performance-related events, and manage memory usage to increase the responsiveness of your app. |
| [Chrome Developer Protocol (CDP)](#chrome-developer-protocol-cdp) | Instrument, inspect, debug, and profile Chromium-based browsers.  The Chrome DevTools Protocol is the foundation for the Microsoft Edge DevTools.  Use the Chrome DevTools Protocol for features that aren't implemented in the WebView2 platform. |

<!-- todo: add table rows for incoming h2s -->

<!-- ====================================================================== -->
## Main classes: Environment, Controller, and Core

<!-- keep sync'd:
* [Main classes: Environment, Controller, and Core](overview-features-apis.md#main-classes-environment-controller-and-core) in _Overview of WebView2 features and APIs_.
* [Main classes for WebView2: Environment, Controller, and Core](environment-controller-core.md) - topmost content.
-->

The `CoreWebView2Environment`, `CoreWebView2Controller`, and `CoreWebView2` classes (or equivalent interfaces) work together so your app can host a WebView2 browser control and access its browser features.  These three large classes expose a wide range of APIs that your host app can access to provide many categories of browser-related features for your users.

*  The `CoreWebView2Environment` class represents a group of WebView2 controls that share the same WebView2 browser process, user data folder, and renderer processes.  From this `CoreWebView2Environment` class, you create pairs of `CoreWebView2Controller` and `CoreWebView2` instances.
*  The `CoreWebView2Controller` class is responsible for hosting-related functionality such as window focus, visibility, size, and input, where your app hosts the WebView2 control.
*  The `CoreWebView2` class is for the web-specific parts of the WebView2 control, including networking, navigation, script, and parsing and rendering HTML.

<!-- / keep sync'd -->

See also:
* [Main classes for WebView2: Environment, Controller, and Core](environment-controller-core.md)

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2 Class](/dotnet/api/microsoft.web.webview2.core.corewebview2)
* [CoreWebView2Controller Class](/dotnet/api/microsoft.web.webview2.core.corewebview2controller)
* [CoreWebView2Environment Class](/dotnet/api/microsoft.web.webview2.core.corewebview2environment)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2 Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2)
* [CoreWebView2Controller Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller)
* [CoreWebView2Environment Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2](/microsoft-edge/webview2/reference/win32/icorewebview2)
* [ICoreWebView2Controller](/microsoft-edge/webview2/reference/win32/icorewebview2controller)
* [ICoreWebView2Environment](/microsoft-edge/webview2/reference/win32/icorewebview2environment)

---


<!-- ====================================================================== -->
## Web/native interop

The Microsoft Edge WebView2 control lets you embed web content into native applications. You can communicate between native code and web code using simple messages, JavaScript code, and native objects. 

Some common use cases include:
*  Update the native host window title after navigating to a different website.
*  Send a native camera object and use its methods from a web app.
*  Run a dedicated JavaScript file on the web side of an application.

See also:
* [Interop of native-side and web-side code](../how-to/communicate-btwn-web-native.md)
* [Call web-side code from native-side code](../how-to/javascript.md)
* [Call native-side code from web-side code](../how-to/hostobject.md)
* [Call native-side WinRT code from web-side code](../how-to/winrt-from-js.md)
* [JavaScript APIs in WebView2](/microsoft-edge/webview2/reference/javascript/) for `window.chrome.webview` JavaScript APIs

The following are the main APIs for communicating between web and native code.


<!-- ------------------------------ -->
#### Host/web object sharing

WebView2 enables objects that are defined in native code to be passed to your app's web-side code.  _Host objects_ are any objects that are defined in native code that you choose to pass to your app's web-side code.

Host objects can be projected into JavaScript, so that you can call native object methods (or other APIs) from your app's web-side code.  For example, your app can call such APIs as a result of user interaction on the web side of your app. This way, you don't need to reimplement your native objects' APIs, such as methods or properties, in your web-side code.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.AddHostObjectToScript Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.addhostobjecttoscript)
* [CoreWebView2.RemoveHostObjectFromScript Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.removehostobjectfromscript)
* [CoreWebView2Settings.AreHostObjectsAllowed Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.arehostobjectsallowed)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.AddHostObjectToScript Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#addhostobjecttoscript)
* [CoreWebView2.RemoveHostObjectFromScript Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#removehostobjectfromscript)
* [CoreWebView2Settings.AreHostObjectsAllowed Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings#arehostobjectsallowed)
* [CoreWebView2Frame.RemoveHostObjectFromScript Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#removehostobjectfromscript)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2::AddHostObjectToScript method](/microsoft-edge/webview2/reference/win32/icorewebview2#addhostobjecttoscript)
* [ICoreWebView2::RemoveHostObjectFromScript method](/microsoft-edge/webview2/reference/win32/icorewebview2#removehostobjectfromscript)
* [ICoreWebView2Settings::AreHostObjectsAllowed property (get](/microsoft-edge/webview2/reference/win32/icorewebview2settings#get_arehostobjectsallowed), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2settings#put_arehostobjectsallowed)
* [ICoreWebView2Frame::AddHostObjectToScriptWithOrigins method](/microsoft-edge/webview2/reference/win32/icorewebview2frame#addhostobjecttoscriptwithorigins)

---


<!-- ------------------------------ -->
#### Script execution

Allows host app to add JavaScript in the web content within the WebView2 control. 

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.AddScriptToExecuteOnDocumentCreatedAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.addscripttoexecuteondocumentcreatedasync)
* [CoreWebView2.ExecuteScriptAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.executescriptasync)
* [CoreWebView2.RemoveScriptToExecuteOnDocumentCreated Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.removescripttoexecuteondocumentcreated)
* [CoreWebView2Settings.IsScriptEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.isscriptenabled)
* [CoreWebView2Frame.ExecuteScriptAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.executescriptasync)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.AddScriptToExecuteOnDocumentCreatedAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#addscripttoexecuteondocumentcreatedasync)
* [CoreWebView2.ExecuteScriptAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#executescriptasync)
* [CoreWebView2.RemoveScriptToExecuteOnDocumentCreated Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#removescripttoexecuteondocumentcreated)
* [CoreWebView2Settings.IsScriptEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings#isscriptenabled)
* [CoreWebView2Frame.ExecuteScriptAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#executescriptasync)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2::AddScriptToExecuteOnDocumentCreated method](/microsoft-edge/webview2/reference/win32/icorewebview2#addscripttoexecuteondocumentcreated)
* [ICoreWebView2::ExecuteScript method](/microsoft-edge/webview2/reference/win32/icorewebview2#executescript)
* [ICoreWebView2::RemoveScriptToExecuteOnDocumentCreated method](/microsoft-edge/webview2/reference/win32/icorewebview2#removescripttoexecuteondocumentcreated)
* [ICoreWebView2Settings::IsScriptEnabled property (get](/microsoft-edge/webview2/reference/win32/icorewebview2settings#get_isscriptenabled), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2settings#put_isscriptenabled)
* [ICoreWebView2Frame2::ExecuteScript method](/microsoft-edge/webview2/reference/win32/icorewebview2frame2#executescript)

---


<!-- ------------------------------ -->
#### Web messaging

Your app can send messages to the web content that's within the WebView2 control, and receive messages from that web content.  Messages are sent as strings or JSON objects.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.PostWebMessageAsJson Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.postwebmessageasjson)
* [CoreWebView2.PostWebMessageAsString Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.postwebmessageasstring)
* [CoreWebView2.WebMessageReceived Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.webmessagereceived)
   * [CoreWebView2WebMessageReceivedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2webmessagereceivedeventargs)
* [CoreWebView2Settings.IsWebMessageEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.iswebmessageenabled)
* [CoreWebView2Frame.PostWebMessageAsJson Method](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.postwebmessageasjson)
* [CoreWebView2Frame.PostWebMessageAsString Method](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.postwebmessageasstring)
* [CoreWebView2Frame.WebMessageReceived Event](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.webmessagereceived)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.PostWebMessageAsJson Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#postwebmessageasjson)
* [CoreWebView2.PostWebMessageAsString Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#postwebmessageasstring)
* [CoreWebView2.WebMessageReceived Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#webmessagereceived)
   * [CoreWebView2WebMessageReceivedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2webmessagereceivedeventargs)
* [CoreWebView2Settings.IsWebMessageEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings#iswebmessageenabled)
* [CoreWebView2Frame.PostWebMessageAsJson Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#postwebmessageasjson)
* [CoreWebView2Frame.PostWebMessageAsString Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#postwebmessageasstring)
* [CoreWebView2Frame.WebMessageReceived Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#webmessagereceived)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2::PostWebMessageAsJson method](/microsoft-edge/webview2/reference/win32/icorewebview2#postwebmessageasjson)
* [ICoreWebView2::PostWebMessageAsString method](/microsoft-edge/webview2/reference/win32/icorewebview2#postwebmessageasstring)
* [ICoreWebView2::WebMessageReceived event (add](/microsoft-edge/webview2/reference/win32/icorewebview2#add_webmessagereceived), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_webmessagereceived)
   * [ICoreWebView2WebMessageReceivedEventArgs interface](/microsoft-edge/webview2/reference/win32/icorewebview2webmessagereceivedeventargs)
* [ICoreWebView2Settings::IsWebMessageEnabled property (get](/microsoft-edge/webview2/reference/win32/icorewebview2settings#get_iswebmessageenabled), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2settings#put_iswebmessageenabled)
* [ICoreWebView2Frame2::PostWebMessageAsJson method](/microsoft-edge/webview2/reference/win32/icorewebview2frame2#postwebmessageasjson)
* [ICoreWebView2Frame2::PostWebMessageAsString method](/microsoft-edge/webview2/reference/win32/icorewebview2frame2#postwebmessageasstring)
* [ICoreWebView2Frame2::WebMessageReceived event (add](/microsoft-edge/webview2/reference/win32/icorewebview2frame2#add_webmessagereceived), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2frame2#remove_webmessagereceived)

---


<!-- ------------------------------ -->
#### Script dialogs

When hosting WebView2, your app can manage different JavaScript dialogs, to suppress them or to replace them with custom dialogs.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.ScriptDialogOpening Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.scriptdialogopening)
   * [CoreWebView2ScriptDialogOpeningEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2scriptdialogopeningeventargs)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.ScriptDialogOpening Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#scriptdialogopening)
   * [CoreWebView2ScriptDialogOpeningEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2scriptdialogopeningeventargs)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2::ScriptDialogOpening event (add](/microsoft-edge/webview2/reference/win32/icorewebview2#add_scriptdialogopening), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_scriptdialogopening)
   * [ICoreWebView2ScriptDialogOpeningEventArgs interface](/microsoft-edge/webview2/reference/win32/icorewebview2scriptdialogopeningeventargs)

---


<!-- ====================================================================== -->
## Browser features

The WebView2 control gives your app access to many browser features.  You can modify these browser features and turn them on or off.


<!-- ------------------------------ -->
#### Printing

You can print a webpage to a printer, PDF file, or PDF stream by configuring custom print settings.

See also:
* [Printing from WebView2 apps](../how-to/print.md)

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.ShowPrintUI Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.showprintui#microsoft-web-webview2-core-corewebview2-showprintui)
* [CoreWebView2.PrintAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.printasync#microsoft-web-webview2-core-corewebview2-printasync)
* [CoreWebView2.PrintToPdfAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.printtopdfasync)
* [CoreWebView2.PrintToPdfStreamAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.printtopdfstreamasync#microsoft-web-webview2-core-corewebview2-printtopdfstreamasync)
* [CoreWebView2Environment.CreatePrintSettings Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createprintsettings)
* [CoreWebView2PrintSettings Class](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings)
* [CoreWebView2PrintDialogKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2printdialogkind)
* [CoreWebView2PrintStatus Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2printstatus)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.ShowPrintUI Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#showprintui)
* [CoreWebView2.PrintAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#printasync)
* [CoreWebView2.PrintToPdfAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#printtopdfasync)
* [CoreWebView2.PrintToPdfStreamAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#printtopdfstreamasync)
* [CoreWebView2Environment.CreatePrintSettings Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#createprintsettings)
* [CoreWebView2PrintSettings Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings)
* [CoreWebView2PrintDialogKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printdialogkind)
* [CoreWebView2PrintStatus Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printstatus)


##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_16::ShowPrintUI method](/microsoft-edge/webview2/reference/win32/icorewebview2_16#showprintui)
* [ICoreWebView2_16::Print method](/microsoft-edge/webview2/reference/win32/icorewebview2_16#print)
* [ICoreWebView2_7::PrintToPdf method](/microsoft-edge/webview2/reference/win32/icorewebview2_7#printtopdf)
* [ICoreWebView2_16::PrintToPdfStream method](/microsoft-edge/webview2/reference/win32/icorewebview2_16#printtopdfstream)
* [ICoreWebView2Environment6::CreatePrintSettings method](/microsoft-edge/webview2/reference/win32/icorewebview2environment6#createprintsettings)
* [ICoreWebView2PrintSettings interface](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings)
* [ICoreWebView2PrintSettings2 interface](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2)
* [COREWEBVIEW2_PRINT_DIALOG_KIND enum](/microsoft-edge/webview2/reference/win32/icorewebview2_16#corewebview2_print_dialog_kind)
* [COREWEBVIEW2_PRINT_STATUS enum](/microsoft-edge/webview2/reference/win32/icorewebview2_16#corewebview2_print_status)
* [ICoreWebView2PrintCompletedHandler interface](/microsoft-edge/webview2/reference/win32/icorewebview2printcompletedhandler)
* [ICoreWebView2PrintToPdfCompletedHandler interface](/microsoft-edge/webview2/reference/win32/icorewebview2printtopdfcompletedhandler)
* [ICoreWebView2PrintToPdfStreamCompletedHandler interface](/microsoft-edge/webview2/reference/win32/icorewebview2printtopdfstreamcompletedhandler)

---


<!-- ------------------------------ -->
#### Cookies

You can use cookies in WebView2 to manage user sessions, store user personalization preferences, and track user behavior.

See also:
* [View, edit, and delete cookies](/microsoft-edge/devtools-guide-chromium/storage/cookies)

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Cookie Class](/dotnet/api/microsoft.web.webview2.core.corewebview2cookie)
* [CoreWebView2CookieList Class](/dotnet/api/microsoft.web.webview2.core.corewebview2cookielist)
* [CoreWebView2.CookieManager Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.cookiemanager#microsoft-web-webview2-core-corewebview2-cookiemanager)
   * [CoreWebView2CookieManager Class](/dotnet/api/microsoft.web.webview2.core.corewebview2cookiemanager)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Cookie Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2cookie)
* [CoreWebView2.CookieManager Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#cookiemanager)
   * [CoreWebView2CookieManager Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2cookiemanager)

<!-- TODO: not found, omit?
* [CoreWebView2CookieList Class]()
GetCookies returns Vector of CoreWebView2Cookie:
https://learn.microsoft.com/en-us/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2cookiemanager#getcookiesasync
-->

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Cookie interface](/microsoft-edge/webview2/reference/win32/icorewebview2cookie)
* [ICoreWebView2CookieList interface](/microsoft-edge/webview2/reference/win32/icorewebview2cookielist)
* [ICoreWebView2_2.CookieManager property (get)](/microsoft-edge/webview2/reference/win32/icorewebview2_2#get_cookiemanager)
   * [ICoreWebView2CookieManager interface](/microsoft-edge/webview2/reference/win32/icorewebview2cookiemanager)

---


<!-- ------------------------------ -->
#### Image capture

By hosting WebView2, your app can capture screenshots and indicate which format to use to save the image.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.CapturePreviewAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.capturepreviewasync)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.CapturePreviewAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#capturepreviewasync)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2.CapturePreview method](/microsoft-edge/webview2/reference/win32/icorewebview2#capturepreview)

---


<!-- ------------------------------ -->
#### Downloads

Your app can manage the download experience in WebView2.  Your app can:
*  Allow or block downloads based on different metadata.
*  Change the download location.
*  Configure a custom download UI.
*  Customize the default UI.

##### [.NET/C#](#tab/dotnetcsharp)

General:
* [CoreWebView2.IsDefaultDownloadDialogOpenChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.isdefaultdownloaddialogopenchanged)
* [CoreWebView2.IsDefaultDownloadDialogOpen Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.isdefaultdownloaddialogopen)
* [CoreWebView2.OpenDefaultDownloadDialog Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.opendefaultdownloaddialog)
* [CoreWebView2.CloseDefaultDownloadDialog Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.closedefaultdownloaddialog)

Modify Default Experience:
* [CoreWebView2.DefaultDownloadDialogCornerAlignment Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.defaultdownloaddialogcorneralignment)
* [CoreWebView2.DefaultDownloadDialogMargin Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.defaultdownloaddialogmargin)
* [CoreWebView2Profile.DefaultDownloadFolderPath Property](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.defaultdownloadfolderpath)

Custom Download Experience:
* [CoreWebView2.DownloadStarting Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.downloadstarting)
   * [CoreWebView2DownloadStartingEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2downloadstartingeventargs)
* [CoreWebView2DownloadOperation Class](/dotnet/api/microsoft.web.webview2.core.corewebview2downloadoperation)

##### [WinRT/C#](#tab/winrtcsharp)

General:
* [CoreWebView2.IsDefaultDownloadDialogOpenChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#isdefaultdownloaddialogopenchanged)
* [CoreWebView2.IsDefaultDownloadDialogOpen Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#isdefaultdownloaddialogopen)
* [CoreWebView2.OpenDefaultDownloadDialog Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#opendefaultdownloaddialog)
* [CoreWebView2.CloseDefaultDownloadDialog Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#closedefaultdownloaddialog)

Modify Default Experience:
* [CoreWebView2.DefaultDownloadDialogCornerAlignment Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#defaultdownloaddialogcorneralignment)
* [CoreWebView2.DefaultDownloadDialogMargin Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#defaultdownloaddialogmargin)
* [CoreWebView2Profile.DefaultDownloadFolderPath Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile#defaultdownloadfolderpath)

Custom Download Experience:
* [CoreWebView2.DownloadStarting Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#downloadstarting)
   * [CoreWebView2DownloadStartingEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2downloadstartingeventargs)
* [CoreWebView2DownloadOperation Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2downloadoperation)

##### [Win32/C++](#tab/win32cpp)

General:
* [ICoreWebView2_9::IsDefaultDownloadDialogOpen property (get)](/microsoft-edge/webview2/reference/win32/icorewebview2_9#get_isdefaultdownloaddialogopen)<!--no put-->
* [ICoreWebView2_9::OpenDefaultDownloadDialog method](/microsoft-edge/webview2/reference/win32/icorewebview2_9#opendefaultdownloaddialog)
* [ICoreWebView2_9::IsDefaultDownloadDialogOpenChanged event (add](/microsoft-edge/webview2/reference/win32/icorewebview2_9#add_isdefaultdownloaddialogopenchanged), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2_9#remove_isdefaultdownloaddialogopenchanged)
* [ICoreWebView2_9::CloseDefaultDownloadDialog method](/microsoft-edge/webview2/reference/win32/icorewebview2_9#closedefaultdownloaddialog)

Modify Default Experience:
* [ICoreWebView2_9::DefaultDownloadDialogCornerAlignment property (get](/microsoft-edge/webview2/reference/win32/icorewebview2_9#get_defaultdownloaddialogcorneralignment), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2_9#put_defaultdownloaddialogcorneralignment)
* [ICoreWebView2_9::DefaultDownloadDialogMargin property (get](/microsoft-edge/webview2/reference/win32/icorewebview2_9#get_defaultdownloaddialogmargin), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2_9#put_defaultdownloaddialogmargin)
* [ICoreWebView2Profile::DefaultDownloadFolderPath property (get](/microsoft-edge/webview2/reference/win32/icorewebview2profile#get_defaultdownloadfolderpath), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2profile#put_defaultdownloadfolderpath)

Custom Download Experience:
* [ICoreWebView2_4::DownloadStarting event (add](/microsoft-edge/webview2/reference/win32/icorewebview2_4#add_downloadstarting), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2_4#remove_downloadstarting)
   * [ICoreWebView2DownloadStartingEventArgs interface](/microsoft-edge/webview2/reference/win32/icorewebview2downloadstartingeventargs)
* [ICoreWebView2DownloadOperation interface](/microsoft-edge/webview2/reference/win32/icorewebview2downloadoperation)

---


<!-- ------------------------------ -->
#### Permissions

Different webpages may ask you for permissions to access some privileged resources, such as geolocation sensor, camera, and microphone.  Your host app can programmatically respond to permissions requests and can replace the default permissions UI with its own UI.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.PermissionRequested Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.permissionrequested)
   * [CoreWebView2PermissionRequestedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionrequestedeventargs)
* [CoreWebView2Frame.PermissionRequested Event](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.permissionrequested)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.PermissionRequested Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#permissionrequested)
   * [CoreWebView2PermissionRequestedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionrequestedeventargs)
* [CoreWebView2Frame.PermissionRequested Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#permissionrequested)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2::PermissionRequested event (add](/microsoft-edge/webview2/reference/win32/icorewebview2#add_permissionrequested), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_permissionrequested)
   * [ICoreWebView2PermissionRequestedEventArgs interface](/microsoft-edge/webview2/reference/win32/icorewebview2permissionrequestedeventargs)
* [ICoreWebView2Frame3::PermissionRequested event (add](/microsoft-edge/webview2/reference/win32/icorewebview2frame3#add_permissionrequested), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2frame3#remove_permissionrequested)

---


<!-- ------------------------------ -->
#### Context menus

The WebView2 control provides a default context menu (right-click menu) which you can customize or disable, and you can also create your own context menu. 

See also:
* [Customize context menus in WebView2](../how-to/context-menus.md)

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Environment.CreateContextMenuItem Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createcontextmenuitem)
* [CoreWebView2ContextMenuItem Class](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenuitem)
* [CoreWebView2ContextMenuTarget Class](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenutarget)
* [CoreWebView2.ContextMenuRequested Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.contextmenurequested)
   * [CoreWebView2ContextMenuRequestedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenurequestedeventargs)
* [CoreWebView2Settings.AreDefaultContextMenusEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.aredefaultcontextmenusenabled)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Environment.CreateContextMenuItem Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#createcontextmenuitem)
* [CoreWebView2ContextMenuItem Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2contextmenuitem)
* [CoreWebView2ContextMenuTarget Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2contextmenutarget)
* [CoreWebView2.ContextMenuRequested Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#contextmenurequested)
   * [CoreWebView2ContextMenuRequestedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2contextmenurequestedeventargs)
* [CoreWebView2Settings.AreDefaultContextMenusEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings#aredefaultcontextmenusenabled)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Environment9::CreateContextMenuItem method](/microsoft-edge/webview2/reference/win32/icorewebview2environment9#createcontextmenuitem)
* [ICoreWebView2ContextMenuItem interface](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenuitem)
   * [ICoreWebView2ContextMenuItemCollection interface](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenuitemcollection)
* [ICoreWebView2ContextMenuTarget interface](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenutarget)
* [ICoreWebView2_11::ContextMenuRequested event (add](/microsoft-edge/webview2/reference/win32/icorewebview2_11#add_contextmenurequested), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2_11#remove_contextmenurequested)
   * [ICoreWebView2ContextMenuRequestedEventArgs interface](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenurequestedeventargs)
* [ICoreWebView2Settings::AreDefaultContextMenusEnabled property (get](/microsoft-edge/webview2/reference/win32/icorewebview2settings#get_aredefaultcontextmenusenabled), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2settings#put_aredefaultcontextmenusenabled)

---


<!-- ------------------------------ -->
#### Status bar

A status bar is located in the bottom left of the page and displays the state of the webpage being displayed. In WebView2 you can enable/disable the status bar, get the text in the status bar, and find out when the status bar text has changed. 

<!--
See also:
-->

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.StatusBarTextChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.statusbartextchanged)
* [CoreWebView2.StatusBarText Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.statusbartext)
* [CoreWebView2Settings.IsStatusBarEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.isstatusbarenabled)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.StatusBarTextChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#statusbartextchanged)
* [CoreWebView2.StatusBarText Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#statusbartext)
* [CoreWebView2Settings.IsStatusBarEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings#isstatusbarenabled)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_12::StatusBarTextChanged event (add](/microsoft-edge/webview2/reference/win32/icorewebview2_12#add_statusbartextchanged), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2_12#remove_statusbartextchanged)
* [ICoreWebView2_12::StatusBarText property (get)](/microsoft-edge/webview2/reference/win32/icorewebview2_12#get_statusbartext)
* [ICoreWebView2Settings::IsStatusBarEnabled property (get](/microsoft-edge/webview2/reference/win32/icorewebview2settings#get_isstatusbarenabled), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2settings#put_isstatusbarenabled)

---


<!-- ------------------------------ -->
#### User Agent
<!-- alt for "Learn how to" -->
<!-- why would you do this, what is benefit for end user, what's involved?  Your app can detect which XYZ and then ABC so that the X is Y. -->
The user agent is a string that represents the identity of the program on behalf of the user, such as the browser name. In WebView2, you can set the user agent.

See also:
* [Detect Windows 11 using User-Agent Client Hints](../../web-platform/how-to-detect-win11.md)
* [Override the user agent string](../../devtools-guide-chromium/device-mode/override-user-agent.md)


##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Settings.UserAgent Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.useragent)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Settings.UserAgent Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings#useragent)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Settings2::UserAgent property (get](/microsoft-edge/webview2/reference/win32/icorewebview2settings2#get_useragent), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2settings2#put_useragent)

---


<!-- ------------------------------ -->
#### Autofill

Your app can independently control whether the browser's autofill functionality is enabled for general information or for passwords.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Settings.IsGeneralAutofillEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.isgeneralautofillenabled)
* [CoreWebView2Settings.IsPasswordAutosaveEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.ispasswordautosaveenabled)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Settings.IsGeneralAutofillEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings#isgeneralautofillenabled)
* [CoreWebView2Settings.IsPasswordAutosaveEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings#ispasswordautosaveenabled)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Settings4::IsGeneralAutofillEnabled property (get](/microsoft-edge/webview2/reference/win32/icorewebview2settings4#get_isgeneralautofillenabled), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2settings4#put_isgeneralautofillenabled)
* [ICoreWebView2Settings4::IsPasswordAutosaveEnabled property (get](/microsoft-edge/webview2/reference/win32/icorewebview2settings4#get_ispasswordautosaveenabled), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2settings4#put_ispasswordautosaveenabled)

---


<!-- ------------------------------ -->
#### Audio

Your app can mute and unmute all audio, and find out when audio is playing.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.IsDocumentPlayingAudioChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.isdocumentplayingaudiochanged)
* [CoreWebView2.IsMutedChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.ismutedchanged)
* [CoreWebView2.IsDocumentPlayingAudio Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.isdocumentplayingaudio)
* [CoreWebView2.IsMuted Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.ismuted)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.IsDocumentPlayingAudioChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#isdocumentplayingaudiochanged)
* [CoreWebView2.IsMutedChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#ismutedchanged)
* [CoreWebView2.IsDocumentPlayingAudio Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#isdocumentplayingaudio)
* [CoreWebView2.IsMuted Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#ismuted)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_8::IsDocumentPlayingAudioChanged event (add](/microsoft-edge/webview2/reference/win32/icorewebview2_8#add_isdocumentplayingaudiochanged), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2_8#remove_isdocumentplayingaudiochanged)
* [ICoreWebView2_8::IsMutedChanged event (add](/microsoft-edge/webview2/reference/win32/icorewebview2_8#add_ismutedchanged), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2_8#remove_ismutedchanged)
* [ICoreWebView2_8::IsDocumentPlayingAudio property (get)](/microsoft-edge/webview2/reference/win32/icorewebview2_8#get_isdocumentplayingaudio)
* [ICoreWebView2_8::IsMuted property (get](/microsoft-edge/webview2/reference/win32/icorewebview2_8#get_ismuted), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2_8#put_ismuted)

---


<!-- ------------------------------ -->
#### Swipe gesture navigation

By hosting the WebView2 control, your app can enable or disable swiping gesture navigation on touch input-enabled devices. This gesture allows end users to:
*  Swipe left/right (swipe horizontally) to navigate to the previous or next page in the navigation history.
*  Pull to refresh (swipe vertically) the current page.

This feature is currently disabled by default in the browser.  To enable this feature in WebView2, set the `AdditionalBrowserArguments` property, specifying the `--pull-to-refresh` switch.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Settings.IsSwipeNavigationEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.isswipenavigationenabled)
* [CoreWebView2EnvironmentOptions.AdditionalBrowserArguments Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.additionalbrowserarguments)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Settings.IsSwipeNavigationEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings#isswipenavigationenabled)
* [CoreWebView2EnvironmentOptions.AdditionalBrowserArguments Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions#additionalbrowserarguments)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Settings6::IsSwipeNavigationEnabled property (get](/microsoft-edge/webview2/reference/win32/icorewebview2settings6#get_isswipenavigationenabled), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2settings6#put_isswipenavigationenabled)
* [ICoreWebView2EnvironmentOptions::AdditionalBrowserArguments property (get](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions#get_additionalbrowserarguments), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions#put_additionalbrowserarguments)

---

<!-- ------------------------------ -->
#### Fullscreen

In WebView2, you can find out when an HTML element enters or leaves full-screen view.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.ContainsFullScreenElement Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.containsfullscreenelement)
* [CoreWebView2.ContainsFullScreenElementChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.containsfullscreenelementchanged)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.ContainsFullScreenElement Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#containsfullscreenelement)
* [CoreWebView2.ContainsFullScreenElementChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#containsfullscreenelementchanged)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2::ContainsFullScreenElement property (get)](/microsoft-edge/webview2/reference/win32/icorewebview2#get_containsfullscreenelement)<!--no put-->
* [ICoreWebView2::ContainsFullScreenElementChanged event (add](/microsoft-edge/webview2/reference/win32/icorewebview2#add_containsfullscreenelementchanged), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_containsfullscreenelementchanged)

---

<!-- ------------------------------ -->
#### PDF toolbar

In the browser PDF viewer, there's a PDF-specific toolbar along the top.  In WebView2, you can hide some of the items in the PDF viewer toolbar.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Settings.HiddenPdfToolbarItems Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.hiddenpdftoolbaritems)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Settings.HiddenPdfToolbarItems Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings#hiddenpdftoolbaritems)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Settings7::HiddenPdfToolbarItems property (get](/microsoft-edge/webview2/reference/win32/icorewebview2settings7#get_hiddenpdftoolbaritems), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2settings7#put_hiddenpdftoolbaritems)

---

<!-- ------------------------------ -->
#### Theming

In WebView2, you can customize the color theme as system, light, or dark.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Profile.PreferredColorScheme Property](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.preferredcolorscheme)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Profile.PreferredColorScheme Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile#preferredcolorscheme)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Profile::PreferredColorScheme property (get](/microsoft-edge/webview2/reference/win32/icorewebview2profile#get_preferredcolorscheme), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2profile#put_preferredcolorscheme)

---

<!-- ------------------------------ -->
#### Language

You can set the default display language for WebView2 that applies to the browser UI (such as context menus and dialogs), along with setting the `accept-language` HTTP header which WebView2 sends to websites.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2EnvironmentOptions.Language Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.language)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2EnvironmentOptions.Language Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions#language)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2EnvironmentOptions::Language property (get](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions#get_language), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions#put_language)

---

<!-- ------------------------------ -->
#### New window

WebView2 provides functionality to handle the JavaScript function `window.open()`.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.NewWindowRequested Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.newwindowrequested)
   * [CoreWebView2NewWindowRequestedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2newwindowrequestedeventargs)
   * [CoreWebView2WindowFeatures Class](/dotnet/api/microsoft.web.webview2.core.corewebview2windowfeatures)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.NewWindowRequested Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#newwindowrequested)
   * [CoreWebView2NewWindowRequestedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2newwindowrequestedeventargs)
   * [CoreWebView2WindowFeatures Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2windowfeatures)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2::NewWindowRequested event (add](/microsoft-edge/webview2/reference/win32/icorewebview2#add_newwindowrequested), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_newwindowrequested)
   * [ICoreWebView2NewWindowRequestedEventArgs interface](/microsoft-edge/webview2/reference/win32/icorewebview2newwindowrequestedeventargs)
   * [ICoreWebView2WindowFeatures interface](/microsoft-edge/webview2/reference/win32/icorewebview2windowfeatures)

---

<!-- ------------------------------ -->
#### Close window

WebView2 provides functionality to handle the JavaScript function `window.close()`.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Controller.Close Method](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.close)
* [CoreWebView2.WindowCloseRequested Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.windowcloserequested)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Controller.Close Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#close)
* [CoreWebView2.WindowCloseRequested Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#windowcloserequested)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Controller::Close method](/microsoft-edge/webview2/reference/win32/icorewebview2controller#close)
* [ICoreWebView2::WindowCloseRequested event (add](/microsoft-edge/webview2/reference/win32/icorewebview2#add_windowcloserequested), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_windowcloserequested)

---

<!-- ------------------------------ -->
#### Document title

Your app can detect when the title of the current top-level document has changed.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.DocumentTitle Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.documenttitle)
* [CoreWebView2.DocumentTitleChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.documenttitlechanged)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.DocumentTitle Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#documenttitle)
* [CoreWebView2.DocumentTitleChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#documenttitlechanged)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2::DocumentTitle property (get)](/microsoft-edge/webview2/reference/win32/icorewebview2#get_documenttitle)<!--no put-->
* [ICoreWebView2::DocumentTitleChanged event (add](/microsoft-edge/webview2/reference/win32/icorewebview2#add_documenttitlechanged), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_documenttitlechanged)

---

<!-- ------------------------------ -->
#### Favicon 

In WebView2 you can you can set a [Favicon](https://developer.mozilla.org/docs/Glossary/Favicon) for a website or get notified when it changes. 

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.FaviconChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.faviconchanged)
* [CoreWebView2.FaviconUri Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.faviconuri)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.FaviconChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#faviconchanged)
* [CoreWebView2.FaviconUri Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#faviconuri)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_15::FaviconChanged event (add](/microsoft-edge/webview2/reference/win32/icorewebview2_15#add_faviconchanged), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2_15#remove_faviconchanged)
* [ICoreWebView2_15::FaviconUri property (get)](/microsoft-edge/webview2/reference/win32/icorewebview2_15#get_faviconuri)<!--no put-->

----

<!-- ====================================================================== -->
## Process management

Get information about running WebView2 processes, exiting processes, and failed processes, so that your app can take action accordingly.

##### [.NET/C#](#tab/dotnetcsharp)

Info:
* [CoreWebView2.BrowserProcessId Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.browserprocessid)
* [CoreWebView2Environment.GetProcessInfos Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.getprocessinfos)
* [CoreWebView2Environment.ProcessInfosChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.processinfoschanged)
* [CoreWebView2ProcessInfo Class](/dotnet/api/microsoft.web.webview2.core.corewebview2processinfo)

Exited:
* [CoreWebView2Environment.BrowserProcessExited Event](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.browserprocessexited)
   * [CoreWebView2BrowserProcessExitedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2browserprocessexitedeventargs)

Failed:
* [CoreWebView2.ProcessFailed Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.processfailed)
   * [CoreWebView2ProcessFailedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2processfailedeventargs)

##### [WinRT/C#](#tab/winrtcsharp)

Info:
* [CoreWebView2.BrowserProcessId Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#browserprocessid)
* [CoreWebView2Environment.GetProcessInfos Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#getprocessinfos)
* [CoreWebView2Environment.ProcessInfosChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#processinfoschanged)
* [CoreWebView2ProcessInfo Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2processinfo)

Exited:
* [CoreWebView2Environment.BrowserProcessExited Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#browserprocessexited)
   * [CoreWebView2BrowserProcessExitedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2browserprocessexitedeventargs)

Failed:
* [CoreWebView2.ProcessFailed Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#processfailed)
   * [CoreWebView2ProcessFailedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2processfailedeventargs)

##### [Win32/C++](#tab/win32cpp)

Info:
* [ICoreWebView2::BrowserProcessId property (get)](/microsoft-edge/webview2/reference/win32/icorewebview2#get_browserprocessid)<!--no put-->
* [ICoreWebView2Environment8::GetProcessInfos method](/microsoft-edge/webview2/reference/win32/icorewebview2environment8#getprocessinfos)
* [ICoreWebView2Environment8::ProcessInfosChanged event (add](/microsoft-edge/webview2/reference/win32/icorewebview2environment8#add_processinfoschanged), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2environment8#remove_processinfoschanged)
* [ICoreWebView2ProcessInfo interface](/microsoft-edge/webview2/reference/win32/icorewebview2processinfo)
* [ICoreWebView2ProcessInfoCollection interface](/microsoft-edge/webview2/reference/win32/icorewebview2processinfocollection)

Exited:
* [ICoreWebView2Environment5::BrowserProcessExited event (add](/microsoft-edge/webview2/reference/win32/icorewebview2environment5#add_browserprocessexited), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2environment5#remove_browserprocessexited)
   * [ICoreWebView2BrowserProcessExitedEventArgs interface](/microsoft-edge/webview2/reference/win32/icorewebview2browserprocessexitedeventargs)

Failed:
* [ICoreWebView2::ProcessFailed event (add](/microsoft-edge/webview2/reference/win32/icorewebview2#add_processfailed), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_processfailed)
   * [ICoreWebView2ProcessFailedEventArgs interface](/microsoft-edge/webview2/reference/win32/icorewebview2processfailedeventargs)

---


<!-- ====================================================================== -->
## Navigate to pages and manage loaded content

Through the WebView2 control, your app can manage navigation to webpages and manage content that's loaded in the webpages.


<!-- ------------------------------ -->
#### Manage content loaded into WebView2

These APIs load, stop loading, and reload content to WebView2.  The content that's loaded can be:
*  Content from a URL.
*  A string of HTML.
*  Local content via virtual host name to local folder mapping.
*  Content from a constructed network request.

See also:
* [Working with local content in WebView2 apps](./working-with-local-content.md)

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.Navigate Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.navigate)
* [CoreWebView2.NavigateToString Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.navigatetostring)
* [CoreWebView2.NavigateWithWebResourceRequest Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.navigatewithwebresourcerequest)
* [CoreWebView2.Stop Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.stop)
* [CoreWebView2.Reload Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.reload)
* [CoreWebView2.SetVirtualHostNameToFolderMapping Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.setvirtualhostnametofoldermapping)
* [CoreWebView2.ClearVirtualHostNameToFolderMapping Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.clearvirtualhostnametofoldermapping)
* [CoreWebView2.WebResourceRequested Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.webresourcerequested)
* [CoreWebView2Settings.IsBuiltInErrorPageEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.isbuiltinerrorpageenabled#microsoft-web-webview2-core-corewebview2settings-isbuiltinerrorpageenabled)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.Navigate Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#navigate)
* [CoreWebView2.NavigateToString Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#navigatetostring)
* [CoreWebView2.NavigateWithWebResourceRequest Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#navigatewithwebresourcerequest)
* [CoreWebView2.Stop Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#stop)
* [CoreWebView2.Reload Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#reload)
* [CoreWebView2.SetVirtualHostNameToFolderMapping Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#setvirtualhostnametofoldermapping)
* [CoreWebView2.ClearVirtualHostNameToFolderMapping Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#clearvirtualhostnametofoldermapping)
* [CoreWebView2.WebResourceRequested Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#webresourcerequested)
* [CoreWebView2Settings.IsBuiltInErrorPageEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings#isbuiltinerrorpageenabled)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2::Navigate method](/microsoft-edge/webview2/reference/win32/icorewebview2#navigate)
* [ICoreWebView2::NavigateToString method](/microsoft-edge/webview2/reference/win32/icorewebview2#navigatetostring)
* [ICoreWebView2_2::NavigateWithWebResourceRequest method](/microsoft-edge/webview2/reference/win32/icorewebview2_2#navigatewithwebresourcerequest)
* [ICoreWebView2::Stop method](/microsoft-edge/webview2/reference/win32/icorewebview2#stop)
* [ICoreWebView2::Reload method](/microsoft-edge/webview2/reference/win32/icorewebview2#reload)
* [ICoreWebView2_3::SetVirtualHostNameToFolderMapping method](/microsoft-edge/webview2/reference/win32/icorewebview2_3#setvirtualhostnametofoldermapping)
* [ICoreWebView2_3::ClearVirtualHostNameToFolderMapping method](/microsoft-edge/webview2/reference/win32/icorewebview2_3#clearvirtualhostnametofoldermapping)
* [ICoreWebView2::WebResourceRequested event (add](/microsoft-edge/webview2/reference/win32/icorewebview2#add_webresourcerequested), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_webresourcerequested)
* [ICoreWebView2Settings::IsBuiltInErrorPageEnabled property (get](/microsoft-edge/webview2/reference/win32/icorewebview2settings#get_isbuiltinerrorpageenabled), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2settings#put_isbuiltinerrorpageenabled)

---


<!-- ------------------------------ -->
#### Navigation history

The history methods allow back and forward navigation in WebView2, and the history events provide information about the changes in history and in WebView2's current source.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.Source Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.source)
* [CoreWebView2.SourceChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.sourcechanged)
   * [CoreWebView2SourceChangedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2sourcechangedeventargs)
* [CoreWebView2.HistoryChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.historychanged)
* [CoreWebView2.CanGoBack Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.cangoback)
   * [CoreWebView2.GoBack Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.goback)
* [CoreWebView2.CanGoForward Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.cangoforward)
   * [CoreWebView2.GoForward Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.goforward)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.Source Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#source)
* [CoreWebView2.SourceChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#sourcechanged)
   * [CoreWebView2SourceChangedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sourcechangedeventargs)
* [CoreWebView2.HistoryChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#historychanged)
* [CoreWebView2.CanGoBack Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#cangoback)
   * [CoreWebView2.GoBack Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#goback)
* [CoreWebView2.CanGoForward Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#cangoforward)
   * [CoreWebView2.GoForward Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#goforward)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2::Source property (get)](/microsoft-edge/webview2/reference/win32/icorewebview2#get_source)<!--no put-->
* [ICoreWebView2::SourceChanged event (add](/microsoft-edge/webview2/reference/win32/icorewebview2#add_sourcechanged), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_sourcechanged)
   * [ICoreWebView2SourceChangedEventArgs interface](/microsoft-edge/webview2/reference/win32/icorewebview2sourcechangedeventargs)
* [ICoreWebView2::HistoryChanged event (add](/microsoft-edge/webview2/reference/win32/icorewebview2#add_historychanged), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_historychanged)
* [ICoreWebView2::CanGoBack property (get)](/microsoft-edge/webview2/reference/win32/icorewebview2#get_cangoback)<!--no put-->
   * [ICoreWebView2::GoBack method](/microsoft-edge/webview2/reference/win32/icorewebview2#goback)
* [ICoreWebView2::CanGoForward property (get)](/microsoft-edge/webview2/reference/win32/icorewebview2#get_cangoforward)<!--no put-->
   * [ICoreWebView2::GoForward method](/microsoft-edge/webview2/reference/win32/icorewebview2#goforward)

---


<!-- ------------------------------ -->
#### Block unwanted navigating

The `NavigationStarting` event allows the app to cancel navigating to specified URLs in WebView2, including for frames.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.NavigationStarting Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.navigationstarting)
   * [CoreWebView2NavigationStartingEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2navigationstartingeventargs)
* [CoreWebView2Frame.NavigationStarting Event](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.navigationstarting)
   * [CoreWebView2NavigationStartingEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2navigationstartingeventargs)

Superseded:
* [CoreWebView2.FrameNavigationStarting Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.framenavigationstarting)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.NavigationStarting Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#navigationstarting)
   * [CoreWebView2NavigationStartingEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2navigationstartingeventargs)
* [CoreWebView2Frame.NavigationStarting Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#navigationstarting)
   * [CoreWebView2NavigationStartingEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2navigationstartingeventargs)

Superseded:
* [CoreWebView2.FrameNavigationStarting Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#framenavigationstarting)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2::NavigationStarting event (add](/microsoft-edge/webview2/reference/win32/icorewebview2#add_navigationstarting), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_navigationstarting)
   * [ICoreWebView2NavigationStartingEventArgs2 interface](/microsoft-edge/webview2/reference/win32/icorewebview2navigationstartingeventargs2)<!--v2-->
* [ICoreWebView2Frame2::NavigationStarting event (add](/microsoft-edge/webview2/reference/win32/icorewebview2frame2#add_navigationstarting), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2frame2#remove_navigationstarting)
   * [ICoreWebView2NavigationStartingEventArgs2 interface](/microsoft-edge/webview2/reference/win32/icorewebview2navigationstartingeventargs2)<!--v2-->

Superseded:
* [ICoreWebView2::FrameNavigationStarting event (add](/microsoft-edge/webview2/reference/win32/icorewebview2#add_framenavigationstarting), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_framenavigationstarting)

---


<!-- ------------------------------ -->
#### Navigation events

With `NavigationStarting` and the other navigation events, the app can be informed of the state of navigation in WebView2.  A _navigation_ is the process for loading a new URL.

See also:
* [Navigation events for WebView2 apps](navigation-events.md)

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.ContentLoading Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.contentloading)
   * [CoreWebView2ContentLoadingEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2contentloadingeventargs)
* [CoreWebView2.DOMContentLoaded Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.domcontentloaded)
   * [CoreWebView2DOMContentLoadedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2domcontentloadedeventargs)
* [CoreWebView2.NavigationCompleted Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.navigationcompleted)
   * [CoreWebView2NavigationCompletedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2navigationcompletedeventargs)
* [CoreWebView2.FrameNavigationCompleted Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.framenavigationcompleted)
* [CoreWebView2Frame.ContentLoading Event](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.contentloading)
* [CoreWebView2Frame.DOMContentLoaded Event](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.domcontentloaded)
* [CoreWebView2Frame.NavigationCompleted Event](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.navigationcompleted)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.ContentLoading Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#contentloading)
   * [CoreWebView2ContentLoadingEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2contentloadingeventargs)
* [CoreWebView2.DOMContentLoaded Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#domcontentloaded)
   * [CoreWebView2DOMContentLoadedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2domcontentloadedeventargs)
* [CoreWebView2.NavigationCompleted Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#navigationcompleted)
   * [CoreWebView2NavigationCompletedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2navigationcompletedeventargs)
* [CoreWebView2.FrameNavigationCompleted Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#framenavigationcompleted)
* [CoreWebView2Frame.ContentLoading Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#contentloading)
* [CoreWebView2Frame.DOMContentLoaded Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#domcontentloaded)
* [CoreWebView2Frame.NavigationCompleted Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#navigationcompleted)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2::ContentLoading event (add](/microsoft-edge/webview2/reference/win32/icorewebview2#add_contentloading), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_contentloading)
   * [ICoreWebView2ContentLoadingEventArgs interface](/microsoft-edge/webview2/reference/win32/icorewebview2contentloadingeventargs)
* [ICoreWebView2_2::DOMContentLoaded event (add](/microsoft-edge/webview2/reference/win32/icorewebview2_2#add_domcontentloaded), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2_2#remove_domcontentloaded)
   * [ICoreWebView2DOMContentLoadedEventArgs interface](/microsoft-edge/webview2/reference/win32/icorewebview2domcontentloadedeventargs)
* [ICoreWebView2::NavigationCompleted event (add](/microsoft-edge/webview2/reference/win32/icorewebview2#add_navigationcompleted), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_navigationcompleted)
   * [ICoreWebView2NavigationCompletedEventArgs interface](/microsoft-edge/webview2/reference/win32/icorewebview2navigationcompletedeventargs)
   * [ICoreWebView2NavigationCompletedEventArgs2 interface](/microsoft-edge/webview2/reference/win32/icorewebview2navigationcompletedeventargs2)
* [ICoreWebView2::FrameNavigationCompleted event (add](/microsoft-edge/webview2/reference/win32/icorewebview2#add_framenavigationcompleted), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_framenavigationcompleted)
* [ICoreWebView2Frame2::ContentLoading event (add](/microsoft-edge/webview2/reference/win32/icorewebview2frame2#add_contentloading), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2frame2#remove_contentloading)
* [ICoreWebView2Frame2::DOMContentLoaded event (add](/microsoft-edge/webview2/reference/win32/icorewebview2frame2#add_domcontentloaded), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2frame2#remove_domcontentloaded)
* [ICoreWebView2Frame2::NavigationCompleted event (add](/microsoft-edge/webview2/reference/win32/icorewebview2frame2#add_navigationcompleted), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2frame2#remove_navigationcompleted)

---


<!-- ------------------------------ -->
#### Manage network requests in WebView2

The `WebResourceRequested` event allows the app to intercept and override all network requests in WebView2.  The `WebResourceResponseReceived` event allows the app to monitor the request sent to and the response received from the network.

See also:
* [Custom management of network requests](/microsoft-edge/webview2/how-to/webresourcerequested)

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.WebResourceRequested Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.webresourcerequested)
   * [CoreWebView2WebResourceRequestedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2webresourcerequestedeventargs)
* [CoreWebView2.WebResourceResponseReceived Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.webresourceresponsereceived)
   * [CoreWebView2WebResourceResponseReceivedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2webresourceresponsereceivedeventargs)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.WebResourceRequested Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#webresourcerequested)
   * [CoreWebView2WebResourceRequestedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2webresourcerequestedeventargs)
* [CoreWebView2.WebResourceResponseReceived Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#webresourceresponsereceived)
   * [CoreWebView2WebResourceResponseReceivedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2webresourceresponsereceivedeventargs)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2::WebResourceRequested event (add](/microsoft-edge/webview2/reference/win32/icorewebview2#add_webresourcerequested), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_webresourcerequested)
   * [ICoreWebView2WebResourceRequestedEventArgs interface](/microsoft-edge/webview2/reference/win32/icorewebview2webresourcerequestedeventargs)
* [ICoreWebView2_2::WebResourceResponseReceived event (add](/microsoft-edge/webview2/reference/win32/icorewebview2_2#add_webresourceresponsereceived), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2_2#remove_webresourceresponsereceived)
   * [ICoreWebView2WebResourceResponseReceivedEventArgs interface](/microsoft-edge/webview2/reference/win32/icorewebview2webresourceresponsereceivedeventargs)


---


<!-- ------------------------------ -->
#### Custom scheme registration

The `CustomSchemeRegistration` allows registration of custom schemes in WebView2 so that the app can handle the `WebResourceRequested` event for requests to those custom scheme URLs and navigate the WebView2 to such URLs.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2CustomSchemeRegistration Class](/dotnet/api/microsoft.web.webview2.core.corewebview2customschemeregistration)
* [CoreWebView2EnvironmentOptions Class](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions)
   * [CoreWebView2EnvironmentOptions.CustomSchemeRegistrations Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.customschemeregistrations)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2CustomSchemeRegistration Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2customschemeregistration)
* [CoreWebView2EnvironmentOptions Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2CustomSchemeRegistration interface](/microsoft-edge/webview2/reference/win32/icorewebview2customschemeregistration)
* [ICoreWebView2EnvironmentOptions4 interface](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions4)
   * [ICoreWebView2EnvironmentOptions4::GetCustomSchemeRegistrations method](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions4#getcustomschemeregistrations)
   * [ICoreWebView2EnvironmentOptions4::SetCustomSchemeRegistrations method](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions4#setcustomschemeregistrations)
   
---


<!-- ------------------------------ -->
#### Client certificates

In WebView2, you can use the Client Certificate API to select the client certificate at the application level.  This API allows you to:
*  Display a UI to the user, if desired.
*  Replace the default client certificate dialog prompt.
*  Programmatically query the certificates.
*  Select a certificate from the list to respond to the server, when WebView2 is making a request to an HTTP server that needs a client certificate for HTTP authentication. 

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2ClientCertificate Class](/dotnet/api/microsoft.web.webview2.core.corewebview2clientcertificate)
* [CoreWebView2.ClientCertificateRequested Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.clientcertificaterequested)
   * [CoreWebView2ClientCertificateRequestedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2clientcertificaterequestedeventargs)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2ClientCertificate Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2clientcertificate)
* [CoreWebView2.ClientCertificateRequested Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#clientcertificaterequested)
   * [CoreWebView2ClientCertificateRequestedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2clientcertificaterequestedeventargs)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ClientCertificate interface](/microsoft-edge/webview2/reference/win32/icorewebview2clientcertificate)
   * [ICoreWebView2ClientCertificateCollection interface](/microsoft-edge/webview2/reference/win32/icorewebview2clientcertificatecollection)<!--n/a for c#-->
* [ICoreWebView2_5::ClientCertificateRequested event (add](/microsoft-edge/webview2/reference/win32/icorewebview2_5#add_clientcertificaterequested), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2_5#remove_clientcertificaterequested)
   * [ICoreWebView2ClientCertificateRequestedEventArgs interface](/microsoft-edge/webview2/reference/win32/icorewebview2clientcertificaterequestedeventargs)

---

<!-- ------------------------------ -->
#### Server certificates

In WebView2, you can use the Server Certificate API to trust the server's TLS certificate at the application level.  This way, your host app can render the page without prompting the user about the TLS error, or your host app can automatically cancel the request. 

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.ServerCertificateErrorDetected Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.servercertificateerrordetected)
* [CoreWebView2.ClearServerCertificateErrorActionsAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.clearservercertificateerroractionsasync)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.ServerCertificateErrorDetected Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#servercertificateerrordetected)
* [CoreWebView2.ClearServerCertificateErrorActionsAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#clearservercertificateerroractionsasync)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_14::ServerCertificateErrorDetected event (add](/microsoft-edge/webview2/reference/win32/icorewebview2_14#add_servercertificateerrordetected), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2_14#remove_servercertificateerrordetected)
* [ICoreWebView2_14::ClearServerCertificateErrorActions method](/microsoft-edge/webview2/reference/win32/icorewebview2_14#clearservercertificateerroractions)

---


<!-- ====================================================================== -->
## iframes

iframes allow you to embed other webpages into your own webpage.  In WebView2, you can:
*  Find out when iframes are created.
*  Find out when iframes are navigating.
*  Allow bypassing x-frame options.

<!-- wording per overview table:
Embed other webpages into your own webpage.  Detect when embedded webpages are created, detect when embedded webpages are navigating, and optionally bypass x-frame options. -->

See also:
* [Host/web object sharing](#hostweb-object-sharing), in this article.
* [Using frames in WebView2 apps](./frames.md).

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Frame Class](/dotnet/api/microsoft.web.webview2.core.corewebview2frame)
* [CoreWebView2FrameInfo Class](/dotnet/api/microsoft.web.webview2.core.corewebview2frameinfo)
* [CoreWebView2.FrameCreated Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.framecreated)
   * [CoreWebView2FrameCreatedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2framecreatedeventargs)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Frame Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame)
* [CoreWebView2FrameInfo Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frameinfo)
* [CoreWebView2.FrameCreated Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#framecreated)
   * [CoreWebView2FrameCreatedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2framecreatedeventargs)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Frame interface](/microsoft-edge/webview2/reference/win32/icorewebview2frame)
* [ICoreWebView2FrameInfo interface](/microsoft-edge/webview2/reference/win32/icorewebview2frameinfo)
   * [ICoreWebView2FrameInfoCollection interface](/microsoft-edge/webview2/reference/win32/icorewebview2frameinfocollection)<!--n/a for c#-->
   * [ICoreWebView2FrameInfoCollectionIterator interface](/microsoft-edge/webview2/reference/win32/icorewebview2frameinfocollectioniterator)<!--n/a for c#-->
* [ICoreWebView2_4::FrameCreated event (add](/microsoft-edge/webview2/reference/win32/icorewebview2_4#add_framecreated), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2_4#remove_framecreated)
   * [ICoreWebView2FrameCreatedEventArgs interface](/microsoft-edge/webview2/reference/win32/icorewebview2framecreatedeventargs)

---


<!-- ====================================================================== -->
## Authentication

<!-- selling point / value prop: easy configuration of WebView2 apps - support user accounts -->

Your app can handle basic authentication using the WebView2 control.  _Basic authentication_ is a specific authentication approach that's part of the HTTP protocol.

<!-- what's the benefit for end users?  how does it essentially work? what's involved? -->

See also:
* [Basic authentication for WebView2 apps](basic-authentication.md)

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2HttpRequestHeaders Class](/dotnet/api/microsoft.web.webview2.core.corewebview2httprequestheaders)
* [CoreWebView2.BasicAuthenticationRequested Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.basicauthenticationrequested)
   * [CoreWebView2BasicAuthenticationRequestedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2basicauthenticationrequestedeventargs)
* [CoreWebView2BasicAuthenticationResponse Class](/dotnet/api/microsoft.web.webview2.core.corewebview2basicauthenticationresponse)
   * [CoreWebView2HttpResponseHeaders Class](/dotnet/api/microsoft.web.webview2.core.corewebview2httpresponseheaders)
* [CoreWebView2HttpHeadersCollectionIterator Class](/dotnet/api/microsoft.web.webview2.core.corewebview2httpheaderscollectioniterator)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2HttpRequestHeaders Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2httprequestheaders)
* [CoreWebView2.BasicAuthenticationRequested Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#basicauthenticationrequested)
   * [CoreWebView2BasicAuthenticationRequestedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2basicauthenticationrequestedeventargs)
* [CoreWebView2BasicAuthenticationResponse Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2basicauthenticationresponse)
   * [CoreWebView2HttpResponseHeaders Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2httpresponseheaders)
* [CoreWebView2HttpHeadersCollectionIterator Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2httpheaderscollectioniterator)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2HttpRequestHeaders interface](/microsoft-edge/webview2/reference/win32/icorewebview2httprequestheaders)
* [ICoreWebView2_10::BasicAuthenticationRequested event (add](/microsoft-edge/webview2/reference/win32/icorewebview2_10#add_basicauthenticationrequested), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2_10#remove_basicauthenticationrequested)
   * [ICoreWebView2BasicAuthenticationRequestedEventArgs interface](/microsoft-edge/webview2/reference/win32/icorewebview2basicauthenticationrequestedeventargs)
* [ICoreWebView2BasicAuthenticationResponse interface](/microsoft-edge/webview2/reference/win32/icorewebview2basicauthenticationresponse)
   * [ICoreWebView2HttpResponseHeaders interface](/microsoft-edge/webview2/reference/win32/icorewebview2httpresponseheaders)
* [ICoreWebView2HttpHeadersCollectionIterator interface](/microsoft-edge/webview2/reference/win32/icorewebview2httpheaderscollectioniterator)

---


<!-- ====================================================================== -->
## Rendering WebView2 in non-framework apps

Use these APIs to set up the WebView2 rendering system if your host app doesn't use a UI framework.  This rendering setup controls how WebView2 renders output into your host app, and how WebView2 handles input, focus, and accessibility.

* **UI framework** - If you're using a UI framework for your app, you should use the WebView2 element that's provided by that UI framework, rather than using these APIs.

* **No UI framework, and not using Composition** - If you're not using a UI framework for your app (for example, if you're using pure Win32 directly), or if your UI framework doesn't have a WebView2 element, then you need to create `CoreWebView2Controller` and render it into your app, using these APIs in this section.

* **No UI framework, and using Composition** - If your app UI is built using [DirectComposition](/windows/win32/directcomp/directcomposition-portal) or [Windows.UI.Composition](/uwp/api/Windows.UI.Composition), you should use `CoreWebView2CompositionController` rather than using these APIs; see [Rendering WebView2 using Composition](#rendering-webview2-using-composition), below.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Controller.CoreWebView2 Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.corewebview2)
* [CoreWebView2Controller.Close Method](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.close)
* [CoreWebView2Environment.CreateCoreWebView2ControllerAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createcorewebview2controllerasync)<!--2 overloads-->

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Controller.CoreWebView2 Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#corewebview2)
* [CoreWebView2Controller.Close Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#close)
* [CoreWebView2Environment.CreateCoreWebView2ControllerAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#createcorewebview2controllerasync)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Controller::CoreWebView2 property (get)](/microsoft-edge/webview2/reference/win32/icorewebview2controller#get_corewebview2)<!--no put-->
* [ICoreWebView2Controller::Close method](/microsoft-edge/webview2/reference/win32/icorewebview2controller#close)
* [ICoreWebView2Environment::CreateCoreWebView2Controller method](/microsoft-edge/webview2/reference/win32/icorewebview2environment#createcorewebview2controller)

---


<!-- ------------------------------ -->
#### Sizing, positioning, and visibility

<!-- from the removed "window mgmt" h2 section:
WebView2 gives your app access to window-specific attributes, such as positioning, focus, and keyboard accelerators. -->

`CoreWebView2Controller` takes a parent `HWND`. The `Bounds` property sizes and positions the WebView2 relative to the parent `HWND`. The visibility of WebView2 can be toggled using `IsVisible`.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Controller.Bounds Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.bounds)
* [CoreWebView2Controller.IsVisible Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.isvisible)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Controller.Bounds Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#bounds)
* [CoreWebView2Controller.IsVisible Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#isvisible)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Controller::Bounds property (get](/microsoft-edge/webview2/reference/win32/icorewebview2controller#get_bounds), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2controller#put_bounds)
* [ICoreWebView2Controller::IsVisible property (get](/microsoft-edge/webview2/reference/win32/icorewebview2controller#get_isvisible), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2controller#put_isvisible)

---


<!-- ------------------------------ -->
#### Zooming

WebView2 `ZoomFactor` is used to scale just the web content of the window.  UI scaling is also updated when the user zooms the content by pressing `Ctrl` while rotating the mouse wheel.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Controller.ZoomFactor Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.zoomfactor)
* [CoreWebView2Controller.ZoomFactorChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.zoomfactorchanged)
* [CoreWebView2Controller.SetBoundsAndZoomFactor Method](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.setboundsandzoomfactor)

Browser/gesture/zoom features:<!-- moved from Rendering section - fits best in "gestures", or "zoom" list? -->
* [CoreWebView2Settings.IsPinchZoomEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.ispinchzoomenabled)
* [CoreWebView2Settings.IsZoomControlEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.iszoomcontrolenabled)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Controller.ZoomFactor Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#zoomfactor)
* [CoreWebView2Controller.ZoomFactorChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#zoomfactorchanged)
* [CoreWebView2Controller.SetBoundsAndZoomFactor Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#setboundsandzoomfactor)

Browser/gesture/zoom features:
* [CoreWebView2Settings.IsPinchZoomEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings#ispinchzoomenabled)
* [CoreWebView2Settings.IsZoomControlEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings#iszoomcontrolenabled)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Controller::ZoomFactor property (get](/microsoft-edge/webview2/reference/win32/icorewebview2controller#get_zoomfactor), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2controller#put_zoomfactor)
* [ICoreWebView2Controller::ZoomFactorChanged event (add](/microsoft-edge/webview2/reference/win32/icorewebview2controller#add_zoomfactorchanged), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2controller#remove_zoomfactorchanged)
* [ICoreWebView2Controller::SetBoundsAndZoomFactor method](/microsoft-edge/webview2/reference/win32/icorewebview2controller#setboundsandzoomfactor)

Browser/gesture/zoom features:
* [ICoreWebView2Settings5::IsPinchZoomEnabled property (get](/microsoft-edge/webview2/reference/win32/icorewebview2settings5#get_ispinchzoomenabled), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2settings5#put_ispinchzoomenabled)
* [ICoreWebView2Settings::IsZoomControlEnabled property (get](/microsoft-edge/webview2/reference/win32/icorewebview2settings#get_iszoomcontrolenabled), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2settings#put_iszoomcontrolenabled)

---


<!-- ------------------------------ -->
#### Rasterization scale

The RasterizationScale API scales all WebView2 UI including context menus, tooltip, and popups.  The app can set whether the WebView2 should detect monitor scale changes and automatically update the RasterizationScale.  `BoundsMode` is used to configure whether the Bounds property is interpreted as raw pixels, or DIPs (which need to be scaled by `RasterizationScale`).

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Controller.BoundsMode Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.boundsmode)
* [CoreWebView2Controller.RasterizationScale Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.rasterizationscale)
* [CoreWebview2Controller.RasterizationScaleChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.rasterizationscalechanged)
* [CoreWebview2Controller.ShouldDetectMonitorScaleChanges Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.shoulddetectmonitorscalechanges)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Controller.BoundsMode Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#boundsmode)
* [CoreWebView2Controller.RasterizationScale Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#rasterizationscale)
* [CoreWebview2Controller.RasterizationScaleChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#rasterizationscalechanged)
* [CoreWebview2Controller.ShouldDetectMonitorScaleChanges Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#shoulddetectmonitorscalechanges)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Controller3::BoundsMode property (get](/microsoft-edge/webview2/reference/win32/icorewebview2controller3#get_boundsmode), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2controller3#put_boundsmode)
* [ICoreWebView2Controller3::RasterizationScale property (get](/microsoft-edge/webview2/reference/win32/icorewebview2controller3#get_rasterizationscale), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2controller3#put_rasterizationscale)
* [ICoreWebView2Controller3::RasterizationScaleChanged event (add](/microsoft-edge/webview2/reference/win32/icorewebview2controller3#add_rasterizationscalechanged), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2controller3#remove_rasterizationscalechanged)
* [ICoreWebView2Controller3::ShouldDetectMonitorScaleChanges property (get](/microsoft-edge/webview2/reference/win32/icorewebview2controller3#get_shoulddetectmonitorscalechanges), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2controller3#put_shoulddetectmonitorscalechanges)

---


<!-- ------------------------------ -->
#### Focus and tabbing

The WebView2 control raises events to let the app know when the control gains focus or loses focus. For tabbing (pressing the `Tab` key), there's an API to move focus into WebView2 and an event for WebView2 to request the app to take focus back.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebview2Controller.MoveFocus Method](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.movefocus)
* [CoreWebview2Controller.MoveFocusRequested Event](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.movefocusrequested)
   * [CoreWebView2MoveFocusRequestedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2movefocusrequestedeventargs)
* [CoreWebview2Controller.GotFocus Event](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.gotfocus)
* [CoreWebview2Controller.LostFocus Event](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.lostfocus)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebview2Controller.MoveFocus Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#movefocus)
* [CoreWebview2Controller.MoveFocusRequested Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#movefocusrequested)
   * [CoreWebView2MoveFocusRequestedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2movefocusrequestedeventargs)
* [CoreWebview2Controller.GotFocus Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#gotfocus)
* [CoreWebview2Controller.LostFocus Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#lostfocus)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebview2Controller::MoveFocus method](/microsoft-edge/webview2/reference/win32/icorewebview2controller#movefocus)
* [ICoreWebview2Controller::MoveFocusRequested event (add](/microsoft-edge/webview2/reference/win32/icorewebview2controller#add_movefocusrequested), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2controller#remove_movefocusrequested)
   * [ICoreWebView2MoveFocusRequestedEventArgs interface](/microsoft-edge/webview2/reference/win32/icorewebview2movefocusrequestedeventargs)
* [ICoreWebview2Controller::GotFocus event (add](/microsoft-edge/webview2/reference/win32/icorewebview2controller#add_gotfocus), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2controller#remove_gotfocus)
* [ICoreWebview2Controller::LostFocus event (add](/microsoft-edge/webview2/reference/win32/icorewebview2controller#add_lostfocus), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2controller#remove_lostfocus)

---


<!-- ------------------------------ -->
#### Parent window

WebView2 can be reparented to a different parent window handle (`HWND`).  WebView2 also needs to be notified when the app's position on the screen has changed.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebview2Controller.NotifyParentWindowPositionChanged Method](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.notifyparentwindowpositionchanged)
   * [CoreWebview2Controller.ParentWindow Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.parentwindow)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebview2Controller.NotifyParentWindowPositionChanged Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#notifyparentwindowpositionchanged)
   * [CoreWebview2Controller.ParentWindow Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#parentwindow)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebview2Controller::NotifyParentWindowPositionChanged method](/microsoft-edge/webview2/reference/win32/icorewebview2controller#notifyparentwindowpositionchanged)
   * [ICoreWebview2Controller::ParentWindow property (get](/microsoft-edge/webview2/reference/win32/icorewebview2controller#get_parentwindow), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2controller#put_parentwindow)

---


<!-- ------------------------------ -->
#### Keyboard accelerators

When WebView2 has focus, it directly receives input from the user. An app may want to intercept and handle certain accelerator key combinations, or disable the normal browser accelerator key behaviors.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Settings.AreBrowserAcceleratorKeysEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.arebrowseracceleratorkeysenabled)
* [CoreWebView2Controller.AcceleratorKeyPressed Event](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.acceleratorkeypressed)
   * [CoreWebView2AcceleratorKeyPressedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2acceleratorkeypressedeventargs)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Settings.AreBrowserAcceleratorKeysEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings#arebrowseracceleratorkeysenabled)
* [CoreWebView2Controller.AcceleratorKeyPressed Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#acceleratorkeypressed)
   * [CoreWebView2AcceleratorKeyPressedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2acceleratorkeypressedeventargs)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Settings3::AreBrowserAcceleratorKeysEnabled property (get](/microsoft-edge/webview2/reference/win32/icorewebview2settings3#get_arebrowseracceleratorkeysenabled), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2settings3#put_arebrowseracceleratorkeysenabled)
* [ICoreWebView2Controller::AcceleratorKeyPressed event (add](/microsoft-edge/webview2/reference/win32/icorewebview2controller#add_acceleratorkeypressed), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2controller#remove_acceleratorkeypressed)
   * [ICoreWebView2AcceleratorKeyPressedEventArgs interface](/microsoft-edge/webview2/reference/win32/icorewebview2acceleratorkeypressedeventargs)

---


<!-- ------------------------------ -->
#### Default background color

WebView2 can specify a default background color.  The color can be any opaque color, or transparent.  This color will be used if the HTML page doesn't set its own background color.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Controller.DefaultBackgroundColor Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.defaultbackgroundcolor)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Controller.DefaultBackgroundColor Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#defaultbackgroundcolor)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Controller2::DefaultBackgroundColor property (get](/microsoft-edge/webview2/reference/win32/icorewebview2controller2#get_defaultbackgroundcolor), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2controller2#put_defaultbackgroundcolor)

---


<!-- ====================================================================== -->
## Rendering WebView2 using Composition

For composition-based WebView2 rendering, use `CoreWebView2Environment` to create a `CoreWebView2CompositionController`.  `CoreWebView2CompositionController` provides the same APIs as `CoreWebView2Controller`, but also includes APIs for composition-based rendering.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2CompositionController Class](/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller)
* [CoreWebView2Environment.CreateCoreWebView2CompositionControllerAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createcorewebview2compositioncontrollerasync)<!--2 overloads-->

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2CompositionController Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2compositioncontroller)
* [CoreWebView2Environment.CreateCoreWebView2CompositionControllerAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#createcorewebview2compositioncontrollerasync)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2CompositionController interface](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller)
* [ICoreWebView2Environment3::CreateCoreWebview2CompositionController method](/microsoft-edge/webview2/reference/win32/icorewebview2environment3#createcorewebview2compositioncontroller)

---


<!-- ------------------------------ -->
#### Connecting to the visual tree

WebView2 can connect its composition tree to an [IDCompositionVisual](/windows/win32/api/dcomp/nn-dcomp-idcompositionvisual), [IDCompositionTarget](/windows/win32/api/dcomp/nn-dcomp-idcompositiontarget), or `Windows::UI::Composition::ContainerVisual`.<!--link these?  both plats?  not linked in wv2 api ref.  these are c++ not .net links -->

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2CompositionController.RootVisualTarget Property](/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.rootvisualtarget)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2CompositionController.RootVisualTarget Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2compositioncontroller#rootvisualtarget)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2CompositionController::RootVisualTarget property (get](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller#get_rootvisualtarget), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller#put_rootvisualtarget)

---

<!-- ------------------------------ -->
#### Forwarding input

Spatial input (mouse, touch, pen) is received by the application and must be sent to WebView2.  WebView2 notifies the app when the cursor should be updated based on the mouse position.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2CompositionController.Cursor Property](/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.cursor)
* [CoreWebView2CompositionController.CursorChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.cursorchanged)
* [CoreWebView2CompositionController.SystemCursorId Property](/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.systemcursorid)
* [CoreWebView2CompositionController.SendMouseInput Method](/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.sendmouseinput)
* [CoreWebView2CompositionController.SendPointerInput Method](/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.sendpointerinput)
* [CoreWebView2Environment.CreateCoreWebView2PointerInfo Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createcorewebview2pointerinfo)
   * [CoreWebView2PointerInfo Class](/dotnet/api/microsoft.web.webview2.core.corewebview2pointerinfo)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2CompositionController.Cursor Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2compositioncontroller#cursor)
* [CoreWebView2CompositionController.CursorChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2compositioncontroller#cursorchanged)
* [CoreWebView2CompositionController.SendMouseInput Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2compositioncontroller#sendmouseinput)
* [CoreWebView2CompositionController.SendPointerInput Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2compositioncontroller#sendpointerinput)
* [CoreWebView2Environment.CreateCoreWebView2PointerInfo Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#createcorewebview2pointerinfo)
   * [CoreWebView2PointerInfo Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2pointerinfo)

<!--TODO - not found, omit?
* `CoreWebView2CompositionController.SystemCursorId` Property
-->

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2CompositionController::Cursor property (get)](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller#get_cursor)<!--no put-->
* [ICoreWebView2CompositionController::CursorChanged event (add](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller#add_cursorchanged), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller#remove_cursorchanged)
* [ICoreWebView2CompositionController::SystemCursorId property (get)](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller#get_systemcursorid)<!--no put-->
* [ICoreWebView2CompositionController::SendMouseInput method](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller#sendmouseinput)
* [ICoreWebView2CompositionController::SendPointerInput method](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller#sendpointerinput)
* [ICoreWebView2Environment3::CreateCoreWebView2PointerInfo method](/microsoft-edge/webview2/reference/win32/icorewebview2environment3#createcorewebview2pointerinfo)
   * [ICoreWebView2PointerInfo interface](/microsoft-edge/webview2/reference/win32/icorewebview2pointerinfo)

---


<!-- ------------------------------ -->
#### Drag and drop

Dragging from a WebView2 control to another application is supported by default. However, dragging _to_ a WebView2 control requires that when the host app receives an `IDropTarget` event from the system, the host app must forward the event to the WebView2 control.  Dragging to a WebView2 control includes drag-and-drop operations that are entirely within a WebView2 control.

Use the following APIs to forward `IDropTarget` events from the system to the WebView2 control.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2CompositionController.DragLeave Method](/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.dragleave)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2CompositionController.DragLeave Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2compositioncontroller#dragleave)
* [ICoreWebView2CompositionControllerInterop2.DragEnter Method](/microsoft-edge/webview2/reference/winrt/interop/icorewebview2compositioncontrollerinterop2#dragenter)
* [ICoreWebView2CompositionControllerInterop2.DragLeave Method](/microsoft-edge/webview2/reference/winrt/interop/icorewebview2compositioncontrollerinterop2#dragleave)
* [ICoreWebView2CompositionControllerInterop2.DragOver Method](/microsoft-edge/webview2/reference/winrt/interop/icorewebview2compositioncontrollerinterop2#dragover)
* [ICoreWebView2CompositionControllerInterop2.Drop Method](/microsoft-edge/webview2/reference/winrt/interop/icorewebview2compositioncontrollerinterop2#drop)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2CompositionController3::DragEnter method](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller3#dragenter)
* [ICoreWebView2CompositionController3::DragLeave method](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller3#dragleave)
* [ICoreWebView2CompositionController3::DragOver method](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller3#dragover)
* [ICoreWebView2CompositionController3::Drop method](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller3#drop)

---

<!-- ------------------------------ -->
#### Accessibility

By default, WebView2 will show up in the accessibility tree as a child of the parent HWND, for Win32/C++ apps.  WebView2 provides API to better position the WebView2 content relative to other elements in the application.

##### [.NET/C#](#tab/dotnetcsharp)

Not applicable.

##### [WinRT/C#](#tab/winrtcsharp)

Not applicable.

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2CompositionController2::AutomationProvider property (get)](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller2#get_automationprovider)<!--no put-->
* [ICoreWebView2Environment4::GetAutomationProviderForWindow method](/microsoft-edge/webview2/reference/win32/icorewebview2environment4#getautomationproviderforwindow)<!--not in c#-->

---

<!-- ====================================================================== -->
## User data

Manage the user data folder (UDF), which is a folder on the user's machine.  The UDF contains data related to the host app and WebView2.  WebView2 apps use user data folders to store browser data, such as cookies, permissions, and cached resources.

See also:
* [Manage user data folders](user-data-folder.md)

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Environment.UserDataFolder Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.userdatafolder)
* [CoreWebView2EnvironmentOptions.ExclusiveUserDataFolderAccess Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.exclusiveuserdatafolderaccess)
* [CoreWebView2Profile.ClearBrowsingDataAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.clearbrowsingdataasync)
* [CoreWebView2Environment.CreateCoreWebView2CompositionControllerAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createcorewebview2compositioncontrollerasync)
* [CoreWebView2Environment.CreateCoreWebView2ControllerOptions Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createcorewebview2controlleroptions)
* [CoreWebView2Environment.CreateCoreWebView2ControllerWithOptions Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createcorewebview2controllerasync)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Environment.UserDataFolder Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#userdatafolder)
* [CoreWebView2EnvironmentOptions.ExclusiveUserDataFolderAccess Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions#exclusiveuserdatafolderaccess)
* [CoreWebView2Profile.ClearBrowsingDataAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile#clearbrowsingdataasync)
* [CoreWebView2Environment.CreateCoreWebView2CompositionControllerAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#createcorewebview2compositioncontrollerasync)
* [CoreWebView2Environment.CreateCoreWebView2ControllerAsync(options) Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#createcorewebview2controllerasync)<!-- c#: might ~=CreateCoreWebView2CompositionControllerAsync -->
* [CoreWebView2Environment.CreateCoreWebView2ControllerAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#createcorewebview2controllerasync-1)
* [CoreWebView2Environment.CreateCoreWebView2ControllerOptions Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#createcorewebview2controlleroptions)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Environment7::UserDataFolder property (get)](/microsoft-edge/webview2/reference/win32/icorewebview2environment7#get_userdatafolder)<!--no put-->
* [ICoreWebView2EnvironmentOptions2::ExclusiveUserDataFolderAccess property (get](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions2#get_exclusiveuserdatafolderaccess), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions2#put_exclusiveuserdatafolderaccess)
* [ICoreWebView2Profile2::ClearBrowsingData method](/microsoft-edge/webview2/reference/win32/icorewebview2profile2#clearbrowsingdata)
* [ICoreWebView2Profile2::ClearBrowsingDataAll method](/microsoft-edge/webview2/reference/win32/icorewebview2profile2#clearbrowsingdataall)
* [ICoreWebView2Profile2::ClearBrowsingDataInTimeRange method](/microsoft-edge/webview2/reference/win32/icorewebview2profile2#clearbrowsingdataintimerange)
* [ICoreWebView2Environment10::CreateCoreWebView2CompositionControllerWithOptions method](/microsoft-edge/webview2/reference/win32/icorewebview2environment10#createcorewebview2compositioncontrollerwithoptions)<!-- c#: might ~=CreateCoreWebView2CompositionControllerAsync -->
* [ICoreWebView2Environment10::CreateCoreWebView2ControllerOptions method](/microsoft-edge/webview2/reference/win32/icorewebview2environment10#createcorewebview2controlleroptions)
* [ICoreWebView2Environment10::CreateCoreWebView2ControllerWithOptions method](/microsoft-edge/webview2/reference/win32/icorewebview2environment10#createcorewebview2controllerwithoptions)

---


<!-- ------------------------------ -->
#### Multiple profiles

Manage multiple profiles under a single user data folder.

See also:
* [Support multiple profiles under a single user data folder](./multi-profile-support.md)


##### [.NET/C#](#tab/dotnetcsharp)

Create an options object that defines a profile:
* [CoreWebView2Environment.CreateCoreWebView2ControllerOptions Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createcorewebview2controlleroptions)
   * [CoreWebView2ControllerOptions Class](/dotnet/api/microsoft.web.webview2.core.corewebview2controlleroptions)

<!-- Ref topic breakout: one webpage per overload; covers all overloads of the method, no need for per-overload links -->
Create a WebView2 control that uses the profile:
* [CoreWebView2Environment.CreateCoreWebView2CompositionControllerAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createcorewebview2compositioncontrollerasync)
* [CoreWebView2Environment.CreateCoreWebView2ControllerAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createcorewebview2controllerasync)

Access and manipulate the profile:
* [CoreWebView2.Profile Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.profile#microsoft-web-webview2-core-corewebview2-profile)
* [CoreWebView2Profile Class](/dotnet/api/microsoft.web.webview2.core.corewebview2profile)


##### [WinRT/C#](#tab/winrtcsharp)

Create an options object that defines a profile:
* [CoreWebView2Environment.CreateCoreWebView2ControllerOptions Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#createcorewebview2controlleroptions)
   * [CoreWebView2ControllerOptions Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controlleroptions)

<!-- Ref topic breakout: one webpage per type; very long webpage covers all methods of the type including overloads.  2nd overload's url adds -1 at end -->
<!-- preserve sequence per Ref webpage.  for clarity + brevity, list param names, lowercased -->
Create a WebView2 control that uses the profile:
* [CoreWebView2Environment.CreateCoreWebView2CompositionControllerAsync(parentWindow) Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#createcorewebview2compositioncontrollerasync)
* [CoreWebView2Environment.CreateCoreWebView2CompositionControllerAsync(parentWindow, options) Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#createcorewebview2compositioncontrollerasync-1)
* [CoreWebView2Environment.CreateCoreWebView2ControllerAsync(parentWindow, options) Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#createcorewebview2controllerasync)
* [CoreWebView2Environment.CreateCoreWebView2ControllerAsync(parentWindow) Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#createcorewebview2controllerasync-1)

Access and manipulate the profile:
* [CoreWebView2.Profile Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#profile)
* [CoreWebView2Profile Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile)


##### [Win32/C++](#tab/win32cpp)

Create an options object that defines a profile:
* [ICoreWebView2Environment10::CreateCoreWebView2ControllerOptions method](/microsoft-edge/webview2/reference/win32/icorewebview2environment10#createcorewebview2controlleroptions)
   * [ICoreWebView2ControllerOptions interface](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions)

<!-- Ref topic breakout: small dedicated iface.  link to iface to bring up overview, and link to methods to show method names -->
Create a WebView2 control that uses the profile:
* **[ICoreWebView2Environment10 interface](/microsoft-edge/webview2/reference/win32/icorewebview2environment10)**
   * [ICoreWebView2Environment10::CreateCoreWebView2ControllerWithOptions method](/microsoft-edge/webview2/reference/win32/icorewebview2environment10#createcorewebview2controllerwithoptions)
   * [ICoreWebView2Environment10::CreateCoreWebView2CompositionControllerWithOptions method](/microsoft-edge/webview2/reference/win32/icorewebview2environment10#createcorewebview2compositioncontrollerwithoptions)

Access and manipulate the profile:
* [ICoreWebView2_13::Profile property (get)](/microsoft-edge/webview2/reference/win32/icorewebview2_13#get_profile)<!--no put-->
* [ICoreWebView2Profile interface](/microsoft-edge/webview2/reference/win32/icorewebview2profile)
   * [ICoreWebView2Profile2 interface](/microsoft-edge/webview2/reference/win32/icorewebview2profile2) - Methods to clear browsing data.<!--keep text-->

---


<!-- ====================================================================== -->
## Performance and debugging

Analyze and debug performance, handle performance-related events, and manage memory usage to increase the responsiveness of your app.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.MemoryUsageTargetLevel Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.memoryusagetargetlevel)
* [CoreWebView2.TrySuspendAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.trysuspendasync)
   * [CoreWebView2.IsSuspended Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.issuspended)
   * [CoreWebView2.Resume Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.resume)
* [CoreWebView2.OpenTaskManagerWindow Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.opentaskmanagerwindow) 

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.MemoryUsageTargetLevel Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#memoryusagetargetlevel)
* [CoreWebView2.TrySuspendAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#trysuspendasync)
   * [CoreWebView2.IsSuspended Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#issuspended)
   * [CoreWebView2.Resume Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#resume)
* [CoreWebView2.OpenTaskManagerWindow Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#opentaskmanagerwindow)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Experimental5::MemoryUsageTargetLevel property (get](/microsoft-edge/webview2/reference/win32/icorewebview2experimental5#get_memoryusagetargetlevel), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2experimental5#put_memoryusagetargetlevel)
* [ICoreWebView2_3::TrySuspend method](/microsoft-edge/webview2/reference/win32/icorewebview2_3#trysuspend)
   * [ICoreWebView2_3::IsSuspended property (get)](/microsoft-edge/webview2/reference/win32/icorewebview2_3#get_issuspended)<!--no put-->
   * [ICoreWebView2_3::Resume method](/microsoft-edge/webview2/reference/win32/icorewebview2_3#resume)
* [ICoreWebView2_6::OpenTaskManagerWindow method](/microsoft-edge/webview2/reference/win32/icorewebview2_6#opentaskmanagerwindow)

---


<!-- ====================================================================== -->
## Chrome Developer Protocol (CDP)

The Chrome DevTools Protocol provides APIs to instrument, inspect, debug, and profile Chromium-based browsers.  The Chrome DevTools Protocol is the foundation for the Microsoft Edge DevTools.  Use the Chrome DevTools Protocol for features that aren't implemented in the WebView2 platform.

See also:
* [Use the Chrome DevTools Protocol in WebView2 apps](../how-to/chromium-devtools-protocol.md)
* [Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol)


##### [.NET/C#](#tab/dotnetcsharp)

Open:
* [CoreWebView2Settings.AreDevToolsEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.aredevtoolsenabled)
* [CoreWebView2.OpenDevToolsWindow Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.opendevtoolswindow)

Call:
* [CoreWebView2.CallDevToolsProtocolMethodAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.calldevtoolsprotocolmethodasync)
* [CoreWebView2.CallDevToolsProtocolMethodForSessionAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.calldevtoolsprotocolmethodforsessionasync)

Receiver:
* [CoreWebView2.GetDevToolsProtocolEventReceiver Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.getdevtoolsprotocoleventreceiver)
   * [CoreWebView2DevToolsProtocolEventReceivedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2devtoolsprotocoleventreceivedeventargs)
   * [CoreWebView2DevToolsProtocolEventReceiver Class](/dotnet/api/microsoft.web.webview2.core.corewebview2devtoolsprotocoleventreceiver)

##### [WinRT/C#](#tab/winrtcsharp)

Open:
* [CoreWebView2Settings.AreDevToolsEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings#aredevtoolsenabled)
* [CoreWebView2.OpenDevToolsWindow Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#opendevtoolswindow)

Call:
* [CoreWebView2.CallDevToolsProtocolMethodAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#calldevtoolsprotocolmethodasync)
* [CoreWebView2.CallDevToolsProtocolMethodForSessionAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#calldevtoolsprotocolmethodforsessionasync)

Receiver:
* [CoreWebView2.GetDevToolsProtocolEventReceiver Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#getdevtoolsprotocoleventreceiver)
   * [CoreWebView2DevToolsProtocolEventReceivedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2devtoolsprotocoleventreceivedeventargs)
   * [CoreWebView2DevToolsProtocolEventReceiver Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2devtoolsprotocoleventreceiver)

##### [Win32/C++](#tab/win32cpp)

Open:
* [ICoreWebView2Settings::AreDevToolsEnabled property (get](/microsoft-edge/webview2/reference/win32/icorewebview2settings#get_aredevtoolsenabled), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2settings#put_aredevtoolsenabled)
* [ICoreWebView2::OpenDevToolsWindow method](/microsoft-edge/webview2/reference/win32/icorewebview2#opendevtoolswindow)

Call:
* [ICoreWebView2::CallDevToolsProtocolMethod method](/microsoft-edge/webview2/reference/win32/icorewebview2#calldevtoolsprotocolmethod)
* [ICoreWebView2_11::CallDevToolsProtocolMethodForSession method](/microsoft-edge/webview2/reference/win32/icorewebview2_11#calldevtoolspotocolmethodforsession)

Receiver:
* [ICoreWebView2::GetDevToolsProtocolEventReceiver method](/microsoft-edge/webview2/reference/win32/icorewebview2#getdevtoolsprotocoleventreceiver)
   * [ICoreWebView2DevToolsProtocolEventReceiver interface](/microsoft-edge/webview2/reference/win32/icorewebview2devtoolsprotocoleventreceiver)
   * [ICoreWebView2DevToolsProtocolEventReceivedEventArgs interface](/microsoft-edge/webview2/reference/win32/icorewebview2devtoolsprotocoleventreceivedeventargs)

---


<!-- ====================================================================== -->
## todo: Shared buffer

<!-- todo: 
overview sentence or two: what should a student-level Dev mentally picture & think of?  what's the concrete UX/ feature/ benefit/ functionality that user sees?
-->

<!-- todo: 
See also:
* []()
-->

<!-- todo: link from dedicated topical page to this h2 section -->

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class
   * [CoreWebView2.PostSharedBufferToScript Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.postsharedbuffertoscript)

* `CoreWebView2Environment` Class
   * [ICoreWebView2Environment.CreateSharedBuffer Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createsharedbuffer)

* `CoreWebView2Frame` Class
   * [CoreWebView2Frame.PostSharedBufferToScript Method](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.postsharedbuffertoscript)

* [CoreWebView2SharedBuffer Class](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedbuffer)
   * [CoreWebView2SharedBuffer.Buffer Property](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedbuffer.buffer)
   * [CoreWebView2SharedBuffer.FileMappingHandle Property](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedbuffer.filemappinghandle)
   * [CoreWebView2SharedBuffer.Size Property](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedbuffer.size)
   * [CoreWebView2SharedBuffer.Close Method](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedbuffer.close)
   * [CoreWebView2SharedBuffer.Dispose Method](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedbuffer.dispose)
   * [CoreWebView2SharedBuffer.OpenStream Method](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedbuffer.openstream)

* [CoreWebView2SharedBufferAccess Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedbufferaccess)
   * `ReadOnly`
   * `ReadWrite`

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class
   * [CoreWebView2.PostSharedBufferToScript Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#postsharedbuffertoscript)

* `CoreWebView2Environment` Class
   * [ICoreWebView2Environment.CreateSharedBuffer Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#createsharedbuffer)

* `CoreWebView2Frame` Class
   * [CoreWebView2Frame.PostSharedBufferToScript Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#postsharedbuffertoscript)

* [CoreWebView2SharedBuffer Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedbuffer)
   * [CoreWebView2SharedBuffer.Buffer Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedbuffer#buffer)
   * [CoreWebView2SharedBuffer.Size Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedbuffer#size)
   * [CoreWebView2SharedBuffer.Close Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedbuffer#close)
   * [CoreWebView2SharedBuffer.OpenStream Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedbuffer#openstream)

* [CoreWebView2SharedBufferAccess Enum](/en-us/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedbufferaccess)
   * `ReadOnly`
   * `ReadWrite`

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_17 interface](/microsoft-edge/webview2/reference/win32/icorewebview2_17)
   * [ICoreWebView2_17::PostSharedBufferToScript method](/microsoft-edge/webview2/reference/win32/icorewebview2_17#postsharedbuffertoscript)

* [ICoreWebView2Environment12 interface](/microsoft-edge/webview2/reference/win32/icorewebview2environment12)
   * [ICoreWebView2Environment12::CreateSharedBuffer method](/microsoft-edge/webview2/reference/win32/icorewebview2environment12#createsharedbuffer)

* [ICoreWebView2Frame4 interface](/microsoft-edge/webview2/reference/win32/icorewebview2frame4)
   * [ICoreWebView2Frame4::PostSharedBufferToScript method](/microsoft-edge/webview2/reference/win32/icorewebview2frame4#postsharedbuffertoscript)

* [ICoreWebView2SharedBuffer interface](/microsoft-edge/webview2/reference/win32/icorewebview2sharedbuffer)
   * [ICoreWebView2SharedBuffer::OpenStream method](/microsoft-edge/webview2/reference/win32/icorewebview2sharedbuffer#openstream)
   * [ICoreWebView2SharedBuffer::Close method](/microsoft-edge/webview2/reference/win32/icorewebview2sharedbuffer#close)
   * [ICoreWebView2SharedBuffer::get_Size method](/microsoft-edge/webview2/reference/win32/icorewebview2sharedbuffer#get_size)
   * [ICoreWebView2SharedBuffer::get_Buffer method](/microsoft-edge/webview2/reference/win32/icorewebview2sharedbuffer#get_buffer)
   * [ICoreWebView2SharedBuffer::get_FileMappingHandle method](/microsoft-edge/webview2/reference/win32/icorewebview2sharedbuffer#get_filemappinghandle)

* [COREWEBVIEW2_SHARED_BUFFER_ACCESS](/en-us/microsoft-edge/webview2/reference/win32/webview2-idl#corewebview2_shared_buffer_access)
   * `COREWEBVIEW2_SHARED_BUFFER_ACCESS_READ_ONLY`
   * `COREWEBVIEW2_SHARED_BUFFER_ACCESS_READ_WRITE`

---


<!-- ====================================================================== -->
## todo: Managing permissions

<!-- todo: 
overview sentence or two: what should a student-level Dev mentally picture & think of?  what's the concrete UX/ feature/ benefit/ functionality that user sees?
-->

<!-- todo: 
See also:
* []()
-->

<!-- todo: link from dedicated topical page to this h2 section -->

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2PermissionKind` Enum
   * [CoreWebView2PermissionKind.MidiSystemExclusiveMessages Enum Value](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionkind)

* `CoreWebView2PermissionRequestedEventArgs` Event
   * [CoreWebView2PermissionRequestedEventArgs.SavesInProfile Property](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionrequestedeventargs.savesinprofile)   

* [CoreWebView2PermissionSetting Class](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionsetting)
   * [CoreWebView2PermissionSetting.PermissionKind Property](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionsetting.permissionkind)
   * [CoreWebView2PermissionSetting.PermissionOrigin Property](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionsetting.permissionorigin)
   * [CoreWebView2PermissionSetting.PermissionState Property](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionsetting.permissionstate)

* `CoreWebView2Profile` Class
   * [CoreWebView2Profile.GetNonDefaultPermissionSettingsAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.getnondefaultpermissionsettingsasync)
   * [CoreWebView2Profile.SetPermissionStateAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.setpermissionstateasync)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2PermissionKind` Enum
   * [CoreWebView2PermissionKind.MidiSystemExclusiveMessages Enum Value](/en-us/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionkind)

* `CoreWebView2PermissionRequestedEventArgs` Event
   * [CoreWebView2PermissionRequestedEventArgs.SavesInProfile Property](/en-us/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionrequestedeventargs#savesinprofile)

* [CoreWebView2PermissionSetting Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionsetting)
   * [CoreWebView2PermissionSetting.PermissionKind Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionsetting#permissionkind)
   * [CoreWebView2PermissionSetting.PermissionOrigin Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionsetting#permissionorigin)
   * [CoreWebView2PermissionSetting.PermissionState Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionsetting#permissionstate)

* `CoreWebView2Profile` Class
   * [CoreWebView2Profile.GetNonDefaultPermissionSettingsAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile#getnondefaultpermissionsettingsasync)
   * [CoreWebView2Profile.SetPermissionStateAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile#setpermissionstateasync)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2GetNonDefaultPermissionSettingsCompletedHandler interface](/microsoft-edge/webview2/reference/win32/icorewebview2getnondefaultpermissionsettingscompletedhandler)

* [ICoreWebView2PermissionRequestedEventArgs3 interface](/en-us/microsoft-edge/webview2/reference/win32/icorewebview2permissionrequestedeventargs3)
   * [ICoreWebView2PermissionRequestedEventArgs3::get_SavesInProfile](/en-us/microsoft-edge/webview2/reference/win32/icorewebview2permissionrequestedeventargs3#get_savesinprofile)
   * [ICoreWebView2PermissionRequestedEventArgs3::put_SavesInProfile](/en-us/microsoft-edge/webview2/reference/win32/icorewebview2permissionrequestedeventargs3#put_savesinprofile)

* [ICoreWebView2PermissionSetting interface](/microsoft-edge/webview2/reference/win32/icorewebview2permissionsetting)
   * [ICoreWebView2PermissionSetting::get_PermissionKind method](/microsoft-edge/webview2/reference/win32/icorewebview2permissionsetting#get_permissionkind)
   * [ICoreWebView2PermissionSetting::get_PermissionOrigin method](/microsoft-edge/webview2/reference/win32/icorewebview2permissionsetting#get_permissionorigin)
   * [ICoreWebView2PermissionSetting::get_PermissionState method](/microsoft-edge/webview2/reference/win32/icorewebview2permissionsetting#get_permissionstate)

* [ICoreWebView2PermissionSettingCollectionView interface](/microsoft-edge/webview2/reference/win32/icorewebview2permissionsettingcollectionview)
   * [ICoreWebView2PermissionSettingCollectionView::GetValueAtIndex method](/microsoft-edge/webview2/reference/win32/icorewebview2permissionsettingcollectionview#getvalueatindex)
   * [ICoreWebView2PermissionSettingCollectionView::get_Count method](/microsoft-edge/webview2/reference/win32/icorewebview2permissionsettingcollectionview#get_count)

* [ICoreWebView2Profile4 interface](/microsoft-edge/webview2/reference/win32/icorewebview2profile4)
   * [ICoreWebView2Profile4::GetNonDefaultPermissionSettings method](/microsoft-edge/webview2/reference/win32/icorewebview2profile4#getnondefaultpermissionsettings)
   * [ICoreWebView2Profile4::SetPermissionState method](/microsoft-edge/webview2/reference/win32/icorewebview2profile4#setpermissionstate)

* [ICoreWebView2SetPermissionStateCompletedHandler interface](/microsoft-edge/webview2/reference/win32/icorewebview2setpermissionstatecompletedhandler)

* `COREWEBVIEW2_PERMISSION_KIND` Enum
   * [COREWEBVIEW2_PERMISSION_KIND_MIDI_SYSTEM_EXCLUSIVE_MESSAGES enum value](/en-us/microsoft-edge/webview2/reference/win32/webview2-idl#corewebview2_permission_kind)

---


<!-- ====================================================================== -->
## todo: Tracking prevention

<!-- todo: 
overview sentence or two: what should a student-level Dev mentally picture & think of?  what's the concrete UX/ feature/ benefit/ functionality that user sees?
-->

<!-- todo: 
See also:
* []()
-->

<!-- todo: link from dedicated topical page to this h2 section -->

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2EnvironmentOptions` Class
   * [CoreWebView2EnvironmentOptions.EnableTrackingPrevention Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.enabletrackingprevention)

* `CoreWebView2Profile` Class
   * [CoreWebView2Profile.PreferredTrackingPreventionLevel Property](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.preferredtrackingpreventionlevel)

* [CoreWebView2TrackingPreventionLevel Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2trackingpreventionlevel)
    * `None`
    * `Basic`
    * `Balanced`
    * `Strict`

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2EnvironmentOptions` Class
   * [CoreWebView2EnvironmentOptions.EnableTrackingPrevention Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions#enabletrackingprevention)

* `CoreWebView2Profile` Class
   * [CoreWebView2Profile.PreferredTrackingPreventionLevel Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile#preferredtrackingpreventionlevel)

* [CoreWebView2TrackingPreventionLevel Enum](/en-us/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2trackingpreventionlevel)
    * `None`
    * `Basic`
    * `Balanced`
    * `Strict`

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2EnvironmentOptions5 interface](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions5)
   * [ICoreWebView2EnvironmentOptions5::EnableTrackingPrevention property (get](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions5#get_enabletrackingprevention), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions5#put_enabletrackingprevention)

* [ICoreWebView2Profile3 interface](/microsoft-edge/webview2/reference/win32/icorewebview2profile3)
   * [ICoreWebView2Profile3::PreferredTrackingPreventionLevel property (get](/microsoft-edge/webview2/reference/win32/icorewebview2profile3#get_preferredtrackingpreventionlevel), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2profile3#put_preferredtrackingpreventionlevel)

* [COREWEBVIEW2_TRACKING_PREVENTION_LEVEL enum](/en-us/microsoft-edge/webview2/reference/win32/webview2-idl#corewebview2_tracking_prevention_level)
  * `COREWEBVIEW2_TRACKING_PREVENTION_LEVEL_NONE`
  * `COREWEBVIEW2_TRACKING_PREVENTION_LEVEL_BASIC`
  * `COREWEBVIEW2_TRACKING_PREVENTION_LEVEL_BALANCED`
  * `COREWEBVIEW2_TRACKING_PREVENTION_LEVEL_STRICT`

---


<!-- ====================================================================== -->
## todo: Controller's script locale

<!-- todo: 
overview sentence or two: what should a student-level Dev mentally picture & think of?  what's the concrete UX/ feature/ benefit/ functionality that user sees?
-->

<!-- todo: 
See also:
* []()
-->

<!-- todo: link from dedicated topical page to this h2 section -->

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2ControllerOptions` Class
   * [CoreWebView2ControllerOptions.ScriptLocale Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controlleroptions.scriptlocale)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2ControllerOptions` Class
   * [CoreWebView2ControllerOptions.ScriptLocale Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controlleroptions#scriptlocale)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ControllerOptions2 interface](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions2)
   * [ICoreWebView2ControllerOptions2::get_ScriptLocale method](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions2#get_scriptlocale)
   * [ICoreWebView2ControllerOptions2::put_ScriptLocale method](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions2#put_scriptlocale)

---


<!-- ====================================================================== -->
## See also

* [Introduction to Microsoft Edge WebView2](../index.md)
* [WebView2 API Reference](../webview2-api-reference.md) - API Reference links for additional platforms and languages, such as WinRT/C++ (COM).
