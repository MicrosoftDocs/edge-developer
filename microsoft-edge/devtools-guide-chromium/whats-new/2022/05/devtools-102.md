---
title: What's new in DevTools (Microsoft Edge 102)
description: What's new in DevTools (Microsoft Edge 102).
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 05/16/2022
---
# What's New in DevTools (Microsoft Edge 102)

[!INCLUDE [Microsoft Edge team note for top of What's New](../../includes/edge-whats-new-note.md)]


<!-- ====================================================================== -->
## Improved Inspect tool accessibility
<!--
## The Inspect element tooltip now persists until you dismiss it
-->

<!-- Title: Improving the Inspect element tooltip -->
<!-- Subtitle: The Inspect element tooltip now persists until you dismiss it, improving accessibility and ease of use. -->

Previously, in the **Elements** tool, the hover overlay for the node that you selected constantly changed when you used the **Select Element** feature.
The previous design was difficult to use with a screen magnifier.

When using the **Inspect** tool, to keep the node (and overlay) selected,<!--?--> there's now a `Ctrl`+`Alt` key modifier.
Now, if you hold down `Ctrl`+`Alt`, when you move the mouse pointer over the rendered webpage, the existing tooltip and grid color overlay for the Inspect tool remains, as if locked.

Also, you can now press `Ctrl`<!--?--> to hide the Inspect tool's tooltip overlay while you move the mouse pointer over the rendered webpage.

![Inspect tool.](devtools-102-images/inspect.png)
<!-- screenshot instructions:
1. Set magnifier in windows settings to > 200%.
2. Inspect the web page (microsoft.com is fine).
3. Make sure the Elements tool tab is open.
4. Click the Inspect element tool.
5. Move to the content of the rendered webpage (not inside devtools).
6. Try navigating without key modifiers.  You will start going through nodes/elements as soon as mouse starts moving.
After the fix:
Element keeps selected and you can move the mouse around (allowing you to navigate the screen and keep context)
-->

<!-- work item has GIF -->

For the history of this feature in the Chromium open-source project, see Issue [1316208](https://crbug.com/1316208).


<!-- ====================================================================== -->
<!-- ## 2. -->

<!-- Title:  -->
<!-- Subtitle: . -->


<!-- ====================================================================== -->
## Announcements from the Chromium project

Microsoft Edge 102 also includes the following updates from the Chromium project:

* [Preview feature: New Performance insights panel](https://developer.chrome.com/blog/new-in-devtools-102/#perf)
* [New shortcuts to emulate light and dark themes](https://developer.chrome.com/blog/new-in-devtools-102/#emulation)
* [Improved security on the Network Preview tab](https://developer.chrome.com/blog/new-in-devtools-102/#network-preview)
* [Improved reloading at breakpoint](https://developer.chrome.com/blog/new-in-devtools-102/#debugger)
* [Console updates](https://developer.chrome.com/blog/new-in-devtools-102/#console)
   * [Handle script execution errors in the Console](https://developer.chrome.com/blog/new-in-devtools-102/#errors)
   * [Commit live expression with Enter](https://developer.chrome.com/blog/new-in-devtools-102/#live-expression)
* [Cancel user flow recording at the start](https://developer.chrome.com/blog/new-in-devtools-102/#recorder)
* [Display inherited highlight pseudo-elements in the Styles pane](https://developer.chrome.com/blog/new-in-devtools-102/#pseudo)
* [Miscellaneous highlights](https://developer.chrome.com/blog/new-in-devtools-102/#misc)
* [[Experimental] Copy CSS changes](https://developer.chrome.com/blog/new-in-devtools-102/#copy)
* [[Experimental] Picking color outside of browser](https://developer.chrome.com/blog/new-in-devtools-102/#color-picker)


<!-- ====================================================================== -->
<!-- uncomment if content is copied from developer.chrome.com to this page -->

<!-- > [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page for announcements from the Chromium project is [What's New in DevTools (Chrome 102)](https://developer.chrome.com/blog/new-in-devtools-102) and is authored by [Jecelyn Yeen](https://developers.google.com/web/resources/contributors#jecelynyeen) (Developer advocate working on Chrome DevTools at Google). -->


<!-- ====================================================================== -->
<!-- uncomment if content is copied from developer.chrome.com to this page -->

<!-- [![Creative Commons License.](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0). -->
