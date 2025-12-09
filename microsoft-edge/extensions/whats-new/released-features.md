---
title: Release Notes for Microsoft Edge extensions
description: Released features that have been launched on Partner Center for extension developers.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: extensions
ms.date: 12/09/2025
---
# Release Notes for Microsoft Edge extensions
<!-- https://aka.ms/EdgeAddonsReleaseNotes -->
<!-- todo: alts:
# What's New for Microsoft Edge extensions
the aka link has "ReleaseNotes"
-->

The following features or updates have been launched on [Partner Center](https://partner.microsoft.com/dashboard/microsoftedge/) for Microsoft Edge extensions.

The version of Edge is shown as an approximate timeframe and point of reference, to describe Partner Center changes as well.

**Detailed contents:**
<!-- https://github.com/captainbrosset/WebToc -->
* [Edge 133 (February 2025)](#edge-133-february-2025)
   * [Transfer ownership of a Microsoft Edge extension](#transfer-ownership-of-a-microsoft-edge-extension)
* [Edge 129 (September 2024)](#edge-129-september-2024)
   * [Microsoft Edge Add-ons Update API, v1.1](#microsoft-edge-add-ons-update-api-v11)
* [Edge 114 (June 2023)](#edge-114-june-2023)
   * [Sidebar](#sidebar)
* [Edge 103 (July 2022)](#edge-103-july-2022)
   * [Retirement of submitting new Microsoft Edge extensions with Manifest V2](#retirement-of-submitting-new-microsoft-edge-extensions-with-manifest-v2)
* [Edge 101 (May 2022)](#edge-101-may-2022)
   * [You can respond to user reviews about your Microsoft Edge extension](#you-can-respond-to-user-reviews-about-your-microsoft-edge-extension)
* [Edge 99 (March 2022)](#edge-99-march-2022)
   * [Update an extension by using the Microsoft Edge Add-ons API](#update-an-extension-by-using-the-microsoft-edge-add-ons-api)
   * [Addition of breadcrumbs to Microsoft Partner Center](#addition-of-breadcrumbs-to-microsoft-partner-center)
* [Edge 97 (January 2022)](#edge-97-january-2022)
   * [Microsoft Edge extensions developer portal](#microsoft-edge-extensions-developer-portal)
* [Edge 94 (September 2021)](#edge-94-september-2021)
   * [Extension Analytics Dashboard on Microsoft Partner Center](#extension-analytics-dashboard-on-microsoft-partner-center)
* [Edge 93 (August 2021)](#edge-93-august-2021)
   * [Add team members to your Partner Center account](#add-team-members-to-your-partner-center-account)
   * [Sign into Microsoft Partner Center using your GitHub account](#sign-into-microsoft-partner-center-using-your-github-account)
* [Edge 91 (May 2021)](#edge-91-may-2021)
   * [Manage your extension submissions on Partner Center](#manage-your-extension-submissions-on-partner-center)
* [Edge 90 (April 2021)](#edge-90-april-2021)
   * [Support for Manifest V3 extensions](#support-for-manifest-v3-extensions)
* [Edge 89 (February 2021)](#edge-89-february-2021)
   * [Localization of extension listings at Microsoft Edge Add-ons](#localization-of-extension-listings-at-microsoft-edge-add-ons)
* [Edge 86 (January 2021)](#edge-86-january-2021)
   * [Extension certification report link](#extension-certification-report-link)
* [See also](#see-also)


<!-- ====================================================================== -->
## Edge 133 (February 2025)
<!-- 133: https://learn.microsoft.com/en-us/microsoft-edge/webview2/release-notes/archive?tabs=dotnetcsharp#10306539 -->


<!-- ------------------------------ -->
#### Transfer ownership of a Microsoft Edge extension

As an extension developer, you can now seamlessly transfer ownership of your Microsoft Edge extension to another party, such as for organizational changes, project handovers, or streamlining management processes.  See [Transfer ownership of an extension](../update/transfer-ownership.md).


<!-- ====================================================================== -->
## Edge 129 (September 2024)
<!-- 129: https://learn.microsoft.com/en-us/microsoft-edge/webview2/release-notes/archive?tabs=dotnetcsharp#10279245 -->


<!-- ------------------------------ -->
#### Microsoft Edge Add-ons Update API, v1.1

v1.1 of this REST API provides increased security.

You can integrate REST API endpoints directly into your continuous integration/continuous delivery (CI/CD) pipeline, to publish extension package updates at [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com) without using Partner Center.  For more information, see [Use the REST API to update an extension at Microsoft Edge Add-ons](../update/api/using-addons-api.md).

See also:
* [Update an extension by using the Microsoft Edge Add-ons API](#update-an-extension-by-using-the-microsoft-edge-add-ons-api), below.
* [Deprecation of the Update REST API v1](../whats-new/roadmap.md#deprecation-of-the-update-rest-api-v1) in _Roadmap for Microsoft Edge extensions_.


<!-- ====================================================================== -->
## Edge 114 (June 2023)
<!-- 114: https://learn.microsoft.com/en-us/microsoft-edge/webview2/release-notes/archive?tabs=dotnetcsharp#10182332 -->


<!-- ------------------------------ -->
#### Sidebar

The sidebar feature of Microsoft Edge extensions enables an extension to display custom UI content in the browser sidebar.  See [Develop an extension for the Microsoft Edge sidebar](../developer-guide/sidebar.md).


<!-- ====================================================================== -->
## Edge 103 (July 2022)
<!-- 103: https://learn.microsoft.com/en-us/microsoft-edge/webview2/release-notes/archive?tabs=dotnetcsharp#10126442 -->


<!-- ------------------------------ -->
#### Retirement of submitting new Microsoft Edge extensions with Manifest V2

Microsoft Partner Center only accepts new Manifest V3 Microsoft Edge extension submissions, with visibility set as 'Hidden' or 'Public'.  To share your feedback and comments, see [Update your extensions from Manifest V2 to V3](https://github.com/microsoft/MicrosoftEdge-Extensions/discussions/27) in **Discussions** in the MicrosoftEdge-Extensions repo.


<!-- ====================================================================== -->
## Edge 101 (May 2022)
<!-- 101: https://learn.microsoft.com/en-us/microsoft-edge/webview2/release-notes/archive?tabs=dotnetcsharp#10121039 -->


<!-- ------------------------------ -->
#### You can respond to user reviews about your Microsoft Edge extension

At Partner Center, you can reply to user reviews and feedback about your extension that's posted at [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com). 

To share your feedback and comments about this feature, see [You can now respond to user reviews on your Microsoft Edge Add-ons page](https://github.com/microsoft/MicrosoftEdge-Extensions/discussions/18) in **Discussions** in the MicrosoftEdge-Extensions repo.


<!-- ====================================================================== -->
## Edge 99 (March 2022)
<!-- 99: https://learn.microsoft.com/en-us/microsoft-edge/webview2/release-notes/archive?tabs=dotnetcsharp#10115038 -->


<!-- ------------------------------ -->
#### Update an extension by using the Microsoft Edge Add-ons API

You can integrate REST API endpoints directly into your continuous integration/continuous delivery (CI/CD) pipeline, to publish extension package updates at [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com) without using Partner Center.  For more information, see [Use the REST API to update an extension at Microsoft Edge Add-ons](../update/api/using-addons-api.md).

See also:
* [Deprecation of the Update REST API v1](../whats-new/roadmap.md#deprecation-of-the-update-rest-api-v1) in _Roadmap for Microsoft Edge extensions_.


<!-- ------------------------------ -->
#### Addition of breadcrumbs to Microsoft Partner Center

You can view the navigation bar / tree path while using Partner Center to track the exact Partner Center path that users are visiting.  You can maintain awareness of your location within Microsoft Partner Center.


<!-- ====================================================================== -->
## Edge 97 (January 2022)
<!-- 97: https://learn.microsoft.com/en-us/microsoft-edge/webview2/release-notes/archive?tabs=dotnetcsharp#10107254 -->


<!-- ------------------------------ -->
#### Microsoft Edge extensions developer portal

The new edition of the developer portal contains resources and documentation for Microsoft Edge extensions.  Go to [Microsoft Edge Add-ons Developer](https://developer.microsoft.com/microsoft-edge/extensions/).


<!-- ====================================================================== -->
## Edge 94 (September 2021)
<!-- 94, Sep 27: https://learn.microsoft.com/en-us/microsoft-edge/webview2/release-notes/archive?tabs=dotnetcsharp#1099228 -->


<!-- ------------------------------ -->
#### Extension Analytics Dashboard on Microsoft Partner Center

The Extensions Analytics Dashboard enables you to view your extension's usage, adoption, and in-market performance.  You can also track active user installs, weekly users, total downloads, and usage distribution over a period from [Partner Center](https://partner.microsoft.com/dashboard/microsoftedge/).


<!-- ====================================================================== -->
## Edge 93 (August 2021)
<!-- 93, Sep 8: https://learn.microsoft.com/en-us/microsoft-edge/webview2/release-notes/archive?tabs=dotnetcsharp#1096133 -->


<!-- ------------------------------ -->
#### Add team members to your Partner Center account

You can add members from your organization and manage the settings on your Partner Center Account.  See [Add users to the Microsoft Edge program](../publish/aad-account.md).


<!-- ------------------------------ -->
#### Sign into Microsoft Partner Center using your GitHub account

You can use your personal GitHub account credentials to sign into Microsoft Partner Center to submit your Microsoft Edge Extension.  See [Register and sign in to Partner Center using a GitHub account](../publish/github.md).


<!-- ====================================================================== -->
## Edge 91 (May 2021)
<!-- 91: https://learn.microsoft.com/en-us/microsoft-edge/webview2/release-notes/archive?tabs=dotnetcsharp#1086435 -->

<!-- ------------------------------ -->
#### Manage your extension submissions on Partner Center

This feature allows you to view your extension submission from the [Partner Center](https://partner.microsoft.com/dashboard/microsoftedge/) dashboard and overview pages.  You can easily track your extension submission review status, view past updates, view the status of submissions, and manage extensions on Partner Center.


<!-- ====================================================================== -->
## Edge 90 (April 2021)
<!-- https://learn.microsoft.com/en-us/microsoft-edge/webview2/release-notes/archive?tabs=dotnetcsharp#1081841 -->


<!-- ------------------------------ -->
#### Support for Manifest V3 extensions

Microsoft Edge extensions now support Manifest V3.  See the blog post [Manifest V3 changes are now available in Microsoft Edge](https://techcommunity.microsoft.com/t5/articles/manifest-v3-changes-are-now-available-in-microsoft-edge/m-p/1780254).


<!-- ====================================================================== -->
## Edge 89 (February 2021)
<!-- 89: Mar 8: https://learn.microsoft.com/en-us/microsoft-edge/webview2/release-notes/archive?tabs=dotnetcsharp#1077444 -->


<!-- ------------------------------ -->
#### Localization of extension listings at Microsoft Edge Add-ons

You can control localization of extension listings that are at [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com).  You can choose a subset of languages, instead of manually entering each language in the listing details on Microsoft Partner Center.  You can also elect to use the same marketing assets across all marketplaces.

See [Partner Center improvements related to Microsoft Edge extensions store listing and certification](https://techcommunity.microsoft.com/t5/articles/partner-center-improvements-related-to-microsoft-edge-extensions/m-p/2118981).


<!-- ====================================================================== -->
## Edge 86 (January 2021)
<!-- jan 25: 86: https://learn.microsoft.com/en-us/microsoft-edge/webview2/release-notes/archive?tabs=dotnetcsharp#1070550 -->


<!-- ------------------------------ -->
#### Extension certification report link

By clicking the extension certification report link, you can view and download the extension certification report from your [Partner Center](https://partner.microsoft.com/dashboard/microsoftedge/) dashboard.  The link to the extension certification report is displayed after the extension submission review is complete.  The certification report contains the result of the extension review and relevant details.


<!-- ====================================================================== -->
## See also

* [Roadmap for Microsoft Edge extensions](roadmap.md) - upcoming Partner Center features or updates.
* [Release notes for Microsoft Edge web platform](../../web-platform/release-notes/index.md)
