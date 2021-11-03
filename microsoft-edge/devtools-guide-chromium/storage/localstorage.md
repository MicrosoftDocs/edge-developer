---
description: How to view and edit localStorage with the Local Storage pane and the Console.
title: View And Edit Local Storage With Microsoft Edge DevTools
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
# View and edit local storage with Microsoft Edge DevTools

This guide shows you how to use [Microsoft Edge DevTools](../../devtools-guide-chromium/index.md) to view, edit, and delete [localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage) key-value pairs.


<!-- ====================================================================== -->
## View localStorage keys and values

1.  Choose the **Application** tab to open the **Application** tool.  The **Manifest** pane is shown by default.

    :::image type="complex" source="../media/storage-application-manifest.msft.png" alt-text="The Manifest pane" lightbox="../media/storage-application-manifest.msft.png":::
       The **Manifest** pane
    :::image-end:::

1.  Expand the **Local Storage** menu.

    :::image type="complex" source="../media/storage-application-local-storage.msft.png" alt-text="The Local Storage menu" lightbox="../media/storage-application-local-storage.msft.png":::
       The **Local Storage** menu
    :::image-end:::

1.  Choose a domain to view the key-value pairs.

    :::image type="complex" source="../media/storage-application-local-storage-view-key-value.msft.png" alt-text="The localStorage key-value pairs for the https://www.bing.com domain" lightbox="../media/storage-application-local-storage-view-key-value.msft.png":::
       The `localStorage` key-value pairs for the `https://www.bing.com` domain
    :::image-end:::

1.  Choose a row of the table to view the value in the viewer below the table.

    :::image type="complex" source="../media/storage-application-local-storage-view-key-value-selected.msft.png" alt-text="View the value of the eventLogQueue_Online key" lightbox="../media/storage-application-local-storage-view-key-value-selected.msft.png":::
       View the value of the `eventLogQueue_Online` key
    :::image-end:::


<!-- ====================================================================== -->
## Create a new localStorage key-value pair

1.  [View the localStorage key-value pairs of a domain](#view-localstorage-keys-and-values).
1.  Double-click the empty part of the table.  DevTools creates a new row and focuses your cursor in the **Key** column.

    :::image type="complex" source="../media/storage-application-local-storage-new-key-value.msft.png" alt-text="The empty part of the table to double-click in order to create a new key-value pair" lightbox="../media/storage-application-local-storage-new-key-value.msft.png":::
       The empty part of the table to double-click in order to create a new key-value pair
    :::image-end:::


<!-- ====================================================================== -->
## Edit localStorage keys or values

1.  [View the localStorage key-value pairs of a domain](#view-localstorage-keys-and-values).
1.  Double-click a cell in the **Key** or **Value** column to edit that key or value.

    :::image type="complex" source="../media/storage-application-local-storage-edit-key-value.msft.png" alt-text="Edit a localStorage key" lightbox="../media/storage-application-local-storage-edit-key-value.msft.png":::
       Edit a `localStorage` key
    :::image-end:::


<!-- ====================================================================== -->
## Delete localStorage key-value pairs

1.  [View the `localStorage` key-value pairs of a domain](#view-localstorage-keys-and-values).
1.  Choose the key-value pair that you want to delete.  DevTools highlights it blue to indicate that it is selected.
1.  Select the `Delete` key or choose **Delete Selected** (![Delete Selected](../media/delete-icon.msft.png)).


<!-- ====================================================================== -->
## Delete all `localStorage` key-value pairs for a domain

1.  [View the `localStorage` key-value pairs of a domain](#view-localstorage-keys-and-values).
1.  Choose **Clear All** (![Clear All](../media/clear-icon.msft.png)).


<!-- ====================================================================== -->
## Interact with localStorage from the Console

Since you are able to run JavaScript in the **Console**, and since the **Console** has access to the JavaScript contexts of the page, it is possible to interact with `localStorage` from the **Console**.

1.  Use the **JavaScript contexts** menu to change the JavaScript context of the **Console** if you want to access the `localStorage` key-value pairs of a domain other than the page that is displayed.

    :::image type="complex" source="../media/storage-console-local-storage.msft.png" alt-text="Change the JavaScript context of the Console" lightbox="../media/storage-console-local-storage.msft.png":::
       Change the JavaScript context of the Console
    :::image-end:::

1.  Run your `localStorage` expressions in the Console, the same as you do in your JavaScript.

    :::image type="complex" source="../media/storage-console-local-storage-interaction.msft.png" alt-text="Interact with localStorage from the Console" lightbox="../media/storage-console-local-storage-interaction.msft.png":::
       Interact with `localStorage` from the **Console**
    :::image-end:::

<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/storage/localstorage) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools \& Lighthouse).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
