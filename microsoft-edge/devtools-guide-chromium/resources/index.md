---
title: View Page Resources With Microsoft Edge DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/06/2020
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





# View Page Resources With Microsoft Edge DevTools   

  

This guide teaches you how to use Microsoft Edge DevTools to view the resources of a web page.  Resources are the files that a page needs in order to display correctly.  Examples of resources include CSS, JavaScript, and HTML files, as well as images.  

This guide assumes that you are familiar with the basics of [web development][MDNLearnWebDevelopment] and [Microsoft Edge DevTools][MicrosoftEdgeDevTools].  

## Open resources   

When you know the name of the resource that you want to inspect, the **Command Menu** provides a fast way of opening the resource.  

1.  Press `Control`+`P` \(Windows\) or `Command`+`P` \(macOS\).  The **Open File** dialog opens.  
    
    > ##### Figure 1  
    > The **Open File** dialog  
    > ![The Open File dialog][ImageOpenFile]  
    
1.  Select the file from the dropdown, or start typing the filename and press `Enter` once the correct file is highlighted in the autocomplete box.  
    
    > ##### Figure 2  
    > Typing a filename in the **Open File** dialog  
    > ![Typing a filename in the Open File dialog][ImageFileSearch]  
    
### Open resources in the Network panel   

See [Inspect the details of a resource][NetworkInspectDetailsResource].  

> ##### Figure 3  
> Inspecting a resource in the Network panel  
> ![Inspecting a resource in the Network panel][ImageNetworkResponse]  

### Reveal resources in the Network panel from other panels   

The [Browse resources](#browse-resources) section below shows you how to view resources from various parts of the DevTools UI.  If you ever want to inspect a resource in the **Network** panel, right-click the resource and select **Reveal in Network panel**.  

> ##### Figure 4  
> The **Reveal in Network panel** option  
> ![Reveal in Network panel][ImageRevealNetwork]  

## Browse resources   

### Browse resources in the Network panel   

See [Log network activity][NetworkLogActivity].  

> ##### Figure 5  
> Page resources in the Network Log  
> ![Page resources in the Network Log][ImageNetworkLog]  

### Browse by directory   

To view the resources of a page organized by directory:  

1.  Click the **Sources** tab to open the **Sources** panel.  
1.  Click the **Page** tab to show the resources of the page.  The **Page** pane opens.  
    
    > ##### Figure 6  
    > The **Page** pane  
    > ![The Page pane][ImagePage]  
    
    Here is a breakdown of the non-obvious items in [Figure 6](#figure-6):  
    
    | Page item | Description |  
    |:--- |:--- |  
    | `top` | The main document [browsing context][MDNInlineFrame]. |  
    | `airhorner.com` | The domain.  All resources nested under it come from that domain.  For example, the full URL of the `comlink.global.j` file is probably `https://airhorner.com/scripts/comlink.global.js`. |  
    | `scripts` | A directory. |  
    | `(index)` | The main HTML document. |  
    | `sw.js` | A service worker runtime context. |  
    
1.  Click a resource to view it in the **Editor**.  
    
    > ##### Figure 7  
    > Viewing a file in the **Editor**  
    > ![Viewing a file in the Editor][ImageSourcesView]  
    
### Browse by filename   

By default the **Page** pane groups resources by directory.  To disable this grouping and view the resources for each domain as a flat list:  

1.  Open the **Page** pane.  See [Browse by directory](#browse-by-directory).  
1.  Click **More Options** `...` and disable **Group By Folder**.  
    
    > ##### Figure 8  
    > The **Group By Folder** option  
    > ![The Group By Folder option][ImageGroupByFolder]  
    
    Resources are organized by file type.  Within each file type the resources are organized alphabetically.  
    
    > ##### Figure 9  
    > The **Page** pane after disabling **Group By Folder**  
    > ![The Page pane after disabling Group By Folder][ImageFileNames]  
    
### Browse by file type   

To group resources together based on their file type:  

1.  Click the **Application** tab.  The **Application** panel opens.  By default the **Manifest** pane usually opens first.  
    
    > ##### Figure 10  
    > The **Application** panel  
    > ![The Application panel][ImageApplication]  
    
1.  Scroll down to the **Frames** pane.  
    
    > ##### Figure 11  
    > The **Frames** pane  
    > ![The Frames pane][ImageFrames]  
    
1.  Expand the sections in which you are interested.  
1.  Click a resource to view it.  
    
    > ##### Figure 12  
    > Viewing a resource in the **Application** panel  
    > ![Viewing a resource in the Application panel][ImageApplicationView]  

#### Browse files by type in the Network panel   

See [Filter by resource type][NetworkFilterByResourceType].  

> ##### Figure 13  
> Filtering for CSS in the Network Log  
> ![Filtering for CSS in the Network Log][ImageCSS]  

 



<!-- image links -->  

[ImageOpenFile]: images/command-menu-empty.msft.png "Figure 1: The Open File dialog"  
[ImageFileSearch]: images/command-menu-file-search.msft.png "Figure 2: Typing a filename in the Open File dialog"  
[ImageNetworkResponse]: images/network-response.msft.png "Figure 3: Inspecting a resource in the **Network** panel"  
[ImageRevealNetwork]: images/sources-page-reveal-in-network-panel.msft.png "Figure 4: Reveal in Network panel"  
[ImageNetworkLog]: images/network-resources.msft.png "Figure 5: Page resources in the Network Log"  
[ImagePage]: images/sources-page-empty.msft.png "Figure 6: The Page pane"  
[ImageSourcesView]: images/sources-page-resource.msft.png "Figure 7: Viewing a file in the Editor"  
[ImageGroupByFolder]: images/sources-page-resource-group-by-folder.msft.png "Figure 8: The Group By Folder option"  
[ImageFileNames]: images/sources-page-resources-empty-not-grouped-by-folder.msft.png "Figure 9: The Page pane after disabling Group By Folder"  
[ImageApplication]: images/application-mainfest-airhorner.msft.png "Figure 10: The Application panel"  
[ImageFrames]: images/application-mainfest-airhorner-frames-expanded.msft.png "Figure 11: The Frames pane"  
[ImageApplicationView]: images/application-mainfest-airhorner-expanded-resources.msft.png "Figure 12: Viewing a resource in the Application panel"  
[ImageCSS]: images/network-resources-filter-css.msft.png "Figure 13: Filtering for CSS in the Network Log"  

<!-- links -->  

[NetworkFilterByResourceType]: ../network/index.md#filter-by-resource-type "Filter by resource type - Inspect Network Activity In Microsoft Edge DevTools"  
[NetworkInspectDetailsResource]: ../network/index.md#inspect-the-details-of-the-resource "Inspect the details of the resource - Inspect Network Activity In Microsoft Edge DevTools"  
[NetworkLogActivity]: ../network/index.md#log-network-activity "Log network activity - Inspect Network Activity In Microsoft Edge DevTools"  

[MicrosoftEdgeDevTools]: https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium "Microsoft Edge \(Chromium\) Developer Tools"  
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
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
