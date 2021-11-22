---
description: The latest experimental features in Microsoft Edge DevTools
title: Experimental features
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 11/19/2021
ms.topic: conceptual
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, experiment
no-loc: ["Enable webhint", "Enable Network Console", "Source Order Viewer", "Enable Composited Layers in 3D View", "Enable new Font Editor tool within the Styles pane", "Enable new CSS Flexbox debugging features", "Enable + button tab menus to open more tools", "Enable Welcome tab", "3D View", "Turn on support to move tabs between panels", "Match keyboard shortcuts in the DevTools to Microsoft Visual Studio Code", "Edit keyboard shortcuts for any action in the DevTools", "Turn on new CSS grid debugging features", "Emulation: Support dual screen mode"]
---
# Experimental features

Microsoft Edge DevTools provide access to experimental features that are still in development. This article describes only experimental features found in Microsoft Edge.

All [channels of Microsoft Edge](/deployedge/microsoft-edge-channels) have experimental features. You can get the latest experimental features by using the [Microsoft Edge Canary channel](https://www.microsoftedgeinsider.com/welcome?channel=canary). To view the full list available in your version of Microsoft Edge, see the **Settings** > **Experiments** page in DevTools.


<!-- ====================================================================== -->
## Experimental features which are turned on by default

As of Microsoft Edge 96, the following experimental features are turned on by default. You can use these features right away, without changing any settings. You can turn off these default experimental features, if needed.

<!-- listed in order of the Settings > Experiments pane -->
*  Source order viewer
*  Enable back-forward cache debugging support
*  [Emulation: Support dual screen mode](../device-mode/dual-screen-and-foldables.md) is turned on by default starting with Microsoft Edge 90.
*  Enable experimental hide issues menu
*  Enable webhint
*  Show issues in Elements
*  Enable Composited Layers in 3D View
*  DevTools Tooltips
*  VS Code themes for the DevTools <!-- literal checkbox label -->
*  Open source files in Visual Studio Code
*  Enable keyboard shortcut editor - [Edit keyboard shortcuts for any action in the DevTools](../customize/shortcuts.md#edit-the-keyboard-shortcut-for-a-devtools-action) is turned on by default starting with Microsoft Edge 89.
*  Enable dynamic Welcome content

<!-- Remove following feature per Rachel Weil in PR 1570 edit, all other mentions deleted -->
<!-- *  Enable CSS \<length\> authoring tool in the Styles pane -->

<!-- *  Detached Elements - in 96 this checkmark is only present when a corpnet account is hooked up -->

<!-- *  Enable dynamic Welcome content - turned on by default in v97 & v98, not v96 -->


<!-- ====================================================================== -->
## Turning on experimental features

To turn experimental features on or off in Microsoft Edge:

1.  [Open DevTools](../open/index.md). Click the **Settings and more** button, which is an ellipsis (three dots). Then hover over **More tools**, and click **Developer tools**. Or press **Control + Shift + I**.

1.  Click the **Settings** (gear) icon to open the [Settings](../customize/index.md#settings) pane of DevTools.

1.  On the left side of the **Settings** pane, click the **Experiments** section.

    :::image type="content" source="../media/experiments-devtools.msft.png" alt-text="The Experiments page in Settings" lightbox="../media/experiments-devtools.msft.png":::

1.  On the **Experiments** page, scroll through the list of all available experimental features. Click an empty checkbox to select each feature that you want to test. Some experiments are turned on by default.

1.  Click a selected checkbox to turn off any feature you do not want to test.

1.  Click the **X** in the upper right to close **Settings**.

1.  Click the **Reload DevTools** button.

> [!NOTE]
> Experimental features are constantly being updated and might cause performance issues. To turn off an experimental feature, open the **Experiments** page and clear the checkbox of the experimental feature that you want to turn off.


<!-- ====================================================================== -->
## Restore defaults and refresh

You can restore the default Experimental features settings.

1.  [Open DevTools](../open/index.md).  To do this, in Microsoft Edge, select **Settings and more** (...) > **More tools** > **Developer tools**.  Or press `Ctrl`+`Shift`+`I` (on Windows/Linux) or `Command`+`Option`+`I` (on macOS).
 
1.  Click the **Settings** (gear) icon to open the [Settings](../customize/index.md#settings) pane of DevTools.

1.  Click **Preferences** > **Restore defaults and refresh**.



<!-- ====================================================================== -->
## Filtering the experiments

You can filter the experimental features by text included in the title.

1.  Open **Settings** > **Experiments**.

1.  Click in the **Filter** text box and enter text such as **Timeline**.

1.  The displayed features are limited to those including **Timeline** in the title.

1.  Clear the text box to end filtering.


<!-- ====================================================================== -->
## Providing feedback

We're eager to hear your feedback about experimental features.
  
* Send us your feedback by tweeting [@EdgeDevTools](https://twitter.com/edgedevtools).
  
* [Contact the Microsoft Edge DevTools team](../contact.md).

* With the **Focus Mode** experiment turned on, at the bottom of the **Activity Bar**, select **Help** (![the Help icon in the Activity Bar in Focus Mode](../media/help-icon-of-focus-mode.png)) > **Feedback**, to show the **Send feedback** window.


> [!WARNING]
> These experiments could be unstable or unreliable and may require you to restart DevTools.


<!-- ====================================================================== -->
<!-- Keep h2 sections in same order as Microsoft Edge DevTools > Experiments page. -->
<!-- Include an h2 section for every checkbox that's in Microsoft Edge DevTools > Experiments page, many of them commented out.  Keep in mind which version the rendered page targets.  If a checkbox has been removed, move its section to the bottom section of this page. -->


<!-- ====================================================================== -->
## Allow extensions to load custom stylesheets
<!-- present in 96, 98 -->

Some Microsoft Edge Add-ons can define custom color themes for DevTools. If you install an add-on with a theme, you need to enable the **Allow extensions to load custom stylesheets** experiment to view the add-on themes.


<!-- ====================================================================== -->
## Capture node creation stacks
<!-- present in 96, 98 -->

Enable this experiment to capture JavaScript stack traces when DOM nodes are added to the DOM at runtime. The captured stack traces are displayed in the **Stack Trace** pane of the **Elements** panel.


<!-- ====================================================================== -->
## Automatically pretty print in the Sources Panel
<!-- present in 96, 98 -->

Enable this experiment to turn on by default the pretty print behavior for documents displayed in the Sources panel. Pretty print presents the contents of a file in an indented and more human readable format.


<!-- ====================================================================== -->
## Protocol Monitor
<!-- present in 96, 98 -->

DevTools communicates with the inspected page using the DevTools protocol.

1.  Enable the **Protocol Monitor** experiment to monitor the messages sent and received by DevTools to debug the inspected page.

1.  After enabling the experiment, restart DevTools.

1.  Open the **Command Menu** (**Control + Shift + P**), and type **Protocol Monitor** in the text box.

1.  Select the **Show Protocol monitor** Drawer suggestion. The Protocol monitor drawer displays at the bottom of the DevTools panel.


<!-- ====================================================================== -->
<!-- ## Show CSP Violations view -->
<!-- present in 96, 98 -->

<!-- Needs content. -->


<!-- ====================================================================== -->
<!-- ## Record coverage while performance tracing -->
<!-- present in 96, 98 -->

<!-- Needs content. -->


<!-- ====================================================================== -->
<!-- ## Show option to take heap snapshot where globals are treated as root -->
<!-- present in 96, 98 -->

<!-- Needs content. -->


<!-- ====================================================================== -->
## Source order viewer
<!-- present in 96, 98 -->

**Source Order Viewer** is an experiment that displays the order of elements in the webpage source. The on-screen display order can differ from the order of the source, which confuses screen reader and keyboard users. Use the **Source Order Viewer** experiment to find the differences between on-screen display order and the order of the source.

To use the **Source Order Viewer**:
1.  Open the **Elements** tool.
1.  To the right of the **Styles** tab, click the **Accessibility** tab.
1.  Under the **Source Order Viewer** section, select the **Show Source Order** checkbox.
1.  Highlight any HTML element to display an overlay of the order in the webpage source.

:::image type="content" source="../media/experiments-source-order-viewer.msft.png" alt-text="Source Order Viewer in the Accessibility pane" lightbox="../media/experiments-source-order-viewer.msft.png":::

This experiment is available starting with Microsoft Edge version 86 and is turned on by default.

For more information, see [Test keyboard support using the Source Order Viewer](../accessibility/test-tab-key-source-order-viewer.md)


<!-- ====================================================================== -->
## Enable back-forward cache debugging support
<!-- present in 96, 98 -->

Back-forward cache, or *bfcache*. Makes navigating through your browsing history faster by saving snapshots of visited web pages in memory.

Certain web pages can't be cached. Enable this experiment to add the **Back-forward Cache** section to the **Application** panel.  Enabling back-forward cache debugging provides information about web pages that can't be stored in `bfcache`.


<!-- ====================================================================== -->
<!-- ## WebAssembly Debugging: Enable DWARF support -->
<!-- present in 96, 98 -->

<!-- Needs content. -->


<!-- ====================================================================== -->
## Emulation: Support dual screen mode
<!-- present in 96, 98 -->

For more information, see [Emulation: Support dual screen mode](../device-mode/dual-screen-and-foldables.md).


<!-- ====================================================================== -->
<!-- ## Enable new Advanced Perceptual Contrast Algorithm (APCA) replacing previous contrast ratio and AA/AAA guidelines -->
<!-- present in 96, 98 -->

<!-- Needs content. -->


<!-- ====================================================================== -->
<!-- ## Enable full accessibility tree view in the Elements panel -->
<!-- present in 96, 98 -->

<!-- Needs content. -->


<!-- ====================================================================== -->
## Enable new Font Editor tool within the Styles pane

<!-- present in 96, 98 -->

You can now use the new visual [Font Editor](../inspect-styles/edit-fonts.md) to edit fonts.  Use it define fonts and font characteristics.  The visual **Font Editor** helps you do the following:

*   Switch between units for different font properties
*   Switch between keywords for different font properties
*   Convert units
*   Generate accurate CSS code

To use the new visual **Font Editor**:
1.  Open the **Elements** tool.
1.  Open the **Styles** pane.
1.  Select the **Font Editor** icon.

For more information about the new visual **Font Editor**, see [Edit CSS font styles and settings in the Styles pane in DevTools](../inspect-styles/edit-fonts.md).

:::image type="complex" source="../media/font-editor-open.msft.png" alt-text="The visual Font Editor pane is highlighted" lightbox="../media/font-editor-open.msft.png":::
   The visual **Font Editor** pane is highlighted
:::image-end:::

This experiment is available starting with Microsoft Edge version 89.

For more information, see [Edit CSS font styles and settings in the Styles pane in DevTools](../inspect-styles/edit-fonts.md).


<!-- ====================================================================== -->
<!-- ## Enable automatic contrast issue reporting via the Issues Panel -->
<!-- present in 96, 98 -->

<!-- Needs content. -->


<!-- ====================================================================== -->
<!-- ## Enable experimental cookie features -->
<!-- present in 96, 98 -->

<!-- Needs content. -->


<!-- ====================================================================== -->
## Enable Reporting API panel in the Application panel
<!-- present in 96, 98 -->

Use the Reporting API to catch certain errors such as security violations or deprecated API calls. These errors happen when users visit your site and are sent to a server endpoint. Enable this experiment to add the **Reporting API** section in the **Application** panel, which lists all of the reports sent to the endpoint.

<!-- ====================================================================== -->
<!-- ## Log DevTools uncaught exceptions to Console -->
<!-- present in 96, 98 -->

<!-- Needs content. -->


<!-- ====================================================================== -->
## Enable webhint
<!-- present in 96, 98 -->

[webhint](https://webhint.io) is an open-source tool that provides real-time feedback for websites and local webpages.  The type of feedback provided by [webhint](https://webhint.io) includes:

*   Accessibility
*   Cross-browser compatibility
*   Security
*   Performance
*   Progressive Web Apps (PWAs)
*   Other common web development issues

The [webhint](https://webhint.io) experiment displays the webhint feedback in the [Issues](../issues/index.md) panel.  Select an issue to display documentation about the solution and a list of the affected resources on your website.  Select a resource link to open the relevant **Network**, **Sources**, or **Elements** pane in DevTools.

:::image type="content" source="../media/experiments-webhint.msft.png" alt-text="webhint feedback in the Issues panel" lightbox="../media/experiments-webhint.msft.png":::

This experiment is available starting with Microsoft Edge version 85 and is turned on by default.


<!-- ====================================================================== -->

## Show issues in Elements
<!-- present in 96, 98 -->

Enable this experiment to view syntax errors under HTML in the **DOM** view of the **Elements** tool. For more information, see [Wavy underlines highlight code issues and improvements in Elements tool](../whats-new/2021/04/devtools.md#wavy-underlines-highlight-code-issues-and-improvements-in-elements-tool).

<!-- ====================================================================== -->
## Enable Composited Layers in 3D View
<!-- present in 96, 98 -->

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
<!-- present in 96, 98 -->

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

The Focus Mode experiment provides an **Activity Bar**, which is a compact horizontal or vertical toolbar that keeps the DevTools UI clean and works well with a smaller window.  Pin your current main tools to the Activity Bar.

:::image type="content" source="../media/experimental-features/focus-mode.png" alt-text="Focus Mode, including the Activity Bar.":::

See also [DevTools: Focus Mode UI](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/DevTools/FocusMode/explainer.md) in the `MSEdgeExplainers` repo.


<!-- ====================================================================== -->
## DevTools Tooltips
<!-- present in 96, 98 -->

Enable this experiment to view tooltips for all the different tools and panes in DevTools. For more information, see [Learn about DevTools with informative tooltips](../whats-new/2021/04/devtools.md#learn-about-devtools-with-informative-tooltips).

<!-- ====================================================================== -->
## Detached Elements
<!-- present in 96, 98 -->

Memory leaks in web applications are a difficult to locate and repair.

The new Detached Elements panel in Microsoft Edge DevTools helps investigate and resolve a common source of memory leaks.

Memory leaks occur when the JavaScript code of the application retains an increasing number of objects in memory. The JavaScript code should release these objects so that the memory space can be reused by the browser.

<!-- ???more needed, probably with an image, Detached Elements tutorial is in progress??? -->


<!-- ====================================================================== -->
## VS Code themes for the DevTools
<!-- present in 96, 98 -->

Enable this experiment to use Visual Studio themes in DevTools. For more information, see [Apply color themes to DevTools](../customize/theme.md).


<!-- ====================================================================== -->
## Open source files in Visual Studio Code
<!-- present in 96, 98 -->

The **Open source files in Visual Studio Code** experiment replaces the code editor of the Sources tool with Visual Studio Code, for editing local files. When you turn on this experiment, Developer Tools detects when you edit a local file, and prompts you to select a folder to use as your Workspace.

When you select a folder to use as your Workspace, selecting any link to a file in DevTools opens the file in Visual Studio Code. This action previously opened the file in the code editor of the Sources tool in DevTools.

:::image type="content" source="../media/experiment-sources-in-code-editor-open.msft.png" alt-text="Selecting a file link in the Styles tool opens the file in Visual Studio Code" lightbox="../media/experiment-sources-in-code-editor-open.msft.png":::

Any edits that you make in DevTools now change the file on the hard drive and sync live with Visual Studio Code. You can read about setting up your workspace in [Opening source files in Visual Studio Code](../sources/opening-sources-in-vscode.md).

This experiment is available starting with Microsoft Edge version 96.


<!-- ====================================================================== -->
<!-- >> [!WARNING]
> These experiments are particularly unstable. Enable at your own risk. -->


<!-- ====================================================================== -->
<!-- ## Ignore List for JavaScript frames on Timeline
<!-- present in 96, 98 -->

<!-- Needs content. -->


<!-- ====================================================================== -->
<!-- ## Input events on Timeline overview -->
<!-- present in 96, 98 -->

<!-- Needs content. -->


<!-- ====================================================================== -->
<!-- ## Live heap profile -->
<!-- present in 96, 98 -->

<!-- Needs content. -->


<!-- ====================================================================== -->
<!-- ## Sampling heap profiler timeline -->
<!-- present in 96, 98 -->

<!-- Needs content. -->


<!-- ====================================================================== -->
<!-- ## Enable keyboard shortcut editor -->
<!-- present in 96, 98 -->

<!-- Needs content. -->


<!-- ====================================================================== -->
<!-- ## Enable dynamic Welcome content -->
<!-- present in 96, 98 -->

<!-- Needs content. -->


<!-- ====================================================================== -->
<!-- todo: move these sections into regular articles
## Previously Experimental features which are now regular features

These features have been promoted from experimental to regular features, and have been removed from **Settings** > **Experiments**.

*  [Turn on new CSS grid debugging features](../css/grid.md) - removed from experimental status starting with Microsoft Edge 89.

*  [Match keyboard shortcuts from Microsoft Visual Studio Code](../customize/shortcuts.md#match-keyboard-shortcuts-from-visual-studio-code) - removed from experimental status starting with Microsoft Edge 86.

*  [Turn on support to move tabs between panels](../customize/index.md) - removed from experimental status starting with Microsoft Edge 85.

*  [3D View](../3d-view/index.md) - removed from experimental status starting with Microsoft Edge 83.

*  The items in the following subsections.

### Enable + button tab menus to open more tools

This experiment started with Microsoft Edge version 89, and is a regular feature as of version 94.

You can now open more tools using the new **More Tools** (`+`) icon.  After you turn on the **Enable + button tab menus to open more tools** experiment and reload DevTools, a plus sign (`+`) appears to the right of the tab group at the top of DevTools.  To display a list of other tools that you can add to the tab bar, click the **More Tools** (`+`) icon.

:::image type="content" source="../media/experiments-more-tools-button.msft.png" alt-text="More Tools in the top pane." lightbox="../media/experiments-more-tools-button.msft.png":::

### Enable Welcome tab

The Welcome tab was an experiment starting with Microsoft Edge version 89. It is a regular feature as of version 94.

This experiment replaces the **What's New** tool with the new **Welcome** tool.  It displays a refreshed design for the following content.

*   Links to developer docs
*   Latest features
*   Release notes
*   Option to contact the Microsoft Edge DevTools team

The **Welcome** tool opens automatically after each update to Microsoft Edge.  To prevent the display of the **Welcome** tool after each update, clear the checkbox next to **Open tab after each update** under the **Welcome** tool title.

:::image type="content" source="../media/experiments-welcome.msft.png" alt-text="Welcome tool" lightbox="../media/experiments-welcome.msft.png":::

### Enable new CSS Flexbox debugging features

This was an experiment starting with Microsoft Edge version 89, and is a regular feature as of version 94.

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
-->
