---
description: Publish Microsoft Edge (Chromium) extensions to Microsoft Edge add-ons Store.
title: Publish your extension
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/15/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: edge-chromium, extensions development, browser extensions, addons, partner center, developer
---
# Publish your extension  

After completing development and testing of your extension, you may be ready to distribute your extension using the Microsoft Edge add-ons catalog.  Alternatively, if you have an existing chromium extension that you want to make available to Microsoft Edge users, you may [port your existing Chromium extension][PortChromiumExtension] to Microsoft Edge.  

Publishing your extension to the Microsoft Edge add-ons catalog increases the reach of your extension and makes it available for end users.  This topic provides a walkthrough of the process to submit your extension to the Microsoft Edge add-ons catalog.  

## Before you begin  

At this point, you should have a working prototype of your extension ready.  For information on how to create an extension, refer to the [Getting started tutorial][ExtensionsGettingStarted].  

To publish your extension to the Microsoft Edge add-ons website, you must have an active developer account on [Partner Center][MicrosoftPartnerCenter].  To open a new developer account and register to the Microsoft Edge add-ons program, follow the process mentioned in the [Developer registration][DeveloperRegistration] guide.  

Create a zip file that represents your extension package.  Your extension package must include the following files.  

*   The extension manifest specifying details like the name of the extension, short description, permissions, and default language.  
*   Images and other files required by your extension.  

The following fields in the manifest are automatically included in your store listing details and are not able to be modified from the store listings page, which is described later in this topic.  Ensure the fields are filled-out to match your preferred display on the store details page, before uploading your package to Partner Center.  For an example of the code required for the manifest file, review the manifest file basics.  

*   `Name` field in the manifest file, which is the **Display name** on the store details page.  
*   `Description` field in the manifest file, which is the **Short description** on the store details page.  Provide a short, catchy description to display at the top of the listing for your extension.  When included, the short description specified in the extension manifest file is displayed in your store listing.  If a short description is not included in the manifest file, the first few lines of Description are displayed.  You should provide a brief description to avoid content repetition on your store listing page.  

## Submit your extension to Microsoft Edge add-ons store  

To submit your extension to [Partner Center][MicrosoftPartnerCenter], use the following steps.  

#### Step 1:  Start a new submission  

Go to the [developer dashboard][MicrosoftPartnerCenter] and select **Create new extension** on the **Overview** page.  

#### Step 2:  Upload the extension package  

Use the **Packages** page to upload the zip file of your extension package.  You are only able to upload one package at a time.  You are not able to continue with the submission if the package upload is not successful on the **Packages** page.  

Upload the package by either dragging the package to the upload field, or by selecting **Browse your files**.  Once the package is uploaded, your package is validated.  Once validation succeeds, review the extension details, and then select **Next** to continue.  If there are validation errors, resolve the issues and try uploading again.  

#### Step 3:  Provide Availability details  

On the **Availability** page, enter the following information about the availability of your extension.  

##### Visibility  

Choose one of the following visibility options to define if your extension is discoverable in the Microsoft Edge add-ons catalog.  

*   `Public` \(default\)  
    Public allows extensions to be discoverable to everyone through search, browsing in the Microsoft Edge add-ons catalog, or using the listing URL to your extension in the Microsoft Edge add-ons store.  The listing URL is available on your Partner Center dashboard on the Extension **Overview** page.  

*   `Hidden`  
    Hidden removes extensions from search results or browsing in the Microsoft Edge add-ons catalog.  To distribute hidden extensions in the Microsoft Edge add-ons store, you must share the listing URL to the extension with your customers.  

> [!NOTE]
> You may change the visibility of your extension from **Public** to **Hidden**.  Users who installed your extension while the visibility was set to public retain access to your extension and receive any updates you make available through the Microsoft Edge add-ons website.  

##### Markets  

Define the specific markets in which you plan to offer your extension.  By default, all markets have been selected including any future markets that are added later.  Alternatively, choose specific markets by selecting **Change markets**.  Deselect individual markets to exclude them, or select **Unselect all** and then add individual markets of your choice.  

> [!NOTE]
> You may change the markets where your extension is offered.  Users who installed your extension while it was available in their market retain access to your extension.  However, your users no longer have access to any future updates submitted to the Microsoft Edge add-ons catalog.  

