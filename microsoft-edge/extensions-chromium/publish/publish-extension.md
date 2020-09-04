---
description: Publish Microsoft Edge (Chromium) extensions to Microsoft Edge add-ons Store.
title: Publish your extension
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 08/25/2020
ms.topic: article
ms.prod: microsoft-edge-chromium
keywords: edge-chromium, extensions development, browser extensions, addons, partner center, developer
---

# Publish your extension  

After completing development and testing of your extension, you may be ready to distribute your extension using the Microsoft Edge add-ons catalog. Alternatively, if you have an existing chromium extension that you want to make available to Microsoft Edge users, you may [port your existing Chromium extension][PortChromiumExtension] to Microsoft Edge. 

Publishing your extension to the Microsoft Edge add-ons catalog increases the reach of your extension and makes it available for end users. This article provides a walkthrough of the process to submit your extension to the Microsoft Edge add-ons catalog.


## Before you begin  

At this point, you should have a working prototype of your extension ready. For information on how to create an extension, refer [Getting started tutorial][ExtensionsGettingStarted]. 

To publish your extension to the Microsoft Edge add-ons website, you must have an active developer account on [Partner Center][MicrosoftPartnerCenter]. To open a new developer account and register to the Microsoft Edge add-ons program, follow the process mentioned in the [Developer registration][DeveloperRegistration] guide. 

Create a zip file that represents your extension package. Your extension package must include the following files: 


* The extension manifest specifying details like the name of the extension, short description, permissions, and default language. 
* Images and other files required by your extension.

The following fields in the manifest are automatically included in your store listing details and can't be modified from the store listings page, which is described later in this article. Ensure they're filled out as you would like them to display on the store details page, before uploading your package to Partner Center. For an example of the code required for the manifest file, see the manifest file basics.  

* Name field in the manifest file as the **display name** on the store details page 

* Description field in the manifest file as the **short description** on the store details page. Provide a short, catchy description to display at the top of the listing for your extension. When included, the short description specified in the extension manifest file is displayed in your store listing. If a short description is not included in the manifest file, the first few lines of Description is displayed. We recommend providing a brief description to avoid content repetition on your store list page. 

## Submit your extension to Microsoft Edge add-ons store

To submit your extension to [Partner Center][MicrosoftPartnerCenter], use the following steps. 

#### Step 1: Start a new submission  

Go to the [developer dashboard][MicrosoftPartnerCenter] and select **Create new extension** on the Overview page.

#### Step 2: Upload the extension package

Use the **Packages** page to upload the zip file of your extension package. You're only able to upload one package at a time. You can't continue with the submission if the package upload isn't successful on this page. 

Upload the package by either dragging the package to the upload field, or by selecting **Browse your files**. Once the package is uploaded, your package is validated. Once validation succeeds, review the extension details, and then select **Next** to continue. If there are validation errors, resolve the issues and try uploading again.

#### Step 3: Provide Availability details

On the **Availability** page, enter the following information about the availability of your extension. 

##### Visibility  

Choose one of the following visibility options to define if your extension is discoverable in the Microsoft Edge add-ons catalog.  

* `Public` (default)   
Public allows extensions to be discoverable to everyone through search, browsing in the Microsoft Edge add-ons catalog, or using the listing URL to your extension in the Microsoft Edge add-ons store. The listing URL is available on your Partner Center dashboard on the Extension **Overview** page.

*  `Hidden`  
Hidden removes extensions from search results or browsing in the Microsoft Edge add-ons catalog. To distribute hidden extensions in the Microsoft Edge add-ons store, you must share the listing URL to the extension with your customers. 

> [!NOTE]
> You may change the visibility of your extension from **Public** to **Hidden**. Users who installed your extension while the visibility was set to public will continue to have access to your extension and receive any updates you make available through the Microsoft Edge add-ons website.

##### Markets  

Define the specific markets in which you plan to offer your extension. By default, all markets have been selected including any future markets that are added later. Alternatively, choose specific markets by selecting **Change markets**. Deselect individual markets to exclude them, or select **Unselect all** and then add individual markets of your choice.

