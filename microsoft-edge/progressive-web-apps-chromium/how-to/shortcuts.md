---
title: Define app shortcuts
description: Learn how to make your app's common tasks available in the Windows Taskbar's context menu.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/13/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: pwa
keywords: progressive web apps, PWA, Edge, Windows, Taskbar, jumplist, shortcut
---
# Define app shortcuts

App shortcuts let users accomplish common tasks more quickly and easily and can increase their engagement with an app.

On mobile devices, shortcuts can usually be accessed by long-pressing an app icon. On Windows, shortcuts are integrated as Jumplists. Jumplists define popup menus that appear when you use the context menu (right-click) on a tile in the Start Menu or an icon in the Taskbar.

:::row:::
    :::column span="1":::
        :::image type="content" source="../media/edge-ios-shortcuts.png" alt-text="Shortcuts on Microsoft Edge on iOS." lightbox="../media/edge-ios-shortcuts.png":::
    :::column-end:::
    :::column span="1":::
        :::image type="content" source="../media/pwa-shortcuts-in-taskbar.png" alt-text="Jumplist on the Twitter app on Windows." lightbox="../media/pwa-shortcuts-in-taskbar.png":::
    :::column-end:::
:::row-end:::

PWAs can also define common tasks as shortcuts in the [Web App Manifest](./web-app-manifests.md).


<!-- ====================================================================== -->
## Define shortcuts

Defining shortcuts is done by using the `shortcuts` manifest member. This member is an array that can contain multiple shortcuts. Each shortcut is essentially a URL that gets requested when the shortcut is used and the app is launched.

```json
{
    "shortcuts" : [
        {
            "name": "Today's agenda",
            "url": "/today",
            "description": "List of events planned for today"
        },
        {
            "name": "New event",
            "url": "/create/event"
        },
        {
            "name": "New reminder",
            "url": "/create/reminder"
        }
    ]
}
```

The following properties can be used:

| Property | Details |
|---|---|
| `name` | A string that is displayed to the user on **Jumplists** or the context menu. |
| `short_name` | A string that is displayed when insufficient space exists to display the full name of the shortcut. |
| `description` | A string that describes the purpose of the shortcut.  The string can be accessed by assistive technology. |
| `url` | The URI in the web app that opens when the shortcut is activated. |
| `icons` | A set of icons that represents the shortcut. |

To learn more, see the [Shortcuts MDN documentation](https://developer.mozilla.org/docs/Web/Manifest/shortcuts).


<!-- ====================================================================== -->
## Debug shortcuts

You can test that your shortcuts are configured correctly by using the **Application** panel of DevTools.

1.   [Open DevTools](../../devtools-guide-chromium/open/index.md), such as by selecting `F12`.
1.   Navigate to **Application** > **Manifest**.
1.   Scroll down to reveal the list of shortcuts.

:::image type="content" source="../media/devtools-debug-shortcuts.png" alt-text="Shortcuts are listed in the Application panel." lightbox="../media/devtools-debug-shortcuts.png":::

To learn more about using the Application panel to debug PWAs, see [Debug Progressive Web Apps](../../devtools-guide-chromium/progressive-web-apps/index.md).
