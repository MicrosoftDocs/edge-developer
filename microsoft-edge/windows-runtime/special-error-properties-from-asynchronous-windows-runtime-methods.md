---
title: "Special Error Properties from Asynchronous Windows Runtime Methods"
ms.custom: ""
ms.date: 04/01/2020
ms.prod: microsoft-edge
ms.reviewer: ""
ms.suite: ""
ms.technology: "windows-integration"
ms.tgt_pltfrm: ""
ms.topic: "article"
ms.assetid: 45155584-06d8-4e7f-93a6-8564a93f643d
caps.latest.revision: 4
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
manager: ""
---
# Special Error Properties from Asynchronous Windows Runtime Methods  

It can be difficult to debug asynchronous Windows Runtime methods in JavaScript, because the error may be thrown from somewhere deep in the call stack. The JavaScript `Error` object has extra properties that appear only when the error is thrown from an asynchronous Windows Runtime method when the app is running in debug mode.  
  
## Special Error Properties  

An error object that results from a failed Windows Runtime asynchronous operation in debug mode has the following special properties:  

*   `asyncOpSource` \(Object\) Gets information about the original location where the call that produced an error was made. The property `asyncOpSource.originatingCall` \(String\) displays the location in the user's code that originated the asynchronous operation.  
*   asyncOpType \(String\) Gets the name of the asynchronous operation type that raised the error.  
    
For more information about errors with asynchronous operations, see:  
  
*   [How to handle errors with promises][PreviousVersionsWindowsAppsHh700337]  
*   [Troubleshooting Windows Runtime errors][PreviousVersionsWindowsAppsHh974350]  

<!-- image links -->  

<!-- links -->  

[PreviousVersionsWindowsAppsHh700337]: /previous-versions/windows/apps/hh700337(v=win.10) "How to handle errors with promises (HTML)"  
[PreviousVersionsWindowsAppsHh974350]: /previous-versions/windows/apps/hh974350(v=win.10) "Troubleshooting Windows Runtime errors (HTML)"  
