---
title: Edit Files With Workspaces
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/06/2020
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







# Edit Files With Workspaces   



> [!NOTE]
> **Goal**: This tutorial provides hands-on practice in setting up and using Workspaces so that you are able to use Workspaces in your own projects.  You are able to save the changes to the source code, on your local computer, that you made within DevTools after you enable Workspaces.  

> [!CAUTION]
> **Prerequisites**: Before beginning this tutorial, you should know how to:  
> *   [Use HTML, CSS, and JavaScript to build a web page][MDNWebGettingStarted]  
> *   [Use DevTools to make basic changes to CSS][DevToolsCss]  
> *   [Run a local HTTP web server][MDNSimpleLocalHTTPServer]  

## Overview   

Workspaces enable you to save a change that you make in Devtools to a local copy of the same file on your computer.  For example, suppose:  

*   You have the source code for your site on your desktop.  
*   You are running a local web server from the source code directory, so that the site is accessible at `localhost:8080`.  
*   You opened `localhost:8080`  in Microsoft Edge, and you are using DevTools to change the CSS of the site.  

With Workspaces enabled, the CSS changes that you make within DevTools are saved to the source code on your desktop.  

## Limitations   

If you are using a modern framework, it probably transforms your source code from a format that is easy to maintain into a format that is optimized to run as quickly as possible.  
Workspaces is usually able to map the optimized code back to your original source code with the help of [source maps][TreehouseBlogSourceMaps].  But there is a lot of variation between frameworks over how they use source maps.  Devtools simply does support all the variations.  

Workspaces is known to not work with these frameworks:  

*   Create React App  

<!-- If you run into issues while using Workspaces with your framework of choice, or you get it working after some custom configuration, please [start a thread in the mailing list][AlphabetGroupsAlphabetBrowserDevTools] or [ask a question on Stack Overflow][StackOverflowAlphabetBrowserDevTools] to share your knowledge with the rest of the DevTools community.  -->  

## Related feature: Local Overrides   

**Local Overrides** is another DevTools feature that is similar to Workspaces.  Use Local Overrides when you want to experiment with changes to a page, and you need to see those changes across page loads, but you do not care about mapping your changes to the source code of the page.  

<!--Todo: add section when content is ready  -->  

## Step 1: Setup   

Complete this tutorial to get hands-on experience with Workspaces.  

### Set up the demo   

1.  [Open the demo][GlitchWorkspacesDemo].  <!--In the top-left of the editor, a randomly-generated project name is displayed.  -->  
    
    > ##### Figure 1  
    > A Glitch project
    > ![A Glitch project][ImageGlitchProject]  
    
    <!--1.  Click the project name.  -->
    <!--1.  Select **Advanced Options** > **Download Project**.  
    
    > ##### Figure 2  
    > The Download Project button  
    > ![The Download Project button][ImageDownloadProjectButton]  
    -->
    <!--1.  Close the tab.  -->
    <!--1.  Unzip the source code and move the unzipped `app` directory to your desktop.  For the rest of this tutorial this directory is referred to as `~/Desktop/app`.  -->  
1.  Create an `app` directory on your desktop.  Save copies of the files in the `workspaces-demo` directory.  For the rest of this tutorial this directory is referred to as `~/Desktop/app`.  
1.  Start a local web server in `~/Desktop/app`.  Below is some sample code for starting up `SimpleHTTPServer`, but you may use whatever server you prefer.  
    
    ```bash
    cd ~/Desktop/app
    python -m SimpleHTTPServer # Python 2
    ```  
    
    ```bash
    cd ~/Desktop/app
    python -m http.server # Python 3
    ```  
    
1.  Open a tab in Microsoft Edge and go to locally-hosted version of the site.  You should be able to access it via a URL like `localhost:8080` or `http://0.0.0.0:8080`.  The exact [port number][WikiPortURLs] may be different.  
    
    > ##### Figure 2  
    > The demo  
    > ![The demo][ImageDemo]  

### Set up DevTools   

1.  Press `Control`+`Shift`+`J` \(Windows\) or `Command`+`Option`+`J` \(macOS\) to open the **Console** panel of DevTools.  
    
    > ##### Figure 3  
    > The **Console** panel  
    > ![The Console panel][ImageConsolePanel]  

1.  Click the **Sources** tab.  
1.  Click the **Filesystem** tab.  
    
    > ##### Figure 4  
    > The **Filesystem** tab  
    > ![The Filesystem tab][ImageFilesystem]  

