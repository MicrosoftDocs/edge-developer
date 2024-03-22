---
title: Using frames in WebView2 apps
description: Using frames, such as iframes, in WebView2 apps.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 11/16/2022
---
# Using frames in WebView2 apps

Frames allow you to embed other webpages into your own webpage.  A _frame_ is a sub-page or area within a webpage, like a webpage within a webpage.  

An iframe is one type of frame.  Other types of frames are `frameset`, `portal`, `embed`, `fencedFrame`, and `object`.  The main WebView2 type for frames is `CoreWebView2Frame`, which is currently enabled for top-level iframes.  Support for other types of frames is planned.

WebView2 supports APIs to interact with iframes.  You can:
* Find out when iframes are created.
* Find out when iframes are navigating to a different URL.  This works the same as state machine Navigation events for WebView2 apps.
* Communicate between the host app and iframes, sending messages in both directions.
* Allow the app to ignore the `X-Frame-Options` HTTP response header.

See also:
* [iframes](./overview-features-apis.md#iframes) in _Overview of WebView2 features and APIs_.
* [HTML <iframe\> Tag](https://www.w3schools.com/tags/tag_iframe.asp)<!-- keep escape -->


<!-- ====================================================================== -->
## Subscribe to the FrameCreated event to obtain a frame

To interact with frames in your host app, the first step is to subscribe to the `FrameCreated` event so that your host app obtains a frame object.  The `FrameCreated` event is raised whenever a new frame is created.  After your host app has obtained a frame object, use the frame object to monitor changes and interact with this specific frame.

Your host app must monitor the lifetime of a frame by subscribing to the `CoreWebView2Frame.Destroyed` event, because when the frame is destroyed, your host app can no longer reference that frame.  Frames get created and destroyed during each new webpage navigation.  Use the `CoreWebView2Frame.IsDestroyed` method to check whether the frame still exists.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.FrameCreated Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.framecreated)
   * [CoreWebView2FrameCreatedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2framecreatedeventargs)
* [CoreWebView2Frame.Destroyed Event](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.destroyed)
   * [CoreWebView2Frame.IsDestroyed Method](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.isdestroyed)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.FrameCreated Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#framecreated)
   * [CoreWebView2FrameCreatedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2framecreatedeventargs)
* [CoreWebView2Frame.Destroyed Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#destroyed)
   * [CoreWebView2Frame.IsDestroyed Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#isdestroyed)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_4::FrameCreated event (add](/microsoft-edge/webview2/reference/win32/icorewebview2_4#add_framecreated), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2_4#remove_framecreated)
   * [ICoreWebView2FrameCreatedEventArgs interface](/microsoft-edge/webview2/reference/win32/icorewebview2framecreatedeventargs)
* [ICoreWebView2Frame::Destroyed event (add](/microsoft-edge/webview2/reference/win32/icorewebview2frame#add_destroyed), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2frame#remove_destroyed)
   * [ICoreWebView2Frame::IsDestroyed method](/microsoft-edge/webview2/reference/win32/icorewebview2frame#isdestroyed)

---

See also:
* [iframes](./overview-features-apis.md#iframes) in _Overview of WebView2 features and APIs_.


<!-- ====================================================================== -->
## Navigating within a frame

After a frame is created, the frame navigates to the frame's source URL.  iframes use navigation and navigation events, such as `FrameNavigationStarting` and `NavigationCompleted`.  When the frame navigates to the source URL, the following navigation events are raised:

* `NavigationStarting`
* `ContentLoading`
* `HistoryChanged`
* `DOMContentLoaded`
* `NavigationCompleted`


<!-- ------------------------------ -->
#### Frequency of navigating within a frame

Navigation can potentially happen within a frame.  As a simple use case, an `iframe` element's `source` attribute is a URL, such as **wikipedia.com**, and the URL is loaded in an iframe.  Usually the navigation happens immediately after the frame is created.  The `ContentLoading`, `DOMContentLoaded`, and `NavigationCompleted` events are then raised.

The frame itself is navigating.  A webpage navigates to a URL.  Similarly, a frame potentially navigates.

After the frame is created, the frame navigates as driven by your host app.  To monitor what's going on in the main page, events such as `NavigationStarting`, `NavigationCompleted`, and `HistoryChanged` enable the host app to navigate back and forth among frames or webpages.  Frames are navigated to a new URL less often than webpages, but the same navigation style is supported.  The user usually cannot navigate inside a frame, although JavaScript enables that; a frame is usually static regarding navigation.

See also:
* [Standard sequence of events](./navigation-events.md#standard-sequence-of-events) in _Navigation events for WebView2 apps_.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.AddScriptToExecuteOnDocumentCreatedAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.addscripttoexecuteondocumentcreatedasync) - This method can be used for an iframe as well as for a webpage.  Your script must check whether it's in an iframe.

Navigation events:
* [CoreWebView2Frame.NavigationStarting Event](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.navigationstarting)
   * [CoreWebView2.FrameNavigationStarting Event (superseded)](/dotnet/api/microsoft.web.webview2.core.corewebview2.framenavigationstarting)
* [CoreWebView2.SourceChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.sourcechanged)
* [CoreWebView2Frame.ContentLoading Event](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.contentloading)
* [CoreWebView2.HistoryChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.historychanged)
* [CoreWebView2.BasicAuthenticationRequested Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.basicauthenticationrequested)
* [CoreWebView2Frame.DOMContentLoaded](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.domcontentloaded)
* [CoreWebView2Frame.NavigationCompleted Event](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.navigationcompleted)
   * [CoreWebView2.FrameNavigationCompleted Event (superseded)](/dotnet/api/microsoft.web.webview2.core.corewebview2.framenavigationcompleted)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.AddScriptToExecuteOnDocumentCreatedAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#addscripttoexecuteondocumentcreatedasync) - This method can be used for an iframe as well as for a webpage.  Your script must check whether it's in an iframe.

Navigation events:
* [CoreWebView2Frame.NavigationStarting Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#navigationstarting)
   * [CoreWebView2.FrameNavigationStarting Event (superseded)](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#framenavigationstarting)
* [CoreWebView2.SourceChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#sourcechanged)
* [CoreWebView2Frame.ContentLoading Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#contentloading)
* [CoreWebView2.HistoryChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#historychanged)
* [CoreWebView2.BasicAuthenticationRequested Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#basicauthenticationrequested)
* [CoreWebView2.DOMContentLoaded Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#domcontentloaded)
* [CoreWebView2Frame.NavigationCompleted Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#navigationcompleted)
   * [CoreWebView2.FrameNavigationCompleted Event (superseded)](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#framenavigationcompleted)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2AddScriptToExecuteOnDocumentCreatedCompletedHandler interface](/microsoft-edge/webview2/reference/win32/icorewebview2addscripttoexecuteondocumentcreatedcompletedhandler)
* [ICoreWebView2::AddScriptToExecuteOnDocumentCreated method](/microsoft-edge/webview2/reference/win32/icorewebview2#addscripttoexecuteondocumentcreated) - This method can be used for an iframe as well as for a webpage.  Your script must check whether it's in an iframe.

Navigation events:
* [ICoreWebView2Frame2::NavigationStarting event (add](/microsoft-edge/webview2/reference/win32/icorewebview2frame2#add_navigationstarting), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2frame2#remove_navigationstarting)
   * [ICoreWebView2::FrameNavigationStarting event (superseded) (add](/microsoft-edge/webview2/reference/win32/icorewebview2#add_framenavigationstarting), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_framenavigationstarting)
* [ICoreWebView2::SourceChanged event (add](/microsoft-edge/webview2/reference/win32/icorewebview2#add_sourcechanged), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_sourcechanged)
* [ICoreWebView2::ContentLoading event (add](/microsoft-edge/webview2/reference/win32/icorewebview2#add_contentloading), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_contentloading)
   * [ICoreWebView2Frame2::ContentLoading event (add](/microsoft-edge/webview2/reference/win32/icorewebview2frame2#add_contentloading), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2frame2#remove_contentloading)<!--todo: move up, over? is non-frame event superseded?-->
* [ICoreWebView2::HistoryChanged event (add](/microsoft-edge/webview2/reference/win32/icorewebview2#add_historychanged), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_historychanged)
* [ICoreWebView2_10::BasicAuthenticationRequested event (add](/microsoft-edge/webview2/reference/win32/icorewebview2_10#add_basicauthenticationrequested), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2_10#remove_basicauthenticationrequested)
* [ICoreWebView2_2::DOMContentLoaded event (add](/microsoft-edge/webview2/reference/win32/icorewebview2_2#add_domcontentloaded), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2_2#remove_domcontentloaded)
   * [ICoreWebView2Frame2::DOMContentLoaded event (add](/microsoft-edge/webview2/reference/win32/icorewebview2frame2#add_domcontentloaded), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2frame2#remove_domcontentloaded)<!--todo: move up, over? is non-frame event superseded?-->
* [ICoreWebView2Frame2::NavigationCompleted event (add](/microsoft-edge/webview2/reference/win32/icorewebview2frame2#add_navigationcompleted), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2frame2#remove_navigationcompleted)
   * [ICoreWebView2::FrameNavigationCompleted event (superseded) (add](/microsoft-edge/webview2/reference/win32/icorewebview2#add_framenavigationcompleted), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_framenavigationcompleted)

---

Regarding the duplicated equivalent `NavigationStarting` and `NavigationCompleted` events, the events on `CoreWebView2Frame` are recommended rather than the equivalent, superseded events on `CoreWebView2`, because the `CoreWebView2Frame` type supports more scenarios to allow interactions with frames.

See also:
* [Standard sequence of events](./navigation-events.md) in _Navigation events for WebView2 apps_.
* [Navigation events](./overview-features-apis.md#navigation-events) in _Overview of WebView2 features and APIs_.
* [Block unwanted navigating](./overview-features-apis.md#block-unwanted-navigating) in _Overview of WebView2 features and APIs_.


<!-- ====================================================================== -->
## Using host objects in an iframe

To communicate between the native side of the host app and JavaScript that's in an iframe, use host objects.  A _host object_ is an object that you create in the host app and then use from JavaScript code in the webpage side of the app.

Using native-side APIs from script within a frame, via a host object, is similar to web/native interop page structure as explained in [Call native-side code from web-side code](../how-to/hostobject.md):

To use host objects within an iframe:
1. Define the host object and implement `IDispatch`.
1. Add the host object on the native side by using `AddHostObjectToScriptWithOrigins` (Win32) or `AddHostObjectToScript` (.NET).
1. From JavaScript in your web-side code, access this host object by using `chrome.webview.hostObjects.<name>` API.

To access and control native-side objects from web-side JavaScript in a frame, use `AddHostObjectToScriptWithOrigins` (Win32) or `CoreWebView2Frame.AddHostObjectToScript` (.NET), which has an `origins` parameter.  The `origins` parameter specifies which URLs iframes will be allowed to access, for security reasons.  This parameter identifies the URLs for which iframes will have access to the host object.

If the frame is navigated to a URL that is not in the `origins` list, the frame won't be able to operate the host object; the frame won't be able to read or write any properties.
See the **Method name** table in the `AddHostObjectToScript` method for your framework.  See the following two rows:
* `applyHostFunction`, `getHostProperty`, and `setHostProperty`.
* `getLocalProperty` and `setLocalProperty`.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Frame.AddHostObjectToScript Method](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.addhostobjecttoscript) - has an `origins` parameter.  The documentation doesn't have a **Method name** table.

The above method works like the following method:
* [CoreWebView2.AddHostObjectToScript Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.addhostobjecttoscript).  See the **Method name** table.  Read both of these API Reference topics, although for frames, you would use the method which supports an `origins` parameter instead.

##### [WinRT/C#](#tab/winrtcsharp)

<!-- TODO -->
Not implemented yet.

<!-- * [CoreWebView2Frame.AddHostObjectToScript Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#addhostobjecttoscript) - has an `origins` parameter.
* [CoreWebView2Frame.RemoveHostObjectFromScript Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#removehostobjectfromscript) -->

<!-- The above method works like the following method: -->
<!-- * [CoreWebView2.AddHostObjectToScript Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#addhostobjecttoscript).  See the **Method name** table.  Read both of these API Reference topics, although for frames, you would use the method which supports an `origins` parameter instead. -->

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Frame::AddHostObjectToScriptWithOrigins method](/microsoft-edge/webview2/reference/win32/icorewebview2frame#addhostobjecttoscriptwithorigins) - has an `origins` parameter.  The documentation doesn't have a **Method name** table.

The above method works like the following method:
* [ICoreWebView2::AddHostObjectToScript method](/microsoft-edge/webview2/reference/win32/icorewebview2#addhostobjecttoscript).  See the **Method name** table.  Read both of these API Reference topics, although for frames, you would use the method which supports an `origins` parameter instead.

---

<!-- ------------------------------ -->
#### Example code

See [Step 6: Call AddHostObjectToScript to pass the host object to web-side code](../how-to/hostobject.md#step-6-call-addhostobjecttoscript-to-pass-the-host-object-to-web-side-code) in _Call native-side code from web-side code_.


See also:
* [Host/web object sharing](./overview-features-apis.md#hostweb-object-sharing) in _Overview of WebView2 features and APIs_.


<!-- ====================================================================== -->
## Sending and receiving messages

Messages can be sent between the native app and JavaScript code that's in an iframe:
*  You can send messages from JavaScript in an iframe in an HTML page to the host app.
*  You can send messages from the host app to JavaScript in an iframe in an HTML page.


#### Sending web messages from an iframe to the host app

To send web messages from an iframe to the host app, use the `window.chrome.webview.postMessage` method:

```javascript
window.chrome.webview.postMessage(`SetTitleText ${titleText.value}`);
```

To receive these messages in the host app, the host app must subscribe to the `WebMessageReceived event`.


#### Sending messages from the host app to the iframe

The host app sends messages to the iframe by calling the `PostWebMessageAsJson` or `PostWebMessageAsString` method.

The iframe receives the message by subscribing to the `window.chrome.webview.addEventListener('message')` event, as follows:

```javascript
window.chrome.webview.addEventListener('message', arg => {
    // implement event listener here
});
```

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Frame.WebMessageReceived Event](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.webmessagereceived)
* [CoreWebView2Frame.PostWebMessageAsJson Method](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.postwebmessageasjson)
* [CoreWebView2Frame.PostWebMessageAsString Method](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.postwebmessageasstring)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Frame.WebMessageReceived Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#webmessagereceived)
* [CoreWebView2Frame.PostWebMessageAsJson Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#postwebmessageasjson)
* [CoreWebView2Frame.PostWebMessageAsString Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#postwebmessageasstring)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Frame2::WebMessageReceived event (add](/microsoft-edge/webview2/reference/win32/icorewebview2frame2#add_webmessagereceived), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2frame2#remove_webmessagereceived)
* [ICoreWebView2Frame2::PostWebMessageAsJson method](/microsoft-edge/webview2/reference/win32/icorewebview2frame2#postwebmessageasjson)
* [ICoreWebView2Frame2::PostWebMessageAsString method](/microsoft-edge/webview2/reference/win32/icorewebview2frame2#postwebmessageasstring)

---

See also:
* [Interop of native-side and web-side code](/microsoft-edge/webview2/how-to/communicate-btwn-web-native)
* [Web messaging](./overview-features-apis.md#web-messaging) in _Overview of WebView2 features and APIs_.


<!-- 
#### JavaScript API Reference

TODO: link when exists.
* `window.chrome.webview.postMessage`
* `window.chrome.webview.addEventListener('message')`

[PR 2315: WebView2 JavaScript Reference Docs](https://github.com/MicrosoftDocs/edge-developer/pull/2315)
-->


<!-- ====================================================================== -->
## Run JavaScript code in iframes by using ExecuteScript

A WebView2 app can run any JavaScript in a frame, by using `ExecuteScript`.

In order for script to be run in an iframe, an execution context must be created.  An execution context is created after the `ContentLoading` event, that's why if `ExecuteScript` is called before the `ContentLoading` event is raised, the script will not be run and the string `null` will be returned.

For information about the `ContentLoading` event, see [Navigation events for WebView2 apps](./navigation-events.md), which is valid for frames as well as webpages.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Frame.ExecuteScriptAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.executescriptasync)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Frame.ExecuteScriptAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#executescriptasync)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Frame2::ExecuteScript](/microsoft-edge/webview2/reference/win32/icorewebview2frame2#executescript)
* [interface ICoreWebView2ExecuteScriptCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2executescriptcompletedhandler)

---

See also:
* [Script execution](./overview-features-apis.md#script-execution) in _Overview of WebView2 features and APIs_.


<!-- ====================================================================== -->
## Modifying network events by using the `WebResourceRequested` event in iframes

![This feature is experimental](./frames-images/experimental-tag.png)

For iframes, you can listen to network events and modify them, by using the `WebResourceRequested` event.

See also:
* [Manage network requests in WebView2](./overview-features-apis.md#manage-network-requests-in-webview2) in _Overview of WebView2 features and APIs_.
* [Custom management of network requests](../how-to/webresourcerequested.md)
* [Experimental APIs for 1.0.1222-prerelease](../release-notes/archive.md#experimental-apis-for-101222-prerelease) in _Archived Release Notes for the WebView2 SDK_.


##### [.NET/C#](#tab/dotnetcsharp)

See the latest prerelease APIs.  The following links contain `1.0.1466-prerelease`.  In the **Version** dropdown list in the upper left of the API Reference docs, select the latest prerelease.

<!-- keep ?view as long as experimental-only.  keep # updated. -->

* [CoreWebView2.AddWebResourceRequestedFilter(uri, resourceContext, requestSourceKinds) Method Overload](/dotnet/api/microsoft.web.webview2.core.corewebview2.addwebresourcerequestedfilter?view=webview2-dotnet-1.0.1466-prerelease&preserve-view=true#microsoft-web-webview2-core-corewebview2-addwebresourcerequestedfilter(system-string-microsoft-web-webview2-core-corewebview2webresourcecontext-microsoft-web-webview2-core-corewebview2webresourcerequestsourcekinds))<!--keep parentheses for specific overload--> - To subscribe to network requests that belong to an iframe, you must use this overload and use `Document` as the value of the `requestSourceKinds` parameter.<!--keep this note-->
   * [CoreWebView2WebResourceRequestSourceKinds Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2webresourcerequestsourcekinds?view=webview2-dotnet-1.0.1466-prerelease&preserve-view=true)
* [CoreWebView2.RemoveWebResourceRequestedFilter(uri, resourceContext, requestSourceKinds) Method Overload](/dotnet/api/microsoft.web.webview2.core.corewebview2.removewebresourcerequestedfilter?view=webview2-dotnet-1.0.1466-prerelease&preserve-view=true#microsoft-web-webview2-core-corewebview2-removewebresourcerequestedfilter(system-string-microsoft-web-webview2-core-corewebview2webresourcecontext-microsoft-web-webview2-core-corewebview2webresourcerequestsourcekinds))<!--keep parentheses for specific overload-->
* [CoreWebView2WebResourceRequestedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2webresourcerequestedeventargs?view=webview2-dotnet-1.0.1466-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

See the latest prerelease APIs.  The following links contain `1.0.1466-prerelease`.  In the **Version** dropdown list in the upper left of the API Reference docs, select the latest prerelease.

<!-- keep ?view as long as experimental-only.  keep # updated. -->

* [CoreWebView2.AddWebResourceRequestedFilter(uri, resourceContext, requestSourceKinds) Method Overload](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1466-prerelease&preserve-view=true#addwebresourcerequestedfilter)<!--this is the correct overload; lacks -1 in url; valid for view=prerelease--> - To subscribe to network requests that belong to an iframe, you must use this overload and use `Document` as the value of the `requestSourceKinds` parameter.<!--keep this note-->
   * [CoreWebView2WebResourceRequestSourceKinds Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2webresourcerequestsourcekinds?view=webview2-winrt-1.0.1466-prerelease&preserve-view=true)
* [CoreWebView2.RemoveWebResourceRequestedFilter(uri, resourceContext, requestSourceKinds) Method Overload](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1466-prerelease&preserve-view=true#removewebresourcerequestedfilter)<!--this is the correct overload; lacks -1 in url-->
* [CoreWebView2WebResourceRequestedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2webresourcerequestedeventargs?view=webview2-winrt-1.0.1466-prerelease&preserve-view=true)

##### [Win32/C++](#tab/win32cpp)

<!-- for win32, "Experimental" links automatically go to latest view -->

* [ICoreWebView2Experimental16.AddWebResourceRequestedFilterWithRequestSourceKinds method](/microsoft-edge/webview2/reference/win32/icorewebview2experimental16#addwebresourcerequestedfilterwithrequestsourcekinds) - To subscribe to network requests that belong to an iframe, you must use this `...WithRequestSourceKinds` method and use `COREWEBVIEW2_WEB_RESOURCE_REQUEST_SOURCE_KINDS_DOCUMENT` as the value of the `requestSourceKinds` parameter.<!--keep this note-->
   * [COREWEBVIEW2_WEB_RESOURCE_REQUEST_SOURCE_KINDS enum](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller4#corewebview2_web_resource_request_source_kinds)
* [ICoreWebView2Experimental16.RemoveWebResourceRequestedFilterWithRequestSourceKinds method](/microsoft-edge/webview2/reference/win32/icorewebview2experimental16#removewebresourcerequestedfilterwithrequestsourcekinds)
* [ICoreWebView2ExperimentalWebResourceRequestedEventArgs interface](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalwebresourcerequestedeventargs)

<!-- 
TODO: at next SDK release early December 2022, update enum link when it changes to a Globals page section/anchor eg:
https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.1418.22
https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.1418.22
-->

---


<!-- ====================================================================== -->
## Ignoring X-Frame-Options to render a webpage inside of a frame

The `X-Frame-Options` HTTP response header is used by webpages to prevent an application from rendering that webpage inside of a frame.  The `AdditionalAllowedFrameAncestors` property allows your application to bypass the `X-Frame-Options` header, to render the webpage inside a frame.

See also:
* [X-Frame-Options](https://developer.mozilla.org/docs/Web/HTTP/Headers/X-Frame-Options)

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2NavigationStartingEventArgs.AdditionalAllowedFrameAncestors Property](/dotnet/api/microsoft.web.webview2.core.corewebview2navigationstartingeventargs.additionalallowedframeancestors)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2NavigationStartingEventArgs.AdditionalAllowedFrameAncestors Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2navigationstartingeventargs)

##### [Win32/C++](#tab/win32cpp)

[ICoreWebView2NavigationStartingEventArgs2::put_AdditionalAllowedFrameAncestors property (get](/microsoft-edge/webview2/reference/win32/icorewebview2navigationstartingeventargs2#get_additionalallowedframeancestors), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2navigationstartingeventargs2#put_additionalallowedframeancestors)

---


<!-- ====================================================================== -->
## Example of using iframes in a host app

This sample code shows how to use frame APIs, including:
* `FrameCreated`
   * `CoreWebView2FrameCreatedEventArgs`
* `DOMContentLoaded`
   * `CoreWebView2DOMContentLoadedEventArgs`
* `ExecuteScript`

##### [.NET/C#](#tab/dotnetcsharp)

This sample code is condensed from [MainWindow.xaml.cs](https://github.com/MicrosoftEdge/WebView2Samples/blob/main/SampleApps/WebView2WpfBrowser/MainWindow.xaml.cs#L842-L878) in the **WebView2WpfBrowser** sample.

```csharp
        void DOMContentLoadedCmdExecuted(object target, ExecutedRoutedEventArgs e)
        {
            // Subscribe to the FrameCreated event to obtain the frame object when 
            // it's created.
            webView.CoreWebView2.FrameCreated += WebView_FrameCreatedDOMContentLoaded;
            webView.NavigateToString(@"<!DOCTYPE html>" +
                                      "<h1>DOMContentLoaded sample page</h1>" +
                                      "<h2>The content to the iframe and below will be added after DOM content is loaded </h2>" +
                                      "<iframe style='height: 200px; width: 100%;'/>");
        }

        void WebView_FrameCreatedDOMContentLoaded(object sender, CoreWebView2FrameCreatedEventArgs args)
        {
            // In order for ExecuteScriptAsync to successfully run inside the iframe, 
            // subscribe to the ContentLoading or DOMContentLoaded event.  Once these 
            // events are raised, you can call ExecuteScriptAsync.
            args.Frame.DOMContentLoaded += (frameSender, DOMContentLoadedArgs) =>
            {
                args.Frame.ExecuteScriptAsync(
                    "let content = document.createElement(\"h2\");" +
                    "content.style.color = 'blue';" +
                    "content.textContent = \"This text was added to the iframe by the host app\";" +
                    "document.body.appendChild(content);");
            };
        }
```

##### [WinRT/C#](#tab/winrtcsharp)

<!-- TODO -->
In progress.

##### [Win32/C++](#tab/win32cpp)

This example code is copied from [ICoreWebView2Frame2::ExecuteScript method](/microsoft-edge/webview2/reference/win32/icorewebview2frame2#executescript).

```cpp
wil::com_ptr<ICoreWebView2_4> webview2_4 = m_webView.try_query<ICoreWebView2_4>();
if (webview2_4)
{
    // Subscribe to the FrameCreated event to obtain the frame object when it's created.
    CHECK_FAILURE(webview2_4->add_FrameCreated(
        Callback<ICoreWebView2FrameCreatedEventHandler>(
            [](ICoreWebView2* sender, ICoreWebView2FrameCreatedEventArgs* args) -> HRESULT {
                wil::com_ptr<ICoreWebView2Frame> webviewFrame;
                CHECK_FAILURE(args->get_Frame(&webviewFrame));
                // DOMContentLoaded event was introduced in ICoreWebView2Frame2 interface.
                // So in order to have access to this interface, query ICoreWebView2Frame2
                // from ICoreWebView2Frame.
                wil::com_ptr<ICoreWebView2Frame2> frame2 =
                    webviewFrame.try_query<ICoreWebView2Frame2>();
                if (frame2)
                {
                        // In order for ExecuteScript to successfully run inside the
                        // iframe, subscribe to the ContentLoading or DOMContentLoaded
                        // event.  Once these events are raised, you can call ExecuteScript.
                        frame2->add_DOMContentLoaded(
                        Callback<ICoreWebView2FrameDOMContentLoadedEventHandler>(
                            [](ICoreWebView2Frame* frame,
                                ICoreWebView2DOMContentLoadedEventArgs* args) -> HRESULT {
                                wil::com_ptr<ICoreWebView2Frame2> frame2;
                                frame->QueryInterface(IID_PPV_ARGS(&frame2));
                                frame2->ExecuteScript(
                                    LR"~(
                                    let content = document.createElement("h2");
                                    content.style.color = 'blue';
                                    content.textContent = "This text was added to the iframe by the host app";
                                    document.body.appendChild(content);
                                    )~",
                                    Callback<ICoreWebView2ExecuteScriptCompletedHandler>(
                                        [](HRESULT error, PCWSTR result) -> HRESULT {
                                            // Handle ExecuteScript error and result here if needed
                                            // or pass nullptr as callback parameter otherwise.
                                            return S_OK;
                                        })
                                        .Get());
                                return S_OK;
                            })
                            .Get(),
                        NULL);
                }
                return S_OK;
            })
            .Get(),
        &m_frameCreatedToken));
}
```

---


<!-- ====================================================================== -->
## API Reference overview

The following features, listed in [Overview of WebView2 features and APIs](./overview-features-apis.md), include frame-related APIs:

* [Host/web object sharing](./overview-features-apis.md#hostweb-object-sharing)
* [iframes](./overview-features-apis.md#iframes)<!--same link is in h2 "Subscribing to the FrameCreated event" above-->
* [Script execution](./overview-features-apis.md#script-execution)<!--same link is in h2 "Running JavaScript code in iframes by using ExecuteScript" above-->
* [Web messaging](./overview-features-apis.md#web-messaging)<!--link doesn't exist in an h2 section above-->
* [Permissions](./overview-features-apis.md#permissions)<!--link doesn't exist in an h2 section above-->
* [Block unwanted navigating](./overview-features-apis.md#block-unwanted-navigating)<!--same link is in h2 "Navigation and navigation events" above-->
* [Navigation events](./overview-features-apis.md#navigation-events)<!--same link is in h2 "Navigation and navigation events" above-->


<!-- ====================================================================== -->
## See also

* [Call native-side code from web-side code](../how-to/hostobject.md)
* [Navigation events for WebView2 apps](./navigation-events.md) - valid for frames as well as webpages.

**External pages:**
* [HTML <iframe\> Tag](https://www.w3schools.com/tags/tag_iframe.asp)<!-- keep escape -->
