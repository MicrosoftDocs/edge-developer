---
title: Site compatibility-impacting changes coming to Microsoft Edge
description: Summary of high-impact changes that are planned for Microsoft Edge that may impact website compatibility.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.date: 01/19/2024
---
# Site compatibility-impacting changes coming to Microsoft Edge

This article lists the schedule of changes for Microsoft Edge and the Chromium project.  It also highlights any differences and high-impact changes which the Microsoft Edge team is tracking especially closely.
  
The web platform is a collection of technologies used for building webpages, including HTML, CSS, JavaScript, and many other open standards.  The web platform constantly evolves to improve the user experience, security, and privacy.  In some cases, these changes may affect the functionality of existing webpages.

For functionality and compatibility reasons, Microsoft Edge adopts nearly all of the Chromium project's changes to the web platform.  However, Microsoft retains full control of the Microsoft Edge browser and may defer or reject changes. 
 The Microsoft Edge team decides if the change benefits browser users.

For information about upcoming Chromium project web platform changes, see [Chrome Platform Status Release timeline](https://chromestatus.com/roadmap).

Check this article often as the Microsoft Edge team updates this article as thinking evolves, timelines solidify, and new changes are announced.


<!-- ====================================================================== -->
## Differences from the Chromium schedule, and high-impact changes

This table lists:
*  Changes where the rollout schedule for Microsoft Edge differs from the upstream Chromium project.
*  High-impact changes which the Microsoft Edge team is tracking closely.<!-- doesn't include low-impact changes, which are unlikely to have compatibility impact -->

<!-- order of rows: newest version (such as "Future/TBD") at top, then greatest to smallest version # -->

<!-- latest = 10 most recent versions (Stable channel); as of Jan. 19, 2024, latest Stable = 120, so the 10 most recent versions = 111 through 120+ -->
##### [Latest versions](#tab/latest)

| Change | Stable channel | Experimentation | Additional information |
| --- | --- | --- | --- |
| Deprecate unload event | Future release (TBD) | | Introduces a new Permission-Policy to allow creating unload event listeners. The default policy is `allow`, but the default policy will gradually be migrated to `deny`, such that unload handlers stop firing on pages, unless a page explicitly opts in to re-enable them.  This change is happening in the Chromium project, on which Microsoft Edge is based.  For more information, see [Intent to Deprecate: Deprecate unload event](https://groups.google.com/a/chromium.org/g/blink-dev/c/dvusqw9-IhI/m/SBkm_u1RAQAJ). |
| Removal of cross-origin subframe JavaScript dialogs | Future release (TBD) | | Removes `window.alert`, `window.prompt`, and `window.confirm` from cross-origin iframes.  This change is happening in the Chromium project, on which Microsoft Edge is based.  For more information, see [Intent to Remove: Cross origin subframe JS Dialogs](https://groups.google.com/a/chromium.org/g/blink-dev/c/hTOXiBj3D6A/m/JtkdpDd1BAAJ). |
| Removal of mutation events | v127 | | Removes support for mutation events in Chromium. Use the [MutationObserver](https://developer.mozilla.org/docs/Web/API/MutationObserver) API instead.  See [Intent to Deprecate: Mutation Events](https://groups.google.com/a/chromium.org/g/blink-dev/c/qDsKRU-cQ_4/m/isA1mZ_aAAAJ). |
| Removal of Web SQL | v124 | | Fully removes Web SQL support. In prior releases, Web SQL support was disabled by default but could be re-enabled via the [WebSQLAccess policy](/deployedge/microsoft-edge-policies#websqlaccess). After this change, there is no longer any mechanism to enable Web SQL support. This change is happening in the Chromium project, on which Microsoft Edge is based. For more information, see [Intent to Deprecate and Remove Web SQL](https://groups.google.com/a/chromium.org/g/blink-dev/c/fWYb6evVA-w/m/pziWcvboAgAJ). |
| Added support for AVIF and AV1 file formats | v121 | | Microsoft Edge now supports the AVIF and AV1 file formats, which offer better compression and higher quality images and videos.  Users can enjoy faster loading times and better quality media on websites. |
| Ignore modifications to `document.domain` by default | v119 | | The `document.domain` property historically could be set to relax the same-origin policy and allow subdomains from a site to interact. This behavior will be disabled by default such that setting the `document.domain` property will have no effect.  For more information and workarounds, see [Microsoft Edge will disable modifying document.domain](/deployedge/edge-learnmore-origin-keyed-agent-cluster). |
| New TLS server certificate verifier | v111 (managed devices), v109 (unmanaged devices) | | No site compatibility impacts are anticipated.  If you have uncommon TLS server certificate deployments, you should test in v109 to confirm there's no impact. For more information and testing guidance, see [Changes to Microsoft Edge browser TLS server certificate verification](/deployedge/microsoft-edge-security-cert-verification). |

##### [Earlier versions](#tab/earlier)

| Change | Stable channel | Experimentation | Additional information |
| --- | --- | --- | --- |
| Send CORS preflight requests for private network access | v104 | | Starting with v104, Microsoft Edge sends a CORS [preflight](https://developer.chrome.com/blog/private-network-access-preflight/) request before a page from the internet is allowed to request resources from a local network (intranet).  The intranet server should respond to the preflight by providing explicit permission to access the resource.  The result of this check is not yet enforced.  Enforcement will begin in v111 at the earliest.  This change is happening in the Chromium project, on which Microsoft Edge is based.  For more information, see the [Chrome Platform Status entry](https://chromestatus.com/feature/5737414355058688) and [_Chrome Developers_ blog post](https://developer.chrome.com/blog/private-network-access-preflight/#rollout-plan).  Two compatibility policies are available to suppress the CORS preflight request: [InsecurePrivateNetworkRequestAllowed](/deployedge/microsoft-edge-policies#insecureprivatenetworkrequestsallowed) and [InsecurePrivateNetworkRequestAllowedForUrls](/deployedge/microsoft-edge-policies#insecureprivatenetworkrequestsallowedforurls). |
| Block external protocols in sandboxed frames by default | v103 | | Blocks the use of external protocols (that interact with non-browser applications) from sandboxed iframes unless permission is explicitly granted by the `sandbox` attribute on the frame. This change is happening in the Chromium project, on which Microsoft Edge is based. For more information, see the [Chrome Platform Status entry](https://chromestatus.com/feature/5680742077038592). |
| Three-digit version number in the User-Agent string | v100 | | Starting with v100, Microsoft Edge will send a three-digit version number in the User-Agent header, such as `Edg/100`. This may confuse scripts or server-side analytics that use a buggy parser to determine the User-Agent string version number. Starting with v97, site owners can emulate this condition before v100 by enabling the experiment flag `#force-major-version-to-100` in `edge://flags`. |
| Deprecate WebRTC's Plan B SDP semantics | v98 (Chrome+2) | | This change is happening in the Chromium project, on which Microsoft Edge is based.  This change deprecates a legacy Session Description Protocol (SDP) dialect called Plan B.  This SDP format is being replaced by the Unified Plan, which is a spec-compliant and cross-browser compatible SDP format.  For more information, see the [Chrome Platform Status entry](https://www.chromestatus.com/feature/5823036655665152), [PSA: Plan B should throw in M96 Beta and Stable](https://groups.google.com/g/discuss-webrtc/c/zRIgxG18D80/m/k4ZPzBO3AAAJ), and [PSA: Plan B throwing in Stable and Extended Deprecation Trial End Date](https://groups.google.com/u/1/g/discuss-webrtc/c/gEHrZyYKsfU).  The Microsoft rollout schedule for deprecation is planned for two releases after Chrome.  Requesting a [WebRTC Plan B Reverse Origin Trial Token](https://developer.chrome.com/origintrials/#/view_trial/3892235977954951169) allows sites to continue to use the deprecated API until v101. |
| Block WebSQL in third-party contexts | v97 | | Use of the legacy WebSQL feature will be blocked from third-party frames.  An Enterprise policy [WebSQLInThirdPartyContextEnabled](/deployedge/microsoft-edge-policies#websqlinthirdpartycontextenabled) will be available as an opt-out until v101.  This change is happening in the Chromium project, on which Microsoft Edge is based.  For more information, see the [Chrome Platform Status entry](https://chromestatus.com/feature/5684870116278272). |
| Block mixed content downloads | v94 | | Downloading of files from HTTP URLs will be blocked on HTTPS pages.  This change is happening in the Chromium project, on which Microsoft Edge is based.  For more information, see the [Google security blog entry](https://security.googleblog.com/2020/02/protecting-users-from-insecure_6.html). |
| Restrict private network requests to secure contexts | v94 | | Starting with v94, access to resources on local (intranet) networks from pages on the internet requires that those pages be delivered over HTTPS.  This change is happening in the Chromium project, on which Microsoft Edge is based.  For more information, see the [Chrome Platform Status entry](https://chromestatus.com/feature/5436853517811712).  Two compatibility policies are available to support scenarios that need to preserve compatibility with non-secure pages: [InsecurePrivateNetworkRequestAllowed](/deployedge/microsoft-edge-policies#insecureprivatenetworkrequestsallowed) and [InsecurePrivateNetworkRequestAllowedForUrls](/deployedge/microsoft-edge-policies#insecureprivatenetworkrequestsallowedforurls). |
| Removal of 3DES in TLS | v93 | | Starting with v93, support for the TLS_RSA_WITH_3DES_EDE_CBC_SHA cipher suite will be removed.  This change is happening in the Chromium project, on which Microsoft Edge is based.  For more information, see the [Chrome Platform Status entry](https://chromestatus.com/feature/6678134168485888).  Additionally, in v93, a compatibility policy will be available to support scenarios that need to preserve compatibility with outdated servers.  This compatibility policy will become obsolete and stop working in v95.  Make sure that you update affected servers before then. |
| Autoupgrade mixed content images | v88 | | Non-secure (HTTP) references to images are automatically upgraded to HTTPS.  If the image isn't available over HTTPS, the image download fails.  A [Group Policy](/deployedge/microsoft-edge-policies#insecurecontentallowedforurls) is available to control this feature.  This change is happening in the Chromium project, on which Microsoft Edge is based.  For more information, see the [Chrome Platform Status entry](https://chromestatus.com/feature/4926989725073408). |
| Removal of Adobe Flash | v88 | | This change is happening in the Chromium project, on which Microsoft Edge is based.  For more information, see the [Adobe Flash Chromium Roadmap](https://www.chromium.org/flash-roadmap#TOC-Flash-Support-Removed-from-Chromium-Target:-Chrome-88---Jan-2021-). |
| Remove FTP support | v88 | Beta v87 | In v88, FTP support is removed entirely.  This change is happening in the Chromium project, on which Microsoft Edge is based.  For more information, see the [Chrome Platform Status Entry](https://chromestatus.com/feature/6246151319715840).  Enterprises that have sites that still require FTP support can continue to use FTP by configuring the site to use [IE mode](/deployedge/edge-ie-mode). |
| HTTP authentication disallowed when third-party cookies are blocked | v87 | | Starting with v87, when cookies are blocked for third-party requests, using either the [BlockThirdPartyCookies](/deployedge/microsoft-edge-policies#blockthirdpartycookies) policy or the toggle in `edge://settings`, HTTP authentication is also disallowed.  This change may impact Enterprise Mode [Site List downloads for Internet Explorer mode](/deployedge/edge-ie-mode-policies#configure-using-the-use-the-enterprise-mode-ie-website-list-policy) if the endpoint hosting the list requires the use of HTTP authentication.  To allow the use of both cookies and HTTP authentication for Enterprise Mode Site List downloads, add a matching URL pattern to the [CookiesAllowedForURLs](/deployedge/microsoft-edge-policies#cookiesallowedforurls) policy. |
| Deprecate AppCache | v86 (Chrome+1) | | This change is happening in the Chromium project, on which Microsoft Edge is based.  For more information, see the [WebDev documentation](https://web.dev/appcache-removal).  The Microsoft rollout schedule for deprecation is planned for one release after Chrome.  Requesting an [AppCache OriginTrial Token](https://developers.chrome.com/origintrials/#/view_trial/1776670052997660673) allows sites to continue to use the deprecated API until v90. |
| Referrer Policy: Default to `strict-origin-when-cross-origin` | v86 (Chrome+1) | Canary v79, Dev v79 | This change is happening in the Chromium project, on which Microsoft Edge is based.  For more information, including the planned timeline by Google for this change, see the [Chrome Platform Status entry](https://chromestatus.com/feature/6251880185331712). |
| Cookies default to `SameSite=Lax` and `SameSite=None-requires-Secure` | v86 (Chrome+1) | Canary v82, Dev v82 | This change is happening in the Chromium project, on which Microsoft Edge is based.  For more information, including the planned timeline by Google for this change, see the [Chrome Platform Status entry](https://chromestatus.com/feature/5088147346030592). |
| Turn off TLS/1.0 and TLS/1.1 | v84 | | Versions 1.0 and 1.1 of the TLS protocol used by HTTPS sites are now obsolete and unavailable in modern browsers. |
| Display subtle prompt for notification permissions requests | v84 | | Quiet notification requests display a subtle request icon in the address bar for site notification permissions requested using the `Notifications` or `Push` API, replacing the full or standard permission flyout prompt UI.  This feature is currently enabled for all users.  To opt out of quiet notification requests, see `edge://settings/content/notifications`.  In the future, the Microsoft Edge team may explore re-enabling the full flyout notification prompt in some scenarios. |
| Disallow synchronous `XmlHttpRequest` in page dismissal | v83 (Chrome+1) | | This change is happening in the Chromium project, on which Microsoft Edge is based.  Matching Chrome, Microsoft Edge offers a Group Policy to turn off this change until v88.  For more information, including the planned timeline by Google for this change, see the [Chrome Platform Status entry](https://chromestatus.com/feature/4664843055398912). |

---


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
