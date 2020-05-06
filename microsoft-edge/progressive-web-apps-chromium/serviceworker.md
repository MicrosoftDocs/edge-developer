---
title: Use Service Workers to manage network requests, push notifications, and more
description: Service Workers are a Web Worker that enable you to improve performance, handle unstable networking conditions, and increase re-engagement with your web application.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/20/2020
ms.topic: article
ms.prod: microsoft-edge
ms.technology: pwa
keywords: progressive web apps, PWA, Edge, JavaScript, Windows, UWP, Microsoft Store
---

# Use Service Workers to manage network requests, push notifications, and more

Service Workers are a special type of Web Worker with the ability to intercept, modify, and respond to all network requests via the Fetch API. They also have access to the Cache API, as well as other asynchronous client-side data stores like IndexedDB for resource storage.

## Registering a Service Worker

Like all Web Workers, a Service Worker must exist in a separate file. It is this file that you will reference when registering the Service Worker:

```js
if ( "serviceWorker" in navigator ) {
  navigator.serviceWorker.register( "/serviceworker.min.js" );
}
```

While all modern browsers support Service Workers to some extent, it is still a good idea to test for the existence of the `serviceWorker` object before running any Service Worker-related code. Here a Service Worker is being registered using the file "serviceworker.min.js" in the root of the site. It’s critical that the JavaScript file defining a Service Worker exists in the highest-level directory you’d like it to govern. Here it’s in the root, so it will operate on every page in the domain; if this example were to have referenced the file within a "js" directory, the Service Worker would only act on that directory and any of its children.

## The Service Worker Lifecycle

Every Service Worker has a lifecycle, many steps of which fire a corresponding event that you can hook into. This is a topic you can go pretty deep on, but here is the Cliff’s Notes version of what happens:

1. The Service Worker is registered.
2. The browser downloads the associated JavaScript and installs the Service Worker, firing the "install" event. This is when many Service Workers will pre-cache important long-lived files like the site’s CSS, JavaScript, lo sgo image, offline page, etc.
3. The Service Worker is activated, firing the "activate" event. This is often when developers will clean up outdated caches and such.
4. The Service Worker is ready to run, but must wait for the page to be refreshed or for the user to navigate to a new page within the site to begin working. Developers can skip this step by calling `self.skipWaiting()` during the "install" event. 
5. The Service Worker is running.

## Intercepting Fetches



## Push Notifications



## Synchronization Tasks


## See Also

To learn more about Web App Manifests, see the following list of related topics.

- [Web App Manifests](https://developer.mozilla.org/docs/Web/Manifest)
