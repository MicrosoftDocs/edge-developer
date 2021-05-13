---
description: Organize resources by frame, domain, type, or other criteria.
title: View page resources with Microsoft Edge DevTools
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
# View page resources with Microsoft Edge DevTools  

This guide teaches you how to use Microsoft Edge DevTools to view the resources of a web page.  Resources are the files that a page needs in order to display correctly.  Examples of resources include CSS, JavaScript, and HTML files, as well as images.  

This guide assumes that you are familiar with the basics of [web development][MDNLearnWebDevelopment] and [Microsoft Edge DevTools][MicrosoftEdgeDevTools].  

## Open resources  

When you know the name of the resource that you want to inspect, the **Command Menu** provides a fast way of opening the resource.  

1.  Select `Control`+`P` \(Windows, Linux\) or `Command`+`P` \(macOS\).  The **Open File** dialog opens.  
    
    :::image type="complex" source="../media/resources-command-menu-empty.msft.png" alt-text="The Open File dialog" lightbox="../media/resources-command-menu-empty.msft.png":::
       The **Open File** dialog  
    :::image-end:::  
    
1.  Choose the file from the dropdown, or start typing the filename and select `Enter` once the correct file is highlighted in the autocomplete box.  
    
    :::image type="complex" source="../media/resources-command-menu-file-search.msft.png" alt-text="Type a filename in the Open File dialog" lightbox="../media/resources-command-menu-file-search.msft.png":::
       Type a filename in the **Open File** dialog  
    :::image-end:::  
    
### Open resources in the Network tool  

Navigate to [Inspect the details of a resource][DevtoolsNetworkInspectDetailsResource].  

:::image type="complex" source="../media/resources-network-response.msft.png" alt-text="Inspect a resource in the Network tool" lightbox="../media/resources-network-response.msft.png":::
   Inspect a resource in the **Network** tool  
:::image-end:::  

### Reveal resources in the Network tool from other panels  

