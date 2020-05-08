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

While all modern browsers support Service Workers to some extent, it is still a good idea to test for the existence of the `serviceWorker` object before running any Service Worker-related code. Here a Service Worker is being registered using the file "serviceworker.min.js" in the root of the site. It’s critical that the JavaScript file defining a Service Worker exists in the highest-level directory you’d like it to govern (which is referred to as a Service Worker’s "scope"). Here it’s in the root, so it will operate on every page in the domain; if this example referenced the Service Worker file within a "js" directory, the Service Worker’s scope would only contain that directory and its descendants. Unless you have good reason to reduce the scope of a Service Worker, thr best practice is to place it in the root of your site.

## The Service Worker life cycle

Every Service Worker has a life cycle, many steps of which fire a corresponding event that you can hook into. This is a topic you can go pretty deep on, but here is the Cliff’s Notes version of what happens:

1. The Service Worker is registered.
2. The browser downloads the associated JavaScript and installs the Service Worker, firing the "install" event. This is when many Service Workers will pre-cache important long-lived files like the site’s CSS, JavaScript, logo image, offline page, etc.

```js
self.addEventListener( "install", function( event ){
  console.log( "WORKER: install event in progress." );
});
```

3. The Service Worker is activated, firing the "activate" event. This is often when developers will clean up outdated caches and such.

```js
self.addEventListener( "activate", event => {
  console.log('WORKER: activate event in progress.');
});
```

4. The Service Worker is ready to run, but must wait for the page to be refreshed or for the user to navigate to a new page within the site to begin working. Developers can skip this step by calling `self.skipWaiting()` during the "install" event.

```js
self.addEventListener( "activate", event => {
  self.skipWaiting();
  // …
});
```

5. The Service Worker is running. 🎉

## Intercepting Fetches

The main event you’ll be working with in a Service Worker is the "fetch" event. This event will run every time the browser attempts to access content within the scope of the Service Worker:

```js
self.addEventListener( "fetch", event => {
  console.log('WORKER: Fetching', event.request);
});
```

Within the fetch handler, you can control whether a request goes to the network, pulls from the cache, and so on. The approach you take will likely vary based on the type of resource being requested, how frequently it’s updated, and other business logic unique to your application. Here are a few examples of what you can do:

* Return a response from the cache, if available; fallback to requesting the resource from the network.
* Fetch a resource from the network, cache a copy, and return the response; fallback to a cached copy.
* Take into account a user’s preference to save data and supply a placeholder image for certain image requests.
* Generate a synthetic response directly in the Service Worker.

## Push Notifications

Service workers have the ability to register a user to receive push notifications too. Push Notifications can be quite helpful in prompting users to re-engage with your application. The process for setting up Push Notifications is quite involved, so we highly recommend taking a look at [this Push Notifications walkthrough and demo](https://webpushdemo.azurewebsites.net/).

## See Also

To learn more about Web App Manifests, see the following list of related topics.

- [Making PWAs work offline with Service workers](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Offline_Service_workers)
- [How to make PWAs re-engageable using Notifications and Push](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Re-engageable_Notifications_Push)
