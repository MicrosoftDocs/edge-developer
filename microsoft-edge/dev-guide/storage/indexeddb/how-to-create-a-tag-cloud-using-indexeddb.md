---
ms.assetid: d0fd1c4a-cdfc-4d10-9e37-39a998979098
description: Learn how to create a tag cloud using the Indexed Database (IndexedDB) API.
title: Dev guide - How to create a tag cloud using IndexedDB
author: abbycar
ms.author: abigailc
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# How to create a tag cloud using IndexedDB

Many websites organize their content using keywords, also known as tags. In addition, some sites create tag clouds that list the tags used in their site's content. Frequently-used tags are generally highlighted in some way, such as a different color or a larger font. When the user clicks a tag in the cloud, the site displays a list of the content associated with the tag. As a result, tag clouds provide a convenient mechanism for searching a site's content.

Imagine that you're creating a photo gallery and you want your visitors to be able to add custom titles, descriptions, and tags to your images. You also want to create a tag cloud that provides your visitors with a custom search experience, one based on their input.

This guide and it's examples will walk you though how to create a tag cloud using the [Indexed Database (IndexedDB) API](http://go.microsoft.com/fwlink/p/?LinkId=224519), which is a standard for storing data on a user's device. By utilizing this API and its objects, you'll be able to track images and tags.



## Determining database needs

In some respects, database projects are like the classic "chicken or the egg" question. You can't save data until you have a place to store it and you can't create the storage area until you understand what needs to be saved. In such cases, it helps to look at how the user might enter and update the data. We need to determine how users interact with the webpage to associate tags, define custom titles, and so on. After nailing this down, we're able to make a framework to determine data requirements.


### Gathering user input

When people visit your photo gallery, they'll view individual images in a webpage that includes a form for entering information about the image, as shown here:

```html
<!doctype html>
<html>
<head>

  <style type="text/css" src="gallery.css"></style>
  <script type="text/javascript" src="stdutils.js"></script>
  <script type="text/javascript" src="ixgallery.js"></script>

  <script type="text/javascript">
     document.addEventListener( "DOMContentLoaded", doPageSetup, false );
  </script>

</head>
<body>

   <div id="divDataForm"><form id="fImageDetails">
      <img id="iGalleryImage" src="images/default.jpg" />

      <label for="inImgTitle">Title:</label>
      <input id="inIImgTitle" name="newimage" type="text" /><br/>

      <label for="inImgDesc">Description:</label>
      <textarea id="inImgDesc"></textArea><br/>

      <label for="inImgTags">Tags (comma separated):</label>
      <input id="inImgTags" type="text" /><br/>

      <input type="submit" value="Save" />
      <input type="reset" value="Reset" />
   </form></div><br />

   <div id="divTagCloud"></div><br />
   <div id="divTagResults"></div>

</body>
</html>
```

In this example, the user is able to enter a custom title for the image, add a description, and associate tags with the image using a comma-delimited list. When saved, the data entered by the user is broken into two separate entities: a JavaScript object containing the details of the image (the filename, URL, title, and description) and an array containing the tags the user associated with the image.




Utility functions can be used to create these objects and to manage the relationship between the form and the underlying database objects.
This code snippet defines three functions:

```javascript
function collectFormData ( strImageURL ) {
// Gathers information from the form and packages it
// for the database.

   var d = document;
   var oImageDetails = { };
   oImageDetails.ImageTitle = d.getElementById( 'inImgTitle' ).value;
   oImageDetails.ImageDesc = d.getElementById( 'inImgDesc' ).value;
   oImageDetails.FileURL = d.getElementById( 'iGalleryImage' ).src;
   oImageDetails.FileName = reduceFilename( oImageDetails.FileURL );

   var sTagCDL = d.getElementById( 'inImgTags' ).value;
   var aImageTags = sTagCDL.split( /\s*,\s*/ );
   saveImageDetails( oImageDetails, aImageTags );
}

function updateFormData( oImageDetails, aImageTags ) {
// Updates the form with data passed through the parameters.

   var d = document;
   d.getElementById( 'inImgTitle' ).value = oImageDetails.ImageTitle;
   d.getElementById( 'inImgDesc' ).value = oImageDetails.ImageDesc;
   if ( aImageTags.length > 0 ) {
      d.getElementById( 'inImgTags' ).value = aImageTags.join( ', ' );
   }
}

function reduceFilename( sFullFilename ) {
// Given a URL, returns just the filename.
   var sResult = "";
   if ( sFullFilename != "" ) {
      var aTokens = sFullFilename.split( '/' );
      if ( aTokens.length > 0 ) {
         sRetval = aTokens[ aTokens.length - 1 ];
	     }
   }
   return sRetval;
}
```

