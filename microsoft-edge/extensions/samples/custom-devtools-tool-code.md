---
title: Code for Custom DevTools tool
description: Files and code in the Custom DevTools tool sample, which is a Microsoft Edge extension you can modify.  How the sample creates its own panel and interacts with the DevTools extension APIs.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: extensions
ms.date: 10/27/2025
---
# Code for Custom DevTools tool


See also:
* [Overview of DevTools](../../devtools/overview.md)<!-- long jump -->
* [Create a DevTools extension, adding a custom tool tab and panel](../developer-guide/devtools-extension.md)
* [Sample: Custom DevTools tool](../samples/custom-devtools-tool.md)


<!-- ====================================================================== -->
## Files in the sample
<!-- https://github.com/MicrosoftEdge/Demos/tree/main/devtools-extension/sample%204 -->

| File | Description |
|---|---|
| [background.js](https://github.com/MicrosoftEdge/Demos/blob/main/devtools-extension/background.js) | ~ |
| [content_script.js](https://github.com/MicrosoftEdge/Demos/blob/main/devtools-extension/content_script.js) | Logic for the custom DevTools page.  Prints a message to the console when the script is injected in the page.  Adds a click event listener to the page that will send a message with mouse click position in the inspected page. |
| [devtools.html](https://github.com/MicrosoftEdge/Demos/blob/main/devtools-extension/devtools.html) | A non-rendered HTML file run when DevTools is opened, to load the extension's JavaScript files. |
| [devtools.js](https://github.com/MicrosoftEdge/Demos/blob/main/devtools-extension/devtools.js) | Logic for the custom DevTools page. |
| [icon.png](https://github.com/MicrosoftEdge/Demos/blob/main/devtools-extension/icon.png) | Icon to display on the tool's tab in the Activity bar of DevTools and in the **More tools** menu. |
| [manifest.json](https://github.com/MicrosoftEdge/Demos/blob/main/devtools-extension/manifest.json) | Information about the extension: name, description, version, manifest version, and HTML page to show in DevTools. |
| [panel.html](https://github.com/MicrosoftEdge/Demos/blob/main/devtools-extension/panel.html) | Webpage to display in the custom panel in DevTools. |

Details are below.


<!-- ====================================================================== -->
## Code for interacting between the webpage and DevTools

The code that interacts with the inspected webpage does the following:

1. Listens to click events that happen on the webpage and log them into the DevTools **Console** tool.

1. Displays the mouse click position in the DevTools extension panel.

1. When the user clicks a button in the DevTools extension panel, displays a greeting alert in the inspected webpage.

Content script and service worker:

* A _content script_ runs in the context of the inspected webpage.  In the same way that other scripts are loaded by the webpage, a content script has have access to the DOM and can change it.

* A _background service worker_ is a script that the browser runs in a separate thread.  This script has access to the Microsoft Edge extension APIs.

The DevTools page, inspected page, content script, and background service worker fit together in an extension:

![Diagram showing the anatomy of a DevTools extension](./custom-devtools-tool-code-images/architecture.png)

The `content_script.js` detects where the user clicks on the inspected webpage.  The content script relays this info to the `devtools.js` file, where the data is displayed in DevTools in the **Sample Panel** tool and in the **Console** tool.


<!-- ====================================================================== -->
## background.js

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


<!-- ====================================================================== -->
## content_script.js

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
## devtools.html

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


<!-- ====================================================================== -->
## devtools.js

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


<!-- ====================================================================== -->
## icon.png

Icon to display on the tool's tab in the Activity bar of DevTools and in the **More tools** menu:

![Icon file](./custom-devtools-tool-images/icon.png)


<!-- ====================================================================== -->
## manifest.json

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


<!-- ====================================================================== -->
## panel.html

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


<!-- ====================================================================== -->
## See also
<!-- todo: all links in article -->
