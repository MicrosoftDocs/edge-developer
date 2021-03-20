---
description: Display and edit files, create Snippets, debug JavaScript, and set up Workspaces in the Sources tool of Microsoft Edge DevTools.
title: Sources tool overview
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

# Sources tool overview  

<!-- todo:
Make this page focus on the Page tab (in the File Explorer pane), the Editor pane, and the Debugger to debug changes made in the Editor.  Suppress the other functionality: move those sections down and demote their headings.
 -->

Use the **Sources** tool to do the following:
*   Display the file system that's returned from the server to construct the current webpage.  View JavaScript files (and other files) that are returned from the server.
*   Make experimental edits to the JavaScript code that is returned from the server; these changes are preserved (in the DevTools sandbox) until page refresh.
*   Use the Debugger to step through the JavaScript code that is returned from the server, and step through your experimental changes to the code.

Additional functionality:
*   Make edits to local code and save them, by using a Workspace (the **Filesystem** tab) or **Overrides**.  Such changes to code are preserved across page refreshes.

This JavaScript code from the server may be different than the source files you work with, if those files go through transformations.  The **Sources** tool shows the final JavaScript code that's presented to the browser.

The **Sources** tool is sometimes called the *Sources panel*.

## Layout of the Sources tool

The **Sources** tool has three panes:
*   Upper left: the **File Explorer** pane (also called the **File Navigator** pane).
*   Upper middle or right: the **Editor** pane (also called the **Code Editor** or **Text Editor** pane).
*   Bottom or right: the **Debugger** pane (also called the **JavaScript Debugger** pane).  Designed to look and feel like the debugger in Visual Studio Code and Visual Studio.

The **File Explorer** pane has the following, main tab:
*   **Page** tab - Explore the file system that's returned from the server to construct the current webpage, and select JavaScript files to view, edit, and debug.

Additional tabs in the File Explorer pane:
*   **Filesystem** tab - When using Workspaces, to save changes to local files.  <!-- why isn't this called Workspace -->  This enables DevTools to act as an IDE.  If you want persistent editing local file exp'c, use the "DevTools for Visual Studio Code" extension (todo: link to that extension doc).
*   **Overrides** tab - Override page assets (such as images) by files from a local folder.  It's a way of changing what the server sends, after the fact.   On a folder basis.
*   **Content scripts** tab - Used for extensions.  Content scripts from from extensions; extension authors use them.  Use this to debug the JavaScript that an extension is injecting onto the page.
*   **Snippets** tab - Create and save JavaScript code snippets, for reuse on any webpage. (on every page, or a specified page only?)
*   \>> (**More tabs**) - This "double chevron" button displays the above tabs when the display is narrow.
*   ... (**More options**)
    *   **Group by folder** - Controls how files are displayed in the **Page** tab: as a flat list, or grouped by server and directory.
    *   **Open File** - Leads to the commands: **Open file**, **Run Command**, **Run snippet**, **Go to line**, **Go to symbol**.

### Maximizing the Sources tool window

When the DevTools window is wide within the browser window, or when the DevTools window is undocked into a separate window, the **Debugger** pane is displayed to the right of the **Editor** pane, instead of below it.

To maximize the Sources tool window:

1. Within DevTools, select the elipses (...) button (for **Customize and control DevTools**).
1. In the **Dock side** section, select **Undock into separate window**.
1. Optionally, move the DevTools window to a separate monitor.

The File Explorer pane will be on the left side of the window, and the Debugger pane will be on the right side of the window.

<!-- ORIGINAL CONTENT AT TOP OF PAGE: -->

Use the Microsoft Edge DevTools **Sources** tool to perform the following actions.  

<!-- the driving factors are only:
*   [Display files]
*   [Edit JavaScript]
*   [Debug JavaScript]
don't water-down, don't let those get lost by adding peripheral funcy.
 -->
