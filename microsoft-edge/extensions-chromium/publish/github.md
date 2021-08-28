---
description: Optionally login to Partner Center by using your GitHub account credentials.
title: Publish Microsoft Edge extensions by using a GitHub account
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 08/27/2021
ms.topic: conceptual
ms.prod: microsoft-edge
keywords: edge-chromium, extensions development, browser extensions, add-ons, partner center, developer
---
# Publish Microsoft Edge extensions by using a GitHub account

If you are a GitHub user, you don't need to create a new Microsoft account (MSA) and remember additional passwords.  You can just use GitHub authentication to sign into Partner Center and publish your Microsoft Edge extensions to the Microsoft Edge Add-ons website.

> [!NOTE]
> Currently, you can only use your _personal_ GitHub account to login to Partner Center.  You cannot use your _work_ account on GitHub to log in; that is not currently supported.

An _Microsoft account (MSA)_ is an Outlook.com, Live.com, or Hotmail.com account.  This article discusses several types of accounts; for an overview, see [Types of accounts related to publishing Microsoft Edge extensions](create-dev-account.md#types-of-accounts-related-to-publishing-microsoft-edge-extensions).

To begin submitting extensions by using GitHub, register for the Microsoft Edge program in Partner Center by using your GitHub credentials.  You'll need to link your GitHub account to a Microsoft account (MSA), as follows.  The Microsoft account (MSA) will be created for you if necessary.


<!-- ====================================================================== -->
## Step 1: Go to Partner Center to sign in

Go to the [Partner Center dashboard](https://partner.microsoft.com/dashboard/microsoftedge/overview).  You'll be taken to the **Sign-in** page, with an option to sign in with your Microsoft account (MSA).


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

After you are registered for the Microsoft Edge program, you can port your Chrome extensions to Microsoft Edge.  To help manage your Microsoft Edge extensions, you can add more users to the Partner Center account by linking an Azure Active Directory (Azure AD) account with your Partner Center account.  See [Add users to the Microsoft Edge program](aad-account.md).


<!-- ====================================================================== -->
## Contact us

Let us know if this was helpful or if you have any feedback.  For help with signing into Partner Center using GitHub or other related questions, navigate to [Contact Microsoft Edge extensions support](contact-extensions-team.md).


<!-- ====================================================================== -->
## See also

*  [Publish a Microsoft Edge extension](publish-extension.md)
