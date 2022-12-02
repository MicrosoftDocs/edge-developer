---
title: Store data on the device
description: How to use the different data storage options in Progressive Web Apps to create resilient experiences.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: pwa
ms.date: 12/02/2022
---
# Store data on the device

Progressive Web Apps (PWA) offer robust options to store data locally to enable users to continue working even if the network connection becomes unstable or goes offline.

There are several ways in which a PWA can store data on a device, such as local storage, Cache API, or IndexedDB.

The following table describes the different options, and the rest of this article goes into more details and usage scenarios for each option.

| Storage option | Description |
|:--- |:--- |
| Web Storage | Web Storage has two types: session and local. Web Storage is useful to store small amounts of data from your app's front-end code. The data is structured as key-value pairs and is only available to the current app origin. In the case of session storage, the data is cleared when the session ends, for example when the app is closed, or when the user browses to another origin in the same window or tab. Local storage persists until the app removes the data. |
| IndexedDB | IndexedDB is an API for storing larger amounts of structured data. The API is asynchronous and can be used both from your app's front-end code and service worker code. Use the IndexedDB API for storing a significant amount of structured data on the client, or binary data, such as encrypted media objects or files. |
| Cache | The Cache API can be used to manage cached resources. The Cache API is Promise-based and allows developers to store and retrieve many web resources—HTML, CSS, JavaScript, images, JSON, and so on. Usually, the Cache API is used within the context of a service worker, but it's also available to your app's front-end code. |
| File System Access | The File System Access API allows your PWA to read files and folders on the user's device and save changes back to them. |


<!-- ====================================================================== -->
## Web Storage

Web Storage is useful for storing small amounts of string data on the user's device. The simplicity of the key-value pair system of Web Storage makes it easy to use.

Web Storage works synchronously in your app's main thread only. This means that Web Storage isn't available for use within service workers, and that heavy usage of Web Storage may create performance issues for your application.

Each type of Web Storage, session and local, is maintained as a separate data store that's isolated to the domain that created it.

*  `sessionStorage` persists only for the duration of the session. For example, while the browser is open, which includes refresh and restores.
*  `localStorage` persists until the data is removed by the code, the user, or the browser. For example, when there is limited storage available.

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

#### Web Storage quota

In Microsoft Edge, Web Storage is limited to about 5MB.


<!-- ====================================================================== -->
## IndexedDB

IndexedDB is an asynchronous API for storing structured data that can be used in your app's front-end code or service worker code. Use the `IndexedDB` API for storing a significant amount of structured data on the client, or binary data, such as encrypted media objects or files.

To learn more, see [Using IndexedDB](https://developer.mozilla.org/docs/Web/API/IndexedDB_API/Using_IndexedDB) on MDN.

#### IndexedDB quota

With Microsoft Edge, your app can use up to 60% of the total disk space.

You can use `navigator.storage.estimate()` to ask the Storage Manager API how much total space is available and how much the current app already uses. To learn more, see [StorageManager.estimate()](https://developer.mozilla.org/docs/Web/API/StorageManager/estimate) on MDN.

Note that when the user's device starts being low on available disk space, also known as storage pressure, the browser that's running your app may start clearing non-persistent data.

By default, the data you store using IndexedDB is not persistent which means that the browser can clear it under storage pressure. Use the `navigator.storage.persist()` function to ask for your app's storage to be persistent. Persistent storage can only be cleared by the user. To learn more, see [StorageManager.persist()](https://developer.mozilla.org/docs/Web/API/StorageManager/persist) on MDN.


<!-- ====================================================================== -->
## Cache

<!-- ====================================================================== -->
## File System Access

