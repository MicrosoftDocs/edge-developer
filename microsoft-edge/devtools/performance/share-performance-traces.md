---
title: Share performance traces with more data
description: Export and import performance traces in DevTools to resolve slow performance or excess memory usage issues in your webpage.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 11/06/2025
---
# Share performance traces with more data

The data that's recorded by the **Performance** tool can be exported to files on disk, which can also include annotations, resource content (HTML, CSS, and JavaScript content), and source maps.  The exported files are called _traces_.  An exported trace is a `.json` file that can be imported in DevTools at any time.

When you export a trace from the Performance tool, you can choose whether to include additional data:
* Annotations.
* Resource content (such as JavaScript content).
* Script source maps.

You can also control whether the trace file is compressed.

![Microsoft Edge with DevTools, showing the Performance tool, with the Save trace button](./share-performance-traces-images/save-performance-trace-dialog.png)<!-- 2nd use of png -->

The **Performance** tool records runtime data about your webpage.  Exploring the recorded data makes it possible to improve your webpage's runtime performance.

Exporting performance traces is useful when you want to share these files with other people, to get help with investigating issues.

Traces can be saved to include annotations, resource content (such as script content), and source maps from the webpage.  This additional information makes it easier to analyze an imported trace file, by recreating the environment in which the trace was recorded, and by providing original source files.

When a trace that includes annotations, resource content (such as script content) or source maps is imported in DevTools, a new DevTools window appears.  This new window isn't connected to the webpage that's running in your browser, and instead re-creates part of the environment in which the trace was originally recorded.  This DevTools instance only contains the **Performance** and **Sources** tools.

<!-- todo: png showing add'l 2-tool DevTools window -->

Exported trace files are compatible with other browsers that are based on the Chromium engine.


<!-- ====================================================================== -->
## Export a trace from the Performance tool

To record performance for aspects of a webpage, and then export a performance recording:

1. Open a webpage, such as [To do](https://microsoftedge.github.io/Demos/demo-to-do/), in a new window or tab.

1. Right-click the webpage, and then select **Inspect**.

   DevTools opens.

1. In DevTools, open the **Performance** (![Performance icon](./share-performance-traces-images/performance-icon.png)) tool.

   <!-- Leah TODO: get new png of dialog to show annotations and resource content ![Microsoft Edge with DevTools, showing the Performance tool, with the Save trace button](./share-performance-traces-images/save-performance-trace-dialog.png) -->

1. Click the **Record** (![Record icon](./share-performance-traces-images/record-icon.png)) button.

1. Interact with the webpage, to run the scenario that you want to investigate the performance of.

   For example, in the demo page, add tasks.

1. Click the **Stop** (![Stop icon](./share-performance-traces-images/stop-icon.png)) button.

   The performance profile appears.

1. Click the **Save trace** (![Save trace icon](./share-performance-traces-images/save-trace-icon.png)) button.

   The **Save performance trace** dialog opens (within the **Performance** tool):

   ![The Save performance trace dialog](./share-performance-traces-images/save-performance-trace-dialog.png)

1. Select or clear the checkboxes, to control what information to include in the trace file:

   * The **Include annotations** checkbox.
   * The **Include resource content** checkbox.
   * The **Include script source maps** checkbox.

   Optionally, clear the **Compress with gzip** checkbox.

   Details about these checkboxes are below.

1. Click the **Save** button.

   The **Save As** dialog opens.

1. Navigate to a folder in which to save the trace file on your disk.

   For example, on Windows, in the `/Downloads/` directory, you can click the **New folder** button, and then create a `/traces/` directory, in which to save the performance trace file:

   ![Traces folder](./share-performance-traces-images/saving-perf-trace.png)


<!-- ====================================================================== -->
## Include annotations

The **Include annotations** checkbox controls whether to include annotations that were manually added to a performance profile.

Annotations can be helpful when you want to leave annotations for others.

See also:
* [Annotate a recording and share it](./reference.md#annotate-a-recording-and-share-it) in _Performance features reference_.


<!-- ====================================================================== -->
## Include resource content

Selecting the **Include resource content** checkbox includes the contents of HTML files, CSS files, and JavaScript scripts, which can then be viewed in the **Sources** tool.

The **Sources** tool will reliably resolve source code references found in imported traces to the actual runtime code.

Some Performance insights require resource content (such as script contents) for analysis.  The contents of extension scripts are not included in the trace file, even when this checkbox is selected.  However, the profiling data from extension scripts is still saved in the trace, because extension scripts can impact performance.

<!-- todo:
See also:
* []()
-->


<!-- ====================================================================== -->
## Include script source maps

Selecting the **Include script source maps** checkbox includes minified production content files and the mappings back to the original source code files.  Source maps are used by DevTools to load your original files and replace minified code with original code.

The **Performance** tool will display the original function names, and the **Sources** tool will show all the original files<!-- todo: original file names -->.

Some Performance insights require source maps for analysis.

Resource content (such as script content) must be included too, for this checkbox to work.
<!-- todo: which one is meant?
The profile data must include resource content (such as script content), for this checkbox to work.
The **Include resource content** checkbox must also be selected, for this checkbox to work.
-->

<!-- todo:
See also:
* []()
-->


<!-- ====================================================================== -->
## Compress with gzip

The **Compress with gzip** checkbox is selected by default.  This option helps compress large performance traces to save disk space, and makes the importing and processing faster in DevTools. 


<!-- ====================================================================== -->
## See also
<!-- all links in article -->

* [Share memory traces with more data](../experimental-features/share-memory-traces.md)<!-- link not in article -->

<!--
* [Save performance traces](https://developer.chrome.com/docs/performance/save-trace/)
https://developer.chrome.com/s/results?q=Save%20performance%20trace
Leah TODO: confirm chrome link
link not in article
-->
