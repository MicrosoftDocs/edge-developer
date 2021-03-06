---
description: The latest experimental features in Microsoft Edge for Web Apps
title: Experimental features
author: MSEdgeTeam
ms.author: msedgedevex
ms.date: 03/02/2021 
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, experiment, progressive web apps, web apps, PWAs, PWA
---
# Experimental features  

Microsoft Edge provide access to experimental features that are still in development.  You may test and [provide feedback](#providing-feedback-on-experimental-features) on these features to help us determine when and if to release them.  

While experimental features are available in all channels of Microsoft Edge, you will get the latest experimental features using the Microsoft Edge Canary channel.  

## Turn on experimental features  

To turn on \(or off\) experimental features in Microsoft Edge, complete the following steps.  

  
1.  Open the Microsoft Edge flags page by navigating to `edge://flags` using the address bar. Make sure you are using a version of Microsoft Edge that has the relevant feature flag listed in this article (see [Experimental features](#experimental-features)).

1.  Find the relevant experimental flag on the page and change it's status to `Enabled`. Each experiment will usually have it's own flag to toggle on or off.

1.  Close and restart Microsoft Edge  

:::image type="complex" source="../media/enable_flag.png" alt-text="Changing an experimental flag status" lightbox="../media/enable_flag.png":::
   Changing an experimental flag status  
:::image-end:::

If an experimental feature doesn't have an edge://flag entry, instructions will be provided on how to use the command line to start Microsoft Edge with that feature specifically enabled.
    
> [!NOTE]
> Experimental features are constantly being updated and may cause performance issues.  To turn off an experimental feature, open the **edge://flags** page and change the status of the feature to `Disabled`.  

## Experimental features  

The following sections describe the new experimental web app features that are available for testing and validation on Microsoft Edge.  

| Experimental feature | Microsoft Edge version | Platform 
|:--- |:--- | :--- 
| [URL Protocol Handling](#url-protocol-handling) | 85 or later | All 
| [URL Link Handling](#URL-link-handling) | 85 or later | Windows  
| [Window Controls Overlay](#window-controls-overlay) | 86 or later | Windows 
| [Place holder](#place-holder) | 87 or later | All |
| [Place holder](#place-holder) | 87 or later | All |
| [Place holder](#place-holder) | 87 or later | All |

### URL Protocol Handling  

URLs can be used to define more than just links to web pages and web content using the HTTP or FTP protocol - they can be used to describe links to anything you can codify into a schema. For example, the mailto:// protocol is used to desicribe an email and the operating system can decide which application should handle that protocol. You can learn more about existing browser based support for [web based protocol handling here](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/registerProtocolHandler/Web-based_protocol_handlers). 

This feature allows you to register a PWA with the host operating system via the web app manifest, declaring that it can handle a specific URL protocol. After registering a PWA as a protocol handler, when a user clicks on a hyperlink with a specific scheme like `mailto://`, `ms-word://` or `web+music://` from a browser or a native app, the registered PWA would be activated by the operating system and receive the URL.

This feature requires you to update the web app manifest to include a `protocol_handlers` array, within the array you need to specify two fields:

*   `protocol`: Protocol to be handled e.g. `mailto`, `web+jngl`
*   `url`: HTTPS URL within the application scope that will handle the protocol. The %s token will be replaced by the URL starting with the protcol handlers scheme.

#### Example Manifest

IN this example, a web app manifest declares that the app should be registered to handle the protocols `web+jngl` and `web+jnglstore`.

```json
{
  "name": "Jungle",
  "description": "A plant encyclopedia",
  "protocol_handlers": [
    {
      "protocol": "web+jngl",
      "url": "/lookup?type=%s"
    },
    {
      "protocol": "web+jnglstore",
      "url": "/shop?for=%s"
    }
  ],
  "icons": [
    {
      "src": "images/icons-44.png",
      "type": "image/png",
      "sizes": "44x44"
    },
    {
      "src": "images/icons-144.png",
      "type": "image/png",
      "sizes": "144x144"
    },
    {
      "src": "images/icons-192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
  ],
  "background_color": "#007f87",
  "display": "standalone",
  "start_url": "/",
}
```
You will need to update your manifest to support whatever protocol you'd like to register for. Once this feature is enabled, Microsoft Edge will detect the manifest register for the protocol. If more than one application has registered for a given protocol, the operating system or the browser will present a disambiguation selector to the user so that they can choose the appropriate applicationf from the list. 

> [!IMPORTANT]
> To preview protocol handling in Microsoft Edge, look for and enable the edge://flag:
**Desktop Web Apps support Protocol Handlers**
 

### URL Link Handling  

Normally, tools such as **Elements** and **Network** may only open in the main panel that is located at the top of the DevTools.  Tools like **3D View** and **Issues** which normally only open in the **Drawer** panel that is located at the bottom of the DevTools.  After you choose the experiment, you may move tools between the top and bottom panels.  To move a tool, hover on the tab, open the contextual menu \(right-click\), and choose **Move to top** or **Move to bottom**.   

To preview protocol handling, look for:
**Desktop PWA URL Handling**
in edge://flags and Enable it.    


:::image type="complex" source="../media/experiments-move-panels.msft.png" alt-text="Moving tabs between panels" lightbox="../media/experiments-move-panels.msft.png":::
   Moving tabs between panels  
:::image-end:::  

<!--Available in Microsoft Edge version 85 and later.  -->  

### Window Controls Overlay

[webhint][WebhintMain] is an open-source tool that provides real-time feedback for websites and local webpages.  The type of feedback provided by [webhint][WebhintMain].  

*   accessibility  
*   cross-browser compatibility  
*   security  
*   performance  
*   Progressive Web Apps (PWAs)  
*   other common web development issues  
    
The [webhint][WebhintMain] experiment displays the webhint feedback in the [Issues][DevtoolsIssues] panel.  Choose an issue to display solution documentation and a list of the affected resources on your website.  Choose a resource link to open the relevant **Network**, **Sources**, or **Elements** pane in DevTools.  

:::image type="complex" source="../media/experiments-webhint.msft.png" alt-text="webhint feedback in the Issues panel" lightbox="../media/experiments-webhint.msft.png":::
   webhint feedback in the **Issues** panel  
:::image-end:::  

<!--Available in Microsoft Edge version 85 and later.  -->  

### Place Holder  

**Network Console** is the working title of an experiment to make synthetic network requests over HTTP.  You may use the **Network Console** experiment to send web API requests.  

After you turn on the experiment, ensure you restart the DevTools.  To use the **Network Console**, complete the following steps.  

1.  Open the **Network** pane.  
1.  Find the network request that you want to change and resend.  
1.  Open the contextual menu \(right-click\), and choose **Edit and Replay**.  
1.  When the **Network Console** opens, edit the network request information.  
1.  Choose **Send**.  
    
:::image type="complex" source="../media/network-network-console.msft.png" alt-text="Network Console in the Console drawer" lightbox="../media/network-network-console.msft.png":::
   **Network Console** in the **Console** drawer  
:::image-end:::  

<!--Available in Microsoft Edge version 85 and later.  -->  


## Previous experimental features  

*   [3D View][Devtools3dViewIndex] is now available and turned on by default in Microsoft Edge version 83 or later.  
*   [Turn on support to move tabs between panels][DevtoolsMoveTabs] is now available and turned on by default in Microsoft Edge version 85 or later.  
*   [Customize Keyboard Shortcuts][DevtoolsCustomKeyboardShortcuts] is now available and turned on by default in Microsoft Edge version 86 or later.  
*   [Emulation: Support dual screen mode][DevtoolsDeviceModeDualScreenAndFoldables] is now available and turned on by default in Microsoft Edge version 89 or later.  
*   [Turn on new CSS grid debugging features][DevtoolsCssGrid] is now available and turned on by default in Microsoft Edge version 89 or later.  
    
## Providing feedback on experimental features  

To provide feedback on Microsoft Edge web app experiments:  

*   Send your feedback using the **Send Feedback** menu item found in the `...` menu Or the keyboard shortcut `Alt-Shift-I` from within your application

:::image type="complex" source="../media/bing-devtools-send-feedback.msft.png" alt-text="The Send Feedback icon in Microsoft Edge DevTools" lightbox="../media/bing-devtools-send-feedback.msft.png":::
   The **Send Feedback** icon in Microsoft Edge DevTools  
:::image-end:::  

<!--  
## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  
-->  

<!-- links -->  

[Devtools3dViewIndex]: ../3d-view/index.md "3D View | Microsoft Docs"  
[DevtoolsCssGrid]: ../css/grid.md "Inspect CSS Grid in Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsMoveTabs]: ../customize/index.md "Customize Microsoft Edge DevTools | Microsoft Docs"  
[DevToolsCustomizeIndexSettings]: ../customize/index.md#settings "Settings - Customize Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsDeviceModeIndexSimulateMobileViewport]: ../device-mode/index.md#simulate-a-mobile-viewport "Simulate Mobile Devices with Device Mode in Microsoft Edge DevTools | Microsoft Edge"  
[DevtoolsInspectStylesEditFonts]: ../inspect-styles/edit-fonts.md "Edit CSS font styles and settings in the Styles pane in DevTools | Microsoft Docs"  
[DevtoolsIssues]: ../issues/index.md "Find and fix problems with the Microsoft Edge DevTools Issues tool | Microsoft Docs"  
[DevToolsShortcuts]: ../shortcuts/index.md "Microsoft Edge DevTools keyboard shortcuts | Microsoft Docs"  
[DevtoolsCustomKeyboardShortcuts]: ../customize/shortcuts.md "Customize keyboard shortcuts in the Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsOpenMain]: ../open/index.md "Open Microsoft Edge DevTools | Microsoft Docs"  

[DualScreenWebIndex]: /dual-screen/web/index "Dual-screen web experiences | Microsoft Docs"  
[DualScreenAndroidGetDuoSdk]: /dual-screen/android/get-duo-sdk "Get the Surface Duo emulator | Microsoft Docs"  
[DualScreenIntroductionHowWorkSeam]: /dual-screen/introduction#how-to-work-with-the-seam "How to work with the seam - Introduction to dual-screen devices | Microsoft Docs"  
[DualScreenAndroidUseEmulator]: /dual-screen/android/use-emulator "Use the Surface Duo emulator | Microsoft Docs"  
[DualScreenDocsCssMedia]: /dual-screen/web/css-media-spanning "CSS media screen-spanning feature for dual-screen detection | Microsoft Docs"  
[DualScreenDocsJSAPI]: /dual-screen/web/javascript-getwindowsegments "The getWindowSegments JavaScript API for dual-screen devices | Microsoft Docs"  

[RemoteDesktopClientDocs]: /windows-server/remote/remote-desktop-services/clients/remote-desktop-clients "Remote Desktop clients | Microsoft Docs"

[MicrosoftEdge]: https://www.microsoft.com/edge "Microsoft Edge"  

[SurfaceDevicesDuo]: https://www.microsoft.com/surface/devices/surface-duo "Surface Duo | Microsoft Surface"  

[AndroidDeveloperStudio]: https://developer.android.com/studio/ "Android Studio"  

[GooglePlayMicrosoftEdge]: https://play.google.com/store/apps/details?id=com.microsoft.emmx "Microsoft Edge | Google Play"  

[SamsungMobileGalaxyFold]: https://www.samsung.com/mobile/galaxy-fold/ "Galaxy Fold | Samsung"  
[DevtoolsDeviceModeDualScreenAndFoldables]: ../device-mode/dual-screen-and-foldables.md "Emulate dual-screen and foldable devices in Microsoft Edge DevTools | Microsoft Docs"

[TwitterEdgedevtools]: https://www.twitter.com/EdgeDevTools "Microsoft Edge DevTools | Twitter"  

[WebhintMain]: https://webhint.io "webhint"  
