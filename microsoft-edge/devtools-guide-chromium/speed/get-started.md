---
title: Optimize Website Speed With Microsoft Edge DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/03/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
<!-- Copyright Kayce Basques 

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.  
   You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  
   See the License for the specific language governing permissions and
   limitations under the License.  -->  





# Optimize Website Speed With Microsoft Edge DevTools   



## Goal of tutorial  

This tutorial teaches you how to use Microsoft Edge DevTools to find ways to make your websites load faster.  

## Prerequisites  

*   You should have basic web development experience, similar to what is taught in this [Introduction to Web Development class][CourseraIntroductionWebDevelopmentClass].  
*   You do not need to know anything about load performance.  You learn about it in this tutorial!  

## Introduction   

This is Tony.  Tony is very famous in cat society.  He has built a website so that his fans are able to learn about his favorite foods.  His fans love the site, but Tony keeps hearing complaints that the site loads slowly.  Tony has asked you to help him speed the site up.  

> ##### Figure 1  
> Tony the cat  
> ![Tony the cat][ImageTony]  

## Step 1: Audit the site   

Whenever you set out to improve the load performance of a site, **always start with an audit**.  
The audit has 2 important functions:  

*   It creates a **baseline** for you to measure subsequent changes against.  
*   It gives you **actionable tips** on what changes have the most impact.  

### Set up   

First, you must set up the site so that you are able to make changes to it later.  

