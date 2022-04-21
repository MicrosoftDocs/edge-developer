---
title: Custom management of network requests
description: Using the WebResourceRequested event and the WebResourceResponseReceived event in WebView2 apps.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 04/15/2022
---
# Custom management of network requests
<!--
# Custom management of network requests and responses in WebView2
# Managing network requests in WebView2
# Navigating with web resource request and response events
-->

<!-- ====================================================================== -->
## Introduction

The Microsoft Edge WebView2 control lets you interact with and modify network requests.  You can either provide a response or modify the network request using the `webResourceRequested` and `webResourceResponseReceived` events. There is also special functionality that allows you to navigate with specific network requests using the `NavigateWithWebResourceRequest API`. This article describes how you can modify network requests to change the UI content displayed in the WebView2 control.  <!-- TODO last sentence is weird but want a sentence to explain high level what this API lets you do -->

Some common use cases include: 
* use-case: 
* use-case: 
* use-case: 

<!-- During navigation among URIs, use the `WebResourceRequested` event and the `WebResourceResponseReceived` event. -->

---

**Terminology:**

| Term | Definition |
|---|---|
| HTTP request | x |
| HTTP response | x |
| web resource | x |
| intercept | receive a request or response |
| override | ignore a request or response |
| `WebResourceRequested` event | Fired when a web resource is requested by the WebView2 control.  The WebView2 control fires this event.  Your host app listens for this event and then handles this event to do X. |
| `WebResourceResponseReceived` event | Fired when a web resource response is received by the WebView2 control.  The WebView2 control fires this event.  Your host app listens for this event and then handles this event to do Y. |


<!-- ====================================================================== -->
## When to use custom network requests vs. using other provided wrapper APIs
<!-- moved section to top of page b/c before reading how to use, need to first decide whether this approach is relevant & of interest -->

<!-- Use this technology to do X.  When you want do extra beyond Basic Authentication.

What UX feature does this provide for your app? -->

The `webResourceRequested` and `webResourceResponseReceived` events are powerful tools that allow you to light up various scenarios. <!--TODO: Something about it being hard? --> For some common scenarios we provide APIs catered towards those specific scenarios which are easier to use and we recommend we use those rather than the APIs discussed in this article.

Instead of using WebResourceRequested APIs, you can use these other approaches:

<!-- try using a simple list of links to articles; can add notes off to the right, like:
* [Basic Authentication] - a few words for clarification here.
-->
* [Basic Authentication](/microsoft-edge/webview2/concepts/basic-authentication?tabs=csharp)
* [General navigation](/microsoft-edge/webview2/concepts/navigation-events)
* [Cookies](/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-1.0.1185.39) - Managing cookies in WebView2

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
## 1. Intercepting a request (to monitor or modify it)

Your host app can _intercept_ (receive) a request that is sent from the WebView2 control to the HTTP server, read or modify the request, and then send the unchanged or modified request to the HTTP server (or to local code instead of the HTTP server). Intercepting the request allows you to customize the header content, URL, or the GET/POST method. The host app may want to intercept a request to provide optional content as part of the request that the WebView2 control does not know about.
<!-- DEV TODO: is the sending request to local code publicly supported yet? -->

<!-- Notes -->
<!-- To intercept requests and responses and replace them by your own custom requests and responses, use the `NavigateWithWebResourceRequest` method and associated API items.  Use this API if you need custom processing of network requests or responses.  If you are using Basic Authentication, you don't need to use this advanced approach. -->
<!-- Your host app can intercept requests that are sent by WebView2 in order to customize header content/info, or the URL, or the method (the verb; change GET to POST or vice versa, for example). -->
<!-- ## Intercepting a request that's sent from the WebView2 control and modifying it and then sending it to the server -->
<!-- ## Intercepting a request sent from the WebView2 control and modify it -->
<!-- The WebView2 control sends a request to the HTTP server. -->
<!-- The host app can receive (intercept) the request, read or modify it, and then send the unchanged or modified request to the HTTP server or to local code instead of the HTTP server. -->

The host app can change the properties of a request by using this API:

# [.NET](#tab/dotnet)

* [CoreWebView2WebResourceRequest Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2webresourcerequest)

# [Win32](#tab/win32)

* [ICoreWebView2WebResourceRequest](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2webresourcerequest)

---


### What you can do with headers

