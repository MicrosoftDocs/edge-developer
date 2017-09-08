---
description: Get to know the Microsoft Edge F12 Developer Tools
title: F12 Developer Tools
author: erikadoyle
ms.author: edoyle
ms.date: 09/01/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, f12 developer tools
---

# Microsoft Edge F12 Developer Tools

> [!TIP]
> **[Test on Microsoft Edge free from any browser](https://developer.microsoft.com/en-us/microsoft-edge/tools/remote/)**:
> We partnered with BrowserStack to provide free live and automated testing on Microsoft Edge.

Browser tooling has come a long way since the days of Internet Explorer! The F12 Developer Tools in Microsoft Edge are built with [TypeScript](http://www.typescriptlang.org/), powered by [Visual Studio](https://www.visualstudio.com/), and optimized for modern front-end workflows. 

Please send us your feedback as you use the tools so we can continue improving them for you. Just click this button:

![Button for sending feedback on F12 Tools](./f12-devtools-guide/media/send_feedback.png)

You can also add and upvote tooling requests to our [UserVoice forum](https://wpdev.uservoice.com/forums/257854-microsoft-edge-developer/category/84475-f12-developer-tools) and become a [Windows Insider](https://insider.windows.com/en-us/) to preview the [latest features coming to F12 Tools](./f12-devtools-guide/whats-new.md).

The F12 Developer Tools include:

 - An [Elements](./f12-devtools-guide/dom-explorer.md) panel to edit HTML and CSS, inspect accessibility properties, view event listeners, and set DOM mutation breakpoints
 - A [Console](./f12-devtools-guide/console.md) to view and filter log messages, inspect JavaScript objects and DOM nodes, and run JavaScript in the context of the selected window or frame
 - A [Debugger](./f12-devtools-guide/debugger.md) to step through code, set watches and breakpoints, live edit your code, and inspect your web storage, cookies, and service worker caches
 - A [Network](./f12-devtools-guide/network.md) panel to monitor and inspect requests and responses from the network and browser cache 
 - A [Performance](./f12-devtools-guide/performance.md) panel to profile the time and system resources required by your site
 - A [Memory](./f12-devtools-guide/memory.md) panel to meassure your use of memory resources and compare heap snapshots at different states of code execution
 - An [Emulation](./f12-devtools-guide/emulation.md) panel to test your site with different browser profiles, screen resolutions, and GPS location coordinates

## General Shortcuts

These shortcuts either control the F12 tools window or work across all tools.

Action | Shortcut
:------------ | :-------------
Launch F12 developer tools | Ctrl+Shift+I, Ctrl+Shift+J
Show/hide Console at the bottom of any other tool  | Ctrl+**`**
Switch to DOM Explorer | Ctrl+1
Switch to Console |  Ctrl+2
Switch to Debugger | Ctrl+3
Switch to Network | Ctrl+4
Switch to Performance | Ctrl+5
Switch to Memory | Ctrl+6
Switch to Emulation | Ctrl+7
Switch to Experiments | Ctrl+8
Help Document | F1
Bring application to foreground | F12
Show/Hide F12 | F12
Next tool | Ctrl+F6
Previous tool | Ctrl+Shift+F6
Previous tool (from history) | Ctrl+Shift+[
Next tool (from history) | Ctrl+Shift+]
Next Subframe 	  | F6
Previous Subframe | Shift+F6
Next match in Search box | F3
Previous match in Search box | Shift+F3
Find in search box | Ctrl+F
Give focus to console at the bottom | Alt+Shift+I
Dock/undock tools (toggle docking) | Ctrl+P  
Launch Console | Ctrl+Shift+J
Refresh the page. **Note:** if you're debugging and paused at a breakpoint, this resumes execution first. | Ctrl+Shift+F5 or Ctrl+R
