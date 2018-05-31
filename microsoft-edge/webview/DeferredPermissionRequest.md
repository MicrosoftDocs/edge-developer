---
description: Represents a deferred request for user permission to access device functionality
title: DeferredPermissionRequest object
author: libbymc
ms.author: libbymc
ms.date: 02/12/2018
ms.topic: reference
ms.prod: microsoft-edge
keywords: webview, windows 10 apps, uwp, edge
---

# DeferredPermissionRequest object

Represents a deferred request by the content of the [webview](../webview.md) for end-user permission to access specialized device functionality (such as geolocation, or pointer lock). 

## Methods

### allow

Allows the request for permission. 

```js
deferredPermissionRequest.allow();
```
#### Parameters
This method has no parameters.

#### Return value
This method does not return a value.

### deny

Denies the request for permission. 

```js
deferredPermissionRequest.deny();
```

#### Parameters
This method has no parameters.

#### Return value
This method does not return a value.

## Properties

### id

The ID of the permission being requested.

This property is read-only.

```js
var id = deferredPermissionRequest.id;
```

##### Property value
Type: **Unsigned long**

The ID of the permission being requested. 

### type

The type of permission being requested. 

This property is read-only.

```js
var type = deferredPermissionRequest.type;
```

#### Property value
Type: **String**

### uri

The Uniform Resource Identifier (URI) of the permission being requested.

This property is read-only.

```js
var uri = deferredPermissionRequest.uri;
```

##### Property value
Type: **String**

## Requirements

|                                           |                                      |
|-------------------------------------------|--------------------------------------|
| <strong>Minimum supported client</strong> | Windows 10 [Windows Store apps only] |
| <strong>Minimum supported server</strong> |            Not supported             |
| <strong>Minimum supported phone</strong>  |            Not supported             |

