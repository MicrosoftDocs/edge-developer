---
title: "DevTools for beginners: Get started with HTML and the DOM"
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/16/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web developement, f12 tools, devtools
---
<!-- Copyright Katherine Jackson 

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->

# DevTools for beginners: Get started with HTML and the DOM   

This is the first in a series of tutorials that teach you the basics of web development.  You will also learn about a set of web developer tools called Microsoft Edge DevTools that can increase your productivity.  

In this particular tutorial, you learn about HTML and the DOM.  HTML is one of the core technologies of web development.  It is the language that controls the structure and content of webpages.  The DOM is also related to the structure and content of webpages, but you'll learn more about that later.  

## Goals   

You are going to learn web development by actually building your own website.  By the time you complete all of the tutorials in the *DevTools for Beginners* series, your finished site will look like **Figure 1**.  

> ##### Figure 1  
> The finished site  
> ![The finished site][ImageHtmlFinished]  

By the end of this tutorial, you will understand:  

*   How HTML and the DOM create the content that you see on webpages.  
*   How Microsoft Edge DevTools can help you experiment with HTML and DOM changes.  
*   The difference between HTML and the DOM.  

You'll also have a real website!  You can use this site to host your resume or blog.  

## Prerequisites   

Before attempting this tutorial, complete the following prerequisites:  

*   If you're unfamiliar with HTML, read [Getting Started with HTML][MDNGettingStartedHtml].  
*   Download the [Microsoft Edge][MicrosoftEdgeInsider] web browser.  This tutorial uses a set of web development tools, called the Microsoft Edge DevTools, that are built into Microsoft Edge.  

## Set up your code   

You're going to build your site in an online code editor called Glitch.  

1.  Open the [source code][GlitchAlluringShockIndex].  This tab will be called the **editor tab** throughout this tutorial.  
    > ##### Figure 2  
    > The editor tab  
    > ![The editor tab][ImageHtmlSetup1]  

1.  Click **alluring-shock**.  The Project Options menu opens in the top-left corner.  
    
    > #### Figure 3  
    > The Project Options menu  
    > ![The Project Options menu][ImageHtmlSetup2]  
    
1.  Click **Remix Project**.  Glitch creates a copy of the project that you can edit and randomly generates a new name for the project.  The content is the same as before.  
    
    > ##### Figure 4  
    > The remixed project  
    > ![The remixed project][ImageHtmlSetup3]  
    
1.  If you plan on completing the next tutorial in this series, click **Sign In** and sign in to Glitch with your GitHub or Facebook account.  If you don't sign in you will lose the ability to edit this project once you close the editing tab.  
1.  Click **Show** and select **In a New Window**.  A new tab opens, showing you the live page.  This tab will be called the **live tab** throughout this tutorial.  
    
    > ##### Figure 5  
    > The live tab  
    > ![The live tab][ImageHtmlSetup4]  
    
## Add content   

Your site is pretty empty.  Follow the steps below to add some content to it!  

1.  In the **editor tab**, replace `<!-- You're "About Me" will go here.  -->` with `<h1>About Me</h1>`.  
    
    ```html
    ...
        ...
        <body>
            <p> Your site!</p>
            <main>
                <h1>About Me</h1>
            </main>
            ...
        ...
    ...
    ```  
    
    > ##### Figure 6  
    > The new code is highlighted in the editor tab  
    > ![The new code is highlighted in the editor tab][ImageHtmlAdd1]  
    
1.  View your changes in the **live tab**.  The text `About Me` is visible on the page.  It's larger than the rest of the text, because the `<h1>` element represents a section heading.  Your web browser automatically styles headings in larger font sizes.  
    
    > ##### Figure 7  
    > The new heading is visible in the live tab  
    > ![The new heading is visible in the live tab][ImageHtmlAdd2]  
    
1.  Back in the **editor tab**, insert `<p>I am learning HTML.  Recent accomplishments:</p>` on the line below where you just put `<h1>About Me</h1>`.  
    
    ```html
    ...
        ...
        <body>
            <p> Your site!</p>
            <main>
                <h1>About Me</h1>
                <p>I am learning web development.  Recent accomplishments:</p>
            </main>
            ...
        ...
    ...
    ```  

    > ##### Figure 8  
    > The new code is highlighted in the editor tab  
    > ![The new code is highlighted in the editor tab][ImageHtmlAdd3]  
    
