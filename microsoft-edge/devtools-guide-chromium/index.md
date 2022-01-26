---
title: Overview of DevTools
description: Get to know the Microsoft Edge Developer Tools.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: devtools
ms.date: 09/23/2021
---
# Overview of DevTools

When you install Microsoft Edge, you not only get a browser, you also get Developer Tools, which provide a powerful way to inspect, debug, and even create web projects.  The Developer Tools that are shipped with Microsoft Edge are partly based on the tools in the Chromium open-source project, so you may already be familiar with some of these tools.  The Microsoft Edge Developer Tools are also called _Microsoft Edge DevTools_, or simply _DevTools_.

With DevTools, you can do the following:
*   Inspect and change the current webpage live in the browser.
*   Emulate how your product behaves on different devices and simulate a mobile environment, complete with different network conditions.
*   Inspect, tweak, and change the styles of elements in the webpage using live tools with a visual interface.
*   Debug your JavaScript using breakpoint debugging and with the live console.
*   Find accessibility, performance, compatibility, and security issues in your products and learn how to use DevTools to fix each.
*   Inspect the network traffic and review the location of the problems.
*   Inspect where the browser stored content in various formats.
*   Evaluate the performance of your product to find memory problems and rendering issues.
*   Use a development environment to sync changes in DevTools with the file system and from the web.


<!-- ====================================================================== -->
## Opening DevTools

To open DevTools, right-click any item on a webpage and then click **Inspect**.

*  Or, press `F12`, or press `Ctrl`+`Shift`+`I` (on Windows/Linux) or `Command`+`Option`+`I` (on macOS).

DevTools opens, with the **Elements** tool selected.

:::image type="content" source="./media/devtools-intro-inspect.msft.png" alt-text="To open DevTools, right-click any item on a webpage and then click Inspect.":::

:::image type="content" source="./media/devtools-intro-inspect-devtools-open.png" alt-text="DevTools opens, with the right-clicked element highlighted in the Elements tool.":::

There are two main ways to interact with DevTools.
*   Use the mouse.
*   Keyboard shortcuts.  These provide a quick way to access functionality and are needed for accessibility.  The Microsoft Edge DevTools team works hard to make all the tools available using the keyboard and assistive technologies such as screen readers.  See [Keyboard shortcuts](./shortcuts/index.md).

See also [Open DevTools](./open/index.md) - how to open the different features in DevTools.


<!-- ====================================================================== -->
## Changing where DevTools is docked in the browser

To change where DevTools is placed within the browser window:

1. Click the **Customize and control DevTools** (![Customize and control DevTools](media/customize-and-control-devtools-icon-light-mode.png)) button.

1. To the right of **Placement of DevTools relative to the page** (**Dock side**), select a layout option.

:::image type="content" source="./media/devtools-intro-docking-menu.msft.png" alt-text="Screenshot of the Dock side menu in DevTools.":::

**Dock to left** or **Dock to right** keeps DevTools side-by-side with your web product, and is excellent when you [Emulate mobile devices (Device Emulation)](device-mode/index.md).  The **Dock to left** and **Dock to right** options work best with high-resolution displays.

**Dock to right** is the default placement of DevTools:

:::image type="content" source="media/devtools-intro-docking-right.msft.png" alt-text="Screenshot of DevTools docked to the right.":::

**Dock to left** is another side-by-side option:

:::image type="content" source="media/devtools-intro-docking-left.msft.png" alt-text="Screenshot of DevTools docked to the left.":::

**Dock to bottom** helps you when you don't have enough horizontal display space, or you want to debug long text in the DOM or **Console**:

:::image type="content" source="media/devtools-intro-docking-bottom.msft.png" alt-text="Screenshot of DevTools docked to the bottom.":::

**Undock into separate window** helps you work with several monitors or if you need to work on a full-screen app:

:::image type="content" source="media/devtools-intro-docking-own-window.msft.png" alt-text="Screenshot of DevTools undocked into a separate window.":::

See also [Change DevTools placement (Undock, Dock to bottom, Dock to left)](customize/placement.md).


<!-- ====================================================================== -->
## The main tools on the toolbar

DevTools give you an amazing amount of power to inspect, debug, and change the web product currently displayed in the browser.  Most of the tools display the changes live.  Live updates make the tools incredibly useful to refine the appearance and navigation or functionality of a web project without the need to refresh or build it.  DevTools also allow you to change web-based third-party products on your computer.


### Main tools (tabs) on the toolbar

There are two toolbars: the main toolbar at the top of DevTools, and the **Drawer** at the bottom if you select `Esc`.  The main toolbar normally has the following tabs (or tools, or panels):

