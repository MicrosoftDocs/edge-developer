---
description: Use the Emulation panel to test different browser profiles, screen sizes and resolutions, and GPS location coordinates
title: Microsoft Edge F12 DevTools - Emulation
author: erikadoyle
ms.author: edoyle
ms.date: 10/10/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, device emulation, responsive design, geolocation, resolution
---

# Emulation

The *Emulation* panel helps you to:
 - Simulate various [device profiles](#device), [browsers](#browser-profile), [screen sizes and resolutions](#display)
 - Test different [geolocation settings and coordinates](#geolocation)

![The Microsoft Edge F12 DevTools Emulation panel](./media/emulation.png)

1. The **Persist Emulation settings** button will save any changes you made from the default desktop emulation settings, even when you close and reopen the F12 DevTools. 

2. The **Reset Emulation settings** button will reset your emulation settings back to the default *Desktop* browser profile and Microsoft Edge user agent string with GPS turned off.

3. When any of these options are changed from the default, the **Emulation** tab will show an informational alert to indicate that some aspect of your browser's behavior is being emulated.

## Device

Pick from a preset list of Windows device profiles which  automatically configure the other emulation options or specify your own *Custom* configuation. Switch back to *Default* to reset all the emulation tools.

## Mode

### Browser profile
A quick way to simulate your page running on a Windows Phone device is to change the **Browser profile** setting to *Windows Phone*.

#### User agent string

Modifying your user agent string to mimic another browser is a good first step in debugging errors that are only happening in Microsoft Edge. 

Front end and/or back end scripts sometimes use the user agent string  to detect which browser you're using. And even when you're not using browser detection in your own code, you may be using a third-party JavaScript library or server-side script that does.

The problem with browser detection is that it's often used to scale back or change the features in a webpage based on what the developer writing the script thinks your browser can do, rather than detecting what your browser can actually do using feature detection. This can cause unexpected behavior, because code targeted at Windows Internet Explorer 8 can run very differently in Microsoft Edge; or a feature your browser is perfectly capable of supporting might be disabled because of an assumption made by the developer.

If changing your user agent string clears up the problem, browser detection is likely culprit.

## Display

Display emulation lets you preview your site on different screen sizes and resolutions: from conventional desktop monitors to smaller mobile screens or newer high-resolution displays.

Emulations are adapted to try and match the physical dimensions of the screens being emulated. Emulated pixels might appear compressed or expanded, and emulation is not recommended if you need to test pixel-perfect positioning of HTML elements. Emulation is, however, good for testing responsive designs and identifying larger element positioning issues.

### Orientation

Choose from *Landscape* or *Portrait* mode.

### Resolution

Choose from a preset list of popular device resolutions, or specify your own *Custom* config. Resolutions of up to 80 inches and 3820 x 2160 are supported.

## Geolocation

If your site uses the [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation) to provide location-based services, you can easily test different GPS coordinates and sensor states from the convenience of your desktop. These settings will override any actual GPS coordinates and the sensor state on machines that support geolocation. 

As with any usage of personal data on the web, your users will first need to grant your site permission to use their location. You can test how your site behaves with and without location permissions from the Microsoft Edge *Settings* panel:

**...** > **Settings** > **View advanced settings** > **Website permissions** > **Manage**

![Manage website permissions from the Microsoft Edge Settings panel](./media/settings_manage_permissions.png)

## Shortcuts

Action | Shortcut
:------------ | :-------------
Reset Emulation settings | `CTRL` + `SHIFT` + `L`
