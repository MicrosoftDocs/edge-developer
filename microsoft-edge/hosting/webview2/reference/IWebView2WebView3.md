---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: Microsoft Edge WebView2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/11/2019
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

See the [IWebView2WebView](IWebView2WebView.md#iwebview2webview) interface for more details.

## Members

#### Stop 

Stop all navigations and pending resource fetches.

> public HRESULT [Stop](#stop)()

#### add_NewWindowRequested 

Add an event handler for the NewWindowRequested event.

> public HRESULT [add_NewWindowRequested](#add_newwindowrequested)([IWebView2NewWindowRequestedEventHandler](IWebView2NewWindowRequestedEventHandler.md#iwebview2newwindowrequestedeventhandler) * eventHandler,EventRegistrationToken * token)

Fires when content inside the WebView requested to open a new window, such as through window.open. The app can pass a target webview that will be considered the opened window.

```cpp
    // Register a handler for the NewWindowRequested event.
    // This handler will defer the event, create a new app window, and then once the
    // new window is ready, it'll provide that new window's WebView as the response to
    // the request.
    wil::com_ptr<IWebView2WebView3> webview3 = m_webView.try_query<IWebView2WebView3>();
    CHECK_FAILURE(webview3->add_NewWindowRequested(
      Callback<IWebView2NewWindowRequestedEventHandler>(
        [this](IWebView2WebView* sender,
          IWebView2NewWindowRequestedEventArgs* args)
    {
      wil::com_ptr<IWebView2Deferral> deferral;
      CHECK_FAILURE(args->GetDeferral(&deferral));

      AppWindow* newAppWindow = AppWindow::CreateNewInstance(
        m_hInst, m_nShow, true);
      newAppWindow->m_onWebViewFirstInitialized =
        [args, deferral, newAppWindow]()
      {
        CHECK_FAILURE(args->put_NewWindow(newAppWindow->m_webView.get()));
        CHECK_FAILURE(args->put_Handled(TRUE));
        CHECK_FAILURE(deferral->Complete());
      };

      return S_OK;
    }).Get(), &m_newWindowRequestedToken));
```

#### remove_NewWindowRequested 

Remove an event handler previously added with add_NewWindowRequested.

> public HRESULT [remove_NewWindowRequested](#remove_newwindowrequested)(EventRegistrationToken token)

#### add_DocumentTitleChanged 

Add an event handler for the DocumentTitleChanged event.

> public HRESULT [add_DocumentTitleChanged](#add_documenttitlechanged)([IWebView2DocumentTitleChangedEventHandler](IWebView2DocumentTitleChangedEventHandler.md#iwebview2documenttitlechangedeventhandler) * eventHandler,EventRegistrationToken * token)

The event fires when the DocumentTitle property of the WebView changes.

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

> public HRESULT [remove_DocumentTitleChanged](#remove_documenttitlechanged)(EventRegistrationToken token)

#### get_DocumentTitle 

The title for the current top level document.

> public HRESULT [get_DocumentTitle](#get_documenttitle)(LPWSTR * title)

If the document has no explicit title or is otherwise empty, then the URI of the top level document is used.

