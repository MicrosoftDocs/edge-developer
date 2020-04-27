---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: Microsoft Edge WebView2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/27/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html
---

# class Microsoft::Web::WebView2::Core::CoreWebView2 

WebView2 enables you to host web content using the latest Edge web browser technology.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[Settings](#settings) | The [CoreWebView2Settings](Microsoft--Web--WebView2--Core--CoreWebView2Settings.md) object contains various modifiable settings for the running
[Source](#source) | The URI of the current top level document.
[BrowserProcessId](#browserprocessid) | The process id of the browser process that hosts the WebView.
[CanGoBack](#cangoback) | Returns true if the webview can navigate to a previous page in the navigation history.
[CanGoForward](#cangoforward) | Returns true if the webview can navigate to a next page in the navigation history.
[DocumentTitle](#documenttitle) | The title for the current top level document.
[ContainsFullScreenElement](#containsfullscreenelement) | Indicates if the WebView contains a fullscreen HTML element.
[NavigationStarting](#navigationstarting) | NavigationStarting fires when the WebView main frame is requesting permission to navigate to a different URI.
[ContentLoading](#contentloading) | ContentLoading fires before any content is loaded, including scripts added with AddScriptToExecuteOnDocumentCreated ContentLoading will not fire if a same page navigation occurs (such as through fragment navigations or history.pushState navigations).
[SourceChanged](#sourcechanged) | SourceChanged fires when the Source property changes.
[HistoryChanged](#historychanged) | HistoryChange listen to the change of navigation history for the top level document.
[NavigationCompleted](#navigationcompleted) | NavigationCompleted event fires when the WebView has completely loaded (body.onload has fired) or loading stopped with error.
[FrameNavigationStarting](#framenavigationstarting) | FrameNavigationStarting fires when a child frame in the WebView requesting permission to navigate to a different URI.
[FrameNavigationCompleted](#framenavigationcompleted) | FrameNavigationCompleted event fires when a child frame has completely loaded (body.onload has fired) or loading stopped with error.
[ScriptDialogOpening](#scriptdialogopening) | The event fires when a JavaScript dialog (alert, confirm, or prompt) will show for the webview.
[PermissionRequested](#permissionrequested) | Fires when content in a WebView requests permission to access some privileged resources.
[ProcessFailed](#processfailed) | Fires when a WebView process terminated unexpectedly or become unresponsive.
[WebMessageReceived](#webmessagereceived) | This event fires when the IsWebMessageEnabled setting is set and the top level document of the webview calls `window.chrome.webview.postMessage`.
[NewWindowRequested](#newwindowrequested) | Fires when content inside the WebView requested to open a new window, such as through window.open.
[DocumentTitleChanged](#documenttitlechanged) | The event fires when the DocumentTitle property of the WebView changes and may fire before or after the NavigationCompleted event.
[ContainsFullScreenElementChanged](#containsfullscreenelementchanged) | Notifies when the ContainsFullScreenElement property changes.
[WebResourceRequested](#webresourcerequested) | Fires when the WebView is performing an HTTP request to a matching URL and resource context filter that was added with AddWebResourceRequestedFilter.
[WindowCloseRequested](#windowcloserequested) | Fires when content inside the WebView requested to close the window, such as after window.close is called.
[Navigate](#navigate) | Cause a navigation of the top level document to the specified URI.
[NavigateToString](#navigatetostring) | Initiates a navigation to htmlContent as source HTML of a new document.
[AddScriptToExecuteOnDocumentCreatedAsync](#addscripttoexecuteondocumentcreatedasync) | Add the provided JavaScript to a list of scripts that should be executed after the global object has been created, but before the HTML document has been parsed and before any other script included by the HTML document is executed.
[RemoveScriptToExecuteOnDocumentCreated](#removescripttoexecuteondocumentcreated) | Remove the corresponding JavaScript added via AddScriptToExecuteOnDocumentCreated.
[ExecuteScriptAsync](#executescriptasync) | Execute JavaScript code from the javascript parameter in the current top level document rendered in the WebView.
[CapturePreviewAsync](#capturepreviewasync) | Capture an image of what WebView is displaying.
[Reload](#reload) | Reload the current page.
[PostWebMessageAsJson](#postwebmessageasjson) | Post the specified webMessage to the top level document in this WebView.
[PostWebMessageAsString](#postwebmessageasstring) | This is a helper for posting a message that is a simple string rather than a JSON string representation of a JavaScript object.
[CallDevToolsProtocolMethodAsync](#calldevtoolsprotocolmethodasync) | Call an asynchronous DevToolsProtocol method.
[GoBack](#goback) | Navigates the WebView to the previous page in the navigation history.
[GoForward](#goforward) | Navigates the WebView to the next page in the navigation history.
[GetDevToolsProtocolEventReceiver](#getdevtoolsprotocoleventreceiver) | Get a DevTools Protocol event receiver that allows you to subscribe to a DevTools Protocol event.
[Stop](#stop) | Stop all navigations and pending resource fetches.
[AddHostObjectToScript](#addhostobjecttoscript) | Add the provided host object to script running in the WebView with the specified name.
[RemoveHostObjectFromScript](#removehostobjectfromscript) | Remove the host object specified by the name so that it is no longer accessible from JavaScript code in the WebView.
[OpenDevToolsWindow](#opendevtoolswindow) | Opens the DevTools window for the current document in the WebView.
[AddWebResourceRequestedFilter](#addwebresourcerequestedfilter) | Adds a URI and resource context filter to the WebResourceRequested event.
[RemoveWebResourceRequestedFilter](#removewebresourcerequestedfilter) | Removes a matching WebResource filter that was previously added for the WebResourceRequested event.

## Members

### Properties

#### Settings 

The [CoreWebView2Settings](Microsoft--Web--WebView2--Core--CoreWebView2Settings.md) object contains various modifiable settings for the running

> {property} [CoreWebView2Settings](Microsoft--Web--WebView2--Core--CoreWebView2Settings.md) [Settings](#settings)

#### Source 

The URI of the current top level document.

> {property} string [Source](#source)

This value potentially changes as a part of the SourceChanged event firing for some cases such as navigating to a different site or fragment navigations. It will remain the same for other types of navigations such as page reloads or history.pushState with the same URL as the current page.

#### BrowserProcessId 

The process id of the browser process that hosts the WebView.

> {property} uint [BrowserProcessId](#browserprocessid)

#### CanGoBack 

Returns true if the webview can navigate to a previous page in the navigation history.

> {property} bool [CanGoBack](#cangoback)

The HistoryChanged event will fire if CanGoBack changes value.

#### CanGoForward 

Returns true if the webview can navigate to a next page in the navigation history.

> {property} bool [CanGoForward](#cangoforward)

The HistoryChanged event will fire if CanGoForward changes value.

#### DocumentTitle 

The title for the current top level document.

> {property} string [DocumentTitle](#documenttitle)

If the document has no explicit title or is otherwise empty, a default that may or may not match the URI of the document will be used.

#### ContainsFullScreenElement 

Indicates if the WebView contains a fullscreen HTML element.

> {property} bool [ContainsFullScreenElement](#containsfullscreenelement)

### Events

#### NavigationStarting 

NavigationStarting fires when the WebView main frame is requesting permission to navigate to a different URI.

> event EventHandler< [CoreWebView2NavigationStartingEventArgs](Microsoft--Web--WebView2--Core--CoreWebView2NavigationStartingEventArgs.md) > [NavigationStarting](#navigationstarting)

This will fire for redirects as well.

#### ContentLoading 

ContentLoading fires before any content is loaded, including scripts added with AddScriptToExecuteOnDocumentCreated ContentLoading will not fire if a same page navigation occurs (such as through fragment navigations or history.pushState navigations).

> event EventHandler< [CoreWebView2ContentLoadingEventArgs](Microsoft--Web--WebView2--Core--CoreWebView2ContentLoadingEventArgs.md) > [ContentLoading](#contentloading)

This follows the NavigationStarting and SourceChanged events and precedes the HistoryChanged and NavigationCompleted events.

#### SourceChanged 

SourceChanged fires when the Source property changes.

> event EventHandler< [CoreWebView2SourceChangedEventArgs](Microsoft--Web--WebView2--Core--CoreWebView2SourceChangedEventArgs.md) > [SourceChanged](#sourcechanged)

SourceChanged fires for navigating to a different site or fragment navigations. It will not fires for other types of navigations such as page reloads or history.pushState with the same URL as the current page. SourceChanged fires before ContentLoading for navigation to a new document. Add an event handler for the SourceChanged event.

#### HistoryChanged 

HistoryChange listen to the change of navigation history for the top level document.

> event EventHandler< object > [HistoryChanged](#historychanged)

Use HistoryChange to check if CanGoBack/CanGoForward value has changed. HistoryChanged also fires for using GoBack/GoForward. HistoryChanged fires after SourceChanged and ContentLoading. Add an event handler for the HistoryChanged event.

#### NavigationCompleted 

NavigationCompleted event fires when the WebView has completely loaded (body.onload has fired) or loading stopped with error.

> event EventHandler< [CoreWebView2NavigationCompletedEventArgs](Microsoft--Web--WebView2--Core--CoreWebView2NavigationCompletedEventArgs.md) > [NavigationCompleted](#navigationcompleted)

#### FrameNavigationStarting 

FrameNavigationStarting fires when a child frame in the WebView requesting permission to navigate to a different URI.

> event EventHandler< [CoreWebView2NavigationStartingEventArgs](Microsoft--Web--WebView2--Core--CoreWebView2NavigationStartingEventArgs.md) > [FrameNavigationStarting](#framenavigationstarting)

This will fire for redirects as well.

#### FrameNavigationCompleted 

FrameNavigationCompleted event fires when a child frame has completely loaded (body.onload has fired) or loading stopped with error.

> event EventHandler< [CoreWebView2NavigationCompletedEventArgs](Microsoft--Web--WebView2--Core--CoreWebView2NavigationCompletedEventArgs.md) > [FrameNavigationCompleted](#framenavigationcompleted)

#### ScriptDialogOpening 

The event fires when a JavaScript dialog (alert, confirm, or prompt) will show for the webview.

> event EventHandler< [CoreWebView2ScriptDialogOpeningEventArgs](Microsoft--Web--WebView2--Core--CoreWebView2ScriptDialogOpeningEventArgs.md) > [ScriptDialogOpening](#scriptdialogopening)

This event only fires if the [CoreWebView2Settings.AreDefaultScriptDialogsEnabled](Microsoft--Web--WebView2--Core--CoreWebView2Settings.md) property is set to false. The ScriptDialogOpening event can be used to suppress dialogs or replace default dialogs with custom dialogs.

#### PermissionRequested 

Fires when content in a WebView requests permission to access some privileged resources.

> event EventHandler< [CoreWebView2PermissionRequestedEventArgs](Microsoft--Web--WebView2--Core--CoreWebView2PermissionRequestedEventArgs.md) > [PermissionRequested](#permissionrequested)

#### ProcessFailed 

Fires when a WebView process terminated unexpectedly or become unresponsive.

> event EventHandler< [CoreWebView2ProcessFailedEventArgs](Microsoft--Web--WebView2--Core--CoreWebView2ProcessFailedEventArgs.md) > [ProcessFailed](#processfailed)

#### WebMessageReceived 

This event fires when the IsWebMessageEnabled setting is set and the top level document of the webview calls `window.chrome.webview.postMessage`.

> event EventHandler< [CoreWebView2WebMessageReceivedEventArgs](Microsoft--Web--WebView2--Core--CoreWebView2WebMessageReceivedEventArgs.md) > [WebMessageReceived](#webmessagereceived)

The postMessage function is `void postMessage(object)` where object is any object supported by JSON conversion. When postMessage is called, the CoreWebView2WebMessageReceivedEventHandler set will be invoked with the postMessage's object parameter converted to a JSON string.

#### NewWindowRequested 

Fires when content inside the WebView requested to open a new window, such as through window.open.

> event EventHandler< [CoreWebView2NewWindowRequestedEventArgs](Microsoft--Web--WebView2--Core--CoreWebView2NewWindowRequestedEventArgs.md) > [NewWindowRequested](#newwindowrequested)

The app can pass a target webview that will be considered the opened window.

#### DocumentTitleChanged 

The event fires when the DocumentTitle property of the WebView changes and may fire before or after the NavigationCompleted event.

> event EventHandler< object > [DocumentTitleChanged](#documenttitlechanged)

#### ContainsFullScreenElementChanged 

Notifies when the ContainsFullScreenElement property changes.

> event EventHandler< object > [ContainsFullScreenElementChanged](#containsfullscreenelementchanged)

This means that an HTML element inside the WebView is entering fullscreen to the size of the WebView or leaving fullscreen. This event is useful when, for example, a video element requests to go fullscreen. The listener of ContainsFullScreenElementChanged can then resize the WebView in response.

#### WebResourceRequested 

Fires when the WebView is performing an HTTP request to a matching URL and resource context filter that was added with AddWebResourceRequestedFilter.

> event EventHandler< [CoreWebView2WebResourceRequestedEventArgs](Microsoft--Web--WebView2--Core--CoreWebView2WebResourceRequestedEventArgs.md) > [WebResourceRequested](#webresourcerequested)

At least one filter must be added for the event to fire.

#### WindowCloseRequested 

Fires when content inside the WebView requested to close the window, such as after window.close is called.

> event EventHandler< object > [WindowCloseRequested](#windowcloserequested)

The app should close the WebView and related app window if that makes sense to the app.

### Methods

#### Navigate 

Cause a navigation of the top level document to the specified URI.

> public inline void [Navigate](#navigate)(string uri)

See the navigation events for more information. Note that this starts a navigation and the corresponding NavigationStarting event will fire sometime after this Navigate call completes.

#### NavigateToString 

Initiates a navigation to htmlContent as source HTML of a new document.

> public inline void [NavigateToString](#navigatetostring)(string htmlContent)

The htmlContent parameter may not be larger than 2 MB of characters. The origin of the new page will be about:blank.

#### AddScriptToExecuteOnDocumentCreatedAsync 

Add the provided JavaScript to a list of scripts that should be executed after the global object has been created, but before the HTML document has been parsed and before any other script included by the HTML document is executed.

> public inline async Task< string > [AddScriptToExecuteOnDocumentCreatedAsync](#addscripttoexecuteondocumentcreatedasync)(string javaScript)

The injected script will apply to all future top level document and child frame navigations until removed with RemoveScriptToExecuteOnDocumentCreated. This is applied asynchronously and you must wait for the completion handler to run before you can be sure that the script is ready to execute on future navigations.

Note that if an HTML document has sandboxing of some kind via [sandbox](https://developer.mozilla.org/docs/Web/HTML/Element/iframe#attr-sandbox) properties or the [Content-Security-Policy HTTP header](https://developer.mozilla.org/docs/Web/HTTP/Headers/Content-Security-Policy) this will affect the script run here. So, for example, if the 'allow-modals' keyword is not set then calls to the `alert` function will be ignored.

#### RemoveScriptToExecuteOnDocumentCreated 

Remove the corresponding JavaScript added via AddScriptToExecuteOnDocumentCreated.

> public inline void [RemoveScriptToExecuteOnDocumentCreated](#removescripttoexecuteondocumentcreated)(string id)

#### ExecuteScriptAsync 

Execute JavaScript code from the javascript parameter in the current top level document rendered in the WebView.

> public inline async Task< string > [ExecuteScriptAsync](#executescriptasync)(string javaScript)

This will execute asynchronously and when complete, if a handler is provided in the ExecuteScriptCompletedHandler parameter, its Invoke method will be called with the result of evaluating the provided JavaScript. The result value is a JSON encoded string. If the result is undefined, contains a reference cycle, or otherwise cannot be encoded into JSON, the JSON null value will be returned as the string 'null'. Note that a function that has no explicit return value returns undefined. If the executed script throws an unhandled exception, then the result is also 'null'. This method is applied asynchronously. If the method is called after NavigationStarting event during a navigation, the script will be executed in the new document when loading it, around the time ContentLoading is fired. ExecuteScript will work even if IsScriptEnabled is set to FALSE.

#### CapturePreviewAsync 

Capture an image of what WebView is displaying.

> public inline async Task [CapturePreviewAsync](#capturepreviewasync)(CoreWebView2CapturePreviewImageFormat imageFormat,Stream imageStream)

Specify the format of the image with the imageFormat parameter. The resulting image binary data is written to the provided imageStream parameter. When CapturePreview finishes writing to the stream, the Invoke method on the provided handler parameter is called.

#### Reload 

Reload the current page.

> public inline void [Reload](#reload)()

This is similar to navigating to the URI of current top level document including all navigation events firing and respecting any entries in the HTTP cache. But, the back/forward history will not be modified.

#### PostWebMessageAsJson 

Post the specified webMessage to the top level document in this WebView.

> public inline void [PostWebMessageAsJson](#postwebmessageasjson)(string webMessageAsJson)

The top level document's window.chrome.webview's message event fires. JavaScript in that document may subscribe and unsubscribe to the event via the following:

```cpp
window.chrome.webview.addEventListener('message', handler)
window.chrome.webview.removeEventListener('message', handler)
```

The event args is an instance of `MessageEvent`. The [CoreWebView2Settings.IsWebMessageEnabled](Microsoft--Web--WebView2--Core--CoreWebView2Settings.md) setting must be true or this method will fail with E_INVALIDARG. The event arg's data property is the webMessage string parameter parsed as a JSON string into a JavaScript object. The event arg's source property is a reference to the `window.chrome.webview` object. See SetWebMessageReceivedEventHandler for information on sending messages from the HTML document in the webview to the host. This message is sent asynchronously. If a navigation occurs before the message is posted to the page, then the message will not be sent.

#### PostWebMessageAsString 

This is a helper for posting a message that is a simple string rather than a JSON string representation of a JavaScript object.

> public inline void [PostWebMessageAsString](#postwebmessageasstring)(string webMessageAsString)

This behaves in exactly the same manner as PostWebMessageAsJson but the `window.chrome.webview` message event arg's data property will be a string with the same value as webMessageAsString. Use this instead of PostWebMessageAsJson if you want to communicate via simple strings rather than JSON objects.

#### CallDevToolsProtocolMethodAsync 

Call an asynchronous DevToolsProtocol method.

> public inline async Task< string > [CallDevToolsProtocolMethodAsync](#calldevtoolsprotocolmethodasync)(string methodName,string parametersAsJson)

See the [DevTools Protocol Viewer](https://aka.ms/DevToolsProtocolDocs) for a list and description of available methods. The methodName parameter is the full name of the method in the format `{domain}.{method}`. The parametersAsJson parameter is a JSON formatted string containing the parameters for the corresponding method. The handler's Invoke method will be called when the method asynchronously completes. Invoke will be called with the method's return object as a JSON string.

#### GoBack 

Navigates the WebView to the previous page in the navigation history.

> public inline void [GoBack](#goback)()

#### GoForward 

Navigates the WebView to the next page in the navigation history.

> public inline void [GoForward](#goforward)()

#### GetDevToolsProtocolEventReceiver 

Get a DevTools Protocol event receiver that allows you to subscribe to a DevTools Protocol event.

> public inline CoreWebView2DevToolsProtocolEventReceiver [GetDevToolsProtocolEventReceiver](#getdevtoolsprotocoleventreceiver)(string eventName)

See the [DevTools Protocol Viewer](https://aka.ms/DevToolsProtocolDocs) for a list and description of available methods. The methodName parameter is the full name of the method in the format `{domain}.{method}`. The parametersAsJson parameter is a JSON formatted string containing the parameters for the corresponding method. The handler's Invoke method will be called when the method asynchronously completes. Invoke will be called with the method's return object as a JSON string.

#### Stop 

Stop all navigations and pending resource fetches.

> public inline void [Stop](#stop)()

Does not stop scripts.

#### AddHostObjectToScript 

Add the provided host object to script running in the WebView with the specified name.

> public inline void [AddHostObjectToScript](#addhostobjecttoscript)(string name,object rawObject)

Host objects are exposed as host object proxies via `window.chrome.webview.hostObjects.{name}`. Host object proxies are promises and will resolve to an object representing the host object. JavaScript code in the WebView will be able to access appObject as following and then access attributes and methods of appObject: 
```cpp
let app_object = await window.chrome.webview.hostObjects.host_object;
let attr1 = await app_object.attr1;
let result = await app_object.method1(parameters);
```
 Note that while simple types, IDispatch and array are supported, generic IUnknown, VT_DECIMAL, or VT_RECORD variant is not supported. Remote JavaScript objects like callback functions are represented as an VT_DISPATCH VARIANT with the object implementing IDispatch. The JavaScript callback method may be invoked using DISPID_VALUE for the DISPID. Nested arrays are supported up to a depth of 3. Arrays of by reference types are not supported. VT_EMPTY and VT_NULL are mapped into JavaScript as null. In JavaScript null and undefined are mapped to VT_EMPTY.

Additionally, all host objects are exposed as `window.chrome.webview.hostObjects.sync.{name}`. Here the host objects are exposed as synchronous host object proxies. These are not promises and calls to functions or property access synchronously block running script waiting to communicate cross process for the host code to run. Accordingly this can result in reliability issues and it is recommended that you use the promise based asynchronous `window.chrome.webview.hostObjects.{name}` API described above.

Synchronous host object proxies and asynchronous host object proxies can both proxy the same host object. Remote changes made by one proxy will be reflected in any other proxy of that same host object whether the other proxies and synchronous or asynchronous.

While JavaScript is blocked on a synchronous call to native code, that native code is unable to call back to JavaScript. Attempts to do so will fail with HRESULT_FROM_WIN32(ERROR_POSSIBLE_DEADLOCK).

Host object proxies are JavaScript Proxy objects that intercept all property get, property set, and method invocations. Properties or methods that are a part of the Function or Object prototype are run locally. Additionally any property or method in the array `chrome.webview.hostObjects.options.forceLocalProperties` will also be run locally. This defaults to including optional methods that have meaning in JavaScript like `toJSON` and `Symbol.toPrimitive`. You can add more to this array as required.

There's a method `chrome.webview.hostObjects.cleanupSome` that will best effort garbage collect host object proxies.

Host object proxies additionally have the following methods which run locally:

* applyHostFunction, getHostProperty, setHostProperty: Perform a method invocation, property get, or property set on the host object. You can use these to explicitly force a method or property to run remotely if there is a conflicting local method or property. For instance, `proxy.toString()` will run the local toString method on the proxy object. But `proxy.applyHostFunction('toString')` runs `toString` on the host proxied object instead.

* getLocalProperty, setLocalProperty: Perform property get, or property set locally. You can use these methods to force getting or setting a property on the host object proxy itself rather than on the host object it represents. For instance, `proxy.unknownProperty` will get the property named `unknownProperty` from the host proxied object. But `proxy.getLocalProperty('unknownProperty')` will get the value of the property `unknownProperty` on the proxy object itself.

* sync: Asynchronous host object proxies expose a sync method which returns a promise for a synchronous host object proxy for the same host object. For example, `chrome.webview.hostObjects.sample.methodCall()` returns an asynchronous host object proxy. You can use the `sync` method to obtain a synchronous host object proxy instead: `const syncProxy = await chrome.webview.hostObjects.sample.methodCall().sync()`

* async: Synchronous host object proxies expose an async method which blocks and returns an asynchronous host object proxy for the same host object. For example, `chrome.webview.hostObjects.sync.sample.methodCall()` returns a synchronous host object proxy. Calling the `async` method on this blocks and then returns an asynchronous host object proxy for the same host object: `const asyncProxy = chrome.webview.hostObjects.sync.sample.methodCall().async()`

* then: Asynchronous host object proxies have a then method. This allows them to be awaitable. `then` will return a promise that resolves with a representation of the host object. If the proxy represents a JavaScript literal then a copy of that is returned locally. If the proxy represents a function then a non-awaitable proxy is returned. If the proxy represents a JavaScript object with a mix of literal properties and function properties, then the a copy of the object is returned with some properties as host object proxies.

All other property and method invocations (other than the above Remote object proxy methods, forceLocalProperties list, and properties on Function and Object prototypes) are run remotely. Asynchronous host object proxies return a promise representing asynchronous completion of remotely invoking the method, or getting the property. The promise resolves after the remote operations complete and the promises resolve to the resulting value of the operation. Synchronous host object proxies work similarly but block JavaScript execution and wait for the remote operation to complete.

Setting a property on an asynchronous host object proxy works slightly differently. The set returns immediately and the return value is the value that will be set. This is a requirement of the JavaScript Proxy object. If you need to asynchronously wait for the property set to complete, use the setHostProperty method which returns a promise as described above. Synchronous object property set property synchronously blocks until the property is set.

#### RemoveHostObjectFromScript 

Remove the host object specified by the name so that it is no longer accessible from JavaScript code in the WebView.

> public inline void [RemoveHostObjectFromScript](#removehostobjectfromscript)(string name)

While new access attempts will be denied, if the object is already obtained by JavaScript code in the WebView, the JavaScript code will continue to have access to that object. Calling this method for a name that is already removed or never added will fail.

#### OpenDevToolsWindow 

Opens the DevTools window for the current document in the WebView.

> public inline void [OpenDevToolsWindow](#opendevtoolswindow)()

Does nothing if called when the DevTools window is already open.

#### AddWebResourceRequestedFilter 

Adds a URI and resource context filter to the WebResourceRequested event.

> public inline void [AddWebResourceRequestedFilter](#addwebresourcerequestedfilter)(string uri,[CoreWebView2WebResourceContext](Microsoft--Web--WebView2--Core.md) ResourceContext)

URI parameter can be a wildcard string ('': zero or more, '?': exactly one). nullptr is equivalent to L"". See CoreWebView2WebResourceContext enum for description of resource context filters.

#### RemoveWebResourceRequestedFilter 

Removes a matching WebResource filter that was previously added for the WebResourceRequested event.

> public inline void [RemoveWebResourceRequestedFilter](#removewebresourcerequestedfilter)(string uri,[CoreWebView2WebResourceContext](Microsoft--Web--WebView2--Core.md) ResourceContext)

If the same filter was added multiple times, then it will need to be removed as many times as it was added for the removal to be effective. Returns E_INVALIDARG for a filter that was never added.