Select **Save** to continue to the **Properties** section.  

#### Step 4: Select Properties for your extension  

On the **Properties page**, enter the following information to specify properties of your extension.  The properties are displayed to users in the Microsoft Edge add-ons catalog.  

| Extension property name | Description |  
|:--- |:--- |  
| Category \(required\) | The category that best describes your extension.  Listing your extension in the right category helps users find your extension easily and understand more about it.  |  
| Privacy policy requirements \(required\) | Indicate if your extension accesses, collects, or transmits any personal information.  Your extension may fail the certification step if you choose **Yes** and you do not provide a `Privacy policy URL`.  |  
| Privacy policy URL | A valid privacy policy URL to communicate how your extension complies with privacy laws and regulations.  You are responsible for ensuring your extension complies with privacy laws and regulations, and for providing a valid privacy policy URL, if necessary.  Provide a privacy policy URL if any personal information is being accessed, transmitted, or collected by your extension.  To determine if your extension requires a privacy policy, go to [Microsoft Edge Developer Agreement][MicrosoftAppDeveloperAgreement] and [Microsoft Edge add-ons catalog developer policies][MicrosoftEdgeAddonsCatalogDeveloperPolicies].  |  
| Website URL | A web page that provides additional information about your extension.  The `Website URL` must point to a page on your own website, not the web listing for your extension in the Microsoft Edge add-ons catalog.  The `Website URL` helps users learn more about your extension, its features, and any other relevant information.  |  
| Support contact details | The URL to your support webpage, or the email address to contact your support team.  |  
| Mature content | Checkbox to specify if your extension includes mature content.  Extension rating helps determine the appropriate age group of the target audience of your extension.  To help determine if your extension has mature content, go to [Microsoft Edge add-ons catalog developer policies][MicrosoftEdgeAddonsCatalogDeveloperPolicies].  |  

Select **Save** to continue to the **Store listings** section.  

#### Step 5: Add Store listing details for your extension  

The information provided in the following section is displayed to users that visit your listing on the Microsoft Edge add-ons catalog.  Even though some fields are optional, you should provide as much information as possible.  The minimum required details for your extension for listing in the store, for each language mentioned in your extension package, are **Description** and **Extension Store logo**.  

> [!NOTE]
> The minimum required store listing details must be filled-out for each language mentioned in your extension zip package.  To add or remove languages in your store listing on the Microsoft Edge add-ons catalog, you must modify the list of languages supported by your extension in the extension package, create a new extension package, and re-upload it.  

| Store listing property name | Description |  
|:--- |:--- |  
| Store listing languages \(required\) | Select a language from the **Languages** dropdown and enter the store listing details for that language.  Extensions that support multiple languages must provide a store listing page for each supported language.  |  
| Display name \(required\) | The name of your extension specified in the manifest file of your extension.  To change the store display name after submission, you may update the name in the manifest file, create a new extension package, and then re-upload it.  |  
| Description \(required\) | The description field focuses on explaining what your extension does, why users should install it, or other relevant information that users need to know.  It should be less than 10,000 characters.  |  
| Extension Store logo \(required\) | An image that represents your company or extension logo with an aspect ratio of 1 and recommended size of 300 x 300 pixels.  |  
| Small promotional tile \(optional\) | The `Small promotional tile` image is used to display your extension alongside other extensions in the store.  The size of the image should be 440 x 280 pixels.  |  
| Screenshots \(optional\) | You may submit a maximum of 10 screenshots describing the functionality of your extension in detail.  The size of the screenshots must be either 640 x 480 pixels, or 1280 x 800 pixels.  |  
| Large promotional tile \(optional\) | Large promotion tiles are used in the store to feature extensions more prominently in the Microsoft Edge add-ons website.  The images, if submitted, are visible to the users.  The size of the PNG files must be 1400 x 560 pixels.  |  
| YouTube video URL \(optional\) | You may include a promotional YouTube video of your extension.  The `YouTube video URL` video is displayed on the store listing page of your extension.  |  
| Short description \(required\) | To edit the short description, you must update the description field in your manifest file of your extension package and re-upload it.  |  
| Search terms \(optional\) | Search terms are single words or phrases that help users discover your extension when searching in the Microsoft Edge Add-ons Catalog.  The search terms are not displayed to users.  |  

