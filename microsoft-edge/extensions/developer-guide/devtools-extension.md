---
title: Add a custom tool in Microsoft Edge DevTools
description: Create a Microsoft Edge extension that adds a custom tool in DevTools, including a tool tab and panel.  Communicate between DevTools and the inspected webpage, and call DevTools APIs.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: extensions
ms.date: 04/06/2026
---
# Add a custom tool in Microsoft Edge DevTools
<!-- https://learn.microsoft.com/microsoft-edge/extensions/developer-guide/devtools-extension -->
<!-- upstream equiv: https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools#devtools_extension_examples -->
<!-- article 1 of 3 -->

Before using the present article, see the more basic article [Sample: Picture viewer pop-up webpage](../samples/picture-viewer-popup-webpage.md), which is a simpler, regular extension, rather than a specialized, DevTools tool extension.

Creating a DevTools custom tool extension is like creating a regular extension, but also involves differences:

Like a regular extension, a DevTools extension: 
* Has a manifest file.  [manifest.json](https://github.com/MicrosoftEdge/Demos/blob/main/devtools-extension/manifest.json) - Information about the extension: name, description, version, manifest version, and HTML page to show in DevTools.

Unlike a regular extension, a DevTools extension: 
* Has the following files:
   * [panel.html](https://github.com/MicrosoftEdge/Demos/blob/main/devtools-extension/panel.html) - Webpage to display in the custom panel in DevTools.
   * [devtools.html](https://github.com/MicrosoftEdge/Demos/blob/main/devtools-extension/devtools.html) - A non-rendered HTML file run when DevTools is opened, to load the extension's JavaScript files.
   * [background.js](https://github.com/MicrosoftEdge/Demos/blob/main/devtools-extension/background.js) - A service worker that sets up event listeners for communications between the inspected page and DevTools.
   * [content_script.js](https://github.com/MicrosoftEdge/Demos/blob/main/devtools-extension/content_script.js) - Logic for the custom DevTools page.  Prints a message to the console when the script is injected in the page.  Adds a click event listener to the page that will send a message with mouse-click position in the inspected page.
   * [devtools.js](https://github.com/MicrosoftEdge/Demos/blob/main/devtools-extension/devtools.js) - Logic for the custom DevTools page.
   * [icon.png](https://github.com/MicrosoftEdge/Demos/blob/main/devtools-extension/icon.png) - Icon to display on the tool's tab in the Activity bar of DevTools and in the **More tools** menu.

To add a custom tool in Microsoft Edge DevTools, create a Microsoft Edge extension that adds a custom tool in Microsoft Edge DevTools, including a tool tab and panel.  Communicate between DevTools and the inspected webpage, and call DevTools APIs.

The DevTools Extension sample displays a custom tool in DevTools, including a **Custom** tab in the **Activity Bar** and a panel that's connected to the tab:

![Custom tab](./devtools-extension-images/custom-tab-activity-bar.png)

A _panel_ is a tool page in Microsoft Edge DevTools, along with the tool's tab in the **Activity Bar**.

See also:
* [Sample: Picture viewer pop-up webpage](../samples/picture-viewer-popup-webpage.md)


<!-- ====================================================================== -->
## Overview of files
<!-- https://github.com/MicrosoftEdge/Demos/tree/main/devtools-extension/sample%204 -->

* A basic extension for Microsoft Edge consists of a manifest file (`manifest.json`).
* An extension that extends DevTools additionally includes a webpage file, `devtools.html`, that just loads `devtools.js`.

The sample "Custom DevTools tool" consists of the following files:

| File | Description |
|---|---|
| [manifest.json](https://github.com/MicrosoftEdge/Demos/blob/main/devtools-extension/manifest.json) | Information about the extension: name, description, version, manifest version, and HTML page to show in DevTools. |
| [panel.html](https://github.com/MicrosoftEdge/Demos/blob/main/devtools-extension/panel.html) | Webpage to display in the custom panel in DevTools. |
| [devtools.html](https://github.com/MicrosoftEdge/Demos/blob/main/devtools-extension/devtools.html) | A non-rendered HTML file run when DevTools is opened, to load the extension's JavaScript files. |
| [background.js](https://github.com/MicrosoftEdge/Demos/blob/main/devtools-extension/background.js) | Service worker that sets up event listeners for communications between the inspected page and DevTools. |
| [content_script.js](https://github.com/MicrosoftEdge/Demos/blob/main/devtools-extension/content_script.js) | Logic for the custom DevTools page.  Prints a message to the console when the script is injected in the page.  Adds a click event listener to the page that will send a message with mouse-click position in the inspected page. |
| [devtools.js](https://github.com/MicrosoftEdge/Demos/blob/main/devtools-extension/devtools.js) | Logic for the custom DevTools page. |
| [icon.png](https://github.com/MicrosoftEdge/Demos/blob/main/devtools-extension/icon.png) | Icon to display on the tool's tab in the Activity bar of DevTools and in the **More tools** menu. |
| [README.md](https://github.com/MicrosoftEdge/Demos/blob/main/devtools-extension/README.md) | Basic information for developers about how to use the sample. |

See also:
* [Overview of DevTools](../../devtools/overview.md)<!-- long jump -->
* [Sample: Custom DevTools tool](../samples/custom-devtools-tool.md)
* [Code for Custom DevTools tool](../samples/custom-devtools-tool-code.md)


<!-- ====================================================================== -->
## Display memory information by calling extension APIs

Use extension APIs to display memory information in your DevTools panel.

`permissions` is in the manifest file, the panel interface, and the DevTools script.

* `devtools.html`
* `devtools.js` - `permissions`
* `manifest.json` - `permissions`
* `panel.html`

See also:
* [Supported APIs for Microsoft Edge extensions](./api-support.md)


<!-- ====================================================================== -->
## Interact between the webpage and DevTools

Code that interacts with the inspected webpage does the following:

1. Listens to click events that happen on the webpage and log them into the DevTools **Console** tool.

1. Displays the mouse-click coordinates in the Custom DevTools tool.

1. When the user clicks a button in the Custom DevTools tool, a greeting alert is displayed in the inspected webpage.

The Custom DevTools tool has direct access to the inspected webpage, and runs when DevTools is opened.  For this, the sample uses a content script and a background service worker.

* A _content script_ runs in the context of the inspected webpage.  In the same way that other scripts are loaded by the webpage, a content script has access to the DOM and can change it.

* A _background service worker_ is a script that the browser runs in a separate thread.  This script has access to the Microsoft Edge extension APIs.

The DevTools page, inspected page, content script, and background service worker fit together in an extension:

![Diagram showing the anatomy of a DevTools extension](./devtools-extension-images/architecture.png)

Detect the user clicks on a webpage by using a content script.  The content script relays this info to the `devtools.js` file, where the data will be displayed in both the console and the DevTools extension panel.


<!-- ====================================================================== -->
## See also
<!-- all links in article -->

* [Overview of DevTools](../../devtools/overview.md)<!-- long jump -->
* [Sample: Picture viewer pop-up webpage](../samples/picture-viewer-popup-webpage.md)
* [Sample: Custom DevTools tool](../samples/custom-devtools-tool.md)
   * [Code for Custom DevTools tool](../samples/custom-devtools-tool-code.md)
* [Supported APIs for Microsoft Edge extensions](./api-support.md)

GitHub:
* [/devtools-extension/](https://github.com/MicrosoftEdge/Demos/blob/main/devtools-extension/) - Readme and source files.
