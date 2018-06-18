---
description: Represents a deferred request for user permission to access device functionality
title: DeferredPermissionRequest object
author: libbymc
ms.author: libbymc
ms.date: 02/12/2018
ms.topic: reference
ms.prod: microsoft-edge
keywords: webview, windows 10 apps, uwp, edge
---

# DeferredPermissionRequest object

Represents a deferred request by the content of the [webview](../webview.md) for end-user permission to access specialized device functionality (such as geolocation, or pointer lock).

```js
// In this sample, when we receive a permission request we construct some basic UI to ask the
// user if they want to give permission.
webview.addEventListener("MSWebViewPermissionRequested", permissionRequestedEventArgs => {
    const permissionRequest = permissionRequestedEventArgs.permissionRequest;
    const requestContainer = document.createElement("div");

    // We use this function as the handler for the allow and deny buttons.
    function completeDeferredPermissionRequest(allow) {
        // Find the DeferredPermissionRequest using the id of the PermissionRequest we deferred.
        const deferredPermissionRequest = webview.getDeferredPermissionRequestById(permissionRequest.id);
        if (allow) {
            deferredPermissionRequest.allow();
        }
        else {
            deferredPermissionRequest.deny();
        }
        requestContainer.parentElement.removeChild(requestContainer);
    }

    // Construct some simple UI to tell the user about the permission request and get their
    // feedback via the allow and deny buttons
    const description = document.createElement("span");
    description.textContent = "Allow " + uri + " to access " + type + "?";

    const allow = document.createElement("button");
    allow.textContent = "Allow";
    allow.addEventListener("click", () => completeDeferredPermissionRequest(true));

    const deny = document.createElement("button");
    deny.textContent = "Deny";
    deny.addEventListener("click", () => completeDeferredPermissionRequest(false));

    requestContainer.appendChild(description);
    requestContainer.appendChild(allow);
    requestContainer.appendChild(deny);
    document.body.appendChild(requestContainer);

    permissionRequest.defer();
});
```

## Methods

### allow

Allows the request for permission.

```js
deferredPermissionRequest.allow();
```

#### Parameters

This method has no parameters.

#### Return value

This method does not return a value.

### deny

Denies the request for permission.

```js
deferredPermissionRequest.deny();
```

#### Parameters

This method has no parameters.

#### Return value

This method does not return a value.

## Properties

### id

A unique ID that can be used to correlate the current DeferredPermissionRequest with a PermissionRequest object from a previous MSWebViewPermissionRequested event. See the **PermissionRequested.defer** method.

This property is read-only.

```js
var id = deferredPermissionRequest.id;
```

##### Property value

Type: **Unsigned long**

### type

The type of permission being requested. This may be one of the following string values:

- **geolocation**: access to location data via navigator.geolocation.
- **unlimitedIndexedDBQuota**: allow IndexedDB APIs to ignore the usual stored data size limit.
- **media**: access to the microphone and camera via navigator.getUserMedia.
- **pointerlock**: ability to lock and control the mouse pointer via Element.requestPointerLock.
- **webnotifications**: ability to show desktop notifications via window.Notification.
- **screen**: ability to take screen shots via the Media Capture API.
- **immersiveview**: ability to control a VR display.

This property is read-only.

```js
var type = deferredPermissionRequest.type;
```

#### Property value

Type: **String**

### uri

The Uniform Resource Identifier (URI) of the document requesting permission.

This property is read-only.

```js
var uri = deferredPermissionRequest.uri;
```

##### Property value

Type: **String**

## Requirements

|                                           |                                      |
|-------------------------------------------|--------------------------------------|
| <strong>Minimum supported client</strong> | Windows 10 [Windows Store apps only] |
| <strong>Minimum supported server</strong> |            Not supported             |
| <strong>Minimum supported phone</strong>  |            Not supported             |
