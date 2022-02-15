---
title: Inspect a JavaScript ArrayBuffer with the Memory Inspector tool
description: The Memory Inspector tool in Microsoft Edge DevTools.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: devtools
ms.date: 02/15/2022
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
# Inspect a JavaScript ArrayBuffer with the Memory Inspector tool


<!-- this page's content so far is the entry from
https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/whats-new/2021/04/devtools#new-memory-inspector-tool
-->



Use the new **Memory Inspector** tool to inspect an `ArrayBuffer` in JavaScript and Wasm memory.

1. Open the demo webpage [Inspect ArrayBuffers in JS (Memory in JS)](https://memory-inspector.glitch.me/demo-js.html) in a new window or tab.

   The following list of steps is derived from the instructions on that webpage.

1. To open DevTools, right-click the webpage, and then select **Inspect**.  Or, press `Ctrl`+`Shift`+`I` (Windows, Linux) or `Command`+`Option`+`I` (macOS).  DevTools opens.

1. In DevTools, on the main toolbar, select the **Sources** tab.  If that tab isn't visible, click the **More tabs** (![More tabs icon.](../media/more-tabs-icon-light-theme.png)) button, or else the **More Tools** (![More Tools icon.](../media/more-tools-icon-light-theme.png)) button.

1. In the **Page** tab on the left, select the file `demo-js.js`. <!-- `memory-write-wasm`-->

1. Set a breakpoint at line 18 in the loop body.

1. Refresh the webpage.

1. In the debugger, in the **Scope** section, expand **Local**.

   ![The Memory Inspector tool.](../media/memory-inspector-tool.png)

   To zoom the above image, right-click the image, and then select **Open image in new tab**.  Close the tab to return.

1. Expand the **buffer** to reveal the **Module Scope**.

1. To the right of the **buffer** name, click the **Reveal in Memory Inspector panel** (!['Reveal in Memory Inspector panel' icon.](../media/reveal-in-memory-inspector-panel-icon.png)) icon.  Or, right-click the buffer, and then select **Reveal in Memory Inspector panel**.

1. The **Memory Inspector** tool opens in the Drawer.  In the **Memory Inspector** tool, examine the **buffer**.

1. To inspect **Uint8Array b2**, <!-- expand that node to see the buffer, and then select the **Memory** icon (or-->right-click **b2**, and then select **Reveal in Memory Inspector panel**.

1. To inspect **Uint8Array b1**, <!-- expand that node to see the buffer, and then select the **Memory** icon (or-->right-click **b1**, and then select **Reveal in Memory Inspector panel**.  That re-focuses on the **Memory** tab of the first buffer.

1. In the debugger, step, and see updates to buffers in the **Memory Inspector** tool.


_Further article content pending_


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/blog/memory-inspector/) and is authored by [Kim-Anh Tran](https://developer.chrome.com/authors/kimanh/) (Chrome DevTools).

[![Creative Commons License.](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
