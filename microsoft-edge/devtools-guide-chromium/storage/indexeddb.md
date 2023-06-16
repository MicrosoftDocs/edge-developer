---
title: View and change IndexedDB data
description: How to view and change IndexedDB data with the Application panel and Snippets.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 05/04/2021
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
# View and change IndexedDB data

To view and change [IndexedDB](https://developer.mozilla.org/docs/Web/API/IndexedDB_API) data, use the **Application** tool.


<!-- ====================================================================== -->
## View IndexedDB data

1. In DevTools, click the **Application** tab to open the **Application** tool.  The **Manifest** pane usually opens by default.

   ![The Manifest pane](./indexeddb-images/storage-application-manifest-empty.png)

1. Expand the **IndexedDB** menu to review which databases are available.

   ![The IndexedDB menu](./indexeddb-images/storage-application-storage-indexeddb.png)

   * (![Database icon](./indexeddb-images/database-icon.png)) `notes - https://mdn.github.io` represents a database, where `notes` is the name of the database and `https://mdn.github.io` is the origin that accesses the database.

   * (![Object Store icon](./indexeddb-images/object-store-icon.png)) `notes` is an object store.

   *  **title** and **body** are [indexes](https://developer.mozilla.org/docs/Web/API/IndexedDB_API/Using_IndexedDB#Using_an_index).

   > [!NOTE]
   > **Known Limitation**  Third-party databases aren't visible.  For example, if you use an `<iframe>` to embed an ad on your page, and your ad network uses IndexedDB, the IndexedDB data for your ad network isn't visible.  See [issue #943770](https://crbug.com/943770).

1. Select a database, to see the origin and version number.

   ![The notes database](./indexeddb-images/storage-application-storage-indexeddb-notes_db.png)

1. Click an object store, to see the key-value pairs.

   > [!NOTE]
   > IndexedDB data doesn't update in real-time.  See [Refresh IndexedDB data](#refresh-indexeddb-data).

   ![The notes object store](./indexeddb-images/storage-application-storage-indexeddb-notes_db-notes_os.png)

   *  **Total entries** is the total number of key-value pairs in the object store.

   *  **Key generator value** is the next available key.  The field is only shown when using [key generators](https://developer.mozilla.org/docs/Web/API/IndexedDB_API/Basic_Concepts_Behind_IndexedDB#gloss_keygenerator).

1. Click a cell in the **Value** column to expand the value.

   ![View an IndexedDB value](./indexeddb-images/storage-application-storage-indexeddb-notes_db-notes_os-edge-chromium.png)

1. Click an index, such as **title** or **body** in the following figure, to sort the object store according to the values of that index.

   ![Sort an object store by an index](./indexeddb-images/storage-application-storage-indexeddb-notes_db-notes_os-title.png)


<!-- ====================================================================== -->
## Refresh IndexedDB data

IndexedDB values in the **Application** tool don't update in real-time.

*  To refresh the data, view an object store and then click **Refresh** (![Refresh](./indexeddb-images/reload-icon.png)).
*  To refresh all data, view a database and click **Refresh database**.

![View a database](./indexeddb-images/storage-application-storage-indexeddb-notes_db-notes_os-refresh-database.png)


<!-- ====================================================================== -->
## Edit IndexedDB data

IndexedDB keys and values aren't editable from the **Application** tool.  However, since DevTools has access to page context, you can run JavaScript code within DevTools to edit IndexedDB data.

### Edit IndexedDB data with Snippets

[Snippets](../javascript/snippets.md) are a way to store and run blocks of JavaScript code within DevTools.  When you run a Snippet, the result is logged to the **Console**.  You can use a Snippet to run JavaScript code to edit an IndexedDB database.

![Using a Snippet to interact with IndexedDB](./indexeddb-images/storage-sources-snippets-indexeddb-output.png)


<!-- ====================================================================== -->
## Delete IndexedDB data

### Delete an IndexedDB key-value pair

1. [View an IndexedDB object store](#view-indexeddb-data).

1. Click the key-value pair that you want to delete.  DevTools highlights it to indicate that it is selected.

   ![Click a key-value pair in order to delete it](./indexeddb-images/storage-application-storage-indexeddb-notes_db-notes_os2.png)

1. Press `Delete` or click **Delete Selected** (![Delete Selected](./indexeddb-images/delete-icon.png)).

   ![How the object store looks after the key-value pair has been deleted](./indexeddb-images/storage-application-storage-indexeddb-notes_db-notes_os-delete-selected.png)

### Delete all key-value pairs in an object store

1. [View an IndexedDB object store](#view-indexeddb-data).

   ![View an object store](./indexeddb-images/storage-application-storage-indexeddb-notes_db-notes_os-clear-object-store.png)

1. Click **Clear object store** (![Clear object store](./indexeddb-images/clear-icon.png)).

### Delete an IndexedDB database

1. [View the IndexedDB database](#view-indexeddb-data) that you want to delete.

1. Click **Delete database**.

   ![The Delete database button](./indexeddb-images/storage-application-storage-indexeddb-notes_db-delete-database.png)

### Delete all IndexedDB storage

1. Open the **Clear storage** pane.

1. Make sure that the **IndexedDB** checkbox is enabled.

1. Click **Clear site data**.

   ![The Clear storage pane](./indexeddb-images/storage-application-clear-storage-indexeddb-clear-site-data.png)


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/devtools/storage/indexeddb/) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools \& Lighthouse).

[![Creative Commons License](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
