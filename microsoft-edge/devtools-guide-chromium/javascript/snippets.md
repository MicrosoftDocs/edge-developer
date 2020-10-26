---
description: Snippets are small scripts that you can author and run within the Sources panel of Microsoft Edge DevTools.  You can access and run them from any page.  When you run a Snippet, it runs from the context of the currently open page.
title: Run Snippets Of JavaScript On Any Page With Microsoft Edge DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 10/19/2020 
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

# Run snippets of JavaScript on any page with Microsoft Edge DevTools  

If you find yourself running the same code in the [Console][DevtoolsConsoleIndex] repeatedly, consider saving the code as a Snippet instead.  Snippets are scripts that you author in the [Sources][DevToolsSourcesPanel] panel. They have access to the JavaScript context of the page, and you can run them on any page. The security settings of most pages will disallow you to load other scripts in snippets. That's why all the code needs to be in one document.

> [!NOTE]
> Snippets are an alternative to [bookmarklets][WikiBookmarklet] with the difference that they only run in DevTools and are not limited to the allowed length of a URL.  

Snippets are an excellent way to change a few things in a third party web site as your code is added to the current page and executed in its context. If you want to change existing code of a web page check out the [Overrides][DevtoolsOverrides] functionality in the [Sources][DevToolsSourcesPanel] panel.

For example, in the following figure shows the DevTools homepage on the left and some Snippet source code on the right.  

:::image type="complex" source="../media/javascript-sources-snippets-split-screen.msft.png" alt-text="How the page looks before running the Snippet" lightbox="../media/javascript-sources-snippets-split-screen.msft.png":::
   How the page looks before running the Snippet  
:::image-end:::  

The Snippet source code from the previous figure.  

```javascript
console.log('Hello, Snippets!');
document.body.innerHTML = '';
var p = document.createElement('p');
p.textContent = 'Hello, Snippets!';
document.body.appendChild(p);
```  

In the following figure, the page appears after running the Snippet.  The **Console Drawer** pops up to display the `Hello, Snippets!` message that the Snippet logs, and the content of the page changes completely.  

:::image type="complex" source="../media/javascript-sources-snippets-split-screen-after.msft.png" alt-text="How the page looks after running the Snippet" lightbox="../media/javascript-sources-snippets-split-screen-after.msft.png":::
   How the page looks after running the Snippet  
:::image-end:::  

## Open the Snippets pane  

The **Snippets** pane lists your Snippets.  When you want to edit a Snippet, you need to open it from the **Snippets** pane.  

:::image type="complex" source="../media/javascript-sources-snippets-pane.msft.png" alt-text="The Snippets pane" lightbox="../media/javascript-sources-snippets-pane.msft.png":::
   The **Snippets** pane  
:::image-end:::  

### Open the Snippets pane with a mouse  

1.  Click the **Sources** tab to open the **Sources** panel.  The **Page** pane usually opens by default.  
    
    :::image type="complex" source="../media/javascript-sources-page-pane.msft.png" alt-text="The Sources panel with the Page pane open on the left" lightbox="../media/javascript-sources-page-pane.msft.png":::
       The **Sources** panel with the **Page** pane open on the left  
    :::image-end:::  
    
1.  Click the **Snippets** tab to open the **Snippets** pane.  You might need to choose **More Tabs** \(![More Tabs][ImageMoreTabsIcon]\) in order to access the **Snippets** option.  
    
### Open the Snippets pane with the Command Menu  

1.  Focus your cursor somewhere inside of DevTools.  
1.  Select `Control`+`Shift`+`P` \(Windows, Linux\) or `Command`+`Shift`+`P` \(macOS\) to open the Command Menu.  
1.  Start typing `Snippets`, choose **Show Snippets**, and then select `Enter` to run the command.  
    
    :::image type="complex" source="../media/javascript-search-show-snippets.msft.png" alt-text="The Show Snippets command" lightbox="../media/javascript-search-show-snippets.msft.png":::
       The **Show Snippets** command  
    :::image-end:::  
    
## Create Snippets  

### Create a Snippet through the Sources panel  

