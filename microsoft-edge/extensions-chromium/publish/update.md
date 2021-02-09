---
description: The process of updating or removing extensions from the Microsoft Store
title: Update An Extension Listing
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 02/04/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: edge-chromium, extensions development, browser extensions, addons, partner center, developer
---
# Update or remove your extension  

You may update a submitted extension or remove a published extension listing from Microsoft Edge Add-ons store at any time.  

## Update your extension on the Microsoft Edge Add-ons store  

> [!NOTE]
> The duration of the certification process for an extension update ranges from a few hours to few days.  

### Update an existing extension in the Microsoft Store  

To update your extension on the store, complete the following steps.  

1.  Navigate to your [developer dashboard][MicrosoftPartnerCenter] and choose the extension that you wish to update.  
1.  Update either the extension package or the metadata of the extension.  If you update the extension package, ensure that you increase the version in the manifest file to match changes since the previous package version.  
1.  After you make the changes, choose **Save** > **Publish**.  The action updates your extension listing, and starts a certification process.  
1.  After the `Status` column displays `In the store`, your extension update is available on the Microsoft Edge Add-ons store.  
    
### Update your extension during the certification step  

You may still update your extension submission in the following timeframe.  

*   After it enters the certification stage  
*   Before it publishes in the Microsoft Edge Add-ons store  

To check the status of your extension, navigate to the dashboard associated with your listing on [Partner Center][MicrosoftPartnerCenter].  

The following list describes three scenarios in which you should update your extension.  

*   Updating an existing extension in the Microsoft Edge Add-ons store.  
*   During the certification process.  
*   Failing the certification process.  
    
To edit your submission, complete the following steps.  

1.  Navigate to your [developer dashboard][MicrosoftPartnerCenter] and choose the extension that you wish to update.  The information you filled out during the previous submission is displayed.  
1.  To open the **Extension overview** section, use the left navigation bar.  To cancel the current submission, choose **Cancel submission**.  
1.  Move to other sections and update either the extension package or the metadata of the extension.  If you update the extension package, ensure that you increase the version in the manifest file to match changes since the previous package version.  
1.  After making changes, choose **Save** > **Publish**.  
    
> [!IMPORTANT]
> The process stops and removes your current submission from the Microsoft Edge extensions certification pipeline and a new review starts with the latest submission.  

### Update your extension after it failed the certification  

After your extension failed the certification process, you need to update your extension and resubmit your extension that incorporates the feedback.  

To edit your extension, complete the following steps.  

1.  Navigate to your [developer dashboard][MicrosoftPartnerCenter] and choose the extension that failed the certification process.  
1.  Update either the extension package or the metadata incorporating the feedback received from the certification process.  If you update the extension package, ensure that you increase the version in the manifest file.  
1.  After making changes, choose **Save** > **Publish**.  
    
## Remove extensions from the Microsoft Edge Add-ons store  

To remove your extension from the Microsoft Edge Add-ons store, complete the following steps.  

1.  Navigate to your [developer dashboard][MicrosoftPartnerCenter].  From the Dashboard page, choose the listing to remove.  
1.  Choose **Extension Overview** on your listing.  
1.  Choose **Unpublish** to remove the listing from the Microsoft Edge Add-ons store.  
    
Your extension is now removed from the Microsoft Edge Add-ons store.  Users who already installed your extension may continue to use it, but new users don't find it.  

<!-- links -->  

[MicrosoftPartnerCenter]: https://partner.microsoft.com/dashboard/microsoftedge/public/login?ref=dd "Partner Center"  
