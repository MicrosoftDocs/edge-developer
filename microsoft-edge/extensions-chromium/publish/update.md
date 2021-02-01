---
description: The process of updating or removing extensions from the Microsoft Store.
title: Update An Extension Listing
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/15/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: edge-chromium, extensions development, browser extensions, addons, partner center, developer
---

# Update or remove your extension  

You can choose to update a submitted extension or remove a published extension listing from Microsoft Edge Add-ons store at any point in time. 


## Update your extension on the Microsoft Edge add-ons store

> [!NOTE]
> The duration of the certification process for an extension update ranges from a few hours to few days.

### Update an existing extension in the Microsoft Store

To update your extension on the store, you may follow these steps:

1.  Go to your [developer dashboard][MicrosoftPartnerCenter] and select the extension that you wish to update.
1.  Update either the extension package or the metadata of the extension. If you update the extension package, ensure that you increase the version in the manifest file relative to the previous package version.
1.  After you have made the changes, click on **Save** and **Publish**. This action will submit an update to your extension listing for the certification process.
1.  Once the `Status` column displays the extension status as `In the store`, your extension update is available on Microsoft Edge Add-ons store.  


### Update your extension during certification step

You may edit and update your extension submission when the extension is in certification stage before it is published to the store.  You may check the status of your extension on the Dashboard associated with your listing on [Partner Center][MicrosoftPartnerCenter].

The following list describes three scenarios in which updates are needed to extensions.

* Updating an existing extension in the Microsoft Store.
* During the certification process.
* Failing the certification process.

To edit your submission, you may follow these steps:  

1.  Go to your [developer dashboard][MicrosoftPartnerCenter] and select the extension that you wish to update. This brings up the submission form details which you had filled out during the previous submission.
1.  Go to **Extension overview** section using the left navigation bar as shown.  Cancel the current submission by clicking **Cancel submission** button.  
1.  Move to other sections and update either the extension package or the metadata of the extension. If you update the extension package, ensure that you increase the version in the manifest file relative to the previous package version.
1.  After making changes, click **Save** and then **Publish**.  

> [!IMPORTANT]
> This process stops and removes your current submission from our certification pipeline and a new review starts with the latest submission.



### Update your extension after it has failed the certification

You can update your extension and submit an update incorporating the certification feedback after your extension has failed the certification process.

To edit your extension, you may follow these steps:

1. Go to your [developer dashboard][MicrosoftPartnerCenter] and select the extension that has failed the certification and you wish to update. 
1. Update either the extension package or the metadata incorporating the feedback received from the certification process. If you update the extension package, ensure that you increase the version in the manifest file relative to the previous package version.
1.  After making changes, click **Save** and then **Publish**.
 



## Remove your extension from Microsoft Edge Add-ons store

The following steps describe how to remove your extension from the Microsoft Edge Add-ons store.  

1.  Go to your [developer dashboard][MicrosoftPartnerCenter].  From the Dashboard page, select the listing to remove.  
1.  Open **Extension Overview** page of your listing.  
1.  Select **Unpublish** to remove the listing from the Microsoft Edge Add-ons store.  

Your extension is now removed from the Microsoft Edge Add-ons store. Users who already installed your extension may continue to use it, but new users will not be able to find it.  


<!-- image links -->  

<!-- links -->  

[MicrosoftPartnerCenter]: https://partner.microsoft.com/dashboard/microsoftedge/public/login?ref=dd "Partner Center"  
