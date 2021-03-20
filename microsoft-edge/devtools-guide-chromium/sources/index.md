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

Use the **Sources** tool to navigate, edit, and debug JavaScript that's returned by the server.

*   **Navigate:** Display the file system that's returned from the server to construct the current webpage.  View JavaScript and other files that are returned from the server.
*   **Edit:** Make experimental edits to the JavaScript code that is returned from the server.  These changes are preserved (in the DevTools sandbox) until page refresh.
*   **Debug:** Use the Debugger to step through the JavaScript code that is returned from the server, and to step through experimental changes to the code.

:::image type="complex" source="../media/debugging.msft.png" alt-text="Debug JavaScript" lightbox="../media/debugging.msft.png":::
   Navigate, edit, and debug JavaScript returned by the server 
:::image-end:::  

This JavaScript code from the server may be different than the source files you work with, if those files go through transformations.  The **Sources** tool shows the final JavaScript code that's presented to the browser.

The **Sources** tool is sometimes called the *Sources panel*.

Additional functionality:
*   Make edits to local code and save them, by using a Workspace (the **Filesystem** tab) or **Overrides**.  Such changes to code are preserved across page refreshes.

## Layout of the Sources tool

The **Sources** tool has three panes:
*   Upper left (or left): the **File Explorer** pane (also called the **File Navigator** pane).
*   Upper right (or middle): the **Editor** pane (also called the **Code Editor** or **Text Editor** pane).
*   Bottom (or right): the **Debugger** pane (also called the **JavaScript Debugger** pane).  Designed to look and feel like the debugger in Visual Studio Code and in Visual Studio.

:::image type="complex" source="../media/debugging.msft.png" alt-text="Debug JavaScript" lightbox="../media/debugging.msft.png":::
   Navigate, edit, and debug JavaScript returned by the server 
:::image-end:::  

### Maximizing the Sources tool window

When the DevTools window is wide within the browser window, or when the DevTools window is undocked into a separate window, the **Debugger** pane is displayed to the right of the **Editor** pane, instead of below it.

To widen the Sources tool window:

*   Select the left edge of the DevTools window and move it to the left.

To maximize the Sources tool window:

1. In the upper right corner of the DevTools window, select the elipses (...) button (for **Customize and control DevTools**).
1. In the **Dock side** section, select **Undock into separate window**.
1. Optionally, move the DevTools window to a separate monitor.

The File Explorer pane will be on the left side of the window, and the Debugger pane will be on the right side of the window.

## Navigate files returned by the server  

To list and navigate among all of the resources that the page has loaded, use the **Page** tab in the **File Explorer** pane (on the left).

:::image type="complex" source="../media/sources-page-pane.msft.png" alt-text="The Page pane" lightbox="../media/sources-page-pane.msft.png":::
   The **Page** tab
:::image-end:::  

How the **Page** tab is organized:  
*   The top-level, such as `top` in the previous figure, represents an [HTML frame][W3CHtml4Frames].  Find `top` on every page that you visit.  `top` represents the main document frame.  
*   The second-level, such as `docs.microsoft.com` in the previous figure, represents an [origin][HtmlstandardOrigin].  
*   The third-level, fourth-level, and so on, represent directories and resources that were loaded from that origin.  For example, in the previous figure the full path to the resource `devtools-guide-chromium` is `docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium`  
    
To display a file in the **Editor** pane, choose a file in the **Page** tab.  You may display any type of file.  For images, a preview of the image is displayed.  

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

To go to a line number or symbol in the file: 

In the File Explorer pane, click the ellipses (...) (**More options**), select **Open File** (**Ctrl+P**), then type ? to view options, or \: to **Go to line**, or \@ to **Go to symbol**.

## Debug JavaScript  

Instead of using `console.log()` to infer where your JavaScript is going wrong, consider using the debugger of Microsoft Edge DevTools.  You set a breakpoint (an intentional stopping place in your code that's returned from the server), and then step through the code.  As you step through the code, you may display and change the values of all currently-defined properties and variables, run JavaScript in the **Console**, and more.

To learn the basics of debugging in DevTools, navigate to [Get Started With Debugging JavaScript][DevtoolsGuideChromiumJavascriptIndex].  That page is a short tutorial with screen captures (the same captures that are shown in the present article), using an existing, simple project.

:::image type="complex" source="../media/debugging.msft.png" alt-text="Debug JavaScript" lightbox="../media/debugging.msft.png":::
   Debug JavaScript  
:::image-end:::  

## Additional functionality

The main purpose of the Sources tool is to view, edit, and debug JavaScript that's returned from the server.  The Sources tool also provides the following capabilities.

### Tabs in the File Explorer pane

The **File Explorer** pane has the following tabs:
*   **Page** tab - Explore the file system that's returned from the server to construct the current webpage, and select JavaScript files to view, edit, and debug.
*   **Filesystem** tab - When using Workspaces, to save changes to local files.  This enables DevTools to act as an IDE.  [Set up a Workspace](#set-up-a-workspace), so that changes you make in DevTools get saved to the code on your file system.  Alternatively, for persistent editing of local files, use the "DevTools for Visual Studio Code" extension (todo: link to that extension doc).
*   **Overrides** tab - Override page assets (such as images) by files from a local folder.  It's a way of changing what the server sends, after the fact.   On a folder basis.
*   **Content scripts** tab - Used for extensions.  Content scripts from from extensions; extension authors use them.  Use this to debug the JavaScript that an extension is injecting onto the page.
*   **Snippets** tab - Create and save JavaScript code snippets, for reuse on any webpage. (todo: on every page, or a specified page only?)
*   \>> (**More tabs**) - This "double chevron" button displays the above tabs when the display is narrow.
*   ... (**More options**)
    *   **Group by folder** - Controls how files are displayed in the **Page** tab: as a flat list, or grouped by server and directory.
    *   **Open File** - Leads to the commands: **Open file**, **Run Command**, **Run snippet**, **Go to line**, **Go to symbol**.

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

**Snippets** are similar to bookmarklets.

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
