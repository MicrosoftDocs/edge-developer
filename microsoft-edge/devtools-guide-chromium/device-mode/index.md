---
title: Emulate mobile devices (Device Emulation)
description: Use virtual devices in Microsoft Edge to build mobile-first websites.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 07/19/2021
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
# Emulate mobile devices (Device Emulation)

Use the **Device Emulation** tool, sometimes called _Device Mode_, to approximate how your page looks and responds on a mobile device.

DevTools provides the following mobile device emulation features:

* [Simulate a mobile viewport](#simulate-a-mobile-viewport)
* [Throttle the network](#throttle-the-network-only)
* [Throttle the CPU](#throttle-the-cpu-only)
* [Override geolocation](#override-geolocation)
* [Set orientation](#set-orientation)
* [Set the user agent string](#set-the-user-agent-string)
* [Set user-agent client hints](#set-user-agent-client-hints)


<!-- ====================================================================== -->
## Limitations

**Device Emulation** is a [first-order approximation](https://en.wikipedia.org/wiki/Order_of_approximation#First-order) of the look and feel of your page on a mobile device.  **Device Emulation** doesn't actually run your code on a mobile device.  Instead, you simulate the mobile user experience from your laptop or desktop.

Some aspects of mobile devices are never emulated in DevTools.  For example, the architecture of mobile CPUs is different than the architecture of laptop or desktop CPUs.  When in doubt, your best bet is to actually run your page on a mobile device.

Use [Remote Debugging](../remote-debugging/index.md) to interact with the code of a page from your machine while your page actually runs on a mobile device.  You can view, change, debug, profile, or all four while you interact with the code.  Your machine can be a notebook or desktop computer.


<!-- ====================================================================== -->
## Simulate a mobile viewport

1. Open DevTools by pressing `F12`.

1. Click **Toggle device emulation** (![Toggle Device Toolbar.](../media/toggle-device-toolbar-dark-icon.msft.png)) or select **Customize and control DevTools** (`...`) > **Device Emulation** to open the UI that enables you to simulate a mobile viewport.

![The Device Toolbar.](../media/device-mode-toggle-device-toolbar-highlighted.msft.png)

By default the Device Toolbar opens in Responsive Viewport Mode.

### Responsive Viewport Mode

To quickly test the look and feel of your page across multiple screen sizes, drag the handles to resize the viewport to your required dimensions.  You can also enter specific values in the width and height boxes.  In the following figure, the width is set to `383` and the height is set to `581`.

![The handles for changing the dimensions of the viewport when in Responsive Viewport Mode.](../media/device-mode-toggle-device-toolbar-handles-highlighted.msft.png)

#### Show media queries

If you have defined media queries on your page, jump to the viewport dimensions where those media queries take effect by showing media query breakpoints above your viewport.  Select **More options** (`...`) > **Show media queries**.

![Show media queries.](../media/device-mode-toggle-device-toolbar-more-options-show-media-queries.msft.png)

Select a breakpoint to change the width of the viewport so that the media query gets triggered.

![Select a breakpoint to change the width of the viewport.](../media/device-mode-toggle-device-toolbar-click-breakpoint.msft.png)

#### Set the device type

Use the **Device Type** list to simulate a mobile device or desktop device.

If the **Device Type** list does not appear in the toolbar, click **More options** (`...`) > **Add device type**.

![The Device Type list.](../media/device-mode-toggle-device-toolbar-device-type-list.msft.png)

The following table describes the differences between the available device type options.  The Rendering method column refers to whether Microsoft Edge renders the page as a mobile or desktop viewport.  The Cursor icon column refers to what type of cursor is displayed when you hover on the page.  The Events triggered column refers to whether the page triggers `touch` or `click` events when you interact with the page.

| Option | Rendering method | Cursor icon | Events triggered |
|:--- |:--- |:--- |:--- |
| Mobile | Mobile | Circle | `touch` |
| Mobile (no touch) | Mobile | Normal | `click` |
| Desktop | Desktop | Normal | `click` |
| Desktop (touch) | Desktop | Circle | `touch` |

### Mobile Device Viewport Mode

To simulate the dimensions of a specific mobile device, select the device from the **Device** list.

![The Device list.](../media/device-mode-toggle-device-toolbar-device-list.msft.png)


#### Rotate the viewport to landscape orientation

To test your webpage in landscape orientation, rotate the viewport by clicking **Rotate** (![Rotate.](../media/rotate-dark-icon.msft.png)):

   ![Page displayed in landscape orientation.](../media/device-mode-toggle-device-toolbar-landscape.msft.png)

The **Rotate** button disappears if your **Device Toolbar** is too narrow. If the **Rotate** button is not visible, increase the width of the **Device Toolbar**.

![Resizing the Device Toolbar to show the Rotate button.](../media/device-mode-resize-device-toolbar.png)


#### Show device frame

To simulate the dimensions of a specific mobile device, click **More options** (`...`) and then select **Show device frame** to show the physical device frame around the viewport.

![The Show Device Frame menu item.](../media/device-mode-toggle-device-toolbar-option-show-device-frame.msft.png)

If a device frame isn't shown for a particular device, it means that DevTools doesn't have art for that device.


#### Add a custom mobile device

If the mobile device option that you need isn't included on the default list, you can add a custom device.  To add a custom device:

1. Click the **Device** list > **Edit**.

   ![Selecting Edit from the Device list.](../media/device-mode-toggle-device-toolbar-device-list-edit.msft.png)

1. Click **Add custom device**.

1. Enter a device name, screen width, and screen height for the custom device.  The [device pixel ratio](https://developer.mozilla.org/docs/Web/API/Window/devicePixelRatio), [user agent string](https://developer.mozilla.org/docs/Glossary/User_agent), and [device type](#set-the-device-type) fields are optional.  The device type field defaults to **Mobile**.

1. Click **Add**.

   ![Adding a custom device.](../media/device-mode-toggle-device-toolbar-settings-emulated-devices-add.msft.png)

### Show rulers

If you need to measure screen dimensions, you can use rulers to measure the screen size in pixels.

Click **More options** (`...`) > **Show rulers** to display rulers above and to the left of your viewport.

![Rulers above and to the left of the viewport.](../media/device-mode-toggle-device-toolbar-rulers.msft.png)

### Zoom the viewport

To fit the simulated viewport in your browser window, use the **Zoom** list to zoom in or out. You can also automatically adjust the zoom level to have the viewport always fit in the browser window by clicking **Auto-adjust zoom** in the **Zoom list**.

![The Zoom list.](../media/device-mode-toggle-device-toolbar-zoom.msft.png)


<!-- ====================================================================== -->
## Throttle the network and CPU

Mobile devices often have network and CPU constraints.  Test how quickly your page loads and how it responds at different internet and CPU speeds.

Click the **Throttle** list and change the preset to **Mid-tier mobile** or **Low-end mobile**.

*  **Mid-tier mobile** simulates `fast 3G` and throttles your CPU.  It is four times slower than normal.
*  **Low-end mobile** simulates `slow 3G` and throttles your CPU.  It is six times slower than normal.

All of the throttling is based upon the normal capability of your laptop or desktop.

![The Throttle list in the Device Toolbar.](../media/device-mode-toggle-device-toolbar-throttle.msft.png)

The **Throttle** list disappears if your **Device Toolbar** is too narrow. If the **Throttle** list is not visible, increase the width of the **Device Toolbar**.

![Resizing the Device Toolbar to show the Throttle list.](../media/device-mode-resize-device-toolbar.png)


### Throttle the CPU only

To throttle the CPU only and not the network:

1. Open the **Performance** tool, and click **Capture Settings** (![Capture Settings.](../media/capture-settings-icon.msft.png)).

1. Select **CPU** > **4x slowdown** or **6x slowdown**.

   ![The CPU list in the Performance panel.](../media/device-mode-performance-cpu-throttle.msft.png)


### Throttle the network only

To throttle the network only and not the CPU:

Open the **Network** tool, click the **Throttling** list, and select **Fast 3G** or **Slow 3G**.

![The Throttle list in the Network panel.](../media/device-mode-network-throttle.msft.png)

You can also throttle the network by using the **Command Menu**: press `Ctrl`+`Shift`+`P` (Windows, Linux) or `Command`+`Shift`+`P` (macOS) to open the **Command Menu**, start typing `3g`, and then select **Enable fast 3G throttling** or **Enable slow 3G throttling**.

![Selecting Enable fast or slow 3G throttling from the Command Menu.](../media/device-mode-command-menu-throttle.msft.png)

You can also throttle the network from the **Performance** tool:

1. Open the **Performance** tool and click **Capture Settings** (![Capture Settings.](../media/capture-settings-icon.msft.png)).

1. Click the **Network** list and change the preset to **Fast 3G** or **Slow 3G**.

   ![Setting network throttling from the Performance panel.](../media/device-mode-performance-network-throttle.msft.png)


<!-- ====================================================================== -->
## Override geolocation

If your page depends on geolocation information from a mobile device to render properly, provide different geolocations using the geolocation-overriding UI.

1. Click **More tools** (`+`) > **Sensors**.

   ![Sensors for geolocation.](../media/device-mode-toggle-device-toolbar-more-tools-sensors.msft.png)

   Or, open the Command Menu by selecting `Ctrl`+`Shift`+`P` (Windows, Linux) or `Command`+`Shift`+`P` (macOS).  Type `Sensors` and then select **Show Sensors**.

   ![Showing Sensors for geolocation, from the Command Menu.](../media/device-mode-toggle-device-toolbar-command-menu-sensors.msft.png)

1. In the **Sensors** tool, to select one of the preset locations, use the **Location** dropdown menu.  To enter a custom location, select **Other** and enter the coordinates of your custom location.  To test how your page behaves when location information is unavailable, select **Location unavailable**.

   ![Sensors panel with a preset location selected.](../media/device-mode-toggle-device-toolbar-sensors-tokyo.msft.png)


<!-- ====================================================================== -->
## Set orientation

If your page depends on orientation information from a mobile device to render properly, open the orientation UI.

1. Click **More tools** (`+`) > **Sensors**.

   ![The Sensors command on the More tools menu.](../media/device-mode-toggle-device-toolbar-more-tools-sensors.msft.png)

   Or, open the Command Menu by pressing `Ctrl`+`Shift`+`P` (Windows, Linux) or `Command`+`Shift`+`P` (macOS).  Type `Sensors`, and then select **Show Sensors**.

   ![Show Sensors for orientation.](../media/device-mode-toggle-device-toolbar-command-menu-sensors.msft.png)

   In the **Sensors** tool, you can select a preset orientation from the **Orientation** dropdown menu.

1. To enter your own orientation, select **Custom orientation**, and enter your own [alpha](https://developer.mozilla.org/docs/Web/API/DeviceOrientationEvent/alpha), [beta](https://developer.mozilla.org/docs/Web/API/DeviceOrientationEvent/beta), and [gamma](https://developer.mozilla.org/docs/Web/API/DeviceOrientationEvent/gamma) values.

   ![Orientation options on the Sensors panel.](../media/device-mode-toggle-device-toolbar-sensors-tokyo-portrait-upside-down.msft.png)


<!-- ====================================================================== -->
## Set the user agent string

If your page depends on the user agent string from a mobile device to render properly, use the **Network conditions** panel to provide different user agent strings.

1. Click **More tools** (`+`) > **Network conditions**.

   ![Network conditions entry in the More Tools menu.](../media/device-mode-toggle-device-toolbar-more-tools-network-conditions.msft.png)

   Or, open the Command Menu by pressing `Ctrl`+`Shift`+`P` (Windows, Linux) or `Command`+`Shift`+`P` (macOS).Type `Network conditions`, and select **Show Network conditions**.

   ![Showing network conditions.](../media/device-mode-toggle-device-toolbar-command-menu-network-conditions.msft.png)

1. Next in the **User agent** section of the **Network conditions** tool, clear the **Use browser default** checkbox.

1. Click **Custom** to select from a list of predefined user agent strings.

1. To enter your own user agent string, enter the string in **Enter a custom user agent**.

   ![Setting the user agent string to Microsoft Edge on macOS.](../media/device-mode-toggle-device-toolbar-network-conditions-macos.msft.png)

To learn more, see [Override the user agent string](override-user-agent.md).


<!-- ====================================================================== -->
## Set user-agent client hints

If your site employs [user-agent client hints](../../web-platform/user-agent-guidance.md), use the **Emulated Devices** setting panel to add devices and set user-agent client hints.

1. Open DevTools by right-clicking in a webpage and then selecting **Inspect**.

1. Click **Customize and control DevTools** >  **Settings** > **Devices**.

1. In the Emulated Devices panel, click **Add custom device** and expand **user-agent client hints**.

   ![Setting user-agent client hints.](images/emulated-devices-user-agent-client-hints.msft.png)

1. Type a unique name in the **Device Name** text box such as `Test101`.

1. Accept the default values or change **Width**, **Height**, and **Device pixel ratio** as needed.

1. Set user-agent client hints as follows:
    *  **Brand** and **Version**, such as *Edge* and *92*.  Select **+ Add Brand** to add multiple brand and version pairs.
    *  **Full Browser Version** such as *92.0.1111.0*.
    *  **Platform** and **Version** such as *Windows* and *10.0*.
    *  **Architecture** such as *x86*.
    *  **Device model** such as *Galaxy Nexus*.

   You can set or change any of the user-agent client hints.  There are no required values.

1. Click **Add**.  The new device is displayed in the selected state at the top of the **Emulated Devices** list.

You can also set user-agent client hints in the **Network** tool; see [Network features reference](../network/reference.md).


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/devtools/device-mode/) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools \& Lighthouse).

[![Creative Commons License.](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
