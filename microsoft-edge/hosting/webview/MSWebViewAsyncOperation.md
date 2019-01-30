---
description: Exposes whether the operation completed successfully or failed
title: MSWebViewAsyncOperation object
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 02/12/2018
ms.topic: reference
ms.prod: microsoft-edge
keywords: webview, windows 10 apps, uwp, edge
---

# MSWebViewAsyncOperation object

Exposes whether the operation completed successfully or failed. 

## Events

### complete

Indicates that the operation completed. 

```js
function handler(eventInfo) { /* Your code */ }
 
// addEventListener syntax
MSWebViewAsyncOperation.addEventListener("complete", handler);
MSWebViewAsyncOperation.removeEventListener("complete", handler);
```

#### Event Information

|            |      |
|------------|------|
|**Interface** | **Event**
|**Synchronous** |Yes |    
|**Bubbles**     |No |   
|**Cancelable**  |No |        


### error

Indicates that there was an error with the operation.

```js
function handler(eventInfo) { /* Your code */ }
 
// addEventListener syntax
MSWebViewAsyncOperation.addEventListener("error", handler);
MSWebViewAsyncOperation.removeEventListener("error", handler);
```
#### Event Information

|            |      |
|------------|------|
|**Interface** | **Event**
|**Synchronous** |Yes |    
|**Bubbles**     |No |   
|**Cancelable**  |No |            


## Methods

### start

Called to start the async task. 

```js
MSWebViewAsyncOperation.start();
```

### Parameters

This method does not have parameters.

### Return value

This method does not return a value.

## Properties

### error

The error that occured.

This property is read-only.

```js
var error = MSWebViewAsyncOperation.error;
```

#### Property value
Type: **DOMError**

### oncomplete

The **complete** event handler. 

```js
var oncomplete = MSWebViewAsyncOperation.oncomplete;
```

#### Property value
Type: **EventHandler**

### onerror

The **error** event handler. 

```js
var onerror = MSWebViewAsyncOperation.onerror;
```

#### Property value
Type: **EventHandler**

### readyState

Describes the ready state of the object.

This property is read-only.

```js
var readyState = MSWebViewAsyncOperation.readyState;
```

#### Property value
Type: **unsigned short**

### result

The result of the operation.

This property is read-only.

```js
var result = MSWebViewAsyncOperation.result;
```

#### Property value
Type: any

### target

The target of the operation. 

This property is read-only.

```js
var target = MSWebViewAsyncOperation.target;
```

#### Property value
Type: [**MSHTMLWebViewElement**](../webview.md)

### type

The type of the operation.

This property is read-only.

```js
var type = MSWebViewAsyncOperation.type;
```

#### Property value
Type: **unsigned short**
