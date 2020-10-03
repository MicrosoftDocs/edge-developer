---
description: Release notes for Microsoft Edge WebView2 SDK
title: Release Notes for Microsoft Edge WebView2 for Win32, WPF, and WinForms
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 10/02/2020
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html
---

# Release notes for WebView2 SDK  

The WebView2 team is delivering updates to the [WebView2 SDK][NuGetGallery] on a six week cadence.  Review the following content for up-to-date information about product announcements, additions and modifications to the API surface, and breaking changes.  

> [!NOTE]
> Re-compile your app after updating the NuGet package.  

> [!IMPORTANT]
> While WebView2 is a preview, the .NET APIs are in the `prerelease package`.  

## 0.9.628-prerelease  

Release Date: Sept 10, 2020  

[NuGet package][NuGetGallery0.9.628-prerelease] \| minimum Microsoft Edge version 87.0.628.0.  

> [!IMPORTANT]
> **Announcement**:  This prerelease continues to release based upon the Microsoft Edge 87 Branch.  In the future, the prerelease SDK release matches the Microsoft Edge Canary build and the normal release is synchronized with Microsoft Edge Stable.  

#### General  

*   > [!IMPORTANT]
    > **Announcement**:  Visual Hosting APIs are now under preview.  WebView2 uses Visual Hosting to run alongside WinComp/DComp visuals as opposed to HWNDs.  The interfaces are in Experimental.  For more information, navigate to [ICoreWebView2ExperimentalEnvironment][ReferenceWin3209622Icorewebview2experimentalenvironment].  

#### .NET  

