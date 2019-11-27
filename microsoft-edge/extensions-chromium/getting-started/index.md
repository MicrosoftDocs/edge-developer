---
description: Learn what a Chromium extension is as well as progressively build a complete picture viewing extension that includes options, content injection, background scripts, storage and more.
title: Extensions - Getting started
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 11/27/2019
ms.topic: article
ms.prod: microsoft-edge-chromium
keywords: edge-chromium, web development, html, css, javascript, developer, extensions
---

# Getting started with Chromium Extensions  

If you want to jump directly into building your first extension, go to part 1 of building a NASA picture of the day extension.  

If on the other hand, you are not familiar with the extension concepts and architecture, keep reading on, and learn what extensions are all about.  It will make building extensions much easier as you'll understand the motivations and architecture behind them.  

## Build a NASA picture of the day extension  

Each section has the completed extension source installation package referenced in it.  

*   [Build a simple extension that pops up NASA picture of the day](part1-simple-extension.md)  
    *   Creating a Manifest  
    *   Assign extension icons  
    *   Displaying a Popup Window  
    *   Run your extension locally in your browser \(side-loading\)  

*   [Dynamically insert NASA  picture below the page body tag](part3-content-scripts.md)  
    *   Create JavaScript that inserts dynamic content script  
    *   Define in manifest which pages get content script  
    *   Inject content script declaratively  
    *   Add a Button on Popup to send a message to content script  
    *   Receive a message inside a content script  

## Understanding the browser before extensions are introduced  

### Each browser tab is isolated from every other tab  

To understand what a Microsoft Edge \(Chromium\) extension is, we first need to fully understand what a multi tab browser, like Microsoft Edge does primarily.  To start, each browser tab runs in its own thread that effectively isolates it from other browser tabs (or threads).  

![One thread per browser tab](media/index-image1-browsertabs.png)  

### Each tab handles one GET request  

Each tab essentially use the URL \(also known as the uniform resource locator\) to get a single stream of data which is typically an HTML document.  That single stream \(or page\), often includes instructions \(like JavaScript include tags, image references,  CSS references and more\).  Ultimately, all the resources needed are downloaded to that one tab page and typically a visualization appears which we see in the browser tab completely rendered.  

### All communication from each tab is to remote servers  

Understanding that each tab runs in an isolated environment means that these tabs are isolated from each other, but not the greater internet.  Typically, these tabs, running JavaScript as there programming language, communicate back to the server, that can be thought of as the originating server for that first GET request that was entered into the URL bar at the top of the browser tab.  

## The Extension model turns everything upside down  

An extension, just like tab pages, runs in its own thread which is completely isolated from all tab page threads we just talked about.  Unlike the tabs whose job is to typically issue a single GET request to a remote server, then display a visualization of that data in the browser, the extension, on the other hand is the server itself, that up until now, only resided on the other end of the internet connection made from a browser tab.  

![Extension model turns server model upside down](media/index-image3-upsidedown.png)  

This is really important to understand.  Once you create an extension, and install it in your browser, you've created a standalone web server that is living and breathing inside of your browser but still isolated from every tab page running on that browser.  

### The Extension web server bundle  

So what is an extension? It is a bundle \(or call it a zip file\) of web resources that are no different than what a web developer would publish to a web server.  

That zip file includes HTML, CSS, JavaScript, images and all the necessary assets to make a web page.  There is however, one extra file that is required in the root of this zip file, and that file is named `manifest.json`.  It is the blue print of your extension that includes things like what is the version of your extension, what is the title, what privileges does it need to run and lots more.  

![View of files in zip](media/index-image5-filemanager-view.png)  

### Launching the Extension server  

We know that when we deploy to a web server, that web server, whether it is Apache, IIS, NGINX or any other, our web bundle is at some location on that web server.  Through certificates, configuration files and more, somehow, when a client browser navigates to a URL on that server, the `index.html` file that is on the web server at some special location is downloaded to the users browser.  How does our Extension do the same thing?  That is, how can the tab pages of our browser get to this zip file \(our extension that is\)?  That is what the extension runtime does for us.  

The extension serves its files all from the URL \(remember, uniform resource locator\) at the name `extension://{some-long-unique-identifier}/index.html`.  The name I put in brackets, `{some-long-unique-identifier}` is a unique identifier assigned to the extension that you installed.  That means, if you have 10 unique Extensions installed on your browser, each will have it is own unique identifier that points at the zip file \(or Extension bundle\) installed inside your browser.  

![Unique URLS for extensions](media/index-image4-uniqueurls.png)  

### Extensions can manage and communicate with tabs and the browser toolbar  

Extensions can interact with the browsers toolbar, they can manage all the other running tab pages in a safe way, as well as manipulating the DOM of all those tab pages.  Built into the Chromium browser is a message API that allows for communications between the extensions and the tab pages to allow this to happen gracefully.  This API, also known as the extensions API gives a lots of capabilities including notification management, storage management and much more.  

Just like web servers, extensions can continually run \(or sleep waiting for notifications\) all the time that the browser is running.  You can think of an extension as an orchestrator for the browser.  Again, the extension itself runs completely isolated from the tab pages, but through the extensions API, and opt-in permissions granted to the extension, they can virtually control any and all tab pages running in the browser.  

### Extensions provide an opt-in at install time security model  

Each extension, through a declaration in the `manifest.json` file allows the person installing the extension to give it different levels of authority.  This authority allows extensions, when installed by a user, to opt-in so that the extension can literally extract any information, and process that data through the extension.  

<!-- image links -->  

<!-- links -->  
