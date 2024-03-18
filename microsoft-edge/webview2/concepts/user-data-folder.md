---
title: Manage user data folders
description: How to manage user data folders in a WebView2 host app.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 08/31/2022
---
# Manage user data folders
<!-- # old title: Manage the user data folder -->

The user data folder (UDF) is a folder stored on the user's machine, that contains data related to the host app and WebView2.  WebView2 apps use user data folders to store browser data, such as cookies, permissions, and cached resources.


**Terminology:**

| Term | Definition |
|---|---|
| _user data folder_ | A folder that WebView2 creates to store browser data, such as cookies, permissions, and cached resources. |
| _UDF_ | The user data folder. |
| _UDF location_ | The directory path of the user data folder. |
| _default UDF location_ | The default directory path of the user data folder.  The directory path where WebView2 creates the UDF if you don't specify a custom UDF location. |
| _custom UDF location_ | A custom location for the user data folder.  The directory path that your WebView2 host app specifies where WebView2 will create the user data folder. |

WebView2 creates the UDF in the default location for the platform, or in the custom UDF location that your host app explicitly specifies.

By default, WebView2 creates a UDF in the default location for the particular platform.  This works well on some platforms, but not others.  If your app has specific needs, you can specify a custom UDF location.

#### Suitable custom UDF locations

If you specify a custom UDF location, it should meet the following requirements:

* The custom UDF location must have appropriate Read/Write permissions for the WebView2 app runtime.

* Avoid storing user settings on a network drive. This can result in slowdowns, crashes, or loss of data.


<!-- ====================================================================== -->
## What kind of data is stored in the UDF

WebView2 apps use user data folders (UDFs) to store browser data, such as cookies, permissions, and cached resources.

| Type of data | Description |
|---|---|
| `AllDomStorage` | DOM storage data, now and future. This browsing data kind is inclusive of `FileSystems`, `IndexedDb`, `WebSql`, `CacheStorage`. |
| `AllProfile` | Profile data that should be wiped to make it look like a new profile. This does not delete account-scoped data like passwords but will remove access to account-scoped data by signing the user out.  All profile data, now and future. New profile data types may be added to this data kind in the future. This browsing data kind includes the data kinds `AllSite`, `DiskCache`, `DownloadHistory`, `GeneralAutofill`, `PasswordAutosave`, `BrowsingHistory`, and `Settings`. |
| `AllSite` | All site data, now and future. This browsing data kind includes the data kinds `AllDomStorage` and `Cookies`. New site data types may be added to this data kind in the future. |
| `BrowsingHistory` | Browsing history data. |
| `CacheStorage` | Data stored by the CacheStorage DOM API. |
| `Cookies` | HTTP cookies data. |
| `DiskCache` | Disk cache. |
| `DownloadHistory` | Download history data. |
| `FileSystems` | File systems data. |
| `GeneralAutofill` | General autofill form data. This excludes password information and includes information such as names, street and email addresses, phone numbers, and arbitrary input. Includes payment data. |
| `IndexedDb` | Data stored by the IndexedDB DOM feature. |
| `LocalStorage` | Data stored by the localStorage DOM API. |
| `PasswordAutosave` | Password autosave data. |
| `Settings` | Settings data. |
| `WebSql` | Data stored by the Web SQL database DOM API. |

