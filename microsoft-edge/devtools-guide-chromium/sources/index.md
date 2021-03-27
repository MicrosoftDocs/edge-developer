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

<!-- todo: check Debugger articles for any other points to introduce here -->

Use the **Sources** tool to view, modify, and debug JavaScript that's returned by the server.  The Sources tool has three panes:

| Pane | Actions |
|---|---|
| **Explorer** pane | Navigate among the resources that are returned from the server to construct the current webpage.  Select files, images, and other resources, and view their paths.  Optionally, set up a local Workspace to save changes directly to source files. |
| **Editor** pane | View JavaScript, CSS, and other files that are returned from the server.  Make experimental edits to the JavaScript or CSS code.  These changes are preserved (in the DevTools sandbox) until page refresh, or are saved to a local Workspace. |
| **Debugger** pane | Use the JavaScript Debugger to step through the JavaScript code, and to step through experimental changes to the code, while watching any JavaScript expressions you specify.  Watch and manually change variable values, and automatically show which variables are currently in-scope for the current line of code. |

:::image type="complex" source="../media/debugging.msft.png" alt-text="Navigate, view, edit, and debug JavaScript returned by the server" lightbox="../media/debugging.msft.png":::
   Navigate, view, edit, and debug JavaScript returned by the server  
:::image-end:::  

