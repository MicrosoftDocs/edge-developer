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
  
In this part 5 we will create a `background.js` script in our extension that we can add custom events to that respond to different things that happen during the life of our extension.  Those things can include the extension being installed, the tab page being loaded, messages being sent from tab content pages and more. What's unique about the `background.js` script is that it's always available.

What does always available mean? If you remember, in an early part of this guide when we created the `options.js` file, when the browser user clicked on the "Display" button, the content script had a listener running on it that processes incoming messages and then when processing is complete calls the method `sendResponse` with a result.  What would happen if the `options.html` page happened to be closed when that message was sent? Best case is we'd get an error logged to the extension itself saying "nothing to receive that message", worst case would be something important would not happen.

## What is a background script and adding it to our manifest

Let's start out be adding to the root of our extension a new file `background.js` and then register it at the bottom of our current `manifest.json`. Notice that I've included `jQuery` in my list of files to run in the background.  The reason for this is that the background script runs in the context (thread) of the extension and I want to use jQuery in my background scripts.

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
As an aside, keep in mind that a `background.html` file is created on your behalf even though you don't specify it directly. You can however, instead of referencing the scripts you want here, you can instead just include your own `background.html` and then in that reference the with script tags, the scripts you want included.  One big benefit of doing this is you can use JavaScript's `require` or `import` which are a big programming conveniences for most of us.  That update to `manifest.json` would look something like this, though remember, that is not what we are doing here in our example. Not you can do one or the other. That is, reference an HTML page or reference JavaScript files. Not both.

```JSON
  "background": {
    "persistent": false,
    "page": "background.html"
  }
```

## Updating the extension icon to show the day of the NASA picture

We are not quite ready to talk about the background script but hold on, we'll get to that when we are ready to clear the day on the extension badge icon that we are about to set.

It's easy to put up to 4 characters on top of the extension icon from any place in an extension that you can call the Chrome API's. That includes content pages, background pages, options and more.  Simply call the extension method `chrome.browserAction.setBadgeText`.  The first parameter is simply an object that has the attributes `text` and `tabId`.  If `text` is set, that replaced whatever is currently displayed on the badge with this value, and if tabId is set, then what is displayed, only shows when you are on the tabId specified (otherwise, the badge text shows on all tabs).




## Creating a listener in the background script


