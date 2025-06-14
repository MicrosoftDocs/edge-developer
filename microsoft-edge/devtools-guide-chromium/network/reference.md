---
title: Network features reference
description: A comprehensive reference of Microsoft Edge DevTools Network tool features.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 06/02/2025
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
# Network features reference
<!-- https://developer.chrome.com/docs/devtools/network/reference/ -->
<!-- todo: update article per upstream, esp [Filter requests](#filter-requests) -->

This article is a feature-driven inventory of the **Network** tool.  Use the **Network** tool to inspect network activity for a webpage.  For a step-by-step walkthrough and introduction to the **Network** tool, see [Inspect network activity](index.md).


**Detailed contents:**

* [Record network requests](#record-network-requests)
   * [Stop recording network requests](#stop-recording-network-requests)
   * [Clear requests](#clear-requests)
   * [Save requests across page loads](#save-requests-across-page-loads)
   * [Capture screenshots during page load](#capture-screenshots-during-page-load)
   * [Replay XHR request](#replay-xhr-request)
* [Change loading behavior](#change-loading-behavior)
   * [Emulate a first-time visitor by disabling the browser cache](#emulate-a-first-time-visitor-by-disabling-the-browser-cache)
      * [Disable the browser cache from the Network conditions tool](#disable-the-browser-cache-from-the-network-conditions-tool)
   * [Manually clear the browser cache](#manually-clear-the-browser-cache)
   * [Emulate offline](#emulate-offline)
   * [Emulate slow network connections](#emulate-slow-network-connections)
      * [Create custom throttling profiles](#create-custom-throttling-profiles)
      * [Throttle WebSocket connections](#throttle-websocket-connections)
      * [Emulate slow network connections from the Network Conditions tool](#emulate-slow-network-connections-from-the-network-conditions-tool)
   * [Manually clear browser cookies](#manually-clear-browser-cookies)
   * [Override HTTP response headers](#override-http-response-headers)
   * [Override the user agent](#override-the-user-agent)
* [Set user agent client hints](#set-user-agent-client-hints)
* [Search requests](#search-requests)
* [Filter requests](#filter-requests)
   * [Filter requests by properties](#filter-requests-by-properties)
   * [Filter requests by type](#filter-requests-by-type)
   * [Filter requests by time](#filter-requests-by-time)
   * [Hide data URLs](#hide-data-urls)
   * [Hide extension URLs](#hide-extension-urls)
   * [Show only the requests with blocked response cookies](#show-only-the-requests-with-blocked-response-cookies)
   * [Show only blocked requests](#show-only-blocked-requests)
   * [Show only third-party requests](#show-only-third-party-requests)
* [Sort requests](#sort-requests)
   * [Sort by column](#sort-by-column)
   * [Sort by activity phase](#sort-by-activity-phase)
* [Analyze requests](#analyze-requests)
   * [Display a log of requests](#display-a-log-of-requests)
      * [Add or remove columns](#add-or-remove-columns)
      * [Add custom columns for response headers](#add-custom-columns-for-response-headers)
   * [Group requests by inline frames](#group-requests-by-inline-frames)
   * [Display the timing relationship of requests](#display-the-timing-relationship-of-requests)
   * [Analyze the messages of a WebSocket connection](#analyze-the-messages-of-a-websocket-connection)
   * [Analyze events in a stream](#analyze-events-in-a-stream)
   * [Display a preview of a response body](#display-a-preview-of-a-response-body)
   * [Display a response body](#display-a-response-body)
   * [Display HTTP headers](#display-http-headers)
      * [View HTTP header source](#view-http-header-source)
      * [Provisional headers warning](#provisional-headers-warning)
   * [Display query string parameters](#display-query-string-parameters)
      * [View payload source](#view-payload-source)
      * [Display URL-encoded query string parameters](#display-url-encoded-query-string-parameters)
   * [Display cookies](#display-cookies)
   * [Display the timing breakdown of a request](#display-the-timing-breakdown-of-a-request)
      * [Preview a timing breakdown](#preview-a-timing-breakdown)
      * [Timing breakdown phases explained](#timing-breakdown-phases-explained)
   * [Display initiators and dependencies](#display-initiators-and-dependencies)
   * [Display load events](#display-load-events)
   * [Display the total number of requests](#display-the-total-number-of-requests)
   * [Display the total download size](#display-the-total-download-size)
   * [Display the stack trace that caused a request](#display-the-stack-trace-that-caused-a-request)
   * [Display the uncompressed size of a resource](#display-the-uncompressed-size-of-a-resource)
* [Export requests data](#export-requests-data)
   * [Save all network requests to a HAR file](#save-all-network-requests-to-a-har-file)
   * [Copy one or more requests to the clipboard](#copy-one-or-more-requests-to-the-clipboard)
   * [Copy formatted response JSON to the clipboard](#copy-formatted-response-json-to-the-clipboard)
   * [Copy property values from network requests to your clipboard](#copy-property-values-from-network-requests-to-your-clipboard)
* [Change the layout of the Network tool](#change-the-layout-of-the-network-tool)
   * [Hide the Filters pane](#hide-the-filters-pane)
   * [Big request rows](#big-request-rows)
   * [Hide the Overview pane](#hide-the-overview-pane)
* [See also](#see-also)


<!-- ====================================================================== -->
## Record network requests
<!-- https://developer.chrome.com/docs/devtools/network/reference/#record -->

By default, DevTools records all network requests in the **Network** tool, so long as DevTools is open.

![The Network tool](./reference-images/panel.png)


<!-- ------------------------------ -->
#### Stop recording network requests
<!-- https://developer.chrome.com/docs/devtools/network/reference/#stop-recording -->

To stop recording requests:

1. On the **Network** tool, click **Stop recording network log** (![Stop recording network log](./reference-images/record-on-icon.png)).  It turns grey to indicate that DevTools is no longer recording requests.

1. Press **Ctrl+E** (Windows, Linux) or **Command+E** (macOS) while the **Network** tool is in focus.


<!-- ------------------------------ -->
#### Clear requests
<!-- https://developer.chrome.com/docs/devtools/network/reference/#clear -->

To clear all requests from the Requests table, in the **Network** tool, click the **Clear network log** (![Clear](./reference-images/clear-requests-icon.png)) button:

![The 'Clear network log' button](./reference-images/clear-requests.png)

Or, press **Ctrl+L** (Windows, Linux, macOS) or **Command+K** (macOS) while the **Network** tool has focus.


<!-- ------------------------------ -->
#### Save requests across page loads
<!-- https://developer.chrome.com/docs/devtools/network/reference/#preserve-log -->

To save requests across page loads, on the **Network** tool, select the **Preserve log** checkbox:

![The Preserve Log checkbox](./reference-images/preserve-log.png)

DevTools saves all requests until you disable **Preserve log**.


<!-- ------------------------------ -->
#### Capture screenshots during page load
<!-- https://developer.chrome.com/docs/devtools/network/reference/#screenshots -->

You can capture screenshots to analyze what's displayed for users while waiting for your page to load.

To enable screenshots:

1. In DevTools, open the **Network** tool.

1. In the upper right within the **Network** tool, click the **Network settings** (gear) icon.  A row of checkboxes appears.

1. Select the **Capture screenshots** checkbox:

   ![Enabling 'Capture screenshots'](./reference-images/screenshot-box.png)

To capture a screenshot:

1. While the **Network** tool has focus, press **Ctrl+F5** to refresh the page.  Screenshots are captured during the page load and thumbnails are shown below the row of checkboxes.

   You can interact with the screenshots as follows.

1. Hover over a screenshot to display the point at which that screenshot was captured.  A yellow vertical line is displayed on the **Overview** chart pane.

   ![Hovering on a screenshot](./reference-images/screenshot-hover.png)

1. Click the thumbnail of a screenshot to filter out any requests that occurred after the screenshot was captured.

1. Double-click a screenshot thumbnail to zoom-in and view the screenshot.
 
1. Press **Esc** to close the screenshot viewer.


<!-- ------------------------------ -->
#### Replay XHR request
<!-- https://developer.chrome.com/docs/devtools/network/reference/#replay-xhr -->

To replay an XHR request, do one of the following in the **Requests** table:

* Select the request and press **R**.
* Right-click the request and select **Replay XHR**.

<!-- For example, the [Network tutorial](https://microsoftedge.github.io/Demos/network-tutorial/) demo page: -->

<!--
![Click Replay XHR](todo png: selecting-replay-xhr.png)
todo: need demo page that has XHR; else no Replay XHR menuitem
-->


<!-- ====================================================================== -->
## Change loading behavior
<!-- https://developer.chrome.com/docs/devtools/network/reference/#change_loading_behavior -->


<!-- ------------------------------ -->
#### Emulate a first-time visitor by disabling the browser cache
<!-- https://developer.chrome.com/docs/devtools/network/reference/#disable-cache -->

To emulate how a first-time user experiences your site, turn on the **Disable cache** checkbox.  DevTools disables the browser cache.  This feature more accurately emulates a first-time user's experience, because requests are served from the browser cache on repeat visits.

The **Disable Cache** checkbox:

![The Disable Cache checkbox](./reference-images/disable-cache-checkbox.png)


<!-- ---------- -->
###### Disable the browser cache from the Network conditions tool
<!-- Disable the browser cache from the Network conditions drawer  https://developer.chrome.com/docs/devtools/network/reference/#disable-cache-network-conditions -->

From the **Network** tool, you can open the **Network conditions** tool in the **Quick View** panel at the bottom of DevTools, and then disable the browser cache from there:

1. In the **Network** tool, click the **More network conditions** (![More network conditions icon](./reference-images/more-network-conditions-icon.png) button.  The **Network conditions** tool opens in the **Quick View** panel at the bottom of DevTools.

1. In the **Network conditions** tool, select the **Disable cache** checkbox:

   ![The Network Conditions tool in the Quick View panel, with the 'Disable cache' checkbox selected](./reference-images/network-conditions-cache.png)

See also:
* [Network conditions tool](../network-conditions/network-conditions-tool.md)


<!-- ------------------------------ -->
#### Manually clear the browser cache
<!-- https://developer.chrome.com/docs/devtools/network/reference/#clear-cache -->

To manually clear the browser cache at any time, right-click anywhere in the **Requests** table, and then select **Clear browser cache**:

![The 'Clear browser cache' right-click command](./reference-images/clear-browser-cache-menu.png)


<!-- ------------------------------ -->
#### Emulate offline
<!-- https://developer.chrome.com/docs/devtools/network/reference/#offline -->

A class of web apps, named [Progressive Web Apps](../progressive-web-apps/index.md) (PWA), are able to function offline with the help of **service workers**.<!-- [service workers](/web/fundamentals/getting-started/primers/service-workers) --> You may find it useful to quickly simulate a device that has no data connection, when you are building this type of app.

To simulate an offline network experience, select the **No throttling** dropdown menu > **Presets** > **Offline**.

The **Offline** dropdown menu:

![The Offline dropdown menu](./reference-images/offline-dropdown.png)


<!-- ------------------------------ -->
#### Emulate slow network connections
<!-- https://developer.chrome.com/docs/devtools/network/reference/#throttling -->

To emulate fast 4G, slow 4G, or 3G, select the corresponding preset from the **Throttling** dropdown menu in the action bar at the top:

![The Throttling dropdown menu](./reference-images/throttling-menu.png)

You can choose from different presets, such as:
* **Fast 4G**
* **Slow 4G**
* **3G**
* **Offline**

To add your own custom presets, click the **Throttling** menu, and then select **Custom** > **Add**.

A warning icon is displayed on the **Network** tool's tab, to remind you that throttling is enabled:

![The Throttled warning icon on the Network tab in the Activity Bar](./reference-images/throttled-icon.png)

See also [Simulate a slower network connection](../network/index.md#simulate-a-slower-network-connection) in _Inspect network activity_.


<!-- ---------- -->
###### Create custom throttling profiles
<!-- https://developer.chrome.com/docs/devtools/network/reference/#throttling-profile -->

In addition to presets, such as slow or fast 4G, you can also add your own custom throttling profiles:

1. At the top of the **Network** tool, click the **Throttling** dropdown menu, and then select **Custom** > **Add**.

   The DevTools **Settings** page opens, with the **Throttling** page selected.  This is the same as selecting **Customize and control DevTools**, and then selecting the **Throttling** page.

1. Set up a new throttling profile as described in [Set up custom network throttling profile](../settings/throttling.md#set-up-custom-network-throttling-profile) in _Throttling_.<!-- todo: test this link after merging https://github.com/MicrosoftDocs/edge-developer/pull/3473 to "main" then merging "main" into this PR 3405 -->

1. In the **Network** tool, click the **Throttling** dropdown menu, and then select your custom throttling profile, such as **Profile1**:

   ![A custom profile selected from the Throttling menu, causing a warning icon on the Network tab](./reference-images/custom-profile-selected.png)

A warning (![Throttling warning icon](./reference-images/throttling-warning-icon.png)) icon is displayed in the **Network** tab, to remind you that throttling is enabled.


<!-- ---------- -->
###### Throttle WebSocket connections
<!-- https://developer.chrome.com/docs/devtools/network/reference/#throttle-websocket -->

In addition to HTTP requests, DevTools throttles WebSocket connections.

To observe WebSocket throttling:

1. Initiate a new connection, for example, by using a test tool such as [Online Websocket Tester](https://www.piesocket.com/websocket-tester).

1. On the **Network** tool, select **No throttling** and send a message through the connection.

1. Create a very slow [custom throttling profile](#create-custom-throttling-profiles) (per above), for example, 10 kbit/s.  Such a slow profile will help you notice the difference.

1. On the **Network** tool, select the profile and send another message.

1. Toggle the **WS** filter, click your connection name, open the **Messages** tab, and check the time difference between sent and echoed messages with and without throttling. <!--todo: For example:-->

<!-- ![Messages sent and echoed with and without throttling](todo png: messages-sent-echoed-an.png) -->


<!-- ---------- -->
###### Emulate slow network connections from the Network Conditions tool
<!-- Emulate slow network connections from the Network conditions drawer  https://developer.chrome.com/docs/devtools/network/reference/#throttling-network-conditions -->

From the **Network** tool, you can open the **Network conditions** tool in the **Quick View** panel at the bottom of DevTools, and then throttle the network connection from there:

1. In the **Network** tool, click the **More network conditions** (![The 'More network conditions' icon](./reference-images/more-network-conditions-icon.png) button.  The **Network conditions** tool opens in the **Quick View** panel at the bottom of DevTools.

1. In the **Network conditions** tool, in the **Network throttling** menu, select a connection speed.

See also:
* [Network conditions tool](../network-conditions/network-conditions-tool.md)


<!-- ------------------------------ -->
#### Manually clear browser cookies
<!-- https://developer.chrome.com/docs/devtools/network/reference/#clear-cookies -->

To manually clear browser cookies at any time, right-click anywhere in the Requests table, and then select **Clear browser cookies**.

![The 'Clear browser cookies' right-click command in the Requests table of the Network tool](./reference-images/clear-browser-cookies-menu.png)


<!-- ------------------------------ -->
#### Override HTTP response headers
<!-- https://developer.chrome.com/docs/devtools/network/reference/#override-headers -->

See also:
* [Override webpage resources with local copies (Overrides tab)](../javascript/overrides.md)<!-- todo: add upstream section about HTTP response headers -->
* [Override files and HTTP response headers](https://developer.chrome.com/docs/devtools/overrides#override-headers) in _Override web content and HTTP response headers locally_.


<!-- ------------------------------ -->
#### Override the user agent
<!-- https://developer.chrome.com/docs/devtools/network/reference/#user-agent -->

To manually override the user agent:

1. In the **Network** tool, click the **More network conditions** (![More network conditions icon.](./reference-images/more-network-conditions-icon.png) button.  The **Network conditions** tool opens in the **Quick View** panel at the bottom of DevTools.

1. In the **Network conditions** tool, clear the **Use browser default** checkbox.  The other controls become available.

1. Select a user agent option from the menu, or enter a custom user agent in the text box.


<!-- ====================================================================== -->
## Set user agent client hints
<!-- downstream only section -->

If your site employs user agent client hints and you want to test them, you can set them either in the **Network conditions** tool or in [Emulate mobile devices (Device Emulation)](../device-mode/index.md).

To set user agent client hints in the **Network conditions** tool:

1. In the **Network** tool, click the **More network conditions** (![The 'More network conditions' icon.](./reference-images/more-network-conditions-icon.png) button.  The **Network conditions** tool opens in the **Quick View** panel at the bottom of DevTools.

1. In the **User agent** section, clear the **Use browser default** checkbox, and then expand **User agent client hints**:

   ![Setting user agent client hints](./reference-images/network-conditions-user-agent-client-hints.png)

1. In the **User agent** dropdown list, select a predefined browser and device.  Or, accept the default value of **Custom...**, and enter information in the **Enter a custom user agent** text box.

1. For either choice (predefined or custom), specify user agent client hints as follows:
   * **Brand** and **Version** such as *Edge* and *92*.  To add multiple brand/version pairs, click **+ Add Brand**.
   * **Full Browser Version** such as *92.0.1111.0*.
   * **Platform** and **Version** such as *Windows* and *10.0*.
   * **Architecture** such as *x86*.
   * **Device model** such as *Galaxy Nexus*.

   You can set or change any of the user agent client hints; there are no required values.

1. Select **Update**.

1. To verify changes, click **Console** and type `navigator.userAgentData`.  Expand the results as needed to view changes to user agent data.

See also:
* [User-Agent Client Hints](../../web-platform/user-agent-guidance.md#user-agent-client-hints) in _Detecting Microsoft Edge from your website_.


<!-- ====================================================================== -->
## Search requests
<!-- https://developer.chrome.com/docs/devtools/network/reference/#search -->

To search across request headers, payloads, and responses:

1. In the **Network** tool, click the **Search** (![Search icon](./reference-images/search-icon.png)) button.  Or, press **Ctrl+F** (Windows, Linux) or **Command+F** (macOS).

   The **Search** tab opens on the left side of the **Network** tool.

1. In the **Find** text box, enter your query string, and then press **Enter**.

   Optionally click the **Match case** button to turn on case sensitivity.  Optionally click the **Regular expression** button to turn on regular expressions.

1. Click one of the search results.  The **Network** tool highlights in yellow the request that matched.  The **Network** tool also opens the **Headers** or **Response** tab and highlights the string that matched there, if any.

<!-- ![The Search tab on the right in the Network tool](todo png: search-requests.png) -->

To refresh search results, in the **Search** tab, click the **Refresh** (![Refresh icon](./reference-images/refresh-search-icon.png)) button.

To clear search results, in the **Search** tab, click the **Clear search** (![Clear search icon](./reference-images/clear-search-icon.png)) button.

For more information on all the ways you can search in DevTools, see [Find source files for a page using the Search tool](../search/search-tool.md)


<!-- ====================================================================== -->
## Filter requests
<!-- https://developer.chrome.com/docs/devtools/network/reference/#filter - upstream section empty; below is like https://developer.chrome.com/blog/new-in-devtools-130#network-filters -->

You can filter requests by properties, by type, or by time, and you can hide data URLs.  The **More filters**<!-- constant label; tooltip varies --> dropdown list contains the following options and status checkmarks:
* **Hide data URLs**
* **Hide extension URLs**
* **Blocked response cookies**
* **Blocked requests**
* **3rd-party requests**

![The "Show only/hide requests" dropdown list](./reference-images/show-only-hide-requests-dropdown-list.png)

The dropdown list has a number on the left that tells you how many filters are selected within the dropdown list.

To bring back the old filter design (separate checkboxes), clear the DevTools **Settings** > **Experiments** > **Redesign of the filter bar in the Network panel** checkbox; see [Redesign of the filter bar in the Network panel](../experimental-features/index.md#redesign-of-the-filter-bar-in-the-network-panel) in _Experimental features in Microsoft Edge DevTools_.


<!-- ------------------------------ -->
#### Filter requests by properties
<!-- https://developer.chrome.com/docs/devtools/network/reference/#filter-by-property -->

Use the **Filter** text box to filter requests by properties, such as the domain or size of the request.

If the text box isn't displayed, the **Filters** pane is probably hidden; see [Hide the Filters pane](#hide-the-filters-pane), below.

The **Filter** text box:

![The Filter text box](./reference-images/filter-text-box.png)

To invert your filter, select the **Invert** checkbox next to the **Filter** box.

You can use multiple properties simultaneously by separating each property with a space.  For example, `mime-type:image/png larger-than:1K` displays all PNGs that are larger than 1 kilobyte.  The multi-property filters are equivalent to `AND` operations.  `OR` operations aren't supported.

The complete list of supported properties:

| Property | Details |
|:--- | :--- |
| `cookie-domain` | Show the resources that set a specific cookie domain. |
| `cookie-name` | Show the resources that set a specific cookie name. |
| `cookie-path` | Show the resources that set a specific cookie path. |
| `cookie-value` | Show the resources that set a specific cookie value. |
| `domain` | Only display resources from the specified domain.  You can use a wildcard character (`*`) to include multiple domains.  For example, `*.com` displays resources from all domain names ending in `.com`.  DevTools populates the autocomplete dropdown menu with all of the domains that are found. |
| `has-overrides` | Show requests that have overridden content, headers, any overrides (yes), or no overrides (no). You can add the corresponding Has overrides column to the request table. |
| `has-response-header` | Displays the resources that contain the specified HTTP response header.  DevTools populates the autocomplete dropdown menu with all of the response headers that are found. |
| `is` | Use `is:running` to find `WebSocket` resources. |
| `larger-than` | Displays resources that are larger than the specified size, in bytes.  Setting a value of `1000` is equivalent to setting a value of `1k`. |
| `method` | Displays resources that were retrieved over a specified HTTP method type.  DevTools populates the dropdown menu with all of the HTTP methods that are found. |
| `mime-type` | Displays resources of a specified MIME type.  DevTools populates the dropdown menu with all MIME types that are found. |
| `mixed-content` | Show all mixed content resources (`mixed-content:all`) or just the ones that are currently displayed (`mixed-content:displayed`). |
| `priority` | Show resources whose priority level matches the specified value. |
| `resource-type` | Show resources of a resource type, for example, image. DevTools populates the autocomplete drop-down with all resource types it has encountered. |
| `response-header-set-cookie` | Show raw `Set-Cookie` headers in the **Issues** tab.  Malformed cookies with incorrect `Set-Cookie` headers will be flagged in the **Network** tool. |
| `scheme` | Displays resources retrieved over unprotected HTTP (`scheme:http`) or protected HTTPS (`scheme:https`). |
| `set-cookie-domain` | Displays resources that have a `Set-Cookie` header with a `Domain` attribute that matches the specified value.  DevTools populates the autocomplete with all of the cookie domains that are found. |
| `set-cookie-name` | Displays resources that have a `Set-Cookie` header with a name that matches the specified value.  DevTools populates the autocomplete with all of the cookie names that are found. |
| `set-cookie-value` | Displays resources that have a `Set-Cookie` header with a value that matches the specified value.  DevTools populates the autocomplete with all of the cookie values that are found. |
| `status-code` | Displays resources that match the specific HTTP status code.  DevTools populates the autocomplete dropdown menu with all of the status codes that are found. |
| `url` | Show the resources that have a url matching the specified value. |


<!-- ------------------------------ -->
#### Filter requests by type
<!-- https://developer.chrome.com/docs/devtools/network/reference/#filter-by-type -->

<!-- horiz list -->
To filter requests by request type, click the buttons on the **Network** tool: **All**, **Fetch/XHR**, **Doc**, **CSS**, **JS**, **Font**, **Img**, **Media**, **Manifest**, **WS** (WebSocket), **Wasm** (WebAssembly), or **Other** (any other type not listed here).

If the buttons don't appear, the **Filters** pane might be hidden.  See [Hide the Filters pane](#hide-the-filters-pane), below.

To enable multiple type filters simultaneously, press and hold **Ctrl** (Windows, Linux) or **Command** (macOS) and then click the filters.

![Using the Type filters to display JS, CSS, and Document resources](./reference-images/type-filters.png)


<!-- ------------------------------ -->
#### Filter requests by time
<!-- https://developer.chrome.com/docs/devtools/network/reference/#filter-by-time -->

Click and drag left or right on the **Overview** pane to only display requests that were active during that time frame.  The filter is inclusive.  Any request that was active during the highlighted time is shown.

Filtering out any requests that were inactive around 300 ms:

![Filtering out any requests that were inactive around 300 ms](./reference-images/overview-filter.png)


<!-- ------------------------------ -->
#### Hide data URLs
<!-- https://developer.chrome.com/docs/devtools/network/reference/#hide_data_urls -->

[Data URLs](https://developer.mozilla.org/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) are small files embedded into other documents.  Any request that displays in the Requests table that starts with `data:` is a data URL.

To hide the requests, turn off the **Hide data URLs** checkbox:

![The Hide Data URLs checkbox](./reference-images/hide-data-urls.png)


<!-- ------------------------------ -->
#### Hide extension URLs
<!-- https://developer.chrome.com/docs/devtools/network/reference/#hide-extension-urls -->

To focus on the code you author, you can filter out irrelevant requests sent by extensions you may have installed in Microsoft Edge.  Extension requests have URLs that start with `chrome-extension://`.

To hide extension requests, in the **Filters** action bar, select the **More filters** dropdown menu, and then select **Hide extension URLs** so that a checkmark appears next to it.

<!-- ![Extension URLs hidden from the Requests table](todo png: extension-urls-hidden.png, for Filter Requests) -->

The status bar at the bottom displays the number of the shown requests out of the total.


<!-- ------------------------------ -->
#### Show only the requests with blocked response cookies
<!-- https://developer.chrome.com/docs/devtools/network/reference/#show-blocked-cookies -->

To filter out everything except the requests with response cookies blocked for any reason, in the **Filters** action bar, in the **3rd-party requests** (**More filters**) dropdown list, and then select **Blocked response cookies** so that a checkmark appears next to it.<!-- Try it on this [demo page](https://samesite-sandbox.glitch.me/). -->  Try it on the [Network tutorial](https://microsoftedge.github.io/Demos/network-tutorial/) demo page, though there are no blocked response cookies:

![The Requests table shows only the requests with blocked response cookies](./reference-images/blocked-response-cookies.png)

The status bar at the bottom displays the number of the shown requests out of the total.

To find out the reason why a response cookie was blocked, select the request (under **Name**), open its **Cookies** tab (to the right), and then hover over the **information** (![Information icon](./reference-images/information-icon-for-blocked-response-cookies.png)) button.

<!-- not in latest ui
Additionally, the **Network** tool shows a warning icon next to a request with cookies blocked either because of Edge flags or configuration.  Hover over the icon to see a tooltip with a clue and click it to go to the **Issues** tool for more information. -->

<!-- ![Warning icons next to a request blocked by Edge flags or configuration](./x/3pc-blocked.png) -->


<!-- ------------------------------ -->
#### Show only blocked requests
<!-- https://developer.chrome.com/docs/devtools/network/reference/#show-blocked -->

To filter out everything except blocked requests, in the **Filters** action bar, select **More filters** > **Blocked requests**, so that a checkmark appears.  To test this, you can use the **Network request blocking** tool in the **Quick View** panel at the bottom of DevTools; see [Block requests](./index.md#block-requests) in _Inspect network activity_.

<!-- ![The Requests table shows only blocked requests](todo png: blocked-requests.png, for Filter Requests) -->

The **Requests** table highlights blocked requests in red.  The status bar at the bottom displays the number of the shown requests out of the total.


<!-- ------------------------------ -->
#### Show only third-party requests
<!-- https://developer.chrome.com/docs/devtools/network/reference/#third-party -->

To filter out everything except the requests with origin that differs from page origin, in the **Filters** action bar, select **More filters** > **3rd-party requests**, so that a checkmark appears.  Try it on the [Network tutorial](https://microsoftedge.github.io/Demos/network-tutorial/) demo page.

![The Requests table shows only the third-party requests](./reference-images/third-party-requests.png)

The status bar at the bottom displays the number of the shown requests out of the total.


<!-- ====================================================================== -->
## Sort requests
<!-- https://developer.chrome.com/docs/devtools/network/reference/#sort_requests -->

By default, the requests in the **Requests** table are sorted by initiation time, but you can sort the table using other criteria.


<!-- ------------------------------ -->
#### Sort by column
<!-- https://developer.chrome.com/docs/devtools/network/reference/#sort-by-column -->

Click the header of any column in the **Requests** to sort requests by that column.


<!-- ------------------------------ -->
#### Sort by activity phase
<!-- https://developer.chrome.com/docs/devtools/network/reference/#sort-by-activity -->
<!-- Waterfall column was formerly on by default, as shown throughout upstream -->

The **Waterfall** column is off by default.  To turn on the **Waterfall** column: right-click a **Requests** table header, and then select the plain **Waterfall** menuitem that doesn't have a submenu.

To change how the **Waterfall** column sorts requests:

* Right-click the header of the Requests table, click **Waterfall**, and then select one of the following options:

   * **Start Time** - The first request that was initiated is placed at the top.
   
   * **Response Time** - The first request that started downloading is placed at the top.
   
   * **End Time** - The first request that finished is placed at the top.
   
   * **Total Duration** - The request with the shortest connection settings and request or response is placed at the top.
   
   * **Latency** - The request that waited the shortest time for a response is placed at the top.
      
These descriptions assume that each respective option is ranked from shortest to longest.  Click the header of the **Waterfall** column to reverse the order.

The following shows sorting the Waterfall by total duration.  The lighter portion of each bar is time spent waiting and the darker portion is time spent downloading bytes:

![Sorting the Waterfall by total duration](./reference-images/waterfall-total-duration.png)


<!-- ====================================================================== -->
## Analyze requests
<!-- https://developer.chrome.com/docs/devtools/network/reference/#analyze -->

So long as DevTools is open, it logs all requests in the **Network** tool.  Use the **Network** tool to analyze requests.


<!-- ------------------------------ -->
#### Display a log of requests
<!-- View a log of requests  https://developer.chrome.com/docs/devtools/network/reference/#requests -->

Use the **Requests** table to display a log of all requests made while DevTools has been open.  To reveal more information about each item, click or hover on requests.

![The Requests table](./reference-images/requests-table.png)

The Requests table displays the following columns by default:

- **Name**. The file name of the resource, or an identifier for the resource.
- **Status**. The HTTP status code.
- **Type**. The MIME type of the requested resource.
- **Initiator**. The following objects or processes can initiate requests:
  - **Parser**. The HTML parser.
  - **Redirect**. An HTTP redirect.
  - **Script**. A JavaScript function.
  - **Other**. Some other process or action, such as navigating to a page via a link or entering a URL in the address bar.
- **Size**. The combined size of the response headers plus the response body, as delivered by the server.
- **Time**. The total duration, from the start of the request to the receipt of the final byte in the response.
- **Fulfilled by**. Whether the request was fulfilled by the HTTP cache or the app's service worker.

The **Waterfall** column is off by default.  To turn on the The **Waterfall** column, right-click a Requests table header, and then select the plain **Waterfall** menuitem that doesn't have a submenu.


<!-- ---------- -->
###### Add or remove columns
<!-- https://developer.chrome.com/docs/devtools/network/reference/#columns -->

Right-click the header of the Requests table and select a column name to hide or show it.  The currently displayed columns have checkmarks next to them.

![Adding a column to the Requests table](./reference-images/requests-add-column.png)


<!-- ---------- -->
###### Add custom columns for response headers
<!-- Add custom columns https://developer.chrome.com/docs/devtools/network/reference/#custom-columns -->

To add a custom column to the Requests table:

1. Right-click the header of the Requests table and then select **Response Headers** > **Manage Header Columns**.

   The **Manage Header Columns** popup window opens.

1. Click the **Add custom header** button, enter the custom header name, and then click **Add**. 

   ![Adding a custom column to the Requests table](./reference-images/requests-add-custom-column.png)


<!-- ------------------------------ -->
#### Group requests by inline frames
<!-- https://developer.chrome.com/docs/devtools/network/reference/#group-by-frames -->

If inline frames on a page initiate a lot of requests, you can make the request log friendlier by grouping them.

To group requests by iframes, in the **Network** tool, click the **Network settings** (![Settings icon](./reference-images/network-settings-icon.png)) button, and then select the **Group by frame** checkbox.

<!-- ![The network request log with requests grouped by iframes](todo png: network-request-log-iframes.png) -->

To view a request initiated by an inline frame, expand it in the request log.


<!-- ------------------------------ -->
#### Display the timing relationship of requests
<!-- View the timing of requests in relation to one another  https://developer.chrome.com/docs/devtools/network/reference/#waterfall -->

Use the **Waterfall** column of the **Requests** pane to view the timing relationships of requests.  The default organization of the **Waterfall** column uses the start time of the requests.  So, requests that are farther to the left started earlier than the requests that are farther to the right.

The **Waterfall** column is off by default.  To turn on the The **Waterfall** column, right-click a Requests table header, and then select the plain **Waterfall** menuitem that doesn't have a submenu.

To see the different ways that you can sort the Waterfall, see [Sort by activity phase](#sort-by-activity-phase), above.

The **Waterfall** column of the **Requests** pane:

![The Waterfall column of the Requests pane](./reference-images/requests-waterfall.png)


<!-- ------------------------------ -->
#### Analyze the messages of a WebSocket connection
<!-- https://developer.chrome.com/docs/devtools/network/reference/#frames -->

To view the messages of a WebSocket connection:

1. Go to a webpage, such as the [Network tutorial](https://microsoftedge.github.io/Demos/network-tutorial/) demo page, or the [Online Websocket Tester](https://www.piesocket.com/websocket-tester).

1. Right-click the webpage, and then select **Inspect**.

   DevTools opens.

1. Select the **Network** tool.

1. Refresh the webpage.

1. Under the **Name** column of the **Requests** table, click the URL of the WebSocket connection.

1. Click the **Messages** tab.  The table shows the last 100 messages.

To refresh the table, re-click the name of the WebSocket connection under the **Name** column of the **Requests** table.

![The Messages tab](./reference-images/messages-tab.png)<!-- todo: sign up, show Messages tab -->

The table contains the following three columns:

*  **Data**.  The message payload.  If the message is plain text, it is displayed here.  For binary opcodes, this column displays the name and code of the opcode.  The following opcodes are supported: 
   * Continuation Frame
   * Binary Frame
   * Connection Close Frame
   * Ping Frame
   * Pong Frame

*  **Length**.  The length of the message payload, in bytes.

*  **Time**.  The time when the message was received or sent.

Messages are color-coded according to each type:

*  Outgoing text messages are light-green.
*  Incoming text messages are white.
*  WebSocket opcodes are light-yellow.
*  Errors are light-red.


<!-- ------------------------------ -->
#### Analyze events in a stream
<!-- https://developer.chrome.com/docs/devtools/network/reference/#event-stream -->

To view the events that servers stream through [Fetch API](https://web.dev/articles/introduction-to-fetch),<!-- todo: link to MDN instead --> EventSource API (see [Server-sent events](https://developer.mozilla.org/docs/Web/API/Server-sent_events)), and XHR:

1. Record network requests on a page that streams events, per [Record network requests](#record-network-requests), above.

1. In the **Network** tool, select a request, and then open the **EventStream** tab.

   <!-- ![The EventStream tab](./reference-images/event-stream.png) - not created -->

To filter events, specify a regular expression in the filter bar at the top of the **EventStream** tab.

To clear the list of captured events, click the **Clear** (![EventStream Clear icon](./reference-images/eventstream-clear-icon.png)) button.


<!-- ------------------------------ -->
#### Display a preview of a response body
<!-- View a preview of a response body  https://developer.chrome.com/docs/devtools/network/reference/#preview -->

To preview the contents of an HTTP response body:

1. In the **Network** tool, In the **Requests** table, in the **Name** column, click the name of a request.

1. In the sidebar, select the **Preview** tab:

   ![The Preview tab in the Network tool](./reference-images/resources-preview.png)

The **Preview** tab is mostly useful for viewing images.


<!-- ------------------------------ -->
#### Display a response body
<!-- View a response body  https://developer.chrome.com/docs/devtools/network/reference/#response -->

To display the response body to a request:

1. In the **Requests** table, in the **Name** column, click the name of the request.

1. In the sidebar, select the **Response** tab:

   ![The Response tab](./reference-images/resources-response.png)


<!-- ------------------------------ -->
#### Display HTTP headers
<!-- View HTTP headers  https://developer.chrome.com/docs/devtools/network/reference/#headers -->

To display HTTP header data about a request:

1. In the **Requests** table, click the name of the request.

1. In the sidebar, select the **Headers** tab, and then scroll down to the various sections:
   * **General**
   * **Early Hints Headers** (optional)
   * **Response Headers**
   * **Request Headers**

   ![The Headers panel](./reference-images/resources-headers.png)


<!-- ---------- -->
###### View HTTP header source
<!-- https://developer.chrome.com/docs/devtools/network/reference/#header-source -->

This feature doesn't exist anymore.<!-- todo -->

By default, the **Headers** tab shows header names alphabetically.  To display the HTTP header names in the order they were received:

1. Open the **Headers** tab for a request.  For more information, see [Display HTTP headers](#display-http-headers), above.

1. Click **view source**, next to the **Request Headers** or **Response Headers** section.


<!-- ---------- -->
###### Provisional headers warning
<!-- https://developer.chrome.com/docs/devtools/network/reference/#provisional-headers -->

Sometimes the **Headers** tab shows the warning message **Provisional headers are shown**.  This may be due to the following reasons:

* The request wasn't sent over the network but was served from a local cache, which doesn't store the original request headers.  In this case, you can disable caching to see the full request headers; see [Emulate a first-time visitor by disabling the browser cache](#emulate-a-first-time-visitor-by-disabling-the-browser-cache), above.

  <!-- ![Provisional headers warning message](todo png: provisional-headers-warning.png) -->

* The network resource isn't valid.  For example, execute `fetch("https://jec.fish.com/unknown-url/")`<!-- todo: ok url? --> in the **Console** tool.

  <!-- ![Provisional headers warning message](todo png: provisional-headers-warning-2.png) -->

DevTools can also display only provisional headers due to security reasons.


<!-- ------------------------------ -->
#### Display query string parameters
<!-- View request payload  https://developer.chrome.com/docs/devtools/network/reference/#payload -->

To display the query string parameters and form data of an HTTP request in a human-readable format:

<!-- upstream:
To view the request's payload, that is, its query string parameters and form data, select a request from the Requests table and open the Payload tab. -->

1. In the **Requests** table, click the name of the request.

1. In the sidebar, select the **Payload** tab:

  ![The Query String Parameters section in the Payload tab](./reference-images/resources-headers-query-string-parameters.png)

   To display the source of the query string parameters instead, click **view source**.


<!-- ---------- -->
###### View payload source
<!-- https://developer.chrome.com/docs/devtools/network/reference/#payload-source -->

By default, the **Network** tool shows the payload in a human-readable form.

To view the sources of query string parameters and form data, on the **Payload** tab, click **view source** next to the **Query String Parameters** or **Form Data** sections.

<!-- ![The view source buttons](todo png: the-view-source-buttons.png) -->


<!-- ---------- -->
###### Display URL-encoded query string parameters
<!-- View URL-decoded arguments of query string parameters  https://developer.chrome.com/docs/devtools/network/reference/#payload-encodings -->

To display query string parameters in a human-readable format, but with encodings preserved:

1. In the **Requests** table, click the name of the request.

1. In the sidebar, select the **Payload** tab.

1. Click **view decoded** or **view URL-encoded**.

   <!-- ![Toggle URL-encoding](todo png: toggle-url-encoding.png) -->


<!-- ------------------------------ -->
#### Display cookies
<!-- View cookies  https://developer.chrome.com/docs/devtools/network/reference/#cookies -->

To display the cookies sent in the HTTP header of a request:

1. In the **Requests** table, click the name of the request.

1. In the sidebar, select the **Cookies** tab:

   ![The Cookies panel](./reference-images/resources-cookies.png)

For more information about each of the columns, see [Fields](../storage/cookies.md#fields) in _View, edit, and delete cookies_.

To modify cookies, see [View, edit, and delete cookies](../storage/cookies.md).


<!-- ------------------------------ -->
#### Display the timing breakdown of a request
<!-- View the timing breakdown of a request  https://developer.chrome.com/docs/devtools/network/reference/#timing -->

To display the timing breakdown of a request:

1. In the Request table, click the name of the request.

1. In the sidebar, select the **Timing** tab.

   ![The Timing panel](./reference-images/resources-timing.png)

For a faster way to access the data, see [Preview a timing breakdown](#preview-a-timing-breakdown).

For more information about each of the phases that may be displayed in the **Timing** panel, see [Timing breakdown phases explained](#timing-breakdown-phases-explained).


<!-- ---------- -->
###### Preview a timing breakdown
<!-- https://developer.chrome.com/docs/devtools/network/reference/#timing-preview -->

To display a preview of the timing breakdown of a request, in the **Waterfall** column of the Requests table, hover on the entry for the request.

The **Waterfall** column is off by default.  To turn on the The **Waterfall** column, right-click a Requests table header, and then select the plain **Waterfall** menuitem that doesn't have a submenu.

![Previewing the timing breakdown of a request](./reference-images/resources-waterfall-hover.png)

To view the data without hovering, see the top of the present section, [Display the timing breakdown of a request](#display-the-timing-breakdown-of-a-request).


<!-- ---------- -->
###### Timing breakdown phases explained
<!-- https://developer.chrome.com/docs/devtools/network/reference/#timing-explanation -->

Each of these phases may appear in the **Timing** tab:

- **Queueing**. The browser queues requests when any of the following are true
  - There are higher priority requests.
  - There are already six TCP connections open for this origin, which is the limit. Applies to HTTP/1.0 and HTTP/1.1 only.
  - The browser is briefly allocating space in the disk cache.

- **Stalled**. The request could be stalled for any of the reasons described in **Queueing**.

- **DNS Lookup**. The browser is resolving the IP address for the request.

- **Initial connection**. The browser is establishing a connection, including TCP handshakes and retries and negotiating a Secure Socket Layer (SSL).

- **Proxy negotiation**. The browser is negotiating the request with a [proxy server](https://wikipedia.org/wiki/Proxy_server).

- **Request sent**. The request is being sent.

- **ServiceWorker Preparation**. The browser is starting up the service worker.

- **Request to ServiceWorker**. The request is being sent to the service worker.

- **Waiting (TTFB)**. The browser is waiting for the first byte of a response. TTFB stands for _Time To First Byte_. This timing includes one round trip of latency and the time the server took to prepare the response.

- **Content Download**. The browser is receiving the response.

- **Receiving Push**. The browser is receiving data for this response via HTTP/2 Server Push.

- **Reading Push**. The browser is reading the local data that was previously received.


<!-- ------------------------------ -->
#### Display initiators and dependencies
<!-- View initiators and dependencies  https://developer.chrome.com/docs/devtools/network/reference/#initiators-dependencies -->

To display the initiators and dependencies of a request, hold **Shift** and hover on the request in the **Requests** table.

*  The requests that initiated the hovered request are shown in green.
*  The dependencies of the hovered requests are shown in red.

![Displaying the initiators and dependencies of a request](./reference-images/resources-initiators-dependencies.png)

When the Requests table is ordered chronologically, if you hover on a line, the line preceding it displays a green request.  The green request is the initiator of the dependency.  If another green request is displayed on the line before that, that higher request is the initiator of the initiator.  And so on.


<!-- ------------------------------ -->
#### Display load events
<!-- View load events  https://developer.chrome.com/docs/devtools/network/reference/#load -->

DevTools displays the timing of the `DOMContentLoaded` and `load` events in multiple places on the **Network** tool:

* In the **Overview** pane with vertical lines.

* In the **Waterfall** column of the Request table with vertical lines.  The **Waterfall** column is off by default.  To turn on the The **Waterfall** column, right-click a Requests table header, and then select the plain **Waterfall** menuitem that doesn't have a submenu.

* In the **Summary** pane, at the bottom of the **Network** tool, with timing labels.

The `DOMContentLoaded` event is colored blue, and the `load` event is red.

![The locations of the DOMContentLoaded and load events on the Network tool](./reference-images/load-events.png)


<!-- ------------------------------ -->
#### Display the total number of requests
<!-- View the total number of requests  https://developer.chrome.com/docs/devtools/network/reference/#total-number -->

The total number of requests is listed in the **Summary** pane, at the bottom of the **Network** tool.

![The total number of requests since DevTools were opened](./reference-images/total-requests.png)

Caution: This number only tracks requests that have been logged since DevTools was opened.  If other requests occurred before DevTools was opened, those requests aren't counted.


<!-- ------------------------------ -->
#### Display the total download size
<!-- View the total size of transferred and loaded resources  https://developer.chrome.com/docs/devtools/network/reference/#total-size -->

The total download size of requests is listed in the **Summary** pane, at the bottom of the **Network** tool.

![The total download size of requests](./reference-images/total-download-size.png)

Caution: This number only tracks requests that have been logged since DevTools was opened.  If other requests occurred before DevTools was opened, the previous requests aren't counted.

To verify how large resources are after the browser uncompresses each item, see [display the uncompressed size of a resource](#display-the-uncompressed-size-of-a-resource).


<!-- ------------------------------ -->
#### Display the stack trace that caused a request
<!-- View the stack trace that caused a request  https://developer.chrome.com/docs/devtools/network/reference/#initiator-stack-trace -->

After a JavaScript statement requests a resource, hover on the **Initiator** column to display the stack trace leading up to the request.

![The stack trace leading up to a resource request](./reference-images/requests-initiator-stack.png)

<!-- [codepen.io/contoso/pen/yLBrOWa?editors=0010#0](https://codepen.io/contoso/pen/yLBrOWa?editors=0010#0) -->

<!--
```javascript
function init() {
  getData();
}

function getData() {
  fetch('https://httpbin.org/get?message=hi');
}

init();
```
-->


<!-- ------------------------------ -->
#### Display the uncompressed size of a resource
<!-- View the uncompressed size of a resource  https://developer.chrome.com/docs/devtools/network/reference/#uncompressed -->

To see both the transferred size and the uncompressed size of a resource at the same time:

1. In the upper right within the **Network** tool, click the **Network settings** (gear) icon.  A row of checkboxes appears.

1. Turn on the **Big request rows** checkbox.

1. Examine the **Size** column in the Request table. The top value is the transferred size, and the bottom value is the size of the resource after the browser uncompresses it:

   ![An example of uncompressed resources](./reference-images/requests-uncompressed-compare.png)


<!-- ====================================================================== -->
## Export requests data
<!-- https://developer.chrome.com/docs/devtools/network/reference/#export -->

You can export or copy the list of requests, with filters applied, in several ways described next.


<!-- ------------------------------ -->
#### Save all network requests to a HAR file
<!-- https://developer.chrome.com/docs/devtools/network/reference/#save-as-har -->

To save all network requests to a HAR file:

1. In the **Requests** table, right-click a request and then select **Save all as HAR with Content**.

   ![Selecting 'Save all as HAR with Content'](./reference-images/save-har-content.png)

1. DevTools saves all requests that have occurred since you opened DevTools to the HAR file.  You can't filter requests, and you can't save a single request.

Once you save a HAR file, you can import it back into DevTools for analysis by drag-and-dropping the HAR file into the **Requests** table.


<!-- incoming upstream content: -->
<!-- todo: clean up/ merge with above -->

HAR (HTTP Archive) is a file format used by several HTTP session tools to export the captured data.  The format is a JSON object with a particular set of fields.  See [HAR Analyzer](https://toolbox.googleapps.com/apps/har_analyzer/).

To reduce the chances of accidental leaks of sensitive information, by default you can export the "sanitized" network log in HAR format that excludes sensitive information such as `Cookie`, `Set-Cookie`, and `Authorization` headers.  If required, you can also export the log _with_ sensitive data.

To save all network requests to a HAR file, pick one of the two ways:

* Right-click any request in the **Requests** table and select **Copy** > **Save all [listed] as HAR (sanitized)** or **Save all [listed] as HAR (with sensitive data)**.

  <!-- ![Selecting 'Save all listed as HAR (sanitized)'](todo png: png) -->

* Click **Export HAR (sanitized)** <!-- todo: ![Download icon]() --> in the action bar at the top of the **Network** tool.

To export with sensitive data, first, turn on **Settings** <!-- todo: ![Settings icon]() -->  > **Preferences** > **Network** > the checkbox **Allow to generate HAR with sensitive data**, then click the **Export**<!--todo: "download" icon--> button and select **Export HAR (with sensitive data)** from the drop-down menu.<!-- todo: clean up; colon -->

<!-- ![The 'Export HAR' button in the action bar at the top with two export options enabled](todo png: export-har-button.png) -->

Once you have a HAR file, you can import it back into DevTools for analysis using [HAR Analyzer](https://toolbox.googleapps.com/apps/har_analyzer/) in two ways:

* Drag-and-drop the HAR file into the **Requests** table.
* Click **Import HAR**<!--todo: "upload" icon--> in the action bar at the top of the **Network** tool.

The **Network** tool reads and shows initiators for the requests imported from HAR files.  For initiators, see [Display a log of requests](#display-a-log-of-requests), above.


<!-- ------------------------------ -->
#### Copy a request, a filtered set of requests, or all of them to the clipboard
<!-- https://developer.chrome.com/docs/devtools/network/reference/#copy -->
<!-- todo: different than upstream content outline, which has lists:
Copy as
Copy all
Copy all listed
-->

<!-- old content to replace: -->

Under the **Name** column of the Requests table, right-click a request, click **Copy**, and then select one of the following options:

<!-- todo: update per latest ui -->
| Name | Details |
| --- | --- |
| **Copy Link Address** | Copy the URL of the request to the clipboard. |
| **Copy Response** | Copy the response body to the clipboard. |
| **Copy as Fetch** | &nbsp; |
| **Copy as cURL** | Copy the request as a cURL command. |
| **Copy All as Fetch** | &nbsp; |
| **Copy All as cURL** | Copy all requests as a chain of cURL commands. |
| **Copy All as HAR** | Copy all requests as HAR data. |
<!-- todo: add "Copy all listed" items -->

![Selecting 'Copy Response'](./reference-images/copy-response.png)<!-- todo: update per latest ui -->


<!-- the new, upstream content: -->

Under the **Name** column of the **Requests** table, right-click a request, hover over **Copy**, and then select one of the following options.

To copy a single request, its response, or stack trace:

* **Copy URL**. Copy the request's URL to the clipboard.
* **Copy as cURL**. Copy the request as a cURL command.
* **Copy as PowerShell**. Copy the request as a PowerShell command.
* **Copy as fetch**. Copy the request as a fetch call.
* **Copy as fetch (Node.js)**. Copy the request as a Node.js fetch call.
* **Copy response**. Copy the response body to the clipboard.
* **Copy stack trace**. Copy the request's stack track to the clipboard.

To copy all requests:

* **Copy all URLs**. Copy URLs of all requests to the clipboard.
* **Copy all as cURL**. Copy all requests as a chain of cURL commands.
* **Copy all as PowerShell**. Copy all requests as a chain of PowerShell commands.
* **Copy all as fetch**. Copy all requests as a chain of fetch calls.
* **Copy all as fetch (Node.js)**. Copy all requests as a chain of Node.js fetch calls.
* **Copy all as HAR (sanitized)**. Copy all requests as HAR data without sensitive data such as `Cookie`, `Set-Cookie`, and `Authorization` headers.
* **Copy all as HAR (with sensitive data)**. Copy all requests as HAR data with sensitive data.

<!-- ![Options for copying all requests](todo png: copy-options.png) -->

To copy a filtered set of requests, apply a filter (see [Filter requests](#filter-requests), above) to the network log, right-click a request, and then select:

* **Copy all listed URLs**. Copy URLs of all filtered requests to the clipboard.
* **Copy all listed as cURL**. Copy all filtered requests as a chain of cURL commands.
* **Copy all listed as PowerShell**. Copy all filtered requests as a chain of PowerShell commands.
* **Copy all listed as fetch**. Copy all filtered requests as a chain of fetch calls.
* **Copy all listed as fetch (Node.js)**. Copy all filtered requests as a chain of Node.js fetch calls.
* **Copy all listed as HAR (sanitized)**. Copy all filtered requests as HAR data without sensitive data such as `Cookie`, `Set-Cookie`, and `Authorization` headers.
* **Copy all listed as HAR (with sensitive data)**. Copy all filtered requests as HAR data with sensitive data.

<!-- ![Copy options for a filtered set of requests](todo png: copy-filtered.png) -->


<!-- ------------------------------ -->
#### Copy formatted response JSON to the clipboard
<!-- not in upstream -->

To copy the formatted JSON data of a JSON response:

1. In the Request table, click the name of the request that led to a JSON response.

1. In the sidebar, select the **Preview** tab.

1. Right-click the first line of the formatted JSON response preview and then select **Copy value**. 

   ![The Copy Value right-click command](./reference-images/copy-json-value.png)

   You can now paste the value into any editor.


<!-- ------------------------------ -->
#### Copy property values from network requests to your clipboard
<!-- not in upstream -->

To copy property values from network requests to your clipboard:

1. In the Request table, click the name of the request.

1. In the sidebar, select the **Payload** tab:

1. Expand one of the following sections.
    *  Request payload (JSON)
    *  Form Data
    *  Query String Parameters
    *  Request Headers
    *  Response Headers

1. Right-click a value and then select **Copy value**.  You can now paste the value into any editor.


<!-- ====================================================================== -->
## Change the layout of the Network tool
<!-- Change the layout of the Network panel  https://developer.chrome.com/docs/devtools/network/reference/#change_the_layout_of_the_network_panel -->

You can expand or collapse sections of the **Network** tool UI to focus important information.


<!-- ------------------------------ -->
#### Hide the Filters pane
<!-- Hide the Filters action bar  https://developer.chrome.com/docs/devtools/network/reference/#hide-filters -->

By default, DevTools shows the **Filters** pane.  To hide the **Filters** pane, select **Filter** (![Filter](./reference-images/filter-icon.png)).

![The Hide Filters button](./reference-images/hide-filters-button.png)


<!-- ------------------------------ -->
#### Use big request rows
<!-- https://developer.chrome.com/docs/devtools/network/reference/#request-rows -->

<!-- old content: -->
Use big request rows when you want more whitespace in your network requests table.  Some columns also provide a little more information when using large rows.  For example, the bottom value of the **Size** column is the uncompressed size of a request.

To enable large rows, select the **Big request rows** checkbox.  An example of large request rows in the **Requests** pane:

![An example of big request rows in the Requests pane](./reference-images/big-request-rows.png)


<!-- todo: merge -->
<!-- new upstream content: -->
Use big rows when you want more whitespace in your network requests table.  Some columns also provide a little more information when using big rows.  For example, the bottom value of the **Size** column is the uncompressed size of a request, and the **Priority** column shows both the initial (bottom value) and final (top value) fetch priority.

Open **Settings**, and then click **Big request rows** to see big rows.

Big request rows turned on.

Hide the Over



<!-- ------------------------------ -->
#### Hide the Overview pane
<!-- Hide the Overview track  https://developer.chrome.com/docs/devtools/network/reference/#hide-overview -->

By default, DevTools displays the **Overview** pane.  To hide the **Overview** pane, clear the **Show Overview** checkbox.

![The Show Overview checkbox](./reference-images/show-overview-off.png)


<!-- ====================================================================== -->
## See also
<!-- not in upstream -->

* [Inspect network activity](index.md) - step-by-step walkthrough and introduction to the **Network** tool.


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/devtools/network/reference/) and is authored by Kayce Basques.

[![Creative Commons License](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
