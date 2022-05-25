---
title: Survey of WebView2 APIs and their capabilities
description: Survey of WebView2 APIs and their capabilities.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 05/25/2022
---
# Survey of WebView2 APIs and their capabilities

This article provides:
*  A high-level understanding of the capabilities of the WebView2 technology.
*  Concepts about what you can do with the WebView2 APIs, which are listed at [Reference (WebView2 Win32 C++)](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/).<!-- todo: C#? -->
*  High-level description of WebView2 technology for app developers.
*  Better fundamentals + understanding of WebView2 technology.

Audience: App developers who are curious about the WebView2 technology and would like to know if WebView2 is for them.

This article categorizes all the Win32 C++<!-- todo: C#? --> interfaces, at a high level, for WebView2.  This article also lists members of the following interfaces, because they have APIs that span across multiple categories in this article:
*  `ICoreWebView2`
*  `ICoreWebView2Controller`
*  `ICoreWebView2Environment`
*  `ICoreWebView2Settings`


Most of the APIs are also available wrapped for .NET/C#: see [WebView2 Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.wpf.webview2).
<!-- C# api ref links - see https://docs.microsoft.com/microsoft-edge/webview2/how-to/context-menus?tabs=csharp#api-reference-overview -->


<!-- ====================================================================== -->
## Web/Native Interop

Communication between web code and native code.

*  `ICoreWebView2WebMessageReceivedEventArgs`
*  `ICoreWebView2ResourceResponse`
*  `ICoreWebView2ResponseReceivedEventArgs`
*  `ICoreWebView2WebResourceResponseView`
*  `ICoreWebView2Settings`
   * `IsWebMessageEnabled`
*  `ICoreWebView2`
   * `Add_WebMessageReceived`
   * `Remove_WebMessageReceived`
   * `AddHostObjectToScript`
   * `RemoveHostObjectFromScript`
   * `Add_ScriptDialogOpening`
   * `Remove_ScriptDialogOpening`
   * `AddScriptToExecuteOnDocumentCreated`
   * `RemoveScriptToExecuteOnDocumentCreated`
   * `ExecuteScript`
   * `PostWebMessageAsJson`
   * `PostWebMessgeAsString`
   * `AreHostObjectsAllowed`
   * `COREWEBVIEW2_SCRIPT_DIALOG_KIND`


<!-- ====================================================================== -->
## Working with JavaScript in WV2

*  `ICoreWebView2ScriptDialogOpeningEventArgs`
*  `ICoreWebView2Settings`
   * `AreDefaultScriptDialogsEnabled`
   * `IsScriptEnabled`
   * Working with JavaScript in WebView2 - todo: link avail?

<!-- ====================================================================== -->
## Browser features

This section covers features inherited from the browser and available in a WebView2 control.  These APIs allow developers the ability to change these inherited features.


### Printing

How to print the content in a WebView2 control.

*  `ICoreWebView2`
   * `COREWEBVIEW2_PRINT_ORIENTATION`
*  `ICoreWebVeiw2_7`
   * `PrintToPdf`
*  `ICoreWebView2PrintSettings`
*  `ICoreWebview2Environment6`
   * `CreatePrintSettings`
   * other? (empty item) todo


### Cookies

How to work with cookies in a WebView2 control.

*  `ICoreWebView2`
   * `COREWEBVIEW2_COOKIE_SAME_SITE_KIND`
*  `ICoreWebView2Cookie`
*  `ICoreWebView2CookieList`
*  `ICoreWebView2CookieManager`
*  `ICoreWebView2_2`
   * `Get_cookieManager`


### Image capture

Capturing images using the key press combination Ctrl+Shift+S (todo: confirm)

*  `ICoreWebView2`
   * `CapturePreview`
   * `COREWEBVIEW2_CAPTURE_PREVIEW_IMAGE_FORMAT`


### Downloads

How to work with downloaded files in a WebView2 control.

*  `ICoreWebView2`
   * `COREWEBVIEW2_DEFAULT_DOWNLOAD_DIALOG_CORNER_ALIGNMENT`
   * `COREWEBVIEW2_DOWNLOAD_INTERRUPT_REASON`
   * `COREWEBVIEW2_DOWNLOAD_STATE`
   * `COREWEBVIEW2_HOST_RESOURCE_ACCESS_KIND`
*  `ICoreWebView2DownloadOperation`
*  `ICoreWebView2DownloadStartingEevntArgs`
*  `ICoreWebView2_4`
   * `Add_DownloadStarting`
