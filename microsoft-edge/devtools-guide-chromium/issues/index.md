---
description: Use the Issues tool to find and fix problems with your website.
title: Find and fix problems by using the Issues tool
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/09/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
<!-- Copyright Sam Dutton

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->

# Find and fix problems by using the Issues tool

The **Issues** tool automatically analyzes the current webpage and reports issues grouped by type, and provides documentation to help explain and resolve the issues.

The **Issues** tool supports provides feedback in the following categories:
*  Accessibility
*  Cross-browser compatibility
*  Performance
*  Progressive Web Apps
*  Security
*  Other

The feedback in the **Issues** tool is provided by several sources, including the Chromium platform, Deque axe, the MDN Browser Compatibility Report, and webhint.  For information about these sources of feedback that populate the Issues tool, navigate to:
*  [axe Tools Overview][DequeAxe]
*  [Compat2021: Eliminating five top compatibility pain points on the web][MDNCompat]
*  [webhint][webhintIo]


## Open the Issues tool

There are several ways to open the issues tool:
*  Select the \(![Issues counter](../media/issues-counter-icon.msft.png)\) in the upper right corner of DevTools or at the top of the **Console**.
*  Select **Customize and control DevTools** > **More tools** > **Issues**.
*  Press `Esc` to open the **Drawer**, at the bottom of DevTools.  By default, the Issues tool is on the Drawer.
*  To open the Issues tool on the main toolbar instead of on the Drawer, select the **More Tools** (**+**) menu on the main toolbar, and then select **Issues**.

The following steps walk through opening the Issues tool, using a couple of demo pages that have different categories of issues.

