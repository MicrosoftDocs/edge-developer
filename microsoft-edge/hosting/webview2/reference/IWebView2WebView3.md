---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: Microsoft Edge WebView2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 10/25/2019
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge
---

# interface IWebView2WebView3 

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

You can QueryInterface for this interface from the object that implements [IWebView2WebView](IWebView2WebView.md#interface_i_web_view2_web_view). See the [IWebView2WebView](IWebView2WebView.md#interface_i_web_view2_web_view) interface for more details.

## Members

#### Stop 

Stop all navigations and pending resource fetches.

> public HRESULT [Stop](#interface_i_web_view2_web_view3_1ac013fe581ffa0fcaae4f01194291299b)()

#### add_NewWindowRequested 

Add an event handler for the NewWindowRequested event.

> public HRESULT [add_NewWindowRequested](#interface_i_web_view2_web_view3_1a4ad3cb3ffb156d59ff18316c8d7532d0)([IWebView2NewWindowRequestedEventHandler](IWebView2NewWindowRequestedEventHandler.md#interface_i_web_view2_new_window_requested_event_handler) * eventHandler,EventRegistrationToken * token)

Fires when content inside the WebView requested to open a new window, such as through window.open. The app can pass a target webview that will be considered the opened window.

```cpp
    // Register a handler for the NewWindowRequested event.
    // This handler will defer the event, create a new app window, and then once the
    // new window is ready, it'll provide that new window's WebView as the response to
    // the request.
    CHECK_FAILURE(m_webView->add_NewWindowRequested(
        Callback<IWebView2NewWindowRequestedEventHandler>([this](IWebView2WebView *sender,
                                                                 IWebView2NewWindowRequestedEventArgs *args) {
            wil::com_ptr<IWebView2Deferral> deferral;
            CHECK_FAILURE(args->GetDeferral(&deferral));

            AppWindow *newAppWindow = AppWindow::CreateNewInstance(m_hInst, m_nShow, L"");
            newAppWindow->m_onWebViewFirstInitialized = [args, deferral, newAppWindow]() {
                CHECK_FAILURE(args->put_NewWindow(newAppWindow->m_webView.get()));
                CHECK_FAILURE(args->put_Handled(TRUE));
                CHECK_FAILURE(deferral->Complete());
            };

            return S_OK;
        }).Get(),
        &m_newWindowRequestedToken));
```

#### remove_NewWindowRequested 

Remove an event handler previously added with add_NewWindowRequested.

> public HRESULT [remove_NewWindowRequested](#interface_i_web_view2_web_view3_1ac8d3baaacc0c162f3158a466e5387336)(EventRegistrationToken token)

#### add_DocumentTitleChanged 

Add an event handler for the DocumentTitleChanged event.

> public HRESULT [add_DocumentTitleChanged](#interface_i_web_view2_web_view3_1abade2c2fb39bdd9fa50b03b9d2e75271)([IWebView2DocumentTitleChangedEventHandler](IWebView2DocumentTitleChangedEventHandler.md#interface_i_web_view2_document_title_changed_event_handler) * eventHandler,EventRegistrationToken * token)

The event fires when the DocumentTitle property of the WebView changes and may fire before or after the NavigationCompleted event.

```cpp
    // Register a handler for the DocumentTitleChanged event.
    // This handler just announces the new title on the window's title bar.
    CHECK_FAILURE(m_webView->add_DocumentTitleChanged(
        Callback<IWebView2DocumentTitleChangedEventHandler>(
            [this](IWebView2WebView3* sender, IUnknown* args) -> HRESULT
            {
                wil::unique_cotaskmem_string title;
                CHECK_FAILURE(sender->get_DocumentTitle(&title));
                SetWindowText(m_mainWindow, title.get());
                return S_OK;
            }).Get(), &m_documentTitleChangedToken));
```

#### remove_DocumentTitleChanged 

Remove an event handler previously added with add_DocumentTitleChanged.

> public HRESULT [remove_DocumentTitleChanged](#interface_i_web_view2_web_view3_1a4dc83c7922145efea43de4c2b9a9d31c)(EventRegistrationToken token)

#### get_DocumentTitle 

The title for the current top level document.

> public HRESULT [get_DocumentTitle](#interface_i_web_view2_web_view3_1adcba38a3096b8abbd8be3959c119d4f1)(LPWSTR * title)

If the document has no explicit title or is otherwise empty, a default that may or may not match the URI of the document will be used.

