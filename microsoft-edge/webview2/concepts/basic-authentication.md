---
title: Basic authentication for WebView2 apps
description: 
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 10/28/2021
---
# Basic authentication for WebView2 apps

<!--
find "todo" in this file.

todo:
Update the diagram.
Add more example code.
Find and resolve HTML comments.
-->

_Basic authentication_ is an authentication approach that's part of the HTTP protocol.

To build basic authentication into your WebView2 app:

1. Do X.  Set up a, b, & c.

1. Do Y.  Test for success/fail event.

1. Do Z.  Handle success event.  Handle failure event.

An HTTP server may require [HTTP authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication). In this case there is a first navigation with all the same navigation events listed above. The HTTP server returns a 401 or 407 HTTP response and so the NavigationCompleted event has a corresponding failure. The WebView2 will then render a blank page and raise the `BasicAuthenticationRequested` event which will potentially prompt the end user for credentials.

If the `BasicAuthenticationRequested` event is cancelled, then there is no subsequent navigation and the WebView2 will remain displaying the blank page.

If the `BasicAuthenticationRequested` event isn't cancelled, the WebView2 will perform the initial navigation again, but this time using any provided credentials and you will again see all the same navigation events listed above.

If the credentials are not accepted by the HTTP server, the navigation may fail again with 401 or 407.  In that case, we<!--todo: define "we": the WebView2 framework? the example code below, that you add to your WebView2 app?--> again raise the `BasicAuthenticationRequested` event and continue as above.

Otherwise, the navigation may succeed or fail as usual, sending to your app a successul or failed `NavigationCompleted` event, along with the <!--ID of the?--> WebView2 <!-- instance?--> rendering the corresponding page.

The navigations<!--nav events?--> before and after the `BasicAuthenticationRequested` event are distinct navigations<!--nav events?--> and have distinct navigation IDs.
A _navigation_ corresponds to multiple navigation events.

<!--
keep this image-maintenance note:
Source location for the image:

reliable approach: paste the following code listing into https://edotor.net:

```edotor
# https://edotor.net/
digraph g {
   fontname="Helvetica";
   labeljust=l;
   node [shape="box", fontname="Sans-Serif"]
   edge [fontname="Sans-Serif", fontsize="10"]

   Navigation;
   PromptForCreds [label="BasicAuthentication-\nRequested event"];
   BlankPage [label="Blank page"]
   Destination;

   Navigation -> PromptForCreds [label="Authentication\nrequired\n401 or 407"]


   PromptForCreds -> Navigation [label="Credentials\nprovided"]
   PromptForCreds -> BlankPage [label="  Authentication\nCancelled"]
   Navigation -> Destination [label="Other HTTP status"]
}
```

Beware of clicking this link: it might become too long and be invalid.
If possible, it's the URL that attempts to express the above code listing; it's the resulting URL from the above image-definition code:
Most of this URL is wrapped by a single {} pair; watch for the presence of the ending brace:
https://edotor.net/?engine=dot#%23%20https:%2F%2Fedotor.net%2F%0Adigraph%20g%20{%0A%09fontname%3D%22Helvetica%22%3B%0A%09labeljust%3Dl%3B%0A%09node%20[shape%3D%22box%22%2C%20fontname%3D%22Sans-Serif%22]%0A%09edge%20[fontname%3D%22Sans-Serif%22%2C%20fontsize%3D%2210%22]%0A%0A%09Navigation%3B%0A%09PromptForCreds%20[label%3D%22BasicAuthentication-%5CnRequested%20event%22]%3B%0A%09BlankPage%20[label%3D%22Blank%20page%22]%0A%09Destination%3B%0A%0A%09Navigation%20-%3E%20PromptForCreds%20[label%3D%22Authentication%5Cnrequired%5Cn401%20or%20407%22]%0A%0A%0A%09PromptForCreds%20-%3E%20Navigation%20[label%3D%22Credentials%5Cnprovided%22]%0A%09PromptForCreds%20-%3E%20BlankPage%20[label%3D%22%20%20Authentication%5CnCancelled%22]%0A%09Navigation%20-%3E%20Destination%20[label%3D%22Other%20HTTP%20status%22]%0A}
-->

<!--
todo: In the diagram, break up the Navigation box, and check /indicate the order of nav events, the basic authentication event happens in the middle of the events sequence, which is:

1. `NavigationStarting` <-- nav event, include in diagram
1. `SourceChanged` <-- omit from diagram
1. `ContentLoading` <-- nav event, include
1. `HistoryChanged` <-- omit
1. `BasicAuthenticationRequested` <-- not a nav event, but include in diagram
1. `DOMContentLoaded` <-- not a nav event, but include in diagram
1. `NavigationCompleted`  <-- nav event include

Add callouts (numbers) to each arrow to help communicate the sequence.
-->

![The Microsoft Edge WebView2 Navigation Authentication Flow.](../media/navigation-auth-graph.png)

<!-- ====================================================================== -->
## Example code

<!--
todo:
is this a public URL?  If not, is there a public URL containing this listing?
The following sample was created by expanding the sample [WebView2APISample > ScenarioAuthentication.cpp](https://dev.azure.com/microsoft/Edge/_search?text=BasicAuthenticationRequested%20path:third_party/edge_webview2/win/WebView2APISample&type=code&pageSize=25&filters=ProjectFilters{Edge}&action=contents&includeFacets=false&result=DefaultCollection/Edge/chromium.src/GBmain//third_party/edge_webview2/win/WebView2APISample/ScenarioAuthentication.cpp).
<!-- the search-field string that produced the above url:
`BasicAuthenticationRequested` path:third_party/edge_webview2/win/WebView2APISample - Search Code - Search (azure.com)
The root url with some info is: https://dev.azure.com/microsoft/Edge
-->

That sample contains the following relevant code:

```cpp
// Copyright (C) Microsoft Corporation. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
#include "ScenarioAuthentication.h"

//! [BasicAuthenticationRequested]
if (auto webView10 = m_webView.try_query<ICoreWebView2_10>())
{
   CHECK_FAILURE(webView10->add_BasicAuthenticationRequested(
      Callback<ICoreWebView2BasicAuthenticationRequestedEventHandler>(
            [this](
               ICoreWebView2* sender,
               ICoreWebView2BasicAuthenticationRequestedEventArgs* args) {
               wil::com_ptr<ICoreWebView2BasicAuthenticationResponse> basicAuthenticationResponse;
               CHECK_FAILURE(args->get_Response(&basicAuthenticationResponse));
               CHECK_FAILURE(basicAuthenticationResponse->put_UserName(L"user"));
               CHECK_FAILURE(basicAuthenticationResponse->put_Password(L"pass"));

               return S_OK;
            })
            .Get(),
      &m_basicAuthenticationRequestedToken));
}
else {
   FeatureNotAvailable();
}
//! [BasicAuthenticationRequested]
```

The following code adds to that sample, by adding the following features:
*  Prompt the user for UI. <!-- what ui to do what?-->
*  Call the `getDeferral()` method on the `event` argument.

```cpp
// todo: Prompt the user for the xyz UI to do xyz.

// todo: Call the `getDeferral()` method on the `event` argument.

```
