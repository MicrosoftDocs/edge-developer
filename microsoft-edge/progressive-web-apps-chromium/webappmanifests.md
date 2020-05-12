---
title: Use the Web App Manifest to integrate your Progressive Web App into the Operating System
description: The Web App Manifest governs how your app looks and behaves within the context of the Operating System.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/11/2020
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: pwa
keywords: progressive web apps, PWA, Edge, JavaScript, Windows, UWP, Microsoft Store
---

# Deeper OS Integrations Using The Web App Manifest  

A Web App Manifest of a website governs how your Progressive Web App \(PWA\) looks and behaves when installed on a device.  At the most basic level, the Manifest provides details on the name of your app, icons to use to represent your app in system menus, and the theme colors the operating system \(OS\) uses in the title bar.  The Manifest also enables you to unlock powerful features that allow your app to behave like other native apps on the system.  

## Use shortcuts to provide quick access to features  

Most operating systems provide quick access to key app features using shortcuts on the context menu connected to the icon of the app.  To use shortcuts in your PWA, include the `shortcuts` property in your Web App Manifest.  The following defines a shortcut in your web app manifest.  

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

When added to a complete Web App Manifest, adding the previous code snippet enables two shortcuts on the context menu on the icon of the app.  The first is named `Play Later` and has a custom icon.  The second is named `Subscriptions` and does not have an icon because the `icons` property is optional.  The `description` property is also optional and may be used to provide additional information for accessibility purposes.  

## See also  

To learn more about Web App Manifests, see the following list of related topics.  

*   [Web App Manifests][MDNWebAppManifests]  

<!-- links -->  

[MDNWebAppManifests]: https://developer.mozilla.org/docs/Web/Manifest "Web app manifests | MDN"  
