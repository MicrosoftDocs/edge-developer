---
description: Get Started with HTML and the DOM
title: "DevTools for beginners: Get started with HTML and the DOM"
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 02/12/2021
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

This is the first in a series of tutorials that teach you the basics of web development.  Learn about a set of web developer tools, named Microsoft Edge DevTools, that may increase your productivity.  

In this particular tutorial, you learn about HTML and the DOM.  HTML is one of the core technologies of web development.  It is the language that controls the structure and content of webpages.  The DOM is also related to the structure and content of webpages, learn more about that later.  

## Goals  

You are going to learn web development by actually building your own website.  By the time you complete all of the tutorials in the **DevTools for Beginners** series, your finished site may look like the following figure.  

:::image type="complex" source="../media/beginners-html-finished.msft.png" alt-text="The finished site" lightbox="../media/beginners-html-finished.msft.png":::
   The finished site  
:::image-end:::  

By the end of this tutorial, you should understand the following topics.  

*   How HTML and the DOM create the content that are displayed on webpages.  
*   How Microsoft Edge DevTools may help you experiment with HTML and DOM changes.  
*   The difference between HTML and the DOM.  

You also have a real website.  You may use the site to host your resume or blog.  

## Prerequisites  

Before attempting this tutorial, complete the following prerequisites:  

*   If you are unfamiliar with HTML, read [Getting Started with HTML][MDNGettingStartedHtml].  
*   Download the [Microsoft Edge][MicrosoftEdgeInsider] web browser.  This tutorial uses a set of web development tools, called the Microsoft Edge DevTools, that are built into Microsoft Edge.  

## Set up your code  

You are going to build your site in an online code editor called Glitch.  

1.  Open the [source code][GlitchAlluringShockIndex].  This tab is called the **editor tab** throughout this tutorial.  
    
    :::image type="complex" source="../media/beginners-html-setup1.msft.png" alt-text="The editor tab" lightbox="../media/beginners-html-setup1.msft.png":::
       The editor tab  
    :::image-end:::  
    
1.  Choose **alluring-shock**.  The Project Options menu opens in the top-left corner.  
    
    :::image type="complex" source="../media/beginners-html-setup2.msft.png" alt-text="The Project Options menu" lightbox="../media/beginners-html-setup2.msft.png":::
       The Project Options menu  
    :::image-end:::  
    
1.  Choose **Remix Project**.  Glitch creates a copy of the project that you may edit and randomly generates a new name for the project.  The content is the same as before.  
    
    :::image type="complex" source="../media/beginners-html-setup3.msft.png" alt-text="The remixed project" lightbox="../media/beginners-html-setup3.msft.png":::
       The remixed project  
    :::image-end:::  
    
1.  If you plan on completing the next tutorial in this series, choose **Sign In** and sign into Glitch with your GitHub or Facebook account.  If you choose to not sign into your account, you lose the ability to edit the project after you close the editing tab.  
1.  Choose **Show** and choose **In a New Window**.  A new tab opens, showing you the live page.  This tab is called the **live tab** throughout this tutorial.  
    
    :::image type="complex" source="../media/beginners-html-setup4.msft.png" alt-text="The live tab" lightbox="../media/beginners-html-setup4.msft.png":::
       The live tab  
    :::image-end:::  
    
## Add content  

Your site is pretty empty.  Follow the steps below to add some content to it.  

1.  In the **editor tab**, replace `<!-- You're "About Me" will go here.  -->` with `<h1>About Me</h1>`.  
    
    :::row:::
       :::column span="":::
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
       :::column-end:::
       :::column span="":::
          :::image type="complex" source="../media/beginners-html-add1.msft.png" alt-text="The new code is highlighted in the editor tab" lightbox="../media/beginners-html-add1.msft.png":::
             The new code is highlighted in the editor tab  
          :::image-end:::  
       :::column-end:::
    :::row-end:::
    
1.  View your changes in the **live tab**.  The text `About Me` is visible on the page.  The text larger than the surrounding text, because the `<h1>` element represents a section heading.  Your web browser automatically styles headings in larger font sizes.  
    
    :::image type="complex" source="../media/beginners-html-add2.msft.png" alt-text="The new heading is visible in the live tab" lightbox="../media/beginners-html-add2.msft.png":::
       The new heading is visible in the live tab  
    :::image-end:::  
    
