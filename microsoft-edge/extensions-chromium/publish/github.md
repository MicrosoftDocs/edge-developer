---
description: Optionally login to Partner Center by using your GitHub account credentials.
title: Publish extensions by using a GitHub account
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 08/27/2021
ms.topic: conceptual
ms.prod: microsoft-edge
keywords: edge-chromium, extensions development, browser extensions, add-ons, partner center, developer
---
# Publish extensions by using a GitHub account

Many extension developers use GitHub to build and manage their extension code base.  You can use the same GitHub account to login to Microsoft Partner Center and publish your Microsoft Edge add-on to the Microsoft Edge Add-ons website.  If you are a GitHub user, you don't need to create a new Microsoft account and remember additional passwords.  Just use GitHub authentication to sign into Partner center and publish your extensions to the Microsoft Edge add-ons website.

After you have registered in the Microsoft Edge program, you can port your Chrome extensions to create Microsoft Edge extensions.  To help you manage extensions, you can add more users to the Partner Center account by adding an Azure Account directory (AAD) account to your Partner Center account.

To begin submitting extensions by using GitHub, you must register for the Microsoft Edge program in Partner Center by using your GitHub credentials.  You'll need to link to a Microsoft account (MSA), as follows.

> [!NOTE]
> Currently, you can only use your _personal_ GitHub account to login to Partner Center.  You cannot use your _work_ account on GitHub to log in, because that is not currently supported.

This article discusses several types of accounts; for an overview, see [Types of accounts mentioned](create-dev-account.md#types-of-accounts-mentioned).


<!-- ====================================================================== -->
## Step 1: Go to Partner Center to sign in

Go to [Partner Center][MicrosoftPartnerCenter].  You'll be taken to the **Sign-in** page, with an option to sign in with your Microsoft account (MSA).


<!-- ====================================================================== -->
## Step 2: Select "Sign-in options" to view alternative sign-in options 

Select **Sign-in options** at the bottom of the page, and then select **Sign in with GitHub**.  Enter your GitHub account credentials you want to use to publish extensions. 


<!-- ====================================================================== -->
## Step 3: Authorize Microsoft to access your GitHub account

Microsoft requires your permission to access your GitHub account.  Select **Authorize Microsoft-corp**.


<!-- ====================================================================== -->
## Step 4: Microsoft links your GitHub credentials with your Microsoft account (MSA)

Microsoft checks whether your GitHub account is already linked to a Microsoft account (MSA).  If your GitHub account isn't linked to a Microsoft account (MSA), Microsoft will create a new Microsoft account (MSA) and link it to your GitHub credentials.


<!-- ====================================================================== -->
## Step 5: Register for Microsoft Edge Program on Partner Center using the newly linked GitHub account

Your GitHub account will now work as a Microsoft account (MSA).  You can now use your GitHub credentials to register as a Microsoft Edge extension developer.  You can now publish extensions free of charge.

You can also port your Chrome extensions to become Microsoft Edge extensions by using this GitHub-based sign-in option.  To better manage your Microsoft Edge extensions, you can optionally register your organization for the Microsoft Edge program on Partner Center by associating your Azure Active Directory (Azure AD) account with your Microsoft account (MSA).


<!-- ====================================================================== -->
## Contact us

Let us know if this was helpful or if you have any feedback.  For help with signing into Partner Center using GitHub or other related questions, navigate to [Contact Microsoft Edge extensions support](contact-extensions-team.md). 


<!-- links -->
<!-- external links -->
[MicrosoftPartnerCenter]: https://partner.microsoft.com "Partner Center"  
