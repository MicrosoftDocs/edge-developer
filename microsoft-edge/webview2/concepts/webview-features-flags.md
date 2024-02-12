---
title: WebView2 browser arguments
description: Overview of browser arguments with descriptions.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 1/31/2024
---
# WebView2 Browser Arguments
The following table displays the WebView2, browser and chromium features that can be used in WebView2...

| Feature | Details |
|:--- |:--- |
| accept-lang | Specifies Accept-Language to send to servers and expose to JavaScript via the navigator.language DOM property. language[-country] where language is the 2 letter code from ISO-639. |
| allow-run-as-system |  By default, WebView2 will exit if launched as System (which is not recommended). This switch bypasses that check. |
| allow-running-insecure-content | Switch to enable insecure content in Cast Web Runtime. This unblocks MSPs that serve content from HTTP sources. |
| auto-open-devtools-for-tabs | This flag makes Edge WebView auto-open DevTools window for each tab. It is intended to be used by developers and automation. |
| autoplay-policy | Command line flag name to set the autoplay policy. |
| block-new-web-contents | If true, then all pop-ups and calls to window.open will fail. |
| disable-background-timer-throttling | Disable task throttling of timer tasks from background pages. |
| disable-domain-action-user-agent-override | Disable the per-domain User Agent override from the Domain Actions feature. |
| disable-gpu | This switch disables GPU hardware acceleration.  If software renderer is not in place, then the GPU process won't launch. |
| disable-gpu-driver-bug-workarounds | Switch to disable workarounds for various GPU driver bugs. |
| disable-site-isolation-trials | Switch to disable site isolation. |
| disk-cache-size | Switch to force the maximum disk space to be used by the disk cache, in bytes. |
| do-not-de-elevate | Do not de-elevate the WebView2 on launch. Used after de-elevating to prevent infinite loops. |
| edge-webview-debugging-script | Switch that runs PostWebMessage script asynchronously. |
| edge-webview-foreground-boost-opt-in | Opt-into foreground boost. |
| edge-webview-foreground-boost-opt-out | Opt-out of foreground boost. |
| edge-webview-force-personal-context | Switch to force Edge WebView browser processes to run in WIP personal context. |
| edge-webview-interactive-dragging | Switch to run WebView with interactive dragging enabled. |
| edge-webview-is-background | Denotes that WebView is being launched in the background. |
| edge-webview-no-dpi-workaround | Switch to disable dpi awareness app compat shim workaround, which launches Edge WebView browser process via shell so that it doesn't inherit app compat shim. |
| edge-webview-run-with-package-id | Switch to run WebView process with package identity for bridged Desktop app. |
| edge-webview-run-without-package-id | Switch to run WebView processes without package identity for bridged Desktop app. |
| embedded-browser-webview-dpi-awareness | Sets the DPI awareness level of the server side processes. |
| enable-experimental-web-platform-features | Switch to enable Web Platform features that are in development. |
| enable-logging | Enable logging at the error level. |
| force-color-profile | Force all monitors to be treated as though they have the specified color profile. Accepted values are "srgb" and "generic-rgb". |
| force-device-scale-factor | Switch to override the device scale factor for the Edge WebView browser UI and the contents. |
| force-renderer-accessibility | Switch to force renderer accessibility to be on instead of enabling it on demand when a screen reader is detected. The disable-renderer-accessibility switch overrides this if present. |
| ignore-certificate-errors | Ignores certificate-related errors |
| ignore-gpu-blocklist | Switch to ignore GPU blocklist. |
| isolate-origins | Require dedicated processes for a set of origins, specified as a comma-separated list. For example: --isolate-origins=https://www.foo.com,https://www.bar.com. |
| js-flags | Specifies the flags passed to JS engine. |
| lang | The language file that WebView2 want to try to open. Of the form language[-country] where language is the 2 letter code from ISO-639. |
| log-net-log | Enables saving net log events to a file. If a value is given, it used as the path the the file, otherwise the file is named netlog.json and placed in the user data directory. |
| msAbydos | Enables the "handwriting-to-text" experience. |
| msAbydosGestureSupport | If enabled, allows for users to use gestures (like scratchout) to delete text using pen. This flag is valid only if msAbydos is enabled. |
| msAbydosHandwritingAttr | It is an attribute that can be used to disable the "handwriting-to-text" experience for input elements at the DOM level. This flag is valid only if msAbydos is enabled. |
| msEdgeFluentOverlayScrollbar| This feature flag force-enables Fluent Overlay scrollbars, overriding whatever value `kFluentScrollbar` may hold at the moment. |
| msEnhancedTextContrast | The feature improves the contrast enhancement and gamma correction to match the quality and clarity of other native Windows applications. Font rendering will also now respect user ClearType Tuner settings when applying text contrast enhancement and gamma correction. |
| msEnhancedTrackingPreventionEnabled | If enabled, native privacy protection features are enabled, blocking cookies and web requests from known tracking domains. |
| msOverlayScrollbarWinStyle | This feature flag controls whether the users can change between overlay and non-overlay modes for Fluent scrollbars. |
| msSmartScreenProtection | If enabled, SmartScreen protection will be available. |
| msWebView2TextureStream | If enabled, allows to stream captured or composed video frames to the WebView2 where JavaScript can render or otherwise interact with the frames via W3C standard DOM APIs including the Video element, and MediaStream. |
| msWebView2EnableDraggableRegions | This flag enables webpages within WebView2 make use of the app-region: drag/nodrag CSS style which causes elements with that style to behave like a titlebar. Without this flag the style will have no effect. |
| msWebView2CodeCache | If enabled, JavaScript resources loaded in a WebView2 app via SetVirtualHostNameToFolderMapping or add_WebResourceRequested are eligible for bytecode caching, which should speed up the third and subsequent loads. This feature also enables bytecode caching for any other components which use the devtools network interception mechanism to provide custom responses. |
| no-proxy-server | Switch that overrides any other proxy server flags that are passed. |
| net-log-capture-mode | Sets the granularity of events to capture in the network log. The mode can be set to one of the following values: "Default" "IncludeSensitive" "Everything". |
| no-sandbox | Disables the sandbox for all process types that are normally sandboxed. Meant to be used as a browser-level switch for testing purposes only. |
| no-first-run | Skip First Run tasks, whether or not it's actually the First Run, and the What's New page. Overridden by kForceFirstRun (for FRE) and kForceWhatsNew (for What's New). This does not drop the First Run sentinel and thus doesn't prevent first run from occurring the next time Edge WebView browser is launched without this flag. It also does not update the last What's New milestone, so does not prevent What's New from occurring the next time Edge WebView browser is launched without this flag. |
| PartitionedCookies | When enabled, sites can opt-in to having their cookies partitioned by top-level site with the Partitioned attribute. Partitioned cookies will only be sent when the browser is on the same top-level site that it was on when the cookie was set. |
| proxy-auto-detect | Switch to force proxy auto-detection. |
| proxy-bypass-list | Specifies a list of hosts for whom we bypass proxy settings and use direct connections. |
| remote-allow-origins | Enables web socket connections from the specified origins only. '*' allows any origin. |
| sdsm-state | Super Duper Secure Mode state. Possible values are 'off', 'basic', 'balanced' and 'strict' |
| SharedArrayBuffer | If enabled, SharedArrayBuffer thread is present.  |
| ThirdPartyStoragePartitioning | Enables partitioning of third party storage (IndexedDB, CacheStorage, etc.) by the top level site to reduce fingerprinting. |
| unsafely-treat-insecure-origin-as-secure | Treat given (insecure) origins as secure origins. Multiple origins can be supplied as a comma-separated list. For the definition of secure contexts, see https://w3c.github.io/webappsec-secure-contexts/ and https://www.w3.org/TR/powerful-features/#is-origin-trustworthy Example: --unsafely-treat-insecure-origin-as-secure=http://a.test,http://b.test |
| use-fake-device-for-media-stream | Use fake device for Media Stream to replace actual camera and microphone. |
| use-fake-ui-for-media-stream | Bypass the media stream infobar by selecting the default device for media streams (e.g. WebRTC). Works with --use-fake-device-for-media-stream. Prefer --auto-accept-camera-and-microphone-capture which does not interact with screen/tab capture. |
| use-system-proxy-resolver | Uses WinHttp to resolve proxies instead of using WebView2's normal proxy resolution logic. This is only supported in Windows. |
| user-data-migrated | Indicates that this process is the product of a relaunch following migration of user data. |
| V8Maglev | Enables Maglev compiler. Note that this only sets the V8 flag when manually overridden, otherwise it defers to whatever the V8 default is. |

---


<!-- ====================================================================== -->
## See also

* [Introduction to Microsoft Edge WebView2](../index.md)
* [WebView2 API Reference](../webview2-api-reference.md) - API Reference links for additional platforms and languages, such as WinRT/C++ (COM).
