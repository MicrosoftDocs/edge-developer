---
title: What's new in DevTools (Microsoft Edge 115)
description: "Improvements for connecting DevTools to Azure Artifacts symbol server. Snapshotting improvements for the Memory tool. Refreshing the DevTools icons and buttons. And more."
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 08/18/2023
---
# What's New in DevTools (Microsoft Edge 115)

[!INCLUDE [Microsoft Edge team note for top of What's New](../../includes/edge-whats-new-note.md)]


<!-- ====================================================================== -->
## Improvements for connecting DevTools to Azure Artifacts symbol server

<!-- Subtitle: You can now use Azure Active Directory for authentication instead of Personal Access Tokens (PATs). You can connect to multiple symbol servers and filter which sourcemaps you want DevTools to fetch. -->

<!-- Reviewer: Rob Paveza-->
<!-- todo: delete Reviewer: lines -->

In Microsoft Edge 115, it's easier and more customizable to connect DevTools to Azure Artifacts symbol server.  In previous versions of Microsoft Edge, to authenticate to the symbol server, you had to generate Personal Access Tokens (PATs) in Azure DevOps and then paste them into DevTools. Now, as long as you're logged into Microsoft Edge, you can connect to the symbol server by using Azure Active Directory.

Additonally, you can now connect to multiple symbol servers, in case you need to fetch sourcemaps from different Azure DevOps organizations. You can also filter which sourcemaps you want DevTools to fetch from the symbol server, by specifying the sourcemap URLs in an inclusion or exclusion list.

![Connecting to symbol server using Azure Active Directory from DevTools settings](./devtools-115-images/aad-symbol-server.png)
<!-- todo: steps to re-create screenshot -->
<!--
1. Launch Edge, ensure that you are logged in to the browser
1. Open DevTools > Settings > Symbol Server
1. Under **Authorization mode:**, select the dropdown and select Azure Active Directory
1. Load the Azure DevOps organizations
1. Take a screenshot
1. Draw red highlight boxes around Authorization mode and Filter behavior
1. See https://dev.azure.com/microsoft/Edge/_git/chromium.devtools-frontend/pullrequest/8874508 for more info
-->

![todo temp alt png](./devtools-115-images/aad-symbol-server-2-temp.png)
<!-- todo: see if 2nd png is ok, with fewer orgs listed -->
<!-- todo: add red boxes if png is ok -->

See also:
* [Securely debug original code by publishing source maps to the Azure Artifacts symbol server](../../../javascript/publish-source-maps-to-azure.md)
* [Securely debug original code by using Azure Artifacts symbol server source maps](../../../javascript/consume-source-maps-from-azure.md)


<!-- ====================================================================== -->
## Improvements for the Memory tool

<!-- Subtitle: The "Allocation instrumentation on timeline" profiling type in the Memory tool now samples the heap at variable intervals, depending on the size of the heap. Heap snapshots are now more accurate and don't show objects that have been garbage-collected. -->

<!-- Reviewer: Seth Brenith and Sulekha Kulkarni -->

In previous versions of Microsoft Edge, in the **Memory** tool, when using the **Allocation instrumentation on timeline** option, the **Memory** tool takes a sample of the heap every 50 milliseconds.  However, taking a sample of the heap scales with the size of the heap, so with a heap size of 200 MB, the sample actually takes 1.5 seconds to generate.  As a result, there is very little time left on the main thread for your website, outside of generating heap samples.  In practice, this looks like your web content is hanging or blocked when **Allocation instrumentation on timeline** is running.

In Microsoft Edge 115, the sample rate for the heap now scales to the time it takes to generate a sample, freeing up the main thread so that you can interact with your web content while profiling.

![The "Allocation instrumentation on timeline" profiling option in the Memory tool](./devtools-115-images/allocation-instrumentation-on-timeline.png)

Additionally, in previous versions of Microsoft Edge, heap snapshots would sometimes include objects that should have been garbage-collected (GC'd).  In Microsoft Edge 115, this issue has been fixed and heap snapshots are now more accurate.

See also:
* [Limit proportion of CPU time given to requestHeapStatsUpdate (4469909) · Gerrit Code Review](https://chromium-review.googlesource.com/c/v8/v8/+/4469909)
* [Make heap snapshots more precise (4499405) · Gerrit Code Review](https://chromium-review.googlesource.com/c/v8/v8/+/4499405)


<!-- ====================================================================== -->
## Refreshed DevTools icons and buttons

<!-- Subtitle: New icons and buttons give an update to the DevTools look and feel. -->

<!-- Reviewer: Jimmy Seto and Vidal Guillermo Diazleal Ortega -->

In Microsoft Edge 115, the DevTools UI has gotten a makeover with new icons and buttons.  For example, when debugging in the **Sources** tool, the current frame in the call stack is indicated by a right-pointing blue arrow.  This icon is more consistent with the debugging icons in Microsoft Visual Studio and Microsoft Visual Studio Code:

![The right-pointing blue arrow icon for the current frame in the call stack](./devtools-115-images/icon-update-sources.png)

In previous versions of Microsoft Edge, in the **Bottom-Up** view in the **Performance** tool, the triangle buttons for collapsing and expanding the recorded activities rendered incorrectly.  In Microsoft Edge 115, this issue has been fixed and you can now expand and collapse individual activities to see which functions are calling them:

![The triangle icons for expanding and collapsing activities in the Bottom-Up view](./devtools-115-images/icon-update-performance.png)

See also:
* [Step through code](../../../javascript/reference.md#step-through-code) from _JavaScript debugging features_
* [The Bottom-Up tab](../../../evaluate-performance/reference.md#the-bottom-up-tab) from _Performance features reference_


<!-- ====================================================================== -->
## Screen readers correctly announce dropdown state in Device Mode

<!-- Subtitle: In Device Mode, screen readers now correctly announce the state of dropdown menus (for example, announcing "collapsed" when the dropdown menu is collapsed). -->

<!-- Reviewer: Natasha Lee -->

In previous versions of Microsoft Edge, in Device Mode, screen readers incorrectly announced the state of dropdown menus as "Expanded", when these menus were actually collapsed.  In Microsoft Edge 115, this issue has been fixed and screen readers now correctly announce the state of dropdown menus in Device Mode as "collapsed" or "expanded":

![The 'Throttling' dropdown menu expanded in Device Mode](./devtools-115-images/device-mode-dropdown.png)
<!-- todo: steps to re-create screenshot -->
<!--
1. Navigate to https://microsoftedge.github.io/Demos/demo-to-do/
1. Open DevTools. Turn on Device Mode with the Toggle device emulation button in the top-left corner
1. Expand the viewport so that you can see all the buttons in the Device Mode toolbar
1. Select the **No throttling** dropdown menu
1. Take a screenshot with the menu expanded
1. Draw a red highlight box around the dropdown menu
 -->

See also:
* [Emulate mobile devices (Device Emulation)](../../../device-mode/index.md)


<!-- ====================================================================== -->
## Profiling improvements for the Performance tool

<!-- Subtitle: Your web content will now be more responsive while profiling in the Performance tool, and "Profiler Overhead" blocks of CPU time have been added, to account for the additional time Microsoft Edge needs when profiling. -->

<!-- Reviewer: Seth Brenith and Sulekha Kulkarni -->

When recording a profile in the **Performance** tool, V8, the JavaScript engine in Microsoft Edge, takes a sample of all the JavaScript functions that are running, to accurately report CPU time in the flame chart.  When profiling a website that has many cross-domain iframes, these samples take a long time to collect, and result in significant overhead, slowing down the main thread and subsequently, the performance of the website.  In Microsoft Edge 115 on Windows, V8 collects these samples more efficently, resulting in better site performance while profiling.

Additionally, in the **Performance** tool, you can now see a representation of "Profiler Overhead" in the flame chart when recording a profile. This block of time represents the CPU time that's needed to sample and parse events when recording a profile, and does not represent CPU time that the users of your website are actually encountering.  "Profiler Overhead" has been added to help you focus your performance investigations on "Compile Code" and "Evaluate Script" events that affect your actual users, not events that only take time when you are actively profiling in the **Performance** tool.

![The "Profiling Overhead" block of time in a recorded Performance profile](./devtools-115-images/profiling-overhead-performance.png)
<!-- todo: steps to re-create screenshot -->
<!--
1. Navigate to https://microsoftedge.github.io/Demos/demo-to-do/
1. Open DevTools > Performance. Press the Reload button to reload the page and start profiling
1. Wait for profiling to stop on its own
1. In the flame chart, zoom in on the start of the profile to look for a "Profiling Overhead" block
1. With the "Profiling Overhead" block in view, take a screenshot
1. Draw a red highlight box around the "Profiling Overhead" box
1. If you have difficulty, ping Zoher and I can share with you the trace I recorded that I know has the event
 -->

See also:
* [Avoid busy-waiting in sampler thread if Windows supports precise sleep (4453767) · Gerrit Code Review](https://chromium-review.googlesource.com/c/v8/v8/+/4453767)
* [Show V8.FinalizeDeserialization time as profiler overhead (4504370) · Gerrit Code Review](https://chromium-review.googlesource.com/c/devtools/devtools-frontend/+/4504370)
* [Chroming Bug 1428605 - V8’s code cache deserialization is 2-4× slower than a regular uncached compilation when CPU profiling is enabled](https://bugs.chromium.org/p/chromium/issues/detail?id=1428605)


<!-- ====================================================================== -->
## Announcements from the Chromium project

Microsoft Edge 115 also includes the following updates from the Chromium project:

<!-- todo: delete some links? -->
* [Elements improvements](https://developer.chrome.com/blog/new-in-devtools-115/#elements)
   * [New CSS subgrid badge](https://developer.chrome.com/blog/new-in-devtools-115/#subgrid)
   * [Selector specificity in tooltips](https://developer.chrome.com/blog/new-in-devtools-115/#specificity)
   * [Values of custom CSS properties in tooltips](https://developer.chrome.com/blog/new-in-devtools-115/#css-variable-values)
* [Sources improvements](https://developer.chrome.com/blog/new-in-devtools-115/#sources)
   * [CSS syntax highlighting](https://developer.chrome.com/blog/new-in-devtools-115/#css)
   * [Shortcut to set conditional breakpoints](https://developer.chrome.com/blog/new-in-devtools-115/#breakpoint)
* [Application > Bounce Tracking Mitigations](https://developer.chrome.com/blog/new-in-devtools-115/#bounce-tracking)
* [Lighthouse 10.2.0](https://developer.chrome.com/blog/new-in-devtools-115/#lighthouse)
* [Ignore content scripts by default](https://developer.chrome.com/blog/new-in-devtools-115/#content-script)
* [Network > Response pretty-printing by default](https://developer.chrome.com/blog/new-in-devtools-115/#network)
* [Miscellaneous highlights](https://developer.chrome.com/blog/new-in-devtools-115/#misc)


<!-- ====================================================================== -->
<!-- uncomment if content is copied from developer.chrome.com to this page -->

<!-- > [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page for announcements from the Chromium project is [What's New in DevTools (Chrome 115)](https://developer.chrome.com/blog/new-in-devtools-115) and is authored by [Jecelyn Yeen](https://developers.google.com/web/resources/contributors#jecelynyeen) (Developer advocate working on Chrome DevTools at Google). -->


<!-- ====================================================================== -->
<!-- uncomment if content is copied from developer.chrome.com to this page -->

<!-- [![Creative Commons License](../../../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0). -->
