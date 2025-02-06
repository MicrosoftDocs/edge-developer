---
title: Run compiled code in an extension
description: How to run compiled code in your extension at near-native speed, by using WebAssembly (Wasm).
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: extensions
ms.date: 02/06/2025
---
# Run compiled code in an extension

You can run compiled code in your extension at near-native speed, by using WebAssembly (Wasm).

See:
* [WebAssembly](https://developer.mozilla.org/docs/WebAssembly) at MDN.
* [webassembly.org](https://webassembly.org/)


<!-- ====================================================================== -->
## Native Client (NaCl) (deprecated)

To enhance web security and performance, NaCl is deprecated for Microsoft Edge, along with other browsers.  NaCl was deprecated (discouraged but still supported) starting in 2020.  Support for NaCl will be discontinued starting with Microsoft Edge 138.

Native Client (NaCl) was a sandbox for running compiled C and C++ code in the browser efficiently and securely, independent of the user's operating system.

To Run compiled code in an extension, we recommend using WebAssembly instead of NaCl.  WebAssembly, also known as Wasm, is a low-level assembly-like language which many other languages, such as C, C++, or Rust, can compile to, and which can run at near native-speed in web browsers.

See also:
* [WebAssembly](https://developer.mozilla.org/docs/WebAssembly) at MDN.
* [webassembly.org](https://webassembly.org/)
* [Native Client](https://developer.chrome.com/docs/native-client) - deprecation notice for Chrome browser.<!-- todo: link to deprecation notices for other browsers -->


<!-- ====================================================================== -->
## See also

* [WebAssembly (Wasm)](https://webassembly.org)
* [WebAssembly Migration Guide](https://developer.chrome.com/docs/native-client/migration)
* [Manifest - Nacl Modules](https://developer.chrome.com/docs/extensions/mv2/manifest/nacl-modules)
