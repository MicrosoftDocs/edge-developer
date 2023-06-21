# Overview
The WebView2 API provides the `CoreWebView2.ProcessFailed` and `CoreWebView2Environment.BrowserProcessExited` events for your application to react to different scenarios. Use this document to learn how to use these events to react when these scenarios present.

  * `CoreWebView2.ProcessFailed`. Use this event for diagnostics and recovery from failures in the WebView2 processes.
  * `CoreWebView2Environment.BrowserProcessExited`. Use this event to synchronize operations involving WebView2 Runtime resources and lifetime, such as User Data Folder management and updates.

To improve the reliability of your WebView2 application, it is recommended that it handles at least the following events:
  * [The browser process has exited unexpectedly](<link>).
  * [A renderer process has exited unexpectedly](<link>).
  * [A renderer process has become unresponsive](<link>).

> [!NOTE]
> This document is a high-level overview of the aforementioned events. Ultimately, the reference documentation for each individual API mentioned in this document shall prevail.

# WebView2 Process Model and related APIs
The [WebView2 Process Model](<link>) uses the WebView2 Runtime to support your WebView2 application. Because most of the magic in the WebView2 controls in your application happens out-of-process (in the WebView2 Runtime), failures and general information about these processes are passed to your application through different WebView2 APIs. The APIs used to report this information to your application include:

  * CoreWebView2
    - `BrowserProcessId` property
    - `ProcessFailed` event
  * CoreWebView2Environment
    - `BrowserProcessExited` event
    - `ProcessInfosChanged` event
    - `GetProcessInfos` method

  > [!NOTE]
  > This is an overview at the conceptual level. For detailed API names and related types in your app's framework, see [Process Management](<link>).

In this document, we discuss how to handle process exits and failures, using the `CoreWebView2.ProcessFailed` and `CoreWebView2Environment.BrowserProcessExited` events.

# Process Events
The WebView2 Runtime is composed of different types of processes, including:
  * Browser process
  * Renderer processes
  * Utility processes
  * GPU process

  > [!NOTE]
  > This is an illustrative and incomplete list of process kinds. The purpose and management details for these processes is part of the Chromium architecture and beyond the scope of this document, or the WebView2 architecture.

When you create and initialize a WebView2 control, WebView2 will ensure there's a WebView2 Runtime to power your control and connect to its [WebView2 Process Group](<link>). Once this connection is established, your control will start monitoring these processes for the following events:

  * **Browser process exits.** If the browser process exits for _any reason_, the `CoreWebView2Environment` will raise the `BrowserProcessExited` event. Use this event to synchronize operations involving the WebView2 Runtime resources and lifetime, such as _User Data Folder_ management and updates. See [Browser Process Exits](<link>) below for more details.
  * **Any process failure.** When _any of the processes_ in the WebView2 Runtime fails, the CoreWebView2 will raise the `ProcessFailed` event. Use this event for diagnostics and recovery from failures in the WebView2 processes. See [Process Failures](<link>) below for more details.

  > [!NOTE]
  > There is some overlap between these two events. For example, a browser process crash will produce both a `ProcessFailed` event and a `BrowserProcessExited` event, since the browser process _exited_ because of a failure. See [Browser Process Crashes](<link>) for more information about this case.

`CoreWebView2` and `CoreWebView2Environment` report these events so your application can react accordingly. There are multiple scenarios your application can handle through these events.

