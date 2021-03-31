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

Use the **Sources** tool to view, modify, and debug JavaScript that's returned by the server.  The Sources tool has three panes:

| Pane | Actions |
|---|---|
| **Explorer** pane | Navigate among the resources that are returned from the server to construct the current webpage.  Select files, images, and other resources, and view their paths.  Optionally, set up a local Workspace to save changes directly to source files. |
| **Editor** pane | View JavaScript, HTML, CSS, and other files that are returned from the server.  Make experimental edits to the JavaScript or CSS code.  These changes are preserved (in the DevTools sandbox) until page refresh, or are saved to a local Workspace. |
| **Debugger** pane | Use the JavaScript Debugger to step through the JavaScript code, and to step through experimental changes to the code, while watching any JavaScript expressions you specify.  Watch and manually change variable values, and automatically show which variables are currently in-scope for the current line of code. |

:::image type="complex" source="../media/debugging.msft.png" alt-text="Navigate, view, edit, and debug JavaScript returned by the server" lightbox="../media/debugging.msft.png":::
   Navigate, view, edit, and debug JavaScript returned by the server  
:::image-end:::  

## Arranging the panes of the Sources tool

The **Sources** tool has three panes, placed as follows:

| Pane | Placement in narrow layout | Placement in wide layout |
|---|---|---|
| **Explorer** | Upper left | Left |
| **Editor** | Upper right | Middle |
| **Debugger** | Bottom | Right |

:::row:::
   :::column span="":::
      The below figure shows the Sources tool with default, narrow layout.  The **Debugger** pane is at the bottom and is split into two panes, with **Scope** and **Watch** in the lower-right.
   :::column-end:::
   :::column span="":::
     The below figure shows the Sources tool with wide layout, and also shows DevTools undocked into a separate window.  The **Debugger** pane is now on the right, including **Watch** and **Scope**.  
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

**Related articles:**

*   [Change Microsoft Edge DevTools placement (Undock, Dock to bottom, Dock to left)][DevToolsCustomizePlacement]

## Explorer pane to navigate files

Use the **Explorer** pane, on the left, to navigate among the resources that are returned from the server to construct the current webpage.  Select files, images, and other resources, and view their paths.  

:::image type="complex" source="../media/explorer-pane.msft.png" alt-text="The Explorer pane" lightbox="../media/explorer-pane.msft.png":::
   The **Explorer** pane
:::image-end:::  

Optionally, set up a local Workspace to save changes directly to source files.

### Page tab to explore resources that construct the current webpage

Use the **Page** tab of the **Explorer** pane to explore the file system that's returned from the server to construct the current webpage, and select JavaScript files to view, edit, and debug.  The **Page** tab lists all of the resources that the page has loaded.

:::image type="complex" source="../media/sources-page-pane.msft.png" alt-text="The Page tab" lightbox="../media/sources-page-pane.msft.png":::
   The **Page** tab
:::image-end:::  

How the **Page** tab is organized, in the tree in the **Explorer** pane:

*   The top level is indicated as a **window** icon labeled as `top`, and represents an [HTML frame][W3CHtml4Frames]; `top` represents the main document frame.  

*   The second level is indicated by a **cloud** icon, such as `microsoft-edge-chromium-devtools.glitch.me` in the previous figure, represents an [origin][HtmlstandardOrigin].  

*   The third level is indicated by a **folder** icon, and represents a directory.

*   A deeply nested item is shown as a **page** icon, and represents a resource that was loaded from the above origin.  

Hover over an item, to see its path as a URL.  For example, hovering over the .js file of the demo shows its URL as: `https://microsoft-edge-chromium-devtools.glitch.me/debug-js/get-started.js`

Right-click an item to open it in a new tab of the browser, or to see other actions.
    
To display a file in the **Editor** pane, choose a file in the **Page** tab.  You may display any type of file.  For images, a preview of the image is displayed.  

### Group files by folder or as a flat list

The **Page** tab displays files or resources grouped by server and directory, or as a flat list.

Next to the tabs on the Explorer pane, select the **...** (**More options**) button, then select or clear **Group by folder**.

<!-- 
not really needed; single good capture above is sufficient; delete these lines and the png file (not used in other articles)
:::image type="complex" source="../media/sources-editor-pane.msft.png" alt-text="Display the contents of a4d10f71.index-docs.js in the Editor pane" lightbox="../media/sources-editor-pane.msft.png":::
   Display the contents of `a4d10f71.index-docs.js` in the **Editor** pane  
