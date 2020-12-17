---
description: The dispatched object from a focus event containing the navigation reason and location
title: FocusNavigationEvent object
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: reference
ms.prod: microsoft-edge
keywords: webview, windows 10 apps, uwp, edge
ms.date: 12/02/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# FocusNavigationEvent object  

[!INCLUDE [deprecation-note](../includes/deprecation-note.md)]  

The dispatched object from [**NavigateFocus**](../webview/index.md#navigatefocus)/[**DepartingFocus**](../webview/index.md#departingfocus) containing the [**NavigationReason**](#navigationreason) and location.  

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

```javascript
var navigationReason = FocusNavigationEvent.navigationReason;
```  

#### Property value  

Type: **NavigationReason**  

### originHeight  

The origin height location of the element to be given focus.  

This property is read-only.  

```javascript
var originWoriginHeightidth = FocusNavigationEvent.originHeight;
```  

#### Property value  

Type: **float**  

### originLeft  

The origin left location of the element to be given focus.  

This property is read-only.  

```javascript
var originLeft = FocusNavigationEvent.originLeft;
```  

#### Property value  

Type: **float**  

### originTop  

The origin top location of the element to be given focus.  

This property is read-only.  

```javascript
var originTop = FocusNavigationEvent.originTop;
```  

#### Property value  

Type: **float**  

### originWidth  

The origin width location of the element to be given focus.  

This property is read-only.  

```javascript
var originWidth = FocusNavigationEvent.originWidth;
```  

#### Property value  

Type: **float**  
