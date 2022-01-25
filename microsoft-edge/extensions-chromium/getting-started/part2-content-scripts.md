---
description: Dynamically Insert NASA Picture Below The Page Body Tag Using Content Scripts
title: Create an extension tutorial Part 2
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/07/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, html, css, javascript, developer, extensions
---
# Create an extension tutorial Part 2

[Completed Extension Package Source for This Part](https://github.com/MicrosoftEdge/MicrosoftEdge-Extensions-Demos/tree/master/extension-getting-started-part2/extension-getting-started-part2)


<!-- ====================================================================== -->
## Overview

This tutorial covers the following extension technologies.
*   Injecting JavaScript libraries into extension
*   Exposing extension assets to browser tabs
*   Including content pages in existing browser tabs
*   Having content pages listen for messages from pop-ups and respond

You'll learn to update your pop-up menu to replace your static stars image with a title and a standard HTML button.  That button, when selected, passes that stars image, which is embedded in the extension, to the content page.  That image, is inserted into the active browser tab. Follow the below steps for further details.

1.  Remove the image from the pop-up and replace it with a button

First, update your `popup.html` file with some straight forward markup that displays a title and a button.  You'll program that button shortly, but for now, just include a reference to an empty JavaScript file `popup.js`.  Here is update HTML.

```html
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
        <h2>(select the image to remove)</h2>
        <button id="sendmessageid">Display</button>
        <script src="popup.js"></script>
    </body>
</html>
```

After updating and opening the extension, a pop-up opens with a display button.

:::image type="complex" source="./media/part2-popupdialog.png" alt-text="popup.html display after selecting the Extension icon":::
   popup.html display after selecting the Extension icon
:::image-end:::

<!--![popup.html display after selecting the Extension icon] -->

2.  Update strategy to display image at the top of the browser tab

After adding the button, the next task is to make it bring up the `images/stars.jpeg` image file at the top of the active tab page.

Remember, each tab page runs in its own thread. Also, the extension uses a different thread.  First, create a content script that is injected into the tab page.  Then, send a message from your pop-up to that content script running on the tab page. The content script receives the message, which describes which image should be displayed.

3. Create the pop-up JavaScript to send a message

First, create `popup/popup.js` and add code to send a message to your not-yet-created content script that you must momentarily create and inject into your browser tab.  To do that, the following code adds an `onclick` event to your pop-up display button.

```javascript
const sendMessageId = document.getElementById("sendmessageid");
if (sendMessageId) {
  sendMessageId.onclick = function() {
    // do something
  };
}
```

In the `onclick` event, find the current browser tab.  Then, use the `chrome.tabs.sendmessage` Extension API to send a message to that tab.

In that message you must include the URL to the image you want to display. Also, send a unique ID to assign to the inserted image.  You may choose to let the content insertion JavaScript generate that, but for reasons that become apparent later, generate that unique ID here in `popup.js` and pass it to the not-yet-created content script.

The following code snippet outlines the updated code in `popup/popup.js`.  Also, pass in the current tab ID, which is used later in this article.

```javascript
const sendMessageId = document.getElementById("sendmessageid");
if (sendMessageId) {
    sendMessageId.onclick = function() {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.tabs.sendMessage(
                tabs[0].id,
                {
                    url: chrome.extension.getURL("images/stars.jpeg"),
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

4. Make your stars.jpeg available from any browser tab

You're probably wondering why, when you pass the `images/stars.jpeg` must you use the `chrome.extension.getURL` chrome Extension API instead of just passing in the relative URL without the extra prefix like in the previous section.  By the way, that extra prefix, returned by `getUrl` with the image attached looks something like the following.

```http
extension://inigobacliaghocjiapeaaoemkjifjhp/images/stars.jpeg
```

The reason is that you're injecting the image using the `src` attribute of the `img` element into the content page.  The content page is running on a unique thread that isn't the same as the thread running the Extension.  You must expose the static image file as a web asset for it to work correctly.

Add another entry in the `manifest.json` file to declare that the image is available to all browser tabs.  That entry is as follows (you should see it in the full `manifest.json` file below when you add the content script declaration coming up).

```json
"web_accessible_resources": [
    "images/*.jpeg"
]
```

You've now written the code in your `popup.js` file to send a message to the content page that is embedded on the current active tab page, but you haven't created and injected that content page.  Do that now.

5.  Update your manifest.json for content and web access

The updated `manifest.json` that includes the `content-scripts` and `web_accessible_resources` is as follows.

```json
{
    "name": "NASA picture of the day viewer",
    "version": "0.0.0.1",
    "manifest_version": 2,
    "description": "An extension to display the NASA picture of the day.",
    "icons": {
        "16": "icons/nasapod16x16.png",
        "32": "icons/nasapod32x32.png",
        "48": "icons/nasapod48x48.png",
        "128": "icons/nasapod128x128.png"
    },
    "browser_action": {
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
        "images/*.jpeg"
    ]
}
```

The section you added is `content_scripts`.  The `matches` attribute is set to `<all_urls>`, which means that all files in `content_scripts` are injected into all browser tab pages when each tab is loaded.  The allowed files types that can be injected are JavaScript and CSS.  You also added `libjquery.min.js`.  You're able to include that from the download mentioned at the top of the section.

6. Add jQuery and understanding the associated thread

In the content scripts that you're injecting, plan on using jQuery (`$`).  You added a minified version of jQuery and put it in your Extension package as `lib\jquery.min.js`.  These content scripts run in individual sandboxes, which means that the jQuery injected into the `popup.js` page isn't shared with the content.

Keep in mind that even if the browser tab has JavaScript running on it on the loaded web page, any content injected doesn't have access to that.  That injected JavaScript just has access to the actual DOM loaded in that browser tab.

7. Add the content script message listener

Here is that `content-scripts\content.js` file that gets injected into every browser tab page based on your `manifest.json` `content-scripts` section.

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

*   The first script line dynamically inserts into the DOM header a **\<style\>** section that you must assign as a `slide-image` class to your `img` element.
*   The second script line appends an `img` element right below the `body` of your browser tab that has the `slide-image` class assigned as well as the `imageDivId` as the ID of that image element.
*   The third script line adds a `click` event that covers the entire image allowing the user to select anywhere on the image and that image is removed from the page (along with it is event listener).

8. Add functionality to remove the displayed image when selected

Now, when you browse to any page and select your **Extension** icon, the pop-up menu is displayed as follows.

:::image type="complex" source="./media/part2-popupdialog.png" alt-text="popup.html display after selecting the Extension icon":::
   popup.html display after selecting the Extension icon
:::image-end:::

<!-- ![popup.html display after selecting the Extension icon] -->

When you select the `Display` button, you get what is below.  If you select anywhere on the `stars.jpeg` image, that image element is removed and tab pages collapses back to what was originally displayed.

:::image type="complex" source="./media/part2-showingimage.png" alt-text="The image showing in browser":::
   The image showing in browser
:::image-end:::

You've created an Extension that successfully sends a message from the extension icon pop-up, and dynamically inserted JavaScript running as content on the browser tab.  The injected content sets the image element to display your static stars jpeg.
