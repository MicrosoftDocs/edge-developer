---
description: Defines properties that enable or disable webview features
title: MSWebViewSettings object
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: reference
ms.prod: microsoft-edge
keywords: webview, windows 10 apps, uwp, edge
ms.date: 12/02/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# MSWebViewSettings object  

[!INCLUDE [deprecation-note](../includes/deprecation-note.md)]  

Defines properties that enable or disable [webview](../webview/index.md) features.  

## Properties  

### isIndexedDBEnabled  

Gets or sets a value that indicates whether the use of IndexedDB is allowed in the [webview](../webview/index.md).  

```javascript
var isIndexedDBEnabled = MSWebViewSettings.isIndexedDBEnabled;
MSWebViewSettings.isIndexedDBEnabled = isIndexedDBEnabled;
```  

#### Property value  

Type: **boolean**  

**True** if IndexedDB is allowed in the **webview**; otherwise, **false**.  

### isJavaScriptEnabled  

Gets or sets a value that indicates whether the use of JavaScript is allowed in the [webview](../webview/index.md).  

```javascript
var isJavaScriptEnabled = MSWebViewSettings.isJavaScriptEnabled;
MSWebViewSettings.isJavaScriptEnabled = isJavaScriptEnabled;
```  

#### Property value  

Type: **boolean**  

**True** JavaScript is allowed in the [webview](../webview/index.md); otherwise, **false**.  

### isScriptNotifyAllowed  

Gets or sets a value that indicates whether the use of [ScriptNotifyEvent](ScriptNotifyEvent.md) is allowed in the [webview](../webview/index.md).  

```javascript
var isScriptNotifyAllowed = MSWebViewSettings.isScriptNotifyAllowed;
MSWebViewSettings.isScriptNotifyAllowed = isScriptNotifyAllowed;
```  

#### Property value  

Type: **boolean**  

**True** [ScriptNotifyEvent](ScriptNotifyEvent.md) is allowed in the [webview](../webview/index.md); otherwise, **false**.  
