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


<!-- ====================================================================== -->
## Update an existing extension in the Microsoft Edge Add-ons website

To update your extension on the store, follow these steps:

1.  Go to your [developer dashboard](https://partner.microsoft.com/dashboard/microsoftedge/public/login?ref=dd) and select the extension that you want to update.

1.  Update either the extension package or the metadata of the extension.  If you update the extension package, make sure that you increase the version number in the manifest file.

1.  After you make the changes, select **Publish** to update your extension listing, and start the certification process.

    > [!NOTE]
    > The certification process for an update to an extension can take up to 7 business days.

1.  After the `Status` column displays `In the store`, your extension update is available on the Microsoft Edge Add-ons website.

> [!TIP]
> After your extension has been created initially, you'll be able to update it programmatically [Using the Microsoft Edge Add-ons API (Beta)](api/using-addons-api.md).


<!-- ====================================================================== -->
## Update your extension during the certification step

While your extension is in the certification stage, and before it gets published to the Microsoft Edge Add-ons website, you can update it. If your extension fails the certification process, you might also need to update your extension.

To check the status of your extension, go to the dashboard associated with your listing on [Partner Center](https://partner.microsoft.com/dashboard/microsoftedge/public/login?ref=dd).

To edit your submission, follow these steps:

1. Go to your [developer dashboard](https://partner.microsoft.com/dashboard/microsoftedge/public/login?ref=dd) and select the extension that you want to update.  The information you filled out during the previous submission is displayed.

1. To open the **Extension overview** section, use the left navigation bar.  To cancel the current submission, select **Cancel submission**.

1. Go to other sections and update either the extension package or the metadata of the extension.  If you update the extension package, make sure that you increase the version number in the manifest file to match changes since the previous package submission.

1. After you finish making changes, select **Publish**.

> [!IMPORTANT]
> The process stops and removes your current submission from the Microsoft Edge extensions certification pipeline and a new review starts with the latest submission.


<!-- ====================================================================== -->
## Update your extension after it failed the certification

After your extension failed the certification process, you need to update your extension and resubmit your extension, incorporating the feedback you got.

To edit your extension, follow these steps:

1. Navigate to your [developer dashboard](https://partner.microsoft.com/dashboard/microsoftedge/public/login?ref=dd) and select the extension that failed the certification process.

1. Update either the extension package or the metadata, incorporating the feedback received from the certification process.  If you update the extension package, make sure that you increase the version in the manifest file.

1. After making changes, select **Publish**.


<!-- ====================================================================== -->
## Remove an extension from the Microsoft Edge Add-ons website

To remove an extension, follow these steps:

1. Go to your [developer dashboard](https://partner.microsoft.com/dashboard/microsoftedge/public/login?ref=dd).  From the Dashboard page, select the listing to remove.

1. Select **Extension Overview** on your listing.

1. Select **Unpublish** to remove the listing from the Microsoft Edge Add-ons website.

The extension is now removed from the Microsoft Edge Add-ons website.  Users who already installed your extension can continue to use it, but the extension isn't available to new users.
