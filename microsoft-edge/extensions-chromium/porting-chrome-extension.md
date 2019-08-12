---
ms.assetid: c4544a19-de78-4c69-a042-c0415726548f
description: Learn how to create an account for Microsoft Edge Program to Partner center.
title: Porting Chrome extension
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/08/2019
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, extensions development, browser extensions, addons, partner center, developer
---

# Porting Chrome extension to Microsoft Edge

The process of porting a Chrome extension to Microsoft Edge is very straightforward. Extensions written for Chromium will, in most cases, run on Microsoft Edge with minimal changes. The extension APIs and manifest keys supported by Chrome are code-compatible with Microsoft Edge. However, Microsoft Edge doesn’t support these extension APIs: **chrome.gcm, chrome.identity.getAccounts, chrome.identity.getAuthToken, chrome.identity.getProfileUserInfo, chrome.instanceID**.  

**Payments**: Microsoft Edge cannot directly support an extension that uses Chrome Web Store payments (<https://developer.chrome.com/webstore/one_time_payments>) as you’ll have to use identity.getAuthtoken to get the token for signed in user to call the REST based licensing API. Since Microsoft Edge doesn’t support getAuthtoken, this flow would not work.
To port your Chrome extension,  follow these steps:  

1. Review the Chrome extension APIs used in your extensions. If you're using features or APIs that aren't supported by Microsoft Edge, you might not be able to port your extension.

> [!Note]
> getAuthToken API doesn’t work with Microsoft Edge, however you can use launchWebAuthFlow to fetch OAuth2 token to authenticate users.

1. If you are using **“Chrome”** in the name or description of your extension, re-brand the extension for **Microsoft Edge**. It is **mandatory** to pass the certification process
1. To test your extension on Microsoft Edge, turn on Developer mode >  Load unpacked and then select the directory in which your extension files live.
1. If you have any issues, debug your extensions in Microsoft Edge by using F12 Developer Tools, or contact us @ **ExtensionPartnerOps@microsoft.com**.
1. Your extension is now ready to be published on the Microsoft Store!
  
> [!Note]
>If your extension exchanges messages with a native application using chrome.runtime.connectNative API, ensure that you add chrome-extension://[Microsoft-Store-extensionID] as your allowedorigins into the native messaging host manifest file. This enables the app to identify the extension.
