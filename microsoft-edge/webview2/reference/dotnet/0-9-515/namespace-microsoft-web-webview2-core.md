---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: 0.9.515 - Microsoft.Web.WebView2.Core
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/20/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html
---

# 0.9.515 - Microsoft.Web.WebView2.Core namespace 

[!INCLUDE [deprecation-note](../../includes/deprecation-note.md)]

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[CoreWebView2CapturePreviewImageFormat](#corewebview2capturepreviewimageformat) | Image format used by the CoreWebView2CapturePreview method.
[CoreWebView2KeyEventKind](#corewebview2keyeventkind) | The type of key event that triggered an AcceleratorKeyPressed event.
[CoreWebView2MoveFocusReason](#corewebview2movefocusreason) | Reason for moving focus.
[CoreWebView2PermissionKind](#corewebview2permissionkind) | The type of a permission request.
[CoreWebView2PermissionState](#corewebview2permissionstate) | Response to a permission request.
[CoreWebView2ProcessFailedKind](#corewebview2processfailedkind) | Kind of process failure used in the CoreWebView2ProcessFailedEventHandler class.
[CoreWebView2ScriptDialogKind](#corewebview2scriptdialogkind) | Kind of JavaScript dialog used in the CoreWebView2ScriptDialogOpeningEventHandler class.
[CoreWebView2WebErrorStatus](#corewebview2weberrorstatus) | Error status values for web navigations.
[CoreWebView2WebResourceContext](#corewebview2webresourcecontext) | Enum for web resource request contexts.
CoreWebView2 | WebView2 enables you to host web content using the latest Edge web browser technology.
CoreWebView2AcceleratorKeyPressedEventArgs | Event args for the AcceleratorKeyPressed event.
CoreWebView2ContentLoadingEventArgs | Event args for the ContentLoading event.
CoreWebView2Controller | This class is the owner of the CoreWebView2 object, and provides support for resizing, showing and hiding, focusing, and other functionality related to windowing and composition.
CoreWebView2Deferral | This class is used to complete deferrals on event args that support getting deferrals via their GetDeferral method.
CoreWebView2DevToolsProtocolEventReceivedEventArgs | Event args for the DevToolsProtocolEventReceived event.
CoreWebView2DevToolsProtocolEventReceiver | A Receiver is created for a particular DevTools Protocol event and allows you to subscribe and unsubscribe from that event.
CoreWebView2Environment | This represents the WebView2 Environment.
CoreWebView2EnvironmentOptions | Options used to create WebView2 Environment.
CoreWebView2MoveFocusRequestedEventArgs | Event args for the MoveFocusRequested event.
CoreWebView2NavigationCompletedEventArgs | Event args for the NavigationCompleted event.
CoreWebView2NavigationStartingEventArgs | Event args for the NavigationStarting event.
CoreWebView2NewWindowRequestedEventArgs | Event args for the NewWindowRequested event.
CoreWebView2PermissionRequestedEventArgs | Event args for the PermissionRequested event.
CoreWebView2ProcessFailedEventArgs | Event args for the ProcessFailed event.
CoreWebView2ScriptDialogOpeningEventArgs | Event args for the ScriptDialogOpening event.
CoreWebView2Settings | Defines properties that enable, disable, or modify WebView features.
CoreWebView2SourceChangedEventArgs | Event args for the SourceChanged event.
CoreWebView2WebMessageReceivedEventArgs | Event args for the WebMessageReceived event.
CoreWebView2WebResourceRequestedEventArgs | Event args for the WebResourceRequested event.
EdgeNotFoundException | The exception that is thrown when an Edge installation is missing.
CoreWebView2PhysicalKeyStatus | A structure representing the information packed into the LPARAM given to a Win32 key event.

## Members

#### CoreWebView2CapturePreviewImageFormat 

> enum [CoreWebView2CapturePreviewImageFormat](#corewebview2capturepreviewimageformat)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
Png            | PNG image format.
Jpeg            | JPEG image format.

Image format used by the CoreWebView2CapturePreview method.

#### CoreWebView2KeyEventKind 

> enum [CoreWebView2KeyEventKind](#corewebview2keyeventkind)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
KeyDown            | Correspond to window message WM_KEYDOWN.
KeyUp            | Correspond to window message WM_KEYUP.
SystemKeyDown            | Correspond to window message WM_SYSKEYDOWN.
SystemKeyUp            | Correspond to window message WM_SYSKEYUP.

The type of key event that triggered an AcceleratorKeyPressed event.

#### CoreWebView2MoveFocusReason 

> enum [CoreWebView2MoveFocusReason](#corewebview2movefocusreason)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
Programmatic            | Code setting focus into WebView.
Next            | Moving focus due to Tab traversal forward.
Previous            | Moving focus due to Tab traversal backward.

Reason for moving focus.

#### CoreWebView2PermissionKind 

> enum [CoreWebView2PermissionKind](#corewebview2permissionkind)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
UnknownPermission            | Unknown permission.
Microphone            | Permission to capture audio.
Camera            | Permission to capture video.
Geolocation            | Permission to access geolocation.
Notifications            | Permission to send web notifications.
OtherSensors            | Permission to access generic sensor.
ClipboardRead            | Permission to read system clipboard without a user gesture.

The type of a permission request.

#### CoreWebView2PermissionState 

> enum [CoreWebView2PermissionState](#corewebview2permissionstate)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
Default            | Use default browser behavior, which normally prompt users for decision.
Allow            | Grant the permission request.
Deny            | Deny the permission request.

Response to a permission request.

#### CoreWebView2ProcessFailedKind 

> enum [CoreWebView2ProcessFailedKind](#corewebview2processfailedkind)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
BrowserProcessExited            | Indicated the browser process terminated unexpectedly.
RenderProcessExited            | Indicated the render process terminated unexpectedly.
RenderProcessUnresponsive            | Indicated the render process becomes unresponsive.

Kind of process failure used in the CoreWebView2ProcessFailedEventHandler class.

#### CoreWebView2ScriptDialogKind 

> enum [CoreWebView2ScriptDialogKind](#corewebview2scriptdialogkind)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
Alert            | A dialog invoked via the window.alert JavaScript function.
Confirm            | A dialog invoked via the window.confirm JavaScript function.
Prompt            | A dialog invoked via the window.prompt JavaScript function.
Beforeunload            | A dialog invoked via the window.beforeunload JavaScript function.

Kind of JavaScript dialog used in the CoreWebView2ScriptDialogOpeningEventHandler class.

#### CoreWebView2WebErrorStatus 

> enum [CoreWebView2WebErrorStatus](#corewebview2weberrorstatus)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
Unknown            | An unknown error occurred.
CertificateCommonNameIsIncorrect            | The SSL certificate common name does not match the web address.
CertificateExpired            | The SSL certificate has expired.
ClientCertificateContainsErrors            | The SSL client certificate contains errors.
CertificateRevoked            | The SSL certificate has been revoked.
CertificateIsInvalid            | The SSL certificate is invalid &ndash; this could mean the certificate did not match the public key pins for the host name, the certificate is signed by an untrusted authority or using a weak sign algorithm, the certificate claimed DNS names violate name constraints, the certificate contains a weak key, the certificate's validity period is too long, lack of revocation information or revocation mechanism, non-unique host name, lack of certificate transparency information, or the certificate is chained to a [legacy Symantec root](https://security.googleblog.com/2018/03/distrust-of-symantec-pki-immediate.html).
ServerUnreachable            | The host is unreachable.
Timeout            | The connection has timed out.
ErrorHttpInvalidServerResponse            | The server returned an invalid or unrecognized response.
ConnectionAborted            | The connection was aborted.
ConnectionReset            | The connection was reset.
Disconnected            | The Internet connection has been lost.
CannotConnect            | Cannot connect to destination.
HostNameNotResolved            | Could not resolve provided host name.
OperationCanceled            | The operation was canceled.
RedirectFailed            | The request redirect failed.
UnexpectedError            | An unexpected error occurred.

Error status values for web navigations.

#### CoreWebView2WebResourceContext 

> enum [CoreWebView2WebResourceContext](#corewebview2webresourcecontext)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
All            | All resources.
Document            | Document resources.
Stylesheet            | CSS resources.
Image            | Image resources.
Media            | Other media resources such as videos.
Font            | Font resources.
Script            | Script resources.
XmlHttpRequest            | XML HTTP requests.
Fetch            | Fetch API communication.
TextTrack            | TextTrack resources.
EventSource            | EventSource API communication.
Websocket            | WebSocket API communication.
Manifest            | Web App Manifests.
SignedExchange            | Signed HTTP Exchanges.
Ping            | Ping requests.
CspViolationReport            | CSP Violation Reports.
Other            | Other resources.

Enum for web resource request contexts.

