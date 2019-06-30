---
description: Extensions Getting Started Part 5
title: Adding background.js to update badge text on image close.
author: Peter Kellner
ms.author: xxx
ms.date: 6/15/2019
ms.topic: article
ms.prod: microsoft-edge-chromium
keywords: edge-chromium, web development, html, css, javascript, developer, extensions
---

# Adding background.js to update badge text on image close

* Extension technologies covered in this part 5.
  * Creating and registering a background.js script
  * Setting and clearing text on the extension launch icon
  * Sending a message from a content script to the background script
  
[Completed Extension Package Source for This Part](extension-source/extension-getting-started-part5.zip)

In this part 5 we will create a `background.js` script in our extension that is listed in our `manifest.json` file. We can add custom events to that script that correspond to different events that happen during the life of our extension.  Those things can include the extension being installed, the tab page being loaded, messages being sent from tab content pages and more. What's unique about the `background.js` script is that it's always available.

What does always available mean? If you remember, in an early part of this guide when we created the `options.js` file, when the browser user clicked on the "Display" button, the content script had a listener running on it that processes incoming messages and then when processing is complete calls the method `sendResponse` with a result.  What would happen if the `options.html` page happened to be closed when that message was sent? Best case is we'd get an error logged to the extension itself saying "nothing to receive that message", worst case would be something important would not happen.

## What is a background script and adding it to our manifest

Let's start out be adding to the root of our extension a new file `background.js` and then register it at the bottom of our current `manifest.json`. Notice that I've included `lib/jquery.min.js` in my list of files to run in the background.  The reason for this is that the background script runs in the context (thread) of the extension and I want to use `jQuery` in my background scripts.

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
  ],
  "permissions": [ "storage"],
  "options_ui": {
    "page": "options/options.html",
    "open_in_tab": false
  },
  "background": {
    "scripts": ["lib/jquery.min.js", "background.js"]
  }
}
```

As an aside, keep in mind that a `background.html` file is created on your behalf even though you don't specify it directly. You can however, instead of referencing the scripts you want here, you can include your own `background.html` file, and then reference the script tags you want included in that.  

One big benefit of using `background.html` is you can use JavaScript's `require` or `import` which are a big programming conveniences for most of us. It also allows you to easily use JavaScript frameworks like `React` to built your extensions.

Updating `manifest.json` looks like what we have below, though remember, that is not what we are doing here in our example. Note that you can do one or the other but not both. That is, in your `manifest.json`, reference an HTML background html page  or reference JavaScript files but not both.

```JSON
  "background": {
    "persistent": false,
    "page": "background.html"
  }
```

## Updating the extension icon to show the day of the NASA picture

It's easy to put up to 4 characters on top of the extension icon as text from the `background.js` script. Simply call the extension method `chrome.browserAction.setBadgeText`.  The first parameter is an object that has the attributes `text` and `tabId`.  If `text` is set, that value replaces whatever is currently displayed on the badge with this text value. If tabId is set, then what is displayed, only shows when you are on the tabId specified (otherwise, the badge text shows on all tabs). Conveniently, as as expected, as the browser user switches between tabs, the specified text only appears on that specified tab.

## Creating a listener in the background script

As I said earlier, the `background.js` thread is always running (or at least suspended and ready to run). Typically, what is in the `background.js` file is a list of listeners waiting to respond to different events.

Let's now create a listener that responds to a `sendMessage` call and assume that we will send a message from our `content.js` embedded in our running tab, to our background page.

```JAVASCRIPT
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "setBadgeText") {
    chrome.browserAction.setBadgeText({
      text: request.text ? request.text : '',
      tabId: request.tabId
    });
    sendResponse({ message: "setBadgeText completed" });
  }
  return true;
});

