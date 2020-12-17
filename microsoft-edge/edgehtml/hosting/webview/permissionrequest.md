---
description: Provides information about a permission request
title: PermissionRequest object
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: reference
ms.prod: microsoft-edge
keywords: webview, windows 10 apps, uwp, edge
ms.date: 12/02/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# PermissionRequest object  

[!INCLUDE [deprecation-note](../includes/deprecation-note.md)]  

Provides information about a permission request. This object is available from the permissionRequest property of the event args from the [MSWebViewPermissionRequested](../webview/index.md#mswebviewpermissionrequested) webview event.  

```javascript
webview.addEventListener("MSWebViewPermissionRequested", permissionRequestedEventArgs => {
    const permissionRequest = permissionRequestedEventArgs.permissionRequest;
    switch (permissionRequest.type) {
        case "geolocation":
        case "media":
        case "pointerlock":
        case "webnotifications":
        case "screen":
        case "immersiveview":
            if (permissionRequest.uri.startsWith("https://www.example.com/")) {
                // Implicitly trust particular URI
                permissionRequest.allow();
            }
            else if (permissionRequest.uri.startsWith("https://")) {
                // Defer the request so we can ask the user to allow or deny the request
                permissionRequest.defer();
                // Later we'll need to use webview.getDeferredPermissionRequestById for this
                // request and call allow or deny.
                promptUserForDeferredPermissionRequest(
                    permissionRequest.id,
                    permissionRequest.uri,
                    permissionRequest.type);
            }
            else {
                // Implicitly deny non-https URIs
                permissionRequest.deny();
            }
            break;

        case "unlimitedIndexedDBQuota":
        default:
            permissionRequest.deny();
            break;
    }
});
```  

## Methods  

### allow  

Allows the request for permission.  

#### Parameters  

This method has no parameters.  

#### Return value  

This method does not return a value.  

### defer  

If instead of synchronously allowing or disallowing a PermissionRequest, you require time to interact with the user or take some other asynchronous action, call defer() on the PermissionRequest.  The PermissionRequest will now be available as a DeferredPermissionRequest from getDeferredPermissionRequests and getDeferredPermissionRequestById.  You can correlate the current PermissionRequest with the corresponding DeferredPermissionRequest via the matching id property.  

#### Parameters  

This method has no parameters.  

#### Return value  

This method does not return a value.  

### deny  

Denies the request for permission.  

#### Parameters  

This method has no parameters.  

#### Return value  

This method does not return a value.  

## Properties  

### id  

A unique ID that can be used to correlate the current PermissionRequest with a corresponding DeferredPermissionRequest if the defer method is used.  See the defer method.  

This property is read-only.  

##### Property value  

Type: **Unsigned long**  

### state  

Returns "unknown", "defer", "allow", or "deny" to indicate the current state of permission request.  The state string will correspond to whichever method allow, deny, or defer was called last or "unknown" if none of the methods have been called.  

This property is read-only.  

#### Property value  

Type: **String**  

### type  

The type of permission being requested. This may be one of the following string values:  

*   **geolocation**: access to location data via navigator.geolocation.  
*   **unlimitedIndexedDBQuota**: allow IndexedDB APIs to ignore the usual stored data size limit.  
*   **media**: access to the microphone and camera via navigator.getUserMedia.  
*   **pointerlock**: ability to lock and control the mouse pointer via Element.requestPointerLock.  
*   **webnotifications**: ability to show desktop notifications via window.Notification.  
*   **screen**: ability to take screen shots via the Media Capture API.  
*   **immersiveview**: ability to control a VR display.  

This property is read-only.  

#### Property value  

Type: **String**  

### uri  

The Uniform Resource Identifier (URI) of the document requesting permission.  

This property is read-only.  

#### Property value  

Type: **String**  
