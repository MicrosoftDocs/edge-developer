---
description: How to find and analyze unused JavaScript and CSS code in Microsoft Edge DevTools.
title: Find unused JavaScript and CSS Code with the Coverage panel in Microsoft Edge DevTools
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
# Find unused JavaScript and CSS code with the Coverage panel in Microsoft Edge DevTools

The **Coverage** panel in Microsoft Edge DevTools helps you find unused JavaScript and CSS code.  Removing unused code may speed up your page load and save your mobile users cellular data.

:::image type="complex" source="../media/coverage-sources-resource-drawer-coverage.msft.png" alt-text="Analyzing code coverage" lightbox="../media/coverage-sources-resource-drawer-coverage.msft.png":::
   Analyzing code coverage
:::image-end:::

> [!WARNING]
> Finding unused code is relatively easy.  But refactoring a codebase so that each page only ships the JavaScript and CSS that it needs may be difficult.  This guide does not cover how to refactor a codebase to avoid unused code because these refactors depend highly on your technology stack.


<!-- ====================================================================== -->
## Overview

Shipping unused JavaScript or CSS is a common problem in web development.  For example, suppose that you want to use [Bootstrap button component](https://getbootstrap.com/docs/4.3/components/buttons) on your page.  To use the button component you need to add a link to the Bootstrap stylesheet in your HTML, like this:

```html
...
<head>
    ...
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    ...
</head>
...
```

This stylesheet does not just include the code for the button component.  It contains the CSS for **all** of the Bootstrap components.  But you are not using any of the other Bootstrap components.  So your page is downloading a bunch of CSS that it does not need.  This extra CSS is a problem for the following reasons.

*   The extra code slows down your page load.  <!--Navigate to [Render-Blocking CSS](/web/fundamentals/performance/critical-rendering-path/render-blocking-css).  -->
*   If a user accesses the page on a mobile device, the extra code uses up their cellular data.


<!-- ====================================================================== -->
## Open the Coverage panel

1.  [Open the Command Menu](../command-menu/index.md).
1.  Start typing `coverage`, select the **Show Coverage** command, and then select `Enter` to run the command.  The **Coverage** panel opens in the **Drawer**.

    :::image type="complex" source="../media/coverage-console-drawer-coverage-empty.msft.png" alt-text="The Coverage panel" lightbox="../media/coverage-console-drawer-coverage-empty.msft.png":::
       The **Coverage** panel
    :::image-end:::


<!-- ====================================================================== -->
## Record code coverage

1.  Choose one of the following buttons in the **Coverage** panel.
    *   Choose **Start Instrumenting Coverage And Reload Page** (![Start Instrumenting Coverage And Reload Page](../media/reload-icon.msft.png)) if you want to review what code is needed to load the page.
    *   Choose **Instrument Coverage** (![Instrument Coverage](../media/record-icon.msft.png)) if you want to review what code is used after interacting with the page.
1.  Choose **Stop Instrumenting Coverage And Show Results** (![Stop Instrumenting Coverage And Show Results](../media/stop-icon.msft.png)) when you want to stop recording code coverage.


<!-- ====================================================================== -->
## Analyze code coverage

The table in the **Coverage** panel displays the resources that were analyzed, and how much code is used within each resource.  Choose a row to open that resource in the **Sources** tool and review a line-by-line breakdown of used code and unused code.

:::image type="complex" source="../media/coverage-sources-resource-drawer-coverage-selected.msft.png" alt-text="A code coverage report" lightbox="../media/coverage-sources-resource-drawer-coverage-selected.msft.png":::
   A code coverage report
:::image-end:::

*   The **URL** column is the URL of the resource that was analyzed.
*   The **Type** column says whether the resource contains CSS, JavaScript, or both.
*   The **Total Bytes** column is the total size of the resource in bytes.
*   The **Unused Bytes** column is the number of bytes that were not used.
*   The last, unnamed column is a visualization of the **Total Bytes** and **Unused Bytes** columns.  The red section of the bar is unused bytes.  The green section is used bytes.


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/coverage/index) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools \& Lighthouse).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
