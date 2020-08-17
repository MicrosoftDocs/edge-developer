---
title: Edit files with Workspaces
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 08/14/2020
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

> [!NOTE]
> The goal of this tutorial is to provide hands-on practice in setting up and using Workspaces, so that you are able to use Workspaces in your own projects.  You are able to save the changes to the source code, on your local computer, that you made within DevTools after you enable Workspaces.  

> [!IMPORTANT]
> **Prerequisites**: Before beginning this tutorial, you should know how to perform the following actions.  
> 
> *   [Use html, CSS, and JavaScript to build a web page][MDNWebGettingStarted]  
> *   [Use DevTools to make basic changes to CSS][DevToolsCssIndex]  
> *   [Run a local HTTP web server][MDNSimpleLocalHTTPServer]  

## Overview  

Workspaces enable you to save a change that you make in Devtools to a local copy of the same file on your computer.  For this tutorial, you should have the following settings on your machine.  

*   You have the source code for your site on your desktop.  
*   You are running a local web server from the source code directory, so that the site is accessible at `localhost:8080`.  
*   You opened `localhost:8080` in Microsoft Edge, and you are using DevTools to change the CSS of the site.  

With Workspaces enabled, the CSS changes that you make within DevTools are saved to the source code on your desktop.  

## Limitations  

If you are using a modern framework, it probably transforms your source code from a format that is easy to maintain into a format that is optimized to run as quickly as possible.  

Workspaces is usually able to map the optimized code back to your original source code with the help of [source maps][TreehouseBlogSourceMaps].  But there is a lot of variation between frameworks over how each uses source maps.  Devtools simply does support all of the variations.  

Workspaces is known to not work with the following framework.  

*   Create React App  
    
## Related feature: Local overrides  

**Local Overrides** is another DevTools feature that is similar to Workspaces.  Use Local Overrides when you want to experiment with changes to a page, and you need to see the changes across page loads, but you do not care about mapping your changes to the source code of the page.  

<!--Todo: add section when content is ready  -->  

## Step 1: Set up  

Complete the following actions, to get hands-on experience with Workspaces.  

### Set up the demo  

1.  [Open the demo][GlitchWorkspacesDemo].  <!--In the top-left of the editor, a randomly-generated project name is displayed.  -->  
    
    :::image type="complex" source="../media/workspaces-glitch-workspaces-demo-source.msft.png" alt-text="A Glitch project" lightbox="../media/workspaces-glitch-workspaces-demo-source.msft.png":::
       A Glitch project  
    :::image-end:::  
    
    <!--1.  Choose the project name.  -->  
    <!--1.  Select **Advanced Options** > **Download Project**.  
    
    :::image type="complex" source="../media/workspaces-glitch-advanced-options-download-project.msft.png" alt-text="The Download Project button" lightbox="../media/workspaces-glitch-advanced-options-download-project.msft.png":::
       The Download Project button  
    :::image-end:::  

    -->  
    <!--1.  Close the tab.  -->  
    <!--1.  Unzip the source code and move the unzipped `app` directory to your desktop.  For the rest of this tutorial the directory is referred to as `~/Desktop/app`.  -->  
    
1.  Create an `app` directory on your desktop.  Save copies of the files in the `workspaces-demo` directory.  For the rest of this tutorial the directory is referred to as `~/Desktop/app`.  
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
    
1.  Open a tab in Microsoft Edge and go to locally-hosted version of the site.  You should be able to access it using a URL like `localhost:8080` or `http://0.0.0.0:8080`.  The exact [port number][WikiPortURLs] may be different.  
    
    :::image type="complex" source="../media/workspaces-workspaces-demo.msft.png" alt-text="The demo" lightbox="../media/workspaces-workspaces-demo.msft.png":::
       The demo  
    :::image-end:::  
    
### Set up DevTools  

1.  Select `Control`+`Shift`+`J` \(Windows\) or `Command`+`Option`+`J` \(macOS\) to open the **Console** panel of DevTools.  
    
    :::image type="complex" source="../media/workspaces-workspaces-demo-console.msft.png" alt-text="The Console panel" lightbox="../media/workspaces-workspaces-demo-console.msft.png":::
       The **Console** panel  
    :::image-end:::  
    
1.  Choose the **Sources** tab.  
1.  Choose the **Filesystem** tab.  
    
    :::image type="complex" source="../media/workspaces-workspaces-demo-sources-filesystem.msft.png" alt-text="The Filesystem tab" lightbox="../media/workspaces-workspaces-demo-sources-filesystem.msft.png":::
       The **Filesystem** tab  
    :::image-end:::  
    
1.  Choose **Add Folder To Workspace**.  
1.  Type `~/Desktop/app`.  
1.  Choose **Allow** to give DevTools permission to read and write to the directory.  
    In the **Filesystem** tab, there is now a green dot next to `index.html`, `script.js`, and `styles.css`.  These green dots mean that DevTools has established a mapping between the network resources of the page, and the files in `~/Desktop/app`.  
    
    :::image type="complex" source="../media/workspaces-workspaces-demo-sources-filesystem-folder.msft.png" alt-text="The Filesystem tab now shows a mapping between the local files and the network ones" lightbox="../media/workspaces-workspaces-demo-sources-filesystem-folder.msft.png":::
       The **Filesystem** tab now shows a mapping between the local files and the network ones  
    :::image-end:::  
    
