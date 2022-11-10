---
title: Using frames in WebView2 apps
description: Using frames, such as iframes, in WebView2 apps.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 11/09/2022
---
# Using frames in WebView2 apps

<!-- todo
In hostobjects.md, extend the article by adding an iframes example in C# and in Win32/C++.

iframes overview: c# and win32  - execute script scenario example
-->

Frames allow you to embed other webpages into your own webpage.  A _frame_ is a sub-page or area within a webpage, like a webpage within a webpage.  

An iframe is one type of frame.  Other types of frames are `frameset`, `portal`, `embed`, `fencedFrame`, and `object`.  The main WebView2 type for frames is `CoreWebView2Frame`, which is currently enabled for top-level iframes.  Support for other types of frames is planned.

WebView2 supports APIs to interact with iframes.  You can:
* Find out when iframes are created.
* Find out when iframes are navigating to a different URL.  This works the same as state machine Navigation events for WebView2 apps.
* Communicate between the host app and iframes, sending messages in both directions.
* Allow the app to ignore the `X-Frame-Options` HTTP response header.

An API is required for WebView2 for frames, because you can't create a WebView2 frame object from the host app.  This API is required, for the app to be able to interact with frames, which are transient.  Without this API, WebView2 wouldn't have access to frames.  For example, `ExecuteScript` requires obtaining the frame object, to interact with the frame.


<!-- ====================================================================== -->
## Subscribe to the FrameCreated event to obtain a frame
<!-- 
## Starting work with frames 
## Starting work with frames by subscribing to the FrameCreated event to obtain a frame
## Subscribing to the FrameCreated event to obtain a frame -->

To interact frames in your host app, the first step is to subscribe to the `FrameCreated` event so that your host app obtains a frame object.  The `FrameCreated` event is raised whenever a new frame is created.  After your host app has obtained a frame object, use the frame object to monitor changes and interact with this specific frame.

Your host app must monitor the lifetime of a frame by subscribing to the `CoreWebView2Frame.Destroyed` event, because when the frame is destroyed, your host app can no longer reference that frame.  Frames get created and destroyed during each new webpage navigation.  Use the `CoreWebView2Frame.IsDestroyed` method to check whether the frame still exists.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.FrameCreated Event](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.framecreated)
   * [CoreWebView2FrameCreatedEventArgs Class](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2framecreatedeventargs)
