---
title: Share performance traces with more data
description: Learn to export and import performance traces in DevTools to resolve low performance and high memory usage issues in your webpages.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 11/06/2025
---
# Share performance traces with more data

The **Performance** tool records runtime data about your webpage. Exploring the recorded data makes it possible to improve your webpage's runtime performance.

Additionally, the recorded data can be exported to files on disk. The exported files are called _traces_.

Exporting performance traces is useful when you want to share these files with other people to get help with investigating issues. An exported trace is a `.json` file which can be imported in DevTools at any time.

Traces can be saved to include annotations, script content, and source maps from the webpage. This additional information makes it easier to analyze an imported trace file, by recreating the environment in which the trace was recorded, and by providing original source files.

When a trace with script content or source maps is imported in DevTools, a new DevTools window appears. This new window isn't connected to the webpage that's running in your browser, and instead re-creates part of the environment in which the trace was originally recorded. This instance only contains the **Performance** and **Sources** tools.

Exported trace files are compatible with other browsers based on the Chromium engine.


<!-- ====================================================================== -->
## Options for trace export

When you export a trace from the Performance tool, you can choose to include more data.


<!-- ------------------------------ -->
#### Include annotations

This could be helpful if you want to leave annotations for others.


<!-- ------------------------------ -->
#### Include script content

This includes the contents of JavaScript scripts which can be viewed in the **Sources** tool. The **Sources** tool will reliably resolve source code references found in imported traces to the actual runtime code. Some Performance insights require script contents for analysis.

Extension scripts contents are never included even when this option is enabled. However, profiling data from extension scripts is still saved in the trace because they can still impact performance.


<!-- ------------------------------ -->
#### Include script source maps

This includes minified production content files and the mappings back to the original source code files. Source maps are used by DevTools to load your original files and replace minified code with original code. The Performance tool will display original function names and Sources tool will show all original files. Some Performance insights require source maps for analysis.

Script content must be included too for this to work.


<!-- ------------------------------ -->
#### Compress with gzip

This option is selected by default. This helps compress large performance traces to save disk space and makes the importing and processing faster in DevTools. 


<!-- ====================================================================== -->
## Export a trace from the Performance tool

To export a performance recording from the **Performance** tool:

1. Open the **Performance** tool.

1. Click **Record** and run the scenario you want to investigate the performance of by interacting with the webpage, and then click **Stop**.

1. When the performance profile appears, click **Save trace** and choose any information you'd like to include:

   <!-- TODO: find a demo site that has script content and source maps ![Microsoft Edge with DevTools, showing the Performance tool, with the Save trace button]() -->

1. Choose a location to save the trace file on your disk:

   ![The Windows save dialog, showing the performance trace file being saved in a traces folder](./share-performance-traces-images/saving-perf-trace.png)


<!-- ====================================================================== -->
## See also

Chrome:
* [Save performance traces](https://developer.chrome.com/docs/performance/save-trace/)<!-- Leah TODO: confirm chrome link -->
<!-- https://developer.chrome.com/s/results?q=trace#gsc.tab=0&gsc.q=trace&gsc.sort= -->
<!-- https://developer.chrome.com/blog/devtools-tips-39 -->
