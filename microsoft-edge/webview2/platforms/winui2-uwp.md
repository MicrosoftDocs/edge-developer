---
title: WebView2 in WinUI 2 (UWP) apps
description: WebView2 in WinUI 2 (UWP) apps.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 01/24/2025
---
# WebView2 in WinUI 2 (UWP) apps


<!-- ====================================================================== -->
## Special considerations for WebView2 on WinUI 2 (UWP)

The WebView2 WinUI 2 (UWP) control is in development.


<!-- ------------------------------ -->
#### Autofill UI

Autofill UI is not implemented yet for WebView2 for UWP apps.

See also:
* [Autofill](../concepts/overview-features-apis.md#autofill) in _Overview of WebView2 APIs_.


<!-- ------------------------------ -->
#### Print to PDF

Print to PDF requires that the app have access to a writeable location in UWP, such as a local folder.  For a full list of UWP-accessible paths, see [File access permissions](/windows/uwp/files/file-access-permissions).

See also:
* [Printing](../concepts/overview-features-apis.md#printing) in _Overview of WebView2 APIs_.


<!-- ------------------------------ -->
#### Default printing

Default printing is disabled for WebView2 for UWP apps.  However, you can capture and print the current viewport, by calling `CapturePreview`.

See also:
* [Image capture](../concepts/overview-features-apis.md#image-capture) in _Overview of WebView2 APIs_.


<!-- ------------------------------ -->
#### SmartScreen

WebView2 sends URLs that are navigated to in your application to the [SmartScreen](/windows/security/threat-protection/microsoft-defender-smartscreen/microsoft-defender-smartscreen-overview) service, to ensure that your customers stay secure. If you want to disable this navigation, you can do so via an environment variable:

* `Environment.SetEnvironmentVariable("WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS", "--disable-features=msSmartScreenProtection");`

This environment variable must be set prior to `CoreWebView2` creation, which occurs when the [WebView2.Source property](/windows/winui/api/microsoft.ui.xaml.controls.webview2.source) is initially set or the [WebView2.EnsureCoreWebView2Async method](/windows/winui/api/microsoft.ui.xaml.controls.webview2.ensurecorewebview2async) is initially called.


<!-- ------------------------------ -->
#### Downloading files

There are a couple of known limitations for current downloads behavior for WebView2 in UWP.

###### Save As

Saving files via **Save As** is working and is enabled for WebView2 for UWP apps.  The files will be saved in the folder that the user selects.

###### Which folder the files are downloaded to

If the host doesn't change the `ResultFilePath` of the downloaded file, the downloaded files will be downloaded to a subfolder with the app package's name in the `Downloads` folder.

If the host changes the `ResultFilePath` of the downloaded file, the file will only be downloaded if the app has access to that file path by default. If you want to use a file location that the app doesn't have access to by default, you must set the corresponding capability. See [App capability declarations](/windows/uwp/packaging/app-capability-declarations) in the UWP documentation.

###### Downloads Hub

Opening files and folders from the Downloads Hub is disabled.  Clicking on the file or folder icon won't open the respective file/folder.

See also:
* [Downloads](../concepts/overview-features-apis.md#downloads) in _Overview of WebView2 APIs_.


<!-- ------------------------------ -->
#### XAML limitation

XAML Island support requires additional work and may be considered for future releases.


<!-- ------------------------------ -->
#### Setting DefaultBackgroundColor

On WinUI 2, the `DefaultBackgroundColor` property is not exposed directly.  You can set the default background color by setting an environment variable, as follows:

```csharp
Environment.SetEnvironmentVariable("WEBVIEW2_DEFAULT_BACKGROUND_COLOR", "FF000000");
```

See also:
* .NET: [WebView2.DefaultBackgroundColor Property](/dotnet/api/microsoft.web.webview2.winforms.webview2.defaultbackgroundcolor)
* Win32: [ICoreWebView2Controller2::DefaultBackgroundColor property (get](/microsoft-edge/webview2/reference/win32/icorewebview2controller2#get_defaultbackgroundcolor), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2controller2#put_defaultbackgroundcolor)


<!-- ------------------------------ -->
#### Setting transparency

On WinUI 2, transparency is achieved by setting the color to `00FFFFFF`.


<!-- ------------------------------ -->
#### CSS cursors

On WinUI 2 (UWP), CSS cursors have the following limitations.


###### Image URLs

The CSS cursor cannot be an image URL, such as `cursor: url(https://contoso.com/cursor.png), pointer;`.  See [CSS - cursor loaded from URL doesn't work](https://github.com/MicrosoftEdge/WebView2Feedback/issues/1925).


###### Predefined CSS cursors

On WinUI 2 (UWP), some of the predefined CSS cursors are not supported.  You can use CSS cursors to change the cursor to some of the predefined cursors, such as `cursor: wait;` or `cursor: crosshair;`, but not to others, such as `cursor: progress` or `cursor: none`.

| Keyword | Supported? |
|---|:---:|
| **General** |  |
| auto | ✔️ |
| default | ✔️ |
| none | ❌ |
| **Links & status** |  |
| context-menu | ✔️ |
| help | ✔️ |
| pointer | ✔️ |
| progress | ❌ |
| wait | ✔️ |
| **Selection** |  |
| cell | ❌ |
| crosshair | ✔️ |
| text | ✔️ |
| vertical-text | ❌ |
| **Drag & drop** |  |
| alias | ❌ |
| copy | ❌ |
| move | ✔️ |
| no-drop | ✔️ |
| not-allowed | ✔️ |
| grab | ❌ |
| grabbing | ❌ |
| **Resizing & scrolling** |  |
| all-scroll | ✔️ |
| col-resize | ❌ |
| row-resize | ❌ |
| n-resize | ✔️ |
| e-resize | ✔️ |
| s-resize | ✔️ |
| w-resize | ✔️ |
| ne-resize | ✔️ |
| nw-resize | ✔️ |
| se-resize | ✔️ |
| sw-resize | ✔️ |
| ew-resize | ✔️ |
| ns-resize | ✔️ |
| nesw-resize | ✔️ |
| nwse-resize | ✔️ |
| **Zooming** |  |
| zoom-in | ❌ |
| zoom-out | ❌ |

See also:
* [CSS cursors](https://developer.mozilla.org/docs/Web/CSS/cursor#values) - the **Values** section describes the above keyword values.
<!-- known limitation: destination page doesn't scroll to anchor -->


<!-- ------------------------------ -->
#### Microsoft Edge Developer Tools

On WinUI 2, Microsoft Edge DevTools cannot be launched inside a store-signed WebView2 WinUI 2 (UWP) app.  However, you can work around this by using remote debugging.  See [Remote debugging WebView2 WinUI 2 (UWP) apps](../how-to/remote-debugging.md).


<!-- ------------------------------ -->
#### API limitations

The following classes aren't accessible in WinUI 2:

* `CoreWebView2EnvironmentOptions`
* `CoreWebView2ControllerOptions`


<!-- ====================================================================== -->
<!-- ## See also -->
<!-- all links in article -->

* [Autofill](../concepts/overview-features-apis.md#autofill) in _Overview of WebView2 APIs_.
* [Printing](../concepts/overview-features-apis.md#printing) in _Overview of WebView2 APIs_.
* [Image capture](../concepts/overview-features-apis.md#image-capture) in _Overview of WebView2 APIs_.
* [Downloads](../concepts/overview-features-apis.md#downloads) in _Overview of WebView2 APIs_.
* [Remote debugging WebView2 WinUI 2 (UWP) apps](../how-to/remote-debugging.md)

API Reference:
* .NET: [WebView2.DefaultBackgroundColor Property](/dotnet/api/microsoft.web.webview2.winforms.webview2.defaultbackgroundcolor)
* Win32: [ICoreWebView2Controller2::_getDefaultBackgroundColor](/microsoft-edge/webview2/reference/win32/icorewebview2controller2#get_defaultbackgroundcolor)
* Win32: [ICoreWebView2Controller2::_putDefaultBackgroundColor](/microsoft-edge/webview2/reference/win32/icorewebview2controller2#put_defaultbackgroundcolor)

Windows docs:
* [SmartScreen](/windows/security/threat-protection/microsoft-defender-smartscreen/microsoft-defender-smartscreen-overview)
* [WebView2.Source property](/windows/winui/api/microsoft.ui.xaml.controls.webview2.source)
* [WebView2.EnsureCoreWebView2Async method](/windows/winui/api/microsoft.ui.xaml.controls.webview2.ensurecorewebview2async)
* [App capability declarations](/windows/uwp/packaging/app-capability-declarations)

MDN:
* [Values](https://developer.mozilla.org/docs/Web/CSS/cursor#values) in _cursor_ CSS property at MDN.

WebView2Feedback repo:
* [CSS - cursor loaded from URL doesn't work](https://github.com/MicrosoftEdge/WebView2Feedback/issues/1925)
