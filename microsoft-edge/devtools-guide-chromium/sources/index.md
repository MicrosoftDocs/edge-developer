---
description: Use the Sources tool in Microsoft Edge DevTools to view the JavaScript files that are returned from the server, experimentally edit the JavaScript files, and use the JavaScript debugger on them.  Also supports Workspaces, to edit local JavaScript files.
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
copy UI overview aspects from Debugger tutorial into Debugger section here.

It's good to use this JS viewer just to read, or to insert console.log, or to do full-on setting breakpoints.  You don't have to set breakpoints and use the debugger; the Sources tool is useful in all these cases. 
-->

Use the **Sources** tool to view, modify, and debug JavaScript that's returned by the server.

*   **Navigate:** Display the file system that's returned from the server to construct the current webpage.
*   **View and edit:** View JavaScript and other files that are returned from the server.  Make experimental edits to the JavaScript code.  These changes are preserved (in the DevTools sandbox) until page refresh.
*   **Debug:** Use the Debugger to step through the JavaScript code that is returned from the server, and to step through experimental changes to the code.

:::image type="complex" source="../media/debugging.msft.png" alt-text="Debug JavaScript" lightbox="../media/debugging.msft.png":::
   Navigate, view, edit, and debug JavaScript returned by the server 
:::image-end:::  

## When to use the Sources tool

<!-- todo: maybe merge with the planned "scenarios of when various tools/setups are recommended".  First, cover the baseline scenario (clearly stating that scenario as the baseline), then go over the various setup/approach options. -->

The **Sources** tool is a JavaScript viewer, editor, and debugger.

Use the **Sources** tool to check that your resources are loaded, and to view, edit, and debug JavaScript, especially JavaScript that's returned from the server.  

Use the Sources tool when you want to see the JavaScript code that is returned from the server, rather than the source code, which might be different.

Use the Sources tool, rather than a code editor, for fast iterations when you are prototyping JavaScript code and don't want to go through the build process every time.

This JavaScript code from the server may be different than the source files you work with, if those files go through transformations.  The **Sources** tool shows the final JavaScript code that's presented to the browser.

Additional functionality:
*   View local files (in addition to files returned from the server), and edit and save changes to local files, by using a Workspace (the **Filesystem** tab) or **Overrides**.  Such changes to code are preserved across page refreshes.

## Layout of the Sources tool

:::image type="complex" source="../media/debugging-panes.msft.png" alt-text="Debug JavaScript" lightbox="../media/debugging-panes.msft.png":::
   The three panes of the Sources tool  
:::image-end:::  

