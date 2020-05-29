---
title: Get Started with Remote Debugging Android Devices
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/28/2020
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

# Get started with remote debugging Android devices  

Remote debug live content on an Android device from your Windows or macOS computer.  This tutorial page teaches you how to complete the following actions.  

*   Set up your Android device for remote debugging, and discover it from your development machine.  
*   Inspect and debug live content on your Android device from your development machine.  
*   Screencast content from your Android device onto a DevTools instance on your development machine.  

<!--  
:::image type="complex" source="../media/remote-debugging--remote-debugging.msft.png" alt-text="Remote Debugging lets you inspect a page running on an Android device from your development machine" lightbox="../media/remote-debugging--remote-debugging.msft.png":::
   old Figure 1.  Remote Debugging lets you inspect a page running on an Android device from your development machine  
:::image-end:::  
-->  

## Step 1: Discover your Android device  

The workflow below works for most users.  See [Troubleshooting: DevTools is not detecting the Android device](#troubleshooting-devtools-is-not-detecting-the-android-device) for more help.  

1.  Open the **Developer Options** screen on your Android.  For more information, see [Configure On-Device Developer Options](https://developer.android.com/studio/debug/dev-options.html).  
1.  Select **Enable USB Debugging**.  
1.  On your development machine, open Microsoft Edge.  
1.  Navigate to the `edge://inspect` page in Microsoft Edge.  
    
    :::image type="complex" source="../media/remote-debugging-edge-inspect-no-targets.msft.png" alt-text="The edge://inspect page in Microsoft Edge" lightbox="../media/remote-debugging-edge-inspect-no-targets.msft.png":::
       Figure 1.  The `edge://inspect` page in Microsoft Edge  
    :::image-end:::  
    
1.  Connect your Android device directly to your development machine using a USB cable.  The first time you try to connect, you usually see prompt about DevTools detecting an unknown device.  Accept the **Allow USB Debugging** permission prompt on your Android device.  
    
    :::image type="complex" source="../media/remote-debugging-android-permissions-prompt.msft.png" alt-text="The Allow USB Debugging permission prompt on an Android device" lightbox="../media/remote-debugging-android-permissions-prompt.msft.png":::
       Figure 2.  The **Allow USB Debugging** permission prompt on an Android device  
    :::image-end:::  
    
1.  If you see the model name of your Android device, then Microsoft Edge has successfully established the connection to your device.  Continue to [Step 2](#step-2-debug-content-on-your-android-device-from-your-development-machine).  
    
    <!--  
    :::image type="complex" source="../media/remote-debugging--unknown-device.msft.png" alt-text="The Remote Devices tab has successfully detected an unknown device that is pending authorization" lightbox="../media/remote-debugging--unknown-device.msft.png":::
       old Figure 4.  The **Remote Devices** tab has successfully detected an unknown device that is pending authorization  
    :::image-end:::
    -->  
    
### Troubleshooting: DevTools is not detecting the Android device  

Use the following tips to help you troubleshoot the correct settings for your hardware.  

*   If you are using a USB hub, try connecting your Android device directly to your development machine.  
*   Try unplugging the USB cable between your Android device and development machine, and then re-plugging your USB cable.  Complete the task while your Android and development machine screens are unlocked.  
*   Make sure that your USB cable works.  You should be able to inspect files on your Android device from your development machine.  

Use the following tips to help you verify that your software is set up correctly.  

*   If your development machine is running Windows, try manually installing the USB drivers for your Android device.  For more information, see [Install OEM USB Drivers][AndroidUSBDrivers].  
*   Some combinations of Windows and Android devices \(especially Samsung\) require additional settings.  For more information, see [DevTools Devices does not detect device when plugged in][StackOverflowDevicesNotDetected].  

Use the following tips to help you troubleshoot not seeing the **Allow USB Debugging** prompt on your Android device.  

*   Disconnecting and then re-connecting the USB cable while DevTools is in focus on your development machine and your Android homescreen is showing.  
    
    > [!NOTE]
    > You may not see the prompt if your Android or development machine screens are locked.  

*   Updating the display settings for your Android device and development machine so that each never goes to sleep.  
*   Setting the USB mode for Android to PTP.  For more information, see [Galaxy S4 does not show Authorize USB debugging dialog box][StackExchangeGalaxyS4DoesNotShowDialogBox].  
*   Select **Revoke USB Debugging Authorizations** from the **Developer Options** screen on your Android device to reset it to a fresh state.  

If you find a solution that is not mentioned on this page or in [DevTools Devices does not detect device when plugged in][StackOverflowDevicesNotDetected] on Stack Overflow, please add your solution to the Stack Overflow question<!--, or [open an issue in the webfundamentals repository][GitHubWebFundamentalsNewIssue]-->!  

## Step 2: Debug content on your Android device from your development machine  

1.  Open Microsoft Edge on your Android device.  
1.  From the `edge://inspect` page, you see the model name of your Android device, followed by the device serial number.  Below that, you should see the version of Microsoft Edge running on the device, with the version number in parentheses.  Each open Microsoft Edge tab gets a unique section.  You may interact with that tab from a section.  <!--If there are any apps using WebView, you see a section for each of those apps, too.  --><!--In [**Figure 5**](#figure-5) there are no tabs or WebViews open.  -->  
    
    :::image type="complex" source="../media/remote-debugging-edge-inspect-with-targets.msft.png" alt-text="A connected remote device" lightbox="../media/remote-debugging-edge-inspect-with-targets.msft.png":::
       Figure 3.  A connected remote device  
    :::image-end:::  
    
1.  In the **Open tab with url** text box, enter a URL and then select **Open**.  The page opens in a new tab on your Android device.  
1.  Select **inspect** next to the URL that you just opened.  A new DevTools instance opens.  

<!-- The version of Microsoft Edge running on your Android device determines the version of DevTools that opens on your development machine.  
    So, if your Android device is running a very old version of Microsoft Edge, the DevTools instance may look very different than what you are used to.   -->

### More actions: focus, reload, or close a tab  

Select **focus tab**, **reload**, or **close** next to the tab that you want to focus, reload, or close.  

:::image type="complex" source="../media/remote-debugging-edge-inspect-with-targets-buttons.msft.png" alt-text="The buttons for focusing, reloading, or closing a tab" lightbox="../media/remote-debugging-edge-inspect-with-targets-buttons.msft.png":::
   Figure 4.  The buttons for focusing, reloading, or closing a tab  
:::image-end:::  

### Inspect elements  

Go to the **Elements** panel of your DevTools instance, and hover over an element to highlight it in the viewport of your Android device.  

You may also select an element on your Android device screen to select it in the **Elements** panel.  Select **Select Element** ![Select Element][ImageSelectElementIcon] icon on your DevTools instance, and then select the element on your Android device screen.  

> [!NOTE]
> **Select Element** is disabled after the first selection, so you must re-enable it every time you want to use the feature.  

### Screencast your Android screen to your development machine  

Select **Toggle Screencast** ![Toggle Screencast][ImageToggleScreencastIcon] icon to view the content of your Android device in your DevTools instance.  

You are able to interact with the screencast in the following ways.  

*   Clicks are translated into taps, firing proper touch events on the device.  
*   Keystrokes on your computer are sent to the device.  
*   To simulate a pinch gesture, hold `Shift` while dragging.  
*   To scroll, use your trackpad or mouse wheel, or fling with your mouse pointer.

> [!NOTE]
> Use the following tips to help you screencast.  
> 
> *   Screencasts only display page content.  Transparent portions of the screencast represent device interfaces, such as the Microsoft Edge address bar, the Android status bar, or the Android keyboard.  
> *   Screencasts negatively affect frame rates.  Disable screencasting while measuring scrolls or animations to get a more accurate picture of the performance of your page.  
> *   If your Android device screen locks, the content of your screencast disappears.  Unlock your Android device screen to automatically resume the screencast.  

<!-- image links -->  

[ImageSelectElementIcon]: /microsoft-edge/devtools-guide-chromium/media/select-element-icon.msft.png  
[ImageToggleScreencastIcon]: /microsoft-edge/devtools-guide-chromium/media/toggle-screencast-icon.msft.png  

<!--[ImageRemoteDebugging]: /microsoft-edge/devtools-guide-chromium/media/remote-debugging--remote-debugging.msft.png "old Figure 1:  Remote Debugging lets you inspect a page running on an Android device from your development machine"  -->  
<!--[ImageEdgeInspect]: /microsoft-edge/devtools-guide-chromium/media/remote-debugging-edge-inspect-no-targets.msft.png "Figure 1: The edge://inspect page in Microsoft Edge"  -->  
<!--[ImageAndroidPermissionPrompt]: /microsoft-edge/devtools-guide-chromium/media/remote-debugging-android-permissions-prompt.msft.png "Figure 2: The Allow USB Debugging permission prompt on an Android device"  -->  
<!--[ImageConnectedRemoteDevice]: /microsoft-edge/devtools-guide-chromium/media/remote-debugging-edge-inspect-with-targets.msft.png "Figure 3: A connected remote device"  -->  
<!-- [ImageReload]:  /microsoft-edge/devtools-guide-chromium/media/remote-debugging-edge-inspect-with-targets-buttons.msft.png "Figure 4: The buttons for focusing, reloading, or closing a tab"  -->  
<!--[ImageUnknownDevice]: /microsoft-edge/devtools-guide-chromium/media/remote-debugging--unknown-device.msft.png "old Figure 4:  The Remote Devices tab has successfully detected an unknown device that is pending authorization"  -->  

<!-- links -->  

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
