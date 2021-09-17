---
description: This guide gives you an overview of the user experience of PWAs on Microsoft Edge and Windows.
title: The user experience of PWAs
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/15/2021
ms.topic: conceptual
ms.prod: microsoft-edge
keywords: progressive web apps, PWA, Edge, Windows, desktop, installation, integration, microsoft store, ux
---
# The user experience of PWAs  

On Windows, PWAs are first-class app citizens and any device running Microsoft Edge gets full access to the technologies and characteristics of Progressive Web Apps.  

## Installing a PWA  

When Microsoft Edge determines that a website is an installable PWA, the **App available** button is displayed in the address bar.  

Select the **App available** button to install the PWA.  

:::image type="complex" source="./media/edge-app-install-flyout.png" alt-text="The installation prompt in Microsoft Edge" lightbox="./media/edge-app-install-flyout.png":::
   The installation prompt in Microsoft Edge  
:::image-end:::  

Select **Install** to complete the installation and run the PWA in Windows.  

Many PWAs are also present on the Microsoft Store and can be installed directly from there without even opening Microsoft Edge.  

To install a PWA from the Microsoft Store, select **Get** on the app page.  

:::image type="complex" source="./media/install-twitter-microsoft-store.png" alt-text="Installing an app from the Microsoft Store" lightbox="./media/install-twitter-microsoft-store.png":::
   Installing an app from the Microsoft Store  
:::image-end:::  

## Managing PWAs  

You can find the list of installed PWAs in Microsoft Edge by navigating to `edge://apps`.  

:::image type="complex" source="./media/edge-apps-listing.png" alt-text="The list of installed apps in edge://apps" lightbox="./media/edge-apps-listing.png":::
   The list of installed apps in `edge://apps`  
:::image-end:::  

On this page, you can select any app to launch it, or select the delete icon \(![Uninstall app](./media/uninstall-app-button.png)\) to uninstall it.  

Since PWAs are deeply integrated in Windows, they show up anywhere other types of Windows apps get displayed, including in the **Apps & features** system setting.  

:::image type="complex" source="./media/pwa-in-apps-and-features-settings.png" alt-text="The list of installed apps on Windows also display PWAs" lightbox="./media/pwa-in-apps-and-features-settings.png":::
   The list of installed apps on Windows also display PWAs  
:::image-end:::  

## Windows integration  

PWAs are displayed like native apps on Windows. They appear in the Taskbar (where they can be pinned), in the Start Menu, or when switching between apps with `Alt`+`Tab`.  

:::image type="complex" source="./media/windows-start-menu.png" alt-text="PWAs and native apps side by side in the Taskbar and Start Menu" lightbox="./media/windows-start-menu.png":::
   PWAs and native apps side by side in the Taskbar and Start Menu  
:::image-end:::  

PWAs can also expose common tasks to users as shortcuts in the Windows Taskbar contextual menu. To learn about how to define shortcuts in your PWA, navigate to [Define app shortcuts][AppShortcutsFeature].  

:::image type="complex" source="./media/pwa-shortcuts-in-taskbar.png" alt-text="Common tasks are listed in the Taskbar contextual menu" lightbox="./media/pwa-shortcuts-in-taskbar.png":::
   Common tasks are listed in the Taskbar contextual menu  
:::image-end:::  

PWAs can also display notifications in the operating system's own notification service. This helps users re-engage with your app. Navigate to [Re-engage users with notifications and push messages][PushNotficationsFeature] to learn more.  

:::image type="complex" source="./media/windows-action-center.png" alt-text="Notifications in Windows Action Center" lightbox="./media/windows-action-center.png":::
   Notifications in Windows Action Center  
:::image-end:::  


[AppShortcutsFeature]: ./how-to/shortcuts.md "Define app shortcuts | Microsoft Docs"  
[PushNotficationsFeature]: ./how-to/push-notifications.md "Re-engage users with notifications and push messages | Microsoft Docs"  