The **Sources** tool has three panes:
*   Left (or upper left): the **Explorer** pane.
*   Middle (or upper right: the **Editor** pane.
*   Right (or bottom): the **Debugger** pane.  The Debugger pane is split into two panes when it is shown at the bottom.

### Maximizing the DevTools window

When the DevTools window is wide within the browser window, or when the DevTools window is undocked into a separate window, the **Debugger** pane is displayed to the right of the **Editor** pane, instead of below it.

To widen the DevTools window:

*   Select the left edge of the DevTools window and move it to the left.

To maximize the DevTools window:

1. In the upper right corner of the DevTools window, select the elipses (...) button (for **Customize and control DevTools**).
1. In the **Dock side** section, select **Undock into separate window**.
1. Optionally, move the DevTools window to a separate monitor.

## Navigate files returned by the server  

To list and navigate among all of the resources that the page has loaded, use the **Page** tab in the **Explorer** pane (on the left).

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

The **Page** tab is the main tab in the **Explorer** pane.  For other tabs, such as **Filesystem**, **Overrides**, **Content scripts**, or **Snippets**, see [Tabs in the Explorer pane](#tabs-in-the-explorer-pane).

## View and edit JavaScript files

Use the **Editor** pane to view or edit the JavaScript that's returned from the server.  If you modify the JavaScript code, DevTools updates the page to run the modified code.  The Sources tool can also be set up to view and edit local JavaScript source files.

:::image type="complex" source="../media/edit-js.msft.png" alt-text="Editing JavaScript in the Editor pane" lightbox="../media/edit-js.msft.png":::
   Editing JavaScript in the **Editor** pane  
:::image-end:::

### Pretty-print to reformat a file

To use pretty-print to reformat a file to make it readable, click the braces button (**{}**) at the bottom of the Editor pane.  For more information, navigate to [Make a minified file readable](../javascript/reference.md#reformat-a-file-with-pretty-print).

### Apply or save changes

For JavaScript changes to take effect, select `Control`+`S` \(Windows, Linux\) or `Command`+`S` \(macOS\).  DevTools does not re-run a script, so the only JavaScript changes that take effect are those that you make inside of functions.  For example, in the following figure, notice how `console.log('A')` does not run, whereas `console.log('B')` does.  If DevTools re-runs the entire script after making the change, <!-- why/when would DevTools re-run the entire script?  above says "DevTools does not re-run a script" --> then the text `A` is logged to the **Console**.  

By default, your edits are discarded when you refresh the page.  To learn how to save the changes to your file system, navigate to [Set up a Workspace](#set-up-a-workspace).

To go to a line number or symbol in the file: 

In the **Explorer** pane, click the ellipses (...) (**More options**), select **Open File** (**Ctrl+P**), then type any of the following characters:

*   `?` to view options.
*   \: to **Go to line**.
*   \@ to **Go to symbol**.

## Debug JavaScript  

The JavaScript Debugger in DevTools, in the **Debugger** pane, is designed to look and feel like the debugger in Visual Studio Code and in Visual Studio.

To infer where your JavaScript is going wrong, you can use the simple approach of inserting `console.log()` statements in the **Editor** pane.  Another approach, that's more powerful (yet can also be simple), is to use the debugger of Microsoft Edge DevTools:

1. Set a breakpoint (an intentional stopping place in the code), run the code at full speed up to the line of code on which the breakpoint is set, and then step through the lines of code, starting at that breakpoint.
1. As you step through the code, you may display and change the values of all currently-defined properties and variables, issue JavaScript statements in the **Console**, and more.

:::image type="complex" source="../media/debugging.msft.png" alt-text="Debug JavaScript" lightbox="../media/debugging.msft.png":::
   Debug JavaScript  
:::image-end:::  

The Debugger, together with the Editor, supports the following actions:

*   View and edit JavaScript code.
*   Set breakpoints, to pause code.
*   Step through code.
*   View and edit properties and variables.
*   Watch the values of JavaScript expressions.
*   View the call stack.
*   Ignore a script or pattern of scripts.
*   Run snippets of debug code from any page.

### Related articles

*   [Get started with debugging JavaScript][DevtoolsGuideChromiumJavascriptIndex] - A short tutorial with screen captures, using an existing, simple project.
*   [Use the debugger](../javascript/reference.md) - Examples and screen captures showing the Debugger features.
*   [Pause your code with breakpoints](../javascript/breakpoints.md) - How to set basic and advanced breakpoints in the debugger.

### Related extensions for Visual Studio Code

*   Debugger for Microsoft Edge
*   Microsoft Edge Tools for VS Code

For more information, see the [Extensions](../../microsoft-edge/visual-studio-code/index.md#extensions) section in the article "Visual Studio Code overview".

<!-- need a Scenarios/Pros/Cons matrix, when to use which approach
## Scenarios and recommended approaches
-->

<!-- 
Debugger for Microsoft Edge:
This extension is an alternative to the DevTools Source tool.
What are pros/cons of the "Debugger for Microsoft Edge" vs DevTools Sources tool's debugger?  The app environment: DevTools window connected to browser, vs VS Code.
This extension runs against the JavaScript code that's returned from the server, rather than the local, source JavaScript code.
-->

<!-- 
Microsoft Edge Tools for VS Code:
Is this extension an alternative to the DevTools Source tool?
Does this extension run against the JS returned from the server, or the source JS?
-->

## Scenarios for location of JavaScript code

<!-- if I'm using React and I set up a Workspace, does the DevTools Sources tool's debugger work for editing local React source files? -->

Depending on your project, local, source JavaScript may or may not be the same as the client-side JavaScript that's returned by the server.

In some projects, the JavaScript code that's returned by the server is the same as your local JavaScript source code that you maintain.  

In other projects, such as when using React, the JavaScript code that's returned by the server is very different than your local JavaScript source code that you maintain.  In this case, Source tool's JavaScript editor (or code viewer) and debugger provide a helpful alternative view of the JavaScript code.

If a project uses complex transformations of JavaScript from the source files to the files that are returned by the server, such as with the React framework, the **Sources** tool is useful for inspecting and experimenting with the transformed, client-side (front-end) JavaScript that's returned from the server.  The **Sources** tool is not intended to debug the local source files in that scenario.

When you find a fix that works for the JavaScript that is returned by the server, you then need to apply that fix, or an equivalent of that fix in the code prior to transformation, in your actual source code and then re-deploy to the server.

The Sources tool can be used to view, edit, and debug local source files if you set up a Workspace.  Another popular alternative is to use the "Dev Tools for Microsoft Edge" extension for Visual Studio Code.

## Additional functionality

The main purpose of the Sources tool is to view, edit, and debug JavaScript that's returned from the server.  The Sources tool also provides the following capabilities.

### Tabs in the Explorer pane

The **Explorer** pane has the following tabs:
*   **Page** tab - Explore the file system that's returned from the server to construct the current webpage, and select JavaScript files to view, edit, and debug.
*   **Filesystem** tab - When using Workspaces, to save changes to local files.  This enables DevTools to act as an IDE.  [Set up a Workspace](#set-up-a-workspace), so that changes you make in DevTools get saved to the code on your file system.  Alternatively, for persistent editing of local files, use the "Edge DevTools for Visual Studio Code extension".
*   **Overrides** tab - Override page assets (such as images) by files from a local folder.  It's a way of changing what the server sends, after the fact.   On a folder basis.
*   **Content scripts** tab - Used for extensions.  Content scripts are from extensions; extension authors use them.  Use this to debug the JavaScript that an extension is injecting onto the page.
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

<!-- delete this section? -->

In the Sources tool, the **Editor** pane supports editing CSS, but usually the best way to edit CSS is to [Edit CSS font styles and settings in the Styles pane](../inspect-styles/edit-fonts.md) of the **Elements** tool.

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
