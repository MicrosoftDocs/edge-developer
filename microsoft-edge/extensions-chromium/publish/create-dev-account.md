---
description: Learn how to register to a developer account to publish extensions to Microsoft Edge Add-ons website.
title: Register as a Microsoft Edge extension developer
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 08/27/2021
ms.topic: conceptual
ms.prod: microsoft-edge
keywords: edge-chromium, extensions development, browser extensions, add-ons, partner center, developer
---
# Register as a Microsoft Edge extension developer

If you're new to Partner Center, this article will help you create a Partner Center account <!-- and register as a Microsoft Edge extension developer --> through which you can submit Microsoft Edge extensions to the [Microsoft Edge Add-ons website](https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home).


<!-- ====================================================================== -->
## Types of accounts mentioned

To add and manage users in the Microsoft Edge program to manage extensions, you can now associate your Partner Center account with your organization's Azure Active Directory.

| Type of account | Description |
|---|---|
| _Microsoft account (MSA)_ | An Outlook.com, Live.com, or Hotmail.com account. |
| _GitHub account_ | A user account at GitHub.com.  You can use your GitHub account's login credentials to login to Partner Center—a Microsoft account (MSA) will be created for you. |
| _Partner Center account_ | An account on partner.microsoft.com.  To submit Microsoft Edge extensions, you need a Partner Center account for which the Primary Owner is a Microsoft account (MSA). |
| _Microsoft Edge Program account_ | Enables multiple users to work with Microsoft Edge extensions at Partner Center. |
| _Azure Active Directory_, _AD account_, _Azure AD_ | An Azure Active Directory account. |
| _Azure Active Directory tenant_, _AAD tenant_ | A _tenant_ represents an organization.  A tenant is a dedicated instance of Azure AD that an organization or app developer receives at the beginning of a relationship with Microsoft. |

See also [Everything you need to know about Microsoft accounts][WindowsCommunityEverythingAboutMicrosoftAccounts].


<!-- ====================================================================== -->
## Determining if have a Partner Center account and if its Primary Owner is a Microsoft account (MSA)

<!-- A tenant is needed in the article "Add users to the Microsoft Edge program" (aad-account.md), not in the present article. -->

1. You need a Microsoft account (MSA).  If you don't have a Microsoft account (MSA), create one.  One way to create a Microsoft account (MSA) is to use your existing GitHub account to log in to Partner Center - dialog boxes help you automatically create a Microsoft account (MSA).
1. Use that a Microsoft account (MSA) to login to Partner Center.
1. Register for the Microsoft Edge program, to be able to submit extensions.

<!-- this article has a broader audience than aad-account.md -->

To submit an extension to the Microsoft Edge Add-ons website, you must be registered as a developer with the Microsoft Edge program.  The Microsoft Edge program is located on [Partner Center][MicrosoftPartnerCenter].

> [!NOTE]
> There is no registration fee for submitting extensions to the Microsoft Edge program.


<!-- ====================================================================== -->
## Before you begin

If you don't have a Partner Center account, or you have a Partner Center account but its Primary Owner isn't a Microsoft account (MSA), you must either:
*  Use an existing Microsoft account (MSA)) to register with the Microsoft Edge program.
*  Create a new Microsoft account (MSA).

   A Microsoft account (MSA) is an Outlook.com, Live.com, or Hotmail.com account.

To create a Microsoft account (MSA):

1. Decide if you want to use your existing GitHub account to create a Microsoft account (MSA).  See [Publish add-ons by using your GitHub credentials](github.md).

1. If you aren't using your GitHub account to create the Microsoft account (MSA), navigate to [account.microsoft.com][MicrosoftAccount].

1. Select **Create a Microsoft account**.

1. Complete the registration steps.

If you have a Partner Center account for which the Primary Owner is a Microsoft account (MSA), use that a Microsoft account (MSA) to sign into your Partner Center account.  Then enroll in the Microsoft Edge program.

> [!NOTE]
> The Microsoft Edge program does not currently support registering with a work or school account.  You must register using a Microsoft account (MSA) and then link your Azure AD tenants with that account, to be able to manage extensions.


<!-- ====================================================================== -->
## Enroll in the Microsoft Edge program on Partner Center

1.  Navigate to the [developer page][MicrosoftPartnerCenter].

1.  Select **Partner Center**.

