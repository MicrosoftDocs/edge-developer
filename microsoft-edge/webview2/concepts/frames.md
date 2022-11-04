---
title: Using frames in WebView2 apps
description: Using frames, such as iframes, in WebView2 apps.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 11/04/2022
---
# Using frames in WebView2 apps

<!-- todo
In hostobjects.md, extend the article by adding an iframes example in C# and in Win32/C++.

iframes overview: c# and win32  - execute script scenario example
-->

Frames allow you to embed other webpages into your own webpage.  A _frame_ is a sub-page or area within a webpage, like a webpage within a webpage.  

An iframe is one type of frame.  Other types of frames are `frameset`, `portal`, `embed`, `fencedFrame`, and `object`.  The main type is `CoreWebView2Frame`, which is currently enabled for iframes.  Support for other types of frames is planned.

WebView2 currently supports top-level iframes.  WebView2 supports APIs to interact with iframes.  In WebView2, you can:
* Find out when iframes are created.
* Find out when iframes are navigating.  This works the same as state machine Navigation events for WebView2 apps.
* Communicate between the host app and iframes.
* Allow the app to ignore the `X-Frame-Options` HTTP response header.

An API is required for WebView2 for frames, because you can't create a WebView2 frame object from the app.  This API is required, for the app to be able to interact with frames, which are transient.  Without this API, WebView2 wouldn't have access to frames.  For example, `executeScript` requires having the frame object, to interact with the frame.


<!-- ====================================================================== -->
## Subscribe to the FrameCreated event to obtain a frame
<!-- 
## Starting work with frames 
## Starting work with frames by subscribing to the FrameCreated event to obtain a frame
## Subscribing to the FrameCreated event to obtain a frame -->

The first step to interacting with frames in your app is to subscribe to the `FrameCreated` event to obtain a frame object.
The `FrameCreated` event is fired whenever a new frame is created.
Once you have the frame object, you can then use this object to monitor changes or interact with this specific frame.

It's important to monitor the lifetime of a frame by subscribing to the `CoreWebView2Frame.Destroyed` event, because when the frame is destroyed, your app can no longer reference that frame.  Frames get created and destroyed during each new webpage navigation.  Use the `CoreWebView2Frame.IsDestroyed` method to check whether the frame still exists.

To receive the frame object, you must subscribe to the `FrameCreated` event.

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

* [ICoreWebView2Frame::Destroyed event]<!-- todo - API Ref exists?  mentioned in next topic: -->
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
## Navigate within a frame

After a frame is created, the frame navigates to the frame's source URL.
Once the frame navigates to the source url, the following navigation events are fired:

* `NavigationStarting`
* `ContentLoading`
* `HistoryChanged`
* `DOMContentLoaded`
* `NavigationCompleted`

To learn more about navigation events, see [Navigation events for WebView2 apps](./navigation-events.md).


#### Prefer the "Frame" types

The original `CoreWebView2.FrameNavigationStarting` event and the `CoreWebView2.FrameNavigationCompleted` event duplicate the newer `CoreWebView2Frame.NavigationCompleted` event and `CoreWebView2Frame.NavigationStarting` event.  We recommend using the `CoreWebView2Frame.NavigationCompleted` event and `CoreWebView2Frame.NavigationStarting` event, rather than the events on `CoreWebView2`, because the `CoreWebView2Frame` type supports more scenarios to allow interactions with frames.

<!-- 
The frame itself is navigating.  A webpage navigates to a URL.  Similarly, a frame potentially navigates.

After the frame is created, it navigates from your app.  To monitor what's going on in the main page, events such as navigationStarted, navigationCompleted, and historyChanged enable you to navigate back and forth among frames or webpages.  frames are navigated less often than webpages, but the same navigation style is supported.  The user usually cannot navigate inside a frame, though JavaScript enables that.  A frame is usually static regarding navigation.

Navigation potentially could happen within a frame.  A simple use case: An iframe element's source attribute is a url, and the url is loaded in an iframe, such as wikipedia.com.  Usually the navigation happens immediately after the frame is created.  DOMContentLoaded, ContentLoading, NavCompleted events.
-->

iframes use navigation and navigation events, such as `FrameNavigationStarting` and `NavigationCompleted`.


##### [.NET/C#](#tab/dotnetcsharp)