# Browser Process Exits
The `BrowserProcessExited` event ([COM](<link>), [.NET](<link>), [WinRT](<link>)) indicates that the browser process has exited and its resources (including its child processes) have been released. This can happen for the following reasons:

  * All WebView2 controls from the CoreWebView2Environment have been closed. Example app scenarios include:
    - **Clearing the [User Data Folder](<link>).** Your application needs to wait until the WebView2 Runtime has released the _User Data Folder_ before it can delete its contents. After closing all WebView2 controls, the `BrowserProcessExited` event indicates this has happened and your application can proceed with the operation.
    - **Updating the WebView2 Runtime.** In order to make use of the latest WebView2 Runtime after an update, your application needs to close all WebView2 controls and create a new `CoreWebView2Environment`. To ensure the new version is used, your application must wait for the `BrowserProcessExited` event; otherwise, the browser process might stay alive when the new environment is created and switching to the new version would fail.
    - **Restarting with a different environment configuration.** Most of the configuration used for a `CoreWebView2Environment` is bound to the browser process lifetime. In order to make changes to this configuration (for example, to language), your application needs to close existing WebView2 controls and wait for `BrowserProcessExited` before recreating the controls; otherwise, initializing the WebView2 controls from the new CoreWebView2Environment might fail with incompatible configuration.
    - **Clearing auth cache.** Auth cache is bound to the browser process lifetime. To clear the cache, your application must recreate its WebView2 controls from a new browser process instance. To ensure a new browser process instance is used when recreating the controls, your application must wait for the `BrowserProcessExited` event before proceeding; otherwise, the browser process might stay alive when the cotrols are recreated and preserve the auth cache.
  * The browser process failed. See [Browser Process Crashes](<link>) below to handle this case.

This event provides the _exit kind_ and the _process ID_ so your application can determine when and how to handle the event. For more information about these, see:
  * COM: [ICoreWebView2BrowserProcessExitedEventArgs](<link>)
  * .NET: [CoreWebView2BrowserProcessExitedEventArgs](<link>)
  * WinRT: [CoreWebView2BrowserProcessExitedEventArgs](<link>)

# Process Failures
The `ProcessFailed` event ([COM](<link>), [.NET](<link>), [WinRT](<link>)) indicates that _any_ of the processes in the _WebView2 Process Group_ has encountered one of the following situations:

  * **Unexpected exit.** The process indicated by the event has exited unexpectedly (usually due to a crash). The failure might or might not be recoverable and some failures are auto-recoverable. See [Unexpected Exits](<link>) below for details about which of these can be handled by your application.
    > [!NOTE]
    > When the impacted process is the browser process, a `BrowserProcessExited` event will raise too. See [Browser Process Crashes](<link>) below to handle this case.
  * **Unresponsiveness.** A **renderer process** might become unresponsive to user input. This is only reported for renderer processes. See [Unresponsive Renderers](<link>) below for more details about this case.

These situations can be identified through the details provided in the event. See the section below for how your application can do this.

## Process Failure Details
The `ProcessFailed` event provides information about the **kind of failure** and the **reason** why it occurred. Your application can interpret these details in the following manner:

  * **Failure kind.** Due to historical reasons, this is a combination of process kind (browser, renderer, gpu, ...) and failure (exit, unresponsiveness). Your application can use _failure kind_ to determine the process that has failed. Renderer processes are further divided in _main frame_ renderer (`RenderProcessExited`, `RenderProcessUnresponsive`) and _subframe_ renderer (`FrameRenderProcessExited`). For more details about the conditions under which each specific _failure kind_ is used, see:
    - COM: [COREWEBVIEW2_PROCESS_FAILED_KIND](<link>)
    - .NET: [CoreWebView2ProcessFailedKind](<link>)
    - WinRT: [CoreWebView2ProcessFailedKind](<link>)
  * **Failure reason.** When the _failure kind_ is for an unexpected exit, _failure reason_ indicates the category of the problem causing the exit. Some of the _failure reasons_ are only applicable to specific _failure kinds_. For more details about what each of the _failure reasons_ means, see:
    - COM: [COREWEBVIEW2_PROCESS_FAILED_REASON](<link>)
    - .NET: [CoreWebView2ProcessFailedReason](<link>)
    - WinRT: [CoreWebView2ProcessFailedReason](<link>)

    > [!NOTE]
    > For unresponsive renderer _failure kind_, the _failure reason_ is always `unresponsive`.

Additionally, the `ProcessFailed` event provides more detailed information about the reported failure, including:
  * Exit code
  * Process description (utility only)
  * Frames information (renderer only)

