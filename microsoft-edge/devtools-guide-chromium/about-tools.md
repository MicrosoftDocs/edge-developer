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

These are interesting things of note about the tools that make up DevTools, that are not immediately obvious.  What is the list of tools in DevTools?  If we don't count features that are within a tool, there are currently around 30 tools in DevTools.

There are three non-closeable tools, two toolbar icon tools (the Inspect tool (icon) and Device Emulation (icon)), 11 default tools (tabs on the main toolbar), and around 30 tools on the **Customize and control DevTools** > More tools menu.

the **Customize and control DevTools** > More tools menu is the most complete list, because it includes every non-closeable tool; it only omits the three non-closeable tools and the two toolbar icon tools (Inspect tool, Device Emulation).

The main toolbar > More Tools (+) menu, and the Drawer toolbar > More Tools (+) menu, only list tools that aren't open already.  If a tool is open, it is removed from the two toolbar More Tools (+) menus, but that tool remains in the **Customize** > **More tools** menu.

The three **More tools** menus list all the Panel tools and Drawer tools in alphabetical order, without differentiating Panel tools vs. Drawer tools.  In contrast, the **Command Menu** first lists the Panel tools, and then the Drawer tools.

The Command Menu isn't considered a tool.

_Panel tools_ are tools which open in the main toolbar, which is at the top of DevTools by default, or in the Activity Bar when using Focus Mode.

_Drawer tools_ are tools which open in the Drawer by default, at the bottom of DevTools.

You can move any tool from the Panel toolbar to the Drawer tool, or vice versa, except for the toolbar icon tools, which are always on the main toolbar.

The main toolbar can be, in effect, converted to showing icons rather than tabs with text, and can be placed vertically or horizontally.

<!-- ====================================================================== -->
## See also
 
* [Overview of DevTools](index.md)
