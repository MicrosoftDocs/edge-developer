---
title: Inspect Network Activity In Microsoft Edge DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/06/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
<!-- Copyright Kayce Basques 

   Licensed under the Apache License, Version 2. 0 (the "License");
   you may not use this file except in compliance with the License. 
   You may obtain a copy of the License at

       https://www. apache. org/licenses/LICENSE-2. 0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
   See the License for the specific language governing permissions and
   limitations under the License.  -->  





# Inspect Network Activity In Microsoft Edge DevTools   



This is a hands-on tutorial of some of the most commonly-used DevTools features related
to inspecting network activity for a page.  

See [Network Reference][DevtoolsNetworkReference] if you want to browse features instead.  

<!--TODO: This entire section needs a Microsoft Edge DevTools re-write  -->

<!-- Read on, or watch the video version of this tutorial:  -->  

<!--
> [!VIDEO embed/e1gAyQuIFQo]  
-->

## When to use the Network panel   

In general, use the Network panel when you need to make sure that resources are being downloaded or uploaded as expected.  The most common use cases for the Network panel are:  

*   Making sure that resources are actually being uploaded or downloaded at all.  
*   Inspecting the properties of an individual resource, such as the HTTP headers, content, size, and so on.  

If you are looking for ways to improve page load performance, **do not** start with the Network panel.  There are many types of load performance issues that are not related to network activity.  Start with the Audits panel because it gives you targeted suggestions on how to improve your page.  <!--See [Optimize Website Speed][SpeedGetStarted].  -->

<!--TODO: add section link when content is available  -->

## Open the Network panel   

To get the most out of this tutorial, open up the demo and try out the features on the demo page.  

1.  Open the [Get Started Demo][GlitchNetworkGetStarted] .  
    
    > ##### Figure 1  
    > The demo  
    > ![The demo][ImagesTutorialDemo]  
    
    <!--You may prefer to move the demo to a separate window.  -->  
    
    <!--
    > ##### old Figure 2  
    > The demo in one window and this tutorial in a different window  
    > ![The demo in one window and this tutorial in a different window][ImagesTutorialWindows]  -->

1.  [Open DevTools][DevToolsOpen] by pressing `Control`+`Shift`+`J` \(Windows\) or
   `Command`+`Option`+`J` \(macOS\).  The **Console** panel opens.  
    
    > ##### Figure 2  
    > The Console  
    > ![The Console][ImagesTutorialConsole]  
    
    You may prefer to [dock DevTools to the bottom of your window][DevToolsCustomizePlacement].  
    
    > ##### Figure 3  
    > DevTools docked to the bottom of the window  
    > ![DevTools docked to the bottom of the window][ImagesTutorialDocked]  

1.  Click the **Network** tab.  The Network panel opens.  
    
    > ##### Figure 4  
    > DevTools docked to the bottom of the window  
    > ![DevTools docked to the bottom of the window][ImagesTutorialNetwork]  

Right now the Network panel is empty.  DevTools only logs network activity after you open it and no network activity has occurred since you opened DevTools.  

## Log network activity   

To view the network activity that a page causes:  

