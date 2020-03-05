---
title: View Cache Data With Microsoft Edge DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 10/15/2019
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
<!-- Copyright Kayce Basques 

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->





# View Cache Data With Microsoft Edge DevTools   



This guide shows you how to use [Microsoft Edge DevTools][MicrosoftEdgeDevTools] to inspect
[Cache][MDNCache] data.  

If you are trying to inspect [HTTP cache][MDNHTTPCaching] data, this is not the guide you want.  
The **Size** column of the **Network Log** has the information you are looking for.  See [Log network activity][NetworkLogActivity].  

## View cache data   

1.  Click the **Application** tab to open the **Application** panel.  The **Manifest** pane usually opens by default.  
    
    > ##### Figure 1  
    > The Manifest pane  
    > ![The Manifest pane][ImageManifestPane]  

1.  Expand the **Cache Storage** section to view available caches.  
    
    > ##### Figure 2  
    > Available caches  
    > ![Available caches][ImageCache]  

1.  Click a cache to view its contents.  
    
    > ##### Figure 3  
    > Viewing the contents of a cache  
    > ![Viewing the contents of a cache][ImageCacheView]  

1.  Click a resource to view its HTTP headers in the section below the table.  
    
    > ##### Figure 4  
    > Viewing the HTTP headers of a resource  
    > ![Viewing the HTTP headers of a resource][ImageViewCacheResource]  

1.  Click **Preview** to view the content of a resource.  
    
    > ##### Figure 5  
    > Viewing the content of a resource  
    > ![Viewing the content of a resource][ImageCacheContent]  

## Refresh a resource   

1.  [View the data for a cache](#view-cache-data).  
1.  Click the resource that you want to refresh.  DevTools highlights it to indicate that it is selected.  
    
    > ##### Figure 6  
    > Selecting a resource  
    > ![Selecting a resource][ImageCacheSelected]  

1.  Click **Refresh** ![Refresh][ImageReloadIcon].  

## Filter resources   

1.  [View the data for a cache](#view-cache-data).  
1.  Use the **Filter by Path** text box to filter out any resources that do not match the path that you provide.  
    
    > ##### Figure 7  
    > Filtering out resources that do not match the specified path  
    > ![Filtering out resources that do not match the specified path][ImageCacheFilter]  

## Delete a resource   

1.  [View the data for a cache](#view-cache-data).  
1.  Click the resource that you want to delete.  DevTools highlights it to indicate that it is selected.  
    
    > ##### Figure 8  
    > Selecting a resource  
    > ![Selecting a resource][ImageCacheSelected2]  

1.  Click **Delete Selected** ![Delete Selected][ImageDeleteIcon].  

## Delete all cache data   

1.  Open **Application** > **Clear Storage**.  
1.  Make sure that the **Cache Storage** checkbox is enabled.  
    
    > ##### Figure 9  
    > The **Cache Storage** checkbox  
    > ![The Cache Storage checkbox][ImageCacheCheckbox]  

1.  Click **Clear site data**.  
    
    > ##### Figure 10  
    > The **Clear Site Data** button  
    > ![The Clear Site Data button][ImageCacheClearSite]  

 



<!-- image links -->  

[ImageDeleteIcon]: images/delete-icon.msft.png  
[ImageReloadIcon]: images/reload-icon.msft.png  

[ImageManifestPane]: images/application-manifest.msft.png "Figure 1: The Manifest pane"  
[ImageCache]: images/application-cache-storage.msft.png "Figure 2: Available caches"  
[ImageCacheView]: images/application-cache-storage-domain-root-headers.msft.png "Figure 3: Viewing the contents of a cache"  
[ImageViewCacheResource]: images/application-cache-storage-index-headers.msft.png "Figure 4: Viewing the HTTP headers of a resource"  
[ImageCacheContent]: images/application-cache-storage-domain-js-preview.msft.png "Figure 5: Viewing the content of a resource"  
[ImageCacheSelected]: images/application-sache-storage-domain-refresh.msft.png "Figure 6: Selecting a resource"  
[ImageCacheFilter]: images/application-cache-storage-filter.msft.png "Figure 7: Filtering out resources that do not match the specified path"  
[ImageCacheSelected2]: images/application-cache-storage-delete-selected.msft.png "Figure 8: Selecting a resource"  
[ImageCacheCheckbox]: images/application-clear-storage-cache-storage-checkbox.msft.png "Figure 9: The Cache Storage checkbox"  
[ImageCacheClearSite]: images/application-clear-storage-cache-storage-checkbox-clear-site-data-button.msft.png "Figure 10: The Clear Site Data button"  

<!-- links -->  

[MicrosoftEdgeDevTools]: http://docs.microsoft.com/microsoft-edge/devtools-guide-chromium "Microsoft Edge \(Chromium\) Developer Tools"  
[NetworkLogActivity]: ../network/index.md#log-network-activity  "Log network activity"  

[MDNCache]: https://developer.mozilla.org/docs/Web/API/Cache "Cache | MDN"  
[MDNHTTPCaching]: https://developer.mozilla.org/docs/Web/HTTP/Caching "HTTP caching | MDN"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/storage/cache) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools & Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: http://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
