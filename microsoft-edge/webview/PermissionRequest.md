---
description: Provides event information about the current permission request
title: PermissionRequest object
author: libbymc
ms.author: libbymc
ms.date: 2/12/2018
ms.topic: reference
ms.prod: microsoft-edge
keywords: webview, windows 10 apps, uwp, edge
---

# PermissionRequest object

Provides event information about the current permission request.

## Properties

### permissionRequest

Returns a **PermissionRequest** object that represents the end-user permission request made by content of the [webview](../webview.md).

This property is read-only.

```js
var webView = document.getElementById("myWebView");
webView.addEventListener("MSWebViewPermissionRequested", function(e) {
    var permissionRequest = e.permissionRequest;
    // Examine and/or defer permission request
}, false);
```
