---
title: Call native-side WinRT code from web-side code
description: How to pass WinRT host objects to JavaScript using the AddHostObjectToScript API for WebView2 apps.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 08/02/2022
---
# Call native-side WinRT code from web-side code

Your web-side JavaScript code can access native-side WinRT methods and properties, with the help of the **wv2winrt** tool (the WebView2 WinRT JS Projection tool).  The **wv2winrt** tool generates needed code files for your JavaScript code, and enables using methods and properties of any WinRT APIs, including:

*  Your WebView2 host app's WinRT APIs.
*  Windows WinRT APIs.
*  Third-party WinRT APIs.

For more information about why you'd want to have your web-side JavaScript code access the methods and properties of your WinRT host app, see the introduction of [Call native-side code from web-side code](hostobject.md).

This article walks you through the following main steps:

1. Create a **WinRTAdapter** project for the wv2winrt tool.

1. Run the **wv2winrt** tool to generate C++/WinRT source code for selected namespaces or classes.

1. Call [AddHostObjectToScript](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#addhostobjecttoscript), in the WinUI 2 (UWP) sample WebView2 browser app project, [WebView2Samples > webview2_sample_uwp](https://github.com/MicrosoftEdge/WebView2Samples/tree/main/SampleApps/webview2_sample_uwp).

1. Call methods and properties on the host object from your web-side JavaScript code (or from the DevTools Console).


##### Why WinRT and .NET use different approaches

This article is for WinRT WebView2 APIs, not for .NET WebView2 APIs.  The C# code in this article will build, but not run, for .NET WebView2 APIs.  Calling `AddHostObjectToScript` using this article's C# code for .NET WebView2 APIs would produce an error message.

The **wv2winrt** tool (the WebView2 WinRT JS Projection tool) is needed when projecting WinRT objects, because WinRT doesn't support `IDispatch` or any other mechanism to dynamically inspect and interact with WinRT objects, which WebView2's Win32 and .NET platforms support.  For .NET use of `AddHostObjectToScript`, see [Call native-side code from web-side code](hostobject.md) instead of this article.
<!--
`IDispatch` is a way to:
*  Dynamically inspect COM objects, to discover methods, properties, and events.
*  Interact with COM objects, to call methods, get or set properties, and subscribe to and receive events.
-->


<!-- ====================================================================== -->
## End goal of this example

First, we'll pick some WinRT APIs that we're interested in calling from JavaScript code.  For this example, we'll use the WinRT `Language` class, which is in the `Windows.Globalization` namespace, for Windows UWP applications.  The [Language Class](/uwp/api/windows.globalization.language) enables getting language information from the client's native OS.

In the WebView2 host app, the web-side JavaScript code can then access methods and properties on the `Language` object that's in the native-side code.  At the end of this example walkthrough, you'll use the **Console** of Microsoft Edge DevTools to test reading the host's `displayName` property of the `Language` class:

```javascript
const Windows = chrome.webview.hostObjects.sync.Windows;
(new Windows.Globalization.Language("en-US")).displayName;
```

The DevTools Console will then output `English (United States)`, or another language display name, demonstrating that you've called native-side WinRT code from web-side JavaScript code:

![Use the DevTools Console to test calling native-side code from web-side code](winrt-from-js-images/devtools-console-calling-native-side-code.png)

Similarly, in actual code rather than in the DevTools Console, you access the host object first by setup code for the script:

```javascript
// early in setup code:
const Windows = chrome.webview.hostObjects.sync.Windows;
```

Then in the main body of your code, calls to projected objects look like the following:

```csharp
(new Windows.Globalization.Language("en-US")).displayName;
```

Let's get started!


<!-- ====================================================================== -->
## Step 1: Clone the repo and build the WebView2 UWP sample

1. If Visual Studio 2015 or later isn't already installed, in a separate window or tab, see [Install Visual Studio](../how-to/machine-setup.md#install-visual-studio) in _Set up your Dev environment for WebView2_.  Follow the steps in that section, and then return to this page and continue the steps below.

1. If a preview channel of Microsoft Edge (Beta, Dev, or Canary) isn't already installed, in a separate window or tab, see [Install a preview channel of Microsoft Edge](../how-to/machine-setup.md#install-a-preview-channel-of-microsoft-edge) in _Set up your Dev environment for WebView2_.  Follow the steps in that section, and then return to this page and continue the steps below.

   If you have your own app code base already, you can open that project in Visual Studio, instead of starting with the **webview2_sample_uwp** sample from the `WebView2Samples` repo.

1. If not done already, clone or download the `WebView2Samples` repo to your local drive.  In a separate window or tab, see [Download the WebView2Samples repo](../how-to/machine-setup.md#download-the-webview2samples-repo) in _Set up your Dev environment for WebView2_.  Follow the steps in that section, and then return to this page and continue below.

1. On your local drive, open the `.sln` file in Visual Studio, in a directory such as:

   *  `<your-repos-directory>/WebView2Samples-main/SampleApps/webview2_sample_uwp/webview2_sample_uwp.sln`
   *  `<your-repos-directory>/WebView2Samples/SampleApps/webview2_sample_uwp/webview2_sample_uwp.sln`

   The sample solution opens in Visual Studio:

   ![Adding a new project for the wv2winrt tool](winrt-from-js-images/add-new-project-for-tool.png)

1. In Visual Studio, select **Debug** > **Start Debugging**.  This builds the **webview2_sample_uwp** project, and then runs the baseline version of the project.  The **WebView2 WinUI 2 UWP Sample** window opens:

   ![The WebView2 WinUI 2 UWP Sample window](winrt-from-js-images/webview2-winui-2-uwp-sample-app-window.png)

1. Close the **WebView2 WinUI 2 UWP Sample** window.

In case you need more information, see detailed steps in these pages, and then continue below:
* [WinUI 2 (UWP) sample app](../samples/webview2_sample_uwp.md) - steps to open, compile, and run the sample app.
* [Get started with WebView2 in WinUI 2 (UWP) apps](../get-started/winui2.md) - setting up a basic WebView2 app.
* [GitHub > WebView2Samples repo > webview2_sample_uwp](https://github.com/MicrosoftEdge/WebView2Samples/tree/main/SampleApps/webview2_sample_uwp)
* [Set up your Dev environment for WebView2](machine-setup.md) - details about setting up prerequisites.


<!-- =============================================== -->
## Step 2: Add a WinRTAdapter project for the wv2winrt tool

Next, create a **WinRTAdapter** project for the **wv2winrt** tool (the WebView2 WinRT JS Projection tool).  This project builds a library out of code that's generated by running the tool.  This generated code allows WinRT APIs to be exposed in the WebView2 control.

Add a project for the wv2winrt tool, as follows:

1. Right-click the **webview2_sample_uwp** solution (not the project), and then select **Add** > **New project**.  The **Add a new project** dialog box opens.

1. In the **Search** textbox, enter **Windows Runtime Component (C++/WinRT)**.

   **Alternative approach:** If you don't add a project using the project template for **Windows Runtime Component (C++/WinRT)** as described in the numbered steps below, then you'll need to instead install the **Universal Windows Platform development** workload, by following the steps in [UWP applications > Introduction to C++/WinRT](/windows/uwp/cpp-and-winrt-apis/intro-to-using-cpp-with-winrt#visual-studio-support-for-cwinrt-xaml-the-vsix-extension-and-the-nuget-package).

1. Select the **Windows Runtime Component (C++/WinRT)** card, and then click the **Next** button:

   ![Selecting the Windows Runtime Component (C++/WinRT) card in the 'Add a new project' dialog](winrt-from-js-images/add-proj-cpp-winrt.png)

   **Note:** Make sure the template includes C++/WinRT in its name. If you can't see this template, install the **Universal Windows Platform development** workload from within the Visual Studio Installer. If you are using Visual Studio 2019 and still can't find the template, install the **C++/WinRT templates and visualizer for VS2019** extension from **Visual Studio > Extensions > Manage Extensions**.

   The **Configure your new project** window opens.

1. In the **Project name** textbox, name the Project, specifically, **WinRTAdapter**.  **Note:** For now, you must use this specific project name:

   ![In the 'Configure your new project' window, name the project 'WinRTAdapter'](winrt-from-js-images/config-proj-name-winrtadapter.png)

1. Click the **Create** button.  The **New Universal Windows Platform Project** dialog opens:

   ![The 'New UWP project' dialog](winrt-from-js-images/new-uwpp.png)

1. Click the **OK** button.

   The **WinRTAdapter** project is created:

   ![The newly created WinRTAdapter project](winrt-from-js-images/fresh-winrtadapter-project.png)

The wv2winrt tool (the WebView2 WinRT JS Projection tool) will run in this **WinRTAdapter** project.  In a below step, you'll generate code for selected classes in this project.


<!-- =============================================== -->
## Step 3: Install Windows Implementation Library, for WinRTAdapter project

In the WinRTAdapter project, install the Windows Implementation Library (WIL), as follows:

1. In **Solution Explorer**, right-click the **WinRTAdapter** project, and then select **Manage NuGet Packages**.  The **NuGet Package Manager** window opens in Visual Studio.

1. In the **NuGet Package Manager** window, in the **Search** box, enter **Windows Implementation Library**, and then select the **Windows Implementation Library** card:

   ![NuGet Package Manager, selecting the 'Windows Implementation Library' package](winrt-from-js-images/pkg-mgr-wil.png)

1. Click the **Install** button.

WIL is now installed for the **WinRTAdapter** project.  Windows Implementation Library (WIL) is a header-only C++ library to make using COM coding for Windows easier.  It provides readable, type-safe C++ interfaces for Windows COM coding patterns.


<!-- =============================================== -->
## Step 4: Install WebView2 prerelease SDK, for WinRTAdapter project

In the WinRTAdapter project, also install a prerelease version of the WebView2 SDK, as follows:

1. In Solution Explorer, right-click the **WinRTAdapter** project, and then select **Manage NuGet Packages**.  The NuGet Package Manager window opens.

1. Select the **Include prerelease** checkbox.

1. In the **Search** box, enter **WebView2**.

1. Click the **Microsoft.Web.WebView2** card.  Detailed info appears in the middle area of the window.

1. In the **Version** drop-down, select a **prerelease** version of the WebView2 SDK.  The version must be 1.0.1243.0 or higher.  Note which version number you select.

1. Click the **Install** button:

   ![NuGet Package Manager, selecting the WebView2 SDK package, for the WinRTAdapter project](winrt-from-js-images/pkg-mgr-wv2-sdk.png)

The WebView2 prerelease SDK is now installed for the **WinRTAdapter** project.


<!-- =============================================== -->
## Step 5: Install WebView2 prerelease SDK, for webview2_sample_uwp project

In the **webview2_sample_uwp** project, install the same prerelease version of the WebView2 SDK as you installed for the **WinRTAdapter** project, as follows:

1. In Solution Explorer, right-click the **webview2_sample_uwp** project, and then select **Manage NuGet Packages**.  The NuGet Package Manager window opens.

1. Select the **Include prerelease** checkbox.

1. In the **Search** box, enter **WebView2**.

1. Click the **Microsoft.Web.WebView2** card.  Detailed information appears in the middle area of the window.

1. In the **Version** drop-down, select a **prerelease** version of the WebView2 SDK.  The version must be 1.0.1243.0 or higher.  This needs to be the same version as for the **WinRTAdapter** project.

1. Click the **Install** button.

   The screen should look similar to the above section, except that now, **NuGet Package Manager** is open for the **webview2_sample_uwp** project instead of the **WinRTAdapter** project.

The WebView2 prerelease SDK is now installed for the **webview2_sample_uwp** project.


<!-- =============================================== -->
## Step 6: Generate source code for selected host APIs

Next, configure the wv2winrt tool (the WebView2 WinRT JS Projection tool), to incorporate the WinRT classes that you want to use.  This generates source files that will then be compiled.  Generating code for these APIs enables your web-side JavaScript code to call these APIs.

In the example steps below, we'll specify two `Windows` namespaces, and the wv2winrt tool will generate source code for only APIs under those namespaces:
*  `Windows.System.UserProfile` <!-- why add Windows.System.UserProfile? -->
*  `Windows.Globalization.Language`

Later, when the sample app is running, you'll call these APIs from the DevTools Console, to demonstrate that these specified host-side APIs can be called from web-side code.

In this walkthrough, specify two `Windows` namespaces, as follows:

1. In Solution Explorer, right-click the **WinRTAdapter** project, and then select **Properties**.  The **WinRTAdapter Property Pages** dialog opens.

1. On the left, select **Common Properties** > **WebView2**.

1. Set **Use WebView2 WinRT APIs** to **No**.  This is so the WebView2 SDK doesn't copy the WebView2 WinRT component to the project's output.  This WinRTAdapter project isn't calling any WebView2 WinRT APIs, so it doesn't need the WinRT component.

1. Set **Use the wv2winrt tool** to **Yes**.

1. Set **Use JavaScript case** to **Yes**.

1. In the **Include filters** row, click the right-hand column, and then click **Edit**.  The **Include filters** dialog opens.

   <!-- true? In the same text box, below the previous value you entered, you'll also add a reference for the tool itself, such as params: **Windows.Globalization.Language**. -->

1. In the topmost text box, paste the following lines:

   ```
   Windows.System.UserProfile
   Windows.Globalization.Language
   ```

   ![Include filters dialog box](winrt-from-js-images/include-filters.png)

   You need to specify the full name of the namespaces or classes, as shown above.

1. Click the **OK** button to close the **Include filters** dialog box.

1. Make sure the **WinRTAdapter Property Pages** dialog looks like the following, for this walkthrough:

   <!-- 1st use of png: -->
   ![The 'WinRTAdapter Property Pages' dialog, with 'Common Properties > WebView2' expanded](winrt-from-js-images/winrtadapter-property-pages.png)

1. Click the **OK** button to close the **Property Pages** dialog box.

   **Add a reference:**

   In the **webview2_uwp_sample** project, add a reference that points to the **WinRTAdapter** project, as follows:

1. In Solution Explorer, expand the **webview2_uwp_sample** project, right-click **References**, and then select **Add Reference**.  The **Reference Manager** dialog opens.

1. In the tree on the left, select **Projects**.  Select the **WinRTAdapter** checkbox:

   ![Adding a reference: The WinRTAdapter checkbox in the Reference Manager dialog for the webview2_uwp_sample project](winrt-from-js-images/winrtadapter-checkbox-ref-mgr-uwp-proj.png)

1. Click the **OK** button to close the **Reference Manager** dialog.

   **Generate the API code:**

1. Right-click the **WinRTAdapter** project, and then select **Build**.

Source code is generated for namespaces or classes that you specified in the **Include filters** dialog.  That dialog populates the **Include filters** row of the **WinRTAdapter Property Pages** dialog for the **WinRTAdapter** project.

> [!IMPORTANT]
> If you installed a release version of the WebView2 SDK and your build fails with `error MIDL2011: [msg]unresolved type declaration [context]: Microsoft.Web.WebView2.Core.ICoreWebView2DispatchAdapter [ RuntimeClass 'WinRTAdapter.DispatchAdapter'  ]`, this is an issue in the release version of the WebView2 SDK and you will need to change **Use WebView2 WinRT APIs** to **Yes** in the steps above.
>
> Alternatively, add the following after the last `</ItemGroup>` in the project file `WinRTAdapter.vcxproj`:
>
>```xml
><ItemGroup Condition="'$(WebView2UseDispatchAdapter)' == 'true'">
>  <Reference Include="$(WebView2SDKPath)lib\Microsoft.Web.WebView2.Core.winmd">
>    <!-- wv2winrt needs Dispatch Adapter metadata to generate code -->
>  </Reference>
></ItemGroup>
>```
>
> Replace `$(WebView2SDKPath)` with the directory where the WebView2 SDK was installed, with a `\` at the end. For example: `..\webview2_sample_uwp\packages\Microsoft.Web.WebView2.1.0.1264.42\`.


<!-- =============================================== -->
## Step 7: Add the host object in the webview2_sample_uwp project

Next, pass the WinRT object from the native side of the host app to the web side of the host app.  To do this, add an `InitializeWebView2Async` method that calls `AddHostObjectToScript`, as follows:

1. In Solution Explorer, expand the **webview2_sample_uwp** project, and then select **MainPage.xaml.cs**.

1. Below the `MainPage` constructor, add the following `InitializeWebView2Async` method:

   ```csharp
   private async void InitializeWebView2Async()
   {
      await WebView2.EnsureCoreWebView2Async();
      var dispatchAdapter = new WinRTAdapter.DispatchAdapter();
      WebView2.CoreWebView2.AddHostObjectToScript("Windows", dispatchAdapter.WrapNamedObject("Windows", dispatchAdapter));
   }
   ```

   This method calls `AddHostObjectToScript`.

   In the line `AddHostObjectToScript("Windows", ...`, `Windows` is the top-level namespace.  If you have other top-level namespaces, you can add additional calls to `AddHostObjectToScript`, like the following example:

   ```csharp
   WebView2.CoreWebView2.AddHostObjectToScript("RuntimeComponent1", dispatchAdapter.WrapNamedObject("RuntimeComponent1", dispatchAdapter));
   ```

   The `WrapNamedObject` call creates a wrapper object for the `RuntimeComponent1` namespace. The `AddHostObjectToScript` call adds that wrapped object to script using the name `RuntimeComponent1`.

   For full guidance on how to use custom WinRT components, see [Custom (3rd-party) WinRT components](#custom-3rd-party-winrt-components), below.

1. In the `MainPage` constructor, above the `StatusUpdate("Ready");` line, add the following code:

   ```csharp
   InitializeWebView2Async();
   ```

1. Right-click the **webview2_sample_uwp** project, and then select **Set as startup project**.

1. Press `Shift+Ctrl+S` to save all files.

1. Press `F5` to run the sample app.  The **WebView2 WinUI 2 UWP Sample** window opens.

   ![The WebView2 WinUI 2 UWP Sample window](winrt-from-js-images/webview2-winui-2-uwp-sample-app-window.png)

The host app's web-side code (and the DevTools Console) can now call methods and properties of the specified namespaces or classes of the host object.


<!-- =============================================== -->
## Step 8: Call methods and properties on the host object from web-side JavaScript

Next, use the DevTools Console to demonstrate that web-side code can call the included, specified host-side APIs.

1. Click in the main part of the WebView2 sample app window to give it focus, and then press `Ctrl+Shift+I` to open Microsoft Edge DevTools.  Or, right-click the page, and then select **Inspect**.  The Microsoft Edge DevTools window opens.

1. If the Microsoft Edge DevTools window isn't visible, press `Alt+Tab` to display the DevTools window.  If needed, move the DevTools window.

1. In the DevTools Console, paste the following code, and then press `Enter`:

   ```javascript
   const Windows = chrome.webview.hostObjects.sync.Windows;
   (new Windows.Globalization.Language("en-US")).displayName;
   ```

   The Console outputs a language name string, such as `English (United States)`, demonstrating that your app's host-side code can be called from web-side code:

   ![Using the DevTools Console to test calling native-side code from web-side code](winrt-from-js-images/devtools-console-calling-native-side-code.png)

See also:
* [How WinRT types and members are represented in JavaScript](./winrt-js-conversion.md)

Congratulations!  You've finished the sample demonstration of calling WinRT code from JavaScript code.


<!-- =============================================== -->
## Custom (3rd-party) WinRT components

The wv2winrt tool supports custom third-party WinRT components, in addition to first-party OS WinRT APIs.

![3rd-party WinRT components with wv2winrt tool](./winrt-from-js-images/wv2winrt-custom-components.png)

To use custom (3rd-party) WinRT components with the wv2winrt tool, in addition to the above steps, also do the following steps:

1. Add a third project (other than your main app and WinRTAdapter project) to your Visual Studio solution that implements your WinRT class.

1. Have the WinRTAdapter project 'Add a reference' to your new third project containing your WinRT class.

1. Update the WinRTAdapter project's Include filter in the properties to also include your new class.

1. Add an additional line to `InitializeWebView2Async` to add your winrt class's namespace:

   `WebView2.CoreWebView2.AddHostObjectToScript("MyCustomNamespace", dispatchAdapter.WrapNamedObject("MyCustomNamespace", dispatchAdapter));`

1. For easy method calling from the web, optionally add your namespace sync proxy as a global object in script.  For example:

   `window.MyCustomNamespace = chrome.webview.hostObjects.sync.MyCustomNamespace;`

For an example of this, see the following WebView2 sample:

* [uwp-wv2winrt-custom-csharp-winrt](https://github.com/MicrosoftEdge/WebView2Samples/compare/uwp-wv2winrt-custom-csharp-winrt) - A sample, as a branch.


<!-- =============================================== -->
## Asynchronous WinRT methods

Following the steps in the above guide, you should be able to use synchronous proxies. For async method calls, you will need to use `chrome.webview.hostObjects.options.forceAsyncMethodMatches`.

The `forceAsyncMethodMatches` property is an array of regexes, where if any regex matches a method name on a sync proxy, the method will be run asynchronously instead. Setting this to `[/Async$/]` will have it match any method ending with the suffix `Async`.  Then matching method calls work just like a method on an async proxy and returns a promise that you can await.

Example:

```javascript
const Windows = chrome.webview.hostObjects.sync.Windows;
chrome.webview.hostObjects.options.forceAsyncMethodMatches = [/Async$/];

let result = await Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri('https://contoso.com/'));
```

For more information, see the `forceAsyncMethodMatches` row in [CoreWebView2.AddHostObjectToScript Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#addhostobjecttoscript).


<!-- ====================================================================== -->

## Subscribing to WinRT events

WinRT events are also exposed via the script proxies. You can add and remove event handlers of instance WinRT events and static WinRT events by using the `addEventListener(string eventName, function handler)` and `removeEventListener(string eventName, function handler)` methods. 

These methods work similarly to the DOM methods of the same name. Call `addEventListener` with a string name of the WinRT event you want to subscribe as the first parameter, and a function callback to be called whenever the event is raised. Calling `removeEventListener` with the same parameters unsubscribes from that event. For example:

```javascript
const Windows = chrome.webview.hostObjects.sync.Windows;
const coreApplication = Windows.ApplicationModel.Core.CoreApplication;
const coreApplicationView = coreApplication.getCurrentView();
const titleBar = coreApplicationView.titleBar;
titleBar.addEventListener('IsVisibleChanged', () => {
    console.log('titlebar visibility changed to: ' + titleBar.isVisible);
});
```

For a WinRT event that provides event args, those are provided as the first parameter to the event handler function. For example, the `Windows.Foundation.Collections.PropertySet.MapChanged` event has `IMapChangedEventArgs<string, object>` event arg object and that object is provided as the parameter to the callback.

```javascript
const Windows = chrome.webview.hostObjects.sync.Windows;
const propertySet = new Windows.Foundation.Collections.PropertySet();
propertySet.addEventListener('MapChanged', eventArgs => {
    const key = eventArgs.key;
    const collectionChange = eventArgs.collectionChange;
    // ...
});
```

The event args object will additionally have the following properties:

| Property Name | Description |
| --- | --- |
| `target` | The object that raised the event |
| `type` | The string name of the event |
| `detail` | An array of all parameters provided to the WinRT delegate |


<!-- ====================================================================== -->
## Make AddHostObjectToScript JavaScript proxies act more like other JavaScript APIs

`AddHostObjectToScript` defaults to using asynchronous and verbose proxies, but you can make the `AddHostObjectToScript` JavaScript proxies act more like other JavaScript APIs.  To read more about `AddHostObjectToScript` and its default behavior, see [AddHostObjectToScript](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#addhostobjecttoscript).  Also, if you are migrating a host app from JavaScript WinRT projection in JavaScript UWP apps, or from the EdgeHTML-based WebView, you may want to use the following approach, to better match that previous behavior.
<!-- This section is most relevant if you are migrating an existing codebase (a WinRT WebView2 host app) from EdgeHTML XAML WinUI 2 WebView to WinUI 2 WebView2. -->

To make the `AddHostObjectToScript` JavaScript proxies act more like other JavaScript APIs, set the following properties:

* `chrome.webview.hostObjects.option.defaultSyncProxy` - Proxies may either be asynchronous or synchronous.  Normally we know, when calling a method on a synchronous proxy, that the result should also be a synchronous proxy.  But in some cases, we lose that context, such as when providing a reference to a function to native code, and then native code later calling that function.  In these cases, the proxy will be asynchronous, unless this property is set.

* `chrome.webview.hostObjects.options.forceAsyncMethodMatches` - This is an array of regular expressions.  If you call a method on a synchronous proxy, the method call will actually be performed asynchronously if the method name matches a string or regular expression that's in this array.  Setting this value to [/Async$/] will make any method that ends with `Async` be an asynchronous method call.  If an async method doesn't match here and isn't forced to be asynchronous, the method will be invoked synchronously, blocking execution of the calling JavaScript and then returning the resolution of the promise, rather than returning a promise.

* `chrome.webview.hostObjects.options.ignoreMemberNotFoundError` - If you attempt to get the value of a property of a proxy, and the property doesn't exist on the corresponding native class, you'll get an exception - unless you set this property to `true`, in which case the behavior will match Chakra WinRT projection behavior (and general JavaScript behavior) and return `undefined` with no error.

Chakra WinRT projection puts the WinRT namespaces directly on the root object.  In contrast:
*  `AddHostObjectToScript` places async root proxies on `chrome.webview.hostObjects`.
*  `AddHostObjectToScript` places sync root proxies on `chrome.webview.hostObjects.sync`.

To access root proxies where Chakra WinRT projection code would expect, you can assign the root proxy WinRT namespace locations over to the root object. For example:

```javascript
window.Windows = chrome.webview.hostObjects.sync.Windows;
```

To ensure that the JavaScript that sets all this up is ran before anything else, you can either add the above statement to your JavaScript, or you can tell WebView2 to inject the above statement for you before running any other script, by using the `CoreWebView2.AddScriptToExecuteOnDocumentCreatedAsync` method.

The following example demonstrates the above techniques:

# [C#](#tab/csharp)

```csharp
webview.CoreWebView2.AddScriptToExecuteOnDocumentCreatedAsync(
            "(() => {" +
                    "if (chrome && chrome.webview) {" +
                        "console.log('Setting up WinRT projection options');" +
                        "chrome.webview.hostObjects.options.defaultSyncProxy = true;" +
                        "chrome.webview.hostObjects.options.forceAsyncMethodMatches = [/Async$/,/AsyncWithSpeller$/];" +
                        "chrome.webview.hostObjects.options.ignoreMemberNotFoundError = true;"  +
                        "window.Windows = chrome.webview.hostObjects.sync.Windows;" +
                    "}" +
                "})();");
```

# [C++](#tab/cpp)

```cpp
webView->CoreWebView2->AddScriptToExecuteOnDocumentCreatedAsync(
            LR"(
                (() => {
                    if (chrome && chrome.webview) {
                        console.log('Setting up WinRT projection options');
                        chrome.webview.hostObjects.options.defaultSyncProxy = true;
                        chrome.webview.hostObjects.options.forceAsyncMethodMatches = [/Async$/,/AsyncWithSpeller$/];
                        chrome.webview.hostObjects.options.ignoreMemberNotFoundError = true;
                        window.Windows = chrome.webview.hostObjects.sync.Windows;
                    }
                })();
            )"));
```

---


<!-- ====================================================================== -->
## WebView2 Properties available in the WinRTAdapter Property Pages

This section is for reference.

<!-- 2nd use of png: -->
![Properties that are listed in the WinRTAdapter Property Pages](winrt-from-js-images/winrtadapter-property-pages.png)

For help about a property, click a property row.  Help is shown at the bottom of the dialog.

Command-line help contains similar information for the parameters of `wv2winrt.exe`.  For example:

| Parameter | Description |
|---|---|
| `verbose` | List some content to standard out including which files have been created and information about the include and exclude rules. |
| `include` | List as above will exclude namespaces and runtimeclasses by default except those listed. The include declarations may be either namespaces which include everything in that namespace, or runtimeclass names to include just that runtimeclass. |
| `use-javascript-case` | Changes the generated code to produce methods names, property names, and so on, that use the same casing style as Chakra JavaScript WinRT projection. The default is to produce names that match the winrt. |
| `output-path` | Sets the path in which generated files will be written. |
| `output-namespace` | Sets the namespace to use for the generated WinRT class. |
| `winmd-paths` | A space-delimited list of all the winmd files that should be examined for code generation. |


<!-- ====================================================================== -->
## See also

* [How WinRT types and members are represented in JavaScript](./winrt-js-conversion.md)
* [Call native-side code from web-side code](hostobject.md)

Tutorial and sample:
* [Get started with WinUI 2 (UWP) apps](../get-started/winui2.md) - Tutorial: Steps to create an app with WebView2 using a project template.
* [WinUI 2 (UWP) sample app](../samples/webview2_sample_uwp.md) - Sample: Steps to download, build, run, and update the sample.

API Reference:
* WinRT: [CoreWebView2.AddHostObjectToScript Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#addhostobjecttoscript)
* Win32: [ICoreWebView2::AddHostObjectToScript method](/microsoft-edge/webview2/reference/win32/icorewebview2#addhostobjecttoscript)
* .NET: [CoreWebView2.AddHostObjectToScript Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.addhostobjecttoscript)

<!--
* WinRT: [ICoreWebView2Interop::AddHostObjectToScript Method](/microsoft-edge/webview2/reference/winrt/interop/icorewebview2interop#addhostobjecttoscript)
-->
