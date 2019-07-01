---
description: Extensions Getting Started Part 5
title: Animate in the NASA image with a CSS and dynamic code insertion.
author: Peter Kellner
ms.author: xxx
ms.date: 6/15/2019
ms.topic: article
ms.prod: microsoft-edge-chromium
keywords: edge-chromium, web development, html, css, javascript, developer, extensions
---

# Animate in the NASA image with a CSS and dynamic code insertion

By [Peter Kellner](http://peterkellner.net)

* Extension technologies covered in this part 6.
  * Add a static content page to browser tab
  * Use executeScript to dynamically set a class on an element
  
[Completed Extension Package Source for This Part](extension-source/extension-getting-started-part6.zip)

## The animation plan

In this part 6 we will take our completed NASA picture of the day Edge Chromium extension and change the behavior of how the image appears on the screen when the extension icon launch button is pressed. Specifically, we'll add some static `CSS` to the current browser tab page, then, using `chrome.tabs.executeScript` we'll update the classes assigned to the `body` element of the page to start a slide in animation of our NASA picture of the day.

## Inserting CSS as a content page

Let's first start out by creating a new static `CSS` file that will contain classes that will be inserted as content into every browser tab page just like we did previously with the `content_scripts/content.js`.  Let's call this file `content_scripts/content.css` and define it as follows.

```CSS
html,
body {
    padding: 0;
    margin: 0;
}
.slide {
    position: relative;
    top: -400px;
}
.slide-anim {
    animation: slideDown 1500ms linear forwards;
}
.slide-image {
    height: auto;
    width: 100vw;
}
@keyframes slideDown {
    from { top: -200px;}
    to {top: 0;}
}
```

The idea here is that when our NASA picture of the day is rendered, it will always have associated with it the `slide-image` class. When we originally created the `img` element, we assigned that class and made a reference that we would be using it later so now we are fulfilling that promise. Essentially, all it does is sets the image to fill the full width of the current browser tab.

## Updating popup to add classes to content

The next step is to update our `popup/popup.js` to begin the animation defined in this `content.css` file once the image is displayed on the page.  Since in this popup launch script, we have a function that is called once the image is displayed, we can add to that new functionality to dynamically insert some `JavaScript`. In the code below, which is our updated `popup/popup.js` we create a string called `codeToInject` and then using the extensions API method `chrome.tabs.executeScript` we inject one line of `JavaScript` that adds the two classes to our tab page `body` element.  This effectively launches the animation that slides the NASA picture of the day image in from the top.

```JAVASCRIPT
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
        function (response) {
          const codeToInject = `
          $("body").addClass("slide slide-anim");
        `;
          chrome.tabs.executeScript(tabs[0].id, {code: codeToInject}, function () {
            window.close();
          })
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

## Updating our content script to remove classes on clear

We added the animation CSS classes to our `body` element to cause the sliding animation. When we click on the image to clear it, the image element is removed, but those classes persist.  The `content.js` file needs to have one line added to it to remove those classes. That line is

```JAVASCRIPT
$("body").removeClass("slide slide-anim");
```

And the full `content.js` is now

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
      if (needToUpdateNasaPod(dataObject.localStorageSetDate, 60)) {
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
        $("body").removeClass("slide slide-anim");
        updateBadgeText(); // clear badge text
      });
    }
  });
  return true; // forces sendMessage to wait for sendMessage before exiting
});
```

## Updating our manifest.json to handle our CSS content

Because we have added a new `CSS` file we want that as default content in all our browser tab pages. In order to add the `chrome.tabs.executeScript` method, we need to update our `manifest.json` file.  We need to add the script `content_scripts/content.css` to the content_scripts section, and to have the authority to execute `chrome.tabs.executeScript` we need to add to our permissions entry the permission `activeTab`.  Our new file is below.

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
      "js": ["lib/jquery.min.js","content-scripts/content.js"],
      "css": ["content-scripts/content.css"]
    }
  ],
  "web_accessible_resources": [
    "images/*.jpeg"
  ],
  "permissions": [ "storage","activeTab"],
  "options_ui": {
    "page": "options/options.html",
    "open_in_tab": false
  },
  "background": {
    "scripts": ["lib/jquery.min.js", "background.js"]
  }
}
```

## Running the new extension with animation

After making these changes, when we launch or extension by clicking on its badge icon, instead of the NASA picture of the day immediately displaying, it now animates in over 1.5 seconds sliding in from the top.

If you watch the animation closely you'll notice that it does not quite start from the top. The reason is we don't know the height of the image so we just scroll in the last 400 pixels which is hard coded into our `CSS` file that contains our animation settings.