:::image-end:::   -->

### Filesystem tab for a local Workspace

Use the **Filesystem** tab of the **Explorer** pane to set up a Workspace to save changes to local files, so that changes you make in DevTools get saved to the code on your file system.

:::image type="complex" source="../media/workspaces-workspaces-demo-sources-filesystem-css.msft.png" alt-text="The Filesystem tab" lightbox="../media/workspaces-workspaces-demo-sources-filesystem-css.msft.png":::
   The **Filesystem** tab for a Workspace
:::image-end:::  

#### Sources tool with a Workspace

<!-- does a workspace enable fast iterations?  does it change the copy of code from the server and also the local source code, that then needs to be redeployed? -->

Using a Workspace saves the changes that you make in DevTools to your file system.

By using a Workspace, DevTools is able to be used as your code editor and Integrated Development Environment (IDE) for your source files.  When you edit the copy of the front-end code that's returned by the server, the edits are also applied to your local source code.  For other users to see your changes, you redeploy your changed source files (front-end code) to the server.

A Workspace works well when the JavaScript code that's returned by the server is the same as your local JavaScript source code that you maintain, rather than performing minification, transformation, or other compiling of JavaScript code.

When using a Workspace, changes to your front-end code are preserved across page refreshes.

For more information, navigate to the tutorial [Edit files with Workspaces][DevtoolsGuideChromiumWorkspacesIndex].

#### Sources tool without a Workspace

Use the Sources tool in the default way, editing front-end code that's returned by the web server, for fast iterations when you are prototyping JavaScript code and don't want to go through the build process every time you want to view the rendered result of a code edit.

By default, when you edit a file in the **Sources** tool, those changes are lost when you refresh the page.  In the default approach, the **Sources** tool works with a copy of the client-side resources that are returned by the web server.  When you modify these client-side files that are returned by the server, the changes don't persist, because you didn't change the source files.

When you find a fix that works for the client-side JavaScript that is returned by the server, you then need to apply that fix, or an equivalent of that fix, in your actual source code and then re-deploy to the server.

#### Mapping minified code to your source code, to work with your readable source code within the Sources tool

If your client-side source code is transformed, so that the server returns different, transformed, hard-to-read (minified) front-end code to the browser, in some cases, you can set up mapping from your source code to your compiled code, so that when you view, debug, and edit the transformed client-side JavaScript code that's returned from the server, the code looks familiar and readable.

Source Maps from preprocessors cause DevTools to load your original files in addition to your minified ones. You then use the originals to set breakpoints and step through code. Meanwhile, Microsoft Edge is actually running your minified code. 

Keep your client-side code readable and debuggable even after you combine, minify, or compile it.
Use Source Maps to map your minified, compiled code to your source code.

For more information, navigate to [Map preprocessed code to source code][DevToolsJavaScriptSourceMaps].

#### Complex transformations from source code to compiled front-end code

If you use a framework that involves transformation, such as React, your local source JavaScript might be different than the client-side JavaScript that's returned by the server.  In this scenario, the **Sources** tool may be useful for inspecting and experimenting with the transformed, client-side (front-end) JavaScript that's returned from the server.  

### Overrides tab to override server files by local files

Use the **Overrides** tab of the **Explorer** pane to override page assets (such as images) by files from a local folder.

This is a way of changing what the server sends, after the server returns assets.  

:::image type="complex" source="../media/overrides-tab.msft.png" alt-text="The Overrides tab of the Explorer pane" lightbox="../media/overrides-tab.msft.png":::
   The **Overrides** tab of the **Explorer** pane
:::image-end:::  

**Related articles:**

*   [Override webpage resources with local copies using Microsoft Edge DevTools][DevtoolsJavascriptOverrides]

*   [Map preprocessed code to source code][DevToolsJavaScriptSourceMaps]

### Content scripts tab for Edge Extensions

Use the **Content scripts** tab of the **Explorer** pane to view any [content scripts][MDNContentScripts] that were loaded by a Microsoft Edge Extension that you installed. 

:::image type="complex" source="../media/content-scripts-tab.msft.png" alt-text="The Content scripts tab of the Explorer pane" lightbox="../media/content-scripts-tab.msft.png":::
   The **Content scripts** tab of the **Explorer** pane
:::image-end:::  

If, during debugging, you step into code that you don't recognize, you might want to mark that code as Library code, to avoid stepping into that code.  For more information, navigate to [Mark content scripts as Library code][DevToolsJavaScriptGuidesMarkContentScriptsLibraryCode].

