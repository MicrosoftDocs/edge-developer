---
description: Learn how to create a new submission for publishing extension on Microsoft Edge Addons Store.
title: Publish extension
author: Shahina
ms.author: shahina
ms.date: 01/08/2019
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, extensions development, browser extensions, addons, partner center, developer
---
# Publish extension to Microsoft Store

To publish your extension on Microsoft Store, you must first create a submission on Partner center and submit it. This document lists all the details that you need to provide to create an extension submission.

## Before you begin

1. You must have an active developer account on Partner center to submit your extension on Microsoft Store. If you don’t have one, [create a new developer account](../open-developer-account.md).
1. Create a zip file of your extension package and ensure that it contains these files:  
    - The manifest file and it must have extension’s name and version defined
    - The images and other files that your extension requires  

If you haven’t yet started building an extension, you may refer [Getting Started](../../getting-started/index.md) tutorial for building an Edge Chromium extension  

To create an extension submission on Partner Center, follow these steps.  

## Step 1: Start a new submission

Go to your [developer dashboard]. From the **Overview** page (as shown below), click **Create new extension**.

![Overview page](../media/img1.png)

## Step 2: Upload your extension Zip file

The **Package** page is where you upload the **zip file** for the extension which you’re submitting. You can only upload one package at a time, so if your extension is not complete you can upload a work-in-progress package and update it anytime before publishing it. Be sure that the package you’re uploading contains `manifest.json` and is working fine on **Microsoft Edge**.  
Upload the package by dragging it into the upload field or by selecting **Browse your files**. The Package page will validate the extensions zip file and will show you upload **success or failure status**. If the package passes validation, it will be uploaded successfully and you’ll see a success message. However, if the package fails validation, the package will not be accepted and an error message will be shown. If there are errors in the package, resolve the issues and try uploading it again.

After successful upload, review your extension details and click **Next** to proceed.

![Package upload page](../media/img1.png)

## Step 3: Provide Availability details

### Visibility

Select a **Visibility** option to define the audience who can discover and acquire your extension. This gives you the option to specify whether people can find your extension in the Store or see its Store listing at all. Currently, you have two options under visibility:

- **Public**: If you select Public, your extension will be available and discoverable to everyone in the Microsoft Store. This is the default option. Leave this option selected if you want your extension to be listed in the Store for customers to find via searching, browsing, and extension’s direct link.
- **Hidden**: If you select Hidden, your extension can’t be found in the Microsoft Store by customers searching or browsing; you’ll need to share the store listing URL to distribute your extension. Any customer with the direct link to the product’s list can download it on Microsoft Edge.  
(You can find your extension store listing URL under **Extension Overview** page of extension submission.)

> [!Note]
> If you submit an extension as Public and later change it to Private, the users who already have the extension will continue to use it and receive updates you submit.

### Markets

To define specific markets in which you’d like to offer your extension, select **Show options** in the **Markets** section on the **Availability** page. This will display the Market selection popup window, where you can choose the markets.
By default, all markets are selected, including any **future markets** that we may add later. You can unselect individual markets to exclude them, or you can click **Unselect all** and then add individual markets of your choice.  
Note that if someone already has your extension in a certain market, and you later remove that market, the people who already have the extension in that market can continue to use it, but they won’t get the updates you submit.  

Click **Save** to proceed to **Properties** section.

## Step 4: Select Properties for your extension

### Category

Listing your extension in the right category helps customers find your extension easily and understand more about it. Select a Category that best describes your extension. Microsoft Store organizes extensions in these categories:

- Accessibility
- Blogging
- Developer Tools
- Fun
- News & Weather
- Photos
- Productivity
- Search Tools
- Shopping
- Social & Communication
- Sports

### Privacy policy requirements

In this section, you must indicate whether your extension accesses, collects, or transmits any personal information. If you answer **Yes**, a privacy policy URL is required. Otherwise, it is optional (though if we determine that your extension requires a privacy policy, and you have not provided one, your submission may fail certification).

### Privacy policy URL

You are responsible for ensuring your extension complies with privacy laws and regulations, and for providing a valid privacy policy URL here, if required.
You must provide a privacy policy URL if any personal information is being accessed, transmitted, or collected by your extension. To help you determine if your extension requires a privacy policy, review the [Microsoft Edge Developer Agreement] and the [Microsoft Edge Addons Store Developer Policies].

### Website URL

Enter the URL of the web page for your extension. This URL must point to a page on your own website, not your extension’s web listing in the Microsoft Store. This field is optional but recommended.

### Support URL/email address

Enter the URL of the web page where your customers can go for support with your extension, or an email address that customers can contact for support. It is optional but we recommend including this info for all submissions, so that your customers know how to get support if they need it.

### Extension Rating

Extension rating helps us determine the age of the target audience for your extension. Check this box if your extension contains any mature content. If you indicate your extension as mature, your extension store listing will available with a separate tag to indicate that the extension contains mature content. To help you determine if your extensions has a mature content, review the [Microsoft Edge Addons Store Developer Policies].  

Click **Save** to proceed to **Store listing** section.

## Step 5: Add Store listings information for your extension

This is the information that customers will see when viewing your extension’s listing in the Microsoft Store. Many of the fields in a Store listing are optional, but we suggest providing as much information as possible to make your listing stand out. The minimum required for the Store listings step to be considered complete is the **text description, extension logo and small promotional tile** in each language mentioned in your extension package.

