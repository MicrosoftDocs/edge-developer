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

This is really important to understand. Once you create an extension, and install it in your browser, you've created a standalone web server that is living and breathing inside of your browser but still isolated from every tab page running on that browser.

### The Extension web server bundle

So what is an extension? I'm sure you've used extensions developed by other authors and you've likely done that by going to an extension web store and installing that extension "in" your browser.  What did you get when you installed the extension? You got a bundle (OK, let's just call a zip file) of web resources that are no different than what a web developer would publish to a web server.  T

That zip file included HTML, CSS, JavaScript, Images and all the necessary assets to make a web page. There is however, one extra file that is required in the root of this zip file, and that file is named `manifest.json`.  More later on that, but suffice it to say, it's the blue print of your extension that includes things like what what's the version of your extension, what's the title, what priviliges does it need to run and lots more.

PICTURE 3

### Launching the Extension server

We know that when we deploy to a web server, that web server, whether it's Apache, IIS, NGINX or any other, that put our web bundle at some location and through certificates, configuration file and more, somehow, when a client browser navigates to some URL, typically, the index.html file that is on the web server at that special locations is downloaded with the browsers GET request.  How does our Extension do the same thing? That is, how can the tab pages of our browser get to this zip file (our extension that is), that's installed on this browser? 

The extension serves it's files all from the URL (remember, uniform resource locator) at the name `chrome-extension://{some-long-unique-identifier}/index.html`. the name I put in brackets, some-long-unique-identifier is a unique identifier assigned to the extension that you installed.  That means, if you have 10 unique Extensions installed on your browser, each will have it's on unique identifier that points at the zip file (or Extension bundle) installed inside your browser.

PICTURE 4

### Extensions are a lot more than browsers built in web server

The fact that an Extension is a bundle of files that run as a built in web server is the core of an extension but just the beginning of what extensions can do. Extensions can interact with the browsers toolbar, they can manage all the other running tab pages in safe and sane way, as well as manipulating the DOM of all those tab pages.  Built into the Chromium browser as a message API that allows for communications between the extensions and the tab pages to allow this to happen gracefully. This API, also known as the extensions API gives a lots of capabilities including notification management, storage management and much more.

Each extension, through a declaration in the `manifest.json` file allows the person installing the extension to give the extension differnet levels of authority. This authority allows extensions to opt-in so that the extension can literally extract any information, hidden or not on a tab, and process through the extension making sucurity considerations very important.

Just like web servers, Extensions can continually run (or sleep waiting for notications) all the time that the browser is running.  You can think of an extension as an orchestrator for the browser.  Again, the extension itself runs completely isolated from the tab pages, but through the extensions API, and opt-in permissions granted to the extension, can virtually control any and all tab pages running in the browser.








## Developing an extension

The first step of this journey is to create a Microsoft Edge extension: 
- New to extensions? Check out our [guide on how to create extensions](./guides/creating-an-extension.md) for information on how to build your first browser extension! 
- Already familiar with extension APIs? Check out our [API support documentation](./api-support.md) for the latest info on which APIs are supported/in development. 
- Have a Chrome extension that you want to port to Microsoft Edge? Try the [Microsoft Edge Extension Toolkit](./guides/porting-chrome-extensions.md)!

## Loading and debugging

Once you have an extension that works in Microsoft Edge, you'll want to side load it to see it in action. The first step to do this is to ensure that you have [extension developer features enabled](./guides/adding-and-removing-extensions.md). This will allow you to side load extension files in Microsoft Edge so that you can test your extension while developing it. Should you run into any issues, the F12 developer tools allow you to [debug the various contexts of your extension](./guides/debugging-extensions.md) to determine exactly what's going on. Still running into issues? Our [troubleshooting guide](./troubleshooting.md) has solutions to several common gotchas. 

## Reporting bugs and getting help

Think you've found a bug in our extensions platform? If the issue is specific to Microsoft Edge, please search for it on our [Microsoft Edge Issue Tracker](https://developer.microsoft.com/microsoft-edge/platform/issues/) to see if it's already been reported. If it has, great! You can press the "+ Me too" button to upvote the bug and the "Watch this issue for updates" button to be alerted to any changes on the issue. If you can't find the issue you're running into, feel free to open a new issue and provide as much information as possible so our developers can look into it. 