Your application can leverage this information for diagnostics and other scenarios. For more information about when these details are provided and how your application can use them, see:
  - COM: [ICoreWebView2ProcessFailedEventArgs](<link>), [ICoreWebView2ProcessFailedEventArgs2](<link>)
  - .NET: [CoreWebView2ProcessFailedEventArgs](<link>)
  - WinRT: [CoreWebView2ProcessFailedEventArgs](<link>)

## Unexpected Exits
The processes in the _WebView2 Process Group_ can be associated to one or many WebView2 controls in your application. For example:

  * **Browser process.** There is a single browser process in the _WebView2 Process Group_. Every WebView2 control with the same environment configuration will share this process.
  * **Renderer process.** Renderer processes can be associated many-to-many with the WebView2 controls in your application. The details about how this works depend on many factors, including what sites are loaded in the WebView2 control (main frame and subframes), system resources, and runtime configuration. A single renderer process in the _WebView2 Process Group_ can be associated with one or many WebView2 controls in your app.
  * **GPU process.** There is a single GPU process in the _WebView2 Process Group_. It is associated with all WebView2 controls using this _WebView2 Process Group_.
  * **Utility processes.** Utility processes host one or more _services_ in the _WebView2 Process Group_. Each utility process supports the entire _WebView2 Process Group_ and is thus associated with all WebView2 controls using this _WebView2 Process Group_.

  > [!NOTE]
  > Do not rely on the details about how processes are associated to each WebView2 control, as they are part of the evolving Chromium architecture and subject to change even due to configuration and system conditions. For more information see [Process Model](<link>).

When a process in the _WebView2 Process Group_ exits unexpectedly (for example, due to a crash), every WebView2 control **associated** to it will raise a `ProcessFailed` event. You can use the [Process Failure Details](<link>) to decide how to handle each case. The following are some examples of what these cases can be:

* **The browser process has exited unexpectedly.** All the WebView2 controls in your application using the same environment configuration will receive the `ProcessFailed` event with:
    - **Failure kind:** `BrowserProcessExited` ([COM](<link>), [.NET](<link>), [WinRT](<link>))
    - **Failure reason:** any, except `Unresponsive` and `LaunchFailed`.

  All associated WebView2 controls will be closed and your application must handle recovery from this failure. The WebView2 controls need to be recreated.

  A single `BrowserProcessExited` event will be raised from the `CoreWebview2Environment` too. See [Browser Process Crashes](<link>) for more details.

* **A process rendering content in the WebView2 control has exited unexpectedly.** The content in impacted frames (main or subframe) is replaced with an error page. Every WebView2 control where content is impacted will receive the `ProcessFailed` event with:
    - **Failure kind:** `RenderProcessExited` or `FrameRenderProcessExited` ([COM](<link>), [.NET](<link>), [WinRT](<link>))
    - **Failure reason:** any, except `Unresponsive` and `ProfileDeleted`.

  Your application must handle recovery from this failure. If the main frame is impacted (`RenderProcessExited`), you can use the `Reload` API ([COM](<link>), [.NET](<link>), [WinRT](<link>)) to reload content in your controls. Alternatively, you can `Close` ([COM](<link>), [.NET](<link>), [WinRT](<link>)) and recreate the WebView2 controls.

  If the main frame is not impacted (`FrameRenderProcessExited`), your application can communicate with the main frame to recover content in the impacted frames. The `ProcessFailed` event will provide details for the impacted frames through `FrameInfosForFailedProcess` ([COM](<link>), [.NET](<link>), [WinRT](<link>)).

* **The GPU process has exited unexpectedly.** The content in your WebView2 controls might flash as the process is automatically recreated. Every WebView2 control in the _WebView2 Process Group_ will receive the `ProcessFailed` event with:
    - **Failure kind:** `GpuProcessExited` ([COM](<link>), [.NET](<link>), [WinRT](<link>))
    - **Failure reason:** any, except `Unresponsive` and `ProfileDeleted`.

  This is the most common WebView2 process failure and is auto-recoverable. Your application does **not** need to handle recovery for this event, but can collect information to understand any persistent issues, or if there is an underlying cause for repeated GPU process exits. See [Gathering Details](<link>) for more information.

