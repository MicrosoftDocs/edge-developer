---
description: Get an end to end overview of the journey from beginning development to packaging of Microsoft Edge extensions.
title: Extensions - Getting started
author: Peter Kellner
ms.author: xxx
ms.date: 6/15/2019
ms.topic: article
ms.prod: microsoft-edge-chromium
keywords: edge-chromium, web development, html, css, javascript, developer, extensions
---

# Getting started with Chromium Extensions

There is now just one programming model associated with building extensions for the Microsoft Edge-Chromium browser and the Google Chrome browser. It's based on the open source Chromium engine now so all api calls and results will be identical. You'll also be able to submit the same bundle to both the Microsoft and Google extension stores making life easy now when it is time to deploy your Extension.

This "Getting Started" Guide will launch you on your way to building your own extension.  It introduces the major pieces associated with Extensions giving you real examples and discussion.  

If you want to jump directly into building your first extension jump in to section 1 below on building your first extension. If on the other hand, you are not familiar with the Extension concepts and architecture, I strongly encourage you to read on here and learn what extensions are all about. It will make building extensions much easier as you'll understand the motivations behind them.

* Build a simple extension that pops up NASA Picture of the day when clicked
  * Creating a Manifest
  * Assign extension icons
  * Displaying a Popup Window  
  * Integrating jQuery  
  * LocalStorage Use  

* Add an options page to store NASA API key
  * Set options for extension
  * Extension Storage API
  * Async callbacks

* Dynamically Insert NASA Picture Below body tag of current tab
  * Create a content script
  * Define in manifest which pages get content script
  * Inject content script declaratively
  * Add a Button on Popup to send a message to content script
  * Set badge text on Extension launch button saying day of week of NASA picture
  * Receive a message inside a content script
  * Staying secure with content scripts

* Add click event to inserted image to remove it from content script on page
  * Add click event JavaScript to content script
  * Create background.js to listen for click event from content page on tab
  * Query for active tab from background.js
  * Clear badge text in from background.js
  * PERMISSION???
  
* Inject CSS create NASA image insertion animation



1.  Add an options popup to store your NASA API Key in extension storage
Extension Features Demonstrated: Creating a Manifest; Displaying a Popup Window; Integrating jQuery; LocalStorage Use
Add localstorage

## Understanding the browser before Extensions are introduced

### Each browser tab is isolated from every other tab

To understand what an Chromium Extension is, we first need to fully understand what a multi tab browser, like Microsoft Edge, does primarily. To start, each browser tab runs in it's own thread that effectively isolates each tab from other browser tabs.

PICTURE1

### Each tab handles one GET request

Each tab essentially use the URL (also known as the uniform resource locator) to get a single stream of data which is typically an HTML document. That single page often includes instructions (like JavaScript include tags, image and css references among others) that are to be downloaded for use on this particular tab and no other tab. Ultimately, all the resources needed are downloaded to that one tab page and typically a visualization appears which we see in the browser tab completely rendered.

PICTURE2

### All communication from each tab is to remote servers

Understanding that each tab runs in isolated environment means that these tabs are isolated from each other, but not the greater internet.  Typically, these tabs, running JavaScript communicated back to the server that can be thought of as the origining server for that first GET request that was entered into the URL bar at the top of the tab.

## The Extension model turns everything upside down

An extension, just like tab pages, runs in its own thread which is completely isolated from all tab page threads we just talked about. Unlike the tabs whose job is to typically issue a single GET request to a remote server, then display a visualization of that data in the browser, the extension, on the other hand is, the server itself that up until now, only resided on the other end of the internet connection made from a browser tab.

PICTURE

This is really important to understand. Once you create an extension, and install it in your browser, you've created a standalone web server that is living and breathing inside of your browser but still isolated from every tab page running on that browser.

### The Extension web server bundle

So what is an extension? I'm sure you've used extensions developed by other authors and you've likely done that by going to an extension web store and installing that extension "in" your browser.  What did you get when you installed the extension? You got a bundle (OK, let's just call a zip file) of web resources that are no different than what a web developer would publish to a web server.  T

That zip file included HTML, CSS, JavaScript, Images and all the necessary assets to make a web page. There is however, one extra file that is required in the root of this zip file, and that file is named `manifest.json`.  More later on that, but suffice it to say, it's the blue print of your extension that includes things like what what's the version of your extension, what's the title, what priviliges does it need to run and lots more.

PICTURE 3

### Launching the Extension server

We know that when we deploy to a web server, that web server, whether it's Apache, IIS, NGINX or any other, that put our web bundle at some location and through certificates, configuration file and more, somehow, when a client browser navigates to some URL, typically, the index.html file that is on the web server at that special locations is downloaded with the browsers GET request.  How does our Extension do the same thing? That is, how can the tab pages of our browser get to this zip file (our extension that is), that's installed on this browser? 

The extension serves it's files all from the URL (remember, uniform resource locator) at the name `chrome-extension://{some-long-unique-identifier}/index.html`. the name I put in brackets, some-long-unique-identifier is a unique identifier assigned to the extension that you installed.  That means, if you have 10 unique Extensions installed on your browser, each will have it's on unique identifier that points at the zip file (or Extension bundle) installed inside your browser.

PICTURE 4

### Extensions can manage and communicate with tabs and the browser toolbar

The fact that an Extension is a bundle of files that run as a built in web server is the core of an extension but just the beginning of what extensions can do. Extensions can interact with the browsers toolbar, they can manage all the other running tab pages in safe and sane way, as well as manipulating the DOM of all those tab pages.  Built into the Chromium browser as a message API that allows for communications between the extensions and the tab pages to allow this to happen gracefully. This API, also known as the extensions API gives a lots of capabilities including notification management, storage management and much more.

Just like web servers, Extensions can continually run (or sleep waiting for notications) all the time that the browser is running.  You can think of an extension as an orchestrator for the browser.  Again, the extension itself runs completely isolated from the tab pages, but through the extensions API, and opt-in permissions granted to the extension, can virtually control any and all tab pages running in the browser.

### Extensions provide an opt-in at install time security model

Each extension, through a declaration in the `manifest.json` file allows the person installing the extension to give the extension differnet levels of authority. This authority allows extensions to opt-in so that the extension can literally extract any information, hidden or not on a tab, and process through the extension making security considerations very important.