1.  Back in the **editor tab**, insert `<p>I am learning HTML.  Recent accomplishments:</p>` on the line below where you just put `<h1>About Me</h1>`.  
    
    :::row:::
       :::column span="":::
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
       :::column-end:::
       :::column span="":::
          :::image type="complex" source="../media/beginners-html-add3.msft.png" alt-text="The updated code is highlighted in the editor tab" lightbox="../media/beginners-html-add3.msft.png":::
             The updated code is highlighted in the editor tab  
          :::image-end:::  
       :::column-end:::
    :::row-end:::
    
1.  View your change in the **live tab**.  
1.  Back in the **editor tab**, add a list of your accomplishments:  
    
    :::row:::
       :::column span="":::
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
       :::column-end:::
       :::column span="":::
          :::image type="complex" source="../media/beginners-html-add4.msft.png" alt-text="The updated code is also highlighted in the editor tab" lightbox="../media/beginners-html-add4.msft.png":::
             The updated code is also highlighted in the editor tab  
          :::image-end:::  
       :::column-end:::
    :::row-end:::  
    
1.  Again, go back to the **live tab** to make sure that the new content is displaying correctly.  
    
    :::image type="complex" source="../media/beginners-html-add5.msft.png" alt-text="The new list is visible in the live tab" lightbox="../media/beginners-html-add5.msft.png":::
       The new list is visible in the live tab  
    :::image-end:::  
    
## Experiment with content changes in Microsoft Edge DevTools  

If you were developing a big page with a lot of HTML, it is somewhat tedious to go back-and-forth between the editor tab and the live tab hundreds of times in order to display your changes, especially if you are unsure what exactly to put on the page.  Microsoft Edge DevTools helps you experiment with content changes without ever leaving the **live tab**.  

### Learn the difference between HTML and the DOM  

Before you start editing your content from Microsoft Edge DevTools, you should understand the difference between HTML and the DOM.  The best way to learn is by example:  

1.  Navigate to the **live tab**.  At the bottom of your page, the text `A new element!?!` is displayed.  
    
    :::image type="complex" source="../media/beginners-html-dom1.msft.png" alt-text="At the bottom of the page the text A new element!?! is displayed" lightbox="../media/beginners-html-dom1.msft.png":::
       At the bottom of the page the text `A new element!?!` is displayed  
    :::image-end:::  
    
1.  Go back to the **editor tab** and try to find the text in `index.html`.  The text is not there.  
    
    :::image type="complex" source="../media/beginners-html-dom2.msft.png" alt-text="The mystery text A new element!?! is nowhere to be found in index.html" lightbox="../media/beginners-html-dom2.msft.png":::
       The mystery text `A new element!?!` is nowhere to be found in `index.html`  
    :::image-end:::  
    
1.  Go back to the **live tab**, hover on `A new element!?!`, open the contextual menu \(right-click\), and choose **Inspect**.  
    
    :::image type="complex" source="../media/beginners-html-dom3.msft.png" alt-text="Inspecting some text" lightbox="../media/beginners-html-dom3.msft.png":::
       Inspecting some text  
    :::image-end:::  
    
    DevTools opens up alongside your page.  `<div>A new element!?!</div>` is highlighted blue.  Although this structure in DevTools looks like your HTML, it is actually the **DOM Tree**.  
    
    :::image type="complex" source="../media/beginners-html-dom4.msft.png" alt-text="DevTools is open alongside the page" lightbox="../media/beginners-html-dom4.msft.png":::
       DevTools is open alongside the page  
    :::image-end:::  
    
When your page loads, the browser takes your HTML to create the *initial* content of the page.  The DOM represents the *current* content of the page, which may change over time.  The mysterious `<div>A new element!?!</div>` content is added to your page because of the `<script src="new.js"></script>` tag at the bottom of your HTML.  This tag causes some JavaScript code to run.  Learn more about JavaScript in a later tutorial, but for now think of it as a programming language that may change the content of your page.  In this particular case, JavaScript code adds `<div>A new element!?!</div>` to your page.  That is why this mystery text is visible on your live page, but not in your HTML.  

### Edit the DOM  

If you want to quickly experiment with content changes without ever leaving the live tab,
try DevTools.  

1.  In DevTools, hover on `Your site!`, open the contextual menu \(right-click\), and choose **Edit as HTML**.  
    
    :::image type="complex" source="../media/beginners-html-edit1.msft.png" alt-text="Editing the node as HTML" lightbox="../media/beginners-html-edit1.msft.png":::
       Editing the node as HTML  
    :::image-end:::  
    
