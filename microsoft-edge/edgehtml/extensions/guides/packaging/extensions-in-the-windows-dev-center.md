---
description: Learn how to sign up for a Windows Developer account and reserve a name for your Microsoft Edge extension.
title: Extensions in Partner Center
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
ms.custom: seodec18
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# Registering for a Windows Developer account and reserving names in Partner Center  

[!INCLUDE [deprecation-note](../../includes/deprecation-note.md)]  

[Partner Center](https://partner.microsoft.com/dashboard) lets you publish and manage all of your apps for Windows devices. You can sign up for a developer account [here](https://developer.microsoft.com/store/register), and refer to the [opening a developer account documentation](https://docs.microsoft.com/windows/uwp/publish/opening-a-developer-account) for any questions you may have about the sign up process.
> [!NOTE]
> You will need a [Microsoft account](https://login.live.com/) to sign up for a developer account.

### Multi-users organization account management for Microsoft Store  

In a large organization, you may assign different roles to different accounts for managing your Microsoft Edge Extension. You can assign different roles [using Azure Active Directory to manage account users](https://msdn.microsoft.com/windows/uwp/publish/manage-account-users) in your Partner Center account.

For example, you could set up the following structure:
- The engineering team is responsible for creating and uploading the package.
- The marketing team is responsible for the distribution of the extension.
- The creative team is responsible for uploading creative assets and screenshots of the extension.

Each user/group/or Azure AD application is assigned a role that gives them a specific set of permissions to the account.

### Name reservation

Reserving a name is the first step towards getting your extension in the Microsoft Store.
It's recommended that you [reserve the name of your extension](/windows/uwp/publish/create-your-app-by-reserving-a-name) as soon as possible through Partner Center before it gets taken by someone else. You can do this even if you haven't started building your extension yet.

> [!NOTE]
> The name chosen here has to match the name that is specified in the JSON manifest for the extension. 

You can also [reserve additional names to use for your extension](https://msdn.microsoft.com/windows/uwp/publish/manage-app-names), which is especially useful if you are offering the extension in multiple languages and want to use different names for different languages. You can find more information on localization in [Localizing extension packages](./localizing-extension-packages.md).

> [!NOTE]
> Once you've [reached out to us](https://aka.ms/extension-request) and have been approved to have your extension in the Microsoft Store, check out the [app submission checklist](https://docs.microsoft.com/windows/uwp/publish/app-submissions).
