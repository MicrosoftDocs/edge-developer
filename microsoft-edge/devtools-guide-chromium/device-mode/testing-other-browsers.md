---
title: Emulate and test other browsers
description: Your job doesn't end with making sure your site runs great across Microsoft Edge and Android.  Even though Device Emulation (Device Mode) can simulate a range of other devices such as smart phones, we encourage you to check out solutions for emulation provided by other browsers.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 02/24/2023
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

Your job doesn't end with making sure your site runs great across Microsoft Edge and Android.  Even though the [Device Emulation](index.md) tool can simulate a range of other devices such as smart phones, we encourage you to check out solutions for emulation provided by other browsers.


<!-- ------------------------------ -->
#### Summary

*  When you don't have a particular device, or want to do a spot check on something, the best option is to emulate the device right inside your browser.

*  Device emulators and simulators enable you to mimic your development site on a range of devices, from your workstation.

*  Cloud-based emulators enable you to automate unit tests for your site across different platforms.


<!-- ====================================================================== -->
## Browser emulators

Browser emulators are great for testing the responsiveness of a site.  But a browser emulator doesn't emulate differences in API, CSS support, and certain behaviors that manifest only on a mobile browser on an actual device.  Test your site on browsers running on real devices, to be certain everything behaves as expected.


<!-- ------------------------------ -->
#### Firefox Responsive Design View

Firefox has a [responsive design view](https://developer.mozilla.org/docs/Tools/Responsive_Design_View) that encourages you to stop thinking in terms of specific devices and instead explore how your design changes at common screen sizes, or on your own screen size by dragging the edges of the window.


<!-- ------------------------------ -->
#### EdgeHTML emulation

To emulate Windows Phones, use the Microsoft Edge (EdgeHTML) [built-in emulation](/archive/microsoft-edge/legacy/developer/devtools-guide/emulation).

Use [IE 11 Emulation](/previous-versions/windows/internet-explorer/ie-developer/samples/dn255001(v=vs.85)) to simulate how your page might look in older versions of Internet Explorer.


<!-- ====================================================================== -->
## Device emulators and simulators

Device simulators and emulators simulate not just the browser environment but the entire device.  Each simulator is useful to test things that require OS integration, such as form input with virtual keyboards.


<!-- ------------------------------ -->
#### Android emulator

<!--
![Stock Browser in Android Emulator](../media/device-mode-android-emulator-stock-browser.png)
-->

At the moment, there is no way to install Microsoft Edge on an Android emulator.  However, you can use the Android Browser, the Chromium Content Shell, and Firefox for Android, which we review later in this article.  Chromium Content Shell runs the same Chromium rendering engine as Microsoft Edge, but comes without browser-specific features.

The Android emulator comes with the Android SDK which you need to download as part of [Android Studio](https://developer.android.com/sdk/installing/studio.html).  Then follow the instructions to [set up a virtual device](https://developer.android.com/tools/devices/managing-avds.html) and [start the emulator](https://developer.android.com/tools/devices/emulator.html).
After your emulator is booted, select the **Browser** icon, and test your site on the old Stock Browser for Android.

###### Chromium content shell on Android

<!--
![Android Emulator Content Shell](../media/device-mode-android-avd-contentshell.png)
-->

To install the Chromium Content Shell for Android, keep your emulator running and run the following command:

```shell
git clone https://github.com/PaulKinlan/chromium-android-installer.git
chmod u+x ./chromium-android-installer/*.sh
./chromium-android-installer/install-chromeandroid.sh
```

Now you can test your site with the Chromium Content Shell.

###### Firefox on Android

<!--
![Firefox Icon on Android Emulator](../media/device-mode-ff-on-android-emulator.png)
-->

Similar to the Chromium Content Shell, you can get an APK to install Firefox onto the emulator.

[Download the correct .apk file](https://www.mozilla.org/firefox/all/#product-android-beta).

To install the file onto an open emulator or connected Android device, run the following command:

```shell
adb install <path_to_APK>/fennec-XX.X.XX.android-arm.apk
```


<!-- ------------------------------ -->
#### iOS simulator

The iOS simulator for Mac OS X comes with Xcode, which you [install from the App Store](https://itunes.apple.com/app/xcode/id497799835).

When you are done, learn how to work with the simulator through [Apple Developer documentation](https://help.apple.com/simulator/mac/current).

> [!NOTE]
> To avoid having to open Xcode every time you want to use the iOS Simulator, open <!--Xcode, or iOS Simulator?-->it, right-click the iOS Simulator icon in your dock, and then select **Keep in Dock**.  Now just click the icon whenever you need it.


<!-- ------------------------------ -->
#### Microsoft Edge (EdgeHTML)

If you need to test your website or app with Microsoft browsers and don't have the necessary versions of Windows to do so, you can use BrowserStack, which supports testing of many combinations of Microsoft browsers and operating systems both past and present.  For example, you can test all versions of Microsoft Edge (Chromium) from version 80 onwards, and Microsoft Edge (EdgeHTML) versions 15 through 18.  Testing of Microsoft Edge is free on BrowserStack.  For more information, see [Microsoft Edge Browser Testing](https://www.browserstack.com/test-on-microsoft-edge-browser) at BrowserStack.


<!-- ====================================================================== -->
## Cloud-based emulators and simulators

If you aren't able to use the emulators and you don't have access to real devices, then cloud-based emulators are the next-best thing.  A big advantage of cloud-based emulators over real devices and local emulators is that you can automate unit tests for your site across different platforms.

The following list is a sample of cloud-based emulators and testing sites. Review the descriptions for features or capabilities to consider when selecting a testing site. Conduct your own search to find the best cloud-based emulator for your needs.

* [BrowserStack](https://www.browserstack.com/automate) helps you perform manual testing.  You select an operating system, a browser version, a device type, and a URL to browse, and then BrowserStack spins up a hosted virtual machine that you can interact with.  You can run multiple emulators in the same screen, to test the look and feel of your app across multiple devices at the same time.

* [Mobileum](https://www.mobileum.com/) doesn't use emulators, but real devices which you can control remotely.  This is useful when you need to reproduce a problem on a specific device and an issue might not appear in some reports.

* [HeadSpin](https://www.headspin.io/) helps you perform manual cross-browser testing on thousands of real devices, browsers, and operating systems.  You can record videos of complex bugs and share them through integration such as Slack, JIRA, and more.  Fast forward your go-to-market launch by testing in parallel.

* [LambdaTest](https://www.lambdatest.com/) helps you perform manual cross-browser testing on a combination of various browsers and operating systems.  You can record videos of complex bugs and share them through integration such as Microsoft Teams, Slack, and more.  You can speed-up your testing by running tests in parallel.

* [SauceLabs](https://saucelabs.com) enables you to run unit tests inside of an emulator, which can be useful for scripting a flow through your site and watching the video recording of this afterwards on various devices.  You can also do manual testing with your site.

* [TestingBot](https://testingbot.com/) helps you do both manual testing and automated testing on various browser and operating system combinations.  Test both your websites and mobile apps on TestingBot's emulators and physical devices.


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/devtools/device-mode/testing-other-browsers/) and is authored by [Meggin Kearney](https://developers.google.com/web/resources/contributors#meggin-kearney) (Technical Writer) and [Paul Bakaus](https://developers.google.com/web/resources/contributors#paul-bakaus) (Open Web Developer Advocate at Google | Tools, Performance, Animation, UX).

[![Creative Commons License](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