### Store listing languages

If your extension package supports multiple languages, you'll have a Store listing page for each one. You must complete the Store listing details (text description, images etc) for each language separately even if you are using the same content for each language. If your extension is localized in more than one language, we’ll show those languages at the top of Store Listing page (as shown). Select any one language name from Languages drop-down, fill the Store listing details, and click Save. Repeat the procedure for all the languages in the drop-down list to complete this section.

![Store Listing page](../media/img1.png)

To **add** or **remove** languages for your store listings, you’ll need to modify the list of languages supported by your extension package and update the zip under **Package** section.
We recommend that you localize your extension package in at least one language. However, if you don’t mention any language in your package, we’ll use English (United States) as your default language and you’ll be asked to provide store listing in English (United States).

### Store display name

This is the name of extension as mentioned in your extension package manifest. To edit the name, you’ll have to update the manifest in your package and re-upload it.  

### Description

The description field is where you can tell customers what your extension does. This field accepts up to 10,000 characters of plain text.  

### Store logo

Store logo is a **mandatory** field for completing Store listing page. You must upload a 1:1, .png image for your extension logo. For store logo, we accept these image sizes – 128 x 128 or 150 x 150 or 300 x 300 pixels but we recommend you upload a 300 x 300 pixels logo to help enhance the appearance of your extension.

### Small promotional tile

A small size promotional tile (440 x 280 pixels, .png file) is **mandatory** for completing this section. This tile will be used to display your extension listing.

### Media

This section is optional, but we recommend you provide these images to help display your product more effectively.

- **Screenshots**: Screenshots are images of your extension that describes what your extension does. You have the option to upload up to 10 screenshots and the images must be one of the following: 1280 x 800 or 640 x 400 pixels.
- **Large promotion tiles**: You can provide large size promotional tile (1400 x 560 pixels .png image) if you'd like your extension to be featured more prominently on Microsoft Store.
- **YouTube video URL** : Enter a valid YouTube video URL for your extension. Video should be of good quality and minimal length (60 seconds or less and less than 2 GB recommended). For more detail, see [How to submit a promotional YouTube video in the store listing]

    Like the other fields on the Store listing page, the YouTube video must pass certification before publishing extension to the Microsoft Store. Be sure that the YouTube video comply with the [Microsoft Edge Addons Store Developer Policies].

### Short description

It is a short, catchy description that may be used at the top of your product’s Store listing. If not provided, the first few lines of your longer description will be used instead. Because your description also appears below this text, we recommend providing a short description with different text so that your Store listing isn’t repetitive.
Short description of extension is picked directly from the manifest file of your package. To edit this, you’ll need to edit it in manifest and upload the Package again under Package section of the submission.

### Search terms

Search terms are single words or short phrases that are not displayed to customers but can help your make your extension discoverable in the store when customers search using those terms. You can include up to 7 search terms with a maximum of 30 characters each and can use no more than 21 separate words across all search terms.  

Click **Save** to proceed to save you **Store listing** section. Click **Publish** to provide submission details

## Step 5: Complete your submission and click Publish

The Submission options page of the extension submission process is where you can provide more information to help us test your product properly. This is an optional step, but is recommended for many submissions.

### Publishing hold options

By default, we'll publish your submission as soon as it passes certification. You can optionally choose to place a hold on publishing your submission until a certain date. The options in this section are described below.

- **Publish your submission as soon as it passes certification**: It is the default selection, and means that your submission will begin the publishing process as soon as it passes certification
- **Start publishing your submission on a certain date**: Choose Start publishing this submission on to ensure that the submission is not published until a certain date. With this option, your submission will be released as soon as possible on or after the date you specify. The date must be at least 24 hours in the future. Along with the date, you can also specify the time at which the submission should begin to be published.

### Notes for certification

As you submit your extension, you have the option to use the Notes for certification page to provide additional information to the certification testers. This information can help ensure that your extension is tested correctly. If we can't fully test your submission, it may fail certification.

Make sure to include the following (if applicable for your extension):

- User names and passwords for test accounts
- Steps to access hidden or locked features
- Expected differences in behavior based on region or other customer settings
- Information about what's changed in the extension update
- Explain the functionality and the purpose of unique or complicated extension, or those with very limited UI
- Anything else you think testers will need to understand about your submission

After completing the above details, click **Publish** to submit your extension to the Store.  

When you finish creating your extension's submission and click Publish, the submission enters the *certification step*. This process usually is completed within a few hours, though in some cases it may take up to three business days. After your submission passes certification, the extension will be published to the store unless you've used Publishing hold options to specify that it should not be released until a certain date. You'll be notified when your submission is published, and the extension's status in the dashboard will change to **In the Store**.

[Microsoft Edge developer portal]: https://developer.microsoft.com/en-us/microsoft-edge/extensions/
[Partner center]: https://go.microsoft.com/fwlink/?linkid=2099798
[developer dashboard]: https://go.microsoft.com/fwlink/?linkid=2099798
[Microsoft Edge Developer Agreement]: https://docs.microsoft.com/en-us/legal/windows/agreements/app-developer-agreement
[Microsoft Edge Addons Store Developer Policies]: https://www.bing.com/
[How to submit a promotional YouTube video in the store listing]: ../host-youtube-video.md
