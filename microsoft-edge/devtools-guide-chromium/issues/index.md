---
description: Use the Issues tool to identify and fix problems with the current webpage.
title: Find and fix problems using the Issues tool
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/11/2021
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

# Find and fix problems using the Issues tool

In Microsoft Edge DevTools, the **Issues** tool automatically analyzes the current webpage, reports issues grouped by type, and provides documentation to help explain and resolve the issues.

The **Issues** tool provides feedback in the following categories:
*  **Accessibility**
*  **Compatibility** across browsers
*  **Performance**
*  **Progressive Web Apps**
*  **Security**
*  **Other**

Feedback in the **Issues** tool is provided by several sources, including the Chromium platform, Deque axe, MDN browser compatibility data, and webhint.  For information about these sources of feedback that populate the **Issues** tool, navigate to:
*  [axe Tools Overview][DequeAxe]
*  [browser-compat-data repo][MDNCompat]
*  [webhint][webhintIo]


## Open the Issues tool

The following steps walk through opening the **Issues** tool, using an accessibility-testing demo page.

To open the **Issues** tool:

1.  Navigate to a webpage that contains issues to fix.  For example, open the [accessibility-testing demo page][A11ytestingPagewitherrors] in a new tab or window.

    :::image type="complex" source="../media/issues-accessibility-demo-page-initial.msft.png" alt-text="Accessibility-testing demo page, which has some issues" lightbox="../media/issues-accessibility-demo-page-initial.msft.png":::
       Accessibility-testing demo page, which has some issues
    :::image-end:::

1.  Open DevTools.  After a few seconds, the **Issues counter** \(![Issues counter](../media/issues-counter-icon.msft.png)\) appears, in the upper right corner of DevTools.  The number you get might be different.

1.  Select the **Issues counter**.  The **Issues** tool opens, populated with issues in several categories.

    :::image type="complex" source="../media/issues-tool-categories.msft.png" alt-text="Categories of issues for the accessibility demo page" lightbox="../media/issues-tool-categories.msft.png":::
       Categories of issues for the accessibility demo page
    :::image-end:::

### Other ways to open the Issues tool

There are several ways to open the **Issues** tool:
*  Select the **Issues counter** \(![Issues counter](../media/issues-counter-icon.msft.png)\) in the upper right corner of DevTools or at the top of the **Console**.
*  Select the **More Tools** (**+**) menu in the main panel or the **Drawer**, and then select **Issues**.
*  Select **Customize and control DevTools** > **More tools** > **Issues**.
*  In the DOM tree in the **Elements** tool, select `Shift` and then click a wavy-underlined element name.  Or, open the context menu on a wavy-underlined element and then select **View issues**.

### Issues are automatically ordered by severity

Within each category of issues, first the errors are listed, then warnings, and then tips.

:::image type="complex" source="../media/issues-ordered-by-severity.msft.png" alt-text="The Issues tool displays issues sorted by severity" lightbox="../media/issues-ordered-by-severity.msft.png":::
   The **Issues** tool displays issues sorted by severity
:::image-end:::

### Include third-party issues

To include issues that are caused by third-party sites, at the top of the **Issues** tool, select the **Include third-party issues** checkbox.


## Expand entries in the Issues tool

The **Issues** tool presents issues grouped into categories and provides documentation and recommended fixes for each issue.  To expand or collapse an issue, select the issue, as follows.

1.  Open the [accessibility-testing demo page][A11ytestingPagewitherrors] in a new window or tab, and then open DevTools.

1.  Open the **Issues** tool, such as by selecting the **Issues counter** \(![Issues counter](../media/issues-counter-icon.msft.png)\).

1.  Select an issue to expand the issue.

    :::image type="complex" source="../media/issues-tool-initial-view-accessibility-page.msft.png" alt-text="The Issues tool for the Accessibility demo page" lightbox="../media/issues-tool-initial-view-accessibility-page.msft.png":::
       The **Issues** tool for the Accessibility demo page
    :::image-end:::

Each displayed issue has the following components:
*   A headline describing the issue.
*   A description providing more context and proposed solutions.
*   An **Affected Resources** section that links to resources within the appropriate DevTools context, such as the **Elements**, **Sources**, or **Network** tool.
*   Links to further guidance.


## View issues in context of an associated tool

An issue in the **Issues** tool typically includes one or more links that open a different tool, such as the **Elements**, **Sources**, or **Network** tool.

1.  As described in the previous section, open the accessibility-testing demo page and then expand an issue in the **Issues** tool.

1.  In the **Affected Resources** section of the issue, select a tool-name link or a resource link.  The affected resource is displayed in the appropriate tool.

    :::image type="complex" source="../media/issues-tool-affected-resource-opens-elements-tool.msft.png" alt-text="Selecting an affected resource in the Issues tool for the accessibility demo page opens the Elements tool" lightbox="../media/issues-tool-affected-resource-opens-elements-tool.msft.png":::
       Selecting an affected resource in the **Issues** tool for the accessibility demo page opens the **Elements** tool
    :::image-end:::

    An expanded issue may have an **Open in Network** link, even if the issue isn't in the **Network** category.

    :::image type="complex" source="../media/issues-tab-view-issue.msft.png" alt-text="The Network tool opens when you select a Network resource link" lightbox="../media/issues-tab-view-issue.msft.png":::
    The **Network** tool opens when you select a **Network** resource link
    :::image-end:::


## Open issues from the DOM tree

If an element has an associated issue, the DOM tree in the **Elements** tool shows wavy underlining under the element name.  You can either **Shift+click** the wavy-underlined element, or open the context menu on an element that has a wavy underline and then select **View issues**.

To view an issue for an element that has wavy underlining in the DOM tree:

1.  Open a page, such as the [accessibility-testing demo page][A11ytestingPagewitherrors], in a new tab or window.

1.  Open DevTools and then select the **Elements** tab.

1.  In the DOM tree, expand `<body>` > `<header>` > `<form>`.  The `<input>` element has wavy underlining.

    :::image type="complex" source="../media/issues-wavy-underlines-dom-tree.msft.png" alt-text="Wavy-underlined issues in the DOM tree in the Elements tool" lightbox="../media/issues-wavy-underlines-dom-tree.msft.png":::
       Wavy-underlined issues in the **DOM tree** in the **Elements** tool
    :::image-end:::

1.  Hover over the `<input>` element.  A tooltip shows information about the issue.

1.  Select `Shift` and then click the wavy-underlined element name.  Or, open the context menu on the wavy-underlined element and then select **View issues**.  The **Issues** tool opens, displaying the issue that's associated with the element.

    :::image type="complex" source="../media/issues-opened-from-dom-tree-wavy-underline.msft.png" alt-text="Details about issues for a wavy-underlined element in the DOM tree" lightbox="../media/issues-opened-from-dom-tree-wavy-underline.msft.png":::
       Details about issues for a wavy-underlined element in the **DOM tree**
    :::image-end:::


## See also

* [Automatically test a webpage for accessibility issues](../accessibility/test-issues-tool.md)


## Getting in touch with the Microsoft Edge DevTools team

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]

<!-- links -->
[DevtoolsOpenIndex]: ../open/index.md "Open Microsoft Edge DevTools | Microsoft Docs"
<!-- external links -->
[A11ytestingPagewitherrors]: https://microsoftedge.github.io/DevToolsSamples/a11y-testing/page-with-errors.html "Accessibility-testing demo page | Microsoft Docs"
[DequeAxe]: https://www.deque.com/axe "axe Tools Overview | Deque"
[MDNCompat]: https://github.com/mdn/browser-compat-data "MDN Browser Compatibility Data | GitHub"
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
