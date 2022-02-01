---
title: Sample code for DevTools
description: Sample code for Microsoft Edge DevTools.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 02/01/2022
---
# Sample code for DevTools

Most of the sample code that's used by the DevTools documentation is stored in the following GitHub repos.


<!-- ====================================================================== -->
## GitHub repos for samples

The [MicrosoftEdge/Demos](https://github.com/MicrosoftEdge/Demos) repo contains most of the demo pages or sample code that's used by the documentation.

The [MicrosoftEdge/DevToolsSamples](https://github.com/MicrosoftEdge/DevToolsSamples) repo contains several demos that are used by the documentation, including for **3D View**, **Inspect tool**, **Console**, and accessibility testing.

The demo pages below are stored in those repos, and are useful for exploring tools such as **Elements** and **Sources**.


<!-- ====================================================================== -->
## Demo webpage with accessibility issues

This demo webpage is useful for exploring various DevTools features, such as the **Elements** and **Sources** tools.

* Open the [Demo page with accessibility issues](https://microsoftedge.github.io/DevToolsSamples/a11y-testing/page-with-errors.html) in a new window or tab.  Right-click any item in the rendered webpage, and then select **Inspect**.  Or, press `F12`.  DevTools opens next to the demo webpage.

![The 'Demo page with accessibility issues'.](../media/demo-page-with-accessibility-issues.png)

### Articles

These articles walk you through using this demo page:

* [Overview of accessibility testing using DevTools](../accessibility/accessibility-testing-in-devtools.md) - Long article with sections that demonstrate using various DevTools features to do accessibility testing, by using the "Demo page with accessibility issues".

* [Use the Inspect tool to detect accessibility issues by hovering over the webpage](../accessibility/test-inspect-tool.md) - One of several short articles that are derived from sections of the above article.

* [Accessibility-testing features](../accessibility/reference.md) - A list of accessibility testing features of DevTools, with links to several articles that use the "Demo page with accessibility issues".

### Source code repo

This is the source code repo and its directory which stores the files for this demo webpage:

* [MicrosoftEdge/DevToolsSamples > a11y-testing](https://github.com/MicrosoftEdge/DevToolsSamples/tree/master/docs/a11y-testing) - Contains files including:

   * `page-with-errors.html` - The demo webpage, including page sections and input forms that send data to the `buttons.js` JavaScript file.  To view the rendered webpage, use the demo webpage link above.

   * `buttons.js` - Contains the JavaScript code that's used by the demo webpage.

   * `styles.css`, `light-theme.css`, and `dark-theme.css` - CSS files that control the presentation of the demo webpage.

   * Image files that are used in the demo webpage.


<!-- ====================================================================== -->
## Demo webpage: Debugging JavaScript with DevTools

This demo webpage is useful for exploring the **Sources** tool, especially the JavaScript debugger.

* Open the demo page [Get started Debugging JavaScript with DevTools](https://microsoftedge.github.io/Demos/devtools-js-get-started/) in a new window or tab.  Right-click anywhere in the rendered webpage and then select **Inspect**.  Or, press `F12`.  DevTools opens next to the demo webpage.

![The 'Get started Debugging JavaScript with DevTools' demo page.](../media/using-debug-js-demo-page.png)

### Articles

These articles or article sections walk you through using this demo page:

* [The basic approach to using a debugger](../sources/index.md#the-basic-approach-to-using-a-debugger) in _Sources tool overview_.  This article section briefly walks you through the steps to use the JavaScript debugger in the **Sources** tool, to find the bug in the demo page.  To fix the bug, you convert the input strings to numbers before adding them.

* [Get started debugging JavaScript](../javascript/index.md) - A more in-depth walkthrough of using the demo page along with the debugger, demonstrating various features of the debugger, and setting different kinds of breakpoints.

### Source code repo

This is the source code repo and its directory which stores the files for this demo webpage:

* [MicrosoftEdge/Demos > devtools-js-get-started](https://github.com/MicrosoftEdge/Demos/tree/main/devtools-js-get-started) - Contains the files:

   *  `README.md` - Contains links to the rendered demo webpage and the in-depth tutorial article about using the demo webpage.

   *  `index.html` - The webpage with an input form that sends data to the JavaScript file, and that displays the result of the JavaScript.

   *  `get-started.js` - The JavaScript file that's used by the form in the demo webpage.