1.  Click **Add Folder To Workspace**.  
1.  Select `~/Desktop/app`.  
1.  Click **Allow** to give DevTools permission to read and write to the directory.  
    In the **Filesystem** tab, there is now a green dot next to `index.html`, `script.js`, and `styles.css`.  These green dots mean that DevTools has established a mapping between the network resources of the page, and the files in `~/Desktop/app`.  
    
    > ##### Figure 5  
    > The **Filesystem** tab now shows a mapping between the local files and the network ones  
    > ![The Filesystem tab now shows a mapping between the local files and the network ones][ImageMapping]  

## Step 2: Save a CSS change to disk   

1.  Open `styles.css`.  
    
    > [!NOTE]
    >The `color` property of `h1` elements is set to `fuchsia`.
    
    > ##### Figure 6  
    > Viewing `styles.css` in a text editor  
    > ![Viewing styles.css in a text editor][ImageStylesFuchsia]  


1.  Click the **Elements** tab.  
1.  Change the value of the `color` property of the `<h1>` element to your favorite color.  
    Remember that you need to click the `<h1>` element in the **DOM Tree** in order to see the CSS rules applied to it in the **Styles** pane.  The green dot next to `styles.css:1` means that any change that you make are mapped to `~/Desktop/app/styles.css`.  
    
    > ##### Figure 7  
    > The green indicator that the file is linked  
    > ![The green indicator that the file is linked][ImageStylesGreen]  

1.  Open `styles.css` in a text editor again.  The `color` property is now set to your favorite color.  
1.  Reload the page.  The color of the `<h1>` element is still set to your favorite color.  This works because when you made the change, DevTools saved the change to disk.  And then, when you reloaded the page, your local server served the modified copy of the file from disk.  

## Step 3: Save an HTML change to disk   

### Change HTML from the Elements Panel  

You may make changes to the HTML from the Element Panel, but your changes to the DOM tree are not saved to disk and only effect the current browser session.  
The DOM tree is not HTML.  

<!--### Try changing HTML from the Elements panel   

> [!WARNING]
> The workflow that you are about to try does not work.  You are trying it now so that you do not waste time later trying to figure out why it is not working.  

1.  Click the **Elements** tab.  
1.  Double click the text content of the `h1` element, which says `Workspaces Demo`, and replace it with `I ❤️  Cake`.  
    
    > ##### Old Figure 9  
    > Attempting to change HTML from the **DOM Tree** of the **Elements** panel  
    > ![Attempting to change HTML from the DOM Tree of the Elements panel][ImageElementsCake]  

1.  Open `~/Desktop/app/index.html` in a text editor.  The change that you just made does not appear.  
1.  Reload the page.  The page reverts to its original title.  

#### Optional: Why it is not working   

