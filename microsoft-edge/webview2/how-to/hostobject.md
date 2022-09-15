---
title: Call native-side code from web-side code
description: How to pass host objects to JavaScript using the AddHostObjectToScript API for WebView2 apps.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 04/27/2022
---
# Call native-side code from web-side code

WebView2 enables applications to bridge the gap between the web and native sides of an application by enabling an object to be passed to the web. Such objects are defined in the native code and often called *host objects*. They can be projected into JavaScript using the WebView2 `AddHostObjectToScript` API, as described in this document.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.AddHostObjectToScript Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.addhostobjecttoscript)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.AddHostObjectToScript Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#addhostobjecttoscript)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2::AddHostObjectToScript method](/microsoft-edge/webview2/reference/win32/icorewebview2#addhostobjecttoscript)

---


#### Why use `AddHostObjectToScript`?

  * When developing a WebView2 app, you may encounter a native object whose methods or properties you find useful. You might want to trigger these native object methods from web-side code, or as a result of user interaction on the web side of your app. In addition, you might not want to re-implement your native objects' methods in your web-side code.  The `AddHostObjectToScript` API enables re-use of native-side code by web-side code. 

  * For example, there might be a native webcam API, which would require re-writing a large amount of code on the web side. Having the ability to call the native object's methods is quicker and more efficient than re-coding the object's methods on the web side of your app. In this case, your native-side code can pass the object to your app's web-side, JavaScript code, so that your JavaScript code can reuse the native API's methods.

Scenarios that may benefit from using host objects in script:

  * There is a keyboard API, and you want to call the `keyboardObject.showKeyboard` function from the web side.

  * JavaScript is sandboxed, limiting its ability on the native side. For example, if you need to access a file on the native side, you must use the native file system. If you have a native object exposed to JavaScript via `AddHostObjectToScript`, you can use it to manipulate files on the native file system.

