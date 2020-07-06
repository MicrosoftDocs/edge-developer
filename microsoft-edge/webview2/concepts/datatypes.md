---
description: Data types
title: Data types
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/06/2020
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, wpf apps, wpf, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---

# Data types  

## String types  

String out parameters are `LPWSTR` null-terminated strings.  The requester allocates the string using `CoTaskMemAlloc`.  Ownership is transferred to the requester and it is up to the requester to free the memory using `CoTaskMemFree`.  

String in parameters are `LPCWSTR` null-terminated strings.  The requester ensures the string is valid for the duration of the synchronous function request.  If the receiver must retain that value to some point after the function request completes, the receiver must allocate an associated copy of the string value.  

## URI and JSON parsing  

Various methods provide or accept URIs and JSON as strings.  Please use your own preferred library for parsing and generating the strings.  

If WinRT is available for your app, you may use `RuntimeClass_Windows_Data_Json_JsonObject` and `IJsonObjectStatics` methods to parse or produce JSON strings or `RuntimeClass_Windows_Foundation_Uri` and `IUriRuntimeClassFactory` methods to parse and produce URIs.  Both of methods work in Win32 apps.  

If you use `IUri` and `CreateUri` to parse URIs, you may want to use the following URI creation flags to have `CreateUri` behavior more closely match the URI parsing in the WebView.  

```json
Uri_CREATE_ALLOW_IMPLICIT_FILE_SCHEME | Uri_CREATE_NO_DECODE_EXTRA_INFO
```  

<!-- links -->  
