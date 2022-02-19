---
title: Using Host Objects in WebView2
description: How to pass host objects to JavaScript using the AddHostObjectToScript API for WebView2 apps.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 2/17/2022
---
# Using Host Objects in WebView2

WebView2 enables applications to bridge the gap between the web and native sides of an application by enabling an object to be passed to the web. Such objects are defined in the native code and often called host objects. They can be projected into JavaScript using a WebView2 API named `AddHostObjectToScript`, as described in this document.

Why use `AddHostObjectToScript`?

  * When developing a WebView2 app, you may encounter a native object whose methods or properties you find useful. You might want to trigger these native object methods from web-side code, or as a result of user interaction on the web side of your app. In addition, you might not want to re-implement your native objects' methods in your web-side code.  The `AddHostObjectToScript` API enables re-use of native-side code by web-side code. 

  * For example, there might be a native webcam API, which would require re-writing a large amount of code on the web side. Having the ability to call the native object's methods is quicker and more efficient than re-coding the object's methods on the web side of your app. In this case, your native-side code can pass the object to your app's web-side, JavaScript code, so that your JavaScript code can reuse the native API's methods.

Scenarios that may benefit from using host objects in script:

  * There exists a keyboard API and you want to call the `keyboardObject.showKeyboard` function from the web side.

  * JavaScript is sandboxed, limiting its ability on the native side. For example, if you need to access a file on the native side, you must use the native file system. If you have a native object exposed to JavaScript via `AddHostObjectToScript`, you can use it to manipulate files on the native file system.

This article uses the WebView2 Win32 sample app to demonstrate some practical applications of `AddHostObjectToScript`. For more information about how to embed web content into native applications, see [Embed web content into native applications](/microsoft-edge/webview2/how-to/communicate-btwn-web-native).

<!-- ====================================================================== -->
## Step 1: Install Visual Studio, install git, clone the WebView2Samples repo, and open the solution

