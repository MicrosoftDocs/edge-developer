---
title: Custom management of network requests
description: Using the WebResourceRequested event and the WebResourceResponseReceived event in WebView2 apps.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 04/26/2022
---
# Custom management of network requests
<!--
# Custom management of network requests and responses in WebView2
# Managing network requests in WebView2
# Navigating with web resource request and response events
-->


<!-- ====================================================================== -->
## Introduction

The Microsoft Edge WebView2 control lets you interact with and modify network requests.  You can either provide a response or modify the network request using the `webResourceRequested` and `webResourceResponseReceived` events.  There is also special functionality that allows you to navigate with specific network requests using the `NavigateWithWebResourceRequest API`.

This article describes how you can modify network requests to change the UI content displayed in the WebView2 control.
<!-- TODO clarify sentence, which explains what this high-level API lets you do -->

Use this API and approach to:
* Upload local file content to your app to add support for offline functionality.
* Block content in a webpage, such as specific images.
* Fine-tune authentication for specific pages.


### When to use other approaches

The `webResourceRequested` and `webResourceResponseReceived` events are powerful tools that allow you to light up various scenarios. This is a low-level API that gives more control, but requires more coding and is complicated to use.  For some common scenarios, we provide APIs that are easier to use and are optimized for those specific scenarios, and we recommend you use those rather than the APIs discussed in this article.

Instead of using WebResourceRequested APIs, you can use these other approaches that are build on top of WebResourceRequested and related APIs:
* [Basic Authentication](/microsoft-edge/webview2/concepts/basic-authentication?tabs=csharp)
* [General navigation](/microsoft-edge/webview2/concepts/navigation-events) 
* [Managing cookies in WebView2](/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-1.0.1185.39)


### How your host app, the WebView2 control, and the HTTP server interact

The WebView2 control sits in between your host app and the HTTP server.  When your host app navigates to a URI, the WebView2 control sends a request to the HTTP server.  The HTTP server then sends a response to the WebView2 control.

<!-- lexicon for the 3 actors:
the HTTP server
the WebView2 control
the host app
-->


<!-- ====================================================================== -->
## 1. Intercepting a request (to monitor or modify it)

Your host app can _intercept_ (receive) a request that is sent from the WebView2 control to the HTTP server, read or modify the request, and then send the unchanged or modified request to the HTTP server (or to local code instead of the HTTP server). Intercepting the request allows you to customize the header content, URL, or the GET/POST method. The host app may want to intercept a request to provide optional content as part of the request that the WebView2 control does not know about.
<!-- DEV TODO: is the sending request to local code publicly supported yet? -->

The host app can change the properties of a request by using this API:

# [.NET](#tab/dotnet)

* [CoreWebView2WebResourceRequest Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2webresourcerequest)

# [Win32](#tab/win32)

* [ICoreWebView2WebResourceRequest](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2webresourcerequest)

---

### What you can do with headers

