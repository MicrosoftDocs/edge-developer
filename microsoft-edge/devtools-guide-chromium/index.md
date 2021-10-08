---
description: Get to know the Microsoft Edge (Chromium) Developer Tools
title: Microsoft Edge Developer Tools overview
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 08/06/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: devtools
keywords: microsoft edge, web development, f12 tools, devtools
---
# Microsoft Edge Developer Tools overview

When you install Microsoft Edge (Chromium), you get a browser.  Also, you get a powerful way to inspect, debug, and even create web projects.  The Developer Tools shipped with the browser are based on the tools in the Chromium open-source project, so you may already be familiar with the tools.  The `Microsoft Edge Developer Tools` are also referred to as `Microsoft Edge DevTools`, or simply `DevTools`.

Here are some of the main tasks you can do with DevTools:
*   [Inspect and change the current webpage][DevtoolsGuideDomIndex] live in the browser.
*   [Emulate how your product behaves on different devices][DevtoolsGuideDeviceModeIndex] and simulate a mobile environment, complete with different network conditions.
*   [Inspect, tweak, and change the styles of elements][DevtoolsGuideInspectStylesEditFonts] in the webpage using live tools with a visual interface.
*   [Debug your JavaScript][DevtoolsGuideJavascriptIndex] using breakpoint debugging and with the [live console][DevtoolsGuideConsoleIndex].
*   Find [accessibility, performance, compatibility, and security issues][DevtoolsGuideIssuesIndex] in your products and learn how to use DevTools to fix each.
*   [Inspect the network traffic][DevtoolsGuideNetworkIndex] and review the location of the problems.
*   [Inspect where the browser stored content][DevtoolsGuideStorageSessionstorage] in various formats.<!-- Is the link meant to be local or session storage? -->
*   [Evaluate the performance][DevtoolsGuideEvaluatePerformanceIndex] of your product to find [memory problems][DevtoolsGuideMemoryProblemsIndex] and [rendering issues][DevtoolsGuideRenderingToolsIndex].
*   [Use a development environment][DevtoolsGuideSourcesIndex] to [sync changes in DevTools with the file system][DevtoolsGuideWorkspacesIndex] and [override files][DevtoolsGuideJavascriptOverrides] from the web.


<!-- ====================================================================== -->
## Opening DevTools

To open and explore DevTools, do any of the following:

*   Hover on any element on the webpage, open the context menu (right-click), and then select **Inspect**.  DevTools opens, with the **Elements** tool selected.
*   Select `F12`.
*   Select `Ctrl`+`Shift`+`I` on Windows/Linux or `Command`+`Option`+`I` on macOS.

:::row:::
   :::column span="":::
      :::image type="complex" source="./media/devtools-intro-inspect.msft.png" alt-text="Select Inspect from the context menu on any element" lightbox="./media/devtools-intro-inspect.msft.png":::
         Select **Inspect** from the context menu on any element
      :::image-end:::
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="./media/devtools-intro-inspect-devtools-open.png" alt-text="DevTools opens with the chosen element highlighted" lightbox="./media/devtools-intro-inspect-devtools-open.png":::
         DevTools opens with the chosen element highlighted
      :::image-end:::
   :::column-end:::
:::row-end:::

There are two main ways to interact with the DevTools.
*   Use the mouse.
*   Keyboard shortcuts.  These provide a quick way to access functionality and are needed for accessibility.  The Microsoft Edge DevTools team works hard to make all the tools available using the keyboard and assistive technologies such as screen readers.  See [Microsoft Edge DevTools keyboard shortcuts][DevtoolsGuideShortcutsIndex].

See also [Open Microsoft Edge DevTools][DevtoolsGuideOpenIndex] - how to open the different features in DevTools.


<!-- ====================================================================== -->
## Changing where DevTools is docked in the browser

When you open the DevTools, it docks to the left of your browser.  To change the docked location of DevTools:
1.  Select the **Customize and control DevTools** (`...`) button.
1.  To the right of **Placement of the DevTools relative to the page** (**Dock side**), select a layout option.

