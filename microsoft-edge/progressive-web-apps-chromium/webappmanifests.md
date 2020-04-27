---
title: Deeper OS integrations via the Web App Manifest
description: The Web App Manifest governs how your app looks and behaves within the context of the Operating System.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/20/2020
ms.topic: article
ms.prod: microsoft-edge
ms.technology: pwa
keywords: progressive web apps, PWA, Edge, JavaScript, Windows, UWP, Microsoft Store
---

# Deeper OS integrations via the Web App Manifest

A site’s Web App Manifest governs how it looks and behaves when installed on a device. At its most basic, the Manifest provides detail about what name and icons should be used to represent your app in system menus to the theme colors the OS should use for the title bar. The Manifest also enables you to unlock more powerful features that allow your app to behave like other native apps on the system.

## Provide quick access to key features

Most operating systems provide some sort of quick access to key app features via a context menu connected to the app’s icon. This feature is, called "shortcuts," is enabled in Progressive Web Apps via the Web App Manifest’s `shortcuts` member. Shortcuts are defined in the manifest like this:

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
      "description": "View the list of podcasts you listen to",
      "url": "/subscriptions?sort=desc"
    }
  ]
```

In the context of a full Web App Manifest, adding the above snippet would enable two shortcuts on the app’s icon. The first would be labelled "Play Later" and would have a custom icon. The second would be labelled "Subscriptions" and does not have an icon associated with it. As you can see, the `icons` member is optional. The `description` member is also optional and can be used to provide additional information for accessibility purposes.

## Share target

Share targets in PWAs to... The following code shows how to add a shared target to your web app manifest. 

```js
// code snippet
```

(Additional information example)
The above code can be used to do...if you plan to do, consider using...

## See Also

To learn more about Web App Manifests, see the following list of related topics.

- [Web App Manifests](https://developer.mozilla.org/docs/Web/Manifest)
- 