### Snippets tab to run JavaScript code snippets on any page

Use the **Snippets** tab of the **Explorer** pane to create and save JavaScript code snippets which you may run on any webpage, such as code to include the jQuery library.

:::image type="complex" source="../media/snippet.msft.png" alt-text="A Snippet that inserts the jQuery library into a page" lightbox="../media/snippet.msft.png":::
   A Snippet that inserts the jQuery library into a page  
:::image-end:::  

Imagine that you repeatedly type out the following code in the **Console**, in order to insert the jQuery library into a page, so that you may run jQuery commands from the **Console**.  

```javascript
let script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.2.1.min.js';
script.crossOrigin = 'anonymous';
script.integrity = 'sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=';
document.head.appendChild(script);
```  

Instead, you may save this code in a **Snippet** and run it with a couple of button clicks, any time you need it.  When you select **Ctrl+S** or **Command+S**, DevTools saves the **Snippet** to your file system.  

To run a Snippet:

*   Open the file using the **Snippets** pane, and choose **Run** \(![The Run button](../media/run-snippet-icon.msft.png)\).  
*   Open the [Command Menu][DevtoolsGuideChromiumCommandMenuIndex], delete the `>` character, type `!`, type the name of your Snippet, and then select `Enter`.  

Snippets are similar to bookmarklets.

**Related articles:**

*   [Run snippets of JavaScript on any webpage with Microsoft Edge DevTools][DevtoolsGuideChromiumJavascriptSnippets]

### More options next to tabs in the Explorer pane

\>> (**More tabs**) - This "double chevron" button displays the additional tabs of the Explorer pane when the display is narrow.

### Explorer commands on the Command Menu

Next to the tabs of the **Explorer** pane, select the **...** (**More options**) button, then select **Open File**.
The **Command Menu** appears, and lists all the resources that are listed in the **Page** tab.

To display and pick from a list of all .js files, enter `.js`.

If you enter `?`, the Command Menu shows the commands: **Open file**, **Run Command**, **Run snippet**, **Go to line**, **Go to symbol**.

For more information, navigate to [Run commands with the Microsoft Edge DevTools Command Menu][DevtoolsGuideChromiumCommandMenuIndex].

## Editor pane to view or edit JavaScript files

<!-- todo: there was a proposal to link from here to where? -->

Use the **Editor** pane to view JavaScript, HTML, CSS, and other files that are returned from the server.  Make experimental edits to the JavaScript or CSS code; DevTools updates the page to run the modified code.  These experimental changes are preserved (in the DevTools sandbox) until page refresh.  To view and edit *local* JavaScript or CSS source files, set up a Workspace.

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

To use pretty-print to reformat a file to make it readable, click the **Pretty print** button \(![Format](../media/format-icon.msft.png)\) at the bottom of the Editor pane.  For more information, navigate to the section
[Reformat a minified JavaScript file with pretty-print][DevToolsJavaScriptReferenceReformat] within the article "Use the debugger features".

### Apply or save changes

For JavaScript changes to take effect, select `Control`+`S` \(Windows, Linux\) or `Command`+`S` \(macOS\).  DevTools does not re-run a script, so the only JavaScript changes that take effect are those that you make inside of functions.  For example, in the following figure, notice how `console.log('A')` does not run, whereas `console.log('B')` does.  If DevTools re-runs the entire script after making the change, <!-- why/when would DevTools re-run the entire script?  above says "DevTools does not re-run a script" --> then the text `A` is logged to the **Console**.  

By default, your edits are discarded when you refresh the page.  To learn how to save the changes to your file system, navigate to [Edit files with Workspaces][DevtoolsGuideChromiumWorkspacesIndex].

### Editor commands on the Command Menu

To go to a line number or symbol in the file: 

In the **Explorer** pane, click the ellipses (...) (**More options**), select **Open File** (**Ctrl+P**), then type any of the following characters:

*   `?` to view options.
*   \: to **Go to line**.
*   \@ to **Go to symbol**.

For more information, navigate to [Run commands with the Microsoft Edge DevTools Command Menu](../command-menu/index.md).

### Edit a CSS file

There are two ways to edit CSS in DevTools:

*   In the **Elements** tool, [Edit CSS font styles and settings in the Styles pane][DevToolsInspectStylesEditFonts] (recommended in most cases).
*   In the **Sources** tool, in the **Editor** pane, edit the CSS file as a file listing that directly shows the file.

