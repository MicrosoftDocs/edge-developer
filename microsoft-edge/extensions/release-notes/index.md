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

<!-- ====================================================================== -->
## January 2026
<!-- Edge 144 = Jan. 15, 2026 -->

The following updates have been deployed to production, addressing key issues and enhancements for the [Partner Center](https://partner.microsoft.com/dashboard/microsoftedge/) and Microsoft Edge Add-ons experience.


<!-- ====================================================================== -->
## Enhanced status indicators for ongoing processes

* The **Create New Extension** button now provides clearer feedback during the creation process.  Instead of the button being grayed-out, the button now displays **Creating...**, along with a loading indicator.  This prevents multiple submissions, and clearly communicates that the process is in-progress.

* The progress bar for image asset uploads on **Store Listings** pages is now displayed inline, indicating real-time upload progress.

* Added progress indication for a long page load operation.

* The **Save Draft** button is now disabled (grayed out) after a successful save on the **Store Listings** page.


<!-- ====================================================================== -->
## Better alerts and banners

* The banners are now more intuitive across pages.

   * Success banners on the **Store Listings** page are automatically dismissed after five seconds.

   * Error and warning banners now specify the exact field names, with clear messaging.

* Image upload errors on the **Store Listings** page now provide clearer _retry_ instructions.


<!-- ====================================================================== -->
## URL validation and security

* URL-related error messages have clearer wording. 

* Added "unreachable URL" detection for the following fields:

   * The **Description** field in the **Details for \<Language\>** page.

   * The **Privacy policy URL** field in the **Properties** page.

   * The **Support contact details** field in the **Properties** page.

   * The following fields continue to have "unreachable URL" detection:

      * The **YouTube video URL** field in the **Details for \<Language\>** page.

      * The **Website URL** field in the **Properties** page.


<!-- ====================================================================== -->
## Duplicating images

* You can now save captions when duplicating images on the **Store Listings** page.

* Resolved an issue when duplicating a logo image.  ([Issue 255](https://github.com/microsoft/MicrosoftEdge-Extensions/issues/255))


<!-- ====================================================================== -->
## See also

* [Archived release notes for Microsoft Edge extensions](./archive.md)
* [Release notes for Microsoft Edge web platform](../../web-platform/release-notes/index.md)
* [Microsoft Edge releases](/deployedge/microsoft-edge-release-schedule#microsoft-edge-releases) (**Version** and **Stable Channel** columns) in _Microsoft Edge release schedule_.
