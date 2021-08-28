---
description: Learn how to add and manage users from your organization onto the Microsoft Edge program.
title: Add users to the Microsoft Edge program
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 08/27/2021
ms.topic: conceptual
ms.prod: microsoft-edge
keywords: edge-chromium, extensions development, browser extensions, add-ons, partner center, developer
---
# Add users to the Microsoft Edge program

<!-- prefer "extension" over "add-on" -->

This article focuses on adding more users to an existing Partner Center account, and managing those user accounts.  To manage Microsoft Edge extensions (also called _add-ons_), the Primary Owner of the Partner Center account must be a Microsoft account (MSA).  For information about the types of accounts, see [Types of accounts mentioned](create-dev-account.md#types-of-accounts-mentioned).


<!-- ====================================================================== -->
## Making sure you have a Partner Center account with a Microsoft account (MSA) as the Primary Owner

Creating a Partner Center account that can publish Microsoft Edge extensions requires a Microsoft account (MSA), after which a user can link an AD tenant, thus enabling users to login with their work accounts.

Different programs on Partner Center require different accounts:
*  Edge and Windows programs require a developer account.  These are the accounts where the owner is a Microsoft account (MSA).
*  Azure marketplace requires a commercial account.  To enroll, the user has to login with their work account.

Also see these articles in the Partner Center documentation:
*  [Manage your Partner Center account](/partner-center/partner-center-account-setup)
*  [Microsoft Partner Network membership benefits](/partner-center/mpn-overview)


<!-- ====================================================================== -->
## Step 1: Enroll in the Microsoft Edge program on Partner Center

First, determine whether you have a Partner Center account.  If you have a Partner Center account, determine whether you have a Partner Center commercial account, or a Partner Center developer account.  Try the steps in the sections below, to determine which kind of account you have, and then follow the steps in the section that applies to your type of Partner Center account.

### If you don't have a Partner Center account

Use a Microsoft account (MSA) to register with the Microsoft Edge program, by following the steps in the article [Register as a Microsoft Edge extension developer][DeveloperRegistration].<!-- = create-dev-account.md-->  You can use your GitHub account to create a Microsoft account (MSA).


### If the Primary Owner of your Partner Center account isn't a Microsoft account (MSA)

For a Partner Center account to manage Microsoft Edge add-ons, the Primary Owner of the Partner Center account must be a Microsoft account (MSA).

If the Primary Owner of a Partner Center account isn't a Microsoft account (MSA):

1. Use the Microsoft account (MSA) which corresponds with your Partner Center commercial account to sign in to your Partner Center commercial account.

1. Navigate to **Account settings** > [User management][UserMGMT] at Partner Center.

1. Find out who is the Primary Owner of the Partner Center commercial account.  Check whether the Primary Owner of the Partner Center developer account is a Microsoft account (MSA).  In this scenario, we expect that it's not a Microsoft account (MSA).

Use a Microsoft account (MSA) (not a work Microsoft account (MSA) or a school Microsoft account (MSA)) to register with the Microsoft Edge program, by following the steps in [Register as a Microsoft Edge extension developer][DeveloperRegistration]<!-- = create-dev-account.md-->.


### If you have a Partner Center developer account

1. If you are already signed in to Partner Center using your work Microsoft account (MSA), sign out.  The Microsoft Edge program on Partner Center doesn't support enrolling by using a work Microsoft account (MSA) or a school Microsoft account (MSA).

1. Use the Microsoft account (MSA) which corresponds with your Partner Center developer account to sign in to your Partner Center developer account.

1. Navigate to **Account settings** > [User management][UserMGMT] at Partner Center.

1. Find out who is the Primary Owner of the Partner Center developer account.

1. Verify that the Primary Owner of the Partner Center developer account is a Microsoft account (MSA) user.  This must not be a work Microsoft account (MSA) or a school Microsoft account (MSA).

1. Have the Primary Owner of the Partner Center developer account register for the Microsoft Edge Add-ons program by following the steps in [Register as a Microsoft Edge extension developer][DeveloperRegistration]<!-- = create-dev-account.md--> in the article "Register as a Microsoft Edge extension developer".

Next, do [Step 2: Associate Azure Active Directory with your Microsoft Edge Program account](#step-2-associate-azure-active-directory-with-your-microsoft-edge-program-account) below.


<!-- ====================================================================== -->
## Step 2: Associate Azure Active Directory with your Microsoft Edge Program account

Next, you'll link your Azure Active Directory tenants (Azure AD tenants) with your Microsoft Edge Program account, to enable managing Microsoft Edge extensions.  You can use Azure Active Directory to add users to your Microsoft Edge Program account and manage those users in that account.  You can add individual users, groups of users, or Azure Active Directory applications.

### Associate Azure Active Directory with your Microsoft Edge Program account

To be able to add users to your Microsoft Edge Program account, and to manage those users in that account, you must first associate your Microsoft Edge Program account with your organization's Azure Active Directory tenant (Azure AD tenant).  If your organization already uses Office 365 or other business services from Microsoft, you already have an Azure AD tenant.  Otherwise, you can create a new Azure AD tenant for free.

For more information, see the section [Create a brand new Azure AD to associate with your Partner Center account][AssociateAzureADPCnew] in the article _Associate Azure Active Directory with your Partner Center account_.

For more information, see [Associate Azure Active Directory with your Partner Center account][AssociateAzureADPC].  Associating an Azure AD tenant with a Microsoft Edge Program account at Partner Center works the same way as associating a tenant with the Windows apps developer program.

> [!IMPORTANT]
> If you have added users after associating your Azure AD tenant with your Microsoft account on Partner Center, note that changing roles or permissions of users is not currently supported.  However, you can continue to add as many users as you require and use the filter option of the [user management][UserManagementPartnerCenter] section to locate admins of specific roles.


<!-- ====================================================================== -->
## Step 3: Add users, groups, and Azure Active Directory applications to your account

After you've set up the Azure Active Directory association, on the Partner Center you can add users at **Account settings** > **User management**.  Each user has full access the extensions available in the program.  You can also add groups of users, or add Azure Active Directory applications, to grant them access to your Partner Center account.  For more information about adding users, see [Add users, groups, and Azure AD applications][AddAzure].


<!-- ====================================================================== -->
## Contact us 

If you need help or assistance with associating your Azure Active Directory account or other related queries, navigate to [Contact Microsoft Edge extensions support][ContactEdgeExtensions].


<!-- ====================================================================== -->
## See also

*  [Quickstart: Set up a tenant](/azure/active-directory/develop/quickstart-create-new-tenant) - General information about Azure Active Directory (Azure AD) tenants, in the Active Directory documentation.
<!-- contrasts "Work and school accounts, or personal Microsoft accounts" -->


<!-- ====================================================================== -->
<!-- links -->
[DeveloperRegistration]: ./create-dev-account.md "Register as a Microsoft Edge extension developer | Microsoft Docs"
[ContactEdgeExtensions]: ./contact-extensions-team.md "Contact Microsoft Edge extensions support | Microsoft Docs"

<!-- DMC/windows/uwp -->
[AssociateAADWithPartnerCenterAccount]: /windows/uwp/publish/associate-azure-ad-with-partner-center

[CreateNewAzureAD]: /windows/uwp/publish/associate-azure-ad-with-partner-center#create-a-brand-new-azure-ad-to-associate-with-your-partner-center-account

[AddAADUsersGroups]: /windows/uwp/publish/add-users-groups-and-azure-ad-applications

[AssociateAzureADPC]: /windows/uwp/publish/associate-azure-ad-with-partner-center "Associate Azure Active Directory with your Partner Center account | Microsoft Docs"

[AssociateAzureADPCnew]: /windows/uwp/publish/associate-azure-ad-with-partner-center#create-a-brand-new-azure-ad-to-associate-with-your-partner-center-account "Create a brand new Azure AD to associate with your Partner Center account - Associate Azure Active Directory with your Partner Center account | Microsoft Docs"

[AddAzure]: /windows/uwp/publish/add-users-groups-and-azure-ad-applications "Add users, groups, and Azure AD applications | Microsoft Docs"

<!-- non-DMC -->
[MicrosoftAccount]: https://account.microsoft.com/account "Microsoft account"

[UserManagementPartnerCenter]: https://partner.microsoft.com/dashboard/account/v3/usermanagement
[UserMGMT]: https://partner.microsoft.com/dashboard/account/v3/usermanagement "Microsoft Partner Center | Account settings | User management"

[WindowsCommunityEverythingAboutMicrosoftAccounts]: https://community.windows.com/stories/everything-you-need-to-know-about-microsoft-accounts "Everything you need to know about Microsoft accounts | Windows Community"
