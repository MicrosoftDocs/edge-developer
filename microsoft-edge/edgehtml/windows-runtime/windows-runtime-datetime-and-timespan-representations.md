---
description: Windows Runtime DateTime and TimeSpan Representations
title: "Windows Runtime DateTime and TimeSpan Representations"
ms.custom: ""
ms.date: 11/03/2020
ms.prod: microsoft-edge
ms.technology: "windows-integration"
ms.topic: "article"
helpviewer_keywords: 
  - "JavaScript, Windows Runtime dates and times"
  - "TimeSpan [JavaScript]"
  - "DateTime [JavaScript]"
ms.assetid: 9743e9ac-9054-463e-8264-427183e4905f
caps.latest.revision: 9
author: MSEdgeTeam
ms.author: msedgedevrel
ROBOTS: NOINDEX,NOFOLLOW
---
# Windows Runtime DateTime and TimeSpan representations  

[!INCLUDE [deprecation-note](../includes/legacy-edge-note.md)]  

The JavaScript representation of dates and times is different from the Windows Runtime version.  The Windows Runtime [DateTime][UwpWindowsFoundationDatetime] structure is represented in JavaScript as a [Date][MDNDate] that has a backing store that matches the `DateTime` data \(and has a different range and precision from the JavaScript `Date`\).  If you modify this custom `Date` object, it becomes a standard JavaScript `Date` and loses precision.  JavaScript `Date` values can be passed to a Windows Runtime `DateTime` and will be range-checked, which might result in marshaling exceptions.  

The Windows Runtime [TimeSpan][UwpWindowsFoundationTimespan] structure is converted to milliseconds and returned as a JavaScript number.  

## See also  

[Using the Windows Runtime in JavaScript][WindowsRuntimeJavascript]  

<!-- links -->  

[WindowsRuntimeJavascript]: ./using-the-windows-runtime-in-javascript.md "Using the Windows Runtime in JavaScript | Microsoft Docs"  

[UwpWindowsFoundationDatetime]: /uwp/api/Windows.Foundation.DateTime "DateTime Struct | Microsoft Docs"  
[UwpWindowsFoundationTimespan]: /uwp/api/windows.foundation.timespan "TimeSpan Struct | Microsoft Docs"  

[MDNDate]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date "Date | MDN"  
