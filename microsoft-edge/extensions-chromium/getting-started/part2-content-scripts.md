---
title: "Sample: Insert an image in the webpage"
description: Dynamically inserting a NASA picture below the page body tag by using content scripts.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: extensions
ms.date: 10/04/2024
---
# Sample: Insert an image in the webpage

The [Part 2 sample: Use JavaScript to insert an image in the webpage](https://github.com/microsoft/MicrosoftEdge-Extensions/tree/main/Extension%20samples/extension-getting-started-part2/extension-getting-started-part2) uses JavaScript code to insert the `stars.jpeg` image into the top of the currently opened webpage.  The extension's pop-up contains a title and an HTML button that's labelled **Display**.  When you click the **Display** button, JavaScript sends a message from the extension icon's pop-up, and dynamically inserts JavaScript running as content in the browser tab.

The Part 2 sample uses the following extension technologies:
*  Injecting JavaScript libraries into an extension.
*  Exposing extension assets to browser tabs.
*  Including content webpages in existing browser tabs.
*  Having content webpages listen for messages from pop-ups and respond.

You'll open the Part 2 extension from the **Extensions** (![Extensions icon](./part2-content-scripts-images/extensions-icon.png)) button after installing the extension via the **Manage Extensions** tab:

![Clicking the extension's icon to open the extension](./part2-content-scripts-images/open-the-extension.png)

The extension displays a small HTML page in a pop-up, containing a title, instructions, and a **Display** button:

![popup.html display after selecting the Extension icon](./part2-content-scripts-images/part2-popupdialog.png)

When you click the **Display** button, JavaScript code temporarily inserts `stars.jpeg` at the top of the current webpage, pushing down the content of the webpage to below the image.  The injected content sets the image element to display `stars.jpeg` in the top of the current webpage, and then removes the image when you click the image:

![The image showing in browser](./part2-content-scripts-images/part2-showingimage.png)

If you want to immediately install and run the completed extension, or view its finished code, either:
* Clone the [MicrosoftEdge-Extensions](https://github.com/microsoft/MicrosoftEdge-Extensions) repo to your local drive.  Use repo directory `/extension-getting-started-part2/`.
* Download the source code from the [/extension-getting-started-part2/](https://github.com/microsoft/MicrosoftEdge-Extensions/tree/main/Extension%20samples/extension-getting-started-part2/extension-getting-started-part2) folder of the MicrosoftEdge-Extensions repo.

Then you can install and run the finished extension that's in the repo, per [Sideload an extension to install and test it locally](extension-sideloading.md).  The tab must contain a webpage before opening the extension.


<!-- ====================================================================== -->
## Step 1: Update popup.html to include a button

To use this article, first do the steps in [Sample: Display an image in a pop-up](./part1-simple-extension.md); that is, clone the MicrosoftEdge-Extensions repo, install the Part 1 demo, and run that demo.

This step has already been done in [popup.html](https://github.com/microsoft/MicrosoftEdge-Extensions/blob/main/Extension%20samples/extension-getting-started-part2/extension-getting-started-part2/popup/popup.html) in the MicrosoftEdge-Extensions repo.

The hypothetical starting state for this Part 2 article, if you were to manually build-up the sample to add JavaScript, is that a directory exists for the part 2 code, containing the same directories and files that are created in the Part 1 article.  These can be sibling directories for Part 1 and Part 2, as done in the MicrosoftEdge-Extensions repo.

It's possible to install the completed Part 1 and Part 2 demos from the MicrosoftEdge-Extensions repo, side-by-side.  We recommend first cloning the repo and installing and running the demos, before (or instead of) starting with an empty directory and then manually creating directories, creating files, and pasting code into the files.

To manually expand the completed Part 1 demo to create the Part 2 demo, you would need to do the following:
1. In the folder that contains the `popup.html` file for Part 2 (initially a copy of the Part 1 file), add tagging that displays a title with a button.
1. Include a reference to a JavaScript file, `popup.js`.
1. Program that button.

Below is the sample HTML file:

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
        <h2>(click the image to remove it from the webpage)</h2>
        <button id="sendmessageid">Display</button>
        <script src="popup.js"></script>
    </body>
</html>
```

Do the steps in [Sideload an extension to install and test it locally](extension-sideloading.md) to locally update the extension and then run the extension.  The tab must contain a webpage before opening the extension.

After updating and opening the extension, a pop-up opens, containing a small HTML page with a title, instructions, and a **Display** button:

![popup.html after clicking the Extension's icon](./part2-content-scripts-images/part2-popupdialog.png)


<!-- ====================================================================== -->
## Step 2: Update the webpage to insert the image at the top

After adding the  **Display** button, the next task will be to make the button display the `images/stars.jpeg` image file at the top of the webpage that's in the active tab.

Each tab page (and extension) runs in its own thread.  In a step below, you'll create a content script that is injected into the tab page.  The injected script will send a message from your pop-up to that content script that's running on the tab page.  The content script will receive the message, which describes which image should be displayed.


<!-- ====================================================================== -->
## Step 3: Create the pop-up JavaScript to send a message

This step has already been done in [popup.js](https://github.com/microsoft/MicrosoftEdge-Extensions/blob/main/Extension%20samples/extension-getting-started-part2/extension-getting-started-part2/popup/popup.js) in the MicrosoftEdge-Extensions repo.  If you want to manually create the Part 2 extension, continue with the following steps.

Create the `popup/popup.js` file, and then add the following code in that file.

This code sends a message to your not-yet-created content script that you must momentarily create and inject into your browser tab.  To do that, the following code adds an `onclick` event to your pop-up **Display** button:

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

This step has already been done in [manifest.json](https://github.com/microsoft/MicrosoftEdge-Extensions/blob/main/Extension%20samples/extension-getting-started-part2/extension-getting-started-part2/manifest.json) in the MicrosoftEdge-Extensions repo.  If you want to manually create the Part 2 extension, continue with the following steps.

To make `images/stars.jpeg` available from any browser tab, you must use the `chrome.runtime.getURL` API.

The reason is that you're injecting the image using the `src` attribute of the `img` element into the content page.  The content page is running on a unique thread that isn't the same as the thread running the extension.  You must expose the static image file as a web asset for it to work correctly.

Add another entry in the `manifest.json` file to declare that the image is available to all browser tabs.

That entry is as follows (you should see it in the full `manifest.json` file below when you add the content script declaration coming up):

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

Next, you'll create and inject the content page that's embedded on the current active tab page.  This step has already been done in [manifest.json](https://github.com/microsoft/MicrosoftEdge-Extensions/blob/main/Extension%20samples/extension-getting-started-part2/extension-getting-started-part2/manifest.json) in the MicrosoftEdge-Extensions repo.

The updated `manifest.json` that includes the `content-scripts` and `web_accessible_resources` is as follows:

`/manifest.json` (complete):

```json
{
    "name": "NASA picture of the day viewer",
    "version": "0.0.0.1",
    "manifest_version": 3,
    "description": "An extension that uses JavaScript to insert an image at the top of the webpage.",
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

The `matches` attribute is set to `<all_urls>`, which means that all files in `content_scripts` are injected into all browser tab pages when each tab is loaded.  The allowed files types that can be injected are JavaScript and CSS.  You also added `lib\jquery.min.js`.  You can copy that file from the [/lib/](https://github.com/microsoft/MicrosoftEdge-Extensions/tree/main/Extension%20samples/extension-getting-started-part2/extension-getting-started-part2/lib) folder of the MicrosoftEdge-Extensions repo.


<!-- ------------------------------ -->
#### Add jQuery

This step has already been done in [jquery.min.js](https://github.com/microsoft/MicrosoftEdge-Extensions/blob/main/Extension%20samples/extension-getting-started-part2/extension-getting-started-part2/lib/jquery.min.js) in the MicrosoftEdge-Extensions repo.

In the content scripts that you're injecting, plan on using jQuery (`$`).  You added a minified version of jQuery and put it in your extension package as `lib\jquery.min.js`.

These content scripts run in individual sandboxes, which means that the jQuery injected into the `popup.js` page isn't shared with the content.


<!-- ------------------------------ -->
#### Understanding the thread

Even if the browser tab has JavaScript running on it on the loaded web page, any content that's injected doesn't have access to that JavaScript.  The injected JavaScript only has access to the actual DOM that's loaded in that browser tab.
<!-- todo: mention 'thread', since heading says 'thread' -->


<!-- ====================================================================== -->
## Step 6: Add the content script message listener

To continue manually building-up the Part 2 demo, you would need to create this file.  This step has already been done in [content.js](https://github.com/microsoft/MicrosoftEdge-Extensions/blob/main/Extension%20samples/extension-getting-started-part2/extension-getting-started-part2/content-scripts/content.js) in the MicrosoftEdge-Extensions repo.

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

All that the above JavaScript does is to register a `listener` using the `chrome.runtime.onMessage.addListener` Extension API method.  This listener waits for messages like the one you sent from the `popup.js` described earlier with the `chrome.tabs.sendMessage` Extension API method.

The first parameter of the `addListener` method is a function whose first parameter, request, is the details of the message being passed in.  Remember, from `popup.js`, when you used the `sendMessage` method, those attributes of the first parameter are `url` and `imageDivId`.

When an event is processed by the listener, the function that is the first parameter is run.  The first parameter of that function is an object that has attributes as assigned by `sendMessage`.  That function simply processes the three jQuery script lines.

*   The first script line appends an `img` element right below the `body` of your browser tab that has the `slide-image` class assigned as well as the `imageDivId` as the ID of that image element.

*   The second script line dynamically inserts into the DOM header a **\<style\>** section that you must assign as a `slide-image` class to your `img` element.

*   The third script line adds a `click` event that covers the entire image allowing the user to select anywhere on the image and that image is removed from the page (along with it is event listener).


<!-- ====================================================================== -->
## Step 7: Install and test the extension

1. Install or update the extension, in the Manage Extensions page; see [Sideload an extension to install and test it locally](extension-sideloading.md).

1. Go to a webpage, such as [Microsoft.com](https://www.microsoft.com), in a new window or tab.  The tab must not be empty, and must not be the Manage Extensions page.

1. Click the **Extensions** (![Extensions icon](./part2-content-scripts-images/extensions-icon.png)) button, next to the Address bar.  Or, select **Settings and more** (...) > **Extensions**.

   ![Clicking the extension's icon to open the extension](./part2-content-scripts-images/open-the-extension.png)

1. Click the icon or name of the **NASA picture of the day viewer** extension.

   The extension's pop-up opens:

   ![popup.html display after selecting the Extension icon](./part2-content-scripts-images/part2-popupdialog.png)

1. Click the **Display** button.  `stars.jpeg` is inserted into the top of the current webpage in the current tab, pushing the webpage's content down below the image:

   ![The image showing in browser](./part2-content-scripts-images/part2-showingimage.png)

1. Click the `stars.jpeg` image that's filling the top of the webpage.  That image element is removed from the DOM tree and webpage, and the current webpage is restored, shifting its content back up to the top of the tab.

Congratulations!  You've created an extension that sends a message from the extension icon's pop-up, and dynamically inserts JavaScript running as content in the browser tab.  The injected content sets the image element to display `stars.jpeg` in the top of the current webpage, and then removes the image when you click the image.


<!-- ====================================================================== -->
## Next steps

To develop your own Microsoft Edge extension, you can copy and modify the sample's directory, and install and test the resulting extension.


<!-- ====================================================================== -->
## See also
<!-- all links in article -->

* [Sample: Display an image in a pop-up](./part1-simple-extension.md)
* [Sideload an extension to install and test it locally](extension-sideloading.md)

GitHub:
* [MicrosoftEdge-Extensions](https://github.com/microsoft/MicrosoftEdge-Extensions) repo.
   * [/extension-getting-started-part2/](https://github.com/microsoft/MicrosoftEdge-Extensions/tree/main/Extension%20samples/extension-getting-started-part2/extension-getting-started-part2) - source code of the Part 2 sample.
