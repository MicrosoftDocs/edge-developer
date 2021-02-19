---
description: Represents a webview process.
title: MSWebViewProcess object
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: reference
ms.prod: microsoft-edge
keywords: webview, windows 10 apps, uwp, edge
ms.date: 12/02/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# MSWebViewProcess object  

[!INCLUDE [deprecation-note](../includes/deprecation-note.md)]  

Represents a [webview](../webview/index.md) process.  

```javascript
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

Gets a value indicating whether the [webview](../webview/index.md) process has the *Private Networks (Client & Server)* Universal Windows [App capability declaration](/windows/uwp/packaging/app-capability-declarations) enabled in the app manifest.  

```javascript
var privateNetwork = wvprocess.isPrivateNetworkClientServerCapabilityEnabled;
```  

This property is read-only.  

#### Property value  

Type: **Boolean**  

## Methods  

### CreateWebViewAsync  

Creates a [webview](../webview/index.md) in a specific process.  

```javascript
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

```javascript
wvprocess.terminate();
```  

#### Return value  

This method does not return a value.  
