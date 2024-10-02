---
title: "Tutorial part 2: Add JavaScript to the extension"
description: Dynamically inserting a NASA picture below the page body tag by using content scripts.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: extensions
ms.date: 10/02/2024
---
# Tutorial part 2: Add JavaScript to the extension

<!-- todo:
within h2 sections, format as numbered action step lists
walk through steps
-->

In Part 1 of this tutorial, you create a simple static extension, that displays a single image.  In Part 2 of this tutorial, you add JavaScript code to switch which image is displayed.  You update the pop-up menu to replace the static stars image with a title and a standard HTML button.  That button, when clicked, passes that image of stars to the content page.  This image is now embedded in the extension and inserted into the active browser tab.

Part 2 covers the following extension technologies:
*  Injecting JavaScript libraries into an extension.
*  Exposing extension assets to browser tabs.
*  Including content pages in existing browser tabs.
*  Having content pages listen for messages from pop-ups and respond.

To use this article, first do the steps in [Tutorial part 1: Create a simple extension](./part1-simple-extension.md).

If you want to test out the completed extension that you will build in this tutorial, or view its finished code, either:
* Clone the [microsoft / MicrosoftEdge-Extensions](https://github.com/microsoft/MicrosoftEdge-Extensions) repo to your local drive.  Use repo directory `/extension-getting-started-part2/extension-getting-started-part2`.
* Download the source code from the repo directory [MicrosoftEdge-Extensions repo > extension-getting-started-part2](https://github.com/microsoft/MicrosoftEdge-Extensions/tree/main/Extension%20samples/extension-getting-started-part2/extension-getting-started-part2).

Then you can install and run the finished extension that's in the repo, per [Sideload an extension to install and test it locally](extension-sideloading.md).


<!-- ====================================================================== -->
## Step 1: Update popup.html to include a button

In the popup folder where you created the `popup.html` file, you'll do the following:
1. Add tagging that displays a title with a button.
1. Include a reference to a JavaScript file, `popup.js`.
1. Program that button.

Below is the updated sample HTML file:

`/popup/popup.html` (complete):

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <style>
            body {
                width: 500px;
            }
            button {
                background-color: #336dab;
                border: none;
                color: white;
                padding: 15px 32px;
                text-align: center;
                font-size: 16px;
            }
        </style>
    </head>
    <body>
        <h1>Display the NASA picture of the day</h1>
        <h2>(click the image to remove it)</h2>
        <button id="sendmessageid">Display</button>
        <script src="popup.js"></script>
    </body>
</html>
```

Do the steps in [Sideload an extension to install and test it locally](extension-sideloading.md) to locally update the extension and then run the extension.

After updating and opening the extension, a pop-up opens with a display button:

![popup.html display after selecting the Extension icon](./part2-content-scripts-images/part2-popupdialog.png)

<!--![popup.html display after selecting the Extension icon] -->


<!-- ====================================================================== -->
## Step 2: Update the webpage to display the image at the top of the browser tab

After adding the button, the next task will be to make the button display the `images/stars.jpeg` image file at the top of the active tab page.

<!-- todo: what code is added in popup.html?  does the h2 heading literally mean revise the content of file popup.html?  or, send data to the webpage? -->

Each tab page (and extension) runs in its own thread. In a step below, you'll create a content script that is injected into the tab page.  The injected script will send a message from your pop-up to that content script that's running on the tab page.  The content script will receive the message, which describes which image should be displayed.


<!-- ====================================================================== -->
## Step 3: Create the pop-up JavaScript to send a message

Create the `popup/popup.js` file, and then add the following code in that file.  This code sends a message to your not-yet-created content script that you must momentarily create and inject into your browser tab.  To do that, the following code adds an `onclick` event to your pop-up **Display** button:

`/popup/popup.js` (initial):

```javascript
const sendMessageId = document.getElementById("sendmessageid");
if (sendMessageId) {
  sendMessageId.onclick = function() {
    // do something
  };
}
```

In the `onclick` event, find the current browser tab.  Then, use the `chrome.tabs.sendmessage` Extension API to send a message to that tab.

In that message, you must include the URL to the image you want to display.  Make sure that you send a unique ID to assign to the inserted image.

To send a unique ID to assign to the inserted image, a couple different approaches are possible:
*  Approach 1: Let the content insertion JavaScript generate that image ID.  We won't use that approach here, for reasons that become apparent later.<!-- todo: summarize reason here -->
*  Approach 2: Generate that unique ID here in `popup.js`, and then pass that ID to the not-yet-created content script.  We'll use this approach.

The following code outlines the updated code in `popup/popup.js`.<!-- todo: state whether this is the complete updated code listing for the final version of popup.js -->  You also pass in the current tab ID, which is used later in this article:

`/popup/popup.js` (complete):

```javascript
const sendMessageId = document.getElementById("sendmessageid");
if (sendMessageId) {
    sendMessageId.onclick = function() {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.tabs.sendMessage(
                tabs[0].id,
                {
                    url: chrome.runtime.getURL("images/stars.jpeg"),
                    imageDivId: `${guidGenerator()}`,
                    tabId: tabs[0].id
                },
                function(response) {
                    window.close();
                }
            );
            function guidGenerator() {
                const S4 = function () {
                    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
                };
                return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
            }
        });
    };
}
```


<!-- ====================================================================== -->
## Step 4: Make your `stars.jpeg` available from any browser tab

To make `images/stars.jpeg` available from any browser tab, you must use the `chrome.runtime.getURL` API.

The reason is that you're injecting the image using the `src` attribute of the `img` element into the content page.  The content page is running on a unique thread that isn't the same as the thread running the extension.  You must expose the static image file as a web asset for it to work correctly.

Add another entry in the `manifest.json` file to declare that the image is available to all browser tabs.  That entry is as follows (you should see it in the full `manifest.json` file below when you add the content script declaration coming up):

`/manifest.json` (portion):

```json
"web_accessible_resources": [
    {
      "resources": ["images/*.jpeg"],
      "matches": ["<all_urls>"]
    }
  ]
