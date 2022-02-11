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

The Clear Browsing Data API allows you to clear the browsing data that is stored in the user data folder of a WebView2 app.

By using this API to clear browsing data that's in the user data folder, you can specify parts of the data (kinds of data) to clear.  

In C++, these are three function names.

In C#, these are three overloads of a method of `CoreWebView2Profile`.

This API allows you to clear the browsing data programmatically, specifying which kinds of data to clear.

Each of the functions in this API enable you to:
*  Clear data for a specified profile.
*  Clear space in the user data folder.
*  Clear the cache. <!--maybe delete-->
*  Clear autofill data. <!--maybe delete-->

<!-- [pre-release spec for Clear Browsing Data API Reference](https://github.com/MicrosoftEdge/WebView2Feedback/blob/master/specs/ClearBrowsingData.md) -->
<!-- prefix removed from API Ref urls: https://docs.microsoft.com/en-us/ -->

<!--
Tab headings:
## [C++](#tab/cpp/)
## [C#](#tab/csharp/)
---
-->


<!-- ====================================================================== -->
## Overview of the API functions

The Clear Browser Data API consists of the following C++ methods or C# (.NET) method overloads.  These methods clear the data from the user data folder for the associated profile for which the method is called.  The distinctive aspect of each method (or method overload) is as follows:

| C++ method | C# method overload | Description |
|---|---|---|
| [ClearBrowsingData](#clearbrowsingdata---clears-the-specified-kind-of-browsing-data-regardless-of-the-timestamp) | `ClearBrowsingDataAsync()` | Clears the specified data kind, regardless of when the data was created. |
| [ClearBrowsingDataInTimeRange](#clearbrowsingdataintimerange---clears-browsing-data-within-the-specified-time-range) | `ClearBrowsingDataAsync(CoreWebView2BrowsingDataKinds)` | Only clears the data that was created between the start time and end time. |
| [ClearBrowsingDataAll](#clearbrowsingdataall---clears-all-browsing-data) | `ClearBrowsingDataAsync(CoreWebView2BrowsingDataKinds, DateTime, DateTime)` | Clears each kind of data that's listed in the [COREWEBVIEW2_BROWSING_DATA_KINDS](#corewebview2browsing_data_kinds-enum---kinds-of-data-to-clear) enum, regardless of when the data was created. |


<!-- ====================================================================== -->
## ClearBrowsingData - Clears the specified kind of browsing data, regardless of the timestamp

<!-- function 1 -->

<!--summary sentence to bubble up to Overview table-->
Clears the specified data kind, regardless of when the data was created.

Clears the data from the user data folder for the associated profile for which the method is called.

<!-- ------------------------------ -->
C++ method signature:

<!-- todo: check this signature from the Spec against the latest API Ref topics: -->
```cpp
HRESULT ClearBrowsingData(
      [in] COREWEBVIEW2_BROWSING_DATA_KINDS dataKinds,
      [in] [ICoreWebView2ClearBrowsingDataCompletedHandler*](#ICoreWebView2ClearBrowsingDataCompletedHandler) handler); 
```

<!-- ------------------------------ -->
C++ parameters:

* `dataKinds` - The data types to clear.

   * Type: [COREWEBVIEW2_BROWSING_DATA_KINDS enum](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller4#corewebview2_browsing_data_kinds)

* `handler` - A handler which indicates if the proper data has been cleared successfully.

   * Type: [ICoreWebView2ClearBrowsingDataCompletedHandler interface)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalclearbrowsingdatacompletedhandler)


<!-- ------------------------------ -->
C++ API Reference:

* [ClearBrowsingData method](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile4#clearbrowsingdata)

Equivalent C# API Reference:

* [ClearBrowsingDataAsync()](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.clearbrowsingdataasync#microsoft-web-webview2-core-corewebview2profile-clearbrowsingdataasync)


<!-- ====================================================================== -->
## Clear browsing data within a specified time range

<!-- function 2 -->

<!--summary sentence to bubble up to Overview table-->
Only clears the data that was created between the start time and end time.

Clears the data from the user data folder for the associated profile for which the method is called.

C++ method signature:

```cpp
HRESULT ClearBrowsingDataInTimeRange(
      [in] COREWEBVIEW2_BROWSING_DATA_KINDS dataKinds, 
      [in] double startTime,
      [in] double endTime, 
      [in] ICoreWebView2ClearBrowsingDataCompletedHandler* handler);
```

<!-- ------------------------------ -->
C++ parameters:

* `dataKinds` - 

   *  Type: [COREWEBVIEW2_BROWSING_DATA_KINDS enum](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller4#corewebview2_browsing_data_kinds).

* `startTime` - The start time for which the API should clear the corresponding data.  How many seconds have passed since the UNIX epoch.

   *  Type: `double`.

   *  Passing in a value of zero or less than zero (up to negative infinity) will clear the corresponding data for any time before the `endTime`.
   
   *  Passing in a value of the current time or greater (up to positive infinity) will clear the corresponding data for any time after the `startTime`.
   
   For example, passing in negative infinity and positive infinity as the time parameters will clear the entirety of the corresponding data. The timestamp represents the time at which the data was created. 
   
* `endTime` - The end time for which the API should clear the corresponding data.  How many seconds have passed since the UNIX epoch.  See `startTime`.

   *  Type: `double`.

* `handler` - Handler.

   *  Type: `ICoreWebView2ClearBrowsingDataCompletedHandler*`.  A pointer to [ICoreWebView2ClearBrowsingDataCompletedHandler interface)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalclearbrowsingdatacompletedhandler).


<!-- ------------------------------ -->
C++ API Reference:

* [ClearBrowsingDataInTimeRange](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile4#clearbrowsingdataintimerange)

Equivalent C# API Reference:

* [ClearBrowsingDataAsync(CoreWebView2BrowsingDataKinds)](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.clearbrowsingdataasync#microsoft-web-webview2-core-corewebview2profile-clearbrowsingdataasync(microsoft-web-webview2-core-corewebview2browsingdatakinds))


<!-- ====================================================================== -->
## ClearBrowsingDataAll - Clears all browsing data

<!-- function 3 -->

<!--summary sentence to bubble up to Overview table-->
Clears each kind of data that's listed in the `COREWEBVIEW2_BROWSING_DATA_KINDS` enum, regardless of when the data was created.

Clears the data from the user data folder for the associated profile for which the method is called.

<!-- ------------------------------ -->
C++ method signature:

```cpp
HRESULT ClearBrowsingDataAll(
      [in] ICoreWebView2ClearBrowsingDataCompletedHandler* handler);
```

<!-- ------------------------------ -->
C++ parameters:

* `handler` - Handler.

   *  Type: `ICoreWebView2ClearBrowsingDataCompletedHandler*`.  A pointer to [ICoreWebView2ClearBrowsingDataCompletedHandler interface)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalclearbrowsingdatacompletedhandler).


<!-- ------------------------------ -->
C++ API Reference:

* [ClearBrowsingDataAll](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile4#clearbrowsingdataall)

Equivalent C# API Reference:

* [ClearBrowsingDataAsync(CoreWebView2BrowsingDataKinds, DateTime, DateTime)](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.clearbrowsingdataasync#microsoft-web-webview2-core-corewebview2profile-clearbrowsingdataasync(microsoft-web-webview2-core-corewebview2browsingdatakinds-system-datetime-system-datetime))


<!-- ====================================================================== -->
## Enum of kinds of data to clear

C++: [COREWEBVIEW2_BROWSING_DATA_KINDS enum](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller4#corewebview2_browsing_data_kinds).

C#: [CoreWebView2BrowsingDataKinds Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2browsingdatakinds)


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

C++ APIs from the Clear Browsing Data API that are used in the above example:

* [ClearBrowsingDataInTimeRange](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile4#clearbrowsingdataintimerange)
* [COREWEBVIEW2_BROWSING_DATA_KINDS enum](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller4#corewebview2_browsing_data_kinds)
   *  `COREWEBVIEW2_BROWSING_DATA_KINDS_GENERAL_AUTOFILL`
   *  `COREWEBVIEW2_BROWSING_DATA_KINDS_PASSWORD_AUTOSAVE`

Other C++ APIs used above:

*  `get_Profile` <!-- not found-->
*  `ICoreWebView2ClearBrowsingDataCompletedHandler` - See [interface ICoreWebView2ExperimentalClearBrowsingDataCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalclearbrowsingdatacompletedhandler)
*  `ICoreWebView2Profile` - See [ICoreWebView2ExperimentalProfile2 interface](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile2)


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

C# Clear Browsing Data API items that are used in the above example:

*  C#: [CoreWebView2BrowsingDataKinds Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2browsingdatakinds)
   * `CoreWebView2BrowsingDataKinds.GeneralAutofill`
   * `CoreWebView2BrowsingDataKinds.PasswordAutosave`
*  C#: [ClearBrowsingDataAsync(CoreWebView2BrowsingDataKinds, DateTime, DateTime)](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.clearbrowsingdataasync#microsoft-web-webview2-core-corewebview2profile-clearbrowsingdataasync(microsoft-web-webview2-core-corewebview2browsingdatakinds-system-datetime-system-datetime))

Other APIs used above:

* C#: [CoreWebView2Profile Class](/dotnet/api/microsoft.web.webview2.core.corewebview2profile)
* C#: [CoreWebView2.Profile Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.profile)


<!-- ====================================================================== -->
## API Reference links


### C++

Interfaces:

* `ICoreWebView2Profile` - See [ICoreWebView2ExperimentalProfile2 interface](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile2)

* `ICoreWebView2ClearBrowsingDataCompletedHandler` - See [interface ICoreWebView2ExperimentalClearBrowsingDataCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalclearbrowsingdatacompletedhandler)


Methods (one page):

* [ClearBrowsingData](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile4#clearbrowsingdata)
* [ClearBrowsingDataAll](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile4#clearbrowsingdataall)
* [ClearBrowsingDataInTimeRange](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile4#clearbrowsingdataintimerange)

Enum:

* [COREWEBVIEW2_BROWSING_DATA_KINDS enum](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller4#corewebview2_browsing_data_kinds)


<!-- ------------------------------ -->
### C#

Namespace:

* [Microsoft.Web.WebView2.Core Namespace](/dotnet/api/microsoft.web.webview2.core)

Class:

* [CoreWebView2Profile Class](/dotnet/api/microsoft.web.webview2.core.corewebview2profile)

Method (three overloads):

* [ClearBrowsingDataAsync()](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.clearbrowsingdataasync#microsoft-web-webview2-core-corewebview2profile-clearbrowsingdataasync)
* [ClearBrowsingDataAsync(CoreWebView2BrowsingDataKinds)](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.clearbrowsingdataasync#microsoft-web-webview2-core-corewebview2profile-clearbrowsingdataasync(microsoft-web-webview2-core-corewebview2browsingdatakinds))
* [ClearBrowsingDataAsync(CoreWebView2BrowsingDataKinds, DateTime, DateTime)](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.clearbrowsingdataasync#microsoft-web-webview2-core-corewebview2profile-clearbrowsingdataasync(microsoft-web-webview2-core-corewebview2browsingdatakinds-system-datetime-system-datetime))

Enum:

* [CoreWebView2BrowsingDataKinds Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2browsingdatakinds)
