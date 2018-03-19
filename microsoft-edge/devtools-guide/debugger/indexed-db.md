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

Use the [Debugger](../debugger.md) *Indexed DB manager* to inspect and manage the structured data  stored locally on a client machine. 

The **Indexed DB** folder inside the Debugger's [*Resource picker*](../debugger.md#resource-picker) displays a list of origins from the resources loaded by the page. Any IndexedDB (IDB) databases will be listed under the origin, along with their object stores and the indices for them. 

![DevTools Indexed DB manager](../media/debugger_indexeddb.png)

From the *Indexed DB* tab toolbar you can:

 - **Refresh** (`Ctrl+F5`) the [](#cookies-list) to see the current set of cookies for the given domain. (The list does not auto-refresh.)

## Cookies list

From the *Index* table you can:

 - **Inspect and sort** your cookies by clicking on any column name in the table.
 - **Edit** the *Key*, *Primary Key* and *Value* of an existing cookie by clicking in the cell.
 - **Delete** (`Del`) a cookie from the right-click [context menu](#context-menu) option, *Delete cookie*.
 - **Add** a new session cookie for the given *Domain/Path* by clicking on the empty row at the bottom of the table. This only works for session cookies; permanent cookies (with specific expiry dates) must be set with traditional methods. The *Domain* and *Path* values are auto-filled according to the location of the page.

The columns of the *Index* table are sortable:

Column | Description
:------------ | :-------------
Key | Name of the key
Primary Key | 
Value | Value of the key

See the **MDN web docs** [Set-Cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie) reference for further details on cookie properties.

## Context menu

In addition to the *Cookies* tab [toolbar](#cookies-manager), you can also manage your cookies from the right-click **Context menu** and/or the keyboard [shortcuts](#shortcuts).

## Shortcuts

Action | Shortcut
:------------ | :-------------
Refresh | `Ctrl` + `F5`
Delete cookie | `Del`
Delete all cookies | `Ctrl` + `Shift` + `Del`
Delete all session cookies | `Ctrl` + `Del`
Copy selected items | `Ctrl` + `C`
Select all | `Ctrl` + `A`