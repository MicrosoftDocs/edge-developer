---
description: This page provides documentation on the Microsoft Edge (Chromium) tracking prevention feature
title: Tracking Prevention in Microsoft Edge (Chromium)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 02/05/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, compatibility, web platform, tracking prevention, trackers, cookies, storage, ad blocking, tracker blocking, tracking protection
---

# Tracking Prevention in Microsoft Edge (Chromium)  

The tracking prevention feature in Microsoft Edge \(Chromium\) protects users from online tracking by restricting the ability of trackers to access browser-based storage as well as the network.  It is built to uphold the Microsoft Edge \(Chromium\) [browser privacy promise][MicrosoftEdgeBrowserPrivacyPromise] while also ensuring that there is no impact by default to website compatibility or the economic viability of the web.  

Microsoft Edge \(Chromium\) currently offer users three levels of tracking prevention, which are selected by navigating to `edge://settings/privacy`.  

![Three settings of tracking prevention][ImageThreeSettingsTrackingPrevention]  

1.  **Basic** - The least restrictive level of tracking prevention that is designed for users who enjoy personalized advertisements and who do not mind being tracked on the web.  Basic only protects users against malicious trackers such as fingerprinters and cryptominers.  
1.  **Balanced (Default)** - The default level of tracking prevention that is designed for users who want to see less creepy advertisements that follow them around the web while they browse.  Balanced aims to block trackers from sites that users never engage with while minimizing the risk of compatibility issues on the web.  
1.  **Strict** - The most restrictive form of tracking prevention that is designed for users who are okay trading website compatibility for maximum privacy.  

The tracking prevention feature in Microsoft Edge \(Chromium\) is made up of three main components, which work together to determine whether a specific resource from a website should be classified as a tracker and blocked.  The components are as follows:  

1.  **Classification** - The way Microsoft Edge \(Chromium\) determines whether a URL belongs to a tracker.  
1.  **Enforcement** - The actions taken to protect Microsoft Edge \(Chromium\) users from URLs classified as trackers.  
1.  **Mitigations** - The mechanisms provided to ensure user-specified favorite sites still work, while offering strong default protection.  

Each of the components are explored and explained in detail on this page.  

## Classification  

The first component of the tracking prevention feature in Microsoft Edge \(Chromium\) is classification.  To classify online trackers and group them into categories, Microsoft Edge \(Chromium\) uses the [Disconnect][DisconnectMain] open source [tracking protection lists][GitHubDisconnectMeTrackingProtection].  The lists are delivered via the "Trust Protection Lists" component, which are viewable at `edge://components`.  After you download, the lists are stored on disk where you may review and determine whether/how a particular URL is classified.  

To determine if a URL is considered a tracker by the classification system in Microsoft Edge \(Chromium\); a series of host names are checked, starting with an exact match and then proceeding to check for partial matches for up to four labels beyond the top-level domain.  

> **Example**:  
> 
> URL: `https://a.subdomain.of.a.known.tracker.test/some/path`  
> 
> Tested host names:  
> 
> *   `a.subdomain.of.a.known.tracker.test`  
> *   `of.a.known.tracker.test`  
> *   `a.known.tracker.test`  
> *   `known.tracker.test`  
> *   `tracker.test`  
> 
> If any of those host names match with a host name on the [Disconnect][DisconnectMain] [lists][GitHubDisconnectMeTrackingProtection], Microsoft Edge \(Chromium\) proceeds with evaluating enforcement actions and implements to prevent the user from being tracked.  

## Enforcement  

To provide protection for Microsoft Edge \(Chromium\) users from tracking actions on the web, it takes two enforcement actions against trackers:

*   **Restrict storage access** - If a known tracking resource tries to access any web storage where it may try to persist data about the user, Microsoft Edge \(Chromium\) blocks that access.  This includes restricting the ability for that tracker to get or set cookies as well as access storage APIs such as `IndexedDB` and `localStorage`.  
*   **Block resource loads** - If a known tracking resource is being loaded on a website, Microsoft Edge \(Chromium\) may block that load before the request reaches the network depending on compatibility impact of the load and the tracking prevention setting a user has set.  Blocked loads may include tracking scripts, pixels, iframes, and more.  This prevents any data potentially being sent to the tracking domain and may even improve load times and page performance as a side effect.  

A users may click the page info flyout icon on the left side of the address bar to find out which trackers were blocked.  

![Blocked trackers in the page info flyout][ImageBlockedTrackersPageInfoFlyout]  

How the enforcements are applied depends on what level of tracking prevention the user selected and the mitigations that may apply.  

## Mitigations  

