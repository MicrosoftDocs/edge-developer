---
description: The default keyboard shortcuts for Microsoft Edge DevTools.
title: Keyboard shortcuts
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/04/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
<!-- Copyright Kayce Basques

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->
# Keyboard shortcuts

These are the default keyboard shortcuts for Microsoft Edge DevTools.

Tooltips often show a keyboard shortcut.  Hover on a UI element of DevTools to display the tooltip.  If the element has a shortcut, the tooltip includes it.

See also [Customize keyboard shortcuts](../customize/shortcuts.md).


<!-- ====================================================================== -->
## Keyboard shortcuts for opening DevTools

To open DevTools, press the following keyboard shortcuts while your cursor is focused on the browser viewport:

| Action | Windows/Linux | macOS |
|---|---|---|
| Open whatever panel you used last | `F12` or `Control`+`Shift`+`I` | `Command`+`Option`+`I` |
| Open the **Console** tool | `Control`+`Shift`+`J` | `Command`+`Option`+`J` |
| Open the **Elements** tool | `Control`+`Shift`+`C` | `Command`+`Shift`+`C` or `Command`+`Option`+`C` |


<!-- ====================================================================== -->
## Global keyboard shortcuts

The following keyboard shortcuts are available in most DevTools panels.

| Action | Windows/Linux | macOS |
|---|---|---|
| Show **Settings** | `?` or `F1` | `?` or `Function`+`F1` |
| Focus the next panel | `Control`+`]` | `Command`+`]` |
| Focus the previous panel | `Control`+`[` | `Command`+`[` |
| Switch back to whatever [docking position](../customize/index.md#change-devtools-placement) you last used.  If DevTools have been in the default position for the entire session, then this shortcut undocks DevTools into a separate window | `Control`+`Shift`+`D` | `Command`+`Shift`+`D` |
| Toggle [Device emulation](../device-mode/index.md) | `Control`+`Shift`+`M` | `Command`+`Shift`+`M` |
| Toggle **Inspect Element Mode** | `Control`+`Shift`+`C` | `Command`+`Shift`+`C` |
| Open the [Command Menu](../command-menu/index.md) | `Control`+`Shift`+`P` | `Command`+`Shift`+`P` |
| Toggle the [Drawer](../customize/index.md#drawer) | `Escape` | `Escape` |
| Normal refresh | `F5` or `Control`+`R` | `Command`+`R` |
| Hard refresh | `Control`+`F5` or `Control`+`Shift`+`R` | `Command`+`Shift`+`R` |
| Search for text within the current panel.  Not supported in the **Audits**, **Application**, and **Security** tools | `Control`+`F` | `Command`+`F` |
| Opens the **Search** tab in the [Drawer](../customize/index.md#drawer), which lets you search for text across all loaded resources | `Control`+`Shift`+`F` | `Command`+`Option`+`F` |
| Open a file in the **Sources** tool | `Control`+`O` or `Control`+`P` | `Command`+`O` or `Command`+`P` |
| Zoom in | `Control`+`Shift`+`+` | `Command`+`Shift`+`+` |
| Zoom out | `Control`+`-` | `Command`+`-` |
| Restore default zoom level | `Control`+`0` | `Command`+`0` |
| Run snippet | Press `Control`+`O` to open the [Command Menu](../command-menu/index.md), type `!` followed by the name of the script, then press `Enter` | Press `Command`+`O` to open the [Command Menu](../command-menu/index.md), type `!` followed by the name of the script, then press `Enter` |

<!-- TODO: make a bug about this UIPlacement link being ambiguous.  -->
<!-- TODO: Link "Inspect Element Mode" when a good section exists.  -->


<!-- ====================================================================== -->
## Elements tool keyboard shortcuts

| Action | Windows/Linux | macOS |
|---|---|---|
| Undo change | `Control`+`Z` | `Command`+`Z` |
| Redo change | `Control`+`Y` | `Command`+`Shift`+`Z` |
| Select the element above / below the currently selected element | `Up Arrow` / `Down Arrow` | `Up Arrow` / `Down Arrow` |
| Expand the currently selected node.  If the node is already expanded, this shortcut selects the element below it | `Right Arrow` | `Right Arrow` |
| Collapse the currently selected node.  If the node is already collapsed, this shortcut selects the element above it | `Left Arrow` | `Left Arrow` |
| Expand or collapse the currently selected node and all of the children | Hold `Control`+`Alt`, then click the **arrow** icon next to the name of the element | Hold `Option`, then click the **arrow** icon next to the name of the element |
| Toggle **Edit Attributes** mode on the currently selected element | `Enter` | `Enter` |
| Select the next / previous attribute after entering **Edit Attributes** mode | `Tab` / `Shift`+`Tab` | `Tab` / `Shift`+`Tab` |
| Hide the currently selected element | `H` | `H` |
| Toggle **Edit as HTML** mode on the currently selected element | `Function`+`F2` | `F2` |

### Styles pane keyboard shortcuts

| Action | Windows/Linux | macOS |
|---|---|---|
| Go to the line where a property value is declared | Hold `Control`, then click the property value | Hold `Command`, then click the property value |
| Cycle through the RBGA, HSLA, and Hex representations of a color value | Hold `Shift`, then click the **Color Preview** box next to the value | Hold `Shift`, then click the **Color Preview** box next to the value |
| Select the next / previous property or value | Click a property name or value, then press `Tab` / `Shift`+`Tab` | Click a property name or value, then press `Tab` / `Shift`+`Tab` |
| Increment / decrement a property value by 0.1 | Click a value, then press `Alt`+`Up Arrow` / `Alt`+`Down Arrow` | Click a value, then press `Option`+`Up Arrow` / Option+Down Arrow |
| Increment / decrement a property value by 1 | Click a value, then press `Up Arrow` / `Down Arrow` | Click a value, then press `Up Arrow` / `Down Arrow` |
| Increment / decrement a property value by 10 | Click a value, then press `Shift`+`Up Arrow` / `Shift`+`Down Arrow` | Click a value, then press `Shift`+`Up Arrow` / `Shift`+`Down Arrow` |
| Increment / decrement a property value by 100 | Click a value, then press `Control`+`Up Arrow` / `Control`+`Down Arrow` | Click a value, then press `Command`+`Up Arrow` / `Command`+`Down Arrow` |
| Cycle through the degrees (deg), gradians (grad), radians (rad) and turns (turn) representations of an angle value | Hold `Shift` then click the **Angle Preview** box next to the value | Hold `Shift` then click the **Angle Preview** box next to the value |
| Increment / decrement an angle value by 1 | Click the **Angle Preview** box next to the value then press `Up Arrow` / `Down Arrow` | Click the **Angle Preview** box next to the value then press `Up Arrow` / `Down Arrow` |
| Increment / decrement an angle value by 10 | Click the **Angle Preview** box next to the value then press `Shift`+`Up Arrow` / `Shift`+`Down Arrow` | Click the **Angle Preview** box next to the value then press `Shift`+`Up Arrow` / `Shift`+`Down Arrow` |
| Increment / decrement an angle value by 15 | Click the **Angle Preview** box next to the value then press `Shift`, click / mouse slide on the **Angle Clock Overlay** | Click the **Angle Preview** box next to the value then press `Shift`, click / mouse slide on the **Angle Clock Overlay** |


<!-- ====================================================================== -->
## Sources tool keyboard shortcuts

| Action | Windows/Linux | macOS |
|---|---|---|
| Pause script runtime (if currently running) or resume (if currently paused) | `F8` or `Control`+`\` | `F8` or `Command`+`\` |
| Step over next function call | `F10` or `Control`+`'` | `F10` or `Command`+`'` |
| Step into next function call | `F11` or `Control`+`;` | `F11` or `Command`+`;` |
| Step out of current function | `Shift`+`F11` or `Control`+`Shift`+`;` | `Shift`+`F11` or `Command`+`Shift`+`;` |
| Continue to a [specific line of code while paused](../javascript/breakpoints.md#line-of-code-breakpoints) | Hold `Control`, then click the line of code | Hold `Command`, then click the line of code |
| Select the call frame below / above the currently selected frame | `Control`+`.` / `Control`+`,` | `Control`+`.` / `Control`+`,` |
| Save changes to local modifications | `Control`+`S` | `Command`+`S` |
| Save all changes | `Control`+`Alt`+`S` | `Command`+`Option`+`S` |
| Navigate to line | `Control`+`G` | `Control`+`G` |
| Jump to a line number of the currently open file | Press `Control`+`O` to open the [Command Menu](../command-menu/index.md), type `:` followed by the line number, then press `Enter` | Press `Command`+`O` to open the [Command Menu](../command-menu/index.md), type `:` followed by the line number, then press `Enter` |
| Jump to a column of the currently open file (for example line 5, column 9) | Press `Control`+`O` to open the [Command Menu](../command-menu/index.md), type `:`, then the line number, then another `:`, then the column number, then press `Enter` | Press `Command`+`O` to open the [Command Menu](../command-menu/index.md), type `:`, then the line number, then another `:`, then the column number, then press `Enter` |
| Navigate to a function declaration, if the current file is HTML or a script.  <br />  Navigate to a rule set, if the current file is a stylesheet.  | Press `Control`+`Shift`+`O`, then type in the name of the declaration / rule set, or select it from the list of options | press `Command`+`Shift`+`O`, then type in the name of the declaration / rule set, or select it from the list of options |
| Close the active tab | `Alt`+`W` | `Option`+`W` |

### Code Editor keyboard shortcuts

| Action | Windows/Linux | macOS |
|---|---|---|
| Delete all characters in the last word, up to the cursor | `Control`+`Delete` | `Option`+`Delete` |
| Add or remove a [line-of-code breakpoint](../javascript/breakpoints.md#line-of-code-breakpoints) | Focus your cursor on the line, then press `Control`+`B` | Focus your cursor on the line, then press `Command`+`B` |
| Navigate to matching bracket | `Control`+`M` | `Control`+`M` |
| Toggle single-line comment.  If multiple lines are selected, DevTools add a comment to the start of each line | `Control`+`/` | `Command`+`/` |
| Turn on or off the next occurrence of whatever word the cursor is on.  Each occurrence is highlighted simultaneously | `Control`+`D` / `Control`+`U` | `Command`+`D` / `Command`+`U` |


<!-- ====================================================================== -->
## Performance tool keyboard shortcuts

| Action | Windows/Linux | macOS |
|---|---|---|
| Start / stop recording | `Control`+`E` | `Command`+`E` |
| Save recording | `Control`+`S` | `Command`+`S` |
| Load recording | `Control`+`O` | `Command`+`O` |


<!-- ====================================================================== -->
## Memory tool keyboard shortcuts

| Action | Windows/Linux | macOS |
|---|---|---|
| Start / stop recording | `Control`+`E` | `Command`+`E` |


<!-- ====================================================================== -->
## Console tool keyboard shortcuts

| Action | Windows/Linux | macOS |
|---|---|---|
| Accept autocomplete suggestion | `Right Arrow` or `Tab` | `Right Arrow` or `Tab` |
| Reject autocomplete suggestion | `Escape` | `Escape` |
| Get previous statement | `Up Arrow` | `Up Arrow` |
| Get next statement | `Down Arrow` | `Down Arrow` |
| Focus the **Console** | `Control`+ `` ` `` | `Control`+`` ` `` |
| Clear the **Console** | `Control`+`L` | `Command`+`K` or `Option`+`L` |
| Force a multi-line entry.  This shortcut is mostly unnecessary, because DevTools should detect multi-line scenarios by default | `Shift`+`Enter` | `Command`+`Return` |
| Run | `Enter` | `Return` |
| Expand all subproperties of an object that are logged to the Console | Hold `Alt`, then click **Expand** (![Expand](../media/expand-icon.msft.png)) | Hold `Alt`, then click **Expand** (![Expand](../media/expand-icon.msft.png)). |


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/shortcuts) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools \& Lighthouse).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
