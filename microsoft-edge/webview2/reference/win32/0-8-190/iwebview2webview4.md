---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: 0.8.355 - WebView2 Win32 C++ IWebView2WebView4
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/20/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge
---

# 0.8.355 - interface IWebView2WebView4 

[!INCLUDE [deprecation-note](../../includes/deprecation-note.md)]

```
interface IWebView2WebView4
  : public IWebView2WebView3
```

Additional functionality implemented by the primary WebView object.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[AddRemoteObject](#addremoteobject) | Add the provided host object to script running in the WebView with the specified name.
[RemoveRemoteObject](#removeremoteobject) | Remove the host object specified by the name so that it is no longer accessible from JavaScript code in the WebView.
[OpenDevToolsWindow](#opendevtoolswindow) | Opens the DevTools window for the current document in the WebView.
[add_AcceleratorKeyPressed](#add_acceleratorkeypressed) | Add an event handler for the AcceleratorKeyPressed event.
[remove_AcceleratorKeyPressed](#remove_acceleratorkeypressed) | Remove an event handler previously added with add_AcceleratorKeyPressed.
[WEBVIEW2_KEY_EVENT_TYPE](#webview2_key_event_type) | The type of key event that triggered an AcceleratorKeyPressed event.
[WEBVIEW2_PHYSICAL_KEY_STATUS](#webview2_physical_key_status) | A structure representing the information packed into the LPARAM given to a Win32 key event.

You can QueryInterface for this interface from the object that implements [IWebView2WebView](IWebView2WebView.md). See the [IWebView2WebView](IWebView2WebView.md) interface for more details.

## Members

#### AddRemoteObject 

Add the provided host object to script running in the WebView with the specified name.

> public HRESULT [AddRemoteObject](#addremoteobject)(LPCWSTR name,VARIANT * object)

Host objects are exposed as remote object proxies via `window.chrome.webview.remoteObjects.<name>`. Remote object proxies are promises and will resolve to an object representing the host object. The promise is rejected if the app has not added an object with the name. When JavaScript code access a property or method of the object, a promise is return, which will resolve to the value returned from the host for the property or method, or rejected in case of error such as there is no such property or method on the object or parameters are invalid. For example, when the application code does the following: 

```cpp
VARIANT object;
object.vt = VT_DISPATCH;
object.pdispVal = appObject;
webview->AddRemoteObject(L"host_object", &host);
```

 JavaScript code in the WebView will be able to access appObject as following and then access attributes and methods of appObject: 

```js
let app_object = await window.chrome.webview.remoteObjects.host_object;
let attr1 = await app_object.attr1;
let result = await app_object.method1(parameters);
```

 Note that while simple types, IDispatch and array are supported, generic IUnknown, VT_DECIMAL, or VT_RECORD variant is not supported. Remote JavaScript objects like callback functions are represented as an VT_DISPATCH VARIANT with the object implementing IDispatch. The JavaScript callback method may be invoked using DISPID_VALUE for the DISPID. Nested arrays are supported up to a depth of 3. Arrays of by reference types are not supported. VT_EMPTY and VT_NULL are mapped into JavaScript as null. In JavaScript null and undefined are mapped to VT_EMPTY.

Additionally, all remote objects are exposed as `window.chrome.webview.remoteObjects.sync.<name>`. Here the host objects are exposed as synchronous remote object proxies. These are not promises and calls to functions or property access synchronously block running script waiting to communicate cross process for the host code to run. Accordingly this can result in reliability issues and it is recommended that you use the promise based asynchronous `window.chrome.webview.remoteObjects.<name>` API described above.

Synchronous remote object proxies and asynchronous remote object proxies can both proxy the same remote object. Remote changes made by one proxy will be reflected in any other proxy of that same remote object whether the other proxies and synchronous or asynchronous.

While JavaScript is blocked on a synchronous call to native code, that native code is unable to call back to JavaScript. Attempts to do so will fail with HRESULT_FROM_WIN32(ERROR_POSSIBLE_DEADLOCK).

Remote object proxies are JavaScript Proxy objects that intercept all property get, property set, and method invocations. Properties or methods that are a part of the Function or Object prototype are run locally. Additionally any property or method in the array `chrome.webview.remoteObjects.options.forceLocalProperties` will also be run locally. This defaults to including optional methods that have meaning in JavaScript like `toJSON` and `Symbol.toPrimitive`. You can add more to this array as required.

There's a method `chrome.webview.remoteObjects.cleanupSome` that will best effort garbage collect remote object proxies.

Remote object proxies additionally have the following methods which run locally:

* applyRemote, getRemote, setRemote: Perform a method invocation, property get, or property set on the remote object. You can use these to explicitly force a method or property to run remotely if there is a conflicting local method or property. For instance, `proxy.toString()` will run the local toString method on the proxy object. But `proxy.applyRemote('toString')` runs `toString` on the remote proxied object instead.

* getLocal, setLocal: Perform property get, or property set locally. You can use these methods to force getting or setting a property on the remote object proxy itself rather than on the remote object it represents. For instance, `proxy.unknownProperty` will get the property named `unknownProperty` from the remote proxied object. But `proxy.getLocal('unknownProperty')` will get the value of the property `unknownProperty` on the proxy object itself.

* sync: Asynchronous remote object proxies expose a sync method which returns a promise for a synchronous remote object proxy for the same remote object. For example, `chrome.webview.remoteObjects.sample.methodCall()` returns an asynchronous remote object proxy. You can use the `sync` method to obtain a synchronous remote object proxy instead: `const syncProxy = await chrome.webview.remoteObjects.sample.methodCall().sync()`

* async: Synchronous remote object proxies expose an async method which blocks and returns an asynchronous remote object proxy for the same remote object. For example, `chrome.webview.remoteObjects.sync.sample.methodCall()` returns a synchronous remote object proxy. Calling the `async` method on this blocks and then returns an asynchronous remote object proxy for the same remote object: `const asyncProxy = chrome.webview.remoteObjects.sync.sample.methodCall().async()`

* then: Asynchronous remote object proxies have a then method. This allows them to be awaitable. `then` will return a promise that resolves with a representation of the remote object. If the proxy represents a JavaScript literal then a copy of that is returned locally. If the proxy represents a function then a non-awaitable proxy is returned. If the proxy represents a JavaScript object with a mix of literal properties and function properties, then the a copy of the object is returned with some properties as remote object proxies.

All other property and method invocations (other than the above Remote object proxy methods, forceLocalProperties list, and properties on Function and Object prototypes) are run remotely. Asynchronous remote object proxies return a promise representing asynchronous completion of remotely invoking the method, or getting the property. The promise resolves after the remote operations complete and the promises resolve to the resulting value of the operation. Synchronous remote object proxies work similarly but block JavaScript execution and wait for the remote operation to complete.

Setting a property on an asynchronous remote object proxy works slightly differently. The set returns immediately and the return value is the value that will be set. This is a requirement of the JavaScript Proxy object. If you need to asynchronously wait for the property set to complete, use the setRemote method which returns a promise as described above. Synchronous object property set property synchronously blocks until the property is set.

For example, suppose you have a COM object with the following interface

```idl
    [uuid(3a14c9c0-bc3e-453f-a314-4ce4a0ec81d8), object, local]
    interface IRemoteObjectSample : IUnknown
    {
        // Demonstrate basic method call with some parameters and a return value.
        HRESULT MethodWithParametersAndReturnValue([in] BSTR stringParameter, [in] INT integerParameter, [out, retval] BSTR* stringResult);

        // Demonstrate getting and setting a property.
        [propget] HRESULT Property([out, retval] BSTR* stringResult);
        [propput] HRESULT Property([in] BSTR stringValue);

        // Demonstrate native calling back into JavaScript.
        HRESULT CallCallbackAsynchronously([in] IDispatch* callbackParameter);
    };
```

 We can add an instance of this interface into our JavaScript with `AddRemoteObject`. In this case we name it `sample`:

```cpp
            VARIANT remoteObjectAsVariant = {};
            m_remoteObject.query_to<IDispatch>(&remoteObjectAsVariant.pdispVal);
            remoteObjectAsVariant.vt = VT_DISPATCH;

            // We can call AddRemoteObject multiple times in a row without
            // calling RemoveRemoteObject first. This will replace the previous object
            // with the new object. In our case this is the same object and everything
            // is fine.
            CHECK_FAILURE(m_webView->AddRemoteObject(L"sample", &remoteObjectAsVariant));
            remoteObjectAsVariant.pdispVal->Release();
```

 Then in the HTML document we can use this COM object via `chrome.webview.remoteObjects.sample`:

```js
        document.getElementById("getPropertyAsyncButton").addEventListener("click", async () => {
            const propertyValue = await chrome.webview.remoteObjects.sample.property;
            document.getElementById("getPropertyAsyncOutput").textContent = propertyValue;
        });

        document.getElementById("getPropertySyncButton").addEventListener("click", () => {
            const propertyValue = chrome.webview.remoteObjects.sync.sample.property;
            document.getElementById("getPropertySyncOutput").textContent = propertyValue;
        });

        document.getElementById("setPropertyAsyncButton").addEventListener("click", async () => {
            const propertyValue = document.getElementById("setPropertyAsyncInput").value;
            // The following line will work but it will return immediately before the property value has actually been set.
            // If you need to set the property and wait for the property to change value, use the setRemote function.
            chrome.webview.remoteObjects.sample.property = propertyValue;
            document.getElementById("setPropertyAsyncOutput").textContent = "Set";
        });

        document.getElementById("setPropertyExplicitAsyncButton").addEventListener("click", async () => {
            const propertyValue = document.getElementById("setPropertyExplicitAsyncInput").value;
            // If you care about waiting until the property has actually changed value use the setRemote function.
            await chrome.webview.remoteObjects.sample.setRemote("property", propertyValue);
            document.getElementById("setPropertyExplicitAsyncOutput").textContent = "Set";
        });

        document.getElementById("setPropertySyncButton").addEventListener("click", () => {
            const propertyValue = document.getElementById("setPropertySyncInput").value;
            chrome.webview.remoteObjects.sync.sample.property = propertyValue;
            document.getElementById("setPropertySyncOutput").textContent = "Set";
        });

        document.getElementById("invokeMethodAsyncButton").addEventListener("click", async () => {
            const paramValue1 = document.getElementById("invokeMethodAsyncParam1").value;
            const paramValue2 = parseInt(document.getElementById("invokeMethodAsyncParam2").value);
            const resultValue = await chrome.webview.remoteObjects.sample.MethodWithParametersAndReturnValue(paramValue1, paramValue2);
            document.getElementById("invokeMethodAsyncOutput").textContent = resultValue;
        });

        document.getElementById("invokeMethodSyncButton").addEventListener("click", () => {
            const paramValue1 = document.getElementById("invokeMethodSyncParam1").value;
            const paramValue2 = parseInt(document.getElementById("invokeMethodSyncParam2").value);
            const resultValue = chrome.webview.remoteObjects.sync.sample.MethodWithParametersAndReturnValue(paramValue1, paramValue2);
            document.getElementById("invokeMethodSyncOutput").textContent = resultValue;
        });

        let callbackCount = 0;
        document.getElementById("invokeCallbackButton").addEventListener("click", async () => {
            chrome.webview.remoteObjects.sample.CallCallbackAsynchronously(() => {
                document.getElementById("invokeCallbackOutput").textContent = "Native object called the callback " + (++callbackCount) + " time(s).";
            });
        });
```

#### RemoveRemoteObject 

Remove the host object specified by the name so that it is no longer accessible from JavaScript code in the WebView.

> public HRESULT [RemoveRemoteObject](#removeremoteobject)(LPCWSTR name)

While new access attempts will be denied, if the object is already obtained by JavaScript code in the WebView, the JavaScript code will continue to have access to that object. Calling this method for a name that is already removed or never added will fail.

#### OpenDevToolsWindow 

Opens the DevTools window for the current document in the WebView.

> public HRESULT [OpenDevToolsWindow](#opendevtoolswindow)()

Does nothing if called when the DevTools window is already open

#### add_AcceleratorKeyPressed 

Add an event handler for the AcceleratorKeyPressed event.

> public HRESULT [add_AcceleratorKeyPressed](#add_acceleratorkeypressed)([IWebView2AcceleratorKeyPressedEventHandler](IWebView2AcceleratorKeyPressedEventHandler.md) * eventHandler,EventRegistrationToken * token)

AcceleratorKeyPressed fires when an accelerator key or key combo is pressed or released while the WebView is focused. A key is considered an accelerator if either:

1. Ctrl or Alt is currently being held, or

1. the pressed key does not map to a character. A few specific keys are never considered accelerators, such as Shift. The Escape key is always considered an accelerator.

Autorepeated key events caused by holding the key down will also fire this event. You can filter these out by checking the event args' KeyEventLParam or PhysicalKeyStatus.

In windowed mode, this event handler is called synchronously. Until you call Handle() on the event args or the event handler returns, the browser process will be blocked and outgoing cross-process COM calls will fail with RPC_E_CANTCALLOUT_ININPUTSYNCCALL. All WebView2 API methods will work, however.

In windowless mode, the event handler is called asynchronously. Further input will not reach the browser until the event handler returns or Handle() is called, but the browser process itself will not be blocked, and outgoing COM calls will work normally.

It is recommended to call Handle(TRUE) as early as you can know that you want to handle the accelerator key.

```cpp
    // Register a handler for the AcceleratorKeyPressed event.
    CHECK_FAILURE(m_webView->add_AcceleratorKeyPressed(
        Callback<IWebView2AcceleratorKeyPressedEventHandler>(
            [this](IWebView2WebView* sender, IWebView2AcceleratorKeyPressedEventArgs* args)
                -> HRESULT {
                WEBVIEW2_KEY_EVENT_TYPE type;
                CHECK_FAILURE(args->get_KeyEventType(&type));
                // We only care about key down events.
                if (type == WEBVIEW2_KEY_EVENT_TYPE_KEY_DOWN ||
                    type == WEBVIEW2_KEY_EVENT_TYPE_SYSTEM_KEY_DOWN)
                {
                    UINT key;
                    CHECK_FAILURE(args->get_VirtualKey(&key));
                    // Check if the key is one we want to handle.
                    if (std::function<void()> action =
                            m_appWindow->GetAcceleratorKeyFunction(key))
                    {
                        // Keep the browser from handling this key, whether it's autorepeated or
                        // not.
                        CHECK_FAILURE(args->Handle(TRUE));

                        // Filter out autorepeated keys.
                        WEBVIEW2_PHYSICAL_KEY_STATUS status;
                        CHECK_FAILURE(args->get_PhysicalKeyStatus(&status));
                        if (!status.WasKeyDown)
                        {
                            // Perform the action asynchronously to avoid blocking the
                            // browser process's event queue.
                            m_appWindow->RunAsync(action);
                        }
                    }
                }
                return S_OK;
            })
            .Get(),
        &m_acceleratorKeyPressedToken));
```

#### remove_AcceleratorKeyPressed 

Remove an event handler previously added with add_AcceleratorKeyPressed.

> public HRESULT [remove_AcceleratorKeyPressed](#remove_acceleratorkeypressed)(EventRegistrationToken token)

#### WEBVIEW2_KEY_EVENT_TYPE 

The type of key event that triggered an AcceleratorKeyPressed event.

> enum [WEBVIEW2_KEY_EVENT_TYPE](#webview2_key_event_type)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
WEBVIEW2_KEY_EVENT_TYPE_KEY_DOWN            | Correspond to window message WM_KEYDOWN.
WEBVIEW2_KEY_EVENT_TYPE_KEY_UP            | Correspond to window message WM_KEYUP.
WEBVIEW2_KEY_EVENT_TYPE_SYSTEM_KEY_DOWN            | Correspond to window message WM_SYSKEYDOWN.
WEBVIEW2_KEY_EVENT_TYPE_SYSTEM_KEY_UP            | Correspond to window message WM_SYSKEYUP.

#### WEBVIEW2_PHYSICAL_KEY_STATUS 

A structure representing the information packed into the LPARAM given to a Win32 key event.

> typedef [WEBVIEW2_PHYSICAL_KEY_STATUS](#webview2_physical_key_status)

See the documentation for WM_KEYDOWN for details at [https://docs.microsoft.com/windows/win32/inputdev/wm-keydown](https://docs.microsoft.com/windows/win32/inputdev/wm-keydown)

