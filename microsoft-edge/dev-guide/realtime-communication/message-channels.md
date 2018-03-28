---
ms.assetid: 6fdd6441-a0bb-4794-9a1e-50ecf9f3354a
description: See how channel messaging lets code in different browsing contexts communicate directly via ports in a way designed to avoid cross-site scripting attacks.
title: Dev guide - Message channels
author: abbycar
ms.author: abigailc
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Message Channels

Channel messaging enables code in different browsing contexts to communicate directly via ports, regardless of source domain, in a way designed to avoid cross-site scripting attacks. After the ports are created, the endpoints communicate by using a combination of the [`postMessage`](https://msdn.microsoft.com/library/jj160614.aspx) method and the [`onmessage`](http://go.microsoft.com/fwlink/p/?LinkID=128221) event.

> [!NOTE]
> Based on the [HTML5 Web Messaging](https://html.spec.whatwg.org/multipage/comms.html#channel-messaging) standard, Message Channels are supported in Microsoft Edge build 10240+.



[MessageChannel()](https://msdn.microsoft.com/library/hh772432.aspx) creates a connection (two "entangled" ports) to enable independent pieces of code (running in different browsing contexts) to communicate directly. Communication channels are implemented as two-ways pipes, with a port at each end. Messages sent in one port are delivered at the other port, and vice-versa. Messages are delivered as DOM events, without interrupting or blocking running tasks.

```Javascript
var msgChannel = new MessageChannel();
```

When a new [MessageChannel](https://msdn.microsoft.com/library/hh772432.aspx) object is created, it has two connected MessagePort objects (port1 and port2). One port is kept as the local port, and the other is sent to the remote [window](https://msdn.microsoft.com/library/ms535873.aspx) or [worker](https://msdn.microsoft.com/library/hh772807.aspx) using [`postMessage`](https://msdn.microsoft.com/library/jj160614.aspx).

MessageChannel Attributes

Attribute | Type | Description
:------------ | :------------- | :-------------
[port1](https://msdn.microsoft.com/library/hh772437.aspx) | [MessagePort](https://msdn.microsoft.com/library/hh772450.aspx) | Returns the first MessagePort object of the MessageChannel.
[port2](https://msdn.microsoft.com/library/hh772440.aspx) | [MessagePort](https://msdn.microsoft.com/library/hh772450.aspx) | Returns the second MessagePort object.

## postMessage

The [`postMessage`](https://msdn.microsoft.com/library/jj160614.aspx) method safely enables cross-origin communication, allowing cooperative text exchange between non-trusted modules from different domains embedded within a page. It does so by ensuring a consistent and secure process for text-based data exchange.

Here's an example of sending a port to be used for cross-document communication. Be aware that the array of ports must be the last argument.

```Javascript
otherWindow.postMessage('hello', 'http://example.com', [channel.port2]);
```
Similarly, you can send a port endpoint to a worker thread by using `postMessage`:

```Javascript
worker.postMessage({code:"port"}, [channel.port2]);
```

To send messages, the `postMessage()` method on the port is used:

```Javascript
channel.port1.postMessage('hello');
```

To receive messages, one listens to [`onmessage`](http://go.microsoft.com/fwlink/p/?LinkID=128221) events:

```Javascript
channel.port1.onmessage = handleMessage;
function handleMessage(event) {
  // message is in event.data
  // ...
}
```
When a script invokes the `postMessage` method, the browser sends an `onmessage` event to the target document on which the data property has been set.

The following example shows how a worker thread might receive and use a port.

```Javascript
// Worker Thread
onmessage = function (event) {
    if (event.data.code == "port") {
        event.ports[0].postMessage("Port received.");
    }
}
```
After the port is received, additional communication occurs on the port using `postMessage` and `onmessage` events. The following code defines an event handler and sends a message using a channel-messaging port.

```Javascript
channel.port1.onmessage = function (event) {
  // Message is in event.data
  alert("Message is: " + event.data);
}

channel.port1.postMessage('hello');
```

Messages can be sent and received without the repeated origin checking that is needed when using `window.postMessage`. Validation of the origin of a port and messages need only be done when a port is sent to windows other than the one that created them. The array of ports is sent in the ports property of the event. A port can be used once and closed, or it can be saved locally and used repeatedly, as necessary.

Channel messaging is used to coordinate lighting effects between worker threads in the [Web Worker Fountains demo](https://testdrive-archive.azurewebsites.net/Graphics/WorkerFountains/Default.html). For a full messaging demo, see the [MessageChannel](http://go.microsoft.com/fwlink/p/?LinkID=233104) object reference page.



## API Reference

[HTML5 Web Messaging](https://msdn.microsoft.com/library/hh781494.aspx)

## Specification

[HTML5 Web Messaging](https://www.w3.org/TR/webmessaging/#channel-messaging)

