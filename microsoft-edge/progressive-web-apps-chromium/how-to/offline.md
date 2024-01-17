---
title: Store data on the device
description: How to use the different data storage options in Progressive Web Apps to enable users to continue working even if the network connection becomes unstable or goes offline.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: pwa
ms.date: 12/02/2022
---
# Store data on the device

Progressive Web Apps (PWA) offer robust options to store data locally to enable users to continue working even if the network connection becomes unstable or goes offline.

There are several ways in which a PWA can store data on a device, such as local storage, Cache API, or IndexedDB.

The following table describes the different options, and the rest of this article goes into more details and usage scenarios for each option.

| Storage option | Description |
|:--- |:--- |
| Web Storage | Web Storage has two types: session and local. Web Storage is useful to store small amounts of data from your app's front-end code. The data is structured as key-value pairs and is only available to the current app origin. In the case of session storage, the data is cleared when the session ends, for example when the app is closed, or when the user browses to another origin in the same window or tab. Local storage persists until the app removes the data. |
| IndexedDB | IndexedDB is an API for storing larger amounts of structured data. The API is asynchronous and can be used both from your app's front-end code and service worker code. Use the IndexedDB API to store a significant amount of structured data on the client, or binary data, such as encrypted media objects or files. |
| Cache | The Cache API can be used to manage cached resources. The Cache API is Promise-based and allows developers to store and retrieve many web resources—HTML, CSS, JavaScript, images, JSON, and so on. Usually, the Cache API is used within the context of a service worker, but it's also available to your app's front-end code. |
| File System Access | The File System Access API allows your PWA to read files and folders on the user's device and save changes back to them. |

**Note**: Do not use WebSQL or Application Cache. While these are two other browser storage mechanisms, they have both been deprecated. Instead of WebSQL, use IndexedDB. Instead of Application Cache, use the Cache API.


<!-- ====================================================================== -->
## Web Storage

Web Storage is useful for storing small amounts of string data on the user's device. The simplicity of the key-value pair system of Web Storage makes it easy to use.

Web Storage works synchronously in your app's main thread only. This means that Web Storage isn't available for use within service workers, and that heavy usage of Web Storage may create performance issues for your application.

Each type of Web Storage, session and local, is maintained as a separate data store that's isolated to the domain that created it.

*  `sessionStorage` persists only for the duration of the session - for example, while the browser is open, which includes when the page is refreshed.
*  `localStorage` persists until the data is removed by the app code, the user, or the browser.

The following code shows how to use `localStorage`, which is similar to how `sessionStorage` is used:

```javascript
const browserInformation = {
  name: 'Microsoft Edge',
  version: 108
};

localStorage.setItem('browser', JSON.stringify(browserInformation));
```

The above code stores a JavaScript object as a JSON string in `localStorage` using the `setItem()` method, and assigns a key equal to `browser`. You can retrieve the information from `localStorage` by using the `getItem()` method as shown below:

```javascript
const value = localStorage.getItem('browser');

const browserInformation = JSON.parse(value);
```

