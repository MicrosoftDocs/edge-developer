---
description: An event that is fired when an HTTP request is made.
title: WebResourceRequestedEvent object
author: libbymc
ms.author: libbymc
ms.date: 05/24/2018
ms.topic: reference
ms.prod: microsoft-edge
keywords: webview, windows 10 apps, uwp, edge
---

# WebResourceRequestedEvent object

An event that is fired when an HTTP request is made.

## Properties

### args

Information about the resource request. This is a [Windows.Web.UI.WebViewControlWebResourceRequestedEventArgs](https://docs.microsoft.com/en-us/uwp/api/windows.web.ui.webviewcontrolwebresourcerequestedeventargs).

This property is read-only.

```js
var args = webResourceRequestedEventArgs.args;
var request = args.request;
```

#### Property value
Type: **any**

