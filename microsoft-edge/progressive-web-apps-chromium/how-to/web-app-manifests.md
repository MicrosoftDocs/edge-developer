---
title: Use a web app manifest to integrate a Progressive Web App into the operating system
description: How to use the web app manifest to integrate your Progressive Web App into your operating system.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: pwa
ms.date: 11/28/2022
---
# Use a web app manifest to integrate a Progressive Web App into the operating system

The web app manifest file governs how your Progressive Web App (PWA) looks and behaves when installed on a device. The web app manifest provides information such as the name of your app, the file location of icons that represent your app in system menus, and the theme colors that the operating system (OS) uses in the title bar.

A web app manifest is a JSON file that must be referenced from your website's HTML page using a manifest link. Insert the following code in between the `<head>` and `</head>` tags of your website's HTML page to link to your manifest file:

```html
<link rel="manifest" href="/manifest.json">
```


<!-- ====================================================================== -->
## Web app manifest file type

The content of your web app manifest must be valid JSON, but the file extension can be either `.json` or `.webmanifest`.

If you choose to use the `.webmanifest` extension, verify that your HTTP server serves it with the `application/manifest+json` MIME type.


<!-- ====================================================================== -->
## Manifest members

At a minimum, a manifest file should contain the following manifest members:

```json
{
    "name": "My Sample PWA",
    "lang": "en-US",
    "start_url": "/"
}
```

Below is an example of a manifest file that contains more members:

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

A PWA can be customized even further by using other manifest members, such as the following:

| Member | Description |
|:--- |:--- |
| `name` | The name of the app, used by the operating system to display next to the app's icon. |
| `short_name` | This can be used to display the name of the app when there isn't enough space for `name`. |
| `description` | The description of the app. |
| `categories` | The list of categories the app belongs to.  |
| `icons` | Array of icon image objects that are used by the OS in different contexts. |
| `screenshots` | Array of screenshot image objects, also used by the OS in different contexts.  |
| `start_url` | The preferred URL that should be navigated to when the operating system launches your app. |
| `scope` | Defines the navigation scope for the app. Outside of this scope, the visited page reverts to a normal webpage, not a PWA. This defaults to `start_url`. |
| `display` | What the app should look like. This changes how much of the browser UI is shown to the user. |
| `display_override` | Used to determine the preferred display for the app, depending on what the device supports. |
| `theme_color` | The default theme color for the app. This affects how the OS displays the site. |
| `background_color` | The background color of the window where the app is launched, before the stylesheet is applied. |
| `orientation` | On supporting devices, this defines the default orientation for the app (such as landscape or portrait). |
| `protocol_handlers` | The list of predefined or custom URI protocol schemes the app is associated with. |
| `shortcuts` | The list of common tasks users will be able to do by right-clicking or long-pressing on the app icon. |
| `share_target` | The type of data that the app accepts when content is shared via the OS share dialog. |
| `file_handlers` | The type of files that the app can be launched with. |

To learn more about manifest members, see [web app manifests](https://developer.mozilla.org/docs/Web/Manifest) at MDN.


<!-- ====================================================================== -->
## Handle specific protocol schemes

You can register your PWA as a protocol handler. When a user clicks on a link that uses the protocol scheme your app registered to, your app is launched automatically. This enables users to easily share links to specific parts or functionality of your app with each other.

To register as a protocol handler, use the `protocol_handlers` manifest member:

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

To learn more, see [Handle protocols in Progressive Web Apps](handle-protocols.md).


<!-- ====================================================================== -->
## Use shortcuts to provide quick access to features

Most operating systems provide quick access to key app features by using shortcuts on the right-click menu that's connected to the icon of the app.  To use shortcuts in your PWA, include the `shortcuts` member in your web app manifest.

The following code shows how to define a shortcut in a web app manifest.

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

To enable users to quickly share links and files with native applications, use the `share_target` object in the web app manifest.  An `action` page is similar to a form.  In the `share_target` object, you define the `action` page and the parameters that you expect to be passed into the `action` page.

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

To learn more about using the Share Target feature, see [Share content with other apps](share.md).


<!-- ====================================================================== -->
## Associate your app with files

When a PWA is registered as a file handler for certain file types, the operating system can automatically launch the app when those files are opened by the user, similar to how Microsoft Word handles `.docx` files. PWAs that handle files feel more native to users and better integrated in the operating system. 

To handle files, list the file mime types and extensions you want your app to be associated with, and define the URL that your app should be launched with:

```json
{
    "file_handlers": [
        {
            "action": "/openFile",
            "accept": {
                "text/*": [
                    ".txt"
                ]
            }
        }
    ]
}
```

Then handle the files by using the `window.launchQueue()` method:

```javascript
if ('launchQueue' in window) {
    launchQueue.setConsumer(launchParams => {
        // Do something with launchParams.files ...
    });
}
```

To learn more, see [Handle files in Progressive Web Apps](handle-files.md).
