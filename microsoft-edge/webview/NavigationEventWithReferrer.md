---
description: Contains referrer information about the navigation
title: NavigationEventWithReferrer object
author: libbymc
ms.author: libbymc
ms.date: 2/12/2018
ms.topic: reference
ms.prod: microsoft-edge
keywords: webview, windows 10 apps, uwp, edge
---

# NavigationEventWithReferrer object

An object that represents an event fired when navigation is initiated and the navigation contains a referer.

## Properties

### referer

The Uniform Resource Identifier (URI) of the page in the [webview](../webview.md) requesting navigation.

This property is read-only.

#### Property value
Type: **DOMString**


```js
var referer = NavigationEventWithReferrer.referer;
```