:::image type="complex" source="./media/devtools-intro-docking-menu.msft.png" alt-text="Screenshot of the Dock side menu in DevTools" lightbox="./media/devtools-intro-docking-menu.msft.png":::
   The Dock side menu in DevTools
:::image-end:::

In **Dock side**, select a layout option:

*   **Undock into separate window**.   Helps you work with several monitors or if you need to work on a full screen app.
*   **Dock to left** or **Dock to right**.  Helps you keep the DevTools side by side with your web product, and is excellent when you emulate mobile devices.  The **Dock to left** and **Dock to right** options work best with high-resolution displays.  For more information about emulation devices, navigate to [Emulate mobile devices in Microsoft Edge DevTools][DevtoolsGuideDeviceModeIndex].
*   **Dock to bottom**.  Helps you when you do not have enough horizontal display space, or you want to debug long text in the DOM or **Console**.

:::row:::
   :::column span="":::
      :::image type="complex" source="./media/devtools-intro-docking-left.msft.png" alt-text="Select Dock To left" lightbox="./media/devtools-intro-docking-left.msft.png":::
         Select **Dock To left**
      :::image-end:::
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="media/devtools-intro-docking-bottom.msft.png" alt-text="Select Dock To bottom" lightbox="media/devtools-intro-docking-bottom.msft.png":::
         Select **Dock To bottom**
      :::image-end:::
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      :::image type="complex" source="media/devtools-intro-docking-right.msft.png" alt-text="Select Dock To right" lightbox="media/devtools-intro-docking-right.msft.png":::
         Select **Dock To right**
      :::image-end:::
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="media/devtools-intro-docking-own-window.msft.png" alt-text="Select Undock into separate window" lightbox="media/devtools-intro-docking-own-window.msft.png":::
         Select **Undock into separate window**
      :::image-end:::
   :::column-end:::
:::row-end:::

See also [Change DevTools placement (Undock, Dock To bottom, Dock To left)][DevtoolsGuideCustomizePlacement].


<!-- ====================================================================== -->
## The main tools on the toolbar

DevTools give you an amazing amount of power to inspect, debug, and change the web product currently displayed in the browser.  Most of the tools display the changes live.  Live updates make the tools incredibly useful to refine the appearance and navigation or functionality of a web project without the need to refresh or build it.  The DevTools also allow you to change web-based third-party products on your computer.


### Main tools (tabs) on the toolbar

There are two toolbars: the main toolbar at the top of DevTools, and the **Drawer** at the bottom if you select `Esc`.  The main toolbar normally has the following tabs (or tools, or panels):

*  **Welcome**.  Includes information about the new features of DevTools, how to contact the team, and provides information about certain features.  This tool is placed first.

Next, the following tools are always present on the toolbar and cannot be closed:
*  **Elements**.  Allows you to edit or inspect HTML and CSS.  You can edit in the tool while displaying the changes live in the browser.
*  [Console][DevtoolsGuideConsoleIndex].  Allows you to display and filter log messages.  Log messages are automated logs of the browser like network requests and developer-generated logs.  You can also run JavaScript directly in the **Console** in the context of the current window or frame.
*  [Sources][DevtoolsGuideSourcesIndex].  A code editor and JavaScript debugger.  You can edit projects, maintain snippets, and debug your current project.
*  [Network][DevtoolsGuideNetworkIndex].  Allows you to monitor and inspect requests or responses from the network and browser cache.  You can filter requests and responses to fit your needs and simulate different network conditions.

Finally, these more specialized tools (tabs) are on the toolbar by default:
* **Performance**
* **Memory**
* **Application**
* **Security**
* **Lighthouse**


### Tool, tab, or panel

Often the words "tool", "tab", or "panel" can be used interchangeably.  In the command menu, the tools are called _panels_; for example, the **Elements** tool is called the **Elements** panel.  To switch to the the **Elements** tool, you select the **Elements** tab.  There's a **More Tools** button and list, and there's a **More tabs** button on the toolbar, both of which are used to select tools, which are also called _panels_.


