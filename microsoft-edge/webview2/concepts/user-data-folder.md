---
title: Manage the user data folder
description: How to manage user data folders in a WebView2 app.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 02/16/2022
---
# Manage the user data folder

<!--
lexicon:
the "user data folder" is used to store x, y, & z.
The "user data folder location" is where the user data folder is located; its path.
-->

As a WebView2 developer, you need to know about the user data folder for WebView2 apps, including how it's created, how it's used, and how you need to handle it.

WebView2 apps interact with user data folders to store browser data, such as cookies, permissions, and cached resources.  Each instance of a WebView2 control is associated with a user data folder.  Each user data folder is unique to a user.


<!-- ====================================================================== -->
## How to create user data folders

By default, WebView2 creates a user data folder in the default location.  The default location works well for most apps.  If your app has specific needs, you can specify a different location.  Make sure that user data folder location has appropriate read and write permissions for the WebView2 app runtime.

To specify the location of the user data folder, include the `userDataFolder` parameter when calling [ICoreWebView2Environment](/microsoft-edge/webview2/reference/win32/icorewebview2environment) (Win32) or [CoreWebView2Environment](/dotnet/api/microsoft.web.webview2.core.corewebview2environment) (.NET).  After creation, browser data from your WebView2 control is stored in a subfolder of `userDataFolder`.

When `userDataFolder` isn't specified, WebView2 creates user data folders at default locations as follows:

*  For packaged Windows Store apps, the default user folder is the `ApplicationData\LocalFolder` subfolder in the package's folder.

*  For existing desktop apps, the default user data folder is the executable (`exe`) path of your app + `.WebView2`.  Instead of using the default location of the user data folder, we recommend that you explicitly specify its location.  We recommend creating the user data folder in the same folder where all other app data is stored.

*  WinUI 2 & WinUI3: For WinUI 2 & WinUI3, there's no such link; you have to use an environment variable instead: `WEBVIEW2_USER_DATA_FOLDER="\<folder path\>"`.  See [CoreWebView2Environment.UserDataFolder Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.userdatafolder).


<!-- ====================================================================== -->
## Default location of where the user data folder is created

If you don't specify the location where new user data folders will be created, WebView2 will create new user data folders in the default location for the platform:

| Platform | Default location of the user data folder |
|---|---|
| Packaged apps | The platform user data folder. |
| ClickOnce-deployed apps | Under the directory that the app executable (.exe) is running in. |
| Win32 apps | Under the directory that the app executable (.exe) is running in. |

Note: If the app is running from a location that the user doesn't have write access to, the user directory folder won't be able to be created, and you will receive a runtime error during WebView2 startup.


<!-- ====================================================================== -->
## How to specify a custom location for creating user data folders

To specify the location where new user data folders will be created, call the [CoreWebView2Environment.CreateAsync method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createasync), which takes a `userDataFolder` parameter.
<!-- todo: Expand this with sample code for each platform
we have sample for each platform, two lines of code, more durable is point to the sample instead of copying the two lines here.
find .cpp or .cs file near https://github.com/MicrosoftEdge/WebView2Samples/tree/master/SampleApps/WebView2APISample
-->


<!-- ====================================================================== -->
## How to retrieve the location of the working user data folder

To find out what the user data folder location was set to, use the `UserDataFolder` property.  This read-only property returns the user data folder location for the WebView2 app.  See the sample, as an example of reading this property.

The above is true regardless of whether the udf loc was default or by specifying a custom location by calling `CoreWebView2Environment.CreateAsync`.

The following API returns the location of the user data folder, so you can more easily delete the user data folder, by getting the calculated value of the user data folder location.

