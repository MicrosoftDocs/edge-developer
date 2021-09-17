---
description: Adding push notifications to your Progressive Web Application (PWA).
title: Add push notifications to your PWA
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 03/16/2021
ms.topic: conceptual
ms.prod: microsoft-edge
keywords: progressive web apps, PWA, Edge, Windows, PWABuilder, web manifest, service worker, push
---
# Add push notifications to your PWA

To create a PWA that supports push notifications:

1.  Subscribe to a messaging service using the [Push API][MDNPushApi].
1.  Display a toast message when a message is received from the service using the [Notifications API][MDNNotificationsApi].

Just like with Service Workers, the push notification APIs are standards-based APIs.  The push notification APIs work across browsers, so your code should work everywhere that PWAs are supported.  For more information about delivering push messages to different browsers on your server, navigate to [Web-Push][NPMWebPush].

The following steps have been adapted from the Push Rich Demo in [Service Worker Cookbook][ServiceWorkerCookbookPushRichDemo] provided by Mozilla, which has many useful Web Push and service worker recipes.


<!-- ====================================================================== -->
## Step 1 - Generate VAPID keys

Push notifications require VAPID (Voluntary Application Server Identification) keys in order to send push messages to the PWA client.  There are several VAPID key generators available online (for example, [vapidkeys.com][VapidkeysMain]).  After generation, you should get a JSON object containing a public and private key.  Save the keys for later steps in the following tutorial.  For information about VAPID and WebPush, navigate to [Sending VAPID identified WebPush Notifications using the Mozilla Push Service][MozillaServicesSendingVapidWebPushNotificationsPush].


<!-- ====================================================================== -->
## Step 2 - Subscribe to push notifications

Service workers handle push events and toast notification interactions in your PWA.  To subscribe the PWA to server push notifications:

*   Make sure your PWA is installed, active, and registered.
*   Make sure your code to complete the subscription task is on the main UI thread of the PWA.
*   Make sure you have network connectivity.

Before a new push subscription is created, Microsoft Edge checks whether the user has granted the PWA permission to receive notifications.  If not, the user is prompted by the browser for permission.  If the permission is denied, the request to `registration.pushManager.subscribe` throws a `DOMException`, which must be handled.  For more on permission management, navigate to [Push Notifications in Microsoft Edge][WindowsBlogsWebNotificationsEdge].

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

See also [PushManager][MDNPushManager] and [Web-Push][NPMWebPushUsage].


<!-- ====================================================================== -->
## Step 3 - Listen for push notifications

After a subscription is created in your PWA, add handlers to the service worker to respond to push events.  Push event are sent from the server to display toast notifications.  Toast notifications display data for a received message.  To complete any of the following tasks, you must add a `click` handler:

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
## Step 4 - Try it out

To test push notifications for your PWA:

1.  Navigate to your PWA at `http://localhost:3000`.  When your service worker activates and attempts to subscribe your PWA to push notifications, Microsoft Edge prompts you to allow your PWA to show notifications.  Select **Allow**.

    :::image type="complex" source="./media/notification-permission.png" alt-text="Permission dialog for enabling notifications" lightbox="./media/notification-permission.png":::
       Permission dialog for enabling notifications
    :::image-end:::

1.  Simulate a server-side push notification, as follows.  With your PWA opened at `http://localhost:3000` in your browser, select `F12` to open DevTools.  Select **Application** > **Service Worker** > **Push** to send a test push notification to your PWA.

    The push notification is displayed near the taskbar.

    :::image type="complex" source="./media/devtools-push.png" alt-text="Push a notification from DevTools" lightbox="./media/devtools-push.png":::
        Push a notification from DevTools
    :::image-end:::

    If you don't select (or _activate_) a toast notification, the system automatically dismisses it after several seconds and queues it in your Windows Action Center.

    :::image type="complex" source="./media/windows-action-center.png" alt-text="Notifications in Windows Action Center" lightbox="./media/windows-action-center.png":::
        Notifications in Windows Action Center
    :::image-end:::


<!-- ====================================================================== -->
<!-- links -->
<!-- external links -->
[MDNPushApi]: https://developer.mozilla.org/docs/Web/API/Push_API "Push API | MDN"
[MDNNotificationsApi]: https://developer.mozilla.org/docs/Web/API/Notifications_API "Notifications API | MDN"
[NPMWebPush]: https://www.npmjs.com/package/web-push "web-push | npm"
[ServiceWorkerCookbookPushRichDemo]: https://serviceworke.rs/push-rich_demo.html "Push Rich Demo | ServiceWorker Cookbook"
[VapidkeysMain]: https://vapidkeys.com "Secure VAPID Key Generator | VapidKeys"
[MozillaServicesSendingVapidWebPushNotificationsPush]: https://blog.mozilla.org/services/2016/08/23/sending-vapid-identified-webpush-notifications-via-mozillas-push-service "Sending VAPID identified WebPush Notifications via Mozilla's Push Service | Mozilla Services"
[WindowsBlogsWebNotificationsEdge]: https://blogs.windows.com/msedgedev/2016/05/16/web-notifications-microsoft-edge#UAbvU2ymUlHO8EUV.97 "Web Notifications in Microsoft Edge | Windows Blogs"
[MDNPushManager]: https://developer.mozilla.org/docs/Web/API/PushManager "PushManager | MDN"
[NPMWebPushUsage]: https://www.npmjs.com/package/web-push#usage "Usage - web-push | NPM"
