---
title: Get Started with Remote Debugging Android Devices
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




<!--
<style>
.devtools-inline {
  max-height: 1em;
  vertical-align: middle;
}
</style>
-->  
# Get Started with Remote Debugging Android Devices   



Remote debug live content on an Android device from your Windows or macOS computer.  This tutorial teaches you how to:  

*   Set up your Android device for remote debugging, and discover it from your development machine.  
*   Inspect and debug live content on your Android device from your development machine.  
*   Screencast content from your Android device onto a DevTools instance on your development machine.  

<!--
> ##### Figure 1  
> Remote Debugging lets you inspect a page running on an Android device from your development machine  
> ![Remote Debugging lets you inspect a page running on an Android device from your development machine][ImageRemoteDebugging]  -->

## Step 1: Discover your Android device   

The workflow below works for most users.  See [Troubleshooting: DevTools is not detecting the Android device](#troubleshooting-devtools-is-not-detecting-the-android-device) for more help.  

1.  Open the **Developer Options** screen on your Android.  See [Configure On-Device Developer Options](https://developer.android.com/studio/debug/dev-options.html).  
1.  Select **Enable USB Debugging**.  
1.  On your development machine, open Microsoft Edge.  
1.  Open **DevTools**.  
1.  In DevTools, click the **Main Menu** `...` then select **More tools** > **Remote devices**.  
    
    > ##### Figure 1  
    > Opening the **Remote Devices** tab via the **Main Menu**  
    > ![Opening the Remote Devices tab via the Main Menu][ImageOpenRemoteDevices]  

1.  In DevTools, open the **Settings** tab.  

1.  Make sure that the **Discover USB devices** checkbox is enabled.  
    
    > ##### Figure 2  
    > The **Discover USB Devices** checkbox is enabled  
    > ![The Discover USB Devices checkbox is enabled][ImageDiscoverUSBDevices]  

1.  Connect your Android device directly to your development machine using a USB cable.  The first time you do this, you usually see that DevTools has detected an unknown device.  If you see a green dot and the text **Connected** below the model name of your Android device, then DevTools has successfully established the connection to your device.  Continue to [Step 2](#step-2-debug-content-on-your-android-device-from-your-development-machine).  
    <!--
    > ##### Figure 4  
    > The **Remote Devices** tab has successfully detected an unknown device that is pending authorization  
    > ![The Remote Devices tab has successfully detected an unknown device that is pending authorization][ImageUnknownDevice]  -->

1.  If your device is showing up as **Unknown**, accept the **Allow USB Debugging** permission prompt on your Android device.  

### Troubleshooting: DevTools is not detecting the Android device   

Make sure that your hardware is set up correctly:  

*   If you are using a USB hub, try connecting your Android device directly to your development machine instead.  
*   Try unplugging the USB cable between your Android device and development machine, and then plugging it back in.  Do it while your Android and development machine screens are unlocked.  
*   Make sure that your USB cable works.  You should be able to inspect files on your Android device from your development machine.  

Make sure that your software is set up correctly:  

*   If your development machine is running Windows, try manually installing the USB drivers for your Android device.  See [Install OEM USB Drivers][AndroidUSBDrivers].  
    
*   Some combinations of Windows and Android devices (especially Samsung) require extra set up.  See [DevTools Devices does not detect device when plugged in][StackOverflowDevicesNotDetected].  
    
If you do not see the **Allow USB Debugging** prompt on your Android device try:  

*   Disconnecting and then re-connecting the USB cable while DevTools is in focus on your development machine and your Android homescreen is showing.  In other words, sometimes the prompt does not show up when your Android or development machine screens are locked.
*   Updating the display settings for your Android device and development machine so that they never go to sleep.  
*   Setting the USB mode for Android to PTP.  See [Galaxy S4 does not show Authorize USB debugging dialog box][StackExchangeGalaxyS4DoesNotShowDialogBox].  
*   Select **Revoke USB Debugging Authorizations** from the **Developer Options** screen on your Android device to reset it to a fresh state.  

If you find a solution that is not mentioned in this section or in [DevTools Devices does not detect device when plugged in][StackOverflowDevicesNotDetected]!  

## Step 2: Debug content on your Android device from your development machine   

1.  Open Microsoft Edge on your Android device.  

1.  In the **Remote Devices** tab, click the tab that matches your Android device model name.  
    At the top of this page, you see the model name of your Android device, followed by its serial number.  Below that, you should see the version of Microsoft Edge running on the device, with the version number in parentheses.  Each open Microsoft Edge tab gets its own section.  You may interact with that tab from this section.  <!--If there are any apps using WebView, you see a section for each of those apps, too.  --><!--In [**Figure 5**](#figure-5) there are no tabs or WebViews open.  -->
    <!--
    > ##### Figure 5  
    > A connected remote device  
    > ![A connected remote device][ImageConnectedRemoteDevice]  -->

1.  In the **New tab** text box, enter a URL and then click **Open**.  The page opens in a new tab on your Android device.  

1.  Click **Inspect** next to the URL that you just opened.  A new DevTools instance opens.  The version of Microsoft Edge running on your Android device determines the version of DevTools that opens on your development machine.  
    So, if your Android device is running a very old version of Microsoft Edge, the DevTools instance may look very different than what you are used to.  

### More actions: reload, focus, or close a tab   

Click **More Options** `...` next to the tab that you want to reload, focus, or close.  
<!--
> ##### Figure 6  
> The menu for reloading, focusing, or closing a tab  
> ![The menu for reloading, focusing, or closing a tab][ImageReload]  -->

### Inspect elements   

Go to the **Elements** panel of your DevTools instance, and hover over an element to highlight it in the viewport of your Android device.  

You may also tap an element on your Android device screen to select it in the **Elements** panel.  Click **Select Element** ![Select Element][ImageSelectElementIcon] on your DevTools instance, and then tap the element on your Android device screen.  Note that **Select Element** is disabled after the first touch, so you need to re-enable it every time you want to use this feature.  

### Screencast your Android screen to your development machine   

Click **Toggle Screencast** ![Toggle Screencast][ImageToggleScreencastIcon] to view the content of your Android device in your DevTools instance.  

You are able to interact with the screencast in multiple ways:  

*   Clicks are translated into taps, firing proper touch events on the device.  
*   Keystrokes on your computer are sent to the device.  
*   To simulate a pinch gesture, hold `Shift` while dragging.  
*   To scroll, use your trackpad or mouse wheel, or fling with your mouse pointer.

Some notes on screencasts:  

*   Screencasts only display page content.  Transparent portions of the screencast represent device interfaces, such as the Microsoft Edge address bar, the Android status bar, or the Android keyboard.  
*   Screencasts negatively affect frame rates.  Disable screencasting while measuring scrolls or animations to get a more accurate picture of the performance of your page.  
*   If your Android device screen locks, the content of your screencast disappears.  Unlock your Android device screen to automatically resume the screencast.  





<!-- image links -->  

[ImageSelectElementIcon]: images/select-element-icon.msft.png  
[ImageThreeDotIcon]: ../images/three-dot-icon.msft.png  
[ImageToggleScreencastIcon]: images/toggle-screencast-icon.msft.png  

<!--[ImageConnectedRemoteDevice]: images/connected-remote-device.msft.png "Figure 5:  A connected remote device"  -->
[ImageDiscoverUSBDevices]: images/remote-devices-tab.msft.png "Figure 2:  The Discover USB Devices checkbox is enabled"  
[ImageOpenRemoteDevices]: images/more-tools-remote-devices.msft.png "Figure 1: Opening the Remote Devices tab via the Main Menu"  
<!--[ImageReload]: images/reload.msft.png "Figure 6: The menu for reloading, focusing, or closing a tab"  -->
<!--[ImageRemoteDebugging]: images/remote-debugging.msft.png "Figure 1:  Remote Debugging lets you inspect a page running on an Android device from your development machine"  -->  
<!--[ImageUnknownDevice]: images/unknown-device.msft.png "Figure 4:  The Remote Devices tab has successfully detected an unknown device that is pending authorization"  -->  

<!-- links -->  

<!--[DevToolsOpen]: ../open.md ""  -->  

[AndroidUSBDrivers]: https://developer.android.com/tools/extras/oem-usb.html "Install OEM USB drivers | Android Developers"  
<!-- [GitHubWebFundamentalsNewIssue]: https://github.com/Alphabet/webfundamentals/issues/new?title=[Remote%20Debugging] "GitHub - Web Fundamentals - New Issue"  -->  
[StackOverflowDevicesNotDetected]: https://stackoverflow.com/questions/21925992 "DevTools Devices does not detect device when plugged in - Stack Overflow"  
[StackExchangeGalaxyS4DoesNotShowDialogBox]: https://android.stackexchange.com/questions/101933 "adb - Android Enthusiast Stack Exchange"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/remote-debugging/index) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
