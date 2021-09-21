---
title: Define app shortcuts
description: Learn how to make your app's common tasks available in the Windows Taskbar's contextual menu.
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

On mobile devices, shortcuts can usually be accessed by long-pressing an app icon. On Windows, shortcuts are integrated as Jumplists. Jumplists define popup menus that appear when you use the contextual menu (right-click) on a tile in the Start Menu or an icon in the Taskbar.  

:::row:::
    :::column span="1":::
        :::image type="complex" source="../media/edge-ios-shortcuts.png" alt-text="Shortcuts on Microsoft Edge on iOS" lightbox="../media/edge-ios-shortcuts.png":::
            Shortcuts on Microsoft Edge on iOS  
        :::image-end:::  
    :::column-end:::
    :::column span="1":::
        :::image type="complex" source="../media/pwa-shortcuts-in-taskbar.png" alt-text="Jumplist on the Twitter app on Windows" lightbox="../media/pwa-shortcuts-in-taskbar.png":::
           Jumplist on the Twitter app on Windows  
        :::image-end:::  
    :::column-end:::
:::row-end:::  

PWAs can also define common tasks as shortcuts in the [Web App Manifest][ManifestFileDoc].  

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

The following properties can be used.  

| Property | Details |  
|:--- |:--- |  
| `name` | A string that is displayed to the user on **Jumplists** or the contextual menu. |  
| `short_name` | A string that is displayed when insufficient space exists to display the full name of the shortcut. |  
| `description` | A string that describes the purpose of the shortcut.  It may be accessed by assistive technology. |  
| `url` | The URI in the web app that opens when the shortcut is activated. |  
| `icons` | A set of icons that represents the shortcut. |  

To learn more, navigate to the [Shortcuts MDN documentation][MDNShortcuts].  


## Debug shortcuts  

You can test that your shortcuts are configured correctly by using the **Application** panel of DevTools.  

1.   [Open DevTools][OpenDevTools], such as by selecting `F12`.  
1.   Navigate to **Application** > **Manifest**.  
1.   Scroll down to reveal the list of shortcuts.  

:::image type="complex" source="../media/devtools-debug-shortcuts.png" alt-text="Shortcuts are listed in the Application panel" lightbox="../media/devtools-debug-shortcuts.png":::
    Shortcuts are listed in the Application panel  
:::image-end:::  

To learn more about using the Application panel to debug PWAs, navigate to [Debug Progressive Web Apps][ApplicationManifestDevTools].  

<!-- Links -->

[ManifestFileDoc]: ./webappmanifests.md "Use the Web App Manifest to integrate your Progressive Web App into the Operating System | Microsoft Docs"  
[MDNShortcuts]: https://developer.mozilla.org/en-US/docs/Web/Manifest/shortcuts "shortcuts - Web App Manifest | MDN"  
[OpenDevTools]: ../../devtools-guide-chromium/open/index.md "Open Microsoft Edge DevTools | Microsoft Docs"  
[ApplicationManifestDevTools]: ../../devtools-guide-chromium/progressive-web-apps/index.md "Debug Progressive Web Apps | Microsoft Docs"  
