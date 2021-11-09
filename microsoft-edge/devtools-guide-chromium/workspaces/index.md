---
description: Learn how to save changes made within DevTools to disk.
title: Edit files with Workspaces
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/04/2021
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
# Edit files with Workspaces

This tutorial provides hands-on practice in setting up and using a Workspace.  After you add files to a Workspace, the changes that you make in your source code within DevTools are saved on your local computer, and are preserved after you refresh the webpage.

> [!IMPORTANT]
> **Prerequisites**: Before beginning this tutorial, you should know how to perform the following actions.
>
> *   [Use html, CSS, and JavaScript to build a web page](https://developer.mozilla.org/docs/Learn/Getting_started_with_the_web)
> *   [Use DevTools to make basic changes to CSS](../css/index.md)
> *   [Run a local HTTP web server](https://developer.mozilla.org/docs/Learn/Common_questions/set_up_a_local_testing_server#Running_a_simple_local_HTTP_server)


<!-- ====================================================================== -->
## Overview

Workspaces enable you to save a change that you make in Devtools to a local copy of the same file on your computer.  For this tutorial, you should have the following settings on your machine.

*   You have the source code for your site on your desktop.
*   You are running a local web server from the source code directory, so that the site is accessible at `localhost:8080`.
*   You opened `localhost:8080` in Microsoft Edge, and you are using DevTools to change the CSS of the site.

With Workspaces enabled, the CSS changes that you make within DevTools are saved to the source code on your desktop.


<!-- ====================================================================== -->
## Limitations

If you are using a modern framework, it probably transforms your source code from a format that is easy to maintain into a format that is optimized to run as quickly as possible.

Workspaces is usually able to map the optimized code back to your original source code with the help of [source maps](https://blog.teamtreehouse.com/introduction-source-maps).  But there is a lot of variation between frameworks over how each framework uses source maps.  Devtools doesn't support all of the variations.

Workspaces is known to not work with the following framework.

*   Create React App

    <!-- If you run into issues while using Workspaces with your framework of choice, or you get it working after some custom configuration, please [start a thread in the mailing list](https://groups.alphabet.com/forum/#!forum/alphabet-browser-developer-tools) or [ask a question on Stack Overflow](https://stackoverflow.com/questions/ask?tags=alphabet-browser-devtools) to share your knowledge with the rest of the DevTools community.  -->


<!-- ====================================================================== -->
## Related feature: Local overrides

**Local Overrides** is another DevTools feature that is similar to Workspaces.  Use Local Overrides when you want to experiment with changes to a webpage, and you need to display the changes across webpage loads, but you do not care about mapping your changes to the source code of the webpage.

<!--Todo: add section when content is ready  -->


<!-- ====================================================================== -->
## Step 1: Set up

Complete the following actions, to get hands-on experience with Workspaces.

### Set up the demo

1.  [Open the demo](https://glitch.com/edit/#!/microsoft-edge-chromium-devtools?path=workspaces-demo/index.html:1:0).  <!--In the top-left of the editor, a randomly-generated project name is displayed.  -->

    :::image type="complex" source="../media/workspaces-glitch-workspaces-demo-source.msft.png" alt-text="A Glitch project" lightbox="../media/workspaces-glitch-workspaces-demo-source.msft.png":::
       A Glitch project
    :::image-end:::

    <!--1.  Choose the project name.  -->
    <!--1.  Choose **Advanced Options** > **Download Project**.

    :::image type="complex" source="../media/workspaces-glitch-advanced-options-download-project.msft.png" alt-text="The Download Project button" lightbox="../media/workspaces-glitch-advanced-options-download-project.msft.png":::
       The Download Project button
    :::image-end:::

    -->
    <!--1.  Close the tab.  -->
    <!--1.  Unzip the source code and move the unzipped `app` directory to your desktop.  For the rest of this tutorial the unzipped directory is referred to as `~/Desktop/app`.  -->

1.  Create an `app` directory on your desktop.  Save copies of the files from the `workspaces-demo` directory to the `app` directory.  For the rest of the tutorial, the directory is referred to as `~/Desktop/app`.
1.  Start a local web server in `~/Desktop/app`.  Below is some sample code for starting up `SimpleHTTPServer`, but you may use whatever server you prefer.

    :::row:::
       :::column span="":::
          ```bash
          cd ~/Desktop/app
          python -m SimpleHTTPServer # Python 2
          ```
       :::column-end:::
       :::column span="":::
          ```bash
          cd ~/Desktop/app
          python -m http.server # Python 3
          ```
       :::column-end:::
    :::row-end:::

1.  Open a tab in Microsoft Edge and navigate to locally-hosted version of the site.  You should be able to access it using a URL like `localhost:8080` or `http://0.0.0.0:8080`.  The exact [port number](https://en.wikipedia.org/wiki/Port_(computer_networking)#Use_in_URLs) may be different.

    :::image type="complex" source="../media/workspaces-workspaces-demo.msft.png" alt-text="The demo" lightbox="../media/workspaces-workspaces-demo.msft.png":::
       The demo
    :::image-end:::

### Set up DevTools

1.  Select `Control`+`Shift`+`J` (Windows, Linux) or `Command`+`Option`+`J` (macOS) to open the **Console** panel of DevTools.

    :::image type="complex" source="../media/workspaces-workspaces-demo-console.msft.png" alt-text="The Console panel" lightbox="../media/workspaces-workspaces-demo-console.msft.png":::
       The **Console** panel
    :::image-end:::

1.  Navigate to the **Sources** tool.
1.  In the **Navigator** pane (on the left), choose the **Filesystem** tab.

    :::image type="complex" source="../media/workspaces-workspaces-demo-sources-filesystem.msft.png" alt-text="The Filesystem tab" lightbox="../media/workspaces-workspaces-demo-sources-filesystem.msft.png":::
       The **Filesystem** tab
    :::image-end:::

1.  Choose **Add Folder To Workspace**.
1.  Type `~/Desktop/app`.
1.  Choose **Allow** to give DevTools permission to read and write to the directory.
    In the **Filesystem** tab, a green dot now appears next to `index.html`, `script.js`, and `styles.css`.  A green dot indicates that DevTools has established a mapping between a network resource of the page, and the file in `~/Desktop/app`.

    :::image type="complex" source="../media/workspaces-workspaces-demo-sources-filesystem-folder.msft.png" alt-text="The Filesystem tab now indicates a mapping between the local files and the network ones" lightbox="../media/workspaces-workspaces-demo-sources-filesystem-folder.msft.png":::
       The **Filesystem** tab now indicates a mapping between the local files and the network ones
    :::image-end:::


<!-- ====================================================================== -->
## Step 2: Save a CSS change to disk

1.  Open `styles.css`.

    > [!NOTE]
    > The `color` property of `h1` elements is set to `fuchsia`.

    :::image type="complex" source="../media/workspaces-workspaces-demo-sources-filesystem-css.msft.png" alt-text="View styles.css in a text editor" lightbox="../media/workspaces-workspaces-demo-sources-filesystem-css.msft.png":::
       View `styles.css` in a text editor
    :::image-end:::

1.  Choose the **Elements** tool.
1.  Change the value of the `color` property of the `<h1>` element to your favorite color.
    Remember that you need to choose the `<h1>` element in the **DOM Tree** in order to display the CSS rules applied to it in the **Styles** pane.  The green dot next to `styles.css:1` means that any change that you make are mapped to `~/Desktop/app/styles.css`.

    :::image type="complex" source="../media/workspaces-workspaces-demo-elements-styles-css.msft.png" alt-text="The green indicator that the file is linked" lightbox="../media/workspaces-workspaces-demo-elements-styles-css.msft.png":::
       The green indicator that the file is linked
    :::image-end:::

1.  Open `styles.css` in a text editor again.  The `color` property is now set to your favorite color.
1.  Refresh the page.  The color of the `<h1>` element is still set to your favorite color.  The change remains across a refresh, because when you made the change DevTools saved the change to disk.  And then, when you refreshed the page, your local server served the modified copy of the file from disk.


<!-- ====================================================================== -->
## Step 3: Save an HTML change to disk

### Change HTML from the Elements Panel

You may make changes to the html from the Element Panel, but your changes to the DOM tree are not saved to disk and only effect the current browser session.

The DOM tree is not html.

<!--### Try changing HTML from the Elements panel

> [!WARNING]
> The workflow that you are about to try does not work.  You are trying it now so that you do not waste time later trying to figure out why it is not working.

1.  Choose the **Elements** tool.
1.  Choose and edit the text content of the `h1` element, which says `Workspaces Demo`, and replace it with `I ❤️  Cake`.

    :::image type="complex" source="../media/workspaces-workspaces-demo-change-h1.msft.png" alt-text="Attempt to change html from the DOM Tree of the Elements panel" lightbox="../media/workspaces-workspaces-demo-change-h1.msft.png":::
       Attempt to change html from the DOM Tree of the **Elements** tool
    :::image-end:::

1.  Open `~/Desktop/app/index.html` in a text editor.  The change that you just made does not appear.
1.  Refresh the page.  The page reverts to the original title.

#### Optional: Why it is not working

> [!NOTE]
> This section describes why the workflow from [Try changing html from the Elements panel](#try-changing-html-from-the-elements-panel) does not work.  You should skip this section if you do not care why.

*   The tree of nodes that are displayed on the **Elements** tool represents the [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model/Introduction) of the page.
*   To display a page, a browser fetches html over the network, parses the html, and then converts it into a tree of DOM nodes.
*   If the page has any JavaScript, that JavaScript may add, delete, or change DOM nodes.  CSS may change the DOM, too, using the [`content`](https://developer.mozilla.org/docs/Web/CSS/content) property.
*   The browser eventually uses the DOM to determine what content it should present to browser users.
*   Therefore, the final state of the webpage displayed for users may be very different from the html that the browser fetched.
*   This makes it difficult for DevTools to resolve where a change made in the **Elements** tool should be saved, because the DOM is affected by HTML, JavaScript, and CSS.

In short, the **DOM Tree** `!==` HTML.
-->

### Change HTML from the Sources tool

If you want to save a change to the HTML of the webpage, use the **Sources** tool.

1.  Navigate to the **Sources** tool.
1.  In the **Navigator** pane (on the left), choose the **Page** tab.
1.  Choose **(index)**.  The HTML for the page opens.
1.  Replace `<h1>Workspaces Demo</h1>` with `<h1>I ❤️  Cake</h1>`.  Review the following figure.
1.  Select `Control`+`S` (Windows, Linux) or `Command`+`S` (macOS) to save the change.
1.  Refresh the page.  The `<h1>` element continues to display the new text after the page is refreshed.

    :::image type="complex" source="../media/workspaces-workspaces-demo-sources-page-h1.msft.png" alt-text="Change HTML from the Sources tool" lightbox="../media/workspaces-workspaces-demo-sources-page-h1.msft.png":::
       Change HTML from the **Sources** tool
    :::image-end:::

1.  Open `~/Desktop/app/index.html`.  The `<h1>` element contains the new text.


<!-- ====================================================================== -->
## Step 4: Save a JavaScript change to disk

The main place to use the code editor of DevTools is the **Sources** tool.  But sometimes you need to access other tools, such as the **Elements** tool or the **Console** panel, while editing files.  The **Quick Source** tool gives you just the editor from the **Sources** tool, while any tool is open.

To open the DevTools code editor alongside other tools, do the following:

1.  Navigate to the **Elements** tool.
1.  Select `Control`+`Shift`+`P` (Windows, Linux) or `Command`+`Shift`+`P` (macOS).  The **Command Menu** opens.
1.  Type `Quick Source`, and then choose **Show Quick Source**.  At the bottom of the DevTools window, the **Quick Source** tool appears, displaying the contents of `index.html`, which is the last file you edited in the **Sources** tool.

    :::image type="complex" source="../media/workspaces-workspaces-demo-search-show-quick-source.msft.png" alt-text="Open the Quick Source tool by using the Command Menu" lightbox="../media/workspaces-workspaces-demo-search-show-quick-source.msft.png":::
       Open the **Quick Source** tool by using the **Command Menu**
    :::image-end:::

1.  Select `Control`+`P` (Windows, Linux) or `Command`+`P` (macOS) to open the **Open File** dialog.  Review the following figure.
1.  Type `script`, then choose **app/script.js**.

    :::image type="complex" source="../media/workspaces-workspaces-demo-search-script.msft.png" alt-text="Open script.js using the Open File dialog" lightbox="../media/workspaces-workspaces-demo-search-script.msft.png":::
       Open `script.js` using the **Open File** dialog
    :::image-end:::

    > [!NOTE]
    > The `Save Changes To Disk With Workspaces` link in the demo is styled regularly.

1.  Add the following code to the bottom of **script.js** using the **Quick Source** tool.

    ```javascript
    console.log('greetings from script.js');
    document.querySelector('a').style = 'font-style:italic';
    ```

1.  Select `Control`+`S` (Windows, Linux) or `Command`+`S` (macOS) to save the change.
1.  Refresh the page.

    > [!NOTE]
    > The link on the page is now italicized.

    :::image type="complex" source="../media/workspaces-workspaces-demo-elements-styles-quick-source-script.msft.png" alt-text="The link on the page is now italicized" lightbox="../media/workspaces-workspaces-demo-elements-styles-quick-source-script.msft.png":::
       The link on the page is now italicized
    :::image-end:::


<!-- ====================================================================== -->
## Next steps

Use what you have learned in this tutorial to set up Workspaces in your own project.  <!-- If you run into any issues or are able to get it working after some custom configuration, please [start a thread in the mailing list](https://groups.alphabet.com/forum/#!forum/alphabet-browser-developer-tools) or [ask a question on Stack Overflow](https://stackoverflow.com/questions/ask?tags=alphabet-browser-devtools) to share your knowledge with the rest of the DevTools community.  -->

<!--
If you have more feedback on the topics or anything else, please use any of the channels below:
*   [Mailing List](https://groups.alphabet.com/forum/#!forum/alphabet-browser-developer-tools)
*   [Twitter](https://twitter.com/alphabetbrowserdevtools)
-->


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/workspaces/index) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools \& Lighthouse).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
