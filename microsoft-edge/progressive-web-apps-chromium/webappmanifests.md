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

A Web App Manifest of a website governs how your Progressive Web App (PWA) looks and behaves when installed on a device.  The Web App Manifest provides information such as the name of your app, the file location of icons that represent your app in system menus, and the theme colors that the operating system (OS) uses in the title bar.  A Web App Manifest also enables you to unlock powerful features that allow your app to behave like native apps.


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

When added to a complete Web App Manifest, adding the previous code snippet enables two shortcuts on the context menu on the icon of the app.  The first is named `Play Later` and has a custom icon.  The second is named `Subscriptions` and does not have an icon because the `icons` property is optional.  The `description` property is also optional and may be used to provide additional information for accessibility purposes.

See also [The Shortcuts object in the manifest](experimental-features/index.md#the-shortcuts-object-in-the-manifest) in the article "Experimental features in Progressive Web Apps (PWAs)".


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

The above `share_target` object establishes `/share.html` as the `action` page for a share.  This example also defines three parameters that would be passed to that `action` page: `title`, `text`, and `url`.  These parameters will be stored in the `name`, `description`, and `link` properties of the [ShareData][GitHubWicgWebShareDomSharedata] object.  By default, the action page receives the parameters as part of a GET request, but you can specify the request `method` and encoding (as `enctype`), just like you would on a web form.


<!-- ====================================================================== -->
## See also

*  [Getting Started with Progressive Web Apps (Workshop)](https://noti.st/aarongustafson/co3b5z/getting-started-with-progressive-web-apps-workshop)
   *  [Slides](https://aka.ms/btconf-pwa-slides) - resolves to https://www.slideshare.net/AaronGustafson/getting-started-with-progressive-web-apps-beyond-tellerrand-2019/1 - same content as above, framed in a different webpage.  Slide 33 is "Manifest files are JSON files", 39 is "Minimum Viable Manifest", 43 is "Reference in the head" (shown in Getting Started with PWAs article but not yet shown in the present, Web App Manifests article.  todo: copy the code that's shown in those slides into this article).
   *  [Work files](https://aka.ms/btconf-pwa-code) - resolves to https://github.com/aarongustafson/btconf-pwa-workshop - To copy code blocks, see these work files.
   *  [Final Demo](https://aka.ms/btconf-pwa-live) - resolves to https://btconf-pwa-workshop.netlify.app/final/ (todo: 404)

*  [Web App Manifests][MDNWebAppManifests]
*  [Web Share Target][GitHubWicgWebShareTarget] - Web App Manifests.
*  [Web Share][GithubW3cWebShare] - Web App Manifests.


<!-- ====================================================================== -->
<!-- links -->
<!-- external links -->
[MDNWebAppManifests]: https://developer.mozilla.org/docs/Web/Manifest "Web app manifests | MDN"

[GitHubWicgWebShareTarget]: https://wicg.github.io/web-share-target "Web Share Target API | WICG"
[GitHubWicgWebShareDomSharedata]: https://wicg.github.io/web-share#dom-sharedata "ShareData dictionary - Web Share API | WICG"

[GithubW3cWebShare]: https://w3c.github.io/web-share/ "Web Share API | WICG"
