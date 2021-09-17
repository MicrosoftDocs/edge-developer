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

<!-- todo: above the Shortcuts section, add basics/code, like in the workshop or MDN content overview of properties (want the barebones that are needed to get started).  The workshop walks through effects (slide 55 "A little color").  The workshop might be helpful to watch when writing, to explain the bits & pieces.  Walks through web app manifests & service workers. -->

<!-- todo: when these experimental features land in the manifest and so are no longer experimental, move the "URI Protocol Handling" & "URL Link Handling" sections from article [Experimental features in Progressive Web Apps (PWAs)](experimental-features/index.md) into the present article, but preserve the two headings there, move them to the bottom, with a link pointing to the moved sections in this article. -->

A Web App Manifest of a website governs how your Progressive Web App (PWA) looks and behaves when installed on a device.  The Web App Manifest provides information such as the name of your app, the file location of icons that represent your app in system menus, and the theme colors that the operating system (OS) uses in the title bar.    

```json
{
    "lang": "en-us",
    "name": "My Sample PWA",
    "short_name": "SamplePWA",
    "description": "A sample PWA for testing purposes",
    "start_url": "/",
    "background_color": "#2f3d58",
    "theme_color": "#2f3d58",
    "orientation": "any",
    "display": "standalone",
    "icons": [
        {
            "src": "/icon512.png",
            "sizes": "512x512"
        }
    ]
}
```  

A Web App Manifest also enables you to unlock powerful features that allow your app to behave like native apps.  


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

To learn more about shortcuts, navigate to [Define app shortcuts](shortcuts.md).  


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

To learn more about using the Share Target feature, navigate to [Share with other apps](share.md).  


<!-- ====================================================================== -->
## See also

*  [Getting Started with Progressive Web Apps (Workshop)][AaronPWAWorkshop].
*  [Web App Manifests][MDNWebAppManifests].
*  [Web Share Target][GitHubWicgWebShareTarget].
*  [Web Share][GithubW3cWebShare].


<!-- ====================================================================== -->
<!-- links -->
<!-- external links -->
[MDNWebAppManifests]: https://developer.mozilla.org/docs/Web/Manifest "Web app manifests | MDN"
[GitHubWicgWebShareTarget]: https://wicg.github.io/web-share-target "Web Share Target API | WICG"
[GithubW3cWebShare]: https://w3c.github.io/web-share/ "Web Share API | WICG"
[AaronPWAWorkshop]: https://noti.st/aarongustafson/co3b5z/getting-started-with-progressive-web-apps-workshop "Getting Started with Progressive Web Apps [Workshop]"