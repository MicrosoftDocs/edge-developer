---
description: A comprehensive reference of Microsoft Edge DevTools Network panel features.
title: Network Analysis reference
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 10/19/2020 
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

<!--
> [!NOTE]
> This reference is based on Microsoft Edge 58.  If you use another version of Microsoft Edge, the UI, and features of DevTools may be different.  To verify which version of Microsoft Edge you are running, navigate to `edge://help`.  
-->

## Record network requests  

By default, DevTools record all network requests in the Network panel, so long as DevTools is open.  

:::image type="complex" source="../media/network-network-panel.msft.png" alt-text="The Network panel" lightbox="../media/network-network-panel.msft.png":::
   The **Network** panel  
:::image-end:::  

### Stop recording network requests  

To stop recording requests, complete the following steps.  

1.  Choose **Stop recording network log** ![Stop recording network log][ImageRecordOnIcon] on the **Network** panel.  It turns grey to indicate that DevTools is no longer recording requests.  
1.  Select `Control`+`E` \(Windows, Linux\) or `Command`+`E` \(macOS\) while the **Network** panel is in focus.  

### Clear requests  

Choose **Clear** \(![Clear][ImageClearIcon]\) on the Network panel to clear all requests from the Requests table.  

:::image type="complex" source="../media/network-network-clear-button.msft.png" alt-text="The Clear button" lightbox="../media/network-network-clear-button.msft.png":::
   The **Clear** button  
:::image-end:::  

### Save requests across page loads  

To save requests across page loads, check the **Preserve log** checkbox on the Network panel.  DevTools saves all requests until you disable **Preserve log**.  

:::image type="complex" source="../media/network-network-preserve-log.msft.png" alt-text="The Preserve Log checkbox" lightbox="../media/network-network-preserve-log.msft.png":::
   The **Preserve Log** checkbox  
:::image-end:::  

### Capture screenshots during page load  

Capture screenshots to analyze what displays for users while waiting for your page to load.  

To enable screenshots, choose **Network settings** and choose **Capture screenshots** checkbox on the **Network** panel.  

Refresh the page while the **Network** panel is in focus to capture screenshots.  

After capturing a screenshot, you interact with it in the following ways.  

*   Hover over a screenshot to view the point at which that screenshot was captured.  A yellow line is displayed on the **Overview** pane.  
*   Select the thumbnail of a screen to filter out any requests that occurred after the screenshot was captured.  
*   Double-click a thumbnail to zoom into it.  

:::image type="complex" source="../media/network-network-screenshot-hover.msft.png" alt-text="Hovering over a screenshot" lightbox="../media/network-network-screenshot-hover.msft.png":::
   Hovering over a screenshot  
:::image-end:::  

<!--  ### Replay XHR request  -->

<!--  To replay an XHR request, hover on the request in the Requests table, open the contextual menu \(right-click\), and choose **Replay XHR**.  -->

<!--  
:::image type="complex" source="../media/network-replay-xhr.msft.png" alt-text="Selecting Replay XHR" lightbox="../media/network-replay-xhr.msft.png":::
   Selecting Replay XHR  
:::image-end:::  
-->  

## Change loading behavior  

### Emulate a first-time visitor by disabling the browser cache  

To emulate how a first-time user experiences your site, check the **Disable cache** checkbox.  DevTools disables the browser cache.  This feature more accurately emulates a first-time user's experience, because requests are served from the browser cache on repeat visits.  

:::image type="complex" source="../media/network-network-disable-cache-checkbox.msft.png" alt-text="The Disable Cache checkbox" lightbox="../media/network-network-disable-cache-checkbox.msft.png":::
   The **Disable Cache** checkbox  
:::image-end:::  

#### Disable the browser cache from the Network Conditions drawer  

If you want to disable the cache while working in other DevTools panels, use the Network Conditions drawer.  

1.  Open the **Network Conditions** drawer.  
1.  Check or uncheck the **Disable cache** checkbox.  

<!--todo: add network condition section when available -->  

### Manually clear the browser cache  

To manually clear the browser cache at any time, open the contextual menu \(right-click\) anywhere in the Requests table and choose **Clear Browser Cache**.  

