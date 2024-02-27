---
title: Publish a Microsoft Edge extension by using a GitHub account
description: Optionally log in to Partner Center by using your GitHub account credentials.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: extensions
ms.date: 02/14/2024
---
# Publish a Microsoft Edge extension by using a GitHub account

If you're a GitHub user, you don't need to create a new Microsoft account (MSA) and remember extra passwords to sign into Partner Center.  You can use your personal GitHub credentials to sign into Partner Center and publish your Microsoft Edge extensions to the [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home/) website.

Currently, you can only use your _personal_ GitHub account to login to Partner Center. Using your _work_ GitHub account isn't supported.

A Microsoft account (MSA) is an Outlook.com, Live.com, or Hotmail.com account. This article covers several types of accounts. For a summary of these accounts, see [Types of accounts related to publishing Microsoft Edge extensions](create-dev-account.md#types-of-accounts-related-to-publishing-microsoft-edge-extensions).

To begin submitting extensions by using GitHub, register for the Microsoft Edge program in Partner Center using your GitHub credentials. A Microsoft account (MSA) will be created for you automatically if necessary.


<!-- ====================================================================== -->
## Step 1: Go to Partner Center to sign in

Go to the [Partner Center dashboard](https://partner.microsoft.com/dashboard/microsoftedge/overview). You'll be taken to the **Sign-in** page, with an option to sign in with your Microsoft account (MSA).


<!-- ====================================================================== -->
## Step 2: Select "Sign-in options" to view alternative sign-in options

Select **Sign-in options** at the bottom of the page, and then select **Sign in with GitHub**.  Enter your GitHub account credentials that you want to use to publish Microsoft Edge extensions.


<!-- ====================================================================== -->
## Step 3: Authorize Microsoft to access your GitHub account

Microsoft requires your permission to access your GitHub account.  Select **Authorize Microsoft-corp**.


<!-- ====================================================================== -->
## Step 4: Microsoft links your GitHub credentials with your Microsoft account (MSA)

Microsoft checks whether your GitHub account is already linked to a Microsoft account (MSA).  If your GitHub account isn't linked to a Microsoft account (MSA), Microsoft will create a new Microsoft account (MSA) and link it to your GitHub credentials.


<!-- ====================================================================== -->
## Step 5: Register for Microsoft Edge Program on Partner Center using the newly linked GitHub account

After your GitHub account is linked to a Microsoft account, you can start using your GitHub account to register as a Microsoft Edge extension developer to publish extensions free of charge.  See [Register as a Microsoft Edge extension developer](create-dev-account.md).

After you're registered for the Microsoft Edge program, you can port your Chrome extensions to Microsoft Edge.  To help manage your Microsoft Edge extensions, you can add more users to the Partner Center account by linking a Microsoft Entra ID account with your Partner Center account.  See [Add users to the Microsoft Edge program](aad-account.md).


<!-- ====================================================================== -->
## Contact us

Let us know if this article was helpful or if you have any feedback.  For help with signing into Partner Center using GitHub or other related questions, see [Contact Microsoft Edge extensions support](contact-extensions-team.md).


<!-- ====================================================================== -->
## See also

*  [Publish a Microsoft Edge extension](publish-extension.md)