> [!NOTE]
> You may change the markets where your extension is offered. Users who installed your extension while it was available in their market will continue to have access to your extension. However, they will not receive any future updates submitted to the Microsoft Edge add-ons catalog.

Select **Save** to continue to the **Properties** section.  

#### Step 4: Select Properties for your extension  

On the **Properties page**, enter the following information to specify properties of your extension. These properties are displayed to users in the Microsoft Edge add-ons catalog.



| Extension property name | Description |
|:--- |:--- |
| Category (required) | The category that best describes your extension. Listing your extension in the right category helps users find your extension easily and understand more about it. |
| Privacy policy requirements (required) | Indicate if your extension accesses, collects, or transmits any personal information. Your extension may fail the certification step if you choose **Yes** and you don't provide a Privacy policy URL. |
| Privacy policy URL | A valid privacy policy URL to communicate how your extension complies with privacy laws and regulations. You're responsible for ensuring your extension complies with privacy laws and regulations, and for providing a valid privacy policy URL, if necessary. Provide a privacy policy URL if any personal information is being accessed, transmitted, or collected by your extension.  To determine if your extension requires a privacy policy, see [Microsoft Edge Developer Agreement][MicrosoftAppDeveloperAgreement] and the [Microsoft Edge add-ons catalog developer policies][MicrosoftEdgeAddonsCatalogDeveloperPolicies]. |
| Website URL | A web page that provides additional information about your extension. This URL must point to a page on your own website, not the web listing for your extension in the Microsoft Edge add-ons catalog. This URL helps users learn more about your extension, its features, and any other relevant information. |
| Support contact detail | The URL to your support webpage, or the email address to contact your support team. |
| Mature content | Checkbox to specify if your extension includes mature content. Extension rating helps determine the appropriate age group of the target audience of your extension. To help determine if your extension has mature content, see [Microsoft Edge add-ons catalog developer policies][MicrosoftEdgeAddonsCatalogDeveloperPolicies]. |

Select **Save** to continue to the **Store listings** section.

#### Step 5: Add Store listing details for your extension 

The information provided in this section is displayed to users that visit your listing on the Microsoft Edge add-ons catalog. Even though some fields are optional, we recommend providing as much information as possible. The minimum required information for your extension to be listed in the store, for each language mentioned in your extension package, are **Description** and **Extension Store logo**.

> [!NOTE]
> The store listing mandatory details need to be filled out for each language mentioned in your extension zip package. To add or remove languages in your store listing on the Microsoft Edge add-ons catalog, you must modify the list of languages supported by your extension in the extension package, create a new extension package, and re-upload it. 



| Store listing property name  | Description |
|:--- |:--- |
| Store listing languages (required) | Select a language from **Languages** dropdown and enter the store listing details for that language. Extensions that support multiple languages must provide a store listing page for each supported language. |
| Display name (required) | The name of your extension specified in the manifest file of your extension. To change the store display name after submission, you may update the name in the manifest file, create a new extension package, and then re-upload it. |
| Description (required) | The description field may focus on explaining what your extension does and why users should install it, or any other relevant information users should know about your extension. It should be less than 10,000 characters. |
| Extension Store logo (required) | An image that represents your company or extension logo with an aspect ratio of 1 and recommended size of 300 x 300 pixels. |
| Small promotional tile (optional) | This image is used to display your extension alongside other extensions in the store. The size of the image should be 440 x 280 pixels. |
| Screenshots (optional) | You can submit a maximum of 10 screenshots describing the functionality of your extension in detail. The size of the screenshots must be either 640 x 480 pixels, or 1280 x 800 pixels. |
| Large promotional tile (optional) | Large promotion tiles will be used in the store to feature extensions more prominently in the Microsoft Edge add-ons website. These images, if submitted, will be visible to the users soon. The size of these PNG files must be 1400 x 560 pixels.  |
| YouTube video URL (optional) | You may include a promotional YouTube video of your extension. This video is displayed on the store listing page of your extension. |
| Short description (required) | To edit the short description, you must update the description field in your manifest file of your extension package and re-upload it. |
| Search terms (optional) | Search terms are single words or phrases that help users discover your extension when searching in the Microsoft Edge Add-ons Catalog. These search terms are not displayed to users. | 


