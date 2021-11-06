---
description: A comprehensive reference of Microsoft Edge DevTools Network panel features.
title: Network Analysis reference
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/19/2021
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
# Network Analysis reference

Discover new ways to analyze how your page loads in this comprehensive reference of Microsoft Edge DevTools network analysis features.


<!-- ====================================================================== -->
## Record network requests

By default, DevTools record all network requests in the **Network** tool, so long as DevTools is open.

:::image type="complex" source="../media/network-network-panel.msft.png" alt-text="The Network panel" lightbox="../media/network-network-panel.msft.png":::
   The **Network** tool
:::image-end:::

### Stop recording network requests

To stop recording requests, complete the following steps.

1.  On the **Network** tool, choose **Stop recording network log** (![Stop recording network log](../media/record-on-icon.msft.png)).  It turns grey to indicate that DevTools is no longer recording requests.
1.  Select `Control`+`E` (Windows, Linux) or `Command`+`E` (macOS) while the **Network** tool is in focus.

### Clear requests

Choose **Clear** (![Clear](../media/clear-requests-icon.msft.png)) on the **Network** tool to clear all requests from the Requests table.

:::image type="complex" source="../media/network-network-clear-button.msft.png" alt-text="The Clear button" lightbox="../media/network-network-clear-button.msft.png":::
   The **Clear** button
:::image-end:::

### Save requests across page loads

To save requests across page loads, on the **Network** tool, turn on the **Preserve log** checkbox.  DevTools saves all requests until you disable **Preserve log**.

:::image type="complex" source="../media/network-network-preserve-log.msft.png" alt-text="The Preserve Log checkbox" lightbox="../media/network-network-preserve-log.msft.png":::
   The **Preserve Log** checkbox
:::image-end:::

### Capture screenshots during page load

Capture screenshots to analyze what displays for users while waiting for your page to load.

To enable screenshots, choose **Network settings**, and on the **Network** tool, turn on the **Capture screenshots** checkbox.

:::image type="complex" source="../media/network-network-screenshot-box.msft.png" alt-text="Enable Capture screenshots" lightbox="../media/network-network-screenshot-box.msft.png":::
   Enable **Capture screenshots**
:::image-end:::

Refresh the page while the **Network** tool is in focus to capture screenshots.

After capturing a screenshot, you interact with it in the following ways.

*   Hover on a screenshot to display the point at which that screenshot was captured.  A yellow line is displayed on the **Overview** pane.
*   Choose the thumbnail of a screen to filter out any requests that occurred after the screenshot was captured.
*   Double-click a thumbnail to zoom into it.

:::image type="complex" source="../media/network-network-screenshot-hover.msft.png" alt-text="Hover on a screenshot" lightbox="../media/network-network-screenshot-hover.msft.png":::
   Hover on a screenshot
:::image-end:::

<!--  ### Replay XHR request  -->

<!--  To replay an XHR request, hover on the request in the Requests table, open the contextual menu (right-click), and choose **Replay XHR**.  -->

<!--
:::image type="complex" source="../media/network-replay-xhr.msft.png" alt-text="Choose Replay XHR" lightbox="../media/network-replay-xhr.msft.png":::
   Choose Replay XHR
:::image-end:::
-->


<!-- ====================================================================== -->
## Change loading behavior

### Emulate a first-time visitor by disabling the browser cache

To emulate how a first-time user experiences your site, turn on the **Disable cache** checkbox.  DevTools disables the browser cache.  This feature more accurately emulates a first-time user's experience, because requests are served from the browser cache on repeat visits.

:::image type="complex" source="../media/network-network-disable-cache-checkbox.msft.png" alt-text="The Disable Cache checkbox" lightbox="../media/network-network-disable-cache-checkbox.msft.png":::
   The **Disable Cache** checkbox
:::image-end:::

#### Disable the browser cache from the Network Conditions drawer

If you want to disable the cache while working in other DevTools panels, use the Network Conditions drawer.

1.  Open the **Network Conditions** drawer.
1.  Turn on (or off) the **Disable cache** checkbox.

<!--todo: add network condition section when available -->

### Manually clear the browser cache

To manually clear the browser cache at any time, open the contextual menu (right-click) anywhere in the Requests table and choose **Clear Browser Cache**.