## Step 2: Save a CSS change to disk  

1.  Open `styles.css`.  
    
    > [!NOTE]
    > The `color` property of `h1` elements is set to `fuchsia`.  
    
    :::image type="complex" source="../media/workspaces-workspaces-demo-sources-filesystem-css.msft.png" alt-text="View styles.css in a text editor" lightbox="../media/workspaces-workspaces-demo-sources-filesystem-css.msft.png":::
       View `styles.css` in a text editor  
    :::image-end:::  
    
1.  Choose the **Elements** tab.  
1.  Change the value of the `color` property of the `<h1>` element to your favorite color.  
    Remember that you need to choose the `<h1>` element in the **DOM Tree** in order to see the CSS rules applied to it in the **Styles** pane.  The green dot next to `styles.css:1` means that any change that you make are mapped to `~/Desktop/app/styles.css`.  
    
    :::image type="complex" source="../media/workspaces-workspaces-demo-elements-styles-css.msft.png" alt-text="The green indicator that the file is linked" lightbox="../media/workspaces-workspaces-demo-elements-styles-css.msft.png":::
       The green indicator that the file is linked  
    :::image-end:::  
    
1.  Open `styles.css` in a text editor again.  The `color` property is now set to your favorite color.  
1.  Refresh the page.  The color of the `<h1>` element is still set to your favorite color.  The process works because when you made the change, DevTools saved the change to disk.  And afterwars, when you refreshed the page, your local server served the modified copy of the file from disk.  
    
## Step 3: Save an HTML change to disk  

### Change HTML from the Elements Panel  

You may make changes to the html from the Element Panel, but your changes to the DOM tree are not saved to disk and only effect the current browser session.  

The DOM tree is not html.  

<!--### Try changing HTML from the Elements panel  

> [!WARNING]
> The workflow that you are about to try does not work.  You are trying it now so that you do not waste time later trying to figure out why it is not working.  

1.  Choose the **Elements** tab.  
1.  Choose and edit the text content of the `h1` element, which says `Workspaces Demo`, and replace it with `I ❤️  Cake`.  
    
    :::image type="complex" source="../media/workspaces-workspaces-demo-change-h1.msft.png" alt-text="Attempt to change html from the DOM Tree of the Elements panel" lightbox="../media/workspaces-workspaces-demo-change-h1.msft.png":::
       Attempt to change html from the DOM Tree of the **Elements** panel  
    :::image-end:::  
    
1.  Open `~/Desktop/app/index.html` in a text editor.  The change that you just made does not appear.  
1.  Refresh the page.  The page reverts to the original title.  
    
#### Optional: Why it is not working  

