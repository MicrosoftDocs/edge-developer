---
title: View And Edit Session Storage With Microsoft Edge DevTools
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





# View And Edit Session Storage With Microsoft Edge DevTools   

  

This guide shows you how to use [Microsoft Edge DevTools][MicrosoftEdgeDevTools] to view, edit, and delete [`sessionStorage`][MDNSessionStorage] key-value pairs.  

## View sessionStorage keys and values   

1.  Click the **Application** tab to open the **Application** panel.  The **Manifest** pane is shown by default.  
    
    > ##### Figure 1  
    > The Manifest pane  
    > ![The Manifest pane][ImageManifest]  

1.  Expand the **Session Storage** menu.  
    
    > ##### Figure 2  
    > The **Session Storage** Menu  
    > ![The Session Storage Menu][ImageSessionStorageMenu]  

1.  Click a domain to view its key-value pairs.  
    
    > ##### Figure 3  
    > The sessionStorage key-value pairs  
    > ![The `sessionStorage` key-value pairs][ImageSessionStorage]  

1.  Click a row of the table to view the value in the viewer below the table.  
    
    > ##### Figure 4  
    > Viewing the value of the `x-sid` key  
    > ![Viewing the value of the x-sid key][ImageSessionStorageViewer]  

## Create a new sessionStorage key-value pair   

1.  [View the `sessionStorage` key-value pairs of a domain](#view-sessionstorage-keys-and-values).  
1.  Double-click the empty part of the table.  DevTools creates a new row and focuses your cursor in the **Key** column.  
    
    > ##### Figure 5  
    > The empty part of the table to double-click in order to create a new key-value pair  
    > ![The empty part of the table to double-click in order to create a new key-value pair][ImageSessionStorageCreate]  

## Edit sessionStorage keys or values   

1.  [View the `sessionStorage` key-value pairs of a domain](#view-sessionstorage-keys-and-values).  
1.  Double-click a cell in the **Key** or **Value** column to edit that key or value.  
    
    > ##### Figure 6  
    > Editing a `sessionStorage` key  
    > ![Editing a sessionStorage key][ImageSessionStorageEdit]  

## Delete sessionStorage key-value pairs   

1.  [View the `sessionStorage` key-value pairs of a domain](#view-sessionstorage-keys-and-values).  
1.  Click the key-value pair that you want to delete.  DevTools highlights it blue to indicate that it is selected.  

1.  Press the `Delete` key or click **Delete Selected** ![Delete Selected][ImageDeleteIcon].  

## Delete all sessionStorage key-value pairs for a domain   

1.  [View the `sessionStorage` key-value pairs of a domain](#view-sessionstorage-keys-and-values).  

1.  Click **Clear All** ![Clear All][ImageClearIcon].  

## Interact with sessionStorage from the Console   

Since you can run JavaScript in the **Console**, and since the **Console** has access to the JavaScript contexts of the page, it is possible to interact with `sessionStorage` from the **Console**.  

1.  Use the **JavaScript contexts** menu to change the JavaScript context of the **Console** if you want to access the `sessionStorage` key-value pairs of a domain other than the page you are on.  
    
    > ##### Figure 7  
    > Changing the JavaScript context of the **Console**  
    > ![Changing the JavaScript context of the Console][ImageJSContext]  

1.  Run your `sessionStorage` expressions in the Console, the same as you would in your JavaScript.  
    
    > ##### Figure 8  
    > Interacting with `sessionStorage` from the **Console**  
    > ![Interacting with sessionStorage from the Console][ImageSessionStorageConsole]  

   

  

<!-- image links -->  

[ImageClearIcon]: images/clear-icon.msft.png  
[ImageDeleteIcon]: images/delete-icon.msft.png  

[ImageManifest]: images/application-manifest.msft.png "Figure 1: The Manifest pane"  
[ImageSessionStorageMenu]: images/application-storage-session-storage.msft.png "Figure 2: The Session Storage Menu: "  
[ImageSessionStorage]: images/application-storage-session-storage-domain.msft.png "Figure 3: The sessionStorage key-value pairs"  
[ImageSessionStorageViewer]: images/application-storage-session-storage-domain-key-value-selected.msft.png "Figure 4: Viewing the value of the x-sid key"  
[ImageSessionStorageCreate]: images/application-storage-session-storage-domain-key-value-new.msft.png "Figure 5: The empty part of the table to double-click in order to create a new key-value pair"  
[ImageSessionStorageEdit]: images/application-storage-session-storage-domain-key-value-edit.msft.png "Figure 6: Editing a sessionStorage key"  
[ImageJSContext]: images/console-domain-selection.msft.png "Figure 7: Changing the JavaScript context of the Console"  
[ImageSessionStorageConsole]: images/console-session-storage-keys.msft.png "Figure 8: Interacting with sessionStorage from the Console"  

<!-- links -->  

[MicrosoftEdgeDevTools]: https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium "Microsoft Edge \(Chromium\) Developer Tools"  

[MDNSessionStorage]: https://developer.mozilla.org/docs/Web/API/Window/sessionStorage "Window.sessionStorage | MDN"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/storage/sessionstorage) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
