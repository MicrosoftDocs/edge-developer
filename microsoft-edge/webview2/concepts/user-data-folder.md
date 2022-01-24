---
title: Manage the user data folder
description: How to manage the user data folder in a WebView2 application.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html, user data folder
ms.date: 01/21/2022
---
# Manage the user data folder

<!-- 
lexicon:
the "user data folder"
The "UDF" is used to contain x, y, & z data.
The "UDF location" is where the UDF is located; its path.
-->

As a WebView2 developer, you need to know about the user data folder (UDF) for WebView2 apps, including how it's created, how it's used, and how you need to handle it.

WebView2 applications interact with user data folders to store browser data, such as cookies, permissions, and cached resources.  Each instance of a WebView2 control is associated with a user data folder.  Each user data folder is unique to a user.


<!-- ====================================================================== -->
## Default creation location


### UDF location for each platform

Get the UDF location for each platform from the Getting started article for that platform.<!-- correct? if so, extract those here. -->
List of platforms, specifying the default start folder for each platform: [Get started with WebView2](../get-started/get-started.md).


### Runtime flag

There's a Runtime flag.


### Scenarios

This article documents both scenarios:

*  Primarily, this article documents the new way of doing things.  This is the simple scenario and you don't need to know the old vs. new way.

*  Secondarily, this article documents the old way of doing things, in case you have an existing WebView2 app and you want to change the UDF location per the new convention.

The default functionality for UDF location for WebView2 is changing to the new way, but you might need to know what the change was from the old to the new way so that you know how to change your code.   The old way is the exception case; this article focuses on the new, default case.

For a new WebView2 app, you don't have to know about the old way.
The key difference between the old and new ways: think about data cleanup during uninstall.<!--doc that.-->

<!-- as maybe stated elsewhere in this article:
Scenarios for using UDF, in general; not changing:
* Uninstalling the app and you want to clean up the data.
* Deleting the UDF; resetting the WebView2. -->

Cases where the WebView2 runtime doesn't change the default location:

*  If your WebView2 app already specifies the UDF location, the WebView2 Runtime doesn't change the default location.

*  If you don't update your WebView2 SDK, the WebView2 Runtime doesn't change the default location.

*  If you run your WebView2 app before the change<!-- clarify --> and WebView2 created the UDF for you, the WebView2 Runtime uses that UDF location; the WebView2 Runtime doesn't change the default UDF location.


### APIs to retrieve the UDF location

To retrieve the UDF location for an existing WebView2 app, use either of the following API items:

* Existing method: [CoreWebView2Environment.CreateAsync method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createasync) - You can use the `userDataFolder` parameter.
<!-- verbose link, probably don't need:
/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createasync?view=webview2-dotnet-1.0.1072.54#microsoft-web-webview2-core-corewebview2environment-createasync(system-string-system-string-microsoft-web-webview2-core-corewebview2environmentoptions) -->
* New property: [CoreWebView2Environment.UserDataFolder property](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.userdatafolder) - You can use this read-only property to see what the UDF was set to.  This property returns the existing UDF location.
<!-- verbose link, probably don't need:
/dotnet/api/microsoft.web.webview2.core.corewebview2environment.userdatafolder?view=webview2-dotnet-1.0.1072.54
-->


<!-- ====================================================================== -->
## Specifying another location

tbd


<!-- ====================================================================== -->
## Error message strings

<!-- When you do x, -->The following error message strings may be returned:

* "User data folder cannot be created because a file with the same name already exists."
* "Unable to create user data folder, Access Denied."
* "Edge runtime unable to start"
* "Failed to create WebView2 environment"
<!-- show HRESULT? -->

Add code like the following code, such as try/catch code, to handle the error.
<!-- Will there be an error dialog, or an error code? -->

There's a new API to query where the UDF is, so you can more easily delete the UDF, by getting the calculated value of the UDF location.

