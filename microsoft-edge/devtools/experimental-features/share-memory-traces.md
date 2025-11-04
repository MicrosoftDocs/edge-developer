---
title: Share a memory trace with more data
description: Learn to export and import memory traces with more data in DevTools to resolve low performance and high memory usage issues in your webpages
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 10/23/2025
---
# Share a memory trace with more data

The **Memory** tool records runtime data about your webpage. Exploring the recorded data makes it possible to improve your webpage's memory usage.

Additionally, the recorded data can be exported to files on disk. The exported files are called _traces_.

Exporting memory traces is useful when you want to share these files with other people to get help with investigating issues. An exported trace is a `.heapsnapshot`, `.heapprofile`, or `.heaptimeline` file which can be imported in DevTools at any time. By default, these traces contain minimal information about the runtime data from the traced webpage.

Memory traces can also be saved as a `.devtools` file, which contains much more runtime data from the traced webpage.  Advantages of the `.devtools` file format:

* This makes it easier to resolve memory issues, by recreating the environment in which the trace was recorded, and by providing original source files.

* This makes it possible to reliably resolve source code references found in imported traces to the actual runtime code in the **Sources** tool.

* If source maps were present when a trace was recorded, or if they are stored on the [Azure Artifacts Symbol Server](../javascript/consume-source-maps-from-azure.md), it's also possible to resolve code references to their original source code.

Browser compatibility:

* `.heapsnapshot`, `.heapprofile`, and `.heaptimeline` trace files are compatible with Microsoft Edge and other browsers that are based on the Chromium engine.

* `.devtools` traces can only be imported in Microsoft Edge.


<!-- ====================================================================== -->
## Set the export options for memory traces

Memory traces that are `.devtools` files can optionally include console messages, script sources, and DOM elements.  To control what is included in these traces:

1. Open DevTools by pressing **Ctrl+Shift+I** (Windows, Linux) or **Command+Option+I** (macOS).

1. In DevTools, in the upper right, select **Customize and control DevTools** > **Settings** (![Settings button](./share-memory-traces-images/settings-button-icon.png)).  **Settings** opens, with the **Preferences** page selected.

1. In the **Persistence** section of the **Preferences** page, use these checkboxes to control what to include:

   * **Include console message in .devtools traces**.
   * **Include script sources in .devtools traces**.
   * **Include DOM snapshots in .devtools traces (experimental)**.

   <!-- TODO: replace once new UI is in canary ![The Settings panel in DevTools, showing the trace options](./share-memory-traces-images/enhanced-trace-options.png) -->


<!-- ====================================================================== -->
## Export a trace from the Memory tool

To export memory information from the **Memory** tool:

1. Open the **Memory** tool.

1. Choose the type of memory recording you're interested in, such as **Heap Snapshot**. The following instructions are similar if you choose a different memory recording type. To learn more about the different memory recording types, see [Fix memory problems](../memory-problems/index.md).

1. Click **Take Snapshot**.

1. When the snapshot is recorded, click the **Save** button in the **Memory** tool sidebar:

   <!-- TODO: replace with updated UI ![Microsoft Edge with DevTools, showing the Memory tool, with the Save button](./share-memory-traces-images/exporting-memory-trace.png) -->

1. Choose the trace type and a location to save the trace file on your disk. Select `.devtools` if you want to include console messages, script sources, and DOM elements. Otherwise, select `.heapsnapshot`, `.heapprofile`, or `.heaptimeline`.

   <!-- TOOD: replace once new UI is in canary ![The Windows save dialog, showing the memory trace file being saved in a traces folder](./share-memory-traces-images/saving-memory-trace.png) -->


<!-- ====================================================================== -->
## Import a trace in the Memory tool

To import a trace in the **Memory** tool:

1. Open the **Memory** tool:

   ![Microsoft Edge, showing the Memory tool in DevTools, with the Load button](./share-memory-traces-images/importing-memory-trace.png)

1. Click the **Load profile** (![Load profile icon](./share-memory-traces-images/load-profile-icon.png)) button at the top.  Or, click the **Load profile** button at the bottom.

1. Locate the trace file on your disk. It's either a `.devtools` file, or a `.heapsnapshot`, `.heaptimeline`, or `.heapprofile` file.

   ![The Windows open dialog, showing a memory trace file](./share-memory-traces-images/opening-memory-trace.png)

1. Open the file.

   If it's a `.devtools` file, a new DevTools window appears, showing the memory information and the extra runtime information that was recorded displayed in the **Sources**, **Console**, and **Elements** tools.

   Otherwise, the memory information appears in the **Memory** tool, and the rest of the DevTools tabs continue to show information related to the current webpage.


<!-- ====================================================================== -->
## See also
<!-- all links in article -->

* [Share performance traces with more data](../performance/share-performance-traces.md)<!-- link not in article -->
* [Fix memory problems](../memory-problems/index.md)
* [Azure Artifacts Symbol Server](../javascript/consume-source-maps-from-azure.md)
