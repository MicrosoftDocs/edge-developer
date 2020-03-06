---
title: Run Snippets Of JavaScript On Any Page With Microsoft Edge DevTools
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





# Run Snippets Of JavaScript On Any Page With Microsoft Edge DevTools   



If you find yourself running the same code in the [Console][DevtoolsConsoleIndex] repeatedly, consider saving the code as a Snippet instead.  Snippets are scripts that you author in the [**Sources** panel][DevToolsSourcesPanel].  They have access to the JavaScript context of the page, and you can run them on any page.  Snippets are an alternative to [bookmarklets][WikiBookmarklet].  
Firefox DevTools has a feature similar to Snippets called [Scratchpad][MDNScratchpad].  

For example, [**Figure 1**](#figure-1) shows the DevTools homepage on the left and some Snippet source code on the right.  

> ##### Figure 1  
> How the page looks before running the Snippet  
> ![How the page looks before running the Snippet][ImageSnippetSplitScreen]  

The Snippet source code from [**Figure 1**](#figure-1):  

```javascript
console.log('Hello, Snippets!');
document.body.innerHTML = '';
var p = document.createElement('p');
p.textContent = 'Hello, Snippets!';
document.body.appendChild(p);
```  

[**Figure 2**](#figure-2) shows how the page looks after running the Snippet.  The **Console Drawer** pops up to display the `Hello, Snippets!` message that the Snippet logs, and the content of the page changes completely.  

> ##### Figure 2  
> How the page looks after running the Snippet  
> ![How the page looks after running the Snippet][ImageSnippetSplitScreenAfter]  

## Open the Snippets pane   

The **Snippets** pane lists your Snippets.  When you want to edit a Snippet, you need to open it from the **Snippets** pane.  

> ##### Figure 3  
> The **Snippets** pane  
> ![The Snippets pane][ImageSnippetsPane]  

### Open the Snippets pane with a mouse   

1.  Click the **Sources** tab to open the **Sources** panel.  The **Page** pane usually opens by default.  

    > ##### Figure 4  
    > The **Sources** panel with the **Page** pane open on the left  
    > ![The Sources panel with the Page pane open on the left][ImageSourcesPageEmpty]  

1.  Click the **Snippets** tab to open the **Snippets** pane.  You might need to click **More Tabs** ![More Tabs][ImageMoreTabsIcon] in order to access the **Snippets** option.  

### Open the Snippets pane with the Command Menu   

1.  Focus your cursor somewhere inside of DevTools.  
1.  Press `Control`+`Shift`+`P` \(Windows\) or `Command`+`Shift`+`P` \(macOS\) to open the Command Menu.  
1.  Start typing `Snippets`, select **Show Snippets**, and then press `Enter` to run the command.  

    > ##### Figure 5  
    > The **Show Snippets** command  
    > ![The Show Snippets command][ImageShowSnippetsSearch]  

## Create Snippets   

### Create a Snippet through the Sources panel   

1.  [Open the **Snippets** pane](#open-the-snippets-pane).  
1.  Click **New snippet**.  
1.  Enter a name for your Snippet then press `Enter` to save.  

    > ##### Figure 6  
    > Naming a Snippet  
    > ![Naming a Snippet][ImageSnippetName]  

### Create a Snippet through the Command Menu   

1.  Focus your cursor somewhere inside of DevTools.  
1.  Press `Control`+`Shift`+`P` \(Windows\) or `Command`+`Shift`+`P` \(macOS\) to open the Command Menu.  
1.  Start typing `Snippet`, select **Create new snippet**, then press `Enter` to run the command.  

    > ##### Figure 7  
    > The command for creating a new Snippet  
    > ![The command for creating a new Snippet][ImageCreateSnippetSearch]  

See [Rename Snippets](#rename-snippets) if you'd like to give your new Snippet a custom name.  

## Edit Snippets   

1.  [Open the **Snippets** pane](#open-the-snippets-pane).  
1.  In the **Snippets** pane click the name of the Snippet that you want to edit in order to open it in the **Code Editor**.  

    > ##### Figure 8  
    > The Code Editor  
    > ![The Code Editor][ImageSnippetEditor]  

1.  Use the **Code Editor** to add JavaScript to your Snippet.  
1.  When an asterisk appears next to the name of your Snippet it means you have unsaved code. Press `Control`+`S` \(Windows\) or `Command`+`S` \(macOS\) to save.  

    > ##### Figure 9  
    > An asterisk next to the Snippet name, which indicates unsaved code  
    > ![An asterisk next to the Snippet name, which indicates unsaved code][ImageUnsavedSnippet]  

## Run Snippets   

### Run a Snippet from the Sources panel   

1.  [Open the **Snippets** pane](#open-the-snippets-pane).  
1.  Click the name of the Snippet that you want to run.  The Snippet opens in the **Code Editor**.  
1.  Click **Run Snippet** ![Run Snippet][ImageRunSnippetIcon], or press `Control`+`Enter` \(Windows\) or `Command`+`Enter` \(macOS\).  

### Run a Snippet with the Command Menu   

1.  Focus your cursor somewhere inside of DevTools.  
1.  Press `Control`+`Shift`+`P` \(Windows\) or `Command`+`Shift`+`P` \(macOS\) to open the Command Menu.  
1.  Delete the `>` character and type the `!` character followed by the name of the Snippet that you want to run.  

    > ##### Figure 10  
    > Running a Snippet from the Command Menu  
    > ![Running a Snippet from the Command Menu][ImageRunSnippetCommand]  

1.  Press `Enter` to run the Snippet.  

## Rename Snippets   

1.  [Open the **Snippets** pane](#open-the-snippets-pane).  
1.  Right-click the Snippet name and select **Rename**.  

## Delete Snippets   

1.  [Open the **Snippets** pane](#open-the-snippets-pane).  
1.  Right-click the Snippet name and select **Remove**.  

 



<!-- image links -->  
[ImageMoreTabsIcon]: ../images/shared/more-tabs-icon.msft.png  
[ImageRunSnippetIcon]: ../images/run-snippet-icon.msft.png  

[ImageCreateSnippetSearch]: images/search-create-new-snippet.msft.png "Figure 7: The command for creating a new Snippet"  
[ImageSourcesPageEmpty]: images/sources-page-pane.msft.png "Figure 4: The Sources panel with the Page pane open on the left"  
[ImageRunSnippetCommand]: images/search-run-command.msft.png "Figure 10: Running a Snippet from the Command Menu"  
[ImageShowSnippetsSearch]: images/search-show-snippets.msft.png "Figure 5: The Show Snippets command"  
[ImageSnippetSplitScreenAfter]: images/sources-snippets-split-screen-after.msft.png "Figure 2: How the page looks after running the Snippet"  
[ImageSnippetSplitScreen]: images/sources-snippets-split-screen.msft.png "Figure 1: How the page looks before running the Snippet"  
[ImageSnippetEditor]: images/sources-snippets-editor-saved.msft.png "Figure 8: The Code Editor"  
[ImageSnippetName]: images/sources-snippets-naming.msft.png "Figure 6: Naming a Snippet"  
[ImageSnippetsPane]: images/sources-snippets-pane.msft.png "Figure 3: The Snippets pane"  
[ImageUnsavedSnippet]: images/sources-snippets-editor-unsaved.msft.png "Figure 9: An asterisk next to the Snippet name, which indicates unsaved code"  

<!-- links -->  

[DevtoolsConsoleIndex]: ../console/index.md "Console Overview"  
[DevToolsSourcesPanel]: ../sources.md "Sources Panel Overview"  

[MDNScratchpad]: https://developer.mozilla.org/docs/Tools/Scratchpad "Scratchpad | MDN"  
[WikiBookmarklet]: https://en.wikipedia.org/wiki/Bookmarklet "Bookmarklet - Wikipedia"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/javascript/snippets) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
