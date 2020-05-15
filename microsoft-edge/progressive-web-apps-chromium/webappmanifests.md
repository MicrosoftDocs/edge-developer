---
title: Use the Web App Manifest to integrate your Progressive Web App into the Operating System
description: Learn how to use the Web App Manifest to integrate your Progressive Web App into your Operating System.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/11/2020
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: pwa
keywords: progressive web apps, PWA, Edge, JavaScript, Windows, UWP, Microsoft Store
---

# Use the Web App Manifest to integrate your Progressive Web App into the Operating System

A Web App Manifest of a website governs how your Progressive Web App \(PWA\) looks and behaves when installed on a device.  At the most basic level, the Manifest provides details on the name of your app, icons to use to represent your app in system menus, and the theme colors the operating system \(OS\) uses in the title bar.  The Manifest also enables you to unlock powerful features that allow your app to behave like other native apps on the system.  

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

When added to a complete Web App Manifest, adding the previous code snippet enables two shortcuts on the context menu on the icon of the app.  The first is named `Play Later` and has a custom icon.  The second is named `Subscriptions` and does not have an icon because the `icons` property is optional.  The `description` property is also optional and may be used to provide additional information for accessibility purposes.  

## Identify your app as a Share Target

Many operating systems enable users to quickly share links and files with native applications. Progressive Web Apps can participate in this feature as well, via the `share_target` member of the Web App Manifest. Using share_target, you define the "action" page (much like a form submission) and the parameters you expect to be passed into it. For example:

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

When added to the Web App Manifest, this establishes "/share.html" as the action page for a share. Additionally, it defines three parameters that would be passed to that action page: "title", "text", and "url". These parameters will be stored in the [ShareData](https://wicg.github.io/web-share#dom-sharedata) object’s "name", "description", and "link" properties. By default, the action page receives these parameters as part of a GET request, but you can specify the request `method` and encoding \(as `enctype`\), just like you would on a web form.

## See also  

To learn more about Web App Manifests, see the following list of related topics.  

* [Web App Manifests][MDNWebAppManifests]  
* [Web Share Target][WICGShareTarget]
* [Web Share][WICGShare]

<!-- links -->  

[MDNWebAppManifests]: https://developer.mozilla.org/docs/Web/Manifest "Web app manifests | MDN"  
[WICGShareTarget]: https://wicg.github.io/web-share-target/ "Web Share Target API | WICG"
[WICGShare]: https://w3c.github.io/web-share/ "Web Share API | WICG"
