---
title: Use a Web App Manifest to integrate a Progressive Web App into the Operating System
description: Learn how to use the Web App Manifest to integrate your Progressive Web App into your operating system.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/07/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: pwa
keywords: progressive web apps, PWA, Edge, JavaScript, Windows, UWP, Microsoft Store
---
# Use a Web App Manifest to integrate a Progressive Web App into the Operating System

A Web App Manifest of a website governs how your Progressive Web App (PWA) looks and behaves when installed on a device. The Web App Manifest provides information such as the name of your app, the file location of icons that represent your app in system menus, and the theme colors that the operating system (OS) uses in the title bar.

A Web App Manifest is a JSON file that must be referenced from your website's HTML page using a manifest link. Insert the following code in between the `<head>` and `</head>` tags of your website's HTML page to link to your manifest file:

```html
<link rel="manifest" href="/manifest.json">
```

> [!NOTE]
> The manifest file's content must be valid JSON, but the file can also be named like `app_name.webmanifest`. If you choose to use the `webmanifest` extension, verify that your HTTP server serves it with the `application/manifest+json` MIME type.

At a minimum, a manifest file should contain the following information:

```json
{
    "name": "My Sample PWA",
    "lang": "en-US",
    "start_url": "/"
}
```

A PWA can be customized further using other manifest members such as the following:

| Member | Description |
|:--- |:--- |
| `name` | The name of the app, used by the OS to display next to the app's icon. |
| `short_name` | This can be used to display the name of the app when there isn't enough space for `name`. |
| `lang` | The primary language of the app. |
| `start_url` | The preferred URL that should be navigated to when the operating system launches your app. |
| `scope` | Defines the navigation scope for the app. Outside of this scope, the visited page reverts to a normal webpage, not a PWA. This defaults to `start_url`. |
| `display` | What the app should look like. This changes how much of the browser UI is shown to the user. |
| `theme_color` | The default theme color for the app. This affects how the OS displays the site. |
| `background_color` | The background color of the window where the app is launched, before the stylesheet is applied. |
| `orientation` | On supporting devices, this defines the default orientation for the app (such as landscape or portrait). |
| `icons` | Array of icon image objects that are used by the OS in different contexts. |
| `description` | What the app is about. |

Below is a manifest file that uses these manifest members:

```json
{
    "name": "My Sample PWA",
    "lang": "en-us",
    "short_name": "SamplePWA",
    "description": "A sample PWA for testing purposes",
    "start_url": "/",
    "scope": "/",
    "display": "standalone",
    "theme_color": "#2f3d58",
    "background_color": "#2f3d58",
    "orientation": "any",
    "icons": [
        {
            "src": "/icon512.png",
            "sizes": "512x512"
        }
    ]
}
```

To learn more about manifest members, see the [Web app manifests documentation](https://developer.mozilla.org/docs/Web/Manifest) at MDN.

Using a manifest also enables you to unlock powerful features that allow your app to behave like native apps, such as adding app shortcuts, or identifying as a share target.

<!-- todo: when these experimental features land in the manifest and so are no longer experimental, move the "URI Protocol Handling" & "URL Link Handling" sections from article [Experimental features in Progressive Web Apps (PWAs)](experimental-features/index.md) into the present article, but preserve the two headings there, move them to the bottom, with a link pointing to the moved sections in this article. -->


<!-- ====================================================================== -->
## Use shortcuts to provide quick access to features

Most operating systems provide quick access to key app features using shortcuts on the context menu connected to the icon of the app.  To use shortcuts in your PWA, include the `shortcuts` property in your Web App Manifest.  The following code snippet shows how to define a shortcut in your web app manifest.

```json
"shortcuts": [
    {
        "name": "Play Later",
        "description": "View the list of podcasts you saved for later",
        "url": "/play-later",
        "icons": [
            {
                "src": "/icons/play-later.svg",
                "type": "image/svg+xml",
                "purpose": "any"
            }
        ]
    },
    {
        "name": "Subscriptions",
        "description": "View the list of podcasts available in your subscription",
        "url": "/subscriptions?sort=desc"
    }
]
```

To learn more, see [Define app shortcuts](shortcuts.md).


<!-- ====================================================================== -->
## Identify your app as a Share Target

To enable users to quickly share links and files with native applications, use the `share_target` object in the Web App Manifest.  An `action` page is similar to a form.  In the `share_target` object, you define the `action` page and the parameters that you expect to be passed into the `action` page.

```json
"share_target": {
    "action": "/share.html",
    "params": {
        "title": "name",
        "text": "description",
        "url": "link"
    }
}
```

The above `share_target` object establishes `/share.html` as the `action` page for a share.  This example also defines three parameters that would be passed to that `action` page: `title`, `text`, and `url`.

To learn more about using the Share Target feature, see [Share with other apps](share.md).


<!-- ====================================================================== -->
## See also

*  [Getting Started with Progressive Web Apps (Workshop)](https://noti.st/aarongustafson/co3b5z/getting-started-with-progressive-web-apps-workshop).
