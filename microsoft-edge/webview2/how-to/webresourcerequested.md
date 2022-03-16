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

Covers the following API or event specs:

**Request:**

*  WebResourceRequested
*  WebResourceRequest - includes `ICoreWebView2WebResourceRequest` (Win32/C++).
*  NavigateWithWebResourceRequest
   *  CreateWebResourceRequest

* [NavigateWithWebResourceRequest spec](https://github.com/MicrosoftEdge/WebView2Feedback/blob/master/specs/NavigateWithWebResourceRequest.md)


**Response:**

*  WebResourceResponseReceived

* [WebResourceResponseReceived spec](https://github.com/MicrosoftEdge/WebView2Feedback/blob/master/specs/WebResourceResponseReceived.md)


<!-- ====================================================================== -->
## Example of CreateWebResourceRequest and NavigateWithWebResourceRequest

<!-- from https://github.com/MicrosoftEdge/WebView2Feedback/blob/master/specs/NavigateWithWebResourceRequest.md#examples -->


<!-- -------------------------------------------------- -->

# [.NET](#tab/dotnet)

```csharp
UTF8Encoding utfEncoding = new UTF8Encoding();
byte[] postData = utfEncoding.GetBytes("input=Hello");

MemoryStream postDataStream = new MemoryStream(postData.Length);
postDataStream.Write(postData, 0, postData.Length);
postDataStream.Seek(0, SeekOrigin.Begin);
CoreWebView2WebResourceRequest webResourceRequest = 
environment.CreateWebResourceRequest("https://www.w3schools.com/action_page.php",
                                     "POST",
                                     postDataStream,
                                    "Content-Type: application/x-www-form-urlencoded");
webView.CoreWebView2.NavigateWithWebResourceRequest(webResourceRequest);
```

<!-- -------------------------------------------------- -->

# [Win32](#tab/win32)

```cpp
// Need to convert post data to UTF-8 as required by the application/x-www-form-urlencoded Content-Type 
std::wstring postData = std::wstring(L"input=Hello");
int sizeNeededForMultiByte = WideCharToMultiByte(
   CP_UTF8, 0, postData.c_str(), postData.size(), nullptr,
   0, nullptr, nullptr);

std::unique_ptr<char[]> postDataBytes = std::make_unique<char[]>(sizeNeededForMultiByte);
WideCharToMultiByte(
   CP_UTF8, 0, postData.c_str(), postData.size(), postDataBytes.get(),
   sizeNeededForMultiByte, nullptr, nullptr);

wil::com_ptr<ICoreWebView2WebResourceRequest> webResourceRequest;
wil::com_ptr<IStream> postDataStream = SHCreateMemStream(
      reinterpret_cast<const BYTE*>(postDataBytes.get()), sizeNeededForMultiByte);

// This acts as a HTML form submit to https://www.w3schools.com/action_page.php
CHECK_FAILURE(webviewEnvironment->CreateWebResourceRequest(
   L"https://www.w3schools.com/action_page.php", L"POST", postDataStream.get(),
   L"Content-Type: application/x-www-form-urlencoded", &webResourceRequest));
CHECK_FAILURE(webview->NavigateWithWebResourceRequest(webResourceRequest.get()));
```

---


<!-- ====================================================================== -->
## Example of WebResourceResponseReceived event

The following code demonstrates how the `WebResourceResponseReceived` event can be used.

<!-- from https://github.com/MicrosoftEdge/WebView2Feedback/blob/master/specs/WebResourceResponseReceived.md#examples -->


<!-- -------------------------------------------------- -->

# [.NET](#tab/dotnet)

```csharp
WebView.WebResourceResponseReceived += WebView_WebResourceResponseReceived;

// Note: modifications made to request are set but have no effect on WebView processing it.
private async void WebView_WebResourceResponseReceived(CoreWebView2 sender, CoreWebView2WebResourceResponseReceivedEventArgs e)
{
    // Actual headers sent with request
    foreach (var current in e.Request.Headers)
    {
        Console.WriteLine(current);
    }

    // Headers in response received
    foreach (var current in e.Response.Headers)
    {
        Console.WriteLine(current);
    }

    // Status code from response received
    int status = e.Response.StatusCode;
    if (status == 200)
    {
        // Handle
        Console.WriteLine("Request succeeded!");

        // Get response body
        try
        {
            System.IO.Stream content = await e.Response.GetContentAsync();
            // Null will be returned if no content was found for the response.
            if (content)
            {
                DoSomethingWithResponseContent(content);
            }
        }
        catch (COMException ex)
        {
            // A COMException will be thrown if the content failed to load.
        }
    }
}
```

<!-- -------------------------------------------------- -->

# [Win32](#tab/win32)

COM example, uses `ICoreWebView2WebResourceRequest`.

```cpp
EventRegistrationToken m_webResourceResponseReceivedToken = {};

m_webview->add_WebResourceResponseReceived(
    Callback<ICoreWebView2WebResourceResponseReceivedEventHandler>(
        [this](ICoreWebView2* webview, ICoreWebView2WebResourceResponseReceivedEventArgs* args)
            -> HRESULT {
            // The request object as committed
            wil::com_ptr<ICoreWebView2WebResourceRequest> webResourceRequest;
            CHECK_FAILURE(args->get_Request(&webResourceRequest));
            // The response object as received
            wil::com_ptr<ICoreWebView2WebResourceResponseView> webResourceResponse;
            CHECK_FAILURE(args->get_Response(&webResourceResponse));
            
            // Get body content for the response
            webResourceResponse->GetContent(
                Callback<
                    ICoreWebView2WebResourceResponseViewGetContentCompletedHandler>(
                    [this, webResourceRequest, webResourceResponse](HRESULT result, IStream* content) {
                        // The response content might have failed to load.
                        bool getContentSucceeded = SUCCEEDED(result);

                        // The stream will be null if no content was found for the response.
                        if (content) {
                            DoSomethingWithContent(content);
                        }
                        
                        std::wstring message =
                            L"{ \"kind\": \"event\", \"name\": "
                            L"\"WebResourceResponseReceived\", \"args\": {"
                            L"\"request\": " +
                            RequestToJsonString(webResourceRequest.get()) +
                            L", "
                            L"\"response\": " +
                            ResponseToJsonString(webResourceResponse.get(), content) + L"}";

                        message +=
                            WebViewPropertiesToJsonString(m_webview.get());
                        message += L"}";
                        PostEventMessage(message);
                        return S_OK;
                    })
                    .Get());

            return S_OK;
        })
        .Get(),
    &m_webResourceResponseReceivedToken);
```

---


<!-- ====================================================================== -->
## API Reference overview

<!-- -------------------------------------------------- -->

# [.NET](#tab/dotnet)


**Request:**

* [CoreWebView2.NavigateWithWebResourceRequest Method](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.navigatewithwebresourcerequest)

* [CoreWebView2WebResourceContext Enum](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2webresourcecontext) - Specifies the web resource request contexts.

* [CoreWebView2Environment.CreateWebResourceRequest Method](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createwebresourcerequest) - Creates a new `CoreWebView2WebResourceRequest` object.

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

* [ICoreWebView2_2::NavigateWithWebResourceRequest method](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2_2#navigatewithwebresourcerequest) - Navigates using a constructed WebResourceRequest object.

* [ICoreWebView2WebResourceRequest](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2webresourcerequest) - An HTTP request used with the `WebResourceRequested` event.
   * `get_Content` - The HTTP request message body as stream.
   * `get_Headers` - The mutable HTTP request headers.
   * `get_Method` - The HTTP request method.
   * `get_Uri` - The request URI.
   * `put_Content` - Sets the `Content` property.
   * `put_Method` - Sets the `Method` property.
   * `put_Uri` - Sets the `Uri` property.

* [ICoreWebView2WebResourceRequestedEventArgs](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2webresourcerequestedeventargs)
   * `get_Request` - The Web resource request.
   * `get_ResourceContext` - The web resource request context.
   * `get_Response` - A placeholder for the web resource response object.
   * `GetDeferral` - Obtain an `ICoreWebView2Deferral` object and put the event into a deferred state.
   * `put_Response` - Sets the `Response` property.

* [ICoreWebView2WebResourceRequestedEventHandler](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2webresourcerequestedeventhandler)


**Response:**

* [ICoreWebView2_2::add_WebResourceResponseReceived](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2_2#add_webresourceresponsereceived)

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

* [NavigateWithWebResourceRequest spec](https://github.com/MicrosoftEdge/WebView2Feedback/blob/master/specs/NavigateWithWebResourceRequest.md)
* [WebResourceResponseReceived event spec](https://github.com/MicrosoftEdge/WebView2Feedback/blob/master/specs/WebResourceResponseReceived.md)
* [Call native-side code from web-side code](hostobject.md)
