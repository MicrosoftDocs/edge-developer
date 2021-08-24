---
description: Learn how to register to a developer account to publish extensions to Microsoft Edge Add-ons store
title: Register as a Microsoft Edge extension developer to publish extensions
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/27/2021
ms.topic: conceptual
ms.prod: microsoft-edge
keywords: edge-chromium, extensions development, browser extensions, add-ons, partner center, developer
---
# Register as a Microsoft Edge extension developer  

To submit an extension to the Microsoft Edge Add-ons store, you must be registered as a developer with the Microsoft Edge program.  The Microsoft Edge program is located on [Partner Center][MicrosoftPartnerCenter].  

> [!IMPORTANT]
> There is no registration fee for submitting extensions to the Microsoft Edge program.  

## Before you begin  

If you don't have an account, or if you have an existing _commercial_ account with Partner Center, create a new [Microsoft account (MSA)][WindowsCommunityEverythingAboutMicrosoftAccounts] (or use an existing Microsoft account (MSA)) to register with the Microsoft Edge program.  To create a Microsoft account \(Outlook/live/Hotmail\), complete the following actions.  

1. Navigate to [account.microsoft.com][MicrosoftAccount].  
1. Choose **Create a Microsoft account**.
1. Complete the registration steps.
    
If you have a developer account registered on Partner Center, use the corresponding Microsoft account \(MSA\) to sign into your developer account. Then enroll in the Microsoft Edge program. 

> [!NOTE]
> The Microsoft Edge extensions does not currently support registering with a work or school account. You need to register using an MSA account and then link your Azure AD tenants with that account for extension management. 

## Enroll in the Microsoft Edge program on Partner Center  

1.  Navigate to the [developer page][MicrosoftPartnerCenter] and choose **Partner Center**.  
1.  If you have a Microsoft account, sign into it now.  If not, create a new Microsoft account. Use the same Microsoft account that you use to sign into your developer account.  After you sign in, a registration form is displayed. The following table describes the fields on the registration form.  
    
    To enroll in the Microsoft Edge program, sign in to your account and complete the form.  
    
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
          The Microsoft Edge program in [Partner Center][MicrosoftPartnerCenter] offers both individual and company accounts. The accounts are described in detail in the following bullets.  Both account types enable you to publish extensions to the Microsoft Edge Add-ons store.  
          
          > [!IMPORTANT]
          > After enrollment, you are not able to change the value of this field.  
          
          *   **Individual account**  
              An individual account is appropriate for a developer not associated with a company. The account verification process is shorter, and involves verifying that the publisher display name is available.  

          *   **Company account**  
              A company account is associated with an organization or business. The account verification process is longer, and involves confirmation that you are authorized to create the account for your company.  The duration of the process may range from a few days to a few weeks.  Your company may receive phone calls from Microsoft verification partners.
              
       :::column-end:::
    :::row-end:::  
    :::row:::
       :::column span="1":::
          **Publisher display name**  
       :::column-end:::
       :::column span="2":::
          This field contains the name that displays in the Microsoft Edge Add-ons store. You may use a name only if it's available, and you have the rights to use it.  Company accounts must use the registered business name of your organization.  
          
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
          For a company account, you must provide the contact information of your company approver. The contact information includes name, email address, and phone number. Microsoft contacts the company approver specified as a part of the verification process to ensure your extension belongs to your organization.  
       :::column-end:::
    :::row-end:::  
    
1.  Before submitting your registration form, read and accept the terms and conditions of the [Microsoft Edge Developer Agreement][MicrosoftAppDeveloperAgreement].  
1.  To complete your enrollment, choose **Finish**.  
    
## Next steps  

To display your verification status, navigate to the [Partner Center][MicrosoftPartnerCenter] and choose **Account settings**.  Continue to build, test, and prepare your submissions while you wait for the verification process to complete.

For more information, navigate to [Publish an extension][ExtensionsChromiumPublishExtension].  For information about getting started with extensions, navigate to [Getting started with Microsoft Edge (Chromium) extensions][ExtensionsChromiumGettingStartedIndex]. To register for Microsoft Edge program by associating your organization’s Azure Active Directory account with your Microsoft account on Partner Center, navigate to [Add and Manage users][AddandManageUsers]

<!-- links -->  

[AddandManageUsers]: ./aad-account.md "Add and Manage users | Microsoft Docs"

[ExtensionsChromiumGettingStartedIndex]: ../getting-started/index.md "Getting started with Microsoft Edge (Chromium) extensions | Microsoft Docs"  
[ExtensionsChromiumPublishExtension]:  ./publish-extension.md "Publish an extension | Microsoft Docs"  

[MicrosoftAppDeveloperAgreement]:  /legal/windows/agreements/app-developer-agreement "App Developer agreement | Microsoft Docs"  

[MicrosoftAccount]:  https://account.microsoft.com/account "Microsoft account"  

[MicrosoftPartnerCenter]:  https://partner.microsoft.com/dashboard/microsoftedge/public/login?ref=dd "Partner Center"  

[WindowsCommunityEverythingAboutMicrosoftAccounts]:  https://community.windows.com/stories/everything-you-need-to-know-about-microsoft-accounts "Everything you need to know about Microsoft accounts | Windows Community"  
