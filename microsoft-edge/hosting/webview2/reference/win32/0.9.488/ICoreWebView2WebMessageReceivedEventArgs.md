---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: Microsoft Edge WebView2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/16/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html
---

# interface ICoreWebView2WebMessageReceivedEventArgs 

```
interface ICoreWebView2WebMessageReceivedEventArgs
  : public IUnknown
```

Event args for the WebMessageReceived event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[get_Source](#get_source) | The URI of the document that sent this web message.
[get_WebMessageAsJson](#get_webmessageasjson) | The message posted from the webview content to the host converted to a JSON string.
[TryGetWebMessageAsString](#trygetwebmessageasstring) | If the message posted from the webview content to the host is a string type, this method will return the value of that string.

## Members

#### get_Source 

The URI of the document that sent this web message.

> public HRESULT [get_Source](#get_source)(LPWSTR * source)

#### get_WebMessageAsJson 

The message posted from the webview content to the host converted to a JSON string.

> public HRESULT [get_WebMessageAsJson](#get_webmessageasjson)(LPWSTR * webMessageAsJson)

Use this to communicate via JavaScript objects.

For example the following postMessage calls result in the following WebMessageAsJson values:

```cpp
postMessage({'a': 'b'})      L"{\"a\": \"b\"}"
postMessage(1.2)             L"1.2"
postMessage('example')       L"\"example\""
```

#### TryGetWebMessageAsString 

If the message posted from the webview content to the host is a string type, this method will return the value of that string.

> public HRESULT [TryGetWebMessageAsString](#trygetwebmessageasstring)(LPWSTR * webMessageAsString)

If the message posted is some other kind of JavaScript type this method will fail with E_INVALIDARG. Use this to communicate via simple strings.

For example the following postMessage calls result in the following WebMessageAsString values:

```cpp
postMessage({'a': 'b'})      E_INVALIDARG
postMessage(1.2)             E_INVALIDARG
postMessage('example')       L"example"
```

