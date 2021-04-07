---
description: Use the Sources tool to view, modify, and debug JavaScript that's returned by the server, and to inspect the resources that make up the current webpage.  To use the Sources tool as a development environment, add source files to a Workspace.
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

Use the **Sources** tool to view, modify, and debug front-end (client-side) JavaScript, and inspect the resources that make up the current webpage.  The Sources tool has three panes:

| Pane | Actions |
|---|---|
| **Navigator** pane | Navigate among the resources that are returned from the server to construct the current webpage.  Select files, images, and other resources, and view their paths.  Optionally, set up a local Workspace to save changes directly to source files. |
| **Editor** pane | View JavaScript, HTML, CSS, and other files that are returned from the server.  Make experimental edits to JavaScript or CSS.  These changes are preserved until page refresh, unless saved to a local file with Workspaces. When using Workspaces or Overrides, you can edit HTML files as well. |
| **Debugger** pane | Use the JavaScript Debugger to set breakpoints, pause running JavaScript, and step through the code, including any edits you have made, while watching any JavaScript expressions you specify.  Watch and manually change variable values, and automatically show which variables are currently in-scope for the current line of code. |

The following image shows the **Navigator** pane highlighted with a red box on the left, the **Editor** pane highlighted in the middle, and the **Debugger** pane highlighted on the right.  On the far left side is the main part of the browser window, showing the rendered webpage grayed-out because the debugger is paused on a breakpoint.

:::image type="complex" source="../media/debugging-highlights.msft.png" alt-text="Navigate, view, edit, and debug JavaScript returned by the server" lightbox="../media/debugging-highlights.msft.png":::
   Navigate, view, edit, and debug JavaScript returned by the server  
:::image-end:::  

When the DevTools are less than 680px wide, the **Debugger** pane is placed at the bottom and is split into two panes, with **Scope** and **Watch** in the lower-right:

:::image type="complex" source="../media/debugging-panes-narrow.msft.png" alt-text="The three panes of the Sources tool, in narrow layout" lightbox="../media/debugging-panes-narrow.msft.png":::
   The three panes of the Sources tool, in narrow layout  
:::image-end:::  

To maximize the size of the Sources tool, undock DevTools into a separate window, and optionally move the DevTools window to a separate monitor.  For more information, navigate to [Change Microsoft Edge DevTools placement (Undock, Dock to bottom, Dock to left)][DevToolsCustomizePlacement].

## Using the Navigator pane to navigate files

Use the **Navigator** pane (on the left) to navigate among the resources that are returned from the server to construct the current webpage.  Select files, images, and other resources, and view their paths.  

:::image type="complex" source="../media/navigator-pane.msft.png" alt-text="The Navigator pane" lightbox="../media/navigator-pane.msft.png":::
   The **Navigator** pane
:::image-end:::  

Optionally, set up a local Workspace to save changes directly to source files.

\>> (**More tabs**) - This "double chevron" button displays the remaining tabs of the Navigator pane when the display is narrow.

