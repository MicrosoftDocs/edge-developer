---
description: Use the Cookies manager to inspect cookie usage  
title: Microsoft Edge F12 DevTools - Debugger - Cookies manager
author: erikadoyle
ms.author: edoyle
ms.date: 10/10/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, debugger, debugging, cookies
---

# Cookies manager

Use the [Debugger](../debugger.md) *Cookies manager* to inspect and manage the cookies for the given domain. 

The **Cookies** folder inside the Debugger's [*Resource picker*](../debugger.md#resource-picker) displays a list of origins from the resources loaded by the page. Selecting one of these frames opens up a table representing the current cookies set by either [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies) header or via script with [Document.cookie](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie).

![F12 DevTools Cookies manager](../media/debugger_cookies.png)

From the *Cookies* tab toolbar you can:

 - **Refresh** (`Ctrl+F5`) the [Cookies list](#cookies-list) to see the current set of cookies for the given domain. (The list does not auto-refresh.)
 - **Delete all cookies** (`Ctrl+Shift+Del`) (session and permanent) for the path of the current page.
 - **Delete all session cookies** (`Ctrl+Del`) for the path of the current page.

To completely clear your *Cookies list*, you might need to **Clear all cookies for the domain** from the [**Network**](../network.md#toolbar) panel toolbar.

## Cookies list

From the *Cookies list* table you can:

 - **Inspect and sort** your cookies by clicking on any column name in the table.
 - **Edit** the *Name* and *Value* of an existing cookie by clicking in the cell.
 - **Delete** (`Del`) a cookie from the right-click [context menu](#context-menu) option, *Delete cookie*.
 - **Add** a new session cookie for the given *Domain/Path* by clicking on the empty row at the bottom of the table. This only works for session cookies; permanent cookies (with specific expiry dates) must be set with traditional methods. The *Domain* and *Path* values are auto-filled according to the location of the page.

The columns of the *Cookies list* are sortable:

Column | Description
:------------ | :-------------
Name | Name of the cookie
Value | Value of the cookie
Domain | Host name of the cookie (may be empty)
Path | URL path for the cookie (may be empty)
Expires | Maximum lifetime of the cookie as an HTTP-date timestamp. If no `Expires` or `Max-Age` was set, the entry is considered a *Session* cookie.
HTTP only | Indicates if the cookie was set with `HttpOnly` directive, indicating that it is inaccessible from JavaScript
Secure | Indicates if the cookie was set with the `Secure` directive, indicating it will only be sent to the server from a request using SSL and the HTTPS protocol.

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