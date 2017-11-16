---
description: Use the Service Workers and Cache managers to debug your PWA
title: Microsoft Edge F12 DevTools - Debugger - Progressive Web Apps
author: erikadoyle
ms.author: edoyle
ms.date: 10/10/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, debugger, debugging, pwa, service worker, cache api
---

# Progressive Web App debugging

Test out the experimental support for Progressive Web Apps (PWAs) in Microsoft Edge and F12 DevTools by selecting the **Enable service workers** option from `about:flags` (and restarting Microsoft Edge).

 If a site makes use of **Service Workers** and/or the **Cache** API, F12 DevTools will populate entries in the **Debugger** panel for each origin, similar to how [web storage](./web-storage.md) and [cookies](./cookies.md) inspection work:

![F12 DevTools Service Workers and Cache managers](../media/debugger_sw_and_cache.png)

## Service Workers manager

Clicking on a specific service worker entry will open up the **Service Worker Overview**, where you can force **Update** and manage the service worker registration (**Unregister**) for the given scope and send a test **Push** notification. You can also **Stop**/**Start** individual service workers and **Inspect** them from a separate debugger window:

![Service Worker Overview pane](../media/debugger_sw_overview.png)

Please note the following about service worker debugging:

 - Debugging a service worker will launch a new instance of the F12 DevTools separate from the page's tools because service workers can be shared across multiple tabs. 
 - The [**Elements**](../elements.md) and [**Emulation**](../emulation.md) panels are absent from the service worker debugger, given that service workers run in the background and do not directly control the front-end of your app.
 - Currently network traffic for a service worker is only reported from the F12 DevTools debugging instance for that worker, and not from the central instance for the page itself.

![Service Worker debugging instance](../media/debugger_sw_inspect.png)

## Cache manager

Clicking on a specific cache entry will open up the **Cache** manager, where you can inspect and optionally delete cache entries (*Request* and *Response* key/value pairs):

![Cache manager](../media/debugger_cache.png)

## Shortcuts

### Cache manager
Action | Shortcut
:------------ | :-------------
Refresh | `Ctrl` + `F5`
Delete item | `Del`
Copy selected items | `Ctrl` + `C`
Select all | `Ctrl` + `A`