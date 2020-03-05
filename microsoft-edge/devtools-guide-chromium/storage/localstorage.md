---
title: View And Edit Local Storage With Microsoft Edge DevTools
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





# View And Edit Local Storage With Microsoft Edge DevTools   



This guide shows you how to use [Microsoft Edge DevTools][MicrosoftEdgeDevTools] to view, edit, and delete [`localStorage`][MDNWindowsLocalStorage] key-value pairs.  

## View localStorage keys and values   

1.  Click the **Application** tab to open the **Application** panel.  The **Manifest** pane is shown by default.  
    
    > ##### Figure 1  
    > The Manifest pane  
    > ![The Manifest pane][ImageManifest]  

1.  Expand the **Local Storage** menu.  
    
    > ##### Figure 2  
    > The **Local Storage** menu shows two domains: `https://business.bing.com` and `https://www.bing.com`  
    > ![The Local Storage menu][ImageLocalStorageMenu]  

1.  Click a domain to view its key-value pairs.  
    
    > ##### Figure 3  
    > The `localStorage` key-value pairs for the `https://www.bing.com` domain  
    > ![The localStorage key-value pairs for the https://www.bing.com domain][ImageLocalStorage]  

1.  Click a row of the table to view the value in the viewer below the table.  
    
    > ##### Figure 4  
    > Viewing the value of the `eventLogQueue_Online` key  
    > ![Viewing the value of the eventLogQueue_Online key][ImageLocalStorageViewer]  

## Create a new `localStorage` key-value pair   

1.  [View the `localStorage` key-value pairs of a domain](#view-localstorage-keys-and-values).  
1.  Double-click the empty part of the table.  DevTools creates a new row and focuses your cursor in the **Key** column.  
    
    > ##### Figure 5  
    > The empty part of the table to double-click in order to create a new key-value pair  
    > ![The empty part of the table to double-click in order to create a new key-value pair][ImageLocalStorageCreate]  

## Edit `localStorage` keys or values   

1.  [View the `localStorage` key-value pairs of a domain](#view-localstorage-keys-and-values).  
1.  Double-click a cell in the **Key** or **Value** column to edit that key or value.  
    
    > ##### Figure 6  
    > Editing a `localStorage` key  
    > ![Editing a localStorage key][ImageLocalStorageEdit]  

## Delete `localStorage` key-value pairs   

1.  [View the `localStorage` key-value pairs of a domain](#view-localstorage-keys-and-values).  
1.  Click the key-value pair that you want to delete.  DevTools highlights it blue to indicate that it is selected.  

1.  Press the `Delete` key or click **Delete Selected** ![Delete Selected][ImageDeleteIcon].  

## Delete all `localStorage` key-value pairs for a domain   

1.  [View the `localStorage` key-value pairs of a domain](#view-localstorage-keys-and-values).  

1.  Click **Clear All** ![Clear All][ImageClearIcon].  

## Interact with `localStorage` from the Console   

Since you are able to run JavaScript in the **Console**, and since the **Console** has access to the JavaScript contexts of the page, it is possible to interact with `localStorage` from the **Console**.  

1.  Use the **JavaScript contexts** menu to change the JavaScript context of the **Console** if you want to access the `localStorage` key-value pairs of a domain other than the page that is displayed.  
    
    > ##### Figure 7  
    > Changing the JavaScript context of the **Console**  
    > ![Changing the JavaScript context of the Console][ImageJSContext]  

1.  Run your `localStorage` expressions in the Console, the same as you do in your JavaScript.  
    
    > ##### Figure 8  
    > Interacting with `localStorage` from the **Console**  
    > ![Interacting with localStorage from the Console][ImageLocalStorageConsole]  

 



<!-- image links -->  

[ImageDeleteIcon]: ../images/shared/delete-icon.msft.png  
[ImageClearIcon]: ../images/shared/clear-icon.msft.png  

[ImageJSContext]: images/console-local-storage.msft.png "Figure 7: Changing the JavaScript context of the Console"  
[ImageLocalStorage]: images/application-local-storage-view-key-value.msft.png "Figure 3: The localStorage key-value pairs for the https://www.bing.com domain"  
[ImageLocalStorageConsole]: images/console-local-storage-interaction.msft.png "Figure 8: Interacting with localStorage from the Console"  
[ImageLocalStorageCreate]: images/application-local-storage-new-key-value.msft.png "Figure 5: The empty part of the table to double-click in order to create a new key-value pair"  
[ImageLocalStorageEdit]: images/application-local-storage-edit-key-value.msft.png "Figure 6: Editing a localStorage key"  
[ImageLocalStorageMenu]: images/application-local-storage.msft.png "Figure 2: The Local Storage menu"  
[ImageLocalStorageViewer]: images/application-local-storage-view-key-value-selected.msft.png "Figure 4: Viewing the value of the eventLogQueue_Online key"  
[ImageManifest]: images/application-manifest.msft.png "Figure 1: The Manifest pane"  

<!-- links -->  

[MDNWindowsLocalStorage]: https://developer.mozilla.org/docs/Web/API/Window/localStorage "Window.localStorage | MDN"  
[MicrosoftEdgeDevTools]: https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium "Microsoft Edge \(Chromium\) Developer Tools"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/storage/localstorage) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