1. Download and install [Microsoft Visual Studio](https://visualstudio.microsoft.com/) 2019 (version 16.11.10) or later, and other prerequisites as described in [Get started with WebView2 in Win32 apps](/microsoft-edge/webview2/get-started/win32).

1. Clone the [WebView2Samples](https://github.com/MicrosoftEdge/WebView2Samples) repo, which includes the Win32-specific WebView2 sample app.  For instructions, in a new window or tab, see [Clone the WebView2Samples repo](../get-started/win32#step-2---clone-the-webview2samples-repo) in _Get started with WebView2 in Win32 apps_.

1. Open Microsoft Visual Studio.

1. In your local copy of the cloned `WebView2Samples` repo, open `GettingStartedGuides > Win32_GettingStarted > WebView2GettingStarted.sln`.  Keep the sample app solution open, to follow along with the rest of this article.

**Preview of the major steps in this article:**

1. Define the host object and implement `IDispatch` so that WebView2 recognizes the object.

1. Use `AddHostObjectToScript` to pass a method to the web.

1. Call the app's native object's methods from the app's web-side code.


<!-- ====================================================================== -->
## Step 2: Define the host object and implement IDispatch

To use this `AddHostObjectToScript` API, you first need to define a host object that implements `IDispatch`. If you already have a host object that implements `IDispatch`, skip to [Step 3: Call the AddHostObjectToScript API](#step-3-call-the-addhostobjecttoscript-api). Implementing `IDispatch` is essential for formatting the host object so that it can be passed to the web-side code.

The following example creates a host object from scratch.

**Part 1A:** Create the COM interface using interface definition language (IDL). This is demonstrated in the `HostObjectSample.idl` file. 

**Part 1B:** Create the C++ object. This is demonstrated in the `HostObjectSampleImpl.cpp` file.

**Important:** The IDL (`.idl`) file _defines_ an interface, and the C++ (`.cpp`) file _implements_ the defined interface, and also implements `IDispatch`.

### Part 1A: Create the COM interface

In the WebView2 sample code, the file `HostObjectSample.idl` creates a COM object. This step describes how to create your own object in the IDL file.

1. In Visual Studio **Solution Explorer**, open **WebView2APISample** > **Source Files** > **HostObjectSample.idl**.

    The following code example is broken up into two sections. The first interface is `IHostObjectSample`, starting at line 9, which inherits the `IUnknown` interface. Use this `IHostObjectSample` definition as a template for defining your object's methods, properties, callback functions, and so on.
    
    The second part is the `HostObjectSample` component object class ([coclass](/windows/win32/midl/coclass)), starting at line 35, which includes `IDispatch` and the  `IHostObjectSample` interface.

    ```csharp
     1    import "oaidl.idl";
     2    import "ocidl.idl";
     3
     4    [uuid(0a7a4655-5660-47d0-8a37-98ae21399e57), version(0.1)]
     5    library HostObjectSampleLibrary
     6    {
     7        //! [AddHostObjectInterface]
     8        [uuid(3a14c9c0-bc3e-453f-a314-4ce4a0ec81d8), object, local]
     9        interface IHostObjectSample : IUnknown
    10        {
    11            // Demonstrates a basic method call with some parameters and a return value.
    12            HRESULT MethodWithParametersAndReturnValue([in] BSTR stringParameter, [in] INT integerParameter, [out, retval] BSTR* stringResult);
    13    
    14           // Demonstrate getting and setting a property.
    15            [propget] HRESULT Property([out, retval] BSTR* stringResult);
    16            [propput] HRESULT Property([in] BSTR stringValue);
    17
    18            [propget] HRESULT IndexedProperty(INT index, [out, retval] BSTR * stringResult);
    19            [propput] HRESULT IndexedProperty(INT index, [in] BSTR stringValue);
    20
    21            // Demonstrate native calling back into JavaScript.
    22            HRESULT CallCallbackAsynchronously([in] IDispatch* callbackParameter);
    23
    24            // Demonstrates a property which uses Date types.    25            [propget] HRESULT DateProperty([out, retval] DATE * dateResult);
    26            [propput] HRESULT DateProperty([in] DATE dateValue);
    27
    28            // Creates a date object on the native side and sets the DateProperty to it.
    29            HRESULT CreateNativeDate();
    30
    31        };
    32        //! [AddHostObjectInterface]
    33
    34        [uuid(637abc45-11f7-4dde-84b4-317d62a638d3)]
    35        coclass HostObjectSample
    36        {
    37            [default] interface IHostObjectSample;
    38            interface IDispatch;
    39        };
    40    }
    ```

1. On line 38, we include `interface IDispatch`, which is needed for our host object to work with `AddHostObjectToScript`.

    **Note on IDispatch**:

    `IDispatch` allows you to dynamically invoke methods and properties. Normally, calling objects requires static invocations, but you can use JavaScript to dynamically create object calls.  For more information about `IDispatch` inheritance and methods, see [IDispatch interface (oaidl.h)](/windows/win32/api/oaidl/nn-oaidl-idispatch). 
    
    Implement `IDispatch` as described in [Type Libraries and the Object Description Language](/previous-versions/windows/desktop/automat/type-libraries-and-the-object-description-language).
    
    If the object you want to add to JavaScript doesn't already implement `IDispatch`, you need to write an `IDispatch` class wrapper for the object that you want to expose.

    There might be libraries to do this automatically.  To learn more about the steps that are needed to write an `IDispatch` class wrapper for the object that you want to expose, see [Automation](/previous-versions/windows/desktop/automat/automation-programming-reference).
    
1. Once the interface is defined in the IDL, save and compile the sample project in Visual Studio to create the translation lookaside buffer (TLB) file, which you need to reference from the C++ source code that's shown in the following section.

### Part 1B: Create the C++ object

In the WebView2 sample code, the `HostObjectSampleImpl.cpp` file takes the skeleton created in the COM IDL file, and builds the C++ object.

Implement all the functions that are defined in your object's interface, as we outlined in the IDL file.  Be sure to implement the functions that are required by `IDispatch`.  The compiler will throw a warning if these functions aren't defined.

Below, we examine two specific properties that were defined in the IDL, to show how the IDL is related to the `.cpp` file.

1. In Visual Studio **Solution Explorer**, open **WebView2APISample** > **Source Files** > **HostObjectSampleImpl.cpp**.

1. Compare the property _declarations_, in `HostObjectSample.idl`...
 
    ```csharp
    [propget] HRESULT Property([out, retval] BSTR* stringResult);
    [propput] HRESULT Property([in] BSTR stringValue);
    ```
    ... to the _implementation_ of the object's properties, in `HostObjectSampleImpl.cpp`:

    ```cpp
    STDMETHODIMP HostObjectSample::get_Property(BSTR* stringResult)
    {
        *stringResult = SysAllocString(m_propertyValue.c_str());
        return S_OK;
    }
    
    STDMETHODIMP HostObjectSample::put_Property(BSTR stringValue)
    {
        m_propertyValue = stringValue;
        return S_OK;
    }
    ```

<!-- ====================================================================== -->
## Step 2: Call the AddHostObjectToScript API

Now that we've completed building our interface and implementation of our host object, we're ready to use the AddHostObjectToScript API to pass the host object to our app's web-side, JavaScript code.

1. In Visual Studio **Solution Explorer**, open **WebVie2APISample** > **Source Files** > **ScenarioHostObject.cpp**.

1. Go to line 28, where the `ScenarioAddHostObject` class begins.


    ```cpp
    28    ScenarioAddHostObject::ScenarioAddHostObject(AppWindow* appWindow)
    29        : m_appWindow(appWindow), m_webView(appWindow->GetWebView())
    30    {
    31        std::wstring sampleUri = m_appWindow->GetLocalUri(L"ScenarioAddHostObject.html");
    32
    33        m_hostObject = Microsoft::WRL::Make<HostObjectSample>(
    34            [appWindow = m_appWindow](std::function<void(void)> callback)
    35        {
    36            appWindow->RunAsync(callback);
    37        });
    38
    39        CHECK_FAILURE(m_webView->add_NavigationStarting(
    40            Microsoft::WRL::Callback<ICoreWebView2NavigationStartingEventHandler>(
    41                [this, sampleUri](ICoreWebView2* sender, ICoreWebView2NavigationStartingEventArgs* args) -> HRESULT
    42        {
    43            wil::unique_cotaskmem_string navigationTargetUri;
    44            CHECK_FAILURE(args->get_Uri(&navigationTargetUri));
    45            std::wstring uriTarget(navigationTargetUri.get());
    46
    47            if (AreFileUrisEqual(sampleUri, uriTarget))
    48            {
    49                //! [AddHostObjectToScript]
    50                VARIANT remoteObjectAsVariant = {};
    51                m_hostObject.query_to<IDispatch>(&remoteObjectAsVariant.pdispVal);
    52                remoteObjectAsVariant.vt = VT_DISPATCH;
    53
    54                // We can call AddHostObjectToScript multiple times in a row without
    55                // calling RemoveHostObject first. This will replace the previous object
    56                // with the new object. In our case this is the same object and everything
    57                // is fine.
    58                CHECK_FAILURE(
    59                    m_webView->AddHostObjectToScript(L"sample", &remoteObjectAsVariant));
    60                remoteObjectAsVariant.pdispVal->Release();
    61                //! [AddHostObjectToScript]
    62            }
    ```

    > [!NOTE] 
    > Lines 31 - 46 shows code specific to this sample app where we display html. Your app may have a different implementation of this code.  

1. Review line 33, which shows how to instantiate the COM object just defined in the IDL file. This is the object we will use later when we call `AddHostObjectToScript`. This gets us a pointer to the interface in `HostObjectSampleImpl.cpp.`

1. Review line 51, which casts the newly created COM object to an iDispatch type and then converts the object to a `VARIANT`. `VARIANT` types allow you to use data structures such as integers and arrays as well as more complex types such as `IDispatch`. 

    For a full list of supported data types, see [VARIANT structure (oaidl.h) - Win32 apps | Microsoft Docs](/windows/win32/api/oaidl/ns-oaidl-variant).
    
    Now that we have a variant of the object that is C++ code-friendly, our app's native-side code is ready to pass the host object to the app's web-side code.

1. Review line 52, which sets the remote objects variant type as iDispatch. 

1. Review line 59, where we pass the `VARIANT` to `AddHostObjectToScript`, name it "sample", and enable the remote object as `VARIANT` (`&remoteObjectAsVariant`).

Now the WebView2 app's native-side code successfully creates a host object that implements `IDispatch`. This native code also calls the WebView2 API `AddHostObjectToScript`, and passes the object to the app's web-side code via `AddHostObjectToScript`. Continue to the next step to see what's enabled by passing the host object from the app's native-side code to the app's web-side code. 


<!-- ====================================================================== -->
## Step 3: Use AddHostObjectToScript to pass a method to the web

To follow along, we will use the WebView2 Sample App.  

1. In Microsoft Visual Studio, select **File** > **Save All (Ctrl+Shift+S)** to save the project.

1. Press **F5** to build and run the project.

1. Open `ScenarioAddHostObject.html`.

1. Click **Scenario** > **Host Objects**.

1. Explore properties by clicking buttons such as **Property**, **Method**, and **Callback** to see how the sample code behaves.

    By now you have observed capabilities of the host object used from the app's web-side code. To gain insight into what's happening in JavaScript, let's take a look at the following code: 

    ```html
    150    // Date property 
    151    document.getElementById("setDateButton").addEventListener("click", () => { 
    152        chrome.webview.hostObjects.options.shouldSerializeDates = true; 
    153        chrome.webview.hostObjects.sync.sample.dateProperty = new Date(); 
    154        document.getElementById("dateOutput").textContent = "sample.dateProperty: " + chrome.webview.hostObjects.sync.sample.dateProperty; 
    155    }); 
    156    document.getElementById("createRemoteDateButton").addEventListener("click", () => { 
    157        chrome.webview.hostObjects.sync.sample.createNativeDate(); 
    158        document.getElementById("dateOutput").textContent = "sample.dateProperty: " + chrome.webview.hostObjects.sync.sample.dateProperty; 
    159    });
    ```

1. In line 154, we reference `chrome.webview.hostObjects.sync.sample.dateProperty`. This line of code is getting the `dateProperty` of the native host object.

Congratulations! You have successfully created a host object in your app's native-side code, passed the host object to your app's web-side code, and then used the host object from the app's web-side code. Now let's see what other APIs there are in the host-object ecosystem.

The rest of this article is repurposed from [WebView2 Win32 C++ ICoreWebView2](/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-1.0.1054.31#addhostobjecttoscript).


<!-- ====================================================================== -->
## AddHostObjectToScript Advanced Topics

Host object proxies are promises and resolve to an object representing the host object. The promise is rejected if the app has not added an object with the same name. When JavaScript code accesses a property or method of the object, a promise is returned. The promise resolves to the value returned from the host for the property or method. The promise may be rejected in case of an error, such as if a property or method for the object doesn't exist, or any parameters are not valid.

Host object proxies support simple types,` IDispatch`, and arrays. `IUnknown` objects that also implement `IDispatch` are treated as `IDispatch, generic IUnknown`.

Host object proxies do not support `VT_DECIMAL` or `VT_RECORD` variants. Remote JavaScript objects like callback functions are represented as an `VT_DISPATCH``VARIANT` with the object implementing `IDispatch`. The JavaScript callback method may be invoked using `DISPID_VALUE` for the `DISPID`.

Nested arrays are supported up to a depth of 3. Arrays by reference types are not supported. `VT_EMPTY` and `VT_NULL` are mapped into JavaScript as null. In JavaScript, null and undefined are mapped to `VT_EMPTY`.

### Sync vs Async communication with Host Objects: 

All host objects are exposed as `window.chrome.webview.hostObjects.sync.{name}`. Here the host objects are exposed as synchronous host object proxies. These are not promises, and function as ???runtime or property access synchronously block running script waiting to communicate cross process??? for the host code to run. Accordingly, the result may have reliability issues, so this approach is not recommended. If possible, use the promise-based asynchronous `window.chrome.webview.hostObjects.{name}` API.

Synchronous host object proxies and asynchronous host object proxies may both use a proxy to the same host object. Remote changes made by one proxy propagates to any other proxy of that same host object whether the other proxies and synchronous or asynchronous.

While JavaScript is blocked on a synchronous run to native code, that native code is unable to run back to JavaScript. Attempts to do so fail with `HRESULT_FROM_WIN32(ERROR_POSSIBLE_DEADLOCK)`.

Host object proxies are JavaScript Proxy objects that intercept all property get, property set, and method invocations. Properties or methods that are a part of the Function or Object prototype are run locally. Additionally any property or method in the chrome.webview.hostObjects.options.forceLocalProperties array are also run locally. This defaults to including optional methods that have meaning in JavaScript like toJSON and Symbol.toPrimitive. Add more to the array as required. 

The chrome.webview.hostObjects.cleanupSome method performs a best effort garbage collection on host object proxies. 

The chrome.webview.hostObjects.options object provides the ability to change some functionality of host objects. 



### Options property 

Details 

forceLocalProperties 

This is an array of host object property names that will be run locally, instead of being called on the native host object. This defaults to then, toJSON, Symbol.toString, and Symbol.toPrimitive. You can add other properties to specify that they should be run locally on the javascript host object proxy. 

log 

This is a callback that will be called with debug information. For example, you can set this to console.log.bind(console) to have it print debug information to the console to help when troubleshooting host object usage. By default this is null. 

shouldSerializeDates 

By default this is false, and javascript Date objects will be sent to host objects as a string using JSON.stringify. You can set this property to true to have Date objects properly serialize as a VT_DATE when sending to the native host object, and have VT_DATE properties and return values create a javascript Date object. 

Host object proxies additionally have the following methods which run locally. 


### Method name 

Details 

applyHostFunction, getHostProperty, setHostProperty 

Perform a method invocation, property get, or property set on the host object. Use the methods to explicitly force a method or property to run remotely if a conflicting local method or property exists. For instance, proxy.toString() runs the local toString method on the proxy object. But proxy.applyHostFunction('toString') runs toString on the host proxied object instead. 

getLocalProperty, setLocalProperty 

Perform property get, or property set locally. Use the methods to force getting or setting a property on the host object proxy rather than on the host object it represents. For instance, proxy.unknownProperty gets the property named unknownProperty from the host proxied object. But proxy.getLocalProperty('unknownProperty') gets the value of the property unknownProperty on the proxy object. 

sync 

Asynchronous host object proxies expose a sync method which returns a promise for a synchronous host object proxy for the same host object. For example, chrome.webview.hostObjects.sample.methodCall() returns an asynchronous host object proxy. Use the sync method to obtain a synchronous host object proxy instead: const syncProxy = await chrome.webview.hostObjects.sample.methodCall().sync(). 

async 

Synchronous host object proxies expose an async method which blocks and returns an asynchronous host object proxy for the same host object. For example, chrome.webview.hostObjects.sync.sample.methodCall() returns a synchronous host object proxy. Running the async method on this blocks and then returns an asynchronous host object proxy for the same host object: const asyncProxy = chrome.webview.hostObjects.sync.sample.methodCall().async(). 

then 

Asynchronous host object proxies have a then method. Allows proxies to be awaitable. then returns a promise that resolves with a representation of the host object. If the proxy represents a JavaScript literal, a copy of that is returned locally. If the proxy represents a function, a non-awaitable proxy is returned. If the proxy represents a JavaScript object with a mix of literal properties and function properties, the a copy of the object is returned with some properties as host object proxies. 

All other property and method invocations (other than the above Remote object proxy methods, forceLocalProperties list, and properties on Function and Object prototypes) are run remotely. Asynchronous host object proxies return a promise representing asynchronous completion of remotely invoking the method, or getting the property. The promise resolves after the remote operations complete and the promises resolve to the resulting value of the operation. Synchronous host object proxies work similarly, but block running JavaScript and wait for the remote operation to complete. 

Setting a property on an asynchronous host object proxy works slightly differently. The set returns immediately and the return value is the value that is set. This is a requirement of the JavaScript Proxy object. If you need to asynchronously wait for the property set to complete, use the setHostProperty method which returns a promise as described above. Synchronous object property set property synchronously blocks until the property is set. 

For example, suppose you have a COM object with the following interface. 

```csharp
    [uuid(3a14c9c0-bc3e-453f-a314-4ce4a0ec81d8), object, local] 

    interface IHostObjectSample : IUnknown 

    { 

        // Demonstrate basic method call with some parameters and a return value. 

        HRESULT MethodWithParametersAndReturnValue([in] BSTR stringParameter, [in] INT integerParameter, [out, retval] BSTR* stringResult); 

 

        // Demonstrate getting and setting a property. 

        [propget] HRESULT Property([out, retval] BSTR* stringResult); 

        [propput] HRESULT Property([in] BSTR stringValue); 

 

        [propget] HRESULT IndexedProperty(INT index, [out, retval] BSTR * stringResult); 

        [propput] HRESULT IndexedProperty(INT index, [in] BSTR stringValue); 

 

        // Demonstrate native calling back into JavaScript. 

        HRESULT CallCallbackAsynchronously([in] IDispatch* callbackParameter); 

 

        // Demonstrate a property which uses Date types 

        [propget] HRESULT DateProperty([out, retval] DATE * dateResult); 

        [propput] HRESULT DateProperty([in] DATE dateValue); 

 

        // Creates a date object on the native side and sets the DateProperty to it. 

        HRESULT CreateNativeDate(); 

 

    }; 
``` 

Add an instance of this interface into your JavaScript with AddHostObjectToScript. In this case, name it sample. 

```cpp
            VARIANT remoteObjectAsVariant = {}; 

            m_hostObject.query_to<IDispatch>(&remoteObjectAsVariant.pdispVal); 

            remoteObjectAsVariant.vt = VT_DISPATCH; 

 

            // We can call AddHostObjectToScript multiple times in a row without 

            // calling RemoveHostObject first. This will replace the previous object 

            // with the new object. In our case this is the same object and everything 

            // is fine. 

            CHECK_FAILURE( 

                m_webView->AddHostObjectToScript(L"sample", &remoteObjectAsVariant)); 

            remoteObjectAsVariant.pdispVal->Release(); 

In the HTML document, use the COM object using chrome.webview.hostObjects.sample. 

HTMLCopy 

        document.getElementById("getPropertyAsyncButton").addEventListener("click", async () => { 

            const propertyValue = await chrome.webview.hostObjects.sample.property; 

            document.getElementById("getPropertyAsyncOutput").textContent = propertyValue; 

        }); 

 

        document.getElementById("getPropertySyncButton").addEventListener("click", () => { 

            const propertyValue = chrome.webview.hostObjects.sync.sample.property; 

            document.getElementById("getPropertySyncOutput").textContent = propertyValue; 

        }); 

 

        document.getElementById("setPropertyAsyncButton").addEventListener("click", async () => { 

            const propertyValue = document.getElementById("setPropertyAsyncInput").value; 

            // The following line will work but it will return immediately before the property value has actually been set. 

            // If you need to set the property and wait for the property to change value, use the setHostProperty function. 

            chrome.webview.hostObjects.sample.property = propertyValue; 

            document.getElementById("setPropertyAsyncOutput").textContent = "Set"; 

        }); 

 

        document.getElementById("setPropertyExplicitAsyncButton").addEventListener("click", async () => { 

            const propertyValue = document.getElementById("setPropertyExplicitAsyncInput").value; 

            // If you care about waiting until the property has actually changed value use the setHostProperty function. 

            await chrome.webview.hostObjects.sample.setHostProperty("property", propertyValue); 

            document.getElementById("setPropertyExplicitAsyncOutput").textContent = "Set"; 

        }); 

 

        document.getElementById("setPropertySyncButton").addEventListener("click", () => { 

            const propertyValue = document.getElementById("setPropertySyncInput").value; 

            chrome.webview.hostObjects.sync.sample.property = propertyValue; 

            document.getElementById("setPropertySyncOutput").textContent = "Set"; 

        }); 

 

        document.getElementById("getIndexedPropertyAsyncButton").addEventListener("click", async () => { 

            const index = parseInt(document.getElementById("getIndexedPropertyAsyncParam").value); 

            const resultValue = await chrome.webview.hostObjects.sample.IndexedProperty[index]; 

            document.getElementById("getIndexedPropertyAsyncOutput").textContent = resultValue; 

        }); 

        document.getElementById("setIndexedPropertyAsyncButton").addEventListener("click", async () => { 

            const index = parseInt(document.getElementById("setIndexedPropertyAsyncParam1").value); 

            const value = document.getElementById("setIndexedPropertyAsyncParam2").value;; 

            chrome.webview.hostObjects.sample.IndexedProperty[index] = value; 

            document.getElementById("setIndexedPropertyAsyncOutput").textContent = "Set"; 

        }); 

        document.getElementById("invokeMethodAsyncButton").addEventListener("click", async () => { 

            const paramValue1 = document.getElementById("invokeMethodAsyncParam1").value; 

            const paramValue2 = parseInt(document.getElementById("invokeMethodAsyncParam2").value); 

            const resultValue = await chrome.webview.hostObjects.sample.MethodWithParametersAndReturnValue(paramValue1, paramValue2); 

            document.getElementById("invokeMethodAsyncOutput").textContent = resultValue; 

        }); 

 

        document.getElementById("invokeMethodSyncButton").addEventListener("click", () => { 

            const paramValue1 = document.getElementById("invokeMethodSyncParam1").value; 

            const paramValue2 = parseInt(document.getElementById("invokeMethodSyncParam2").value); 

            const resultValue = chrome.webview.hostObjects.sync.sample.MethodWithParametersAndReturnValue(paramValue1, paramValue2); 

            document.getElementById("invokeMethodSyncOutput").textContent = resultValue; 

        }); 

 

        let callbackCount = 0; 

        document.getElementById("invokeCallbackButton").addEventListener("click", async () => { 

            chrome.webview.hostObjects.sample.CallCallbackAsynchronously(() => { 

                document.getElementById("invokeCallbackOutput").textContent = "Native object called the callback " + (++callbackCount) + " time(s)."; 

            }); 

        }); 

 

        // Date property 

        document.getElementById("setDateButton").addEventListener("click", () => { 

            chrome.webview.hostObjects.options.shouldSerializeDates = true; 

            chrome.webview.hostObjects.sync.sample.dateProperty = new Date(); 

            document.getElementById("dateOutput").textContent = "sample.dateProperty: " + chrome.webview.hostObjects.sync.sample.dateProperty; 

        }); 

        document.getElementById("createRemoteDateButton").addEventListener("click", () => { 

            chrome.webview.hostObjects.sync.sample.createNativeDate(); 

            document.getElementById("dateOutput").textContent = "sample.dateProperty: " + chrome.webview.hostObjects.sync.sample.dateProperty; 

        }); 
```

Exposing host objects to script has security risk. For more information about best practices, navigate to Best practices for developing secure WebView2 applications. 