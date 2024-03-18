---
title: Microsoft Edge DevTools Protocol
description: Use the DevTools Protocol to instrument, inspect, debug, and profile browsers including Microsoft Edge.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.date: 04/06/2021
---
# Microsoft Edge DevTools Protocol

Use the DevTools Protocol to instrument, inspect, debug, and profile browsers including Microsoft Edge.  The Microsoft Edge DevTools Protocol matches the APIs of the Chrome DevTools Protocol.  For reference documentation, go to [Chrome DevTools Protocol Viewer](https://chromedevtools.github.io/devtools-protocol/tot).

> [!NOTE]
> With the shift in the underlying web platform of Microsoft Edge to Chromium, the [Microsoft Edge (EdgeHTML) DevTools Protocol](/archive/microsoft-edge/legacy/developer/devtools-protocol/index) won't be receiving any further updates.  Going forward, the Microsoft Edge DevTools Protocol will match the APIs of the Chrome DevTools Protocol.
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

None.

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

None.

**Return object**

JSON object which represents the available API surface for current version of the protocol.


<!-- ====================================================================== -->
## /json/list

Provides a candidate list of page targets for debugging.

**Parameters**

None.

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
String("Target is closing")
```


<!-- ====================================================================== -->
## Remote Tools for Microsoft Edge (Beta)

You can install the [Remote Tools for Microsoft Edge (Beta)](https://www.microsoft.com/store/apps/9P6CMFV44ZLT) from the [Microsoft Store](https://www.microsoft.com/store/apps/windows).  This app enables you to remotely debug Microsoft Edge running on a Windows 10 or later device from your development machine.

To learn how to set up your Windows device and connect to it from your development machine, see [Get started with remote debugging Windows devices](../devtools-guide-chromium/remote-debugging/windows.md).

The [Remote Tools for Microsoft Edge (Beta)](https://www.microsoft.com/store/apps/9P6CMFV44ZLT) uses the same Microsoft Edge DevTools Protocol as [DevTools](../devtools-guide-chromium/overview.md) to communicate with Microsoft Edge running on the Windows 10 or later device you want to debug.  This app just prepends `/msedge/` and a process ID (`pid`) before each call to the protocol.  It supports the following HTTP endpoints.

The following Reference sections are for Remote Tools for Microsoft Edge.


<!-- ====================================================================== -->

## /msedge/json/deviceinfo

Provides information about the Windows PC or HoloLens 2 device connected for remote debugging.

**Parameters**

None.

**Return object**

```json
{
  "deviceName": "WINDOWS-10-DEV"
}
```

<!-- ====================================================================== -->
## /msedge/json/list

Provides a candidate list of all Microsoft Edge and WebView2 Runtime processes running on the connected device (including [PWAs](../progressive-web-apps-chromium/index.md)) and all tabs or targets in each process available for debugging.

**Parameters**

None.

**Return object**

```json
[
  {
    "version": {
      "Browser": "Edg/110.0.1548.0",
      "Protocol-Version": "1.3",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1548.0",
      "V8-Version": "11.0.6",
      "WebKit-Version": "537.36 (@d6d5aea402510697e05382293a4c6d3da0183736)",
      "webSocketDebuggerUrl": "wss://172.17.75.195:50443/msedge/23416/devtools/browser/f02cc852-644a-48ce-932b-481aa43d8121"
    },
    "info": {
      "browserProcessId": 23416
    },
    "targets": [
      {
        "description": "",
        "devtoolsFrontendUrl": "https://devtools.azureedge.net/serve_file/@d6d5aea402510697e05382293a4c6d3da0183736/inspector.html?wss=172.17.75.195:50443/msedge/23416/devtools/page/2AE2506D9FDB1C541FB36DD908ED51DE",
        "faviconUrl": "https://learn.microsoft.com/favicon.ico",
        "id": "2AE2506D9FDB1C541FB36DD908ED51DE",
        "title": "Remotely debug Windows devices - Microsoft Edge Developer documentation | Microsoft Learn",
        "type": "page",
        "url": "https://learn.microsoft.com/microsoft-edge/devtools-guide-chromium/remote-debugging/windows",
        "webSocketDebuggerUrl": "wss://172.17.75.195:50443/msedge/23416/devtools/page/2AE2506D9FDB1C541FB36DD908ED51DE"
      },
      ...
    ]
  },
  ...
]
```


<!-- ====================================================================== -->
## /msedge/

Functionally equivalent to [/msedge/json/list](#msedgejsonlist).


<!-- ====================================================================== -->
## /msedge/[pid]/json/list

Provides a candidate list of page targets for the Microsoft Edge instance that matches the provided `[pid]` for debugging.

**Parameters**

None.

**Return object**

```json
[
  {
    "description": "",
    "devtoolsFrontendUrl": "/msedge/23416/devtools/inspector.html?wss=localhost:50443/msedge/23416/devtools/page/2AE2506D9FDB1C541FB36DD908ED51DE",
    "faviconUrl": "https://learn.microsoft.com/favicon.ico",
    "id": "2AE2506D9FDB1C541FB36DD908ED51DE",
    "title": "Remotely debug Windows devices - Microsoft Edge Developer documentation | Microsoft Learn",
    "type": "page",
    "url": "https://learn.microsoft.com/microsoft-edge/devtools-guide-chromium/remote-debugging/windows",
    "webSocketDebuggerUrl": "wss://localhost:50443/msedge/23416/devtools/page/2AE2506D9FDB1C541FB36DD908ED51DE"
  },
  ...
]
```


<!-- ====================================================================== -->
## /msedge/[pid]/json/version

Provides information about the Microsoft Edge instance that matches the provided `[pid]` and which version of the DevTools Protocol it supports.

**Parameters**

None.

**Return object**

```json
{
  "Browser": "Edg/110.0.1548.0",
  "Protocol-Version": "1.3",
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1548.0",
  "V8-Version": "11.0.6",
  "WebKit-Version": "537.36 (@d6d5aea402510697e05382293a4c6d3da0183736)",
  "webSocketDebuggerUrl": "wss://localhost:50443/msedge/23416/devtools/browser/f02cc852-644a-48ce-932b-481aa43d8121"
}
```


<!-- ====================================================================== -->
## /msedge/[pid]/json/protocol/

Provides the entire protocol API surface serialized as JSON for the Microsoft Edge instance that matches the provided `[pid]`.

**Parameters**

None.

**Return object**

JSON object which represents the available API surface for the version of the protocol that the Microsoft Edge instance that matches the provided `[pid]` is using.


<!-- ====================================================================== -->
## See also

* [Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/)
* [Chrome DevTools Protocol (CDP)](../webview2/concepts/overview-features-apis.md#chrome-devtools-protocol-cdp) in _Overview of WebView2 features and APIs_
* [Use the Chrome DevTools Protocol (CDP) in WebView2 apps](../webview2/how-to/chromium-devtools-protocol.md)
