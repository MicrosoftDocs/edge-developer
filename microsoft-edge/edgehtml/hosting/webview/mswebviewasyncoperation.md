---
description: Exposes whether the operation completed successfully or failed
title: MSWebViewAsyncOperation object
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: reference
ms.prod: microsoft-edge
keywords: webview, windows 10 apps, uwp, edge
ms.date: 12/02/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# MSWebViewAsyncOperation object  

[!INCLUDE [deprecation-note](../includes/deprecation-note.md)]  

Exposes whether the operation completed successfully or failed.  

## Events  

### complete  

Indicates that the operation completed.  

```javascript
function handler(eventInfo) { /* Your code */ }
 
// addEventListener syntax
MSWebViewAsyncOperation.addEventListener("complete", handler);
MSWebViewAsyncOperation.removeEventListener("complete", handler);
```  

#### Event Information  

|  |  |  
|:--- |:--- |  
| **Interface** | **Event** |  
| **Synchronous** |Yes |  
| **Bubbles** |No |   
| **Cancelable** |No |  

### error  

Indicates that there was an error with the operation.  

```javascript
function handler(eventInfo) { /* Your code */ }
 
// addEventListener syntax
MSWebViewAsyncOperation.addEventListener("error", handler);
MSWebViewAsyncOperation.removeEventListener("error", handler);
```  

#### Event Information  

|  |  |  
|:--- |:--- |  
| **Interface** | **Event** |  
| **Synchronous** | Yes |  
| **Bubbles** | No |  
| **Cancelable** | No |  

## Methods  

### start  

Called to start the async task.  

```javascript
MSWebViewAsyncOperation.start();
```  

### Parameters  

This method does not have parameters.  

### Return value  

This method does not return a value.  

## Properties  

### error  

The error that occurred.  

This property is read-only.  

```javascript
var error = MSWebViewAsyncOperation.error;
```  

#### Property value  

Type: **DOMError**  

### oncomplete  

The **complete** event handler.  

```javascript
var oncomplete = MSWebViewAsyncOperation.oncomplete;
```  

#### Property value  

Type: **EventHandler**  

### onerror  

The **error** event handler.  

```javascript
var onerror = MSWebViewAsyncOperation.onerror;
```  

#### Property value  

Type: **EventHandler**  

### readyState  

Describes the ready state of the object.  

This property is read-only.  

```javascript
var readyState = MSWebViewAsyncOperation.readyState;
```  

#### Property value  

Type: **unsigned short**  

### result  

The result of the operation.  

This property is read-only.  

```javascript
var result = MSWebViewAsyncOperation.result;
```  

#### Property value  

Type: any  

### target  

The target of the operation.  

This property is read-only.  

```javascript
var target = MSWebViewAsyncOperation.target;
```  

#### Property value  

Type: [**MSHTMLWebViewElement**](../webview/index.md)  

### type  

The type of the operation.  

This property is read-only.  

```javascript
var type = MSWebViewAsyncOperation.type;
```  

#### Property value  

Type: **unsigned short**  
