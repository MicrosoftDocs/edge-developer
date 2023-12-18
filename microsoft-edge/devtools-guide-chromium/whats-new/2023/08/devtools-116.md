---
title: What's new in DevTools (Microsoft Edge 116)
description: "Move the location of the Activity Bar in Focus Mode. React Developer Tools extensions works in Focus Mode.  Containment Diff view in the Memory tool when multiple heap snapshots.  And more."
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
## Containment Diff view in the Memory tool when multiple heap snapshots

<!-- Subtitle: New icons and buttons give an update to the DevTools look and feel. -->

When there's more than one heap snapshot, the "Containment Diff" view will be available in the View dropdown:

![The Containment Diff view in the Memory tool](./devtools-116-images/new-view-memory-panel.gif)

The Containment Diff view shows only the new objects, deleted objects, or objects in the retaining chain that will eventually lead to either a new or deleted node.  The "." symbol means that it's a node in the retaining chain.  Expanding the view displays the node that's new or deleted.


<!-- ====================================================================== -->
## Added a new icon for the Recorder panel

Before Microsoft Edge 116, there was no icon for the Recorder tool:
<!-- todo: can't just mention update of Recorder tool, since the Recorder tool has never been mentioned or introduced as new in What's New.  Need What's New entry "Microsoft Edge v123 added the Recorder tool from the Chromium engine" -->

![Recorder panel with no icon](./devtools-116-images/recorder-before.png)

Microsoft Edge 116 adds a new icon:

![Recorder panel with new icon](./devtools-116-images/recorder-after.png)

See also:
* [Record, replay, and measure user flows (Recorder tool)](https://developer.chrome.com/docs/devtools/recorder)
* [Recorder features reference](https://developer.chrome.com/docs/devtools/recorder/reference)
* [Customize the Recorder with extensions](https://developer.chrome.com/docs/devtools/recorder/extensions)
<!-- todo: link to local articles -->


<!-- ====================================================================== -->
## Announcements from the Chromium project

Microsoft Edge 116 also includes the following updates from the Chromium project:

<!-- todo: maybe delete some links -->
* [Improved debugging of missing stylesheets](https://developer.chrome.com/blog/new-in-devtools-116/#stylesheets)
* [Linear timing support in Elements > Styles > Easing Editor](https://developer.chrome.com/blog/new-in-devtools-116/#linear)
* [Storage buckets support and metadata view](https://developer.chrome.com/blog/new-in-devtools-116/#storage)
* [Lighthouse 10.3.0](https://developer.chrome.com/blog/new-in-devtools-116/#lighthouse)
* [Accessibility: Keyboard commands and improved screen reading](https://developer.chrome.com/blog/new-in-devtools-116/#accessibility)
* [Miscellaneous highlights](https://developer.chrome.com/blog/new-in-devtools-116/#misc)


<!-- ====================================================================== -->
<!-- uncomment if content is copied from developer.chrome.com to this page -->

<!-- > [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page for announcements from the Chromium project is [What's New in DevTools (Chrome 116)](https://developer.chrome.com/blog/new-in-devtools-116) and is authored by [Sofia Emelianova](https://developers.google.com/web/resources/contributors#jecelynyeen) (Developer advocate working on Chrome DevTools at Google). -->


<!-- ====================================================================== -->
<!-- uncomment if content is copied from developer.chrome.com to this page -->

<!-- [![Creative Commons License](../../../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0). -->
