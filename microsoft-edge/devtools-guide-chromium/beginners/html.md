---
title: Get started with HTML and the DOM
description: Get started with HTML and the DOM.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 08/06/2021
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
# Get started with HTML and the DOM

This is the first in a series of tutorials that teach you the basics of web development. Learn about a set of web developer tools, named Microsoft Edge DevTools, that will increase your productivity.

This tutorial describes HTML and the [Document Object Model](https://developer.mozilla.org/docs/Web/API/Document_Object_Model) (DOM). HTML is one of the core technologies of web development. It is the language that controls the structure and content of webpages. The DOM is also related to the structure and content of webpages, which we learn more about later.


<!-- ====================================================================== -->
## Goals

You're going to learn web development by building a website.  By the time you complete all of the tutorials in the **DevTools for Beginners** series, your finished site will look like the following figure.

![The finished site.](media/beginners-html-finished.msft.png)

By the end of this tutorial, you'll understand the following concepts:

*  How HTML and the DOM create the content displayed on webpages.
*  How Microsoft Edge DevTools can help you experiment with HTML and DOM changes.
*  The difference between HTML and the DOM.

You'll also have a working website.  You can use the site to host your resume or blog.


<!-- ====================================================================== -->
## Prerequisites

Before doing this tutorial:

*  If you are unfamiliar with HTML, read [Getting Started with HTML](https://developer.mozilla.org/docs/Learn/HTML/Introduction_to_HTML/Getting_started).

*  Download the [Microsoft Edge](https://www.microsoftedgeinsider.com) web browser.  This tutorial uses a set of web development tools, called the Microsoft Edge DevTools, that are built into Microsoft Edge.


<!-- ====================================================================== -->
## Set up your code

You'll build a site in the Glitch online code editor.

1. Open the [source code](https://glitch.com/edit/#!/alluring-shock?path=index.html). This tab is called the **editor tab** throughout this tutorial.

   ![The editor tab.](media/beginners-html-setup1.msft.png)

1. Select **alluring-shock**. The **Project Options** menu opens.

   ![The Project Options menu.](media/beginners-html-setup2.msft.png)

1. Select **Remix Project**. Glitch creates a copy of the project that you can edit and randomly generates a new name for the project. The content is the same as before.

   ![The remixed project.](media/beginners-html-setup3.msft.png)

1. If you plan to complete the next tutorial in this series, select **Sign In** to Glitch using your Facebook, GitHub, or Google account; or email yourself a magic link. If you don't sign in to an account, you can't edit the project after closing the editor tab.

1. Select **Show** > **In a New Window**.  A new tab opens, showing the live page.  This tab is called the **live tab** throughout this tutorial.

   ![The live tab.](media/beginners-html-setup4.msft.png)


<!-- ====================================================================== -->
## Add content

Your site needs more information.  To add some content:

1. In the **editor tab**, replace `<!-- You're "About Me" will go here.  -->` with `<h1>About Me</h1>`.

    ```html
   <body>
      <p> Your site!</p>
            <main>
               <h1>About Me</h1>
            </main>
    ```

   ![The new code is highlighted in the editor tab.](media/beginners-html-add1.msft.png)

1. View your changes in the **live tab**. The text `About Me` is visible on the page. The text is larger than the surrounding text because the `<h1>` element represents a Heading 1. Your web browser automatically styles headings in larger font sizes.

   ![The new heading is visible in the live tab.](media/beginners-html-add2.msft.png)

1. Back in the **editor tab**, insert `<p>I am learning web development. Recent accomplishments:</p>` on the line below  `<h1>About Me</h1>`.

    ```html
   <body>
      <p> Your site!</p>
            <main>
               <h1>About Me</h1>
               <p>I am learning web development. Recent accomplishments:</p>
            </main>
    ```

   ![The updated code is highlighted in the editor tab.](media/beginners-html-add3.msft.png)

1. View your change in the **live tab**.

1. Back in the **editor tab**, add a list of your accomplishments using the following code.

   ```html
   <p>I am learning web development.  Recent accomplishments:</p>
      <ul>
         <li>Learned how to set up my code in Glitch.</li>
         <li>Added content to my HTML.</li>
         <li>TODO: Learn how to use Microsoft Edge DevTools to experiment with content changes.</li>
         <li>TODO: Learn the difference between HTML and the DOM.</li>
      </ul>
   ```

   ![The updated code is also highlighted in the editor tab.](media/beginners-html-add4.msft.png)

1. View the **live tab** to make sure that the new content is displayed correctly.

   ![The new list is visible in the live tab.](media/beginners-html-add5.msft.png)


<!-- ====================================================================== -->
## Experiment with content changes in Microsoft Edge DevTools

If you are developing a page with a lot of HTML, it becomes tedious to go back-and-forth between the editor tab and the live tab to see your changes. Microsoft Edge DevTools helps you experiment with content changes without ever leaving the **live tab**.

### Learn the difference between HTML and the DOM

Before editing content from Microsoft Edge DevTools, let's understand the difference between HTML and the DOM. Proceed with the following steps to learn from an example.

1. Navigate to the **live tab**. At the bottom of your page, the text `A new element!?!` is displayed.

    <!--
      ![At the bottom of the page, the text 'A new element!?!' is displayed.](media/beginners-html-dom1.msft.png)
    -->

1. Open the **editor tab** and try to find the text in `index.html`. The text doesn't appear in this view.

    <!--
      ![The mystery text 'A new element!?!' isn't found in index.html.](media/beginners-html-dom2.msft.png)
    -->

1. Open the **live tab**, right-click `A new element!?!`, and then select **Inspect**.

   ![Inspecting some text.](media/beginners-html-dom3.msft.png)

   DevTools opens alongside your page.  `<div>A new element!?!</div>` is highlighted.  Although this structure in DevTools looks like HTML, it's actually the **DOM Tree**.

   ![DevTools is open alongside the page.](media/beginners-html-dom4.msft.png)

When your page loads, the browser uses the HTML to create the initial content of the page.  The DOM represents the current content of the page, which can change over time.

The `<div>A new element!?!</div>` content is added to your page because of the `<script src="new.js"></script>` tag at the bottom of your HTML.  This tag causes some JavaScript code to run. Learn more about JavaScript in a [later tutorial](../javascript/index.md).

For now, think of it as a scripting language that can change the content of your page.  In this case, JavaScript code adds `<div>A new element!?!</div>` to your page. That is why this text is displayed in the **live** tab, but not in the HTML.

### Edit the DOM

To quickly experiment with content changes without leaving the live tab:

1. In DevTools, right-click `Your site!`, and then select **Edit as HTML**.

1. Replace `<p>Your site!</p>` with the following code.

   ```html
   <header>
      <p><b>Welcome to my site!</b></p>
      <button>Download my resume</button>
   </header>
   ```

   ![Updating the node as HTML.](media/beginners-html-edit2.msft.png)

1. Press `Ctrl`+`Enter` (Windows, Linux) or `Command`+`Enter` (macOS) to save your changes, or select outside the box. Your changes automatically show up in the live view of your page. The text `Your site!` has been replaced with the new content.

   ![The new content shows up immediately on the page.](media/beginners-html-edit3.msft.png)

This workflow is only suitable for experimenting with content changes.  If you refresh the page or close the tab, your changes are lost.  If you want to save your changes, manually copy the code to your HTML file. The next couple of sections show you some more ways to change content from the DOM Tree.


<!-- ====================================================================== -->
## Reorder nodes

You can also change the order of DOM nodes. For example, on your web page the navigation menu is near the bottom.

Move the navigation menu to the top:

1. Find the `<nav>` node in the **DOM Tree** of DevTools.

   ![The nav node is highlighted in DevTools.](media/beginners-html-reorder1.msft.png)

1. Drag the `<nav>` node to the top, so that the node is the first child after the `<body>` node.

   ![The nav node is at the top of the page.](media/beginners-html-reorder3.msft.png)

### Delete a node

Remove a node from the DOM Tree:

1. In the **DOM Tree**, select `<div>A new element!?!</div>`. DevTools highlights the node.

1. Press `Delete`.  The `<div>A new element!?!</div>` node is removed from the DOM Tree.

   ![The node has been deleted.](media/beginners-html-delete2.msft.png)


<!-- ====================================================================== -->
## Copy your changes

You're almost done. You made a few changes to the page in DevTools, but they're not saved to your source code.

1. Refresh the **live tab**. The changes that you made in the DOM Tree disappear. In particular, the text `Your site!` returns to the top of the page, and the text `A new element!?!` returns to the bottom.

   ![The changes that you made are gone.](media/beginners-html-copy1.msft.png)

1. Copy the following code:

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
    
1. Go back to the **editor tab** and replace the content of your `index.html` file with the code that you copied.

   ![How your index.html file should look.](media/beginners-html-copy2.msft.png)


<!-- ====================================================================== -->
## Next steps

*  Complete the next tutorial in this series, [Get started with CSS](css.md), to learn how to style your page and experiment with style changes in Microsoft Edge DevTools.

*  Read [Introduction to the DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model/Introduction) to learn more about the DOM.

*  Check out a course such as [Introduction to Web Development](https://www.coursera.org/learn/web-development), to gain additional hands-on experience with web development.


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page was found at `https://developers.google.com/web/tools/chrome-devtools/beginners/html` and was authored by [Katherine Jackson](https://developers.google.com/web/resources/contributors#katherine-jackson) (Technical Writer Intern, Chrome DevTools).

[![Creative Commons License.](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
