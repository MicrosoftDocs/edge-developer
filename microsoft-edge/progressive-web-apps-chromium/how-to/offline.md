---
title: Offline and network connectivity support in Progressive Web Apps
description: Learn how to use supporting technologies to create resilient experiences to cater for different network conditions.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/07/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: pwa
keywords: progressive web apps, PWA, Edge, JavaScript, Windows, UWP, Microsoft Store
---
# Offline and network connectivity support in Progressive Web Apps

For many years, organizations were reluctant to invest heavily in web-based software over native software, because web applications depended on stable network connections. Today, the Progressive Web Apps (PWA) platform offers robust options that enable users to continue working even if the network connection becomes unstable or goes offline.


<!-- ====================================================================== -->
## Use caching to improve PWA performance

With the introduction of [Service Workers](https://developer.mozilla.org/docs/Web/API/ServiceWorker), the web platform added the `Cache` API to provide access to managed cached resources. This Promise-based API allows developers to store and retrieve many web resources—HTML, CSS, JavaScript, images, JSON, and so on. Usually, the Cache API is used within the context of a Service Worker, but it is also available in the main thread on the `window` object.

One common use for the `Cache` API is to pre-cache critical resources when a Service Worker is installed, as shown in the following code snippet.

```javascript
self.addEventListener( "install", function( event ){
    event.waitUntil(
        caches.open( "static-cache" )
              .then(function( cache ){
            return cache.addAll([
                "/css/main.css",
                "/js/main.js",
                "/img/favicon.png",
                "/offline/"
            ]);
        })
    );
});
```

This code runs during the Service Worker `install` life cycle event, and opens a cache named `static-cache`. When it has a pointer to the cache, it adds four resources to the cache using the `addAll()` method.  This approach is often coupled with cache retrieval during a `fetch` event.

```javascript
self.addEventListener( "fetch", event => {
    const request = event.request;
    const url = request.url;

    // If we are requesting an HTML page.
    if ( request.headers.get("Accept").includes("text/html") ) {
        event.respondWith(
            // Check the cache first to see if the asset exists, and if it does, return the cached asset.
            caches.match( request )
                  .then( cached_result => {
                if ( cached_result ) {
                    return cached_result;
                }
                // If the asset is not in the cache, fallback to a network request for the asset, and proceed to cache the result.
                return fetch( request )
                       .then( response => {
                    const copy = response.clone();
                    // Wait until the response we received is added to the cache.
                    event.waitUntil(
                        caches.open( "pages" )
                              .then( cache => {
                            return cache.put( request, response );
                        });
                    );
                    return response;
                })
                // If the network is unavailable to make a request, pull the offline page out of the cache.
                .catch(() => caches.match( "/offline/" ));
            })
        ); // end respondWith
    } // end if HTML
});
```

The code snippet runs within the Service Worker whenever the browser makes a `fetch` request for this site. Within that event, there is a conditional statement that runs if the request is for an HTML file. The Service Worker checks to see whether the file already exists in any cache, by using the `match()` method:

*  If the request exists in the cache, that cached result is returned.
*  If the request doesn't exist in the cache, a new `fetch` for that resource is run, a copy of the response is cached for later, and the response is returned.
   * If the `fetch` fails because the network is unavailable, the offline page is returned from the cache.

This simple introduction shows how to use caching in your progressive web app (PWA). Each PWA is different and may use different caching strategies. Your code may look different, and you can use different caching strategies for different routes within the same application.


<!-- ====================================================================== -->
## Use IndexedDB in your PWA to store structured data

`IndexedDB` is an API for storing structured data. Similar to the `Cache` API, it is also asynchronous. This means you can use it in the main thread, or with Web Workers such as Service Workers. Use the `IndexedDB` API for storing a significant amount of structured data on the client, or binary data, such as encrypted media objects.  See [MDN primer on using IndexedDB](https://developer.mozilla.org/docs/Web/API/IndexedDB_API/Using_IndexedDB).


<!-- ====================================================================== -->
## Understand storage options for PWAs

Sometimes you might need to store small amounts of data in order to provide a better offline experience for your users. If that is the case, you might find that the simplicity of the key-value pair system of Web Storage meets your needs.

> [!IMPORTANT]
> Web Storage is a synchronous process and is not available for use within worker threads such as Service Workers. Heavy usage may create performance issues for your application.

There are two types of Web Storage: `localStorage` and `sessionStorage`. Each type of Web Storage is maintained as a separate data store isolated to the domain that created it.

*  `sessionStorage` persists only for the duration of the browsing session. For example, while the browser is open, which includes refresh and restores.
*  `localStorage` persists until the data is removed by the code, the user, or the browser. For example, when there is limited storage available.

The following code snippet shows how to use `localStorage`, which is similar to how `sessionStorage` is used.

```javascript
var data = {
    title: document.querySelector("[property='og:title']").getAttribute("content"),
    description: document.querySelector( "meta[name='description']" ).getAttribute("content")
};
localStorage.setItem( window.location, JSON.stringify(data) );
```

This code snippet grabs metadata about the current page and stores it in a JavaScript object. Then it stores that value as JSON in `localStorage` using the `setItem()` method, and assigns a key equal to the current `window.location` URL. You can retrieve the information from `localStorage` by using the `getItem()` method.

The following code snippet shows how to use caching with `localstorage` to enumerate cached pages and extract metadata to perform a task, such as building a list of links.

```javascript
caches.open( "pages" )
      .then( cache => {
    cache.keys()
         .then( keys => {
        if ( keys.length )
        {
            keys.forEach( insertOfflineLink );
        }
    })
});

function insertOfflineLink( request ) {
    var data = JSON.parse( localStorage.getItem( request.url ) );
    // If data exists and this page is not an offline page, assuming that offline pages have the word offline in the URL.
    if ( data && request.url.indexOf('offline') < 0  )
    {
        // Build a link and insert it into the page.
    }
}
```

The `insertOfflineLink()` method passes the URL of the request into the `localStorage.getItem()` method to retrieve any stored metadata. The retrieved data is checked to see if it exists, and if it does, an action can be taken on the data, such as building and inserting the markup to display it.


<!-- ====================================================================== -->
## Test for network connections in your PWA

In addition to storing information for offline use, it's helpful to know when a network connection is available, in order to synchronize data or inform users that the network status has changed. Use the following options to test for network connectivity.

### navigator.onLine

The `navigator.onLine` property is a boolean that lets you know the current status of the network. If the value is `true`, the user is online; otherwise, the user is offline.

### Online and Offline Events

You can take action when your network connectivity changes.  You can listen and take action in response to network events.  The events are available on the `window`, `document`, and `document.body` elements, as shown below:

```javascript
window.addEventListener("online",  function(){
    console.log("You are online!");
});
window.addEventListener("offline", function(){
    console.log("Oh no, you lost your network connection.");
});
```


<!-- ====================================================================== -->
## See also

*   [Cache](https://developer.mozilla.org/docs/Web/API/Cache)
*   [IndexedDB](https://developer.mozilla.org/docs/Web/API/IndexedDB_API)
*   [Service Worker](https://developer.mozilla.org/docs/Web/API/ServiceWorker)
*   [Web Storage](https://developer.mozilla.org/docs/Web/API/Web_Storage_API)
*   [navigator.onLine](https://developer.mozilla.org/docs/Web/API/NavigatorOnLine)
*   [Online and Offline Events](https://developer.mozilla.org/docs/Web/API/NavigatorOnLine/Online_and_offline_events)
*   [Request with Intent: Caching Strategies in the Age of PWAs](https://alistapart.com/article/request-with-intent-caching-strategies-in-the-age-of-pwas)
