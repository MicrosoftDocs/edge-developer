---
title: 
author: 
ms.author: 
ms.date: 08/27/2019
ms.topic: 
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---







# Sources Panel Overview 



Use the Microsoft Edge DevTools **Sources** panel to:

* [View files](#view-files).
* [Edit CSS and JavaScript](#edit-css-and-javascript).
* [Create and save **Snippets** of JavaScript](#create-and-save-snippets-of-javascript), which you can run on any page.
  **Snippets** are similar to bookmarklets.
* [Debug JavaScript](#debug-javascript).
* [Set up a Workspace](#set-up-a-workspace), so that changes you make in DevTools get saved to the code on
  your file system.

## View files 

Use the **Page** pane to view all of the resources that the page has loaded.

<figure>
  <img src="images/sources-page-pane.msft.png"
       alt="The Page pane"/>
  <figcaption>
    <b>Figure 1</b>. The <b>Page</b> pane
  </figcaption>
</figure>

How the **Page** pane is organized:

* The top-level, such as `top` in <b>Figure 1</b>, represents an [HTML frame][frame].
  You'll find `top` on every page that you visit. `top` represents the main document
  frame.
* The second-level, such as `docs.microsoft.com` in <b>Figure 1</b>, represents an
  [origin][origin].
* The third-level, fourth-level, and so on, represent directories and resources that
  were loaded from that origin. For example, in <b>Figure 1</b> the full path to the
  resource `devtools-guide-chromium` is
  `docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium`

[frame]: https://www.w3.org/TR/html401/present/frames.html
[origin]: https://html.spec.whatwg.org/multipage/origin.html#origin

Click a file in the **Page** pane to view its contents in the **Editor** pane. You
can view any type of file. For images, you see a preview of the image.

<figure>
  <img src="images/sources-editor-pane.msft.png"
       alt="Viewing a file in the Editor pane"/>
  <figcaption>
    <b>Figure 2</b>. Viewing the contents of <code>jquery-bundle.js</code> in the <b>Editor</b>
    pane
  </figcaption>
</figure>

## Edit CSS and JavaScript 

Use the **Editor** pane to edit CSS and JavaScript.  DevTools updates the
page to run your new code. For example, if you edit the `background-color` of an element, you'll
see that change take effect immediately.

<figure>
  <img src="images/edit-css.msft.png"
       alt="Editing CSS in the Editor pane"/>
  <figcaption>
    <b>Figure 3</b>. Editing CSS in the <b>Editor</b> pane to change the background color of an
    element from blue to red
  </figcaption>
</figure>

CSS changes take effect immediately, no save needed. For JavaScript changes to take effect, press
<kbd>Command</kbd>+<kbd>S</kbd> (Mac) or <kbd>Control</kbd>+<kbd>S</kbd> (Windows, Linux).
DevTools doesn't re-run a script, so the only JavaScript changes that take effect are those that
you make inside of functions. <!-- For example, in <b>Figure 4</b> note how `console.log('A')` doesn't
run, whereas `console.log('B')` does. If DevTools re-ran the entire script after making the
change, then the text `A` would have been logged to the **Console**. -->

<!-- <figure>
  <img src="images/edit-js.msft.png"
       alt="Editing JavaScript in the Editor pane"/>
  <figcaption>
    <b>Figure 4</b>. Editing JavaScript in the <b>Editor</b> pane
  </figcaption>
</figure> -->

DevTools erases your CSS and JavaScript changes when you reload the page. See
[Set up a Workspace](#set-up-a-workspace) to learn how to save the changes to your file
system.

## Create, save, and run Snippets 

Snippets are scripts which you can run on any page. Imagine that you repeatedly type out the
following code in the **Console**, in order to insert the jQuery library into a page, so that
you can run jQuery commands from the **Console**:

    let script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.2.1.min.js';
    script.crossOrigin = 'anonymous';
    script.integrity = 'sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=';
    document.head.appendChild(script);

Instead, you can save this code in a **Snippet** and run it with a couple of button clicks,
any time you need it. DevTools saves the **Snippet** to your file system.

<figure>
  <img src="images/snippet.msft.png"
       alt="A Snippet that inserts the jQuery library into a page."/>
  <figcaption>
    <b>Figure 5</b>. A <b>Snippet</b> that inserts the jQuery library into a page
  </figcaption>
</figure>

To run a **Snippet**:

* Open the file via the **Snippets** pane, and click **Run** ![The Run button][run].
* Open the [**Command Menu**][CM], delete the `>` character, type `!`, type the name of your
  **Snippet**, then press <kbd>Enter</kbd>.

[CM]: /microsoft-edge/devtools-guide-chromium/ui#command-menu
[run]: images/run-snippet.msft.png

See [Run Snippets Of Code From Any Page][snip] to learn more.

[snip]: /microsoft-edge/devtools-guide-chromium/snippets

## Debug JavaScript 

Rather than using `console.log()` to infer where your JavaScript is going wrong, consider using
the Microsoft Edge DevTools debugging tools, instead. The general idea is to set a breakpoint, which
is an intentional stopping place in your code, and then step through your code's execution,
one line at a time. As you step through the code, you can view and change the values of all
currently-defined properties and variables, run JavaScript in the **Console**, and more.

See [Get Started With Debugging JavaScript](/microsoft-edge/devtools-guide-chromium/javascript/) to learn the
basics of debugging in DevTools.

<figure>
  <img src="images/debugging.msft.png"
       alt="Debugging JavaScript"/>
  <figcaption>
    <b>Figure 6</b>. Debugging JavaScript
  </figcaption>
</figure>

## Set up a Workspace 

By default, when you edit a file in the **Sources** panel, those changes are lost when you
reload the page. **Workspaces** enable you to save the changes that you make in DevTools to
your file system. Essentially, this lets you use DevTools as your code editor.

See [Edit Files With Workspaces][WS] to get started.

[WS]: /microsoft-edge/devtools-guide-chromium/workspaces/

 


