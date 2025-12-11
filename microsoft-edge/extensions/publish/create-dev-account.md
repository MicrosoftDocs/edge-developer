---
title: Register as a Microsoft Edge extension developer
description: How to register a Partner Center developer account to publish an extension at Microsoft Edge Add-ons.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: extensions
ms.date: 12/11/2025
---
# Register as a Microsoft Edge extension developer
<!-- https://learn.microsoft.com/microsoft-edge/extensions/publish/create-dev-account -->

To submit an extension at Microsoft Edge Add-ons, you must be registered as a developer with the Microsoft Edge program. You can register for the Microsoft Edge program at Partner Center. 

There is no registration fee for submitting extensions to the Microsoft Edge program.

To register for the Microsoft Edge program, you need a Microsoft account (MSA).  This article helps you create a Partner Center account that you can use to submit a Microsoft Edge extension at [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com).  This article covers company accounts (for enterprise developers), and individual accounts (for individual developers), as described in [Account type](#account-type) below.

If you have a Partner Center account, but the Primary Owner of the account isn't a Microsoft account (MSA), this article will help you create and link to a suitable account. You'll learn how to create a Microsoft account (MSA) if you don't have one, and help you link the Microsoft account (MSA) to your Partner Center account.

To add and manage users in the Microsoft Edge program to manage extensions, you can associate your Partner Center account with your organization's Microsoft Entra tenant.

**Detailed contents:**
<!-- https://github.com/captainbrosset/WebToc -->
* [Types of accounts related to publishing Microsoft Edge extensions](#types-of-accounts-related-to-publishing-microsoft-edge-extensions)
* [Create a Microsoft account](#create-a-microsoft-account)
* [Enroll in the Microsoft Edge program on Partner Center](#enroll-in-the-microsoft-edge-program-on-partner-center)
* [Filling in the registration form](#filling-in-the-registration-form)
   * [Account country/region](#account-countryregion)
   * [Account type](#account-type)
      * [Individual account](#individual-account)
      * [Company account](#company-account)
   * [Publisher display name (Company name)](#publisher-display-name-company-name)
   * [Contact info](#contact-info)
* [Resolving Partner Center errors](#resolving-partner-center-errors)
* [If the extension is flagged for malware or PUA](#if-the-extension-is-flagged-for-malware-or-pua)
* [If your verification is delayed](#if-your-verification-is-delayed)
* [Transferring ownership of an extension](#transferring-ownership-of-an-extension)
* [Next steps](#next-steps)
* [See also](#see-also)


<!-- ====================================================================== -->
## Types of accounts related to publishing Microsoft Edge extensions

To publish a Microsoft Edge extension, you need a Partner Center developer account that has a Microsoft account (MSA) as the Primary Owner.

Supported account types:

| Type of account | Description |
|---|---|
| _Microsoft account (MSA)_ | An Outlook.com, Live.com, or Hotmail.com account. |
| _GitHub account_ | A user account at GitHub.com.  You can use your personal GitHub account to sign in to Partner Center — a Microsoft account (MSA) will be created for you. |
| _Partner Center account_, _Partner Center developer account_ | A _Partner Center account_ is an account on partner.microsoft.com.  To submit Microsoft Edge extensions, you need a _Partner Center developer account_, which is a Partner Center account that has a Microsoft account (MSA) as the Primary Owner. |
| _Microsoft Edge Program account_ | Enables multiple users to work with Microsoft Edge extensions at Partner Center. |
| _Microsoft Entra ID_ | A Microsoft Entra ID account; see [What is Microsoft Entra ID?](/entra/fundamentals/whatis) |
| _Microsoft Entra tenant_ | A _tenant_ represents an organization.  A tenant is a dedicated instance of Microsoft Entra ID that an organization or app developer receives at the beginning of a relationship with Microsoft.  See [Quickstart: Set up a Microsoft Entra tenant](/azure/active-directory/develop/quickstart-create-new-tenant).<!-- dest titles --> |


<!-- ====================================================================== -->
## Create a Microsoft account 

To register for the Microsoft Edge program, you need a Microsoft account (MSA).   A _Microsoft account_ (MSA) is an Outlook.com, Live.com, or Hotmail.com account.

If you don't have a Partner Center account, or you have a Partner Center account but its Primary Owner isn't an MSA, you must either:

*  Use an existing MSA to register with the Microsoft Edge program.

*  Create a new MSA.


If you don't have an MSA:

1. Decide if you want to use your existing GitHub account to create an MSA.  See [Register and sign in to Partner Center using a GitHub account](./github.md).

1. If you aren't using your GitHub account to create the MSA, go to [Microsoft account](https://account.microsoft.com/account).

   1. At the bottom of the page, click **Create a Microsoft account**.
   1. Complete the registration steps.

If you have a Partner Center account for which the Primary Owner is an MSA, use that account to sign into your Partner Center account.  Then enroll in the Microsoft Edge program.

The Microsoft Edge program doesn't support registering with a work or school account.  You must register using a Microsoft account (MSA) and then link your Microsoft Entra tenants with that account, to be able to manage extensions.


<!-- ====================================================================== -->
## Enroll in the Microsoft Edge program on Partner Center

To enroll in the Microsoft Edge program on Partner Center:

1. Go to [Partner Center](https://partner.microsoft.com/dashboard/microsoftedge/public/login).

1. If you have an existing Microsoft account (MSA) or you created a new MSA, use it to sign into Partner Center:

   ![Sign in](./create-dev-account-images/sign-in.png)

   The **Microsoft Edge Developer Account Registration** form is displayed.

1. Fill in the registration form; see [Filling in the registration form](#filling-in-the-registration-form), below.

1. Read and accept the terms and conditions of the [Microsoft Store App Developer Agreement](https://go.microsoft.com/fwlink/?linkid=528905).

1. In the registration form, click the **Finish** button.

1. If Partner Center displays errors, see [Resolving Partner Center errors](#resolving-partner-center-errors), below.


<!-- ====================================================================== -->
## Filling in the registration form

Fill in the sections of the **Microsoft Edge Developer Account Registration** form, as follows.


<!-- ------------------------------ -->
#### Account country/region

In the **Account country/region** field, select either where you live, or where your business is located.  **Important:** After enrollment, the value of this field is read-only.

![Country region](./create-dev-account-images/country-region.png)


<!-- ------------------------------ -->
#### Account type

In the **Account type** section, select the **Individual** or **Company** option button.  **Important:** After enrollment, the value of this field can't be changed.

![Account type](./create-dev-account-images/account-type.png)

The Microsoft Edge program in [Partner Center](https://partner.microsoft.com/dashboard/microsoftedge/public/login?ref=dd) offers both individual and company accounts:

Individual and company accounts are described below.  Both account types enable you to publish an extension at [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com).


<!-- ---------- -->
###### Individual account

An individual account is appropriate for a developer who isn't associated with a company.  The account verification process is shorter, and involves verifying that the publisher display name is available.


<!-- ---------- -->
###### Company account

A company account is associated with an organization or business.  The account verification process is longer, and involves confirmation that you're authorized to create the account for your company.  The duration of the process can range from a few days to a few weeks.  Your company might receive phone calls from Microsoft verification partners.

For a company account, it's crucial to verify your Microsoft Edge program information when you enroll into a new Partner Center program.  This verification is needed to publish an extension at [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com).  See [Verify your company account information](./verify-microsoft-edge-program.md).


<!-- ------------------------------ -->
#### Publisher display name (Company name)

In the **Publisher display name (Company name)** field, enter the company name to display at [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com):

![Company name](./create-dev-account-images/company-name.png)

To use a particular name, that name must be available, and you must have the rights to use it.  Company accounts must use the registered business name of your organization.

The maximum length for this field is fifty (50) characters.


<!-- ------------------------------ -->
#### Contact info

The **Contact info** section contains any contact information that Microsoft uses to contact you about any account issues:

![Contact info](./create-dev-account-images/contact-info.png)

For a company account (rather than an individual account), you must provide the contact information of your company approver, in all of the fields in this section.

The **Contact info** section contains the following fields:
* **First name** - For a company account, this must be the company approver name that's associated with your organization.
* **Last name** - For a company account, this must be the company approver name that's associated with your organization.
* **Email address** - For a company account, this must be the registered email address that's associated with your organization.
* **Phone number** - For a company account, this must be the phone number that's associated with your organization.
* **Website**
* **Address line 1**
* **Address line 2**
* **City**
* **State/province**
* **Postal code**
* **Preferred email language**

After registration is complete, you receive a confirmation email.  For a company account, as a part of the verification process, Microsoft contacts the specified company approver, to make sure that the extension belongs to your organization.


After filling in the **Microsoft Edge Developer Account Registration** form, accept the Agreement and then submit the form, per [Filling in the registration form](#filling-in-the-registration-form), above.


<!-- ====================================================================== -->
## Resolving Partner Center errors

After submitting the form, Partner Center might display errors such as:
* **Something went wrong**.
* Undefined correlation IDs.
* UI glitches.

For such errors, try the following fixes:
* Clear the browser cache and cookies.
* Switch to a different browser, such as Microsoft Edge, Google Chrome, or Firefox.
* Try using InPrivate mode in Microsoft Edge, or Incognito mode in Google Chrome.


<!-- ====================================================================== -->
## If the extension is flagged as malware or a potentially unwanted application

If the extension is flagged as malware or a potentially unwanted application (PUA), review [1.2.2 Unwanted and malicious software](/legal/microsoft-edge/extensions/developer-policies#122-unwanted-and-malicious-software) in _Developer policies for the Microsoft Edge Add-ons store_.

Make sure that your extension's code and functionality complies with all requirements and guidelines.  Microsoft does not disclose exact triggers, for security reasons.  


<!-- ====================================================================== -->
## If your verification is delayed

If your company account is stuck in “Pending” or “Action Required” status, try the following fixes.

Ensure that all documents (such as utility bills, DUNS ID, or government records) are:
* Clear, complete, and match your legal business profile.
* Uploaded in the correct section under Account Settings > Legal Info

If your application was rejected: 
* In the **Legal Info** tab, click **Fix now**.
* Re-upload documents with comments explaining your appeal.

Switching from a company to an individual account is not supported.

Add users to the Edge program only after verification is complete.


<!-- ====================================================================== -->
## Transferring ownership of an extension

As an extension developer, you can seamlessly transfer ownership of your Microsoft Edge extension to another party.

Transferring ownership of an extension can be essential for various reasons, such as organizational changes, project handovers, or streamlining management processes.  Your Microsoft Edge extension can continue to thrive under new ownership without any disruptions.

See [Transfer ownership of an extension](../update/transfer-ownership.md).


<!-- ====================================================================== -->
## Next steps

To check your verification status, go to [Partner Center](https://partner.microsoft.com/dashboard/microsoftedge/public/login?ref=dd) and then select **Open Account Settings**:

![Open account settings](./create-dev-account-images/open-account-settings.png)

Continue to build, test, and prepare your submissions while you wait for the verification process to complete.

* [Publish a Microsoft Edge extension](./publish-extension.md)

* [Extension concepts and architecture](../getting-started/index.md)

* [Add users to the Microsoft Edge program](./aad-account.md) - Add more users to your Microsoft Edge program and your Partner Center developer account.  To enable adding users, you associate your organization's Microsoft Entra ID account with your Microsoft account (MSA) on Partner Center.


<!-- ====================================================================== -->
## See also
<!-- all links in article -->

* [Register and sign in to Partner Center using a GitHub account](./github.md)
* [Verify your company account information](./verify-microsoft-edge-program.md)
* [Add users to the Microsoft Edge program](./aad-account.md)
* [Publish a Microsoft Edge extension](./publish-extension.md)
* [Extension concepts and architecture](../getting-started/index.md)

Policies:
* [Developer policies for the Microsoft Edge Add-ons store](/legal/microsoft-edge/extensions/developer-policies)
* [Microsoft Store App Developer Agreement](https://go.microsoft.com/fwlink/?linkid=528905)

Entra:
* [What is Microsoft Entra ID?](/entra/fundamentals/whatis)
* [Quickstart: Set up a Microsoft Entra tenant](/azure/active-directory/develop/quickstart-create-new-tenant)<!-- dest titles -->

Other Microsoft.com sites:
* [Partner Center](https://partner.microsoft.com/dashboard/microsoftedge/public/login?ref=dd)
* [account.microsoft.com](https://account.microsoft.com/account)
* [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com)
