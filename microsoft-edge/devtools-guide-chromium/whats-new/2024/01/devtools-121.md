---
title: What's New in DevTools (Microsoft Edge 121)
description: "Z-index and DOM tabs in 3D View tool are now working. Correct Hide debugger or Show debugger icon is shown in Sources tool. And more."
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 01/25/2024
---
# What's New in DevTools (Microsoft Edge 121)

[!INCLUDE [Microsoft Edge team note for top of What's New](../../includes/edge-whats-new-note.md)]


<!-- ====================================================================== -->
## Z-index and DOM tabs in 3D View tool are now working

<!-- Subtitle: In recent versions of Microsoft Edge, the Z-index and DOM tabs weren't working. In Microsoft Edge 121, this issue has been resolved. -->

In recent versions of Microsoft Edge, there was a bug in the **3D View** panel that caused the **Z-index** and **DOM** tabs to not work correctly.  The tabs would crash or freeze and show the content for the **Composited Layers** tab instead.  This has been fixed in Microsoft Edge 121.

See also:
* [Navigate webpage layers, z-index, and DOM using the 3D View tool](../../../3d-view/index.md)


<!-- ====================================================================== -->
## Correct Hide debugger or Show debugger icon is shown in Sources tool

<!-- Subtitle: In previous versions of Microsoft Edge, the Hide debugger icon was displayed instead of the Show debugger icon and vice versa in the Sources tool. In Microsoft Edge 121, this issue has been resolved. -->

The icon used to collapse or expand the **Debugger** pane on the right in the **Sources** tool was incorrect.  The **Hide debugger** icon was displayed instead of the **Show debugger** icon, and vice versa:

![Icon in the Sources tool, before](./devtools-121-images/open-close-button-sources-before.png)

In Microsoft Edge 121, the correct icon is now shown:

![Icon in the Sources tool, after](./devtools-121-images/open-close-button-sources-after.png)

See also:
* [Sources tool overview](../../../sources/index.md)


<!-- ====================================================================== -->
## Announcements from the Chromium project

Microsoft Edge 121 also includes the following updates from the Chromium project:

<!-- todo: maybe delete some links -->
* [Elements improvements](https://developer.chrome.com/blog/new-in-devtools-121#elements)
   * [@font-palette-values support](https://developer.chrome.com/blog/new-in-devtools-121#font-palette)
   * [Supported case: Custom property as a fallback of another custom property](https://developer.chrome.com/blog/new-in-devtools-121#custom-fallback)
* [Improved source map support](https://developer.chrome.com/blog/new-in-devtools-121#variables)
* [Performance panel improvements](https://developer.chrome.com/blog/new-in-devtools-121#perf)
   * [Enhanced Interactions track](https://developer.chrome.com/blog/new-in-devtools-121#interactions)
   * [Advanced filtering in Bottom-Up, Call Tree, and Event Log tabs](https://developer.chrome.com/blog/new-in-devtools-121#filters)
* [Indentation markers in the Sources panel](https://developer.chrome.com/blog/new-in-devtools-121#sources)
* [Helpful tooltips for overridden headers and content in the Network panel](https://developer.chrome.com/blog/new-in-devtools-121#overrides)
* [New Command Menu options for adding and removing request blocking patterns](https://developer.chrome.com/blog/new-in-devtools-121#command-menu)
* [The CSP violations experiment is removed](https://developer.chrome.com/blog/new-in-devtools-121#csp-violations)
* [Lighthouse 11.3.0](https://developer.chrome.com/blog/new-in-devtools-121#lighthouse)
* [Accessibility](https://developer.chrome.com/blog/new-in-devtools-121#accessibility)
* [Miscellaneous highlights](https://developer.chrome.com/blog/new-in-devtools-121#misc)


<!-- ====================================================================== -->
<!-- uncomment if content is copied from developer.chrome.com to this page -->

<!-- > [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page for announcements from the Chromium project is [What's New in DevTools (Chrome 121)](https://developer.chrome.com/blog/new-in-devtools-121) and is authored by [Sofia Emelianova](https://developers.google.com/web/resources/contributors) (Senior Technical Writer working on Chrome DevTools at Google). -->


<!-- ====================================================================== -->
<!-- uncomment if content is copied from developer.chrome.com to this page -->

<!-- [![Creative Commons License](../../../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0). -->
