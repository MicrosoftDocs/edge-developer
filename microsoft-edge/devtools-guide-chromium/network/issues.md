---
title: Network Issues Guide
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/06/2020
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





# Network Issues Guide   




This guide shows you how to detect network issues or optimization opportunities in the Network panel of Microsoft Edge DevTools.  

See [Get Started][NetworkPerformance] to learn the basics of the Network panel.  

## Queued or stalled requests   

**Symptoms**  

Six requests are downloading simultaneously.  After that, a series of requests are queued or stalled.  Once one of the first six requests finishes, one of the requests in the queue starts.  

In the **Waterfall** in [Figure 1](#figure-1), the first six requests for the `edge-iconx1024.msft.png` asset start simultaneously.  The subsequent requests are stalled until one of the original six finishes.  

> ##### Figure 1  
> An example of a queued or stalled series in the Network panel  
> ![An example of a queued or stalled series in the Network panel][ImageStalled]  

**Causes**  

Too many requests are being made on a single domain.  On HTTP/1.0 or HTTP/1.1 connections, Microsoft Edge allows a maximum of six simultaneous TCP connections per host.  

**Fixes**  

*   Implement domain sharding if you must use HTTP/1.0 or HTTP/1.1.  
*   Use HTTP/2.  Do not use domain sharding with HTTP/2.  
*   Remove or defer unnecessary requests so that critical requests download earlier.  

## Slow Time To First Byte (TTFB)   

**Symptoms**  

A request spends a long time waiting to receive the first byte from the server.  

In [Figure 2](#figure-2), the long, green bar in the **Waterfall** indicates that the request was waiting a long time.  This was simulated using a profile to restrict network speed and add a delay.  

> ##### Figure 2  
> An example of a request with a slow Time To First Byte  
> ![An example of a request with a slow Time To First Byte][ImageSlowTimeToFirstByte]  

**Causes**  

*   The connection between the client and server is slow.  
*   The server is slow to respond.  Host the server locally to determine if it is the connection or server that is slow.  If you still get a slow Time To First Byte \(TTFB\) when accessing a local server, then the server is slow.  

**Fixes**  

*   If the connection is slow, consider hosting your content on a CDN or changing hosting providers.  
*   If the server is slow, consider optimizing database queries, implementing a cache, or modifying your server configuration.  

## Slow content download   

**Symptoms**  

A request takes a long time to download.  

In [Figure 3](#figure-3), the long, blue bar in the **Waterfall** next to the png means it took a long time to download.  

> ##### Figure 3  
> An example of a request that takes a long time to download  
> ![An example of a request that takes a long time to download][ImageSlowContentDownload]  

**Causes**  

*   The connection between the client and server is slow.  
*   A lot of content is being downloaded.  

**Fixes**  

*   Consider hosting your content on a CDN or changing hosting providers.  
*   Send fewer bytes by optimizing your requests.  

## Contribute knowledge  

Got a network issue that should be added to this guide?  

*   Send a tweet to [@EdgeDevTools][MicrosoftEdgeTweet].  
*   Click **Send Feedback** ![Send Feedback][ImageSendFeedbackIcon] in the DevTools or press `Alt` + `Shift` + `I` \(Windows\) or `Option` + `Shift` + `I` \(macOS\) to provide feedback or feature requests.  
*   [Open an issue][WebFundamentalsIssue] on the docs repo.  


 



<!-- image links -->  

[ImageSendFeedbackIcon]: images/smile-icon.msft.png  

[ImageStalled]: images/network-disabled-cache-resources-queue.msft.png "Figure 1: An example of a queued or stalled series in the Network panel"  
[ImageSlowTimeToFirstByte]: images/network-resources-using-dial-up-profile.msft.png "Figure 2: An example of a request with a slow Time To First Byte"  
[ImageSlowContentDownload]: images/network-resources-edge-devtools.msft.png "Figure 3: An example of a request that takes a long time to download"  

<!-- links -->  

[NetworkPerformance]: index.md "Inspect Network Activity In Microsoft Edge DevTools"  

[MicrosoftEdgeTweet]: https://twitter.com/intent/tweet?text=@EdgeDevTools%20[Network%20Issues%20Guide%20Suggestion]  
[WebFundamentalsIssue]: https://github.com/MicrosoftDocs/edge-developer/issues/new?title=%5BDevTools%20Network%20Issues%20Guide%20Suggestion%5D "New Issue - MicrosoftDocs/edge-developer"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/network/issues) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\) and [Jonathan Garbee][JonathanGarbee] \(Google Developer Expert for Web Technology\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
[JonathanGarbee]: https://developers.google.com/web/resources/contributors/jonathangarbee
