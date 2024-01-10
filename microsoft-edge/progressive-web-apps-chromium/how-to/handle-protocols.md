---
title: Handle protocols in Progressive Web Apps
description: How to register your PWA as a protocol handler to more deeply integrate it in the operating system with other applications.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: pwa
ms.date: 01/12/2022
---
# Handle protocols in Progressive Web Apps

To create a more engaging experience, Progressive Web Apps can handle multiple protocols.  A Uniform Resource Locator (URL) is a string that allows clients to identify a resource on the Web. The first part of a URL is the _protocol_, such as `http` or `mailto`, which lets clients know how to retrieve the resource.

With Protocol Handling, when a PWA is being installed, the PWA can register to handle certain allowed protocols.  For example, an email client app can register to handle the `mailto` protocol, or a geolocation app can register to handle the `geo` protocol.

Custom protocols can also be handled, if a PWA registers a protocol that starts with the `web+` prefix.

To learn more about other existing protocols, see [List of URI schemes](https://wikipedia.org/wiki/List_of_URI_schemes).


<!-- ====================================================================== -->
## Register protocols to handle

To use Protocol Handling, declare which protocols your app handles. This is done in your web app [manifest file](web-app-manifests.md), by using the `protocol_handlers` array member.

Each entry in the `protocol_handlers` array contains a `protocol` string and a `url` string:

```json
{
    "protocol_handlers": [
        {
            "protocol": "mailto",
            "url": "/newEmail?to=%s"
        }
    ]
}
```

In the above example, the app is registered to handle the `mailto` protocol.  When the operating system launches the app in response to the `mailto` protocol, the app navigates to the `/newEmail` URL, replacing the `%s` placeholder with the full URL that's being handled.


<!-- ====================================================================== -->
## Test protocols with the DevTools

You can use the **Application** tool in Microsoft Edge DevTools to verify that Microsoft Edge successfully registered your app as a handler for the protocols you defined in your web app manifest.  You can also test protocols and launch your PWA with different URLs and endpoints.  For more information, see [Test Progressive Web App (PWA) protocol handling](../../devtools-guide-chromium/progressive-web-apps/protocol-handlers.md).


<!-- ====================================================================== -->
## See also

*  [Getting started with Protocol Handlers for your web app](https://blogs.windows.com/msedgedev/2022/01/20/getting-started-url-protocol-handlers-microsoft-edge/)
*  [URL protocol handler registration for PWAs](https://web.dev/url-protocol-handler/)
*  [Test Progressive Web App (PWA) protocol handling](../../devtools-guide-chromium/progressive-web-apps/protocol-handlers.md)