1.  Replace `<p>Your site!</p>` with the code below.  
    
    :::row:::
       :::column span="":::
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
       :::column-end:::
       :::column span="":::
          :::image type="complex" source="../media/beginners-html-edit2.msft.png" alt-text="Updating the node as HTML" lightbox="../media/beginners-html-edit2.msft.png":::
             Updating the node as HTML  
          :::image-end:::  
       :::column-end:::
    :::row-end:::  
    
1.  Select `Control`+`Enter` \(Windows, Linux\) or `Command`+`Enter` \(macOS\) to save your changes, or choose outside of the box.  Your changes automatically show up in the live view of your page.  The text `Your site!` has been replaced with the new content.  
    
    :::image type="complex" source="../media/beginners-html-edit3.msft.png" alt-text="The new content shows up immediately on the page" lightbox="../media/beginners-html-edit3.msft.png":::
       The new content shows up immediately on the page  
    :::image-end:::  
    
This workflow is only good for experimenting with content changes.  If you refresh the page or close the tab, your changes are gone forever.  If you're using this workflow and you want to save your changes, you need to manually copy those changes over to your HTML.  The next couple of sections show you some more ways that you may change content from the DOM Tree.  

## Reorder nodes  

You may also change the order of DOM nodes.  For example, on your web page the navigation menu is near the bottom.  To move it to the top:  

1.  Find the `<nav>` node in the **DOM Tree** of DevTools.  
    
    :::image type="complex" source="../media/beginners-html-reorder1.msft.png" alt-text="The nav node is highlighted blue in DevTools" lightbox="../media/beginners-html-reorder1.msft.png":::
       The nav node is highlighted blue in DevTools  
    :::image-end:::  
    
1.  Drag the `<nav>` node to the top, so that the node is the first child of the `<body>` node.  
    
    :::row:::
       :::column span="":::
          :::image type="complex" source="../media/beginners-html-reorder2.msft.png" alt-text="Dragging the nav node to the top" lightbox="../media/beginners-html-reorder2.msft.png":::
             Dragging the nav node to the top  
          :::image-end:::  
       :::column-end:::
       :::column span="":::
          The `<nav>` node is now displaying at the top of your page.  
          
          :::image type="complex" source="../media/beginners-html-reorder3.msft.png" alt-text="The nav node is at the top of the page" lightbox="../media/beginners-html-reorder3.msft.png":::
             The nav node is at the top of the page  
          :::image-end:::  
       :::column-end:::
   :::row-end:::  
    
### Delete a node  

You may also remove nodes from the DOM Tree.  

1.  In the **DOM Tree**, choose `<div>A new element!?!</div>`.  DevTools highlights the node blue.  
    
    :::image type="complex" source="../media/beginners-html-delete1.msft.png" alt-text="Choose the node to be deleted" lightbox="../media/beginners-html-delete1.msft.png":::
       Choose the node to be deleted  
    :::image-end:::  
    
1.  Select the `Delete` key on your keyboard.  The `<div>A new element!?!</div>` node is removed from your DOM Tree.  
    
    :::image type="complex" source="../media/beginners-html-delete2.msft.png" alt-text="The node has been deleted" lightbox="../media/beginners-html-delete2.msft.png":::
       The node has been deleted  
    :::image-end:::  
    
## Copy your changes  

You're almost done.  You've made a few changes to your page in DevTools, but they're not yet saved to your source code.  

1.  Refresh your **live tab**.  The changes that you made in the DOM Tree disappear.  In particular, the text `Your site!` returns to the top of the page, and the text `A new element!?!` returns to the bottom.  
    
    :::image type="complex" source="../media/beginners-html-copy1.msft.png" alt-text="The changes that you've made are gone" lightbox="../media/beginners-html-copy1.msft.png":::
       The changes that you've made are gone  
    :::image-end:::  
    
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
    
    :::image type="complex" source="../media/beginners-html-copy2.msft.png" alt-text="How your index.html file should look" lightbox="../media/beginners-html-copy2.msft.png":::
       How your `index.html` file should look  
    :::image-end:::  
    
## Next steps  

*   Complete the next tutorial in this series, [Get Started with CSS][DevToolsBeginnersCss], to learn how to style your page and experiment with style changes in Microsoft Edge DevTools.  
*   Read [Introduction to the DOM][MDNIntroductionDom] to learn more about the DOM.  
*   Check out a course like [Introduction to Web Development][CourseraIntroductionToWebDevelopment] to get more hands-on web development experience.  

## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!--- links --->  

[DevToolsBeginnersCss]: ./css.md "DevTools For Beginners: Get Started with CSS | Microsoft Docs"  

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
