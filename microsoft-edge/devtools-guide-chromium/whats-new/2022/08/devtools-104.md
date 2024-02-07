---
title: What's New in DevTools (Microsoft Edge 104)
description: "Use Layers in 3D View. Improved display of request URLs in Issues tool. Improving accessibility for the Detached Elements tool. Fix: Arrows representing web socket traffic now render correctly in the Network tool. And more."
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 08/02/2022
---
# What's New in DevTools (Microsoft Edge 104)

[!INCLUDE [Microsoft Edge team note for top of What's New](../../includes/edge-whats-new-note.md)]


<!-- ====================================================================== -->
## Use Layers in 3D View

<!-- Title: Where did Layers go? -->
<!-- Subtitle: Layers isn't a stand-alone tool anymore, it's wrapped up in the comprehensive 3D View; a tool for all your visual debugging needs. -->

The standalone **Layers** tool has been removed in Microsoft Edge version 104.  In previous versions of Microsoft Edge, the **Layers** tool redirected users to the **3D View** tool.

In the **3D View** tool, the **Composited Layers** view has all the features you love from the **Layers** tool, along with some updates.  The **Composited Layers** view is now complemented by two other visual debugging panes: **DOM** and **Z-index**.  Combine these additional views with the **Composited Layers** view for better debugging.

![The Composited Layers tab in the 3D View tool](./devtools-104-images/3d-view-composited-layers.png)

See also:
* [Debug the web in 3D with the 3D View tool](https://blogs.windows.com/msedgedev/2022/06/21/debug-the-web-in-3d-with-the-3d-view-tool/)
* [Navigate webpage layers, z-index, and DOM using the 3D View tool](../../../3d-view/index.md)


<!-- ====================================================================== -->
## In Issues tool, long request URLs have been shortened

<!-- Title: In Issues tool, long request URLs have been shortened -->
<!-- Subtitle: Links to network request URLs have been truncated, making issues easier to read. -->

The **Issues** tool provides recommendations to improve a web page's accessibility, performance, security, and more.  Some of these recommendations include a link to a network request that opens in the **Network** tool.

Previously, issues related to network requests displayed the entire URL for the network request.  When these URLs were lengthy, they took up a lot of space, making the list of issues difficult to browse.  In Microsoft Edge 104, these long request URL links have been truncated to take up less space.  The links still direct to the relevant part of the **Network** tool.

In previous versions of Microsoft Edge:

![Issues tool showing a long URL, making the issue entry too tall](./devtools-104-images/issues-request-urls-long.png)

In Microsoft Edge version 104:

![Issues tool showing the URL truncated to save vertical space](./devtools-104-images/issues-request-urls-short.png)

See also:
* [Find and fix problems using the Issues tool](../../../issues/index.md)


<!-- ====================================================================== -->
## Improved accessibility for the Detached Elements tool

<!-- Title: The Detached Elements tool now works better with assistive technology -->
<!-- Subtitle: In Microsoft Edge 104, Screen readers announce the name of the table of detached elements in the tool. -->

In previous versions of Microsoft Edge, when selecting the table of detached elements in the **Detached Elements** tool, assistive technology only announced "Table" and the number of rows and columns.  In Microsoft Edge version 104, this issue has been fixed.  When selecting the table of detached elements in the **Detached Elements** tool, assistive technology now announces "Detached Elements List, Table" and the number of rows and columns.

![Detached Elements List, Table, 5 rows, 3 columns](./devtools-104-images/a11y-detached-elements.png)

See also:
* [Debug DOM memory leaks with the Detached Elements tool](../../../memory-problems/dom-leaks.md)
* [Navigate DevTools with assistive technology](../../../accessibility/navigation.md)


<!-- ====================================================================== -->
## Fix: Arrows representing web socket traffic now render correctly in the Network tool

<!-- Title: Use the Network tool to understand web socket traffic -->
<!-- Subtitle: Arrows representing messages from the server or client now display correctly in the Network tool. -->

In previous versions of Microsoft Edge, when inspecting web socket traffic in the Network tool, the arrows representing whether a message was sent from the client or server were not rendering correctly.  In Microsoft Edge 104, this issue has been fixed.  Thank you for sending us your feedback about this issue!
*  Green up-arrows (![Green up arrow](./devtools-104-images/green-up-arrow.png)) represent messages sent by the client.
*  Red down-arrows (![Red down arrow](./devtools-104-images/red-down-arrow.png)) represent messages sent by the server.

![Network tool](./devtools-104-images/network-tool-ws-arrows.png)

See also:
* [Network features reference](../../../network/reference.md)


<!-- ====================================================================== -->
## Announcements from the Chromium project

Microsoft Edge 104 also includes the following updates from the Chromium project:

* [Restart frame during debugging](https://developer.chrome.com/blog/new-in-devtools-104/#restart-frame)
* [Group files by Authored / Deployed in the Sources panel](https://developer.chrome.com/blog/new-in-devtools-104/#authored-deployed)
* [New User Timings track in the Performance insights panel](https://developer.chrome.com/blog/new-in-devtools-104/#performance)
* [Reveal assigned slot of an element](https://developer.chrome.com/blog/new-in-devtools-104/#slot)
* [Simulate hardware concurrency for Performance recordings](https://developer.chrome.com/blog/new-in-devtools-104/#simulate)
* [Preview non-color value when autocompleting CSS variables](https://developer.chrome.com/blog/new-in-devtools-104/#css-var)
* [Identify blocking frames in the Back/forward cache pane](https://developer.chrome.com/blog/new-in-devtools-104/#bfcache)
* [Improved autocomplete suggestions for JavaScript objects](https://developer.chrome.com/blog/new-in-devtools-104/#autocomplete)
* [Sourcemaps improvements](https://developer.chrome.com/blog/new-in-devtools-104/#sourcemaps)


<!-- ====================================================================== -->
<!-- uncomment if content is copied from developer.chrome.com to this page -->

<!-- > [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page for announcements from the Chromium project is [What's New in DevTools (Chrome 104)](https://developer.chrome.com/blog/new-in-devtools-104) and is authored by [Jecelyn Yeen](https://developers.google.com/web/resources/contributors#jecelynyeen) (Developer advocate working on Chrome DevTools at Google). -->


<!-- ====================================================================== -->
<!-- uncomment if content is copied from developer.chrome.com to this page -->

<!-- [![Creative Commons License](../../../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0). -->
