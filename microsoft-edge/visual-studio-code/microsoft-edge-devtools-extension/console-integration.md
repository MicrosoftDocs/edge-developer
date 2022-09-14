---
title: Console integration
description: Console integration in the Microsoft Edge Developer Tools extension for Visual Studio Code.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 09/14/2022
---
# Console integration

The [Console](/microsoft-edge/devtools-guide-chromium/console/) tool is available inside the extension and you can do everything you are used to when using DevTools inside the browser. 

![The DevTools Console inside the extension as an own tab](../microsoft-edge-devtools-extension-images/console-full.png)

You can see your [log messages](/microsoft-edge/devtools-guide-chromium/console-log), access the `window` object and use the [DOM interaction convenience methods](/microsoft-edge/devtools-guide-chromium/console-dom-interaction). You can also [filter the Console](/microsoft-edge/devtools-guide-chromium/console-filters) and set [live expressions](/microsoft-edge/devtools-guide-chromium/live-expressions). 


<!-- ====================================================================== -->
## Console side-by-side with other tools

You can also use the **Console** alongside the **Elements** tool if you open the **Console** in the lower panel:

![The DevTools Console inside the extension alongside the elements tool](../microsoft-edge-devtools-extension-images/console-in-elements.png)


<!-- ====================================================================== -->
## Console during Run and Debug

If you launch the extension from the Run and Debug workflow, the [Debug Console of Visual Studio Code](https://code.visualstudio.com/Docs/editor/debugging) gives you most of the functions of the DevTools [Console](/microsoft-edge/devtools-guide-chromium/console/) inside of Visual Studio Code, but no filtering options and a more basic results display:

![The DevTools Console is available when the extension is launched from a Run and Debug workflow](../microsoft-edge-devtools-extension-images/console-integration.png)


<!-- ====================================================================== -->
## See also

*  [Microsoft Edge DevTools extension for Visual Studio Code](./microsoft-edge-devtools-extension.md)
