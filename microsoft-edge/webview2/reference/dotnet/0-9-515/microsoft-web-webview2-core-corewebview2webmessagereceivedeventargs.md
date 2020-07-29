---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: 0.9.515 - Microsoft.Web.WebView2.Core.CoreWebView2WebMessageReceivedEventArgs
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/20/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html
---

# 0.9.515 - Microsoft.Web.WebView2.Core.CoreWebView2WebMessageReceivedEventArgs class 

[!INCLUDE [deprecation-note](../../includes/deprecation-note.md)]

Namespace: Microsoft.Web.WebView2.Core\
Assembly: Microsoft.Web.WebView2.Core.dll

Event args for the WebMessageReceived event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[Source](#source) | The URI of the document that sent this web message.
[WebMessageAsJson](#webmessageasjson) | The message posted from the webview content to the host converted to a JSON string.
[TryGetWebMessageAsString](#trygetwebmessageasstring) | If the message posted from the webview content to the host is a string type, this method will return the value of that string.

## Members

#### Source 

The URI of the document that sent this web message.

> public string [Source](#source)

#### WebMessageAsJson 

The message posted from the webview content to the host converted to a JSON string.

> public string [WebMessageAsJson](#webmessageasjson)

Use this to communicate via JavaScript objects.

For example the following postMessage calls result in the following WebMessageAsJson values:

```
postMessage({'a': 'b'})      L"{\"a\": \"b\"}"
postMessage(1.2)             L"1.2"
postMessage('example')       L"\"example\""
```

#### TryGetWebMessageAsString 

If the message posted from the webview content to the host is a string type, this method will return the value of that string.

> public string [TryGetWebMessageAsString](#trygetwebmessageasstring)()

If the message posted is some other kind of JavaScript type this method will fail with E_INVALIDARG. Use this to communicate via simple strings.

For example the following postMessage calls result in the following WebMessageAsString values:

```
postMessage({'a': 'b'})      E_INVALIDARG
postMessage(1.2)             E_INVALIDARG
postMessage('example')       L"example"
```

