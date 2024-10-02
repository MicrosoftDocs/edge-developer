---
title: View and edit local storage
description: How to view and edit localStorage key-value pairs by using the Local Storage pane and the Console.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
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
# View and edit local storage

To view, edit, and delete [localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage) key-value pairs, use the **Application** tool.


<!-- ====================================================================== -->
## View localStorage keys and values

1. Click the **Application** tab to open the **Application** tool.  The **Manifest** pane is shown by default.

   ![The Manifest pane](./localstorage-images/manifest.png)

1. Expand the **Local Storage** menu.

   ![The Local Storage menu](./localstorage-images/local-storage.png)

1. Click a domain to view the key-value pairs.

   ![The localStorage key-value pairs for the https://www.bing.com domain](./localstorage-images/view-key-value.png)

1. Click a row of the table to view the value in the viewer below the table.

   ![View the value of the eventLogQueue_Online key](./localstorage-images/view-key-value-selected.png)


<!-- ====================================================================== -->
## Create a new localStorage key-value pair

1. [View the localStorage key-value pairs of a domain](#view-localstorage-keys-and-values).

1. Double-click the empty part of the table.  DevTools creates a new row and focuses your cursor in the **Key** column.

   ![The empty part of the table to double-click in order to create a new key-value pair](./localstorage-images/new-key-value.png)


<!-- ====================================================================== -->
## Edit localStorage keys or values

1. [View the localStorage key-value pairs of a domain](#view-localstorage-keys-and-values).

1. Double-click a cell in the **Key** or **Value** column to edit that key or value.

   ![Edit a localStorage key](./localstorage-images/edit-key-value.png)


<!-- ====================================================================== -->
## Delete localStorage key-value pairs

1. [View the `localStorage` key-value pairs of a domain](#view-localstorage-keys-and-values).

1. Click the key-value pair that you want to delete.  DevTools highlights it blue to indicate that it is selected.

1. Press `Delete`, or click **Delete Selected** (![Delete Selected](./localstorage-images/delete-icon.png)).


<!-- ====================================================================== -->
## Delete all `localStorage` key-value pairs for a domain

1. [View the `localStorage` key-value pairs of a domain](#view-localstorage-keys-and-values).

1. Click **Clear All** (![Clear All](./localstorage-images/clear-icon.png)).


<!-- ====================================================================== -->
## Interact with localStorage from the Console

Since you can run JavaScript in the **Console**, and since the **Console** has access to the JavaScript contexts of the page, it is possible to interact with `localStorage` from the **Console**.

1. Use the **JavaScript contexts** menu to change the JavaScript context of the **Console** if you want to access the `localStorage` key-value pairs of a domain other than the page that is displayed.

   ![Change the JavaScript context of the Console](./localstorage-images/console-context-dropdown.png)

1. Run your `localStorage` expressions in the Console, the same as you do in your JavaScript.

   ![Interact with localStorage from the Console](./localstorage-images/console-local-storage.png)


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/devtools/storage/localstorage/) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools \& Lighthouse).

[![Creative Commons License](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
