---
title: "Sample: Insert an image in the webpage"
description: Uses JavaScript to insert a .png file below the <body> start-tag of the current webpage.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: extensions
ms.date: 12/03/2024
---
# Sample: Insert an image in the webpage

This sample uses JavaScript code to insert the `stars.jpeg` image into the top of the current webpage, below the `<body>` start-tag.  The extension's pop-up contains a title and an HTML button that's labelled **Display**.  When you click the **Display** button, JavaScript sends a message from the extension icon's pop-up, and dynamically inserts JavaScript running as content in the browser tab.

This sample uses the following extension technologies:
*  Injecting JavaScript libraries into an extension.
*  Exposing extension assets to browser tabs.
*  Including content webpages in existing browser tabs.
*  Having content webpages listen for messages from pop-ups and respond.

As a preview of the sample: You'll open the Part 2 extension from the **Extensions** (![Extensions icon](./part2-content-scripts-images/extensions-icon.png)) button after installing the extension via the **Manage Extensions** tab:

![Clicking the extension's icon to open the extension](./part2-content-scripts-images/open-the-extension.png)

The extension displays a small HTML page in a pop-up, containing a title, instructions, and a **Display** button:

![popup.html display after selecting the Extension icon](./part2-content-scripts-images/part2-popupdialog.png)

When you click the **Display** button, JavaScript code temporarily inserts `stars.jpeg` at the top of the current webpage, pushing down the content of the webpage to below the image.  The injected content sets the image element to display `stars.jpeg` in the top of the current webpage, and then removes the image when you click the image:

![The image showing in browser](./part2-content-scripts-images/part2-showingimage.png)

Obtain and run the sample as follows.


<!-- ====================================================================== -->
## Clone the MicrosoftEdge-Extensions repo

You can use various tools to clone a GitHub repo.  You can download a selected directory, or clone the entire repo.  These instructions use GitHub Desktop to clone the repo and switch to a working branch.

To clone the `MicrosoftEdge-Extensions` repo to your local drive:

1. If not done already, install GitHub desktop: go to [https://github.com/apps/desktop](https://github.com/apps/desktop), and then click the **Download now** button.

1. Go to [MicrosoftEdge-Extensions](https://github.com/microsoft/MicrosoftEdge-Extensions).

1. Click the **Code** button, and then select **Open with GitHub Desktop**.

   A dialog opens, saying **This site is trying to open GitHubDesktop.exe.**

1. Click the **Open** button.

   GitHub Desktop opens, with the **MicrosoftEdge-Extensions** repo selected in the upper left dropdown list.

1. In GitHub Desktop, click the **Branch** menu, and then click **New branch**.

   The **Create a branch** dialog opens.

1. In the **Name** text box, enter a branch name, such as **ext-sample-1**, and then click the **Create branch** button.

   In the upper middle and lower left of GitHub Desktop, the current branch is shown, such as **ext-sample-1**.

You are now free to modify the code in your working branch, without altering the code that's in the "main" branch of the repo.

<!-- See also: -->
<!-- * [Step 2: Create a branch](https://docs.github.com/en/get-started/start-your-journey/hello-world#step-2-create-a-branch) in _Hello World_. -->


<!-- ====================================================================== -->
## Install the sample locally

<!-- todo: inline steps to install -->



<!-- ====================================================================== -->
## Run the sample


<!-- todo: inline steps to run -->
Do the steps in [Sideload an extension to install and test it locally](extension-sideloading.md) to locally update the extension and then run the extension.  The tab must contain a webpage before opening the extension.

A pop-up opens, containing a small HTML page with a title, instructions, and a **Display** button:

![popup.html after clicking the Extension's icon](./part2-content-scripts-images/part2-popupdialog.png)


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

The extension sends a message from the extension icon's pop-up, and dynamically inserts JavaScript running as content in the browser tab.  The injected content sets the image element to display `stars.jpeg` in the top of the current webpage, and then removes the image when you click the image.


<!-- ====================================================================== -->
## Files and directories



<!-- ====================================================================== -->
<!-- SORT/MERGE INTO ABOVE SECTIONS -->


<!-- ====================================================================== -->
## The default initial popup webpage (`popup.html`)

`popup.html` is specified in the manifest file as the initial, default webpage to display in the extension popup.  This webpage contains a title, instructions, and a **Display** button.

`/popup/popup.html`:<!-- (complete listing) -->

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


<!-- ====================================================================== -->
## Update the webpage to insert the image at the top

After adding the  **Display** button, the next task will be to make the button display the `images/stars.jpeg` image file at the top of the webpage that's in the active tab.

Each tab page (and extension) runs in its own thread.  In a step below, you'll create a content script that is injected into the tab page.  The injected script will send a message from your pop-up to that content script that's running on the tab page.  The content script will receive the message, which describes which image should be displayed.


<!-- ====================================================================== -->
## Create the pop-up JavaScript to send a message

The `popup/popup.js` file includes the following code:

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
## Make `stars.jpeg` available from any browser tab

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
## Update your `manifest.json` for new content and web access

The sample creates and inject the content page that's embedded on the current active tab page.  `manifest.json` includes the `content-scripts` and `web_accessible_resources`, as follows:

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

The `matches` attribute is set to `<all_urls>`, which means that all files in `content_scripts` are injected into all browser tab pages when each tab is loaded.  The allowed files types that can be injected are JavaScript and CSS.  The sample also added `lib\jquery.min.js`.


<!-- ------------------------------ -->
#### Add jQuery

`jquery.min.js` is a predefined, minified file.

In the content scripts that you're injecting, it's common to use jQuery (`$`).  This sample includes a minified version of jQuery, residing in the extension package<!-- todo: check 'package' --> as `lib\jquery.min.js`.

A content script runs in an individual sandbox, which means that the jQuery that's injected into the `popup.js` page isn't shared with the current webpage.

[jquery.min.js](https://github.com/microsoft/MicrosoftEdge-Extensions/blob/main/Extension%20samples/extension-getting-started-part2/extension-getting-started-part2/lib/jquery.min.js) in the MicrosoftEdge-Extensions repo.


<!-- ------------------------------ -->
#### Understanding the thread

Even if the browser tab has JavaScript running on it on the loaded web page, any content that's injected doesn't have access to that JavaScript.  The injected JavaScript only has access to the actual DOM that's loaded in that browser tab.
<!-- todo: mention 'thread', since heading says 'thread' -->


<!-- ====================================================================== -->
## Add the content script message listener

Here's the `content-scripts\content.js` file that gets injected into every browser tab page based on the `content-scripts` section in `manifest.json`:

`/content-scripts/content.js` (complete listing):

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
