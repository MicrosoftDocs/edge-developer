---
title: Inspect network activity
description: A tutorial on the most popular network-related features in Microsoft Edge DevTools.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 05/04/2021
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
   limitations under the License. -->
# Inspect network activity

This is a step-by-step tutorial walkthrough of the **Network** tool, for inspecting network activity for a page.

For an overview of the network-related DevTools features, see [Network features reference](./reference.md).

<!-- TODO: entire section needs a Microsoft Edge DevTools rewrite  -->

<!-- Read on, or watch the video version of this tutorial: [!VIDEO embed/e1gAyQuIFQo] -->


<!-- ====================================================================== -->
## When to use the Network panel

In general, use the Network panel when you need to make sure that resources are being downloaded or uploaded as expected.  The most common use cases for the **Network** panel are:

*  Making sure that resources are actually being uploaded or downloaded at all.

*  Inspecting the properties of an individual resource, such as the HTTP headers, content, size, and so on.

If you're looking for ways to improve page load performance, don't start with the **Network** tool.  There are many types of load performance issues that aren't related to network activity.  Start with the **Lighthouse** tool, because it gives you targeted suggestions on how to improve your page.  See [Optimize website speed using Lighthouse](../speed/get-started.md).


<!-- ====================================================================== -->
## Open the Network panel

To get the most out of this tutorial, open the demo and try out the features on the demo page.

