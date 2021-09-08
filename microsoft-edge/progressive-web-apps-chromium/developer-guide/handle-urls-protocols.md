---
title: Handle URLs and protocols in Progressive Web Apps
description: Learn how to register your PWA as a URL or protocol handler to more deeply integrate it in the operating system with other applications.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/08/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: pwa
keywords: progressive web apps, PWA, Edge, JavaScript, URL, protocol
---
# Handle URLs and protocols in Progressive Web Apps  

## Handle URLs  

Native applications on many operating systems can be associated with URLs. They can request to be launched when associated URLs are activated. For example, when a user clicks on a Spotify link in an email or a chat message, the installed Spotify app can launch to handle the link.

Progressive Web Apps can also handle URLs and doing so can create a more engaging experience.  

> [!NOTE]
> At the moment, in-browser page navigation does not trigger PWA URL handling.  

### Enable URL handling  

URL handling is still experimental, to enable it:  

1.  Navigate to `edge://flags` in Microsoft Edge.  
1.  Select **Search flags** and type "url handling".  
1.  Select **Default** > **Enabled** > **Restart**.  

    :::image type="complex" source="../media/enable-url-handling-experiment.png" alt-text="Enable the URL handling API experiment" lightbox="../media/enable-url-handling-experiment.png":::
       Enable the URL Handling API experiment  
    :::image-end:::  

### Define which URLs your app handles  

The first thing to do is declare which URLs your app handles. This is done in your app [manifest file][ManifestFileDoc], using the `url_handlers` array member.

Each entry in the `url_handlers` array contains a `origin` string, which is a pattern for matching origins.  

```json
{
    "url_handlers": [
        {
            "origin": "https://contoso.com"
        },
        {
            "origin": "https://*.contoso.com"
        },
        {
            "origin": "https://conto.so"
        }
    ]
}
```  

In the above example, the app is registered to handle URLs that have their origins set to `contoso.com` or any of its subdomains, as well as `conto.so`.  

### Verify the origin ownership  

Microsoft Edge needs to verify the PWA's ownership of the handled URLs to successfully launch the app. This is required when the handled URL and the PWA are both on the same origin and when they're not. In most cases, the PWA will handle URLs that have the same origin, but this is not required.  

Origin ownership is established with the `web-app-origin-association` JSON file, which is used by Microsoft Edge to validate the handshake between the PWA and the URL.  

Let's take the example of a PWA hosted at `https://app.contoso.com` trying to handle `https://contoso.com` and `https://partnerapp.com` URLs.

*  To establish the PWA's ownership of the `contoso.com` origin, the following JSON content needs to be added to `https://contoso.com/.well-known/web-app-origin-association`.  

    ```json
    {
        "web_apps": [
            {
                "manifest": "https://app.contoso.com/manifest.json",
                "details": {
                    "paths": [
                        "/*"
                    ]
                }
            }
        ]
    }
    ```  

*  To establish the PWA's ownership of the `partnerapp.com` origin, the same JSON content needs to be added to `https://partnerapp.com/.well-known/web-app-origin-association`.  

    ```json
    {
        "web_apps": [
            {
                "manifest": "https://app.contoso.com/manifest.json",
                "details": {
                    "paths": [
                        "/*"
                    ]
                }
            }
        ]
    }
    ```  

To learn more about the valid members in `web-app-origin-association`, navigate to the [URL Handlers explainer][WICGUrlHandlerExplainer].  

## Handle protocols  

**TODO**

### Enable protocol handling  

Protocol handling is also experimental, to enable it:  

1.  Navigate to `edge://flags` in Microsoft Edge.  
1.  Select **Search flags** and type "protocol handling".  
1.  Select **Default** > **Enabled** > **Restart**.  

    :::image type="complex" source="../media/enable-protocol-handling-experiment.png" alt-text="Enable the Protocol handling API experiment" lightbox="../media/enable-protocol-handling-experiment.png":::
       Enable the Protocol Handling API experiment  
    :::image-end:::  

## Sample app  

**TODO** Link to an app on our sample catalog that uses this API, and link to its source code on GitHub.

<!-- links -->  

[WICGUrlHandlerExplainer]: https://github.com/WICG/pwa-url-handler/blob/main/explainer.md#web-app-origin-association-file