:::image type="complex" source="../media/network-network-clear-browser-cache.msft.png" alt-text="Selecting Clear Browser Cache" lightbox="../media/network-network-clear-browser-cache.msft.png":::
   Selecting **Clear Browser Cache**  
:::image-end:::  

### Emulate offline  

A new class of web apps, named [Progressive Web Apps][DevtoolsProgressiveWebApps], functions offline with the help of **service workers**.  You may find it useful to quickly simulate a device that has no data connection when you are building this type of app.  

<!--[ServiceWorkers]: /web/fundamentals/getting-started/primers/service-workers  -->

Select the **Online** dropdown menu, search under **Presets**, and choose **Offline** to simulate an offline network experience.  

:::image type="complex" source="../media/network-network-offline-dropdown.msft.png" alt-text="The Offline dropdown menu" lightbox="../media/network-network-offline-dropdown.msft.png":::
   The **Offline** dropdown menu  
:::image-end:::  

### Emulate slow network connections  

Emulate Slow 3G, Fast 3G, and other connection speeds from the **Online** dropdown menu.  

:::image type="complex" source="../media/network-network-throttling-menu.msft.png" alt-text="The Throttling dropdown menu" lightbox="../media/network-network-throttling-menu.msft.png":::
   The **Throttling** dropdown menu  
:::image-end:::  

You may select from different presets, such as Slow 3G or Fast 3G.  You may also add your own custom presets by opening the Throttling menu and selecting **Custom** > **Add**.  

DevTools displays a warning icon next to the **Network** tab to remind you that throttling is enabled.  

#### Emulate slow network connections from the Network Conditions drawer  

If you want to throttle the network connection while working in other DevTools panels, use the Network Conditions drawer.  

1.  Open the **Network Conditions** drawer.  
1.  Select your connection speed from the **Throttling** menu.  

<!--todo: add network condition section when available -->  

### Manually clear browser cookies  

To manually clear browser cookies at any time, open the contextual menu \(right-click\) anywhere in the Requests table and choose **Clear Browser Cookies**.  

:::image type="complex" source="../media/network-network-clear-browser-cookies.msft.png" alt-text="Selecting Clear Browser Cookies" lightbox="../media/network-network-clear-browser-cookies.msft.png":::
   Selecting **Clear Browser Cookies**  
:::image-end:::  

### Override the user agent  

To manually override the user agent, use the following steps.  

1.  Open the **Network Conditions** drawer.  
1.  Uncheck **Select automatically**.  
1.  Choose a user agent option from the menu, or enter a custom one in the text box.  

<!--todo: add network condition section when available -->  

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
| `domain` | Only display resources from the specified domain.  You may use a wildcard character \(`*`\) to include multiple domains.  For example, `*.com` displays resources from all domain names ending in `.com`.  DevTools populate the autocomplete dropdown menu with all of the domains that are found. |  
| `has-response-header` | Displays the resources that contain the specified HTTP response header.  DevTools populate the autocomplete dropdown with all of the response headers that are found. |  
| `is` | Use `is:running` to find `WebSocket` resources. |  
| `larger-than` | Displays resources that are larger than the specified size, in bytes.  Setting a value of `1000` is equivalent to setting a value of `1k`. |  
| `method` | Displays resources that were retrieved over a specified HTTP method type.  DevTools populate the dropdown with all of the HTTP methods  that are found. |  
| `mime-type` | Displays resources of a specified MIME type.  DevTools populate the dropdown with all MIME types  that are found. |  
| `mixed-content` | Show all mixed content resources \(`mixed-content:all`\) or just the ones that are currently displayed \(`mixed-content:displayed`\). |  
| `scheme` | Displays resources retrieved over unprotected HTTP \(`scheme:http`\) or protected HTTPS \(`scheme:https`\). |  
| `set-cookie-domain` | Displays resources that have a `Set-Cookie` header with a `Domain` attribute that matches the specified value.  DevTools populate the autocomplete with all of the cookie domains that are found. |  
| `set-cookie-name` | Displays resources that have a `Set-Cookie` header with a name that matches the specified value.  DevTools populate the autocomplete with all of the cookie names that are found. |  
| `set-cookie-value` | Displays resources that have a `Set-Cookie` header with a value that matches the specified value.  DevTools populate the autocomplete with all of the cookie values that are found. |  
| `status-code` | Displays resources that match the specific HTTP status code.  DevTools populates the autocomplete dropdown menu with all of the status codes that are found. |  