<!-- C++-style Property -->
*  Win32: [ICoreWebView2Environment7.get_UserDataFolder](/microsoft-edge/webview2/reference/win32/icorewebview2environment7#get_userdatafolder)
<!-- don't need to link to the sample repo, b/c the API Ref contains a sample of calling this method -->

<!-- C#-style Property for these 3 platforms: -->
*  WPF: [CoreWebView2Environment.UserDataFolder property](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.userdatafolder)
<!-- todo: update the page https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2environment.userdatafolder?view=webview2-dotnet-1.0.1108.44 to add an example/sample of reading this property. -->

* .NET: [CoreWebView2Environment.UserDataFolder property](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.userdatafolder)
<!-- same link & comment as above -->

*  WinForms: [CoreWebView2Environment.UserDataFolder property](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.userdatafolder)
<!-- same link & comment as above -->


<!-- ====================================================================== -->
## Error message strings

<!-- this is true whether custom or default -->
If the user data folder doesn't have Write permissions, the following error message strings may be returned:
* `User data folder cannot be created because a file with the same name already exists.`
* `Unable to create user data folder, Access Denied.`

If there's insufficient memory, or the Microsoft Edge runtime is unable to start, or the WebView2 Runtime is not found, error message strings similar to the following may be returned:
*  `Microsoft Edge runtime unable to start`
*  `Failed to create WebView2 environment`

Add code, such as `try/catch` code, to handle these errors.  These errors tend to be fatal errors that you can't recover from, so the `try/catch` will prevent from crashing, so you'll be able to detect the failure and close the app gracefully.  Some errors are unrecoverable, such as `Access Denied` when trying to use a user data folder that you don't have Write permissions to.  Such errors appear in a dialog box.


<!-- ====================================================================== -->
## Best practices for persisting user data folders

User data folders are created automatically by WebView2.  WebView2 developers control the lifetime of the user data folder.  If your app re-uses user data from app sessions, consider saving the user data folders, otherwise you can delete them.

When deciding how to manage your user data folders, consider the following scenarios:

| Scenario | Action |
|---|---|
| If the same user uses your app repeatedly, and the web content of the app relies on the user's data | Don't explicitly delete the user data folder; persist the data. |
| If multiple users use your app repeatedly | Create a new user data folder for each new user, and save the user data folder of each user. |
| If your app doesn't have repeat users | Create a new user data folder for each user, and delete the previous user data folder. |


<!-- ====================================================================== -->
## How to delete user data folders

Your app might need to delete user data folders, for any of the following reasons:

*  When uninstalling your app.  If you are uninstalling packaged Windows Store apps, Windows deletes user data folders automatically.
<!-- todo: find the samles that are doing this, and add links here pointing to those samples as an examptle of how to delete the user data folder by using the APIs (one per platform) that are linked above. -->

*  To clean up all browsing data history.

*  To recover from data corruption.

*  To remove previous session data.

Note this edge case: Files in user data folders might still be in use after the WebView2 app is closed.  In this situation, wait for the browser process and all child processes to exit before deleting the user data folder.  You can retrieve the process ID of the browser process by using the `BrowserProcessId` property of the WebView2 app instance.


<!-- ====================================================================== -->
## How to share user data folders

WebView2 control instances can share the same user data folders, to do the following:

*  Optimize system resources by running in one browser process.  See [The WebView2 process model](../concepts/process-model.md).

*  Share browser history and cached resources.


Consider the following when sharing user data folders:

*  When re-creating WebView2 controls to update browser versions using [add_NewBrowserVersionAvailable](/microsoft-edge/webview2/reference/win32/icorewebview2environment#add_newbrowserversionavailable) (Win32) event handlers or [NewBrowserVersionAvailable](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.newbrowserversionavailable) (.NET) events, ensure browser processes exit and close WebView2 controls that share the same user data folder.  To retrieve the process ID of the browser process, use the `BrowserProcessId` property of the WebView2 control.

*  WebView2 controls that share the same user data folder must use the same options for [ICoreWebView2Environment](/microsoft-edge/webview2/reference/win32/icorewebview2environment) (Win32) or [CoreWebView2Environment](/dotnet/api/microsoft.web.webview2.core.corewebview2environment) (.NET).  If not, the WebView2 creation will fail with the return value `HRESULT_FROM_WIN32(ERROR_INVALID_STATE)`.


### Avoid running too many folders at once

To isolate different parts of your app, or when sharing data between WebView2 controls isn't needed, you can use different user data folders.  For example, an app can consist of two WebView2 controls, one for displaying an advertisement and the other for displaying app content.  You can use different user data folders for each WebView2 control.

Each WebView2 browser process consumes additional memory and disk space.  Therefore, avoid running a WebView2 control with too many different user data folders at the same time.
