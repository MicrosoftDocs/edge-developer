---
title: Use Service Workers to manage network requests and push notifications
description: Service Workers are Web Workers that help improve performance, respond to varying network conditions, and increase connectivity with your web application.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/11/2020
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: pwa
keywords: progressive web apps, PWA, Edge, JavaScript, Windows, UWP, Microsoft Store
---

# Use Service Workers To Manage Network Requests, Push Notifications, And More  

Service Workers are a special type of Web Worker with the ability to intercept, modify, and respond to all network requests using the `Fetch` API.  The Service Workers also have access to the `Cache` API, as well as other asynchronous client-side data stores like `IndexedDB` for resource storage.  

## Registering a Service Worker  

Like all Web Workers, a Service Worker must exist in a separate file.  It is this file that you referenced when registering the Service Worker:  

```javascript
if ( "serviceWorker" in navigator ) {
    navigator.serviceWorker.register( "/serviceworker.min.js" );
}
```  

While all modern browsers support Service Workers to some extent, it is still a good idea to test for the existence of the `serviceWorker` object before running any Service Worker-related code.  Here a Service Worker is being registered using the `serviceworker.min.js` file in the root of the site.  It is critical that the JavaScript file defining a Service Worker exists in the highest-level directory you want it to govern \(which is referred to as the scope of the Service Worker\).  Here it is in the root, so it operates on every page in the domain; if this example referenced the Service Worker file within a `js` directory, the scope of the Service Worker only contains that directory and any descendants.  Unless you have good reason to reduce the scope of a Service Worker, thr best practice is to place it in the root of your site.  

## The Service Worker life cycle  

Every Service Worker has a life cycle, you may connect to any corresponding event generated for each step in the life cycle.  The details of the life cycle is a deep topic, the following sequence represents the Cliff's Notes version of what happens.  

1.  The Service Worker is registered.  
1.  The browser downloads the associated JavaScript and installs the Service Worker, firing the `install` event.  The `install` event is when many Service Workers pre-caches important long-lived files like the CSS, JavaScript, logo image, offline page, and so on of the website.  
    
    ```javascript
    self.addEventListener( "install", function( event ){
        console.log( "WORKER: install event in progress." );
    });
    ```  
    
1.  The Service Worker is activated, firing the `activate` event.  This is often when developers cleans up outdated caches and such.  
    
    ```javascript
    self.addEventListener( "activate", event => {
        console.log('WORKER: activate event in progress.');
    });
    ```  
    
1.  The Service Worker is ready to run, but must wait for the page to be refreshed or for the user to navigate to a new page within the site to begin working.  Developers may skip this step by using the `self.skipWaiting()` method during the `install` event.  
    
    ```javascript
    self.addEventListener( "activate", event => {
        self.skipWaiting();
        // …
    });
    ```
    
1.  The Service Worker is running.  <!-- 🎉 -->   
    
## Intercepting Fetches  

The main event you are using in a Service Worker is the `fetch` event.  The `fetch` event runs every time the browser attempts to access content within the scope of the Service Worker in the following code.  

```javascript
self.addEventListener( "fetch", event => {
  console.log('WORKER: Fetching', event.request);
});
```  

Within the `fetch` handler, you may control whether a request goes to the network, pulls from the cache, and so on.  The approach you take likely varies based upon the type of resource being requested, how frequently it is updated, and other business logic unique to your application.  Here are a few examples of what you may do:  

*   Return a response from the cache, if available; fallback to requesting the resource from the network.  
*   Fetch a resource from the network, cache a copy, and return the response.
*   Allow user's to specify a preference to save data. 
*   Supply a placeholder image for certain image requests.  
*   Generate a response directly in the Service Worker.  

## Push Notifications  

Service workers can push notifications to users. Push Notifications are helpful to prompt users to re-engage with your application after some time has elapsed. For more information, see [Push Notifications walkthrough and demo][AzurewebsitesWebpushdemo].  

## See also  

To learn more about Service Workers, see the following list of related topics.  

*   [Making PWAs work offline with Service workers][MDNPwasMakingOfflineServiceWorkers]  
*   [How to make PWAs re-engageable using Notifications and Push][MDNPwasMakeReengageablesingNotificationsPush]  

<!-- links -->  

[AzurewebsitesWebpushdemo]: https://webpushdemo.azurewebsites.net "Web Push Notifications |  Microsoft Edge Demos"  

[MDNPwasMakingOfflineServiceWorkers]: https://developer.mozilla.org/docs/Web/Progressive_web_apps/Offline_Service_workers "Making PWAs work offline with Service workers - PWAs | MDN"  
[MDNPwasMakeReengageablesingNotificationsPush]: https://developer.mozilla.org/docs/Web/Progressive_web_apps/Re-engageable_Notifications_Push "How to make PWAs re-engageable using Notifications and Push - PWAs | MDN"  
