---
title: Custom management of network requests
description: Using the WebResourceRequested event and the WebResourceResponseReceived event in WebView2 apps.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 04/05/2022
---
# Custom management of network requests
<!--
# Custom management of network requests and responses in WebView2
# Managing network requests in WebView2
-->

To intercept requests and responses and replace them by your own custom requests and responses, use the `NavigateWithWebResourceRequest` method and associated API items.  Use this API if you need custom processing of network requests or responses.  If you are using Basic Authentication, you don't need to use this advanced approach.

<!-- 
# Navigating with web resource request and response events
-->


<!-- ====================================================================== -->
## Introduction

The Microsoft Edge WebView2 control lets you interact with and modify network requests.  You can either provide a response or modify the network request using the `webResourceRequested` and `webResourceResponseReceived` events. 

Use this technology to do X.  When you want do extra beyond Basic Authentication.

What UX feature does this provide for your app?


During navigation among URIs, use the `WebResourceRequested` event and the `WebResourceResponseReceived` event.


### How your host app, the WebView2 control, and the HTTP server interact

What is a "request", what is a "web resource request", what is a "web resource", & "response", when are they used?

The WebView2 control sits in between your host app and the HTTP server.  Your host app sends a request to the WebView2 control, which sends the request to the HTTP server.  The HTTP server sends a response to the WebView2 control, which sends the response to your host app.  The 


