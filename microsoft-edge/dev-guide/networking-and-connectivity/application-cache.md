---
ms.assetid: d5e0422b-a840-467e-81da-a897741e0104
description: Learn how to cache resources locally with the App Cache (Application Cache) API.
title: Dev guide - Application cache
author: erikadoyle
ms.author: edoyle
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Application cache


The [Application Cache API](http://www.w3.org/TR/html5/browsers.html#offline) (or *AppCache*) was introduced in the [HTML5 spec](http://www.w3.org/TR/html5/browsers.html#application-cache-api), allowing you to create offline web applications.

AppCache enables webpages to *cache* (or save) resources locally, including images, script libraries, style sheets, and so on. AppCache also allows URLs to be served from cached content using standard Uniform Resource Identifier (URI) notation.

Using AppCache improves the performance of a webpage by saving resources locally. This reduces the number of requests made to the hosting server, and also enables offline access to cached resources.


To cache resources locally:

1. Create a [manifest file](http://go.microsoft.com/fwlink/p/?LinkId=228543) that defines the resources you want to save.
2. Reference the manifest file in each webpage designed to use cached resources.

## New in Microsoft Edge
Microsoft Edge brings a number of improvements to the Application Cache API, including:
* **Removal of soft limits**: Application Cache will not request user authorization to use more than 10 megabytes of space.
* **Changes to default hard limits**: Application Cache limits are removed from UWP apps using JavaScript. Additionally, Microsoft Edge now considers the volume size in determining the per-domain and per-total limit on how much disk space can be used. The table below applies to both phone and desktop versions of Microsoft Edge.

Volume size | Per domain | Total limit
:---------- | :---------- | :-----------
Less than or equal to 8 GB | 10 MB | 50 MB
More than 8 GB up to 32 GB | 50 MB | 500 MB
More than 32 GB up to 128 GB | 50 MB | 1 GB
More than 128 GB | 100 MB | 2 GB


## The manifest file
The manifest file is a text file that defines the caching behavior for resources used by the webpage.

### Creating a manifest file


The following example creates a manifest file that caches three files, provides a fallback image incase an image folder is offline, and specifies an image that will not be cached.

```html
CACHE MANIFEST

CACHE:
# Defines resources to be cached.
script/library.js
css/stylesheet.css
images/figure1.png

FALLBACK:
# Defines resources to be used if non-cached
# resources cannot be downloaded, for example
# when the browser is offline..
photos/ figure2.png

NETWORK:
# Defines resources that will not be cached.
figure3.png
```

Manifest files are divided into three sections:

Section | Description
:------- | :-------
`CACHE`| Defines resources that will be stored locally. In the example above, three files are cached.
`FALLBACK` | Defines resources to be used when other resources are not available. The example above defines `figure2.png` as a fallback image for the `photos/` folder. If the browser cannot access images in the photos folder (because the browser is offline or because the server cannot be reached), figure2.png will replace the unavailable images in the rendered markup. As a result, `figure2.png` will be cached locally.
`NETWORK` | Specifies resources to be accessed when there is a network connection. Resources in this section are not cached. This section allows the use of the wildcard (\*) character to indicate that all other resources should not be cached.

Manifest files can contain any number of these sections, and sections can be repeated; however, new sections must begin with the section header followed by a colon, as shown in the previous example. If no section header is provided, the `CACHE:` header is presumed. The following example shows a simplified manifest.
```html
CACHE MANIFEST
script/library.js
css/stylesheet.css
images/figure1.png
```

In addition, manifest files:
* Must be encoded with 8-bit Unicode Transformation Format (UTF-8) character encoding.
* Must be served with a `text/cache-manifest` MIME type.
* Must begin with the line "`CACHE MANIFEST`".
* Can contain comments, preceded by the pound sign (\#).

Check out the [cache manifest syntax](http://www.w3.org/TR/html5/browsers.html#manifests) for more information.

### Declaring a manifest


To associate a manifest with a webpage, assign the name of the manifest file to the [`manifest`](http://www.w3.org/TR/html5/semantics.html#attr-html-manifest) attribute of the [`html`](https://msdn.microsoft.com/library/ms535255) element, as shown in the following example.

```html
<!doctype html>
<html manifest="appcache.manifest">
 <head>
  <title>A Web Page</title>
  <script src="library.js"></script>
  <link rel="stylesheet" href="stylesheet.css">
 </head>
 <body onload="doSomething();">
  <p>Results go here: <span id="results">Unknown</span></p>
 </body>
</html>
```

In this example, the webpage declares "appcache.manifest" as the manifest file. The manifest declaration is interpreted like any other file reference. Because this example uses a relative file name, the manifest is presumed to be located in the same directory as the webpage itself.

> [!NOTE]
> File references in the manifest are interpreted with respect to the location of the manifest file, not the webpage that declares it.




It's not necessary for the manifest to include the name of the webpage declaring the manifest; webpages that declare manifests are cached automatically.

## The ApplicationCache object


The [`ApplicationCache`](http://go.microsoft.com/fwlink/p/?LinkId=228546) object provides methods and properties that enable you to manage the application cache. You can also define event handlers that show the progress of the cache process.


The [`ApplicationCache`](http://go.microsoft.com/fwlink/p/?LinkId=228546) object supports two methods for controlling the cache. The [`update`](http://go.microsoft.com/fwlink/p/?LinkId=228551) method initiates an asynchronous check for updates, similar to the one performed when a webpage is first loaded. Any existing cache will be used until the webpage is reloaded or the [`swapCache`](http://go.microsoft.com/fwlink/p/?LinkId=228552) method Is called. To begin using an updated cache, either reload the webpage (manually or programmatically) or call the `swapCache` method. Because the cache is updated when a webpage is reloaded, it is not necessary to call `swapCache` before reloading or refreshing a webpage.

> [!NOTE]
> The updated cache is not used by the webpage until it is reloaded, either manually by the user or programmatically using the [reload](http://go.microsoft.com/fwlink/p/?LinkId=228553) method of the [window.location](http://go.microsoft.com/fwlink/p/?LinkId=228554) object.




The [`ApplicationCache`](http://go.microsoft.com/fwlink/p/?LinkId=228546) object supports the following events:

Events | Description
:-------- | :----------
[cached](https://msdn.microsoft.com/library/hh771704.aspx) | Fires when the manifest has been cached.
[checking](https://msdn.microsoft.com/library/hh771705.aspx) | Fires when the presence of an update is being checked.
[downloading](https://msdn.microsoft.com/library/hh771706.aspx) | Fires when manifest resources are being downloaded.
[progress](https://msdn.microsoft.com/library/hh771710.aspx) | Fires while manifest resources are being downloaded.
[error](https://msdn.microsoft.com/library/hh771707.aspx) | Fires when a problem occurs, such as an HTML 404 or 410 response code. The event is also fired when the manifest file cannot be downloaded.
[updateready](https://msdn.microsoft.com/library/hh771711.aspx) | Fires when a newer version of the cache is available.
[noupdate](https://msdn.microsoft.com/library/hh771708) | Fires when an update has been request, but the manifest has not changed.
[obsolete](https://msdn.microsoft.com/library/hh771709) | Fires when the current cache is marked as obsolete.



### Examples

#### Accessing the AppCache of a `window` object
The following example shows how you can use the [`applicationCache`](http://go.microsoft.com/fwlink/p/?LinkId=228547) property of a [`window`](http://go.microsoft.com/fwlink/p/?LinkId=228548) object (or worker object) to access the [`ApplicationCache`](http://go.microsoft.com/fwlink/p/?LinkId=228546) object.


```html
var sCacheStatus = "Not supported";
if (window.applicationCache)
{
   var oAppCache = window.applicationCache;
   switch ( oAppCache.status )
   {
      case oAppCache.UNCACHED :
         sCacheStatus = "Not cached";
         break;
      case oAppCache.IDLE :
         sCacheStatus = "Idle";
         break;
      case oAppCache.CHECKING :
         sCacheStatus = "Checking";
         break;
      case oAppCache.DOWNLOADING :
         sCacheStatus = "Downloading";
         break;
      case oAppCache.UPDATEREADY :
         sCacheStatus = "Update ready";
         break;
      case oAppCache.OBSOLETE :
         sCacheStatus = "Obsolete";
         break;
      default :
        sCacheStatus = "Unexpected Status ( " +
                       oAppCache.status.toString() + ")";
        break;
   }
}
return sCacheStatus;
```

This example uses the [`status`](http://go.microsoft.com/fwlink/p/?LinkId=228550) property to determine the status of the application cache for the document current loaded by the webpage.


#### Registering event handlers
The code example below shows how to register event handlers for the events supported by the AppCache.


```html
if (window.applicationCache) {
  var appCache = window.applicationCache;
   appCache.addEventListener('error', appCacheError, false);
   appCache.addEventListener('checking', checkingEvent, false);
   appCache.addEventListener('noupdate', noUpdateEvent, false);
   appCache.addEventListener('downloading', downloadingEvent, false);
   appCache.addEventListener('progress', progressEvent, false);
   appCache.addEventListener('updateready', updateReadyEvent, false);
   appCache.addEventListener('cached', cachedEvent, false);
}
```



## API Reference
[Application Cache API ("AppCache")](https://msdn.microsoft.com/library/Hh771715)

## Specification
[HTML5](http://www.w3.org/TR/html5/browsers.html#appcache)
