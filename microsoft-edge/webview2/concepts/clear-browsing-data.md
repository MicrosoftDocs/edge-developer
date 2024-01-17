---
title: Clear browsing data from the user data folder
description: How to clear browsing data from the user data folder for a WebView2 app to free up space.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 04/27/2022
---
# Clear browsing data from the user data folder

To clear browsing data from the user data folder for a WebView2 app and free up space, call the methods of the Clear Browsing Data API.

The Clear Browsing Data API allows you to programmatically erase data in the [user data folder](user-data-folder.md) that's associated with a WebView2 user profile.  For example, use this API to clear user data and history when a user signs out.

You can:
*  Clear all browsing data.
*  Clear selected kinds of browsing data.
*  Clear selected kinds of browsing data in a specified time range.


<!-- ====================================================================== -->
## Clear all browsing data

This method clears all the kinds of browsing data that are listed in the data kinds enumeration, regardless of when the data was created.  It clears the data from the user data folder for the user profile on which the method is called.


<!-- ------------------------------ -->

# [C#](#tab/csharp)

[CoreWebView2Profile.ClearBrowsingDataAsync() Method](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.clearbrowsingdataasync#microsoft-web-webview2-core-corewebview2profile-clearbrowsingdataasync)


<!-- ------------------------------ -->

# [C++](#tab/cpp)

[ICoreWebView2Profile::ClearBrowsingDataAll() method](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile4#clearbrowsingdataall)


---

<!-- end of tab-set -->


<!-- ====================================================================== -->
## Clear selected kinds of browsing data

This method clears the specified kinds of browsing data, regardless of when the data was created.  It clears the data from the user data folder for the user profile on which the method is called.


<!-- ------------------------------ -->

# [C#](#tab/csharp)

[CoreWebView2Profile.ClearBrowsingDataAsync(dataKinds) Method](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.clearbrowsingdataasync#microsoft-web-webview2-core-corewebview2profile-clearbrowsingdataasync(microsoft-web-webview2-core-corewebview2browsingdatakinds))

[CoreWebView2BrowsingDataKinds Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2browsingdatakinds)


<!-- ------------------------------ -->

# [C++](#tab/cpp)

[ICoreWebView2Profile::ClearBrowsingData(dataKinds) method](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile4#clearbrowsingdata)

[COREWEBVIEW2_BROWSING_DATA_KINDS enum](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller4#corewebview2_browsing_data_kinds)

---

<!-- end of tab-set -->


<!-- ====================================================================== -->
## Clear selected kinds of browsing data in a time range

This method clears the specified kinds of browsing data that was created between the specified start time and end time.  It clears the data from the user data folder for the user profile on which the method is called.


<!-- ------------------------------ -->

# [C#](#tab/csharp)

[CoreWebView2Profile.ClearBrowsingDataAsync(dataKinds, startTime, endTime) Method](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.clearbrowsingdataasync#microsoft-web-webview2-core-corewebview2profile-clearbrowsingdataasync(microsoft-web-webview2-core-corewebview2browsingdatakinds-system-datetime-system-datetime))

[CoreWebView2BrowsingDataKinds Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2browsingdatakinds)


<!-- ------------------------------ -->

# [C++](#tab/cpp)

[ICoreWebView2Profile::ClearBrowsingDataInTimeRange(dataKinds, startTime, endTime) method](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile4#clearbrowsingdataintimerange)

[COREWEBVIEW2_BROWSING_DATA_KINDS enum](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller4#corewebview2_browsing_data_kinds)

---

<!-- end of tab-set -->


<!-- ====================================================================== -->
## Example: Clearing selected kinds of browsing data in a time range

This example clears autofill data and password autosave data from the last hour.

The following parameter values are passed to the Clear Browsing Data API method:

*  The selected kinds of browser data = autofill data and password autosave data.

*  The specified time range = the past hour (3600 seconds).


<!-- ------------------------------ -->

# [C#](#tab/csharp)

```csharp
// Clears autofill data.
private void ClearAutofillData()
{
    CoreWebView2Profile profile;
    if (webView.CoreWebView2 != null)
    {
        profile = webView.CoreWebView2.Profile;
        // Get the current time, the time in which the browsing data will be cleared
        // until.
        System.DateTime endTime = DateTime.Now;
        System.DateTime startTime = DateTime.Now.AddHours(-1);
        // Offset the current time by one hour to clear the browsing data from the
        // last hour.
        CoreWebView2BrowsingDataKinds dataKinds = (CoreWebView2BrowsingDataKinds)
                                 (CoreWebView2BrowsingDataKinds.GeneralAutofill | 
                                  CoreWebView2BrowsingDataKinds.PasswordAutosave);
        await profile.ClearBrowsingDataAsync(dataKinds, startTime, endTime);
    }
}
```

**APIs:**

* [CoreWebView2Profile.ClearBrowsingDataAsync(dataKinds, startTime, endTime) Method](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.clearbrowsingdataasync#microsoft-web-webview2-core-corewebview2profile-clearbrowsingdataasync(microsoft-web-webview2-core-corewebview2browsingdatakinds-system-datetime-system-datetime))
* [CoreWebView2BrowsingDataKinds Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2browsingdatakinds)


<!-- ------------------------------ -->

# [C++](#tab/cpp)

```cpp
// Clears the autofill data from the last hour.
void ClearAutofillData()
{
    wwil::com_ptr<ICoreWebView2> coreWebView2;
    CHECK_FAILURE(m_controller->get_CoreWebView2(&coreWebView2));

    auto webview7 = coreWebView2.try_query<ICoreWebView2_7>();
    if (webview7)
    {
        wil::com_ptr<ICoreWebView2Profile> profile;
        CHECK_FAILURE(webview7->get_Profile(&profile));
        double endTime = (double)std::time(nullptr);
        double startTime = endTime - 3600;
        // Get the current time and offset the current time by 3600 seconds to clear
        // the data from the start time (one hour ago), until the end time (present 
        // time).
        // This clears the data for the last hour.
        COREWEBVIEW2_BROWSING_DATA_KINDS dataKinds = 
            (COREWEBVIEW2_BROWSING_DATA_KINDS)
            (COREWEBVIEW2_BROWSING_DATA_KINDS_GENERAL_AUTOFILL |
            COREWEBVIEW2_BROWSING_DATA_KINDS_PASSWORD_AUTOSAVE);
        CHECK_FAILURE(profile->ClearBrowsingDataInTimeRange(
            dataKinds, startTime, endTime,
            Callback<ICoreWebView2ClearBrowsingDataCompletedHandler>(
                [this](HRESULT error)
                    -> HRESULT {
                    return S_OK;
                })
                .Get()));
    }
}
```

**APIs:**

* [ICoreWebView2Profile::ClearBrowsingDataInTimeRange(dataKinds, startTime, endTime) method](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile4#clearbrowsingdataintimerange)
* [COREWEBVIEW2_BROWSING_DATA_KINDS enum](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller4#corewebview2_browsing_data_kinds)
* [ICoreWebView2ClearBrowsingDataCompletedHandler interface](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalclearbrowsingdatacompletedhandler)

---

<!-- end of tab-set -->


<!-- ====================================================================== -->
## API Reference


<!-- ------------------------------ -->

# [C#](#tab/csharp)

* [CoreWebView2.Profile Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.profile)
* [CoreWebView2Profile Class](/dotnet/api/microsoft.web.webview2.core.corewebview2profile)
* [CoreWebView2Profile.ClearBrowsingDataAsync() Method](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.clearbrowsingdataasync#microsoft-web-webview2-core-corewebview2profile-clearbrowsingdataasync)
* [CoreWebView2Profile.ClearBrowsingDataAsync(dataKinds) Method](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.clearbrowsingdataasync#microsoft-web-webview2-core-corewebview2profile-clearbrowsingdataasync(microsoft-web-webview2-core-corewebview2browsingdatakinds))
* [CoreWebView2Profile.ClearBrowsingDataAsync(dataKinds, startTime, endTime) Method](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.clearbrowsingdataasync#microsoft-web-webview2-core-corewebview2profile-clearbrowsingdataasync(microsoft-web-webview2-core-corewebview2browsingdatakinds-system-datetime-system-datetime))
* [CoreWebView2BrowsingDataKinds Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2browsingdatakinds)


<!-- ------------------------------ -->

# [C++](#tab/cpp)

* [ICoreWebView2Profile::ClearBrowsingDataAll() method](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile4#clearbrowsingdataall)
* [ICoreWebView2Profile::ClearBrowsingData(dataKinds) method](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile4#clearbrowsingdata)
* [ICoreWebView2Profile::ClearBrowsingDataInTimeRange(dataKinds, startTime, endTime) method](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile4#clearbrowsingdataintimerange)
* [COREWEBVIEW2_BROWSING_DATA_KINDS enum](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller4#corewebview2_browsing_data_kinds)
* [ICoreWebView2ClearBrowsingDataCompletedHandler interface](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalclearbrowsingdatacompletedhandler)

---

<!-- end of tab-set -->


<!-- ====================================================================== -->
## See also

* [Manage the user data folder](user-data-folder.md)
* [Support multiple profiles under a single user data folder](multi-profile-support.md)
* [Spec for Clear Browsing Data API](https://github.com/MicrosoftEdge/WebView2Feedback/blob/main/specs/ClearBrowsingData.md)
