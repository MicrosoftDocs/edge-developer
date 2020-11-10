---
description: All about Service Worker improvements and how to use them.
title: Service Worker Improvements
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 10/19/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, service worker, PWA
---
# Service Worker Improvements  
Learn more about your [service workers][MDNServiceWorkerAPI] and the network requests that pass through them with our **service worker improvements** in the **Network**, **Application**, and **Sources** panes. With these changes, you can do the following tasks.

+ Debug based on Service Worker timelines:

   startup of a request and how long the bootstrap took

   service worker registration updates

   [fetch event][MDNFetchEventAPI] handler execution of a request

   all the fetch events executed for loading a client.
+ Explore the execution details of fetch event handlers, install event handlers, and activate event handlers.
+ Step into and out of fetch event handler with [page script information](#sources).

These experiences span three different developer tools  
1.  The [Network](#network) pane.  Select a network request that ran through a service worker and you'll access the corresponding service worker's timeline in the **Timing** tab.
1.  The [Application](#application) pane.  Debug the service workers themselves as a whole by navigating to the **Service Workers** pane. 
 1.  The [Sources](#sources) pane.  Access page script information when stepping into fetch event handlers.  

## Network
:::image type="complex" source="../media/sw-network-timeline.png" alt-text="Service worker timeline in the Network tab" lightbox="../media/sw-network-timeline.png":::
   Network view  
:::image-end:::  

The service worker debugging features in the Network pane can be accessed directly from the Network pane or they can be triggered from the Application pane. 

###Request routing

To make request routing easier to visualize, we created timelines that display the service worker startup and the respondWith fetch events. Select the network request--that went through a service worker--you're debugging then open the Timing tab.
###Fetch events

To learn more about the respondWith fetch events, select the dropdown arrow to the left of the respondWith. You'll find more details about the **Original Request** and **Response Received** with the corresponding dropdown arrows.

## Application 
:::image type="complex" source="../media/sw-application-timeline.png" alt-text="Application view" lightbox="../media/sw-application-timeline.png":::
   Application view  
:::image-end:::  

###Service worker update timeline

We've added a timeline in the Application pane to reflect the service worker's update lifecycle. It will display the installation and activation events. Each of these events will have a corresponding dropdown arrow to give you more details.

###Request routing and fetch events

You can now access the service worker timelines through the Network pane in the console drawer. This feature benefits performance, minimizes UI duplication, and creates a more comprehensive debugging experience. Just open the service worker you're debugging and select on the **Network** button to open up the [request routing experience](#network). Use the **respondWith** dropdowns for fetch event request and response information. The Network pane will pop open to display the network requests that went through the service worker you're debugging. This automatic filter is a way to narrow down your exploration.

##Sources
:::image type="complex" source="../media/sw-sources.png" alt-text="DOM view" lightbox="../media/sw-sources.png":::
   DOM view  
:::image-end:::

When setting a break point in the fetch handler, you'll find more stack information. These details lead to where the resource is requested in the page script. When the debugger pauses inside a fetch handler, we show a combined stack information in the pane to the right. You can then move around in the stack frames. 

###Future work

We might further develop the cache detail and are investigating more ways that we can improve the service worker debugging experience for [Progressive Web Application][MDNPWA] developers.

## Getting in touch with the Microsoft Edge DevTools team
The Microsoft Edge Devtools team is working on adding more functionality for your service worker needs based on asks from users like you.  Send your feedback to help improve the Microsoft Edge DevTools.  Select the feedback icon in the DevTools or press `Alt`+`Shift`+`I` \(Windows\) or press `Option`+`Shift`+`I` \(macOS\) and enter any feedback or feature requests you have for the DevTools.  

<!-- links -->  
[MDNServiceWorkerAPI]: https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API "service workers | MDN"  
[MDNPWA]: https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps "progressive web applications (PWA) | MDN"  
[MDNFetchEventAPI]: https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent