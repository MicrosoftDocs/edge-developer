---
description: Learn how to sign up for a Windows Developer account and reserve a name for your Edge extension.
title: Extensions - Extensions in the Window Dev Center - Microsoft Edge Development
author: abbycar
---

# Registering for a Windows Developer account and reserving names in the Windows Dev Center

The Windows Dev Center dashboard lets you publish and manage all of your apps for Windows devices. You can sign up for a developer account [here](https://developer.microsoft.com/en-us/store/register), and refer to the [opening a developer account documentation](https://developer.microsoft.com/en-us/store/register) for any questions you may have about the sign up process.
> [!NOTE]
> You will need a [Microsoft account](https://login.live.com/) to sign up for a developer account.


###	Multi-users organization account management for Windows Store
In a large organization, you may assign different roles to different accounts for managing your Microsoft Edge Extension. You can assign different roles [using Azure Active Directory to manage account users](https://msdn.microsoft.com/en-us/windows/uwp/publish/manage-account-users) in your Dev Center account.

For example, you could set up the following structure:
- The engineering team is responsible for creating and uploading the package.
- The marketing team is responsible for the distribution of the extension.
- The creative team is responsible for uploading creative assets and screenshots of the extension.

Each user/group/or Azure AD application is assigned a role that gives them a specific set of permissions to the account.

###	Name reservation

Reserving a name is the first step towards getting your extension in the Windows Store.
It's recommended that you [reserve the name of your extension](https://msdn.microsoft.com/en-us/windows/uwp/publish/create-your-app-by-reserving-a-name) as soon as possible through the Windows Dev Center dashboard before it gets taken by someone else. You can do this even if you haven’t started building your extension yet.

> [!NOTE]
> The name chosen here has to match the name that is specified in the JSON manifest for the extension. 


You can also [reserve additional names to use for your extension](https://msdn.microsoft.com/en-us/windows/uwp/publish/manage-app-names), which is especially useful if you are offering the extension in multiple languages and want to use different names for different languages. You can find more information on localization in [Localizing extension packages](./localizing-extension-packages.md).
