---
description: Learn how use the Memory tool to diagnose memory issues that can impact the speed and stability of webpages.
title: F12 devtools guide: Memory - Microsoft Edge Development
author: erikadoyle
---

# Memory

Use the Memory tool to diagnose memory issues that can impact the speed and stability of webpages.

## Memory matters

If your webpage is performing well when it first loads, but gradually slows and sometimes crashes, the page's memory use might be the problem.

## Diagnosing a memory issue

After you've loaded your webpage in the browser, open the F12 developer tools and open the **Memory** tool (CTRL + 6). You can start profiling from this screen and take heap snapshots during the profiling session. 

If your problem is high memory usage from the start, but not memory growth, take one snapshot and examine it to find your bigger areas of memory use. If your memory use grows over time, you can compare snapshots to look at the areas where memory is growing.

### The Summary View

After you've started profiling and taken some snapshots, you'll see a summary of the session that looks similar to this:

![Edge Memory Tool](./media/Edge_Memory.png)

When you begin recording a session, the **Total memory** timeline shows the memory use by the current browser tab's processes as a graph over time. 

You can add custom **User marks** to the timeline using the `performance.mark()` method in your JavaScript, with a label for the mark as the argument. You can add specific events this way. The label is displayed as a tool tip when the mouse pointer is hovered over the mark on the timeline.

Below the timeline, you'll see summaries of the **heap snapshots**.

### What the snapshots summaries tell you

Each snapshot shows a thumbnail of the webpage as it appeared at the time the snapshot was taken and specifics about the memory usage of your code. After the first snapshot, subsequent snapshots add a summary of changes in memory use and object count. 

In the second snapshot and later, the number of new objects created and old objects removed are shown below the object count. If these numbers are high, you might have a performance problem. When the amount of memory you use isn't bad, but a lot of objects are being created and removed, you create work for the *garbage collector* process which frees up memory. Garbage collecting uses processing power, however, so it's best to find ways to reuse or recycle these objects and give the *garbage collector* a break.

> To see how much work the *garbage collector* is doing, profile your webpage with the Performance tool.

If you click the memory usage numbers, you'll see a detailed view of that snapshot. If you click the memory change numbers, you'll see a comparison view highlighting the objects that have been added or modified. In the image above, **Snapshot #2**  includes a **more info** icon (a circle with an "i" in it) and the number 30 next to it. This number represents objects the **Memory** tool has identified as potential memory issues.

### Something to look for

Another important factor to keep in mind is the difference between the number of objects being added and objects being removed. This is displayed in your second snapshot and beyond in the upper right in a "+x/-y" format. 

In the set of snapshots above, it shows that each time we ran the process we suspected of having a memory issue, we increased the number of objects by 90, but only removed 9. This is a strong clue that there's a memory leak in the process. Memory leaks will keep expanding the memory use of your webpage during a user's session with it, causing slowness or even instability if the memory use grows too big.

### The snapshot details view

Click one of the measurement numbers on a snapshot to see details of that measurement. The image below shows the view when you click on the memory issues number in a snapshot.

![Edge Memory Tool Details](./media/Edge_Memory_details.png)

In the view above, you see the **Dominators** view of the snapshot's details, sorted so the issues are displayed first. 

If you hover over the more info icon, you'll see a tooltip indicating why this item is a potential issue. In the example above, the DOM node is not attached to the DOM. This can happen when the node has been removed from the DOM, but is referred to elsewhere. 

If you click the object, you'll see the objects referring to it in the bottom portion of the screen. In this case, an array called nodeholder contains a reference that is keeping the node in memory. If this is not what you expected, you can investigate further.

### The three view types

  - **Types** view groups objects by their constructor function and gives a count of each type. This makes it easier to know how many arrays you have, how many strings, and so on. Those groups can be expanded to view individual objects.

  - **Roots** view shows the major root objects that you can expand to see the child objects associated with them.
  
  - **Dominators** view breaks out all individual HTML elements, DOM nodes, and JavaScript objects your code creates. This is the most detailed of the views.

In all three views, there are column headings for an object's size and retained size. The **Size** column documents the amount of memory the object itself uses. The **Retained size** column documents the amount of memory used by the object and its child nodes. For example, an [**HTMLDivElement**](https://msdn.microsoft.com/library/hh869694.aspx) might only consume tens of bytes itself, but might have a retained size in the megabytes because a large image or video is one of its child elements.

