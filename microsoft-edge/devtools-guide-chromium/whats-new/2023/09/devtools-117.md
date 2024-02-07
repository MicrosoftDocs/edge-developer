---
title: What's New in DevTools (Microsoft Edge 117)
description: "New Experiment: Explain console errors/warnings with Copilot in Sidebar. Console has content when re-opened in Quick View. Accessibility fixes. And more."
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 09/14/2023
---
# What's New in DevTools (Microsoft Edge 117)

[!INCLUDE [Microsoft Edge team note for top of What's New](../../includes/edge-whats-new-note.md)]


<!-- ====================================================================== -->
## New experiment: Explain console errors/warnings with Copilot in Sidebar

You can use Microsoft Copilot in the Microsoft Edge Sidebar to explain DevTools console errors.  If the Sidebar is enabled in Microsoft Edge, you can search for or explain console errors using Microsoft Copilot in the Sidebar, by clicking the **Explain this message in sidebar** button next to a message in the Console:

![Explain console errors/warnings with Copilot](./devtools-117-images/copilot-error-explanation.png)

This feature is available as an experiment starting in Microsoft Edge 117.  This feature is not available when the Sidebar is turned off.

By default, this experiment is turned off.  To enable this experiment, specify the feature flag `msEdgeAIExplainConsoleError`; for example, run Microsoft Edge from the command line using the `enable-features` command-line option, as follows:

```
msedge.exe --enable-features=msEdgeAIExplainConsoleError
```

Or, go to `edge://flags` and toggle the flag **Explain DevTools with AI**.

See also:
* [Explain DevTools Console errors and source code using Copilot in Edge](../../../experimental-features/copilot-explain.md)


<!-- ====================================================================== -->
## Console has content when re-opened in Quick View

Before Microsoft Edge 117, the Console was blank after closing and then re-opening the Console tool in **Quick View** (the secondary toolbar and panel in Focus Mode).  This issue has been resolved; the Console re-opens with the expected content.


<!-- ====================================================================== -->
## Accessibility fixes 

In Microsoft Edge 117, the following accessibility issues have been addressed:

* In the High Contrast theme, updated the hover color for the **Move Activity Bar** button, the **Help** button, and the **Customize and control DevTools** (...) button, for consistency with other buttons.

* In the **Memory** tool, improved the High Contrast theme, so that all heap snapshot information is more visible.

* Fixed the Narrator in the **Issues** tool, to announce the correct size and position for each level.

* Fixed the keyboard focus for screen readers, so that when you click a source-code link in the **Issues** tool, the relevant code has focus in the **Elements** tool.


<!-- ====================================================================== -->
## Announcements from the Chromium project

Microsoft Edge 117 also includes the following updates from the Chromium project:

* [Network panel improvements](https://developer.chrome.com/blog/new-in-devtools-117#network)
   * [Override web content locally even faster](https://developer.chrome.com/blog/new-in-devtools-117#overrides)
   * [Override the content of XHR and fetch requests](https://developer.chrome.com/blog/new-in-devtools-117#xhr-fetch)
   * [Hide Chrome extension requests](https://developer.chrome.com/blog/new-in-devtools-117#hide-extension-requests)
   * [Human-readable HTTP status codes](https://developer.chrome.com/blog/new-in-devtools-117#status-codes)
   * [Pretty-print responses for JSON subtypes](https://developer.chrome.com/blog/new-in-devtools-117#pretty-json-response)
* [Performance: See the changes in fetch priority for network events](https://developer.chrome.com/blog/new-in-devtools-117#performance)
* [Sources settings enabled by default: Code folding and automatic file reveal](https://developer.chrome.com/blog/new-in-devtools-117#sources)
* [Improved debugging of third-party cookie issues](https://developer.chrome.com/blog/new-in-devtools-117#third-party-cookies)
* [Debug preloading in the Application panel](https://developer.chrome.com/blog/new-in-devtools-117#preloading)
* [The C/C++ WebAssembly debugging extension for DevTools is now open source](https://developer.chrome.com/blog/new-in-devtools-117#debug-cpp)
* [New experimental features](https://developer.chrome.com/blog/new-in-devtools-117#experimental)
   * [New rendering emulation: `prefers-reduced-transparency`](https://developer.chrome.com/blog/new-in-devtools-117#reduced-transparency)


<!-- ====================================================================== -->
<!-- uncomment if content is copied from developer.chrome.com to this page -->

<!-- > [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page for announcements from the Chromium project is [What's New in DevTools (Chrome 117)](https://developer.chrome.com/blog/new-in-devtools-117) and is authored by [Sofia Emelianova](https://developers.google.com/web/resources/contributors) (Senior Technical Writer working on Chrome DevTools at Google). -->


<!-- ====================================================================== -->
<!-- uncomment if content is copied from developer.chrome.com to this page -->

<!-- [![Creative Commons License](../../../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0). -->
