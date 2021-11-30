---
description: Learn how to detect network issues in the Network panel of Microsoft Edge DevTools.
title: Network issues guide
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/04/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
<!-- Copyright Kayce Basques and Jonathan Garbee

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->
# Network issues guide

This guide shows you how to detect network issues or optimization opportunities in the Network panel of Microsoft Edge DevTools.

To learn the basics of the **Network** tool, navigate to [Get Started](./index.md).


<!-- ====================================================================== -->
## Queued or stalled requests

**Symptoms**

Six requests are downloading simultaneously.  After that, a series of requests are queued or stalled.  Once one of the first six requests finishes, one of the requests in the queue starts.

In the **Waterfall** in the following figure, the first six requests for the `edge-iconx1024.msft.png` asset start simultaneously.  The subsequent requests are stalled until one of the original six finishes.

:::image type="complex" source="../media/network-network-disabled-cache-resources-queue.msft.png" alt-text="An example of a queued or stalled series in the Network panel" lightbox="../media/network-network-disabled-cache-resources-queue.msft.png":::
   An example of a queued or stalled series in the **Network** tool
:::image-end:::

**Causes**

Too many requests are being made on a single domain.  On HTTP/1.0 or HTTP/1.1 connections, Microsoft Edge allows a maximum of six simultaneous TCP connections per host.

**Fixes**

*   Implement domain sharding if you must use HTTP/1.0 or HTTP/1.1.
*   Use HTTP/2.  Do not use domain sharding with HTTP/2.
*   Remove or defer unnecessary requests so that critical requests download earlier.


<!-- ====================================================================== -->
## Slow Time To First Byte (TTFB)

**Symptoms**

A request spends a long time waiting to receive the first byte from the server.

In the following figure, the long, green bar in the **Waterfall** indicates that the request was waiting a long time.  This was simulated using a profile to restrict network speed and add a delay.

:::image type="complex" source="../media/network-network-resources-using-dial-up-profile.msft.png" alt-text="An example of a request with a slow Time To First Byte" lightbox="../media/network-network-resources-using-dial-up-profile.msft.png":::
   An example of a request with a slow Time To First Byte
:::image-end:::

**Causes**

*   The connection between the client and server is slow.
*   The server is slow to respond.  Host the server locally to determine if it is the connection or server that is slow.  If you still get a slow Time To First Byte (TTFB) when accessing a local server, then the server is slow.

**Fixes**

*   If the connection is slow, consider hosting your content on a CDN or changing hosting providers.
*   If the server is slow, consider optimizing database queries, implementing a cache, or modifying your server configuration.


<!-- ====================================================================== -->
## Slow content download

**Symptoms**

A request takes a long time to download.

In the following figure, the long, blue bar in the **Waterfall** next to the png means it took a long time to download.

:::image type="complex" source="../media/network-network-resources-edge-devtools.msft.png" alt-text="An example of a request that takes a long time to download" lightbox="../media/network-network-resources-edge-devtools.msft.png":::
   An example of a request that takes a long time to download
:::image-end:::

**Causes**

*   The connection between the client and server is slow.
*   A lot of content is being downloaded.

**Fixes**

*   Consider hosting your content on a CDN or changing hosting providers.
*   Send fewer bytes by optimizing your requests.

<!-- ## Contribute knowledge  / Getting in touch

Do you have a network issue that should be added to this guide?

*   Send a tweet to [@EdgeDevTools](https://twitter.com/intent/tweet?text=@EdgeDevTools%20[Network%20Issues%20Guide%20Suggestion]).
*   Choose **Send Feedback** (![Send Feedback](../media/smile-icon.msft.png)) in the DevTools or select `Alt`+`Shift`+`I` (Windows, Linux) or `Option`+`Shift`+`I` (macOS) to provide feedback or feature requests.
*   [Open an issue](https://github.com/MicrosoftDocs/edge-developer/issues/new?title=%5BDevTools%20Network%20Issues%20Guide%20Suggestion%5D) on the docs repo.  -->


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/network/issues) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools \& Lighthouse) and [Jonathan Garbee](https://developers.google.com/web/resources/contributors#jonathan-garbee) (Google Developer Expert for Web Technology).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
