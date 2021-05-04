---
description: Your job does not end with ensuring your site runs great across Microsoft Edge and Android.  Even though Device Mode is able to simulate a range of other devices like iPhones, we encourage you to check out solutions for emulation provided by other browsers.
title: Emulate and test other browsers
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/04/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
<!-- Copyright Meggin Kearney and Paul Bakaus

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->
# Emulate and test other browsers  

Your job does not end with ensuring your site runs great across Microsoft Edge and Android.  Even though Device Mode is able to simulate a range of other devices like iPhones, we encourage you to check out solutions for emulation provided by other browsers.  

### Summary  

*   When you do not have a particular device, or want to do a spot check on something, the best option is to emulate the device right inside your browser.  
*   Device emulators and simulators enable you to mimic your development site on a range of devices from your workstation.  
*   Cloud-based emulators enable you to automate unit tests for your site across different platforms.  

## Browser emulators  

Browser emulators are great for testing the responsiveness of a site, but each does not emulate differences in API, CSS support, and certain behaviors that is displayed on a mobile browser.  Test your site on browsers running on real devices to be certain everything behaves as expected.  

### Firefox Responsive Design View  

Firefox has a [responsive design view][MDNResponsiveDesignMode] that encourages you to stop thinking in terms of specific devices and instead explore how your design changes at common screen sizes or your own size by dragging the edges.  

### EdgeHTML emulation  

To emulate Windows Phones, use the Microsoft Edge \(EdgeHTML\) [built-in emulation][ArchiveMicrosoftEdgeDevtoolsEmulation].  

Use [IE 11 Emulation][Ie11DevToolsEmulation] to simulate how your page may look in older versions of Internet Explorer.  

## Device emulators and simulators  

Device simulators and emulators simulate not just the browser environment but the entire device.  Each are useful to test things that require OS integration, for example form input with virtual keyboards.  

### Android emulator  

<!--  
:::image type="complex" source="../media/device-mode-android-emulator-stock-browser.msft.png" alt-text="Stock Browser in Android Emulator" lightbox="../media/device-mode-android-emulator-stock-browser.msft.png":::
   Stock Browser in Android Emulator  
:::image-end:::  
-->  

At the moment, there is no way to install Microsoft Edge on an Android emulator.  However, you may use the Android Browser, the Chromium Content Shell, and Firefox for Android which we review later in this guide.  Chromium Content Shell runs the same Chromium rendering engine as Microsoft Edge, but comes without any of the browser specific features.  

The Android emulator comes with the Android SDK which you need to download as part of [Android Studio][AndroidStudioDownload].  Then follow the instructions to [set up a virtual device][AndroidStudioCreateManageVirtualDevices] and [start the emulator][AndroidStudioRunAppsAndroidEmulator].  
Once your emulator is booted, choose on the Browser icon, and test your site on the old Stock Browser for Android.  

#### Chromium content shell on Android  

<!--  
:::image type="complex" source="../media/device-mode-android-avd-contentshell.msft.png" alt-text="Android Emulator Content Shell" lightbox="../media/device-mode-android-avd-contentshell.msft.png":::
   Android Emulator Content Shell  
:::image-end:::  
-->  

To install the Chromium Content Shell for Android, leave your emulator running and run the following command.  

```shell
git clone https://github.com/PaulKinlan/chromium-android-installer.git
chmod u+x ./chromium-android-installer/*.sh
./chromium-android-installer/install-chromeandroid.sh
```  

Now you are able to test your site with the Chromium Content Shell.  

#### Firefox on Android  

<!--  
:::image type="complex" source="../media/device-mode-ff-on-android-emulator.msft.png" alt-text="Firefox Icon on Android Emulator" lightbox="../media/device-mode-ff-on-android-emulator.msft.png":::
   Firefox Icon on Android Emulator  
:::image-end:::  
-->  

Similar to the Chromium Content Shell, you are able to get an APK to install Firefox onto the emulator.  

[Download the correct .apk file][MozillaFirefoxDownload].  

To install the file onto an open emulator or connected Android device, run the following command.  

```shell
adb install <path_to_APK>/fennec-XX.X.XX.android-arm.apk
```  

### iOS simulator  

The iOS simulator for Mac OS X comes with Xcode, which you [install from the App Store][MacAppStoreXcode].  

