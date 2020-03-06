---
description: An event that is fired when an HTTP request is made.
title: WebResourceRequestedEvent object
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/15/2020
ms.topic: reference
ms.prod: microsoft-edge
keywords: webview, windows 10 apps, uwp, edge
---

# WebResourceRequestedEvent object

An event that is fired when an HTTP request is made.

## Properties

### args

Information about the resource request. This is a [Windows.Web.UI.WebViewControlWebResourceRequestedEventArgs](/uwp/api/windows.web.ui.webviewcontrolwebresourcerequestedeventargs).

This property is read-only.

```js
var args = webResourceRequestedEventArgs.args;
var request = args.request;
```

#### Property value
Type: **any**

