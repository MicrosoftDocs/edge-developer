---
title: Synchronize and update in the background
description: Learn how to do work in the background, when the app is not running, to synchronize content with the server, fetch new resources, or handle long duration downloads.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/14/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: pwa
keywords: progressive web apps, PWA, Edge, JavaScript, service worker, background, synchronization, fetch
---
# Synchronize and update in the background

Using a service worker, PWAs can do work in the background when users aren't even using the app. This used to be reserved to native apps but is now also available to PWAs, which makes better offline experiences possible.  

Consider the following use cases:  

*   An email app that lets you compose messages and send them at any time, even when offline.  
*   A news app that fetches new article every day for you to read the next time you open the app.  
*   A music app that lets you download songs for listening offline.  

All three use cases, and more, are possible with the following APIs:  

*   Background Sync.  
*   Periodic Background Sync.  
*   Background Fetch.  

Although these APIs have similar names, they are different and are used for making distinct scenarios possible.  

## Synchronize data with the server with the Background Sync API  

Allowing users to continue using the app and perform actions even when offline can be done with the Background Sync API. For example, an email app could let its users compose and send messages at any time. The app frontend would try to send the message right away, the service worker would, in turn, catch the failed request if the user is offline and would use the Background Sync API to defer the task until connected.  

> [!NOTE]
> The Background Sync API should be used for small amounts of data. It requires the service worker to be alive for the entire duration of the data transfer. Because devices can decide to terminate service workers to preserve battery life, the API should not be used to fetch large files. Use the Background Fetch API instead.  

### Request a sync  

The first thing to do is to request a sync. This can be done by your app frontend or your service worker.  

*   Requesting the sync from the frontend is good when you want to leave the user in charge. The decision to synchronize some piece of data with the server later could be left to the user.  
*   Requesting the sync from the service worker is good when you want this to be transparent to the user. In this case, the service worker can detect the failed fetch request and request the sync right away.  

To request a sync, you need a `ServiceWorkerRegistration` and a tag name. From the app frontend, use the following code:

```javascript
async function requestSync() {
    const registration = await navigator.serviceWorker.ready;
    await registration.sync.register('my-tag-name');
}
```

From the service worker:

```javascript
async function requestSync() {
    await registration.sync.register('my-tag-name');
}
```

And that's it. This code is enough to request the sync.  

### React to the sync event  

Later, when a connection can be established and the service worker is running, a `sync` event will be sent to it, giving it a chance to do the necessary work.  

```javascript
self.addEventListener('sync', event => {
    if (event.tag === 'my-tag-name') {
        event.waitUntil(doTheWork());
    }
});
```  

In the example code above, a `sync` event listener is added in the service worker. When the listener is called, the code checks if the tag is the one registered in the frontend, and then calls `doTheWork`. This function is expected to return a promise.  

Typically, the `doTheWork` function will send the information to the server that couldn't be sent when the user was offline. It may be useful to store this information in [IndexedDB][MDNIndexedDB] storage from the frontend so it can later be retrieved from the service worker when `doTheWork` is executed.  

For more information about the `Sync` event, the `ServiceWorkerRegistration`, and the `SyncManager` interface, navigate to the [Web Background Synchronization draft specification][WICGBackgroundSyncSpec].  

## Get new content regularly with the Periodic Background Sync API  

The Periodic Background Sync API lets PWAs retrieve fresh content periodically, in the background, so users can immediately access it when they later open the app again. Using this API, PWAs don't have to download the new content (like new articles) while the user is using the app, which could slow down the experience, and instead would retrieve it at a more convenient time.  

> [!NOTE]
> The periodic sync only occurs when the device is on a known network (i.e. one it has already been connected to before), and Microsoft Edge limits the frequency of the syncs to match how much the person uses the app.  

**TODO**  

API: https://developer.mozilla.org/en-US/docs/Web/API/Web_Periodic_Background_Synchronization_API  

## Fetch large files when the app or service worker are not running with the Background Fetch API  

The Background Fetch API allows to completely delegate downloading large amounts of data to the device. This way, the app doesn't have to be used while the download is in progress, and the service worker doesn't have to be running either.  

This API is useful for apps that let users download music, movies, or podcasts for offline use cases. Because the download is delegated to the system, which knows how to handle a flaky connection or even a complete loss of connectivity, it can pause and resume the download when necessary.  

**TODO**  

API: https://developer.mozilla.org/en-US/docs/Web/API/Background_Fetch_API  

## Re-engage users with the Notifications API  

(mostly link to the page about this)  

## Sample app  

## Debugging background tasks  


<!-- Links -->

[WICGBackgroundSyncSpec]: https://wicg.github.io/background-sync/spec/ "Web Background Synchronization Draft Community Group Report | WICG"  
[MDNIndexedDB]: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API "IndexedDB API - Web APIs | MDN"  