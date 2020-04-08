---
description: Host web content in your Win32 app with the Microsoft Edge WebView 2 control
title: Microsoft Edge WebView 2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/07/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---

# Getting Started With WebView2 (Developer Preview)  

This walkthrough goes over the commonly used functionalities of [WebView2 (developer preview)][HostingWebview2] and gets you started on creating your first WebView2 app.  Visit [API reference][HostingWebview2Reference] to learn more about individual APIs.  

## Prerequisites  

*   [Microsoft Edge (Chromium)][MicrosoftEdgeInsiderDownload] installed on supported OS \(currently Windows 10, Windows 8.1, and Windows 7\).  
    
    > [!IMPORTANT]
    > You should use the Canary channel and the minimum required version is 82.0.430.0.  
    
*   [Visual Studio][MicrosoftVisualStudio] 2015 or later with C++ support installed.  
    
## Step 1 - Create a single window win32 app  

You start with a basic desktop project containing a single main window.  As this is not the main focus of this walkthrough, you simply use modified sample code from [Walkthrough: Create a traditional Windows Desktop application (C++)][CppWindowsWalkthroughCreatingDesktopApplicationsVs2019].  [Download the modified sample][GithubMicrosoftEdgeWebview2SamplesGettingStartedGuide] to get started.  

Open `WebView2GettingStarted.sln` in Visual Studio.  If you are using an older version of Visual Studio, right-click on the **WebView2GettingStarted** project and click **Properties**.  Under **Configuration Properties** > **General**, modify **Windows SDK Version** and **Platform Toolset** to use the Win10 SDK and VS toolset available to you.  

![toolVersion][ImageToolVersion]  