1.  If you have a Microsoft account (MSA), sign into it now.  If not, either create a new Microsoft account (MSA) directly, or login by using your GitHub credentials.  Use the same Microsoft account (MSA) that you use to sign into your Partner Center account (a Partner Center account for which the Primary Owner is a Microsoft account (MSA)).  After you sign in, a registration form is displayed. The following table describes the fields on the registration form.

    1.  If you want to login to Partner Center by using your existing GitHub account, see [Publish add-ons by using your GitHub credentials](github.md).  Your GitHub account will be linked to a Microsoft account whose credentials you can use to register for the Microsoft Edge program.  Use the following table to help you fill-in fields in the registration form.

    To enroll in the Microsoft Edge program, sign in to your Partner Center account and complete the form.
    
    :::row:::
       :::column span="1":::
          **Account country/region**  
       :::column-end:::
       :::column span="2":::
          This field is either where you live or your business is located.  
          
          > [!IMPORTANT]
          > After enrollment, the value of this field is read-only.  
          
       :::column-end:::
    :::row-end:::
    :::row:::
       :::column span="1":::
          **Account type**  
       :::column-end:::
       :::column span="2":::
          The Microsoft Edge program in [Partner Center][MicrosoftPartnerCenter] offers both individual and company accounts. The accounts are described in detail in the following bullets.  Both account types enable you to publish extensions to the Microsoft Edge Add-ons website.  
          
          > [!IMPORTANT]
          > After enrollment, you are not able to change the value of this field.  
          
          *   **Individual account**  
              An individual account is appropriate for a developer not associated with a company. The account verification process is shorter, and involves verifying that the publisher display name is available.  

          *   **Company account**  
              A company account is associated with an organization or business. The account verification process is longer, and involves confirmation that you are authorized to create the account for your company.  The duration of the process can range from a few days to a few weeks.  Your company might receive phone calls from Microsoft verification partners.
              
       :::column-end:::
    :::row-end:::
    :::row:::
       :::column span="1":::
          **Publisher display name**  
       :::column-end:::
       :::column span="2":::
          This field contains the name that's displayed in the Microsoft Edge Add-ons website.  To use a particular name, that name must be available and you must have the rights to use it.  Company accounts must use the registered business name of your organization.  
          
          > [!NOTE]
          > The maximum length for this field is fifty (50) characters.  
          
       :::column-end:::
    :::row-end:::
    :::row:::
       :::column span="1":::
          **Contact details**  
       :::column-end:::
       :::column span="2":::
          This field contains any contact information that Microsoft uses to contact you about any account issues. After registration is complete, you receive an email confirmation. For a company account, you must use the registered email address associated with your organization.  
       :::column-end:::
    :::row-end:::
    :::row:::
       :::column span="1":::
          **Company approver**  
       :::column-end:::
       :::column span="2":::
          For a company account, you must provide the contact information of your company approver.  The contact information includes name, email address, and phone number.  As a part of the verification process, Microsoft contacts the specified company approver, to make sure that your extension belongs to your organization.  
       :::column-end:::
    :::row-end:::
    
1.  Before submitting your registration form, read and accept the terms and conditions of the [Microsoft Edge Developer Agreement][MicrosoftAppDeveloperAgreement].
1.  To complete your enrollment, select **Finish**.


<!-- ====================================================================== -->
## Next steps

To display your verification status, navigate to the [Partner Center][MicrosoftPartnerCenter] and then select **Account settings**.  Continue to build, test, and prepare your submissions while you wait for the verification process to complete.

*  [Publish an extension][ExtensionsChromiumPublishExtension]

*  [Getting started with Microsoft Edge (Chromium) extensions][ExtensionsChromiumGettingStartedIndex]

*  To register for Microsoft Edge program by associating your organization’s Azure Active Directory account with your Microsoft account on Partner Center, navigate to [Add and Manage users][AddandManageUsers].


<!-- ====================================================================== -->
## See also

*  [Everything you need to know about Microsoft accounts][WindowsCommunityEverythingAboutMicrosoftAccounts], at Windows Community.

*  [Quickstart: Set up a tenant](/azure/active-directory/develop/quickstart-create-new-tenant) - General information about Azure Active Directory (Azure AD) tenants, in the Active Directory documentation.


<!-- links -->
[AddandManageUsers]: ./aad-account.md "Add and Manage users | Microsoft Docs"
[ExtensionsChromiumGettingStartedIndex]: ../getting-started/index.md "Getting started with Microsoft Edge (Chromium) extensions | Microsoft Docs"
[ExtensionsChromiumPublishExtension]: ./publish-extension.md "Publish an extension | Microsoft Docs"
[MicrosoftAppDeveloperAgreement]: /legal/windows/agreements/app-developer-agreement "App Developer agreement | Microsoft Docs"
<!-- external links -->
[MicrosoftAccount]: https://account.microsoft.com/account "Microsoft account"
[MicrosoftPartnerCenter]: https://partner.microsoft.com "Partner Center"
<!-- unnecessarily specific version of the above?  https://partner.microsoft.com/dashboard/microsoftedge/public/login?ref=dd -->
[WindowsCommunityEverythingAboutMicrosoftAccounts]: https://community.windows.com/stories/everything-you-need-to-know-about-microsoft-accounts "Everything you need to know about Microsoft accounts | Windows Community"
