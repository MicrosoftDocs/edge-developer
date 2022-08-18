---
title: Visual vs. windowed hosting of WebView2
description: Visual vs. windowed hosting of WebView2.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 06/30/2022
---
# Visual vs. windowed hosting of WebView2

Sentence 1 clarifying the title: the difference between visual hosting vs. windowed hosting of the WebView2 control by your host app.  Paragraph 1 nutshell summary defining the difference between visual hosting vs. windowed hosting of the WebView2 control by your host app:
*  Difference 1.
*  Difference 2.
*  Difference 3.

Hosting is about how to get WebView2 onto different platforms.

Actors:
*  You (the Developer of the host app).
*  The user.
*  The host app.
*  The operating system.
*  The WebView2 control.
*  The HTTP server.

Visual vs. Windowed is about how the application works:
*  Visual: The host app takes the input from the __.
*  Windowed: The WebView2 control takes input from the operating system.  The OS sends the input to the WebView2.


**Terminology:**

| Term | Definition |
|---|---|
| _visual hosting_ | x |
| _windowed hosting_ | x |


<!-- ====================================================================== -->
## First major heading

<!-- template -->
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


#### Minor heading


#### Minor heading


<!-- ====================================================================== -->
## Second major heading


#### Minor heading


#### Minor heading


<!-- ====================================================================== -->
## See also

*  [link text]<!--(relative path)-->
