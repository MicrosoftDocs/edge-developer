---
title: Debug a Progressive Web App (PWA)
description: Use the Application panel to inspect, modify, and debug web app manifests, service workers, and service worker caches.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 03/13/2026
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
# Debug a Progressive Web App (PWA)

Use the **Application** tool to inspect, modify, and debug a PWA's web app manifests, service workers, and service worker caches.  The **Application** tool includes the following panes for PWA features:

*  Use the **Manifest** pane to inspect your web app manifest and trigger "Add to Homescreen" events.

*  Use the **Service workers** pane for service-worker-related tasks, such as:
   * Unregistering or updating a service.
   * Emulating push events.
   * Going offline.
   * Stopping a service worker.

*  Use the **Cache Storage** pane to view your service worker cache.

*  Use the **Storage** pane to unregister a service worker and clear all storage and caches.

The features that are discussed below are features of the **Application** tool are relevant for PWAs.  For help on the other features and panes in the **Application** tool, see:
* [View the resource files that make up a webpage](../resources/index.md)
* [View and edit local storage](../storage/localstorage.md)

See also:
* [Overview of Progressive Web Apps (PWAs)](../../progressive-web-apps/index.md)


<!-- ====================================================================== -->
## Web app manifest

If you want your users to be able to add your app to their mobile homescreens, you need a web app manifest.  The manifest defines how the app appears on the homescreen, where to direct the user when launching from homescreen, and what the app looks like on launch.

<!--Related Guides:

* [Improve user experiences with a Web App Manifest](/web/fundamentals/web-app-manifest)
* [Using App Install Banners](/web/fundamentals/app-install-banners)  -->

<!--TODO:  Link to sections when available. -->

After you have your manifest set up, you can use the **App Manifest** pane of the **Application** tool to inspect your manifest:

![The Manifest Pane](./index-images/manifest-pane.png)

The **App Manifest** pane contains the following sections:
* Manifest link
* **Identity**
* **Presentation**
* **Protocol Handlers**
* **Icons**
* **Window Controls Overlay**
* **Screenshot #1**
* **Screenshot #2**

*  To look at the manifest source, click the link below the **App Manifest** label (`manifest.json` in the previous figure, which opens `https://airhorner.com/manifest.json`).
<!-- *  Click the **Add to homescreen** button to simulate an Add to Homescreen event.  Check out the next section for more information.  -->

*  The **Identity** and **Presentation** sections display fields from the manifest source in a more user-friendly display.

*  The **Icons** section displays every icon that's been specified in the manifest.


<!--#### Simulate Add to Homescreen events  -->

<!--A web app may only be added to a homescreen when the site is visited at least twice, with at least five minutes between visits.  While developing or debugging your Add to Homescreen workflow, the criteria is potentially inconvenient.
The **Add to homescreen** button on the **App Manifest** pane lets you simulate Add to Homescreen events whenever you want.  -->

