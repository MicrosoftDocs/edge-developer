---
description: Learn how to use the Emulation tool to test how webpages work with different browser profiles, user agents, screen sizes and resolutions, and GPS location coordinates.
title: F12 devtools guide - Emulation - Microsoft Edge Development
author: erikadoyle
---

# Emulation

Use the Emulation tools to test how webpages work with different browser profiles, user agents, screen sizes and resolutions, and GPS location coordinates.

Use the options in the Device dropdown to apply configurations for popular devices to those emulation tools.


## Testing early and testing often

Designing and developing for the modern web means building webpages that work on a wide range of devices and platforms. Using the Emulation tool in F12 developer tools, you can emulate different environments that your webpages can be viewed in. This makes it easier to catch and debug issues early in the development cycle.

The tool is split into four sections: Device, Mode, Display, and Geolocation:

![Edge Emulation](./media/Edge_Emulation.png)

  - [Device](#device): Applies configurations to the other tools which map to popular devices.
  - [Mode](#mode): Desktop vs. Windows Phone browser profiles, and use User agent string emulation to debug errors caused by browser sniffing.
  - [Display](#display): Emulate different screen sizes and resolutions to see how webpages render.
  - [Geolocation](#geolocation): Simulate a GPS receiver and enter GPS coordinates to test location-aware features in a webpage.

Whenever any of these options are changed from the defaults, the **Emulation tool** icon in the F12 sidebar will have a small informational alert icon overlaid on it to let you know that some portion of your browser's behavior is being emulated.

### Device

Pick from a list of device profiles which will automatically configure the other emulation options. Switch back to Default to reset all the emulation tools.

### Mode
#### Browser profile

If you want to see how your webpages perform on a Windows Phone 8 device, the browser profile selection helps you change a variety of settings to emulate the device quickly and easily, then change back to the default Desktop profile just as easily.

#### User agent string

Changing your user agent string is a good first step in debugging errors that are only happening in Microsoft Edge, but not in other browsers. It's basically a way of telling Microsoft Edge to identify itself as a different browser.

Front end and/or back end scripts sometimes try to detect which browser you're using. And even when you're not using browser detection in your own code, you may be using a third-party JavaScript library or server-side script that does.

The problem with browser detection is that it's often used to scale back or change the features in a webpage based on what the developer writing the script thinks your browser can do, rather than detecting what your browser can actually do [using feature detection](https://msdn.microsoft.com/library/hh273397.aspx). This can cause unexpected behavior, because code targeted at Windows Internet Explorer 8 can run very differently in Microsoft Edge; or a feature your browser is perfectly capable of supporting might be disabled because of an assumption made by the developer.

If changing your user agent string clears up a problem, it's likely browser detection is the cause.

### Display

Display emulation helps developers preview their webpages on different screen sizes and different resolutions. It helps identify issues as webpages transition from conventional desktop monitors to smaller mobile screens or newer high-resolution displays.

**Important**  Emulations are adapted to try and match the physical dimensions of the screens being emulated. Emulated pixels might appear compressed or expanded, and emulation is not recommended if you need to test pixel-perfect positioning of HTML elements. Emulation is, however, good for testing responsive designs and identifying larger element positioning issues.

#### Orientation

The standard options are available:
  - Portrait: the screen is taller than it is wide. This tends to be the orientation for most mobile screens.
  - Landscape: the screen is wider than it is tall. This tends to be the orientation for most laptop screens and desktop monitors.

#### Resolution

![Edge Emulation Resolutions](./media/F12BlueEmulationResolution.png)

A selection of physical dimensions and resolutions is provided. If none of those meet your needs, you can set a custom size and resolution by selecting **Custom** from the menu.

Custom sizes of up to 80 inches and 3820 x 2160 are supported.

## Geolocation

Many mobile devices make it possible to determine a user's physical location and deliver information or services tailored to that.

There are three options to **simulate GPS**. They are **Off**, **On**, and **On but no signal** which can be used for testing different device states. When set to **On**, the **latitude** and **longitude** you enter will be provided to your webpage.

## Related topics

[Strategies for building adaptive sites](https://msdn.microsoft.com/library/jj583806.aspx)

[Geolocation API](https://msdn.microsoft.com/library/hh772290.aspx)

[Microsoft Edge Developer Tools on Twitter: Find helpful F12 hints and news updates](https://twitter.com/EdgeDevTools)