For related articles, navigate to [Next steps](#next-steps), below.

## Arranging the panes of the Sources tool

The **Sources** tool has three panes, placed as follows:
*   Left (or upper left): the **Explorer** pane.
*   Middle (or upper right: the **Editor** pane.
*   Right (or bottom): the **Debugger** pane.

:::row:::
   :::column span="":::
      The following figure shows the Sources tool with default, narrow layout.  The **Debugger** pane is at the bottom and is split into two panes, with **Scope** and **Watch** in the lower-right.
   :::column-end:::
   :::column span="":::
     The following figure shows the Sources tool with wide layout, and also shows DevTools undocked into a separate window.  The **Debugger** pane is now on the right, including **Scope** and **Watch**.  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="":::
      :::image type="complex" source="../media/debugging-panes-narrow.msft.png" alt-text="The three panes of the Sources tool, in narrow layout" lightbox="../media/debugging-panes-narrow.msft.png":::
         The three panes of the Sources tool, in narrow layout  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../media/debugging-panes.msft.png" alt-text="The three panes of the Sources tool, in wide layout" lightbox="../media/debugging-panes.msft.png":::
         The three panes of the Sources tool, in wide layout  
      :::image-end:::  
   :::column-end:::
:::row-end:::  

Wide layout is recommended.

### Maximizing the DevTools window

When the DevTools window is wide, the **Debugger** pane is displayed to the right of the **Editor** pane, instead of below it.

To widen the DevTools window:

*   Select the left edge of the DevTools window and move it to the left.

To maximize the DevTools window:

1. In the upper right corner of the DevTools window, select the elipses (...) button (for **Customize and control DevTools**).
1. In the **Dock side** section, select **Undock into separate window**.
1. Optionally, move the DevTools window to a separate monitor.

For more information, navigate to [Change Microsoft Edge DevTools placement (Undock, Dock to bottom, Dock to left)][DevToolsCustomizePlacement].

## Explorer pane to navigate files

Use the **Explorer** pane, on the left, to navigate among the resources that are returned from the server to construct the current webpage.  Select files, images, and other resources, and view their paths.  Optionally, set up a local Workspace to save changes directly to source files.

### Page tab

Explore the file system that's returned from the server to construct the current webpage, and select JavaScript files to view, edit, and debug.  The **Page** tab is the main tab in the Explorer pane.

To list and navigate among all of the resources that the page has loaded, use the **Page** tab in the **Explorer** pane (on the left).

:::image type="complex" source="../media/sources-page-pane.msft.png" alt-text="The Page tab" lightbox="../media/sources-page-pane.msft.png":::
   The **Page** tab
:::image-end:::  

How the **Page** tab is organized, in the tree in the **Explorer** pane:

*   The top level is indicated as a **window** icon labeled as `top`, and represents an [HTML frame][W3CHtml4Frames]; `top` represents the main document frame.  

*   The second level is indicated by a **cloud** icon, such as `microsoft-edge-chromium-devtools.glitch.me` in the previous figure, represents an [origin][HtmlstandardOrigin].  

*   The third level is indicated by a **folder** icon, and represents a directory.

*   A deeply nested item is shown as a **page** icon, and represents a resource that was loaded from the above origin.  For example, in the previous figure, the full path to the resources `get-started.html` and `get-started.js` is `microsoft-edge-chromium-devtools.glitch.me/debug-js/`.  Hover over an item to see its path.
    
To display a file in the **Editor** pane, choose a file in the **Page** tab.  You may display any type of file.  For images, a preview of the image is displayed.  

<!-- 
not really needed; single good capture above is sufficient; delete these lines and the png file (not used in other articles)
:::image type="complex" source="../media/sources-editor-pane.msft.png" alt-text="Display the contents of a4d10f71.index-docs.js in the Editor pane" lightbox="../media/sources-editor-pane.msft.png":::
   Display the contents of `a4d10f71.index-docs.js` in the **Editor** pane  
:::image-end:::   -->

#### Changing the grouping in the Page tab

*   ... (**More options**)
    *   **Group by folder** - Controls how files are displayed in the **Page** tab: as a flat list, or grouped by server and directory.

### Filesystem tab for a Workspace

<!-- todo: condense section -->

For using a Workspace, to save changes to local files, so that changes you make in DevTools get saved to the code on your file system.  

To work with local source code rather than a copy of the code that's returned from the server, set up a Workspace, in the **Filesystem** tab.

The **Sources** tool is a JavaScript viewer, editor, and debugger.

Use the **Sources** tool to check that your resources are loaded, and to view, edit, and debug JavaScript, especially JavaScript that's returned from the server.  

Use the Sources tool when you want to view the JavaScript code that is returned from the server, rather than the source code, which might be different.

Use the Sources tool, rather than a code editor, for fast iterations when you are prototyping JavaScript code and don't want to go through the build process every time.

This JavaScript code from the server may be different than the source files you work with, if those files go through transformations.  The **Sources** tool shows the final JavaScript code that's presented to the browser.

Setting up a Workspace allows DevTools to act as an Integrated Development Environment (IDE).  

Alternatively, for persistent editing of local files, use the "Edge DevTools for Visual Studio Code extension"; navigate to [Using extensions for Visual Studio Code](#using-extensions-for-visual-studio-code), below.  

By default, when you edit a file in the **Sources** tool, those changes are lost when you refresh the page.

Using a Workspace saves the changes that you make in DevTools to your file system.

By using Workspaces, DevTools is able to be used as your code editor and Integrated Development Environment (IDE) for your source files.

For more information, navigate to [Edit files with Workspaces][DevtoolsGuideChromiumWorkspacesIndex].

View local files (in addition to files returned from the server), and edit and save changes to local files, by using a Workspace (the **Filesystem** tab) or **Overrides**.  Such changes to code are preserved across page refreshes.

Depending on your project, local, source JavaScript may or may not be the same as the client-side JavaScript that's returned by the server.

In some projects, the JavaScript code that's returned by the server is the same as your local JavaScript source code that you maintain.  

In other projects, such as when using React, the JavaScript code that's returned by the server is very different than your local JavaScript source code that you maintain.  In this case, Source tool's JavaScript editor (or code viewer) and debugger provide a helpful alternative view of the JavaScript code.

If a project uses complex transformations of JavaScript from the source files to the files that are returned by the server, such as with the React framework, the **Sources** tool is useful for inspecting and experimenting with the transformed, client-side (front-end) JavaScript that's returned from the server.  The **Sources** tool is not intended to debug the local source files in that scenario.

When you find a fix that works for the JavaScript that is returned by the server, you then need to apply that fix, or an equivalent of that fix in the code prior to transformation, in your actual source code and then re-deploy to the server.

The Sources tool can be used to view, edit, and debug local source files if you set up a Workspace.  Another popular alternative is to use the "Dev Tools for Microsoft Edge" extension for Visual Studio Code.

You can also [Map preprocessed code to source code][DevToolsJavaScriptSourceMaps].

### Overrides tab

Override page assets (such as images) by files from a local folder.  This is a way of changing what the server sends, after the server returns assets.  

For more information, navigate to [Overrides][DevtoolsJavascriptOverrides].

### Snippets tab

<!-- todo: condense section -->

Create and save JavaScript code snippets for reuse on any webpage, such as code to include jQuery.

Use the **Snippets** tab to create, save, and run Snippets.
Snippets are scripts which you may run on any page.
Imagine that you repeatedly type out the following code in the **Console**, in order to insert the jQuery library into a page, so that you may run jQuery commands from the **Console**.  

```javascript
let script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.2.1.min.js';
script.crossOrigin = 'anonymous';
script.integrity = 'sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=';
document.head.appendChild(script);
```  

Instead, you may save this code in a **Snippet** and run it with a couple of button clicks, any time you need it.  DevTools saves the **Snippet** to your file system.  

:::image type="complex" source="../media/snippet.msft.png" alt-text="A Snippet that inserts the jQuery library into a page" lightbox="../media/snippet.msft.png":::
   A Snippet that inserts the jQuery library into a page  
:::image-end:::  

To run a Snippet:

*   Open the file using the **Snippets** pane, and choose **Run** \(![The Run button](../media/run-snippet-icon.msft.png)\).  
*   Open the [Command Menu][DevtoolsGuideChromiumCommandMenuIndex], delete the `>` character, type `!`, type the name of your Snippet, and then select `Enter`.  
    
For more information, navigate to [Run snippets of code from any page][DevtoolsGuideChromiumJavascriptSnippets].

Snippets are similar to bookmarklets.

### More options next to tabs in the Explorer pane

*   \>> (**More tabs**) - This "double chevron" button displays the above tabs when the display is narrow.
*   ... (**More options**)
    *   **Group by folder** - Controls how files are displayed in the **Page** tab: as a flat list, or grouped by server and directory.
    *   **Open File** - Leads to the commands: **Open file**, **Run Command**, **Run snippet**, **Go to line**, **Go to symbol**.

## Editor pane to view or edit JavaScript files

<!-- there was a proposal to link from here to where? -->

Use the **Editor** pane to view or edit JavaScript and other files that are returned from the server.  Make experimental edits to the JavaScript code; DevTools updates the page to run the modified code.  These experimental changes are preserved (in the DevTools sandbox) until page refresh.  To view and edit local JavaScript source files, set up a Workspace.

:::image type="complex" source="../media/edit-js.msft.png" alt-text="Editing JavaScript in the Editor pane" lightbox="../media/edit-js.msft.png":::
   Editing JavaScript in the **Editor** pane  
:::image-end:::

The **Editor** pane has the following level of support for various file types:

| File Type | Supported Actions |
|---------|---------|
| JavaScript | View, edit, and debug. |
| CSS | View and edit. |
| HTML | View. |
| Images | View. |

### Reformat a minified JavaScript file with pretty-print

To use pretty-print to reformat a file to make it readable, click the braces button (**{}**) at the bottom of the Editor pane.  For more information, navigate to 
[Reformat a minified JavaScript file with pretty-print][DevToolsJavaScriptReferenceReformat] in the article "Use the debugger features".

### Apply or save changes

For JavaScript changes to take effect, select `Control`+`S` \(Windows, Linux\) or `Command`+`S` \(macOS\).  DevTools does not re-run a script, so the only JavaScript changes that take effect are those that you make inside of functions.  For example, in the following figure, notice how `console.log('A')` does not run, whereas `console.log('B')` does.  If DevTools re-runs the entire script after making the change, <!-- why/when would DevTools re-run the entire script?  above says "DevTools does not re-run a script" --> then the text `A` is logged to the **Console**.  

By default, your edits are discarded when you refresh the page.  To learn how to save the changes to your file system, navigate to [Edit files with Workspaces][DevtoolsGuideChromiumWorkspacesIndex].

To go to a line number or symbol in the file: 

In the **Explorer** pane, click the ellipses (...) (**More options**), select **Open File** (**Ctrl+P**), then type any of the following characters:

*   `?` to view options.
*   \: to **Go to line**.
*   \@ to **Go to symbol**.

### Edit a CSS file

Generally, the best way to edit CSS is to [Edit CSS font styles and settings in the Styles pane][DevToolsInspectStylesEditFonts] of the **Elements** tool.

The Sources tool supports directly editing a CSS file.  For example, if you edit a CSS file by adding the style rule below:

```css
.metadata.page-metadata {
    color: red;
}
```

:::image type="complex" source="../media/edit-css.msft.png" alt-text="Edit CSS in the Editor pane to change the text color of the subtitle to red" lightbox="../media/edit-css.msft.png":::
   Edit CSS in the **Editor** pane to change the text color of the subtitle to red  
:::image-end:::  

CSS changes take effect immediately; no saving is needed.

## Debugger pane to debug JavaScript code

Use the JavaScript Debugger to step through the JavaScript code that's returned by the server (or stored locally in a Workspace).  Step through experimental changes to the code, while watching any JavaScript expressions you specify.  Watch and manually change variable values, and automatically show which variables are currently in-scope for the current line of code.

The Debugger supports standard debugging actions, such as:  
*   Setting breakpoints, to pause code.
*   Stepping through code.
*   Viewing and editing properties and variables.
*   Watching the values of JavaScript expressions.
*   Viewing the call stack (the sequence of function calls so far).

The JavaScript Debugger in DevTools, in the **Debugger** pane, is designed to look and feel and work like 
[the debugger in Visual Studio Code][CodeVisualStudioComDocsEditorDebugging] and
[the debugger in Visual Studio][DMCVisualStudioDebuggerNavigatingThroughCodeWithTheDebugger].

To troubleshoot where your JavaScript is going wrong, you can use the simple approach of inserting `console.log()` statements in the **Editor** pane.  Another approach, that's more powerful (yet can also be simple), is to use the debugger of Microsoft Edge DevTools.

The basic approach to using a debugger is to set a breakpoint (an intentional stopping place in the code), run the code at full speed up to the line of code on which the breakpoint is set, and then step through the lines of code, starting at that breakpoint.  

For example, the tutorial [Get started with debugging JavaScript][DevtoolsGuideChromiumJavascriptIndex] uses an existing, simple webpage 
[Demo: Get Started Debugging JavaScript with Microsoft Edge (Chromium) DevTools][DevtoolsGlitchMeDebugJsGetStarted], that contains a few form controls.  

As shown in the tutorial, to get into the "Paused" mode of the debugger, you do the following:

1. Open the **DevTools** window, such as by pressing `Shift+Ctrl+I` or `Shift+Command+I`.

1. Select the **Sources** tab, to show the Sources tool.

1. In the **Explorer** pane on the left, select the **Page** tab, then select the JavaScript file (`get-started.js` in this case).

1. In the **Editor** pane, click a line number near a suspect line of code, such as `var sum = addend1 + addend2;`, to set a breakpoint on that line.

1. In the webpage, which has simple form controls, enter the values 5 and 1, then select the button **Add Number 1 and Number 2**.  

   Selecting the form's button triggers sending the form-data and running the JavaScript code.  The debugger runs the JavaScript code and then pauses at the breakpoint (`var sum = addend1 + addend2;`).

1. You then use the **Watch** or **Scope** pane, and use the controls at the top of the **Debugger** pane to step through the code.

<!-- "sources-paused-breakpoint.msft.png" is not currently directly used. It's the upstream source for the below image. -->

:::image type="complex" source="../media/sources-paused-breakpoint-highlights.msft.png" alt-text="Entering Paused mode of the Debugger" lightbox="../media/sources-paused-breakpoint-highlights.msft.png":::
   Entering Paused mode of the Debugger  
:::image-end:::  

The **Scope** pane shows variables that are in-scope, and their values.  In the above figure, we added the Watch expressions `sum` and `typeof sum`, and stepped two lines past the breakpoint.

Instead of setting **Watch** expressions in the **Debugger** pane, we could have issued a statement `console.log(typeof sum)` in the **Console** pane of the DevTools.

Instead of using the Debugger, we could have added a statement `console.log(typeof sum)` in the code.  The debugger gives a richer, more flexible display and environment.

In the Debugger, as you step through the code, you may display and change the values of all currently-defined properties and variables, issue JavaScript statements in the **Console**, and more.

Breakpoints are preserved when you refresh the page.

:::image type="complex" source="../media/debugging.msft.png" alt-text="Debug JavaScript" lightbox="../media/debugging.msft.png":::
   Debug JavaScript  
:::image-end:::  

### Articles related to debugging

*   [Get started with debugging JavaScript][DevtoolsGuideChromiumJavascriptIndex] - A short tutorial with screen captures, using an existing, simple project.

*   [Use the debugger features][DevToolsJavaScriptReference] - How to use the Debugger to set breakpoints, step through code, view and modify variable values, watch JavaScript expressions, and view the call stack (the sequence of function calls so far).

*   [Pause your code with breakpoints][DevToolsJavaScriptBreakpoints] - How to set basic and specialized breakpoints in the debugger.

## Using extensions for Visual Studio Code

<!-- brief overview of Scenarios/Pros/Cons, advise when to use which approach -->

<!-- when using React and a Workspace, does the DevTools Sources tool's debugger work for editing local React source files? -->

### Extension\: Debugger for Microsoft Edge

This extension is an alternative to the DevTools Source tool.

There are different capabilities and limitations of the "Debugger for Microsoft Edge" extension, compared to using the Debugger of the Sources tool in DevTools.

With DevTools, the debugger runs in the DevTools window connected to a browser window.

With the extension for Visual Studio Code, the debugger runs in the Visual Studio Code window.

This extension runs against the JavaScript code that's returned from the server.

For more information, navigate to the [Extensions][DevToolsVSCodeIndexExtensions] section in the article "Visual Studio Code overview".

### Extension\: Microsoft Edge Tools for Visual Studio Code

This extension is an alternative to the Sources tool of DevTools.

This extension runs against the JavaScript that is returned from the server, or against the local JavaScript source code.

For more information, navigate to the [Extensions][DevToolsVSCodeIndexExtensions] section in the article "Visual Studio Code overview".

## Next steps

<!-- currently a list of all links from this article. todo: shorten/reorder/group -->

*   [Get started with debugging JavaScript in Microsoft Edge DevTools][DevtoolsGuideChromiumJavascriptIndex] - An introductory tutorial (with screen captures you can skim), using an existing, simple project.
*   [Demo: Get Started Debugging JavaScript with Microsoft Edge (Chromium) DevTools][DevtoolsGlitchMeDebugJsGetStarted] - A direct link to the simple Debugging demo at Glitch.

*   [Use the debugger features][DevToolsJavaScriptReference] - How to use the Debugger to set breakpoints, step through code, view and modify variable values, watch JavaScript expressions, and view the call stack (the sequence of function calls so far).

*   [Pause your code with breakpoints][DevToolsJavaScriptBreakpoints] - How to set basic and specialized breakpoints in the debugger.

*   [Edit CSS font styles and settings in the Styles pane][DevToolsInspectStylesEditFonts]

*   [Map preprocessed code to source code][DevToolsJavaScriptSourceMaps]

*   [Change Microsoft Edge DevTools placement (Undock, Dock to bottom, Dock to left)][DevToolsCustomizePlacement]

*   [Override webpage resources with local copies using Microsoft Edge DevTools][DevtoolsJavascriptOverrides]

*   The section [Extensions][DevToolsVSCodeIndexExtensions] within the article "Visual Studio Code overview"

*   [Mark content scripts as Library code][DevToolsJavaScriptGuidesMarkContentScriptsLibraryCode]

*   The section [Reformat a minified JavaScript file with pretty-print][DevToolsJavaScriptReferenceReformat] within the article "Use the debugger features"

*   [Run commands with the Microsoft Edge DevTools Command Menu][DevtoolsGuideChromiumCommandMenuIndex]

*   [Run snippets of JavaScript on any page with Microsoft Edge DevTools][DevtoolsGuideChromiumJavascriptSnippets]

*   [Edit files with Workspaces][DevtoolsGuideChromiumWorkspacesIndex]

## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- links -->  

[DevToolsInspectStylesEditFonts]: ../inspect-styles/edit-fonts.md "Edit CSS font styles and settings in the Styles pane | Microsoft Docs"
[DevToolsJavaScriptSourceMaps]: ../javascript/source-maps.md "Map preprocessed code to source code | Microsoft Docs"
[DevToolsCustomizePlacement]: ../customize/placement.md "Change Microsoft Edge DevTools placement (Undock, Dock to bottom, Dock to left) | Microsoft Docs"
[DevtoolsJavascriptOverrides]: ../javascript/overrides.md "Override webpage resources with local copies using Microsoft Edge DevTools | Microsoft Docs"  
[DevToolsVSCodeIndexExtensions]: ../../visual-studio-code/index.md#extensions "Extensions - Visual Studio Code overview | Microsoft Docs"
[DevToolsJavaScriptGuidesMarkContentScriptsLibraryCode]: ../javascript/guides/mark-content-scripts-library-code.md "Mark content scripts as Library code | Microsoft Docs"
[DevToolsJavaScriptReference]: ../javascript/reference.md "Use the debugger features | Microsoft Docs"
[DevToolsJavaScriptBreakpoints]: ../javascript/breakpoints.md "Pause your code with breakpoints | Microsoft Docs"
[DevToolsJavaScriptReferenceReformat]: ../javascript/reference.md#reformat-a-minified-javascript-file-with-pretty-print "Reformat a minified JavaScript file with pretty-print - Use the debugger features | Microsoft Docs"
[DevtoolsGuideChromiumCommandMenuIndex]: ../command-menu/index.md "Run commands with the Microsoft Edge DevTools Command Menu | Microsoft Docs"  
[DevtoolsGuideChromiumJavascriptIndex]: ../javascript/index.md "Get started with debugging JavaScript in Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsGuideChromiumJavascriptSnippets]: ../javascript/snippets.md "Run snippets of JavaScript on any page with Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsGuideChromiumWorkspacesIndex]: ../workspaces/index.md "Edit files with Workspaces | Microsoft Docs"  
<!-- external: -->
[CodeVisualStudioComDocsEditorDebugging]: https://code.visualstudio.com/docs/editor/debugging "Debugging - Visual Studio Code | Microsoft Docs"
[DMCVisualStudioDebuggerNavigatingThroughCodeWithTheDebugger]: https://docs.microsoft.com/visualstudio/debugger/navigating-through-code-with-the-debugger?view=vs-2019 "Navigate through code with the Visual Studio debugger | Microsoft Docs"
[DevtoolsGlitchMeDebugJsGetStarted]: https://microsoft-edge-chromium-devtools.glitch.me/debug-js/get-started.html "Demo: Get Started Debugging JavaScript with Microsoft Edge (Chromium) DevTools | Microsoft Docs"
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
