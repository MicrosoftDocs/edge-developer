---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: 0.8.355 - WebView2 Win32 C++ IWebView2WebView3
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/20/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge
---

# 0.8.355 - interface IWebView2WebView3 

[!INCLUDE [deprecation-note](../../includes/deprecation-note.md)]

```
interface IWebView2WebView3
  : public IWebView2WebView
```

Additional functionality implemented by the primary WebView object.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[Stop](#stop) | Stop all navigations and pending resource fetches.
[add_NewWindowRequested](#add_newwindowrequested) | Add an event handler for the NewWindowRequested event.
[remove_NewWindowRequested](#remove_newwindowrequested) | Remove an event handler previously added with add_NewWindowRequested.
[add_DocumentTitleChanged](#add_documenttitlechanged) | Add an event handler for the DocumentTitleChanged event.
[remove_DocumentTitleChanged](#remove_documenttitlechanged) | Remove an event handler previously added with add_DocumentTitleChanged.
[get_DocumentTitle](#get_documenttitle) | The title for the current top level document.

You can QueryInterface for this interface from the object that implements [IWebView2WebView](IWebView2WebView.md). See the [IWebView2WebView](IWebView2WebView.md) interface for more details.

## Members

#### Stop 

Stop all navigations and pending resource fetches.

> public HRESULT [Stop](#stop)()

#### add_NewWindowRequested 

Add an event handler for the NewWindowRequested event.

> public HRESULT [add_NewWindowRequested](#add_newwindowrequested)([IWebView2NewWindowRequestedEventHandler](IWebView2NewWindowRequestedEventHandler.md) * eventHandler,EventRegistrationToken * token)

Fires when content inside the WebView requested to open a new window, such as through window.open. The app can pass a target webview that will be considered the opened window.

```cpp
    // Register a handler for the NewWindowRequested event.
    // This handler will defer the event, create a new app window, and then once the
    // new window is ready, it'll provide that new window's WebView as the response to
    // the request.
    CHECK_FAILURE(m_webView->add_NewWindowRequested(
        Callback<IWebView2NewWindowRequestedEventHandler>(
            [this](IWebView2WebView* sender, IWebView2NewWindowRequestedEventArgs* args) {
                wil::com_ptr<IWebView2Deferral> deferral;
                CHECK_FAILURE(args->GetDeferral(&deferral));

                auto newAppWindow = new AppWindow(L"");
                newAppWindow->m_onWebViewFirstInitialized = [args, deferral, newAppWindow]() {
                    CHECK_FAILURE(args->put_NewWindow(newAppWindow->m_webView.get()));
                    CHECK_FAILURE(args->put_Handled(TRUE));
                    CHECK_FAILURE(deferral->Complete());
                };

                return S_OK;
            })
            .Get(),
        nullptr));
```

#### remove_NewWindowRequested 

Remove an event handler previously added with add_NewWindowRequested.

> public HRESULT [remove_NewWindowRequested](#remove_newwindowrequested)(EventRegistrationToken token)

#### add_DocumentTitleChanged 

Add an event handler for the DocumentTitleChanged event.

> public HRESULT [add_DocumentTitleChanged](#add_documenttitlechanged)([IWebView2DocumentTitleChangedEventHandler](IWebView2DocumentTitleChangedEventHandler.md) * eventHandler,EventRegistrationToken * token)

The event fires when the DocumentTitle property of the WebView changes and may fire before or after the NavigationCompleted event.

```cpp
    // Register a handler for the DocumentTitleChanged event.
    // This handler just announces the new title on the window's title bar.
    CHECK_FAILURE(m_webView->add_DocumentTitleChanged(
        Callback<IWebView2DocumentTitleChangedEventHandler>(
            [this](IWebView2WebView3* sender, IUnknown* args) -> HRESULT {
                wil::unique_cotaskmem_string title;
                CHECK_FAILURE(sender->get_DocumentTitle(&title));
                SetWindowText(m_appWindow->GetMainWindow(), title.get());
                return S_OK;
            })
            .Get(),
        &m_documentTitleChangedToken));
```

#### remove_DocumentTitleChanged 

Remove an event handler previously added with add_DocumentTitleChanged.

> public HRESULT [remove_DocumentTitleChanged](#remove_documenttitlechanged)(EventRegistrationToken token)

#### get_DocumentTitle 

The title for the current top level document.

> public HRESULT [get_DocumentTitle](#get_documenttitle)(LPWSTR * title)

If the document has no explicit title or is otherwise empty, a default that may or may not match the URI of the document will be used.

