---
description: Get an end to end overview of the journey from beginning development to packaging of Microsoft Edge extensions.
title: Extensions - Getting started
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer, extensions
ms.date: 03/16/2021
ROBOTS: NOINDEX,NOFOLLOW
---
# Getting started with extensions  

[!INCLUDE [deprecation-note](includes/deprecation-note.md)]  

Whether you're a new developer wanting to familiarize yourself with extensions or a seasoned veteran with a Chrome extension you'd like to port, this guide contains all the information you need to develop, test, package, and publish an extension for Microsoft Edge. 

## Developing an extension

The first step of this journey is to create a Microsoft Edge extension: 
- New to extensions? Check out our [guide on how to create extensions](./guides/creating-an-extension.md) for information on how to build your first browser extension! 
- Already familiar with extension APIs? Check out our [API support documentation](./api-support.md) for the latest info on which APIs are supported/in development. 
- Have a Chrome extension that you want to port to Microsoft Edge? Try the [Microsoft Edge Extension Toolkit](./guides/porting-chrome-extensions.md)!

## Loading and debugging

Once you have an extension that works in Microsoft Edge, you'll want to side load it to see it in action. The first step to do this is to ensure that you have [extension developer features enabled](./guides/adding-and-removing-extensions.md). This will allow you to side load extension files in Microsoft Edge so that you can test your extension while developing it. Should you run into any issues, the F12 developer tools allow you to [debug the various contexts of your extension](./guides/debugging-extensions.md) to determine exactly what's going on. Still running into issues? Our [troubleshooting guide](./troubleshooting.md) has solutions to several common gotchas. 

## Reporting bugs and getting help

Think you've found a bug in our extensions platform? If the issue is specific to Microsoft Edge, please search for it on our [Microsoft Edge Issue Tracker](https://developer.microsoft.com/microsoft-edge/platform/issues/) to see if it's already been reported. If it has, great! You can press the "+ Me too" button to upvote the bug and the "Watch this issue for updates" button to be alerted to any changes on the issue. If you can't find the issue you're running into, feel free to open a new issue and provide as much information as possible so our developers can look into it. 

<!--Are we missing an API that your extension needs to work properly? If so, [we're always listening on UserVoice](https://wpdev.uservoice.com/forums/257854-microsoft-edge-developer/category/87962-extensions). Feel free to upvote your API if it already exists, or to create a new feedback item so that other developers can upvote it too! -->  

Do you have a question that you can't find an answer to in the documentation? We strongly recommend you join the [Microsoft Edge Extensions community](https://stackoverflow.com/questions/tagged/microsoft-edge-extension) on Stack Overflow and ask it there!

## Testing your extension

As of the Windows Anniversary Update, [Microsoft WebDriver](../webdriver/index.md) supports the automated side loading of extensions in Microsoft Edge sessions. This will allow you to write simple tests to ensure that any extension that is meant to modify a page does so in the expected manner. You can find more info on how to do this in our [testing guide](./guides/packaging/creating-and-testing-extension-packages.md#automated-testing-with-webdriver). Also, stay tuned for updates as we plan to add more extension-specific features to Microsoft WebDriver in the future.

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

Since our extensions platform is still in its infancy, we're purposely managing extension submissions to the Microsoft Store so that we can focus on delivering a quality experience for our users and developers. That being said, we want to make it as easy as possible for developers to publish their extensions. As a result, we have recently launched a new [extension submission form](https://aka.ms/extension-request) where developers can request permission to submit their extension AppX to the Microsoft Store.
 
The first step of the publishing process is to make sure your extension conforms to our **browser extension policy** as well as the [Microsoft Edge extensions section of the Microsoft Store Policies](https://msdn.microsoft.com/library/windows/apps/dn764944.aspx#pol_10_12).  

<!--  The first step of the publishing process is to make sure your extension conforms to our [browser extension policy](./microsoft-browser-extension-policy.md) as well as the [Microsoft Edge extensions section of the Microsoft Store Policies](https://msdn.microsoft.com/library/windows/apps/dn764944.aspx#pol_10_12).  -->  

Once you've confirmed that your extension follows the policies, you will need to register for a [developer account in Partner Center and reserve the name of your extension](./guides/packaging/extensions-in-the-windows-dev-center.md). Then, you'll need to submit a request via our [extension submission form](https://aka.ms/extension-request) in order to request permission to publish to the Microsoft Store. If you try to submit your extension AppX without first obtaining permission, you'll receive the following error:

```text
Package acceptance validation error: com.microsoft.edge.extension is a reserved extension type. Your app does not have permission to use this extension type.
```  

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
