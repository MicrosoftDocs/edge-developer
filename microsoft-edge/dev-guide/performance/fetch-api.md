---
ms.assetid: 38807488-0f90-41a1-bda4-1555068bb87b
description: Learn how to the Fetch API, which is XMLHttpRequest's modern-day replacement.
title: Dev guide - Fetch API
author: abbycar
ms.author: abigailc
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Fetch API

The [Fetch API](https://msdn.microsoft.com/library/mt718765) utilizes the [`fetch`](https://msdn.microsoft.com/library/mt718769) method for fetching resources. In the past this was achieved with `XMLHttpRequest`. Not only is fetch simpler to use, it also provides lower level access to requests and responses.

In the Microsoft Edge Developer blog post, [Fetch (or the undeniable limitations of XHR)](https://blogs.windows.com/msedgedev/2016/05/24/fetch-and-xhr-limitations/), the following code snippets compare XHR to Fetch when making a request for a JSON resource:

**XHR**
```javascript
var xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.responseType = 'json';

xhr.onload = function() {
   console.log(xhr.response);
};

xhr.onerror = function() {
   console.log("Houston, we've got a problem.");
};

xhr.send();
```

**Fetch**
```javascript
fetch(url).then(function(response) {
   return response.json();
}).then(function(jsonData) {
   console.log(jsonData);
}).catch(function() {
   console.log("Houston, we've got a problem.");
});
```
## Headers
The Headers object is used to perform actions on request and response headers. Within a Headers object is a list of associated headers.

The Headers object has the following methods:

Method | Description
:----- | :-------
[append](https://msdn.microsoft.com/library/mt718744) | Appends a new value to an already existing header inside a Headers object.
[delete](https://msdn.microsoft.com/library/mt718760) | Deletes a header from the current Headers object.
[get](https://msdn.microsoft.com/library/mt718768) | Gets the first value of a header from the current Headers object.
[has](https://msdn.microsoft.com/library/mt718771) | Checks whether or not a header exists within the current Headers object.
[set](https://msdn.microsoft.com/library/mt718792) | Sets a new value to an already existing header inside a Headers object.

## Request and Response
The Fetch API gives you more freedom when it comes to making requests and responses when compared to XHR. The [`Request`](https://msdn.microsoft.com/library/mt718786) object represents a resource request, while the [`Response`](https://msdn.microsoft.com/library/mt718790) object represents the response of a request.
The [`body`](https://msdn.microsoft.com/library/mt709131) of a `Response` object contains a stream that is read from using the [`Streams` API](https://msdn.microsoft.com/library/mt709019).

Both the `Response` and `Request` objects have the same methods:

Method | Description
:----- | :-------
[arrayBuffer](https://msdn.microsoft.com/library/mt718744) | Takes a Response or Request stream and returns a promise for an ArrayBuffer object.
[blob](https://msdn.microsoft.com/library/mt718760) | Takes a Response or Request stream and returns a promise for a Blob object.
[json](https://msdn.microsoft.com/library/mt718768) | Takes a Response or Request stream and returns a promise for an object containing JSON data.
[text](https://msdn.microsoft.com/library/mt718771) | Takes a Response or Request stream and returns a promise for a USVString object.

Both objects also have respective `clone` methods:

Method | Description
:----- | :-------
[clone](https://msdn.microsoft.com/library/mt709016) | Creates a copy of the current Response object.
[clone](https://msdn.microsoft.com/library/mt718784) | Creates a copy of the current Request object.




## API reference
[Fetch](https://msdn.microsoft.com/library/mt718765)


## Related topics
[Fetch (or the undeniable limitations of XHR)](https://blogs.windows.com/msedgedev/2016/05/24/fetch-and-xhr-limitations/)


[Streams API](./streams-API.md)

[XMLHttpRequest](./XMLHttpRequest.md)

## Specification
[Fetch](https://fetch.spec.whatwg.org/)
