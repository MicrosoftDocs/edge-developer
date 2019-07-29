---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: Microsoft Edge WebView2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/29/2019
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
[CreateWebView](#createwebview) | Asynchronously create a new [IWebView2WebView](IWebView2WebView.md#interface_i_web_view2_web_view).
[CreateWebResourceResponse](#createwebresourceresponse) | Create a new web resource response object.

WebViews created from an environment run on the Browser process specified with environment parameters and objects created from an environment should be used in the same environment. Using it in different environments are not guaranteed to be compatible and may fail.

## Members

#### CreateWebView 

Asynchronously create a new [IWebView2WebView](IWebView2WebView.md#interface_i_web_view2_web_view).

> public HRESULT [CreateWebView](#interface_i_web_view2_environment_1abe8324e33f071ffb07a419d8664b9b3c)(HWND parentWindow,[IWebView2CreateWebViewCompletedHandler](IWebView2CreateWebViewCompletedHandler.md#interface_i_web_view2_create_web_view_completed_handler) * handler)

parentWindow is the HWND in which the WebView should be displayed and from which receive input. The WebView will add a child window to the provided window during WebView creation. Z-order and other things impacted by sibling window order will be affected accordingly.

It is recommended that the application set Application User Model ID for the process or the application window. If none is set, during WebView creation a generated Application User Model ID is set to root window of parentWindow. 
```cpp

        Microsoft::WRL::ComPtr<IWebView2Environment> webviewEnvironment;

        // Use CreateWebView2Environment to create a default WebView environment
        // using installed version of Edge
        RETURN_IF_FAILED(CreateWebView2Environment(
            Microsoft::WRL::Callback<
            IWebView2CreateWebView2EnvironmentCompletedHandler>(
                [this](HRESULT result,
                    IWebView2Environment* webviewEnvironment) -> HRESULT
        {
            RETURN_IF_FAILED(result);
            RETURN_IF_FAILED(webviewEnvironment->CreateWebView(
                m_hwnd,
                Microsoft::WRL::Callback<
                IWebView2CreateWebViewCompletedHandler>(
                    this, &ScenarioProcess::CreateWebViewCompletedHandler)
                .Get()));
            return S_OK;
        })
            .Get()));

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

> public HRESULT [CreateWebResourceResponse](#interface_i_web_view2_environment_1aa1bda3e667feb52bfc218a4a54273439)(IStream * content,int statusCode,LPCWSTR reasonPhrase,LPCWSTR headers,[IWebView2WebResourceResponse](IWebView2WebResourceResponse.md#interface_i_web_view2_web_resource_response) ** response)

The headers is the raw response header string delimited by newline. It's also possible to create this object with empty headers string and then use the [IWebView2HttpResponseHeaders](IWebView2HttpResponseHeaders.md#interface_i_web_view2_http_response_headers) to construct the headers line by line. For information on other parameters see [IWebView2WebResourceResponse](IWebView2WebResourceResponse.md#interface_i_web_view2_web_resource_response).

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