1. Open the [Inspect Network Activity Demo](https://microsoftedge.github.io/Demos/network-tutorial/) in a new tab or window.

   :::image type="content" source="../media/network-glitch-inspect-network-activity-demo.msft.png" alt-text="The demo." lightbox="../media/network-glitch-inspect-network-activity-demo.msft.png":::

   <!-- You can view the source files for this demo in the [MicrosoftEdge/Demos > devtools-css-get-started](https://github.com/MicrosoftEdge/Demos/tree/main/network-tutorial) repo folder. -->

   <!--
   :::image type="content" source="../media/network-tutorial/windows.msft.png" alt-text="The demo in one window and this tutorial in a different window." lightbox="../media/network-tutorial/windows.msft.png":::
   -->

1. To [Open DevTools](../open/index.md), press `Control`+`Shift`+`J` (Windows, Linux) or `Command`+`Option`+`J` (macOS).  The **Console** tool opens.

   :::image type="content" source="../media/network-glitch-console.msft.png" alt-text="The Console." lightbox="../media/network-glitch-console.msft.png":::

   You might prefer to [dock DevTools to the bottom of your window](../customize/placement.md):

   :::image type="content" source="../media/network-glitch-console-bottom.msft.png" alt-text="DevTools docked to the bottom of the window." lightbox="../media/network-glitch-console-bottom.msft.png":::

1. Open the **Network** tool.

:::image type="content" source="../media/network-glitch-network-bottom.msft.png" alt-text="Network tool in DevTools, with DevTools docked to the bottom of the window." lightbox="../media/network-glitch-network-bottom.msft.png":::

Right now the **Network** tool is empty.  DevTools only logs network activity after you open it, and no network activity has occurred since you opened DevTools.


<!-- ====================================================================== -->
## Log network activity

To view the network activity that a page causes:

1. Refresh the webpage.  The Network panel logs all network activity in the **Network Log**.

   :::image type="content" source="../media/network-glitch-network.msft.png" alt-text="The Network Log." lightbox="../media/network-glitch-network.msft.png":::

   Each row of the **Network Log** represents a resource.  By default the resources are listed chronologically.  The top resource is usually the main HTML document.  The bottom resource is whatever was requested last.

   Each column represents information about a resource.  In the previous figure, the default columns are displayed.

    *  **Status**.  The HTTP status code for response.

    *  **Type**.  The resource type.

    *  **Initiator**.  The cause of the resource request.  CHoosing a link in the Initiator column takes you to the source code that caused the request.

    *  **Time**.  The duration of the request.

    *  **Waterfall**.  A graphical representation of the different stages of the request.  To display a breakdown, hover on a Waterfall.

    > [!NOTE]
    > The graph above the Network Log is called the Overview.  You will not use the Overview graph in this tutorial, so you can hide it.  See [Hide the Overview pane](./reference.md#hide-the-overview-pane).

   After you open DevTools, it records network activity in the Network Log.

1. To demonstrate this, first look at the bottom of the **Network Log** and make a mental note of the last activity.

1. Now, click the **Get Data** button in the demo.

1. Look at the bottom of the **Network Log** again.  A new resource named `getstarted.json` is displayed:

:::image type="content" source="../media/network-glitch-network-new-resource.msft.png" alt-text="A new resource in the Network Log." lightbox="../media/network-glitch-network-new-resource.msft.png":::


<!-- ====================================================================== -->
## Show more information

The columns of the Network Log are configurable.  You can hide columns that you aren't using.  There are also many columns that are hidden by default which you might find useful.

1. Right-click the header of the Network Log table, and then select **Domain**.  The domain of each resource is now shown.

:::image type="content" source="../media/network-glitch-network-edit-column.msft.png" alt-text="Enable the Domain column." lightbox="../media/network-glitch-network-edit-column.msft.png":::

1. To see the full URL of a resource, hover over its cell in the **Name** column.


<!-- ====================================================================== -->
## Simulate a slower network connection

The network connection of the computer that you use to build sites is probably faster than the network connections of the mobile devices of your users.  By throttling the page, you get a better idea of how long a page takes to load on a mobile device.

1. Select the **Throttling** dropdown, which is set to **No throttling** by default.

1. Select **Slow 3G**.

   :::image type="content" source="../media/network-glitch-network-throttling-slow-3g.msft.png" alt-text="Select Slow 3G." lightbox="../media/network-glitch-network-throttling-slow-3g.msft.png":::

1. Long-press **Reload** (![Reload.](../media/refresh-icon.msft.png)) and select **Empty Cache And Hard Reload**.

:::image type="content" source="../media/network-glitch-empty-cache-and-hard-reset.msft.png" alt-text="Empty Cache And Hard Reload." lightbox="../media/network-glitch-empty-cache-and-hard-reset.msft.png":::

On repeat visits, the browser usually serves some files from the [cache](https://developer.mozilla.org/docs/Web/HTTP/Caching), which speeds up the page load.  **Empty Cache And Hard Reload** forces the browser to go the network for all resources.  Use it to display how a first-time visitor experiences a page load.

The **Empty Cache And Hard Reload** workflow is only available when DevTools is open.


<!-- ====================================================================== -->
## Capture screenshots

Screenshots display how a webpage looks over time while it loads.

1. Click the (![Network settings.](../media/settings-icon.msft.png)) button and then select the **Capture screenshots** checkbox.

   :::image type="content" source="../media/network-glitch-network-screenshots-setting.msft.png" alt-text="The Capture Screenshot checkbox in the Network settings." lightbox="../media/network-glitch-network-screenshots-setting.msft.png":::

1. Refresh the page again using the **Empty Cache And Hard Reload** workflow.  See [Simulate a slower connection](#simulate-a-slower-network-connection) if you need a reminder on how to do this.

   The **Screenshots** panel provides thumbnails of how the page looked at various points during the loading process:

   :::image type="content" source="../media/network-glitch-network-screenshots.msft.png" alt-text="Screenshots of the page load." lightbox="../media/network-glitch-network-screenshots.msft.png":::

1. Click the first thumbnail.  DevTools shows you what network activity was occurring at that moment in time.

   :::image type="content" source="../media/network-glitch-network-screenshots-first.msft.png" alt-text="The network activity that was happening during the first screenshot." lightbox="../media/network-glitch-network-screenshots-first.msft.png":::

1. Click (![Network settings.](../media/settings-icon.msft.png)) again and turn off the **Capture screenshots** checkbox to close the **Screenshots** pane.

1. Refresh the page again.


<!-- ====================================================================== -->
## Inspect the details of the resource

Select a resource to learn more information about it.

1. Select `network-tutorial/`.  The **Headers** panel is shown.  Use this panel to inspect HTTP headers.

   :::image type="content" source="../media/network-glitch-network-resources-headers.msft.png" alt-text="The Headers panel." lightbox="../media/network-glitch-network-resources-headers.msft.png":::

1. Select the **Preview** panel.  A basic rendering of the HTML is shown.

   :::image type="content" source="../media/network-glitch-network-resources-preview.msft.png" alt-text="The Preview panel." lightbox="../media/network-glitch-network-resources-preview.msft.png":::

    The panel is helpful when an API returns an error code in HTML.  You might find it easier to read the rendered HTML than the HTML source code, or when you inspect images.

1. Select the **Response** panel.  The HTML source code is shown.

   :::image type="content" source="../media/network-glitch-network-resources-response.msft.png" alt-text="The Response panel." lightbox="../media/network-glitch-network-resources-response.msft.png":::

    > [!TIP]
    > When a file is minified, select the **Format** (![Format.](../media/format-icon.msft.png)) button at the bottom of the **Response** panel to re-format the contents of the file for readability.

1. Select the **Timing** panel.  A breakdown of the network activity for the resource is displayed.

   :::image type="content" source="../media/network-glitch-network-resources-timing.msft.png" alt-text="The Timing panel." lightbox="../media/network-glitch-network-resources-timing.msft.png":::

1. Click **Close** (![Close.](../media/close-icon.msft.png)) to view the Network Log again.

   :::image type="content" source="../media/network-glitch-network-resources-close-tabs.msft.png" alt-text="The Close button." lightbox="../media/network-glitch-network-resources-close-tabs.msft.png":::


<!-- ====================================================================== -->
## Search network headers and responses

Use the **Search** pane when you need to search the HTTP headers and responses of all resources for a certain string or regular expression.

For example, suppose you want to verify that your resources are using reasonable **cache policies**.<!--[cache policies](../../../web/tools/lighthouse/audits/cache-policy) -->

<!--TODO: add cache policies section when available  -->

1. Select **Search** (![Search.](../media/search-icon.msft.png)).  The Search pane opens to the left of the Network log.

   :::image type="content" source="../media/network-glitch-network-search-empty.msft.png" alt-text="The Search pane." lightbox="../media/network-glitch-network-search-empty.msft.png":::

1. Type `no-cache` and press `Enter`.  The Search pane lists all instances of `no-cache` that it finds in resource headers or content.

   :::image type="content" source="../media/network-glitch-network-search-cache-control.msft.png" alt-text="Search results for no-cache." lightbox="../media/network-glitch-network-search-cache-control.msft.png":::

1. Click a result to view the resource in which the result was found.  If you are looking at the details of the resource, select a result to go directly to it.  For example, if the query was found in a header, the **Headers** panel opens.   If the query was found in content, the **Response** panel opens.

   :::image type="content" source="../media/network-glitch-network-search-cache-control-headers-response-headers.msft.png" alt-text="A search result highlighted in the Headers panel." lightbox="../media/network-glitch-network-search-cache-control-headers-response-headers.msft.png":::

1. Close the Search pane and the **Headers** panel.


<!-- ====================================================================== -->
## Filter resources

DevTools provides numerous workflows for filtering out resources that aren't relevant to the task at hand.

:::image type="content" source="../media/network-glitch-network-filter-empty.msft.png" alt-text="The Filters toolbar." lightbox="../media/network-glitch-network-filter-empty.msft.png":::

The **Filters** toolbar should be turned on by default.  If the **Filters** toolbar isn't on, click **Filter** (![Filter.](../media/filter-icon.msft.png)) to show it.

### Filter by string, regular expression, or property

The **Filter** text box supports many different types of filtering.

1. Type `png` into the **Filter** text box.  Only the files that contain the text `png` are shown.  In this case the only files that match the filter are the PNG images.

   :::image type="content" source="../media/network-glitch-network-filter-png.msft.png" alt-text="A string filter." lightbox="../media/network-glitch-network-filter-png.msft.png":::

1. Type `/.*\.[cj]s+$/`.  DevTools filters out any resource with a filename that doesn't end with a `j` or a `c` followed by 1 or more `s` characters.

   :::image type="content" source="../media/network-glitch-network-filter-regex.msft.png" alt-text="A regular expression filter." lightbox="../media/network-glitch-network-filter-regex.msft.png":::

1. Type `-main.css`.  DevTools filters out `main.css`.  If any file matches that pattern, it is also filtered out.

   :::image type="content" source="../media/network-glitch-network-filter-negative-statement.msft.png" alt-text="A negative filter." lightbox="../media/network-glitch-network-filter-negative-statement.msft.png":::

1. Type `larger-than:1000` into the **Filter** text box.  DevTools filters out any resource with responses that are smaller than 1000 bytes.

   :::image type="content" source="../media/network-glitch-network-filter-property-value.msft.png" alt-text="A property filter." lightbox="../media/network-glitch-network-filter-property-value.msft.png":::

   For the full list of filterable properties, see [Filter requests by properties](./reference.md#filter-requests-by-properties).

1. Clear the **Filter** text box of any text.

### Filter by resource type

To focus in on a certain type of file, such as stylesheets:

1. Select **CSS**.  All other file types are filtered out.

   :::image type="content" source="../media/network-glitch-network-filter-file-type-css.msft.png" alt-text="Show CSS files only." lightbox="../media/network-glitch-network-filter-file-type-css.msft.png":::

1. To also display scripts, press and hold `Control` (Windows, Linux) or `Command` (macOS), and then click **JS**.

   :::image type="content" source="../media/network-glitch-network-filter-file-type-css-js.msft.png" alt-text="Show CSS and JS files only." lightbox="../media/network-glitch-network-filter-file-type-css-js.msft.png":::

1. To remove the filters and display all resources again, select **All**.

For other filtering workflows, see [Filter requests](./reference.md#filter-requests).


<!-- ====================================================================== -->
## Block requests

How does a page look and behave when some of the page resources aren't available?  Does it fail completely, or is it still somewhat functional?  Block requests to find out:

1. Press `Control`+`Shift`+`P` (Windows, Linux) or `Command`+`Shift`+`P` (macOS) to open the **Command Menu**.

1. Type `block`, select **Show Request Blocking**, and then press `Enter`.

   :::image type="content" source="../media/network-glitch-network-cli-block.msft.png" alt-text="Show Request Blocking." lightbox="../media/network-glitch-network-cli-block.msft.png":::

1. Click **Add Pattern** (![Add Pattern.](../media/add-icon.msft.png)).

1. Type `main.css`.

   :::image type="content" source="../media/network-glitch-network-cli-block-add-pattern.msft.png" alt-text="Blocking 'main.css'." lightbox="../media/network-glitch-network-cli-block-add-pattern.msft.png":::

1. Click **Add**.

1. Refresh the page.  As expected, the styling of the page is slightly messed up, because the main stylesheet has been blocked.

   In the `main.css` row in the Network Log, the red text means that the resource was blocked.

   :::image type="content" source="../media/network-glitch-network-cli-block-main-css.msft.png" alt-text="main.css has been blocked." lightbox="../media/network-glitch-network-cli-block-main-css.msft.png":::

1. Clear the **Enable request blocking** checkbox.


<!-- ====================================================================== -->
## Conclusion

Congratulations, you have completed the tutorial!  You now know how to use the **Network** tool in Microsoft Edge DevTools.

To discover more DevTools features related to inspecting network activity, see [Network features reference](./reference.md).


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/network/index) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools \& Lighthouse).

[![Creative Commons License.](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