> In large, complex pages, only the first two thousand objects are loaded, sorted by their retained size. In that case a filtering option is provided to help you narrow down the object set.

### Additional options

You can change settings for the detailed display using a drop-down menu in the upper right of the Snapshot details.

  - **Show built-ins** shows internal objects created for a webpage by the browser that weren't created by the page itself. We don't show these by default, so you don't get distracted from your own code. However, sometimes it's helpful to see.

  - **Display object IDs** helps identify objects that have more than one reference. For example, the jQuery object often uses both jQuery and $ as references. Both references are shown with the same amount of memory usage, but they're using the same memory and the same object ID. Using object IDs can help separate unique objects from objects with multiple references.

**Circular references**: In its simplest form, a circular reference happens when one object refers to another object that refers back to it, creating a loop. In more complex forms, the circular reference path can go through many objects. The **Memory** tool performs automatic filtering of circular references, indicating where they occur and trimming them. This makes it easier to dig deeper into object roots without getting lost in circular paths.

When an object representing a function is displayed in the **Memory** tool, it is linked to its location in the source code and the color is changed to blue. Clicking on the function name or clicking its line and pressing ENTER switches you to the [**Debugger**](./debugger.md) and focuses on that function's location in the corresponding script.

> The **Memory** tool displays function names as they exist in memory. If you're using JavaScript that's been compressed or compiled from another language, and you have a **source map**, you could click on a function named `t` in the **Memory** tool, but find the [**Debugger**](./debugger.md) tool focused on a function named `setOrigination`. If this happens and it bothers you, try toggling off **source map** support for that file in the Debugger.

### The comparison view

In snapshots where a change in memory use or object count is shown, click the amount of the change to see a comparison between that snapshot and the snapshot before it. 

![Edge Memory Tool Comparison View](./media/Edge_Memory_compare.png)

The comparison view works like the snapshot details view, except:

  - Columns showing the difference in **Size** and **Retained size** are added.
  - The **Scope** menu is added. **Scope** shows you different views of the comparison and is particularly useful when combined with a **three-snapshot method** for memory analysis.

The **three-snapshot method** works as follows:

  - Load the page and use it normally for a few minutes.
  - Begin recording the session and take the first snapshot as a baseline.
  - Go through the scenario you think is causing a memory problem. Take the second snapshot.
  - Go through the scenario again. Take the third snapshot and then stop recording.

Click the numbers representing the increase in memory use or increase/removal of objects on **Snapshot #3** to see its comparison with **Snapshot #2**. In that comparison view, the **Scope** menu gives you three choices:

  - Objects left over from **Snapshot #2**.
  - Objects added between **Snapshot #2** and **#3**.
  - All objects in **Snapshot #3**.

When you compare **Snapshot #1** to **Snapshot #2**, the **Objects left over from Snapshot #1** option will include all the objects in the page that were there in the baseline. Most of those are elements used to build the page and just create clutter. They're always part of the webpage's memory use, not sources of the increase in memory use.

When you compare **Snapshot #2** to **Snapshot #3**, the **Objects left over from Snapshot #2** option identifies only the objects added in **Snapshot #2** and still exist in **Snapshot #3**. Now you see the objects that were not only added after the baseline, but which persist after running the scenario a second time. These objects are worth inspecting more closely as you search for the source of your webpage's memory use problem.

## Loading and saving sessions

You shouldn't have to reproduce your test case every time you want to analyze the data it produced. The import (folder) and export (disk) icons on the tool's icon bar let you save and load memory profiling sessions for later inspection.

## ECMAScript 6 containers

Microsoft Edge supports [**`Set`**](https://msdn.microsoft.com/library/dn251547.aspx), [**`Map`**](https://msdn.microsoft.com/library/dn263029.aspx), and [**`WeakMap`**](https://msdn.microsoft.com/library/dn251546.aspx) container objects in the **Memory** tool, making it easier to inspect the details of their memory use.

## Related topics

[Understanding and Solving Internet Explorer Leak Patterns](https://msdn.microsoft.com/library/bb250448.aspx)

[Microsoft Edge Developer Tools on Twitter: Find helpful F12 hints and news updates](https://twitter.com/EdgeDevTools)