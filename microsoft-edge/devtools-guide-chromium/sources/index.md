---
description: Use the Sources tool to view, modify, and debug JavaScript that's returned by the server, and to inspect the resources that make up the current webpage.  To use the Sources tool as a development environment, add source files to a Workspace.
title: Sources tool overview
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/20/2021
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

Use the **Sources** tool to view, modify, and debug front-end JavaScript code, and to inspect the resources that make up the current webpage.  The **Sources** tool has three panes:

| Pane | Actions |
|---|---|
| **Navigator** pane | Navigate among the resources that are returned from the server to construct the current webpage.  Select files, images, and other resources, and view their paths.  Optionally, set up a local Workspace to save changes directly to source files. |
| **Editor** pane | View JavaScript, HTML, CSS, and other files that are returned from the server.  Make experimental edits to JavaScript or CSS.  Your changes are preserved until you refresh the page, or are preserved after page refresh if you save to a local file with Workspaces. When you use Workspaces or Overrides, you can edit HTML files as well. |
| **Debugger** pane | Use the JavaScript Debugger to set breakpoints, pause running JavaScript, and step through the code, including any edits you have made, while watching any JavaScript expressions you specify.  Watch and manually change the values of variables that are in-scope for the current line of code. |

The following figure shows the **Navigator** pane highlighted with a red box in the upper left corner of DevTools, the **Editor** pane highlighted in the upper right, and the **Debugger** pane highlighted on the bottom.  On the far left side is the main part of the browser window, showing the rendered webpage grayed-out because the debugger is paused on a breakpoint:

:::image type="complex" source="../media/sources-panes-narrow-layout.msft.png" alt-text="The panes of the Sources tool, in narrow layout" lightbox="../media/sources-panes-narrow-layout.msft.png":::
   The panes of the Sources tool, in narrow layout
:::image-end:::

When DevTools is wide, the **Debugger** pane is placed on the right, and includes **Scope** and **Watch**:

:::image type="complex" source="../media/sources-panes-wide-layout.msft.png" alt-text="Navigate, view, edit, and debug JavaScript returned by the server" lightbox="../media/sources-panes-wide-layout.msft.png":::
   Navigate, view, edit, and debug JavaScript returned by the server
:::image-end:::

To maximize the size of the Sources tool, undock DevTools into a separate window, and optionally move the DevTools window to a separate monitor.  See [Change DevTools placement (Undock, Dock to bottom, Dock to left)](../customize/placement.md).

To load the debugging demo webpage that's shown above, see [The basic approach to using a debugger](#the-basic-approach-to-using-a-debugger), below.


<!-- ====================================================================== -->
## Using the Navigator pane to select files

Use the **Navigator** pane (on the left) to navigate among the resources that are returned from the server to construct the current webpage.  Select files, images, and other resources, and view their paths.

:::image type="complex" source="../media/navigator-pane.msft.png" alt-text="The Navigator pane" lightbox="../media/navigator-pane.msft.png":::
   The **Navigator** pane
:::image-end:::

To access any hidden tabs of the Navigator pane, select ![More tabs](../media/more-tabs-icon.msft.png) (**More tabs**).