The functions above are described in further detail in this table:

Function | Description
:----------- | :-------------
`collectFormData` | Gathers image details and places them into two separate objects:<ul><li>A JavaScript object that represents the individual details describing the image.</li><li>An array that collects the tags associated with the image.</li></ul>
`updateFormData` | Takes the details passed in the parameters and updates the form on the webpage with the appropriate information.
`reduceFilename` | A utility function that extracts the filename from a fully-qualified URL.

Other utility functions that will appear in this guide include functions that perform common JavaScript operations, such as error handling, user notification, feature detection, and so on as detailed below:

Function | Description
:----------- | :-------------
`getElementObject` | Uses the [**getElementById**](https://msdn.microsoft.com/library/ms536437(v=vs.85).aspx) method to obtain a reference to an element object using the value of the element's [**id**](https://msdn.microsoft.com/library/ms533880(v=vs.85).aspx) attribute.
`setTextContent`| Updates the [**textContent**](https://msdn.microsoft.com/library/ff974773(v=vs.85).aspx) property of an element object.
`updateResults` | Logs notification messages to the user.
`handleError` | A general purpose error and exception handler.
`handleRequestEvent` | A general purpose event handler.



After reviewing the code above, we can determine our database needs for the project. We need to:

* Store image details as objects containing attributes.
* Store an array of tags associated with an image.
* Locate a given image in the database and return its details.
* Locate a set of tags associated with an image.
* Return a list of all tags in the database.
* Return a list of all images associated with a given tag.



## Creating and opening IndexedDB objects

Now we need to create and open the database objects used to track tags associated with images in a photo gallery.
In order to create the objects to serve the database needs established in the [**Determining database needs**](#determining-database-needs) section, it's important to understand how **IndexedDB** manages data.


### An IndexedDB overview

The [Indexed Database (IndexedDB)](http://go.microsoft.com/fwlink/p/?LinkId=224519) specification defines an API for creating and managing database objects on a user's client device, whether that device is a PC running a web browser, a tablet running a UWP app using JavaScript, or another device.

In a traditional relational database management system (RDMS), data is grouped into sets of related values called *records*. Each record contains *fields* and each field contains a *value*. Fields share the same data type between records and all records contains the same set of fields. Records are collected into *tables* and tables can be organized by *indexes*, which sort data according to the values of fields defined by the index.

**IndexedDB** uses a similar, though slightly different approach. Records are JavaScript objects that define attributes that hold values. Records are collected into *object stores* and object stores can be sorted using indexes that sort records according to attributes shared by records in the object store.

While that sounds pretty similar, it's important to note that **IndexedDB** records don't have to share the same set of attributes. One record can have five attributes while another might have 30. However, all records in an object store must share at least one attribute in common, the *key path*. The key path is an attribute whose value uniquely identifies a record. This value is called the *key value* (or *key* for short).

The following **IndexedDB** objects meet the above needs:

Object | Description
:-----------| :----------
*ImageDetails* object store | Contains the individual details for each image (title, description, URL, and so on).
*IxImagesByURL* index | Sorts images by their URLs. In theory, URLs uniquely identify an image, in part because two different images cannot share the same URL. In practice, however, different URLs can refer to the same image. As a result, the *ImageDetails* object store use a different key.
*IxImagesByName* index | Sorts images by their filename.
*ImageTags* object store | Which contains the individual tags associated with a given image, along with the key value of the details for the image that the tag is associated with.
*IxTagsByWord* index | Sorts the ImageTags object store alphabetically by the tag.
*IxTagsByImage* index | Sorts the *ImageTags* object store according to the *ImageID* saved with the tag.

To create these objects, it's necessary to create a database, which is a container for a related set of objects, generally those used in an application. To do that, it's necessary to access **IndexedDB** features.


### Accessing IndexedDB features

Use the [**window.indexedDB**](https://msdn.microsoft.com/library/hh772512(v=vs.85).aspx) property to access **IndexedDB** features. For best results, use feature detection, as shown in the following code snippet:

```javascript
var oIndexDB = null;
  if ( window.indexedDB ) {
     oIndexDB = window.indexedDB
  }
  if ( oIndexDB == null ) {
     handleError();
  }
```

This code includes additional error-checking in case the **IndexedDB** property is not available. There is no guarentee that the property is available. Plan accordingly and use effective error handling techniques to manage the consequences.

For security and performance reasons, **IndexedDB** is supported only for UWP apps using JavaScript and for webpages displayed in Microsoft Edge using the "http" or "https" protocols.
For local use, the "file://" URI scheme is also supported.



### Opening a database


**IndexedDB** uses database objects to serve as a container for object stores and indexes. To open a database, use the `open` method of the **IndexedDB** property, as shown here:

```javascript
try {

  // hDB is a global variable.
  hDb = null;
  if (window.indexedDB) {

    var req = window.indexedDB.open( "IxImageGallery", 1.0 );

    req.onsuccess = function(evt) {
       hDB = evt.target.result;
    }      

    req.onerror = failureHandler();
    req.onblocked = blockedHandler();

    req.onupgradeneeded = function(evt) {
       createDatabaseObjects( evt.target.result );
    }
  } catch( ex ) {
    handleException( ex );
  }
 ```

As implemented by Internet Explorer 10, **IndexedDB** is an asynchronous API. Instead of receiving results from a statement, you receive a *request object*. You then define event handlers for the request object to respond to different types of results. If the request succeeds, a [**success**](https://msdn.microsoft.com/library/Hh772617) event is fired. If a problem occurs, an [**error**](https://msdn.microsoft.com/library/Hh972900) event fires.

In this snippet, the value returned by the `open` method is an [**IDBOpenDBRequest**](https://msdn.microsoft.com/library/Hh972899) object. When the database is successfully opened, a handle to the open database is returned as the [**target.result**](https://msdn.microsoft.com/library/Hh772623) property of the event object passed to the success event handler.

Additional handlers for different request results are also defined. If an error prevents the database from opening, the `failureHandler` function is called. Likewise, the `blockedHandler` function is called when the open request is blocked by another transaction against the database. (A transaction will be blocked if there is an open connection to the database and the other connection uses a lower version number.)


The [**upgradeneeded**](https://msdn.microsoft.com/library/Hh772611) event allows you to create database objects, such as object stores and indexes; it's triggered when you open a database with a higher version number than the one previously used to open the database. If the database doesn't exist, it's created and then opened. As with the success handler, the event object passed to the **upgradeneeded** event also includes a handle to the database in the **target.result** property. The anonymous function in this example passes that handle to a function called `createDatabaseObjects.`

You can only create object stores and indexes in the context of an [**upgradeneeded**](https://msdn.microsoft.com/library/Hh772611) event, which occurs in the context of a "version change" transaction. A *transaction* is a group of operations that must all succeed or they all fail.


You'll also notice that the **upgradeneeded** event doesn't refer to the global variable when calling the function. Because the **upgradeneeded** event fires before the **success** event, the global variable has not yet been assigned the database handle. Attempting to access the global variable would generate an exception and prevent the database from being created or opened.

### Creating object stores and indexes

In the previous snippet, the [**upgradeneeded**](https://msdn.microsoft.com/library/Hh772611) event calls a function designed to create the object stores and indexes associated with the tag cloud, shown here:

```javascript
function createDatabaseObjects( dbHandle ) {

  try {

   if ( dbHandle == null ) {
      updateResults( "Can't create database objects; the database is not open." );
   } else {

      var oOptions = { keyPath : "RecordID", autoIncrement : true };
      var oStore = dbHandle.createObjectStore( "ImageDetails", oOptions );

      var oIxOptions = { unique: false, multientry: false };
      oStore.createIndex( "IxImagesByName", "FileName", oIxOptions );
      oStore.createIndex( "IxImagesByURL", "FileURL", oIxOptions );

      oStore = dbHandle.createObjectStore( "ImageTags", oOptions );
      oStore.createIndex( "IxTagsByWord", "TagWord", oIxOptions );
      oStore.createIndex( "IxTagsByImage", "ImageID", oIxOptions );

 } catch (ex) {
     handleError(ex.message);
 }
}
```

This function creates two object stores and four indexes designed to handle the database requirements. The keys for the object stores are auto-incrementing values that will be generated for a record when it's added to the object store. The key path for each object store is called *RecordID*. When a record is added to the *ImageDetails* object store, for example, a new value will be assigned to the *RecordID* attribute for that record. This value will be used to assign individual tags to specific images.

In general, the URL associated with an image is considered unique; that is, only one image is allowed for each unique URL. Because of this, it might be tempting to associate the image's URL with each tag. While it is true that no two images share the same URL, multiple URLs might point to the same image.

Instead, a unique ID value is calculated for each image details record and that ID is associated with each tag assigned to the image. This allows multiple tags to be efficiently associated with an image and prevents maintenance problems if the image's URL changes.

The design of your object stores and indexes is critical for the success of your **IndexedDB** projects. If you're familiar with relational database concepts, you'll find that practices such as [normalization](http://go.microsoft.com/fwlink/p/?LinkID=330656) can be used effectively in **IndexedDB** applications.



## Managing data with transactions

A *transaction* is a group of related operations that either all succeed or all fail. In order to open **IndexedDB** object stores and use them to retrieve and save data, you need an understanding of all **IndexedDB** data operations that occur within the context of a transaction.

### Understanding transactions

**IndexedDB** uses transactions to group related operations together. There are different types of transactions, and different transaction types allow (and block) certain activities:

Transaction type | Description
:-----------| :----------
Read-only | Allows data to be read, but not modified. They don't block (prevent) other transactions. You can fetch (retrieve) data from an object store, but you cannot change it.
Read-write | Allows data to be read and modified, but they don't allow database objects (such as object stores and indexes) to be created or deleted. In addition, **read-write** transactions block other read-write transactions; however, they allow **read-only** transactions.
Version change | Allows you to create and modify database objects, including object stores, indexes, and data. Version change transactions block all other transactions.

When a transaction is complete, the data is saved (or committed). Keep in mind that this happens when all requests created within the scope of the transaction are complete. As you'll see, it's possible to create a number of requests during a transaction

To create **read-write** or **read-only** transactions, use the transaction method of a database object.

**Version change** transactions are created only when you create a database or when you open a database using a higher version number than was previously used.

Transactions can fail. If a request triggers an exception or an error occurs, the transaction is canceled (or aborted). When this happens, all changes made during the transaction are canceled (rolled back).


### Writing data with transactions

You can add data to an object store during a version change event or during a read/write transaction, as shown here:

```javascript
function saveRecord( oNewRecord ) {

   if ( hDB == null ) {
      updateResults( "Can't save data; the database is not open." );
   } else {

     var hTransaction = hDB.transaction( ""ObjectStoreName", "readwrite" );
     var hObjectStore = hTransaction.objectStore( "ObjectStoreName" );
     var hImageReq = hObjectStore.put( oNewRecord );
     hImageReq.onsuccess = handleRequestEvent;
     hImageReq.onerror = handleRequestEvent;
}
```

The [**put**](https://msdn.microsoft.com/library/Hh772604) method updates a record if it already exists in the object store, as determined by the key value in the key path. If the record doesn't exist in the object store, it will be added.

If you call the **put** method with an object that doesn't include a value for the key path, a DataError exception is raised and the transaction is canceled. As a result, it might be necessary to determine if the record exists in the object store and, if so, to copy the key value to the replacement record.

To illustrate, imagine that the *ImageDetails* object store uses an auto-increment index as a key, an index value that is automatically generated when the record is first saved.

Also, assume that you use the image gallery form to update the description of the image. This next example shows how to use an index to ensure that the record containing the new description replaces the record containing the previous description.

```javascript
if ( hDB == null ) {
      updateResults( "Can't save data; the database is not open." );
   } else {

     var hTransaction = hDB.transaction( "ImageDetails", "readwrite" );
     var hObjectStore = hTransaction.objectStore( "ImageDetails" );

     var oNewRecord = getNewRecord();
     var sFilename = oNewRecord.FileName;
     var hIndex = hObjectStore.index( "IxImagesByName" );
     var hIndexReq = hIndex.openCursor( sFilename );

     hIndexReq._NewRecord = oNewRecord;
     hIndexReq.onerror = handleRequestEvent;
     hIndexReq.onsuccess = function( evt ) {

        var oRecord = this._NewRecord ];
        var oTarget = evt.target;
        if ( oTarget.result != null ) {
           var sKeyPath = oTarget.source.objectStore.keyPath;
           oRecord[ sKeyPath ] = oTarget.result.primaryKey;
        }
        var hRecordReq = oTarget.source.objectStore.put( oRecord );
        hRecordReq.onerror = handleRequestEvent;
        hRecordReq.onsuccess = handleRequestEvent;
     }
   }
```

In this snippet, the filename associated with an image is considered unique, meaning only one record is allowed for each unique filename. In order to update existing records, it's therefore necessary to determine whether a record update is new to the database or should replace an existing record. If the latter, the key value of the original record needs to be added to the replacement record.

As a result, it's necessary to search the image details for the filename associated with the new record. The search is performed by opening a cursor that contains only records with the same filename as the one associated with the new record. When the success event is triggered for the *hIndexReq* request, the search is complete.

Search results are reported in the [**target.result**](https://msdn.microsoft.com/library/Hh772623) property of the object passed to the [**success**](https://msdn.microsoft.com/library/Hh772617) event handler. This property is undefined when no matches are found by the search. When there is a match, the cursor will only contain one record because the filename is unique for this example. This is the record that the new record replaces.

An attribute is then added to the new record. The name of the attribute is set to the key path of the original object store and the value is set to the [**primaryKey**](https://msdn.microsoft.com/library/Hh772464) value returned by the search.

If the search doesn't find any matches, the new record is added to the object store. Because the key path is an auto-increment key, it's not necessary to add the key path attribute to new records. The new key is calculated automatically when the record is added to the object store.

As you can see, the composition of your object stores and indexes directly impacts the amount of work needed to manage records effectively. In this case, the use of unique indexes and auto-incrementing keys requires careful record management. If you receive DataError or ConstraintError exceptions when trying to add or update records, review the attributes of your records and ensure their values are appropriate for the object store and its indexes.

### Record by record actions using IndexedDB

Sometimes the complexity of a database transaction isn't obvious until later in the project. For example, it's very straightforward to add the first set of tags associated with an image, as shown here:

```javascript
var aImageTags = getImageTags();
   var iImageID = getImageID();

   var hTransaction = hDB.transaction( "ImageTags", "readwrite" );
   var hObjectStore = hTransaction.objectStore( "ImageTags" );
   for ( var iArrayIndex = 0; iArrayIndex < ( iArraySize ); iArrayIndex++ ) {

      var oRecord = { imageid : iImageID,
                      tag : aImageTags[ iArrayIndex ] };
      var hRequest = hObjectStore.put( oRecord );
      hRequest.onsuccess = handleRequestEvent;
      hRequest.onerror = handleRequestEvent;
   }
```

However, when the user chooses to update the tags associated with an image, perhaps by adding a new tag or removing one, the process becomes more complicated.

The list of new tags needs to be compared to the list of older (previous) tags. Specifically:

* New tags that aren't in the list of older tags need to be added.
* Older tags that aren't in the new list need to be deleted.
* Tags in both lists can be ignored.

To determine the tags associated with a given image (the older tags), use an index to open a cursor containing the tags for a given *IndexID* value, as shown here:

```javascript
   var aNewTags = getNewTags();
   var iImageID = getImageID();
   var hTransaction = hDB.transaction( "ImageTags", "readwrite" );
   var hObjectStore = hTransaction.objectStore( "ImageTags" );
   var hIndex = hObjectStore.index( "IxTagsByID" );
   var hIndexReq = hIndex.openCursor( iImageID );
   hIndexReq.onerror = handleRequestEvent;
   hIndexReq.onsuccess = function( evt ) {
      var oCursor = evt.target.result;
      if (oCursor) {
         doSomething( oCursor.value );
         oCursor.continue();
      }
   }
```

When the [**success**](https://msdn.microsoft.com/library/Hh772617) event is triggered for the *hIndexReq* object, the [**target.result**](https://msdn.microsoft.com/library/Hh772623) property of the object passed to the event (*evt* in this example) points to a cursor pointing to the first record matching the *IndexID*.

When you call the [**continue**](https://msdn.microsoft.com/library/Hh772452) method for this cursor, another **success** event is triggered, however, the cursor now points to the next matching record. In effect, this cursor triggers a **success** event for each tag previously associated with the image. The new tags are listed in the *aNewTags* array.

To reconcile the two lists, the old tags in the cursor are compared to the new tags in the array.

* If an old tag doesn't appear in the array, it's removed from the object store.
* If an old tag appears in the array, it's removed from the array.
* When all the old tags are processed, the new tags that remain in the array are added to the object store.

This code snippet shows the complete process:

```javascript
var aNewTags = getNewTags();
   var iImageID = getImageID();

   var hTransaction = hDB.transaction( "ImageTags", "readwrite" );
   var hObjectStore = hTransaction.objectStore( "ImageTags" );
   var hIndex = hObjectStore.index( "IxTagsByID" );

   var hRequest = hIndex.openCursor( iImageID );
   hRequest._LocalTags = aNewTags;
   hRequest._ImageID = iImageID;
   hRequest.onerror = handleRequestEvent;
   hRequest.onsuccess = function( evt ) {

      var oCursor = evt.target.result;
      if ( oCursor ) {

         var sTag = oCursor.value.name;
         var iIndexNo = this._LocalTags.indexOf( sTag );
         if ( iIndexNo == -1 ) {
            var hDelReq = oCursor.source.objectStore.delete( oCursor.primaryKey );
            hDelReq.onsuccess = handleRequestEvent;
            hDelReq.onerror = handleRequestEvent;
         } else {
            this._LocalTags[ iIndexNo ] = "";   
         }
         oCursor.continue();

      } else {

           // add remaining tags to objectstore.
           for (var iIndex = 0; iIndex < this._LocalTags.length; iIndex++) {
              var sNewTag = this._LocalTags[ iIndex ];
              if ( sNewTag != "" ) {
                 var oNewTag = { indexid : this_ImageID,
                                 tagword : sNewTag };
                 var reqTagAdd = evt.target.source.objectStore.add( oNewTag );
                 reqNewAdd.onsuccess = handleRequestEvent;
                 reqNewAdd.onerror = handleRequestEvent;
              }
           }
        }
     }
```

Notice that the *imageID* and the new tag array is passed to each new request as custom properties defined on the request object. Because **IndexedDB** is an asynchronous API, there's no guarantee that requests are processed in the same scope of as the block making the request. As a result, you cannot rely on the variables declared inside the block making the request.



### Working with multiple object stores

When you reviewed the image gallery webpage shown in an earlier example, you might have noticed that a function called `doPageSetup` was registered to the [**DOMContentLoaded**](https://msdn.microsoft.com/library/Hh869434) event. This function retrieves the previously-saved details for the image displayed in the webpage, if any. To do so, a read-only transaction collects the details and then passes them to the function that updates the form, as shown here:

```javascript
function doPageSetup() {
   var oImage = document.getElementById( 'iGalleryImage' );
   var sFilename = reduceFilename( oImage.src );
   getImageDetails( sFilename );
}

function getImageDetails( sFilename ) {
   if ( hDB == null ) {
      hDB = openImageDatabase();
   } else {

     var hTransaction = hDB.transaction( [ "ImageDetails", "ImageTags" ], "readonly" );
     var hDetails = hTransaction.objectStore( "ImageDetails" );
     var hIdxImage = hDetails.index( "IxImagesByName" );
     var hImageReq = hIdxIndex.get( sFilename );
     hRequest.onsuccess = function( evt ) {

        var oDetails = evt.target.result;
        if ( oDetails ) {

        // collect image details
        oDetails.ImageID = oDetails.primaryKey;
        oDetails.ImageTitle = oDetails.value.ImageTitle;
        oDetails.ImageDesc = oDetails.value.ImageDesc;

        var hTags = evt.target.transaction.objectStore( "ImageTags" );
        var hIdxTags = hTags.index( "IxTagsByImage" );
        var hTagsReq = hIdxTags.openCursor( oDetails.ImageID );
        hTagsReq._imageDetails = oDetails;
        hTagsReq._imageTags = [];
        hTagReq.onsuccess = function( evt ) {

           var oCursor = evt.target.result;
           if (oCursor) {
             this._imageTags[ this.imageTags.length ] = oCursor.value.TagWord;
           } else {
              updateFormData( this._imageDetails, this._imageTags );
           }
        }
     }
  }
}
```

Because the details and the tags are stored in separate object stores, the transaction method is passed an array containing the names of both object stores.

If you attempt to open an object store that is not associated with a transaction, it triggers a NotFoundError exception, which in turn cancels the transaction.

This example uses the image filename and an index to obtain the details from the *ImageDetails* object store. When the details are returned, they're collected into an object and a new request collects the tags from the *ImageTags* object store. Individual tags are saved in an array. As with earlier examples, custom request properties ensure that the data is passed to each new request.

When the tags have been collected, the values in the custom request properties are passed to the function that updates the form on the webpage.
Now that the database contains tags, it's possible to create the tag cloud and present it to the user.

## Creating and using a tag cloud

A *tag cloud* is a list of tags styled to reflect the frequency of their use. Popular tags are highlighted in some way, perhaps by being displayed in a larger font size than less frequently used tags. Here you learn how to collect the tags, count them, and then use the tag cloud as a way to search the photo gallery.


### Retrieving and summarizing the tags

Transactions are the key to getting to data stored in **IndexedDB** object stores, and indexes allow you to sort the data. The following snippet shows how to use the *IdxTagByWord* index to retrieve the tags and count how many times they are used:

```javascript
   oTagWords = { };
   var hTransaction = hDB.transaction( "ImageTags", "readonly" );
   var hObjectStore = hTransaction.objectStore( "ImageTags" );
   var hIdxWords = hObjectStore.index( "IxTagsByWord" );
   var hRequest = hIdxWords.openCursor();

   hRequest.onsuccess = function( evt ) {

      var oCursor = evt.target.result;
      if ( oCursor ) {
         var sTagWord = oCursor.value.TagWord;
         if ( sTagWord in oTagWords ) {
              oTagWords[ sTagWord ]++;
         } else {
              oTagWords[ sTagWord ] = 1;
         }
         oCursor.continue();
      } else {
         writeTagCloud( oTagWords );
      }
   }
```

In this example, the *IxTagsByName* index opens a cursor on the *ImageTags* object store. Because the index is organized by the *TagWord* field, the cursor sorts the tags alphabetically. This means that all uses of a given tag are grouped together.

The tag associated with each record is examined; if the tag has not been seen before, it's added as an attribute of the *oTagWords* object. If the tag has been seen previously, the value of the corresponding attribute is incremented by one.

When each record has been examined, the cursor is set to null and the *oTagWords* object contains the results. Each attribute corresponds to a tag in the database and the value of that attribute is the total number of times the tag is used. After the cursor goes out of scope, the results are passed to a function that creates the tag cloud.

### Creating the tag cloud

To create the tag cloud, a [**span**](https://msdn.microsoft.com/library/ms535895) element is created for each tag; the **span** element is then appended as a child node of a [**div**](https://msdn.microsoft.com/library/ms535240) element designed to display the tag cloud, as shown here:

```javascript
function writeTagCloud( oTagWords );
{
try
   var oSpace = document.createTextNode( " " );
   var oCloud = getElementObject( "divTagCloud" );

   // Clear any previous contents.
   while ( oCloud.hasChildNodes() ) {
      oCloud.removeChild( oCloud.childNodes[ 0 ] );
   }

   // Create and add span elements for each tag
   for (var sTagAttr in oTagWords )
   {   
      var oTagElement = document.createElement( "span" );
      oTagElement.textContent = sTagAttr;
      oTagElement.className = getTagStyle(oTagWords[ sTagAttr ]);
      oTagElement.addEventListener( "click", showTagImages, false );
      oCloud.appendChild( oTagElement );

      // Add white space between each span.
      oCloud.appendChild( oSpace.cloneNode() );
   }
 } catch (ex) {
     handleError( ex.message );
 }
}

function getTagStyle( iTagCount ) {
   var sClassName;
   if ( iTagCount > 40 ) { sClassName = "tagSize5"; } else
   if ( iTagCount > 30 ) { sClassName = "tagSize4"; } else
   if ( iTagCount > 20 ) { sClassName = "tagSize3"; } else
   if ( iTagCount > 10 ) { sClassName = "tagSize2"; } else
   sClassName = "tagSize1";
   return sClassName
}
```

Each span element is assigned a style based on the number of times the tag appears in the database. In addition, an event handler is assigned to the click event of each span element. A space is added between each **span** element to ensure that the tags will wrap naturally inside the *divTagCloud* container.

The assignment of the style depends on the application and the expected number of tags. In this example, five styles are available for highlighting heavily used tags. New styles are used for every ten uses of a given tag, up to a maximum of 40.

The styles can be fairly simple, as shown in the following example:

```css
  #divTagCloud {
     border : 1px solid #000000;
  }

  #divTagCloud span { padding : 2px; }
  .tagSize1 { font-size : x-small; }
  .tagSize2 { font-size : small; }
  .tagSize3 { font-size : medium; }
  .tagSize4 { font-size : large; }
  .tagSize5 { font-size : x-large; }
```

### Using the tag cloud to search for images
When the tag cloud was generated, an event handler was added to the [**span**](https://msdn.microsoft.com/library/ms535895) element representing each tag. This event handler uses the selected tag to create a list of links to images associated with that tag.

To determine the tag itself, the [**textContent**](https://msdn.microsoft.com/library/Ff974773) property of the **span** element is extracted using the event object passed to the event handler.

This value is then combined with the *IdxTagsByWord* index to determine the matching images. After the matching images have been located, an [**anchor**](https://msdn.microsoft.com/library/ms535173) (link) object is created using the details from the database.

This code snippet shows the entire process:

```javascript
function showTagImages( evt ) {

 try {
   if ( hDB == null ) {
      updateResults( "Can't show results; the database is not open." );
   } else {


     // Clear previous results and create new list for results
     var oResults = getElementObject( "divTagResults" );
     while ( oResults.hasChildNodes() ) {
              oOResults.removeChild( oResults.childNodes[ 0 ] );
     }
     var oList = document.createElement( "ul" );
     oResults.appendChild( oList );

     // Grab the selected tag from the object that generated the event.
     oTagObject = evt.target;
     var sTagWord = oTagObject.textContent;
     // Find the IDs of the images using the selected tag.
     var hTransaction = hDB.transaction( [ "ImageDetails", "ImageTags" ], "read" );
     var hObjectStore = hTransaction.objectStore( "ImageTags" );
     var hIndex = hObjectStore.index( "IxTagsByWord" );

     var hRequest = hIndex.openCursor( sTagWord );
     hResult._parentList = oList;
     hRequest.onerror = handleRequestEvent;
     hRequest.onsuccess = function( evt ) {

        var oCursor = evt.target.result;
        if ( oCursor ) {

           // For each matching ID, locate the corresponding image record.
           hImageStore = hTransaction.objectStore( "ImageDetails", "readonly" );
           hDetails = hImageStore.index( "IxImagesByID" );
           hReqImage.openCursor( oCursor.value.ImageID );
           hReqImage._parentList = this._parentList;
           hReqImage.onerror = handleRequestEvent;
           hReqImage.onsuccess = function( evt ) {

              // Now that we have the image details, create an anchor (link)
              // element and a list item, and then add them to the list.
              var oCursor = evt.target.result;
              if ( oCursor ) {

              var oRecord = oCursor.value;
              var oListElement = document.createElement( "li" );
              var oLinkElement = document.createElement( "a" );

              // Base the target URL on the current page
              var oLocation = window.location;
              var sTarget = oLocation.protocol + "//" +
                             oLocation.host + oLocation.pathname;
              sTarget += "?newimage=" + oRecord.FileName;


              oLinkElement.textContent = oRecord.ImageTitle;
              oLinkElement.href = sTarget;
              oListElement.appendChild( oLinkElement );
              this._parentList.appendChild( oListElement );
            }
         }
      }    
   }
} catch (ex) {
     handleError( "List Results Exception: " + ex.message);
 }
}
```

A number of tasks are performed here:

* The result display area (*divTagResults*) is cleared of any child elements that might exist from a previous use. A new list object is created and added to the display area.
* The selected tag is used to open a cursor on the *ImageTags* object store; this index limits the set of records where the *TagWord* attribute matches the selected tag. A handle to the new list is passed as a custom request property.
* When the cursor is opened, the *ImageID* associated with each matching result opens the corresponding record in the *ImageDetails* object store. A handle to the new list is passed as a custom request property.
* When the image details for each matching image are returned, they are used to create an [**li**](https://msdn.microsoft.com/library/ms535847) element and an **anchor**(or link) element; these objects are added to the new list using the custom request property.
* The target of the **anchor** element, (specified in the [**href**](https://msdn.microsoft.com/library/Cc848861) property) is the webpage running the script; however, the filename of the target image is added as a query variable.

When all requests have completed, the display area contains an unordered list of [**anchor**](https://msdn.microsoft.com/library/ms535173) elements that display links to the images associated with the selected tag.


### Loading the selected image

If the user clicks a link in the newly assembled list of matches, the page is reloaded with a query variable that contains the filename of the selected image.

The [**Creating and opening indexedDB objects**](#creating-and-opening-indexeddb-objects) section described the `doPageSetup` function, which is called when the [**DOMContentLoaded**](https://msdn.microsoft.com/library/Hh869434) event is triggered. A few simple changes allows this function to load the requested image using the query variable, as shown in the following example:

```javascript
function doPageSetup() {

   var sFilename == "";
   if ( document.location.search. != "" ) {
      var sSearchVal = document.location.search.subString(1);
      var aTokens = sSearchVal.split( "=" );
      var iIndex = aTokens.indexOf( "newimage" );
      if ( iIndex != -1 ) {
         sFilename = aTokens[ iIndex ];
      }

   var oImage = document.getElementById( 'iGalleryImage' );
   if ( sFilename == "" ) {
      sFilename = reduceFilename( oImage.src );
   } else {
      // assume images are stored in a child directory named 'images'
      oImage.src = 'images/' + sFilename;
   }

   getImageDetails( sFilename );
}
```

The revised version uses basic string parsing to create an array of tokens passed as the query string. The resulting array is searched for the query variable that specifies a new image (*newimage*). If this variable is not found, details are retrieved for the current image.

If the variable is found, the filename passed with the variable is assigned to the [**src**](https://msdn.microsoft.com/library/Dd347029) property of the gallery image in the webpage and details for the new image are retrieved.


## Related topics
[IndexedDB API Reference](https://msdn.microsoft.com/library/Hh772651)

[Indexed Database (IndexedDB) specification](http://go.microsoft.com/fwlink/p/?LinkId=224519)
