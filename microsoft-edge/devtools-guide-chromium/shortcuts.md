---
title: Microsoft Edge DevTools Keyboard Shortcuts
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/06/2020
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
   limitations under the License. -->





# Microsoft Edge DevTools Keyboard Shortcuts   





This page is a reference of keyboard shortcuts in Microsoft Edge DevTools.

You can also find shortcuts in tooltips. Hover over a UI element of DevTools
to display its tooltip. If the element has a shortcut, the tooltip includes it.

## Keyboard shortcuts for opening DevTools   

To open DevTools, press the following keyboard shortcuts while your cursor is focused on the browser viewport:

| Action | Windows | macOS |  
|:--- |:--- |:--- |  
| Open whatever panel you used last | `F12` or `Control`+`Shift`+`I` | `Command`+`Option`+`I` |  
| Open the **Console** panel | `Control`+`Shift`+`J` | `Command`+`Option`+`J` |  
| Open the **Elements** panel | `Control`+`Shift`+`C` | `Command`+`Shift`+`C` or `Command`+`Option`+`C` |  

## Global keyboard shortcuts   

The following keyboard shortcuts are available in most, if not all, DevTools panels.

| Action | Windows | macOS |  
|:--- |:--- |:--- |  
| Show **Settings** | `?` or `F1` | `?` or `Function`+`F1` |  
| Focus the next panel | `Control`+`]` | `Command`+`]` |  
| Focus the previous panel | `Control`+`[` | `Command`+`[` |  
| Switch back to whatever [docking position][DevtoolsCustomizeIndexPlacement] you last used.  If DevTools has been in its default position for the entire session, then this shortcut undocks DevTools into a separate window | `Control`+`Shift`+`D` | `Command`+`Shift`+`D` |  
| Toggle [DeviceMode][DevtoolsDeviceModeIndex] | `Control`+`Shift`+`M` | `Command`+`Shift`+`M` |  
| Toggle **Inspect Element Mode** | `Control`+`Shift`+`C` | `Command`+`Shift`+`C` |  
| Open the [Command Menu][DevtoolsCommandMenuIndex] | `Control`+`Shift`+`P` | `Command`+`Shift`+`P` |  
| Toggle the [Drawer][DevtoolsCustomizeIndexDrawer] | `Escape` | `Escape` |  
| Normal reload | `F5` or `Control`+`R` | `Command`+`R` |  
| Hard reload | `Control`+`F5` or `Control`+`Shift`+`R` | `Command`+`Shift`+`R` |  
| Search for text within the current panel.  Not supported in the **Audits**, **Application**, and **Security** panels | `Control`+`F` | `Command`+`F` |  
| Opens the **Search** tab in the [Drawer][DevtoolsCustomizeIndexDrawer], which lets you search for text across all loaded resources | `Control`+`Shift`+`F` | `Command`+`Option`+`F` |  
| Open a file in the **Sources** panel | `Control`+`O` or `Control`+`P` | `Command`+`O` or `Command`+`P` |  
| Zoom in | `Control`+`Shift`+`+` | `Command`+`Shift`+`+` |  
| Zoom out | `Control`+`-` | `Command`+`-` |  
| Restore default zoom level | `Control`+`0` | `Command`+`0` |  
| Run snippet | Press `Control`+`O` to open the [Command Menu][DevtoolsCommandMenuIndex], type `!` followed by the name of the script, then press `Enter` | Press `Command`+`O` to open the [Command Menu][DevtoolsCommandMenuIndex], type `!` followed by the name of the script, then press `Enter` |  

<!-- TODO make a bug about this UIPlacement link being ambiguous.  -->  
<!-- TODO: Link "Inspect Element Mode" when a good section exists.  -->  

## Elements panel keyboard shortcuts   