<!-- TODO: Are we allowed to link this page/use sentences from it? -->
<!-- DEV TODO: Should we explain how our developers might be able to change headers? -->
A HTTP header provides important information and metadata about a request or response. Changing [headers](https://developer.mozilla.org/en-US/docs/Glossary/HTTP_header) enables you to perform powerful actions on the network. A [request header](https://developer.mozilla.org/en-US/docs/Glossary/Request_header) can be used to indicate the format of the response (e.g. the Accept-* headers), set authentication tokens, read adn write cookies (sensitive information), modify the user agent, etc.  A [response header](https://developer.mozilla.org/en-US/docs/Glossary/Response_header) can be used to provide more context of the message being sent. 

<!-- Notes -->
<!-- * [HTTP header](https://developer.mozilla.org/en-US/docs/Glossary/HTTP_header) - 
* [Request header](https://developer.mozilla.org/docs/Glossary/Request_header) - Short introduction to request headers, which is one type of HTTP header, at MDN Web Docs.
* [Response header](https://developer.mozilla.org/en-US/docs/Glossary/Response_header) - specification of the response
- can modify user agent
- can set type of content you accept as part of your request
- can set authorization header, cache control headers
- a lot of apps have their own custom headers that they used to identify. so the server will know that it's a WV using that custom header  or will provide that extra info with that custom header.  -->

### How your host app, the WebView2 control, and the HTTP server interact

The WebView2 control sits in between your host app and the HTTP server.  When your host app navigates to a URI, the WebView2 control sends a request to the HTTP server.  The HTTP server then sends a response to the WebView2 control. 

### Why would you want to intercept requests that are sent from WebView2?  

<!-- DEV TODO: Add more examples here -->
Intercepting requests sent from WebView2 enables you to further configure your request. The host app might want to provide optional content as part of the request that the WebView2 control won't know on its own. Some sceanrios include:
*  You're logging into a page and the app has credentials so the app can provide authentication header without the user having to enter those credentials.  
*  You want offline functionality in the app so you redirect <!-- TODO: something --> to a local file path when no internet connection is detected.
*  You want to upload local file content to your app so you change the HTTP URL to a local file <!-- DEV TODO: validate this -->


<!-- ====================================================================== -->
## Example: Intercepting a request (to monitor or modify it)
<!-- ## Example: Header modification when making a request -->

<!-- note: the below intro is based on copying the main h2's Sentence 1 from above: -->
In the following example, the host app _intercepts_ (receives) a request that is sent from the WebView2 control to the HTTP server, read or modify the request, and then sends the unchanged or modified request to the HTTP server (or to local code instead of the HTTP server). Intercepting the request allows you to customize the header content, URL, or the GET/POST method. The host app may want to intercept a request to provide optional content as part of the request that the WebView2 control does not know about.


<!-- DEV TODO: provide sample -->


<!-- Notes -->
<!-- If you want to read or modify cookies, don't use this API or article; a separate API covers that scenario.
As another supported scenario, your host app can send some content as part of a request that the WebView2 control doesn't have on its own.   -->
<!-- Why would you want to do this?
* you may want to change the url to something -- ex. apps will add something to 
* e.g. you're navigating to a.com, the app doesn't want those to be served from a.com but wants to be served from b.com so it can do a bulk redirect all those URLs to the other URL
* domain part is useful for path part...
* local file example: you change the request from HTTP URL to a file URL. You are intercepting the request (request to remote http URL and you're resetting the request and pointing to the file URL)
* content in app doesn't know it's making request to local, thinks making reqest to remote path
* app knows what you want and serves it locally
* Offline functionality: you have a dedicated app for. what you do is save that online page locally and then when there's no internet connection, detect that and then in that case attach the web resource requested handler and redirect to local file path. B/c remote path will fail but content inside will still think it's the remote path b/c when you save the page locally it doesn't magically change the local resource like the references of that page. Like if you saev bing.com locally those resources inside bing.com will still point to bing.com, they won't point to file: so app has to do that, look at those requests and change them to be locally
*  What's a "request"?
*  What's a "web resource request"?
*  What's a "web resource"?
*  What's a "response", and when are they used?
*  There are three main APIs involved
*  Add
   * [ICoreWebView2::add_WebResourceRequested](/microsoft-edge/webview2/reference/win32/icorewebview2#add_webresourcerequested) - Adds an event handler for the WebResourceRequested event.
*  Remove
   * [ICoreWebView2::remove_WebResourceRequested](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_webresourcerequested) - Removes an event handler.
*   Lets you customize network request handling of sending requests and responses.
*  You can add/provide your own custom response.
*  Navigate (Not a navigation event) `NavigateWithWebResourceRequest` is special cases advanced, beyond Basic Auth, to modify the headers to be able to better/custom interact with the network.
*   Can also use this to manage navigation
*   Why/when is this API useful?
    o   Can run WebView2 offline.
    o   Allows host app to change/provide response to request.
    o   Instead of going through network, can go through the app.
    o   A core piece of API that lets you do almost anything (need specific examples) with WebView2.
    o   Allows developer to provide content that it gets from WV2 
        *   Local content.
        *   Service worker is being worked on currently.
    o   Providing content.
*  If you don't use this API, you won't be able to fine-tune requests.
    o   This API lets you support custom authentication scenarios.
    o   Use this API for anything network related that you need to fine tune.
*   Image replacing example. -->

<!-- ====================================================================== -->
## 2. Overriding a request (to proactively replace it)

Your host app can _override_ (ignore) a request that's sent from the WebView2 control to the HTTP server, and send a custom request to the HTTP server instead of the original request.
<!--DEV TODO: Explain how and insert example here-->

<!-- ====================================================================== -->
## 3. Intercepting a response (to monitor or modify it)

Your host app can _intercept_ (receive) a response that's sent from the HTTP server to the WebView2 control, read or modify the response, and then send a custom response to the WebView2 control instead of the original response.
<!--DEV TODO: Explain how and insert example here-->

<!-- ====================================================================== -->
## 4. Overriding a response (to proactively replace it)
<!-- Overriding and providing new responses to WebView2 -->
<!-- ## Overriding the response and providing a different, custom response to the WebView2 control -->

By default the HTTP server sends responses to the WebView2 control. Your host app can _override_ (ignore) a response that's sent from the HTTP server to the WebView2 control, and send a custom response to the WebView2 control instead of the original response.
<!-- DEV TODO: identify the technical difference between overriding a request vs. a response; when to override a request vs. response -->

<!-- Notes

*  Your host app can override a response and and provide a new response to the WebView2 control.

*  By default, the HTTP server sends a response to the WebView2 control.

*  The host app can override the response and provide a different, custom response to the WebView2 control.*

*  Override to serve content offline, the recommended way should be to changing URL to file URL.

*  Technical difference in doing it by request vs. response.

*  Intercept and override.

*  Can change the URL to the file URL and then the WebView will read the content itself or you could override the response which means the app reads the file and then just provides the response to the WebView. That's the difference. In sample app, do the latter one. We override the response to read locally.

*  If you intercept request, directing the WebView2 control to local file.  If intercepting response, you're providing the response with the local file.

*  In the response case: give the WebView2 control a content stream, which is the response, and so basically you read the local file to a stream, and then you just pass it to the WebView2 control and then the WebView2 control has.

*  Modifying URL is easier -- less code than reading the content and passing it as a response. But the latter is more correct, because when you change the URL, you can also be changing the origin, and that matters.  Cannot have cross-origin resources in the same document.  And normally the document, like the resources, are in the same origin, and if you change URL, that might cause those two resources to become cross-origin.

*  For basic scenarios like reading from disk, modifying URL is fine, but if you want to construct more complex responses, the app needs to construct them.  For example, the host app wants to construct a dynamic (time or day) response, such as providing a dynamic key or something to a XHR request from the WebView2 control. You want the host app to provide this, because it cannot be done by modifying the URL. If the response is dynamic (not on disk and needs to be generated dynamically), do a custom response.

*  Changing URL is simpler, but constructing response provides more fine control.

*  Tradeoff: The simpler way gives you less control and less flexibility.  The more complicated way is harder to do, but gives you more flexibility and control.

*  Intercepting vs. overriding: Intercepting is you something and then you modify it.  Overriding is you discard the actual thing and you provide something new, and it's actually different, because the request object is already pre-populated with the original request that the host app can go and modify.  But the response object the app has to create from scratch.

*  Intercepting: you're the guy in the middle: there's a request sent and you're in the middle.  You take it and then you change it, or you read it and let it pass across.

*  Overriding: you throw it away.  You override before you get the actual response.   Event doesn't get until actual response comes.
-->


<!-- ====================================================================== -->
## Recommendations and best practices

### The recommended way of overriding for request vs. response

<!-- applies to both the Request & Response h2 scenarios above -->

<!--DEV TODO: clarify what we are trying to call out here -->

* A simple scenario that's supported is reading from a local file.  Your host app can modify the resource URI to instead be a file URI that points to a local resource.

* Dynamic content (proactively ignoring and overriding the response).  For example, suppose a resource needs user input; the request gets constructed as soon as it gets user input.

* Simple cases: Simple cases of reading form local file, can modify request url to be a file URL (pointing to this resource). Entails offline file serving from file -- use the request. change the URL to request.

* Complicated cases: Dynamic content you override response.  Resource needs user input, request gets constructed once it gets user input.


<!-- ====================================================================== -->
## Constructing a custom request and navigating using that request
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

This is an existing example in the Win32 sample app.

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
## Monitoring the actual (resulting) custom requests and responses

<!-- DEV TODO: define what "actual request" means, in terms of early/late & the 3 actors (host app, wv2 ctrl, http server) - here it means the request which is finally received by the HTTP server or the host app (confirm) -->


### Monitoring the resulting custom requests
The request in the `WebResourceRequested` event is preliminary; the WebView2 network stack and the host app can add more headers before they are sent (for example, cookie header), but the `WebResourceResponseReceived` event has the actual request that was sent and the actual response that was received. After the `WebResourceRequested` event is sent the request object is not finalized until the `WebResourceResponseReceived` event is fired. 

### Monitoring the resulting custom responses
<!-- DEV TODO: Fill in how monitoring works for custom responses -->


<!-- Notes -->
<!-- 
The `WebResourceRequested` event lets your host app change the request.  In this case, the request object isn't finalized yet, so your host app can or the network stack can add [headers].  After the request is sent, ... received.  Then we know at that time what the actual request that's sent is.
*  The `WebResourceRequested` event is fired before the actual request is sent.
*  The `WebResourceResponseReceived` event is fired after the response is received.
*  The headers are not finalized, so the app can change the headers, when the response event is fired.
*  The response event is fired by the the WebView2 control.
*  You can use this opportunity to provide custom ... to see the finalized headers.  
*  The authorization header is one of the headers that gets set by the network stack after the `webResourceRequested` event fires.
 -->


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
