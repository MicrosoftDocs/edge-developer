---
description: This guide gives you an overview of the benefits of using PWA to build desktop applications.
title: Progressive Web Apps on desktop
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/13/2021
ms.topic: conceptual
ms.prod: microsoft-edge
keywords: progressive web apps, PWA, Edge, Windows, desktop, installation, integration, microsoft store
---
# Progressive Web Apps   on desktop

> [!NOTE]
> This page focuses on the characteristics and advantages of PWAs on desktop devices. For more information about general PWA benefits, navigate to [The anatomy of a PWA][PwaAnatomy].  

PWAs aren't only a way for websites to appear on mobile home screens. They're based on standard, cross-browser, web technologies that allow them to be installed and to run everywhere.  

While most consumers have migrated to mobile-first ways of consuming content, businesses still mostly operate on desktop.  
Building your desktop app as a PWA allows you to make use of all the benefits that PWAs come with while targeting those users.  

With many new web capabilities and new features in Microsoft Edge and Windows, there are great opportunities to build immersive experiences that deeply integrate with the desktop operating system and feel native. Only using web technologies also ensures that your app will work in other browsers, operating systems and devices.  

You might not have to use native technologies at all as the web has grown capabilities to deal with file systems, video, audio, high-performing code, databases, USB, Bluetooth, and more.  

With a shared codebase between your website, mobile app and desktop app (across operating systems), you cut down on development cost.

Your app can also be published on the [Microsoft Store][PwaMicrosoftStore], making it more familiar and trustworthy for Windows users to discover and install.  

## Installation experience    

In Windows, PWAs are first-class app citizens and any device running Microsoft Edge gets full access to the technologies and characteristics of Progressive Web Apps.  

### Installing a PWA  

When Microsoft Edge determines that a website is an installable PWA, the **App available** button is displayed in the address bar.  

:::image type="complex" source="../media/edge-app-available-button.png" alt-text="The App available button in Microsoft Edge address bar" lightbox="../media/edge-app-available-button.png":::
   The **App available** button in Microsoft Edge address bar  
:::image-end:::  

Select the **App available** to install the PWA on Windows.

:::image type="complex" source="../media/edge-app-install-flyout.png" alt-text="The installation prompt in Microsoft Edge" lightbox="../media/edge-app-install-flyout.png":::
   The installation prompt in Microsoft Edge  
:::image-end:::  

Select **Install** to complete the installation and run the PWA in Windows.  

Many PWAs are also present on the Microsoft Store and can be installed directly from there without even opening Microsoft Edge.  

To install a PWA from the Microsoft Store, select **Get** on the app page.  

:::image type="complex" source="../media/install-twitter-microsoft-store.png" alt-text="Installing an app from the Microsoft Store" lightbox="../media/install-twitter-microsoft-store.png":::
   Installing an app from the Microsoft Store  
:::image-end:::  

### Managing PWAs  

You can see the list of installed PWAs in Microsoft Edge by navigating to `edge://apps`.  

:::image type="complex" source="../media/edge-apps-listing.png" alt-text="The list of installed apps in edge://apps" lightbox="../media/edge-apps-listing.png":::
   The list of installed apps in `edge://apps`  
:::image-end:::  

On this page, you can select any app to launch it, or select the delete icon \(![Uninstall app](../media/uninstall-app-button.png)\) to uninstall it.  

Since PWAs are deeply integrated in Windows, they show up anywhere other types of Windows apps get displayed, including in the **Apps & features** system setting.  

:::image type="complex" source="../media/pwa-in-apps-and-features-settings.png" alt-text="The list of installed apps on Windows also display PWAs" lightbox="../media/pwa-in-apps-and-features-settings.png":::
   The list of installed apps on Windows also display PWAs  
:::image-end:::  

## Windows integration  

PWAs are displayed like native apps on Windows. They appear in the Taskbar (where they can be pinned), in the Start Menu, or when switching between apps with `Alt`+`Tab`.  

:::image type="complex" source="../media/windows-start-menu.png" alt-text="PWAs and native apps side by side in the Taskbar and Start Menu" lightbox="../media/windows-start-menu.png":::
   PWAs and native apps side by side in the Taskbar and Start Menu  
:::image-end:::  

PWAs can also expose common tasks to users as shortcuts in the Windows Taskbar contextual menu. To learn about how to define shortcuts in your PWA, navigate to [Define app shortcuts][AppShortcutsFeature].  

:::image type="complex" source="../media/pwa-shortcuts-in-taskbar.png" alt-text="Common tasks are listed in the Taskbar contextual menu" lightbox="../media/pwa-shortcuts-in-taskbar.png":::
   Common tasks are listed in the Taskbar contextual menu  
:::image-end:::  

PWAs can also display notifications in the operating system's own notification service. This helps make PWAs better integrated in Windows and makes it easy for users to easily re-engage with your app, especially when coupled with Push messages. Navigate to [Re-engage users with notifications and push messages][PushNotficationsFeature] to learn more.  

:::image type="complex" source="../media/windows-action-center.png" alt-text="Notifications in Windows Action Center" lightbox="../media/windows-action-center.png":::
   Notifications in Windows Action Center  
:::image-end:::  

## Bridging the gap to native  

There are many new web capabilities built-in to Microsoft Edge that can make your app look and feel more native on Desktop and offer your users with engaging experiences.  

With you PWAs, you can:

*   Handle files.  
*   Share content with other apps.  
*   Access the clipboard.  
*   Data sync and fetch work in the background.  
*   Access device hardware such as Bluetooth and USB.  
*   Store content in databases.  
*   Take advantage of hardware accelerated graphics.  
*   Use CSS layouts, animations, and filters to achieve a desktop look.  
*   Run near-native performance code with WebAssembly.  

There isn't much you can't do today with Web technologies, and thanks to Microsoft Edge, PWAs on desktop can take full advantage of this to bridge the gap to what users expect native apps to be capable of.

Navigate to [Myth Busting PWAs][Davrous20191018MythBustingPwasNewEdgeEdition] for more information about what PWAs can do.  

## The Microsoft Store  

Because PWAs are first-class citizens in the Microsoft Store, users can fully engage with them, from discovery, to installation, to execution, without ever opening the browser.  

As the most used app on PCs, the Microsoft Store provides a trustworthy and familiar experience for your users to install your app. Additionally, it provides you with analytics.  


<!-- Links -->

[PwaAnatomy]: ./pwa-anatomy.md "The anatomy of a PWA | Microsoft Docs"  
[PwaMicrosoftStore]: ./microsoft-store.md "Publish your Progressive Web App to the Microsoft Store | Microsoft Docs"  
[AppShortcutsFeature]: ../developer-guide/shortcuts.md "Define app shortcuts | Microsoft Docs"  
[PushNotficationsFeature]: ../developer-guide/push-notifications.md "Re-engage users with notifications and push messages | Microsoft Docs"  
[Davrous20191018MythBustingPwasNewEdgeEdition]: https://www.davrous.com/2019/10/18/myth-busting-pwas-the-new-edge-edition "Myth Busting PWAs – The New Edge Edition"  
