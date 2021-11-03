---
description: Learn how to register a Partner Center developer account to publish extensions to the Microsoft Edge Add-ons website.
title: Register as a Microsoft Edge extension developer
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 08/27/2021
ms.topic: conceptual
ms.prod: microsoft-edge
keywords: microsoft edge, extensions development, browser extensions, add-ons, partner center, developer
---
# Register as a Microsoft Edge extension developer

If you're new to Partner Center, this article will help you create a Partner Center account through which you can submit Microsoft Edge extensions to the [Microsoft Edge Add-ons website](https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home).

If you have a Partner Center account, but the Primary Owner of the account isn't a Microsoft account (MSA), this article will help you create and link a suitable account.  This article will help you create a Microsoft account (MSA) if you don't have one, and will help you link the Microsoft account (MSA) to your Partner Center account.

To add and manage users in the Microsoft Edge program to manage extensions, you can associate your Partner Center account with your organization's Azure Active Directory (Azure AD) tenant.


<!-- ====================================================================== -->
## Types of accounts related to publishing Microsoft Edge extensions

| Type of account | Description |
|---|---|
| _Microsoft account (MSA)_ | An Outlook.com, Live.com, or Hotmail.com account. |
| _GitHub account_ | A user account at GitHub.com.  You can use your personal GitHub account to login to Partner Center—a Microsoft account (MSA) will be created for you. |
| _Partner Center account_, _Partner Center developer account_ | A _Partner Center account_ is an account on partner.microsoft.com.  To submit Microsoft Edge extensions, you need a _Partner Center developer account_, which is a Partner Center account that has a Microsoft account (MSA) as the Primary Owner. |
| _Microsoft Edge Program account_ | Enables multiple users to work with Microsoft Edge extensions at Partner Center. |
| _Azure Active Directory_, _AD account_, _Azure AD_ | An Azure Active Directory account. |
| _Azure Active Directory tenant_, _AAD tenant_ | A _tenant_ represents an organization.  A tenant is a dedicated instance of Azure AD that an organization or app developer receives at the beginning of a relationship with Microsoft. |


<!-- ====================================================================== -->
## Before you begin

To submit an extension to the Microsoft Edge Add-ons website, you must be registered as a developer with the Microsoft Edge program.  You register for the Microsoft Edge program at Partner Center.  To register for the Microsoft Edge program, you need a Microsoft account (MSA).  If you don't have a Microsoft account (MSA), create one.  One way to create a Microsoft account (MSA) is to use your existing GitHub account to log in to Partner Center - dialog boxes help you automatically create a Microsoft account (MSA).

> [!NOTE]
> There is no registration fee for submitting extensions to the Microsoft Edge program.

If you don't have a Partner Center account, or you have a Partner Center account but its Primary Owner isn't a Microsoft account (MSA), you must either:
*  Use an existing Microsoft account (MSA)) to register with the Microsoft Edge program.
*  Create a new Microsoft account (MSA).  A Microsoft account (MSA) is an Outlook.com, Live.com, or Hotmail.com account.

To create a Microsoft account (MSA):

1. Decide if you want to use your existing GitHub account to create a Microsoft account (MSA).  See [Publish Microsoft Edge extensions by using a GitHub account](github.md).

1. If you aren't using your GitHub account to create the Microsoft account (MSA), navigate to [account.microsoft.com](https://account.microsoft.com/account).

1. Select **Create a Microsoft account**.

1. Complete the registration steps.

If you have a Partner Center account for which the Primary Owner is a Microsoft account (MSA), use that a Microsoft account (MSA) to sign into your Partner Center account.  Then enroll in the Microsoft Edge program.

> [!NOTE]
> The Microsoft Edge program does not currently support registering with a work or school account.  You must register using a Microsoft account (MSA) and then link your Azure AD tenants with that account, to be able to manage extensions.


<!-- ====================================================================== -->
## Enroll in the Microsoft Edge program on Partner Center

<!-- 1.  Navigate to the [webpage about Partner Center](https://partner.microsoft.com).  You might see a "Join the Microsoft Partner Network" page with a **Become a partner** button, or a "Welcome back" page with a **Visit Partner Center** button.  Select the **Become a partner** button or the **Visit Partner Center** button. -->

1.  Navigate to the [Partner Center developer login page](https://partner.microsoft.com/dashboard/microsoftedge/public/login?ref=dd), and then select **Partner Center**.

1.  If you have a Microsoft account (MSA), use it to sign into Partner Center.  A Microsoft account (MSA) is an Outlook.com, Live.com, or Hotmail.com account.  Then fill in the Microsoft Edge program registration form, using the table below.

1.  If you don't have a Microsoft account (MSA), either create a new Microsoft account (MSA) directly, or login to Partner Center by using your GitHub account using the next step.  The Partner Center account must have a Primary Owner that's a Microsoft account (MSA).  If you want to login to Partner Center by using your existing personal GitHub account, open the article [Publish Microsoft Edge extensions by using a GitHub account](github.md) in a new tab or window, and follow the steps.  Your GitHub account will be linked to an automatically created Microsoft account (MSA) whose credentials you can use to register for the Microsoft Edge program.

1.  After you sign in, a registration form is displayed, to enroll in the Microsoft Edge program.  Use the following table to help you fill in the registration form.

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
          The Microsoft Edge program in [Partner Center](https://partner.microsoft.com/dashboard/microsoftedge/public/login?ref=dd) offers both individual and company accounts. The accounts are described in detail in the following bullets.  Both account types enable you to publish extensions to the Microsoft Edge Add-ons website.

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

1.  Before submitting your registration form, read and accept the terms and conditions of the [Microsoft Edge Developer Agreement](/legal/windows/agreements/app-developer-agreement).

1.  To complete your enrollment, select **Finish**.


<!-- ====================================================================== -->
## Next steps

To display your verification status, navigate to [Partner Center](https://partner.microsoft.com/dashboard/microsoftedge/public/login?ref=dd) and then select **Account settings**.  Continue to build, test, and prepare your submissions while you wait for the verification process to complete.

*  [Publish an extension](./publish-extension.md)

*  [Extension concepts and architecture](../getting-started/index.md)

*  [Add users to the Microsoft Edge program](./aad-account.md) - Adding additional users to your Microsoft Edge program and your Partner Center developer account.  To enable adding users, you associate your organization's Azure Active Directory account with your Microsoft account (MSA) on Partner Center.


<!-- ====================================================================== -->
## See also

*  [Quickstart: Set up a tenant](/azure/active-directory/develop/quickstart-create-new-tenant) - General information about Azure Active Directory (Azure AD) tenants, in the Active Directory documentation.
