---
title: Experimental features
description: The latest experimental features in Microsoft Edge DevTools.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
no-loc: ["Enable webhint"]
ms.date: 03/09/2023
---
# Experimental features

<!-- 
Policies to keep this page comprehensive and maintainable: 
*  Favor Canary over Stable re: sequencing.
*  Include a visible h2 section for every checkbox that's in public-facing Microsoft Edge DevTools > Experiments page.  If no info, write a tautology as a starting point.  Add as needed, each month.
*  Keep h2 sections in same order as DevTools > Settings > Experiments.
*  In the heading and UI steps, keep the checkbox label UI string as it appears in the UI; do not revise or "fix" it.
*  Don't change h2 text, that might break a link from UI.
*  When a checkbox is removed from all the channels, delete its section.

Steps to maintain this page monthly: For latest Canary, and for latest Stable:
1. Go to edge://settings/help, update if needed.
1. In DevTools, select Settings > Preferences > Restore Defaults > Reload DevTools.
1. In DevTools, go to Settings > Experiments.
1. In the "Experiments which are turned on by default" section below, update the Edge Canary list & Edge Stable list at top.
   *  In that section, link down to the h2; do not link to a different article.
1. Make sure the article has an h2 for each checkbox.
1. In each h2 section, update the presence or absence of "not", and update the version #:
This checkbox is|is not present in Microsoft Edge Canary 123.
This checkbox is|is not present in Microsoft Edge Stable 123.
-->

Microsoft Edge DevTools provide access to experimental features that are still in development.  This article lists and describes the experimental features that are in either:
*  The latest version of the Canary preview channel of Microsoft Edge.
*  The latest version of the Stable release of Microsoft Edge.

