---
description: Get started with Remote Debugging WebViews in your native Android apps using Microsoft Edge Developer Tools.
title: Get started with remote debugging Android WebViews
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/04/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
<!-- Copyright Meggin Kearney

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->
# Get started with remote debugging Android WebViews

Debug Android WebViews in your native Android apps using Microsoft Edge Developer Tools.

On Android 4.4 (KitKat) or later, use DevTools to debug WebView content in native Android apps.

### Summary

*   Turn on Android WebView debugging in your native Android app; debug Android WebViews in Microsoft Edge DevTools.
*   To display the list of the Android WebViews with debugging turned on, navigate to `edge://inspect`.
*   Debug Android WebViews in the same way you debug a webpage through [remote debugging](./index.md).


<!-- ====================================================================== -->
## Configure Android WebViews to debug

Android WebView debugging must be turned on within your app.  To turn on Android WebView debugging, run the [setWebContentsDebuggingEnabled](https://developer.android.com/reference/android/webkit/WebView.html#setWebContentsDebuggingEnabled(boolean)) static method on the `WebView` class.

```java
if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
    WebView.setWebContentsDebuggingEnabled(true);
}
```

The setting applies to all of the Android WebViews of the app.

> [!TIP]
> Android WebView debugging is not affected by the state of the `debuggable` flag in the manifest of the app.  If you want to turn on Android WebView debugging only when the `debuggable` flag is `true`, test the flag at runtime.
>
> ```java
> if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
>     if (0 != (getApplicationInfo().flags & ApplicationInfo.FLAG_DEBUGGABLE))
>    { WebView.setWebContentsDebuggingEnabled(true); }
> }
> ```


<!-- ====================================================================== -->
## Open an Android WebView in DevTools

To display a list of the Android WebViews with debugging turned on that run on your device, navigate to `edge://inspect`.

To start debugging, under the Android WebView you want to debug, choose **inspect**.  Use DevTools in the same way that you do a remote browser tab.

<!--
:::image type="complex" source=".images/webview-debugging.msft.png" alt-text="Inspecting elements in an Android WebView" lightbox=".images/webview-debugging.msft.png":::
   Inspecting elements in an Android WebView
:::image-end:::

The gray graphics listed with the Android WebView represent its size and position relative to the screen of the device.  If your Android WebViews have titles set, the titles are listed as well.
-->


<!-- ====================================================================== -->
## Troubleshoot

Your Android WebViews aren't displayed on the `edge://inspect` page?

*   Verify that Android WebView debugging is turned on for your app.
*   On your device, open the app with the Android WebView you want to debug.  Then, refresh `edge://inspect`.


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/remote-debugging/webviews) and is authored by [Meggin Kearney](https://developers.google.com/web/resources/contributors#meggin-kearney) (Technical Writer).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0).
