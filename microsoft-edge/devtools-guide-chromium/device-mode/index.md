---
title: Simulate Mobile Devices with Device Mode in Microsoft Edge DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/06/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
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





# Simulate Mobile Devices with Device Mode in Microsoft Edge DevTools   

  

Use Device Mode to approximate how your page looks and performs on a mobile device.  

Device Mode is the name for the loose collection of features in Microsoft Edge DevTools that help you simulate mobile devices.  These features include:  

*   [Simulating a mobile viewport](#simulate-a-mobile-viewport)  
*   [Throttling the network](#throttle-the-network-only)  
*   [Throttling the CPU](#throttle-the-cpu-only)  
*   [Simulating geolocation](#override-geolocation)  
*   [Setting orientation](#set-orientation)  

## Limitations   

Think of Device Mode as a [first-order approximation][WikiApproximation] of how your page looks and feels on a mobile device.  With Device Mode you do not actually run your code on a mobile device.  You simulate the mobile user experience from your laptop or desktop.  

There are some aspects of mobile devices that DevTools will never be able to simulate.  For example, the architecture of mobile CPUs is very different than the architecture of laptop or desktop CPUs.  When in doubt, your best bet is to actually run your page on a mobile device.  Use [Remote Debugging][DevToolsRemoteDebugging] to view, change, debug, and profile the code of a page from your laptop or desktop while it actually runs on a mobile device.  

## Simulate a mobile viewport   

Click **Toggle Device Toolbar** ![Toggle Device Toolbar][ImageDeviceToolbarIcon] to open the UI that enables you to simulate a mobile viewport.  

> ##### Figure 1  
> The Device Toolbar  
> ![The Device Toolbar][ImageDeviceToolbar]  

By default the Device Toolbar opens in Responsive Viewport Mode.  

### Responsive Viewport Mode   

Drag the handles to resize the viewport to whatever dimensions you need.  Or, enter specific values in the width and height boxes.  In [Figure 2](#figure-2), the width is set to `626` and the height is set to `516`.  

> ##### Figure 2  
> The handles for changing the dimensions of the viewport when in Responsive Viewport Mode  
> ![The handles for changing the dimensions of the viewport when in Responsive Viewport Mode][ImageResponsiveHandles]  

#### Show media queries   

To show media query breakpoints above your viewport, click **More options** and then select **Show media queries**.  

> ##### Figure 3  
> Show media queries  
> ![Show media queries][ImageShowMediaQueries]  

Click a breakpoint to change the width of the viewport so that the breakpoint gets triggered.  

> ##### Figure 4  
> Click a breakpoint to change the width of the viewport  
> ![Click a breakpoint to change the width of the viewport][ImageBreakpoint]  

#### Set the device type   

Use the **Device Type** list to simulate a mobile device or desktop device.  

> ##### Figure 5  
> The **Device Type** list  
> ![The Device Type list][ImageDeviceType]  

The table below describes the differences between the options.  **Rendering method** refers to whether Microsoft Edge renders the page as a mobile or desktop viewport.  **Cursor icon** refers to what type of cursor you see when you hover over the page.  **Events fired** refers to whether the page fires `touch` or `click` events when you interact with the page.  

| Option | Rendering method | Cursor icon | Events fired |  
|:--- |:--- |:--- |:--- |  
| Mobile | Mobile | Circle | touch |  
| Mobile \(no touch\) | Mobile | Normal | click |  
| Desktop | Desktop | Normal | click |  
| Desktop \(touch\) | Desktop | Circle | touch |  

> [!NOTE]
> If you do not see the **Device Type** list, click **More options** and select **Add device type**.  

### Mobile Device Viewport Mode   

To simulate the dimensions of a specific mobile device, select the device from the **Device** list.  

> ##### Figure 6  
> The Device list  
> ![The Device list][ImageDeviceList]  

#### Rotate the viewport to landscape orientation   

Click **Rotate** ![Rotate][ImageRotateIcon] to rotate the viewport to landscape orientation.  

> ##### Figure 7  
> Landscape orientation  
> ![Landscape orientation][ImageLandscape]  

> [!NOTE]
> The **Rotate** button disappears if your **Device Toolbar** is narrow.  

> ##### Figure 8  
> The Device Toolbar  
> ![The Device Toolbar][ImageDeviceToolbar2]  

See also [Set orientation](#set-orientation).  

#### Show device frame   

When simulating the dimensions of a specific mobile device like an iPhone 6, open **More options** and then select **Show device frame** to show the physical device frame around the viewport.  

> [!NOTE]
> If you do not see a device frame for a particular device, it probably means that DevTools just does not have art for that specific option.  

> ##### Figure 9  
> Show device frame  
> ![Show device frame][ImageShowDeviceFrame]  

> ##### Figure 10  
> The device frame for the iPhone 6  
> ![The device frame for the iPhone 6][ImageIphoneFrame]  

#### Add a custom mobile device   

To add a custom device:  

1.  Click the **Device** list and then select **Edit**.  

> ##### Figure 11  
> Selecting **Edit**
> ![Selecting Edit][ImageEdit]  

1.  Click **Add custom device**.  

1.  Enter a name, width, and height for the device.  The [device pixel ratio][MDNWindowDevicePixelRatio], [user agent string][MDNUserAgent], and [device type](#set-the-device-type) fields are optional.  The device type field is the list that is set to **Mobile** by default.  

> ##### Figure 12  
> Creating a custom device  
> ![Creating a custom device][ImageAddCustomDevice]  

### Show rulers   

Click **More options** and then select **Show rulers** to see rulers above and to the left
of your viewport.  The sizing unit of the rulers is pixels.  

> ##### Figure 13  
> Show rulers  
> ![Show rulers][ImageShowRulers]  

> ##### Figure 14  
> Rulers above and to the left of the viewport  
> ![Rulers above and to the left of the viewport][ImageRulers]  

### Zoom the viewport   

Use the **Zoom** list to zoom in or out.  

> ##### Figure 15  
> Zoom  
> ![Zoom][ImageZoomViewport]  

## Throttle the network and CPU   

To throttle the network and CPU, select **Mid-tier mobile** or **Low-end mobile** from the **Throttle** list.  

> ##### Figure 16  
> The Throttle list  
> ![The Throttle list][ImageThrottling]  

**Mid-tier mobile** simulates fast 3G and throttles your CPU so that it is 4 times slower than normal.  **Low-end mobile** simulates slow 3G and throttles your CPU 6 times slower than normal.  Keep in mind that the throttling is relative to the normal capability of your laptop or desktop.  

> [!NOTE]
> The **Throttle** list will be hidden if your **Device Toolbar** is narrow.  

> ##### Figure 17  
> The Device Toolbar  
> ![The Device Toolbar][ImageDeviceToolbar3]  

### Throttle the CPU only   

To throttle the CPU only and not the network, go to the **Performance** panel, click **Capture Settings** ![Capture Settings][ImageCaptureIcon], and then select **4x slowdown** or **6x slowdown** from the **CPU** list.  

> ##### Figure 18  
> The CPU list  
> ![The CPU list][ImageCPU]  

### Throttle the network only   

To throttle the network only and not the CPU, go the **Network** panel and select **Fast 3G** or **Slow 3G** from the **Throttle** list.  

> ##### Figure 19  
> The Throttle list  
> ![The Throttle list][ImageNetwork]  

Or press `Control`+`Shift`+`P` \(Windows\) or `Command`+`Shift`+`P` \(macOS\) to open the Command Menu, type `3G`, and select **Enable fast 3G throttling** or **Enable slow 3G throttling**.  

> ##### Figure 20  
> The Command Menu  
> ![The Command Menu][ImageCommandMenu]  

You can also set network throttling from the **Performance** panel.  Click **Capture Settings** ![Capture Settings][ImageCaptureIcon] and then select **Fast 3G** or **Slow 3G** from the **Network** list.  

> ##### Figure 21  
> Setting network throttling from the Performance panel  
> ![Setting network throttling from the Performance panel][ImageNetwork2]  

## Override geolocation   

To open the geolocation overriding UI click **Customize and control DevTools** `...` and then select **More tools** > **Sensors**.  

> ##### Figure 22  
> Sensors  
> ![Sensors][ImageSensors]  

Or press `Control`+`Shift`+`P` \(Windows\) or `Command`+`Shift`+`P` \(macOS\) to open the Command Menu, type `Sensors`, and then select **Show Sensors**.  

> ##### Figure 23  
> Show Sensors  
> ![Show Sensors][ImageShowSensors]  

Select one of the presets from the **Geolocation** list, or select **Custom location** to enter your own coordinates, or select **Location unavailable** to test out how your page behaves when geolocation is in an error state.  

> ##### Figure 24  
> Geolocation  
> ![Geolocation][ImageGeolocation]  

## Set orientation   

To open the orientation UI click **Customize and control DevTools** `...` and then select **More tools** > **Sensors**.  

> ##### Figure 25  
> Sensors  
> ![Sensors][ImageSensors2]  

Or press `Control`+`Shift`+`P` \(Windows\) or `Command`+`Shift`+`P` \(macOS\) to open the Command Menu, type `Sensors`, and then select **Show Sensors**.  

> ##### Figure 26  
> Show Sensors  
> ![Show Sensors][ImageShowSensors2]  

Select one of the presets from the **Orientation** list or select **Custom orientation** to set your own alpha, beta, and gamma values.  

> ##### Figure 27  
> Orientation  
> ![Orientation][ImageOrientation]  

 



<!--See [Join the DevTools community][DevToolsCommunity] for other ways to leave feedback.  -->  


<!-- image links -->  

[ImageCaptureIcon]: images/capture-settings-icon.msft.png  
[ImageCustomizeIcon]: images/customize-and-control-devtools-icon.msft.png  
[ImageDeviceToolbarIcon]: images/toggle-device-toolbar-dark-icon.msft.png  
[ImageRotateIcon]: images/rotate-dark-icon.msft.png  

[ImageDeviceToolbar]: images/toggle-device-toolbar-highlighted.msft.png "Figure 1: The Device Toolbar"  
[ImageResponsiveHandles]: images/toggle-device-toolbar-handles-highlighted.msft.png "Figure 2: The handles for changing the dimensions of the viewport when in Responsive Viewport Mode"  
[ImageShowMediaQueries]: images/toggle-device-toolbar-more-options-show-media-queries.msft.png "Figure 3: Show media queries"  
[ImageBreakpoint]: images/toggle-device-toolbar-click-breakpoint.msft.png "Figure 4: Click a breakpoint to change the width of the viewport"  
[ImageDeviceType]: images/toggle-device-toolbar-device-type-list.msft.png "Figure 5: The Device Type list"  
[ImageDeviceList]: images/toggle-device-toolbar-device-list.msft.png "Figure 6: The Device list"  
[ImageLandscape]: images/toggle-device-toolbar-landscape.msft.png "Figure 7: Landscape orientation"  
[ImageDeviceToolbar2]: images/toggle-device-toolbar-highlighted.msft.png "Figure 8: The Device Toolbar"  
[ImageShowDeviceFrame]: images/toggle-device-toolbar-option-show-device-frame.msft.png "Figure 9: Show device frame"  
[ImageIphoneFrame]: images/toggle-device-toolbar-options-device-frame-iphone-6.msft.png "Figure 10: The device frame for the iPhone 6"  
[ImageEdit]: images/toggle-device-toolbar-device-list-edit.msft.png "Figure 11: Selecting Edit"  
[ImageAddCustomDevice]: images/toggle-device-toolbar-settings-emulated-devices-add.msft.png "Figure 12: Creating a custom device"  
[ImageShowRulers]: images/toggle-device-toolbar-options-show-rulers.msft.png "Figure 13: Show rulers"  
[ImageRulers]: images/toggle-device-toolbar-rulers.msft.png "Figure 14: Rulers above and to the left of the viewport"  
[ImageZoomViewport]: images/toggle-device-toolbar-zoom.msft.png "Figure 15: Zoom"  
[ImageThrottling]: images/toggle-device-toolbar-throttle.msft.png "Figure 16: The Throttle list"  
[ImageDeviceToolbar3]: images/toggle-device-toolbar-highlighted.msft.png "Figure 17: The Device Toolbar"  
[ImageCPU]: images/performance-cpu-throttle.msft.png "Figure 18: The CPU list"  
[ImageNetwork]: images/network-throttle.msft.png "Figure 19: The Throttle list"  
[ImageCommandMenu]: images/command-menu-throttle.msft.png "Figure 20: The Command Menu"  
[ImageNetwork2]: images/performance-network-throttle.msft.png "Figure 21: Setting network throttling from the Performance panel"  
[ImageSensors]: images/toggle-device-toolbar-more-tools-sensors.msft.png "Figure 22: Sensors"  
[ImageShowSensors]: images/toggle-device-toolbar-command-menu-sensors.msft.png "Figure 23: Show Sensors"  
[ImageGeolocation]: images/toggle-device-toolbar-sensors-tokyo.msft.png "Figure 24: Geolocation"  
[ImageSensors2]: images/toggle-device-toolbar-more-tools-sensors.msft.png "Figure 25: Sensors"  
[ImageShowSensors2]: images/toggle-device-toolbar-command-menu-sensors.msft.png "Figure 26: Show Sensors"  
[ImageOrientation]: images/toggle-device-toolbar-sensors-tokyo-portrait-upside-down.msft.png "Figure 27: Orientation"  

<!-- links -->  

<!--[DevToolsCommunity]: ../index.md#community "Join the DevTools community"  -->
[DevToolsRemoteDebugging]: ../remote-debugging/index.md "Get Started with Remote Debugging Android Devices"  

[MDNWindowDevicePixelRatio]: https://developer.mozilla.org/docs/Web/API/Window/devicePixelRatio "Window.devicePixelRatio | MDN"  
[MDNUserAgent]: https://developer.mozilla.org/docs/Glossary/User_agent "User Agent | MDN"  
[WikiApproximation]: https://en.wikipedia.org/wiki/Order_of_approximation#First-order "Order of Approximation - First-order - Wikipedia"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/device-mode/index) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