##### YouTube video URL requirements 

Ensure your video meets the following requirements: 

*   Verify that the content of the YouTube video complies with the [Microsoft Edge Addons Catalog Developer Policies document][MicrosoftEdgeAddonsCatalogDeveloperPolicies]. 
*   Turn off advertisements on your video. For more information, see [Set your default ad formats][GoogleYoutubeAnswer2531367Topic7072227] and [Ads on embedded videos][GoogleYoutubeAnswer132596].  
*   Turn on embedding for your videos.  For more information, see [Embed videos \& playlists][GoogleYoutubeAnswer171780].

Perform the following steps to submit the YouTube URL of your video. 

1.  On YouTube, locate the video that you want to add to your store listing page.  
1.  Under the video, choose **Share > Embed**.
1.  Copy the HTML code that is displayed.  
1.  On the store listing details page, paste the HTML code in the YouTube URL field. 


##### Search terms requirements

Search terms must meet the following requirements. 

*   You may enter search terms to use up to a maximum of 21 words. Whether used as single words, phrases, or a combination of both, you are only allowed a maximum of 21 words.
*   Up to a maximum of 7 search terms – single word or phrases. Each search term has a character limit of 30 characters. 
 

#### Step 6: Complete your submission

The **Submit your extension** page allows you to include notes for certification to help test your extension.

##### Notes for certification (Optional)

As you submit your extension, you have the option to use the **Notes for certification** page to provide additional information to the certification testers. This information helps ensure that your extension is tested correctly. If your extension is not fully tested, it may fail certification. 

Ensure you include the following information, as necessary:

*   Usernames and passwords for test accounts.  
*   Steps to access hidden or locked features.  
*   Expected differences in functionality based on region or other user settings.
*   If this is an update to an existing extension, information about the changes made to the extension. 
*   Any additional information that testers must understand about your submission.

After providing the information, select **Publish** to submit your extension to the Microsoft Edge add-ons catalog. Your submission proceeds to the certification step. This process may take up to 7 business days of your submission.  

When your submission passes certification, your extension is published in the Microsoft Edge add-ons catalog and the status of your extension in the Partner Center dashboard changes to In the Store.  `In the Store`.


> [!NOTE]
> If you are facing any issues in the submission or registration process, you can file a support ticket [here][ExtensionsSupportForm] or write to us at ext_dev_support@microsoft.com.


<!-- image links -->  

<!-- links -->  

[ExtensionsGettingStarted]: ../getting-started/index.md "Getting Started With Microsoft Edge \(Chromium\) Extensions | Microsoft Docs"

[DeveloperRegistration]: https://docs.microsoft.com/en-us/microsoft-edge/extensions-chromium/publish/create-dev-account "Register as a Microsoft Edge extensions developer | Microsoft Docs"

[PortChromiumExtension]: https://docs.microsoft.com/en-us/microsoft-edge/extensions-chromium/developer-guide/port-chrome-extension "Port your Chromium extension to Microsoft Edge | Microsoft Docs"

[MicrosoftEdgeAddonsCatalogDeveloperPolicies]: ../store-policies/developer-policies.md "Microsoft Edge Addons Catalog Developer Policies | Microsoft Docs"  

[MicrosoftAppDeveloperAgreement]: /legal/windows/agreements/app-developer-agreement "App Developer Agreement | Microsoft Docs"  

[MicrosoftPartnerCenter]: https://partner.microsoft.com/dashboard/microsoftedge/public/login?ref=dd "Partner Center"  

[GoogleYoutubeAnswer2531367Topic7072227]: https://support.google.com/youtube/answer/2531367?ref_topic=7072227 "Set your default ad formats - YouTube Help"  

[GoogleYoutubeAnswer132596]: https://support.google.com/youtube/answer/132596 "Ads on embedded videos - YouTube Help"

[GoogleYoutubeAnswer171780]: https://support.google.com/youtube/answer/171780 "Embed videos \& playlists - YouTube Help"  

[ExtensionsSupportForm]: https://support.microsoft.com/en-us/supportrequestform/e7a381be-9c9a-fafb-ed76-262bc93fd9e4 "Extensions New Support Request"