When you are done, learn how to work with the simulator through [Apple Developer documentation][AppleSimulatorHelp].  

> [!NOTE]
> To avoid having to open Xcode every time you want to use the iOS Simulator, open it, hover on the iOS Simulator icon in your dock, open the contextual menu \(right-click\), and choose **Keep in Dock**.  Now just choose the icon whenever you need it.  

###  Microsoft Edge (EdgeHTML)  

:::image type="complex" source="../media/device-mode-modern-ie-vm.msft.png" alt-text="Modern IE VM" lightbox="../media/device-mode-modern-ie-vm.msft.png":::
   Modern IE VM  
:::image-end:::  

Microsoft Edge \(EdgeHTML\) Virtual Machines \(VMs\) enable you to access different versions of EdgeHTML and IE on your computer via VirtualBox \(or VMWare\).  Choose a [virtual machine on the download page][MicrosoftDeveloperEdgeVms].  

## Cloud-based emulators and simulators  

If you are not able to use the emulators and do not have access to real devices, then cloud-based emulators are the next best thing.  A big advantage of cloud-based emulators over real devices and local emulators is that you are able to automate unit tests for your site across different platforms.  

*   [BrowserStack (commercial)][BrowserStack] is the easiest to use for manual testing.  You select an operating system, select your browser version and device type, select a URL to browse, and it spins up a hosted virtual machine with which you may interact.  You are able to also run multiple emulators in the same screen, enabling you to test the look and feel of your app across multiple devices at the same time.  
*   [SauceLabs (commercial)][SauceLabs] enables you to run unit tests inside of an emulator, which may be really useful for scripting a flow through your site and watching the video recording of this afterwards on various devices.  You are also able to do manual testing with your site.  
*   [Device Anywhere (commercial)][AppExperience] does not use emulators but real devices which you are able to control remotely.  This is very useful in the event where you need to reproduce a problem on a specific device and may not display the bug using any of the options in the previous guides.  

## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- links -->  

[ArchiveMicrosoftEdgeDevtoolsEmulation]: /archive/microsoft-edge/legacy/developer/devtools-guide/emulation "Emulation | Microsoft Docs"  

[Ie11DevToolsEmulation]: /previous-versions/windows/internet-explorer/ie-developer/samples/dn255001(v=vs.85) "Emulate browsers, screen sizes, and GPS locations | Microsoft Docs"  

[MicrosoftDeveloperEdgeVms]: https://developer.microsoft.com/microsoft-edge/tools/vms "Download virtual machines"  

[AndroidStudioCreateManageVirtualDevices]: https://developer.android.com/tools/devices/managing-avds.html "Create and manage virtual devices | Android Developers"  
[AndroidStudioDownload]:  https://developer.android.com/sdk/installing/studio.html "Download Android Studio and SDK tools | Android Developers"  
[AndroidStudioRunAppsAndroidEmulator]: https://developer.android.com/tools/devices/emulator.html "Run apps on the Android Emulator | Android Developers"  

[AppExperience]: https://www.sigos.com/app-experience/ "App Experience"  
[AppleSimulatorHelp]: https://help.apple.com/simulator/mac/current "Simulator Help - current | Apple"  
[BrowserStack]: https://www.browserstack.com/automate "BrowserStack"  
[MacAppStoreXcode]: https://itunes.apple.com/app/xcode/id497799835 "Xcode on the Mac App Store"  
[MDNResponsiveDesignMode]: https://developer.mozilla.org/docs/Tools/Responsive_Design_View "Responsive Design Mode | MDN"  
[MozillaFirefoxDownload]: https://www.mozilla.org/firefox/all/#product-android-beta "Download the Firefox Browser"  
[SauceLabs]: https://saucelabs.com "Sauce Labs"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/device-mode/testing-other-browsers) and is authored by [Meggin Kearney][MegginKearney] \(Tech Writer\) and [Paul Bakaus][PaulBakaus] \(Open Web Developer Advocate at Google | Tools, Performance, Animation, UX\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors#kayce-basques  
[MegginKearney]: https://developers.google.com/web/resources/contributors#meggin-kearney  
[PaulBakaus]: https://developers.google.com/web/resources/contributors#paul-bakaus  
