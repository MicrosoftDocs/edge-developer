---
description: This page provides a summary of high-impact changes that could impact site compatibility
title: Site compatibility-impacting changes coming to Microsoft Edge
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/29/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, compatibility, web platform
---

# Site compatibility-impacting changes coming to Microsoft Edge  

The web is constantly evolving to improve the user experience, security, and privacy.  In some cases, changes may be significant enough to impact the functionality of existing pages.  The table below summarizes particularly high-impact changes that the Microsoft Edge team is currently tracking.  Please check back often; the Microsoft Edge team updates the following page as thinking evolves, timelines solidify, and new changes are announced.  

| Change | Stable Channel | Experimentation | Additional information |  
|:--- |:--- |:--- |:--- |
| Cookies default to `SameSite=Lax` | [Chrome or Chrome+1](#release-comments)  | Canary v82, Dev v82 | This change is happening in the Chromium project, on which Microsoft Edge is based.  For more information, including the planned timeline by Google for this change, please review the [Chrome Platform Status entry][ChromePlatformStatus5088147346030592].  |  
| Referrer Policy: Default to `strict-origin-when-cross-origin` | [Chrome or Chrome+1](#release-comments)  | Canary v79, Dev v79 | This change is happening in the Chromium project, on which Microsoft Edge is based.  For more information, including the planned timeline by Google for this change, please review the [Chrome Platform Status entry][ChromePlatformStatus6251880185331712].  |  
| Disallow synchronous XmlHttpRequest in page dismissal | [Chrome+1](#release-comments) \(Edge v83\) |  | This change is happening in the Chromium project, on which Microsoft Edge is based.  Matching Chrome, Microsoft Edge offers a Group Policy to disable this change until Edge 88.  For more information, including the planned timeline by Google for this change, please review the [Chrome Platform Status entry][ChromePlatformStatus4664843055398912].  |  
| Display subtle prompt for notification permissions requests |  | Canary v83, Dev v83 | Users may now opt into Quiet Notification Requests in `edge://settings/content/notifications`.  With this setting enabled, Microsoft Edge displays a subtle request icon in the address bar for sites which request to send users future notifications using the `Notifications` or `Push` API.  This subtle icon replaces the flyout permission prompt.  An experiment in Canary and Dev turns this behavior on by default for some users, on all sites that request notifications permissions.  Users may opt out in `edge://settings/content/notifications`.  In the future, the Microsoft edge team may explore displaying the flyout prompt in specific situations based on user behaviors and other input.  |  
| Disable TLS/1.0 and TLS/1.1 by default | Edge v84 |  | To help discover impacted sites, you may set the `edge://flags/#display-legacy-tls-warnings` flag to cause Microsoft Edge to display a non-blocking "Not Secure" notice when loading pages that require legacy TLS protocols.  The [SSLMinVersion][DeployedEdgePoliciesSSLMinVersion] Group Policy permits re-enabling of TLS/1.0 and TLS/1.1; the policy remains available until Edge 88.  |  
| Block mixed content downloads | [Chrome+1](#release-comments) \(Edge v85\)  |  | This change is happening in the Chromium project, on which Microsoft Edge is based.  For more information, including the planned timeline by Google for this change, please review the [Google security blog entry][GoogleBlogSecurity20200206].  The Microsoft rollout schedule on file types to warn or block is planned for one release after Chrome.  |  
| Deprecate AppCache | [Chrome+1](#release-comments) \(Edge v86\)  |  | This change is happening in the Chromium project, on which Microsoft Edge is based.  For more information, please review the [WebDev documentation][WebDevAppCacheRemoval].  The Microsoft rollout schedule for deprecation is planned for one release after Chrome.  Requesting an [AppCache OriginTrial Token][AppCacheOriginTrial] allows sites to continue to use the deprecated API until Edge v90. |  
| Removal of Adobe Flash | Edge v88  |  | This change is happening in the Chromium project, on which Microsoft Edge is based.  For more information, please review the [Adobe Flash Chromium Roadmap][ChromiumFlashRoadmapSupportRemoved].  | 
##### Release comments  

:::row:::
   :::column span="1":::
      Chrome+1
   :::column-end:::
   :::column span="2":::
      Based on user and developer feedback, the indicated feature or change ships one release after Chrome.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      Chrome or Chrome+1
   :::column-end:::
   :::column span="2":::
      Based on user and developer feedback, the indicated feature or change ships at the same time or one release after Chrome.
   :::column-end:::
:::row-end:::


<!-- image links -->  

<!-- links -->  

[DeployedEdgePoliciesSSLMinVersion]: /deployedge/microsoft-edge-policies#sslversionmin "SSLVersionMin - Microsoft Edge - Policies"  

[ChromePlatformStatus4664843055398912]: https://www.chromestatus.com/feature/4664843055398912 "Disallow sync XHR in page dismissal JavaScript - Chrome Platform Status"  
[ChromePlatformStatus5088147346030592]: https://www.chromestatus.com/feature/5088147346030592 "Cookies default to SameSite=Lax - Chrome Platform Status"  
[ChromePlatformStatus6251880185331712]: https://www.chromestatus.com/feature/6251880185331712 "Referrer Policy: Default to strict-origin-when-cross-origin - Chrome Platform Status"  

[ChromiumFlashRoadmapSupportRemoved]: https://www.chromium.org/flash-roadmap#TOC-Flash-Support-Removed-from-Chromium-Target:-Chrome-88---Jan-2021- "Flash Support Removed from Chromium (Target: Chrome 88+ - Jan 2021) - Flash Roadmap | Chromium Projects"  

[GoogleBlogSecurity20200206]: https://security.googleblog.com/2020/02/protecting-users-from-insecure_6.html "Protecting users from insecure downloads in Google Chrome - Google Online Security Blog" 

[WebDevAppCacheRemoval]: https://web.dev/appcache-removal/ "AppCache Removal"
[AppCacheOriginTrial]: https://developers.chrome.com/origintrials/#/view_trial/1776670052997660673 "AppCache OriginTrial token"
