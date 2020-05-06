---
title: Handle offline and network instability scenarios with the Cache API, Service Worker, and friends
description: There are a host of technologies that enable you to create more resilient experience in the face of uncertain network conditions.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/20/2020
ms.topic: article
ms.prod: microsoft-edge
ms.technology: pwa
keywords: progressive web apps, PWA, Edge, JavaScript, Windows, UWP, Microsoft Store
---

# Handle offline and network instability scenarios with the Cache API, Service Worker, and friends

For many years organizations were reluctant to invest heavily in web-based software over native software because of the web’s dependence on a stable network connection. Thankfully, that limitation of the web is no longer the barrier it once was. The web platform now offers a handful of robust options for enabling users to continue working, even if their network connection becomes unstable or goes down entirely.

## The Cache API

With the introduction of [Service Workers](#link), the web platform also got a new API that provided access to manage cached resources: the Cache API. This Promise-based API allows developers to store and retrieve all kinds of web resources—HTML, CSS, JavaScript, images, JSON, etc. Most typically, this API is used within the context of a Service Worker, but it is also available in the main thread on the `window` object.

One common use for this API is to pre-cache critical resources when a Service Worker is installed

```js
self.addEventListener( "install", function( event ){
  // console.log( "WORKER: install event in progress." );
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

This code, which runs during the Service Worker "install" life cycle event, opens a cache named "static-cache" and then, when it has a pointer to that cache, adds four resources to it via the `addAll()` method. Often this approach will be coupled with cache retrieval during a "fetch" event:

```js
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

This bit of code runs within the Service Worker whenever the browser makes a Fetch request for this site. Within that event, there is a conditional that would only run if the request is for an HTML file. If it is, the Service Worker will check to see if the file already exists in any cache (using `match()`). If the request exists in the cache, that cached result is returned. If not, a new Fetch for that resource is executed, a copy of the response is cached for later, and the response is returned. If the Fetch fails, the offline page is returned from the cache.

Every PWA is different and each will likely have a unique caching strategy, these are just a simple introduction. Chances are your code will look much different, you might even have different caching strategies for different routes within the same application too!

## Indexed DB



## Web Storage

Sometimes you only need to store a little bit of data in order to provide a better offline experience to your users. If that’s the case, you might find the simplicity of web storage’s key-value pair system most suited to your needs. One important caveat, however: Web Storage is a _synchronous_ process and, as such, is not available for use within worker threads such as Service Worker. Heavy usage could also create performance issues for your application.

Web Storage comes in two flavors: `localStorage` and `sessionStorage`. Each is maintained as a separate data store isolated to the domain that created it. As you’d expect, `sessionStorage` persists only for the duration of the browsing session (i.e., while the browser is open, inclusive of reload and restore), whereas `localStorage` persists until it is removed by the developer, the user, or the browser (when under storage pressure). The API is identical for both storage types.

```js
var data = {
  title: document.querySelector("[property='og:title']").getAttribute("content"),
  description: document.querySelector( "meta[name='description']" ).getAttribute("content")
};
localStorage.setItem( window.location, JSON.stringify(data) );
```

This basic code sample would grab metadata about the current page and store it in a JavaScript object. Then it would store that value as JSON in `localStorage` (using `setItem()`), assigned to a key equal to the current URL (`window.location`). Retrieving the information from `localStorage` can be accomplished using `getItem()`.

Here’s an excerpt from an "offline" page that enumerates cached pages and extracts that metadata to build a rich link list:

```js
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
  // if data exists and it’s not the offline page
  if ( data && request.url.indexOf('offline') < 0  )
  {
    // build a link and insert it into the page
  }
}
```

Here, `insertOfflineLink()` passes the request’s URL into `localStorage.getItem()` to retrieve any stored metadata that might have been stored when that page was viewed. If that data is found, it would build and insert the requisite markup to display it.

## See Also

To learn more about managing offline scenarios, see the following:

- [Cache](https://developer.mozilla.org/docs/Web/API/Cache)
- [IndexedDB](https://developer.mozilla.org/docs/Web/API/IndexedDB_API)
- [Service Worker](https://developer.mozilla.org/docs/Web/API/ServiceWorker)
- [Web Storage](https://developer.mozilla.org/docs/Web/API/Web_Storage_API)

The following are also useful articles and books on this topic:

- [<cite>Going Offline</cite>](https://abookapart.com/products/going-offline) by Jeremy Keith
- ["Request with Intent: Caching Strategies in the Age of PWAs"](https://alistapart.com/article/request-with-intent-caching-strategies-in-the-age-of-pwas/) by Aaron Gustafson
