---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: 0.9.430 - WebView2 Win32 C++ ICoreWebView2HttpHeadersCollectionIterator
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/20/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---

# 0.9.430 - interface ICoreWebView2HttpHeadersCollectionIterator 

[!INCLUDE [deprecation-note](../../includes/deprecation-note.md)]

```
interface ICoreWebView2HttpHeadersCollectionIterator
  : public IUnknown
```

Iterator for a collection of HTTP headers.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[GetCurrentHeader](#getcurrentheader) | Get the name and value of the current HTTP header of the iterator.
[get_HasCurrentHeader](#get_hascurrentheader) | True when the iterator hasn't run out of headers.
[MoveNext](#movenext) | Move the iterator to the next HTTP header in the collection.

See [ICoreWebView2HttpRequestHeaders](ICoreWebView2HttpRequestHeaders.md) and [ICoreWebView2HttpResponseHeaders](ICoreWebView2HttpResponseHeaders.md). 

```cpp
std::wstring RequestHeadersToJsonString(ICoreWebView2HttpRequestHeaders* requestHeaders)
{
    wil::com_ptr<ICoreWebView2HttpHeadersCollectionIterator> iterator;
    CHECK_FAILURE(requestHeaders->GetIterator(&iterator));
    BOOL hasCurrent = FALSE;
    std::wstring result = L"[";

    while (SUCCEEDED(iterator->get_HasCurrentHeader(&hasCurrent)) && hasCurrent)
    {
        wil::unique_cotaskmem_string name;
        wil::unique_cotaskmem_string value;

        CHECK_FAILURE(iterator->GetCurrentHeader(&name, &value));
        result += L"{\"name\": " + EncodeQuote(name.get())
            + L", \"value\": " + EncodeQuote(value.get()) + L"}";

        BOOL hasNext = FALSE;
        CHECK_FAILURE(iterator->MoveNext(&hasNext));
        if (hasNext)
        {
            result += L", ";
        }
    }

    return result + L"]";
}
```

## Members

#### GetCurrentHeader 

Get the name and value of the current HTTP header of the iterator.

> public HRESULT [GetCurrentHeader](#getcurrentheader)(LPWSTR * name,LPWSTR * value)

This method will fail if the last call to MoveNext set has_next to FALSE.

#### get_HasCurrentHeader 

True when the iterator hasn't run out of headers.

> public HRESULT [get_HasCurrentHeader](#get_hascurrentheader)(BOOL * hasCurrent)

If the collection over which the iterator is iterating is empty or if the iterator has gone past the end of the collection then this is false.

#### MoveNext 

Move the iterator to the next HTTP header in the collection.

> public HRESULT [MoveNext](#movenext)(BOOL * hasNext)

The hasNext parameter will be set to FALSE if there are no more HTTP headers. After this occurs the GetCurrentHeader method will fail if called.

