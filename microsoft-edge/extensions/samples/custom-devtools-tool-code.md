---
title: Code for Custom DevTools tool
description: Files and code in the Custom DevTools tool sample, which is a Microsoft Edge extension you can modify.  How the sample creates its own panel and interacts with the DevTools extension APIs.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: extensions
ms.date: 10/27/2025
---
# Code for Custom DevTools tool

[Sample: Custom DevTools tool](../samples/custom-devtools-tool.md) consists of the following files and code.

The code that interacts with the inspected webpage does the following:

1. Listens to click events that happen on the webpage and log them into the DevTools **Console** tool.

1. Displays the mouse click position in the DevTools extension panel.

1. When the user clicks a button in the DevTools extension panel, displays a greeting alert in the inspected webpage.

See also:
* [Overview of DevTools](../../devtools/overview.md)<!-- long jump -->
* [Create a DevTools extension, adding a custom tool tab and panel](../developer-guide/devtools-extension.md)
* [Sample: Custom DevTools tool](../samples/custom-devtools-tool.md)


<!-- ====================================================================== -->
## Architecture

The DevTools page, inspected page, content script, and background service worker fit together in an extension:

![Diagram showing the anatomy of a DevTools extension](./custom-devtools-tool-code-images/architecture.png)

The `content_script.js` detects where the user clicks on the inspected webpage:

```javascript
document.addEventListener("click", (event) => {
  chrome.runtime.sendMessage({
      click: true,
      xPosition: event.clientX + document.body.scrollLeft,
      yPosition: event.clientY + document.body.scrollTop
```

The content script relays this info to the `devtools.js` file, where the data is displayed in DevTools in the **Custom** tool and in the **Console** tool.

```javascript
```


<!-- ====================================================================== -->
## Overview of files
<!-- https://github.com/MicrosoftEdge/Demos/tree/main/devtools-extension/sample%204 -->

