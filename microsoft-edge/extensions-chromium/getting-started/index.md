---
description: Learn what a Chromium extension is as well as progressively build a complete picture viewing extension that includes options, content injection, background scripts, storage and more.
title: Extensions - Getting started
author: Peter Kellner
ms.author: xxx
ms.date: 6/15/2019
ms.topic: article
ms.prod: microsoft-edge-chromium
keywords: edge-chromium, web development, html, css, javascript, developer, extensions
---

# Getting started with Chromium Extensions

By [Peter Kellner](https://github.com/pkellner)

There is now just one programming model associated with building extensions for the Microsoft Edge-Chromium browser and the Google Chrome browser. It's based on the open source Chromium engine now so all API calls and results will be identical. You'll also be able to submit the same source code bundle to both the Microsoft and Google extension stores, making life easy now when it is time to publish your Extension.

This "Getting Started" Guide will launch you on your way to building your own full functional extension.  It introduces the major pieces associated with Extensions giving you a real examples to build from.

If you want to jump directly into building your first extension, go to part 1 list below, building a simple extension, and work through all 6 parts  giving you more extension functionality as you go.

If on the other hand, you are not familiar with the extension concepts and architecture, I strongly encourage you to read on, and learn what extensions are all about. It will make building extensions much easier as you'll understand the motivations and architecture behind them.

## Incrementally build a NASA picture of the day app across 6 sections

Each section has the completed extension source installation package referenced in it.


<details>
<summary><a href='./part1-simple-extension.md'>Build a simple extension that pops up NASA picture of the day</a></summary>

  * Creating a Manifest
  * Assign extension icons
  * Displaying a Popup Window  
  * Integrating jQuery  
  * LocalStorage Use  
</details>

<details>
  <summary><a href='./part2-running-dev-time.md'>Run your extension locally in your browser while developing it</a></summary>

  * Launching the extensions manager page in Edge Chromium
  * Installing your extension locally for the first time
  * Updating your extension with changes
  * Debugging your extension
  * Publishing your extension to the store for public use
  
</details>

<details>
  <summary><a href='./part3-content-scripts.md'>Dynamically insert NASA  picture below the page body tag</a></summary>

  * Create JavaScript that inserts dynamic content script
  * Define in manifest which pages get content script
  * Inject content script declaratively
  * Add a Button on Popup to send a message to content script
  * Receive a message inside a content script
  * Staying secure with content scripts
</details>

<details>
  <summary><a href='./part4-add-options-page.md'>Add an options page and NASA API key as well cache use to LocalStorage</a></summary>

  * Create a new options configuration page
  * Add custom extension permission to use Storage API
  * Add options JavaScript using Storage API to save settings
  * On content page show NASA API key from Storage API
  * Use NASA API to retrieve Actual Picture of the Day
  * Using browser LocalStorage to cache results of NASA API call
</details>

<details>
  <summary><a href='./part5-background-script.md'>Adding background.js to update badge text on image close</a></summary>

  * Create background.js to listen for click event from content page on tab
  * Move image close event from content to background script
  * set badge text to day of week of current NASA picture of the day
  * Clear badge text when picture is removed from background.js
</details>

<details>
  <summary><a href='./part6-dynamic-content-insertion.md'>Fade in NASA image with a CSS and dynamic code insertion</a></summary>

  * Create a declarative CSS Content Script
  * Add jQuery access to popup.js
  * Dynamically execute JavaScript on tab page
ext</details>

## Understanding the browser before extensions are introduced

### Each browser tab is isolated from every other tab

To understand what an Edge-Chromium extension is, we first need to fully understand what a multi tab browser, like Microsoft Edge does primarily. To start, each browser tab runs in its own thread that effectively isolates it from other browser tabs (or threads).

![One thread per browser tab](media/index-image1-browsertabs.png)

### Each tab handles one GET request

Each tab essentially use the URL (also known as the uniform resource locator) to get a single stream of data which is typically an HTML document. That single stream (or page), often includes instructions (like JavaScript include tags, image references,  CSS references and more). Ultimately, all the resources needed are downloaded to that one tab page and typically a visualization appears which we see in the browser tab completely rendered.

![Typical web server to web page flow](media/index-image2-singlerequest.png)

### All communication from each tab is to remote servers

Understanding that each tab runs in an isolated environment means that these tabs are isolated from each other, but not the greater internet.  Typically, these tabs, running JavaScript as there programming language, communicate back to the server, that can be thought of as the originating server for that first GET request that was entered into the URL bar at the top of the browser tab.

## The Extension model turns everything upside down

An Edge-Chromium extension, just like tab pages, runs in its own thread which is completely isolated from all tab page threads we just talked about. Unlike the tabs whose job is to typically issue a single GET request to a remote server, then display a visualization of that data in the browser, the extension, on the other hand is the server itself, that up until now, only resided on the other end of the internet connection made from a browser tab.

![Extension model turns server model upside down](media/index-image3-upsidedown.png)

This is really important to understand. Once you create an extension, and install it in your browser, you've created a standalone web server that is living and breathing inside of your browser but still isolated from every tab page running on that browser.

### The Extension web server bundle

So what is an extension? I'm sure you've used extensions developed by other authors and you've likely done that by going to an extension web store and installing that extension "in" your browser.  What did you get when you installed the extension? You got a bundle (OK, let's call it a zip file) of web resources that are no different than what a web developer would publish to a web server.  T

