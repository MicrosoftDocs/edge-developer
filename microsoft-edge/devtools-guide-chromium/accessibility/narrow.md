---
description: Verifying that the webpage layout is usable when narrow, as part of accessibility testing.
title: Verify that the webpage layout is usable when narrow
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 10/19/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# Verify that the webpage layout is usable when narrow

An important part of accessibility is to make sure that your web products work well on a narrow viewport. Many users need to zoom the page to be able to use it, and this means that there is not much space left. When there is not enough space, your multi-column layout should turn into a single-column layout, with content placed in an understandable order. This means placing the most important content at the top of the page, and placing additional content further down the page.

By making the browser window narrow and using the arrow keys to scroll the page, you can see that the top navigation bar of the demo page has some accessibility issues.  The top navigation bar overlaps the **Search** form, as shown in the previous image, and that issue needs to be fixed.

You can simulate a narrow viewport by resizing the browser window, but a better way to test the responsiveness of your design is to use the **Device Emulation** tool.  Here are some features of the **Device Emulation** tool that help you find accessibility issues of any website:

*  Without resizing the browser window, resize the page and test whether your [CSS media queries](../device-mode/index.md#show-media-queries) trigger a change in layout.
*  Check for dependencies that use a mouse. By default, device emulation assumes a touch device. This means that any functionality of your product that relies on hover interaction will not work.
*  Do visual testing by simulating different devices, zoom levels, and pixel ratios.
*  Test how your product behaves on unreliable connections or when the user is offline.  Showing the most important interactions to a user on a slow connection is also an accessibility consideration.

To learn more about the **Device Emulation** tool, see [Emulate mobile devices in Microsoft Edge DevTools](../device-mode/index.md).
