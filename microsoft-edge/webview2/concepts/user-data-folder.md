---
title: Manage the user data folder
description: How to manage user data folders in a WebView2 application.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 05/06/2021
---
# Manage the user data folder

WebView2 applications interact with user data folders to store browser data, such as cookies, permissions, and cached resources.  Each instance of a WebView2 control is associated with a user data folder.  Each user data folder is unique to a user.


<!-- ====================================================================== -->
## Best practices

User data folders are created automatically by WebView2.  WebView2 developers control the lifetime of the user data folder.  If your application re-uses user data from application sessions, consider saving the user data folders, otherwise you can delete them.  Consider the following scenarios when deciding how to manage your user data folders:

*  If the same user uses your application repeatedly, and the web content of the application relies on the user's data, save the user data folder.

*  If multiple users use your application repeatedly, create a new user data folder for each new user, and save the user data folder of each user.

*  If your application doesn't have repeat users, create a new user data folder for each user, and delete the previous user data folder.


<!-- ====================================================================== -->
## Create user data folders

To specify the location of the user data folder, include the `userDataFolder` parameter when calling [ICoreWebView2Environment](/microsoft-edge/webview2/reference/win32/icorewebview2environment) (Win32) or [CoreWebView2Environment](/dotnet/api/microsoft.web.webview2.core.corewebview2environment) (.NET).  After creation, browser data from your WebView2 control is stored in a subfolder of `userDataFolder`.

When `userDataFolder` isn't specified, WebView2 creates user data folders at default locations as follows:

*  For packaged Windows Store apps, the default user folder is the `ApplicationData\LocalFolder` subfolder in the package's  folder.

*  For existing desktop apps, the default user data folder is the executable (`exe`) path of your application + `.WebView2`.  Instead of using the default, we recommend that you explicitly specify a user data folder, and that you create it in the same folder where all other app data is stored.


<!-- ====================================================================== -->
## Delete user data folders

Your application might need to delete user data folders, for any of the following reasons:

*  When uninstalling your app.  If you are uninstalling packaged Windows Store apps, Windows deletes user data folders automatically.

*  To clean up all browsing data history.

*  To recover from data corruption.

*  To remove previous session data.

Files in user data folders might still be in use after the WebView2 application is closed.  In this situation, wait for the browser process and all child processes to exit before deleting the folder.  You can retrieve the process ID of the browser process by using the `BrowserProcessId` property of the WebView2.


<!-- ====================================================================== -->
## Share user data folders

WebView2 controls can share the same user data folders, to do the following:

*  Optimize system resources by running in one browser process.  See [The WebView2 process model](../concepts/process-model.md).

*  Share browser history and cached resources.


Consider the following when sharing user data folders:

*  When re-creating WebView2 controls to update browser versions using [add_NewBrowserVersionAvailable](/microsoft-edge/webview2/reference/win32/icorewebview2environment#add_newbrowserversionavailable) (Win32) or [NewBrowserVersionAvailable](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.newbrowserversionavailable) (.NET) events, ensure browser processes exit and close WebView2 controls that share the same user data folder.  To retrieve the process ID of the browser process, use the `BrowserProcessId` property of the WebView2 control.

*  WebView2 controls that share the same user data folder must use the same options for [ICoreWebView2Environment](/microsoft-edge/webview2/reference/win32/icorewebview2environment) (Win32) or [CoreWebView2Environment](/dotnet/api/microsoft.web.webview2.core.corewebview2environment) (.NET).  If not, the WebView2 creation will fail with `HRESULT_FROM_WIN32(ERROR_INVALID_STATE)`.


### Avoid running too many folders at once

To isolate different parts of your application, or when sharing data between WebView2 controls isn't needed, you can use different user data folders.  For example, an application can consist of two WebView2 controls, one for displaying an advertisement and the other for displaying application content.  You can use different user data folders for each WebView2 control.

Each WebView2 browser process consumes additional memory and disk space.  Therefore, avoid running a WebView2 control with too many different user data folders at the same time.
