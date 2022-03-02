---
title: Manage user data folders
description: How to manage user data folders in a WebView2 application.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 02/28/2022
---
# Manage user data folders
<!-- # old title: Manage the user data folder -->

The user data folder (UDF) is a folder stored on users/ local machine.
The UDF stores data related to the app and wv2.

WebView2 creates the UDF in the default location for the platform, or in the custom location that your host app explicitly specifies.

| Term | Definition |
|---|---|
| user data folder | A folder that WebView2 creates to store browser data, such as cookies, permissions, and cached resources. |
| UDF | The user data folder. |
| UDF location | The directory path of the user data folder. |
| default UDF location | The default directory path of the user data folder, where WebView2 creates the UDF if you don't specify a custom UDF location. |
| custom UDF location | The directory path that your host app specifies where WebView2 will create the user data folder. |


<!-- ====================================================================== -->
## What kind of data is stored in the UDF
<!-- ## How the UDF is used -->

| Type of data | Description |
|---|---|
| `AllDomStorage` | DOM storage data, now and future. This browsing data kind is inclusive of `FileSystems`, `IndexedDb`, `WebSql`, `CacheStorage`. |
| `AllProfile` | Profile data that should be wiped to make it look like a new profile. This does not delete account-scoped data like passwords but will remove access to account-scoped data by signing the user out.  All profile data, now and future. New profile data types may be added to this data kind in the future. This browsing data kind includes the data kinds `AllSite`, `DiskCache`, `DownloadHistory`, `GeneralAutofill`, `PasswordAutosave`, `BrowsingHistory`, and `Settings`. |
| `AllSite` | All site data, now and future. This browsing data kind includes the data kinds `AllDomStorage` and `Cookies`. New site data types may be added to this data kind in the future. |
| `BrowsingHistory` | browsing history data. |
| `CacheStorage` | data stored by the CacheStorage DOM API. |
| `Cookies` | HTTP cookies data. |
| `DiskCache` | Disk cache. |
| `DownloadHistory` | Download history data. |
| `FileSystems` | File systems data. |
| `GeneralAutofill` | General autofill form data. This excludes password information and includes information like: names, street and email addresses, phone numbers, and arbitrary input. Includes payment data. |
| `IndexedDb` | Data stored by the IndexedDB DOM feature. |
| `LocalStorage` | Data stored by the localStorage DOM API. |
| `PasswordAutosave` | Password autosave data. |
| `Settings` | Settings data. |
| `WebSql` | Data stored by the Web SQL database DOM API. |

