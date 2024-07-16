---
title: Emulate and test other browsers
description: Your job doesn't end with making sure your site runs great across Microsoft Edge and Android.  Even though Device Emulation (Device Mode) can simulate a range of other devices such as smart phones, we encourage you to check out solutions for emulation provided by other browsers.
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

<!-- todo: start w/ positive summary -->
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


<!-- ====================================================================== -->
## Cloud-based emulators and simulators

If you aren't able to use the emulators and you don't have access to real devices, then cloud-based emulators are the next-best thing.  A big advantage of cloud-based emulators over real devices and local emulators is that you can automate unit tests for your site across different platforms.

See [Emulators](https://developer.mozilla.org/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies#emulators) in _Strategies for carrying out testing_ at MDN.


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/devtools/device-mode/testing-other-browsers/) and is authored by [Meggin Kearney](https://developers.google.com/web/resources/contributors#meggin-kearney) (Technical Writer) and [Paul Bakaus](https://developers.google.com/web/resources/contributors#paul-bakaus) (Open Web Developer Advocate at Google | Tools, Performance, Animation, UX).

[![Creative Commons License](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
