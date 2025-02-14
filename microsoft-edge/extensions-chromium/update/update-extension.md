---
title: Update a Microsoft Edge extension
description: Updating or removing extensions from the Microsoft Edge Add-ons website.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: extensions
ms.date: 11/04/2022
---
# Update a Microsoft Edge extension

You can update a submitted extension or remove a published extension listing from the Microsoft Edge Add-ons website at any time.

See also:
* [Set an externally installed extension to automatically update](./auto-update.md) - for extensions that don't use Partner Center and the Microsoft Edge Add-ons website.


<!-- ====================================================================== -->
## Update an existing extension in the Microsoft Edge Add-ons website

To update your extension that's at the store (the Microsoft Edge Add-ons website):

1.  Go to your [Partner Center developer dashboard](https://partner.microsoft.com/dashboard/microsoftedge/public/login?ref=dd) and select the extension that you want to update.

1.  Update either the extension package or the metadata of the extension.  If you update the extension package, make sure that you increase the version number in the manifest file.

1.  After you make the changes, click **Publish** to update your extension listing and start the certification process.  The certification process for an update to an extension can take up to 7 business days.

1.  After the `Status` column displays `In the store`, your extension update is available on the Microsoft Edge Add-ons website.

After your extension has been created initially, you can update your extension by [Using the REST API for updating Microsoft Edge Add-ons](./api/using-addons-api.md).


<!-- ====================================================================== -->
## Update your extension during the certification step

While your extension is in the certification stage, and before it gets published to the Microsoft Edge Add-ons website, you can update your submitted extension. You might also need to update your extension if your extension fails the certification process.


To check the status of your extension:

* Go to your [Partner Center developer dashboard](https://partner.microsoft.com/dashboard/microsoftedge/public/login?ref=dd) and select an extension.


To edit (update) your submitted extension:

1. Go to your [Partner Center developer dashboard](https://partner.microsoft.com/dashboard/microsoftedge/public/login?ref=dd) and select an extension.  The information that you filled out during the previous submission is displayed.

1. To open the **Extension overview** section, use the left navigation bar.  To cancel the current submission, select **Cancel submission**.

1. Go to other sections and update either the extension package or the metadata of the extension.  If you update the extension package, make sure that you increase the version number in the manifest file to match changes that were made after the previous package submission.

1. After you finish making changes, select **Publish**.

   **Important:** The review process stops, your current submission is removed from the Microsoft Edge extensions certification pipeline, and then a new review starts, using the new submission.


<!-- ====================================================================== -->
## Update your extension after it failed the certification

After your extension failed the certification process, you need to update your extension and resubmit your extension, incorporating the feedback you got.

To edit your extension:

1. Go to your [Partner Center developer dashboard](https://partner.microsoft.com/dashboard/microsoftedge/public/login?ref=dd) and select the extension that failed the certification process.

1. Update either the extension package or the metadata, incorporating the feedback received from the certification process.  If you update the extension package, make sure that you increase the version in the manifest file.

1. After making changes, select **Publish**.


<!-- ====================================================================== -->
## Remove an extension from the Microsoft Edge Add-ons website

To remove an extension:

1. Go to your [Partner Center developer dashboard](https://partner.microsoft.com/dashboard/microsoftedge/public/login?ref=dd).  From the Dashboard page, select the listing to remove.

1. Select **Extension Overview** on your listing.

1. Select **Unpublish** to remove the listing from the Microsoft Edge Add-ons website.

The extension is now removed from the Microsoft Edge Add-ons website.  Users who already installed your extension can continue to use it, but the extension isn't available to new users.


<!-- ====================================================================== -->
## See also
<!-- all links in article -->

* [Set an externally installed extension to automatically update](./auto-update.md) - for extensions that don't use Partner Center and the Microsoft Edge Add-ons website.
* [Using the REST API for updating Microsoft Edge Add-ons](./api/using-addons-api.md)
* [Partner Center developer dashboard](https://partner.microsoft.com/dashboard/microsoftedge/public/login?ref=dd)