### Sections of the toolbar

The main toolbar in DevTools has the following sections:

:::image type="complex" source="./media/devtools-intro-menu-bar.msft.png" alt-text="The menu bar of the DevTools with labels that explain the different sections.  In order: Inspect tool, Device Emulation tool, Tools tab group, JavaScript errors, Issues, Settings, Feedback, Customize, and Close." lightbox="./media/devtools-intro-menu-bar.msft.png":::
   The menu bar of the DevTools with labels that explain the different sections.  In order: Inspect tool, Device Emulation tool, Tools tab group, JavaScript Errors, Issues, Settings, Feedback, Customize, and Close.
:::image-end:::

*   When you select the **Inspect** tool, you can select an element on the current webpage.  While the **Inspect** tool is active, you can move your mouse over different parts of the webpage to get detailed information about page elements, and a multi-color overlay that shows the layout dimensions, padding, and margin of the page element.

    :::image type="complex" source="./media/devtools-intro-inspect-tool.msft.png" alt-text="The Inspect tool while hovering over with the first headline of this article" lightbox="./media/devtools-intro-inspect-tool.msft.png":::
       The Inspect tool while hovering over with the first headline of this article
    :::image-end:::

*   The [Device Emulation][DevtoolsGuideDeviceModeIndex] tool displays the current web product in an emulated device mode.  The **Device Emulation** tool allows you to run and test how your product reacts when you resize the browser.  It also gives you an estimation of the layout and behavior on a mobile device.

    :::image type="complex" source="./media/devtools-intro-device-emulation.msft.png" alt-text="Screenshot of the DevTools display of this article in an emulated mobile phone" lightbox="./media/devtools-intro-device-emulation.msft.png":::
       Screenshot of the DevTools display of this article in an emulated mobile phone
    :::image-end:::

*   The main toolbar contains tabs for tools that are used in various scenarios.  You can customize each of the tools, and the content of a tool can change based on the context.  To show a tool that is on a tab that's hidden, select the **More tabs** (`>>`) button.   To add a tool to the main toolbar or to the drawer's toolbar, select the **More tools** (`+`) button.  Each tool is introduced below.

*   Next to the Tools tab group are optional error and issues shortcuts.  The shortcuts display when JavaScript errors or issues occur on the current webpage.  The **Open Console to view # errors, # warnings** (**JavaScript Errors**) button displays a red circle with an `X`, followed by the number of JavaScript errors.  To open the [Console][DevtoolsGuideConsoleIndex] and learn about the error, select the **JavaScript Errors** button.  The **Open Issues to view # issues** (**Issues**) button is a blue message icon followed by the number of issues.  To open the [Issues][DevtoolsGuideIssuesIndex] tool, select the **Issues** button.

*   The **Settings** button displays a gear icon.  To open DevTools **Settings** webpage, select the **Settings** button.  The **Settings** webpage displays a menu to change **Preferences**, turn on **Experiments**, and much more.

*   The **Send Feedback** button displays a torso with a chat bubble next to it.  To open the **Send Feedback** dialog, select the **Send Feedback** button.  The **Send Feedback** dialog allows you to enter information to describe what happened and automatically includes a screenshot.  Use it to connect with the DevTools team to report problems, issues, or suggest ideas.

*   The **Customize and control DevTools** (`...`) button opens a dropdown menu.  It allows you to define where to dock the DevTools, search, open different tools, and much more.


<!-- ====================================================================== -->
## Power tip: Use the command menu

The DevTools provides lots of features and functionality to use with your web product.  You can access the different parts of the DevTools in many ways, but often a fast way is to use the command menu.

In the command menu, the tools are called "panels"; for example, the **Elements** tool is called the **Elements** panel.  To switch to the the **Elements** tool, you select the **Elements** tab.

To open the command menu, do any of the following:

