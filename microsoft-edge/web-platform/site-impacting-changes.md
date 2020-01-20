---
description: This page provides a summary of high-impact changes that could impact site compatibility
title: Site compatibility-impacting changes coming to Microsoft Edge
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/13/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, compatibility, web platform
---

# Site compatibility-impacting changes coming to Microsoft Edge

The web is constantly evolving to improve the user experience, security, and privacy.  In some cases, changes may be significant enough to impact the functionality of existing pages.  The table below summarizes particularly high-impact changes that the Microsoft Edge team is currently tracking.  Please be sure to check back often, as update this page as our thinking evolves, timelines solidify, and new changes are announced.  

| Feature area | Status in Microsoft Edge | Additional information |  
| --- | --- | ---:|  
| Cookies default to `SameSite=Lax` | Canary/Dev experimentation starting in M80 | This change is happening in the Chromium project, on which Microsoft Edge is based. For more information, including Google's planned timeline for this change, please review the [Chrome Platform Status entry](https://www.chromestatus.com/feature/5088147346030592).  Based on user and developer feedback, the Microsoft Edge team is shipping this feature in Microsoft Edge at the same time or later than Google. |  
| Referrer Policy: Default to `strict-origin-when-cross-origin` | Canary/Dev experimentation starting in M79 | This change is happening in the Chromium project, on which Microsoft Edge is based.  For more information, including Google's planned timeline for this change, please review the [Chrome Platform Status entry](https://www.chromestatus.com/feature/6251880185331712).  Based on user and developer feedback, the Microsoft Edge team is shipping this feature in Microsoft Edge at the same time or later than Google. |  
| Disallow synchronous XmlHttpRequest in page dismissal | Shipping in M82 | This change is happening in the Chromium project, on which Microsoft Edge is based.  For more information, including Google's planned timeline for this change, please review the [Chrome Platform Status entry](https://chromestatus.com/feature/4664843055398912).  Based on enterprise and developer feedback, the Microsoft Edge team is shipping this feature in Microsoft Edge later than Chrome. Matching Chrome, Edge will offer a Group Policy to disable this change until Edge 88.|  
