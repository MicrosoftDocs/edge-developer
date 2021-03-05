---
description: Using the Windows Runtime in JavaScript
title: "Using the Windows Runtime in JavaScript"
ms.custom: ""
ms.date: 11/03/2020
ms.prod: microsoft-edge
ms.technology: "windows-integration"
ms.topic: "article"
helpviewer_keywords: 
  - "JavaScript, Windows Runtime"
ms.assetid: 90658546-f746-4e34-a7d1-71cf9ee322a2
caps.latest.revision: 16
author: MSEdgeTeam
ms.author: msedgedevrel
ROBOTS: NOINDEX,NOFOLLOW
---
# Using the Windows Runtime in JavaScript  

[!INCLUDE [deprecation-note](../includes/legacy-edge-note.md)]  

When you write a Universal Windows Platform \(UWP\) app, you can use Windows Runtime classes, methods, and properties in much the same way that you would use native JavaScript objects, methods, and properties.  This topic provides introductory information and links to topics that explain the basic concepts of using Windows Runtime APIs in JavaScript, including an explanation of how Windows Runtime types are represented, how to use asynchronous Windows Runtime methods, and how to listen to and handle Windows Runtime events.  

For general language documentation, check out MDN's [JavaScript reference][MDNJavascriptReference] library.  

> [!IMPORTANT]
> Windows Runtime features are not available for apps that run in Internet Explorer.  

## Windows Runtime reference documentation  

For reference documentation, see [Windows Runtime Reference][UwpApiIndex].  Code examples are available in JavaScript and also in C++, C#, and Visual Basic.  

## Writing Windows Runtime components in C++, C#, or Visual Basic  

For instructions and guidelines for writing Windows Runtime components that can be consumed in JavaScript, see [Creating Windows Runtime Components in C++][WindowsUwpWinrtCpp] and [Creating Windows Runtime Components in C# and Visual Basic][WindowsUwpWinrtCsharpVb].  

## Casing conventions with Windows Runtime features  

Casing conventions for Windows Runtime features in JavaScript differ slightly from those for other languages:  

*   Namespaces and classes are in Pascal case:  
    
    ```javascript
    Windows.Deployment.PackageInfo;
    ```  
    
*   Members of classes, including methods and properties, and members of structures and enumerations, are in camel case:  
    
    ```javascript
    Deployment.PackageInfo.createPackage();
    ```  
    
*   Event names are in lower case:  
    
    ```javascript
    dataTransferManager.ontargetapplicationchosen;
    ```  
    
## See also  

[Considerations when Using the Windows Runtime API][WindowsRuntimeConsiderationsApi]  
[Using Windows Runtime Asynchronous Methods][WindowsRuntimeAsynchronousMethods]   
[Handling Windows Runtime Events in JavaScript][WindowsRuntimeEventsJavascript]   
[JavaScript Representation of Windows Runtime Types][WindowsRuntimeJavascriptTypes]   
[JavaScript Projection of Windows Runtime DateTime and TimeSpan][WindowsRuntimeDatetimeTimespan]  

<!-- links -->  

[WindowsRuntimeConsiderationsApi]: ./considerations-when-using-the-windows-runtime-api.md "Considerations when Using the Windows Runtime API | Microsoft Docs"  
[WindowsRuntimeEventsJavascript]: ./handling-windows-runtime-events-in-javascript.md "Handling Windows Runtime Events in JavaScript | Microsoft Docs"  
[WindowsRuntimeJavascriptTypes]: ./javascript-representation-of-windows-runtime-types.md "JavaScript Representation of Windows Runtime Types | Microsoft Docs"  
[WindowsRuntimeAsynchronousMethods]: ./using-windows-runtime-asynchronous-methods.md "Using Windows Runtime Asynchronous Methods | Microsoft Docs"  
[WindowsRuntimeDatetimeTimespan]: ./windows-runtime-datetime-and-timespan-representations.md "Windows Runtime DateTime and TimeSpan Representations | Microsoft Docs"  

[UwpApiIndex]: /uwp/api/index "Windows UWP Namespaces | Microsoft Docs"  
[WindowsUwpWinrtCpp]: /windows/uwp/winrt-components/creating-windows-runtime-components-in-cpp "Windows Runtime components with C++/CX | Microsoft Docs"  
[WindowsUwpWinrtCsharpVb]: /windows/uwp/winrt-components/creating-windows-runtime-components-in-csharp-and-visual-basic "Windows Runtime components with C# and Visual Basic | Microsoft Docs"  

[MDNJavascriptReference]: https://developer.mozilla.org/docs/Web/JavaScript/Reference "JavaScript reference | MDN"  
