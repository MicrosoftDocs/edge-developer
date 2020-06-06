---
title: Offline and network connectivity support in Progressive Web Apps
description: Learn how to use supporting technologies to create resilient experiences to cater for different network conditions.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/15/2020
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: pwa
keywords: progressive web apps, PWA, Edge, JavaScript, Windows, UWP, Microsoft Store
---

# Offline and network connectivity support in Progressive Web Apps

For many years organizations were reluctant to invest heavily in web-based software over native software because web applications depended on stable network connections. Today, the web platform now offers robust options that enable users to continue working, even if the network connection becomes unstable or goes completely offline.

## Use the caching to improve performance of PWAs

With the introduction of [Service Workers][MDNServiceWorker], the web platform added the `Cache` API to provide access to managed cached resources. This Promise-based API allows developers to store and retrieve many web resources—HTML, CSS, JavaScript, images, JSON, and so on. Usually, the Cache API is used within the context of a Service Worker, but it is also available in the main thread on the `window` object.

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

This code, which runs during the Service Worker `install` life cycle event, opens a cache named `static-cache` and then, when it has a pointer to the cache, adds four resources to it using the `addAll()` method.  Often the approach is coupled with cache retrieval during a `fetch` event   

```javascript
self.addEventListener( "fetch", event => {
    const request = event.request,
                    url = request.url;
    
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

The code snippet runs within the Service Worker whenever the browser makes a `fetch` request for this site. Within that event, there is a conditional statement that runs if the request is for an HTML file. The Service Worker checks to see if the file already exists in any cache \(using the `match()` method\). If the request exists in the cache, that cached result is returned. If not, a new `fetch` for that resource is run, a copy of the response is cached for later, and the response is returned. If the `fetch` fails because the network is unavailable, the offline page is returned from the cache.

This simple introduction shows how to use caching in your progressive web app (PWA). Each PWA is different and may use different caching strategies. Your code may look different, and you may use different caching strategies for different routes within the same application.

## Use IndexedDB in your PWA to store structured data

`IndexedDB` is an API for storing structured data. Similar to the `Cache` API, it is also asynchronous, which means you may use it in the main thread or with Web Workers such as Service Workers. Use the `IndexedDB` API for storing a significant amount of structured data on the client, or binary data, such as encrypted media objects. For more information, see [MDN primer on using IndexedDB][MDNIndexeddbApiUsing].

## Understand storage options for PWAs

Sometimes you may need to store small amounts of data in order to provide a better offline experience for your users. If that is the case, you may find the simplicity of the key-value pair system of web storage meets your needs.  

> [!IMPORTANT]
> Web Storage is a synchronous process and is not available for use within worker threads such as Service Workers. Heavy usage may create performance issues for your application. 

There are 2 types of Web Storage: `localStorage` and `sessionStorage`. Each is maintained as a separate data store isolated to the domain that created it. `sessionStorage` persists only for the duration of the browsing session (for example, while the browser is open, which includes refresh and restores). `localStorage` persists until the data is removed by the code, the user, or the browser (for example, when there is limited storage available). The following code snippet shows how to use `localStorage`, which is similar to how `sessionStorage` is used.

```javascript
var data = {
    title: document.querySelector("[property='og:title']").getAttribute("content"),
    description: document.querySelector( "meta[name='description']" ).getAttribute("content")
};
localStorage.setItem( window.location, JSON.stringify(data) );
```  

This code snippet grabs metadata about the current page and stores it in a JavaScript object. Then it stores that value as JSON in `localStorage` using the `setItem()` method, and assigns a key equal to the current `window.location` URL. You may retrieve the information from `localStorage` using the `getItem()` method. 

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

## Test for network connections in your PWA

In addition to storing information for offline use, it is helpful to know when a network connection is available in order to synchronize data or inform users that the network status has changed. Use the following options to test for network connectivity.

### navigator.onLine  

The `navigator.onLine` property is a boolean that lets you know the current status of the network. If the value is `true`, the user is online, otherwise the user is offline.

### Online and Offline Events  

Knowing whether the network is available is helpful, but you may want to take action  when your network connectivity changes. In this situation, you may want to listen and take action in response to network events. The events are available on the `window`, `document`, and `document.body` elements as displayed in the following code snippet.

```javascript
window.addEventListener("online",  function(){
    console.log("You are online!");
});
window.addEventListener("offline", function(){
    console.log("Oh no, you lost your network connection.");
});
```  

## See also  

To learn more about managing offline scenarios, see the following pages.  

*   [Cache][MDNCache]  
*   [IndexedDB][MDNIndexeddbApi]  
*   [Service Worker][MDNServiceWorker]  
*   [Web Storage][MDNWebStorageApi]  
*   [navigator.onLine][MDNNavigatoronline]  
*   [Online and Offline Events][MDNNavigatoronlineOfflineEvents]  
*   [Request with Intent: Caching Strategies in the Age of PWAs][AlistapartRequestIntentCachingStrategiesAgePwas]

<!-- links -->  

[MDNCache]: https://developer.mozilla.org/docs/Web/API/Cache "Cache | MDN"  
[MDNIndexeddbApi]: https://developer.mozilla.org/docs/Web/API/IndexedDB_API "IndexedDB API | MDN"  
[MDNIndexeddbApiUsing]: https://developer.mozilla.org/docs/Web/API/IndexedDB_API/Using_IndexedDB "Using IndexDb - IndexDB API | MDN"  
[MDNServiceWorker]: https://developer.mozilla.org/docs/Web/API/ServiceWorker "ServiceWorker | MDN"  
[MDNWebStorageApi]: https://developer.mozilla.org/docs/Web/API/Web_Storage_API "Web Storage API | MDN"  
[MDNNavigatoronline]: https://developer.mozilla.org/docs/Web/API/NavigatorOnLine "NavigatorOnLine | MDN"  
[MDNNavigatoronlineOfflineEvents]: https://developer.mozilla.org/docs/Web/API/NavigatorOnLine/Online_and_offline_events "Online and offline events - NavigatorOnLine | MDN"  

[AbookapartGoingOffline]: https://abookapart.com/products/going-offline "Going Offline by Jeremy Keith | A Book Apart"  

[AlistapartRequestIntentCachingStrategiesAgePwas]: https://alistapart.com/article/request-with-intent-caching-strategies-in-the-age-of-pwas "Request with Intent: Caching Strategies in the Age of PWAs by Aaron Gustafson | A List Apart"  