1.  [Open the source code for the site](https://glitch.com/edit/#!/tony).  This tab is referred to as the **editor tab**.  
    
    > ##### Figure 2  
    > The editor tab  
    > ![The editor tab][ImageEditor]  

1.  Click **tony**.  A menu appears.  
    
    > ##### Figure 3  
    > The menu that appears after clicking **tony**  
    > ![The menu that appears after clicking tony][ImageMenu]  
    
1.  Click **Remix Project**.  The name of the project changes from **tony** to some randomly-generated name.  You now have your own editable copy of the code.  Later on, you may make changes to this code.  
1.  Click **Show** and select **In a New Window**.  The demo opens in a new tab.  This tab is be referred to as the **demo tab**.  It may take a while for the site to load.  
    
    > ##### Figure 4  
    > The demo tab  
    > ![The demo tab][ImageDemo]  

1.  Press `Control`+`Shift`+`J` \(Windows\) or `Command`+`Option`+`J` \(macOS\).  Microsoft Edge DevTools opens up alongside the demo.  
    
    > ##### Figure 5  
    > DevTools and the demo  
    > ![DevTools and the demo][ImageDevtools]  

For the rest of the screenshots in this tutorial, DevTools is shown in a separate window.  Press `Control`+`Shift`+`P` \(Windows\) or `Command`+`Shift`+`P` \(macOS\) to open the Command Menu, typing `Undock`, and then selecting **Undock into separate window**.  

> ##### Figure 6  
> Undocked DevTools  
> ![Undocked DevTools][ImageUndocked]  

### Establish a baseline   

The baseline is a record of how the site performed before you made any performance improvements.  

1.  Click the **Audits** tab.  It may be hidden behind the **More Panels** ![More Panels][ImageMorePanelsIcon] button.  There is a Lighthouse on this panel because the project that powers the Audits panel is named **Lighthouse**.  
    
    [!INCLUDE [audits-panel-note](../includes/audits-panel-note.md)]  
    
    > ##### Figure 7  
    > The Audits panel  
    > ![The Audits panel][ImageAudits]  
    
    <!--todo: add link to Lighthouse when section is available  -->  
    <!-- /web/tools/lighthouse  -->  
    
1.  Match your audit configuration settings to those in [Figure 7](#figure-7).  Here is an explanation of the different options:  

    *   **Device**.  Setting to **Mobile** changes the user agent string and simulates a mobile viewport.  Setting to **Desktop** pretty much just disables the **Mobile** changes.  
    *   **Audits**.  Disabling a category prevents the Audits panel from running those audits, and excludes those audits from your report.  Leave the other categories enabled, if you want to see the types of recommendations that are provide.  Disabling categories slightly speeds up the auditing process.  
    *   **Throttling**.  Setting to **Simulated Slow 4G, 4x CPU Slowdown** simulates the typical conditions of browsing on a mobile device.  It is named "simulated" because the Audits panel does not actually throttle during the auditing process.  Instead, it just extrapolates how long the page would take to load under mobile conditions.  The **Applied...** setting, on the other hand, actually throttles your CPU and network, with the tradeoff of a longer auditing process.  
    *   **Clear Storage**.  Enabling this checkbox clears all storage associated with the page before every audit.  Leave this setting on if you want to audit how first-time visitors experience your site.  Disable this setting when you want the repeat-visit experience.  

1.  Click **Run Audits**.  After 10 to 30 seconds, the Audits panel shows you a report of the performance of the site.  
    
    > ##### Figure 8  
    > The report for the Audits panel of the performance of the site  
    > ![The report for the Audits panel of the performance of the site][ImageReport]  

#### Handling report errors   

If you ever get an error in your Audits panel report, try running the demo tab from an **InPrivate** window with no other tabs open.  This ensures that you are running Microsoft Edge from a clean state.  Microsoft Edge Extensions in particular often interfere with the auditing process.  

<!--todo: add screen capture for error in audit -->  
<!--
> ##### old Figure 9  
> A report that errored  
> ![A report that errored][ImageError]  
-->  

### Understand your report   

The number at the top of your report is the overall performance score for the site.  Later, as you make changes to the code, you should see this number rise.  A higher score means better performance.  

> ##### Figure 9  
> The overall performance score  
> ![The overall performance score][ImageOverall]  

The **Metrics** section provides quantitative measurements of the performance of the site.  Each metric provides insight into a different aspect of the performance.  For example, **First Contentful Paint** tells you when content is first painted to the screen, which is an important milestone in the user's perception of the page load, whereas **Time To Interactive** marks the point at which the page appears ready enough to handle user interactions.  

> ##### Figure 10  
> The Metrics section  
> ![The Metrics section][ImageMetrics]  

Click the highlighted toggle button in [Figure 11](#figure-11) to see a description for each metric, and click **Learn More** to read documentation about it.  

> ##### Figure 11  
> Click the highlighted toggle button to expand the **Metrics** items  
> ![Click the highlighted toggle button to expand the Metrics items][ImageFirstMeaningfulPaint]  

Below Metrics is a collection of screenshots that show you how the page looked as it loaded.  

> ##### Figure 12  
> Screenshots of how the page looked while loading  
> ![Screenshots of how the page looked while loading][ImageScreenshots]  

The **Opportunities** section provides specific tips on how to improve the load performance of this specific page.  

> ##### Figure 13  
> The Opportunities section  
> ![The Opportunities section][ImageOpportunities]  

Click an opportunity to learn more about it.  

> ##### Figure 14  
> **Eliminate render-blocking resources** opportunity  
> ![Eliminate render-blocking resources opportunity][ImageCompression]  

Click **Learn More** to see documentation about why an opportunity is important, and specific recommendations on how to fix it.  

> ##### Figure 15  
> Documentation for the **Eliminate render-blocking resources** opportunity  
> ![Documentation for the Eliminate render-blocking resources opportunity][ImageReference]  

The **Diagnostics** section provides more information about factors that contribute to the load time of the page.  

> ##### Figure 16  
> The Diagnostics section  
> ![The Diagnostics section][ImageDiagnostics]  

The **Passed Audits** section shows you what the site is doing correctly.  Click to expand the section.  

> ##### Figure 17  
> The Passed Audits section  
> ![The Passed Audits section][ImagePassed]  

## Step 2: Experiment   

The Opportunities section of your audit report gives you tips on how to improve the performance of the page.  In this section, you implement the recommended changes to the codebase, auditing the site after each change to measure how it affects site speed.  

### Enable text compression   

Your report says that avoiding enormous network payloads is one of the top opportunities for improving the performance of the page.  Enabling text compression is an opportunity to improve the performance of the page.  

Text compression is when you reduce, or compress, the size of a text file before sending it over the network.  Kind of like how you might zip a folder before emailing it to reduce the size.  

Before you enable compression, here are a couple of ways to manually check whether text resources are compressed.  

1.  Click the **Network** tab.  
    
    > ##### Figure 18  
    > The Network panel  
    > ![The Network panel][ImageNetwork]  
    
1.  Click the **Network setting** icon.  
1.  Click the **Use Large Request Rows** checkbox.  The height of the rows in the table of network requests increases.  
    
    > ##### Figure 19  
    > Large rows in the network requests table  
    > ![Large rows in the network requests table][ImageLargeRows]  
    
1.  If you do not see the **Size** column in the table of network requests, click the table header and then select **Size**.  

Each **Size** cell shows two values.  The top value is the size of the downloaded resource.  
The bottom value is the size of the uncompressed resource.  If the two values are the same, then the resource is not being compressed when it is sent over the network.  For example, in [Figure 19](#figure-19) the top and bottom values for `bundle.js` are `1.2 MB` and `1.2 MB`.  

Check for compression by inspecting the HTTP headers of a resource:  

1.  Click **bundle.js**.  
1.  Click the **Headers** tab.  
    
    > ##### Figure 20  
    > The Headers tab  
    > ![The Headers tab][ImageHeaders]  
    
1.  Search the **Response Headers** section for a `content-encoding` header.  You should not see one, meaning that `bundle.js` was not compressed.  When a resource is compressed, this header is usually set to `gzip`, `deflate`, or `br`.  See [Directives][MDNContentEncodingDirectives] for an explanation of these values.  

Enough with the explanations.  Time to make some changes!  Enable text compression by adding a couple of lines of code:  

1.  In the editor tab, click **server.js**.  
    
    > ##### Figure 21  
    > Editing server.js  
    > ![Editing server.js][ImageServer]  
    
1.  Add the following code to **server.js**.  Make sure to put `app.use(compression())` before `app.use(express.static('build'))`.  

    ```javascript
    const express = require('express');
    const app = express();
    const fs = require('fs');
    const compression = require('compression');

    app.use(compression());
    app.use(express.static('build'));
    
    const listener = app.listen(process.env.PORT || 1234, function () {
        console.log(`Listening on port ${listener.address().port}`);
    });
    ```  
    
    > [!NOTE]
    > Usually, you have to install the `compression` package via something like `npm i -S compression`, but this has already been done for you.  
    
1.  Wait for Glitch to deploy the new build of the site.  The fancy animation next to **Tools** means that the site is getting rebuilt and redeployed.  The change is ready when the animation next to **Tools** goes away.  Click **Show** and select **In a New Window** again.  
    
    <!--
    > ##### Old Figure 22  
    > The animation that indicates that the site is getting built  
    > ![The animation that indicates that the site is getting built][ImageBuilding]  
    -->  
    
Use the workflows that you learned earlier to manually check that the compression is working:  

1.  Go back to the demo tab and reload the page.  The **Size** column should now show 2 different values for text resources like `bundle.js`.  In [Figure 23](#figure-23) the top value of `256 KB` for `bundle.js` is the size of the file that was sent over the network, and the bottom value of `1.2 MB` is the uncompressed file size.  
    
    > ##### Figure 22  
    > The Size column now shows 2 different values for text resources  
    > ![The Size column now shows 2 different values for text resources][ImageRequests]  
    
1.  The **Response Headers** section for `bundle.js` should now include a `content-encoding: gzip` header.
    
    > ##### Figure 23  
    > The Response Headers section now contains a content-encoding header  
    > ![The Response Headers section now contains a content-encoding header][ImageGzip]  
    
Audit the page again to measure what kind of impact text compression has on the load performance of the page:  

1.  Click the **Audits** tab.  
1.  Click **Perform an audit** ![Perform an audit][ImagePerformIcon].  
1.  Leave the settings the same as before.  
1.  Click **Run audit**.  
    
    > ##### Figure 24  
    > An Audits report after enabling text compression  
    > ![An Audits report after enabling text compression][ImageReport2]  
    
Woohoo!  That looks like progress.  Your overall performance score should have increased, meaning that the site is getting faster.  

#### Text compression in the real world   

Most servers really do have simple fixes like this for enabling compression!  Just do a search on how to configure whatever server you use to compress text.  

### Resize images   

Your report indicates that avoiding enormous network payloads is one of the top opportunities for improving the performance of the page.  Resizing images helps reduce the size of the network payload.  If your user is viewing your images on a mobile device screen that is 500-pixels-wide, there is really no point in sending a 1500-pixel-wide image.  Ideally, you send a 500-pixel-wide image, at most.  

1.  In your report, click **Avoid enormous network payloads** to see which images should be resized.  It looks like 2 of the jpg files are over 2000 KB, which is bigger than necessary.  
    
    <!--
    > ##### Old Figure 27  
    > Details about the **Properly size images** opportunity  
    > ![Details about the properly size images opportunity][ImageResize]  
    -->

1.  Back in the editor tab, open `src/model.js`.  
1.  Replace `const dir = 'big'` with `const dir = 'small'`.  This directory contains copies of the same images which have been resized.  
1.  Audit the page again to see how this change affects load performance.  
    
    > ##### Figure 25  
    > An Audits report after resizing images  
    > ![An Audits report after resizing images][ImageReport3]  

Looks like the change only has a minor affect on the overall performance score.  However, one thing that the score does not show clearly is how much network data you are saving your users.  The total size of the old photos was around 5.3 megabytes, whereas now it is only about 0.18 megabytes.  

#### Resizing images in the real world   

For a small app, doing a one-off resize like this may be good enough.  But for a large app, this obviously is not scalable.  Here are some strategies for managing images in large apps:  

*   Resize images during your build process.  
*   Create multiple sizes of each image during the build process and then use `srcset` in your code.  At runtime, the browser takes care of choosing which size is best for the device.  
    <!--See [Relative-sized images][relative].  -->

<!--[relative]: /web/fundamentals/design-and-ux/responsive/images#relative_sized_images  -->  

*   Use an image CDN that lets you dynamically resize an image when you request it.  
*   At the very least, optimize each image.  This may create huge savings.  
  Optimization is when you run an image through a special program that reduces the size of the image file.  See [Essential Image Optimization][EssentialImageOptimization] for more tips.  

### Eliminate render-blocking resources   

Your latest report says that eliminating render-blocking resources is now the biggest opportunity.  

A render-blocking resource is an external JavaScript or CSS file that the browser must download, parse, and run before it displays the page.  The goal is to only run the core CSS and JavaScript code that is required to display the page properly.  

The first task, then, is to find code that you do not need to run on page load.  

1.  Click **Eliminate render-blocking resources** to see the resources that are blocking:  
    `lodash.js` and `jquery.js`.  
    
    > ##### Figure 26  
    > More information about the **Eliminate render-blocking resources** opportunity  
    > ![More information about the Eliminate render-blocking resources opportunity][ImageRender]  
    
1.  Press `Control`+`Shift`+`P` \(Windows\) or `Command`+`Shift`+`P` \(macOS\) to open the Command Menu, start typing `Coverage`, and then select **Show Coverage**.  
    
    > ##### Figure 27  
    > Opening the Command Menu from the Audits panel  
    > ![Opening the Command Menu from the Audits panel][ImageCommandMenu]  
    
    > ##### Figure 28  
    > The Coverage tab  
    > ![The Coverage tab][ImageCoverage]  
    
1.  Click **Refresh** ![Refresh][ImageRefreshIcon].  The **Coverage** tab provides an overview of how much of the code in `bundle.js`, `jquery.js`, and `lodash.js` runs while the page loads.  [Figure 30](#figure-30) says that about 76% and 30% of the jQuery and Lodash files are not used, respectively.  
    
    > ##### Figure 29  
    > The Coverage report  
    > ![The Coverage report][ImageCoverageReport]  
    
1.  Click the **jquery.js** row.  DevTools opens the file in the Sources panel.  A line of code ran if it has a blue bar next to it.  A red bar means it was not run, and is definitely not needed on page load.  
    
    > ##### Figure 30  
    > Viewing the jQuery file in the Sources panel  
    > ![Viewing the jQuery file in the Sources panel][ImageJQuery]  
    
1.  Scroll through the jQuery code a bit.  Some of the lines that get "run" are actually just comments.  Running this code through a minifier that strips comments is another way to reduce the size of this file.  

In short, when you are working with your own code, the Coverage tab helps you analyze your code, line-by-line, and only ship the code that is needed for page load.  

Are the `jquery.js` and `lodash.js` files even needed to load the page?  The Request Blocking tab displays what happens when resources are not available.  

1.  Click the **Network** tab.  
1.  Press `Control`+`Shift`+`P` \(Windows\) or `Command`+`Shift`+`P` \(macOS\) to open the Command Menu again.  
1.  Start typing `blocking` and then select **Show Request Blocking**.  
    
    > ##### Figure 31  
    > The Request Blocking tab  
    > ![The Request Blocking tab][ImageBlocking]  
    
1.  Click **Add Pattern** ![Add Pattern][ImageAddPatternIcon], type `/libs/*`, and then press `Enter` to confirm.  
    
    > ##### Figure 32  
    > Adding a pattern to block any request to the `libs` directory  
    > ![Adding a pattern to block any request to the libs directory][ImageLibs]  
    
1.  Refresh the page.  The jQuery and Lodash requests are red, meaning that the requests were blocked.   The page still loads and is interactive, so it looks like these resources are not needed whatsoever!  
    
    > ##### Figure 33  
    > The Network panel shows that the requests have been blocked  
    > ![The Network panel shows that the requests have been blocked][ImageBlockedLibs]  
    
1.  Click **Remove all patterns** ![Remove all patterns][ImageRemoveIcon] to delete the `/libs/*` blocking pattern.  

In general, the Request Blocking tab is useful for simulating how your page behaves when any given resource is not available.  

Now, remove the references to these files from the code and audit the page again:  

1.  Back in the editor tab, open `template.html`.  
1.  Delete `<script src="/libs/lodash.js">` and `<script src="/libs/jquery.js"></script>`.  
1.  Wait for the site to re-build and re-deploy.  
1.  Audit the page again from the **Audits** panel.  Your overall score should have improved again.  
    
    > ##### Figure 34  
    > An Audits report after removing the render-blocking resources  
    > ![An Audits report after removing the render-blocking resources][ImageReport4]  

#### Optimizing the Critical Rendering Path in the real-world   

The **Critical Rendering Path** refers to the code that you need to load a page.  In general, speed up page load by only shipping critical code during the page load, and then lazy-loading everything else.  

<!--[CRP]: /web/fundamentals/performance/critical-rendering-path/  -->  

*   It is unlikely that you are able to find scripts that you are able to remove outright, but you may find many scripts that you do not need to request during the page load, and instead may be requested asynchronously.  <!--See [Using async or defer][async].  -->  
*   If you are using a framework, check if it has a production mode.  This mode may use a feature such as [tree shaking][WebpackTreeShaking] in order to eliminate unnecessary code that is blocking the critical render.  

<!--[async]: /web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript/#use_async_or_defer  -->  

### Do less main thread work   

Your latest report shows some minor potential savings in the Opportunities section, but if you look down in the Diagnostics section, it looks like the biggest bottleneck is too much main thread activity.  

The main thread is where the browser does most of the work needed to display a page, such as parsing and running HTML, CSS, and JavaScript.  

The goal is to use the Performance panel to analyze what work the main thread is doing while the page loads, and find ways to defer or remove unnecessary work.  

1.  Click the **Performance** tab.  
1.  Click **Capture Settings** ![Capture Settings][ImageCaptureIcon].  
1.  Set **Network** to **Slow 3G** and **CPU** to **6x slowdown**.  Mobile devices typically have more hardware constraints than laptops or desktops, so these settings let you experience the page load as if you were using a less powerful device.  
1.  Click **Refresh** ![Refresh][ImageRefreshIcon].  DevTools refreshes the page and then produces a visualization of all the work performed in order to load the page.  This visualization is referred to as the **trace**.  
    
    > ##### Figure 35  
    > The Performance panel trace of the page load  
    > ![The Performance panel trace of the page load][ImagePerformance]  

The trace shows activity chronologically, from left to right.  The FPS, CPU, and NET charts at the top give you an overview of frames per second, CPU activity, and network activity.  The block of yellow selected that you see in [Figure 37](#figure-37) means that the CPU was completely busy with scripting activity.  This is a clue that you may be able to speed up page load by doing less JavaScript work.  

> ##### Figure 36  
> The Overview section of the trace  
> ![The Overview section of the trace][ImageOverview]  

Investigate the trace to find ways to do less JavaScript work:  

1.  Click the **Timings** section to expand it.  Based on the fact that there may be a bunch of [Timings][MDNUserTimingApi] measures from React, it seems like Tony's app is using the development mode of React.  Switching to the production mode of React may yield some easy performance wins.  
    
    > ##### Figure 37  
    > The Timings section  
    > ![The Timings section][ImageUserTiming]  

1.  Click **Timings** again to collapse that section.  
1.  Browse the **Main** section.  This section shows a chronological log of main thread activity, from left to right.  The y-axis (top to bottom) shows why events occurred.  For example, in [Figure 39](#figure-39), the `Evaluate Script` event caused the `(anonymous)` function to run, which caused `(anonymous)` to run, which caused `__webpack__require__` to run, and so on.  
    
    > ##### Figure 38  
    > The Main section  
    > ![The Main section][ImageMain]  

1.  Scroll down to the bottom of the **Main** section.  When you use a framework, most of the upper activity is caused by the framework, which is usually out of your control.  The activity caused by your app is usually at the bottom.  In this app, it seems like a function named `App` is causing a lot of requests to a `mineBitcoin` function.  It sounds like Tony might be using the devices of his fans to mine cryptocurrency...  
    
    > ##### Figure 39  
    > Hovering over the `mineBitcoin` activity  
    > ![Hovering over the mineBitcoin activity][ImageMine]  
    
    > [!NOTE]
    > Although the requests that your framework makes are usually out of your control, sometimes you may structure your app in a way that causes the framework to run inefficiently.  Restructuring your app to use the framework efficiently is a way to do less main thread work.  However, this requires a deep understanding of how your framework works, and what kind of changes you make in your own code in order to use the framework more efficiently.  

1.  Expand the **Bottom-Up** section.  This tab breaks down what activities took up the most time.  If you do not see anything in the Bottom-Up section, click the label for **Main** section.  The **Bottom-Up** section only shows information for whatever activity, or group of activity, you have currently selected.  For example, if you clicked on one of the `mineBitcoin` activities, the **Bottom-Up** section is only going to show information for that one activity.  
    
    > ##### Figure 40  
    > The Bottom-Up tab  
    > ![The Bottom-Up tab][ImageBottomUp]  

The **Self Time** column shows you how much time was spent directly in each activity.  For example, [Figure 41](#figure-41) shows that about 63% of main thread time was spent on the `mineBitcoin` function.  

Time to see whether using production mode and reducing JavaScript activity may speed up the page load.  Start with production mode:  

1.  In the editor tab, open `webpack.config.js`.  
1.  Change `"mode":"development"` to `"mode":"production"`.  
1.  Wait for the new build to deploy.  
1.  Audit the page again.  
    
    > ##### Figure 41  
    > An Audits report after configuring webpack to use production mode  
    > ![An Audits report after configuring webpack to use production mode][ImageReport5]  

Reduce JavaScript activity by removing the request to `mineBitcoin`:  

1.  In the editor tab, open `src/App.jsx`.  
1.  Comment out the request to `this.mineBitcoin(1500)` in the `constructor`.  
1.  Wait for the new build to deploy.  
1.  Audit the page again.  
    
    > ##### Figure 42  
    > An Audits report after removing unnecessary JavaScript work  
    > ![An Audits report after removing unnecessary JavaScript work][ImageReport6]  

Looks like that last change caused a massive jump in performance!  

> [!NOTE]
> This section provided a rather brief introduction to the Performance panel.  See [Performance Analysis Reference][DevtoolsEvaluatePerformanceReference] to learn more about how to analyze page performance.  

<!--todo: add section when available -->  

#### Doing less main thread work in the real world   

In general, the **Performance** panel is the most common way to understand what activity your site does as it loads, and find ways to remove unnecessary activity.  

If you prefer an approach that feels more like `console.log()`, the [User Timing API][MDNUserTimingApi] enables you to arbitrarily mark up certain phases of your app lifecycle, in order to track how long each of those phases takes.  

## Summary   

*   Whenever you set out to optimize the load performance of a site, always start with an audit.  The audit establishes a baseline, and gives you tips on how to improve.  
*   Make one change at a time, and audit the page after each change in order to see how that isolated change affects performance.  

<!--
## Next steps   

*   Run audits on your own site!  If you need help interpreting your report, or finding ways to improve your load performance, check out [Feedback](#feedback) for ways to get help from the DevTools community.  Stack Overflow, the mailing list, or Twitter are probably best for these types of questions.  
*   Please leave [feedback](#feedback) on this tutorial.  I really do use the data to make better tutorials for you.  
-->  

<!--    -->  



<!-- image links -->  

[ImageAddPatternIcon]: /microsoft-edge/devtools-guide-chromium/media/add-pattern-icon.msft.png  
[ImageCaptureIcon]: /microsoft-edge/devtools-guide-chromium/media/capture-icon.msft.png  
[ImageLargeResourceRowsButtonIcon]: /microsoft-edge/devtools-guide-chromium/media/large-resource-rows-button-icon.msft.png  
[ImageMorePanelsIcon]: /microsoft-edge/devtools-guide-chromium/media/more-panels-icon.msft.png  
[ImagePerformIcon]: /microsoft-edge/devtools-guide-chromium/media/perform-icon.msft.png  
[ImageRefreshIcon]: /microsoft-edge/devtools-guide-chromium/media/reload-icon.msft.png  
[ImageRemoveIcon]: /microsoft-edge/devtools-guide-chromium/media/remove-icon.msft.png  

[ImageTony]: /microsoft-edge/devtools-guide-chromium/media/speed-tony.msft.png "Figure 1: Tony the cat"  
[ImageEditor]: /microsoft-edge/devtools-guide-chromium/media/speed-glitch-tony-server-js.msft.png "Figure 2: The editor tab"  
[ImageMenu]: /microsoft-edge/devtools-guide-chromium/media/speed-glitch-tony-server-js-remix-project.msft.png "Figure 3: The menu that appears after clicking tony"  
[ImageDemo]: /microsoft-edge/devtools-guide-chromium/media/speed-glitch-tony-show-live.msft.png "Figure 4: The demo tab"  
[ImageDevtools]: /microsoft-edge/devtools-guide-chromium/media/speed-glitch-tony-show-live-console.msft.png "Figure 5: DevTools and the demo"  
[ImageUndocked]: /microsoft-edge/devtools-guide-chromium/media/speed-console.msft.png "Figure 6: Undocked DevTools"  
[ImageAudits]: /microsoft-edge/devtools-guide-chromium/media/speed-audits-performance.msft.png "Figure 7: The Audits panel"  
[ImageReport]: /microsoft-edge/devtools-guide-chromium/media/speed-glitch-tony-remix-audits-performance-metrics-collapsed.msft.png "Figure 8: The report for the Audits panel of the performance of the site"  
<!--[ImageError]: /microsoft-edge/devtools-guide-chromium/media/speed-.msft.png "Old Figure 9: A report that errored"  -->  
[ImageOverall]: /microsoft-edge/devtools-guide-chromium/media/speed-glitch-tony-remix-audits-performance-metrics-collapsed-metrics-highlighted.msft.png "Figure 9: The overall performance score"  
[ImageMetrics]: /microsoft-edge/devtools-guide-chromium/media/speed-glitch-tony-remix-audits-performance-metrics-collapsed-highlighted.msft.png "Figure 10: The Metrics section"  
[ImageFirstMeaningfulPaint]: /microsoft-edge/devtools-guide-chromium/media/speed-glitch-tony-remix-audits-performance-metrics-expanded.msft.png "Figure 11: Click the highlighted toggle button to expand the Metrics items"  
[ImageScreenshots]: /microsoft-edge/devtools-guide-chromium/media/speed-glitch-tony-remix-audits-performance-view-trace.msft.png "Figure 12: Screenshots of how the page looked while loading"  
[ImageOpportunities]: /microsoft-edge/devtools-guide-chromium/media/speed-glitch-tony-remix-audits-performance-opportunities.msft.png "Figure 13: The Opportunities section"  
[ImageCompression]: /microsoft-edge/devtools-guide-chromium/media/speed-glitch-tony-remix-audits-performance-opportunities-expanded.msft.png "Figure 14: Eliminate render-blocking resources opportunity"  
[ImageReference]: /microsoft-edge/devtools-guide-chromium/media/speed-web-dev-performance-audits.msft.png "Figure 15: Documentation for the Eliminate render-blocking resources opportunity"  
[ImageDiagnostics]: /microsoft-edge/devtools-guide-chromium/media/speed-glitch-tony-remix-audits-performance-diagnostics.msft.png "Figure 16: The Diagnostics section"  
[ImagePassed]: /microsoft-edge/devtools-guide-chromium/media/speed-glitch-tony-remix-audits-performance-passed-audits.msft.png "Figure 17: The Passed Audits section"  
[ImageNetwork]: /microsoft-edge/devtools-guide-chromium/media/speed-glitch-tony-remix-network.msft.png "Figure 18: The Network panel"  
[ImageLargeRows]: /microsoft-edge/devtools-guide-chromium/media/speed-glitch-tony-remix-network-use-large-request-rows.msft.png "Figure 19: Large rows in the network requests table"  
[ImageHeaders]: /microsoft-edge/devtools-guide-chromium/media/speed-glitch-tony-remix-network-use-large-request-rows-bundle-js.msft.png "Figure 20: The Headers tab"  
[ImageServer]: /microsoft-edge/devtools-guide-chromium/media/speed-glitch-tony-remix-server-js.msft.png "Figure 21: Editing server.js"  
<!--[ImageBuilding]: /microsoft-edge/devtools-guide-chromium/media/speed-glitch-tony-remix-server-js-edited.msft.png "Old Figure 22: The animation that indicates that the site is getting built"  -->  
[ImageRequests]: /microsoft-edge/devtools-guide-chromium/media/speed-glitch-tony-remix-network-main.msft.png "Figure 22: The Size column now shows 2 different values for text resources"  
[ImageGzip]: /microsoft-edge/devtools-guide-chromium/media/speed-glitch-tony-remix-network-bundle-js-headers-response.msft.png "Figure 23: The Response Headers section now contains a `content-encoding` header"  
[ImageReport2]: /microsoft-edge/devtools-guide-chromium/media/speed-glitch-tony-remix-updated-audits-performance.msft.png "Figure 24: An Audits report after enabling text compression"  
<!--[ImageResize]: /microsoft-edge/devtools-guide-chromium/media/speed-glitch-tony-remix-updated-audits-performance-opportunities-expanded.msft.png "Old Figure 27: Details about the properly size images opportunity"  -->
[ImageReport3]: /microsoft-edge/devtools-guide-chromium/media/speed-glitch-compression-small-images-audits-performance.msft.png "Figure 25: An Audits report after resizing images"  
[ImageRender]: /microsoft-edge/devtools-guide-chromium/media/speed-glitch-tony-remix-updated-audits-performance-oppportunities-expanded.msft.png "Figure 26: More information about the Eliminate render-blocking resources opportunity"  
[ImageCommandMenu]: /microsoft-edge/devtools-guide-chromium/media/speed-glitch-tony-remix-updated-audits-performance-oppportunities-expanded-command-coverage.msft.png "Figure 27: Opening the Command Menu from the Audits panel"  
[ImageCoverage]: /microsoft-edge/devtools-guide-chromium/media/speed-glitch-tony-remix-updated-audits-performance-oppportunities-expanded-drawer-coverage.msft.png "Figure 28: The Coverage tab"  
[ImageCoverageReport]: /microsoft-edge/devtools-guide-chromium/media/speed-glitch-tony-remix-updated-audits-performance-oppportunities-expanded-drawer-coverage-reloaded.msft.png "Figure 29: The Coverage report"  
[ImageJQuery]: /microsoft-edge/devtools-guide-chromium/media/speed-glitch-tony-remix-updated-sources-drawer-coverage-reloaded-jquery-js.msft.png "Figure 30: Viewing the jQuery file in the Sources panel"  
[ImageBlocking]: /microsoft-edge/devtools-guide-chromium/media/speed-glitch-tony-remix-updated-network-drawer-request-blocking-empty.msft.png "Figure 31: The Request Blocking tab"  
[ImageLibs]: /microsoft-edge/devtools-guide-chromium/media/speed-glitch-tony-remix-updated-network-drawer-request-blocking-added.msft.png "Figure 32: Adding a pattern to block any request to the libs directory"  
[ImageBlockedLibs]: /microsoft-edge/devtools-guide-chromium/media/speed-glitch-tony-remix-updated-network-reloaded-drawer-request-blocking-added.msft.png "Figure 33: The Network panel shows that the requests have been blocked"  
[ImageReport4]: /microsoft-edge/devtools-guide-chromium/media/speed-glitch-tony-remix-updated-2-audits-performance.msft.png "Figure 34: An Audits report after removing the render-blocking resources"  
[ImagePerformance]: /microsoft-edge/devtools-guide-chromium/media/speed-glitch-tony-remix-performance-slow-network-slow-cpu.msft.png "Figure 35: The Performance panel trace of the page load"  
[ImageOverview]: /microsoft-edge/devtools-guide-chromium/media/speed-glitch-tony-remix-performance-slow-network-slow-cpu-main-highlight.msft.png "Figure 36: The Overview section of the trace"  
[ImageUserTiming]: /microsoft-edge/devtools-guide-chromium/media/speed-glitch-tony-remix-performance-slow-network-slow-cpu-timings.msft.png "Figure 37: The Timings section"  
[ImageMain]: /microsoft-edge/devtools-guide-chromium/media/speed-glitch-tony-remix-performance-slow-network-slow-cpu-main.msft.png "Figure 38: The Main section"  
[ImageMine]: /microsoft-edge/devtools-guide-chromium/media/speed-glitch-tony-remix-performance-slow-network-slow-cpu-timings-minebitcoin.msft.png "Figure 39: Hovering over the mineBitcoin activity"  
[ImageBottomUp]: /microsoft-edge/devtools-guide-chromium/media/speed-glitch-tony-remix-performance-slow-network-slow-cpu-timings-summary-minebitcoin.msft.png "Figure 40: The Bottom-Up tab"  
[ImageReport5]: /microsoft-edge/devtools-guide-chromium/media/speed-glitch-tony-remix-updated-3-audits-performance.msft.png "Figure 41: An Audits report after configuring webpack to use production mode"  
[ImageReport6]: /microsoft-edge/devtools-guide-chromium/media/speed-glitch-tony-remix-updated-4-audits-performance.msft.png "Figure 42: An Audits report after removing unnecessary JavaScript work"  

<!-- links -->  

[DevtoolsEvaluatePerformanceReference]: /microsoft-edge/devtools-guide-chromium/evaluate-performance/reference "Performance Analysis Reference"  

[CourseraIntroductionWebDevelopmentClass]: https://www.coursera.org/learn/web-development#syllabus "Introduction to Web Development class | Coursera"  

[EssentialImageOptimization]: https://images.guide "Essential Image Optimization"  

[MDNContentEncodingDirectives]: https://developer.mozilla.org/docs/Web/HTTP/Headers/Content-Encoding#Directives "Directives - Content-Encoding | MDN"  
[MDNUserTimingApi]: https://developer.mozilla.org/docs/Web/API/User_Timing_API "User Timing API | MDN"  

[WebpackTreeShaking]: https://webpack.js.org/guides/tree-shaking "Tree Shaking | webpack"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/speed/get-started) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
