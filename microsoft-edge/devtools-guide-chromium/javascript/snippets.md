---
description: Snippets are small scripts that you may author and run within the Sources tool of Microsoft Edge DevTools.  You may access and run resources from any webpage.  When you run a Snippet, it runs from the context of the currently open webpage.
title: Run Snippets Of JavaScript On Any Page With Microsoft Edge DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 03/08/2021
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

# Run snippets of JavaScript on any webpage with Microsoft Edge DevTools  

If you are running the same code in the [Console][DevtoolsConsoleIndex] repeatedly, consider saving the code as a Snippet instead.  Snippets are scripts that you author in the [Sources][DevToolsSourcesTool] tool.  Snippets have access to the JavaScript context of the webpage, and you may run snippets on any webpage.  The security settings of most webpages block from loading other scripts in Snippets.  For that reason, you must include all your code in one file.  

Snippets are an alternative to [bookmarklets][WikiBookmarklet] with the difference that Snippets only run in DevTools and are not limited to the allowed length of a URL.  

Using Snippets is an excellent way to change a few things in a third-party webpage.  Code changes in Snippets are added to the current webpage and run in the same context.  For more information about changing the existing code of a webpage, navigate to [Overrides][DevtoolsJavascriptOverrides].  

:::row:::
   :::column span="":::
      For example, in the following figure shows the DevTools homepage on the left and some Snippet source code on the right.  
      
      :::image type="complex" source="../media/javascript-sources-snippets-split-screen.msft.png" alt-text="The before running the Snippet" lightbox="../media/javascript-sources-snippets-split-screen.msft.png":::
         The webpage before running the Snippet  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      The Snippet source code from the webpage before running the Snippet.  
      
      ```javascript
      console.log('Hello, Snippets!');
      document.body.innerHTML = '';
      var p = document.createElement('p');
      p.textContent = 'Hello, Snippets!';
      document.body.appendChild(p);
      ```
   :::column-end:::
:::row-end:::  

In the following figure, the webpage appears after running the Snippet.  The **Console Drawer** pops up to display the `Hello, Snippets!` message that the Snippet logs, and the content of the webpage changes completely.  

:::image type="complex" source="../media/javascript-sources-snippets-split-screen-after.msft.png" alt-text="The webpage after running the Snippet" lightbox="../media/javascript-sources-snippets-split-screen-after.msft.png":::
   The webpage after running the Snippet  
:::image-end:::  

## Open the Snippets pane  

The **Snippets** pane lists your Snippets.  When you want to edit a Snippet, you need to open it from the **Snippets** pane.  

:::image type="complex" source="../media/javascript-sources-snippets-pane.msft.png" alt-text="The Snippets pane" lightbox="../media/javascript-sources-snippets-pane.msft.png":::
   The **Snippets** pane  
:::image-end:::  

### Open the Snippets pane with a mouse  

1.  Choose the **Sources** tab to open the **Sources** tool.  The **Page** pane usually opens by default.  
    
    :::image type="complex" source="../media/javascript-sources-page-pane.msft.png" alt-text="The Sources tool with the Page pane open on the left" lightbox="../media/javascript-sources-page-pane.msft.png":::
       The **Sources** tool with the **Page** pane open on the left  
    :::image-end:::  
    
1.  Choose the **Snippets** tab to open the **Snippets** pane.  You may need to choose **More Tabs** \(![More Tabs](../media/more-tabs-icon.msft.png)\) to access the **Snippets** option.  
    
### Open the Snippets pane with the Command Menu  

1.  Focus your cursor somewhere in DevTools.  
1.  Select `Control`+`Shift`+`P` \(Windows, Linux\) or `Command`+`Shift`+`P` \(macOS\) to open the Command Menu.  
1.  Type `Snippets`, choose **Show Snippets**, and then select `Enter` to run the command.  
    
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