To learn more, see [Web Storage API](https://developer.mozilla.org/docs/Web/API/Web_Storage_API) on MDN.


<!-- ====================================================================== -->
## IndexedDB

IndexedDB is an asynchronous API for storing structured data that can be used in your app's front-end code or service worker code. Use the IndexedDB API for storing a significant amount of structured data on the client, or binary data, such as encrypted media objects or files.

IndexedDB is the best option for storing data in your PWA, because using the API doesn't slow down your app by blocking the main thread, and it can be used both from your app's front-end code and service worker.

Using IndexedDB is more complex than using Web Storage, and requires the following steps to store data:

1. Open a database, by using the `window.indexedDB.open()` function.
1. Create an object store in the database, by using the `IDBDatabase.createObjectStore()` function.
1. Start a transaction to store data, by using the `IDBDatabase.transaction()` function.
1. Wait for the operation to complete, by listening to an event.

To learn more and view code examples, see [Using IndexedDB](https://developer.mozilla.org/docs/Web/API/IndexedDB_API/Using_IndexedDB) on MDN.


<!-- ====================================================================== -->
## Cache

The Cache API is a system for storing and retrieving network requests and responses in your app's front-end code or service worker. It can be used to store assets, such as images and files, locally on the user's device. This can make your application work even when it's offline, or improve its performance by reducing the number of network requests that are needed to render the app.

The following code snippet shows how to listen to the `fetch` event in a service worker, and store the response from the server by using the Cache API:

```javascript
self.addEventListener("fetch", event => {
  async function cacheAndReturnRequest() {
    // Get the response from the server.
    const fetchResponse = await fetch(event.request.url);
    // Open the app's cache.
    const cache = await caches.open("cache-name");
    // Put the response in cache.
    cache.put(event.request.url, fetchResponse.clone());
    // And return the response.
    return fetchResponse.
  }

  event.respondWith(cacheAndReturnRequest());
});
```

To discover other useful Cache API scenarios, see [Use Service Workers to manage network requests](./service-workers.md).


<!-- ====================================================================== -->
## File System Access

The File System Access API makes it possible for your app to access files on the user's device in a way that's similar to native applications. It can be used to create applications that can read and write files, such as text or image editors.

To open a file from the user's device, use the `showOpenFilePicker()` function:

```javascript
openFileButton.addEventListener("click", async () => {
  const fileHandles = await window.showOpenFilePicker();
});
```

To learn more, see [Window.showOpenFilePicker()](https://developer.mozilla.org/docs/Web/API/Window/showOpenFilePicker) on MDN.

The File System Access API can also be coupled with the PWA File Handling feature to register your app as a handler of specific file types, and therefore feel more native to users. To learn more, see [Handle files in Progressive Web Apps](./handle-files.md).

The _origin-private_ File System Access API is a variation of the File System Access API that's intended to provide more privacy for users. It allows applications to access files on the user's device too, but only within a specific directory that's private to the app's origin. Also, this API is not intended to make it easy for users to access the private directory using their file explorer.

To open a file from the origin-private file system, use the `navigator.storage` Promise-based API:

```javascript
// Get the origin-private directory handle.
const root = await navigator.storage.getDirectory();
// Get the handle for a file in the directory.
const fileHandle = await root.getFileHandle("my-file.txt");
```


<!-- ====================================================================== -->
## Storage quota

In Microsoft Edge, local and session storage are limited to about 5MB each.

Other types of data storage, such as IndexedDB, Cache API, or Origin Private File System Access API, can use up to 60% of the total disk space on the device. For example, if the device your app is running on has a 64GB disk, Microsoft Edge allows your app to store up to about 38GB of data.

Note that the free space that's actually available on the device may be less than the 60% storage quota. For example, if the device your app is running on has a 64GB disk, but 50GB is already used by the operating system and other files, your app will only be able to store 14GB of data, even if the storage quota is still 38GB.

You can use `navigator.storage.estimate()` to ask the Storage Manager API what the storage quota for your app's origin is, and how much from it is already used. To learn more, see [StorageManager.estimate()](https://developer.mozilla.org/docs/Web/API/StorageManager/estimate) on MDN.

Trying to store more data than is available or allowed results in a JavaScript error. Your code should catch this error by using `try...catch` statements. The code snippet below shows how to catch an exceeded quota error when storing data using Web Storage:

```javascript
try {
  localStorage.setItem('foo', 'bar');
} catch (e) {
  // Code that handles the lack of storage space.
}
```


<!-- ====================================================================== -->
## Data eviction

When the user's device starts being low on available disk space, also known as _storage pressure_, Microsoft Edge will start evicting non-persistent data.

This means that the data your app stored by using the Cache API, IndexedDB, the Origin Private File System Access API, or Web Storage might get evicted.

By default, the data your app stores is not considered persistent and can get evicted when there's storage pressure. If your app stores critical data, use the `navigator.storage.persist()` function to make your app's storage persistent. Persistent storage can only be cleared by the user. To learn more, see [StorageManager.persist()](https://developer.mozilla.org/docs/Web/API/StorageManager/persist) on MDN.