Visual Studio may show some errors due to missing WebView2 header file, which should go away after [Step 2](#step-2---install-webview2-sdk) is completed.  

## Step 2 - Install WebView2 SDK  

Add the WebView2 SDK into the project.  For the developer preview, you may install the Win32 SDK via Nuget.  

1.  Right-click the project and click **Manage Nuget Packages**.  

    ![manageNugetPackages][ImageManageNugetPackage]  

2.  Enter `Microsoft.Windows.ImplementationLibrary` in the search bar, click **Microsoft.Windows.ImplementationLibrary** from the results, and click **Install** in the right hand side window and install the latest SDK.  Nuget downloads the SDK to your machine.  While you use [Windows Implementation Library][GithubMicrosoftWil] and [Windows Runtime C++ Template Library][CppCppcxWrlWindowsRuntimesTemplateLibraryVs2019] to make working with COM easier in this walkthrough, the libraries are completely optional.  

    ![nuget][ImageNugetWil]  

3.  Enter `Microsoft.Web.WebView2` in the search bar, click **Microsoft.Web.WebView2** from the results, and click **Install** in the right-hand side window and install the latest SDK.  Nuget downloads the SDK to your machine.  

    ![nuget][ImageNuget]  

4.  Include the WebView2 header.  In `HelloWebView.cpp`, add `#include "WebView2.h"` below the lines of `#include` statements.  

    ```cpp
    ...
    #include <wrl.h>
    #include <wil/com.h>
    // include WebView2 header
    #include "WebView2.h"
    ```

You are all set to use and build against the WebView2 API.  Press `F5` to build and run the sample app.  You should see an app displaying an empty window.  

![emptyApp][ImageEmptyApp]  

## Step 3 - Create a single WebView within the parent window  

Add a WebView to the main window.  You use `CreateCoreWebView2Environment` to set up the environment and locate the Microsoft Edge (Chromium) browser powering the control.  You may use `CreateCoreWebView2EnvironmentWithDetails` if you want to specify browser location, user folder, browser flags, etc., instead of using the default setting.  Upon the completion of `CreateCoreWebView2Environment`, you are able to call `ICoreWebView2Environment::CreateCoreWebView2Host` inside the `ICoreWebView2CreateCoreWebView2EnvironmentCompletedHandler` callback and call `ICoreWebView2Host::get_CoreWebView2` to get the associated WebView.  

In the callback, set a few settings, resize the WebView to take 100% of the parent window, and navigate to Bing.  

Copy the following code to **HelloWebView.cpp** between `// <-- WebView2 sample code starts here -->` and `// <-- WebView2 sample code ends here -->`.  

```cpp
// Step 3 - Create a single WebView within the parent window
// Locate the browser and set up the environment for WebView
CreateCoreWebView2EnvironmentWithDetails(nullptr, nullptr, nullptr,
    Callback<ICoreWebView2CreateCoreWebView2EnvironmentCompletedHandler>(
        [hWnd](HRESULT result, ICoreWebView2Environment* env) -> HRESULT {

            // Create a CoreWebView2Host and get the associated CoreWebView2 whose parent is the main window hWnd
            env->CreateCoreWebView2Host(hWnd, Callback<ICoreWebView2CreateCoreWebView2HostCompletedHandler>(
                [hWnd](HRESULT result, ICoreWebView2Host* host) -> HRESULT {
                if (host != nullptr) {
                    webviewHost = host;
                    webviewHost->get_CoreWebView2(&webviewWindow);
                }

                // Add a few settings for the webview
                // this is a redundant demo step since each has the default settings value
                ICoreWebView2Settings* Settings;
                webviewWindow->get_Settings(&Settings);
                Settings->put_IsScriptEnabled(TRUE);
                Settings->put_AreDefaultScriptDialogsEnabled(TRUE);
                Settings->put_IsWebMessageEnabled(TRUE);

                // Resize WebView to fit the bounds of the parent window
                RECT bounds;
                GetClientRect(hWnd, &bounds);
                webviewHost->put_Bounds(bounds);

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

Press `F5` to build and run the app.  Now you have a WebView window displaying Bing.  

![bingWindow][ImageBingWindow]  

## Step 4 - Navigation events  

You navigated to URL using `ICoreWebView2::Navigate` in [Step 3](#step-3---create-a-single-webview-within-the-parent-window).  During navigation, WebView fires a sequence of events that the host is able to listen to in the following order: `NavigationStarting`, `SourceChanged`, `ContentLoading`, `HistoryChanged`, and then `NavigationCompleted`.  To learn more, see [Navigation events][HostingWebview2ReferenceICoreWebView2NavigationEvents].  

![navigationEvents][ImageNavigationEvents]  

In error cases there may or may not be `SourceChanged`, `ContentLoading`, or `HistoryChanged` events based upon if the navigation continues to an error page.  In case of an HTTP redirect, there are multiple `NavigationStarting` events in a row.  

As an example of utilizing those events, register a handler for `NavigationStarting` to cancel any non-https requests.  Copy the following code to `HelloWebView.cpp` below the line that contains `// Step 4 - Navigation events`.  

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

Now your app is not able to navigate to any non-https sites.  You may use similar mechanism to accomplish other tasks, such as restricting navigation to within your own domain.  

## Step 5 - Scripting  

The hosting app is able to inject JavaScript into WebView.  You may task WebView to run arbitrary JavaScript or add initialization scripts.  Added initialization scripts apply to all future top level document and child frame navigation until removed, and run after the global object has been created and before any other script included by the HTML document is run.  

Copy the following code below that line that contains  `// Step 5 - Scripting`.  

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

Now WebView always freezes the `Object` object and returns the page document once.  

> [!NOTE]
> These script injection APIs \(and some other WebView2 APIs\) are asynchronous, you should use callbacks if code must be run in a particular order.  

## Step 6 - Communication between host and web content  

The host and the web content are able to communicate with each other through `postMessage`.  The web content running within a WebView may post to the host through `window.chrome.webview.postMessage`, and the message would be handled by any registered `ICoreWebView2WebMessageReceivedEventHandler` on the host.  Likewise, the host may message the web content through `ICoreWebView2::PostWebMessageAsString` or `ICoreWebView2::PostWebMessageAsJSON`, which would be caught by handlers added from `window.chrome.webview.addEventListener`.  The communication mechanism allows the web content to utilize native capabilities by passing messages to ask the host to call native APIs.  

As an example to understand the mechanism, try printing out the document URL in WebView with a little detour.  

1.  The host registers a handler to return received message back to the web content.  
2.  The host injects a script to the web content that registers a handler to print message from the host.  
3.  The host injects a script to the web content that posts the URL to the host.  
4.  The handler of the host is triggered and returns the message \(the URL\) to the web content.  
5.  The handler of the web content is triggered and prints the message from the host \(the URL\).  

Copy the following code below the line that contains `// Step 6 - Communication between host and web content`.  

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

Press `F5` to build and run the app.  You should see URLs before navigating to pages.  

![showURL][ImageShowUrl]

Congratulations, you just built your first WebView2 app!  

## Next Steps  

There are plenty of WebView2 functionalities that are not covered in this walkthrough.  

To learn more:  
*   Checkout [WebView2 API Sample][GithubMicrosoftEdgeWebView2SamplesWebView2APISample] for a comprehensive example of the SDKs capabilities.  
*   Checkout [WebView2Browser][GithubMicrosoftEdgeWebView2Browser] an application built using WebView2.  
*   Please explore [API reference][HostingWebview2Reference] for detailed information about the API.  

## Feedback  

Help build a richer WebView2 experience by sharing your feedback!  Visit the [feedback repo][GithubMicrosoftEdgeWebViewFeedback] to submit feature requests or bug reports or search for known issues.  

<!-- image links -->  

[ImageToolVersion]: media/tool-version.png "Tool Version"  
[ImageManageNugetPackage]: media/manage-nuget-packages.png "Manage Nuget packages"  
[ImageBingWindow]: media/bing-window.png "Bing Window"  
[ImageNugetWil]: media/nuget-wil.png "Nuget WIL"  
[ImageNuget]: media/nuget.png "Nuget"  
[ImageEmptyApp]: media/empty-app.png "Empty App"  
[ImageNavigationEvents]: media/navigation-events.png "Navigation Events"  
[ImageShowUrl]: media/show-url.png "Show URL"  

<!-- links -->  

[HostingWebview2Reference]: reference-webview2.md "Reference (WebView2)"  
[HostingWebview2ReferenceICoreWebView2NavigationEvents]: reference/ICoreWebView2.md#navigation-events "Navigation events - interface ICoreWebView2"  

[HostingWebview2]: ../webview2.md "Microsoft Edge WebView2 (developer preview)"  

[CppCppcxWrlWindowsRuntimesTemplateLibraryVs2019]: /cpp/cppcx/wrl/windows-runtime-cpp-template-library-wrl?view=vs-2019 "Windows Runtime C++ Template Library (WRL)"  

[CppWindowsWalkthroughCreatingDesktopApplicationsVs2019]: /cpp/windows/walkthrough-creating-windows-desktop-applications-cpp?view=vs-2019 "Walkthrough: Create a traditional Windows Desktop application (C++)"  

[MicrosoftEdgeInsider]: https://www.microsoftedgeinsider.com "Microsoft Edge Insider"  
[MicrosoftEdgeInsiderDownload]: https://www.microsoftedgeinsider.com/download "Microsoft Edge Insider Channels"  

[MicrosoftVisualStudio]: https://visualstudio.microsoft.com "Visual Studio"  

[GithubMicrosoftEdgeWebViewFeedback]: https://github.com/MicrosoftEdge/WebViewFeedback "MicrosoftEdge/WebViewFeedback | GitHub"  

[GithubMicrosoftEdgeWebView2Browser]: https://github.com/MicrosoftEdge/WebView2Browser "MicrosoftEdge/WebView2Browser | GitHub"  

[GithubMicrosoftEdgeWebview2SamplesGettingStartedGuide]: https://github.com/MicrosoftEdge/WebView2Samples#1-getting-started-guide "1.  Getting Started Guide - WebView2 Samples | GitHub"  
[GithubMicrosoftEdgeWebView2SamplesWebView2APISample]: https://github.com/MicrosoftEdge/WebView2Samples/tree/master/WebView2APISample "WebView2Sample - MicrosoftEdge/WebView2Samples | GitHub"  

[GithubMicrosoftWil]: https://github.com/Microsoft/wil "microsoft/wil | GitHub"  

  