1.  Focus your cursor somewhere in DevTools.  
1.  Select `Control`+`Shift`+`P` \(Windows, Linux\) or `Command`+`Shift`+`P` \(macOS\) to open the Command Menu.  
1.  Type `Snippet`, choose **Create new snippet**, then select `Enter` to run the command.  
    
    :::image type="complex" source="../media/javascript-search-create-new-snippet.msft.png" alt-text="The command for creating a new Snippet" lightbox="../media/javascript-search-create-new-snippet.msft.png":::
       The command for creating a new Snippet  
    :::image-end:::  
    
To rename your new Snippet with a custom name, navigate to [Rename Snippets](#rename-snippets).  

## Edit Snippets  

1.  [Open the **Snippets** pane](#open-the-snippets-pane).  
1.  In the **Snippets** pane, choose the name of the Snippet that you want to edit.  It opens in the **Code Editor**.  
    
    :::image type="complex" source="../media/javascript-sources-snippets-editor-saved.msft.png" alt-text="The Code Editor" lightbox="../media/javascript-sources-snippets-editor-saved.msft.png":::
       The **Code Editor**  
    :::image-end:::  
    
1.  Use the **Code Editor** to add JavaScript to your Snippet.  
1.  When an asterisk appears next to the name of your Snippet, it means you have unsaved code.  Select `Control`+`S` \(Windows, Linux\) or `Command`+`S` \(macOS\) to save.  
    
    :::image type="complex" source="../media/javascript-sources-snippets-editor-unsaved.msft.png" alt-text="An asterisk next to the Snippet name indicates unsaved code" lightbox="../media/javascript-sources-snippets-editor-unsaved.msft.png":::
       An asterisk next to the Snippet name indicates unsaved code  
    :::image-end:::  
    
## Run Snippets  

### Run a Snippet from the Sources panel  

1.  [Open the **Snippets** pane](#open-the-snippets-pane).  
1.  Choose the name of the Snippet that you want to run.  The Snippet opens in the **Code Editor**.  
1.  Choose **Run Snippet** \(![Run Snippet](../media/run-snippet-icon.msft.png)\), or select `Control`+`Enter` \(Windows, Linux\) or `Command`+`Enter` \(macOS\).  
    
### Run a Snippet with the Command Menu  

1.  Focus your cursor somewhere in DevTools.  
1.  Select `Control`+`Shift`+`P` \(Windows, Linux\) or `Command`+`Shift`+`P` \(macOS\) to open the Command Menu.  
1.  Delete the `>` character and type the `!` character followed by the name of the Snippet that you want to run.  
    
    :::image type="complex" source="../media/javascript-search-run-command.msft.png" alt-text="Running a Snippet from the Command Menu" lightbox="../media/javascript-search-run-command.msft.png":::
       Running a Snippet from the **Command Menu**  
    :::image-end:::  
    
1.  Select `Enter` to run the Snippet.  

## Rename Snippets  

1.  [Open the **Snippets** pane](#open-the-snippets-pane).  
1.  Hover on the Snippet name, open the contextual menu \(right-click\), and choose **Rename**.  
    
## Delete Snippets  

1.  [Open the **Snippets** pane](#open-the-snippets-pane).  
1.  Hover on the Snippet name, open the contextual menu \(right-click\), and choose **Remove**.  
    
## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- links -->  

[DevtoolsConsoleIndex]: ../console/index.md "Console overview | Microsoft Docs"  
[DevToolsSourcesTool]: ../sources/index.md "Sources tool overview | Microsoft Docs"  
[DevtoolsJavascriptOverrides]: ./overrides.md "Overrides | Microsoft Docs"  

[MDNScratchpad]: https://developer.mozilla.org/docs/Tools/Scratchpad "Scratchpad | MDN"  
[WikiBookmarklet]: https://en.wikipedia.org/wiki/Bookmarklet "Bookmarklet | Wikipedia"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/javascript/snippets) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
