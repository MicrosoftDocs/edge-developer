---
ms.assetid: 1976a89e-61f5-4d2b-ae12-57885a7dd03c
description: Learn how the WebSocket API provides a protocol for two-way communication between browser and server.
title: Dev guide - WebSocket
author: erikadoyle
ms.author: edoyle
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# The WebSocket API


Microsoft Edge supports the [`WebSocket`](https://msdn.microsoft.com/library/Hh772770) API as defined in the World Wide Web Consortium (W3C)'s [WebSocket API spec](https://html.spec.whatwg.org/multipage/comms.html#network). `WebSocket`s technology provides a new W3C JavaScript API and protocol for two-way communication over the internet. This new protocol makes it easier to work directly with fixed data formats, and it bypasses the slower document-based HTTP protocol.

The current HTTP standard protocol is slow because it must request documents from a server and wait for the document to be sent before it can display a webpage. With `WebSocket`s, you can send and receive your data immediately using text, binary arrays, or blobs.

The `WebSocket` API is simple, requiring very little code. You can easily take advantage of low-latency, bidirectional data interchanges that will help you create faster online games, instant social network notifications, real-time displays of stock and weather information, and other timely data.

## Implementing WebSockets

Implementing this new data interchange technology is simple:

1. Use a client browser that implements the **WebSocket** protocol.
2. Write code in a webpage that creates a client `WebSocket`.
3. Write code on a web server that responds to a client request through a `WebSocket`.

### Using a WebSocket client

The `WebSocket` protocol uses the following URI schemes:

```html
ws://
wss://
```

### Writing WebSocket client code

Your webpage code must do the following:

1. Initialize the websocket and connect to the server.
2. Test to see whether it was successful.
3. Send and receive data.

To define the `websocket` URL, the below code works:

```javascript
var host = 'ws://example.microsoft.com';
```

The following snippet shows how to connect to a `WebSocket` and then test to see whether it was successful:

```javascript
var host = "ws://sample-host/echo";
try {
	socket = new WebSocket(host);

    socket.onopen = function (openEvent) {
       document.getElementById("serverStatus").innerHTML = 
          'WebSocket Status:: Socket Open';
    };

	socket.onmessage = function (messageEvent) {
		if (messageEvent.data instanceof Blob) {
			var destinationCanvas = document.getElementById('destination');
			var destinationContext = destinationCanvas.getContext('2d');
			var image = new Image();
			image.onload = function () {
				destinationContext.clearRect(0, 0, 
				destinationCanvas.width, destinationCanvas.height);
				destinationContext.drawImage(image, 0, 0);
			}
			image.src = URL.createObjectURL(messageEvent.data);
		} else {
			document.getElementById("serverResponse").innerHTML = 
			  'Server Reply:: ' + messageEvent.data;
		}
	};

	socket.onerror = function (errorEvent) {
		document.getElementById("serverStatus").innerHTML = 
		  'WebSocket Status:: Error was reported';
	};

	socket.onclose = function (closeEvent) {
		document.getElementById("serverStatus").innerHTML = 
		  'WebSocket Status:: Socket Closed';
	};
}
catch (exception) { if (window.console) console.log(exception); }

function sendTextMessage() {
	if (socket.readyState != WebSocket.OPEN) return;

    var e = document.getElementById("textmessage");
    socket.send(e.value);
}

function sendBinaryMessage() {
	if (socket.readyState != WebSocket.OPEN) return;
    var sourceCanvas = document.getElementById('source');
    socket.send(sourceCanvas.msToBlob());
}    
```

The previous code assumes you have `serverStatus`, `destination`, `serverResponse`, `textmessage`, and `serverData` as elements with IDs in your webpage. The result of the catch will be displayed in the console window if F12 developer tools is running. 

To send text message data, use the following code:

```javascript
var e = document.getElementById("msgText");
socket.send(e.value);
```

The previous code example assumes that you have the message text you want to send in a `msgText` element that includes the ID in your webpage. Similarly, you can use the [`onmessage`](https://msdn.microsoft.com/library/Hh772757) event to detect new messages or send a message to the server by using the [`send`](https://msdn.microsoft.com/library/Hh994652) method. The `send` method can be used to send text, binary arrays, or blob data.

### Write WebSocket server code

Server code that handles sockets can be written in any server language. Whatever language you choose, you must write code that accepts `WebSocket` requests and processes them appropriately.

## WebSocket programming


Here are the objects, methods, and properties related to WebSockets.

| Name                                              | Type     | Description                                                                                            |
|:--------------------------------------------------|:---------|:-------------------------------------------------------------------------
| [WebSocket](https://msdn.microsoft.com/library/Hh772739)                     | object   | Provides bidirectional channel to remote host.                          |
| [close](https://msdn.microsoft.com/library/hh772748)                   | method   | Closes a websocket.                                                     |
| [send](https://msdn.microsoft.com/library/Hh994652)                     | method   | Sends data to a server using a websocket.                               |
| [binaryType](https://msdn.microsoft.com/library/hh772744)         | property | Binary data format received by [**onmessage**](https://msdn.microsoft.com/library/Hh772757). |
| [bufferedAmount](https://msdn.microsoft.com/library/hh772746) | property | Number of data bytes queued using send.                                 |
| [extensions](https://msdn.microsoft.com/library/hh772750)         | property | Reports the extensions that the server selected.                        |
| [onclose](https://msdn.microsoft.com/library/hh772753)               | property | Event handler called when the socket is closed.                         |
| [onerror](https://msdn.microsoft.com/library/hh772755)               | property | Event handler called when there is an error.                            |
| [onmessage](https://msdn.microsoft.com/library/hh772757)           | property | Event handler to notify that a message is received.                     |
| [onopen](https://msdn.microsoft.com/library/hh772759)                 | property | Event handler called if the websocket connected.                        |
| [protocol](https://msdn.microsoft.com/library/hh772760)             | property | Reports the protocol the server selected.                               |
| [readyState](https://msdn.microsoft.com/library/hh772762)         | property | Reports the state of the websocket connection.                          |
| [url](https://msdn.microsoft.com/library/hh772768)                       | property | Reports the current URL of the socket.                                  |


## API reference

[WebSocket API](https://msdn.microsoft.com/library/Hh772770)

## Specification

[The WebSocket API](https://html.spec.whatwg.org/multipage/comms.html#network)


