---
title: Overview of WebView2 features and APIs
description: Overview of WebView2 features and APIs.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 04/19/2023
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

<!-- maintenance notes: add table rows for any new h2 sections -->


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

* `CoreWebView2` Class:
   * [CoreWebView2.AddHostObjectToScript Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.addhostobjecttoscript)
   * [CoreWebView2.RemoveHostObjectFromScript Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.removehostobjectfromscript)
* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.AreHostObjectsAllowed Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.arehostobjectsallowed)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.AddHostObjectToScript Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#addhostobjecttoscript)
   * [CoreWebView2.RemoveHostObjectFromScript Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#removehostobjectfromscript)
* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.AreHostObjectsAllowed Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings#arehostobjectsallowed)
* `CoreWebView2Frame` Class:
   * [CoreWebView2Frame.RemoveHostObjectFromScript Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#removehostobjectfromscript)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2` interface:
   * [ICoreWebView2::AddHostObjectToScript method](/microsoft-edge/webview2/reference/win32/icorewebview2#addhostobjecttoscript)
   * [ICoreWebView2::RemoveHostObjectFromScript method](/microsoft-edge/webview2/reference/win32/icorewebview2#removehostobjectfromscript)
* `ICoreWebView2Settings` interface:
   * [ICoreWebView2Settings::get_AreHostObjectsAllowed property method](/microsoft-edge/webview2/reference/win32/icorewebview2settings#get_arehostobjectsallowed)
   * [ICoreWebView2Settings::put_AreHostObjectsAllowed property method](/microsoft-edge/webview2/reference/win32/icorewebview2settings#put_arehostobjectsallowed)
* `ICoreWebView2Frame` interface:
   * [ICoreWebView2Frame::AddHostObjectToScriptWithOrigins method](/microsoft-edge/webview2/reference/win32/icorewebview2frame#addhostobjecttoscriptwithorigins)

---


<!-- ------------------------------ -->
#### Script execution

Allows host app to add JavaScript in the web content within the WebView2 control. 

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.AddScriptToExecuteOnDocumentCreatedAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.addscripttoexecuteondocumentcreatedasync)
   * [CoreWebView2.ExecuteScriptAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.executescriptasync)
   * [CoreWebView2.RemoveScriptToExecuteOnDocumentCreated Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.removescripttoexecuteondocumentcreated)
* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.IsScriptEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.isscriptenabled)
* `CoreWebView2Frame` Class:
   * [CoreWebView2Frame.ExecuteScriptAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.executescriptasync)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.AddScriptToExecuteOnDocumentCreatedAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#addscripttoexecuteondocumentcreatedasync)
   * [CoreWebView2.ExecuteScriptAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#executescriptasync)
   * [CoreWebView2.RemoveScriptToExecuteOnDocumentCreated Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#removescripttoexecuteondocumentcreated)
* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.IsScriptEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings#isscriptenabled)
* `CoreWebView2Frame` Class:
   * [CoreWebView2Frame.ExecuteScriptAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#executescriptasync)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2` interface:
   * [ICoreWebView2::AddScriptToExecuteOnDocumentCreated method](/microsoft-edge/webview2/reference/win32/icorewebview2#addscripttoexecuteondocumentcreated)
   * [ICoreWebView2::ExecuteScript method](/microsoft-edge/webview2/reference/win32/icorewebview2#executescript)
   * [ICoreWebView2::RemoveScriptToExecuteOnDocumentCreated method](/microsoft-edge/webview2/reference/win32/icorewebview2#removescripttoexecuteondocumentcreated)
* `ICoreWebView2Settings` interface:
   * [ICoreWebView2Settings::get_IsScriptEnabled property method](/microsoft-edge/webview2/reference/win32/icorewebview2settings#get_isscriptenabled)
   * [ICoreWebView2Settings::put_IsScriptEnabled property method](/microsoft-edge/webview2/reference/win32/icorewebview2settings#put_isscriptenabled)
* `ICoreWebView2Frame2` interface:
   * [ICoreWebView2Frame2::ExecuteScript method](/microsoft-edge/webview2/reference/win32/icorewebview2frame2#executescript)

---


<!-- ------------------------------ -->
#### Web messaging

Your app can send messages to the web content that's within the WebView2 control, and receive messages from that web content.  Messages are sent as strings or JSON objects.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.PostWebMessageAsJson Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.postwebmessageasjson)
   * [CoreWebView2.PostWebMessageAsString Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.postwebmessageasstring)
   * [CoreWebView2.WebMessageReceived Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.webmessagereceived)
* [CoreWebView2WebMessageReceivedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2webmessagereceivedeventargs)
* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.IsWebMessageEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.iswebmessageenabled)
* `CoreWebView2Frame` Class:
   * [CoreWebView2Frame.PostWebMessageAsJson Method](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.postwebmessageasjson)
   * [CoreWebView2Frame.PostWebMessageAsString Method](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.postwebmessageasstring)
   * [CoreWebView2Frame.WebMessageReceived Event](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.webmessagereceived)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.PostWebMessageAsJson Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#postwebmessageasjson)
   * [CoreWebView2.PostWebMessageAsString Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#postwebmessageasstring)
   * [CoreWebView2.WebMessageReceived Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#webmessagereceived)
* [CoreWebView2WebMessageReceivedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2webmessagereceivedeventargs)
* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.IsWebMessageEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings#iswebmessageenabled)
* `CoreWebView2Frame` Class:
   * [CoreWebView2Frame.PostWebMessageAsJson Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#postwebmessageasjson)
   * [CoreWebView2Frame.PostWebMessageAsString Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#postwebmessageasstring)
   * [CoreWebView2Frame.WebMessageReceived Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#webmessagereceived)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2` interface:
   * [ICoreWebView2::PostWebMessageAsJson method](/microsoft-edge/webview2/reference/win32/icorewebview2#postwebmessageasjson)
   * [ICoreWebView2::PostWebMessageAsString method](/microsoft-edge/webview2/reference/win32/icorewebview2#postwebmessageasstring)
   * [ICoreWebView2::add_WebMessageReceived](/microsoft-edge/webview2/reference/win32/icorewebview2#add_webmessagereceived)
   * [ICoreWebView2::remove_WebMessageReceived](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_webmessagereceived)
* [ICoreWebView2WebMessageReceivedEventArgs interface](/microsoft-edge/webview2/reference/win32/icorewebview2webmessagereceivedeventargs)
* `ICoreWebView2Settings` interface:
   * [ICoreWebView2Settings::get_IsWebMessageEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings#get_iswebmessageenabled)
   * [ICoreWebView2Settings::put_IsWebMessageEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings#put_iswebmessageenabled)
* `ICoreWebView2Frame2` interface:
   * [ICoreWebView2Frame2::PostWebMessageAsJson method](/microsoft-edge/webview2/reference/win32/icorewebview2frame2#postwebmessageasjson)
   * [ICoreWebView2Frame2::PostWebMessageAsString method](/microsoft-edge/webview2/reference/win32/icorewebview2frame2#postwebmessageasstring)
   * [ICoreWebView2Frame2::add_WebMessageReceived](/microsoft-edge/webview2/reference/win32/icorewebview2frame2#add_webmessagereceived)
   * [ICoreWebView2Frame2::remove_WebMessageReceived](/microsoft-edge/webview2/reference/win32/icorewebview2frame2#remove_webmessagereceived)

---


<!-- ------------------------------ -->
#### Script dialogs

When hosting WebView2, your app can manage different JavaScript dialogs, to suppress them or to replace them with custom dialogs.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.ScriptDialogOpening Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.scriptdialogopening)
* [CoreWebView2ScriptDialogOpeningEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2scriptdialogopeningeventargs)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.ScriptDialogOpening Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#scriptdialogopening)
* [CoreWebView2ScriptDialogOpeningEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2scriptdialogopeningeventargs)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2` interface:
   * [ICoreWebView2::add_ScriptDialogOpening event method](/microsoft-edge/webview2/reference/win32/icorewebview2#add_scriptdialogopening)
   * [ICoreWebView2::remove_ScriptDialogOpening event method](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_scriptdialogopening)
* [ICoreWebView2ScriptDialogOpeningEventArgs interface](/microsoft-edge/webview2/reference/win32/icorewebview2scriptdialogopeningeventargs)

---


<!-- ------------------------------ -->
#### Shared buffer

<!-- section from RelNotes 111 -->

The SharedBuffer API supports sharing buffers between the WebView2 host app process and WebView2 renderer process, based on shared memory from the OS.

<!-- Article to cross-link if available
See also:
* []()
* [SharedBufferReceivedEvent class](/microsoft-edge/webview2/reference/javascript/sharedbufferreceivedevent)
       = https://learn.microsoft.com/microsoft-edge/webview2/reference/javascript/sharedbufferreceivedevent
-->

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.PostSharedBufferToScript Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.postsharedbuffertoscript)
* `CoreWebView2Environment` Class:
   * [ICoreWebView2Environment.CreateSharedBuffer Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createsharedbuffer)
* `CoreWebView2Frame` Class:
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

* `CoreWebView2` Class:
   * [CoreWebView2.PostSharedBufferToScript Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#postsharedbuffertoscript)
* `CoreWebView2Environment` Class:
   * [ICoreWebView2Environment.CreateSharedBuffer Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#createsharedbuffer)
* `CoreWebView2Frame` Class:
   * [CoreWebView2Frame.PostSharedBufferToScript Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#postsharedbuffertoscript)
* [CoreWebView2SharedBuffer Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedbuffer)
   * [CoreWebView2SharedBuffer.Buffer Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedbuffer#buffer)
   * [CoreWebView2SharedBuffer.Size Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedbuffer#size)
   * [CoreWebView2SharedBuffer.Close Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedbuffer#close)
   * [CoreWebView2SharedBuffer.OpenStream Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedbuffer#openstream)
* [CoreWebView2SharedBufferAccess Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedbufferaccess)
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
* [COREWEBVIEW2_SHARED_BUFFER_ACCESS](/microsoft-edge/webview2/reference/win32/webview2-idl#corewebview2_shared_buffer_access)
   * `COREWEBVIEW2_SHARED_BUFFER_ACCESS_READ_ONLY`
   * `COREWEBVIEW2_SHARED_BUFFER_ACCESS_READ_WRITE`

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

* `CoreWebView2` Class:
   * [CoreWebView2.ShowPrintUI Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.showprintui#microsoft-web-webview2-core-corewebview2-showprintui)
   * [CoreWebView2.PrintAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.printasync#microsoft-web-webview2-core-corewebview2-printasync)
   * [CoreWebView2.PrintToPdfAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.printtopdfasync)
   * [CoreWebView2.PrintToPdfStreamAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.printtopdfstreamasync#microsoft-web-webview2-core-corewebview2-printtopdfstreamasync)
* `CoreWebView2Environment` Class:
   * [CoreWebView2Environment.CreatePrintSettings Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createprintsettings)
* [CoreWebView2PrintSettings Class](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings)
* [CoreWebView2PrintDialogKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2printdialogkind)
* [CoreWebView2PrintStatus Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2printstatus)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.ShowPrintUI Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#showprintui)
   * [CoreWebView2.PrintAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#printasync)
   * [CoreWebView2.PrintToPdfAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#printtopdfasync)
   * [CoreWebView2.PrintToPdfStreamAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#printtopdfstreamasync)
* `CoreWebView2Environment` Class:
   * [CoreWebView2Environment.CreatePrintSettings Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#createprintsettings)
* [CoreWebView2PrintSettings Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings)
* [CoreWebView2PrintDialogKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printdialogkind)
* [CoreWebView2PrintStatus Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printstatus)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_7 interface](/microsoft-edge/webview2/reference/win32/icorewebview2_7)
   * [ICoreWebView2_7::PrintToPdf method](/microsoft-edge/webview2/reference/win32/icorewebview2_7#printtopdf)
* [ICoreWebView2_16 interface](/microsoft-edge/webview2/reference/win32/icorewebview2_16)
   * [ICoreWebView2_16::ShowPrintUI method](/microsoft-edge/webview2/reference/win32/icorewebview2_16#showprintui)
   * [ICoreWebView2_16::Print method](/microsoft-edge/webview2/reference/win32/icorewebview2_16#print)
   * [ICoreWebView2_16::PrintToPdfStream method](/microsoft-edge/webview2/reference/win32/icorewebview2_16#printtopdfstream)
* [ICoreWebView2Environment6 interface](/microsoft-edge/webview2/reference/win32/icorewebview2environment6)
   * [ICoreWebView2Environment6::CreatePrintSettings method](/microsoft-edge/webview2/reference/win32/icorewebview2environment6#createprintsettings)
* [ICoreWebView2PrintCompletedHandler interface](/microsoft-edge/webview2/reference/win32/icorewebview2printcompletedhandler)
* [ICoreWebView2PrintSettings interface](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings)
* [ICoreWebView2PrintSettings2 interface](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2)
* [ICoreWebView2PrintToPdfCompletedHandler interface](/microsoft-edge/webview2/reference/win32/icorewebview2printtopdfcompletedhandler)
* [ICoreWebView2PrintToPdfStreamCompletedHandler interface](/microsoft-edge/webview2/reference/win32/icorewebview2printtopdfstreamcompletedhandler)
* [COREWEBVIEW2_PRINT_DIALOG_KIND enum](/microsoft-edge/webview2/reference/win32/icorewebview2_16#corewebview2_print_dialog_kind)
* [COREWEBVIEW2_PRINT_STATUS enum](/microsoft-edge/webview2/reference/win32/icorewebview2_16#corewebview2_print_status)

---


<!-- ------------------------------ -->
#### Cookies

You can use cookies in WebView2 to manage user sessions, store user personalization preferences, and track user behavior.

See also:
* [View, edit, and delete cookies](/microsoft-edge/devtools-guide-chromium/storage/cookies)

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.CookieManager Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.cookiemanager#microsoft-web-webview2-core-corewebview2-cookiemanager)
* [CoreWebView2Cookie Class](/dotnet/api/microsoft.web.webview2.core.corewebview2cookie)
* [CoreWebView2CookieManager Class](/dotnet/api/microsoft.web.webview2.core.corewebview2cookiemanager)

<!-- link deleted for CookieList Class. Goes to 674 prerelease: https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2cookielist?view=webview2-dotnet-1.0.674-prerelease -->

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.CookieManager Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#cookiemanager)
* [CoreWebView2Cookie Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2cookie)
* [CoreWebView2CookieManager Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2cookiemanager)

<!-- Link deleted for [CoreWebView2CookieList Class]()
GetCookies returns Vector of CoreWebView2Cookie:
https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2cookiemanager#getcookiesasync
-->

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2_2` interface:
   * [ICoreWebView2_2.get_CookieManager property method](/microsoft-edge/webview2/reference/win32/icorewebview2_2#get_cookiemanager)<!--no put-->
* [ICoreWebView2Cookie interface](/microsoft-edge/webview2/reference/win32/icorewebview2cookie)
* [ICoreWebView2CookieList interface](/microsoft-edge/webview2/reference/win32/icorewebview2cookielist)
* [ICoreWebView2CookieManager interface](/microsoft-edge/webview2/reference/win32/icorewebview2cookiemanager)

---


<!-- ------------------------------ -->
#### Image capture

By hosting WebView2, your app can capture screenshots and indicate which format to use to save the image.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.CapturePreviewAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.capturepreviewasync)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.CapturePreviewAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#capturepreviewasync)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2` interface:
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
* `CoreWebView2` Class:
   * [CoreWebView2.IsDefaultDownloadDialogOpenChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.isdefaultdownloaddialogopenchanged)
   * [CoreWebView2.IsDefaultDownloadDialogOpen Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.isdefaultdownloaddialogopen)
   * [CoreWebView2.OpenDefaultDownloadDialog Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.opendefaultdownloaddialog)
   * [CoreWebView2.CloseDefaultDownloadDialog Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.closedefaultdownloaddialog)

Modify Default Experience:
* `CoreWebView2` Class:
   * [CoreWebView2.DefaultDownloadDialogCornerAlignment Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.defaultdownloaddialogcorneralignment)
   * [CoreWebView2.DefaultDownloadDialogMargin Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.defaultdownloaddialogmargin)
* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.DefaultDownloadFolderPath Property](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.defaultdownloadfolderpath)

Custom Download Experience:
* `CoreWebView2` Class:
   * [CoreWebView2.DownloadStarting Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.downloadstarting)
* [CoreWebView2DownloadStartingEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2downloadstartingeventargs)
* [CoreWebView2DownloadOperation Class](/dotnet/api/microsoft.web.webview2.core.corewebview2downloadoperation)

##### [WinRT/C#](#tab/winrtcsharp)

General:
* `CoreWebView2` Class:
   * [CoreWebView2.IsDefaultDownloadDialogOpenChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#isdefaultdownloaddialogopenchanged)
   * [CoreWebView2.IsDefaultDownloadDialogOpen Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#isdefaultdownloaddialogopen)
   * [CoreWebView2.OpenDefaultDownloadDialog Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#opendefaultdownloaddialog)
   * [CoreWebView2.CloseDefaultDownloadDialog Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#closedefaultdownloaddialog)

Modify Default Experience:
* `CoreWebView2` Class:
   * [CoreWebView2.DefaultDownloadDialogCornerAlignment Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#defaultdownloaddialogcorneralignment)
   * [CoreWebView2.DefaultDownloadDialogMargin Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#defaultdownloaddialogmargin)
* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.DefaultDownloadFolderPath Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile#defaultdownloadfolderpath)

Custom Download Experience:
* `CoreWebView2` Class:
   * [CoreWebView2.DownloadStarting Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#downloadstarting)
* [CoreWebView2DownloadStartingEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2downloadstartingeventargs)
* [CoreWebView2DownloadOperation Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2downloadoperation)

##### [Win32/C++](#tab/win32cpp)

General:
* `ICoreWebView2_9` interface:
   * [ICoreWebView2_9::get_IsDefaultDownloadDialogOpen property method](/microsoft-edge/webview2/reference/win32/icorewebview2_9#get_isdefaultdownloaddialogopen)<!--no put-->
   * [ICoreWebView2_9::OpenDefaultDownloadDialog method](/microsoft-edge/webview2/reference/win32/icorewebview2_9#opendefaultdownloaddialog)
   * [ICoreWebView2_9::add_IsDefaultDownloadDialogOpenChanged event method](/microsoft-edge/webview2/reference/win32/icorewebview2_9#add_isdefaultdownloaddialogopenchanged)
   * [ICoreWebView2_9::remove_IsDefaultDownloadDialogOpenChanged event method](/microsoft-edge/webview2/reference/win32/icorewebview2_9#remove_isdefaultdownloaddialogopenchanged)
   * [ICoreWebView2_9::CloseDefaultDownloadDialog method](/microsoft-edge/webview2/reference/win32/icorewebview2_9#closedefaultdownloaddialog)

Modify Default Experience:
* `ICoreWebView2_9` interface:
   * [ICoreWebView2_9::get_DefaultDownloadDialogCornerAlignment property method](/microsoft-edge/webview2/reference/win32/icorewebview2_9#get_defaultdownloaddialogcorneralignment)
   * [ICoreWebView2_9::put_DefaultDownloadDialogCornerAlignment property method](/microsoft-edge/webview2/reference/win32/icorewebview2_9#put_defaultdownloaddialogcorneralignment)
   * [ICoreWebView2_9::get_DefaultDownloadDialogMargin property method](/microsoft-edge/webview2/reference/win32/icorewebview2_9#get_defaultdownloaddialogmargin)
   * [ICoreWebView2_9::put_DefaultDownloadDialogMargin property method](/microsoft-edge/webview2/reference/win32/icorewebview2_9#put_defaultdownloaddialogmargin)
* `ICoreWebView2Profile` interface:
   * [ICoreWebView2Profile::get_DefaultDownloadFolderPath property method](/microsoft-edge/webview2/reference/win32/icorewebview2profile#get_defaultdownloadfolderpath)
   * [ICoreWebView2Profile::put_DefaultDownloadFolderPath property method](/microsoft-edge/webview2/reference/win32/icorewebview2profile#put_defaultdownloadfolderpath)

Custom Download Experience:
* `ICoreWebView2_4` interface:
   * [ICoreWebView2_4::add_DownloadStarting event method](/microsoft-edge/webview2/reference/win32/icorewebview2_4#add_downloadstarting)
   * [ICoreWebView2_4::remove_DownloadStarting event method](/microsoft-edge/webview2/reference/win32/icorewebview2_4#remove_downloadstarting)
* [ICoreWebView2DownloadStartingEventArgs interface](/microsoft-edge/webview2/reference/win32/icorewebview2downloadstartingeventargs)
* [ICoreWebView2DownloadOperation interface](/microsoft-edge/webview2/reference/win32/icorewebview2downloadoperation)

---

<!-- todo: decide whether to re-add blank lines above (lines 1-533) -->


<!-- ------------------------------ -->
#### Permissions

Different webpages may ask you for permissions to access some privileged resources, such as geolocation sensor, camera, and microphone.  Your host app can programmatically respond to permissions requests and can replace the default permissions UI with its own UI.

<!--
there's not a regular article about Permissions, to cross-link
See also:
* []()
-->

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.PermissionRequested Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.permissionrequested)

* `CoreWebView2Frame` Class:
   * [CoreWebView2Frame.PermissionRequested Event](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.permissionrequested)

* [CoreWebView2PermissionKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionkind)

* `CoreWebView2PermissionRequestedEventArgs` Class:
   * [CoreWebView2PermissionRequestedEventArgs.SavesInProfile Property](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionrequestedeventargs.savesinprofile)   

* [CoreWebView2PermissionSetting Class](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionsetting)
   * [CoreWebView2PermissionSetting.PermissionKind Property](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionsetting.permissionkind)
   * [CoreWebView2PermissionSetting.PermissionOrigin Property](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionsetting.permissionorigin)
   * [CoreWebView2PermissionSetting.PermissionState Property](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionsetting.permissionstate)

* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.GetNonDefaultPermissionSettingsAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.getnondefaultpermissionsettingsasync)
   * [CoreWebView2Profile.SetPermissionStateAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.setpermissionstateasync)


##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.PermissionRequested Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#permissionrequested)

* `CoreWebView2Frame` Class:
   * [CoreWebView2Frame.PermissionRequested Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#permissionrequested)

* [CoreWebView2PermissionKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionkind)

* `CoreWebView2PermissionRequestedEventArgs` Class:
   * [CoreWebView2PermissionRequestedEventArgs.SavesInProfile Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionrequestedeventargs#savesinprofile)

* [CoreWebView2PermissionSetting Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionsetting)
   * [CoreWebView2PermissionSetting.PermissionKind Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionsetting#permissionkind)
   * [CoreWebView2PermissionSetting.PermissionOrigin Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionsetting#permissionorigin)
   * [CoreWebView2PermissionSetting.PermissionState Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionsetting#permissionstate)

* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.GetNonDefaultPermissionSettingsAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile#getnondefaultpermissionsettingsasync)
   * [CoreWebView2Profile.SetPermissionStateAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile#setpermissionstateasync)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2` interface:
   * [ICoreWebView2::add_PermissionRequested](/microsoft-edge/webview2/reference/win32/icorewebview2#add_permissionrequested)
   * [ICoreWebView2::remove_PermissionRequested](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_permissionrequested)

* [ICoreWebView2GetNonDefaultPermissionSettingsCompletedHandler interface](/microsoft-edge/webview2/reference/win32/icorewebview2getnondefaultpermissionsettingscompletedhandler)

* [ICoreWebView2Frame3 interface](/microsoft-edge/webview2/reference/win32/icorewebview2frame3)
   * [ICoreWebView2Frame3::add_PermissionRequested](/microsoft-edge/webview2/reference/win32/icorewebview2frame3#add_permissionrequested)
   * [ICoreWebView2Frame3::remove_PermissionRequested](/microsoft-edge/webview2/reference/win32/icorewebview2frame3#remove_permissionrequested)

* [ICoreWebView2PermissionRequestedEventArgs interface](/microsoft-edge/webview2/reference/win32/icorewebview2permissionrequestedeventargs)

* [ICoreWebView2PermissionRequestedEventArgs3 interface](/microsoft-edge/webview2/reference/win32/icorewebview2permissionrequestedeventargs3)
   * [ICoreWebView2PermissionRequestedEventArgs3::get_SavesInProfile](/microsoft-edge/webview2/reference/win32/icorewebview2permissionrequestedeventargs3#get_savesinprofile)
   * [ICoreWebView2PermissionRequestedEventArgs3::put_SavesInProfile](/microsoft-edge/webview2/reference/win32/icorewebview2permissionrequestedeventargs3#put_savesinprofile)

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

* [COREWEBVIEW2_PERMISSION_KIND enum](/microsoft-edge/webview2/reference/win32/webview2-idl#corewebview2_permission_kind)

---


<!-- ------------------------------ -->
#### Context menus

The WebView2 control provides a default context menu (right-click menu) which you can customize or disable, and you can also create your own context menu. 

See also:
* [Customize context menus in WebView2](../how-to/context-menus.md)

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.ContextMenuRequested Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.contextmenurequested)

* [CoreWebView2ContextMenuItem Class](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenuitem)

* [CoreWebView2ContextMenuRequestedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenurequestedeventargs)

* [CoreWebView2ContextMenuTarget Class](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenutarget)

* `CoreWebView2Environment` Class:
   * [CoreWebView2Environment.CreateContextMenuItem Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createcontextmenuitem)

* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.AreDefaultContextMenusEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.aredefaultcontextmenusenabled)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.ContextMenuRequested Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#contextmenurequested)

* [CoreWebView2ContextMenuItem Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2contextmenuitem)

* [CoreWebView2ContextMenuRequestedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2contextmenurequestedeventargs)

* [CoreWebView2ContextMenuTarget Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2contextmenutarget)

* `CoreWebView2Environment` Class:
   * [CoreWebView2Environment.CreateContextMenuItem Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#createcontextmenuitem)

* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.AreDefaultContextMenusEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings#aredefaultcontextmenusenabled)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2_11` interface:
   * [ICoreWebView2_11::add_ContextMenuRequested](/microsoft-edge/webview2/reference/win32/icorewebview2_11#add_contextmenurequested)
   * [ICoreWebView2_11::remove_ContextMenuRequested](/microsoft-edge/webview2/reference/win32/icorewebview2_11#remove_contextmenurequested)

* [ICoreWebView2ContextMenuRequestedEventArgs interface](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenurequestedeventargs)

* [ICoreWebView2ContextMenuItem interface](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenuitem)
   * [ICoreWebView2ContextMenuItemCollection interface](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenuitemcollection)

* [ICoreWebView2ContextMenuTarget interface](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenutarget)

* `ICoreWebView2Environment9` interface:
   * [ICoreWebView2Environment9::CreateContextMenuItem method](/microsoft-edge/webview2/reference/win32/icorewebview2environment9#createcontextmenuitem)

* `ICoreWebView2Settings` interface:
   * [ICoreWebView2Settings::get_AreDefaultContextMenusEnabled property method](/microsoft-edge/webview2/reference/win32/icorewebview2settings#get_aredefaultcontextmenusenabled)
   * [ICoreWebView2Settings::put_AreDefaultContextMenusEnabled property method](/microsoft-edge/webview2/reference/win32/icorewebview2settings#put_aredefaultcontextmenusenabled)

---


<!-- ------------------------------ -->
#### Status bar

A status bar is located in the bottom left of the page and displays the state of the webpage being displayed. In WebView2 you can enable/disable the status bar, get the text in the status bar, and find out when the status bar text has changed. 

<!--
See also:
-->

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.StatusBarText Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.statusbartext)
   * [CoreWebView2.StatusBarTextChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.statusbartextchanged)

* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.IsStatusBarEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.isstatusbarenabled)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.StatusBarText Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#statusbartext)
   * [CoreWebView2.StatusBarTextChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#statusbartextchanged)

* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.IsStatusBarEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings#isstatusbarenabled)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_12 interface](/microsoft-edge/webview2/reference/win32/icorewebview2_12)
   * [ICoreWebView2_12::add_StatusBarTextChanged](/microsoft-edge/webview2/reference/win32/icorewebview2_12#add_statusbartextchanged)
   * [ICoreWebView2_12::get_StatusBarText](/microsoft-edge/webview2/reference/win32/icorewebview2_12#get_statusbartext)
   * [ICoreWebView2_12::remove_StatusBarTextChanged](/microsoft-edge/webview2/reference/win32/icorewebview2_12#remove_statusbartextchanged)

* `ICoreWebView2Settings` interface:
   * [ICoreWebView2Settings::get_IsStatusBarEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings#get_isstatusbarenabled)
   * [ICoreWebView2Settings::put_IsStatusBarEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings#put_isstatusbarenabled)

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

* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.UserAgent Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.useragent)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.UserAgent Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings#useragent)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Settings2 Class](/microsoft-edge/webview2/reference/win32/icorewebview2settings2)
    * [ICoreWebView2Settings2::get_UserAgent](/microsoft-edge/webview2/reference/win32/icorewebview2settings2#get_useragent)
    * [ICoreWebView2Settings2::put_UserAgent](/microsoft-edge/webview2/reference/win32/icorewebview2settings2#put_useragent)

---


<!-- ------------------------------ -->
#### Autofill

Your app can independently control whether the browser's autofill functionality is enabled for general information or for passwords.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.IsGeneralAutofillEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.isgeneralautofillenabled)
   * [CoreWebView2Settings.IsPasswordAutosaveEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.ispasswordautosaveenabled)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.IsGeneralAutofillEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings#isgeneralautofillenabled)
   * [CoreWebView2Settings.IsPasswordAutosaveEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings#ispasswordautosaveenabled)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Settings4 interface](/microsoft-edge/webview2/reference/win32/icorewebview2settings4)
   * [ICoreWebView2Settings4::get_IsGeneralAutofillEnabled property method](/microsoft-edge/webview2/reference/win32/icorewebview2settings4#get_isgeneralautofillenabled)
   * [ICoreWebView2Settings4::get_IsPasswordAutosaveEnabled property method](/microsoft-edge/webview2/reference/win32/icorewebview2settings4#get_ispasswordautosaveenabled)
   * [ICoreWebView2Settings4::put_IsGeneralAutofillEnabled property method](/microsoft-edge/webview2/reference/win32/icorewebview2settings4#put_isgeneralautofillenabled)
   * [ICoreWebView2Settings4::put_IsPasswordAutosaveEnabled property method](/microsoft-edge/webview2/reference/win32/icorewebview2settings4#put_ispasswordautosaveenabled)

---


<!-- ------------------------------ -->
#### Audio

Your app can mute and unmute all audio, and find out when audio is playing.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.IsDocumentPlayingAudioChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.isdocumentplayingaudiochanged)
   * [CoreWebView2.IsMutedChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.ismutedchanged)
   * [CoreWebView2.IsDocumentPlayingAudio Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.isdocumentplayingaudio)
   * [CoreWebView2.IsMuted Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.ismuted)
   
##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.IsDocumentPlayingAudioChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#isdocumentplayingaudiochanged)
   * [CoreWebView2.IsMutedChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#ismutedchanged)
   * [CoreWebView2.IsDocumentPlayingAudio Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#isdocumentplayingaudio)
   * [CoreWebView2.IsMuted Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#ismuted)
   
##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_8 interface](/microsoft-edge/webview2/reference/win32/icorewebview2_8)
   * [ICoreWebView2_8::add_IsDocumentPlayingAudioChanged event method](/microsoft-edge/webview2/reference/win32/icorewebview2_8#add_isdocumentplayingaudiochanged)
   * [ICoreWebView2_8::add_IsMutedChanged event method](/microsoft-edge/webview2/reference/win32/icorewebview2_8#add_ismutedchanged)
   * [ICoreWebView2_8::get_IsDocumentPlayingAudio property method](/microsoft-edge/webview2/reference/win32/icorewebview2_8#get_isdocumentplayingaudio)
   * [ICoreWebView2_8::get_IsMuted property method](/microsoft-edge/webview2/reference/win32/icorewebview2_8#get_ismuted)
   * [ICoreWebView2_8::put_IsMuted property method](/microsoft-edge/webview2/reference/win32/icorewebview2_8#put_ismuted)
   * [ICoreWebView2_8::remove_IsDocumentPlayingAudioChanged event method](/microsoft-edge/webview2/reference/win32/icorewebview2_8#remove_isdocumentplayingaudiochanged)
   * [ICoreWebView2_8::remove_IsMutedChanged event method](/microsoft-edge/webview2/reference/win32/icorewebview2_8#remove_ismutedchanged)

---


<!-- ------------------------------ -->
#### Swipe gesture navigation

By hosting the WebView2 control, your app can enable or disable swiping gesture navigation on touch input-enabled devices. This gesture allows end users to:
*  Swipe left/right (swipe horizontally) to navigate to the previous or next page in the navigation history.
*  Pull to refresh (swipe vertically) the current page.

This feature is currently disabled by default in the browser.  To enable this feature in WebView2, set the `AdditionalBrowserArguments` property, specifying the `--pull-to-refresh` switch.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.IsSwipeNavigationEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.isswipenavigationenabled)

* `CoreWebView2EnvironmentOptions` Class:
   * [CoreWebView2EnvironmentOptions.AdditionalBrowserArguments Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.additionalbrowserarguments)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.IsSwipeNavigationEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings#isswipenavigationenabled)

* `CoreWebView2EnvironmentOptions` Class:
   * [CoreWebView2EnvironmentOptions.AdditionalBrowserArguments Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions#additionalbrowserarguments)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2Settings6` interface:
   * [ICoreWebView2Settings6::get_IsSwipeNavigationEnabled property method](/microsoft-edge/webview2/reference/win32/icorewebview2settings6#get_isswipenavigationenabled)
   * [ICoreWebView2Settings6::put_IsSwipeNavigationEnabled property method](/microsoft-edge/webview2/reference/win32/icorewebview2settings6#put_isswipenavigationenabled)

* `ICoreWebView2EnvironmentOptions` interface:
   * [ICoreWebView2EnvironmentOptions::get_AdditionalBrowserArguments property method](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions#get_additionalbrowserarguments)
   * [ICoreWebView2EnvironmentOptions::put_AdditionalBrowserArguments property method](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions#put_additionalbrowserarguments)

---

<!-- ------------------------------ -->
#### Fullscreen

In WebView2, you can find out when an HTML element enters or leaves full-screen view.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.ContainsFullScreenElement Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.containsfullscreenelement)
   * [CoreWebView2.ContainsFullScreenElementChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.containsfullscreenelementchanged)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.ContainsFullScreenElement Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#containsfullscreenelement)
   * [CoreWebView2.ContainsFullScreenElementChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#containsfullscreenelementchanged)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2` interface:
   * [ICoreWebView2::get_ContainsFullScreenElement property method](/microsoft-edge/webview2/reference/win32/icorewebview2#get_containsfullscreenelement)<!--no put-->
   * [ICoreWebView2::add_ContainsFullScreenElementChanged event method](/microsoft-edge/webview2/reference/win32/icorewebview2#add_containsfullscreenelementchanged)
   * [ICoreWebView2::remove_ContainsFullScreenElementChanged event method](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_containsfullscreenelementchanged)

---

<!-- ------------------------------ -->
#### PDF toolbar

In the browser PDF viewer, there's a PDF-specific toolbar along the top.  In WebView2, you can hide some of the items in the PDF viewer toolbar.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.HiddenPdfToolbarItems Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.hiddenpdftoolbaritems)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.HiddenPdfToolbarItems Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings#hiddenpdftoolbaritems)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Settings7 interface](/microsoft-edge/webview2/reference/win32/icorewebview2settings7)
   * [ICoreWebView2Settings7::get_HiddenPdfToolbarItems property method](/microsoft-edge/webview2/reference/win32/icorewebview2settings7#get_hiddenpdftoolbaritems)
   * [ICoreWebView2Settings7::put_HiddenPdfToolbarItems property method](/microsoft-edge/webview2/reference/win32/icorewebview2settings7#put_hiddenpdftoolbaritems)

---

<!-- ------------------------------ -->
#### Theming

In WebView2, you can customize the color theme as system, light, or dark.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.PreferredColorScheme Property](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.preferredcolorscheme)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.PreferredColorScheme Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile#preferredcolorscheme)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2Profile` interface:
   * [ICoreWebView2Profile::get_PreferredColorScheme property method](/microsoft-edge/webview2/reference/win32/icorewebview2profile#get_preferredcolorscheme)
   * [ICoreWebView2Profile::put_PreferredColorScheme property method](/microsoft-edge/webview2/reference/win32/icorewebview2profile#put_preferredcolorscheme)

---

<!-- ------------------------------ -->
#### Language

The `Language` property sets the default display language for WebView2 that applies to the browser UI (such as context menus and dialogs), along with setting the `accept-language` HTTP header which WebView2 sends to websites.

The `ScriptLocale` property allows the host app to set the default locale for all `Intl` JavaScript APIs and other JavaScript APIs that depend on it, such as `Intl.DateTimeFormat()`, which affects string formatting in time/date formats.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2EnvironmentOptions` Class:
   * [CoreWebView2EnvironmentOptions.Language Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.language)

* `CoreWebView2ControllerOptions` Class:
   * [CoreWebView2ControllerOptions.ScriptLocale Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controlleroptions.scriptlocale)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2EnvironmentOptions` Class:
   * [CoreWebView2EnvironmentOptions.Language Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions#language)

* `CoreWebView2ControllerOptions` Class:
   * [CoreWebView2ControllerOptions.ScriptLocale Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controlleroptions#scriptlocale)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2EnvironmentOptions` interface:
   * [ICoreWebView2EnvironmentOptions::get_Language property method](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions#get_language)
   * [ICoreWebView2EnvironmentOptions::put_Language property method](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions#put_language)

* [ICoreWebView2ControllerOptions2 interface](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions2)
   * [ICoreWebView2ControllerOptions2::get_ScriptLocale property method](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions2#get_scriptlocale)
   * [ICoreWebView2ControllerOptions2::put_ScriptLocale property method](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions2#put_scriptlocale)

---


<!-- ------------------------------ -->
#### New window

WebView2 provides functionality to handle the JavaScript function `window.open()`.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.NewWindowRequested Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.newwindowrequested)

* [CoreWebView2NewWindowRequestedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2newwindowrequestedeventargs)

* [CoreWebView2WindowFeatures Class](/dotnet/api/microsoft.web.webview2.core.corewebview2windowfeatures)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.NewWindowRequested Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#newwindowrequested)

* [CoreWebView2NewWindowRequestedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2newwindowrequestedeventargs)

* [CoreWebView2WindowFeatures Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2windowfeatures)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2` interface:
   * [ICoreWebView2::add_NewWindowRequested event method](/microsoft-edge/webview2/reference/win32/icorewebview2#add_newwindowrequested)
   * [ICoreWebView2::remove_NewWindowRequested event method](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_newwindowrequested)

* [ICoreWebView2NewWindowRequestedEventArgs interface](/microsoft-edge/webview2/reference/win32/icorewebview2newwindowrequestedeventargs)

* [ICoreWebView2WindowFeatures interface](/microsoft-edge/webview2/reference/win32/icorewebview2windowfeatures)

---

<!-- ------------------------------ -->
#### Close window

WebView2 provides functionality to handle the JavaScript function `window.close()`.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.WindowCloseRequested Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.windowcloserequested)

* `CoreWebView2Controller` Class:
   * [CoreWebView2Controller.Close Method](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.close)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.WindowCloseRequested Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#windowcloserequested)

* `CoreWebView2Controller` Class:
   * [CoreWebView2Controller.Close Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#close)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2` interface:
   * [ICoreWebView2::add_WindowCloseRequested event method](/microsoft-edge/webview2/reference/win32/icorewebview2#add_windowcloserequested)
   * [ICoreWebView2::remove_WindowCloseRequested event method](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_windowcloserequested)

* `ICoreWebView2Controller` interface:
   * [ICoreWebView2Controller::Close method](/microsoft-edge/webview2/reference/win32/icorewebview2controller#close)

---

<!-- ------------------------------ -->
#### Document title

Your app can detect when the title of the current top-level document has changed.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.DocumentTitle Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.documenttitle)
   * [CoreWebView2.DocumentTitleChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.documenttitlechanged)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.DocumentTitle Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#documenttitle)
   * [CoreWebView2.DocumentTitleChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#documenttitlechanged)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2` interface:
   * [ICoreWebView2::get_DocumentTitle property method](/microsoft-edge/webview2/reference/win32/icorewebview2#get_documenttitle)<!--no put-->
   * [ICoreWebView2::add_DocumentTitleChanged event method](/microsoft-edge/webview2/reference/win32/icorewebview2#add_documenttitlechanged)
   * [ICoreWebView2::remove_DocumentTitleChanged event method](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_documenttitlechanged)

---

<!-- ------------------------------ -->
#### Favicon 

In WebView2, you can set a [Favicon](https://developer.mozilla.org/docs/Glossary/Favicon) for a website, or get notified when it changes.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.FaviconChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.faviconchanged)
   * [CoreWebView2.FaviconUri Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.faviconuri)
 
##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.FaviconChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#faviconchanged)
   * [CoreWebView2.FaviconUri Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#faviconuri)
 
##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2_15` interface:
   * [ICoreWebView2_15::add_FaviconChanged event method](/microsoft-edge/webview2/reference/win32/icorewebview2_15#add_faviconchanged)
   * [ICoreWebView2_15::remove_FaviconChanged event method](/microsoft-edge/webview2/reference/win32/icorewebview2_15#remove_faviconchanged)
   * [ICoreWebView2_15::get_FaviconUri property method](/microsoft-edge/webview2/reference/win32/icorewebview2_15#get_faviconuri)<!--no put-->

---


<!-- ------------------------------ -->
#### Security and privacy


<!-- ------------------------------ -->
<!-- from RelNotes 111 -->
Tracking prevention enables the host app to control the level of tracking prevention of the WebView2 control that's associated with the user profile.

<!-- 
there's not a regular article about tracking prevention, to cross-link
See also:
* []()
-->

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2EnvironmentOptions` Class:
   * [CoreWebView2EnvironmentOptions.EnableTrackingPrevention Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.enabletrackingprevention)

* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.PreferredTrackingPreventionLevel Property](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.preferredtrackingpreventionlevel)

* [CoreWebView2TrackingPreventionLevel Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2trackingpreventionlevel)
    * `None`
    * `Basic`
    * `Balanced`
    * `Strict`

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2EnvironmentOptions` Class:
   * [CoreWebView2EnvironmentOptions.EnableTrackingPrevention Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions#enabletrackingprevention)

* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.PreferredTrackingPreventionLevel Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile#preferredtrackingpreventionlevel)

* [CoreWebView2TrackingPreventionLevel Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2trackingpreventionlevel)
    * `None`
    * `Basic`
    * `Balanced`
    * `Strict`

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2EnvironmentOptions5 interface](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions5)
   * [ICoreWebView2EnvironmentOptions5::get_EnableTrackingPrevention property method](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions5#get_enabletrackingprevention)
   * [ICoreWebView2EnvironmentOptions5::put_EnableTrackingPrevention property method](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions5#put_enabletrackingprevention)

* [ICoreWebView2Profile3 interface](/microsoft-edge/webview2/reference/win32/icorewebview2profile3)
   * [ICoreWebView2Profile3::get_PreferredTrackingPreventionLevel property method](/microsoft-edge/webview2/reference/win32/icorewebview2profile3#get_preferredtrackingpreventionlevel)
   * [ICoreWebView2Profile3::put_PreferredTrackingPreventionLevel property method](/microsoft-edge/webview2/reference/win32/icorewebview2profile3#put_preferredtrackingpreventionlevel)

* [COREWEBVIEW2_TRACKING_PREVENTION_LEVEL enum](/microsoft-edge/webview2/reference/win32/webview2-idl#corewebview2_tracking_prevention_level)
  * `COREWEBVIEW2_TRACKING_PREVENTION_LEVEL_NONE`
  * `COREWEBVIEW2_TRACKING_PREVENTION_LEVEL_BASIC`
  * `COREWEBVIEW2_TRACKING_PREVENTION_LEVEL_BALANCED`
  * `COREWEBVIEW2_TRACKING_PREVENTION_LEVEL_STRICT`

---


<!-- ------------------------------ -->
<!-- from RelNotes 112 -->
The Managing SmartScreen API includes the `IsReputationCheckingRequired` property, which controls whether SmartScreen is enabled.

<!-- 
todo: is there a regular article about Managing Smartscreen, to cross-link?
See also:
* []()
-->

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.IsReputationCheckingRequired Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.isreputationcheckingrequired)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.IsReputationCheckingRequired Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings#isreputationcheckingrequired)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Settings8 interface](/microsoft-edge/webview2/reference/win32/icorewebview2settings8)
   * [ICoreWebView2Settings8::get_IsReputationCheckingRequired property method](/microsoft-edge/webview2/reference/win32/icorewebview2settings8#get_isreputationcheckingrequired)
   * [ICoreWebView2Settings8::put_IsReputationCheckingRequired property method](/microsoft-edge/webview2/reference/win32/icorewebview2settings8#put_isreputationcheckingrequired)
---


<!-- ====================================================================== -->
## Process management

Get information about running WebView2 processes, exiting processes, and failed processes, so that your app can take action accordingly.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.BrowserProcessId Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.browserprocessid)
   * [CoreWebView2.ProcessFailed Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.processfailed)

* [CoreWebView2BrowserProcessExitedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2browserprocessexitedeventargs)

* `CoreWebView2Environment` Class:
   * [CoreWebView2Environment.BrowserProcessExited Event](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.browserprocessexited)
   * [CoreWebView2Environment.GetProcessInfos Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.getprocessinfos)
   * [CoreWebView2Environment.ProcessInfosChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.processinfoschanged)

* [CoreWebView2ProcessFailedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2processfailedeventargs)

* [CoreWebView2ProcessInfo Class](/dotnet/api/microsoft.web.webview2.core.corewebview2processinfo)


##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.BrowserProcessId Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#browserprocessid)
   * [CoreWebView2.ProcessFailed Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#processfailed)

* [CoreWebView2BrowserProcessExitedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2browserprocessexitedeventargs)

* `CoreWebView2Environment` Class:
   * [CoreWebView2Environment.BrowserProcessExited Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#browserprocessexited)
   * [CoreWebView2Environment.GetProcessInfos Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#getprocessinfos)
   * [CoreWebView2Environment.ProcessInfosChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#processinfoschanged)

* [CoreWebView2ProcessFailedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2processfailedeventargs)

* [CoreWebView2ProcessInfo Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2processinfo)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2` interface:
   * [ICoreWebView2::get_BrowserProcessId property method](/microsoft-edge/webview2/reference/win32/icorewebview2#get_browserprocessid)<!--no put-->
   * [ICoreWebView2::add_ProcessFailed event method](/microsoft-edge/webview2/reference/win32/icorewebview2#add_processfailed)
   * [ICoreWebView2::remove_ProcessFailed event method](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_processfailed)

* [ICoreWebView2BrowserProcessExitedEventArgs interface](/microsoft-edge/webview2/reference/win32/icorewebview2browserprocessexitedeventargs)

* [ICoreWebView2Environment8 interface](/microsoft-edge/webview2/reference/win32/icorewebview2environment8)
   * [ICoreWebView2Environment8::GetProcessInfos method](/microsoft-edge/webview2/reference/win32/icorewebview2environment8#getprocessinfos)
   * [ICoreWebView2Environment8::add_ProcessInfosChanged event method](/microsoft-edge/webview2/reference/win32/icorewebview2environment8#add_processinfoschanged)
   * [ICoreWebView2Environment8::remove_ProcessInfosChanged event method](/microsoft-edge/webview2/reference/win32/icorewebview2environment8#remove_processinfoschanged)

* [ICoreWebView2Environment5 interface](/microsoft-edge/webview2/reference/win32/icorewebview2environment5)
   * [ICoreWebView2Environment5::add_BrowserProcessExited event method](/microsoft-edge/webview2/reference/win32/icorewebview2environment5#add_browserprocessexited)
   * [ICoreWebView2Environment5::remove_BrowserProcessExited event method](/microsoft-edge/webview2/reference/win32/icorewebview2environment5#remove_browserprocessexited)

* [ICoreWebView2ProcessFailedEventArgs interface](/microsoft-edge/webview2/reference/win32/icorewebview2processfailedeventargs)

* [ICoreWebView2ProcessInfo interface](/microsoft-edge/webview2/reference/win32/icorewebview2processinfo)

* [ICoreWebView2ProcessInfoCollection interface](/microsoft-edge/webview2/reference/win32/icorewebview2processinfocollection)

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

* `CoreWebView2` Class:
   * [CoreWebView2.ClearVirtualHostNameToFolderMapping Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.clearvirtualhostnametofoldermapping)
   * [CoreWebView2.Navigate Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.navigate)
   * [CoreWebView2.NavigateToString Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.navigatetostring)
   * [CoreWebView2.NavigateWithWebResourceRequest Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.navigatewithwebresourcerequest)
   * [CoreWebView2.Reload Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.reload)
   * [CoreWebView2.SetVirtualHostNameToFolderMapping Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.setvirtualhostnametofoldermapping)
   * [CoreWebView2.Stop Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.stop)
   * [CoreWebView2.WebResourceRequested Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.webresourcerequested)

* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.IsBuiltInErrorPageEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.isbuiltinerrorpageenabled#microsoft-web-webview2-core-corewebview2settings-isbuiltinerrorpageenabled)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.ClearVirtualHostNameToFolderMapping Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#clearvirtualhostnametofoldermapping)
   * [CoreWebView2.Navigate Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#navigate)
   * [CoreWebView2.NavigateToString Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#navigatetostring)
   * [CoreWebView2.NavigateWithWebResourceRequest Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#navigatewithwebresourcerequest)
   * [CoreWebView2.Reload Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#reload)
   * [CoreWebView2.SetVirtualHostNameToFolderMapping Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#setvirtualhostnametofoldermapping)
   * [CoreWebView2.Stop Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#stop)
   * [CoreWebView2.WebResourceRequested Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#webresourcerequested)

* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.IsBuiltInErrorPageEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings#isbuiltinerrorpageenabled)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2` interface:
   * [ICoreWebView2::add_WebResourceRequested event method](/microsoft-edge/webview2/reference/win32/icorewebview2#add_webresourcerequested)
   * [ICoreWebView2::remove_WebResourceRequested event method](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_webresourcerequested)
   * [ICoreWebView2::Navigate method](/microsoft-edge/webview2/reference/win32/icorewebview2#navigate)
   * [ICoreWebView2::NavigateToString method](/microsoft-edge/webview2/reference/win32/icorewebview2#navigatetostring)
   * [ICoreWebView2::Reload method](/microsoft-edge/webview2/reference/win32/icorewebview2#reload)
   * [ICoreWebView2::Stop method](/microsoft-edge/webview2/reference/win32/icorewebview2#stop)

* `ICoreWebView2_2` interface:
   * [ICoreWebView2_2::NavigateWithWebResourceRequest method](/microsoft-edge/webview2/reference/win32/icorewebview2_2#navigatewithwebresourcerequest)

* `ICoreWebView2_3` interface:
   * [ICoreWebView2_3::ClearVirtualHostNameToFolderMapping method](/microsoft-edge/webview2/reference/win32/icorewebview2_3#clearvirtualhostnametofoldermapping)
   * [ICoreWebView2_3::SetVirtualHostNameToFolderMapping method](/microsoft-edge/webview2/reference/win32/icorewebview2_3#setvirtualhostnametofoldermapping)

* `ICoreWebView2Settings` interface:
   * [ICoreWebView2Settings::get_IsBuiltInErrorPageEnabled property method](/microsoft-edge/webview2/reference/win32/icorewebview2settings#get_isbuiltinerrorpageenabled)
   * [ICoreWebView2Settings::put_IsBuiltInErrorPageEnabled property method](/microsoft-edge/webview2/reference/win32/icorewebview2settings#put_isbuiltinerrorpageenabled)

---


<!-- ------------------------------ -->
#### Navigation history

The history methods allow back and forward navigation in WebView2, and the history events provide information about the changes in history and in WebView2's current source.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.CanGoBack Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.cangoback)
   * [CoreWebView2.CanGoForward Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.cangoforward)
   * [CoreWebView2.GoBack Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.goback)
   * [CoreWebView2.GoForward Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.goforward)
   * [CoreWebView2.HistoryChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.historychanged)
   * [CoreWebView2.Source Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.source)
   * [CoreWebView2.SourceChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.sourcechanged)

* [CoreWebView2SourceChangedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2sourcechangedeventargs)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.CanGoBack Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#cangoback)
   * [CoreWebView2.CanGoForward Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#cangoforward)
   * [CoreWebView2.GoBack Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#goback)
   * [CoreWebView2.GoForward Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#goforward)
   * [CoreWebView2.HistoryChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#historychanged)
   * [CoreWebView2.Source Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#source)
   * [CoreWebView2.SourceChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#sourcechanged)

* [CoreWebView2SourceChangedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sourcechangedeventargs)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2` interface:
   * [ICoreWebView2::add_HistoryChanged event method](/microsoft-edge/webview2/reference/win32/icorewebview2#add_historychanged)
   * [ICoreWebView2::add_SourceChanged event method](/microsoft-edge/webview2/reference/win32/icorewebview2#add_sourcechanged)
   * [ICoreWebView2::get_CanGoBack property method](/microsoft-edge/webview2/reference/win32/icorewebview2#get_cangoback)<!--no put-->
   * [ICoreWebView2::get_CanGoForward property method](/microsoft-edge/webview2/reference/win32/icorewebview2#get_cangoforward)<!--no put-->
   * [ICoreWebView2::get_Source property method](/microsoft-edge/webview2/reference/win32/icorewebview2#get_source)<!--no put-->
   * [ICoreWebView2::GoBack method](/microsoft-edge/webview2/reference/win32/icorewebview2#goback)
   * [ICoreWebView2::GoForward method](/microsoft-edge/webview2/reference/win32/icorewebview2#goforward)
   * [ICoreWebView2::remove_HistoryChanged event method](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_historychanged)
   * [ICoreWebView2::remove_SourceChanged event method](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_sourcechanged)

* [ICoreWebView2SourceChangedEventArgs interface](/microsoft-edge/webview2/reference/win32/icorewebview2sourcechangedeventargs)

---


<!-- ------------------------------ -->
#### Block unwanted navigating

The `NavigationStarting` event allows the app to cancel navigating to specified URLs in WebView2, including for frames.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.NavigationStarting Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.navigationstarting)
   * [CoreWebView2.FrameNavigationStarting Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.framenavigationstarting) - superseded; use `CoreWebView2Frame.NavigationStarting` instead

* `CoreWebView2Frame` Class:
   * [CoreWebView2Frame.NavigationStarting Event](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.navigationstarting)

* [CoreWebView2NavigationStartingEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2navigationstartingeventargs)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.NavigationStarting Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#navigationstarting)
   * [CoreWebView2.FrameNavigationStarting Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#framenavigationstarting) - superseded; use `CoreWebView2Frame.NavigationStarting` instead

* `CoreWebView2Frame` Class:
   * [CoreWebView2Frame.NavigationStarting Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#navigationstarting)

* [CoreWebView2NavigationStartingEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2navigationstartingeventargs)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2` interface:
   * [ICoreWebView2::add_NavigationStarting event method](/microsoft-edge/webview2/reference/win32/icorewebview2#add_navigationstarting)
   * [ICoreWebView2::remove_NavigationStarting event method](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_navigationstarting)
   * [ICoreWebView2::add_FrameNavigationStarting event method](/microsoft-edge/webview2/reference/win32/icorewebview2#add_framenavigationstarting) - superseded; use `ICoreWebView2Frame.add_NavigationStarting` instead
   * [ICoreWebView2::remove_FrameNavigationStarting event method](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_framenavigationstarting) - superseded; use `ICoreWebView2Frame.remove_NavigationStarting` instead

* `ICoreWebView2Frame2` interface:
   * [ICoreWebView2Frame2::add_NavigationStarting event method](/microsoft-edge/webview2/reference/win32/icorewebview2frame2#add_navigationstarting)
   * [ICoreWebView2Frame2::remove_NavigationStarting event method](/microsoft-edge/webview2/reference/win32/icorewebview2frame2#remove_navigationstarting)

* [ICoreWebView2NavigationStartingEventArgs2 interface](/microsoft-edge/webview2/reference/win32/icorewebview2navigationstartingeventargs2)<!--v2-->

---


<!-- ------------------------------ -->
#### Navigation events

With `NavigationStarting` and the other navigation events, the app can be informed of the state of navigation in WebView2.  A _navigation_ is the process for loading a new URL.

See also:
* [Navigation events for WebView2 apps](navigation-events.md)

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.ContentLoading Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.contentloading)
   * [CoreWebView2.DOMContentLoaded Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.domcontentloaded)
   * [CoreWebView2.FrameNavigationCompleted Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.framenavigationcompleted) - superseded; use `CoreWebView2Frame.NavigationCompleted` instead<!--todo: tech review this added note; confirm this API is superseded-->
   * [CoreWebView2.NavigationCompleted Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.navigationcompleted)

* [CoreWebView2ContentLoadingEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2contentloadingeventargs)

* [CoreWebView2DOMContentLoadedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2domcontentloadedeventargs)

* `CoreWebView2Frame` Class:
   * [CoreWebView2Frame.ContentLoading Event](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.contentloading)
   * [CoreWebView2Frame.DOMContentLoaded Event](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.domcontentloaded)
   * [CoreWebView2Frame.NavigationCompleted Event](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.navigationcompleted)

* [CoreWebView2NavigationCompletedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2navigationcompletedeventargs)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.ContentLoading Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#contentloading)
   * [CoreWebView2.DOMContentLoaded Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#domcontentloaded)
   * [CoreWebView2.FrameNavigationCompleted Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#framenavigationcompleted) - superseded; use `CoreWebView2Frame.NavigationCompleted` instead<!--todo: tech review this added note; confirm this API is superseded-->
   * [CoreWebView2.NavigationCompleted Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#navigationcompleted)

* [CoreWebView2ContentLoadingEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2contentloadingeventargs)

* [CoreWebView2DOMContentLoadedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2domcontentloadedeventargs)

* `CoreWebView2Frame` Class:
   * [CoreWebView2Frame.ContentLoading Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#contentloading)
   * [CoreWebView2Frame.DOMContentLoaded Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#domcontentloaded)
   * [CoreWebView2Frame.NavigationCompleted Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#navigationcompleted)

* [CoreWebView2NavigationCompletedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2navigationcompletedeventargs)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2` interface:
   * [ICoreWebView2::add_ContentLoading event method](/microsoft-edge/webview2/reference/win32/icorewebview2#add_contentloading)
   * [ICoreWebView2::add_FrameNavigationCompleted event method](/microsoft-edge/webview2/reference/win32/icorewebview2#add_framenavigationcompleted) - superseded; use `ICoreWebView2Frame::add_NavigationCompleted` instead<!--todo: tech review this added note; confirm this API is superseded-->
   * [ICoreWebView2::add_NavigationCompleted event method](/microsoft-edge/webview2/reference/win32/icorewebview2#add_navigationcompleted)
   * [ICoreWebView2::remove_ContentLoading event method](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_contentloading)
   * [ICoreWebView2::remove_FrameNavigationCompleted event method](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_framenavigationcompleted) - superseded; use `ICoreWebView2Frame::remove_NavigationCompleted` instead<!--todo: tech review this added note; confirm this API is superseded-->
   * [ICoreWebView2::remove_NavigationCompleted event method](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_navigationcompleted)

* `ICoreWebView2_2` interface:
   * [ICoreWebView2_2::add_DOMContentLoaded event method](/microsoft-edge/webview2/reference/win32/icorewebview2_2#add_domcontentloaded)
   * [ICoreWebView2_2::remove_DOMContentLoaded event method](/microsoft-edge/webview2/reference/win32/icorewebview2_2#remove_domcontentloaded)

* `ICoreWebView2Frame2` interface:
   * [ICoreWebView2Frame2::add_ContentLoading event method](/microsoft-edge/webview2/reference/win32/icorewebview2frame2#add_contentloading)
   * [ICoreWebView2Frame2::add_DOMContentLoaded event method](/microsoft-edge/webview2/reference/win32/icorewebview2frame2#add_domcontentloaded)
   * [ICoreWebView2Frame2::add_NavigationCompleted event method](/microsoft-edge/webview2/reference/win32/icorewebview2frame2#add_navigationcompleted)
   * [ICoreWebView2Frame2::remove_ContentLoading event method](/microsoft-edge/webview2/reference/win32/icorewebview2frame2#remove_contentloading)
   * [ICoreWebView2Frame2::remove_DOMContentLoaded event method](/microsoft-edge/webview2/reference/win32/icorewebview2frame2#remove_domcontentloaded)
   * [ICoreWebView2Frame2::remove_NavigationCompleted event method](/microsoft-edge/webview2/reference/win32/icorewebview2frame2#remove_navigationcompleted)

* [ICoreWebView2ContentLoadingEventArgs interface](/microsoft-edge/webview2/reference/win32/icorewebview2contentloadingeventargs)

* [ICoreWebView2DOMContentLoadedEventArgs interface](/microsoft-edge/webview2/reference/win32/icorewebview2domcontentloadedeventargs)

* [ICoreWebView2NavigationCompletedEventArgs interface](/microsoft-edge/webview2/reference/win32/icorewebview2navigationcompletedeventargs)

* [ICoreWebView2NavigationCompletedEventArgs2 interface](/microsoft-edge/webview2/reference/win32/icorewebview2navigationcompletedeventargs2)

---


<!-- ------------------------------ -->
#### Manage network requests in WebView2

The `WebResourceRequested` event allows the app to intercept and override all network requests in WebView2.  The `WebResourceResponseReceived` event allows the app to monitor the request sent to and the response received from the network.

See also:
* [Custom management of network requests](/microsoft-edge/webview2/how-to/webresourcerequested)

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.WebResourceRequested Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.webresourcerequested)
   * [CoreWebView2.WebResourceResponseReceived Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.webresourceresponsereceived)

* [CoreWebView2WebResourceRequestedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2webresourcerequestedeventargs)

* [CoreWebView2WebResourceResponseReceivedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2webresourceresponsereceivedeventargs)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.WebResourceRequested Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#webresourcerequested)
   * [CoreWebView2.WebResourceResponseReceived Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#webresourceresponsereceived)

* [CoreWebView2WebResourceRequestedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2webresourcerequestedeventargs)

* [CoreWebView2WebResourceResponseReceivedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2webresourceresponsereceivedeventargs)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2` interface:
   * [ICoreWebView2::add_WebResourceRequested event method](/microsoft-edge/webview2/reference/win32/icorewebview2#add_webresourcerequested)
   * [ICoreWebView2::remove_WebResourceRequested event method](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_webresourcerequested)

* `ICoreWebView2_2` interface:
   * [ICoreWebView2_2::add_WebResourceResponseReceived event method](/microsoft-edge/webview2/reference/win32/icorewebview2_2#add_webresourceresponsereceived)
   * [ICoreWebView2_2::remove_WebResourceResponseReceived event method](/microsoft-edge/webview2/reference/win32/icorewebview2_2#remove_webresourceresponsereceived)

* [ICoreWebView2WebResourceRequestedEventArgs interface](/microsoft-edge/webview2/reference/win32/icorewebview2webresourcerequestedeventargs)

* [ICoreWebView2WebResourceResponseReceivedEventArgs interface](/microsoft-edge/webview2/reference/win32/icorewebview2webresourceresponsereceivedeventargs)

---


<!-- ------------------------------ -->
#### Custom scheme registration

The `CustomSchemeRegistration` allows registration of custom schemes in WebView2 so that the app can handle the `WebResourceRequested` event for requests to those custom scheme URLs and navigate the WebView2 to such URLs.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2CustomSchemeRegistration Class](/dotnet/api/microsoft.web.webview2.core.corewebview2customschemeregistration)

* `CoreWebView2EnvironmentOptions` Class:
   * [CoreWebView2EnvironmentOptions.CustomSchemeRegistrations Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.customschemeregistrations)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2CustomSchemeRegistration Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2customschemeregistration)

* [CoreWebView2EnvironmentOptions Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions)<!-- todo: remove or comment-out this item?  no CustomSchemeRegistrations property: https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions -->

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

* `CoreWebView2` Class:
   * [CoreWebView2.ClientCertificateRequested Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.clientcertificaterequested)

* [CoreWebView2ClientCertificate Class](/dotnet/api/microsoft.web.webview2.core.corewebview2clientcertificate)

* [CoreWebView2ClientCertificateRequestedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2clientcertificaterequestedeventargs)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.ClientCertificateRequested Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#clientcertificaterequested)

* [CoreWebView2ClientCertificate Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2clientcertificate)

* [CoreWebView2ClientCertificateRequestedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2clientcertificaterequestedeventargs)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_5 interface](/microsoft-edge/webview2/reference/win32/icorewebview2_5)
   * [ICoreWebView2_5::add_ClientCertificateRequested event method](/microsoft-edge/webview2/reference/win32/icorewebview2_5#add_clientcertificaterequested)
   * [ICoreWebView2_5::remove_ClientCertificateRequested event method](/microsoft-edge/webview2/reference/win32/icorewebview2_5#remove_clientcertificaterequested)

* [ICoreWebView2ClientCertificate interface](/microsoft-edge/webview2/reference/win32/icorewebview2clientcertificate)

* [ICoreWebView2ClientCertificateCollection interface](/microsoft-edge/webview2/reference/win32/icorewebview2clientcertificatecollection)<!--n/a for c#-->

* [ICoreWebView2ClientCertificateRequestedEventArgs interface](/microsoft-edge/webview2/reference/win32/icorewebview2clientcertificaterequestedeventargs)

---

<!-- ------------------------------ -->
#### Server certificates

In WebView2, you can use the Server Certificate API to trust the server's TLS certificate at the application level.  This way, your host app can render the page without prompting the user about the TLS error, or your host app can automatically cancel the request. 

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.ServerCertificateErrorDetected Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.servercertificateerrordetected)
   * [CoreWebView2.ClearServerCertificateErrorActionsAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.clearservercertificateerroractionsasync)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.ServerCertificateErrorDetected Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#servercertificateerrordetected)
   * [CoreWebView2.ClearServerCertificateErrorActionsAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#clearservercertificateerroractionsasync)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_14 interface](/microsoft-edge/webview2/reference/win32/icorewebview2_14)
   * [ICoreWebView2_14::add_ServerCertificateErrorDetected event method](/microsoft-edge/webview2/reference/win32/icorewebview2_14#add_servercertificateerrordetected)
   * [ICoreWebView2_14::remove_ServerCertificateErrorDetected event method](/microsoft-edge/webview2/reference/win32/icorewebview2_14#remove_servercertificateerrordetected)
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

* `CoreWebView2` Class:
   * [CoreWebView2.FrameCreated Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.framecreated)

* [CoreWebView2Frame Class](/dotnet/api/microsoft.web.webview2.core.corewebview2frame)

* [CoreWebView2FrameCreatedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2framecreatedeventargs)

* [CoreWebView2FrameInfo Class](/dotnet/api/microsoft.web.webview2.core.corewebview2frameinfo)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.FrameCreated Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#framecreated)

* [CoreWebView2Frame Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame)

* [CoreWebView2FrameCreatedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2framecreatedeventargs)

* [CoreWebView2FrameInfo Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frameinfo)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2_4` interface:
   * [ICoreWebView2_4::add_FrameCreated event method](/microsoft-edge/webview2/reference/win32/icorewebview2_4#add_framecreated)
   * [ICoreWebView2_4::remove_FrameCreated event method](/microsoft-edge/webview2/reference/win32/icorewebview2_4#remove_framecreated)

* [ICoreWebView2Frame interface](/microsoft-edge/webview2/reference/win32/icorewebview2frame)

* [ICoreWebView2FrameCreatedEventArgs interface](/microsoft-edge/webview2/reference/win32/icorewebview2framecreatedeventargs)

* [ICoreWebView2FrameInfo interface](/microsoft-edge/webview2/reference/win32/icorewebview2frameinfo)

* [ICoreWebView2FrameInfoCollection interface](/microsoft-edge/webview2/reference/win32/icorewebview2frameinfocollection)<!--C++ only-->

* [ICoreWebView2FrameInfoCollectionIterator interface](/microsoft-edge/webview2/reference/win32/icorewebview2frameinfocollectioniterator)<!--C++ only-->

---


<!-- ====================================================================== -->
## Authentication

<!-- selling point / value prop: easy configuration of WebView2 apps - support user accounts -->

Your app can handle basic authentication using the WebView2 control.  _Basic authentication_ is a specific authentication approach that's part of the HTTP protocol.

<!-- what's the benefit for end users?  how does it essentially work? what's involved? -->

See also:
* [Basic authentication for WebView2 apps](basic-authentication.md)

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.BasicAuthenticationRequested Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.basicauthenticationrequested)

* [CoreWebView2BasicAuthenticationRequestedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2basicauthenticationrequestedeventargs)

* [CoreWebView2BasicAuthenticationResponse Class](/dotnet/api/microsoft.web.webview2.core.corewebview2basicauthenticationresponse)

* [CoreWebView2HttpHeadersCollectionIterator Class](/dotnet/api/microsoft.web.webview2.core.corewebview2httpheaderscollectioniterator)

* [CoreWebView2HttpRequestHeaders Class](/dotnet/api/microsoft.web.webview2.core.corewebview2httprequestheaders)

* [CoreWebView2HttpResponseHeaders Class](/dotnet/api/microsoft.web.webview2.core.corewebview2httpresponseheaders)


##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.BasicAuthenticationRequested Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#basicauthenticationrequested)

* [CoreWebView2BasicAuthenticationRequestedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2basicauthenticationrequestedeventargs)

* [CoreWebView2BasicAuthenticationResponse Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2basicauthenticationresponse)

* [CoreWebView2HttpHeadersCollectionIterator Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2httpheaderscollectioniterator)

* [CoreWebView2HttpRequestHeaders Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2httprequestheaders)

* [CoreWebView2HttpResponseHeaders Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2httpresponseheaders)


##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_10 interface](/microsoft-edge/webview2/reference/win32/icorewebview2_10)
   * [ICoreWebView2_10::add_BasicAuthenticationRequested event method](/microsoft-edge/webview2/reference/win32/icorewebview2_10#add_basicauthenticationrequested)
   * [ICoreWebView2_10::remove_BasicAuthenticationRequested event method](/microsoft-edge/webview2/reference/win32/icorewebview2_10#remove_basicauthenticationrequested)

* [ICoreWebView2BasicAuthenticationRequestedEventArgs interface](/microsoft-edge/webview2/reference/win32/icorewebview2basicauthenticationrequestedeventargs)

* [ICoreWebView2BasicAuthenticationResponse interface](/microsoft-edge/webview2/reference/win32/icorewebview2basicauthenticationresponse)

* [ICoreWebView2HttpHeadersCollectionIterator interface](/microsoft-edge/webview2/reference/win32/icorewebview2httpheaderscollectioniterator)

* [ICoreWebView2HttpRequestHeaders interface](/microsoft-edge/webview2/reference/win32/icorewebview2httprequestheaders)

* [ICoreWebView2HttpResponseHeaders interface](/microsoft-edge/webview2/reference/win32/icorewebview2httpresponseheaders)

---


<!-- ====================================================================== -->
## Rendering WebView2 in non-framework apps

Use these APIs to set up the WebView2 rendering system if your host app doesn't use a UI framework.  This rendering setup controls how WebView2 renders output into your host app, and how WebView2 handles input, focus, and accessibility.

* **UI framework** - If you're using a UI framework for your app, you should use the WebView2 element that's provided by that UI framework, rather than using these APIs.

* **No UI framework, and not using Composition** - If you're not using a UI framework for your app (for example, if you're using pure Win32 directly), or if your UI framework doesn't have a WebView2 element, then you need to create `CoreWebView2Controller` and render it into your app, using these APIs in this section.

* **No UI framework, and using Composition** - If your app UI is built using [DirectComposition](/windows/win32/directcomp/directcomposition-portal) or [Windows.UI.Composition](/uwp/api/Windows.UI.Composition), you should use `CoreWebView2CompositionController` rather than using these APIs; see [Rendering WebView2 using Composition](#rendering-webview2-using-composition), below.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2Controller` Class:
   * [CoreWebView2Controller.CoreWebView2 Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.corewebview2)
   * [CoreWebView2Controller.Close Method](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.close)

* `CoreWebView2Environment` Class:
   * [CoreWebView2Environment.CreateCoreWebView2ControllerAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createcorewebview2controllerasync)<!--2 overloads-->

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2Controller` Class:
   * [CoreWebView2Controller.CoreWebView2 Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#corewebview2)
   * [CoreWebView2Controller.Close Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#close)

* `CoreWebView2Environment` Class:
   * [CoreWebView2Environment.CreateCoreWebView2ControllerAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#createcorewebview2controllerasync)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2Controller` interface:
   * [ICoreWebView2Controller::get_CoreWebView2 property method](/microsoft-edge/webview2/reference/win32/icorewebview2controller#get_corewebview2)<!--no put-->
   * [ICoreWebView2Controller::Close method](/microsoft-edge/webview2/reference/win32/icorewebview2controller#close)

* `CoreWebView2Environment` Class:
   * [ICoreWebView2Environment::CreateCoreWebView2Controller method](/microsoft-edge/webview2/reference/win32/icorewebview2environment#createcorewebview2controller)

---


<!-- ------------------------------ -->
#### Sizing, positioning, and visibility

<!-- from the removed "window mgmt" h2 section:
WebView2 gives your app access to window-specific attributes, such as positioning, focus, and keyboard accelerators. -->

`CoreWebView2Controller` takes a parent `HWND`. The `Bounds` property sizes and positions the WebView2 relative to the parent `HWND`. The visibility of WebView2 can be toggled using `IsVisible`.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2Controller` Class:
   * [CoreWebView2Controller.Bounds Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.bounds)
   * [CoreWebView2Controller.IsVisible Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.isvisible)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2Controller` Class:
   * [CoreWebView2Controller.Bounds Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#bounds)
   * [CoreWebView2Controller.IsVisible Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#isvisible)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2Controller` interface:
   * [ICoreWebView2Controller::get_Bounds property method](/microsoft-edge/webview2/reference/win32/icorewebview2controller#get_bounds)
   * [ICoreWebView2Controller::put_Bounds property method](/microsoft-edge/webview2/reference/win32/icorewebview2controller#put_bounds)

   * [ICoreWebView2Controller::get_IsVisible property method](/microsoft-edge/webview2/reference/win32/icorewebview2controller#get_isvisible)
   * [ICoreWebView2Controller::put_IsVisible property method](/microsoft-edge/webview2/reference/win32/icorewebview2controller#put_isvisible)

---


<!-- ------------------------------ -->
#### Zooming

WebView2 `ZoomFactor` is used to scale just the web content of the window.  UI scaling is also updated when the user zooms the content by pressing **Ctrl** while rotating the mouse wheel.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2Controller` Class:
   * [CoreWebView2Controller.ZoomFactor Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.zoomfactor)
   * [CoreWebView2Controller.ZoomFactorChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.zoomfactorchanged)
   * [CoreWebView2Controller.SetBoundsAndZoomFactor Method](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.setboundsandzoomfactor)

* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.IsPinchZoomEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.ispinchzoomenabled)
   * [CoreWebView2Settings.IsZoomControlEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.iszoomcontrolenabled)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2Controller` Class:
   * [CoreWebView2Controller.ZoomFactor Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#zoomfactor)
   * [CoreWebView2Controller.ZoomFactorChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#zoomfactorchanged)
   * [CoreWebView2Controller.SetBoundsAndZoomFactor Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#setboundsandzoomfactor)

* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.IsPinchZoomEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings#ispinchzoomenabled)
   * [CoreWebView2Settings.IsZoomControlEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings#iszoomcontrolenabled)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2Controller` interface:
   * [ICoreWebView2Controller::get_ZoomFactor property method](/microsoft-edge/webview2/reference/win32/icorewebview2controller#get_zoomfactor)
   * [ICoreWebView2Controller::put_ZoomFactor property method](/microsoft-edge/webview2/reference/win32/icorewebview2controller#put_zoomfactor)
   * [ICoreWebView2Controller::add_ZoomFactorChanged event method](/microsoft-edge/webview2/reference/win32/icorewebview2controller#add_zoomfactorchanged)
   * [ICoreWebView2Controller::remove_ZoomFactorChanged event method](/microsoft-edge/webview2/reference/win32/icorewebview2controller#remove_zoomfactorchanged)
   * [ICoreWebView2Controller::SetBoundsAndZoomFactor method](/microsoft-edge/webview2/reference/win32/icorewebview2controller#setboundsandzoomfactor)

* `ICoreWebView2Settings` interface:
   * [ICoreWebView2Settings::get_IsZoomControlEnabled property method](/microsoft-edge/webview2/reference/win32/icorewebview2settings#get_iszoomcontrolenabled)
   * [ICoreWebView2Settings::put_IsZoomControlEnabled property method](/microsoft-edge/webview2/reference/win32/icorewebview2settings#put_iszoomcontrolenabled)

* [ICoreWebView2Settings5 interface](/microsoft-edge/webview2/reference/win32/icorewebview2settings5)
   * [ICoreWebView2Settings5::get_IsPinchZoomEnabled property method](/microsoft-edge/webview2/reference/win32/icorewebview2settings5#get_ispinchzoomenabled)
   * [ICoreWebView2Settings5::put_IsPinchZoomEnabled property method](/microsoft-edge/webview2/reference/win32/icorewebview2settings5#put_ispinchzoomenabled)

---


<!-- ------------------------------ -->
#### Rasterization scale

The RasterizationScale API scales all WebView2 UI including context menus, tooltip, and popups.  The app can set whether the WebView2 should detect monitor scale changes and automatically update the RasterizationScale.  `BoundsMode` is used to configure whether the Bounds property is interpreted as raw pixels, or DIPs (which need to be scaled by `RasterizationScale`).

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2Controller` Class:
   * [CoreWebView2Controller.BoundsMode Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.boundsmode)
   * [CoreWebView2Controller.RasterizationScale Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.rasterizationscale)
   * [CoreWebview2Controller.RasterizationScaleChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.rasterizationscalechanged)
   * [CoreWebview2Controller.ShouldDetectMonitorScaleChanges Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.shoulddetectmonitorscalechanges)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2Controller` Class:
   * [CoreWebView2Controller.BoundsMode Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#boundsmode)
   * [CoreWebView2Controller.RasterizationScale Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#rasterizationscale)
   * [CoreWebview2Controller.RasterizationScaleChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#rasterizationscalechanged)
   * [CoreWebview2Controller.ShouldDetectMonitorScaleChanges Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#shoulddetectmonitorscalechanges)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Controller3 interface](/microsoft-edge/webview2/reference/win32/icorewebview2controller3)
   * [ICoreWebView2Controller3::add_RasterizationScaleChanged event method](/microsoft-edge/webview2/reference/win32/icorewebview2controller3#add_rasterizationscalechanged)
   * [ICoreWebView2Controller3::get_BoundsMode property method](/microsoft-edge/webview2/reference/win32/icorewebview2controller3#get_boundsmode)
   * [ICoreWebView2Controller3::get_RasterizationScale property method](/microsoft-edge/webview2/reference/win32/icorewebview2controller3#get_rasterizationscale)
   * [ICoreWebView2Controller3::get_ShouldDetectMonitorScaleChanges property method](/microsoft-edge/webview2/reference/win32/icorewebview2controller3#get_shoulddetectmonitorscalechanges)
   * [ICoreWebView2Controller3::put_BoundsMode property method](/microsoft-edge/webview2/reference/win32/icorewebview2controller3#put_boundsmode)
   * [ICoreWebView2Controller3::put_RasterizationScale property method](/microsoft-edge/webview2/reference/win32/icorewebview2controller3#put_rasterizationscale)
   * [ICoreWebView2Controller3::put_ShouldDetectMonitorScaleChanges property method](/microsoft-edge/webview2/reference/win32/icorewebview2controller3#put_shoulddetectmonitorscalechanges)
   * [ICoreWebView2Controller3::remove_RasterizationScaleChanged event method](/microsoft-edge/webview2/reference/win32/icorewebview2controller3#remove_rasterizationscalechanged)

---


<!-- ------------------------------ -->
#### Focus and tabbing

The WebView2 control raises events to let the app know when the control gains focus or loses focus. For tabbing (pressing the **Tab** key), there's an API to move focus into WebView2 and an event for WebView2 to request the app to take focus back.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebview2Controller` Class:
   * [CoreWebview2Controller.GotFocus Event](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.gotfocus)
   * [CoreWebview2Controller.LostFocus Event](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.lostfocus)
   * [CoreWebview2Controller.MoveFocus Method](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.movefocus)
   * [CoreWebview2Controller.MoveFocusRequested Event](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.movefocusrequested)

* [CoreWebView2MoveFocusRequestedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2movefocusrequestedeventargs)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebview2Controller` Class:
   * [CoreWebview2Controller.GotFocus Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#gotfocus)
   * [CoreWebview2Controller.LostFocus Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#lostfocus)
   * [CoreWebview2Controller.MoveFocus Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#movefocus)
   * [CoreWebview2Controller.MoveFocusRequested Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#movefocusrequested)

* [CoreWebView2MoveFocusRequestedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2movefocusrequestedeventargs)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebview2Controller` interface:
   * [ICoreWebview2Controller::add_GotFocus event method](/microsoft-edge/webview2/reference/win32/icorewebview2controller#add_gotfocus)
   * [ICoreWebview2Controller::add_LostFocus event method](/microsoft-edge/webview2/reference/win32/icorewebview2controller#add_lostfocus)
   * [ICoreWebview2Controller::add_MoveFocusRequested event method](/microsoft-edge/webview2/reference/win32/icorewebview2controller#add_movefocusrequested)
   * [ICoreWebview2Controller::MoveFocus method](/microsoft-edge/webview2/reference/win32/icorewebview2controller#movefocus)
   * [ICoreWebview2Controller::remove_GotFocus event method](/microsoft-edge/webview2/reference/win32/icorewebview2controller#remove_gotfocus)
   * [ICoreWebview2Controller::remove_LostFocus event method](/microsoft-edge/webview2/reference/win32/icorewebview2controller#remove_lostfocus)
   * [ICoreWebview2Controller::remove_MoveFocusRequested event method](/microsoft-edge/webview2/reference/win32/icorewebview2controller#remove_movefocusrequested)

* [ICoreWebView2MoveFocusRequestedEventArgs interface](/microsoft-edge/webview2/reference/win32/icorewebview2movefocusrequestedeventargs)

---


<!-- ------------------------------ -->
#### Parent window

WebView2 can be reparented to a different parent window handle (`HWND`).  WebView2 also needs to be notified when the app's position on the screen has changed.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebview2Controller` Class:
   * [CoreWebview2Controller.NotifyParentWindowPositionChanged Method](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.notifyparentwindowpositionchanged)
   * [CoreWebview2Controller.ParentWindow Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.parentwindow)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebview2Controller` Class:
   * [CoreWebview2Controller.NotifyParentWindowPositionChanged Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#notifyparentwindowpositionchanged)
   * [CoreWebview2Controller.ParentWindow Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#parentwindow)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebview2Controller` interface:
   * [ICoreWebview2Controller::get_ParentWindow property method](/microsoft-edge/webview2/reference/win32/icorewebview2controller#get_parentwindow)
   * [ICoreWebview2Controller::NotifyParentWindowPositionChanged method](/microsoft-edge/webview2/reference/win32/icorewebview2controller#notifyparentwindowpositionchanged)
   * [ICoreWebview2Controller::put_ParentWindow property method](/microsoft-edge/webview2/reference/win32/icorewebview2controller#put_parentwindow)

---


<!-- ------------------------------ -->
#### Keyboard accelerators

When WebView2 has focus, it directly receives input from the user. An app may want to intercept and handle certain accelerator key combinations, or disable the normal browser accelerator key behaviors.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2AcceleratorKeyPressedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2acceleratorkeypressedeventargs)

* `CoreWebView2Controller` Class:
   * [CoreWebView2Controller.AcceleratorKeyPressed Event](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.acceleratorkeypressed)

* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.AreBrowserAcceleratorKeysEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.arebrowseracceleratorkeysenabled)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2AcceleratorKeyPressedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2acceleratorkeypressedeventargs)

* `CoreWebView2Controller` Class:
   * [CoreWebView2Controller.AcceleratorKeyPressed Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#acceleratorkeypressed)

* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.AreBrowserAcceleratorKeysEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings#arebrowseracceleratorkeysenabled)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2AcceleratorKeyPressedEventArgs interface](/microsoft-edge/webview2/reference/win32/icorewebview2acceleratorkeypressedeventargs)

* `ICoreWebView2Controller` interface:
   * [ICoreWebView2Controller::add_AcceleratorKeyPressed event method](/microsoft-edge/webview2/reference/win32/icorewebview2controller#add_acceleratorkeypressed)
   * [ICoreWebView2Controller::remove_AcceleratorKeyPressed event method](/microsoft-edge/webview2/reference/win32/icorewebview2controller#remove_acceleratorkeypressed)

* [ICoreWebView2Settings3 interface](/microsoft-edge/webview2/reference/win32/icorewebview2settings3)
   * [ICoreWebView2Settings3::get_AreBrowserAcceleratorKeysEnabled property method](/microsoft-edge/webview2/reference/win32/icorewebview2settings3#get_arebrowseracceleratorkeysenabled)
   * [ICoreWebView2Settings3::put_AreBrowserAcceleratorKeysEnabled property method](/microsoft-edge/webview2/reference/win32/icorewebview2settings3#put_arebrowseracceleratorkeysenabled)

---


<!-- ------------------------------ -->
#### Default background color

WebView2 can specify a default background color.  The color can be any opaque color, or transparent.  This color will be used if the HTML page doesn't set its own background color.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2Controller` Class:
   * [CoreWebView2Controller.DefaultBackgroundColor Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.defaultbackgroundcolor)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2Controller` Class:
   * [CoreWebView2Controller.DefaultBackgroundColor Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#defaultbackgroundcolor)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Controller2 interface](/microsoft-edge/webview2/reference/win32/icorewebview2controller2)
   * [ICoreWebView2Controller2::get_DefaultBackgroundColor property method](/microsoft-edge/webview2/reference/win32/icorewebview2controller2#get_defaultbackgroundcolor)
   * [ICoreWebView2Controller2::put_DefaultBackgroundColor property method](/microsoft-edge/webview2/reference/win32/icorewebview2controller2#put_defaultbackgroundcolor)

---


<!-- ====================================================================== -->
## Rendering WebView2 using Composition

For composition-based WebView2 rendering, use `CoreWebView2Environment` to create a `CoreWebView2CompositionController`.  `CoreWebView2CompositionController` provides the same APIs as `CoreWebView2Controller`, but also includes APIs for composition-based rendering.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2CompositionController Class](/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller)

* `CoreWebView2Environment` Class:
   * [CoreWebView2Environment.CreateCoreWebView2CompositionControllerAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createcorewebview2compositioncontrollerasync)<!--2 overloads-->

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2CompositionController Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2compositioncontroller)

* `CoreWebView2Environment` Class:
   * [CoreWebView2Environment.CreateCoreWebView2CompositionControllerAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#createcorewebview2compositioncontrollerasync)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2CompositionController interface](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller)

* `ICoreWebView2Environment3` interface:
   * [ICoreWebView2Environment3::CreateCoreWebview2CompositionController method](/microsoft-edge/webview2/reference/win32/icorewebview2environment3#createcorewebview2compositioncontroller)

---


<!-- ------------------------------ -->
#### Connecting to the visual tree

WebView2 can connect its composition tree to an [IDCompositionVisual](/windows/win32/api/dcomp/nn-dcomp-idcompositionvisual), [IDCompositionTarget](/windows/win32/api/dcomp/nn-dcomp-idcompositiontarget), or `Windows::UI::Composition::ContainerVisual`.<!--link these?  both plats?  not linked in wv2 api ref.  these are c++ not .net links -->

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2CompositionController` Class:
   * [CoreWebView2CompositionController.RootVisualTarget Property](/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.rootvisualtarget)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2CompositionController` Class:
   * [CoreWebView2CompositionController.RootVisualTarget Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2compositioncontroller#rootvisualtarget)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2CompositionController` interface:
   * [ICoreWebView2CompositionController::get_RootVisualTarget property method](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller#get_rootvisualtarget)
   * [ICoreWebView2CompositionController::put_RootVisualTarget property method](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller#put_rootvisualtarget)

---

<!-- ------------------------------ -->
#### Forwarding input

Spatial input (mouse, touch, pen) is received by the application and must be sent to WebView2.  WebView2 notifies the app when the cursor should be updated based on the mouse position.

<!-- .RootVisualTarget is listed above -->

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2CompositionController` Class:
   * [CoreWebView2CompositionController.Cursor Property](/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.cursor)
   * [CoreWebView2CompositionController.CursorChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.cursorchanged)
   * [CoreWebView2CompositionController.SystemCursorId Property](/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.systemcursorid)
   * [CoreWebView2CompositionController.SendMouseInput Method](/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.sendmouseinput)
   * [CoreWebView2CompositionController.SendPointerInput Method](/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.sendpointerinput)
   
* `CoreWebView2Environment` Class:
   * [CoreWebView2Environment.CreateCoreWebView2PointerInfo Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createcorewebview2pointerinfo)

* [CoreWebView2PointerInfo Class](/dotnet/api/microsoft.web.webview2.core.corewebview2pointerinfo)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2CompositionController` Class:
   * [CoreWebView2CompositionController.Cursor Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2compositioncontroller#cursor)
   * [CoreWebView2CompositionController.CursorChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2compositioncontroller#cursorchanged)
   * [CoreWebView2CompositionController.SendMouseInput Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2compositioncontroller#sendmouseinput)
   * [CoreWebView2CompositionController.SendPointerInput Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2compositioncontroller#sendpointerinput)

* `CoreWebView2Environment` Class:
   * [CoreWebView2Environment.CreateCoreWebView2PointerInfo Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#createcorewebview2pointerinfo)

* [CoreWebView2PointerInfo Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2pointerinfo)

<!--
.NET has CompositionController.SystemCursorId member:
https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.systemcursorid
WinRT lacks CompositionController.SystemCursorId member:
https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2compositioncontroller
-->

##### [Win32/C++](#tab/win32cpp)

* `CoreWebView2CompositionController` interface:
   * [ICoreWebView2CompositionController::get_Cursor property method](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller#get_cursor)<!--no put-->
   * [ICoreWebView2CompositionController::add_CursorChanged event method](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller#add_cursorchanged)
   * [ICoreWebView2CompositionController::remove_CursorChanged event method](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller#remove_cursorchanged)
   * [ICoreWebView2CompositionController::get_SystemCursorId property method](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller#get_systemcursorid)<!--no put-->
   * [ICoreWebView2CompositionController::SendMouseInput method](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller#sendmouseinput)
   * [ICoreWebView2CompositionController::SendPointerInput method](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller#sendpointerinput)
    
* `ICoreWebView2Environment3` interface:
   * [ICoreWebView2Environment3::CreateCoreWebView2PointerInfo method](/microsoft-edge/webview2/reference/win32/icorewebview2environment3#createcorewebview2pointerinfo)

* [ICoreWebView2PointerInfo interface](/microsoft-edge/webview2/reference/win32/icorewebview2pointerinfo)

---


<!-- ------------------------------ -->
#### Drag and drop

Dragging from a WebView2 control to another application is supported by default. However, dragging _to_ a WebView2 control requires that when the host app receives an `IDropTarget` event from the system, the host app must forward the event to the WebView2 control.  Dragging to a WebView2 control includes drag-and-drop operations that are entirely within a WebView2 control.

Use the following APIs to forward `IDropTarget` events from the system to the WebView2 control.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2CompositionController` Class:
   * [CoreWebView2CompositionController.DragLeave Method](/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.dragleave)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2CompositionController` Class:
   * [CoreWebView2CompositionController.DragLeave Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2compositioncontroller#dragleave)

* [ICoreWebView2CompositionControllerInterop2 interface](/microsoft-edge/webview2/reference/winrt/interop/icorewebview2compositioncontrollerinterop2)
   * [ICoreWebView2CompositionControllerInterop2.DragEnter method](/microsoft-edge/webview2/reference/winrt/interop/icorewebview2compositioncontrollerinterop2#dragenter)
   * [ICoreWebView2CompositionControllerInterop2.DragLeave method](/microsoft-edge/webview2/reference/winrt/interop/icorewebview2compositioncontrollerinterop2#dragleave)
   * [ICoreWebView2CompositionControllerInterop2.DragOver method](/microsoft-edge/webview2/reference/winrt/interop/icorewebview2compositioncontrollerinterop2#dragover)
   * [ICoreWebView2CompositionControllerInterop2.Drop method](/microsoft-edge/webview2/reference/winrt/interop/icorewebview2compositioncontrollerinterop2#drop)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2CompositionController3 interface](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller3)
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

* `ICoreWebView2CompositionController2` interface:
   * [ICoreWebView2CompositionController2::get_AutomationProvider property method](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller2#get_automationprovider)<!--no put-->

* [ICoreWebView2Environment4 interface](/microsoft-edge/webview2/reference/win32/icorewebview2environment4)
   * [ICoreWebView2Environment4::GetAutomationProviderForWindow method](/microsoft-edge/webview2/reference/win32/icorewebview2environment4#getautomationproviderforwindow)<!--C++ only-->

---

<!-- ====================================================================== -->
## User data

Manage the user data folder (UDF), which is a folder on the user's machine.  The UDF contains data related to the host app and WebView2.  WebView2 apps use user data folders to store browser data, such as cookies, permissions, and cached resources.

See also:
* [Manage user data folders](user-data-folder.md)

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2Environment` Class:
   * [CoreWebView2Environment.CreateCoreWebView2CompositionControllerAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createcorewebview2compositioncontrollerasync)
   * [CoreWebView2Environment.CreateCoreWebView2ControllerOptions Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createcorewebview2controlleroptions)
   * [CoreWebView2Environment.CreateCoreWebView2ControllerWithOptions Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createcorewebview2controllerasync)
   * [CoreWebView2Environment.UserDataFolder Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.userdatafolder)

* `CoreWebView2EnvironmentOptions` Class:
   * [CoreWebView2EnvironmentOptions.ExclusiveUserDataFolderAccess Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.exclusiveuserdatafolderaccess)

* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.ClearBrowsingDataAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.clearbrowsingdataasync)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2Environment` Class:
   * [CoreWebView2Environment.CreateCoreWebView2CompositionControllerAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#createcorewebview2compositioncontrollerasync)
   * [CoreWebView2Environment.CreateCoreWebView2ControllerAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#createcorewebview2controllerasync)
   * [CoreWebView2Environment.CreateCoreWebView2ControllerAsync(options) Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#createcorewebview2controllerasync-1)
   * [CoreWebView2Environment.CreateCoreWebView2ControllerOptions Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#createcorewebview2controlleroptions)
   * [CoreWebView2Environment.UserDataFolder Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#userdatafolder)

* `CoreWebView2EnvironmentOptions` Class:
   * [CoreWebView2EnvironmentOptions.ExclusiveUserDataFolderAccess Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions#exclusiveuserdatafolderaccess)

* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.ClearBrowsingDataAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile#clearbrowsingdataasync)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Environment7 interface](/microsoft-edge/webview2/reference/win32/icorewebview2environment7)
   * [ICoreWebView2Environment7::get_UserDataFolder property method](/microsoft-edge/webview2/reference/win32/icorewebview2environment7#get_userdatafolder)<!--no put-->

* [ICoreWebView2Environment10 interface](/microsoft-edge/webview2/reference/win32/icorewebview2environment10)
   * [ICoreWebView2Environment10::CreateCoreWebView2CompositionControllerWithOptions method](/microsoft-edge/webview2/reference/win32/icorewebview2environment10#createcorewebview2compositioncontrollerwithoptions)<!-- c#: might ~=CreateCoreWebView2CompositionControllerAsync -->
   * [ICoreWebView2Environment10::CreateCoreWebView2ControllerOptions method](/microsoft-edge/webview2/reference/win32/icorewebview2environment10#createcorewebview2controlleroptions)
   * [ICoreWebView2Environment10::CreateCoreWebView2ControllerWithOptions method](/microsoft-edge/webview2/reference/win32/icorewebview2environment10#createcorewebview2controllerwithoptions)

* [ICoreWebView2EnvironmentOptions2 interface](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions2)
   * [ICoreWebView2EnvironmentOptions2::get_ExclusiveUserDataFolderAccess property method](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions2#get_exclusiveuserdatafolderaccess)
   * [ICoreWebView2EnvironmentOptions2::put_ExclusiveUserDataFolderAccess property method](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions2#put_exclusiveuserdatafolderaccess)

* [ICoreWebView2Profile2 interface](/microsoft-edge/webview2/reference/win32/icorewebview2profile2)
   * [ICoreWebView2Profile2::ClearBrowsingData method](/microsoft-edge/webview2/reference/win32/icorewebview2profile2#clearbrowsingdata)
   * [ICoreWebView2Profile2::ClearBrowsingDataAll method](/microsoft-edge/webview2/reference/win32/icorewebview2profile2#clearbrowsingdataall)
   * [ICoreWebView2Profile2::ClearBrowsingDataInTimeRange method](/microsoft-edge/webview2/reference/win32/icorewebview2profile2#clearbrowsingdataintimerange)

---


<!-- ------------------------------ -->
#### Multiple profiles

Manage multiple profiles under a single user data folder.

See also:
* [Support multiple profiles under a single user data folder](./multi-profile-support.md)


##### [.NET/C#](#tab/dotnetcsharp)

<!-- resume -->
Create an options object that defines a profile:
* `CoreWebView2Environment` Class:
   * [CoreWebView2Environment.CreateCoreWebView2ControllerOptions Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createcorewebview2controlleroptions)
* [CoreWebView2ControllerOptions Class](/dotnet/api/microsoft.web.webview2.core.corewebview2controlleroptions)

<!-- Ref topic breakout: one webpage per overload; covers all overloads of the method, no need for per-overload links -->
Create a WebView2 control that uses the profile:
* `CoreWebView2Environment` Class:
   * [CoreWebView2Environment.CreateCoreWebView2CompositionControllerAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createcorewebview2compositioncontrollerasync)
   * [CoreWebView2Environment.CreateCoreWebView2ControllerAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createcorewebview2controllerasync)

Access and manipulate the profile:
* `CoreWebView2` Class:
   * [CoreWebView2.Profile Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.profile#microsoft-web-webview2-core-corewebview2-profile)
* [CoreWebView2Profile Class](/dotnet/api/microsoft.web.webview2.core.corewebview2profile)


##### [WinRT/C#](#tab/winrtcsharp)

Create an options object that defines a profile:
* `CoreWebView2Environment` Class:
   * [CoreWebView2Environment.CreateCoreWebView2ControllerOptions Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#createcorewebview2controlleroptions)
* [CoreWebView2ControllerOptions Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controlleroptions)

<!-- Ref topic breakout: one webpage per type; very long webpage covers all methods of the type including overloads.  2nd overload's url adds -1 at end -->
<!-- preserve sequence per Ref webpage.  for clarity + brevity, list param names, lowercased -->
Create a WebView2 control that uses the profile:
* `CoreWebView2Environment` Class:
   * [CoreWebView2Environment.CreateCoreWebView2CompositionControllerAsync(parentWindow) Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#createcorewebview2compositioncontrollerasync)
   * [CoreWebView2Environment.CreateCoreWebView2CompositionControllerAsync(parentWindow, options) Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#createcorewebview2compositioncontrollerasync-1)
   * [CoreWebView2Environment.CreateCoreWebView2ControllerAsync(parentWindow, options) Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#createcorewebview2controllerasync)
   * [CoreWebView2Environment.CreateCoreWebView2ControllerAsync(parentWindow) Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#createcorewebview2controllerasync-1)

Access and manipulate the profile:
* `CoreWebView2` Class:
   * [CoreWebView2.Profile Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#profile)
* [CoreWebView2Profile Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile)


##### [Win32/C++](#tab/win32cpp)

Create an options object that defines a profile:
* `ICoreWebView2Environment10` interface:
   * [ICoreWebView2Environment10::CreateCoreWebView2ControllerOptions method](/microsoft-edge/webview2/reference/win32/icorewebview2environment10#createcorewebview2controlleroptions)
* [ICoreWebView2ControllerOptions interface](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions)

<!-- Ref topic breakout: small dedicated iface.  link to iface to bring up overview, and link to methods to show method names -->
Create a WebView2 control that uses the profile:
* [ICoreWebView2Environment10 interface](/microsoft-edge/webview2/reference/win32/icorewebview2environment10)
   * [ICoreWebView2Environment10::CreateCoreWebView2ControllerWithOptions method](/microsoft-edge/webview2/reference/win32/icorewebview2environment10#createcorewebview2controllerwithoptions)
   * [ICoreWebView2Environment10::CreateCoreWebView2CompositionControllerWithOptions method](/microsoft-edge/webview2/reference/win32/icorewebview2environment10#createcorewebview2compositioncontrollerwithoptions)

Access and manipulate the profile:
* [ICoreWebView2_13 interface](/microsoft-edge/webview2/reference/win32/icorewebview2_13)
   * [ICoreWebView2_13::get_Profile property method](/microsoft-edge/webview2/reference/win32/icorewebview2_13#get_profile)<!--no put-->
* [ICoreWebView2Profile interface](/microsoft-edge/webview2/reference/win32/icorewebview2profile)
* [ICoreWebView2Profile2 interface](/microsoft-edge/webview2/reference/win32/icorewebview2profile2) - Methods to clear browsing data.<!--keep text-->

---


<!-- ====================================================================== -->
## Performance and debugging

Analyze and debug performance, handle performance-related events, and manage memory usage to increase the responsiveness of your app.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.MemoryUsageTargetLevel Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.memoryusagetargetlevel)
   * [CoreWebView2.TrySuspendAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.trysuspendasync)
   * [CoreWebView2.IsSuspended Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.issuspended)
   * [CoreWebView2.Resume Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.resume)
   * [CoreWebView2.OpenTaskManagerWindow Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.opentaskmanagerwindow) 

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.MemoryUsageTargetLevel Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#memoryusagetargetlevel)
   * [CoreWebView2.TrySuspendAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#trysuspendasync)
   * [CoreWebView2.IsSuspended Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#issuspended)
   * [CoreWebView2.Resume Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#resume)
   * [CoreWebView2.OpenTaskManagerWindow Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#opentaskmanagerwindow)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2Experimental5` interface:<!--todo: delete "experimental" links?-->
   * [ICoreWebView2Experimental5::get_MemoryUsageTargetLevel property method](/microsoft-edge/webview2/reference/win32/icorewebview2experimental5#get_memoryusagetargetlevel)
   * [ICoreWebView2Experimental5::put_MemoryUsageTargetLevel property method](/microsoft-edge/webview2/reference/win32/icorewebview2experimental5#put_memoryusagetargetlevel)

* `ICoreWebView2_3` interface:
   * [ICoreWebView2_3::TrySuspend method](/microsoft-edge/webview2/reference/win32/icorewebview2_3#trysuspend)
   * [ICoreWebView2_3::get_IsSuspended property method](/microsoft-edge/webview2/reference/win32/icorewebview2_3#get_issuspended)<!--no put-->
   * [ICoreWebView2_3::Resume method](/microsoft-edge/webview2/reference/win32/icorewebview2_3#resume)

* `ICoreWebView2_6` interface:
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
* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.AreDevToolsEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.aredevtoolsenabled)
* `CoreWebView2` Class:
   * [CoreWebView2.OpenDevToolsWindow Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.opendevtoolswindow)

Call:
* `CoreWebView2` Class:
   * [CoreWebView2.CallDevToolsProtocolMethodAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.calldevtoolsprotocolmethodasync)
   * [CoreWebView2.CallDevToolsProtocolMethodForSessionAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.calldevtoolsprotocolmethodforsessionasync)

Receiver:
* `CoreWebView2` Class:
   * [CoreWebView2.GetDevToolsProtocolEventReceiver Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.getdevtoolsprotocoleventreceiver)
* [CoreWebView2DevToolsProtocolEventReceivedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2devtoolsprotocoleventreceivedeventargs)
* [CoreWebView2DevToolsProtocolEventReceiver Class](/dotnet/api/microsoft.web.webview2.core.corewebview2devtoolsprotocoleventreceiver)

##### [WinRT/C#](#tab/winrtcsharp)

Open:
* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.AreDevToolsEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings#aredevtoolsenabled)
* `CoreWebView2` Class:
   * [CoreWebView2.OpenDevToolsWindow Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#opendevtoolswindow)

Call:
* `CoreWebView2` Class:
   * [CoreWebView2.CallDevToolsProtocolMethodAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#calldevtoolsprotocolmethodasync)
   * [CoreWebView2.CallDevToolsProtocolMethodForSessionAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#calldevtoolsprotocolmethodforsessionasync)

Receiver:
* `CoreWebView2` Class:
   * [CoreWebView2.GetDevToolsProtocolEventReceiver Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#getdevtoolsprotocoleventreceiver)
* [CoreWebView2DevToolsProtocolEventReceivedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2devtoolsprotocoleventreceivedeventargs)
* [CoreWebView2DevToolsProtocolEventReceiver Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2devtoolsprotocoleventreceiver)

##### [Win32/C++](#tab/win32cpp)

Open:
* `ICoreWebView2Settings` interface:
   * [ICoreWebView2Settings::get_AreDevToolsEnabled property method](/microsoft-edge/webview2/reference/win32/icorewebview2settings#get_aredevtoolsenabled)
   * [ICoreWebView2Settings::put_AreDevToolsEnabled property method](/microsoft-edge/webview2/reference/win32/icorewebview2settings#put_aredevtoolsenabled)
* `ICoreWebView2` interface:
   * [ICoreWebView2::OpenDevToolsWindow method](/microsoft-edge/webview2/reference/win32/icorewebview2#opendevtoolswindow)

Call:
* `ICoreWebView2` interface:
   * [ICoreWebView2::CallDevToolsProtocolMethod method](/microsoft-edge/webview2/reference/win32/icorewebview2#calldevtoolsprotocolmethod)
* `ICoreWebView2_11` interface:
   * [ICoreWebView2_11::CallDevToolsProtocolMethodForSession method](/microsoft-edge/webview2/reference/win32/icorewebview2_11#calldevtoolspotocolmethodforsession)

Receiver:
* `ICoreWebView2` interface:
   * [ICoreWebView2::GetDevToolsProtocolEventReceiver method](/microsoft-edge/webview2/reference/win32/icorewebview2#getdevtoolsprotocoleventreceiver)
* [ICoreWebView2DevToolsProtocolEventReceiver interface](/microsoft-edge/webview2/reference/win32/icorewebview2devtoolsprotocoleventreceiver)
* [ICoreWebView2DevToolsProtocolEventReceivedEventArgs interface](/microsoft-edge/webview2/reference/win32/icorewebview2devtoolsprotocoleventreceivedeventargs)

---


<!-- ====================================================================== -->
## See also

* [Introduction to Microsoft Edge WebView2](../index.md)
* [WebView2 API Reference](../webview2-api-reference.md) - API Reference links for additional platforms and languages, such as WinRT/C++ (COM).
