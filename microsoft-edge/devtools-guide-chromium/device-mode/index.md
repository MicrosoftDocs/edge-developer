---
description: Use virtual devices in Microsoft Edge to build mobile-first websites.
title: Emulate mobile devices in Microsoft Edge DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/04/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, emulation, device, simulation, mobile
---
<!-- Copyright Kayce Basques 

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->
# Emulate mobile devices in Microsoft Edge DevTools  

Use **Device emulation** to approximate how your page looks and responds on a mobile device.  The Microsoft Edge DevTools provide a collection of features to help you emulate mobile devices.  The collection includes the following features.  

*   [Simulate a mobile viewport](#simulate-a-mobile-viewport)  
*   [Throttle the network](#throttle-the-network-only)  
*   [Throttle the CPU](#throttle-the-cpu-only)  
*   [Simulate geolocation](#override-geolocation)  
*   [Set orientation](#set-orientation)  
*   [Set the user agent string](#set-user-agent-string)  

## Limitations  

**Device emulation** is a [first-order approximation][WikiApproximation] of the look and feel of your page on a mobile device.  **Device emulation** does not actually run your code on a mobile device.  Instead you simulate the mobile user experience from your laptop or desktop.  

Some aspects of mobile devices are never emulated in DevTools.  For example, the architecture of mobile CPUs is different than the architecture of laptop or desktop CPUs.  When in doubt, your best bet is to actually run your page on a mobile device.  Use [Remote Debugging][DevToolsRemoteDebugging] to interact with the code of a page from your machine while your page actually runs on a mobile device.  You may view, change, debug, profile, or all four while you interact with the code.  Your machine may be a notebook or desktop computer.  

## Simulate a mobile viewport  

Choose **Toggle device emulation**  \(![Toggle Device Toolbar](../media/toggle-device-toolbar-dark-icon.msft.png)\) or choose **Customize and control DevTools** \(`...`\) > **Device emulation** to open the UI that enables you to simulate a mobile viewport.  

:::image type="complex" source="../media/device-mode-toggle-device-toolbar-highlighted.msft.png" alt-text="The Device Toolbar" lightbox="../media/device-mode-toggle-device-toolbar-highlighted.msft.png":::
    The Device Toolbar  
:::image-end:::  

By default the Device Toolbar opens in Responsive Viewport Mode.  

### Responsive Viewport Mode  

To quickly test the look and feel of your page across multiple screen sizes, drag the handles to resize the viewport to your required dimensions.  You may also enter specific values in the width and height boxes.  In the following figure, the width is set to `626` and the height is set to `516`.  

:::image type="complex" source="../media/device-mode-toggle-device-toolbar-handles-highlighted.msft.png" alt-text="The handles for changing the dimensions of the viewport when in Responsive Viewport Mode" lightbox="../media/device-mode-toggle-device-toolbar-handles-highlighted.msft.png":::
    The handles for changing the dimensions of the viewport when in Responsive Viewport Mode  
:::image-end:::  

#### Show media queries  

If you have defined media queries on your page, jump to the viewport dimensions where those media queries take effect by showing media query breakpoints above your viewport.  Choose **More options** > **Show media queries**.  

:::image type="complex" source="../media/device-mode-toggle-device-toolbar-more-options-show-media-queries.msft.png" alt-text="Show media queries" lightbox="../media/device-mode-toggle-device-toolbar-more-options-show-media-queries.msft.png":::
   **Show media queries**  
:::image-end:::  

Choose a breakpoint to change the width of the viewport so that the media query gets triggered.  

:::image type="complex" source="../media/device-mode-toggle-device-toolbar-click-breakpoint.msft.png" alt-text="Choose a breakpoint to change the width of the viewport" lightbox="../media/device-mode-toggle-device-toolbar-click-breakpoint.msft.png":::
   Choose a breakpoint to change the width of the viewport  
:::image-end:::  

#### Set the device type  

Use the **Device Type** list to simulate a mobile device or desktop device.  

:::image type="complex" source="../media/device-mode-toggle-device-toolbar-device-type-list.msft.png" alt-text="The Device Type list" lightbox="../media/device-mode-toggle-device-toolbar-device-type-list.msft.png":::
   The **Device Type** list  
:::image-end:::  

The following table describes the differences between the available device type options.  The Rendering method column refers to whether Microsoft Edge renders the page as a mobile or desktop viewport.  The Cursor icon column refers to what type of cursor is displayed when you hover on the page.  The Events triggered column refers to whether the page triggers `touch` or `click` events when you interact with the page.  

| Option | Rendering method | Cursor icon | Events triggered |  
|:--- |:--- |:--- |:--- |  
| Mobile | Mobile | Circle | touch |  
| Mobile \(no touch\) | Mobile | Normal | choose |  
| Desktop | Desktop | Normal | choose |  
| Desktop \(touch\) | Desktop | Circle | touch |  

> [!NOTE]
> If the **Device Type** list is not displayed, choose **More options** > **Add device type**.  

### Mobile Device Viewport Mode  

To simulate the dimensions of a specific mobile device, select the device from the **Device** list.  

:::image type="complex" source="../media/device-mode-toggle-device-toolbar-device-list.msft.png" alt-text="The Device list" lightbox="../media/device-mode-toggle-device-toolbar-device-list.msft.png":::
   The **Device** list  
:::image-end:::  

#### Rotate the viewport to landscape orientation  

Test your webpage in landscape orientation.  

*   To rotate the viewport to landscape orientation, choose **Rotate** \(![Rotate](../media/rotate-dark-icon.msft.png)\).  
    
    :::image type="complex" source="../media/device-mode-toggle-device-toolbar-landscape.msft.png" alt-text="Page displayed in landscape orientation" lightbox="../media/device-mode-toggle-device-toolbar-landscape.msft.png":::
       Page displayed in landscape orientation  
    :::image-end:::  
    
> [!NOTE]
> The **Rotate** button disappears if your **Device Toolbar** is narrow.  

:::image type="complex" source="../media/device-mode-toggle-device-toolbar-highlighted.msft.png" alt-text="The Device Toolbar" lightbox="../media/device-mode-toggle-device-toolbar-highlighted.msft.png":::
   The **Device Toolbar**  
:::image-end:::  

For more information, navigate to [Set orientation](#set-orientation).  

#### Show device frame  

Display the physical device frame around the viewport when you simulate the dimensions of a specific mobile device such as an iPhone 6.  

1.  Open **More options**.  
1.  Choose **Show device frame**.  

> [!NOTE]
> If a device frame for a particular device is not displayed, it means that DevTools does not have art for the option.  

:::row:::
   :::column span="":::
      :::image type="complex" source="../media/device-mode-toggle-device-toolbar-option-show-device-frame.msft.png" alt-text="Show device frame" lightbox="../media/device-mode-toggle-device-toolbar-option-show-device-frame.msft.png":::
         Show device frame  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../media/device-mode-toggle-device-toolbar-options-device-frame-iphone-6.msft.png" alt-text="The device frame for the iPhone 6" lightbox="../media/device-mode-toggle-device-toolbar-options-device-frame-iphone-6.msft.png":::
         The device frame for the iPhone 6  
      :::image-end:::  
   :::column-end:::
:::row-end:::  

#### Add a custom mobile device  

If the mobile device option that you need is not included on the default list, you may add a custom device.  To add a custom device, complete the following steps.  

1.  Choose the **Device** list > **Edit**.  
    
    :::image type="complex" source="../media/device-mode-toggle-device-toolbar-device-list-edit.msft.png" alt-text="Choose Edit" lightbox="../media/device-mode-toggle-device-toolbar-device-list-edit.msft.png":::
       Choose **Edit**  
    :::image-end:::  
    
1.  Choose **Add custom device**.  
1.  On **Emulated Devices**, enter a device name, screen width, and screen height for the custom device.  The [device pixel ratio][MDNWindowDevicePixelRatio], [user agent string][MDNUserAgent], and [device type](#set-the-device-type) fields are optional.  The device type field defaults to **Mobile**.  
    
    :::image type="complex" source="../media/device-mode-toggle-device-toolbar-settings-emulated-devices-add.msft.png" alt-text="Create a custom device" lightbox="../media/device-mode-toggle-device-toolbar-settings-emulated-devices-add.msft.png":::
       Create a custom device  
    :::image-end:::  
    
### Show rulers  

If you need to measure screen dimensions, you may use rulers to measure the screen size in pixels.  Choose **More options** > **Show rulers** to display rulers above and to the left of your viewport.  

:::row:::
   :::column span="":::
      :::image type="complex" source="../media/device-mode-toggle-device-toolbar-options-show-rulers.msft.png" alt-text="Menu item to display rulers" lightbox="../media/device-mode-toggle-device-toolbar-options-show-rulers.msft.png":::
         Menu item to display rulers  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../media/device-mode-toggle-device-toolbar-rulers.msft.png" alt-text="Rulers above and to the left of the viewport" lightbox="../media/device-mode-toggle-device-toolbar-rulers.msft.png":::
         Rulers above and to the left of the viewport  
      :::image-end:::  
   :::column-end:::
:::row-end:::  

### Zoom the viewport  

To test the look and feel of your page at multiple zoom levels, use the **Zoom** list to zoom in or out.  

:::image type="complex" source="../media/device-mode-toggle-device-toolbar-zoom.msft.png" alt-text="Zoom" lightbox="../media/device-mode-toggle-device-toolbar-zoom.msft.png":::
   **Zoom**  
:::image-end:::  

## Throttle the network and CPU  

Mobile devices often have network and CPU constraints.  Ensure you test how quickly your page loads and how it responds at different internet and CPU speeds.  

Throttle the network and CPU.  

1.  Choose **Throttle** list and change the preset to **Mid-tier mobile** or **Low-end mobile**.  
    *   **Mid-tier mobile** simulates `fast 3G` and throttles your CPU.  It is four times slower than normal.  
    *   **Low-end mobile** simulates `slow 3G` and throttles your CPU.  It is six times slower than normal.  
    
All of the throttling is based upon the normal capability of your laptop or desktop.  

:::image type="complex" source="../media/device-mode-toggle-device-toolbar-throttle.msft.png" alt-text="The Throttle list in the Device Toolbar" lightbox="../media/device-mode-toggle-device-toolbar-throttle.msft.png":::
   The **Throttle** list in the Device Toolbar  
:::image-end:::  

> [!NOTE]
> If the **Throttle list** is hidden, your **Device Toolbar** is too narrow.  To access the **Throttle list**, increase the width of the **Device Toolbar**.  

:::image type="complex" source="../media/device-mode-toggle-device-toolbar-highlighted.msft.png" alt-text="The Device Toolbar" lightbox="../media/device-mode-toggle-device-toolbar-highlighted.msft.png":::
   The **Device Toolbar**  
:::image-end:::  

### Throttle the CPU only  

To throttle the CPU only and not the network, complete the following steps.

1.  Choose the **Performance** panel, and choose **Capture Settings** \(![Capture Settings](../media/capture-settings-icon.msft.png)\).
1.  Choose **CPU** > **4x slowdown** or **6x slowdown**.
    
    :::image type="complex" source="../media/device-mode-performance-cpu-throttle.msft.png" alt-text="The CPU list in the Performance panel" lightbox="../media/device-mode-performance-cpu-throttle.msft.png":::
       The **CPU** list in the **Performance** panel  
    :::image-end:::  
    
### Throttle the network only  

To throttle the network only, complete the following steps.

1.  Choose the **Network** tool.
1.  Choose **Online** > **Fast 3G** or **Slow 3G**.
    
    :::image type="complex" source="../media/device-mode-network-throttle.msft.png" alt-text="The Throttle list in the Network panel" lightbox="../media/device-mode-network-throttle.msft.png":::
       The **Throttle** list in the Network panel  
    :::image-end:::  
    
    Or select `Control`+`Shift`+`P` \(Windows, Linux\) or `Command`+`Shift`+`P` \(macOS\) to open the **Command Menu**, type `3G`, and choose **Enable fast 3G throttling** or **Enable slow 3G throttling**.  
    
    :::image type="complex" source="../media/device-mode-command-menu-throttle.msft.png" alt-text="The Command Menu" lightbox="../media/device-mode-command-menu-throttle.msft.png":::
       The **Command Menu**  
    :::image-end:::  
    
You may also set network throttling from the **Performance** panel.  

1.  Choose **Capture Settings** \(![Capture Settings](../media/capture-settings-icon.msft.png)\) and choose the **Network** list and change the preset to **Fast 3G** or **Slow 3G**.  
    
    :::image type="complex" source="../media/device-mode-performance-network-throttle.msft.png" alt-text="Set network throttling from the Performance panel" lightbox="../media/device-mode-performance-network-throttle.msft.png":::
       Set network throttling from the **Performance** panel  
    :::image-end:::  
    
## Override geolocation  

:::row:::
   :::column span="":::
      If your page depends on geolocation information from a mobile device to render properly, provide different geolocations using the geolocation overriding UI.  

      1.  Choose **Customize and control DevTools** \(`...`\) > **More tools** > **Sensors**.  
      
      :::image type="complex" source="../media/device-mode-toggle-device-toolbar-more-tools-sensors.msft.png" alt-text="Sensors for geolocation" lightbox="../media/device-mode-toggle-device-toolbar-more-tools-sensors.msft.png":::
         **Sensors** for geolocation  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      1.  Open the Command Menu.  
          *   Select `Control`+`Shift`+`P` \(Windows, Linux\) or `Command`+`Shift`+`P` \(macOS\).  
      1. Type `Sensors`, and choose **Show Sensors**.  
      
      :::image type="complex" source="../media/device-mode-toggle-device-toolbar-command-menu-sensors.msft.png" alt-text="Show Sensors for geolocation" lightbox="../media/device-mode-toggle-device-toolbar-command-menu-sensors.msft.png":::
         **Show Sensors** for geolocation  
      :::image-end:::  
   :::column-end:::
:::row-end:::  

On the **Sensors** panel, you may select one of the preset locations included in DevTools using the **Location** drop-down menu.  To enter a custom location, choose **Other…** and enter the coordinates of your custom location.  To test your page in an error state when location information is unavailable, choose **Location unavailable**.  

:::image type="complex" source="../media/device-mode-toggle-device-toolbar-sensors-tokyo.msft.png" alt-text="Sensors panel with a preset location selected" lightbox="../media/device-mode-toggle-device-toolbar-sensors-tokyo.msft.png":::
    **Sensors** panel with a preset location selected.  
:::image-end:::

## Set orientation  

:::row:::
   :::column span="":::
      If your page depends on orientation information from a mobile device to render properly, open the orientation UI.  

      1.  Choose **Customize and control DevTools** \(`...`\) > **More tools** > **Sensors**.  
      
      :::image type="complex" source="../media/device-mode-toggle-device-toolbar-more-tools-sensors.msft.png" alt-text="Sensors for orientation" lightbox="../media/device-mode-toggle-device-toolbar-more-tools-sensors.msft.png":::
         **Sensors** for orientation  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      1.  Open the Command Menu.  
          *   Select `Control`+`Shift`+`P` \(Windows, Linux\) or `Command`+`Shift`+`P` \(macOS\).  
      1. Type `Sensors`, and choose **Show Sensors**.  
      
      :::image type="complex" source="../media/device-mode-toggle-device-toolbar-command-menu-sensors.msft.png" alt-text="Show Sensors for orientation" lightbox="../media/device-mode-toggle-device-toolbar-command-menu-sensors.msft.png":::
         **Show Sensors** for orientation  
      :::image-end:::  
   :::column-end:::
:::row-end:::  

On the **Sensors** panel, you may select a preset orientation from the **Orientation** drop-down menu.  To enter your own orientation, choose **Custom orientation**, and enter your own [alpha][MDNDeviceOrientaitonAlpha], [beta][MDNDeviceOrientaitonBeta], and [gamma][MDNDeviceOrientaitonGamma] values.  

:::image type="complex" source="../media/device-mode-toggle-device-toolbar-sensors-tokyo-portrait-upside-down.msft.png" alt-text="Orientation options on the Sensors panel" lightbox="../media/device-mode-toggle-device-toolbar-sensors-tokyo-portrait-upside-down.msft.png":::
    **Orientation** options on the **Sensors** panel  
:::image-end:::  

## Set user agent string  

:::row:::
   :::column span="":::
      If your page depends on the user agent string from a mobile device to render properly, use the **Network conditions** panel to provide different user agent strings.  
      
      1.  Choose **Customize and control DevTools** \(`...`\) > **More tools** > **Network conditions**.  
      
      :::image type="complex" source="../media/device-mode-toggle-device-toolbar-more-tools-network-conditions.msft.png" alt-text="Network conditions entry in the More tools menu" lightbox="../media/device-mode-toggle-device-toolbar-more-tools-network-conditions.msft.png":::
         **Network conditions** entry in the **More tools** menu  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      1.  Open the Command Menu.  
          *   Select `Control`+`Shift`+`P` \(Windows, Linux\) or `Command`+`Shift`+`P` \(macOS\).  
      1. Type `Network conditions`, and choose **Show Network conditions**.  
      
      :::image type="complex" source="../media/device-mode-toggle-device-toolbar-command-menu-network-conditions.msft.png" alt-text="Show Network conditions" lightbox="../media/device-mode-toggle-device-toolbar-command-menu-network-conditions.msft.png":::
         **Show Network conditions**  
      :::image-end:::  
   :::column-end:::
:::row-end:::  

Next to **User agent**, clear the **Select automatically** checkbox.  Then, choose **Custom...** to select from a list of predefined user agent strings.  To enter your own user agent string, enter the string in **Enter a custom user agent**.  

:::image type="complex" source="../media/device-mode-toggle-device-toolbar-network-conditions-macos.msft.png" alt-text="Set the user agent string to Microsoft Edge on macOS" lightbox="../media/device-mode-toggle-device-toolbar-network-conditions-macos.msft.png":::
    Set the user agent string to Microsoft Edge on macOS  
:::image-end:::  

## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- links -->  

<!--[DevToolsCommunity]: ../index.md#community "Join the DevTools community | Microsoft Docs"  -->
[DevToolsRemoteDebugging]: ../remote-debugging/index.md "Get started with remote debugging Android devices | Microsoft Docs"  

[MDNWindowDevicePixelRatio]: https://developer.mozilla.org/docs/Web/API/Window/devicePixelRatio "Window.devicePixelRatio | MDN"  
[MDNUserAgent]: https://developer.mozilla.org/docs/Glossary/User_agent "User Agent | MDN"  
[MDNDeviceOrientaitonAlpha]: https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent/alpha "DeviceOrientationEvent.alpha | MDN"  
[MDNDeviceOrientaitonBeta]: https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent/beta "DeviceOrientationEvent.beta | MDN"  
[MDNDeviceOrientaitonGamma]: https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent/gamma "DeviceOrientationEvent.gamma | MDN"  

[WikiApproximation]: https://en.wikipedia.org/wiki/Order_of_approximation#First-order "Order of Approximation - First-order - Wikipedia"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/device-mode/index) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors#kayce-basques  
