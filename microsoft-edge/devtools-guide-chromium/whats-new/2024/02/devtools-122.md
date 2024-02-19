---
title: What's New in DevTools (Microsoft Edge 122)
description: "Z-index and DOM tabs in 3D View tool working correctly. Correct Hide debugger or Show debugger icon in Sources tool. Source map support in Coverage tool. Advanced filtering in Bottom-Up, Call Tree, and Event Log tabs in Performance tool. Window Controls Overlay section for PWAs, in Application tool's Manifest section. And more."
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 02/22/2024
---
# What's New in DevTools (Microsoft Edge 122)

[!INCLUDE [Microsoft Edge team note for top of What's New](../../includes/edge-whats-new-note.md)]


<!-- ====================================================================== -->
## Icons are fixed in DevTools UI

<!-- Subtitle: In recent versions of Microsoft Edge, icons were missing or were colored incorrectly. In Microsoft Edge 122, this issue has been resolved. -->

There was a bug where numerous any icons were missing, had the wrong background color, or didn't work with high contrast mode throughout DevTools. In Microsoft Edge 122, all these icons have been fixed and are compatible when high contrast mode is enabled.

<!-- ====================================================================== -->
## Keyboard shortcut to change panels is now working correctly

<!-- Subtitle: In previous versions of Microsoft Edge, the Ctrl + ]/[ keyboard shortcut wasn't working correctly. In Microsoft Edge 122, this issue has been resolved. -->

There was a bug with the Ctrl + ]/Ctrl + [ keyboard shortcut where the next tool in the Activity Bar wasn't selected and the Activity Bar wouldn't update so it looked like the previous tool was selected. For example, starting on the Elements panel:
![Initial state, in Elements tool](./devtools-122-images/keyboard-shortcut-initial-state.png)

Using the shortcut to move across tools, the Elements tab is still highlighted, but the Network tool is displayed:
![Incorrect tool and tab name displayed](./devtools-122-images/keyboard-shortcut-error.png)

This issue has been resolved with Microsoft Edge 122 and works as expected.

<!-- ====================================================================== -->
## Context menu is fixed

<!-- Subtitle: In previous versions of Microsoft Edge, Devtools' context menu was broken and unresponsive. In Microsoft Edge 122, this issue has been resolved. -->

The context menu was unresponsive and would not open when you clicked it, preventing you from customizing DevTools. This is now fixed in Microsoft Edge 122.

![Context menu opened](./devtools-122-images/context-menu.png)

<!-- ====================================================================== -->
## Updated Devtools Copilot explain console errors prompt

<!-- Subtitle: Use Copilot to explain console errors and fix suggestions. -->

We updated the prompt to include a fix plan in addition to the error explanation when using Copilot to help explain console errors:
![Fix plan added to Copilot error explain prompt](./devtools-122-images/updated-copilot-prompt.png)

<!-- ====================================================================== -->
## Announcements from the Chromium project



<!-- ====================================================================== -->
<!-- uncomment if content is copied from developer.chrome.com to this page -->

<!-- > [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page for announcements from the Chromium project is [What's New in DevTools (Chrome 121)](https://developer.chrome.com/blog/new-in-devtools-121) and is authored by [Sofia Emelianova](https://developers.google.com/web/resources/contributors) (Senior Technical Writer working on Chrome DevTools at Google). -->


<!-- ====================================================================== -->
<!-- uncomment if content is copied from developer.chrome.com to this page -->

<!-- [![Creative Commons License](../../../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0). -->
