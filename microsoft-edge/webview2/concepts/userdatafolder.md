---
description: Learn how to manage user data folders in WebView2 applications
title: Manage user data folder in WebView2 applications.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/02/2020
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html, user data folder
---

# Handling the User Data Folder

WebView2 applications interact with user data folders to store browser data, such as cookies and cached resources. Each instance of a WebView2 control works with a separate user data folder. If your native application comprises of several WebView2 controls, each control may use a separate user data folder.

## Create user data folders

To specify the location of the user data folder, include the `userDataFolder` parameter when calling `CoreWebView2Environment`. After creation, browser data from your WebView2 control is stored in a subfolder of `userDataFolder`. When `userDataFolder` is not specified, WebView2 creates user data folders at default locations as follows:

* For packaged Windows Store apps, the default user folder is the `ApplicationData\LocalFolder` subfolder in the package’s  folder.
- For legacy desktop apps, the default user data folder is the **exe path + “.WebView2”**. For legacy desktop apps, we highly recommend you specify a user data folder when creating **CoreWebView2Environment.** This folder should be in the same folder all other app data is stored. 

## Deletion

When uninstalled, the application should delete the user data folder. For packaged Windows Store apps, this is done automatically by Windows.

The app could also delete the user data folder to clean up all browsing data, to recover from possible data corruption, or to remove traces of past sessions. 

> [!NOTE]
> Files in the user data folder can still be in use for a short while after WebView2 is closed. In this situation, wait for the associated browser process and all of its child process to exit before retry deleting of the folder. The process id of the browser process can be retrieved as **BrowserProcessId** property of the WebView2.

## Share user data folders

WebView2 controls may share the same user data folders to:

* Optimize system resources by running in one browser process.
* Share browser history and cached resources. 

Consider the following when sharing user data folders: 

1. When re-creating WebView2 controls to update browser versions using `NewBrowserVersionAvailable` events, ensure browser processes exit and close WebView2 controls that share the same user data folder. To retrieve the process id of the browser process, use the `BrowserProcessId` property of the WebView2 control.

2. WebView2s sharing the same user data folder must use the same options for **CoreWebView2Environment**. If not, the WebView2 creation will fail with `HRESULT_FROM_WIN32(ERROR_INVALID_STATE)`. For example, if the first WebView2 is created by **CoreWebView2Environment** with a certain **AdditionalBrowserArguments**, trying to create WebView2 from **CoreWebView2Environment** with different **AdditionalBrowserArguments** will fail.

To isolate different parts of your application or when sharing data between WebView2 controls is not needed, you may choose to use different user data folders. For example, an application may consist of two WebView2 controls, one for displaying ads and the other for displaying application content. In this scenario, developers may opt to use different user data folders for each WebView2 control. 

> [!NOTE]
> Each WebView2 browser process consumes additional memory and disk space. Therefore, we recommend not running WebView2s with too many different user data folders at the same time. 
