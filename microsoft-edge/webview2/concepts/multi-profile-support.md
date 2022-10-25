---
title: Support multiple profiles under a single user data folder
description: How to have different profiles of a WebView2 app running with different profiles under a single user data folder to achieve browsing data separation.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 10/25/2022
---
# Support multiple profiles under a single user data folder

The WebView2 Multiple Profiles API allows you to create and manipulate user profiles to work with your WebView2 controls.  Profiles in WebView2 are conceptually similar to profiles in Microsoft Edge.  Multiple profile support enables a WebView2 app to have multiple profiles under a single user data folder.

Each profile has a dedicated profile folder to save browser data, which provides separate browsing data storage for each user, such as cookies, user preference settings, and cached resources.  All the WebView2 controls that are associated with the same user profile share a single profile folder.


#### Previous approach: Using a different user data folder for each WebView2 control

Previously, without multi-profile support, to achieve data separation, a WebView2 app could use different user data folders for different WebView2 controls.  However, in that approach, you must run multiple WebView2 runtime instances (each including a browser process and a bunch of child processes), which consumed more system resources including memory, CPU footprint, and disk space.


<!-- code listings:
is the Spec, or Samples repo, or API Ref the best place to copy code listings from?
-->

<!-- n/a: 
Deleting a profile
* [CoreWebView2Profile.Delete method]()
* [ICoreWebView2StagingProfile4::Delete method]()
* [Delete profile (Win32)](https://github.com/MicrosoftEdge/WebView2Feedback/blob/main/specs/MultiProfile.md#delete-profile)
* [Delete profile (.NET and WinRT)](https://github.com/MicrosoftEdge/WebView2Feedback/blob/main/specs/MultiProfile.md#access-and-use-the-cookie-manager-from-profile)
-->


<!-- ====================================================================== -->
## Specify the profile when creating a WebView2

#### Create an options object that defines a profile

The `CreateCoreWebView2ControllerOptions` method on `CoreWebView2Environment` creates an options object, `CoreWebView2ControllerOptions`, to provide specific information about a profile, including `ProfileName` and `IsInPrivateModeEnabled`.  Use this object to specify the target profile when creating a WebView2 control instance.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Environment.CreateCoreWebView2ControllerOptions Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createcorewebview2controlleroptions)
   * [CoreWebView2ControllerOptions Class](/dotnet/api/microsoft.web.webview2.core.corewebview2controlleroptions)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Environment.CreateCoreWebView2ControllerOptions Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#createcorewebview2controlleroptions)
   * [CoreWebView2ControllerOptions Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controlleroptions)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Environment10::CreateCoreWebView2ControllerOptions method](/microsoft-edge/webview2/reference/win32/icorewebview2environment10#createcorewebview2controlleroptions)
   * [ICoreWebView2ControllerOptions interface](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions)

---

#### Create a WebView2 control that uses the profile

The `CreateCoreWebView2ControllerWithOptions` method creates a WebView2 control and associates it with the profile you specified.  If the specified profile doesn't exist, a new profile will be created.

##### [.NET/C#](#tab/dotnetcsharp)

<!-- Ref topic breakout: one webpage per overload; covers all overloads of the method, no need for per-overload links -->
* [CoreWebView2Environment.CreateCoreWebView2CompositionControllerAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createcorewebview2compositioncontrollerasync)
* [CoreWebView2Environment.CreateCoreWebView2ControllerAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createcorewebview2controllerasync)

##### [WinRT/C#](#tab/winrtcsharp)

<!-- Ref topic breakout: one webpage per type; very long webpage covers all methods of the type including overloads.  2nd overload's url adds -1 at end -->
<!-- preserve sequence per Ref webpage.  for clarity + brevity, list param names, lowercased -->
* [CoreWebView2Environment.CreateCoreWebView2CompositionControllerAsync(parentWindow) Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#createcorewebview2compositioncontrollerasync)
* [CoreWebView2Environment.CreateCoreWebView2CompositionControllerAsync(parentWindow, options) Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#createcorewebview2compositioncontrollerasync-1)
* [CoreWebView2Environment.CreateCoreWebView2ControllerAsync(parentWindow, options) Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#createcorewebview2controllerasync)
* [CoreWebView2Environment.CreateCoreWebView2ControllerAsync(parentWindow) Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#createcorewebview2controllerasync-1)

##### [Win32/C++](#tab/win32cpp)

<!-- Ref topic breakout: small dedicated iface.  link to iface to bring up overview, and link to methods to show method names -->
* **[ICoreWebView2Environment10 interface](/microsoft-edge/webview2/reference/win32/icorewebview2environment10)**
   * [ICoreWebView2Environment10::CreateCoreWebView2ControllerWithOptions method](/microsoft-edge/webview2/reference/win32/icorewebview2environment10#createcorewebview2controllerwithoptions)
   * [ICoreWebView2Environment10::CreateCoreWebView2CompositionControllerWithOptions method](/microsoft-edge/webview2/reference/win32/icorewebview2environment10#createcorewebview2compositioncontrollerwithoptions)

---


<!-- ====================================================================== -->
## Example of specifying the profile when creating a WebView2


##### [.NET/C#](#tab/dotnetcsharp)

check API Reference (= Samples repo?)

code listing in spec: [Create WebView2 with a specific profile, then access the profile property of WebView2 (.NET and WinRT)](https://github.com/MicrosoftEdge/WebView2Feedback/blob/main/specs/MultiProfile.md#create-webview2-with-a-specific-profile-then-access-the-profile-property-of-webview2)

```csharp
TODO
```

##### [WinRT/C#](#tab/winrtcsharp)

check API Reference (= Samples repo?)

code listing in spec: [Create WebView2 with a specific profile, then access the profile property of WebView2 (.NET and WinRT)](https://github.com/MicrosoftEdge/WebView2Feedback/blob/main/specs/MultiProfile.md#create-webview2-with-a-specific-profile-then-access-the-profile-property-of-webview2)

```csharp
TODO
```

##### [Win32/C++](#tab/win32cpp)

```cpp
HRESULT AppWindow::CreateControllerWithOptions()
{
    //! [CreateControllerWithOptions]
    auto webViewEnvironment10 = m_webViewEnvironment.try_query<ICoreWebView2Environment10>();
    if (!webViewEnvironment10)
    {
        FeatureNotAvailable();
        return S_OK;
    }

    wil::com_ptr<ICoreWebView2ControllerOptions> options;
    // The validation of parameters occurs when setting the properties.
    HRESULT hr = webViewEnvironment10->CreateCoreWebView2ControllerOptions(&options);
    if (hr == E_INVALIDARG)
    {
        ShowFailure(hr, L"Unable to create WebView2 due to an invalid profile name.");
        CloseAppWindow();
        return S_OK;
    }
    CHECK_FAILURE(hr);
    //! [CreateControllerWithOptions]

    // If call 'put_ProfileName' with an invalid profile name, the 'E_INVALIDARG' returned
    // immediately. ProfileName could be reused.
    CHECK_FAILURE(options->put_ProfileName(m_webviewOption.profile.c_str()));
    CHECK_FAILURE(options->put_IsInPrivateModeEnabled(m_webviewOption.isInPrivate));

#ifdef USE_WEBVIEW2_WIN10
    if (m_dcompDevice || m_wincompCompositor)
#else
    if (m_dcompDevice)
#endif
    {
        //! [OnCreateCoreWebView2ControllerCompleted]
        CHECK_FAILURE(webViewEnvironment10->CreateCoreWebView2CompositionControllerWithOptions(
            m_mainWindow, options.get(),
            Callback<ICoreWebView2CreateCoreWebView2CompositionControllerCompletedHandler>(
                [this](
                    HRESULT result,
                    ICoreWebView2CompositionController* compositionController) -> HRESULT {
                    auto controller =
                        wil::com_ptr<ICoreWebView2CompositionController>(compositionController)
                            .query<ICoreWebView2Controller>();
                    return OnCreateCoreWebView2ControllerCompleted(result, controller.get());
                })
                .Get()));
        //! [OnCreateCoreWebView2ControllerCompleted]
    }
    else
    {
        CHECK_FAILURE(webViewEnvironment10->CreateCoreWebView2ControllerWithOptions(
            m_mainWindow, options.get(),
            Callback<ICoreWebView2CreateCoreWebView2ControllerCompletedHandler>(
                this, &AppWindow::OnCreateCoreWebView2ControllerCompleted)
                .Get()));
    }

    return S_OK;
}
```

---


<!-- ====================================================================== -->
## Access and manipulate the profile

You can get the profile object by accessing the `Profile` property of a WebView2 control.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.Profile Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.profile#microsoft-web-webview2-core-corewebview2-profile)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.Profile Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#profile)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_13::Profile property (get)](/microsoft-edge/webview2/reference/win32/icorewebview2_13#get_profile)<!--no put-->

---

After you get the profile object, you can manipulate it.  Use `CoreWebView2Profile` to get profile information and do profile-wide settings and operations.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Profile Class](/dotnet/api/microsoft.web.webview2.core.corewebview2profile)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Profile Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Profile interface](/microsoft-edge/webview2/reference/win32/icorewebview2profile)
   * [ICoreWebView2Profile2 interface](/microsoft-edge/webview2/reference/win32/icorewebview2profile2) - Methods to clear browsing data.<!--keep text-->

---


<!-- ====================================================================== -->
## Example of accessing and manipulating the profile


##### [.NET/C#](#tab/dotnetcsharp)

check API Reference (= Samples repo?)

code listing in spec: [Access and use the cookie manager from profile (.NET and WinRT)](https://github.com/MicrosoftEdge/WebView2Feedback/blob/main/specs/MultiProfile.md#access-and-use-the-cookie-manager-from-profile)

```csharp
TODO
```

##### [WinRT/C#](#tab/winrtcsharp)

check API Reference (= Samples repo?)

code listing in spec: [Access and use the cookie manager from profile (.NET and WinRT)](https://github.com/MicrosoftEdge/WebView2Feedback/blob/main/specs/MultiProfile.md#access-and-use-the-cookie-manager-from-profile)

```csharp
TODO
```

##### [Win32/C++](#tab/win32cpp)

```cpp
// This is the callback passed to CreateCoreWebView2Controller.
// Here we can get the profile property of the WebView2 control, then manipulate it.
HRESULT AppWindow::OnCreateCoreWebView2ControllerCompleted(HRESULT result, ICoreWebView2Controller* controller)
{
    // ...

    m_controller = controller;
    wil::com_ptr<ICoreWebView2> coreWebView2;
    CHECK_FAILURE(m_controller->get_CoreWebView2(&coreWebView2));
    // We should check for failure here because if this app is using a newer
    // SDK version compared to the install of the Edge browser, the Edge
    // browser might not have support for the latest version of the
    // ICoreWebView2_N interface.
    coreWebView2.query_to(&m_webView);
    // Save PID of the browser process serving last WebView created from our
    // CoreWebView2Environment. We know the controller was created with
    // S_OK, and it hasn't been closed (we haven't called Close and no
    // ProcessFailed event could have been raised yet) so the PID is
    // available.
    CHECK_FAILURE(m_webView->get_BrowserProcessId(&m_newestBrowserPid));
    //! [CoreWebView2Profile]
    auto webView2_13 = coreWebView2.try_query<ICoreWebView2_13>();
    if (webView2_13)
    {
        wil::com_ptr<ICoreWebView2Profile> profile;
        CHECK_FAILURE(webView2_13->get_Profile(&profile));
        wil::unique_cotaskmem_string profile_name;
        CHECK_FAILURE(profile->get_ProfileName(&profile_name));
        m_profileName = profile_name.get();
        BOOL inPrivate = FALSE;
        CHECK_FAILURE(profile->get_IsInPrivateModeEnabled(&inPrivate));

        if (!m_webviewOption.downloadPath.empty())
        {
            CHECK_FAILURE(profile->put_DefaultDownloadFolderPath(
                m_webviewOption.downloadPath.c_str()));
        }

        // update window title with m_profileName
        UpdateAppTitle();

        // update window icon
        SetAppIcon(inPrivate);
    }

    // ...
}
```

---


<!-- ====================================================================== -->
## See also

* [Multiple profiles](./overview-features-apis.md#multiple-profiles) in _Overview of WebView2 features and APIs_.
* [Manage the user data folder](user-data-folder.md)
* [Clear browsing data from the user data folder](clear-browsing-data.md)
* [Spec for multiple profile support API](https://github.com/MicrosoftEdge/WebView2Feedback/blob/main/specs/MultiProfile.md)
