---
description: This guide gives you an overview of the benefits of using PWA to build desktop applications.
title: Desktop Progressive Web Apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/02/2021
ms.topic: conceptual
ms.prod: microsoft-edge
keywords: progressive web apps, PWA, Edge, Windows, desktop, PWABuilder
---
# Desktop Progressive Web Apps  

PWAs are not only a way for websites to appear on mobile home screens. They are based on standard, cross-browser, web technologies that allow them to be installed and to run everywhere.  

While most consumers have migrated to mobile-first (or mobile-only) ways of consuming content, businesses still mostly operate only on desktop.  
Building your desktop app as a PWA allows you make use of all the benefits that PWAs come with while targeting those users.  

> [!NOTE]
> This page focuses on the characteristics and advantages of PWAs on desktop devices. For more information about general PWA benefits, navigate to [Progressive Web Apps overview][PwaOverview].  

With many new web capabilities as well as new features in Microsoft Edge and Windows, there are great opportunities to build immersive experiences that deeply integrate with the desktop operating system, and look and feel native, while only using technologies that will work in other browsers, operating systems and devices.  

Depending on your requirements, you might not have to build your app with native technologies at all as the web has grown capabilities to easily deal with file systems, video, audio, high-performing code, databases, USB, bluetooth, and more.  

With a shared codebase between your website, mobile app and desktop app (across operating systems), you cut down on development cost.

Your app can also be published on the [Microsoft Store][PwaMicrosoftStore], making it more familiar and trustworthy for Windows users to discover and install.  

## Installation experience and Windows integration  

In Windows, PWAs are first-class app citizens and any device running Microsoft Edge gets full access to the technologies and characteristics of Progressive Web Apps.  

### Installing a PWA  

When Microsoft Edge determines that a website is a PWA and is therefore installable, the **App available** button is displayed in the address bar.

:::image type="complex" source="./media/edge-app-available-button.png" alt-text="The App available button in Microsoft Edge address bar" lightbox="./media/edge-app-available-button.png":::
   The **App available** button in Microsoft Edge address bar  
:::image-end:::  

Select the **App available** to install the PWA on Windows.

:::image type="complex" source="./media/edge-app-install-flyout.png" alt-text="The installation prompt in Microsoft Edge" lightbox="./media/edge-app-install-flyout.png":::
   The installation prompt in Microsoft Edge  
:::image-end:::  

Select **Install** to complete the installation and run the PWA in Windows.  

Many PWAs are also present on the Microsoft Store and can be installed directly from there without even opening Microsoft Edge.  

To install a PWA from the Microsoft Store, select **Get** on the app page.  

:::image type="complex" source="./media/install-twitter-microsoft-store.png" alt-text="Installing an app from the Microsoft Store" lightbox="./media/install-twitter-microsoft-store.png":::
   Installing an app from the Microsoft Store  
:::image-end:::  

### Managing PWAs  

You can see the list of installed PWAs in Microsoft Edge by navigating to `edge://apps`.  

:::image type="complex" source="./media/edge-apps-listing.png" alt-text="The list of installed apps in edge://apps" lightbox="./media/edge-apps-listing.png":::
   The list of installed apps in `edge://apps`  
:::image-end:::  

On this page, you can select any app to launch it, or select the delete icon \(![Uninstall app](./media/uninstall-app-button.png)\) to uninstall it.  

Since PWAs are deeply integrated in Windows, they show up anywhere other types of Windows apps get displayed, including in the **Apps & features** system setting.  

:::image type="complex" source="./media/pwa-in-apps-and-features-settings.png" alt-text="The list of installed apps in edge://apps" lightbox="./media/pwa-in-apps-and-features-settings.png":::
   The list of installed apps in `edge://apps`  
:::image-end:::  

### Windows integration  

Like other native apps in Windows, installed PWAs get displayed in a variety of places.  

:::row:::
   :::column span="1":::
      Task bar 
   :::column-end:::
   :::column span="2":::
      
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      Start menu
   :::column-end:::
   :::column span="2":::
       
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      Alt+tab  
   :::column-end:::
   :::column span="2":::
       
   :::column-end:::
:::row-end:::  


Shortcuts

Notification

## Web capabilities bridging the gap to native  

A few examples of impressive APIs that compete with native, that people might not have thought about. 

* Push notifications
* Periodic sync
* Media: access to bluethooth, USB
* Intensive WebGL content
* Native performance with WebAssembly

## The Microsoft Store  

Because PWAs can be a first-class citizen in the Microsoft Store, a user will be able to engage fully with an installed PWA—from discovery, to installation, to execution—without ever opening the browser.

Pitch about why this is great for distributing PWAs.

Discoverability (people naturally look there), Trustworthiness, Easy install, App analytics thanks to the store.
The Microsoft Store is now one of the most used apps on PCs  

<!-- Links -->

[PwaOverview]: ./index.md "Progressive Web Apps overview | Microsoft Docs"  
[PwaMicrosoftStore]: ./microsoft-store.md "Publish your Progressive Web App to the Microsoft Store | Microsoft Docs"  
