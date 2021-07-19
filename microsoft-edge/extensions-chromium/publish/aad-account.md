---
description: Learn how to register your organization for Microsoft Edge program on Partner Center
title: Register your organization for Microsoft Edge program on Partner Center
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/18/2021
ms.topic: conceptual
ms.prod: microsoft-edge
keywords: edge-chromium, extensions development, browser extensions, add-ons, partner center, developer
---

# Register your organization for Microsoft Edge program on Partner Center

To add and manage users in Microsoft Edge program to manage extensions, you can now associate your Partner Center account with your organization's Azure Active Directory.

## Step 1: Enrol into the Microsoft Edge program on Partner Center 

If you are new to Partner Center and don't have an account or if you have an existing commercial account with Partner Center, create a new [Microsoft account (MSA)][WindowsCommunityEverythingAboutMicrosoftAccounts] to register with the Microsoft Edge program. Follow the steps mentioned in the [Enroll in the Microsoft Edge program for Partner Center][DeveloperRegistration]. 

1. If you have a developer account registered on Partner center, use the corresponding Microsoft account (MSA) to sign into your developer account, and then enroll in the Microsoft Edge program. Note that Microsoft Edge program on Partner Center **does not support enrolling directly** with a work or school account. 
    1. **If you are already signed in into Partner Centre using your work account**, you need to login as a Global Admin or Primary Owner. If you are not the owner, go to https://partner.microsoft.com/en-us/dashboard/account/v3/usermanagement and find out the primary owner of the account.
    1. Verify that the primary owner is an MSA (Hotmail/Live/Outlook) user and contact them to register for the Microsoft Edge Add-ons program using steps outlined in the section [Enroll in the Microsoft Edge program for Partner Center][DeveloperRegistration].
    1. If your organization does not have an MSA (Hotmail/Live/Outlook) account as a primary owner, which may happen in case your organization has a commercial account on Partner Center, you will need to register for the Microsoft Edge program with an MSA account. Follow the steps mentioned in the [Enroll in the Microsoft Edge program for Partner Center][DeveloperRegistration].

Once the account is set up, continue with Step 2 below to link your Azure AD tenants with this account for extension management.

## Step 2: Associate Azure Active Directory with your account

You can use Azure Active Directory to add and manage additional users in Microsoft Edge Program account. You can add individual users, groups of users, or Azure AD applications. 

### Associate Azure Active Directory with your account

In order to add and manage account users, you must first associate your account with your organization's Azure Active Directory. If your organization already uses Office 365 or other business services from Microsoft, you already have Azure AD. Otherwise, you can create a new Azure AD tenant at no additional charge.

See [Associate Azure Active Directory with your Partner Center account][AssociateAADWithPartnerCenterAccount] for more info. While the topic focuses on the Windows apps developer program, associating a tenant works the same way for the Microsoft Edge Program.

> [!IMPORTANT]
> If you have added users after associating your Azure AD account with your Microsoft account on Partner Center, please note that changing roles or permissions of users is not supported currently. However, you can continue to add as many users as you may require and use the filter option present on [user management][UserManagementPartnerCenter] section to locate admins of specific roles.

## Step 3: Add users, groups, and Azure AD applications to your account.

Once you've set up the Azure AD association, you can add users by going to the Users section under Account settings. Each user will have full access the extensions available in the program. You can also add groups of users and Azure AD applications to grant them access to your Partner Center account. For more info about adding users, see [Add users, groups, and Azure AD applications][AddAADUsersGroups].

## Contact us 

If you need help or assistance with associating your Azure AD account or other related queries, please visit [Contact Microsoft Edge extensions support][ContactEdgeExtensions] to find the relevant support contact for your query.


<!-- links -->

[AssociateAADWithPartnerCenterAccount]: https://docs.microsoft.com/en-us/windows/uwp/publish/associate-azure-ad-with-partner-center

[UserManagementPartnerCenter]: https://partner.microsoft.com/en-us/dashboard/account/v3/usermanagement

[AddAADUsersGroups]: https://docs.microsoft.com/en-us/windows/uwp/publish/add-users-groups-and-azure-ad-applications

[ContactEdgeExtensions]: ./contact-extensions-team.md "Contact Edge Extensions support | Microsoft Docs"

[WindowsCommunityEverythingAboutMicrosoftAccounts]:  https://community.windows.com/stories/everything-you-need-to-know-about-microsoft-accounts "Everything you need to know about Microsoft accounts | Windows Community"

[MicrosoftAccount]:  https://account.microsoft.com/account "Microsoft account"

[DeveloperRegistration]: ./create-dev-account.md "Register as a Microsoft Edge extensions developer | Microsoft Docs"
