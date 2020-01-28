---
title: Network Analysis Reference
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/06/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
<!-- Copyright 05/29/2019 Kayce Basques 

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->  







<!--
<style>
figcaption {
  text-align: center;
}
</style>
-->

# Network Analysis Reference   



Discover new ways to analyze how your page loads in this comprehensive reference of Microsoft Edge DevTools network analysis features.  

<!--
> [!NOTE]
> This reference is based on Microsoft Edge 58.  If you use another version of Microsoft Edge, the UI, and features of DevTools may be different.  Check `edge://help` to see what version of Microsoft Edge you are running.  
-->

## Record network requests   

By default, DevTools records all network requests in the Network panel, so long as DevTools is open.  

> ##### Figure 1  
> The Network panel  
> ![The Network panel][ImageNetworkPanel]  

### Stop recording network requests   

To stop recording requests:  

*   Click **Stop recording network log** ![Stop recording network log][ImageRecordOnIcon]  on the Network panel.  It turns grey to indicate that DevTools is no longer recording requests.  
*   Press `Control`+`E`\(Windows\) or `Command`+`E` \(macOS\) while the Network panel is in focus.  

### Clear requests   

Click **Clear** ![Clear][ImageClearIcon]  on the Network panel to clear all requests from the Requests table.  

> ##### Figure 2  
> The Clear button  
> ![The Clear button][ImageClearButton]  

### Save requests across page loads   

To save requests across page loads, check the **Preserve log** checkbox on the Network panel.  DevTools saves all requests until you disable
**Preserve log**.  

> ##### Figure 3  
> The Preserve Log checkbox  
> ![The Preserve Log checkbox][ImagePreserveLogCheckBox]  

### Capture screenshots during page load   

Capture screenshots to analyze what users see as they wait for your page to load.  

To enable screenshots, click on **Network settings** and click **Capture screenshots** checkbox on the Network panel.  

Reload the page while the Network panel is in focus to capture screenshots.  

After capturing a screenshot, you interact with it in the following ways:  

*   Hover over a screenshot to view the point at which that screenshot was captured.  A yellow line appears on the Overview pane.  
*   Click the thumbnail of a screen to filter out any requests that occurred after the screenshot was captured.  
*   Double-click a thumbnail to zoom in on it.  

> ##### Figure 4  
> Hovering over a screenshot  
> ![Hovering over a screenshot][ImageScreenshotHover]  

<!--  ### Replay XHR request   -->

<!--  To replay an XHR request, right-click the request in the Requests table and select **Replay XHR**.  -->

<!--  
> ##### Old Figure 5  
> Selecting Replay XHR  
> ![Selecting Replay XHR][ImageReplayXHR]  
-->  

## Change loading behavior  

### Emulate a first-time visitor by disabling the browser cache   

To emulate how a first-time user experiences your site, check the **Disable cache** checkbox.  DevTools disables the browser cache.  This more accurately emulates a first-time user's experience, because requests are served from the browser cache on repeat visits.  

> ##### Figure 5  
> The Disable Cache checkbox  
> ![The Disable Cache checkbox][ImageDisableCacheCheckBox]  

#### Disable the browser cache from the Network Conditions drawer   

If you want to disable the cache while working in other DevTools panels, use the Network Conditions drawer.  

1.  Open the **Network Conditions** drawer.  
1.  Check or uncheck the **Disable cache** checkbox.  

<!--todo: add network condition section when available -->  

### Manually clear the browser cache   

To manually clear the browser cache at any time, right-click anywhere in the Requests table and select **Clear Browser Cache**.  

> ##### Figure 6  
> Selecting Clear Browser Cache  
> ![Selecting Clear Browser Cache][ImageClearBrowserCache]  

### Emulate offline   

A new class of web apps, called **Progressive Web Apps**, functions offline with the help of **service workers**.  You may find it useful to quickly simulate a device that has no data connection when you are building this type of app.  

<!--[ProgressiveWebApps]: /web/progressive-web-apps  -->
<!--[ServiceWorkers]: /web/fundamentals/getting-started/primers/service-workers  -->

Click the **Online** dropdown menu, search under **Presets**, and select **Offline** to simulate a completely offline network experience.  

> ##### Figure 7  
> The Offline dropdown menu  
> ![The Offline dropdown menu][ImageOfflineDropdown]  

