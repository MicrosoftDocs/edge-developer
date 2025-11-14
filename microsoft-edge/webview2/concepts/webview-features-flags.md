---
title: WebView2 browser flags
description: Overview of browser flags (arguments, or switches) that affect the WebView2 control, for testing forthcoming features or diagnosing issues.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 11/10/2025
---
# WebView2 browser flags
<!-- lexicon:
use:     60
enable:  44
set:     19
present:  5
-->

One of the ways you can interact with Microsoft Edge WebView2 and impact behavior is by passing browser flags (arguments, or switches) to WebView2.  These browser flags are useful for testing forthcoming features, and for diagnosing issues.

For production apps, do not use these flags.  During development, if the flag is present, the behavior that's specified below results.

> [!WARNING]
> Apps in production shouldn't use WebView2 browser flags, because these flags might be removed or altered at any time, and aren't necessarily supported long-term.

Generally, the flags are owned by both Chromium and Microsoft Edge.  Chromium flags are not owned or controlled by Microsoft Edge, so Microsoft Edge doesn't have control over when or how the flags are removed or altered in their behavior.

You can set browser flags in your local device environment, or set browser flags programmatically through code.  Both approaches are described below.


<!-- ====================================================================== -->
## Setting browser flags in your local device environment

To test forthcoming features or to diagnose issues, we recommend using browser flags in your local device environment, via setting the `WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS` environment variable or via registry keys.  For more information, see the following Win32 API Reference: [CreateCoreWebView2EnvironmentWithOptions](/microsoft-edge/webview2/reference/win32/webview2-idl#createcorewebview2environmentwithoptions).


<!-- ====================================================================== -->
## Setting browser flags programmatically through code

Instead of setting browser flags in your local device environment, an alternative approach is to set browser flags programmatically, by passing the browser flags as the `AdditionalBrowserArguments` property of `CoreWebView2EnvironmentOptions`.  If you set browser flags programmatically, be sure to remove the flags in code before shipping your app, to avoid accidentally shipping the flags in production.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2EnvironmentOptions` Class:
   * [CoreWebView2EnvironmentOptions.AdditionalBrowserArguments Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.additionalbrowserarguments)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2EnvironmentOptions` Class:
   * [CoreWebView2EnvironmentOptions.AdditionalBrowserArguments Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions#additionalbrowserarguments)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2EnvironmentOptions`:
   * [ICoreWebView2EnvironmentOptions::get_AdditionalBrowserArguments](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions#get_additionalbrowserarguments)
   * [ICoreWebView2EnvironmentOptions::put_AdditionalBrowserArguments](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions#put_additionalbrowserarguments)

See also Globals:
* [CreateCoreWebView2EnvironmentWithOptions](/microsoft-edge/webview2/reference/win32/webview2-idl#createcorewebview2environmentwithoptions)

---


<!-- ====================================================================== -->
## Available WebView2 browser flags

The following WebView2 browser flags are available for use during development.

For production apps, do not use these flags.  During development, if the flag is present, the behavior that's specified below results.

<!-- requirements:
During development, what is the result of this flag being present?  (In contrast to the norm which is that this flag is not present.)  Lead with verb that describes system result. |
Specify whether the flag takes a value.  If the flag takes a value, state the type of value, such as boolean (true|false), or string (such as server URL list).
If the flag takes a value other than true|false, give an example. -->
| Flag | Description |
|---|---|
| `accept-lang` | Specifies `Accept-Language` to send to servers and expose to JavaScript via the [Navigator.language](https://developer.mozilla.org/docs/Web/API/Navigator/language) DOM property.  The format is `language[-country]`, where `language` is the 2-letter code from ISO-639. |
| `allow-file-access-from-files` | Allows reading `file://` URIs from other `file://` URIs. |
| `allow-insecure-localhost` | Enables TLS/SSL errors on localhost to be ignored, so that no interstitial is done and no blocking of requests is done. |
| `allow-run-as-system` |  By default, the Edge WebView browser exits if launched as System (launching as System is not recommended).  This flag bypasses that check, so that even if the Edge WebView browser is launched as System, the Edge WebView browser doesn't exit. |
| `allow-running-insecure-content` | Enables insecure content in Cast Web Runtime.  This flag unblocks MSPs that serve content from HTTP sources. |
| `auto-open-devtools-for-tabs` | Makes Edge WebView auto-open the DevTools window for each tab.  For use by developers and by automation. |
| `AutofillReplaceCachedWebElementsByRendererIds` | Replaces cached web elements in AutofillAgent and FormTracker by their renderer IDs. |
| `autoplay-policy` | Command-line flag name to set the autoplay policy. |
| `BlockInsecurePrivateNetworkRequests` | When this feature is enabled, private network requests that are initiated from non-secure contexts in the `public` address space are blocked. |
| `block-new-web-contents` | Takes a `true` or `false` value.  If `true`, makes all pop-ups and calls to `window.open` fail.  If `false`, pop-ups and calls to `window.open` are honored. |
| `BreakoutBoxPreferCaptureTimestampInVideoFrames` | Reverts the behavior of the `Timestamp` property of the `CoreWebView2Texture` class to match legacy behavior of WebView2 Runtime version 124 and earlier. |
| `disable-background-timer-throttling` | Disables task throttling of timer tasks from background pages. |
| `disable-domain-action-user-agent-override` | Disables the per-domain User Agent override from the Domain Actions feature. |
| `disable-gpu` | Disables GPU hardware acceleration.  If a software renderer isn't in place, the GPU process doesn't launch. |
| `disable-gpu-driver-bug-workarounds` | Disables workarounds for various GPU driver bugs. |
| `disable-site-isolation-trials` | Disables site isolation. |
| `disable-web-security` | Disables cross-origin policy and doesn't enforce the same-origin policy.  Use for website testing only. |
| `disk-cache-size` | Forces the maximum disk space to be used by the disk cache, in bytes. |
| `do-not-de-elevate` | Prevents de-elevation of the WebView2 on launch.  Used after de-elevating, to prevent infinite loops. |
| `edge-webview-debugging-script` | Runs `PostWebMessage` script asynchronously. |
| `edge-webview-enable-mojo-ipcz` | Enables MojoIpcz (mojo-ipcz) for apps that use WebView2. |
| `edge-webview-foreground-boost-opt-in` | Opts-in to foreground boost. |
| `edge-webview-foreground-boost-opt-out` | Opts-out of foreground boost. |
| `edge-webview-force-personal-context` | Forces Edge WebView browser processes to run in WIP personal context. |
| `edge-webview-interactive-dragging` | Enables pointer events and focus events to occur on elements that have the `--app-region: drag` attribute. Drag elements are interactive by default. |
| `edge-webview-disable-interactive-dragging` | Disables pointer events and focus events from occuring on elements that have the `--app-region: drag` attribute. If this flag isn't set, drag elements are interactive by default. |
| `edge-webview-is-background` | Indicates that WebView is being launched in the background. |
| `edge-webview-no-dpi-workaround` | Disables the "DPI awareness app compatibility shim" workaround, which launches Edge WebView browser process via a shell, so that the process doesn't inherit the "app compat" shim. |
| `edge-webview-run-with-package-id` | Runs WebView processes with a package identity (package ID) for a bridged Desktop app. |
| `edge-webview-run-without-package-id` | Runs WebView processes without a package identity (package ID) for a bridged Desktop app. |
| `embedded-browser-webview-dpi-awareness` | Sets the DPI awareness level of the server-side processes. |
| `enable-aggressive-domstorage-flushing` | Enables aggressive flushing of DOM Storage, to minimize data loss. |
| `enable-experimental-web-platform-features` | Enables Web Platform features that are in development. |
| `enable-logging` | Enable logging at the error level. |
| `force-color-profile` | Force all monitors to be treated as though they have the specified color profile.  Valid values: `srgb`, `generic-rgb`. |
| `force-device-scale-factor` | Overrides the device scale factor for the Edge WebView browser UI and the contents. |
| `force-fieldtrials` | Can be used to force field trials when testing changes locally.  The argument is a list of name/value pairs, separated by forward slashes.  If a trial name is prefixed with an asterisk, that trial will start activated.  Example: The following argument defines two trials, with the second one activated: `EdgeNow/Enable/*MaterialDesignNTP/Default/`.  This option can also be used by the browser process to send the list of trials to a non-browser process, using the same format. |
| `force-fieldtrial-params` | Can be used to force parameters of field trials when testing changes locally.  The argument is a parameter list of (key, value) pairs, prefixed by an associated (trial, group) pair.  For multiple (trial, group) pairs, use a comma separator. |
| `force-renderer-accessibility` | Whether to force renderer accessibility to be on, instead of enabling renderer accessibility on-demand when a screen reader is detected.  The `disable-renderer-accessibility` flag overrides this flag, if the `disable-renderer-accessibility` flag is present. |
| `HardwareMediaKeyHandling` | Enables handling of hardware media keys for controlling media. |
| `ignore-certificate-errors` | Ignores certificate-related errors. |
| `ignore-gpu-blocklist` | Whether to ignore the GPU blocklist. |
| `incognito` | Forces InPrivate (Incognito) mode even if the user data directory is specified by using the `--user-data-dir` flag. |
| `isolate-origins` | Require dedicated processes for a set of origins, specified as a comma-separated list.  Example: `--isolate-origins=https://www.foo.com,https://www.bar.com`. |
| `js-flags` | Specifies the flags passed to the JS engine.  Available flags: `scavenger_max_new_space_capacity_mb`: Specifies the maximum limit (in MB) for scavenger (minor) garbage collectors in the V8 JavaScript engine.  <br/>A lower scavenger memory limit reduces memory usage, and increases the frequency of running minor garbage collectors.  <br/>A higher scavenger memory limit increases memory usage, and reduces the frequency of running minor garbage collectors.  Example: `--js-flags=--scavenger_max_new_space_capacity_mb=8`. |
| `lang` | The language file that WebView2 want to try to open. Of the form language[-country] where language is the 2-letter code from ISO-639. |
| `log-net-log` | Enables saving net log events to a file.  If a value is given, that value is used as the directory path and file name.  If no value is given, the file is named `netlog.json`, and is placed in the user data directory. |
| `long-animation-frame-timing` |  Provides detailed timing for long animation frames, which are frames exceeding the standard 16.67ms duration (60fps).  This helps during debugging and performance analysis, to identify and optimize performance bottlenecks for animation-heavy applications. |
| `msAbydos` | Enables the "handwriting-to-text" experience. |
| `msAbydosGestureSupport` | Allows users to use gestures (such as the scratchout gesture) to delete text by using a pen.  Valid only if the `msAbydos` flag is enabled. |
| `msAbydosHandwritingAttr` | Whether the "handwriting-to-text" experience is enabled for input elements at the DOM level.  Valid only if the `msAbydos` flag is enabled. |
| `msAllowAmbientAuthInPrivateWebView2` | This flag is to be used along with the `msSingleSignOnForInPrivateWebView2` browser flag, to enable single sign-on (SSO) with default credential flow or ambient authentication flow. |
| `msEdgeDesignerDriverFix` | Enables getting content and automatically showing the Designer feature.  The Designer feature is not supported in WebView2. |
| `msEdgeDesignerUI` | Enables the Designer Shoreline App.  The Designer Shoreline App is not supported in WebView2. |
| `msEdgeDevToolsWdpRemoteDebugging` | Enables remote debugging.  See [Remote debugging WebView2 WinUI 2 (UWP) apps](../how-to/remote-debugging.md), [Remotely debug Windows devices](../../devtools/remote-debugging/windows.md). |
| `msEdgeFluentOverlayScrollbar` | Force-enables Fluent Overlay scrollbars, overriding whatever value `kFluentScrollbar` may hold at the moment. |
| `msEdgeHubAppDesigner` | Enables the Designer Shoreline App.  The Designer Shoreline App is not supported in WebView2. |
| `msEdgeWebViewApplyWebResourceRequestedFilterForOOPIFs` | Makes the `AddWebResourceRequestedFilter` method (including overloads) also apply to out-of-process iframes. <br/>.NET: [AddWebResourceRequestedFilter](/dotnet/api/microsoft.web.webview2.core.corewebview2.addwebresourcerequestedfilter) <br/>WinRT: [AddWebResourceRequestedFilter](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#addwebresourcerequestedfilter) <br/>Win32: [AddWebResourceRequestedFilterWithRequestSourceKinds](/microsoft-edge/webview2/reference/win32/icorewebview2_22#addwebresourcerequestedfilterwithrequestsourcekinds) |
| `msEnhancedTextContrast` | Improves text contrast enhancement and gamma correction to match the quality and clarity of other native Windows applications.  When this flag is used, font rendering respects user ClearType Tuner settings when applying text contrast enhancement and gamma correction. |
| `msEnhancedTrackingPreventionEnabled` | Enables native privacy protection features, such as blocking cookies and web requests that reside in domains that are known to be tracking domains. |
| `msFloatyMode` | Takes a `true` or `false` value.  If `true`, enables the Floaty feature.  If `false`, disables the Floaty feature.  Use this flag to disable the Floaty feature, because WebView doesn't support browser retention experiments. |
| `msFloatyShouldHonorIndiaHoldout` | Takes a `true` or `false` value.  If `true`, honors the India holdout group.  If `false`, disables the Floaty feature that's enabled if the user is part of the India holdout group, because WebView doesn't support browser retention experiments. |
| `msOverlayScrollbarWinStyle` | Whether the users can change between overlay and non-overlay modes for Fluent scrollbars. |
| `msPageInteractionManagerWebview2` | By default, the [Page Interaction Restriction Manager](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/PageInteractionRestrictionManager/explainer.md) API is disabled for WebView2.  If an app needs to enable configuration of this API in WebView2, the app must enable this flag. |
| `msPdfEnableAsPreview` | This features enables the PDF viewer to launch with a minimal toolbar and in read-only preview mode. |
| `msSingleSignOnForInPrivateWebView2` | This flag enables the single sign-on (SSO) flow for InPrivate (Incognito) sessions of WebView2.  Enables browser-based SSO in InPrivate (Incognito) mode. |
| `msSingleSignOnOSForPrimaryAccountIsShared` | Allows implicit sign-in to Microsoft webpages using any account, by using the information from the primary OS account. |
| `msSmartScreenProtection` | Makes SmartScreen protection available. |
| `msUseSpellCheckCorrectionsCard` | Causes a corrections card UI to be shown when the user clicks a misspelled word. |
| `msWebView2BrowserHitTransparent` | Causes mouse and keyboard events to pass through the WebView2 control to the underlying app, to allow the app to handle these events instead of the WebView2 control handling the events.  When this flag is not enabled, the WebView2 control handles mouse and keyboard events; the events don't pass through to the underlying app.  This flag allows testing how the app behaves when the WebView2 control doesn't intercept input events, for scenarios where the app needs to handle input events directly.  This flag doesn't take a value.  This flag might cause the app to crash or freeze.|
| `msWebView2CancelInitialNavigation` | Cancels the initial navigation in WebView2, to improve startup performance. |
| `msWebView2CodeCache` | Makes JavaScript resources that are loaded in a WebView2 app via `SetVirtualHostNameToFolderMapping` or `add_WebResourceRequested` eligible for bytecode caching, which should speed up the third and subsequent loads.  This feature also enables bytecode caching for any other components that use the DevTools network interception mechanism to provide custom responses; see [Custom management of network requests](..\how-to\webresourcerequested.md). |
| `msWebView2EnableDownloadContentInWebResourceResponseReceived` | Allows responses of navigations that become downloads to be available in `WebResourceResponseReceived`. |
| `msWebView2EnableDraggableRegions` | Takes a `true` or `false` value.  If `true`, enables webpages within WebView2 make use of the `app-region: drag\|nodrag` CSS style, which causes elements with that style to behave like a titlebar.  If `false`, or without this flag, the `app-region: drag\|nodrag` CSS style has no effect. |
| `msWebView2NativeEventDispatch` | Uses a native mojo connection to dispatch internal events, such as web messages to a renderer process. |
| `msWebView2SimulateMemoryPressureWhenInactive` | Simulates memory pressure for an inactive WebView. |
| `msWebView2TextureStream` | Allows streaming captured or composed video frames to the WebView2 control, where JavaScript can render or otherwise interact with the frames via W3C standard [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model) APIs, including the [Video Embed element](https://developer.mozilla.org/docs/Web/HTML/Element/video) and [MediaStream](https://developer.mozilla.org/docs/Web/API/MediaStream). |
| `msWebView2TreatAppSuspendAsDeviceSuspend` | When all WebViews are suspended, makes WebView2 treat the app as if the device is suspended, and pauses all delayed tasks and timers. |
| `no-proxy-server` | Overrides any other proxy server flags that are passed. |
| `net-log-capture-mode` | Sets the granularity of events to capture in the network log.  Valid values: `Default`, `IncludeSensitive`, `Everything`. |
| `no-network-profile-warning` | Causes the browser to warn if the UDF is on a network share.  This flag is only supported on Windows; this flag is ignored on other platforms. |
| `no-sandbox` | Disables the sandbox for all process types that are normally sandboxed.  Meant to be used as a browser-level flag for testing purposes only. |
| `no-first-run` | Skips First-Run tasks, regardless of whether it's actually the First Run, and skips displaying the What's New page.  This flag is overridden by `kForceFirstRun` (for the First-Run Experience (FRE)) and by `kForceWhatsNew` (for displaying What's New).  This flag doesn't drop the First Run sentinel, and thus doesn't prevent the First-Run experience from occurring the next time the Edge WebView browser is launched without this flag.  This flag doesn't update the last What's New milestone, so doesn't prevent What's New from being displayed the next time the Edge WebView browser is launched without this flag. |
| `PartitionedCookies` | Enables sites to opt-in to having their cookies partitioned by the top-level site by using the `Partitioned` attribute.  Partitioned cookies are only sent when the browser is on the same top-level site that it was on when the cookie was set. |
| `proxy-auto-detect` | Forces proxy auto-detection. |
| `proxy-bypass-list` | A list of hosts for which proxy settings are bypassed; the specified hosts then use direct connections instead.  This flag is ignored unless `--proxy-server` is also specified.  Multiple hosts can be supplied as a comma-separated list. |
| `proxy-server` | A proxy server that overrides system settings.  This flag only affects HTTP and HTTPS requests. |
| `remote-allow-origins` | Enables web socket connections from the specified origins only.  The `*` wildcard allows any origin. |
| `remote-debugging-port` | Enables remote debugging over HTTP on the specified port. |
| `RendererAppContainer` | Enables Renderer `AppContainer`. |
| `Restart` | Indicates that Microsoft Edge WebView2 browser process was restarted (such as after a flag change).  Use this flag to ignore the launch when recording the `Launch.Mode2` metric. |
| `sdsm-state` | The "Super Duper Secure Mode" state.  Valid values: `off`, `basic`, `balanced`, `strict`. |
| `SharedArrayBuffer` | Indicates that a `SharedArrayBuffer` thread is present. |
| `SpareRendererForSitePerProcess` | Makes the Edge Webview spare renderer process try to always have a warm spare renderer process running for the most recently requested `BrowserContext`.  This feature is only consulted in site-per-process mode. |
| `ThirdPartyStoragePartitioning` | Enables partitioning of third-party storage, such as `IndexedDB` or `CacheStorage`, by the top-level site, to reduce fingerprinting. |
| `unsafely-treat-insecure-origin-as-secure` | Treats given (insecure) origins as secure origins.  Multiple origins can be specified, as a comma-separated list.  For the definition of secure contexts, see [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/), including the section [Is `origin` potentially trustworthy?](https://w3c.github.io/webappsec-secure-contexts/#is-origin-trustworthy).  Example: `--unsafely-treat-insecure-origin-as-secure=http://a.test,http://b.test`. |
| `use-fake-device-for-media-stream` | Uses a fake device for Media Stream to replace an actual camera and microphone. |
| `use-fake-ui-for-media-stream` | Bypasses the media stream infobar, by selecting the default device for media streams (such as WebRTC).  Works with `--use-fake-device-for-media-stream`.  Prefer using `--auto-accept-camera-and-microphone-capture` instead, which doesn't interact with screen capture, such as capturing a browser tab. |
| `use-system-proxy-resolver` | Uses WinHttp to resolve proxies instead of using WebView2's normal proxy resolution logic.  This flag is only supported in Windows. |
| `user-agent` | A string used to override the default user agent with a custom user agent. |
| `user-data-migrated` | Indicates that this process is the product of a relaunch following migration of user data. |
| `UseBackgroundNativeThreadPool` | Causes WebView2 ThreadPoolImpl to use a background ThreadGroup backed by a native thread pool implementation. |
| `UseNativeThreadPool` | Causes WebView2 `ThreadPoolImpl` to use a foreground `ThreadGroup` that's backed by a native thread pool implementation. |
| `V8Maglev` | Enables the Maglev compiler.  This only sets the V8 flag when manually overridden; otherwise, it defers to whatever the V8 default is. |

---


<!-- ====================================================================== -->
## See also

* [Introduction to Microsoft Edge WebView2](../index.md)
* [WebView2 API Reference](../webview2-api-reference.md) - API Reference links for additional platforms and languages, such as WinRT/C++ (COM).
