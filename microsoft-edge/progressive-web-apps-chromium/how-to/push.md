---
title: Re-engage users with push messages
description: Learn how to use the Push API to provide re-engaging functionality in your Progressive Web App (PWA).
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: pwa
ms.date: 11/13/2023
---
# Re-engage users with push messages

Push messages are a useful communication channel that lets applications update their users with relevant and timely content. Push messages can be used to re-engage users with your app.

One of the most significant advantages of push messages is that they can be delivered by your app's server even when the user isn't actively using your app.

Push message notifications take part in the system's notification center, and they can display images and text information.  Notifications are useful to alert the user about an important updates in your app.  However, notifications should be used rarely, because they tend to be disruptive to the user's workflow.

To create a PWA that supports push notifications:

1.  Request the user's permission to receive push notifications in the client-side code of your PWA.
1.  Subscribe to your server's push messages.
1.  Send push messages from the server-side code of your PWA.
1.  Display notifications when push messages are received.


<!-- ====================================================================== -->
## Step 1 - Request the user's permission to receive push notifications

Before you can send push notifications to your PWA, you must request permission from the user to receive messages.  To request permission, use the [Notification.requestPermission API](https://developer.mozilla.org/docs/Web/API/Notification/requestPermission_static) in your client-side code, such as when the user clicks a button:

```javascript
button.addEventListener("click", () => {
  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      console.log("The user accepted to receive notifications");
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


<!-- ====================================================================== -->
## Step 2 - Subscribe to push notifications

To receive push events from your server, subscribe to push notifications by using the [Push API](https://developer.mozilla.org/docs/Web/API/Push_API).

Before a new push subscription is created, Microsoft Edge checks whether the user has granted the PWA permission to receive notifications.

If the user hasn't granted the PWA permission to receive notifications, the user is prompted by the browser for permission.  If the user doesn't grant permission to the browser, the request to `registration.pushManager.subscribe` throws a `DOMException`.

The following code snippet shows how to subscribe to push notifications in your PWA:

```javascript
async function subscribeToPushMessages() {
  const serviceWorkerRegistration = await navigator.serviceWorker.ready;

  // Check if the user has an existing subscription
  let pushSubscription = serviceWorkerRegistration.pushManager.getSubscription();
  if (pushSubscription) {
    // The user is already subscribed to push notifications
    return;
  }

  try {
    // Subscribe the user to push notifications
    pushSubscription = await serviceWorkerRegistration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array("YOUR PUBLIC VAPID KEY HERE")
    });
  } catch (err) {
    // The subscription wasn't successful.
    console.log("Error", err);
  }
}

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

The VAPID key that's mentioned in the previous code snippet is a public key that's used to identify the server that sends the push messages and encrypt the push message payload.  See [Step 3 - Send push messages from your server](#step-3---send-push-messages-from-your-server) for more information about VAPID keys.

The `userVisibleOnly` configuration option of the `registration.pushManager.subscribe` function must be present and set to `true`.  This option indicates that the push message must be displayed to the user.  Microsoft Edge doesn't support push messages that aren't displayed to the user.


<!-- ====================================================================== -->
## Step 3 - Send push messages from your server

Your application needs VAPID (Voluntary Application Server Identification) keys in order to send push messages from your server to your PWA clients.  There are several VAPID key generators available online (for example, [Vapidkeys.com](https://vapidkeys.com)).

Once you have a VAPID key, you can send push messages to your PWA clients by using [the Web Push Protocol](https://web.dev/push-notifications-web-push-protocol/).

You can use a library to send push messages from your server, depending on the programming language you use.  For example, you can use the [web-push](https://github.com/web-push-libs/web-push) library if your server uses Node.js. Other libraries are available on the [WebPush libraries repo](https://github.com/web-push-libs/).


<!-- ====================================================================== -->
## Step 4 - Display notifications when push messages are received

After a subscription is created in your PWA (as shown in [Step 2 - Subscribe to push notifications](#step-2---subscribe-to-push-notifications)), add a `push` event handler in your service worker to handle push messages that are sent by your server.

The following code snippet shows how to display a notification when a push message is received:

```javascript
// Listen to push events.
self.addEventListener('push', event => {
  // Check if the user has granted permission to display notifications.
  if (Notification.permission === "granted") {
    // Get the notification data from the server.
    const notificationText = event.data.text();

    // Display a notification.
    const showNotificationPromise = self.registration.showNotification('Sample PWA', {
      body: notificationText,
      icon: 'images/icon512.png'
    });

    // Keep the service worker running until the notification is displayed.
    event.waitUntil(showNotificationPromise);
  }
});
```

If your PWA doesn't display a notification when a push message is received, Microsoft Edge displays a generic notification that indicates that a push message was received.


<!-- ====================================================================== -->
## See also

* [Push notifications overview](https://web.dev/push-notifications-overview/).
* [How to make PWAs re-engageable using Notifications and Push](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push).
