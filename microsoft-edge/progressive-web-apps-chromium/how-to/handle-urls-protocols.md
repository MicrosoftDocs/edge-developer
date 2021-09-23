---
title: Handle URLs and protocols in Progressive Web Apps
description: Learn how to register your PWA as a URL or protocol handler to more deeply integrate it in the operating system with other applications.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/22/2021
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

URL Handling is also an origin trial in Microsoft Edge. Navigate to [Enroll your site in an origin trial][OriginTrials] to learn more.

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

*  To establish the PWA's ownership of the `contoso.com` origin, the following JSON content needs to be available at `https://contoso.com/.well-known/web-app-origin-association`.

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

*  To establish the PWA's ownership of the `partnerapp.com` origin, the same JSON content needs to be available at `https://partnerapp.com/.well-known/web-app-origin-association`.

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

### Testing URL handling

Testing your app's URL handling from a web browser won't work since page navigation in browsers do not trigger URL handling at the OS level.

To test the feature, send yourself a URL in a chat message app, or a desktop email client like Windows Mail. You can also use the Windows Run app:

*  Press `Windows logo key` + `R`.
*  Enter a URL your app handles.
*  Press `Enter`.

### Demo

[DevTools Tips][DemoDevToolsTips] is a PWA that handles URLs to its own domain so that the app opens instead of the website when one is used.

To test URL handling on DevTools Tips:

*  [Enable the feature](#enable-url-handling) in Microsoft Edge.
*  Navigate to [DevTools Tips][DemoDevToolsTips].
*  Install the app locally.
*  Press `Windows logo key` + `R` to open the Windows Run app.
*  Enter a URL to one of the tips on the site such as https://devtoolstips.org/tips/en/find-css-changes/
*  Press `Enter`.

Windows knows that your app is registered to handle this URL and asks you to choose which app you want to use. Select the DevTools Tips apps. You can also select **Remember my choice** to avoid seeing this dialog every time.

:::image type="complex" source="../media/devtools-tips-url-handling-app-selection.png" alt-text="Selecting an application to handle URLs on Windows" lightbox="../media/devtools-tips-url-handling-app-selection.png":::
   Selecting an application to handle URLs on Windows
:::image-end:::

The app launches and displays the tips page.

:::image type="complex" source="../media/devtools-tips-url-handling.png" alt-text="The DevTools Tips app" lightbox="../media/devtools-tips-url-handling.png":::
   The DevTools Tips app
:::image-end:::

Navigate to the [source code on GitHub][DemoDevToolsTipsGitHub]. In particular, the app registers the handled URLs in the [manifest.json][DemoDevToolsTipsManifestJson] file and the website establishes the app's ownership in the [web-app-origin-association][DemoDevToolsTipsWebAppOriginAssociation] file.

## Handle protocols

Similar to URL Handling, Progressive Web Apps can handle protocols to create a more engaging experience.

A URL (or Uniform Resource Locator) is a string that allows clients to identify a resource on the Web, and it contains an initial part, the protocol, that lets clients know how to retrieve the resource.

Examples of protocols include:

| Protocol | Example |
|:--- |:--- |
| `http` | http://contoso.com/ |
| `mailto` | mailto:contact@contoso.com |

With Protocol Handling, PWAs can register to handle specific protocols when getting installed. For example, an email client app can register to handle the `mailto` protocol, or a geo location app can register to handle the `geo` protocol.

Custom protocols can also be handled if a PWA registers a protocol that starts with the `web+` prefix.

To learn more about other existing protocols, navigate to the [list of URI schemes][WikiListOfURISchemes].

### Enable protocol handling

Protocol Handling is an experimental feature, to enable it:

1.  Navigate to `edge://flags` in Microsoft Edge.
1.  Select **Search flags** and type "protocol handling".
1.  Select **Default** > **Enabled** > **Restart**.

    :::image type="complex" source="../media/enable-protocol-handling-experiment.png" alt-text="Enable the Protocol handling API experiment" lightbox="../media/enable-protocol-handling-experiment.png":::
       Enable the Protocol Handling API experiment
    :::image-end:::

Protocol Handling is also an origin trial in Microsoft Edge. Navigate to [Enroll your site in an origin trial][OriginTrials] to learn more.

### Register protocols to handle

The only thing to do is to use Protocol Handling is declare which protocols your app handles. This is done in your app [manifest file][ManifestFileDoc], using the `protocol_handlers` array member.

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

In the above example, the app is registered to handle the `mailto` protocol and when the operating system launches the app in response to it, it navigates to the `/newEmail` URL.

The `%s` placeholder will be replaced with the full URL being handled.

## See also

*  [Handling URLs in PWAs video][URLHandlingVideoTutorial].
*  [PWAs as URL Handlers][URLHandlersWebDev]
*  [URL protocol handler registration for PWAs][ProtocolHandlersWebDev].

<!-- links -->

[WICGUrlHandlerExplainer]: https://github.com/WICG/pwa-url-handler/blob/main/explainer.md#web-app-origin-association-file "PWAs as URL Handlers | WICG"
[OriginTrials]: ./origin-trials.md#enroll-your-site-in-an-origin-trial "Experimental features and origin trials | Microsoft Docs"
[URLHandlingVideoTutorial]: https://www.youtube.com/watch?v=jYc7ih9Xwqw "Handle URLs natively in your Progressive Web App video tutorial | YouTube"
[URLHandlersWebDev]: https://web.dev/pwa-url-handler/ "PWAs as URL Handlers | web.dev"
[DemoDevToolsTips]: https://devtoolstips.org/ "DevTools Tips"
[DemoDevToolsTipsGitHub]: https://github.com/captainbrosset/devtools-tips/ "DevTools Tips | GitHub"
[DemoDevToolsTipsManifestJson]: https://github.com/captainbrosset/devtools-tips/blob/main/src/manifest.json
[DemoDevToolsTipsWebAppOriginAssociation]: https://github.com/captainbrosset/devtools-tips/blob/main/src/.well-known/web-app-origin-association
[ProtocolHandlersWebDev]: https://web.dev/url-protocol-handler/ "URL protocol handler registration for PWAs | web.dev"
[WikiListOfURISchemes]: https://en.wikipedia.org/wiki/List_of_URI_schemes "List of URI schemes | Wikipedia"
[ManifestFileDoc]: ./webappmanifests.md "Use the Web App Manifest to integrate your Progressive Web App into the Operating System | Microsoft Docs"