1.  View your change in the **live tab**.  
1.  Back in the **editor tab**, add a list of your accomplishments:  
    
    ```html
    ...
        ...
            ...
            <p>I am learning web development.  Recent accomplishments:</p>
            <ul>
                <li>Learned how to set up my code in Glitch.</li>
                <li>Added content to my HTML.</li>
                <li>TODO: Learn how to use Microsoft Edge DevTools to experiment with content changes.</li>
                <li>TODO: Learn the difference between HTML and the DOM.</li>
            </ul>
            ...
        ...
    ...
    ```  
    
    > ##### Figure 9  
    > The new code is highlighted in the editor tab  
    > ![The new code is highlighted in the editor tab][ImageHtmlAdd4]  
    
1.  Again, go back to the **live tab** to make sure that the new content is displaying correctly.  
    
    > ##### Figure 10  
    > The new list is visible in the live tab  
    > ![The new list is visible in the live tab][ImageHtmlAdd5]  
    
## Experiment with content changes in Microsoft Edge DevTools   

If you were developing a big page with a lot of HTML, you can imagine that it might be somewhat tedious to go back-and-forth between the editor tab and the live tab hundreds of times in order to see your changes, especially if you weren't sure what exactly to put on the page.  Microsoft Edge DevTools can help you experiment with content changes without ever leaving the live tab.  

### Learn the difference between HTML and the DOM   

Before you start editing your content from Microsoft Edge DevTools, it's helpful to understand the difference between HTML and the DOM.  The best way to learn is by example:  

1.  Go to the **live tab**.  At the bottom of your page you see the text `A new element!?!`.  
    
    > ###### Figure 11  
    > At the bottom of the page the text `A new element!?!` can be seen  
    > ![At the bottom of the page the text A new element!?! can be seen][ImageHtmlDom1]  
    
1.  Go back to the **editor tab** and try to find this text in `index.html`.  It's not there!  
    
    > ##### Figure 12  
    > The mystery text `A new element!?!` is nowhere to be found in `index.html`  
    > ![The mystery text A new element!?! is nowhere to be found in index.html][ImageHtmlDom2]  
    
1.  Go back to the **live tab**, right-click `A new element!?!`, and select **Inspect**.  
    
    > ##### Figure 13  
    > Inspecting some text  
    > ![Inspecting some text][ImageHtmlDom3]  
    
    DevTools opens up alongside your page.  `<div>A new element!?!</div>` is highlighted blue.  Although this structure in DevTools looks like your HTML, it is actually the **DOM Tree**.  
    
    > ##### Figure 14  
    > DevTools is open alongside the page  
    > ![DevTools is open alongside the page][ImageHtmlDom4]  
    
When your page loads, the browser takes your HTML to create the *initial* content of the page.  The DOM represents the *current* content of the page, which can change over time.  The mysterious `<div>A new element!?!</div>` content is added to your page because of the `<script src="new.js"></script>` tag at the bottom of your HTML.  This tag causes some JavaScript code to run.  You'll learn more about JavaScript in a later tutorial, but for now think of it as a programming language that can change the content of your page.  In this particular case, JavaScript code adds `<div>A new element!?!</div>` to your page.  That is why this mystery text is visible on your live page, but not in your HTML.  

### Edit the DOM   

If you want to quickly experiment with content changes without ever leaving the live tab,
try DevTools.  

1.  In DevTools, right-click `Your site!` and select **Edit as HTML**.  

    > ##### Figure 15  
    > Editing the node as HTML  
    > ![Editing the node as HTML][ImageHtmlEdit1]  
    
1.  Replace `<p>Your site!</p>` with the code below.  
    
    ```html
    ...
        ...
            ...
            <header>
                <p><b>Welcome to my site!</b></p>
                <button>Download my resume</button>
            </header>
            ...
        ...
    ...
    ```  
    
    > ##### Figure 16  
    > Editing the node as HTML  
    > ![Editing the node as HTML][ImageHtmlEdit2]  
    
1.  Press `Control`+`Enter` \(Windows\) or `Command`+`Enter` \(macOS\) to save your changes, or click outside of the box.  Your changes automatically show up in the live view of your page.  The text `Your site!` has been replaced with the new content.  
    
    > ##### Figure 17  
    > The new content shows up immediately on the page  
    > ![The new content shows up immediately on the page][ImageHtmlEdit3]  
    
