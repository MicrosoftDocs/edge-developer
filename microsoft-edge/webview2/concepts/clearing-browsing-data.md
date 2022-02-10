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

<!--[pre-release spec for Clear Browsing Data API Reference](https://github.com/MicrosoftEdge/WebView2Feedback/blob/master/specs/ClearBrowsingData.md)-->

The Clear Browsing Data API allows you to clear the browsing data that is stored in the user data folder of a WebView2 app.

By using this API to clear browsing data that's in the user data folder, you can specify parts of the data (kinds of data) to clear.  

This API allows you to clear the browsing data programmatically, specifying which kinds of data to clear.

Each of the functions in this API enable you to:
*  Clear data for a specified profile.
*  Clear space in the user data folder.
*  Clear the cache. <!--maybe delete-->
*  Clear autofill data. <!--maybe delete-->


<!-- ====================================================================== -->
## Overview of the API functions

The Clear Browser Data API consists of the following functions.  These functions clear the data from the user data folder for the associated profile for which the method is called.  The distinctive aspect of each function is as follows:

| Function | Description |
|---|---|
| [ClearBrowsingData](#clearbrowsingdata---clears-the-specified-kind-of-browsing-data-regardless-of-the-timestamp) | Clears the specified data kind, regardless of when the data was created. |
| [ClearBrowsingDataInTimeRange](#clearbrowsingdataintimerange---clears-browsing-data-within-the-specified-time-range) | Only clears the data that was created between the start time and end time. |
| [ClearBrowsingDataAll](#clearbrowsingdataall---clears-all-browsing-data) | Clears each kind of data that's listed in the [COREWEBVIEW2_BROWSING_DATA_KINDS](#corewebview2browsing_data_kinds-enum---kinds-of-data-to-clear) enum, regardless of when the data was created. |


<!-- ====================================================================== -->
## ClearBrowsingData - Clears the specified kind of browsing data, regardless of the timestamp

<!-- function 1 -->

<!--summary sentence to bubble up to Overview table-->
Clears the specified data kind, regardless of when the data was created.

Clears the data from the user data folder for the associated profile for which the method is called.

<!-- todo: check this signature from the Spec against the latest API Ref topics: -->
```csharp
HRESULT ClearBrowsingData(
      [in] COREWEBVIEW2_BROWSING_DATA_KINDS dataKinds,
      [in] [ICoreWebView2ClearBrowsingDataCompletedHandler*](#ICoreWebView2ClearBrowsingDataCompletedHandler) handler); 
```

Parameters:

* `dataKinds` - Type: [COREWEBVIEW2_BROWSING_DATA_KINDS (C++)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller4?view=webview2-1.0.1158-prerelease.md#corewebview2_browsing_data_kinds) - the data types to clear.
   <!-- https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller4?view=webview2-1.0.1158-prerelease#corewebview2_browsing_data_kinds -->

* `handler` - Type: [ICoreWebView2ClearBrowsingDataCompletedHandler (C++)](__).  A handler which indicates if the proper data has been cleared successfully.

Pre-release version of the interface (with "experimental" in the name): [ICoreWebView2ExperimentalClearBrowsingDataCompletedHandler interface](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalclearbrowsingdatacompletedhandler?view=webview2-1.0.1158-prerelease)
<!--https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2experimentalclearbrowsingdatacompletedhandler?view=webview2-1.0.1158-prerelease-->


API Reference:

* `ClearBrowsingData` (C++) 
* `ClearBrowsingData` - [CoreWebView2Profile.ClearBrowsingDataAsync method (C#)](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.clearbrowsingdataasync?view=webview2-dotnet-1.0.1133-prerelease).
   <!-- https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2profile.clearbrowsingdataasync?view=webview2-dotnet-1.0.1133-prerelease -->


<!-- ====================================================================== -->
## ClearBrowsingDataInTimeRange - Clears browsing data within the specified time range

<!-- function 2 -->

<!--summary sentence to bubble up to Overview table-->
Only clears the data that was created between the start time and end time.

Clears the data from the user data folder for the associated profile for which the method is called.

<!-- todo: check this signature from the Spec against the latest API Ref topics: -->
```csharp
HRESULT ClearBrowsingDataInTimeRange(
      [in] COREWEBVIEW2_BROWSING_DATA_KINDS dataKinds, 
      [in] double startTime,
      [in] double endTime, 
      [in] ICoreWebView2ClearBrowsingDataCompletedHandler* handler);
```

Parameters:

* `dataKinds` - Type: `COREWEBVIEW2_BROWSING_DATA_KINDS`.

* `startTime` - The start time for which the API should clear the corresponding data.  How many seconds have passed since the UNIX epoch.

   Passing in a value of zero or less than zero (up to negative infinity) will clear the corresponding data for any time before the `endTime`.
   
   Passing in a value of the current time or greater (up to positive infinity) will clear the corresponding data for any time after the `startTime`.
   
   For example, passing in negative infinity and positive infinity as the time parameters will clear the entirety of the corresponding data. The timestamp represents the time at which the data was created. 
   
* `endTime` - The end time for which the API should clear the corresponding data.  How many seconds have passed since the UNIX epoch.  See `startTime`.

* `handler` - Type: `ICoreWebView2ClearBrowsingDataCompletedHandler*`.

API Reference:

* `ClearBrowsingDataInTimeRange` (C++)
* `ClearBrowsingDataInTimeRange` (C#)


<!-- ====================================================================== -->
## ClearBrowsingDataAll - Clears all browsing data

<!-- function 3 -->

<!--summary sentence to bubble up to Overview table-->
Clears each kind of data that's listed in the `COREWEBVIEW2_BROWSING_DATA_KINDS` enum, regardless of when the data was created.

Clears the data from the user data folder for the associated profile for which the method is called.

<!-- todo: check this signature from the Spec against the latest API Ref topics: -->
```csharp
HRESULT ClearBrowsingDataAll(
      [in] ICoreWebView2ClearBrowsingDataCompletedHandler* handler);
```

Parameters:

* `handler` - Type: `ICoreWebView2ClearBrowsingDataCompletedHandler*`

API Reference:

* `ClearBrowsingDataAll` (C++)
* `ClearBrowsingDataAll` (C#)


<!-- ====================================================================== -->
## COREWEBVIEW2_BROWSING_DATA_KINDS enum - Kinds of data to clear

See [COREWEBVIEW2_BROWSING_DATA_KINDS enum (C++)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller4?view=webview2-1.0.1158-prerelease.md#corewebview2_browsing_data_kinds).
<!-- https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller4?view=webview2-1.0.1158-prerelease#corewebview2_browsing_data_kinds -->


<!-- ====================================================================== -->
## Example: Clearing autofill data from the last hour (C++)

This C++ example demonstrates clearing autofill data from the last hour (C++)

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

APIs from the Clear Browsing Data API that are used in the above example:

*  `ClearBrowsingDataInTimeRange`
*  `COREWEBVIEW2_BROWSING_DATA_KINDS`
*  `COREWEBVIEW2_BROWSING_DATA_KINDS_GENERAL_AUTOFILL`
*  `COREWEBVIEW2_BROWSING_DATA_KINDS_PASSWORD_AUTOSAVE`

Other APIs used above:

*  `get_Profile`
*  `ICoreWebView2ClearBrowsingDataCompletedHandler`
*  `ICoreWebView2Profile`


<!-- ====================================================================== -->
## Example: Clearing autofill data from the last hour (C#)

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

APIs from the Clear Browsing Data API that are used in the above example:

*  `CoreWebView2BrowsingDataKinds`
*  `CoreWebView2BrowsingDataKinds.GeneralAutofill`
*  `CoreWebView2BrowsingDataKinds.PasswordAutosave`
*  `profile.ClearBrowsingDataAsync`

Other APIs used above:

*  `CoreWebView2Profile`
* [CoreWebView2.Profile](/dotnet/api/microsoft.web.webview2.core.corewebview2.profile?view=webview2-dotnet-1.0.1133-prerelease)<!--https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2.profile?view=webview2-dotnet-1.0.1133-prerelease-->


<!-- ====================================================================== -->
## API Reference links

C++ Win32 API Ref:

* [API Ref: interface ICoreWebView2ExperimentalProfile4](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile4?view=webview2-1.0.1158-prerelease.md#summary).

* [COREWEBVIEW2_BROWSING_DATA_KINDS enum (C++)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller4?view=webview2-1.0.1158-prerelease.md#corewebview2_browsing_data_kinds)
<!-- https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller4?view=webview2-1.0.1158-prerelease#corewebview2_browsing_data_kinds -->


C# .NET, WinRT API Ref:

* [CoreWebView2Profile.ClearBrowsingDataAsync method (C#)](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.clearbrowsingdataasync?view=webview2-dotnet-1.0.1133-prerelease)
<!-- https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2profile.clearbrowsingdataasync?view=webview2-dotnet-1.0.1133-prerelease -->
