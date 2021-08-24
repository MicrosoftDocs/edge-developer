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

## Step 1: Enroll in the Microsoft Edge program on Partner Center

If you do not have an account and are new to Partner Center, continue to Step **1**. If you have a Partner Center developer account, continue to Step **2**.

1. If you are new to Partner Center and don't have an account, or if you have an existing _commercial_ account with Partner Center (see step **2.c** below), use an MSA account to register with the Microsoft Edge program. Follow the steps at [Register as a Microsoft Edge extensions developer][DeveloperRegistration]. 

1. If you have a developer account registered on Partner Center, use the corresponding Microsoft account (MSA) to sign in to your developer account. Then enroll in the Microsoft Edge program. The Microsoft Edge program on the Partner Center **does not support enrolling directly** with a work or school account. 
    1. **If you are already signed in to Partner Center using your work account**, you need to sign in as a Primary Owner. If you are not the owner, navigate to [User management][UserMGMT] to find the primary owner of the account.
    1. Verify that the primary owner is an MSA (Hotmail/Live/Outlook) user. Ask the account owner to register for the Microsoft Edge Add-ons program using the steps at [Enroll in the Microsoft Edge program for Partner Center][DeveloperRegistration].
    1. If your organization does not have an MSA (Hotmail/Live/Outlook) account as a primary owner, you need to register for the Microsoft Edge program with an MSA account. This happens when your organization has a commercial account on Partner Center. Follow the steps at [Enroll in the Microsoft Edge program for Partner Center][DeveloperRegistration].

Once the account is set up, continue to the next section to link your Azure AD tenants with this account for extension management.

## Step 2: Associate Azure Active Directory with your account

You can use Azure Active Directory to add and manage users in the Microsoft Edge Program account. You can add individual users, groups of users, or Azure AD applications. 

### Associate Azure Active Directory with your account

In order to add and manage account users, you must first associate your account with your organization's Azure Active Directory. If your organization already uses Office 365 or other business services from Microsoft, you already have Azure AD. Otherwise you can create a new Azure AD tenant for free. For more information, navigate to [Associate Azure Active Directory with your Partner Center account | Microsoft Docs][AssociateAzureADPCnew].

Navigate to [Associate Azure Active Directory with your Partner Center account][AssociateAzureADPC] for more information. While the topic focuses on the Windows apps developer program, associating a tenant works the same way for the Microsoft Edge Program.

> [!IMPORTANT]
> If you have added users after associating your Azure AD account with your Microsoft account on Partner Center, note that changing roles or permissions of users is not currently supported. However, you can continue to add as many users as you may require and use the filter option of the [user management][UserManagementPartnerCenter] section to locate admins of specific roles.

## Step 3: Add users, groups, and Azure AD applications to your account

Once you've set up the Azure AD association, on the Partner Center you can add users at **Account settings** > **User management**. Each user has full access to the extensions available in the program. You can also add groups of users and Azure AD applications to grant them access to your Partner Center account. For more information about adding users, see [Add users, groups, and Azure AD applications][AddAzure].

## Contact us 

If you need help or assistance with associating your Azure AD account or other related queries, navigate to [Contact Microsoft Edge extensions support][ContactEdgeExtensions] and find the relevant support contact for your query.


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

[AssociateAzureADPCnew]: /windows/uwp/publish/associate-azure-ad-with-partner-center#create-a-brand-new-azure-ad-to-associate-with-your-partner-center-account "Associate Azure Active Directory with your Partner Center account | Microsoft Docs"

[AddAzure]: /windows/uwp/publish/add-users-groups-and-azure-ad-applications "Add users, groups, and Azure AD applications | Microsoft Docs"

[UserMGMT]: https://partner.microsoft.com/dashboard/account/v3/usermanagement "Microsoft Partner Center | Account settings | User management"
