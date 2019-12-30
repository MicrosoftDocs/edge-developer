---
description: Step-wise process to publish Edge (Chromium) Extensions to Microsoft Store.
title: Publish An Extension
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 12/16/2019
ms.topic: article
ms.prod: microsoft-edge-chromium
keywords: edge-chromium, extensions development, browser extensions, addons, partner center, developer
---

# Publish An Extension  

Publish your Extension on Microsoft Edge Addons catalog \(Microsoft Edge Addons\).  You must first create a submission on [Partner Center][MicrosoftPartnerCenter] and submit it.  This document lists all the details that you must provide to create an Extension submission.  

## Before You Begin  

*   You must have an active developer account on [Partner Center][MicrosoftPartnerCenter] to submit your Extension in Microsoft Edge Addons.  If you do not have one, [create a new developer account][MicrosoftPartnerCenter].  
*   Create a zip file of your Extension package and ensure that it contains these files:  
    *   The manifest file and it must define the name and version of your Extension.  
    *   The images and other files that are required for your Extension.  

> [!IMPORTANT]
> Do not zip the Extension folder.  To create a zip, open your Extension folder, select all the files and create zip of those files.  

If you have not started building an Extension, you may refer to the [Getting Started][ExtensionsGettingStarted] tutorial for building a Microsoft Edge Chromium extension.  

To create an Extension submission on [Partner Center][MicrosoftPartnerCenter], follow these steps.  

## Step 1: Start a New Submission  

Go to your [developer dashboard][MicrosoftPartnerCenter].  From the Overview page, click **Create new extension**.  

## Step 2: Upload Your Extension Zip File  

The **Package** page is where you upload the zip file for your Extension submission.  You may only upload one package at a time, so if your Extension is not complete you may upload a work-in-progress package and update at any time before you publish it.  Be sure that your package contains the `manifest.json` file and is working fine on **Microsoft Edge** prior to uploading.  
Upload the package by dragging it into the upload field or by selecting **Browse your files**.  The Package page validates the Extensions zip file and displays that **success or failure status of your upload**.  If the package passes validation; it is uploaded successfully and you see a success message.  If the package fails validation; the package is not accepted and you see an error message.  If there are errors in the package, resolve the issues and try uploading it again.  

After successful upload, review your Extension details and click **Next** to proceed.  

## Step 3: Provide Availability details  

### Define Visibility  

Select a **Visibility** option to define the audience who may discover and acquire your Extension.  This gives you the option to specify whether users should find your Extension in Microsoft Edge Addons or see the listing at all.  Currently, you have two options under visibility:  

*   `Public`  
    This is the default option.  
    If you select `Public`, your Extension is available and discoverable to everyone in Microsoft Edge Addons.  Leave this option selected if you want your Extension to be listed in Microsoft Edge Addons for users to find via searching, browsing, and the direct link of your Extension.  

*   `Hidden`  
    If you select `Hidden`, your Extension is hidden in Microsoft Edge Addons from users searching or browsing; you must share your listing URL to distribute your Extension.  Users who have the direct link to the listing may download it on Microsoft Edge \(you may find your listing URL under **Extension Overview** page of Extension submission\).  

> [!NOTE]
> If you submit an Extension as **Public** and later change it to **Private**, Users who installed the Extension when it was private continue to have access and receive future updates.  

### Define markets  

You must define the specific markets in which you are offering your Extension, select **Show options** in the **Markets** section on the **Availability** page.  The Market selection pop-up window is displayed, where you should choose the markets.  By default, all markets are selected, including any **future markets** that may be added later.  You may deselect individual markets to exclude them, or you may click **Unselect all** and then add individual markets of your choice.  

> [!NOTE]
> If users already have your Extension in a certain market, and you later remove that market, users who already has the Extension in that market may continue to use it, but they do not get the later updates you submit.  

Click **Save** to proceed to **Properties** section.  

## Step 4: Select Properties for Your Extension  

### Extension properties  

