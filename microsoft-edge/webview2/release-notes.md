---
description: Release notes for Microsoft Edge WebView2 SDK
title: Release Notes for Microsoft Edge WebView2 for Win32, WPF, and WinForms
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/29/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html
---
# Release notes for WebView2 SDK

The WebView2 team updates the [WebView2 SDK](https://www.nuget.org/packages/Microsoft.Web.WebView2) on a six-week cadence.  Review the following content for up-to-date information on product announcements, additions, modifications, and breaking changes to the APIs.

> [!NOTE]
> Make sure to re-compile your WebView2 app after updating the WebView2 SDK NuGet package.  The WebView2 team recommends the following:
> *  Use the Canary preview channel of Microsoft Edge when you develop using a prerelease version of the WebView2 SDK package.  Canary is the recommended preview channel because it ships at the fastest cadence and has the newest APIs.
> *  Use the Evergreen WebView2 Runtime when you use a release version of the WebView2 SDK package.
>
> For more information, see [Matching the Runtime version with the SDK version](./concepts/versioning.md#matching-the-runtime-version-with-the-sdk-version).

WebView2 bug fixes are either Runtime-specific or SDK-specific.


<!-- ====================================================================== -->
## Minimum version of the browser or Runtime to load WebView2

To load WebView2, the minimum version of Microsoft Edge or the WebView2 Runtime is 86.0.616.0.  The minimum version to load WebView2 only changes when a breaking change occurs in the web platform.

To use a prerelease SDK along with a Microsoft Edge preview channel, navigate to [Switch to a preview channel to test upcoming APIs and features](how-to/set-preview-channel.md).


<!-- ====================================================================== -->
## 1.0.1056-prerelease

Release Date: October 29, 2021

[NuGet package for WebView2 SDK 1.0.1056-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1056-prerelease)

For full API compatibility, this version of the WebView2 SDK requires Microsoft Edge version 97.0.1056.0 or higher.

### General

*   General reliability improvements.

#### Experimental Features

*  The [Download Positioning and Anchoring API](/microsoft-edge/webview2/reference/win32/icorewebview2experimental11?view=webview2-1.0.1056-prerelease&preserve-view=true).  This API enables:
   *  Changing the position of the download dialog, relative to the WebView2 bounds.  You can anchor the download dialog to the **Download** button, instead of the default position, which is the top-right corner.
   *  Programmatically opening and closing the default download dialog.
   *  Making changes in response to the dialog opening and closing.
*  The [HTTP Authentication API](/microsoft-edge/webview2/reference/win32/icorewebview2experimental10?view=webview2-1.0.1056-prerelease&preserve-view=true).

#### Bug Fixes

*   The real process exit code is now provided as `ExitCode` in `ICoreWebView2ProcessFailedEventArgs2` for `COREWEBVIEW2_PROCESS_FAILED_KIND_BROWSER_PROCESS_EXITED` process failure.
*   The `--js-flags` switch is now honored in the `AdditionalBrowserArguments` that are provided in `CoreWebView2EnvironmentOptions`.
*   Fixed access to the `name` property for host objects in JavaScript. ([Issue #641](https://github.com/MicrosoftEdge/WebView2Feedback/issues/641))
*   Fixed an `InvalidCastException` in the WPF control when it's implicitly initialized prior to the event loop starting. ([Issue #1577](https://github.com/MicrosoftEdge/WebView2Feedback/issues/1577))


<!-- ====================================================================== -->
## 1.0.1020.30

Release Date: October 25, 2021

[NuGet package for WebView2 SDK 1.0.1020.30](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1020.30)

For full API compatibility, this version of the WebView2 SDK requires WebView2 Runtime version 95.1020.30 or higher.

### General

#### Bug Fixes

*   Updated `EnsureCoreWebView2Async` to not throw exceptions when the WPF source property is set. ([Issue #1781](https://github.com/MicrosoftEdge/WebView2Feedback/issues/1781))
*   Fixed a bug where WebView2 crashes after interacting with multiple windows that show a download UI. ([Issue #1723](https://github.com/MicrosoftEdge/WebView2Feedback/issues/1723))

#### Promotions

The following items are now stable:
*   [PrintToPdf API](/microsoft-edge/webview2/reference/win32/icorewebview2_7?view=webview2-1.0.1020.30&preserve-view=true#printtopdf).

<!-- ====================================================================== -->
## 1.0.992.28

Release Date: September 27, 2021

[NuGet package for WebView2 SDK 1.0.992.28](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.992.28)

For full API compatibility, this version of the WebView2 SDK requires WebView2 Runtime version 94.0.992.31 or higher.

### General

#### Bug Fixes

*   Fixed missing WebView2 DLLs (which led to initialization failure) when `PlatformTarget` isn't set in the user's .NET project. ([Issue #1061](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1061))

#### Promotions

The following items are now stable:
*   [OpenTaskManagerWindow API](/microsoft-edge/webview2/reference/win32/icorewebview2_6?view=webview2-1.0.992.28&preserve-view=true#summary).
*   [isSwipeNavigationEnabled property](/microsoft-edge/webview2/reference/win32/icorewebview2settings6?view=webview2-1.0.992.28&preserve-view=true#summary).
*   [BrowserProcessExited API](/microsoft-edge/webview2/reference/win32/icorewebview2browserprocessexitedeventargs?view=webview2-1.0.992.28&preserve-view=true#summary).
*   [get_Name property](/microsoft-edge/webview2/reference/win32/icorewebview2newwindowrequestedeventargs2?view=webview2-1.0.992.28#get_name&preserve-view=true#summary) on `ICoreWebView2NewWindowRequestedEventArgs2` interface.


<!-- ====================================================================== -->
## 1.0.1018-prerelease

Release Date: September 20, 2021

[NuGet package for WebView2 SDK 1.0.1018-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1018-prerelease)

For full API compatibility, this prerelease version of the WebView2 SDK requires Microsoft Edge version 95.0.1018.0 or higher.

### General

#### Experimental Features
*   Added a [media API](/microsoft-edge/webview2/reference/win32/icorewebview2experimental9?view=webview2-1.0.1018-prerelease&preserve-view=true#summary) that enables developers to mute/unmute media within the WebView.
*   Added support for [multiple user profiles](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment8?view=webview2-1.0.1018-prerelease&preserve-view=true) with WebView2.

#### Bug fixes
*   Fixed a bug where WebView2 stops rendering when the app is spanning monitors and the monitor scale changes.
*   Fixed a bug where closing the download UI crashes WebView2 when multiple download windows are open. ([Issue #1723](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1723))
*   Fixed a build/initialization error when PlatformTarget isn't set in the user's .NET project. ([Issue #730](https://github.com/MicrosoftEdge/WebViewFeedback/issues/730) and [Issue #1548](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1548))


<!-- ====================================================================== -->
## 1.0.1010-prerelease

Release Date: September 14, 2021

[NuGet package for WebView2 SDK 1.0.1010-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1010-prerelease)

For full API compatibility, this prerelease version of the WebView2 SDK requires Microsoft Edge version 95.0.1010.0 or higher.

### General
*   WebView2 performance improvements.
*   Reliability fixes. ([Issue #1605](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1605) and [Issue #1678](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1678))
*   Added performance improvements during startup and when the host app is in the foreground.

#### Experimental Features
*   Removed silent failures by using `EnsureCoreWebView2Async`, which throws an `ArgumentException` when called multiple times with incompatible parameters.
*   Changed default handling of the [UserDataFolder](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment5?view=webview2-1.0.1010-prerelease&preserve-view=true#get_userdatafolder) property in the environment object.
    > [!CAUTION]
    > **Breaking Change**:  The default handling for the UDF if the developer doesn't specify where to put it will be changing. For details, navigate to [Announcement: User directory folder default handling updates](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1410).
*   Added [navigation & script APIs](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframe?view=webview2-1.0.1010-prerelease&preserve-view=true) for iframes.
*   Added [MemoryUsageTargetLevel](/microsoft-edge/webview2/reference/win32/icorewebview2experimental5?view=webview2-1.0.1010-prerelease&preserve-view=true) which allows developers to specify memory consumption levels, such as low, or normal.
*   Added [ExclusiveUserDataFolderAccess](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironmentoptions?view=webview2-1.0.1010-prerelease&preserve-view=true) to environment options.
*   Added [HiddenPdfToolbarItems](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsettings6?view=webview2-1.0.1010-prerelease&preserve-view=true) to customize PDF toolbar items.
*   Added [PrintToPdf](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprinttopdfcompletedhandler?view=webview2-1.0.1010-prerelease&preserve-view=true), which allows printing the current page to PDF. Also, you can use optional custom settings with this new API.
*   Added [AllowExternalDrop](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller3?view=webview2-1.0.1010-prerelease&preserve-view=true) property to allow the dragging and dropping of objects from outside a WebView2 control into it.
*   Added [ContextMenu APIs](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenuitem?view=webview2-1.0.1010-prerelease&preserve-view=true) which allow customization of the WebView2 context menu.

#### Bug fixes
*   Improved how host objects exceptions are caught in your JavaScript code.
*   Replaced WebView2 icon with a generic icon in DevTools windows.
*   Turn on the Tab screen sharing option when `MediaDevices.getDisplayMedia()` is used. ([Issue #1566](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1566))
*   Fixed a bug in the Client Certificate API, when the correct certificate was not selected. This is a Runtime change. ([Issue #1666](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1666))
*   Fixed bug where `window.chrome.webview` was unavailable in new windows in the same parent domain. This change is Runtime-specific. ([Issue #1144](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1144))
*   Fixed a bug where dropdown menus or lists were displayed behind the window that has focus. ([Issue #411](https://github.com/MicrosoftEdge/WebViewFeedback/issues/411))
*   Fixed focus issues when using `put_IsVisible(false)`. ([Issue #238](https://github.com/MicrosoftEdge/WebViewFeedback/issues/238))
*   Fixed a bug to apply `SetVirtualHostNameToFolderMapping` to popup windows.
*   Fixed bugs where an `IDispatch` objects were returned as `IUnknown`.

#### Promotions

The following APIs are promoted to stable in this prerelease SDK:
*   `IsSwipeNavigationEnabled`.
*   `BrowserProcessExited`.
*   `OpenBrowserTaskManager`.


<!-- ====================================================================== -->
## 1.0.961.33

Release Date: September 8, 2021

[NuGet package for WebView2 SDK 1.0.961.33](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.961.33)

For full API compatibility, this version of the WebView2 SDK requires WebView2 Runtime version 93.0.961.44 or higher.

### General

#### Bug Fixes
*   Fixed a bug that caused `ERR_SSL_CLIENT_AUTH_CERT_NEEDED` errors. This is a Runtime change.
*   Fixed a bug that special browser keys like **Refresh**, **Home**, **Back**, and so on can't be turned off using `AreBrowserAcceleratorKeysEnabled`. This change is Runtime-specific.
*   Fixed a bug where the transparent background color isn't rendered.
*   Fixed a bug that caused a white flicker when loading WebView2.
*   Fixed a bug in WebView2 .NET controls where WebView2 windows were blank when created in the background. ([Issue #1077](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1077))
*   Fixed a bug where settings were not updated when the user navigated to or a new window displayed `about:blank` pages. This is a Runtime change.

#### Promotions

The following items are now stable:
*   [Client Certificate API](/microsoft-edge/webview2/reference/win32/icorewebview2_5?view=webview2-1.0.961.33&preserve-view=true#add_clientcertificaterequested).


<!-- ====================================================================== -->
## 1.0.955-prerelease

Release Date: July 26, 2021

[NuGet package for WebView2 SDK 1.0.955-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.955-prerelease)

For full API compatibility, this prerelease version of the WebView2 SDK requires Microsoft Edge version 93.0.967.0 or higher.

### General
*   WebView2 performance improvements.
*   Added partial Event Tracing for Windows (ETW) support.
*   Removed Microsoft branding from `edge://history`.
*   New default Download UI.

#### Experimental Features
*   Added [OpenTaskManagerWindow](/microsoft-edge/webview2/reference/win32/icorewebview2experimental4?view=webview2-1.0.955-prerelease&preserve-view=true#opentaskmanagerwindow) to launch a WebView2 browser task manager.
*   Added [NewWindowRequestedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalnewwindowrequestedeventargs?view=webview2-1.0.955-prerelease&preserve-view=true#get_name).
*   Added support for virtual host name mapping to work with Service Workers.
*   Added [HiddenPdfToolbarItems](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsettings6?view=webview2-1.0.955-prerelease&preserve-view=true#get_hiddenpdftoolbaritems) to customize the PDF toolbar items.

#### Bug fixes
*   Fixed bug that broke the `edge://downloads` and `edge://history` pages. This change is Runtime-specific.
*   Fixed bugs to improve reliability in the WebView2Loader.dll.
*   Fixed bug in which `NewWindowRequested` event handler launched two windows when handling links that use `target=_blank`.
*   Fixed a bug in WebView visual hosting that flickered before startup.
*   Fixed bug when `add_WebResourceRequested` didn't work on WebView2 controls created using `add_NewWindowRequested`. ([Issue #616](https://github.com/MicrosoftEdge/WebViewFeedback/issues/616))
*   Allow the host app to set foreground on a different application in response to events including `NavigationStarting`, `AddHostObjectToScript` methods, `WebMessageReceived`, and `NewWindowRequested`. ([Issue #1092](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1092))
*   Fix bug to trigger the `PermissionRequested` event for the microphone. This change is Runtime-specific.([Issue #1462](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1462))
*   Fixed bug when `ExecuteScriptAsync` blocked after several successful runs. This change is Runtime-specific. ([Issue #1348](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1348))
*   Fixed bug preventing non-ASCII filenames from being used in `ResultFilePath` in `DownloadStartingEventArgs`. ([Issue #1428](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1428))
*   Fixed bug where the title bar on the default popup wasn't displayed completely. This change is Runtime-specific. ([Issue #1016](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1016))

#### Promotions
*   [add_ClientCertificateRequested](/microsoft-edge/webview2/reference/win32/icorewebview2_5?view=webview2-1.0.955-prerelease&preserve-view=true#add_clientcertificaterequested) was promoted to stable.

### .NET

#### Bug fixes
*   Fixed an issue in WebView2 .NET API reference documentation that caused only the first exception to be displayed.
*   .NET core libraries are now built in release mode. To debug, ensure you clear the **Just my code** checkbox.
*   Fixed a bug that crashed WebView2 on forms with child forms. The child form, with the find in page bar open, caused WebView2 to crash when the child form was closed. ([Issue #1097](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1097))


<!-- ====================================================================== -->
## 1.0.902.49

Release Date: July 26, 2021

[NuGet package for WebView2 SDK 1.0.902.49](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.902.49)

For full API compatibility, this version of the WebView2 SDK requires WebView2 Runtime version 92.0.902.49 or higher.

### General

#### Bug Fixes
*   Fix bug that broke the `IsBuiltInErrorPageEnabled` property, which turned off the error page that's displayed when there's a navigation failure or render process failure.  This change is Runtime-specific. ([Issue #634](https://github.com/MicrosoftEdge/WebViewFeedback/issues/634))
*   Fixed an issue where WebView2 controls took focus away from the user's focus.
*   Fixed bug when `AddScriptToExecuteOnDocumentCreated` didn't work on child windows. ([Issue #935](https://github.com/MicrosoftEdge/WebViewFeedback/issues/935))
*   Fixed a bug that caused inactive tabs to be automatically discarded. ([Issue #637](https://github.com/MicrosoftEdge/WebViewFeedback/issues/637))
*   Fixed a bug when a navigation event was interrupted by another navigation event resulting in the Navigation ID of `NavigationCompleted` events to be incorrect. ([Issue #1142](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1142))

#### Promotions

The following items are now in stable:

*   [add_FrameCreated](/microsoft-edge/webview2/reference/win32/icorewebview2_4?view=webview2-1.0.902.49&preserve-view=true#add_framecreated).
*   [get_IsGeneralAutofillEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings4?view=webview2-1.0.902.49&preserve-view=true#get_isgeneralautofillenabled).
*   [get_IsPinchZoomEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings5?view=webview2-1.0.902.49&preserve-view=true#get_ispinchzoomenabled).
*   [The Download APIs](/microsoft-edge/webview2/reference/win32/icorewebview2_4?view=webview2-1.0.902-prerelease&preserve-view=true#add_downloadstarting).
*   [AddHostObjectToScriptWithOrigins](/microsoft-edge/webview2/reference/win32/icorewebview2frame?view=webview2-1.0.902-prerelease&preserve-view=true#addhostobjecttoscriptwithorigins) API with iFrame element support.


<!-- ====================================================================== -->
## 1.0.902-prerelease

Release Date: June 1, 2021

[NuGet package for WebView2 SDK 1.0.902-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.902-prerelease)

For full API compatibility, this prerelease version of the WebView2 SDK requires Microsoft Edge version 92.0.902.0 or higher.

### General

*   Improved WebView2 startup performance and disk footprint.

#### Experimental Features

*   Added [IsSwipeNavigationEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsettings5?view=webview2-1.0.902-prerelease&preserve-view=true#get_isswipenavigationenabled) property to enable or disable the ability of the end user to use swiping gesture on touch input enabled devices to navigate in WebView2.
*   Added [BrowserProcessExited](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment4?view=webview2-1.0.902-prerelease&preserve-view=true#add_browserprocessexited) event.
*   Added [add_ClientCertificateRequested API](/microsoft-edge/webview2/reference/win32/icorewebview2experimental3?view=webview2-1.0.902-prerelease&preserve-view=true#add_clientcertificaterequested). It allows showing a client certificate dialog prompt if desired and enables access to required metadata to replace default client certificate dialog prompt.

#### Bug fixes

*   Fix a bug where mouse left click doesn't dismiss context menu. This change is Runtime-specific.
*   Fixed a bug where WebView2 creation fails when exe files for apps sharing the same user data folder have inconsistent version info.
*   Fixed a bug where special browser keys such as `Refresh`, `Home`, and `Back` can't be disabled by `AreBrowserAcceleratorKeysEnabled`. This change is Runtime-specific.
*   Fixed a bug in WebView2 .NET controls, where WebView2 windows are blank when created in the background. ([Issue #1077](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1077)).
*   Dismissing a file picker dialog by pressing `Enter` or `Esc` no longer crashes WPF applications using WebView control. ([Issue #1099](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1099)).
*   Fixed a bug that [AllowSingleSignOnUsingOSPrimaryAccount](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions#get_allowsinglesignonusingosprimaryaccount) doesn't work properly with WebView2 when a `WebResourceRequested` event handler is attached. This change is Runtime-specific. ([Issue #1183](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1183)).
*   Downloading a file no longer breaks WebView2 `DefaultBackgroundColor` transparency. This change is Runtime-specific. ([Issue #1108](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1108)).
*   Removed screen sharing media picker message that contains Microsoft branding. ([Issue #940](https://github.com/MicrosoftEdge/WebViewFeedback/issues/940)).
*   Fixed a bug in WebView2 WinForm control where hiding the parent form doesn't hide the WebView2 control ([Issue #828](https://github.com/MicrosoftEdge/WebViewFeedback/issues/828) and [Issue #1079](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1079)).
*   Added static WS_CLIPCHILDREN style to WebView2's WPF windows. ([Issue #1013](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1013)).
*   Fixed a bug where right-clicking a link crashes the WebView2 host app. This change is Runtime-specific.
*   Fixed a reliability bug that could crash the host app process when moving to a newer Edge WebView2 Runtime version.
*   **DEPRECATION**: Officially deprecated the `DefaultBackgroundColor` API for Windows 7.

#### Promotions

*   [Download API](/microsoft-edge/webview2/reference/win32/icorewebview2_4?view=webview2-1.0.902-prerelease&preserve-view=true#add_downloadstarting) is now promoted to stable.
*   [PinchZoom API](/microsoft-edge/webview2/reference/win32/icorewebview2settings5?view=webview2-1.0.902-prerelease&preserve-view=true#get_ispinchzoomenabled) is now promoted to stable.
*   [AddFrameCreated](/microsoft-edge/webview2/reference/win32/icorewebview2_4?view=webview2-1.0.902-prerelease&preserve-view=true#add_framecreated) is now promoted to stable.
*   [AddHostObjectToScriptWithOrigins](/microsoft-edge/webview2/reference/win32/icorewebview2frame?view=webview2-1.0.902-prerelease&preserve-view=true#addhostobjecttoscriptwithorigins) API promoted to stable with iFrame element support.
*   [Autofill API](/microsoft-edge/webview2/reference/win32/icorewebview2settings4?view=webview2-1.0.902-prerelease&preserve-view=true#get_isgeneralautofillenabled) is now promoted to stable.
    > [!NOTE]
    > There is no current API to delete the locally stored general autofill and password autosave information.  Please provide a control to delete the data, which will involve deleting the entire User Data Folder.

### .NET

#### Bug fixes

*   Fixed a bug in WebView2 WinForm control where WebView2 window visibility is not updated properly after parent window is disposed. ([Issue #1282](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1282) and [Issue #828](https://github.com/MicrosoftEdge/WebViewFeedback/issues/828)).
*   Fixed a bug in WebView2 WPF control that Source property binding in WPF OneWay binding mode is not working properly. ([Issue #619](https://github.com/MicrosoftEdge/WebViewFeedback/issues/619) and [Issue #608](https://github.com/MicrosoftEdge/WebViewFeedback/issues/608)).


<!-- ====================================================================== -->
## 1.0.864.35

Release Date: May 31, 2021

[NuGet package for WebView2 SDK 1.0.864.35](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.864.35)

For full API compatibility, this version of the WebView2 SDK requires WebView2 Runtime version 91.0.864.35 or higher.

### General

#### Bug Fixes

*   Fixed a reliability bug that could crash the host app process when moving to a newer Edge WebView2 Runtime version.
*   Fixed a bug that prevented memory purge in some situations. This change is Runtime-specific.
*   Fixed error in 818 SDK release package where project couldn't find the `WebView2.h` file. ([Issue #1209](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1209)).
*   Fixed a bug which caused WebResourceRequested event to be dropped for some requests with binary bodies.
*   Improve `NewWindowRequested` documentation. ([Issue #448](https://github.com/MicrosoftEdge/WebViewFeedback/issues/448)).

#### Promotions
*   [UserAgent API](/microsoft-edge/webview2/reference/win32/icorewebview2settings2?view=webview2-1.0.864.35&preserve-view=true#get_useragent) is now stable.
*   [AreBrowserkeysenabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings3?view=webview2-1.0.864.35&preserve-view=true#get_arebrowseracceleratorkeysenabled) is now stable.

### .NET

#### Bug Fixes
*   Fixed a bug in WebView2 .NET controls that first header is missing when iterating `CoreWebView2WebResourceRequest` headers collection. ([Issue #1123](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1123)).


<!-- ====================================================================== -->
## 1.0.865-prerelease

Release Date: April 26, 2021

[NuGet package for WebView2 SDK 1.0.865-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.865-prerelease)

For full API compatibility, this prerelease version of the WebView2 SDK requires Microsoft Edge version 91.0.865.0 or higher.

### General

#### Experimental Features

*   Added [IsPinchZoomEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsettings4?view=webview2-1.0.865-prerelease&preserve-view=true#ispinchzoomenabled) setting. It allows you to turn on or off page scale zoom control in a setting.
*   Added Custom [add_DownloadStarting](/microsoft-edge/webview2/reference/win32/icorewebview2experimental2?view=webview2-1.0.865-prerelease&preserve-view=true#add_downloadstarting) API.  It allows you to block downloads, save to a different path, and access the required metadata to build custom download UI.
*   Added `iframe` element support from [AddHostObjectToScriptWithOrigins](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframe?view=webview2-1.0.865-prerelease&preserve-view=true#addhostobjecttoscriptwithorigins).
*   Added sample code for [WPF sample app](https://github.com/MicrosoftEdge/WebView2Samples/tree/master/SampleApps/WebView2WpfBrowser) to use the API to turn off browser function keys.
*   Added the [UpdateRuntime](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment3?view=webview2-1.0.865-prerelease&preserve-view=true#updateruntime) API, to easily update the WebView2 Runtime.

#### Bug fixes

*   Fixed handler for a `Chromium DevTools Protocol` message with `POST` binary data in WebView2.
*   Turned off the `OpenSaveAsAwareness` download UI, because it included links to `edge://settings`.  ([Issue #1120](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1120)).
*   Removed branding from screen share dialog.  ([Issue #940](https://github.com/MicrosoftEdge/WebViewFeedback/issues/940)).
*   Fixed bug where the [SetWindowDisplayAffinity](/windows/win32/api/winuser/nf-winuser-setwindowdisplayaffinity) function broke WebView2 when it stopped screen capture in an WebView2 app.  ([Issue #841](https://github.com/MicrosoftEdge/WebViewFeedback/issues/841)).
*   Fixed bug for composition hosting where mouse input stopped working if any pen input was sent to WebView2.
*   Fixed bug that broke mouse input after any pen input.  This change is Runtime-specific.

### .NET

#### Experimental Features

*   Added WebView2 designer tool to WPF Toolbox.  ([Issue #210](https://github.com/MicrosoftEdge/WebViewFeedback/issues/210)).
*   Added WebView2 UI element in .NET Designer Mode.

#### Bug fixes

*   Improved COM Exception descriptions by wrapping each in a more detailed .NET exception.  ([Issue #338](https://github.com/MicrosoftEdge/WebViewFeedback/issues/338)).  This change is Runtime-specific.
*   Fixed bug caused when you select `Tab` to shift focus caused WebView2 control to crash in Microsoft Visual Studio Tools for Office.  ([Issue #589](https://github.com/MicrosoftEdge/WebViewFeedback/issues/589) and [Issue #933](https://github.com/MicrosoftEdge/WebViewFeedback/issues/933)).  This change is Runtime-specific.
*   Improved .NET framework loader down level to be more robust.  ([Issue #946](https://github.com/MicrosoftEdge/WebViewFeedback/issues/946)).
*   Fixed bug that caused crash when you try to refresh before first navigation completed.  ([Issue #1011](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1011)).
*   Fixed initialization so navigation occurs during `CoreWebView2InitializationCompleted`.  ([Issue #1050](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1050)).
*   Improved .NET browser process crash error handling.  You may now recreate controls after you handle a `ProcessFailed` event without a crash.  ([Issue #996](https://github.com/MicrosoftEdge/WebViewFeedback/issues/996)).


<!-- ====================================================================== -->
## 1.0.818.41

Release Date: April 21, 2021

[NuGet package for WebView2 SDK 1.0.818.41](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.818.41)

For full API compatibility, this version of the WebView2 SDK requires WebView2 Runtime version 90.0.818.41 or higher.

### General

#### Features

*   Extended the `ProcessFailed` event.  It now raises for non-renderer child processes and frame renderers.
*   Added `iframe` element support for `AddScriptToExecuteOnDocumentCreated`.
*   Improved WebView2 code to be more resilient to `.exe` application files with malformatted version information.  ([Issue #850](https://github.com/MicrosoftEdge/WebViewFeedback/issues/850)).
*   Removed `--winhttp-proxy-resolver` from WebView browser process command-line, turned on other proxy command-line options for WebView2.


<!-- ====================================================================== -->
## 1.0.824-prerelease

Release Date: March 8, 2021

[NuGet package for WebView2 SDK 1.0.824-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.824-prerelease)

For full API compatibility, this prerelease version of the WebView2 SDK requires Microsoft Edge version 91.0.824.0 or higher.

### General

#### Features

*   Extended the `ProcessFailed` event.  It now raises for non-renderer child processes and frame renderers.
*   Added experimental [AreBrowserAcceleratorKeysEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsettings2?view=webview2-1.0.824&preserve-view=true#get_arebrowseracceleratorkeysenabled) setting.  You may prevent the browser from responding to keyboard shortcuts related to navigation, printing, saving, and other browser-specific functions.
*   Added `iframe` element support for `AddScriptToExecuteOnDocumentCreated`.

#### Promotion

*   [UserAgent](/microsoft-edge/webview2/reference/win32/icorewebview2_2?view=webview2-1.0.721-prerelease&preserve-view=true#add_webresourceresponsereceived) API is now promoted to Stable.
*   Rasterization Scale APIs ([RasterizationScale](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontroller?view=webview2-1.0.721-prerelease&preserve-view=true#get_rasterizationscale) property,  [RasterizationScaleChanged](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontroller?view=webview2-1.0.721-prerelease&preserve-view=true#add_rasterizationscalechanged) event, [BoundsMode property](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontroller?view=webview2-1.0.721-prerelease&preserve-view=true#get_boundsmode), and [ShouldDetectMonitorScaleChanges](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontroller?view=webview2-1.0.721-prerelease&preserve-view=true#get_shoulddetectmonitorscalechanges) property) are now promoted to Stable.

#### Bug fixes

*   Expanded supported C++ and .NET project types such as MFC and ATL.  ([Issue #506](https://github.com/MicrosoftEdge/WebViewFeedback/issues/506), [Issue #669](https://github.com/MicrosoftEdge/WebViewFeedback/issues/669), and [Issue #851](https://github.com/MicrosoftEdge/WebViewFeedback/issues/851)).
*   Fixed a bug that Evergreen WebView2 Runtime leaks Inbound firewall entry.
*   Fixed setting Response during `WebResourceRequested` event.  ([Issue #568](https://github.com/MicrosoftEdge/WebViewFeedback/issues/568)).
*   Fixed a bug that navigating to `edge://` causes browser process to exit.  ([Issue #604](https://github.com/MicrosoftEdge/WebViewFeedback/issues/604)).
*   Fixed a bug that limited WebView2 bounds to size of screen in Visual Hosting mode.


<!-- ====================================================================== -->
## 1.0.774.44

Release Date: March 8, 2021

[NuGet package for WebView2 SDK 1.0.774.44](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.774.44)

For full API compatibility, this version of the WebView2 SDK requires WebView2 Runtime version 89.0.774.44 or higher.

### General

#### Features

*   Turned off various Microsoft Edge browser services in WebView2.
*   Visual Hosting APIs are now Generally Available.

#### Promotions

*   The following experimental APIs are now promoted to Stable.
    *   [DPI support](/microsoft-edge/webview2/reference/win32/icorewebview2_2?view=webview2-1.0.721-prerelease&preserve-view=true#add_webresourceresponsereceived) related APIs
    *   Visual hosting APIs
    *   [SetVirtualHostNameToFolderMapping](/microsoft-edge/webview2/reference/win32/icorewebview2_3?view=webview2-1.0.790-prerelease&preserve-view=true#setvirtualhostnametofoldermapping)
    *   [TrySuspend and Resume](/microsoft-edge/webview2/reference/win32/icorewebview2_3?view=webview2-1.0.790-prerelease&preserve-view=true#trysuspend)
    *   [DefaultBackgroundColor](/microsoft-edge/webview2/reference/win32/icorewebview2controller2?view=webview2-1.0.790-prerelease&preserve-view=true#get_defaultbackgroundcolor)

#### Bug fixes

*   Fixed a bug that limited WebView2 bounds to size of screen in Visual Hosting mode.


<!-- ====================================================================== -->
## 1.0.790-prerelease

Release Date: February 10, 2021

[NuGet package for WebView2 SDK 1.0.790-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.790-prerelease)

This prerelease version of the WebView2 SDK requires Microsoft Edge version 86.0.616.0 or higher.

### General

> [!IMPORTANT]
> **Breaking Change**:  WebView2 prerelease package 1.0.781 is deprecated.  Discontinue development with package 1.0.781.

> [!IMPORTANT]
> WebView2 prerelease package 0.9.430 is deprecated, and is removed with the next release.  If your WebView app uses the package, the WebView2 team recommends that you move to a newer package.

#### Features

*   Added [TrySuspend and Resume](/microsoft-edge/webview2/reference/win32/icorewebview2_3?view=webview2-1.0.790-prerelease&preserve-view=true#trysuspend) method to suspend and resume WebViews.
*   Added [SetVirtualHostNameToFolderMapping](/microsoft-edge/webview2/reference/win32/icorewebview2_3?view=webview2-1.0.790-prerelease&preserve-view=true#setvirtualhostnametofoldermapping) method that maps a virtual host name to a directory path.  ([Issue #37](https://github.com/MicrosoftEdge/WebViewFeedback/issues/37), [Issue #161](https://github.com/MicrosoftEdge/WebViewFeedback/issues/161), and [Issue #212](https://github.com/MicrosoftEdge/WebViewFeedback/issues/212)).
*   Added the [DefaultBackgroundColor](/microsoft-edge/webview2/reference/win32/icorewebview2controller2?view=webview2-1.0.790-prerelease&preserve-view=true#get_defaultbackgroundcolor) property to set the color and alpha-channel of the background.  ([Issue #414](https://github.com/MicrosoftEdge/WebViewFeedback/issues/414)).
*   Added the [UserAgent](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsettings?view=webview2-1.0.790-prerelease&preserve-view=true#get_useragent) property to get or set the User Agent.  ([Issue #122](https://github.com/MicrosoftEdge/WebViewFeedback/issues/122)).
*   Replaced the `CreateCookieWithCookie` method with the `CopyCookie` method.
*   Added visual hosting support using the [ICoreWebView2CompositionController](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller?view=webview2-1.0.790-prerelease&preserve-view=true) interface, which is created using the new `CreateCoreWebView2CompositionController` method from `ICoreWebView2Environment3`.

#### Bug fixes

*   Turned off the Microsoft Edge Shopping feature in WebView2.
*   Turned off the context menu in the PDF viewer when `AreDefaultContextMenusEnabled` is `false`.  ([Issue #605](https://github.com/MicrosoftEdge/WebViewFeedback/issues/605)).
*   Fixed a bug that returned `E_NOINTERFACE` when querying `ICoreWebView2` for `ICoreWebView2Experimental`.  ([Issue #691](https://github.com/MicrosoftEdge/WebViewFeedback/issues/691)).
*   Fixed a bug that allowed navigation with malformed URIs when `CoreWebView2NavigationStartingEventArgs.Cancel` is set to `false`.  ([Issue #400](https://github.com/MicrosoftEdge/WebViewFeedback/issues/400)).
*   Fixed a bug that blocked `window.print()` on pop-up windows with event handlers attached to `NewWindowRequested` events.  ([Issue #409](https://github.com/MicrosoftEdge/WebViewFeedback/issues/409)).
*   Fixed Dynamic DPI issue when moving apps between different monitors.  ([Issue #58](https://github.com/MicrosoftEdge/WebViewFeedback/issues/58))
*   Improved the `HRESULT` instances passed by [ICoreWebView2WebResourceResponseViewGetContentCompletedHandler::Invoke](/microsoft-edge/webview2/reference/win32/icorewebview2webresourceresponseviewgetcontentcompletedhandler?view=webview2-1.0.790-prerelease&preserve-view=true#invoke).
*   Turned off autofill manage button.  ([Issue #585](https://github.com/MicrosoftEdge/WebViewFeedback/issues/585)).
*   Fixed Visual Studio crashes while you run `WebView2.Dispose` when hosted in multiple windows.  ([Issue #816](https://github.com/MicrosoftEdge/WebViewFeedback/issues/816)) and [Issue #442](https://github.com/MicrosoftEdge/WebViewFeedback/issues/442)).
*   Fixed bug to display WebView2 control in Visual Studio Toolbox.  ([Issue #210](https://github.com/MicrosoftEdge/WebViewFeedback/issues/210)).
*   Reduced high CPU usage issues.  ([Issue #878](https://github.com/MicrosoftEdge/WebViewFeedback/issues/878)).
*   Fixed issues with deprecated 1.0.781-prerelease package.  ([Issue #875](https://github.com/MicrosoftEdge/WebViewFeedback/issues/875) and [Issue #878](https://github.com/MicrosoftEdge/WebViewFeedback/issues/878)).

#### Promotions

*   The following experimental APIs are now promoted to Stable.
    *   Visual Hosting APIs
    *   [SetVirtualHostNameToFolderMapping](/microsoft-edge/webview2/reference/win32/icorewebview2_3?view=webview2-1.0.790-prerelease&preserve-view=true#setvirtualhostnametofoldermapping)

### .NET

#### Bug fixes

*   Fixed bug that crashed WebView apps that use the WPF SDK.  The crash occurred when you selected `F4` to close a window.  ([Issue #399](https://github.com/MicrosoftEdge/WebViewFeedback/issues/399)).
*   The WebView2 initialization screen is now transparent, instead of gray.  ([Issue #196](https://github.com/MicrosoftEdge/WebViewFeedback/issues/196)).


<!-- ====================================================================== -->
## 1.0.705.50

Release Date: January 25, 2021

[NuGet package for WebView2 SDK 1.0.705.50](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.705.50)

This version of the WebView2 SDK requires WebView2 Runtime version 86.0.616.0 or higher.

### General

#### Promotions

*   The following experimental APIs are now promoted to Stable.
    *   [WebResourceResponseReceived API](/microsoft-edge/webview2/reference/win32/icorewebview2_2?view=webview2-1.0.721-prerelease&preserve-view=true#add_webresourceresponsereceived)
    *   [NavigateWithWebResourceRequest API](/microsoft-edge/webview2/reference/win32/icorewebview2environment2?view=webview2-1.0.721-prerelease&preserve-view=true#createwebresourcerequest)
    *   [Cookie management API](/microsoft-edge/webview2/reference/win32/icorewebview2cookiemanager?view=webview2-1.0.721-prerelease&preserve-view=true)
    *   [DOMContentLoaded API](/microsoft-edge/webview2/reference/win32/icorewebview2_2?view=webview2-1.0.721-prerelease&preserve-view=true#add_domcontentloaded)
    *   [WebView Environment property](/microsoft-edge/webview2/reference/win32/icorewebview2_2?view=webview2-1.0.721-prerelease&preserve-view=true#get_environment)


<!-- ====================================================================== -->
## 1.0.721-prerelease

Release Date: December 8, 2020

[NuGet package for WebView2 SDK 1.0.721-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.721-prerelease)

This prerelease version of the WebView2 SDK requires Microsoft Edge version 86.0.616.0 or higher.

### General

> [!IMPORTANT]
> **Breaking Change**:  WebView2 prerelease package 1.0.707 and package 0.9.628 are deprecated.  Discontinue development with package 1.0.707 and  package0.9.628.

#### Features

*   Added [WebView2 Group Policies](/deployedge/microsoft-edge-webview-policies).  For more information on recommended practices, navigate to [group policies for WebView2](./concepts/enterprise.md#group-policies-for-webview2).
*   > [!IMPORTANT]
    > **Breaking Change**:  Deprecated the old registry location.
    >
    > ```text
    > {Root}\Software\Policies\Microsoft\EmbeddedBrowserWebView\LoaderOverride\{AppId}
    > ```

*   Added support for [Drag and Drop](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller3?view=webview2-1.0.721-prerelease&preserve-view=true) in WebView2.
*   Added APIs to handle DPI support.
    *   Added [RasterizationScale](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontroller?view=webview2-1.0.721-prerelease&preserve-view=true#get_rasterizationscale) property to change the DPI scale for WebView content and UI popups, and associated [RasterizationScaleChanged](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontroller?view=webview2-1.0.721-prerelease&preserve-view=true#add_rasterizationscalechanged) event.
    *   Added [ShouldDetectMonitorScaleChanges](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontroller?view=webview2-1.0.721-prerelease&preserve-view=true#get_shoulddetectmonitorscalechanges) property to automatically update `RasterizationScale` property if needed.
    *   Added [BoundsMode property](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontroller?view=webview2-1.0.721-prerelease&preserve-view=true#get_boundsmode) to specify that the bounds are logic pixels and allow WebView to use `RasterizationScale` for WebView2 pixel display, and WebView use the `RasterizationScale` with the `Bounds` to get the physical size.
*   Updated `NewWindowRequested` event to handle `Ctrl`+`click` and `Shift`+`click`.  ([Issue #168](https://github.com/MicrosoftEdge/WebViewFeedback/issues/168) and [Issue #371](https://github.com/MicrosoftEdge/WebViewFeedback/issues/371)).
*   The following experimental APIs are now promoted to Stable.
    *   [WebResourceResponseReceived API](/microsoft-edge/webview2/reference/win32/icorewebview2_2?view=webview2-1.0.721-prerelease&preserve-view=true#add_webresourceresponsereceived)
    *   [NavigateWithWebResourceRequest API](/microsoft-edge/webview2/reference/win32/icorewebview2environment2?view=webview2-1.0.721-prerelease&preserve-view=true#createwebresourcerequest)
    *   [Cookie management API](/microsoft-edge/webview2/reference/win32/icorewebview2cookiemanager?view=webview2-1.0.721-prerelease&preserve-view=true)
    *   [DOMContentLoaded API](/microsoft-edge/webview2/reference/win32/icorewebview2_2?view=webview2-1.0.721-prerelease&preserve-view=true#add_domcontentloaded)
    *   [WebView Environment property](/microsoft-edge/webview2/reference/win32/icorewebview2_2?view=webview2-1.0.721-prerelease&preserve-view=true#get_environment)

### .NET

#### Features

*   Turned on WinForms designer in .NET Core 3.1+ and .NET 5.
*   Improved .NET cookie management.  ([Issue #611](https://github.com/MicrosoftEdge/WebViewFeedback/issues/611)).
*   Replaced `CoreWebView2Ready` with [CoreWebView2InitializationCompleted](/dotnet/api/microsoft.web.webview2.core.corewebview2initializationcompletedeventargs).

#### Bug fixes

*   Added [AcceleratorKeyPressed](/dotnet/api/microsoft.web.webview2.wpf.webview2.acceleratorkeypressed) event to support `AcceleratorKey` select in WebView2.  ([Issue #288](https://github.com/MicrosoftEdge/WebViewFeedback/issues/288)).
*   Removed unnecessary files from being output to WebView2 folders.  ([Issue #461](https://github.com/MicrosoftEdge/WebViewFeedback/issues/461)).
*   Improved host object API.  ([Issue #335](https://github.com/MicrosoftEdge/WebViewFeedback/issues/335) and [Issue #525](https://github.com/MicrosoftEdge/WebViewFeedback/issues/525)).


<!-- ====================================================================== -->
## 1.0.664.37

Release Date: November 20, 2020

[NuGet package for WebView2 SDK 1.0.664.37](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.664.37)

This version of the WebView2 SDK requires WebView2 Runtime version 86.0.616.0 or higher.

### General

> [!IMPORTANT]
> **Announcement**:  .NET WPF/WinForms WebView2 SDKs are now Generally Available (GA).  Starting with this release, Release SDKs are forward-compatible.  For more details, navigate to [GA announcement blog post](https://devblogs.microsoft.com/dotnet/announcing-general-availability-for-microsoft-edge-webview2-for-net-and-fixed-distribution-method).

#### Features

*   .NET WPF/WinForms WebView2 is now Generally Available (GA).
*   Fixed Distribution (Bring-your-own) mode reached GA.

### .NET

#### Bug fixes

*   `CoreWebView2NewWindowRequestedEventArgs.Handled` prevents new window from being opened.  ([Issue #549](https://github.com/MicrosoftEdge/WebViewFeedback/issues/549) and [Issue #560](https://github.com/MicrosoftEdge/WebViewFeedback/issues/560)).


<!-- ====================================================================== -->
## 1.0.674-prerelease

Release Date: October 19, 2020

[NuGet package for WebView2 SDK 1.0.674-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.674-prerelease)

This prerelease version of the WebView2 SDK requires WebView2 Runtime version 86.0.616.0 or higher.

### General

*   Added [NavigateWithWebResourceRequest](/microsoft-edge/webview2/reference/win32/icorewebview2experimental?view=webview2-1.0.674-prerelease&preserve-view=true#navigatewithwebresourcerequest) method to provide post data or other request headers during navigation.
*   Added [DOMContentLoaded](/microsoft-edge/webview2/reference/win32/icorewebview2experimental?view=webview2-1.0.674-prerelease&preserve-view=true#add_domcontentloaded) event that runs when the initial HTML document is loaded and parsed.
*   Added the [Environment](/microsoft-edge/webview2/reference/win32/icorewebview2experimental?view=webview2-1.0.674-prerelease&preserve-view=true#get_environment) property on WebView2.  This property exposes the WebView2 environment where an instance of WebView2 was created.
*   Added [cookie management](/microsoft-edge/webview2/reference/win32/icorewebview2experimental?view=webview2-1.0.674-prerelease&preserve-view=true#get_cookiemanager) APIs that allow developers to authenticate the WebView2 session, or retrieve cookies from WebView to authenticate other tools.  The WebView2 team plans to make language or framework-specific improvements.  For more information, navigate to [API Review: Cookie Management](https://github.com/MicrosoftEdge/WebView2Announcement/issues/2).
*   Updated the [WebResourceResponseReceived](/microsoft-edge/webview2/reference/win32/icorewebview2experimental?view=webview2-1.0.674-prerelease&preserve-view=true#add_webresourceresponsereceived) event, and added immutable [WebResourceResponseView](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalwebresourceresponseview?view=webview2-1.0.674-prerelease&preserve-view=true) and [WebResourceResponseReceivedEventArgs::PopulateResponseContent](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalwebresourceresponsereceivedeventargs?view=webview2-0.9.628-prerelease&preserve-view=true#populateresponsecontent) to [WebResourceResponseView::GetContent](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalwebresourceresponseview?view=webview2-1.0.674-prerelease&preserve-view=true#getcontent).
*   Turned off [Microsoft Defender Application Guard (WDAG)](/windows/security/threat-protection/microsoft-defender-application-guard/md-app-guard-overview) in WebView2.
*   Added [SystemCursorId](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller2?view=webview2-1.0.674-prerelease&preserve-view=true#get_systemcursorid) for Visual Hosting.
*   Added bug fixed for Input Method in Visual Hosting.
*   Removed include requirement for `version.lib` when using WebView2 static library.

### .NET

*   Updated [CoreWebView2](/dotnet/api/microsoft.web.webview2.core.corewebview2) class to expose the `CoreWebView2Environment` variable.
*   Changed implementations of custom EventArgs classes in `Microsoft.Web.WebView2.Core` namespace to subclasses of [System.EventArgs](/dotnet/api/system.eventargs) or [System.ComponentModel.CancelEventArgs](/dotnet/api/system.componentmodel.canceleventargs).  ([Issue #250](https://github.com/MicrosoftEdge/WebViewFeedback/issues/250))
*   Added support for [CoreWebView2CreationProperties](/dotnet/api/microsoft.web.webview2.winforms) in WinForms.  ([Issue #204](https://github.com/MicrosoftEdge/WebViewFeedback/issues/204)).
*   Added [WebResourceRequested](/dotnet/api/microsoft.web.webview2.core.corewebview2.webresourcerequested) .NET APIs.  ([Issue #219](https://github.com/MicrosoftEdge/WebViewFeedback/issues/219)).
*   Updated WinForms Designer [Source](/dotnet/api/microsoft.web.webview2.winforms.webview2.source) property to default or reset to null.  ([Issue #177](https://github.com/MicrosoftEdge/WebViewFeedback/issues/177)).
*   Updated WebView2 bounds in WebView2.Init() to support DPI modes that are less than 100%.  ([Issue #432](https://github.com/MicrosoftEdge/WebViewFeedback/issues/432)).
*   Updated [BuildWindowCore](/dotnet/api/microsoft.web.webview2.wpf.webview2.buildwindowcore) and [DestroyWindowCore](/dotnet/api/microsoft.web.webview2.wpf.webview2.destroywindowcore) to increase robustness.  ([Issue #382](https://github.com/MicrosoftEdge/WebViewFeedback/issues/382)).
*   Updated .NET Loader base to load on process bit instead of operating system architecture.  ([Issue #431](https://github.com/MicrosoftEdge/WebViewFeedback/issues/431)).
*   Renamed `EdgeNotFoundException` to [WebView2RuntimeNotFoundException](/dotnet/api/microsoft.web.webview2.core.webview2runtimenotfoundexception).


<!-- ====================================================================== -->
## 1.0.622.22

Release Date: October 19, 2020

[NuGet package for WebView2 SDK 1.0.622.22](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.622.22)

This version of the WebView2 SDK requires WebView2 Runtime version 86.0.616.0 or higher.

### General

> [!IMPORTANT]
> **Announcement**:  Win32 C/C++ WebView2 is now Generally Available (GA).  Starting this release, Release SDKs are forward-compatible.  For more information, navigate to [GA announcement blog post](https://blogs.windows.com/msedgedev/edge-webview2-general-availability).

*   The Evergreen WebView2 Runtime and installer are GA.  The bootstrapper, the downlink link for the Bootstrapper, and the Standalone Installer for the Evergreen WebView2 Runtime are available on [Microsoft Edge WebView2](https://developer.microsoft.com/microsoft-edge/webview2/).  Sample code for the installation workflow is also available in the [WebView2Samples repo](https://github.com/MicrosoftEdge/WebView2Samples).
*   Fixed Version mode is available for developer preview.

For more information about the Runtime, Evergreen distribution, and Fixed Version distribution, navigate to [Distribute a WebView2 app and the WebView2 Runtime](./concepts/distribution.md).


<!-- ====================================================================== -->
## 0.9.622.11

Release Date: September 10, 2020

[NuGet package for WebView2 SDK 0.9.622.11](https://www.nuget.org/packages/Microsoft.Web.WebView2/0.9.622.11)

This version of the WebView2 SDK requires WebView2 Runtime version 86.0.616.0 or higher.

### General

*   > [!IMPORTANT]
    > **Announcement**: This SDK is the Release Candidate for WebView2 Win32 C/C++ GA.  The GA version is expected to use the same API interface and functionality.

*   Disconnected [browser policies](/deployedge/microsoft-edge-policies).
*   Added [AllowSingleSignOnUsingOSPrimaryAccount](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions?view=webview2-0.9.622&preserve-view=true#get_allowsinglesignonusingosprimaryaccount) property on WebView2 environment options to turn on conditional access for WebView.
*   Updated `ICoreWebView2NewWindowRequestedEventArgs` to include [WindowFeatures](/microsoft-edge/webview2/reference/win32/icorewebview2newwindowrequestedeventargs?view=webview2-0.9.622&preserve-view=true#get_windowfeatures) property, and the associated [ICoreWebView2WindowFeatures](/microsoft-edge/webview2/reference/win32/icorewebview2windowfeatures?view=webview2-0.9.622&preserve-view=true).  ([Issue #293](https://github.com/MicrosoftEdge/WebViewFeedback/issues/293)).
*   Updated `System.Windows.Rect`  to use `System.Drawing.Rectangle` instead of `System.Windows.Rect` ([Issue #235](https://github.com/MicrosoftEdge/WebViewFeedback/issues/235)).
*   Updated NewWindowRequested event to handle `window.open()` request without parameters.  ([Issue #293](https://github.com/MicrosoftEdge/WebViewFeedback/issues/293)).
*   [AdditionalBrowserArguments](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions?view=webview2-0.9.622&preserve-view=true#put_additionalbrowserarguments) specified with `ICoreWebView2EnvironmentOptions` aren't overridden with environment variables or registry values.  For more information, navigate to [CreateCoreWebView2EnvironmentWithOptions](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-0.9.622&preserve-view=true#createcorewebview2environmentwithoptions).


<!-- ====================================================================== -->
## 0.9.579

Release Date: July 20, 2020

[NuGet package for WebView2 SDK 0.9.579](https://www.nuget.org/packages/Microsoft.Web.WebView2/0.9.579)

This version of the WebView2 SDK requires Microsoft Edge version 86.0.579.0 or higher.

### General

*   > [!IMPORTANT]
    > **Announcement**: Evergreen WebView2 Runtime and installer is released for preview.  For more information, navigate to [Distribute a WebView2 app and the WebView2 Runtime](./concepts/distribution.md).


*   > [!IMPORTANT]
    > **Announcement**:  The following WebView2 SDK Versions are no longer supported after the next SDK release.
    >
    > *   [0.8.190](#08190)
    > *   [0.8.230](#08230)
    > *   [0.8.270](#08270)
    > *   [0.8.314](#08314)
    > *   [0.8.355](#08355)
    >
    > The WebView2 SDK Versions are also marked deprecated on nuget.org.  WebView2 recommends staying up to date with the latest version of WebView2.

*   Added WebView worker thread improvements.  ([Issue #318](https://github.com/MicrosoftEdge/WebViewFeedback/issues/318)).
*   Turned off the popup blocker in WebView.  For more information, navigate to the [IsUserInitiated](/microsoft-edge/webview2/reference/win32/icorewebview2newwindowrequestedeventargs?view=webview2-0.9.538&preserve-view=true#get_isuserinitiated) property in the `NewWindowRequested` event.
*   Ensured WebView navigation starting event is run for `about:blank`.  Now, `NavigationStarting` events are run for all navigation, but cancellations for `about:blank` or `srcdoc` of the `iframe` element aren't supported and ignored.
*   Blocked some `edge://` URI schemes in WebView.
*   Added experimental [IsSingleSignOnUsingOSPrimaryAccountEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironmentoptions?view=webview2-0.9.538-prerelease&preserve-view=true#get_issinglesignonusingosprimaryaccountenabled) property on WebView2 environment options to turn on conditional access for WebView.
*   Added experimental [WebResourceResponseReceived](/microsoft-edge/webview2/reference/win32/icorewebview2experimental?view=webview2-0.9.538-prerelease&preserve-view=true#add_webresourceresponsereceived) event that runs after the WebView receives and processes the response from a WebResource request.  Authentication headers, if any, are included in the response object.

### .NET

*   Improved WPF focus handling.  ([Issue #185](https://github.com/MicrosoftEdge/WebViewFeedback/issues/185)).
*   Added `ZoomFactor` property on WPF Webview2 Controller.


<!-- ====================================================================== -->
## 0.9.538

[NuGet package for WebView2 SDK 0.9.538](https://www.nuget.org/packages/Microsoft.Web.WebView2/0.9.538)

This version of the WebView2 SDK requires Microsoft Edge version 85.0.538.0 or higher.

### General

*   Dropping support for WebView2 SDK Version [0.8.149](#08149).  WebView2 recommends staying up to date with the latest version of WebView2.
*   Updated group policy to account for when the profile path of the Microsoft Edge browser is modified  ([#179](https://github.com/MicrosoftEdge/WebViewFeedback/issues/179)).

### Win32 C/C++

*   Added [ICoreWebView2ExperimentalNewWindowRequestedEventArgs::get_WindowFeatures](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalnewwindowrequestedeventargs?view=webview2-0.9.538-prerelease&preserve-view=true#get_windowfeatures), which fires when `window.open()` is run and associated with [ICoreWebView2ExperimentalWindowFeatures](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalwindowfeatures?view=webview2-0.9.538-prerelease&preserve-view=true) ([#70](https://github.com/MicrosoftEdge/WebViewFeedback/issues/70)).
*   > [!IMPORTANT]
    > **Breaking Change**:  Deprecated [CreateCoreWebView2EnvironmentWithDetails](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-0.9.488&preserve-view=true#createcorewebview2environmentwithdetails) and replaced with [CreateCoreWebView2EnvironmentWithOptions](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-0.9.538&preserve-view=true#createcorewebview2environmentwithoptions).

*   > [!IMPORTANT]
    > **Breaking Change**:  In order to ensure the WebView2 API aligns with the Windows API naming conventions, the WebView2 team updated the names of the following.
    >
    > *   [AreRemoteObjectsAllowed](/microsoft-edge/webview2/reference/win32/icorewebview2settings?view=webview2-0.9.488&preserve-view=true#get_areremoteobjectsallowed) is now [AreHostObjectsAllowed](/microsoft-edge/webview2/reference/win32/icorewebview2settings?view=webview2-0.9.538&preserve-view=true#get_arehostobjectsallowed).

*   Updated [AddHostObjectToScript](/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-0.9.538&preserve-view=true#addhostobjecttoscript).  The original host object serializer markers are now set to the proxy objects.  Then host object serializer markers are serialized back as a host object when passed as a parameter in the JavaScript callback ([#148](https://github.com/MicrosoftEdge/WebViewFeedback/issues/148)).

### .NET (0.9.538 prerelease)

*   Released WinForms and WPF WebView2API Samples, which are comprehensive guides of the WebView2 SDK.  For more information, navigate to [Samples Repo](https://github.com/MicrosoftEdge/WebView2Samples).
*   Added support for visual hosting and window features [experimental APIs](./concepts/versioning.md#experimental-apis).
*   > [!IMPORTANT]
    > **Breaking Change**:  The following deferrals now implement IDisposable:  [ScriptDialogOpening](/dotnet/api/microsoft.web.webview2.core.corewebview2.scriptdialogopening), [NewWindowRequested](/dotnet/api/microsoft.web.webview2.core.corewebview2.newwindowrequested), [WebResourceRequested](/dotnet/api/microsoft.web.webview2.core.corewebview2.webresourcerequested), and [PermissionRequested](/dotnet/api/microsoft.web.webview2.core.corewebview2.permissionrequested).

*   Added [GetAvailableBrowserVersionString](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.getavailablebrowserversionstring) and [CompareBrowserVersions](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.comparebrowserversions) as [CoreWebView2Environment](/dotnet/api/microsoft.web.webview2.core.corewebview2environment) statics.


<!-- ====================================================================== -->
## 0.9.515-prerelease

[NuGet package for WebView2 SDK 0.9.515-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/0.9.515-prerelease)

This prerelease version of the WebView2 SDK requires Microsoft Edge version 84.0.515.0 or higher.

*   > [!IMPORTANT]
    > **Announcement**:  WebView2 now supports Windows Forms and WPF on .NET Framework 4.6.2 or later and .NET Core 3.0 or later in the **prerelease package**.

*   For more information about building WPF apps, navigate to the [WPF Get Started Guide](./get-started/wpf.md) and the WebView2 [WPF Reference](/dotnet/api/microsoft.web.webview2.wpf) for WPF-specific APIs.
*   For more information about building Windows Forms apps, navigate to [Get started with WebView2 in WinForms apps](./get-started/winforms.md) and the WebView2 [Windows Forms Reference](/dotnet/api/microsoft.web.webview2.winforms) for Windows Forms specific APIs.
*   For more information about the CoreWebView2 APIs, navigate to [.NET Reference](/dotnet/api/microsoft.web.webview2.core).
*   > [!CAUTION]
    > **Known Issues**:  The WebView2 team is aware of some issues in the prerelease that are being resolved in future releases.
    >
    > *   **DPI Awareness**:  WebView2 for WPF is currently not DPI aware.  When initializing WebView2 on high DPI monitors, there is a known issue where the WebView at first initializes as a fraction of the window until the window is resized.
    > *   **WPF Designer**:  The WPF designer is not currently supported.  Add the WebView2 control in your app by directly modifying the appropriate XAML in a text editor.


<!-- ====================================================================== -->
## 0.9.488

[NuGet package for WebView2 SDK 0.9.488](https://www.nuget.org/packages/Microsoft.Web.WebView2/0.9.488)

This version of the WebView2 SDK requires Microsoft Edge version 84.0.488.0 or higher.

*   > [!IMPORTANT]
    > **Announcement**:  Starting with the upcoming Microsoft Edge version 83, Evergreen WebView no longer targets the Stable browser channel.  Instead, it targets another set of binaries, branded Evergreen WebView2 Runtime, that you can chain-install through an installer that the WebView2 team is currently developing.  For more information, navigate to [Distribute a WebView2 app and the WebView2 Runtime](./concepts/distribution.md).

*   > [!IMPORTANT]
    > **Announcement**:  Moving forward, the WebView2 team releases two packages:  a prerelease package with experimental APIs (for you to try out) and a stable release package with stable APIs (for your confidence).  To learn about the differences, navigate to [Understanding browser versions and WebView2](./concepts/versioning.md).

*   > [!IMPORTANT]
    > **Breaking Change**:  In order to ensure the WebView2 API aligns with the Windows API naming conventions, the WebView2 team updated the names of the following interfaces.
    >
    > *   `CORE_WEBVIEW2_*` prefix is now `COREWEBVIEW2_*`.
    > *   [GetCoreWebView2BrowserVersionInfo](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-0.9.430&preserve-view=true#getcorewebview2browserversioninfo) is now [GetAvailableCoreWebView2BrowserVersionString](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-0.9.488&preserve-view=true#getavailablecorewebview2browserversionstring).
    > *   [get_BrowserVersionInfo](/microsoft-edge/webview2/reference/win32/icorewebview2environment?view=webview2-0.9.430&preserve-view=true#get_browserversioninfo) is now [get_BrowserVersionString](/microsoft-edge/webview2/reference/win32/icorewebview2environment?view=webview2-0.9.488&preserve-view=true#get_browserversionstring).
    > *   [AddRemoteObject](/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-0.9.430&preserve-view=true#addremoteobject) is now [AddHostObjectToScript](/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-0.9.488&preserve-view=true#addhostobjecttoscript).
    > *   [RemoveRemoteObject](/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-0.9.430&preserve-view=true#removeremoteobject) is now [RemoveHostObjectFromScript](/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-0.9.488&preserve-view=true#removehostobjectfromscript).
    > *   `chrome.webview.remoteObjects` is now `chrome.webview.hostObjects`.

*   > [!IMPORTANT]
    > **Breaking Change**:  The `AddRemoteObject` JS proxy methods are also renamed.
    >
    > *   `getLocal` is now `getLocalProperty`.
    > *   `setLocal` is now `setLocalProperty`.
    > *   `getRemote` is now `getHostProperty`.
    > *   `setRemote` is now `setHostProperty`.
    > *   `applyRemote` is now `applyHostFunction`.

*   > [!IMPORTANT]
    > **Breaking Change**:  Deprecated [CreateCoreWebView2EnvironmentWithDetails](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-0.9.488&preserve-view=true#createcorewebview2environmentwithdetails) and replaced with [CreateCoreWebView2EnvironmentWithOptions](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-0.9.488&preserve-view=true#createcorewebview2environmentwithoptions).

*   Added [FrameNavigationCompleted](/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-0.9.488&preserve-view=true#add_framenavigationcompleted) event.  Now, when an `iframe` element completes navigation, an event is run and returns the success of the navigation and the navigation ID.
*   Added [ICoreWebView2EnvironmentOptions](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions?view=webview2-0.9.488&preserve-view=true) interface, which may be used to determine the version of the Evergreen WebView2 Runtime targeted by your app.
*   Added [IsBuiltInErrorPageEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings?view=webview2-0.9.488&preserve-view=true#get_isbuiltinerrorpageenabled) setting.  Now, you may choose to turn on or off the built-in error webpage for navigation failure and render process failure.
*   Updated Remote Object Injection to support .NET `IDispatch` implementations ([#113](https://github.com/MicrosoftEdge/WebViewFeedback/issues/113)).
*   Updated [NewWindowRequested](/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-0.9.488&preserve-view=true#add_newwindowrequested) event to handle requests from context menus ([#108](https://github.com/MicrosoftEdge/WebViewFeedback/issues/108)).
*   Released the first separate WebView2 prerelease package where you may access visual hosting APIs.  The WebView2 team updated [APISample](https://github.com/MicrosoftEdge/WebView2Samples) to include the new experimental APIs.
    *   Added [ICoreWebView2ExperimentalCompositionController](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller?view=webview2-0.9.488-prerelease&preserve-view=true) interface, to connect to a composition tree and provide input for the WebView.
    *   Added [ICoreWebView2ExperimentalPointerInfo](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalpointerinfo?view=webview2-0.9.488-prerelease&preserve-view=true), which contains all the information from a `POINTER_INFO`.  This object is passed to SendPointerInput to inject pointer input into the WebView.
    *   Added [ICoreWebView2ExperimentalCursorChangedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcursorchangedeventhandler?view=webview2-0.9.488-prerelease&preserve-view=true), which tells the app when the mouse cursor over the WebView should be changed.  When mouse is over a text box in the WebView, the cursor changes from the arrow to the selector.  The `cursor` property on the `CompositionController` tells the app what the mouse cursor should currently be for the WebView.


<!-- ====================================================================== -->
## 0.9.430

[NuGet package for WebView2 SDK 0.9.430](https://www.nuget.org/packages/Microsoft.Web.WebView2/0.9.430)

This version of the WebView2 SDK requires Microsoft Edge version 82.0.430.0 or higher.

The WebView2 SDK is the official Win32 C++ Beta version, which incorporates several feature requests from feedback.  The WebView2 team tries to limit the number of releases with breaking changes.  As general availability approaches, several major breaking changes are incorporated in the Beta release.

*   > [!IMPORTANT]
    > **Breaking Change**:  As the final release approaches the WebView2 team renamed the prefix `IWebView2WebView` to `ICoreWebView2` in order to make sure the WebView2 API aligns with the Windows API naming convention.  Additionally, in order to leverage the WebView2 SDK from UI frameworks, the WebView2 team separated `ICoreWebView2` into [ICoreWebView2](/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-0.9.430&preserve-view=true) and [ICoreWebView2Host](/microsoft-edge/webview2/reference/win32/icorewebview2host?view=webview2-0.9.430&preserve-view=true).  `ICoreWebView2Host` supports resizing, showing-and-hiding, focusing, and other functionality related to windowing and composition.  ICoreWebView2 supports all other WebView2 functionality.  To learn more about incorporating the changes, navigate to the WebView2 [pull request](https://github.com/MicrosoftEdge/WebView2Samples/pull/17) in the WebView2 [APISample](https://github.com/MicrosoftEdge/WebView2Samples) project.

*   > [!IMPORTANT]
    > **Breaking Change**:  Split [DocumentStateChanged](/microsoft-edge/webview2/reference/win32/iwebview2webview?view=webview2-0.8.355&preserve-view=true#add_documentstatechanged) into three components:  [SourceChanged](/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-0.9.430&preserve-view=true#add_sourcechanged), [ContentLoading](/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-0.9.430&preserve-view=true#add_contentloading), and [HistoryChanged](/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-0.9.430&preserve-view=true#add_historychanged).  Now, when the source URL changes the `SourceChanged` event is run.  When the history state is changed the `HistoryChanged` event is run.  The `ContentLoading` event is run before the initial script when a new document is being loaded.

*   Added support for ARM64 architecture.
*   Added Soft Input Panel (SIP) support for touch screen devices.
*   Added support for Windows Server 2008 R2, Windows Server 2012, Windows Server 2012 R2, and Windows Server 2016.
*   Added [NotifyParentWindowPositionChanged](/microsoft-edge/webview2/reference/win32/icorewebview2host?view=webview2-0.9.430&preserve-view=true#notifyparentwindowpositionchanged) for the status bar to follow the window in windowed mode.  Also, implement the change in windowless mode in order for accessibility features to work.
*   Added [AreRemoteObjectsAllowed](/microsoft-edge/webview2/reference/win32/icorewebview2settings?view=webview2-0.9.430&preserve-view=true#get_areremoteobjectsallowed) setting to globally control whether a webpage may be accessed by any remote objects.  By default, `AreRemoteObjectsAllowed` is turned on, so remote objects added by [AddRemoteObject](/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-0.9.430&preserve-view=true#addremoteobject) are accessible from the webpage.  When `AreRemoteObjectsAllowed` is turned off, the objects aren't accessible from the webpage.  Changes are applied on the next navigation event.
*   Added [IsZoomControlEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings?view=webview2-0.9.430&preserve-view=true#get_iszoomcontrolenabled) setting to prevent users from impacting the zoom of the WebView using `ctrl`+`+` and `ctrl`+`-` (or `ctrl`+ mouse wheel).  Zoom may still be set using [put_ZoomFactor](/microsoft-edge/webview2/reference/win32/icorewebview2host?view=webview2-0.9.430&preserve-view=true#put_zoomfactor) when the setting is turned off.
*   Changed ZoomFactor to only apply to the current WebView.  Zoom changes to the current WebView don't affect other WebViews that you navigated to using the same site of origin.  For more information, navigate to [get_ZoomFactor](/microsoft-edge/webview2/reference/win32/icorewebview2host?view=webview2-0.9.430&preserve-view=true#get_zoomfactor).
*   Hid ZoomView UI for WebView ([#95](https://github.com/MicrosoftEdge/WebViewFeedback/issues/95)).
*   Added [SetBoundsAndZoomFactor](/microsoft-edge/webview2/reference/win32/icorewebview2host?view=webview2-0.9.430&preserve-view=true#setboundsandzoomfactor).  Now, you may set the zoom factor and bounds of a WebView at the same time.
*   Added [WindowCloseRequested](/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-0.9.430&preserve-view=true#add_windowcloserequested) event.  For more information, navigate to [add_WindowCloseRequested](/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-0.9.430&preserve-view=true#add_windowcloserequested) ([#119](https://github.com/MicrosoftEdge/WebViewFeedback/issues/119)).
*   Added support for the `beforeunload` dialog type for JavaScript dialog events and added [CORE_WEBVIEW2_SCRIPT_DIALOG_KIND_BEFOREUNLOAD](/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-0.9.430&preserve-view=true#core_webview2_script_dialog_kind) enum entry.
*   Added [GetHeaders](/microsoft-edge/webview2/reference/win32/icorewebview2httprequestheaders?view=webview2-0.9.430&preserve-view=true#getheaders) to HttpRequestHeaders, [GetHeader](/microsoft-edge/webview2/reference/win32/icorewebview2httpresponseheaders?view=webview2-0.9.430&preserve-view=true#getheader) to HttpResponseHeaders, and [get_HasCurrentHeader](/microsoft-edge/webview2/reference/win32/icorewebview2httpheaderscollectioniterator?view=webview2-0.9.430&preserve-view=true#get_hascurrentheader) property to HttpHeadersCollectionIterator.
*   > [!IMPORTANT]
    > **Breaking Change**:  Modified `DevToolsProtocolEventReceived` behavior.  Now, you may create a [DevToolsProtocolEventReceiver](/microsoft-edge/webview2/reference/win32/icorewebview2devtoolsprotocoleventreceiver?view=webview2-0.9.430&preserve-view=true) for a particular DevTools Protocol event and subscribe/unsubscribe to such event using [add_DevToolsProtocolEventReceived](/microsoft-edge/webview2/reference/win32/icorewebview2devtoolsprotocoleventreceiver?view=webview2-0.9.430&preserve-view=true#add_devtoolsprotocoleventreceived)/[remove_DevToolsProtocolEventReceived](/microsoft-edge/webview2/reference/win32/icorewebview2devtoolsprotocoleventreceiver?view=webview2-0.9.430&preserve-view=true#remove_devtoolsprotocoleventreceived).

*   > [!IMPORTANT]
    > **Breaking Change**:  Changed `WebMessageReceivedEventArgs` [get_WebMessageAsString](/microsoft-edge/webview2/reference/win32/iwebview2webmessagereceivedeventargs?view=webview2-0.8.355&preserve-view=true#get_webmessageasstring) property to a [TryGetWebMessageAsString](/microsoft-edge/webview2/reference/win32/icorewebview2webmessagereceivedeventargs?view=webview2-0.9.430&preserve-view=true#trygetwebmessageasstring) method.

*   > [!IMPORTANT]
    > **Breaking Change**:  Changed `AcceleratorKeyPressedEventArgs` [Handle](/microsoft-edge/webview2/reference/win32/iwebview2acceleratorkeypressedeventargs?view=webview2-0.8.355&preserve-view=true#handle) method to a [get_Handled](/microsoft-edge/webview2/reference/win32/icorewebview2acceleratorkeypressedeventargs?view=webview2-0.9.430&preserve-view=true#get_handled) property.


<!-- ====================================================================== -->
## 0.8.355

[NuGet package for WebView2 SDK 0.8.355](https://www.nuget.org/packages/Microsoft.Web.WebView2/0.8.355)

This version of the WebView2 SDK requires Microsoft Edge version 80.0.355.0 or higher.

*   Released WebView2API Sample, a comprehensive guide of the WebView2 SDK.  For more information, navigate to [API Sample](https://github.com/MicrosoftEdge/WebView2Samples/tree/master/SampleApps/WebView2APISample).
*   Added IME support for all languages besides English ([#30](https://github.com/MicrosoftEdge/WebViewFeedback/issues/30)).
*   Updated the API surface of the `WebResourceRequested` event in response to bug reports.  Simultaneously specifying a filter and an event on creation is now deprecated.  To create a web resource requested event, use [add_WebResourceRequested](/microsoft-edge/webview2/reference/win32/iwebview2webview5?view=webview2-0.8.355&preserve-view=true#add_webresourcerequested) to add the event and [AddWebResourceRequestedFilter](/microsoft-edge/webview2/reference/win32/iwebview2webview5?view=webview2-0.8.355&preserve-view=true#addwebresourcerequestedfilter) to add a filter.  [RemoveWebResourceRequestedFilter](/microsoft-edge/webview2/reference/win32/iwebview2webview5?view=webview2-0.8.355&preserve-view=true#removewebresourcerequestedfilter) removes the filter ([#36](https://github.com/MicrosoftEdge/WebViewFeedback/issues/36)) ([#74](https://github.com/MicrosoftEdge/WebViewFeedback/issues/74)).
*   > [!IMPORTANT]
    > **Breaking Change**:  Modified fullscreen behavior.  Deprecated [IsFullScreenAllowed](/microsoft-edge/webview2/reference/win32/iwebview2settings?view=webview2-0.8.355&preserve-view=true#get_isfullscreenallowed_deprecated).  Now, by default, if an element in a WebView (such as a video) is set to full screen, it fills the bounds of the WebView.  Use the [ContainsFullScreenElementChanged](/microsoft-edge/webview2/reference/win32/iwebview2containsfullscreenelementchangedeventhandler?view=webview2-0.8.355&preserve-view=true) event and [get_ContainsFullScreenElement](/microsoft-edge/webview2/reference/win32/iwebview2webview5?view=webview2-0.8.355&preserve-view=true#get_containsfullscreenelement) to specify how the app should resize the WebView if an element wants to enter fullscreen mode.


<!-- ====================================================================== -->
## 0.8.314

[NuGet package for WebView2 SDK 0.8.314](https://www.nuget.org/packages/Microsoft.Web.WebView2/0.8.314)

This version of the WebView2 SDK requires Microsoft Edge version 80.0.314.0 or higher.

### Changes

*   Added support for Windows 7, Windows 8, and Windows 8.1.
*   Added Visual Studio and Visual Studio Code debug support for WebView2.  Now, debug your script in the WebView2 right from your IDE.  For more information, navigate to [How to debug when developing with WebView2 controls](./how-to/debug.md).
*   Added `Native Object Injection` for the running script in WebView2 to access an IDispatch object from the Win32 component of the app and access the properties of the IDispatch object.  For more information, navigate to [AddRemoteObject](/microsoft-edge/webview2/reference/win32/iwebview2webview4?view=webview2-0.8.355&preserve-view=true#addremoteobject) ([#17](https://github.com/MicrosoftEdge/WebViewFeedback/issues/17)).
*   Added `AcceleratorKeyPressed` event.  For more information, navigate to [add_AcceleratorKeyPressed](/microsoft-edge/webview2/reference/win32/iwebview2webview4?view=webview2-0.8.355&preserve-view=true#add_acceleratorkeypressed) ([#57](https://github.com/MicrosoftEdge/WebViewFeedback/issues/57)).
*   Turned off the `Context Menus`.  For more information, navigate to [put_AreDefaultContextMenusEnabled](/microsoft-edge/webview2/reference/win32/iwebview2settings2?view=webview2-0.8.355&preserve-view=true#put_aredefaultcontextmenusenabled) ([#57](https://github.com/MicrosoftEdge/WebViewFeedback/issues/57)).
*   Updated `DPI Awareness`.  Now, the DPI awareness of WebView is the same as the DPI awareness of the host app.

    > [!NOTE]
    > If another hybrid app is launched with a different DPI Awareness than the original WebView, the new WebView is not launched if the `user data folder` is the same ([#1](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1)).

*   Updated `Notification Change Behavior` so WebView2 automatically rejects notification permission requests prompted by web content hosted in the WebView.


<!-- ====================================================================== -->
## 0.8.270

[NuGet package for WebView2 SDK 0.8.270](https://www.nuget.org/packages/Microsoft.Web.WebView2/0.8.270)

This version of the WebView2 SDK requires Microsoft Edge version 78.0.270.0 or higher.

### Changes

*   Added `DocumentTitleChanged` event to indicate document title change ([Issue #27](https://github.com/MicrosoftEdge/WebViewFeedback/issues/27)).

*   Added `GetWebView2BrowserVersionInfo` API ([Issue #18](https://github.com/MicrosoftEdge/WebViewFeedback/issues/18)).

*   Added `NewWindowRequested` event.

*   Updated `CreateWebView2EnvironmentWithDetails` function to remove `releaseChannelPreference`.  For more information about the `CreateWebView2EnvironmentWithDetails` function, navigate to [CreateWebView2EnvironmentWithDetails](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-0.8.355&preserve-view=true#createwebview2environmentwithdetails).  The registry and environment variable override is still supported.  The default channel preference is used unless overridden.
    During the channel search, the WebView2 team skips any previous channel version that isn't compatible with the WebView2 SDK.
    The WebView2 team selects the more stable channel to ensure the most consistent behaviors for the end user.  When you test with the latest Canary build, you should create a script to set the `WEBVIEW2_RELEASE_CHANNEL_PREFERENCE` environment variable to `1` before launching the app.  For more information, navigate to [Switch to a preview channel to test upcoming APIs and features](how-to/set-preview-channel.md).

*   Updated the `CreateWebView2EnvironmentWithDetails` function with logic for selecting `userDataFolder` when not specified.  For more information about the `CreateWebView2EnvironmentWithDetails` function, navigate to [CreateWebView2EnvironmentWithDetails](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-0.8.355&preserve-view=true#createwebview2environmentwithdetails).  If you previously used the default `userDataFolder` location, when you switch to the new SDK the default `userDataFolder` is reset (set to a new location in the host code directory) and your state is also reset.  If the host process doesn't have permission to write to the specified directory, the `CreateWebView2EnvironmentWithDetails` function may fail.  You may copy the data from the old `user data folder` to the new directory.


<!-- ====================================================================== -->
## 0.8.230

[NuGet package for WebView2 SDK 0.8.230](https://www.nuget.org/packages/Microsoft.Web.WebView2/0.8.230)

This version of the WebView2 SDK requires Microsoft Edge version 77.0.230.0 or higher.

### Changes

*   Added `Stop` API to stop all navigation and pending resource fetches ([Issue #28](https://github.com/MicrosoftEdge/WebViewFeedback/issues/28)).
*   Added `.tlb` file to the NuGet package ([Issue #22](https://github.com/MicrosoftEdge/WebViewFeedback/issues/22)).
*   Added .NET projects to the installer list in the NuGet package ([Issue #32](https://github.com/MicrosoftEdge/WebViewFeedback/issues/32)).


<!-- ====================================================================== -->
## 0.8.190

[NuGet package for WebView2 SDK 0.8.190](https://www.nuget.org/packages/Microsoft.Web.WebView2/0.8.190)

This version of the WebView2 SDK requires Microsoft Edge version 77.0.190.0 or higher.

*   Added `get_AreDevToolsEnabled`/`put_AreDevToolsEnabled` to control if users can open DevTools ([Issue #16](https://github.com/MicrosoftEdge/WebViewFeedback/issues/16)).
*   Added `get_IsStatusBarEnabled`/`put_IsStatusBarEnabled` to control if the status bar is displayed ([Issue #19](https://github.com/MicrosoftEdge/WebViewFeedback/issues/19)).
*   Added `get_CanGoBack`/`GoBack`/`get_CanGoForward`/`GoForward` for going back and forward through navigation history.
*   Added HTTP header types (`IWebView2HttpHeadersCollectionIterator`/`IWebView2HttpRequestHeaders`/`IWebView2HttpRequestHeaders`) for viewing and modifying HTTP headers in WebView.
*   Added 32-bit WebView support on 64-bit machines ([Issue #13](https://github.com/MicrosoftEdge/WebViewFeedback/issues/13)).
*   Added WebView IDL to the SDK ([Issue #14](https://github.com/MicrosoftEdge/WebViewFeedback/issues/14)).
*   Added lib to support `IID\_\*` interface ID objects ([Issue #12](https://github.com/MicrosoftEdge/WebViewFeedback/issues/12)).
*   Added include path, linking, and autocopying of DLL files to NuGet `TARGET` file in SDK.
*   Turned on requesting `window.open()` in script.


<!-- ====================================================================== -->
## 0.8.149

[NuGet package for WebView2 SDK 0.8.149](https://www.nuget.org/packages/Microsoft.Web.WebView2/0.8.149)

This version of the WebView2 SDK requires Microsoft Edge version 76.0.149.0 or higher.

Initial developer preview release.


<!-- ====================================================================== -->
## See also

*  [Contacting the Microsoft Edge WebView2 team](contact.md)
