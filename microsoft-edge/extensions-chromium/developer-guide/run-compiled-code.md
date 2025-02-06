---
title: Run compiled code in your extension
description: How to run compiled code in your extension.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: extensions
ms.date: 02/06/2025
---
# Run compiled code in your extension

<!-- todo: improve description: yaml field by summarizing article/ key words -->

You can run compiled code in an extension at near-native speed.

<!-- todo:
With this new title, it would nice to add a generic intro about running compiled code in an extension.
Why someone would want to do it? 
What are the benefits.
tell readers to use WebAssembly immediately, only keeping the NaCl deprecation notice for a sub-section of the article.
-->


<!-- ====================================================================== -->
## Native Client (NaCl) (deprecated)

Native Client (NaCl) was a sandbox for running compiled C and C++ code in the browser efficiently and securely, independent of the user's operating system.

To enhance web security and performance, NaCl is deprecated for Microsoft Edge, along with other browsers.   
<!-- todo:
which other browsers?
link to deprecation notes from these other browsers
-->

<!-- todo: hard or soft deprection?  ie, will it still work, but discouraged?  or won't work now?  dates? -->

To run compiled code in your extension, we recommend using WebAssembly instead. WebAssembly, also known as Wasm, is a low-level assembly-like language which many other languages, such as C, C++, or Rust, can compile to, and which can run at near native-speed in web browsers.

See also:
* [WebAssembly](https://developer.mozilla.org/docs/WebAssembly) at MDN.
* [webassembly.org](https://webassembly.org/)


<!-- ====================================================================== -->
## See also

* [WebAssembly (Wasm)](https://webassembly.org)
* [WebAssembly Migration Guide](https://developer.chrome.com/docs/native-client/migration)
* [Manifest - Nacl Modules](https://developer.chrome.com/docs/extensions/mv2/manifest/nacl-modules)
