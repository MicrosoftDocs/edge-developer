---
description: Use the Emulation panel to test different browser profiles, screen sizes and resolutions, and GPS location coordinates
title: DevTools - Emulation
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, device emulation, responsive design, geolocation, resolution
ms.custom: seodec18
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# Emulation  

> [!NOTE]
> The new Microsoft Edge is built using Chromium, and starts at version 75.  For more information, [download the new Microsoft Edge][MicrosoftNewEdge], and try out the new [Microsoft Edge (Chromium) Developer Tools][DevtoolsGuideChromium].  
> 
> To emulate different devices, browsers, screen sizes, and resolutions in the new DevTools, navigate to [Emulate Mobile Devices in Microsoft Edge \(Chromium\) DevTools][DevtoolsGuideChromiumDeviceMode].  

The **Emulation** panel helps with the following activities.    

*   Simulate various [device profiles](#device), [browsers](#browser-profile), and [screen sizes and resolutions](#display)  
*   Test different [geolocation settings and coordinates](#geolocation)  

:::image type="complex" source="./media/emulation.png" alt-text="The Microsoft Edge DevTools Emulation panel" lightbox="./media/emulation.png":::
   The Microsoft Edge DevTools **Emulation** panel  
:::image-end:::  

1.  The **Persist Emulation settings** button saves any changes you made from the default desktop emulation settings, even when you close and reopen the DevTools.  

1.  The **Reset Emulation settings** button resets your emulation settings back to the default Desktop browser profile and Microsoft Edge user agent string with GPS turned off.  

1.  When any of these options are changed from the default, the **Emulation** tab displays an informational alert to indicate that some aspect of the behavior of your browser is being emulated.  

## Device  

Pick from a preset list of Windows device profiles that automatically configure the other emulation options or specify your own **Custom** configuration.  Switch back to **Default** to reset all the emulation tools.  

## Mode  

### Browser profile  

A quick way to simulate your page running on a Windows Phone device is to change the **Browser profile** setting to **Windows Phone**.  

#### User agent string  

Modifying your user agent string to mimic another browser is a good first step in debugging errors that are only happening in Microsoft Edge.  

Scripts use the user agent string to detect which browser is used.  Script may be front-end, back-end, or front-end and back-end.  Although your code does not use browser detection, your code may inherit it from a third-party JavaScript library or server-side script.  

The problem with browser detection is that you may scale-back \(or change\) features in your webpage using assumptions about browser capabilities. Instead, you should consider using feature detection to detect the capabilities of your browser.  Unexpected behavior may occur because of one of the following situations.  

*   Code targeted at Windows Internet Explorer 8 may run differently in Microsoft Edge.  
*   A feature that your browser should support is disabled, because of an assumption made by the developer.  

If changing your user agent string clears up the problem, browser detection is likely culprit.  

## Display  

Display emulation to preview your site on different screen sizes and resolutions.  

*   conventional desktop monitors  
*   smaller mobile screens  
*   newer high-resolution displays  

Emulations are adapted to try to match the physical dimensions of the screens being emulated.  Emulated pixels may appear compressed or expanded. Emulation is not recommended if you need to test pixel-perfect positioning of HTML elements.  Emulation is, however, good for testing responsive designs and identifying larger element positioning issues.  

### Orientation  

Choose from **Landscape** or **Portrait** mode.  

### Resolution  

Choose from a preset list of popular device resolutions, or specify your own **Custom** config.  Resolutions of up to 80 inches and 3820 x 2160 are supported.  

## Geolocation  

If your website uses the [Geolocation API][MdnGeolocationUsing] to provide location-based services, the following activities are available from the convenience of your desktop.  

*   easily test different GPS coordinates  
*   easily test different sensor states  

The settings override any actual GPS coordinates and the sensor state on devices that support geolocation.  

Your website must request and be granted permission from a user before using the device location.  Test how your site behaves with and without location permissions from the Microsoft Edge **Settings** panel.  

**...** > **Settings** > **View advanced settings** > **Website permissions** > **Manage**  

:::image type="complex" source="./media/settings_manage_permissions.png" alt-text="Manage website permissions from the Microsoft Edge Settings panel" lightbox="./media/settings_manage_permissions.png":::
   Manage website permissions from the Microsoft Edge **Settings** panel  
:::image-end:::  

## Shortcuts

| Action  | Shortcut  |  
|:--- |:--- |  
| Reset Emulation settings | `Ctrl`+`Shift`+`L` |  

<!-- links -->  


[DevtoolsGuideChromium]: /microsoft-edge/devtools-guide-chromium "Microsoft Edge (Chromium) Developer Tools | Microsoft Docs"  
[DevtoolsGuideChromiumDeviceMode]: /microsoft-edge/devtools-guide-chromium/device-mode "Emulate mobile devices in Microsoft Edge DevTools | Microsoft Docs"  

[MicrosoftNewEdge]: https://www.microsoft.com/edge "Download New Microsoft Edge Browser"  

[MdnGeolocationUsing]: https://developer.mozilla.org/docs/Web/API/Geolocation/Using_geolocation "Geolocation API | MDN"  
