---
title: Track changes to files using the Changes tool
description: The Changes tool tracks any changes you've made to CSS or JavaScript in Microsoft Edge DevTools.  It shows you what changes to make to your actual source files after you've successfully used DevTools to modify your webpage files sent from the server.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 10/28/2021
---
# Track changes to files using the Changes tool

The **Changes tool** tracks any changes you've made to CSS or JavaScript in DevTools.  It shows you what changes to make to your actual source files after you've successfully used DevTools to modify your webpage files sent from the server.

Use the **Changes** tool to quickly display all your changes in order to re-apply those changes to the actual source files in your editor (in your Integrated Development Environment; IDE).

<!-- todo: remove one -->
![Changes tool](../media/changes-tool/changes-tool-open.msft.png)

![Changes tool](../media/changes-tool/changes-tool-open-reduced.msft.png)

In DevTools, use any of the following ways to open the **Changes** tool.  The **Changes tool** is a **Drawer** tool; by default, it opens in the **Drawer**.


<!-- ====================================================================== -->
## Open the Changes tool by right-clicking in a changed file

In the [Sources](../sources/index.md) tool, right-click any file that shows that it was changed, and then select **Local modifications**:

<!-- todo: remove one -->
![Right-click a modified file, then select the 'Local Modifications' command](../media/changes-tool/changes-tool-from-sources.msft.png)

![Right-click a modified file, then select the 'Local Modifications' command](../media/changes-tool/changes-tool-from-sources-reduced.msft.png)


<!-- ====================================================================== -->
## Open the Changes tool by clicking the More Tools icon

On the main toolbar or **Drawer** toolbar, click the **More Tools** (`+`) icon and then select **Changes**:

<!-- todo: remove one -->
![The More Tools (+) icon and menu in the main toolbar, with the Changes tool selected](../media/changes-tool/changes-tool-via-plus-menu.msft.png)

![The More Tools (+) icon and menu in the main toolbar, with the Changes tool selected](../media/changes-tool/changes-tool-via-plus-menu-reduced.msft.png)

The **Changes** tool appears in the main toolbar or in the **Drawer**, depending on which toolbar you used.


<!-- ====================================================================== -->
## Open the Changes tool by clicking the Customize DevTools icon

Click **Customize and control DevTools** (`...`), point to **More tools**, and then select **Changes**:

<!-- todo: remove one -->
![Opening the Changes tool](../media/changes-tool/changes-tool-via-overflow-menu.msft.png)

![Opening the Changes tool](../media/changes-tool/changes-tool-via-overflow-menu-reduced.msft.png)


<!-- ====================================================================== -->
## Open the Changes tool by using the Command Menu

Open the [Command Menu](../command-menu/index.md) by pressing `Ctrl`+`Shift`+`P` on Windows/Linux or `Command`+`Shift`+`P` on Mac, and then type **changes**.  The **Show Changes** command is highlighted; press `Enter`.

<!-- todo: remove one -->
![In the Command Menu, start typing 'changes', and then select the 'Show Changes' command](../media/changes-tool/changes-tool-command-menu.msft.png)

![In the Command Menu, start typing 'changes', and then select the 'Show Changes' command](../media/changes-tool/changes-tool-command-menu-reduced.msft.png)


<!-- ====================================================================== -->
## Interpret added lines, removed lines, and differences in a line

Each modified file is listed in the side pane.  Selecting a file shows the modifications as a `diff` view.  You won't see the entire file, but only the lines that have changed, along with a few lines above and below the changed lines, for context.

A diff view of the file shows that there were two modifications in different parts of the file.  One change is a deletion and an insertion, and one change is a deleted line.

<!-- todo: remove one -->
![Diff view](../media/changes-tool/changes-tool-diff-view.msft.png)

![Diff view](../media/changes-tool/changes-tool-diff-view-reduced.msft.png)

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

<!-- todo: remove one -->
![Reverting changes](../media/changes-tool/changes-tool-undo-all.msft.png)

![Reverting changes](../media/changes-tool/changes-tool-undo-all-reduced.msft.png)


<!-- ====================================================================== -->
## Horizontally scroll entries

When you have made a change to a minified file, the **Changes tool** enables you to scroll horizontally to display all of your minified code.  To scroll horizontally, click the horizontal scrollbar or press the arrow keys.

<!-- todo: remove one -->
![Displaying a long line of code](../media/changes-tool/changes.msft.png)

![Displaying a long line of code](../media/changes-tool/changes-reduced.msft.png)
