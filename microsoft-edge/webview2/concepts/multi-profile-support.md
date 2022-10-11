---
title: Support multiple profiles under a single user data folder
description: How to have different profiles of a WebView2 app running with different profiles under a single user data folder to achieve browsing data separation.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 10/11/2022
---
# Support multiple profiles under a single user data folder

To achieve data separation, a WebView2 app can choose to use different user data folders for different WebView2 controls. However, in such way you'll have to be running multiple WebView2 runtime instances (each including a browser process and a bunch of child processes), which means much more consumption for system resources including memory, CPU footprint, disk space, so it is not desirable.

Now we have a more desirable solution: multiple profile support, which enables a WebView2 app to have multiple WebView2 controls running with separate profiles under a single user data folder, which means separate browsing data storage, such as cookies, user preference settings, and cached resources. Each profile has a dedicated folder to save browser data for all WebView2 controls associated with it. WebView2 multiple profile API allows you to create and manipulate profiles to work for your WebView2 controls.


<!-- ====================================================================== -->
## Specify the profile when creating WebView2

This method creates an options object to give specific information of a profile, including ProfileName and IsInPrivateModeEnabled. This object is to be used to specify the target profile when creating a WebView2 control.


<!-- ------------------------------ -->

# [C#](#tab/csharp)

TODO


<!-- ------------------------------ -->

# [C++](#tab/cpp)

[ICoreWebView2Environment10::CreateCoreWebView2ControllerOptions Method](/microsoft-edge/webview2/reference/win32/icorewebview2environment10#createcorewebview2controlleroptions)

[ICoreWebView2ControllerOptions Interface](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions)

---

<!-- end of tab-set -->


This method creates a WebView2 control and associates it with the profile you specified. If the specified profile does not exist, a new one will be created.


<!-- ------------------------------ -->

# [C#](#tab/csharp)

TODO


<!-- ------------------------------ -->

# [C++](#tab/cpp)

* **[ICoreWebView2Environment10](/microsoft-edge/webview2/reference/win32/icorewebview2environment10)**
   * [CreateCoreWebView2ControllerWithOptions](/microsoft-edge/webview2/reference/win32/icorewebview2environment10#createcorewebview2controllerwithoptions)
   * [CreateCoreWebView2CompositionControllerWithOptions](/microsoft-edge/webview2/reference/win32/icorewebview2environment10#createcorewebview2compositioncontrollerwithoptions)

---

<!-- end of tab-set -->


<!-- ====================================================================== -->
## Access and manipulate the profile

You can get the profile object by accessing the property of a WebView2 control.


<!-- ------------------------------ -->

# [C#](#tab/csharp)

TODO


<!-- ------------------------------ -->

# [C++](#tab/cpp)

[ICoreWebView2_13::get_Profile Method](/microsoft-edge/webview2/reference/win32/icorewebview2_13#get_profile)

---

<!-- end of tab-set -->


You can manipulate with the profile object. The Profile interface allows to get profile information and do profile-wide settings and operations.


<!-- ------------------------------ -->

# [C#](#tab/csharp)

TODO


<!-- ------------------------------ -->

# [C++](#tab/cpp)

[ICoreWebView2Profile Interface](/microsoft-edge/webview2/reference/win32/icorewebview2profile)

[ICoreWebView2Profile2 Interface](/microsoft-edge/webview2/reference/win32/icorewebview2profile2)

---

<!-- end of tab-set -->


<!-- ====================================================================== -->
## See also

* [Manage the user data folder](user-data-folder.md)
* [Clear browsing data from the user data folder](clear-browsing-data.md)
* [Spec for multiple profile support API](https://github.com/MicrosoftEdge/WebView2Feedback/blob/main/specs/MultiProfile.md)
