---
description: The More Tools button, in-context documentation to get started using the DevTools extension, increased support for screen readers in the Console, and more.
title: What's new in DevTools (Microsoft Edge 92)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/02/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# What's New In DevTools (Microsoft Edge 92)

[!INCLUDE [contact DevTools team note](../../includes/edge-whats-new-note.md)]

> [!TIP]
> The **Microsoft Build 2021** conference was on May 25-27.  Here's a video from Build about the updates to DevTools:
> [Microsoft Edge | State of the Platform][YoutubeEdgeStateOfThePlatform] - Microsoft Edge brings a compelling and consistent platform with tools for developers.  As our legacy browsers phase out of support, Edge will soon be the only supported browser from Microsoft on Windows 10.  Join us to learn about the latest across the Edge platform, tools, and web apps.


## The Close button is no longer hidden when DevTools is narrow

<!-- Title: DevTools is now easier to close -->
<!-- Subtitle: The Close button in DevTools is always displayed, even when DevTools is docked to the right and the DevTools viewport is narrow. -->

In Microsoft Edge version 91 or earlier, the **Close** button to close DevTools isn't displayed when the DevTools viewport is narrow.  In Microsoft Edge version 92, the **Close** button in the DevTools is always present, regardless of the DevTools viewport width.

:::image type="complex" source="../../media/2021/05/close-devtools-button-always-displayed.msft.png" alt-text="The Close DevTools button is now present even when the viewport is narrow" lightbox="../../media/2021/05/close-devtools-button-always-displayed.msft.png":::
   The **Close** DevTools button is now present even when the viewport is narrow
:::image-end:::


## Add tools quickly with the new More Tools button

<!-- Title: Add tools quickly with the new More Tools button -->
<!-- Subtitle: Learn about a new convenient way to open tools in Microsoft Edge DevTools. -->

There's a new way to open more tools in Microsoft Edge DevTools: the **More Tools** (`+`) menu. The **More Tools** menu appears on the toolbar in the main panel and on the toolbar of the drawer. Selecting a tool from the **More Tools** menu adds the tool to the toolbar.

To reorder the tabs on either toolbar, select and drag the tabs.

The **More Tools** menu was available as an experiment in Microsoft Edge version 89, and is now always present.

:::image type="complex" source="../../media/2021/05/more-tools-button.msft.png" alt-text="The More Tools button on the upper toolbar and drawer toolbar" lightbox="../../media/2021/05/more-tools-button.msft.png":::
   The **More Tools** button on the upper toolbar and drawer toolbar
:::image-end:::

:::image type="complex" source="../../media/2021/05/more-tools-menu.msft.png" alt-text="The More Tools menu" lightbox="../../media/2021/05/more-tools-menu.msft.png":::
   The **More Tools** menu
:::image-end:::


## Improvements for hovering, selecting, and closing tools

<!-- Title: Improvements to tab interactions -->
<!-- Subtitle: Interactions related to hovering, selecting, and closing tools are more predictable. -->

Tabs for each tool have been reformatted to reduce the chance of accidentally closing a tool.  On each tab in the main toolbar and in the toolbar of the drawer, we added:
*  Spacing around the tab.
*  Spacing around the close (`x`) button in the tab.
*  A background color when hovering over the tab.
*  A tooltip for the close (`x`) button of the tab.
*  Higher contrast for the close (`x`) button of the tab.

For example, when you are in the **Performance** tool and you hover over the **Network** tool's tab, these improvements help prevent accidentally closing the **Network** tool.

:::row:::
    :::column:::
        :::image type="complex" source="../../media/2021/05/hovering-on-tool-tab-before.msft.png" alt-text="Tabs before reformatting" lightbox="../../media/2021/05/hovering-on-tool-tab-before.msft.png":::
           Tabs before reformatting
        :::image-end:::
    :::column-end:::
    :::column:::
        :::image type="complex" source="../../media/2021/05/hovering-on-tool-tab-after.msft.png" alt-text="Tabs after reformatting" lightbox="../../media/2021/05/hovering-on-tool-tab-after.msft.png":::
           Tabs after reformatting
        :::image-end:::
    :::column-end:::
:::row-end:::

These improvements are especially relevant for users of localized DevTools, in which the tabs may be narrower and easier to accidentally close.

:::image type="complex" source="../../media/2021/05/hovering-reduced-chance-of-closing-tab.msft.png" alt-text="Localized DevTools with narrow tabs" lightbox="../../media/2021/05/hovering-reduced-chance-of-closing-tab.msft.png":::
   Localized DevTools with narrow tabs
:::image-end:::

