---
ms.assetid: 8e2f75c4-fb7f-4892-a6c2-23bac081581a
description: Find out about the enterprise specific aspects of Microsoft Edge Extensions, and see how they're similar to UWP apps.
title: Extensions for enterprise
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
ms.custom: seodec18
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# Extensions for Enterprise  

[!INCLUDE [deprecation-note](includes/deprecation-note.md)]  

Microsoft Edge extensions have a similar workflow when compared to other enterprise UWP apps. The information below details enterprise specific aspects of Microsoft Edge extensions.

## Prerequisites
The following items are suggested to develop, package, and deploy a Microsoft Edge extension for enterprise:

+ Windows Developer Portal account, to sign and release the extension to the enterprise private store. See [Opening a developer account](/windows/uwp/publish/opening-a-developer-account) for more details.
+ Microsoft Store for Business or Education, to distribute the application to the enterprise. See the [Microsoft Store for Business and Education documentation](/microsoft-store/) for more details.
+ Identify which versions of Windows 10 will be running the Microsoft Edge extension. See [Windows 10 release information](https://www.microsoft.com/itpro/windows-10/release-information) for a listing of existing Windows 10 releases.

> [!NOTE]
> Sideloading can be considered an alternative to using the Windows Developer Portal to sign the release the extension. See the behaviour of sideloading extensions below for more details.

## Windows Information Protection
Microsoft Edge extensions currently don't honor Windows Information Protection (WIP) settings. If an enterprise is concerned about data protection, extensions support should not be enabled for Microsoft Edge.

To disable extensions for employees, configure Group Policy and Microsoft Intune settings. For more info on which policies to configure, see [Available policies for Microsoft Edge](https://technet.microsoft.com/itpro/microsoft-edge/available-policies).

## Packaging Extensions
Before an enterprise can distribute an extension to its employees, it must first be packaged. Instructions on packaging extensions are available in the [Packaging](./guides/packaging.md) guide.

> [!TIP]
> Be sure to test installing and running your extension on all the versions of Windows 10 to ensure it will work as expected before distributing.

## Distributing Extensions
Once an extension has been packaged, it can be distributed to employees through the Microsoft Store, Microsoft Store for Business, or by sideloading.

Extensions distributed though the Microsoft Store for Business can either be assigned to employees, or added to a private store where all employees can access them. This can be done by following the [Distribute "Line-of-Business" (LOB) apps to enterprises](https://msdn.microsoft.com/windows/uwp/publish/distribute-lob-apps-to-enterprises) guide.

To sideload extensions, devices (unmanaged or managed) must be unlocked for sideloading. See [Sideload LOB apps in Windows 10](https://technet.microsoft.com/itpro/windows/deploy/sideload-apps-in-windows-10) for more info on how to sideload packaged extensions.

> [!IMPORTANT]
> If the enterprise is both developing and distributing the extension internally, the enterprise will require both the Microsoft Store for Business (or Education) and a Windows Developer Portal account.

### Behavior of Sideloaded Extensions
Unlike extensions distributed through the Microsoft Store (or the Microsoft Store for Business), sideloaded extensions are treated differently in Microsoft Edge.

The first difference affects how sideloaded extensions behave after installation. Unlike extensions from the Microsoft Store, sideloaded extensions do not immediately display the "You have a new extension" notification and need to be manually turned on by the user.

To turn on the extension, open the **More (...)** menu, select **"Extensions"** and you should see the sideloaded extension in the list of installed extensions. Click on the extension and turn it on.

The second difference affects how sideloaded extensions appear in the browser. For example, both the "You have a new extension" notification and the list of installed extensions include an additional warning stating that the extension is from an unknown source.

![sideload warning 1](./media/sideload-permissionflyout.PNG)

![sideload warning 2](./media/sideload-l1warning.PNG)

The third and final difference affects how sideloaded extensions behave on browser startup. Sideloaded extensions on devices that are either domain-joined or MDM enabled will behave like extensions from the Microsoft Store. However, sideloaded extensions on devices that are not domain-joined or MDM enabled will be turned off during browser startup and require the user to take explicit action.

Shortly after browser startup (after ~10 seconds of inactivity) the following notification will appear near the bottom of the window.

![sideload notification](./media/sideload-scareUI.PNG)

Each time Microsoft Edge is launched, users will need to select "Turn on anyway" in order to use the extension.
