---
description: Extensions Getting Started Part 4
title: Add an options page and NASA API key as well cache use to LocalStorage
author: Peter Kellner
ms.author: xxx
ms.date: 6/15/2019
ms.topic: article
ms.prod: microsoft-edge-chromium
keywords: edge-chromium, web development, html, css, javascript, developer, extensions
---

# 1. Add an options page and NASA API key as well cache use to LocalStorage

* Extension technologies covered in this part 4.
  * An options page to set extension configuration values
  * Extension API Storage for saving extension specific data
  * Setting extension permissions for security
  * Using browser LocalStorage for Caching API requests
  
In this part 4 we will extend this NASA picture of the day extension to retrieve from the NASA API, the current picture.  Currently, we are only showing over and over the same static `stars.jpeg` that we statically stored in the extension itself.

Because the NASA API requires a key to access it, we will add a custom extension configuration screen, also known, in extension terms, as an options page. On this options page we will save configuration data including a checkbox that tells the app whether to use the static `stars.jpeg` or the NASA API.

Finally, in our content page JavaScript that we injected into our currently executing tab, we will asynchronously read that configuration from the extension storage api and use it to retrieve a URL from nasa as well as Cache that URL for an hour to avoid calling the NASA API over and over again.

## Building an options page for our extension

The extensions API makes it easy to build an options page that you can use to load and save custom configuration information from your custom extension. All we have to do is update the manifest to include a reference to an html that is our options page and add a custom permission so we can use the `chrome.storage` extension api then of course build that html and JavaScript that renders a form with the associated logic to retrieve, display and save the configuration information.

The changes to the `manifest.json` file include the `options_ui` entry set to `options/options.html` and creating a permissions entry with one permission, `storage`.

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
  }
}
```

In our new `options` directory, we now have two files.  `options.html` is the first and it's basic html that includes two input fields, one checkbox and one text input field. It also includes a button to click to save those values.

```HTML
<html>
  <head>
    <title>Nasa Picture of the Day Options</title>
    <style>
      html {
        margin: 12px 0 0 55px;
        min-width: 500px;
        width: 500px;
        max-height: 600px;
        height: 600px;
      }
    </style>
  </head>
  <body>
    <label>
      <input type="checkbox" id="useNasaApi" />
      Use NASA picture of the day API (not sample local data)
    </label>
    <br />
    <label>
      <br/>
      <span>NASA picture of the day API key (DEMO_KEY is very limited, apply for your own at https://api.nasa.gov/</span>
      <br/>
      <input type="text" id="nasaApiKey" />
    </label>
    <hr />
    <button id="save">Save</button>
    <div id="status"></div>

    <script src="options.js"></script>
  </body>
</html>
```

The `options.js` does all the work.  When it first runs, it calls the function `restore_options` which in turn, uses the `chrome.storage.sync.get` extension api method to retrieve the two values of our configuration parameters assuming they've been previously saved. If values have not been previously saved, the get method uses it's first parameter as the defaults.

Notice that this call is asynchronous which means that when it completes, the second parameter of both the get and set, are callbacks which get executed when the functions return their results.

```JS
function save_options() {
  const nasaApiKey = document.getElementById("nasaApiKey").value;
  const useNasaApi = document.getElementById("useNasaApi").checked;
  chrome.storage.sync.set(
    {
      nasaApiKey: nasaApiKey,
      useNasaApi: useNasaApi
    },
    function() {
      const status = document.getElementById("status");
      status.textContent = "Options saved.";
      setTimeout(function() {
        status.textContent = "";
      }, 750);
    }
  );
}
function restore_options() {
  chrome.storage.sync.get(
    {
      nasaApiKey: "DEMO_KEY",
      useNasaApi: false
    },
    function(items) {
      document.getElementById("nasaApiKey").value = items.nasaApiKey;
      document.getElementById("useNasaApi").checked =
        items.useNasaApi;
    }
  );
}
window.onload = function() {
  restore_options();
};
const elementSave = document.getElementById("save");
if (elementSave) {
  elementSave.addEventListener("click", save_options);
}
```

To activate this options panel, the extensions api automatically add a launch menu in the context (or the right mouse button) of the extensions launch button as is shown here.

![Extension Options Context Menu Launcher](media/part4-extension-contextmenu.png)

And when launched, with minimal styling, the extension options menu shows us:

![Extensions Options Form](media/part4-extensions-options-form.png)

## Updating our content page to asynchronously retrieve configuration data from extension storage

Instead of directly setting the image elements url that is injected into the body of the currently executing tab, we first want to get from the `chrome.storage` extension api, the configuration values saved from the options dialog.  Based on those values, ultimately we will either display our static `stars.jpeg` file from our extension itself, or we will call the NASA API and use the picture of the day URL returned from that to display.

In the below JavaScript, we are not yet calling the NASA API, but instead just outputting to the current tab page the configuration parameters we retrieved from `chrome.storage`.  Notice that we update the content HTML only after the storage api asynchronously returns.

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
    $("body").prepend(
      `
        <img  src="${request.url}" id="${request.imageDivId}" 
           class="slide-image" />
        <ul>
          <li>useNasaApi:${result.useNasaApi}</li>
          <li>nasaApiKey:${result.nasaApiKey}</li>
        </ul>
      `
    );
    $(`#${request.imageDivId}`).click(function() {
      $(`#${request.imageDivId}`).remove(`#${request.imageDivId}`);
    });
    sendResponse({ fromcontent: "This message is from content.js" });
  });
  return true; // forces sendMessage to wait for sendMessage before exiting
});
```

>[!NOTE]
>Near the bottom of the JavaScript, notice the `return true;`. That is subtle but important. Returning true from this function will cause the caller (`chrome.tabs.sendMessage`) to wait for this return. Otherwise, since in our popup where we send a message and then close the window, the popup will have closed before this function returns and cause an error in the extension.

## Asynchronously calling the NASA API to get the picture of the day

Now we need to add the logic to our `content.js` to both retrieve data from the NASA API as well as handle the case where the user configuration tells us to use the static `stars.jpeg` instead.  Since `jQuery` is asynchronous and we are using that to make our ajax call to get the picture URL, we need to add some code to make sure that only after completion does the HTML get updated. This code does that for us.

Below, we have replaced just$$$$

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
    if (result.useNasaApi && result.useNasaApi === true) {
      const url = `https://api.nasa.gov/planetary/apod?api_key=${
        result && result.nasaApiKey ? result.nasaApiKey : "DEMO_KEY"
      }`;
      $.ajax({
        url,
        type: "GET",
        datatype: "json",
        success: function (data) {
          if (data && data.url) {
            updateHtml(data.url);
          } else {
            alert(`api call failed to ${url}`);
          }
        },
        error: function (jqXHR) {
          const errorMessage =
            jqXHR && jqXHR.responseText
              ? JSON.parse(jqXHR.responseText).error.message
              : "error calling NASA API";
          alert(errorMessage);
        }
      });
    } else {
      updateHtml(request.url);
    }
    function updateHtml(imageUrl) {
      $("body").prepend(
        `<img  src="${imageUrl}" id="${request.imageDivId}" 
           class="slide-image" />`
      );
      $(`#${request.imageDivId}`).click(function() {
        $(`#${request.imageDivId}`).remove(`#${request.imageDivId}`);
      });
      sendResponse({ fromcontent: "This message is from content.js" });
    }
  });
  return true; // forces sendMessage to wait for sendMessage before exiting
});
```



## Cache the data retrieved from the NASA API with browser LocalStorage

