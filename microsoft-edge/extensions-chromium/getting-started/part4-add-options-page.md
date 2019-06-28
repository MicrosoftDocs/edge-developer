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

# Add an options page and NASA API key as well cache use to LocalStorage

* Extension technologies covered in this part 4.
  * An options page to set extension configuration values
  * Extension API Storage for saving extension specific data
  * Setting extension permissions for security
  * Using browser LocalStorage from content and options pages
  
In this part 4 we will extend this NASA picture of the day extension to actually retrieve the NASA picture of the day.  Currently, we are only showing over and over the same static `stars.jpeg` that we statically stored in the extension itself.

Because the NASA API requires a string key to access it, we will add a custom extension configuration screen, also known, in extension terms, as an options page. On this options page we will save configuration data including a checkbox that tells the app whether to use the static `stars.jpeg`, or the NASA API in addition to setting and storing an actual API key that you can get from the NASA web sit3.

Finally, in our content page JavaScript that we injected into our currently executing tab, we will asynchronously read that configuration from the extension storage api and use it to retrieve a URL from nasa as well as Cache that URL for an hour to avoid calling the NASA API over and over again.

## Building an options page for our extension

The extensions API makes it really easy to build an options page that you can use to load and save custom configuration information from your custom extension. All we have to do is update the manifest to include a reference to an html that is our options page, add a custom permission so we can use the `chrome.storage` extension api then of course build that html and JavaScript that renders a form with the associated logic to retrieve, display and save the configuration information.

Let's start out by updating our `manifest.json` to include a reference to a new `options\options.html` file and also add our first permission, named `storage`.