##### YouTube video URL requirements  

Ensure your video meets the following requirements.  

*   Verify that the content of the YouTube video complies with the [Microsoft Edge Add-ons Catalog Developer Policies][MicrosoftEdgeAddonsCatalogDeveloperPolicies] topic.  
*   Turn off advertisements on your video.  For more information, go to [Set your default ad formats][GoogleYoutubeAnswer2531367Topic7072227] and [Ads on embedded videos][GoogleYoutubeAnswer132596].  
*   Turn on embedding for your videos.  For more information, go to [Embed videos & playlists][GoogleYoutubeAnswer171780].  

Perform the following steps to submit the YouTube video URL of your video.  

1.  On YouTube, locate the video that you want to add to your store listing page.  
1.  Under the video, choose **Share** > **Embed**.  
1.  Copy the HTML code that is displayed.  
1.  On the store listing details page, paste the HTML code in the `YouTube video URL` field.  

##### Search terms requirements  

Search terms must meet the following requirements.  

*   You may enter search terms to use up to a maximum of 21 words.  Whether used as single words, phrases, or a combination of both, you are only allowed a maximum of 21 words.  
*   Up to a maximum of seven search terms:  single word or phrases.  Each search term has a character limit of 30 characters.  

#### Step 6: Complete your submission  

On the **Submit your extension** page, add notes for certification to help test your extension.  

##### Notes for certification (Optional)  

When submitting your extension, use the **Notes for certification** page to provide additional information to the certification testers.  The additional information helps ensure that your extension is tested correctly.  If your extension is not fully tested, it may fail certification.  

Ensure you include the following information, as necessary.  

*   User names and passwords for test accounts.  
*   Steps to access hidden or locked features.  
*   Expected differences in functionality based on region or other user settings.  
*   If your submission is an update to an existing extension, include information about the changes made to the extension.  
*   Any additional information that testers must understand about your submission.  

After providing the information, select **Publish** to submit your extension to the Microsoft Edge add-ons catalog.  Your submission proceeds to the certification step.  The certification process may take up to seven business days after your submission.  

When your submission passes certification, your extension is published in the Microsoft Edge add-ons catalog.  The status of your extension in the Partner Center dashboard changes to `In the Store`.  

> [!NOTE]
> If you are facing any issues in the submission or registration process, file a support ticket [here][ExtensionsSupportForm] or send an email to [ext_dev_support@microsoft.com](mailto:ext_dev_support@microsoft.com).  

<!-- links -->  

[ExtensionsGettingStarted]: ../getting-started/index.md "Getting Started With Microsoft Edge (Chromium) Extensions | Microsoft Docs"  
[DeveloperRegistration]: ./create-dev-account.md "Register as a Microsoft Edge extensions developer | Microsoft Docs"  
[PortChromiumExtension]: ../developer-guide/port-chrome-extension.md "Port your Chromium extension to Microsoft Edge | Microsoft Docs"  
[MicrosoftEdgeAddonsCatalogDeveloperPolicies]: ../store-policies/developer-policies.md "Microsoft Edge Add-ons Catalog Developer Policies | Microsoft Docs"  

[MicrosoftAppDeveloperAgreement]: /legal/windows/agreements/app-developer-agreement "App Developer Agreement | Microsoft Docs"  

[MicrosoftPartnerCenter]: https://partner.microsoft.com/dashboard/microsoftedge/public/login?ref=dd "Partner Center"  

[ExtensionsSupportForm]: https://support.microsoft.com/supportrequestform/e7a381be-9c9a-fafb-ed76-262bc93fd9e4 "Extensions New Support Request | Microsoft Support"  

[GoogleYoutubeAnswer2531367Topic7072227]: https://support.google.com/youtube/answer/2531367?ref_topic=7072227 "Set your default ad formats - YouTube Help"  

[GoogleYoutubeAnswer132596]: https://support.google.com/youtube/answer/132596 "Ads on embedded videos - YouTube Help"
[GoogleYoutubeAnswer171780]: https://support.google.com/youtube/answer/171780 "Embed videos & playlists - YouTube Help"  