We also made it easier to re-add a tool that you closed by adding a [More Tools menu](#add-tools-quickly-with-the-new-more-tools-button) to the main toolbar and drawer toolbar.


## Better support for screen readers in the Console

<!-- Title: Better screen reader support in the Console -->
<!-- Subtitle: Assistive technologies can now announce autocomplete suggestions and evaluated expressions in the Console. -->

Prior to Microsoft Edge version 92, in the **Console**, assistive technologies such as screen readers didn't announce autocomplete suggestions or the results of evaluated expressions. This has been fixed now.

:::row:::
    :::column:::
        :::image type="complex" source="../../media/2021/05/screen-reader-support-in-console-autocomplete.msft.png" alt-text="In the Console, screen readers now announce the currently selected autocomplete suggestion" lightbox="../../media/2021/05/screen-reader-support-in-console-autocomplete.msft.png":::
           In the **Console**, screen readers now announce the currently selected autocomplete suggestion
        :::image-end:::
    :::column-end:::
    :::column:::
        :::image type="complex" source="../../media/2021/05/screen-reader-support-in-console-evaluated-expression.msft.png" alt-text="In the Console, screen readers now announce the result of an evaluated expression" lightbox="../../media/2021/05/screen-reader-support-in-console-evaluated-expression.msft.png":::
           In the **Console**, screen readers now announce the result of an evaluated expression
        :::image-end:::
    :::column-end:::
:::row-end:::


## Source Order Viewer

<!--  Title: Source Order Viewer -->
<!--  Subtitle: The new Source Order Viewer displays numbers on the webpage indicating the order of page elements in the source file, independently of how the page sections are positioned by CSS. -->

You can now view the order of source elements overlaid on the rendered webpage, for better accessibility inspection.

The order of content in an HTML document is important for search engine optimization and accessibility.  CSS allows developers to create content that looks different in its on-screen order than the order in the HTML source document.  This is an accessibility problem, because screen-reader users could get a confusing experience.

:::image type="complex" source="../media/a11y-testing-source-order-viewer.msft.png" alt-text="Activating the Source Order Viewer shows the order of the elements in the source as overlays on the page" lightbox="../media/a11y-testing-source-order-viewer.msft.png":::
   Activating the **Source Order Viewer** shows the order of the elements in the source as overlays on the page
:::image-end:::

For more information, navigate to [Test keyboard support using the Source Order Viewer](../../../accessibility/test-tab-key-source-order-viewer.md).

To review the history of this feature in the Chromium open-source project, navigate to Issue [1094406][CR1094406].


## User-Agent Client Hints for devices in the Network conditions tab

<!--  Title: User-Agent Client Hints -->
<!--  Subtitle: Access information about a user's browser in an ergonomic way that preserves privacy. -->

User-Agent Client Hints are now applied for devices in the **User agent** field in the **Network conditions** tool.  User-Agent Client Hints are a new expansion to the Client Hints API that enables you to access information about a user's browser in an ergonomic way that preserves privacy.

:::image type="complex" source="../../media/2021/05/user-agent.msft.png" alt-text="User agent" lightbox="../../media/2021/05/user-agent.msft.png":::
   User agent
:::image-end:::

For more information, navigate to [User-Agent Client Hints](../../../../web-platform/user-agent-guidance.md#user-agent-client-hints).

To review the history of this feature in the Chromium open-source project, navigate to Issue [1174299][CR1174299].


## Microsoft Edge Developer Tools for Visual Studio Code version 1.1.8

The [Microsoft Edge Developer Tools for Visual Studio Code][VisualstudioMarketplaceMsEdgedevtoolsVscodeEdgeDevtools] extension version 1.1.8 for Microsoft Visual Studio Code has the following changes since the previous release.  Microsoft Visual Studio Code updates extensions automatically.  To manually update to version 1.1.8, navigate to [Update an extension manually][VisualstudioCodeDocsEditorExtensionGalleryUpdateExtensionManually].

You can file issues and contribute to the extension on the [vscode-edge-devtools GitHub repo][GithubMicrosoftVscodeEdgeDevtools].

### In-context documentation and UI to make it easier to use the DevTools extension

<!-- Title: In-context documentation and UI make it easier to get started using the Developer Tools extension -->
<!-- Subtitle: The Microsoft Edge Developer Tools for Visual Studio Code extension now presents helpful text, buttons, and links, and opens a documentation page with guidance on how to get started. -->

Version 1.1.8 of the [Microsoft Edge Developer Tools for Visual Studio Code][VisualstudioMarketplaceMsEdgedevtoolsVscodeEdgeDevtools] extension now features a simpler way to start a new instance of Microsoft Edge, by presenting instructions, buttons, links, and a documentation page to guide you.

*  When you select the **Microsoft Edge Tools** button in the **Activity Bar** of Visual Studio Code, the **Microsoft Edge Tools: Targets** panel now presents explanatory text, buttons, and links to guide you, instead of a blank panel.

*  When you open a new instance of Microsoft Edge from within Visual Studio Code, Microsoft Edge now shows a start page that explains how to use the Developer Tools extension, instead of a blank page.

*  The **Microsoft Edge Tools: Targets** panel now has a **Generate launch.json** button and instructions, to help launch your project for debugging in Microsoft Edge.

For more information, navigate to [Using the tools][GithubIoDevToolsUsing].


## Announcements from the Chromium project

[!INCLUDE [contact DevTools team note](../../includes/chromium-whats-new-note.md)]


### CSS Grid editor

You can now preview and author CSS Grid layouts, using the new CSS Grid editor.

When an HTML element on your page has `display: grid` or `display: inline-grid` applied to it, you can see an icon appear next to it in the **Styles** tab. Click the icon to toggle the CSS grid editor. In the CSS grid editor, you can preview the potential changes with the onscreen icons (such as `justify-content: space-around`) and author the grid appearance with just one click.

:::image type="complex" source="../../media/2021/05/__.msft.png" alt-text="CSS Grid editor" lightbox="../../media/2021/05/__.msft.png":::
   CSS Grid editor
:::image-end:::

To review the history of this feature in the Chromium open-source project, navigate to Issue [1203241][CR1203241].


### Support for const redeclarations in the Console

The Console now supports redeclaration of `const` variables, in addition to the existing `let` and `class` redeclarations. The inability to redeclare `const` variables was a common annoyance for web developers who use the Console to experiment with new JavaScript code.

This support for redeclaration of `const` variables allows yet to paste code into the DevTools console to see how it works.  You can experiment, making small changes to the code, and repeat the process without refreshing the page.  Previously, DevTools threw a syntax error if the code redeclared a `const` binding.

Refer to the example below. `const` redeclaration is supported across separate REPL scripts (refer to variable `a`).  Note that the following scenarios are not supported, by design:

*  `const` redeclaration of page scripts is not allowed in REPL scripts.
*  `const` redeclaration within the same REPL script is not allowed (refer to variable `b`).

:::image type="complex" source="../../media/2021/05/__.msft.png" alt-text="const redeclarations" lightbox="../../media/2021/05/__.msft.png":::
   const redeclarations
:::image-end:::

To review the history of this feature in the Chromium open-source project, navigate to Issue [1076427][CR1076427].


### New shortcut to view frame details

To quickly view frame details, you can now right-click the `iframe` element in the **Elements** tool, and then select **Show frame details**.

:::image type="complex" source="../../media/2021/05/__.msft.png" alt-text="Show frame details" lightbox="../../media/2021/05/__.msft.png":::
   Show frame details
:::image-end:::

This displays the details about the `iframe` in the **Application** tool.  In the **Application** tool, you can examine document details, security and isolation status, permissions policy, and more, to debug potential issues.

:::image type="complex" source="../../media/2021/05/__.msft.png" alt-text="Frame details view" lightbox="../../media/2021/05/__.msft.png":::
   Frame details view
:::image-end:::

<!-- demo page: https://wolfib.github.io/web-demos/ esp https://wolfib.github.io/web-demos/jsIframe.html -->

To review the history of this feature in the Chromium open-source project, navigate to Issue [1192084][CR1192084].


### Enhanced CORS debugging support

Cross-origin resource sharing (CORS) errors are now surfaced in the **Issues** tab.  There are various potential causes of CORS errors.  Click to expand each issue to understand the potential causes and solutions.

:::image type="complex" source="../../media/2021/05/__.msft.png" alt-text="CORS issues in the Issues tab" lightbox="../../media/2021/05/__.msft.png":::
   CORS issues in the Issues tab
:::image-end:::

To review the history of this feature in the Chromium open-source project, navigate to Issue [1141824][CR1141824].


### Renamed XHR label to Fetch\/XHR

In the **Network** tool, the **XHR** label is now renamed to **Fetch/XHR**. This change makes it clearer that this filter includes both `XMLHttpRequest` and `Fetch` API network requests.

:::image type="complex" source="../../media/2021/05/__.msft.png" alt-text="__" lightbox="../../media/2021/05/__.msft.png":::
   __
:::image-end:::

For more information, navigate to:
*  [XMLHttpRequest spec](https://xhr.spec.whatwg.org)
*  [Fetch spec](https://fetch.spec.whatwg.org)

To review the history of this feature in the Chromium open-source project, navigate to Issue [1201398][CR1201398].


### Filter Wasm resource type in the Network panel

In the **Network** tool, you can now select the new **Wasm** button to filter the WebAssembly network requests.

:::image type="complex" source="../../media/2021/05/__.msft.png" alt-text="Filter by Wasm" lightbox="../../media/2021/05/__.msft.png":::
   Filter by Wasm
:::image-end:::

To review the history of this feature in the Chromium open-source project, navigate to Issue [1103638][CR1103638].


### Include Compute Intersections in the Performance panel

DevTools now shows **Compute Intersections** in the **Frames** chart. These changes help you to identify intersection observers events and debug its potential performance overheads.

:::image type="complex" source="../../media/2021/05/__.msft.png" alt-text="Compute Intersections in the Performance panel" lightbox="../../media/2021/05/__.msft.png":::
   Compute Intersections in the Performance panel
:::image-end:::

For more about intersection observers, navigate to [Trust is good, observation is better: Intersection Observer v2](https://web.dev/intersectionobserver-v2/).

To review the history of this feature in the Chromium open-source project, navigate to Issue [1199137][CR1199137].


## Download the Microsoft Edge preview channels

If you are on Windows, Linux, or macOS, consider using the [Microsoft Edge preview channels][MicrosoftEdgePreviewChannels] as your default development browser.  The preview channels give you access to the latest DevTools features.


## Getting in touch with Microsoft Edge DevTools team

[!INCLUDE [contact DevTools team note](../../includes/contact-whats-new-note.md)]


<!-- links -->
[GithubMicrosoftVscodeEdgeDevtools]: https://github.com/microsoft/vscode-edge-devtools "microsoft/vscode-edge-devtools | GitHub"
[GithubIoDevToolsUsing]: https://microsoft.github.io/vscode-edge-devtools/using.html "Using the tools | GitHub"

[MicrosoftEdgePreviewChannels]: https://www.microsoftedgeinsider.com/download "Microsoft Edge Preview Channels"

[VisualstudioCodeDocsEditorExtensionGalleryUpdateExtensionManually]: https://code.visualstudio.com/docs/editor/extension-gallery#_update-an-extension-manually "Update an extension manually - Extension Marketplace | Visual Studio Code"

[VisualstudioMarketplaceMsEdgedevtoolsVscodeEdgeDevtools]: https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools "Microsoft Edge Developer Tools for Visual Studio Code | Visual Studio Marketplace"

[YoutubeEdgeStateOfThePlatform]: https://www.youtube.com/watch?v=sU0WRZ0kkNo "Microsoft Edge: State of the Platform | YouTube"

[CRIssuesList]: https://bugs.chromium.org/p/chromium/issues/list "Chromium bugs"
[CR1094406]: https://crbug.com/1094406 "Issue 1094406: Developers want a source order viewer | Chromium bugs"
[CR1174299]: https://crbug.com/1174299 "Issue 1174299: UA Client Hints dropped when overriding UA string via Chrome DevTools' Network conditions tab | Chromium bugs"
[CR1203241]: https://crbug.com/1203241 "Issue 1203241: CSS Grid editor | Chromium bugs"
[CR1076427]: https://crbug.com/1076427 "Issue 1076427: DevTools Console should support const redeclaration | Chromium bugs"
[CR1192084]: https://crbug.com/1192084 "Issue 1192084: Add 'Show frame details' right-click option to iframe / html tags in elements view | Chromium bugs"
[CR1141824]: https://crbug.com/1141824 "Issue 1141824: Improve CORS error reporting in DevTools | Chromium bugs"
[CR1201398]: https://crbug.com/1201398 "Issue 1201398: Feature Request: rename XHR type filter in Network Panel | Chromium bugs"
[CR1103638]: https://crbug.com/1103638 "Issue 1103638: Network panel for showing WebAssembly resources | Chromium bugs"
[CR1199137]: https://crbug.com/1199137 "Issue 1199137: Display IntersectionObserver cost in perf panel | Chromium bugs"

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].
> The original page is found [here](https://developer.chrome.com/blog/new-in-devtools-xx) and is authored by [Jecelyn Yeen][JecelynYeen] \(Developer advocate, Chrome DevTools\).

[![Creative Commons License][CCby4Image]][CCA4IL]
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].

[CCA4IL]: https://creativecommons.org/licenses/by/4.0
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies
[JecelynYeen]: https://developers.google.com/web/resources/contributors/jecelynyeen