*  **Welcome**.  Includes information about the new features of DevTools, how to contact the team, and provides information about certain features.  This tool is placed first.

Next, the following tools are always present on the toolbar and cannot be closed:
*  **Elements**.  Allows you to edit or inspect HTML and CSS.  You can edit in the tool while displaying the changes live in the browser.
*  [Console](console/index.md).  Allows you to display and filter log messages.  Log messages are automated logs of the browser like network requests and developer-generated logs.  You can also run JavaScript directly in the **Console** in the context of the current window or frame.
*  [Sources](./sources/index.md).  A code editor and JavaScript debugger.  You can edit projects, maintain snippets, and debug your current project.
*  [Network](./network/index.md).  Allows you to monitor and inspect requests or responses from the network and browser cache.  You can filter requests and responses to fit your needs and simulate different network conditions.

Finally, these more specialized tools (tabs) are on the toolbar by default:
* **Performance**
* **Memory**
* **Application**
* **Security**
* **Lighthouse**


### Tool, tab, or panel

Often the words "tool", "tab", or "panel" can be used interchangeably.  In the command menu, the tools are called _panels_; for example, the **Elements** tool is called the **Elements** panel.  To switch to the **Elements** tool, you select the **Elements** tab.  There's a **More Tools** button and list, and there's a **More tabs** button on the toolbar, both of which are used to select tools, which are also called _panels_.


### Sections of the main toolbar

The main toolbar in DevTools has the following sections:
*  The Inspect tool.
*  The Device Emulation tool.
*  Tabs for each open tool.  By default, these are Welcome, Elements, Console, Sources, Network, Performance, and several more.
*  The **More tabs** (`>>`) button.
*  The **More Tools** (`+`) button.
*  The **JavaScript errors** counter.
*  The **Issues** counter.
*  The **Settings** button.
*  The **Send feedback** button.
*  The **Customize and control DevTools** (![Customize and control DevTools](media/customize-and-control-devtools-icon-light-mode.png)) button.
*  The **Close** (`X`) button to close DevTools.

:::image type="content" source="./media/devtools-intro-menu-bar.msft.png" alt-text="The main toolbar of DevTools, with labels that identify the items on the toolbar." lightbox="./media/devtools-intro-menu-bar.msft.png":::

*   When you select the **Inspect** tool, you can select an element on the current webpage.  While the **Inspect** tool is active, you can move your mouse over different parts of the webpage to get detailed information about page elements, along with a multi-color overlay that shows the layout dimensions, padding, and margin of the page element.

    :::image type="content" source="./media/devtools-intro-inspect-tool.msft.png" alt-text="The Inspect tool while hovering over with the first headline of this article.":::

*   The [Device Emulation](device-mode/index.md) tool displays the current web product in an emulated device mode.  The **Device Emulation** tool allows you to run and test how your product reacts when you resize the browser.  It also gives you an estimation of the layout and behavior on a mobile device.  See [Emulate mobile devices (Device Emulation)](device-mode\index.md).

    :::image type="content" source="./media/devtools-intro-device-emulation.msft.png" alt-text="DevTools display of this article in an emulated mobile phone.":::

*  The main toolbar contains tabs for tools that are used in various scenarios.  You can customize each of the tools, and the content of a tool can change based on the context.  To show a tool that is on a tab that's hidden, select the **More tabs** (`>>`) button.   To add a tool to the main toolbar or to the drawer's toolbar, select the **More tools** (`+`) button.  Each tool is introduced below.

*  Next to the Tools tab group are optional error and issues shortcuts.  The shortcuts display when JavaScript errors or issues occur on the current webpage.  The **Open Console to view # errors, # warnings** (**JavaScript Errors**) button displays a red circle with an `X`, followed by the number of JavaScript errors.  To open the [Console](console/index.md) and learn about the error, select the **JavaScript Errors** button.  The **Open Issues to view # issues** (**Issues**) button is a blue message icon followed by the number of issues.  To open the [Issues](./issues/index.md) tool, select the **Issues** button.

*  The **Settings** button displays a gear icon.  To open DevTools **Settings** webpage, select the **Settings** button.  The **Settings** webpage displays a menu to change **Preferences**, turn on **Experiments**, and much more.

*  The **Send Feedback** button displays a torso with a chat bubble next to it.  To open the **Send Feedback** dialog, select the **Send Feedback** button.  The **Send Feedback** dialog allows you to enter information to describe what happened and automatically includes a screenshot.  Use **Send Feedback** to connect with DevTools team to report problems, issues, or suggest ideas.

