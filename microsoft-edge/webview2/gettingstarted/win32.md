---
description: Host web content in your Win32 app with the Microsoft Edge WebView 2 control
title: Getting started with WebView2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/10/2020
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html
---

# Getting started with WebView2 (developer preview)  

The following content walks you through the commonly used functionalities of [WebView2 (developer preview)][Webview2Index] and provides a starting  point for creating your first WebView2 app.  For more information about individual WebView2 APIs, see [API reference][Webview2ReferenceWin3209622].  

## Prerequisites  

*   [Microsoft Edge (Chromium)][MicrosoftedgeinsiderDownload] installed on supported OS \(currently Windows 10, Windows 8.1, and Windows 7\).  
    
    > [!NOTE]
    > The WebView team recommends using the Canary channel and the minimum required version is 82.0.488.0.  
    
*   [Visual Studio][MicrosoftVisualstudioMain] 2015 or later with C++ support installed.  

## Step 1 - Create a single window win32 app  

Start with a basic desktop project containing a single main window.  To better focus the walkthrough, you are using modified sample code from [Walkthrough: Create a traditional Windows Desktop application (C++)][CppWindowsWalkthroughCreatingDesktopApplication] for your sample app.  To download the modified sample and get started, see [WebView2 Samples][GithubMicrosoftedgeWebview2samplesGettingStartedGuide].  

In Visual Studio, open `WebView2GettingStarted.sln`.  If you are using an older version of Visual Studio, hover on the **WebView2GettingStarted** project, open the contextual menu \(right-click\), and select **Properties**.  Under **Configuration Properties** > **General**, modify **Windows SDK Version** and **Platform Toolset** to use the Win10 SDK and Visual Studio toolset \(VS toolset\) available to you.  

:::image type="complex" source="../media/tool-version.png" alt-text="Tool version":::
   Tool version  
:::image-end:::  

Visual Studio may show some errors due to missing WebView2 header file, which should go away after Step 2 is completed.  

## Step 2 - Install WebView2 SDK  

Add the WebView2 SDK into the project.  For the developer preview, you may install the Win32 SDK using Nuget.  

1.  Hover on the project, open the contextual menu \(right-click\), and select **Manage Nuget Packages**.  
    
    :::image type="complex" source="../media/manage-nuget-packages.png" alt-text="Manage Nuget packages":::
       Manage Nuget packages  
    :::image-end:::  
    
1.  Install the Windows Implementation Library.  
    1.  Enter `Microsoft.Windows.ImplementationLibrary` in the search bar, select **Microsoft.Windows.ImplementationLibrary** from the results, and select **Install** in the right-hand side window.  Nuget downloads the SDK to your machine.  
        
        > [!NOTE] 
        > The [Windows Implementation Library][GithubMicrosoftWilMain] and [Windows Runtime C++ Template Library][CppCxWrlTemplateLibraryVS2019] are optional and were added to make working with COM easier for the example.  
        
        :::image type="complex" source="../media/wil.png" alt-text="Windows Implementation Library":::
           Windows Implementation Library  
        :::image-end:::  
        
1.  Install the WebView2 SDK.  
    1.  Enter `Microsoft.Web.WebView2` in the search bar, select **Microsoft.Web.WebView2** from the results, and select **Install** in the right-hand side window.  Nuget downloads the SDK to your machine.  
        
        :::image type="complex" source="../media/nuget.png" alt-text="Nuget":::
           Nuget
        :::image-end:::  
        
1.  Add WebView2 header to your project.  
    :::row:::
       :::column span="1":::
          Open `HelloWebView.cpp`, copy the following code snippet and paste into `HelloWebView.cpp` after last `#include` line.  
          
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
    
You are all set to use and build against the WebView2 API.  

### Build your empty sample app  

Press `F5` to build and run the sample app.  You should see an app displaying an empty window.  

:::image type="complex" source="../media/empty-app.png" alt-text="Empty app":::
   Empty app  
