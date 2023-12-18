---
title: What's new in DevTools (Microsoft Edge 116)
description: "Move the location of the Activity Bar in Focus Mode. React Developer Tools extensions works in Focus Mode. Added a new view in the Memory panel for Heap Snapshots . And more."
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 12/15/2023
---
# What's New in DevTools (Microsoft Edge 116)

[!INCLUDE [Microsoft Edge team note for top of What's New](../../includes/edge-whats-new-note.md)]


<!-- ====================================================================== -->
## Move the location of the Activity Bar in Focus Mode

<!-- Subtitle: You can now use Microsoft Entra ID for authentication instead of Personal Access Tokens (PATs). You can connect to multiple symbol servers and filter which sourcemaps you want DevTools to fetch. -->

While in Focus Mode, you now have the ability to easily move the activity bar location with a click of a button. By default, the activity bar's orientation will be horizontal, but you can also make it vertical by clicking the "Move activity bar" button.

![Move the location of hte Activity Bar in Focus Mode](./devtools-116-images/move-location-activity-bar.gif)

<!-- ====================================================================== -->
## The React Developer Tools extensions works in Focus Mode

Prior to Edge 116, if you were in Focus Mode, the state of a panel wasn't maintained when you switched to another panel and switched back while using the React Developer Tools extension. This issue has been resolved.

<!-- ====================================================================== -->
## Added a new view in the Memory panel for Heap Snapshots 

<!-- Subtitle: New icons and buttons give an update to the DevTools look and feel. -->

When there's more than one heap snapshot, the "Containment Diff" view will be available in the View dropdown. This view shows only the new objects, deleted objects, or objects in the retaining chain that will eventually lead to a new/deleted node. The "." symbol means that it's a node in the retaining chain. Expanding it further will show the node that is either new or deleted.

![New view in Memory panel](./devtools-116-images/new-view-memory-panel.gif)

<!-- ====================================================================== -->
## Added a new icon for the Recorder panel

Before Edge 116, there was no icon for the Recorder panel: 

![Recorder panel with no icon](./devtools-116-images/recorder-before.png)

After Edge 116, we added a new icon:

![Recorder panel with new icon](./devtools-116-images/recorder-after.png)


<!-- ====================================================================== -->
<!-- uncomment if content is copied from developer.chrome.com to this page -->

<!-- > [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page for announcements from the Chromium project is [What's New in DevTools (Chrome 115)](https://developer.chrome.com/blog/new-in-devtools-115) and is authored by [Jecelyn Yeen](https://developers.google.com/web/resources/contributors#jecelynyeen) (Developer advocate working on Chrome DevTools at Google). -->


<!-- ====================================================================== -->
<!-- uncomment if content is copied from developer.chrome.com to this page -->

<!-- [![Creative Commons License](../../../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0). -->
