---
title: Handle protocols in Progressive Web Apps
description: Learn how to register your PWA as a protocol handler to more deeply integrate it in the operating system with other applications.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/29/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: pwa
keywords: progressive web apps, PWA, Edge, JavaScript, protocol
---
# Handle protocols in Progressive Web Apps

To create a more engaging experience, Progressive Web Apps can handle multiple protocols.  A Uniform Resource Locator (URL) is a string that allows clients to identify a resource on the Web. The first part of a URL is the _protocol_, such as `http` or `mailto`, which lets clients know how to retrieve the resource.

With Protocol Handling, when a PWA is being installed, the PWA can register to handle certain allowed protocols.  For example, an email client app can register to handle the `mailto` protocol, or a geolocation app can register to handle the `geo` protocol.

Custom protocols can also be handled, if a PWA registers a protocol that starts with the `web+` prefix.

To learn more about other existing protocols, see [List of URI schemes](https://en.wikipedia.org/wiki/List_of_URI_schemes).


<!-- ====================================================================== -->
## Enable protocol handling

Protocol Handling is an experimental feature.  To turn on protocol handling:

1.  Go to `edge://flags` in Microsoft Edge.
1.  Select **Search flags**, and then type "protocol handling".
1.  Select **Default** > **Enabled** > **Restart**.

:::image type="content" source="../media/enable-protocol-handling-experiment.png" alt-text="Enable the 'Protocol handling' API experiment.":::

Protocol Handling is also an origin trial in Microsoft Edge. Learn [how to enroll your site in an origin trial](./origin-trials.md#enroll-your-site-in-an-origin-trial).


<!-- ====================================================================== -->
## Register protocols to handle

To use Protocol Handling, declare which protocols your app handles. This is done in your app [manifest file](./web-app-manifests.md), by using the `protocol_handlers` array member.

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
## See also

*  [URL protocol handler registration for PWAs](https://web.dev/url-protocol-handler/)
