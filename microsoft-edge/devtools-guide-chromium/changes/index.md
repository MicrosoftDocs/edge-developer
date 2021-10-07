---
description: The Changes tool tracks any changes you have made to CSS or JavaScript in DevTools.
title: Changes tool
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 10/03/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, changes
---
# Changes tool

<!-- todo: needs edit pass, merge two sections -->

The **Changes tool** tracks any changes you have made to CSS or JavaScript in the DevTools.  You are able to use the **Changes tool** to quickly display all your changes and take those back to your editor/IDE.

<!-- check other doc set for info about "changes tool" -->

<!-- copied from
https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/whats-new/2020/03/devtools#use-the-arrow-keys-to-scroll-in-the-changes-tool
-->
<!-- ====================================================================== -->
## Use the arrow keys to scroll in the Changes tool

To open the **Changes tool**, select `Ctrl`+`Shift`+`P` in the DevTools to open the [Command Menu](../command-menu/index.md) and type `changes`.  select and run the **Show Changes** command to open the **Changes tool** in the DevTools drawer.

When you have made a change to a minified file, the **Changes tool** enables you to scroll horizontally to display all of your minified code.  Starting in Microsoft Edge 83, you may now scroll horizontally using the arrow keys on your keyboard.

:::image type="content" source="media/changes.msft.png" alt-text="Scrolling horizontally with arrow keys to display minified code in the Changes tool.":::


<!-- copied from Microsoft Edge Developer Tools overview -->
<!-- ====================================================================== -->
## Command Menu

The Command Menu allows you to type commands to display, hide, or run features in the DevTools.

1. Open the **Command Menu**.  To do this, you can select `Ctrl`+`Shift`+`P` in DevTools.
1. Enter the word **changes**, and then select **Drawer: Show Changes**.

The **Changes** tool opens, which is useful when you edit CSS.  In this case, the command menu provides a fast alternative to selecting **More Tools** (...) and then selecting **Changes**, or editing a `.js` file in the **Sources** tool, then right-clicking and selecting **Local modifications**.

The Command Menu displays the options after you type `changes`:

<!-- if make this image smaller, maybe keep the big image and use as lightbox, use different .png names -->

:::image type="content" source="media/devtools-intro-command-menu-show-changes-resized.msft.png" alt-text="Command menu displays the options after you type changes." lightbox="media/devtools-intro-command-menu-show-changes.msft.png":::

DevTools with the **Changes** tool open:

<!-- if make this image smaller, maybe keep the big image and use as lightbox, use different .png names -->

:::image type="content" source="media/devtools-intro-showing-changes-resized.msft.png" alt-text="DevTools with the Changes tool open." lightbox="media/devtools-intro-showing-changes.msft.png":::
