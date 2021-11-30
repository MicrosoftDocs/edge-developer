---
description: How to view Cache data from the Application panel of Microsoft Edge DevTools.
title: View cache data with Microsoft Edge DevTools
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
# View cache data with Microsoft Edge DevTools

This guide shows you how to use [Microsoft Edge DevTools](../../devtools-guide-chromium/index.md) to inspect [Cache](https://developer.mozilla.org/docs/Web/API/Cache) data.

If you are trying to inspect [HTTP cache](https://developer.mozilla.org/docs/Web/HTTP/Caching) data, this is not the guide you want.  Look for the information in the **Size** column of the **Network Log**.  Navigate to [Log network activity](../network/index.md#log-network-activity).


<!-- ====================================================================== -->
## View cache data

1.  Choose the **Application** tab to open the **Application** panel.  The **Manifest** pane usually opens by default.

    :::image type="complex" source="../media/storage-application-manifest.msft.png" alt-text="The Manifest pane" lightbox="../media/storage-application-manifest.msft.png":::
       The **Manifest** pane
    :::image-end:::

1.  Expand the **Cache Storage** section to view available caches.

    :::image type="complex" source="../media/storage-application-cache-storage.msft.png" alt-text="Available caches" lightbox="../media/storage-application-cache-storage.msft.png":::
       Available caches
    :::image-end:::

1.  Choose a cache to view the contents.

    :::image type="complex" source="../media/storage-application-cache-storage-domain-root-headers.msft.png" alt-text="View the contents of a cache" lightbox="../media/storage-application-cache-storage-domain-root-headers.msft.png":::
       View the contents of a cache
    :::image-end:::

1.  Choose a resource to view the HTTP headers in the section below the table.

    :::image type="complex" source="../media/storage-application-cache-storage-index-headers.msft.png" alt-text="View the HTTP headers of a resource" lightbox="../media/storage-application-cache-storage-index-headers.msft.png":::
       View the HTTP headers of a resource
    :::image-end:::

1.  Choose **Preview** to view the content of a resource.

    :::image type="complex" source="../media/storage-application-cache-storage-domain-js-preview.msft.png" alt-text="View the content of a resource" lightbox="../media/storage-application-cache-storage-domain-js-preview.msft.png":::
       View the content of a resource
    :::image-end:::


<!-- ====================================================================== -->
## Refresh a resource

1.  [View the data for a cache](#view-cache-data).
1.  Choose the resource that you want to refresh.  DevTools highlights it to indicate that it is selected.

    :::image type="complex" source="../media/storage-application-cache-storage-domain-refresh.msft.png" alt-text="Choose a resource to refresh" lightbox="../media/storage-application-cache-storage-domain-refresh.msft.png":::
       Choose a resource to refresh
    :::image-end:::

1.  Choose **Refresh** (![Refresh](../media/refresh-icon.msft.png)).


<!-- ====================================================================== -->
## Filter resources

1.  [View the data for a cache](#view-cache-data).
1.  Use the **Filter by Path** text box to filter out any resources that do not match the path that you provide.

    :::image type="complex" source="../media/storage-application-cache-storage-filter.msft.png" alt-text="Filter out resources that do not match the specified path" lightbox="../media/storage-application-cache-storage-filter.msft.png":::
       Filter out resources that do not match the specified path
    :::image-end:::


<!-- ====================================================================== -->
## Delete a resource

1.  [View the data for a cache](#view-cache-data).
1.  Choose the resource that you want to delete.  DevTools highlights it to indicate that it is selected.

    :::image type="complex" source="../media/storage-application-cache-storage-delete-selected.msft.png" alt-text="Choose a resource to delete" lightbox="../media/storage-application-cache-storage-delete-selected.msft.png":::
       Choose a resource to delete
    :::image-end:::

1.  Choose **Delete Selected** (![Delete Selected](../media/delete-icon.msft.png)).


<!-- ====================================================================== -->
## Delete all cache data

1.  Open **Application** > **Clear Storage**.
1.  Make sure that the **Cache Storage** checkbox is enabled.

    :::image type="complex" source="../media/storage-application-clear-storage-cache-storage-checkbox.msft.png" alt-text="The Cache Storage checkbox" lightbox="../media/storage-application-clear-storage-cache-storage-checkbox.msft.png":::
       The **Cache Storage** checkbox
    :::image-end:::

1.  Choose **Clear site data**.

    :::image type="complex" source="../media/storage-application-clear-storage-cache-storage-checkbox-clear-site-data-button.msft.png" alt-text="The Clear Site Data button" lightbox="../media/storage-application-clear-storage-cache-storage-checkbox-clear-site-data-button.msft.png":::
       The **Clear Site Data** button
    :::image-end:::


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/storage/cache) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools \& Lighthouse).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
