---
description: How to view and edit sessionStorage with the Session Storage pane and the Console.
title: View and edit Session Storage with Microsoft Edge DevTools
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
# View and edit Session Storage with Microsoft Edge DevTools

This guide shows you how to use [Microsoft Edge DevTools](../../devtools-guide-chromium/index.md) to view, edit, and delete [sessionStorage](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage) key-value pairs.


<!-- ====================================================================== -->
## View sessionStorage keys and values

1.  Choose the **Application** tab to open the **Application** tool.  The **Manifest** panel is shown by default.

    :::image type="complex" source="../media/storage-application-manifest.msft.png" alt-text="The Manifest pane" lightbox="../media/storage-application-manifest.msft.png":::
       The **Manifest** pane
    :::image-end:::

1.  Expand the **Session Storage** menu.

    :::image type="complex" source="../media/storage-application-storage-session-storage.msft.png" alt-text="The Session Storage Menu" lightbox="../media/storage-application-storage-session-storage.msft.png":::
       The **Session Storage** Menu
    :::image-end:::

1.  Choose a domain to view the key-value pairs.

    :::image type="complex" source="../media/storage-application-storage-session-storage-domain.msft.png" alt-text="The sessionStorage key-value pairs" lightbox="../media/storage-application-storage-session-storage-domain.msft.png":::
       The `sessionStorage` key-value pairs
    :::image-end:::

1.  Choose a row of the table to view the value in the viewer below the table.

    :::image type="complex" source="../media/storage-application-storage-session-storage-domain-key-value-selected.msft.png" alt-text="View the value of the x-sid key" lightbox="../media/storage-application-storage-session-storage-domain-key-value-selected.msft.png":::
       View the value of the `x-sid` key
    :::image-end:::


<!-- ====================================================================== -->
## Create a new sessionStorage key-value pair

1.  [View the sessionStorage key-value pairs of a domain](#view-sessionstorage-keys-and-values).
1.  Double-click the empty part of the table.  DevTools creates a new row and focuses your cursor in the **Key** column.

    :::image type="complex" source="../media/storage-application-storage-session-storage-domain-key-value-new.msft.png" alt-text="The empty part of the table to double-click in order to create a new key-value pair" lightbox="../media/storage-application-storage-session-storage-domain-key-value-new.msft.png":::
       The empty part of the table to double-click in order to create a new key-value pair
    :::image-end:::


<!-- ====================================================================== -->
## Edit sessionStorage keys or values

1.  [View the sessionStorage key-value pairs of a domain](#view-sessionstorage-keys-and-values).
1.  Double-click a cell in the **Key** or **Value** column to edit that key or value.

    :::image type="complex" source="../media/storage-application-storage-session-storage-domain-key-value-edit.msft.png" alt-text="Edit a sessionStorage key" lightbox="../media/storage-application-storage-session-storage-domain-key-value-edit.msft.png":::
       Edit a `sessionStorage` key
    :::image-end:::


<!-- ====================================================================== -->
## Delete sessionStorage key-value pairs

1.  [View the `sessionStorage` key-value pairs of a domain](#view-sessionstorage-keys-and-values).
1.  Choose the key-value pair that you want to delete.  DevTools highlights it blue to indicate that it is selected.
1.  Select the `Delete` key or choose **Delete Selected** (![Delete Selected](../media/delete-icon.msft.png)).


<!-- ====================================================================== -->
## Delete all sessionStorage key-value pairs for a domain

1.  [View the `sessionStorage` key-value pairs of a domain](#view-sessionstorage-keys-and-values).
1.  Choose **Clear All** (![Clear All](../media/clear-icon.msft.png)).


<!-- ====================================================================== -->
## Interact with sessionStorage from the Console

Since you may run JavaScript in the **Console**, and since the **Console** has access to the JavaScript contexts of the page, it is possible to interact with `sessionStorage` from the **Console**.

1.  Use the **JavaScript contexts** menu to change the JavaScript context of the **Console** if you want to access the `sessionStorage` key-value pairs of a domain other than the page you are on.

    :::image type="complex" source="../media/storage-console-domain-selection.msft.png" alt-text="Change the JavaScript context of the Console" lightbox="../media/storage-console-domain-selection.msft.png":::
       Change the JavaScript context of the **Console**
    :::image-end:::

1.  Run your `sessionStorage` expressions in the **Console**, the same as your JavaScript.

    :::image type="complex" source="../media/storage-console-session-storage-keys.msft.png" alt-text="Interact with sessionStorage from the Console" lightbox="../media/storage-console-session-storage-keys.msft.png":::
       Interact with `sessionStorage` from the **Console**
    :::image-end:::


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/storage/sessionstorage) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools \& Lighthouse).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
