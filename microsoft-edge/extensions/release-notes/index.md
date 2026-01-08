---
title: Release notes for Microsoft Edge extensions
description: Enhancements and issues for the user experience (UX) at Partner Center and the Microsoft Edge Add-ons site.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: extensions
ms.date: 01/01/2026
---
# Release notes for Microsoft Edge extensions
<!-- https://aka.ms/EdgeAddonsReleaseNotes = \extensions\whats-new\released-features.md not the present file; the redir can handle -->

<!-- Edge versions and dates: https://learn.microsoft.com/en-us/deployedge/microsoft-edge-release-schedule#microsoft-edge-releases -->

The following updates have been deployed to production, addressing key issues and enhancements for the [Partner Center](https://partner.microsoft.com/dashboard/microsoftedge/) and Microsoft Edge Add-ons experience.

**Detailed contents:**
<!-- todo -->


<!-- ====================================================================== -->
## January 2026
<!-- Edge 144 = Jan. 15, 2026 -->


<!-- ------------------------------ -->
#### Enhanced Status Indicators for Ongoing Processes

* The **Create New Extension** button now provides clearer feedback during the creation process. Instead of greying out, it now displays **Creating...**, along with a loading indicator. This prevents multiple submissions and clearly communicates that the process is in progress.

* The progress bar for image asset uploads on **Store Listings** pages is now displayed inline, indicating real-time upload progress.

* Added progress indication for long page load operation

* The **Save Draft** button is disabled after a successful save on the **Store Listings** page.


<!-- ------------------------------ -->
#### Alerts & Banner Handling Enhancements

* The banners are more intuitive across pages.

* Success banners on the Store Listings page auto-dismiss after 5 seconds.

* Error and warning banners now specify exact field names with clear messaging.

* Image upload errors on the Store Listings page now provide clearer retry instructions.


<!-- ------------------------------ -->
#### URL Validation & Security

* URL-related error messages have clearer wording. 

* Added unreachable URL detection for Long Description, Privacy Policy, and Support URL fields.


<!-- ------------------------------ -->
#### Miscellaneous Fixes

* Users can now save captions while duplicating images on the Store Listings page.
Bug Fixes

* Resolved duplicate logo/image issue.  ([Issue 255](https://github.com/microsoft/MicrosoftEdge-Extensions/issues/255))


<!-- ====================================================================== -->
<!-- ## December 2025 -->
<!-- Edge __ = __ -->


<!-- ====================================================================== -->
<!-- ## November 2025 -->
<!-- Edge __ = __ -->


<!-- ====================================================================== -->
<!-- ## October 2025 -->
<!-- Edge __ = __ -->


<!-- ====================================================================== -->
<!-- ## September 2025 -->
<!-- Edge __ = __ -->


<!-- ====================================================================== -->
<!-- ## August 2025 -->
<!-- Edge __ = __ -->


<!-- ====================================================================== -->
<!-- ## July 2025 -->
<!-- Edge __ = __ -->


<!-- ====================================================================== -->
<!-- ## June 2025 -->
<!-- Edge __ = __ -->


<!-- ====================================================================== -->
<!-- ## May 2025 -->
<!-- Edge __ = __ -->


<!-- ====================================================================== -->
<!-- ## April 2025 -->
<!-- Edge __ = __ -->


<!-- ====================================================================== -->
<!-- ## March 2025 -->
<!-- Edge __ = __ -->


<!-- ====================================================================== -->
## February 2025
<!-- Edge 133 = Feb. 6, 2025 -->


<!-- ------------------------------ -->
#### Transfer ownership of a Microsoft Edge extension

As an extension developer, you can now seamlessly transfer ownership of your Microsoft Edge extension to another party, such as for organizational changes, project handovers, or streamlining management processes.  See [Transfer ownership of an extension](../update/transfer-ownership.md).


<!-- ====================================================================== -->
<!-- ## January 2025 -->
<!-- Edge __ = __ -->


<!-- ====================================================================== -->
<!-- ## December 2024 -->
<!-- Edge __ = __ -->


<!-- ====================================================================== -->
<!-- ## November 2024 -->
<!-- Edge __ = __ -->


<!-- ====================================================================== -->
<!-- ## October 2024 -->
<!-- Edge __ = __ -->


<!-- ====================================================================== -->
## September 2024
<!-- Edge 129 = Sep. 19, 2024 -->


<!-- ------------------------------ -->
#### Microsoft Edge Add-ons Update API, v1.1

v1.1 of this REST API provides increased security.

You can integrate REST API endpoints directly into your continuous integration/continuous delivery (CI/CD) pipeline, to publish extension package updates at [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com) without using Partner Center.  For more information, see [Use the REST API to update an extension at Microsoft Edge Add-ons](../update/api/using-addons-api.md).

See also:
* [Update an extension by using the Microsoft Edge Add-ons API](#update-an-extension-by-using-the-microsoft-edge-add-ons-api), below.


<!-- ====================================================================== -->
<!-- ## August 2024 -->
<!-- Edge __ = __ -->


<!-- ====================================================================== -->
<!-- ## July 2024 -->
<!-- Edge __ = __ -->


<!-- ====================================================================== -->
<!-- ## June 2024 -->
<!-- Edge __ = __ -->


<!-- ====================================================================== -->
<!-- ## May 2024 -->
<!-- Edge __ = __ -->


<!-- ====================================================================== -->
<!-- ## April 2024 -->
<!-- Edge __ = __ -->


<!-- ====================================================================== -->
<!-- ## March 2024 -->
<!-- Edge __ = __ -->


<!-- ====================================================================== -->
<!-- ## February 2024 -->
<!-- Edge __ = __ -->


<!-- ====================================================================== -->
<!-- ## January 2024 -->
<!-- Edge __ = __ -->


<!-- ====================================================================== -->
<!-- ## December 2023 -->
<!-- Edge __ = __ -->


<!-- ====================================================================== -->
<!-- ## November 2023 -->
<!-- Edge __ = __ -->


<!-- ====================================================================== -->
<!-- ## October 2023 -->
<!-- Edge __ = __ -->


<!-- ====================================================================== -->
<!-- ## September 2023 -->
<!-- Edge __ = __ -->


<!-- ====================================================================== -->
<!-- ## August 2023 -->
<!-- Edge __ = __ -->


<!-- ====================================================================== -->
<!-- ## July 2023 -->
<!-- Edge __ = __ -->


<!-- ====================================================================== -->
## June 2023
<!-- Edge 114 = June 2, 2023 -->


<!-- ------------------------------ -->
#### Sidebar

The sidebar feature of Microsoft Edge extensions enables an extension to display custom UI content in the browser sidebar.  See [Develop an extension for the Microsoft Edge sidebar](../developer-guide/sidebar.md).



<!-- ====================================================================== -->
<!-- ## May 2023 -->
<!-- Edge __ = __ -->


<!-- ====================================================================== -->
<!-- ## April 2023 -->
<!-- Edge __ = __ -->


<!-- ====================================================================== -->
<!-- ## March 2023 -->
<!-- Edge __ = __ -->


<!-- ====================================================================== -->
<!-- ## February 2023 -->
<!-- Edge __ = __ -->


<!-- ====================================================================== -->
<!-- ## January 2023 -->
<!-- Edge __ = __ -->


<!-- ====================================================================== -->
<!-- ## December 2022 -->
<!-- Edge __ = __ -->


<!-- ====================================================================== -->
<!-- ## November 2022 -->
<!-- Edge __ = __ -->


<!-- ====================================================================== -->
<!-- ## October 2022 -->
<!-- Edge __ = __ -->


<!-- ====================================================================== -->
<!-- ## September 2022 -->
<!-- Edge __ = __ -->


<!-- ====================================================================== -->
<!-- ## August 2022 -->
<!-- Edge __ = __ -->


<!-- ====================================================================== -->
## July 2022
<!-- Edge 104 = Aug 5, 2022 -->
<!-- Edge 103 = Jun 23, 2022 -->


<!-- ------------------------------ -->
#### Retirement of submitting new Microsoft Edge extensions with Manifest V2

Microsoft Partner Center only accepts new Manifest V3 Microsoft Edge extension submissions, with visibility set as 'Hidden' or 'Public'.  To share your feedback and comments, see [Update your extensions from Manifest V2 to V3](https://github.com/microsoft/MicrosoftEdge-Extensions/discussions/27) in **Discussions** in the MicrosoftEdge-Extensions repo.


<!-- ====================================================================== -->
<!-- ## June 2022 -->
<!-- Edge 103 (Jun. 23, 2022) -->


<!-- ====================================================================== -->
## May 2022
<!-- Edge 102 = 31-May-2022 -->


<!-- ------------------------------ -->
#### You can respond to user reviews about your Microsoft Edge extension

At Partner Center, you can reply to user reviews and feedback about your extension that's posted at [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com). 

To share your feedback and comments about this feature, see [You can now respond to user reviews on your Microsoft Edge Add-ons page](https://github.com/microsoft/MicrosoftEdge-Extensions/discussions/18) in **Discussions** in the MicrosoftEdge-Extensions repo.


<!-- ====================================================================== -->
<!-- ## April 2022 -->
<!-- Edge 101 (Apr. 28, 2022) -->


<!-- ====================================================================== -->
## March 2022
<!-- Edge 99 (Mar. 3, 2022) -->


<!-- ------------------------------ -->
#### Update an extension by using the Microsoft Edge Add-ons API

You can integrate REST API endpoints directly into your continuous integration/continuous delivery (CI/CD) pipeline, to publish extension package updates at [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com) without using Partner Center.  For more information, see [Use the REST API to update an extension at Microsoft Edge Add-ons](../update/api/using-addons-api.md).

Update September 2024: v1.1 of this REST API provides increased security; see [Microsoft Edge Add-ons Update API, v1.1](#microsoft-edge-add-ons-update-api-v11), above.


<!-- ------------------------------ -->
#### Addition of breadcrumbs to Microsoft Partner Center

You can view the navigation bar / tree path while using Partner Center to track the exact Partner Center path that users are visiting.  You can maintain awareness of your location within Microsoft Partner Center.



<!-- ====================================================================== -->
<!-- ## February 2022 -->
<!-- Edge __ = __ -->


<!-- ====================================================================== -->
## January 2022
<!-- Edge 97 = Jan. 6, 2022 -->


<!-- ------------------------------ -->
#### Microsoft Edge extensions developer portal

The new edition of the developer portal contains resources and documentation for Microsoft Edge extensions.  Go to [Microsoft Edge Add-ons Developer](https://developer.microsoft.com/microsoft-edge/extensions/).



<!-- ====================================================================== -->
<!-- ## December 2021 -->
<!-- Edge __ = __ -->


<!-- ====================================================================== -->
<!-- ## November 2021 -->
<!-- Edge __ = __ -->


<!-- ====================================================================== -->
<!-- ## October 2021 -->
<!-- Edge __ = __ -->


<!-- ====================================================================== -->
## September 2021
<!-- Edge 94 = Sep. 24, 2021 -->
<!-- Edge 93 = Sep. 2, 2021 -->


<!-- ------------------------------ -->
#### Extension Analytics Dashboard on Microsoft Partner Center

The Extensions Analytics Dashboard enables you to view your extension's usage, adoption, and in-market performance.  You can also track active user installs, weekly users, total downloads, and usage distribution over a period from [Partner Center](https://partner.microsoft.com/dashboard/microsoftedge/).


<!-- ====================================================================== -->
## August 2021
<!-- Edge 93 = 02-Sep-2021 -->
<!-- Edge 92 = 22-July-2021 -->


<!-- ------------------------------ -->
#### Add team members to your Partner Center account

You can add members from your organization and manage the settings on your Partner Center Account.  See [Add users to the Microsoft Edge program](../publish/aad-account.md).


<!-- ------------------------------ -->
#### Sign into Microsoft Partner Center using your GitHub account

You can use your personal GitHub account credentials to sign into Microsoft Partner Center to submit your Microsoft Edge Extension.  See [Register and sign in to Partner Center using a GitHub account](../publish/github.md).


<!-- ====================================================================== -->
<!-- ## July 2021 -->
<!-- Edge __ = __ -->


<!-- ====================================================================== -->
<!-- ## June 2021 -->
<!-- Edge __ = __ -->


<!-- ====================================================================== -->
## May 2021
<!-- Edge 91 = May 27, 2021 -->

<!-- ------------------------------ -->
#### Manage your extension submissions on Partner Center

This feature allows you to view your extension submission from the [Partner Center](https://partner.microsoft.com/dashboard/microsoftedge/) dashboard and overview pages.  You can easily track your extension submission review status, view past updates, view the status of submissions, and manage extensions on Partner Center.


<!-- ====================================================================== -->
## April 2021
<!-- Edge 90 = Apr 15, 2021 -->


<!-- ------------------------------ -->
#### Support for Manifest V3 extensions

Microsoft Edge extensions now support Manifest V3.  See the blog post [Manifest V3 changes are now available in Microsoft Edge](https://techcommunity.microsoft.com/t5/articles/manifest-v3-changes-are-now-available-in-microsoft-edge/m-p/1780254).



<!-- ====================================================================== -->
<!-- ## March 2021 -->
<!-- Edge 89 = March 8, 2021 -->


<!-- ====================================================================== -->
## February 2021
<!-- Edge 89 = Mar 8, 2021 -->
<!-- Edge 88 = Jan 21, 2021 -->


<!-- ------------------------------ -->
#### Localization of extension listings at Microsoft Edge Add-ons

You can control localization of extension listings that are at [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com).  You can choose a subset of languages, instead of manually entering each language in the listing details on Microsoft Partner Center.  You can also elect to use the same marketing assets across all marketplaces.

See [Partner Center improvements related to Microsoft Edge extensions store listing and certification](https://techcommunity.microsoft.com/t5/articles/partner-center-improvements-related-to-microsoft-edge-extensions/m-p/2118981).


<!-- ====================================================================== -->
## January 2021
<!-- Edge 86 = Jan. 25, 2021 per https://learn.microsoft.com/en-us/microsoft-edge/webview2/release-notes/archive?tabs=dotnetcsharp#1070550 -->


<!-- ------------------------------ -->
#### Extension certification report link

By clicking the extension certification report link, you can view and download the extension certification report from your [Partner Center](https://partner.microsoft.com/dashboard/microsoftedge/) dashboard.  The link to the extension certification report is displayed after the extension submission review is complete.

The certification report contains the result of the extension review and relevant details.


<!-- ====================================================================== -->
## See also

* [Release notes for Microsoft Edge web platform](../../web-platform/release-notes/index.md)
* [Microsoft Edge releases](/deployedge/microsoft-edge-release-schedule#microsoft-edge-releases) (**Version** and **Stable Channel** columns) in _Microsoft Edge release schedule_.
