---
description: Release notes for Microsoft Edge WebView2 SDK
title: Release Notes for Microsoft Edge WebView2 for Win32, WPF, and WinForms
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/06/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html
---
# Release notes for WebView2 SDK  

The WebView2 team updates the [WebView2 SDK][NuGetGallery] on a six-week cadence.  Review the following content for up-to-date information on product announcements, additions, modifications, and breaking changes to the APIs.  

> [!NOTE]
> Ensure you re-compile your app after updating the NuGet package.  The WebView team recommends that you use the Canary channel when you develop using the prerelease packages, and the Evergreen WebView2 Runtime when you use the release packages.  For more information, navigate to [Matching WebView2 Runtime versions][Webview2ConceptsVersioningMatchingWebview2RuntimeVersions].  

> [!NOTE]
> WebView2 bug fixes are either Runtime or SDK specific.  

## 1.0.902-prerelease

Release Date: June 1, 2021  

[NuGet package][NuGetGallery1.0.902-prerelease] \| Minimum Microsoft Edge version to load: 86.0.616.0 or newer \| Full API Compatibility: 92.0.902.0 or newer  

### General  
*   Improved WebView2 startup performance and disk footprint.

#### Experimental Features  

*   Added [IsSwipeNavigationEnabled][Webview2ReferenceWin32Icorewebview2experimentalsettings5ViewWebview210902PrereleaseGetIsswipenavigationenabled] property to enable or disable the ability of the end user to use swiping gesture on touch input enabled devices to navigate in WebView2.
*   Added [BrowserProcessExited][Webview2ReferenceWin32Icorewebview2experimentalenvironment4ViewWebview210902PrereleaseAddBrowserprocessexited] event.
*   Added [add_ClientCertificateRequested API][Webview2ReferenceWin32Icorewebview2experimental3ViewWebview210902PrereleaseAddClientcertificaterequested]. It allows showing a client certificate dialog prompt if desired and enables access to required metadata to replace default client certificate dialog prompt.

#### Bug fixes  

