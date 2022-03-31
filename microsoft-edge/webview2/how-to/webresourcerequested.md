---
title: Managing network requests in WebView2
description: Using the WebResourceRequested event and the WebResourceResponseReceived event in WebView2 apps.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 04/01/2022
---
# Managing network requests in WebView2
<!-- 
# Navigating with web resource request and response events
-->

<!-- 
Todo:
*  Finalize the list of h2 & h3 headings.
*  Add Sentence 1.
*  Add Paragraph 1.
*  Add terms in Terminology table.
-->

<!--
Actors:
*  your host app
   *  your local code/your disk (your code which sends the response instead of the ususal way of the server sending the response) - is this code part of your host app?
*  the server

Basic Auth, the actors are:
*  the HTTP server
*  the WebView2 control
*  your host app
-->



The Microsoft Edge WebView2 control lets you interact with and modify network requests.  You can either provide a response or modify the network request using the `webResourceRequested` and `webResourceResponseReceived` events. 

Use this technology to do X.  When you want do extra beyond Basic Authentication.

What UX feature does this provide for your app?

What is "request", what is a "web resource request", what is a "web resource", & "response", when use them?

During navigation among URIs, use the `WebResourceRequested` event and the `WebResourceResponseReceived` event.


**Terminology:**

| Term | Definition |
|---|---|
| request | x |
| web resource request | x |
| web resource | x |
| response | x |
| `WebResourceRequested` event | Fired when a web resource is requested by the WebView2 control.  The WebView2 control fires this event.  Your host app listens for this event and then handles this event to do X. |
| `WebResourceResponseReceived` event | Fired when a web resource response is received by the WebView2 control.  The WebView2 control fires this event.  Your host app listens for this event and then handles this event to do Y. |


<!-- ====================================================================== -->
## Sending requests to the web server
<!--
* Discuss adding/modifying/customizing headers
* Discuss importance + implications of parameters (url, headers, content)
-->


<!-- ====================================================================== -->
## Sending responses

<!-- from where?  from local code rather than from the server -->


<!-- ====================================================================== -->
## When to use this approach vs. Basic Auth

## When to use

When to use `webResourceRequested` and `webResourceResponseReceived` events vs. when to use other options (such as Basic Authentication).
<!--
* insert table

| Option | Description |
|---|---|
| Basic Auth | x |
| Cookies | x |
| General navigation | x |
| x | x |

-->


<!-- ====================================================================== -->
## Navigating with webResourceRequested


<!-- ====================================================================== -->
## Scenario/use cases


<!-- ====================================================================== -->
## Example: NavigateWithWebResourceRequested example from sample app

This is an existing example in the Win32 sample app.



<!-- -------------------------------------------------- -->
### Example of a web resource request

 <!-- CreateWebResourceRequest and NavigateWithWebResourceRequest -->

<!-- the code listings below were not copied from the sample app; they were copied from the spec.  ok?
from https://github.com/MicrosoftEdge/WebView2Feedback/blob/master/specs/NavigateWithWebResourceRequest.md#examples -->


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
## Example: Header modification when making a request

<!-- Dev to provide sample -->


<!-- ====================================================================== -->
## Example: Block images in a webpage 

This is an existing example in the Win32 sample app.


<!-- ====================================================================== -->
## Example: Replace a web resource with local resource
<!-- ## Example: Replace a requested file with a local file -->

Your code <!--your substitution code in place of the server --> sends a response from your local machine to your host app.

You can replace an image that's requested by your own local image file instead.  

This is an existing example in the Win32 sample app.



<!-- ====================================================================== -->
## Example of a web resource response

<!-- todo: should this section/listing be moved into one of the four "Example:" sections above? (as we did with the Request section/example listing) -->

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

