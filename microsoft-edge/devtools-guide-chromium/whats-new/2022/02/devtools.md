---
title: What's new in DevTools (Microsoft Edge 98)
description: Detached Elements tool is now on by default.  Improvements and bug fixes for Focus Mode.  3D View tool now supports changing color themes in DevTools.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 02/02/2022
---
# What's New in DevTools (Microsoft Edge 98)

The following sections list the announcements from the Microsoft Edge DevTools team.  To try the latest features of DevTools and the Microsoft Edge DevTools extension for Visual Studio Code, read these announcements.  To stay up to date with the latest and greatest features in your developer tools, download the [Microsoft Edge preview channels](https://www.microsoftedgeinsider.com/download) and [follow the Microsoft Edge DevTools team on Twitter](https://twitter.com/EdgeDevTools).

If you are on Windows, Linux, or macOS, consider using the Canary preview channel of Microsoft Edge as your default development browser.  The preview channels give you access to the latest features of Microsoft Edge DevTools.


<!-- ====================================================================== -->
## 1. Emulate forced colors mode

<!-- Title: Emulation of forced colors in the Rendering tool -->
<!-- Subtitle: You can now do a spot check what your product will look like on a device running in forced colors mode without having to change your operating system settings. -->

In addition to emulating dark, light and print mode of the current document, you can now also see what the currently open web product appears like to users who have a forced colours enabled.  This is an accessibility feature of the operating system and this emulation allows you to do a spot check without having to change your own system. You can access the emulation in the Rendering tool of DevTools. 

<!-- Instructions for screenshot
Go to a web site
Open the Rendering Menu
Scroll down to "Emulate CSS media feature 'forced-colors' and select 'forced-colors: active' -->



<!-- ====================================================================== -->
## 2. Activity icons in the Event Log of the Performance tool now have tooltips

<!-- Title: Analyze runtime performance better with the Event Log in the Performance tool -->
<!-- Subtitle: Activity icons in the Event Log now display tooltips with the type of activity: scripting, rendering, painting for each event. -->

In previous versions of Microsoft Edge, the Event Log in the Performance tool displays color-coded icons representing the type of activity for each event.  However, the Event Log doesn't display information about what activity is represented by each color.  In Microsoft Edge 97, tooltips have been added to the activity icons, representing Scripting, Rendering, Painting, System, and Idle time, for the events in the Event Log.

<!-- In Microsoft Edge Canary, or any channel v98+:
Navigate to The Air Horner
Open DevTools > Performance
Start recording a profile. Press the airhorn a few times (mute if you don't want the noise to bother you)
Stop recording the profile
in the bottom pane, you can see the Summary view breaks down time with colors representing scripting, painting, etc.
Now navigate to the Event Log
Hover over any of the activity icons (the color boxes) for each event and you'll see a tooltip that matches the colors/activities from the Summary section -->

For more info on recording a performance profile, read [Record runtime performance](../../../evaluate-performance/reference.md#record-runtime-performance).


<!-- ====================================================================== -->
## 3. Shallow sizes in the Memory tool are now represented as decimal values

<!-- Title: Better understand shallow sizes in the Memory tool -->
<!-- Subtitle: The Memory tool has been updated to report shallow size in decimal values as a percentage of the heap. -->

In previous versions of Microsoft Edge, the shallow size in a heap snapshot in the Memory tool is commonly reported as 0%, because the shallow size is so small, relative to the total size of the heap.  In Microsoft Edge 97, shallow size is now reported as a decimal value, if the size is between 0% and 1% of the heap.

<!--
Navigate to The Air Horner
Open DevTools > Memory tool
Take a heap snapshot
Note that the shallow size reported as a percentage now shows some decimal values
If you have time, repeat this in Microsoft Edge 97 in Stable (before it updates on 2/3) and you should see the past behavior. -->

To learn more about heap snapshots in the Memory tool, read [Record heap snapshots](../../../memory-problems/heap-snapshots.md).


<!-- ====================================================================== -->
## 4. Fix: The Search textbox in the Network tool can now be resized

<!-- Title: Fix: the Resize the Search textbox in the Network tool -->
<!-- Subtitle: Now, resizing the Search pane in the Network tool also resizes the Search textbox. -->

In previous versions of Microsoft Edge, the Search text box in the Network tool would not resize when changing the size of the pane.  In Microsoft Edge 97<!--98?-->, this issue has been fixed.

<!--
In Microsoft Edge 97, in Stable before 98 is promoted to Stable on 2/3:
Navigate to: Microsoft Edge documentation - Microsoft Edge Development | Microsoft Docs
Open DevTools > Network
Select the Search icon (the magnifying glass) in the Network tool
Resize the Search sidebar
Note that the size of the textbox doesn't change as you resize the sidebar/pane
Repeat steps 1-5 in Microsoft Edge Canary, or Beta, anything v98+ and you'll see that now the Search textbox resizes as the pane is resized. Refer to the PR and bug in the comments for more info. -->

To learn more about how to use the Search pane in the Network tool, read [Search network headers and responses](../../../network/index.md#search-network-headers-and-responses).


<!-- ====================================================================== -->
## 5. Fix: Icons for service workers and script tags in the Elements tool are now aligned

<!-- Title: Fix: Icons and tags in the DevTools are now aligned -->
<!-- Subtitle: Icons for service workers and script tags in the Elements tool now appear as expected. -->

In previous versions of Microsoft Edge, the icons in the Service Workers section of the Application tool were not aligned.  The version number in the Update Cycle table was cutting off the Expand icon.  In Microsoft Edge 97, this issue has been fixed.

<!-- [insert service worker update cycle picture] -->

Additionally, in the **Elements** tool, the **Expand** icon for `<script>` tags was also misaligned.  This issue has also been fixed in Microsoft Edge 97.

<!-- [insert Elements tool picture] -->

<!-- The following instructions work for getting the new behavior.  Recommend using Stable (before it updates to 88) to get screenshots of the old behavior. Or just use the PRs and bugs to get images from the past behavior.

For the service worker image:
Navigate to The Air Horner
Open DevTools
Go to the Application tool > Service Worker
Note that you can expand/collapse each row of the Update Cycle table under the Version column

For the Elements tool image:
Navigate to The Air Horner
Open DevTools > Elements
Note that you can expand/collapse the last <script> tag before the closing </body> tag and that the <script> tag is aligned with all the other ones -->

To learn more about debugging service workers in the DevTools, read [Service workers](../../../progressive-web-apps/index.md#service-workers).  To learn more about `<script>` tags in the **Elements** tool, read [Get started with HTML and the DOM](../../../beginners/html.md).


<!-- ====================================================================== -->
## Announcements from the Chromium project

Microsoft Edge version 98 also includes the following updates from the Chromium project:

<!-- todo: remove some links: -->

* [Preview feature: Full-page accessibility tree](https://developer.chrome.com/blog/new-in-devtools-98/#a11y-tree)
* [More precise changes in the Changes tab](https://developer.chrome.com/blog/new-in-devtools-98/#changes)
* [Set longer timeout for user flow recording](https://developer.chrome.com/blog/new-in-devtools-98/#recorder-timeout)
* [Ensure your pages are cacheable with the Back/forward cache tab](https://developer.chrome.com/blog/new-in-devtools-98/#bfcache)
* [New Properties pane filter](https://developer.chrome.com/blog/new-in-devtools-98/#properties)
* [Emulate the CSS forced-colors media feature](https://developer.chrome.com/blog/new-in-devtools-98/#forced-colors)
* [Show rulers on hover command](https://developer.chrome.com/blog/new-in-devtools-98/#show-rulers)
* [Support row-reverse and column-reverse in the Flexbox editor](https://developer.chrome.com/blog/new-in-devtools-98/#flexbox-editor)
* [New keyboard shortcuts to replay XHR and expand all search results](https://developer.chrome.com/blog/new-in-devtools-98/#shortcuts)
   * [Keyboard shortcuts to replay XHR in the Network panel](https://developer.chrome.com/blog/new-in-devtools-98/#replay-xhr)
   * [Keyboard shortcut to expand all search results](https://developer.chrome.com/blog/new-in-devtools-98/#toggle-search-result)
* [Lighthouse 9 in the Lighthouse panel](https://developer.chrome.com/blog/new-in-devtools-98/#lighthouse)
* [Improved Sources panel](https://developer.chrome.com/blog/new-in-devtools-98/#sources)
* [Miscellaneous highlights (bug fixes)](https://developer.chrome.com/blog/new-in-devtools-98/#misc)
   * [Endpoints in the Reporting API pane (experimental)](https://developer.chrome.com/blog/new-in-devtools-98/#reporting-api)


<!-- ====================================================================== -->
<!-- > [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page for announcements from the Chromium project is [What's New In DevTools (Chrome 98)](https://developer.chrome.com/blog/new-in-devtools-98) and is authored by [Jecelyn Yeen](https://developers.google.com/web/resources/contributors#jecelynyeen) (Developer advocate working on Chrome DevTools at Google).

[![Creative Commons License.](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0). -->
