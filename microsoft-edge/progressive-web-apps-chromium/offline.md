---
title: Handle offline and network instability scenarios with the Cache API, Service Worker, and friends
description: There are a host of technologies that enable you to create more resilient experience in the face of uncertain network conditions.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/11/2020
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: pwa
keywords: progressive web apps, PWA, Edge, JavaScript, Windows, UWP, Microsoft Store
---

# Handle Offline And Network Instability Scenarios With The Cache API, Service Worker, And Friends  

For many years organizations were reluctant to invest heavily in web-based software over native software because web applications depended on stable network connections. Today, the web platform now offers robust options that enable users to continue working, even if the network connection becomes unstable or goes completely offline.

## The Cache API  

With the introduction of [Service Workers][MDNServiceWorker], the web platform also got a new API that provided access to manage cached resources: the `Cache` API.  This Promise-based API allows developers to store and retrieve all kinds of web resources—HTML, CSS, JavaScript, images, JSON, and so on.  Most typically, the `Cache` API is used within the context of a Service Worker, but it is also available in the main thread on the `window` object.  

One common use for the `Cache` API is to pre-cache critical resources when a Service Worker is installed.  

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
    // console.log( "WORKER: fetch event in progress." );  
    const request = event.request,
                    url = request.url;
    
    // If HTML
    if ( request.headers.get("Accept").includes("text/html") ) {
        event.respondWith(
            // check the cache first
            caches.match( request )
                  .then( cached_result => {
                if ( cached_result ) {
                    return cached_result;
                }
                // fallback to network, but cache the result
                return fetch( request )
                       .then( response => {
                    const copy = response.clone();
                    // wait to cache the result we got back
                    event.waitUntil(
                        caches.open( "pages" )
                              .then( cache => {
                            return cache.put( request, response );
                        });
                    );
                    return response;
                })
                // fallback to offline page
                .catch(() => caches.match( "/offline/" ));
            })
        ); // end respondWith
    } // end if HTML
});
```  

The previous code runs within the Service Worker whenever the browser makes a `Fetch` request for this site.  Within that event, there is a conditional that only runs if the request is for an HTML file.  If it is, the Service Worker checks to see if the file already exists in any cache \(using the `match()` method\).  If the request exists in the cache, that cached result is returned.  If not, a new `Fetch` for that resource is run, a copy of the response is cached for later, and the response is returned.  If the `Fetch` fails, the offline page is returned from the cache.  

Every PWA is different and each likely has a unique caching strategy, these are just a simple introduction.  Chances are your code looks much different, you may even have different caching strategies for different routes within the same application too!  

## IndexedDB  

`IndexedDB` is a low-level API for storing structured data.  Like the `Cache` API, it is also asynchronous meaning you may use it in the main thread as well as within Web Workers like Service Worker.  The `IndexedDB` API is typically the tool for when you need to store a significant amount of structured data on the client.  You may also use `IndexedDB` to store binary data, such as encrypted media objects.  

The `IndexedDB` API is too complicated to walk you through quickly.  For more information about the basics, see [MDN primer on using IndexedDB][MDNIndexeddbApiUsing].  

## Web Storage  

Sometimes you must store a little bit of data in order to provide a better offline experience to your users.  If that is the case, you may find the simplicity of key-value pair system of the web storage most suited to your needs.  

> [!IMPORTANT]
> Web Storage is a synchronous process and, as such, is not available for use within worker threads such as Service Worker.  

Heavy usage may create performance issues for your application.  

Web Storage comes in two flavors: `localStorage` and `sessionStorage`.  Each is maintained as a separate data store isolated to the domain that created it.  As you may expect, `sessionStorage` persists only for the duration of the browsing session \(for example, while the browser is open, inclusive of refresh and restore\); whereas `localStorage` persists until it is removed by the developer, the user, or the browser \(when under storage pressure\).  The API is identical for both storage types.  

```javascript
var data = {
    title: document.querySelector("[property='og:title']").getAttribute("content"),
    description: document.querySelector( "meta[name='description']" ).getAttribute("content")
};
localStorage.setItem( window.location, JSON.stringify(data) );
```  

This basic code sample grab metadata about the current page and store it in a JavaScript object.  Then it stores that value as JSON in `localStorage` \(using `setItem()` method\), assigned to a key equal to the current `window.location` URL.  You may retrieve the information from `localStorage` by using `getItem()` method.  

An excerpt from an offline page that enumerates cached pages and extracts that metadata to build a rich link list.  

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
    // if data exists and it is not the offline page
    if ( data && request.url.indexOf('offline') < 0  )
    {
        // build a link and insert it into the page
    }
}
```  

Here, the `insertOfflineLink()` method passes the URL of the request into the `localStorage.getItem()` method to retrieve any stored metadata that may be stored when the page is viewed.  If that data is found, the method builds it and inserts the requisite markup to display it.  

## Network Information  

In addition to being able to store information for offline use, you may find it quite helpful to know when a network connection is available in order to synchronize data or even inform each of your users that the network status has changed.  There are a few options for getting the information you need in this regard.  

### navigator.onLine  

The `navigator.onLine` property is a simple boolean that lets you know the current status of the network.  If the value is set to `true`, the user is online; if the value is set to `false`, the user is offline.  

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