:::image type="complex" source="../media/network-network-clear-browser-cache.msft.png" alt-text="Choose Clear Browser Cache" lightbox="../media/network-network-clear-browser-cache.msft.png":::
   Choose **Clear Browser Cache**
:::image-end:::

### Emulate offline

A new class of web apps, named [Progressive Web Apps](../progressive-web-apps/index.md), functions offline with the help of **service workers**.<!-- [service workers](/web/fundamentals/getting-started/primers/service-workers) --> You may find it useful to quickly simulate a device that has no data connection when you are building this type of app.

Choose the **No throttling** dropdown menu, search under **Presets**, and choose **Offline** to simulate an offline network experience.

:::image type="complex" source="../media/network-network-offline-dropdown.msft.png" alt-text="The Offline dropdown menu" lightbox="../media/network-network-offline-dropdown.msft.png":::
   The **Offline** dropdown menu
:::image-end:::

### Emulate slow network connections

Emulate Slow 3G, Fast 3G, and other connection speeds from the **No throttling** dropdown menu.

:::image type="complex" source="../media/network-network-throttling-menu.msft.png" alt-text="The Throttling dropdown menu" lightbox="../media/network-network-throttling-menu.msft.png":::
   The **Throttling** dropdown menu
:::image-end:::

You may choose from different presets, such as Slow 3G or Fast 3G.  To add your own custom presets, open the Throttling menu, and choose **Custom** > **Add**.

DevTools displays a warning icon next to the **Network** tool to remind you that throttling is enabled.

#### Emulate slow network connections from the Network Conditions drawer

If you want to throttle the network connection while working in other DevTools panels, use the Network Conditions drawer.

1.  Open the **Network Conditions** drawer.
1.  Choose your connection speed from the **Throttling** menu.

<!--todo: add network condition section when available -->

### Manually clear browser cookies

To manually clear browser cookies at any time, hover anywhere in the Requests table, open the contextual menu (right-click), and choose **Clear Browser Cookies**.

:::image type="complex" source="../media/network-network-clear-browser-cookies.msft.png" alt-text="Choose Clear Browser Cookies" lightbox="../media/network-network-clear-browser-cookies.msft.png":::
   Choose **Clear Browser Cookies**
:::image-end:::

### Override the user agent

To manually override the user agent, use the following steps.

1.  Open the **Network Conditions** drawer.
1.  Clear the **Select automatically** checkbox.
1.  Choose a user agent option from the menu, or enter a custom user agent in the text box.


<!-- ====================================================================== -->
## Set user agent client hints

If your site employs [user agent client hints](../../web-platform/user-agent-guidance.md), use the **Network conditions** panel to provide different user agent client hints.

1. Open the **contextual menu** (right-click), and choose **Inspect**.
1. Choose **Network** > **Network conditions**.
1. In the User agent panel clear the **Use browser default** checkbox, then choose **User agent client hints**.

    :::image type="complex" source="images/network-conditions-user-agent-client-hints.msft.png" alt-text="Set user agent client hints" lightbox="images/network-conditions-user-agent-client-hints.msft.png":::
        Set user agent client hints
    :::image-end:::

1. Accept the default value of **Custom...** or choose a pre-defined browser and device from the drop-down list.
1. For either choice, set User agent client hints as follows.
    * **Brand** and **Version** such as *Edge* and *92*. Choose **+ Add Brand** to add multiple brand and version pairs.
    * **Full Browser Version** such as *92.0.1111.0*.
    * **Platform** and **Version** such as *Windows* and *10.0*.
    * **Architecture** such as *x86*.
    * **Device model** such as *Galaxy Nexus*.

    > [!NOTE]
    > Set or change any of the user agent client hints. There are no required values.

1. Select **Update**.
1. To verify changes, choose **Console** and type `navigator.userAgentData`. Expand the results as needed to view changes to user agent data.

You may also set user agent client hints in [Emulate mobile devices in Microsoft Edge](../device-mode/index.md).


<!-- ====================================================================== -->
## Filter requests

### Filter requests by properties

Use the **Filter** text box to filter requests by properties, such as the domain or size of the request.

