---
title: Handle protocols in a PWA
description: How to register your PWA as a protocol handler to more deeply integrate it in the operating system with other applications.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: pwa
ms.date: 01/12/2022
---
# Handle protocols in a PWA

To create a more engaging experience, a Progressive Web App (PWA) can handle multiple protocols.  A Uniform Resource Locator (URL) is a string that allows clients to identify a resource on the Web.  The first part of a URL is the _protocol_, such as `http` or `mailto`, which lets clients know how to retrieve the resource.

With Protocol Handling, when a PWA is being installed, the PWA can register to handle certain allowed protocols.  For example, an email client app can register to handle the `mailto` protocol, or a geolocation app can register to handle the `geo` protocol.

Custom protocols can also be handled, if a PWA registers a protocol that starts with the `web+` prefix.

To learn more about other existing protocols, see [List of URI schemes](https://wikipedia.org/wiki/List_of_URI_schemes).


<!-- ====================================================================== -->
## Register protocols to handle

To use Protocol Handling, declare which protocols your app handles. This is done in your web app manifest file, by using the `protocol_handlers` array member.  Each entry in the `protocol_handlers` array contains a `protocol` string and a `url` string:

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

See also:
* [protocol_handlers](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Manifest/Reference/protocol_handlers) for PWAs, at MDN.


<!-- ====================================================================== -->
## Test protocols with the DevTools

You can use the **Application** tool in Microsoft Edge DevTools to verify that Microsoft Edge successfully registered your app as a handler for the protocols you defined in your web app manifest.  You can also test protocols and launch your PWA with different URLs and endpoints.  For more information, see [Test Progressive Web App (PWA) protocol handling](../../devtools/progressive-web-apps/protocol-handlers.md).


<!-- ====================================================================== -->
## See also
<!-- all links in article body, plus addl -->

* [Test Progressive Web App (PWA) protocol handling](../../devtools/progressive-web-apps/protocol-handlers.md)<!-- link is in article body -->

Blog:
* [Getting started with Protocol Handlers for your web app](https://blogs.windows.com/msedgedev/2022/01/20/getting-started-url-protocol-handlers-microsoft-edge/)<!-- link not in article body -->

MDN:
* [protocol_handlers](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Manifest/Reference/protocol_handlers) for PWA manifest.<!-- link is in article body -->
* [Best practices for PWAs](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Guides/Best_practices)<!-- link not in article body -->
* [Navigator: registerProtocolHandler() method](https://developer.mozilla.org/docs/Web/API/Navigator/registerProtocolHandler)<!-- link not in article body -->

developer.chrome.com:
* [URL protocol handler registration for PWAs](https://developer.chrome.com/docs/web-platform/best-practices/url-protocol-handler)<!-- link not in article body -->

Wikipedia:
* [List of URI schemes](https://wikipedia.org/wiki/List_of_URI_schemes)<!-- link is in article body -->
