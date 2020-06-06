---
description: Contains referrer information about the navigation
title: NavigationEventWithReferrer object
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/22/2018
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

### uri

The Uniform Resource Identifier (URI) of the destination of the navigation.

This property is read-only.

```js
var uri = NavigationEventWithReferrer.uri;
```

#### Property value
Type: **DOMString**
