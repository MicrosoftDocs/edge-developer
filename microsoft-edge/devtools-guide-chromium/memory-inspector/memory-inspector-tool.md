---
title: Inspect a JavaScript ArrayBuffer with the Memory Inspector tool
description: The Memory Inspector tool in Microsoft Edge DevTools.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: devtools
ms.date: 04/08/2022
---

<!-- Copyright Kim-Anh Tran

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->

# Inspect a JavaScript ArrayBuffer using Memory Inspector

Use Memory Inspector to view a JavaScript ArrayBuffer and the resizable ArrayBuffer `WebAssembly.Memory`.<!-- OR should it say: WASM resizable `ArrayBuffer`. ? --> You can open Memory Inspector from the [DevTools menu](#open-memory-inspector-from-the-devtools-menu) or [while debugging](#open-memory-inspector-while-debugging).

<!-- add more scenario type info, ask Zoher -->


<!-- ====================================================================== -->
## Open the test site in Microsoft Edge

1. Start Microsoft Edge.

1. Open the test site [https://microsoftedge.github.io/Demos/devtools-a11y-testing/](https://microsoftedge.github.io/Demos/devtools-a11y-testing/).


<!-- ====================================================================== -->
## Open Memory Inspector from the DevTools menu

1. Open DevTools by pressing `F12` or `Ctrl`+`Shift`+`I` (Windows, Linux) or `Command`+`Option`+`I` (macOS).

1. To open Memory Inspector select **More Tools** (**+**) > Memory Inspector

    ![Welcome to Microsoft Edge DevTools](../media/memory-inspector-devtools-more-tools.png)

<!-- ====================================================================== -->
## Open Memory Inspector while debugging

1. Open the demo webpage [Inspect ArrayBuffers in JS (Memory in JS)](https://memory-inspector.glitch.me/demo-js.html). <!-- We need a microsoftedge.github.io with a JavaScript ArrayBuffer comparable to memory-inspector.glitch.me/demo-js.html -->

1. Open DevTools by pressing `F12` or `Ctrl`+`Shift`+`I` (Windows, Linux) or `Command`+`Option`+`I` (macOS).

1. Click **Sources** and open the `demo-js.js` file.

1. Set a breakpoint at line **18** as shown in the following image.

    ![Memory Inspector set breakpoint in a JavaScript file](../media/memory-inspector-set-breakpoint.png)

1. Refresh the webpage. It fails to display because the JavaScript stops processing at the breakpoint.

1. In the right Debugger pane under **Scope**, find the `buffer` line.

1. From the `buffer` line you can open Memory Inspector using one of the following methods:

    * Click on the **Reveal in Memory Inspector panel** icon at the end of the `buffer` property line (![Reveal in Memory Inspector panel icon](../media/memory-inspector-open-from-buffer-icon.png)), or
 
    * From the context menu. Right click on the `buffer` property and select **Reveal in Memory Inspector panel**.

    ![Open Memory Inspector from the buffer property line context menu](../media/memory-inspector-open-from-buffer.png)

    The ArrayBuffer opens in Memory Inspector.

    ![ArrayBuffer open in the Memory Inspector panel](../media/memory-inspector-panel.png)

### Inspect multiple objects

You can inspect multiple objects at the same time such as DataView and TypedArray.

In the demo webpage line `b2` is a TypedArray. Right click on the `b2` property and select **Reveal in Memory Inspector panel**.

A new tab opens next to the first tab in Memory Inspector.

![Two ArrayBuffer tabs open in the Memory Inspector panel](../media/memory-inspector-panel-two.png)

<!-- ====================================================================== -->
## Navigating in Memory Inspector

The Memory Inspector panel includes 3 types of content:

* [Navigation bar](#navigation-bar)
* [Memory buffer](#memory-buffer)
* [Value inspector](#value-inspector)

### Navigation bar

![Memory Inspector panel Navigation bar](../media/memory-inspector-panel-navigation-bar.png)
 
* The address input shows the current byte address in hex format. You can change the value to jump to a new location in the memory buffer. Click in the text box and change the value to 0x00000008. Notice that the Memory buffer immediately jumps to that byte address.

* Memory buffers may be longer than one page. Use the left and right arrow buttons to navigate Previous page and Next page, respectively. If there is only one page of memory buffer data the arrows take you to the beginning and ending of the page.

* Use the far left history arrows to Go back in address history and Go forward in address history.

* If the Memory buffer does not automatically update when stepping through values, click Refresh.

### Memory buffer

![Memory Inspector panel Memory buffer](../media/memory-inspector-panel-memory-buffer.png)
 
* From the left, the address is displayed in hex format.

* The memory is also shown in hex format, each byte separated by a space. The currently selected byte is highlighted. You can click on the byte or navigate with keyboard (left, right, up, down).

* An ASCII representation of the memory is shown on the right side. A highlight shows the corresponding value to the selected bits on the byte. Similar to memory, you can click on the byte or navigate with keyboard (left, right, up, down).

### Value inspector

![Memory Inspector panel Value inspector](../media/memory-inspector-panel-value-inspector.png)
 
* Click the current Endian to switch between Big endian and Little endian and to open the settings.

* Open Settings (gear icon) to select which value types to see by default in the inspector.

* The main area shows each value interpretation per the settings. By default, all are shown.

* You can change the encoding view using the drop-down list. For integers you can choose from decimal `dec`, hexadecimal `hex`, and octal `oct`. For floats you can choose from scientific notation `sci` or decimal notation `dec`.


<!-- ====================================================================== -->
## Inspecting memory

Complete the following steps to start debugging in Memory Inspector.

1. In the **Navigation bar** change the address to `0x00000027`.

1. Observe the ASCII representation and the value interpretations. All values are empty at the moment.

1. Notice the blue Jump to address button next to Pointer 32-bit and Pointer 64-bit. You can click on it to jump to the address. The buttons are grayed out and not clickable if the addresses are not valid.  

1. Click on Resume script execution to step through the code.  

    Notice the ASCII representation is now updated. All the value interpretations are updated as well.  

1. Customize the Value inspector to show only floating point. Click on the settings button and check only Float 32-bit and Float 64-bit.  

1. Change the encoding from dec to sci. Notice the value representations are updated accordingly.  

1. Try to navigate the memory buffer with your keyboard or using the navigation bar. Repeat step 4 to observe values changes.


<!-- ====================================================================== -->
## WebAssembly memory inspection

For Wasm memory inspection, the process is similar to the JavaScript one.

1. Open this demo page.

1. In the Sources panel, open memory-write.wasm and set a breakpoint at line 5.

1. Refresh the page.

1. In the debugger pane, expand the Scope.

1. In the Scope section, expand the Module.

1. Click on the icon next to the $imports.memory property to reveal the Memory inspector. 


<!-- 
   The following list of steps is derived from the instructions on that webpage.

1. To open DevTools, right-click the webpage, and then select **Inspect**.  Or, press `Ctrl`+`Shift`+`I` (Windows, Linux) or `Command`+`Option`+`I` (macOS).  DevTools opens.

1. In DevTools, on the main toolbar, select the **Sources** tab.  If that tab isn't visible, click the **More tabs** (![More tabs icon.](../media/more-tabs-icon-light-theme.png)) button, or else the **More Tools** (![More Tools icon.](../media/more-tools-icon-light-theme.png)) button.

1. In the **Page** tab on the left, select the file `demo-js.js`. ??? `memory-write-wasm` ???

1. Set a breakpoint at line 18 in the loop body.

1. Refresh the webpage.

1. In the debugger, in the **Scope** section, expand **Local**.

   ![The Memory Inspector tool.](../media/memory-inspector-tool.png)

1. Expand the **buffer** to reveal the **Module Scope**.

1. To the right of the **buffer** name, click the **Reveal in Memory Inspector panel** (!['Reveal in Memory Inspector panel' icon.](../media/reveal-in-memory-inspector-panel-icon.png)) icon.  Or, right-click the buffer, and then select **Reveal in Memory Inspector panel**.

1. The **Memory Inspector** tool opens in the Drawer.  In the **Memory Inspector** tool, examine the **buffer**.

1. To inspect **Uint8Array b2**, expand that node to see the buffer, and then select the **Memory** icon, or right-click **b2**, and then select **Reveal in Memory Inspector panel**.

1. To inspect **Uint8Array b1**, expand that node to see the buffer, and then select the **Memory** icon, or right-click **b1**, and then select **Reveal in Memory Inspector panel**.  That re-focuses on the **Memory** tab of the first buffer.

1. In the debugger, step, and see updates to buffers in the **Memory Inspector** tool.

-->


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/blog/memory-inspector/) and is authored by [Kim-Anh Tran](https://developer.chrome.com/authors/kimanh/) (Chrome DevTools).

[![Creative Commons License.](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
