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

The **Changes tool** tracks any changes you have made to CSS or JavaScript in the DevTools. Use the **Changes tool** to quickly display all your changes and take those back to your editor/IDE. This helps you create the necessary changes in your source files once you successfully used the DevTools to fix a certain problem. 

## Opening the Changes tool 

You can reach the **Changes tool** in different ways.

1. You can use the `+` menu and select `Changes`

     :::image type="content" source="media/changes-tool-via-plus-menu.msft.png" alt-text="DevTools showing the + button with the context menu and the Changes tool highlighted":::

1. You can select `Changes` from the `…` oveflow menu and the `More tools` section 

     :::image type="content" source="media/changes-tool-via-overflow-menu.msft.png" alt-text="DevTools with an open overflow menu showing the More Tools and Changes options":::

1. In the **Sources** tool, right-click any file that shows that it was changed and select **Local modifications**.

     :::image type="content" source="media/changes-tool-from-sources.msft.png" alt-text="The DevTools Sources tool showing a modified file and the open context menu offering the link to the Local Modifications option":::

1. You can select `Ctrl`+`Shift`+`P` (`CMD`+`Shift`+`P` on Macs) anywhere DevTools to open the [Command Menu](../command-menu/index.md) and type `changes`. select and run the **Show Changes** command.

     :::image type="content" source="media/changes-tool-command-menu.msft.png" alt-text="The Command Menu open on top of DevTools showing the Show Changes option":::

Either way will open the the **Changes tool** in the DevTools drawer.

:::image type="content" source="media/changes-tool-open.msft.png" alt-text="Developer tools with the Changes tool open in the drawer showing three files that have been modified and the modifications of the selected file":::

## Using the Changes tool

Each modified file is listed in the side pane and activating it shows the modifications as a `diff` view. You won't see the whole file you changed using any of the tools available in DevTools but only the parts that have changed with a few lines before and after displayed to provide context. 

:::image type="content" source="media/changes-tool-diff-view.msft.png" alt-text="A diff view of the file showing that there were two modifications in differnt parts of the file, one of them with a deletion and an insertion and one with a deleted line":::

Each line that was removed from the code is preceeded by a `-` and colored red and each new line has a `+` in front of it and is colored green. You can also see the changes in the line numbers. Clicking any of the modified items will take you to the **Sources** tool to the location in the original file. 

You also get an overview on insertions and deletions that happened to the current file. Activating the `Revert all changes to the current file` button shown as a circular arrow will undo all changes.
 
:::image type="content" source="media/changes-tool-undo-all.msft.png" alt-text="The Revert all changes to the current file button will allow you to undo everything that was done to the current file":::

### Use the arrow keys to scroll in the Changes tool

When you have made a change to a minified file, the **Changes tool** enables you to scroll horizontally to display all of your minified code. You can scroll horizontally using the arrow keys on your keyboard.

:::image type="content" source="media/changes.msft.png" alt-text="Scrolling horizontally with arrow keys to display minified code in the Changes tool.":::
