---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: Microsoft Edge WebView2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 10/18/2019
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge
---

# interface IWebView2Environment 

```
interface IWebView2Environment
  : public IUnknown
```

This represents the WebView2 Environment.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[CreateWebView](#createwebview) | Asynchronously create a new [IWebView2WebView](IWebView2WebView.md#iwebview2webview).
[CreateWebResourceResponse](#createwebresourceresponse) | Create a new web resource response object.

WebViews created from an environment run on the Browser process specified with environment parameters and objects created from an environment should be used in the same environment. Using it in different environments are not guaranteed to be compatible and may fail.

## Members

#### CreateWebView 

Asynchronously create a new [IWebView2WebView](IWebView2WebView.md#iwebview2webview).

> public HRESULT [CreateWebView](#createwebview)(HWND parentWindow,[IWebView2CreateWebViewCompletedHandler](IWebView2CreateWebViewCompletedHandler.md#iwebview2createwebviewcompletedhandler) * handler)

parentWindow is the HWND in which the WebView should be displayed and from which receive input. The WebView will add a child window to the provided window during WebView creation. Z-order and other things impacted by sibling window order will be affected accordingly.

It is recommended that the application set Application User Model ID for the process or the application window. If none is set, during WebView creation a generated Application User Model ID is set to root window of parentWindow. 
```cpp
// Create or recreate the WebView and its environment.
void AppWindow::InitializeWebView(InitializeWebViewFlags webviewInitFlags)
{
    m_lastUsedInitFlags = webviewInitFlags;
    // To ensure browser switches get applied correctly, we need to close
    // the existing WebView. This will result in a new browser process
    // getting created which will apply the browser switches.
    CloseWebView();

    bool localEdgeExists = false;
    {
        std::ifstream msEdgeExe (GetLocalPath(L"msedge.exe"));
        localEdgeExists = msEdgeExe.is_open();
    }
    LPCWSTR subFolder = (webviewInitFlags & kUseInstalledBrowser || !localEdgeExists)
        ? nullptr
        : L".";
    LPCWSTR additionalBrowserSwitches = nullptr;
    HRESULT hr = CreateWebView2EnvironmentWithDetails(
        subFolder, nullptr,
        additionalBrowserSwitches,
        Callback<
        IWebView2CreateWebView2EnvironmentCompletedHandler>(
            [this](
                HRESULT result,
                IWebView2Environment* webviewEnvironment) -> HRESULT
    {
        if (SUCCEEDED(result))
        {
            webviewEnvironment->QueryInterface(IID_PPV_ARGS(&m_webViewEnvironment));
            CHECK_FAILURE(m_webViewEnvironment->CreateWebView(
                m_mainWindow, Callback<IWebView2CreateWebViewCompletedHandler>(
                    this, &AppWindow::OnCreateWebViewCompleted).Get()));
        }
        else
        {
            ShowFailure(result, L"Failed to create webview environment");
        }
        return S_OK;
    }).Get());
    CHECK_FAILURE(hr);
}
```
 It is recommended that the application handles restart manager messages so that it can be restarted gracefully in the case when the app is using Edge for webview from a certain installation and that installation is being uninstalled. For example, if a user installs Edge from Dev channel and opts to use Edge from that channel for testing the app, and then uninstalls Edge from that channel without closing the app, the app will be restarted to allow uninstallation of the dev channel to succeed. 
```cpp
    case WM_QUERYENDSESSION:
    {
        // yes, we can shut down
        *handled = true;
        // Register how we might be restarted
        RegisterApplicationRestart(
            L"--restore", RESTART_NO_CRASH | RESTART_NO_HANG);
        return TRUE;
    } break;
    case WM_ENDSESSION:
    {
        if (wParam == TRUE)
        {
            *handled = true;
            // save app state and exit.
            PostQuitMessage(0);
        }
    } break;
```

#### CreateWebResourceResponse 

Create a new web resource response object.

> public HRESULT [CreateWebResourceResponse](#createwebresourceresponse)(IStream * content,int statusCode,LPCWSTR reasonPhrase,LPCWSTR headers,[IWebView2WebResourceResponse](IWebView2WebResourceResponse.md#iwebview2webresourceresponse) ** response)

The headers is the raw response header string delimited by newline. It's also possible to create this object with empty headers string and then use the [IWebView2HttpResponseHeaders](IWebView2HttpResponseHeaders.md#iwebview2httpresponseheaders) to construct the headers line by line. For information on other parameters see [IWebView2WebResourceResponse](IWebView2WebResourceResponse.md#iwebview2webresourceresponse).

```cpp
        if (m_blockImages)
        {
            // Register a handler for the WebResourceRequested event.
            // This handler blocks all resources that are in an image context, such
            // as <img> elements and CSS background-image properties.
            PCWSTR matchAllUris[] = { L"*" };
            WEBVIEW2_WEB_RESOURCE_CONTEXT imagesFilter[] = {
                WEBVIEW2_WEB_RESOURCE_CONTEXT_IMAGE };
            CHECK_FAILURE(m_webView->add_WebResourceRequested(
                matchAllUris, imagesFilter, 1,
                Callback<IWebView2WebResourceRequestedEventHandler>(
                    [this](IWebView2WebView* sender,
                           IWebView2WebResourceRequestedEventArgs* args)
            {
                // Override the response with an empty one to block the image.
                // If put_Response is not called, the request will continue as normal.
                wil::com_ptr<IWebView2WebResourceResponse> response;
                CHECK_FAILURE(m_webViewEnvironment->CreateWebResourceResponse(
                    nullptr, 200, L"OK", L"",
                    &response));
                CHECK_FAILURE(args->put_Response(response.get()));
                return S_OK;
            }).Get(), &m_webResourceRequestedTokenForImageBlocking));
        }
        else
        {
            CHECK_FAILURE(m_webView->remove_WebResourceRequested(
                m_webResourceRequestedTokenForImageBlocking));
        }
```

