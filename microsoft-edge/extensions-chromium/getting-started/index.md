---
description: Learn about Chromium Extensions, and core concepts to build extensions.
title: Microsoft Edge (Chromium) Extensions concepts and architecture
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/07/2021
ms.topic: conceptual
ms.prod: microsoft-edge
keywords: edge-chromium, web development, html, css, javascript, developer, extensions
---
# Extension concepts and architecture  

This article provides a brief introduction to concepts that help when building extensions.  To understand Microsoft Edge \(Chromium\) extensions, we first discuss how multi-tab browsers work.  

## Understand how browsers work  

The following list outlines helpful information to understand before building your extension.  

1.  Each browser tab is isolated from every other tab.  Each tab runs in an individual thread that is isolated from other browser tabs and threads.  
    
    ![One thread per browser tab](media/index-image1-browsertabs.png)  
    
1.  Each tab handles one GET request.  Each tab uses a URL to get a single stream of data, which is normally an HTML document.  That single stream or page, includes instructions like JavaScript include tags, image references, CSS references, and more.  All resources are downloaded to that one tab page, and then the page is rendered in the tab.  
1.  Communication occurs between each tab and remote servers.  Each tab runs in an isolated environment.  The tabs are still connected to the internet, but are isolated from other tabs.  Tabs may run JavaScript to communicate with servers.  The servers are the originating server for the first GET request that was entered into the URL bar of the tab.  
1.  The extension model uses a different communication model.  Similar to tab pages, extensions run in individual threads that are isolated from all tab page threads.  Tabs issue single GET requests to remote servers, and then renders the page.  However, extensions function similar to a remote server.  Installing extensions in your browser creates a standalone web server in the browser.  The extension is isolated from all tab pages.  
    
    ![Extensions use a different communication model](media/index-image3-upsidedown.png)  
    
## Extension architecture  

The following list outlines helpful information as it relates to the architecture of an extension.  

1.  The Extension web server bundle.  An extension is a bundle of web resources.  These web resources are similar to other resources that web developers publish to web servers.  Developers bundle these web resources into a zip file when building an extension.  
    
    The zip file includes HTML, CSS, JavaScript, and image files.  There is one additional file that is required in the root of the zip file.  This file is the manifest file, and is named `manifest.json`.  It is the blueprint of  your extension and includes the version of your extension, the title, permissions needed for the extension to run, and so on.
    
1.  Launching the extension server.  Web servers contain your web bundle.  Browsers navigate to URLs on the server, and download the file to render in the browser.  Browsers navigate using certificates, configuration files, and so on.  If an `index.html` file exists, it is stored at a special location on the web server.  
    
    When we use extensions, the tab page of your browser gets to the web bundle of your extension using the extension runtime.  The extension runtime serves the files from the URL `extension://{some-long-unique-identifier}/index.html`, where `{some-long-unique-identifier}` is a unique identifier assigned to the extension during installation.  Each extension uses a different unique identifier.  Each identifier points to the web bundle installed in your browser.  
    
1.  Extensions can communicate with tabs and the browser toolbar.  Extensions can interact with the toolbar of your browser.  Each extension manages running tab pages in separate threads, and DOM manipulation on each tab page is isolated.  Extensions use the extensions API to communicate between the extension and tab pages.  This extension API provides additional capabilities that include notification management, storage management, and so on.  
    
    Just like web servers, extensions wait on notifications when the browser is open.  Extensions and tab pages run in threads that are isolated from each other.  However, developers can use the extensions API, and permissions in the manifest file to allow an extension to work with any tab page.  
    
1.  Extensions provide opt-in permissions at install time.  Extension permissions are specified by the developer in the `manifest.json` file.  When installing extensions, users are presented with information on the permissions that the extension needs to run.  Based on the type of permission required, the extension may extract and use information from the browser.  
    
## Next steps

For information on getting started with extensions, navigate to [Create an extension tutorial][CreateAnExtensionPart1].  

<!-- links -->  

[CreateAnExtensionPart1]: ./part1-simple-extension.md "Create an extension tutorial - Part 1 | Microsoft Docs"  