*   [Category](#category)  
*   [Privacy policy requirements](#privacy-policy-requirements)  
*   [Privacy policy URL](#privacy-policy-url)  
*   [Website URL](#website-url)  
*   [Support URL/email address](#support-urlemail-address)  
*   [Extension Rating](#extension-rating)  

#### Category  

Listing your Extension in the right category helps users find your Extension easily and understand more about it.  Select a Category that best describes your Extension.  

**Possible Values**:  

*   `Accessibility`  
*   `Blogging`  
*   `Developer Tools`  
*   `Fun`  
*   `News & Weather`  
*   `Photos`  
*   `Productivity`  
*   `Search Tools`  
*   `Shopping`  
*   `Social & Communication`  
*   `Sports`  

#### Privacy policy requirements  

Indicate whether your Extension accesses, collects, or transmits any personal information.  

> [!NOTE]
> If your Extension requires a privacy policy and you have not provided one, your submission may fail certification.  

**Possible Values**:  

*   `No`:  A privacy policy URL is optional.  
*   `Yes`:  A privacy policy URL is required.  

#### Privacy policy URL  

You are responsible for ensuring your Extension complies with privacy laws and regulations, and for providing a valid privacy policy URL, if required.  You must provide a privacy policy URL if any personal information is being accessed, transmitted, or collected by your Extension.  
To determine if your Extension requires a privacy policy, review the [Microsoft Edge Developer Agreement][MicrosoftAppDeveloperAgreement] and the [Microsoft Edge Addons Catalog Developer Policies document][MicrosoftEdgeAddonsCatalogDeveloperPolicies].  

**Possible Values**:  

*   `{url}`  

#### Website URL  

This property is Optional.  
The URL of the web page for your Extension.  This URL must point to a page on your own website, not the web listing for your Extension in Microsoft Edge Addons.  

**Possible Values**:  

*   `{url}`  

#### Support URL/email address  

This property is Optional.  
The URL of the web page where users go for support with your Extension, or an email address to contact you for support.  You include support information for all submissions, so that your users know how to get support from you.  

**Possible Values**:  

*   `{email_address}`  
*   `{url}`  

#### Extension Rating  

Extension rating helps us determine the age of the target audience of your Extension.  
To help you determine if your Extensions has a mature content, review the [Microsoft Edge Addons Catalog Developer Policies document][MicrosoftEdgeAddonsCatalogDeveloperPolicies].  

**Possible Values**:  

*   Mature \(checkbox\): Check this box if your Extension contains any mature content.  If you select mature for your Extension, your listing is available with a separate tag to indicate that the Extension contains mature content.  

Click **Save** to proceed to listing section.  

## Step 5: Add Listings Information for Your Extension  

This is the information that users see when viewing your listing in Microsoft Edge Addons.  Many of the fields in a listing are optional, but we suggest providing as much information as possible to make your listing stand out.  The minimum required for your listing in Microsoft Edge Addons to be considered complete is the [text description](#description), [Extension logo](#store-logo), and [small promotional tile](#small-promotional-tile) in each language mentioned in your Extension package.  

### Store Listing fields  

*   [Store listing languages](#store-listing-languages)  
*   [Store display name](#store-display-name)  
*   [Description](#description)  
*   [Store logo](#store-logo)  
*   [Small promotional tile](#small-promotional-tile)  
*   [Media](#media)  
*   [Short description](#short-description)  
*   [Search terms](#search-terms)  

#### Store listing languages  

If your Extension package supports multiple languages, your Extension must have a listing page for each one.  
You must complete listing details \(text description, images, and so on\) for each language separately even if you are using the same content for each language.  If your Extension is localized in more than one language, those languages are displayed at the top of listing page.  

1.  Select any one language name from **Languages** drop-down list.  
1.  Fill the listing details.  
1.  Click **Save**.  
1.  Repeat for all of your supported languages.  

> [!NOTE]
> To add or remove languages for your listing in Microsoft Edge Addons, you must modify the list of languages supported by your Extension package and re-upload it.  

**Possible Values**:  

*   `English (United States)`:  This is the default value.  If you do not mention any language in your package, we set your default language to English \(United States\) and you must provide a listing in English \(United States\).  
*   `{language}` \(`{Country}`\)  

#### Store display name  

The name of Extension as mentioned in your Extension package manifest.  

> [!NOTE]
> To edit the name, you must update the manifest in your Extension package and re-upload it.  

#### Description  

This field is required.  
The description for your users of what your Extension does.  

**Possible Values**:  

*   {plain_text}: Less than 10,000 characters.  

#### Store logo  

This field is required.  
A 1:1 image for your Extension logo.  

**Possible Values**:  

*   128px x 128px, PNG \(.png\)  
*   150px x 140px, PNG \(.png\)  
*   300px x 300px, PNG \(.png\):  The recommended size.  

#### Small promotional tile  

This field is required.  
A small size promotional tile.  Your listing is displayed on this tile.  

**Possible Values**:  

*   440px x 280x, PNG \(.png\)  

#### Media  

This field is optional.  
You should provide these assets to help display your product more effectively.  

*   Screenshots  
    The images of your Extension that describe what your Extension does.  
    
*   Large promotion tiles  
    A large promotional tile to be feature your Extension more prominently in Microsoft Edge Addons.  
    
*   YouTube video URL  
    A valid [YouTube video URL for your Extension][MicrosoftEdgeAddonsUploadYouTubeVideo].  Your video should be good quality and minimal length.  Your YouTube video must pass certification before publishing your Extension in Microsoft Edge Addons.  Verify that your YouTube video complies with the [Microsoft Edge Addons Catalog Developer Policies document][MicrosoftEdgeAddonsCatalogDeveloperPolicies].  

**Possible Values**:  

*   10 Screenshots maximum.  
    *   640px x 480px, PNG \(.png\):  Screenshots.  
    *   1280px x 800px, PNG \(.png\):  Screenshots.  
*   1400px x 560px, PNG \(.png\):  Large promotion tiles.  
*   60 seconds or shorter and 2GB or smaller, YouTube video URL.  

#### Short description  

A short, catchy description that may be used at the top of the listing for your product.  If not provided, the first few lines from your longer description are used instead.  Because your description also appears below this text, you should provide a short description with different text so that your listing is less repetitive.  The Short description of your Extension is picked directly from the manifest file of your package.  

> [!NOTE]
> To edit the short description, you must update the manifest in your Extension package and re-upload it.  

#### Search terms  

Search terms are single words or short phrases that are not displayed to users but help make your Extension discoverable in Microsoft Edge Addons when users search using those terms.  

**Requirements**:  

*   7 or fewer search terms  
*   30 or fewer characters per search term  
*   21 or fewer words for combined search terms  

Click **Save** to proceed to save your listing section.  Click **Publish** to provide submission details.  

## Step 6: Complete your submission and click Publish  

The Submission options page of the Extension submission process is where you provide more information to help us test your product properly.  This is an optional step, but it is recommended for many submissions.  

### Publishing hold options  

By default, your submission is published as soon as it passes certification.  You may choose to place a hold on publishing your submission until a specific date.  The options in this section are described below.  

*   **Publish your submission as soon as it passes certification**  

    This is the default selection.  It means that your submission begins the publishing process as soon as it passes certification  

*   **Start publishing your submission on a certain date**  

    Choose **Start publishing your submission on a certain date** to ensure that the submission is not published until a specific date.  With this option, your submission is released as soon as possible on or after the date you specify.  The date must be at least 24 hours in the future.  Along with the date, you may specify the time at which the submission should begin to be published.  

### Notes for certification  

As you submit your Extension, you have the option to use the Notes for certification page to provide additional information to the certification testers.  This information helps ensure that your Extension is tested correctly.  If we are not able to fully test your submission, it may fail certification.  

Make sure to include the following \(if applicable for your Extension\):  

*   User names and passwords for test accounts.  
*   Steps to access hidden or locked features.  
*   Expected differences in behavior based on region or other user settings.  
*   Information about what changed in an app update.  
*   Anything else you think testers must understand about your submission.  

After completing the above details, click **Publish** to submit your Extension in Microsoft Edge Addons.  

When you finish creating the submission for your Extension and click **Publish**, the submission enters the certification step.  This process usually is completed within a couple of days, though in some cases it may take up to 7 business days.  After your submission passes certification, your Extension is published in Microsoft Edge Addons unless you selected the Publishing hold options to specify that it should not be released until a certain date.  You are notified when your submission is published, and the status of your Extension in the dashboard changes to **In the Store**.  

<!-- image links -->  

<!-- links -->  

[ExtensionsGettingStarted]: ../getting-started/index.md "Getting Started With Microsoft Edge \(Chromium\) Extensions"  

[MicrosoftEdgeAddonsUploadYouTubeVideo]: upload-video.md "Upload A YouTube Video | Microsoft Docs"  
[MicrosoftEdgeAddonsCatalogDeveloperPolicies]: ../store-policies/developer-policies.md "Microsoft Edge Addons Catalog Developer Policies | Microsoft Docs"  

[MicrosoftAppDeveloperAgreement]: /legal/windows/agreements/app-developer-agreement "App Developer Agreement | Microsoft Docs"  

[MicrosoftPartnerCenter]: https://partner.microsoft.com/dashboard/microsoftedge/public/login "Partner Center"  
