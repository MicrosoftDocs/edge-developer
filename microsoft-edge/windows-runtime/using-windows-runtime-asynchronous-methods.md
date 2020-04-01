---
title: "Using Windows Runtime Asynchronous Methods"
ms.custom: ""
ms.date: 03/30/2020
ms.prod: microsoft-edge
ms.reviewer: ""
ms.suite: ""
ms.technology: "windows-integration"
ms.tgt_pltfrm: ""
ms.topic: "article"
helpviewer_keywords: 
  - "JavaScript, Windows Runtime asynchronous methods"
ms.assetid: 70756833-44f7-4383-827f-2ac781558082
caps.latest.revision: 15
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
manager: ""
---
# Using Windows Runtime Asynchronous Methods  

Many Windows Runtime methods, especially methods that might take a long time to complete, are asynchronous.  These methods generally return an asynchronous action or operation (for example, `Windows.Foundation.IAsyncAction`, `Windows.Foundation.IAsyncOperation`, `Windows.Foundation.IAsyncActionWithProgress`, or `Windows.Foundation.IAsyncOperationWithProgress`).  These methods are represented in JavaScript by the [CommonJS/Promises/A pattern][CommonjsWikiPromises].  That is, they return a Promise object that has a [then function][PreviousVersionsWindowsAppsBr229728], for which you must provide a `completed` function that handles the result if the operation succeeds.  If you don't want to provide an error handler, you should use the [done function][PreviousVersionsWindowsAppsHr701079] instead of the `then` function.  

> [!IMPORTANT]
> Windows Runtime features are not available for apps that run in Internet Explorer.  

## Examples of Asynchronous Methods  

In the following example, the `then` function takes a parameter that represents the completed value of the `createResourceAsync` method.  

```javascript
client.createResourceAsync(uri, description, item)
    // Success.
    .then(function(newItem) {
        console.log("New item is: " + newItem.id);
            });
```  

In this case, if the `createResourceAsync` method fails, it returns a promise in the error state, but does not throw an exception.  You can handle an error by using the `then` function as follows.  

```javascript
client.createResourceAsync(uri, description, item)
    // Success.
    .then(function(newItem) {
              console.log("New item is: " + newItem.id);
          }
          function(err) {
              console.log("Got error: " + err.message);
          });
```  

If you don't want to handle the error explicitly, but do want it to throw an exception, you can use the `done` function instead.  

```javascript
client.createResourceAsync(uri, description, item)
    // Success.
      .done(function(newItem) {
               console.log("New item is: " + newItem.id);
            });
```  

You can also display the progress made towards completion by using a third function.  

```javascript
client.createResourceAsync(uri, description, item)
    // Success.
      .then(function(newItem) {
               console.log("New item is: " + newItem.id);
            },
    // Error.
            function(error) {
               alert("Failed to create a resource.");
            },
    // Progress.
            function(progress, resultSoFar) {
               setProgressBar(progress);
            });
```  

For more information about asynchronous programming, see [Asynchronous Programming in JavaScript][PreviousVersionsWindowsAppsHh700330].  

## See Also  

[Using the Windows Runtime in JavaScript][WindowsRuntimeJavascript]  

<!-- image links -->  

<!-- links -->  

[WindowsRuntimeJavascript]: /microsoft-edge/windows-runtime/using-the-windows-runtime-in-javascript "Using the Windows Runtime in JavaScript"  

[PreviousVersionsWindowsAppsBr229728]: /previous-versions/windows/apps/br229728(v=win.10) "Promise.then method"  
[PreviousVersionsWindowsAppsHh700330]: /previous-versions/windows/apps/hh700330(v=win.10) "Asynchronous programming in JavaScript (HTML)"
[PreviousVersionsWindowsAppsHr701079]: /previous-versions/windows/apps/hh701079(v=win.10) "Promise.done method"  

[CommonjsWikiPromises]: http://wiki.commonjs.org/wiki/Promises "Promises | CommonJS Spec Wiki"  
