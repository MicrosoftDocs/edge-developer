---
description: Learn how to manage user data folders in WebView2 applications
title: WebView2 Handling User Data Folder
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/21/2020
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html, user data folder
---

# Handling the User Data Folder

Each WebView2 instance is associated with a user data folder which stores all browser data, like cookies and network cache. 

## Creation

Specify the user data folder using the **userDataFolder** parameter when creating **CoreWebView2Environment.** WebView2 stores browser data in a subfolder of the specified folder.

When no userDataFolder is specified, WebView2 will use a default user data folder. 

- For packaged Windows Store apps, the default user folder will be the **LocalFolder** sub folder of the package’s **ApplicationData folder.** 
- For legacy desktop apps, the default user data folder is the **exe path + “.WebView2”**. For legacy desktop apps, we highly recommend you specify a user data folder when creating **CoreWebView2Environment.** This folder should be in the same folder all other app data is stored. 

## Deletion

When uninstalled, the application should delete the user data folder. For packaged Windows Store apps, this is done automatically by Windows.

The app could also delete the user data folder to clean up all browsing data, to recover from possible data corruption, or to remove traces of past sessions. 

> [!NOTE]
> Files in the user data folder can still be in use for a short while after WebView2 is closed. In this situation, wait for the associated browser process and all of its child process to exit before retry deleting of the folder. The process id of the browser process can be retrieved as **BrowserProcessId** property of the WebView2.

## Management

All WebView2s associated with the same user data folder will run in the same browser process and share the same browsing history and cache. As a result:

1. When handling the **NewBrowserVersionAvailable** event to recreate WebView2 with the newer browser version, wait for the old browser process to exit and close all WebView2s sharing the same user data folder before recreating WebView2 to run from newer version. The process id of the browser process can be retrieved by **BrowserProcessId** property of the WebView2.

2. WebView2s sharing the same user data folder must use the same options for **CoreWebView2Environment**. If not, the WebView2 creation will fail with `HRESULT_FROM_WIN32(ERROR_INVALID_STATE)`. For example, if the first WebView2 is created by **CoreWebView2Environment** with a certain **AdditionalBrowserArguments**, trying to create WebView2 from **CoreWebView2Environment** with different **AdditionalBrowserArguments** will fail.

3. Applications can use different user data folders to isolate different contexts. WebView2s with different user data folders don’t share data with each other. 

For example, an application may use a different user data folder for hosting ads than for hosting application content. If the application supports different contexts (i.e. Work vs. Home) the app might also use different user data folders for each distinct context. 

> [!NOTE]
> Each WebView2 browser process consumes additional memory and disk space. Therefore, we recommend not running WebView2s with too many different user data folders at the same time. 
