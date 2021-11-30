---
description: Adding and managing users from your organization onto the Microsoft Edge program to help manage the Partner Center account.  Enable your other team members to publish Microsoft Edge extensions to the Microsoft Edge Add-ons website using your Partner Center account.
title: Add users to the Microsoft Edge program
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 08/27/2021
ms.topic: conceptual
ms.prod: microsoft-edge
keywords: edge-chromium, extensions development, browser extensions, add-ons, partner center, developer
---
# Add users to the Microsoft Edge program

<!-- better? # Add users to your Partner Center account -->
<!-- todo globally: "Microsoft Edge program", or other term? -->

To help manage Microsoft Edge extensions, you can add more users to an existing Partner Center account.  To manage Microsoft Edge extensions, the Primary Owner of the Partner Center account must be a Microsoft account (MSA).

A Microsoft account (MSA) is an Outlook.com, Live.com, or Hotmail.com account.  For an overview, see [Types of accounts related to publishing Microsoft Edge extensions](create-dev-account.md#types-of-accounts-related-to-publishing-microsoft-edge-extensions).


<!-- ====================================================================== -->
## Making sure you have a Partner Center account with a Microsoft account (MSA) as the Primary Owner

To create a Partner Center account that can publish Microsoft Edge extensions, you must have a Microsoft account (MSA), either by creating one directly or by using your personal GitHub account credentials.

After your Partner Center account is able to publish Microsoft Edge extensions, you can link the Partner Center account to an Azure Active Directory (Azure AD) tenant.  A linked Active Directory tenant enables the added users to login to your Partner Center developer account by using their work accounts.

Different programs on Partner Center require different types of accounts:

*  The Microsoft Edge program (like the Windows developer program) requires a Partner Center _developer_ account.  A Partner Center developer account has a Primary Owner that's a Microsoft account (MSA).

*  In contrast, Azure marketplace requires a Partner Center _commercial_ account.  (To enroll, the user has to login with their work account.)

Also see these articles in the Partner Center documentation:
*  [Manage your Partner Center account](/partner-center/partner-center-account-setup)
*  [Microsoft Partner Network membership benefits](/partner-center/mpn-overview)


<!-- ====================================================================== -->
## Step 1: Enroll in the Microsoft Edge program on Partner Center

<!-- todo: consider moving entire Step 1 section into create-dev-account.md -->

First, determine whether you have a Partner Center account.  If you have a Partner Center account, determine whether the Primary Owner is a Microsoft Account (MSA), which is required for joining the Microsoft Edge program, to manage Microsoft Edge extensions.  Then follow the steps in the section that applies to your type of Partner Center account.

### If you don't have a Partner Center account

1.  Use a Microsoft account (MSA) to register with the Microsoft Edge program, by following the steps in the article [Register as a Microsoft Edge extension developer](./create-dev-account.md).<!-- = create-dev-account.md-->  As mentioned in that article, you can use your GitHub account to create a Microsoft account (MSA).

Next, do [Step 2: Associate Azure Active Directory with your Microsoft Edge Program account](#step-2-associate-azure-active-directory-with-your-microsoft-edge-program-account) below.


### If the Primary Owner of your Partner Center account isn't a Microsoft account (MSA)

For a Partner Center account to manage Microsoft Edge extensions, the Primary Owner of the Partner Center account must be a Microsoft account (MSA).

To determine whether the Primary Owner of your Partner Center account is a Microsoft account (MSA):

1. Use the Microsoft account (MSA) which corresponds with your Partner Center commercial account to sign in to your Partner Center commercial account.

1. Navigate to **Account settings** > [User management](https://partner.microsoft.com/dashboard/account/v3/usermanagement) at Partner Center.

1. Check whether the Primary Owner of the Partner Center account is a Microsoft account (MSA).  If the Primary Owner isn't a Microsoft account (MSA), that means that this is a Partner Center _commercial_ account rather than a Partner Center _developer_ account.

1. Use a Microsoft account (MSA) (not a work Microsoft account (MSA) or a school Microsoft account (MSA)) to register with the Microsoft Edge program, by following the steps in [Register as a Microsoft Edge extension developer](./create-dev-account.md)<!-- = create-dev-account.md-->.

Next, do [Step 2: Associate Azure Active Directory with your Microsoft Edge Program account](#step-2-associate-azure-active-directory-with-your-microsoft-edge-program-account) below.


### If the Primary Owner of your Partner Center account is a Microsoft account (MSA)

1. If you are already signed in to Partner Center using your work Microsoft account (MSA), sign out.  The Microsoft Edge program on Partner Center doesn't support enrolling by using a work Microsoft account (MSA) or a school Microsoft account (MSA).

1. Use the Microsoft account (MSA) which corresponds with your Partner Center developer account to sign in to your Partner Center developer account.

1. Navigate to **Account settings** > [User management](https://partner.microsoft.com/dashboard/account/v3/usermanagement) at Partner Center.

1. Find out who is the Primary Owner of the Partner Center developer account.

1. Verify that the Primary Owner of the Partner Center developer account is a Microsoft account (MSA) user.  This must not be a work Microsoft account (MSA) or a school Microsoft account (MSA).

1. Have the Primary Owner of the Partner Center developer account register for the Microsoft Edge program by following the steps in [Register as a Microsoft Edge extension developer](./create-dev-account.md)<!-- = create-dev-account.md-->.

Next, do [Step 2: Associate Azure Active Directory with your Microsoft Edge Program account](#step-2-associate-azure-active-directory-with-your-microsoft-edge-program-account) below.


<!-- ====================================================================== -->
## Step 2: Associate Azure Active Directory with your Microsoft Edge Program account

Next, you'll link your Azure Active Directory tenants (Azure AD tenants) with your Microsoft Edge Program account, to enable managing Microsoft Edge extensions.  You can use Azure Active Directory to add users to your Microsoft Edge Program account and manage those users in that account.  You can add individual users, groups of users, or Azure Active Directory applications.

To be able to add users to your Microsoft Edge Program account, and to manage those users in that account, you must first associate your Microsoft Edge Program account with your organization's Azure Active Directory tenant (Azure AD tenant).  If your organization already uses Office 365 or other business services from Microsoft, you already have an Azure AD tenant.  Otherwise, you can create a new Azure AD tenant for free.  To create an AD tenant, see [Create a brand new Azure AD to associate with your Partner Center account](/windows/uwp/publish/associate-azure-ad-with-partner-center#create-a-brand-new-azure-ad-to-associate-with-your-partner-center-account) in the article _Associate Azure Active Directory with your Partner Center account_.

Also see [Associate Azure Active Directory with your Partner Center account](/windows/uwp/publish/associate-azure-ad-with-partner-center), in the Windows UWP documentation.  Associating an Azure AD tenant with a Microsoft Edge Program account at Partner Center works the same way as associating a tenant with the Windows apps developer program.

> [!IMPORTANT]
> If you have added users after associating your Azure AD tenant with your Microsoft account on Partner Center, note that changing roles or permissions of users is not currently supported.  However, you can continue to add as many users as you require and use the filter option of the [user management](https://partner.microsoft.com/dashboard/account/v3/usermanagement) section to locate admins of specific roles.


<!-- ====================================================================== -->
## Step 3: Add users, groups, and Azure Active Directory applications to your account

After you've set up the Azure Active Directory association, on the Partner Center you can add users at **Account settings** > **User management**.  Each user has full access the extensions available in the program.  You can also add groups of users, or add Azure Active Directory applications, to grant them access to your Partner Center account.

For more information about adding users, see [Add users, groups, and Azure AD applications](/windows/uwp/publish/add-users-groups-and-azure-ad-applications) in the Windows UWP documentation.


<!-- ====================================================================== -->
## Contact us

If you need help or assistance with associating your Azure Active Directory account or other related queries, navigate to [Contact Microsoft Edge extensions support](./contact-extensions-team.md).


<!-- ====================================================================== -->
## See also

*  [Quickstart: Set up a tenant](/azure/active-directory/develop/quickstart-create-new-tenant) - General information about Azure Active Directory (Azure AD) tenants, in the Active Directory documentation.
<!-- contrasts "Work and school accounts, or personal Microsoft accounts" -->
