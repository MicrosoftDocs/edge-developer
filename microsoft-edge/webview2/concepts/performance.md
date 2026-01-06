---
title: WebView2 Performance Best Practices
description: How to increase the performance of your WebView2 application.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 01/06/2026
---
# WebView2 Performance Best Practices

Embedding Microsoft Edge WebView2 in Windows apps enables modern web features.

WebView2 uses Edge's multi-process architecture, so each control launches multiple browser engine processes that add memory and startup overhead.

This article outlines key practices to optimize WebView2’s startup time, memory, CPU, and network use, and provides tools and workflows for troubleshooting.

**Detailed contents:**
<!-- todo: update -->
* [Introduction](#introduction)
* [Use the Evergreen Runtime](#use-the-evergreen-runtime)
   * [Launch performance](#launch-performance)
* [Optimize Startup Performance](#optimize-startup-performance)
* [Memory Usage and Process Management](#memory-usage-and-process-management)
* [Network and Loading Performance](#network-and-loading-performance)
* [Communication with Host Application (WebView2 ⇄ .NET)](#communication-with-host-application-webview2--net)
* [Telemetry and Profiling Tools](#telemetry-and-profiling-tools)
* [Troubleshooting Workflows for Performance Issues](#troubleshooting-workflows-for-performance-issues)


<!-- ====================================================================== -->
## Use the Evergreen Runtime

Whenever possible, deploy your app with the Evergreen WebView2 Runtime, which updates automatically with the latest performance improvements and security fixes.

Using a fixed version risks missing out on recent optimizations.

If you must use a fixed runtime for offline or compatibility reasons, update it regularly after testing new builds.

Many past performance issues, like memory leaks and high CPU usage, have been addressed in newer versions.

Keep the runtime evergreen (that is, updated), to “future-proof” your app.

Test your app using the latest WebView2 preview channels (Beta, Dev, or Canary), to prepare for upcoming changes.


<!-- ------------------------------ -->
#### Launch performance

If Microsoft Edge and WebView2 versions match and Edge is running, the required WebView2 binaries are already in memory, improving launch performance.


<!-- ====================================================================== -->
## Optimize Startup Performance


<!-- ------------------------------ -->
#### Cold start (cold launch)

The time to create a WebView2 and navigate it the first time – is a common bottleneck.

On a cold launch, WebView2 must spin up its processes and disk caches, which can introduce a noticeable delay (which can vary by hardware and content complexity).

To optimize startup, use the following best practices.


<!-- ------------------------------ -->
#### Don’t use WebView2 for initial UI

Avoid rendering splash screens or simple dialogs with WebView2 due to startup costs and resource contention.

Use lightweight XAML or Win32 screens instead, initializing WebView2 only when displaying real web content.


<!-- ------------------------------ -->
#### Optimize User Data Folder (UDF) location

Keep the UDF in the default local app data folder for performance.

Avoid slow drives or network shares; put the data on a faster, physical disk. 


<!-- ------------------------------ -->
#### Avoid Redundant Instances

Plan your UI so that you don’t create more WebView2 controls than necessary.

For example, if navigating between multiple web pages, it may be faster to reuse a single WebView2 and simply navigate it, rather than destroying and re-creating controls repeatedly.


<!-- ====================================================================== -->
## Memory Usage and Process Management

Each WebView2 control creates its own set of processes, such as browser, renderer, and GPU.

Resource usage generally grows as more WebView2 instances are created, with each instance running its own set of browser processes.

A WebView2 instance uses memory based on the complexity of the web content and the browser processes it creates.

Running many WebView2s can strain system memory. 

Below are best practices to manage and reduce the memory footprint.


<!-- ------------------------------ -->
#### Share WebView2 environments

Use one `CoreWebView2Environment` across all controls in an app to save memory, ensuring consistent parameters for sharing.

Reuse the same environment in tabbed interfaces rather than creating multiple ones.


<!-- ------------------------------ -->
#### App-level process sharing

Multiple apps can share a browser process by using the identical user data folder and CoreWebView2EnvironmentOptions.

This reduces memory usage but requires careful management of profiles and thorough testing due to possible cross-app interference.

Keep in mind that with sharing UDF, underlying data is being shared between different applications, such as cookies, caches, and databases.


<!-- ------------------------------ -->
#### Avoid Large-Scope Host Objects

If you use `AddHostObjectToScript` to expose .NET objects to the web, be mindful of what those objects hold in memory.

The entire object is effectively referenced if the script context lives, which could prevent garbage collection of that object on the .NET side.

Don’t expose a very large object graph, if only a small part is needed for scripting.

When the page that needed the object graph is gone, call `CoreWebView2.RemoveHostObjectFromScript` to release the object graph.

For example, if you navigate away from a page that was using a host object, remove that object to avoid keeping it alive behind the scenes.


<!-- ------------------------------ -->
#### Prevent memory leaks

Remove event handlers before disposing WebView2 objects to avoid reference cycles and leaks.

Avoid closures that strongly reference WebView2; use weak references when necessary.

Call `webView.Dispose()` to dispose of WebView2 objects when no longer needed.


<!-- ------------------------------ -->
#### Use memory management APIs

Set `MemoryUsageTargetLevel = CoreWebView2MemoryUsageTargetLevel.Low` on inactive WebViews to reduce memory usage—this may prompt **Chromium to drop cached data** or swap memory to disk.

Restore it to Normal for full performance when the WebView is active.

If the WebView won’t be used for a while, call `CoreWebView2.TrySuspendAsync()` to suspend the renderer process, which pauses scripts and further decreases resource use.

Resume with `Resume()` when needed. **These operations are best effort.**


<!-- ------------------------------ -->
#### Optimize web content

Optimize the rendered content if you observe excessive memory is being utilized in the JS heap, use Microsoft Edge DevTools to monitor usage of resources by web content.

See [Microsoft Edge DevTools documentation](../../devtools/landing/index.yml).


<!-- ------------------------------ -->
#### Periodically refresh the WebView

Some long-running pages might retain resources over time, depending on the web content and application design.

If memory usage grows unexpectedly, review JavaScript heap usage, event listeners, and DOM retention using DevTools.

In scenarios where the page lifecycle naturally accumulates state, a periodic refresh can help return the process to a clean baseline.


<!-- ====================================================================== -->
## CPU and Rendering Performance

WebView2 offloads web content rendering to the Chromium engine, so performance characteristics are like running a site in Edge.

The following practices ensure efficient CPU usage and smooth rendering.


<!-- ------------------------------ -->
#### Enable hardware acceleration

By default, WebView2 uses the GPU for rendering.

Avoid disabling this unless troubleshooting, because it’s critical for performance.

GPU drivers and additional buffers must be allocated, which requires additional memory.


<!-- ------------------------------ -->
#### Streamline web content

Optimize pages by limiting heavy JavaScript, debouncing/throttling tasks, and using CSS (not JS) for animations.

Split long scripts to keep the UI responsive, and use browser DevTools to identify bottlenecks.

Typical web optimization applies: avoid excessive **layout thrashing** (where script alternates reading and writing DOM properties causing multiple reflows). 


<!-- ------------------------------ -->
#### Reduce unnecessary communication

To improve performance, reduce unnecessary communication between the host and WebView2.

Frequent message passing can increase CPU usage, so batch messages wherever possible.


<!-- ------------------------------ -->
#### Manage process priority

WebView2 creates separate renderer processes.

In apps with heavy native workloads, assign thread priorities carefully to avoid starving WebView2 threads.


<!-- ------------------------------ -->
#### Test real scenarios

Always test your actual content on target hardware using Edge DevTools to find and optimize performance issues. 

To understand how Chromium isolates work to reduce memory and improve stability, see [Process Model and Site Isolation](https://chromium.googlesource.com/chromium/src/+/main/docs/process_model_and_site_isolation.md).


<!-- ====================================================================== -->
## Network and Loading Performance

Network latency and bandwidth can dominate user-perceived performance, especially when loading web content in a WebView2.

The following best practices overlap with general web development.


<!-- ------------------------------ -->
#### Utilize caching and service workers

WebView2 supports browser caching; serve proper cache headers so repeat resource requests use cached versions.

Consider pre-caching static files with a service worker for offline access, but monitor cache size.


<!-- ------------------------------ -->
#### Check network bottlenecks

Use the DevTools Network tab to identify slow resources in WebView2.

Optimize or asynchronously load slow third-party scripts or APIs as needed.


<!-- ------------------------------ -->
#### Reduce initial payloads

Keep HTML light, defer heavy components, and lazy-load images or scripts after initial UI appear to improve perceived speed. 


<!-- ====================================================================== -->
## Communication with Host Application (WebView2 communicating with .NET<!-- todo: Win32, WinRT -->)
<!--
## Communication with Host Application (WebView2 communicating with the OS)
## Communication with Host Application (WebView2 communicating with native-side code)
-->


<!-- ------------------------------ -->
#### Choose the Right Communication Channel

WebView2 provides various web-to-host and host-to-web communication options.

Typically, Web Messages are best, due to their simplicity and reliability.

Use Host Objects only when you need a more complex API, as they can be less stable if the object changes or if there are COM marshalling issues.

[Interop of native and web code](../how-to/communicate-btwn-web-native.md)


<!-- ------------------------------ -->
#### Optimize communication

It is recommended to implement asynchronous, batched communication, to minimize IPC communication and reduce data copying.


<!-- ====================================================================== -->
## Telemetry and Profiling Tools

Gathering data is key to identifying and fixing performance problems.

The following are tools and telemetry techniques for WebView2.


<!-- ------------------------------ -->
#### WebView2 ETW tracing

Use Microsoft's `WebView2.wprp` ([Gathering an ETW Trace](https://aka.ms/wv2etw)) profile with Windows Performance Recorder to capture and analyze detailed WebView2 events, such as process launches and navigation timings.

You can record “Edge/WebView2” provider events; see [Gathering an ETW Trace](https://aka.ms/wv2etw). Analyze traces in Windows Performance Analyzer for CPU, disk, and memory data.


<!-- ------------------------------ -->
#### Browser DevTools and Task Manager

Use Edge DevTools and Browser Task Manager at `edge://inspect` for monitoring WebView2 content and processes, identifying issues such as high CPU or memory leaks.


<!-- ====================================================================== -->
## Troubleshooting Workflows for Performance Issues

When performance issues arise in a WebView2 app, use a structured approach to troubleshoot, per the following strategies.


<!-- ------------------------------ -->
#### Identify bottleneck type

Determine if the issue is startup lag, slow page load, high memory use, or sustained CPU load by observing symptoms.


<!-- ------------------------------ -->
#### Test with simple content

Load a minimal HTML page.  

* If performance is still slow with simple content, investigate runtime initialization or host app factors.

* If performance is faster with simple content, focus on optimizing your web content.


<!-- ------------------------------ -->
#### Verify runtime version

Make sure you’re running the latest WebView2 runtime, not an outdated version or fallback Edge install.

Update as needed.


<!-- ------------------------------ -->
#### Monitor memory usage

Use Task Manager to check WebView2 process memory.

Unusual growth may indicate a leak—use WPR recordings to debug this further.


<!-- ------------------------------ -->
#### Compare WebView2 with Microsoft Edge

WebView2 uses the same core browser engine as Microsoft Edge.

Validate the case with Microsoft Edge, as well as with WebView2, to isolate the issue.


<!-- ====================================================================== -->
## See also

* [Development best practices for WebView2 apps](./developer-guide.md)
