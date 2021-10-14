---
title: Synchronize and update a Programmable Web App (PWA) in the background.
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

*   An email app that lets users compose messages and send them at any time, even when offline.
*   A news app that fetches new articles every day for users to read next time they open the app.
*   A music app that lets users download songs for listening offline.

All three use cases are possible with PWAs by using the Background Sync, Periodic Background Sync, and Background Fetch APIs.

Although these APIs have similar names, they are different in nature.


<!-- ====================================================================== -->
## Synchronize data with the server with the Background Sync API

Allowing users to continue using the app and perform actions even when they are offline can be done with the Background Sync API. For example, an email app can let its users compose and send messages at any time. The app frontend can try to send the message right away, and if the device is offline the service worker can, in turn, catch the failed request and use the Background Sync API to defer the task until connected.

Another example for using the Background Sync API is loading content in the background for the user.

> [!NOTE]
> The Background Sync API should be used for small amounts of data. It requires the service worker to be alive for the entire duration of the data transfer. Because devices can decide to terminate service workers to preserve battery life, the API should not be used to fetch large files. Use the [Background Fetch API](#fetch-large-files-when-the-app-or-service-worker-are-not-running-with-the-background-fetch-api) instead.

### Check for support

While this API is available in Microsoft Edge, you should make sure it is supported in the other browsers and devices your app runs in. This can be done by testing whether the `ServiceWorkerRegistration` object has a `sync` property:

```javascript
navigator.serviceWorker.ready.then(registration => {
    if (registration.sync) {
        // Background Sync is supported.
    } else {
        // Background Sync is not supported.
    }
});
```

To learn more about the `ServiceWorkerRegistration` interface, see the [ServiceWorkerRegistration documentation](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration).

### Request a sync

The first thing to do is to request a sync. This can be done by your app frontend or your service worker.

*   Requesting the sync from the frontend is good when you want to leave the user in charge of synchronizing later or not.
*   Requesting the sync from the service worker is good when you want this to be transparent to the user. In this case, the service worker can detect the failed fetch request and request the sync right away.

To request a sync, you need a `ServiceWorkerRegistration` and a tag name. From the app frontend code, do the following:

```javascript
async function requestBackgroundSync() {
    const registration = await navigator.serviceWorker.ready;
    await registration.sync.register('my-tag-name');
}
```

Or, from the service worker, do this instead:

```javascript
async function requestBackgroundSync() {
    await self.registration.sync.register('my-tag-name');
}
```

The `my-tag-name` string above should be a unique tag that identifies this sync request, so that multiple requests can be done.

### React to the sync event

As soon as a connection can be used and the service worker is running, a `sync` event is sent to the service worker, which can use it to synchronize the necessary data. The `sync` event can be listened to with the following code:

```javascript
self.addEventListener('sync', event => {
    if (event.tag === 'my-tag-name') {
        event.waitUntil(doTheWork());
    }
});
```

In the example code above, a `sync` event listener is added in the service worker. When the listener is called, the code checks if the tag is the one registered in the frontend, and then calls `doTheWork`. This function is expected to return a promise.

Typically, the `doTheWork` function will send the information to the server that couldn't be sent when the user was offline. It may be useful to store this information in [IndexedDB](https://developer.mozilla.org/docs/Web/API/IndexedDB_API) storage from the frontend so that it can later be retrieved from the service worker when `doTheWork` is executed.

For more information about the `Sync` event, the `ServiceWorkerRegistration`, and the `SyncManager` interface, see the [Background Synchronization draft specification](https://wicg.github.io/background-sync/spec/) and [Background Synchronization API documentation](https://developer.mozilla.org/docs/Web/API/Background_Synchronization_API).

### Demo PWA

[My Movie List PWA](https://quirky-rosalind-ac1e65.netlify.app/) is a demo app that uses the Background Sync API to fetch movie information later if the user is offline.

:::image type="content" source="../media/my-movie-list-pwa-demo.png" alt-text="My Movie List PWA demo app." lightbox="../media/my-movie-list-pwa-demo.png":::

To test the feature:

1.  Install the app.

1.  Search for movies using the search input field.

1.  Go offline.

    1.  Select **F12** to open DevTools.
    1.  Select **Application** > **Service Workers** > **Offline**.

    :::image type="content" source="../media/devtools-go-offline.png" alt-text="Simulate being offline with DevTools." lightbox="../media/devtools-go-offline.png":::

1.  Select **More info** in one of the movie results.

1.  A message appears in the app informing you that you are offline and saying that the movie details will be retrieved automatically later.

    :::image type="content" source="../media/my-movie-list-pwa-demo-offline.png" alt-text="The offline message." lightbox="../media/my-movie-list-pwa-demo-offline.png":::

1.  Go online by selecting **Offline** in DevTools again.

1.  Reload the app. The movie details now appear.

For the sample code, go to the [source code on GitHub](https://github.com/captainbrosset/movies-db-pwa/).

### Debug background syncs with DevTools

You don't have to go offline, then online, and wait for Microsoft Edge to trigger a `sync` event to test your background sync code as DevTools lets you simulate this event.

To simulate a `sync` event:

*  Open DevTools (**F12**).
*  Select **Application** > **Service Workers**.
*  Type the tag name you used when registering the sync in the **Sync** input field.
*  Select the **Sync** button.

:::image type="content" source="../media/devtools-simulate-background-sync.png" alt-text="Simulate a background sync in the Application panel." lightbox="../media/devtools-simulate-background-sync.png":::

You can also log the background sync activity generated by your app in DevTools.

*  Open DevTools (**F12**).
*  Select **Application** > **Background Sync**.
*  Select **Start recording events**.

Sync registrations and dispatches appear in the event log table.

:::image type="content" source="../media/devtools-background-sync-log.png" alt-text="Log background sync events." lightbox="../media/devtools-background-sync-log.png":::


<!-- ====================================================================== -->
## Regularly get fresh content with the Periodic Background Sync API

The Periodic Background Sync API lets PWAs retrieve fresh content periodically, in the background, so users can immediately access it when they later open the app again. Using this API, PWAs don't have to download new content (like new articles) while the user is using the app, which could slow down the experience, and instead would retrieve it at a more convenient time.

> [!NOTE]
> The periodic sync only occurs when the device is on a known network (i.e. one it has already been connected to before), and Microsoft Edge limits the frequency of the syncs to match how much the person uses the app.

### Check for support

To check if this API is supported in the browsers and devices your app runs in, test if the `ServiceWorkerRegistration` object has a `periodicSync` property:

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

Periodic background synchronizations require the user's permission. This will happen only once per application and is done using the Permissions API.

```javascript
const status = await navigator.permissions.query({name: 'periodic-background-sync'});
if (status.state === 'granted') {
  // Periodic background sync can be used.
} else {
  // Periodic background sync cannot be used.
}
```

To learn more about the Permissions API, see the [Permissions API documentation](https://developer.mozilla.org/docs/Web/API/Permissions_API).

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

The `getDailyNewsInCache` function is where your service worker can fetch new content from the server and store it in cache. This function is expected to return a promise that signals if the sync succeeded or failed.

For more information about the `PeriodicSync` event, the `ServiceWorkerRegistration`, and the `PeriodicSyncManager` interface, see [Web Periodic Background Synchronization draft specification](https://wicg.github.io/periodic-background-sync/) and [Web Periodic Background Synchronization API documentation](https://developer.mozilla.org/docs/Web/API/Web_Periodic_Background_Synchronization_API).

### Demo PWA

[DevTools Tips](https://devtoolstips.org/) is a PWA that uses the Periodic Background Sync API. It fetches new developer tools tips daily and stores them in cache, so that users can access them next time they open the app, whether they are online or not.

:::image type="content" source="../media/devtools-tips-demo.png" alt-text="The DevTools Tips app." lightbox="../media/devtools-tips-demo.png":::

Go to the [source code on GitHub](https://github.com/captainbrosset/devtools-tips/). In particular, the app registers the periodic sync in the [registerPeriodicSync](https://github.com/captainbrosset/devtools-tips/blob/a4a5277ee6b67e5cc61eee642bf3d9c68130094f/src/layouts/home.njk#L72) function.  The [service worker code](https://github.com/captainbrosset/devtools-tips/blob/ebfb2c7631464149ce3cc7700d77564656971ff4/src/sw.js#L115) is where the app listens to the `periodicsync` event.

### Debug periodic background syncs with DevTools

You can use DevTools to simulate `periodicsync` events instead of waiting for the minimum interval.

To simulate the event:

*  Open DevTools (**F12**).
*  Select **Application** > **Service Workers**.
*  Type the tag name you used when registering the periodic sync in the **Periodic Sync** input field.
*  Select the **Periodic Sync** button.

:::image type="content" source="../media/devtools-simulate-background-periodic-sync.png" alt-text="Simulate a periodic background sync in the Application panel." lightbox="../media/devtools-simulate-background-periodic-sync.png":::

You can also log the periodic background sync activity generated by your app in DevTools.

*  Open DevTools (**F12**).
*  Select **Application** > **Periodic Background Sync**.
*  Select **Start recording events**.

Periodic sync registrations and dispatches appear in the event log table.

:::image type="content" source="../media/devtools-periodic-background-sync-log.png" alt-text="Log periodic background sync events." lightbox="../media/devtools-periodic-background-sync-log.png":::


<!-- ====================================================================== -->
## Fetch large files when the app or service worker are not running with the Background Fetch API

The Background Fetch API allows PWAs to completely delegate downloading large amounts of data to the browser engine. This way, the app and service worker don't have to be running at all while the download is in progress.

This API is useful for apps that let users download large files (like music, movies, or podcasts) for offline use cases. Because the download is delegated to the browser engine, which knows how to handle a flaky connection or even a complete loss of connectivity, it can pause and resume the download when necessary.

### Check for support

To check if this API is supported, test if the `BackgroundFetchManager` constructor exists on the global object:

```javascript
if (self.BackgroundFetchManager) {
    // Background Fetch is supported.
} else {
    // Background Fetch is not supported.
}
```

### Start a background fetch

To start a background fetch:

```javascript
navigator.serviceWorker.ready.then(async registration => {
    const fetch = await registration.backgroundFetch.fetch('my-download-id', fileUrls, options);
});
```

Above, `my-download-id` should be a unique string identifier for this background fetch. `fileUrls` is the list of files to download, this will be an array of string URLs. And `options` is an object that can be used to customize the appearance of the download activity in the browser.

You can find more information about the `fetch` function on the [BackgroundFetchManager.fetch() documentation](https://developer.mozilla.org/docs/Web/API/BackgroundFetchManager/fetch) and at [Introducing Background Fetch](https://developers.google.com/web/updates/2018/12/background-fetch).


<!-- ====================================================================== -->
## Re-engage users with notifications and badges

The Notifications and App Badging APIs can be used to let users know that background tasks, downloads, or fresh content have been completed, without interrupting their workflows. Using notifications and badges can increase user re-engagement with your app.

With Microsoft Edge, notifications integrate with the system notification center, and badges appear on app icons in the Task Bar.

To learn how to use these APIs, see [Re-engage users with notifications, push messages, and badges](./notifications-badges.md).
