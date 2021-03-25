---
description: Learn about some handy tips and tricks regarding Microsoft Edge extensions
title: Tips and tricks | Extensions
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 11/03/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer, extensions
ROBOTS: NOINDEX,NOFOLLOW
---
# Tips and tricks  

[!INCLUDE [deprecation-note](includes/deprecation-note.md)]  

Whether you're currently working on a Microsoft Edge extension or have already published one, the following tips and tricks might come in handy.  

## Get a direct link to your extension in the Microsoft Store  

In the Windows Dev Center dashboard, you can find a direct link to your extension in the Microsoft Store.  This link can be useful for advertising and sharing out your extension.  

After logging in to the Windows Dev Center and navigating to your extension through the dashboard, on the App identity page you’ll find the link in the **Store protocol link** row:  

![store protocol link](./media/store-link.png)  
 
## Make sure you’re following the Microsoft Store Policy  

When creating your extension, make sure you keep in mind the guidelines for submitting to the Microsoft Store highlighted in the [Microsoft Store Policy](/windows/uwp/publish/store-policies).  
 
Microsoft Edge extensions also have an additional set of policies to follow seen [here](/windows/uwp/publish/store-policies#pol_10_12).  

## Improve your extension’s discoverability in the Microsoft Store  

You can add keywords to your extension submission to improve its discoverability through searches.  For example, `Microsoft Edge Extensions` and `name of my extension`.  

This can be done in the Windows Dev Center under the description section of your extension.  These keywords will need to be added for every language your extension supports.  

![Use keywords to submit a response to a review](./media/keywords.png)  

## Automate your submission to the Microsoft Store  

You can automate and streamline your submissions to the Microsoft Store by using the new Microsoft Store Submission API, which allows you to update apps/games, add-ons \(in-app purchases\), and package flights through a REST API.  Check out the [documentation and samples](/windows/uwp/monetize/create-and-manage-submissions-using-windows-store-services) or use the open source [Submission API VSTS extension](https://github.com/Microsoft/windows-dev-center-vsts-extension) to get started.  

## Use the Windows Feedback Hub to gather feedback/reviews/feature requests  

You can direct users to the Windows Feedback Hub subcategory for your extension by embedding a link that points to it.  This link will need to be created using the following format:  

```text
feedback-hub://?tabid=2&appid=<PFN>!App
```  

You will need to substitute `<PFN>` with the Package Family Name of you extension.  This can be found under the **App identity** section for your extension in the Windows Dev Center.  

## Check out your ratings and reviews  

Log in regularly to check your user reviews and ratings.  While the UWP app will only have info on the current user market, logging into the Windows Dev Center will display average rating across all markets.  

## Respond to user reviews  

You can respond to user reviews in the Microsoft Store through the Windows Dev Center's dashboard.  Navigate to your extension and under Analytics select **Reviews**.  A link will appear underneath each review that will allow you to respond directly to the customer.  This channel of communication enables you to offer feedback, resolutions, or send a thank you for the review!  

![Respond to user review](./media/reviews.png)  
