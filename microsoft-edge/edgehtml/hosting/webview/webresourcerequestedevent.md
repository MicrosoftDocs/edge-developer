---
description: An event that is fired when an HTTP request is made.
title: WebResourceRequestedEvent object
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: reference
ms.prod: microsoft-edge
keywords: webview, windows 10 apps, uwp, edge
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# WebResourceRequestedEvent object  

[!INCLUDE [deprecation-note](../includes/deprecation-note.md)]  

An event that is fired when an HTTP request is made.  

## Properties  

### args  

Information about the resource request.  This is a [Windows.Web.UI.WebViewControlWebResourceRequestedEventArgs](/uwp/api/windows.web.ui.webviewcontrolwebresourcerequestedeventargs).  

This property is read-only.  

```javascript
var args = webResourceRequestedEventArgs.args;
var request = args.request;
```  

#### Property value  

Type: **any**  