```

You've now written the code in your `popup.js` file to send a message to the content page that is embedded on the current active tab page.


<!-- ====================================================================== -->
## Step 5: Update your `manifest.json` for new content and web access

Next, you'll create and inject the content page that's embedded on the current active tab page.

The updated `manifest.json` that includes the `content-scripts` and `web_accessible_resources` is as follows:

`/manifest.json` (complete):

```json
{
    "name": "NASA picture of the day viewer",
    "version": "0.0.0.1",
    "manifest_version": 3,
    "description": "An extension to display the NASA picture of the day.",
    "icons": {
        "16": "icons/nasapod16x16.png",
        "32": "icons/nasapod32x32.png",
        "48": "icons/nasapod48x48.png",
        "128": "icons/nasapod128x128.png"
    },
    "action": {
        "default_popup": "popup/popup.html"
    },
    "content_scripts": [
        {
            "matches": [
              "<all_urls>"
            ],
            "js": ["lib/jquery.min.js","content-scripts/content.js"]
        }
    ],
    "web_accessible_resources": [
        {
            "resources": ["images/*.jpeg"],
            "matches": ["<all_urls>"]
        }
    ]
}
```

The `matches` attribute is set to `<all_urls>`, which means that all files in `content_scripts` are injected into all browser tab pages when each tab is loaded.  The allowed files types that can be injected are JavaScript and CSS.  You also added `lib\jquery.min.js`.  You can include that from the download mentioned at the top of the section.


<!-- ------------------------------ -->
#### Add jQuery

In the content scripts that you're injecting, plan on using jQuery (`$`).  You added a minified version of jQuery and put it in your extension package as `lib\jquery.min.js`.  These content scripts run in individual sandboxes, which means that the jQuery injected into the `popup.js` page isn't shared with the content.


<!-- ------------------------------ -->
#### Understanding the thread

Even if the browser tab has JavaScript running on it on the loaded web page, any content that's injected doesn't have access to that JavaScript.  The injected JavaScript only has access to the actual DOM that's loaded in that browser tab.
<!-- todo: mention 'thread', since heading says 'thread' -->


<!-- ====================================================================== -->
## Step 6: Add the content script message listener

Here's the `content-scripts\content.js` file that gets injected into every browser tab page based on the `content-scripts` section in `manifest.json`:

`/content-scripts/content.js` (complete):

```javascript
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    $("body").prepend(
        `<img  src="${request.url}" id="${request.imageDivId}"
               class="slide-image" /> `
    );
    $("head").prepend(
        `<style>
          .slide-image {
              height: auto;
              width: 100vw;
          }
        </style>`
    );
    $(`#${request.imageDivId}`).click(function() {
        $(`#${request.imageDivId}`).remove(`#${request.imageDivId}`);
    });
    sendResponse({ fromcontent: "This message is from content.js" });
});
```

Notice that all the above JavaScript does is to register a `listener` using the `chrome.runtime.onMessage.addListener` Extension API method.  This listener waits for messages like the one you sent from the `popup.js` described earlier with the `chrome.tabs.sendMessage` Extension API method.

The first parameter of the `addListener` method is a function whose first parameter, request, is the details of the message being passed in.  Remember, from `popup.js`, when you used the `sendMessage` method, those attributes of the first parameter are `url` and `imageDivId`.

When an event is processed by the listener, the function that is the first parameter is run.  The first parameter of that function is an object that has attributes as assigned by `sendMessage`.  That function simply processes the three jQuery script lines.

*   The first script line appends an `img` element right below the `body` of your browser tab that has the `slide-image` class assigned as well as the `imageDivId` as the ID of that image element.

*   The second script line dynamically inserts into the DOM header a **\<style\>** section that you must assign as a `slide-image` class to your `img` element.

*   The third script line adds a `click` event that covers the entire image allowing the user to select anywhere on the image and that image is removed from the page (along with it is event listener).

You've added functionality to remove the displayed image when selected.<!-- todo: check this, was numbered "8" without a period -->

Do the steps in [Sideload an extension to install and test it locally](extension-sideloading.md) to locally update the extension and then run the extension.

Now, when you browse to any page and select your **Extension** icon, the pop-up menu is displayed as follows:

![popup.html display after selecting the Extension icon](./part2-content-scripts-images/part2-popupdialog.png)

When you click the **Display** button, you get what is below.<!-- todo: specify behavior -->  If you click the `stars.jpeg` image, that image element is removed and the tab page collapses back to what was originally displayed:

![The image showing in browser](./part2-content-scripts-images/part2-showingimage.png)
<!-- todo: move png to before the previous sentence? -->

Congratulations!  You've created an extension that successfully sends a message from the extension icon pop-up, and dynamically inserted JavaScript running as content on the browser tab.  The injected content sets the image element to display your static stars `.jpeg` file.


<!-- ====================================================================== -->
## See also
<!-- all links in article -->

* [Tutorial part 1: Create a simple extension](./part1-simple-extension.md)
* [Sideload an extension to install and test it locally](extension-sideloading.md)
* [MicrosoftEdge-Extensions repo > extension-getting-started-part2](https://github.com/microsoft/MicrosoftEdge-Extensions/tree/main/Extension%20samples/extension-getting-started-part2/extension-getting-started-part2) - the completed extension package source for Part 2 of the tutorial.