There are 3 main APIs involved:<!--true? what are the 3? what kind are they (differs between plats/langs?) -->  <!-- list the actual specific C# then C++ method names-->
*  Add
   * [ICoreWebView2::add_WebResourceRequested](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#add_webresourcerequested) - Adds an event handler for the WebResourceRequested event.
*  Remove
   * [ICoreWebView2::remove_WebResourceRequested](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#remove_webresourcerequested) - Removes an event handler.
*  Navigate <!-- Not a navigation event -->

*   Lets you customize network request handling of sending requests and responses.

You can add/provide your own custom response.

*   `NavigateWithWebResourceRequest` is special cases advanced, beyond Basic Auth, to modify the headers to be able to better/custom interact with the network.

*   Can also use this to manage navigation
*   Why/when is this API useful?
    o   Can run WebView2 offline.
    o   Allows host app to change/provide response to request.
    o   Instead of going through network, can go through the app.
    o   A core piece of API that lets you do almost anything (need specific examples) with WebView2.
    o   Allows developer to provide content that it gets from WV2 <!--TODO: clarify-->
        *   Local content.
        *   Service worker is being worked on currently.
    o   Providing content.

*  If you don't use this API, you won't be able to fine-tune requests.
    o   This API lets you support custom authentication scenarios.
    o   Use this API for anything network related that you need to fine tune.

*   Image replacing example.


### The NavigateWithWebResourceRequest method

The `NavigateWithWebResourceRequest` method, together with the `` event and the `` event, allows your host app to intercept and interact with network requests sent to and from the WebView2 control, while the WebView2 control interacts with the HTTP server.  This API enables your host app to  either intercept a response that's sent by the HTTP server and substitute a custom response to your host app's code, or intercept a request that's sent from the WebView2 control to the HTTP server, and substitute your own custom request instead.

# [.NET](#tab/dotnet)

* [CoreWebView2.NavigateWithWebResourceRequest(CoreWebView2WebResourceRequest) Method](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.navigatewithwebresourcerequest)

# [Win32](#tab/win32)

* [interface ICoreWebView2_2::NavigateWithWebResourceRequest method](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2_2#navigatewithwebresourcerequest)

---


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
## Intercepting requests from WebView2

Your host app can intercept requests that are sent by WebView2 in order to customize header content/info or URL or the method (verb; change GET to POST or vice versa, for example).

<!-- ## Intercepting a request that's sent from the WebView2 control and modifying it and then sending it to the server -->

<!-- ## Intercepting a request sent from the WebView2 control and modify it -->
can change the properties here: https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2webresourcerequest?view=webview2-dotnet-1.0.1150.38


WebView2 control sending requests to the web server

The host app can look at (intercept) that request and modify it.

### The importance and implications of parameters (url, headers, content)

* Discuss adding/modifying/customizing headers.


### What headers are

(briefly; maybe link)


### What you can do with headers

(briefly; maybe link)


### What are the implications of being able to change headers?  

You can set all the authentication tokens, read and write cookies (such as sensitive information).
https://developer.mozilla.org/en-US/docs/Glossary/Request_header
Merge with "what you can do with headers" section? 


### Why would you want to intercept requests that are sent from WebView2?  

The host app might want to provide optional content as part of the request that the WebView2 control won't know on its own.  For example, you're logging into a page and the app has credentials so the app can provide auth header without the user having to enter those credentials.   

(Another example: cookies, but a sep API covers that.)

Also your host app can send some content as part of a request that the WebView2 control doesn't have on its own.  

See an article about HTTP headers.


<!-- ====================================================================== -->
## Overriding and providing new responses to WebView2 -- follow up (find technical difference between overriding request/response)

<!-- ## Overriding the response and providing a different, custom response to the WebView2 control -->

By default, the HTTP server sends a response to the WebView2 control

The host app can override the response and provide a different, custom response to the WebView2 control.

<!-- TODO: from where?  from local code rather than from the server -->
* override to serve content offline, recommended way should be to changing URL to file URL
* technical difference in doing it by request/response
* intercept and override 

### What is our recommended way of overriding for request vs. response
* simple cases of reading from local file, can modify request url to be a file url (pointing to this resoruce)
* dynamic content (override response). Resource needs user input, request gets constructed once it gets user input

<!-- ====================================================================== -->
## Constructing a custom request and navigating using that request

<!-- ## Constructing a custom request and navigating the WebView2 control using that request -->


<!-- ## Navigating with custom requests  -->

webResourceRequested


<!-- ====================================================================== -->
## Monitoring the actual requests and responses

The request in the `WebResourceRequested` event is preliminary; the WebView2 network stack can add more headers before they are sent (for example, cookie header), but the `WebResourceResponseRecieved` event has the actual request that was sent and the actual response that was received. 

the `WebResourceRequested` event letss your host app change the request, the request object isn't finalized yet, so your host app can or the netwrok stack can add [headers]
.  after the request is sent, ... received.  Then we know at that time what the actual request that's sent is.

The `WebResourceRequested` event is fired before the actual request is sent.

The `WebResourceResponseRecieved` event is fired after the response is received.

The headers are not finalized, so the app can change it , when the response event is fired.

The response event is fired by the the WebView2 control.

You can use this opportunity to provide custom ... to see the finalized headers.  

The authorization header is one of the headers that gets set by the network stack after the wrr event fires.


<!-- ====================================================================== -->
## When to use this approach vs. other approaches

When to use `webResourceRequested` and `webResourceResponseReceived` events vs. when to use other options (such as Basic Authentication).

Instead of using this API, you can use these other approaches:

<!-- try using a simple list of links to articles; can add notes off to the right, like:
* [Basic Authentication] - a few words for clarification here.
-->
* [Basic Authentication]
* [Cookies]
* [General navigation]
* [x]

<!-- if a more heavyweight description sentence is needed, can use table instead of the above annotated list of links: -->
<!--
| Option | Description | Article |
|---|---|---|
| Basic Authentication | x | link |
| Cookies | x | link |
| General navigation | x | link |
|User agent | x | link |
| x | x | link |
-->


<!-- ====================================================================== -->
## Scenario/use cases


<!-- ====================================================================== -->
## Example: Navigating with WebResourceRequested

<!-- the h2 above has wording: ## Constructing a custom request and navigating using that request -->

This is an existing example in the Win32 sample app.


<!-- -------------------------------------------------- -->

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
## Example: Serve a web resource request locally
<!-- 
## Example: Serve a web resource request locally (offline)
## Example: Provide a web resource request locally
## Example: Replace a remote resource with local resource -->


<!--
TODO: clarify heading
## Example: Replace a requested file with a local file
-->

Your code <!-- TODO: your substitution code in place of the server --> sends a response from your local machine to your host app.

You can replace an image that's requested by your own local image file instead.  

This is an existing example in the Win32 sample app.


<!-- ====================================================================== -->
## Example of WebResourceResponseReceived event: Reading the authorization header value

<!-- TODO: should this section/listing be moved into one of the four "Example:" sections above? (as we did with the Request section/example listing) -->

<!-- we have a framework set up that if you update code in Win32 sample in repo, the API Ref doc for Win32/C++ (but not for .NET/C#? at least not for the WPF app - TODO: confirm latter) -->

The following code demonstrates how the `WebResourceResponseReceived` event can be used.

<!-- from https://github.com/MicrosoftEdge/WebView2Feedback/blob/master/specs/WebResourceResponseReceived.md#examples -->


<!-- Note that the following code is less useful, because ___.   -->


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
