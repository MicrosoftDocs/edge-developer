---
ms.assetid: b40e36a9-0e17-4561-819c-8ec51e5229a1
description: Learn how to create an Edge extension with some helpful tutorials and videos!
title: Extensions - Creating an extension
author: abbycar
ms.author: abigailc
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Creating a Microsoft Edge extension

You can learn how to create extensions by following the [Borderify](https://developer.mozilla.org/Add-ons/WebExtensions/Your_first_WebExtension) and [Beastify](https://developer.mozilla.org/Add-ons/WebExtensions/Your_second_WebExtension) tutorials on Mozilla Developer Network (MDN). This page highlights the changes you'd need to make to get these samples running in Microsoft Edge.

Once you've created an extension or two and implemented the code tweaks for Microsoft Edge support, jump to the [Next steps](#next-steps) section for info on how to sideload and package extensions.

If you'd prefer a video walkthrough of creating a Microsoft Edge extension, check out the video below on how to make a basic extension with a background script!

> [!VIDEO https://channel9.msdn.com/Blogs/One-Dev-Minute/Adding-a-Background-Script-to-you-Edge-Extension/player]


## Icon differences
In Microsoft Edge, preferred extension icon sizes are 20px, 25px, 30px, 40px. Other supported sizes are 19px, 35px, 38px. These icon sizes are ideal for Edge's frame. Other sizes will be scaled which may cause issues. In the following MDN tutorials, different icon sizes are used and should be swapped out with preferred/supported icon sizes.

For more info on icon sizes and best practices, see the [Design](./design.md) guide.


## Borderify

Learn how to make a very basic extension and ease into the world of extensions by following the [Borderify](https://developer.mozilla.org/Add-ons/WebExtensions/Your_first_WebExtension) tutorial.

Borderify is a simple extension that draws a red border around pages that match a URL pattern that you specify. The border code is handled with a [content script](https://developer.mozilla.org/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Content_scripts), while the URL match pattern is specified in your [manifest.json](https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json) file within the [`"content_scripts"`](https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json/content_scripts) field.

### Code differences

While making your way though the tutorial, the following adjustments should be made so that
the extension will work with Microsoft Edge:

**manifest.json**

For the manifest.json file, you'll need to add the `"author"` key. This is required in Microsoft Edge.

Once you've added the `"author"` key and updated the icons sizes, you should have something similar to this:
```json
{
    "author": "My Name",
    "description": "Adds a solid red border to all webpages matching developer.microsoft.com/microsoft-edge/.",
    "name": "Borderify",
    "version": "1.0",
    "icons": {
        "20": "icons/border-20.png"
    },

    "content_scripts": [{
        "matches": ["*://developer.microsoft.com/*/microsoft-edge/*"],
        "js": ["borderify.js"]
    }]
}
```

## Beastify

The [Beastify](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Your_second_WebExtension) extension tutorial walks through how the different pieces of an extension work together and uses both a [content script](https://developer.mozilla.org/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Content_scripts) and a [browser action](https://developer.mozilla.org/Add-ons/WebExtensions/API/browserAction) popup. In the end you'll have an extension that can turn an entire page's content into a picture of an animal of you choosing, selected from the browser action popup.


### Code differences

While making your way through the tutorial, the following adjustments should be made so that
the extension will work with Microsoft Edge:

**manifest.json**

- Remove the following [unsupported manifest keys](../api-support/supported-manifest-keys.md):
   - `"manifest_version"`
   - `"applications"`
   -  `"homepage_url"`
While these keys aren't supported, if you don't remove them Microsoft Edge will ignore them.
- Add the `"author"` key. This is required in Microsoft Edge.
- Since [`activeTab`](https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json/permissions#activeTab_permission) is unsupported, as a workaround you can remove the [`"permissions"`](https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json/permissions) key and replace it with the [`"content_scripts"`](https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json/content_scripts) key:

 ```json
"content_scripts": [{
   "js": ["content_scripts/beastify.js"],
   "matches": ["*://*/*"]
}]
```

You should end up with a manifest.json file that looks similar to this:

```json
{
   "author": "My Name",
   "description": "Adds a browser action icon to the toolbar which lets you replace a page with a picture",
   "name": "Beastify",
   "version": "1.0",
   "icons": {
      "20": "icons/beasts-20.png",
      "40": "icons/beasts_40.png"
   },
   "content_scripts": [{
       "js": ["content_scripts/beastify.js"],
       "matches": ["*://*/*"]
    }],

   "browser_action": {
      "default_icon": {
        "20": "icons/beasts_20.png",
        "40": "icons/beasts_40.png"
      },
      "default_title": "Beastify",
      "default_popup": "popup/choose_beast.html"
   },

   "web_accessible_resources": [
      "beasts/frog.jpg",
      "beasts/turtle.jpg",
      "beasts/snake.jpg"
   ]
}
```


**JavaScript**

The Beastify example uses promises which aren't currently supported for Microsoft Edge extensions. You'll need to change these to callbacks for the extension to run correctly. You can do this by replacing `document.addEventListener` in the choose_beast.js file with the following code:
 ```js
document.addEventListener("click", function(e) {
      if (e.target.classList.contains("beast")) {
          var chosenBeast = e.target.textContent;
          var chosenBeastURL = beastNameToURL(chosenBeast);

          browser.tabs.executeScript(null, {
              file: "/content_scripts/beastify.js"
          });

          browser.tabs.query({active: true, currentWindow: true}, function(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {beastURL: chosenBeastURL});
          });

          return;
      }
      else if (e.target.classList.contains("clear")) {
          browser.tabs.reload();
          window.close();

          return;
      }
});
```

**CSS**

To make the extension's browser action popup fit the buttons without creating overflow scrollbars,
you can substitute the `width` attribute of `html` and `body` with the `overflow: hidden` attribute.

```css
html, body {
  width: 100px;
}
```


```css
html, body {
  overflow: hidden;
}
```

## Next steps

Now that you've coded up an extension or two, you probably want to try them out. See [Adding and removing extensions](./adding-and-removing-extensions.md) for info on how to sideload your extension.

Once you've finished your extension and tested it out, take a look at the [Packaging](./packaging.md) guide to get familiar with packaging an extension.