*  The **Customize and control DevTools** (![Customize and control DevTools](media/customize-and-control-devtools-icon-light-mode.png)) button opens a dropdown menu that enables you to define where to dock DevTools, search, open different tools, and more.


<!-- ====================================================================== -->
## List of all the tools

There are default tools (panels with tabs on a toolbar), some tools that aren't a panel with a tab on the toolbar, and some optional tools that you can open on a toolbar (as tabs).

<!-- todo: tableize, with 1 link per tool.  ok to leave cells blank after 50% of cells in column 2 & 3 are filled in -->

### Default tools

* Welcome
* Elements
* Console
* Sources
* Network
* Performance
* Memory
* Application
* Security
* Lighthouse
* CSS Overview

### Non-tab tools

* Inspect tool
* Device Emulation
* Command Menu

### Non-default tools

* 3D View
* Animations
* Changes
* Coverage
* Detached Elements
* Developer Resources
* Issues
* JavaScript Profiler
* Layers
* Media
* Memory Inspector
* Network conditions
* Network request blocking
* Performance monitor
* Quick source
* Rendering
* Search
* Sensors
* WebAudio
* WebAuthn
 
<!-- | Tool | Purpose | Article |
|---|---|---|
| Welcome |  |  |
| Elements |  |  |
| Console |  |  |
| Sources |  |  |
| Network |  |  |
| Performance |  |  |
| Memory |  |  |
| Application |  |  |
| Security |  |  |
| Lighthouse |  |  |
| 3D View |  |  |
| Animations |  |  |
| Changes |  |  |
| Coverage |  |  |
| Developer Resources |  |  |
| Issues |  |  |
| JavaScript Profiler |  |  |
| Layers |  |  |
| Media |  |  |
| Memory Inspector |  |  |
| Network conditions |  |  |
| Network request blocking |  |  |
| Performance monitor |  |  |
| Quick source |  |  |
| Rendering |  |  |
| Search |  |  |
| Sensors |  |  |
| WebAudio |  |  |
| WebAuthn |  |  |
| Inspect |  |  | -->


<!-- ====================================================================== -->
## About Panel and Drawer tools

The tools that are listed in the **More Tools** can be displayed either as a Panel tool (on the main toolbar) or a Drawer tool (on the Drawer toolbar).  In the **Command Menu**, each of these tools is labelled as either a **Panel** tool or as a **Drawer** tool.  But you can add them to either the main toolbar or the Drawer toolbar, and you can use any of the following methods to open them or move them between the two toolbars.

Use the **More Tools** (**+**) menu to select any of the Panel tools or Drawer tools.  A **More Tools** menu appears in multiple places:

*  In the upper right of DevTools, on the main toolbar, click the **Customize and control DevTools** (![Customize and control DevTools](media/customize-and-control-devtools-icon-light-mode.png)) button, hover over the **More tools** command, and then select a tool.

*  On the main toolbar at the top of DevTools (where _Panel_ tools usually go).

*  On the **Drawer** toolbar (where _Drawer_ tools usually go).


| Task | Steps |
| --- | --- |
| Open a tool on the main toolbar at the top of DevTools | On the main toolbar at the top of DevTools, click **More Tools** (**+**) and then select a tool. |
| Open a tool on the Drawer toolbar | When DevTools has focus, press **Esc** to show the Drawer.  On the Drawer toolbar, click **More Tools** (**+**) and then select a tool. |
| Move a tool from the Drawer toolbar to the main Toolbar | When DevTools has focus, press **Esc** to show the Drawer.  On the Drawer toolbar, right-click the tool's tab, and then select **Move to top**. |
| Move a tool from the main toolbar to the drawer Toolbar | On the main toolbar, right-click the tool's tab, and then select **Move to bottom**. |
| Open a tool in its default toolbar | When DevTools has focus, open the **Command Menu** by pressing `Control`+`Shift`+`P` (Windows, Linux) or `Command`+`Shift`+`P` (macOS).  Type the name of the tool, and then select the tool. |

For an overview of Panel tools, Drawer tools, and a few other tools such as the Inspect tool and Device Emulator, see [Overview of DevTools](index.md).

In addition to Panel tools and Drawer tools, DevTools includes the following tools:
*  The **Inspect** tool.  See [Use the Inspect tool to detect accessibility issues by hovering over the webpage](accessibility/test-inspect-tool.md).
*  The **Device Emulator**.  See [Emulate mobile devices (Device Emulation)](device-mode/index.md).
*  The **Command Menu**.  See [Run commands with the Microsoft Edge DevTools Command Menu](command-menu/index.md).


