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

### Check support  

While this API is available in Microsoft Edge, you should make sure it is supported in the other browsers and devices your app will end up running. This can be done by testing if the `ServiceWorkerRegistration` object has a `sync` property:  

```javascript
navigator.serviceWorker.ready.then(registration => {
    if (registration.sync) {
        // Background Sync is supported.
    } else {
        // Background Sync is not supported.
    }
});
```  

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

For more information about the `Sync` event, the `ServiceWorkerRegistration`, and the `SyncManager` interface, navigate to the [Web Background Synchronization draft specification][WICGBackgroundSyncSpec] and to the [Web Background Synchronization API documentation][MDNBackgroundSync].  

## Get new content regularly with the Periodic Background Sync API  

The Periodic Background Sync API lets PWAs retrieve fresh content periodically, in the background, so users can immediately access it when they later open the app again. Using this API, PWAs don't have to download the new content (like new articles) while the user is using the app, which could slow down the experience, and instead would retrieve it at a more convenient time.  

> [!NOTE]
> The periodic sync only occurs when the device is on a known network (i.e. one it has already been connected to before), and Microsoft Edge limits the frequency of the syncs to match how much the person uses the app.  

### Check support  

To check if this API is supported in the browsers and devices your app will end up running in, test if the `ServiceWorkerRegistration` object has a `periodicSync` property:  

```javascript
navigator.serviceWorker.ready.then(registration => {
    if (registration.periodicSync) {
        // Periodic Background Sync is supported.
    } else {
        // Periodic Background Sync is not supported.
    }
});
```  

### Request the user permission  

Periodic background synchronizations require the permission from the user. This will happen only once per application and is done using the Permissions API.  

```javascript
const status = await navigator.permissions.query({name: 'periodic-background-sync'});
if (status.state === 'granted') {
  // Periodic background sync can be used.
} else {
  // Periodic background sync cannot be used.
}
```  

### Register a periodic sync  

To register a periodic sync, you need to define a minimum interval and a unique tag name (so that multiple periodic background syncs can be registered).  

```javascript
async function registerPeriodicSync() {
    await registration.periodicSync.register('get-daily-news', {
        minInterval: 24 * 60 * 60 * 1000
    });
}
```  

The `minInterval` used in the code above corresponds to 1 day in milliseconds. This is a minimum interval only and Microsoft Edge will take other factors into account before alerting your service worker with a periodic sync event such as the network connection and whether the user regularly engages with the app.  

### React to periodic sync events  

When Microsoft Edge decides it is a good time to run the periodic sync, it sends a `periodicsync` event to your service worker. You can handle the event using the same tag name specified when registering the sync.  

```javascript
self.addEventListener('periodicsync', event => {
    if (event.tag === 'get-daily-news') {
        event.waitUntil(getDailyNewsInCache());
    }
});
```

The `getDailyNewsInCache` function is where you have a chance to fetch new content from the server and store it in cache. This function is expected to return a promise that signals if the sync succeeded or failed.  

For more information about the `PeriodicSync` event, the `ServiceWorkerRegistration`, and the `PeriodicSyncManager` interface, navigate to the [Web Periodic Background Synchronization draft specification][WICGPeriodicBackgroundSyncSpec] and to the [Web Periodic Background Synchronization API documentation][MDNPeriodicBackgroundSync].  

## Fetch large files when the app or service worker are not running with the Background Fetch API  

The Background Fetch API allows to completely delegate downloading large amounts of data to the device. This way, the app and the service worker don't have to be running while the download is in progress.  

This API is useful for apps that let users download large files (like music, movies, or podcasts) for offline use cases. Because the download is delegated to the system, which knows how to handle a flaky connection or even a complete loss of connectivity, it can pause and resume the download when necessary.  

**TODO**  

For more information about the API, navigate to the [Background Fetch draft specification][WICGBackgroundFetchSpec] and to the [Background Fetch API documentation][MDNPBackgroundFetch].  

## Re-engage users with the Notifications API  
 

## Demo  


## Debugging background tasks  


<!-- Links -->

[WICGBackgroundSyncSpec]: https://wicg.github.io/background-sync/spec/ "Web Background Synchronization Draft Community Group Report | WICG"  
[WICGPeriodicBackgroundSyncSpec]: https://wicg.github.io/periodic-background-sync/ "Web Periodic Background Synchronization Draft Community Group Report | WICG"  
[WICGBackgroundFetchSpec]: https://wicg.github.io/background-fetch/ "Background Fetch Draft Community Group Report | WICG"
[MDNIndexedDB]: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API "IndexedDB API - Web APIs | MDN"  
[MDNBackgroundSync]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Background_Synchronization_API "Web Background Synchronization API - Web APIs | MDN"  
[MDNPeriodicBackgroundSync]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Periodic_Background_Synchronization_API "Web Periodic Background Synchronization API - Web APIs | MDN"  
[MDNPBackgroundFetch]: https://developer.mozilla.org/en-US/docs/Web/API/Background_Fetch_API "Background Fetch API - Web APIs | MDN"  
