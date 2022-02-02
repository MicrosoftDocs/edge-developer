---
title: About the list of tools
description: About the list of tools in DevTools.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 02/02/2022
---
# About the list of tools

There are currently around 35 tools in DevTools, not counting features that are within a tool.  There are:

*  2 toolbar icons: the **Inspect tool** (![Inspect tool icon.](media/inspect-tool-icon-light-theme.png)) and **Device Emulation** (![Device Emulation icon.](media/device-emulation-icon-light-theme.png)).

*  11 tabs on the toolbar by default:
   *  3 tool tabs that are always open: **Elements**, **Console**, and **Sources**.
   *  8 tool tabs that can be closed.

*  30 tools in the **Customize** > **More tools** menu.
   *  Lists the tabs that can be closed.

By this accounting, DevTools provides 35 tools:
*  2 toolbar icons.
*  3 non-closable tabs.
*  30 closable tabs.

:::image type="content" source="media/all-tools.png" alt-text="All the tools of DevTools, including 2 toolbar icons, 3 permanent tool tabs, and 30 'More tools' tabs." lightbox="media/all-tools.png":::

These are not considered tools, but are ways to access tools:
*  The **Drawer** is an additional toolbar for tool tabs.
*  The **Command Menu** is a way to directly use features of tools.
*  The **Settings** pages.


<!-- ====================================================================== -->
## The More Tools menus

The three **More tools** menus omit the non-closable tools (**Elements**, **Console**, **Sources**) and the toolbar icon tools (**Inspect tool**, **Device Emulation**).

The **More Tools** (**+**) menu on the main toolbar and Drawer toolbar contain the same tools, regardless of whether they are Panel tools or Drawer tools.  Open tools are omitted.  In contrast, the **Customize and control DevTools** > **More tools** menu includes tools that are already open.

<!-- detail: which toolbar the tool opens in.  Different behavior for the 3 More Tools menus. -->


<!-- ====================================================================== -->
## Panel tools vs. Drawer tools

In the **Command Menu**:

* _Panel tools_ are tools which open in the main toolbar by default, or in the **Activity Bar** when using **Focus Mode**.

* _Drawer tools_ are tools which open in the Drawer toolbar by default, at the bottom of DevTools.  Press `Esc` to show or hide the Drawer.

![The Command Menu, showing the Panel tools grouped together, and then the Drawer tools.](media/command-menu-panel-vs-drawer-tools.png)

The three **More tools** menus list all the Panel tools and Drawer tools in alphabetical order, without differentiating Panel tools vs. Drawer tools.  In contrast, the **Command Menu** first lists the Panel tools, and then the Drawer tools.

You can move any closable tab tool from the Panel (main) toolbar to the Drawer tool, or vice versa.  Right-click the tool's tab and then select **Move to bottom** or **Move to top**.

To open the **Command Menu**, press `Ctrl`+`Shift`+`P` (Windows/Linux) or `Command`+`Shift`+`P` (macOS).  Or, click the **Customize and control DevTools** (![Customize icon.](media/customize-devtools-icon-light-theme.png)) button and then select **Run command**.

In **Focus Mode**, the UI is simpler; the only tool on the **Drawer** is the **Console** tool.  Even if you use the **Command Menu** to open a Drawer tool, the tool isn't opened on the Drawer, and can only be pinned to the Activity Bar, not placed next to the Console 


<!-- ====================================================================== -->
## The Activity Bar in Focus Mode

:::image type="icon" source="whats-new/media/2020/06/experimental-tag-14px.msft.png":::

The main toolbar can be (in effect) converted to showing icons rather than tabs with text, by switching to **Focus Mode**, where it becomes the **Activity Bar**.  The main toolbar shows tools as labelled tabs.  In contrast, the **Activity Bar** in **Focus Mode** shows tools as icons.

The **Activity Bar** is a compact toolbar that works well with a smaller window.  Pin your current main tools to the **Activity Bar**.  The **Activity Bar** can be placed vertically or horizontally.

To remove a tool, right-click its icon and then select **Remove from activity bar**.  However, the **Elements**, **Console**, and **Sources** tools are always present on the **Activity Bar**.

To switch to Focus Mode to show the Activity Bar instead of the main toolbar with labeled tabs:

1. In DevTools, select **Settings** (![Settings icon.](media/settings-gear-icon-light-theme.png)) > **Experiments**.

1. Select the **Focus Mode** checkbox.

1. Click the **Close** (**X**) button in the upper right, and then click the **Reload DevTools** button.

   The Activity Bar appears on the left.  The main toolbar goes away.  The Drawer toolbar is replaced by a **Quick View** list of the tools, instead of tabs.

:::image type="content" source="media/experimental-features/focus-mode.png" alt-text="Focus Mode, including the Activity Bar.":::

For draft documentation of this experimental feature, see [DevTools: Focus Mode UI](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/DevTools/FocusMode/explainer.md) in the Explainers repo.

<!-- See also [Focus Mode](experimental-features/index.md#focus-mode), in _Experimental features_. -->


<!-- ====================================================================== -->
## Closing all the tabs at once

To close all of the optional tabs at once:

*  Right-click an optional tab on the toolbar (a tab that has an **x** button), and then select **Close all**.

   Only the **Elements**, **Console**, and **Sources** remain on the main toolbar.  (The **Drawer** toolbar is unaffected.)

   If you closed all tabs on the **Drawer**, only the **Console** tab remains on the **Drawer** toolbar.  (The main toolbar is unaffected.)


<!-- ====================================================================== -->
## Restoring all the default tabs at once

To restore all the default tabs on the main toolbar:

1. In DevTools, select **Settings** (![Settings icon.](media/settings-gear-icon-light-theme.png)) > **Preferences**.

1. Click the **Restore defaults and refresh** button.

   The main toolbar again has all of the default tabs.  The **Drawer** then has only the **Console** tab.


<!-- ====================================================================== -->
## See also
 
* [Overview of DevTools](index.md) - Similar to the present article, but broader coverage, with a top-level introduction of DevTools.
