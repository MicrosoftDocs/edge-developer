---
description: Use the Issues tool to identify and fix problems with the current webpage.
title: Find and fix problems using the Issues tool
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/24/2021
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
*  Accessibility.
*  Compatibility across browsers.
*  Performance.
*  Progressive Web Apps.
*  Security.
*  Other.

Feedback in the **Issues** tool is provided by several sources, including the Chromium platform, Deque axe, MDN browser compatibility data, and webhint.  For information about these sources of feedback that populate the **Issues** tool, navigate to:
*  [axe Tools Overview](https://www.deque.com/axe)
*  [browser-compat-data repo](https://github.com/mdn/browser-compat-data)
*  [webhint](https://webhint.io)


<!-- ====================================================================== -->
## Opening the Issues tool

1.  Navigate to a webpage that contains issues to fix.  For example, open the [accessibility-testing demo page](https://microsoftedge.github.io/DevToolsSamples/a11y-testing/page-with-errors.html) in a new tab or window.

1.  Open DevTools.  After a few seconds, the **Issues counter** (![Issues counter](../media/issues-counter-icon.msft.png)) appears in the upper right corner of DevTools.

1.  Refresh the page, because some issues are reported based on network requests.  Notice the updated count in the **Issues counter**.

1.  Select the **Issues counter**.  The **Issues** tool opens with issues grouped into different categories.

    :::image type="complex" source="../media/issues-tool-categories.msft.png" alt-text="Categories of issues in the Issues tool on the demo page" lightbox="../media/issues-tool-categories.msft.png":::
       Categories of issues in the Issues tool on the demo page
    :::image-end:::

### Other ways to open the Issues tool

There are several additional ways to open the **Issues** tool:
*  Select the **More Tools** (**+**) menu in the main panel or the **Drawer**, and then select **Issues**.
*  Select **Customize and control DevTools** > **More tools** > **Issues**.
*  In the DOM tree in the **Elements** tool, select `Shift` and then click a wavy-underlined element name.  Or, open the context menu on a wavy-underlined element and then select **View issues**.

### Issues are automatically ordered by severity

Within each category of issues, first the errors are listed, then warnings, and then tips.

:::image type="complex" source="../media/issues-ordered-by-severity.msft.png" alt-text="The Issues tool displays Performance issues sorted by severity" lightbox="../media/issues-ordered-by-severity.msft.png":::
   The **Issues** tool displays Performance issues sorted by severity
:::image-end:::

### Include third-party issues

To include issues that are caused by third-party sites, at the top of the **Issues** tool, select the **Include third-party issues** checkbox.


<!-- ====================================================================== -->
## Expand entries in the Issues tool

The **Issues** tool presents additional documentation and recommended fixes to apply to each issue.  To expand an issue to get this additional information, select an issue, as follows.

1.  Open the [demo page](https://microsoftedge.github.io/DevToolsSamples/a11y-testing/page-with-errors.html) in a new window or tab, and then open DevTools.

1.  Open the **Issues** tool by selecting the **Issues counter** (![Issues counter](../media/issues-counter-icon.msft.png)).

1.  Select an issue to expand the issue.

    :::image type="complex" source="../media/issues-tool-initial-view-accessibility-page.msft.png" alt-text="The Issues tool displaying additional information on how to fix the issue" lightbox="../media/issues-tool-initial-view-accessibility-page.msft.png":::
       The **Issues** tool displaying additional information on how to fix the issue
    :::image-end:::

Each displayed issue has the following components:
*   A headline describing the issue.
*   A description providing more context and proposed solutions.
*   An **AFFECTED RESOURCES** section that links to resources in DevTools, such as the **Elements**, **Sources**, or **Network** tool.
*   Links to further documentation.


<!-- ====================================================================== -->
## View issues in context of an associated tool

An issue in the **Issues** tool may include one or more links that open different tools, such as the **Elements**, **Sources**, or **Network** tool. You can open one of these tools to perform additional troubleshooting steps. To open a linked tool from the **Issues** tool, perform the following steps.

1.  As described in the previous section, open the demo page and then expand an issue in the **Issues** tool.

1.  In **AFFECTED RESOURCES** > **Open in**, select the tool name.  The affected resource is displayed in the selected tool.

    :::image type="complex" source="../media/issues-tool-affected-resource-opens-elements-tool.msft.png" alt-text="Select a tool to open an affected resource from within the Issues tool" lightbox="../media/issues-tool-affected-resource-opens-elements-tool.msft.png":::
       Select a tool to open an affected resource from within the Issues tool
    :::image-end:::

    An expanded issue may have a **Network** link, to display the affected resource in the **Network** tool.

    :::image type="complex" source="../media/issues-tab-view-issue.msft.png" alt-text="The Network tool opens when you select a Network resource link" lightbox="../media/issues-tab-view-issue.msft.png":::
    The **Network** tool opens when you select a **Network** resource link
    :::image-end:::


<!-- ====================================================================== -->
## Open issues from the DOM tree

If an element has an associated issue, the DOM tree in the **Elements** tool shows a wavy underline under the element name.  You can open the context menu (right-click) on the element and then select **View issues**, or select `Shift` and left-click the element with the wavy underline.

To display an issue for elements with wavy underlines in the DOM tree, perform the following steps.

1.  Open a page, such as the [demo page](https://microsoftedge.github.io/DevToolsSamples/a11y-testing/page-with-errors.html), in a new tab or window.

1.  Open DevTools and then select the **Elements** tab.

1.  In the DOM tree, expand `<body>` > `<header>` > `<form>`.  Notice that the `<input>` element has a wavy underline.

    :::image type="complex" source="../media/issues-wavy-underlines-dom-tree.msft.png" alt-text="Wavy-underlined issues in the DOM tree in the Elements tool" lightbox="../media/issues-wavy-underlines-dom-tree.msft.png":::
       Wavy-underlined issues in the **DOM tree** in the **Elements** tool
    :::image-end:::

1.  Hover over the `<input>` element.  A tooltip displays information about the issue.

1.  Open the context menu on the element with the wavy underline, and then select **View issues**.  The **Issues** tool opens and displays the issue that's associated with that element.

    :::image type="complex" source="../media/issues-opened-from-dom-tree-wavy-underline.msft.png" alt-text="Details about issues on a wavy-underlined element in the DOM tree" lightbox="../media/issues-opened-from-dom-tree-wavy-underline.msft.png":::
       Details about issues on a wavy-underlined element in the **DOM tree**
    :::image-end:::


<!-- ====================================================================== -->
## See also

*  [Automatically test a webpage for accessibility issues](../accessibility/test-issues-tool.md)


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/issues/index) and is authored by [Sam Dutton](https://developers.google.com/web/resources/contributors#sam-dutton) (Developer Advocate).
[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
