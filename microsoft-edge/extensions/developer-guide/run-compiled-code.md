---
title: Run compiled code in an extension
description: How to run compiled code in your extension at near-native speed, by using WebAssembly (Wasm).
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: extensions
ms.date: 02/12/2025
---
# Run compiled code in an extension

You can run compiled code in your extension at near-native speed, by using WebAssembly (Wasm).  WebAssembly is a low-level assembly-like language which many other languages, such as C, C++, or Rust, can compile to, and which can run at near native-speed in web browsers.

See:
* [WebAssembly](https://developer.mozilla.org/docs/WebAssembly) at MDN.
* [webassembly.org](https://webassembly.org)


<!-- ====================================================================== -->
## Native Client (NaCl) no longer supported
<!-- sections that point to this article because of this section:
* [Native Client (NaCl) no longer supported](../whats-new/roadmap.md#native-client-nacl-no-longer-supported) in _Roadmap for Microsoft Edge extensions_.
* "Removal of Native Client (NaCl)" table row in [Earlier versions](../../web-platform/site-impacting-changes?tabs=earlier#high-impact-changes) in _Site compatibility-impacting changes coming to Microsoft Edge_.
-->

To enhance web security and performance, Native Client (NaCl) is no longer supported by Microsoft Edge (along with other browsers).  Native Client (NaCl) was supported through Edge version 115.  In 116 to 119, NaCl was only usable by enabling an enterprise policy.  Starting with 120 (December 2023), support for NaCl was completely removed.

NaCl is a sandbox for running compiled C and C++ code in browsers efficiently and securely, independently of the user's operating system.  WebAssembly (Wasm) is recommended instead of NaCl.

See also:
* [Manifest - Nacl Modules](https://developer.chrome.com/docs/extensions/mv2/manifest/nacl-modules)<!-- todo: developer.chrome.com ok? -->
* [Native Client](https://developer.chrome.com/docs/native-client)<!-- todo: developer.chrome.com ok? --> - deprecation notice for Chrome browser.

To Run compiled code in an extension, we recommend using WebAssembly instead of NaCl.  See: 
* [WebAssembly Migration Guide](https://developer.chrome.com/docs/native-client/migration)<!-- todo: developer.chrome.com ok? --> in Chrome docs.
* [WebAssembly](https://developer.mozilla.org/docs/WebAssembly) at MDN.
* [webassembly.org](https://webassembly.org)
