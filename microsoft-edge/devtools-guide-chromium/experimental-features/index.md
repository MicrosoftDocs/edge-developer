---
description: The latest experimental features in Microsoft Edge DevTools
title: Experimental features
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 11/17/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, experiment
no-loc: ["Enable webhint", "Enable Network Console", "Source Order Viewer", "Enable Composited Layers in 3D View", "Enable new Font Editor tool within the Styles pane", "Enable new CSS Flexbox debugging features", "Enable + button tab menus to open more tools", "Enable Welcome tab", "3D View", "Turn on support to move tabs between panels", "Match keyboard shortcuts in the DevTools to Microsoft Visual Studio Code", "Edit keyboard shortcuts for any action in the DevTools", "Turn on new CSS grid debugging features", "Emulation: Support dual screen mode"]
---
# Experimental features

Microsoft Edge DevTools provide access to experimental features that are still in development. This article describes only experimental features found in Microsoft Edge. You can try out these features and [provide feedback](../contact.md) before each feature is released.

All [channels of Microsoft Edge](/deployedge/microsoft-edge-channels) have experimental features. You can get the latest experimental features by using the [Microsoft Edge Canary channel](https://www.microsoftedgeinsider.com/welcome?channel=canary). To view the full list available in your version of Microsoft Edge, see the **Settings** > **Experiments** page in DevTools.


<!-- ====================================================================== -->
## Experimental features in Microsoft Edge versions 97 and 98

The following table lists the default state, of each experimental feature. The feature name links to more information.

| Default state | Experimental feature |
| :---: | :--- |
| Off | [Allow extensions to load custom stylesheets](#allow-extensions-to-load-custom-stylesheets) |
| Off | [Capture node creation stacks](#capture-node-creation-stacks) |
| Off | [Automatically pretty print in the Sources Panel](#automatically-pretty-print-in-the-sources-panel) |
| Off | [Protocol Monitor](#protocol-monitor) |
| Off | [Show CSP Violations view](#show-csp-violations-view) |
| Off | [Record coverage while performance tracing](#record-coverage-while-performance-tracing) |
| Off | [Show option to take heap snapshot where globals are not treated as root](#show-option-to-take-heap-snapshot-where-globals-are-not-treated-as-root) |
| **On** | [Source order viewer](#source-order-viewer) |
| **On** | [Enable back-forward cache debugging support](#enable-back-forward-cache-debugging-support) |
| Off | [Timeline: event initiators](#timeline-event-initiators) |
| Off | [Timeline: WebGL-based flamechart](#timeline-webgl-based-flamechart) |
| Off | [WebAssembly Debugging: Enable DWARF support](#webassembly-debugging-enable-dwarf-support) |
| **On** | [Emulation: Support dual screen mode](../device-mode/dual-screen-and-foldables.md) |
| Off | [Enable new Advanced Perceptual Contrast Algorithm (APCA) replacing previous contrast ratio and AA/AAA guidelines](../whats-new/2021/01/devtools.md#new-color-contrast-calculation---advanced-perceptual-contrast-algorithm-apca) |
| Off | [Enable full accessibility tree view in the Elements panel](../whats-new/2021/02/devtools.md#full-accessibility-tree-view-in-the-elements-tool) |
| Off | [Enable new Font Editor tool within the Styles Pane](../inspect-styles/edit-fonts.md) |
| Off | [Enable automatic contrast issue reporting via the Issues panel](#webassembly-debugging-enable-dwarf-support) |
| Off | [Enable experimental cookie features](#enable-experimental-cookie-features) |
| **On** | [Enable experimental hide issues menu](#enable-experimental-hide-issues-menu) |
| Off | [Allow grouping and hiding of issues by IssueKind](#allow-grouping-and-hiding-of-issues-by-issuekind) |
| Off | [Enable Reporting API panel in the Application panel](#enable-reporting-api-panel-in-the-application-panel) |
| **On** | [Enable CSS \<Length\> authoring tool in the styles pane](#enable-css-length-authoring-tool-in-the-styles-pane) | 
| Off | [Log DevTools uncaught exceptions to Console](#log-devtools-uncaught-exceptions-to-console) |
| **On** | [Enable webhint](#enable-webhint) |
| **On** | [Show issues in Elements](#show-issues-in-elements) |
| **On** | [Enable Composited Layers in 3D View](#enable-composited-layers-in-3d-view) |
| Off | [Enable Network Console](#enable-network-console) |
| Off | [Focus Mode](#focus-mode) |
| **On** | [DevTools Tooltips](#devtools-tooltips) |
| **On** | [Detached Elements](#detached-elements) |
| **On** | [VS Code themes for the DevTools](#vs-code-themes-for-the-devtools) |
| **On** | [Open source files in Visual Studio Code](#open-source-files-in-visual-studio-code) |
|   |   |
|  | **The following experimental features are less stable.** |
| Off | [Ignore list for JavaScript frames on Timeline](#ignore-list-for-javascript-frames-on-timeline) |
| Off | [Input events on Timeline overview](#input-events-on-timeline-overview) |
| Off | [Live heap profile](#live-heap-profile) |
| Off | [Sampling heap profiler timeline](#sampling-heap-profiler-timeline) |
| **On** | [Enable keyboard shortcut editor](../customize/shortcuts.md#edit-the-keyboard-shortcut-for-a-devtools-action) |
| Off | [Timeline: invalidation tracking](#timeline-invalidation-tracking) |
| Off | [Timeline: show all events](#timeline-show-all-events) |
| Off | [Timeline: V8 Runtime Call Stats on Timeline](#timeline-v8-runtime-call-stats-on-timeline) |
| Off | [Timeline: Replay input events](#timeline-replay-input-events) |
| Off | [Enable dynamic Welcome content](#enable-dynamic-welcome-content) |

<!--| Off | [CSS Overview](../whats-new/2020/10/devtools#view-and-fix-color-contrast-issues-in-the-css-overview-tool) |-->
<!--| Off | Empty sourcemap auto-stepping |-->
<!--| Off | Source diff |-->

<!-- ====================================================================== -->
## Turning on experimental features

To turn on (or off) experimental features in Microsoft Edge:

1.  [Open DevTools](../open/index.md). In Microsoft Edge, click the **Settings and more** button, which is an ellipsis (three dots). Then hover over **More tools**, and click **Developer tools**.

1.  Click the **Settings** (gear) icon to open the [Settings](../customize/index.md#settings) pane of DevTools.

1.  On the left side of the **Settings** pane, click the **Experiments** section.

    :::image type="content" source="../media/experiments-devtools.msft.png" alt-text="The Experiments page in Settings" lightbox="../media/experiments-devtools.msft.png":::

1.  On the **Experiments** page, scroll through the list of all available experimental features. Click an empty checkbox to select each feature that you want to test. Some experiments are turned on by default.

1.  Click a selected checkbox to turn off any feature you do not want to test.

1.  Click the **X** in the upper right to close **Settings**.

1.  Click the **Reload DevTools** button.

> [!NOTE]
> Experimental features are constantly being updated and might cause performance issues. To turn off an experimental feature, open the **Experiments** page and clear the checkbox of the experimental feature that you want to turn off.


<!-- ordering for the h2 sections below: same order as in the Experiments page.  if change to a different ordering scheme, note that scheme here. -->


<!-- ====================================================================== -->
## Allow extensions to load custom stylesheets

Placeholder.


<!-- ====================================================================== -->
## Capture node creation stacks

Placeholder.


<!-- ====================================================================== -->
## Automatically pretty print in the Sources Panel

Placeholder.



<!-- ====================================================================== -->
## Protocol Monitor

Placeholder.


<!-- ====================================================================== -->
## Show CSP Violations view

Placeholder.


<!-- ====================================================================== -->
## Record coverage while performance tracing

Placeholder.


<!-- ====================================================================== -->
## Show option to take heap snapshot where globals are not treated as root

Placeholder.


<!-- ====================================================================== -->
## Source order viewer
<!-- on by default in 94 -->

**Source Order Viewer** is an experiment that displays the order of elements in the webpage source. The on-screen display order can differ from the order of the source, which confuses screen reader and keyboard users. Use the **Source Order Viewer** experiment to find the differences between on-screen display order and the order of the source.

To use the **Source Order Viewer**:
1.  Open the **Elements** tool.
1.  To the right of the **Styles** tab, click the **Accessibility** tab.
1.  Under the **Source Order Viewer** section, select the **Show Source Order** checkbox.
1.  Highlight any HTML element to display an overlay of the order in the webpage source.

:::image type="content" source="../media/experiments-source-order-viewer.msft.png" alt-text="Source Order Viewer in the Accessibility pane" lightbox="../media/experiments-source-order-viewer.msft.png":::

This experiment is available starting with Microsoft Edge version 86 and is turned on by default.

For more information see [Test keyboard support using the Source Order Viewer](../accessibility/test-tab-key-source-order-viewer.md)


<!-- ====================================================================== -->
## Enable back forward cache debugging support

Placeholder.


<!-- ====================================================================== -->
## Timeline: event initiators

Placeholder.


<!-- ====================================================================== -->
## Timeline: WebGL based flamechart

Placeholder.


<!-- ====================================================================== -->
## WebAssembly Debugging: Enable DWARF support

Placeholder.


<!-- ====================================================================== -->
## Enable automatic contrast issue reporting via the Issues panel

Placeholder.


<!-- ====================================================================== -->
## Enable experimental cookie features

Placeholder.


<!-- ====================================================================== -->
## Enable experimental hide issues menu

Placeholder.


<!-- ====================================================================== -->
## Allow grouping and hiding of issues by IssueKind

Placeholder.


<!-- ====================================================================== -->
## Enable Reporting API panel in the Application panel

Placeholder.


<!-- ====================================================================== -->
## Enable CSS \<length\> authoring tool in the Styles pane

[(http://goo.gle/length-feedback)](http://goo.gle/length-feedback)

Placeholder.


<!-- ====================================================================== -->
## Log DevTools uncaught exceptions to Console

Placeholder.


<!-- ====================================================================== -->
## Enable webhint
<!-- on by default in 94 -->

[webhint](https://webhint.io) is an open-source tool that provides real-time feedback for websites and local webpages.  The type of feedback provided by [webhint](https://webhint.io) includes:

*   Accessibility
*   Cross-browser compatibility
*   Security
*   Performance
*   Progressive Web Apps (PWAs)
*   Other common web development issues

The [webhint](https://webhint.io) experiment displays the webhint feedback in the [Issues](../issues/index.md) panel.  Select an issue, to display documentation about the solution and a list of the affected resources on your website.  Select a resource link to open the relevant **Network**, **Sources**, or **Elements** pane in DevTools.

:::image type="content" source="../media/experiments-webhint.msft.png" alt-text="webhint feedback in the Issues panel" lightbox="../media/experiments-webhint.msft.png":::

This experiment is available starting with Microsoft Edge version 85 and is turned on by default.


<!-- ====================================================================== -->
## Show issues in Elements

Placeholder.


<!-- ====================================================================== -->
## Enable Composited Layers in 3D View
<!-- on by default in 94 -->

You can visualize Layers alongside z-indexes and the Document Object Model (DOM). For a comprehensive visual debugging experience, the 3D View and Composited Layers are now combined.

This feature helps you debug without switching contexts as often. Reducing context-switching resolves a major pain point for developers. This feature makes it clear how the code you write affects your web app. 

To use **Composited Layers**, complete the following steps.

1.  On the **Drawer**, select the **3D View** tool.
1.  Open the **Composited Layers** pane.
1.  All of the painted layers of the app are displayed.  Try this feature with your own web apps.

:::image type="content" source="../media/experiments-layers.msft.png" alt-text="Composited Layers pane" lightbox="../media/experiments-layers.msft.png":::

This experiment is available starting with Microsoft Edge version 87 and is turned on by default.


<!-- ====================================================================== -->
## Enable Network Console
<!-- in Experiments as of 94, near bottom of main list -->

**Network Console** is the working title of an experiment to make synthetic network requests over HTTP.  You can use the **Network Console** experiment to send web API requests.

To use the **Network Console**, complete the following steps.

1.  Open the **Network** pane.
1.  Find the network request that you want to change and resend.
1.  Open the contextual menu (right-click), and select **Edit and Replay**.
1.  In the **Network Console**, edit the network request information.
1.  Click **Send**.

:::image type="content" source="../media/network-network-console.msft.png" alt-text="Network Console in the Console drawer" lightbox="../media/network-network-console.msft.png":::

This experiment is available starting with Microsoft Edge version 85.


<!-- ====================================================================== -->
## Focus Mode

Placeholder.


<!-- ====================================================================== -->
## DevTools Tooltips

Placeholder.


<!-- ====================================================================== -->
## Detached Elements

Memory leaks in web applications are a difficult to locate and repair.

The new Detached Elements panel in Microsoft Edge DevTools helps investigate and resolve a common source of memory leaks.

Memory leaks occur when the JavaScript code of the application retains an increasing number of objects in memory. The JavaScript code should release these objects so that the memory space can be reused by the browser.

<!-- ???more needed, probably with an image, Detached Elements tutorial is in progress??? -->


<!-- ====================================================================== -->
## VS Code themes for the DevTools

Placeholder.


<!-- ====================================================================== -->
## Open source files in Visual Studio Code
<!-- in Experiments as of 96, at end of main list -->

The **Open source files in Visual Studio Code** experiment replaces the code editor of the Sources tool with Visual Studio Code, for editing local files. When you turn on this experiment, Developer Tools detects when you edit a local file, and prompts you to select a folder to use as your Workspace.

When you select a folder to use as your Workspace, selecting any link to a file in DevTools opens the file in Visual Studio Code. This action previously opened the file in the code editor of the Sources tool in DevTools.

:::image type="content" source="../media/experiment-sources-in-code-editor-open.msft.png" alt-text="Selecting a file link in the Styles tool opens the file in Visual Studio Code" lightbox="../media/experiment-sources-in-code-editor-open.msft.png":::

Any edits that you make in DevTools now change the file on the hard drive and sync live with Visual Studio Code. You can read about setting up your workspace in [Opening source files in Visual Studio Code](../sources/opening-sources-in-vscode.md).

This experiment is available starting with Microsoft Edge version 96.


<!-- ====================================================================== -->
## Ignore list for JavaScript frames on Timeline

Placeholder.


<!-- ====================================================================== -->
## Input events on Timeline overview

Placeholder.


<!-- ====================================================================== -->
## Live heap profile

Placeholder.


<!-- ====================================================================== -->
## Sampling heap profiler timeline

Placeholder.


<!-- ====================================================================== -->
## Timeline: invalidation tracking

Placeholder.


<!-- ====================================================================== -->
## Timeline: show all events

Placeholder.


<!-- ====================================================================== -->
## Timeline: V8 Runtime Call Stats on Timeline

Placeholder.


<!-- ====================================================================== -->
## Timeline: Replay input events

Placeholder.


<!-- ====================================================================== -->
## Enable dynamic Welcome content

Placeholder.


<!-- ====================================================================== -->
## Previously Experimental features which are now regular features

<!-- todo: in a later PR, move these items from here into regular articles -->

These features have been promoted from experimental to regular features, and have been removed from **Settings** > **Experiments**.

*  [Turn on new CSS grid debugging features](../css/grid.md) - removed from experimental status starting with Microsoft Edge 89.

*  [Match keyboard shortcuts from Microsoft Visual Studio Code](../customize/shortcuts.md#match-keyboard-shortcuts-from-visual-studio-code) - removed from experimental status starting with Microsoft Edge 86.

*  [Turn on support to move tabs between panels](../customize/index.md) - removed from experimental status starting with Microsoft Edge 85.

*  [3D View](../3d-view/index.md) - removed from experimental status starting with Microsoft Edge 83.

*  The items in the following subsections.

### Enable + button tab menus to open more tools
<!-- not in Experiments 94 -->

This was an experiment starting with Microsoft Edge version 89, and is a regular feature as of version 94.<!-- which release changed this from Experimental?-->

You can now open more tools using the new **More Tools** (`+`) icon.  After you turn on the **Enable + button tab menus to open more tools** experiment and reload DevTools, a plus sign (`+`) displays to the right of the tab group at the top of the DevTools.  To display a list of other tools that you can add to the tab bar, select the **More Tools** (`+`) icon.

:::image type="content" source="../media/experiments-more-tools-button.msft.png" alt-text="More Tools in the top pane" lightbox="../media/experiments-more-tools-button.msft.png":::

### Enable Welcome tab
<!-- not in Experiments 94 -->

The Welcome tab was an experiment starting with Microsoft Edge version 89. It is a regular feature as of version 94.<!-- which release changed this from Experimental?-->

This experiment replaces the **What's New** tool with the new **Welcome** tool.  It displays a refreshed design for the following content.

*   Links to developer docs
*   Latest features
*   Release notes
*   Option to contact the Microsoft Edge DevTools team

The **Welcome** tool opens automatically after each update to Microsoft Edge.  To prevent the display of the **Welcome** tool after each update, clear the checkbox next to **Open tab after each update** under the **Welcome** tool title.

If you prefer the original **What's New** tool, navigate to [Settings](../customize/index.md#settings) > **Experiments** and remove the checkbox next to **Enable Welcome tab**.

:::image type="content" source="../media/experiments-welcome.msft.png" alt-text="Welcome tool" lightbox="../media/experiments-welcome.msft.png":::


<!-- ====================================================================== -->
### Enable new CSS Flexbox debugging features
<!-- not in Experiments page as of 94 -->

This was an experiment starting with Microsoft Edge version 89, and is a regular feature as of version 94.<!-- which release changed this from Experimental?-->

This feature provides many new visualizations to help you debug CSS Flexbox layouts.

#### Displaying persistent overlays on Flexbox layouts with the Inspect tool

The **Inspect** tool provides a quick way to identify and visualize CSS Flexbox layouts in a website by hovering on them with the mouse.  Select the **Inspect** (![Inspect](../media/inspect-icon.msft.png)) icon in the top-left corner of DevTools.  Then, while debugging the website, hover on a flex container to display outlines around the flex container.

:::image type="content" source="../media/flexbox-hover.msft.png" alt-text="Display Flexbox containers with the Inspect tool" lightbox="../media/flexbox-hover.msft.png":::

#### Displaying persistent overlays on Flexbox layouts

In Microsoft Edge version 89 or later, the CSS Flexbox feature offers the option to turn on persistent overlays on Flexbox layouts.  Persistent overlays provide the following benefits:
*   Persistent overlays remain visible on the webpage as you scroll, move your mouse, and use other features of the DevTools.
*   Multiple persistent overlays can be used at the same time, to allow you to review several Flexbox layouts at once.
*   Persistent overlays offer color configuration options.

To toggle persistent overlays on Flexbox layout, do either of the following:
*   Select the **Flexbox** oval icon next to any Flexbox container displayed in the DOM tree of the **Elements** tool.
*   Open the new **Layout** panel located in the **Elements** tool, and select the checkbox next to each Flexbox container you want to highlight.

:::image type="content" source="../media/flexbox-overlay.msft.png" alt-text="Flex icons and Layout panel in DevTools" lightbox="../media/flexbox-overlay.msft.png":::

#### Configuring persistent overlays

To configure options for persistent overlays for CSS grids or Flexbox layouts, use the **Layout** pane.  The **Layout** pane is located in the **Elements** tool next to the **Styles** and **Computed** panes.

:::image type="content" source="../media/flexbox-layout.msft.png" alt-text="Layout panel" lightbox="../media/flexbox-layout.msft.png":::