| Action | Windows | macOS |  
|:--- |:--- |:--- |  
| Undo change | `Control`+`Z` | `Command`+`Z` |  
| Redo change | `Control`+`Y` | `Command`+`Shift`+`Z` |  
| Select the element above / below the currently-selected element | `Up Arrow` / `Down Arrow` | `Up Arrow` / `Down Arrow` |  
| Expand the currently-selected node. If the node is already expanded, this shortcut selects the element below it | `Right Arrow` | `Right Arrow` |  
| Collapse the currently-selected node. If the node is already collapsed, this shortcut selects the element above it | `Left Arrow` | `Left Arrow` |  
| Expand or collapse the currently-selected node and all of its children | Hold `Control`+`Alt`, then click the arrow icon next to the element's name | Hold `Option`, then click the arrow icon next to the element's name |  
| Toggle **Edit Attributes** mode on the currently-selected element | `Enter` | `Enter` |  
| Select the next / previous attribute after entering **Edit Attributes** mode | `Tab` / `Shift`+`Tab` | `Tab` / `Shift`+`Tab` |  
| Hide the currently-selected element | `H` | `H` |  
| Toggle **Edit as HTML** mode on the currently-selected element | `Function`+`F2` | `F2` |  

### Styles pane keyboard shortcuts   

| Action | Windows | macOS |  
|:--- |:--- |:--- |  
| Go to the line where a property value is declared | Hold `Control`, then click the property value | Hold `Command`, then click the property value |  
| Cycle through the RBGA, HSLA, and Hex representations of a color value | Hold `Shift`, then click the **Color Preview** box next to the value | Hold `Shift`, then click the **Color Preview** box next to the value |  
| Select the next / previous property or value | Click a property name or value, then press `Tab` / `Shift`+`Tab` | Click a property name or value, then press `Tab` / `Shift`+`Tab` |  
| Increment / decrement a property value by 0.1 | Click a value, then press Alt+Up Arrow / `Alt`+`Down Arrow` | Click a value, then press `Option`+`Up Arrow` / Option+Down Arrow |  
| Increment / decrement a property value by 1 | Click a value, then press `Up Arrow` / `Down Arrow` | Click a value, then press `Up Arrow` / `Down Arrow` |  
| Increment / decrement a property value by 10 | Click a value, then press `Shift`+`Up Arrow` / `Shift`+`Down Arrow` | Click a value, then press `Shift`+`Up Arrow` / `Shift`+`Down Arrow` |  
| Increment / decrement a property value by 100 | Click a value, then press `Control`+`Up Arrow` / `Control`+`Down Arrow` | Click a value, then press `Command`+`Up Arrow` / `Command`+`Down Arrow` |  

## Sources panel keyboard shortcuts   

