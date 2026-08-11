---
title: SDK 1.0.4015-prerelease, for Runtime 149 (May 11, 2026)
description: Release notes for Microsoft Edge WebView2 SDK 1.0.4015-prerelease.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 06/11/2026
---
# SDK 1.0.4015-prerelease, for Runtime 149 (May 11, 2026)

Release Date: May 11, 2026

[NuGet package for WebView2 SDK 1.0.4015-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.4015-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 149.0.4015.0 or later.


<!-- ====================================================================== -->
## Breaking change: `EnhancedSecurityModeLevel` replaced by `EnhancedSecurityModeState`

The `CoreWebView2Profile.EnhancedSecurityModeLevel` property and the `CoreWebView2EnhancedSecurityModeLevel` enum are deprecated and will be removed in a future release.  Replace all usage of these APIs in your WebView2 application, as follows.

The old property, `CoreWebView2Profile.EnhancedSecurityModeLevel`, controlled whether Enhanced Security Mode (ESM) is enabled or disabled for all WebView2 instances associated with a profile.  This property has been renamed to `EnhancedSecurityModeState`, to more clearly communicate the state of Enhanced Security Mode.

**Before this change:** The `CoreWebView2Profile.EnhancedSecurityModeLevel` property used the `CoreWebView2EnhancedSecurityModeLevel` enum with values `Off` and `Strict`.

**After this change:** The `CoreWebView2Profile.EnhancedSecurityModeState` property uses the `CoreWebView2EnhancedSecurityModeState` enum with values `Disabled` and `Enabled`:

* `CoreWebView2EnhancedSecurityModeState.Disabled` — Enhanced Security Mode is disabled.
   * Replaces `CoreWebView2EnhancedSecurityModeLevel.Off`.

* `CoreWebView2EnhancedSecurityModeState.Enabled` — Enhanced Security Mode is enabled.
   * Disables JavaScript Just-in-Time (JIT) compilation.
   * Enables additional operating system protections.
   * Replaces `CoreWebView2EnhancedSecurityModeLevel.Strict`.

See also:
* [Enhanced security mode state](#enhanced-security-mode-state), below.
* [[Breaking Change] `EnhancedSecurityModeLevel` replaced by `EnhancedSecurityModeState` (Issue #132)](https://github.com/MicrosoftEdge/WebView2Announcements/issues/132)


<!-- ====================================================================== -->
## Experimental APIs (Phase 1: Experimental in Prerelease)

The following APIs are in Phase 1: Experimental in Prerelease, and have been added in this Prerelease SDK.


<!-- ------------------------------ -->
#### Enhanced security mode state

The `EnhancedSecurityModeState` property on `CoreWebView2Profile` controls whether Enhanced Security Mode (ESM) is enabled or disabled for all WebView2 instances that are associated with a profile.

When enabled, Enhanced Security Mode disables JavaScript Just-in-Time (JIT) compilation and enables additional operating system protections, reducing the attack surface, at the cost of some JavaScript performance.

The default value is `Disabled`.  Changes apply immediately to new navigations; existing pages require a reload.

This setting does not persist, and resets when the profile is destroyed and recreated.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2EnhancedSecurityModeState Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2enhancedsecuritymodestate?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * `Disabled`
   * `Enabled`

* `CoreWebView2Profile` Class
   * [CoreWebView2Profile.EnhancedSecurityModeState Property](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.enhancedsecuritymodestate?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2EnhancedSecurityModeState Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2enhancedsecuritymodestate?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true)
   * `Disabled`
   * `Enabled`

* `CoreWebView2Profile` Class
   * [CoreWebView2Profile.EnhancedSecurityModeState Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#enhancedsecuritymodestate)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalProfile17](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile17?view=webview2-1.0.4015-prerelease&preserve-view=true)
  * [ICoreWebView2ExperimentalProfile17::get_EnhancedSecurityModeState](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile17?view=webview2-1.0.4015-prerelease&preserve-view=true#get_enhancedsecuritymodestate)
  * [ICoreWebView2ExperimentalProfile17::put_EnhancedSecurityModeState](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile17?view=webview2-1.0.4015-prerelease&preserve-view=true#put_enhancedsecuritymodestate)

* [COREWEBVIEW2_ENHANCED_SECURITY_MODE_STATE enum](/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.4015-prerelease&preserve-view=true#corewebview2_enhanced_security_mode_state)
  * `COREWEBVIEW2_ENHANCED_SECURITY_MODE_STATE_DISABLED`
  * `COREWEBVIEW2_ENHANCED_SECURITY_MODE_STATE_ENABLED`

---


<!-- ====================================================================== -->
## Promotions to Phase 2 (Stable in Prerelease)

The following APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, and are included in this Prerelease SDK.


<!-- ------------------------------ -->
#### Enable background processing and offline support (WebView2 Worker APIs)

The WebView2 Worker APIs allow host applications to interact with Web Workers to offload tasks from the main thread, improve responsiveness, and support background operations.  These Web Workers include Dedicated Workers, Shared Workers, and Service Workers.

These APIs provide:
* **Lifecycle Events:** Monitor creation and destruction of workers.
* **Messaging Interfaces:** Communicate with workers using `PostMessage` and `WebMessageReceived`; specifically:
   * `CoreWebView2ServiceWorker.PostWebMessageAsJson`
   * `CoreWebView2ServiceWorker.PostWebMessageAsString`
   * `CoreWebView2DedicatedWorker.PostWebMessageAsJson`
   * `CoreWebView2DedicatedWorker.PostWebMessageAsString`
   * `CoreWebView2ServiceWorker.WebMessageReceived`
   * `CoreWebView2DedicatedWorker.WebMessageReceived`
   * `chrome.webview.postMessage`
   * Not: `chrome.webview.postMessageWithAdditionalObjects`
* **Worker Management:** Query and retrieve worker registrations and instances.

Previous phase: [Enable background processing and offline support (WebView2 Worker APIs)](./1-0-3415-prerelease.md#enable-background-processing-and-offline-support-webview2-worker-apis) in _Prerelease SDK 1.0.3415-prerelease, for Runtime 140 (Jul. 14, 2025)_.

##### [.NET/C#](#tab/dotnetcsharp)

<!-- 1 -->
* `CoreWebView2` Class:
   * [CoreWebView2.DedicatedWorkerCreated Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.dedicatedworkercreated?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)

<!-- 2 -->
* [CoreWebView2DedicatedWorker Class](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworker?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2DedicatedWorker.DedicatedWorkerCreated Event](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworker.dedicatedworkercreated?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2DedicatedWorker.Destroying Event](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworker.destroying?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2DedicatedWorker.PostWebMessageAsJson Method](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworker.postwebmessageasjson?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2DedicatedWorker.PostWebMessageAsString Method](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworker.postwebmessageasstring?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2DedicatedWorker.ScriptUri Property](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworker.scripturi?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2DedicatedWorker.WebMessageReceived Event](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworker.webmessagereceived?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)

<!-- 3 -->
* [CoreWebView2DedicatedWorkerCreatedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworkercreatedeventargs?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2DedicatedWorkerCreatedEventArgs.OriginalSourceFrameInfo Property](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworkercreatedeventargs.originalsourceframeinfo?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2DedicatedWorkerCreatedEventArgs.Worker Property](/dotnet/api/microsoft.web.webview2.core.corewebview2dedicatedworkercreatedeventargs.worker?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)

<!-- 4 -->
* `CoreWebView2Frame` Class:
   * [CoreWebView2Frame.DedicatedWorkerCreated Event](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.dedicatedworkercreated?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)

<!-- 5 -->
* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.AreWebViewScriptApisEnabledForServiceWorkers Property](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.arewebviewscriptapisenabledforserviceworkers?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2Profile.ServiceWorkerManager Property](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.serviceworkermanager?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2Profile.SharedWorkerManager Property](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.sharedworkermanager?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)

<!-- 6 -->
* [CoreWebView2ServiceWorker Class](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworker?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorker.Destroying Event](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworker.destroying?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorker.PostWebMessageAsJson Method](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworker.postwebmessageasjson?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorker.PostWebMessageAsString Method](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworker.postwebmessageasstring?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorker.ScriptUri Property](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworker.scripturi?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorker.WebMessageReceived Event](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworker.webmessagereceived?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)

<!-- 7 -->
* [CoreWebView2ServiceWorkerActivatedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkeractivatedeventargs?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorkerActivatedEventArgs.ActiveServiceWorker Property](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkeractivatedeventargs.activeserviceworker?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)

<!-- 8 -->
* [CoreWebView2ServiceWorkerManager Class](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkermanager?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorkerManager.GetServiceWorkerRegistrationsAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkermanager.getserviceworkerregistrationsasync?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorkerManager.ServiceWorkerRegistered Event](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkermanager.serviceworkerregistered?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)

<!-- 9 -->
* [CoreWebView2ServiceWorkerRegisteredEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkerregisteredeventargs?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorkerRegisteredEventArgs.ServiceWorkerRegistration Property](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkerregisteredeventargs.serviceworkerregistration?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)

<!-- 10 -->
* [CoreWebView2ServiceWorkerRegistration Class](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkerregistration?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorkerRegistration.ActiveServiceWorker Property](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkerregistration.activeserviceworker?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorkerRegistration.Origin Property](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkerregistration.origin?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorkerRegistration.ScopeUri Property](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkerregistration.scopeuri?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorkerRegistration.ServiceWorkerActivated Event](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkerregistration.serviceworkeractivated?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorkerRegistration.TopLevelOrigin Property](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkerregistration.toplevelorigin?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorkerRegistration.Unregistering Event](/dotnet/api/microsoft.web.webview2.core.corewebview2serviceworkerregistration.unregistering?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)

<!-- 11 -->
* [CoreWebView2SharedWorker Class](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworker?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2SharedWorker.Destroying Event](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworker.destroying?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2SharedWorker.Origin Property](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworker.origin?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2SharedWorker.ScriptUri Property](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworker.scripturi?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2SharedWorker.TopLevelOrigin Property](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworker.toplevelorigin?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)

<!-- 12 -->
* [CoreWebView2SharedWorkerCreatedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworkercreatedeventargs?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2SharedWorkerCreatedEventArgs.Worker Property](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworkercreatedeventargs.worker?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)

<!-- 13 -->
* [CoreWebView2SharedWorkerManager Class](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworkermanager?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2SharedWorkerManager.GetSharedWorkersAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworkermanager.getsharedworkersasync?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2SharedWorkerManager.SharedWorkerCreated Event](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedworkermanager.sharedworkercreated?view=webview2-dotnet-1.0.4015-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

<!-- 1 -->
* `CoreWebView2` Class:
   * [CoreWebView2.DedicatedWorkerCreated Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#dedicatedworkercreated)

<!-- 2 -->
* [CoreWebView2DedicatedWorker Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworker?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2DedicatedWorker.DedicatedWorkerCreated Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworker?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#dedicatedworkercreated)
   * [CoreWebView2DedicatedWorker.Destroying Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworker?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#destroying)
   * [CoreWebView2DedicatedWorker.PostWebMessageAsJson Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworker?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#postwebmessageasjson)
   * [CoreWebView2DedicatedWorker.PostWebMessageAsString Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworker?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#postwebmessageasstring)
   * [CoreWebView2DedicatedWorker.ScriptUri Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworker?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#scripturi)
   * [CoreWebView2DedicatedWorker.WebMessageReceived Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworker?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#webmessagereceived)

<!-- 3 -->
* [CoreWebView2DedicatedWorkerCreatedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworkercreatedeventargs?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2DedicatedWorkerCreatedEventArgs.OriginalSourceFrameInfo Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworkercreatedeventargs?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#originalsourceframeinfo)
   * [CoreWebView2DedicatedWorkerCreatedEventArgs.Worker Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2dedicatedworkercreatedeventargs?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#worker)

<!-- 4 -->
* `CoreWebView2Frame` Class:
   * [CoreWebView2Frame.DedicatedWorkerCreated Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#dedicatedworkercreated)

<!-- 5 -->
* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.AreWebViewScriptApisEnabledForServiceWorkers Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#arewebviewscriptapisenabledforserviceworkers)
   * [CoreWebView2Profile.ServiceWorkerManager Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#serviceworkermanager)
   * [CoreWebView2Profile.SharedWorkerManager Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#sharedworkermanager)

<!-- 6 -->
* [CoreWebView2ServiceWorker Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworker?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorker.Destroying Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworker?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#destroying)
   * [CoreWebView2ServiceWorker.PostWebMessageAsJson Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworker?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#postwebmessageasjson)
   * [CoreWebView2ServiceWorker.PostWebMessageAsString Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworker?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#postwebmessageasstring)
   * [CoreWebView2ServiceWorker.ScriptUri Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworker?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#scripturi)
   * [CoreWebView2ServiceWorker.WebMessageReceived Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworker?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#webmessagereceived)

<!-- 7 -->
* [CoreWebView2ServiceWorkerActivatedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkeractivatedeventargs?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorkerActivatedEventArgs.ActiveServiceWorker Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkeractivatedeventargs?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#activeserviceworker)

<!-- 8 -->
* [CoreWebView2ServiceWorkerManager Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkermanager?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorkerManager.GetServiceWorkerRegistrationsAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkermanager?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#getserviceworkerregistrationsasync)
   * [CoreWebView2ServiceWorkerManager.ServiceWorkerRegistered Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkermanager?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#serviceworkerregistered)

<!-- 9 -->
* [CoreWebView2ServiceWorkerRegisteredEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkerregisteredeventargs?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorkerRegisteredEventArgs.ServiceWorkerRegistration Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkerregisteredeventargs?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#serviceworkerregistration)

<!-- 10 -->
* [CoreWebView2ServiceWorkerRegistration Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkerregistration?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2ServiceWorkerRegistration.ActiveServiceWorker Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkerregistration?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#activeserviceworker)
   * [CoreWebView2ServiceWorkerRegistration.Origin Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkerregistration?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#origin)
   * [CoreWebView2ServiceWorkerRegistration.ScopeUri Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkerregistration?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#scopeuri)
   * [CoreWebView2ServiceWorkerRegistration.ServiceWorkerActivated Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkerregistration?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#serviceworkeractivated)
   * [CoreWebView2ServiceWorkerRegistration.TopLevelOrigin Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkerregistration?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#toplevelorigin)
   * [CoreWebView2ServiceWorkerRegistration.Unregistering Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2serviceworkerregistration?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#unregistering)

<!-- 11 -->
* [CoreWebView2SharedWorker Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworker?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2SharedWorker.Destroying Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworker?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#destroying)
   * [CoreWebView2SharedWorker.Origin Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworker?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#origin)
   * [CoreWebView2SharedWorker.ScriptUri Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworker?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#scripturi)
   * [CoreWebView2SharedWorker.TopLevelOrigin Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworker?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#toplevelorigin)

<!-- 12 -->
* [CoreWebView2SharedWorkerCreatedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworkercreatedeventargs?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2SharedWorkerCreatedEventArgs.Worker Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworkercreatedeventargs?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#worker)

<!-- 13 -->
* [CoreWebView2SharedWorkerManager Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworkermanager?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true)
   * [CoreWebView2SharedWorkerManager.GetSharedWorkersAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworkermanager?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#getsharedworkersasync)
   * [CoreWebView2SharedWorkerManager.SharedWorkerCreated Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedworkermanager?view=webview2-winrt-1.0.4015-prerelease&preserve-view=true#sharedworkercreated)

##### [Win32/C++](#tab/win32cpp)

<!-- 1 -->
* [ICoreWebView2_29](/microsoft-edge/webview2/reference/win32/icorewebview2_29?view=webview2-1.0.4015-prerelease&preserve-view=true)
  * [ICoreWebView2_29::add_DedicatedWorkerCreated](/microsoft-edge/webview2/reference/win32/icorewebview2_29?view=webview2-1.0.4015-prerelease&preserve-view=true#add_dedicatedworkercreated)
  * [ICoreWebView2_29::remove_DedicatedWorkerCreated](/microsoft-edge/webview2/reference/win32/icorewebview2_29?view=webview2-1.0.4015-prerelease&preserve-view=true#remove_dedicatedworkercreated)

<!-- 2 -->
* [ICoreWebView2DedicatedWorker](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworker?view=webview2-1.0.4015-prerelease&preserve-view=true)
  * [ICoreWebView2DedicatedWorker::add_DedicatedWorkerCreated](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworker?view=webview2-1.0.4015-prerelease&preserve-view=true#add_dedicatedworkercreated)
  * [ICoreWebView2DedicatedWorker::add_Destroying](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworker?view=webview2-1.0.4015-prerelease&preserve-view=true#add_destroying)
  * [ICoreWebView2DedicatedWorker::add_WebMessageReceived](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworker?view=webview2-1.0.4015-prerelease&preserve-view=true#add_webmessagereceived)
  * [ICoreWebView2DedicatedWorker::get_ScriptUri](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworker?view=webview2-1.0.4015-prerelease&preserve-view=true#get_scripturi)
  * [ICoreWebView2DedicatedWorker::PostWebMessageAsJson](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworker?view=webview2-1.0.4015-prerelease&preserve-view=true#postwebmessageasjson)
  * [ICoreWebView2DedicatedWorker::PostWebMessageAsString](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworker?view=webview2-1.0.4015-prerelease&preserve-view=true#postwebmessageasstring)
  * [ICoreWebView2DedicatedWorker::remove_DedicatedWorkerCreated](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworker?view=webview2-1.0.4015-prerelease&preserve-view=true#remove_dedicatedworkercreated)
  * [ICoreWebView2DedicatedWorker::remove_Destroying](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworker?view=webview2-1.0.4015-prerelease&preserve-view=true#remove_destroying)
  * [ICoreWebView2DedicatedWorker::remove_WebMessageReceived](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworker?view=webview2-1.0.4015-prerelease&preserve-view=true#remove_webmessagereceived)

<!-- 3 -->
* [ICoreWebView2DedicatedWorkerCreatedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworkercreatedeventargs?view=webview2-1.0.4015-prerelease&preserve-view=true)
  * [ICoreWebView2DedicatedWorkerCreatedEventArgs::get_OriginalSourceFrameInfo](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworkercreatedeventargs?view=webview2-1.0.4015-prerelease&preserve-view=true#get_originalsourceframeinfo)
  * [ICoreWebView2DedicatedWorkerCreatedEventArgs::get_Worker](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworkercreatedeventargs?view=webview2-1.0.4015-prerelease&preserve-view=true#get_worker)

<!-- win32 only -->
* [ICoreWebView2DedicatedWorkerCreatedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworkercreatedeventhandler?view=webview2-1.0.4015-prerelease&preserve-view=true)

<!-- win32 only -->
* [ICoreWebView2DedicatedWorkerDedicatedWorkerCreatedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworkerdedicatedworkercreatedeventhandler?view=webview2-1.0.4015-prerelease&preserve-view=true)

<!-- win32 only -->
* [ICoreWebView2DedicatedWorkerDestroyingEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworkerdestroyingeventhandler?view=webview2-1.0.4015-prerelease&preserve-view=true)

<!-- win32 only -->
* [ICoreWebView2DedicatedWorkerWebMessageReceivedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2dedicatedworkerwebmessagereceivedeventhandler?view=webview2-1.0.4015-prerelease&preserve-view=true)

<!-- 4 -->
* [ICoreWebView2Frame8](/microsoft-edge/webview2/reference/win32/icorewebview2frame8?view=webview2-1.0.4015-prerelease&preserve-view=true)
  * [ICoreWebView2Frame8::add_DedicatedWorkerCreated](/microsoft-edge/webview2/reference/win32/icorewebview2frame8?view=webview2-1.0.4015-prerelease&preserve-view=true#add_dedicatedworkercreated)
  * [ICoreWebView2Frame8::remove_DedicatedWorkerCreated](/microsoft-edge/webview2/reference/win32/icorewebview2frame8?view=webview2-1.0.4015-prerelease&preserve-view=true#remove_dedicatedworkercreated)

<!-- win32 only -->
* [ICoreWebView2FrameDedicatedWorkerCreatedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2framededicatedworkercreatedeventhandler?view=webview2-1.0.4015-prerelease&preserve-view=true)

<!-- win32 only -->
* [ICoreWebView2GetServiceWorkerRegistrationsCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2getserviceworkerregistrationscompletedhandler?view=webview2-1.0.4015-prerelease&preserve-view=true)

<!-- win32 only -->
* [ICoreWebView2GetSharedWorkersCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2getsharedworkerscompletedhandler?view=webview2-1.0.4015-prerelease&preserve-view=true)

<!-- 5 -->
* [ICoreWebView2Profile9](/microsoft-edge/webview2/reference/win32/icorewebview2profile9?view=webview2-1.0.4015-prerelease&preserve-view=true)
  * [ICoreWebView2Profile9::get_AreWebViewScriptApisEnabledForServiceWorkers](/microsoft-edge/webview2/reference/win32/icorewebview2profile9?view=webview2-1.0.4015-prerelease&preserve-view=true#get_arewebviewscriptapisenabledforserviceworkers)
  * [ICoreWebView2Profile9::get_ServiceWorkerManager](/microsoft-edge/webview2/reference/win32/icorewebview2profile9?view=webview2-1.0.4015-prerelease&preserve-view=true#get_serviceworkermanager)
  * [ICoreWebView2Profile9::get_SharedWorkerManager](/microsoft-edge/webview2/reference/win32/icorewebview2profile9?view=webview2-1.0.4015-prerelease&preserve-view=true#get_sharedworkermanager)
  * [ICoreWebView2Profile9::put_AreWebViewScriptApisEnabledForServiceWorkers](/microsoft-edge/webview2/reference/win32/icorewebview2profile9?view=webview2-1.0.4015-prerelease&preserve-view=true#put_arewebviewscriptapisenabledforserviceworkers)

<!-- 6 -->
* [ICoreWebView2ServiceWorker](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworker?view=webview2-1.0.4015-prerelease&preserve-view=true)
  * [ICoreWebView2ServiceWorker::add_Destroying](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworker?view=webview2-1.0.4015-prerelease&preserve-view=true#add_destroying)
  * [ICoreWebView2ServiceWorker::add_WebMessageReceived](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworker?view=webview2-1.0.4015-prerelease&preserve-view=true#add_webmessagereceived)
  * [ICoreWebView2ServiceWorker::get_ScriptUri](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworker?view=webview2-1.0.4015-prerelease&preserve-view=true#get_scripturi)
  * [ICoreWebView2ServiceWorker::PostWebMessageAsJson](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworker?view=webview2-1.0.4015-prerelease&preserve-view=true#postwebmessageasjson)
  * [ICoreWebView2ServiceWorker::PostWebMessageAsString](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworker?view=webview2-1.0.4015-prerelease&preserve-view=true#postwebmessageasstring)
  * [ICoreWebView2ServiceWorker::remove_Destroying](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworker?view=webview2-1.0.4015-prerelease&preserve-view=true#remove_destroying)
  * [ICoreWebView2ServiceWorker::remove_WebMessageReceived](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworker?view=webview2-1.0.4015-prerelease&preserve-view=true#remove_webmessagereceived)

<!-- 7 -->
* [ICoreWebView2ServiceWorkerActivatedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkeractivatedeventargs?view=webview2-1.0.4015-prerelease&preserve-view=true)
  * [ICoreWebView2ServiceWorkerActivatedEventArgs::get_ActiveServiceWorker](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkeractivatedeventargs?view=webview2-1.0.4015-prerelease&preserve-view=true#get_activeserviceworker)

<!-- win32 only -->
* [ICoreWebView2ServiceWorkerActivatedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkeractivatedeventhandler?view=webview2-1.0.4015-prerelease&preserve-view=true)

<!-- win32 only -->
* [ICoreWebView2ServiceWorkerDestroyingEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerdestroyingeventhandler?view=webview2-1.0.4015-prerelease&preserve-view=true)

<!-- 8 -->
* [ICoreWebView2ServiceWorkerManager](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkermanager?view=webview2-1.0.4015-prerelease&preserve-view=true)
  * [ICoreWebView2ServiceWorkerManager::add_ServiceWorkerRegistered](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkermanager?view=webview2-1.0.4015-prerelease&preserve-view=true#add_serviceworkerregistered)
  * [ICoreWebView2ServiceWorkerManager::GetServiceWorkerRegistrations](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkermanager?view=webview2-1.0.4015-prerelease&preserve-view=true#getserviceworkerregistrations)
  * [ICoreWebView2ServiceWorkerManager::GetServiceWorkerRegistrationsForScope](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkermanager?view=webview2-1.0.4015-prerelease&preserve-view=true#getserviceworkerregistrationsforscope)
  * [ICoreWebView2ServiceWorkerManager::remove_ServiceWorkerRegistered](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkermanager?view=webview2-1.0.4015-prerelease&preserve-view=true#remove_serviceworkerregistered)

<!-- 9 -->
* [ICoreWebView2ServiceWorkerRegisteredEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregisteredeventargs?view=webview2-1.0.4015-prerelease&preserve-view=true)
  * [ICoreWebView2ServiceWorkerRegisteredEventArgs::get_ServiceWorkerRegistration](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregisteredeventargs?view=webview2-1.0.4015-prerelease&preserve-view=true#get_serviceworkerregistration)

<!-- win32 only -->
* [ICoreWebView2ServiceWorkerRegisteredEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregisteredeventhandler?view=webview2-1.0.4015-prerelease&preserve-view=true)

<!-- 10 -->
* [ICoreWebView2ServiceWorkerRegistration](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregistration?view=webview2-1.0.4015-prerelease&preserve-view=true)
  * [ICoreWebView2ServiceWorkerRegistration::add_ServiceWorkerActivated](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregistration?view=webview2-1.0.4015-prerelease&preserve-view=true#add_serviceworkeractivated)
  * [ICoreWebView2ServiceWorkerRegistration::add_Unregistering](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregistration?view=webview2-1.0.4015-prerelease&preserve-view=true#add_unregistering)
  * [ICoreWebView2ServiceWorkerRegistration::get_ActiveServiceWorker](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregistration?view=webview2-1.0.4015-prerelease&preserve-view=true#get_activeserviceworker)
  * [ICoreWebView2ServiceWorkerRegistration::get_Origin](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregistration?view=webview2-1.0.4015-prerelease&preserve-view=true#get_origin)
  * [ICoreWebView2ServiceWorkerRegistration::get_ScopeUri](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregistration?view=webview2-1.0.4015-prerelease&preserve-view=true#get_scopeuri)
  * [ICoreWebView2ServiceWorkerRegistration::get_TopLevelOrigin](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregistration?view=webview2-1.0.4015-prerelease&preserve-view=true#get_toplevelorigin)
  * [ICoreWebView2ServiceWorkerRegistration::remove_ServiceWorkerActivated](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregistration?view=webview2-1.0.4015-prerelease&preserve-view=true#remove_serviceworkeractivated)
  * [ICoreWebView2ServiceWorkerRegistration::remove_Unregistering](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregistration?view=webview2-1.0.4015-prerelease&preserve-view=true#remove_unregistering)

<!-- win32 only -->
* [ICoreWebView2ServiceWorkerRegistrationCollectionView](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregistrationcollectionview?view=webview2-1.0.4015-prerelease&preserve-view=true)
  * [ICoreWebView2ServiceWorkerRegistrationCollectionView::get_Count](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregistrationcollectionview?view=webview2-1.0.4015-prerelease&preserve-view=true#get_count)
  * [ICoreWebView2ServiceWorkerRegistrationCollectionView::GetValueAtIndex](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregistrationcollectionview?view=webview2-1.0.4015-prerelease&preserve-view=true#getvalueatindex)

<!-- win32 only -->
* [ICoreWebView2ServiceWorkerRegistrationUnregisteringEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerregistrationunregisteringeventhandler?view=webview2-1.0.4015-prerelease&preserve-view=true)

<!-- win32 only -->
* [ICoreWebView2ServiceWorkerWebMessageReceivedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2serviceworkerwebmessagereceivedeventhandler?view=webview2-1.0.4015-prerelease&preserve-view=true)

<!-- 11 -->
* [ICoreWebView2SharedWorker](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworker?view=webview2-1.0.4015-prerelease&preserve-view=true)
  * [ICoreWebView2SharedWorker::add_Destroying](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworker?view=webview2-1.0.4015-prerelease&preserve-view=true#add_destroying)
  * [ICoreWebView2SharedWorker::get_Origin](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworker?view=webview2-1.0.4015-prerelease&preserve-view=true#get_origin)
  * [ICoreWebView2SharedWorker::get_ScriptUri](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworker?view=webview2-1.0.4015-prerelease&preserve-view=true#get_scripturi)
  * [ICoreWebView2SharedWorker::get_TopLevelOrigin](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworker?view=webview2-1.0.4015-prerelease&preserve-view=true#get_toplevelorigin)
  * [ICoreWebView2SharedWorker::remove_Destroying](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworker?view=webview2-1.0.4015-prerelease&preserve-view=true#remove_destroying)

<!-- win32 only -->
* [ICoreWebView2SharedWorkerCollectionView](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworkercollectionview?view=webview2-1.0.4015-prerelease&preserve-view=true)
  * [ICoreWebView2SharedWorkerCollectionView::get_Count](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworkercollectionview?view=webview2-1.0.4015-prerelease&preserve-view=true#get_count)
  * [ICoreWebView2SharedWorkerCollectionView::GetValueAtIndex](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworkercollectionview?view=webview2-1.0.4015-prerelease&preserve-view=true#getvalueatindex)

<!-- 12 -->
* [ICoreWebView2SharedWorkerCreatedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworkercreatedeventargs?view=webview2-1.0.4015-prerelease&preserve-view=true)
  * [ICoreWebView2SharedWorkerCreatedEventArgs::get_Worker](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworkercreatedeventargs?view=webview2-1.0.4015-prerelease&preserve-view=true#get_worker)

<!-- win32 only -->
* [ICoreWebView2SharedWorkerCreatedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworkercreatedeventhandler?view=webview2-1.0.4015-prerelease&preserve-view=true)

<!-- win32 only -->
* [ICoreWebView2SharedWorkerDestroyingEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworkerdestroyingeventhandler?view=webview2-1.0.4015-prerelease&preserve-view=true)

<!-- 13 -->
* [ICoreWebView2SharedWorkerManager](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworkermanager?view=webview2-1.0.4015-prerelease&preserve-view=true)
  * [ICoreWebView2SharedWorkerManager::add_SharedWorkerCreated](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworkermanager?view=webview2-1.0.4015-prerelease&preserve-view=true#add_sharedworkercreated)
  * [ICoreWebView2SharedWorkerManager::GetSharedWorkers](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworkermanager?view=webview2-1.0.4015-prerelease&preserve-view=true#getsharedworkers)
  * [ICoreWebView2SharedWorkerManager::remove_SharedWorkerCreated](/microsoft-edge/webview2/reference/win32/icorewebview2sharedworkermanager?view=webview2-1.0.4015-prerelease&preserve-view=true#remove_sharedworkercreated)

---


<!-- ====================================================================== -->
## See also

* [Release notes for WebView2](./index.md)
