---
title: Emulate and test other browsers
description: Learn to test your website on other browsers, to make sure your website works well for all users.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 07/16/2024
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

There are several different levels of testing that you can do to test your site under different conditions:

* **Browser emulators** help you to quickly test how your website looks and behave at different screen sizes and resolutions, with touch event emulation, and by overriding the user-agent string the browser sends. You use browser emulators from the browser you're developing on. See [Browser emulators](#browser-emulators), below.

* **Device emulators and simulators** enable you to run other devices from the device you're developing on and test your website on these other devices. See [Device emulators and simulators](#device-emulators-and-simulators), below.

* **Cloud-based emulators** enable you to run automated tests for your site across different platforms. See [Cloud-based emulators and simulators](#cloud-based-emulators-and-simulators), below.


<!-- ====================================================================== -->
## Browser emulators

Browser emulators are great for testing the way your site looks and behaves at different screen sizes and resolutions, or when touch events are enabled, or when the user-agent string is set to another browser's user-agent string.

You use browser emulators from the browser you're developing on. For example, in Microsoft Edge, you can use the **Device Emulation** tool in DevTools to get an approximation of how your site looks and behaves on different devices.  See [Emulate mobile devices (Device Emulation)](./index.md) for more information on how to use the **Device Emulation** tool in Microsoft Edge DevTools.

Browser emulators don't emulate differences in web API or CSS support. For example, the **Device Emulation** tool in Microsoft Edge doesn't emulate how the different web APIs or CSS features that your site might be using are supported in Firefox or Safari. Test your site on browsers running on real devices, to be certain everything behaves as expected.

Here are some browser emulators you can use to test your site on other browsers:

* [Firefox Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html).
* [Chrome Device Mode](https://developer.chrome.com/docs/devtools/device-mode).
* [Safari Responsive Design Mode](https://developer.apple.com/documentation/safari-developer-tools/responsive-design-mode).


<!-- ====================================================================== -->
## Device emulators and simulators

Device simulators and emulators simulate not just the browser environment but the entire device.  Each simulator is useful to test things that require specific integration with the operating system, such as form input with mobile device keyboards.

You install device emulators and simulators on your development machine. You can therefore continue to test your website on the same machine where you're developing, while simulating the experience of using a different device.


<!-- ------------------------------ -->
#### Android emulator

At the moment, there is no way to install Microsoft Edge on an Android emulator.  However, you can use the Android Browser, the Chromium Content Shell, and Firefox for Android, which we review later in this article.  Chromium Content Shell runs the same Chromium rendering engine as Microsoft Edge, but comes without browser-specific features.

The Android emulator comes with the Android SDK which you need to download as part of [Android Studio](https://developer.android.com/sdk/installing/studio.html).  Then follow the instructions to [set up a virtual device](https://developer.android.com/tools/devices/managing-avds.html) and [start the emulator](https://developer.android.com/tools/devices/emulator.html).
After your emulator is booted, select the **Browser** icon, and test your site on the old Stock Browser for Android.

###### Chromium content shell on Android

To install the Chromium Content Shell for Android, keep your emulator running and run the following command:

```shell
git clone https://github.com/PaulKinlan/chromium-android-installer.git
chmod u+x ./chromium-android-installer/*.sh
./chromium-android-installer/install-chromeandroid.sh
```

Now you can test your site with the Chromium Content Shell.

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

To avoid having to open Xcode every time you want to use the iOS Simulator, open the iOS Simulator, right-click the iOS Simulator icon in your dock, and then select **Keep in Dock**.  Now just click the icon whenever you need it.


<!-- ------------------------------ -->
#### Virtual machines

To test your site on other operating systems, you can run virtual machines on your development device. For example, **Hyper-V** is a virtualization tool that lets you run various versions of Windows and Linux. To learn more, see [Introduction to Hyper-V on Windows 10](/virtualization/hyper-v-on-windows/about/).

For other virtual machines, see [Virtual machines](https://developer.mozilla.org/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies#virtual_machines) in _Strategies for carrying out testing_ at MDN.


<!-- ====================================================================== -->
## Cloud-based emulators and simulators

Cloud-based emulators and simulators are commercial solutions to test your website on different devices and browsers without installing anything on your development machine.  They are useful when you don't have access to real devices or when you can't use local emulators. Cloud-based solutions are also useful for automating tests across different platforms.

See [Emulators](https://developer.mozilla.org/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies#emulators) in _Strategies for carrying out testing_ at MDN.


<!-- ====================================================================== -->
## See also

* [Emulate mobile devices (Device Emulation)](./index.md)
* [Strategies for carrying out testing](https://developer.mozilla.org/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies) at MDN.


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/devtools/device-mode/testing-other-browsers/) and is authored by [Meggin Kearney](https://developers.google.com/web/resources/contributors#meggin-kearney) (Technical Writer) and [Paul Bakaus](https://developers.google.com/web/resources/contributors#paul-bakaus) (Open Web Developer Advocate at Google | Tools, Performance, Animation, UX).

[![Creative Commons License](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
