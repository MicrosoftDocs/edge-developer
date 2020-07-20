---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: 0.8.355 - WebView2 Win32 C++ IWebView2Environment3
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/20/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge
---

# 0.8.355 - interface IWebView2Environment3 

[!INCLUDE [deprecation-note](../../includes/deprecation-note.md)]

```
interface IWebView2Environment3
  : public IWebView2Environment2
```

Additional functionality implemented by the Environment object.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[add_NewVersionAvailable](#add_newversionavailable) | The NewVersionAvailable event fires when a newer version of the Edge browser is installed and available to use via WebView2.
[remove_NewVersionAvailable](#remove_newversionavailable) | Remove an event handler previously added with add_NewVersionAvailable.

See the [IWebView2Environment](IWebView2Environment.md) interface for more details. You can QueryInterface for this interface from the object that implements [IWebView2Environment](IWebView2Environment.md).

## Members

#### add_NewVersionAvailable 

The NewVersionAvailable event fires when a newer version of the Edge browser is installed and available to use via WebView2.

> public HRESULT [add_NewVersionAvailable](#add_newversionavailable)([IWebView2NewVersionAvailableEventHandler](IWebView2NewVersionAvailableEventHandler.md) * eventHandler,EventRegistrationToken * token)

To use the newer version of the browser you must create a new [IWebView2Environment](IWebView2Environment.md) and [IWebView2WebView](IWebView2WebView.md). Event will only be fired for new version from the same Edge channel that the code is running from. When not running with installed Edge, no event will be fired.

Because a user data folder can only be used by one browser process at a time, if you want to use the same user data folder in the WebViews using the new version of the browser, you must close the [IWebView2Environment](IWebView2Environment.md) and IWebView2WebViews that are using the older version of the browser first. Or simply prompt the user to restart the app.

```cpp
    // After the environment is successfully created,
    // register a handler for the NewVersionAvailable event.
    // This handler tells when there is a new Edge version available on the machine.
    CHECK_FAILURE(m_webViewEnvironment->add_NewVersionAvailable(
        Callback<IWebView2NewVersionAvailableEventHandler>(
            [this](IWebView2Environment* sender, IWebView2NewVersionAvailableEventArgs* args)
                -> HRESULT {
                // Get the version value from args
                wil::unique_cotaskmem_string newVersion;
                CHECK_FAILURE(args->get_NewVersion(&newVersion));
                std::wstring message = L"We detected there is a new version for the browser.";
                message += L"\n\nVersion number: ";
                message += newVersion.get();
                message += L"\n\n";
                if (m_webView)
                {
                    message += L"Do you want to restart the app? \n\n";
                    message += L"Click No if you only want to re-create the webviews. \n";
                    message += L"Click Cancel for no action. \n";
                }
                int response = MessageBox(
                    m_mainWindow, message.c_str(), L"New available version",
                    m_webView ? MB_YESNOCANCEL : MB_OK);

                if (response == IDYES)
                {
                    RestartApp();
                }
                else if (response == IDNO)
                {
                    ReinitializeWebViewWithNewBrowser();
                }
                else
                {
                    // do nothing
                }

                return S_OK;
            })
            .Get(),
        nullptr));
```

#### remove_NewVersionAvailable 

Remove an event handler previously added with add_NewVersionAvailable.

> public HRESULT [remove_NewVersionAvailable](#remove_newversionavailable)(EventRegistrationToken token)

