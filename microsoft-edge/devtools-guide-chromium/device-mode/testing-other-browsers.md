---
title: Emulate and test other browsers
description: Learn to test your website on other browsers, to make sure your website works well for all users.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 07/17/2024
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

To make sure your website works for all your users, test your website on other browsers and devices. Not all of your users will be using the browser and device that you used when developing. We encourage you to check out solutions for emulation provided by other browsers, in addition to using the **Device Emulation** tool in Microsoft Edge DevTools.


<!-- ------------------------------ -->
#### Summary

There are several different levels of testing that you can do to test your website under different conditions:

* **Browser emulators** help you to quickly test how your website looks and behaves at different screen sizes and resolutions, with touch event emulation, and by overriding the User-Agent string that the browser sends.  You use browser emulators from the browser that you're developing on.  See [Browser emulators](#browser-emulators), below.

* **Device emulators and simulators** enable you to run other devices from your development machine and test your website as if you were using these other devices.  See [Device emulators and simulators](#device-emulators-and-simulators), below.

* **Cloud-based emulators** enable you to run automated tests for your website across different platforms.  See [Cloud-based emulators and simulators](#cloud-based-emulators-and-simulators), below.


<!-- ====================================================================== -->
## Browser emulators

Browser emulators are great for testing the way your website looks and behaves at different screen sizes and resolutions, or when touch events are enabled, or when the User-Agent string is set to another browser's User-Agent string.

You use browser emulators from the browser you're developing on. For example, in Microsoft Edge, you can use the **Device Emulation** tool in DevTools to get an approximation of how your website looks and behaves on different devices.  For more information on how to use the **Device Emulation** tool in Microsoft Edge DevTools, see [Emulate mobile devices (Device Emulation)](./index.md).

Browser emulators don't emulate differences in web API support or CSS support.  For example, the **Device Emulation** tool in Microsoft Edge doesn't emulate how the different web APIs or CSS features that your site might be using are supported in Firefox or Safari.  To be certain everything behaves as expected, test your site on browsers running on real devices.

Here are some browser emulators you can use to test your website on other browsers:

* [Firefox Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html).
* [Chrome Device Mode](https://developer.chrome.com/docs/devtools/device-mode).
* [Safari Responsive Design Mode](https://developer.apple.com/documentation/safari-developer-tools/responsive-design-mode).


<!-- ====================================================================== -->
## Device emulators and simulators

Device simulators and emulators simulate the entire device, rather than just simulating the browser environment.  Each simulator is useful to test aspects that require integration with the particular operating system, such as form input by using mobile device keyboards.

You install device emulators and simulators on your development machine, so that you can continue to test your website on the same machine on which you're developing, while simulating the experience of using a different device.


<!-- ------------------------------ -->
#### Android emulator

At the moment, there is no way to install Microsoft Edge on an Android emulator.  However, you can use the Android Browser, the Chromium Content Shell, and Firefox for Android, which are covered later in this article.  Chromium Content Shell runs the same Chromium rendering engine as Microsoft Edge, but comes without browser-specific features.

To use the Android emulator:

1. Download the Android emulator, which is packaged as part of the Android SDK, by downloading [Android Studio](https://developer.android.com/sdk/installing/studio.html).

1. Set up a virtual device, by following the steps in [Create and manage virtual devices](https://developer.android.com/tools/devices/managing-avds.html).

1. Start the emulator, by following the steps in [Run apps on the Android Emulator](https://developer.android.com/tools/devices/emulator.html).

1. After your emulator is booted, select the **Browser** icon, and test your website on the old Stock Browser for Android.


<!-- ---------- -->
###### Chromium content shell on Android

To install the Chromium Content Shell for Android, keep your emulator running and run the following command:

```shell
git clone https://github.com/PaulKinlan/chromium-android-installer.git
chmod u+x ./chromium-android-installer/*.sh
./chromium-android-installer/install-chromeandroid.sh
```

Now you can test your website with the Chromium Content Shell.


<!-- ---------- -->
###### Firefox on Android

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

To avoid having to open Xcode every time you want to use the iOS Simulator, open the iOS Simulator, right-click the iOS Simulator icon in your dock, and then select **Keep in Dock**.  Now you can just click the icon whenever you need it.


<!-- ------------------------------ -->
#### Virtual machines

To test your website on other operating systems, you can run virtual machines on your development device. For example, **Hyper-V** is a virtualization tool that lets you run various versions of Windows and Linux. To learn more, see [Introduction to Hyper-V on Windows 10](/virtualization/hyper-v-on-windows/about/).

For other virtual machines, see [Virtual machines](https://developer.mozilla.org/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies#virtual_machines) in _Strategies for carrying out testing_ at MDN.


<!-- ====================================================================== -->
## Cloud-based emulators and simulators

Cloud-based emulators and simulators are commercial solutions to test your website on different devices and browsers without installing anything on your development machine.  They are useful when you don't have access to real devices or when you can't use local emulators. Cloud-based solutions are also useful for automating tests across different platforms.

See [Emulators](https://developer.mozilla.org/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies#emulators) in _Strategies for carrying out testing_ at MDN.


<!-- ====================================================================== -->
## See also
<!-- all links that are in the article -->

* [Emulate mobile devices (Device Emulation)](./index.md)
* [Introduction to Hyper-V on Windows 10](/virtualization/hyper-v-on-windows/about/)

Responsive design:
* [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) - Firefox.
* [Simulate mobile devices with device mode](https://developer.chrome.com/docs/devtools/device-mode) - Chrome.
* [Responsive Design Mode](https://developer.apple.com/documentation/safari-developer-tools/responsive-design-mode) - Safari.

Android:
* [Android Studio](https://developer.android.com/sdk/installing/studio.html)
* [Create and manage virtual devices](https://developer.android.com/tools/devices/managing-avds.html) - to set up a virtual device.
* [Run apps on the Android Emulator](https://developer.android.com/tools/devices/emulator.html) - to start the emulator.
* [Choose which Firefox Browser to download in your language: Firefox Android Beta](https://www.mozilla.org/firefox/all/#product-android-beta) - to download the correct .apk file.

Apple:
* [Xcode](https://itunes.apple.com/app/xcode/id497799835)
* [Simulator Help](https://help.apple.com/simulator/mac/current)

MDN:
* [Strategies for carrying out testing](https://developer.mozilla.org/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies) at MDN.<!--present article doesn't have this non-anchor link-->
   * [Emulators](https://developer.mozilla.org/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies#emulators)
   * [Virtual machines](https://developer.mozilla.org/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies#virtual_machines)


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/devtools/device-mode/testing-other-browsers/) and is authored by Meggin Kearney and Paul Bakaus.

[![Creative Commons License](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
