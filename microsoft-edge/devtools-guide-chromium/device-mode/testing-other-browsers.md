---
title: Emulate and Test Other Browsers
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 11/20/2019
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
<!-- Copyright Kayce Basques 

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->





# Emulate and Test Other Browsers 




Your job does not end with ensuring your site runs great across Microsoft Edge and Android.  Even though Device Mode is able to simulate a range of other devices like iPhones, we encourage you to check out other browsers solutions for emulation.  

### TL;DR   

*   When you do not have a particular device, or want to do a spot check on something, the best option is to emulate the device right inside your browser.  
*   Device emulators and simulators enable you to mimic your development site on a range of devices from your workstation.  
*   Cloud-based emulators enable you to automate unit tests for your site across different platforms.  

## Browser emulators  

Browser emulators are great for testing the responsiveness of a site, but each does not emulate differences in API, CSS support, and certain behaviors that you see on a mobile browser.  Test your site on browsers running on real devices to be certain everything behaves as expected.  

### Firefox Responsive Design View  

Firefox has a [responsive design view][MDNResponsiveDesignMode] that encourages you to stop thinking in terms of specific devices and instead explore how your design changes at common screen sizes or your own size by dragging the edges.  

### Edge F12 Emulation  

To emulate Windows Phones, use the Microsoft Edge [built-in emulation][DevToolsEdgeHtmlEmulation].  

Since Edge does not ship with legacy compatibility, use [IE 11 Emulation][Ie11DevToolsEmulation] to simulate how your page would look in older versions of Internet Explorer.  

## Device emulators and simulators  

Device simulators and emulators simulate not just the browser environment but the entire device.  Each are useful to test things that require OS integration, for example form input with virtual keyboards.  

### Android Emulator  

> ##### Figure 1  
> Stock Browser in Android Emulator  
> ![Stock Browser in Android Emulator][ImageAndroidEmulatorStockBrowser]  

At the moment, there is no way to install Microsoft Edge on an Android emulator.  However, may use the Android Browser, the Chromium Content Shell, and Firefox for Android which we review later in this guide.  Chromium Content Shell uses the same Microsoft Edge rendering engine, but comes without any of the browser specific features.  

The Android emulator comes with the Android SDK which you need to download as part of [Android Studio][AndroidStudioDownload].  Then follow the instructions to [set up a virtual device][AndroidStudioCreateManageVirtualDevices] and [start the emulator][AndroidStudioRunAppsAndroidEmulator].  

Once your emulator is booted, click on the Browser icon, and test your site on the old Stock Browser for Android.  

#### Chromium Content Shell on Android  

> ##### Figure 2  
> Android Emulator Content Shell  
> ![Android Emulator Content Shell][ImageAndroidEmulatorContentShell]  

To install the Chromium Content Shell for Android, leave your emulator running and run the following commands at a command prompt:  

```shell
git clone https://github.com/PaulKinlan/chromium-android-installer.git
chmod u+x ./chromium-android-installer/*.sh
./chromium-android-installer/install-chromeandroid.sh
```  

Now you are able to test your site with the Chromium Content Shell.  

#### Firefox on Android  

> ##### Figure 3  
> Firefox Icon on Android Emulator  
> ![Firefox Icon on Android Emulator][ImageAndroidEmulatorFirefoxBrowser]  

Similar to the Chromium Content Shell, you are able to get an APK to install Firefox onto the emulator.  

[Download the right .apk file][MozillaFirefoxDownload].  

From here, you are able to install the file onto an open emulator or connected Android device with the following command:  

```shell
adb install &lt;path to APK&gt;/fennec-XX.X.XX.android-arm.apk
```  

### iOS Simulator  

The iOS simulator for Mac OS X comes with Xcode, which you [install from the App Store][MacAppStoreXcode].  

When you are done, learn how to work with the simulator through [Apple Developer documentation][AppleSimulatorHelp].  

> [!NOTE]
> To avoid having to open Xcode every time you want to use the iOS Simulator, open it, then right-click the iOS Simulator icon in your dock and select `Keep in Dock`.  Now just click this icon whenever you need it.  

### Modern.IE  

> ##### Figure 4  
> Modern IE VM  
> ![Modern IE VM][ImageVMModernIe]  

Modern.IE Virtual Machines enable you to access different versions of IE on your computer via VirtualBox \(or VMWare\).  Choose a [virtual machine on the download page][IeEdgeVmsDownloads].  

## Cloud-based emulators and simulators  

If you are not able to use the emulators and do not have access to real devices, then cloud-based emulators are the next best thing.  A big advantage of cloud-based emulators over real devices and local emulators is that you are able to automate unit tests for your site across different platforms.  

*   [BrowserStack (commercial)][BrowserStack] is the easiest to use for manual testing.  You select an operating system, select your browser version and device type, select a URL to browse, and it spins up a hosted virtual machine with which you may interact.  You are able to also run multiple emulators in the same screen, enabling you to test the look and feel of your app across multiple devices at the same time.  
*   [SauceLabs (commercial)][SauceLabs] enables you to run unit tests inside of an emulator, which may be really useful for scripting a flow through your site and watch the video recording of this afterwards on various devices.  You are able to also do manual testing with your site.  
*   [Device Anywhere (commercial)][AppExperience] does not use emulators but real devices which you are able to control remotely.  This is very useful in the event where you need to reproduce a problem on a specific device and are not able to see the bug using any of the options in the previous guides.  

 



<!-- image links -->  

[ImageAndroidEmulatorStockBrowser]: images/android-emulator-stock-browser.msft.png "Figure 1: Stock Browser in Android Emulator"  
[ImageAndroidEmulatorContentShell]: images/android-avd-contentshell.msft.png "Figure 2: Android Emulator Content Shell"  
[ImageAndroidEmulatorFirefoxBrowser]: images/ff-on-android-emulator.msft.png "Figure 3: Firefox Icon on Android Emulator"  
[ImageVMModernIe]: images/modern-ie-simulator.msft.png "Figure 4: Modern IE VM"  

<!-- links -->  

[DevToolsEdgeHtmlEmulation]: ../../devtools-guide/emulation "DevTools (EdgeHTML) - Emulation"  

[AppExperience]: https://www.sigos.com/app-experience/ "App Experience"  
[AppleSimulatorHelp]: https://help.apple.com/simulator/mac/current "Simulator Help - current | Apple"  
[BrowserStack]: https://www.browserstack.com/automate "BrowserStack"  
[IeEdgeVmsDownloads]: https://developer.microsoft.com/microsoft-edge/tools/vms/ "Download virtual machines - Microsoft Edge"  
[Ie11DevToolsEmulation]: https://docs.microsoft.com/previous-versions/windows/internet-explorer/ie-developer/samples/dn255001(v=vs.85) "Emulate browsers, screen sizes, and GPS locations"  
[MacAppStoreXcode]: https://itunes.apple.com/app/xcode/id497799835 "Xcode on the Mac App Store"  
[MDNResponsiveDesignMode]: https://developer.mozilla.org/docs/Tools/Responsive_Design_View "Responsive Design Mode | MDN"  
[MozillaFirefoxDownload]: https://www.mozilla.org/firefox/all/#product-android-beta "Download the Firefox Browser"  
[SauceLabs]: https://saucelabs.com "Sauce Labs"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/device-mode/testing-other-browsers) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools & Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: http://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
