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

These are interesting things of note about the tools that make up DevTools, which are not immediately obvious.


<!-- ====================================================================== -->
## Count of tools

What is the list of tools in DevTools?  If we don't count features that are within a tool, there are currently around 30 tools in DevTools.

* Three non-closeable tools (Elements, Console, Sources).

* Two toolbar icon tools (the **Inspect tool** (icon) and **Device Emulation** (icon)).

* 11 default tools (tabs on the main toolbar), including the three non-closable tools.

* Around 30 tools on the **Customize and control DevTools** > **More tools** menu.

The **Command Menu** isn't considered a tool, but is a way to select and use the tools, including directly using individual features of tools.


<!-- ====================================================================== -->
## The three More Tools menus

The **Customize and control DevTools** > **More tools** menu is more complete than the toolbar > **More Tools** (**+**) menus, because it includes every non-closeable tool.  This **More tools** menu only omits the three non-closeable tools (**Elements**, **Console**, **Sources**) and the toolbar icon tools (**Inspect tool**, **Device Emulation**).

The **More Tools** (**+**) menu on the main toolbar and on the Drawer toolbar only lists tools that aren't open already, and it doesn't list the toolbar icon tools (**Inspect tool**, **Device Emulation**).  If a closeable tool is open, it is removed from the toolbar **More Tools** (**+**) menu, but that tool remains in the **Customize** > **More tools** menu.

The **More Tools** (**+**) menu on the main toolbar and the Drawer toolbar have the same list of tools (the non-open tools), regardless of whether they are Panel tools or Drawer tools.


<!-- ====================================================================== -->
## Panel tools vs. Drawer tools

* _Panel tools_ are tools which open in the main toolbar, which is at the top of DevTools by default, or in the **Activity Bar** when using **Focus Mode**.

* _Drawer tools_ are tools which open in the Drawer by default, at the bottom of DevTools.

The three **More tools** menus list all the Panel tools and Drawer tools in alphabetical order, without differentiating Panel tools vs. Drawer tools.  In contrast, the **Command Menu** first lists the Panel tools, and then the Drawer tools.

You can move any tool from the Panel (main) toolbar to the Drawer tool, or vice versa, except for the toolbar icon tools, which are always on the main toolbar.  Right-click the tool's tab.  <!-- can you do that in Activity Bar/Focus Mode? -->


<!-- ====================================================================== -->
## The Activity Bar in Focus Mode

The main toolbar can be (in effect), converted to showing icons rather than tabs with text, by switching to **Focus Mode**, where it becomes the **Activity Bar**.  The main toolbar shows tools as labelled tabs.  In contrast, the **Activity Bar** in **Focus Mode** shows tools as icons.

The Activity Bar can be placed vertically or horizontally.

To switch to **Focus Mode** to show the **Activity Bar** instead of the main toolbar with labeled tabs, select **Settings** > **Experiments** > **Focus Mode** checkbox.


<!-- ====================================================================== -->
## See also
 
* [Overview of DevTools](index.md)
