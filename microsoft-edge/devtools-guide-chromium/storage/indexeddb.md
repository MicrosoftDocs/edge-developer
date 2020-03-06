---
title: View And Change IndexedDB Data With Microsoft Edge DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/06/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
<!-- Copyright Kayce Basques 

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->  





# View And Change IndexedDB Data With Microsoft Edge DevTools   

  

This guide shows you how to use [Microsoft Edge DevTools][MicrosoftEdgeDevTools] to view and change [IndexedDB][MDNIndexedDBAPI] data.  It assumes you are familiar with DevTools.  It also assumes you are familiar with IndexedDB.  If not, see [Using IndexedDB][MDNUsingIndexedDB].  

## View IndexedDB data   

1.  Click the **Application** tab to open the **Application** panel.  The **Manifest** pane usually opens by default.  
    
    > ##### Figure 1  
    > The Manifest pane  
    > ![The Manifest pane][ImageManifest]  

1.  Expand the **IndexedDB** menu to see which databases are available.  
    
    > ##### Figure 2  
    > The **IndexedDB** menu  
    > ![The IndexedDB menu][ImageIndexedDBMenu]  
    
    *   ![Database icon][ImageDatabaseIcon] `notes - https://mdn.github.io` represents a database, where `notes` is the name of the database and `https://mdn.github.io` is the origin that accesses the database.  
    *   ![Object Store icon][ImageObjectStoreIcon] `notes` is an object store.  
    *   **title** and **body** are [indexes][MDNUsingIndexedDBUsingIndex].  
    
    > [!NOTE]
    > **Known Limitation**  Third-party databases are not visible.  For example, if you use an `<iframe>` to embed an ad on your page, and your ad network uses IndexedDB, the IndexedDB data for your ad network is not be visible.  See [issue #943770][ChromiumIssue943770].  
    
1.  Click a database to see the origin and version number.  
    
    > ##### Figure 3  
    > The **notes** database  
    > ![The notes database][ImageIndexedDBDatabase]  
    
1.  Click an object store to see the key-value pairs.  
    
    > [!NOTE]
    > IndexedDB data does not update in real-time.  See [Refresh IndexedDB data](#refresh-indexeddb-data).  
    
    > ##### Figure 4  
    > The **notes** object store  
    > ![The notes object store][ImageIndexedDBObjectStore]  

    *   **Total entries** is the total number of key-value pairs in the object store.  
    *   **Key generator value** is the next available key.  This field is only shown when using [key generators][MDNBasicConceptsKeyGenerator].  

1.  Click a cell in the **Value** column to expand that value.  
    
    > ##### Figure 5  
    > Viewing an IndexedDB value  
    > ![Viewing an IndexedDB value][ImageIndexedBDValue]  
    
1.  Click an index, such as **title** or **body** in [Figure 6](#figure-6), to sort the object store according to the values of that index.  
   
    > ##### Figure 6  
    > An object store that is sorted alphabetically according to the **title** key  
    > ![Sorting an object store by an index][ImageIndexedDBIndex]  

## Refresh IndexedDB data   

IndexedDB values in the **Application** panel do not update in real-time.  Click **Refresh** ![Refresh][ImageReloadIcon] when viewing an object store to refresh the data, or view a database and click **Refresh database** to refresh all data.  

> ##### Figure 7  
> Viewing a database  
> ![Viewing a database][ImageIndexedDBDatabase2]  

## Edit IndexedDB data   

IndexedDB keys and values are not editable from the **Application** panel.  Since DevTools has access to page context, however, you may run JavaScript code within DevTools to edit IndexedDB data.  

### Edit IndexedDB data with Snippets   

[Snippets][JSSnippets] are a way to store and run blocks of JavaScript code within DevTools.  When you run a Snippet, the result is logged to the **Console**.  You may use a Snippet to run JavaScript code to edit an IndexedDB database.  

> ##### Figure 8  
> Using a Snippet to interact with IndexedDB  
> ![Using a Snippet to interact with IndexedDB][ImageIndexedDBSnippet]  

## Delete IndexedDB data   

### Delete an IndexedDB key-value pair   

1.  [View an IndexedDB object store](#view-indexeddb-data).  
1.  Click the key-value pair that you want to delete.  DevTools highlights it to indicate that it is selected.  
    
    > ##### Figure 9  
    > Selecting a key-value pair in order to delete it  
    > ![Selecting a key-value pair in order to delete it][ImageIndexedDBKeyValuePair]  

1.  Press the `Delete` key or click **Delete Selected** ![Delete Selected][ImageDeleteIcon].  
    
    > ##### Figure 10  
    > How the object store looks after the key-value pair has been deleted  
    > ![How the object store looks after the key-value pair has been deleted][ImageIndexedDBKeyValuePairDeleted]  

### Delete all key-value pairs in an object store   

1.  [View an IndexedDB object store](#view-indexeddb-data).  
    
    > ##### Figure 11  
    > Viewing an object store  
    > ![Viewing an object store][ImageIndexedDBObjectStore]  

1.  Click **Clear object store** ![Clear object store][ImageClearIcon].  

### Delete an IndexedDB database   

1.  [View the IndexedDB database](#view-indexeddb-data) that you want to delete.  
1.  Click **Delete database**.  
    
    > ##### Figure 12  
    > The **Delete database** button  
    > ![The Delete database button][ImageIndexedDBDatabase]  

### Delete all IndexedDB storage   

1.  Open the **Clear storage** pane.  

1.  Make sure that the **IndexedDB** checkbox is enabled.  

1.  Click **Clear site data**.  
    
    > ##### Figure 13  
    > The **Clear storage** pane
    > ![The Clear storage pane][ImageIndexedDBClearStorage]  

 



<!-- image links -->  

[ImageClearIcon]: images/clear-icon.msft.png  
[ImageDatabaseIcon]: images/database-icon.msft.png  
[ImageDeleteIcon]: images/delete-icon.msft.png  
[ImageObjectStoreIcon]: images/object-store-icon.msft.png  
[ImageReloadIcon]: images/reload-icon.msft.png  

[ImageManifest]: images/application-manifest-empty.msft.png "Figure 1: The Manifest pane"  
[ImageIndexedDBMenu]: images/application-storage-indexeddb.msft.png "Figure 2: The IndexedDB menu"  
[ImageIndexedDBDatabase]: images/application-storage-indexeddb-notes_db.msft.png "Figure 3: The notes_db database"  
[ImageIndexedDBObjectStore]: images/application-storage-indexeddb-notes_db-notes_os.msft.png "Figure 4: The notes_os object store"  
[ImageIndexedBDValue]: images/application-storage-indexeddb-notes_db-notes_os-edge-chromium.msft.png "Figure 5: Viewing an IndexedDB value"  
[ImageIndexedDBIndex]: images/application-storage-indexeddb-notes_db-notes_os-title.msft.png "Figure 6: Sorting an object store by an index"  
[ImageIndexedDBDatabase2]: images/application-storage-indexeddb-notes_db-notes_os-refresh-database.msft.png "Figure 7: Viewing a database"  
[ImageIndexedDBSnippet]: images/sources-snippets-indexeddb-output.msft.png "Figure 8: Using a Snippet to interact with IndexedDB"  
[ImageIndexedDBKeyValuePair]: images/application-storage-indexeddb-notes_db-notes_os2.msft.png "Figure 9: Selecting a key-value pair in order to delete it"  
[ImageIndexedDBKeyValuePairDeleted]: images/application-storage-indexeddb-notes_db-notes_os-delete-selected.msft.png "Figure 10: How the object store looks after the key-value pair has been deleted"  
[ImageIndexedDBObjectStore]: images/application-storage-indexeddb-notes_db-notes_os-clear-object-store.msft.png "Figure 11: Viewing an object store"  
[ImageIndexedDBDatabase]: images/application-storage-indexeddb-notes_db-delete-database.msft.png "Figure 12: The Delete database button"  
[ImageIndexedDBClearStorage]: images/application-clear-storage-indexeddb-clear-site-data.msft.png "Figure 13: The Clear storage pane"  

<!-- links -->  

[JSSnippets]: ../javascript/snippets.md "Run Snippets Of JavaScript On Any Page With Microsoft Edge DevTools"  
[MicrosoftEdgeDevTools]: /microsoft-edge/devtools-guide-chromium "Microsoft Edge \(Chromium\) Developer Tools"  

[ChromiumIssue943770]: https://crbug.com/943770 "943770 - DevTools: Show iframe IndexedDB databases - chromium - Monorail"  
[MDNBasicConceptsKeyGenerator]: https://developer.mozilla.org/docs/Web/API/IndexedDB_API/Basic_Concepts_Behind_IndexedDB#gloss_keygenerator "Key Generator - Basic Concepts | MDN"  
[MDNIndexedDBAPI]: https://developer.mozilla.org/docs/Web/API/IndexedDB_API "IndexedDB API | MDN"  
[MDNUsingIndexedDB]: https://developer.mozilla.org/docs/Web/API/IndexedDB_API/Using_IndexedDB "Using IndexedDB | MDN"  
[MDNUsingIndexedDBUsingIndex]: https://developer.mozilla.org/docs/Web/API/IndexedDB_API/Using_IndexedDB#Using_an_index "Using an index - Using IndexedDB | MDN"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/storage/indexeddb) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
