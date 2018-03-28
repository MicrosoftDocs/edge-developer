---
ms.assetid: 6aef7c08-94b2-4146-b952-908b37a3fb08
description: Learn how the Web Storage API can persist client-side data in a secure manner using the Document Object Model (DOM), sessionStorage and localStorage.
title: Dev guide - Web and offline storage
author: abbycar
ms.author: abigailc
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Web and Offline Storage


The Web Storage API includes two related mechanisms for persisting client-side data in a secure manner using the Document Object Model (DOM), [`sessionStorage`](https://msdn.microsoft.com/library/cc197020) and [`localStorage`](https://msdn.microsoft.com/library/windows/apps/hh466046).

## What is Web Storage?

Web Storage is often compared to HTTP cookies. Like cookies, Web developers can store per-session or domain-specific data as name/value pairs on the client using Web Storage. However, unlike cookies, Web Storage makes it easier to control how information stored by one window is visible to another.

For example, a user might open two browser windows to buy airline tickets for two different flights. However, if the airline's Web application uses cookies to store its session state, information could "leak" from one transaction into the other, potentially causing the user to buy two tickets for the same flight without noticing. As applications become more capable of offline behaviors, such as storing values locally for later return to the server, the potential for this sort of information "leak" becomes more prevalent.

Web Storage also offers significantly more disk space than cookies. In Internet Explorer, cookies can store only 4 kilobytes (KB) of data. This byte total can be one name/value pair of 4 KB, or it can be up to 20 name/value pairs that have a total size of 4 KB. By comparison, Web Storage in Microsoft Edge provides each subdomain with 5,242,880 bytes (5 MBs) of space (i.e 5,242,880 UTF-8 characters), each domain with 10,485,760 bytes (10 MBs) of space, and 52,428,800 bytes (50 MBs) of space total for all domains.

Functionally, client storage areas are quite different from cookies. Web Storage doesn't transmit values to the server with every request as cookies do, nor does the data in a local storage area ever expire. And unlike cookies, it is easy to access individual pieces of data using a standard interface that has growing support among browser vendors.

## Web Storage Scripting Objects
The following scripting objects are supported:

### The `sessionStorage` attribute

Session storage is designed for scenarios where the user is carrying out a single transaction. The [`sessionStorage`](https://msdn.microsoft.com/library/cc197020) attribute of the [`window`](https://msdn.microsoft.com/library/ms535873) object maintains key/value pairs for all pages loaded during the lifetime of a single tab (for the duration of the top-level browsing context). For example, a page might have a check box that the user selects to indicate that he wants insurance.

```HTML
<label>
    <input type="checkbox" onchange="sessionStorage.insurance = checked">
    I want insurance on this trip.
</label>
```

A later page could then check, from script, whether the user had selected the check box.

```JavaScript
if (sessionStorage.insurance) { ... }
```

The [`Storage`](https://msdn.microsoft.com/library/cc197063) object supports expando properties ('insurance' in the preceding example). If the property name does not exist, a key/value pair is automatically created to hold it. Note that key/value pairs are always stored as strings. Different data types such as numbers, Boolean values, and structured data must be converted to strings before persisting to a storage area.

After a value has been saved to `sessionStorage`, it can be retrieved by script running in another page in the same context. When another document is loaded, `sessionStorage` is initialized from memory for same-origin URLs. (See [Security and Privacy](#security-and-privacy) section below for more information.)

### The `localStorage` attribute

The local storage mechanism spans multiple windows and persists beyond the current session. The [`localStorage`](https://msdn.microsoft.com/library/cc848902) attribute provides persistent storage areas for domains. It allows Web applications to store user data, such as entire documents or a user's mailbox, on the client for performance reasons.

For example, a Web site can display a count of how many times the user has visited a page with the following script.

```HTML
<p>
  You have viewed this page
  <span id="count">an untold number of</span>
  time(s).
</p>
<script>
  var storage = window.localStorage;
  if (!storage.pageLoadCount) storage.pageLoadCount = 0;
  storage.pageLoadCount = parseInt(storage.pageLoadCount, 10) + 1;
  document.getElementById('count').innerHTML = storage.pageLoadCount;
</script> 
```

> [!NOTE]
>  Before incrementing `pageLoadCount` it must first be converted to a number with the [`parseInt` Method (JScript 5.6)](https://msdn.microsoft.com/library/x53yedee).

 
Each domain and subdomain has its own separate local storage area. Domains can access the storage areas of subdomains, and subdomains can access the storage areas of parent domains. For example, `localStorage['example.com']` is accessible to example.com and any of its subdomains. The subdomain `localStorage['www.example.com']` is accessible to example.com, but not to other subdomains, such as mail.example.com. The storage limits in Microsoft Edge are:

* Subdomains: up to 5 MBs of space
* Domains: up to 10 MBs of space
* Total for all domains: up to 50 MBs of space


### The `Storage` Object

The following properties and methods are supported by both session and local storage objects:

Methods/Properties | Description
:------------ | :-------------
[clear](https://msdn.microsoft.com/library/cc288131) | Removes all key/value pairs from the Web Storage area.
[constructor](https://msdn.microsoft.com/library/cc848898)	| Returns a reference to the constructor of an object.
[getItem](https://msdn.microsoft.com/library/cc197039)| Retrieves the current value associated with the Web Storage key.
[key](https://msdn.microsoft.com/library/cc197042)| Retrieves the key at the specified index in the collection.
[length](https://msdn.microsoft.com/library/cc304101) | Retrieves the length of the key/value list.
[remainingSpace](https://msdn.microsoft.com/library/cc197016) | Retrieves the remaining number of UTF-16 characters allowed for the storage object.
[removeItem](https://msdn.microsoft.com/library/cc197047) | Deletes a key/value pair from the Web Storage collection.
[setItem](https://msdn.microsoft.com/library/cc197050) | Sets a key/value pair.

## Web Storage Events

Events are fired when data in a storage area is updated, so that information can synchronized between multiple instances of the browser or tabs. The following events are supported.

### onstorage
The [`onstorage`](https://msdn.microsoft.com/library/cc197059) event is fired in a document when a storage area changes. All documents sharing the same session context, and those that are currently displaying a page from the same domain or subdomain where local storage is being committed, receive the event.
If the target document object is not currently active, the browser does not fire any events.

### onstoragecommit
Microsoft Edge uses XML files to store local storage. The [`onstoragecommit`](https://msdn.microsoft.com/library/cc288674) event fires when a local storage is written to disk.

## Security and Privacy

The data stored in local storage is much more public than that stored in cookies, which can be limited to a certain path within a domain. Even picking a hard-to-guess key won't provide any privacy because the [`Storage`](https://msdn.microsoft.com/library/cc197063) object provides a way to enumerate them.

Here are some things to consider:

### Top-Level Browsing Context and Hostname

Access to the session storage area is restricted by the top-level browsing context. Script running in one top-level browsing context has no access to storage created in another. Sites can add data to the session storage, and it will be accessible to any page from that hostname opened in the same window.

> WARNING: The port and protocol/scheme are not evaluated as a part of this check.

### Origin Determines Storage Limits

Disk quota limits are imposed against the domain of the page that sets the value, rather than the domain where the value is being set. This prevents malicious scripts from using up the storage quota of a related domain. It also prevents such scripts from using random subdomains to store unrestricted amounts of data.

Storage size is calculated as the total length of all key names and values, and a single storage area can contain up to 10 million bytes. The [`remainingSpace`](https://msdn.microsoft.com/library/cc197016) property is used to determine the available storage space.

### Clearing the Storage Areas
Session state is released as soon as the last window to reference that data is closed. However, users can clear storage areas at any time by selecting **Delete Browsing History** from the **Tools** menu in the browser, selecting the **Cookies** check box, and clicking **OK**. This clears session and local storage areas for all domains that are not in the Favorites folder and resets the storage quotas in the registry. Clear the **Preserve Favorite Site Data** check box to delete all storage areas, regardless of source.

To delete key/value pairs from a storage list, iterate over the collection with [`removeItem`](https://msdn.microsoft.com/library/cc197047) or use [`clear`](https://msdn.microsoft.com/library/cc288131) to remove all items at once. Keep in mind that changes to a local storage area are saved to disk asynchronously.




## Related topics
[Building Offline Experiences with HTML5 AppCache and IndexedDB](http://go.microsoft.com/fwlink/p/?LinkId=239979)

[A brief overview of JSON](https://msdn.microsoft.com/library/hh923971)

[Using Web Storage on the Client-Side](http://go.microsoft.com/fwlink/p/?LinkId=278850)

[Writing a data-centric oriented web application using HTML5 local storage](http://go.microsoft.com/fwlink/p/?LinkId=241668)

## Specification
[Web Storage](http://go.microsoft.com/fwlink/p/?LinkId=238590)


