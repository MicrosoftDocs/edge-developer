---
description: This page provides a summary of high-impact changes that could impact site compatibility
title: Site compatibility-impacting changes coming to Microsoft Edge
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 03/30/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, compatibility, web platform
---

# Site compatibility-impacting changes coming to Microsoft Edge  

The web is constantly evolving to improve the user experience, security, and privacy.  In some cases, changes may be significant enough to impact the functionality of existing pages.  The table below summarizes particularly high-impact changes that the Microsoft Edge team is currently tracking.  Please be sure to check back often, as update this page as our thinking evolves, timelines solidify, and new changes are announced.  

| Feature area | Status in Microsoft Edge | Additional information |  
|:--- |:--- |:--- |  
| Cookies default to `SameSite=Lax` | Canary/Dev experimentation starting in M82 | This change is happening in the Chromium project, on which Microsoft Edge is based.  For more information, including the planned timeline by Google for this change, please review the [Chrome Platform Status entry][ChromePlatformStatus5088147346030592].  Based on user and developer feedback, the Microsoft Edge team is shipping this feature in Microsoft Edge at the same time or later than Google.  |  
| Referrer Policy: Default to `strict-origin-when-cross-origin` | Canary/Dev experimentation starting in M79 | This change is happening in the Chromium project, on which Microsoft Edge is based.  For more information, including the planned timeline by Google for this change, please review the [Chrome Platform Status entry][ChromePlatformStatus6251880185331712].  Based on user and developer feedback, the Microsoft Edge team is shipping this feature in Microsoft Edge at the same time or later than Google.  |  
| Disallow synchronous XmlHttpRequest in page dismissal | Shipping in M82 | This change is happening in the Chromium project, on which Microsoft Edge is based.  For more information, including the planned timeline by Google for this change, please review the [Chrome Platform Status entry][ChromePlatformStatus4664843055398912].  Based on enterprise and developer feedback, the Microsoft Edge team is shipping this feature in Microsoft Edge later than Chrome.  Matching Chrome, Edge offers a Group Policy to disable this change until Edge 88.  |  
| Display subtle prompt for notification permissions requests | Canary/Dev experimentation starting in M83 | Users can now opt into Quiet Notification Requests via `edge://settings/content/notifications`. With this setting enabled, Edge will display a subtle request icon in the address bar for sites which request to send users future notifications via the `Notifications` or `Push` APIs. This subtle icon replaces the flyout permission prompt.

An experiment in Canary/Dev turns this behavior on by default for some users, on all sites that request notifications permissions. Users may opt out via `edge://settings/content/notifications`.

In the future, we may explore showing the flyout prompt in specific situations based on user behaviors and other input. | 
| Disable TLS/1.0 and TLS/1.1 by default | Shipping in M84 | The `edge://flags/#show-legacy-tls-warnings` flag may be set to cause Edge to show a non-blocking "Not Secure" notice when loading pages that require legacy TLS protocols.  The [SSLMinVersion][DeployedEdgePoliciesSSLMinVersion] Group Policy permits re-enabling of TLS/1.0 and TLS/1.1; the policy remains available until Edge 88.  | 
| Block mixed content downloads | Shipping one release after Chrome.  Current target release for UI warnings is Edge 85 | This change is happening in the Chromium project, on which Microsoft Edge is based.  For more information, including the planned timeline by Google for this change, please review the [Google security blog entry][GoogleBlogSecurity20200206].  Based on user and developer feedback, the Microsoft Edge team is shipping this feature in Microsoft Edge one release after Chrome ships.  The Microsoft rollout schedule on filetypes to warn or block is planned for one release after Chrome. | 

<!-- image links -->  

<!-- links -->  

[DeployedEdgePoliciesSSLMinVersion]: /deployedge/microsoft-edge-policies#sslversionmin "SSLVersionMin - Microsoft Edge - Policies"  

[ChromePlatformStatus5088147346030592]: https://www.chromestatus.com/feature/5088147346030592 "Cookies default to SameSite=Lax - Chrome Platform Status"  
[ChromePlatformStatus6251880185331712]: https://www.chromestatus.com/feature/6251880185331712 "Referrer Policy: Default to strict-origin-when-cross-origin - Chrome Platform Status"  
[ChromePlatformStatus4664843055398912]: https://www.chromestatus.com/feature/4664843055398912 "Disallow sync XHR in page dismissal JavaScript - Chrome Platform Status"  

[GoogleBlogSecurity20200206]: https://security.googleblog.com/2020/02/protecting-users-from-insecure_6.html "Protecting users from insecure downloads in Google Chrome - Google Online Security Blog"  