The above types of data are listed as enum members in the [CoreWebView2BrowsingDataKinds Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2browsingdatakinds#fields).


<!-- ====================================================================== -->
## How and when the UDF is created

The user data folder (UDF) is created for your WebView2 host app by the WebView2 control.

The UDF is created in the default UDF location for the platform, or if your host app specifies a custom UDF location, the UDF is created in the custom UDF location.

The UDF is created on startup of the WebView2 host app, if the UDF doesn't exist.


<!-- ====================================================================== -->
## How many UDFs are created?

Each instance of a WebView2 control is associated with a user data folder (UDF).

Each WebView2 session must have a UDF.  There's only 1 active UDF per WebView2 session.

There is at least one UDF per app WebView2 session.  It's possible for your host app to overlap them, by specifying a custom UDF location.
Or, you can have one UDF per machine.  This depends on how your host app configs the UDF.

A UDF can be either per user, if the app was installed per-user.
If the host app is installed per-user, each UDF is unique to a user, if not otherwise specified.


<!-- ====================================================================== -->
## How to move the UDF

To move a user data folder (UDF):

1. Shut down all WebView2 sessions.

1. Start a new WebView2 host app session, specifying a new custom UDF location.


<!-- ====================================================================== -->
## The default UDF location

The default user data folder (UDF) location varies per platform.


<!-- ====================================================================== -->
<!-- default UDF location -->

# [Win32](#tab/win32)

<!--
**What is the default UDF location?**
-->
On this platform, the default UDF location is the directory that the app executable (`.exe`) is running in.  The default UDF is the executable (`exe`) path of your app + `.WebView2`.  The file name of the UDF is the executable (`exe`) path of your app + `.WebView2`.

For example, if you ran `D:\WebView2App\WebView2.exe`, a UDF folder would be created: `D:\WebView2App\WebView2.exe.WebView2\`.  As another example: `WebView2APISample.exe.WebView2\`.


**Should you use default or custom UDF location?**

In most cases, you should specify a custom UDF location, rather than using the default UDF location.  This ensures that the WebView2 control has Write access so that the WebView2 control is able to create the UDF and then write to it.  See the section "Specifying a custom UDF location" below.


**Packaging:**

Win32 MSIX packaging is a standalone `.exe`.


<!-- ====================================================================== -->
<!-- default UDF location -->

# [.NET (WPF/WinForms)](#tab/dotnet)

<!--
**What is the default UDF location?**
-->
On this platform, the default UDF location is the directory that the app executable (`.exe`) is running in.  The default UDF is the executable (`exe`) path of your app + `.WebView2`.  The file name of the UDF is the executable (`exe`) path of your app + `.WebView2`.

For example, if you ran `D:\WebView2App\WebView2.exe`, a UDF folder would be created: `D:\WebView2App\WebView2.exe.WebView2\`.  As another example: `WebView2APISample.exe.WebView2\`.


**Should you use default or custom UDF location?**

In most cases, you should specify a custom UDF location, rather than using the default UDF location.  This ensures that the WebView2 control has Write access so that the WebView2 control is able to create the UDF and then write to it.  See the section "Specifying a custom UDF location" below.



<!-- ====================================================================== -->
<!-- default UDF location -->

# [ClickOnce](#tab/clickonce)

<!--
**What is the default UDF location?**
-->
On this platform, the default UDF location is the directory that the app executable (`.exe`) is running in (or a subdirectory of it).


**Should you use default or custom UDF location?**

In most cases, you should use the default UDF location.  The default location where the UDF will be created will have appropriate permissions at runtime; the default UDF location is a writeable location.


**Why the default location is writeable:**

At run time, ClickOnce automatically installs your host app in a location that WebView2 has Write permission for.  ClickOnce can use the default UDF location and guarantee that WebView2 has Write permissions to be able to create the UDF there.

However, your host app might not be able to use that location to write data to.  If your host app can't write to the default UDF location, see the section "Specifying a custom UDF location" below.


**Cleanup:**

At the end of the session, ClickOnce automatically cleans up.  


**Packaging:**

ClickOnce is a deployment method for lightweight transient apps; it's a hybrid model.  It's possible to persist a ClickOnce app, but that's not standard, typical practice.  


**What type of platform app a ClickOnce app wraps:**

A ClickOnce app usually contains a .NET app.


<!-- ====================================================================== -->
<!-- default UDF location -->

# [WinUI 2 (UWP)](#tab/uwp)

<!--
**What is the default UDF location?**
-->
On this platform, the default UDF location is the `ApplicationData\LocalFolder` subfolder in the package's folder.


**Should you use default or custom UDF location?**

On this platform, use the default UDF location.


**Why the default location is writeable:**

WinUI 2 (UWP) is a packaged platform; it runs in the sandbox and is packaged to run in the sandbox, not usually as separate files, but as an app bundle.

A WinUI 2 (UWP) app is per-user, and has Write access under the installed location.

For UWP, the `.exe` is in a protected location that the installer can write to.

At run time, during the session only, your WebView2 host app is given access to the local folder, so the WebView2 control is able to create the UDF there and write to it.

WebView2 checks for that runtime, and creates the UDF in that writeable location.


**Packaging:**

A WinUI 2 (UWP) app is self-contained regarding dependencies and for deployment (DLLs), although it's not packaged into a single file.

A WinUI 2 (UWP) app is per-user, and has Write access under the installed location.


<!-- ====================================================================== -->
<!-- default UDF location -->

# [WinUI 3](#tab/winui3)

<!--
**What is the default UDF location?**
-->
On this platform, the default UDF location is the `ApplicationData\LocalFolder` subfolder in the package's folder.


**Should you use default or custom UDF location?**

On this platform, use the default UDF location.


**Packaging:**

WinUI 3 is a "packaged" platform; it runs in the sandbox and is packaged to run in the sandbox, not usually as separate files, but as an app bundle.

---

<!-- end of "default location" tab-set -->


<!-- ====================================================================== -->
## Specifying a custom UDF location

How to specify a custom user data folder (UDF) location varies per platform.


<!-- ====================================================================== -->
<!-- custom UDF location -->

# [Win32](#tab/win32)

<!--
**Should you use default or custom UDF location?**
-->
On this platform, in most cases, you should specify a custom UDF location, rather than using the default UDF location.  This ensures that the WebView2 control has Write access so that the WebView2 control is able to create the UDF and then write to it.

You should specify the same folder where all other app data is stored.


**How to specify a custom UDF location:**

Use [ICoreWebView2Environment](/microsoft-edge/webview2/reference/win32/icorewebview2environment) and the `userDataFolder` parameter.  But use the code below, which is from the `WebView2Samples` repo.<!-- this api ref contains incorrect content but use the code listing below -->


**Example code:**

```cpp
std::wstring m_userDataFolder;
m_userDataFolder = L"C:\\MyAppUserDataFolder";
auto options = Microsoft::WRL::Make<CoreWebView2ExperimentalEnvironmentOptions>();

HRESULT hr = CreateCoreWebView2EnvironmentWithOptions(
    NULL, m_userDataFolder.c_str(), options.Get(),
    Callback<ICoreWebView2CreateCoreWebView2EnvironmentCompletedHandler>(
        this, &AppWindow::OnCreateEnvironmentCompleted)
        .Get());
```

For example code, see the Win32-appropriate, `.cpp` or `.cs` file, near [WebView2Samples repo > WebView2APISample](https://github.com/MicrosoftEdge/WebView2Samples/tree/main/SampleApps/WebView2APISample).


<!-- neither specific to custom nor default -->
**Where browser data gets stored within the UDF:**

After creation of the session and UDF, browser data from your WebView2 control is stored in a subfolder of `userDataFolder`.


**Why you should use a custom UDF location on this platform:**

If you don't specify a custom UDF location, the default location can produce a run-time failure, if using installer technologies, because installer technologies put the app and thus the UDF in a protected area of the filesystem, where WebView2 isn't able to create the UDF, and thus UDF creation will usually fail.  WebView2 will throw an error to let your host app know that the UDF can't be created at that location.

If the host app is running from a location that the user doesn't have Write access to, WebView2 isn't able to create the UDF, and you will receive a runtime error during WebView2 startup.



<!-- ====================================================================== -->
<!-- custom UDF location -->

# [.NET (WPF/WinForms)](#tab/dotnet)

<!--
**Should you use default or custom UDF location?**
-->
On this platform, in most cases, you should specify a custom UDF location, rather than using the default UDF location.  This ensures that the WebView2 control has Write access so that the WebView2 control is able to create the UDF and then write to it.


**How to specify a custom UDF location:**

You should specify the same folder where all other app data is stored.

Use the [CoreWebView2Environment.CreateAsync method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createasync), passing a `userDataFolder` parameter.


**Example code:**

```csharp
string UserDataFolder;
UserDataFolder = "C:\\MyAppUserDataFolder";
_task = CoreWebView2Environment.CreateAsync(BrowserExecutableFolder, 
                                            UserDataFolder, 
                                            new CoreWebView2EnvironmentOptions(null, Language, null));
```

For example code, see the .NET (WPF & WinForms)-appropriate, .cpp or .cs file, near [WebView2Samples repo > WebView2WpfBrowser](https://github.com/MicrosoftEdge/WebView2Samples/tree/main/SampleApps/WebView2WpfBrowser).


**Why you need to specify a custom UDF on this platform:**

If you don't specify a custom UDF location, the default location can produce a run-time failure, if using installer technologies.  This is because installer technologies put the app and thus the UDF in a protected area of the filesystem, where WebView2 isn't able to create the UDF, and thus UDF creation will usually fail.

WebView2 will throw an error to let your host app know that the UDF can't be created at that location.


<!-- neither focused on default nor custom -->
**Where data is stored within the UDF:**
After creation of the session and UDF, browser data from your WebView2 control is stored in a subfolder of `userDataFolder`.


<!-- ====================================================================== -->
<!-- custom UDF location -->

# [ClickOnce](#tab/clickonce)

<!--
**Should you use default or custom UDF location?**
-->
On this platform, in most cases, you should use the default UDF location.

If you specify a custom UDF location, make sure that user data folder location has appropriate Read/Write permissions for the WebView2 app runtime.


**How to specify a custom UDF location:**

Use the [CoreWebView2Environment.CreateAsync method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createasync), passing a `userDataFolder` parameter.

You should specify the same folder where all other app data is stored.


**Example code:**

```csharp
string UserDataFolder;
UserDataFolder = "C:\\MyAppUserDataFolder";
_task = CoreWebView2Environment.CreateAsync(BrowserExecutableFolder, 
                                            UserDataFolder, 
                                            new CoreWebView2EnvironmentOptions(null, Language, null));
```

For example code, see the .NET (WPF & WinForms)-appropriate, .cpp or .cs file, near [WebView2Samples repo > WebView2WpfBrowser](https://github.com/MicrosoftEdge/WebView2Samples/tree/main/SampleApps/WebView2WpfBrowser).


<!-- neither specific to custom nor default -->
**Where browser data gets stored within the UDF:**

After creation of the session and UDF, browser data from your WebView2 control is stored in a subfolder of `userDataFolder`.


<!-- ====================================================================== -->
<!-- custom UDF location -->

# [WinUI 2 (UWP)](#tab/uwp)

<!--
**Should you use default or custom UDF location?**
-->
On this platform, use the default UDF location.


**Where browser data gets stored within the UDF:**

After creation of the session and UDF, browser data from your WebView2 control is stored in a subfolder of `userDataFolder`.


**Example code:**

For example code, see the WinUI 2 (UWP) `.cs` file, at [WebView2Samples repo > webview2_sample_uwp](https://github.com/MicrosoftEdge/WebView2Samples/tree/main/SampleApps/webview2_sample_uwp).



<!-- ====================================================================== -->
<!-- custom UDF location -->

# [WinUI 3](#tab/winui3)

<!--
**Should you use default or custom UDF location?**
-->
On this platform, use the default UDF location.


**Example code:**

For example code, see the WinUI 3 `.cs` file, at [WebView2Samples repo > WebView2_WinUI3_Sample](https://github.com/MicrosoftEdge/WebView2Samples/tree/main/GettingStartedGuides/WinUI3_GettingStarted).


**Where browser data gets stored within the UDF:**

After creation of the session and UDF, browser data from your WebView2 control is stored in a subfolder of `userDataFolder`.


---

<!-- end of "custom UDF location" tab-set -->


<!-- ====================================================================== -->
## Retrieving the UDF location

To find out what the user data folder (UDF) location was set to, use the `UserDataFolder` property.  This read-only property returns the UDF location for the WebView2 app.

Reasons you might want to read the UDF location:

*  If you want to clear browsing data from the UDF folder, such as at the end of a session.

*  If you want to delete the UDF.


<!-- ====================================================================== -->
<!-- retrieving UDF location -->

# [Win32](#tab/win32)

Use the Win32 [ICoreWebView2Environment7.get_UserDataFolder property getter](/microsoft-edge/webview2/reference/win32/icorewebview2environment7#get_userdatafolder).  That API Reference page contains example code showing how to read the `UserDataFolder` property.


**Example code:**

```cpp
auto environment7 = m_webViewEnvironment.try_query<ICoreWebView2Environment7>();
CHECK_FEATURE_RETURN(environment7);
wil::unique_cotaskmem_string userDataFolder;
environment7->get_UserDataFolder(&userDataFolder);
```

For examples of reading the `UserDataFolder` property, see the Win32 samples in the [WebView2Samples repo](https://github.com/MicrosoftEdge/WebView2Samples).


<!-- ====================================================================== -->
<!-- retrieving UDF location -->

# [.NET (WPF/WinForms)](#tab/dotnet)

<!-- Use the .NET [CoreWebView2Environment.UserDataFolder Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.userdatafolder). -->

<!-- dev: add example code to https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2environment.userdatafolder showing how to read the `UserDataFolder` property, copy that from the below code block: -->


**Example code:**

<!-- ```csharp -->
<!-- // ADO work item "[wv2] Update .NET (WPF/WinForms) sample to add code to retrieve UDF location" - then copy lines to here
<!-- ``` -->

For examples of reading the `UserDataFolder` property, see the .NET (WPF/WinForms) samples in the [WebView2Samples repo](https://github.com/MicrosoftEdge/WebView2Samples).


<!-- ====================================================================== -->
<!-- retrieving UDF location -->

# [ClickOnce](#tab/clickonce)

Use the .NET [CoreWebView2Environment.UserDataFolder Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.userdatafolder).


**Example code:**

<!-- ```csharp -->
<!-- // ADO work item "[wv2] Update ClickOnce sample to add code to retrieve UDF location" - then copy lines to here
<!-- ``` -->

For examples of reading the `UserDataFolder` property, see [WebView2Samples repo > webview2_sample_uwp](https://github.com/MicrosoftEdge/WebView2Samples/tree/main/SampleApps/webview2_sample_uwp).


<!-- ====================================================================== -->
<!-- retrieving UDF location -->

# [WinUI 2 (UWP)](#tab/uwp)

Use the WinRT [CoreWebView2Environment.UserDataFolder Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#userdatafolder).


**Example code:**

```csharp
private void OnGetUDFClick(object sender, RoutedEventArgs e)
{
    // This property can be used after WebView2 creation to find the actual location of the User Data Folder
    UserDataFolder.Text = WebView2.CoreWebView2.Environment.UserDataFolder;
}
```

For examples of reading the `UserDataFolder` property, see the WinUI 2 (UWP) samples in the [WebView2Samples repo > webview2_sample_uwp](https://github.com/MicrosoftEdge/WebView2Samples/tree/main/SampleApps/webview2_sample_uwp).


<!-- ====================================================================== -->
<!-- retrieving UDF location -->

# [WinUI 3](#tab/winui3)

Use the .NET [CoreWebView2Environment.UserDataFolder Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.userdatafolder).


**Example code:**

```csharp
private void OnGetUDFClick(object sender, RoutedEventArgs e)
{
    // This property can be used after WebView2 creation to find the actual location of the User Data Folder
    UserDataFolder.Text = WebView2.CoreWebView2.Environment.UserDataFolder;
}
```

<!-- For example code, see the WinUI 3 `.cs` file, at [WebView2Samples repo > WebView2_WinUI3_Sample](https://github.com/MicrosoftEdge/WebView2Samples/tree/main/SampleApps/WebView2_WinUI3_Sample). -->


---

<!-- end of "retrieving location" tab-set -->


<!-- ====================================================================== -->
## Clearing space in the UDF

Instead of deleting the user data folder (UDF), clear browsing data from the UDF.  For example, clear user data and history when a user signs out.

See [Clear browsing data from the user data folder](clear-browsing-data.md).


<!-- ====================================================================== -->
## Handling error messages

If the user data folder (UDF) doesn't have Write permissions, the following error message strings may be returned:
* `User data folder cannot be created because a file with the same name already exists.`
* `Unable to create user data folder, Access Denied.`

The above is true regardless of whether the location of the user data folder was the default UDF location or a custom UDF location.

If there's insufficient memory, or the Microsoft Edge runtime is unable to start, or the WebView2 Runtime is not found, error message strings similar to the following may be returned:
*  `Microsoft Edge runtime unable to start`
*  `Failed to create WebView2 environment`

Add code, such as `try/catch` code, to handle these errors.  These errors tend to be fatal errors that you can't recover from, so `try/catch` will prevent the app from crashing.  You'll then be able to detect the failure and close the app gracefully.  Some errors are unrecoverable, such as `Access Denied` when trying to use a user data folder that you don't have Write permissions to.

Error message strings are displayed in a dialog.


<!-- ====================================================================== -->
## Whether to persist user data folders in various scenarios

Your host app controls the lifetime of the user data folder (UDF).  If your app re-uses user data from app sessions, consider saving (that is, not deleting) the UDFs.

If your app doesn't reuse user data from app sessions, you can delete the UDF.  However, while a session is running, it's better to call the _clear browsing data_ methods instead of deleting the UDF.


<!-- ====================================================================== -->
## Persisting user data folders if same user uses your app repeatedly, and the web content of the app relies on the user's data

In this scenario, don't explicitly delete the user data folder (UDF); persist the data.


<!-- ====================================================================== -->
## Persisting user data folders if multiple users use your app repeatedly

If multiple users use your app repeatedly, you should create a new user data folder (UDF) for each new user, and save the UDF of each user.

The WebView2 control creates a new UDF for each new user.  The WebView2 control creates one UDF per session.  If there are multiple WebView2 sessions, the WebView2 control creates multiple UDFs.  Usually if the host app has more than one WebView2 control instance, the host app should point all instances of WebView2 to the same UDF.

Each host app that has a WebView2 control instance will have its own UDF.  Your host app can have each UDF point to the same place.  

If your host app is for multiple users, you should probably create one UDF per user.  If your app was installed per-user, this is how it works.
<!-- in a more detailed article, cover this: how does your host app cause WebView2 to create one UDF per user vs. causing WebView2 to create one UDF per X or Y or Z instead? -->

If you launch two copies of your host app, they will use the same UDF.  
<!-- cover this in advanced whitepaper article -->

*  For Win32 host apps, the UDF is not automatically removed.
*  For .NET (WPF & WinForms) host apps, the UDF is not automatically removed.
*  For ClickOnce host apps, the UDF is automatically removed.
*  For WinUI 2 (UWP) host apps, the UDF is not automatically removed.
*  For WinUI 3 host apps, the UDF is not automatically removed.


<!-- ====================================================================== -->
## Uninstalling a host app

Uninstalling a WebView2 host app uses the standard uninstalling process; this process is not unique to WebView2.

During uninstall, your installer may need to clean up any created UDF.  In some cases, you might want to preserve the UDF.

If you create the host app, create an MSIX installer, install the host app, and then run the host app, it creates the UDF.  But then if you uninstall the host app, that won't auto-clean up the UDF (because the uninstaller protects and preserves the user data), so your uninstall process needs to be aware of that consideration.

In ClickOnce apps, it installs in a single location, and when the session ends, it deletes the entire tree, so the UDF is automatically deleted.  That's because of how ClickOnce works, not because of how WebView2 works.

<!-- details about these Windows considerations belong in a whitepaper article -->


<!-- ====================================================================== -->
## Persisting user data folders if your app doesn't have repeat users

In this scenario, create a new user data folder (UDF) for each user, and delete the previous UDF.


<!-- ====================================================================== -->
## Deleting user data folders

Your host app or the uninstaller can delete the user data folder (UDF).  You might need to delete UDFs for any of the following reasons:

*  If you want to uninstall a packaged Windows Store app.  In this case, Windows deletes UDFs automatically.

*  If you want to clean up all browsing data history.  However, see the _clear browsing data_ methods first, as an easier, more flexible approach.

*  If you want to recover from data corruption.

*  If you want to remove previous session data.

*  If you want to change the UDF location.  If you change the UDF location, the previous UDF will not be automatically cleaned up.


### End the WebView2 session before deleting the UDF

To delete a user data folder (UDF), you must first end the WebView2 session.  You cannot delete a UDF if the WebView2 session is currently active.

<!-- write a separate article about writing a WebView2 uninstaller -->


### Wait for browser processes to exit before deleting the UDF

If files are still in use after your WebView2 host app closes, wait for browser processes to exit before deleting the user data folder (UDF).

Files in UDFs might still be in use after the WebView2 app is closed.  In this situation, wait for the browser process and all child processes to exit before deleting the UDF.  To monitor processes to wait for them to exit, retrieve the process ID of the browser process by using the `BrowserProcessId` property of the WebView2 app instance.


<!-- ====================================================================== -->
## Sharing user data folders

WebView2 control instances can share the same user data folders (UDFs), to do the following:

*  Optimize system resources by running in one browser process.  See [Process model for WebView2 apps](../concepts/process-model.md).

*  Have WebView2 controls with different profiles, to separate browser data storage such as cookies, permissions, and cached resources under the same UDF.  See [Support multiple profiles under a single user data folder](../concepts/multi-profile-support.md).

Consider the following when sharing UDFs:

*  When re-creating WebView2 controls to update browser versions using [add_NewBrowserVersionAvailable](/microsoft-edge/webview2/reference/win32/icorewebview2environment#add_newbrowserversionavailable) (Win32) event handlers or [NewBrowserVersionAvailable](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.newbrowserversionavailable) (.NET) events, your host app must ensure that browser processes exit and close any WebView2 controls that share the same UDF.  To retrieve the process ID of the browser process, use the `BrowserProcessId` property of the WebView2 control.


<!-- ====================================================================== -->
## Avoid running too many folders at once

To isolate different parts of your app, or when sharing data between WebView2 controls isn't needed, you can use different user data folders (UDFs).  For example, an app can consist of two WebView2 controls, one for displaying an advertisement and the other for displaying app content.  You can use different UDFs for each WebView2 control.

Each WebView2 browser process consumes additional memory and disk space.  Therefore, avoid running a WebView2 control with too many different UDFs at the same time.

Rather than multiple UDFs, you can use multiple profiles to achieve browser data storage separation for different WebView2 controls.  Each profile saves browser data in a dedicated folder under the same, shared UDF.  See [Support multiple profiles under a single user data folder](../concepts/multi-profile-support.md).


<!-- ====================================================================== -->
## See also

* [Support multiple profiles under a single user data folder](multi-profile-support.md)
* [Clear browsing data from the user data folder](clear-browsing-data.md)
* [Package and deploy](/windows/apps/package-and-deploy/) in _Windows App Development_ docs (Build desktop apps for Windows).
* [ClickOnce security and deployment](/visualstudio/deployment/clickonce-security-and-deployment) - Visual Studio deployment documentation.
* [Understand the ClickOnce and DirectInvoke features in Microsoft Edge](/deployedge/edge-learn-more-co-di) - in Microsoft Edge Enterprise documentation.