:::image-end:::  

## Step 3 - Create a single WebView within the parent window  

Add a WebView to the main window.  Use the `CreateCoreWebView2Environment` method to set up the environment and locate the Microsoft Edge \(Chromium\) browser powering the control.  You may also use the `CreateCoreWebView2EnvironmentWithOptions` method if you want to specify browser location, user folder, browser flags, and so on, instead of using the default setting.  Upon the completion of the `CreateCoreWebView2Environment` method, you are able to run the `ICoreWebView2Environment::CreateCoreWebView2Controller` method inside the `ICoreWebView2CreateCoreWebView2EnvironmentCompletedHandler` callback and run the `ICoreWebView2Controller::get_CoreWebView2` method to get the associated WebView.  

In the callback, set a few additional settings, resize the WebView to take 100% of the parent window, and navigate to Bing.  

Copy the following code snippet and paste into `HelloWebView.cpp` after the `// <-- WebView2 sample code starts here -->` note and before the `// <-- WebView2 sample code ends here -->` note.  

```cpp
// Step 3 - Create a single WebView within the parent window
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
                
                // Resize WebView to fit the bounds of the parent window
                RECT bounds;
                GetClientRect(hWnd, &bounds);
                webviewController->put_Bounds(bounds);
                
                // Schedule an async task to navigate to Bing
                webviewWindow->Navigate(L"https://www.bing.com/");
                
                // Step 4 - Navigation events
                
                // Step 5 - Scripting
                
                // Step 6 - Communication between host and web content
                
                return S_OK;
            }).Get());
        return S_OK;
    }).Get());
```  


### Build your Bing sample app  

Press `F5` to build and run the app.  Now you have a WebView window displaying the Bing page.  

:::image type="complex" source="../media/bing-window.png" alt-text="Bing window":::
   Bing window  
:::image-end:::  

## Step 4 - Navigation events  

The WebView team already covered navigating to URL using the `ICoreWebView2::Navigate` method in the last step.  During navigation, WebView fires a sequence of events to which the host may listen.  

1.  `NavigationStarting`  
1.  `SourceChanged`  
1.  `ContentLoading`  
1.  `HistoryChanged`   
1.  `NavigationCompleted`   

For more information, see [Navigation events][Webview2ConceptsNavigationEvents].  

:::image type="complex" source="../media/navigation-events.png" alt-text="Navigation events":::
   Navigation events  
:::image-end:::  

In error cases, one or more of the following events may occur depending on whether the navigation is continued to an error page.  

*   `SourceChanged`  
*   `ContentLoading`  
*   `HistoryChanged`

In case of an HTTP redirect, there are multiple `NavigationStarting` events in a row.  

As an example of utilizing the events, register a handler for the `NavigationStarting` event to cancel any non-https requests.  Copy the following code snippet and paste into `HelloWebView.cpp`.  

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

Now the app is not navigating to any non-https sites.  You may use similar mechanism to accomplish other tasks, such as restricting navigation to within your own domain.  

## Step 5 - Scripting  

The hosting app may also inject JavaScript into WebView.  You may task WebView to run arbitrary JavaScript or add initialization scripts.  Added initialization scripts apply to all future top level document and child frame navigation until removed, and run after the global object has been created and before any other script included by the HTML document is run.  

Copy the following code snippet and paste into `HelloWebView.cpp`.  

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

Now WebView should always freezes the `Object` object and returns the page document once.  

> [!NOTE] 
> The script injection APIs \(and some other WebView2 APIs\) are asynchronous, you should use callbacks if code is must be run in a specific order.  

## Step 6 - Communication between host and web content  

