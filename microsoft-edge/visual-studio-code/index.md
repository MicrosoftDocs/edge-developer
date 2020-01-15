---
description: Microsoft Edge (Chromium) and Visual Studio Code
title: Visual Studio Code
author: zoherghadyali
ms.author: zoghadya
ms.date: 03/12/2019
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, vs code, visual studio code, debugger
---

# Visual Studio Code

[Visual Studio Code](https://code.visualstudio.com/Docs) is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js so it's a great tool for web developers right out of the box! Head to [this page](https://code.visualstudio.com/) to download Visual Studio Code if you aren't using it yet.

## Extensions

<!-- We want to put something like the tiles for extensions VS Code uses on this page https://code.visualstudio.com/Docs#top-extensions but I don't think this is a markdown page. I think it's a web page. I couldn't find anything in https://github.com/Microsoft/vscode-docs that looks like this page. In the meantime, here's what I've come up with: -->

To acquire any of the extensions highlighted below, navigate to Extensions (`Ctrl` + `Shift` + `X` on Windows or `Command` + `Shift` + `X` on Mac) in VS Code.

Search the Marketplace for the specific extension and select **Install**.

![Installing the Debugger for Microsoft Edge VS Code extension](./media/vscode-debugger-install.png)

## Debugger for Microsoft Edge

With the [Debugger for Microsoft Edge](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-edge) VS Code extension, you can debug your front-end JavaScript code line by line and see `console.log()` statements all directly from [Visual Studio Code](https://code.visualstudio.com/)!

This extensions gives you the ability to launch or attach to both Microsoft Edge (EdgeHTML) and Microsoft Edge (Chromium). Check out [this page](./debugger-for-edge.md) for a walkthrough of debugging Microsoft Edge from VS Code and sample **launch.json** configurations.

![GIF of the Debugger for Edge VS Code extension in action!](./media/debugger-for-edge.gif)

## Elements for Microsoft Edge

By adding the [Elements for Microsoft Edge](https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools) VS Code extension, you can use the browser's Elements tool from within Visual Studio Code. By either launching or attaching, the Elements tool will connect to an instance of Microsoft Edge, display the runtime HTML structure, and allow you to alter the layout or fix styling issues.

For more information, check out [this page](./elements-for-edge.md).

![GIF of the Elements for Edge VS Code extension in action!](./media/elements-for-edge.gif)
