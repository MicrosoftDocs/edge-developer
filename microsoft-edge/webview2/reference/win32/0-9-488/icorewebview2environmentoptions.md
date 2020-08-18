---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: 0.9.515 - WebView2 Win32 C++ ICoreWebView2EnvironmentOptions
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/20/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html
---

# 0.9.515 - interface ICoreWebView2EnvironmentOptions 

[!INCLUDE [deprecation-note](../../includes/deprecation-note.md)]

```
interface ICoreWebView2EnvironmentOptions
  : public IUnknown
```

Options used to create WebView2 Environment.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[get_AdditionalBrowserArguments](#get_additionalbrowserarguments) | AdditionalBrowserArguments can be specified to change the behavior of the WebView.
[get_Language](#get_language) | The default language that WebView will run with.
[get_TargetCompatibleBrowserVersion](#get_targetcompatiblebrowserversion) | The version of the Edge WebView2 Runtime binaries required to be compatible with the calling application.
[put_AdditionalBrowserArguments](#put_additionalbrowserarguments) | Set the AdditionalBrowserArguments property.
[put_Language](#put_language) | Set the Language property.
[put_TargetCompatibleBrowserVersion](#put_targetcompatiblebrowserversion) | Set the TargetCompatibleBrowserVersion.

A default implementation is provided in WebView2EnvironmentOptions.h.

```cpp
    auto options = Microsoft::WRL::Make<CoreWebView2EnvironmentOptions>();
    if(!m_language.empty())
        CHECK_FAILURE(options->put_Language(m_language.c_str()));
    HRESULT hr = CreateCoreWebView2EnvironmentWithOptions(
        subFolder, nullptr, options.Get(),
        Callback<ICoreWebView2CreateCoreWebView2EnvironmentCompletedHandler>(
            this, &AppWindow::OnCreateEnvironmentCompleted)
            .Get());
```

## Members

#### get_AdditionalBrowserArguments 

AdditionalBrowserArguments can be specified to change the behavior of the WebView.

> public HRESULT [get_AdditionalBrowserArguments](#get_additionalbrowserarguments)(LPWSTR * value)

These will be passed to the browser process as part of the command line. See [Run Chromium with Flags](https://aka.ms/RunChromiumWithFlags) for more information about command line switches to browser process. If the app is launched with a command line switch `--edge-webview-switches=xxx` the value of that switch (xxx in the above example) will also be appended to the browser process command line. Certain switches like `--user-data-dir` are internal and important to WebView. Those switches will be ignored even if specified. If the same switches are specified multiple times, the last one wins. There is no attempt to merge the different values of the same switch, except for disabled and enabled features. The features specified by `--enable-features` and `--disable-features` will be merged with simple logic: the features will be the union of the specified features and built-in features, and if a feature is disabled, it will be removed from the enabled features list. App process's command line `--edge-webview-switches` value are processed after the additionalBrowserArguments parameter is processed. Certain features are disabled internally and can't be enabled. If parsing failed for the specified switches, they will be ignored. Default is to run browser process with no extra flags.

#### get_Language 

The default language that WebView will run with.

> public HRESULT [get_Language](#get_language)(LPWSTR * value)

It applies to browser UIs like context menu and dialogs. It also applies to the accept-languages HTTP header that WebView sends to web sites. It is in the format of `language[-country]` where `language` is the 2 letter code from ISO 639 and `country` is the 2 letter code from ISO 3166.

#### get_TargetCompatibleBrowserVersion 

The version of the Edge WebView2 Runtime binaries required to be compatible with the calling application.

> public HRESULT [get_TargetCompatibleBrowserVersion](#get_targetcompatiblebrowserversion)(LPWSTR * value)

This defaults to the Edge WebView2 Runtime version that corresponds with the version of the SDK the application is using. The format of this value is the same as the format of the BrowserVersionString property and other BrowserVersion values. Only the version part of the BrowserVersion value is respected. The channel suffix, if it exists, is ignored. The version of the Edge WebView2 Runtime binaries actually used may be different from the specified TargetCompatibleBrowserVersion. They are only guaranteed to be compatible. You can check the actual version on the BrowserVersionString property on the ICoreWebView2Environment.

#### put_AdditionalBrowserArguments 

Set the AdditionalBrowserArguments property.

> public HRESULT [put_AdditionalBrowserArguments](#put_additionalbrowserarguments)(LPCWSTR value)

#### put_Language 

Set the Language property.

> public HRESULT [put_Language](#put_language)(LPCWSTR value)

#### put_TargetCompatibleBrowserVersion 

Set the TargetCompatibleBrowserVersion.

> public HRESULT [put_TargetCompatibleBrowserVersion](#put_targetcompatiblebrowserversion)(LPCWSTR value)