The host and the web content may also communicate with each other through the `postMessage` method.  The web content running within a WebView may post to the host through the `window.chrome.webview.postMessage` method, and the message is handled by any registered the `ICoreWebView2WebMessageReceivedEventHandler` event handler on the host.  Likewise, the host may message the web content through `ICoreWebView2::PostWebMessageAsString` or `ICoreWebView2::PostWebMessageAsJSON` method, which is caught by handlers added from `window.chrome.webview.addEventListener` listener.  The communication mechanism allows the web content to utilize native capabilities by passing messages to ask the host to call native APIs.  

As an example to understand the mechanism, the following steps occur when you try printing out the document URL in WebView.  

1.  The host registers a handler to return received message back to the web content  
1.  The host injects a script to the web content that registers a handler to print message from the host  
1.  The host injects a script to the web content that posts the URL to the host  
1.  The handler of the host is triggered and returns the message \(the URL\) to the web content  
1.  The handler of the web content is triggered and prints message from the host \(the URL\)  

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

### Build your show URL sample app  

Press `F5` to build and run the app.  You should see the URL in a pop-up window prior to navigating to a page.  

:::image type="complex" source="../media/show-url.png" alt-text="Show url":::
   Show url  
:::image-end:::  

Congratulations, you just built your first WebView2 app!  

## Next steps  

Many of the WebView2 functionalities that are not covered on this page, the following section provided additional resources.  

### See also  

*   For a comprehensive example of WebView2 capabilities, see [WebView2 API Sample][GithubMicrosoftedgeWebview2samplesApisample].  
*   For a sample application built using WebView2, see [WebView2Browser][GithubMicrosoftedgeWebview2browser].  
*   For detailed information about the WebView2 API, see [API reference][Webview2ReferenceWin3209622].  

## Getting in touch with the Microsoft Edge WebView team  

[!INCLUDE [contact WebView team note](../includes/contact-webview-team-note.md)]  

<!-- links -->  

[Webview2Index]: ../index.md "Introduction to Microsoft Edge WebView2 (Preview) | Microsoft Docs"  
[Webview2ReferenceWin3209622]: /microsoft-edge/webview2/reference/win32 "Reference (WebView2) | Microsoft Docs"  
[Webview2ConceptsNavigationEvents]: ../concepts/navigation-events.md "Navigation events | Microsoft Docs"  

[CppCxWrlTemplateLibraryVS2019]: /cpp/cppcx/wrl/windows-runtime-cpp-template-library-wrl?view=vs-2019 "Windows Runtime C++ Template Library (WRL) | Microsoft Docs"  
[CppWindowsWalkthroughCreatingDesktopApplication]: /cpp/windows/walkthrough-creating-windows-desktop-applications-cpp?view=vs-2019 "Walkthrough: Create a traditional Windows Desktop application (C++) | Microsoft Docs"  

[GithubMicrosoftedgeWebview2browser]: https://github.com/MicrosoftEdge/WebView2Browser "WebView2Browser - MicrosoftEdge/WebView2Browser | GitHub"  

[GithubMicrosoftedgeWebviewfeedback]: https://github.com/MicrosoftEdge/WebViewFeedback "WebView Feedback - MicrosoftEdge/WebViewFeedback | GitHub"  

[GithubMicrosoftedgeWebview2samplesApisample]: https://github.com/MicrosoftEdge/WebView2Samples/blob/master/SampleApps/WebView2APISample/README.md "WebView2 API Sample - MicrosoftEdge/WebView2Samples | GitHub"  
[GithubMicrosoftedgeWebview2samplesGettingStartedGuide]: https://github.com/MicrosoftEdge/WebView2Samples#1-getting-started-guide "WebView2 Samples - MicrosoftEdge/WebView2Samples | GitHub"  

[GithubMicrosoftWilMain]: https://github.com/Microsoft/wil "Windows Implementation Libraries (WIL) - microsoft/wil | GitHub"  

[MicrosoftedgeinsiderDownload]: https://www.microsoftedgeinsider.com/download "Download Microsoft Edge Insider Channels"  

[MicrosoftVisualstudioMain]: https://visualstudio.microsoft.com "Visual Studio"  