> [!NOTE]
> This section describes why the workflow from [Try changing html from the Elements panel](#try-changing-html-from-the-elements-panel) does not work.  You should skip this section if you do not care why.  

*   The tree of nodes that you see on the **Elements** panel represents the [DOM][MDNWebAPIsDOM] of the page.  
*   To display a page, a browser fetches html over the network, parses the html, and then converts it into a tree of DOM nodes.  
*   If the page has any JavaScript, that JavaScript may add, delete, or change DOM nodes.  CSS may change the DOM, too, using the [`content`][MDNCSSContent] property.  
*   The browser eventually uses the DOM to determine what content it should present to browser users.  
*   Therefore, the final state of the page that users see may be very different from the html that the browser fetched.  
*   This makes it difficult for DevTools to resolve where a change made in the **Elements** panel should be saved, because the DOM is affected by HTML, JavaScript, and CSS.  

In short, the **DOM Tree** `!==` HTML.  
-->  

### Change HTML from the Sources panel  

If you want to save a change to the html of the page, do it using the **Sources** panel.  

1.  Choose the **Sources** tab.  
1.  Choose the **Page** tab.  
1.  Choose **(index)**.  The HTML for the page opens.  
1.  Replace `<h1>Workspaces Demo</h1>` with `<h1>I ❤️  Cake</h1>`.  See the following figure.  
1.  Select `Control`+`S` \(Windows\) or `Command`+`S` \(macOS\) to save the change.  
1.  Refresh the page.  The `<h1>` element is still displaying the new text.  
    
    :::image type="complex" source="../media/workspaces-workspaces-demo-sources-page-h1.msft.png" alt-text="Change HTML from the Sources panel" lightbox="../media/workspaces-workspaces-demo-sources-page-h1.msft.png":::
       Change HTML from the **Sources** panel  
    :::image-end:::  
    
1.  Open `~/Desktop/app/index.html`.  The `<h1>` element contains the new text.  
    
## Step 4: Save a JavaScript change to disk  

The **Sources** panel is also the place to make changes to JavaScript.  But sometimes you need to access other panels, such as the **Elements** panel or the **Console** panel, while making changes to your site.  There is a way to have the **Sources** panel open alongside other panels.  

1.  Choose the **Elements** tab.  
1.  Select `Control`+`Shift`+`P` \(Windows\) or `Command`+`Shift`+`P` \(macOS\).  The **Command Menu** opens.  
1.  Type `QS`, then select **Show Quick Source**.  At the bottom of your DevTools window there is now a **Quick Source** tab.  The tab is displaying the contents of `index.html`, which is the last file you edited in the **Sources** panel.  The **Quick Source** tab gives you the editor from the **Sources** panel, so that you are able to edit files while having other panels open.  
    
    :::image type="complex" source="../media/workspaces-workspaces-demo-search-show-quick-source.msft.png" alt-text="Open the Quick Source tab using Command Menu" lightbox="../media/workspaces-workspaces-demo-search-show-quick-source.msft.png":::
       Open the **Quick Source** tab using **Command Menu**  
    :::image-end:::  
    
1.  Select `Control`+`P` \(Windows\) or `Command`+`P` \(macOS\) to open the **Open File** dialog.  See the following figure.  
1.  Type `script`, then select **app/script.js**.  
    
    :::image type="complex" source="../media/workspaces-workspaces-demo-search-script.msft.png" alt-text="Open script.js using the Open File dialog" lightbox="../media/workspaces-workspaces-demo-search-script.msft.png":::
       Open `script.js` using the **Open File** dialog  
    :::image-end:::  
    
    > [!NOTE]
    > The `Save Changes To Disk With Workspaces` link in the demo is styled regularly.  
    
1.  Add the following code to the bottom of **script.js** using the **Quick Source** tab.  
    
    ```javascript
    console.log('greetings from script.js');
    document.querySelector('a').style = 'font-style:italic';
    ```  
    
1.  Select `Control`+`S` \(Windows\) or `Command`+`S` \(macOS\) to save the change.  
1.  Refresh the page.  
    
    > [!NOTE]
    > The link on the page is now italicized.  
    
    :::image type="complex" source="../media/workspaces-workspaces-demo-elements-styles-quick-source-script.msft.png" alt-text="The link on the page is now italicized" lightbox="../media/workspaces-workspaces-demo-elements-styles-quick-source-script.msft.png":::
       The link on the page is now italicized  
    :::image-end:::  
    
## Next steps  

Use what you have learned in this tutorial to set up Workspaces in your own project.  <!-- If you run into any issues or are able to get it working after some custom configuration, please [start a thread in the mailing list][AlphabetGroupsAlphabetBrowserDevTools] or [ask a question on Stack Overflow][StackOverflowAlphabetBrowserDevTools] to share your knowledge with the rest of the DevTools community.  -->  

<!--  
If you have more feedback on the topics or anything else, please use any of the channels below:  

*   [Mailing List][AlphabetGroupsAlphabetBrowserDevTools]  
*   [Twitter][TwitterAlphabetBrowserDevTools]  
    -->  

<!-- links -->  

[DevToolsCssIndex]: ../css/index.md "Get started with viewing and changing CSS | Microsoft Docs"  

<!--[LocalOverrides]: ../whats-new/2018/01/devtools#overrides -->  

<!--[AlphabetGroupsAlphabetBrowserDevTools]: https://groups.alphabet.com/forum/#!forum/alphabet-browser-developer-tools "Alphabet Browser DevTools - Alphabet Groups"  -->  

[GlitchWorkspacesDemo]: https://glitch.com/edit/#!/microsoft-edge-chromium-devtools?path=workspaces-demo/index.html:1:0 "Workspaces Demo files | Glitch"  

[MDNCSSContent]: https://developer.mozilla.org/docs/Web/CSS/content "Content - CSS: Cascading Style Sheets | MDN"  
[MDNWebGettingStarted]: https://developer.mozilla.org/docs/Learn/Getting_started_with_the_web "Getting started with the Web | MDN"  
[MDNSimpleLocalHTTPServer]: https://developer.mozilla.org/docs/Learn/Common_questions/set_up_a_local_testing_server#Running_a_simple_local_HTTP_server "Running a simple local HTTP server | MDN"  
[MDNWebAPIsDOM]: https://developer.mozilla.org/docs/Web/API/Document_Object_Model/Introduction "Introduction to DOM - Web APIs | MDN"  

<!--[StackOverflowAlphabetBrowserDevTools]: https://stackoverflow.com/questions/ask?tags=alphabet-browser-devtools "Alphabet Browser DevTools - Stack Overflow"  -->

[TreehouseBlogSourceMaps]: https://blog.teamtreehouse.com/introduction-source-maps "An Introduction to Source Maps | Treehouse Blog"  

<!-- [TwitterAlphabetBrowserDevTools]: https://twitter.com/alphabetbrowserdevtools "Alphabet Browser DevTools \(@AlphabetBrowserDevTools\) | Twitter"  -->

[WikiPortURLs]: https://en.wikipedia.org/wiki/Port_(computer_networking)#Use_in_URLs "Port \(computer networking\) - Wikipedia"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/workspaces/index) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
