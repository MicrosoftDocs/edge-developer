---
description: Use the Web Storage manager to inspect your Local and Session storage caches 
title: Microsoft Edge F12 DevTools - Debugger - Web Storage manager
author: erikadoyle
ms.author: edoyle
ms.date: 10/10/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, debugger, debugging, local storage, session storage, web storage, cache
---

# Local and Session storage managers

Use the [Debugger](../debugger.md) *Local Storage manager* and *Session Storage manager* to inspect and manage the web storage for  your page. 

The **Local Storage** and **Session Storage** folders inside the Debugger's [*Resource picker*](../debugger.md#resource-picker) display a list of origins for the page. Selecting one of these frames opens up an editable table of the current key/value pairs set via [Window.localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) or [Window.sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage), respectively (and/or set directly from the F12 DevTools [Storage list](#storage-list)).


![F12 DevTools Cookies manager](../media/debugger_web_storage.png)

From the *Local Storage* and *Session Storage* tab toolbars you can:

 - **Refresh** (`Ctrl+F5`) the [storage list](#cookies-list) to see the current set of key/values pairs for the given domain. (The list does not auto-refresh upon script updates.)
 - **Simulate reaching the storage limit** for Microsoft Edge web storage. Each domain and subdomain has its own storage area, however there is a combined limit:
    - **Subdomains:** up to 5 MBs of space
    - **Domains:** up to 10 MBs of space
    - **Total for all domains:** up to 50 MBs of space

   Session storage is cleared as soon as the last browser tab referencing its origin is closed. Local storage entries persist indefinitely until cleared programmatically by the page or manually by the user:

   **Settings** > **Clear browsing data** > **Cookies and saved website data**

![Clear browsing data from the Microsoft Edge Settings panel](../media/settings_clear_browsing_data.png)

## Storage list

From the *Storage list* table you can:

 - **Inspect and sort** your key/value pairs by clicking on either column name in the table.
 - **Edit** the *Key* and *Value* of an existing entry by clicking in the cell.
 - **Delete** (`Del`) an entry from the right-click context menu option, *Delete item*.
 - **Add** a new key/value pair by clicking on the empty row at the bottom of the table.


## Shortcuts

Action | Shortcut
:------------ | :-------------
Refresh | `Ctrl` + `F5`
Delete item | `Del`
Copy selected items | `Ctrl` + `C`
Select all | `Ctrl` + `A`