The Sources tool supports directly editing a CSS file.  For example, if you edit the CSS file from the tutorial [Edit files with Workspaces][DevtoolsGuideChromiumWorkspacesIndex] to match the style rule below, the `H1` element in the upper left of the rendered webpage changes to green:

```css
h1 {
  color: green;
}  
```

:::image type="complex" source="../media/edit-css.msft.png" alt-text="Edit CSS in the Editor pane to change the text color of the H1 heading to green" lightbox="../media/edit-css.msft.png":::
   Edit CSS in the **Editor** pane to change the text color of the `H1` heading to green  
:::image-end:::  

CSS changes take effect immediately; in most cases, no saving is needed.

**Related articles:**

*   [Edit CSS font styles and settings in the Styles pane][DevToolsInspectStylesEditFonts]

*   [DevTools for beginners: Get started with CSS][DevToolsBeginnersCss] - tutorial

## Debugger pane to debug JavaScript code

Use the JavaScript Debugger to step through the JavaScript code that's returned by the server (or stored locally in a Workspace). 
The Debugger includes the **Debugger** pane, along with breakpoints that are set on lines of code in the **Editor** pane.

:::image type="complex" source="../media/sources-paused-breakpoint-highlight-debug-pane.msft.png" alt-text="The Debugger pane of the Sources tool  " lightbox="../media/sources-paused-breakpoint-highlight-debug-pane.msft.png":::
   The **Debugger** pane of the Sources tool  
:::image-end:::  

Step through experimental changes to the code, while watching any JavaScript expressions you specify.  Watch and manually change variable values, and automatically show which variables are currently in-scope for the current line of code.

The Debugger supports standard debugging actions, such as:  
*   Setting breakpoints, to pause code.
*   Stepping through code.
*   Viewing and editing properties and variables.
*   Watching the values of JavaScript expressions.
*   Viewing the call stack (the sequence of function calls so far).

The JavaScript Debugger in DevTools, in the **Debugger** pane, is designed to look and feel and work like 
[the debugger in Visual Studio Code][CodeVisualStudioComDocsEditorDebugging] and
[the debugger in Visual Studio][DMCVisualStudioDebuggerNavigatingThroughCodeWithTheDebugger].

### The basic approach to using a debugger

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

These three approaches are equivalent:

*   Temporarily adding the statements `console.log(sum)` and `console.log(typeof sum)` in the code, where `sum` is in-scope.
*   Issuing the statements `sum` and `console.log(typeof sum)` in the **Console** pane of the DevTools, when the debugger is paused where `sum` is in-scope.
*   Setting the **Watch** expressions `sum` and `typeof sum` in the **Debugger** pane.

The debugger gives a richer, more flexible display and environment than a `console.log` statement.  In the Debugger, as you step through the code, you may display and change the values of all currently-defined properties and variables, issue JavaScript statements in the **Console**, and more.  (Press **Esc** to display the Console.)

Breakpoints and Watch expressions are preserved when you refresh the page.

**Related articles:**

*   [Get started with debugging JavaScript in Microsoft Edge DevTools][DevtoolsGuideChromiumJavascriptIndex] - A tutorial (with screen captures), using an existing, simple project.

*   [Use the debugger features][DevToolsJavaScriptReference] - How to use the Debugger to set breakpoints, step through code, view and modify variable values, watch JavaScript expressions, and view the call stack (the sequence of function calls so far).

*   [Pause your code with breakpoints][DevToolsJavaScriptBreakpoints] - How to set basic and specialized breakpoints in the debugger.

## Extensions for Visual Studio Code, as an alternative to DevTools Sources tool

There are two extensions for Visual Studio Code that provide alternatives to using the DevTools Sources tool. 

There are extensions for Visual Studio Code, to extend Visual Studio Code, not extensions for Edge, to extend Edge.

*   The "Debugger for Microsoft Edge" Visual Studio Code extension.
*   "Microsoft Edge DevTools" for Visual Studio Code extension.

More details are below.

### \"Debugger for Microsoft Edge\" Visual Studio Code extension

<!-- verbatim from this extension's dedicated article: -->
With the "Debugger for Microsoft Edge" Visual Studio Code extension, debug your front-end JavaScript code line by line and see `console.log()` statements directly from Visual Studio Code.

As an alternative to debugging by using the DevTools Sources tool, you can do the same debugging within Visual Studio code, by using this extension.

*   When using the DevTools Sources tool, the JavaScript debugger runs in the DevTools window that's connected to a browser window.
*   When using this extension for Visual Studio Code, the JavaScript debugger runs in the Visual Studio Code window.

