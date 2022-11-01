---
title: Call native-side code from web-side code
description: How to pass host objects to JavaScript using the AddHostObjectToScript API for WebView2 apps.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 11/01/2022
---
# Call native-side code from web-side code

WebView2 enables applications to bridge the gap between the web and native sides of an application by enabling an object to be passed to the web. Such objects are defined in the native code and often called *host objects*. They can be projected into JavaScript using the WebView2 `AddHostObjectToScript` API, as described in this document.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.AddHostObjectToScript Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.addhostobjecttoscript)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.AddHostObjectToScript Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#addhostobjecttoscript)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2::AddHostObjectToScript method](/microsoft-edge/webview2/reference/win32/icorewebview2#addhostobjecttoscript)
* [ICoreWebView2Frame::AddHostObjectToScriptWithOrigins method](/microsoft-edge/webview2/reference/win32/icorewebview2frame#addhostobjecttoscriptwithorigins)

This article covers Win32/C++.  For WinRT, see [Call native-side WinRT code from web-side code](./winrt-from-js).

---


#### Why use `AddHostObjectToScript`?

  * When developing a WebView2 app, you may encounter a native object whose methods or properties you find useful. You might want to trigger these native object methods from web-side code, as a result of user interaction on the web side of your app. In addition, you might not want to re-implement your native objects' methods in your web-side code.  The `AddHostObjectToScript` API enables re-use of native-side code by web-side code. 

  * For example, there might be a native webcam API, which would require re-writing a large amount of code on the web side. Having the ability to call the native object's methods is quicker and more efficient than re-coding the object's methods on the web side of your app. In this case, your native-side code can pass the object to your app's web-side, JavaScript code, so that your JavaScript code can reuse the native object's methods.

Scenarios that may benefit from using host objects in script:

  * There is a keyboard API, and you want to call the `keyboardObject.showKeyboard` function from the web side.

  * JavaScript is sandboxed, limiting its ability on the native side. For example, if you need to access a file on the native side, you must use the native file system. If you have a native object that's exposed to JavaScript via `AddHostObjectToScript`, you can use the object to manipulate files on the native file system.

This article uses the [Win32 sample app](https://github.com/MicrosoftEdge/WebView2Samples/tree/main/SampleApps/WebView2APISample) to demonstrate some practical applications of `AddHostObjectToScript`.


#### Overview of steps

1. Install Visual Studio, install git, clone the WebView2Samples repo (to follow the example steps below), and open the `WebView2Samples` solution file, which includes the `WebView2APISample` project, which is the Win32 sample app.

1. Define the host object in an `.idl` file, to describe the methods and properties on the object.  We'll show how the Win32 sample app defines a host object with example methods and properties.  Also implement `IDispatch` so that WebView2 can project the native host object to the app's web-side code.

1. Use `AddHostObjectToScript` to pass the native host object to the web-side code.  The Win32 sample app calls `AddHostObjectToScript` in [ScenarioAddHostObject.cpp](https://github.com/MicrosoftEdge/WebView2Samples/blob/main/SampleApps/WebView2APISample/ScenarioAddHostObject.cpp), as shown below.

1. Call the native host object's methods from the app's web-side code.  The Win32 sample app does this in [HostObjectSampleImpl.cpp](https://github.com/MicrosoftEdge/WebView2Samples/blob/main/SampleApps/WebView2APISample/HostObjectSampleImpl.cpp)


<!-- ====================================================================== -->
## Step 1: Install Visual Studio, install git, clone the WebView2Samples repo, and open the solution

1. Download and install [Microsoft Visual Studio](https://visualstudio.microsoft.com/) 2019 (version 16.11.10) or later, and other prerequisites as described in [Win32 sample app](../samples/webview2apissample.md).  The Win32 sample app was created using Visual Studio 2019, so to follow the example steps in this article, we recommend starting with Visual Studio 2019 rather than Visual Studio 2022.

1. Clone the [WebView2Samples](https://github.com/MicrosoftEdge/WebView2Samples) repo, which includes the Win32-specific WebView2 sample app.  For instructions, in a new window or tab, see [Win32 sample app](../samples/webview2apissample.md).

1. Open Microsoft Visual Studio.  We recommend initially opening the Win32 sample by using Visual Studio 2019.

1. In your local copy of the cloned `WebView2Samples` repo, open `WebView2Samples > SampleApps > WebView2Samples.sln`.  (In the repo, that file is at [github.com/MicrosoftEdge/WebView2Samples/blob/main/SampleApps/WebView2Samples.sln](https://github.com/MicrosoftEdge/WebView2Samples/blob/main/SampleApps/WebView2Samples.sln).)  Keep the sample app solution open, to follow along with the rest of this article.


<!-- ====================================================================== -->
## Step 2: Define the host object and implement IDispatch

To use the `AddHostObjectToScript` API, you first need to define a host object.  For Win32/C++, the host object definition in an `idl` file describes the exposed or wrapped properties and methods.  The host object must also implement `IDispatch`.  Continue reading this section to see how the Win32 sample app does this.  Implementing `IDispatch` is essential for formatting the host object so that it can be passed to the web-side code.

For your own code base, if you already have a host object that implements `IDispatch`, you can skip to [Step 3: Call AddHostObjectToScript from native code](#step-3-call-addhostobjecttoscript-from-native-code).

The Win32 sample app demonstrates creating a host object, as follows:

* **Part 2A:** Create the COM interface using interface definition language (IDL). This is demonstrated in [HostObjectSample.idl](https://github.com/MicrosoftEdge/WebView2Samples/blob/main/SampleApps/WebView2APISample/HostObjectSample.idl).  The IDL (`.idl`) file *defines* an interface.

* **Part 2B:** Create the C++ object. This is demonstrated in [HostObjectSampleImpl.cpp](https://github.com/MicrosoftEdge/WebView2Samples/blob/main/SampleApps/WebView2APISample/HostObjectSampleImpl.cpp).  The C++ (`.cpp`) file *implements* the defined interface, and also implements `IDispatch`.


<!-- ------------------------------ -->
#### Part 2A: Create the COM interface

In the Win32 sample app project, the file [HostObjectSample.idl](https://github.com/MicrosoftEdge/WebView2Samples/blob/main/SampleApps/WebView2APISample/HostObjectSample.idl) defines a COM object.  This step serves as a model showing how to define your own object in an IDL file.

1.  In Visual Studio **Solution Explorer**, open **WebView2APISample** > **Source Files** > **HostObjectSample.idl**.

    The following code example is broken up into two sections. The first interface is `IHostObjectSample`, starting at line 9, which inherits the `IUnknown` interface. Use this `IHostObjectSample` definition as a template for defining your object's methods, properties, callback functions, and so on.
    
    The second part is the `HostObjectSample` [coclass](/windows/win32/midl/coclass) (component object class), starting at line 35, which includes the `IHostObjectSample` and `IDispatch` interfaces.

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
    24            // Demonstrates a property which uses Date types.
    25            [propget] HRESULT DateProperty([out, retval] DATE * dateResult);
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

1.  On line 24, note the date property, which uses a `DATE` type.  We'll focus on this demo property in this article.

1.  On line 38, we include `interface IDispatch`, which is needed for our host object to work with `AddHostObjectToScript`.

    **About IDispatch**:

    `IDispatch` allows you to dynamically invoke methods and properties. Normally, calling objects requires static invocations, but you can use JavaScript to dynamically create object calls. For more information about `IDispatch` inheritance and methods, see [IDispatch interface (oaidl.h)](/windows/win32/api/oaidl/nn-oaidl-idispatch). 
    
    Implement `IDispatch` as described in [Type Libraries and the Object Description Language](/previous-versions/windows/desktop/automat/type-libraries-and-the-object-description-language).
    
    If the object you want to add to JavaScript doesn't already implement `IDispatch`, you need to write an `IDispatch` class wrapper for the object that you want to expose.

    There might be libraries to do this automatically.  To learn more about the steps that are needed to write an `IDispatch` class wrapper for the object that you want to expose, see [Automation](/previous-versions/windows/desktop/automat/automation-programming-reference).
    
1.  Save any changes you made in the project.

1.  In Solution Explorer, right-click the **WebView2APISample** (which is the Win32 sample app), and then select **Build**.  This creates the translation lookaside buffer (TLB) file.  You need to reference the TLB file from the C++ source code shown in the following section.


<!-- ------------------------------ -->
#### Part 2B: Create the C++ object

In the Win32 sample app code, [HostObjectSampleImpl.cpp](https://github.com/MicrosoftEdge/WebView2Samples/blob/main/SampleApps/WebView2APISample/HostObjectSampleImpl.cpp) takes the skeleton that's created in the COM IDL file and builds the C++ object.

Implement all the functions that are defined in your object's interface, as we outlined in the IDL file. Be sure to implement the functions that are required by `IDispatch`.  The compiler will throw an error if these functions aren't defined.

Next, we examine two specific properties that were defined in the IDL, to show how the IDL is related to the `.cpp` file.

1.  In Visual Studio **Solution Explorer**, open **WebView2APISample** > **Source Files** > [HostObjectSampleImpl.cpp](https://github.com/MicrosoftEdge/WebView2Samples/blob/main/SampleApps/WebView2APISample/HostObjectSampleImpl.cpp).

1.  Compare the property *declarations*, in [HostObjectSample.idl](https://github.com/MicrosoftEdge/WebView2Samples/blob/main/SampleApps/WebView2APISample/HostObjectSample.idl) ...
 
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
## Step 3: Call AddHostObjectToScript from native code

So far, we've built our interface and implemented our host object. Now we're ready to use the `AddHostObjectToScript` API to pass the host object to our app's web-side, JavaScript code.

1. In Visual Studio **Solution Explorer**, open **WebVie2APISample** > **Source Files** > [ScenarioAddHostObject.cpp](https://github.com/MicrosoftEdge/WebView2Samples/blob/main/SampleApps/WebView2APISample/ScenarioAddHostObject.cpp).

1. Go to line 28, where the `ScenarioAddHostObject` class implementation begins:

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
    ```

1.  Lines 31 to 45 display HTML and handle navigation.

1.  Line 33 shows how to instantiate the `HostObjectSample` COM object that was defined in the IDL file.  This is the object we will use later when we call `AddHostObjectToScript`.  Line 33 gets us a pointer to the interface that's implemented in [HostObjectSampleImpl.cpp](https://github.com/MicrosoftEdge/WebView2Samples/blob/main/SampleApps/WebView2APISample/HostObjectSampleImpl.cpp).

    ```cpp
    47            if (AreFileUrisEqual(sampleUri, uriTarget))
    48            {
    49                //! [AddHostObjectToScript]
    50                VARIANT remoteObjectAsVariant = {};
    51                m_hostObject.query_to<IDispatch>(&remoteObjectAsVariant.pdispVal);
    52                remoteObjectAsVariant.vt = VT_DISPATCH;
    ```

1.  Line 51 casts the newly created COM object to an `IDispatch` type and then converts the object to a `VARIANT`. `VARIANT` types allow you to use data structures such as integers and arrays as well as more complex types such as `IDispatch`. 

    For a full list of supported data types, see [VARIANT structure (oaidl.h)](/windows/win32/api/oaidl/ns-oaidl-variant).  Not all types in the `VARIANT` union are supported by `AddHostObjectToScript`.  For details, see [ICoreWebView2::AddHostObjectToScript method](/microsoft-edge/webview2/reference/win32/icorewebview2#addhostobjecttoscript).
    
    Now that we have a variant of the object that is C++ code-friendly, the sample app's native-side code is ready to pass the host object to the app's web-side code.

1.  Line 52 sets the remote object's variant type as `IDispatch`. 

    ```cpp
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

1.  Line 59 passes the `VARIANT` to `AddHostObjectToScript`, names it `sample`, and enables the remote object as `VARIANT` (`&remoteObjectAsVariant`).

Now the sample app's native-side code creates a host object that implements `IDispatch`. This native code also calls the WebView2 API `AddHostObjectToScript` and passes the host object to the app's web-side code. Continue to the next step to see what's enabled by passing the host object from the app's native-side code to the app's web-side code.


<!-- ====================================================================== -->
## Step 4: Use AddHostObjectToScript to pass a method to the web

To follow along, we use the Win32 sample app.

1.  In Microsoft Visual Studio, select **File** > **Save All (Ctrl+Shift+S)** to save the project.

1.  In Solution Explorer, open **WebView2APISample** > [ScenarioAddHostObject.html](https://github.com/MicrosoftEdge/WebView2Samples/blob/main/SampleApps/WebView2APISample/assets/ScenarioAddHostObject.html).  We'll compare this file to the corresponding webpage in the running Win32 sample app.

1.  In Solution Explorer, right-click the **WebView2APISample** (which is the Win32 sample app), and then select **Build**.

1.  Press **F5** to run the project in Debug mode.

1.  In the Win32 sample app (which has the titlebar of **WebView2APISample**), click the **Scenario** menu, and then select the **Host Objects** menuitem.  The **AddHostObjectToScript Sample** webpage appears, defined by `ScenarioAddHostObject.html`:

    ![Top of Host Objects demo page](./hostobject-images/sample-app-top.png)

1.  The webpage suggests using the **Console** tool of DevTools to run JavaScript statements on the `chrome.webview.hostObjects.sample` object.  If you want to open DevTools from the sample app, right-click the page and then select **Inspect**.  Then select the **Console** tab.  For more information, see [Console overview](https://learn.microsoft.com/microsoft-edge/devtools-guide-chromium/console/).

    To open DevTools, pressing `F12` might not work in this context, and might trigger an exception.  If so, in Visual Studio, select **Stop Debugging**, and then press `F5` to restart debugging.  In the sample app, select **Scenario** > **Host Objects** again.  For more information, see [Open DevTools using an approach other than F12](https://learn.microsoft.com/microsoft-edge/webview2/how-to/debug-visual-studio#open-devtools-using-an-approach-other-than-f12) in _Debug WebView2 apps with Visual Studio_.

    The bottom of the Host Objects demo page duplicates the demo object members within an `<iframe>`:
    <!-- todo: explain apparent dup'n -->

    ![Bottom of Host Objects demo page](./hostobject-images/sample-app-bottom.png)

1.  In the rendered demo page in the sample app, read the label text explaining the **Date** buttons.

1.  Click the **Date** buttons.  A date string is displayed below the buttons, such as:

    ```
    sample.dateProperty: Tue Nov 01 2022 12:45:25 GMT-0700 (Pacific Daylight Time)
    ```
    
1.  Explore properties and methods by clicking the buttons in the demo webpage and entering values, to see how the sample code behaves.

    The buttons demonstrate accessing properties and methods of the host object from the app's web-side code.  To gain insight into what's happening in JavaScript, examine the following code in [ScenarioAddHostObject.html](https://github.com/MicrosoftEdge/WebView2Samples/blob/main/SampleApps/WebView2APISample/assets/ScenarioAddHostObject.html).

    The following code is a demo `Date` property, directly within the `body` element:

    ```javascript
    54    <h2>Date Objects</h2>
    55    <button id="setDateButton">Set Date to Now</button>
    56    <label for="setDateButton">Sets <code>chrome.webview.hostObjects.options.shouldSerializeDates = true</code> 
              and then runs <code>chrome.webview.hostObjects.sample.dateProperty = new Date()</code></label>
    57    <br />
    58    <button id="createRemoteDateButton">Set Remote Date</button>
    59    <label for="createRemoteDateButton">Calls <code>chrome.webview.hostObjects.sample.createNativeDate()</code> 
              to have the native object create and set the current time to the DateProperty</label>
    60    <code><pre><span id="dateOutput"></span></pre></code>
    61
    62    <div id="div_iframe" style="display: none;">
    63        <h2>IFrame</h2>
    64    </div>
    ```

    You can also read the above label text in the rendered demo page in the sample app, explaining the **Date** button code.

    The following code is a demo `Date` property that's wrapped in an `iframe` element that's created within a `script` element:
    <!-- todo: relate to the above code, why do the buttons appear dup'd in frame -->

    ```javascript
    150    // Date property 
    151    document.getElementById("setDateButton").addEventListener("click", () => { 
    152        chrome.webview.hostObjects.options.shouldSerializeDates = true; 
    153        chrome.webview.hostObjects.sync.sample.dateProperty = new Date(); 
    154        document.getElementById("dateOutput").textContent = 
                   "sample.dateProperty: " + chrome.webview.hostObjects.sync.sample.dateProperty;
    155    }); 
    156    document.getElementById("createRemoteDateButton").addEventListener("click", () => { 
    157        chrome.webview.hostObjects.sync.sample.createNativeDate(); 
    158        document.getElementById("dateOutput").textContent = 
                   "sample.dateProperty: " + chrome.webview.hostObjects.sync.sample.dateProperty; 
    159    });
    ```

    Line 154 references `chrome.webview.hostObjects.sync.sample.dateProperty`. This line of code is getting the `dateProperty` of the native host object.

    In the `.idl` file, described previously, the date property is defined as part of the host object.


You can experiment with using and modifying the Win32 sample app.  Then follow the same pattern in your own app:

*  Create a host object in your app's native-side code.
*  Pass the host object to your app's web-side code.
*  Use the host object from the app's web-side code.

To find out what other APIs there are in the host object ecosystem, see [WebView2 Win32 C++ ICoreWebView2](/microsoft-edge/webview2/reference/win32/icorewebview2#addhostobjecttoscript).


<!-- ====================================================================== -->
## API Reference overview

See [Host/web object sharing](../concepts/overview-features-apis.md#hostweb-object-sharing) in _Overview of WebView2 features and APIs_.


<!-- ====================================================================== -->
## See also

* [Web/native interop](../concepts/overview-features-apis.md#webnative-interop) in _Overview of WebView2 features and APIs_.
* [Using frames in WebView2 apps](./frames.md)
* [Call native-side WinRT code from web-side code](./winrt-from-js.md)

GitHub:
* [Win32 sample app (WebView2APISample project)](https://github.com/MicrosoftEdge/WebView2Samples/tree/main/SampleApps/WebView2APISample)
   * [HostObjectSample.idl](https://github.com/MicrosoftEdge/WebView2Samples/blob/main/SampleApps/WebView2APISample/HostObjectSample.idl)
   * [HostObjectSampleImpl.cpp](https://github.com/MicrosoftEdge/WebView2Samples/blob/main/SampleApps/WebView2APISample/HostObjectSampleImpl.cpp)
   * [ScenarioAddHostObject.html](https://github.com/MicrosoftEdge/WebView2Samples/blob/main/SampleApps/WebView2APISample/assets/ScenarioAddHostObject.html)
   * [ScenarioAddHostObject.cpp](https://github.com/MicrosoftEdge/WebView2Samples/blob/main/SampleApps/WebView2APISample/ScenarioAddHostObject.cpp)