* [CoreWebView2.AddWebResourceRequestedFilter Method](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.addwebresourcerequestedfilter)
* [CoreWebView2.NavigateWithWebResourceRequest Method](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.navigatewithwebresourcerequest)
* [CoreWebView2.RemoveWebResourceRequestedFilter Method](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.removewebresourcerequestedfilter)
* [CoreWebView2.WebResourceRequested Event](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.webresourcerequested)
* [CoreWebView2Environment.CreateWebResourceRequest Method](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createwebresourcerequest)
* [CoreWebView2WebResourceContext Enum](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2webresourcecontext)
* [CoreWebView2WebResourceRequest Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2webresourcerequest)
   * `Content`
   * `Headers`
   * `Method`
   * `Uri`
* [CoreWebView2WebResourceRequestedEventArgs Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2webresourcerequestedeventargs)
   * `Request`
   * `ResourceContext`
   * `Response`
   * `GetDeferral`

**Response:**

* [CoreWebView2.WebResourceResponseReceived Event](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.webresourceresponsereceived)
* [CoreWebView2Environment.CreateWebResourceResponse Method](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createwebresourceresponse)
* [CoreWebView2WebResourceResponse Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2webresourceresponse)
   * `Content`
   * `Headers`
   * `ReasonPhrase`
   * `StatusCode`
* [CoreWebView2WebResourceResponseReceivedEventArgs Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2webresourceresponsereceivedeventargs)
      * `Request`
      * `Response`
* [CoreWebView2WebResourceResponseView Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2webresourceresponseview)
   * `Headers`
   * `ReasonPhrase`
   * `StatusCode`
   * `GetContentAsync`

<!-- -------------------------------------------------- -->

# [Win32](#tab/win32)

**Request:**

* [ICoreWebView2](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2)
   * `Add_WebResourceRequested`
   * `AddWebResourceRequedtedFilter`
   * `Remove_WebResourceRequested`
   * `RemoveWebResourceRequestedFilter`
* [ICoreWebView2Environment2](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2environment2)
   * `CreateWebResourceRequest`   
* [ICoreWebView2WebResourceRequest](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2webresourcerequest)
   * `get_Content`
   * `get_Headers`
   * `get_Method`
   * `get_Uri`
   * `put_Content`
   * `put_Method`
   * `put_Uri`
* [ICoreWebView2WebResourceRequestedEventArgs](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2webresourcerequestedeventargs)
   * `get_Request`
   * `get_ResourceContext`
   * `get_Response`
   * `GetDeferral`
   * `put_Response`
* [ICoreWebView2WebResourceRequestedEventHandler](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2webresourcerequestedeventhandler)
   * `Invoke`

**Response:**

* [ICoreWebView2_2](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2_2)
   * `add_WebResourceResponseReceived`
   * `NavigateWithWebResourceRequest`
   * `remove_WebResourceResponseReceived`
* [ICoreWebView2Environment](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2environment)
   * `CreateWebResourceResponse`
* [ICoreWebView2WebResourceResponse](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2webresourceresponse)
   * `get_Content`
   * `get_Headers`
   * `get_ReasonPhrase`
   * `get_StatusCode`
   * `put_Content`
   * `put_ReasonPhrase`
   * `put_StatusCode`
* [ICoreWebView2WebResourceResponseReceivedEventArgs](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2webresourceresponsereceivedeventargs)
   * `get_Request`
   * `get_Response`
* [ICoreWebView2WebResourceResponseReceivedEventHandler](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2webresourceresponsereceivedeventhandler)
   * `Invoke`
* [ICoreWebView2WebResourceResponseView](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2webresourceresponseview)
   * `get_Headers`
   * `get_ReasonPhrase`
   * `get_StatusCode`
   * `GetContent`
* [ICoreWebView2WebResourceResponseViewGetContentCompletedHandler](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2webresourceresponseviewgetcontentcompletedhandler)
   * `Invoke`

---


<!-- ====================================================================== -->
## See also

* [NavigateWithWebResourceRequest spec](https://github.com/MicrosoftEdge/WebView2Feedback/blob/master/specs/NavigateWithWebResourceRequest.md)
* [WebResourceResponseReceived event spec](https://github.com/MicrosoftEdge/WebView2Feedback/blob/master/specs/WebResourceResponseReceived.md)
* [Call native-side code from web-side code](hostobject.md)