### Emulate slow network connections   

Emulate Slow 3G, Fast 3G, and other connection speeds from the **Online** dropdown menu.  

> ##### Figure 8  
> The Throttling dropdown menu  
> ![The Throttling dropdown menu][ImageNetworkThrottlingMenu]  

You may select from a variety of presets, such as Slow 3G or Fast 3G.  You may also add your own custom presets by opening the Throttling menu and selecting **Custom** > **Add**.  

DevTools displays a warning icon next to the **Network** tab to remind you that throttling is enabled.  

#### Emulate slow network connections from the Network Conditions drawer   

If you want to throttle the network connection while working in other DevTools panels, use the Network Conditions drawer.  

1.  Open the **Network Conditions** drawer.  
1.  Select your desired connection speed from the **Throttling** menu.  

<!--todo: add network condition section when available -->  

### Manually clear browser cookies   

To manually clear browser cookies at any time, right-click anywhere in the Requests table and select **Clear Browser Cookies**.  

> ##### Figure 9  
> Selecting Clear Browser Cookies  
> ![Selecting Clear Browser Cookies][ImageClearBrowserCookies]  

### Override the user agent   

To manually override the user agent:  

1.  Open the **Network Conditions** drawer.  
1.  Uncheck **Select automatically**.  
1.  Choose a user agent option from the menu, or enter a custom one in the text box.  

<!--todo: add network condition section when available -->  

## Filter requests   

### Filter requests by properties   

Use the **Filter** text box to filter requests by properties, such as the domain or size of the request.  

