---
description: Host web content in your Win32 app with the Microsoft Edge WebView 2 control
title: Microsoft Edge WebView 2 for Win32 apps Release Notes
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/20/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html
---

# WebView2 SDK release notes  

Release notes for [WebView2 SDK][WebView2NuGetGallery].  

## 0.9.488

[NuGet package][WebView2NuGetGallery0.9.488] | minimum Microsoft Edge version 84.0.488.0.

**Re-compile your app after updating the NuGet package.** 

*   **Announcement:** Starting with the upcoming Microsoft Edge version 83, evergreen WebView will no longer target the Stable browser channel. Instead, it will target another set of binaries, branded [Microsoft Edge WebView2 Runtime](../webview2.md#microsoft-edge-webview2-runtime), that can be chain-installed through an installer we are currently developing. More details in [App-Distribution](../webview2.md#app-distribution).
*   **Announcement:** Moving forward, we will release two packages: a pre-release package with experimental APIs (for you to try out) and a stable release package with stable APIs (you can depend on). Checkout [Microsoft Edge WebView2 SDK](../webview2.md#microsoft-edge-webview2-sdk) to learn about the differences.
*   **Breaking Change:** In order to ensure that our API aligns with the Windows API naming conventions, we have updated the names of the following interfaces: 
    -  CORE_WEBVIEW2_* prefix is now COREWEBVIEW2_*. 
    -  [GetCoreWebView2BrowserVersionInfo](reference/win32/0.9.430/webview2.idl.md#getcorewebview2browserversioninfo) is now [GetAvailableCoreWebView2BrowserVersionString](reference/webview2.idl.md#getavailablecorewebview2browserversionstring)
    -   [get_BrowserVersionInfo](reference/win32/0.9.430/icorewebview2environment.md#get_browserversioninfo) is now [get_BrowserVersionString](reference/win32/0.9.488/icorewebview2environment.md#get_browserversionstring)
    - [AddRemoteObject](reference/win32/0.9.430/icorewebview2.md#addremoteobject) is now [AddHostObjectToScript](reference/win32/0.9.488/icorewebview2.md#addhostobjecttoscript)
    - [RemoveRemoteObject](reference/win32/0.9.430/icorewebview2.md#removeremoteobject) is now [RemoveHostObjectFromScript](reference/win32/0.9.488/icorewebview2.md#removehostobjectfromscript)
    - chrome.webview.remoteObjects is now chrome.webview.hostObjects
*   **Breaking Change:** The AddRemoteObject JS proxy methods have been also been renamed. 
    - getLocal is now getLocalProperty
	- setLocal is now setLocalProperty
	- getRemote is now getHostProperty
	- setRemote is now setHostProperty
	- applyRemote is now applyHostFunction
*   **Breaking Change:** [CreateCoreWebView2EnvironmentWithDetails](reference/webview2.idl.md#createcorewebview2environmentwithdetails) is now deprecated and has been replaced with [CreateCoreWebView2EnvironmentWithOptions](reference/webview2.idl.md#createcorewebview2environmentwithoptions).  
*   Added [FrameNavigationCompleted](reference/win32/0.9.488/icorewebview2.md#add_framenavigationcompleted) Event. Now, when an iframe completes navigation, an event is fired and returns the success of the navigation and the navigation id.
*   Added [ICoreWebView2EnvironmentOptions](reference/win32/0.9.488/ICoreWebView2EnvironmentOptions.md) interface, which can be used to determine the version of the WebView2 Runtime the application targets.
*   Added [IsBuiltInErrorPageEnabled](reference/win32/0.9.488/ICoreWebView2Settings.md#get_isbuiltinerrorpageenabled) setting. Now, you can chose to enable or disable the built in error page for navigation failure and render process failure.
*   Updated Remote Object Injection to support .NET IDispatch implementations. ([#113](https://github.com/MicrosoftEdge/WebViewFeedback/issues/113))
*   Updated [NewWindowRequested](reference/win32/0.9.488/icorewebview2.md#add_newwindowrequested) event to handle requests from context menus. ([#108](https://github.com/MicrosoftEdge/WebViewFeedback/issues/108))
*   Released our first separate pre-release package where you can access visual hosting APIs. We have updated [WebView2APISample](https://github.com/MicrosoftEdge/WebView2Samples) to include these new experimental APIs.
    - Added [ICoreWebView2ExperimentalCompositionController](reference/win32/0.9.488/ICoreWebView2ExperimentalCompositionController.md) interface, which is used to connect to a composition tree and provide input meant for the WebView.
    - Added [ICoreWebView2ExperimentalPointerInfo](reference/win32/0.9.488/ICoreWebView2ExperimentalPointerInfo.md) which contains all the information from a POINTER_INFO. It is passed to SendPointerInput to inject pointer input into the WebView.
    - Added [ICoreWebView2ExperimentalCursorChangedEventHandler](reference/win32/0.9.488/ICoreWebView2ExperimentalCursorChangedEventHandler.md) which tells the app when the mouse cursor over the WebView should be changed. When mouse is over a text box in the WebView, the cursor changes from the arrow to the selector. The cursor property on the CompositionController tells the app what the mouse cursor should currently be for the WebView.

## 0.9.430

[NuGet package][WebView2NuGetGallery0.9.430] | minimum Microsoft Edge version 82.0.430.0.

**Re-compile your app after updating the NuGet package.** 

This SDK is our official Win32 C++ Beta version, which incorporates several feature requests we have received. We have tried to limit the number of releases with breaking changes, but as we approach our general availability we are using our Beta release to incorporate several major breaking changes in one go.

*   **Breaking Change:**  As we approach our final release we renamed the prefix *IWebView2WebView* to *ICoreWebView2* in order to make sure that our API aligns with the Windows API naming convention. Additionally, in order to make our SDK extensible to be used by UI frameworks, we have separated ICoreWebView2 into [ICoreWebView2](reference/win32/0.9.430/icorewebview2.md) and [ICoreWebView2Host](reference/win32/0.9.430/icorewebview2host.md). ICoreWebView2Host supports resizing, showing and hiding, focusing, and other functionality related to windowing and composition. ICoreWebView2 supports all other WebView2 functionality. To learn more about incorporating these changes, checkout our [pull request](https://github.com/MicrosoftEdge/WebView2Samples/pull/17) in our [WebView2APISample](https://github.com/MicrosoftEdge/WebView2Samples) project.
*   **Breaking Change:** Split [DocumentStateChanged](reference/win32/0.8.190/iwebview2webview.md#add_documentstatechanged) into three components: [SourceChanged](reference/win32/0.9.430/icorewebview2.md#add_sourcechanged), [ContentLoading](reference/win32/0.9.430/icorewebview2.md#add_contentloading), and [HistoryChanged](reference/win32/0.9.430/icorewebview2.md#add_historychanged). Now, when the source URL changes the SourceChanged event is fired. When the history state is changed the HistoryChanged event is fired. The ContentLoading event is fired before the initial script when a new document is being loaded.
*   Added support for ARM64 architecture
*   Added Soft Input Panel (SIP) support for touch screen devices
*   Added support for `Windows Server 2008 R2`, `Windows Server 2012/2012 R2`, and `Windows Server 2016`
*   Added [NotifyParentWindowPositionChanged](reference/win32/0.9.430/icorewebview2host.md#notifyparentwindowpositionchanged) which allows for the status bar to follow the window in windowed mode. This will also need to be implemented in windowless mode in order for accessibility features to work.
*   Added [AreRemoteObjectsAllowed](reference/win32/0.9.430/icorewebview2settings.md#get_areremoteobjectsallowed) setting to globally control whether a page can be accessed by any remote objects. By default, AreRemoteObjectsAllowed is enabled, meaning remote objects added by [AddRemoteObject](reference/win32/0.9.430/icorewebview2.md#addremoteobject) are accessible from the page. When AreRemoteObjectsAllowed is disabled, the objects will not be accessible from the page. Changes will be applied on the next navigation event.
*   Added [IsZoomControlEnabled](reference/win32/0.9.430/icorewebview2settings.md#get_iszoomcontrolenabled) setting to prevent users from impacting the zoom of the WebView using `ctrl` + `+`/`-` or `ctrl` + mouse wheel. Zoom can still be set via [put_ZoomFactor](reference/win32/0.9.430/icorewebview2host.md#put_zoomfactor) when this setting is disabled.  
*   Changed ZoomFactor to only apply to the current WebView. Zoom changes to the current WebView do not impact other WebViews that happen to be on the same site of origin. See [get_ZoomFactor](reference/win32/0.9.430/icorewebview2host.md#get_zoomfactor) for more details.
*   Hid ZoomView UI for WebView. ([#95](https://github.com/MicrosoftEdge/WebViewFeedback/issues/95))
*   Added [SetBoundsAndZoomFactor](reference/win32/0.9.430/icorewebview2host.md#setboundsandzoomfactor). Now, you can set the zoom factor and bounds of a WebView at the same time.
*   Added [WindowCloseRequested](reference/win32/0.9.430/icorewebview2.md#add_windowcloserequested) event. See [add_WindowCloseRequested](reference/win32/0.9.430/icorewebview2.md#add_windowcloserequested) for more details. ([#119](https://github.com/MicrosoftEdge/WebViewFeedback/issues/119))
*   Added support for the beforeunload dialog type for javascript dialog events and added [CORE_WEBVIEW2_SCRIPT_DIALOG_KIND_BEFOREUNLOAD](reference/win32/0.9.430/icorewebview2.md#core_webview2_script_dialog_kind) enum entry.
*   Added [GetHeaders](reference/win32/0.9.430/icorewebview2httprequestheaders.md#getheaders) to HttpRequestHeaders, [GetHeader](reference/win32/0.9.430/icorewebview2httpresponseheaders.md#getheader) to HttpResponseHeaders, and [get_HasCurrentHeader](reference/win32/0.9.430/icorewebview2httpheaderscollectioniterator.md#get_hascurrentheader) property to HttpHeadersCollectionIterator.
*   **Breaking Change:** Modified DevToolsProtocolEventReceived behavior. Now, you can create a [DevToolsProtocolEventReceiver](reference/win32/0.9.430/icorewebview2devtoolsprotocoleventreceiver.md) for a particular DevTools Protocol event and subscribe/unsubscribe to such event using [add_DevToolsProtocolEventReceived](reference/win32/0.9.430/icorewebview2devtoolsprotocoleventreceiver.md#add_devtoolsprotocoleventreceived)/[remove_DevToolsProtocolEventReceived](reference/win32/0.9.430/icorewebview2devtoolsprotocoleventreceiver.md#remove_devtoolsprotocoleventreceived).
*   **Breaking Change:** Changed WebMessageReceivedEventArgs' [get_WebMessageAsString](reference/win32/0.8.190/iwebview2webmessagereceivedeventargs.md#get_webmessageasstring) property to a [TryGetWebMessageAsString](reference/win32/0.9.430/icorewebview2webmessagereceivedeventargs.md#trygetwebmessageasstring) method.
*   **Breaking Change:** Changed AcceleratorKeyPressedEventArgs' [Handle](reference/win32/0.8.190/iwebview2acceleratorkeypressedeventargs.md#handle) method to a [get_Handled](reference/win32/0.9.430/icorewebview2acceleratorkeypressedeventargs.md#get_handled) property.

## 0.8.355

[NuGet package][WebView2NuGetGallery0.8.355] | minimum Microsoft Edge version 80.0.355.0.

**Re-compile your app after updating the NuGet package.** 

*   Released WebView2API Sample - a comprehensive guide of our SDK. Check it out [here](https://github.com/MicrosoftEdge/WebView2Samples/tree/master/WebView2APISample)!
*   Added IME support for all languages besides English. ([#30](https://github.com/MicrosoftEdge/WebViewFeedback/issues/30))
*   Updated the API surface of the WebResourceRequested event in response to bug reports.  Simultaneously specifying a filter and an event on creation is now deprecated.  To create a web resource requested event, use [add_WebResourceRequested](reference/win32/0.8.190/iwebview2webview5.md#add_webresourcerequested) to add the event and [AddWebResourceRequestedFilter](reference/win32/0.8.190/iwebview2webview5.md#addwebresourcerequestedfilter) to add a filter.  [RemoveWebResourceRequestedFilter](reference/win32/0.8.190/iwebview2webview5.md#removewebresourcerequestedfilter) removes the filter.  ([#36](https://github.com/MicrosoftEdge/WebViewFeedback/issues/36)) ([#74](https://github.com/MicrosoftEdge/WebViewFeedback/issues/74))  
*   **Breaking Change:**  Modified fullscreen behavior. Deprecated [IsFullScreenAllowed](reference/win32/0.8.190/IWebView2Settings.md#get_isfullscreenallowed_deprecated).  Now, by default, if an element within a WebView (such as a video) is set to full screen, it fills the bounds of the WebView.  Use the [ContainsFullScreenElementChanged](reference/win32/0.8.190/IWebView2ContainsFullScreenElementChangedEventHandler.md#interface-iwebview2containsfullscreenelementchangedeventhandler) event and [get_ContainsFullScreenElement](reference/win32/0.8.190/iwebview2webview5.md#get_containsfullscreenelement) to specify how the app should resize the WebView if an element wants to enter fullscreen mode.  

## 0.8.314

[NuGet package][WebView2NuGetGallery0.8.314] | minimum Microsoft Edge version 80.0.314.0.

**Re-compile your app after updating the NuGet package.**  

*   Added support for Windows 7, Windows 8/8.1.
*   Added Visual Studio and Visual Studio Code debug support for WebView2. Now, you can debug your script in the WebView2 right from your IDE. Click [here](/microsoft-edge/hosting/webview2#debugging-webview2) for more details.  
*   Added `Native Object Injection`, which allows the script running within WebView2 to be passed an IDispatch object from the Win32 component of the application and access the properties of the IDispatch object.  See [AddRemoteObject](reference/win32/0.8.190/iwebview2webview4.md#addremoteobject) for more details.  ([#17](https://github.com/MicrosoftEdge/WebViewFeedback/issues/17)).  
*   Added `AcceleratorKeyPressed` event.  See [add_AcceleratorKeyPressed](reference/win32/0.8.190/iwebview2webview4.md#add_acceleratorkeypressed) for more details.  ([#57](https://github.com/MicrosoftEdge/WebViewFeedback/issues/57)).  
*   Disabled `Context Menus`.  See [put_AreDefaultContextMenusEnabled](reference/win32/0.8.190/iwebview2settings2.md#put_aredefaultcontextmenusenabled) for more details ([#57](https://github.com/MicrosoftEdge/WebViewFeedback/issues/57)).  
*   Updated `DPI Awareness`. Now, the WebView's DPI awareness will be the same as its host application's DPI awareness. Note, if another hybrid application is launched with a different DPI Awareness than the original WebView, the new WebView will not be launched if the user data directory is the same ([#1](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1)).
*   Updated `Notification Change Behavior` so WebView2 automatically rejects notification permission requests prompted by web content hosted within the WebView.

## 0.8.270  

[NuGet package][WebView2NuGetGallery0.8.270] | minimum Microsoft Edge version 78.0.270.0.  

**Re-compile your app after updating the NuGet package.**  

*   Added `DocumentTitleChanged` event to indicate document title change \([\#27][MicrosoftEdgeWebViewFeedbackIssue27]\).  
*   Added `GetWebView2BrowserVersionInfo` API \([\#18][MicrosoftEdgeWebViewFeedbackIssue18]\).  
*   Added `NewWindowRequested` event.  
*   Updated `CreateWebView2EnvironmentWithDetails` function to remove `releaseChannelPreference`.  See [CreateWebView2EnvironmentWithDetails][WebViewsGlobalsCreateWebView2EnvironmentWithDetails] function for more details.  The registry and environment variable override is still supported.  The default channel preference is used unless overridden.  
    During the channel search, we skip any older channel version that is not compatible with the WebView2 SDK.  
    We select the more stable channel to ensure the most consistent behaviors for the end user.  When you test with latest Canary builds, you should create a script to set environment variable `WEBVIEW2_RELEASE_CHANNEL_PREFERENCE` to `1` before launching the app.  
*   Updated `CreateWebView2EnvironmentWithDetails` function with logic for selecting `userDataFolder` when not specified.  See [CreateWebView2EnvironmentWithDetails][WebViewsGlobalsCreateWebView2EnvironmentWithDetails] function for more details.  If you previously used the default `userDataFolder` location, when you switch to the new SDK the default `userDataFolder` is reset (set to a new location in the host code directory) and your state is also reset.  
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
[WebView2NuGetGallery0.9.430]: https://www.nuget.org/packages/Microsoft.Web.WebView2/0.9.430 "NuGet Gallery | Microsoft.Web.WebView2 v0.9.430" 
[WebView2NuGetGallery0.9.488]: https://www.nuget.org/packages/Microsoft.Web.WebView2/0.9.488 "NuGet Gallery | Microsoft.Web.WebView2 v0.9.488"

[WebViewsGlobalsCreateWebView2EnvironmentWithDetails]: reference/win32/0.8.190/webview2.idl.md#createwebview2environmentwithdetails "WebView Globals - CreateWebView2EnvironmentWithDetails function"  
