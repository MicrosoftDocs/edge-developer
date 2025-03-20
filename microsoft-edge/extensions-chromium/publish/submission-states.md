---
title: Submission states for extensions at Microsoft Edge Add-ons
description: The various processing states when submitting an extension at Microsoft Edge Add-ons.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: extensions
ms.date: 11/04/2022
---
# Submission states for extensions at Microsoft Edge Add-ons

The overview page on the Partner Center displays the state of your extension in the overall submission flow.  This article describes the different states your extension can be in at any time during the submission and certification process.

In articles about Microsoft Edge extensions, the word _store_ includes [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/).

| # | State | Details |
|---|---|---|
| 1 | In draft | You create your submission and save a draft to your account.  You haven't submitted your extension package and your submission form details to publish at [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/).  Your extension isn't available to users in this state. |
| 2| In review | You've submitted your extension.  Your extension package and your submission form details are reviewed by Microsoft.  Your extension isn't available to users in this state. |
| 3| Waiting to publish | Your submission is in this state after your extension review is complete, and your extension is being prepared for publishing at [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/).  This state is an intermediate state between `In review` and `In the store`.  This state might not appear for all submissions. |
| 4| In the store | The review is now complete, and your extension is published at [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/).  Your extension is available at [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/) in the markets that you specified. |
| 5 | In the store.  Update in review | Your extension is published at [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/) and you've submitted an update that is under review by Microsoft. |
| 6 | Review failed | Your submission is in this state if your extension fails a review.  A failed review might occur during the initial review or during an update.  You need to take corrective action and resubmit your extension. |
| 7 | Unavailable in store | There are three possible scenarios when your extension displays this state:  **Unpublished from store**, **Removed from store**, and **Blocked**.  The description of each of the three states is specified in 8, 9, and 10. |
| 8 | Unpublished from store | You unpublished your extension at [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/) in Partner Center.  In Partner Center, you chose **unpublish** on the extension submission page.  After unpublishing your extension, it's no longer available at [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/) for new users to download, but existing users can continue to use their copies of your extension. |
| 9 | Removed from store | If your extension is found to violate the terms and conditions for [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/), Microsoft might remove the extension from [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/), and the state then changes to this state.  <br />After removal of your extension by Microsoft, your extension is no longer available at [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/) for new users to download, but existing users can continue to use their copies of your extension. |
| 10 | Blocked | If your extension is found to be malicious and compromises the security and privacy of users, Microsoft has the right to block your extension from [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/), and the state changes to this state.  If your extension is blocked, it's removed from [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/) and from all user devices. |
