---
description: See what's new in the Microsoft Edge DevTools
title: What's new in the Microsoft Edge DevTools
author: erikadoyle
ms.author: edoyle
ms.date: 
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---

# DevTools in the latest Windows 10 update (EdgeHTML 17)

The **Microsoft Edge DevTools** are now available as a standalone Windows 10 app from the Microsoft Store! With the store version comes a *chooser* panel for attaching to local and remote page targets and a tabbed layout for easy switching between DevTools instances.

The Edge DevTools are also still available (`F12`) from within the browser.

This release of the DevTools ships with a number of major features, including basic support for [remote debugging](#remote-debugging) (via our new [DevTools Protocol](#devtools-protocol)), [PWA debugging features](#pwa-debugging), [IndexedDB cache management](#indexeddb-cache-management), [vertical docking](#vertical-window-docking) and more! We also continued the overall [refactoring effort](./whats-new/edgehtml-16.md) started last release as part of ongoing investments in performance and reliability.

Here are the latest Microsoft Edge DevTools features coming with the next [Windows 10 update]() and available now on [Windows Insider Preview](https://insider.windows.com/) builds.

## Standalone Windows 10 app

You can now run the 

![Microsoft Edge DevTools app](../devtools-protocol/media/microsoft-edge-devtools.png)

- Microsoft Store
- In-browser tooling (eventually go away?)
- Remote debugging scenarios
- Roadmap (known issues)
TODO: Update landing page w/how to get guidance

## Remote debugging
- debug any windows device running edge (PWA!)
[Remote debugging](../devtools-protocol/0.1/clients.md#microsoft-edge-devtools-preview)

## DevTools Protocol
- Remote debugging
- 3rd party tool developers
- Parity w/Chrome
[Microsoft Edge DevTools Protocol](../devtools-protocol/index.md)
[Launch and debug Edge from F5 in Visual Studio](../devtools-protocol/0.1/clients.md#microsoft-visual-studio-preview)

## PWA debugging
- Launch from PWA
- On by default
- SW: attach to debug (inspect), force update, simulate push
- Cache API updates
- IndexedDB

TODO: Update PWA debugging page for RS4

## IndexedDB cache management

TODO: New doc (debugger/indexeddb.md) w/screenshots. Can use this demo: https://developer.microsoft.com/en-us/microsoft-edge/testdrive/demos/audiomixer/

For more, see [Indexed DB Manager](./debugger/indexed-db.md)

## Vertical window docking
- Keyboard shortcuts

TODO: Update landing page w/details + shortcuts