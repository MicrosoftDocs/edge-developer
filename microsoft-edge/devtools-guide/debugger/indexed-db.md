---
description: Use the Indexed DB manager to inspect locally stored structured data
title: Microsoft Edge DevTools - Debugger - Indexed DB manager
author: erikadoyle
ms.author: edoyle
ms.date: 4/24/2018
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, debugger, debugging, indexeddb, structured data, database
---

# Indexed DB manager

Use the [Debugger](../debugger.md) **Indexed DB** tab to inspect and manage the structured data stored locally on a client machine. Specifically, you can inspect/sort and refresh your object stores and indices, and also delete individual key-value entries.

> [!TIP]
> You can use our [Audio Mixer](https://developer.microsoft.com/en-us/microsoft-edge/testdrive/demos/audiomixer/) demo to test drive the *Indexed DB manager* in Microsoft Edge DevTools.

To delete all the IndexedDB data stored for the current user in Microsoft Edge, use the Microsoft Edge *Settings* menu:

**...** > **Settings** > **Clear browsing data** > **Cookies and saved website data**

The **Indexed DB** folder inside the Debugger's [*Resource picker*](../debugger.md#resource-picker) displays a list of origins from the resources loaded by the page. Any IndexedDB (IDB) databases will be listed under the origin, along with their object stores. 

![DevTools Indexed DB manager](../media/debugger_indexeddb.png)

From the *Indexed DB* tab toolbar you can:

 - **Refresh** (`Ctrl+F5`) the [](#cookies-list) to see the current set of cookies for the given domain. (The list does not auto-refresh.)

## Object store entries list

From the *Object store* table you can:

 - **Inspect and sort** your key-value pairs by clicking on any column name in the table.
 - **Refresh** (`Ctrl+F5`)
 - **Delete item** (`Del`) a cookie from the right-click [context menu](#context-menu) option, *Delete cookie*.
 - **Copy selected items** (`Ctrl+C`) a cookie from the right-click [context menu](#context-menu) option, *Delete cookie*.
 - **Select all** (`Ctrl+A`) a cookie from the right-click [context menu](#context-menu) option, *Delete cookie*.

The columns of the *Index* table are sortable:

Column | Description
:------------ | :-------------
Key | Name of the key-value pair (same as *Primary Key*) when iterating over an object store; Name of the index key (cursor's current key) when iterating over an index
Primary Key | Name of the key-value pair (see *MDN web docs* for more on IDB [keys](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB#Structuring_the_database))
Value | Value of the key-value pair

Check out *MDN web docs* for more on [IndexedDB concepts and usage](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API).

## Context menu

In addition to the *Cookies* tab [toolbar](#cookies-manager), you can also manage your cookies from the right-click **Context menu** and/or the keyboard [shortcuts](#shortcuts).

## Shortcuts

Action | Shortcut
:------------ | :-------------
Refresh | `Ctrl` + `F5`
Delete key-value pair | `Del`
Copy selected items | `Ctrl` + `C`
Select all | `Ctrl` + `A`