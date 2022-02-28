---
title: Basic authentication for WebView2 apps
description: Basic authentication for WebView2 apps, including the sequence of authentication and navigation steps to retrieve a webpage from an HTTP server, with a WebView2 control instance acting as intermediary between the host app and the HTTP server.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 10/28/2021
---
# Basic authentication for WebView2 apps
<!-- todo:
Find and resolve any green HTML comments-questions.
Find "todo" in this file. -->

Handle basic auth'n
1. fooing the bar
1. barring the foo
1. checking 


_Basic authentication_ is an authentication approach that's part of the HTTP protocol.

![The Microsoft Edge WebView2 Navigation Authentication Flow.](../media/navigation-auth-graph.png)
<!-- see "Image maintenance notes" below -->


<!-- ====================================================================== -->
## The order of navigation events

The order of navigation events: The basic authentication event happens in the middle of the events sequence, which is:

1. `NavigationStarting` - navigation event
1. `ContentLoading` - navigation event
1. `BasicAuthenticationRequested`
1. `DOMContentLoaded`
1. `NavigationCompleted` - navigation event


<!-- ====================================================================== -->
## Actors in the chain of events: HTTP server, WebView2 control, and host app

*  The **HTTP server**.  Checks authentication and conditionally returns an error document or the requested webpage/document.
*  The **WebView2 control** instance raises the events.  It sits between the HTTP Server & the host app.  It communicates with the HTTP Server and with the app, as an intermediary.
*  The **host app** - sets the user name and pw on the the event's arguments (`eventsargs`) response objects.


<!-- ====================================================================== -->
## Detailed sequence of events end-to-end

1. The host app tells the WebView2 control to navigate to a URL.  (upper left box of old diagram)

1. The WebView2 control talks to the HTTP Server requesting to get the document at a specified URL.

1. The HTTP Server replies to the WebView2 control saying can't get the url/doc w/o auth'n

1. The WebView2 control tells host app "auth is needed" (which is the `BasicAuthnReq'd` event)

1. The host app responds to that event by providing the uname & pw to the WebView2 control.

1. The WebView2 control repeats: the WebView2 control again requests the URL from the HTTP Server, but this time with the authenticatin (username & password) (box of old diagram: top middle).

1. The HTTP Server might not like the uname & pw, might tell wv "you can't get that url".

1. Repeat the left navigation "leg" , nothing at all is different than the first time.

   Now to head down the middle or right subpaths into the right-hand leg (in terms of the old diagram):

1. The HTTP Server accepts the authentication credentials and returns the requested document | the HTTP Server denies the authentication and returns an error page document.

1. The WebView2 control renders the returned document (marked by the `ContentLoading` event and `DOMContentLoaded` event).


<!-- ====================================================================== -->
## Example code: App providing auth'n () username and pw) that's is known ahead of time

