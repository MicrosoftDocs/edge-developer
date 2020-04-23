---
title: View Application Cache Data With Microsoft Edge DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 03/13/2020
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





# View Application Cache Data With Microsoft Edge DevTools   



> [!WARNING]
> The Application Cache API is [being removed from the web platform][HTMLStandardOfflineWebApplications].  

This guide shows you how to use [Microsoft Edge DevTools][MicrosoftEdgeDevTools] to inspect [Application Cache][MDNWebAPIsWindowApplicationCache] resources.  

## View Application Cache Data   

1.  Click the **Sources** tab to open the **Sources** panel.  The **Manifest** pane usually opens by default.  
    
    > ##### Figure 1  
    > The Manifest pane  
    > ![The Manifest pane][ImageManifestPane]  

1.  Expand the **Application Cache** section and click a cache to view the resources.  
    
    > ##### Figure 2  
    > The Application Cache pane  
    > ![The Application Cache pane][ImageApplicationCachePane]  

Each row of the table represents a cached resource.  

The **Type** column represents the [category of the resource][MDNHTMLResourcesInAnApplicationCache]:  

*   **Master**.  The `manifest` attribute on the resource indicated that this cache is the parent of the resource.  
*   **Explicit**.  This resource was explicitly listed in the manifest.  
*   **Network**.  The manifest specified that this resource must come from the network.  
*   **Fallback**.  The URL is a fallback for another resource.  The URL of the other resource is not listed in DevTools.  

At the bottom of the table there are status icons indicating your network connection and the status of the Application Cache.  The Application Cache may have the following states:  

*   **IDLE**.  The cache has no new changes.  
*   **CHECKING**.  The manifest is being fetched and checked for updates.  
*   **DOWNLOADING**.  Resources are being added to the cache.  
*   **UPDATEREADY**.  A new version of the cache is available.  
*   **OBSOLETE**.  The cache is being deleted.  

 



<!-- image links -->  

[ImageApplicationCachePane]: /microsoft-edge/devtools-guide-chromium/media/cache-pane-cache-storage-resources.msft.png "Figure 2: The Application Cache pane"  
[ImageManifestPane]: images/application-manifest.msft.png "Figure 1: The Manifest pane"  

<!-- links -->  

[HTMLStandardOfflineWebApplications]: https://html.spec.whatwg.org/multipage/offline.html#offline "Offline Web applications - HTML Standard"  
[MDNHTMLResourcesInAnApplicationCache]: https://developer.mozilla.org/docs/Web/HTML/Using_the_application_cache#Resources_in_an_application_cache "Resources in an application cache | MDN"  
[MDNWebAPIsWindowApplicationCache]: https://developer.mozilla.org/docs/Web/API/Window/applicationCache "Window.applicationCache - Web APIs | MDN"  
[MicrosoftEdgeDevTools]: https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium "Microsoft Edge \(Chromium\) Developer Tools"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/storage/applicationcache) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