This workflow is only good for experimenting with content changes.  If you reload the page or close the tab, your changes will be gone forever.  If you're using this workflow and you want to save your changes, you need to manually copy those changes over to your HTML.  The next couple of sections show you some more ways that you can change content from the DOM Tree.  

## Reorder nodes   

You can also change the order of DOM nodes.  For example, on your web page the navigation menu is near the bottom.  To move it to the top:  

1.  Find the `<nav>` node in the **DOM Tree** of DevTools.  
    
    > ##### Figure 18  
    > The nav node is highlighted blue in DevTools  
    > ![The nav node is highlighted blue in DevTools][ImageHtmlReorder1]  
    
1.  Drag the `<nav>` node to the top, so that it's the first child below the `<body>` node.  
    > ##### Figure 19  
    > Dragging the nav node to the top  
    > ![Dragging the nav node to the top][ImageHtmlReorder2]  
    
    The `<nav>` node is now displaying at the top of your page.  
    
    > ##### Figure 20  
    > The nav node is at the top of the page  
    > ![The nav node is at the top of the page][ImageHtmlReorder3]  
    
### Delete a node   

You can also remove nodes from the DOM Tree.  

1.  In the **DOM Tree**, click `<div>A new element!?!</div>`.  DevTools highlights the node blue.  
    
    > ##### Figure 21  
    > Selecting the node to be deleted  
    > ![Selecting the node to be deleted][ImageHtmlDelete1]  
    
1.  Press the `Delete` key on your keyboard.  The `<div>A new element!?!</div>` node is removed from your DOM Tree.  
    
    > ##### Figure 22  
    > The node has been deleted  
    > ![The node has been deleted][ImageHtmlDelete2]  
    
## Copy your changes   

You're almost done.  You've made a few changes to your page in DevTools, but they're not yet saved to your source code.  

