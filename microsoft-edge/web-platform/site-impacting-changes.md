---
title: Site compatibility-impacting changes coming to Microsoft Edge
description: Summary of high-impact changes that are planned for Microsoft Edge that may impact website compatibility.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.prod: microsoft-edge
ms.date: 11/01/2021
keywords: microsoft edge, compatibility, web platform
---
# Site compatibility-impacting changes coming to Microsoft Edge

The web platform is a collection of technologies used for building webpages.  The technologies include HTML, CSS, JavaScript, and many other open standards.  The web platform constantly evolves to improve the user experience, security, and privacy.  In some cases, changes may affect the functionality of existing webpages.  For more information about upcoming Chromium project web platform changes, see [Chrome Platform Status Release timeline](https://www.chromestatus.com/features/schedule).

For functionality and compatibility reasons, Microsoft Edge adopts nearly all of the Chromium project's changes to the web platform.  Microsoft remains in full control of the Microsoft Edge browser and may defer or reject changes.  The Microsoft Edge team decides if the change benefits browser users.

Feature areas where Microsoft Edge plans to deviate from Chromium in release timing or behavior are noted in the following table.  This table also highlights high-impact changes that the Microsoft Edge team is tracking.

Review this article often.  The Microsoft Edge team updates this article as thinking evolves, timelines solidify, and new changes are announced.


<!-- ====================================================================== -->
## Differences from the Chromium schedule, and high-impact changes

| Change | Stable Channel | Experimentation | Additional information |
| --- | --- | --- | --- |
| Disallow synchronous `XmlHttpRequest` in page dismissal | v83 (Chrome+1) | | This change is happening in the Chromium project, on which Microsoft Edge is based.  Matching Chrome, Microsoft Edge offers a Group Policy to turn off this change until v88.  For more information, including the planned timeline by Google for this change, see the [Chrome Platform Status entry](https://chromestatus.com/feature/4664843055398912). |
| Display subtle prompt for notification permissions requests | v84 | | Quiet notification requests display a subtle request icon in the address bar for site notification permissions requested using the `Notifications` or `Push` API, replacing the full or standard permission flyout prompt UI.  This feature is currently enabled for all users.  To opt out of quiet notification requests, see `edge://settings/content/notifications`.  In the future, the Microsoft Edge team may explore re-enabling the full flyout notification prompt in some scenarios. |
| Turn off TLS/1.0 and TLS/1.1 | v84 | | |
| Cookies default to `SameSite=Lax` and `SameSite=None-requires-Secure` | v86 (Chrome+1) | Canary v82, Dev v82 | This change is happening in the Chromium project, on which Microsoft Edge is based.  For more information, including the planned timeline by Google for this change, see the [Chrome Platform Status entry](https://chromestatus.com/feature/5088147346030592). |
| Referrer Policy: Default to `strict-origin-when-cross-origin` | v86 (Chrome+1) | Canary v79, Dev v79 | This change is happening in the Chromium project, on which Microsoft Edge is based.  For more information, including the planned timeline by Google for this change, see the [Chrome Platform Status entry](https://chromestatus.com/feature/6251880185331712). |
| Deprecate AppCache | v86 (Chrome+1) | | This change is happening in the Chromium project, on which Microsoft Edge is based.  For more information, see the [WebDev documentation](https://web.dev/appcache-removal).  The Microsoft rollout schedule for deprecation is planned for one release after Chrome.  Requesting an [AppCache OriginTrial Token](https://developers.chrome.com/origintrials/#/view_trial/1776670052997660673) allows sites to continue to use the deprecated API until v90. |
| HTTP authentication disallowed when third-party cookies are blocked | v87 | | Starting with v87, when cookies are blocked for third-party requests, using either the [BlockThirdPartyCookies](/deployedge/microsoft-edge-policies#blockthirdpartycookies) policy or the toggle in `edge://settings`, HTTP authentication is also disallowed.  This change may impact Enterprise Mode [Site List downloads for Internet Explorer mode](/deployedge/edge-ie-mode-policies#configure-using-the-use-the-enterprise-mode-ie-website-list-policy) if the endpoint hosting the list requires the use of HTTP authentication.  To allow the use of both cookies and HTTP authentication for Enterprise Mode Site List downloads, add a matching URL pattern to the [CookiesAllowedForURLs](/deployedge/microsoft-edge-policies#cookiesallowedforurls) policy. |
| Removal of Adobe Flash | v88 | | This change is happening in the Chromium project, on which Microsoft Edge is based.  For more information, see the [Adobe Flash Chromium Roadmap](https://www.chromium.org/flash-roadmap#TOC-Flash-Support-Removed-from-Chromium-Target:-Chrome-88---Jan-2021-). |
| Remove FTP support | v88 | Beta v87 | In v88, FTP support is removed entirely.  This change is happening in the Chromium project, on which Microsoft Edge is based.  For more information, see the [Chrome Platform Status Entry](https://chromestatus.com/feature/6246151319715840).  Enterprises that have sites that still require FTP support can continue to use FTP by configuring the site to use [IE mode](/deployedge/edge-ie-mode). |
| Autoupgrade mixed content images | v88 | | Non-secure (HTTP) references to images are automatically upgraded to HTTPS.  If the image isn't available over HTTPS, the image download fails.  A [Group Policy](/deployedge/microsoft-edge-policies#insecurecontentallowedforurls) is available to control this feature.  This change is happening in the Chromium project, on which Microsoft Edge is based.  For more information, see the [Chrome Platform Status entry](https://chromestatus.com/feature/4926989725073408). |
| Removal of 3DES in TLS | v93 | | Starting with v93, support for the TLS_RSA_WITH_3DES_EDE_CBC_SHA cipher suite will be removed.  This change is happening in the Chromium project, on which Microsoft Edge is based.  For more information, see the [Chrome Platform Status entry](https://chromestatus.com/feature/6678134168485888).  Additionally, in v93, a compatibility policy will be available to support scenarios that need to preserve compatibility with outdated servers.  This compatibility policy will become obsolete and stop working in v95.  Make sure that you update affected servers before then. |
| Deprecate WebRTC's Plan B SDP semantics | v98 (Chrome+2) | | This change is happening in the Chromium project, on which Microsoft Edge is based.  This change deprecates a legacy Session Description Protocol (SDP) dialect called Plan B.  This SDP format is being replaced by the Unified Plan, which is a spec-compliant and cross-browser compatible SDP format.  For more information, see the [Chrome Platform Status entry](https://www.chromestatus.com/feature/5823036655665152), [PSA: Plan B should throw in M96 Beta and Stable](https://groups.google.com/g/discuss-webrtc/c/zRIgxG18D80/m/k4ZPzBO3AAAJ), and [PSA: Plan B throwing in Stable and Extended Deprecation Trial End Date](https://groups.google.com/u/1/g/discuss-webrtc/c/gEHrZyYKsfU).  The Microsoft rollout schedule for deprecation is planned for two releases after Chrome.  Requesting a [WebRTC Plan B Reverse Origin Trial Token](https://developer.chrome.com/origintrials/#/view_trial/3892235977954951169) allows sites to continue to use the deprecated API until v101. |
| Restrict private network requests to secure contexts | v94 | | Starting with v94, access to resources on local (intranet) networks from pages on the internet requires that those pages be delivered over HTTPS.  This change is happening in the Chromium project, on which Microsoft Edge is based.  For more information, see the [Chrome Platform Status entry](https://chromestatus.com/feature/5436853517811712).  Two compatibility policies are available to support scenarios that need to preserve compatibility with non-secure pages: [InsecurePrivateNetworkRequestAllowed](/deployedge/microsoft-edge-policies#insecureprivatenetworkrequestsallowed) and [InsecurePrivateNetworkRequestAllowedForUrls](/deployedge/microsoft-edge-policies#insecureprivatenetworkrequestsallowedforurls). |
| Block mixed content downloads | v94 | | Downloading of files from HTTP URLs will be blocked on HTTPS pages.  This change is happening in the Chromium project, on which Microsoft Edge is based.  For more information, see the [Google security blog entry](https://security.googleblog.com/2020/02/protecting-users-from-insecure_6.html). |
| Block WebSQL in 3rd-party contexts | v97 | | Use of the legacy WebSQL feature will be blocked from 3rd-party frames.  An Enterprise policy [WebSQLInThirdPartyContextEnabled](/deployedge/microsoft-edge-policies#websqlinthirdpartycontextenabled) will be available as an opt-out until v101.  This change is happening in the Chromium project, on which Microsoft Edge is based.  For more information, see the [Chrome Platform Status entry](https://chromestatus.com/feature/5684870116278272). |
| Removal of cross-origin subframe JavaScript dialogs | v99 (Chrome+1) | | Removes `window.alert`, `window.prompt`, and `window.confirm` from cross-origin iFrames.  This change is happening in the Chromium project, on which Microsoft Edge is based.  For more information, see [Intent to Remove: Cross origin subframe JS Dialogs](https://groups.google.com/a/chromium.org/g/blink-dev/c/hTOXiBj3D6A/m/JtkdpDd1BAAJ). |


<!-- ====================================================================== -->
## Notation for browser versions

This article uses the following notation for browser release numbers.

| Notation | Description |
| --- | --- |
| v123 | The feature or change ships in Microsoft Edge version 123. |
| v123 (Chrome+1) | The feature or change ships in Microsoft Edge version 123, which is one release after the feature or change ships in Chrome version 122. |
| v123 (Chrome+2) | The feature or change ships in Microsoft Edge version 123, which is two releases after the feature or change ships in Chrome version 121. |
| Beta v123 | The feature or change ships in version 123 of the Beta preview channel of Microsoft Edge. | 
| Dev v123 | The feature or change ships in version 123 of the Dev preview channel of Microsoft Edge. | 
| Canary v123 | The feature or change ships in version 123 of the Canary preview channel of Microsoft Edge. | 