*  `ICoreWebView2_9`
   * `Add_IsDefaultDownloadDialogOpenChanged`
   * `ClsoeDefaultDownlaodDialog`
   * `Get_defaultDownloadDialogCornerAlignment`
   * `Get_DefaultDownloadDialogMargin`
   * `Get_IsDefaultDownloadDialogOpen`
   * `OpenDefaultDownloadDialog`


### Permissions

How to assign permissions to WebView2 controls to do _<!-- todo: confirm -->

*  `ICoreWebView2PermissionrequestedEventArgs`
*  `IcoreWebView2`
   * `Add_PermissionRequested`
   * `Remove_PermissionRequested`
   * `COREWEBVIEW2_PERMISSION_KIND`
   * `COREWEBVIEW2_PERMISSION_STATE`


### Context Menu

Learn how to create your own context menu when using a WebView2 control.

*  `add_ContextMenuRequested`
*  `CallDevToolsProtocolMethodForSession`
*  `remove_ContextMenuRequested`
*  `ICoreWebView2Settings`
   * `AreDefaultContextMenusEnabled`


### Status Bar

Learn how to monitor the browser's status bar for changes.

*  `add_StatusBarTextChanged`
*  `get_StatusBarText`
*  `remove_StatusBarTextChanged`
*  `ICoreWebView2Settings`
   * `IsStatusBarEnabled`


### User Agent

Learn how to detect the user agent string in a WebView2 control.

*  `ICoreWebView2Settings`
   * `UserAgent`


### Autofill

Leverage the browsers autofill functionality in a WebView2 control.

*  `ICoreWebView2Settings4`
   * `IsGeneralAutofillEnabled`
   * `IsPasswordAutosaveEnabled`
   * `IsGeneralAutofillEnagled`
   * `IsPasswordAutosaveEnabled`


### Audio

Control audio settings in a WebView2 control.

*  `ICoreWebView2_8`
   * `Add_IsDocumentPlayingAudioChanged`
   * `Add_IsMutedChanged`
   * `Get_IsDocumentPlayingAudio`
   * `Get_IsMuted`


<!-- ====================================================================== -->
## Managing WV2 Processes

Learn how to work with the process that your WebView2 runs in on the host computer.

*  `ICoreWebView2`
   * `COREWEBVIEW2_PROCESS_FAILED_KIND`
   * `COREWEBVIEW2_PROCESS_FAILED_REASON`
   * `COREWEBVIEW2_PROCESS_KIND`
*  `ICoreWebView2BrowserProcessExitedEventArgs`
*  `ICoreWebView2Environment.BrowserProcessExitedEventArgs`
*  `ICoreWebView2ProcessFailedEventArgs`
*  `ICoreWebView2ProcessInfo`
*  `ICoreWebView2ProcessInfoCollection`
*  `ICoreWebView2`
   * `Add_ProcessFailed`
   * `Remove_ProcessFailed`
   * `get_BrowserProcessID`
   * `COREWEBVIEW2_BROWSER_PROCESS_EXIT_KIND`
*  `ICoreWebView2Environment5`
   * `Add_BrowserProcessExited`
   * `Remove_BrowserProcessExited`
*  `ICoreWebView2Environment8`
   * `Add_ProcessInfosChanged`
   * `GetProcessInfos`
   * `remove_ProcessInfosChanged`


<!-- ====================================================================== -->
## Navigation

Learn how to manage page navigation in a WebView2.

*  `ICoreWebView2`
   * `Add_FrameNavigationCompleted`
   * `add_FrameNavigationStarting`
   * `remove_FrameNavigationCompleted`
   * `add_NavigationCompleted`
   * `remove_NavigationCompleted`
   * `add_NavigationStarting`
   * `remve_NavigationStarting`
   * `Add_HistoryChanged`
   * `Add_SourceChanged`
   * `Remove_SourceChanged`
   * `Get_CanGoBack`
   * `get_CanGoFroward`
   * `get_Source`
   * `GoBack`
   * `GoForward`
   * `Navigate`
   * `NavigateToString`
   * `Stop`
   * `COREWEBVIEW2_WEB_ERRORS_STATUS`
   * `COREWEBVIEW2_WEB_RESOURCE_CONTEXT`
*  `ICoreWebView2_2`
   * `NavigateWithWebResourceRequest`
*  `ICoreWebView2_3`
   * `SetVirtuaHostNameToFolderMapping`
   * `ClearVirtualHostNameToFolderMapping`
*  `ICoreWebView2NavigationCompletedEventArgs`
*  `ICoreWebView2NavigationCompletedEventArgs`
*  `ICoreWebView2NavigationStartingEventArgs`
*  `ICoreWebView2SourceChangedEventArgs`


<!-- ====================================================================== -->
## Web Content

### Web Resource Requested

Learn how to make an external call to a resource on the web.