<!-- ====================================================================== -->
## Power tip: Use the command menu

DevTools provides lots of features and functionality to use with your web product.  You can access the different parts of DevTools in many ways, but often a fast way is to use the command menu.

In the command menu, the tools are called "panels"; for example, the **Elements** tool is called the **Elements** panel.  To switch to the **Elements** tool, you select the **Elements** tab.

To open the command menu, do either of the following:

*  Press `Control`+`Shift`+`P` (Windows, Linux) or `Command`+`Shift`+`P` (macOS).

*  Click the **Customize and control DevTools** (![Customize and control DevTools](media/customize-and-control-devtools-icon-light-mode.png)) button, and then select **Run command**.

:::image type="content" source="./media/devtools-intro-command-menu.msft.png" alt-text="Screenshot of the command menu in DevTools.":::

The command menu allows you to type commands to display, hide, or run features in DevTools.  With the command menu open, enter the word **changes**, and then select **Drawer: Show Changes**.

The **Changes** tool opens, which is useful when you edit CSS.  In this case, the command menu provides a fast alternative to selecting **More Tools** (...) and then selecting **Changes**, or editing a `.js` file in the **Sources** tool, then right-clicking and selecting **Local modifications**.

The command menu displays the options after you type `changes`:

:::image type="content" source="./media/devtools-intro-command-menu-show-changes.msft.png" alt-text="Command menu displays the options after you type changes.":::

DevTools with the **Changes** tool open:

:::image type="content" source="./media/devtools-intro-showing-changes.msft.png" alt-text="DevTools with the Changes tool open.":::

See also [Run commands with the Microsoft Edge DevTools Command menu](command-menu/index.md).


<!-- ====================================================================== -->
## Customizing DevTools

You can customize DevTools to meet your needs for the way you work.  To change settings, do any of the following:
*   Select **Settings** (the gear icon on the top right).
*   Select `F1` or `?`.

In the **Preferences** section, you can change several parts of DevTools.  For example, you can use the **Match the browser language** setting to use the same language in DevTools that is used in your browser.  For another example, use the **Theme** setting to change the color theme of DevTools.

:::image type="content" source="media/devtools-intro-all-settings.msft.png" alt-text="Screenshot of all the settings in DevTools.":::

You can also change the settings of advanced features, such as:
*   [Workspaces](./workspaces/index.md).
*   Filter library code with the **Ignore List**.
*   Define the **Devices** you want to include in the device simulation and test mode.  For more information, see [Emulate mobile devices (Device Emulation)](device-mode/index.md).
*   Select a network **Throttling** profile.
*   Define simulated **Locations**.
*   Customize keyboard **Shortcuts**.  For example, to use the same shortcuts in DevTools as in Visual Studio Code, select **Match shortcuts from preset** > **Visual Studio Code**.

    :::image type="content" source="./media/devtools-intro-match-keys.msft.png" alt-text="Screenshot of all the keyboard shortcuts and the menu to match each to the shortcuts in Visual Studio Code.":::


<!-- ====================================================================== -->
## Trying experimental features

The DevTools team provides new features as _experiments_ in DevTools.  You can turn each of the experiments on or off.  To see the full list of [Experimental features](experimental-features/index.md), in DevTools, select **Settings** (the gear icon), and then select **Experiments**.

To preview the [latest features coming to DevTools](./whats-new/2021/02/devtools.md), download [Microsoft Edge Canary](https://www.microsoftedgeinsider.com/download), which builds nightly.


<!-- ====================================================================== -->
## See also

*   [Get started with HTML and the DOM](beginners/html.md)
*   [Inspect and change the current webpage](dom/index.md)
*   [Emulate how your product behaves on different devices](device-mode/index.md)
*   [Inspect, tweak, and change the styles of elements](./inspect-styles/edit-fonts.md)
*   [Debug your JavaScript](./javascript/index.md)
*   [Live console](console/index.md)
*   [Accessibility, performance, compatibility, and security issues](./issues/index.md)
*   [Inspect the network traffic](./network/index.md)
*   [Inspect where the browser stored content](./storage/sessionstorage.md)
*   [Evaluate the performance](evaluate-performance/index.md)
*   [Memory problems](memory-problems/index.md)
*   [Rendering issues](./rendering-tools/index.md)
*   [Use a development environment](./sources/index.md)
*   [Sync changes in DevTools with the file system](./workspaces/index.md)
*   [Override files from the web](./javascript/overrides.md)
