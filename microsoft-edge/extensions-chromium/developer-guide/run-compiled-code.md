---
title: Run compiled code in an extension
description: How to run compiled code in your extension at near-native speed, by using WebAssembly (Wasm).
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: extensions
ms.date: 02/10/2025
---
# Run compiled code in an extension

You can run compiled code in your extension at near-native speed, by using WebAssembly (Wasm).  WebAssembly is a low-level assembly-like language which many other languages, such as C, C++, or Rust, can compile to, and which can run at near native-speed in web browsers.

See:
* [WebAssembly](https://developer.mozilla.org/docs/WebAssembly) at MDN.
* [webassembly.org](https://webassembly.org)


<!-- ====================================================================== -->
## Native Client (NaCl) (deprecated)
<!-- abbreviated sections that point to here:
* [Deprecation of Native Client (NaCl)](../whats-new/roadmap.md#deprecation-of-native-client-nacl) in _Roadmap for Microsoft Edge Add-ons_.
* "Native Client (NaCl)" table row in [Latest versions](../../web-platform/site-impacting-changes?tabs=latest#high-impact-changes) in _Site compatibility-impacting changes coming to Microsoft Edge_.
-->

To enhance web security and performance, Native Client (NaCl) is deprecated for Microsoft Edge, along with other browsers.  NaCl was deprecated (discouraged but still supported) starting in 2020.  Support for NaCl will be discontinued starting with Microsoft Edge 138.

NaCl is a sandbox for running compiled C and C++ code in browsers efficiently and securely, independently of the user's operating system.  WebAssembly (Wasm) is recommended instead of NaCl.

See also:
* [Manifest - Nacl Modules](https://developer.chrome.com/docs/extensions/mv2/manifest/nacl-modules)
* [Native Client](https://developer.chrome.com/docs/native-client) - deprecation notice for Chrome browser.
<!-- todo: link to deprecation notices for other browsers -->

To Run compiled code in an extension, we recommend using WebAssembly instead of NaCl.  See: 
* [WebAssembly Migration Guide](https://developer.chrome.com/docs/native-client/migration) in Chrome docs.
* [WebAssembly](https://developer.mozilla.org/docs/WebAssembly) at MDN.
* [webassembly.org](https://webassembly.org)


<!-- ====================================================================== -->
<!-- ## See also -->
<!-- all links in article -->
<!-- up to date 2025/02/06 but commented out b/c not needed unless article is longer -->

<!-- 
WebAssembly (Wasm):
* [WebAssembly](https://developer.mozilla.org/docs/WebAssembly) at MDN.
* [WebAssembly Migration Guide](https://developer.chrome.com/docs/native-client/migration) in Chrome docs.
* [webassembly.org](https://webassembly.org)

Native Client (NaCl):
* [Manifest - Nacl Modules](https://developer.chrome.com/docs/extensions/mv2/manifest/nacl-modules) in Chrome docs.
* [Native Client](https://developer.chrome.com/docs/native-client) - deprecation notice for Chrome browser. 
-->
