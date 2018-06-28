---
description: Indicates the webview is attempting to download an unsupported file. 
title: UnviewableContentIdentifiedEvent object
author: libbymc
ms.author: libbymc
ms.date: 2/12/2018
ms.topic: reference
ms.prod: microsoft-edge
keywords: webview, windows 10 apps, uwp, edge
---

# UnviewableContentIdentifiedEvent object

Indicates the [webview](../webview.md) is attempting to download an unsupported file. 

## Properties

### mediaType

Gets the content type of the unviewable content.

This property is read-only

```js
var mediaType = UnviewableContentIdentifiedEvent.mediaType;
```

#### Property value
Type: **DOMString**