*  Win32: [ICoreWebView2Environment7.get_UserDataFolder](/microsoft-edge/webview2/reference/win32/icorewebview2environment7?view=webview2-1.0.1054.31#get_userdatafolder)

*  WPF: link tbd

*  WinForms: same as the WPF link.<!--which is __-->

*  WinUI 2 & WinUI3: For WinUI 2 & WinUI3, there's no such link; you have to use an environment variable instead: `WEBVIEW2_USER_DATA_FOLDER="\<folder path\>"`.  See [CoreWebView2Environment.UserDataFolder Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.userdatafolder).
<!-- verbose link, delete?
/dotnet/api/microsoft.web.webview2.core.corewebview2environment.userdatafolder?view=webview2-dotnet-1.0.1083-prerelease -->


<!-- ====================================================================== -->
## Best practices

User data folders are created automatically by WebView2.  WebView2 developers control the lifetime of the user data folder.  If your application re-uses user data from application sessions, consider saving the user data folders, otherwise you may delete them.  Consider the following scenarios when deciding how to manage your user data folders:

*  If the same user uses your application repeatedly, and the web content of the application relies on the user's data, save the user data folder.

*  If multiple users use your application repeatedly, create a new user data folder for each new user, and save the user data folder of each user.

*  If your application doesn't have repeat users, create a new user data folder for each user, and delete the previous user data folder.


<!-- ====================================================================== -->
## Create user data folders

To specify the location of the user data folder, include the `userDataFolder` parameter when calling [ICoreWebView2Environment](/microsoft-edge/webview2/reference/win32/icorewebview2environment) (Win32) or [CoreWebView2Environment](/dotnet/api/microsoft.web.webview2.core.corewebview2environment) (.NET).  After creation, browser data from your WebView2 control is stored in a subfolder of `userDataFolder`.  When `userDataFolder` is not specified, WebView2 creates user data folders at default locations as follows:

*  For packaged Windows Store apps, the default user folder is the `ApplicationData\LocalFolder` subfolder in the package's  folder.

*  For existing desktop apps, the default user data folder is the exe path of your application + `.WebView2`.  Instead of using the default, we recommend that you specify a user data folder, and that you create it in the same folder where all other app data is stored.


<!-- ====================================================================== -->
## Delete user data folders

Your application may need to delete user data folders for the following reasons:

*   When uninstalling your app.  If you are uninstalling packaged Windows Store apps, Windows deletes user data folders automatically. 
<!-- Add how to delete the UDF by using the APIs (one per platform) that are linked above. -->

*   To clean up all browsing data history.

*   To recover from data corruption.

*   To remove previous session data.

Files in user data folders may still be in use after the WebView2 application is closed.  In this situation, wait for the browser process and all child processes to exit before deleting the folder.  You can retrieve the process ID of the browser process by using the `BrowserProcessId` property of the WebView2.


<!-- ====================================================================== -->
## Share user data folders

WebView2 controls can share the same user data folders, to do the following:

*   Optimize system resources by running in one browser process.  See [The WebView2 process model](../concepts/process-model.md).
*   Share browser history and cached resources.

Consider the following when sharing user data folders:

*  When re-creating WebView2 controls to update browser versions using [add_NewBrowserVersionAvailable](/microsoft-edge/webview2/reference/win32/icorewebview2environment#add_newbrowserversionavailable) (Win32) or [NewBrowserVersionAvailable](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.newbrowserversionavailable) (.NET) events, ensure browser processes exit and close WebView2 controls that share the same user data folder.  To retrieve the process ID of the browser process, use the `BrowserProcessId` property of the WebView2 control.

*  WebView2 controls that share the same user data folder must use the same options for [ICoreWebView2Environment](/microsoft-edge/webview2/reference/win32/icorewebview2environment) (Win32) or [CoreWebView2Environment](/dotnet/api/microsoft.web.webview2.core.corewebview2environment) (.NET).  If not, the WebView2 creation will fail with `HRESULT_FROM_WIN32(ERROR_INVALID_STATE)`.

To isolate different parts of your application, or when sharing data between WebView2 controls is not needed, you can use different user data folders.  For example, an application may consist of two WebView2 controls, one for displaying an advertisement and the other for displaying application content.  You can use different user data folders for each WebView2 control.

> [!NOTE]
> Each WebView2 browser process consumes additional memory and disk space.  Therefore, avoid running a WebView2 control with too many different user data folders at the same time.
