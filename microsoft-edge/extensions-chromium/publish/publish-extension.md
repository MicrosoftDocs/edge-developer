---
description: The overview for the Microsoft Edge (Chromium) Extensions.
title: Microsoft Edge (Chromium) Extensions
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/26/2019
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, extensions development, browser extensions, addons, partner center, developer
---

# Publish An Extension  

Publish your Extension on Microsoft Edge Addons catalog (Edge Addons). You must first create a submission on [Partner Center](https://go.microsoft.com/fwlink/?linkid=2099798) and submit it. This document lists all the details that you need to provide to create an Extension submission. 

## Before You Begin

- You must have an active developer account on [Partner Center](https://go.microsoft.com/fwlink/?linkid=2099798) to submit your Extension in Edge Addons. If you do not have one, **create a new developer account**.  

- Create a zip file of your Extension package and ensure that it contains these files:  

    - The manifest file and it must define the name and version of your Extension.  

    - The images and other files that are required for your Extension.  

> [!NOTE]
> Do not zip the Extension folder. To create a zip, open your Extension folder, select all the files and create zip of those files.  

If you have not started building an Extension, you may refer **Getting Started** tutorial for building a Microsoft Edge Chromium extension.  

To create an Extension submission on [Partner Center](https://go.microsoft.com/fwlink/?linkid=2099798), follow these steps.  

## Step 1: Start a New Submission

Go to your [developer dashboard](https://go.microsoft.com/fwlink/?linkid=2099798). From the Overview page (as shown below), click **Create new extension**.

## Step 2: Upload Your Extension Zip File

The **Package** page is where you upload the zip file for your Extension submission.  You may only upload one package at a time, so if your Extension is not complete you may upload a work-in-progress package and update at any time before you publish it.  Be sure that your package contains the manifest.json file and is working fine on **Microsoft Edge** prior to uploading.  
Upload the package by dragging it into the upload field or by selecting **Browse your files**.  The Package page validates the Extensions zip file and displays that **success or failure status of your upload**.  If the package passes validation; it is uploaded successfully and you see a success message.  If the package fails validation; the package is not accepted and you see an error message.  If there are errors in the package, resolve the issues and try uploading it again.  

After successful upload, review your Extension details and click **Next** to proceed.  

## Step 3: Provide Availability details

### Define Visibility

Select a **Visibility** option to define the audience who may discover and acquire your Extension. This gives you the option to specify whether users should find your Extension in Edge Addons or see the listing at all. Currently, you have two options under visibility: 

- **Public**  

    If you select Public, your Extension is available and discoverable to everyone in Edge Addons. This is the default option. Leave this option selected if you want your Extension to be listed in Edge Addons for users to find via searching, browsing, and the direct link of your Extension.

- **Hidden**  

    If you select Hidden, your Extension is hidden in Edge Addons from users searching or browsing; you must share your listing URL to distribute your Extension. Users who have the direct link to the listing may download it on Microsoft Edge (You may find your listing URL under **Extension Overview** page of Extension submission).

> [!NOTE]
> If you submit an Extension as Public and later change it to Private, Users who installed the Extension when it was private continue to have access and receive future updates.

### Define markets

You must define the specific markets in which you are offering your Extension, select **Show options** in the **Markets** section on the **Availability** page. The Market selection popup window is displayed, where you should choose the markets. By default, all markets are selected, including any **future markets** that we may add later. You may deselect individual markets to exclude them, or you may click **Unselect all** and then add individual markets of your choice.

> [!NOTE]
> If users already have your Extension in a certain market, and you later remove that market, users who already has the Extension in that market may continue to use it, but they do not get the later updates you submit.  

Click **Save** to proceed to **Properties** section. 

## Step 4: Select Properties for Your Extension 
  

| Properties | Description | Possible |
|------------|-------------|----------|
| Category   | Listing your Extension in the right category helps users find your Extension easily and understand more about it.  Select a Category that best describes your Extension | <ul> <li>Accessibility</li> <li>Blogging</li> <li>Developer Tools</li> <li>Fun</li> <li>News & Weather</li> <li>Photos</li> <li>Productivity</li> <li>Search Tools</li> <li>Shopping</li> <li>Social & Communication</li> <li>Sports</li> </ul> |
| Privacy policy requirements | In this section, you must indicate whether your Extension accesses, collects, or transmits any personal information.  If you answer “Yes”, a privacy policy URL is required.  Otherwise, it is optional (though if we determine that your Extension requires a privacy policy, and you have not provided one, your submission may fail certification) | <ul> <li>Yes</li> <li>No</li> </ul> |
| Privacy policy URL | You are responsible for ensuring your Extension complies with privacy laws and regulations, and for providing a valid privacy policy URL here, if required.  You must provide a privacy policy URL if any personal information is being accessed, transmitted, or collected by your Extension. <br /> To help you determine if your Extension requires a privacy policy, review the [Microsoft Edge Developer Agreement](https://docs.microsoft.com/legal/windows/agreements/app-developer-agreement) and the Microsoft Edge Addons Catalog Developer Policies document | {url}
| Website URL | **Optional**. Enter the URL of the web page for your Extension.  This URL must point to a page on your own website, not the web listing of your Extension in Edge Addons | {url} |
| Support URL/email address | **Optional**.  Enter the URL of the web page where users go for support with your Extension, or an email address to contact you for support.  We recommend you include support information for all submissions, so that your users know how to get support if they need it | {email_address} |
| Extension Rating | Extension rating helps us determine the age of the target audience of your Extension. Check this box if your Extension contains any mature content. If you select mature for your Extension, your listing is available with a separate tag to indicate that the Extension contains mature content. To help you determine if your Extensions has a mature content, review the Microsoft Edge Addons Catalog Developer Policies document | [checkbox] |

Click **Save** to proceed to listing section. 

## Step 5: Add Listings Information for Your Extension 

This is the information that users see when viewing your listing in Edge Addons.  Many of the fields in a listing are optional, but we suggest providing as much information as possible to make your listing stand out.  The minimum required for your listing in Edge Addons to be considered complete is the **text description, Extension logo,** and **small promotional tile** in each language mentioned in your Extension package. 

| Store Listing | Description | Possible Values |
| ------------- | ----------- | --------------- |
| Store listing languages | If your Extension package supports multiple languages, your Extension must have a listing page for each one. You must complete listing details (text description, images, and so on) for each language separately even if you are using the same content for each language. If your Extension is localized in more than one language, we display those languages at the top of listing page (as shown). Select any one language name from Languages drop-down, fill the listing details, and click Save. Repeat the procedure for all the languages in the drop-down list to complete this section. <br /> To add or remove languages for your listing in Edge Addons, you must modify the list of languages supported by your Extension package and update the zip under Package section.  We recommend that you localize your Extension package in at least one language.  However, if you do not mention any language in your package, we set your default language to English (United States) and you must provide a listing in English (United States). |  {language} ({Country}) |
| Store display name | The name of Extension as mentioned in your Extension package manifest.  To edit the name, you must update the manifest in your package and re-upload it. | |
| Description | **Required**.  You use the description field to describe to your users what your Extension does. This field accepts up to 10,000 characters of plain text. | {less than 10,000 characters} |
| Store logo | **Required**. A 1:1 image for your Extension logo. | <ul> <li>PNG (.png)</li><li>128px x 128px, 150px x 150px, or 300px x 300px (recommended)</li></ul> |
| Small promotional tile | **Required**.  A small size promotional tile.  Your listing is displayed on this tile. | <ul><li>PNG (.png)</li><li>440px x 280px</li</ul> |
| Media | **Optional**.  We recommend you provide these images to help display your product more effectively. <ul><li><dl><dt>Screenshots</dt><dd>The images of your Extension that describe what your Extension does</dd></dl></li><li><dl><dt>Large promotion tiles</dt><dd>A large promotional tile to be feature your Extension more prominently in Edge Addons</dd></dl></li><li><dl><dt>YouTube video URL</dt><dd>A valid YouTube video URL for your Extension (visit https://docs.microsoft.com/microsoft-edge/extensions-chromium/host-youtube-video). Video should be good quality and minimal length.  Like the other fields on the listing page, the YouTube video must pass certification before publishing your Extension in Edge Addons.  Be sure that the YouTube video complies with the Microsoft Edge Addons Catalog Developer Policies document.</dd></dl></li></ul> | <ul><li>Screenshots<ul><li>10 images maximum</li><li>640px x 480px or 1280px x 800px</li></ul><li>Large promotion tiles<ul><li>PNG (.png)</li><li>1400px x 560px</li></ul></li><li>YouTube video URL<ul><li>60 seconds or shorter in length</li><li>2GB or smaller in size</li></ul></li></ul> |
| Short description | It is a short, catchy description that may be used at the top of the listing for your product.  If not provided, the first few lines from your longer description are used instead.  Because your description also appears below this text, we recommend providing a short description with different text so that your listing is less repetitive.  The Short description of your Extension is picked directly from the manifest file of your package.  To edit this, you must edit it in manifest and upload the Package again under Package section of the submission. | |
| Search terms | Search terms are single words or short phrases that are not displayed to users but help make your Extension discoverable in Edge Addons when users search using those terms. | <ul><li>7 or fewer search terms</li><li>30 or fewer characters per search term</li><li>21 or fewer words for combined search terms</li></ul> |

Click **Save** to proceed to save your listing section.  Click **Publish** to provide submission details.   

## Step 6: Complete your submission and click Publish   

The Submission options page of the Extension submission process is where you provide more information to help us test your product properly.  This is an optional step, but we recommend it for many submissions.  

### Publishing hold options  

By default, we publish your submission as soon as it passes certification.  You may choose to place a hold on publishing your submission until a certain date.  The options in this section are described below.   

- **Publish your submission as soon as it passes certification**  

    This is the default selection. It means that your submission begins the publishing process as soon as it passes certification 

- **Start publishing your submission on a certain date**  

    Choose Start publishing this submission on to ensure that the submission is not published until a certain date.  With this option, your submission is released as soon as possible on or after the date you specify.  The date must be at least 24 hours in the future.  Along with the date, you may specify the time at which the submission should begin to be published.   

### Notes for certification   

As you submit your Extension, you have the option to use the Notes for certification page to provide additional information to the certification testers.  This information helps ensure that your Extension is tested correctly.  If we are not able to fully test your submission, it may fail certification.   

Make sure to include the following (if applicable for your Extension):   

- User names and passwords for test accounts.  
- Steps to access hidden or locked features.  
- Expected differences in behavior based on region or other user settings.  
- Information about what changed in an app update.  
- Anything else you think testers must understand about your submission.  

After completing the above details, click **Publish** to submit your Extension in Edge Addons.   

When you finish creating the submission for your Extension and click **Publish**, the submission enters the certification step.  This process usually is completed within a few hours, though in some cases it may take up to three business days.  After your submission passes certification, your Extension is published in Edge Addons unless you selected the Publishing hold options to specify that it should not be released until a certain date.  You are notified when your submission is published, and the status of your Extension in the dashboard changes to “In the Store”.

