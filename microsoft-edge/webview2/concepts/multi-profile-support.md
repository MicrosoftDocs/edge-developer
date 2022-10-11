---
title: Support multiple profiles under a single user data folder
description: How to have different profiles of a WebView2 app running with different profiles under a single user data folder to achieve browsing data separation.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 10/11/2022
---
# Support multiple profiles under a single user data folder

To achieve data separation, a WebView2 app can choose to use different user data folders for different WebView2 controls. However, in such way you'll have to be running multiple WebView2 runtime instances (each including a browser process and a bunch of child processes), which means much more consumption for system resources including memory, CPU footprint, disk space, so it is not desirable.

Now we have a more desirable solution: multiple profile support, which enables a WebView2 app to have multiple profiles under a single user data folder, each profile has a dedicated profile folder to save browser data, which means separate browsing data storage, such as cookies, user preference settings, and cached resources. All the WebView2 controls associated with the same profile share the single profile folder. Note that the profile maps to the same concept of Edge browser profile.

WebView2 multiple profile API allows you to create and manipulate profiles to work with your WebView2 controls to fulfill your needs.


<!-- ====================================================================== -->
## Specify the profile when creating WebView2

This method creates an options object to give specific information of a profile, including `ProfileName` and `IsInPrivateModeEnabled`. This object is to be used to specify the target profile when creating a WebView2 control.


<!-- ------------------------------ -->

# [C#](#tab/csharp)

TODO


<!-- ------------------------------ -->

# [C++](#tab/cpp)

[ICoreWebView2Environment10::CreateCoreWebView2ControllerOptions Method](/microsoft-edge/webview2/reference/win32/icorewebview2environment10#createcorewebview2controlleroptions)

[ICoreWebView2ControllerOptions Interface](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions)

---

<!-- end of tab-set -->


This method creates a WebView2 control and associates it with the profile you specified. If the specified profile does not exist, a new one will be created.


<!-- ------------------------------ -->

# [C#](#tab/csharp)

TODO


<!-- ------------------------------ -->

# [C++](#tab/cpp)

* **[ICoreWebView2Environment10](/microsoft-edge/webview2/reference/win32/icorewebview2environment10)**
   * [CreateCoreWebView2ControllerWithOptions](/microsoft-edge/webview2/reference/win32/icorewebview2environment10#createcorewebview2controllerwithoptions)
   * [CreateCoreWebView2CompositionControllerWithOptions](/microsoft-edge/webview2/reference/win32/icorewebview2environment10#createcorewebview2compositioncontrollerwithoptions)

---

<!-- end of tab-set -->


<!-- ====================================================================== -->
### Example


<!-- ------------------------------ -->

# [C#](#tab/csharp)

```csharp
TODO
```


<!-- ------------------------------ -->

# [C++](#tab/cpp)

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

<!-- end of tab-set -->


<!-- ====================================================================== -->
## Access and manipulate the profile

You can get the profile object by accessing the property of a WebView2 control.


<!-- ------------------------------ -->

# [C#](#tab/csharp)

TODO


<!-- ------------------------------ -->

# [C++](#tab/cpp)

[ICoreWebView2_13::get_Profile Method](/microsoft-edge/webview2/reference/win32/icorewebview2_13#get_profile)

---

<!-- end of tab-set -->


You can manipulate the profile object. The Profile interface allows to get profile information and do profile-wide settings and operations.


<!-- ------------------------------ -->

# [C#](#tab/csharp)

TODO


<!-- ------------------------------ -->

# [C++](#tab/cpp)

[ICoreWebView2Profile Interface](/microsoft-edge/webview2/reference/win32/icorewebview2profile)

[ICoreWebView2Profile2 Interface](/microsoft-edge/webview2/reference/win32/icorewebview2profile2)

---

<!-- end of tab-set -->


<!-- ====================================================================== -->
### Example


<!-- ------------------------------ -->

# [C#](#tab/csharp)

```csharp
TODO
```


<!-- ------------------------------ -->

# [C++](#tab/cpp)

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

<!-- end of tab-set -->


<!-- ====================================================================== -->
## See also

* [Manage the user data folder](user-data-folder.md)
* [Clear browsing data from the user data folder](clear-browsing-data.md)
* [Spec for multiple profile support API](https://github.com/MicrosoftEdge/WebView2Feedback/blob/main/specs/MultiProfile.md)