Are we missing an API that your extension needs to work properly? If so, [we're always listening on UserVoice](https://wpdev.uservoice.com/forums/257854-microsoft-edge-developer/category/87962-extensions). Feel free to upvote your API if it already exists, or to create a new feedback item so that other developers can upvote it too! 

Do you have a question that you can't find an answer to in the documentation? We strongly recommend you join the [Microsoft Edge Extensions community](https://stackoverflow.com/questions/tagged/microsoft-edge-extension) on Stack Overflow and ask it there!

## Testing your extension

As of the Windows Anniversary Update, [Microsoft WebDriver](../dev-guide/tools/webdriver.md) supports the automated side loading of extensions in Microsoft Edge sessions. This will allow you to write simple tests to ensure that any extension that is meant to modify a page does so in the expected manner. You can find more info on how to do this in our [testing guide](./guides/packaging/creating-and-testing-extension-packages.md#automated-testing-with-webdriver). Also, stay tuned for updates as we plan to add more extension-specific features to Microsoft WebDriver in the future.

## Adding the final touches

So your extension works in Microsoft Edge. What happens next? Before you continue packaging your extension, we strongly recommend you to check out these guides to ensure that your extension is following our best-practice policies: 
- Make sure your extension icons are [correctly sized](./guides/design.md) and [accessible](./guides/accessibility.md) (meaning they're visible in both light and dark themes of Microsoft Edge as well as in high contrast mode). 
- If your extension needs to support multiple languages, please make sure you've taken a look over our [internationalization guide](./guides/internationalization.md). 

## Packaging an extension

Now your extension is finally polished up and ready to be packaged. Whether you wish to package it to prepare for submission to the Microsoft Store, or to make it easier to distribute within your development/testing teams, there are plenty of resources available to help you: 

- Our recommended solution for creating an extension package is to follow our [ManifoldJS packaging guide](./guides/packaging/using-manifoldjs-to-package-extensions.md) which will walk you through the steps of using a Node.js based tool to easily package your extension no matter what platform you develop on. If you want a more manual and in-depth look into our extension packaging format, please refer to our [AppX package creation guide](./guides/packaging/creating-and-testing-extension-packages.md#preparing-the-submission-folder). 
- If your extension supports multiple languages, you'll also need to follow our guide on [localizing extension packages](./guides/packaging/localizing-extension-packages.md) so that the languages you have in your extension are correctly registered after packaging. 

If you're an enterprise customer looking to distribute your packaged extensions via internal channels, please see our [extensions for enterprise guide](./extensions-for-enterprise.md) to see how to do this.  

## Publishing to the Microsoft Store

Since our extensions platform is still in its infancy, we're purposely managing extension submissions to the Microsoft Store so that we can focus on delivering a quality experience for our users and developers. That being said, we want to make it as easy as possible for developers to publish their extensions. As a result, we have recently launched a new [extension submission form](http://aka.ms/extension-request) where developers can request permission to submit their extension AppX to the Microsoft Store.
 

The first step of the publishing process is to make sure your extension conforms to our [browser extension policy](./microsoft-browser-extension-policy.md) as well as the [Microsoft Edge extensions section of the Microsoft Store Policies](https://msdn.microsoft.com/library/windows/apps/dn764944.aspx#pol_10_12). 

Once you've confirmed that your extension follows the policies, you will need to register for a [developer account in Partner Center and reserve the name of your extension](./guides/packaging/extensions-in-the-windows-dev-center.md). Then, you'll need to submit a request via our [extension submission form](http://aka.ms/extension-request) in order to request permission to publish to the Microsoft Store. If you try to submit your extension AppX without first obtaining permission, you'll receive the following error:

`Package acceptance validation error: com.microsoft.edge.extension is a reserved extension type. Your app does not have permission to use this extension type.`

Once you've submitted a request, we'll receive a notification and will try to get to your submission as soon as possible. This may take a bit due to the high volume of submissions we've received, but we'll notify you via email the moment you're approved! Once you've received the mail, you'll be able to submit your extension AppX to the Microsoft Store via Partner Center. Please note that you do not have to sign your AppX before submitting it; the Microsoft Store ingestion process will take care of that for you!
 
> [!NOTE]
> The process for publishing an extension to the Microsoft Store (whether it's a brand new extension or an update to an existing one) can take up to 72 hours to complete. In order to expedite this process, please ensure you have verified these common gotchas before submitting to avoid having to resubmit later: 
> - Your screenshots are correctly sized and are of your extension running in Microsoft Edge 
> - Your extension description references "Microsoft Edge" instead of "Edge" (this is a legal requirement) 
> - Your 150x150 icon in your extension package [does not have a transparent background](./guides/design.md#microsoft-store-icon) (The Microsoft Store client does not correctly render images with transparent backgrounds) 

In addition to the above, and if applicable, please ensure that any platform availability information on your website correctly mentions your extension's availability on Microsoft Edge. While the Microsoft Store does not allow for one-click inline extension installs, you can [deep-link to your extension in the Microsoft Store](./tips-and-tricks.md#get-a-direct-link-to-your-extension-in-the-microsoft-store) to make it easy for users to acquire it. 

The Microsoft Store also allows you to [control the visibility of your extension](https://blogs.windows.com/buildingapps/2015/09/10/managing-hidden-apps-beta-apps-and-visibility-of-in-app-purchases-in-dev-center/) in the Microsoft Store catalog. Some of our partners have taken advantage of this functionality to achieve the following: 
- Publishing a second beta version of their extension as hidden in the Microsoft Store.
- Initially publishing their extension as hidden to monitor initial telemetry before eventually changing its status to visible once a certain level of confidence is reached.

## That's it!

If you've reached the bottom of this guide, you've completed the process of developing an extension for Microsoft Edge! Be sure to check out our [tips and tricks](./tips-and-tricks.md) page for ideas on how to market your extension and interact with your users.