This extension supports Workspaces; this extension runs either against the client-side JavaScript that is returned from the server, or against the local source code for the client-side JavaScript.

This is an extension for Visual Studio Code, to extend Visual Studio Code.  This is not an extension for Edge, to extend Edge.

For more information, navigate to the [Visual Studio Code overview][DevToolsVSCodeIndex].

### \"Microsoft Edge Tools for Visual Studio Code\" extension

<!-- verbatim from this extension's dedicated article: -->
Use this extension to access Microsoft Edge DevTools from within Microsoft Visual Studio Code. This extension provides access to the **Elements** and **Network** tools in Microsoft Edge DevTools.

Launch Microsoft Edge from the Debug view of Visual Studio Code.  Use the Debug view in Visual Studio Code, and access Microsoft Edge DevTools from the Debug view in Visual Studio Code.

This extension supports Workspaces; this extension runs either against the client-side JavaScript that is returned from the server, or against the local source code for the client-side JavaScript.

This is an extension for Visual Studio Code, to extend Visual Studio Code.  This is not an extension for Edge, to extend Edge.

For more information, navigate to the [Visual Studio Code overview][DevToolsVSCodeIndex].

## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- links -->  

[DevToolsInspectStylesEditFonts]: ../inspect-styles/edit-fonts.md "Edit CSS font styles and settings in the Styles pane | Microsoft Docs"
[DevToolsBeginnersCss]: ../beginners/css.md "DevTools for beginners: Get started with CSS | Microsoft Docs"
[DevToolsJavaScriptSourceMaps]: ../javascript/source-maps.md "Map preprocessed code to source code | Microsoft Docs"
[DevToolsCustomizePlacement]: ../customize/placement.md "Change Microsoft Edge DevTools placement (Undock, Dock to bottom, Dock to left) | Microsoft Docs"
[DevtoolsJavascriptOverrides]: ../javascript/overrides.md "Override webpage resources with local copies using Microsoft Edge DevTools | Microsoft Docs"  
[DevToolsVSCodeIndex]: ../../visual-studio-code/index.md "Visual Studio Code overview | Microsoft Docs"
[DevToolsJavaScriptGuidesMarkContentScriptsLibraryCode]: ../javascript/guides/mark-content-scripts-library-code.md "Mark content scripts as Library code | Microsoft Docs"
[DevToolsJavaScriptReference]: ../javascript/reference.md "Use the debugger features | Microsoft Docs"
[DevToolsJavaScriptBreakpoints]: ../javascript/breakpoints.md "Pause your code with breakpoints | Microsoft Docs"
[DevToolsJavaScriptReferenceReformat]: ../javascript/reference.md#reformat-a-minified-javascript-file-with-pretty-print "Reformat a minified JavaScript file with pretty-print - Use the debugger features | Microsoft Docs"
[DevtoolsGuideChromiumCommandMenuIndex]: ../command-menu/index.md "Run commands with the Microsoft Edge DevTools Command Menu | Microsoft Docs"  
[DevtoolsGuideChromiumJavascriptIndex]: ../javascript/index.md "Get started with debugging JavaScript in Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsGuideChromiumJavascriptSnippets]: ../javascript/snippets.md "Run snippets of JavaScript on any webpage with Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsGuideChromiumWorkspacesIndex]: ../workspaces/index.md "Edit files with Workspaces | Microsoft Docs"  
<!-- external: -->
[CodeVisualStudioComDocsEditorDebugging]: https://code.visualstudio.com/docs/editor/debugging "Debugging - Visual Studio Code | Microsoft Docs"
[DMCVisualStudioDebuggerNavigatingThroughCodeWithTheDebugger]: https://docs.microsoft.com/visualstudio/debugger/navigating-through-code-with-the-debugger?view=vs-2019 "Navigate through code with the Visual Studio debugger | Microsoft Docs"
[DevtoolsGlitchMeDebugJsGetStarted]: https://microsoft-edge-chromium-devtools.glitch.me/debug-js/get-started.html "Demo: Get Started Debugging JavaScript with Microsoft Edge (Chromium) DevTools | Microsoft Docs"
[HtmlstandardOrigin]: https://html.spec.whatwg.org/multipage/origin.html#origin "Origin | HTML Standard"  
[W3CHtml4Frames]: https://w3.org/TR/html401/present/frames.html "Frames | W3C"  
[MDNContentScripts]: https://developer.mozilla.org/Add-ons/WebExtensions/Content_scripts "Content scripts | MDN"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/sources) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