That zip file included HTML, CSS, JavaScript, images and all the necessary assets to make a web page. There is however, one extra file that is required in the root of this zip file, and that file is named `manifest.json`.  More later on that, but suffice it to say, it's the blue print of your extension that includes things like what's the version of your extension, what's the title, what privileges does it need to run and lots more.

PICTURE 3 -THIS SHOULD BE A PICTURE OF THE VSCODE FILEMANGER WHEN EXTENSION IS DONE

### Launching the Extension server

We know that when we deploy to a web server, that web server, whether it's Apache, IIS, NGINX or any other, our web bundle is at some location on that web server. Through certificates, configuration files and more, somehow, when a client browser navigates to a URL on that server, the index.html file that is on the web server at some special location is downloaded to the users browser.  How does our Extension do the same thing? That is, how can the tab pages of our browser get to this zip file (our extension that is)? That's what the extension runtime does for us.

The extension serves its files all from the URL (remember, uniform resource locator) at the name `chrome-extension://{some-long-unique-identifier}/index.html`. The name I put in brackets, some-long-unique-identifier is a unique identifier assigned to the extension that you installed.  That means, if you have 10 unique Extensions installed on your browser, each will have it's on unique identifier that points at the zip file (or Extension bundle) installed inside your browser.

![Unique URLS for extensions](media/index-image4-uniqueurls.png)

PICTURE 4

### Extensions can manage and communicate with tabs and the browser toolbar

The fact that an Extension is a bundle of files that run as a built in web server is the core of an extension but just the beginning of what extensions can do. Extensions can interact with the browsers toolbar, they can manage all the other running tab pages in safe and sane way, as well as manipulating the DOM of all those tab pages.  Built into the Chromium browser is a message API that allows for communications between the extensions and the tab pages to allow this to happen gracefully. This API, also known as the extensions API gives a lots of capabilities including notification management, storage management and much more.

Just like web servers, extensions can continually run (or sleep waiting for notifications) all the time that the browser is running.  You can think of an extension as an orchestrator for the browser.  Again, the extension itself runs completely isolated from the tab pages, but through the extensions API, and opt-in permissions granted to the extension, they can virtually control any and all tab pages running in the browser.

### Extensions provide an opt-in at install time security model

Each extension, through a declaration in the `manifest.json` file allows the person installing the extension to give it different levels of authority. This authority allows extensions, when installed by a user, to opt-in so that the extension can literally extract any information, hidden or not on a tab, and process that data through the extension, making security considerations a first class part of extensions.

## Acknowledgements

* Balaje Krishnan, Microsoft Edge Team
* Simeon Vincent, Google Chrome Team
* Addy Sukma Bharrata, Graphics Designs
* Jukka Wallasvaara, Microsoft
