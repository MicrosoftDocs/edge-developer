---
title: Handle URLs in Progressive Web Apps
description: Learn how to register your PWA as a URL handler to more deeply integrate it in the operating system with other applications.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/29/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: pwa
keywords: progressive web apps, PWA, Edge, JavaScript, URL
---
# Handle URLs in Progressive Web Apps

Native applications on many operating systems can be associated with URLs. They can request to be launched, instead of the browser, when associated URLs are activated.

Progressive Web Apps can also handle URLs in the same way, and doing so can create a more engaging experience.

> [!NOTE]
> At the moment, in-browser page navigation doesn't trigger PWA URL handling.


<!-- ====================================================================== -->
## Enable URL handling

URL handling is still experimental, to enable it:

1.  Go to `edge://flags` in Microsoft Edge.
1.  Select **Search flags** and type "url handling".
1.  Select **Default** > **Enabled** > **Restart**.

    :::image type="content" source="../media/enable-url-handling-experiment.png" alt-text="Enable the URL handling API experiment." lightbox="../media/enable-url-handling-experiment.png":::

URL Handling is also an origin trial in Microsoft Edge. Learn [how to enroll your site in an origin trial](./origin-trials.md#enroll-your-site-in-an-origin-trial).


<!-- ====================================================================== -->
## Define which URLs your app handles

The first thing to do is declare which URLs your app handles. This is done in your app [manifest file](./web-app-manifests.md), using the `url_handlers` array member.

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


<!-- ====================================================================== -->
## Verify the origin ownership

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

To learn more about the valid members in `web-app-origin-association`, see the [URL Handlers explainer](https://github.com/WICG/pwa-url-handler/blob/main/explainer.md#web-app-origin-association-file).


<!-- ====================================================================== -->
## Testing URL handling

Testing your app's URL handling from a web browser won't work since in-browser page navigation does not trigger URL handling at the OS level.

To test the feature, send yourself a URL in a chat message app, or a desktop email client like Windows Mail. You can also use the Windows Run app:

*  Press `Windows logo key` + `R`.
*  Enter a URL your app handles.
*  Press `Enter`.

> [!NOTE]
> At the moment, only PWAs that were installed from the default system browser can handle URLs.


<!-- ====================================================================== -->
## Demo

[DevTools Tips](https://devtoolstips.org/) is a PWA that handles URLs to its own domain so that the app opens instead of the website when one is used.

To test URL handling on DevTools Tips:

*  [Enable the feature](#enable-url-handling) in Microsoft Edge.
*  Go to [DevTools Tips](https://devtoolstips.org/).
*  Install the app locally.
*  Press `Windows logo key` + `R` to open the Windows Run app.
*  Enter a URL to one of the tips on the site such as https://devtoolstips.org/tips/en/find-css-changes/
*  Press `Enter`.

Windows knows that your app is registered to handle this URL and asks you to choose which app you want to use. Select the DevTools Tips apps. You can also select **Remember my choice** to avoid seeing this dialog every time.

:::image type="content" source="../media/devtools-tips-url-handling-app-selection.png" alt-text="Selecting an application to handle URLs on Windows." lightbox="../media/devtools-tips-url-handling-app-selection.png":::

The app launches and displays the tips page.

You can find the [source code on GitHub](https://github.com/captainbrosset/devtools-tips/). In particular, the app registers the handled URLs in the [manifest.json](https://github.com/captainbrosset/devtools-tips/blob/main/src/manifest.json) file and the website establishes the app's ownership in the [web-app-origin-association](https://github.com/captainbrosset/devtools-tips/blob/main/src/.well-known/web-app-origin-association) file.


<!-- ====================================================================== -->
## See also

*  [Handling URLs in PWAs video](https://www.youtube.com/watch?v=jYc7ih9Xwqw).
*  [PWAs as URL Handlers](https://web.dev/pwa-url-handler/).
