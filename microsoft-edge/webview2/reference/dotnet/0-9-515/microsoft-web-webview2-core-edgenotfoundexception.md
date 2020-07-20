---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: 0.9.515 - Microsoft.Web.WebView2.Core.EdgeNotFoundException
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/20/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html
---

# 0.9.515 - Microsoft.Web.WebView2.Core.EdgeNotFoundException class 

[!INCLUDE [deprecation-note](../../includes/deprecation-note.md)]

Namespace: Microsoft.Web.WebView2.Core\
Assembly: Microsoft.Web.WebView2.Core.dll

```
class Microsoft.Web.WebView2.Core.EdgeNotFoundException
  : public Exception
```

The exception that is thrown when an Edge installation is missing.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[EdgeNotFoundException](#edgenotfoundexception) | Initializes a new instance of the EdgeNotFoundException class.
[EdgeNotFoundException](#edgenotfoundexception) | Initializes a new instance of the EdgeNotFoundException class with a reference to the inner exception that is the cause of this exception.
[EdgeNotFoundException](#edgenotfoundexception) | Initializes a new instance of the EdgeNotFoundException class with a specified error message.
[EdgeNotFoundException](#edgenotfoundexception) | Initializes a new instance of the EdgeNotFoundException class with a specified error message and a reference to the inner exception that is the cause of this exception.

## Members

#### EdgeNotFoundException 

Initializes a new instance of the EdgeNotFoundException class.

> public [EdgeNotFoundException](#edgenotfoundexception)()

#### EdgeNotFoundException 

Initializes a new instance of the EdgeNotFoundException class with a reference to the inner exception that is the cause of this exception.

> public [EdgeNotFoundException](#edgenotfoundexception)(Exception inner)

##### Parameters
* `inner` The exception that is the cause of the current exception.

#### EdgeNotFoundException 

Initializes a new instance of the EdgeNotFoundException class with a specified error message.

> public [EdgeNotFoundException](#edgenotfoundexception)(string message)

##### Parameters
* `message` The error message that explains the reason for the exception.

#### EdgeNotFoundException 

Initializes a new instance of the EdgeNotFoundException class with a specified error message and a reference to the inner exception that is the cause of this exception.

> public [EdgeNotFoundException](#edgenotfoundexception)(string message, Exception inner)

##### Parameters
* `message` The error message that explains the reason for the exception. 

* `inner` The exception that is the cause of the current exception.