* [CoreWebView2Frame.Destroyed Event](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2frame.destroyed)
   * [CoreWebView2Frame.IsDestroyed Method](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2frame.isdestroyed)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.FrameCreated Event](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#framecreated)
   * [CoreWebView2FrameCreatedEventArgs Class](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2framecreatedeventargs)
* [CoreWebView2Frame.Destroyed Event](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#destroyed)
   * [CoreWebView2Frame.IsDestroyed Method](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#isdestroyed)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_4::FrameCreated event (add](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2_4#add_framecreated), [remove)](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2_4#remove_framecreated)
   * [ICoreWebView2FrameCreatedEventArgs interface](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2framecreatedeventargs)
* [ICoreWebView2Frame::Destroyed event (add](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2frame#add_destroyed), [remove)](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2frame#remove_destroyed)
   * [ICoreWebView2Frame::IsDestroyed method](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2frame#isdestroyed)

---

See also:
* [iframes](./overview-features-apis.md#iframes) in _Overview of WebView2 features and APIs_.


<!-- ------------------------------ -->
#### Example of subscribing to the FrameCreated event

<!-- link to API Ref that contains an example code listing? -->

<!-- TODO: Dev: where is sample code? -->

##### [.NET/C#](#tab/dotnetcsharp)

```javascript

```

##### [WinRT/C#](#tab/winrtcsharp)

```javascript

```

##### [Win32/C++](#tab/win32cpp)

```javascript

```

---


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

After the frame is created, the frame navigates as driven by your host app.  To monitor what's going on in the main page, events such as `NavigationStarted`, `NavigationCompleted`, and `HistoryChanged` enable you<!--the host app?the frame?--> to navigate back and forth among frames or webpages.  Frames are navigated<!--to--> less often than webpages, but the same navigation style is supported.  The user usually cannot navigate inside a frame, although JavaScript enables that; a frame is usually static regarding navigation.

See also:
* [Standard sequence of events](./navigation-events.md) in _Navigation events for WebView2 apps_.

##### [.NET/C#](#tab/dotnetcsharp)

<!-- * [CoreWebView2AddScriptToExecuteOnDocumentCreatedCompletedHandler Class]()todo: exists? -->
* [CoreWebView2.AddScriptToExecuteOnDocumentCreatedAsync Method](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.addscripttoexecuteondocumentcreatedasync) - This method can be used for an iframe as well as for a webpage.  Your script must check whether it's in an iframe.

Recommended:
* [CoreWebView2Frame.NavigationStarting Event](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2frame.navigationstarting)
* [CoreWebView2Frame.NavigationCompleted Event](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2frame.navigationcompleted)

Superseded:
* [CoreWebView2.FrameNavigationStarting Event](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.framenavigationstarting)
* [CoreWebView2.FrameNavigationCompleted Event](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.framenavigationcompleted)

##### [WinRT/C#](#tab/winrtcsharp)

<!-- * [CoreWebView2AddScriptToExecuteOnDocumentCreatedCompletedHandler Class]()todo: exists? -->
* [CoreWebView2.AddScriptToExecuteOnDocumentCreatedAsync Method](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#addscripttoexecuteondocumentcreatedasync) - This method can be used for an iframe as well as for a webpage.  Your script must check whether it's in an iframe.

Recommended:
* [CoreWebView2Frame.NavigationStarting Event](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#navigationstarting)
* [CoreWebView2Frame.NavigationCompleted Event](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#navigationcompleted)

Superseded:
* [CoreWebView2.FrameNavigationStarting Event](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#framenavigationstarting)
* [CoreWebView2.FrameNavigationCompleted Event](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#framenavigationcompleted)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2AddScriptToExecuteOnDocumentCreatedCompletedHandler interface](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2addscripttoexecuteondocumentcreatedcompletedhandler)<!-- TODO: in that API Ref topic, link to the main type (AddScriptToExecuteOnDocumentCreated method?) that uses that handler -->
* [ICoreWebView2::AddScriptToExecuteOnDocumentCreated method](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#addscripttoexecuteondocumentcreated) - This method can be used for an iframe as well as for a webpage.  Your script must check whether it's in an iframe.

Recommended:
* [ICoreWebView2Frame2::NavigationStarting event (add](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2frame2#add_navigationstarting), [remove)](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2frame2#remove_navigationstarting)
* [ICoreWebView2Frame2::NavigationCompleted event (add](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2frame2#add_navigationcompleted), [remove)](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2frame2#remove_navigationcompleted)

Superseded:
* [ICoreWebView2::FrameNavigationStarting event (add](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#add_framenavigationstarting), [remove)](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#remove_framenavigationstarting)
* [ICoreWebView2::FrameNavigationCompleted event (add](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#add_framenavigationcompleted), [remove)](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#remove_framenavigationcompleted)

---

The events on `CoreWebView2Frame` are recommended rather than the events on `CoreWebView2`, because the `CoreWebView2Frame` type supports more scenarios to allow interactions with frames.


See also:
* [Standard sequence of events](./navigation-events.md) in _Navigation events for WebView2 apps_.
* [Navigation events](./overview-features-apis.md#navigation-events) in _Overview of WebView2 features and APIs_.
* [Block unwanted navigating](./overview-features-apis.md#block-unwanted-navigating) in _Overview of WebView2 features and APIs_.


<!-- ------------------------------ -->
#### Example of navigation and navigation events


##### [.NET/C#](#tab/dotnetcsharp)

todo<!-- TODO: Dev: find sample code -->

```javascript

```

##### [WinRT/C#](#tab/winrtcsharp)

todo<!-- TODO: Dev: find sample code -->

```javascript

```

##### [Win32/C++](#tab/win32cpp)

todo<!-- TODO: Dev: find sample code -->

```javascript

```

---


<!-- ====================================================================== -->
## Using host objects in an iframe

To communicate between the native side of the host app and JavaScript that's in an iframe, use host objects.  A _host object_ is an object that you create in the host app and then use from JavaScript code in the webpage side of the app.

The host app subscribes to web messages to receive messages from script within iframes.

The host app sends web messages to script within iframes.

Using native-side APIs from script within a frame, via a host object, is similar to web/native interop page structure as explained in [Call native-side code from web-side code](https://learn.microsoft.com/microsoft-edge/webview2/how-to/hostobject):

To use host objects within an iframe:
1. Define the host object and implement `IDispatch`.
1. Call `AddHostObjectToScriptWithOrigins` (Win32) or call `AddHostObjectToScript` with an `origins` parameter (.NET), passing a method to the web.
1. Call `AddHostObjectToScriptWithOrigins` (Win32) or call `AddHostObjectToScript` with an `origins` parameter (.NET), passing a method to the web.
<!-- todo: differentiate the bottom two sections/steps -->

When using `AddHostObjectToScript`, you need to specify which URLs will be allowed (in an `origins` parameter), for security reasons.

If a frame wants to control or execute objects that are created on the native side (that is, if you have native objects that you want to control from the JavaScript side), use `AddHostObjectToScriptWithOrigins` (Win32) or the `AddHostObjectToScript` method overload that has an `origins` parameter.

The `AddHostObjectToScriptWithOrigins` (or equivalent frame-supporting method overload) takes an additional parameter, `origins`.  The `origins` parameter identifies the URLs for which iframes will have access to the host object.

If the frame is navigated to a URL that is not in the `origins` list, the frame won't be able to operate the host object; the frame won't be able to read or write any properties.
See the **Method name** table in the `AddHostObjectToScript` method for your framework.  See the following two rows:
* `applyHostFunction`, `getHostProperty`, and `setHostProperty`.
* `getLocalProperty` and `setLocalProperty`.

URLs that aren't in the `origins` list won't be able to call any methods or access properties on the host object.

URLs that aren't in the `origins` list will need to be implemented on the native side of the host app.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Frame.AddHostObjectToScript Method](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2frame.addhostobjecttoscript) - has an `origins` parameter.  The documentation doesn't have a **Method name** table.

The above method works like the following method:
* [CoreWebView2.AddHostObjectToScript Method](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.addhostobjecttoscript).  See the **Method name** table.  Read both of these API Reference topics, although for frames, you would use the method which supports an `origins` parameter instead.

##### [WinRT/C#](#tab/winrtcsharp)

<!-- todo: Dev: implement.  Then remove this note. -->
Not supported yet; pending as of Nov. 9, 2022.

* [CoreWebView2Frame.AddHostObjectToScript Method](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#addhostobjecttoscript) - has an `origins` parameter.<!-- has a **Method name** table? -->
* [CoreWebView2Frame.RemoveHostObjectFromScript Method](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#removehostobjectfromscript)<!--remove link?  remove it now, or after the above method exists?-->

The above method works like the following method:
* [CoreWebView2.AddHostObjectToScript Method](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#addhostobjecttoscript).  See the **Method name** table.  Read both of these API Reference topics, although for frames, you would use the method which supports an `origins` parameter instead.

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Frame::AddHostObjectToScriptWithOrigins method](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2frame#addhostobjecttoscriptwithorigins) - has an `origins` parameter.  The documentation doesn't have a **Method name** table.

The above method works like the following method:
* [ICoreWebView2::AddHostObjectToScript method](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#addhostobjecttoscript).  See the **Method name** table.  Read both of these API Reference topics, although for frames, you would use the method which supports an `origins` parameter instead.

---

<!-- ------------------------------ -->
#### Example code

See [Step 3: Call AddHostObjectToScript to pass the host object to web-side code](../how-to/hostobject.md#step-3-call-addhostobjecttoscript-to-pass-the-host-object-to-web-side-code) in _Call native-side code from web-side code_.


See also:
* [Host/web object sharing](./overview-features-apis.md#hostweb-object-sharing) in _Overview of WebView2 features and APIs_.


<!-- ====================================================================== -->
## Sending and receiving messages

You can send and receive messages between native app and JavaScript code in iframe.  Messages are sent from iframe in an HTML page (via JavaScript) and are received by the host app.


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
    
Code in a webpage might be running either inside a browser or inside the WebView2 control.  Some features might be disabled when inside a WebView2 control instance.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Frame.WebMessageReceived Event](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2frame.webmessagereceived)
* [CoreWebView2Frame.PostWebMessageAsJson Method](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2frame.postwebmessageasjson)
* [CoreWebView2Frame.PostWebMessageAsString Method](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2frame.postwebmessageasstring)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Frame.WebMessageReceived Event](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#webmessagereceived)
* [CoreWebView2Frame.PostWebMessageAsJson Method](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#postwebmessageasjson)
* [CoreWebView2Frame.PostWebMessageAsString Method](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#postwebmessageasstring)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Frame2::WebMessageReceived event (add](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2frame2#add_webmessagereceived), [remove)](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2frame2#remove_webmessagereceived)
* [ICoreWebView2Frame2::PostWebMessageAsJson method](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2frame2#postwebmessageasjson)
* [ICoreWebView2Frame2::PostWebMessageAsString method](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2frame2#postwebmessageasstring)

---

See also:
* [Interop of native-side and web-side code](https://learn.microsoft.com/microsoft-edge/webview2/how-to/communicate-btwn-web-native)


#### JavaScript API Reference

<!-- TODO: link when exists -->
JavaScript APIs are currently being documented.  When the documentation is ready, it will be linked to from here.
* `window.chrome.webview.postMessage`
* `window.chrome.webview.addEventListener('message')`


<!-- todo: after add api links above, remove the n/a links: -->
See also:
* [Call native-side code from web-side code](https://learn.microsoft.com/microsoft-edge/webview2/how-to/hostobject?tabs=dotnetcsharp)
* [Script execution](./overview-features-apis.md#script-execution) in _Overview of WebView2 features and APIs_.
* [Web messaging](./overview-features-apis.md#web-messaging) in _Overview of WebView2 features and APIs_.
* [Permissions](./overview-features-apis.md#permissions) in _Overview of WebView2 features and APIs_.
* [Block unwanted navigating](./overview-features-apis.md#block-unwanted-navigating) in _Overview of WebView2 features and APIs_.
* [Navigation events](./overview-features-apis.md#navigation-events) in _Overview of WebView2 features and APIs_.
* [iframes](./overview-features-apis.md#iframes) in _Overview of WebView2 features and APIs_.


<!-- ------------------------------ -->
#### Example of communicating between the host app and iframes


##### [.NET/C#](#tab/dotnetcsharp)

todo<!-- TODO: Dev: find sample code -->

```javascript

```

##### [WinRT/C#](#tab/winrtcsharp)

todo<!-- TODO: Dev: find sample code -->

```javascript

```

##### [Win32/C++](#tab/win32cpp)

todo<!-- TODO: Dev: find sample code -->

```javascript

```

---


<!-- ====================================================================== -->
## Run JavaScript code in iframes by using ExecuteScript

A WebView2 app can run any JavaScript in a frame, by using `ExecuteScript`.

In order for script to be executed in an iframe, an execution context must be created.  An execution context is created after the `ContentLoading` event, that's why if `ExecuteScript` is called before the `ContentLoading` event is raised, the script will not be executed and the string `null` will be returned.

For information about the `ContentLoading` event, see [Navigation events for WebView2 apps](./navigation-events.md), which is valid for frames as well as webpages.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Frame.ExecuteScriptAsync Method](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2frame.executescriptasync)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Frame.ExecuteScriptAsync Method](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#executescriptasync)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Frame2::ExecuteScript](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2frame2#executescript)
* [interface ICoreWebView2ExecuteScriptCompletedHandler](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2executescriptcompletedhandler)

---

See also:
* [Script execution](./overview-features-apis.md#script-execution) in _Overview of WebView2 features and APIs_.


<!-- ------------------------------ -->
#### Example of running JavaScript code in iframes by using ExecuteScript

This sample code is condensed from [MainWindow.xaml.cs](https://github.com/MicrosoftEdge/WebView2Samples/blob/main/SampleApps/WebView2WpfBrowser/MainWindow.xaml.cs#L842-L878) in the **WebView2WpfBrowser** sample.

This sample code shows how to use frame APIs, including:
* `FrameCreated`
   * `CoreWebView2FrameCreatedEventArgs`
* `DOMContentLoaded`
   * `CoreWebView2DOMContentLoadedEventArgs`
* `ExecuteScriptAsync`

##### [.NET/C#](#tab/dotnetcsharp)

```csharp
        // <DOMContentLoaded>
        void DOMContentLoadedCmdExecuted(object target, ExecutedRoutedEventArgs e)
        {
            webView.CoreWebView2.FrameCreated += WebView_FrameCreatedDOMContentLoaded;
            webView.NavigateToString(@"<!DOCTYPE html>" +
                                      "<h1>DOMContentLoaded sample page</h1>" +
                                      "<h2>The content to the iframe and below will be added after DOM content is loaded </h2>" +
                                      "<iframe style='height: 200px; width: 100%;'/>");
            webView.CoreWebView2.NavigationCompleted += (sender, args) =>
            {
                webView.CoreWebView2.DOMContentLoaded -= WebView_DOMContentLoaded;
                webView.CoreWebView2.FrameCreated -= WebView_FrameCreatedDOMContentLoaded;
            };
        }

        void WebView_FrameCreatedDOMContentLoaded(object sender, CoreWebView2FrameCreatedEventArgs args)
        {
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

This example code is a copy of the .NET example code.
<!-- todo: Dev - does this code need to be modified to make it work for WinRT? -->

```javascript
        // <DOMContentLoaded>
        void DOMContentLoadedCmdExecuted(object target, ExecutedRoutedEventArgs e)
        {
            webView.CoreWebView2.FrameCreated += WebView_FrameCreatedDOMContentLoaded;
            webView.NavigateToString(@"<!DOCTYPE html>" +
                                      "<h1>DOMContentLoaded sample page</h1>" +
                                      "<h2>The content to the iframe and below will be added after DOM content is loaded </h2>" +
                                      "<iframe style='height: 200px; width: 100%;'/>");
            webView.CoreWebView2.NavigationCompleted += (sender, args) =>
            {
                webView.CoreWebView2.DOMContentLoaded -= WebView_DOMContentLoaded;
                webView.CoreWebView2.FrameCreated -= WebView_FrameCreatedDOMContentLoaded;
            };
        }

        void WebView_FrameCreatedDOMContentLoaded(object sender, CoreWebView2FrameCreatedEventArgs args)
        {
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

##### [Win32/C++](#tab/win32cpp)

This example code is copied from [ICoreWebView2Frame2::ExecuteScript method](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2frame2#executescript).

```cpp
wil::com_ptr<ICoreWebView2_4> webview2_4 = m_webView.try_query<ICoreWebView2_4>();
    if (webview2_4)
    {
        CHECK_FAILURE(webview2_4->add_FrameCreated(
            Callback<ICoreWebView2FrameCreatedEventHandler>(
                [](ICoreWebView2* sender, ICoreWebView2FrameCreatedEventArgs* args) -> HRESULT {
                    wil::com_ptr<ICoreWebView2Frame> webviewFrame;
                    CHECK_FAILURE(args->get_Frame(&webviewFrame));
                    wil::com_ptr<ICoreWebView2Frame2> frame2 =
                        webviewFrame.try_query<ICoreWebView2Frame2>();
                    if (frame2)
                    {
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
                                                // or pass nullptr as callback parametr otherwise.
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
## Modifying network events by using the `WebResourceRequested` event in iframes

![This feature is experimental](../../devtools-guide-chromium/media/experimental-tag-14px.msft.png)

<!-- todo: this is a frequently asked question: link article to webresourcerequested? listening to network events, modifying - 
mention it, in experimental.  
cover for iframes -->

For iframes, you can listen to network events and modify them, by using the `WebResourceRequested` event.

See also:
* [Manage network requests in WebView2](./overview-features-apis.md#manage-network-requests-in-webview2) in _Overview of WebView2 features and APIs_.
* [Custom management of network requests](../how-to/webresourcerequested.md)
* [1.0.1222-prerelease > Experimental features](../release-notes.md#experimental-features-2) in _Release Notes for the WebView2 SDK_ regarding these APIs.


##### [.NET/C#](#tab/dotnetcsharp)

See the latest prerelease APIs.  The following links contain `1.0.1466-prerelease`.  In the **Version** drop-down list in the upper left of the API Reference docs, select the latest prerelease.

* [CoreWebView2.AddWebResourceRequestedFilter(uri, resourceContext, requestSourceKinds) Method Overload](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.addwebresourcerequestedfilter?view=webview2-dotnet-1.0.1466-prerelease&preserve-view=true#microsoft-web-webview2-core-corewebview2-addwebresourcerequestedfilter(system-string-microsoft-web-webview2-core-corewebview2webresourcecontext-microsoft-web-webview2-core-corewebview2webresourcerequestsourcekinds))<!--keep parentheses for specific overload--> - To subscribe to network requests that belong to an iframe, you must use this overload and use `Document` as the value of the `requestSourceKinds` parameter.<!--keep this note-->
   * [CoreWebView2WebResourceRequestSourceKinds Enum](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2webresourcerequestsourcekinds?view=webview2-dotnet-1.0.1466-prerelease&preserve-view=true)
* [CoreWebView2.RemoveWebResourceRequestedFilter(uri, resourceContext, requestSourceKinds) Method Overload](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.removewebresourcerequestedfilter?view=webview2-dotnet-1.0.1466-prerelease&preserve-view=true#microsoft-web-webview2-core-corewebview2-removewebresourcerequestedfilter(system-string-microsoft-web-webview2-core-corewebview2webresourcecontext-microsoft-web-webview2-core-corewebview2webresourcerequestsourcekinds))<!--keep parentheses for specific overload-->
* [CoreWebView2WebResourceRequestedEventArgs Class](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2webresourcerequestedeventargs?view=webview2-dotnet-1.0.1466-prerelease&preserve-view=true)

<!-- todo: wrong overload for frames?  delete link?
* [CoreWebView2.AddWebResourceRequestedFilter(RequestSourceKinds) Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.addwebresourcerequestedfilter?view=webview2-dotnet-1.0.1466-prerelease&preserve-view=true#microsoft-web-webview2-core-corewebview2-addwebresourcerequestedfilter(system-string-microsoft-web-webview2-core-corewebview2webresourcecontext-microsoft-web-webview2-core-corewebview2webresourcerequestsourcekinds))
-->

##### [WinRT/C#](#tab/winrtcsharp)

See the latest prerelease APIs.  The following links contain `1.0.1466-prerelease`.  In the **Version** drop-down list in the upper left of the API Reference docs, select the latest prerelease.

* [CoreWebView2.AddWebResourceRequestedFilter(uri, resourceContext, requestSourceKinds) Method Overload](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1466-prerelease&preserve-view=true#addwebresourcerequestedfilter)<!--this is the correct overload; lacks -1 in url; valid for view=prerelease--> - To subscribe to network requests that belong to an iframe, you must use this overload and use `Document` as the value of the `requestSourceKinds` parameter.<!--keep this note-->
   * [CoreWebView2WebResourceRequestSourceKinds Enum](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2webresourcerequestsourcekinds?view=webview2-winrt-1.0.1466-prerelease&preserve-view=true)
* [CoreWebView2.RemoveWebResourceRequestedFilter(uri, resourceContext, requestSourceKinds) Method Overload](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1466-prerelease&preserve-view=true#removewebresourcerequestedfilter)<!--this is the correct overload; lacks -1 in url-->
* [CoreWebView2WebResourceRequestedEventArgs Class](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2webresourcerequestedeventargs?view=webview2-winrt-1.0.1466-prerelease&preserve-view=true)

##### [Win32/C++](#tab/win32cpp)

<!-- for win32, "Experimental" links automatically go to latest view -->

* [ICoreWebView2Experimental16.AddWebResourceRequestedFilterWithRequestSourceKinds method](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimental16#addwebresourcerequestedfilterwithrequestsourcekinds) - To subscribe to network requests that belong to an iframe, you must use this `...WithRequestSourceKinds` method and use `COREWEBVIEW2_WEB_RESOURCE_REQUEST_SOURCE_KINDS_DOCUMENT` as the value of the `requestSourceKinds` parameter.<!--keep this note-->
   * [COREWEBVIEW2_WEB_RESOURCE_REQUEST_SOURCE_KINDS enum](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller4#corewebview2_web_resource_request_source_kinds)
* [ICoreWebView2Experimental16.RemoveWebResourceRequestedFilterWithRequestSourceKinds method](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimental16#removewebresourcerequestedfilterwithrequestsourcekinds)
* [ICoreWebView2ExperimentalWebResourceRequestedEventArgs interface](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalwebresourcerequestedeventargs)

<!-- 
todo: update enum link when it changes to a Globals page section/anchor eg:
https://learn.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.1418.22
https://learn.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.1418.22
-->

---


<!-- ====================================================================== -->
## Ignoring X-Frame-Options to render a webpage inside of a frame

The `X-Frame-Options` HTTP response header is used by webpages to prevent an application from rendering that webpage inside of a frame.  The `AdditionalAllowedFrameAncestors` property allows your application to bypass the `X-Frame-Options` header, to render the webpage inside a frame.

See also:
* [X-Frame-Options](https://developer.mozilla.org/docs/Web/HTTP/Headers/X-Frame-Options)

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2NavigationStartingEventArgs.AdditionalAllowedFrameAncestors Property](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2navigationstartingeventargs.additionalallowedframeancestors)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2NavigationStartingEventArgs.AdditionalAllowedFrameAncestors Property](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2navigationstartingeventargs)

##### [Win32/C++](#tab/win32cpp)

[ICoreWebView2NavigationStartingEventArgs2::put_AdditionalAllowedFrameAncestors property (get](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2navigationstartingeventargs2#get_additionalallowedframeancestors), [put)](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2navigationstartingeventargs2#put_additionalallowedframeancestors)

---


<!-- ====================================================================== -->
## API Reference overview

The following features, listed in [Overview of WebView2 features and APIs](https://learn.microsoft.com/microsoft-edge/webview2/concepts/overview-features-apis), include frame-related APIs:

* [Host/web object sharing](./overview-features-apis.md#hostweb-object-sharing)
* [iframes](./overview-features-apis.md#iframes)<!--same link is in h2 "Subscribing to the FrameCreated event" above-->
* [Script execution](./overview-features-apis.md#script-execution)<!--same link is in h2 "Running JavaScript code in iframes by using ExecuteScript" above-->
* [Web messaging](./overview-features-apis.md#web-messaging)<!--link doesn't exist in an h2 section above-->
* [Permissions](./overview-features-apis.md#permissions)<!--link doesn't exist in an h2 section above-->
* [Block unwanted navigating](./overview-features-apis.md#block-unwanted-navigating)<!--same link is in h2 "Navigation and navigation events" above-->
* [Navigation events](./overview-features-apis.md#navigation-events)<!--same link is in h2 "Navigation and navigation events" above-->


<!-- ====================================================================== -->
## See also

* [Call native-side code from web-side code](https://learn.microsoft.com/microsoft-edge/webview2/how-to/hostobject)
* [Navigation events for WebView2 apps](./navigation-events.md) - valid for frames as well as webpages.

**External pages:**
* [HTML <iframe\> Tag](https://www.w3schools.com/tags/tag_iframe.asp)
