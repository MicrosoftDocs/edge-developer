---
description: Update to the Microsoft Edge DevTools Protocol
title: Microsoft Edge DevTools Protocol Update
author: zoherghadyali
ms.author: zoghadya
ms.date: 03/10/2019
ms.topic: reference
ms.prod: microsoft-edge
---

# Microsoft Edge (Chromium) DevTools Protocol

With the shift in the underlying web platform of Microsoft Edge to Chromium, the Edge (EdgeHTML) DevTools Protocol will not be receiving any further updates. The  Edge (Chromium) DevTools Protocol will match the APIs of the Chrome DevTools Protocol going forward. 

You can find documentation on those domains and methods by referring to the [Chrome DevTools Protocol Viewer](https://chromedevtools.github.io/devtools-protocol/tot/).

> [!NOTE]
> Any methods that were prefixed with `ms` in the Edge (EdgeHTML) DevTools Protocol are no longer supported in the Edge (Chromium) DevTools Protocol.

## Using the DevTools Protocol

Here's how to attach a custom tooling client to the DevTools Server in Microsoft Edge (Chromium).

1. Ensure all instances of Microsoft Edge (Chromium) are closed.

2. Launch Microsoft Edge (Chromium) with the remote debugging port:

    ```
    msedge.exe --remote-debugging-port=9222
    ```

3. Optionally, you can start a separate instance of Edge using a distinct user profile if desired:

    ```
    msedge.exe --user-data-dir=<some directory>
    ```

4. Next, use the HTTP `list` endpoint to get a list of attachable page targets:

    ```
    http://localhost:9222/json/list
    ```

5. Finally, connect to the `webSocketDebuggerUrl` of the desired target and issue commands/subscribe to event messages through the DevTools web socket server.

## DevTools Protocol HTTP Endpoints

The Edge (Chromium) DevTools Protocol supports the following HTTP endpoints.

## /json/version
Provides information on the host machine's browser and which version of the DevTools Protocol it supports.

**Parameters**

*None*

**Return object**

```json
{
   "Browser": "Edg/75.0.115.0",
   "Protocol-Version": "1.3",
   "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3739.0 Safari/537.36 Edg/75.0.115.0",
   "V8-Version": "7.5.98",
   "WebKit-Version": "537.36 (@68a98f73c7d0f766fb5a013ea7f8dbb41089bc1b)",
   "webSocketDebuggerUrl": "ws://localhost:9222/devtools/browser/a9d0e8cf-476a-4a89-bba9-0fc27ce691cd"
}
```

## /json/protocol

Provides the entire protocol API surface serialized as JSON.

**Parameters**

*None*

**Return object**

JSON object which represents the available API surface for current version of the protocol.

## /json/list

Provides a candidate list of page targets for debugging.

**Parameters**

*None*

**Return object**

```json
[{
   "description": "",
   "devtoolsFrontendUrl": "/devtools/inspector.html?ws=localhost:9222/devtools/page/AB07C11A262D1EC8634EB12E2DCA4989",
   "id": "AB07C11A262D1EC8634EB12E2DCA4989",
   "title": "localhost:9222/json/protocol",
   "type": "page",
   "url": "http://localhost:9222/json/list",
   "webSocketDebuggerUrl": "ws://localhost:9222/devtools/page/AB07C11A262D1EC8634EB12E2DCA4989"
}, … ]
```

## /json/close

Closes down the target process (e.g., in Microsoft Edge (Chromium), closes the page tab.)

**Parameters**

Target ID 

**Return object**

```
String(“Target is closing”)
```