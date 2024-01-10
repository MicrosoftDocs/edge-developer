---
title: Handling process-related events in WebView2
description: Process-related events in WebView2 and how apps can handle them for recovery and improved reliability.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 07/13/2023
---
# Handling process-related events in WebView2

WebView2 uses multiple processes to support the WebView2 controls in your application. Because these processes can exit during use, WebView2 provides the `CoreWebView2.ProcessFailed` and `CoreWebView2Environment.BrowserProcessExited` events for your application to react to different scenarios.  Use this document to learn how to use these events to react when these scenarios occur.

To improve the reliability of your WebView2 application, it is recommended that your app handles at least the following events:
* [The main browser process has exited unexpectedly](#the-main-browser-process-has-exited-unexpectedly).
* [A process rendering content in the WebView2 control has exited unexpectedly](#a-process-rendering-content-in-the-webview2-control-has-exited-unexpectedly).
* [A renderer process becomes unresponsive](#handle-unresponsive-renderers).

To use this article, we recommend first reading [Process model for WebView2 apps](./process-model.md).  For a list of process-related APIs covered by this article, see [Process management](overview-features-apis.md#process-management) in _Overview of WebView2 features and APIs_.


<!-- ------------------------------
**Detailed contents:**

* [Events for processes that exited or failed](#events-for-processes-that-exited-or-failed)
* [Gathering process failure details](#gathering-process-failure-details)
* [Handle process crashes](#handle-process-crashes)
   * [The main browser process has exited unexpectedly](#the-main-browser-process-has-exited-unexpectedly)
   * [A process rendering content in the WebView2 control has exited unexpectedly](#a-process-rendering-content-in-the-webview2-control-has-exited-unexpectedly)
   * [The GPU process has exited unexpectedly](#the-gpu-process-has-exited-unexpectedly)
   * [A utility process has exited unexpectedly](#a-utility-process-has-exited-unexpectedly)
   * [Any other process has exited unexpectedly](#any-other-process-has-exited-unexpectedly)
* [Handle unresponsive renderers](#handle-unresponsive-renderers)
* [Handle main browser process exited](#handle-main-browser-process-exited)
   * [Clearing the user data folder](#clearing-the-user-data-folder)
   * [Updating the WebView2 Runtime](#updating-the-webview2-runtime)
   * [Restarting with a different environment configuration](#restarting-with-a-different-environment-configuration)
   * [Clearing the auth cache](#clearing-the-auth-cache)
* [See also](#see-also)
-->


<!-- ====================================================================== -->
## Events for processes that exited or failed

When you initialize a WebView2 control, WebView2 will ensure there's a WebView2 Runtime to power your control and connect to its [WebView2 Process Group](process-model.md#processes-in-the-webview2-runtime). Once this connection is established, your control will start monitoring these processes and report the following events so your application can react accordingly:

* **Any process failure.**  When _any of the processes_ in the WebView2 Runtime fails, the CoreWebView2 will raise the `ProcessFailed` event. This can be due to a process crash, or an unresponsive renderer process. Use this event for diagnostics and recovery from failures in the WebView2 processes.  See [Handle process crashes](#handle-process-crashes) and [A process rendering content in the WebView2 control has exited unexpectedly](#a-process-rendering-content-in-the-webview2-control-has-exited-unexpectedly), below.

* **Main browser process exits.**  If the main browser process exits for _any reason_, the `CoreWebView2Environment` will raise the `BrowserProcessExited` event. Use this event to synchronize operations involving the WebView2 Runtime resources and lifetime, such as _User Data Folder_ management and updates. See [Handle main browser process exited](#handle-main-browser-process-exited), below.

* **Main browser process crashes.**  When the main browser process crashes, it will produce both a `ProcessFailed` event and a `BrowserProcessExited` event, since the main browser process _exited_ because of a failure.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.ProcessFailed Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.processfailed)
* [CoreWebView2Environment.BrowserProcessExited Event](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.browserprocessexited)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.ProcessFailed Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#processfailed)
* [CoreWebView2Environment.BrowserProcessExited Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#browserprocessexited)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2::add_ProcessFailed event](/microsoft-edge/webview2/reference/win32/icorewebview2#add_processfailed)
* [ICoreWebView2::remove_ProcessFailed event](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_processfailed)
* [ICoreWebView2Environment5::add_BrowserProcessExited event](/microsoft-edge/webview2/reference/win32/icorewebview2environment5#add_browserprocessexited)
* [ICoreWebView2Environment5::remove_BrowserProcessExited event](/microsoft-edge/webview2/reference/win32/icorewebview2environment5#remove_browserprocessexited)

---


<!-- ====================================================================== -->
## Gathering process failure details

The `ProcessFailed` event provides detailed information about the process failure being reported.  Your application can use and collect information from the event args for monitoring and diagnostics purposes, including process description (for utility processes only) and frames information (for renderer processes only).

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2ProcessFailedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2processfailedeventargs)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2ProcessFailedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2processfailedeventargs)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ProcessFailedEventArgs2 interface](/microsoft-edge/webview2/reference/win32/icorewebview2processfailedeventargs2)

---

Some process failures might raise the `ProcessFailed` event across different WebView2 controls in your application.  You must decide how often to gather details and how to handle duplicates for these cases.

Additionally, most process crashes will generate dumps in the [user data folder](./user-data-folder.md), under the directory returned by `FailureReportFolderPath`. You can use these dumps to understand crashes and provide additional information when contacting the WebView2 team.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Environment.FailureReportFolderPath Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.failurereportfolderpath)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Environment.FailureReportFolderPath Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#failurereportfolderpath)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Environment11::get_FailureReportFolderPath](/microsoft-edge/webview2/reference/win32/icorewebview2environment11#get_failurereportfolderpath)

---


<!-- ====================================================================== -->
## Handle process crashes

When a crash occurs in the WebView2 Runtime, the `ProcessFailed` event will be raised for every WebView2 control associated to the crashing process.  The failure might or might not be recoverable, and some failures are auto-recoverable.

You can use the following properties from the event args to identify the failure:

* `ProcessFailedKind`. A combination of the process purpose (such as browser, renderer, or GPU) and failure (exit, unresponsiveness). Renderer processes are further divided in _main frame_ renderer (`RenderProcessExited`, `RenderProcessUnresponsive`) and _subframe_ renderer (`FrameRenderProcessExited`).

* `ProcessFailedReason`. Indicates the category of the problem causing the failure. Some of these _failure reasons_ are only applicable to specific _failure kinds_.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2ProcessFailedEventArgs.ProcessFailedKind Property](/dotnet/api/microsoft.web.webview2.core.corewebview2processfailedeventargs.processfailedkind)
* [CoreWebView2ProcessFailedEventArgs.Reason Property](/dotnet/api/microsoft.web.webview2.core.corewebview2processfailedeventargs.reason)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2ProcessFailedEventArgs.ProcessFailedKind Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2processfailedeventargs#processfailedkind)
* [CoreWebView2ProcessFailedEventArgs.Reason Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2processfailedeventargs#processfailedkind#reason)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ProcessFailedEventArgs::get_ProcessFailedKind property](/microsoft-edge/webview2/reference/win32/icorewebview2processfailedeventargs#get_processfailedkind)
* [ICoreWebView2ProcessFailedEventArgs2::get_Reason property](/microsoft-edge/webview2/reference/win32/icorewebview2processfailedeventargs2#get_reason)

---


<!-- ------------------------------ -->
#### The main browser process has exited unexpectedly

All the WebView2 controls in your application using the same environment configuration will receive the `ProcessFailed` event with:
* **Failure kind:** `BrowserProcessExited`.
* **Failure reason:** any, except `Unresponsive` and `LaunchFailed`.

All associated WebView2 controls will be closed and your application **must handle recovery** from this failure. The WebView2 controls need to be recreated.

A single `BrowserProcessExited` event will be raised from the `CoreWebview2Environment` too, but the order of these events is not guaranteed. Your application must coordinate its event handlers for these two events when the browser process crashes. See [Handle main browser process exited](#handle-main-browser-process-exited), below.


<!-- ------------------------------ -->
#### A process rendering content in the WebView2 control has exited unexpectedly

The content in impacted frames (main or subframe) is replaced with an error page. Every WebView2 control where content is impacted will receive the `ProcessFailed` event with:
* **Failure kind:** `RenderProcessExited` or `FrameRenderProcessExited`.
* **Failure reason:** any, except `Unresponsive` and `ProfileDeleted`.

Your application **must handle recovery** from this failure. If the main frame is impacted (`RenderProcessExited`), you can use the `Reload` API to reload content in your controls. Alternatively, you can `Close` and recreate the WebView2 controls.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.Reload Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.reload)
* [CoreWebView2Controller.Close Method](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.close)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.Reload Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#reload)
* [CoreWebView2Controller.Close Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#close)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2::Reload method](/microsoft-edge/webview2/reference/win32/icorewebview2#reload)
* [ICoreWebView2Controller::Close method](/microsoft-edge/webview2/reference/win32/icorewebview2controller#close)

---

If the main frame is not impacted (`FrameRenderProcessExited`), your application can communicate with the main frame to recover content in the impacted frames.  The `ProcessFailed` event provides details for the impacted frames through the `FrameInfosForFailedProcess` property.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2ProcessFailedEventArgs.FrameInfosForFailedProcess Property](/dotnet/api/microsoft.web.webview2.core.corewebview2processfailedeventargs.frameinfosforfailedprocess)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2ProcessFailedEventArgs.FrameInfosForFailedProcess Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2processfailedeventargs#frameinfosforfailedprocess)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ProcessFailedEventArgs2::get_FrameInfosForFailedProcess property](/microsoft-edge/webview2/reference/win32/icorewebview2processfailedeventargs2#get_frameinfosforfailedprocess)

---


<!-- ------------------------------ -->
#### The GPU process has exited unexpectedly

The content in your WebView2 controls might flash as the process is automatically recreated. Every WebView2 control in the _WebView2 Process Group_ will receive the `ProcessFailed` event with:
* **Failure kind:** `GpuProcessExited`.
* **Failure reason:** any, except `Unresponsive` and `ProfileDeleted`.

This is the most common WebView2 process failure and is auto-recoverable. Your application does **not** need to handle recovery for this event, but can collect information to understand any persistent issues, or if there is an underlying cause for repeated GPU process exits.


<!-- ------------------------------ -->
#### A utility process has exited unexpectedly

There might be some interruptions (for example, if the utility process was hosting the audio service) necessary processes are automatically recreated. Every WebView2 control in the _WebView2 Process Group_ will receive the `ProcessFailed` event with:
* **Failure kind:** `UtilityProcessExited`.
* **Failure reason:** any, except `Unresponsive` and `ProfileDeleted`.

This process failure is not fatal and is auto-recoverable. Your application does **not** need to handle recovery for this event, but can collect information to understand any persistent issues, including the `ProcessDescription` provided in the event args.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2ProcessFailedEventArgs.ProcessDescription Property](/dotnet/api/microsoft.web.webview2.core.corewebview2processfailedeventargs.processdescription)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2ProcessFailedEventArgs.ProcessDescription Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2processfailedeventargs#processdescription)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ProcessFailedEventArgs2::get_ProcessDescription property](/microsoft-edge/webview2/reference/win32/icorewebview2processfailedeventargs2#get_processdescription)

---


<!-- ------------------------------ -->
#### Any other process has exited unexpectedly

Most processes in the _WebView2 Process Group_ are associated to all WebView2 controls using it and will raise `ProcessFailed` to each control with:
* **Failure kind:** `PpapiBrokerProcessExited`, `PpapiPluginProcessExited`, `RenderProcessUnresponsive`, `SandboxHelperProcessExited`, or `UnknownProcessExited`.
* **Failure reason:** any, except `Unresponsive` and `ProfileDeleted`.

These process failures are not fatal and your application does **not** need to handle recovery for any of them, but can collect information to understand any persistent issues.


<!-- ====================================================================== -->
## Handle unresponsive renderers

When the renderer process for the main frame in a WebView2 control becomes unresponsive to user input, the `ProcessFailed` event will be raised with:
* **Failure kind:** `RenderProcessUnresponsive`.
* **Failure reason:** `Unresponsive`.

The event will continue to be raised as long as the process remains unresponsive. Renderer process unresponsiveness can happen for the following reasons:

* There is a **long-running script** being executed. For example, the web content in your WebView2 control might be performing a synchronous XHR, or have entered an infinite loop. Reloading the WebView2 control (by calling `Reload`) might make the control responsive again.

* The **system is busy**.

This event will be raised repeatedly (for example, every 15 seconds), so you need to decide the threshold for your application to act upon it.


<!-- ====================================================================== -->
## Handle main browser process exited

The `BrowserProcessExited` event indicates that the main browser process has exited and its resources (including its child processes) have been released. This can happen for the following reasons:

* All WebView2 controls from the `CoreWebView2Environment` have been closed. Example app scenarios include:
   * Clearing the user data folder.
   * Updating the WebView2 Runtime.
   * Restarting with a different environment configuration.
   * Clearing the auth cache.

* The main browser process failed.  See [The main browser process has exited unexpectedly](#the-main-browser-process-has-exited-unexpectedly), above.

This event is intended for operations involving the WebView2 Runtime resources. Your application can use the _exit kind_ and the _process ID_ from the event args to determine when and how to handle the event. For example, you might want coordinate with your `ProcessFailed` event handlers to prevent race conditions that could arise from attempting recovery while also trying to remove the user data folder.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2BrowserProcessExitedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2browserprocessexitedeventargs)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2BrowserProcessExitedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2browserprocessexitedeventargs)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2BrowserProcessExitedEventArgs interface](/microsoft-edge/webview2/reference/win32/icorewebview2browserprocessexitedeventargs)

---


<!-- ------------------------------ -->
#### Clearing the user data folder

Your application needs to wait until the WebView2 Runtime has released the _User Data Folder_ before it can delete its contents. After closing all WebView2 controls, the `BrowserProcessExited` event indicates this has happened and your application can proceed with the operation.

See also:
* [Manage user data folders](user-data-folder.md)


<!-- ------------------------------ -->
#### Updating the WebView2 Runtime

In order to make use of the latest WebView2 Runtime after an update, your application needs to close all WebView2 controls and create a new `CoreWebView2Environment`. To ensure the new version is used, your application must wait for the `BrowserProcessExited` event; otherwise, the main browser process might stay alive when the new environment is created and switching to the new version would fail.


<!-- ------------------------------ -->
#### Restarting with a different environment configuration

Most of the configuration used for a `CoreWebView2Environment` is bound to the main browser process lifetime. In order to make changes to this configuration (for example, to language), your application needs to close existing WebView2 controls and wait for `BrowserProcessExited` before recreating the controls; otherwise, initializing the WebView2 controls from the new CoreWebView2Environment might fail with incompatible configuration.


<!-- ------------------------------ -->
#### Clearing the auth cache

The _auth cache_ stores certificate selection and credentials from HTTPS Client Certificate Requests.

The auth cache is bound to the main browser process lifetime.  Therefore, to clear the auth cache, your application must re-create its WebView2 controls from a new main browser process instance.

To ensure that a new main browser process instance is used when re-creating the WebView2 controls, your application must wait for the `BrowserProcessExited` event before proceeding; otherwise, the main browser process might stay alive when the controls are recreated, which would preserve the auth cache instead of clearing it as intended.

<!--
* [Client Certificate Authentication](https://textslashplain.com/2020/05/04/client-certificate-authentication/)
* [With WebView2 what is the equivent of "closing the browser"?](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2623) - WebView2Feedback repo issue #2623
-->


<!-- ====================================================================== -->
## See also

* [Process model for WebView2 apps](./process-model.md)
* [Process management](overview-features-apis.md#process-management) in _Overview of WebView2 features and APIs_.
* [WebView2 API Reference](../webview2-api-reference.md)
