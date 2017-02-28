---
ms.assetid: e2cd0477-7d97-43a4-a10e-68c0ca8627e6
description: Find information on current progress towards completing the Microsoft Edge extension API.
title: Extensions - Extension API roadmap
author: abbycar
ms.author: abigailc
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Microsoft Edge extension API roadmap

In addition to web APIs, the extension API allows extensions to achieve deeper integration with the browser host. This API gives developers access to Microsoft Edge’s browser features such as tab and window manipulation. The two tables on this page detail what is suported/in development for Windows 10 Insider Preview and publicly released builds of Microsoft Edge.

Not seeing an API your extension needs? We're always listening on [UserVoice](https://wpdev.uservoice.com/forums/257854-microsoft-edge-developer/category/87962-extensions). Feel free to upvote your API if it already exists, or to create a new feedback item so that other developers can upvote it too!

> [!NOTE]
> This page was last updated February 23rd, 2017.


## Windows 10 Insider Preview builds
The following new APIs and features are available/in development for [Windows 10 Insider Preview](https://insider.windows.com/) builds:

| API/Feature        | Status — Build Number
|---------------|--------------|
[bookmarks.create](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/create) | Supported — Microsoft Edge (38) / Windows 10 (15002)
[bookmarks.remove](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/remove) | Supported — Microsoft Edge (38) / Windows 10 (15002)
[bookmarks.getTree](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/getTree) | Supported — Microsoft Edge (38) / Windows 10 (15002)
[bookmarks.move](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/move) | Supported — Microsoft Edge (38) / Windows 10 (15002)
[bookmarks.remove](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/remove) | Supported — Microsoft Edge (38) / Windows 10 (15002)
[bookmarks.removeTree](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/remove) | Supported — Microsoft Edge (38) / Windows 10 (15002)
[bookmarks.update](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/update) | Supported — Microsoft Edge (38) / Windows 10 (15002)
[browserAction.setTitle](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserAction/setTitle) | Supported — Microsoft Edge (38) / Windows 10 (14926)
Custom CSP | Supported — Microsoft Edge (38) / Windows 10 (15002)
Popup debugging | Supported — Microsoft Edge (38) / Windows 10 (14971)
[port.disconnect](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/runtime/Port#Type) |In Development
[port.onDisconnect](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/runtime/Port#Type) |In Development
[port.postMessage](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/runtime/Port#Type) | Supported — Microsoft Edge (38) / Windows 10 (15002)
[runtime.connectNative](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/connectNative) | Supported — Microsoft Edge (38) / Windows 10 (15002)
[runtime.sendMessage](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage) | Supported — Microsoft Edge (38) / Windows 10 (15002)
[runtime.sendNativeMessage](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendNativeMessage) | Supported — Microsoft Edge (38) / Windows 10 (15002)
[runtime.setUninstallUrl](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/setUninstallURL) | Supported — Microsoft Edge (38) / Windows 10 (14971)
Shared cookies (Fix for [8438075](https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/8438075/)) |In Development
[storage.sync.get](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/get) |Supported — Microsoft Edge (38) / Windows 10 (15007)
[storage.sync.onChanged](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage/onChanged) | Supported — Microsoft Edge (38) / Windows 10 (15007)
[storage.sync.remove](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/remove) |Supported — Microsoft Edge (38) / Windows 10 (15007)
[storage.sync.set](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/set) | Supported — Microsoft Edge (38) / Windows 10 (15007)
Support for CSP field in manifest.json | Supported — Microsoft Edge (38) / Windows 10 (14986)
[tabs.captureVisibleTab](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/captureVisibleTab) | Supported — Microsoft Edge (38) / Windows 10 (14971)
[tabs.onAttached](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onAttached) | Supported — Microsoft Edge (38) / Windows 10 (14936)
[tabs.onDetatched](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onDetached) | Supported — Microsoft Edge (38) / Windows 10 (14936)
unlimitedStorage for browser.storage APIs |Supported — Microsoft Edge (38) / Windows 10 (14986)




## Publicly available builds

The following table details our current progress towards completing the Microsoft Edge extension API. Status updates will be made here as classes move through development towards completion.

> [!NOTE]
> Native messaging is currently in development.


| Class         | Description | Status — Build Number
|---------------|--------------|---------------------|
[bookmarks](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/bookmarks)     | Used to create, organize, and manipulate bookmarks. | In development |
[browserAction](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/browserAction) | Enables extensions to add a persistent button within Microsoft Edge. | Supported — Microsoft Edge (38) / Windows 10 (14393)
[contextMenus](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/contextMenus)  | Adds a context menu item on a specific URL, in a specified context of a webpage. | Supported — Microsoft Edge (38) / Windows 10 (14393)
[cookies](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies)       | Used to query and modify cookies, as well as notify when they change. | Supported — Microsoft Edge (38) / Windows 10 (14393) |
[downloads](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/downloads)     | Used to programmatically initiate, monitor, manipulate, and search for downloads. | Under consideration |
[extension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/extension)     | Contains utilities that can be used by any extension page. | Supported — Microsoft Edge (38) / Windows 10 (14393)      |
[history](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/history)       | Interacts with the browser's record of visited pages. | Under consideration |
[i18n](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n)          | Implements internationalization across an extension. | Supported — Microsoft Edge (38) / Windows 10 (14393)      |
[idle](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/idle)          | Used to detect when the machine's idle state is changed. | Supported — Microsoft Edge (38) / Windows 10 (14393) |
[notifications](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/notifications) | Allows creation of notifications using templates to be displayed in the user's system tray. | Under consideration |
[pageAction](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/pageAction)    | Enables extensions to add a button inside the address bar. | Supported — Microsoft Edge (38) / Windows 10 (14393)      |
permissions   | Allows users to select what optional permissions they would like to grant an extension access to. | Under consideration
[runtime](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime)       | Retrieves the background page, returns details about the manifest, and listens for and responds to events in the extension lifecycle. | Supported — Microsoft Edge (38) / Windows 10 (14393)
[storage](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage)       | Used by the extension to read/write data and to sync data. | Supported — Microsoft Edge (38) / Windows 10 (14393)
[tabs](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs)          | Interacts with Microsoft Edge's tab system by creating, modifying, and rearranging tabs in the browser. | Supported — Microsoft Edge (38) / Windows 10 (14393)
[webNavigation](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webNavigation) | Used to receive notifications about the status of navigation requests in-flight. | Supported — Microsoft Edge (38) / Windows 10 (14393)
[webRequest](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest)    | Enables use of the webRequest API to observe and analyze traffic and to intercept, block, or modify requests in-flight. | Supported — Microsoft Edge (38) / Windows 10 (14393)
[windows](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/windows)       | Interacts with the browser by creating, modifying, and rearranging windows. | Supported — Microsoft Edge (38) / Windows 10 (14393)