1.  Reload the page.  The Network panel logs all network activity in the **Network Log**.  
    
    > ##### Figure 5  
    > The Network Log  
    > ![The Network Log][ImagesTutorialLog]  
    
    Each row of the **Network Log** represents a resource.  By default the resources are listed chronologically.  The top resource is usually the main HTML document.  The bottom resource is whatever was requested last.  
    
    Each column represents information about a resource.  [**Figure 6**](#figure-6) shows the default columns:  

    *   **Status**.  The HTTP status code for response.  
    *   **Type**.  The resource type.  
    *   **Initiator**.  The cause of the resource request.  Clicking a link in the Initiator column takes you to the source code that caused the request.  
    *   **Time**.  The duration of the request.  
    *   **Waterfall**.  A graphical representation of the different stages of the request.  
        Hover over a Waterfall to see a breakdown.  
    
    > [!NOTE]
    > The graph above the Network Log is called the Overview.  You will not use the Overview graph in this tutorial, so you may hide it. See [Hide the Overview pane][DevtoolsReferenceHideOverview].
        
1.  After you open DevTools, it records network activity in the Network Log.  
    To demonstrate this, first look at the bottom of the **Network Log** and make a mental note of the last activity.  
1.  Now, click the **Get Data** button in the demo.  
1.  Look at the bottom of the **Network Log** again.  You should see a new resource called `getstarted.json`.  Clicking the **Get Data** button caused the page to request this file.  
    
    > ##### Figure 6  
    > A new resource in the Network Log  
    > ![A new resource in the Network Log][ImagesTutorialRuntime]  

## Show more information   

The columns of the Network Log are configurable.  You may hide columns that you are not using.  
There are also many columns that are hidden by default which you may find useful.  

1.  Right-click the header of the Network Log table and select **Domain**.  The domain of each resource is now shown.  
    
    > ##### Figure 7  
    > Enabling the Domain column  
    > ![Enabling the Domain column][ImagesTutorialDomain]  
    
    > [!TIP]
    > See the full URL of a resource by hovering over the cell in the **Name** column.  

## Simulate a slower network connection   

The network connection of the computer that you use to build sites is probably faster than the network connections of the mobile devices of your users.  By throttling the page, you get a better idea of how long a page takes to load on a mobile device.  

1.  Click the **Throttling** dropdown, which is set to **Online** by default.  
    
    > ##### Figure 8  
    > Enabling throttling  
    > ![Enabling throttling][ImagesTutorialThrottling]  
    
1.  Select **Slow 3G**.  
    
    > ##### Figure 9  
    > Selecting Slow 3G  
    > ![Selecting Slow 3G][ImagesTutorialSlow3G]  
    
1.  Long-press **Reload** ![Reload][ImageReloadIcon] and then select **Empty Cache And Hard Reload**.  
    
    > ##### Figure 10  
    > Empty Cache And Hard Reload  
    > ![Empty Cache And Hard Reload][ImagesTutorialHardReload]  
    
    On repeat visits, the browser usually serves some files from the [cache][MDNHTTPCache] , which speeds up the page load.  **Empty Cache And Hard Reload** forces the browser to go the network for all resources.  This is helpful when you want to see how a first-time visitor experiences a page load.  
    
    > [!NOTE]
    > The **Empty Cache And Hard Reload** workflow is only available when DevTools is open.  

## Capture screenshots   

Screenshots let you see how a page looked over time while it was loading.  

1.  Click ![Network settings][ImageSettingsIcon] and check **Capture screenshots**.
1.  Reload the page again via the **Empty Cache And Hard Reload** workflow.  See [Simulate a slower connection](#simulate-a-slower-network-connection) if you need a reminder on how to do this.  
    The Screenshots pane provides thumbnails of how the page looked at various points during the loading process.  
    
    > ##### Figure 11  
    > Screenshots of the page load  
    > ![Screenshots of the page load][ImagesTutorialAllScreenshots]  

1.  Click the first thumbnail.  DevTools shows you what network activity was occurring at that moment in time.  
    
    > ##### Figure 12  
    > The network activity that was happening during the first screenshot  
    > ![The network activity that was happening during the first screenshot][ImagesTutorialFirstScreenshot]  

1.  Click ![Network settings][ImageSettingsIcon] again and uncheck **Capture screenshots** to close the Screenshots pane.
1.  Reload the page again.  

## Inspect the details of the resource   

Click a resource to learn more information about it.  Try it now:  

1.  Click `getstarted.html`.  The **Headers** tab is shown.  Use this tab to inspect HTTP headers.  
    
    > ##### Figure 13  
    > The Headers tab  
    > ![The Headers tab][ImagesTutorialHeaders]  
    
1.  Click the **Preview** tab.  A basic rendering of the HTML is shown.  
    
    > ##### Figure 14  
    > The Preview tab  
    > ![The Preview tab][ImagesTutorialPreview]  

     This tab is helpful when an API returns an error code in HTML.  You may find it easier to read the rendered HTML than the HTML source code, or when you inspect images.  

1.  Click the **Response** tab.  The HTML source code is shown.  
    
    > ##### Figure 15  
    > The Response tab  
    > ![The Response tab][ImagesTutorialResponse]  
    
    > [!TIP]
    > When a file is minified, clicking the **Format** ![Format][ImageFormatIcon] button at the bottom of the **Response** tab re-formats the contents of the file for readability.  

1.  Click the **Timing** tab.  A breakdown of the network activity for this resource is shown.  
    
    > ##### Figure 16  
    > The Timing tab  
    > ![The Timing tab][ImagesTutorialTiming]  

1.  Click **Close** ![Close][ImageCloseIcon] to view the Network Log again.  
    
    > ##### Figure 17  
    > The Close button  
    > ![The Close button][ImagesTutorialCloseTiming]  

## Search network headers and responses   

Use the **Search** pane when you need to search the HTTP headers and responses of all resources for a certain string or regular expression.  

For example, suppose you want to check if your resources are using reasonable **cache policies**.  

<!--TODO: add cache policies section when available  -->

1.  Click **Search** ![Search][ImageSearchIcon].  The Search pane opens to the left of the Network log.  
    
    > ##### Figure 18  
    > The Search pane  
    > ![The Search pane][ImagesTutorialSearch]  

1.  Type `Cache-Control` and press `Enter`.  The Search pane lists all instances of `Cache-Control` that it finds in resource headers or content.  
    
    > ##### Figure 19  
    > Search results for `Cache-Control`  
    > ![Search results for Cache-Control][ImagesTutorialResults]  

1.  Click a result to view which resource the result was found in. If you are looking at the details of the resource, click a result to go directly to it. For example, if the query was found in a header, the Headers tab opens. If the query was found in content, the Response tab opens.  
    
    > ##### Figure 20  
    > A search result highlighted in the Headers tab  
    > ![A search result highlighted in the Headers tab][ImagesTutorialCache]  
    
1.  Close the Search pane and the Headers tab.  
    
    > ##### Figure 21  
    > The Close buttons  
    > ![The Close buttons][ImagesTutorialCloseButtons]  
    
## Filter resources   

DevTools provides numerous workflows for filtering out resources that are not relevant to the
task at hand.  

> ##### Figure 22  
> The Filters toolbar  
> ![The Filters toolbar][ImagesTutorialFilters]  

The **Filters** toolbar should be enabled by default.  If not:  

1.  Click **Filter** ![Filter][ImageFilterIcon] to show it.  

### Filter by string, regular expression, or property   

The **Filter** text box supports many different types of filtering.  

1.  Type `png` into the **Filter** text box.  Only the files that contain the text `png` are shown.  In this case the only files that match the filter are the PNG images.  
    
    > ##### Figure 23  
    > A string filter  
    > ![A string filter][ImagesTutorialPNG]  

1.  Type `/.*\.[cj]s+$/`.  DevTools filters out any resource with a filename that does not end with a `j` or a `c` followed by 1 or more `s` characters.  
    
    > ##### Figure 24  
    > A regular expression filter  
    > ![A regular expression filter][ImagesTutorialRegEx]  
    
1.  Type `-main.css`.  DevTools filters out `main.css`.  If any other file matched the pattern they would also be filtered out.  
    
    > ##### Figure 25  
    > A negative filter  
    > ![A negative filter][ImagesTutorialNegative]  
    
1.  Type `domain:cdn.glitch.com` into the **Filter** text box.  DevTools filters out any resource with a URL that does not match this domain.  
    
    > ##### Figure 26  
    > A property filter  
    > ![A property filter][ImagesTutorialProperty]  

    See [Filter requests by properties][DevtoolsReferenceProperty] for the full list of filterable properties.  
    
    
1.  Clear the **Filter** text box of any text.  

### Filter by resource type   

To focus in on a certain type of file, such as stylesheets:  

1.  Click **CSS**.  All other file types are filtered out.  
    
    > ##### Figure 27  
    > Showing CSS files only  
    > ![Showing CSS files only][ImagesTutorialCSS]  
    
1.  To also see scripts, hold `Control` \(Windows\) or `Command` \(macOS\) and then click **JS**.  
    
    > ##### Figure 28  
    > Showing CSS and JS files only  
    > ![Showing CSS and JS files only][ImagesTutorialCSSJS]  
    
1.  Click **All** to remove the filters and see all resources again.  

See [Filter requests][DevtoolsNetworkReferenceFilter] for other filtering workflows.  

## Block requests   

How does a page look and behave when some of the page resources are not available?  Does it fail completely, or is it still somewhat functional?  Block requests to find out:  

1.  Press `Control`+`Shift`+`P` \(Windows\) or `Command`+`Shift`+`P` \(macOS\) to open the **Command Menu**.  
    
    > ##### Figure 29  
    > The Command Menu  
    > ![The Command Menu][ImagesTutorialCommandMenu]  
    
1.  Type `block`, select **Show Request Blocking**, and press `Enter`.  
    
    > ##### Figure 30  
    > Show Request Blocking  
    > ![Show Request Blocking][ImagesTutorialBlock]  

1.  Click **Add Pattern** ![Add Pattern][ImageAddIcon].  
1.  Type `main.css`.  
    
    > ##### Figure 31  
    > Blocking `main.css`  
    > ![Blocking main.css][ImagesTutorialAddBlock]  
    
1.  Click **Add**.  
1.  Reload the page.  As expected, the styling of the page is slightly messed up because the main stylesheet has been blocked.  
    
    > [!NOTE]
    > The `main.css` row in the Network Log.  The red text means that the resource was blocked.
    
    > ##### Figure 32  
    > `main.css` has been blocked  
    > ![main.css has been blocked][ImagesTutorialBlockedStyles]  

1.  Uncheck the **Enable request blocking** checkbox.  

## Conclusion  

Congratulations, you have completed the tutorial.  You now know how to use the Network panel in the Microsoft Edge DevTools!






Check out the [Network Reference][DevtoolsNetworkReference] to discover more DevTools features related to inspecting network activity. 

 



<!-- image links -->  

[ImageAddIcon]: images/add-icon.msft.png  
[ImageCloseIcon]: images/close-icon.msft.png  
[ImageFilterIcon]: images/filter-icon.msft.png  
[ImageFormatIcon]: images/format-icon.msft.png  
[ImageReloadIcon]: images/reload-icon.msft.png  
[ImageScreenshotsIcon]: images/screenshots-icon.msft.png  
[ImageSearchIcon]: images/search-icon.msft.png  
[ImageSettingsIcon]: images/settings-icon.msft.png

[ImagesTutorialAddBlock]: images/glitch-network-cli-block-add-pattern.msft.png "Figure 31: Blocking main.css"  
[ImagesTutorialAllScreenshots]: images/glitch-network-screenshots.msft.png "Figure 11: Screenshots of the page load"  
[ImagesTutorialBlock]: images/glitch-network-cli-block.msft.png "Figure 30: Show Request Blocking"  
[ImagesTutorialBlockedStyles]: images/glitch-network-cli-block-main-css.msft.png "Figure 32: main.css has been blocked"  
[ImagesTutorialCache]: images/glitch-network-search-cache-control-headers-response-headers.msft.png "Figure 20: A search result highlighted in the Headers tab"  
[ImagesTutorialCloseButtons]: images/glitch-network-search-close.msft.png "Figure 21: The Close buttons"  
[ImagesTutorialCloseTiming]: images/glitch-network-resources-close-tabs.msft.png "Figure 17: The Close button"  
[ImagesTutorialCommandMenu]: images/glitch-network-cli-empty.msft.png "Figure 29: The Command Menu"  
[ImagesTutorialConsole]: images/glitch-console.msft.png "Figure 2: The Console"  
[ImagesTutorialCSS]: images/glitch-network-filter-file-type-css.msft.png "Figure 27: Showing CSS files only"  
[ImagesTutorialCSSJS]: images/glitch-network-filter-file-type-css-js.msft.png "Figure 28: Showing CSS and JS files only"  
[ImagesTutorialDemo]: images/glitch-inspect-network-activity-demo.msft.png "Figure 1: The demo"  
[ImagesTutorialDocked]: images/glitch-console-bottom.msft.png "Figure 3: DevTools docked to the bottom of the window"  
[ImagesTutorialDomain]: images/glitch-network-edit-column.msft.png "Figure 7: Enabling the Domain column"  
[ImagesTutorialFilters]: images/glitch-network-filter-empty.msft.png "Figure 22: The Filters toolbar"  
[ImagesTutorialFirstScreenshot]: images/glitch-network-screenshots-first.msft.png "Figure 12: The network activity that was happening during the first screenshot"  
[ImagesTutorialHardReload]: images/glitch-empty-cache-and-hard-reset.msft.png "Figure 10: Empty Cache And Hard Reload"  
[ImagesTutorialHeaders]: images/glitch-network-resources-headers.msft.png "Figure 13: The Headers tab"  
[ImagesTutorialLog]: images/glitch-network.msft.png "Figure 5: The Network Log"  
[ImagesTutorialNegative]: images/glitch-network-filter-negative-statement.msft.png "Figure 25: A negative filter"  
[ImagesTutorialNetwork]: images/glitch-network-bottom.msft.png "Figure 4: DevTools docked to the bottom of the window"  
[ImagesTutorialPNG]: images/glitch-network-filter-png.msft.png "Figure 23: A string filter"  
[ImagesTutorialPreview]: images/glitch-network-resources-preview.msft.png "Figure 14: The Preview tab"  
[ImagesTutorialProperty]: images/glitch-network-filter-property-value.msft.png "Figure 26: A property filter"  
[ImagesTutorialRegEx]: images/glitch-network-filter-regex.msft.png "Figure 24: A regular expression filter"  
[ImagesTutorialResponse]: images/glitch-network-resources-response.msft.png "Figure 15: The Response tab"  
[ImagesTutorialResults]: images/glitch-network-search-cache-control.msft.png "Figure 19: Search results for Cache-Control"  
[ImagesTutorialRuntime]: images/glitch-network-new-resource.msft.png "Figure 6: A new resource in the Network Log"  
[ImagesTutorialSearch]: images/glitch-network-search-empty.msft.png "Figure 18: The Search pane"  
[ImagesTutorialSlow3G]: images/glitch-network-throttling-slow-3g.msft.png "Figure 9: Selecting Slow 3G"  
[ImagesTutorialThrottling]: images/glitch-network-throttling.msft.png "Figure 8: Enabling throttling"  
[ImagesTutorialTiming]: images/glitch-network-resources-timing.msft.png "Figure 16: The Timing tab"  
<!--[ImagesTutorialWindows]: images/tutorial/windows.msft.png " old Figure 2: The demo in one window and this tutorial in a different window"  -->  

<!-- links -->  

[GlitchNetworkGetStarted]: https://microsoft-edge-chromium-devtools.glitch.me/static/network/getstarted.html "Inspect Network Activity Demo"  
[MDNHTTPCache]: https://developer.mozilla.org/docs/Web/HTTP/Caching "HTTP caching | MDN"  

<!--[CachePolicies]: ../../../web/tools/lighthouse/audits/cache-policy.md ""  -->  

[DevToolsCustomizePlacement]: ../customize/placement.md "Change Microsoft Edge DevTools Placement (Undock, Dock To Bottom, Dock To Left)"  
[DevtoolsNetworkReference]: reference.md "Network Analysis Reference"
[DevToolsOpen]: ../open.md "Open Microsoft Edge DevTools"  
[DevtoolsNetworkReferenceFilter]: reference.md#filter-requests "Filter requests - Network Analysis Reference"  
[DevtoolsReferenceHideOverview]: reference.md#hide-the-overview-pane "Hide the Overview pane - Network Analysis Reference"
[DevtoolsReferenceProperty]: reference.md#filter-requests-by-properties "Filter requests by properties - Network Analysis Reference"
<!--[SpeedGetStarted]: ../speed/get-started.md ""  -->  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/network/index) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
