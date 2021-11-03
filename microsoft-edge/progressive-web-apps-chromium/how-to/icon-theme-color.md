---
title: Define icons and a theme color
description: Learn how to define an app icon for your PWA, a theme color for the title bar, and a background color for the app window.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/27/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: pwa
keywords: progressive web apps, PWA, Edge, Windows, theme, color, icon
---
# Define icons and a theme color

PWAs installed on Windows have abilities to customize the way they appear in the operating system that websites do not have. They can define a set of icons and a theme color for the title bar.


<!-- ====================================================================== -->
## Define icons

In Windows, apps are recognizable to users by their icons. Icons appear in the Taskbar, in the Start Menu, and in other places like system settings.

A PWA can configure which image files the operating system should use to display an icon in these various places. Multiple images can be provided for the OS to choose, depending on the context.

In the web app manifest file, app icons are defined with the `icons` member:

```json
{
    "icons": [
        {
            "src": "/icons/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "/icons/icon-256x256.png",
            "sizes": "256x256",
            "type": "image/png"
        },
        {
            "src": "/icons/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
        },
        {
            "src": "/icons/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ]
}
```

Each icon in the `icons` array should come with at least the `src` and `sizes` properties, but can also have the `type` and `purpose` properties.

| Property | Description |
|:--- |:--- |
| `src` | The path to the image file, which can be a relative path from the app root folder, or an absolute URL. |
| `sizes` | A space-separated list of sizes that the corresponding image can be used for. |
| `type` | An optional hint for the OS to quickly detect the image type |
| `purpose` | An optional hint for the OS to choose the right image depending on context. This can be `monochrome`, `maskable`, or `any`. |

Learn more about [the icons member](https://developer.mozilla.org/docs/Web/Manifest/icons).

<!-- TODO: add information about which sizes Windows require at a minimum, and which sizes are used where -->


<!-- ====================================================================== -->
## Choose a theme color

On Windows, PWAs have their own application window, with a title bar containing the name of the app and the system critical close, maximize, and minimize buttons.

The web content created by the PWA fills the entire surface area of the window, except for the title bar area, which can be customized with a theme color.

The image below shows what a PWA looks like when not using a theme color and when using one that matches the main app color.

:::image type="content" source="../media/app-theme-color-before-after.png" alt-text="The difference between not using and using a theme color." lightbox="../media/app-theme-color-before-after.png":::

The define a theme color, use the `theme_color` web app manifest member as shown below:

```json
{
    "theme_color": "#0d4c73"
}
```

Individual web pages can also define a theme color using the [`theme-color` meta tag](https://developer.mozilla.org/docs/Web/HTML/Element/meta/name/theme-color). When this meta tag is present on the page, its defined color overrides the one found in the web app manifest.

> [!NOTE]
> You can use the [Window Controls Overlay](./window-controls-overlay.md) feature to display your app content in the title bar area.


<!-- ====================================================================== -->
## See also

*   [PWABuilder Image Generator](https://www.pwabuilder.com/imageGenerator)
