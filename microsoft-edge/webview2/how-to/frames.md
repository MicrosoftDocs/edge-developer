---
title: Using frames in WebView2 apps
description: Using frames, such as iframes, in WebView2 apps.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 10/24/2022
---
# Using frames in WebView2 apps
<!-- TODO: Dev: what other frame types will there be besides iframes? if none other, than change filename to iframes.md and change title to Using iframes... -->

<!-- possibly add another tab-set, such as [Non-frame][Frame], to the existing article https://learn.microsoft.com/microsoft-edge/webview2/how-to/hostobject -->

Frames allow you to embed other webpages into your own webpage.  A _frame_ is a sub-page or area within a webpage, like a webpage within a webpage.  

An iframe is one type of frame.  WebView2 currently supports top-level iframes.  WebView2 supports APIs to interact with iframes.  In WebView2, you can:
* Find out when iframes are created.
* Find out when iframes are navigating.  This works the same as state machine Navigation events for WebView2 apps.  link to diagram.
* Communicating between the host app and iframes.
* Allow bypassing x-frame options.<!-- TODO: Dev/SME: do we want to explicitly have this point?  https://developer.mozilla.org/docs/Web/HTTP/Headers/X-Frame-Options -->

An API is required for WebView2 for frames, because you can't create a WebView2 frame object from the app.  This API is required, for the app to be able to interact with frames, which are transient.  Without this API, WebView2 wouldn't have access to frames.  For example, `executeScript` requires having the frame object, to interact with the frame.


<!-- todo: move to appropriate h2 section or create new h2 section -->
#### Example code for C# 

This sample code from [MainWindow.xaml.cs](https://github.com/MicrosoftEdge/WebView2Samples/blob/main/SampleApps/WebView2WpfBrowser/MainWindow.xaml.cs#L842-L878) in the **WebView2WpfBrowser** sample demonstrates:

* `DOMContentLoaded`<!--1st emphasis-->
   * `CoreWebView2DOMContentLoadedEventArgs`
* `FrameCreated`<!--2nd emphasis-->
   * `CoreWebView2FrameCreatedEventArgs`
* `NavigationCompleted`<!--3rd emphasis-->
* `ExecuteScriptAsync`

```csharp
        // <DOMContentLoaded>
        void DOMContentLoadedCmdExecuted(object target, ExecutedRoutedEventArgs e)
        {
            webView.CoreWebView2.DOMContentLoaded += WebView_DOMContentLoaded;
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

        void WebView_DOMContentLoaded(object sender, CoreWebView2DOMContentLoadedEventArgs arg)
        {
            _ = webView.ExecuteScriptAsync(
                    "let content = document.createElement(\"h2\");" +
                    "content.style.color = 'blue';" +
                    "content.textContent = \"This text was added by the host app\";" +
                    "document.body.appendChild(content);");
        }
        // </DOMContentLoaded>

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


<!-- todo: move to appropriate h2 section or create new h2 section -->
#### Example code from Win32 sample app

This sample code from [ScenarioAddHostObject.cpp](https://github.com/MicrosoftEdge/WebView2Samples/blob/main/SampleApps/WebView2APISample/ScenarioAddHostObject.cpp#L83-L133) in the **WebView2APISample** project (which is the Win32 sample app) demonstrates:

* `ICoreWebView2Frame::add_Destroyed`
   * `ICoreWebView2FrameDestroyedEventHandler`
* `ICoreWebView2Frame::add_NameChanged`
   * `ICoreWebView2FrameNameChangedEventHandler`
* `ICoreWebView2Frame::AddHostObjectToScriptWithOrigins`
* `ICoreWebView2Frame::get_Name`
* `ICoreWebView2FrameCreatedEventHandler`
   * `ICoreWebView2FrameCreatedEventArgs::get_Frame`

```cpp
        CHECK_FAILURE(webview2_4->add_FrameCreated(
            Callback<ICoreWebView2FrameCreatedEventHandler>(
                [this](
                    ICoreWebView2* sender,
                    ICoreWebView2FrameCreatedEventArgs* args) -> HRESULT
        {
            wil::com_ptr<ICoreWebView2Frame> webviewFrame;
            CHECK_FAILURE(args->get_Frame(&webviewFrame));

            wil::unique_cotaskmem_string name;
            CHECK_FAILURE(webviewFrame->get_Name(&name));
            if (std::wcscmp(name.get(), L"iframe_name") == 0)
            {
                //! [AddHostObjectToScriptWithOrigins]
                wil::unique_variant remoteObjectAsVariant;
                // It will throw if m_hostObject fails the QI, but because it is our object
                // it should always succeed.
                m_hostObject.query_to<IDispatch>(&remoteObjectAsVariant.pdispVal);
                remoteObjectAsVariant.vt = VT_DISPATCH;

                // Create list of origins which will be checked.
                // iframe will have access to host object only if its origin belongs
                // to this list.
                LPCWSTR origin = L"https://appassets.example/";

                CHECK_FAILURE(webviewFrame->AddHostObjectToScriptWithOrigins(
                    L"sample", &remoteObjectAsVariant, 1, &origin));
                //! [AddHostObjectToScriptWithOrigins]
            }

            // Subscribe to frame name changed event
            webviewFrame->add_NameChanged(
                Callback<ICoreWebView2FrameNameChangedEventHandler>(
                    [this](ICoreWebView2Frame* sender, IUnknown* args) -> HRESULT {
                        wil::unique_cotaskmem_string newName;
                        CHECK_FAILURE(sender->get_Name(&newName));
                        // Handle name changed event
                        return S_OK;
                    }).Get(), NULL);

            // Subscribe to frame destroyed event
            webviewFrame->add_Destroyed(
                Callback<ICoreWebView2FrameDestroyedEventHandler>(
                    [this](ICoreWebView2Frame* sender, IUnknown* args) -> HRESULT {
                        /*Cleanup on frame destruction*/
                        return S_OK;
                    })
                    .Get(),
                NULL);
            return S_OK;
        }).Get(), &m_frameCreatedToken));
    }
