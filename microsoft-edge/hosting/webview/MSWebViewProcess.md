---
description: Represents a webview process.
title: MSWebViewProcess object
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/15/2020
ms.topic: reference
ms.prod: microsoft-edge
keywords: webview, windows 10 apps, uwp, edge
---

# MSWebViewProcess object

Represents a [webview](../webview.md) process.

```js
var wvprocess = new MSWebViewProcess();
```

## Properties

### enterpriseId

The enterprise ID of the process.

```js
var enterpriseId = wvprocess.enterpriseId;
```

This property is read-only.

#### Property value
Type: **DOMString**

### isPrivateNetworkClientServerCapabilityEnabled

Gets a value indicating whether the [webview](../webview.md) process has the *Private Networks (Client & Server)* Universal Windows [App capability declaration](/windows/uwp/packaging/app-capability-declarations) enabled in the app manifest.

```js
var privateNetwork = wvprocess.isPrivateNetworkClientServerCapabilityEnabled;
```

This property is read-only.

#### Property value
Type: **Boolean**

## Methods

### CreateWebViewAsync

Creates a [webview](../webview.md) in a specific process.

```js
wvprocess.createWebviewAsync();
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
wvprocess.terminate();
```

#### Return value

This method does not return a value.