*   .NET Binaries are now [strongly-named][DotnetStandardAssemblyStrongNamed].  \([\#181][GithubMicrosoftedgeWebviewfeedbackIssue181]\).  
*   Updated NuGet Target to include `WebViewLoader2.dll`.  \([\#228][GithubMicrosoftedgeWebviewfeedbackIssue228]\) and \([\#183][GithubMicrosoftedgeWebviewfeedbackIssue183]\).  
*   Updated `WebResourceRequested` to expose [HttpRequestHeaders][ReferenceDotnetMicrosoftWebWebview2CoreCorewebview2httprequestheaders] and [HttpResponseHeaders][ReferenceDotnetMicrosoftWebWebview2CoreCorewebview2httpresponseheaders] APIs in .NET.  \([\#131][GithubMicrosoftedgeWebviewfeedbackIssue131]\).  

## 0.9.622  

Release Date: Sept 10, 2020  

[NuGet package][NuGetGallery0.9.622.11] \| minimum WebView2 Runtime version 86.0.622.11.  

#### General  

*   > [!IMPORTANT]
    > **Announcement**: This SDK is the Release Candidate for WebView2 Win32 C/C++ GA.  The GA version should use same API interface and functionality.  

*   Disconnected [browser policies][DeployedgeMicrosoftEdgePolicies].  
*   Added [AllowSingleSignOnUsingOSPrimaryAccount][ReferenceWin3209622Icorewebview2environmentoptionsGetAllowsinglesignonusingosprimaryaccount] property on WebView2 environment options to enable conditional access for WebView.  
*   Updated `ICoreWebView2NewWindowRequestedEventArgs` to include [WindowFeatures][ReferenceWin3209622Icorewebview2newwindowrequestedeventargsGetWindowfeatures] property, and the associated [ICoreWebView2WindowFeatures][ReferenceWin3209622Icorewebview2windowfeatures].  \([\#293][GithubMicrosoftedgeWebviewfeedbackIssue293]\).  
*   Updated `System.Windows.Rect`  to use `System.Drawing.Rectangle` instead of `System.Windows.Rect` \([\#235][GithubMicrosoftedgeWebviewfeedbackIssue235]\).  
*   Updated NewWindowRequested event to handle `window.open()` request without parameters.  \([\#293][GithubMicrosoftedgeWebviewfeedbackIssue293]\).  
*   [AdditionalBrowserArguments][ReferenceWin3209622Icorewebview2environmentoptionsPutAdditionalbrowserarguments] set using `ICoreWebView2EnvironmentOptions` are not overridden with environment variable nor registry value.  For more information, navigate to [CreateCoreWebView2EnvironmentWithOptions][ReferenceWin3209622IdlCreatecorewebview2environmentwithoptions].  

## 0.9.579  

Release Date: July 20, 2020  

[NuGet package][NuGetGallery0.9.579] \| minimum Microsoft Edge version 86.0.579.0.  

#### General  

*   > [!IMPORTANT]
    > **Announcement**: Evergreen WebView2 Runtime and installer is released for preview.  For more information, navigate to [Distribution of WebView2][Webview2ConceptsDistributionUnderstandRuntimeInstallerPreview].  
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
*   Disabled popup blocker in WebView.  For more information, navigate to the [IsUserInitiated][ReferenceWin3209538Icorewebview2newwindowrequestedeventargsGetIsuserinitiated] property in the `NewWindowRequested` event.  
*   Ensured WebView navigation starting event is fired for `about:blank`.  Now, `NavigationStarting` events are fired for all navigation, but cancellations for `about:blank` or iframe srcdoc is not supported and ignored.  
*   Blocked `edge:// URI` scheme in WebView.  
*   Added experimental [IsSingleSignOnUsingOSPrimaryAccountEnabled][ReferenceWin3209538Icorewebview2experimentaloptionsGetIssinglesignonusingosprimaryaccountenabled] property on WebView2 environment options to enable conditional access for WebView.  
*   Added experimental [WebResourceResponseReceived][ReferenceWin3209538Icorewebview2experimentalAddWebresourceresponsereceived] event that fires after the WebView has received and processed the response for a WebResource request.  Authentication headers, if any, are included in the response object.  

#### .NET  

*   Improved WPF focus handling.  \([\#185][GithubMicrosoftedgeWebviewfeedbackIssue185]\).  
*   Added `ZoomFactor` property on WPF Webview2 Controller.  

## 0.9.538  

[NuGet package][NuGetGallery0.9.538] \| minimum Microsoft Edge version 85.0.538.0.  

#### General  

*   Dropping support for WebView2 SDK Version [0.8.149](#08149).  WebView2 recommends staying up to date with the latest version of WebView2.  
*   Updated group policy to account for when the profile path of the Microsoft Edge browser is modified  \([#179][GithubMicrosoftedgeWebviewfeedbackIssue179]\).  

#### Win32 C/C++  

*   Added [ICoreWebView2ExperimentalNewWindowRequestedEventArgs::get_WindowFeatures][ReferenceWin3209538Icorewebview2experimentalnewwindowrequestedeventargsGetWindowfeatures], which fires when `window.open()` is run and associated with [ICoreWebView2ExperimentalWindowFeatures][ReferenceWin3209538Icorewebview2experimentalwindowfeatures] \([#70][GithubMicrosoftedgeWebviewfeedbackIssue70]\).  
*   > [!IMPORTANT]
    > **Breaking Change**:  [CreateCoreWebView2EnvironmentWithDetails][ReferenceWin3209488Webview2IdlCreatecorewebview2environmentwithdetails] is deprecated and replaced with [CreateCoreWebView2EnvironmentWithOptions][[ReferenceWin3209538IdlCreatecorewebview2environmentwithoptions]].  
*   > [!IMPORTANT]
    > **Breaking Change**:  In order to ensure the WebView2 API aligns with the Windows API naming conventions, the WebView team updated the names of the following.  
    > *   [AreRemoteObjectsAllowed][ReferenceWin3209488Icorewebview2settingsGetAreremoteobjectsallowed] is now [AreHostObjectsAllowed][ReferenceWin3209538Icorewebview2settingsGetArehostobjectsallowed].  
*   Updated [AddHostObjectToScript][ReferenceWin3209538Icorewebview2Addhostobjecttoscript] to ensure original host object serializer markers are set to the proxy objects and serialized back as a host object when passed as a parameter in the JavaScript callback \([#148][GithubMicrosoftedgeWebviewfeedbackIssue148]\).  

#### .NET (0.9.538 pre-release)  

*   Released WinForms and WPF WebView2API Samples, which are comprehensive guides of the WebView2 SDK.  For more information, navigate to [Samples Repo][GithubMicrosoftedgeWebview2samplesMain].  
*   Added support for visual hosting and window features [experimental APIs][ConceptsVersioningExperimentalApis].  
*   > [!IMPORTANT]
    > **Breaking Change**:  The following deferrals now implement IDisposable:  [ScriptDialogOpening][ReferenceDotnetMicrosoftWebWebview2CoreCorewebview2Scriptdialogopening], [NewWindowRequested][ReferenceDotnetMicrosoftWebWebview2CoreCorewebview2Newwindowrequested], [WebResourceRequested][ReferenceDotnetMicrosoftWebWebview2CoreCorewebview2Webresourcerequested], and [PermissionRequested][ReferenceDotnetMicrosoftWebWebview2CoreCorewebview2Permissionrequested].  
*   Added [GetAvailableBrowserVersionString][ReferenceDotnetMicrosoftWebWebview2CoreCorewebview2environmentGetavailablebrowserversionstring] and [CompareBrowserVersions][ReferenceDotnetMicrosoftWebWebview2CoreCorewebview2environmentComparebrowserversions] as [CoreWebView2Environment][ReferenceDotnetMicrosoftWebWebview2CoreCorewebview2environment] statics.  

## 0.9.515-prerelease  

[NuGet package][NuGetGallery0.9.515-prerelease] \| minimum Microsoft Edge version 84.0.515.0.  

*   > [!IMPORTANT]
    > **Announcement**:  WebView2 now supports Windows Forms and WPF on .NET Framework 4.6.2 or later and .NET Core 3.0 or later in the **pre-release package**.  
*   For more information about building WPF applications and the WebView2 [WPF Reference][ReferenceWpfReference] for WPF-specific APIs, navigate to [WPF Getting Started Guide][GettingstartedWpf].  
*   For more information about building Windows Forms applications and the WebView2 [Windows Forms Reference][ReferenceWinformsReference] for Windows Forms specific APIs, navigate to [Windows Forms Getting Started Guide][GettingstartedWinforms].  
*   For more information about the CoreWebView2 APIs, navigate to [.NET Reference][ReferenceDotnetReference].  
*   > [!CAUTION]
    > **Known Issues**:  The WebView team is aware of some issues in the pre-release that are being resolved in future releases.  
    > *   **DPI Awareness**:  WebView2 for WPF is currently not DPI aware.  When initializing WebView2 on high DPI monitors, there is a known issue where the WebView at first initializes as a fraction of the window until the window is resized.  
    > *   **WPF Designer**:  The WPF designer is not currently supported.  Add the WebView2 control in your app by directly modifying the appropriate XAML in a text editor.  

## 0.9.488  

[NuGet package][NuGetGallery0.9.488] \| minimum Microsoft Edge version 84.0.488.0.  

*   > [!IMPORTANT]
    > **Announcement**:  Starting with the upcoming Microsoft Edge version 83, evergreen WebView no longer targets the Stable browser channel.  Instead, it targets another set of binaries, branded [Evergreen WebView2 Runtime][ConceptsDistributionEvergreenMode], that you may chain-install through an installer the WebView team is currently developing.  For more information, navigate to [App-Distribution][ConceptsDistribution].  
*   > [!IMPORTANT]
    > **Announcement**:  Moving forward, the WebView team releases two packages:  a pre-release package with experimental APIs \(for you to try out\) and a stable release package with stable APIs \(for your confidence\).  To learn about the differences, navigate to [Understanding browser versions and WebView2][ConceptsVersioning].  
*   > [!IMPORTANT]
    > **Breaking Change**:  In order to ensure the WebView2 API aligns with the Windows API naming conventions, the WebView team updated the names of the following interfaces.  
    > *   `CORE_WEBVIEW2_*` prefix is now `COREWEBVIEW2_*`.  
    > *   [GetCoreWebView2BrowserVersionInfo][ReferenceWin3209430Webview2IdlGetcorewebview2browserversioninfo] is now [GetAvailableCoreWebView2BrowserVersionString][ReferenceWin3209488Webview2IdlGetavailablecorewebview2browserversionstring].  
    > *   [get_BrowserVersionInfo][ReferenceWin3209430Icorewebview2environmentGetBrowserversioninfo] is now [get_BrowserVersionString][ReferenceWin3209488Icorewebview2environmentGetBrowserversionstring].  
    > *   [AddRemoteObject][ReferenceWin3209430Icorewebview2Addremoteobject] is now [AddHostObjectToScript][ReferenceWin3209488Icorewebview2Addhostobjecttoscript].  
    > *   [RemoveRemoteObject][ReferenceWin3209430Icorewebview2Removeremoteobject] is now [RemoveHostObjectFromScript][ReferenceWin3209488Icorewebview2Removehostobjectfromscript].  
    > *   `chrome.webview.remoteObjects` is now `chrome.webview.hostObjects`.  
*   > [!IMPORTANT]
    > **Breaking Change**:  The `AddRemoteObject` JS proxy methods are also renamed.  
    > *   `getLocal` is now `getLocalProperty`.  
    > *   `setLocal` is now `setLocalProperty`.  
    > *   `getRemote` is now `getHostProperty`.  
    > *   `setRemote` is now `setHostProperty`.  
    > *   `applyRemote` is now `applyHostFunction`.  
*   > [!IMPORTANT]
    > **Breaking Change**:  [CreateCoreWebView2EnvironmentWithDetails][ReferenceWin3209488Webview2IdlCreatecorewebview2environmentwithdetails] is deprecated and replaced with [CreateCoreWebView2EnvironmentWithOptions][ReferenceWin3209488Webview2IdlCreatecorewebview2environmentwithoptions].  
*   Added [FrameNavigationCompleted][ReferenceWin3209488Icorewebview2AddFramenavigationcompleted] event.  Now, when an iframe completes navigation, an event is fired and returns the success of the navigation and the navigation id.  
*   Added [ICoreWebView2EnvironmentOptions][ReferenceWin3209488Icorewebview2environmentoptions] interface, which may be used to determine the version of the WebView2 Runtime the application targets.  
*   Added [IsBuiltInErrorPageEnabled][ReferenceWin3209488Icorewebview2settingsGetIsbuiltinerrorpageenabled] setting.  Now, you may choose to enable or disable the built-in error page for navigation failure and render process failure.  
*   Updated Remote Object Injection to support .NET IDispatch implementations \([#113][GithubMicrosoftedgeWebviewfeedbackIssue113]\).  
*   Updated [NewWindowRequested][ReferenceWin3209488Icorewebview2AddNewwindowrequested] event to handle requests from context menus \([#108][GithubMicrosoftedgeWebviewfeedbackIssue108]\).  
*   Released the first separate WebView2 pre-release package where you may access visual hosting APIs.  The WebView team updated [APISample][GithubMicrosoftedgeWebview2samplesMain] to include the new experimental APIs.  
    *   Added [ICoreWebView2ExperimentalCompositionController][ReferenceWin3209488Icorewebview2experimentalcompositioncontroller] interface, to connect to a composition tree and provide input for the WebView.  
    *   Added [ICoreWebView2ExperimentalPointerInfo][ReferenceWin3209488Icorewebview2experimentalpointerinfo], which contains all the information from a `POINTER_INFO`.  This object is passed to SendPointerInput to inject pointer input into the WebView.  
    *   Added [ICoreWebView2ExperimentalCursorChangedEventHandler][ReferenceWin3209488Icorewebview2experimentalcursorchangedeventhandler], which tells the app when the mouse cursor over the WebView should be changed.  When mouse is over a text box in the WebView, the cursor changes from the arrow to the selector.  The `cursor` property on the `CompositionController` tells the app what the mouse cursor should currently be for the WebView.  

## 0.9.430  

[NuGet package][NuGetGallery0.9.430] \| minimum Microsoft Edge version 82.0.430.0.  

The WebView2 SDK is the official Win32 C++ Beta version, which incorporates several feature requests from feedback.  The WebView team tries to limit the number of releases with breaking changes, but as general availability is approached the Beta release is used to incorporate several major breaking changes in one go.  

*   > [!IMPORTANT]
    > **Breaking Change**:  As the final release approaches the WebView team renamed the prefix *IWebView2WebView*   to *ICoreWebView2*   in order to make sure the WebView2 API aligns with the Windows API naming convention.  Additionally, in order to leverage the WebView2 SDK from UI frameworks, the WebView team separated `ICoreWebView2` into [ICoreWebView2][ReferenceWin3209430Icorewebview2] and [ICoreWebView2Host][ReferenceWin3209430Icorewebview2host].  `ICoreWebView2Host` supports resizing, showing and hiding, focusing, and other functionality related to windowing and composition.  ICoreWebView2 supports all other WebView2 functionality.  To learn more about incorporating the changes, navigate to the WebView2 [pull request][GithubMicrosoftedgeWebview2samplesPr17] in the WebView2 [APISample][GithubMicrosoftedgeWebview2samplesMain] project.  
*   > [!IMPORTANT]
    > **Breaking Change**:  Split [DocumentStateChanged][ReferenceWin3208190Iwebview2webviewAddDocumentstatechanged] into three components:  [SourceChanged][ReferenceWin3209430Icorewebview2AddSourcechanged], [ContentLoading][ReferenceWin3209430Icorewebview2AddContentloading], and [HistoryChanged][ReferenceWin3209430Icorewebview2AddHistorychanged].  Now, when the source URL changes the `SourceChanged` event is fired.  When the history state is changed the `HistoryChanged` event is fired.  The `ContentLoading` event is fired before the initial script when a new document is being loaded.  
*   Added support for ARM64 architecture.  
*   Added Soft Input Panel \(SIP\) support for touch screen devices.  
*   Added support for Windows Server 2008 R2, Windows Server 2012, Windows Server 2012 R2, and Windows Server 2016.  
*   Added [NotifyParentWindowPositionChanged][ReferenceWin3209430Icorewebview2hostNotifyparentwindowpositionchanged] which allows for the status bar to follow the window in windowed mode.  The change must also be implemented in windowless mode in order for accessibility features to work.  
*   Added [AreRemoteObjectsAllowed][ReferenceWin3209430Icorewebview2settingsGetAreremoteobjectsallowed] setting to globally control whether a page may be accessed by any remote objects.  By default, `AreRemoteObjectsAllowed` is enabled, meaning remote objects added by [AddRemoteObject][ReferenceWin3209430Icorewebview2Addremoteobject] are accessible from the page.  When `AreRemoteObjectsAllowed` is disabled, the objects are not accessible from the page.  Changes are applied on the next navigation event.  
*   Added [IsZoomControlEnabled][ReferenceWin3209430Icorewebview2settingsGetIszoomcontrolenabled] setting to prevent users from impacting the zoom of the WebView using `ctrl`+`+` and `ctrl`+`-` \(or `ctrl`+ mouse wheel\).  Zoom may still be set using [put_ZoomFactor][ReferenceWin3209430Icorewebview2hostPutZoomfactor] when the setting is disabled.  
*   Changed ZoomFactor to only apply to the current WebView.  Zoom changes to the current WebView do not impact other WebViews that you have navigated to the same site of origin.  For more information, navigate to [get_ZoomFactor][ReferenceWin3209430Icorewebview2hostGetZoomfactor].  
*   Hid ZoomView UI for WebView \([#95][GithubMicrosoftedgeWebviewfeedbackIssue95]\).  
*   Added [SetBoundsAndZoomFactor][ReferenceWin3209430Icorewebview2hostSetboundsandzoomfactor].  Now, you may set the zoom factor and bounds of a WebView at the same time.  
*   Added [WindowCloseRequested][ReferenceWin3209430Icorewebview2AddWindowcloserequested] event.  For more information, navigate to [add_WindowCloseRequested][ReferenceWin3209430Icorewebview2AddWindowcloserequested] \([#119][GithubMicrosoftedgeWebviewfeedbackIssue119]\).  
*   Added support for the `beforeunload` dialog type for javascript dialog events and added [CORE_WEBVIEW2_SCRIPT_DIALOG_KIND_BEFOREUNLOAD][ReferenceWin3209430Icorewebview2CoreWebview2ScriptDialogKind] enum entry.  
*   Added [GetHeaders][ReferenceWin3209430Icorewebview2httprequestheadersGetheaders] to HttpRequestHeaders, [GetHeader][ReferenceWin3209430Icorewebview2httpresponseheadersGetheader] to HttpResponseHeaders, and [get_HasCurrentHeader][ReferenceWin3209430Icorewebview2httpheaderscollectioniteratorGetHascurrentheader] property to HttpHeadersCollectionIterator.  
*   > [!IMPORTANT]
    > **Breaking Change**:  Modified `DevToolsProtocolEventReceived` behavior.  Now, you may create a [DevToolsProtocolEventReceiver][ReferenceWin3209430Icorewebview2devtoolsprotocoleventreceiver] for a particular DevTools Protocol event and subscribe/unsubscribe to such event using [add_DevToolsProtocolEventReceived][ReferenceWin3209430Icorewebview2devtoolsprotocoleventreceiverAddDevtoolsprotocoleventreceived]/[remove_DevToolsProtocolEventReceived][ReferenceWin3209430Icorewebview2devtoolsprotocoleventreceiverRemoveDevtoolsprotocoleventreceived].
*   > [!IMPORTANT]
    > **Breaking Change**:  Changed WebMessageReceivedEventArgs' [get_WebMessageAsString][ReferenceWin3208190Iwebview2webmessagereceivedeventargsGetWebmessageasstring] property to a [TryGetWebMessageAsString][ReferenceWin3209430Icorewebview2webmessagereceivedeventargsTrygetwebmessageasstring] method.  
*   > [!IMPORTANT]
    > **Breaking Change**:  Changed `AcceleratorKeyPressedEventArgs` [Handle][ReferenceWin3208190Iwebview2acceleratorkeypressedeventargsHandle] method to a [get_Handled][ReferenceWin3209430Icorewebview2acceleratorkeypressedeventargsGetHandled] property.  

## 0.8.355

[NuGet package][NuGetGallery0.8.355] \| minimum Microsoft Edge version 80.0.355.0.

*   Released WebView2API Sample, a comprehensive guide of the WebView2 SDK.  For more information, navigate to [APISample][GithubMicrosoftedgeWebview2samplesApisample].  
*   Added IME support for all languages besides English \([#30][GithubMicrosoftedgeWebviewfeedbackIssue30]\).  
*   Updated the API surface of the `WebResourceRequested` event in response to bug reports.  Simultaneously specifying a filter and an event on creation is now deprecated.  To create a web resource requested event, use [add_WebResourceRequested][ReferenceWin3208190Iwebview2webview5AddWebresourcerequested] to add the event and [AddWebResourceRequestedFilter][ReferenceWin3208190Iwebview2webview5Addwebresourcerequestedfilter] to add a filter.  [RemoveWebResourceRequestedFilter][ReferenceWin3208190Iwebview2webview5Removewebresourcerequestedfilter] removes the filter \([#36][GithubMicrosoftedgeWebviewfeedbackIssue36]\) \([#74][GithubMicrosoftedgeWebviewfeedbackIssue74]\).  
*   > [!IMPORTANT]
    > **Breaking Change**:  Modified fullscreen behavior.  Deprecated [IsFullScreenAllowed][ReferenceWin3208190Iwebview2settingsGetIsfullscreenallowedDeprecated].  Now, by default, if an element within a WebView \(such as a video\) is set to full screen, it fills the bounds of the WebView.  Use the [ContainsFullScreenElementChanged][ReferenceWin3208190Iwebview2containsfullscreenelementchangedeventhandler] event and [get_ContainsFullScreenElement][ReferenceWin3208190Iwebview2webview5GetContainsfullscreenelement] to specify how the app should resize the WebView if an element wants to enter fullscreen mode.  

## 0.8.314  

[NuGet package][NuGetGallery0.8.314] \| minimum Microsoft Edge version 80.0.314.0.  

*   Added support for Windows 7, Windows 8, and Windows 8.1.  
*   Added Visual Studio and Visual Studio Code debug support for WebView2.  Now, debug your script in the WebView2 right from your IDE.  For more information, navigate to [How to debug when developing with WebView2 controls][HowtoDebug].  
*   Added `Native Object Injection`, which allows the script running within WebView2 to access an IDispatch object from the Win32 component of the application and access the properties of the IDispatch object.  For more information, navigate to [AddRemoteObject][ReferenceWin3208190Iwebview2webview4Addremoteobject] \([#17][GithubMicrosoftedgeWebviewfeedbackIssue17]\).  
*   Added `AcceleratorKeyPressed` event.  For more information, navigate to [add_AcceleratorKeyPressed][ReferenceWin3208190Iwebview2webview4AddAcceleratorkeypressed] \([#57][GithubMicrosoftedgeWebviewfeedbackIssue57]\).  
*   Disabled `Context Menus`.  For more information, navigate to [put_AreDefaultContextMenusEnabled][ReferenceWin3208190Iwebview2settings2PutAredefaultcontextmenusenabled] \([#57][GithubMicrosoftedgeWebviewfeedbackIssue57]\).  
*   Updated `DPI Awareness`.  Now, the DPI awareness of WebView is the same as the DPI awareness of the host application.  
    
    > [!NOTE]
    > If another hybrid application is launched with a different DPI Awareness than the original WebView, the new WebView is not launched if the user data directory is the same \([#1][GithubMicrosoftedgeWebviewfeedbackIssue1]\).  
    
*   Updated `Notification Change Behavior` so WebView2 automatically rejects notification permission requests prompted by web content hosted within the WebView.  

## 0.8.270  

[NuGet package][NuGetGallery0.8.270] \| minimum Microsoft Edge version 78.0.270.0.  

*   Added `DocumentTitleChanged` event to indicate document title change \([\#27][GithubMicrosoftedgeWebviewfeedbackIssue27]\).  
*   Added `GetWebView2BrowserVersionInfo` API \([\#18][GithubMicrosoftedgeWebviewfeedbackIssue18]\).  
*   Added `NewWindowRequested` event.  
*   Updated `CreateWebView2EnvironmentWithDetails` function to remove `releaseChannelPreference`.  For more information about the `CreateWebView2EnvironmentWithDetails` function, navigate to [CreateWebView2EnvironmentWithDetails][ReferenceWin3208190WebView2IdlCreatewebview2environmentwithdetails].  The registry and environment variable override is still supported.  The default channel preference is used unless overridden.  
    During the channel search, the WebView team skips any older channel version that is not compatible with the WebView2 SDK.  
    The WebView team selects the more stable channel to ensure the most consistent behaviors for the end user.  When you test with latest Canary builds, you should create a script to set the `WEBVIEW2_RELEASE_CHANNEL_PREFERENCE` environment variable to `1` before launching the app.  
*   Updated the `CreateWebView2EnvironmentWithDetails` function with logic for selecting `userDataFolder` when not specified.  For more information about the `CreateWebView2EnvironmentWithDetails` function, navigate to [CreateWebView2EnvironmentWithDetails][ReferenceWin3208190WebView2IdlCreatewebview2environmentwithdetails].  If you previously used the default `userDataFolder` location, when you switch to the new SDK the default `userDataFolder` is reset \(set to a new location in the host code directory\) and your state is also reset.  
    If the host process does not have permission to write to the specified directory, the `CreateWebView2EnvironmentWithDetails` function may fail.  You may copy the data from the old user data directory to the new directory.  

## 0.8.230  

[NuGet package][NuGetGallery0.8.230] \| minimum Microsoft Edge version 77.0.230.0.  

*   Added `Stop` API to stop all navigation and pending resource fetches \([\#28][GithubMicrosoftedgeWebviewfeedbackIssue28]\).  
*   Added `.tlb` file to the NuGet package \([\#22][GithubMicrosoftedgeWebviewfeedbackIssue22]\).  
*   Added .NET projects to the installer list in the NuGet package \([\#32][GithubMicrosoftedgeWebviewfeedbackIssue32]\).  

## 0.8.190  

[NuGet package][NuGetGallery0.8.190] \| minimum Microsoft Edge version 77.0.190.0.  

*   Added `get_AreDevToolsEnabled`/`put_AreDevToolsEnabled` to control if users are able to open DevTools \([\#16][GithubMicrosoftedgeWebviewfeedbackIssue16]\).  
*   Added `get_IsStatusBarEnabled`/`put_IsStatusBarEnabled` to control if the status bar is displayed \([\#19][GithubMicrosoftedgeWebviewfeedbackIssue19]\).  
*   Added `get_CanGoBack`/`GoBack`/`get_CanGoForward`/`GoForward` for going back and forward through navigation history.  
*   Added HTTP header types \(`IWebView2HttpHeadersCollectionIterator`/`IWebView2HttpRequestHeaders`/`IWebView2HttpRequestHeaders`\) for viewing and modifying HTTP headers in WebView.  
*   Added 32-bit WebView support on 64-bit machines \([\#13][GithubMicrosoftedgeWebviewfeedbackIssue13]\).  
*   Added WebView IDL to the SDK \([\#14][GithubMicrosoftedgeWebviewfeedbackIssue14]\).  
*   Added lib to support `IID\_\*` interface id objects \([\#12][GithubMicrosoftedgeWebviewfeedbackIssue12]\).  
*   Added include path, linking, and auto-copying of DLL files to NuGet `TARGET` file in SDK.  
*   Enabled requesting `window.open()` in script.  

## 0.8.149  

[NuGet package][NuGetGallery0.8.149] \| minimum Microsoft Edge version 76.0.149.0.  

Initial developer preview release.  

<!-- Links -->  

[ConceptsDistribution]: ./concepts/distribution.md "Distribution of applications using WebView2 | Microsoft Docs"  
[ConceptsDistributionEvergreenMode]: ./concepts/distribution.md#evergreen-distribution-mode "Evergreen distribution mode - Distribution of applications using WebView2 | Microsoft Docs"  
[Webview2ConceptsDistributionUnderstandRuntimeInstallerPreview]: ./concepts/distribution.md#understanding-the-webview2-runtime "Understand the WebView2 Runtime and installer (Preview) - Distribution of applications using WebView2 | Microsoft Docs"  
[ConceptsVersioning]: ./concepts/versioning.md "Understanding browser versions and WebView2 | Microsoft Docs"  
[ConceptsVersioningExperimentalApis]: ./concepts/versioning.md#experimental-apis "Experimental APIs - Understanding browser versions and WebView2 | Microsoft Docs"  
[GettingstartedWinforms]: ./gettingstarted/winforms.md "Getting started with WebView2 in Windows Forms apps | Microsoft Docs"  
[GettingstartedWpf]: ./gettingstarted/wpf.md "Getting started with WebView2 in WPF | Microsoft Docs"  
[HowtoDebug]: ./howto/debug.md "How to debug when developing with WebView2 controls | Microsoft Docs"  

[ReferenceWin3208190Iwebview2acceleratorkeypressedeventargsHandle]: ./reference/win32/0-8-190/iwebview2acceleratorkeypressedeventargs.md#handle "Handle - interface IWebView2AcceleratorKeyPressedEventArgs | Microsoft Docs"  
[ReferenceWin3208190Iwebview2containsfullscreenelementchangedeventhandler]: ./reference/win32/0-8-190/iwebview2containsfullscreenelementchangedeventhandler.md "interface IWebView2ContainsFullScreenElementChangedEventHandler | Microsoft Docs"  
[ReferenceWin3208190Iwebview2settings2PutAredefaultcontextmenusenabled]: ./reference/win32/0-8-190/iwebview2settings2.md#put_aredefaultcontextmenusenabled "put_AreDefaultContextMenusEnabled - interface IWebView2Settings2 | Microsoft Docs"  
[ReferenceWin3208190Iwebview2settingsGetIsfullscreenallowedDeprecated]: ./reference/win32/0-8-190/iwebview2settings.md#get_isfullscreenallowed_deprecated "get_IsFullscreenAllowed_deprecated - interface IWebView2Settings | Microsoft Docs"  
[ReferenceWin3208190Iwebview2webmessagereceivedeventargsGetWebmessageasstring]: ./reference/win32/0-8-190/iwebview2webmessagereceivedeventargs.md#get_webmessageasstring "get_WebMessageAsString - interface IWebView2WebMessageReceivedEventArgs | Microsoft Docs"  
[ReferenceWin3208190Iwebview2webview4AddAcceleratorkeypressed]: ./reference/win32/0-8-190/iwebview2webview4.md#add_acceleratorkeypressed "add_AcceleratorKeyPressed - interface IWebView2WebView4 | Microsoft Docs"  
[ReferenceWin3208190Iwebview2webviewAddDocumentstatechanged]: ./reference/win32/0-8-190/iwebview2webview.md#add_documentstatechanged "add_DocumentStateChanged - interface IWebView2WebView | Microsoft Docs"  
[ReferenceWin3208190Iwebview2webview4Addremoteobject]: ./reference/win32/0-8-190/iwebview2webview4.md#addremoteobject "AddRemoteObject - interface IWebView2WebView4 | Microsoft Docs"  
[ReferenceWin3208190Iwebview2webview5AddWebresourcerequested]: ./reference/win32/0-8-190/iwebview2webview5.md#add_webresourcerequested "add_WebResourceRequested - interface IWebView2WebView5 | Microsoft Docs"  
[ReferenceWin3208190Iwebview2webview5Addwebresourcerequestedfilter]: ./reference/win32/0-8-190/iwebview2webview5.md#addwebresourcerequestedfilter "AddWebResourceRequestedFilter - interface IWebView2WebView5 | Microsoft Docs"  
[ReferenceWin3208190Iwebview2webview5GetContainsfullscreenelement]: ./reference/win32/0-8-190/iwebview2webview5.md#get_containsfullscreenelement "get_ContainsFullScreenElement - interface IWebView2WebView5 | Microsoft Docs"  
[ReferenceWin3208190Iwebview2webview5Removewebresourcerequestedfilter]: ./reference/win32/0-8-190/iwebview2webview5.md#removewebresourcerequestedfilter "RemoveWebResourceRequestedFilter - interface IWebView2WebView5 | Microsoft Docs"  
[ReferenceWin3208190WebView2IdlCreatewebview2environmentwithdetails]:  ./reference/win32/0-8-190/webview2-idl.md#createwebview2environmentwithdetails "CreateWebView2EnvironmentWithDetails - Globals | Microsoft Docs"  

[ReferenceWin3209430Icorewebview2]: ./reference/win32/0-9-430/icorewebview2.md "interface ICoreWebView2 | Microsoft Docs"  
[ReferenceWin3209430Icorewebview2acceleratorkeypressedeventargsGetHandled]: ./reference/win32/0-9-430/icorewebview2acceleratorkeypressedeventargs.md#get_handled "get_Handled - interface ICoreWebView2AcceleratorKeyPressedEventArgs | Microsoft Docs"  
[ReferenceWin3209430Icorewebview2AddContentloading]: ./reference/win32/0-9-430/icorewebview2.md#add_contentloading "add_ContentLoading - interface ICoreWebView2 | Microsoft Docs"  
[ReferenceWin3209430Icorewebview2AddHistorychanged]: ./reference/win32/0-9-430/icorewebview2.md#add_historychanged "add_HistoryChanged - interface ICoreWebView2 | Microsoft Docs"  
[ReferenceWin3209430Icorewebview2Addremoteobject]: ./reference/win32/0-9-430/icorewebview2.md#addremoteobject "AddRemoteObject - interface ICoreWebView2 | Microsoft Docs"  
[ReferenceWin3209430Icorewebview2AddSourcechanged]: ./reference/win32/0-9-430/icorewebview2.md#add_sourcechanged "add_SourceChanged - interface ICoreWebView2 | Microsoft Docs"  
[ReferenceWin3209430Icorewebview2AddWindowcloserequested]: ./reference/win32/0-9-430/icorewebview2.md#add_windowcloserequested "add_WindowCloseRequested - interface ICoreWebView2 | Microsoft Docs"  
[ReferenceWin3209430Icorewebview2CoreWebview2ScriptDialogKind]: ./reference/win32/0-9-430/icorewebview2.md#core_webview2_script_dialog_kind "CORE_WEBVIEW2_SCRIPT_DIALOG_KIND - interface ICoreWebView2 | Microsoft Docs"  
[ReferenceWin3209430Icorewebview2devtoolsprotocoleventreceiver]: ./reference/win32/0-9-430/icorewebview2devtoolsprotocoleventreceiver.md "interface ICoreWebView2DevToolsProtocolEventReceiver | Microsoft Docs"  
[ReferenceWin3209430Icorewebview2devtoolsprotocoleventreceiverAddDevtoolsprotocoleventreceived]: ./reference/win32/0-9-430/icorewebview2devtoolsprotocoleventreceiver.md#add_devtoolsprotocoleventreceived "add_DevToolsProtocolEventReceived - interface ICoreWebView2DevToolsProtocolEventReceiver | Microsoft Docs"  
[ReferenceWin3209430Icorewebview2devtoolsprotocoleventreceiverRemoveDevtoolsprotocoleventreceived]: ./reference/win32/0-9-430/icorewebview2devtoolsprotocoleventreceiver.md#remove_devtoolsprotocoleventreceived "remove_DevToolsProtocolEventReceived - interface ICoreWebView2DevToolsProtocolEventReceiver | Microsoft Docs"  
[ReferenceWin3209430Icorewebview2environmentGetBrowserversioninfo]: ./reference/win32/0-9-430/icorewebview2environment.md#get_browserversioninfo "get_BrowserVersionInfo - interface ICoreWebView2Environment | Microsoft Docs"  
[ReferenceWin3209430Icorewebview2host]: ./reference/win32/0-9-430/icorewebview2host.md "interface ICoreWebView2Host | Microsoft Docs"  
[ReferenceWin3209430Webview2IdlGetcorewebview2browserversioninfo]: ./reference/win32/0-9-430/webview2-idl.md#getcorewebview2browserversioninfo "GetCoreWebView2BrowserVersionInfo - Globals | Microsoft Docs"  
[ReferenceWin3209430Icorewebview2hostGetZoomfactor]: ./reference/win32/0-9-430/icorewebview2host.md#get_zoomfactor "get_ZoomFactor - interface ICoreWebView2Host | Microsoft Docs"  
[ReferenceWin3209430Icorewebview2hostNotifyparentwindowpositionchanged]: ./reference/win32/0-9-430/icorewebview2host.md#notifyparentwindowpositionchanged "NotifyParentWindowPositionChanged - interface ICoreWebView2Host | Microsoft Docs"  
[ReferenceWin3209430Icorewebview2hostPutZoomfactor]: ./reference/win32/0-9-430/icorewebview2host.md#put_zoomfactor "put_ZoomFactor - interface ICoreWebView2Host | Microsoft Docs"  
[ReferenceWin3209430Icorewebview2hostSetboundsandzoomfactor]: ./reference/win32/0-9-430/icorewebview2host.md#setboundsandzoomfactor "SetBoundsAndZoomFactor - interface ICoreWebView2Host | Microsoft Docs"  
[ReferenceWin3209430Icorewebview2httpheaderscollectioniteratorGetHascurrentheader]: ./reference/win32/0-9-430/icorewebview2httpheaderscollectioniterator.md#get_hascurrentheader "get_HasCurrentHeader - interface ICoreWebView2HttpHeadersCollectionIterator | Microsoft Docs"  
[ReferenceWin3209430Icorewebview2httprequestheadersGetheaders]: ./reference/win32/0-9-430/icorewebview2httprequestheaders.md#getheaders "GetHeaders - interface ICoreWebView2HttpRequestHeaders | Microsoft Docs"  
[ReferenceWin3209430Icorewebview2httpresponseheadersGetheader]: ./reference/win32/0-9-430/icorewebview2httpresponseheaders.md#getheader "GetHeader - interface ICoreWebView2HttpResponseHeaders | Microsoft Docs"  
[ReferenceWin3209430Icorewebview2Removeremoteobject]: ./reference/win32/0-9-430/icorewebview2.md#removeremoteobject "RemoveRemoteObject - interface ICoreWebView2 | Microsoft Docs"  
[ReferenceWin3209430Icorewebview2settingsGetAreremoteobjectsallowed]: ./reference/win32/0-9-430/icorewebview2settings.md#get_areremoteobjectsallowed "get_AreRemoteObjectsAllowed - interface ICoreWebView2Settings | Microsoft Docs"  
[ReferenceWin3209430Icorewebview2settingsGetIszoomcontrolenabled]: ./reference/win32/0-9-430/icorewebview2settings.md#get_iszoomcontrolenabled "get_IsZoomControlEnabled - interface ICoreWebView2Settings | Microsoft Docs"  
[ReferenceWin3209430Icorewebview2webmessagereceivedeventargsTrygetwebmessageasstring]: ./reference/win32/0-9-430/icorewebview2webmessagereceivedeventargs.md#trygetwebmessageasstring "TryGetWebMessageAsString - interface ICoreWebView2WebMessageReceivedEventArgs | Microsoft Docs"  

[ReferenceWin3209488Icorewebview2AddFramenavigationcompleted]: ./reference/win32/0-9-488/icorewebview2.md#add_framenavigationcompleted "add_FrameNavigationCompleted - interface ICoreWebView2 | Microsoft Docs"  
[ReferenceWin3209488Icorewebview2Addhostobjecttoscript]: ./reference/win32/0-9-488/icorewebview2.md#addhostobjecttoscript "AddHostObjectToScript - interface ICoreWebView2 | Microsoft Docs"  
[ReferenceWin3209488Icorewebview2AddNewwindowrequested]: ./reference/win32/0-9-488/icorewebview2.md#add_newwindowrequested "add_NewWindowRequested - interface ICoreWebView2 | Microsoft Docs"  
[ReferenceWin3209488Icorewebview2environmentGetBrowserversionstring]: ./reference/win32/0-9-488/icorewebview2environment.md#get_browserversionstring " | Microsoft Docs"  
[ReferenceWin3209488Icorewebview2environmentoptions]: ./reference/win32/0-9-488/icorewebview2environmentoptions.md "interface ICoreWebView2EnvironmentOptions | Microsoft Docs"  
[ReferenceWin3209488Icorewebview2experimentalcompositioncontroller]: ./reference/win32/0-9-488/icorewebview2experimentalcompositioncontroller.md "interface ICoreWebView2ExperimentalCompositionController | Microsoft Docs"  
[ReferenceWin3209488Icorewebview2experimentalcursorchangedeventhandler]: ./reference/win32/0-9-488/icorewebview2experimentalcursorchangedeventhandler.md "interface ICoreWebView2ExperimentalCursorChangedEventHandler | Microsoft Docs"  
[ReferenceWin3209488Icorewebview2experimentalpointerinfo]: ./reference/win32/0-9-488/icorewebview2experimentalpointerinfo.md "interface ICoreWebView2ExperimentalPointerInfo | Microsoft Docs"  
[ReferenceWin3209488Icorewebview2Removehostobjectfromscript]: ./reference/win32/0-9-488/icorewebview2.md#removehostobjectfromscript "RemoveHostObjectFromScript - interface ICoreWebView2 | Microsoft Docs"  
[ReferenceWin3209488Icorewebview2settingsGetAreremoteobjectsallowed]: ./reference/win32/0-9-488/icorewebview2settings.md#get_areremoteobjectsallowed "get_AreRemoteObjectsAllowed - interface ICoreWebView2Settings | Microsoft Docs"  
[ReferenceWin3209488Icorewebview2settingsGetIsbuiltinerrorpageenabled]: ./reference/win32/0-9-488/icorewebview2settings.md#get_isbuiltinerrorpageenabled " | Microsoft Docs"  
[ReferenceWin3209488Webview2IdlCreatecorewebview2environmentwithdetails]: ./reference/win32/0-9-488/webview2-idl.md#createcorewebview2environmentwithdetails "CreateCoreWebView2EnvironmentWithDetails - Globals | Microsoft Docs"  
[ReferenceWin3209488Webview2IdlCreatecorewebview2environmentwithoptions]: ./reference/win32/0-9-488/webview2-idl.md#createcorewebview2environmentwithoptions "CreateCoreWebView2EnvironmentWithOptions - Globals | Microsoft Docs"  
[ReferenceWin3209488Webview2IdlGetavailablecorewebview2browserversionstring]: ./reference/win32/0-9-488/webview2-idl.md#getavailablecorewebview2browserversionstring "GetAvailableCoreWebView2BrowserVersionString - Globals | Microsoft Docs"  

[ReferenceDotnetReference]: /dotnet/api/microsoft.web.webview2.core "Microsoft.Web.WebView2.Core Namespace | Microsoft Docs"  
[ReferenceWpfReference]: /dotnet/api/microsoft.web.webview2.wpf "Microsoft.Web.WebView2.Wpf Namespace | Microsoft Docs"  
[ReferenceWinformsReference]: /dotnet/api/microsoft.web.webview2.winforms "Microsoft.Web.WebView2.WinForms Namespace | Microsoft Docs"  


[ReferenceDotnetMicrosoftWebWebview2CoreCorewebview2environment]: /dotnet/api/microsoft.web.webview2.core.corewebview2environment "CoreWebView2Environment Class (Microsoft.Web.WebView2.Core) | Microsoft Docs"  
[ReferenceDotnetMicrosoftWebWebview2CoreCorewebview2environmentComparebrowserversions]: /dotnet/api/microsoft.web.webview2.core.corewebview2environment.comparebrowserversions "CoreWebView2Environment.CompareBrowserVersions(String, String) Method (Microsoft.Web.WebView2.Core) | Microsoft Docs"
[ReferenceDotnetMicrosoftWebWebview2CoreCorewebview2environmentGetavailablebrowserversionstring]: /dotnet/api/microsoft.web.webview2.core.corewebview2environment.getavailablebrowserversionstring "CoreWebView2Environment.GetAvailableBrowserVersionString(String) Method (Microsoft.Web.WebView2.Core) | Microsoft Docs"  
[ReferenceDotnetMicrosoftWebWebview2CoreCorewebview2Newwindowrequested]: /dotnet/api/microsoft.web.webview2.core.corewebview2.newwindowrequested "CoreWebView2.NewWindowRequested Event (Microsoft.Web.WebView2.Core) | Microsoft Docs"  
[ReferenceDotnetMicrosoftWebWebview2CoreCorewebview2Permissionrequested]: /dotnet/api/microsoft.web.webview2.core.corewebview2.permissionrequested "CoreWebView2.PermissionRequested Event (Microsoft.Web.WebView2.Core) | Microsoft Docs"  
[ReferenceDotnetMicrosoftWebWebview2CoreCorewebview2Scriptdialogopening]: /dotnet/api/microsoft.web.webview2.core.corewebview2.scriptdialogopening "CoreWebView2.ScriptDialogOpening Event (Microsoft.Web.WebView2.Core) | Microsoft Docs"  
[ReferenceDotnetMicrosoftWebWebview2CoreCorewebview2Webresourcerequested]: /dotnet/api/microsoft.web.webview2.core.corewebview2.webresourcerequested "CoreWebView2.WebResourceRequested Event (Microsoft.Web.WebView2.Core) | Microsoft Docs"  
[ReferenceDotnetMicrosoftWebWebview2CoreCorewebview2httprequestheaders]: /dotnet/api/microsoft.web.webview2.core.corewebview2httprequestheaders "CoreWebView2HttpRequestHeaders Class (Microsoft.Web.WebView2.Core) | Microsoft Docs"  
[ReferenceDotnetMicrosoftWebWebview2CoreCorewebview2httpresponseheaders]: /dotnet/api/microsoft.web.webview2.core.corewebview2httpresponseheaders.md "CoreWebView2HttpResponseHeaders Class (Microsoft.Web.WebView2.Core) | Microsoft Docs"  

[ReferenceWin3209538Icorewebview2Addhostobjecttoscript]: ./reference/win32/0-9-538/icorewebview2.md#addhostobjecttoscript "AddHostObjectToScript - interface ICoreWebView2 | Microsoft Docs"  
[ReferenceWin3209538Icorewebview2experimentalAddWebresourceresponsereceived]: ./reference/win32/0-9-538/icorewebview2experimental.md#add_webresourceresponsereceived "add_WebResourceResponseReceived - interface ICoreWebView2Experimental | Microsoft Docs"  
[ReferenceWin3209538Icorewebview2experimentaloptionsGetIssinglesignonusingosprimaryaccountenabled]: ./reference/win32/0-9-538/icorewebview2experimentalenvironmentoptions.md#get_issinglesignonusingosprimaryaccountenabled "get_IsSingleSignOnUsingOSPrimaryAccountEnabled - interface ICoreWebView2ExperimentalEnvironmentOptions | Microsoft Docs"  
[ReferenceWin3209538Icorewebview2experimentalnewwindowrequestedeventargsGetWindowfeatures]: ./reference/win32/0-9-538/icorewebview2experimentalnewwindowrequestedeventargs.md#get_windowfeatures "get_WindowFeatures - interface ICoreWebView2ExperimentalNewWindowRequestedEventArgs | Microsoft Docs"  
[ReferenceWin3209538Icorewebview2experimentalwindowfeatures]: ./reference/win32/0-9-538/icorewebview2experimentalwindowfeatures.md "interface ICoreWebView2ExperimentalWindowFeatures | Microsoft Docs"  
[ReferenceWin3209538Icorewebview2newwindowrequestedeventargsGetIsuserinitiated]: ./reference/win32/0-9-538/icorewebview2newwindowrequestedeventargs.md#get_isuserinitiated "get_IsUserInitiated interface ICoreWebView2NewWindowRequestedEventArgs | Microsoft Docs"  
[ReferenceWin3209538Icorewebview2settingsGetArehostobjectsallowed]: ./reference/win32/0-9-538/icorewebview2settings.md#get_arehostobjectsallowed "get_AreHostObjectsAllowed - interface ICoreWebView2Settings | Microsoft Docs"  
[ReferenceWin3209538IdlCreatecorewebview2environmentwithoptions]: ./reference/win32/0-9-538/webview2-idl.md#createcorewebview2environmentwithoptions "CreateCoreWebView2EnvironmentWithOptions - Globals | Microsoft Docs"  

[ReferenceWin3209622Icorewebview2environmentoptionsGetAllowsinglesignonusingosprimaryaccount]: ./reference/win32/0-9-622/icorewebview2environmentoptions.md#get_allowsinglesignonusingosprimaryaccount "get_AllowSingleSignOnUsingOSPrimaryAccount - interface ICoreWebView2EnvironmentOptions | Microsoft Docs"  
[ReferenceWin3209622Icorewebview2environmentoptionsPutAdditionalbrowserarguments]: ./reference/win32/0-9-622/icorewebview2environmentoptions.md#put_additionalbrowserarguments "put_AdditionalBrowserArguments - interface ICoreWebView2EnvironmentOptions | Microsoft Docs"  
[ReferenceWin3209622Icorewebview2experimentalenvironment]: ./reference/win32/0-9-622/icorewebview2experimentalenvironment.md "interface ICoreWebView2ExperimentalEnvironment | Microsoft Docs"  
[ReferenceWin3209622Icorewebview2newwindowrequestedeventargsGetWindowfeatures]: ./reference/win32/0-9-622/icorewebview2newwindowrequestedeventargs.md#get_windowfeatures "get_WindowFeatures - interface ICoreWebView2NewWindowRequestedEventArgs | Microsoft Docs"  
[ReferenceWin3209622Icorewebview2windowfeatures]: ./reference/win32/0-9-622/icorewebview2windowfeatures.md "interface ICoreWebView2WindowFeatures | Microsoft Docs"  
[ReferenceWin3209622IdlCreatecorewebview2environmentwithoptions]: ./reference/win32/0-9-622/webview2-idl.md#createcorewebview2environmentwithoptions "CreateCoreWebView2EnvironmentWithOptions - Globals | Microsoft Edge"  

[DeployedgeMicrosoftEdgePolicies]: /deployedge/microsoft-edge-policies "Microsoft Edge - Policies | Microsoft Docs"  

[DotnetStandardAssemblyStrongNamed]: /dotnet/standard/assembly/strong-named "Strong-named assemblies | Microsoft Docs"  

[GithubMicrosoftedgeWebviewfeedbackIssue1]:  https://github.com/MicrosoftEdge/WebViewFeedback/issues/1 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 1"  
[GithubMicrosoftedgeWebviewfeedbackIssue12]:  https://github.com/MicrosoftEdge/WebViewFeedback/issues/12 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 12"  
[GithubMicrosoftedgeWebviewfeedbackIssue13]:  https://github.com/MicrosoftEdge/WebViewFeedback/issues/13 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 13"  
[GithubMicrosoftedgeWebviewfeedbackIssue14]:  https://github.com/MicrosoftEdge/WebViewFeedback/issues/14 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 14"  
[GithubMicrosoftedgeWebviewfeedbackIssue16]:  https://github.com/MicrosoftEdge/WebViewFeedback/issues/16 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 16"  
[GithubMicrosoftedgeWebviewfeedbackIssue17]:  https://github.com/MicrosoftEdge/WebViewFeedback/issues/17 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 17"  
[GithubMicrosoftedgeWebviewfeedbackIssue18]:  https://github.com/MicrosoftEdge/WebViewFeedback/issues/18 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 18"  
[GithubMicrosoftedgeWebviewfeedbackIssue19]:  https://github.com/MicrosoftEdge/WebViewFeedback/issues/19 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 19"  
[GithubMicrosoftedgeWebviewfeedbackIssue22]:  https://github.com/MicrosoftEdge/WebViewFeedback/issues/22 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 22"  
[GithubMicrosoftedgeWebviewfeedbackIssue27]:  https://github.com/MicrosoftEdge/WebViewFeedback/issues/27 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 27"  
[GithubMicrosoftedgeWebviewfeedbackIssue28]:  https://github.com/MicrosoftEdge/WebViewFeedback/issues/28 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 28"  
[GithubMicrosoftedgeWebviewfeedbackIssue30]:  https://github.com/MicrosoftEdge/WebViewFeedback/issues/30 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 30"  
[GithubMicrosoftedgeWebviewfeedbackIssue32]:  https://github.com/MicrosoftEdge/WebViewFeedback/issues/32 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 32"  
[GithubMicrosoftedgeWebviewfeedbackIssue36]:  https://github.com/MicrosoftEdge/WebViewFeedback/issues/36 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 36"  
[GithubMicrosoftedgeWebviewfeedbackIssue57]:  https://github.com/MicrosoftEdge/WebViewFeedback/issues/57 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 57"  
[GithubMicrosoftedgeWebviewfeedbackIssue70]:  https://github.com/MicrosoftEdge/WebViewFeedback/issues/70 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 70"  
[GithubMicrosoftedgeWebviewfeedbackIssue74]:  https://github.com/MicrosoftEdge/WebViewFeedback/issues/74 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 74"  
[GithubMicrosoftedgeWebviewfeedbackIssue95]:  https://github.com/MicrosoftEdge/WebViewFeedback/issues/95 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 95"  
[GithubMicrosoftedgeWebviewfeedbackIssue108]:  https://github.com/MicrosoftEdge/WebViewFeedback/issues/108 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 108"
[GithubMicrosoftedgeWebviewfeedbackIssue113]:  https://github.com/MicrosoftEdge/WebViewFeedback/issues/113 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 113"  
[GithubMicrosoftedgeWebviewfeedbackIssue119]:  https://github.com/MicrosoftEdge/WebViewFeedback/issues/119 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 119"
[GithubMicrosoftedgeWebviewfeedbackIssue131]:  https://github.com/MicrosoftEdge/WebViewFeedback/issues/131 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 131"
[GithubMicrosoftedgeWebviewfeedbackIssue148]:  https://github.com/MicrosoftEdge/WebViewFeedback/issues/148 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 148"  
[GithubMicrosoftedgeWebviewfeedbackIssue179]:  https://github.com/MicrosoftEdge/WebViewFeedback/issues/179 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 179"
[GithubMicrosoftedgeWebviewfeedbackIssue181]:  https://github.com/MicrosoftEdge/WebViewFeedback/issues/181 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 181"
[GithubMicrosoftedgeWebviewfeedbackIssue183]:  https://github.com/MicrosoftEdge/WebViewFeedback/issues/183 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 183"
[GithubMicrosoftedgeWebviewfeedbackIssue185]:  https://github.com/MicrosoftEdge/WebViewFeedback/issues/185 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 185"
[GithubMicrosoftedgeWebviewfeedbackIssue228]:  https://github.com/MicrosoftEdge/WebViewFeedback/issues/228 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 228"
[GithubMicrosoftedgeWebviewfeedbackIssue235]:  https://github.com/MicrosoftEdge/WebViewFeedback/issues/235 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 235"
[GithubMicrosoftedgeWebviewfeedbackIssue293]:  https://github.com/MicrosoftEdge/WebViewFeedback/issues/293 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 293"
[GithubMicrosoftedgeWebviewfeedbackIssue318]:  https://github.com/MicrosoftEdge/WebViewFeedback/issues/318 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 318"  

[GithubMicrosoftedgeWebview2samplesMain]: https://github.com/MicrosoftEdge/WebView2Samples "WebView2 Samples - MicrosoftEdge/WebView2Samples | GitHub"  
[GithubMicrosoftedgeWebview2samplesPr17]: https://github.com/MicrosoftEdge/WebView2Samples/pull/17 "Move project to use latest WebView2 SDK 0.9.430 - MicrosoftEdge/WebView2Samples | GitHub"  
[GithubMicrosoftedgeWebview2samplesApisample]: https://github.com/MicrosoftEdge/WebView2Samples/tree/master/SampleApps/WebView2APISample "WebView2 API Sample - MicrosoftEdge/WebView2Samples | GitHub"  

[NuGetGallery]:  https://www.nuget.org/packages/Microsoft.Web.WebView2 "NuGet Gallery | Microsoft.Web.WebView2"  
[NuGetGallery0.8.149]:  https://www.nuget.org/packages/Microsoft.Web.WebView2/0.8.149 "NuGet Gallery | Microsoft.Web.WebView2 v0.8.149"  
[NuGetGallery0.8.190]:  https://www.nuget.org/packages/Microsoft.Web.WebView2/0.8.190 "NuGet Gallery | Microsoft.Web.WebView2 v0.8.190"  
[NuGetGallery0.8.230]:  https://www.nuget.org/packages/Microsoft.Web.WebView2/0.8.230 "NuGet Gallery | Microsoft.Web.WebView2 v0.8.230"  
[NuGetGallery0.8.270]:  https://www.nuget.org/packages/Microsoft.Web.WebView2/0.8.270 "NuGet Gallery | Microsoft.Web.WebView2 v0.8.270"  
[NuGetGallery0.8.314]:  https://www.nuget.org/packages/Microsoft.Web.WebView2/0.8.314 "NuGet Gallery | Microsoft.Web.WebView2 v0.8.314"  
[NuGetGallery0.8.355]:  https://www.nuget.org/packages/Microsoft.Web.WebView2/0.8.355 "NuGet Gallery | Microsoft.Web.WebView2 v0.8.355"  
[NuGetGallery0.9.430]:  https://www.nuget.org/packages/Microsoft.Web.WebView2/0.9.430 "NuGet Gallery | Microsoft.Web.WebView2 v0.9.430"  
[NuGetGallery0.9.488]:  https://www.nuget.org/packages/Microsoft.Web.WebView2/0.9.488 "NuGet Gallery | Microsoft.Web.WebView2 v0.9.488"  
[NuGetGallery0.9.515-prerelease]:  https://www.nuget.org/packages/Microsoft.Web.WebView2/0.9.515-prerelease "NuGet Gallery | Microsoft.Web.WebView2 v0.9.515 prerelease"  
[NuGetGallery0.9.538]:  https://www.nuget.org/packages/Microsoft.Web.WebView2/0.9.538 "NuGet Gallery | Microsoft.Web.WebView2 v0.9.538"  
[NuGetGallery0.9.579]:  https://www.nuget.org/packages/Microsoft.Web.WebView2/0.9.579 "NuGet Gallery | Microsoft.Web.WebView2 v0.9.579"
[NuGetGallery0.9.622.11]:  https://www.nuget.org/packages/Microsoft.Web.WebView2/0.9.622.11 "NuGet Gallery | Microsoft.Web.WebView2 v0.9.622.11"
[NuGetGallery0.9.628-prerelease]:  https://www.nuget.org/packages/Microsoft.Web.WebView2/0.9.628-prerelease "NuGet Gallery | Microsoft.Web.WebView2 v0.9.628 prerelease"  
