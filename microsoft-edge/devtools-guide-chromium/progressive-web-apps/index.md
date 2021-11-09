---
description: Use the Application panel to inspect, modify, and debug web app manifests, service workers, and service worker caches.
title: Debug Progressive Web Apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/04/2021
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
# Debug Progressive Web Apps

Use the **Application** panel to inspect, modify, and debug web app manifests, service workers, and service worker caches.

<!--Related Guides:

*   [Progressive Web Apps](/web/progressive-web-apps)  -->

<!--TODO:  Link web "Progressive Web Apps" section when available. -->

This guide only discusses the Progressive Web App features of the **Application** panel.  <!--If you're looking for help on the other panes, check out the last section of this guide, [Other Application panel guides](#other-application-panel-guides).  -->

<!--TODO:  Link to sections when available. -->

### Summary

*   Use the **Manifest** pane to inspect your web app manifest and trigger Add to Homescreen events.
*   Use the **Service Workers** pane for a whole range of service-worker-related tasks, like unregistering or updating a service, emulating push events, going offline, or stopping a service worker.
*   View your service worker cache from the **Cache Storage** pane.
*   Unregister a service worker and clear all storage and caches with a single button choose from the **Clear storage** pane.


<!-- ====================================================================== -->
## Web app manifest

If you want your users to be able to add your app to their mobile homescreens, you need a web app manifest.  The manifest defines how the app appears on the homescreen, where to direct the user when launching from homescreen, and what the app looks like on launch.

<!--Related Guides:

*   [Improve user experiences with a Web App Manifest](/web/fundamentals/web-app-manifest)
*   [Using App Install Banners](/web/fundamentals/app-install-banners)  -->

<!--TODO:  Link to sections when available. -->

After you have your manifest set up, you may use the **Manifest** pane of the **Application** panel to inspect it.

:::image type="complex" source="../media/manifest-pane.msft.png" alt-text="The Manifest Pane" lightbox="../media/manifest-pane.msft.png":::
   The **Manifest** Pane
:::image-end:::

*   To look at the manifest source, choose the link below **App Manifest** label (`https://airhorner.com/manifest.json` in the previous figure).
<!-- *   Choose the **Add to homescreen** button to simulate an Add to Homescreen event.  Check out the next section for more information.  -->
*   The **Identity** and **Presentation** sections just display fields from the manifest source in a more user-friendly display.
*   The **Icons** section displays every icon that you've specified.

<!--### Simulate Add to Homescreen events  -->

<!--A web app may only be added to a homescreen when the site is visited at least twice, with at least five minutes between visits.  While developing or debugging your Add to Homescreen workflow, the criteria is potentially inconvenient.
The **Add to homescreen** button on the **App Manifest** pane lets you simulate Add to Homescreen events whenever you want.  -->