If the text box is not displayed, the **Filters** pane is probably hidden.
For more information, navigate to [Hide the Filters pane](#hide-the-filters-pane).

:::image type="complex" source="../media/network-network-filters-textbox.msft.png" alt-text="The Filter text box" lightbox="../media/network-network-filters-textbox.msft.png":::
   The **Filter** text box
:::image-end:::

You may use multiple properties simultaneously by separating each property with a space.  For example, `mime-type:image/png larger-than:1K` displays all PNGs that are larger than 1 kilobyte.  The multi-property filters are equivalent to `AND` operations.  `OR` operations are currently not supported.

The complete list of supported properties.

| Property | Details |
|:--- | :--- |
| `domain` | Only display resources from the specified domain.  You may use a wildcard character (`*`) to include multiple domains.  For example, `*.com` displays resources from all domain names ending in `.com`.  DevTools populate the autocomplete dropdown menu with all of the domains that are found. |
| `has-response-header` | Displays the resources that contain the specified HTTP response header.  DevTools populate the autocomplete dropdown with all of the response headers that are found. |
| `is` | Use `is:running` to find `WebSocket` resources. |
| `larger-than` | Displays resources that are larger than the specified size, in bytes.  Setting a value of `1000` is equivalent to setting a value of `1k`. |
| `method` | Displays resources that were retrieved over a specified HTTP method type.  DevTools populate the dropdown with all of the HTTP methods  that are found. |
| `mime-type` | Displays resources of a specified MIME type.  DevTools populate the dropdown with all MIME types  that are found. |
| `mixed-content` | Show all mixed content resources (`mixed-content:all`) or just the ones that are currently displayed (`mixed-content:displayed`). |
| `scheme` | Displays resources retrieved over unprotected HTTP (`scheme:http`) or protected HTTPS (`scheme:https`). |
| `set-cookie-domain` | Displays resources that have a `Set-Cookie` header with a `Domain` attribute that matches the specified value.  DevTools populate the autocomplete with all of the cookie domains that are found. |
| `set-cookie-name` | Displays resources that have a `Set-Cookie` header with a name that matches the specified value.  DevTools populate the autocomplete with all of the cookie names that are found. |
| `set-cookie-value` | Displays resources that have a `Set-Cookie` header with a value that matches the specified value.  DevTools populate the autocomplete with all of the cookie values that are found. |
| `status-code` | Displays resources that match the specific HTTP status code.  DevTools populates the autocomplete dropdown menu with all of the status codes that are found. |

### Filter requests by type

To filter requests by request type, choose the one of the following buttons on the **Network** tool.

:::row:::
   :::column span="1":::
      **XHR**
   :::column-end:::
   :::column span="2":::
      &nbsp;
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **JS**
   :::column-end:::
   :::column span="2":::
      &nbsp;
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **CSS**
   :::column-end:::
   :::column span="2":::
      &nbsp;
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Img**
   :::column-end:::
   :::column span="2":::
      &nbsp;
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Media**
   :::column-end:::
   :::column span="2":::
      &nbsp;
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Font**
   :::column-end:::
   :::column span="2":::
      &nbsp;
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Doc**
   :::column-end:::
   :::column span="2":::
      &nbsp;
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **WS**
   :::column-end:::
   :::column span="2":::
      WebSocket.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Manifest**
   :::column-end:::
   :::column span="2":::
      &nbsp;
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Other**
   :::column-end:::
   :::column span="2":::
      Any other type not listed.
   :::column-end:::
:::row-end:::

If the buttons do not display, the **Filters** pane may be hidden.
For more information, navigate to [Hide the Filters pane](#hide-the-filters-pane).

To enable multiple type filters simultaneously, hold `Control` (Windows, Linux) or `Command` (macOS) and then choose.

:::image type="complex" source="../media/network-network-type-filters.msft.png" alt-text="Use the Type filters to display JS, CSS, and Document resources" lightbox="../media/network-network-type-filters.msft.png":::
   Use the Type filters to display JS, CSS, and Document resources
:::image-end:::

### Filter requests by time

Choose and drag left or right on the **Overview** pane to only display requests that were active during that time frame.  The filter is inclusive.  Any request that was active during the highlighted time is shown.

:::image type="complex" source="../media/network-network-overview-filter.msft.png" alt-text="Filter out any requests that were inactive around 300 ms" lightbox="../media/network-network-overview-filter.msft.png":::
   Filter out any requests that were inactive around 300 ms
:::image-end:::

### Hide data URLs

[Data URLs](https://developer.mozilla.org/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) are small files embedded into other documents.  Any request that displays in the Requests table that starts with `data:` is a data URL.

To hide the requests, turn off the **Hide data URLs** checkbox.

:::image type="complex" source="../media/network-network-hide-data-urls.msft.png" alt-text="The Hide Data URLs checkbox" lightbox="../media/network-network-hide-data-urls.msft.png":::
   The **Hide Data URLs** checkbox
:::image-end:::


<!-- ====================================================================== -->
## Sort requests

By default, the requests in the Requests table are sorted by initiation time, but you may sort the table using other criteria.

### Sort by column

Choose the header of any column in the Requests to sort requests by that column.

### Sort by activity phase

To change how the Waterfall sorts requests, hover on the header of the Requests table, open the contextual menu (right-click), hover on **Waterfall**, and choose one of the following options.

:::row:::
   :::column span="1":::
      **Start Time**
   :::column-end:::
   :::column span="2":::
      The first request that was initiated is at the top.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Response Time**
   :::column-end:::
   :::column span="2":::
      The first request that started downloading is at the top.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **End Time**
   :::column-end:::
   :::column span="2":::
      The first request that finished is at the top.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Total Duration**
   :::column-end:::
   :::column span="2":::
      The request with the shortest connection settings and request or response is at the top.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Latency**
   :::column-end:::
   :::column span="2":::
      The request that waited the shortest time for a response is at the top.
   :::column-end:::
:::row-end:::

These descriptions assume that each respective option is ranked from shortest to longest.  Choose the header of the **Waterfall** column to reverse the order.

:::image type="complex" source="../media/network-network-waterfall-total-duration.msft.png" alt-text="Sort the Waterfall by total duration" lightbox="../media/network-network-waterfall-total-duration.msft.png":::
   Sort the Waterfall by total duration  (The lighter portion of each bar is time spent waiting and the darker portion is time spent downloading bytes)
:::image-end:::


<!-- ====================================================================== -->
## Analyze requests

So long as DevTools are open, it logs all requests in the **Network** tool.
Use the Network panel to analyze requests.

### Display a log of requests

Use the Requests table to display a log of all requests made while DevTools have been open.  To reveal more information about each item, choose or hover on requests.

:::image type="complex" source="../media/network-network-requests-table.msft.png" alt-text="The Requests table" lightbox="../media/network-network-requests-table.msft.png":::
   The Requests table
:::image-end:::

The Requests table displays the following columns by default.

:::row:::
   :::column span="1":::
      **Name**
   :::column-end:::
   :::column span="2":::
      The filename of, or an identifier for, the resource.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Status**
   :::column-end:::
   :::column span="2":::
      The HTTP status code.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Type**
   :::column-end:::
   :::column span="2":::
      The MIME type of the requested resource.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Initiator**
   :::column-end:::
   :::column span="2":::
      The following objects or processes initiate requests.

      *   **Parser**  The HTML parser for Microsoft Edge.
      *   **Redirect**  An HTTP redirect.
      *   **Script**  A JavaScript function.
      *   **Other**  Some other process or action, such as navigating to a page using a link or entering a URL in the address bar.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Size**
   :::column-end:::
   :::column span="2":::
      The combined size of the response headers plus the response body, as delivered by the server.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Time**
   :::column-end:::
   :::column span="2":::
      The total duration, from the start of the request to the receipt of the final byte in the response.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      [Waterfall](#display-the-timing-relationship-of-requests)
   :::column-end:::
   :::column span="2":::
      A visual breakdown of the activity for each request.
   :::column-end:::
:::row-end:::

#### Add or remove columns

Hover on the header of the Requests table, open the contextual menu (right-click), and choose an option to hide or show it.  Currently displayed options have checkmarks next to each item.

:::image type="complex" source="../media/network-network-requests-add-column.msft.png" alt-text="Add a column to the Requests table" lightbox="../media/network-network-requests-add-column.msft.png":::
   Add a column to the Requests table
:::image-end:::

#### Add custom columns

To add a custom column to the Requests table, hover on the header of the Requests table, open the contextual menu (right-click), and choose **Response Headers** > **Manage Header Columns**.

:::image type="complex" source="../media/network-network-requests-add-custom.msft.png" alt-text="Add a custom column to the Requests table" lightbox="../media/network-network-requests-add-custom.msft.png":::
   Add a custom column to the Requests table
:::image-end:::

### Display the timing relationship of requests

Use the Waterfall to display the timing relationships of requests.
The default organization of the Waterfall uses the start time of the requests.
So, requests that are farther to the left started earlier than the requests that are farther to the right.

To review the different ways that you may sort the Waterfall, navigate to [Sort by activity phase](#sort-by-activity-phase).

:::image type="complex" source="../media/network-network-requests-waterfall.msft.png" alt-text="The Waterfall column of the Requests pane" lightbox="../media/network-network-requests-waterfall.msft.png":::
   The Waterfall column of the **Requests** pane
:::image-end:::

<!-- ### Analyze the frames of a WebSocket Connection  -->

<!--To review the frames of a WebSocket connection, use the following steps.

1.  Choose the URL of the WebSocket connection, under the **Name** column of the Requests table.
1.  Choose the **Frames** panel.  The table shows the last 100 frames.

To refresh the table, re-choose the name of the WebSocket connection under the **Name** column of the Requests table.  -->

<!--
:::image type="complex" source="../media/network-frames.msft.png" alt-text="The Frames panel" lightbox="../media/network-frames.msft.png":::
   The **Frames** panel
:::image-end:::
-->

<!--The table contains the following three columns.

*   **Data**.  The message payload.  If the message is plain text, it is displayed here.  For binary opcodes, this column displays the name and code of the opcode.  The following opcodes are supported: Continuation Frame, Binary Frame, Connection Close Frame, Ping Frame, and Pong Frame.
*   **Length**.  The length of the message payload, in bytes.
*   **Time**.  The time when the message was received or sent.  -->

<!--Messages are color-coded according to each type.

*   Outgoing text messages are light-green.
*   Incoming text messages are white.
*   WebSocket opcodes are light-yellow.
*   Errors are light-red.  -->

### Display a preview of a response body

To display a preview of a response body, use the following steps.

1.  Choose the URL of the request, under the **Name** column of the Requests table.
1.  Choose the **Preview** panel.

The Preview tab is mostly useful to display images.

:::image type="complex" source="../media/network-network-resources-preview.msft.png" alt-text="The Preview panel" lightbox="../media/network-network-resources-preview.msft.png":::
   The **Preview** panel
:::image-end:::

### Display a response body

To display the response body to a request, use the following steps.

1.  Choose the URL of the request, under the **Name** column of the Requests table.
1.  Choose the **Response** panel.

:::image type="complex" source="../media/network-network-resources-response.msft.png" alt-text="The Response panel" lightbox="../media/network-network-resources-response.msft.png":::
   The **Response** panel
:::image-end:::

### Display HTTP headers

To display HTTP header data about a request, use the following steps.

1.  Choose the URL of the request, under the **Name** column of the Requests table.
1.  Choose the **Headers** panel.

:::image type="complex" source="../media/network-resources-headers.msft.png" alt-text="The Headers panel" lightbox="../media/network-resources-headers.msft.png":::
   The **Headers** panel
:::image-end:::

#### Display HTTP header source

By default, the **Headers** panel shows header names alphabetically.  To display the HTTP header names in the order received, use the following steps.

1.  Open the **Headers** panel for the request that interests you.  For more information, navigate to [Display HTTP headers](#display-http-headers).
1.  Choose **view source**, next to the **Request Header** or **Response Header** section.

### Display query string parameters

To display the query string parameters of a URL in a human-readable format, use the following steps.

1.  Open the **Headers** panel for the request that interests you.  For more information, navigate to [Display HTTP headers](#display-http-headers).
1.  Navigate to the **Query String Parameters** section.

:::image type="complex" source="../media/network-network-resources-headers-query-string-parameters.msft.png" alt-text="The Query String Parameters section" lightbox="../media/network-network-resources-headers-query-string-parameters.msft.png":::
   The **Query String Parameters** section
:::image-end:::

#### Display query string parameters source

To display the query string parameter source of a request, use the following steps.

1.  Navigate to the Query String Parameters section.  For more information, navigate to [Display query string parameters](#display-query-string-parameters).
1.  Choose **view source**.

#### Display URL-encoded query string parameters

To display query string parameters in a human-readable format, but with encodings preserved, use the following steps.

1.  Navigate to the Query String Parameters section.  For more information, navigate to [Display query string parameters](#display-query-string-parameters).
1.  Choose **view URL encoded**.

### Display cookies

To display the cookies sent in the HTTP header of a request, use the following steps.

1.  Choose the URL of the request, under the **Name** column of the Requests table.
1.  Choose the **Cookies** panel.

<!--For more information about each of the columns, navigate to [Fields](manage-data/cookies#fields).  TODO: add link when section is available -->

:::image type="complex" source="../media/network-network-resources-cookies.msft.png" alt-text="The Cookies panel" lightbox="../media/network-network-resources-cookies.msft.png":::
   The Cookies panel
:::image-end:::

### Display the timing breakdown of a request

To display the timing breakdown of a request, use the following steps.

1.  Choose the URL of the request, under the **Name** column of the Requests table.
1.  Choose the **Timing** panel.

For a faster way to access the data, navigate to [Preview a timing breakdown](#preview-a-timing-breakdown).

For more information about each of the phases that may be displayed in the **Timing** panel, navigate to [Timing breakdown phases explained](#timing-breakdown-phases-explained).

:::image type="complex" source="../media/network-network-resources-timing.msft.png" alt-text="The Timing panel" lightbox="../media/network-network-resources-timing.msft.png":::
   The **Timing** panel
:::image-end:::

More information about each of the phases.

For more information about accessing the display, navigate to [Display timing breakdown](#display-the-timing-breakdown-of-a-request).

#### Preview a timing breakdown

To display a preview of the timing breakdown of a request, in the **Waterfall** column of the Requests table, hover on the entry for the request.

For more information about how to access the data without hovering, navigate to [Display the timing breakdown of a request](#display-the-timing-breakdown-of-a-request).

:::image type="complex" source="../media/network-network-resources-waterfall-hover.msft.png" alt-text="> Preview the timing breakdown of a request" lightbox="../media/network-network-resources-waterfall-hover.msft.png":::
   Preview the timing breakdown of a request
:::image-end:::

#### Timing breakdown phases explained

More information about each of the phases that may display in the **Timing** panel.

:::row:::
   :::column span="1":::
      **Queueing**
   :::column-end:::
   :::column span="2":::
      The browser queues requests when any of the following are true.

      *   Higher priority requests exist.
      *   Six TCP connections are open for the same origin, which is the limit.  Applies to HTTP/1.0 and HTTP/1.1 only.
      *   The browser is briefly allocating space in the disk cache.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Stalled**
   :::column-end:::
   :::column span="2":::
      The request is stalled for any of the reasons described in **Queueing**.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **DNS Lookup**
   :::column-end:::
   :::column span="2":::
      The browser is resolving the IP address for the request.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Initial connection**
   :::column-end:::
   :::column span="2":::
      The browser establishes a connection including TCP handshakes, TCP retries, and negotiates a Secure Socket Layer.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Proxy negotiation**
   :::column-end:::
   :::column span="2":::
      The browser is negotiating the request with a [proxy server](https://en.wikipedia.org/wiki/Proxy_server).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Request sent**
   :::column-end:::
   :::column span="2":::
      The request is being sent.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **ServiceWorker Preparation**
   :::column-end:::
   :::column span="2":::
      The browser is starting the service worker.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Request to ServiceWorker**
   :::column-end:::
   :::column span="2":::
      The request is being sent to the service worker.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Waiting (TTFB)**
   :::column-end:::
   :::column span="2":::
      The browser is waiting for the first byte of a response.  TTFB stands for Time To First Byte.  This timing includes one round trip of latency and the time the server took to prepare the response.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Content Download**
   :::column-end:::
   :::column span="2":::
      The browser is receiving the response.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Receiving Push**
   :::column-end:::
   :::column span="2":::
      The browser is receiving data for this response via HTTP/2 Server Push.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Reading Push**
   :::column-end:::
   :::column span="2":::
      The browser is reading the local data previously received.
   :::column-end:::
:::row-end:::

### Display initiators and dependencies

To display the initiators and dependencies of a request, hold `Shift`and hover on the request in the Requests table.  DevTools colors: initiators are shown in green and dependencies are shown in red.

:::image type="complex" source="../media/network-network-resources-initiators-dependencies.msft.png" alt-text="Display the initiators and dependencies of a request" lightbox="../media/network-network-resources-initiators-dependencies.msft.png":::
   Display the initiators and dependencies of a request
:::image-end:::

When the Requests table is ordered chronologically, if you hover on a line, the line preceding it displays a green request.  The green request is the initiator of the dependency.  If another green request is displayed on the line before that, that higher request is the initiator of the initiator.  And so on.

### Display load events

DevTools displays the timing of the `DOMContentLoaded` and `load` events in multiple places on the **Network** tool.  The `DOMContentLoaded` event is colored blue, and the `load` event is red.

:::image type="complex" source="../media/network-network-requests-load-events.msft.png" alt-text="The locations of the DOMContentLoaded and load events on the Network panel" lightbox="../media/network-network-requests-load-events.msft.png":::
   The locations of the `DOMContentLoaded` and `load` events on the **Network** tool
:::image-end:::

### Display the total number of requests

The total number of requests is listed in the **Summary** pane, at the bottom of the **Network** tool.

> [!CAUTION]
> This number only tracks requests that have been logged since DevTools was opened.  If other requests occurred before DevTools was opened, those requests are not counted.

:::image type="complex" source="../media/network-network-total-requests.msft.png" alt-text="The total number of requests since DevTools were opened" lightbox="../media/network-network-total-requests.msft.png":::
   The total number of requests since DevTools were opened
:::image-end:::

### Display the total download size

The total download size of requests is listed in the **Summary** pane, at the bottom of the **Network** tool.

> [!CAUTION]
> This number only tracks requests that have been logged since DevTools was opened.  If other requests occurred before DevTools was opened, the previous requests are not counted.

:::image type="complex" source="../media/network-network-total-download-size.msft.png" alt-text="The total download size of requests" lightbox="../media/network-network-total-download-size.msft.png":::
   The total download size of requests
:::image-end:::

To verify how large resources are after the browser uncompresses each item, navigate to [display the uncompressed size of a resource](#display-the-uncompressed-size-of-a-resource).

### Display the stack trace that caused a request

After a JavaScript statement requests a resource, hover on the **Initiator** column to display the stack trace leading up to the request.

<!-- [codepen.io/contoso/pen/yLBrOWa?editors=0010#0](https://codepen.io/contoso/pen/yLBrOWa?editors=0010#0) -->

<!--
```javascript
function init() {
  getData();
}

function getData() {
  fetch('https:/httpbin.org/get?message=hi');
}

init();
```
-->

:::image type="complex" source="../media/network-network-requests-initiator-stack.msft.png" alt-text="The stack trace leading up to a resource request" lightbox="../media/network-network-requests-initiator-stack.msft.png":::
   The stack trace leading up to a resource request
:::image-end:::

### Display the uncompressed size of a resource

Turn on the **Use large request rows** checkbox and then review the bottom value of the **Size** column.

:::image type="complex" source="../media/network-network-requests-uncompressed-compare.msft.png" alt-text="An example of uncompressed resources" lightbox="../media/network-network-requests-uncompressed-compare.msft.png":::
   An example of uncompressed resources  (The compressed size of the `jquery-3.3.1.min.js` file that was sent over the network was `29.9 KB`, whereas the uncompressed size was `84.9 KB`)
:::image-end:::


<!-- ====================================================================== -->
## Export requests data

### Save all network requests to a HAR file

To save all network requests to a HAR file, complete the following steps.

1.  Hover on any request in the Requests table and open the contextual menu (right-click).
1.  Choose **Save as HAR with Content**.  DevTools saves all requests that have occurred since you opened DevTools to the HAR file.  You are not able to filter requests.  You are also not able to save a single request.

Once you save a HAR file, you may import it back into DevTools for analysis.  Just drag-and-drop the HAR file into the Requests table.
<!--For more information, see also [HAR Analyzer](https://toolbox.alphabetapps.com/apps/har_analyzer)  Todo: add section link when content is available  -->

:::image type="complex" source="../media/network-network-requests-save-har-content.msft.png" alt-text="Choose Save as HAR with Content" lightbox="../media/network-network-requests-save-har-content.msft.png":::
   Choose **Save as HAR with Content**
:::image-end:::

### Copy one or more requests to the clipboard

Under the **Name** column of the Requests table, hover on a request, open the contextual menu (right-click), hover on **Copy**, and choose one of the following options.

| Name | Details |
|:--- |:--- |
| **Copy Link Address** | Copy the URL of the request to the clipboard. |
| **Copy Response** | Copy the response body to the clipboard. |
| **Copy as Fetch** | &nbsp; |
| **Copy as cURL** | Copy the request as a cURL command. |
| **Copy All as Fetch** | &nbsp; |
| **Copy All as cURL** | Copy all requests as a chain of cURL commands. |
| **Copy All as HAR** | Copy all requests as HAR data. |

<!--
:::row:::
   :::column span="1":::
      **Copy Link Address**
   :::column-end:::
   :::column span="2":::
      Copy the URL of the request to the clipboard.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Copy Response**
   :::column-end:::
   :::column span="2":::
      Copy the response body to the clipboard.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Copy as Fetch**
   :::column-end:::
   :::column span="2":::
      &nbsp;
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Copy as cURL**
   :::column-end:::
   :::column span="2":::
      Copy the request as a cURL command.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Copy All as Fetch**
   :::column-end:::
   :::column span="2":::
      &nbsp;
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Copy All as cURL**
   :::column-end:::
   :::column span="2":::
      Copy all requests as a chain of cURL commands.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Copy All as HAR**
   :::column-end:::
   :::column span="2":::
      Copy all requests as HAR data.
   :::column-end:::
:::row-end:::
-->

:::image type="complex" source="../media/network-network-requests-copy-response.msft.png" alt-text="Choose Copy Response" lightbox="../media/network-network-requests-copy-response.msft.png":::
   Choose **Copy Response**
:::image-end:::

### Copy formatted response JSON to the clipboard

Choose a network request and navigate to the **Headers** pane.  To copy the JSON value of a response, navigate to **Request payload**, hover on the JSON response content, open the contextual menu (right-click), and choose **Copy Value**.

:::row:::
   :::column span="":::
        :::image type="complex" source="../media/network-header-copy-property-value.msft.png" alt-text="Copy Value in contextual menu" lightbox="../media/network-header-copy-property-value.msft.png":::
          **Copy Value** in contextual menu
        :::image-end:::
   :::column-end:::
   :::column span="":::
        :::image type="complex" source="../media/network-header-paste-property-value.msft.png" alt-text="Microsoft Visual Studio Code with formatted response JSON" lightbox="../media/network-header-paste-property-value.msft.png":::
          Pasting formatted response JSON in Microsoft Visual Studio Code
        :::image-end:::
   :::column-end:::
:::row-end:::

### Copy property values from network requests to your clipboard

To copy property values from network requests to your clipboard, complete the following actions.

1.  Open the **Headers** pane.
1.  Open one of the following header sections.
    *   Request payload (JSON)
    *   Form Data
    *   Query String Parameters
    *   Request Headers
    *   Response Headers
1.  Open the contextual menu (right-click) > **Copy value**.  You may now paste the value into any editor to review it.


<!-- ====================================================================== -->
## Change the layout of the Network panel

You may expand or collapse sections of the **Network** tool UI to focus important information.

### Hide the Filters pane

By default, DevTools show the **Filters** pane.
Choose **Filter** (![Filter](../media/filter-icon.msft.png)) to hide it.

:::image type="complex" source="../media/network-network-resources-hide-filters-button.msft.png" alt-text="The Hide Filters button" lightbox="../media/network-network-resources-hide-filters-button.msft.png":::
   The Hide Filters button
:::image-end:::

### Use large request rows

Use large rows when you want more whitespace in your network requests table.  Some columns also provide a little more information when using large rows.  For example, the bottom value of the **Size** column is the uncompressed size of a request.

To enable large rows, turn on the **Use large request rows** checkbox.

:::image type="complex" source="../media/network-network-requests-large-request-rows.msft.png" alt-text="An example of large request rows in the Requests pane" lightbox="../media/network-network-requests-large-request-rows.msft.png":::
   An example of large request rows in the **Requests** pane
:::image-end:::

### Hide the Overview pane

By default, DevTools displays the **Overview** pane.  To hide it, turn off the **Show Overview** checkbox.

:::image type="complex" source="../media/network-network-requests-show-overview-off.msft.png" alt-text="The Show Overview checkbox" lightbox="../media/network-network-requests-show-overview-off.msft.png":::
   The **Show Overview** checkbox
:::image-end:::


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/network/reference) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools \& Lighthouse).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
