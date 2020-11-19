---
description: Find information on current progress towards completing the Microsoft Edge extension API.
title: Extensions API roadmap
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, api, extensions, javascript, developer
ms.custom: seodec18
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# Microsoft Edge extension API roadmap  

[!INCLUDE [deprecation-note](../includes/deprecation-note.md)]  

In addition to web APIs, the extension API allows extensions to achieve deeper integration with the browser host. This API gives developers access to Microsoft Edge’s browser features such as tab and window manipulation. The following table details what APIs are supported/in development for Windows 10 publicly released builds of Microsoft Edge.


|     Class     |                                                              Description                                                              |                Status — Build Number                 |
|---------------|---------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
|   bookmarks   |                                          Used to create, organize, and manipulate bookmarks.                                          | Supported — Microsoft Edge (40) / Windows 10 (15063) |
| browserAction |                                 Enables extensions to add a persistent button within Microsoft Edge.                                  | Supported — Microsoft Edge (38) / Windows 10 (14393) |
| commands      |                                                      Defines keyboard shortcuts.                                                      | Under consideration
| contextMenus  |                           Adds a context menu item on a specific URL, in a specified context of a webpage.                            | Supported — Microsoft Edge (38) / Windows 10 (14393) |
|    cookies    |                                 Used to query and modify cookies, as well as notify when they change.                                 | Supported — Microsoft Edge (38) / Windows 10 (14393) |
|   downloads   |                           Used to programmatically initiate, monitor, manipulate, and search for downloads.                           |                 Under consideration                  |
|   extension   |                                      Contains utilities that can be used by any extension page.                                       | Supported — Microsoft Edge (38) / Windows 10 (14393) |
|    history    |                                         Interacts with the browser's record of visited pages.                                         |                 Under consideration                  |
|     i18n      |                                         Implements internationalization across an extension.                                          | Supported — Microsoft Edge (38) / Windows 10 (14393) |
|   identity    |                                       Used to get an OAuth2 authorization code or access token.                                       |                 Under consideration                  |
|     idle      |                                       Used to detect when the machine's idle state is changed.                                        | Supported — Microsoft Edge (38) / Windows 10 (14393) |
|  management   |                                              Gets information about installed add-ons.                                                |                 Under consideration                  |
| notifications |                      Allows creation of notifications using templates to be displayed in the user's system tray.                      | Supported - Microsoft Edge (42) / Windows 10 (17134) |
|  pageAction   |                                      Enables extensions to add a button inside the address bar.                                       | Supported — Microsoft Edge (38) / Windows 10 (14393) |
|  permissions  |                   Allows users to select what optional permissions they would like to grant an extension access to.                   |                 Under consideration                  |
|    runtime    | Retrieves the background page, returns details about the manifest, and listens for and responds to events in the extension lifecycle. | Supported — Microsoft Edge (38) / Windows 10 (14393) |
|    storage    |                                      Used by the extension to read/write data and to sync data.                                       | Supported — Microsoft Edge (38) / Windows 10 (14393) |
|     tabs      |                Interacts with Microsoft Edge's tab system by creating, modifying, and rearranging tabs in the browser.                | Supported — Microsoft Edge (38) / Windows 10 (14393) |
| webNavigation |                           Used to receive notifications about the status of navigation requests in-flight.                            | Supported — Microsoft Edge (38) / Windows 10 (14393) |
|  webRequest   |        Enables use of the webRequest API to observe and analyze traffic and to intercept, block, or modify requests in-flight.        | Supported — Microsoft Edge (38) / Windows 10 (14393) |
|    windows    |                              Interacts with the browser by creating, modifying, and rearranging windows.                              | Supported — Microsoft Edge (38) / Windows 10 (14393) |
