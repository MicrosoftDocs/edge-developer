---
description: Provides event information about the current permission request
title: PermissionRequestedEvent object
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: reference
ms.prod: microsoft-edge
keywords: webview, windows 10 apps, uwp, edge
ms.date: 12/02/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# PermissionRequestedEvent object  

[!INCLUDE [deprecation-note](../includes/deprecation-note.md)]  

Provides event information about the current permission request.  

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

## Properties  

### permissionRequest  

Returns a **[PermissionRequest](permissionrequest.md)** object that represents the end-user permission request made by content of the [webview](../webview/index.md).  

This property is read-only.  
