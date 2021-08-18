---
description: Learn how to add and manage users from your organization on to the Microsoft Edge program
title: Register your organization for Microsoft Edge program on Partner Center
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/30/2021
ms.topic: conceptual
ms.prod: microsoft-edge
keywords: edge-chromium, extensions development, browser extensions, add-ons, partner center, developer
---

# Add and manage users from your organization on to the Microsoft Edge program

To add and manage users in the Microsoft Edge program to manage extensions, you can now associate your Partner Center account with your organization's Azure Active Directory.

| Type of account | Description |
|---|---|
| _Partner Center commercial account_ | Enables basic capabilities at Partner Center. |
| _Partner Center developer account_ | Enables advanced capabilities at Partner Center. |
| _Microsoft account (MSA)_, _MSA account_ | A Microsoft account (MSA), including Hotmail, Live, or Outlook.  An MSA account is either a work MSA account, a school MSA account, or an MSA account that's associated with a Partner Center developer account. |
| _Microsoft Edge Program account_ | Enables multiple users to work with Microsoft Edge extensions at Partner Center. |
| _Azure Active Directory tenant_, _Azure AD tenant_ | An Azure Active Directory account. |


Creating a developer accounts requires an MSA account, after which a user can link an AD tenant, thus enabling users to login with their work accounts.
(temp note: added the above line using online VS Code, in working branch not via the temp PR branch.)


