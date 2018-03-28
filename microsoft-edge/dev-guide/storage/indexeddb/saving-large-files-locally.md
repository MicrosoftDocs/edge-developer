---
ms.assetid: d0a343ab-0a20-4cc0-8a1c-4dae7d6ae5d0
description: Learn how to save files of arbitrary size locally by using the Indexed Database API (often abbreviated IndexedDB or IDB).
title: Dev guide - Saving large files locally
author: abbycar
ms.author: abigailc
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Saving files locally using IndexedDB


This page demonstrates how to save files of arbitrary size locally by using the [Indexed Database API](https://msdn.microsoft.com/library/Hh772651)(often abbreviated `IndexedDB` or IDB). Review the [Indexed Database API](https://msdn.microsoft.com/library/Hh772651) before proceeding.

> [!NOTE]
> The following code examples require a browser that supports [`File`](http://go.microsoft.com/fwlink/p/?LinkId=248922) API and `IndexedDB` API, such as Microsoft Edge. For security reasons, `IndexedDB` API only works through the http, https, ms-wwa, or ms-wwa-web protocols in Microsoft Edge. Local HTML pages ( `file://`) won't fully execute the `IndexedDB` API. The page must be behind a supported protocol such as `http://` or `https://`.


## Database UI skeleton

Indexed Database API is relatively complex. To help mitigate some of this complexity, the example below provides a skeletal framework from which to build from.

<div class="codepen-wrap"><p data-height="325" data-theme-id="23761" data-slug-hash="EKKejm" data-default-tab="result" data-user="MSEdgeDev" data-embed-version="2" data-editable="true" class="codepen">See this example by <a href="https://codepen.io/MSEdgeDev">Microsoft Edge Docs</a> on <a href="https://codepen.io/MSEdgeDev/pen/EKKejm">CodePen</a>.</p></div><script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Let's take a closer look at the code:

We first build a simple database user interface (UI) composed of a message display area (`<div id="messages">`) and four buttons that allow us to perform basic database operations:

```html
<body id="bodyElement">
  <h1>Saving Files via IndexedDB</h1>
  <div>
    <button id="openButton">Create/Open DB</button> <!-- Clicking this opens the database. If there's no database to open, a database is created. -->
    <button id="populateButton">Populate DB</button>    
    <button id="displayButton">Display DB</button>    
    <button id="deleteButton">Delete DB</button>    
  </div>
  <div id="messages">
    <p>If the database does not exist, clicking <strong>Create/Open DB</strong> creates it. If the database already exists, clicking <strong>Create/Open DB</strong> opens it.</p>
    <p>Thus, you must click the <strong>Create/Open DB</strong> button before clicking the <strong>Populate DB</strong> button.</p>
  </div>
  <p>
    <input type="file" id="fileSelector" multiple size="24"> <!-- Only display this element when the database is ready. -->
  </p>
</body>
```

The basic database operations (buttons) are:

Operation | Action
:-------- | :--------
Create/Open DB | If the database doesn't yet exist on the client machine, clicking this button creates and opens the database. If the database already exists on the client (recall that `IndexedDB` databases are persistent), the database is only opened.
Populate DB | After the database is open, clicking this button allows the user to select one or more files to be stored within the database. To be more precise, JavaScript file objects are stored in the database. A JavaScript file object contains the contents of the file as well as assorted file-related metadata such as file name, date, size, and so on.
Display DB | Clicking this button displays the file name, date last modified, and size (in bytes) of the file objects stored within the database.
Delete DB | Deletes the database. The database need not be open for this to occur (although if open, it must be closed first - more on that later).

After creating a single global object to hold all our database related global variables, we can now use the `requiredFeaturesSupported()` function to determine if the user's browser supports all the required features:

```javascript
function requiredFeaturesSupported() {      
  switch(window.location.protocol) { // To work, IndexedDB pages must be served via the http or https protocol (or, for apps in the new Windows UI, the ms-wwa or ms-wwa-web protocols).
    case "http:":
      break;
    case "https:":
      break;
    case "ms-wwa-web:": // For apps in the new Windows UI, IndexedDB works in local content loaded in the web context.
      break;
    case "ms-wwa:": // For apps in the new Windows UI, IndexedDB works in the local context.
      break;          
    default:
      document.getElementById('bodyElement').innerHTML = "<h3>IndexedDB pages must be served via the http:// or https:// protocol - resolve this issue and try again.</h3>";
      return false;
  } // switch

  if (!document.getElementById('fileSelector').files) {
    document.getElementById('bodyElement').innerHTML = "<h3>File API is not fully supported - upgrade your browser to the latest version.</h3>";
    return false;
  }

  if (!window.indexedDB) {
    if (window.mozIndexedDB) {
      window.indexedDB = window.mozIndexedDB;
    }
    else if (window.webkitIndexedDB) {
      window.indexedDB = webkitIndexedDB;
      IDBCursor = webkitIDBCursor;
      IDBDatabaseException = webkitIDBDatabaseException;
      IDBRequest = webkitIDBRequest;
      IDBKeyRange = webkitIDBKeyRange;
      IDBTransaction = webkitIDBTransaction;
    }
    else {
      document.getElementById('bodyElement').innerHTML = "<h3>IndexedDB is not supported - upgrade your browser to the latest version.</h3>";
      return false;
    }
  } // if

  if (!window.indexedDB.deleteDatabase) { // Not all implementations of IndexedDB support this method, thus we test for it here.
    document.getElementById('bodyElement').innerHTML = "<h3>The required version of IndexedDB is not supported.</h3>";    
    return false;      
  }

  return true;
} // requiredFeaturesSupported
```

This code snippet tests the following features:

* Protocol: For security reasons, IndexedDB only works under certain protocols. Therefore, we first check that the page is being served via a supported protocol.
* File API: If `document.getElementById('fileSelector').files)` is `true`, the required File API feature is supported (this is essentially equivalent to determining if `evt.target.files` is undefined in `handleFileSelection(evt)`).
* IndexedDB: This is a bit more complicated, but still very straightforward. We simply see if `window.indexedDB` (or the browser's version thereof) is undefined or not, and "normalize" the JavaScript IDB interface (if necessary). That is, we look for `window.indexedDB` and other IDB implementation APIs to confirm that the feature is present, then we assign the instance to `window.indexedDB` (if necessary) to allow the code to run on multiple browsers. The code also confirms that the `window.indexedDB.deleteDatabase()` method, which may not be available in all browsers, exists.

Now that the internals of `requiredFeaturesSupported()` are understood, we can discuss its simple purpose, which is to add five event listeners if and only if the required features are available, as below.

```javascript
if (requiredFeaturesSupported()) {
  // Add event listeners for the four database related buttons:
  document.getElementById('openButton').addEventListener('click', openDB, false);
  document.getElementById('populateButton').addEventListener('click', populateDB, false);
  document.getElementById('displayButton').addEventListener('click', displayDB, false);
  document.getElementById('deleteButton').addEventListener('click', deleteDB, false);

  // Add an event listener for the file <input> element so the user can select some files to store in the database:
  document.getElementById('fileSelector').addEventListener('change', handleFileSelection, false); // Add an onchange event listener for the <input id="fileSelector"> element.
} // if
```

The last function to describe is `handleFileSelection(evt)`:

```javascript
function handleFileSelection(evt) {    
  console.log("handleFileSelection()");    

  var files = evt.target.files; // The files selected by the user (as a FileList object).
  if (!files) {
    displayMessage("<p>At least one selected file is invalid - do not select any folders.</p><p>Please reselect and try again.</p>");
    return;
  }

  // The variable "files" is an array of file objects.
  var message = "<ul style='margin: 1em 0 1em -1em;'>";
  for (var i = 0, file; file = files[i]; i++) {
    message += "<li>" + file.name + " file object will be added to the database here...</li>";
  } // for
  message += "</ul>";
  displayMessage(message);

  document.getElementById('fileSelector').style.display = "none"; // The file(s) have already been selected so hide the "file picker" dialog.
} // handleFileSelection
```

When the **Populate DB** button is clicked, the `<input type="file">` element is revealed (via `document.getElementById('fileSelector').style.display = "block`), which exposes the" file picker"**Browse** button. When the user selects one or more files, the `handleFileSelection(evt)` event handler is invoked, which (as it stands now) simply lists the names of the selected files. In the next example, the files will be placed in the database.


## Database file uploading

In the following final example, we flesh out the remaining "empty" functions from the previous example.

<div class="codepen-wrap"><p data-height="300" data-theme-id="23761" data-slug-hash="WwZQmV" data-default-tab="result" data-user="MSEdgeDev" data-embed-version="2" data-editable="true" class="codepen">See this example by <a href="https://codepen.io/MSEdgeDev">Microsoft Edge Docs</a> on <a href="https://codepen.io/MSEdgeDev/pen/YqqOLd">CodePen</a>.</p></div><script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Now lets take a closer look at the code once more:

The first function to discuss is `openDB()`:

```javascript
function openDB() {
  console.log("openDB()");
  displayMessage("<p>Your request has been queued.</p>"); // Normally, this will instantly blown away by the next displayMessage().

  if (!window.indexedDB.open) {
    console.log("window.indexedDB.open is null in openDB()");
    return;
  } // if

  try {
    var openRequest = window.indexedDB.open(dbGlobals.name, dbGlobals.version); // Also passing an optional version number for this database.

    openRequest.onerror = function(evt) { console.log("openRequest.onerror fired in openDB() - error: " + (evt.target.error ? evt.target.error : evt.target.errorCode)); } // Some browsers may only support the errorCode property.
    openRequest.onblocked = openDB_onblocked; // Called if the database is opened via another process, or similar.
    openRequest.onupgradeneeded = openDB_onupgradeneeded; // Called if the database doesn't exist or the database version values don't match.
    openRequest.onsuccess = openDB_onsuccess; // Attempts to open an existing database (that has a correctly matching version value).        
  }
  catch(ex) {
    console.log("window.indexedDB.open exception in openDB() - " + ex.message);
  }
} // openDB
```

As you can see from the `openDB()` code previously listed, IDB uses an asynchronous callback-based model. For example, invoking `window.indexedDB.open(dbGlobals.name, dbGlobals.version)` does not instantly create version `1` of a database named `localFileStorage`, but instead returns an object (`openRequest`) that you can attach various callback functions (event handlers) to. For example, if the database already exists on the client machine and was successfully opened, the `openRequest.onsuccess` function (`openDB_onsuccess`) is called, and is handed an event object (`evt`) that contains a reference to the just-opened database.

A few other items to point out regarding `openDB()` include:

* In general, all IDB operations should occur within `try/catch` blocks in that exception objects (`ex` in this case) are an important means by which IDB communicates various issues and error conditions. As can be seen, all such exceptions are reported to the browser's debugging console window using `console.log()`. Another way that error conditions are reported is through `onerror` callback functions (event handlers). For example, the `openRequest.onerror` callback fires if an error occurs during an attempt to open the database. In general, `onerror` callbacks are required because of the inherently asynchronous nature of IDB – often it’s not possible to know whether an operation will succeed (or not) before actually attempting to perform the requested (asynchronous) operation.
* Be aware that `try/catch` blocks will not catch exceptions generated by any contained callbacks. For example, despite the fact that the `openRequest.onsuccess` callback is "contained" within a `try/catch` block, if the `openRequest.onsuccess` callback throws an exception, it will not be caught by this `try/catch` block. This applies to local [anonymous](http://go.microsoft.com/fwlink/p/?LinkID=330533) functions as well. For example, if the above `openRequest.onsuccess` callback was defined as follows:

```javascript
openRequest.onsuccess = function(evt) {
      // Code that could possibly throw an exception here.
    }
```

The `try/catch` block would still not catch any exceptions thrown by this anonymous function. To catch such exceptions, a separate `try/catch` block must be placed within the function definition of the callback.

As you can see in this final example, `openDB()` is called when the **Create/Open DB** button is clicked; and attempts to create/open the database:

* If the database doesn't already exist on the client machine, the `openDB_onupgradeneeded` callback is invoked (see example 2 previously discussed). Not only does this create and open the database, it also creates an object store for the new database. In this case, each object in the store will have an `ID` property appended to it such that its value monotonically increases as new objects are added to the store. Stated another way, because the specified `keyPath` property doesn't exist on any of the stored file objects, we create an `ID` property using an optional parameter (`autoIncrement: true`) to auto-increment the auto-generated value of the `ID` property. Because of this, the same file can be stored multiple times within the database (and will have unique `ID` values).
* If the database already exists on the client (recall that `IndexedDB` databases are persistent) and the versions match, the `openDB_onsuccess` callback is executed. This merely opens the database (there is no need to define the structure of the object store, since this already occurred when the database was initially created). Be aware that if the database exists but the version values don't match, the `onupgradeneeded` callback fires (or `onerror`, depending on the value of `version`).

As discussed previously, when the **Populate DB** button is clicked, `populateDB` is executed. This reveals the hidden `<input type="file">` **Browse** dialog box to the user. When the user selects one or more files to store in the database, `handleFileSelection(evt)` is invoked (thanks to `document.getElementById('fileSelector').addEventListener('change', handleFileSelection, false)`). The `handleFileSelection(evt)` event handler then takes the file object(s) selected by the user, requests a database [transaction](http://go.microsoft.com/fwlink/p/?LinkID=237481#transaction-concept), and if the transaction request is successful, stores the file object(s) in the database's object store using the [`put`](https://msdn.microsoft.com/library/Hh772604) method, as shown here:

```javascript
function handleFileSelection(evt) {    
  console.log("handleFileSelection()");    

  var files = evt.target.files; // The files selected by the user (as a FileList object).
  if (!files) {
    displayMessage("<p>At least one selected file is invalid - do not select any folders.</p><p>Please reselect and try again.</p>");
    return;
  }

  var db = dbGlobals.db;       
  if (!db) {
    console.log("db (i.e., dbGlobals.db) is null in handleFileSelection()");
    return;
  } // if

  try {
    var transaction = db.transaction(dbGlobals.storeName, (IDBTransaction.READ_WRITE ? IDBTransaction.READ_WRITE : 'readwrite')); // This is either successful or it throws an exception. Note that the ternary operator is for browsers that only support the READ_WRITE value.
  } // try
  catch (ex) {
    console.log("db.transaction exception in handleFileSelection() - " + ex.message);
    return;
  } // catch

  transaction.onerror = function(evt) { console.log("transaction.onerror fired in handleFileSelection() - error code: " + (evt.target.error ? evt.target.error : evt.target.errorCode)); }
  transaction.onabort = function() { console.log("transaction.onabort fired in handleFileSelection()"); }
  transaction.oncomplete = function() { console.log("transaction.oncomplete fired in handleFileSelection()"); }

  try {
    var objectStore = transaction.objectStore(dbGlobals.storeName); // Note that multiple put()'s can occur per transaction.

    for (var i = 0, file; file = files[i]; i++) {
      var putRequest = objectStore.put(file); // The put() method will update an existing record, whereas the add() method won't.
      putRequest.onsuccess = function() { dbGlobals.empty = false; } // There's at least one object in the database's object store. This info (i.e., dbGlobals.empty) is used in displayDB().
      putRequest.onerror = function(evt) { console.log("putRequest.onerror fired in handleFileSelection() - error code: " + (evt.target.error ? evt.target.error : evt.target.errorCode)); }         
    } // for            
  } // try
  catch (ex) {
    console.log("Transaction and/or put() exception in handleFileSelection() - " + ex.message);
    return;
  } // catch

  document.getElementById('fileSelector').style.display = "none"; // An attempt has already been made to select file(s) so hide the "file picker" dialog box.
} // handleFileSelection
```

> [!NOTE]
> A database's object store can only be accessed within the context of a transaction, as shown in the prior code example (`handleFileSection`).




Be aware that ` putRequest.onsuccess = function() { dbGlobals.empty = false; }` is used in the `displayDB()` function to determine if the database is open (that is, `dbGlobals.db` is not `null`) but is empty. We clarify this by looking more closely at `displayDB()` (which is invoked when the **Display DB** button is clicked):

```javascript
function displayDB() {
  console.log("displayDB()");    

  var db = dbGlobals.db;

  if (!db) {
    displayMessage("<p>There's no database to display.</p>");
    console.log("db (i.e., dbGlobals.db) is null in displayDB()");
    return;
  } // if

  try {
    var transaction = db.transaction(dbGlobals.storeName, (IDBTransaction.READ_ONLY ? IDBTransaction.READ_ONLY : 'readonly')); // This is either successful or it throws an exception. Note that the ternary operator is for browsers that only support the READ_ONLY value.
  } // try
  catch(ex) {
    console.log("db.transaction() exception in displayDB() - " + ex.message);      
    return;            
  } // catch

  try {
    var objectStore = transaction.objectStore(dbGlobals.storeName);

    try {
      var cursorRequest = objectStore.openCursor();

      cursorRequest.onerror = function(evt) { console.log("cursorRequest.onerror fired in displayDB() - error code: " + (evt.target.error ? evt.target.error : evt.target.errorCode)); }

      var fileListHTML = "<p><strong>File(s) in database:</strong></p><ul style='margin: -0.5em 0 1em -1em;'>"; // Be aware that if the database is empty, this variable never gets used.

      cursorRequest.onsuccess = function (evt) {
        console.log("cursorRequest.onsuccess fired in displayDB()");

        var cursor = evt.target.result; // Get an object from the object store.

        if (cursor) {
          dbGlobals.empty = false; // If we're here, there's at least one object in the database's object store (i.e., the database is not empty).
          fileListHTML += "<li>" + cursor.value.name;
          fileListHTML += "<p style='margin: 0 0 0 0.75em;'>" + cursor.value.lastModifiedDate + "</p>";
          fileListHTML += "<p style='margin: 0 0 0 0.75em;'>" + cursor.value.size + " bytes</p>";              
          cursor.continue(); // Move to the next object (that is, file) in the object store.
        }
        else {
          fileListHTML += "</ul>";
          displayMessage(fileListHTML);            
        }

        if (dbGlobals.empty) {
          displayMessage("<p>The database is empty &amp;ndash; there's nothing to display.</p>");
        }            
      } // cursorRequest.onsuccess
    } // inner try
    catch (innerException) {
      console.log("Inner try exception in displayDB() - " + innerException.message);
    } // inner catch
  } // outer try
  catch (outerException) {
    console.log("Outer try exception in displayDB() - " + outerException.message);      
  } // outer catch
} // displayDB
```

If the user clicks the **Display DB** button before the database has been opened/created, `db` will be null, `!db` will be `true`, and an appropriate message is displayed. That is, we validate the value of the `db` property before we allow the call to continue in the event that the user has clicked **Display DB** before the database has actually been opened; and if `db` is `null`, we display an appropriate message. Otherwise, (`db` is not `null`), we initiate a transaction request, acquire a handle to the object store, and attempt to open a [cursor](http://go.microsoft.com/fwlink/p/?LinkID=237481#transaction-concept), which allows us to iterate over the objects in the store. That is, the event object (`evt`) passed to the `cursorRequest.onsuccess` callback contains the first item in the store:

```javascript
var cursor = evt.target.result;
```

To get the next object in the store, we call `cursor.continue()`. This ends up invoking the `cursorRequest.onsuccess` callback again; and this process continues until there are no more objects in the store (that is, until `cursor` becomes `null`).

The last function to examine is `deleteDB()`:

```javascript
function deleteDB() {
  console.log("deletedDB()");
  displayMessage("<p>Your request has been queued.</p>"); // This normally gets instantly blown away by the next displayMessage().

  try {
    if (dbGlobals.db) {
      dbGlobals.db.close(); // If the database is open, you must first close the database connection before deleting it. Otherwise, the delete request waits (possibly forever) for the required close request to occur.
    }

    var deleteRequest = window.indexedDB.deleteDatabase(dbGlobals.name); // Note that we already checked for the availability of the deleteDatabase() method in the above feature detection code.

    deleteRequest.onerror = function(evt) { console.log("deleteRequest.onerror fired in deleteDB() - " + (evt.target.error ? evt.target.error : evt.target.errorCode)); }
    deleteRequest.onsuccess = function() {
      dbGlobals.db = null;
      dbGlobals.empty = true;
      dbGlobals.message = "";
      displayMessage("<p>The database has been deleted.</p>");             
    } // deleteRequest.onsuccess
  } // try
  catch(ex) {
    console.log("Exception in deleteDB() - " + ex.message);            
  } // catch
} // deleteDB
```

There are three items worth mentioning about `deleteDB()`:

* The message `Your request has been queued` is rarely seen by the user but would appear, for example, when the database is open in one browser window and an attempt is made to delete the database from another browser window. In this case, when the first (open-connection) window is closed, the delete request can proceed and `The database has been deleted` message is then displayed.
* `window.indexedDB.deleteDatabase(dbGlobals.name)` queues a delete request, which waits for all open connections to the database to close. This is why we must close (`dbGlobals.db.close()`) the database connection (if present) before deleting.
* As mentioned previously, `window.indexedDB.deleteDatabase()` might not be available in all browsers, which is why `requiredFeaturesSupported()` tests for its existence before creating a database.

Files are not the only objects you can store within an `IndexedDB` database. You can even store custom JavaScript objects by using [JSON.stringify()](http://go.microsoft.com/fwlink/p/?LinkID=330534) and [JSON.parse()](http://go.microsoft.com/fwlink/p/?LinkID=330535).