*   Fix a bug where mouse left click doesn't dismiss context menu. This change is Runtime-specific.
*   Fixed a bug where WebView2 creation fails when exe files for apps sharing the same user data folder have inconsistent version info.
*   Fixed a bug where special browser keys like Refresh, Home, Back, etc can't be disabled by AreBrowserAcceleratorKeysEnabled. This change is Runtime-specific.
*   Fixed a bug in WebView2 .NET controls that WebView2 windows are blank when created in the background. \([\#1077][GithubMicrosoftedgeWebviewfeedbackIssue1077]\). 
*   Dismissing a file picker dialog by pressing 'enter' or 'esc' no longer crashes WPF applications using WebView control. \([\#1099][GithubMicrosoftedgeWebviewfeedbackIssue1099]\). 
*   Fixed a bug that [AllowSingleSignOnUsingOSPrimaryAccount][Webview2ReferenceWin32Icorewebview2environmentoptionsGetAllowsinglesignonusingosprimaryaccount] doesn't work properly with WebView2 when a WebResourceRequested event handler is attached. This change is Runtime-specific. \([\#1183][GithubMicrosoftedgeWebviewfeedbackIssue1183]\).  
*   Downloading a file no longer breaks WebView2 DefaultBackgroundColor transparency. This change is Runtime-specific. \([\#1108][GithubMicrosoftedgeWebviewfeedbackIssue1108]\). 
*   Removed screen sharing media picker message that contains Microsoft branding. \([\#940][GithubMicrosoftedgeWebviewfeedbackIssue940]\). 
*   Fixed a bug in WebView2 WinForm control where hiding the parent form does not hide WebView2 control \([\#828][GithubMicrosoftedgeWebviewfeedbackIssue828] and [\#1079][GithubMicrosoftedgeWebviewfeedbackIssue1079]\).
*   Added static WS_CLIPCHILDREN style to WebView2's WPF windows. \([\#1013][GithubMicrosoftedgeWebviewfeedbackIssue1013]\). 
*   Fixed a bug that right-clicking a link crashes WebView2 host app. This change is Runtime-specific.
*   Fixed reliability bug that could crash host app process when moving to newer Edge WebView2 Runtime version.
*   **DEPRECATION**: Officially deprecated DefaultBackgroundColor API for Windows 7.


#### Promotions

*   [Download API][Webview2ReferenceWin32Icorewebview24ViewWebview210902PrereleaseAddDownloadstarting] is  now promoted to stable.
*   [PinchZoom API][Webview2ReferenceWin32Icorewebview2setting5ViewWebview210902PrereleaseGetIspinchzoomenabled] is now promoted to stable.
*   [AddFrameCreated][Webview2ReferenceWin32Icorewebview24ViewWebview210902PrereleaseAddFramecreated] is now promoted to stable.
*   [AddHostObjectToScriptWithOrigins][AddHostObjectToScriptWithOriginsAPI] API promoted to stable with iFrame element support.
*   [Autofill API][Webview2ReferenceWin32Icorewebview2setting4ViewWebview210902PrereleaseGetIsgeneralautofillenabled] is now promoted to stable.
    > [!NOTE]
    > There is no current API to delete the locally stored general autofill and password autosave information.  Please provide a control to delete the data, which will involve deleting the entire User Data Folder. 



### .NET  
    
#### Bug fixes  

*   Fixed a bug in WebView2 WinForm control where WebView2 window visibility is not updated properly after parent window is disposed. \([\#1282][GithubMicrosoftedgeWebviewfeedbackIssue1282] and [\#828][GithubMicrosoftedgeWebviewfeedbackIssue828]\).
*   Fixed a bug in WebView2 WPF control that Source property binding in WPF OneWay binding mode is not working properly. \([\#619][GithubMicrosoftedgeWebviewfeedbackIssue619] and [\#608][GithubMicrosoftedgeWebviewfeedbackIssue608]\).

## 1.0.864.35

Release Date: May 31, 2021  

[NuGet package][NuGetGallery1.0.864.35] \| Minimum Runtime version to load: 86.0.616.0 or newer \| Full API Compatibility: 91.0.864.35 or newer  

### General  

#### Bug Fixes  

*   Fixed reliability bug that could crash host app process when moving to newer Edge WebView2 Runtime version.
*   Fixed a bug that prevented memory purge in some situations. This change is Runtime-specific.
*   Fixed error in 818 SDK release package where project couldn't find WebView2.h file. \([\#1209][GithubMicrosoftedgeWebviewfeedbackIssue1209]\). 
*   Fixed a bug which caused WebResourceRequested event to be dropped for some requests with binary bodies.
*   Improve NewWindowRequested documentation. \([\#448][GithubMicrosoftedgeWebviewfeedbackIssue448]\). 

#### Promotions
*   [UserAgent API][Webview2ReferenceWin32Icorewebview2setting2ViewWebview21086435GetUseragent] is now stable.
*   [AreBrowserkeysenabled][Webview2ReferenceWin32Icorewebview2setting2ViewWebview21086435GetArebrowseracceleratorkeysenabled] is now stable.

### .NET  

#### Bug Fixes  
*   Fixed a bug in WebView2 .NET controls that first header is missing when iterating CoreWebView2WebResourceRequest headers collection. \([\#1123][GithubMicrosoftedgeWebviewfeedbackIssue1123]\). 

## 1.0.865-prerelease  

Release Date: April 26, 2021  

[NuGet package][NuGetGallery1.0.865-prerelease] \| Minimum Microsoft Edge version to load: 86.0.616.0 or newer \| Full API Compatibility: 91.0.865.0 or newer  

### General  

#### Experimental Features  

*   Added [IsPinchZoomEnabled][Webview2ReferenceWin32Icorewebview2experimentalsettings4ViewWebview210865PrereleaseIspinchzoomenabled] setting. It allows you to turn on or off page scale zoom control in a setting.  
*   Added Custom [add_DownloadStarting][Webview2ReferenceWin32Icorewebview2experimental2ViewWebview210865PrereleaseAddDownloadstarting] API.  It allows you to block downloads, save to a different path, and access the required metadata to build custom download UI.  
*   Added `iframe` element support from [AddHostObjectToScriptWithOrigins][Webview2ReferenceWin32Icorewebview2experimentalframeViewWebview210865PrereleaseAddhostobjecttoscriptwithorigins].  
*   Added sample code for [WPF sample app][GithubMicrosoftedgeWebview2samplesWebview2wpfbrowser] to use the API to turn off browser function keys.  
*   Added the [UpdateRuntime][Webview2ReferenceWin32Icorewebview2experimentalenvironment3ViewWebview210865PrereleaseUpdateruntime] API, to easily update the WebView2 Runtime.  
    
#### Bug fixes  

*   Fixed handler for a `Chromium DevTools Protocol` message with `POST` binary data in WebView2.  
*   Turned off the `OpenSaveAsAwareness` download UI, because it included links to `edge://settings`.  \([\#1120][GithubMicrosoftedgeWebviewfeedbackIssue1120]\).  
*   Removed branding from screen share dialog.  \([\#940][GithubMicrosoftedgeWebviewfeedbackIssue940]\).  
*   Fixed bug where the [SetWindowDisplayAffinity][WindowsWin32ApiWinuserSetWindowDisplayAffinity] function broke WebView2 when it stopped screen capture in an WebView2 app.  \([\#841][GithubMicrosoftedgeWebviewfeedbackIssue841]\).
*   Fixed bug for composition hosting where mouse input stopped working if any pen input was sent to WebView2.  
*   Fixed bug that broke mouse input after any pen input.  This change is Runtime-specific.  
    
### .NET  

#### Experimental Features  

*   Added WebView2 designer tool to WPF Toolbox.  \([\#210][GithubMicrosoftedgeWebviewfeedbackIssue210]\).  
*   Added WebView2 UI element in .NET Designer Mode.  
    
#### Bug fixes  

*   Improved COM Exception descriptions by wrapping each in a more detailed .NET exception.  \([\#338][GithubMicrosoftedgeWebviewfeedbackIssue338]\).  This change is Runtime-specific.  
*   Fixed bug caused when you select `tab` to shift focus caused WebView2 control to crash in Microsoft Visual Studio Tools for Office.  \([\#589][GithubMicrosoftedgeWebviewfeedbackIssue589] and [\#933][GithubMicrosoftedgeWebviewfeedbackIssue933]\).  This change is Runtime-specific.  
*   Improved .NET framework loader down level to be more robust.  \([\#946][GithubMicrosoftedgeWebviewfeedbackIssue946]\).
*   Fixed bug that caused crash when you try to refresh before first navigation completed.  \([\#1011][GithubMicrosoftedgeWebviewfeedbackIssue1011]\).
*   Fixed initialization so navigation occurs during `CoreWebView2InitializationCompleted`.  \([\#1050][GithubMicrosoftedgeWebviewfeedbackIssue1050]\).
*   Improved .NET browser process crash error handling.  You may now recreate controls after you handle a `ProcessFailed` event without a crash.  \([\#996][GithubMicrosoftedgeWebviewfeedbackIssue996]\).  
    
## 1.0.818.41  

Release Date: April 21, 2021  

[NuGet package][NuGetGallery1.0.818.41] \| Minimum Runtime version to load: 86.0.616.0 or newer \| Full API Compatibility: 90.0.818.41 or newer  

### General  

#### Features  

*   Extended the `ProcessFailed` event.  It now raises for non-renderer child processes and frame renderers.  
*   Added `iframe` element support for `AddScriptToExecuteOnDocumentCreated`.  
*   Improved WebView2 code to be more resilient to `.exe` application files with malformatted version information.  \([\#850][GithubMicrosoftedgeWebviewfeedbackIssue850]\).  
*   Removed `--winhttp-proxy-resolver` from WebView browser process command-line, turned on other proxy command-line options for WebView2.  
    
## 1.0.824-prerelease  

Release Date: March 8, 2021  

[NuGet package][NuGetGallery1.0.824-prerelease] \| Minimum Microsoft Edge version to load: 86.0.616.0 or newer \| Full API Compatibility: 91.0.824.0 or newer  

### General  

#### Features  

*   Extended the `ProcessFailed` event.  It now raises for non-renderer child processes and frame renderers.  
*   Added experimental [AreBrowserAcceleratorKeysEnabled][Webview2ReferenceWin32Icorewebview2experimentalsettingsViewWebview210824GetArebrowseracceleratorkeysenabled] setting.  You may prevent the browser from responding to keyboard shortcuts related to navigation, printing, saving, and other browser-specific functions.  
*   Added `iframe` element support for `AddScriptToExecuteOnDocumentCreated`.  
    
#### Promotion  

*   [UserAgent][Webview2ReferenceWin32Icorewebview22ViewWebview210721PrereleaseAddWebresourceresponsereceived] API is now promoted to Stable.  
*   Rasterization Scale APIs \([RasterizationScale][Webview2ReferenceWin32Icorewebview2experimentalcontrollerViewWebview210721PrereleaseGetRasterizationscale] property,  [RasterizationScaleChanged][Webview2ReferenceWin32Icorewebview2experimentalcontrollerViewWebview210721PrereleaseAddRasterizationscalechanged] event, [BoundsMode property][Webview2ReferenceWin32Icorewebview2experimentalcontrollerViewWebview210721PrereleaseGetBoundsmode], and [ShouldDetectMonitorScaleChanges][Webview2ReferenceWin32Icorewebview2experimentalcontrollerViewWebview210721PrereleaseGetShoulddetectmonitorscalechanges] property\) are now promoted to Stable.  
    
#### Bug fixes  

*   Expanded supported C++ and .NET project types such as MFC and ATL.  \([\#506][GithubMicrosoftedgeWebviewfeedbackIssue506], [\#669][GithubMicrosoftedgeWebviewfeedbackIssue669], and [\#851][GithubMicrosoftedgeWebviewfeedbackIssue851]\).  
*   Fixed a bug that Evergreen WebView2 Runtime leaks Inbound firewall entry.  
*   Fixed setting Response during `WebResourceRequested` event.  \([\#568][GithubMicrosoftedgeWebviewfeedbackIssue568]\).  
*   Fixed a bug that navigating to `edge://` causes browser process to exit.  \([\#604][GithubMicrosoftedgeWebviewfeedbackIssue604]\).  
*   Fixed a bug that limited WebView2 bounds to size of screen in Visual Hosting mode.  
    
## 1.0.774.44  

Release Date: March 8, 2021  

[NuGet package][NuGetGallery1.0.774.44] \| Minimum Runtime version to load: 86.0.616.0 or newer \| Full API Compatibility: 89.0.774.44 or newer  

### General  

#### Features  

*   Turned off various Microsoft Edge browser services in WebView2.  
*   Visual Hosting APIs are now Generally Available.  
    
#### Promotions  

*   The following experimental APIs are now promoted to Stable.  
    *   [DPI support][Webview2ReferenceWin32Icorewebview22ViewWebview210721PrereleaseAddWebresourceresponsereceived] related APIs  
    *   Visual hosting APIs  
    *   [SetVirtualHostNameToFolderMapping][Webview2ReferenceWin32Icorewebview23ViewWebview210790PrereleaseSetvirtualhostnametofoldermapping]  
    *   [TrySuspend and Resume][Webview2ReferenceWin32Icorewebview23ViewWebview210790PrereleaseTrysuspend]  
    *   [DefaultBackgroundColor][Webview2ReferenceWin32Icorewebview2controller2ViewWebview210790PrereleaseGetDefaultbackgroundcolor]  
        
#### Bug fixes  

*   Fixed a bug that limited WebView2 bounds to size of screen in Visual Hosting mode.  
    
## 1.0.790-prerelease  

Release Date: February 10, 2021  

[NuGet package][NuGetGallery1.0.790-prerelease] \| Microsoft Edge version 86.0.616.0 or newer  

### General  

> [!IMPORTANT]
> **Breaking Change**:  WebView2 pre-release package 1.0.781 is deprecated.  Discontinue development with package 1.0.781.  

> [!IMPORTANT]
> WebView2 pre-release package 0.9.430 is deprecated, and is removed with the next release.  If your WebView app uses the package, the WebView team recommends that you move to a newer package.  

#### Features  

*   Added [TrySuspend and Resume][Webview2ReferenceWin32Icorewebview23ViewWebview210790PrereleaseTrysuspend] method to suspend and resume WebViews.  
*   Added [SetVirtualHostNameToFolderMapping][Webview2ReferenceWin32Icorewebview23ViewWebview210790PrereleaseSetvirtualhostnametofoldermapping] method that maps a virtual host name to a directory path.  \([\#37][GithubMicrosoftedgeWebviewfeedbackIssue37], [\#161][GithubMicrosoftedgeWebviewfeedbackIssue161], and [\#212][GithubMicrosoftedgeWebviewfeedbackIssue212]\).  
*   Added the [DefaultBackgroundColor][Webview2ReferenceWin32Icorewebview2controller2ViewWebview210790PrereleaseGetDefaultbackgroundcolor] property to set the color and alpha-channel of the background.  \([\#414][GithubMicrosoftedgeWebviewfeedbackIssue414]\).  
*   Added the [UserAgent][Webview2ReferenceWin32Icorewebview2experimentalsettingsViewWebview210790PrereleaseGetUseragent] property to get or set the User Agent.  \([\#122][GithubMicrosoftedgeWebviewfeedbackIssue122]\).  
*   Replaced the `CreateCookieWithCookie` method with the `CopyCookie` method.  
*   Added visual hosting support using the [ICoreWebView2CompositionController][Webview2ReferenceWin32Icorewebview2compositioncontrollerViewWebview210790Prerelease] interface, which is created using the new `CreateCoreWebView2CompositionController` method from `ICoreWebView2Environment3`.  
    
#### Bug fixes  

*   Turned off the Microsoft Edge Shopping feature in WebView2.  
*   Turned off the context menu in the PDF viewer when `AreDefaultContextMenusEnabled` is `false`.  \([\#605][GithubMicrosoftedgeWebviewfeedbackIssue605]\).  
*   Fixed a bug that returned `E_NOINTERFACE` when querying `ICoreWebView2` for `ICoreWebView2Experimental`.  \([\#691][GithubMicrosoftedgeWebviewfeedbackIssue691]\).  
*   Fixed a bug that allowed navigation with malformed URIs when `CoreWebView2NavigationStartingEventArgs.Cancel` is set to `false`.  \([\#400][GithubMicrosoftedgeWebviewfeedbackIssue400]\).  
*   Fixed a bug that blocked `window.print()` on pop-up windows with event handlers attached to `NewWindowRequested` events.  \([\#409][GithubMicrosoftedgeWebviewfeedbackIssue409]\).  
*   Fixed Dynamic DPI issue when moving apps between different monitors.  \([\#58][GithubMicrosoftedgeWebviewfeedbackIssue58]\)  
*   Improved the `HRESULT` instances passed by [ICoreWebView2WebResourceResponseViewGetContentCompletedHandler::Invoke][Webview2ReferenceWin32Icorewebview2webresourceresponseviewgetcontentcompletedhandlerViewWebview210790PrereleaseInvoke].  
*   Turned off autofill manage button.  \([\#585][GithubMicrosoftedgeWebviewfeedbackIssue585]\).  
*   Fixed Visual Studio crashes while you run `WebView2.Dispose` when hosted in multiple windows.  \([\#816][GithubMicrosoftedgeWebviewfeedbackIssue816]\) and [\#442][GithubMicrosoftedgeWebviewfeedbackIssue442]\).  
*   Fixed bug to display WebView2 control in Visual Studio Toolbox.  \([\#210][GithubMicrosoftedgeWebviewfeedbackIssue210]\).  
*   Reduced high CPU usage issues.  \([\#878][GithubMicrosoftedgeWebviewfeedbackIssue878]\).  
*   Fixed issues with deprecated 1.0.781-prerelease package.  \([\#875][GithubMicrosoftedgeWebviewfeedbackIssue875] and [\#878][GithubMicrosoftedgeWebviewfeedbackIssue878]\).  
    
#### Promotions  

*   The following experimental APIs are now promoted to Stable.  
    *   Visual Hosting APIs  
    *   [SetVirtualHostNameToFolderMapping][Webview2ReferenceWin32Icorewebview23ViewWebview210790PrereleaseSetvirtualhostnametofoldermapping]  
        
### .NET  

#### Bug fixes  

*   Fixed bug that crashed WebView apps that use the WPF SDK.  The crash occurred when you selected `F4` to close a window.  \([\#399][GithubMicrosoftedgeWebviewfeedbackIssue399]\).  
*   The WebView2 initialization screen is now transparent, instead of gray.  \([\#196][GithubMicrosoftedgeWebviewfeedbackIssue196]\).  
    
## 1.0.705.50  

Release Date: January 25, 2021  

[NuGet package][NuGetGallery1.0.705.50] \| WebView2 Runtime version 86.0.616.0 or newer  

### General  

#### Promotions  

*   The following experimental APIs are now promoted to Stable.  
    *   [WebResourceResponseReceived API][Webview2ReferenceWin32Icorewebview22ViewWebview210721PrereleaseAddWebresourceresponsereceived]  
    *   [NavigateWithWebResourceRequest API][Webview2ReferenceWin32Icorewebview2environment2ViewWebview210721PrereleaseCreatewebresourcerequest]  
    *   [Cookie management API][Webview2ReferenceWin32Icorewebview2cookiemanagerViewWebview210721Prerelease]  
    *   [DOMContentLoaded API][Webview2ReferenceWin32Icorewebview22ViewWebview210721PrereleaseAddDomcontentloaded]  
    *   [WebView Environment property][Webview2ReferenceWin32Icorewebview22ViewWebview210721PrereleaseGetEnvironment]  
        
## 1.0.721-prerelease  

Release Date: December 8, 2020  

[NuGet package][NuGetGallery1.0.721-prerelease] \| Microsoft Edge version 86.0.616.0 or newer  

### General  

> [!IMPORTANT]
> **Breaking Change**:  WebView2 pre-release package 1.0.707 and package 0.9.628 are deprecated.  Discontinue development with package 1.0.707 and  package0.9.628.  

#### Features  

*   Added [WebView2 Group Policies][DeployedgeMicrosoftEdgeWebviewPolicies].  For more information on recommended practices, navigate to [group policies for WebView2][Webview2ConceptsEnterpriseGroupPoliciesForWebview2].  
*   > [!IMPORTANT]
    > **Breaking Change**:  Deprecated the old registry location.  
    > 
    > ```text
    > {Root}\Software\Policies\Microsoft\EmbeddedBrowserWebView\LoaderOverride\{AppId}
    > ```  
    
*   Added support for [Drag and Drop][Webview2ReferenceWin32Icorewebview2experimentalcompositioncontroller3ViewWebview210721Prerelease] in WebView2.  
*   Added APIs to handle DPI support.  
    *   Added [RasterizationScale][Webview2ReferenceWin32Icorewebview2experimentalcontrollerViewWebview210721PrereleaseGetRasterizationscale] property to change the DPI scale for WebView content and UI popups, and associated [RasterizationScaleChanged][Webview2ReferenceWin32Icorewebview2experimentalcontrollerViewWebview210721PrereleaseAddRasterizationscalechanged] event.  
    *   Added [ShouldDetectMonitorScaleChanges][Webview2ReferenceWin32Icorewebview2experimentalcontrollerViewWebview210721PrereleaseGetShoulddetectmonitorscalechanges] property to automatically update `RasterizationScale` property if needed.  
    *   Added [BoundsMode property][Webview2ReferenceWin32Icorewebview2experimentalcontrollerViewWebview210721PrereleaseGetBoundsmode] to specify that the bounds are logic pixels and allow WebView to use `RasterizationScale` for WebView2 pixel display, and WebView use the `RasterizationScale` with the `Bounds` to get the physical size.  
*   Updated `NewWindowRequested` event to handle `Ctrl`+`click` and `Shift`+`click`.  \([\#168][GithubMicrosoftedgeWebviewfeedbackIssue168] and [\#371][GithubMicrosoftedgeWebviewfeedbackIssue371]\).  
*   The following experimental APIs are now promoted to Stable.  
    *   [WebResourceResponseReceived API][Webview2ReferenceWin32Icorewebview22ViewWebview210721PrereleaseAddWebresourceresponsereceived]  
    *   [NavigateWithWebResourceRequest API][Webview2ReferenceWin32Icorewebview2environment2ViewWebview210721PrereleaseCreatewebresourcerequest]  
    *   [Cookie management API][Webview2ReferenceWin32Icorewebview2cookiemanagerViewWebview210721Prerelease]  
    *   [DOMContentLoaded API][Webview2ReferenceWin32Icorewebview22ViewWebview210721PrereleaseAddDomcontentloaded]  
    *   [WebView Environment property][Webview2ReferenceWin32Icorewebview22ViewWebview210721PrereleaseGetEnvironment]  
        
### .NET  

#### Features  

*   Turned on WinForms designer in .NET Core 3.1+ and .NET 5.  
*   Improved .NET cookie management.  \([\#611][GithubMicrosoftedgeWebviewfeedbackIssue611]\).  
*   Replaced `CoreWebView2Ready` with [CoreWebView2InitializationCompleted][DotnetApiMicrosoftWebWebview2Corewebview2initializationcompletedeventargs].  
    
#### Bug fixes

*   Added [AcceleratorKeyPressed][DotnetApiMicrosoftWebWebview2WpfWebview2Acceleratorkeypressed] event to support `AcceleratorKey` select in WebView2.  \([\#288][GithubMicrosoftedgeWebviewfeedbackIssue288]\).  
*   Removed unnecessary files from being output to WebView2 folders.  \([\#461][GithubMicrosoftedgeWebviewfeedbackIssue461]\).  
*   Improved host object API.  \([\#335][GithubMicrosoftedgeWebviewfeedbackIssue335] and [\#525][GithubMicrosoftedgeWebviewfeedbackIssue525]\).  
    
## 1.0.664.37  

Release Date: November 20, 2020  

[NuGet package][NuGetGallery1.0.664.37] \| WebView2 Runtime version 86.0.616.0 or newer  

### General  

> [!IMPORTANT]
> **Announcement**:  .NET WPF/WinForms WebView2 SDKs are now Generally Available \(GA\).  Starting with this release, Release SDKs are forward-compatible.  For more details, navigate to [GA announcement blog post][MicrosoftDevblogDotnetAnnouncingGeneralAvailabilityForMicrosoftEdgeWebview2ForNetFixedDistributionMethod].  

#### Features  

*   .NET WPF/WinForms WebView2 is now Generally Available \(GA\).  
*   Fixed Distribution \(Bring-your-own\) mode reached GA.  
    
### .NET  

#### Bug fixes  

*   `CoreWebView2NewWindowRequestedEventArgs.Handled` prevents new window from being opened.  \([\#549][GithubMicrosoftedgeWebviewfeedbackIssue549] and [\#560][GithubMicrosoftedgeWebviewfeedbackIssue560]\).  
    
## 1.0.674-prerelease  

Release Date: October 19, 2020  

[NuGet package][NuGetGallery1.0.674-prerelease] \| WebView2 Runtime version 86.0.616.0 or newer  

### General  

*   Added [NavigateWithWebResourceRequest][Webview2ReferenceWin32Icorewebview2experimentalViewWebview210674PrereleaseNavigatewithwebresourcerequest] method to provide post data or other request headers during navigation.  
*   Added [DOMContentLoaded][Webview2ReferenceWin32Icorewebview2experimentalViewWebview210674PrereleaseAddDomcontentloaded] event that runs when the initial HTML document is loaded and parsed.  
*   Added the [Environment][Webview2ReferenceWin32Icorewebview2experimentalViewWebview210674PrereleaseGetEnvironment] property on WebView2.  This property exposes the WebView2 environment where an instance of WebView2 was created.  
*   Added [cookie management][Webview2ReferenceWin32Icorewebview2experimentalViewWebview210674PrereleaseGetCookiemanager] APIs that allow developers to authenticate the WebView2 session, or retrieve cookies from WebView to authenticate other tools.  The Webview team plans to make language or framework-specific improvements.  For more information, navigate to [API Review: Cookie Management][GithubMicrosoftedgeWebview2AnnouncementIssue2].  
*   Updated the [WebResourceResponseReceived][Webview2ReferenceWin32Icorewebview2experimentalViewWebview210674PrereleaseAddWebresourceresponsereceived] event, and added immutable [WebResourceResponseView][Webview2ReferenceWin32Icorewebview2experimentalwebresourceresponseviewViewWebview210674Prerelease] and [WebResourceResponseReceivedEventArgs::PopulateResponseContent][Webview2ReferenceWin32Icorewebview2experimentalwebresourceresponsereceivedeventargsViewWebview209628PrereleasePopulateresponsecontent] to [WebResourceResponseView::GetContent][Webview2ReferenceWin32Icorewebview2experimentalwebresourceresponseviewViewWebview210674PrereleaseGetcontent].  
*   Turned off [Microsoft Defender Application Guard (WDAG)][WindowsSecurityThreatProtectionMicrosoftDefenderApplicationGuardWindows10] in WebView2.  
*   Added [SystemCursorId][Webview2ReferenceWin32Icorewebview2experimentalcompositioncontroller2ViewWebview210674PrereleaseGetSystemcursorid] for Visual Hosting.  
*   Added bug fixed for Input Method in Visual Hosting.  
*   Removed include requirement for `version.lib` when using WebView2 static library.  
    
### .NET  

*   Updated [CoreWebView2][DotnetApiMicrosoftWebWebview2CoreCorewebview2] class to expose the `CoreWebView2Environment` variable.  
*   Changed implementations of custom EventArgs classes in `Microsoft.Web.WebView2.Core` namespace to subclasses of [System.EventArgs][DotnetApiSystemEventargs] or [System.ComponentModel.CancelEventArgs][DotnetApiSystemComponentmodelCancelEventargs].  \([\#250][GithubMicrosoftedgeWebviewfeedbackIssue250]\)  
*   Added support for [CoreWebView2CreationProperties][DotnetApiMicrosoftWebWebview2Winforms] in WinForms.  \([\#204][GithubMicrosoftedgeWebviewfeedbackIssue204]\).  
*   Added [WebResourceRequested][DotnetApiMicrosoftWebWebview2CoreCorewebview2Webresourcerequested] .NET APIs.  \([\#219][GithubMicrosoftedgeWebviewfeedbackIssue219]\).  
*   Updated WinForms Designer [Source][DotnetApiMicrosoftWebWebview2WinformsWebview2Source] property to default or reset to null.  \([\#177][GithubMicrosoftedgeWebviewfeedbackIssue177]\).  
*   Updated WebView2 bounds in WebView2.Init() to support DPI modes that are less than 100%.  \([\#432][GithubMicrosoftedgeWebviewfeedbackIssue432]\).  
*   Updated [BuildWindowCore][DotnetApiMicrosoftWebWebview2WpfWebview2Buildwindowcore] and [DestroyWindowCore][DotnetApiMicrosoftWebWebview2WpfWebview2Destroywindowcore] to increase robustness.  \([\#382][GithubMicrosoftedgeWebviewfeedbackIssue382]\).  
*   Updated .NET Loader base to load on process bit instead of operating system architecture.  \([\#431][GithubMicrosoftedgeWebviewfeedbackIssue431]\).  
*   Renamed `EdgeNotFoundException` to [WebView2RuntimeNotFoundException][DotnetApiMicrosoftWebWebview2CoreWebview2runtimenotfoundexception].  
    
## 1.0.622.22  

Release Date: October 19, 2020  

[NuGet package][NuGetGallery1.0.622.22] \| WebView2 Runtime version 86.0.616.0 or newer  

### General  

> [!IMPORTANT]
> **Announcement**:  Win32 C/C++ WebView2 is now Generally Available \(GA\).  Starting this release, Release SDKs are forward-compatible.  For more information, navigate to [GA announcement blog post][WindowsBlogsMsedgedevEdgeWebview2GeneralAvailability].  

*   [Evergreen WebView2 Runtime and installer][Webview2ConceptsDistributionUnderstandRuntimeInstaller] are GA.  Bootstrapper, downlink link for the Bootstrapper, and Standalone Installer for the Evergreen WebView2 Runtime are available on [Microsoft Edge WebView2][MicrosoftDeveloperMicrosoftEdgeWebView2].  Sample code for the installation workflow is also available in the [WebView2Samples repo][GithubMicrosoftedgeWebview2samplesMain].  
*   [Fixed Version mode][Webview2ConceptsDistributionFixedVersionDistributionMode] is available for developer preview.  
    
## 0.9.622.11  

Release Date: September 10, 2020  

[NuGet package][NuGetGallery0.9.622.11] \| WebView2 Runtime version 86.0.616.0 or newer  

### General  

*   > [!IMPORTANT]
    > **Announcement**: This SDK is the Release Candidate for WebView2 Win32 C/C++ GA.  The GA version should use same API interface and functionality.  
    
*   Disconnected [browser policies][DeployedgeMicrosoftEdgePolicies].  
*   Added [AllowSingleSignOnUsingOSPrimaryAccount][Webview2ReferenceWin32Icorewebview2environmentoptionsViewWebview209622GetAllowsinglesignonusingosprimaryaccount] property on WebView2 environment options to turn on conditional access for WebView.  
*   Updated `ICoreWebView2NewWindowRequestedEventArgs` to include [WindowFeatures][Webview2ReferenceWin32Icorewebview2newwindowrequestedeventargsViewWebview209622GetWindowfeatures] property, and the associated [ICoreWebView2WindowFeatures][Webview2ReferenceWin32Icorewebview2windowfeaturesViewWebview209622].  \([\#293][GithubMicrosoftedgeWebviewfeedbackIssue293]\).  
*   Updated `System.Windows.Rect`  to use `System.Drawing.Rectangle` instead of `System.Windows.Rect` \([\#235][GithubMicrosoftedgeWebviewfeedbackIssue235]\).  
*   Updated NewWindowRequested event to handle `window.open()` request without parameters.  \([\#293][GithubMicrosoftedgeWebviewfeedbackIssue293]\).  
*   [AdditionalBrowserArguments][Webview2ReferenceWin32Icorewebview2environmentoptionsViewWebview209622PutAdditionalbrowserarguments] specified with `ICoreWebView2EnvironmentOptions` aren't overridden with environment variables or registry values.  For more information, navigate to [CreateCoreWebView2EnvironmentWithOptions][Webview2ReferenceWin32Webview2IdlViewWebview209622Createcorewebview2environmentwithoptions].  
    
## 0.9.579  

Release Date: July 20, 2020  

[NuGet package][NuGetGallery0.9.579] \| Microsoft Edge version 86.0.579.0.  

### General  

*   > [!IMPORTANT]
    > **Announcement**: Evergreen WebView2 Runtime and installer is released for preview.  For more information, navigate to [Distribution of WebView2][Webview2ConceptsDistributionUnderstandRuntimeInstaller].  
    
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
    
*   Added WebView worker thread improvements.  \([\#318][GithubMicrosoftedgeWebviewfeedbackIssue318]\).  
*   Turned off the popup blocker in WebView.  For more information, navigate to the [IsUserInitiated][Webview2ReferenceWin32Icorewebview2newwindowrequestedeventargsViewWebview209538GetIsuserinitiated] property in the `NewWindowRequested` event.  
*   Ensured WebView navigation starting event is run for `about:blank`.  Now, `NavigationStarting` events are run for all navigation, but cancellations for `about:blank` or `srcdoc` of the `iframe` element aren't supported and ignored.  
*   Blocked some `edge://` URI schemes in WebView.  
*   Added experimental [IsSingleSignOnUsingOSPrimaryAccountEnabled][Webview2ReferenceWin32Icorewebview2experimentalenvironmentoptionsViewWebview209538PrereleaseGetIssinglesignonusingosprimaryaccountenabled] property on WebView2 environment options to turn on conditional access for WebView.  
*   Added experimental [WebResourceResponseReceived][Webview2ReferenceWin32Icorewebview2experimentalViewWebview209538PrereleaseAddWebresourceresponsereceived] event that runs after the WebView receives and processes the response from a WebResource request.  Authentication headers, if any, are included in the response object.  
    
### .NET  

*   Improved WPF focus handling.  \([\#185][GithubMicrosoftedgeWebviewfeedbackIssue185]\).  
*   Added `ZoomFactor` property on WPF Webview2 Controller.  
    
## 0.9.538  

[NuGet package][NuGetGallery0.9.538] \| Microsoft Edge version 85.0.538.0.  

### General  

*   Dropping support for WebView2 SDK Version [0.8.149](#08149).  WebView2 recommends staying up to date with the latest version of WebView2.  
*   Updated group policy to account for when the profile path of the Microsoft Edge browser is modified  \([#179][GithubMicrosoftedgeWebviewfeedbackIssue179]\).  
    
### Win32 C/C++  

*   Added [ICoreWebView2ExperimentalNewWindowRequestedEventArgs::get_WindowFeatures][Webview2ReferenceWin32Icorewebview2experimentalnewwindowrequestedeventargsViewWebview209538PrereleaseGetWindowfeatures], which fires when `window.open()` is run and associated with [ICoreWebView2ExperimentalWindowFeatures][Webview2ReferenceWin32Icorewebview2experimentalwindowfeaturesViewWebview209538Prerelease] \([#70][GithubMicrosoftedgeWebviewfeedbackIssue70]\).  
*   > [!IMPORTANT]
    > **Breaking Change**:  Deprecated [CreateCoreWebView2EnvironmentWithDetails][Webview2ReferenceWin32Webview2IdlViewWebview209488Createcorewebview2environmentwithdetails] and replaced with [CreateCoreWebView2EnvironmentWithOptions][Webview2ReferenceWin32Webview2IdlViewWebview209538Createcorewebview2environmentwithoptions].  
    
*   > [!IMPORTANT]
    > **Breaking Change**:  In order to ensure the WebView2 API aligns with the Windows API naming conventions, the WebView team updated the names of the following.  
    > 
    > *   [AreRemoteObjectsAllowed][Webview2ReferenceWin32Icorewebview2settingsViewWebview209488GetAreremoteobjectsallowed] is now [AreHostObjectsAllowed][Webview2ReferenceWin32Icorewebview2settingsViewWebview209538GetArehostobjectsallowed].  
    
*   Updated [AddHostObjectToScript][Webview2ReferenceWin32Icorewebview2ViewWebview209538ddhostobjecttoscript].  The original host object serializer markers are now set to the proxy objects.  Then host object serializer markers are serialized back as a host object when passed as a parameter in the JavaScript callback \([#148][GithubMicrosoftedgeWebviewfeedbackIssue148]\).  
    
### .NET (0.9.538 pre-release)  

*   Released WinForms and WPF WebView2API Samples, which are comprehensive guides of the WebView2 SDK.  For more information, navigate to [Samples Repo][GithubMicrosoftedgeWebview2samplesMain].  
*   Added support for visual hosting and window features [experimental APIs][Webview2ConceptsVersioningExperimentalApis].  
*   > [!IMPORTANT]
    > **Breaking Change**:  The following deferrals now implement IDisposable:  [ScriptDialogOpening][DotnetApiMicrosoftWebWebview2CoreCorewebview2Scriptdialogopening], [NewWindowRequested][DotnetApiMicrosoftWebWebview2CoreCorewebview2Newwindowrequested], [WebResourceRequested][DotnetApiMicrosoftWebWebview2CoreCorewebview2Webresourcerequested], and [PermissionRequested][DotnetApiMicrosoftWebWebview2CoreCorewebview2Permissionrequested].  
    
*   Added [GetAvailableBrowserVersionString][DotnetApiMicrosoftWebWebview2CoreCorewebview2environmentGetavailablebrowserversionstring] and [CompareBrowserVersions][DotnetApiMicrosoftWebWebview2CoreCorewebview2environmentComparebrowserversions] as [CoreWebView2Environment][DotnetApiMicrosoftWebWebview2CoreCorewebview2environment] statics.  
    
## 0.9.515-prerelease  

[NuGet package][NuGetGallery0.9.515-prerelease] \| Microsoft Edge version 84.0.515.0.  

*   > [!IMPORTANT]
    > **Announcement**:  WebView2 now supports Windows Forms and WPF on .NET Framework 4.6.2 or later and .NET Core 3.0 or later in the **pre-release package**.  
    
*   For more information about building WPF apps, navigate to the [WPF Get Started Guide][Webview2GetStartedWpf] and the WebView2 [WPF Reference][DotnetApiMicrosoftWebWebview2Wpf] for WPF-specific APIs.  
*   For more information about building Windows Forms apps, navigate to the [Windows Forms Get Started Guide][Webview2GetStartedWinforms] and the WebView2 [Windows Forms Reference][DotnetApiMicrosoftWebWebview2Winforms] for Windows Forms specific APIs.  
*   For more information about the CoreWebView2 APIs, navigate to [.NET Reference][DotnetApiMicrosoftWebWebview2Core].  
*   > [!CAUTION]
    > **Known Issues**:  The WebView team is aware of some issues in the pre-release that are being resolved in future releases.  
    > 
    > *   **DPI Awareness**:  WebView2 for WPF is currently not DPI aware.  When initializing WebView2 on high DPI monitors, there is a known issue where the WebView at first initializes as a fraction of the window until the window is resized.  
    > *   **WPF Designer**:  The WPF designer is not currently supported.  Add the WebView2 control in your app by directly modifying the appropriate XAML in a text editor.  
    
## 0.9.488  

[NuGet package][NuGetGallery0.9.488] \| Microsoft Edge version 84.0.488.0.  

*   > [!IMPORTANT]
    > **Announcement**:  Starting with the upcoming Microsoft Edge version 83, Evergreen WebView no longer targets the Stable browser channel.  Instead, it targets another set of binaries, branded [Evergreen WebView2 Runtime][Webview2ConceptsDistributionEvergreenDistributionMode], that you may chain-install through an installer the WebView team is currently developing.  For more information, navigate to [App-Distribution][Webview2ConceptsDistribution].  
    
*   > [!IMPORTANT]
    > **Announcement**:  Moving forward, the WebView team releases two packages:  a pre-release package with experimental APIs \(for you to try out\) and a stable release package with stable APIs \(for your confidence\).  To learn about the differences, navigate to [Understanding browser versions and WebView2][Webview2ConceptsVersioning].  
    
*   > [!IMPORTANT]
    > **Breaking Change**:  In order to ensure the WebView2 API aligns with the Windows API naming conventions, the WebView team updated the names of the following interfaces.  
    > 
    > *   `CORE_WEBVIEW2_*` prefix is now `COREWEBVIEW2_*`.  
    > *   [GetCoreWebView2BrowserVersionInfo][Webview2ReferenceWin32Webview2IdlViewWebview209430Getcorewebview2browserversioninfo] is now [GetAvailableCoreWebView2BrowserVersionString][Webview2ReferenceWin32Webview2IdlViewWebview209488Getavailablecorewebview2browserversionstring].  
    > *   [get_BrowserVersionInfo][Webview2ReferenceWin32Icorewebview2environmentViewWebview209430GetBrowserversioninfo] is now [get_BrowserVersionString][Webview2ReferenceWin32Icorewebview2environmentViewWebview209488GetBrowserversionstring].  
    > *   [AddRemoteObject][Webview2ReferenceWin32Icorewebview2ViewWebview209430Addremoteobject] is now [AddHostObjectToScript][Webview2ReferenceWin32Icorewebview2ViewWebview209488Addhostobjecttoscript].  
    > *   [RemoveRemoteObject][Webview2ReferenceWin32Icorewebview2ViewWebview209430Removeremoteobject] is now [RemoveHostObjectFromScript][Webview2ReferenceWin32Icorewebview2ViewWebview209488Removehostobjectfromscript].  
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
    > **Breaking Change**:  Deprecated [CreateCoreWebView2EnvironmentWithDetails][Webview2ReferenceWin32Webview2IdlViewWebview209488Createcorewebview2environmentwithdetails] and replaced with [CreateCoreWebView2EnvironmentWithOptions][Webview2ReferenceWin32Webview2IdlViewWebview209488Createcorewebview2environmentwithoptions].  
    
*   Added [FrameNavigationCompleted][Webview2ReferenceWin32Icorewebview2ViewWebview209488AddFramenavigationcompleted] event.  Now, when an `iframe` element completes navigation, an event is run and returns the success of the navigation and the navigation ID.  
*   Added [ICoreWebView2EnvironmentOptions][Webview2ReferenceWin32Icorewebview2environmentoptionsViewWebview209488] interface, which may be used to determine the version of the Evergreen WebView2 Runtime targeted by your app.  
*   Added [IsBuiltInErrorPageEnabled][Webview2ReferenceWin32Icorewebview2settingsViewWebview209488GetIsbuiltinerrorpageenabled] setting.  Now, you may choose to turn on or off the built-in error webpage for navigation failure and render process failure.  
*   Updated Remote Object Injection to support .NET `IDispatch` implementations \([#113][GithubMicrosoftedgeWebviewfeedbackIssue113]\).  
*   Updated [NewWindowRequested][Webview2ReferenceWin32Icorewebview2ViewWebview209488AddNewwindowrequested] event to handle requests from context menus \([#108][GithubMicrosoftedgeWebviewfeedbackIssue108]\).  
*   Released the first separate WebView2 pre-release package where you may access visual hosting APIs.  The WebView team updated [APISample][GithubMicrosoftedgeWebview2samplesMain] to include the new experimental APIs.  
    *   Added [ICoreWebView2ExperimentalCompositionController][Webview2ReferenceWin32Icorewebview2experimentalcompositioncontrollerViewWebview209488Prerelease] interface, to connect to a composition tree and provide input for the WebView.  
    *   Added [ICoreWebView2ExperimentalPointerInfo][Webview2ReferenceWin32Icorewebview2experimentalpointerinfoViewWebview209488Prerelease], which contains all the information from a `POINTER_INFO`.  This object is passed to SendPointerInput to inject pointer input into the WebView.  
    *   Added [ICoreWebView2ExperimentalCursorChangedEventHandler][Webview2ReferenceWin32Icorewebview2experimentalcursorchangedeventhandlerViewWebview209488Prerelease], which tells the app when the mouse cursor over the WebView should be changed.  When mouse is over a text box in the WebView, the cursor changes from the arrow to the selector.  The `cursor` property on the `CompositionController` tells the app what the mouse cursor should currently be for the WebView.  
        
## 0.9.430  

[NuGet package][NuGetGallery0.9.430] \| Microsoft Edge version 82.0.430.0.  

The WebView2 SDK is the official Win32 C++ Beta version, which incorporates several feature requests from feedback.  The WebView team tries to limit the number of releases with breaking changes.  As general availability approaches, several major breaking changes are incorporated in the Beta release.  

*   > [!IMPORTANT]
    > **Breaking Change**:  As the final release approaches the WebView team renamed the prefix `IWebView2WebView` to `ICoreWebView2` in order to make sure the WebView2 API aligns with the Windows API naming convention.  Additionally, in order to leverage the WebView2 SDK from UI frameworks, the WebView team separated `ICoreWebView2` into [ICoreWebView2][Webview2ReferenceWin32Icorewebview2ViewWebview209430] and [ICoreWebView2Host][Webview2ReferenceWin32Icorewebview2hostViewWebview209430].  `ICoreWebView2Host` supports resizing, showing-and-hiding, focusing, and other functionality related to windowing and composition.  ICoreWebView2 supports all other WebView2 functionality.  To learn more about incorporating the changes, navigate to the WebView2 [pull request][GithubMicrosoftedgeWebview2samplesPr17] in the WebView2 [APISample][GithubMicrosoftedgeWebview2samplesMain] project.  
    
*   > [!IMPORTANT]
    > **Breaking Change**:  Split [DocumentStateChanged][Webview2ReferenceWin32Iwebview2webviewViewWebview208355AddDocumentstatechanged] into three components:  [SourceChanged][Webview2ReferenceWin32Icorewebview2ViewWebview209430AddSourcechanged], [ContentLoading][Webview2ReferenceWin32Icorewebview2ViewWebview209430AddContentloading], and [HistoryChanged][Webview2ReferenceWin32Icorewebview2ViewWebview209430AddHistorychanged].  Now, when the source URL changes the `SourceChanged` event is run.  When the history state is changed the `HistoryChanged` event is run.  The `ContentLoading` event is run before the initial script when a new document is being loaded.  
    
*   Added support for ARM64 architecture.  
*   Added Soft Input Panel \(SIP\) support for touch screen devices.  
*   Added support for Windows Server 2008 R2, Windows Server 2012, Windows Server 2012 R2, and Windows Server 2016.  
*   Added [NotifyParentWindowPositionChanged][Webview2ReferenceWin32Icorewebview2hostViewWebview209430Notifyparentwindowpositionchanged] for the status bar to follow the window in windowed mode.  Also, implement the change in windowless mode in order for accessibility features to work.  
*   Added [AreRemoteObjectsAllowed][Webview2ReferenceWin32Icorewebview2settingsViewWebview209430GetAreremoteobjectsallowed] setting to globally control whether a webpage may be accessed by any remote objects.  By default, `AreRemoteObjectsAllowed` is turned on, so remote objects added by [AddRemoteObject][Webview2ReferenceWin32Icorewebview2ViewWebview209430Addremoteobject] are accessible from the webpage.  When `AreRemoteObjectsAllowed` is turned off, the objects aren't accessible from the webpage.  Changes are applied on the next navigation event.  
*   Added [IsZoomControlEnabled][Webview2ReferenceWin32Icorewebview2settingsViewWebview209430GetIszoomcontrolenabled] setting to prevent users from impacting the zoom of the WebView using `ctrl`+`+` and `ctrl`+`-` \(or `ctrl`+ mouse wheel\).  Zoom may still be set using [put_ZoomFactor][Webview2ReferenceWin32Icorewebview2hostViewWebview209430PutZoomfactor] when the setting is turned off.  
*   Changed ZoomFactor to only apply to the current WebView.  Zoom changes to the current WebView don't affect other WebViews that you navigated to using the same site of origin.  For more information, navigate to [get_ZoomFactor][Webview2ReferenceWin32Icorewebview2hostViewWebview209430GetZoomfactor].  
*   Hid ZoomView UI for WebView \([#95][GithubMicrosoftedgeWebviewfeedbackIssue95]\).  
*   Added [SetBoundsAndZoomFactor][Webview2ReferenceWin32Icorewebview2hostViewWebview209430Setboundsandzoomfactor].  Now, you may set the zoom factor and bounds of a WebView at the same time.  
*   Added [WindowCloseRequested][Webview2ReferenceWin32Icorewebview2ViewWebview209430AddWindowcloserequested] event.  For more information, navigate to [add_WindowCloseRequested][Webview2ReferenceWin32Icorewebview2ViewWebview209430AddWindowcloserequested] \([#119][GithubMicrosoftedgeWebviewfeedbackIssue119]\).  
*   Added support for the `beforeunload` dialog type for JavaScript dialog events and added [CORE_WEBVIEW2_SCRIPT_DIALOG_KIND_BEFOREUNLOAD][Webview2ReferenceWin32Icorewebview2ViewWebview209430CoreWebview2ScriptDialogKind] enum entry.  
*   Added [GetHeaders][Webview2ReferenceWin32Icorewebview2httprequestheadersViewWebview209430Getheaders] to HttpRequestHeaders, [GetHeader][Webview2ReferenceWin32Icorewebview2httpresponseheadersViewWebview209430Getheader] to HttpResponseHeaders, and [get_HasCurrentHeader][Webview2ReferenceWin32Icorewebview2httpheaderscollectioniteratorViewWebview209430GetHascurrentheader] property to HttpHeadersCollectionIterator.  
*   > [!IMPORTANT]
    > **Breaking Change**:  Modified `DevToolsProtocolEventReceived` behavior.  Now, you may create a [DevToolsProtocolEventReceiver][Webview2ReferenceWin32Icorewebview2devtoolsprotocoleventreceiverViewWebview209430] for a particular DevTools Protocol event and subscribe/unsubscribe to such event using [add_DevToolsProtocolEventReceived][Webview2ReferenceWin32Icorewebview2devtoolsprotocoleventreceiverViewWebview209430AddDevtoolsprotocoleventreceived]/[remove_DevToolsProtocolEventReceived][Webview2ReferenceWin32Icorewebview2devtoolsprotocoleventreceiverViewWebview209430RemoveDevtoolsprotocoleventreceived].  
    
*   > [!IMPORTANT]
    > **Breaking Change**:  Changed `WebMessageReceivedEventArgs` [get_WebMessageAsString][Webview2ReferenceWin32Iwebview2webmessagereceivedeventargsViewWebview208355GetWebmessageasstring] property to a [TryGetWebMessageAsString][Webview2ReferenceWin32Icorewebview2webmessagereceivedeventargsViewWebview209430Trygetwebmessageasstring] method.  
    
*   > [!IMPORTANT]
    > **Breaking Change**:  Changed `AcceleratorKeyPressedEventArgs` [Handle][Webview2ReferenceWin32Iwebview2acceleratorkeypressedeventargsViewWebview208355Handle] method to a [get_Handled][Webview2ReferenceWin32Icorewebview2acceleratorkeypressedeventargsViewWebview209430GetHandled] property.  
    
## 0.8.355  

[NuGet package][NuGetGallery0.8.355] \| Microsoft Edge version 80.0.355.0.  

*   Released WebView2API Sample, a comprehensive guide of the WebView2 SDK.  For more information, navigate to [API Sample][GithubMicrosoftedgeWebview2samplesApisample].  
*   Added IME support for all languages besides English \([#30][GithubMicrosoftedgeWebviewfeedbackIssue30]\).  
*   Updated the API surface of the `WebResourceRequested` event in response to bug reports.  Simultaneously specifying a filter and an event on creation is now deprecated.  To create a web resource requested event, use [add_WebResourceRequested][Webview2ReferenceWin32Iwebview2webview5ViewWebview208355AddWebresourcerequested] to add the event and [AddWebResourceRequestedFilter][Webview2ReferenceWin32Iwebview2webview5ViewWebview208355Addwebresourcerequestedfilter] to add a filter.  [RemoveWebResourceRequestedFilter][Webview2ReferenceWin32Iwebview2webview5ViewWebview208355Removewebresourcerequestedfilter] removes the filter \([#36][GithubMicrosoftedgeWebviewfeedbackIssue36]\) \([#74][GithubMicrosoftedgeWebviewfeedbackIssue74]\).  
*   > [!IMPORTANT]
    > **Breaking Change**:  Modified fullscreen behavior.  Deprecated [IsFullScreenAllowed][Webview2ReferenceWin32Iwebview2settingsViewWebview208355GetIsfullscreenallowedDeprecated].  Now, by default, if an element in a WebView \(such as a video\) is set to full screen, it fills the bounds of the WebView.  Use the [ContainsFullScreenElementChanged][Webview2ReferenceWin32Iwebview2containsfullscreenelementchangedeventhandlerViewWebview208355] event and [get_ContainsFullScreenElement][Webview2ReferenceWin32Iwebview2webview5ViewWebview208355GetContainsfullscreenelement] to specify how the app should resize the WebView if an element wants to enter fullscreen mode.  
    
## 0.8.314  

[NuGet package][NuGetGallery0.8.314] \| Microsoft Edge version 80.0.314.0.  

*   Added support for Windows 7, Windows 8, and Windows 8.1.  
*   Added Visual Studio and Visual Studio Code debug support for WebView2.  Now, debug your script in the WebView2 right from your IDE.  For more information, navigate to [How to debug when developing with WebView2 controls][Webview2HowToDebug].  
*   Added `Native Object Injection` for the running script in WebView2 to access an IDispatch object from the Win32 component of the app and access the properties of the IDispatch object.  For more information, navigate to [AddRemoteObject][Webview2ReferenceWin32Iwebview2webview4ViewWebview208355Addremoteobject] \([#17][GithubMicrosoftedgeWebviewfeedbackIssue17]\).  
*   Added `AcceleratorKeyPressed` event.  For more information, navigate to [add_AcceleratorKeyPressed][Webview2ReferenceWin32Iwebview2webview4ViewWebview208355AddAcceleratorkeypressed] \([#57][GithubMicrosoftedgeWebviewfeedbackIssue57]\).  
*   Turned off the `Context Menus`.  For more information, navigate to [put_AreDefaultContextMenusEnabled][Webview2ReferenceWin32Iwebview2settings2ViewWebview208355PutAredefaultcontextmenusenabled] \([#57][GithubMicrosoftedgeWebviewfeedbackIssue57]\).  
*   Updated `DPI Awareness`.  Now, the DPI awareness of WebView is the same as the DPI awareness of the host app.  
    
    > [!NOTE]
    > If another hybrid app is launched with a different DPI Awareness than the original WebView, the new WebView is not launched if the `user data folder` is the same \([#1][GithubMicrosoftedgeWebviewfeedbackIssue1]\).  
    
*   Updated `Notification Change Behavior` so WebView2 automatically rejects notification permission requests prompted by web content hosted in the WebView.  
    
## 0.8.270  

[NuGet package][NuGetGallery0.8.270] \| Microsoft Edge version 78.0.270.0.  

*   Added `DocumentTitleChanged` event to indicate document title change \([\#27][GithubMicrosoftedgeWebviewfeedbackIssue27]\).  
*   Added `GetWebView2BrowserVersionInfo` API \([\#18][GithubMicrosoftedgeWebviewfeedbackIssue18]\).  
*   Added `NewWindowRequested` event.  
*   Updated `CreateWebView2EnvironmentWithDetails` function to remove `releaseChannelPreference`.  For more information about the `CreateWebView2EnvironmentWithDetails` function, navigate to [CreateWebView2EnvironmentWithDetails][Webview2ReferenceWin32Webview2IdlViewWebview208355Createwebview2environmentwithdetails].  The registry and environment variable override is still supported.  The default channel preference is used unless overridden.  
    During the channel search, the WebView team skips any previous channel version that isn't compatible with the WebView2 SDK.  
    The WebView team selects the more stable channel to ensure the most consistent behaviors for the end user.  When you test with latest Canary builds, you should create a script to set the `WEBVIEW2_RELEASE_CHANNEL_PREFERENCE` environment variable to `1` before launching the app.  
*   Updated the `CreateWebView2EnvironmentWithDetails` function with logic for selecting `userDataFolder` when not specified.  For more information about the `CreateWebView2EnvironmentWithDetails` function, navigate to [CreateWebView2EnvironmentWithDetails][Webview2ReferenceWin32Webview2IdlViewWebview208355Createwebview2environmentwithdetails].  If you previously used the default `userDataFolder` location, when you switch to the new SDK the default `userDataFolder` is reset \(set to a new location in the host code directory\) and your state is also reset.  If the host process doesn't have permission to write to the specified directory, the `CreateWebView2EnvironmentWithDetails` function may fail.  You may copy the data from the old `user data folder` to the new directory.  
    
## 0.8.230  

[NuGet package][NuGetGallery0.8.230] \| Microsoft Edge version 77.0.230.0.  

*   Added `Stop` API to stop all navigation and pending resource fetches \([\#28][GithubMicrosoftedgeWebviewfeedbackIssue28]\).  
*   Added `.tlb` file to the NuGet package \([\#22][GithubMicrosoftedgeWebviewfeedbackIssue22]\).  
*   Added .NET projects to the installer list in the NuGet package \([\#32][GithubMicrosoftedgeWebviewfeedbackIssue32]\).  
    
## 0.8.190  

[NuGet package][NuGetGallery0.8.190] \| Microsoft Edge version 77.0.190.0.  

*   Added `get_AreDevToolsEnabled`/`put_AreDevToolsEnabled` to control if users can open DevTools \([\#16][GithubMicrosoftedgeWebviewfeedbackIssue16]\).  
*   Added `get_IsStatusBarEnabled`/`put_IsStatusBarEnabled` to control if the status bar is displayed \([\#19][GithubMicrosoftedgeWebviewfeedbackIssue19]\).  
*   Added `get_CanGoBack`/`GoBack`/`get_CanGoForward`/`GoForward` for going back and forward through navigation history.  
*   Added HTTP header types \(`IWebView2HttpHeadersCollectionIterator`/`IWebView2HttpRequestHeaders`/`IWebView2HttpRequestHeaders`\) for viewing and modifying HTTP headers in WebView.  
*   Added 32-bit WebView support on 64-bit machines \([\#13][GithubMicrosoftedgeWebviewfeedbackIssue13]\).  
*   Added WebView IDL to the SDK \([\#14][GithubMicrosoftedgeWebviewfeedbackIssue14]\).  
*   Added lib to support `IID\_\*` interface ID objects \([\#12][GithubMicrosoftedgeWebviewfeedbackIssue12]\).  
*   Added include path, linking, and autocopying of DLL files to NuGet `TARGET` file in SDK.  
*   Turned on requesting `window.open()` in script.  
    
## 0.8.149  

[NuGet package][NuGetGallery0.8.149] \| Microsoft Edge version 76.0.149.0.  

Initial developer preview release.  

<!-- Links -->  

[Webview2ConceptsDistribution]: ./concepts/distribution.md "Distribution of applications using WebView2 | Microsoft Docs"  
[Webview2ConceptsDistributionEvergreenDistributionMode]: ./concepts/distribution.md#evergreen-distribution-mode "Evergreen distribution mode - Distribution of applications using WebView2 | Microsoft Docs"  
[Webview2ConceptsDistributionFixedVersionDistributionMode]: ./concepts/distribution.md#fixed-version-distribution-mode "Fixed Version distribution mode - Distribution of applications using WebView2 | Microsoft Docs"  
[Webview2ConceptsDistributionUnderstandRuntimeInstaller]: ./concepts/distribution.md#understanding-the-webview2-runtime "Understand the WebView2 Runtime and installer - Distribution of applications using WebView2 | Microsoft Docs"  
[Webview2ConceptsEnterpriseGroupPoliciesForWebview2]: ./concepts/enterprise.md#group-policies-for-webview2 "Group policies for WebView2 - Managing WebView2 applications | Microsoft Docs"  
[Webview2ConceptsVersioning]: ./concepts/versioning.md "Understanding browser versions and WebView2 | Microsoft Docs"  
[Webview2ConceptsVersioningExperimentalApis]: ./concepts/versioning.md#experimental-apis "Experimental APIs - Understanding browser versions and WebView2 | Microsoft Docs"  
[Webview2ConceptsVersioningMatchingWebview2RuntimeVersions]: ./concepts/versioning.md#matching-webview2-runtime-versions "Matching WebView2 Runtime versions - Understand WebView2 SDK versions | Microsoft Docs"  
[Webview2GetStartedWinforms]: ./get-started/winforms.md "Get started with WebView2 in Windows Forms apps | Microsoft Docs"  
[Webview2GetStartedWpf]: ./get-started/wpf.md "Get started with WebView2 in WPF | Microsoft Docs"  
[Webview2HowToDebug]: ./how-to/debug.md "How to debug when developing with WebView2 controls | Microsoft Docs"  

[Webview2ReferenceWin32Icorewebview2experimental2ViewWebview210865PrereleaseAddDownloadstarting]: /microsoft-edge/webview2/reference/win32/icorewebview2experimental2?view=webview2-1.0.865-prerelease&preserve-view=true#add_downloadstarting  "add_DownloadStarting - interface ICoreWebView2Experimental2 | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2experimentalenvironment3ViewWebview210865PrereleaseUpdateruntime]: /microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment3?view=webview2-1.0.865-prerelease&preserve-view=true#updateruntime  "UpdateRuntime - interface ICoreWebView2ExperimentalEnvironment3 | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2experimentalframeViewWebview210865PrereleaseAddhostobjecttoscriptwithorigins]: /microsoft-edge/webview2/reference/win32/icorewebview2experimentalframe?view=webview2-1.0.865-prerelease&preserve-view=true#addhostobjecttoscriptwithorigins  "AddHostObjectToScriptWithOrigins - interface ICoreWebView2ExperimentalFrame | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2experimentalsettings4ViewWebview210865PrereleaseIspinchzoomenabled]: /microsoft-edge/webview2/reference/win32/icorewebview2experimentalsettings4?view=webview2-1.0.865-prerelease&preserve-view=true#ispinchzoomenabled  "IsPinchZoomEnabled - interface ICoreWebView2ExperimentalSettings4 | Microsoft Docs" 

[Webview2ReferenceWin32Icorewebview2experimentalsettingsViewWebview210824GetArebrowseracceleratorkeysenabled]: /microsoft-edge/webview2/reference/win32/icorewebview2experimentalsettings2?view=webview2-1.0.824&preserve-view=true#get_arebrowseracceleratorkeysenabled "get_AreBrowserAcceleratorKeyPressed - interface ICoreWebView2ExperimentalSettings | Microsoft Docs" 

[Webview2ReferenceWin32Icorewebview22ViewWebview210721PrereleaseAddDomcontentloaded]: /microsoft-edge/webview2/reference/win32/icorewebview2_2?view=webview2-1.0.721-prerelease&preserve-view=true#add_domcontentloaded "add_DOMContentLoaded - interface ICoreWebView2_2 | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview22ViewWebview210721PrereleaseAddWebresourceresponsereceived]: /microsoft-edge/webview2/reference/win32/icorewebview2_2?view=webview2-1.0.721-prerelease&preserve-view=true#add_webresourceresponsereceived "add_WebResourceResponseReceived - interface ICoreWebView2 | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview22ViewWebview210721PrereleaseGetEnvironment]: /microsoft-edge/webview2/reference/win32/icorewebview2_2?view=webview2-1.0.721-prerelease&preserve-view=true#get_environment "ICoreWebView2CookieManager | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview23ViewWebview210790PrereleaseSetvirtualhostnametofoldermapping]: /microsoft-edge/webview2/reference/win32/icorewebview2_3?view=webview2-1.0.790-prerelease&preserve-view=true#setvirtualhostnametofoldermapping "SetVirtualHostNameToFolderMapping - interface ICoreWebView2_3 | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview23ViewWebview210790PrereleaseTrysuspend]: /microsoft-edge/webview2/reference/win32/icorewebview2_3?view=webview2-1.0.790-prerelease&preserve-view=true#trysuspend "TrySuspend - interface ICoreWebview2_3 | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2acceleratorkeypressedeventargsViewWebview209430GetHandled]: /microsoft-edge/webview2/reference/win32/icorewebview2acceleratorkeypressedeventargs?view=webview2-0.9.430&preserve-view=true#get_handled "get_Handled - interface ICoreWebView2AcceleratorKeyPressedEventArgs | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2compositioncontrollerViewWebview210790Prerelease]: /microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller?view=webview2-1.0.790-prerelease&preserve-view=true "interface ICoreWebView2CompositionController | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2controller2ViewWebview210790PrereleaseGetDefaultbackgroundcolor]: /microsoft-edge/webview2/reference/win32/icorewebview2controller2?view=webview2-1.0.790-prerelease&preserve-view=true#get_defaultbackgroundcolor "get_DefaultBackgroundColor - interface ICoreWebView2Controller2 | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2cookiemanagerViewWebview210721Prerelease]: /microsoft-edge/webview2/reference/win32/icorewebview2cookiemanager?view=webview2-1.0.721-prerelease&preserve-view=true "ICoreWebView2CookieManager | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2devtoolsprotocoleventreceiverViewWebview209430]: /microsoft-edge/webview2/reference/win32/icorewebview2devtoolsprotocoleventreceiver?view=webview2-0.9.430&preserve-view=true "interface ICoreWebView2DevToolsProtocolEventReceiver | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2devtoolsprotocoleventreceiverViewWebview209430AddDevtoolsprotocoleventreceived]: /microsoft-edge/webview2/reference/win32/icorewebview2devtoolsprotocoleventreceiver?view=webview2-0.9.430&preserve-view=true#add_devtoolsprotocoleventreceived "add_DevToolsProtocolEventReceived - interface ICoreWebView2DevToolsProtocolEventReceiver | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2devtoolsprotocoleventreceiverViewWebview209430RemoveDevtoolsprotocoleventreceived]: /microsoft-edge/webview2/reference/win32/icorewebview2devtoolsprotocoleventreceiver?view=webview2-0.9.430&preserve-view=true#remove_devtoolsprotocoleventreceived "remove_DevToolsProtocolEventReceived - interface ICoreWebView2DevToolsProtocolEventReceiver | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2environment2ViewWebview210721PrereleaseCreatewebresourcerequest]: /microsoft-edge/webview2/reference/win32/icorewebview2environment2?view=webview2-1.0.721-prerelease&preserve-view=true#createwebresourcerequest "CreateWebResourceRequest - interface ICoreWebView2Environment | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2environmentoptionsViewWebview209488]: /microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions?view=webview2-0.9.488&preserve-view=true "interface ICoreWebView2EnvironmentOptions | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2environmentoptionsViewWebview209622GetAllowsinglesignonusingosprimaryaccount]: /microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions?view=webview2-0.9.622&preserve-view=true#get_allowsinglesignonusingosprimaryaccount "get_AllowSingleSignOnUsingOSPrimaryAccount - interface ICoreWebView2EnvironmentOptions | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2environmentoptionsViewWebview209622PutAdditionalbrowserarguments]: /microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions?view=webview2-0.9.622&preserve-view=true#put_additionalbrowserarguments "put_AdditionalBrowserArguments - interface ICoreWebView2EnvironmentOptions | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2environmentViewWebview209430GetBrowserversioninfo]: /microsoft-edge/webview2/reference/win32/icorewebview2environment?view=webview2-0.9.430&preserve-view=true#get_browserversioninfo "get_BrowserVersionInfo - interface ICoreWebView2Environment | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2environmentViewWebview209488GetBrowserversionstring]: /microsoft-edge/webview2/reference/win32/icorewebview2environment?view=webview2-0.9.488&preserve-view=true#get_browserversionstring "get_BrowserVersionString - interface ICoreWebView2Environment | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2experimentalcompositioncontroller2ViewWebview210674PrereleaseGetSystemcursorid]: /microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller2?view=webview2-1.0.674-prerelease&preserve-view=true#get_systemcursorid "interface ICoreWebView2ExperimentalWebResourceResponseView | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2experimentalcompositioncontroller3ViewWebview210721Prerelease]: /microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller3?view=webview2-1.0.721-prerelease&preserve-view=true "interface ICoreWebView2ExperimentalCompositionController3 | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2experimentalcompositioncontrollerViewWebview209488Prerelease]: /microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller?view=webview2-0.9.488-prerelease&preserve-view=true "interface ICoreWebView2ExperimentalCompositionController | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2experimentalcontrollerViewWebview210721PrereleaseAddRasterizationscalechanged]: /microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontroller?view=webview2-1.0.721-prerelease&preserve-view=true#add_rasterizationscalechanged "add_RasterizationScaleChanged - interface ICoreWebView2ExperimentalController | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2experimentalcontrollerViewWebview210721PrereleaseGetBoundsmode]: /microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontroller?view=webview2-1.0.721-prerelease&preserve-view=true#get_boundsmode "get_BoundsMode - interface ICoreWebView2ExperimentalController | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2experimentalcontrollerViewWebview210721PrereleaseGetRasterizationscale]: /microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontroller?view=webview2-1.0.721-prerelease&preserve-view=true#get_rasterizationscale "get_RasterizationScale - interface ICoreWebView2ExperimentalController | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2experimentalcontrollerViewWebview210721PrereleaseGetShoulddetectmonitorscalechanges]: /microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontroller?view=webview2-1.0.721-prerelease&preserve-view=true#get_shoulddetectmonitorscalechanges "get_ShouldDetectMonitorScaleChanges - interface ICoreWebView2ExperimentalController | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2experimentalcursorchangedeventhandlerViewWebview209488Prerelease]: /microsoft-edge/webview2/reference/win32/icorewebview2experimentalcursorchangedeventhandler?view=webview2-0.9.488-prerelease&preserve-view=true "interface ICoreWebView2ExperimentalCursorChangedEventHandler | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2experimentalenvironmentoptionsViewWebview209538PrereleaseGetIssinglesignonusingosprimaryaccountenabled]: /microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironmentoptions?view=webview2-0.9.538-prerelease&preserve-view=true#get_issinglesignonusingosprimaryaccountenabled "get_IsSingleSignOnUsingOSPrimaryAccountEnabled - interface ICoreWebView2ExperimentalEnvironmentOptions | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2experimentalnewwindowrequestedeventargsViewWebview209538PrereleaseGetWindowfeatures]: /microsoft-edge/webview2/reference/win32/icorewebview2experimentalnewwindowrequestedeventargs?view=webview2-0.9.538-prerelease&preserve-view=true#get_windowfeatures "get_WindowFeatures - interface ICoreWebView2ExperimentalNewWindowRequestedEventArgs | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2experimentalpointerinfoViewWebview209488Prerelease]: /microsoft-edge/webview2/reference/win32/icorewebview2experimentalpointerinfo?view=webview2-0.9.488-prerelease&preserve-view=true "interface ICoreWebView2ExperimentalPointerInfo | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2experimentalsettingsViewWebview210790PrereleaseGetUseragent]: /microsoft-edge/webview2/reference/win32/icorewebview2experimentalsettings?view=webview2-1.0.790-prerelease&preserve-view=true#get_useragent "get_UserAgent - interface ICoreWebView2ExperimentalSettings | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2experimentalViewWebview209538PrereleaseAddWebresourceresponsereceived]: /microsoft-edge/webview2/reference/win32/icorewebview2experimental?view=webview2-0.9.538-prerelease&preserve-view=true#add_webresourceresponsereceived "add_WebResourceResponseReceived - interface ICoreWebView2Experimental | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2experimentalViewWebview210674PrereleaseAddDomcontentloaded]: /microsoft-edge/webview2/reference/win32/icorewebview2experimental?view=webview2-1.0.674-prerelease&preserve-view=true#add_domcontentloaded "add_DOMContentLoaded - interface ICoreWebView2Experimental | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2experimentalViewWebview210674PrereleaseAddWebresourceresponsereceived]: /microsoft-edge/webview2/reference/win32/icorewebview2experimental?view=webview2-1.0.674-prerelease&preserve-view=true#add_webresourceresponsereceived "add_WebResourceResponseReceived - interface ICoreWebView2Experimental | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2experimentalViewWebview210674PrereleaseGetCookiemanager]: /microsoft-edge/webview2/reference/win32/icorewebview2experimental?view=webview2-1.0.674-prerelease&preserve-view=true#get_cookiemanager "get_CookieManager - interface ICoreWebView2Experimental | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2experimentalViewWebview210674PrereleaseGetEnvironment]: /microsoft-edge/webview2/reference/win32/icorewebview2experimental?view=webview2-1.0.674-prerelease&preserve-view=true#get_environment "get_Environment - interface ICoreWebView2Experimental | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2experimentalViewWebview210674PrereleaseNavigatewithwebresourcerequest]: /microsoft-edge/webview2/reference/win32/icorewebview2experimental?view=webview2-1.0.674-prerelease&preserve-view=true#navigatewithwebresourcerequest "NavigateWithWebResourceRequest - interface ICoreWebView2Experimental | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2experimentalwebresourceresponsereceivedeventargsViewWebview209628PrereleasePopulateresponsecontent]: /microsoft-edge/webview2/reference/win32/icorewebview2experimentalwebresourceresponsereceivedeventargs?view=webview2-0.9.628-prerelease&preserve-view=true#populateresponsecontent "PopulateResponseContent - interface ICoreWebView2ExperimentalWebResourceResponseReceivedEventArgs | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2experimentalwebresourceresponseviewViewWebview210674Prerelease]: /microsoft-edge/webview2/reference/win32/icorewebview2experimentalwebresourceresponseview?view=webview2-1.0.674-prerelease&preserve-view=true "interface ICoreWebView2ExperimentalWebResourceResponseView | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2experimentalwebresourceresponseviewViewWebview210674PrereleaseGetcontent]: /microsoft-edge/webview2/reference/win32/icorewebview2experimentalwebresourceresponseview?view=webview2-1.0.674-prerelease&preserve-view=true#getcontent "GetContent - interface ICoreWebView2ExperimentalWebResourceResponseView | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2experimentalwindowfeaturesViewWebview209538Prerelease]: /microsoft-edge/webview2/reference/win32/icorewebview2experimentalwindowfeatures?view=webview2-0.9.538-prerelease&preserve-view=true "interface ICoreWebView2ExperimentalWindowFeatures | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2hostViewWebview209430]: /microsoft-edge/webview2/reference/win32/icorewebview2host?view=webview2-0.9.430&preserve-view=true "interface ICoreWebView2Host | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2hostViewWebview209430GetZoomfactor]: /microsoft-edge/webview2/reference/win32/icorewebview2host?view=webview2-0.9.430&preserve-view=true#get_zoomfactor "get_ZoomFactor - interface ICoreWebView2Host | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2hostViewWebview209430Notifyparentwindowpositionchanged]: /microsoft-edge/webview2/reference/win32/icorewebview2host?view=webview2-0.9.430&preserve-view=true#notifyparentwindowpositionchanged "NotifyParentWindowPositionChanged - interface ICoreWebView2Host | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2hostViewWebview209430PutZoomfactor]: /microsoft-edge/webview2/reference/win32/icorewebview2host?view=webview2-0.9.430&preserve-view=true#put_zoomfactor "put_ZoomFactor - interface ICoreWebView2Host | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2hostViewWebview209430Setboundsandzoomfactor]: /microsoft-edge/webview2/reference/win32/icorewebview2host?view=webview2-0.9.430&preserve-view=true#setboundsandzoomfactor "SetBoundsAndZoomFactor - interface ICoreWebView2Host | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2httpheaderscollectioniteratorViewWebview209430GetHascurrentheader]: /microsoft-edge/webview2/reference/win32/icorewebview2httpheaderscollectioniterator?view=webview2-0.9.430&preserve-view=true#get_hascurrentheader "get_HasCurrentHeader - interface ICoreWebView2HttpHeadersCollectionIterator | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2httprequestheadersViewWebview209430Getheaders]: /microsoft-edge/webview2/reference/win32/icorewebview2httprequestheaders?view=webview2-0.9.430&preserve-view=true#getheaders "GetHeaders - interface ICoreWebView2HttpRequestHeaders | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2httpresponseheadersViewWebview209430Getheader]: /microsoft-edge/webview2/reference/win32/icorewebview2httpresponseheaders?view=webview2-0.9.430&preserve-view=true#getheader "GetHeader - interface ICoreWebView2HttpResponseHeaders | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2newwindowrequestedeventargsViewWebview209538GetIsuserinitiated]: /microsoft-edge/webview2/reference/win32/icorewebview2newwindowrequestedeventargs?view=webview2-0.9.538&preserve-view=true#get_isuserinitiated "get_IsUserInitiated interface ICoreWebView2NewWindowRequestedEventArgs | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2newwindowrequestedeventargsViewWebview209622GetWindowfeatures]: /microsoft-edge/webview2/reference/win32/icorewebview2newwindowrequestedeventargs?view=webview2-0.9.622&preserve-view=true#get_windowfeatures "get_WindowFeatures - interface ICoreWebView2NewWindowRequestedEventArgs | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2settingsViewWebview209430GetAreremoteobjectsallowed]: /microsoft-edge/webview2/reference/win32/icorewebview2settings?view=webview2-0.9.430&preserve-view=true#get_areremoteobjectsallowed "get_AreRemoteObjectsAllowed - interface ICoreWebView2Settings | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2settingsViewWebview209430GetIszoomcontrolenabled]: /microsoft-edge/webview2/reference/win32/icorewebview2settings?view=webview2-0.9.430&preserve-view=true#get_iszoomcontrolenabled "get_IsZoomControlEnabled - interface ICoreWebView2Settings | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2settingsViewWebview209488GetAreremoteobjectsallowed]: /microsoft-edge/webview2/reference/win32/icorewebview2settings?view=webview2-0.9.488&preserve-view=true#get_areremoteobjectsallowed "get_AreRemoteObjectsAllowed - interface ICoreWebView2Settings | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2settingsViewWebview209488GetIsbuiltinerrorpageenabled]: /microsoft-edge/webview2/reference/win32/icorewebview2settings?view=webview2-0.9.488&preserve-view=true#get_isbuiltinerrorpageenabled "get_IsBuiltInErrorPageEnabled - interface ICoreWebView2Settings | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2settingsViewWebview209538GetArehostobjectsallowed]: /microsoft-edge/webview2/reference/win32/icorewebview2settings?view=webview2-0.9.538&preserve-view=true#get_arehostobjectsallowed "get_AreHostObjectsAllowed - interface ICoreWebView2Settings | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2ViewWebview209430]: /microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-0.9.430&preserve-view=true "interface ICoreWebView2 | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2ViewWebview209430AddContentloading]: /microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-0.9.430&preserve-view=true#add_contentloading "add_ContentLoading - interface ICoreWebView2 | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2ViewWebview209430AddHistorychanged]: /microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-0.9.430&preserve-view=true#add_historychanged "add_HistoryChanged - interface ICoreWebView2 | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2ViewWebview209430Addremoteobject]: /microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-0.9.430&preserve-view=true#addremoteobject "AddRemoteObject - interface ICoreWebView2 | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2ViewWebview209430AddSourcechanged]: /microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-0.9.430&preserve-view=true#add_sourcechanged "add_SourceChanged - interface ICoreWebView2 | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2ViewWebview209430AddWindowcloserequested]: /microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-0.9.430&preserve-view=true#add_windowcloserequested "add_WindowCloseRequested - interface ICoreWebView2 | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2ViewWebview209430CoreWebview2ScriptDialogKind]: /microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-0.9.430&preserve-view=true#core_webview2_script_dialog_kind "CORE_WEBVIEW2_SCRIPT_DIALOG_KIND - interface ICoreWebView2 | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2ViewWebview209430Removeremoteobject]: /microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-0.9.430&preserve-view=true#removeremoteobject "RemoveRemoteObject - interface ICoreWebView2 | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2ViewWebview209488AddFramenavigationcompleted]: /microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-0.9.488&preserve-view=true#add_framenavigationcompleted "add_FrameNavigationCompleted - interface ICoreWebView2 | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2ViewWebview209488Addhostobjecttoscript]: /microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-0.9.488&preserve-view=true#addhostobjecttoscript "AddHostObjectToScript - interface ICoreWebView2 | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2ViewWebview209488AddNewwindowrequested]: /microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-0.9.488&preserve-view=true#add_newwindowrequested "add_NewWindowRequested - interface ICoreWebView2 | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2ViewWebview209488Removehostobjectfromscript]: /microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-0.9.488&preserve-view=true#removehostobjectfromscript "RemoveHostObjectFromScript - interface ICoreWebView2 | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2ViewWebview209538ddhostobjecttoscript]: /microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-0.9.538&preserve-view=true#addhostobjecttoscript "AddHostObjectToScript - interface ICoreWebView2 | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2webmessagereceivedeventargsViewWebview209430Trygetwebmessageasstring]: /microsoft-edge/webview2/reference/win32/icorewebview2webmessagereceivedeventargs?view=webview2-0.9.430&preserve-view=true#trygetwebmessageasstring "TryGetWebMessageAsString - interface ICoreWebView2WebMessageReceivedEventArgs | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2webresourceresponseviewgetcontentcompletedhandlerViewWebview210790PrereleaseInvoke]: /microsoft-edge/webview2/reference/win32/icorewebview2webresourceresponseviewgetcontentcompletedhandler?view=webview2-1.0.790-prerelease&preserve-view=true#invoke "Invoke - interface ICoreWebView2WebResourceResponseViewGetContentCompletedHandler | Microsoft Docs" 
[Webview2ReferenceWin32Icorewebview2windowfeaturesViewWebview209622]: /microsoft-edge/webview2/reference/win32/icorewebview2windowfeatures?view=webview2-0.9.622&preserve-view=true "interface ICoreWebView2WindowFeatures | Microsoft Docs" 
[Webview2ReferenceWin32Iwebview2acceleratorkeypressedeventargsViewWebview208355Handle]: /microsoft-edge/webview2/reference/win32/iwebview2acceleratorkeypressedeventargs?view=webview2-0.8.355&preserve-view=true#handle "Handle - interface IWebView2AcceleratorKeyPressedEventArgs | Microsoft Docs" 
[Webview2ReferenceWin32Iwebview2containsfullscreenelementchangedeventhandlerViewWebview208355]: /microsoft-edge/webview2/reference/win32/iwebview2containsfullscreenelementchangedeventhandler?view=webview2-0.8.355&preserve-view=true "interface IWebView2ContainsFullScreenElementChangedEventHandler | Microsoft Docs" 
[Webview2ReferenceWin32Iwebview2settings2ViewWebview208355PutAredefaultcontextmenusenabled]: /microsoft-edge/webview2/reference/win32/iwebview2settings2?view=webview2-0.8.355&preserve-view=true#put_aredefaultcontextmenusenabled "put_AreDefaultContextMenusEnabled - interface IWebView2Settings2 | Microsoft Docs" 
[Webview2ReferenceWin32Iwebview2settingsViewWebview208355GetIsfullscreenallowedDeprecated]: /microsoft-edge/webview2/reference/win32/iwebview2settings?view=webview2-0.8.355&preserve-view=true#get_isfullscreenallowed_deprecated "get_IsFullscreenAllowed_deprecated - interface IWebView2Settings | Microsoft Docs" 
[Webview2ReferenceWin32Iwebview2webmessagereceivedeventargsViewWebview208355GetWebmessageasstring]: /microsoft-edge/webview2/reference/win32/iwebview2webmessagereceivedeventargs?view=webview2-0.8.355&preserve-view=true#get_webmessageasstring "get_WebMessageAsString - interface IWebView2WebMessageReceivedEventArgs | Microsoft Docs" 
[Webview2ReferenceWin32Iwebview2webview4ViewWebview208355AddAcceleratorkeypressed]: /microsoft-edge/webview2/reference/win32/iwebview2webview4?view=webview2-0.8.355&preserve-view=true#add_acceleratorkeypressed "add_AcceleratorKeyPressed - interface IWebView2WebView4 | Microsoft Docs" 
[Webview2ReferenceWin32Iwebview2webview4ViewWebview208355Addremoteobject]: /microsoft-edge/webview2/reference/win32/iwebview2webview4?view=webview2-0.8.355&preserve-view=true#addremoteobject "AddRemoteObject - interface IWebView2WebView4 | Microsoft Docs" 
[Webview2ReferenceWin32Iwebview2webview5ViewWebview208355AddWebresourcerequested]: /microsoft-edge/webview2/reference/win32/iwebview2webview5?view=webview2-0.8.355&preserve-view=true#add_webresourcerequested "add_WebResourceRequested - interface IWebView2WebView5 | Microsoft Docs" 
[Webview2ReferenceWin32Iwebview2webview5ViewWebview208355Addwebresourcerequestedfilter]: /microsoft-edge/webview2/reference/win32/iwebview2webview5?view=webview2-0.8.355&preserve-view=true#addwebresourcerequestedfilter "AddWebResourceRequestedFilter - interface IWebView2WebView5 | Microsoft Docs" 
[Webview2ReferenceWin32Iwebview2webview5ViewWebview208355GetContainsfullscreenelement]: /microsoft-edge/webview2/reference/win32/iwebview2webview5?view=webview2-0.8.355&preserve-view=true#get_containsfullscreenelement "get_ContainsFullScreenElement - interface IWebView2WebView5 | Microsoft Docs" 
[Webview2ReferenceWin32Iwebview2webview5ViewWebview208355Removewebresourcerequestedfilter]: /microsoft-edge/webview2/reference/win32/iwebview2webview5?view=webview2-0.8.355&preserve-view=true#removewebresourcerequestedfilter "RemoveWebResourceRequestedFilter - interface IWebView2WebView5 | Microsoft Docs" 
[Webview2ReferenceWin32Iwebview2webviewViewWebview208355AddDocumentstatechanged]: /microsoft-edge/webview2/reference/win32/iwebview2webview?view=webview2-0.8.355&preserve-view=true#add_documentstatechanged "add_DocumentStateChanged - interface IWebView2WebView | Microsoft Docs" 
[Webview2ReferenceWin32Webview2IdlViewWebview208355Createwebview2environmentwithdetails]: /microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-0.8.355&preserve-view=true#createwebview2environmentwithdetails "CreateWebView2EnvironmentWithDetails - Globals | Microsoft Docs" 
[Webview2ReferenceWin32Webview2IdlViewWebview209430Getcorewebview2browserversioninfo]: /microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-0.9.430&preserve-view=true#getcorewebview2browserversioninfo "GetCoreWebView2BrowserVersionInfo - Globals | Microsoft Docs" 
[Webview2ReferenceWin32Webview2IdlViewWebview209488Createcorewebview2environmentwithdetails]: /microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-0.9.488&preserve-view=true#createcorewebview2environmentwithdetails "CreateCoreWebView2EnvironmentWithDetails - Globals | Microsoft Docs" 
[Webview2ReferenceWin32Webview2IdlViewWebview209488Createcorewebview2environmentwithoptions]: /microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-0.9.488&preserve-view=true#createcorewebview2environmentwithoptions "CreateCoreWebView2EnvironmentWithOptions - Globals | Microsoft Docs" 
[Webview2ReferenceWin32Webview2IdlViewWebview209488Getavailablecorewebview2browserversionstring]: /microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-0.9.488&preserve-view=true#getavailablecorewebview2browserversionstring "GetAvailableCoreWebView2BrowserVersionString - Globals | Microsoft Docs" 
[Webview2ReferenceWin32Webview2IdlViewWebview209538Createcorewebview2environmentwithoptions]: /microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-0.9.538&preserve-view=true#createcorewebview2environmentwithoptions "CreateCoreWebView2EnvironmentWithOptions - Globals | Microsoft Docs" 
[Webview2ReferenceWin32Webview2IdlViewWebview209622Createcorewebview2environmentwithoptions]: /microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-0.9.622&preserve-view=true#createcorewebview2environmentwithoptions "CreateCoreWebView2EnvironmentWithOptions - Globals | Microsoft Edge" 

[DeployedgeMicrosoftEdgePolicies]: /deployedge/microsoft-edge-policies "Microsoft Edge - Policies | Microsoft Docs"  
[DeployedgeMicrosoftEdgeWebviewPolicies]: /deployedge/microsoft-edge-webview-policies "Microsoft Edge WebView2 - Policies | Microsoft Docs"  

[DotnetApiMicrosoftWebWebview2Core]: /dotnet/api/microsoft.web.webview2.core "Microsoft.Web.WebView2.Core Namespace | Microsoft Docs"  
[DotnetApiMicrosoftWebWebview2CoreCorewebview2]: /dotnet/api/microsoft.web.webview2.core.corewebview2 "CoreWebView2 Class (Microsoft.Web.WebView2.Core) | Microsoft Docs"  
[DotnetApiMicrosoftWebWebview2CoreCorewebview2environment]: /dotnet/api/microsoft.web.webview2.core.corewebview2environment "CoreWebView2Environment Class (Microsoft.Web.WebView2.Core) | Microsoft Docs"  
[DotnetApiMicrosoftWebWebview2CoreCorewebview2environmentComparebrowserversions]: /dotnet/api/microsoft.web.webview2.core.corewebview2environment.comparebrowserversions "CoreWebView2Environment.CompareBrowserVersions(String, String) Method (Microsoft.Web.WebView2.Core) | Microsoft Docs"  
[DotnetApiMicrosoftWebWebview2CoreCorewebview2environmentGetavailablebrowserversionstring]: /dotnet/api/microsoft.web.webview2.core.corewebview2environment.getavailablebrowserversionstring "CoreWebView2Environment.GetAvailableBrowserVersionString(String) Method (Microsoft.Web.WebView2.Core) | Microsoft Docs"  
[DotnetApiMicrosoftWebWebview2CoreCorewebview2httprequestheaders]: /dotnet/api/microsoft.web.webview2.core.corewebview2httprequestheaders "CoreWebView2HttpRequestHeaders Class (Microsoft.Web.WebView2.Core) | Microsoft Docs"  
[DotnetApiMicrosoftWebWebview2CoreCorewebview2httpresponseheaders]: /dotnet/api/microsoft.web.webview2.core.corewebview2httpresponseheaders "CoreWebView2HttpResponseHeaders Class (Microsoft.Web.WebView2.Core) | Microsoft Docs"  
[DotnetApiMicrosoftWebWebview2CoreCorewebview2Newwindowrequested]: /dotnet/api/microsoft.web.webview2.core.corewebview2.newwindowrequested "CoreWebView2.NewWindowRequested Event (Microsoft.Web.WebView2.Core) | Microsoft Docs"  
[DotnetApiMicrosoftWebWebview2CoreCorewebview2Permissionrequested]: /dotnet/api/microsoft.web.webview2.core.corewebview2.permissionrequested "CoreWebView2.PermissionRequested Event (Microsoft.Web.WebView2.Core) | Microsoft Docs"  
[DotnetApiMicrosoftWebWebview2CoreCorewebview2Scriptdialogopening]: /dotnet/api/microsoft.web.webview2.core.corewebview2.scriptdialogopening "CoreWebView2.ScriptDialogOpening Event (Microsoft.Web.WebView2.Core) | Microsoft Docs"  
[DotnetApiMicrosoftWebWebview2CoreCorewebview2Webresourcerequested]: /dotnet/api/microsoft.web.webview2.core.corewebview2.webresourcerequested "CoreWebView2.WebResourceRequested Event (Microsoft.Web.WebView2.Core) | Microsoft Docs"  
[DotnetApiMicrosoftWebWebview2Corewebview2initializationcompletedeventargs]: /dotnet/api/microsoft.web.webview2.core.corewebview2initializationcompletedeventargs "CoreWebView2InitializationCompletedEventArgs Class | Microsoft Docs"  
[DotnetApiMicrosoftWebWebview2CoreWebview2runtimenotfoundexception]: /dotnet/api/microsoft.web.webview2.core.webview2runtimenotfoundexception "CoreWebView2.WebView2RuntimeNotFound (Microsoft.Web.WebView2.Core) | Microsoft Docs"  
[DotnetApiMicrosoftWebWebview2Winforms]: /dotnet/api/microsoft.web.webview2.winforms "Microsoft.Web.WebView2.WinForms Namespace | Microsoft Docs"  
[DotnetApiMicrosoftWebWebview2WinformsCorewebview2creationproperties]: /dotnet/api/microsoft.web.webview2.winforms.corewebview2creationproperties "CoreWebView2CreationProperties Class (Microsoft.Web.WebView2.Winforms) | Microsoft Docs"  
[DotnetApiMicrosoftWebWebview2WinformsWebview2Source]: /dotnet/api/microsoft.web.webview2.winforms.webview2.source "Webview2.Source Class (Microsoft.Web.WebView2.Winforms) | Microsoft Docs"  
[DotnetApiMicrosoftWebWebview2Wpf]: /dotnet/api/microsoft.web.webview2.wpf "Microsoft.Web.WebView2.Wpf Namespace | Microsoft Docs"  
[DotnetApiMicrosoftWebWebview2WpfWebview2Acceleratorkeypressed]: /dotnet/api/microsoft.web.webview2.wpf.webview2.acceleratorkeypressed "microsoft.web.webview2.wpf.webview2.acceleratorkeypressed | Microsoft Docs"  
[DotnetApiMicrosoftWebWebview2WpfWebview2Buildwindowcore]: /dotnet/api/microsoft.web.webview2.wpf.webview2.buildwindowcore "WebView2.BuildWindowCore(HandleRef) Method (Microsoft.Web.WebView2.Wpf) | Microsoft Docs"  
[DotnetApiMicrosoftWebWebview2WpfWebview2Destroywindowcore]: /dotnet/api/microsoft.web.webview2.wpf.webview2.destroywindowcore "WebView2.DestroyWindowCore(HandleRef) Method (Microsoft.Web.WebView2.Wpf) | Microsoft Docs"  
[DotnetApiSystemComponentmodelCancelEventargs]: /dotnet/api/system.componentmodel.canceleventargs "CancelEventArgs Class (System.ComponentModel) | Microsoft Docs"  
[DotnetApiSystemEventargs]: /dotnet/api/system.eventargs "EventArgs Class (System) | Microsoft Docs"  

[DotnetStandardAssemblyStrongNamed]: /dotnet/standard/assembly/strong-named "Strong-named assemblies | Microsoft Docs"  

[WindowsSecurityThreatProtectionMicrosoftDefenderApplicationGuardWindows10]: /windows/security/threat-protection/microsoft-defender-application-guard/md-app-guard-overview "Microsoft Defender Application Guard (Windows 10) - Windows security | Microsoft Docs"  
[WindowsWin32ApiWinuserSetWindowDisplayAffinity]: /windows/win32/api/winuser/nf-winuser-setwindowdisplayaffinity "SetWindowDisplayAffinity function (winuser.h) - Win32 apps | Microsoft Docs"  

[GithubMicrosoftedgeWebview2AnnouncementIssue2]: https://github.com/MicrosoftEdge/WebView2Announcement/issues/2 "Announcement repo for MicrosoftEdge/WebViewAnnouncement Issue 2"  

[GithubMicrosoftedgeWebview2samplesApisample]: https://github.com/MicrosoftEdge/WebView2Samples/tree/master/SampleApps/WebView2APISample "WebView2 API Sample - MicrosoftEdge/WebView2Samples | GitHub"  
[GithubMicrosoftedgeWebview2samplesMain]: https://github.com/MicrosoftEdge/WebView2Samples "WebView2 Samples - MicrosoftEdge/WebView2Samples | GitHub"  
[GithubMicrosoftedgeWebview2samplesWebview2wpfbrowser]: https://github.com/MicrosoftEdge/WebView2Samples/tree/master/SampleApps/WebView2WpfBrowser "WebView2WpfBrowser - MicrosoftEdge/WebView2Samples | GitHub"  
[GithubMicrosoftedgeWebview2samplesPr17]: https://github.com/MicrosoftEdge/WebView2Samples/pull/17 "Move project to use latest WebView2 SDK 0.9.430 - MicrosoftEdge/WebView2Samples | GitHub"  

[GithubMicrosoftedgeWebviewfeedbackIssue1]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/1 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 1"  
[GithubMicrosoftedgeWebviewfeedbackIssue12]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/12 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 12"  
[GithubMicrosoftedgeWebviewfeedbackIssue13]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/13 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 13"  
[GithubMicrosoftedgeWebviewfeedbackIssue14]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/14 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 14"  
[GithubMicrosoftedgeWebviewfeedbackIssue16]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/16 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 16"  
[GithubMicrosoftedgeWebviewfeedbackIssue17]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/17 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 17"  
[GithubMicrosoftedgeWebviewfeedbackIssue18]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/18 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 18"  
[GithubMicrosoftedgeWebviewfeedbackIssue19]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/19 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 19"  
[GithubMicrosoftedgeWebviewfeedbackIssue22]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/22 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 22"  
[GithubMicrosoftedgeWebviewfeedbackIssue27]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/27 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 27"  
[GithubMicrosoftedgeWebviewfeedbackIssue28]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/28 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 28"  
[GithubMicrosoftedgeWebviewfeedbackIssue30]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/30 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 30"  
[GithubMicrosoftedgeWebviewfeedbackIssue32]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/32 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 32"  
[GithubMicrosoftedgeWebviewfeedbackIssue36]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/36 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 36"  
[GithubMicrosoftedgeWebviewfeedbackIssue37]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/37 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 37"  
[GithubMicrosoftedgeWebviewfeedbackIssue57]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/57 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 57"  
[GithubMicrosoftedgeWebviewfeedbackIssue58]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/58 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 58"  
[GithubMicrosoftedgeWebviewfeedbackIssue70]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/70 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 70"  
[GithubMicrosoftedgeWebviewfeedbackIssue74]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/74 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 74"  
[GithubMicrosoftedgeWebviewfeedbackIssue95]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/95 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 95"  
[GithubMicrosoftedgeWebviewfeedbackIssue108]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/108 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 108"  
[GithubMicrosoftedgeWebviewfeedbackIssue113]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/113 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 113"  
[GithubMicrosoftedgeWebviewfeedbackIssue119]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/119 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 119"  
[GithubMicrosoftedgeWebviewfeedbackIssue122]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/122 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 122"  
[GithubMicrosoftedgeWebviewfeedbackIssue131]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/131 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 131"  
[GithubMicrosoftedgeWebviewfeedbackIssue148]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/148 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 148"  
[GithubMicrosoftedgeWebviewfeedbackIssue161]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/161 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 161"  
[GithubMicrosoftedgeWebviewfeedbackIssue168]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/168 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 168"  
[GithubMicrosoftedgeWebviewfeedbackIssue177]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/177 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 177"  
[GithubMicrosoftedgeWebviewfeedbackIssue179]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/179 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 179"  
[GithubMicrosoftedgeWebviewfeedbackIssue181]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/181 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 181"  
[GithubMicrosoftedgeWebviewfeedbackIssue183]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/183 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 183"  
[GithubMicrosoftedgeWebviewfeedbackIssue185]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/185 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 185"  
[GithubMicrosoftedgeWebviewfeedbackIssue196]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/196 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 196"  
[GithubMicrosoftedgeWebviewfeedbackIssue204]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/204 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 204"  
[GithubMicrosoftedgeWebviewfeedbackIssue205]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/205 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 205"  
[GithubMicrosoftedgeWebviewfeedbackIssue210]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/210 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 210"  
[GithubMicrosoftedgeWebviewfeedbackIssue212]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/212 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 212"  
[GithubMicrosoftedgeWebviewfeedbackIssue219]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/219 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 219"  
[GithubMicrosoftedgeWebviewfeedbackIssue228]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/228 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 228"  
[GithubMicrosoftedgeWebviewfeedbackIssue235]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/235 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 235"  
[GithubMicrosoftedgeWebviewfeedbackIssue250]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/250 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 250"  
[GithubMicrosoftedgeWebviewfeedbackIssue275]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/275 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 275"  
[GithubMicrosoftedgeWebviewfeedbackIssue288]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/288 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 288"  
[GithubMicrosoftedgeWebviewfeedbackIssue293]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/293 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 293"  
[GithubMicrosoftedgeWebviewfeedbackIssue318]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/318 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 318"  
[GithubMicrosoftedgeWebviewfeedbackIssue335]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/335 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 335"  
[GithubMicrosoftedgeWebviewfeedbackIssue371]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/371 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 371"  
[GithubMicrosoftedgeWebviewfeedbackIssue382]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/382 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 382"  
[GithubMicrosoftedgeWebviewfeedbackIssue399]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/399 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 399"  
[GithubMicrosoftedgeWebviewfeedbackIssue400]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/400 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 400"  
[GithubMicrosoftedgeWebviewfeedbackIssue409]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/409 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 409"  
[GithubMicrosoftedgeWebviewfeedbackIssue414]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/414 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 414"  
[GithubMicrosoftedgeWebviewfeedbackIssue431]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/431 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 431"  
[GithubMicrosoftedgeWebviewfeedbackIssue432]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/432 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 432"  
[GithubMicrosoftedgeWebviewfeedbackIssue442]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/442 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 442"  
[GithubMicrosoftedgeWebviewfeedbackIssue461]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/461 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 461"  
[GithubMicrosoftedgeWebviewfeedbackIssue506]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/506 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 506"  
[GithubMicrosoftedgeWebviewfeedbackIssue525]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/525 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 525"  
[GithubMicrosoftedgeWebviewfeedbackIssue549]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/549 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 549"  
[GithubMicrosoftedgeWebviewfeedbackIssue560]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/560 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 560"  
[GithubMicrosoftedgeWebviewfeedbackIssue568]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/568 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 568"  
[GithubMicrosoftedgeWebviewfeedbackIssue585]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/585 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 585"  
[GithubMicrosoftedgeWebviewfeedbackIssue604]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/604 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 604"  
[GithubMicrosoftedgeWebviewfeedbackIssue605]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/605 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 605"  
[GithubMicrosoftedgeWebviewfeedbackIssue611]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/611 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 611"  
[GithubMicrosoftedgeWebviewfeedbackIssue669]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/669 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 669"  
[GithubMicrosoftedgeWebviewfeedbackIssue691]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/691 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 691"  
[GithubMicrosoftedgeWebviewfeedbackIssue816]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/816 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 816"  
[GithubMicrosoftedgeWebviewfeedbackIssue851]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/851 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 851"  
[GithubMicrosoftedgeWebviewfeedbackIssue875]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/875 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 875"  
[GithubMicrosoftedgeWebviewfeedbackIssue878]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/878 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 878"  
[GithubMicrosoftedgeWebviewfeedbackIssue1120]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/1120 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 1120"
[GithubMicrosoftedgeWebviewfeedbackIssue940]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/940 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 940"
[GithubMicrosoftedgeWebviewfeedbackIssue841]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/841 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 841"
[GithubMicrosoftedgeWebviewfeedbackIssue210]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/210 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 210"
[GithubMicrosoftedgeWebviewfeedbackIssue338]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/338 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 338"
[GithubMicrosoftedgeWebviewfeedbackIssue589]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/589 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 589"
[GithubMicrosoftedgeWebviewfeedbackIssue933]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/933 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 933"
[GithubMicrosoftedgeWebviewfeedbackIssue946]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/946 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 946"
[GithubMicrosoftedgeWebviewfeedbackIssue1011]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/1011 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 1011"
[GithubMicrosoftedgeWebviewfeedbackIssue1050]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/1050 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 1050"
[GithubMicrosoftedgeWebviewfeedbackIssue996]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/996 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 996"
[GithubMicrosoftedgeWebviewfeedbackIssue850]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/850 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 850"
[GithubMicrosoftedgeWebviewfeedbackIssue1077]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/1077 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 1077"
[GithubMicrosoftedgeWebviewfeedbackIssue1099]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/1099 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 1099"
[GithubMicrosoftedgeWebviewfeedbackIssue1183]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/1183 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 1183"
[GithubMicrosoftedgeWebviewfeedbackIssue1108]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/1108 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 1108"
[GithubMicrosoftedgeWebviewfeedbackIssue940]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/940 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 850"
[GithubMicrosoftedgeWebviewfeedbackIssue1079]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/1079 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 1079"
[GithubMicrosoftedgeWebviewfeedbackIssue1013]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/1013 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 1013"
[GithubMicrosoftedgeWebviewfeedbackIssue1282]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/1282 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 1282"
[GithubMicrosoftedgeWebviewfeedbackIssue828]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/828 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 828"
[GithubMicrosoftedgeWebviewfeedbackIssue619]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/619 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 619"
[GithubMicrosoftedgeWebviewfeedbackIssue608]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/608 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 608"
[GithubMicrosoftedgeWebviewfeedbackIssue1209]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/1209 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 1209"
[GithubMicrosoftedgeWebviewfeedbackIssue448]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/448 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 448"
[GithubMicrosoftedgeWebviewfeedbackIssue1123]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/1123 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 1123"

[MicrosoftDevblogDotnetAnnouncingGeneralAvailabilityForMicrosoftEdgeWebview2ForNetFixedDistributionMethod]: https://devblogs.microsoft.com/dotnet/announcing-general-availability-for-microsoft-edge-webview2-for-net-and-fixed-distribution-method "Announcing General Availability for Microsoft Edge WebView2 for .NET and Fixed Distribution Method | .NET Blog"  

[MicrosoftDeveloperMicrosoftEdgeWebView2]: https://developer.microsoft.com/microsoft-edge/webview2/ "Microsoft Edge WebView2 | Microsoft Edge Developer"  

[NuGetGallery]: https://www.nuget.org/packages/Microsoft.Web.WebView2 "NuGet Gallery | Microsoft.Web.WebView2"  
[NuGetGallery0.8.149]: https://www.nuget.org/packages/Microsoft.Web.WebView2/0.8.149 "NuGet Gallery | Microsoft.Web.WebView2 v0.8.149"  
[NuGetGallery0.8.190]: https://www.nuget.org/packages/Microsoft.Web.WebView2/0.8.190 "NuGet Gallery | Microsoft.Web.WebView2 v0.8.190"  
[NuGetGallery0.8.230]: https://www.nuget.org/packages/Microsoft.Web.WebView2/0.8.230 "NuGet Gallery | Microsoft.Web.WebView2 v0.8.230"  
[NuGetGallery0.8.270]: https://www.nuget.org/packages/Microsoft.Web.WebView2/0.8.270 "NuGet Gallery | Microsoft.Web.WebView2 v0.8.270"  
[NuGetGallery0.8.314]: https://www.nuget.org/packages/Microsoft.Web.WebView2/0.8.314 "NuGet Gallery | Microsoft.Web.WebView2 v0.8.314"  
[NuGetGallery0.8.355]: https://www.nuget.org/packages/Microsoft.Web.WebView2/0.8.355 "NuGet Gallery | Microsoft.Web.WebView2 v0.8.355"  
[NuGetGallery0.9.430]: https://www.nuget.org/packages/Microsoft.Web.WebView2/0.9.430 "NuGet Gallery | Microsoft.Web.WebView2 v0.9.430"  
[NuGetGallery0.9.488]: https://www.nuget.org/packages/Microsoft.Web.WebView2/0.9.488 "NuGet Gallery | Microsoft.Web.WebView2 v0.9.488"  
[NuGetGallery0.9.515-prerelease]: https://www.nuget.org/packages/Microsoft.Web.WebView2/0.9.515-prerelease "NuGet Gallery | Microsoft.Web.WebView2 v0.9.515 prerelease"  
[NuGetGallery0.9.538]: https://www.nuget.org/packages/Microsoft.Web.WebView2/0.9.538 "NuGet Gallery | Microsoft.Web.WebView2 v0.9.538"  
[NuGetGallery0.9.579]: https://www.nuget.org/packages/Microsoft.Web.WebView2/0.9.579 "NuGet Gallery | Microsoft.Web.WebView2 v0.9.579"  
[NuGetGallery0.9.622.11]: https://www.nuget.org/packages/Microsoft.Web.WebView2/0.9.622.11 "NuGet Gallery | Microsoft.Web.WebView2 v0.9.622.11"  
[NuGetGallery0.9.628-prerelease]: https://www.nuget.org/packages/Microsoft.Web.WebView2/0.9.628-prerelease "NuGet Gallery | Microsoft.Web.WebView2 v0.9.628 prerelease"  
[NuGetGallery1.0.622.22]: https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.622.22 "NuGet Gallery | Microsoft.Web.WebView2 v1.0.622.22"  
[NuGetGallery1.0.664.34]: https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.664.34 "NuGet Gallery | Microsoft.Web.WebView2 v1.0.664.34"  
[NuGetGallery1.0.664.37]: https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.664.37 "NuGet Gallery | Microsoft.Web.WebView2 v1.0.664.37"  
[NuGetGallery1.0.674-prerelease]: https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.674-prerelease "NuGet Gallery | Microsoft.Web.WebView2 v1.0.674 prerelease"  
[NuGetGallery1.0.705.50]: https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.705.50 "NuGet Gallery | Microsoft.Web.WebView2 v1.0.705.50"  
[NuGetGallery1.0.721-prerelease]: https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.721-prerelease "NuGet Gallery | Microsoft.Web.WebView2 v1.0.721 prerelease"  
[NuGetGallery1.0.774.44]: https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.774.44 "NuGet Gallery | Microsoft.Web.WebView2 v1.0.774.44"  
[NuGetGallery1.0.790-prerelease]: https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.790-prerelease "NuGet Gallery | Microsoft.Web.WebView2 v1.0.790 prerelease"  
[NuGetGallery1.0.818.41]: https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.818.41 "NuGet Gallery | Microsoft.Web.WebView2 v1.0.818.41"  
[NuGetGallery1.0.864.35]: https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.864.35 "NuGet Gallery | Microsoft.Web.WebView2 v1.0.864.35"  
[NuGetGallery1.0.824-prerelease]: https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.824-prerelease "NuGet Gallery | Microsoft.Web.WebView2 v1.0.824 prerelease"  
[NuGetGallery1.0.865-prerelease]: https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.865-prerelease "NuGet Gallery | Microsoft.Web.WebView2 v1.0.865 prerelease"  
[NuGetGallery1.0.902-prerelease]: https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.902-prerelease "NuGet Gallery | Microsoft.Web.WebView2 v1.0.902 prerelease"  

[WindowsBlogsMsedgedevEdgeWebview2GeneralAvailability]: https://blogs.windows.com/msedgedev/edge-webview2-general-availability "Announcing Microsoft Edge WebView2 General Availability | Microsoft Edge Blog"  
[Webview2ReferenceWin32Icorewebview2experimentalsettings5ViewWebview210902PrereleaseGetIsswipenavigationenabled]: /microsoft-edge/webview2/reference/win32/icorewebview2experimentalsettings5?view=webview2-1.0.902-prerelease&preserve-view=true#get_isswipenavigationenabled "get_IsSwipeNavigationEnabled - interface ICoreWebView2ExperimentalSettings5 | Microsoft Docs"
[Webview2ReferenceWin32Icorewebview2experimentalenvironment4ViewWebview210902PrereleaseAddBrowserprocessexited]: /microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment4?view=webview2-1.0.902-prerelease&preserve-view=true#add_browserprocessexited "add_BrowserProcessExited - interface ICoreWebView2ExperimentalEnvironment4 | Microsoft Docs"
[Webview2ReferenceWin32Icorewebview2experimental3ViewWebview210902PrereleaseAddClientcertificaterequested]: /microsoft-edge/webview2/reference/win32/icorewebview2experimental3?view=webview2-1.0.902-prerelease&preserve-view=true#add_clientcertificaterequested "add_ClientCertificateRequested - interface ICoreWebView2Experimental3 | Microsoft Docs"


[Webview2ReferenceWin32Icorewebview24ViewWebview210902PrereleaseAddDownloadstarting]: /microsoft-edge/webview2/reference/win32/icorewebview2_4?view=webview2-1.0.902-prerelease&preserve-view=true#add_downloadstarting "add_DownloadStarting - interface ICoreWebView2_4 | Microsoft Docs"
[Webview2ReferenceWin32Icorewebview24ViewWebview210902PrereleaseAddFramecreated]: /microsoft-edge/webview2/reference/win32/icorewebview2_4?view=webview2-1.0.902-prerelease&preserve-view=true#add_framecreated "add_FrameCreated - interface ICoreWebView2_4 | Microsoft Docs"
[Webview2ReferenceWin32Icorewebview2setting4ViewWebview210902PrereleaseGetIsgeneralautofillenabled]: /microsoft-edge/webview2/reference/win32/icorewebview2settings4?view=webview2-1.0.902-prerelease&preserve-view=true#get_isgeneralautofillenabled "get_IsGeneralAutofillEnabled - interface ICoreWebView2Settings4 | Microsoft Docs"

[AddHostObjectToScriptWithOriginsAPI]: /microsoft-edge/webview2/reference/win32/icorewebview2frame?view=webview2-1.0.902-prerelease&preserve-view=true#addhostobjecttoscriptwithorigins "AddHostObjectToScriptWithOrigins | Microsoft Docs"

[Webview2ReferenceWin32Icorewebview2setting5ViewWebview210902PrereleaseGetIspinchzoomenabled]: /microsoft-edge/webview2/reference/win32/icorewebview2settings5?view=webview2-1.0.902-prerelease&preserve-view=true#get_ispinchzoomenabled "get_IsPinchZoomEnabled - interface ICoreWebView2Settings5 | Microsoft Docs"

[Webview2ReferenceWin32Icorewebview2environmentoptionsGetAllowsinglesignonusingosprimaryaccount]: /microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions#get_allowsinglesignonusingosprimaryaccount "get_AllowSingleSignOnUsingOSPrimaryAccount - interface ICoreWebView2EnvironmentOptions | Microsoft Docs"
[Webview2ReferenceWin32Icorewebview2setting2ViewWebview21086435GetUseragent]: /microsoft-edge/webview2/reference/win32/icorewebview2settings2?view=webview2-1.0.864.35&preserve-view=true#get_useragent 

/microsoft-edge/webview2/reference/win32/icorewebview2settings2?view=webview2-1.0.864.35&preserve-view=true#get_useragent 

"get_UserAgent - interface ICoreWebView2Setting2 | Microsoft Docs"
[Webview2ReferenceWin32Icorewebview2setting2ViewWebview21086435GetArebrowseracceleratorkeysenabled]: /microsoft-edge/webview2/reference/win32/icorewebview2settings3?view=webview2-1.0.864.35&preserve-view=true#get_arebrowseracceleratorkeysenabled "get_AreBrowserAcceleratorKeysEnabled - interface ICoreWebView2Settings3 | Microsoft Docs"
