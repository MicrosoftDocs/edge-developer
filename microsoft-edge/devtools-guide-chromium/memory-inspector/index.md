---
description: The Memory Inspector tool in DevTools.
title: Memory Inspector
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 10/03/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# Memory Inspector

<!-- keep for Find:
The **Memory Inspector** tool in Microsoft Edge DevTools is also called the **Memory Inspector** panel or the **Memory Inspector** tab. -->

<!-- check other doc set -->

Use the **Memory Inspector** tool to inspect an `ArrayBuffer` in JavaScript and Wasm memory.

1. Open the [Memory in JS](https://memory-inspector.glitch.me/demo-js.html) demo webpage.

1. In the **Sources** tool, open the `memory-write-wasm` file, and set a breakpoint at line `0x03c`.

1. Refresh the webpage.

1. Expand the **Scope** section in the debugger pane.

1. The new icon is displayed next to the **buffer** value.  Select it to open the **Memory Inspector** tool.

For debugging in the **Sources** tool, see [Using the Debugger pane to debug JavaScript code](../sources/index.md#using-the-debugger-pane-to-debug-javascript-code).

:::image type="content" source="media/sources-memory-write-wasm-breakpoint-scope-reveal-in-memory-inspector-panel.msft.png" alt-text="Memory Inspector tool":::


<!-- ====================================================================== -->
<!-- ## See also -->

<!-- copyied content to present file already * [New Memory Inspector tool](../whats-new/2021/04/devtools.md#new-memory-inspector-tool) in _What's New In DevTools (Microsoft Edge 91)_. -->