| Action | Windows | macOS |  
|:--- |:--- |:--- |  
| Pause script runtime \(if currently running\) or resume \(if currently paused\) | `F8` or `Control`+`\` | `F8` or `Command`+`\` |  
| Step over next function call | `F10` or `Control`+`'` | `F10` or `Command`+`'` |  
| Step into next function call | `F11` or `Control`+`;` | `F11` or `Command`+`;` |  
| Step out of current function | `Shift`+`F11` or `Control`+`Shift`+`;` | `Shift`+`F11` or `Command`+`Shift`+`;` |  
| Continue to a certain line of code while paused | Hold `Control`, then click the line of code | Hold `Command`, then click the line of code |  
| Select the call frame below / above the currently-selected frame | `Control`+`.` / `Control`+`,` | `Control`+`.` / `Control`+`,` |  
| Save changes to local modifications | `Control`+`S` | `Command`+`S` |  
| Save all changes | `Control`+`Alt`+`S` | `Command`+`Option`+`S` |  
| Go to line | `Control`+`G` | `Control`+`G` |  
| Jump to a line number of the currently-open file | Press `Control`+`O` to open the [Command Menu][DevtoolsCommandMenuIndex], type `:` followed by the line number, then press `Enter` | Press `Command`+`O` to open the [Command Menu][DevtoolsCommandMenuIndex], type `:` followed by the line number, then press `Enter` |  
| Jump to a column of the currently-open file \(for example line 5, column 9\) | Press `Control`+`O` to open the [Command Menu][DevtoolsCommandMenuIndex], type `:`, then the line number, then another `:`, then the column number, then press `Enter` | Press `Command`+`O` to open the [Command Menu][DevtoolsCommandMenuIndex], type `:`, then the line number, then another `:`, then the column number, then press `Enter` |  
| Go to a function declaration \(if currently-open file is HTML or a script\), or a rule set \(if currently-open file is a stylesheet\) | Press `Control`+`Shift`+`O`, then type in the name of the declaration / rule set, or select it from the list of options | Press `Command`+`Shift`+`O`, then type in the name of the declaration / rule set, or select it from the list of options |  
| Close the active tab | `Alt`+`W` | `Option`+`W` |  

<!-- TODO: Link Continue Release Notes "Continue to a certain line of code while paused" when a good section exists.  -->  

### Code Editor keyboard shortcuts   

| Action | Windows | macOS |  
|:--- |:--- |:--- |  
| Delete all characters in the last word, up to the cursor | `Control`+`Delete` | `Option`+`Delete` |  
| Add or remove a line-of-code breakpoint | Focus your cursor on the line, then press `Control`+`B` | Focus your cursor on the line, then press `Command`+`B` |  
| Go to matching bracket | `Control`+`M` | `Control`+`M` |  
| Toggle single-line comment. If multiple lines are selected, DevTools adds a comment to the start of each line | `Control`+`/` | `Command`+`/` |  
| Select / de-select the next occurrence of whatever word the cursor is on. Each occurrence is highlighted simultaneously | `Control`+`D` / `Control`+`U` | `Command`+`D` / `Command`+`U` |  

<!-- TODO: Link JavaScript Breakpoints LOC "line-of-code breakpoint" when a good section exists.  -->  

## Performance panel keyboard shortcuts   

| Action | Windows | macOS |  
|:--- |:--- |:--- |  
| Start / stop recording | `Control`+`E` | `Command`+`E` |  
| Save recording | `Control`+`S` | `Command`+`S` |  
| Load recording | `Control`+`O` | `Command`+`O` |  

## Memory panel keyboard shortcuts 

| Action | Windows | macOS |  
|:--- |:--- |:--- |  
| Start / stop recording | `Control`+`E` | `Command`+`E` |  

## Console panel keyboard shortcuts   

| Action | Windows | macOS |  
|:--- |:--- |:--- |  
| Accept autocomplete suggestion | `Right Arrow` or `Tab` | `Right Arrow` or `Tab` |  
| Reject autocomplete suggestion | `Escape` | `Escape` |  
| Get previous statement | `Up Arrow` | `Up Arrow` |  
| Get next statement | `Down Arrow` | `Down Arrow` |  
| Focus the **Console** | `Control`+ `` ` `` | `Control`+`` ` `` |  
| Clear the **Console** | `Control`+`L` | `Command`+`K` or `Option`+`L` |  
| Force a multi-line entry. Note that DevTools should detect multi-line scenarios by default, so this shortcut is now usually unnecessary | `Shift`+`Enter` | `Command`+`Return` |  
| Run | `Enter` | `Return` |  
| Expand all sub-properties of an object that's been logged to the Console | Hold `Alt`, then click **Expand**![Expand][ImageExpandIcon] | Hold `Alt`, then click **Expand**![Expand][ImageExpandIcon] |  

 



<!-- image links -->  

[ImageExpandIcon]: images/expand.msft.png  

<!-- links -->  

[DevtoolsCommandMenuIndex]: command-menu/index.md "Run Commands With The Microsoft Edge DevTools Command Menu"  
[DevtoolsCustomizeIndexDrawer]: customize/index.md#drawer "Drawer - Customize Microsoft Edge DevTools"  
[DevtoolsCustomizeIndexPlacement]: customize/index.md#change-devtools-placement "Change DevTools placement - Customize Microsoft Edge DevTools"  
[DevtoolsDeviceModeIndex]: device-mode/index.md "Simulate Mobile Devices with Device Mode in Microsoft Edge DevTools"  

<!--[DevtoolsJavascriptBreakpointsLOC]: javascript/breakpoints#line-of-code-breakpoints "Line-of-code breakpoints - How To Pause Your Code With Breakpoints In Microsoft Edge DevTools"  -->  

<!--[201705ReleaseNotesContinue]: whats-new/2017/05/devtools-release-notes#continue  -->  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/shortcuts) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