* **A utility process has exited unexpectedly.** There might be some interruptions (for example, if the utility process was hosting the audio service) necessary processes are automatically recreated. Every WebView2 control in the _WebView2 Process Group_ will receive the `ProcessFailed` event with:
    - **Failure kind:** `UtilityProcessExited` ([COM](<link>), [.NET](<link>), [WinRT](<link>))
    - **Failure reason:** any, except `Unresponsive` and `ProfileDeleted`.

  This process failure is not fatal and is auto-recoverable. Your application does **not** need to handle recovery for this event, but can collect information to understand any persistent issues. See [Gathering Details](<link>) for more information.

* **Any other process has exited unexpectedly.** Most processes in the _WebView2 Process Group_ are associated to all WebView2 controls using it and will raise `ProcessFailed` to each control with:
    - **Failure kind:** any, except for the ones mentioned above.
    - **Failure reason:** any, except `Unresponsive` and `ProfileDeleted`.

  These process failures are not fatal and your application does **not** need to handle recovery for any of them, but can collect information to understand any persistent issues. See [Gathering Details](<link>) for more information.

## Unresponsive Renderers
When the renderer process for the main frame in a WebView2 control becomes unresponsive to user input, the `ProcessFailed` event will be raised with:

  - **Failure kind:** `RenderProcessUnresponsive` ([COM](<link>), [.NET](<link>), [WinRT](<link>))
  - **Failure reason:** `Unresponsive`

The event will continue to be raised every set period of time as long as the process remains unresponsive. Renderer process unresponsiveness can happen for the following reasons:

  * There is a **long-running script** being executed. For example, the web content in your WebView2 control might be performing a synchronous XHR, or have entered an infinite loop. Reloading ([COM](<link>), [.NET](<link>), [WinRT](<link>)) the WebView2 control might make it responsive again.
  * The **system is busy**.

As this event will be raised repeatedly, you must decide the threshold for your application to act upon it.

## Gathering Details
Your application can use and collect information from [Process Failure Details](<link>) to identify the most frequent issues for your application.

> [!NOTE]
> Some process failures might raise the `ProcessFailed` event across different WebView2 controls in your application (see [Unexpected Exits](<link>) for more information). You must decide how often to gather details and how to handle duplicates for these cases.

Additionally, most process crashes will generate dumps in the [User Data Folder](<link>) or the configured `FailureReportFolderPath` ([COM](<link>), [.NET](<link>), [WinRT](<link>)). You can use these dumps to understand crashes and provide additional information when contacting the WebView2 team.

# Browser Process Crashes
When the browser process in the _WebView2 Process Group_ exits unexpectedly, **both** events discussed in this document will be raised:

  * `CoreWebView2.ProcessFailed`
  * `CoreWebView2Environment.BrowserProcessExited`

`ProcessFailed` will be raised for every WebView2 control in the application that has been impacted by the failure, while `BrowserProcessExited` will be raised from each CoreWebView2Environment that is associated with the failing process. The order of these events is not guaranteed.

You can use the `ProcessFailed` event to handle recovery for your application. For example, by re-creating your WebView2 controls when the event is received with **failure kind** of `BrowserProcessExited`.

While a `BrowserProcessexited` **event** will be raised too, this event is intended for operations involving the WebView2 Runtime resources (such as the _User Data Folder_) and lifetime (such as updates, re-launch). The _exit kind_ event argument ([COM](<link>), [.NET](<link>), [WinRT](<link>)) is provided so your application can identify this scenario and coordinate with your `ProcessFailed` event handlers. For example, you might want to prevent racing conditions that could arise from attempting recovery while also trying to remove the _User Data Folder_.
