---
description: Learn what a Chromium Extension is as well as progressively build a complete picture viewing Extension that includes options, content injection, background scripts, storage and more.
title: Getting Started With Microsoft Edge (Chromium) Extensions
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 12/05/2019
ms.topic: article
ms.prod: microsoft-edge-chromium
keywords: edge-chromium, web development, html, css, javascript, developer, extensions
---

# Getting Started With Microsoft Edge \(Chromium\) Extensions  

If you want to jump directly into building your first Extension, go to part 1 of building a NASA picture of the day Extension.  

If you are not familiar with the Extension concepts and architecture, continue reading, and learn all about what Extensions are.  This information helps you build Extensions much easier since you understand the motivations and architecture behind them.  

## Build a NASA picture of the day Extension  

Each section has the completed Extension source installation package referenced in it.  

*   [Build a simple Extension that pops up NASA picture of the day](part1-simple-extension.md)  
    *   Creating a Manifest  
    *   Assign Extension icons  
    *   Displaying a Pop-up Window  
    *   Run your Extension locally in your browser \(side-loading\)  

*   [Dynamically insert NASA picture below the page body tag](part2-content-scripts.md)  
    *   Create JavaScript that inserts dynamic content script  
    *   Define in manifest which pages get content script  
    *   Inject content script declaratively  
    *   Add a Button on Pop-up to send a message to content script  
    *   Receive a message inside a content script  

## Understanding the browser before Extensions are introduced  

### Each browser tab is isolated from every other tab  

To understand what a Microsoft Edge \(Chromium\) Extension is, we first need to fully understand what a multi tab browser, like Microsoft Edge does primarily.  To start, each browser tab runs in an individual thread that effectively isolates it from other browser tabs \(or threads\).  

![One thread per browser tab](media/index-image1-browsertabs.png)  

### Each tab handles one GET request  

Each tab essentially use the URL \(also known as the uniform resource locator\) to get a single stream of data which is typically an HTML document.  That single stream \(or page\), often includes instructions \(like JavaScript include tags, image references, CSS references, and more\).  Ultimately, all the resources needed are downloaded to that one tab page and typically a visualization appears which we see in the browser tab completely rendered.  

### All communication from each tab is to remote servers  

Understanding that each tab runs in an isolated environment means that these tabs are isolated from each other, but not the greater internet.  Typically, these tabs, running JavaScript as there programming language, communicate back to the server, that should be thought of as the originating server for that first GET request that was entered into the URL bar at the top of the browser tab.  

## The Extension model turns everything upside down  

An Extension, just like tab pages, runs in a individual thread which is completely isolated from all tab page threads that are discussed.  Unlike the tabs whose job is to typically issue a single GET request to a remote server, then display a visualization of that data in the browser, the Extension, on the other hand is the server, that previously resided on the other end of the internet connection made from a browser tab.  

![Extension model turns server model upside down](media/index-image3-upsidedown.png)  

This is really important to understand.  Once you create an Extension, and install it in your browser, you've created a standalone web server that is living and breathing inside of your browser but still isolated from every tab page running on that browser.  

### The Extension web server bundle  

So what is an Extension? It is a bundle \(or referred to as a zip file\) of web resources that are no different than what a web developer publishes to a web server.  

That zip file includes HTML, CSS, JavaScript, images and all the necessary assets to make a web page.  There is however, one extra file that is required in the root of this zip file, and that file is named `manifest.json`.  It is the blueprint for your Extension that includes things like what is the version of your Extension, what is the title, what privileges does it need to run and lots more.  

![View of files in zip](media/index-image5-filemanager-view.png)  

### Launching the Extension server  

When you deploy to a web server, that web server, whether it is Apache, IIS, NGINX or any other, contains your web bundle.  When a browser navigates to a URL on a server, the `index.html` file on the web server is downloaded.  The browser navigated using certificates, configuration files, and more.  The `index.html` file stored at some special location on the web server.   How does your Extension do the same thing?  Particularly, how is the tab pages of your browser able to get to this zip file \(your Extension\)?  That is what the Extension runtime does for you.  

The extension serves the files all from the URL \(uniform resource locator\) at the name `extension://{some-long-unique-identifier}/index.html`.  The name I put in brackets, `{some-long-unique-identifier}` is a unique identifier assigned to the Extension that you installed.  That means, if you have 10 unique Extensions installed on your browser, each Extension has a unique identifier that points at the zip file \(or Extension bundle\) installed inside your browser.  

<!--![Unique URLS for Extensions](media/index-image4-uniqueurls.png)  -->  

<!--todo: add image for unique URLs  -->  

### Extensions manage and communicate with tabs and the browser toolbar  

Extensions interact with the browsers toolbar, each is able to manage all the other running tab pages in a safe way, as well as manipulating the DOM of all those tab pages.  Built into the Chromium browser is a message API that allows for communications between the Extensions and the tab pages to allow this to happen gracefully.  This API, also known as the Extensions API gives a lots of capabilities including notification management, storage management, and much more.  

Just like web servers, Extensions are able to continually run \(or sleep waiting for notifications\) all the time that the browser is running.  You may think of an Extension as an orchestrator for the browser.  Again, the Extension runs completely isolated from the tab pages, but through the Extensions API, and opt-in permissions granted to the Extension, each Extension is able to virtually control any and all tab pages running in the browser.  

### Extensions provide an opt-in at install time security model  

Each Extension, through a declaration in the `manifest.json` file allows the person installing the Extension to give it different levels of authority.  This authority allows Extensions, when installed by a user, to opt-in so that the Extension is able to extract any information, and process that data through the Extension.  

<!-- image links -->  

<!-- links -->  