*   Select `Control`+`Shift`+`P` (Windows, Linux) or `Command`+`Shift`+`P` (macOS).
*   Select **Customize And Control DevTools** (`...`), and then select **Run Command**.

:::image type="complex" source="./media/devtools-intro-command-menu.msft.png" alt-text="Screenshot of the command menu in DevTools" lightbox="./media/devtools-intro-command-menu.msft.png":::
Screenshot of the command menu in DevTools
:::image-end:::

The command menu allows you to type commands to display, hide, or run features in the DevTools.  With the command menu open, enter the word **changes**, and then select **Drawer: Show Changes**.  The **Changes** tool opens, which is useful when you edit CSS.  In this case, the command menu provides a fast alternative to selecting **More Tools** (...) and then selecting **Changes**, or editing a `.js` file in the **Sources** tool, then right-clicking and selecting **Local modifications**.

The command menu displays the options after you type `changes`:

:::image type="complex" source="./media/devtools-intro-command-menu-show-changes.msft.png" alt-text="Command menu displays the options after you type changes" lightbox="./media/devtools-intro-command-menu-show-changes.msft.png":::
   Command menu displays the options after you type `changes`
:::image-end:::

DevTools with the **Changes** tool open:

:::image type="complex" source="./media/devtools-intro-showing-changes.msft.png" alt-text="DevTools with the Changes tool open" lightbox="./media/devtools-intro-showing-changes.msft.png":::
   DevTools with the **Changes** tool open
:::image-end:::

See also [Run commands with the Microsoft Edge DevTools Command menu][DevtoolsGuideCommandMenuIndex].


<!-- ====================================================================== -->
## Customizing DevTools

You can customize DevTools to meet your needs for the way you work.  To change settings, do any of the following:
*   Select **Settings** (the gear icon on the top right).
*   Select `F1` or `?`.

In the **Preferences** section, you can change several parts of the DevTools.  For example, you can use the **Match the browser language** setting to use the same language in the DevTools that is used in your browser.  For another example, use the **Theme** setting to change the color theme of DevTools.

:::image type="complex" source="media/devtools-intro-all-settings.msft.png" alt-text="Screenshot of all the settings in DevTools" lightbox="./media/devtools-intro-all-settings.msft.png":::
   Screenshot of all the settings in DevTools
:::image-end:::

You can also change the settings of advanced features, such as:
*   [Workspaces][DevtoolsGuideWorkspacesIndex].
*   Filter library code with the **Ignore List**.
*   Define the **Devices** you want to include in the device simulation and test mode.  For more information, navigate to [Emulate mobile devices in Microsoft Edge DevTools][DevtoolsGuideDeviceModeIndex].
*   Select a network **Throttling** profile.
*   Define simulated **Locations**.
*   Customize keyboard **Shortcuts**.  For example, to use the same shortcuts in DevTools as in Visual Studio Code, select **Match shortcuts from preset** > **Visual Studio Code**.

    :::image type="complex" source="./media/devtools-intro-match-keys.msft.png" alt-text="Screenshot of all the keyboard shortcuts and the menu to match each to the shortcuts in Visual Studio Code" lightbox="./media/devtools-intro-match-keys.msft.png":::
       Screenshot of all the keyboard shortcuts and the menu to match each to the shortcuts in Visual Studio Code
    :::image-end:::


<!-- ====================================================================== -->
## Trying experimental features

The DevTools team provides new features as _experiments_ in DevTools.  You can turn each of the experiments on or off.  To see the full list of [Experimental features][DevtoolsGuideExperimentalFeaturesIndex], in DevTools, select **Settings** (the gear icon), and then select **Experiments**.

To preview the [latest features coming to the DevTools][DevtoolsGuideWhatsNew202102Devtools], download [Microsoft Edge Canary][MicrosoftedgeinsiderDownload], which builds nightly.


<!-- ====================================================================== -->
## See also