The following sample was created by expanding the sample [WebView2APISample repo > ScenarioAuthentication.cpp](https://github.com/MicrosoftEdge/WebView2Samples/blob/d78d86f1646b6c652908f1e4bc2b64950f05ca0a/SampleApps/WebView2APISample/ScenarioAuthentication.cpp), from the WebView2Samples repo.

That sample contains the following relevant code:

<!-- ------------------------------ -->
# [C++](#tab/cpp)

```cpp
if (auto webView10 = m_webView.try_query<ICoreWebView2_10>())
{
   CHECK_FAILURE(webView10->add_BasicAuthenticationRequested(
      Callback<ICoreWebView2BasicAuthenticationRequestedEventHandler>(
            [this](
               ICoreWebView2* sender,
               ICoreWebView2BasicAuthenticationRequestedEventArgs* args)
            {
               wil::com_ptr<ICoreWebView2BasicAuthenticationResponse> basicAuthenticationResponse;
               CHECK_FAILURE(args->get_Response(&basicAuthenticationResponse));
               CHECK_FAILURE(basicAuthenticationResponse->put_UserName(L"user"));
               CHECK_FAILURE(basicAuthenticationResponse->put_Password(L"pass"));

               return S_OK;
            })
            .Get(),
      &m_basicAuthenticationRequestedToken));
}
else
{
   FeatureNotAvailable();
}
```
<!-- ------------------------------ -->
# [C#](#tab/csharp)


```csharp
    webView.CoreWebView2.BasicAuthenticationRequested += delegate (
       object sender, 
       CoreWebView2BasicAuthenticationRequestedEventArgs args)
    {
        args.Response.UserName = "user";
        args.Response.Password = "pass";
    };
```

---
<!-- end of tab-set -->

The above code isn't realistic, because:

*  In practice, you'd prompt the user for the username and password rather than hardcoding them like `"user"` and `"pass"` in the listing above.
*  The above code is synchronous, but you'd probably use asynchronous code instead, as shown below.


<!-- ====================================================================== -->
## Example code: App prompts user for authn credentials (uname/pw) 

The following code adds to the above sample, by adding the following features, using `ICoreWebView2_10.add_BasicAuthenticationRequested` (in the case of C++):
*  Prompt the user for UI to enter their username and password.
*  Call the `getDeferral()` method on the `event` argument.


<!-- ------------------------------ -->
# [C++](#tab/cpp)


```cpp
    if (auto webView10 = m_webView.try_query<ICoreWebView2_10>())
    {
        CHECK_FAILURE(webView10->add_BasicAuthenticationRequested(
            Callback<ICoreWebView2BasicAuthenticationRequestedEventHandler>(
                [this](
                    ICoreWebView2* sender,
                    ICoreWebView2BasicAuthenticationRequestedEventArgs* argsRaw)
                {
                    // Make a smart pointer copy of the event args so we can take it
                    // into our lambda below.
                    wil::com_ptr<ICoreWebView2BasicAuthenticationRequestedEventArgs>
                        args = argsRaw;

                    // We need to show UI asynchronously so we obtain a deferral.
                    // A deferral will delay the CoreWebView2 from
                    // examining the properties we set on the event args until
                    // after we call the Complete method asynchronously later.
                    // This gives us time to asynchronously show UI.
                    wil::com_ptr<ICoreWebView2Deferral> deferral;
                    CHECK_FAILURE(args->GetDeferral(&deferral));

                    HWND mainWindowHwnd = m_appWindow->GetMainWindow();

                    m_appWindow->RunAsync([args, deferral, mainWindowHwnd]()
                        {
                            wil::com_ptr<ICoreWebView2BasicAuthenticationResponse>
                                basicAuthenticationResponse;
                            CHECK_FAILURE(args->get_Response(&basicAuthenticationResponse));

                            wil::unique_cotaskmem_string uri;
                            CHECK_FAILURE(args->get_Uri(&uri));

                            wil::unique_cotaskmem_string challenge;
                            CHECK_FAILURE(args->get_Challenge(&challenge));

                            // When prompting the end user for authentication its important
                            // to show them the URI or origin of the URI that is requesting
                            // authentication so the end user will know who they are giving
                            // their username and password to.
                            std::wstring prompt = L"Authentication request from ";
                            prompt += uri.get();
                            // Its also important to display the challenge to the end user
                            // as it may have important site specific information for the
                            // end user to provide the correct username and password.
                            prompt += L"\r\nChallenge: ";
                            prompt += challenge.get(); 

                            // Use an app or UI framework method to get input from the end user.
                            TextInputDialog dialog(
                                mainWindowHwnd, 
                                L"Authentication Request",
                                L"User name and password",
                                prompt.c_str(),
                                L"username\r\npassword");
                            bool userNameAndPasswordSet = false;

                            if (dialog.confirmed)
                            {
                                const std::wstring& userNameAndPassword = dialog.input;
                                std::size_t separatorIdx = userNameAndPassword.find(L"\r\n");
                                if (separatorIdx != std::wstring::npos)
                                {
                                    std::wstring userName =
                                        userNameAndPassword.substr(0, separatorIdx);
                                    std::wstring password =
                                        userNameAndPassword.substr(separatorIdx + 2);

                                    basicAuthenticationResponse->put_UserName(userName.c_str());
                                    basicAuthenticationResponse->put_Password(password.c_str());

                                    userNameAndPasswordSet = true;
                                }
                            }

                            // If we didn't get a username and password from the end user then
                            // we cancel the authentication request and don't provide any
                            // authentication.
                            if (!userNameAndPasswordSet)
                            {
                                args->put_Cancel(TRUE);
                            }

                            // We've finished our asynchronous work and so we complete the
                            // deferral to let the CoreWebView2 know that we're done changing
                            // values on the event args.
                            deferral->Complete();
                        });

                    return S_OK;
                })
                .Get(),
            &m_basicAuthenticationRequestedToken));
    }
    else
    {
        FeatureNotAvailable();
    }
```

APIs used above:

* [ICoreWebView2BasicAuthenticationRequestedEventArgs](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2basicauthenticationrequestedeventargs)
   * `get_Cancel` - Cancel the authentication request.  (not used above)
   * `put_Cancel` - Set the `Cancel` property.
   * `get_Challenge` - The authentication challenge string.
   * `get_Response` - Response to the authentication request with credentials.
   * `get_Uri` - The URI that led to the authentication challenge.
   * `GetDeferral` - Returns an `ICoreWebView2Deferral` object.



<!-- ------------------------------ -->
# [C#](#tab/csharp)


```csharp
// put code here
```


---
<!-- end of tab-set -->

   

<!-- ====================================================================== -->
## See also

*  [HTTP authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication) at MDN.


<!-- ====================================================================== -->
## Draft Notes, largely based on old, dual-leg diagram

To build basic authentication into your WebView2 app:

1. Do X.  Set up a, b, & c.

1. Do Y.  Test for success/fail event.

1. Do Z.  Handle success event.  Handle failure event.

An HTTP Server may require HTTP authentication.  In this case, there is a _first navigation_, which has the navigation events that are listed above.  The HTTP Server returns a 401 or 407 HTTP response, and so the `NavigationCompleted` event has a corresponding failure.  The WebView2 then renders a blank page, and raise the `BasicAuthenticationRequested` event, which will potentially prompt the user for credentials.

If the `BasicAuthenticationRequested` event is cancelled, then there is no subsequent navigation and the WebView2 will remain displaying the blank page.

If the `BasicAuthenticationRequested` event isn't cancelled, the WebView2 will perform the initial navigation again, but this time using any provided credentials and you will again see all the same navigation events listed above.


Left nav'n leg of old diagram:  If the credentials are not accepted by the HTTP server, and navigation fails again with 401 or 407~~.  In that case, the `CoreWebView2` class instance again raises the `BasicAuthenticationRequested` event, and navigation continues as above.


Right nav'n leg of old diagram:  
If the credentials are accepted by the HTTP server, or if the HTTP Server denies authentication with an error page, the navigation may succeed or fail.


As a part of navigation, thewebview2 will render the corresponding page, and a "success" or "failure" outcome raises a successful or failed `NavigationCompleted` event.

The navigations ("leg" of events) before and after the `BasicAuthenticationRequested` event are distinct navigations ("leg" of events) and have distinct navigation IDs.

nav events args has a property: the nav id.  it ties together nav events that corresp to 1 nav'n.  the nav id remains same during __ retry?  during hte next run through the event flow, a different nav ID is used.  Each time we start at navigation starting, 


A _navigation_ corresponds to multiple navigation events.

by _navigation_, we here mean each retry, starting with the NavigationStarting box, through the NavigationCompleted box.  


outdated wording: A new nav'n begins, with a new navID.  for this nav'n, the HTTP Server gave the WebView2 control a document.  This is the "have document" navigation.


Notes for old diagram:
name for the left-hand leg: the "server requested authentication" leg/navigation
name for the right-hand leg: the "server gave the WebView2 control a document" leg/navigation (case middle: the document is the req'd doc.  case right: the doc is an error page).

when reach bottom left "navcomp", that means you accomplished __  the server has asked for auth'n and we need to try the navigation again (tat will have a new navid)  , using whatever the host app gets from the events arguments response objects.

when reach bottom right "navcomp", that means you accomplished __


<!-- ====================================================================== -->
<!-- Image maintenance notes (keep)
todo: Add callouts (numbers) to each arrow to help communicate the sequence.
todo in a later PR: re-create the below image in Visio, and store the .vsd file in Teams > Files, and describe the .vsd location here.

Source location for the image:
reliable approach: paste the following code listing into https://edotor.net:

Paste this code into site, see if the resulting diagram matches the diagram in this article:

```edotor
# https://edotor.net/
digraph g {
    fontname="Helvetica";
    labeljust=l;
    node [shape="box", fontname="Sans-Serif"]
    edge [fontname="Arial"]
    {
        rank = same;
        Start [label="WebView2 navigates to\nURI requiring basic\nauthentication"]
        Retry [label="WebView2 navigates to\nsame URI with\nBasicAuthentication-\nRequested result"]
    }
    NavigationStarting0 [label="NavigationStarting\nevent"];
    ContentLoading0 [label="ContentLoading\nevent"];
    BasicAuthenticationRequested0 [label="BasicAuthentication-\nRequested event"];
    {
        rank = same;
        DOMContentLoaded0 [label="DOMContentLoaded\nevent"];
        DOMContentLoaded1 [label="DOMContentLoaded\nevent"];
    }
    NavigationCompleted0 [label="NavigationCompleted\nevent\n(blank page)"];
    NavigationCompleted1 [label="NavigationCompleted\nevent\n(rendered server\ndocument)"];
    NavigationStarting0 -> ContentLoading0;
    ContentLoading0 -> BasicAuthenticationRequested0 [label="Server requests\nauthentication"];
    ContentLoading0 -> DOMContentLoaded1 [label="Server accepts\nauthentication\nwith document"];
    ContentLoading0 -> DOMContentLoaded1 [label="Server denies\nauthentication\nwith error page"];
    DOMContentLoaded1 -> NavigationCompleted1;
    BasicAuthenticationRequested0 -> DOMContentLoaded0 -> NavigationCompleted0;
    BasicAuthenticationRequested0;
    Start -> NavigationStarting0;
    NavigationStarting0 -> Retry [style=invis];
    NavigationCompleted0 -> Retry;
    Retry -> NavigationStarting0;
}
```

Beware of clicking this link: it might become too long and be invalid.
Try this URL, compare to the .png diagram:
If possible, it's the URL that attempts to express the above code listing; it's the resulting URL from the above image-definition code:
https://edotor.net/?
https://edotor.net/?engine=dot#digraph%20g%20%7B%0A%20%20%20%20fontname%3D%22Helvetica%22%3B%0A%20%20%20%20labeljust%3Dl%3B%0A%20%20%20%20node%20%5Bshape%3D%22box%22%2C%20fontname%3D%22Sans-Serif%22%5D%0A%20%20%20%20edge%20%5Bfontname%3D%22Arial%22%5D%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20rank%20%3D%20same%3B%0A%20%20%20%20%20%20%20%20Start%20%5Blabel%3D%22WebView2%20navigates%20to%5CnURI%20requiring%20basic%5Cnauthentication%22%5D%0A%20%20%20%20%20%20%20%20Retry%20%5Blabel%3D%22WebView2%20navigates%20to%5Cnsame%20URI%20with%5CnBasicAuthentication-%5CnRequested%20result%22%5D%0A%20%20%20%20%7D%0A%20%20%20%20NavigationStarting0%20%5Blabel%3D%22NavigationStarting%5Cnevent%22%5D%3B%0A%20%20%20%20ContentLoading0%20%5Blabel%3D%22ContentLoading%5Cnevent%22%5D%3B%0A%20%20%20%20BasicAuthenticationRequested0%20%5Blabel%3D%22BasicAuthentication-%5CnRequested%20event%22%5D%3B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20rank%20%3D%20same%3B%0A%20%20%20%20%20%20%20%20DOMContentLoaded0%20%5Blabel%3D%22DOMContentLoaded%5Cnevent%22%5D%3B%0A%20%20%20%20%20%20%20%20DOMContentLoaded1%20%5Blabel%3D%22DOMContentLoaded%5Cnevent%22%5D%3B%0A%20%20%20%20%7D%0A%20%20%20%20NavigationCompleted0%20%5Blabel%3D%22NavigationCompleted%5Cnevent%5Cn(blank%20page)%22%5D%3B%0A%20%20%20%20NavigationCompleted1%20%5Blabel%3D%22NavigationCompleted%5Cnevent%5Cn(rendered%20server%5Cndocument)%22%5D%3B%0A%20%20%20%20NavigationStarting0%20-%3E%20ContentLoading0%3B%0A%20%20%20%20ContentLoading0%20-%3E%20BasicAuthenticationRequested0%20%5Blabel%3D%22Server%20requests%5Cnauthentication%22%5D%3B%0A%20%20%20%20ContentLoading0%20-%3E%20DOMContentLoaded1%20%5Blabel%3D%22Server%20accepts%5Cnauthentication%5Cnwith%20document%22%5D%3B%0A%20%20%20%20ContentLoading0%20-%3E%20DOMContentLoaded1%20%5Blabel%3D%22Server%20denies%5Cnauthentication%5Cnwith%20error%20page%22%5D%3B%0A%20%20%20%20DOMContentLoaded1%20-%3E%20NavigationCompleted1%3B%0A%20%20%20%20BasicAuthenticationRequested0%20-%3E%20DOMContentLoaded0%20-%3E%20NavigationCompleted0%3B%0A%20%20%20%20BasicAuthenticationRequested0%3B%0A%20%20%20%20Start%20-%3E%20NavigationStarting0%3B%0A%20%20%20%20NavigationStarting0%20-%3E%20Retry%20%5Bstyle%3Dinvis%5D%3B%0A%20%20%20%20NavigationCompleted0%20-%3E%20Retry%3B%0A%20%20%20%20Retry%20-%3E%20NavigationStarting0%3B%0A%7D%0A
-->