*  `ICoreWebView2`
   * `Add_WebResourceRequested`
   * `Remove_WebResourceRequested`
   * `AddWebResourceRequestedFilter`
   * `RemoveWebResourceRequestedFilter`
   * `Reload`
*  `ICoreWebView2_2`
   * `Add_WebResourceResponseReceived`
   * `Remove_WebResourceResponseReceived`
   * `NavigateWithWebResourceRequest`
*  `ICoreWebView2Environment`
   * `CreateWebResoruceResponse`
*  `ICoreWebView2Environment2`
   * `CreateWebResourceRequest`
*  `ICoreWebView2WebResourceRequest`
*  `ICoreWebView2WebResourceRequestedEventArgs`


### DOM/Content Loaded

Learn how to handle events when content is loaded in the WebView2.

*  `ICoreWebView2ContentLoadingEventArgs`
*  `ICoreWebView2.ContentLoading Event`
*  `ICoreWebView2DOMContentLoadedEventArgsIcoreWebView2`
   * `Add_ContentLoading`
   * `Remove_ContentLoading`
*  `ICoreWebView2_2`
   * `Add_DOMContentLoaded`
   * `Remove_DOMContentLoaded`
*  `ICoreWebView2`
   * `Add_ContainsFullScreenElementChanged`
   * `get_ContainsFullScreenElement`
   * `remove_ContainsFullScreenElementChanged`
   * `Add_DocumentTitleChanged`
   * `Remove_DocumentTitleChanged`
   * `get_DocumentTitle`
*  `ICoreWebView2Controller`
   * `Close`


### Server/Client Certificates

Learn how to work with certificates in WebView2 controls (todo: confirm)
*  `ICoreWebView2`
   * `COREWEBVIEW2_CLIENT_CERTIFICATE_KIND`
*  `ICoreWebView2ClientCertificate`
*  `ICoreWebView2ClientCertificateCollection`
*  `ICoreWebView2ClientCertificateRequestedEventArgs`
*  `ICoreWebView2_5`
   * `add_ClientCertificateRequested`


<!-- ====================================================================== -->
## Working with Chrome Developer Protocol (CDP)

Learn how to automate tasks in the DevTools in a WebView2 control using CDP (todo: confirm)
*  `ICoreWebView2DevToolsProtocolEventRecievedEventArgs`<!--todo: check typo in API name-->
*  `ICoreWebView2DevToolsProtocolEventReciever`<!--todo: check typo in API name-->
*  `CallDevToolsProtocolMethodForSession` (WebView2 Win32 C++ IcoreWebView2_11)
*  `ICoreWebView2Settings`
   * `AreDevToolsEnabled`
*  `ICoreWebView2`
   * `CallDevToolsProtocolMethod`
   * `GetDevToolsProtocolEventReciever`<!--todo: check typo in API name-->
   * `OpenDevToolsWindow`


<!-- ====================================================================== -->
## iFrames

Learn how to work with iFrames in content displayed in WebView2 controls

*  `ICoreWebView2Frame`
*  `ICoreWebView2FrameCreatedEventArgs`
*  `ICoreWebView2FrameInfo`
*  `ICoreWebView2FrameInfoCollection`
*  `ICoreWebView2FrameInfoCollectionIterator`
*  `ICoreWebView2`
   * `Add_FrameNavigationCompleted`
   * `Remove_FrameNavigationCompleted`
   * `Add_FrameNavigationStarting`
   * `Remove_frameNavigationStarting`
   * `Add_HistoryChanged`
   * `Remove_HistoryChanged`
   * `IcoreWebView2_4Add_FrameCreated`


<!-- ====================================================================== -->
## Authentication

Learn how to handle basic authentication in WebView2 controls.

*  `ICoreWebView2BasicAuthenticationRequestedEventArgs`
*  `ICoreWebView2BasicAuthenticationResponse`
*  `ICoreWebView2HttpHeadersCollectionIterator`
*  `ICoreWebView2HttpRequestHeaders`
*  `ICoreWebView2HttpResponseHeaders`
*  `ICoreWebView2`
   * `Add_BasicAutheneticationRequested`<!--todo: check typo in API name-->



<!-- ====================================================================== -->
## Environment setup

Learn how to specify settings before WebView2 controls are created.

*  `ICoreWebView2Environment`
   * `Add_NewBrowserVersionAvailable`
   * `Get_browserVersionString`
*  `ICoreWebView2EnvionmentOptions`<!--todo: check typo in API name-->
*  `ICore_WebView2_2`
   * `Get_Environment`


<!-- ====================================================================== -->
## Rendering WebView2 in native apps (Hosting)

