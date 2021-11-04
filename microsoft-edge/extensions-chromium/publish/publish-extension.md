---
description: Publish Microsoft Edge extensions to Microsoft Edge Add-ons website
title: Publish a Microsoft Edge extension
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 08/25/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, extensions development, browser extensions, addons, partner center, developer
---
# Publish a Microsoft Edge extension

After you develop and test your Microsoft Edge extension, you're ready to distribute your extension. Use the Microsoft Edge Add-ons website to distribute your extension.  To release your existing Chromium extension for Microsoft Edge users, navigate to [port your existing Chromium extension](../developer-guide/port-chrome-extension.md).

Publish your extension to the Microsoft Edge Add-ons website to increase the reach of it and make it available other Microsoft Edge users.  This article provides the process to submit your extension to the Microsoft Edge Add-ons website.


<!-- ========================================================================== -->
## Before you begin

You should have a working prototype of your extension ready.  For information on how to create an extension, see [Extension concepts and architecture](../getting-started/index.md).

To publish your extension to the Microsoft Edge Add-ons website, use your active developer account on [Partner Center](https://partner.microsoft.com/dashboard/microsoftedge/public/login?ref=dd).  If you don't have a developer account, create a new developer account.  To open a new developer account and register to the Microsoft Edge add-ons program, navigate to [Developer registration](./create-dev-account.md).

Create a zip file that represents your extension package.  Your extension package must include the following files.

*   The extension manifest that specifies details like the name of the extension, short description, permissions, and default language.
*   Images and other files required by your extension.

The following fields in the manifest are automatically included in your store listing details.  The fields are read-only on the **Store listings** webpage.  The store listings webpage is described later in this article.  Make sure the field values match your preferred display on the store details webpage before you upload your package to Partner Center.  For an example of the code required for the manifest file, review the manifest file basics.

*   `Name` field in the manifest file, which is the **Display name** on the store details webpage.
*   `Description` field in the manifest file, which is the **Short description** on the store details webpage.  Provide a short, catchy description to display at the top of the listing for your extension.  If you include the short description in the extension manifest file, it displays in your store listing.  If you don't include a short description in the manifest file, the first few lines of `Description` display in your store listing.  Provide a brief description to avoid content repetition on your store listing webpage.


<!-- ========================================================================== -->
## Submit your extension to the Microsoft Edge Add-ons website

To submit your extension to [Partner Center](https://partner.microsoft.com/dashboard/microsoftedge/public/login?ref=dd), do the following steps:
1. Start a new submission.
1. Upload the extension package.
1. Provide Availability details.
1. Select Properties for your extension.
1. Add Store listing details for your extension.
1. Complete your submission.

Details about these steps are below.


<!-- ========================================================================== -->
## Step 1:  Start a new submission

Navigate to the [developer dashboard](https://partner.microsoft.com/dashboard/microsoftedge/public/login?ref=dd) and then select **Create new extension** on the **Overview** webpage.


<!-- ========================================================================== -->
## Step 2:  Upload the extension package

Use the **Packages** webpage to upload the zip file of your extension package.  You can only upload one package at a time.  Your submission is blocked if the package upload isn't successful on the **Packages** webpage.

To upload the package, select and drag the package onto the upload field.  Also, you can select **Browse your files**.  After the package is uploaded, your package is validated.  After validation succeeds, review the extension details, and then select **Next** to continue.  If there are validation errors, resolve the issues and try uploading again.


<!-- ========================================================================== -->
## Step 3:  Provide Availability details

On the **Availability** webpage, enter the following information about the availability of your extension.

### Visibility

Select one of the following visibility options to define whether your extension is discoverable in the Microsoft Edge Add-ons website.

*   `Public` (default)
    Public allows everyone to discover your extension through search, browsing in the Microsoft Edge Add-ons website, or using the listing URL to your extension in the Microsoft Edge Add-ons website.  The listing URL is available on your Partner Center dashboard on the Extension **Overview** webpage.
*   `Hidden`
    Hidden removes extensions from search results or browsing in the Microsoft Edge Add-ons website.  To distribute hidden extensions in the Microsoft Edge Add-ons website, you must share the listing URL to the extension with your customers.

> [!NOTE]
> You can change the visibility of your extension from **Public** to **Hidden**.  Users who installed your extension while the visibility was set to public retain access to your extension and receive any updates you make available through the Microsoft Edge Add-ons website.

### Markets

Define the specific markets in which you plan to offer your extension.  The default setting for markets is all markets and that includes any future markets that are added later.  To choose specific markets, select **Change markets**.  Toggle individual markets to exclude each one, or select **Unselect all** and then add individual markets of your choice.

> [!NOTE]
> You can change the markets where your extension is offered.  A user who installs your extension while it is available in the user's market retains access to your extension.  However, the user does not have access to any future updates submitted to the Microsoft Edge Add-ons website.

Select **Save** to continue to the **Properties** section.


<!-- ========================================================================== -->
## Step 4: Select Properties for your extension

On the **Properties** webpage, enter the following information to specify properties of your extension.  The properties are displayed to users in the Microsoft Edge Add-ons website.

| Extension property name | Description |
|:--- |:--- |
| Category (required) | The category that best describes your extension.  Listing your extension in the right category helps users find your extension easily and understand more about it.  |
| Privacy policy requirements (required) | Indicate if your extension accesses, collects, or transmits any personal information.  Your extension might fail the certification step if you select **Yes** and you don't provide a `Privacy policy URL`.  |
| Privacy policy URL | A valid privacy policy URL to communicate how your extension follows privacy laws and regulations.  You're responsible for ensuring your extension follows privacy laws and regulations.  You're also responsible for providing a privacy policy URL if any personal information is being accessed, transmitted, or collected by your extension.  To determine if your extension requires a privacy policy, navigate to [Microsoft Edge Developer Agreement](/legal/windows/agreements/app-developer-agreement) and [Microsoft Edge Add-ons website developer policies](../store-policies/developer-policies.md).  |
| Website URL | A webpage that provides additional information about your extension.  The `Website URL` must point to a webpage on your own website, not the web listing for your extension in the Microsoft Edge Add-ons website.  The `Website URL` helps users learn more about your extension, its features, and any other relevant information.  |
| Support contact details | The URL to your support webpage, or the email address to contact your support team.  |
| Mature content | Checkbox to specify if your extension includes mature content.  Extension rating helps determine the appropriate age group of the target audience of your extension.  To help determine if your extension has mature content, navigate to [Microsoft Edge Add-ons website developer policies](../store-policies/developer-policies.md).  |

Select **Save** to continue to the **Store listings** section.

> [!Important]
> Your developer/organization name, website URL, and support contact details that you submitted during registration are displayed to users on the Microsoft Edge Add-ons website.


<!-- ========================================================================== -->
## Step 5: Add Store listing details for your extension

The information provided in the following section is displayed to users who review your listing on the Microsoft Edge Add-ons website.  Even though some fields are optional, you should provide as much information as possible.  To list your extension in the store, the following details are required.

*   **Description** for each language in your extension package. To support multiple languages, you can use the internationalization API ([chrome.i18n](https://go.microsoft.com/fwlink/?linkid=2167478)).
*   **Extension Store logo** for each language in your extension package.

> [!NOTE]
> The minimum required store listing details must be filled-out for at least one of the languages mentioned in your extension zip package.  To add or remove languages in your store listing on the Microsoft Edge Add-ons website, use the **Add a language** dropdown on the **Store listings** webpage.  Additionally, you can duplicate your assets from one language across others using the **Duplicate functionality** button on the **Language details** webpage.

| Language details property name | Description |
|:--- |:--- |
| Display name (required) | The `name` of your extension specified in the manifest file of your extension.  To change the store display name after submission, you can update the name in the manifest file, create a new extension package, and then reupload it.  |
| Description (required) | The `description` field focuses on explaining what your extension does, why users should install it, or other relevant information that users need to know.  It should be less than 10,000 characters.  |
| Extension Store logo (required) | An image that represents your company or `extension logo` with an aspect ratio of 1, and recommended size of 300 x 300 pixels.  Additionally, you can copy the asset from one language to all other languages using the Duplicate button.  This button is found following the field after you upload your logo for the language.  |
| Small promotional tile (optional) | The `Small promotional tile` image is used to display your extension alongside other extensions in the store.  The size of the image should be 440 x 280 pixels.  Additionally, you can copy the asset from one language to all other languages using the Duplicate button.  The button is found following the field after you upload a promotional tile for the language.  |
| Screenshots (optional) | You can submit a maximum of 10 `screenshots` describing the functionality of your extension in detail.  The size of the screenshots must be either 640 x 480 pixels or 1280 x 800 pixels.  Additionally, you can copy the asset from one language to all other languages using the Duplicate button.  The button is found following the field after you upload at least one for the language.|
| Large promotional tile (optional) | `Large promotion tiles` are used in the store to feature extensions more prominently in the Microsoft Edge Add-ons website.  The images, if submitted, are visible to the users.  The size of the PNG files must be 1400 x 560 pixels.  Additionally, you can copy the asset from one language to all other languages using the Duplicate button.  The button is found following the field after you upload a promotional tile for the language.  |
| YouTube video URL (optional) | You can include a promotional YouTube video of your extension.  The `YouTube video URL` video is displayed on the store listing webpage of your extension.  |
| Short description (required) | To edit the `short description`, you must update the description field in your manifest file of your extension package and re-upload it.  |
| Search terms (optional) | `Search terms` are single words or phrases that help discover your extension when a user searches in the Microsoft Edge Add-ons website.  The search terms aren't displayed to users.  |

### YouTube video URL requirements

Make sure your video meets the following requirements.

*   Verify that the content of the YouTube video follows the [Microsoft Edge Add-ons website developer policies](../store-policies/developer-policies.md).
*   Turn off advertisements on your video.  For more information, navigate to [Set your default ad formats](https://support.google.com/youtube/answer/2531367?ref_topic=7072227) and [Ads on embedded videos](https://support.google.com/youtube/answer/132596).
*   Turn on embedding for your videos.  For more information, navigate to [Embed videos & playlists](https://support.google.com/youtube/answer/171780).

To submit the YouTube video URL of your video, complete the following steps.

1.  On YouTube, locate the video that you want to add to your store listing webpage.
1.  Under the video, select **Share** > **Embed**.
1.  Copy the HTML code that is displayed.
1.  On the store listing details webpage, paste the HTML code in the `YouTube video URL` field.

### Search terms requirements

Search terms must meet the following requirements.

*   You can enter search terms to use up to a maximum of 21 words.  Whether used as single words, phrases, or a combination of both, you're only allowed a maximum of 21 words.
*   Up to a maximum of seven search terms:  single word or phrases.  Each search term has a character limit of 30 characters.


<!-- ========================================================================== -->
## Step 6: Complete your submission

On the **Submit your extension** webpage, add notes for certification to help test your extension.

### Notes for certification (optional)

When you submit your extension, use the **Notes for certification** webpage to provide additional information to the certification testers.  The additional information helps ensure that your extension is tested correctly.  If your extension isn't fully tested, it might fail certification.

Make sure you include the following information, as necessary.

*   User names and passwords for test accounts.
*   Steps to access hidden or locked features.
*   Expected differences in functionality based on region or other user settings.
*   If your submission is an update to an existing extension, include information about the changes made to the extension.
*   Any additional information that testers must understand about your submission.

After you provide the information, select **Publish** to submit your extension to the Microsoft Edge Add-ons website.  Your submission proceeds to the certification step.  The certification process can take up to seven business days after your submission.

After your submission passes certification, your extension is published in the Microsoft Edge Add-ons website.  The status of your extension in the Partner Center dashboard changes to `In the Store`.

> [!NOTE]
> If you encounter any issues in the submission or registration process, file a support ticket on [Extensions New Support Request](https://support.microsoft.com/supportrequestform/e7a381be-9c9a-fafb-ed76-262bc93fd9e4) or send an email to [ext_dev_support@microsoft.com](mailto:ext_dev_support@microsoft.com).