### Filter requests by type  

To filter requests by request type, select the one of the following buttons on the **Network** panel.  

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

To enable multiple type filters simultaneously, hold `Control` \(Windows, Linux\) or `Command` \(macOS\) and then select.  

:::image type="complex" source="../media/network-network-type-filters.msft.png" alt-text="Using the Type filters to display JS, CSS, and Document resources" lightbox="../media/network-network-type-filters.msft.png":::
   Using the Type filters to display JS, CSS, and Document resources  
:::image-end:::  

### Filter requests by time  

Select and drag left or right on the Overview pane to only display requests that were active during that time frame.  The filter is inclusive.  Any request that was active during the highlighted time is shown.  

:::image type="complex" source="../media/network-network-overview-filter.msft.png" alt-text="Filtering out any requests that were inactive around 300 ms" lightbox="../media/network-network-overview-filter.msft.png":::
   Filtering out any requests that were inactive around 300 ms  
:::image-end:::  

### Hide data URLs  

[Data URLs][MDNHTTPDataURIs] are small files embedded into other documents.  Any request that displays in the Requests table that starts with `data:` is a data URL.  

Check the **Hide data URLs** checkbox to hide the requests.  

:::image type="complex" source="../media/network-network-hide-data-urls.msft.png" alt-text="The Hide Data URLs checkbox" lightbox="../media/network-network-hide-data-urls.msft.png":::
   The **Hide Data URLs** checkbox  
:::image-end:::  

## Sort requests  

By default, the requests in the Requests table are sorted by initiation time, but you may sort the table using other criteria.  

### Sort by column  

Select the header of any column in the Requests to sort requests by that column.  

### Sort by activity phase  

To change how the Waterfall sorts requests, hover on the header of the Requests table, open the contextual menu \(right-click\), hover over **Waterfall**, and select one of the following options.  

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

These descriptions assume that each respective option is ranked from shortest to longest.  Selecting the header of the **Waterfall** column reverses the order.  

:::image type="complex" source="../media/network-network-waterfall-total-duration.msft.png" alt-text="Sorting the Waterfall by total duration" lightbox="../media/network-network-waterfall-total-duration.msft.png":::
   Sorting the Waterfall by total duration  \(The lighter portion of each bar is time spent waiting and the darker portion is time spent downloading bytes\)  
:::image-end:::  

## Analyze requests  

So long as DevTools are open, it logs all requests in the Network panel.  
Use the Network panel to analyze requests.  

### View a log of requests  

