---
ms.assetid: c4544a19-de78-4c69-a042-c0415726548f
description: Learn how to create a new submission for publishing extension on Microsoft Edge Addons Store.
title: create-new-submission
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/08/2019
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, extensions development, browser extensions, addons, partner center, developer
---
# Creating an extension submission

To publish your extension on Microsoft Store, you must first create a submission on Partner center and submit it.
Before starting to create your submission, ensure that the extension is working fine on Microsoft Edge browser and you package contains these files:  
- The manifest file and it must have extension’s name and version defined
- The images and other files that your extension requires  
  

To create an extension submission on Partner Center, you may follow these steps:
  
1. Go to [Microsoft Edge developer portal] and sign in to your developer account.
2. From the **Overview page**, click **Create new**
3. Upload your extension Zip file by dragging the file into the upload field.
After you upload the package, you’ll see a few manifest details to review before you click **Save** to proceed. If there are errors in the package, resolve the issues and try uploading it again.  
(To update your package, you can drag and drop the new package over your current package)

4. Select a **Visibility** option to define the audience who can discover and acquire your extension. Currently, you have two options under visibility:  

    - **Public**: Your extension will be available and discoverable to everyone in the Microsoft Store.
    - **Hidden**: Your extension can’t be found in the Microsoft Store by customers searching or browsing; you’ll need to share the store listing URL to distribute your extension.

5. To define specific markets in which you’d like to offer your extension, select **Show options** in the **Markets** section on the **Availability** page. This will display the Market selection popup window, where you can choose the markets.  
By default, all markets are selected, including any **future markets** that we may add later. You can unselect individual markets to exclude them, or you can click **Unselect all** and then add individual markets of your choice.  
Note that if someone already has your extension in a certain market, and you later remove that market, the people who already have the extension in that market can continue to use it, but they won’t get the updates you submit.  

6. Click **Save** to proceed to **Properties** section.
7. Select **Properties** for your extension.  

    - **Category**: Select a Category that the Microsoft Store should use to list your extension. You must choose the category that best describes your extension.
    - **Privacy policy requirements**: You must indicate whether your extension accesses, collects, or transmits any personal information. If you answer Yes, a privacy policy URL is required. Otherwise, it is optional (though if we determine that your extension requires a privacy policy, and you have not provided one, your submission may fail certification).
    - **Privacy policy URL**: Provide a privacy policy URL if any personal information is being accessed, transmitted, or collected by your extension. To help you determine if your extension requires a privacy policy, review the [Microsoft Edge Developer Agreement] and the Microsoft Edge Addons Store Developer Policies.
    - **Website URL**: Enter the URL of the web page for your extension. This URL must point to a page on your own website, not your extension’s web listing in the Microsoft Store. This field is optional but recommended.
    - **Support URL/email address**: Enter the URL of the web page where your customers can go for support with your extension, or an email address that customers can contact for support. It is optional but we recommend including this info for all submissions, so that your customers know how to get support if they need it.
    - **Mature content**:  Check this box if your extension contains any mature content. If you indicate your extension as mature, your extension store listing will available with a separate tag to indicate that the extension contains mature content. To help you determine if your extensions has a mature content, review the [Microsoft Edge Addons Store Developer Policies].

8. Click **Save** to proceed to **Store listing** section.
9. Add **Store listings** information for your extension such as text, images, etc. This is the information that customers will see when viewing your extension’s listing in the Microsoft Store.  

    The following details are required to complete the Store listing:  

    - **Languages and default language**: You must define one default language and complete the Store listing page for your default language. You can define default language either by adding it in your package manifest or by selecting a language from the Languages option on Store listing page and check Make this my default language checkbox. If your package supports multiple languages, we recommend providing Store listing in each language that your package supports.  
    - **Store display name**: This is the name of extension as mentioned in your extension package manifest. To edit the name, you’ll have to update the manifest in your package and reupload it.  
    - **Description**: The description field is where you can tell customers what your extension does. This field accepts up to 10,000 characters of plain text.  
    - **Store logo**: You must upload a 1:1 logo image for your extension. The format of the image must be .png. For image size, you have two different options – 128 x 128 or 300 x 300 pixels. We recommend you upload a 300 x 300 pixels logo to help enhance the appearance of your extension.  
    - **Small promotional tile**: A small size promotional tile (440 x 280) is compulsory.  
    - **Media**: This section is optional, but we recommend you provide these images to help display your product more effectively.  
        - **Screenshots**: Screenshots are images of your extension. You have the option to upload up to 10 screenshots and the images must be one of the following: 1280 x 800 or 640 x 400 pixels. If your extension supports multiple locales, you can provide locale-specific screenshots.
        - **Large promotion tiles**: Optionally, you can provide large size promotional tile (1400 x 560) that the store can use to promote your extension.  
        - **YouTube video URL** : Enter a valid YouTube video URL for your extension. Video should be of good quality and minimal length (60 seconds or less and less than 2 GB recommended).  
    - **Short description**: It is a shorter, catchy description of your extension. We recommend you provide a short description in your package manifest. For best results, keep your short description under 270 characters.  
    - **Search terms**: Search terms are single words or short phrases that are not displayed to customers but can help your make your extension discoverable in the store when customers search using those terms. You can include up to 7 search terms with a maximum of 30 characters each and can use no more than 21 separate words across all search terms.  
10. Click **Save** to proceed to save you **Store listing** section
11. To complete your submission, click **Publish** and provide these details –
    - **Publish** hold options to hold on publishing your submission until a certain date
    - **Notes for certification** to provide additional info to the certification testers.  
    After completing the above details, click **Publish** to submit your extension to the Store.

[Microsoft Edge developer portal]: https://www.bing.com/
[Microsoft Edge Developer Agreement]: https://www.bing.com/
[Microsoft Edge Addons Store Developer Policies]: https://www.bing.com/
