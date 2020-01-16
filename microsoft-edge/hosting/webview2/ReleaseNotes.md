---
description: Host web content in your Win32 app with the Microsoft Edge WebView 2 control
title: Microsoft Edge WebView 2 for Win32 apps Release Notes
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/15/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge
---

# WebView2 SDK release notes  

Release notes for [WebView2 SDK][WebView2NuGetGallery].  

## 0.8.355

[NuGet package][WebView2NuGetGallery0.8.355] | minimum Microsoft Edge version 80.0.355.0.

**Re-compile your app after updating the NuGet package.** 

*   Released WebView2API Sample - a comprehensive guide of our SDK. Check it out [here!](https://github.com/MicrosoftEdge/WebView2Samples/tree/master/WebView2APISample)
*   Added IME support for all languages besides English. ([#30](https://github.com/MicrosoftEdge/WebViewFeedback/issues/30))
*   Updated the API surface of the WebResourceRequested event in response to bug reports.  Simultaneously specifying a filter and an event on creation is now deprecated.  To create a web resource requested event, use [add_WebResourceRequested](reference/iwebview2webview5.md#add_webresourcerequested) to add the event and [AddWebResourceRequestedFilter](reference/iwebview2webview5.md#addwebresourcerequestedfilter) to add a filter.  [RemoveWebResourceRequestedFilter](reference/iwebview2webview5.md#removewebresourcerequestedfilter) removes the filter.  ([#36](https://github.com/MicrosoftEdge/WebViewFeedback/issues/36)) ([#74](https://github.com/MicrosoftEdge/WebViewFeedback/issues/74))  
*   **Breaking Change:**  Modified Full Screen behavior.  Deprecated [isfullscreenallowed](reference/IWebView2Settings.md#get_isfullscreenallowed_deprecated).  Now, by default, if an element within a WebView (such as a video) is set to full screen, it fills the bounds of the WebView.  Use the [IWebView2ContainsFullScreenElementChanged](reference/IWebView2ContainsFullScreenElementChangedEventHandler.md#interface-iwebview2containsfullscreenelementchangedeventhandler) event and [get_ContainsFullScreenElement](reference/iwebview2webview5.md#get_containsfullscreenelement) to specify how the app should resize the WebView if an element wants to enter fullscreen mode.  

## 0.8.314

[NuGet package][WebView2NuGetGallery0.8.314] | minimum Microsoft Edge version 80.0.314.0.

**Re-compile your app after updating the NuGet package.**  

*   Added support for Windows 7, Windows 8/8.1.
*   Added `Visual Studio` and `Visual Studio Code` debug support for WebView2. Now, you can debug your script in the WebView2 right from your IDE. Click [here](/microsoft-edge/hosting/webview2#debugging-webview2) for more details.  
*   Added `Native Object Injection`, which allows the script running within WebView2 to be passed an IDispatch object from the Win32 component of the application and access the properties of the IDispatch object.  See [AddRemoteObject](reference/iwebview2webview4.md#addremoteobject) for more details.  ([#17](https://github.com/MicrosoftEdge/WebViewFeedback/issues/17)).  
*   Added `AcceleratorKeyPressed` event.  See [add_AcceleratorKeyPressed](reference/iwebview2webview4.md#add_acceleratorkeypressed) for more details.  ([#57](https://github.com/MicrosoftEdge/WebViewFeedback/issues/57)).  
*  Disabled `Context Menus`.  See [put_AreDefaultContextMenusEnabled](reference/iwebview2settings2.md#put_aredefaultcontextmenusenabled) for more details ([#57](https://github.com/MicrosoftEdge/WebViewFeedback/issues/57)).  
*  Updated `DPI Awareness`. Now, the WebView's DPI awareness will be the same as its host application's DPI awareness. Note, if another hybrid application is launched with a different DPI Awareness than the original WebView, the new WebView will not be launched if the user data directory is the same ([#1](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1)).
*   Updated `Notification Change Behavior` so WebView2 automatically rejects notification permission requests prompted by web content hosted within the WebView.

## 0.8.270  

[NuGet package][WebView2NuGetGallery0.8.270] | minimum Microsoft Edge version 78.0.270.0.  

**Re-compile your app after updating the NuGet package.**  

*   Added `DocumentTitleChanged` event to indicate document title change \([\#27][MicrosoftEdgeWebViewFeedbackIssue27]\).  
*   Added `GetWebView2BrowserVersionInfo` API \([\#18][MicrosoftEdgeWebViewFeedbackIssue18]\).  
*   Added `NewWindowRequested` event.  
*   Updated `CreateWebView2EnvironmentWithDetails` function to remove `releaseChannelPreference`.  See [CreateWebView2EnvironmentWithDetails][WebViewsGlobalsCreateWebView2EnvironmentWithDetails.md] function for more details.  The registry and environment variable override is still supported.  The default channel preference is used unless overridden.  
    During the channel search, we skip any older channel version that is not compatible with the WebView2 SDK.  
    We select the more stable channel to ensure the most consistent behaviors for the end user.  When you test with latest Canary builds, you should create a script to set environment variable `WEBVIEW2_RELEASE_CHANNEL_PREFERENCE` to `1` before launching the app.  
*   Updated `CreateWebView2EnvironmentWithDetails` function with logic for selecting `userDataFolder` when not specified.  See [CreateWebView2EnvironmentWithDetails][WebViewsGlobalsCreateWebView2EnvironmentWithDetails.md] function for more details.  If you previously used the default `userDataFolder` location, when you switch to the new SDK the default `userDataFolder` is reset \(set to a new location in the host code directory\) and your state is also reset.  
    If the host process does not have permission to write to the specified directory, `CreateWebView2EnvironmentWithDetails` may fail.  You may copy the data from the old user data directory to the new directory.  

## 0.8.230  

[NuGet package][WebView2NuGetGallery0.8.230] | minimum Microsoft Edge version 77.0.230.0.  

**Re-compile your app after updating the NuGet package.**  

*   Added `Stop` API to stop all navigation and pending resource fetches \([\#28][MicrosoftEdgeWebViewFeedbackIssue28]\).  
*   Added .tlb file to the Nuget package \([\#22][MicrosoftEdgeWebViewFeedbackIssue22]\).  
*   Added .NET projects to the installer list in the NuGet package \([\#32][MicrosoftEdgeWebViewFeedbackIssue32]\).  

## 0.8.190  

[NuGet package][WebView2NuGetGallery0.8.190] | minimum Microsoft Edge version 77.0.190.0.  

**Re-compile your app after updating the NuGet package.**  

*   Added `get_AreDevToolsEnabled`/`put_AreDevToolsEnabled` to control if users are able to open DevTools \([\#16][MicrosoftEdgeWebViewFeedbackIssue16]\).  
*   Added `get_IsStatusBarEnabled`/`put_IsStatusBarEnabled` to control if the status bar is displayed \([\#19][MicrosoftEdgeWebViewFeedbackIssue19]\).  
*   Added `get_CanGoBack`/`GoBack`/`get_CanGoForward`/`GoForward` for going back and forward through navigation history.  
*   Added HTTP header types (`IWebView2HttpHeadersCollectionIterator`/`IWebView2HttpRequestHeaders`/`IWebView2HttpRequestHeaders`) for viewing and modifying HTTP headers in WebView.  
*   Added 32-bit WebView support on 64-bit machines \([\#13][MicrosoftEdgeWebViewFeedbackIssue13]\).  
*   Added WebView IDL to the SDK \([\#14][MicrosoftEdgeWebViewFeedbackIssue14]\).  
*   Added lib to support IID\_\* interface id objects \([\#12][MicrosoftEdgeWebViewFeedbackIssue12]\).  
*   Added include path, linking, and auto-copying of DLL files to NuGet TARGET file in SDK.  
*   Enabled requesting `window.open` in script.  

## 0.8.149  

[NuGet package][WebView2NuGetGallery0.8.149] | minimum Microsoft Edge version 76.0.149.0.  

Initial developer preview release.  

<!-- image links -->

<!-- Links -->
[MicrosoftEdgeWebViewFeedbackIssue12]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/12 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 12"  
[MicrosoftEdgeWebViewFeedbackIssue13]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/13 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 13"  
[MicrosoftEdgeWebViewFeedbackIssue14]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/14 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 14"  
[MicrosoftEdgeWebViewFeedbackIssue16]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/16 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 16"  
[MicrosoftEdgeWebViewFeedbackIssue18]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/18 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 18"  
[MicrosoftEdgeWebViewFeedbackIssue19]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/19 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 19"  
[MicrosoftEdgeWebViewFeedbackIssue22]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/22 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 22"  
[MicrosoftEdgeWebViewFeedbackIssue27]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/27 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 27"  
[MicrosoftEdgeWebViewFeedbackIssue28]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/28 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 28"  
[MicrosoftEdgeWebViewFeedbackIssue32]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/32 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 32"  

[WebView2NuGetGallery]: https://aka.ms/webviewnuget "NuGet Gallery | Microsoft.Web.WebView2"  
[WebView2NuGetGallery0.8.149]: https://www.nuget.org/packages/Microsoft.Web.WebView2/0.8.149 "NuGet Gallery | Microsoft.Web.WebView2 v0.8.149"  
[WebView2NuGetGallery0.8.190]: https://www.nuget.org/packages/Microsoft.Web.WebView2/0.8.190 "NuGet Gallery | Microsoft.Web.WebView2 v0.8.190"  
[WebView2NuGetGallery0.8.230]: https://www.nuget.org/packages/Microsoft.Web.WebView2/0.8.230 "NuGet Gallery | Microsoft.Web.WebView2 v0.8.230"  
[WebView2NuGetGallery0.8.270]: https://www.nuget.org/packages/Microsoft.Web.WebView2/0.8.270 "NuGet Gallery | Microsoft.Web.WebView2 v0.8.270"  
[WebView2NuGetGallery0.8.314]: https://www.nuget.org/packages/Microsoft.Web.WebView2/0.8.314 "NuGet Gallery | Microsoft.Web.WebView2 v0.8.314"  
[WebView2NuGetGallery0.8.355]: https://www.nuget.org/packages/Microsoft.Web.WebView2/0.8.355 "NuGet Gallery | Microsoft.Web.WebView2 v0.8.355"  

[WebViewsGlobalsCreateWebView2EnvironmentWithDetails]: reference/webview2.idl.md#CreateWebView2EnvironmentWithDetails "WebView Globals - CreateWebView2EnvironmentWithDetails function"  
