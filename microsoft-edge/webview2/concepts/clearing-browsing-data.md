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

The Clear Browsing Data API allows you to programmatically clear space in the user data folder for a profile, by clearing selected browsing data that is stored in the user data folder of a WebView2 app.  You can clear all data, or you can select the kinds of data to clear, together with what date range of data to clear.

The API consists of three C++ methods and three equivalent C# method overloads, and a supporting enum.

<!-- [pre-release spec for Clear Browsing Data API Reference](https://github.com/MicrosoftEdge/WebView2Feedback/blob/master/specs/ClearBrowsingData.md) -->
<!-- prefix removed from API Ref urls: https://docs.microsoft.com/en-us/ -->


<!-- ====================================================================== -->
## Clear specified data kinds, regardless of when created
<!-- function 1 -->

This method clears the specified kinds of browsing data, regardless of when the data was created.  It clears the data from the user data folder for the associated profile on which the method is called.

Signature (C++/IDL):

```cpp
HRESULT ClearBrowsingData(
   [in] COREWEBVIEW2_BROWSING_DATA_KINDS dataKinds,
   [in] ICoreWebView2ClearBrowsingDataCompletedHandler* handler); 
```

Parameters:

* `dataKinds` - The kinds of browsing data to clear.  A mask of one or more enum values.
   * C++: [COREWEBVIEW2_BROWSING_DATA_KINDS enum](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller4#corewebview2_browsing_data_kinds)
   * C# [CoreWebView2BrowsingDataKinds Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2browsingdatakinds)

* `handler` - A handler which indicates if the proper data has been cleared successfully.  For C++.  A pointer to [ICoreWebView2ClearBrowsingDataCompletedHandler interface)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalclearbrowsingdatacompletedhandler).


### API Reference

* C++ method: [ClearBrowsingData(dataKinds)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile4#clearbrowsingdata) 

* C# method overload: [ClearBrowsingDataAsync(dataKinds)](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.clearbrowsingdataasync#microsoft-web-webview2-core-corewebview2profile-clearbrowsingdataasync(microsoft-web-webview2-core-corewebview2browsingdatakinds)) 


<!-- ====================================================================== -->
## Clear all data kinds, regardless of when created
<!-- function 2 -->

This method clears all the kinds of browsing data listed in the data kinds enumeration, regardless of when the data was created.  It clears the data from the user data folder for the associated profile on which the method is called.

Signature (C++/IDL):

```cpp
HRESULT ClearBrowsingDataAll(
   [in] ICoreWebView2ClearBrowsingDataCompletedHandler* handler);
```

Parameters:

* `handler` - A handler which indicates if the proper data has been cleared successfully.  For C++.  A pointer to [ICoreWebView2ClearBrowsingDataCompletedHandler interface)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalclearbrowsingdatacompletedhandler).


### API Reference

* C++ method: [ClearBrowsingDataAll()](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile4#clearbrowsingdataall) 

* C# method overload: [ClearBrowsingDataAsync()](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.clearbrowsingdataasync#microsoft-web-webview2-core-corewebview2profile-clearbrowsingdataasync) 


<!-- ====================================================================== -->
## Clear specified data kinds, within a specified time range
<!-- function 3 -->

This method clears the specified kinds of browsing data that was created between the specified start time and end time.  It clears the data from the user data folder for the associated profile on which the method is called.

Signature (C++/IDL):

```cpp
HRESULT ClearBrowsingDataInTimeRange(
   [in] COREWEBVIEW2_BROWSING_DATA_KINDS dataKinds, 
   [in] double startTime,
   [in] double endTime, 
   [in] ICoreWebView2ClearBrowsingDataCompletedHandler* handler);
```

Parameters:

* `dataKinds` - The kinds of browsing data to clear.  A mask of one or more enum values.
   * C++: [COREWEBVIEW2_BROWSING_DATA_KINDS enum](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller4#corewebview2_browsing_data_kinds)
   * C# [CoreWebView2BrowsingDataKinds Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2browsingdatakinds)

* `startTime` - The start time for which the API should clear the corresponding data.  How many seconds have passed since the UNIX epoch.

   *  Passing in a value of zero or less than zero (up to negative infinity) will clear the corresponding data for any time before the `endTime`.
   
   *  Passing in a value of the current time or greater (up to positive infinity) will clear the corresponding data for any time after the `startTime`.
   
   For example, passing in negative infinity and positive infinity as the time parameters will clear the entirety of the corresponding data. The timestamp represents the time at which the data was created. 
   
* `endTime` - The end time for which the API should clear the corresponding data.  How many seconds have passed since the UNIX epoch.

* `handler` - A handler which indicates if the proper data has been cleared successfully.  For C++.  A pointer to [ICoreWebView2ClearBrowsingDataCompletedHandler interface](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalclearbrowsingdatacompletedhandler).


### API Reference

* C++ method: [ClearBrowsingDataInTimeRange(dataKinds, startTime, endTime)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile4#clearbrowsingdataintimerange) 

* C# method overload: [ClearBrowsingDataAsync(dataKinds, startTime, endTime)](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.clearbrowsingdataasync#microsoft-web-webview2-core-corewebview2profile-clearbrowsingdataasync(microsoft-web-webview2-core-corewebview2browsingdatakinds-system-datetime-system-datetime)) 


<!-- ====================================================================== -->
## C++ Example: Clearing autofill data from the last hour

This C++ example demonstrates clearing autofill data and password autosave data from the last hour.

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

C++ APIs from the Clear Browsing Data API that are used in the above example:

* [ClearBrowsingDataInTimeRange](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile4#clearbrowsingdataintimerange)

* [COREWEBVIEW2_BROWSING_DATA_KINDS enum](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller4#corewebview2_browsing_data_kinds)

Other C++ APIs used above:

*  `get_Profile` <!-- not found-->
*  `ICoreWebView2ClearBrowsingDataCompletedHandler` - See [ICoreWebView2ExperimentalClearBrowsingDataCompletedHandler interface](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalclearbrowsingdatacompletedhandler).
*  `ICoreWebView2Profile` - See [ICoreWebView2ExperimentalProfile2 interface](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile2).


<!-- ====================================================================== -->
## C# Example: Clearing autofill data from the last hour

This C# example demonstrates clearing autofill data and password autosave data from the last hour.

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

C# Clear Browsing Data API items that are used in the above example:

*  [ClearBrowsingDataAsync(CoreWebView2BrowsingDataKinds, DateTime, DateTime)](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.clearbrowsingdataasync#microsoft-web-webview2-core-corewebview2profile-clearbrowsingdataasync(microsoft-web-webview2-core-corewebview2browsingdatakinds-system-datetime-system-datetime))

*  [CoreWebView2BrowsingDataKinds Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2browsingdatakinds)

Other APIs used above:

* [CoreWebView2Profile Class](/dotnet/api/microsoft.web.webview2.core.corewebview2profile)
* [CoreWebView2.Profile Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.profile)


<!-- ====================================================================== -->
## C++ API Reference

Interfaces:

* `ICoreWebView2Profile` - See [ICoreWebView2ExperimentalProfile2 interface](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile2).

* `ICoreWebView2ClearBrowsingDataCompletedHandler` - See [ICoreWebView2ExperimentalClearBrowsingDataCompletedHandler interface](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalclearbrowsingdatacompletedhandler).

Methods:

* [ClearBrowsingData](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile4#clearbrowsingdata)
* [ClearBrowsingDataAll](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile4#clearbrowsingdataall)
* [ClearBrowsingDataInTimeRange](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile4#clearbrowsingdataintimerange)

Enum:

* [COREWEBVIEW2_BROWSING_DATA_KINDS enum](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller4#corewebview2_browsing_data_kinds)


<!-- ====================================================================== -->
## C# API Reference

Namespace:

* [Microsoft.Web.WebView2.Core Namespace](/dotnet/api/microsoft.web.webview2.core)

Class:

* [CoreWebView2Profile Class](/dotnet/api/microsoft.web.webview2.core.corewebview2profile)

Method overloads:

* [ClearBrowsingDataAsync()](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.clearbrowsingdataasync#microsoft-web-webview2-core-corewebview2profile-clearbrowsingdataasync)
* [ClearBrowsingDataAsync(CoreWebView2BrowsingDataKinds)](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.clearbrowsingdataasync#microsoft-web-webview2-core-corewebview2profile-clearbrowsingdataasync(microsoft-web-webview2-core-corewebview2browsingdatakinds))
* [ClearBrowsingDataAsync(CoreWebView2BrowsingDataKinds, DateTime, DateTime)](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.clearbrowsingdataasync#microsoft-web-webview2-core-corewebview2profile-clearbrowsingdataasync(microsoft-web-webview2-core-corewebview2browsingdatakinds-system-datetime-system-datetime))

Enum:

* [CoreWebView2BrowsingDataKinds Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2browsingdatakinds)
