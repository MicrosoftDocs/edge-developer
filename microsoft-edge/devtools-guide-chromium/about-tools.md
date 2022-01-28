---
title: About the list of tools in DevTools
description: About the list of tools in DevTools.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 01/28/2021
---
# About the list of tools in DevTools

There are currently around 30 tools in DevTools, not counting features that are within a tool.  There are:

* Three non-closeable tools (Elements, Console, Sources).

* Two toolbar icon tools (the **Inspect tool** (icon) and **Device Emulation** (icon)).

* 11 default tools (tabs on the main toolbar), including the three non-closable tools.

* Around 30 tools on the **Customize and control DevTools** > **More tools** menu.

The **Command Menu** isn't considered a tool, but is a way to select and use the tools, including directly using individual features of tools.


<!-- ====================================================================== -->
## The More Tools menus

The three **More tools** menus omit the non-closeable tools (**Elements**, **Console**, **Sources**) and the toolbar icon tools (**Inspect tool**, **Device Emulation**).

The **More Tools** (**+**) menu on the main toolbar and Drawer toolbar contain the same tools, regardless of whether they are Panel tools or Drawer tools.  Open tools are omitted.  In contrast, the **Customize and control DevTools** > **More tools** menu includes tools that are already open.

<!-- detail: which toolbar the tool opens in.  Different behavior for the 3 More Tools menus. -->


<!-- ====================================================================== -->
## Panel tools vs. Drawer tools

In the **Command Menu**:

* _Panel tools_ are tools which open in the main toolbar, which is at the top of DevTools by default, or in the **Activity Bar** when using **Focus Mode**.

* _Drawer tools_ are tools which open in the Drawer by default, at the bottom of DevTools.

The three **More tools** menus list all the Panel tools and Drawer tools in alphabetical order, without differentiating Panel tools vs. Drawer tools.  In contrast, the **Command Menu** first lists the Panel tools, and then the Drawer tools.

You can move any tool from the Panel (main) toolbar to the Drawer tool, or vice versa, except for the toolbar icon tools, which are always on the main toolbar.  Right-click the tool's tab.  <!-- can you do that in Activity Bar/Focus Mode? -->


<!-- ====================================================================== -->
## The Activity Bar in Focus Mode

The main toolbar can be (in effect), converted to showing icons rather than tabs with text, by switching to **Focus Mode**, where it becomes the **Activity Bar**.  The main toolbar shows tools as labelled tabs.  In contrast, the **Activity Bar** in **Focus Mode** shows tools as icons.

The Activity Bar can be placed vertically or horizontally.

To switch to **Focus Mode** to show the **Activity Bar** instead of the main toolbar with labeled tabs, select the **Settings** > **Experiments** > **Focus Mode** checkbox.


<!-- ====================================================================== -->
## See also
 
* [Overview of DevTools](index.md)
