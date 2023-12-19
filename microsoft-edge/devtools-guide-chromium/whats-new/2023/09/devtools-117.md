---
title: What's new in DevTools (Microsoft Edge 117)
description: "New Experiment: Explain console errors/warnings with Copilot in Sidebar. Console in Quick View opens with normal content while in Focus Mode. Accessibility Fixes."
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 09/14/2023
---
# What's New in DevTools (Microsoft Edge 117)

[!INCLUDE [Microsoft Edge team note for top of What's New](../../includes/edge-whats-new-note.md)]

<!-- ====================================================================== -->
## New Experiment: Explain console errors/warnings with Copilot in Sidebar

You can use Copilot in the Edge Sidebar to explain DevTools console errors. This feature is available as an experiment starting in Edge 117. If sidebar is enabled, you can search for or explain console errors using Copilot in Sidebar by clicking the **Explain this message in sidebar** button next to a message in the Console. You won't be able to use this feature if sidebar is disabled. 

This experiment is disabled by default and can be enabled with feature flag `msEdgeAIExplainConsoleError`. For example, run Edge browser from command line `msedge.exe --enable-features=msEdgeAIExplainConsoleError`.

![Explain console errors/warnings with Copilot](./devtools-117-images/explain-console-errors-in-sidebar.gif)

<!-- ====================================================================== -->
## Console in Quick View opens with normal content while in Focus Mode

Before Edge 117, when you opened the Console panel in Quick View, the contents would be blank after closing and re-opening. This issue has been resolved and the Console panel will re-open with the expected content.

<!-- ====================================================================== -->
## Accessibility Fixes 

In Edge 117, we addressed a few accessibility issues:
- Updated the hover color for the **Move Activity Bar** button, **Help** button, and the **Customize and control DevTools** (three-dots) button in high contrast theme to be consistent with others
- Fixed the Narrator in the Issues panel to announce the correct size and position for each level.
- Fixed the screen reader keyboard focus so that it focuses on the relevant code in the Elements panel whenever you invoke a URL from the Issues panel
- Improved the high contrast theme so that all heap snapshot information is more visible in the Memory panel

<!-- ====================================================================== -->
<!-- uncomment if content is copied from developer.chrome.com to this page -->

<!-- > [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page for announcements from the Chromium project is [What's New in DevTools (Chrome 115)](https://developer.chrome.com/blog/new-in-devtools-115) and is authored by [Jecelyn Yeen](https://developers.google.com/web/resources/contributors#jecelynyeen) (Developer advocate working on Chrome DevTools at Google). -->


<!-- ====================================================================== -->
<!-- uncomment if content is copied from developer.chrome.com to this page -->

<!-- [![Creative Commons License](../../../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0). -->
