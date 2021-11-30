---
title: Re-engage users with notifications, push messages, and badges
description: Learn how to use the Push, Notifications, and Badging APIs to provide re-engaging functionality in your Progressive Web App (PWA).
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/17/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: pwa
keywords: progressive web apps, PWA, Edge, Windows, push, notifications, badges
---
# Re-engage users with notifications, push messages, and badges

Using Background Sync, Periodic Background Sync, and Background Fetch, Progressive Web Apps are able to do work when the app is not running, like updating data in the cache or sending messages when the device regains connectivity.  To re-engage the user with the app, after a background task has been completed, notifications and badges can be used.

Notifications are useful for apps to take part in the system's notification center and display images and text information. Notifications are useful to alert the user about an important change of state in your app. Notifications tend to be disruptive to the user's workflow however, and should be used rarely.

Badges can be more user-friendly and can therefore be used more frequently. Badges don't interrupt the user's workflow, and are useful for displaying a small amount of information, such as the number of messages received.


<!-- ====================================================================== -->
## Display notifications in the action center

PWAs can display notifications by using the [Notifications API](https://developer.mozilla.org/docs/Web/API/Notifications_API).

### Check for support

Before using the API, check that it is supported.

```javascript
if ("Notification" in window) {
    console.log("The Notifications API is support");
}
```

### Request permission

The Notifications API can only be used after having requested the user's permission to display messages. To request permission, use the `requestPermission` function. This should be done in response to a user action only. This is a best practice, to avoid interrupting the user with permission prompts while they haven't yet interacted with a feature that uses notifications.

```javascript
button.addEventListener("click", () => {
    Notifications.requestPermission().then(permission => {
        if (permission === "granted") {
            console.log("The user accepted!");
        }
    });
});
```

You can check the permission status again later:

```javascript
if (Notification.permission === "granted") {
    console.log("The user already accepted");
}
```

### Display the notification

Once you know that the API is supported and the user has accepted notifications, you can display a notification by creating a `Notification` object:

```javascript
const notification = new Notification("Hello World!");
```

:::image type="content" source="../media/notification-text-only.png" alt-text="A text only notification." lightbox="../media/notification-text-only.png":::

The above code displays a text-only notification message, but you can also customize the message with additional properties:

```javascript
const notification = new Notification("Hello World!", {
    body: "This is my first notification message",
    icon: "/assets/logo-192.png",
});
```

:::image type="content" source="../media/notification-with-image.png" alt-text="A notification with some text and an image." lightbox="../media/notification-with-image.png":::

You can also display notifications from your app's service worker. This is useful because the service worker may be doing work while your app isn't running. To send a notification from your service worker, use the `ServiceWorkerRegistration.showNotification` function.

```javascript
self.registration.showNotification("Hello from the Service Worker!");
```

The `showNotification` function supports the same arguments as the `Notification` constructor used in the previous example, as well as the `actions` property described in the following section.

### Add actions to notifications

It's possible to add actions for the user to perform in a notification. This is only supported in persistent notifications shown using the `ServiceWorkerRegistration.showNotification` function.

```javascript
self.registration.showNotification("Your content is ready", {
    body: "Your content is ready to be viewed. View it now?",
    icon: "/assets/logo-192.png",
    actions: [
        {
            action: "view-content",
            title: "Yes"
        },
        {
            action: "go-home",
            title: "No"
        }
    ]
});
```

:::image type="content" source="../media/notification-with-actions.png" alt-text="A notification with some text, an image, and two actions" lightbox="../media/notification-with-actions.png":::

When the user clicks one of the action buttons, your PWA can handle the click by listening for the `notificationclick` event.  When a `notificationclick` event is received, close the notification and execute some code:

```javascript
self.addEventListener('notificationclick', event => {
    // Close the notification.
    event.notification.close();

    // React to the action.
    if (event.action === 'view-content') {
        console.log("view-content action was clicked");
    } else if (event.action === 'go-home') {
        console.log("go-home action was clicked");
    } else {
        console.log("main body of the notification was clicked");
    }
}, false);
```

To learn more about notification actions, see [NotificationAction](https://developer.mozilla.org/docs/Web/API/NotificationAction) at MDN.


<!-- ====================================================================== -->
## Display a badge on the app icon

PWAs can display a badge on their app icon by using the [App Badging API](https://developer.mozilla.org/docs/Web/API/Badging_API). The badge can either be empty or contain a number.

### Check for support

Before using the App Badging API, check that it is supported in the browser engine your app runs in.

```javascript
if (navigator.setAppBadge) {
    console.log("The App Badging API is supported!");
}
```

### Displaying the badge

To set the badge, use the following code from your app frontend or service worker.

```javascript
// To display an empty badge
navigator.setAppBadge();

// To display a number in the badge
navigator.setAppBadge(42);
```

:::image type="content" source="../media/app-badge-in-taskbar.png" alt-text="A PWA icon in the Windows Taskbar, with a badge showing the number 42":::

The `setAppBadge` function returns a promise which can be used to know when the badge was added, and to catch potential errors.

```javascript
navigator.setAppBadge(42).then(() => {
    console.log("The badge was added");
}).catch(e => {
    console.error("Error displaying the badge", e);
});
```

### Clearing the badge

To remove the badge on the app icon, use the following code from your frontend or service worker.

```javascript
navigator.clearAppBadge();
```

The `clearAppBadge` also returns a promise that can be used to handle potential errors.

Additionally, you can also use `setAppBadge` again but passing `0` as the value.

```javascript
navigator.setAppBadge(0);
```


<!-- ====================================================================== -->
## Add push notifications to your PWA

To create a PWA that supports push notifications:

1.  Subscribe to a messaging service using the [Push API](https://developer.mozilla.org/docs/Web/API/Push_API).
1.  Display a toast message when a message is received from the service, by using the [Notifications API](https://developer.mozilla.org/docs/Web/API/Notifications_API).

Like Service Workers, the push notification APIs are standards-based APIs.  The push notification APIs work across browsers, so your code should work everywhere that PWAs are supported.  For more information about delivering push messages to different browsers on your server, see [Web-Push](https://www.npmjs.com/package/web-push).

The following steps have been adapted from the Push Rich Demo in the [Service Worker Cookbook](https://serviceworke.rs/push-rich_demo.html) provided by Mozilla.  This Cookbook has many useful Web Push and Service Worker recipes.


<!-- ====================================================================== -->
### Step 1 - Generate VAPID keys

Push notifications require VAPID (Voluntary Application Server Identification) keys in order to send push messages to the PWA client.  There are several VAPID key generators available online (for example, [vapidkeys.com](https://vapidkeys.com)).

After the keys are generated, you'll receive a JSON object that contains a public and private key.  Save the VAPID keys for later use in the tutorial below.

For information about VAPID and WebPush, see [Sending VAPID identified WebPush Notifications using the Mozilla Push Service](https://blog.mozilla.org/services/2016/08/23/sending-vapid-identified-webpush-notifications-via-mozillas-push-service).


<!-- ====================================================================== -->
### Step 2 - Subscribe to push notifications

Service workers handle push events and toast notification interactions in your PWA.  To subscribe the PWA to server push notifications:

*   Make sure your PWA is installed, active, and registered.
*   Make sure your code for completing the subscription task is on the main UI thread of the PWA.
*   Make sure you have network connectivity.

Before a new push subscription is created, Microsoft Edge checks whether the user has granted the PWA permission to receive notifications.

If the user has not granted the PWA permission to receive notifications, the user is prompted by the browser for permission.  If the user doesn't grant permission to the browser, the request to `registration.pushManager.subscribe` throws a `DOMException`, which must be handled.  For more on permission management, go to [Push Notifications in Microsoft Edge](https://blogs.windows.com/msedgedev/2016/05/16/web-notifications-microsoft-edge#UAbvU2ymUlHO8EUV.97).

In your `pwabuilder-sw-register.js` file, append the following code snippet:

```javascript
// Ask the user for permission to send push notifications.
navigator.serviceWorker.ready
    .then(function (registration) {
        // Check if the user has an existing subscription
        return registration.pushManager.getSubscription()
            .then(function (subscription) {
                if (subscription) {
                    return subscription;
                }

                const vapidPublicKey = "PASTE YOUR PUBLIC VAPID KEY HERE";
                return registration.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: urlBase64ToUint8Array(vapidPublicKey)
                });
            });
    });

// Utility function for browser interoperability
function urlBase64ToUint8Array(base64String) {
    var padding = '='.repeat((4 - base64String.length % 4) % 4);
    var base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    var rawData = window.atob(base64);
    var outputArray = new Uint8Array(rawData.length);

    for (var i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}
```

See also [PushManager](https://developer.mozilla.org/docs/Web/API/PushManager) and [Web-Push](https://www.npmjs.com/package/web-push#usage).


<!-- ====================================================================== -->
### Step 3 - Listen for push notifications

After a subscription is created in your PWA, add handlers to the service worker to respond to push events.  Push event are sent from the server to display toast notifications.  Toast notifications display data for a received message.  To do any of the following tasks, you must add a `click` handler:

*   Dismissing the toast notification.
*   Opening a window.
*   Putting focus on a window.
*   Opening and putting focus on a new window to display a PWA client page.

To add a `click` handler, in your `pwabuilder-sw.js` file, add the following handlers for the `push` event and the `notificationclick` event:

```javascript
// Respond to a server push with a user notification.
self.addEventListener('push', function (event) {
    if (Notification.permission === "granted") {
        const notificationText = event.data.text();
        const showNotification = self.registration.showNotification('Sample PWA', {
            body: notificationText,
            icon: 'images/icon512.png'
        });
        // Make sure the toast notification is displayed.
        event.waitUntil(showNotification);
    }
});

// Respond to the user selecting the toast notification.
self.addEventListener('notificationclick', function (event) {
    console.log('On notification click: ', event.notification.tag);
    event.notification.close();

    // Display the current notification if it is already open, and then put focus on it.
    event.waitUntil(clients.matchAll({
        type: 'window'
    }).then(function (clientList) {
        for (var i = 0; i < clientList.length; i++) {
            var client = clientList[i];
            if (client.url == 'http://localhost:1337/' && 'focus' in client)
                return client.focus();
        }
        if (clients.openWindow)
            return clients.openWindow('/');
    }));
});
```

<!-- ====================================================================== -->
### Step 4 - Try it out

To test push notifications for your PWA:

1.  Go to your PWA at `http://localhost:3000`.  When your service worker activates and attempts to subscribe your PWA to push notifications, Microsoft Edge prompts you to allow your PWA to show notifications.  Select **Allow**.

    :::image type="content" source="../media/notification-permission.png" alt-text="Permission dialog for enabling notifications." lightbox="../media/notification-permission.png":::

1.  Simulate a server-side push notification, as follows.  With your PWA opened at `http://localhost:3000` in your browser, select `F12` to open DevTools.  Select **Application** > **Service Worker** > **Push** to send a test push notification to your PWA.

    The push notification is displayed near the taskbar.

    :::image type="content" source="../media/devtools-push.png" alt-text="Push a notification from DevTools." lightbox="../media/devtools-push.png":::

    If you don't select (or _activate_) a toast notification, the system automatically dismisses it after several seconds and queues it in your Windows Action Center.

    :::image type="content" source="../media/windows-action-center.png" alt-text="Notifications in Windows Action Center." lightbox="../media/windows-action-center.png":::


<!-- ====================================================================== -->
## See also

*   [Web Push Notifications Demo](https://webpushdemo.azurewebsites.net)
