---
description: Embed web technologies (HTML, CSS, and JavaScript) in your native applications with the Microsoft Edge WebView2 control
title: Microsoft.Web.WebView2.Core.CoreWebView2EnvironmentOptions
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/20/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: Microsoft.Web.WebView2, Core, webview2, webview, dotnet, wpf, winforms, app, edge, CoreWebView2, CoreWebView2Controller, browser control, edge html, Microsoft.Web.WebView2.Core.CoreWebView2EnvironmentOptions
---

# Microsoft.Web.WebView2.Core.CoreWebView2EnvironmentOptions class 

Namespace: Microsoft.Web.WebView2.Core\
Assembly: Microsoft.Web.WebView2.Core.dll

Options used to create WebView2 Environment.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[AdditionalBrowserArguments](#additionalbrowserarguments) | AdditionalBrowserArguments can be specified to change the behavior of the WebView.
[IsSingleSignOnUsingOSPrimaryAccountEnabled](#issinglesignonusingosprimaryaccountenabled) | The IsSingleSignOnUsingOSPrimaryAccountEnabled property is used to enable single sign on with Azure Active Directory (AAD) resources inside WebView using the logged in Windows account and single sign on with web sites using Microsoft account associated with the login in Windows account.
[Language](#language) | The default language that WebView will run with.
[TargetCompatibleBrowserVersion](#targetcompatiblebrowserversion) | The version of the Edge WebView2 Runtime binaries required to be compatible with the calling application.
[CoreWebView2EnvironmentOptions](#corewebview2environmentoptions) | Initializes a new instance of the CoreWebView2EnvironmentOptions class.

A default implementation is provided in WebView2EnvironmentOptions.h.

## Members

#### AdditionalBrowserArguments 

AdditionalBrowserArguments can be specified to change the behavior of the WebView.

> public string [AdditionalBrowserArguments](#additionalbrowserarguments)

These will be passed to the browser process as part of the command line. See [Run Chromium with Flags](https://aka.ms/RunChromiumWithFlags) for more information about command line switches to browser process. If the app is launched with a command line switch `--edge-webview-switches=xxx` the value of that switch (xxx in the above example) will also be appended to the browser process command line. Certain switches like `--user-data-dir` are internal and important to WebView. Those switches will be ignored even if specified. If the same switches are specified multiple times, the last one wins. There is no attempt to merge the different values of the same switch, except for disabled and enabled features. The features specified by `--enable-features` and `--disable-features` will be merged with simple logic: the features will be the union of the specified features and built-in features, and if a feature is disabled, it will be removed from the enabled features list. App process's command line `--edge-webview-switches` value are processed after the additionalBrowserArguments parameter is processed. Certain features are disabled internally and can't be enabled. If parsing failed for the specified switches, they will be ignored. Default is to run browser process with no extra flags.

#### IsSingleSignOnUsingOSPrimaryAccountEnabled 

[!INCLUDE [prerelease-note](../../includes/prerelease-note.md)]

The IsSingleSignOnUsingOSPrimaryAccountEnabled property is used to enable single sign on with Azure Active Directory (AAD) resources inside WebView using the logged in Windows account and single sign on with web sites using Microsoft account associated with the login in Windows account.

> public bool [IsSingleSignOnUsingOSPrimaryAccountEnabled](#issinglesignonusingosprimaryaccountenabled)

Default is disabled. Universal Windows Platform apps must also declare enterpriseCloudSSO [restricted capability](https://docs.microsoft.com/windows/uwp/packaging/app-capability-declarations#restricted-capabilities) for the single sign on to work.

#### Language 

The default language that WebView will run with.

> public string [Language](#language)

It applies to browser UIs like context menu and dialogs. It also applies to the accept-languages HTTP header that WebView sends to web sites. It is in the format of `language[-country]` where `language` is the 2 letter code from ISO 639 and `country` is the 2 letter code from ISO 3166.

#### TargetCompatibleBrowserVersion 

The version of the Edge WebView2 Runtime binaries required to be compatible with the calling application.

> public string [TargetCompatibleBrowserVersion](#targetcompatiblebrowserversion)

This defaults to the Edge WebView2 Runtime version that corresponds with the version of the SDK the application is using. The format of this value is the same as the format of the BrowserVersionString property and other BrowserVersion values. Only the version part of the BrowserVersion value is respected. The channel suffix, if it exists, is ignored. The version of the Edge WebView2 Runtime binaries actually used may be different from the specified TargetCompatibleBrowserVersion. They are only guaranteed to be compatible. You can check the actual version on the BrowserVersionString property on the CoreWebView2Environment.

#### CoreWebView2EnvironmentOptions 

Initializes a new instance of the CoreWebView2EnvironmentOptions class.

> public [CoreWebView2EnvironmentOptions](#corewebview2environmentoptions)(string additionalBrowserArguments, string language, string targetCompatibleBrowserVersion)

##### Parameters
* `additionalBrowserArguments` AdditionalBrowserArguments can be specified to change the behavior of the WebView. 

* `language` The default language that WebView will run with. 

* `targetCompatibleBrowserVersion` The version of the Edge WebView2 Runtime binaries required to be compatible with the calling application.

