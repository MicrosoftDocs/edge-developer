---
title: Update a Microsoft Edge extension
description: How to update or remove an extension that's at the Microsoft Edge Add-ons store.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: extensions
ms.date: 11/04/2022
---
# Update a Microsoft Edge extension

You can update or remove a published extension listing that's at the [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com) store at any time.

For an extension that doesn't use Partner Center and isn't at the Microsoft Edge Add-ons store, see [Set an externally installed extension to automatically update](./auto-update.md).


<!-- ====================================================================== -->
## Update an existing extension at the Microsoft Edge Add-ons store

To update an extension that's at the Microsoft Edge Add-ons store:

1.  Go to your [Partner Center developer dashboard](https://partner.microsoft.com/dashboard/microsoftedge/public/login?ref=dd) and select the extension that you want to update.

1.  Update either the extension package or the metadata of the extension.  If you update the extension package, make sure that you increase the version number in the manifest file.

1.  After you make the changes, click **Publish** to update your extension listing and start the certification process.  The certification process for an update to an extension can take up to 7 business days.

1.  After the `Status` column displays `In the store`, the extension update is available at the Microsoft Edge Add-ons store.

After your extension has been published, you can update the extension via the REST API; see [Use the REST API to update an extension](./api/using-addons-api.md).


<!-- ====================================================================== -->
## Update your extension during the certification step

While your extension is in the certification stage, and before it gets published at the Microsoft Edge Add-ons store, you can update your submitted extension. You might also need to update your extension if your extension fails the certification process.

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
## Remove an extension that's at the Microsoft Edge Add-ons store

To remove an extension:

1. Go to your [Partner Center developer dashboard](https://partner.microsoft.com/dashboard/microsoftedge/public/login?ref=dd).  From the Dashboard page, select the listing to remove.

1. Select **Extension Overview** on your listing.

1. Select **Unpublish** to remove the listing.

The extension is now removed and is no longer present at the [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com) store.  Users who already installed your extension can continue to use it, but the extension isn't available to new users.


<!-- ====================================================================== -->
## See also
<!-- all links in article -->

* [Set an externally installed extension to automatically update](./auto-update.md)
* [Use the REST API to update an extension](./api/using-addons-api.md)

External:
* [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com) store
* [Partner Center developer dashboard](https://partner.microsoft.com/dashboard/microsoftedge/public/login?ref=dd)