1.  Navigate to a webpage that contains issues to fix.  For example, navigate to the [accessibility-testing demo page](https://microsoftedge.github.io/DevToolsSamples/a11y-testing/page-with-errors.html).

    Or, navigate to the [SameSite cookies demo page][GlitchSamesiteSandbox], which initially brings up a warning page, "This site has been reported as unsafe", "Hosted by samesite-sandbox.glitch.me".  Select **More information** to expand the section, and then select **Continue to the unsafe site (not recommended)**.  We won't enter information in the demo page.

    :::image type="complex" source="../media/samesite-demo-initial-page.msft.png" alt-text="Demo page for issues with SameSite cookies" lightbox="../media/samesite-demo-initial-page.msft.png":::
       Demo page for issues with `SameSite` cookies
    :::image-end:::

1.  Select `F12` to open DevTools.  After a few seconds, the \(![Issues counter](../media/issues-counter-icon.msft.png)\) appears, in the upper right corner of DevTools.  The number you get might be different, and the number of reported issues might change while you're at the page.

    :::image type="complex" source="../media/samesite-demo-initial-page-welcome.msft.png" alt-text="SameSite cookie demo page with initial Welcome page and the Issues counter" lightbox="../media/samesite-demo-initial-page-welcome.msft.png":::
       SameSite cookie demo page with initial Welcome page and the **Issues counter**
    :::image-end:::

1.  Select the **Issues counter** \(![Issues counter](../media/issues-counter-icon.msft.png)\).

    For the [SameSite cookies demo page][GlitchSamesiteSandbox], issues in the **Other** and **Security** categories are listed.

    :::image type="complex" source="../media/issues-tool-initial-view-samesite-page.msft.png" alt-text="The Issues tool for the SameSite demo page" lightbox="../media/issues-tool-initial-view-samesite-page.msft.png":::
       The **Issues** tool for the SameSite demo page
    :::image-end:::

    For the [accessibility-testing demo page](https://microsoftedge.github.io/DevToolsSamples/a11y-testing/page-with-errors.html), issues in the **Accessibility** category are listed.


## Expand entries in the Issues tool

The **Issues** tool presents issues grouped into categories, with documentation for each issue.

1.  Select an issue in the **Issues** tool to get guidance on how to fix the issue and find affected resources.

    :::image type="complex" source="../media/issues-tab-issue-open.msft.png" alt-text="An issue expanded in the Issues tool" lightbox="../media/issues-tab-issue-open.msft.png":::
       An issue expanded in the **Issues** tool
    :::image-end:::

    Each displayed issue has several components:
    *   A headline describing the issue.
    *   A description providing the context and the solution, or a link to a page that contains that information.
    *   An **Affected Resources** section that links to resources within the appropriate DevTools context such as the **Network** tool.
    *   Links to further guidance.

    For the [accessibility-testing demo page](https://microsoftedge.github.io/DevToolsSamples/a11y-testing/page-with-errors.html), the **Affected Resources** section lists DOM elements, such as specific `<img>` or `<input>` elements.

    :::image type="complex" source="../media/issues-tool-initial-view-accessibility-page.msft.png" alt-text="The Issues tool for the Accessibility demo page" lightbox="../media/issues-tool-initial-view-accessibility-page.msft.png":::
       The **Issues** tool for the Accessibility demo page
    :::image-end:::


## View issues in context of an associated tool

1.  Select a resource link, to view the resource in the appropriate context within DevTools, such as the **Network** tool or the **Elements** tool.  In the SameSite cookies demo page, select `samesite-sandbox.glitch.me` under **Requests** to show the cookies that are attached to that request.  The cookies are then displayed in the **Network** tool.

    :::image type="complex" source="../media/issues-tab-view-issue.msft.png" alt-text="None value in the SameSite column for the ck02 cookie in the Network tool" lightbox="../media/issues-tab-view-issue.msft.png":::
       `None` value in the **SameSite** column for the `ck02` cookie in the **Network** tool
    :::image-end:::

1.  Scroll to view the item with a problem, such as the `ck02` cookie.  In the **SameSite** column, hover over the circled `i` next to **None**.  The resulting tooltip provides information similar to the **Issues** tool.

    In contrast, selecting an issue for the accessibility-testing demo page opens the **Elements** tool.

    :::image type="complex" source="../media/issues-tool-affected-resource-opens-elements-tool.msft.png" alt-text="Selecting an affected resource in the Issues tool for the accessibility demo page opens the Elements tool" lightbox="../media/issues-tool-affected-resource-opens-elements-tool.msft.png":::
       Selecting an affected resource in the **Issues** tool for the accessibility demo page opens the **Elements** tool
    :::image-end:::


## Open issues from the DOM tree

If an element has an issue, the DOM tree in the **Elements** tool shows wavy underlining under the element name.  To view the complete information about the issue:
*   Select and hold `Shift`, and then select the wavy-underlined element.
*   Or, right-click an element that has a wavy underline, and then select **View issues**.

To view an issue for an element that has wavy underlining in the DOM tree:

1.  Open the [accessibility-testing demo page](https://microsoftedge.github.io/DevToolsSamples/a11y-testing/page-with-errors.html) in a new tab or window.

1.  Select `F12` to open DevTools, and then select the **Elements** tab.

1.  In the DOM tree, expand `<body>` > `<header>` > `<form>`.  The `<input>` element has wavy underlining.

    :::image type="complex" source="../media/issues-wavy-underlines-dom-tree.msft.png" alt-text="Wavy-underlined issues in the DOM tree in the Elements tool" lightbox="../media/issues-wavy-underlines-dom-tree.msft.png":::
       Wavy-underlined issues in the **DOM tree** in the **Elements** tool
    :::image-end:::
    
1.  Hover over the `<input>` element.  A tooltip shows information about the issue.

1.  Select `Shift` and then select the wavy-underlined element name.  The **Issues** tool opens and expands the issue about the element.

    :::image type="complex" source="../media/issues-opened-from-dom-tree-wavy-underline.msft.png" alt-text="Details about issues for a wavy-underlined element in the DOM tree" lightbox="../media/issues-opened-from-dom-tree-wavy-underline.msft.png":::
       Details about issues for a wavy-underlined element in the **DOM tree**
    :::image-end:::
    

## Issues are automatically ordered by severity

Within each category of issues, first the **Errors** are listed, then **Warnings**, and then **Tips**.

:::image type="complex" source="../media/issues-ordered-by-severity.msft.png" alt-text="The Issues tool displays issues sorted by severity" lightbox="../media/issues-ordered-by-severity.msft.png":::
   The **Issues** tool displays issues sorted by severity
:::image-end:::


## Include third-party issues

To include issues that are caused by third-party sites, at the top of the **Issues** tool, select the **Include third-party issues** checkbox.


## See also

* [Automatically test a webpage for accessibility issues](../accessibility/test-issues-tool.md)


## Getting in touch with the Microsoft Edge DevTools team

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]

<!-- links -->
[DevtoolsOpenIndex]: ../open/index.md "Open Microsoft Edge DevTools | Microsoft Docs"
<!-- external links -->
[GlitchSamesiteSandbox]: https://samesite-sandbox.glitch.me "SameSite cookie tests | Glitch"
[DequeAxe]: https://www.deque.com/axe "axe Tools Overview | Deque"
[MDNCompat]: https://web.dev/compat2021 "Compat2021: Eliminating five top compatibility pain points on the web | web.dev"
[webhintIo]: https://webhint.io "webhint.io"

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/issues/index) and is authored by [Sam Dutton][SamDutton] \(Developer Advocate\).
[![Creative Commons License][CCby4Image]][CCA4IL]
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].

[CCA4IL]: https://creativecommons.org/licenses/by/4.0
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies
[KayceBasques]: https://developers.google.com/web/resources/contributors#kayce-basques
[SamDutton]: https://developers.google.com/web/resources/contributors#sam-dutton
