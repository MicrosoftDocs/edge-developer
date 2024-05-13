---
title: What's New in DevTools (Microsoft Edge 125)
description: "postMessage events and handlers are distinguished from other events on the timeline. Move a tab left or right in the Activity bar by right-clicking it. Network tab shows a warning icon when using overrides or throttling. And more."
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 05/16/2024
---
# What's New in DevTools (Microsoft Edge 125)

[!INCLUDE [Microsoft Edge team note for top of What's New](../../includes/edge-whats-new-note.md)]


<!-- ====================================================================== -->
## New dedicated setting for CSS Selector Stats in Performance Tool

<!-- Subtitle: Use the "Enable CSS selector stats" setting instead of the "Enable advanced rendering instrumentation (slow)" to capture CSS selector statistics for Recalculate Style events-->

There's a new setting in the Performance tool dedicated to the CSS selector statistics feature: **Enable CSS selector stats**. Previously the **Enable advanced rendering instrumentation (slow)** checkbox was used to enable this feature.

To record a performance trace with selector stats, select the **Enable CSS selector stats** checkbox before recording. To view the statistics for a single event, select a `Recalculate Style` event in your recording and open the **Selector Stats** tab. In this tab, we've updated the time unit from microseconds to milliseconds, replaced the fast reject count column with % of slow-path non-matches, and the elapsed column is sorted from high to low by default to help you find the most time consuming CSS selectors.

![Selector stats tab](./devtools-125-images/selector-stats.png)

<!-- ====================================================================== -->
## The "Edit and Resend" function has been restored in the Network tool

<!-- Subtitle: Change and resend a network request by right-clicking it and selecting Edit and Resend. -->

In previous versions of Microsoft Edge, right-clicking on a network request you want to change and resend, and selecting **Edit and Resend** was unresponsive and had no effect. This issue has been resolved and works as expected now.

![Edit and Resend function on a network request](./devtools-125-images/edit-and-resend.png)

See also:
* [Opening the Network Console tool from within the Network tool](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/network-console/network-console-tool#opening-the-network-console-tool-from-within-the-network-tool)

<!-- ====================================================================== -->

## Announcements from the Chromium project

Microsoft Edge 125 also includes the following updates from the Chromium project:



<!-- ====================================================================== -->
<!-- uncomment if content is copied from developer.chrome.com to this page -->

<!-- > [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page for announcements from the Chromium project is [What's New in DevTools (Chrome 124)](https://developer.chrome.com/blog/new-in-devtools-124) and is authored by [Sofia Emelianova](https://developers.google.com/web/resources/contributors) (Senior Technical Writer working on Chrome DevTools at Google). -->


<!-- ====================================================================== -->
<!-- uncomment if content is copied from developer.chrome.com to this page -->

<!-- [![Creative Commons License](../../../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0). -->