1.  [Open the **Snippets** pane](#open-the-snippets-pane).  
1.  Choose **New snippet**.  
1.  Enter a name for your Snippet then select `Enter` to save.  
    
    :::image type="complex" source="../media/javascript-sources-snippets-naming.msft.png" alt-text="Name a Snippet" lightbox="../media/javascript-sources-snippets-naming.msft.png":::
       Name a Snippet  
    :::image-end:::  
    
### Create a Snippet through the Command Menu  

1.  Focus your cursor somewhere inside of DevTools.  
1.  Select `Control`+`Shift`+`P` \(Windows, Linux\) or `Command`+`Shift`+`P` \(macOS\) to open the Command Menu.  
1.  Start typing `Snippet`, choose **Create new snippet**, then select `Enter` to run the command.  
    
    :::image type="complex" source="../media/javascript-search-create-new-snippet.msft.png" alt-text="The command for creating a new Snippet" lightbox="../media/javascript-search-create-new-snippet.msft.png":::
       The command for creating a new Snippet  
    :::image-end:::  
    
See [Rename Snippets](#rename-snippets) if you'd like to give your new Snippet a custom name.  

## Edit Snippets  

1.  [Open the **Snippets** pane](#open-the-snippets-pane).  
1.  In the **Snippets** pane click the name of the Snippet that you want to edit in order to open it in the **Code Editor**.  
    
    :::image type="complex" source="../media/javascript-sources-snippets-editor-saved.msft.png" alt-text="The Code Editor" lightbox="../media/javascript-sources-snippets-editor-saved.msft.png":::
       The **Code Editor**  
    :::image-end:::  
    
1.  Use the **Code Editor** to add JavaScript to your Snippet.  
1.  When an asterisk appears next to the name of your Snippet it means you have unsaved code. Select `Control`+`S` \(Windows, Linux\) or `Command`+`S` \(macOS\) to save.  
    
    :::image type="complex" source="../media/javascript-sources-snippets-editor-unsaved.msft.png" alt-text="An asterisk next to the Snippet name, which indicates unsaved code" lightbox="../media/javascript-sources-snippets-editor-unsaved.msft.png":::
       An asterisk next to the Snippet name, which indicates unsaved code  
    :::image-end:::  
    
## Run Snippets  

### Run a Snippet from the Sources panel  

1.  [Open the **Snippets** pane](#open-the-snippets-pane).  
1.  Click the name of the Snippet that you want to run.  The Snippet opens in the **Code Editor**.  
1.  Choose **Run Snippet** \(![Run Snippet][ImageRunSnippetIcon]\), or select `Control`+`Enter` \(Windows, Linux\) or `Command`+`Enter` \(macOS\).  
    
### Run a Snippet with the Command Menu  

1.  Focus your cursor somewhere inside of DevTools.  
1.  Select `Control`+`Shift`+`P` \(Windows, Linux\) or `Command`+`Shift`+`P` \(macOS\) to open the Command Menu.  
1.  Delete the `>` character and type the `!` character followed by the name of the Snippet that you want to run.  
    
    :::image type="complex" source="../media/javascript-search-run-command.msft.png" alt-text="Running a Snippet from the Command Menu" lightbox="../media/javascript-search-run-command.msft.png":::
       Running a Snippet from the **Command Menu**  
    :::image-end:::  
    
1.  Select `Enter` to run the Snippet.  

## Rename Snippets  

1.  [Open the **Snippets** pane](#open-the-snippets-pane).  
1.  Right-click the Snippet name and choose **Rename**.  
    
## Delete Snippets  

1.  [Open the **Snippets** pane](#open-the-snippets-pane).  
1.  Right-click the Snippet name and choose **Remove**.  
    
## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- image links -->  

[ImageMoreTabsIcon]: ../media/more-tabs-icon.msft.png  
[ImageRunSnippetIcon]: ../media/run-snippet-icon.msft.png  

<!-- links -->  

[DevtoolsConsoleIndex]: ../console/index.md "Console overview | Microsoft Docs"  
[DevToolsSourcesPanel]: ../sources.md "Sources panel overview | Microsoft Docs"  
[DevtoolsOverrides]: ../overrides.md "Overrides | Microsoft Docs"  

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
