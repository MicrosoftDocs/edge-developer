---
description: Get started guide with WebView2 for Win32 apps
title: Get started with WebView2 in Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 11/05/2021
ms.topic: tutorial
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html
---
# Get started with WebView2 in Win32 apps

In this article, get started creating your first WebView2 app in Win32. Learn about the main features of [WebView2](https://developer.microsoft.com/microsoft-edge/webview2). For more information about individual WebView2 APIs, navigate to [API reference](/microsoft-edge/webview2/reference/win32).

> [!NOTE]
> This tutorial refers to WebView2 samples. To view or copy sample code, navigate to [WebView2 Sample Code](https://github.com/MicrosoftEdge/WebView2Samples).

<!-- ====================================================================== -->
## Step 0 - Prerequisites

Install the following prerequisites before proceeding.

1.  [Visual Studio](https://visualstudio.microsoft.com) 2015 or later with C++ support installed.

1.  [WebView2 Runtime](https://developer.microsoft.com/microsoft-edge/webview2), or any [Microsoft Edge Insider (preview) Channel](https://www.microsoftedgeinsider.com/download) (Beta, Dev, or Canary) installed on a supported operating system (OS). The currently supported OS list is Windows 11, Windows 10, Windows 8.1, and Windows 7.


<!-- ====================================================================== -->
## Step 1 - Create a single-window app

Start with a basic desktop project that contains a single main window.

> [!IMPORTANT]
> To better focus the walkthrough, use modified sample code from [Walkthrough: Create a traditional Windows Desktop application (C++)](/cpp/windows/walkthrough-creating-windows-desktop-applications-cpp) for your sample app.  To download the modified sample and get started, navigate to [WebView2 Samples](https://github.com/MicrosoftEdge/WebView2Samples#1-getting-started-guide).

1.  In Visual Studio, open `WebView2GettingStarted.sln`.
    If you use an older version of Visual Studio, in the **Solution Explorer** right-click **WebView2GettingStarted**, and choose **Properties**. Click **Configuration Properties** > **General**, then modify **Windows SDK Version** and **Platform Toolset** to use the Win10 SDK and Visual Studio toolset.

:::image type="complex" source="../media/tool-version.png" alt-text="Tool version" lightbox="../media/tool-version.png":::
   Tool version
:::image-end:::

Visual Studio may display errors, because your project is missing the WebView2 header file. The errors resolve after completing [Section 2 - Install WebView2 SDK](#step-2---install-webview2-sdk).

<!-- ====================================================================== -->
## Step 2 - Install WebView2 SDK

Add the WebView2 SDK into the project.  Use NuGet to install the Win32 SDK.

1.  In **Solution Explorer**, right-click the project name, and then select **Manage NuGet Packages**.

    :::image type="complex" source="../media/manage-nuget-packages.png" alt-text="Manage NuGet packages" lightbox="../media/manage-nuget-packages.png":::
       Manage NuGet packages
    :::image-end:::

1.  Install the Windows Implementation Library.
    1.  In the search bar, type `Microsoft.Windows.ImplementationLibrary` > choose **Microsoft.Windows.ImplementationLibrary**.
    1.  In the right-hand side window, choose **Install**.  NuGet downloads the library to your machine.

        > [!NOTE]
        > The [Windows Implementation Library](https://github.com/Microsoft/wil) and [Windows Runtime C++ Template Library](/cpp/cppcx/wrl/windows-runtime-cpp-template-library-wrl?view=vs-2019&preserve-view=true) are optional and make working with COM easier for the example.

        :::image type="complex" source="../media/wil.png" alt-text="Windows Implementation Library" lightbox="../media/wil.png":::
           Windows Implementation Library
        :::image-end:::

1.  Install the WebView2 SDK.
    1.  In the search bar, type `Microsoft.Web.WebView2` and choose **Microsoft.Web.WebView2**.
    1.  In the right-hand side window, click **Install**.  NuGet downloads the SDK to your machine.

        :::image type="complex" source="../media/nuget.png" alt-text="NuGet Package Manager" lightbox="../media/nuget.png":::
           NuGet Package Manager
        :::image-end:::

1.  Add WebView2 header to your project.

    :::row:::
       :::column span="1":::
          In the `HelloWebView.cpp` file, copy the following code snippet and paste it after the last `#include` line.

          ```cpp
          // include WebView2 header
          #include "WebView2.h"
          ```
       :::column-end:::
       :::column span="1":::
          The include section should look similar to the following code snippet.

          ```cpp
          ...
          #include <wrl.h>
          #include <wil/com.h>
          // include WebView2 header
          #include "WebView2.h"
          ```
       :::column-end:::
    :::row-end:::

The project is ready to use and build against the WebView2 API.

### Build your empty sample app

1.  Click **File** > **Save All (Ctrl+Shift+S)** to save the project.

1.  Press **F5** to build and run the project.

 The sample app displays an empty window.

:::image type="complex" source="../media/empty-app.png" alt-text="Sample app displays an empty window." lightbox="../media/empty-app.png":::
   The sample app displays an empty window.
:::image-end:::


<!-- ====================================================================== -->
## Step 3 - Create a single WebView2 control within the parent window

Add a WebView2 control to the main window.

Use the `CreateCoreWebView2Environment` method to set up the environment and locate the Microsoft Edge browser powering the control.  You may also use the `CreateCoreWebView2EnvironmentWithOptions` method if you want to specify browser location, user folder, browser flags, and so on, instead of using the default setting.  Upon the completion of the `CreateCoreWebView2Environment` method, run the `ICoreWebView2Environment::CreateCoreWebView2Controller` method inside the `ICoreWebView2CreateCoreWebView2EnvironmentCompletedHandler` callback and run the `ICoreWebView2Controller::get_CoreWebView2` method to get the associated WebView.

In the callback, set a few more settings, resize the WebView2  to fill 100% of the parent window, and display Bing.

1.  Copy the following code snippet and paste into `HelloWebView.cpp` after the `// <-- WebView2 sample code starts here -->` comment and before the `// <-- WebView2 sample code ends here -->` comment.

    ```cpp
    // 3 - Create a single WebView2 control in the parent window
    // Locate the browser and set up the environment for WebView
    CreateCoreWebView2EnvironmentWithOptions(nullptr, nullptr, nullptr,
        Callback<ICoreWebView2CreateCoreWebView2EnvironmentCompletedHandler>(
            [hWnd](HRESULT result, ICoreWebView2Environment* env) -> HRESULT {
    
                // Create a CoreWebView2Controller and get the associated CoreWebView2 whose parent is the main window hWnd
                env->CreateCoreWebView2Controller(hWnd, Callback<ICoreWebView2CreateCoreWebView2ControllerCompletedHandler>(
                    [hWnd](HRESULT result, ICoreWebView2Controller* controller) -> HRESULT {
                    if (controller != nullptr) {
                        webviewController = controller;
                        webviewController->get_CoreWebView2(&webviewWindow);
                    }
    
                    // Add a few settings for the webview
                    // The demo step is redundant since the values are the default settings
                    ICoreWebView2Settings* Settings;
                    webviewWindow->get_Settings(&Settings);
                    Settings->put_IsScriptEnabled(TRUE);
                    Settings->put_AreDefaultScriptDialogsEnabled(TRUE);
                    Settings->put_IsWebMessageEnabled(TRUE);
    
                    // Resize the WebView2 control to fit the bounds of the parent window
                    RECT bounds;
                    GetClientRect(hWnd, &bounds);
                    webviewController->put_Bounds(bounds);
    
                    // Schedule an async task to navigate to Bing
                    webviewWindow->Navigate(L"https://www.bing.com/");
    
                    // 4 - Navigation events
    
                    // 5 - Scripting
    
                    // 6 - Communication between host and web content
    
                    return S_OK;
                }).Get());
            return S_OK;
        }).Get());
    ```

### Build your Bing sample app

1.  Click **File** > **Save All (Ctrl+Shift+S)** to save the project.

1.  Press **F5** to build and run the project.

    Now you have a WebView2 window displaying the Bing page.

:::image type="content" source="../media/bing-window.png" alt-text="Bing window" lightbox="../media/bing-window.png":::


<!-- ====================================================================== -->
## Step 4 - Navigation events

The WebView2 team already covered navigating to URL using the `ICoreWebView2::Navigate` method in the last step.  During navigation, WebView2 fires a sequence of events to which the host may listen.

1.  `NavigationStarting`
1.  `SourceChanged`
1.  `ContentLoading`
1.  `HistoryChanged`
1.  `NavigationCompleted`

For more information, see [Navigation events for WebView2](../concepts/navigation-events.md).

:::image type="content" source="../media/navigation-events.png" alt-text="Navigation events" lightbox="../media/navigation-events.png":::

In error cases, one or more of the following events may occur depending on whether the navigation continued to an error webpage.

*   `SourceChanged`
*   `ContentLoading`
*   `HistoryChanged`

> [!NOTE]
> If an HTTP redirect occurs, there are multiple `NavigationStarting` events in a row.

1.  As an example of using the events, register a handler for the `NavigationStarting` event to cancel any non-https requests.  Copy the following code snippet and paste into `HelloWebView.cpp`.

    ```cpp
    // register an ICoreWebView2NavigationStartingEventHandler to cancel any non-https navigation
    EventRegistrationToken token;
    webviewWindow->add_NavigationStarting(Callback<ICoreWebView2NavigationStartingEventHandler>(
        [](ICoreWebView2* webview, ICoreWebView2NavigationStartingEventArgs * args) -> HRESULT {
            PWSTR uri;
            args->get_Uri(&uri);
            std::wstring source(uri);
            if (source.substr(0, 5) != L"https") {
                args->put_Cancel(true);
            }
            CoTaskMemFree(uri);
            return S_OK;
        }).Get(), &token);
    ```

    Now the app does not open to any non-https sites. You can use a similar mechanism to accomplish other tasks, such as restricting navigation to within your own domain.


<!-- ====================================================================== -->
## Step 5 - Scripting

Use host apps to inject JavaScript code into WebView2 controls at runtime. You can task WebView2 to run arbitrary JavaScript or add initialization scripts. The injected JavaScript applies to all new top-level documents and any child frames until the JavaScript is removed. The injected JavaScript is run with specific timing.

*   Run it after the creation of the global object.
*   Run it before any other script included in the HTML document is run.

1.  Copy the following code snippet and paste into `HelloWebView.cpp`.

    ```cpp
    // Schedule an async task to add initialization script that freezes the Object object
    webviewWindow->AddScriptToExecuteOnDocumentCreated(L"Object.freeze(Object);", nullptr);
    // Schedule an async task to get the document URL
    webviewWindow->ExecuteScript(L"window.document.URL;", Callback<ICoreWebView2ExecuteScriptCompletedHandler>(
        [](HRESULT errorCode, LPCWSTR resultObjectAsJson) -> HRESULT {
            LPCWSTR URL = resultObjectAsJson;
            //doSomethingWithURL(URL);
            return S_OK;
        }).Get());
    ```

    Now, WebView2 freezes the `Object` and returns the page document once.

> [!NOTE]
> The script injection APIs (and some other WebView2 APIs) are asynchronous, you should use callbacks if code is must be run in a specific order.


<!-- ====================================================================== -->
## Step 6 - Communication between host and web content

The host and the web content can also communicate with each other through the `postMessage` method.  The web content running within a WebView2 control can post to the host through the `window.chrome.webview.postMessage` method, and the message is handled by any registered `ICoreWebView2WebMessageReceivedEventHandler` event handler on the host.

Similarly, the host can message the web content through the `ICoreWebView2::PostWebMessageAsString` or `ICoreWebView2::PostWebMessageAsJSON` method, and the message is caught by handlers that are added from the `window.chrome.webview.addEventListener` listener.  This communication mechanism allows the web content to use native capabilities by passing messages to ask the host to run native APIs.

As an example to understand the mechanism, the following steps occur when you try to output the document URL in WebView.

1.  The host registers a handler to return received message back to the web content.
1.  The host injects a script to the web content that registers a handler to print message from the host.
1.  The host injects a script to the web content that posts the URL to the host.
1.  The handler of the host is triggered and returns the message (the URL) to the web content.
1.  The handler of the web content is triggered and prints message from the host (the URL).

Copy the following code snippet and paste into `HelloWebView.cpp`.

```cpp
// Set an event handler for the host to return received message back to the web content
webviewWindow->add_WebMessageReceived(Callback<ICoreWebView2WebMessageReceivedEventHandler>(
    [](ICoreWebView2* webview, ICoreWebView2WebMessageReceivedEventArgs * args) -> HRESULT {
        PWSTR message;
        args->TryGetWebMessageAsString(&message);
        // processMessage(&message);
        webview->PostWebMessageAsString(message);
        CoTaskMemFree(message);
        return S_OK;
    }).Get(), &token);

// Schedule an async task to add initialization script that
// 1) Add an listener to print message from the host
// 2) Post document URL to the host
webviewWindow->AddScriptToExecuteOnDocumentCreated(
    L"window.chrome.webview.addEventListener(\'message\', event => alert(event.data));" \
    L"window.chrome.webview.postMessage(window.document.URL);",
nullptr);
```

1.  Click **File** > **Save All (Ctrl+Shift+S)** to save the project.

1.  Press **F5** to build and run the project.

    The URL appears in a pop-up window before navigating to a webpage.

    :::image type="complex" source="../media/show-url.png" alt-text="The sample app displays the Bing website." lightbox="../media/show-url.png":::
       The sample app with Webview2 control displays the Bing website, http://www.bing.com. The sample app also displays an OK button. Users click OK to continue to the url.
    :::image-end:::

Congratulations, you built your first WebView2 app!


<!-- ====================================================================== -->
## Next steps

To learn more about WebView2 functions not covered in this article, see the following resources.

*  [MicrosoftEdge/WebView2Samples repo](https://github.com/MicrosoftEdge/WebView2Samples/tree/master/GettingStartedGuides/Win32_GettingStarted) - the code used in this tutorial.
*  [WebView2 development best practices](../concepts/developer-guide.md)
*  [WebView2 API Sample](https://github.com/MicrosoftEdge/WebView2Samples/blob/master/SampleApps/WebView2APISample/README.md) - a comprehensive example of WebView2 capabilities.
*  [WebView2Browser](https://github.com/MicrosoftEdge/WebView2Browser) - a WebView2 sample app.
*  [WebView2 API reference](/microsoft-edge/webview2/reference/win32)
