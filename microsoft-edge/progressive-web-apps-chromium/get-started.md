---
description: This guide gives you an overview of PWA basics and tools for building progressive web apps on Windows.
title: Get started with Progressive Web Apps (Chromium)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/15/2020
ms.topic: conceptual
ms.prod: microsoft-edge
keywords: progressive web apps, PWA, Edge, Windows, PWABuilder, web manifest, service worker, push
---

# Get started with Progressive Web Apps (Chromium)  

Progressive Web Apps \(PWAs\) are web apps that are [progressively enhanced][WikiProgressiveEnhancement] with app-like features, such as installation, offline support, and push notifications.  You may also packaged your PWA for app stores, including the Microsoft Store as well as Google Play, Mac App Store and more.  The Microsoft Store is the commercial app store built into Windows 10.  

The following guide gives you an overview of PWA basics by creating a simple web app and extending it as a PWA.  The finished project works across modern browsers.  

> [!TIP]
> You may use [PWABuilder][PwaBuilder] to create a new PWA, enhance your existing PWA, or package your PWA for app stores.  

## Prerequisites  

*   Use [VS Code][VisualstudioCodeMain] to edit your PWA source code.  
*   Use [Node.js][NodejsMain] as your local web server.  

## Set up a basic web app  

To create an empty web app, follow the steps in [Node Express App Generator][ExpressjsApplicationGenerator], and name your app `MySamplePwa`.  

In the prompt, run the following commands.  

```shell
npx express-generator --no-view
```  

```shell
npm install
```  

The commands creates an empty web app and install any dependencies.  

Now you have a simple, functional web app.  To start it, run the following command.  

```shell
npm start
```  

Now browse to `http://localhost:3000` to view your new web app.  

:::image type="complex" source="./media/vs-nodejs-express-index.png" alt-text="Running your new PWA on localhost":::
   Running your new PWA on localhost
:::image-end:::

## Get started building a PWA  