<!--You may test out this feature with the [Microsoft I/O 2016 progressive web app](https://events.alpahabet.com/io2016/), which has proper support for Add to Homescreen.  Choosing on **Add to Homescreen** while the app is open prompts Microsoft Edge to display the "add this site to your shelf" banner, which is the desktop equivalent of the "add to homescreen" banner for mobile devices.  -->

<!--
:::image type="complex" source="../media/io.msft.png" alt-text="Add to desktop shelf" lightbox="../media/io.msft.png":::
   Add to desktop shelf
:::image-end:::
-->

<!--
> [!Tip]
> Keep the **Console** drawer open while simulating Add to Homescreen events.  The Console tells you if your manifest has any issues and logs other information about the Add to Homescreen lifecycle.  -->

<!--The **Add to Homescreen** feature may not yet simulate the workflow for mobile devices.  Notice how the "add to shelf" prompt was triggered in the screenshot above, even though DevTools is in Device Mode.  However, if you may successfully add your app to your desktop shelf, then it works for mobile, too.  -->

<!-- TODO: Rework content after sample app is created. -->

<!--If you want to test out the genuine mobile experience, you may connect a real mobile device to DevTools via [remote debugging](/debug/remote-debugging/remote-debugging), and then choose the **Add to Homescreen** button (on DevTools) to trigger the "add to homescreen" prompt on the connected mobile device.  -->

<!--TODO:  Link Debug "remote debugging" sections when available. -->


<!-- ====================================================================== -->
## Service workers

Service workers are a fundamental technology in the future web platform.  They are scripts that the browser runs in the background, separate from a web page.  The scripts allow you to access features that without the need of a web page or user interaction, like push notifications, background sync, and offline experiences.

<!--Related Guides:

*   [Intro to Service Workers](/web/fundamentals/primers/service-worker)
*   [Push Notifications: Timely, Relevant, and Precise](/web/fundamentals/push-notifications)  -->

<!-- [How Push Works](/web/fundamentals/push-notifications/how-push-works) -->

<!--TODO:  Link to sections when available. -->

The **Service Workers** pane in the **Application** panel is the main place in DevTools to inspect and debug service workers.

:::image type="complex" source="../media/service-workers-pane.msft.png" alt-text="The Service Workers pane" lightbox="../media/service-workers-pane.msft.png":::
   The **Service Workers** pane
:::image-end:::

*   If a service worker is installed to the currently open page, then it is listed on this pane.  For example, in the previous figure, there is a service worker installed for the scope of `https://weather-pwa-sample.firebaseapp.com`.
*   The **Offline** checkbox puts DevTools into offline mode.  This is equivalent to the offline mode available from the **Network** tool, or the `Go offline` option in the [Command Menu](../command-menu/index.md).
*   The **Update on reload** checkbox forces the service worker to update on every page load.
*   The **Bypass for network** checkbox bypasses the service worker and forces the browser to go to the network for requested resources.
*   The **Update** button performs a one-time update of the specified service worker.
*   The **Push** button emulates a push notification without a payload (also known as a **tickle**).
*   The **Sync** button emulates a background sync event.
*   The **Unregister** button unregisters the specified service worker.  Check out [Clear storage](#clear-storage) for a way to unregister a service worker and wipe storage and caches with a single button choose.
*   The **Source** line tells you when the currently running service worker was installed.  The link is the name of the source file of the service worker.  Choosing on the link sends you to the source of the service worker.
*   The **Status** line tells you the status of the service worker.  The ID number next to the green status indicator (`#36` in previous figure) is for the currently active Service Worker.  Next to the status, a **start** button (if the service worker is stopped) or a **stop** button (if the service worker is running) is displayed.  Service workers are designed to be stopped and started by the browser at any time.  Explicitly stopping your service worker using the **stop** button may simulate that.  Stopping your service worker is a great way to test how your code behaves when the service worker starts back up again.  It frequently reveals bugs due to faulty assumptions about persistent global state.
*   The **Clients** line tells you the origin that the service worker is scoped to.  The **focus** button is mostly useful when you've enabled the **show all** checkbox.  When that checkbox is enabled, all registered service workers are listed.  If you choose on the **focus** button next to a service worker that is running in a different tab, Microsoft Edge focuses on that tab.

If the service worker causes any errors, a new label called **Errors** shows
up.

<!--
:::image type="complex" source="../media/sw-error.msft.png" alt-text="Service worker with errors" lightbox="../media/sw-error.msft.png":::
   Service worker with errors
:::image-end:::
-->

<!--TODO:  Capture Service Worker Errors sample when available. -->
<!--TODO:  Link Web "How tickle works" sections when available. -->


<!-- ====================================================================== -->
## Service worker caches

The **Cache Storage** pane provides a read-only list of resources that have been cached using the (service worker) [Cache API](https://developer.mozilla.org/docs/Web/API/Cache).

:::image type="complex" source="../media/cache-pane-cache-storage-resources.msft.png" alt-text="The Cache Storage Pane" lightbox="../media/cache-pane-cache-storage-resources.msft.png":::
   The **Cache Storage** Pane
:::image-end:::

> [!NOTE]
> The first time you open a cache and add a resource to it, DevTools may not detect the change.  Refresh the page and to display the cache.

If you have two or more caches open, the caches display under the following **Cache Storage** dropdown.

:::image type="complex" source="../media/cache-pane-cache-storage.msft.png" alt-text="The Cache Storage dropdown" lightbox="../media/cache-pane-cache-storage.msft.png":::
   The **Cache Storage** dropdown
:::image-end:::


<!-- ====================================================================== -->
## Quota usage

Some responses within the **Cache Storage** pane may be flagged as being "opaque".<!-- [opaque](/web/fundamentals/glossary#opaque-response) -->  This refers to a response retrieved from a different origin, like from a **CDN**<!-- [CDN](/web/fundamentals/glossary#CDN) --> or remote API, when [CORS](https://fetch.spec.whatwg.org/#http-cors-protocol) is not enabled.

<!--TODO:  Link Web "CDN" section when available. -->
<!--TODO:  Link Web "opaque" section when available. -->

In order to avoid leakage of cross-domain information, significant padding is added to the size of an opaque response used for calculating storage quota limits (for example whether a `QuotaExceeded` exception is thrown) and reported by the `navigator.storage` API.

<!--TODO:  Link Estimating "`navigator.storage` API" sections when available. -->
<!-- [Estimating available storage space](whats-new/2017/08/estimating-available-storage-space) -->

The details of this padding vary from browser to browser, but for Microsoft Edge, this means that the **minimum size** that any single cached opaque response contributes to the overall storage usage is [approximately 7 megabytes](https://bugs.chromium.org/p/chromium/issues/detail?id=796060#c17).  Remember the padding when determining how many opaque responses you want to cache, since you may easily exceed storage quota limitations much sooner than you otherwise expect based on the actual size of the opaque resources.

Related Guides:

*   [Stack Overflow: What limitations apply to opaque responses?](https://stackoverflow.com/q/39109789/385997)
<!--*   [Alphabet work container: Understanding Storage Quota](/web/tools/Alphabet-work-container/guides/storage-quota#beware_of_opaque_responses)  -->

<!--TODO:  Link Work container storage quota for opaque responses section when available. -->


<!-- ====================================================================== -->
## Clear storage

The **Clear Storage** pane is a very useful feature when developing progressive web apps.  This pane lets you unregister service workers and clear all caches and storage with a single button choose.  <!--Check out the section below to learn more.  -->

<!--Related Guides:

*   [Clear Storage](/iterate/manage-data/local-storage#clear-storage)  -->

<!--TODO:  Link to sections when available. -->

<!--## Other Application panel guides

Check out the guides below for more help on the other panes of the **Application** panel.

Related Guides:

*   [Inspect page resources](/iterate/manage-data/page-resources)
*   [Inspect and manage local storage and caches](/iterate/manage-data/local-storage)  -->


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/progressive-web-apps) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools \& Lighthouse).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