Different programs on Partner Center require different accounts:
*  Edge and Windows programs require a developer account.  These are the accounts where the owner is an MSA account.
*  Azure marketplace requires a commercial account.  To enroll, the user has to login with their work account.
See also these articles in the Partner Center docs:
*  [Manage your Partner Center account](https://docs.microsoft.com/en-us/partner-center/partner-center-account-setup)
*  [Microsoft Partner Network membership benefits](https://docs.microsoft.com/en-us/partner-center/mpn-overview)
(temp note: added the above paragraph using online VS Code, in the temp PR branch, not via the working branch.  Check that the working branch ends up containing these lines.)


<!-- ====================================================================== -->
## Step 1: Enroll in the Microsoft Edge program on Partner Center

First, determine whether you have a Partner Center account.  If you have a Partner Center account, determine whether you have a Partner Center commercial account, or a Partner Center developer account.  Try the steps in the sections below, to determine which kind of account you have, and then follow the steps in the section that applies to your type of Partner Center account.

### If you don't have a Partner Center account

Use an MSA account to register with the Microsoft Edge program, by following the steps in the article [Register as a Microsoft Edge extensions developer][DeveloperRegistration]. 


### If you have a Partner Center commercial account

If the primary owner of a Partner Center account isn't an MSA account, the Partner Center account is a Partner Center _commercial_ account.

1. Use the MSA account which corresponds with your Partner Center commercial account to sign in to your Partner Center commercial account.

1. Navigate to **Account settings** > [User management][UserMGMT] at Partner Center.

1. Find out who is the primary owner of the Partner Center commercial account.  Check whether the primary owner of the Partner Center developer account is an MSA account (in this scenario, we expect that it's not an MSA account).

Use an MSA account (not a work MSA account or a school MSA account) to register with the Microsoft Edge program, by following the steps in the article [Register as a Microsoft Edge extensions developer][DeveloperRegistration].


### If you have a Partner Center developer account

1. If you are already signed in to Partner Center using your work MSA account, sign out.  The Microsoft Edge program on Partner Center doesn't support enrolling by using a work MSA account or a school MSA account.

1. Use the MSA account which corresponds with your Partner Center developer account to sign in to your Partner Center developer account.

1. Navigate to **Account settings** > [User management][UserMGMT] at Partner Center.

1. Find out who is the primary owner of the Partner Center developer account.

1. Verify that the primary owner of the Partner Center developer account is an MSA account user.  This must not be a work MSA account or a school MSA account.

1. Have the primary owner of the Partner Center developer account register for the Microsoft Edge Add-ons program by following the steps in the section [Enroll in the Microsoft Edge program for Partner Center][DeveloperRegistration] in the article "Register as a Microsoft Edge extension developer".

Next, do [Step 2: Associate Azure Active Directory with your Microsoft Edge Program account](#step-2-associate-azure-active-directory-with-your-microsoft-edge-program-account) below.


<!-- ====================================================================== -->
## Step 2: Associate Azure Active Directory with your Microsoft Edge Program account

Next, you'll link your Azure Active Directory tenants (Azure AD tenants) with your Microsoft Edge Program account, to enable managing Microsoft Edge extensions.  You can use Azure Active Directory to add users to your _Microsoft Edge Program account_ and manage those users in that account.  You can add individual users, groups of users, or Azure Active Directory applications. 

### Associate Azure Active Directory with your _Microsoft Edge Program account_

In order to add users to your _Microsoft Edge Program account_, and to manage those users in that account, you must first associate your _Microsoft Edge Program account_ with your organization's Azure Active Directory tenant (Azure AD tenant).  If your organization already uses Office 365 or other business services from Microsoft, you already have an Azure AD tenant.  Otherwise, you can create a new Azure AD tenant for free.  For more information, see the section [Create a brand new Azure AD to associate with your Partner Center account][AssociateAzureADPCnew] in the article _Associate Azure Active Directory with your Partner Center account_.

For more information, see [Associate Azure Active Directory with your Partner Center account][AssociateAzureADPC].  Associating an Azure AD tenant with a Microsoft Edge Program account at Partner Center works the same way as associating a tenant with the Windows apps developer program.

> [!IMPORTANT]
> If you have added users after associating your Azure AD tenant with your Microsoft account on Partner Center, note that changing roles or permissions of users is not currently supported.  However, you can continue to add as many users as you require and use the filter option of the [user management][UserManagementPartnerCenter] section to locate admins of specific roles.


<!-- ====================================================================== -->
## Step 3: Add users, groups, and Azure Active Directory applications to your account

Once you've set up the Azure Active Directory association, on the Partner Center you can add users at **Account settings** > **User management**.  Each user has full access the extensions available in the program. You can also add groups of users, or add Azure Active Directory applications, to grant them access to your Partner Center account.  For more information about adding users, see [Add users, groups, and Azure AD applications][AddAzure].


<!-- ====================================================================== -->
## Contact us 

If you need help or assistance with associating your Azure Active Directory account or other related queries, navigate to [Contact Microsoft Edge extensions support][ContactEdgeExtensions] and find the relevant support contact for your query.


<!-- links -->

[AssociateAADWithPartnerCenterAccount]: https://docs.microsoft.com/windows/uwp/publish/associate-azure-ad-with-partner-center

[CreateNewAzureAD]: https://docs.microsoft.com/windows/uwp/publish/associate-azure-ad-with-partner-center#create-a-brand-new-azure-ad-to-associate-with-your-partner-center-account

[UserManagementPartnerCenter]: https://partner.microsoft.com/dashboard/account/v3/usermanagement

[AddAADUsersGroups]: https://docs.microsoft.com/windows/uwp/publish/add-users-groups-and-azure-ad-applications

[ContactEdgeExtensions]: ./contact-extensions-team.md "Contact Edge Extensions support | Microsoft Docs"

[WindowsCommunityEverythingAboutMicrosoftAccounts]:  https://community.windows.com/stories/everything-you-need-to-know-about-microsoft-accounts "Everything you need to know about Microsoft accounts | Windows Community"

[MicrosoftAccount]:  https://account.microsoft.com/account "Microsoft account"

[DeveloperRegistration]: ./create-dev-account.md "Register as a Microsoft Edge extensions developer | Microsoft Docs"

[AssociateAzureADPC]: /windows/uwp/publish/associate-azure-ad-with-partner-center "Associate Azure Active Directory with your Partner Center account | Microsoft Docs"

[AssociateAzureADPCnew]: /windows/uwp/publish/associate-azure-ad-with-partner-center#create-a-brand-new-azure-ad-to-associate-with-your-partner-center-account "Create a brand new Azure AD to associate with your Partner Center account - Associate Azure Active Directory with your Partner Center account | Microsoft Docs"

[AddAzure]: /windows/uwp/publish/add-users-groups-and-azure-ad-applications "Add users, groups, and Azure AD applications | Microsoft Docs"

[UserMGMT]: https://partner.microsoft.com/dashboard/account/v3/usermanagement "Microsoft Partner Center | Account settings | User management"
