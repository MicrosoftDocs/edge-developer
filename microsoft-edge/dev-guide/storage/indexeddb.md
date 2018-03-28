---
ms.assetid: 56d5d00d-287f-4ee0-8d40-dbe8bc871c66
description: Learn about how you can store structured data with the Indexed Database API (IndexedDB) and the changes introduced in Microsoft Edge.
title: Dev guide - IndexedDB
author: abbycar
ms.author: abigailc
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# IndexedDB

Microsoft Edge includes support for the [Indexed Database API (`IndexedDB`)](https://msdn.microsoft.com/library/hh772651). `IndexedDB` enables you to store structured data. Unlike cookies and DOM Storage, `IndexedDB` provides features that enable you to group, iterate, search, and filter JavaScript objects.

## Limits
Unlike with the earlier Internet Explorer `IndexedDB` implementation, Microsoft Edge  will not request user authorization to use more than 10 megabytes of space.

Windows 10 UWP apps using JavaScript are not subject to an IndexedDB storage limit. However, earlier *Windows Store apps using JavaScript* (Windows 8 and Windows 8.1 JavaScript apps) running on Windows 10 share their storage quotas with Microsoft Edge and are subject to the limits described in the table below.

Microsoft Edge considers the volume size in determining the per-domain and per-total limit on how much disk space can be used. The table below applies to both phone and desktop versions of Microsoft Edge.

Volume size | Per domain | Total limit
:---------- | :---------- | :-----------
Less than or equal to 8 GB | 10 MB | 50 MB
More than 8 GB up to 32 GB | 50 MB | 500 MB
More than 32 GB up to 128 GB | 250 MB | 4% of volume size
More than 128 GB | 500 MB | 4% or 20 GB (whichever is smaller)


## Asynchronous versus synchronous

The Indexed Database API specification defines two APIs: a synchronous API and an asynchronous one. Microsoft Edge supports the asynchronous API. As a result, database operations do not execute immediately; instead operations return request objects that are executed in the background. Consequently, `IndexedDB` is an event-driven API. You create requests and then define event handlers to respond to the success or failure of those requests.


## Common database operations

The following are some common database operations along with steps to accomplishing them:

Operation | Steps
:--------- | :-----------
Adding objects to an object store | To add objects to an object store, open the object store and call the [`add`](http://go.microsoft.com/fwlink/p/?LinkId=227774) method.
Updating a record object in an object store | To update a record object in an object store, use the [`put`](http://go.microsoft.com/fwlink/p/?LinkId=227760) method and set the key value of the record you want to replace. Be aware that this adds a new record if the key value does not already exist in the object store.
Updating a record object in a cursor | To update a record object in a cursor, use the [`update`](http://go.microsoft.com/fwlink/p/?LinkId=227761) method of the cursor. Be aware that this will create a new record if the original record has been deleted previously.
Accessing individual records in an object store | To access individual records in an object store: Open the object store and then use the [`get`](http://go.microsoft.com/fwlink/p/?LinkId=227762) method to return the object that corresponds to the key value. To retrieve a set of records in an object store, open the object store and then use the [`openCursor`](http://go.microsoft.com/fwlink/p/?LinkId=227763) method to obtain a cursor that lets you iterate through each record.
Filtering the records in an object store | Use a [key range](http://go.microsoft.com/fwlink/p/?LinkId=227770) to filter the records in an object store. This returns a cursor that you can iterate. If you want this cursor to present records in a different order, such as descending order or sorted by a common attribute value, pass the key range as a parameter to the `openCursor` method of an index. You can define a key range, open the object store, and then use the key range as a parameter to the `openCursor` method of the object store. You can also pen the object store, define a new or open an existing index for the object store, and then call the **openCursor** method on the index. Be aware that you can also pass a key range as an optional parameter to the `openCursor` method.
Deleting records from an object store or cursor | Use the [`delete`](http://go.microsoft.com/fwlink/p/?LinkId=227764) method to remove individual records from an object store or a cursor. Use the [`clear`](http://go.microsoft.com/fwlink/p/?LinkId=227775) method to delete all records from an object store.

## Creating transactions
All `IndexedDB` operations occur within the context of a [`IDBtransaction`](http://go.microsoft.com/fwlink/p/?LinkId=227755); this ensures the integrity of database activities between various requests, such as those initiated by separate windows or worker threads. If a transaction completes normally, changes made during the transactions are automatically committed (saved). If a transaction is stopped, changes are rolled back (reversed).

### Transaction types

Type | Description
:-------- | :--------
READ_ONLY | Allows operations that do not modify data.
READ_WRITE | Allows data to be read and modified. Blocks other **READ_WRITE** and **VERSION_CHANGE** transactions.
VERSION_CHANGE | Allows all operations, but blocks all other transactions. Object stores and indexes can only be created in the context when this transaction is active.

### Transaction examples
Requests can only be processed when transactions are active. The following example shows how to declare a transaction and then read data from an object store:

```javascript
  var oTx = db.transaction( "Objectstore1", IDBTransaction.READ_ONLY);
  oTx.oncomplete = handleTransactionComplete;
  oTx.onabort = handleTransactionAbort;
  oTx.onerror = handleTransactionError;  try {
    var objStore = otx.objectStore("ObjectStore1");    
    var req = objStore.get("AKeyValue");
    req.onsuccess = function( evt ) {
       doSomethingWithValue( evt.target.result );
    }
    req.onerror = handleRequestFailure;
  }
  catch (ex) {
    handleException( ex );
```

Transactions can also limit access to object stores within the transaction. For example, a **READ_WRITE** transaction prevents **VERSION_CHANGE** transactions. As a result, use transactions that are appropriate for your needs. For example, use **READ_ONLY** transactions to read object stores.

**VERSION_CHANGE** transactions allow you to create (or delete) object stores and indexes and are initiated using the [`setVersion`](http://go.microsoft.com/fwlink/p/?LinkId=227759) method, as shown in the following example:

```js
// In this example, showResults() is a function that displays messages to the user.
if ( oDB == null ) {
   showResults( "Can't update version; the database is not open." );
} else {
  var dbReq = oDB.setVersion( "1.0" );
  dbReq.onsuccess = createSchema;
  dbReq.onerror = function( evt ) {
     showResults ( "The transaction encountered an error: " +
                    evt.message );
  }
  dbReq.onabort = function( evt ) {
    showResults ( "The transaction was canceled." );
  }
  }
}
function createSchema(evt)
{
   var oTx = evt.target.result;
   oTx.oncomplete = function( evt ) {
      showResults( "Transaction complete." );
   }
   oTx.onabort = function( evt ) {
      showResults( "Transaction canceled." );
   }
   oTx.onerror = function( evt ) {
      showResults( "Transaction error: " + evt.message + "." );
   }
   var oObjStore = oDB.createObjectStore( "ObjectStore1" );
}
```
In this example, the [`onsuccess`](http://go.microsoft.com/fwlink/p/?LinkId=227757) event of the [`setVersion`](http://go.microsoft.com/fwlink/p/?LinkId=227759) request calls a function that creates object stores and indexes.


## Using requests to open a database
Microsoft Edge can use the `indexedDB` property to access supported features of the Indexed Database API spec.

> [!NOTE]
> For security reasons, support for the `indexedDB` property is limited to UWP apps and to webpages loaded using the "http://" or "https://" protocols. `"file://"` is also supported for local use.


For best results, use feature detection to access the IndexedDB API, as shown in the following example:
```js
var ixDB;
if ( window.indexedDB ) {
   ixDB = window.indexedDB;
}
```

### Opening a database
When you open a database, an [`IDBRequest`](https://msdn.microsoft.com/library/windows/apps/hh466030) object is returned; however, the request has not yet been processed. The object is used to track the results of the request, which will be known after the requested has been processed in the background. Use this object to define event handlers that react to the results of the request, as shown in the following example:
```javascript
var dbReq = ixDB.open( "Database1" );
dbReq.onsuccess = function( evt ) {
  oDB = evt.target.result;
};
```

Request objects support events such as [`onsuccess`](https://msdn.microsoft.com/library/windows/apps/hh466044) and [`onerror`](https://msdn.microsoft.com/library/windows/apps/hh466119). In the previous example, an inline function assigns the results of the request to a global variable that maintains the connection to the opened database. The result varies according to the request.

Request objects execute when they go out of scope; that is, when the current JavaScript block finishes.


## Local use
Microsoft Edge supports webpages loaded with a `"file://"` URI scheme. This allows developers accessing files from disk to use these APIs.

## API reference
[IndexedDB](https://msdn.microsoft.com/library/hh772651)


## Demos
[Audio mixer](https://developer.microsoft.com/en-us/microsoft-edge/testdrive/demos/audiomixer/)

## Specification
[Indexed Database API](https://www.w3.org/TR/IndexedDB/)