If you do not see the text box, the Filters pane is probably hidden.  
See [Hide the Filters pane](#hide-the-filters-pane).  

> ##### Figure 10  
> The Filters text box  
> ![The Filters text box][ImageFilterTextBox]  

You may use multiple properties simultaneously by separating each property with a space.  For example, `mime-type:image/png larger-than:1K` displays
all PNGs that are larger than one kilobyte.  These multi-property filters are equivalent to `AND` operations.  `OR` operations are currently not supported.  

Below is a complete list of supported properties.  

*   `domain`.  Only display resources from the specified domain.  You may use a wildcard character \(`*`\) to include multiple domains.  For example, `*.com` displays resources from all domain names ending in `.com`.  DevTools populates the autocomplete dropdown menu with all of the domains it has encountered.  
*   `has-response-header`.  Show the resources that contain the specified HTTP response header.  DevTools populates the autocomplete dropdown with all of the response headers that it has encountered.  
*   `is`.  Use `is:running` to find `WebSocket` resources.  
*   `larger-than`.  Show resources that are larger than the specified size, in bytes.  Setting a value of `1000` is equivalent to setting a value of `1k`.
*   `method`.  Show resources that were retrieved over a specified HTTP method type.  DevTools populates the dropdown with all of the HTTP methods it has encountered.  
*   `mime-type`.  Show resources of a specified MIME type.  DevTools populates the dropdown with all MIME types it has encountered.  
*   `mixed-content`.  Show all mixed content resources \(`mixed-content:all`\) or just the ones that are currently displayed \(`mixed-content:displayed`\).  
*   `scheme`.  Show resources retrieved over unprotected HTTP \(`scheme:http`\) or protected HTTPS \(`scheme:https`\).  
*   `set-cookie-domain`.  Show the resources that have a `Set-Cookie` header with a `Domain` attribute that matches the specified value.  DevTools populates the autocomplete with all of the cookie domains that it has encountered.  
*   `set-cookie-name`.  Show the resources that have a `Set-Cookie` header with a name that matches the specified value.  DevTools populates the autocomplete with all of the cookie names that it has encountered.  
*   `set-cookie-value`.  Show the resources that have a `Set-Cookie` header with a value that matches the specified value.  DevTools populates the autocomplete with all of the cookie values that it has encountered.  
*   `status-code`.  Only show resources whose HTTP status code match the specified code.  DevTools populates the autocomplete dropdown menu with all of the status codes it has encountered.  

### Filter requests by type   

To filter requests by request type, click the **XHR**, **JS**, **CSS**, **Img**, **Media**, **Font**, **Doc**, **WS** \(WebSocket\), **Manifest**, or **Other** \(any other type not listed here\) buttons on the Network panel.  

If you do not see these buttons, the Filters pane is probably hidden.  
See [Hide the Filters pane](#hide-the-filters-pane).  

To enable multiple type filters simultaneously, hold `Control` \(Windows\) or `Command` \(macOS\) and then click.  

> ##### Figure 11  
> Using the Type filters to display JS, CSS, and Document resources  
> ![Using the Type filters to display JS, CSS, and Document resources][ImageMultiTypeFilter]  

### Filter requests by time   

Click and drag left or right on the Overview pane to only display requests that were active during that time frame.  The filter is inclusive.  Any request that was active during the highlighted time is shown.  

> ##### Figure 12  
> Filtering out any requests that were inactive around 300ms  
> ![Filtering out any requests that were inactive around 300ms][ImageOverviewFilter]  

### Hide data URLs  

[Data URLs][MDNHTTPDataURIs] are small files embedded into other documents.  Any request that you see in the Requests table that starts with `data:` is a data URL.  

Check the **Hide data URLs** checkbox to hide these requests.  

> ##### Figure 13  
> The Hide Data URLs checkbox  
> ![The Hide Data URLs checkbox][ImageHideDataURLsCheckBox]  

## Sort requests  

By default, the requests in the Requests table are sorted by initiation time, but you may sort the table using other criteria.  

### Sort by column   

Click the header of any column in the Requests to sort requests by that column.  

### Sort by activity phase   

To change how the Waterfall sorts requests, right-click the header of the Requests table, hover over **Waterfall**, and select one of the following options:  

*   **Start Time**.  The first request that was initiated is at the top.  
*   **Response Time**.  The first request that started downloading is at the top.  
*   **End Time**.  The first request that finished is at the top.  
*   **Total Duration**.  The request with the shortest connection setup and request / response is at the top.  
*   **Latency**.  The request that waited the shortest time for a response is at the top.  

These descriptions assume that each respective option is ranked from shortest to longest.  Clicking on the header of the **Waterfall** column reverses the order.  

> ##### Figure 14  
> Sorting the Waterfall by total duration  \(The lighter portion of each bar is time spent waiting and the darker portion is time spent downloading bytes\)  
> ![Sorting the Waterfall by total duration][ImageWaterfallTotalDuration]  

## Analyze requests   

So long as DevTools is open, it logs all requests in the Network panel.  
Use the Network panel to analyze requests.  

### View a log of requests   

Use the Requests table to view a log of all requests made while DevTools has been open.  Clicking or hovering over requests reveals more information about each item.  

> ##### Figure 15  
> The Requests table  
> ![The Requests table][ImageRequestsTable]  

The Requests table displays the following columns by default:  

*   **Name**.  The filename of, or an identifier for, the resource.  
*   **Status**.  The HTTP status code.  
*   **Type**.  The MIME type of the requested resource.  
*   **Initiator**.  The following objects or processes initiate requests:  
    *   **Parser**.  The HTML parser for Microsoft Edge.  
    *   **Redirect**.  An HTTP redirect.  
    *   **Script**.  A JavaScript function.  
    *   **Other**.  Some other process or action, such as navigating to a page via a link or entering a URL in the address bar.  
*   **Size**.  The combined size of the response headers plus the response body, as delivered by the server.  
*   **Time**.  The total duration, from the start of the request to the receipt of the final byte in the response.  
*   [**Waterfall**](#view-the-timing-of-requests-in-relation-to-one-another).  A visual breakdown of the activity for each request.  

#### Add or remove columns   

Right-click the header of the Requests table and select an option to hide or show it.  Currently displayed options have checkmarks next to each item.  

> ##### Figure 16  
> Adding a column to the Requests table  
> ![Adding a column to the Requests table][ImageRequestsTableAddColumn]  

#### Add custom columns   

To add a custom column to the Requests table, right-click the header of the Requests table and select **Response Headers** > **Manage Header Columns**.  

> ##### Figure 17  
> Adding a custom column to the Requests table  
> ![Adding a custom column to the Requests table][ImageRequestsTableCustomColumn]  

### View the timing of requests in relation to one another   

Use the Waterfall to view the timing of requests in relation to one another.  
By default, the Waterfall is organized by the start time of the requests.  
So, requests that are farther to the left started earlier than those that are farther to the right.  

See [Sort by activity phase](#sort-by-activity-phase) to see the different ways that you may sort the Waterfall.  

> ##### Figure 18  
> The Waterfall column of the Requests pane  
> ![The Waterfall column of the Requests pane][ImageRequestsTableWaterfallColumn]  

<!-- ### Analyze the frames of a WebSocket Connection   -->

<!--To view the frames of a WebSocket connection:  

1.  Click the URL of the WebSocket connection, under the **Name** column of the Requests table.  
1.  Click the **Frames** tab.  The table shows the last 100 frames.  

To refresh the table, re-click the name of the WebSocket connection under the **Name** column of the Requests table.  -->

<!--
> ##### Old Figure 20  
> The Frames tab  
> ![The Frames tab][ImageFrames]  
-->

<!--The table contains three columns:  

*   **Data**.  The message payload.  If the message is plain text, it is displayed here.  For binary opcodes, this column displays the name and code of the opcode.  The following opcodes are supported: Continuation Frame, Binary Frame, Connection Close Frame, Ping Frame, and Pong Frame.  
*   **Length**.  The length of the message payload, in bytes.  
*   **Time**.  The time when the message was received or sent.  -->

<!--Messages are color-coded according to their type:  

*   Outgoing text messages are light-green.  
*   Incoming text messages are white.  
*   WebSocket opcodes are light-yellow.  
*   Errors are light-red.  -->

### View a preview of a response body   

To view a preview of a response body:  

1.  Click the URL of the request, under the **Name** column of the Requests table.  
1.  Click the **Preview** tab.  

This tab is mostly useful for viewing images.  

> ##### Figure 19  
> The Preview tab  
> ![The Preview tab][ImagePreview]  

### View a response body   

To view the response body to a request:  

1.  Click the URL of the request, under the **Name** column of the Requests table.  
1.  Click the **Response** tab.  

> ##### Figure 20  
> The Response tab  
> ![The Response tab][ImageResponse]  

### View HTTP headers   

To view HTTP header data about a request:  

1.  Click on the URL of the request, under the **Name** column of the Requests table.  
1.  Click the **Headers** tab.  

> ##### Figure 21  
> The Headers tab  
> ![The Headers tab][ImageHeaders]  

#### View HTTP header source   

By default, the Headers tab shows header names alphabetically.  To view the HTTP header names in the order they were received:  

1.  Open the **Headers** tab for the request that interests you.  See [View HTTP headers](#view-http-headers).  
1.  Click **view source**, next to the **Request Header** or **Response Header** section.  

### View query string parameters   

To view the query string parameters of a URL in a human-readable format:  

1.  Open the **Headers** tab for the request that interests you.  See [View HTTP headers](#view-http-headers).  
1.  Go to the **Query String Parameters** section.  

> ##### Figure 22  
> The Query String Parameters section  
> ![The Query String Parameters section][ImageQueryStringParameters]  

#### View query string parameters source   

To view the query string parameter source of a request:  

1.  Go to the Query String Parameters section.  See [View query string parameters](#view-query-string-parameters).  
1.  Click **view source**.  

#### View URL-encoded query string parameters   

To view query string parameters in a human-readable format, but with encodings preserved:  

1.  Go to the Query String Parameters section.  See [View query string parameters](#view-query-string-parameters).  
1.  Click **view URL encoded**.  

### View cookies   

To view the cookies sent in the HTTP header of a request:  

1.  Click the URL of the request, under the **Name** column of the Requests table.  
1.  Click the **Cookies** tab.  

<!--See [Fields][ManageDataCookiesFields] for a description of each of the columns.  -->

<!--[ManageDataCookiesFields]: manage-data/cookies#fields  -->
<!--TODO: add link when section is available -->

> ##### Figure 23  
> The Cookies tab  
> ![The Cookies tab][ImageCookies]  

### View the timing breakdown of a request   

To view the timing breakdown of a request:  

1.  Click the URL of the request, under the **Name** column of the Requests table.  
1.  Click the **Timing** tab.  

See [Preview a timing breakdown](#preview-a-timing-breakdown) for a faster way to access this data.  

See [Timing breakdown phases explained](#timing-breakdown-phases-explained) for more information about each of the phases that you may see in the Timing tab.  

> ##### Figure 24  
> The Timing tab  
> ![The Timing tab][ImageTiming]  

More information about each of the phases.  

See [View timing breakdown](#view-the-timing-breakdown-of-a-request) for another way to access this view.  

#### Preview a timing breakdown   

To view a preview of the timing breakdown of a request, hover over the entry for the request in the **Waterfall** column of the Requests table.  

See [View the timing breakdown of a request](#view-the-timing-breakdown-of-a-request) for a way to access this data that does not require hovering.  

> ##### Figure 25  
> Previewing the timing breakdown of a request  
> ![Previewing the timing breakdown of a request][ImageWaterfallHover]  

#### Timing breakdown phases explained   

More information about each of the phases you may see in the Timing tab:  

*   **Queueing**.  The browser queues requests when:  
    *   There are higher priority requests.  
    *   There are already six TCP connections open for this origin, which is the limit.  Applies to HTTP/1.0 and HTTP/1.1 only.  
    *   The browser is briefly allocating space in the disk cache.  
*   **Stalled**.  The request could be stalled for any of the reasons described in **Queueing**.  
*   **DNS Lookup**.  The browser is resolving the IP address for the request.  
*   **Proxy negotiation**.  The browser is negotiating the request with a [proxy server][WikiProxyServer].  
*   **Request sent**.  The request is being sent.  
*   **ServiceWorker Preparation**.  The browser is starting up the service worker.  
*   **Request to ServiceWorker**.  The request is being sent to the service worker.  
*   **Waiting \(TTFB\)**.  The browser is waiting for the first byte of a response.  
  TTFB stands for Time To First Byte.  This timing includes 1 round trip of latency and the time the server took to prepare the response.  
*   **Content Download**.  The browser is receiving the response.  
*   **Receiving Push**.  The browser is receiving data for this response via HTTP/2 Server Push.  
*   **Reading Push**.  The browser is reading the local data previously received.  

### View initiators and dependencies   

To view the initiators and dependencies of a request, hold `Shift`and hover over the request in the Requests table.  DevTools colors: initiators are shown in green and dependencies are shown in red.  

> ##### Figure 26  
> Viewing the initiators and dependencies of a request  
> ![Viewing the initiators and dependencies of a request][ImageRequestInitiatorsDependencies]  

When the Requests table is ordered chronologically, the first green request above the one you are hovering is the initiator of the dependency.  If another green request appears above that, that higher request is the initiator of the initiator.  And so on.  

### View load events   

DevTools displays the timing of the `DOMContentLoaded` and `load` events in multiple places on the Network panel.  The `DOMContentLoaded` event is colored blue, and the `load` event is red.  

> ##### Figure 27  
> The locations of the `DOMContentLoaded` and `load` events on the Network panel  
> ![The locations of the DOMContentLoaded and load events on the Network panel][ImageNetworkPanelDOMContentLoadedLoadEvents]  

### View the total number of requests   

The total number of requests is listed in the Summary pane, at the bottom of the Network panel.  

> [!CAUTION]
> This number only tracks requests that have been logged since DevTools was opened.  If other requests occurred before DevTools was opened, those requests are not counted.  

> ##### Figure 28  
> The total number of requests since DevTools was opened  
> ![The total number of requests since DevTools was opened][ImageTotalRequests]  

### View the total download size   

The total download size of requests is listed in the Summary pane, at the bottom of the Network panel.  

> [!CAUTION]
> This number only tracks requests that have been logged since DevTools was opened.  If other requests occurred before DevTools was opened, those requests are not counted.  

> ##### Figure 29  
> The total download size of requests  
> ![The total download size of requests][ImageTotalSize]  

See [View the uncompressed size of a resource](#view-the-uncompressed-size-of-a-resource) to see how large resources are after the browser uncompresses each item.  

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

> ##### Figure 30  
> The stack trace leading up to a resource request  
> ![The stack trace leading up to a resource request][ImageInitiatorStack]  

### View the uncompressed size of a resource   

Select the **Use large request rows** checkbox and then look at the bottom value of the **Size** column.  

> ##### Figure 31  
> An example of uncompressed resources  \(The compressed size of the `jquery-3.3.1.min.js` file that was sent over the network was `29.9 KB`, whereas the uncompressed size was `84.9 KB`\)  
> ![An example of uncompressed resources][ImageUncompressedResources]  

## Export requests data   

### Save all network requests to a HAR file   

To save all network requests to a HAR file:  

1.  Right-click any request in the Requests table.  
1.  Select **Save as HAR with Content**.  DevTools saves all requests that have occurred since you opened DevTools to the HAR file.  There is no way to filter requests, or to save just a single request.  

Once you save a HAR file, you may import it back into DevTools for analysis.  Just drag-and-drop the HAR file into the Requests table.  
<!--See also [HAR Analyzer][HARAnalyzer].  -->  

<!--[HARAnalyzer]: https://toolbox.alphabetapps.com/apps/har_analyzer  -->  
<!--Todo: add section link when content is available  -->  

> ##### Figure 32  
> Selecting Save as HAR with Content  
> ![Selecting Save as HAR with Content][ImageSaveAsHAR]  

### Copy one or more requests to the clipboard   

Under the **Name** column of the Requests table, right-click a request, hover over **Copy**, and select one of the following options:  

*   **Copy Link Address**.  Copy the URL of the request to the clipboard.  
*   **Copy Response**.  Copy the response body to the clipboard.  
*   **Copy as Fetch**.  
*   **Copy as cURL**.  Copy the request as a cURL command.  
*   **Copy All as Fetch**.  
*   **Copy All as cURL**.  Copy all requests as a chain of cURL commands.  
*   **Copy All as HAR**.  Copy all requests as HAR data.  

> ##### Figure 33  
> Selecting Copy Response  
> ![Selecting Copy Response][ImageCopyResponse]  

## Change the layout of the Network panel  

You may expand or collapse sections of the Network panel UI to focus important information.  

### Hide the Filters pane   

By default, DevTools shows the **Filters pane**.  
Click **Filter** ![Filter][ImageFilterIcon]  to hide it.  

> ##### Figure 34  
> The Hide Filters button  
> ![The Hide Filters button][ImageHideFiltersButton]  

### Use large request rows   

Use large rows when you want more whitespace in your network requests table.  Some columns also provide a little more information when using large rows.  For example, the bottom value of the **Size** column is the uncompressed size of a request.  

> ##### Figure 35  
> An example of large request rows in the Requests pane  
> ![An example of large request rows in the Requests pane][ImageLargeRequestRows]  

Select the **Use large request rows** checkbox to enable large rows.  

> ##### Figure 36  
> The Large Request Rows checkbox  
> ![The Large Request Rows checkbox][ImageLargeRequestRowsCheckbox]  

### Hide the Overview pane   

By default, DevTools shows the **Overview pane**.  
Deselect the **Show Overview** checkbox to hide it.  

> ##### Figure 37  
> The Show Overview checkbox  
> ![The Show Overview checkbox][ImageHideOverviewCheckbox]  

 

  

<!-- image links -->  

[ImageCaptureScreenshotsIcon]: images/capture-screenshots-icon.msft.png  
[ImageClearIcon]: images/clear-requests-icon.msft.png  
[ImageFilterIcon]: images/filter-icon.msft.png  
[ImageHideIcon]: images/hide-overview-icon.msft.png  
[ImageLargeResourceRowsIcon]: images/large-resource-rows-button-icon.msft.png  
[ImageRecordOnIcon]: images/record-on-icon.msft.png  

[ImageClearBrowserCache]: images/network-clear-browser-cache.msft.png "Figure 6: Selecting Clear Browser Cache"  
[ImageClearBrowserCookies]: images/network-clear-browser-cookies.msft.png "Figure 9: Selecting Clear Browser Cookies"  
[ImageClearButton]: images/network-clear-button.msft.png "Figure 2: The Clear button"  
[ImageCookies]: images/network-resources-cookies.msft.png "Figure 23: The Cookies tab"  
[ImageCopyResponse]: images/network-requests-copy-response.msft.png "Figure 33: Selecting Copy Response"  
[ImageDisableCacheCheckBox]: images/network-disable-cache-checkbox.msft.png "Figure 5: The Disable Cache checkbox"  
[ImageFilterTextBox]: images/network-filters-textbox.msft.png "Figure 10: The Filters text box"  
<!--[ImageFrames]: images/frames.msft.png "Old Figure 20: The Frames tab"  -->  
[ImageHeaders]: ../images/network-resources-headers.msft.png "Figure 21: The Headers tab"  
[ImageHideDataURLsCheckBox]: images/network-hide-data-urls.msft.png "Figure 13: The Hide Data URLs checkbox"  
[ImageHideFiltersButton]: images/network-resources-hide-filters-button.msft.png "Figure 34: The Hide Filters button"  
[ImageHideOverviewCheckbox]: images/network-requests-show-overview-off.msft.png "Figure 37: The Hide Overview checkbox"  
[ImageInitiatorStack]: images/network-requests-initiator-stack.msft.png "Figure 30: The stack trace leading up to a resource request"  
[ImageLargeRequestRowsCheckbox]: images/network-requests-use-large-request-rows-on.msft.png "Figure 36: The Large Request Rows checkbox"  
[ImageMultiTypeFilter]: images/network-type-filters.msft.png "Figure 11: Using the Type filters to display JS, CSS, and Document resources"  
[ImageNetworkPanel]: images/network-panel.msft.png "Figure 1: The Network panel"  
[ImageNetworkPanelDOMContentLoadedLoadEvents]: images/network-requests-load-events.msft.png "Figure 27: The locations of the DOMContentLoaded and load events on the Network panel"  
[ImageNetworkThrottlingMenu]: images/network-throttling-menu.msft.png "Figure 8: The Network Throttling menu"  
[ImageOfflineDropdown]: images/network-offline-dropdown.msft.png "Figure 7: The Offline dropdown menu"  
[ImageOverviewFilter]: images/network-overview-filter.msft.png "Figure 12: Filtering out any requests that were inactive around 300ms"  
[ImagePreserveLogCheckBox]: images/network-preserve-log.msft.png "Figure 3: The Preserve Log checkbox"  
[ImagePreview]: images/network-resources-preview.msft.png "Figure 19: The Preview tab"  
[ImageQueryStringParameters]: images/network-resources-headers-query-string-parameters.msft.png "Figure 22: The Query String Parameters section"  
<!--[ImageReplayXHR]: images/replay-xhr.msft.png "Old Figure 5: Selecting Replay XHR"  -->  
[ImageRequestInitiatorsDependencies]: images/network-resources-initiators-dependencies.msft.png "Figure 26: Viewing the initiators and dependencies of a request"  
[ImageLargeRequestRows]: images/network-requests-large-request-rows.msft.png "Figure 35: An example of large request rows in the Requests pane"  
[ImageRequestsTable]: images/network-requests-table.msft.png "Figure 15: The Requests table"  
[ImageRequestsTableAddColumn]: images/network-requests-add-column.msft.png "Figure 16: Adding a column to the Requests table"  
[ImageRequestsTableCustomColumn]: images/network-requests-add-custom.msft.png "Figure 17: Adding a custom column to the Requests table"  
[ImageRequestsTableWaterfallColumn]: images/network-requests-waterfall.msft.png "Figure 18: The Waterfall column of the Requests pane"  
[ImageResponse]: images/network-resources-response.msft.png "Figure 20: The Response tab"  
[ImageSaveAsHAR]: images/network-requests-save-har-content.msft.png "Figure 32: Selecting Save as HAR with Content"  
[ImageScreenshotHover]: images/network-screenshot-hover.msft.png "Figure 4: Hovering over a screenshot"  
[ImageTiming]: images/network-resources-timing.msft.png "Figure 24: The Timing tab"  
[ImageTotalRequests]: images/network-total-requests.msft.png "Figure 28: The total number of requests since DevTools was opened"  
[ImageTotalSize]: images/network-total-download-size.msft.png "Figure 29: The total download size of requests"  
[ImageUncompressedResources]: images/network-requests-uncompressed-compare.msft.png "Figure 31: An example of uncompressed resources"  
[ImageWaterfallHover]: images/network-resources-waterfall-hover.msft.png "Figure 25: Previewing the timing breakdown of a request"  
[ImageWaterfallTotalDuration]: images/network-waterfall-total-duration.msft.png "Figure 14: Sorting the Waterfall by total duration"  

<!-- links -->  

<!--[NetworkConditions]: network-conditions.md "Optimize Performance Under Varying Network Conditions"  -->  

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
