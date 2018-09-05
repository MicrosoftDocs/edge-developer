---
description: Use the IndexedDB manager to inspect locally stored structured data
title: Microsoft Edge DevTools - Debugger - IndexedDB manager
author: erikadoyle
ms.author: edoyle
ms.date: 06/20/2018
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, debugger, debugging, indexeddb, structured data, database
---

# IndexedDB manager

Use the [Debugger](../debugger.md) **IndexedDB** tab to inspect and manage the structured data stored locally on a client machine. Specifically, you can inspect/sort and refresh your object stores and indices, and also delete individual key-value entries.

> [!TIP]
> You can use our [Audio Mixer](https://developer.microsoft.com/en-us/microsoft-edge/testdrive/demos/audiomixer/) demo to test drive the *IndexedDB manager* in Microsoft Edge DevTools.

To delete all the IndexedDB data stored for the current user in Microsoft Edge, use the Microsoft Edge *Settings* menu:

**...** > **Settings** > **Clear browsing data** > **Cookies and saved website data**

The **IndexedDB** folder inside the Debugger's [*Resource picker*](../debugger.md#resource-picker) displays a list of origins from the resources loaded by the page. Any IndexedDB (IDB) databases will be listed under the origin, along with their object stores. 

![DevTools IndexedDB manager](../media/debugger_indexeddb.png)

## IndexedDB Toolbar

From the *IndexedDB* toolbar you can:

 - **Refresh** (`Ctrl+F5`) to see the current entries in the object store or index of your database. The IndexedDB manager does not auto-refresh when changes are made to your database.

## Object store entries list

From the *Object store* or *Index* table you can:

 - **Inspect and sort** your key-value pairs by clicking on any column name in the table.
 - **Refresh** (`Ctrl+F5`)
 - **Delete item** (`Del`) to remove the selected entry in your object store or index. You can also do this from the right-click [context menu](#context-menu) option, *Delete item*.
 - **Copy selected items** (`Ctrl+C`) to copy the selected item to your clipboard. You can also do this from the right-click [context menu](#context-menu) option, *Copy selected item*.
 - **Select all** (`Ctrl+A`) to select all the entries in your object store or index. You can also do this from the right-click [context menu](#context-menu) option, *Select all*.

The columns of the *Object store* or *Index* table are sortable:

Column | Description
:------------ | :-------------
Key | Name of the key-value pair (same as *Primary Key*) when iterating over an object store; Name of the index key (cursor's current key) when iterating over an index
Primary Key | Name of the key-value pair (see *MDN web docs* for more on IDB [keys](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB#Structuring_the_database))
Value | Value of the key-value pair

Check out *MDN web docs* for more on [IndexedDB concepts and usage](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API).

## Context menu

In addition to the [*IndexedDB* toolbar](#indexeddb-toolbar), you can also manage your data in object stores or indices from the right-click **Context menu** and/or the keyboard [shortcuts](#shortcuts).

## Shortcuts

Action | Shortcut
:------------ | :-------------
Refresh | `Ctrl` + `F5`
Delete key-value pair | `Del`
Copy selected items | `Ctrl` + `C`
Select all | `Ctrl` + `A`