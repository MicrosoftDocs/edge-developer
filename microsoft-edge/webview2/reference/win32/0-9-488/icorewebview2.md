---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: 0.9.515 - WebView2 Win32 C++ ICoreWebView2
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/20/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html
---

# 0.9.515 - interface ICoreWebView2 

[!INCLUDE [deprecation-note](../../includes/deprecation-note.md)]

```
interface ICoreWebView2
  : public IUnknown
```

WebView2 enables you to host web content using the latest Edge web browser technology.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[add_ContainsFullScreenElementChanged](#add_containsfullscreenelementchanged) | Notifies when the ContainsFullScreenElement property changes.
[add_ContentLoading](#add_contentloading) | Add an event handler for the ContentLoading event.
[add_DocumentTitleChanged](#add_documenttitlechanged) | Add an event handler for the DocumentTitleChanged event.
[add_FrameNavigationCompleted](#add_framenavigationcompleted) | Add an event handler for the FrameNavigationCompleted event.
[add_FrameNavigationStarting](#add_framenavigationstarting) | Add an event handler for the FrameNavigationStarting event.
[add_HistoryChanged](#add_historychanged) | HistoryChange listen to the change of navigation history for the top level document.
[add_NavigationCompleted](#add_navigationcompleted) | Add an event handler for the NavigationCompleted event.
[add_NavigationStarting](#add_navigationstarting) | Add an event handler for the NavigationStarting event.
[add_NewWindowRequested](#add_newwindowrequested) | Add an event handler for the NewWindowRequested event.
[add_PermissionRequested](#add_permissionrequested) | Add an event handler for the PermissionRequested event.
[add_ProcessFailed](#add_processfailed) | Add an event handler for the ProcessFailed event.
[add_ScriptDialogOpening](#add_scriptdialogopening) | Add an event handler for the ScriptDialogOpening event.
[add_SourceChanged](#add_sourcechanged) | SourceChanged fires when the Source property changes.
[add_WebMessageReceived](#add_webmessagereceived) | This event fires when the IsWebMessageEnabled setting is set and the top level document of the webview calls `window.chrome.webview.postMessage`.
[add_WebResourceRequested](#add_webresourcerequested) | Add an event handler for the WebResourceRequested event.
[add_WindowCloseRequested](#add_windowcloserequested) | Add an event handler for the WindowCloseRequested event.
[AddHostObjectToScript](#addhostobjecttoscript) | Add the provided host object to script running in the WebView with the specified name.
[AddScriptToExecuteOnDocumentCreated](#addscripttoexecuteondocumentcreated) | Add the provided JavaScript to a list of scripts that should be executed after the global object has been created, but before the HTML document has been parsed and before any other script included by the HTML document is executed.
[AddWebResourceRequestedFilter](#addwebresourcerequestedfilter) | Adds a URI and resource context filter to the WebResourceRequested event.
[CallDevToolsProtocolMethod](#calldevtoolsprotocolmethod) | Call an asynchronous DevToolsProtocol method.
[CapturePreview](#capturepreview) | Capture an image of what WebView is displaying.
[ExecuteScript](#executescript) | Execute JavaScript code from the javascript parameter in the current top level document rendered in the WebView.
[get_BrowserProcessId](#get_browserprocessid) | The process id of the browser process that hosts the WebView.
[get_CanGoBack](#get_cangoback) | Returns true if the webview can navigate to a previous page in the navigation history.
[get_CanGoForward](#get_cangoforward) | Returns true if the webview can navigate to a next page in the navigation history.
[get_ContainsFullScreenElement](#get_containsfullscreenelement) | Indicates if the WebView contains a fullscreen HTML element.
[get_DocumentTitle](#get_documenttitle) | The title for the current top level document.
[get_Settings](#get_settings) | The [ICoreWebView2Settings](icorewebview2settings.md) object contains various modifiable settings for the running WebView.
[get_Source](#get_source) | The URI of the current top level document.
[GetDevToolsProtocolEventReceiver](#getdevtoolsprotocoleventreceiver) | Get a DevTools Protocol event receiver that allows you to subscribe to a DevTools Protocol event.
[GoBack](#goback) | Navigates the WebView to the previous page in the navigation history.
[GoForward](#goforward) | Navigates the WebView to the next page in the navigation history.
[Navigate](#navigate) | Cause a navigation of the top level document to the specified URI.
[NavigateToString](#navigatetostring) | Initiates a navigation to htmlContent as source HTML of a new document.
[OpenDevToolsWindow](#opendevtoolswindow) | Opens the DevTools window for the current document in the WebView.
[PostWebMessageAsJson](#postwebmessageasjson) | Post the specified webMessage to the top level document in this WebView.
[PostWebMessageAsString](#postwebmessageasstring) | This is a helper for posting a message that is a simple string rather than a JSON string representation of a JavaScript object.
[Reload](#reload) | Reload the current page.
[remove_ContainsFullScreenElementChanged](#remove_containsfullscreenelementchanged) | Remove an event handler previously added with the corresponding add_ event method.
[remove_ContentLoading](#remove_contentloading) | Remove an event handler previously added with add_ContentLoading.
[remove_DocumentTitleChanged](#remove_documenttitlechanged) | Remove an event handler previously added with add_DocumentTitleChanged.
[remove_FrameNavigationCompleted](#remove_framenavigationcompleted) | Remove an event handler previously added with add_FrameNavigationCompleted.
[remove_FrameNavigationStarting](#remove_framenavigationstarting) | Remove an event handler previously added with add_FrameNavigationStarting.
[remove_HistoryChanged](#remove_historychanged) | Remove an event handler previously added with add_HistoryChanged.
[remove_NavigationCompleted](#remove_navigationcompleted) | Remove an event handler previously added with add_NavigationCompleted.
[remove_NavigationStarting](#remove_navigationstarting) | Remove an event handler previously added with add_NavigationStarting.
[remove_NewWindowRequested](#remove_newwindowrequested) | Remove an event handler previously added with add_NewWindowRequested.
[remove_PermissionRequested](#remove_permissionrequested) | Remove an event handler previously added with add_PermissionRequested.
[remove_ProcessFailed](#remove_processfailed) | Remove an event handler previously added with add_ProcessFailed.
[remove_ScriptDialogOpening](#remove_scriptdialogopening) | Remove an event handler previously added with add_ScriptDialogOpening.
[remove_SourceChanged](#remove_sourcechanged) | Remove an event handler previously added with add_SourceChanged.
[remove_WebMessageReceived](#remove_webmessagereceived) | Remove an event handler previously added with add_WebMessageReceived.
[remove_WebResourceRequested](#remove_webresourcerequested) | Remove an event handler previously added with add_WebResourceRequested.
[remove_WindowCloseRequested](#remove_windowcloserequested) | Remove an event handler previously added with add_WindowCloseRequested.
[RemoveHostObjectFromScript](#removehostobjectfromscript) | Remove the host object specified by the name so that it is no longer accessible from JavaScript code in the WebView.
[RemoveScriptToExecuteOnDocumentCreated](#removescripttoexecuteondocumentcreated) | Remove the corresponding JavaScript added via AddScriptToExecuteOnDocumentCreated.
[RemoveWebResourceRequestedFilter](#removewebresourcerequestedfilter) | Removes a matching WebResource filter that was previously added for the WebResourceRequested event.
[Stop](#stop) | Stop all navigations and pending resource fetches.
[COREWEBVIEW2_CAPTURE_PREVIEW_IMAGE_FORMAT](#corewebview2_capture_preview_image_format) | Image format used by the ICoreWebView2::CapturePreview method.
[COREWEBVIEW2_KEY_EVENT_KIND](#corewebview2_key_event_kind) | The type of key event that triggered an AcceleratorKeyPressed event.
[COREWEBVIEW2_MOVE_FOCUS_REASON](#corewebview2_move_focus_reason) | Reason for moving focus.
[COREWEBVIEW2_PERMISSION_KIND](#corewebview2_permission_kind) | The type of a permission request.
[COREWEBVIEW2_PERMISSION_STATE](#corewebview2_permission_state) | Response to a permission request.
[COREWEBVIEW2_PHYSICAL_KEY_STATUS](#corewebview2_physical_key_status) | A structure representing the information packed into the LPARAM given to a Win32 key event.
[COREWEBVIEW2_PROCESS_FAILED_KIND](#corewebview2_process_failed_kind) | Kind of process failure used in the ICoreWebView2ProcessFailedEventHandler interface.
[COREWEBVIEW2_SCRIPT_DIALOG_KIND](#corewebview2_script_dialog_kind) | Kind of JavaScript dialog used in the ICoreWebView2ScriptDialogOpeningEventHandler interface.
[COREWEBVIEW2_WEB_ERROR_STATUS](#corewebview2_web_error_status) | Error status values for web navigations.
[COREWEBVIEW2_WEB_RESOURCE_CONTEXT](#corewebview2_web_resource_context) | Enum for web resource request contexts.

## Navigation events

The normal sequence of navigation events is NavigationStarting, SourceChanged, ContentLoading and then NavigationCompleted.

![dot-inline-dotgraph-1.png](media/dot-inline-dotgraph-1.png)

Note that this is for navigation events with the same NavigationId event arg. Navigations events with different NavigationId event args may overlap. For instance, if you start a navigation wait for its NavigationStarting event and then start another navigation you'll see the NavigationStarting for the first navigate followed by the NavigationStarting of the second navigate, followed by the NavigationCompleted for the first navigation and then all the rest of the appropriate navigation events for the second navigation. In error cases there may or may not be a ContentLoading event depending on whether the navigation is continued to an error page. In case of an HTTP redirect, there will be multiple NavigationStarting events in a row, with ones following the first will have their IsRedirect flag set.

To monitor or cancel navigations inside subframes in the WebView, use FrameNavigationStarting.

## Process model

WebView2 uses the same process model as the Edge web browser. There is one Edge browser process per specified user data directory in a user session that will serve any WebView2 calling process that specifies that user data directory. This means one Edge browser process may be serving multiple calling processes and one calling process may be using multiple Edge browser processes.

![dot-inline-dotgraph-2.png](media/dot-inline-dotgraph-2.png)

Off of a browser process there will be some number of renderer processes. These are created as necessary to service potentially multiple frames in different WebViews. The number of renderer processes varies based on the site isolation browser feature and the number of distinct disconnected origins rendered in associated WebViews.

![dot-inline-dotgraph-3.png](media/dot-inline-dotgraph-3.png)

You can react to crashes and hangs in these browser and renderer processes using the ProcessFailure event.

You can safely shutdown associated browser and renderer processes using the Close method.

## Threading model

The WebView2 must be created on a UI thread. Specifically a thread with a message pump. All callbacks will occur on that thread and calls into the WebView must be done on that thread. It is not safe to use the WebView from another thread.

Callbacks including event handlers and completion handlers execute serially. That is, if you have an event handler running and begin a message loop no other event handlers or completion callbacks will begin executing reentrantly.

## Security

Always check the Source property of the WebView before using ExecuteScript, PostWebMessageAsJson, PostWebMessageAsString, or any other method to send information into the WebView. The WebView may have navigated to another page via the end user interacting with the page or script in the page causing navigation. Similarly, be very careful with AddScriptToExecuteOnDocumentCreated. All future navigations will run this script and if it provides access to information intended only for a certain origin, any HTML document may have access.

When examining the result of an ExecuteScript method call, a WebMessageReceived event, always check the Source of the sender, or any other mechanism of receiving information from an HTML document in a WebView validate the URI of the HTML document is what you expect.

When constructing a message to send into a WebView, prefer using PostWebMessageAsJson and construct the JSON string parameter using a JSON library. This will avoid any potential accidents of encoding information into a JSON string or script and ensure no attacker controlled input can modify the rest of the JSON message or run arbitrary script.

## String types

String out parameters are LPWSTR null terminated strings. The callee allocates the string using CoTaskMemAlloc. Ownership is transferred to the caller and it is up to the caller to free the memory using CoTaskMemFree.

String in parameters are LPCWSTR null terminated strings. The caller ensures the string is valid for the duration of the synchronous function call. If the callee needs to retain that value to some point after the function call completes, the callee must allocate its own copy of the string value.

## URI and JSON parsing

Various methods provide or accept URIs and JSON as strings. Please use your own preferred library for parsing and generating these strings.

If WinRT is available for your app you can use `RuntimeClass_Windows_Data_Json_JsonObject` and `IJsonObjectStatics` to parse or produce JSON strings or `RuntimeClass_Windows_Foundation_Uri` and `IUriRuntimeClassFactory` to parse and produce URIs. Both of these work in Win32 apps.

If you use IUri and CreateUri to parse URIs you may want to use the following URI creation flags to have CreateUri behavior more closely match the URI parsing in the WebView: `Uri_CREATE_ALLOW_IMPLICIT_FILE_SCHEME | Uri_CREATE_NO_DECODE_EXTRA_INFO`

## Debugging

Open DevTools with the normal shortcuts: `F12` or `Ctrl+Shift+I`. You can use the `--auto-open-devtools-for-tabs` command argument switch to have the DevTools window open immediately when first creating a WebView. See CreateCoreWebView2Controller documentation for how to provide additional command line arguments to the browser process. Check out the LoaderOverride registry key for trying out different builds of WebView2 without modifying your application in the CreateCoreWebView2Controller documentation.

## Versioning

After you've used a particular version of the SDK to build your app, your app may end up running with an older or newer version of installed browser binaries. Until version 1.0.0.0 of WebView2 there may be breaking changes during updates that will prevent your SDK from working with different versions of installed browser binaries. After version 1.0.0.0 different versions of the SDK can work with different versions of the installed browser by following these best practices:

To account for breaking changes to the API be sure to check for failure when calling the DLL export CreateCoreWebView2Environment and when calling QueryInterface on any CoreWebView2 object. A return value of E_NOINTERFACE can indicate the SDK is not compatible with the Edge browser binaries.

Checking for failure from QueryInterface will also account for cases where the SDK is newer than the version of the Edge browser and your app attempts to use an interface of which the Edge browser is unaware.

When an interface is unavailable, you can consider disabling the associated feature if possible, or otherwise informing the end user they need to update their browser.

## Members

#### add_ContainsFullScreenElementChanged 

Notifies when the ContainsFullScreenElement property changes.

> public HRESULT [add_ContainsFullScreenElementChanged](#add_containsfullscreenelementchanged)([ICoreWebView2ContainsFullScreenElementChangedEventHandler](icorewebview2containsfullscreenelementchangedeventhandler.md) * eventHandler, EventRegistrationToken * token)

This means that an HTML element inside the WebView is entering fullscreen to the size of the WebView or leaving fullscreen. This event is useful when, for example, a video element requests to go fullscreen. The listener of ContainsFullScreenElementChanged can then resize the WebView in response.

```cpp
    // Register a handler for the ContainsFullScreenChanged event.
    CHECK_FAILURE(m_webView->add_ContainsFullScreenElementChanged(
        Callback<ICoreWebView2ContainsFullScreenElementChangedEventHandler>(
            [this](ICoreWebView2* sender, IUnknown* args) -> HRESULT {
                if (m_fullScreenAllowed)
                {
                    CHECK_FAILURE(
                        sender->get_ContainsFullScreenElement(&m_containsFullscreenElement));
                    if (m_containsFullscreenElement)
                    {
                        EnterFullScreen();
                    }
                    else
                    {
                        ExitFullScreen();
                    }
                }
                return S_OK;
            })
            .Get(),
        nullptr));
```

#### add_ContentLoading 

Add an event handler for the ContentLoading event.

> public HRESULT [add_ContentLoading](#add_contentloading)([ICoreWebView2ContentLoadingEventHandler](icorewebview2contentloadingeventhandler.md) * eventHandler, EventRegistrationToken * token)

ContentLoading fires before any content is loaded, including scripts added with AddScriptToExecuteOnDocumentCreated ContentLoading will not fire if a same page navigation occurs (such as through fragment navigations or history.pushState navigations). This follows the NavigationStarting and SourceChanged events and precedes the HistoryChanged and NavigationCompleted events.

#### add_DocumentTitleChanged 

Add an event handler for the DocumentTitleChanged event.

> public HRESULT [add_DocumentTitleChanged](#add_documenttitlechanged)([ICoreWebView2DocumentTitleChangedEventHandler](icorewebview2documenttitlechangedeventhandler.md) * eventHandler, EventRegistrationToken * token)

The event fires when the DocumentTitle property of the WebView changes and may fire before or after the NavigationCompleted event.

```cpp
    // Register a handler for the DocumentTitleChanged event.
    // This handler just announces the new title on the window's title bar.
    CHECK_FAILURE(m_webView->add_DocumentTitleChanged(
        Callback<ICoreWebView2DocumentTitleChangedEventHandler>(
            [this](ICoreWebView2* sender, IUnknown* args) -> HRESULT {
                wil::unique_cotaskmem_string title;
                CHECK_FAILURE(sender->get_DocumentTitle(&title));
                SetWindowText(m_appWindow->GetMainWindow(), title.get());
                return S_OK;
            })
            .Get(),
        &m_documentTitleChangedToken));
```

#### add_FrameNavigationCompleted 

Add an event handler for the FrameNavigationCompleted event.

> public HRESULT [add_FrameNavigationCompleted](#add_framenavigationcompleted)([ICoreWebView2NavigationCompletedEventHandler](icorewebview2navigationcompletedeventhandler.md) * eventHandler, EventRegistrationToken * token)

FrameNavigationCompleted event fires when a child frame has completely loaded (body.onload has fired) or loading stopped with error.

```cpp
    // Register a handler for the FrameNavigationCompleted event.
    // Check whether the navigation succeeded, and if not, do something.
    CHECK_FAILURE(m_webView->add_FrameNavigationCompleted(
        Callback<ICoreWebView2NavigationCompletedEventHandler>(
            [this](ICoreWebView2* sender, ICoreWebView2NavigationCompletedEventArgs* args)
                -> HRESULT {
                BOOL success;
                CHECK_FAILURE(args->get_IsSuccess(&success));
                if (!success)
                {
                    COREWEBVIEW2_WEB_ERROR_STATUS webErrorStatus;
                    CHECK_FAILURE(args->get_WebErrorStatus(&webErrorStatus));
                    std::wstring error_msg = WebErrorStatusToString(webErrorStatus);
                    MessageBox(nullptr,
                       (std::wstring(L"IFrame navigation failed with the ") +
                         L"give in error " + error_msg).c_str(),
                       L"Navigation Failure", MB_OK);
                    if (webErrorStatus == COREWEBVIEW2_WEB_ERROR_STATUS_DISCONNECTED)
                    {
                        // Do something here if you want to handle a specific error case.
                        // In most cases this isn't necessary, because the WebView will
                        // display its own error page automatically.
                    }
                }
                return S_OK;
            })
            .Get(),
        &m_frameNavigationCompletedToken));
```

#### add_FrameNavigationStarting 

Add an event handler for the FrameNavigationStarting event.

> public HRESULT [add_FrameNavigationStarting](#add_framenavigationstarting)([ICoreWebView2NavigationStartingEventHandler](icorewebview2navigationstartingeventhandler.md) * eventHandler, EventRegistrationToken * token)

FrameNavigationStarting fires when a child frame in the WebView requesting permission to navigate to a different URI. This will fire for redirects as well.

```cpp
    // Register a handler for the FrameNavigationStarting event.
    // This handler will prevent a frame from navigating to a blocked domain.
    CHECK_FAILURE(m_webView->add_FrameNavigationStarting(
        Callback<ICoreWebView2NavigationStartingEventHandler>(
            [this](ICoreWebView2* sender,
                   ICoreWebView2NavigationStartingEventArgs* args) -> HRESULT
    {
        wil::unique_cotaskmem_string uri;
        CHECK_FAILURE(args->get_Uri(&uri));

        if (ShouldBlockUri(uri.get()))
        {
            CHECK_FAILURE(args->put_Cancel(true));
        }
        return S_OK;
    }).Get(), &m_frameNavigationStartingToken));
```

#### add_HistoryChanged 

HistoryChange listen to the change of navigation history for the top level document.

> public HRESULT [add_HistoryChanged](#add_historychanged)([ICoreWebView2HistoryChangedEventHandler](icorewebview2historychangedeventhandler.md) * eventHandler, EventRegistrationToken * token)

Use HistoryChange to check if CanGoBack/CanGoForward value has changed. HistoryChanged also fires for using GoBack/GoForward. HistoryChanged fires after SourceChanged and ContentLoading. Add an event handler for the HistoryChanged event. 
```cpp
    // Register a handler for the HistoryChanged event.
    // Update the Back, Forward buttons.
    CHECK_FAILURE(m_webView->add_HistoryChanged(
        Callback<ICoreWebView2HistoryChangedEventHandler>(
            [this](ICoreWebView2* sender, IUnknown* args) -> HRESULT {
                BOOL canGoBack;
                BOOL canGoForward;
                sender->get_CanGoBack(&canGoBack);
                sender->get_CanGoForward(&canGoForward);
                EnableWindow(m_toolbar->backWindow, canGoBack);
                EnableWindow(m_toolbar->forwardWindow, canGoForward);

                return S_OK;
            })
            .Get(),
        &m_historyChangedToken));
```

#### add_NavigationCompleted 

Add an event handler for the NavigationCompleted event.

> public HRESULT [add_NavigationCompleted](#add_navigationcompleted)([ICoreWebView2NavigationCompletedEventHandler](icorewebview2navigationcompletedeventhandler.md) * eventHandler, EventRegistrationToken * token)

NavigationCompleted event fires when the WebView has completely loaded (body.onload has fired) or loading stopped with error.

```cpp
    // Register a handler for the NavigationCompleted event.
    // Check whether the navigation succeeded, and if not, do something.
    // Also update the Cancel buttons.
    CHECK_FAILURE(m_webView->add_NavigationCompleted(
        Callback<ICoreWebView2NavigationCompletedEventHandler>(
            [this](ICoreWebView2* sender, ICoreWebView2NavigationCompletedEventArgs* args)
                -> HRESULT {
                BOOL success;
                CHECK_FAILURE(args->get_IsSuccess(&success));
                if (!success)
                {
                    COREWEBVIEW2_WEB_ERROR_STATUS webErrorStatus;
                    CHECK_FAILURE(args->get_WebErrorStatus(&webErrorStatus));
                    if (webErrorStatus == COREWEBVIEW2_WEB_ERROR_STATUS_DISCONNECTED)
                    {
                        // Do something here if you want to handle a specific error case.
                        // In most cases this isn't necessary, because the WebView will
                        // display its own error page automatically.
                    }
                }
                EnableWindow(m_toolbar->cancelWindow, FALSE);
                return S_OK;
            })
            .Get(),
        &m_navigationCompletedToken));
```

#### add_NavigationStarting 

Add an event handler for the NavigationStarting event.

> public HRESULT [add_NavigationStarting](#add_navigationstarting)([ICoreWebView2NavigationStartingEventHandler](icorewebview2navigationstartingeventhandler.md) * eventHandler, EventRegistrationToken * token)

NavigationStarting fires when the WebView main frame is requesting permission to navigate to a different URI. This will fire for redirects as well.

```cpp
    // Register a handler for the NavigationStarting event.
    // This handler will check the domain being navigated to, and if the domain
    // matches a list of blocked sites, it will cancel the navigation and
    // possibly display a warning page.  It will also disable JavaScript on
    // selected websites.
    CHECK_FAILURE(m_webView->add_NavigationStarting(
        Callback<ICoreWebView2NavigationStartingEventHandler>(
            [this](ICoreWebView2* sender,
                   ICoreWebView2NavigationStartingEventArgs* args) -> HRESULT
    {
        wil::unique_cotaskmem_string uri;
        CHECK_FAILURE(args->get_Uri(&uri));

        if (ShouldBlockUri(uri.get()))
        {
            CHECK_FAILURE(args->put_Cancel(true));

            // If the user clicked a link to navigate, show a warning page.
            BOOL userInitiated;
            CHECK_FAILURE(args->get_IsUserInitiated(&userInitiated));
            static const PCWSTR htmlContent =
              L"<h1>Domain Blocked</h1>"
              L"<p>You've attempted to navigate to a domain in the blocked "
              L"sites list. Press back to return to the previous page.</p>";
            CHECK_FAILURE(sender->NavigateToString(htmlContent));
        }
        // Changes to settings will apply at the next navigation, which includes the
        // navigation after a NavigationStarting event.  We can use this to change
        // settings according to what site we're visiting.
        if (ShouldBlockScriptForUri(uri.get()))
        {
            m_settings->put_IsScriptEnabled(FALSE);
        }
        else
        {
            m_settings->put_IsScriptEnabled(m_isScriptEnabled);
        }
        return S_OK;
    }).Get(), &m_navigationStartingToken));
```

#### add_NewWindowRequested 

Add an event handler for the NewWindowRequested event.

> public HRESULT [add_NewWindowRequested](#add_newwindowrequested)([ICoreWebView2NewWindowRequestedEventHandler](icorewebview2newwindowrequestedeventhandler.md) * eventHandler, EventRegistrationToken * token)

Fires when content inside the WebView requested to open a new window, such as through window.open. The app can pass a target webview that will be considered the opened window.

```cpp
    // Register a handler for the NewWindowRequested event.
    // This handler will defer the event, create a new app window, and then once the
    // new window is ready, it'll provide that new window's WebView as the response to
    // the request.
    CHECK_FAILURE(m_webView->add_NewWindowRequested(
        Callback<ICoreWebView2NewWindowRequestedEventHandler>(
            [this](ICoreWebView2* sender, ICoreWebView2NewWindowRequestedEventArgs* args) {
                wil::com_ptr<ICoreWebView2Deferral> deferral;
                CHECK_FAILURE(args->GetDeferral(&deferral));
                AppWindow* newAppWindow;

                newAppWindow = new AppWindow(m_creationModeId, L"");
                newAppWindow->m_isPopupWindow = true;
                newAppWindow->m_onWebViewFirstInitialized = [args, deferral, newAppWindow]() {
                    CHECK_FAILURE(args->put_NewWindow(newAppWindow->m_webView.get()));
                    CHECK_FAILURE(args->put_Handled(TRUE));
                    CHECK_FAILURE(deferral->Complete());
                };

                return S_OK;
            })
            .Get(),
        nullptr));
```

#### add_PermissionRequested 

Add an event handler for the PermissionRequested event.

> public HRESULT [add_PermissionRequested](#add_permissionrequested)([ICoreWebView2PermissionRequestedEventHandler](icorewebview2permissionrequestedeventhandler.md) * eventHandler, EventRegistrationToken * token)

Fires when content in a WebView requests permission to access some privileged resources.

```cpp
    // Register a handler for the PermissionRequested event.
    // This handler prompts the user to allow or deny the request.
    CHECK_FAILURE(m_webView->add_PermissionRequested(
        Callback<ICoreWebView2PermissionRequestedEventHandler>(
            [this](
                ICoreWebView2* sender,
                ICoreWebView2PermissionRequestedEventArgs* args) -> HRESULT
    {
        wil::unique_cotaskmem_string uri;
        COREWEBVIEW2_PERMISSION_KIND kind = COREWEBVIEW2_PERMISSION_KIND_UNKNOWN_PERMISSION;
        BOOL userInitiated = FALSE;

        CHECK_FAILURE(args->get_Uri(&uri));
        CHECK_FAILURE(args->get_PermissionKind(&kind));
        CHECK_FAILURE(args->get_IsUserInitiated(&userInitiated));

        std::wstring message = L"Do you want to grant permission for ";
        message += NameOfPermissionKind(kind);
        message += L" to the website at ";
        message += uri.get();
        message += L"?\n\n";
        message += (userInitiated
            ? L"This request came from a user gesture."
            : L"This request did not come from a user gesture.");

        int response = MessageBox(nullptr, message.c_str(), L"Permission Request",
                                   MB_YESNOCANCEL | MB_ICONWARNING);

        COREWEBVIEW2_PERMISSION_STATE state =
              response == IDYES ? COREWEBVIEW2_PERMISSION_STATE_ALLOW
            : response == IDNO  ? COREWEBVIEW2_PERMISSION_STATE_DENY
            :                     COREWEBVIEW2_PERMISSION_STATE_DEFAULT;
        CHECK_FAILURE(args->put_State(state));

        return S_OK;
    }).Get(), &m_permissionRequestedToken));
```

#### add_ProcessFailed 

Add an event handler for the ProcessFailed event.

> public HRESULT [add_ProcessFailed](#add_processfailed)([ICoreWebView2ProcessFailedEventHandler](icorewebview2processfailedeventhandler.md) * eventHandler, EventRegistrationToken * token)

Fires when a WebView process terminated unexpectedly or become unresponsive.

```cpp
    // Register a handler for the ProcessFailed event.
    // This handler checks if the browser process failed, and asks the user if
    // they want to recreate the webview.
    CHECK_FAILURE(m_webView->add_ProcessFailed(
        Callback<ICoreWebView2ProcessFailedEventHandler>(
            [this](ICoreWebView2* sender,
                ICoreWebView2ProcessFailedEventArgs* args) -> HRESULT
    {
        COREWEBVIEW2_PROCESS_FAILED_KIND failureType;
        CHECK_FAILURE(args->get_ProcessFailedKind(&failureType));
        if (failureType == COREWEBVIEW2_PROCESS_FAILED_KIND_BROWSER_PROCESS_EXITED)
        {
            int button = MessageBox(
                m_appWindow->GetMainWindow(),
                L"Browser process exited unexpectedly.  Recreate webview?",
                L"Browser process exited",
                MB_YESNO);
            if (button == IDYES)
            {
                m_appWindow->ReinitializeWebView();
            }
        }
        else if (failureType == COREWEBVIEW2_PROCESS_FAILED_KIND_RENDER_PROCESS_UNRESPONSIVE)
        {
            int button = MessageBox(
                m_appWindow->GetMainWindow(),
                L"Browser render process has stopped responding.  Recreate webview?",
                L"Web page unresponsive", MB_YESNO);
            if (button == IDYES)
            {
                m_appWindow->ReinitializeWebView();
            }
        }
        else if (failureType == COREWEBVIEW2_PROCESS_FAILED_KIND_RENDER_PROCESS_EXITED)
        {
            int button = MessageBox(
                m_appWindow->GetMainWindow(),
                L"Browser render process exited unexpectedly. Reload page?",
                L"Web page unresponsive", MB_YESNO);
            if (button == IDYES)
            {
                CHECK_FAILURE(m_webView->Reload());
            }
        }
        return S_OK;
    }).Get(), &m_processFailedToken));
```

#### add_ScriptDialogOpening 

Add an event handler for the ScriptDialogOpening event.

> public HRESULT [add_ScriptDialogOpening](#add_scriptdialogopening)([ICoreWebView2ScriptDialogOpeningEventHandler](icorewebview2scriptdialogopeningeventhandler.md) * eventHandler, EventRegistrationToken * token)

The event fires when a JavaScript dialog (alert, confirm, or prompt) will show for the webview. This event only fires if the ICoreWebView2Settings::AreDefaultScriptDialogsEnabled property is set to false. The ScriptDialogOpening event can be used to suppress dialogs or replace default dialogs with custom dialogs.

```cpp
    // Register a handler for the ScriptDialogOpening event.
    // This handler will set up a custom prompt dialog for the user,
    // and may defer the event if the setting to defer dialogs is enabled.
    CHECK_FAILURE(m_webView->add_ScriptDialogOpening(
        Callback<ICoreWebView2ScriptDialogOpeningEventHandler>(
            [this](
                ICoreWebView2* sender,
                ICoreWebView2ScriptDialogOpeningEventArgs* args) -> HRESULT
    {
        wil::com_ptr<ICoreWebView2ScriptDialogOpeningEventArgs> eventArgs = args;
        auto showDialog = [this, eventArgs]
        {
            wil::unique_cotaskmem_string uri;
            COREWEBVIEW2_SCRIPT_DIALOG_KIND type;
            wil::unique_cotaskmem_string message;
            wil::unique_cotaskmem_string defaultText;

            CHECK_FAILURE(eventArgs->get_Uri(&uri));
            CHECK_FAILURE(eventArgs->get_Kind(&type));
            CHECK_FAILURE(eventArgs->get_Message(&message));
            CHECK_FAILURE(eventArgs->get_DefaultText(&defaultText));

            std::wstring promptString = std::wstring(L"The page at '")
                + uri.get() + L"' says:";
            TextInputDialog dialog(
                m_appWindow->GetMainWindow(),
                L"Script Dialog",
                promptString.c_str(),
                message.get(),
                defaultText.get(),
                /* readonly */ type != COREWEBVIEW2_SCRIPT_DIALOG_KIND_PROMPT);
            if (dialog.confirmed)
            {
                CHECK_FAILURE(eventArgs->put_ResultText(dialog.input.c_str()));
                CHECK_FAILURE(eventArgs->Accept());
            }
        };

        if (m_deferScriptDialogs)
        {
            wil::com_ptr<ICoreWebView2Deferral> deferral;
            CHECK_FAILURE(args->GetDeferral(&deferral));
            m_completeDeferredDialog = [showDialog, deferral]
            {
                showDialog();
                CHECK_FAILURE(deferral->Complete());
            };
        }
        else
        {
            showDialog();
        }

        return S_OK;
    }).Get(), &m_scriptDialogOpeningToken));
```

#### add_SourceChanged 

SourceChanged fires when the Source property changes.

> public HRESULT [add_SourceChanged](#add_sourcechanged)([ICoreWebView2SourceChangedEventHandler](icorewebview2sourcechangedeventhandler.md) * eventHandler, EventRegistrationToken * token)

SourceChanged fires for navigating to a different site or fragment navigations. It will not fires for other types of navigations such as page reloads or history.pushState with the same URL as the current page. SourceChanged fires before ContentLoading for navigation to a new document. Add an event handler for the SourceChanged event. 
```cpp
    // Register a handler for the SourceChanged event.
    // This handler will read the webview's source URI and update
    // the app's address bar.
    CHECK_FAILURE(m_webView->add_SourceChanged(
        Callback<ICoreWebView2SourceChangedEventHandler>(
            [this](ICoreWebView2* sender, ICoreWebView2SourceChangedEventArgs* args)
                -> HRESULT {
                wil::unique_cotaskmem_string uri;
                sender->get_Source(&uri);
                if (wcscmp(uri.get(), L"about:blank") == 0)
                {
                    uri = wil::make_cotaskmem_string(L"");
                }
                SetWindowText(m_toolbar->addressBarWindow, uri.get());

                return S_OK;
            })
            .Get(),
        &m_sourceChangedToken));
```

#### add_WebMessageReceived 

This event fires when the IsWebMessageEnabled setting is set and the top level document of the webview calls `window.chrome.webview.postMessage`.

> public HRESULT [add_WebMessageReceived](#add_webmessagereceived)([ICoreWebView2WebMessageReceivedEventHandler](icorewebview2webmessagereceivedeventhandler.md) * handler, EventRegistrationToken * token)

The postMessage function is `void postMessage(object)` where object is any object supported by JSON conversion.

```html
        window.chrome.webview.addEventListener('message', arg => {
            if ("SetColor" in arg.data) {
                document.getElementById("colorable").style.color = arg.data.SetColor;
            }
            if ("WindowBounds" in arg.data) {
                document.getElementById("window-bounds").value = arg.data.WindowBounds;
            }
        });

        function SetTitleText() {
            let titleText = document.getElementById("title-text");
            window.chrome.webview.postMessage(`SetTitleText ${titleText.value}`);
        }
        function GetWindowBounds() {
            window.chrome.webview.postMessage("GetWindowBounds");
        }
```
 When postMessage is called, the [ICoreWebView2WebMessageReceivedEventHandler](icorewebview2webmessagereceivedeventhandler.md) set via this SetWebMessageReceivedEventHandler method will be invoked with the postMessage's object parameter converted to a JSON string.

```cpp
    // Setup the web message received event handler before navigating to
    // ensure we don't miss any messages.
    CHECK_FAILURE(m_webView->add_WebMessageReceived(
        Microsoft::WRL::Callback<ICoreWebView2WebMessageReceivedEventHandler>(
            [this](ICoreWebView2* sender, ICoreWebView2WebMessageReceivedEventArgs* args)
    {
        wil::unique_cotaskmem_string uri;
        CHECK_FAILURE(args->get_Source(&uri));

        // Always validate that the origin of the message is what you expect.
        if (uri.get() != m_sampleUri)
        {
            return S_OK;
        }
        wil::unique_cotaskmem_string messageRaw;
        CHECK_FAILURE(args->TryGetWebMessageAsString(&messageRaw));
        std::wstring message = messageRaw.get();

        if (message.compare(0, 13, L"SetTitleText ") == 0)
        {
            m_appWindow->SetTitleText(message.substr(13).c_str());
        }
        else if (message.compare(L"GetWindowBounds") == 0)
        {
            RECT bounds = m_appWindow->GetWindowBounds();
            std::wstring reply =
                L"{\"WindowBounds\":\"Left:" + std::to_wstring(bounds.left)
                + L"\\nTop:" + std::to_wstring(bounds.top)
                + L"\\nRight:" + std::to_wstring(bounds.right)
                + L"\\nBottom:" + std::to_wstring(bounds.bottom)
                + L"\"}";
            CHECK_FAILURE(sender->PostWebMessageAsJson(reply.c_str()));
        }
        return S_OK;
    }).Get(), &m_webMessageReceivedToken));
```

#### add_WebResourceRequested 

Add an event handler for the WebResourceRequested event.

> public HRESULT [add_WebResourceRequested](#add_webresourcerequested)([ICoreWebView2WebResourceRequestedEventHandler](icorewebview2webresourcerequestedeventhandler.md) * eventHandler, EventRegistrationToken * token)

Fires when the WebView is performing an HTTP request to a matching URL and resource context filter that was added with AddWebResourceRequestedFilter. At least one filter must be added for the event to fire.

```cpp
        if (m_blockImages)
        {
            m_webView->AddWebResourceRequestedFilter(L"*", COREWEBVIEW2_WEB_RESOURCE_CONTEXT_IMAGE);
            CHECK_FAILURE(m_webView->add_WebResourceRequested(
                Callback<ICoreWebView2WebResourceRequestedEventHandler>(
                    [this](
                        ICoreWebView2* sender,
                        ICoreWebView2WebResourceRequestedEventArgs* args) {
                        COREWEBVIEW2_WEB_RESOURCE_CONTEXT resourceContext;
                        CHECK_FAILURE(
                            args->get_ResourceContext(&resourceContext));
                        // Ensure that the type is image
                        if (resourceContext != COREWEBVIEW2_WEB_RESOURCE_CONTEXT_IMAGE)
                        {
                            return E_INVALIDARG;
                        }
                        // Override the response with an empty one to block the image.
                        // If put_Response is not called, the request will continue as normal.
                        wil::com_ptr<ICoreWebView2WebResourceResponse> response;
                        CHECK_FAILURE(m_webViewEnvironment->CreateWebResourceResponse(
                            nullptr, 403 /*NoContent*/, L"Blocked", L"", &response));
                        CHECK_FAILURE(args->put_Response(response.get()));
                        return S_OK;
                    })
                    .Get(),
                &m_webResourceRequestedTokenForImageBlocking));
        }
        else
        {
            CHECK_FAILURE(m_webView->remove_WebResourceRequested(
                m_webResourceRequestedTokenForImageBlocking));
        }
```

#### add_WindowCloseRequested 

Add an event handler for the WindowCloseRequested event.

> public HRESULT [add_WindowCloseRequested](#add_windowcloserequested)([ICoreWebView2WindowCloseRequestedEventHandler](icorewebview2windowcloserequestedeventhandler.md) * eventHandler, EventRegistrationToken * token)

Fires when content inside the WebView requested to close the window, such as after window.close is called. The app should close the WebView and related app window if that makes sense to the app.

```cpp
    // Register a handler for the WindowCloseRequested event.
    // This handler will close the app window if it is not the main window.
    CHECK_FAILURE(m_webView->add_WindowCloseRequested(
        Callback<ICoreWebView2WindowCloseRequestedEventHandler>([this](
                                                                    ICoreWebView2* sender,
                                                                    IUnknown* args) {
            if (m_isPopupWindow)
            {
                CloseAppWindow();
            }
            return S_OK;
        }).Get(),
        nullptr));
```

#### AddHostObjectToScript 

Add the provided host object to script running in the WebView with the specified name.

> public HRESULT [AddHostObjectToScript](#addhostobjecttoscript)(LPCWSTR name, VARIANT * object)

Host objects are exposed as host object proxies via `window.chrome.webview.hostObjects.<name>`. Host object proxies are promises and will resolve to an object representing the host object. The promise is rejected if the app has not added an object with the name. When JavaScript code access a property or method of the object, a promise is return, which will resolve to the value returned from the host for the property or method, or rejected in case of error such as there is no such property or method on the object or parameters are invalid. For example, when the application code does the following:

```
VARIANT object;
object.vt = VT_DISPATCH;
object.pdispVal = appObject;
webview->AddHostObjectToScript(L"host_object", &host);
```

JavaScript code in the WebView will be able to access appObject as following and then access attributes and methods of appObject:

```
let app_object = await window.chrome.webview.hostObjects.host_object;
let attr1 = await app_object.attr1;
let result = await app_object.method1(parameters);
```

Note that while simple types, IDispatch and array are supported, generic IUnknown, VT_DECIMAL, or VT_RECORD variant is not supported. Remote JavaScript objects like callback functions are represented as an VT_DISPATCH VARIANT with the object implementing IDispatch. The JavaScript callback method may be invoked using DISPID_VALUE for the DISPID. Nested arrays are supported up to a depth of 3. Arrays of by reference types are not supported. VT_EMPTY and VT_NULL are mapped into JavaScript as null. In JavaScript null and undefined are mapped to VT_EMPTY.

Additionally, all host objects are exposed as `window.chrome.webview.hostObjects.sync.<name>`. Here the host objects are exposed as synchronous host object proxies. These are not promises and calls to functions or property access synchronously block running script waiting to communicate cross process for the host code to run. Accordingly this can result in reliability issues and it is recommended that you use the promise based asynchronous `window.chrome.webview.hostObjects.<name>` API described above.

Synchronous host object proxies and asynchronous host object proxies can both proxy the same host object. Remote changes made by one proxy will be reflected in any other proxy of that same host object whether the other proxies and synchronous or asynchronous.

While JavaScript is blocked on a synchronous call to native code, that native code is unable to call back to JavaScript. Attempts to do so will fail with HRESULT_FROM_WIN32(ERROR_POSSIBLE_DEADLOCK).

Host object proxies are JavaScript Proxy objects that intercept all property get, property set, and method invocations. Properties or methods that are a part of the Function or Object prototype are run locally. Additionally any property or method in the array `chrome.webview.hostObjects.options.forceLocalProperties` will also be run locally. This defaults to including optional methods that have meaning in JavaScript like `toJSON` and `Symbol.toPrimitive`. You can add more to this array as required.

There's a method `chrome.webview.hostObjects.cleanupSome` that will best effort garbage collect host object proxies.

Host object proxies additionally have the following methods which run locally:

* applyHostFunction, getHostProperty, setHostProperty: Perform a method invocation, property get, or property set on the host object. You can use these to explicitly force a method or property to run remotely if there is a conflicting local method or property. For instance, `proxy.toString()` will run the local toString method on the proxy object. But `proxy.applyHostFunction('toString')` runs `toString` on the host proxied object instead.

* getLocalProperty, setLocalProperty: Perform property get, or property set locally. You can use these methods to force getting or setting a property on the host object proxy itself rather than on the host object it represents. For instance, `proxy.unknownProperty` will get the property named `unknownProperty` from the host proxied object. But `proxy.getLocalProperty('unknownProperty')` will get the value of the property `unknownProperty` on the proxy object itself.

* sync: Asynchronous host object proxies expose a sync method which returns a promise for a synchronous host object proxy for the same host object. For example, `chrome.webview.hostObjects.sample.methodCall()` returns an asynchronous host object proxy. You can use the `sync` method to obtain a synchronous host object proxy instead: `const syncProxy = await chrome.webview.hostObjects.sample.methodCall().sync()`

* async: Synchronous host object proxies expose an async method which blocks and returns an asynchronous host object proxy for the same host object. For example, `chrome.webview.hostObjects.sync.sample.methodCall()` returns a synchronous host object proxy. Calling the `async` method on this blocks and then returns an asynchronous host object proxy for the same host object: `const asyncProxy = chrome.webview.hostObjects.sync.sample.methodCall().async()`

* then: Asynchronous host object proxies have a then method. This allows them to be awaitable. `then` will return a promise that resolves with a representation of the host object. If the proxy represents a JavaScript literal then a copy of that is returned locally. If the proxy represents a function then a non-awaitable proxy is returned. If the proxy represents a JavaScript object with a mix of literal properties and function properties, then the a copy of the object is returned with some properties as host object proxies.

All other property and method invocations (other than the above Remote object proxy methods, forceLocalProperties list, and properties on Function and Object prototypes) are run remotely. Asynchronous host object proxies return a promise representing asynchronous completion of remotely invoking the method, or getting the property. The promise resolves after the remote operations complete and the promises resolve to the resulting value of the operation. Synchronous host object proxies work similarly but block JavaScript execution and wait for the remote operation to complete.

Setting a property on an asynchronous host object proxy works slightly differently. The set returns immediately and the return value is the value that will be set. This is a requirement of the JavaScript Proxy object. If you need to asynchronously wait for the property set to complete, use the setHostProperty method which returns a promise as described above. Synchronous object property set property synchronously blocks until the property is set.

For example, suppose you have a COM object with the following interface

```idl
    [uuid(3a14c9c0-bc3e-453f-a314-4ce4a0ec81d8), object, local]
    interface IHostObjectSample : IUnknown
    {
        // Demonstrate basic method call with some parameters and a return value.
        HRESULT MethodWithParametersAndReturnValue([in] BSTR stringParameter, [in] INT integerParameter, [out, retval] BSTR* stringResult);

        // Demonstrate getting and setting a property.
        [propget] HRESULT Property([out, retval] BSTR* stringResult);
        [propput] HRESULT Property([in] BSTR stringValue);

        [propget] HRESULT IndexedProperty(INT index, [out, retval] BSTR * stringResult);
        [propput] HRESULT IndexedProperty(INT index, [in] BSTR stringValue);

        // Demonstrate native calling back into JavaScript.
        HRESULT CallCallbackAsynchronously([in] IDispatch* callbackParameter);

    };
```
 We can add an instance of this interface into our JavaScript with `AddHostObjectToScript`. In this case we name it `sample`:

```cpp
            VARIANT remoteObjectAsVariant = {};
            m_hostObject.query_to<IDispatch>(&remoteObjectAsVariant.pdispVal);
            remoteObjectAsVariant.vt = VT_DISPATCH;

            // We can call AddHostObjectToScript multiple times in a row without
            // calling RemoveHostObject first. This will replace the previous object
            // with the new object. In our case this is the same object and everything
            // is fine.
            CHECK_FAILURE(
                m_webView->AddHostObjectToScript(L"sample", &remoteObjectAsVariant));
            remoteObjectAsVariant.pdispVal->Release();
```
 Then in the HTML document we can use this COM object via `chrome.webview.hostObjects.sample`:

```html
        document.getElementById("getPropertyAsyncButton").addEventListener("click", async () => {
        const propertyValue = await chrome.webview.hostObjects.sample.property;
        document.getElementById("getPropertyAsyncOutput").textContent = propertyValue;
        });

        document.getElementById("getPropertySyncButton").addEventListener("click", () => {
        const propertyValue = chrome.webview.hostObjects.sync.sample.property;
        document.getElementById("getPropertySyncOutput").textContent = propertyValue;
        });

        document.getElementById("setPropertyAsyncButton").addEventListener("click", async () => {
        const propertyValue = document.getElementById("setPropertyAsyncInput").value;
        // The following line will work but it will return immediately before the property value has actually been set.
        // If you need to set the property and wait for the property to change value, use the setRemote function.
        chrome.webview.hostObjects.sample.property = propertyValue;
        document.getElementById("setPropertyAsyncOutput").textContent = "Set";
        });

        document.getElementById("setPropertyExplicitAsyncButton").addEventListener("click", async () => {
        const propertyValue = document.getElementById("setPropertyExplicitAsyncInput").value;
        // If you care about waiting until the property has actually changed value use the setRemote function.
        await chrome.webview.hostObjects.sample.setRemote("property", propertyValue);
        document.getElementById("setPropertyExplicitAsyncOutput").textContent = "Set";
        });

        document.getElementById("setPropertySyncButton").addEventListener("click", () => {
        const propertyValue = document.getElementById("setPropertySyncInput").value;
        chrome.webview.hostObjects.sync.sample.property = propertyValue;
        document.getElementById("setPropertySyncOutput").textContent = "Set";
        });

        document.getElementById("getIndexedPropertyAsyncButton").addEventListener("click", async () => {
        const index = parseInt(document.getElementById("getIndexedPropertyAsyncParam").value);
        const resultValue = await chrome.webview.hostObjects.sample.IndexedProperty[index];
        document.getElementById("getIndexedPropertyAsyncOutput").textContent = resultValue;
        });
        document.getElementById("setIndexedPropertyAsyncButton").addEventListener("click", async () => {
        const index = parseInt(document.getElementById("setIndexedPropertyAsyncParam1").value);
        const value = document.getElementById("setIndexedPropertyAsyncParam2").value;;
        chrome.webview.hostObjects.sample.IndexedProperty[index] = value;
        document.getElementById("setIndexedPropertyAsyncOutput").textContent = "Set";
        });
        document.getElementById("invokeMethodAsyncButton").addEventListener("click", async () => {
        const paramValue1 = document.getElementById("invokeMethodAsyncParam1").value;
        const paramValue2 = parseInt(document.getElementById("invokeMethodAsyncParam2").value);
        const resultValue = await chrome.webview.hostObjects.sample.MethodWithParametersAndReturnValue(paramValue1, paramValue2);
        document.getElementById("invokeMethodAsyncOutput").textContent = resultValue;
        });

        document.getElementById("invokeMethodSyncButton").addEventListener("click", () => {
        const paramValue1 = document.getElementById("invokeMethodSyncParam1").value;
        const paramValue2 = parseInt(document.getElementById("invokeMethodSyncParam2").value);
        const resultValue = chrome.webview.hostObjects.sync.sample.MethodWithParametersAndReturnValue(paramValue1, paramValue2);
        document.getElementById("invokeMethodSyncOutput").textContent = resultValue;
        });

        let callbackCount = 0;
        document.getElementById("invokeCallbackButton").addEventListener("click", async () => {
        chrome.webview.hostObjects.sample.CallCallbackAsynchronously(() => {
        document.getElementById("invokeCallbackOutput").textContent = "Native object called the callback " + (++callbackCount) + " time(s).";
        });
        });
```

#### AddScriptToExecuteOnDocumentCreated 

Add the provided JavaScript to a list of scripts that should be executed after the global object has been created, but before the HTML document has been parsed and before any other script included by the HTML document is executed.

> public HRESULT [AddScriptToExecuteOnDocumentCreated](#addscripttoexecuteondocumentcreated)(LPCWSTR javaScript, [ICoreWebView2AddScriptToExecuteOnDocumentCreatedCompletedHandler](icorewebview2addscripttoexecuteondocumentcreatedcompletedhandler.md) * handler)

The injected script will apply to all future top level document and child frame navigations until removed with RemoveScriptToExecuteOnDocumentCreated. This is applied asynchronously and you must wait for the completion handler to run before you can be sure that the script is ready to execute on future navigations.

Note that if an HTML document has sandboxing of some kind via [sandbox](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-sandbox) properties or the [Content-Security-Policy HTTP header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) this will affect the script run here. So, for example, if the 'allow-modals' keyword is not set then calls to the `alert` function will be ignored.

```cpp
// Prompt the user for some script and register it to execute whenever a new page loads.
void ScriptComponent::AddInitializeScript()
{
    TextInputDialog dialog(
        m_appWindow->GetMainWindow(),
        L"Add Initialize Script",
        L"Initialization Script:",
        L"Enter the JavaScript code to run as the initialization script that "
            L"runs before any script in the HTML document.",
    // This example script stops child frames from opening new windows.  Because
    // the initialization script runs before any script in the HTML document, we
    // can trust the results of our checks on window.parent and window.top.
        L"if (window.parent !== window.top) {\r\n"
        L"    delete window.open;\r\n"
        L"}");
    if (dialog.confirmed)
    {
        m_webView->AddScriptToExecuteOnDocumentCreated(
            dialog.input.c_str(),
            Callback<ICoreWebView2AddScriptToExecuteOnDocumentCreatedCompletedHandler>(
                [this](HRESULT error, PCWSTR id) -> HRESULT
        {
            m_lastInitializeScriptId = id;
            MessageBox(nullptr, id, L"AddScriptToExecuteOnDocumentCreated Id", MB_OK);
            return S_OK;
        }).Get());

    }
}
```

#### AddWebResourceRequestedFilter 

Adds a URI and resource context filter to the WebResourceRequested event.

> public HRESULT [AddWebResourceRequestedFilter](#addwebresourcerequestedfilter)(LPCWSTR const uri, [COREWEBVIEW2_WEB_RESOURCE_CONTEXT](#corewebview2_web_resource_context) const resourceContext)

URI parameter can be a wildcard string ('': zero or more, '?': exactly one). nullptr is equivalent to L"". See COREWEBVIEW2_WEB_RESOURCE_CONTEXT enum for description of resource context filters.

#### CallDevToolsProtocolMethod 

Call an asynchronous DevToolsProtocol method.

> public HRESULT [CallDevToolsProtocolMethod](#calldevtoolsprotocolmethod)(LPCWSTR methodName, LPCWSTR parametersAsJson, [ICoreWebView2CallDevToolsProtocolMethodCompletedHandler](icorewebview2calldevtoolsprotocolmethodcompletedhandler.md) * handler)

See the [DevTools Protocol Viewer](https://aka.ms/DevToolsProtocolDocs) for a list and description of available methods. The methodName parameter is the full name of the method in the format `{domain}.{method}`. The parametersAsJson parameter is a JSON formatted string containing the parameters for the corresponding method. The handler's Invoke method will be called when the method asynchronously completes. Invoke will be called with the method's return object as a JSON string.

```cpp
// Prompt the user for the name and parameters of a CDP method, then call it.
void ScriptComponent::CallCdpMethod()
{
    TextInputDialog dialog(
        m_appWindow->GetMainWindow(),
        L"Call CDP Method",
        L"CDP method name:",
        L"Enter the CDP method name to call, followed by a space,\r\n"
            L"followed by the parameters in JSON format.",
        L"Runtime.evaluate {\"expression\":\"alert(\\\"test\\\")\"}");
    if (dialog.confirmed)
    {
        size_t delimiterPos = dialog.input.find(L' ');
        std::wstring methodName = dialog.input.substr(0, delimiterPos);
        std::wstring methodParams =
            (delimiterPos < dialog.input.size()
                ? dialog.input.substr(delimiterPos + 1)
                : L"{}");

        m_webView->CallDevToolsProtocolMethod(
            methodName.c_str(),
            methodParams.c_str(),
            Callback<ICoreWebView2CallDevToolsProtocolMethodCompletedHandler>(
                [](HRESULT error, PCWSTR resultJson) -> HRESULT
                {
                    MessageBox(nullptr, resultJson, L"CDP Method Result", MB_OK);
                    return S_OK;
                }).Get());
    }
}
```

#### CapturePreview 

Capture an image of what WebView is displaying.

> public HRESULT [CapturePreview](#capturepreview)([COREWEBVIEW2_CAPTURE_PREVIEW_IMAGE_FORMAT](#corewebview2_capture_preview_image_format) imageFormat, IStream * imageStream, [ICoreWebView2CapturePreviewCompletedHandler](icorewebview2capturepreviewcompletedhandler.md) * handler)

Specify the format of the image with the imageFormat parameter. The resulting image binary data is written to the provided imageStream parameter. When CapturePreview finishes writing to the stream, the Invoke method on the provided handler parameter is called.

```cpp
// Show the user a file selection dialog, then save a screenshot of the WebView
// to the selected file.
void FileComponent::SaveScreenshot()
{
    OPENFILENAME openFileName = {};
    openFileName.lStructSize = sizeof(openFileName);
    openFileName.hwndOwner = nullptr;
    openFileName.hInstance = nullptr;
    WCHAR fileName[MAX_PATH] = L"WebView2_Screenshot.png";
    openFileName.lpstrFile = fileName;
    openFileName.lpstrFilter = L"PNG File\0*.png\0";
    openFileName.nMaxFile = ARRAYSIZE(fileName);
    openFileName.Flags = OFN_OVERWRITEPROMPT;

    if (GetSaveFileName(&openFileName))
    {
        wil::com_ptr<IStream> stream;
        CHECK_FAILURE(SHCreateStreamOnFileEx(
            fileName, STGM_READWRITE | STGM_CREATE, FILE_ATTRIBUTE_NORMAL, TRUE, nullptr,
            &stream));

        HWND mainWindow = m_appWindow->GetMainWindow();

        CHECK_FAILURE(m_webView->CapturePreview(
            COREWEBVIEW2_CAPTURE_PREVIEW_IMAGE_FORMAT_PNG, stream.get(),
            Callback<ICoreWebView2CapturePreviewCompletedHandler>(
                [mainWindow](HRESULT error_code) -> HRESULT {
                    CHECK_FAILURE(error_code);

                    MessageBox(mainWindow, L"Preview Captured", L"Preview Captured", MB_OK);
                    return S_OK;
                })
                .Get()));
    }
}
```

#### ExecuteScript 

Execute JavaScript code from the javascript parameter in the current top level document rendered in the WebView.

> public HRESULT [ExecuteScript](#executescript)(LPCWSTR javaScript, [ICoreWebView2ExecuteScriptCompletedHandler](icorewebview2executescriptcompletedhandler.md) * handler)

This will execute asynchronously and when complete, if a handler is provided in the ExecuteScriptCompletedHandler parameter, its Invoke method will be called with the result of evaluating the provided JavaScript. The result value is a JSON encoded string. If the result is undefined, contains a reference cycle, or otherwise cannot be encoded into JSON, the JSON null value will be returned as the string 'null'. Note that a function that has no explicit return value returns undefined. If the executed script throws an unhandled exception, then the result is also 'null'. This method is applied asynchronously. If the method is called after NavigationStarting event during a navigation, the script will be executed in the new document when loading it, around the time ContentLoading is fired. ExecuteScript will work even if IsScriptEnabled is set to FALSE.

```cpp
// Prompt the user for some script and then execute it.
void ScriptComponent::InjectScript()
{
    TextInputDialog dialog(
        m_appWindow->GetMainWindow(),
        L"Inject Script",
        L"Enter script code:",
        L"Enter the JavaScript code to run in the webview.",
        L"window.getComputedStyle(document.body).backgroundColor");
    if (dialog.confirmed)
    {
        m_webView->ExecuteScript(dialog.input.c_str(),
            Callback<ICoreWebView2ExecuteScriptCompletedHandler>(
                [](HRESULT error, PCWSTR result) -> HRESULT
        {
            if (error != S_OK) {
                ShowFailure(error, L"ExecuteScript failed");
            }
            MessageBox(nullptr, result, L"ExecuteScript Result", MB_OK);
            return S_OK;
        }).Get());
    }
}
```

#### get_BrowserProcessId 

The process id of the browser process that hosts the WebView.

> public HRESULT [get_BrowserProcessId](#get_browserprocessid)(UINT32 * value)

#### get_CanGoBack 

Returns true if the webview can navigate to a previous page in the navigation history.

> public HRESULT [get_CanGoBack](#get_cangoback)(BOOL * canGoBack)

The HistoryChanged event will fire if CanGoBack changes value.

#### get_CanGoForward 

Returns true if the webview can navigate to a next page in the navigation history.

> public HRESULT [get_CanGoForward](#get_cangoforward)(BOOL * canGoForward)

The HistoryChanged event will fire if CanGoForward changes value.

#### get_ContainsFullScreenElement 

Indicates if the WebView contains a fullscreen HTML element.

> public HRESULT [get_ContainsFullScreenElement](#get_containsfullscreenelement)(BOOL * containsFullScreenElement)

#### get_DocumentTitle 

The title for the current top level document.

> public HRESULT [get_DocumentTitle](#get_documenttitle)(LPWSTR * title)

If the document has no explicit title or is otherwise empty, a default that may or may not match the URI of the document will be used.

#### get_Settings 

The [ICoreWebView2Settings](icorewebview2settings.md) object contains various modifiable settings for the running WebView.

> public HRESULT [get_Settings](#get_settings)([ICoreWebView2Settings](icorewebview2settings.md) ** settings)

#### get_Source 

The URI of the current top level document.

> public HRESULT [get_Source](#get_source)(LPWSTR * uri)

This value potentially changes as a part of the SourceChanged event firing for some cases such as navigating to a different site or fragment navigations. It will remain the same for other types of navigations such as page reloads or history.pushState with the same URL as the current page.

```cpp
    // Register a handler for the SourceChanged event.
    // This handler will read the webview's source URI and update
    // the app's address bar.
    CHECK_FAILURE(m_webView->add_SourceChanged(
        Callback<ICoreWebView2SourceChangedEventHandler>(
            [this](ICoreWebView2* sender, ICoreWebView2SourceChangedEventArgs* args)
                -> HRESULT {
                wil::unique_cotaskmem_string uri;
                sender->get_Source(&uri);
                if (wcscmp(uri.get(), L"about:blank") == 0)
                {
                    uri = wil::make_cotaskmem_string(L"");
                }
                SetWindowText(m_toolbar->addressBarWindow, uri.get());

                return S_OK;
            })
            .Get(),
        &m_sourceChangedToken));
```

#### GetDevToolsProtocolEventReceiver 

Get a DevTools Protocol event receiver that allows you to subscribe to a DevTools Protocol event.

> public HRESULT [GetDevToolsProtocolEventReceiver](#getdevtoolsprotocoleventreceiver)(LPCWSTR eventName, [ICoreWebView2DevToolsProtocolEventReceiver](icorewebview2devtoolsprotocoleventreceiver.md) ** receiver)

The eventName parameter is the full name of the event in the format `{domain}.{event}`. See the [DevTools Protocol Viewer](https://aka.ms/DevToolsProtocolDocs) for a list of DevTools Protocol events description, and event args.

```cpp
// Prompt the user to name a CDP event, and then subscribe to that event.
void ScriptComponent::SubscribeToCdpEvent()
{
    TextInputDialog dialog(
        m_appWindow->GetMainWindow(),
        L"Subscribe to CDP Event",
        L"CDP event name:",
        L"Enter the name of the CDP event to subscribe to.\r\n"
            L"You may also have to call the \"enable\" method of the\r\n"
            L"event's domain to receive events (for example \"Log.enable\").\r\n",
        L"Log.entryAdded");
    if (dialog.confirmed)
    {
        std::wstring eventName = dialog.input;
        wil::com_ptr<ICoreWebView2DevToolsProtocolEventReceiver> receiver;
        CHECK_FAILURE(
            m_webView->GetDevToolsProtocolEventReceiver(eventName.c_str(), &receiver));

        // If we are already subscribed to this event, unsubscribe first.
        auto preexistingToken = m_devToolsProtocolEventReceivedTokenMap.find(eventName);
        if (preexistingToken != m_devToolsProtocolEventReceivedTokenMap.end())
        {
            CHECK_FAILURE(receiver->remove_DevToolsProtocolEventReceived(
                preexistingToken->second));
        }

        CHECK_FAILURE(receiver->add_DevToolsProtocolEventReceived(
            Callback<ICoreWebView2DevToolsProtocolEventReceivedEventHandler>(
                [eventName](
                    ICoreWebView2* sender,
                    ICoreWebView2DevToolsProtocolEventReceivedEventArgs* args) -> HRESULT {
                    wil::unique_cotaskmem_string parameterObjectAsJson;
                    CHECK_FAILURE(args->get_ParameterObjectAsJson(&parameterObjectAsJson));
                    MessageBox(
                        nullptr, parameterObjectAsJson.get(),
                        (L"CDP Event Fired: " + eventName).c_str(), MB_OK);
                    return S_OK;
                })
                .Get(),
            &m_devToolsProtocolEventReceivedTokenMap[eventName]));
    }
}
```

#### GoBack 

Navigates the WebView to the previous page in the navigation history.

> public HRESULT [GoBack](#goback)()

#### GoForward 

Navigates the WebView to the next page in the navigation history.

> public HRESULT [GoForward](#goforward)()

#### Navigate 

Cause a navigation of the top level document to the specified URI.

> public HRESULT [Navigate](#navigate)(LPCWSTR uri)

See the navigation events for more information. Note that this starts a navigation and the corresponding NavigationStarting event will fire sometime after this Navigate call completes.

```cpp
void ControlComponent::NavigateToAddressBar()
{
    int length = GetWindowTextLength(m_toolbar->addressBarWindow);
    std::wstring uri(length, 0);
    PWSTR buffer = const_cast<PWSTR>(uri.data());
    GetWindowText(m_toolbar->addressBarWindow, buffer, length + 1);

    HRESULT hr = m_webView->Navigate(uri.c_str());
    if (hr == E_INVALIDARG)
    {
        // An invalid URI was provided.
        if (uri.find(L' ') == std::wstring::npos
            && uri.find(L'.') != std::wstring::npos)
        {
            // If it contains a dot and no spaces, try tacking http:// on the front.
            hr = m_webView->Navigate((L"http://" + uri).c_str());
        }
        else
        {
            // Otherwise treat it as a web search. We aren't bothering to escape
            // URL syntax characters such as & and #
            hr = m_webView->Navigate((L"https://bing.com/search?q=" + uri).c_str());
        }
    }
    if (hr != E_INVALIDARG) {
        CHECK_FAILURE(hr);
    }
}
```

#### NavigateToString 

Initiates a navigation to htmlContent as source HTML of a new document.

> public HRESULT [NavigateToString](#navigatetostring)(LPCWSTR htmlContent)

The htmlContent parameter may not be larger than 2 MB of characters. The origin of the new page will be about:blank.

```cpp
            static const PCWSTR htmlContent =
              L"<h1>Domain Blocked</h1>"
              L"<p>You've attempted to navigate to a domain in the blocked "
              L"sites list. Press back to return to the previous page.</p>";
            CHECK_FAILURE(sender->NavigateToString(htmlContent));
```

#### OpenDevToolsWindow 

Opens the DevTools window for the current document in the WebView.

> public HRESULT [OpenDevToolsWindow](#opendevtoolswindow)()

Does nothing if called when the DevTools window is already open

#### PostWebMessageAsJson 

Post the specified webMessage to the top level document in this WebView.

> public HRESULT [PostWebMessageAsJson](#postwebmessageasjson)(LPCWSTR webMessageAsJson)

The top level document's window.chrome.webview's message event fires. JavaScript in that document may subscribe and unsubscribe to the event via the following:

```
window.chrome.webview.addEventListener('message', handler)
window.chrome.webview.removeEventListener('message', handler)
```

The event args is an instance of `MessageEvent`. The ICoreWebView2Settings::IsWebMessageEnabled setting must be true or this method will fail with E_INVALIDARG. The event arg's data property is the webMessage string parameter parsed as a JSON string into a JavaScript object. The event arg's source property is a reference to the `window.chrome.webview` object. See SetWebMessageReceivedEventHandler for information on sending messages from the HTML document in the webview to the host. This message is sent asynchronously. If a navigation occurs before the message is posted to the page, then the message will not be sent.

```cpp
    // Setup the web message received event handler before navigating to
    // ensure we don't miss any messages.
    CHECK_FAILURE(m_webView->add_WebMessageReceived(
        Microsoft::WRL::Callback<ICoreWebView2WebMessageReceivedEventHandler>(
            [this](ICoreWebView2* sender, ICoreWebView2WebMessageReceivedEventArgs* args)
    {
        wil::unique_cotaskmem_string uri;
        CHECK_FAILURE(args->get_Source(&uri));

        // Always validate that the origin of the message is what you expect.
        if (uri.get() != m_sampleUri)
        {
            return S_OK;
        }
        wil::unique_cotaskmem_string messageRaw;
        CHECK_FAILURE(args->TryGetWebMessageAsString(&messageRaw));
        std::wstring message = messageRaw.get();

        if (message.compare(0, 13, L"SetTitleText ") == 0)
        {
            m_appWindow->SetTitleText(message.substr(13).c_str());
        }
        else if (message.compare(L"GetWindowBounds") == 0)
        {
            RECT bounds = m_appWindow->GetWindowBounds();
            std::wstring reply =
                L"{\"WindowBounds\":\"Left:" + std::to_wstring(bounds.left)
                + L"\\nTop:" + std::to_wstring(bounds.top)
                + L"\\nRight:" + std::to_wstring(bounds.right)
                + L"\\nBottom:" + std::to_wstring(bounds.bottom)
                + L"\"}";
            CHECK_FAILURE(sender->PostWebMessageAsJson(reply.c_str()));
        }
        return S_OK;
    }).Get(), &m_webMessageReceivedToken));
```

#### PostWebMessageAsString 

This is a helper for posting a message that is a simple string rather than a JSON string representation of a JavaScript object.

> public HRESULT [PostWebMessageAsString](#postwebmessageasstring)(LPCWSTR webMessageAsString)

This behaves in exactly the same manner as PostWebMessageAsJson but the `window.chrome.webview` message event arg's data property will be a string with the same value as webMessageAsString. Use this instead of PostWebMessageAsJson if you want to communicate via simple strings rather than JSON objects.

#### Reload 

Reload the current page.

> public HRESULT [Reload](#reload)()

This is similar to navigating to the URI of current top level document including all navigation events firing and respecting any entries in the HTTP cache. But, the back/forward history will not be modified.

#### remove_ContainsFullScreenElementChanged 

Remove an event handler previously added with the corresponding add_ event method.

> public HRESULT [remove_ContainsFullScreenElementChanged](#remove_containsfullscreenelementchanged)(EventRegistrationToken token)

#### remove_ContentLoading 

Remove an event handler previously added with add_ContentLoading.

> public HRESULT [remove_ContentLoading](#remove_contentloading)(EventRegistrationToken token)

#### remove_DocumentTitleChanged 

Remove an event handler previously added with add_DocumentTitleChanged.

> public HRESULT [remove_DocumentTitleChanged](#remove_documenttitlechanged)(EventRegistrationToken token)

#### remove_FrameNavigationCompleted 

Remove an event handler previously added with add_FrameNavigationCompleted.

> public HRESULT [remove_FrameNavigationCompleted](#remove_framenavigationcompleted)(EventRegistrationToken token)

#### remove_FrameNavigationStarting 

Remove an event handler previously added with add_FrameNavigationStarting.

> public HRESULT [remove_FrameNavigationStarting](#remove_framenavigationstarting)(EventRegistrationToken token)

#### remove_HistoryChanged 

Remove an event handler previously added with add_HistoryChanged.

> public HRESULT [remove_HistoryChanged](#remove_historychanged)(EventRegistrationToken token)

#### remove_NavigationCompleted 

Remove an event handler previously added with add_NavigationCompleted.

> public HRESULT [remove_NavigationCompleted](#remove_navigationcompleted)(EventRegistrationToken token)

#### remove_NavigationStarting 

Remove an event handler previously added with add_NavigationStarting.

> public HRESULT [remove_NavigationStarting](#remove_navigationstarting)(EventRegistrationToken token)

#### remove_NewWindowRequested 

Remove an event handler previously added with add_NewWindowRequested.

> public HRESULT [remove_NewWindowRequested](#remove_newwindowrequested)(EventRegistrationToken token)

#### remove_PermissionRequested 

Remove an event handler previously added with add_PermissionRequested.

> public HRESULT [remove_PermissionRequested](#remove_permissionrequested)(EventRegistrationToken token)

#### remove_ProcessFailed 

Remove an event handler previously added with add_ProcessFailed.

> public HRESULT [remove_ProcessFailed](#remove_processfailed)(EventRegistrationToken token)

#### remove_ScriptDialogOpening 

Remove an event handler previously added with add_ScriptDialogOpening.

> public HRESULT [remove_ScriptDialogOpening](#remove_scriptdialogopening)(EventRegistrationToken token)

#### remove_SourceChanged 

Remove an event handler previously added with add_SourceChanged.

> public HRESULT [remove_SourceChanged](#remove_sourcechanged)(EventRegistrationToken token)

#### remove_WebMessageReceived 

Remove an event handler previously added with add_WebMessageReceived.

> public HRESULT [remove_WebMessageReceived](#remove_webmessagereceived)(EventRegistrationToken token)

#### remove_WebResourceRequested 

Remove an event handler previously added with add_WebResourceRequested.

> public HRESULT [remove_WebResourceRequested](#remove_webresourcerequested)(EventRegistrationToken token)

#### remove_WindowCloseRequested 

Remove an event handler previously added with add_WindowCloseRequested.

> public HRESULT [remove_WindowCloseRequested](#remove_windowcloserequested)(EventRegistrationToken token)

#### RemoveHostObjectFromScript 

Remove the host object specified by the name so that it is no longer accessible from JavaScript code in the WebView.

> public HRESULT [RemoveHostObjectFromScript](#removehostobjectfromscript)(LPCWSTR name)

While new access attempts will be denied, if the object is already obtained by JavaScript code in the WebView, the JavaScript code will continue to have access to that object. Calling this method for a name that is already removed or never added will fail.

#### RemoveScriptToExecuteOnDocumentCreated 

Remove the corresponding JavaScript added via AddScriptToExecuteOnDocumentCreated.

> public HRESULT [RemoveScriptToExecuteOnDocumentCreated](#removescripttoexecuteondocumentcreated)(LPCWSTR id)

#### RemoveWebResourceRequestedFilter 

Removes a matching WebResource filter that was previously added for the WebResourceRequested event.

> public HRESULT [RemoveWebResourceRequestedFilter](#removewebresourcerequestedfilter)(LPCWSTR const uri, [COREWEBVIEW2_WEB_RESOURCE_CONTEXT](#corewebview2_web_resource_context) const resourceContext)

If the same filter was added multiple times, then it will need to be removed as many times as it was added for the removal to be effective. Returns E_INVALIDARG for a filter that was never added.

#### Stop 

Stop all navigations and pending resource fetches.

> public HRESULT [Stop](#stop)()

Does not stop scripts.

#### COREWEBVIEW2_CAPTURE_PREVIEW_IMAGE_FORMAT 

Image format used by the ICoreWebView2::CapturePreview method.

> enum [COREWEBVIEW2_CAPTURE_PREVIEW_IMAGE_FORMAT](#corewebview2_capture_preview_image_format)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
COREWEBVIEW2_CAPTURE_PREVIEW_IMAGE_FORMAT_PNG            | PNG image format.
COREWEBVIEW2_CAPTURE_PREVIEW_IMAGE_FORMAT_JPEG            | JPEG image format.

#### COREWEBVIEW2_KEY_EVENT_KIND 

The type of key event that triggered an AcceleratorKeyPressed event.

> enum [COREWEBVIEW2_KEY_EVENT_KIND](#corewebview2_key_event_kind)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
COREWEBVIEW2_KEY_EVENT_KIND_KEY_DOWN            | Correspond to window message WM_KEYDOWN.
COREWEBVIEW2_KEY_EVENT_KIND_KEY_UP            | Correspond to window message WM_KEYUP.
COREWEBVIEW2_KEY_EVENT_KIND_SYSTEM_KEY_DOWN            | Correspond to window message WM_SYSKEYDOWN.
COREWEBVIEW2_KEY_EVENT_KIND_SYSTEM_KEY_UP            | Correspond to window message WM_SYSKEYUP.

#### COREWEBVIEW2_MOVE_FOCUS_REASON 

Reason for moving focus.

> enum [COREWEBVIEW2_MOVE_FOCUS_REASON](#corewebview2_move_focus_reason)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
COREWEBVIEW2_MOVE_FOCUS_REASON_PROGRAMMATIC            | Code setting focus into WebView.
COREWEBVIEW2_MOVE_FOCUS_REASON_NEXT            | Moving focus due to Tab traversal forward.
COREWEBVIEW2_MOVE_FOCUS_REASON_PREVIOUS            | Moving focus due to Tab traversal backward.

#### COREWEBVIEW2_PERMISSION_KIND 

The type of a permission request.

> enum [COREWEBVIEW2_PERMISSION_KIND](#corewebview2_permission_kind)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
COREWEBVIEW2_PERMISSION_KIND_UNKNOWN_PERMISSION            | Unknown permission.
COREWEBVIEW2_PERMISSION_KIND_MICROPHONE            | Permission to capture audio.
COREWEBVIEW2_PERMISSION_KIND_CAMERA            | Permission to capture video.
COREWEBVIEW2_PERMISSION_KIND_GEOLOCATION            | Permission to access geolocation.
COREWEBVIEW2_PERMISSION_KIND_NOTIFICATIONS            | Permission to send web notifications.
COREWEBVIEW2_PERMISSION_KIND_OTHER_SENSORS            | Permission to access generic sensor.
COREWEBVIEW2_PERMISSION_KIND_CLIPBOARD_READ            | Permission to read system clipboard without a user gesture.

#### COREWEBVIEW2_PERMISSION_STATE 

Response to a permission request.

> enum [COREWEBVIEW2_PERMISSION_STATE](#corewebview2_permission_state)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
COREWEBVIEW2_PERMISSION_STATE_DEFAULT            | Use default browser behavior, which normally prompt users for decision.
COREWEBVIEW2_PERMISSION_STATE_ALLOW            | Grant the permission request.
COREWEBVIEW2_PERMISSION_STATE_DENY            | Deny the permission request.

#### COREWEBVIEW2_PHYSICAL_KEY_STATUS 

A structure representing the information packed into the LPARAM given to a Win32 key event.

> typedef [COREWEBVIEW2_PHYSICAL_KEY_STATUS](#corewebview2_physical_key_status)

See the documentation for WM_KEYDOWN for details at [https://docs.microsoft.com/windows/win32/inputdev/wm-keydown](https://docs.microsoft.com/windows/win32/inputdev/wm-keydown)

#### COREWEBVIEW2_PROCESS_FAILED_KIND 

Kind of process failure used in the ICoreWebView2ProcessFailedEventHandler interface.

> enum [COREWEBVIEW2_PROCESS_FAILED_KIND](#corewebview2_process_failed_kind)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
COREWEBVIEW2_PROCESS_FAILED_KIND_BROWSER_PROCESS_EXITED            | Indicates the browser process terminated unexpectedly.
COREWEBVIEW2_PROCESS_FAILED_KIND_RENDER_PROCESS_EXITED            | Indicates the render process terminated unexpectedly.
COREWEBVIEW2_PROCESS_FAILED_KIND_RENDER_PROCESS_UNRESPONSIVE            | Indicates the render process becomes unresponsive.

#### COREWEBVIEW2_SCRIPT_DIALOG_KIND 

Kind of JavaScript dialog used in the ICoreWebView2ScriptDialogOpeningEventHandler interface.

> enum [COREWEBVIEW2_SCRIPT_DIALOG_KIND](#corewebview2_script_dialog_kind)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
COREWEBVIEW2_SCRIPT_DIALOG_KIND_ALERT            | A dialog invoked via the window.alert JavaScript function.
COREWEBVIEW2_SCRIPT_DIALOG_KIND_CONFIRM            | A dialog invoked via the window.confirm JavaScript function.
COREWEBVIEW2_SCRIPT_DIALOG_KIND_PROMPT            | A dialog invoked via the window.prompt JavaScript function.
COREWEBVIEW2_SCRIPT_DIALOG_KIND_BEFOREUNLOAD            | A dialog invoked via the beforeunload JavaScript event.

#### COREWEBVIEW2_WEB_ERROR_STATUS 

Error status values for web navigations.

> enum [COREWEBVIEW2_WEB_ERROR_STATUS](#corewebview2_web_error_status)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
COREWEBVIEW2_WEB_ERROR_STATUS_UNKNOWN            | An unknown error occurred.
COREWEBVIEW2_WEB_ERROR_STATUS_CERTIFICATE_COMMON_NAME_IS_INCORRECT            | The SSL certificate common name does not match the web address.
COREWEBVIEW2_WEB_ERROR_STATUS_CERTIFICATE_EXPIRED            | The SSL certificate has expired.
COREWEBVIEW2_WEB_ERROR_STATUS_CLIENT_CERTIFICATE_CONTAINS_ERRORS            | The SSL client certificate contains errors.
COREWEBVIEW2_WEB_ERROR_STATUS_CERTIFICATE_REVOKED            | The SSL certificate has been revoked.
COREWEBVIEW2_WEB_ERROR_STATUS_CERTIFICATE_IS_INVALID            | The SSL certificate is invalid &ndash; this could mean the certificate did not match the public key pins for the host name, the certificate is signed by an untrusted authority or using a weak sign algorithm, the certificate claimed DNS names violate name constraints, the certificate contains a weak key, the certificate's validity period is too long, lack of revocation information or revocation mechanism, non-unique host name, lack of certificate transparency information, or the certificate is chained to a [legacy Symantec root](https://security.googleblog.com/2018/03/distrust-of-symantec-pki-immediate.html).
COREWEBVIEW2_WEB_ERROR_STATUS_SERVER_UNREACHABLE            | The host is unreachable.
COREWEBVIEW2_WEB_ERROR_STATUS_TIMEOUT            | The connection has timed out.
COREWEBVIEW2_WEB_ERROR_STATUS_ERROR_HTTP_INVALID_SERVER_RESPONSE            | The server returned an invalid or unrecognized response.
COREWEBVIEW2_WEB_ERROR_STATUS_CONNECTION_ABORTED            | The connection was aborted.
COREWEBVIEW2_WEB_ERROR_STATUS_CONNECTION_RESET            | The connection was reset.
COREWEBVIEW2_WEB_ERROR_STATUS_DISCONNECTED            | The Internet connection has been lost.
COREWEBVIEW2_WEB_ERROR_STATUS_CANNOT_CONNECT            | Cannot connect to destination.
COREWEBVIEW2_WEB_ERROR_STATUS_HOST_NAME_NOT_RESOLVED            | Could not resolve provided host name.
COREWEBVIEW2_WEB_ERROR_STATUS_OPERATION_CANCELED            | The operation was canceled.
COREWEBVIEW2_WEB_ERROR_STATUS_REDIRECT_FAILED            | The request redirect failed.
COREWEBVIEW2_WEB_ERROR_STATUS_UNEXPECTED_ERROR            | An unexpected error occurred.

#### COREWEBVIEW2_WEB_RESOURCE_CONTEXT 

Enum for web resource request contexts.

> enum [COREWEBVIEW2_WEB_RESOURCE_CONTEXT](#corewebview2_web_resource_context)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
COREWEBVIEW2_WEB_RESOURCE_CONTEXT_ALL            | All resources.
COREWEBVIEW2_WEB_RESOURCE_CONTEXT_DOCUMENT            | Document resources.
COREWEBVIEW2_WEB_RESOURCE_CONTEXT_STYLESHEET            | CSS resources.
COREWEBVIEW2_WEB_RESOURCE_CONTEXT_IMAGE            | Image resources.
COREWEBVIEW2_WEB_RESOURCE_CONTEXT_MEDIA            | Other media resources such as videos.
COREWEBVIEW2_WEB_RESOURCE_CONTEXT_FONT            | Font resources.
COREWEBVIEW2_WEB_RESOURCE_CONTEXT_SCRIPT            | Script resources.
COREWEBVIEW2_WEB_RESOURCE_CONTEXT_XML_HTTP_REQUEST            | XML HTTP requests.
COREWEBVIEW2_WEB_RESOURCE_CONTEXT_FETCH            | Fetch API communication.
COREWEBVIEW2_WEB_RESOURCE_CONTEXT_TEXT_TRACK            | TextTrack resources.
COREWEBVIEW2_WEB_RESOURCE_CONTEXT_EVENT_SOURCE            | EventSource API communication.
COREWEBVIEW2_WEB_RESOURCE_CONTEXT_WEBSOCKET            | WebSocket API communication.
COREWEBVIEW2_WEB_RESOURCE_CONTEXT_MANIFEST            | Web App Manifests.
COREWEBVIEW2_WEB_RESOURCE_CONTEXT_SIGNED_EXCHANGE            | Signed HTTP Exchanges.
COREWEBVIEW2_WEB_RESOURCE_CONTEXT_PING            | Ping requests.
COREWEBVIEW2_WEB_RESOURCE_CONTEXT_CSP_VIOLATION_REPORT            | CSP Violation Reports.
COREWEBVIEW2_WEB_RESOURCE_CONTEXT_OTHER            | Other resources.

