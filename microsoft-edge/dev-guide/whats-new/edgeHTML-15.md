---
description: This guide provides an overview of the developer features and standards included in EdgeHTML 15.
title: What's new in EdgeHTML 15
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/15/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
ms.custom: seodec18
---

# What's new in EdgeHTML 15
Here are the changes shipped with the current release of the Microsoft Edge platform,
 as of the [Windows 10 Creators Update](https://blogs.windows.com/buildingapps/2017/04/05/windows-10-creators-update-creators-update-sdk-released/#MMhK2OdcrR12Vi6u.97) (04/2017, Build 15063). For an overview of changes to the overall Microsoft Edge browser, see [What’s new in Microsoft Edge in the Windows 10 Creators Update](https://blogs.windows.com/msedgedev/2017/04/11/introducing-edgehtml-15/#DrVEvmPU6TPq3tMK.97)

For changes in subsequent Windows Insider Preview builds, see [What's New in EdgeHTML](../whats-new.md).

Here's the permalink for the following list of changes: **[https://aka.ms/devguide_edgehtml_15](https://aka.ms/devguide_edgehtml_15)**.

## New features

### CSS Custom Properties
Microsoft Edge now supports [CSS Custom Properties](https://drafts.csswg.org/css-variables/), a.k.a CSS Variables. CSS Variables allow you to create custom CSS properties that can be reused throughout stylesheets to help reduce the amount of duplicate data, like repeated colors. Using CSS Variables is simple:

```css
/* define a custom property by using two dashes and assign it a value */
body {   
   --default-color: #3390b1
}

/* reference it in your stylesheet with the "var()" function */
h1 {
   color: var(--default-color);
}
```  

### Intersection Observer
EdgeHTML 15 introduces the [Intersection Observer API](https://w3c.github.io/IntersectionObserver/) specification. The Intersection Observer API allows you to asynchronously query the position and visibility of DOM elements relative to other elements or the global viewport. This API eliminates the need for custom expensive code by creating a method to efficiently notify elements when they are in view.

### JavaScript

Performance optimizations take center stage with the EdgeHTML 15 rev of the Chakra JavaScript engine. With the Windows 10 Creators Update, Chakra saves memory by re-deferring functions and optimizing away heap arguments and improves performance for minified code.

Additionally, EdgeHTML 15 introduces the following feature previews:

#### Experimental JavaScript features (enabled with *about:flags*)

* [WebAssembly](https://developer.microsoft.com/en-us/microsoft-edge/platform/status/webassemblymvp/?q=WebAssembly) ([demo](https://webassembly.org/demo/))
* [Shared Memory and Atomics](https://developer.microsoft.com/en-us/microsoft-edge/platform/status/sharedmemoryandatomics/?q=Atomics)

See [*Improved JavaScript performance, WebAssembly, and Shared Memory in Microsoft Edge*](https://blogs.windows.com/msedgedev/2017/04/20/improved-javascript-performance-webassembly-shared-memory/#t4gwUKjjtdmstMbs.97) for further details.

### Payment Request API
The [Payment Request API](http://www.w3.org/TR/payment-request/) is now supported, enabling simpler checkout and payments on the web on Windows 10 PCs and Phones. This API enables Microsoft Edge to act as an intermediary between merchants, consumers, and the payment methods (e.g. credit cards) that consumers have stored in the cloud. For more information on the Payment Request API, check out [Simpler web payments: Introducing the Payment Request API](https://blogs.windows.com/msedgedev/2016/12/15/payment-request-api-edge/) and the [Payment Request API](/microsoft-edge/dev-guide/device/payment-request-api) developer guide.

### TCP Fast Open (TFO)
TCP Fast Open is a feature that reduces the number of round trips required to open a TCP connection, improving browser networking performance. For more details, see [Building a faster and more secure web with TCP Fast Open](https://blogs.windows.com/msedgedev/2016/06/15/building-a-faster-and-more-secure-web-with-tcp-fast-open-tls-false-start-and-tls-1-3/#eQMauReErmIRXYqh.97). Due to interoperability differences in various network topologies, this features is not enabled by default in Microsoft Edge. To enable it, type `about:flags` in your address bar, and select the checkbox for **Enable TCP Fast Open** under the *Networking* section. 

### WebRTC and interoperable RTC video codec support

EdgeHTML 15 supports a subset of the WebRTC 1.0 API for interoperability with applications built with earlier versions of the W3C WebRTC-PC API circa 2015. See the [WebRTC API reference](https://msdn.microsoft.com/library/mt806139(v=vs.85).aspx) for details.

To take advantage of our most advanced features in peer-to-peer audio and video communication, we recommend using the [Object Real-Time Communication) API](../realtime-communication/object-rtc-api.md). The ORTC API is better suited for situations where you want to set up group audio and video calls, or directly control individual transport, sender, and receiver objects.

The Microsoft Edge supports both H.264/AVC and VP8 video with ORTC and WebRTC 1.0, and provides the following features in support of both codec types: [abs-send-time](https://webrtc.org/experiments/rtp-hdrext/abs-send-time/), [goog-remb](https://tools.ietf.org/html/draft-alvestrand-rmcat-remb-03), [Picture Loss Indication and Generic NACK feedback](https://tools.ietf.org/html/rfc4585), [RTP Retransmission](https://tools.ietf.org/html/rfc4588).

For more info, see [Introducing WebRTC 1.0 and interoperable real-time communications in Microsoft Edge](https://blogs.windows.com/msedgedev/2017/01/31/introducing-webrtc-microsoft-edge/#k8XMeWKyZDQDPYR4.97).

### WebVR

Microsoft Edge now has support for [WebVR](https://immersive-web.github.io/webxr/), an experimental API that connects Windows Mixed Reality head mounted displays and Microsoft Edge. This connection enables VR content to be experienced within a website, meaning immersive VR experiences are no longer limited to desktop applications.  

Virtual reality in Microsoft Edge is powered by WebGL, a JavaScript API for rendering 3D and 2D graphics. WebGL applications and applications built with WebGL libraries like BabylonJS are supported. Once connected, WebVR sends visuals corresponding to the position and sensor information around the headset. The WebVR API also supports spatial controllers thanks to an extension to the [Gamepad API](../dom/gamepad-api.md). This API is on by default, so no need to toggle a flag.

See the [WebVR API reference](https://msdn.microsoft.com/library/mt806281(v=vs.85).aspx) and [Gamepad API reference](https://msdn.microsoft.com/library/dn743630(v=vs.85).aspx) for details.

 > [!NOTE] 
 > Since the WebVR spec is still in development, Microsoft Edge's implementation may change later down the line.



## Updated features

### Content Security Policy (Level 2)
Sites already using CSP 1 should continue to work with Microsoft Edge support for CSP 2, however it's best to switch any `frame-src` directives that load worker scripts to the new `child-src` directive to future-proof your site. (In CSP 3, `frame-src` will no longer apply to workers.) CSP 2 also adds the following:

1. New directives: `base-uri`, `child-src`, `form-action`, `frame-ancestors` and `plugin-types`. See [Microsoft Edge supported CSP directives](../security/content-security-policy.md) for more.

2. Workers support: Background worker scripts are governed by their own policy, separate from the policy of the document loading them. As with host documents, you can set the CSP for a worker in the response header. Also new in CSP 2 is that  `allow-scripts` and `allow-same-origin` flags of the `sandbox` directive now affect worker thread creation.

3. Inline scripts and styles: CSP 2 allows for the execution of inline scripts and style blocks by providing nonces and hashes as a whitelisting mechanism. Nonces are random base-64 values generated on each page load that appears in both the CSP policy and in the script tags in the page. When the page is dynamically generated on load, the server generates a nonce value, inserts it into the NonceToken in the page and also declares it in the Content Security Policy HTTP header. Hashes are static values generated (via *sha256*, *sha384* or *sha512* algorithms) from the content of a `<script>` or `<style>` element that are then specified (via `script-src` or `style-src` directives) in the CSP policy.

4. CSP violation reporting: A new event, SecurityPolicyViolationEvent is now fired upon CSP violations. The earlier mechanism for CSP reporting, `report-uri`, continues to be supported. Several new fields have been added to the violation reports common to both, including `effectiveDirective` (the policy that was violated), `statusCode` (the HTTP response code), `sourceFile` (the URL of the offending resource), `lineNumber`, and `columnNumber`.

### Web Authentication
Microsoft Edge support for the emerging [Web Authentication API](../device/web-authentication.md) using [Windows Hello](https://go.microsoft.com/fwlink/p/?LinkID=624961) biometrics has been updated with the following changes:
- The initial implementation of the experimental Web Authentication API introduced in [EdgeHTML 14](https://blogs.windows.com/msedgedev/2016/08/04/introducing-edgehtml-14/#TVSCzKDkG4jCI5mt.97) (Windows 10 Anniversary Update, build 10240, 7/2016) was exposed through MS- prefixed APIs (the [MSCredentials](https://msdn.microsoft.com/library/mt697639) interface). While these APIs are still available in EdgeHTML 15, they are now deprecated in favor of the non-prefixed, standards-based APIs and behaviors defined in a more [recent snapshot](http://www.w3.org/TR/2016/WD-webauthn-20160928) of the specification, and are likely to continue changing as the spec matures toward standardization.

- The latest Microsoft Edge implementation is turned off by default and ships behind a flag (type `about:flags` in your address bar to turn on the feature).

- Microsoft Edge does not yet support external credentials like USB keys or Bluetooth devices. The current API is limited to embedded credentials stored in the TPM. A software fallback is used if TPM is not available on the device.

- The currently logged in Windows user account must be configured to support at least a PIN, and preferably face or fingerprint biometrics. This is to ensure that Windows can authenticate the access to the TPM.

- Of the [predefined extensions](http://www.w3.org/TR/webauthn/#extension-predef) described in the spec, Microsoft Edge only supports the [FIDO AppId](http://www.w3.org/TR/webauthn/#extension-appid) (`webauthn_txAuthSimple`) at this time.

- The `timeoutSeconds` option is not currently evaluated

### WebDriver

EdgeHTML 15 brings a handful of WebDriver updates including support for the silent command line flag and new command endpoints:

Method | URI Template | Command
:----- | :----------  | :--------
POST | /session/{session id}/alert/accept | [Accept Alert](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-accept-alert)
POST | /session/{session id}/alert/dismiss | [Dismiss Alert](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-dismiss-alert)
GET | /session/{session id}/alert/text | [Get Alert Text](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-get-alert-text)
POST | /session/{session id}/alert/text | [Send Alert Text](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-send-alert-text)
POST | /session/{session id}/execute/async | [Execute Async Script](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-execute-async-script)
POST | /session/{session id}/execute/sync | [Execute Script](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-execute-script)
GET | /session/{session id}/window | [Get Window Handle](https://w3c.github.io/webdriver/webdriver-spec.html#get-window-handle)
GET | /session/{session id}/window/handles | [Get Window Handles](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-get-window-handles)

For more info and the status of other WebDriver features, check out [WebDriver](../../webdriver.md).

## New APIs in EdgeHTML 15

Here's the full list of new APIs in EdgeHTML 15. They are listed in the format of **[interface name].[api name]**.

<iframe height='582' scrolling='no' title='New EdgeHTML15 APIs' src='//codepen.io/MicrosoftEdgeDocumentation/embed/evRjjZ/?height=582&theme-id=23761&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/MicrosoftEdgeDocumentation/pen/evRjjZ/'>New EdgeHTML15 APIs</a> by Microsoft Edge Docs (<a href='http://codepen.io/MicrosoftEdgeDocumentation'>@MicrosoftEdgeDocumentation</a>) on <a href='http://codepen.io'>CodePen</a>.</iframe>  

## Previous EdgeHTML releases
[EdgeHTML 12 / Windows build 10240 (7/2015)](https://aka.ms/devguide_edgehtml_12)

[EdgeHTML 13 / Windows build 10586 (11/2015)](https://aka.ms/devguide_edgehtml_13)

[EdgeHTML 14 / Windows build 14393 (8/2016)](https://aka.ms/devguide_edgehtml_14)
