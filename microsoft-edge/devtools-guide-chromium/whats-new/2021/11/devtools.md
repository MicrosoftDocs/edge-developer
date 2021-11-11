---
description: tbd
title: What's new in DevTools (Microsoft Edge 96)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 11/11/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# What's New in DevTools (Microsoft Edge 96)

The following sections list the announcements from the Microsoft Edge DevTools team.  To try the latest features of DevTools and the Microsoft Edge DevTools extension for Visual Studio Code, read these announcements.  To stay up to date with the latest and greatest features in your developer tools, download the [Microsoft Edge preview channels](https://www.microsoftedgeinsider.com/download) and [follow the Microsoft Edge DevTools team on Twitter](https://twitter.com/EdgeDevTools).

If you are on Windows, Linux, or macOS, consider using the Canary preview channel of Microsoft Edge as your default development browser.  The preview channels give you access to the latest features of Microsoft Edge DevTools.


<!-- ====================================================================== -->
## Focus Mode vertical action bar

<!-- 1 -->

<!-- Title: New DevTools UI available (in preview) -->
<!-- Subtitle: A more minimal, modern UI is coming to Edge DevTools. Enable the "Focus Mode" experiment to preview new UI features such a more compact toolbar that keeps DevTools uncluttered and better adapts to small window sizes. -->

The Microsoft Edge DevTools team is experimenting with a new DevTools UI: **Focus Mode**, which provides a vertical action bar for all of your tools.  This vertical action bar gives a quick view, to have two <!--or, multiple?--> tools open simultaneously, and provides several customization and organization options to personalize your tools.

To give this new UI a try in Microsoft Edge version 96, select **Settings** (gear icon) > **Experiments** > **Focus Mode**.<!-- rather, **Focus Mode and DevTools Tooltips**? -->

We're eager to hear your feedback about this new DevTools UI.  This is an experiment, so the UI may change and evolve in future versions of Microsoft Edge.  send us your feedback by tweeting [@EdgeDevTools](https://twitter.com/edgedevtools).  Or, with the **Focus Mode** experiment turned on, at the bottom of the **Focus Mode** activity bar, select **Help**<!--(? icon)--> > **Feedback** .  <!-- is this feature called both "Focus Mode" and "the Activity bar"? -->

<!-- :::image type="content" source="../../media/2021/11/x.png" alt-text="Text."::: -->
<!-- 
1. Turn on "Focus Mode" in DevTools Settings > Experiments. 
1. Undock DevTools so it is easier to see the entirety of the UI.
1. Show Welcome in the top pane, and minimize Quick View (drawer) if necessary.
-->

<!-- video: see work item -->

See also [Group tools together in Focus Mode](../02/devtools.md#group-tools-together-in-focus-mode).
<!-- Link to existing Experimental Features doc, after that article has this section. -->


<!-- ====================================================================== -->
## Console can once again appear in the top and bottom panels

<!-- 2 -->

<!-- Title: Fix: Console can be quickly toggled in top or bottom panel -->
<!-- Subtitle: By popular demand, you can now easily show or collapse Console in the bottom panel without having to move the tool. -->

Since [Microsoft Edge version 87](../../2020/10/devtools.md#move-tools-between-top-and-bottom-panels), you've been able to move any tool between the top and bottom panels, including the Console tool.  However, we heard from developers that moving the Console tool repeatedly was cumbersome.<!-- why would you want to move it repeatedly? what's the scenario? why the sudden jump to discussing full-screen vs. split-screen? need transition -->  As of Microsoft Edge version 96, the default experience<!--what is the default experience?--> for Console has been restored, allowing you to quickly switch between a full-screen view<!---correct term?--> of the Console and a split-screen<!---correct term?--> view, without moving the Console tool.<!--explain what full-screen vs. split-screen view has to do with whether Console is in main toolbar vs. Drawer vs. both-->

If you want to only allow the Console tool to open in a single place, you can configure the behavior of the Console.  In the main toolbar or the **Drawer** toolbar, right-click the **Console** tab, select **Configure console**.  The **Settings** > **Preferences** page appears.  In the **Console** section, clear the checkbox **Show Console tab in main panel and drawer**, then click **Close** (**x**).

<!-- :::image type="content" source="../../media/2021/11/x.png" alt-text="Text."::: -->
<!--
1. Open Elements in main panel and Console in drawer.
1. Switch main panel to Console. The drawer should collapse.
Screenshot: show Console in main panel, drawer collapsed.
-->

<!-- video: see work item -->


<!-- ====================================================================== -->
## Microsoft Edge DevTools Visual Studio Code extension

<!-- 3 -->

<!-- Title: Dockable browser screencast, live issue reporting, and device emulation in Microsoft Edge DevTools for Visual Studio Code -->
<!-- Subtitle: Display your web project inside the editor, simulate different devices, and get notified about issues with your code while you develop it. --> 

The Microsoft Edge DevTools for Visual Studio Code extension now features a dockable screencast, device emulation, and live, inline issue reporting.  You can see the web project in a dedicated tab inside the editor and simulate various devices.  Instead of finding out about issues in a separate tool, Visual Studio Code highlights the issues in your source code and reports them live while you create your code.

<!-- :::image type="content" source="../../media/2021/11/x.png" alt-text="Text."::: -->

<!-- videos: see work item -->

For details, see [Device emulation in the screencast](../../../../visual-studio-code/microsoft-edge-devtools-extension.md#device-emulation-in-the-screencast) and [Inline and live issue analysis](../../../../visual-studio-code/microsoft-edge-devtools-extension.md#inline-and-live-issue-analysis).


<!-- ====================================================================== -->
## Sources tool now notifies you when sourcemaps can't be loaded

<!-- 4 -->

<!-- Title: Get notified when DevTools cannot load your sourcemaps correctly -->
<!-- Subtitle: The Sources tool now provides several places in the UI when DevTools can't fetch or parse your sourcemaps. -->

In Microsoft Edge version 96, the **Sources** tool now provides several indications in the UI when DevTools cannot load your sourcemaps.  In the **Page** tab in the **Navigator** pane in the **Sources** tool, files that DevTools can't load sourcemaps for have a warning<!--todo: capture/show--> icon in place of the file<!--todo: capture/show--> icon.  

Selecting a file with the warning icon opens the file in the Sources tool with an infobar<!--todo: capture/show--> indicating that DevTools either couldn't fetch the sourcemap correctly from the server or couldn't parse the sourcemap correctly.

From the infobar, you can learn more about the issue by selecting the **Open in Issues** button.  The **Issues** tool then opens in the **Drawer** and provides information about how to resolve the issue and get your sourcemap loaded correctly in DevTools.

* To prevent the infobar about sourcemaps from cluttering the **Sources** tool, select the **Don't show again** button.
* To prevent issues related to sourcemaps from cluttering the **Issues** tool, clear the **Include third-party issues** checkbox in the **Issues** tool.

<!-- :::image type="content" source="../../media/2021/11/x.png" alt-text="Sources tool now notifies you when sourcemaps can't be loaded."::: -->
<!-- 
1. Open Edge Beta.
1. Go to edge://version and make sure you are on version 96 or later.
1. Navigate to bing.com.
1. Open DevTools > Sources.
1. Expand the r.bing.com origin in the Page tab of the Navigator pane.
1. Expand the rp folder.
1. Scroll through the scripts until you find one with a warning symbol instead of the file icon.
1. Open the file with the warning icon.
1. Notice the infobar that says "DevTools failed to load sourcemap". Select the "Open in Issues" button.
The Issues tool opens in the drawer with info about the failure.
-->

<!-- video: see work item -->

To learn more about how DevTools fetches and parses sourcemaps, see [Map preprocessed code to source code](../../../javascript/source-maps.md).


<!-- ====================================================================== -->
## Opening source files in Visual Studio Code now integrates better with the Sources tool

<!-- 5 -->

<!-- Title: Open source files directly in Visual Studio Code from DevTools -->
<!-- Subtitle: The "Open source files in Visual Studio Code" experiment now works more intuitively with the Sources tool. -->

In previous versions of Microsoft Edge, turning on the **Open source files in Visual Studio Code** experiment had unexpected behavior when the **Sources** tool is already open in DevTools.  Setting breakpoints would direct you to Visual Studio Code, or to documentation to configure the experiment.

In Microsoft Edge version 96, this experiment integrates better with the Sources tool.  When the Sources tool is already open and you turn on the **Open source files in Visual Studio Code** experiment, setting breakpoints and opening files opens the Sources tool.  Following links to source code from other panels, such as the **Elements** tool, now opens in Visual Studio Code if the **Sources** tool is not open in DevTools.

<!-- :::image type="content" source="../../media/2021/11/x.png" alt-text="Text."::: -->
<!--
1. Open Edge Beta.
1. Go to edge://version and ensure you are on version 96 or later.
1. Turn on and configure the experiment by following the instructions in [Opening source files in Visual Studio Code](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/sources/opening-sources-in-vscode).
1. Open DevTools > Sources.
1. Open a JavaScript file in the Sources tool.
1. Set a breakpoint.

In Microsoft Edge version 95 and earlier, setting a breakpoint directs customers to Visual Studio Code or to docs. 
In Microsoft Edge 96, breakpoints are set in the Sources tool.
-->

<!-- video: see work item -->

To learn more about how DevTools integrates with Visual Studio Code, see [Opening source files in Visual Studio Code](../../../sources/opening-sources-in-vscode.md).


<!-- ====================================================================== -->
## Selecting the dropdown triangle icon in the DevTools UI now opens the menu

<!-- 6 -->

<!-- Title: Dropdown menus in the DevTools UI are now more intuitive -->
<!-- Subtitle: Select the triangle icon to expand any dropdown menu in the DevTools UI. -->

In earlier versions of Microsoft Edge, selecting the triangle icon in the DevTools UI for opening dropdown menus didn't display the dropdown menu.  To display the dropdown menu, you had to select the dropdown menu entry.<!--the label?-->

In Microsoft Edge version 96, this issue has been fixed.  Selecting the triangle icon for any dropdown menu in DevTools now displays the dropdown menu.

<!-- :::image type="content" source="../../media/2021/11/x.png" alt-text="Text."::: -->
<!--
Old behavior:
1. Open Edge Stable.
1. Go to edge://version and make sure you are on version 95.
1. Open DevTools > Network.
1. In the "No throttling" dropdown menu, select the dropdown triangle icon.
1. Notice that the dropdown menu does not open when you select the triangle icon. It will open if you select "No throttling".

New behavior:
1. Open Edge Beta.
1. Go to edge://version and make sure you are on version 96.
1. Open DevTools > Network.
1. In the "No throttling" dropdown menu, select the dropdown triangle icon.
The "No throttling" dropdown menu now opens when you select the dropdown triangle icon.

This applies to dropdown menus across these tools:
* Performance
* Memory
* Network (eg "No throttling" dropdown menu)
* Console
* [Device Emulation](../../../device-mode/index.md#simulate-a-mobile-viewport) -->


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page for announcements from the Chromium project is [What's New In DevTools (Chrome 96)](https://developer.chrome.com/blog/new-in-devtools-96) and is authored by [Jecelyn Yeen](https://developers.google.com/web/resources/contributors#jecelynyeen) (Developer advocate working on Chrome DevTools at Google).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