To ensure that web compatibility is preserved as much as possible, Microsoft Edge \(Chromium\) has three mitigations to help balance the enforcements in specific situations.  These are the [Org Relationship mitigation](#org-relationship-mitigation) and [Org Engagement mitigation](#org-engagement-mitigation).  

Before diving into the mitigations, it is worth defining the concept of an "Organization" or "Org" for short.  [Disconnect][DisconnectMain] also maintains a list called [entities.json][GitHubDisconnectMeTrackingProtectionEntitiesJson] that defines groups of URLs that are owned by the same parent organization/company.  The tracking prevention feature in Microsoft Edge \(Chromium\) uses this list in both the [Org Relationship mitigation](#org-relationship-mitigation) and [Org Engagement mitigation](#org-engagement-mitigation) to minimize the occurrence of compatibility issues caused by tracking prevention affecting cross-organizational requests.  

### Org Relationship Mitigation  

Several popular websites maintain websites and Content Delivery Networks \(CDNs\) to serve static resources and content to those sites.  To ensure that these types of scenarios are not affected by tracking prevention, Microsoft Edge \(Chromium\) exempts a site from tracking prevention when the site is making third-party requests to other sites owned by the same parent organization \(as defined in the [Disconnect entities.json list][GitHubDisconnectMeTrackingProtectionEntitiesJson]\).  This is best illustrated by an example.  

> An organization named Org1 owns the domains `org1.test` and `org1-cdn.test`, as defined in the [Disconnect entities.json list][GitHubDisconnectMeTrackingProtectionEntitiesJson].  Also imagine that `org1-cdn.test` is classified as a tracker and would normally have tracking prevention enforcements applied to it.  If a user visits `https://org1.test` and the site tries to load a resource from `https://org1-cdn.test`, Microsoft Edge \(Chromium\) does not take any enforcement actions against requests made to `org1-cdn.test` even though it is not a first-party URL.  If another URL that is not part of the Org1 organization tries to load that same resource, however, then the request would be subject to enforcements because it is not part of the same organization.  
> 
> Even though this relaxes tracking prevention enforcements for sites that belong to the same organization, it is unlikely that this introduces a high amount of privacy risk since such organizations are able to determine which sites/resources you have accessed on `https://org1.test` as well `https://org1-cdn.test` using internal back-end data.  

### Org Engagement Mitigation  

The org engagement mitigation was created to minimize compatibility risks introduced by tracking prevention by ensuring that sites owned by organizations that users sufficiently engage with continue to work as expected across the web.  It makes use of [site engagement][ChromiumDesignDocsSiteEngagement] to relax enforcements whenever a user has established an ongoing relationship \(currently defined by a site engagement score of 4.1 or greater\) with a given site.  This again is best illustrated by an example:

> An organization named Social Org owns the domains `social.example` and `social-videos.example`.
> 
> Users are considered to have relationships with Social Org if they have established a site engagement score of 4.1 or greater with any one of domains owned by Social Org.
> 
> If another site, `content-embedder.example`, includes third-party content \(say an embedded video from `social-videos.example`\) from any of the domains owned by Social Org that would normally be restricted by tracking prevention enforcements, the site is exempt from tracking prevention enforcements as long as the user's site engagement score with domains owned by Social Org is maintained above the threshold.
> 
> If a site does not belong to an organization, a user must establish a site engagement score of 4.1 or greater with it directly before any storage access/resource load blocks imposed by tracking prevention are relaxed.
> 
> The org engagement mitigation is currently only applied in Balanced mode so that Microsoft Edge \(Chromium\) is offering the highest possible protections for users who have opted into Strict.

### The Compat Exceptions List  

Based on recent user feedback Microsoft received, Microsoft Edge \(Chromium\) maintains a small list of sites \(most of which are in the Disconnect Content category\) that were breaking due to tracking prevention despite having the above two mitigations in place.

To avoid maintaining this list moving forwards, Microsoft are currently working on the [Storage Access API][GitHubMsExplainersStorageAccessApi] in the Chromium codebase.  The [Storage Access API][GitHubMsExplainersStorageAccessApi] gives site developers a way to request storage access from users directly, providing users with more transparency into how their privacy settings are affecting their browsing experience, and giving site developers controls to quickly and intuitively unblock themselves.

After the [Storage Access API][GitHubMsExplainersStorageAccessApi] is implemented, Microsoft deprecates the compat exceptions list and reaches out to the affected site both to make it aware of the issues, and to request that the site uses the [Storage Access API][GitHubMsExplainersStorageAccessApi] moving forward.  

## Current tracking prevention behavior  

The following table shows the enforcement actions and mitigations that are applied to each category of classified tracker in Microsoft Edge \(Chromium\).  

*   Along the top are the categories of trackers as defined by [Disconnect tracking protection list categories][GitHubDisconnectTrackingProtectionCategories].  
*   Along the left side are the three levels of tracking prevention in Microsoft Edge \(Chromium\) \(Basic, Balanced, and Strict\).  
*   The letter `S` indicates that storage access is blocked.  
*   The letter `B` indicates that both storage access and resource loads \(such as network requests\) are blocked.  
*   A hyphen \(`-`\) indicates that no block is applied to either storage access or resource loads.  

| | Advertizing | Analytics | Content | Cryptomining | Fingerprinting | Social | Other | Same Org Mitigation | Org Engagement Mitigation |  
| - | - | - | - | - | - | - | - | - | - | - |  
| **Basic** | - | - | - | B | B | - | - | Enabled | N/A |  
| **Balanced** | S | - | S | B | B | S | S | Enabled | Enabled |  
| **Strict** | B | B | S | B | B | B | B | Enabled | Disabled |  

> [!NOTE]
> The org engagement mitigation does not apply to the Cryptomining or Fingerprinting categories.  

> [!TIP]
> Strict mode blocks more resource loads than Balanced.  The blocking of more resource loads may result in Strict mode appearing to block less tracking requests than Balanced since the trackers making the requests are never loaded.  

> [!NOTE]
> The Fingerprinting column in [Current tracking prevention behavior](#current-tracking-prevention-behavior) refers to trackers that are solely on the Fingerprinting list.  Trackers that appear on the Fingerprinting list as well as another list are considered non-malicious fingerprinters and are blocked according to the other lists.  

### InPrivate behavior  

In Microsoft Edge \(Chromium\) 79, the default behavior was to apply Strict mode protections in InPrivate.  In Microsoft Edge \(Chromium\) 80, this behavior was replaced by a switch in `edge://settings/privacy` that allows users to decide whether to apply Strict mode protections or to keep their regular settings while browsing InPrivate.  

## Determining whether/how a particular URL is classified  

The easiest way to determine whether a specific URL is classified as a known tracker is to perform the following steps.  

1.  Open DevTools and navigate to the Console tab.  
1.  Reload the page.  
    1.  You may want to clear "Cookies and other site data" first to reset site engagement scores and ensure a completely clean slate.  
1.  Look for any messages that read `Tracking Prevention blocked access to storage for <URL>`.  
    1.  You may expand the messages to see the individual URLs that were blocked.  
1.  If you need to determine which category a specific blocked site is in, the easiest way to do this is to search for it on the [Disconnect services.json list][GitHubDisconnectTrackingProtectionCategories].  The entries are alphabetized, so scrolling to the top of a block of site entries enables you to find the specific category for a particular site.  

> [!TIP]
> If you need to access the tracking prevention lists that are stored on disk, each may be found in one of two locations.  
>
> **Component-based updates** - The lists that are downloaded from the "Trust Protection Lists" component  
>
> Windows: `%LOCALAPPDATA%\Microsoft\Edge <OptionalChannelName>\User Data\Trust Protection Lists`  
>
> macOS: `~/Library/Application Support/Microsoft Edge <OptionalChannelName>/Trust Protection Lists`  
>
> **Installation directory** - The lists that are bundled with the Microsoft Edge \(Chromium\) Installer.  If you selected a different installation directory, your exact paths may be different.  
>
> Windows: `%PROGRAMFILES(x86)%\Microsoft\ Edge <OptionalChannelName>\Application<Version>\Trust Protection Lists`  
>
> macOS: `/Applications/Microsoft Edge.app/Contents/Frameworks/Microsoft Edge Framework.framework/Libraries/Trust Protection Lists`  

## Frequently Asked Questions  

The following section contains answers to frequently asked questions about the tracking prevention feature in Microsoft Edge \(Chromium\).  

**Is there a way to block or allow specific trackers for debugging purposes?**  

Currently, Microsoft Edge \(Chromium\) only exposes an option to disable tracking prevention enforcements from running on a specified site.  This option is accessed via the page info flyout or through the `edge://settings/privacy/trackingPreventionExceptions` page.  

That being said, the "Block" and "Allow" options on the `edge://settings/content/cookies` page may be used to allow or deny specific domains access to storage such as cookies and other browser storage mechanisms.  This is useful for debugging site issues that are caused by tracking prevention enforcements blocking access to storage for a specific site.  

<!-- image links -->  

[ImageThreeSettingsTrackingPrevention]: ../media/web-platform/tracking-prevention/tracking-prevention-settings.png  
[ImageBlockedTrackersPageInfoFlyout]: ../media/web-platform/tracking-prevention/page-info-flyout.png  

<!-- links -->  

[MicrosoftEdgeBrowserPrivacyPromise]: https://microsoftedgewelcome.microsoft.com/privacy "Privacy - Microsoft Edge"  

[ChromiumDesignDocsSiteEngagement]: https://www.chromium.org/developers/design-documents/site-engagement "Site Engagement - The Chromium Projects"  

[DisconnectMain]: https://disconnect.me "Disconnect"  

[GitHubDisconnectMeTrackingProtection]: https://github.com/disconnectme/disconnect-tracking-protection "disconnectme/disconnect-tracking-protection | Github"  
[GitHubDisconnectTrackingProtectionCategories]: https://github.com/disconnectme/disconnect-tracking-protection/blob/master/services.json "services.json - disconnectme/disconnect-tracking-protection | Github"  
[GitHubDisconnectMeTrackingProtectionEntitiesJson]: https://github.com/disconnectme/disconnect-tracking-protection/blob/master/entities.json "entities.json - disconnectme/disconnect-tracking-protection | Github"  

[GitHubMsExplainersStorageAccessApi]: https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/master/StorageAccessAPI/explainer.md "Storage Access API Explainer - MSEdgeExplainers/StorageAccessAPI | GitHub"  