| File | Description |
|---|---|
| [manifest.json](https://github.com/MicrosoftEdge/Demos/blob/main/devtools-extension/manifest.json) | Information about the extension: name, description, version, manifest version, and HTML page to show in DevTools. |
| [panel.html](https://github.com/MicrosoftEdge/Demos/blob/main/devtools-extension/panel.html) | Webpage to display in the custom panel in DevTools. |
| [devtools.html](https://github.com/MicrosoftEdge/Demos/blob/main/devtools-extension/devtools.html) | A non-rendered HTML file run when DevTools is opened, to load the extension's JavaScript files. |
| [background.js](https://github.com/MicrosoftEdge/Demos/blob/main/devtools-extension/background.js) | Service worker that sets up event listeners for communications between the inspected page and DevTools. |
| [content_script.js](https://github.com/MicrosoftEdge/Demos/blob/main/devtools-extension/content_script.js) | Logic for the custom DevTools page.  Prints a message to the console when the script is injected in the page.  Adds a click event listener to the page that will send a message with mouse click position in the inspected page. |
| [devtools.js](https://github.com/MicrosoftEdge/Demos/blob/main/devtools-extension/devtools.js) | Logic for the custom DevTools page. |
| [icon.png](https://github.com/MicrosoftEdge/Demos/blob/main/devtools-extension/icon.png) | Icon to display on the tool's tab in the Activity bar of DevTools and in the **More tools** menu. |
| [README.md](https://github.com/MicrosoftEdge/Demos/blob/main/devtools-extension/README.md) | Basic information for developers about how to use the sample. |

Details about the files The sample has the following files:

<!-- ====================================================================== -->
## manifest.json

The manifest file contains key/value pairs.  The top-level keys are called _members_.

* [manifest.json](https://github.com/MicrosoftEdge/Demos/blob/main/devtools-extension/manifest.json) - Required.  Information about the extension: name, description, version, manifest version, and HTML page to show in DevTools.


| Member | Description |
|----------|-------------|
| `name` | The name of the extension that will appear under `edge://extensions/`. |
| `description` | The description of the extension that will be displayed under the name of the extension. |
| `version` | The version of the extension that will appear next to the name of the extension. |
| `manifest_version` | Determines the set of features that the extension will be using, such as service workers or network request modification. The current version is version `3`. To learn more about this version and the differences with version `2`, see [Overview and timelines for migrating to Manifest V3](../developer-guide/manifest-v3.md). |
| `devtools_page` | The path to an HTML file that's run every time DevTools is opened, and loads the extension's JavaScript files.  This page isn't rendered in DevTools. |
| `content_scripts` | foo |
| `background` | foo |
| `permissions` | The local device requires permissions to view its system memory capacity, since the script calls API for that. |

`manifest.json`:

```json
{
    "name": "Custom DevTools Tool",
    "description": "A DevTools extension interacting with the inspected page",
    "manifest_version": 3,
    "version": "1.0",
    "devtools_page": "devtools.html",
    "content_scripts": [{
        "matches": [
            "http://*/*",
            "https://*/*"
        ],
        "run_at": "document_idle",
        "js": [
            "content_script.js"
        ]
    }],
    "background": {
        "service_worker": "background.js"
    },
    "permissions": [
        "system.memory"
    ]
}
```

The `permissions` manifest member in `manifest.json` defines which permissions the extension requires from the user.  Some permissions are needed to use certain extension APIs.  The `system-memory` permission is required, in order to use the extension APIs.  Specific APIs have associated permissions.

See also:
* [Extensions API reference](https://developer.chrome.com/docs/extensions/reference/)


Code from `manifest.json`:

```json
"content_scripts": [{
  "matches": [
    "http://*/*",
    "https://*/*"
  ],
  "run_at": "document_idle",
  "js": [
    "content_script.js"
  ]
}],
"background": {
    "service_worker": "background.js"
}
```

Keys within the "content_scripts" member:

| Key | Value |
|----------|-------|
| `matches` | Specifies which pages this content script will be injected into. |
| `run_at` | Indicates when the browser injects the script onto the page. |
| `js` | The javascript files to be injected. |


<!-- ====================================================================== -->
## panel.html

* [panel.html](https://github.com/MicrosoftEdge/Demos/blob/main/devtools-extension/panel.html) - Required.  Webpage to display in the custom panel in DevTools.

`panel.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
    <h2>Custom DevTools Tool</h2>

    <h3>Memory</h3>
    <div>
      <b>Available Memory Capacity:</b> <span id="availableMemoryCapacity"></span>
    </div>
    <div>
      <b>Total Memory Capacity:</b> <span id="totalMemoryCapacity"></span>
    </div>

    <h3>Send message from DevTools to inspected page</h3>
    <input type="button" id="sayHello" value="Say Hello">

    <h3>Send message from inspected page to DevTools</h3>
    <p>Click somewhere in the inspected webpage.</p>
    <div>
      <b>Coordinates:</b> <span id="youClickedOn"></span>
    </div>

  </body>
</html>
```

`panel.html` is referenced in the previous `chrome.devtools.panels.create` method call.  This webpage contains the user interface of the custom tool's panel.

Code from `panel.html`:

a `sayHello` button and a `youClickedOn` label:

```html
<input type="button" id="sayHello" value="Say Hello">
```

The above elements are used to demo the interaction between the inspected page, the DevTools panel, and the background service worker.

When the user clicks the `sayHello` button in the DevTools extension, it displays a greeting message in the inspected window.

When the user clicks anywhere in the inspected page, it will display a message to show the mouse click position in the DevTools extension panel.


<!-- ====================================================================== -->
## devtools.html

* [devtools.html](https://github.com/MicrosoftEdge/Demos/blob/main/devtools-extension/devtools.html) - Required.  A non-rendered HTML file that's run when DevTools is opened, to load the extension's `devtools.js` file.

`devtools.html` matches the `devtools_page` member in the manifest file:

A `<script>` element loads the main JavaScript file that's used directly by `panel.html`.  This `devtools.html` file isn't displayed in DevTools; only the `panel.html` file is displayed in DevTools.

`devtools.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
    <script src="devtools.js"></script>
  </body>
</html>
```

In the manifest file (`manifest.json`), the `devtools_page` field specifies the above file (`devtools.html`).  `devtools.html`, above, contains a `<script>` element that loads `devtools.js`.


<!-- ====================================================================== -->
## background.js

[background.js](https://github.com/MicrosoftEdge/Demos/blob/main/devtools-extension/background.js) - Background service worker that sets up event listeners for communications between the inspected page and DevTools.

A _background service worker_ is a script that the browser runs in a separate thread.  This script has access to the Microsoft Edge extension APIs.

`background.js`:

```javascript
let id = null;
const connections = {};

chrome.runtime.onConnect.addListener(devToolsConnection => {
    // Assign the listener function to a variable so we can remove it later
    let devToolsListener = (message, sender, sendResponse) => {
        if (message.name == "init") {
            id = message.tabId;
            connections[id] = devToolsConnection;
            // Send a message back to DevTools
            connections[id].postMessage("Connected!");
        }
    };

    // Listen to messages sent from the DevTools page
    devToolsConnection.onMessage.addListener(devToolsListener);

    devToolsConnection.onDisconnect.addListener(() => {
        devToolsConnection.onMessage.removeListener(devToolsListener);
    });
});
```

The above code connects the background service worker with the DevTools page.  It listens to when the DevTools page connects, saves the connection, and sends a response back to the DevTools page.

This is useful when your background service worker is collecting data or performing tasks in the background that you want to be available in your DevTools extension.

See also:
* [Content scripts](https://developer.chrome.com/docs/extensions/mv3/content_scripts/) in the Chrome Extensions docs.


<!-- ====================================================================== -->
## content_script.js

[content_script.js](https://github.com/MicrosoftEdge/Demos/blob/main/devtools-extension/content_script.js) - JavaScript that's injected into the inspected webpage (any webpage).  Prints a message to the DevTools **Console** when the page is clicked.  Listens for the page click event via an event listener.  Adds a click event listener to the webpage; clicking the page sends an event, caught by the event listener, which then sends a message to the runtime.

A _content script_ runs in the context of the inspected webpage.  In the same way that other scripts are loaded by the webpage, a content script has have access to the DOM and can change it.

This code prints a message to the console when the script is injected in the page.  It also adds a click event listener to the page that will send a message with mouse click position in the inspected page by using the `chrome.runtime.sendMessage` API.

`content_script.js`:

```javascript
document.addEventListener("click", (event) => {
  chrome.runtime.sendMessage({
      click: true,
      xPosition: event.clientX + document.body.scrollLeft,
      yPosition: event.clientY + document.body.scrollTop
    },
    response => {
      console.log("Received response", response);
    }
  );
});
```

See also:
* [Content scripts](https://developer.chrome.com/docs/extensions/develop/concepts/content-scripts)


<!-- ====================================================================== -->
## devtools.js

[devtools.js](https://github.com/MicrosoftEdge/Demos/blob/main/devtools-extension/devtools.js) - Logic for the custom DevTools page.

`devtools.js` does the following:

1. Creates a new **Custom** tool tab and panel in DevTools.

1. When the tool is displayed (`panel.onShown` listener), the `availableMemoryCapacity` and `totalMemoryCapacity` elements are retrieved from the DOM.

1. Sets a timer to run code every second after the panel is shown.

1. When the timer fires, the `chrome.system.memory.getInfo` method is used to retrieve the available and total memory capacity of the device and these values are displayed in the corresponding DOM elements.

`devtools.js`:

```javascript
let availableMemoryCapacity;
let totalMemoryCapacity;
let youClickedOn;

chrome.devtools.panels.create("Custom", "icon.png", "panel.html", panel => {
    // code invoked on panel creation
    panel.onShown.addListener( (extPanelWindow) => {
        // memory
        availableMemoryCapacity = extPanelWindow.document.querySelector('#availableMemoryCapacity');
        totalMemoryCapacity = extPanelWindow.document.querySelector('#totalMemoryCapacity');
        // 2-way message sending
        let sayHello = extPanelWindow.document.querySelector('#sayHello');
        youClickedOn = extPanelWindow.document.querySelector('#youClickedOn');
        sayHello.addEventListener("click", () => {
            // show a greeting alert in the inspected page
            chrome.devtools.inspectedWindow.eval('alert("Hello from the DevTools extension!");');
        });
    });
});

// Update Memory display
setInterval(() => {
    chrome.system.memory.getInfo((data) => {
        if (availableMemoryCapacity) {
            availableMemoryCapacity.innerHTML = data.availableCapacity;
        }
        if (totalMemoryCapacity) {
            totalMemoryCapacity.innerHTML = data.capacity;
        }
    });
}, 1000);

// Send message from inspected page to DevTools
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    // Messages from content scripts should have sender.tab set
    if (sender.tab && request.click == true) {
        console.log('I am here!');
        if (youClickedOn) {
            youClickedOn.innerHTML = `(${request.xPosition}, ${request.yPosition})`;
        }
        sendResponse({
            xPosition: request.xPosition,
            yPosition: request.yPosition
        });
    }
});

// Create a connection to the background service worker
const backgroundPageConnection = chrome.runtime.connect({
    name: "devtools-page"
});

// Relay the tab ID to the background service worker
backgroundPageConnection.postMessage({
    name: 'init',
    tabId: chrome.devtools.inspectedWindow.tabId
});
```

Code from `devtools.js`:

```javascript
chrome.devtools.panels.create("Custom", "icon.png", "panel.html", panel => {
    // code invoked on panel creation
});
```

The `create` method has the following signature:

```javascript
chrome.devtools.panels.create(
    title: string, // Tool tab's label in Activity bar.
    iconPath: string, // Icon to display in tool's tab.
    pagePath: string, // Webpage to display in tool's panel.
    callback: function // Code to run when tool is opened.
)
```
    
Code from `devtools.js`:

```javascript
let availableMemoryCapacity;
let totalMemoryCapacity;

chrome.devtools.panels.create("Sample Panel", "icon.png", "panel.html", panel => {
    // code invoked on panel creation
    panel.onShown.addListener((extPanelWindow) => {
        availableMemoryCapacity = extPanelWindow.document.querySelector('#availableMemoryCapacity');
        totalMemoryCapacity = extPanelWindow.document.querySelector('#totalMemoryCapacity');
    });
});

setInterval(() => {
    chrome.system.memory.getInfo((data) => {
        if (availableMemoryCapacity) {
            availableMemoryCapacity.innerHTML = data.availableCapacity;
        }
        if (totalMemoryCapacity) {
            totalMemoryCapacity.innerHTML = data.capacity;
        }
    });
}, 1000);
```

See also: 
* [Extensions API Reference](https://developer.chrome.com/docs/extensions/reference/)
   * [chrome.devtools.panels](https://developer.chrome.com/docs/extensions/reference/api/devtools/panels)
      * [create()](https://developer.chrome.com/docs/extensions/reference/api/devtools/panels#method-create)







`devtools.js` uses the `chrome.runtime.connect` method to create a connection to the background service worker.

It then sends the inspected window `tabId` to the service worker by using the `backgroundPageConnection.postMessage` method.

Then it adds event listeners to the `sayHello` button and `youClickedOn` label that's defined in the `panel.html` file.

When the user clicks the `sayHello` button, the DevTools extension will run a code snippet of `alert("Hello from the DevTools Extension");` in the inspected window by invoking the `eval()` method of the inspected window `chrome.devtools.inspectedWindow`.

When the user clicks anywhere in the inspected window, the DevTools extension will receive a message, from the background service worker, with `request.click == true` and the mouse position information.


<!-- ====================================================================== -->
## icon.png

* [icon.png](https://github.com/MicrosoftEdge/Demos/blob/main/devtools-extension/icon.png) - Icon to display on the tool's tab in the Activity bar of DevTools and in the **More tools** menu.

Icon to display on the tool's tab in the Activity bar of DevTools and in the **More tools** menu:

![Icon file](./custom-devtools-tool-code-images/icon.png)


<!-- ====================================================================== -->
## README.md

[README.md](https://github.com/MicrosoftEdge/Demos/blob/main/devtools-extension/README.md) - Basic information for developers about how to use the sample.


<!-- ====================================================================== -->
## See also
<!-- todo: all links in article -->
