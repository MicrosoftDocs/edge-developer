---
title:  "Handling Windows Runtime Events in JavaScript"
ms.custom:  ""
ms.date:  "03/30/2017"
ms.prod:  microsoft-edge
ms.reviewer:  ""
ms.suite:  ""
ms.technology:  "windows-integration"
ms.tgt_pltfrm:  ""
ms.topic:  "article"
helpviewer_keywords:  
  - "JavaScript, Windows Runtime events"
  - "Windows Runtime events [JavaScript]"
ms.assetid:  d9436aff-2c30-4846-b8df-eaa3e63fd75c
caps.latest.revision:  6
author:  "MSEdgeTeam"
ms.author:  "msedgedevrel"
manager:  ""
---
# Handling Windows Runtime Events in JavaScript  

Windows Runtime events are not represented in the same way in JavaScript as they are in C++ or the .NET Framework.  They are not class properties, but rather are represented as \(lowercase\) string identifiers that are passed to the class's `addEventListener` and `removeEventListener` methods.  For example, you can add an event handler for the [Geolocator.PositionChanged][UwpWindowsGeolocationGeolocatorDevicesPositionChanged] event by passing the string "positionchanged" to the `Geolocator.addEventListener` method:  

```javascript  
var locator = new Windows.Devices.Geolocation.Geolocator();
locator.addEventListener(
    "positionchanged",
    function (ev) {
        console.log("Got event");
    });
```  

You can also set the `locator.onpositionchanged` property:  

```javascript
locator.onpositionchanged =
    function (ev) {
        console.log("Got event");
    };
```  

Another difference between .NET/C++ and JavaScript is the number of parameters taken by an event handler.  In .NET/C++, a handler takes two:  the event sender, and the event data.  In JavaScript, the two are bundled as a single `Event` object.  In the following example, the `ev` parameter contains both the sender of the event \(the `target` property\) and the event data properties \(here, just `position`\).  The event data properties are the ones that are documented for each event.  

```javascript
function (ev) {
    console.log("Sender:  " + ev.target);
    console.log("Position:  " +
        ev.position.latitude + "," +
        ev.position.longitude);
};
```  

> [!IMPORTANT]
> Windows Runtime features are not available for apps that run in Internet Explorer.  

## See Also  

[Using the Windows Runtime in JavaScript][WindowsRuntimeJavascript]  

 <!-- image links -->  

 <!-- links -->  

[WindowsRuntimeJavascript]: /microsoft-edge/windows-runtime/using-the-windows-runtime-in-javascript "Using the Windows Runtime in JavaScript"  

[UwpWindowsGeolocationGeolocatorDevicesPositionChanged]: /uwp/api/Windows.Devices.Geolocation.Geolocator#Windows_Devices_Geolocation_Geolocator_PositionChanged "Geolocator Class"  