This article uses the [Win32 sample app](https://github.com/MicrosoftEdge/WebView2Samples/tree/main/SampleApps/WebView2APISample) to demonstrate some practical applications of `AddHostObjectToScript`. For more information about how to embed web content into native applications, see [Embed web content into native applications](/microsoft-edge/webview2/how-to/communicate-btwn-web-native).


#### Preview of the major steps in this article

1. Install Visual Studio, install git, clone the [WebView2Samples repo](https://github.com/MicrosoftEdge/WebView2Samples/tree/main/SampleApps/WebView2APISample), and open the solution.

1. Define the host object and implement `IDispatch` so that WebView2 can project/add it to the web side.

1. Use `AddHostObjectToScript` to pass an object to the web.

1. Call the app's native object's methods from the app's web-side code.


<!-- ====================================================================== -->
## Step 1: Install Visual Studio, install git, clone the WebView2Samples repo, and open the solution

1. Download and install [Microsoft Visual Studio](https://visualstudio.microsoft.com/) 2019 (version 16.11.10) or later, and other prerequisites as described in [Get started with WebView2 in Win32 apps](/microsoft-edge/webview2/get-started/win32).

1. Clone the [WebView2Samples](https://github.com/MicrosoftEdge/WebView2Samples) repo, which includes the Win32-specific WebView2 sample app.  For instructions, in a new window or tab, open  [Get started with WebView2 in Win32 apps](/microsoft-edge/webview2/get-started/win32).

1. Open Microsoft Visual Studio.

1. In your local copy of the cloned `WebView2Samples` repo, open `GettingStartedGuides > Win32_GettingStarted > WebView2GettingStarted.sln`. Keep the sample app solution open, to follow along with the rest of this article.


<!-- ====================================================================== -->
## Step 2: Define the host object and implement IDispatch

To use this `AddHostObjectToScript` API, you first need to define a host object that implements `IDispatch`. If you already have a host object that implements `IDispatch`, skip to [Step 3: Call the AddHostObjectToScript API](#step-3-call-the-addhostobjecttoscript-api). Implementing `IDispatch` is essential for formatting the host object so that it can be passed to the web-side code.

The following example creates a host object from scratch.

**Part 2A:** Create the COM interface using interface definition language (IDL). This is demonstrated in the `HostObjectSample.idl` file. 

**Part 2B:** Create the C++ object. This is demonstrated in the `HostObjectSampleImpl.cpp` file.

**Important:** The IDL (`.idl`) file *defines* an interface, and the C++ (`.cpp`) file *implements* the defined interface, and also implements `IDispatch`.

### Part 2A: Create the COM interface

In the WebView2 sample code, the file `HostObjectSample.idl` creates a COM object. This step describes how to create your own object in the IDL file.

1. In Visual Studio **Solution Explorer**, open **WebView2APISample** > **Source Files** > **HostObjectSample.idl**.

    The following code example is broken up into two sections. The first interface is `IHostObjectSample`, starting at line 9, which inherits the `IUnknown` interface. Use this `IHostObjectSample` definition as a template for defining your object's methods, properties, callback functions, and so on.
    
    The second part is the `HostObjectSample` component object class [coclass](/windows/win32/midl/coclass), starting at line 35, which includes `IDispatch` and the  `IHostObjectSample` interface.

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

    **About IDispatch**:

    `IDispatch` allows you to dynamically invoke methods and properties. Normally, calling objects requires static invocations, but you can use JavaScript to dynamically create object calls. For more information about `IDispatch` inheritance and methods, see [IDispatch interface (oaidl.h)](/windows/win32/api/oaidl/nn-oaidl-idispatch). 
    
    Implement `IDispatch` as described in [Type Libraries and the Object Description Language](/previous-versions/windows/desktop/automat/type-libraries-and-the-object-description-language).
    
    If the object you want to add to JavaScript doesn't already implement `IDispatch`, you need to write an `IDispatch` class wrapper for the object that you want to expose.

    There might be libraries to do this automatically.  To learn more about the steps that are needed to write an `IDispatch` class wrapper for the object that you want to expose, see [Automation](/previous-versions/windows/desktop/automat/automation-programming-reference).
    
1. Once the interface is defined in the IDL, save and compile the sample project in Visual Studio to create the translation lookaside buffer (TLB) file. You need to reference the TLB file from the C++ source code shown in the following section.

### Part 2B: Create the C++ object

In the WebView2 sample code, the `HostObjectSampleImpl.cpp` file takes the skeleton created in the COM IDL file and builds the C++ object.

Implement all the functions that are defined in your object's interface, as we outlined in the IDL file. Be sure to implement the functions that are required by `IDispatch`.  The compiler will throw an error if these functions aren't defined.

Next, we examine two specific properties that were defined in the IDL, to show how the IDL is related to the `.cpp` file.

1.  In Visual Studio **Solution Explorer**, open **WebView2APISample** > **Source Files** > **HostObjectSampleImpl.cpp**.

1.  Compare the property *declarations*, in `HostObjectSample.idl` ...
 
    ```csharp
    [propget] HRESULT Property([out, retval] BSTR* stringResult);
    [propput] HRESULT Property([in] BSTR stringValue);
    ```
    ... to the *implementation* of the object's properties, in `HostObjectSampleImpl.cpp`:

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
## Step 3: Call the AddHostObjectToScript API

So far, we've built our interface and implemented our host object. Now we're ready to use the `AddHostObjectToScript` API to pass the host object to our app's web-side, JavaScript code.

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

    Lines 31 to 46 show code specific to this sample app where we display HTML. Your app may have a different implementation of this code.  

1. Review line 33, which shows how to instantiate the COM object just defined in the IDL file. This is the object we will use later when we call `AddHostObjectToScript`. This gets us a pointer to the interface in `HostObjectSampleImpl.cpp`.

1. Review line 51, which casts the newly created COM object to an `IDispatch` type and then converts the object to a `VARIANT`. `VARIANT` types allow you to use data structures such as integers and arrays as well as more complex types such as `IDispatch`. 

    For a full list of supported data types, see [VARIANT structure (oaidl.h) - Win32 apps | Microsoft Docs](/windows/win32/api/oaidl/ns-oaidl-variant). However, please note that not all types in the `VARIANT` union are supported by `AddHostObjectToScript`. See [WebView2 Win32 C++ ICoreWebView2 | Microsoft Docs](/microsoft-edge/webview2/reference/win32/icorewebview2#addhostobjecttoscript) for more details.
    
    Now that we have a variant of the object that is C++ code-friendly, our app's native-side code is ready to pass the host object to the app's web-side code.

1. Review line 52, which sets the remote objects variant type as `IDispatch`. 

1. Review line 59, where we pass the `VARIANT` to `AddHostObjectToScript`, name it `sample`, and enable the remote object as `VARIANT` (`&remoteObjectAsVariant`).

Now the WebView2 app's native-side code successfully creates a host object that implements `IDispatch`. This native code also calls the WebView2 API `AddHostObjectToScript` and passes the object to the app's web-side code via `AddHostObjectToScript`. Continue to the next step to see what's enabled by passing the host object from the app's native-side code to the app's web-side code.


<!-- ====================================================================== -->
## Step 4: Use AddHostObjectToScript to pass a method to the web

To follow along, we use the WebView2 Sample App.  

1. In Microsoft Visual Studio, select **File** > **Save All (Ctrl+Shift+S)** to save the project.

1. Press **F5** to build and run the project.

1. Open `ScenarioAddHostObject.html`.

1. Click **Scenario** > **Host Objects**.

1. Explore properties by clicking buttons such as **Property**, **Method**, and **Callback** to see how the sample code behaves.

    By now you have observed capabilities of the host object used from the app's web-side code. To gain insight into what's happening in JavaScript, let's examine the following code: 

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

    Line 154 references `chrome.webview.hostObjects.sync.sample.dateProperty`. This line of code is getting the `dateProperty` of the native host object.

Congratulations! You have successfully created a host object in your app's native-side code, passed the host object to your app's web-side code, and then used the host object from the app's web-side code.

Now let's see what other APIs there are in the host object ecosystem. For more information about host objects, see [WebView2 Win32 C++ ICoreWebView2](/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-1.0.1054.31#addhostobjecttoscript&preserve-view=true).


<!-- ====================================================================== -->
## API Reference overview

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.AddHostObjectToScript Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.addhostobjecttoscript)
* [CoreWebView2.RemoveHostObjectFromScript Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.removehostobjectfromscript)
* [CoreWebView2Settings.AreHostObjectsAllowed Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.arehostobjectsallowed)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.AddHostObjectToScript Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#addhostobjecttoscript)
* [CoreWebView2.RemoveHostObjectFromScript Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#removehostobjectfromscript)
* [CoreWebView2Settings.AreHostObjectsAllowed Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings#arehostobjectsallowed)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2::AddHostObjectToScript method](/microsoft-edge/webview2/reference/win32/icorewebview2#addhostobjecttoscript)
* [ICoreWebView2::RemoveHostObjectFromScript method](/microsoft-edge/webview2/reference/win32/icorewebview2#removehostobjectfromscript)
* [ICoreWebView2Settings::AreHostObjectsAllowed property (get](/microsoft-edge/webview2/reference/win32/icorewebview2settings#get_arehostobjectsallowed), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2settings#put_arehostobjectsallowed)

---


<!-- ====================================================================== -->
## See also

* [Web/Native Interop](../concepts/overview-features-apis.md#webnative-interop) in _Overview of WebView2 features and APIs_.