```

As you can see, when a message is posted to our background script, we query the `chrome.tabs` extension API for the active tab, then, we set the badge text of that tab using the extension API method `chrome.browserAction.setBadgeText`. Notice that if we do not pass any text as the `request.text` that the badge text is cleared.

## Update badge text from our content script

To update our badge text using the extension API method `chrome.browserAction.setBadgeText`, we need to call another extension API method `chrome.runtime.sendMessage` to send a message to our `background.js` listener. 

In that message, we need to include the text of the message as well as the id of the tab we want the message set to.  It would be interesting to know what day of the week the NASA picture of the day was from, so we first figure that out from either the `jQuery.ajax` return, or the data object stored (or cached) in browser LocalStorage.  If you remember, in our `popup.js` earlier in this guide, we passed to the content script the current tab id so we have that already and use it again in this `sendMessage` call.  Here is our updated `content.js` that includes these two new things.

```JAVASCRIPT
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  $("head").prepend(
    `<style>
       .slide-image {
          height: auto;
          width: 100vw;
        }
      </style> `
  );
  chrome.storage.sync.get(["useNasaApi", "nasaApiKey"], result => {
    function updateBadgeText(pictureDate) {
      const badgeText = pictureDate
        ? ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
            new Date(`${pictureDate}T00:00:00`).getDay()
          ]
        : "";
      chrome.runtime.sendMessage(
        { action: "setBadgeText", text: badgeText, tabId: request.tabId },
        function(response) {
          console.log(response);
        }
      );
    }
    if (result.useNasaApi && result.useNasaApi === true) {
      const NASA_POD_LOCALSTORAGE_KEY = "NASA_POD_LOCALSTORAGE_KEY";
      const dataObjectString = window.localStorage.getItem(
        NASA_POD_LOCALSTORAGE_KEY
      );
      const dataObject = dataObjectString ? JSON.parse(dataObjectString) : {};
      if (
        dataObject &&
        dataObject.localStorageSetDate &&
        needToUpdateNasaPod(dataObject.localStorageSetDate, 60)
      ) {
        const url = `https://api.nasa.gov/planetary/apod?api_key=${
          result && result.nasaApiKey ? result.nasaApiKey : "DEMO_KEY"
        }`;
        $.ajax({
          url,
          type: "GET",
          datatype: "json",
          success: function(data) {
            function fixUrlForVideo(data) {
              return data.media_type && data.media_type === "video" ? `https://img.youtube.com/vi/${
                data.url.split("/").pop().split("?")[0]
              }/hqdefault.jpg` : data.url;
            }
            if (data && data.url) {
              data.url = fixUrlForVideo(data);
              data.localStorageSetDate = new Date().getTime();
              window.localStorage.setItem(
                NASA_POD_LOCALSTORAGE_KEY,
                JSON.stringify(data)
              );
              updateBadgeText(data.date);
              updateHtml(data.url);
              sendResponse({ fromcontent: "content updated from API" });
            } else {
              alert(`api call failed to ${url}`);
              sendResponse({ fromcontent: "API update failed" });
            }
          },
          error: function(jqXHR) {
            const errorMessage =
              jqXHR && jqXHR.responseText
                ? JSON.parse(jqXHR.responseText).error.message
                : "error calling NASA API";
            alert(errorMessage);
            sendResponse({ fromcontent: `API update failed: ${errorMessage}` });
          }
        });
      } else {
        // found in cache
        updateBadgeText(dataObject.date);
        updateHtml(dataObject.url);
        sendResponse({ fromcontent: "content update from cache" });
      }

      function needToUpdateNasaPod(nasaLastGetDate, minutesToCheckBack) {
        if (!nasaLastGetDate) return true;
        const currentDateTime = new Date().getTime();
        const lastCheckDateTime = new Date(nasaLastGetDate).getTime();
        const minutesSinceLastCheck =
          (currentDateTime - lastCheckDateTime) / (1000 * 60);
        return minutesSinceLastCheck > minutesToCheckBack;
      }
    } else {
      updateHtml(request.url);
      sendResponse({ fromcontent: "content update from static image" });
    }
    function updateHtml(imageUrl) {
      $("body").prepend(
        `<img  src="${imageUrl}" id="${request.imageDivId}" 
           class="slide-image" />`
      );
      $(`#${request.imageDivId}`).click(function() {
        $(`#${request.imageDivId}`).remove(`#${request.imageDivId}`);
        updateBadgeText(); // clear badge text
      });
    }
  });
  return true; // forces sendMessage to wait for sendMessage before exiting
});
```

Notice that we created an `updateBadgeText` local function so that we can update the text based on three different things happening.

* A fresh image is returned from the NASA API
* A cache image is returned from browser LocalStorage
* A click event was made on the displayed image

Here is what a typical invocation of this NASA Picture of the day extension method looks like. Notice the text 'Sat' on top of the extension launch icon.

![Running extension with badge text set](media/part5-runningextension.png)