<!--You can test out this feature with the [Microsoft I/O 2016 progressive web app](https://events.alpahabet.com/io2016/), which has proper support for Add to Homescreen.  Choosing on **Add to Homescreen** while the app is open prompts Microsoft Edge to display the "add this site to your shelf" banner, which is the desktop equivalent of the "add to homescreen" banner for mobile devices.  -->

<!--
![Add to desktop shelf](../media/io.png)
-->

<!--
> [!Tip]
> Keep the **Console** open in the **Quick View** panel at the bottom of DevTools while simulating Add to Homescreen events.  The Console tells you if your manifest has any issues and logs other information about the Add to Homescreen lifecycle.  -->

<!--The **Add to Homescreen** feature cannot yet simulate the workflow for mobile devices.  Notice how the "add to shelf" prompt was triggered in the screenshot above, even though DevTools is in Device Mode (Device Emulation).  However, if you can successfully add your app to your desktop shelf, then it works for mobile, too.  -->

<!-- TODO: Rework content after sample app is created. -->

<!--If you want to test out the genuine mobile experience, you can connect a real mobile device to DevTools via [remote debugging](/debug/remote-debugging/remote-debugging), and then click the **Add to Homescreen** button (on DevTools) to trigger the "add to homescreen" prompt on the connected mobile device.  -->

<!--TODO:  Link Debug "remote debugging" sections when available. -->


<!-- ====================================================================== -->
## Service workers

Service workers are a fundamental technology in the web platform.  Service workers are scripts that the browser runs in the background, separate from a webpage.  These scripts enable you to access features that don't need a webpage or user interaction, such as push notifications, background sync, and offline experiences.

<!--Related Guides:

* [Intro to Service Workers](/web/fundamentals/primers/service-worker) - not found: https://learn.microsoft.com/web/fundamentals/primers/service-worker
* [Push Notifications: Timely, Relevant, and Precise](/web/fundamentals/push-notifications)  -->

<!-- [How Push Works](/web/fundamentals/push-notifications/how-push-works) -->

<!--TODO:  Link to sections when available. -->

The **Service workers** pane in the **Application** tool is the main place in DevTools to inspect and debug service workers:

![The Service workers pane](./index-images/service-workers-pane.png)<!-- todo: latest ui has 'w' -->

*  If a service worker is installed to the currently open page, then it is listed on this pane.  For example, in the previous figure, there is a service worker installed for the scope of `https://weather-pwa-sample.firebaseapp.com`.

*  The **Offline** checkbox puts DevTools into offline mode.  This is equivalent to the offline mode available from the **Network** tool, or the `Go offline` option in the [Command Menu](../command-menu/index.md).

*  The **Update on reload** checkbox forces the service worker to update on every page load.

*  The **Bypass for network** checkbox bypasses the service worker and forces the browser to go to the network for requested resources.

*  The **Update** button performs a one-time update of the specified service worker.

*  The **Push** button emulates a push notification without a payload (also known as a **tickle**).

*  The **Sync** button emulates a background sync event.

*  The **Unregister** button unregisters the specified service worker.  Check out [Storage](#storage) for a way to unregister a service worker and wipe storage and caches with a single button click.

*  The **Source** line tells you when the currently running service worker was installed.  The link is the name of the source file of the service worker.  Choosing on the link sends you to the source of the service worker.

*  The **Status** line tells you the status of the service worker.  The ID number next to the green status indicator (`#36` in previous figure) is for the currently active service worker.  Next to the status, a **start** button (if the service worker is stopped) or a **stop** button (if the service worker is running) is displayed.  Service workers are designed to be stopped and started by the browser at any time.  Explicitly stopping your service worker using the **stop** button may simulate that.  Stopping your service worker is a great way to test how your code behaves when the service worker starts back up again.  It frequently reveals bugs due to faulty assumptions about persistent global state.

*  The **Clients** line tells you the origin that the service worker is scoped to.  The **focus** button is mostly useful when you've enabled the **show all** checkbox.  When that checkbox is enabled, all registered service workers are listed.  If you click the **focus** button next to a service worker that is running in a different tab, Microsoft Edge focuses on that tab.

If the service worker causes any errors, a new label called **Errors** shows up.

<!--
![Service worker with errors](../media/sw-error.png)
-->

<!--TODO:  Capture "Service Worker Errors" sample when available. -->
<!--TODO:  Link Web "How tickle works" sections when available. -->


<!-- ====================================================================== -->
## Service worker caches

The **Cache Storage** pane provides a read-only list of resources that have been cached using the (service worker) [Cache API](https://developer.mozilla.org/docs/Web/API/Cache):

![The Cache Storage Pane](./index-images/cache-pane-cache-storage-resources.png)

The first time you open a cache and add a resource to it, DevTools might not detect the change.  Refresh the page to display the cache.

All open caches are listed under the **Cache Storage** expander.


<!-- ====================================================================== -->
## Quota usage

Some responses within the **Cache Storage** pane may be flagged as being "opaque".<!-- [opaque](/web/fundamentals/glossary#opaque-response) -->  This refers to a response retrieved from a different origin, like from a **CDN**<!-- [CDN](/web/fundamentals/glossary#CDN) --> or remote API, when [CORS](https://fetch.spec.whatwg.org/#http-cors-protocol) isn't enabled.

<!--TODO:  Link Web "CDN" section when available. -->
<!--TODO:  Link Web "opaque" section when available. -->

In order to avoid leakage of cross-domain information, significant padding is added to the size of an opaque response used for calculating storage quota limits (for example whether a `QuotaExceeded` exception is thrown) and reported by the `navigator.storage` API.

<!--TODO:  Link Estimating "`navigator.storage` API" sections when available. -->
<!-- [Estimating available storage space](whats-new/2017/08/estimating-available-storage-space) -->

The details of this padding vary from browser to browser, but for Microsoft Edge, this means that the **minimum size** that any single cached opaque response contributes to the overall storage usage is [approximately 7 megabytes](https://bugs.chromium.org/p/chromium/issues/detail?id=796060#c17).  Remember the padding when determining how many opaque responses you want to cache, since you may easily exceed storage quota limitations much sooner than you otherwise expect based on the actual size of the opaque resources.

Related Guides:

* [Stack Overflow: What limitations apply to opaque responses?](https://stackoverflow.com/q/39109789/385997)
<!--* [Alphabet work container: Understanding Storage Quota](/web/tools/Alphabet-work-container/guides/storage-quota#beware_of_opaque_responses)  -->

<!--TODO:  Link Work container storage quota for opaque responses section when available. -->


<!-- ====================================================================== -->
## Storage

The **Storage** pane is a very useful feature when developing progressive web apps.  This pane lets you unregister service workers and clear all caches and storage with a single button click.  <!--Check out the section below to learn more.  -->

<!--Related Guides:

* [Clear Storage](/iterate/manage-data/local-storage#clear-storage)  -->

<!--TODO:  Link to sections when available. -->

<!--## Other Application panel guides

Check out the guides below for more help on the other panes of the **Application** tool.

Related Guides:

* [Inspect page resources](/iterate/manage-data/page-resources)
* [Inspect and manage local storage and caches](/iterate/manage-data/local-storage)  -->


<!-- ====================================================================== -->
## Service worker update timeline

<!-- todo: 
The [Service worker update timeline] section:
https://learn.microsoft.com/en-us/microsoft-edge/devtools/service-workers/#service-worker-update-timeline
will become a bullet point in 
the list that describes the UI in 
[Service workers](https://learn.microsoft.com/en-us/microsoft-edge/devtools/progressive-web-apps/#service-workers) in _Debug a Progressive Web App (PWA)_.
At the end of the list, 
after the bullet that says 
"The Clients line tells you the ...", 
add a list item that describes the Update Cycle section, eg:

The **Update Cycle** section reflects the update lifecycle of the service worker.
This timeline displays the installation and activation events.
Each event has a corresponding dropdown arrow to display more details.
-->

<!-- todo: 
The [Request routing and fetch events] section:
https://learn.microsoft.com/en-us/microsoft-edge/devtools/service-workers/#service-worker-update-timeline

Should become a new h4 section at the end of [Service workers](https://learn.microsoft.com/en-us/microsoft-edge/devtools/progressive-web-apps/#service-workers) in _Debug a Progressive Web App (PWA)_, called eg [Display network requests handled by a service worker].

This new section will describe how to
click on the **Network requests** button that's in 
the **Service workers** pane of the **Application** tool 
to open the **Network** tool, 
with a filter that only shows 
the requests that were handled by this service worker.
-->

The **Application** tool helps you work with service workers and the network requests that pass through each service worker.

For example, the following tasks are supported:<!-- todo: how? where? -->

* Debug based on service worker timelines.<!-- todo: how? where? -->
    * The start of a request and duration of the bootstrap.
    * Update to service worker registration.<!-- todo: how? where? -->
    * The runtime of a request using the [fetch event](https://developer.mozilla.org/docs/Web/API/FetchEvent) handler.
    * The runtime of all fetch events for loading a client.
* Explore the runtime details of fetch event handlers, install event handlers, and activate event handlers.<!-- todo: how? where? -->
* Step into and out of fetch event handler with page script information, in the **Sources** tool.

Features for working on service workers are in the following tools:

* The **Network** tool:

   * Select a network request that runs through a service worker and access the corresponding timeline of the service worker in the **Timing** tool<!-- todo: what is the Timing tool, how to nav to it, how to use it? --> within the **Network** tool.  See [Service workers](../network/reference.md#service-workers) in _Network features reference_.

* The **Application** tool:

   * To debug a service worker, use the **Service workers** page in the **Application** tool.

* The **Sources** tool:

   * Access page script information when stepping into fetch event handlers.  See [Viewing stack information for a service worker](../sources/index.md#viewing-stack-information-for-a-service-worker) in _Sources tool overview_.


<!-- ------------------------------ -->
#### Timeline

![Application view](./application-tool-images/sw-application-timeline.png)

A timeline in the **Application** tool reflects the update lifecycle of the service worker.  This timeline displays the installation and activation events.

Each of the events have a corresponding dropdown arrow to give you more details.

See also:
* [Viewing stack information for a service worker](../sources/index.md#viewing-stack-information-for-a-service-worker) in _Sources tool overview_.
* [Service workers](../network/reference.md#service-workers) in _Network features reference_.
* [Service Worker API](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) - at MDN, about service workers.


<!-- ------------------------------ -->
#### Request routing and fetch events

You can access service worker timelines through the **Network** tool.  This feature benefits performance, minimizes UI duplication, and creates a comprehensive debugging experience.

To access the service worker timelines:

1. Open a service worker.

1. Click the **Network requests** button, in the **Application** tool.

   The **Timing** tab opens within the **Network** tool, showing information about request routing, filtering on `is:service-worker-intercepted` in the **Filter** text box.

1. Use the **respondWith** dropdown arrows for fetch event request and response information.

The **Network** tool displays the network requests that went through the service worker you are debugging.  The automatic filter is a way to narrow down your exploration.

See also:
* [Inspect network activity](./index.md)


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/devtools/progressive-web-apps/) and is authored by Kayce Basques.

[![Creative Commons License](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
