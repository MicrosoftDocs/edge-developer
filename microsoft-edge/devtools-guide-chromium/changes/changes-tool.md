---
description: The Changes tool tracks any changes you have made to CSS or JavaScript in DevTools.
title: Changes tool
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 10/28/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, changes
---
# Changes tool

The **Changes tool** tracks any changes you have made to CSS or JavaScript in DevTools.  Use the **Changes** tool to quickly display all your changes in order to re-apply those changes to the actual source files in your editor (in your Integrated Development Environment; IDE).  The **Changes** tool shows you what changes to make to your actual source files after you've successfully used DevTools to investigate and fix a problem.

:::image type="content" source="../media/changes-tool/changes-tool-open-reduced.msft.png" alt-text="Developer tools with the Changes tool open in the drawer showing three files that have been modified and the modifications of the selected file." lightbox="../media/changes-tool/changes-tool-open.msft.png":::

In DevTools, use any of the following ways to open the **Changes** tool.  The **Changes tool** is a **Drawer** tool; by default, it opens in the **Drawer**.


<!-- ====================================================================== -->
## Open the Changes tool by right-clicking in a changed file

In the [Sources](../sources/index.md) tool, right-click any file that shows that it was changed, and then select **Local modifications**:

:::image type="content" source="../media/changes-tool/changes-tool-from-sources-reduced.msft.png" alt-text="To open the Changes tool, right-click a modified file in the Sources tool, then select the 'Local Modifications' command." lightbox="../media/changes-tool/changes-tool-from-sources.msft.png":::


<!-- ====================================================================== -->
## Open the Changes tool by clicking the More Tools icon

On the main toolbar or **Drawer** toolbar, click the **More Tools** (`+`) icon and then select **Changes**:

:::image type="content" source="../media/changes-tool/changes-tool-via-plus-menu-reduced.msft.png" alt-text="The More Tools (+) icon and menu in the main toolbar, with the Changes tool selected." lightbox="../media/changes-tool/changes-tool-via-plus-menu.msft.png":::

The **Changes** tool appears in the main toolbar or in the **Drawer**, depending on which toolbar you used.


<!-- ====================================================================== -->
## Open the Changes tool by clicking the Customize DevTools icon

Click **Customize and control DevTools** (`...`), point to **More tools**, and then select **Changes**:

:::image type="content" source="../media/changes-tool/changes-tool-via-overflow-menu-reduced.msft.png" alt-text="Click 'Customize and control DevTools' (...), point to 'More tools', and then select 'Changes'." lightbox="../media/changes-tool/changes-tool-via-overflow-menu.msft.png":::


<!-- ====================================================================== -->
## Open the Changes tool by using the Command Menu

Open the [Command Menu](../command-menu/index.md) by pressing `Ctrl`+`Shift`+`P` on Windows/Linux or `Command`+`Shift`+`P` on Mac, and then type `changes`.  The **Show Changes** command is highlighted; press `Enter`.

:::image type="content" source="../media/changes-tool/changes-tool-command-menu-reduced.msft.png" alt-text="In the Command Menu, start typing 'changes', and then select the 'Show Changes' command." lightbox="../media/changes-tool/changes-tool-command-menu.msft.png":::


<!-- ====================================================================== -->
## Interpret added lines, removed lines, and differences in a line

Each modified file is listed in the side pane.  Selecting a file shows the modifications as a `diff` view.  You won't see the entire file, but only the lines that have changed, along with a few lines above and below the changed lines, for context.

:::image type="content" source="../media/changes-tool/changes-tool-diff-view-reduced.msft.png" alt-text="A diff view of the file showing that there were two modifications in different parts of the file.  One change is a deletion and an insertion, and one change is a deleted line." lightbox="../media/changes-tool/changes-tool-diff-view.msft.png":::

| Type of change | Indicator |
|---|--|
| Removed line | Each line that was removed from the code is preceded by a `-` and is colored red. |
| Added line | Each new line has a `+` in front of it and is colored green. |
| Changed line | An adjacent pair of lines, with a `-` line and then a `+` line. |

Changes are represented as insertion or deletion of individual lines of code, in the two columns of line numbers.  The left column represents line numbers in the old file, and the right column represents lines numbers in the new file.


<!-- ====================================================================== -->
## Open a changed file in the Sources tool

Clicking a modified line in the **Changes** tool opens the file in the [Sources](../sources/index.md) tool, scrolled to the modified line.


<!-- ====================================================================== -->
## Undo all changes

To undo all changes, click the `Revert all changes to the current file` button, shown as a circular arrow.

:::image type="content" source="../media/changes-tool/changes-tool-undo-all-reduced.msft.png" alt-text="To undo all changes that you made to the current file, click the button 'Revert all changes to the current file'." lightbox="../media/changes-tool/changes-tool-undo-all.msft.png":::


<!-- ====================================================================== -->
## Horizontally scroll entries

When you have made a change to a minified file, the **Changes tool** enables you to scroll horizontally to display all of your minified code.  To scroll horizontally, click the horizontal scrollbar or press the arrow keys.

:::image type="content" source="../media/changes-tool/changes-reduced.msft.png" alt-text="To display a long line of code in the Changes tool, press the arrow keys." lightbox="../media/changes-tool/changes.msft.png":::
