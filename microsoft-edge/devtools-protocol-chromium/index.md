---
description: Update to the Microsoft Edge DevTools Protocol
title: Microsoft Edge DevTools Protocol overview
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/06/2021
ms.topic: reference
ms.prod: microsoft-edge
---
# Microsoft Edge DevTools Protocol overview

Use the DevTools Protocol to instrument, inspect, debug, and profile browsers including Microsoft Edge.  The Microsoft Edge DevTools Protocol matches the APIs of the Chrome DevTools Protocol.  For reference documentation, navigate to [Chrome DevTools Protocol Viewer](https://chromedevtools.github.io/devtools-protocol/tot).

> [!NOTE]
> With the shift in the underlying web platform of Microsoft Edge to Chromium, the [Microsoft Edge (EdgeHTML) DevTools Protocol](/archive/microsoft-edge/legacy/developer/devtools-protocol/index) will not be receiving any further updates.  The Microsoft Edge DevTools Protocol will match the APIs of the Chrome DevTools Protocol going forward.
>
> Any methods that were prefixed with `ms` in the [Microsoft Edge (EdgeHTML) DevTools Protocol](/archive/microsoft-edge/legacy/developer/devtools-protocol/index) are no longer supported in the Microsoft Edge DevTools Protocol.


<!-- ====================================================================== -->
## Using the DevTools Protocol

To attach a custom tooling client to the DevTools Server in Microsoft Edge:

1.  Close all instances of Microsoft Edge.

1.  Launch Microsoft Edge with the remote debugging port.

    ```shell
    msedge.exe --remote-debugging-port=9222
    ```

1.  Optionally, you can start a separate instance of Microsoft Edge using a distinct user profile.

    ```shell
    msedge.exe --user-data-dir=<some directory>
    ```

1.  Next, use the HTTP `list` endpoint to get a list of attachable page targets.

    ```http
    http://localhost:9222/json/list
    ```

1.  Finally, connect to the `webSocketDebuggerUrl` of the desired target and issue commands/subscribe to event messages through the DevTools web socket server.


<!-- ====================================================================== -->
## DevTools Protocol HTTP endpoints

The Microsoft Edge DevTools Protocol supports the following HTTP endpoints.


<!-- ====================================================================== -->
## /json/version

Provides information on the browser of the host machine and which version of the DevTools Protocol it supports.

**Parameters**

**None**

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


<!-- ====================================================================== -->
## /json/protocol

Provides the entire protocol API surface serialized as JSON.

**Parameters**

**None**

**Return object**

JSON object which represents the available API surface for current version of the protocol.


<!-- ====================================================================== -->
## /json/list

Provides a candidate list of page targets for debugging.

**Parameters**

**None**

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
}, ...  ]
```


<!-- ====================================================================== -->
## /json/close

Closes down the target process.  For example, in Microsoft Edge, closes the page tab.

**Parameters**

Target ID

**Return object**

```
String(“Target is closing”)
```


<!-- ====================================================================== -->
## Remote Tools for Microsoft Edge (Beta)

You are now able to install the [Remote Tools for Microsoft Edge (Beta)](https://www.microsoft.com/store/apps/9P6CMFV44ZLT) from the [Microsoft Store](https://www.microsoft.com/store/apps/windows).  This app enables you to remotely debug Microsoft Edge running on a Windows 10 or later device from your development machine.

To learn how to set up your Windows device and connect to it from your development machine, navigate to [Get started with remote debugging Windows devices](../devtools-guide-chromium/remote-debugging/windows.md).

The [Remote Tools for Microsoft Edge (Beta)](https://www.microsoft.com/store/apps/9P6CMFV44ZLT) uses the same Microsoft Edge DevTools Protocol as the [DevTools](../devtools-guide-chromium/index.md) to communicate with Microsoft Edge running on the Windows 10 or later device you want to debug.  This app just prepends `/msedge/` and a process ID (`pid`) before each call to the protocol.  It supports the following HTTP endpoints.

The following Reference sections are for Remote Tools for Microsoft Edge.


<!-- ====================================================================== -->
## /msedge/json/list

Provides a candidate list of all `msedge.exe` processes (including [PWAs](../progressive-web-apps-chromium/index.md) and all tabs in all instances of Microsoft Edge) on the Windows 10 or later device for debugging.

**Parameters**

**None**

**Return object**

```json
[{
   "description": "",
    "devtoolsFrontendUrl": "http://172.17.75.195:80/msedge/7264/devtools/inspector.html?ws=172.17.75.195:80/msedge/7264/devtools/page/ED4FFDB4529723A0FAFCBDB9B45851BB",
    "faviconUrl": "https://docs.microsoft.com/favicon.ico",
    "id": "ED4FFDB4529723A0FAFCBDB9B45851BB",
    "title": "Get Started with Remote Debugging Windows Devices - Microsoft Edge Development | Microsoft Docs",
    "type": "page",
    "url": "https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/remote-debugging/windows",
    "webSocketDebuggerUrl": "ws://172.17.75.195:80/msedge/7264/devtools/page/ED4FFDB4529723A0FAFCBDB9B45851BB",
    "browserProcessId": 7264
}, ...  ]
```


<!-- ====================================================================== -->
## /msedge/

Functionally equivalent to [/msedge/json/list](#msedgejsonlist).


<!-- ====================================================================== -->
## /msedge/[pid]/json/list

Provides a candidate list of page targets for the Microsoft Edge instance that matches the provided `[pid]` for debugging.

**Parameters**

**None**

**Return object**

```json
[{
    "description": "",
    "devtoolsFrontendUrl": "http://172.17.75.195:80/msedge/7264/devtools/inspector.html?ws=172.17.75.195:80/msedge/7264/devtools/page/ED4FFDB4529723A0FAFCBDB9B45851BB",
    "faviconUrl": "https://docs.microsoft.com/favicon.ico",
    "id": "ED4FFDB4529723A0FAFCBDB9B45851BB",
    "title": "Get Started with Remote Debugging Windows Devices - Microsoft Edge Development | Microsoft Docs",
    "type": "page",
    "url": "https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/remote-debugging/windows",
    "webSocketDebuggerUrl": "ws://172.17.75.195:80/msedge/7264/devtools/page/ED4FFDB4529723A0FAFCBDB9B45851BB"
}, ...  ]
```


<!-- ====================================================================== -->
## /msedge/[pid]/json/version

Provides information about the Microsoft Edge instance that matches the provided `[pid]` and which version of the DevTools Protocol it supports.

**Parameters**

**None**

**Return object**

```json
{
    "Browser": "Edg/82.0.452.0",
    "Protocol-Version": "1.3",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/82.0.4080.0 Safari/537.36 Edg/82.0.452.0",
    "V8-Version": "8.2.263",
    "WebKit-Version": "537.36 (@fe0232051787ca94ac8edfc0084c3488b7d9bdb2)",
    "webSocketDebuggerUrl": "172.17.75.195:80/msedge/7264/devtools/browser/7a67c8c4-138b-48e3-bfe0-cb7af34d559a"
}
```


<!-- ====================================================================== -->
## /msedge/[pid]/json/protocol/

Provides the entire protocol API surface serialized as JSON for the Microsoft Edge instance that matches the provided `[pid]`.

**Parameters**

**None**

**Return object**

JSON object which represents the available API surface for the version of the protocol that the Microsoft Edge instance that matches the provided `[pid]` is using.


<!-- ====================================================================== -->
## See also

*  [Use the Chrome DevTools Protocol in WebView2](../webview2/how-to/chromium-devtools-protocol.md)
