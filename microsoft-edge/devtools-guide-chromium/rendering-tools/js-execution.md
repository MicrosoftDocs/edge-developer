---
title: Speed Up JavaScript Runtime
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/08/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
<!-- Copyright Kayce Basques and Meggin Kearney

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License. -->





# Speed Up JavaScript Runtime   




Identify expensive functions using the Microsoft Edge DevTools CPU Profiler.  

> ##### Figure 1  
> CPU profile  
> ![CPU profile][ImageCpuProfile]  

### Summary  

*   Record exactly which functions were called and how long each took with the CPU Profiler.  
*   Visualize your profiles as a flame chart.  

## Record a CPU profile 

If you notice jank in your JavaScript, collect a JavaScript CPU profile.  
CPU profiles show where running time is spent on functions in your page.  

1.  Go to the **Profiles** panel of DevTools.  
1.  Select the **Collect JavaScript CPU Profile** radio button.  
1.  Press **Start**.  
1.  Depending on what you are trying to analyze, you may either reload the page, interact with the page, or just let the page run.  
1.  Press the **Stop** button when you are finished.  

You may also use the Command Line API to record and group profiles from the command line.  

<!--todo: add command line api section when available  -->  

## View CPU profile   

When you finish recording, DevTools automatically populates the Profile panel with the data from your recording.  

The default view is **Heavy \(Bottom Up\)**.  This view enables you to see which functions had the most impact on performance and examine the calling paths to those functions.  

### Change sort order   

To change the sorting order, click on the dropdown menu next to the **focus selected function** ![focus selected function][ImageFocusIcon] icon and then choose one of the following options:  

**Chart**.  Displays a chronological flame chart of the recording.  

> ##### Figure 2  
> Flame chart  
> ![Flame chart][ImageFlameChart]  

**Heavy \(Bottom Up\)**.  Lists functions by impact on performance and enables you to examine the calling paths to the functions.  This is the default view.  

> ##### Figure 3  
> Heavy chart  
> ![Heavy chart][ImageHeavyChart]  

**Tree \(Top Down\)**.  Shows an overall picture of the calling structure, starting at the top of the call stack.  

> ##### Figure 4  
> Tree chart  
> ![Tree chart][ImageTreeChart]  

### Exclude functions   

To exclude a function from your CPU profile, click on it to select it and then press the **exclude selected function** ![exclude selected function][ImageExcludeIcon] icon.  The caller of the excluded function is charged with the total time of the excluded function.  

Click the **restore all functions** ![restore all functions][ImageRestoreIcon] icon to restore all excluded functions back into the recording.  

## View CPU profile as Flame Chart   

The Flame Chart view provides a visual representation of the CPU profile over time.  

After [recording a CPU profile](#record-a-cpu-profile), view the recording as a flame chart by [changing the sort order](#change-sort-order) to **Chart**.  

> ##### Figure 5  
> Flame chart view  
> ![Flame chart view][ImageFlameChartView]  

The flame chart is split into two parts:  

1.  **Overview**.  A birds-eye view of the entire recording.  
    The height of the bars correspond to the depth of the call stack.  So, the higher the bar, the deeper the call stack.  

1.  **Call Stacks**.  This is an in-depth view of the functions that were called during the recording.  The horizontal axis is time and vertical axis is the call stack.  The stacks are organized top-down.  So, the function on top called the one below it, and so on.  
    
    Functions are colored randomly.  There is no correlation to the colors used in the other panels.  However, functions are always colored the same across invocations so that you are able to see patterns in the runtimes.  

> ##### Figure 6  
> Annotated flame chart  
> ![Annotated flame chart][ImageAnnotatedFlameChart]  

A tall call stack is not necessarily significant, it just means that a lot of functions were called.  But a wide bar means that a function took a long time to complete.  These are candidates for optimization.  

### Zoom in on specific parts of recording   

Click, hold, and drag your mouse left and right across the overview to zoom in on particular parts of the call stack. After you zoom, the call stack automatically displays the portion of the recording that you selected.  

> ##### Figure 7  
> Flame chart zoomed  
> ![Flame chart zoomed][ImageFlameChartZoomed]  

### View function details   

Click on a function to view the definition in the **Sources** panel.  

Hover over a function to display the name and timing data.  The following information is provided:  

*   **Name**.  The name of the function.  
*   **Self time**.  How long it took to complete the current invocation of the function, including only the statements in the function, not including any functions that are called.  
*   **Total time**.  The time it took to complete the current invocation of this function and any functions that it called.  
*   **URL**.  The location of the function definition in the form of `file.js:100` where `file.js` is the name of the file where the function is defined and `100` is the line number of the definition.  
*   **Aggregated self time**.  Aggregate time for all invocations of the function across the recording, not including functions called by this function.  
*   **Aggregated total time**.  Aggregate total time for all invocations of the function, including functions called by this function.  
*   **Not optimized**.  If the profiler has detected a potential optimization for the function it lists it here.  

> ##### Figure 8  
> Viewing functions details in flame chart  
> ![Viewing functions details in flame chart][ImageFunctionsDetails]  

<!--## Feedback   -->  



<!-- image links -->  

[ImageExcludeIcon]: images/exclude-icon.msft.png  
[ImageFocusIcon]: images/focus-icon.msft.png  
[ImageRestoreIcon]: images/restore-icon.msft.png  

[ImageCpuProfile]: images/cpu-profile.msft.png "Figure 1: CPU profile"  
[ImageFlameChart]: images/flame-chart.msft.png "Figure 2: Flame chart"  
[ImageHeavyChart]: images/heavy-chart.msft.png "Figure 3: Heavy chart"  
[ImageTreeChart]: images/tree-chart.msft.png "Figure 4: Tree chart"  
[ImageFlameChartView]: images/flame-chart.msft.png "Figure 5: Flame chart view"  
[ImageAnnotatedFlameChart]: images/annotated-cpu-flame.msft.png "Figure 6: Annotated flame chart"  
[ImageFlameChartZoomed]: images/benchmark-zoom.msft.png "Figure 7: Flame chart zoomed"  
[ImageFunctionsDetails]: images/functions-details.msft.png "Figure 8: Viewing functions details in flame chart"  

<!-- links -->  

<!--[DevtoolsGuideDebugCliReferenceProfilename]: /microsoft-edge/devtools-guide-chromium/debug/command-line/command-line-reference#profilename-and-profileendname ""  -->  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/rendering-tools/js-execution) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools & Lighthouse\) and [Meggin Kearney][MegginKearney] \(Tech Writer\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: http://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
[MegginKearney]: https://developers.google.com/web/resources/contributors/megginkearney  