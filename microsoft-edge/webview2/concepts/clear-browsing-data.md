---
title: Clear Browsing Data
description: Clearing browsing data.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 02/09/2022
---
# Clear Browsing Data

The Clear Browsing Data API allows you to programmatically clear space in the user data folder for a profile.  These methods clear selected browsing data that is stored in the user data folder of a WebView2 app.

You can:
*  Clear all browsing data.
*  Clear selected kinds of browsing data.
*  Clear selected kinds of browsing data in a specified time range.


<!-- ====================================================================== -->
## Clear all browsing data

This method clears all the kinds of browsing data that are listed in the data kinds enumeration, regardless of when the data was created.  It clears the data from the user data folder for the associated profile on which the method is called.


<!-- ------------------------------ -->
# [C++](#tab/cpp)

[ClearBrowsingDataAll()](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile4#clearbrowsingdataall)


<!-- ------------------------------ -->
# [C#](#tab/csharp)

[ClearBrowsingDataAsync()](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.clearbrowsingdataasync#microsoft-web-webview2-core-corewebview2profile-clearbrowsingdataasync)


---
<!-- end of tab-set -->


<!-- ====================================================================== -->
## Clear selected kinds of browsing data

This method clears the specified kinds of browsing data, regardless of when the data was created.  It clears the data from the user data folder for the associated profile on which the method is called.


<!-- ------------------------------ -->
# [C++](#tab/cpp)

[ClearBrowsingData(dataKinds)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile4#clearbrowsingdata)

[COREWEBVIEW2_BROWSING_DATA_KINDS](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller4#corewebview2_browsing_data_kinds)


<!-- ------------------------------ -->
# [C#](#tab/csharp)

[ClearBrowsingDataAsync(dataKinds)](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.clearbrowsingdataasync#microsoft-web-webview2-core-corewebview2profile-clearbrowsingdataasync(microsoft-web-webview2-core-corewebview2browsingdatakinds))

[CoreWebView2BrowsingDataKinds](/dotnet/api/microsoft.web.webview2.core.corewebview2browsingdatakinds)


---
<!-- end of tab-set -->


<!-- ====================================================================== -->
## Clear selected kinds of browsing data in a time range

This method clears the specified kinds of browsing data that was created between the specified start time and end time.  It clears the data from the user data folder for the associated profile on which the method is called.


<!-- ------------------------------ -->
# [C++](#tab/cpp)

[ClearBrowsingDataInTimeRange(dataKinds, startTime, endTime)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile4#clearbrowsingdataintimerange)

[COREWEBVIEW2_BROWSING_DATA_KINDS](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller4#corewebview2_browsing_data_kinds)


<!-- ------------------------------ -->
# [C#](#tab/csharp)

[ClearBrowsingDataAsync(dataKinds, startTime, endTime)](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.clearbrowsingdataasync#microsoft-web-webview2-core-corewebview2profile-clearbrowsingdataasync(microsoft-web-webview2-core-corewebview2browsingdatakinds-system-datetime-system-datetime))

[CoreWebView2BrowsingDataKinds](/dotnet/api/microsoft.web.webview2.core.corewebview2browsingdatakinds)


---
<!-- end of tab-set -->


<!-- ====================================================================== -->
## Example

This example clears autofill data and password autosave data from the last hour.


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
        // Get the current time and offset the current time by 3600 seconds to clear the data
        // from the start time (one hour ago), until the end time (present time).
        // This clears the data for the last hour.
        COREWEBVIEW2_BROWSING_DATA_KINDS dataKinds = (COREWEBVIEW2_BROWSING_DATA_KINDS)
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

Clear Browsing Data APIs used in this example:

* [ClearBrowsingDataInTimeRange(dataKinds, startTime, endTime)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile4#clearbrowsingdataintimerange)
* [COREWEBVIEW2_BROWSING_DATA_KINDS](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller4#corewebview2_browsing_data_kinds)

Other APIs:

* [ICoreWebView2ClearBrowsingDataCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalclearbrowsingdatacompletedhandler)
* [ICoreWebView2Profile](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile2)
* `get_Profile` <!-- not found-->


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
        // Get the current time, the time in which the browsing data will be cleared until.
        System.DateTime endTime = DateTime.Now;
        System.DateTime startTime = DateTime.Now.AddHours(-1);
        // Offset the current time by one hour to clear the browsing data from the last hour.
        CoreWebView2BrowsingDataKinds dataKinds = (CoreWebView2BrowsingDataKinds)(CoreWebView2BrowsingDataKinds.GeneralAutofill | CoreWebView2BrowsingDataKinds.PasswordAutosave);
        await profile.ClearBrowsingDataAsync(dataKinds, startTime, endTime);
    }
}
```

Clear Browsing Data APIs used in this example:

* [ClearBrowsingDataAsync(dataKinds, startTime, endTime)](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.clearbrowsingdataasync#microsoft-web-webview2-core-corewebview2profile-clearbrowsingdataasync(microsoft-web-webview2-core-corewebview2browsingdatakinds-system-datetime-system-datetime))
* [CoreWebView2BrowsingDataKinds](/dotnet/api/microsoft.web.webview2.core.corewebview2browsingdatakinds)

Other APIs:

* [CoreWebView2Profile](/dotnet/api/microsoft.web.webview2.core.corewebview2profile)
* [CoreWebView2.Profile property](/dotnet/api/microsoft.web.webview2.core.corewebview2.profile)


---
<!-- end of tab-set -->


<!-- ====================================================================== -->
## API Reference


<!-- ------------------------------ -->
# [C++](#tab/cpp)

Interfaces:

* [ICoreWebView2Profile](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile2)
* [ICoreWebView2ClearBrowsingDataCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalclearbrowsingdatacompletedhandler)

Methods:

* [ClearBrowsingData(dataKinds)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile4#clearbrowsingdata)
* [ClearBrowsingDataAll()](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile4#clearbrowsingdataall)
* [ClearBrowsingDataInTimeRange(dataKinds, startTime, endTime)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile4#clearbrowsingdataintimerange)

Enum:

* [COREWEBVIEW2_BROWSING_DATA_KINDS](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller4#corewebview2_browsing_data_kinds)


<!-- ------------------------------ -->
# [C#](#tab/csharp)

Namespace:

* [Microsoft.Web.WebView2.Core](/dotnet/api/microsoft.web.webview2.core)

Class:

* [CoreWebView2Profile](/dotnet/api/microsoft.web.webview2.core.corewebview2profile)

Method overloads:

* [ClearBrowsingDataAsync()](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.clearbrowsingdataasync#microsoft-web-webview2-core-corewebview2profile-clearbrowsingdataasync)
* [ClearBrowsingDataAsync(dataKinds)](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.clearbrowsingdataasync#microsoft-web-webview2-core-corewebview2profile-clearbrowsingdataasync(microsoft-web-webview2-core-corewebview2browsingdatakinds))
* [ClearBrowsingDataAsync(dataKinds, startTime, endTime)](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.clearbrowsingdataasync#microsoft-web-webview2-core-corewebview2profile-clearbrowsingdataasync(microsoft-web-webview2-core-corewebview2browsingdatakinds-system-datetime-system-datetime))

Enum:

* [CoreWebView2BrowsingDataKinds](/dotnet/api/microsoft.web.webview2.core.corewebview2browsingdatakinds)


---
<!-- end of tab-set -->


<!-- ====================================================================== -->
## See also

* [Spec for Clear Browsing Data API](https://github.com/MicrosoftEdge/WebView2Feedback/blob/master/specs/ClearBrowsingData.md)
