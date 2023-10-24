---
title: Use Origin Trials in Microsoft Edge
description: Safely experiment for a fixed period of time and provide feedback on new platform features.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 10/24/2023
---
# Use Origin Trials in Microsoft Edge

You can use Origin Trials to try out experimental APIs on your own live site for a limited period of time.  When using Origin Trials, users of Microsoft Edge that visit your site might run code that uses experimental APIs.

To support the experimental APIs, users don't need to go to `edge://flags` on their own device to access the experimental APIs that your site uses.  Instead, you register the origin (for example, `https://www.contoso.com:443`) that you want to use the experimental feature on, and you'll then be sent a token that you add to the code of your website.  Sending the token is not automatic and immediate, but is a manual process that can take a number of days.<!-- todo: indicate whether the token is automatically sent immediately, or if there's a manual process that takes a day or so -->

To see a list of the available origin trials and register your origin to give them a try, see [Microsoft Edge Origin Trials](https://microsoftedge.github.io/MSEdgeExplainers/origin-trials/).  To assess the suitability of using the experimental APIs on your website, check the minimum version requirements for Microsoft Edge, and the trial end date.

You can also provide feedback to browser engineers and the web standards community about the design of the API, your use cases, or your experience using the APIs.

For more information, see the **Getting Started** and **Developer Guidelines** sections in [Microsoft Edge Origin Trials](https://microsoftedge.github.io/MSEdgeExplainers/origin-trials/).


<!-- ====================================================================== -->
## See also

* [Experimental features and origin trials](../progressive-web-apps-chromium/how-to/origin-trials.md) in the Progressive Web Apps (PWA) docs