<!-- DEV TODO: Should we explain how our developers might be able to change headers? -->
A HTTP header provides important information and metadata about a request or response. Changing [headers](https://developer.mozilla.org/docs/Glossary/HTTP_header) enables you to perform powerful actions on the network. A [request header](https://developer.mozilla.org/docs/Glossary/Request_header) can be used to indicate the format of the response (e.g. the Accept-* headers), set authentication tokens, read and write cookies (sensitive information), modify the user agent, etc.  A [response header](https://developer.mozilla.org/en-US/docs/Glossary/Response_header) can be used to provide more context of the message being sent. 

### Filtering the WebResourceRequested event based on URL and resource type

<!-- TODO: find a good place for this section. -->

In a `WebResourceRequested` event, you can specify a filter for the requests that the app is interested in based on URL and resource type.  If the host app uses a filter, the filter must be added before a `WebResourceRequested` event is fired.

For example, say a host app is trying to replace images, in which case the host app is only interested in web resource requested events for images. The app would only get events for images by specifying the filter for images. Another example is if the host app is only interested in all requests that are under a domain name like https://example.com, then the app can use the URL filter to get events associated with that site. 

# [.NET](#tab/dotnet)

* [CoreWebView2.AddWebResourceRequestedFilter Method](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2.addwebresourcerequestedfilter?view=webview2-dotnet-1.0.1185.39)

# [Win32](#tab/win32)

* [AddWebResourceRequestedFilter method](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-1.0.1185.39#addwebresourcerequestedfilter)

---


For details about how the URL filter works, see [CoreWebView2.AddWebResourceRequestedFilter Method > Remarks](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2.addwebresourcerequestedfilter?view=webview2-dotnet-1.0.1185.39#remarks)


### Why would you want to intercept requests that are sent from WebView2?  

Intercepting requests sent from WebView2 enables you to further configure your request. The host app might want to provide optional content as part of the request that the WebView2 control won't know on its own. Some scenarios include:
*  You're logging into a page and the app has credentials so the app can provide authentication header without the user having to enter those credentials.  
*  You want offline functionality in the app so you redirect the URL to a local file path when no internet connection is detected.
*  You want to upload local file content to the request server via a POST request <!-- DEV TODO: validate this -->


### Sequence for modifying requests

<!-- wiki page that points to the Visio source file: Documentation > "Notes about specific image files" -->
![Diagram of sequence for modifying requests.](webresourcerequested-images/sequence-for-modifying-requests.png)

1. The host app sets up a `WebResourceRequested` filter.
1. The host app defines the event handlers for `WebResourceRequested` and `WebResourceResponseReceived`.
1. The host app navigates the WebView2 control to a webpage.
1. The WebView2 control creates a request for a resource that's needed for the webpage.
1. The WebView2 control fires a `WebResourceRequested` event to the host app.
1. The host app listens for and handles the `WebResourceRequested` event.
1. The host app can modify headers at this point.  The host app can also defer the `WebResourceRequested` event, which means that the host app asks for more time to decide what to do.
1. The WebView2 network stack can add more headers (for example, can add cookies and authorization headers).
1. The WebView2 control sends the request to the HTTP server.
1. The HTTP server sends the response to the WebView2 control.
1. The WebView2 control fires the `WebResourceResponseReceived` event.
1. The host app listens for the `WebResourceResponseReceived` event and handles it.  <!-- todo: arrow: "The WebView2 control creates a request for a resource that's needed for the webpage." -->


<!-- ====================================================================== -->
### Example: Intercepting a request (to monitor or modify it)
<!-- ## Example: Header modification when making a request -->

<!-- this example doesn't exist in the sample repo -->

<!-- note: the below intro is based on copying the main h2's Sentence 1 from above: -->
In the following example, the host app _intercepts_ (receives) the document request that is sent from the WebView2 control to the http://www.example.com HTTP server, adds a custom header value and sends the request.  

# [.NET](#tab/dotnet)

```csharp
webView.CoreWebView2.AddWebResourceRequestedFilter(
      "http://www.example.com/*", CoreWebView2WebResourceContext.All);
webView.CoreWebView.WebResourceRequested += delegate (
   CoreWebView2 sender, CoreWebView2WebResourceRequestedEventArgs args) {
   CoreWebView2WebResourceContext resourceContext = args.ResourceContext;
   if (resourceContext != CoreWebView2WebResourceContext.Document)
   {
      return;
   }
   CoreWebView2HttpRequestHeaders requestHeaders = args.Request.Headers;
   requestHeaders.SetHeader("Custom", "Value");
}
```

# [Win32](#tab/win32)

```cpp
// Add a filter to select all resource types under http://example.com
m_webView->AddWebResourceRequestedFilter(
      L"http://www.example.com/*", COREWEBVIEW2_WEB_RESOURCE_CONTEXT_ALL);
m_webView->add_WebResourceRequested(
      Callback<ICoreWebView2WebResourceRequestedEventHandler>(
         [this](
            ICoreWebView2* sender,
            ICoreWebView2WebResourceRequestedEventArgs* args) {
            COREWEBVIEW2_WEB_RESOURCE_CONTEXT resourceContext;
            CHECK_FAILURE(args->get_ResourceContext(&resourceContext));
            // Ensure that the type is document
            if (resourceContext != COREWEBVIEW2_WEB_RESOURCE_CONTEXT_DOCUMENT)
            {
               return S_OK;
            }
            wil::com_ptr<ICoreWebView2WebResourceRequest> request;
            CHECK_FAILURE(args->get_Request(&request));
            request->get_Headers(&headers);
            headers->SetHeaderValue(L"Custom", L"Value"); // DEV TODO: define 'headers' & compile code
            return S_OK;
         })
         .Get(),
      &m_webResourceRequestedToken);
```  

---


<!-- ====================================================================== -->
## 2. Overriding a response (to proactively replace it)
<!-- Overriding and providing new responses to WebView2 -->
<!-- ## Overriding the response and providing a different, custom response to the WebView2 control -->

By default the HTTP server sends responses to the WebView2 control. Your host app can _override_ (ignore) a response that's sent from the HTTP server to the WebView2 control, and send a custom response to the WebView2 control instead of the original response.
<!-- DEV TODO: identify the technical difference between overriding a request vs. a response; when to override a request vs. response -->


### Sequence for overriding responses

<!-- wiki page that points to the Visio source file: Documentation > "Notes about specific image files" -->
![Diagram of sequence for overriding responses.](webresourcerequested-images/sequence-for-overriding-responses.png)

1. The host app sets up a `WebResourceRequested` filter.
1. The host app defines the event handlers for `WebResourceRequested` and `WebResourceResponseReceived`.
1. The host app navigates the WebView2 control to a webpage.
1. The WebView2 control creates a request for a resource that's needed for the webpage.
1. The WebView2 control fires a `WebResourceRequested` event to the host app.
1. The host app listens for and handles the `WebResourceRequested` event.
1. The host app sets a response to the `WebResourceRequested` event handler.  The host app can also defer the `WebResourceRequested` event, which means that the host app asks for more time to decide what to do.
1. The WebView2 control then renders the response as the resource.


### Example: Overriding a response (to proactively replace it)

# [.NET](#tab/dotnet)

```csharp
// DEV TODO: add comments
webView.CoreWebView2.AddWebResourceRequestedFilter(
      "http://www.example.com/*", CoreWebView2WebResourceContext.Image);
webView.CoreWebView2.WebResourceRequested += delegate (
   CoreWebView2 sender, CoreWebView2WebResourceRequestedEventArgs args) {
    
   FileStream fs = File.Open(customImagePath, FileMode.Open);
   CoreWebView2WebResourceResponse response = webView.CoreWebView2.Environment.CreateWebResourceResponse(fs, 200, "OK", "Content-Type: image/jpeg");
   args.Response = response;
};
```

# [Win32](#tab/win32)

```cpp
// DEV TODO: add comments
m_webView->AddWebResourceRequestedFilter(
                L"*", COREWEBVIEW2_WEB_RESOURCE_CONTEXT_IMAGE);
m_webView->add_WebResourceRequested(
   Callback<ICoreWebView2WebResourceRequestedEventHandler>(
      [this](
         ICoreWebView2* sender,
         ICoreWebView2WebResourceRequestedEventArgs* args) {
         COREWEBVIEW2_WEB_RESOURCE_CONTEXT resourceContext;
         args->get_ResourceContext(&resourceContext);

         // Override the response with an another image.
         // If put_Response is not called, the request will continue as normal.
         wil::com_ptr<IStream> stream;
         SHCreateStreamOnFileEx(
               customImagePath, STGM_READ, FILE_ATTRIBUTE_NORMAL,
               FALSE, nullptr, &stream);
         wil::com_ptr<ICoreWebView2WebResourceResponse> response;
         wil::com_ptr<ICoreWebView2Environment> environment;
         wil::com_ptr<ICoreWebView2_2> webview2;
         m_webView->QueryInterface(IID_PPV_ARGS(&webview2)));
         webview2->get_Environment(&environment);
         environment->CreateWebResourceResponse(
               stream.get(), 200, L"OK", L"Content-Type: image/jpeg", &response));
         CHECK_FAILURE(args->put_Response(response.get());
         return S_OK;
      })
      .Get(),
   &m_webResourceRequestedToken));
```

---


<!-- ====================================================================== -->
## 3. Constructing a custom request and navigating using that request
<!-- ## Constructing a custom request and navigating the WebView2 control using that request -->
<!-- ## Navigating with custom requests  -->
<!-- use-case: Navigating (vs. Overriding or Intercepting) -->

The `NavigateWithWebResourceRequest` method, together with the `WebResourceRequest` event and the `WebResponseReceived` event, allows your host app to intercept and interact with network requests sent to and from the WebView2 control, while the WebView2 control interacts with the HTTP server.  This API enables your host app to  either intercept a response that's sent by the HTTP server and substitute a custom response to your host app's code, or intercept a request that's sent from the WebView2 control to the HTTP server, and substitute your own custom request instead.

# [.NET](#tab/dotnet)

* [CoreWebView2.NavigateWithWebResourceRequest(CoreWebView2WebResourceRequest) Method](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.navigatewithwebresourcerequest)

# [Win32](#tab/win32)

* [interface ICoreWebView2_2::NavigateWithWebResourceRequest method](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2_2#navigatewithwebresourcerequest)

---

<!-- ====================================================================== -->
### Example: Constructing a custom request and navigating using that request

<!-- This is an existing example in the Win32 sample app. -->

<!-- CreateWebResourceRequest and NavigateWithWebResourceRequest -->

<!-- the code listings below were not copied from the sample app; they were copied from the spec.  ok?
from https://github.com/MicrosoftEdge/WebView2Feedback/blob/master/specs/NavigateWithWebResourceRequest.md#examples -->


<!-- -------------------------------------------------- -->

# [.NET](#tab/dotnet)

```csharp
// DEV TODO comments
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
## 4. Monitoring the requests and responses via the WebResourceResponseReceived event

You can monitor the requests and responses via the `WebResourceResponseReceived` event, to read any header value.

### Example: Monitoring the requests and responses via the WebResourceResponseReceived event

This example shows how to read the authorization header value by monitoring the requests and responses via the `WebResourceResponseReceived` event.

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
   * `add_WebResourceRequested`
   * `AddWebResourceRequestedFilter`
   * `remove_WebResourceRequested`
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
