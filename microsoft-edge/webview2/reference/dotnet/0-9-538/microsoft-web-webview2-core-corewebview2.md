---
description: Embed web technologies (HTML, CSS, and JavaScript) in your native applications with the Microsoft Edge WebView2 control
title: Microsoft.Web.WebView2.Core.CoreWebView2
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/20/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: Microsoft.Web.WebView2, Core, webview2, webview, dotnet, wpf, winforms, app, edge, CoreWebView2, CoreWebView2Controller, browser control, edge html, Microsoft.Web.WebView2.Core.CoreWebView2
---

# Microsoft.Web.WebView2.Core.CoreWebView2 class 

Namespace: Microsoft.Web.WebView2.Core\
Assembly: Microsoft.Web.WebView2.Core.dll

WebView2 enables you to host web content using the latest Edge web browser technology.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[BrowserProcessId](#browserprocessid) | The process id of the browser process that hosts the WebView.
[CanGoBack](#cangoback) | Returns true if the webview can navigate to a previous page in the navigation history.
[CanGoForward](#cangoforward) | Returns true if the webview can navigate to a next page in the navigation history.
[ContainsFullScreenElement](#containsfullscreenelement) | Indicates if the WebView contains a fullscreen HTML element.
[ContainsFullScreenElementChanged](#containsfullscreenelementchanged) | Notifies when the ContainsFullScreenElement property changes.
[ContentLoading](#contentloading) | ContentLoading fires before any content is loaded, including scripts added with AddScriptToExecuteOnDocumentCreated ContentLoading will not fire if a same page navigation occurs (such as through fragment navigations or history.pushState navigations).
[DocumentTitle](#documenttitle) | The title for the current top level document.
[DocumentTitleChanged](#documenttitlechanged) | The event fires when the DocumentTitle property of the WebView changes and may fire before or after the NavigationCompleted event.
[FrameNavigationCompleted](#framenavigationcompleted) | FrameNavigationCompleted event fires when a child frame has completely loaded (body.onload has fired) or loading stopped with error.
[FrameNavigationStarting](#framenavigationstarting) | FrameNavigationStarting fires when a child frame in the WebView requesting permission to navigate to a different URI.
[HistoryChanged](#historychanged) | HistoryChange listen to the change of navigation history for the top level document.
[NavigationCompleted](#navigationcompleted) | NavigationCompleted event fires when the WebView has completely loaded (body.onload has fired) or loading stopped with error.
[NavigationStarting](#navigationstarting) | NavigationStarting fires when the WebView main frame is requesting permission to navigate to a different URI.
[NewWindowRequested](#newwindowrequested) | Fires when content inside the WebView requested to open a new window, such as through window.open.
[PermissionRequested](#permissionrequested) | Fires when content in a WebView requests permission to access some privileged resources.
[ProcessFailed](#processfailed) | Fires when a WebView process terminated unexpectedly or become unresponsive.
[ScriptDialogOpening](#scriptdialogopening) | The event fires when a JavaScript dialog (alert, confirm, or prompt) will show for the webview.
[Settings](#settings) | The CoreWebView2Settings object contains various modifiable settings for the running
[Source](#source) | The URI of the current top level document.
[SourceChanged](#sourcechanged) | SourceChanged fires when the Source property changes.
[WebMessageReceived](#webmessagereceived) | This event fires when the IsWebMessageEnabled setting is set and the top level document of the webview calls `window.chrome.webview.postMessage`.
[WebResourceRequested](#webresourcerequested) | Fires when the WebView is performing an HTTP request to a matching URL and resource context filter that was added with AddWebResourceRequestedFilter.
[WebResourceResponseReceived](#webresourceresponsereceived) | WebResourceResponseReceived event fires after the WebView has received and processed the response for a WebResource request.
[WindowCloseRequested](#windowcloserequested) | Fires when content inside the WebView requested to close the window, such as after window.close is called.
[AddHostObjectToScript](#addhostobjecttoscript) | Add the provided host object to script running in the WebView with the specified name.
[AddScriptToExecuteOnDocumentCreatedAsync](#addscripttoexecuteondocumentcreatedasync) | Add the provided JavaScript to a list of scripts that should be executed after the global object has been created, but before the HTML document has been parsed and before any other script included by the HTML document is executed.
[AddWebResourceRequestedFilter](#addwebresourcerequestedfilter) | Adds a URI and resource context filter to the WebResourceRequested event.
[CallDevToolsProtocolMethodAsync](#calldevtoolsprotocolmethodasync) | Call an asynchronous DevToolsProtocol method.
[CapturePreviewAsync](#capturepreviewasync) | Capture an image of what WebView is displaying.
[ExecuteScriptAsync](#executescriptasync) | Execute JavaScript code from the javascript parameter in the current top level document rendered in the WebView.
[GetDevToolsProtocolEventReceiver](#getdevtoolsprotocoleventreceiver) | Get a DevTools Protocol event receiver that allows you to subscribe to a DevTools Protocol event.
[GoBack](#goback) | Navigates the WebView to the previous page in the navigation history.
[GoForward](#goforward) | Navigates the WebView to the next page in the navigation history.
[Navigate](#navigate) | Cause a navigation of the top level document to the specified URI.
[NavigateToString](#navigatetostring) | Initiates a navigation to htmlContent as source HTML of a new document.
[OpenDevToolsWindow](#opendevtoolswindow) | Opens the DevTools window for the current document in the WebView.
[PostWebMessageAsJson](#postwebmessageasjson) | Post the specified webMessage to the top level document in this WebView.
[PostWebMessageAsString](#postwebmessageasstring) | This is a helper for posting a message that is a simple string rather than a JSON string representation of a JavaScript object.
[Reload](#reload) | Reload the current page.
[RemoveHostObjectFromScript](#removehostobjectfromscript) | Remove the host object specified by the name so that it is no longer accessible from JavaScript code in the WebView.
[RemoveScriptToExecuteOnDocumentCreated](#removescripttoexecuteondocumentcreated) | Remove the corresponding JavaScript added via AddScriptToExecuteOnDocumentCreated with the specified script id.
[RemoveWebResourceRequestedFilter](#removewebresourcerequestedfilter) | Removes a matching WebResource filter that was previously added for the WebResourceRequested event.
[Stop](#stop) | Stop all navigations and pending resource fetches.

## Members

#### BrowserProcessId 

The process id of the browser process that hosts the WebView.

> public uint [BrowserProcessId](#browserprocessid)

#### CanGoBack 

Returns true if the webview can navigate to a previous page in the navigation history.

> public bool [CanGoBack](#cangoback)

The HistoryChanged event will fire if CanGoBack changes value.

#### CanGoForward 

Returns true if the webview can navigate to a next page in the navigation history.

> public bool [CanGoForward](#cangoforward)

The HistoryChanged event will fire if CanGoForward changes value.

#### ContainsFullScreenElement 

Indicates if the WebView contains a fullscreen HTML element.

> public bool [ContainsFullScreenElement](#containsfullscreenelement)

#### ContainsFullScreenElementChanged 

Notifies when the ContainsFullScreenElement property changes.

> public event EventHandler< object > [ContainsFullScreenElementChanged](#containsfullscreenelementchanged)

This means that an HTML element inside the WebView is entering fullscreen to the size of the WebView or leaving fullscreen. This event is useful when, for example, a video element requests to go fullscreen. The listener of ContainsFullScreenElementChanged can then resize the WebView in response.

#### ContentLoading 

ContentLoading fires before any content is loaded, including scripts added with AddScriptToExecuteOnDocumentCreated ContentLoading will not fire if a same page navigation occurs (such as through fragment navigations or history.pushState navigations).

> public event EventHandler< [CoreWebView2ContentLoadingEventArgs](microsoft-web-webview2-core-corewebview2contentloadingeventargs.md) > [ContentLoading](#contentloading)

This follows the NavigationStarting and SourceChanged events and precedes the HistoryChanged and NavigationCompleted events.

#### DocumentTitle 

The title for the current top level document.

> public string [DocumentTitle](#documenttitle)

If the document has no explicit title or is otherwise empty, a default that may or may not match the URI of the document will be used.

#### DocumentTitleChanged 

The event fires when the DocumentTitle property of the WebView changes and may fire before or after the NavigationCompleted event.

> public event EventHandler< object > [DocumentTitleChanged](#documenttitlechanged)

#### FrameNavigationCompleted 

FrameNavigationCompleted event fires when a child frame has completely loaded (body.onload has fired) or loading stopped with error.

> public event EventHandler< [CoreWebView2NavigationCompletedEventArgs](microsoft-web-webview2-core-corewebview2navigationcompletedeventargs.md) > [FrameNavigationCompleted](#framenavigationcompleted)

#### FrameNavigationStarting 

FrameNavigationStarting fires when a child frame in the WebView requesting permission to navigate to a different URI.

> public event EventHandler< [CoreWebView2NavigationStartingEventArgs](microsoft-web-webview2-core-corewebview2navigationstartingeventargs.md) > [FrameNavigationStarting](#framenavigationstarting)

This will fire for redirects as well.

#### HistoryChanged 

HistoryChange listen to the change of navigation history for the top level document.

> public event EventHandler< object > [HistoryChanged](#historychanged)

Use HistoryChange to check if CanGoBack/CanGoForward value has changed. HistoryChanged also fires for using GoBack/GoForward. HistoryChanged fires after SourceChanged and ContentLoading. Add an event handler for the HistoryChanged event.

#### NavigationCompleted 

NavigationCompleted event fires when the WebView has completely loaded (body.onload has fired) or loading stopped with error.

> public event EventHandler< [CoreWebView2NavigationCompletedEventArgs](microsoft-web-webview2-core-corewebview2navigationcompletedeventargs.md) > [NavigationCompleted](#navigationcompleted)

#### NavigationStarting 

NavigationStarting fires when the WebView main frame is requesting permission to navigate to a different URI.

> public event EventHandler< [CoreWebView2NavigationStartingEventArgs](microsoft-web-webview2-core-corewebview2navigationstartingeventargs.md) > [NavigationStarting](#navigationstarting)

This will fire for redirects as well.

#### NewWindowRequested 

Fires when content inside the WebView requested to open a new window, such as through window.open.

> public event EventHandler< [CoreWebView2NewWindowRequestedEventArgs](microsoft-web-webview2-core-corewebview2newwindowrequestedeventargs.md) > [NewWindowRequested](#newwindowrequested)

The app can pass a target webview that will be considered the opened window.

#### PermissionRequested 

Fires when content in a WebView requests permission to access some privileged resources.

> public event EventHandler< [CoreWebView2PermissionRequestedEventArgs](microsoft-web-webview2-core-corewebview2permissionrequestedeventargs.md) > [PermissionRequested](#permissionrequested)

#### ProcessFailed 

Fires when a WebView process terminated unexpectedly or become unresponsive.

> public event EventHandler< [CoreWebView2ProcessFailedEventArgs](microsoft-web-webview2-core-corewebview2processfailedeventargs.md) > [ProcessFailed](#processfailed)

#### ScriptDialogOpening 

The event fires when a JavaScript dialog (alert, confirm, or prompt) will show for the webview.

> public event EventHandler< [CoreWebView2ScriptDialogOpeningEventArgs](microsoft-web-webview2-core-corewebview2scriptdialogopeningeventargs.md) > [ScriptDialogOpening](#scriptdialogopening)

This event only fires if the CoreWebView2Settings.AreDefaultScriptDialogsEnabled property is set to false. The ScriptDialogOpening event can be used to suppress dialogs or replace default dialogs with custom dialogs.

#### Settings 

The CoreWebView2Settings object contains various modifiable settings for the running

> public [CoreWebView2Settings](microsoft-web-webview2-core-corewebview2settings.md) [Settings](#settings)

#### Source 

The URI of the current top level document.

> public string [Source](#source)

This value potentially changes as a part of the SourceChanged event firing for some cases such as navigating to a different site or fragment navigations. It will remain the same for other types of navigations such as page reloads or history.pushState with the same URL as the current page.

#### SourceChanged 

SourceChanged fires when the Source property changes.

> public event EventHandler< [CoreWebView2SourceChangedEventArgs](microsoft-web-webview2-core-corewebview2sourcechangedeventargs.md) > [SourceChanged](#sourcechanged)

SourceChanged fires for navigating to a different site or fragment navigations. It will not fires for other types of navigations such as page reloads or history.pushState with the same URL as the current page. SourceChanged fires before ContentLoading for navigation to a new document. Add an event handler for the SourceChanged event.

#### WebMessageReceived 

This event fires when the IsWebMessageEnabled setting is set and the top level document of the webview calls `window.chrome.webview.postMessage`.

> public event EventHandler< [CoreWebView2WebMessageReceivedEventArgs](microsoft-web-webview2-core-corewebview2webmessagereceivedeventargs.md) > [WebMessageReceived](#webmessagereceived)

The postMessage function is `void postMessage(object)` where object is any object supported by JSON conversion. When postMessage is called, the CoreWebView2WebMessageReceivedEventHandler set will be invoked with the postMessage's object parameter converted to a JSON string.

#### WebResourceRequested 

Fires when the WebView is performing an HTTP request to a matching URL and resource context filter that was added with AddWebResourceRequestedFilter.

> public event EventHandler< [CoreWebView2WebResourceRequestedEventArgs](microsoft-web-webview2-core-corewebview2webresourcerequestedeventargs.md) > [WebResourceRequested](#webresourcerequested)

At least one filter must be added for the event to fire.

#### WebResourceResponseReceived 

[!INCLUDE [prerelease-note](../../includes/prerelease-note.md)]

WebResourceResponseReceived event fires after the WebView has received and processed the response for a WebResource request.

> public event EventHandler< [CoreWebView2WebResourceResponseReceivedEventArgs](microsoft-web-webview2-core-corewebview2webresourceresponsereceivedeventargs.md) > [WebResourceResponseReceived](#webresourceresponsereceived)

The event args include the WebResourceRequest as sent by the wire and WebResourceResponse received, including any additional headers added by the network stack that were not be included as part of the associated WebResourceRequested event, such as Authentication headers.

#### WindowCloseRequested 

Fires when content inside the WebView requested to close the window, such as after window.close is called.

> public event EventHandler< object > [WindowCloseRequested](#windowcloserequested)

The app should close the WebView and related app window if that makes sense to the app.

#### AddHostObjectToScript 

Add the provided host object to script running in the WebView with the specified name.

> public void [AddHostObjectToScript](#addhostobjecttoscript)(string name, object rawObject)

Host objects are exposed as host object proxies via `window.chrome.webview.hostObjects.{name}`. Host object proxies are promises and will resolve to an object representing the host object. JavaScript code in the WebView will be able to access appObject as following and then access attributes and methods of appObject: 
```
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

#### AddScriptToExecuteOnDocumentCreatedAsync 

Add the provided JavaScript to a list of scripts that should be executed after the global object has been created, but before the HTML document has been parsed and before any other script included by the HTML document is executed.

> public async Task< string > [AddScriptToExecuteOnDocumentCreatedAsync](#addscripttoexecuteondocumentcreatedasync)(string javaScript)

##### Returns
Returns a script id that may be passed when calling [RemoveScriptToExecuteOnDocumentCreated](#removescripttoexecuteondocumentcreated). 

The injected script will apply to all future top level document and child frame navigations until removed with RemoveScriptToExecuteOnDocumentCreated. This is applied asynchronously and you must wait for the completion handler to run before you can be sure that the script is ready to execute on future navigations.

Note that if an HTML document has sandboxing of some kind via [sandbox](https://developer.mozilla.org/docs/Web/HTML/Element/iframe#attr-sandbox) properties or the [Content-Security-Policy HTTP header](https://developer.mozilla.org/docs/Web/HTTP/Headers/Content-Security-Policy) this will affect the script run here. So, for example, if the 'allow-modals' keyword is not set then calls to the `alert` function will be ignored.

#### AddWebResourceRequestedFilter 

Adds a URI and resource context filter to the WebResourceRequested event.

> public void [AddWebResourceRequestedFilter](#addwebresourcerequestedfilter)(string uri, CoreWebView2WebResourceContext ResourceContext)

URI parameter can be a wildcard string ('': zero or more, '?': exactly one). nullptr is equivalent to L"". See CoreWebView2WebResourceContext enum for description of resource context filters.

#### CallDevToolsProtocolMethodAsync 

Call an asynchronous DevToolsProtocol method.

> public async Task< string > [CallDevToolsProtocolMethodAsync](#calldevtoolsprotocolmethodasync)(string methodName, string parametersAsJson)

##### Returns
A JSON string that represents the method's return object. 

See the [DevTools Protocol Viewer](https://aka.ms/DevToolsProtocolDocs) for a list and description of available methods. The methodName parameter is the full name of the method in the format `{domain}.{method}`. The parametersAsJson parameter is a JSON formatted string containing the parameters for the corresponding method. The handler's Invoke method will be called when the method asynchronously completes. Invoke will be called with the method's return object as a JSON string.

#### CapturePreviewAsync 

Capture an image of what WebView is displaying.

> public async Task [CapturePreviewAsync](#capturepreviewasync)(CoreWebView2CapturePreviewImageFormat imageFormat, Stream imageStream)

Specify the format of the image with the imageFormat parameter. The resulting image binary data is written to the provided imageStream parameter. When CapturePreview finishes writing to the stream, the Invoke method on the provided handler parameter is called.

#### ExecuteScriptAsync 

Execute JavaScript code from the javascript parameter in the current top level document rendered in the WebView.

> public async Task< string > [ExecuteScriptAsync](#executescriptasync)(string javaScript)

##### Returns
Returns a JSON encoded string that represents the result of running the provided JavaScript. 

This method runs the provided JavaScript asynchronously and will return the result of the provided JavaScript. If the result of the provided JavaScript is `undefined`, contains a reference cycle, or otherwise cannot be encoded into JSON, the string 'null' is returned. If a called function in the provided JavaScript has no explicit return value, `undefined` is returned. If the provided JavaScript throws an unhandled exception, 'null' is returned. If this method is called after a NavigationStarting event, the provided JavaScript is run on the new document when it loads, around the same time that ContentLoading is triggered. ExecuteScriptAsync will work even if IsScriptEnabled is set to `FALSE`.

#### GetDevToolsProtocolEventReceiver 

Get a DevTools Protocol event receiver that allows you to subscribe to a DevTools Protocol event.

> public CoreWebView2DevToolsProtocolEventReceiver [GetDevToolsProtocolEventReceiver](#getdevtoolsprotocoleventreceiver)(string eventName)

See the [DevTools Protocol Viewer](https://aka.ms/DevToolsProtocolDocs) for a list and description of available methods. The methodName parameter is the full name of the method in the format `{domain}.{method}`. The parametersAsJson parameter is a JSON formatted string containing the parameters for the corresponding method. The handler's Invoke method will be called when the method asynchronously completes. Invoke will be called with the method's return object as a JSON string.

#### GoBack 

Navigates the WebView to the previous page in the navigation history.

> public void [GoBack](#goback)()

#### GoForward 

Navigates the WebView to the next page in the navigation history.

> public void [GoForward](#goforward)()

#### Navigate 

Cause a navigation of the top level document to the specified URI.

> public void [Navigate](#navigate)(string uri)

See the navigation events for more information. Note that this starts a navigation and the corresponding NavigationStarting event will fire sometime after this Navigate call completes.

#### NavigateToString 

Initiates a navigation to htmlContent as source HTML of a new document.

> public void [NavigateToString](#navigatetostring)(string htmlContent)

The htmlContent parameter may not be larger than 2 MB of characters. The origin of the new page will be about:blank.

#### OpenDevToolsWindow 

Opens the DevTools window for the current document in the WebView.

> public void [OpenDevToolsWindow](#opendevtoolswindow)()

Does nothing if called when the DevTools window is already open.

#### PostWebMessageAsJson 

Post the specified webMessage to the top level document in this WebView.

> public void [PostWebMessageAsJson](#postwebmessageasjson)(string webMessageAsJson)

The top level document's window.chrome.webview's message event fires. JavaScript in that document may subscribe and unsubscribe to the event via the following:

```
window.chrome.webview.addEventListener('message', handler)
window.chrome.webview.removeEventListener('message', handler)
```

The event args is an instance of `MessageEvent`. The CoreWebView2Settings.IsWebMessageEnabled setting must be true or this method will fail with E_INVALIDARG. The event arg's data property is the webMessage string parameter parsed as a JSON string into a JavaScript object. The event arg's source property is a reference to the `window.chrome.webview` object. See SetWebMessageReceivedEventHandler for information on sending messages from the HTML document in the webview to the host. This message is sent asynchronously. If a navigation occurs before the message is posted to the page, then the message will not be sent.

#### PostWebMessageAsString 

This is a helper for posting a message that is a simple string rather than a JSON string representation of a JavaScript object.

> public void [PostWebMessageAsString](#postwebmessageasstring)(string webMessageAsString)

This behaves in exactly the same manner as PostWebMessageAsJson but the `window.chrome.webview` message event arg's data property will be a string with the same value as webMessageAsString. Use this instead of PostWebMessageAsJson if you want to communicate via simple strings rather than JSON objects.

#### Reload 

Reload the current page.

> public void [Reload](#reload)()

This is similar to navigating to the URI of current top level document including all navigation events firing and respecting any entries in the HTTP cache. But, the back/forward history will not be modified.

#### RemoveHostObjectFromScript 

Remove the host object specified by the name so that it is no longer accessible from JavaScript code in the WebView.

> public void [RemoveHostObjectFromScript](#removehostobjectfromscript)(string name)

While new access attempts will be denied, if the object is already obtained by JavaScript code in the WebView, the JavaScript code will continue to have access to that object. Calling this method for a name that is already removed or never added will fail.

#### RemoveScriptToExecuteOnDocumentCreated 

Remove the corresponding JavaScript added via AddScriptToExecuteOnDocumentCreated with the specified script id.

> public void [RemoveScriptToExecuteOnDocumentCreated](#removescripttoexecuteondocumentcreated)(string id)

#### RemoveWebResourceRequestedFilter 

Removes a matching WebResource filter that was previously added for the WebResourceRequested event.

> public void [RemoveWebResourceRequestedFilter](#removewebresourcerequestedfilter)(string uri, [CoreWebView2WebResourceContext](./namespace-microsoft-web-webview2-core.md) ResourceContext)

If the same filter was added multiple times, then it will need to be removed as many times as it was added for the removal to be effective. Returns E_INVALIDARG for a filter that was never added.

#### Stop 

Stop all navigations and pending resource fetches.

> public void [Stop](#stop)()

Does not stop scripts.

