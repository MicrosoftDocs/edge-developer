---
description: Defines properties that enable or disable webview features
title: MSWebViewSettings object
author: erikadoyle
ms.author: edoyle
ms.date: 04/10/2018
ms.topic: reference
ms.prod: microsoft-edge
keywords: webview, windows 10 apps, uwp, edge
---

# MSWebViewSettings object

Defines properties that enable or disable [webview](../webview.md) features.

## Properties

### isIndexedDBEnabled

Gets or sets a value that indicates whether the use of IndexedDB is allowed in the [webview](../webview.md).

```js
var isIndexedDBEnabled = MSWebViewSettings.isIndexedDBEnabled;
MSWebViewSettings.isIndexedDBEnabled = isIndexedDBEnabled;
```

#### Property value
Type: **boolean**

**True** if IndexedDB is allowed in the **webview**; otherwise, **false**. 

### isJavaScriptEnabled

Gets or sets a value that indicates whether the use of JavaScript is allowed in the [webview](../webview.md).

```js
var isJavaScriptEnabled = MSWebViewSettings.isJavaScriptEnabled;
MSWebViewSettings.isJavaScriptEnabled = isJavaScriptEnabled;
```

#### Property value
Type: **boolean**

**True** JavaScript is allowed in the [webview](../webview.md); otherwise, **false**. 

### isScriptNotifyAllowed

Gets or sets a value that indicates whether the use of [ScriptNotifyEvent](ScriptNotifyEvent.md) is allowed in the [webview](../webview.md).

```js
var isScriptNotifyAllowed = MSWebViewSettings.isScriptNotifyAllowed;
MSWebViewSettings.isScriptNotifyAllowed = isScriptNotifyAllowed;
```

#### Property value
Type: **boolean**

**True** [ScriptNotifyEvent](ScriptNotifyEvent.md) is allowed in the [webview](../webview.md); otherwise, **false**. 
