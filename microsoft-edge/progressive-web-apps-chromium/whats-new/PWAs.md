---
description: PWA related New Features
title: What's new in Progressive Web Apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/02/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, pwas, pwa, progressive web apps
---
# What's New In Progressive Web Apps

[!INCLUDE [contact DevTools team note](includes/edge-whats-new-note.md)]

## What's New in Edge 93
Edge 93 became the beta channel of Microsoft Edge on August 3, 2021. This article lists updates we made to PWAs from both a developer and consumer point of view.

## Window Controls Overlay Origin Trials

Developers wanting to have more control over the title bar area currently displayed in standalone display mode may want to experiment with Window Controls Overlay. Window Controls Overlay (WCO) is a set of features that work together to provide just the essential controls needed for the app window and provide more of that area to the web content layer. WCO is available for installed desktop PWAs. 

Learn more about experimenting with [Window Controls Overlay at our experiments page][ExpWCO]. 

Register your origin for Window Controls Overlay trial at our [Origin Trials Developer console][WCOOT].

## URL Handlers Origin Trial

Developers can now use the experimental feature Web App URL Handlers in origin trial. This feature allows the registration of an installed PWA to open links from other apps that refer to its scope.

Learn more about experimenting with [URL handlers at our experiments page][ExpURLHandler].

Register your domain for URL handler trial at our [Origin Trials Developer console][URLHandlerOT].

## Support Share API on MacOS

We have implemented support for the `navigator.share` API for MacOS. The feature is rolling out to stable Edge browsers on MacOS over the coming weeks. 

Learn more about the [navigator.share() API][mdnShareAPI] 

## What's New in Edge 92
Edge 92 became the stable channel of Microsoft Edge on July 22, 2021. This article lists updates we made to PWAs from both a developer and consumer point of view.

## Protocol Handlers Origin Trial 

You can now register your PWA to handle specific protocols with the host operating system. The Windows trial for this is now available. You can register your origin for the trial at the [origin trial signup page][MicrosoftDeveloperMicrosoftEdgeOriginTrialsWebAppProtocolHandlerRegistrationRegistration].

Learn more about using protocol handlers with your PWA at our [experimental features page][ExpProtocolHandlers].

## Streamlined App Info Menus
The app info menu is what is shown when a user clicks the 3 dot settings menu in the apps title bar. We've updated this menu and streamlined the experience for the user by:
* bringing the app publisher information to the top level and making it the first thing a user sees
* moving the privacy information and controls into a dedicated 2nd level "Privacy" menu
* moving content related tools into a dedicated 2nd level "More tools" menu

This change brings the settings menu more in line with what users expect from a desktop app experience and less like browser UI. 

#### Updated App Info Menu
:::image type="complex" source="media/app-info.png" alt-text="Streamlined app info menu" lightbox="media/app-info.png":::
   Screen shot of the new streamlined app info menu
:::image-end:::

#### Dedicated Privacy Menu
:::image type="complex" source="media/privacy-menu.png" alt-text="Privacy controls found in the dedicated Privacy menu" lightbox="media/privacy-menu.png":::
   Privacy controls found in the dedicated Privacy menu
:::image-end:::

#### Dedicated More Tools Menu
:::image type="complex" source="media/more-tools.png" alt-text="Content related tools menu" lightbox="media/more-tools.png":::
   Content related tools now found in More tools menu
:::image-end:::

## Post Install Flyout
After a PWA is installed from the Edge browser on Windows, users will now be able to select from four options to easily launch their apps: 
* Pin to Start 
* Pin to taskbar 
* Create Desktop shortcut
* Auto-start on device login.

For convenience, this flyout is shown the first time the app is launched.

This feature is being rolled out gradually to all users. In the meantime, if you'd like to use this feature, navigate to `edge://flags` and enable the flag *Web Apps Post Install Dialog*.

#### Post install Flyout example
:::image type="complex" source="media/postInstallFlyout.png" alt-text="Users can select to pin, create shortcut or run on device login" lightbox="media/postInstallFlyout.png":::
   Screen shot of the post-install flyout dialog box
:::image-end:::

## Restore Web Apps
Installed sites and PWAs that were running prior to an unexpected shutdown will now restore (be restarted) when the system recovers. 

This can occur due to process failure, system restart, power outage etc. Prior to this change, installed sites and PWAs had indeterminant behavior upon system restore.  

<!-- links -->  

<!--[ArchiveMicrosoftEdgeLegacyDeveloperPWAsIndexRequirements]: /archive/microsoft-edge/legacy/developer/progressive-web-apps/index#requirements "Requirements - Progressive Web Apps \(EdgeHTML\) on Windows | Microsoft Docs"  -->  

[ExpWCO]: ../experimental-features/index.md#window-controls-overlay-for-installed-desktop-web-apps "Window Controls Overlay for installed desktop web apps - Experimental Features"

[ExpProtocolHandlers]: ../experimental-features/index.md#uri-protocol-handling "URI Protocol Handling - Experimental Features"

[ExpURLHandler]: ../experimental-features/index.md#url-link-handling "URL Link Handling - Experimental Features"

[MicrosoftDeveloperMicrosoftEdgeOriginTrials]: https://developer.microsoft.com/microsoft-edge/origin-trials "Origin Trials | Microsoft Edge Developer"

[MicrosoftDeveloperMicrosoftEdgeOriginTrialsWebAppProtocolHandlerRegistrationRegistration]: https://developer.microsoft.com/microsoft-edge/origin-trials/web-app-protocol-handler-registration/registration "Register for Web App Protocol Handler Registration | Microsoft Developer"  

[URLHandlerOT]: https://developer.microsoft.com/en-us/microsoft-edge/origin-trials/web-app-url-handlers/registration/ "Register for Web App URL Handler | Microsoft Developer" 

[WCOOT]: https://developer.microsoft.com/en-us/microsoft-edge/origin-trials/web-app-window-controls-overlay/registration/ "Register for Web App Window Controls Overlay"

[mdnShareAPI]: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share