Use the Requests table to view a log of all requests made while DevTools have been open.  Selecting or hovering over requests reveals more information about each item.  

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
      [Waterfall](#view-the-timing-relationship-of-requests)  
   :::column-end:::
   :::column span="2":::
      A visual breakdown of the activity for each request.  
   :::column-end:::
:::row-end:::  

#### Add or remove columns  

Hover on the header of the Requests table, open the contextual menu \(right-click\), and select an option to hide or show it.  Currently displayed options have checkmarks next to each item.  

:::image type="complex" source="../media/network-network-requests-add-column.msft.png" alt-text="Adding a column to the Requests table" lightbox="../media/network-network-requests-add-column.msft.png":::
   Adding a column to the Requests table  
:::image-end:::  

#### Add custom columns  

To add a custom column to the Requests table, hover on the header of the Requests table, open the contextual menu \(right-click\), and choose **Response Headers** > **Manage Header Columns**.  

:::image type="complex" source="../media/network-network-requests-add-custom.msft.png" alt-text="Adding a custom column to the Requests table" lightbox="../media/network-network-requests-add-custom.msft.png":::
   Adding a custom column to the Requests table  
:::image-end:::  

### View the timing relationship of requests  

Use the Waterfall to view the timing relationships of requests.  
The default organization of the Waterfall uses the start time of the requests.  
So, requests that are farther to the left started earlier than the requests that are farther to the right.  

To review the different ways that you may sort the Waterfall, navigate to [Sort by activity phase](#sort-by-activity-phase).  

:::image type="complex" source="../media/network-network-requests-waterfall.msft.png" alt-text="The Waterfall column of the Requests pane" lightbox="../media/network-network-requests-waterfall.msft.png":::
   The Waterfall column of the **Requests** pane  
:::image-end:::  

<!-- ### Analyze the frames of a WebSocket Connection  -->

<!--To view the frames of a WebSocket connection, use the following steps.  

1.  Select the URL of the WebSocket connection, under the **Name** column of the Requests table.  
1.  Select the **Frames** tab.  The table shows the last 100 frames.  

To refresh the table, re-select the name of the WebSocket connection under the **Name** column of the Requests table.  -->

<!--
:::image type="complex" source="../media/network-frames.msft.png" alt-text="The Frames tab" lightbox="../media/network-frames.msft.png":::
   The **Frames** tab  
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

### View a preview of a response body  

To view a preview of a response body, use the following steps.  

1.  Select the URL of the request, under the **Name** column of the Requests table.  
1.  Select the **Preview** tab.  

This tab is mostly useful for viewing images.  

:::image type="complex" source="../media/network-network-resources-preview.msft.png" alt-text="The Preview tab" lightbox="../media/network-network-resources-preview.msft.png":::
   The **Preview** tab  
:::image-end:::  

### View a response body  

To view the response body to a request, use the following steps.  

1.  Select the URL of the request, under the **Name** column of the Requests table.  
1.  Select the **Response** tab.  

:::image type="complex" source="../media/network-network-resources-response.msft.png" alt-text="The Response tab" lightbox="../media/network-network-resources-response.msft.png":::
   The **Response** tab  
:::image-end:::  

### View HTTP headers  

To view HTTP header data about a request, use the following steps.  

1.  Select the URL of the request, under the **Name** column of the Requests table.  
1.  Select the **Headers** tab.  

:::image type="complex" source="../media/network-resources-headers.msft.png" alt-text="The Headers tab" lightbox="../media/network-resources-headers.msft.png":::
   The **Headers** tab  
:::image-end:::  

#### View HTTP header source  

By default, the Headers tab shows header names alphabetically.  To view the HTTP header names in the order received, use the following steps.  

1.  Open the **Headers** tab for the request that interests you.  For more information, navigate to [View HTTP headers](#view-http-headers).  
1.  Choose **view source**, next to the **Request Header** or **Response Header** section.  

### View query string parameters  

To view the query string parameters of a URL in a human-readable format, use the following steps.  

1.  Open the **Headers** tab for the request that interests you.  For more information, navigate to [View HTTP headers](#view-http-headers).  
1.  Go to the **Query String Parameters** section.  

:::image type="complex" source="../media/network-network-resources-headers-query-string-parameters.msft.png" alt-text="The Query String Parameters section" lightbox="../media/network-network-resources-headers-query-string-parameters.msft.png":::
   The **Query String Parameters** section  
:::image-end:::  

#### View query string parameters source  

To view the query string parameter source of a request, use the following steps.  

1.  Go to the Query String Parameters section.  For more information, navigate to [View query string parameters](#view-query-string-parameters).  
1.  Choose **view source**.  

#### View URL-encoded query string parameters  

To view query string parameters in a human-readable format, but with encodings preserved, use the following steps.  

1.  Go to the Query String Parameters section.  For more information, navigate to [View query string parameters](#view-query-string-parameters).  
1.  Choose **view URL encoded**.  

### View cookies  

To view the cookies sent in the HTTP header of a request, use the following steps.  

1.  Select the URL of the request, under the **Name** column of the Requests table.  
1.  Select the **Cookies** tab.  

<!--For more information about each of the columns, navigate to [Fields][ManageDataCookiesFields].  -->  

<!--[ManageDataCookiesFields]: manage-data/cookies#fields  -->  
<!--TODO: add link when section is available -->  

:::image type="complex" source="../media/network-network-resources-cookies.msft.png" alt-text="The Cookies tab" lightbox="../media/network-network-resources-cookies.msft.png":::
   The Cookies tab  
:::image-end:::  

### View the timing breakdown of a request  

To view the timing breakdown of a request, use the following steps.  

1.  Select the URL of the request, under the **Name** column of the Requests table.  
1.  Select the **Timing** tab.  

For a faster way to access the data, navigate to [Preview a timing breakdown](#preview-a-timing-breakdown).  

For more information about each of the phases that may be displayed in the **Timing** tab, navigate to [Timing breakdown phases explained](#timing-breakdown-phases-explained).  

:::image type="complex" source="../media/network-network-resources-timing.msft.png" alt-text="The Timing tab" lightbox="../media/network-network-resources-timing.msft.png":::
   The **Timing** tab  
:::image-end:::  

More information about each of the phases.  

For more information about accessing the view, navigate to [View timing breakdown](#view-the-timing-breakdown-of-a-request).  

#### Preview a timing breakdown  

To view a preview of the timing breakdown of a request, in the **Waterfall** column of the Requests table, hover on the entry for the request.  

For more information about how to access the data without hovering, navigate to [View the timing breakdown of a request](#view-the-timing-breakdown-of-a-request).  

:::image type="complex" source="../media/network-network-resources-waterfall-hover.msft.png" alt-text="> Previewing the timing breakdown of a request" lightbox="../media/network-network-resources-waterfall-hover.msft.png":::
   Previewing the timing breakdown of a request  
:::image-end:::  

#### Timing breakdown phases explained  

More information about each of the phases that may display in the **Timing** tab.  

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
      The browser is negotiating the request with a [proxy server][WikiProxyServer].  
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
      **Waiting \(TTFB\)**  
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

### View initiators and dependencies  

To view the initiators and dependencies of a request, hold `Shift`and hover over the request in the Requests table.  DevTools colors: initiators are shown in green and dependencies are shown in red.  

:::image type="complex" source="../media/network-network-resources-initiators-dependencies.msft.png" alt-text="Viewing the initiators and dependencies of a request" lightbox="../media/network-network-resources-initiators-dependencies.msft.png":::
   Viewing the initiators and dependencies of a request  
:::image-end:::  

When the Requests table is ordered chronologically, if you hover on a line, the line preceding it displays a green request.  The green request is the initiator of the dependency.  If another green request is displayed on the line before that, that higher request is the initiator of the initiator.  And so on.  

### View load events  

DevTools displays the timing of the `DOMContentLoaded` and `load` events in multiple places on the Network panel.  The `DOMContentLoaded` event is colored blue, and the `load` event is red.  

:::image type="complex" source="../media/network-network-requests-load-events.msft.png" alt-text="The locations of the DOMContentLoaded and load events on the Network panel" lightbox="../media/network-network-requests-load-events.msft.png":::
   The locations of the `DOMContentLoaded` and `load` events on the Network panel  
:::image-end:::  

### View the total number of requests  

The total number of requests is listed in the Summary pane, at the bottom of the Network panel.  

> [!CAUTION]
> This number only tracks requests that have been logged since DevTools was opened.  If other requests occurred before DevTools was opened, those requests are not counted.  

:::image type="complex" source="../media/network-network-total-requests.msft.png" alt-text="The total number of requests since DevTools were opened" lightbox="../media/network-network-total-requests.msft.png":::
   The total number of requests since DevTools were opened  
:::image-end:::  

### View the total download size  

The total download size of requests is listed in the Summary pane, at the bottom of the Network panel.  

> [!CAUTION]
> This number only tracks requests that have been logged since DevTools was opened.  If other requests occurred before DevTools was opened, the previous requests are not counted.  

:::image type="complex" source="../media/network-network-total-download-size.msft.png" alt-text="The total download size of requests" lightbox="../media/network-network-total-download-size.msft.png":::
   The total download size of requests  
:::image-end:::  

To verify how large resources are after the browser uncompresses each item, navigate to [View the uncompressed size of a resource](#view-the-uncompressed-size-of-a-resource).  

### View the stack trace that caused a request  

After a JavaScript statement requests a resource, hover over the **Initiator** column to view the stack trace leading up to the request.  

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

### View the uncompressed size of a resource  

Select the **Use large request rows** checkbox and then look at the bottom value of the **Size** column.  

:::image type="complex" source="../media/network-network-requests-uncompressed-compare.msft.png" alt-text="An example of uncompressed resources" lightbox="../media/network-network-requests-uncompressed-compare.msft.png":::
   An example of uncompressed resources  \(The compressed size of the `jquery-3.3.1.min.js` file that was sent over the network was `29.9 KB`, whereas the uncompressed size was `84.9 KB`\)  
:::image-end:::  

## Export requests data  

### Save all network requests to a HAR file  

To save all network requests to a HAR file, complete the following steps.  

1.  Hover on any request in the Requests table and open the contextual menu \(right-click\).  
1.  Choose **Save as HAR with Content**.  DevTools saves all requests that have occurred since you opened DevTools to the HAR file.  You are not able to filter requests.  You are also not able to save a single request.  

Once you save a HAR file, you may import it back into DevTools for analysis.  Just drag-and-drop the HAR file into the Requests table.  
<!--For more information, navigate to also [HAR Analyzer][HARAnalyzer].  -->  

<!--[HARAnalyzer]: https://toolbox.alphabetapps.com/apps/har_analyzer  -->  
<!--Todo: add section link when content is available  -->  

:::image type="complex" source="../media/network-network-requests-save-har-content.msft.png" alt-text="Selecting Save as HAR with Content" lightbox="../media/network-network-requests-save-har-content.msft.png":::
   Selecting **Save as HAR with Content**  
:::image-end:::  

### Copy one or more requests to the clipboard  

Under the **Name** column of the Requests table, hover on a request, open the contextual menu \(right-click\), hover over **Copy**, and select one of the following options.  

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

:::image type="complex" source="../media/network-network-requests-copy-response.msft.png" alt-text="Selecting Copy Response" lightbox="../media/network-network-requests-copy-response.msft.png":::
   Selecting **Copy Response**  
:::image-end:::  

## Change the layout of the Network panel  

You may expand or collapse sections of the Network panel UI to focus important information.  

### Hide the Filters pane  

By default, DevTools show the **Filters pane**.  
Choose **Filter** \(![Filter][ImageFilterIcon]\) to hide it.  

:::image type="complex" source="../media/network-network-resources-hide-filters-button.msft.png" alt-text="The Hide Filters button" lightbox="../media/network-network-resources-hide-filters-button.msft.png":::
   The Hide Filters button  
:::image-end:::  

### Use large request rows  

Use large rows when you want more whitespace in your network requests table.  Some columns also provide a little more information when using large rows.  For example, the bottom value of the **Size** column is the uncompressed size of a request.  

:::image type="complex" source="../media/network-network-requests-large-request-rows.msft.png" alt-text="An example of large request rows in the Requests pane" lightbox="../media/network-network-requests-large-request-rows.msft.png":::
   An example of large request rows in the **Requests** pane  
:::image-end:::  

Select the **Use large request rows** checkbox to enable large rows.  

:::image type="complex" source="../media/network-network-requests-use-large-request-rows-on.msft.png" alt-text="The Use large request rows checkbox" lightbox="../media/network-network-requests-use-large-request-rows-on.msft.png":::
   The **Use large request rows** checkbox  
:::image-end:::  

### Hide the Overview pane  

By default, DevTools show the **Overview pane**.  Deselect the **Show Overview** checkbox to hide it.  

:::image type="complex" source="../media/network-network-requests-show-overview-off.msft.png" alt-text="The Show Overview checkbox" lightbox="../media/network-network-requests-show-overview-off.msft.png":::
   The **Show Overview** checkbox  
:::image-end:::  

## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- image links -->  

[ImageCaptureScreenshotsIcon]: ../media/capture-screenshots-icon.msft.png  
[ImageClearIcon]: ../media/clear-requests-icon.msft.png  
[ImageFilterIcon]: ../media/filter-icon.msft.png  
[ImageHideIcon]: ../media/hide-overview-icon.msft.png  
[ImageLargeResourceRowsIcon]: ../media/large-resource-rows-button-icon.msft.png  
[ImageRecordOnIcon]: ../media/record-on-icon.msft.png  

<!-- links -->  

[DevtoolsProgressiveWebApps]: ../progressive-web-apps.md "Debug Progressive Web Apps | Microsoft Docs"  

<!--[NetworkConditions]: /microsoft-edge/devtools-guide-chromium/network/network-conditions "Optimize Performance Under Varying Network Conditions | Microsoft Docs"  -->  

[MDNHTTPDataURIs]: https://developer.mozilla.org/docs/Web/HTTP/Basics_of_HTTP/Data_URIs "Data URLs | MDN"  

[WikiProxyServer]: https://en.wikipedia.org/wiki/Proxy_server "Proxy server - Wikipedia"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/network/reference) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
