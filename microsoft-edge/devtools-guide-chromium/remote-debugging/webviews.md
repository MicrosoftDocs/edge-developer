---
title: Remote Debugging WebViews
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 10/29/2019
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





# Remote Debugging WebViews   



Debug WebViews in your native Android apps using Microsoft Edge Developer Tools.  

On Android 4.4 \(KitKat\) or later, use DevTools to debug WebView content in native Android applications.  

### TL;DR   

*   Enable WebView debugging in your native Android app; debug WebViews in Microsoft Edge DevTools.  
*   Access list of debug-enabled WebViews via `edge://inspect`.  
*   Debugging WebViews is the same as debugging a web page through [remote debugging][RemoteDebuggingGettingStarted].  

## Configure WebViews for debugging  

WebView debugging must be enabled from within your application.  To enable WebView debugging, call the static method [setWebContentsDebuggingEnabled][AndroidDeveloperWebViewsSetWebContentsDebuggingEnabled] on the WebView class.  

```java
if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
    WebView.setWebContentsDebuggingEnabled(true);
}
```  

This setting applies to all of the WebViews of the application.  

> [!TIP]
> WebView debugging is not affected by the state of the `debuggable` flag in the manifest of the application.  If you want to enable WebView debugging only when `debuggable` is `true`, test the flag at runtime.  

```java
if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
    if (0 != (getApplicationInfo().flags & ApplicationInfo.FLAG_DEBUGGABLE))
    { WebView.setWebContentsDebuggingEnabled(true); }
}
```  

## Open a WebView in DevTools  

The `edge://inspect` page displays a list of debug-enabled WebViews on your device.  

To start debugging, click **inspect** below the WebView you want to debug.  Use DevTools as you would for a remote browser tab.  

<!--
> ##### Figure 1  
> Inspecting elements in a WebView  
> ![Inspecting elements in a WebView][ImageWebviewDebugging]  

The gray graphics listed with the WebView represent its size and position relative to the device's screen.  If your WebViews have titles set, the titles are listed as well.  
-->  

## Troubleshooting  

Your WebViews are not displayed on the `edge://inspect` page?  

*   Verify that WebView debugging is enabled for your app.  
*   On your device, open the app with the WebView you want to debug.  Then, refresh the `edge://inspect` page.  

 



<!-- image links -->  

[ImageWebviewDebugging]: images/webview-debugging.msft.png "Figure 1: Inspecting elements in a WebView"  

<!-- links -->  

[RemoteDebuggingGettingStarted]: index.md "Get Started with Remote Debugging Android Devices"  

[AndroidDeveloperWebViewsSetWebContentsDebuggingEnabled]: https://developer.android.com/reference/android/webkit/WebView.html#setWebContentsDebuggingEnabled(boolean) "setWebContentsDebuggingEnabled - WebView | Android Developers"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/remote-debugging/webviews) and is authored by [Meggin Kearney][MegginKearney] \(Tech Writer\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: http://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
[MegginKearney]: https://developers.google.com/web/resources/contributors/megginkearney  