The following subsections are related to the Navigator pane:
*   [Open files with the Command Menu](#open-files-with-the-command-menu)
*   [Using the Page tab to explore resources that construct the current webpage](#using-the-page-tab-to-explore-resources-that-construct-the-current-webpage)
*   [Using the Filesystem tab to define a local Workspace](#using-the-filesystem-tab-to-define-a-local-workspace)
*   [Using the Overrides tab to override server files with local files](#using-the-overrides-tab-to-override-server-files-with-local-files)
*   [Using the Content scripts tab for Microsoft Edge extensions](#using-the-content-scripts-tab-for-microsoft-edge-extensions)
*   [Using the Snippets tab to run JavaScript code snippets on any page](#using-the-snippets-tab-to-run-javascript-code-snippets-on-any-page)

### Open files with the Command Menu

Next to the tabs of the **Navigator** pane, select the **...** (**More options**) button, then select **Open File**.  Or, a simpler way to open the Command Menu is to select `Ctrl`+`P` from anywhere in DevTools.  The **Command Menu** appears, and lists all the resources that are listed in the **Page** tab.

To display and pick from a list of all .js files, enter `.js`.

If you enter `?`, the Command Menu shows the commands: **Open file**, **Run Command**, **Run snippet**, **Go to line**, **Go to symbol**.

For more information, navigate to [Run commands with the Microsoft Edge DevTools Command Menu][DevtoolsGuideChromiumCommandMenuIndex].

### Using the Page tab to explore resources that construct the current webpage

Use the **Page** tab of the **Navigator** pane to explore the file system that's returned from the server to construct the current webpage, and select JavaScript files to view, edit, and debug.  The **Page** tab lists all of the resources that the page has loaded.

:::image type="complex" source="../media/sources-page-pane.msft.png" alt-text="The Page tab" lightbox="../media/sources-page-pane.msft.png":::
   The **Page** tab
:::image-end:::  

Different webpages have a different tree structure.  The following is how the **Page** tab is organized for the example page shown in the screen capture:

*   The top level is indicated as a **window** icon labeled as `top`, and represents an [HTML frame][W3CHtml4Frames]; `top` represents the main document frame.  

*   The second level is indicated by a **cloud** icon, such as `microsoft-edge-chromium-devtools.glitch.me` in the previous figure, represents an [origin][HtmlstandardOrigin].  

*   The third level is indicated by a **folder** icon, and represents a directory.

*   The fourth level is shown as a **page** icon, and represents a resource that was loaded from the above origin.  

Hover over an item, to see its path as a URL.

Right-click an item to open it in a new tab of the browser, or to see other actions.
    
To display a file in the **Editor** pane, choose a file in the **Page** tab.  You may display any type of file.  For images, a preview of the image is displayed.  

#### Group files by folder or as a flat list

The **Page** tab displays files or resources grouped by server and directory, or as a flat list.

To change how resources are grouped, next to the tabs on the Navigator pane (on the left), select the **...** (**More options**) button, and then select or clear the **Group by folder** option.

### Using the Filesystem tab to define a local Workspace

Use the **Filesystem** tab of the **Navigator** pane to set up a Workspace to save changes to local files, so that changes you make in DevTools get saved to the code on your file system.

<!-- to set up this capture: per Workspaces demo, copied 3 files locally to ~/Desktop/app/, installed Python 3.x, opened bash shell, cd'd to ~/Desktop/app, > py -m http.server (py command, not python), in browser go to localhost:8000 (not 8080), the HTML webpage loads, then green dots appear next to Filesystem tab's html/css/js files and also on the Page tab's files. -->

:::image type="complex" source="../media/sources-filesystem-tab.msft.png" alt-text="The Filesystem tab, for a Workspace" lightbox="../media/sources-filesystem-tab.msft.png":::
   The **Filesystem** tab, for a Workspace
:::image-end:::  

A file that's in a Workspace is indicated by a green dot on the file in the **Filesystem** tab.  A green dot is also added on the corresponding file that is returned by the server, in the **Page** tab:

:::image type="complex" source="../media/sources-filesystem-tab-page-tab-dots.msft.png" alt-text="The Page tab, with green dots indicating corresponding files are in a local Workspace" lightbox="../media/sources-filesystem-tab-page-tab-dots.msft.png":::
   The Page tab, with green dots indicating corresponding files are in a local Workspace
:::image-end:::  

Using a Workspace saves the changes that you make in DevTools to your file system.

<!-- Should HTML be listed, along with JavaScript and CSS? -->
By using a Workspace, the Sources tool is able to persist changes made to JavaScript and CSS to your local files.  When you edit the front-end code that's returned by the server, the edits are also applied to your local source code.  For other users to see your changes, you redeploy your changed source files (front-end code) to the server.

Workspaces work well when the JavaScript code that's returned by the server is the same as the local JavaScript source code that you write, rather than performing minification, compilation, or other transformations on your JavaScript source code.

When using a Workspace, changes to your front-end code are preserved across page refreshes.

By default, when you edit a file in the **Sources** tool, those changes are lost when you refresh the page.  In the default approach, the **Sources** tool works with a copy of the front-end resources that are returned by the web server.  When you modify these front-end files that are returned by the server, the changes don't persist, because you didn't change the source files.
When you find a fix that works for the front-end JavaScript that is returned by the server, you then need to apply that fix, or an equivalent of that fix, in your actual source code, and then re-deploy to the server.

For more information, navigate to the tutorial [Edit files with Workspaces][DevtoolsGuideChromiumWorkspacesIndex].

### Using the Overrides tab to override server files with local files

Use the **Overrides** tab of the **Navigator** pane to override page assets (such as images) with files from a local folder.

This is a way of overriding what the server sends to the browser, even after the server has returned assets.  

:::image type="complex" source="../media/overrides-tab.msft.png" alt-text="The Overrides tab of the Navigator pane" lightbox="../media/overrides-tab.msft.png":::
   The **Overrides** tab of the **Navigator** pane
:::image-end:::  

**Overrides** is similar to Workspaces.  Use Overrides when you want to experiment with changes to a webpage, and you need to retain the changes after page refresh, but you do not care about mapping your changes to the source code of the webpage.  

A file that overrides a file that is returned by the server is indicated by a purple dot.

**Related articles:**

*   [Override webpage resources with local copies using Microsoft Edge DevTools][DevtoolsJavascriptOverrides]

*   [Map preprocessed code to source code][DevToolsJavaScriptSourceMaps]

### Using the Content scripts tab for Microsoft Edge extensions

Use the **Content scripts** tab of the **Navigator** pane to view any [content scripts][MDNContentScripts] that were loaded by a Microsoft Edge extension that you installed. 

:::image type="complex" source="../media/content-scripts-tab.msft.png" alt-text="The Content scripts tab of the Navigator pane" lightbox="../media/content-scripts-tab.msft.png":::
   The **Content scripts** tab of the **Navigator** pane
:::image-end:::  

If, during debugging, you step into code that you don't recognize, you might want to mark that code as Library code, to avoid stepping into that code.  For more information, navigate to [Mark content scripts as Library code][DevToolsJavaScriptGuidesMarkContentScriptsLibraryCode].

### Using the Snippets tab to run JavaScript code snippets on any page

Use the **Snippets** tab of the **Navigator** pane to create and save JavaScript code snippets which you may run on any webpage, such as code to include the jQuery library.

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

You may save this code in a **Snippet** and easily run it whenever you need to.  When you select **Ctrl+S** or **Command+S**, DevTools saves the **Snippet** to your file system.  

There are multiple ways to run a Snippet:

*   In the **Navigator** pane, select the **Snippets** tab, then select the snippets file to open it.  Then select **Run** \(![The Run button](../media/run-snippet-icon.msft.png)\).  
*   Press `Ctrl`+`Shift`+`P` (Windows/Linux) or `Command`+`Shift`+`P` (macOS) to open the [Command Menu][DevtoolsGuideChromiumCommandMenuIndex], delete the `>` character, type `!`, type the name of your Snippet, and then select `Enter`.  

Snippets are similar to bookmarklets.

**Related articles:**

*   [Run snippets of JavaScript on any webpage with Microsoft Edge DevTools][DevtoolsGuideChromiumJavascriptSnippets]

## Using the Editor pane to view or edit files

Use the **Editor** pane to view the front-end JavaScript, HTML, CSS, and other files that are returned from the server to compose the current webpage.  Make edits to JavaScript or CSS; DevTools updates the page to run the modified code.

:::image type="complex" source="../media/editing-js-in-editor-pane.msft.png" alt-text="Editing JavaScript in the Editor pane" lightbox="../media/editing-js-in-editor-pane.msft.png":::
   Editing JavaScript in the **Editor** pane  
:::image-end:::

The **Editor** pane has the following level of support for various file types:

| File Type | Supported Actions |
|---------|---------|
| JavaScript | View, edit, and debug. |
| CSS | View and edit. |
| HTML | View and edit. |
| Images | View. |

By default, edits are discarded when you refresh the page.  To learn how to save the changes to your file system, navigate to [Using the Filesystem tab to define a local Workspace](#using-the-filesystem-tab-to-define-a-local-workspace), above.

The following subsections are related to the Editor pane:
*   [Reformat a minified JavaScript file with pretty-print](#reformat-a-minified-javascript-file-with-pretty-print)
*   [Mapping minified code to your source code to show readable code](#mapping-minified-code-to-your-source-code-to-show-readable-code)
*   [Complex transformations from source code to compiled front-end code](#complex-transformations-from-source-code-to-compiled-front-end-code)
*   [Edit a JavaScript file](#edit-a-javascript-file)
*   [Edit a CSS file](#edit-a-css-file)
*   [Edit an HTML file](#edit-an-html-file)
*   [Editor commands on the Command Menu](#editor-commands-on-the-command-menu)
*   [Display sources even when using a different tool](#display-sources-even-when-using-a-different-tool)

### Reformat a minified JavaScript file with pretty-print

To use pretty-print to reformat a file to make it readable, click the **Pretty print** button \(![Format](../media/format-icon.msft.png)\), which is shown as braces, at the bottom of the Editor pane.  Or, if a **Pretty-print** button appears at the top of the Editor pane, with a text label, you can choose that button.

:::image type="complex" source="../media/minified.msft.png" alt-text="The Pretty print button" lightbox="../media/minified.msft.png":::
   The **Pretty print** button  
:::image-end:::  

The reformatted file appears in a new tab, with ":formatted" appended to the filename shown in the tab.  You cannot edit the reformatted code.

:::image type="complex" source="../media/pretty-printed.msft.png" alt-text="A pretty-printed (reformatted) JavaScript file" lightbox="../media/pretty-printed.msft.png":::
   A pretty-printed (reformatted) JavaScript file  
:::image-end:::  

To make the reformatted file scroll to the code that you select in the minified file: close the reformatted file tab, if that tab is open, select code in the minified file in the Editor pane, and then click the **Pretty print** button.  The formatted code appears in a new tab, scrolled to the code which you selected.

For more information, navigate to the section
[Reformat a minified JavaScript file with pretty-print][DevToolsJavaScriptReferenceReformat] within the article "Use the debugger features".

### Mapping minified code to your source code to show readable code

Source Maps from preprocessors cause DevTools to load your original JavaScript source files in addition to your minified, transformed JavaScript files that are returned by the server.  You then use your original source files to set breakpoints and step through code.  Meanwhile, Microsoft Edge is actually running your minified code. 

If you right-click a JavaScript file in the **Editor** pane, and then select **Add source map...**, a popup box appears, with a **Source map URL:** field and an **Add** button.

The mapping approach keeps your front-end code readable and debuggable even after you combine, minify, or compile it.
For more information, navigate to [Map preprocessed code to source code][DevToolsJavaScriptSourceMaps].

### Complex transformations from source code to compiled front-end code

If you use a framework that involves transformation, such as React, your local source JavaScript might be very different than the front-end JavaScript that's returned by the server.

Workspaces are not supported in this scenario.

Source code mapping is supported in this scenario.  In a development environment, your server might include your sourcemaps and original .ts or .jsx files for React.  In those cases, the Sources tool displays the files, but doesn't support editing the files.  When you set breakpoints, the browser actually steps-through your minified JavaScript, but displays your original .ts or .jsx file.

In this scenario, the **Sources** tool may be useful for inspecting and experimenting with the transformed, front-end JavaScript that's returned from the server.  

### Edit a JavaScript file

For JavaScript changes to take effect, select `Control`+`S` \(Windows, Linux\) or `Command`+`S` \(macOS\).  

:::image type="complex" source="../media/editing-js-in-editor-pane.msft.png" alt-text="Editing JavaScript in the Editor pane" lightbox="../media/editing-js-in-editor-pane.msft.png":::
   Editing JavaScript in the **Editor** pane  
:::image-end:::

By default, your edits are discarded when you refresh the page.  To learn how to save the changes to your file system, navigate to [Edit files with Workspaces][DevtoolsGuideChromiumWorkspacesIndex].

DevTools does not re-run a script, so the only JavaScript changes that take effect are changes that you make inside of functions.  For example, in the following figure, we added the following code to the JavaScript that is returned by the server:
*   We added `console.log('A')` outside of any function.
*   We added `console.log('B')` inside an `onClick` function.
We then saved the changes, entered numbers into the form, and then selected the form button.

After submitting the form, `console.log('A')`, which is at global scope, does not run, whereas `console.log('B')`, inside an `onClick` function, does run, outputting `B` to the Console:

:::image type="complex" source="../media/edit-js.msft.png" alt-text="Global-scope JavaScript is not re-run" lightbox="../media/edit-js.msft.png":::
   Global-scope JavaScript is not re-run  
:::image-end:::

To find (or find and replace) text in the current file, click in the Editor pane to give it focus, and then choose `Ctrl`+`F` (Windows or Linux), or `Command`+`F` (macOS).

To view the changes made, right-click and then choose **Local Modifications**.  Changes are shown in the **Changes** tab, at the bottom.

:::image type="complex" source="../media/editor-find-and-modifs.msft.png" alt-text="Find/Replace and Local Modifications (Changes tab), in the code editor of the Sources tool" lightbox="../media/editor-find-and-modifs.msft.png":::
   Find/Replace and Local Modifications (**Changes** tab), in the code editor of the Sources tool  
:::image-end:::

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

### Edit an HTML file

The Sources tool includes a general-purpose text editor that can edit HTML files.

:::image type="complex" source="../media/sources-html-editor.msft.png" alt-text="The HTML editor of the Sources tool" lightbox="../media/sources-html-editor.msft.png":::
   The HTML editor of the Sources tool
:::image-end:::  

Editing of an HTML file is enabled in the Sources tool for a local source file that's in a Workspace (on the **Filesystem** tab) or on the **Overrides** tab, as described in these subsections of the present article:
*   [Using the Filesystem tab to define a local Workspace](#using-the-filesystem-tab-to-define-a-local-workspace)
*   [Using the Overrides tab to override server files with local files](#using-the-overrides-tab-to-override-server-files-with-local-files)

Editing of an HTML file is not enabled in the Sources tool for the copy of a front-end HTML file that is returned by the server.

If you changed a file, an asterisk appears by the filename.  To save changes, select `Ctrl`+`S` (Windows/Linux) or `Command`+`S` (macOS).  Or press `Ctrl`+`Z` (Windows/Linux) or `Command`+`Z` (macOS) to undo changes and make the asterisk disappear.

There are two ways to edit HTML in DevTools:
*   The Elements tool, in which you work with one HTML element at a time, through a user interface.
*   The Sources tool, which has a text editor.

The article [DevTools for beginners: Get started with HTML and the DOM][DevToolsBeginnersHtml] shows HTML editing within a special website that enables HTML editing within the webpage.

### Editor commands on the Command Menu

To go to a line number or symbol in the file: 

In the **Navigator** pane, select the ellipses (...) (**More options**), select **Open File** (**Ctrl+P**), then type any of the following characters:

*   `?` to view options.
*   \: to **Go to line**.
*   \@ to **Go to symbol**.

For more information, navigate to [Run commands with the Microsoft Edge DevTools Command Menu](../command-menu/index.md).

### Display sources even when using a different tool

The main place to view source files in the DevTools is within the **Sources** tool.  But sometimes you need to access other tools, such as **Elements** or **Console**, while viewing or editing your source files.  Use the **Quick Sources** tool in the [Drawer](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/customize/#drawer).

1.  Choose a tool other than the **Sources** tool, such as the **Elements** tool.  
1.  Select `Control`+`Shift`+`P` \(Windows, Linux\) or `Command`+`Shift`+`P` \(macOS\).  The **Command Menu** opens.  
1.  Type `Quick Source`, and then choose **Show Quick Source**.  At the bottom of the DevTools window, the **Quick Source** panel appears, displaying the last file you edited in the **Sources** tool, within the code editor from the **Sources** tool.  
1.  Select `Control`+`P` \(Windows, Linux\) or `Command`+`P` \(macOS\) to open the **Open File** dialog.  

## Using the Debugger pane to debug JavaScript code

Use the JavaScript Debugger to step through the JavaScript code that's returned by the server (or stored locally in a Workspace). 
The Debugger includes the **Debugger** pane, along with breakpoints that are set on lines of code in the **Editor** pane.

<!-- "sources-paused-breakpoint.msft.png" is not currently directly used. It's the upstream source for a couple images, including the below image. -->

:::image type="complex" source="../media/sources-paused-breakpoint-highlight-debug-pane.msft.png" alt-text="The Debugger pane of the Sources tool  " lightbox="../media/sources-paused-breakpoint-highlight-debug-pane.msft.png":::
   The **Debugger** pane of the Sources tool  
:::image-end:::  

Step through the code, while watching any JavaScript expressions you specify.  Watch and manually change variable values, and automatically show which variables are currently in-scope for the current line of code.

The Debugger supports standard debugging actions, such as:  
*   Setting breakpoints, to pause code.
*   Stepping through code.
*   Viewing and editing properties and variables.
*   Watching the values of JavaScript expressions.
*   Viewing the call stack (the sequence of function calls so far).

The JavaScript Debugger in DevTools, in the **Debugger** pane, is designed to look, feel, and work like 
[the debugger in Visual Studio Code][CodeVisualStudioComDocsEditorDebugging] and
[the debugger in Visual Studio][DMCVisualStudioDebuggerNavigatingThroughCodeWithTheDebugger].

The following subsections cover the **Debugger** pane or breakpoints:
*   [The basic approach to using a debugger](#the-basic-approach-to-using-a-debugger)
*   [Advantages of the debugger's Watch and Scope over console.log](#advantages-of-the-debuggers-watch-and-scope-over-consolelog)
*   [Using the debugger of Visual Studio Code](#using-the-debugger-of-visual-studio-code)
*   [The Debugger for Microsoft Edge extension for Visual Studio Code](#the-debugger-for-microsoft-edge-extension-for-visual-studio-code)
*   [Articles about debugging](#articles-about-debugging)

### The basic approach to using a debugger

To troubleshoot where your JavaScript is going wrong, you can insert `console.log()` statements in the **Editor** pane.  Another approach, that's more powerful (yet can also be simple), is to use the debugger of Microsoft Edge DevTools.

The basic approach to using a debugger is to set a breakpoint (an intentional stopping place in the code), run the code at full speed up to the line of code on which the breakpoint is set, and then step through the lines of code, starting at that breakpoint.  

For example, the tutorial [Get started with debugging JavaScript][DevtoolsGuideChromiumJavascriptIndex] uses an existing, simple webpage 
[Demo: Get Started Debugging JavaScript with Microsoft Edge (Chromium) DevTools][DevtoolsGlitchMeDebugJsGetStarted], that contains a few form controls.  

As shown in the tutorial, to get into the "Paused" mode of the debugger, do something like the following steps:

1. Open the above Demo webpage in a new tab of the browser.

1. Open the **DevTools** window, such as by selecting `F12`.

1. Select the **Sources** tab, to show the Sources tool.

1. In the **Navigator** pane on the left, select the **Page** tab, then select the JavaScript file (`get-started.js`, in this case).

1. In the **Editor** pane, select a line number near a suspect line of code, such as `var sum = addend1 + addend2;`, to set a breakpoint on that line.

1. In the webpage, enter numbers, such as 5 and 1, then select the button **Add Number 1 and Number 2**.  

   Selecting the form's button triggers sending the form-data and running the JavaScript code.  The debugger runs the JavaScript code and then pauses at the breakpoint (such as the line `var sum = addend1 + addend2;`).

1. You then use the **Watch** or **Scope** pane, and use the controls at the top of the **Debugger** pane, such as **Step** (`F9`), to step through the code.

<!-- "sources-paused-breakpoint.msft.png" is not currently directly used. It's the upstream source for a couple images, including the below image. -->

:::image type="complex" source="../media/sources-paused-breakpoint-highlights.msft.png" alt-text="Entering Paused mode of the Debugger" lightbox="../media/sources-paused-breakpoint-highlights.msft.png":::
   Entering Paused mode of the Debugger  
:::image-end:::  

The **Scope** pane shows variables that are in-scope, and their values.  In the above figure, we added the Watch expressions `sum` and `typeof sum`, and stepped two lines past the breakpoint.

### Advantages of the debugger\'s Watch and Scope over console\.log

These three approaches are equivalent:

*   Temporarily adding the statements `console.log(sum)` and `console.log(typeof sum)` in the code, where `sum` is in-scope.
*   Issuing the statements `sum` and `console.log(typeof sum)` in the **Console** pane of the DevTools, when the debugger is paused where `sum` is in-scope.
*   Setting the **Watch** expressions `sum` and `typeof sum` in the **Debugger** pane.

When the variable `sum` is in-scope, `sum` and its value are automatically shown in the **Scope** section of the Debugger pane, and are also overlaid in the Editor pane where `sum` is calculated.  Therefore you probably wouldn't need to define a Watch expression for `sum`, or a `console.log` statement to show the value of `sum`.

The debugger gives a richer, more flexible display and environment than a `console.log` statement.  For example, in the Debugger, as you step through the code, you may display and change the values of all currently defined properties and variables, and issue JavaScript statements in the **Console**.  (To display the Console, select **Esc**.)

Breakpoints and Watch expressions are preserved when you refresh the page.

### Using the debugger of Visual Studio Code

<!-- todo: read/incorp https://github.com/microsoft/vscode-edge-devtools -->

To use the more full-featured debugger of Visual Studio Code instead of the DevTools debugger, use Visual Studio Code with the **Microsoft Edge Tools for VS Code** extension for Visual Studio Code.  This extension provides access to the **Elements** and **Network** tools of Microsoft Edge DevTools, from within Microsoft Visual Studio Code.

:::image type="complex" source="../media/microsoft-edge-tools-for-vs-code-extension.msft.png" alt-text="The Microsoft Edge Tools for VS Code extension for Visual Studio Code" lightbox="../media/microsoft-edge-tools-for-vs-code-extension.msft.png":::
   The **Microsoft Edge Tools for VS Code** extension for Visual Studio Code  
:::image-end:::  

Launch Microsoft Edge from the Debug view of Visual Studio Code.  Use the Debug view in Visual Studio Code, and access Microsoft Edge DevTools from the Debug view in Visual Studio Code.

This extension supports Workspaces; this extension runs either against the client-side JavaScript that is returned from the server, or against the local source code for the client-side JavaScript.

For more information, navigate to the [Visual Studio Code overview][DevToolsVSCodeIndex].

### The Debugger for Microsoft Edge extension for Visual Studio Code

> ![NOTE] 
> This extension is deprecated; it will be supported, but not developed further.

With the **Debugger for Microsoft Edge** extension for Visual Studio Code, debug your front-end JavaScript code line by line and see `console.log` statements directly from Visual Studio Code.

:::image type="complex" source="../media/debugger-for-microsoft-edge-extension.msft.png" alt-text="The Debugger for Microsoft Edge extension for Visual Studio Code" lightbox="../media/debugger-for-microsoft-edge-extension.msft.png":::
   The **Debugger for Microsoft Edge** extension for Visual Studio Code  
:::image-end:::  

When using the DevTools Sources tool, the JavaScript debugger runs in the DevTools window that's connected to a browser window.

When using this extension for Visual Studio Code, the JavaScript debugger runs in the Visual Studio Code window.

This extension supports Workspaces; this extension runs either against the client-side JavaScript that is returned from the server, or against the local source code for the client-side JavaScript.

For more information, navigate to the [Visual Studio Code overview][DevToolsVSCodeIndex].

### Articles about debugging

The following articles cover the Debugger pane and breakpoints:

*   [Get started with debugging JavaScript in Microsoft Edge DevTools][DevtoolsGuideChromiumJavascriptIndex] - A tutorial (with screen captures), using an existing, simple project.

*   [Use the debugger features][DevToolsJavaScriptReference] - How to use the Debugger to set breakpoints, step through code, view and modify variable values, watch JavaScript expressions, and view the call stack (the sequence of function calls so far).

*   [Pause your code with breakpoints][DevToolsJavaScriptBreakpoints] - How to set basic and specialized breakpoints in the debugger.

## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- links -->  

[DevToolsInspectStylesEditFonts]: ../inspect-styles/edit-fonts.md "Edit CSS font styles and settings in the Styles pane | Microsoft Docs"
[DevToolsBeginnersCss]: ../beginners/css.md "DevTools for beginners: Get started with CSS | Microsoft Docs"
[DevToolsBeginnersHtml]: ../beginners/html.md "DevTools for beginners: Get started with HTML and the DOM | Microsoft Docs"
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
[DMCVisualStudioDebuggerNavigatingThroughCodeWithTheDebugger]: https://docs.microsoft.com/visualstudio/debugger/navigating-through-code-with-the-debugger "Navigate through code with the Visual Studio debugger | Microsoft Docs"
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
