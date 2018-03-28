---
ms.assetid: 72fa5636-faf6-42cf-af8f-59e5e2627b1a
description: Learn how the Streams API can be used to create, process, and consume streams of data.
title: Dev guide - Streams API
author: abbycar
ms.author: abigailc
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Streams API

Streams are used to create, process, and consume streams of data. Streams provide the benefit of not having to read all the data into memory, and instead allow for incremental reading of one chunk (a single piece of data) at a time.



## Getting a stream from a Response

In order to get a stream of a Fetch [`Response`](https://msdn.microsoft.com/library/mt718790) object, you need to access it though the [`body`](https://msdn.microsoft.com/library/mt709131) property of the `Response`. By doing this, you'll gain access to the `ReadableStream` object associated with your `Response`.


### ReadableStream
The [ReadableStream](https://msdn.microsoft.com/library/mt709013) object represents a source of data to be read from and is adaptable to any chunk type. To keep track of chunks being consumed, each stream has an associated queue that contains the chunks that haven't yet been read from the source.

```
var stream = response.body; // get ReadableStream
```

The `ReadableStream` object has the following methods:

Method | Description
:----- | :-------
[cancel](https://msdn.microsoft.com/library/mt709012) | The `cancel` method signals that the reader no longer has need of the stream, thus throwing away any queued data.
[getReader](https://msdn.microsoft.com/library/mt709014) | The `getReader` method creates a stream reader and locks the stream to the new reader.

## Reading from a stream

If you want to read from a stream, you'll need to go a step further and call the `getReader` method of a `ReadableStream` object.

This creates a `ReadableStreamReader` that locks the stream for reading since a stream can only have one reader at a time. Now that the stream is locked, you can read chunks of data from the stream's queue.


### ReadableStreamReader
The [ReadableStreamReader](https://msdn.microsoft.com/library/mt709009) object represents a readable stream reader that allows direct reading of chunks from a `ReadableStream`. The `ReadableStreamReader` object can only be accessed by calling `getReader` on a `ReadableSteam` object.

```
var reader = response.body.getReader(); // make ReadableStreamReader
```

After creating a `ReadableStreamReader`, you can then use the `read` method to read each successive chunk of data from the queue.

The `read` method resolves to a promise under the following circumstances while data is available:
- An available chunk will prompt a promise that will resolve with an object of the form ``{ value: theChunk, done: false }``.
- If the stream becomes closed, the promise will resolve with an object of the form ``{ value: undefined, done: true }``.
- If the stream becomes errored, the promise will be rejected.

The `ReadableStreamReader` object has the following methods:

Method | Description
:----- | :-------
[cancel](https://msdn.microsoft.com/library/mt709008) | The `cancel` method initiates the cancel method of the readable steam.
[read](https://msdn.microsoft.com/library/mt709010) | The `read` method allows access to the next chunk from the stream’s queue.
[releaseLock](https://msdn.microsoft.com/library/mt709011) | The `releaseLock` method releases the reader's lock on the corresponding stream.


### Example

In the Microsoft Edge Developer blog post, [Fetch (or the undeniable limitations of XHR)](https://blogs.windows.com/msedgedev/2016/05/24/fetch-and-xhr-limitations/), the following code snippet shows how the content of a large UTF-8 text file can be streamed to a div:

```javascript
document.addEventListener('DOMContentLoaded', function (e) {
    var url = 'LargeFile.txt';

    var progress = 0;
    var contentLength = 0;

    fetch(url).then(function(response) {
        // get the size of the request via the headers of the response
        contentLength = response.headers.get('Content-Length');

        var pump = function(reader) {
            return reader.read().then(function(result) {
                // if we're done reading the stream, return
                if (result.done) {
                    return;
                }

                // retrieve the multi-byte chunk of data
                var chunk = result.value;

                var text = '';
                // since the chunk can be multiple bytes, iterate through
                // each byte while skipping the byte order mark
                // (assuming UTF-8 with single-byte chars)
                for (var i = 3; i < chunk.byteLength; i++) {
                    text += String.fromCharCode(chunk[i]);
                }

                // append the contents to the page
                document.getElementById('content').innerHTML += text;

                // report our current progress
                progress += chunk.byteLength;
                console.log(((progress / contentLength) * 100) + '%');

                // go to next chunk via recursion
                return pump(reader);
            });
        }

        // start reading the response stream
        return pump(response.body.getReader());
    })
    .catch(function(error) {
        console.log(error);
    });
});
```



## API reference

[Streams](https://msdn.microsoft.com/library/mt709019)

## Related topics
[Fetch (or the undeniable limitations of XHR)](https://blogs.windows.com/msedgedev/2016/05/24/fetch-and-xhr-limitations/#gist36052615)


[Fetch API](./fetch-API.md)

## Specification

[Streams](https://streams.spec.whatwg.org/)
