---
description: How to view and change IndexedDB data with the Application panel and Snippets.
title: View and change IndexedDB data with Microsoft Edge DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/04/2021
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
# View and change IndexedDB data with Microsoft Edge DevTools

This guide shows you how to use [Microsoft Edge DevTools](../../devtools-guide-chromium/index.md) to view and change [IndexedDB](https://developer.mozilla.org/docs/Web/API/IndexedDB_API) data.  It assumes you are familiar with DevTools.  It also assumes you are familiar with IndexedDB.  If not, navigate to [Using IndexedDB](https://developer.mozilla.org/docs/Web/API/IndexedDB_API/Using_IndexedDB).


<!-- ====================================================================== -->
## View IndexedDB data

1.  Choose the **Application** tab to open the **Application** tool.  The **Manifest** pane usually opens by default.

    :::image type="complex" source="../media/storage-application-manifest-empty.msft.png" alt-text="The Manifest pane" lightbox="../media/storage-application-manifest-empty.msft.png":::
       The **Manifest** pane
    :::image-end:::

1.  Expand the **IndexedDB** menu to review which databases are available.

    :::image type="complex" source="../media/storage-application-storage-indexeddb.msft.png" alt-text="The IndexedDB menu" lightbox="../media/storage-application-storage-indexeddb.msft.png":::
       The **IndexedDB** menu
    :::image-end:::

    *   (![Database icon](../media/database-icon.msft.png)) `notes - https://mdn.github.io` represents a database, where `notes` is the name of the database and `https://mdn.github.io` is the origin that accesses the database.
    *   (![Object Store icon](../media/object-store-icon.msft.png)) `notes` is an object store.
    *   **title** and **body** are [indexes](https://developer.mozilla.org/docs/Web/API/IndexedDB_API/Using_IndexedDB#Using_an_index).

    > [!NOTE]
    > **Known Limitation**  Third-party databases are not visible.  For example, if you use an `<iframe>` to embed an ad on your page, and your ad network uses IndexedDB, the IndexedDB data for your ad network is not be visible.  Navigate to [issue #943770](https://crbug.com/943770).

1.  Choose a database to review the origin and version number.

    :::image type="complex" source="../media/storage-application-storage-indexeddb-notes_db.msft.png" alt-text="The notes database" lightbox="../media/storage-application-storage-indexeddb-notes_db.msft.png":::
       The **notes** database
    :::image-end:::

1.  Choose an object store to review the key-value pairs.

    > [!NOTE]
    > IndexedDB data does not update in real-time.  Navigate to [Refresh IndexedDB data](#refresh-indexeddb-data).

    :::image type="complex" source="../media/storage-application-storage-indexeddb-notes_db-notes_os.msft.png" alt-text="The notes object store" lightbox="../media/storage-application-storage-indexeddb-notes_db-notes_os.msft.png":::
       The **notes** object store
    :::image-end:::

    *   **Total entries** is the total number of key-value pairs in the object store.
    *   **Key generator value** is the next available key.  The field is only shown when using [key generators](https://developer.mozilla.org/docs/Web/API/IndexedDB_API/Basic_Concepts_Behind_IndexedDB#gloss_keygenerator).

1.  Choose a cell in the **Value** column to expand the value.

    :::image type="complex" source="../media/storage-application-storage-indexeddb-notes_db-notes_os-edge-chromium.msft.png" alt-text="View an IndexedDB value" lightbox="../media/storage-application-storage-indexeddb-notes_db-notes_os-edge-chromium.msft.png":::
       View an **IndexedDB** value
    :::image-end:::

1.  Choose an index, such as **title** or **body** in the following figure, to sort the object store according to the values of that index.

    :::image type="complex" source="../media/storage-application-storage-indexeddb-notes_db-notes_os-title.msft.png" alt-text="Sort an object store by an index" lightbox="../media/storage-application-storage-indexeddb-notes_db-notes_os-title.msft.png":::
       Sort an object store by an index
    :::image-end:::


<!-- ====================================================================== -->
## Refresh IndexedDB data

IndexedDB values in the **Application** tool do not update in real-time.  Choose **Refresh** (![Refresh](../media/reload-icon.msft.png)) when viewing an object store to refresh the data, or view a database and choose **Refresh database** to refresh all data.

:::image type="complex" source="../media/storage-application-storage-indexeddb-notes_db-notes_os-refresh-database.msft.png" alt-text="View a database" lightbox="../media/storage-application-storage-indexeddb-notes_db-notes_os-refresh-database.msft.png":::
   View a database
:::image-end:::


<!-- ====================================================================== -->
## Edit IndexedDB data

IndexedDB keys and values are not editable from the **Application** tool.  Since DevTools has access to page context, however, you may run JavaScript code within DevTools to edit IndexedDB data.

### Edit IndexedDB data with Snippets

[Snippets](../javascript/snippets.md) are a way to store and run blocks of JavaScript code within DevTools.  When you run a Snippet, the result is logged to the **Console**.  You may use a Snippet to run JavaScript code to edit an IndexedDB database.

:::image type="complex" source="../media/storage-sources-snippets-indexeddb-output.msft.png" alt-text="Use a Snippet to interact with IndexedDB" lightbox="../media/storage-sources-snippets-indexeddb-output.msft.png":::
   Use a Snippet to interact with IndexedDB
:::image-end:::


<!-- ====================================================================== -->
## Delete IndexedDB data

### Delete an IndexedDB key-value pair

1.  [View an IndexedDB object store](#view-indexeddb-data).
1.  Choose the key-value pair that you want to delete.  DevTools highlights it to indicate that it is selected.

    :::image type="complex" source="../media/storage-application-storage-indexeddb-notes_db-notes_os2.msft.png" alt-text="Choose a key-value pair in order to delete it" lightbox="../media/storage-application-storage-indexeddb-notes_db-notes_os2.msft.png":::
       Choose a key-value pair in order to delete it
    :::image-end:::

1.  Select the `Delete` key or choose **Delete Selected** (![Delete Selected](../media/delete-icon.msft.png)).

    :::image type="complex" source="../media/storage-application-storage-indexeddb-notes_db-notes_os-delete-selected.msft.png" alt-text="How the object store looks after the key-value pair has been deleted" lightbox="../media/storage-application-storage-indexeddb-notes_db-notes_os-delete-selected.msft.png":::
       How the object store looks after the key-value pair has been deleted
    :::image-end:::

### Delete all key-value pairs in an object store

1.  [View an IndexedDB object store](#view-indexeddb-data).

    :::image type="complex" source="../media/storage-application-storage-indexeddb-notes_db-notes_os-clear-object-store.msft.png" alt-text="View an object store" lightbox="../media/storage-application-storage-indexeddb-notes_db-notes_os-clear-object-store.msft.png":::
       View an object store
    :::image-end:::

1.  Choose **Clear object store** (![Clear object store](../media/clear-icon.msft.png)).

### Delete an IndexedDB database

1.  [View the IndexedDB database](#view-indexeddb-data) that you want to delete.
1.  Choose **Delete database**.

    :::image type="complex" source="../media/storage-application-storage-indexeddb-notes_db-delete-database.msft.png" alt-text="The Delete database button" lightbox="../media/storage-application-storage-indexeddb-notes_db-delete-database.msft.png":::
       The **Delete database** button
    :::image-end:::

### Delete all IndexedDB storage

1.  Open the **Clear storage** pane.
1.  Make sure that the **IndexedDB** checkbox is enabled.
1.  Choose **Clear site data**.

    :::image type="complex" source="../media/storage-application-clear-storage-indexeddb-clear-site-data.msft.png" alt-text="The Clear storage pane" lightbox="../media/storage-application-clear-storage-indexeddb-clear-site-data.msft.png":::
       The **Clear storage** pane
    :::image-end:::


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/storage/indexeddb) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools \& Lighthouse).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