The following subsections cover the Navigator pane:
*   [Using the Page tab to explore resources that construct the current webpage](#using-the-page-tab-to-explore-resources-that-construct-the-current-webpage)
*   [Using the Filesystem tab to define a local Workspace](#using-the-filesystem-tab-to-define-a-local-workspace)
*   [Using the Overrides tab to override server files with local files](#using-the-overrides-tab-to-override-server-files-with-local-files)
*   [Using the Content scripts tab for Microsoft Edge extensions](#using-the-content-scripts-tab-for-microsoft-edge-extensions)
*   [Using the Snippets tab to run JavaScript code snippets on any page](#using-the-snippets-tab-to-run-javascript-code-snippets-on-any-webpage)
*   [Using the Command Menu to open files](#using-the-command-menu-to-open-files)

### Using the Page tab to explore resources that construct the current webpage

Use the **Page** tab of the **Navigator** pane to explore the file system that's returned from the server to construct the current webpage.  Select a JavaScript file to view, edit, and debug it.  The **Page** tab lists all of the resources that the page has loaded.

:::image type="complex" source="../media/sources-page-tab.msft.png" alt-text="The Page tab in the Navigator pane of the Sources tool" lightbox="../media/sources-page-tab.msft.png":::
   The **Page** tab in the **Navigator** pane of the **Sources** tool
:::image-end:::

To display a file in the **Editor** pane, select a file in the **Page** tab.  For an image, a preview of the image is displayed.

To display the URL or path for a resource, hover over the resource.

To load a file into a new tab of the browser, or to display other actions, right-click on the file name.

#### Icons in the Page tab

The **Page** tab uses the following icons:
*   The **window** icon, along with the label `top`, represents the main document frame, which is an [HTML frame](https://w3.org/TR/html401/present/frames.html).
*   The **cloud** icon represents an [origin](https://html.spec.whatwg.org/multipage/origin.html#origin).
*   The **folder** icon represents a directory.
*   The **page** icon represents a resource.

#### Group files by folder or as a flat list

The **Page** tab displays files or resources grouped by server and directory, or as a flat list.

To change how resources are grouped:

1.  Next to the tabs on the Navigator pane (on the left), select the **...** (**More options**) button.  A menu appears.
1.  Select or clear the **Group by folder** option.

### Using the Filesystem tab to define a local Workspace

Use the **Filesystem** tab of the **Navigator** pane to add files to a Workspace, so that changes you make in DevTools get saved to your local file system.

A file that's in a Workspace is indicated by a green dot next to the file name, throughout DevTools.

:::image type="complex" source="../media/sources-filesystem-tab.msft.png" alt-text="The Filesystem tab, for a Workspace" lightbox="../media/sources-filesystem-tab.msft.png":::
   The **Filesystem** tab, for a Workspace
:::image-end:::

By default, when you edit a file in the **Sources** tool, your changes are discarded when you refresh the webpage.  The **Sources** tool works with a copy of the front-end resources that are returned by the web server.  When you modify these front-end files that are returned by the server, the changes don't persist, because you didn't change the source files.  You need to also apply your edits in your actual source code, and then re-deploy to the server.

In contrast, when you use a Workspace, changes that you make to your front-end code are preserved when you refresh the webpage.  With a Workspace, when you edit the front-end code that's returned by the server, the Sources tool also applies your edits to your local source code.  Then for other users to see your changes, you only need to redeploy your changed source files to the server.

Workspaces work well when the JavaScript code that's returned by the server is the same as your local JavaScript source code.  Workspaces don't work as well when your workflow involves transformations on your source code, such as minification or [TypeScript](https://www.typescriptlang.org) compilation.

For more information, see the tutorial [Edit files with Workspaces](../workspaces/index.md).

### Using the Overrides tab to override server files with local files

Use the **Overrides** tab of the **Navigator** pane to override page assets (such as images) with files from a local folder.

Items in this tab override what the server sends to the browser, even after the server has sent the assets.

:::image type="complex" source="../media/overrides-tab.msft.png" alt-text="The Overrides tab of the Navigator pane" lightbox="../media/overrides-tab.msft.png":::
   The **Overrides** tab of the **Navigator** pane
:::image-end:::

The **Overrides** feature is similar to Workspaces.  Use Overrides when you want to experiment with changes to a webpage, and you need to keep the changes after you refresh the webpage, but you don't care about mapping your changes to the source code of the webpage.

A file that overrides a file that is returned by the server is indicated by a purple dot next to the file name, throughout DevTools.

#### See also

*   [Override webpage resources with local copies using Microsoft Edge DevTools](../javascript/overrides.md)

*   [Map preprocessed code to source code](../javascript/source-maps.md)

### Using the Content scripts tab for Microsoft Edge extensions

Use the **Content scripts** tab of the **Navigator** pane to view any content scripts that were loaded by a Microsoft Edge extension that you installed.

:::image type="complex" source="../media/content-scripts-tab.msft.png" alt-text="The Content scripts tab of the Navigator pane" lightbox="../media/content-scripts-tab.msft.png":::
   The **Content scripts** tab of the **Navigator** pane
:::image-end:::

When the debugger steps into code that you don't recognize, you might want to mark that code as Library code, to avoid stepping into that code.  See [Mark content scripts as Library code](../javascript/guides/mark-content-scripts-library-code.md).

#### See also

*   [Content scripts](https://developer.mozilla.org/Add-ons/WebExtensions/Content_scripts)
*   [Create an extension tutorial Part 2](../../extensions-chromium/getting-started/part2-content-scripts.md)

### Using the Snippets tab to run JavaScript code snippets on any webpage

Use the **Snippets** tab of the **Navigator** pane to create and save JavaScript code snippets, so that you can easily run these snippets on any webpage.

:::image type="complex" source="../media/snippet.msft.png" alt-text="A Snippet that inserts the jQuery library into a webpage" lightbox="../media/snippet.msft.png":::
   A Snippet that inserts the jQuery library into a webpage
:::image-end:::

For example, suppose you frequently enter the following code in the **Console**, to insert the jQuery library into a page so that you can run jQuery commands from the **Console**:

```javascript
let script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.2.1.min.js';
script.crossOrigin = 'anonymous';
script.integrity = 'sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=';
document.head.appendChild(script);
```

Instead, you can save this code in a **Snippet** and then easily run it whenever you need to.  When you select `Ctrl`+`S` (Windows/Linux) or `Command`+`S` (macOS), DevTools saves the **Snippet** to your file system.

There are multiple ways to run a Snippet:
*   In the **Navigator** pane, select the **Snippets** tab, and then select the snippets file to open it.  Then at the bottom of the Editor pane, select **Run** (![The Run button](../media/run-snippet-icon.msft.png)).
*   When DevTools has focus, select `Ctrl`+`P` (Windows/Linux) or `Command`+`P` (macOS) to open the [Command Menu](../command-menu/index.md), and then type `!`.

Snippets are similar to bookmarklets.

#### See also

*   [Run snippets of JavaScript on any webpage with Microsoft Edge DevTools](../javascript/snippets.md)

### Using the Command Menu to open files

To open a file, in addition to using the **Navigator** pane within the **Sources** tool, you can use the Command Menu from anywhere within DevTools.

*   From anywhere in DevTools, select `Ctrl`+`P` on Windows/Linux or `Command`+`P` on macOS.  The Command Menu appears, and lists all the resources that are in the tabs of the **Navigator** pane of the **Sources** tool.
*   Or, next to the tabs of the **Navigator** pane in the **Sources** tool, select the **...** (**More options**) button, and then select **Open File**.

To display and pick from a list of all .js files, type `.js`.

:::image type="complex" source="../media/sources-command-menu-to-open-file.msft.png" alt-text="Opening a file by using the Command Menu" lightbox="../media/sources-command-menu-to-open-file.msft.png":::
   Opening a file by using the Command Menu
:::image-end:::

If you type `?`, the Command Menu shows several commands, including **... Open file**.  If you select `Backspace` to clear the Command Menu, a list of files is shown.

For more information, see [Run commands with the Microsoft Edge DevTools Command Menu](../command-menu/index.md).


<!-- ====================================================================== -->
## Using the Editor pane to view or edit files

Use the **Editor** pane to view the front-end files that are returned from the server to compose the current webpage, including JavaScript, HTML, CSS, and image files.  When you edit the front-end files in the **Editor** pane, DevTools updates the webpage to run the modified code.

:::image type="complex" source="../media/editor-pane.msft.png" alt-text="The Editor pane in the Sources tool" lightbox="../media/editor-pane.msft.png":::
   The **Editor** pane in the **Sources** tool
:::image-end:::

The **Editor** pane has the following level of support for various file types:

| File Type | Supported Actions |
|---|---|
| JavaScript | View, edit, and debug. |
| CSS | View and edit. |
| HTML | View and edit. |
| Images | View. |

By default, edits are discarded when you refresh the webpage.  For information about how to save the changes to your file system, see [Using the Filesystem tab to define a local Workspace](#using-the-filesystem-tab-to-define-a-local-workspace), above.

The following subsections cover the Editor pane:
*   [Editing a JavaScript file](#editing-a-javascript-file)
*   [Reformatting a minified JavaScript file with pretty-print](#reformatting-a-minified-javascript-file-with-pretty-print)
*   [Mapping minified code to your source code to show readable code](#mapping-minified-code-to-your-source-code-to-show-readable-code)
*   [Transformations from source code to compiled front-end code](#transformations-from-source-code-to-compiled-front-end-code)
*   [Editing a CSS file](#editing-a-css-file)
*   [Editing an HTML file](#editing-an-html-file)
*   [Going to a line number or function](#going-to-a-line-number-or-function)
*   [Displaying source files when using a different tool](#displaying-source-files-when-using-a-different-tool)

### Editing a JavaScript file

To edit a JavaScript file in DevTools, use the **Editor** pane, within the **Sources** tool.

:::image type="complex" source="../media/editing-js-in-editor-pane.msft.png" alt-text="Editing JavaScript in the Editor pane" lightbox="../media/editing-js-in-editor-pane.msft.png":::
   Editing JavaScript in the **Editor** pane
:::image-end:::

To load a file into the Editor pane, use the **Page** tab in the **Navigator** pane (on the left).  Or use the **Command Menu**, as follows: in the upper right of DevTools, select **Customize and control DevTools** (`...`) and then select **Open File**.

#### Save and Undo

For JavaScript changes to take effect, select `Ctrl`+`S` (Windows, Linux) or `Command`+`S` (macOS).

If you change a file, an asterisk appears next to the file name.
*   To save changes, select `Ctrl`+`S` on Windows/Linux or `Command`+`S` on macOS.
*   To undo a change, select `Ctrl`+`Z` on Windows/Linux or `Command`+`Z` on macOS.

By default, your edits are discarded when you refresh the webpage.  For more information about how to save the changes in your local file system, see [Edit files with Workspaces](../workspaces/index.md).

#### Find and Replace

To find text in the current file, select the **Editor** pane to give it focus, and then select `Ctrl`+`F` on Windows/Linux, or `Command`+`F` on macOS.

:::image type="complex" source="../media/find-replace.msft.png" alt-text="Find and Replace, in the Editor pane of the Sources tool" lightbox="../media/find-replace.msft.png":::
   **Find** and **Replace**, in the **Editor** pane of the **Sources** tool
:::image-end:::

To find and replace text, select the **Replace** (**A-\>B**) button to the left of the **Find** textbox. The **Replace** (**A-\>B**) button appears when viewing an editable file.

#### Showing the changes you made

To review the changes you made to a file, right-click in the **Editor** pane and then select **Local Modifications**.

The **Drawer** opens at the bottom of DevTools, showing your changes within the **Changes** tab.

:::image type="complex" source="../media/local-modifications.msft.png" alt-text="Showing Local Modifications, in the Changes tab of the Drawer" lightbox="../media/local-modifications.msft.png":::
   Showing **Local Modifications**, in the **Changes** tab of the **Drawer**
:::image-end:::

#### Changes inside a function take effect

DevTools doesn't re-run a script, so the only JavaScript changes that take effect are changes that you make within functions.  For example, in the following figure, we added the following code to the JavaScript that is returned by the server:
*   We added the statement `console.log('A')` outside of any function.
*   We added the statement `console.log('B')` inside an `onClick` function.
We then saved the changes, entered numbers into the form, and then selected the form button to send the form.

After submitting the form, `console.log('A')`, which is at global scope, doesn't run, but `console.log('B')`, inside an `onClick` function, does run, outputting `B` to the Console:

:::image type="complex" source="../media/edit-js.msft.png" alt-text="Global-scope JavaScript is not re-run" lightbox="../media/edit-js.msft.png":::
   Global-scope JavaScript is not re-run
:::image-end:::

### Reformatting a minified JavaScript file with pretty-print

To use pretty-print to reformat a file to make it readable, select the **Pretty print** button (![Format](../media/format-icon.msft.png)), which is shown as braces, at the bottom of the Editor pane.  Or, if a **Pretty-print** button appears at the top of the Editor pane, you can select that button.

:::image type="complex" source="../media/minified.msft.png" alt-text="The Pretty print button" lightbox="../media/minified.msft.png":::
   The **Pretty print** button
:::image-end:::

The reformatted file appears in a new tab, with `:formatted` appended to the file name.  The reformatted code is read-only.

:::image type="complex" source="../media/pretty-printed.msft.png" alt-text="A pretty-printed (reformatted) JavaScript file" lightbox="../media/pretty-printed.msft.png":::
   A pretty-printed (reformatted) JavaScript file
:::image-end:::

To make the reformatted file scroll to the code that you select in the minified file:
1.   If the reformatted file tab is open, close it.
1.   Select some code in the minified file in the Editor pane.
1.   Select the **Pretty print** button.
The formatted code appears in a new tab, scrolled to the code that you selected.

For more information, see [Reformat a minified JavaScript file with pretty-print](../javascript/reference.md#reformat-a-minified-javascript-file-with-pretty-print).

### Mapping minified code to your source code to show readable code

Source maps from preprocessors cause DevTools to load your original JavaScript source files in addition to your minified, transformed JavaScript files that are returned by the server.  You then view your original source files while you set breakpoints and step through code.  Meanwhile, Microsoft Edge is actually running your minified code.

In the **Editor** pane, if you right-click a JavaScript file and then select **Add source map**, a popup box appears, with a **Source map URL** textbox and an **Add** button.

The source-mapping approach keeps your front-end code human-readable and debuggable even after you combine, minify, or compile it.
For more information, see [Map preprocessed code to source code](../javascript/source-maps.md).

### Transformations from source code to compiled front-end code

If you use a framework that transforms your JavaScript files, such as React, your local source JavaScript might be different than the front-end JavaScript that's returned by the server.  Workspaces aren't supported in this scenario, but source code mapping is supported in this scenario.

In a development environment, your server might include your source maps and your original `.ts` or `.jsx` files for React.  The **Sources** tool displays these files, but doesn't allow you to edit these files.  When you set breakpoints and use the debugger, DevTools displays your original `.ts` or `.jsx` files, but actually steps-through the minified version of your JavaScript files.

In this scenario, the **Sources** tool is useful for inspecting and stepping-through the transformed, front-end JavaScript that's returned from the server.  Use the debugger to define Watch expressions, and use the Console to enter JavaScript expressions to manipulate data that's in-scope.

### Editing a CSS file

There are two ways to edit CSS in DevTools:
*   In the **Elements** tool, you work with one CSS setting at a time, through user interface controls.  This approach is recommended in most cases.  For more information, see [Edit CSS font styles and settings in the Styles pane](../inspect-styles/edit-fonts.md).
*   In the **Sources** tool, you use a text editor.

The Sources tool supports directly editing a CSS file.  For example, if you edit the CSS file from the tutorial [Edit files with Workspaces](../workspaces/index.md) to match the style rule below, the `H1` element in the upper left of the rendered webpage changes to green:

```css
h1 {
  color: green;
}
```

:::image type="complex" source="../media/edit-css.msft.png" alt-text="Edit CSS in the Editor pane to change the text color of the H1 heading to green" lightbox="../media/edit-css.msft.png":::
   Edit CSS in the **Editor** pane to change the text color of the `H1` heading to green
:::image-end:::

CSS changes take effect immediately; you don't need to manually save the changes.

#### See also

*   [Edit CSS font styles and settings in the Styles pane](../inspect-styles/edit-fonts.md)

*   [DevTools for beginners: Get started with CSS](../beginners/css.md) - tutorial

### Editing an HTML file

There are two ways to edit HTML in DevTools:
*   In the **Elements** tool, you work with one HTML element at a time, through user interface controls.
*   In the **Sources** tool, you use a text editor.

:::image type="complex" source="../media/sources-html-editor.msft.png" alt-text="The HTML editor of the Sources tool" lightbox="../media/sources-html-editor.msft.png":::
   The HTML editor of the **Sources** tool
:::image-end:::

Unlike a JavaScript or CSS file, an HTML file that is returned by the web server cannot be directly edited in the Sources tool.  To edit an HTML file using the Editor of the Sources tool, the HTML file must be in a Workspace or on the **Overrides** tab.  See these subsections of the current article:
*   [Using the Filesystem tab to define a local Workspace](#using-the-filesystem-tab-to-define-a-local-workspace)
*   [Using the Overrides tab to override server files with local files](#using-the-overrides-tab-to-override-server-files-with-local-files)

To save changes, select `Ctrl`+`S` on Windows/Linux or `Command`+`S` on macOS.  An edited file is marked by an asterisk.

To find text, select `Ctrl`+`F` on Windows/Linux or `Command`+`F` on macOS.

To undo an edit, select `Ctrl`+`Z` on Windows/Linux or `Command`+`Z` on macOS.

To view other commands while editing an HTML file, in the Editor pane, right-click the HTML file.

You can also edit HTML by using an HTML editor, rather than DevTools.  For example, the article [DevTools for beginners: Get started with HTML and the DOM](../beginners/html.md) uses a website that enables HTML editing within the webpage.

### Going to a line number or function

To go to a line number or symbol (such as a function name) in the file which is open in the Editor pane, you can use the Command Menu, rather than scrolling through the file.

1.   In the **Navigator** pane, select the ellipses (...) (**More options**), and then select **Open File**.  The Command Menu appears.
1.   Type one of the following characters:

| Character | Command name | Purpose |
|---|---|---|
| \: | **Go to line** | Go to a line number. |
| \@ | **Go to symbol** | Go to a function.  When you type `@`, the Command Menu lists the functions that are found in the JavaScript file which is open in the Editor pane. |

For more information, see [Run commands with the Microsoft Edge DevTools Command Menu](../command-menu/index.md).

### Displaying source files when using a different tool

The main place to view source files in the DevTools is within the **Sources** tool.  But sometimes you need to access other tools, such as **Elements** or **Console**, while viewing or editing your source files.  Use the **Quick Sources** tool in the [Drawer](../customize/index.md#drawer).

1.  Select a tool other than the **Sources** tool, such as the **Elements** tool.
1.  Select `Ctrl`+`Shift`+`P` (Windows, Linux) or `Command`+`Shift`+`P` (macOS).  The Command Menu opens.
1.  Type `Quick Source`, and then select **Show Quick Source**.  At the bottom of the DevTools window, the Drawer appears, with the **Quick Source** panel selected.  The **Quick Source** panel contains the last file you edited in the **Sources** tool, within a compact version of the DevTools code editor.
1.  Select `Ctrl`+`P` (Windows, Linux) or `Command`+`P` (macOS) to open the **Open File** dialog.


<!-- ====================================================================== -->
## Using the Debugger pane to debug JavaScript code

Use the JavaScript debugger to step through the JavaScript code that's returned by the server.
The debugger includes the **Debugger** pane, along with breakpoints that you set on lines of code in the **Editor** pane.

With the debugger, you step through the code, while watching any JavaScript expressions you specify.  Watch and manually change variable values, and automatically show which variables are in-scope for the current statement.

:::image type="complex" source="../media/sources-paused-breakpoint-highlight-debug-pane.msft.png" alt-text="The Debugger pane of the Sources tool  " lightbox="../media/sources-paused-breakpoint-highlight-debug-pane.msft.png":::
   The **Debugger** pane of the **Sources** tool
:::image-end:::

The debugger supports standard debugging actions, such as:
*   Setting breakpoints, to pause code.
*   Stepping through code.
*   Viewing and editing properties and variables.
*   Watching the values of JavaScript expressions.
*   Viewing the call stack (the sequence of function calls so far).

The debugger in DevTools is designed to look, feel, and work like [the debugger in Visual Studio Code](https://code.visualstudio.com/docs/editor/debugging) and [the debugger in Visual Studio](/visualstudio/debugger/navigating-through-code-with-the-debugger).

The following subsections cover debugging:
*   [The basic approach to using a debugger](#the-basic-approach-to-using-a-debugger)
*   [Advantages of the debugger's Watch and Scope over console.log](#advantages-of-the-debuggers-watch-and-scope-over-consolelog)
*   [Debug from Visual Studio Code directly](#debug-from-visual-studio-code-directly)
*   [Articles about debugging](#articles-about-debugging)

### The basic approach to using a debugger

To troubleshoot JavaScript code, you can insert `console.log()` statements in the **Editor** pane.  Another, more powerful approach is to use the debugger of Microsoft Edge DevTools.  Using a debugger can actually be simpler than `console.log()`, once you're familiar with the debugger approach.

To use a debugger on a webpage, you typically set a breakpoint and then send a form from the webpage, as follows:

1.  Open the webpage in a new tab of the browser.  For example, open this form webpage in a new tab: [Demo: Get Started Debugging JavaScript with Microsoft Edge DevTools](https://microsoft-edge-chromium-devtools.glitch.me/debug-js/get-started.html).

1.  Select `F12` to open the **DevTools** window, and then select the **Sources** tab.

1.  In the **Navigator** pane (on the left), select the **Page** tab, and then select the JavaScript file, such as `get-started.js`.

1.  In the **Editor** pane, select a line number near a suspect line of code, to set a breakpoint on that line.  In the figure below, a breakpoint is set on the line `var sum = addend1 + addend2;`.

1.  In the webpage, enter values and submit the form.  For example, enter numbers, such as `5` and `1`, then select the button **Add Number 1 and Number 2**.

    The debugger runs the JavaScript code and then pauses at the breakpoint.  The debugger is now in Paused mode, so you can inspect the values of the properties that are in-scope, and step through the code.

    :::image type="complex" source="../media/sources-paused-breakpoint-highlights.msft.png" alt-text="Entering Paused mode of the debugger" lightbox="../media/sources-paused-breakpoint-highlights.msft.png":::
        Entering Paused mode of the debugger
    :::image-end:::

    In the above figure, we added the Watch expressions `sum` and `typeof sum`, and stepped two lines past the breakpoint.

1.  Examine the values in the **Scope** pane, which shows all variables or properties that are in-scope for the current breakpoint, and their values.  Or, add expressions in the **Watch** pane.  These expressions are the same expressions that you would write within a `console.log` statement to debug your code.  To run JavaScript commands to manipulate data in the current context, use the **Console**.  To open the console, select `Esc`.

1.  Step through the code by using the controls at the top of the **Debugger** pane, such as **Step** (`F9`).

#### See also

*   [Get started with debugging JavaScript](../javascript/index.md) - a tutorial using an existing, simple webpage that contains a few form controls.

### Advantages of the debugger\'s Watch and Scope over console\.log

These three approaches are equivalent:

*   Temporarily adding the statements `console.log(sum)` and `console.log(typeof sum)` in the code, where `sum` is in-scope.
*   Issuing the statements `sum` and `console.log(typeof sum)` in the **Console** pane of the DevTools, when the debugger is paused where `sum` is in-scope.
*   Setting the **Watch** expressions `sum` and `typeof sum` in the **Debugger** pane.

When the variable `sum` is in-scope, `sum` and its value are automatically shown in the **Scope** section of the **Debugger** pane, and are also overlaid in the Editor pane where `sum` is calculated.  So you probably wouldn't need to define a Watch expression for `sum`.

The debugger gives a richer, more flexible display and environment than a `console.log` statement.  For example, in the debugger, as you step through the code, you can display and change the values of all currently defined properties and variables.  You can also issue JavaScript statements in the **Console**, such as to change values in an array that's in-scope.  (To display the Console, select **Esc**.)

Breakpoints and Watch expressions are preserved when you refresh the webpage.

### Debug from Visual Studio Code directly

To use the more full-featured debugger of Visual Studio Code instead of the DevTools debugger, use the **Microsoft Edge DevTools** extension for Visual Studio Code.

:::image type="complex" source="../media/microsoft-edge-tools-for-vs-code-extension.msft.png" alt-text="The Microsoft Edge DevTools extension for Visual Studio Code" lightbox="../media/microsoft-edge-tools-for-vs-code-extension.msft.png":::
   The **Microsoft Edge DevTools** extension for Visual Studio Code
:::image-end:::

This extension provides access to the **Elements** and **Network** tools of Microsoft Edge DevTools, from within Microsoft Visual Studio Code.

For more information, see [Visual Studio Code overview](../../visual-studio-code/index.md) and the GitHub Readme page, [Microsoft Edge Developer Tools for Visual Studio Code](https://github.com/microsoft/vscode-edge-devtools).

### Articles about debugging

The following articles cover the **Debugger** pane and breakpoints:

*   [Get started with debugging JavaScript in Microsoft Edge DevTools](../javascript/index.md) - A tutorial (with screen captures), using an existing, simple project.

*   [Use the debugger features](../javascript/reference.md) - How to use the debugger to set breakpoints, step through code, view and modify variable values, watch JavaScript expressions, and view the call stack.

*   [Pause your code with breakpoints](../javascript/breakpoints.md) - How to set basic and specialized breakpoints in the debugger.


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/sources) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors/kaycebasques) (Technical Writer, Chrome DevTools \& Lighthouse).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
