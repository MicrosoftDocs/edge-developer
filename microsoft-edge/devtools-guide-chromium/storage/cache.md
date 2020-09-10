---
description: How to view Cache data from the Application panel of Microsoft Edge DevTools.
title: View Cache Data With Microsoft Edge DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/01/2020 
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



This guide shows you how to use [Microsoft Edge DevTools][MicrosoftEdgeDevTools] to inspect [Cache][MDNCache] data.  

If you are trying to inspect [HTTP cache][MDNHTTPCaching] data, this is not the guide you want.  Look for the information in the **Size** column of the **Network Log**.  See [Log network activity][DevtoolsNetworkLogActivity].  

## View cache data   

1.  Select the **Application** tab to open the **Application** panel.  The **Manifest** pane usually opens by default.  
    
    :::image type="complex" source="../media/storage-application-manifest.msft.png" alt-text="The Manifest pane" lightbox="../media/storage-application-manifest.msft.png":::
       The **Manifest** pane  
    :::image-end:::  
    
1.  Expand the **Cache Storage** section to view available caches.  
    
    :::image type="complex" source="../media/storage-application-cache-storage.msft.png" alt-text="Available caches" lightbox="../media/storage-application-cache-storage.msft.png":::
       Available caches  
    :::image-end:::  
    
1.  Select a cache to view the contents.  
    
    :::image type="complex" source="../media/storage-application-cache-storage-domain-root-headers.msft.png" alt-text="View the contents of a cache" lightbox="../media/storage-application-cache-storage-domain-root-headers.msft.png":::
       View the contents of a cache  
    :::image-end:::  
    
1.  Select a resource to view the HTTP headers in the section below the table.  
    
    :::image type="complex" source="../media/storage-application-cache-storage-index-headers.msft.png" alt-text="View the HTTP headers of a resource" lightbox="../media/storage-application-cache-storage-index-headers.msft.png":::
       View the HTTP headers of a resource  
    :::image-end:::  
    
1.  Select **Preview** to view the content of a resource.  
    
    :::image type="complex" source="../media/storage-application-cache-storage-domain-js-preview.msft.png" alt-text="View the content of a resource" lightbox="../media/storage-application-cache-storage-domain-js-preview.msft.png":::
       View the content of a resource  
    :::image-end:::  
    
## Refresh a resource   

1.  [View the data for a cache](#view-cache-data).  
1.  Select the resource that you want to refresh.  DevTools highlights it to indicate that it is selected.  
    
    :::image type="complex" source="../media/storage-application-cache-storage-domain-refresh.msft.png" alt-text="Select a resource" lightbox="../media/storage-application-cache-storage-domain-refresh.msft.png":::
       Select a resource  
    :::image-end:::  
    
1.  Select **Refresh** \(![Refresh][ImageRefreshIcon]\).  
    
## Filter resources   

1.  [View the data for a cache](#view-cache-data).  
1.  Use the **Filter by Path** text box to filter out any resources that do not match the path that you provide.  
    
    :::image type="complex" source="../media/storage-application-cache-storage-filter.msft.png" alt-text="Filter out resources that do not match the specified path" lightbox="../media/storage-application-cache-storage-filter.msft.png":::
       Filter out resources that do not match the specified path  
    :::image-end:::  
    
## Delete a resource   

1.  [View the data for a cache](#view-cache-data).  
1.  Select the resource that you want to delete.  DevTools highlights it to indicate that it is selected.  
    
    :::image type="complex" source="../media/storage-application-cache-storage-delete-selected.msft.png" alt-text="Select a resource" lightbox="../media/storage-application-cache-storage-delete-selected.msft.png":::
       Select a resource  
    :::image-end:::  
    
1.  Select **Delete Selected** \(![Delete Selected][ImageDeleteIcon]\).  
    
## Delete all cache data   

1.  Open **Application** > **Clear Storage**.  
1.  Make sure that the **Cache Storage** checkbox is enabled.  
    
    :::image type="complex" source="../media/storage-application-clear-storage-cache-storage-checkbox.msft.png" alt-text="The Cache Storage checkbox" lightbox="../media/storage-application-clear-storage-cache-storage-checkbox.msft.png":::
       The **Cache Storage** checkbox  
    :::image-end:::  
    
1.  Select **Clear site data**.  
    
    :::image type="complex" source="../media/storage-application-clear-storage-cache-storage-checkbox-clear-site-data-button.msft.png" alt-text="The Clear Site Data button" lightbox="../media/storage-application-clear-storage-cache-storage-checkbox-clear-site-data-button.msft.png":::
       The **Clear Site Data** button  
    :::image-end:::  
    
<!--  
  


-->  

<!-- image links -->  

[ImageDeleteIcon]: ../media/delete-icon.msft.png  
[ImageRefreshIcon]: ../media/refresh-icon.msft.png  

<!-- links -->  

[MicrosoftEdgeDevTools]: ../../devtools-guide-chromium.md "Microsoft Edge (Chromium) Developer tools | Microsoft Docs"  
[DevtoolsNetworkLogActivity]: ../network/index.md#log-network-activity  "Log network activity | Microsoft Docs"  

[MDNCache]: https://developer.mozilla.org/docs/Web/API/Cache "Cache | MDN"  
[MDNHTTPCaching]: https://developer.mozilla.org/docs/Web/HTTP/Caching "HTTP caching | MDN"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/storage/cache) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
