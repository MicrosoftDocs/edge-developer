---
description: Optionally login to Partner Center by using your GitHub account credentials.
title: Logging in to Partner Center by using your GitHub account
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 08/26/2021
ms.topic: conceptual
ms.prod: microsoft-edge
keywords: edge-chromium, extensions development, browser extensions, add-ons, partner center, developer
---
# Logging in to Partner Center by using your GitHub account

If you are a GitHub user, you don’t have to create a new Microsoft account and remember additional passwords. Just use GitHub auth to sign into Partner center and Publish your extensions to the Microsoft Edge add-ons website.

After you have registered into the Microsoft Edge program, you can port your Chrome extensions to create Microsoft Edge extensions.  To allow your to better manage extensions, you can add more users to the Partner Center account by adding an Azure Account directory (AAD) account to your Partner Center account.


<!-- ====================================================================== -->
## Publish Microsoft Edge add-ons by using your GitHub credentials

Many extension developers use GitHub to build and manage their extension code base.  You can use the same GitHub account to login to Microsoft Partner Center and publish your add-on to the Microsoft Edge Add-ons website. 


<!-- ====================================================================== -->
## Steps to sign-in using GitHub

To begin submitting extensions by using GitHub, you must register for the Microsoft Edge program in Partner Center by using your GitHub credentials.  You'll need to link to a Microsoft account (an MSA account), as follows.

### Step 1: Go to Partner Center to sign in

Go to Partner Center.  You'll be taken to the **Sign-in** page, with an option to sign in with your Microsoft account (also called an _MSA account_).

### Step 2: Select “Sign-in options” to view alternative sign in options 

Select **Sign-in options** at the bottom of the page, and then select **Sign in with GitHub**.  Enter your GitHub account credentials you want to use to publish extensions. 
> [!IMPORTANT]
> Currently, you can use your personal account only on GitHub to login to Partner Center. You may not be able to use your work account on GitHub to log in as it is not supported at the moment.

### Step 3: Authorize Microsoft to access your GitHub account

Microsoft requires your permission to access your GitHub account.  Select **Authorize Microsoft-corp**.

### Step 4: GitHub credentials linked with Microsoft account

Microsoft checks whether your GitHub account is already linked to a Microsoft (MSA) account.  If your GitHub account isn't linked to an MSA account, Microsoft will create a new MSA account and link it to your GitHub credentials.

### Step 5: Register for Microsoft Edge Program on Partner Center using the newly linked GitHub account

Your GitHub account will now work as a Microsoft (MSA) account.  You can now use your GitHub credentials to register as a Microsoft Edge extension developer.  You can now publish extensions free of charge.

You can also port your Chrome extensions to become Microsoft Edge extensions by using this GitHub-based sign-in option.  To better manage your Microsoft Edge extensions, you can optionally register your organization for the Microsoft Edge program on Partner Center by associating your Azure Account directory (AAD) account with your MSA account.


<!-- ====================================================================== -->
## Contact us

Let us know if this was helpful or if you have any feedback.  If you need help or assistance with signing into Partner Center using GitHub or other related queries, navigate to Contact Microsoft Edge extensions support and find the relevant support contact for your query. 


<!-- ====================================================================== -->
## Feature details

This is a temporary section.  It contains all the numbered steps, alternating with screenshots.  Todo: merge the numbered steps and screenshots into the sections above.

**Objective:** This feature enables developers to publish Microsoft Edge extensions.  You can optionally sign into Partner Center by using your GitHub credentials.

### Feature description 

This feature enables you to sign into Partner Center by using your GitHub account.

1.  Go to [Partner Center](https://partner.microsoft.com/dashboard/home).  The sign-in page appears.

2.  Select **sign-in options**.
 
    :::image type="complex" source="../media/extensions-github1.png" alt-text="Login dialog box 1" lightbox="../media/extensions-github1.png":::
       Login dialog box 1
    :::image-end:::

3.  Select **Sign in with GitHub**.
 
    :::image type="complex" source="../media/extensions-github2.png" alt-text="Login dialog box 2" lightbox="../media/extensions-github2.png":::
       Login dialog box 2
    :::image-end:::

4.  Enter your GitHub account credentials.  You can login using your personal account on GitHub.  Signing in with a work account isn't supported.
  
    :::image type="complex" source="../media/extensions-github3.png" alt-text="Login dialog box 3" lightbox="../media/extensions-github3.png":::
       Login dialog box 3
    :::image-end:::

5.  Microsoft needs your permission to access your GitHub account.  Select **Authorize Microsoft-corp**.
 
    :::image type="complex" source="../media/extensions-github4.png" alt-text="Login dialog box 4" lightbox="../media/extensions-github4.png":::
       Login dialog box 4
    :::image-end:::

6.  After authorizing, if your GitHub account is not the same as your Microsoft account (MSA), Microsoft will create your MSA account and link it to your GitHub credentials.
 
    :::image type="complex" source="../media/extensions-github5.png" alt-text="Login dialog box 5" lightbox="../media/extensions-github5.png":::
       Login dialog box 5
    :::image-end:::

7.  After your GitHub account is linked to your MSA account, you will be logged into Partner Center with that MSA account.  You'll then be redirected to the Partner Center home page.  Select **Microsoft Edge program** to register in the program.  Then you'll be able to submit Microsoft Edge extensions.
