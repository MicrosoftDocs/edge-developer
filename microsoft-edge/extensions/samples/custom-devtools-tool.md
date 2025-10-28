---
title: "Sample: Custom DevTools tool"
description: In this tutorial, you learn to build a Microsoft Edge extension that extends DevTools. At the end of the tutorial, you should have a working DevTools extension that creates its own panel and interacts with the DevTools extension APIs.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: extensions
ms.date: 10/27/2025
---
# Sample: Custom DevTools tool
<!-- live: https://learn.microsoft.com/microsoft-edge/extensions/developer-guide/devtools-extension -->
<!-- equiv: https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools#devtools_extension_examples -->

The DevTools Extension sample is a Microsoft Edge extension that adds a **Custom** tool in Microsoft Edge DevTools, including a tab in the **Activity Bar**, and a panel below the tab.

The "DevTools Extension" sample adds a **Sample Panel** tool tab in DevTools within Microsoft Edge.  The sample is a working DevTools extension that creates its own panel (tool), and interacts with the DevTools APIs.

The webpage under inspection, and the custom tool in DevTools, send messages back and forth, in two-way communication.

See also:
* [Overview of DevTools](../../devtools/overview.md)


<!-- ====================================================================== -->
## Preview of the sample

In this "DevTools extension" sample, the custom tool in DevTools has a button that sends a message to the inspected webpage.  The inspected webpage displays an alert:

![Alert displayed by the inspected webpage ](./custom-devtools-tool-images/devtools-extension-show-greeting.png)

Clicking the inspected webpage sends a message to the custom DevTools tool.  The custom DevTools tool displays information from the message:

![Information from the message, displayed in the custom DevTools tool](./custom-devtools-tool-images/devtools-extension-show-position.png)


<!-- ====================================================================== -->
## See also
<!-- todo: all links in article -->

* [Samples for Microsoft Edge extensions](../samples.md)<!-- link not in article -->
* [Overview of DevTools](../../devtools/overview.md)
* [Sample: Picture viewer pop-up webpage](../getting-started/picture-viewer-popup-webpage.md)
* [Overview and timelines for migrating to Manifest V3](./manifest-v3.md)
* [Sideload an extension to install and test it locally](../getting-started/extension-sideloading.md)

Chrome docs:
* [Manifest reference](https://developer.chrome.com/docs/extensions/reference#manifest-reference)
* [Extend DevTools](https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools)
* [Chrome Extensions Reference](https://developer.chrome.com/docs/extensions/reference/)
   * [chrome.devtools.panels](https://developer.chrome.com/docs/extensions/reference/api/devtools/panels)
      * [create()](https://developer.chrome.com/docs/extensions/reference/api/devtools/panels#method-create)
* [Content scripts](https://developer.chrome.com/docs/extensions/develop/concepts/content-scripts)

GitHub:
* [Download Demos-main.zip](https://codeload.github.com/MicrosoftEdge/Demos/zip/refs/heads/main)
* [/devtools-extension/](https://github.com/MicrosoftEdge/Demos/tree/main/devtools-extension/) - source code.

Tools:
* [Visual Studio Code](https://code.visualstudio.com)

<!-- https://developer.chrome.com/docs/extensions/reference/api/system/memory#method-getInfo -->