Recommended:
* [CoreWebView2Frame.NavigationCompleted Event](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2frame.navigationcompleted)
* [CoreWebView2Frame.NavigationStarting Event](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2frame.navigationstarting)

Superseded:
* [CoreWebView2.FrameNavigationCompleted Event](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.framenavigationcompleted)
* [CoreWebView2.FrameNavigationStarting Event](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.framenavigationstarting)

##### [WinRT/C#](#tab/winrtcsharp)

Recommended:
* [CoreWebView2Frame.NavigationCompleted Event](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#navigationcompleted)
* [CoreWebView2Frame.NavigationStarting Event](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#navigationstarting)

Superseded:
* [CoreWebView2.FrameNavigationCompleted Event](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#framenavigationcompleted)
* [CoreWebView2.FrameNavigationStarting Event](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#framenavigationstarting)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2AddScriptToExecuteOnDocumentCreatedCompletedHandler interface](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2addscripttoexecuteondocumentcreatedcompletedhandler)
<!-- TODO: in that API Ref topic, link to the main type that uses that handler -->
* [ICoreWebView2::AddScriptToExecuteOnDocumentCreated method](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#addscripttoexecuteondocumentcreated) - This method can be used for iframe as well. Your script must check whether it's an iframe or not.

Recommended:
* [ICoreWebView2Frame2::NavigationStarting event (add](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2frame2#add_navigationstarting), [remove)](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2frame2#remove_navigationstarting)
* [ICoreWebView2Frame2::NavigationCompleted event (add](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2frame2#add_navigationcompleted), [remove)](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2frame2#remove_navigationcompleted)

Superseded:
* [ICoreWebView2::FrameNavigationStarting event (add](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#add_framenavigationstarting), [remove)](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#remove_framenavigationstarting)
* [ICoreWebView2::FrameNavigationCompleted event (add](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#add_framenavigationcompleted), [remove)](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#remove_framenavigationcompleted)

---

See also:
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
## Communicate between the host app and iframe (abstract heading to remove)
<!-- todo: if possible, try to present page outline structure as a flat list of h2 sections except maybe demote Example sections -->

<!-- ====================================================================== -->
## Using host objects in an iframe

A _remote object_ is an object that you create in the host app and then use in the webpage.<!--a webpage of the app, a webpage that's used by the app?  use in web-site code?-->

Web messages:
* Subscribing is for receiving messages from iframes.
* Sending messages.

Similar to web/native interop page structure  https://learn.microsoft.com/microsoft-edge/webview2/how-to/hostobject?tabs=dotnetcsharp  : 3 sections:

To use host objects within an iframe:
1. Define the host object and implement `IDispatch`.
1. Call the `AddHostObjectToScriptWithOrigins` API.
1. Use `AddHostObjectToScriptWithOrigins` to pass a method to the web.

If a frame wants to control or execute objects that are created on the native side; that is, if you have native objects that you want to control from the JavaScript side, use `AddHostObjectToScriptWithOrigins`.

See example code in [Call native-side code from web-side code](https://learn.microsoft.com/microsoft-edge/webview2/how-to/hostobject).  Per the example code for frames, call `CoreWebView2Frame.AddHostObjectToScriptWithOrigins` instead of `CoreWebView2.AddHostObjectToScript`.

`AddHostObjectToScriptWithOrigins` takes an additional parameter, `origins`.
The `origins` parameter defines from which urls iframes will have access to the host object. 
If the frame is navigated to a URL that is not in the `origins` list, the frame will not be able to operate the host object; the frame won't be able to read or write any properties
<!-- such as: see "Method name" table in https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#addhostobjecttoscript -->

<!-- applyHostFunction, getHostProperty, setHostProperty	Perform a method invocation, property get, or property set on the host object. Use the methods to explicitly force a method or property to run remotely if a conflicting local method or property exists. For instance, proxy.toString() runs the local toString method on the proxy object. But proxy.applyHostFunction('toString') runs toString on the host proxied object instead.  getLocalProperty, setLocalProperty -->
 ... won't be able to call any methods or access properties on the host object.
... implement on native side
... while adding host object to script, need to specify which url will be allowed, for security reasons.

This works similarly to [ICoreWebView2.AddHostObjectToScript] https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#addhostobjecttoscript) and we recommend that you read this API Reference section, though realize you would use [ICoreWebView2Frame::AddHostObjectToScriptWithOrigins method](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2frame#addhostobjecttoscriptwithorigins) instead.

For an example, see [Step 3: Call AddHostObjectToScript to pass the host object to web-side code](../how-to/hostobject.md#step-3-call-addhostobjecttoscript-to-pass-the-host-object-to-web-side-code) in _Call native-side code from web-side code_.

##### [.NET/C#](#tab/dotnetcsharp)

<!-- TODO: what apis? -->
* [CoreWebView2Frame.AddHostObjectToScript Method](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2frame.addhostobjecttoscript)

##### [WinRT/C#](#tab/winrtcsharp)

<!-- TODO: what apis? -->
* [CoreWebView2.AddHostObjectToScript Method](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#addhostobjecttoscript)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Frame::AddHostObjectToScriptWithOrigins method](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2frame#addhostobjecttoscriptwithorigins)

---

<!-- todo: after add api links above, remove the n/a links: -->
See also:
* [Call native-side code from web-side code](https://learn.microsoft.com/microsoft-edge/webview2/how-to/hostobject?tabs=dotnetcsharp)
* [Script execution](./overview-features-apis.md#script-execution) in _Overview of WebView2 features and APIs_.
* [Web messaging](./overview-features-apis.md#web-messaging) in _Overview of WebView2 features and APIs_.
* [Permissions](./overview-features-apis.md#permissions) in _Overview of WebView2 features and APIs_.
* [Block unwanted navigating](./overview-features-apis.md#block-unwanted-navigating) in _Overview of WebView2 features and APIs_.
* [Navigation events](./overview-features-apis.md#navigation-events) in _Overview of WebView2 features and APIs_.
* [iframes](./overview-features-apis.md#iframes) in _Overview of WebView2 features and APIs_.


<!-- ====================================================================== -->
## Sending and receiving messages

TODO

##### [.NET/C#](#tab/dotnetcsharp)

<!-- TODO: what apis? -->

##### [WinRT/C#](#tab/winrtcsharp)

<!-- TODO: what apis? -->

##### [Win32/C++](#tab/win32cpp)

<!-- TODO: what apis? -->

---

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

In order for script to be executed in an iframe, an execution context must be created.  An execution context is created after the `ContentLoading` event, that's why if `ExecuteScript` is called before the `ContentLoading` event is fired, the script will not be executed and the string `null` will be returned.

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

This sample code is <!--modified--> from [MainWindow.xaml.cs](https://github.com/MicrosoftEdge/WebView2Samples/blob/main/SampleApps/WebView2WpfBrowser/MainWindow.xaml.cs#L842-L878) in the **WebView2WpfBrowser** sample.

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
## The `WebResourceRequested` event in iframes

<!-- todo: this is a frequently asked question: link article to webresourcerequested? listening to network events, modifying - mention it, in experimental.  cover for iframes -->

For iframes, you can listen to network events and modify them, by using the `WebResourceRequested` event.

See also:
* [Manage network requests in WebView2](./overview-features-apis.md#manage-network-requests-in-webview2) in _Overview of WebView2 features and APIs_.
* [Custom management of network requests](../how-to/webresourcerequested.md)


<!-- ====================================================================== -->
## Ignore X-Frame-Options to render a webpage inside of a frame

The `X-Frame-Options` HTTP response header is used by webpages to prevent an application from rendering that webpage inside of a frame.  The `AdditionalAllowedFrameAncestors` property allows your application to bypass the `X-Frame-Options` header, to render the webpage inside a frame.

See also:
* [X-Frame-Options](https://developer.mozilla.org/docs/Web/HTTP/Headers/X-Frame-Options)

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2NavigationStartingEventArgs.AdditionalAllowedFrameAncestors Property](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2navigationstartingeventargs.additionalallowedframeancestors)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2NavigationStartingEventArgs.AdditionalAllowedFrameAncestors Property](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2navigationstartingeventargs)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2NavigationStartingEventArgs2::put_AdditionalAllowedFrameAncestors property (put)](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2navigationstartingeventargs2#put_additionalallowedframeancestors)

---


<!-- ====================================================================== -->
## API Reference overview

The following features, listed in [Overview of WebView2 features and APIs](https://learn.microsoft.com/microsoft-edge/webview2/concepts/overview-features-apis), include frame-related APIs:

* [Host/web object sharing](./overview-features-apis.md)
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