The above types of data are listed as enum members in the [CoreWebView2BrowsingDataKinds Enum](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2browsingdatakinds#fields).


<!-- ====================================================================== -->
## How and when the UDF is created

The UDF is created by WebView2.  It's created in the default location for the platform, or in the custom location that you specify.  You should specify a custom location, to ensure that the location is writeable and so the UDF can be created by WebView2.

Created on startup?  on 1st run of the app?  or when RT is dl'd on machine?

If you re-specify the UDF path, does the app auto'ly change location of the folder (deletes & replaces?)


<!-- ====================================================================== -->
## How many UDFs are there?

Each instance of a WebView2 control is associated with a user data folder.

Each user data folder is unique to a user.

There are multiple partitions of a single folder.  

There is 1 UDF per app.
There is 1 UDF per machine.

<!-- You can create multiple UDFs or. -->

A UDF can be either per user or per app.


<!-- ====================================================================== -->
## Specifying a custom UDF location (Controlling where the user data folder is created)

Each session creates a single UDF.  Your host app can't move the UDF folder; instead, you'd have to shut down WebView2 completely, and then start a new session with a new location for the UDF.

We advise not using the default UDF location.  You should explicitly specify the UDF location.  For non- ClickOnce runtimes, if running UWP (WinUI 2) or win ui3, or clickonce, use the default (it'll do right thing. 

But for .NET or Win32 apps, you should explicitly specify where to create the UDF.  If you don't specify a custom UDF location, the default location can produce a run-time failure, if using installer technologies, because installer technologies put the app and thus the UDF in a protected area of the filesystem, where WebView2 isn't able to create the UDF, and thus UDF creation will usually fail.  WebView2 will throw an error to let your host app know that the UDF can't be created at that location.

By default, WebView2 creates a user data folder in the default location.  The default location works well for most apps.  If your app has specific needs, you can specify a different location.  Make sure that user data folder location has appropriate Read/Write permissions for the WebView2 app runtime.

<!-- move to a plat-specific section or tab?: -->
To specify the location of the user data folder, include the `userDataFolder` parameter when calling [ICoreWebView2Environment](/microsoft-edge/webview2/reference/win32/icorewebview2environment) (Win32) or [CoreWebView2Environment](/dotnet/api/microsoft.web.webview2.core.corewebview2environment) (.NET).  After creation, browser data from your WebView2 control is stored in a subfolder of `userDataFolder`.


<!-- ====================================================================== -->
## 1a. Default UDF location for classic desktop apps (Win32, .NET (WPF & WinForms))
<!-- Win32, .NET, WinForms... -->

Under the directory that the app executable (.exe) is running in.

*  For classic desktop apps (that is, Win32 apps, .NET (WPF apps & WinForms apps)), the default user data folder is the executable (`exe`) path of your app + `.WebView2`, such as: `WebView2APISample.exe.WebView2`.  
For example, if you ran `D:\WebView2App\WebView2.exe`, a UDF folder would be created `D:\WebView2App\WebView2.exe.WebView2`.
   *  Instead of using the default location of the user data folder, we recommend that you explicitly specify its location.
   *  We recommend creating the user data folder in the same folder where all other app data is stored.

The executable (`exe`) path of your app + `.WebView2`.

In the directory that the app executable (.exe) is running in or in a subdirectory of that?
/foo/bar.exe
/foo/udf/
/foo/bar/udf/ <-- is udf "under" the .exe dir?

The default user data folder is 

Instead of using the default location of the user data folder, we recommend that you explicitly specify its location.

We recommend creating the user data folder in the same folder where all other app data is stored.

<!-- ====================================================================== -->
## Permissions of the UDF location

If the app is running from a location that the user doesn't have Write access to, the user directory folder won't be able to be created, and you will receive a runtime error during WebView2 startup.


<!-- ====================================================================== -->
## 1b. Specifying a custom location for the UDF for classic desktop apps (Win32, .NET (WPF & WinForms))

To specify the location where new user data folders will be created, call the [CoreWebView2Environment.CreateAsync method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createasync), which takes a `userDataFolder` parameter.
<!--
todo:
At the present article or at the above API Ref page, add sample code for each platform, showing how to call the CreateAsync method.
We have sample code for each platform (2 lines of code).
The more durable approach is to point to the sample (from the present article and/or from the API Ref page), rather than copying the two lines of code here or into the API Ref page.

Find the platform-appropriate, .cpp or .cs file, near https://github.com/MicrosoftEdge/WebView2Samples/tree/master/SampleApps/WebView2APISample
-->


<!-- ====================================================================== -->
## 1c. Retrieving the location of the user data folder on classic desktop apps (Win32, .NET (WPF & WinForms))

### Retrieving the location of the user data folder

<!-- might apply to all of 1c, 2c, and 3c -->

To find out what the user data folder location was set to, use the `UserDataFolder` property.  This read-only property returns the user data folder location for the WebView2 app.  See the sample, as an example of reading this property.

The above is true regardless of whether the location of the user data folder was the default or a custom location.

The following API returns the location of the user data folder, so you can more easily delete the user data folder, by getting the calculated value of the user data folder location.

### Win32

Win32 uses a C++-style property: see [ICoreWebView2Environment7.get_UserDataFolder](/microsoft-edge/webview2/reference/win32/icorewebview2environment7#get_userdatafolder).  That API Reference page contains example code showing how to read the `UserDataFolder` property.

### WPF, .NET, and WinForms

The following platforms use the following C#-style property:
*  WPF
*  .NET
*  WinForms

For WPF, .NET, and WinForms, see [CoreWebView2Environment.UserDataFolder property](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.userdatafolder).  We plan to add example code to that API Reference page, showing how to read the `UserDataFolder` property.
<!--
todo:
Update the API Ref page
https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2environment.userdatafolder?view=webview2-dotnet-1.0.1108.44
to add sample code showing how to read this property.
-->


<!-- ====================================================================== -->
## 2a. Default UDF location for ClickOnce apps

<!-- "under" too vague.  say "in". -->
In the directory that the app executable (.exe) is running in (or a subdirectory of it).

<!-- * The default location where the UDF will be created will have appropriate permissions at runtime. -->

<!-- ====================================================================== -->
## 2b. Specifying a custom UDF location for ClickOnce apps

To specify the location where new user data folders will be created, call the [CoreWebView2Environment.CreateAsync method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createasync), which takes a `userDataFolder` parameter.
<!--
todo:
At the present article or at the above API Ref page, add sample code for each platform, showing how to call the CreateAsync method.
We have sample code for each platform (2 lines of code).
The more durable approach is to point to the sample (from the present article and/or from the API Ref page), rather than copying the two lines of code here or into the API Ref page.

Find the platform-appropriate, .cpp or .cs file, near https://github.com/MicrosoftEdge/WebView2Samples/tree/master/SampleApps/WebView2APISample
-->


<!-- ====================================================================== -->
## 2c. Retrieving the location of the user data folder on ClickOnce apps




<!-- ====================================================================== -->
## 3a. Default UDF location for WinUI2/UWP apps

<!-- 2/28: -->
*  For WinUI 2 & WinUI 3, we recomm using the default location for the user data folder.  WinUI 2 & WinUI 3 are the two "packaged" platforms; they run in the sandbox and are pkggd to run in the sbox, not usu as separate files but an app bundle). These are per user, and has write access under the installed location.  not like win32 msix pkgg where it's a standalone exe; rather, a sandbox...
 <!--add work item , in the comment thread https://github.com/MicrosoftDocs/edge-developer/pull/1710/files#r810532524  tag PM in PR to validat the above, and the following link(s).  still self-contained (in a way , for depencies, for deploymt (dlls)) tho not pkggd into a single file? -->

<!-- instead of the above approaches, you use the environment variable: `WEBVIEW2_USER_DATA_FOLDER="\<folder path\>"`.  See [CoreWebView2Environment.UserDataFolder Property](http://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2environment.userdatafolder). -->
<!-- link to winRT not .net -->

<!-- * [CoreWebView2Environment.UserDataFolder](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment?view=webview2-winrt-1.0.1108.44#userdatafolder) -->

*  For packaged apps (such as UWP & WinUI 2<!-- and maybe WinUI 3: todo: investigate-->), the default user folder is the `ApplicationData\LocalFolder` subfolder in the package's folder.

The platform user data folder, which is the `ApplicationData\LocalFolder` subfolder in the package's folder.

Package > package's folder > `ApplicationData\LocalFolder` subfolder (the platform user data folder)

The UDF will be created in the directory (or subdirectory) where the `.exe` is - but an exception is UWP, in which case the `.exe` is in a protected location that the installer can write to.  But at run time, your host app is given access to the local folder - but only during the session, so you can create the folder there.  WebView2 checks for that runtime, and creates the UDF in the writeable place.


### WinUI 3

Regarding WinUI 3, tbd.

### Click-Once

Click-Once is special case: at run time, Click-Once automatically installs your host app in a location that WebView2 has Write permission for.  At the end of the session, automatically cleans up.  So Click-Once is a classc app, but it has run-time handling that's more simlar to UWP; when you create the Click-Once app, Click-Once is a deployment method for lightweight transient apps; it's a hybrid model.  It's possible to persist a Click-Once app, but that's not standard, typical practice.  See MSDN regarding Click-Once apps.

The *default* is same, its a writeable location.  what's inside the clickonce app is usu a .net app.

Click-Once can use the default UDF location and guarantee that WebView2 has Write permissions to be able to create the UDF there.  But your host app might not be able to use that location to Write data to.


<!-- ====================================================================== -->
## 3b. Specifying a custom UDF location for WinUI2/UWP apps

To specify the location where new user data folders will be created, call the [CoreWebView2Environment.CreateAsync method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createasync), which takes a `userDataFolder` parameter.
<!--
todo:
At the present article or at the above API Ref page, add sample code for each platform, showing how to call the CreateAsync method.
We have sample code for each platform (2 lines of code).
The more durable approach is to point to the sample (from the present article and/or from the API Ref page), rather than copying the two lines of code here or into the API Ref page.

Find the platform-appropriate, .cpp or .cs file, near https://github.com/MicrosoftEdge/WebView2Samples/tree/master/SampleApps/WebView2APISample
-->


<!-- ====================================================================== -->
## 3c. Retrieving the location of the user data folder on WinUI2/UWP apps


<!-- ====================================================================== -->
## Clearing space in the UDF

How your app clears needs to handlethe UDF is created, how it's used, and how you need to handle it.

WebView2 apps use user data folders to store browser data, such as cookies, permissions, and cached resources.
*  Each instance of a WebView2 control is associated with a user data folder.
*  Each user data folder is unique to a user.


<!-- ====================================================================== -->
## Creating user data folders

By default, WebView2 creates a user data folder in the [default location](#default-location-of-where-the-user-data-folder-is-created), which works well for most apps.  If your app has specific needs, you can specify a different location.  Make sure that user data folder location has appropriate Read/Write permissions for the WebView2 app runtime.

To specify the location of the user data folder, include the `userDataFolder` parameter when calling [ICoreWebView2Environment](/microsoft-edge/webview2/reference/win32/icorewebview2environment) (Win32) or [CoreWebView2Environment](/dotnet/api/microsoft.web.webview2.core.corewebview2environment) (.NET).  After creation, browser data from your WebView2 control is stored in a subfolder of `userDataFolder`.

When `userDataFolder` isn't specified, WebView2 creates user data folders at default locations as follows:

*  For WinUI 2 & WinUI3, instead of the above approaches, you use the environment variable: `WEBVIEW2_USER_DATA_FOLDER="\<folder path\>"`.  See [CoreWebView2Environment.UserDataFolder Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.userdatafolder).


<!-- ====================================================================== -->
## Specifying a custom location for creating user data folders

To specify the location where new user data folders will be created, call the [CoreWebView2Environment.CreateAsync method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createasync), which takes a `userDataFolder` parameter.
<!--
todo:
At the present article or at the above API Ref page, add sample code for each platform, showing how to call the CreateAsync method.
We have sample code for each platform (2 lines of code).
The more durable approach is to point to the sample (from the present article and/or from the API Ref page), rather than copying the two lines of code here or into the API Ref page.

Find the platform-appropriate, .cpp or .cs file, near https://github.com/MicrosoftEdge/WebView2Samples/tree/master/SampleApps/WebView2APISample
-->





<!-- ====================================================================== -->
## Handling error messages

If the user data folder doesn't have Write permissions, the following error message strings may be returned:
* `User data folder cannot be created because a file with the same name already exists.`
* `Unable to create user data folder, Access Denied.`

The above is true regardless of whether the location of the user data folder was the default or a custom location.

If there's insufficient memory, or the Microsoft Edge runtime is unable to start, or the WebView2 Runtime is not found, error message strings similar to the following may be returned:
*  `Microsoft Edge runtime unable to start`
*  `Failed to create WebView2 environment`

Add code, such as `try/catch` code, to handle these errors.  These errors tend to be fatal errors that you can't recover from, so `try/catch` will prevent the app from crashing.  You'll then be able to detect the failure and close the app gracefully.  Some errors are unrecoverable, such as `Access Denied` when trying to use a user data folder that you don't have Write permissions to.

Error message strings are displayed in a dialog box.


<!-- ====================================================================== -->
## Whether to persist user data folders in various scenarios

When deciding how to manage your user data folders, consider the following scenarios:

User data folders are created automatically by WebView2.  Your host app controls the lifetime of the user data folder.  If your app re-uses user data from app sessions, consider saving the user data folders.  Otherwise, you can delete them - but while a session is running, it's better to call the clear browsing data methods instead of deleting the UDF.

*  Instead of deleting the user data folder, clear browsing data from the user data folder.  For example, clear user data and history when a user signs out.  See [clear browsing data from the user data folder](clear-browsing-data.md).


<!-- ====================================================================== -->
## Persisting user data folders if same user uses your app repeatedly, and the web content of the app relies on the user's data

In this scenario, don't explicitly delete the user data folder; persist the data.

<!-- ====================================================================== -->
## Persisting user data folders if multiple users use your app repeatedly

In this scenario, create a new user data folder for each new user, and save the user data folder of each user.

Create a new user data folder for each new user.  Create UDF per session.  if mult sesions, create multiple UDFs.  Usually if the host app has more than one WebViwe2 control instance, the app can point all instances of WebView2 to the same UDF.  Each app that has a WebView2 control instance will have its own UDF.  Your app can have each UDF point to the same place.  

If your host app is for multiple users, you should probably create one UDF per user.

If your host app launches two copies of the same `.exe` on the same machine, both sessions should use the same UDF.  And save the user data folder (UDF is only automatically removed in the Click-Once application model.

If you create the host application and create an MSIX installer, install the application, and run it, it creates the UDF, but then if you uninstall the application, that won't auto-clean up the UDF (because the uninstaller protects and preserves the user data), so your uninstall process needs to be aware of that consideration.  

That's a standard uninstalling process, not something that's unique to WebView2.  In Click-Once apps, it installess in a single location, and when the session ends, it deletes the entire tree, so the UDF is automatically deleted - that's because of how Click-Once works, not because of how WebView2 works.


<!-- ====================================================================== -->
## Persisting user data folders if your app doesn't have repeat users

In this scenario, create a new user data folder for each user, and delete the previous user data folder.


<!-- ====================================================================== -->
## When to save the UDF


<!-- ====================================================================== -->
## Deleting user data folders

Your app might need to delete user data folders, for any of the following reasons:

*  When uninstalling your app.  If you are uninstalling packaged Windows Store apps, Windows deletes user data folders automatically.
<!--
todo:
Link to the samples that demonstrate deleting user data folders in response to the app being uninstalled.
The samples delete the user data folder by using the platform-appropriate API, listed above.
-->

*  To clean up all browsing data history.

*  To recover from data corruption.

*  To remove previous session data.

### Wait for browser processes to exit before deleting the UDF

If files are still in use after app closes, wait for browser processes to exit before deleting the user data folder.

Files in user data folders might still be in use after the WebView2 app is closed.  In this situation, wait for the browser process and all child processes to exit before deleting the user data folder.  To monitor processes to wait for them to exit, retrieve the process ID of the browser process by using the `BrowserProcessId` property of the WebView2 app instance.


<!-- ====================================================================== -->
## Sharing user data folders

WebView2 control instances can share the same user data folders, to do the following:

*  Optimize system resources by running in one browser process.  See [Process model for WebView2 apps](../concepts/process-model.md).

*  Share browser history and cached resources.


Consider the following when sharing user data folders:

*  When re-creating WebView2 controls to update browser versions using [add_NewBrowserVersionAvailable](/microsoft-edge/webview2/reference/win32/icorewebview2environment#add_newbrowserversionavailable) (Win32) event handlers or [NewBrowserVersionAvailable](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.newbrowserversionavailable) (.NET) events, ensure browser processes exit and close WebView2 controls that share the same user data folder.  To retrieve the process ID of the browser process, use the `BrowserProcessId` property of the WebView2 control.

*  WebView2 controls that share the same user data folder must use the same options for [ICoreWebView2Environment](/microsoft-edge/webview2/reference/win32/icorewebview2environment) (Win32) or [CoreWebView2Environment](/dotnet/api/microsoft.web.webview2.core.corewebview2environment) (.NET).  If not, the WebView2 creation will fail with the return value `HRESULT_FROM_WIN32(ERROR_INVALID_STATE)`.


<!-- ====================================================================== -->
## Avoid running too many folders at once

To isolate different parts of your app, or when sharing data between WebView2 controls isn't needed, you can use different user data folders.  For example, an app can consist of two WebView2 controls, one for displaying an advertisement and the other for displaying app content.  You can use different user data folders for each WebView2 control.

Each WebView2 browser process consumes additional memory and disk space.  Therefore, avoid running a WebView2 control with too many different user data folders at the same time.


<!-- ====================================================================== -->
## See also

* [Clear browsing data from the user data folder](clear-browsing-data.md)
* [Package and deploy](/windows/apps/package-and-deploy/) in _Windows App Development_ docs (Build desktop apps for Windows).

<!-- clickable: https://docs.microsoft.com/windows/apps/package-and-deploy/ -->
