---
title: Extension concepts and architecture
description: The architecture of Microsoft Edge extensions, and core concepts to build extensions.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: extensions
ms.date: 02/06/2022
---
# Extension concepts and architecture

This article introduces concepts about building a Microsoft Edge extension.  Follow along to understand how multi-tab browsers work.

A Microsoft Edge *extension* is a small app that users can opt into that adds or modifies features of Microsoft Edge to provide a specialized experience or function that is important to a target audience. For an introduction, see [Overview of Microsoft Edge extensions](../index.md).


<!-- ====================================================================== -->
## Understand how browsers work

The following list outlines helpful information to understand before building your extension.

#### Browser tabs are isolated threads

Each browser tab is isolated from every other tab.  Each tab runs in a separate thread that is isolated from other browser tabs and threads.

![One thread per browser tab](./index-images/index-image1-browsertabs.png)

#### Each tab handles one GET request

Each tab handles one GET request.  Each tab uses a URL to get a single stream of data, which is normally an HTML document.  That single stream or page, includes instructions like JavaScript include tags, image references, CSS references, and more.  All resources are downloaded to that one tab page, and then the page is rendered in the tab.

#### Communication occurs between each tab and a remote server

Communication occurs between each tab and a remote server.  Each tab runs in an isolated environment.  Each tab is still connected to the internet, but each is isolated from other tabs.  A tab can run JavaScript to communicate with a server.  The server is the originating server for the first GET request that was entered into the URL bar of the tab.

#### Communication model

The extension model uses a different communication model.  Similar to a tab page, an extension runs in an individual thread that is isolated from other tab page threads.  A tab sends single GET requests to remote servers, and then renders the page.  However, an extension works similar to a remote server.  Installing an extension in a browser creates a standalone web server in the browser.  The extension is isolated from all tab pages.

![Extensions use a different communication model](./index-images/index-image3-upsidedown.png)


<!-- ====================================================================== -->
## Extension architecture

The following list outlines helpful information as it relates to the architecture of an extension.

#### Extension web server bundle

An extension is a bundle of web resources.  The web resources are similar to other resources that you (the web developer) publish to web servers.  You bundle the web resources into a zip file when building an extension.

The zip file includes HTML, CSS, JavaScript, and image files.  One more file is required in the root of the zip file.  The other file is the manifest file that is named `manifest.json`.  The manifest file is the blueprint of your extension and includes the version of your extension, the title, permissions needed for the extension to run, and so on.

#### Launching the extension server

Web servers contain your web bundle.  A browser navigates to URLs on the server, and downloads the file to render in the browser.  A browser navigates using certificates, configuration files, and so on.  If an `index.html` file is specified, the file is stored at a special location on the web server.

When you use an extension, the tab page of your browser gets to the web bundle of your extension using the extension runtime.  The extension runtime serves the files from the URL `extension://{some-long-unique-identifier}/index.html`, where `{some-long-unique-identifier}` is a unique identifier assigned to the extension during installation.  Each extension uses a different unique identifier.  Each identifier points to the web bundle that is installed in your browser.

#### Communication with tabs and browser toolbar

An extension can communicate with tabs and the browser toolbar.  An extension can interact with the toolbar of your browser.  Each extension manages running tab pages in separate threads, and DOM manipulation on each tab page is isolated.  An extension uses the extensions API to communicate between the extension and tab pages.  The extensions API provides extra capabilities that include notification management, storage management, and so on.

Just like web servers, an extension waits for notifications when the browser is open.  An extension and tab pages run in threads that are isolated from each other.  To allow an extension to work with any tab page, use the extensions API and set the permissions in the manifest file.

#### Opt-in permissions at install time

An extension provides opt-in permissions at install time.  You specify the extension permissions in the `manifest.json` file.  When a user installs an extension, information about the permissions that the extension requires is displayed.  Based on the type of permission required, the extension can extract and use information from the browser.


<!-- ====================================================================== -->
## Next steps

For information on getting started with your extension, see [Create an extension tutorial, part 1](part1-simple-extension.md).