*  [DevTools for beginners: Get Started with HTML and the DOM][DevtoolsGuideBeginnersHtml]
*  [Microsoft Edge (Chromium) DevTools Protocol][DevtoolsProtocolIndex]


<!-- ====================================================================== -->
<!-- links -->
[DevtoolsGuideBeginnersHtml]: ./beginners/html.md "DevTools for beginners: Get started with HTML and the DOM | Microsoft Docs"
[DevtoolsGuideCommandMenuIndex]: ./command-menu/index.md "Run commands with the Microsoft Edge DevTools Command menu | Microsoft Docs"
[DevtoolsGuideConsoleIndex]: ./console/index.md "Console overview | Microsoft Docs"
[DevtoolsGuideCustomizePlacement]: ./customize/placement.md "Change DevTools placement (Undock, Dock To bottom, Dock To left) | Microsoft Docs"
[DevtoolsGuideDeviceModeIndex]: ./device-mode/index.md "Emulate mobile devices in Microsoft Edge DevTools | Microsoft Docs"
[DevtoolsGuideDomIndex]: ./dom/index.md "Get started with viewing and changing the DOM | Microsoft Docs"
[DevtoolsGuideEvaluatePerformanceIndex]: ./evaluate-performance/index.md "Get started with analyzing Runtime performance | Microsoft Docs"
[DevtoolsGuideExperimentalFeaturesIndex]: ./experimental-features/index.md "Experimental features | Microsoft Docs"
[DevtoolsGuideMemoryProblemsIndex]: ./memory-problems/index.md "Fix memory problems | Microsoft Docs"
[DevtoolsGuideInspectStylesEditFonts]: ./inspect-styles/edit-fonts.md "Edit CSS font styles and settings in the Styles pane | Microsoft Docs"
[DevtoolsGuideIssuesIndex]: ./issues/index.md "Find and fix problems using the Issues tool | Microsoft Docs"
[DevtoolsGuideJavascriptIndex]: ./javascript/index.md "Get started with debugging JavaScript in Microsoft Edge DevTools | Microsoft Docs"
[DevtoolsGuideJavascriptOverrides]: ./javascript/overrides.md "Override webpage resources with local copies using Microsoft Edge DevTools | Microsoft Docs"
[DevtoolsGuideNetworkIndex]: ./network/index.md "Inspect network activity in Microsoft Edge DevTools | Microsoft Docs"
[DevtoolsGuideOpenIndex]: ./open/index.md "Open Microsoft Edge DevTools | Microsoft Docs"
[DevtoolsGuideRenderingToolsIndex]: ./rendering-tools/index.md "Analyze runtime performance | Microsoft Docs"
[DevtoolsGuideShortcutsIndex]: ./shortcuts/index.md "Microsoft Edge DevTools keyboard shortcuts | Microsoft Docs"
[DevtoolsGuideSourcesIndex]: ./sources/index.md "Sources tool overview | Microsoft Docs"
[DevtoolsGuideStorageSessionstorage]: ./storage/sessionstorage.md "View and edit session storage with Microsoft Edge DevTools | Microsoft Docs"
[DevtoolsGuideWhatsNew202102Devtools]: ./whats-new/2021/02/devtools.md "What's New In DevTools (Microsoft Edge 90) | Microsoft Docs"
[DevtoolsGuideWorkspacesIndex]: ./workspaces/index.md "Edit files with Workspaces | Microsoft Docs"
[DevtoolsProtocolIndex]: ../devtools-protocol-chromium/index.md "Microsoft Edge (Chromium) DevTools Protocol overview | Microsoft Docs"
<!-- external links -->
[MicrosoftEdgeAddonsExtensions]: https://microsoftedge.microsoft.com/addons/category/Edge-Extensions "Microsoft Edge Add-ons"
[MicrosoftedgeinsiderDownload]: https://www.microsoftedgeinsider.com/download "Download Microsoft Edge Insider Channels"
[GoogleChromeWebstoreExtensions]: https://chrome.google.com/webstore/category/extensions "Extensions | Chrome Web Store"
