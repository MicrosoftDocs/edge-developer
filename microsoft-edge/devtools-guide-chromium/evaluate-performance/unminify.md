---
title: Unminify performance profiles
description: Tutorial for unminifying the call stack in a performance profile using source maps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 03/04/2022
---

# Unminify performance profiles

When recording a performance profile in the Performance tool, the **Main** section of the profile displays detailed call stacks of JavaScript functions that were called during the recording. However, if your production code is compiled, minified, or bundled, the Performance tool will display function names from your production code in the call stack by default. These production function names may not easily map to function names in your original source code.

   :::image type="content" source="./images/minified-perf-profile.msft.png" alt-text="The minified call stack in the performance profile." lightbox="./images/minified-perf-profile.msft.png":::

Source mapping is used in the DevTools to keep your client-side code readable and debuggable. With the **Unminify** button in the Performance tool, you can use source maps to create an unminified version of the performance profile you recorded.

   :::image type="content" source="./images/unminified-perf-profile.msft.png" alt-text="The unminified call stack in the performance profile." lightbox="./images/unminified-perf-profile.msft.png":::

## How to unminify a performance profile

The following sections describe the steps to unminify a performance profile. 

### Host your source maps side-by-side with your production code

Before you can unminify a performance profile, you need to host your source maps side-by-side with your production code in order for the Performance tool to find your source maps. In the following example, note that the source maps are served along with the production code.

   :::image type="content" source="./images/unminify-perf-profile-sourcemaps.msft.png" alt-text="The source maps are served side-by-side with production code." lightbox="./images/unminify-perf-profile-sourcemaps.msft.png":::
<!-- this was the best way I could come up with to describe the folder structure. https://docs.microsoft.com/en-us/dotnet/core/porting/project-structure is an example that went in a different direction but if you like it, please replace this image with a diagram -->

To learn more about how DevTools uses source maps, read [Map the processed code to your original source code, for debugging](/microsoft-edge/devtools-guide-chromium/javascript/source-maps).

### Record a performance profile

From the Performance tool in DevTools, record runtime performance for the page you want to analyze. For step-by-step instructions on recording a performance profile, read [Record runtime performance](/microsoft-edge/devtools-guide-chromium/evaluate-performance/reference).

   :::image type="content" source="../media/evaluate-performance-performance-record-highlight.msft.png" alt-text="Record." lightbox="../media/evaluate-performance-performance-record-highlight.msft.png":::

### Select the Unminify button

Having recorded a performance profile in the Performance tool, now select the **Unminify** button. The Performance tool will create an unminified version of the performance profile. In the unminifed version, function names in the call stack are replaced with function names from your source maps where possible. Note that all production names may not be replaced with sourcemapped names.

   :::image type="content" source="./images/perf-profile-unminify-button.msft.png" alt-text="The Unminify button in the Performance tool." lightbox="./images/perf-profile-unminify-button.msft.png":::

Selecting the **Unminify** button will export the unminified version of the recorded performance profile. Save this unminified version to your file system.

### Import the unminified profile

Finally, import the unminified version of the recorded performance profile in the Performance tool. For step-by-step instructions on importing a performance profile, read [Load a recording](/microsoft-edge/devtools-guide-chromium/evaluate-performance/reference#load-a-recording).

:::image type="content" source="../media/evaluate-performance-performance-refreshed-disable-javascript-samples-checkbox-off-load-profile.msft.png" alt-text="Load Profile." lightbox="../media/evaluate-performance-performance-refreshed-disable-javascript-samples-checkbox-off-load-profile.msft.png":::

For example, compare the minified call stack and the unminified call stack of a recorded performance profile in the following images. Note that some of the production function names have been replaced with sourcemapped function names.

   :::image type="content" source="./images/minified-perf-profile.msft.png" alt-text="The minified call stack in the performance profile." lightbox="./images/minified-perf-profile.msft.png":::

   :::image type="content" source="./images/unminified-perf-profile.msft.png" alt-text="The unminified call stack in the performance profile." lightbox="./images/unminified-perf-profile.msft.png":::

## See also
* [Get started analyzing runtime performance](index.md) - An introduction to analyzing runtime performance in the DevTools.
* [Performance features reference](reference.md), - A reference for many of the features offered in the Performance tool.