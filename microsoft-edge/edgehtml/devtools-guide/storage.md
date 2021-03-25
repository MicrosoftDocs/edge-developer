---
description: Use the Storage panel to inspect your web storage, IndexedDB, cookies, and request/response caches
title: Storage | DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 11/03/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, web storage, local storage, session storage, indexeddb, cookies, service worker, cache
ms.custom: seodec18
ROBOTS: NOINDEX,NOFOLLOW
---
# Storage

Use the **Storage** panel to inspect and manage various locally cached data, including:  

*   [Web storage](#local-and-session-storage-managers) \(Local and Session storage\) key/values pairs  
*   [Indexed DB](#indexeddb-manager) structured data  
*   [Cookies](#cookies-list) for the domain  
*   [Cache](#cache-manager) \(request/response pairs\) for service worker debugging  

Expand any of those categories and click on a child entry to open its resource manager tab.  

## Local and Session storage managers  

Use the Local Storage manager and Session Storage manager to inspect and manage the web storage for your page.  

The **Local Storage** and **Session Storage** folders inside the Storage panel's [Resource picker](./debugger.md#resource-picker) display a list of origins for the page.  Selecting one of these frames opens up an editable table of the current key/value pairs set via [Window.localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage) or [Window.sessionStorage](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage), respectively \(and/or set directly from the  DevTools [Storage list](#storage-list)\).  

![DevTools Storage manager](./media/storage_web_storage.png)  

From the Local Storage and Session Storage tabs you can:  

*   **Refresh** \(`Ctrl+F5`\) the [storage list](#cookies-list) to see the current set of key/values pairs for the given domain.  \(The list does not auto-refresh upon script updates.\)  
*   **Simulate reaching the storage limit**  for Microsoft Edge web storage.  Each domain and subdomain has its own storage area, however there is a combined limit:  
    *   **Subdomains**:  up to 5 MBs of space  
    *   **Domains**:  up to 10 MBs of space  
    *   **Total for all domains**:  up to 50 MBs of space  

   Session storage is cleared as soon as the last browser tab referencing its origin is closed.  Local storage entries persist indefinitely until cleared programmatically by the page or manually by the user:  

   **Settings** > **Clear browsing data** > **Cookies and saved website data**  

![Clear browsing data from the Microsoft Edge Settings panel](./media/settings_clear_browsing_data.png)  

### Storage list  

From the Storage list table you can:  

*   **Inspect and sort** your `key/value` pairs by clicking on either column name in the table.  
*   **Edit** the `Key` and `Value` of an existing entry by clicking in the cell.  
*   **Delete** \(`Del`\) an entry from the right-click context menu option, **Delete item**.  
*   **Add** a new `key/value` pair by clicking on the empty row at the bottom of the table.  

### Shortcuts

| Action | Shortcut |  
|:--- |:--- |  
| Refresh | `Ctrl`+`F5` |  
| Delete item | `Del` |  
| Copy selected items | `Ctrl`+`C` |  
| Select all | `Ctrl`+`A` |  

## IndexedDB manager  

Use the **IndexedDB** tab to inspect and manage the structured data stored locally on a client machine.  Specifically, you can inspect/sort and refresh your object stores and indices, and also delete individual key-value entries.  

> [!TIP]
> You can use our [Audio Mixer](https://developer.microsoft.com/microsoft-edge/testdrive/demos/audiomixer/) demo to test drive the *IndexedDB manager* in Microsoft Edge DevTools.  

To delete all the IndexedDB data stored for the current user in Microsoft Edge, use the Microsoft Edge **Settings** menu:  

**...** > **Settings** > **Clear browsing data** > **Cookies and saved website data**  

The `IndexedDB` folder inside the Debugger's [Resource picker](./debugger.md#resource-picker) displays a list of origins from the resources loaded by the page.  Any IndexedDB \(IDB\) databases will be listed under the origin, along with their object stores.  

![DevTools IndexedDB manager](./media/storage_indexeddb.png)  

### IndexedDB Toolbar  

From the IndexedDB toolbar you can:  

*   **Refresh** \(`Ctrl`+`F5`\) to see the current entries in the object store or index of your database.  The IndexedDB manager does not auto-refresh when changes are made to your database.  

### Object store entries list  

From the Object store or Index table you can:  

*   **Inspect and sort** your key-value pairs by clicking on any column name in the table.  
*   **Refresh** \(`Ctrl`+`F5`\)  
*   **Delete item** \(`Del`\) to remove the selected entry in your object store or index.  You can also do this from the right-click [context menu](#context-menu) option, **Delete item**.  
*   **Copy selected items** \(`Ctrl`+`C`\) to copy the selected item to your clipboard.  You can also do this from the right-click [context menu](#context-menu) option, **Copy selected item**.  
*   **Select all** \(`Ctrl`+`A`\) to select all the entries in your object store or index.  You can also do this from the right-click [context menu](#context-menu) option, **Select all**.  

The columns of the Object store or Index table are sortable:  

| Column | Description |  
|:--- |:--- |  
| Key | Name of the key-value pair \(same as **Primary Key**\) when iterating over an object store; Name of the index key \(cursor's current key\) when iterating over an index |  
| Primary Key | Name of the key-value pair \(see **MDN web docs** for more on IDB [keys](https://developer.mozilla.org/docs/Web/API/IndexedDB_API/Using_IndexedDB#Structuring_the_database)\) |  
| Value | Value of the key-value pair |  

Check out *MDN web docs* for more on [IndexedDB concepts and usage](https://developer.mozilla.org/docs/Web/API/IndexedDB_API).  

### Context menu  

In addition to the [*IndexedDB* toolbar](#indexeddb-toolbar), you can also manage your data in object stores or indices from the right-click **Context menu** and/or the keyboard [shortcuts](#shortcuts).  

### Shortcuts

| Action | Shortcut |  
|:--- |:--- |  
| Refresh | `Ctrl`+`F5` |  
| Delete key-value pair | `Del` |  
| Copy selected items | `Ctrl`+`C` |  
| Select all | `Ctrl +`A` |  

## Cookies manager  

Use the Cookies manager to inspect and manage the cookies for the given domain.  

The `Cookies` folder inside the Debugger's [Resource picker](./debugger.md#resource-picker) displays a list of origins from the resources loaded by the page.  Selecting one of these frames opens up a table representing the current cookies set by either [HTTP](https://developer.mozilla.org/docs/Web/HTTP/Cookies) header or via script with [Document.cookie](https://developer.mozilla.org/docs/Web/API/Document/cookie).  

![DevTools Cookies manager](./media/storage_cookies.png)  

From the Cookies tab toolbar you can:  

*   **Refresh** \(`Ctrl`+`F5`\) the [Cookies list](#cookies-list) to see the current set of cookies for the given domain.  \(The list does not auto-refresh.\)  
*   **Delete all cookies** \(`Ctrl`+`Shift`+`Del`\) \(session and permanent\) for the path of the current page.  
*   **Delete all session cookies** \(`Ctrl`+`Del`\) for the path of the current page.  

To completely clear your Cookies list, you might need to **Clear all cookies for the domain** from the [Network](./network.md#toolbar) panel toolbar.  

### Cookies list  

From the Cookies list table you can:  

*   **Inspect and sort** your cookies by clicking on any column name in the table.  
*   **Edit** the `Name` and `Value` of an existing cookie by clicking in the cell.  
*   **Delete** \(`Del`\) a cookie from the right-click [context menu](#context-menu) option, `Delete cookie`.  
*   **Add** a new session cookie for the given `Domain/Path` by clicking on the empty row at the bottom of the table.  This only works for session cookies; permanent cookies \(with specific expiry dates\) must be set with traditional methods.  The `Domain` and `Path` values are auto-filled according to the location of the page.  

The columns of the Cookies list are sortable:

| Column | Description |  
| :--- | :--- |  
| Name | Name of the cookie |  
| Value | Value of the cookie |  
| Domain | Host name of the cookie \(may be empty\) |  
| Path | URL path for the cookie \(may be empty\) |  
| Expires | Maximum lifetime of the cookie as an HTTP-date timestamp.  If no `Expires` or `Max-Age` was set, the entry is considered a Session cookie.  |  
| HTTP only | Indicates if the cookie was set with `HttpOnly` directive, indicating that it is inaccessible from JavaScript |  
| Secure | Indicates if the cookie was set with the `Secure` directive, indicating it will only be sent to the server from a request using SSL and the HTTPS protocol.  |  

See the **MDN web docs** [Set-Cookie](https://developer.mozilla.org/docs/Web/HTTP/Headers/Set-Cookie) reference for further details on cookie properties.  

### Context menu  

In addition to the Cookies tab [toolbar](#cookies-manager), you can also manage your cookies from the right-click **Context menu** and/or the keyboard [shortcuts](#shortcuts).  

### Shortcuts  

| Action | Shortcut |  
|:--- |:--- |  
| Refresh | `Ctrl`+`F5` |  
| Delete cookie | `Del` |  
| Delete all cookies | `Ctrl`+`Shift`+`Del` |  
| Delete all session cookies | `Ctrl`+`Del` |  
| Copy selected items | `Ctrl`+`C` |  
| Select all | `Ctrl`+`A` |  

### Cache manager  

Clicking on a specific cache entry will open up the service worker **Cache** manager, where you can inspect and optionally delete cache entries \(`Request` and `Response` key/value pairs\):  

![Cache manager](./media/storage_cache.png)  

### Shortcuts  

#### Cache manager  

| Action | Shortcut |  
|:--- |:--- |  
| Refresh | `Ctrl`+`F5` |  
| Delete item | `Del` |  
| Copy selected items | `Ctrl`+`C` |  
| Select all | `Ctrl`+`A` |  