All [channels of Microsoft Edge](/deployedge/microsoft-edge-channels) have experimental features. You can get the latest experimental features by using the [Microsoft Edge Canary channel](https://www.microsoftedgeinsider.com/welcome?channel=canary). To view the full list available in your version of Microsoft Edge, see the **Settings** > **Experiments** page in DevTools.

<!-- no Warning formatting, because UI already contains red "WARNING" at top -->
These experiments could be unstable or unreliable and may require you to restart DevTools.


<!-- ====================================================================== -->
## Experiments which are turned on by default

The following experimental features are turned on by default. You can use these features right away, without changing any settings. You can turn off these default experimental features, if needed.

<!-- listed in order of the Settings > Experiments pane -->

**Turned on by default in Microsoft Edge Canary 113:**
* [Automatically pretty print in the Sources Panel](#automatically-pretty-print-in-the-sources-panel)
* [Source order viewer](#source-order-viewer)
* [Enable keyboard shortcut editor](#enable-keyboard-shortcut-editor)
* [Display more precise changes in the Changes tab](#display-more-precise-changes-in-the-changes-tab)
* [Enable CSS Authoring hints for inactive rules, deprecated properties, etc](#enable-css-authoring-hints-for-inactive-rules-deprecated-properties-etc)
* [Enable color picking outside the browser window](#enable-color-picking-outside-the-browser-window)
* [Disable the deprecated 'Color format' setting (requires reloading DevTools)](#disable-the-deprecated-color-format-setting-requires-reloading-devtools)
* [Enable webhint](#enable-webhint)
* [Show issues in Elements](#show-issues-in-elements)
* [Open source files in Visual Studio Code](#open-source-files-in-visual-studio-code)
* [View console.profile() results in the Performance panel for Node.js](#view-consoleprofile-results-in-the-performance-panel-for-nodejs)
* [Enable re-designed Breakpoint Sidebar Pane in the Sources Panel](#enable-re-designed-breakpoint-sidebar-pane-in-the-sources-panel)

**Turned on by default in Microsoft Edge Stable 110:**
* [Automatically pretty print in the Sources Panel](#automatically-pretty-print-in-the-sources-panel)
* [Source order viewer](#source-order-viewer)
* [Enable keyboard shortcut editor](#enable-keyboard-shortcut-editor)
* [Display more precise changes in the Changes tab](#display-more-precise-changes-in-the-changes-tab)
* [Enable CSS Authoring hints for inactive rules, deprecated properties, etc.](#enable-css-authoring-hints-for-inactive-rules-deprecated-properties-etc)
* [Enable color picking outside the browser window](#enable-color-picking-outside-the-browser-window)
* [Disable the deprecated 'Color format' setting (requires reloading DevTools)](#disable-the-deprecated-color-format-setting-requires-reloading-devtools)
* [Enable webhint](#enable-webhint)
* [Show issues in Elements](#show-issues-in-elements)
* [Open source files in Visual Studio Code](#open-source-files-in-visual-studio-code)
* [Enable re-designed Breakpoint Sidebar Pane in the Sources Panel](#enable-re-designed-breakpoint-sidebar-pane-in-the-sources-panel)


<!-- ====================================================================== -->
## Turning an experiment on or off

Experimental features are constantly being updated and might cause performance issues.  This is one reason you might want to turn off an experiment.

To turn an experiment on or off in Microsoft Edge:

1. To open DevTools, right-click the webpage, and then select **Inspect**.  Or, press `Ctrl`+`Shift`+`I` (Windows, Linux) or `Command`+`Option`+`I` (macOS).  DevTools opens.

1. In DevTools, on the main toolbar, click the **Settings** (![Settings icon](../media/settings-gear-icon-light-theme.png)) button.  Or, press `Shift`+`?`.

1. On the left side of the **Settings** panel, select the **Experiments** page.

   ![The Experiments page in Settings](../media/experiments-devtools.msft.png)

1. On the **Experiments** page, select or clear the checkbox for an experiment. Some experiments are turned on (selected) by default.

1. Click **Close** (![The Close icon in DevTools > Settings](../media/settings-close-icon-light-theme.png)) in the upper right to close DevTools **Settings**.

1. Click the **Reload DevTools** button.


<!-- ====================================================================== -->
## Restoring defaults for which experiments are selected

To restore the default settings for which experimental features are turned on:

1. To open DevTools, right-click the webpage, and then select **Inspect**.  Or, press `Ctrl`+`Shift`+`I` (Windows, Linux) or `Command`+`Option`+`I` (macOS).  DevTools opens.

1. In DevTools, on the main toolbar, click the **Settings** (![Settings icon](../media/settings-gear-icon-light-theme.png)) button.  Or, press `Shift`+`?`.  The **Settings** panel opens, with the **Preferences** page selected.

1. At the bottom of the **Preferences** page, click the **Restore defaults and refresh** button, and then click **Close** (![The Close icon in DevTools > Settings](../media/settings-close-icon-light-theme.png)).

<!-- For more information about customizing settings, see [Settings](../customize/index.md#settings) in _Customize Microsoft Edge DevTools_. -->


<!-- ====================================================================== -->
## Filtering the experiments

You can filter the experimental features by text included in the title.

1. To open DevTools, right-click the webpage, and then select **Inspect**.  Or, press `Ctrl`+`Shift`+`I` (Windows, Linux) or `Command`+`Option`+`I` (macOS).  DevTools opens.

1. In DevTools, on the main toolbar, click the **Settings** (![Settings icon](../media/settings-gear-icon-light-theme.png)) button.  Or, press `Shift`+`?`.  The **Settings** panel opens, with the **Preferences** page selected.

1. On the left side of the **Settings** panel, select the **Experiments** page.

1. Click in the **Filter** text box and enter text, such as **timeline**.  As you type, only the matching checkboxes are shown in the **Experiments** page.

1. To end filtering, clear the **Filter** text box.


<!-- ====================================================================== -->
## Providing feedback about the experiments

We're eager to hear your feedback about experimental features.  To share feedback with us, [Contact the Microsoft Edge DevTools team](../contact.md).

One of the UI experiments adds a new way to provide feedback: when the **Focus Mode** experiment is turned on, at the bottom of the **Activity Bar**, select **Help** (![the Help icon in the Activity Bar in Focus Mode](../media/help-icon-of-focus-mode.png)) > **Feedback**.


<!-- ====================================================================== -->
## List of experiments

The experiments checkboxes that appear in the latest version of the Canary preview channel of Microsoft Edge are listed below.  The Stable release is also noted, following behind the addition or removal of checkboxes in Canary.


<!-- ============================================================================================================================================ -->
<!-- top of list of checkboxes -->
<!-- ============================================================================================================================================ -->


<!-- ====================================================================== -->
## Allow extensions to load custom stylesheets

Some Microsoft Edge Add-ons can define custom color themes for DevTools. If you install an add-on with a theme, you need to enable the **Allow extensions to load custom stylesheets** experiment to view the add-on themes.

Status:
*  This checkbox is present in Microsoft Edge Canary 113.
*  This checkbox is present in Microsoft Edge Stable 110.


<!-- ====================================================================== -->
## Capture node creation stacks

To capture JavaScript stack traces when DOM nodes are added to the DOM at runtime, enable this experiment. The captured stack traces are displayed in the **Stack Trace** pane of the **Elements** panel.

Status:
*  This checkbox is present in Microsoft Edge Canary 113.
*  This checkbox is present in Microsoft Edge Stable 110.


<!-- ====================================================================== -->
## Automatically pretty print in the Sources Panel

When this experiment is turned on, when you display a minified file in the Sources panel, the file is opened in a single tab in the Sources panel, pretty-printed.

When this experiment is turned off, a UI prompt with a button asks you whether to pretty-print the file.  The file is opened in an additional tab which has an appended suffix of **:formatted**.

*  A _minified_ file is concatenated into a single long line.
*  In contrast, _pretty print_ presents the contents of a file in an indented, more human-readable format.

Status:
*  This checkbox is present in Microsoft Edge Canary 113.
*  This checkbox is present in Microsoft Edge Stable 110.


<!-- ====================================================================== -->
## Protocol Monitor

DevTools communicates with the inspected page using the DevTools protocol.

To monitor the messages sent and received by DevTools to debug the inspected page:

1. To open DevTools, right-click the webpage, and then select **Inspect**.  Or, press `Ctrl`+`Shift`+`I` (Windows, Linux) or `Command`+`Option`+`I` (macOS).  DevTools opens.

1. In DevTools, on the main toolbar, click the **Settings** (![Settings icon](../media/settings-gear-icon-light-theme.png)) button.  Or, press `Shift`+`?`.  The **Settings** panel opens, with the **Preferences** page selected.

1. On the left side of the **Settings** panel, select the **Experiments** page.

1. Select the **Protocol Monitor** checkbox, and then click **Close** (![The Close icon in DevTools > Settings](../media/settings-close-icon-light-theme.png)) to close **Settings**.

1. Open the **Command Menu** (`Ctrl`+`Shift`+`P`), and then type **protocol** in the text box.

1. Select **Show Protocol monitor**.  The message appears: "One or more settings have changed which requires a reload to take effect."

1. Click the **Reload DevTools** button that appears next to the message.

1. The **Protocol monitor** tool is displayed in the **Drawer** at the bottom of DevTools.

Status:
*  This checkbox is present in Microsoft Edge Canary 113.
*  This checkbox is present in Microsoft Edge Stable 110.


<!-- ====================================================================== -->
## Show CSP Violations view

Adds the **CSP Violations** tool, which displays any Content Security Policy (CSP) violations that are detected on the inspected webpage.

![The CSP Violations tool](index-images/csp-violations-tool.png)

Status:
*  This checkbox is present in Microsoft Edge Canary 113.
*  This checkbox is present in Microsoft Edge Stable 110.


<!-- ====================================================================== -->
## Record coverage while performance tracing

Records coverage while performance tracing.
<!-- todo: need text -->

Status:
*  This checkbox is present in Microsoft Edge Canary 113.
*  This checkbox is present in Microsoft Edge Stable 110.


<!-- ====================================================================== -->
## Show option to expose internals in heap snapshots

_new as of Microsoft Edge 105_

Whether to display a checkbox to expose internals in heap snapshots in the **Memory** tool.
<!-- todo: need text -->

See also:
* [Record heap snapshots using the Memory tool](../memory-problems/heap-snapshots.md)

Status:
*  This checkbox is present in Microsoft Edge Canary 113.
*  This checkbox is present in Microsoft Edge Stable 110.


<!-- ====================================================================== -->
## Source order viewer

This checkbox is being removed.  The Source Order Viewer is now a regular feature, not an experiment.  Whether the checkbox is checked or unchecked makes no difference; the Source Order Viewer feature appears in DevTools either way.

See also:
* [Test keyboard support using the Source Order Viewer](../accessibility/test-tab-key-source-order-viewer.md)

Status:
*  This checkbox is present in Microsoft Edge Canary 113.
*  This checkbox is present in Microsoft Edge Stable 110.


<!-- ====================================================================== -->
## Enable keyboard shortcut editor

Whether to enable editing keyboard shortcuts.

See also:
* [Customize keyboard shortcuts](../customize/shortcuts.md)

Status:
*  This checkbox is present in Microsoft Edge Canary 113.
*  This checkbox is present in Microsoft Edge Stable 110.


<!-- ====================================================================== -->
## Timeline: event initiators

Whether to include event initiators in the Timeline.
<!-- todo: need text -->

Status:
*  This checkbox is present in Microsoft Edge Canary 113.
*  This checkbox is present in Microsoft Edge Stable 110.


<!-- ====================================================================== -->
## WebAssembly Debugging: Enable DWARF support

Enables DWARF support for WebAssembly debugging.  See [Improved WebAssembly debugging](../whats-new/2019/12/devtools.md#improved-webassembly-debugging) in _What's new in DevTools (Microsoft Edge 80)_.
<!-- todo: need text -->

Status:
*  This checkbox is present in Microsoft Edge Canary 113.
*  This checkbox is present in Microsoft Edge Stable 110.


<!-- ====================================================================== -->
## Console: Resolve variable names in expressions using source maps

Uses source maps to automatically map original variable names to minified variable names when evaluating expressions in the Console.

See [Map the processed code to your original source code, for debugging](../javascript/source-maps.md).

Status:
*  This checkbox is present in Microsoft Edge Canary 113.
*  This checkbox is present in Microsoft Edge Stable 110.


<!-- ====================================================================== -->
## Enable new Advanced Perceptual Contrast Algorithm (APCA) replacing previous contrast ratio and AA/AAA guidelines

The [Advanced Perceptual Contrast Algorithm (APCA)](https://w3c.github.io/silver/guidelines/methods/Method-font-characteristic-contrast.html) replaces the [AA](https://www.w3.org/WAI/WCAG21/quickref#contrast-minimum)/[AAA](https://www.w3.org/WAI/WCAG21/quickref#contrast-enhanced) guidelines contrast ratio in the Color Picker.  The Color Picker is used in the **Styles** tab in the **Elements** tool.

APCA is a new way to compute contrast.  It is based on modern research on color perception.  Compared to AA/AAA guidelines, APCA is more context-dependent.  The contrast is calculated based on the following spatial properties of the text, color, and context.

*  Spatial properties of text that include font weight and size.
*  Spatial properties of color that include perceived contrast between text and background.
*  Spatial properties of context that include ambient light, surroundings, and intended purpose.

See also:
* [New color contrast calculation - Advanced Perceptual Contrast Algorithm (APCA)](../whats-new/2021/01/devtools.md#new-color-contrast-calculation---advanced-perceptual-contrast-algorithm-apca) in _What's New in DevTools (Microsoft Edge 89)_.
* [Change colors with the Color Picker](../css/reference.md#change-colors-with-the-color-picker) in _CSS features reference_.
* [Test text-color contrast using the Color Picker](../accessibility/color-picker.md)

Status:
*  This checkbox is present in Microsoft Edge Canary 113.
*  This checkbox is present in Microsoft Edge Stable 110.


<!-- ====================================================================== -->
## Enable full accessibility tree view in the Elements panel

Adds a button in the **Elements** tool which toggles between the DOM tree and the accessibility tree.

Status:
*  This checkbox is present in Microsoft Edge Canary 113.
*  This checkbox is present in Microsoft Edge Stable 110.


<!-- ====================================================================== -->
## Enable the Font Editor tool within the Styles pane
<!-- keep "Enable the" in heading, though check box label says "Enable new Font Editor tool within the Styles pane".
omit period, even though checkbox label has period -->

You can use the visual [Font Editor](../inspect-styles/edit-fonts.md) to edit fonts.  Use it define fonts and font characteristics.  The visual **Font Editor** helps you do the following:

*  Switch between units for different font properties
*  Switch between keywords for different font properties
*  Convert units
*  Generate accurate CSS code

To use the visual **Font Editor**:

1. To open DevTools, right-click the webpage, and then select **Inspect**.  Or, press `Ctrl`+`Shift`+`I` (Windows, Linux) or `Command`+`Option`+`I` (macOS).  DevTools opens.

1. In DevTools, on the main toolbar, select the **Elements** tab.  If the **Elements** tab isn't visible, click the **More tabs** (![More tabs icon](../media/more-tabs-icon-light-theme.png)) button, or else the **More Tools** (![More Tools icon](../media/more-tools-icon-light-theme.png)) button.

1. In the **Styles** tab, select the **Font Editor** icon.

   ![The visual Font Editor pane is highlighted](../media/font-editor-open.msft.png)

Some browser channels have the checkbox label **Enable new Font Editor tool within the Styles pane.**

See also:
* [Edit CSS font styles and settings in the Styles pane](../inspect-styles/edit-fonts.md)

Status:
*  This checkbox is present in Microsoft Edge Canary 113.
*  This checkbox is present in Microsoft Edge Stable 110.


<!-- ====================================================================== -->
## Enable automatic contrast issue reporting via the Issues Panel

Enables automatic contrast issue reporting in the **Issues** tool.
<!-- todo: need text -->

Status:
*  This checkbox is present in Microsoft Edge Canary 113.
*  This checkbox is present in Microsoft Edge Stable 110.


<!-- ====================================================================== -->
## Enable experimental cookie features

Enables experimental cookie features.
<!-- todo: need text -->

Status:
*  This checkbox is present in Microsoft Edge Canary 113.
*  This checkbox is present in Microsoft Edge Stable 110.


<!-- ====================================================================== -->
## Display more precise changes in the Changes tab

See [More precise changes in the Changes tab](https://developer.chrome.com/blog/new-in-devtools-98/#changes).

Status:
*  This checkbox is present in Microsoft Edge Canary 113.
*  This checkbox is present in Microsoft Edge Stable 110.


<!-- ====================================================================== -->
## Sync CSS changes in the Styles pane

Whether to sync CSS changes in the **Styles** tab in the **Elements** tool.
<!-- todo: need text -->

Status:
*  This checkbox is present in Microsoft Edge Canary 113.
*  This checkbox is present in Microsoft Edge Stable 110.


<!-- ====================================================================== -->
## Local overrides for response headers

Whether to use local overrides for response headers.
<!-- todo: need text -->

Status:
*  This checkbox is present in Microsoft Edge Canary 113.
*  This checkbox is present in Microsoft Edge Stable 110.


<!-- ====================================================================== -->
## Enable CSS Authoring hints for inactive rules, deprecated properties, etc.
<!-- keep "etc." in heading, to match UI label -->

_new as of Microsoft Edge 105_

Whether to enable CSS authoring hints in the **Styles** panel of the **Elements** tool to display information tooltips next to inactive or deprecated properties.

This feature provides help when writing or inspecting CSS in the **Styles** panel.  Small information icons appear next to CSS properties that are inactive or deprecated.  An inactive property is one that applies correctly to an element but has no effect on it (for example, `width:100px` applied to an inline element has no effect).

Status:
*  This checkbox is present in Microsoft Edge Canary 113.
*  This checkbox is present in Microsoft Edge Stable 110.


<!-- ====================================================================== -->
## Enable color picking outside the browser window

Allows you to move the mouse cursor when it's an eyedropper tool, over anywhere on your screen, not just within the Microsoft Edge window.

In the **Elements** tool, in the **Styles** tab, click on any color preview.  The Color Picker opens.  Click the **Toggle color picker** (![Eyedropper icon button](index-images/eyedropper-color-picker-icon.png)) button.  The mouse cursor becomes an eyedropper.  Click anywhere on your monitor to select a color.

<!-- https://developer.chrome.com/blog/new-in-devtools-102/#color-picker -->

See also:
* [Change colors with the Color Picker](../css/reference.md#change-colors-with-the-color-picker) in _CSS features reference_

Status:
*  This checkbox is present in Microsoft Edge Canary 113.
*  This checkbox is present in Microsoft Edge Stable 110.


<!-- ====================================================================== -->
## Group sources into Authored and Deployed trees

_new as of Microsoft Edge 104_
<!-- This experiment was shown in the What's New 104 video [Microsoft Edge | What's New in DevTools 104](https://www.youtube.com/watch?v=0_ZprFX8x0I&t=129s) at 2:09. -->

Controls whether to group resources into separate **Authored** and **Deployed** trees in the **Page** tab of the **Sources** tool.  This feature in the **Sources** tool allows you to group source files in two folders depending on whether these are:
*  Original source files (authored, that is, files with your local edits).
*  Production files (deployed files that are on the web server after compiling and bundling the source files).

Status:
*  This checkbox is present in Microsoft Edge Canary 113.
*  This checkbox is present in Microsoft Edge Stable 110.


<!-- ====================================================================== -->
## Hide ignore-listed code in sources tree view

_new as of Microsoft Edge 106_


Status:
*  This checkbox is present in Microsoft Edge Canary 113.
*  This checkbox is present in Microsoft Edge Stable 110.


<!-- ====================================================================== -->
## Highlight important DOM properties in the Object Properties viewer

_new as of Microsoft Edge 105_

Selecting this checkbox causes important DOM properties to be highlighted in the **Properties** tab in tools such as the **Elements** tool, for the DOM tree element that's currently selected.  This new experiment makes major properties easier to see.  Some properties appear in bold, and others appear in bold and have a star icon next to them.

This highlighting is useful because in JavaScript, objects inherit from parent objects, which themselves inherit from other ancestors, sometimes amounting to hundreds of properties.  This experiment helps you find the main properties.

The Object Properties viewer is in several tools, including **Elements**, **Sources**, **Console**, and **Network**.  It provides a tree view of properties of objects.


#### In the Elements tool

To see the Object Properties viewer in the **Elements** tool:

1. Right-click an item in a webpage and then select **Inspect**.  DevTools opens, with the page element selected in the DOM tree of the **Elements** tool.

1. In the **Elements** tool, select the **Properties** tab, which is grouped with the **Styles** tab.

   The **Properties** tab contains the list of properties for the selected element.


#### In the Sources tool

To see the Object Properties viewer in the **Sources** tool:

1. Open a `.js` file.

1. Set a breakpoint on a line of code in the `.js` file.

1. Pause the debugger at that line by running the code on the webpage.

   Object properties are displayed in the **Scope** section in the right-hand sidebar.  See [View and edit properties and variables](../javascript/reference.md#view-and-edit-properties-and-variables) in _JavaScript debugging features_.


Status:
*  This checkbox is present in Microsoft Edge Canary 113.
*  This checkbox is present in Microsoft Edge Stable 110.


<!-- ====================================================================== -->
## Disable the deprecated 'Color format' setting (requires reloading DevTools)

_new as of Microsoft Edge 110_

In DevTools **Settings** > **Preferences**, when you hover over the **Information** (**i**) icon on the grayed-out **Color format** drop-down list, the tooltip reads: "This setting is deprecated because it is incompatible with modern color spaces.  To reenable it, you can disable the according experiment."

The **Color format** drop-down list was previously enabled by default.  This control enables you to choose what color format you prefer to see in the **Styles** tab in the **Elements** tool by default. So, for example, if the CSS code specified `color: red;` but you had set the **hex** color format as your preference, then you would see `color: #f00;` in the **Styles** tab instead.

Recently, CSS has gained new color formats that can be used to describe colors in color spaces that weren't available before.  This auto-switch of the color format can't work anymore, because if the source code contains a color in a new color space, then it isn't always possible to convert this color in one of the older color formats, because the color spaces don't match 1-to-1.

In **Settings** > **Experiments**, this **Disable the deprecated 'Color format' setting** checkbox is selected by default, and its effect is to grey out the **Color format** drop-down list in the **Settings** > **Preferences** page.  After a while, this experiment checkbox and the **Color format** drop-down list in **Preferences** will be removed.
For now, these controls enable you to disable the experiment and re-activate the **Color format** drop-down list.

Status:
*  This checkbox is present in Microsoft Edge Canary 113.
*  This checkbox is present in Microsoft Edge Stable 110.


<!-- ====================================================================== -->
## Log DevTools uncaught exceptions to Console

Controls whether to log DevTools uncaught exceptions in the **Console** tool.
<!-- todo: need text -->

Status:
*  This checkbox is present in Microsoft Edge Canary 113.
*  This checkbox is present in Microsoft Edge Stable 110.


<!-- ====================================================================== -->
## Enable webhint

[webhint](https://webhint.io) is an open-source tool that provides real-time feedback for websites and local webpages.  The type of feedback provided by [webhint](https://webhint.io) includes:

*  Accessibility
*  Cross-browser compatibility
*  Security
*  Performance
*  Progressive Web Apps (PWAs)
*  Other common web development issues

The [webhint](https://webhint.io) experiment displays the webhint feedback in the [Issues](../issues/index.md) panel.  Select an issue to display documentation about the solution and a list of the affected resources on your website.  Select a resource link to open the relevant **Network**, **Sources**, or **Elements** pane in DevTools.

![webhint feedback in the Issues panel](../media/experiments-webhint.msft.png)

Status:
*  This checkbox is present in Microsoft Edge Canary 113.
*  This checkbox is present in Microsoft Edge Stable 110.


<!-- ====================================================================== -->
## Show issues in Elements

Enable this experiment to view syntax errors under HTML in the **DOM** view of the **Elements** tool. For more information, see [Wavy underlines highlight code issues and improvements in Elements tool](../whats-new/2021/04/devtools.md#wavy-underlines-highlight-code-issues-and-improvements-in-elements-tool).

Status:
*  This checkbox is present in Microsoft Edge Canary 113.
*  This checkbox is present in Microsoft Edge Stable 110.


<!-- ====================================================================== -->
## Focus Mode

Focus Mode is a new user interface for DevTools.  Focus Mode is designed to simplify and streamline the DevTools UI, without compromising its feature set.

Focus Mode replaces the main row of tabs with an **Activity Bar**, which is a compact toolbar with distinctive icons.  The **Activity Bar** makes it possible to pin, rearrange, and open your favorite tools, for quick access.  The **Activity Bar** also provides access to user settings, help, and other features.

Focus Mode also provides a **Quick View** list, to open a second tool alongside the tool that's already selected in the **Activity Bar**.

See [Reduce the complexity of DevTools with Focus Mode](focus-mode.md).

Status:
*  This checkbox is present in Microsoft Edge Canary 113.
*  This checkbox is present in Microsoft Edge Stable 110.


<!-- ====================================================================== -->
## Open source files in Visual Studio Code

The **Open source files in Visual Studio Code** experiment replaces the code editor of the Sources tool with Visual Studio Code, for editing local files. When you turn on this experiment, Developer Tools detects when you edit a local file, and prompts you to select a folder to use as your Workspace.

When you select a folder to use as your Workspace, selecting any link to a file in DevTools opens the file in Visual Studio Code.  In previous versions of Microsoft Edge, this action opened the file in the code editor of the Sources tool in DevTools.

![Selecting a file link in the Styles tool opens the file in Visual Studio Code](../media/experiment-sources-in-code-editor-open.msft.png)

Any edits that you make in DevTools now change the file on the hard drive and sync live with Visual Studio Code. You can read about setting up your workspace in [Opening source files in Visual Studio Code](../sources/opening-sources-in-vscode.md).

Status:
*  This checkbox is present in Microsoft Edge Canary 113.
*  This checkbox is present in Microsoft Edge Stable 110.


<!-- ============================================================================================================================================ -->
<!-- >> [!WARNING]
> These experiments are particularly unstable. Enable at your own risk. -->


<!-- ====================================================================== -->
## Ignore List for JavaScript frames on Timeline

Whether to include the Ignore list for JavaScript frames on the Timeline.
<!-- todo: need text -->

Status:
*  This checkbox is present in Microsoft Edge Canary 113.
*  This checkbox is present in Microsoft Edge Stable 110.


<!-- ====================================================================== -->
## Input events on Timeline overview

Controls whether to include Input events on the Timeline overview.
<!-- todo: need text -->

Status:
*  This checkbox is present in Microsoft Edge Canary 113.
*  This checkbox is present in Microsoft Edge Stable 110.


<!-- ====================================================================== -->
## Live heap profile

Controls whether to live-update the heap profile.
<!-- todo: need text -->

See also:
* [Record heap snapshots using the Memory tool](../memory-problems/heap-snapshots.md)

Status:
*  This checkbox is present in Microsoft Edge Canary 113.
*  This checkbox is present in Microsoft Edge Stable 110.


<!-- ====================================================================== -->
## Sampling heap profiler timeline

Controls whether to show the Sampling heap profiler timeline.
<!-- todo: need text -->

See also:
* [Record heap snapshots using the Memory tool](../memory-problems/heap-snapshots.md)

Status:
*  This checkbox is present in Microsoft Edge Canary 113.
*  This checkbox is present in Microsoft Edge Stable 110.


<!-- ====================================================================== -->
## Timeline: invalidation tracking

Controls whether to show invalidation tracking on the Timeline.

Status:
*  This checkbox is present in Microsoft Edge Canary 113.
*  This checkbox is present in Microsoft Edge Stable 110.


<!-- ====================================================================== -->
## Timeline: show all events

Controls whether to show all events on the Timeline.

Status:
*  This checkbox is present in Microsoft Edge Canary 113.
*  This checkbox is present in Microsoft Edge Stable 110.


<!-- ====================================================================== -->
## Timeline: V8 Runtime Call Stats on Timeline

Controls whether to show v8 runtime call stats on the Timeline.

Status:
*  This checkbox is present in Microsoft Edge Canary 113.
*  This checkbox is present in Microsoft Edge Stable 110.


<!-- ====================================================================== -->
## Timeline: Replay input events

Controls whether to replay input events on the Timeline.

Status:
*  This checkbox is present in Microsoft Edge Canary 113.
*  This checkbox is present in Microsoft Edge Stable 110.


<!-- ====================================================================== -->
## View console.profile() results in the Performance panel for Node.js

_new as of Microsoft Edge 109_

Displays `console.profile()` results in the **Performance** tool for Node.js.

`console.profile()` can be used in the DevTools **Console** (or in your code) to start a JavaScript profile, and then you can use `console.profileEnd()` to terminate it.  Once done, you can see your profile recording in the **JavaScript Profiler** tool.

This is a programmatic way to record JavaScript execution, which can be useful in certain performance debugging situations.

When DevTools is used to debug processes that are running in Node.js, this experiment makes whatever `console.profile` generates available to the **Performance** Tool.

Status:
*  This checkbox is present in Microsoft Edge Canary 113.
*  This checkbox is present in Microsoft Edge Stable 110.

See also:
* [JavaScript Profiler tool](../javascript-profiler/javascript-profiler-tool.md)


<!-- ====================================================================== -->
## View system nodes of CPUProfile in the Performance panel

_new as of Microsoft Edge 112_

Whether to display system nodes of CPUProfile in the **Performance** tool.
<!-- todo: need text -->

See also:
* [Performance features reference](/microsoft-edge/devtools-guide-chromium/evaluate-performance/reference.md)
* [JavaScript: Tools](/microsoft-edge/devtools-guide-chromium/rendering-tools/index.md#javascript-tools) in _Analyze runtime performance_.

Status:
*  This checkbox is present in Microsoft Edge Canary 113.
*  This checkbox is not present in Microsoft Edge Stable 110.


<!-- ====================================================================== -->
## Enable instrumentation breakpoints

Whether to halt at test breakpoints.  This experiment makes breakpoints more reliable.

See also:
* [Enable synchronization on instrumentation breakpoints](https://chromium-review.googlesource.com/c/devtools/devtools-frontend/+/3470237)
* [The first time source files are loaded, breakpoints might not trigger](https://bugs.chromium.org/p/chromium/issues/detail?id=1133307&q=%22instrumentation%20breakpoints%22&can=2)

Status:
*  This checkbox is present in Microsoft Edge Canary 113.
*  This checkbox is present in Microsoft Edge Stable 110.


<!-- ====================================================================== -->
## Enable re-designed Breakpoint Sidebar Pane in the Sources Panel
<!-- preserve heading = UI label -->

_new as of Microsoft Edge 106_

Whether to show the re-designed version of the **Breakpoint Sidebar** pane in the **Sources** tool.

See also:
* [Pause code with breakpoints](../javascript/breakpoints.md)

Status:
*  This checkbox is present in Microsoft Edge Canary 113.
*  This checkbox is present in Microsoft Edge Stable 110.


<!-- ====================================================================== -->
## Enable Preloading Status Panel in Application panel

_new as of Microsoft Edge 110_

In certain situations, for example when using the Speculation Rules API, Microsoft Edge prefetches and prerenders the next page that a user will visit, to display that page faster.

This experiment enables the **Prefetching & Prerendering** section in the **Application** Tool. The new section displays the list of pages that the browser prefetched and prerendered and why, which gives you a way to debug your code.

To learn more about prerendering pages, see [Prerender pages in Chrome for instant page navigations](https://developer.chrome.com/blog/prerender-pages/).

Selecting this experiment checkbox adds the **Preloading** section within the **Application** tool.  The **Preloading** section of the list of pages contains a **Prefetching & Prerendering** page, which contains columns:
* **Started at**
* **Type**
* **Trigger**
* **URL**
* **Status**

![The Preloading page in the Application tool](./index-images/preloading-page-of-application-tool.png)

<!--
Select an element for more details.
todo: how select element, where?  that instruction is prominent in UI, so clarify here
-->

Status:
*  This checkbox is present in Microsoft Edge Canary 113.
*  This checkbox is present in Microsoft Edge Stable 110.