```





<!-- ------------------------------ -->
#### The `WebResourceRequested` event

<!-- todo: this is a frequently asked question: link article to webresourcerequested? listening to network events, modifying - mention it, in experimental.  cover for iframes -->

For iframes, you can listen to network events and modify them, by using the `WebResourceRequested` event.

See also:
* [Manage network requests in WebView2](../concepts/overview-features-apis.md#manage-network-requests-in-webview2) in _Overview of WebView2 features and APIs_.
* [Custom management of network requests](../how-to/webresourcerequested.md)


<!-- ------------------------------ -->
#### Preliminary step: read the related article

As a preliminary step, skim the article [Call native-side code from web-side code](https://learn.microsoft.com/microsoft-edge/webview2/how-to/hostobject), but realize the Frame version of the core type is used instead, and `AddHostObjectToScriptWithOrigins` is used instead of `AddHostObjectToScript`.

Win32/C++:
* [ICoreWebView2Frame::AddHostObjectToScriptWithOrigins method](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2frame#addhostobjecttoscriptwithorigins)


<!-- ====================================================================== -->
## Step 1: Install Visual Studio, install git, clone the WebView2Samples repo, and open the solution

<!-- doc the modifications to these steps vs. other article. -->

<!-- provide code listings here that call the correct method. -->

See [Step 1: Install Visual Studio, install git, clone the WebView2Samples repo, and open the solution](../how-to/hostobject.md#step-1-install-visual-studio-install-git-clone-the-webview2samples-repo-and-open-the-solution) in _Call native-side code from web-side code_, but realize that different types and methods might be used, depending on which framework you're using.  Then return here and continue below.


<!-- ====================================================================== -->
## Step 2: Define the host object and implement IDispatch

<!-- doc the modifications to these steps vs. other article. -->

<!-- provide code listings here that call the correct method. -->

See [Step 2: Define the host object and implement IDispatch](../how-to/hostobject.md#step-2-define-the-host-object-and-implement-idispatch) in _Call native-side code from web-side code_, but realize that different types and methods might be used, depending on which framework you're using.  Then return here and continue below.


<!-- ====================================================================== -->
## Step 3: Call AddHostObjectToScriptWithOrigins

<!-- doc the modifications to these steps vs. other article. -->

<!-- provide code listings here that call the correct method. -->

See [Step 3: Call AddHostObjectToScript from native code](../how-to/hostobject.md#step-3-call-addhostobjecttoscript-from-native-code) in _Call native-side code from web-side code_, but realize that different types and methods might be used, depending on which framework you're using.  Then return here and continue below.


<!-- ====================================================================== -->
## Step 4: Use AddHostObjectToScriptWithOrigins to pass a method to the web

<!-- doc the modifications to these steps vs. other article. -->

<!-- provide code listings here that call the correct method. -->

See [Step 4: Use AddHostObjectToScript to pass a method to the web](../how-to/hostobject.md#step-4-use-addhostobjecttoscript-to-pass-a-method-to-the-web) in _Call native-side code from web-side code_, but realize that different types and methods might be used, depending on which framework you're using.  Then return here and continue below.


<!-- ====================================================================== -->
<!-- ====================================================================== -->
<!-- First Draft: -->


<!-- ====================================================================== -->
## Step A1: Subscribe to the FrameCreated event to obtain a frame
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

* [CoreWebView2Frame.Destroyed Event](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame?view=webview2-winrt-1.0.1370.28#destroyed)
   * [CoreWebView2Frame.IsDestroyed Method](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame?view=webview2-winrt-1.0.1370.28#isdestroyed)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_4::FrameCreated event (add](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2_4#add_framecreated), [remove)](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2_4#remove_framecreated)
   * [ICoreWebView2FrameCreatedEventArgs interface](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2framecreatedeventargs)

* [ICoreWebView2Frame::Destroyed event]<!-- todo - API Ref exists?  mentioned in next topic: -->
   * [ICoreWebView2Frame::IsDestroyed method](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2frame?view=webview2-1.0.1370.28#isdestroyed)

---

See also:
* [iframes](../concepts/overview-features-apis.md#iframes) in _Overview of WebView2 features and APIs_.


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
## Step A2: Navigate within a frame

After a frame is created, the frame navigates to the frame's source URL.
Once the frame navigates to the source url, the following navigation events are fired:

* `NavigationStarting`
* `ContentLoading`
* `HistoryChanged`
* `DOMContentLoaded`
* `NavigationCompleted`

To learn more about navigation events, see [Navigation events for WebView2 apps](../concepts/navigation-events.md).

Note that the `CoreWebView2.FrameNavigationStarting` event and the `CoreWebView2.FrameNavigationCompleted` event duplicate the `CoreWebView2Frame.NavigationCompleted` event and `CoreWebView2Frame.NavigationStarting` event.  We recommend using the `CoreWebView2Frame.NavigationCompleted` event and `CoreWebView2Frame.NavigationStarting` event, rather than the events on `CoreWebView2`, because the `CoreWebView2Frame` type supports more scenarios to allow interactions with frames.

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

Older:
* [CoreWebView2.FrameNavigationCompleted Event](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.framenavigationcompleted)
* [CoreWebView2.FrameNavigationStarting Event](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.framenavigationstarting)

##### [WinRT/C#](#tab/winrtcsharp)

Recommended:
* [CoreWebView2Frame.NavigationCompleted Event](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#navigationcompleted)
* [CoreWebView2Frame.NavigationStarting Event](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#navigationstarting)

Older:
* [CoreWebView2.FrameNavigationCompleted Event](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#framenavigationcompleted)
* [CoreWebView2.FrameNavigationStarting Event](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#framenavigationstarting)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2AddScriptToExecuteOnDocumentCreatedCompletedHandler interface](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2addscripttoexecuteondocumentcreatedcompletedhandler?view=webview2-1.0.1343.22)
<!-- TODO: in that API Ref topic, link to the main type that uses that handler -->
* [ICoreWebView2::AddScriptToExecuteOnDocumentCreated method](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#addscripttoexecuteondocumentcreated) - This method can be used for iframe as well. Your script must check whether it's an iframe or not.

Recommended:
* [ICoreWebView2Frame2::NavigationStarting event (add](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2frame2#add_navigationstarting), [remove)](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2frame2#remove_navigationstarting)
* [ICoreWebView2Frame2::NavigationCompleted event (add](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2frame2#add_navigationcompleted), [remove)](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2frame2#remove_navigationcompleted)

Older:
* [ICoreWebView2::FrameNavigationStarting event (add](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#add_framenavigationstarting), [remove)](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#remove_framenavigationstarting)
* [ICoreWebView2::FrameNavigationCompleted event (add](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#add_framenavigationcompleted), [remove)](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#remove_framenavigationcompleted)

---

See also:
* [Navigation events](../concepts/overview-features-apis.md#navigation-events) in _Overview of WebView2 features and APIs_.
* [Block unwanted navigating](../concepts/overview-features-apis.md#block-unwanted-navigating) in _Overview of WebView2 features and APIs_.


<!-- ------------------------------ -->
#### Example of navigation and navigation events

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
## Step A3: Communicate between the host app and iframe

#### ExecuteScript

A _remote object_ is an object that you create in the host app and then use in the webpage.<!--a webpage of the app, a webpage that's used by the app?  use in web-site code?-->

Web messages:
* Subscribing is for receiving messages from iframes.
* Sending messages.

Similar to web/native interop page structure  https://learn.microsoft.com/microsoft-edge/webview2/how-to/hostobject?tabs=dotnetcsharp  : 3 sections:

It works similar to [Call native-side code from web-side code](https://learn.microsoft.com/microsoft-edge/webview2/how-to/hostobject) but call `AddHostObjectToScriptWithOrigins` instead of `AddHostObjectToScript`:
1. Define the host object and implement IDispatch.
1. Call the `AddHostObjectToScriptWithOrigins` API.
1. Use `AddHostObjectToScriptWithOrigins` to pass a method to the web.

Win32/C++:
* [ICoreWebView2Frame::AddHostObjectToScriptWithOrigins method](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2frame#addhostobjecttoscriptwithorigins)

If a frame wants to control or execute objects that are created on the native side; that is, if you have native objects that you want to control from the JavaScript side, use `AddHostObjectToScriptWithOrigins`.  See also [Call native-side code from web-side code](https://learn.microsoft.com/microsoft-edge/webview2/how-to/hostobject), but in the present scenario use the  `CoreWebView2Frame.AddHostObjectToScriptWithOrigins` method instead of `CoreWebView2.AddHostObjectToScript`.  `AddHostObjectToScriptWithOrigins` takes an additional parameter, `origins`.
The `origins` parameter defines from which urls iframes will have access to the host object. 
If the frame is navigated to a URL that is not in the `origins` list, the frame will not be able to operate the host object; the frame won't be able to read or write any properties
<!-- such as: see "Method name" table in https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-1.0.1370.28#addhostobjecttoscript -->

<!-- applyHostFunction, getHostProperty, setHostProperty	Perform a method invocation, property get, or property set on the host object. Use the methods to explicitly force a method or property to run remotely if a conflicting local method or property exists. For instance, proxy.toString() runs the local toString method on the proxy object. But proxy.applyHostFunction('toString') runs toString on the host proxied object instead.  getLocalProperty, setLocalProperty -->
 ... won't be able to call any methods or access properties on the host object.
... implement on native side
... while adding host object to script, need to specify which url will be allowed, for security reasons.

This works similarly to [ICoreWebView2.AddHostObjectToScript] https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-1.0.1370.28#addhostobjecttoscript) and we recommend that you read this API Reference section, though realize you would use [ICoreWebView2Frame::AddHostObjectToScriptWithOrigins method](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2frame#addhostobjecttoscriptwithorigins) instead.


#### Sending and receiving messages

TODO

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
* [Script execution](../concepts/overview-features-apis.md#script-execution) in _Overview of WebView2 features and APIs_.
* [Web messaging](../concepts/overview-features-apis.md#web-messaging) in _Overview of WebView2 features and APIs_.
* [Permissions](../concepts/overview-features-apis.md#permissions) in _Overview of WebView2 features and APIs_.
* [Block unwanted navigating](../concepts/overview-features-apis.md#block-unwanted-navigating) in _Overview of WebView2 features and APIs_.
* [Navigation events](../concepts/overview-features-apis.md#navigation-events) in _Overview of WebView2 features and APIs_.
* [iframes](../concepts/overview-features-apis.md#iframes) in _Overview of WebView2 features and APIs_.


<!-- ------------------------------ -->
#### Example of communicating between the host app and iframes

<!-- link to API Ref that contains an example code listing? -->

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
## Step A4: Run JavaScript code in iframes by using ExecuteScript

The article [Navigation events for WebView2 apps](../concepts/navigation-events.md) is valid for frames as well as webpages.
<!-- TODO: ask Dev if BasicAuth should be added to diagram https://learn.microsoft.com/microsoft-edge/webview2/media/navigation-graph.png -->

There are various kinds of frames.  WebView currently supports top-level iframes.  WebView2 doesn't currently support nested iframes.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Frame Class](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2frame)
   * [CoreWebView2Frame.ExecuteScriptAsync Method](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2frame.executescriptasync)
   * [WebView2.ExecuteScriptAsync Method](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.wpf.webview2.executescriptasync)
   * [CoreWebView2.ExecuteScriptAsync Method](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.executescriptasync#microsoft-web-webview2-core-corewebview2-executescriptasync(system-string))
<!-- todo: which types' method to link to? -->

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Frame Class](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame)
   * [CoreWebView2Frame.ExecuteScriptAsync Method](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#executescriptasync)
   * [CoreWebView2.ExecuteScriptAsync Method](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#executescriptasync)

   <!-- * [WebView2.ExecuteScriptAsync Method]() -->

##### [Win32/C++](#tab/win32cpp)

<!-- sort by class alpha, then by member alpha, then indent -->

* [CoreWebView2Frame Class](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2frame)

* [ICoreWebView2Frame2::ExecuteScript](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2frame2#executescript)
<!-- todo: keep link? -->
* [interface ICoreWebView2ExecuteScriptCompletedHandler](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2executescriptcompletedhandler)
<!-- todo: keep link? -->

---

See also:
* [Script execution](../concepts/overview-features-apis.md#script-execution) in _Overview of WebView2 features and APIs_.


<!-- ------------------------------ -->
#### Example of running JavaScript code in iframes by using ExecuteScript

<!-- link to API Ref that contains an example code listing? -->

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
## Challenges when working with iframes

iframes use the same navigation states as other WebView2 pages.  All navigation events except `SourceChanged` events, currently, are supported for iframes the same way as in WebView2.

The article [Navigation events for WebView2 apps](../concepts/navigation-events.md) is valid for frames as well as webpages.

<!-- TODO: is there an API ConvertWebView2ToFrame? -->


<!-- ====================================================================== -->
## API Reference overview

The following features, listed in [Overview of WebView2 features and APIs](https://learn.microsoft.com/microsoft-edge/webview2/concepts/overview-features-apis), include frame-related APIs:

* [Host/web object sharing](../concepts/overview-features-apis.md)
* [iframes](../concepts/overview-features-apis.md#iframes)<!--same link is in h2 "Subscribing to the FrameCreated event" above-->
* [Script execution](../concepts/overview-features-apis.md#script-execution)<!--same link is in h2 "Running JavaScript code in iframes by using ExecuteScript" above-->
* [Web messaging](../concepts/overview-features-apis.md#web-messaging)<!--link doesn't exist in an h2 section above-->
* [Permissions](../concepts/overview-features-apis.md#permissions)<!--link doesn't exist in an h2 section above-->
* [Block unwanted navigating](../concepts/overview-features-apis.md#block-unwanted-navigating)<!--same link is in h2 "Navigation and navigation events" above-->
* [Navigation events](../concepts/overview-features-apis.md#navigation-events)<!--same link is in h2 "Navigation and navigation events" above-->


<!-- ====================================================================== -->
## See also

* [Call native-side code from web-side code](https://learn.microsoft.com/microsoft-edge/webview2/how-to/hostobject)
* [Navigation events for WebView2 apps](../concepts/navigation-events.md) - valid for frames as well as webpages.

**External pages:**
* [HTML <iframe\> Tag](https://www.w3schools.com/tags/tag_iframe.asp)
