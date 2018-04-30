---
description: Represents a webview process.
title: MSWebViewProcess object
author: libbymc
ms.author: libbymc
ms.date: 4/10/2018
ms.topic: reference
ms.prod: microsoft-edge
keywords: webview, windows 10 apps, uwp, edge
---

# MSWebViewProcess object

Represents a [webview](../webview.md) process.

### enterpriseId

The enterprise ID of the process.

```js
var enterpriseId = webview.enterpriseId;
```

This property is read-only.

#### Property value
Type: **DOMString**

## Properties

### isPrivateNetworkClientServerCapabilityEnabled

Gets a value that indicates whether the [webview](../webview.md) has privateNetworkClientServer capabilitiy enabled in this process.

```js
var privateNetwork = webview.isPrivateNetworkClientServerCapabilityEnabled;
```

This property is read-only.

#### Property value
Type: **Boolean**

## Methods

### CreateWebViewAsync

Creates a [webview](../webview.md) in a specific process.

```js
msWebviewProcess.createWebviewAsync();
```

#### Return value

Type: **`Promise<MSHTMLWebViewElement>`**

### GetWebViews

Returns a sequence of **MSWebViewProcess** objects hosted within the process.

#### Return value

Type: **`sequence<MSHTMLWebViewElement>`**

### Terminate

Terminates the process.

```js
msWebviewProcess.terminate();
```

#### Return value

This method does not return a value.