1.  Refresh your **live tab**.  The changes that you made in the DOM Tree disappear.  In particular, the text `Your site!` returns to the top of the page, and the text `A new element!?!` returns to the bottom.  
    
    > ##### Figure 23  
    > The changes that you've made are gone  
    > ![The changes that you've made are gone][ImageHtmlCopy1]  

1.  Copy the code below.  
    
    ```html
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>
        <body>
            <header>
                <p>Welcome to my site!</p>
            </header>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/contact.html">Contact</a></li>
                </ul>
            </nav>
            <main>
                <h1>About Me</h1>
                <p>I am learning web development.  Recent accomplishments:</p>
                <ul>
                    <li>Learned how to set up my code in Glitch.</li>
                    <li>Added content to my HTML.</li>
                    <li>Learned how to use Microsoft Edge DevTools to experiment with content changes.</li>
                    <li>Learned the difference between HTML and the DOM.</li>
                </ul>
            </main>
        </body>
    </html>
    ```  
      
1.  Go back to the **editor tab** and replace the contents of your `index.html` file with the code that you just copied.  
    
    > ##### Figure 24  
    > How your `index.html` file should look  
    > ![How your index.html file should look][ImageHtmlCopy2]  
    
## Next steps   

*   Complete the next tutorial in this series, [Get Started with CSS][DevToolsBeginnersCss], to learn how to style your page and experiment with style changes in Microsoft Edge DevTools.  
*   Read [Introduction to the DOM][MDNIntroductionDom] to learn more about the DOM.  
*   Check out a course like [Introduction to Web Development][CourseraIntroductionToWebDevelopment] to get more hands-on web development experience.  

<!--- image links --->  

[ImageHtmlFinished]: /microsoft-edge/devtools-guide-chromium/media/beginners-html-finished.msft.png "Figure 1: The finished site"  
[ImageHtmlSetup1]: /microsoft-edge/devtools-guide-chromium/media/beginners-html-setup1.msft.png "Figure 2: The editor tab"  
[ImageHtmlSetup2]: /microsoft-edge/devtools-guide-chromium/media/beginners-html-setup2.msft.png "Figure 3: The Project Options menu"  
[ImageHtmlSetup3]: /microsoft-edge/devtools-guide-chromium/media/beginners-html-setup3.msft.png "Figure 4: The remixed project"  
[ImageHtmlSetup4]: /microsoft-edge/devtools-guide-chromium/media/beginners-html-setup4.msft.png "Figure 5: The live tab"  
[ImageHtmlAdd1]: /microsoft-edge/devtools-guide-chromium/media/beginners-html-add1.msft.png "Figure 6: The new code is highlighted in the editor tab"  
[ImageHtmlAdd2]: /microsoft-edge/devtools-guide-chromium/media/beginners-html-add2.msft.png "Figure 7: The new heading is visible in the live tab"  
[ImageHtmlAdd3]: /microsoft-edge/devtools-guide-chromium/media/beginners-html-add3.msft.png "Figure 8: The new code is highlighted in the editor tab"  
[ImageHtmlAdd4]: /microsoft-edge/devtools-guide-chromium/media/beginners-html-add4.msft.png "Figure 9: The new code is highlighted in the editor tab"  
[ImageHtmlAdd5]: /microsoft-edge/devtools-guide-chromium/media/beginners-html-add5.msft.png "Figure 10: The new list is visible in the live tab"  
[ImageHtmlDom1]: /microsoft-edge/devtools-guide-chromium/media/beginners-html-dom1.msft.png "Figure 11: At the bottom of the page the text A new element!?! can be seen"  
[ImageHtmlDom2]: /microsoft-edge/devtools-guide-chromium/media/beginners-html-dom2.msft.png "Figure 12: The mystery text A new element!?! is nowhere to be found in index.html"  
[ImageHtmlDom3]: /microsoft-edge/devtools-guide-chromium/media/beginners-html-dom3.msft.png "Figure 13: Inspecting some text"  
[ImageHtmlDom4]: /microsoft-edge/devtools-guide-chromium/media/beginners-html-dom4.msft.png "Figure 14: DevTools is open alongside the page"  
[ImageHtmlEdit1]: /microsoft-edge/devtools-guide-chromium/media/beginners-html-edit1.msft.png "Figure 15: Editing the node as HTML"  
[ImageHtmlEdit2]: /microsoft-edge/devtools-guide-chromium/media/beginners-html-edit2.msft.png "Figure 16: Editing the node as HTML"  
[ImageHtmlEdit3]: /microsoft-edge/devtools-guide-chromium/media/beginners-html-edit3.msft.png "Figure 17: The new content shows up immediately on the page"  
[ImageHtmlReorder1]: /microsoft-edge/devtools-guide-chromium/media/beginners-html-reorder1.msft.png "Figure 18: The nav node is highlighted blue in DevTools"  
[ImageHtmlReorder2]: /microsoft-edge/devtools-guide-chromium/media/beginners-html-reorder2.msft.png "Figure 19: Dragging the nav node to the top"  
[ImageHtmlReorder3]: /microsoft-edge/devtools-guide-chromium/media/beginners-html-reorder3.msft.png "Figure 20: The nav node is at the top of the page"  
[ImageHtmlDelete1]: /microsoft-edge/devtools-guide-chromium/media/beginners-html-delete1.msft.png "Figure 21: Selecting the node to be deleted"  
[ImageHtmlDelete2]: /microsoft-edge/devtools-guide-chromium/media/beginners-html-delete2.msft.png "Figure 22: The node has been deleted"  
[ImageHtmlCopy1]: /microsoft-edge/devtools-guide-chromium/media/beginners-html-copy1.msft.png "Figure 23: The changes that you've made are gone"  
[ImageHtmlCopy2]: /microsoft-edge/devtools-guide-chromium/media/beginners-html-copy2.msft.png "Figure 24: How your index.html file should look"  

<!--- links --->  

[DevToolsBeginnersCss]: /microsoft-edge/devtools-guide-chromium/beginners/css "DevTools For Beginners: Get Started with CSS"  

[MicrosoftEdgeInsider]: https://www.microsoftedgeinsider.com "Microsoft Edge Insider"  

[CourseraIntroductionToWebDevelopment]: https://www.coursera.org/learn/web-development "Introduction to Web Development | Coursera"  

[GlitchAlluringShockIndex]: https://glitch.com/edit/#!/alluring-shock?path=index.html "index.html - alluring-shock | Glitch"  

[MDNGettingStartedHtml]: https://developer.mozilla.org/docs/Learn/HTML/Introduction_to_HTML/Getting_started "Getting started with HTML | MDN"  
[MDNIntroductionDom]: https://developer.mozilla.org/docs/Web/API/Document_Object_Model/Introduction "Introduction to the DOM | MDN"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/beginners/html) and is authored by [Katherine Jackson][KatherineJackson] \(Technical Writer Intern, Chrome DevTools\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
[KatherineJackson]: https://developers.google.com/web/resources/contributors/katjackson  
