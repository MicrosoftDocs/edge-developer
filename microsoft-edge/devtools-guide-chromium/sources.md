---
description: View and edit files, create Snippets, debug JavaScript, and set up Workspaces in the Sources panel of Microsoft Edge DevTools.
title: Sources Panel Overview
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







# Sources panel overview 



Use the Microsoft Edge DevTools **Sources** panel to perform the folowing actions.  

*   [View files](#view-files).  
*   [Edit CSS and JavaScript](#edit-css-and-javascript).  
*   [Create and save **Snippets** of JavaScript](#create-save-and-run-snippets), which you may run on any page.  **Snippets** are similar to bookmarklets.  
*   [Debug JavaScript](#debug-javascript).  
*   [Set up a Workspace](#set-up-a-workspace), so that changes you make in DevTools get saved to the code on your file system.  
    
## View files 

Use the **Page** pane to view all of the resources that the page has loaded.

:::image type="complex" source="./media/sources-page-pane.msft.png" alt-text="The Page pane" lightbox="./media/sources-page-pane.msft.png":::
   The **Page** pane  
:::image-end:::  

How the **Page** pane is organized:  
*   The top-level, such as `top` in the previous figure, represents an [HTML frame][W3CHtml4Frames].  Find `top` on every page that you visit.  `top` represents the main document frame.  
*   The second-level, such as `docs.microsoft.com` in the previous figure, represents an [origin][HtmlstandardOrigin].  
*   The third-level, fourth-level, and so on, represent directories and resources that were loaded from that origin.  For example, in the previous figure the full path to the resource `devtools-guide-chromium` is `docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium`  
    
Click a file in the **Page** pane to view the contents in the **Editor** pane.  You may view any type of file.  For images, you see a preview of the image.  

:::image type="complex" source="./media/sources-editor-pane.msft.png" alt-text="View the contents of a4d10f71.index-docs.js in the Editor pane" lightbox="./media/sources-editor-pane.msft.png":::
   View the contents of `a4d10f71.index-docs.js` in the **Editor** pane  
:::image-end:::  

## Edit CSS and JavaScript 

Use the **Editor** pane to edit CSS and JavaScript.  DevTools updates the page to run your new code.  For example, if you edit a CSS file by adding the style rule below:

```css
.metadata.page-metadata {
    color: red;
}
```

You should see that change take effect immediately.

:::image type="complex" source="./media/edit-css.msft.png" alt-text="Edit CSS in the Editor pane to change the text color of the subtitle to red" lightbox="./media/edit-css.msft.png":::
   Edit CSS in the **Editor** pane to change the text color of the subtitle to red  
:::image-end:::  

CSS changes take effect immediately, no save needed.  For JavaScript changes to take effect, press `Control`+`S` \(Windows\) or `Command`+`S` \(macOS\).  DevTools does not re-run a script, so the only JavaScript changes that take effect are those that you make inside of functions.  For example, in the following figure, notice how `console.log('A')` does not run, whereas `console.log('B')` does.  If DevTools re-runs the entire script after making the change, then the text `A` would have been logged to the **Console**.  

:::image type="complex" source="./media/edit-js.msft.png" alt-text="Editing JavaScript in the Editor pane" lightbox="./media/edit-js.msft.png":::
   Editing JavaScript in the **Editor** pane  
:::image-end:::  

DevTools erases your CSS and JavaScript changes when you reload the page.  See [Set up a Workspace](#set-up-a-workspace) to learn how to save the changes to your file system.  

## Create, save, and run Snippets 

Snippets are scripts which you may run on any page.  Imagine that you repeatedly type out the following code in the **Console**, in order to insert the jQuery library into a page, so that you may run jQuery commands from the **Console**:  

```javascript
let script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.2.1.min.js';
script.crossOrigin = 'anonymous';
script.integrity = 'sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=';
document.head.appendChild(script);
```  

Instead, you may save this code in a **Snippet** and run it with a couple of button clicks, any time you need it.  DevTools saves the **Snippet** to your file system.  

:::image type="complex" source="./media/snippet.msft.png" alt-text="A Snippet that inserts the jQuery library into a page" lightbox="./media/snippet.msft.png":::
   A **Snippet** that inserts the jQuery library into a page  
:::image-end:::  

To run a **Snippet**:

*   Open the file using the **Snippets** pane, and click **Run** \(![The Run button][ImageRunIcon]\).  
*   Open the **[Command Menu][DevtoolsGuideChromiumCommandMenuIndex]**, delete the `>` character, type `!`, type the name of your **Snippet**, then press `Enter`.  
    
See [Run Snippets Of Code From Any Page][DevtoolsGuideChromiumJavascriptSnippets] to learn more.

## Debug JavaScript 

Rather than using `console.log()` to infer where your JavaScript is going wrong, consider using the Microsoft Edge DevTools debugging tools, instead.  The general idea is to set a breakpoint, which is an intentional stopping place in your code, and then step through the runtime of your code, one line at a time.  As you step through the code, you may view and change the values of all currently-defined properties and variables, run JavaScript in the **Console**, and more.

See [Get Started With Debugging JavaScript][DevtoolsGuideChromiumJavascriptIndex] to learn the basics of debugging in DevTools.

:::image type="complex" source="./media/debugging.msft.png" alt-text="Debug JavaScript" lightbox="./media/debugging.msft.png":::
   Debug JavaScript  
:::image-end:::  

## Set up a Workspace 

By default, when you edit a file in the **Sources** panel, those changes are lost when you reload the page.  **Workspaces** enable you to save the changes that you make in DevTools to your file system.  Essentially, DevTools is able to be used as your code editor.

See [Edit Files With Workspaces][DevtoolsGuideChromiumWorkspacesIndex] to get started.

<!--  
 


-->  

<!-- image links -->  

[ImageRunIcon]: ./media/run-snippet-icon.msft.png  

<!-- links -->  

[DevtoolsGuideChromiumCommandMenuIndex]: ./command-menu/index.md "Run Commands With The Microsoft Edge DevTools Command Menu"  
[DevtoolsGuideChromiumJavascriptIndex]: ./javascript/index.md "Get Started with Debugging JavaScript in Microsoft Edge DevTools"  
[DevtoolsGuideChromiumJavascriptSnippets]: ./javascript/snippets.md "Run Snippets Of JavaScript On Any Page With Microsoft Edge DevTools"  
[DevtoolsGuideChromiumWorkspacesIndex]: ./workspaces/index.md "Edit Files With Workspaces"  

[HtmlstandardOrigin]: https://html.spec.whatwg.org/multipage/origin.html#origin "Origin - HTML Standard"  

[W3CHtml4Frames]: https://w3.org/TR/html401/present/frames.html "Frames | W3C"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/sources) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
