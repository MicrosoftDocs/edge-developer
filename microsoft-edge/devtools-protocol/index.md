---
description: Use the Microsoft Edge DevTools Protocol to inspect and debug the Microsoft Edge browser and other hosts of EdgeHTML.
title: Microsoft Edge DevTools Protocol
author: erikadoyle
ms.author: edoyle
ms.date: 3/21/2018
ms.topic: reference
ms.prod: microsoft-edge
---

# Microsoft Edge DevTools Protocol

Developer tools can use the **Microsoft Edge DevTools Protocol** to inspect and debug the Microsoft Edge browser and other hosts of the EdgeHTML engine, such as Progressive Web Apps (PWAs that run in the *WWAHost.exe* process) and the Universal Windows Platform webview control. It provides a set of methods and events that are organized into different [Domains](0.1/domains/index.md) of EdgeHTML engine instrumentation.

 You can call these methods and monitor these events through raw JSON messages passed across a web socket connection between a remote (debuggee) and host (debugger) process. Microsoft Edge DevTools uses this protocol to enable [remote debugging](0.1/clients.md#microsoft-edge-devtools) of a host machine running Microsoft Edge from the standalone DevTools client available from the [Microsoft Store]().

The Microsoft Edge DevTools Protocol is designed to be interoperable with the [Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/). 

## Using the protocol

Here's how to attach a custom tooling client to a running instance of Microsoft Edge. See the [remote debugging](0.1/clients.md#microsoft-edge-devtools) instructions if you're using Microsoft Edge DevTools as your client.

1. Launch Microsoft Edge with the remote debugging port open, specifying the URL you wish to open. For example:

    ```
    MicrosoftEdge.exe --devtools-server-port 9222 https://www.bing.com
    ```

    If Edge is already launched, the URL parameter is optional. A  button will appear next to the browser address bar to indicate  the **Developer tools server** has started:

    ![Developer tools server](media/developer-tools-server.png) 

2. Use this [HTTP endpoint](0.1/http.md) to get a list of attachable page targets:

    ```
    http://localhost:9222/json/list
    ```

3. Connect to the listed `webSocketDebuggerUrl` of the desired page to issue further [protocol commands](0.1/index.md) and receive event messages through the devtools socket server.

## Status and feedback

The preliminary release ([Version 0.1](0.1/index.md)) of the Microsoft Edge DevTools Protocol provides core debugging functionality, such as setting breakpoints, stepping through code, and exploring stack traces. In the Edge DevTools UI, this translates to functionality available in the [**Debugger**](../devtools-guide/debugger.md) panel, minus cache inspection (for Web storage, Service worker, Cache API, and IndexedDB).

Further platform instrumentation will be available in future releases of the protocol.

Thanks for trying the Edge DevTools Protocol! We'd love to hear your feedback at:

 - [**Microsoft Edge Developer UserVoice**](https://wpdev.uservoice.com/forums/257854-microsoft-edge-developer?category_id=84475): DevTools feature ideas and requests

 - [**EdgeHTML Issue Tracker**](https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/): Protocol, DevTools, and EdgeHTML platform bugs and issues

## FAQ

#### Can multiple clients connect to the same Edge host process?

#### Do I have to use 9222 as the devtools server port?

#### How do I connect my custom tooling client to a remote instance of Microsoft Edge? 

#### Is remote debugging on by default when Device Portal is enabled?

#### How do I open the remote debugging port for a WWAHost.exe or webview control process? 