These APIS are used to set up the WV2 rendering system in native apps.  For example, how wv2 renders output into the host app, how wv2 handles input, focus, accessibility (applies to C++ only)

<!-- *Won't be able to do for hackathon -->

*  `ICoreWebView2Controller` (Hosting-related settings for WebView) – app or wv2 elements host WebView
   * `Get_CoreWebView2`
*  `ICoreWebView2CompositionController`
*  `ICoreWebView2Controller`
*  `ICoreWebView2`
   * `Add_NewWindowRequested`
   * `Remove_NewWindowRequested`
*  `ICoreWebView2Environment`
   * `CreateCoreWebView2Controller`
*  `ICoreWebView2Environment3`
   * `CreateCoreWebview2CompositionController`
*  `ICoreWebView2Environment4`
   * `GetProviderForHwnd`

<!-- *  ` -->

### WebView2 Properties (UI?)

*  `ICoreWebView2`
   * `COREWEBVIEW2_BOUNDS_MODE`
   * `COREWEBVIEW2_COLOR`
*  `ICoreWebView2Controller`
   * `Close`
   * `Get_Bounds`
   * `Get_IsVisible`
   * `ZoomFactorChanged`
   * `Get_ZoomFactor`
   * `SetBoundsAndZoomFactor`
*  `ICoreWebView2Controller2`
   * `Get_DefaultBackgroundColor`
   * `Put_DefaultBackgroundColor`
*  `ICoreWebView2Controller3`
   * `Get_BoundsMode`


<!-- ====================================================================== -->
## Window Management

All tasks related to the management of a window.

*  `IcoreWebView2NewWindowRequestedEventArgs`
*  `IcoreWebView2WindowFeatures`
*  `IcoreWebView2`
   * `Add_WindowCloseRequested`
   * `Remove_WindowCloseRequested`
   * `COREWEBVIEW2_MOVE_FOCUS_REASON`
*  `ICoreWebView2MoveFocusRequestedEventArgs`
*  `ICoreWebview2Controller`
   * `GotFocus`
   * `LostFocus`
   * `MoveFocusRequested`
   * `MoveFocus`
   * `Get_ParentWindow`
   * `NotifyParentWindowPositionChanged`
*  `ICoreWebView2Controller3`
   * `Add_RasterizationScaleChanged`
   * `Get_BoundsMode`
   * `Get_ShouldDetectMonitorScaleChanges`
   * `Remove_RasterizationScaleChanged`


<!-- ====================================================================== -->
## User Data

Learn how to work with the user data folder.

*  `ICoreWebView2Environment7`
   * `Get_UserDataFolder`


<!-- ====================================================================== -->
## Input

### Keyboard input

Learn how to handle key press events.

*  `ICoreWebView2`
   * `COREWEBVIEW2_KEY_EVENT_KIND`
   * `COREWEBVIEW2_MOUSE_EVENT_KIND`
   * `COREWEBVIEW2_MOUSE_EVENT_VIRTUAL_KEYS`
   * `COREWEBVIEW2_PHYSICAL_KEY_STATUS`
*  `ICoreWebView2AcceleratorKeyPressedEventArgs`
*  `ICoreWebView2Controller`
   * `AcceleratorKeyPressed`
*  `ICoreWebView2Settings3`
   * `AreBrowswerAcceleratorKeysEnabled`


### Mouse input

Learn how to work with the mouse for input on a WebView2 control.

*  `ICoreWebView2`
   * `COREWEBVIEW2_POINTER_EVENT_KIND`
*  `ICoreWebView2PointerInfo`
*  `ICoreWebView2Environment3`
   * `CreateCoreWebView2PointerInfo`
*  `Touch inputICoreWebView2Settings6`
   * `IsSwipeNavigationEnabled`


### Pinch zoom

Learn how to work with touch input in a WebView2 control.

*  `ICoreWebView2Settings`
   * `IsZoomControlEnabled`
*  `ICoreWebView2Settings5`
   * `IsPinchZoomEnabled`


<!-- ====================================================================== -->
## Performance optimizations/tools and debugging

Learn how to handle performance related events for WebView2 controls.

*  `ICoreWebView2_3`
   * `Get_IsSuspended`
   * `Resume`
   * `TrySuspend`
*  `ICoreWebView2_6`
   * `OpenTaskManagerWindow`
*  `ICoreWebView2Settings`
   * `IsBuiltInErrorPageEnabled` <!--todo: clarify note: (probs for navigation and process)-->


<!-- ====================================================================== -->
## Misc.

*  `ICoreWebView2Deferral`
*  `ICoreWebView2StringCollection`
*  `ICoreWebView2`
   * `get_Settings`


<!-- ====================================================================== -->
<!-- ## See also -->
