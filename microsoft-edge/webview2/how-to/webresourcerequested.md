---
title: Web Resource Requested
description: Web Resource Requested for WebView2 apps.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 03/15/2022
---
# Web Resource Requested


<!-- ====================================================================== -->
## API Reference overview


<!-- -------------------------------------------------- -->

# [.NET](#tab/dotnet)


**Request:**

* [CoreWebView2WebResourceContext Enum](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2webresourcecontext) - Specifies the web resource request contexts.

* [CoreWebView2WebResourceRequest Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2webresourcerequest) - An HTTP request used with the `WebResourceRequested` event.
   * `Content` - Gets or sets the HTTP request message body as stream.
   * `Headers` - Gets the mutable HTTP request headers.
   * `Method` - Gets or sets the HTTP request method.
   * `Uri` - Gets or sets the request URI.

* [CoreWebView2.WebResourceRequested Event](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.webresourcerequested) - Raised when the WebView is performing a URL request to a matching URL and resource context filter that was added with `AddWebResourceRequestedFilter`.
   * [CoreWebView2.AddWebResourceRequestedFilter Method](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.addwebresourcerequestedfilter)
   * [CoreWebView2WebResourceRequestedEventArgs Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2webresourcerequestedeventargs)
      * `Request` - Gets the web resource request.
      * `ResourceContext` - Gets the web resource request context.
      * `Response` - Gets or sets the `CoreWebView2WebResourceResponse` object.
      * `GetDeferral` - Gets a `CoreWebView2Deferral` object and put the event into a deferred state.


**Response:**

* [CoreWebView2WebResourceResponse Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2webresourceresponse) - An HTTP response used with the `WebResourceRequested` event.
   * `Content` - Gets HTTP response content as stream.
   * `Headers` - Gets the overridden HTTP response headers.
   * `ReasonPhrase` - Gets or sets the HTTP response reason phrase.
   * `StatusCode` - Gets or sets the HTTP response status code.

* [CoreWebView2.WebResourceResponseReceived Event](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.webresourceresponsereceived)
   * [CoreWebView2WebResourceResponseReceivedEventArgs Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2webresourceresponsereceivedeventargs) - Event args for the `WebResourceResponseReceived` event.
      * `Request` - Gets the request object for the web resource, as committed.
      * `Response` - Gets view of the response object received for the web resource.

* [CoreWebView2WebResourceResponseView Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2webresourceresponseview) - View of the HTTP representation for a web resource response.
   * `Headers` - Gets the HTTP response headers as received.
   * `ReasonPhrase` - Gets the HTTP response reason phrase.
   * `StatusCode` - Gets the HTTP response status code.
   * `GetContentAsync` - Gets the response content stream asynchronously.

<!-- -------------------------------------------------- -->

# [Win32](#tab/win32)

**Request:**

* [ICoreWebView2WebResourceRequest](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2webresourcerequest) - An HTTP request used with the `WebResourceRequested` event.
   * `get_Content` - The HTTP request message body as stream.
   * `get_Headers` - The mutable HTTP request headers.
   * `get_Method` - The HTTP request method.
   * `get_Uri` - The request URI.
   * `put_Content` - Sets the `Content` property.
   * `put_Method` - Sets the `Method` property.
   * `put_Uri` - Sets the `Uri` property.

* [ICoreWebView2WebResourceRequestedEventArgs](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2webresourcerequestedeventargs)

* [ICoreWebView2WebResourceRequestedEventHandler](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2webresourcerequestedeventhandler)


**Response:**

* [ICoreWebView2WebResourceResponse](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2webresourceresponse) - An HTTP response used with the `WebResourceRequested` event.
   * `get_Content` - HTTP response content as stream.
   * `get_Headers` - Overridden HTTP response headers.
   * `get_ReasonPhrase` - The HTTP response reason phrase.
   * `get_StatusCode` - The HTTP response status code.
   * `put_Content` - Sets the `Content` property.
   * `put_ReasonPhrase` - Sets the `ReasonPhrase` property.
   * `put_StatusCode` - Sets the `StatusCode` property.

* [ICoreWebView2WebResourceResponse](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2webresourceresponse)

* [ICoreWebView2WebResourceResponseReceivedEventArgs](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2webresourceresponsereceivedeventargs) - Event args for the `WebResourceResponseReceived` event.

* [ICoreWebView2WebResourceResponseReceivedEventHandler](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2webresourceresponsereceivedeventhandler)

* [ICoreWebView2WebResourceResponseView](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2webresourceresponseview) - View of the HTTP representation for a web resource response.

* [ICoreWebView2WebResourceResponseViewGetContentCompletedHandler](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2webresourceresponseviewgetcontentcompletedhandler)


---


<!-- ====================================================================== -->
## See also

* [Call native-side code from web-side code](hostobject.md)
