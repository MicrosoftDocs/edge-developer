---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: Microsoft Edge WebView2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/27/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html
---

# namespace Microsoft.Web.WebView2.Core 

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[CoreWebView2WebResourceContext](#corewebview2webresourcecontext) | Enum for web resource request contexts.
[CoreWebView2WebErrorStatus](#corewebview2weberrorstatus) | Error status values for web navigations.
[CoreWebView2ScriptDialogKind](#corewebview2scriptdialogkind) | Kind of JavaScript dialog used in the CoreWebView2ScriptDialogOpeningEventHandler class.
[CoreWebView2ProcessFailedKind](#corewebview2processfailedkind) | Kind of process failure used in the CoreWebView2ProcessFailedEventHandler class.
[CoreWebView2PointerEventKind](#corewebview2pointereventkind) | Pointer event type used by SendPointerInput to convey the type of pointer event being sent to WebView.
[CoreWebView2PermissionState](#corewebview2permissionstate) | Response to a permission request.
[CoreWebView2PermissionKind](#corewebview2permissionkind) | The type of a permission request.
[CoreWebView2MoveFocusReason](#corewebview2movefocusreason) | Reason for moving focus.
[CoreWebView2MouseEventVirtualKeys](#corewebview2mouseeventvirtualkeys) | Mouse event virtual keys associated with a CoreWebView2MouseEventKind for SendMouseInput.
[CoreWebView2MouseEventKind](#corewebview2mouseeventkind) | Mouse event type used by SendMouseInput to convey the type of mouse event being sent to WebView.
[CoreWebView2KeyEventKind](#corewebview2keyeventkind) | The type of key event that triggered an AcceleratorKeyPressed event.
[CoreWebView2CapturePreviewImageFormat](#corewebview2capturepreviewimageformat) | Image format used by the CoreWebView2CapturePreview method.

## Members

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

#### CoreWebView2ScriptDialogKind 

> enum [CoreWebView2ScriptDialogKind](#corewebview2scriptdialogkind)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
Alert            | A dialog invoked via the window.alert JavaScript function.
Confirm            | A dialog invoked via the window.confirm JavaScript function.
Prompt            | A dialog invoked via the window.prompt JavaScript function.
Beforeunload            | A dialog invoked via the window.beforeunload JavaScript function.

Kind of JavaScript dialog used in the CoreWebView2ScriptDialogOpeningEventHandler class.

#### CoreWebView2ProcessFailedKind 

> enum [CoreWebView2ProcessFailedKind](#corewebview2processfailedkind)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
BrowserProcessExited            | Indicated the browser process terminated unexpectedly.
RenderProcessExited            | Indicated the render process terminated unexpectedly.
RenderProcessUnresponsive            | Indicated the render process becomes unresponsive.

Kind of process failure used in the CoreWebView2ProcessFailedEventHandler class.

#### CoreWebView2PointerEventKind 

> enum [CoreWebView2PointerEventKind](#corewebview2pointereventkind)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
Activate            | Corresponds to WM_POINTERACTIVATE.
Down            | Corresponds to WM_POINTERDOWN.
Enter            | Corresponds to WM_POINTERENTER.
Leave            | Corresponds to WM_POINTERLEAVE.
Up            | Corresponds to WM_POINTERUP.
Update            | Corresponds to WM_POINTERUPDATE.

Pointer event type used by SendPointerInput to convey the type of pointer event being sent to WebView.

#### CoreWebView2PermissionState 

> enum [CoreWebView2PermissionState](#corewebview2permissionstate)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
Default            | Use default browser behavior, which normally prompt users for decision.
Allow            | Grant the permission request.
Deny            | Deny the permission request.

Response to a permission request.

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

#### CoreWebView2MoveFocusReason 

> enum [CoreWebView2MoveFocusReason](#corewebview2movefocusreason)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
Programmatic            | Code setting focus into WebView.
Next            | Moving focus due to Tab traversal forward.
Previous            | Moving focus due to Tab traversal backward.

Reason for moving focus.

#### CoreWebView2MouseEventVirtualKeys 

> enum [CoreWebView2MouseEventVirtualKeys](#corewebview2mouseeventvirtualkeys)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
None            | No additional keys pressed.
LeftButton            | Left mouse button is down, MK_LBUTTON.
RightButton            | Right mouse button is down, MK_RBUTTON.
Shift            | SHIFT key is down, MK_SHIFT.
Control            | CTRL key is down, MK_CONTROL.
MiddleButton            | Middle mouse button is down, MK_MBUTTON.
XButton1            | First X button is down, MK_XBUTTON1.
XButton2            | Second X button is down, MK_XBUTTON2.

Mouse event virtual keys associated with a CoreWebView2MouseEventKind for SendMouseInput.

#### CoreWebView2MouseEventKind 

> enum [CoreWebView2MouseEventKind](#corewebview2mouseeventkind)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
HorizontalWheel            | Mouse horizontal wheel scroll event, WM_MOUSEHWHEEL.
LeftButtonDoubleClick            | Left button double click mouse event, WM_LBUTTONDBLCLK.
LeftButtonDown            | Left button down mouse event, WM_LBUTTONDOWN.
LeftButtonUp            | Left button up mouse event, WM_LBUTTONUP.
Leave            | Mouse leave event, WM_MOUSELEAVE.
MiddleButtonDoubleClick            | Middle button double click mouse event, WM_MBUTTONDBLCLK.
MiddleButtonDown            | Middle button down mouse event, WM_MBUTTONDOWN.
MiddleButtonUp            | Middle button up mouse event, WM_MBUTTONUP.
Move            | Mouse move event, WM_MOUSEMOVE.
RightButtonDoubleClick            | Right button double click mouse event, WM_RBUTTONDBLCLK.
RightButtonDown            | Right button down mouse event, WM_RBUTTONDOWN.
RightButtonUp            | Right button up mouse event, WM_RBUTTONUP.
Wheel            | Mouse wheel scroll event, WM_MOUSEWHEEL.
XButtonDoubleClick            | First or second X button double click mouse event, WM_XBUTTONDBLCLK.
XButtonDown            | First or second X button down mouse event, WM_XBUTTONDOWN.
XButtonUp            | First or second X button up mouse event, WM_XBUTTONUP.

Mouse event type used by SendMouseInput to convey the type of mouse event being sent to WebView.

#### CoreWebView2KeyEventKind 

> enum [CoreWebView2KeyEventKind](#corewebview2keyeventkind)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
KeyDown            | Correspond to window message WM_KEYDOWN.
KeyUp            | Correspond to window message WM_KEYUP.
SystemKeyDown            | Correspond to window message WM_SYSKEYDOWN.
SystemKeyUp            | Correspond to window message WM_SYSKEYUP.

The type of key event that triggered an AcceleratorKeyPressed event.

#### CoreWebView2CapturePreviewImageFormat 

> enum [CoreWebView2CapturePreviewImageFormat](#corewebview2capturepreviewimageformat)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
Png            | PNG image format.
Jpeg            | JPEG image format.

Image format used by the CoreWebView2CapturePreview method.

