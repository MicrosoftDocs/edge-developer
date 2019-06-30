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
  * Creating and registering a background JavaScript listener
  * Setting and clearing badge text on the extension launch icon
  * Sending a message from a content script to the background script
  
[Completed Extension Package Source for This Part](extension-source/extension-getting-started-part5.zip)

## Overview

In this part 5 we will create a `background.js` script in our extension that is listed in our `manifest.json` file. We will add custom events to that script that correspond to different events that happen during the life of our extension.  Those things can include the extension being installed, the tab page being loaded, messages being sent from tab content pages and more. What's unique about the `background.js` script is that it's always available while the browser is running.

What does always available mean? If you remember, in an early part of this guide we created in the `popup.js` file, an event listener to the onclick of the "Display" button.

When that click event fired, it sent a message to a listener running in the content page of the current tab. That content page, did some work (set the image) and then returned with a result.

What would happen if the `popup.html` page happened to be closed when that returning message from the content script was sent? Best case is we'd get an error logged to the extension itself saying "nothing to receive that message", worst case would be something important would not happen.

Because after the "Display" button on the popup page is pressed, we want to close that popup dialog, we have to deal with this situation exactly. That is, the content script may want to send a message back to the popup to be handled, but if the popup script is closed, there is no longer an active page listening.  That's where the background `JavaScript` comes in and we will talk about the next.

## What is a background script and adding it to our manifest

Let's start out be adding to the root of our extension a new file `background.js` and then register it at the bottom of our current `manifest.json`. Notice that I've included `lib/jquery.min.js` in my list of files assigned to the `background` attribute in the `manifest.json`. The reason for this is that the background script runs in the context (thread) of the extension and I want to use `jQuery` in my background scripts.

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
## Use background.js or background.html

As an aside, keep in mind that a `background.html` file is created on your behalf even though you don't specify it directly. You can however, instead of referencing the scripts you want directly as we've done here, you can include your own `background.html` file, and then reference the script tags you want included in that `background.html`.  

One big benefit of using `background.html` is you can use JavaScript's `require` or `import` which are a big programming conveniences for most of us. It also allows us to easily use `JavaScript` frameworks like `React` to built out extensions.

Updating `manifest.json` looks like what we have below, though remember, that is not what we are doing here in our example. Note that you can do one or the other but not both. That is, in your `manifest.json`, reference an HTML background page  or reference JavaScript files but not both.

```JSON
  "background": {
    "persistent": false,
    "page": "background.html"
  }
```

## Updating the extension icon to show the day of the NASA picture

It's easy to put up to 4 characters on top of the extension icon as text from the `background.js` script. Simply call the extension method `chrome.browserAction.setBadgeText`.  The first parameter is an object that has the attributes `text` and `tabId`.  If `text` is set, that value replaces whatever is currently displayed on the badge with this text value. If `tabId` is set, then the badge text displayed only shows when you are on the `tabId` specified. If no `tabId` is specified, then the badge text shows on all tabs).

## Creating a listener in the background script

As I said earlier, the `background.js` thread is always running (or at least suspended and ready to run). Typically, what is in the `background.js` file is just listeners waiting to respond to different events.

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

As you can see, when a message is posted to our background script, we query the `chrome.tabs` extension API for the active tab. We then set the badge text of that tab using the extension API method `chrome.browserAction.setBadgeText`. Notice that if we do not pass any text as the `request.text` that the badge text is cleared.

## Update badge text from our content script

To update our badge text using the extension API method `chrome.browserAction.setBadgeText`, we need to call another extension API method `chrome.runtime.sendMessage` to send a message to our `background.js` listener.

In that message, we need to include the text of the message as well as the tabId of the tab we want the badge text to correspond to. It would be interesting to know what day of the week the NASA picture of the day was from and use that as badge text. We can get that from either the `jQuery.ajax` return, or the data object stored  in browser LocalStorage as our cache. If you remember, in our `popup.js` earlier in this guide, we passed to the content script the current tab id so we have that already and can use it again in this `sendMessage` call. Here is our updated `content.js` that includes these two new things.

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

We created an `updateBadgeText` local function so that we can update the text based on three different things happening.

* A fresh image is returned from the NASA API
* A cache image is returned from browser LocalStorage
* A click event was made on the displayed image

Here is what a typical invocation of this NASA picture of the day extension method looks like. Uou can see the text 'Sat' on top of the extension launch icon indicating which day of the week the picture of the day was generated on.

![Running extension with badge text set](media/part5-runningextension.png)