Now that you have a simple web app, extend it as a PWA by adding the [3 requirements for PWAs][PwaEdgehtmlIndexRequirements]: [HTTPS](#step-1---use-https), a [Web App Manifest](#step-2---create-a-web-app-manifest), and a [Service Worker](#step-3---add-a-service-worker).  

### Step 1 - Use HTTPS  

Key parts of the PWA platform, such as [Service Workers][MDNServiceWorkerApi], require the use of HTTPS.  When your PWA goes live, you must publish it to an HTTPS URL.  

For debugging purposes, Microsoft Edge also permits `http://localhost` to use the PWA APIs.  

If you [publish your web app as a live site][VisualStudioNodejsTutorialPublishAzureAppService] \(for example, by setting up an [Azure free account][AzureCreateFreeAccount]\), you must ensure your server is configured for HTTPS.  If you use the [Microsoft Azure App Service][AzureWebApps] to host your site, it is served over HTTPS by default.  

The following guide, use `http://localhost` to build your PWA.  

### Step 2 - Create a Web App Manifest  

A [Web App Manifest][MDNWebAppManifest] is a JSON file containing metadata about your app, such as name, description, icons, and more.  

To add an app manifest to the web app:  

1.  In VS Code, go **File** > **Open Folder** and choose the `MySamplePwa` directory you created earlier.  
1.  Press `Ctrl`+`N` to create a new file, and paste in the following code snippet.  
    
    ```json
    {
        "lang": "en-us",
        "name": "My Sample PWA",
        "short_name": "SamplePWA",
        "description": "A sample PWA for testing purposes",
        "start_url": "/",
        "background_color": "#2f3d58",
        "theme_color": "#2f3d58",        
        "orientation": "any",
        "display": "standalone",
        "icons": [
            {
                "src": "/icon512.png",
                "sizes": "512x512"
            }
        ]
    }
    ```  
    
1.  Save the file as `/MySamplePwa/public/manifest.json`.  
1.  Add a 512x512 app icon image named `icon512.png` to `/MySamplePwa/public/images`.  You may use the [sample image][ImagePwa] for testing purposes.  
1.  In VS Code, open `/public/index.html`, and add the following code snippet inside the `<head>` tag.  
    
    ```html
    <link rel="manifest" href="/manifest.json">
    ```   
    
### Step 3 - Add a Service Worker  

Service workers are the key technology behind PWAs, enabling scenarios like offline support, advanced caching, and running background tasks previously limited to native apps.  

Service workers are background tasks that intercept network requests from your web app.  They perform tasks, even when your PWA is not running, such as serving requested resources from a cache, sending push notifications, running background fetch tasks, badging icons, and so on.  Service workers are defined in a special JavaScript file.  For more information, see [Using Service Workers][MDNUsingServiceWorkers] and [Service Worker API][MDNServiceWorkerApi].  

To build a service worker in your project, use the **Cache-first network** service worker recipe from [PWA Builder][PwaBuilderServiceWorker].  

1.  Navigate to [pwabuilder.com/serviceworker][PwaBuilderServiceWorker], select the **Cache-first network** service worker, and select the **Download** button.  The downloaded file contains the following files:
    
    *   `pwabuilder-sw-register.js`  
    *   `pwabuilder-sw.js`  
    
1.  Copy the downloaded files to the `public` folder in your web app project.  
    
1.  In VS Code, open `/public/index.html` and add the following code snippet inside the `<head>` tag.  
    
    ```html
    <script src="/pwabuilder-sw-register.js"></script>
    ```  
    
Your web app now has a service worker that uses the cache-first strategy, which fetches resources like images, JS, CSS, and HTML from the cache first, and falls back to the network as needed.  

Use the following steps to confirm that your service worker runs.  

1.  Navigate to your web app using `http://localhost:3000`.  If your web app is not available, run the following command.   
    
    ```shell
    npm start
    ```
    
1.  In Microsoft Edge, select `F12` to open the Microsoft Edge DevTools.  Select **Application**, then **Service Workers** to view the service workers.  If you do not see the service worker, you may need to refresh the page.  
     
    :::image type="complex" source="./media/devtools-sw-overview.png" alt-text="Microsoft Edge DevTools Service Worker overview":::
       Microsoft Edge DevTools Service Worker overview
    :::image-end:::
    
1.  View the service worker cache by expanding **Cache Storage** and select **pwabuilder-precache**.  You should see all the resources cached by the service worker, such as the app icon, app manifest, CSS and JavaScript files.  
    
    :::image type="complex" source="./media/devtools-cache.png" alt-text="Service Worker cache in Microsoft Edge DevTools":::
       Service Worker cache in Microsoft Edge DevTools (F12)
    :::image-end:::
    
1.  Try your PWA as an offline app.  In Microsoft Edge DevTools \(`F12`\), choose **Network** then change the **Online** status to **Offline**.  
    
    :::image type="complex" source="./media/devtools-offline.png" alt-text="Setting app to offline mode in Microsoft Edge DevTools":::
       Setting app to offline mode in Microsoft Edge DevTools
    :::image-end:::
    
1.  Refresh your app and you should see it working offline by serving the resources of your app from the cache.  
    
    :::image type="complex" source="./media/vs-nodejs-express-index.png" alt-text="PWA running offline":::
       PWA running offline
    :::image-end:::
    
## Add push notifications to your PWA  

You may create PWAs that support push notifications by completing the following tasks.  

1.  Subscribe to a messaging service using the [Push API][MDNPushApi]  
1.  Display a toast messages when a message is received from the service using the [Notifications API][MDNNotificationsApi]  

As with Service Workers, these are standards-based APIs that work across browsers, so you only have to write the code once for it to work everywhere that PWAs are supported.  For more information on delivering push messages to different browsers on your server, use the [Web-Push][NPMWebPush] open-source library.  

The following steps have been adapted from the Push Rich Demo in [Service Worker Cookbook][ServiceWorkerCookbookPushRichDemo] provided by Mozilla, which has a number of other useful Web Push and service worker recipes.  

### Step 1 - Generate VAPID keys  

Push notifications require VAPID \(Voluntary Application Server Identification\) keys in order to send push messages to the PWA client.  There are several VAPID key generators available online \(for example, [vapidkeys.com][VapidkeysMain]\).  After generation, you should get a JSON object containing a public and private key.  Save the keys for subsequent steps in the following tutorial.  For information on how VAPID and WebPush works, see [Sending VAPID identified WebPush Notifications via Mozilla's Push Service][MozillaServicesSendingVapidWebPushNotificationsPush].  

### Step 2 - Subscribe to push notifications  

Service workers handle push events and toast notification interactions in your PWA.  To subscribe the PWA to server push notifications, ensure the following conditions are met.  

*   Your PWA is installed, active and registered  
*   Your code that performs the subscription task is on the main UI thread of the PWA  
*   You have network connectivity  

Before a new push subscription is created, Microsoft Edge checks if the user granted the PWA permission to receive notifications.  If not, the user is prompted by the browser for permission.  If the permission is denied, the request to `registration.pushManager.subscribe` throws a `DOMException`, which must be handled.  For more on permission management, see [Push Notifications in Microsoft Edge][WindowsBlogsWebNotificationsEdge].  

In your `pwabuilder-sw-register.js` file, append the following code snippet.  

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

For more information, see [PushManager][MDNPushManager] and [Web-Push][NPMWebPushUsage].  

### Step 3 - Listen for push notifications  

Now that a subscription is set up in your PWA, add handlers to the service worker to respond to push events \(sent from the server\) to display toast notifications with the data of a received message.  You must add a click handler to perform the any of the following tasks.  
*   dismiss the toast notification  
*   open, focus, or open and focus any open windows  
*   open and focus a new window to display a PWA client page  

In your `pwabuilder-sw.js` file, add the following handlers.  

```javascript
// Respond to a server push with a user notification.
self.addEventListener('push', function (event) {
    if (Notification.permission === "granted") {
        const notificationText = event.data.text();
        const showNotification = self.registration.showNotification('Sample PWA', {
            body: notificationText,
            icon: 'images/icon512.png'
        });
        // Ensure the toast notification is displayed before exiting the function.
        event.waitUntil(showNotification);
    }
});

// Respond to the user selecting the toast notification.
self.addEventListener('notificationclick', function (event) {
    console.log('On notification click: ', event.notification.tag);
    event.notification.close();
    
    // This looks to see if the current notification is already open and focuses it.
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

### Step 4 - Try it out  

Perform the following steps to test push notifications in your PWA.  

1.  Navigate to your PWA at `http://localhost:3000`.  When your service worker activates and attempts to subscribe your PWA to push notifications, Microsoft Edge prompts you to allow your PWA to show notifications.  Select **Allow**.  
    
    :::image type="complex" source="./media/notification-permission.png" alt-text="Permission dialog for enabling notifications":::
       Permission dialog for enabling notifications
    :::image-end:::
    
    
1.  Simulate a server-side push notification.  With your PWA opened at `http://localhost:3000` in your browser, select `F12` to open the DevTools.  Choose **Application** > **Service Worker** > **Push** to send a test push notification to your PWA.  You should see a push notification appear near the taskbar.  
    
    :::image type="complex" source="./media/devtools-push.png" alt-text="Push a notification from DevTools":::
       Push a notification from DevTools
    :::image-end:::
     
    If you do not select \(or activate\) a toast notification, it is dismissed after several seconds and queues up in your Windows Action Center.  
    
    :::image type="complex" source="./media/windows-action-center.png" alt-text="Notifications in Windows Action Center":::
       Notifications in Windows Action Center
    :::image-end:::
    
    
## Next steps  

The following is a list of additional tasks to learn when building real-world PWAs:  

*  Manage and store push subscriptions  
*  [Encrypt][NPMWebPushEncrypt] payload data  
*  Responsive design  
*  Deep-linking  
*  [Cross-browser testing][BrowserStackTestEdgeBrowser]  
*  Implement best practices such as [Webhint][Webhint]  

## See also  

*   [Progressive Web Apps on MDN web docs][MDNProgressiveWebApps].  
*   [Progressive Web Apps on web.dev][WebDevProgressiveWebApps].  
*   [Hacker News readers as Progressive Web Apps][HackerNewsProgressiveWebApps] - Compares different frameworks and performance patterns for implementing a sample \(Hacker News reader\) PWA.  

<!-- image links -->  

[ImagePwa]: ./media/pwa.png  

<!-- links -->  

[PwaEdgehtmlIndexRequirements]: ../progressive-web-apps-edgehtml/index.md#requirements "Requirements - Progressive Web Apps \(EdgeHTML\) on Windows | Microsoft Docs"  

[VisualStudioNodejsTutorialPublishAzureAppService]: /visualstudio/nodejs/tutorial-nodejs#optional-publish-to-azure-app-service "Publish to Azure App Service - Create a Node.js and Express app in Visual Studio | Microsoft Docs"  

[AzureCreateFreeAccount]: https://azure.microsoft.com/free "Create Azure free account | Microsoft Azure"  
[AzureWebApps]: https://azure.microsoft.com/services/app-service/web "Web Apps | Microsoft Azure"  

[WindowsBlogsWebNotificationsEdge]: https://blogs.windows.com/msedgedev/2016/05/16/web-notifications-microsoft-edge#UAbvU2ymUlHO8EUV.97 "Web Notifications in Microsoft Edge | Windows Blogs"  

[VisualstudioCodeMain]: https://code.visualstudio.com "Visual Studio Code"  

[BrowserStackTestEdgeBrowser]: https://www.browserstack.com/test-on-microsoft-edge-browser "Free Microsoft Edge Browser Testing on Windows 10 | BrowserStack"  

[ExpressjsApplicationGenerator]: https://expressjs.com/starter/generator.html "Express application generator | Express" 

[HackerNewsProgressiveWebApps]: https://hnpwa.com "Hacker News readers as Progressive Web Apps"  

[MDNDedicatedWorkerGlobalScopePostMessage]: https://developer.mozilla.org/docs/Web/API/
[MDNNotificationsApi]: https://developer.mozilla.org/docs/Web/API/Notifications_API "Notifications API | MDN"  
[MDNProgressiveWebApps]: https://developer.mozilla.org/Apps/Progressive "Progressive web apps \(PWAs) | MDN"  
[MDNPushApi]: https://developer.mozilla.org/docs/Web/API/Push_API "Push API | MDN"  
[MDNPushManager]: https://developer.mozilla.org/docs/Web/API/PushManager "PushManager | MDN"  
[MDNServiceWorkerApi]: https://developer.mozilla.org/docs/Web/API/Service_Worker_API "Service Worker API | MDN"  
[MDNUsingServiceWorkers]: https://developer.mozilla.org/docs/Web/API/Service_Worker_API/Using_Service_Workers "Using Service Workers | MDN"  
[MDNWebAppManifest]: https://developer.mozilla.org/docs/Web/Manifest "Web App Manifest | MDN"  

[MozillaServicesSendingVapidWebPushNotificationsPush]: https://blog.mozilla.org/services/2016/08/23/sending-vapid-identified-webpush-notifications-via-mozillas-push-service "Sending VAPID identified WebPush Notifications via Mozilla's Push Service | Mozilla Services"  

[NodejsMain]: https://nodejs.org "Node.js"  

[NPMWebPush]: https://www.npmjs.com/package/web-push "web-push | npm"  
[NPMWebPushEncrypt]: https://www.npmjs.com/package/web-push#encryptuserpublickey-userauth-payload-contentencoding "encrypt(userPublicKey, userAuth, payload, contentEncoding) - web-push | NPM"  
[NPMWebPushUsage]: https://www.npmjs.com/package/web-push#usage "Usage - web-push | NPM"  

[ProgressiveWebApps]: https://pwa.rocks "Progressive Web Apps"  

[PwaBuilder]: https://www.pwabuilder.com "PWA Builder"  
[PwaBuilderServiceWorker]: https://www.pwabuilder.com/serviceworker "Service Worker | PWA Builder"  

[ServiceWorkerCookbookPushRichDemo]: https://serviceworke.rs/push-rich_demo.html "Push Rich Demo | ServiceWorker Cookbook"  

[VapidkeysMain]: https://vapidkeys.com "Secure VAPID Key Generator | VapidKeys" 

[Webhint]: https://sonarwhal.com "webhint, the hinting engine for web best practices"  

[WebDevProgressiveWebApps]: https://developers.google.com/web/progressive-web-apps "Progressive Web Apps | web.dev"  

[WikiProgressiveEnhancement]: https://en.wikipedia.org/wiki/Progressive_enhancement "Progressive enhancement | Wikipedia"  
