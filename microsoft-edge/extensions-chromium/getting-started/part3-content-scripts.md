---
description: Extensions Getting Started Part 1
title: Dynamically Insert NASA Picture Below the page body tag using content scripts
author: Peter Kellner
ms.author: xxx
ms.date: 6/15/2019
ms.topic: article
ms.prod: microsoft-edge-chromium
keywords: edge-chromium, web development, html, css, javascript, developer, extensions
---

# Dynamically insert NASA picture below the page body tag

* Extension technologies covered in this part 3.
  * Injection JavaScript libraries into extension
  * Exposing extension assets to browser tabs
  * Including content pages in existing chrome tabs
  * Having content pages listen for messages from popups and respond
  
In this part 3 we will update our pop up menu to not show the static stars image we had before, but to replace that image with a title and a standard HTML button. That button, when clicked, will pass that stars image, which is embedded in the extension, to the content page which is inserted into the active browser tab.

First, let's update our `popup.html` file with some straight forward markup that displays a title and a button that we will program shortly but for now, let's just include a reference to an empty JavaScript file `popup.js`. Here is are update HTML.

```HTML
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
    <h1>Show the NASA Picture of the Day</h1>
    <h2>(click on the image to remove)</h2>
    <button id="sendmessageid">Display</button>
    <script src="popup.js"></script>
  </body>
</html>
```

After updating our extension and clicking on the extension launch icon, we have the following popup with a display button rather than the `images/stars.jpeg` image we had before.

![popup.html display after pressing the extension icon](media/part3-popupdialog.png)

Before writing and more code, let's talk about what our strategy is going to be to make clicking the display button on this popup bring up the `images/stars.jpeg` file at the top of the active tab page instead of as a modal popup windows attached to the extension launch button.

In the popup modal dialog case, the thread that is associated with the extension itself launched the modal dialog.  That meant that we could simply reference the `src` attribute of the `img` element to point to the local file `images/stars.jpeg`.  Now, we want to inject an `img` element into the tab page itself. We can't do that directly from the `popup.js` because it is not running on the tab page itself.  What we need to do is first create a content script and then inject that content script into our tab page.  Then, we want to send a message from our `popup.js` to that content script running on the tab page telling that content script what image to show, and how to show it.  Let's do that now to make it clear what I just explained.

First, let's add to the `popup/popup.js` to send a message to our not yet created content script that we will momentarily create and inject into our tab page.  To do that, the following code simply adds that onclick event to our popup display button.

```JavaScript
const sendMessageId = document.getElementById("sendmessageid");
if (sendMessageId) {
  sendMessageId.onclick = function() {
    // do something
  };
}
```

In the onclick event, what we need to do is first find the current browser tab (if there is only one open it's just that one).  Then, once we find that tab, we use the `chrome.tabs.sendmessage` extension api call to send a message to that tab.  In that message we want to include the url to the image we want to display, and we want to send a unique id that we want assigned to that inserted image.  We could let the content generate that, but for reasons that will become apparent later, we generate that unique id here in `popup.js` and pass that to our not yet created content script.  Here is our updated `popup\popup.js` file. Also, we are passing in the current tab id, as we will need that later also.

```JavaScript
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

You're probably wondering why, when we pass the `images/stars.jpeg` do we need to call the chrome extension api `chrome.extension.getURL` instead of just passing in the relative URL without the extra prefix.  By the way, that extra prefix, with the image attached will look something like this:

 `chrome-extension://inigobacliaghocjiapeaaoemkjifjhp/images/stars.jpeg`

The reason is that we will be injecting this image (using the `img` element's `src` attribute) into the content page which as we know is running on a different thread then the extension itself (like the popup dialog).  The content thread needs to reach into the extension package and get the image from there.  For this to work however, we will need to add another entry to the `manifist.json` file declaring that we want it to be publicly accessible. That entry is as follows (you'll see it in the full `manifest.json` file below when we next add the content declaration coming right up).

```JSON
  "web_accessible_resources": [
    "images/*.jpeg"
  ]
```

We've now written the code in our `popup.js` file to send a message to the content page that is embedded on the current active tab page, but we've not yet created and injected that content page.  Let's do that now.

First, we need to update our `manifest.json` file as follows (I'll explain the changes next).

```JSON
{
  "name": "NASA Picture of the day viewer",
  "version": "0.0.0.1",
  "manifest_version": 2,
  "description": "A chromium extension to show NASA's Picture of the Day.",
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

The section we added is `content_scripts`.  The attribute `matches` set to `<all_urls>` means that all the files mention in this `content_scripts` section will be injected into all browser tab pages when they are loaded. The allowable types of files that can be injected here are `js` and `css`.

In the content scripts we are injecting, we plan on using `jQuery`. We've added a minifed version of jQuery and put it in our extension package as `lib\jquery.min.js`. These content scripts run in their own sandbox of sorts, which means that the `jQuery` injected into the `popup.js` page does not share with the content, and neither does any `JavaScript` we may inject into our `background` scripts (which we have not talked about yet, but will later). That is why we need our own `jQuery` here. 

Also, keep in mind that even if the browser tab has `JavaScript` running on it in the executing web page, any content injected does not have access to that, it just has access to the actual DOM loaded in that tab.

Here is that `content-scripts\content.js` file that we inject into every browser tab page.

```JavaScript
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
      </style> `
  );
  $(`#${request.imageDivId}`).click(function() {
    $(`#${request.imageDivId}`).remove(`#${request.imageDivId}`);
  });
  sendResponse({ fromcontent: "This message is from content.js" });
});
```

Notice that all it does is it registers a `listener` using the `chrome.runtime.onMessage.addListener` Chrome API extension method. This listener just waits for messages like the one we sent from the `popup.js` described earlier with the `chrome.tabs.sendMessage` API extension method call.

The first parameter of the `addListener` method is a function whose first parameter, request, is the details of the message being passed in.  Remember, from `popup.js`, those attributes of that object are `url` and `imageDivId`.

When this function (the first parameter of `addListener`) is executed, we simply run three `jQuery` commands.  

* The first dynamically inserts into the DOM header a `<style>` section that we will assign as a class `slide-image` to our `img` element.  

* The second, appends an `img` element right below the `body` of our browser tab that has the class `slide-image` assigned as well as the `imageDivId` assigned as the id of that image element.

* The third command adds a click event that covers the entire image allowing the user to click on the image and it will be removed from the page (along with it's event listener).

Now, when we we browse to any page and click on our extension icon, we get the popup menu as follows:

![popup.html display after pressing the extension icon](media/part3-popupdialog.png)

When we click on the Display button, we get what's below.  If we click any where on the `stars.jpeg` image, that image element is removed and tab pages collapses back to what was originally displayed.

![](media/part3-showingimage)

















