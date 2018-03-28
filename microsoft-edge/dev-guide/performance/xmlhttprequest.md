---
ms.assetid: 4a53c433-5d8d-4c57-9302-f50e3f6c2763
description: Learn how XMLHttpRequest supports a variety of developer scenarios involving transferring data to and from a server by sending requests.
title: Dev guide - XMLHttpRequest
author: abbycar
ms.author: abigailc
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# XMLHttpRequest

The [XMLHttpRequest (XHR)](https://msdn.microsoft.com/library/ms535874) object supports a variety of developer scenarios involving transferring data to and from a server by sending requests. It supports any text based format, and can make both HTTP and HTTPS requests.

The modern-day equivalent of `XMLHttpRequest` is the [Fetch API](./fetch-API.md). This API was introduced in Microsoft Edge. Use the Fetch API instead of `XMLHttpRequest` if you want lower-level interaction with responses and requests, and want the ability to stream the data within a response.



## Binary Object upload and download

XHR supports binary data. When the [`responseType`](https://msdn.microsoft.com/en-us/library/hh872882) property of an `XMLHttpRequest` object is set to `"blob"`, the data associated with the request is treated as binary data. This affects the value of the response property for download requests (for instance, GET).

The code below shows how to use XHR to download an image to a blob object and then assign the result to an image element on the webpage.

```javascript
var req = new XMLHttpRequest();
xhr.open("GET", "download?name=" + name, true);
xhr.responseType = "blob";
xhr.onreadystatechange = function () {
  if (xhr.readyState == xhr.DONE) {
    var blob = xhr.response;
    var image = document.getElementById("my-image");
    image.addEventListener("load", function (evt) {
      URL.revokeObjectURL(evt.target.src);
    }
    image.src = URL.createObjectURL(blob);
  }
}
xhr.send();
```

When the `responseType` property is set to `"ms-stream"` for download requests, content can be handled on the fly, as shown in the following example.

```javascript
var xhr = new XMLHttpRequest();
xhr.open("GET", "download?name=" + name, true);
xhr.responseType = "ms-stream";
xhr.onreadystatechange = function () {
  if (xhr.readyState == xhr.LOADING) {
    var stream = xhr.response;
    var video = document.getElementById("my-video");
    video.addEventListener("loadeddata", function (evt) {
      URL.revokeObjectURL(evt.target.src);
    }
    video.src = URL.createObjectURL(stream);
  }
}
xhr.send();
```

## Multipart HTTP streaming


Microsoft Edge supports multipart HTTP streaming by allowing the [responseText](https://msdn.microsoft.com/en-us/library/ms534369) property to be read while the response to an [XMLHttpRequest](https://msdn.microsoft.com/library/ms535874) request is loading, as shown in the code snippet below:

```javascript
xhr.open("GET", url);
xhr.timeout = timeout;
xhr.onreadystatechange = function() {
  if (this.readyState >= 3 && this.status == 200) {
    var content = this.responseText;
    handleContent(content);
  }
}
xhr.send();
```

The `responseText` property returns the full value of the response read to date.

To handle individual packets of the response as they are received, you can use the `progress` event or track the length of `responseText` in each iteration of the `readyStateChange` event, as shown in the following example:

```javascript
xhr.open("GET", url);
xhr.timeout = timeout;
xhr.onreadystatechange = function() {
  if (typeof this.index == "undefined")
    this.index = 0;

  if (this.readyState &>= 3 && this.status == 200) {
    var content = this.responseText;
    handleContent( content.substring(this.index) )
    this.index = content.length;
  }
}
xhr.send();
```

## Event support


Event handling for the [XMLHttpRequest](https://msdn.microsoft.com/library/ms535874) object follows the models specified in the [DOM Events Level 3](http://go.microsoft.com/fwlink/p/?LinkID=203756) specification and the [Progress Events](http://go.microsoft.com/fwlink/p/?LinkID=204796) specification, as shown in the following example.

```javascript
var xhr = new XMLHttpRequest();
var url = "some-url";

xhr.timeout = 5000;
xhr.addEventListener("timeout", handleTimeout(evt), false);

xhr.onprogress = function(evt) {
  handleEvent("data: " + this.responseText);
  // Calculate progress
  var str = "";
  if (evt.lengthComputable) {
    var percent = 100 * evt.loaded / evt.total;
    str = percent + "%. Current total size: " + this.responseText.length);
  } else {
    str = "Progress unknown. Current total size: " + this.responseText.length;
  }
  updateProgress(str);
}
xhr.open("GET", url);
xhr.send();
```

## Cross-Origin Resource Sharing (CORS) for XMLHttpRequest


Microsoft Edge supports Cross-Origin Resource Sharing (CORS) with respect to the [XHR](https://msdn.microsoft.com/library/ms535874) object. CORS uses HTTP headers to enable cross-domain web requests that are normally restricted by the same-site origin policy.

By default, the same-site origin policy prevents websites from requesting resources from servers on other domains. However, browsers that support CORS for XHR requests can access resources from other domains if the appropriate administrator chooses to allow such requests.

When a webpage makes an XHR request, Microsoft Edge sends an origin header to the target server; the header contains the protocol scheme of the request (either http:// or https://) and the hostname for the webpage making the request. If the target server approves the request, it returns an Access-Control-Allow-Origin header and the request is allowed to proceed.

`XMLHttpRequest` objects now support a [`withCredentials`](https://msdn.microsoft.com/en-us/library/hh872883) property, which allows XHR requests to include authorization mechanisms.

The `withCredentials` property can be used to detect CORS support, as shown in the following example.

```javascript
var url = "http://contoso.com/services/"
if( window.XMLHttpRequest ) {
  var oReq = new XMLHttpRequest();
  if( oReq.withCredentials == true ) {
    oReq.open("GET", url, true);
    oReq.onload = handleResponse();
    oReq.send( null );
  } else {
  // CORS not support.  Handle fallback
  }
} else {
  // XMLHttpRequest not supported; handle fallback
}
```

Networking performance is improved by caching resources downloaded via CORS-enabled XHR operations in the same manner as it would if they had been downloaded directly.



## API Reference


[XMLHTTPRequest (XHR) and AJAX Support](https://msdn.microsoft.com/en-us/library/hh772834)


## Related topics

[Fetch API](./fetch-API.md)

[Asynchronous Programming in JavaScript with “Promises”](http://blogs.msdn.com/b/ie/archive/2011/09/11/asynchronous-programming-in-javascript-with-promises.aspx)

[About Native XMLHTTP](https://msdn.microsoft.com/library/ms537505)

[Introducing AJAX Navigations](https://msdn.microsoft.com/library/Cc891506)

[Introducing Cross-domain Request (XDR)](https://msdn.microsoft.com/library/Dd573303)


## Specification


[XMLHttpRequest Level 1](https://dvcs.w3.org/hg/xhr/raw-file/default/xhr-1/Overview.html)
