---
title: Handling process-related events in WebView2
description: Process-related events in WebView2 and how apps can handle them for recovery and improved reliability.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 06/29/2023
---
# Handling process-related events in WebView2

**Contents:**

* [Events for processes that exited or failed](#events-for-processes-that-exited-or-failed)
* [Handle process failures](#handle-process-failures)
   * [Gather process failure details](#gather-process-failure-details)
      * [Failure kind](#failure-kind)
      * [Failure reason](#failure-reason)
      * [Exit code, process description, and frames information](#exit-code-process-description-and-frames-information)
      * [Gathering details](#gathering-details)
   * [Handle unexpected exits for various types of processes](#handle-unexpected-exits-for-various-types-of-processes)
      * [Types of processes](#types-of-processes)
      * [The main browser process has exited unexpectedly](#the-main-browser-process-has-exited-unexpectedly)
      * [A process rendering content in the WebView2 control has exited unexpectedly](#a-process-rendering-content-in-the-webview2-control-has-exited-unexpectedly)
      * [The GPU process has exited unexpectedly](#the-gpu-process-has-exited-unexpectedly)
      * [A utility process has exited unexpectedly](#a-utility-process-has-exited-unexpectedly)
      * [Any other process has exited unexpectedly](#any-other-process-has-exited-unexpectedly)
   * [Handle unresponsive renderers](#handle-unresponsive-renderers)
* [Handle main browser process crashes](#handle-main-browser-process-crashes)
   * [ProcessFailed, for main browser process crashes](#processfailed-for-main-browser-process-crashes)
   * [BrowserProcessExited, for main browser process crashes](#browserprocessexited-for-main-browser-process-crashes)
* [Handle main browser process exited](#handle-main-browser-process-exited)
   * [BrowserProcessExited event](#browserprocessexited-event)
   * [Clearing the user data folder](#clearing-the-user-data-folder)
   * [Updating the WebView2 Runtime](#updating-the-webview2-runtime)
   * [Restarting with a different environment configuration](#restarting-with-a-different-environment-configuration)
   * [Clearing the auth cache](#clearing-the-auth-cache)
* [See also](#see-also)


WebView2 uses multiple processes to support the WebView2 controls in your application. Because these processes can exit during use, WebView2 provides the `CoreWebView2.ProcessFailed` and `CoreWebView2Environment.BrowserProcessExited` events for your application to react to different scenarios.  Use this document to learn how to use these events to react when these scenarios occur.

* `CoreWebView2.ProcessFailed`. Use this event for diagnostics and recovery from failures in the WebView2 processes.

* `CoreWebView2Environment.BrowserProcessExited`. Use this event to synchronize operations involving WebView2 Runtime resources and lifetime, such as User Data Folder management and updates.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.ProcessFailed Event](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.processfailed)
* [CoreWebView2Environment.BrowserProcessExited Event](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2environment.browserprocessexited)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.ProcessFailed Event](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#processfailed)
* [CoreWebView2Environment.BrowserProcessExited Event](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#browserprocessexited)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2::add_ProcessFailed event](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#add_processfailed)
* [ICoreWebView2::remove_ProcessFailed event](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#remove_processfailed)
* [ICoreWebView2Environment5::add_BrowserProcessExited event](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2environment5#add_browserprocessexited)
* [ICoreWebView2Environment5::remove_BrowserProcessExited event](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2environment5#remove_browserprocessexited)

---

To improve the reliability of your WebView2 application, it is recommended that it handles at least the following events:
* [The main browser process has exited unexpectedly](#the-main-browser-process-has-exited-unexpectedly).
* [A process rendering content in the WebView2 control has exited unexpectedly](#a-process-rendering-content-in-the-webview2-control-has-exited-unexpectedly).
* [A renderer process becomes unresponsive](#handle-unresponsive-renderers).

These events and scenarios are described below.

This document is a high-level overview of the most relevant events. For details, see the linked API Reference documentation.


<!-- ====================================================================== -->
## Events for processes that exited or failed

The WebView2 Runtime is composed of different types of processes, including:
* Main browser process
* Renderer processes
* Utility processes
* GPU process

This is an illustrative and incomplete list of process kinds. The purpose and management details for these processes is part of the Chromium architecture and beyond the scope of this document, or the WebView2 architecture.

When you create and initialize a WebView2 control, WebView2 will ensure there's a WebView2 Runtime to power your control and connect to its [WebView2 Process Group](process-model.md#processes-in-the-webview2-runtime). Once this connection is established, your control will start monitoring these processes for the following events:

* **Any process failure.** When _any of the processes_ in the WebView2 Runtime fail, the CoreWebView2 will raise the `ProcessFailed` event. Use this event for diagnostics and recovery from failures in the WebView2 processes. See [Handle process failures](#handle-process-failures) below.

* **Main browser process exits.** If the main browser process exits for _any reason_, the `CoreWebView2Environment` will raise the `BrowserProcessExited` event. Use this event to synchronize operations involving the WebView2 Runtime resources and lifetime, such as _User Data Folder_ management and updates. See [Handle main browser process exited](#handle-main-browser-process-exited) below.

* There is some overlap between these two events. For example, a main browser process crash will produce both a `ProcessFailed` event and a `BrowserProcessExited` event, since the main browser process _exited_ because of a failure. See [Handle main browser process crashes](#handle-main-browser-process-crashes) below.

`CoreWebView2` and `CoreWebView2Environment` report these events so your application can react accordingly.  There are multiple scenarios your application can handle through these events.


Main sections (scenarios) below:
* [Handle process failures](#handle-process-failures)
* [Handle main browser process crashes](#handle-main-browser-process-crashes)
* [Handle main browser process exited](#handle-main-browser-process-exited)


<!-- ====================================================================== -->
## Handle process failures

The `ProcessFailed` event indicates that _any_ of the processes in the _WebView2 Process Group_ has encountered one of the following situations:

* **Unexpected exit.** The process indicated by the event has exited unexpectedly (usually due to a crash). The failure might or might not be recoverable and some failures are auto-recoverable. See [Handle unexpected exits for various types of processes](#handle-unexpected-exits-for-various-types-of-processes) below for details about which of these can be handled by your application.  When the impacted process is the main browser process, a `BrowserProcessExited` event will be raised too; see [Handle main browser process crashes](#handle-main-browser-process-crashes) below.

* **Unresponsiveness.** A **renderer process** might become unresponsive to user input.  This is only reported for renderer processes; see [Handle unresponsive renderers](#handle-unresponsive-renderers) below.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.ProcessFailed Event](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.processfailed)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.ProcessFailed Event](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#processfailed)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2::add_ProcessFailed event](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#add_processfailed)
* [ICoreWebView2::remove_ProcessFailed event](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#remove_processfailed)

---

These situations can be identified through the details provided in the event. See the section below for how your application can do this.

Subsections below:
* [Gather process failure details](#gather-process-failure-details)
* [Handle unexpected exits for various types of processes](#handle-unexpected-exits-for-various-types-of-processes)
* [Handle unresponsive renderers](#handle-unresponsive-renderers)


<!-- ------------------------------ -->
#### Gather process failure details


The `ProcessFailed` event provides information about the **kind of failure** and the **reason** why it occurred. Your application can interpret these details in the following manner.

Subsections below:
* [Failure kind](#failure-kind)
* [Failure reason](#failure-reason)
* [Exit code, process description, and frames information](#exit-code-process-description-and-frames-information)


<!-- ---------- -->
###### Failure kind

`ProcessFailedKind` is a combination of the process purpose (browser, renderer, gpu, etc.) and failure (exit, unresponsiveness). Your application can use _failure kind_ to determine the process that has failed. Renderer processes are further divided in _main frame_ renderer (`RenderProcessExited`, `RenderProcessUnresponsive`) and _subframe_ renderer (`FrameRenderProcessExited`). For more details about the conditions under which each specific _failure kind_ is used, see:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2ProcessFailedKind Enum](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2processfailedkind)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2ProcessFailedKind Enum](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2processfailedkind)

##### [Win32/C++](#tab/win32cpp)

* [COREWEBVIEW2_PROCESS_FAILED_KIND enum](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/webview2-idl#corewebview2_process_failed_kind)

---


<!-- ---------- -->
###### Failure reason

When the _failure kind_ is for an unexpected exit, _failure reason_ indicates the category of the problem causing the exit. Some of the _failure reasons_ are only applicable to specific _failure kinds_.

For unresponsive renderer _failure kind_, the _failure reason_ is always `unresponsive`.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2ProcessFailedReason Enum](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2processfailedreason)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2ProcessFailedReason Enum](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2processfailedreason)

##### [Win32/C++](#tab/win32cpp)

* [COREWEBVIEW2_PROCESS_FAILED_REASON enum](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/webview2-idl#corewebview2_process_failed_reason)

---


<!-- ---------- -->
###### Exit code, process description, and frames information

In addition to _failure kind_ and _failure reason_, the `ProcessFailed` event provides more detailed information about the reported failure, including:
* Exit code
* Process description (utility only)
* Frames information (renderer only)

Your application can leverage this information for diagnostics and other scenarios. For more information about when these details are provided and how your application can use them, see:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2ProcessFailedEventArgs Class](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2processfailedeventargs)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2ProcessFailedEventArgs Class](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2processfailedeventargs)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ProcessFailedEventArgs2 interface](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2processfailedeventargs2)

---


<!-- ---------- -->
###### Gathering details

Your application can use and collect information from the above events to identify the most frequent issues for your application.

Some process failures might raise the `ProcessFailed` event across different WebView2 controls in your application; see [Handle unexpected exits for various types of processes](#handle-unexpected-exits-for-various-types-of-processes).  You must decide how often to gather details and how to handle duplicates for these cases.

Additionally, most process crashes will generate dumps in the [user data folder](./user-data-folder.md), under the directory returned by `FailureReportFolderPath`. You can use these dumps to understand crashes and provide additional information when contacting the WebView2 team.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Environment.FailureReportFolderPath Property](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2environment.failurereportfolderpath)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Environment.FailureReportFolderPath Property](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#failurereportfolderpath)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Environment11::get_FailureReportFolderPath](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2environment11#get_failurereportfolderpath)

---


<!-- ------------------------------ -->
#### Handle unexpected exits for various types of processes


<!-- ---------- -->
###### Types of processes

The processes in the _WebView2 Process Group_ can be associated to one or many WebView2 controls in your application. For example:

* **Main browser process.** There is a single main browser process in the _WebView2 Process Group_. Every WebView2 control with the same environment configuration will share this process.

* **Renderer process.** Renderer processes can be associated many-to-many with the WebView2 controls in your application. The details about how this works depend on many factors, including what sites are loaded in the WebView2 control (main frame and subframes), system resources, and runtime configuration. A single renderer process in the _WebView2 Process Group_ can be associated with one or many WebView2 controls in your app.

* **GPU process.** There is a single GPU process in the _WebView2 Process Group_. It is associated with all WebView2 controls using this _WebView2 Process Group_.

* **Utility processes.** Utility processes host one or more _services_ in the _WebView2 Process Group_. Each utility process supports the entire _WebView2 Process Group_ and is thus associated with all WebView2 controls using this _WebView2 Process Group_.

* **Other processes.** Most processes in the _WebView2 Process Group_ are associated to all WebView2 controls using it and will raise `ProcessFailed` to each control.

> [!NOTE]
> Do not rely on the details about how processes are associated to each WebView2 control, as they are part of the evolving Chromium architecture and subject to change even due to configuration and system conditions. For more information see [Process Model](process-model.md).

When a process in the _WebView2 Process Group_ exits unexpectedly (for example, due to a crash), every WebView2 control **associated** to it will raise a `ProcessFailed` event. You can use the process failure details to decide how to handle each case; see [Gather process failure details](#gather-process-failure-details) above.  The following sections give some examples of what these cases can be:

* [The main browser process has exited unexpectedly](#the-main-browser-process-has-exited-unexpectedly)
* [A process rendering content in the WebView2 control has exited unexpectedly](#a-process-rendering-content-in-the-webview2-control-has-exited-unexpectedly)
* [The GPU process has exited unexpectedly](#the-gpu-process-has-exited-unexpectedly)
* [A utility process has exited unexpectedly](#a-utility-process-has-exited-unexpectedly)
* [Any other process has exited unexpectedly](#any-other-process-has-exited-unexpectedly)


<!-- ---------- -->
###### The main browser process has exited unexpectedly

All the WebView2 controls in your application using the same environment configuration will receive the `ProcessFailed` event with:
* **Failure kind:** `BrowserProcessExited`.
* **Failure reason:** any, except `Unresponsive` and `LaunchFailed`.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2ProcessFailedKind Enum](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2processfailedkind)
* [CoreWebView2ProcessFailedReason Enum](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2processfailedreason)
* [CoreWebView2.ProcessFailed Event](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.processfailed)
* [CoreWebView2Environment.BrowserProcessExited Event](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2environment.browserprocessexited)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2ProcessFailedKind Enum](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2processfailedkind)
* [CoreWebView2ProcessFailedReason Enum](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2processfailedreason)
* [CoreWebView2.ProcessFailed Event](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#processfailed)
* [CoreWebView2Environment.BrowserProcessExited Event](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#browserprocessexited)

##### [Win32/C++](#tab/win32cpp)

* [COREWEBVIEW2_PROCESS_FAILED_KIND enum](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/webview2-idl#corewebview2_process_failed_kind)
* [COREWEBVIEW2_PROCESS_FAILED_REASON enum](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/webview2-idl#corewebview2_process_failed_reason)
* [ICoreWebView2::add_ProcessFailed event](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#add_processfailed)
* [ICoreWebView2::remove_ProcessFailed event](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#remove_processfailed)
* [ICoreWebView2Environment5::add_BrowserProcessExited event](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2environment5#add_browserprocessexited)
* [ICoreWebView2Environment5::remove_BrowserProcessExited event](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2environment5#remove_browserprocessexited)

---

All associated WebView2 controls will be closed and your application must handle recovery from this failure. The WebView2 controls need to be recreated.

A single `BrowserProcessExited` event will be raised from the `CoreWebview2Environment` too. See [Handle main browser process crashes](#handle-main-browser-process-crashes) below.


<!-- ---------- -->
###### A process rendering content in the WebView2 control has exited unexpectedly

The content in impacted frames (main or subframe) is replaced with an error page. Every WebView2 control where content is impacted will receive the `ProcessFailed` event with:
* **Failure kind:** `RenderProcessExited` or `FrameRenderProcessExited`.
* **Failure reason:** any, except `Unresponsive` and `ProfileDeleted`.

Your application must handle recovery from this failure. If the main frame is impacted (`RenderProcessExited`), you can use the `Reload` API to reload content in your controls. Alternatively, you can `Close` and recreate the WebView2 controls.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2ProcessFailedKind Enum](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2processfailedkind)
* [CoreWebView2ProcessFailedReason Enum](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2processfailedreason)
* [CoreWebView2.Reload Method](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.reload)
* [CoreWebView2Controller.Close Method](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2controller.close)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2ProcessFailedKind Enum](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2processfailedkind)
* [CoreWebView2ProcessFailedReason Enum](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2processfailedreason)
* [CoreWebView2.Reload Method](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#reload)
* [CoreWebView2Controller.Close Method](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller#close)

##### [Win32/C++](#tab/win32cpp)

* [COREWEBVIEW2_PROCESS_FAILED_KIND enum](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/webview2-idl#corewebview2_process_failed_kind)
* [COREWEBVIEW2_PROCESS_FAILED_REASON enum](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/webview2-idl#corewebview2_process_failed_reason)
* [ICoreWebView2::Reload method](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#reload)
* [ICoreWebView2Controller::Close method](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2controller#close)

---

If the main frame is not impacted (`FrameRenderProcessExited`), your application can communicate with the main frame to recover content in the impacted frames.  The `ProcessFailed` event provides details for the impacted frames through the `FrameInfosForFailedProcess` property.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2ProcessFailedEventArgs.FrameInfosForFailedProcess Property](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2processfailedeventargs.frameinfosforfailedprocess)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2ProcessFailedEventArgs.FrameInfosForFailedProcess Property](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2processfailedeventargs#frameinfosforfailedprocess)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ProcessFailedEventArgs2::get_FrameInfosForFailedProcess property](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2processfailedeventargs2#get_frameinfosforfailedprocess)

---


<!-- ---------- -->
###### The GPU process has exited unexpectedly

The content in your WebView2 controls might flash as the process is automatically recreated. Every WebView2 control in the _WebView2 Process Group_ will receive the `ProcessFailed` event with:
* **Failure kind:** `GpuProcessExited`.
* **Failure reason:** any, except `Unresponsive` and `ProfileDeleted`.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2ProcessFailedKind.GpuProcessExited Enum Value](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2processfailedkind)
* [CoreWebView2ProcessFailedReason Enum](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2processfailedreason)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2ProcessFailedKind.GpuProcessExited Enum Value](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2processfailedkind)
* [CoreWebView2ProcessFailedReason Enum](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2processfailedreason)

##### [Win32/C++](#tab/win32cpp)

* `COREWEBVIEW2_PROCESS_FAILED_KIND enum`
   * [COREWEBVIEW2_PROCESS_FAILED_KIND_GPU_PROCESS_EXITED enum value](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/webview2-idl#corewebview2_process_failed_kind)
* [COREWEBVIEW2_PROCESS_FAILED_REASON enum](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/webview2-idl#corewebview2_process_failed_reason)

---

This is the most common WebView2 process failure and is auto-recoverable. Your application does **not** need to handle recovery for this event, but can collect information to understand any persistent issues, or if there is an underlying cause for repeated GPU process exits. See [Gathering details](#gathering-details) below, for more information.


<!-- ---------- -->
###### A utility process has exited unexpectedly

There might be some interruptions (for example, if the utility process was hosting the audio service) necessary processes are automatically recreated. Every WebView2 control in the _WebView2 Process Group_ will receive the `ProcessFailed` event with:
    - **Failure kind:** `UtilityProcessExited`.
    - **Failure reason:** any, except `Unresponsive` and `ProfileDeleted`.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2ProcessFailedKind.UtilityProcessExited Enum Value](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2processfailedkind)
* [CoreWebView2ProcessFailedReason Enum](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2processfailedreason)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2ProcessFailedKind.UtilityProcessExited Enum Value](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2processfailedkind)
* [CoreWebView2ProcessFailedReason Enum](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2processfailedreason)

##### [Win32/C++](#tab/win32cpp)

* `COREWEBVIEW2_PROCESS_FAILED_KIND` enum:
   * [COREWEBVIEW2_PROCESS_FAILED_KIND_UTILITY_PROCESS_EXITED enum value](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/webview2-idl#corewebview2_process_failed_kind)
* [COREWEBVIEW2_PROCESS_FAILED_REASON enum](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/webview2-idl#corewebview2_process_failed_reason)

---

This process failure is not fatal and is auto-recoverable. Your application does **not** need to handle recovery for this event, but can collect information to understand any persistent issues. See [Gathering details](#gathering-details) below, for more information.


<!-- ---------- -->
###### Any other process has exited unexpectedly

Most processes in the _WebView2 Process Group_ are associated to all WebView2 controls using it and will raise `ProcessFailed` to each control with:
* **Failure kind:** any, except for the ones mentioned above.
* **Failure reason:** any, except `Unresponsive` and `ProfileDeleted`.

These process failures are not fatal and your application does **not** need to handle recovery for any of them, but can collect information to understand any persistent issues. See [Gathering details](#gathering-details) below, for more information.


<!-- ------------------------------ -->
#### Handle unresponsive renderers

When the renderer process for the main frame in a WebView2 control becomes unresponsive to user input, the `ProcessFailed` event will be raised with:
* **Failure kind:** `RenderProcessUnresponsive`.
* **Failure reason:** `Unresponsive`.

The event will continue to be raised every set period of time as long as the process remains unresponsive. Renderer process unresponsiveness can happen for the following reasons:

* There is a **long-running script** being executed. For example, the web content in your WebView2 control might be performing a synchronous XHR, or have entered an infinite loop. Reloading the WebView2 control (by calling `Reload`) might make the control responsive again.

* The **system is busy**.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2ProcessFailedKind Enum](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2processfailedkind)
* [CoreWebView2ProcessFailedReason Enum](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2processfailedreason)
* [CoreWebView2.Reload Method](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.reload)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2ProcessFailedKind Enum](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2processfailedkind)
* [CoreWebView2ProcessFailedReason Enum](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2processfailedreason)
* [CoreWebView2.Reload Method](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#reload)

##### [Win32/C++](#tab/win32cpp)

* [COREWEBVIEW2_PROCESS_FAILED_KIND enum](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/webview2-idl#corewebview2_process_failed_kind)
* [COREWEBVIEW2_PROCESS_FAILED_REASON enum](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/webview2-idl#corewebview2_process_failed_reason)
* [ICoreWebView2::Reload method](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#reload)

---

This event will be raised repeatedly, so you need to decide the threshold for your application to act upon it.


<!-- ========================================================================== -->
## Handle main browser process crashes

When the main browser process in the _WebView2 Process Group_ exits unexpectedly, **both** events discussed in this document will be raised:

* `CoreWebView2.ProcessFailed` - raised for every WebView2 control in the application that has been impacted by the failure.
* `CoreWebView2Environment.BrowserProcessExited` - raised from each CoreWebView2Environment that is associated with the failing process.

The order of these events is not guaranteed.


<!-- ------------------------------ -->
#### ProcessFailed, for main browser process crashes

You can use the `ProcessFailed` event to handle recovery for your application - for example, by re-creating your WebView2 controls when the event is received with **failure kind** of `BrowserProcessExited`.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.ProcessFailed Event](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.processfailed)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.ProcessFailed Event](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#processfailed)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2::add_ProcessFailed event](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#add_processfailed)
* [ICoreWebView2::remove_ProcessFailed event](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#remove_processfailed)

---


<!-- ------------------------------ -->
#### BrowserProcessExited, for main browser process crashes

Although a `BrowserProcessExited` **event** will be raised too, this event is intended for operations involving the WebView2 Runtime resources (such as the _User Data Folder_) and lifetime (such as updates or re-launch). The `BrowserProcessExitKind` event argument is provided so your application can identify this scenario and coordinate with your `ProcessFailed` event handlers. For example, you might want to prevent race conditions that could arise from attempting recovery while also trying to remove the user data folder.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Environment.BrowserProcessExited Event](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2environment.browserprocessexited)
* [CoreWebView2BrowserProcessExitedEventArgs.BrowserProcessExitKind Property](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2browserprocessexitedeventargs.browserprocessexitkind)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Environment.BrowserProcessExited Event](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#browserprocessexited)
* [CoreWebView2BrowserProcessExitedEventArgs.BrowserProcessExitKind Property](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2browserprocessexitedeventargs#browserprocessexitkind)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Environment5::add_BrowserProcessExited event](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2environment5#add_browserprocessexited)
* [ICoreWebView2Environment5::remove_BrowserProcessExited event](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2environment5#remove_browserprocessexited)
* [ICoreWebView2BrowserProcessExitedEventArgs::get_BrowserProcessExitKind property](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2browserprocessexitedeventargs#get_browserprocessexitkind)

---


<!-- ====================================================================== -->
## Handle main browser process exited

The `BrowserProcessExited` event indicates that the main browser process has exited and its resources (including its child processes) have been released. This can happen for the following reasons:

* All WebView2 controls from the `CoreWebView2Environment` have been closed. Example app scenarios include:
   * Clearing the user data folder
   * Updating the WebView2 Runtime
   * Restarting with a different environment configuration
   * Clearing the auth cache

   These app scenarios are described below.

* The main browser process failed. See [Handle main browser process crashes](#handle-main-browser-process-crashes) below to handle this case.


<!-- ------------------------------ -->
#### BrowserProcessExited event

The `BrowserProcessExited` event provides the _exit kind_ and the _process ID_ so your application can determine when and how to handle the event. For more information about the _exit kind_ and the _process ID_, see `CoreWebView2BrowserProcessExitedEventArgs`.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2Environment` Class:
   * [CoreWebView2Environment.BrowserProcessExited Event](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2environment.browserprocessexited)
* [CoreWebView2BrowserProcessExitedEventArgs Class](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2browserprocessexitedeventargs)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2Environment` Class:
   * [CoreWebView2Environment.BrowserProcessExited Event](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment#browserprocessexited)
* [CoreWebView2BrowserProcessExitedEventArgs Class](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2browserprocessexitedeventargs)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2Environment5` interface:
   * [ICoreWebView2Environment5::add_BrowserProcessExited event](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2environment5#add_browserprocessexited)
   * [ICoreWebView2Environment5::remove_BrowserProcessExited event](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2environment5#remove_browserprocessexited)
* [ICoreWebView2BrowserProcessExitedEventArgs interface](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2browserprocessexitedeventargs)

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

The auth cache is bound to the main browser process lifetime. To clear the cache, your application must recreate its WebView2 controls from a new main browser process instance. To ensure a new main browser process instance is used when recreating the controls, your application must wait for the `BrowserProcessExited` event before proceeding; otherwise, the main browser process might stay alive when the controls are recreated and preserve the auth cache.


<!-- ====================================================================== -->
## See also

* [Overview of WebView2 features and APIs](./overview-features-apis.md)
* [WebView2 API Reference](../webview2-api-reference.md)