The [Browse resources](#browse-resources) section below shows you how to view resources from various parts of the DevTools UI.  If you ever want to inspect a resource in the **Network** tool,  hover on the resource, open the contextual menu \(right-click\), and choose **Reveal in Network panel**.  

:::image type="complex" source="../media/resources-sources-page-reveal-in-network-panel.msft.png" alt-text="Reveal in Network panel" lightbox="../media/resources-sources-page-reveal-in-network-panel.msft.png":::
   **Reveal in Network panel**  
:::image-end:::  

## Browse resources  

### Browse resources in the Network panel  

Navigate to [Log network activity][DevtoolsNetworkLogActivity].  

:::image type="complex" source="../media/resources-network-resources.msft.png" alt-text="Page resources in the Network Log" lightbox="../media/resources-network-resources.msft.png":::
   Page resources in the **Network** Log  
:::image-end:::  

### Browse by directory  

To view the resources of a webpage organized by directory:  

1.  Open DevTools.
1.  Choose the **Sources** tool, and then in the **Navigator** pane in the upper left, choose the **Page** tab.
1.  Choose the **More options** (...) button to the right of the **Page** tab, and then choose **Group by folder**.
    
    :::image type="complex" source="../media/resources-sources-page-empty.msft.png" alt-text="The Page tab in the Navigator pane of the Sources tool" lightbox="../media/resources-sources-page-empty.msft.png":::
       The **Page** tab in the **Navigator** pane of the **Sources** tool  
    :::image-end:::  
    
    Here is a breakdown of the non-obvious items in the previous figure.  
    
    | Page item | Description |  
    |:--- |:--- |  
    | `top` | The main document [browsing context][MDNInlineFrame]. |  
    | `airhorner.com` | The domain.  All resources nested under it come from that domain.  For example, the full URL of the `comlink.global.j` file is probably `https://airhorner.com/scripts/comlink.global.js`. |  
    | `scripts` | A directory. |  
    | `(index)` | The main HTML document. |  
    | `sw.js` | A service worker runtime context. |  
    
1.  Choose a resource to view it in the **Editor**.  
    
    :::image type="complex" source="../media/resources-sources-page-resource.msft.png" alt-text="View a file in the Editor" lightbox="../media/resources-sources-page-resource.msft.png":::
       View a file in the **Editor**  
    :::image-end:::  
    
### Browse by filename  

By default, the **Page** tab groups resources by directory.  To display the resources for each domain as a flat list, instead of grouping them by directory:

1.  Navigate to the **Sources** tool.  
1.  In the **Navigator** pane (on the left), choose the **Page** tab.  
1.  Choose **More options** `...` and then clear the checkmark next to **Group by folder**.  
    
    :::image type="complex" source="../media/resources-sources-page-resource-group-by-folder.msft.png" alt-text="The Group by folder option" lightbox="../media/resources-sources-page-resource-group-by-folder.msft.png":::
       The **Group by folder** option  
    :::image-end:::  
    
    Resources are organized by file type.  Within each file type, the resources are organized alphabetically.  

    :::image type="complex" source="../media/resources-sources-page-resources-empty-not-grouped-by-folder.msft.png" alt-text="The Page tab after clearing the Group by folder check mark" lightbox="../media/resources-sources-page-resources-empty-not-grouped-by-folder.msft.png":::
       The **Page** tab after clearing the **Group by folder** check mark  
    :::image-end:::  
    
### Browse by file type  

To group resources together based on their file type:  

1.  Choose the **Application** tab.  The **Application** tool opens.  By default the **Manifest** pane usually opens first.  
    
    :::image type="complex" source="../media/resources-application-mainfest-airhorner.msft.png" alt-text="The Application tool" lightbox="../media/resources-application-mainfest-airhorner.msft.png":::
       The **Application** tool  
    :::image-end:::  
    
1.  Scroll down to the **Frames** pane.  
    
    :::image type="complex" source="../media/resources-application-mainfest-airhorner-frames-expanded.msft.png" alt-text="The Frames pane" lightbox="../media/resources-application-mainfest-airhorner-frames-expanded.msft.png":::
       The **Frames** pane  
    :::image-end:::  
    
1.  Expand the sections in which you are interested.  
1.  Choose a resource to view it.  
    
    :::image type="complex" source="../media/resources-application-mainfest-airhorner-expanded-resources.msft.png" alt-text="View a resource in the Application panel" lightbox="../media/resources-application-mainfest-airhorner-expanded-resources.msft.png":::
       View a resource in the **Application** panel  
    :::image-end:::  
    
#### Browse files by type in the Network panel  

Navigate to [Filter by resource type][DevtoolsNetworkFilterByResourceType].  

:::image type="complex" source="../media/resources-network-resources-filter-css.msft.png" alt-text="Filter for CSS in the Network Log" lightbox="../media/resources-network-resources-filter-css.msft.png":::
   Filter for CSS in the **Network** Log  
:::image-end:::  

## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- links -->  

[MicrosoftEdgeDevTools]: ../../devtools-guide-chromium/index.md "Microsoft Edge (Chromium) Developer tools | Microsoft Docs"  
[DevtoolsNetworkFilterByResourceType]: ../network/index.md#filter-by-resource-type "Filter by resource type - Inspect network activity in Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsNetworkInspectDetailsResource]: ../network/index.md#inspect-the-details-of-the-resource "Inspect the details of the resource - Inspect network activity in Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsNetworkLogActivity]: ../network/index.md#log-network-activity "Log network activity - Inspect network activity in Microsoft Edge DevTools | Microsoft Docs"  

[MDNInlineFrame]: https://developer.mozilla.org/docs/Web/HTML/Element/iframe "<iframe>: The Inline Frame element | MDN"  
[MDNLearnWebDevelopment]: https://developer.mozilla.org/docs/Learn "Learn web development | MDN"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/resources/index) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors#kayce-basques  
