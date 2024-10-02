---
title: Submission states for extensions in the Microsoft Edge Add-ons website
description: Learn about the different states when submitting extensions to the Microsoft Edge Add-ons website.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: extensions
ms.date: 11/04/2022
---
# Submission states for extensions in the Microsoft Edge Add-ons website

The overview page on the Partner Center displays the state of your extension in the overall submission flow.  This article describes the different states your extension can be in at any time during the submission and certification process.

| # |  State |  Details |
|:--- |:--- |:--- |
| 1 |  In draft |  You create your submission and save a draft to your account.  You haven't submitted your extension package and your submission form details to publish to the Microsoft Edge Add-ons website.  Your extension isn't available to users in this state.  |
| 2|  In review |  You've submitted your extension.  Your extension package and your submission form details are reviewed by Microsoft.  Your extension isn't available to users in this state.  |
| 3|  Waiting to publish |  Your submission is in this state after your extension review is complete, and your extension is being prepared for publishing in the Microsoft Edge Add-ons website.  This state is an intermediate state between `In review` and `In the store`.  This state might not appear for all submissions.  |
| 4|  In the store |  The review is now complete, and your extension is published on the Microsoft Edge Add-ons website.  Your extension is available on the Microsoft Edge Add-ons website in the markets that you specified.  |
| 5 |  In the store.  Update in review |  Your extension is published to the Microsoft Edge Add-ons website and you've submitted an update that is under review by Microsoft.  |
| 6 |  Review failed |  Your submission is in this state if your extension fails a review.  A failed review might occur during the initial review or during an update.  You need to take corrective action and resubmit your extension.  |
| 7 |  Unavailable in store |  There are three possible scenarios when your extension displays this state:  **Unpublished from store**, **Removed from store**, and **Blocked**.  The description of each of the three states is specified in 8, 9, and 10.  |
| 8 |  Unpublished from store |  You unpublished your extension from the Microsoft Edge Add-ons website in Partner Center.  In Partner Center, you chose **unpublish** on the extension submission page.  After unpublishing your extension, it's no longer available in the Microsoft Edge Add-ons website for new users to download, but existing users can continue to use their copies of your extension.  |
| 9 |  Removed from store |  If your extension is found to violate the terms and conditions of Microsoft Edge Add-ons website, Microsoft might remove it from the Microsoft Edge Add-ons website, and the state then changes to this state.  <br />  After removal of your extension by Microsoft, your extension is no longer available on Microsoft Edge Add-ons website for new users to download, but existing users can continue to use their copies of your extension.  |
| 10 |  Blocked |  If your extension is found to be malicious and compromises the security and privacy of users, Microsoft has the right to block your extension from the Microsoft Edge Add-ons website, and the state changes to this state.  If your extension is blocked, it's removed from the Microsoft Edge Add-ons website and from all user devices.  |
