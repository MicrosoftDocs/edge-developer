---
description: The dispatched object from a focus event containing the navigation reason and location
title: FocusNavigationEvent object
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 02/12/2018
ms.topic: reference
ms.prod: microsoft-edge
keywords: webview, windows 10 apps, uwp, edge
---

# FocusNavigationEvent object

The dispatched object from [**NavigateFocus**](../webview.md#navigatefocus)/[**DepartingFocus**](../webview.md#departingfocus) containing the [**NavigationReason**](#navigationreason) and location. 

## Methods

### requestFocus

Called to move focus from the app to the webview.

### Parameters

This method does not have parameters.

### Return value

This method does not return a value.

## Properties
    
### navigationReason

Enumerated type **NavigationReason**, either "left", "up", "right", or "down". 

This property is read-only.

```js
var navigationReason = FocusNavigationEvent.navigationReason;
```

#### Property value
Type: **NavigationReason**

### originHeight

The origin height location of the element to be given focus.

This property is read-only.

```js
var originWoriginHeightidth = FocusNavigationEvent.originHeight;
```

#### Property value
Type: **float**

### originLeft

The origin left location of the element to be given focus.

This property is read-only.

```js
var originLeft = FocusNavigationEvent.originLeft;
```

#### Property value
Type: **float**

### originTop

The origin top location of the element to be given focus.

This property is read-only.

```js
var originTop = FocusNavigationEvent.originTop;
```

#### Property value
Type: **float**

### originWidth

The origin width location of the element to be given focus.

This property is read-only.

```js
var originWidth = FocusNavigationEvent.originWidth;
```

#### Property value
Type: **float**