> [!NOTE]
> This section describes why the workflow from [Try changing HTML from the Elements panel](#try-changing-html-from-the-elements-panel) does not work.  You should skip this section if you do not care why.  

*   The tree of nodes that you see on the **Elements** panel represents the [DOM][MDNWebAPIsDOM] of the page.  
*   To display a page, a browser fetches HTML over the network, parses the HTML, and then converts it into a tree of DOM nodes.  
*   If the page has any JavaScript, that JavaScript may add, delete, or change DOM nodes.  CSS may change the DOM, too, via the [`content`][MDNCSSContent] property.  
*   The browser eventually uses the DOM to determine what content it should present to browser users.  
*   Therefore, the final state of the page that users see may be very different from the HTML that the browser fetched.  
*   This makes it difficult for DevTools to resolve where a change made in the **Elements** panel should be saved, because the DOM is affected by HTML, JavaScript, and CSS.  

In short, the **DOM Tree** `!==` HTML.  
-->
### Change HTML from the Sources panel   

If you want to save a change to the HTML of the page, do it via the **Sources** panel.  

1.  Click the **Sources** tab.  
1.  Click the **Page** tab.  
1.  Click **(index)**.  The HTML for the page opens.  
1.  Replace `<h1>Workspaces Demo</h1>` with `<h1>I ❤️  Cake</h1>`.  See [Figure 8](#figure-8).  
1.  Press `Control`+`S` \(Windows\) or `Command`+`S` \(macOS\) to save the change.  
1.  Reload the page.  The `<h1>` element is still displaying the new text.  
    
    > ##### Figure 8  
    > Line 12 has been set to `I ❤️  Cake`  
    > ![Changing HTML from the Sources panel][ImageSourcesCakeHTML]  

1.  Open `~/Desktop/app/index.html`.  The `<h1>` element contains the new text.  

## Step 4: Save a JavaScript change to disk   

The **Sources** panel is also the place to make changes to JavaScript.  But sometimes you need to access other panels, such as the **Elements** panel or the **Console** panel, while making changes to your site.  There is a way to have the **Sources** panel open alongside other panels.  

1.  Click the **Elements** tab.  
1.  Press `Control`+`Shift`+`P` \(Windows\) or `Command`+`Shift`+`P` \(macOS\).  The **Command Menu** opens.  
1.  Type `QS`, then select **Show Quick Source**.  At the bottom of your DevTools window there is now a **Quick Source** tab.  The tab is displaying the contents of `index.html`, which is the last file you edited in the **Sources** panel.  The **Quick Source** tab gives you the editor from the **Sources** panel, so that you are able to edit files while having other panels open.  
    
    > ##### Figure 9  
    > Opening the **Quick Source** tab via the **Command Menu**  
    > ![Opening the Quick Source tab via Command Menu][ImageCommandMenuQuickSource]  

1.  Press `Control`+`P` \(Windows\) or `Command`+`P` \(macOS\) to open the **Open File** dialog.  See [Figure 10](#figure-10).  
1.  Type `script`, then select **app/script.js**.  
    
    > ##### Figure 10  
    > Opening `script.js` via the **Open File** dialog  
    > ![Opening script.js via the Open File dialog][ImageOpenFileDialog]  
    
    > [!NOTE]
    > The `Save Changes To Disk With Workspaces` link in the demo is styled regularly.  
    
1.  Add the following code to the bottom of **script.js** via the **Quick Source** tab.  
    
    ```javascript
    console.log('greetings from script.js');
    document.querySelector('a').style = 'font-style:italic';
    ```  
    
1.  Press `Control`+`S` \(Windows\) or `Command`+`S` \(macOS\) to save the change.  
1.  Reload the page.  
    
    > [!NOTE]
    > The link on the page is now italic.
    
    > ##### Figure 11  
    > The link on the page is now italic  
    > ![The link on the page is now italic][ImageScriptItalic]  

## Next steps   

<!--
Congratulations, you have completed the tutorial.  <!--Click the button below to receive your prize.  -->  


<style>
.note::before {
  content: "";
}
</style>
<script>
var label = 'Workspaces / Tutorial / Cake Dispensed';
var feedback = {
  "category": "DevTools",
  "choices": [
    {
      "button": {
        "text": "Dispense Prize"
      },
      "response": "🍰",
      "analytics": {
        "label": label
      }
    }
  ]
};
</script>


-->

Use what you have learned in this tutorial to set up Workspaces in your own project.  <!-- If you run into any issues or are able to get it working after some custom configuration, please [start a thread in the mailing list][AlphabetGroupsAlphabetBrowserDevTools] or [ask a question on Stack Overflow][StackOverflowAlphabetBrowserDevTools] to share your knowledge with the rest of the DevTools community.  -->

 



<!-- 
If you have more feedback on these topics or anything else, please use any of the channels below:
*   [Mailing List][AlphabetGroupsAlphabetBrowserDevTools]  
*   [Twitter][TwitterAlphabetBrowserDevTools]  
-->

<!-- image links -->  

[ImageCommandMenuQuickSource]: images/workspaces-demo-search-show-quick-source.msft.png "Figure 9: Opening the Quick Source tab via Command Menu"  
[ImageConsolePanel]: images/workspaces-demo-console.msft.png "Figure 3: The Console panel"  
[ImageDemo]: images/workspaces-demo.msft.png "Figure 1: The demo"  
<!--[ImageDownloadProjectButton]: images/glitch-advanced-options-download-project.msft.png "old Figure 2: The Download Project button"  -->  
<!--[ImageElementsCake]: images/workspaces-demo-change-h1.msft.png "Old Figure 9: Attempting to change HTML from the DOM Tree of the Elements panel"  -->  
[ImageFilesystem]: images/workspaces-demo-sources-filesystem.msft.png "Figure 4: The Filesystem tab"  
[ImageGlitchProject]: images/glitch-workspaces-demo-source.msft.png "Figure 1: A Glitch project with a randomly-generated name"  
[ImageMapping]: images/workspaces-demo-sources-filesystem-folder.msft.png "Figure 5: The Filesystem tab now shows a mapping between the local files and the network ones"  
[ImageOpenFileDialog]: images/workspaces-demo-search-script.msft.png "Figure 10: Opening script.js via the Open File dialog"  
[ImageScriptItalic]: images/workspaces-demo-elements-styles-quick-source-script.msft.png "Figure 11: The link on the page is now italic"  
[ImageSourcesCakeHTML]: images/workspaces-demo-sources-page-h1.msft.png "Figure 8: Changing HTML from the Sources panel"  
[ImageStylesFuchsia]: images/workspaces-demo-sources-filesystem-css.msft.png "Figure 6: Viewing styles.css in a text editor"  
[ImageStylesGreen]: images/workspaces-demo-elements-styles-css.msft.png "Figure 7: The green indicator that the file is linked"  

<!-- links -->  

[DevToolsCss]: ../css/index.md "Get Started With Viewing And Changing CSS"  

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
