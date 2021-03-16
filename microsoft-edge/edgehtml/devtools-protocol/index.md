---
description: Use the Microsoft Edge DevTools Protocol to inspect and debug the Microsoft Edge (EdgeHTML) browser.
title: Microsoft Edge DevTools Protocol
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: reference
ms.prod: microsoft-edge
ms.date: 03/16/2021
ROBOTS: NOINDEX,NOFOLLOW
---
# Microsoft Edge (EdgeHTML) DevTools Protocol

> [!NOTE]
> The Microsoft Edge (EdgeHTML) DevTools Protocol works only on [Windows 10 April 2018 Update](https://blogs.windows.com/windowsexperience/2018/04/30/how-to-get-the-windows-10-april-2018-update/#5VXkQMU41CJzZPER.97) and later builds.

Developer tools can use the **Microsoft Edge (EdgeHTML) DevTools Protocol** to inspect and debug the Microsoft Edge (EdgeHTML) browser. It provides a set of methods and events that are organized into different [Domains](0.2/domains/index.md) of EdgeHTML engine instrumentation.

 Tooling clients can call these methods and monitor these events through JSON web socket messages exchanged with the *DevTools Server* hosted by Microsoft Edge (EdgeHTML) or the Windows Device Portal. Microsoft Edge (EdgeHTML) DevTools uses this protocol to enable [remote debugging](0.2/clients.md#microsoft-edge-devtools-preview) of a host machine running Microsoft Edge (EdgeHTML) from the standalone DevTools client available from the [Microsoft Store](https://www.microsoft.com/store/p/microsoft-edge-devtools-preview/9mzbfrmz0mnj).

The Microsoft Edge (EdgeHTML) DevTools Protocol is designed to align closely with the Chrome DevTools Protocol (see the [W3C WICG for DevTools Protocols](https://github.com/WICG/devtools-protocol/)), though there are known interoperability gaps in this release.

## Using the protocol

Here's how to attach a custom tooling client to the DevTools Server in Microsoft Edge (EdgeHTML). See the [remote debugging](0.2/clients.md#microsoft-edge-devtools-preview) instructions if you're using Microsoft Edge DevTools as your client.

1. Launch Microsoft Edge (EdgeHTML) with the remote debugging port open, specifying the URL you wish to open. For example:

    ```shell
    MicrosoftEdge.exe --devtools-server-port 9222 https://www.bing.com
    ```

    If Edge is already launched, the URL parameter is optional. A button will appear next to the browser address bar to indicate the **Developer tools server** has started:

    ![Developer tools server](media/developer-tools-server.png) 

2. Use this [HTTP endpoint](0.2/http.md) to get a list of attachable page targets:

    ```http
    http://localhost:9222/json/list
    ```

3. Connect to the listed `webSocketDebuggerUrl` of the desired page to issue further [protocol commands](0.2/domains/index.md) and receive event messages through the devtools socket server.

## Status and feedback

[Version 0.2](0.2/index.md) of the DevTools Protocol provides new domains for style and layout (read-only) debugging and console APIs, in addition to the core script debugging functionality introduced in [Version 0.1](0.1/index.md). In the Microsoft Edge DevTools UI, this translates to functionality available in the [**Elements**](../devtools-guide/elements.md), [**Console**](../devtools-guide/console.md) and [**Debugger**](../devtools-guide/debugger.md) panels.

Thanks for trying the Edge DevTools Protocol! We'd love to hear your feedback at:

<!-- - [**Microsoft Edge Developer UserVoice**](https://wpdev.uservoice.com/forums/257854-microsoft-edge-developer?category_id=84475): DevTools feature ideas and requests-->  

 - [**EdgeHTML Issue Tracker**](https://developer.microsoft.com/microsoft-edge/platform/issues/): Protocol, DevTools, and EdgeHTML platform bugs and issues

 - [**Microsoft Edge DevTools Feedback Hub**](feedback-hub:?referrer=microsoftEdge&tabID=2&newFeedback=true&ContextId=344): Protocol and DevTools problems and suggestions through the Feedback Hub app

## FAQ

#### Can multiple clients connect to the same DevTools Server?
No, not simultaneously when the clients are debugging. The last client to connect will kick off the previous one. In the future when additional tools are supported, those will likely support simultaneous client connections.

#### Do I have to use 9222 as the DevTools Server port?
No. You can specify any port, though be sure to pick one that isn't already in use. Port 9222 for remote debugging is used by convention.

#### How do I connect my custom tooling client to Microsoft Edge (EdgeHTML) running the DevTools Server?
See [*Using the protocol*](#using-the-protocol) instructions above for attaching to Microsoft Edge (EdgeHTML) running on the local machine. If you're looking to support remote debugging, you'll need to devise a user workflow for installing the host machine's SSL certificate on the client, for example with an install dialog as [Microsoft Edge DevTools Preview](./0.2/clients.md#microsoft-edge-devtools-preview) uses.

#### If I'm remote debugging using Edge DevTools, do I need to start the host browser process with *--devtools-server-port* cmd line switch? 
No. If you're setting up [remote debugging using Microsoft Edge DevTools Preview](./0.2/clients.md#microsoft-edge-devtools-preview), the `--devtools-server-port` command line switch is not necessary for starting Edge. In this case, Windows *Device Portal* is hosting the DevTools Server on behalf of the browser.

#### Can I use the Edge DevTools Protocol to remotely debug a WWAHost.exe or webview process?
The Edge DevTools Protocol currently supports only browser tabs. WWAHost.exe and webview processes are not supported.