*   [Navigate files returned by the server](#navigate-files-returned-by-the-server).  
*   [Edit JavaScript files](#edit-javascript-files).  
*   [Debug JavaScript](#debug-javascript).  

Additional functionality:
*   [Create and save **Snippets** of JavaScript](#create-save-and-run-snippets), which you may run on any webpage.  **Snippets** are similar to bookmarklets.  
*   [Set up a Workspace](#set-up-a-workspace), so that changes you make in DevTools get saved to the code on your file system.  
    
## Navigate files returned by the server  

Use the **Page** tab in the **File Explorer** pane, on the left, to list and navigate among all of the resources that the page has loaded.

:::image type="complex" source="../media/sources-page-pane.msft.png" alt-text="The Page pane" lightbox="../media/sources-page-pane.msft.png":::
   The **Page** pane  
:::image-end:::  

How the **Page** pane is organized:  
*   The top-level, such as `top` in the previous figure, represents an [HTML frame][W3CHtml4Frames].  Find `top` on every page that you visit.  `top` represents the main document frame.  
*   The second-level, such as `docs.microsoft.com` in the previous figure, represents an [origin][HtmlstandardOrigin].  
*   The third-level, fourth-level, and so on, represent directories and resources that were loaded from that origin.  For example, in the previous figure the full path to the resource `devtools-guide-chromium` is `docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium`  
    
Choose a file in the **Page** pane to display the contents in the **Editor** pane.  You may display any type of file.  For images, a preview of the image is displayed.  

:::image type="complex" source="../media/sources-editor-pane.msft.png" alt-text="Display the contents of a4d10f71.index-docs.js in the Editor pane" lightbox="../media/sources-editor-pane.msft.png":::
   Display the contents of `a4d10f71.index-docs.js` in the **Editor** pane  
:::image-end:::  

## Edit JavaScript files

Use the **Editor** pane to edit JavaScript.  DevTools updates the page to run the modified code.  

:::image type="complex" source="../media/edit-js.msft.png" alt-text="Editing JavaScript in the Editor pane" lightbox="../media/edit-js.msft.png":::
   Editing JavaScript in the **Editor** pane  
:::image-end:::

For JavaScript changes to take effect, select `Control`+`S` \(Windows, Linux\) or `Command`+`S` \(macOS\).  DevTools does not re-run a script, so the only JavaScript changes that take effect are those that you make inside of functions.  For example, in the following figure, notice how `console.log('A')` does not run, whereas `console.log('B')` does.  If DevTools re-runs the entire script after making the change, then the text `A` is logged to the **Console**.  

By default, your edits are discarded when you refresh the page.  To learn how to save the changes to your file system, navigate to [Set up a Workspace](#set-up-a-workspace).  

## Debug JavaScript  

Rather than using `console.log()` to infer where your JavaScript is going wrong, consider using the Microsoft Edge DevTools debugging tools, instead.  The general idea is to set a breakpoint, which is an intentional stopping place in your code, and then step through the runtime of your code, one line at a time.  As you step through the code, you may display and change the values of all currently-defined properties and variables, run JavaScript in the **Console**, and more.

To learn the basics of debugging in DevTools, navigate to [Get Started With Debugging JavaScript][DevtoolsGuideChromiumJavascriptIndex].  That page is a short tutorial, using an existing, simple project at Glitch.  The tutorial shows screen captures, so you don't need to actually walk through the tutorial steps.

:::image type="complex" source="../media/debugging.msft.png" alt-text="Debug JavaScript" lightbox="../media/debugging.msft.png":::
   Debug JavaScript  
:::image-end:::  

The above screen capture shows the wider layout of DevTools, with the Debugger pane on the right rather than at the bottom.

## Additional functionality

### Create, save, and run Snippets  

Snippets are scripts which you may run on any page.  Imagine that you repeatedly type out the following code in the **Console**, in order to insert the jQuery library into a page, so that you may run jQuery commands from the **Console**.  

```javascript
let script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.2.1.min.js';
script.crossOrigin = 'anonymous';
script.integrity = 'sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=';
document.head.appendChild(script);
```  

Instead, you may save this code in a **Snippet** and run it with a couple of button clicks, any time you need it.  DevTools saves the **Snippet** to your file system.  

:::image type="complex" source="../media/snippet.msft.png" alt-text="A Snippet that inserts the jQuery library into a page" lightbox="../media/snippet.msft.png":::
   A **Snippet** that inserts the jQuery library into a page  
:::image-end:::  

To run a **Snippet**:

*   Open the file using the **Snippets** pane, and choose **Run** \(![The Run button](../media/run-snippet-icon.msft.png)\).  
*   Open the [Command Menu][DevtoolsGuideChromiumCommandMenuIndex], delete the `>` character, type `!`, type the name of your **Snippet**, and then select `Enter`.  
    
Navigate to [Run Snippets Of Code From Any Page][DevtoolsGuideChromiumJavascriptSnippets] to learn more.

### Set up a Workspace  

By default, when you edit a file in the **Sources** tool, those changes are lost when you refresh the page.  **Workspaces** enable you to save the changes that you make in DevTools to your file system.  By using Workspaces, DevTools is able to be used as your code editor.

To get started, navigate to [Edit Files With Workspaces][DevtoolsGuideChromiumWorkspacesIndex].

### Edit CSS

In the Sources tool, the **Editor** pane supports editing CSS, but usually the Elements tool, instead, is the best way to edit CSS.

In the Sources tool, if you edit a CSS file by adding the style rule below:

```css
.metadata.page-metadata {
    color: red;
}
```

:::image type="complex" source="../media/edit-css.msft.png" alt-text="Edit CSS in the Editor pane to change the text color of the subtitle to red" lightbox="../media/edit-css.msft.png":::
   Edit CSS in the **Editor** pane to change the text color of the subtitle to red  
:::image-end:::  

CSS changes take effect immediately; no saving is needed.

## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- links -->  

[DevtoolsGuideChromiumCommandMenuIndex]: ../command-menu/index.md "Run commands with the Microsoft Edge DevTools Command Menu | Microsoft Docs"  
[DevtoolsGuideChromiumJavascriptIndex]: ../javascript/index.md "Get started with debugging JavaScript in Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsGuideChromiumJavascriptSnippets]: ../javascript/snippets.md "Run snippets of JavaScript on any page with Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsGuideChromiumWorkspacesIndex]: ../workspaces/index.md "Edit files with Workspaces | Microsoft Docs"  

[HtmlstandardOrigin]: https://html.spec.whatwg.org/multipage/origin.html#origin "Origin | HTML Standard"  

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
