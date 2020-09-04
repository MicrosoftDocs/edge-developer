---
description: Embed web technologies (HTML, CSS, and JavaScript) in your native applications with the Microsoft Edge WebView2 control
title: WebView2 Win32 C++ ICoreWebView2
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/23/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html, ICoreWebView2
---

# interface ICoreWebView2 

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
[RemoveScriptToExecuteOnDocumentCreated](#removescripttoexecuteondocumentcreated) | Remove the corresponding JavaScript added using `AddScriptToExecuteOnDocumentCreated` with the specified script id.
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

## Members

::: moniker range="<= webview2-0.9.430"
    This is 0.9.430
::: moniker-end

::: moniker range="> webview2-0.9.430"
    This is newer
::: moniker-end
