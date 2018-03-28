---
ms.assetid: b99ad4c6-acfe-4bea-bc7d-d210011f1db4
description: Learn how Media Source Extensions extends HTML5 video and audio elements to enable streaming without the need for plugins or special servers.
title: Dev guide - Media Source Extensions
author: libbymc
ms.author: libbymc
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Media Source Extensions (MSE)

Microsoft Edge supports [MPEG-DASH](http://go.microsoft.com/fwlink/p/?LinkID=533900) media streaming through [Media Source Extensions](Http://go.microsoft.com/fwlink/p/?LinkID=301313) (MSE). MSE extends the `HTMLMediaElement` ([`video`](https://msdn.microsoft.com/library/hh772959(v=vs.85).aspx) and [`audio`](https://msdn.microsoft.com/library/hh772923(v=vs.85).aspx) elements) to allow audio and video streaming without the need for plugins or special servers. MSE allows adaptive media streaming, live streaming, splicing videos, video editing, and more. 

You can build custom adaptive streaming solutions using Media Source Extensions. An adaptive streaming solution would look for the optimal bit rate, based on network bandwidth and CPU utilization, to provide the highest quality streaming experience. For example, if the network bandwidth drops, you can use MSE to programmatically switch the video stream to a lower bit rate. This reduces the quality of the image, but allows the video to keep playing without interruptions.

You can also dynamically splice videos together. This allows to you insert ads or other content during media playback without having to put the clips in the media files beforehand. 


## New in Microsoft Edge

Microsoft Edge introduced enhanced support for MSE to align with the current [W3C Media Source Extensions](http://go.microsoft.com/fwlink/p/?LinkID=386463) specification.  This includes:
* Updates to the [`VideoPlaybackQuality`](https://msdn.microsoft.com/library/dn270592(v=vs.85).aspx) object with new support for the [`corruptedVideoFrame`](https://msdn.microsoft.com/library/dn903680(v=vs.85).aspx) property
* Support for the [`mode`](https://msdn.microsoft.com/library/dn903679(v=vs.85).aspx) property for the [`SourceBuffer`](https://msdn.microsoft.com/library/dn255049(v=vs.85).aspx) object
* Support for [`VideoTracks`](https://msdn.microsoft.com/library/dn806264(v=vs.85).aspx).

## MPEG-DASH and streaming reference and resources

Here's a list of resources to get info on MPEG-DASH, Azure, tools, and more. 

### Microsoft resources
* [MPEG-DASH Tutorial](http://go.microsoft.com/fwlink/p/?LinkID=389861) gives you a good overview of DASH and how to use the dash.js player in your webpage. 
* [Microsoft Azure Media Services]( http://go.microsoft.com/fwlink/p/?LinkId=717865) is Microsoft's cloud computing solution. Azure Media Services can help you deploy full media apps with DASH or fallback technology, with or without Digital Rights Management (DRM) on many devices and platforms. 
* [HTML5 Audio and Video](https://msdn.microsoft.com/library/hh772500(v=vs.85).aspx) contains the Media Source Extensions and Encrypted Media Extensions reference content, which outlines the signature and some basic info about the APIs.
* [Smooth Streaming](http://go.microsoft.com/fwlink/p/?LinkID=386837) is an IIS Media services extension that lets you stream audio and video to Silverlight and other clients over HTTP connections. 
* [Microsoft Playready](http://go.microsoft.com/fwlink/p/?LinkID=386838) is a widely deployed DRM technology. 
* [Microsoft Azure Media Services](http://go.microsoft.com/fwlink/p/?LinkID=386842) offers DASH and other streaming solutions 

### Third party resources
Here are some links to specs, libraries, and tools that can help you learn more about MPEG-DASH and build your own files. 

* The ISO MPEG-DASH specification gives you an in-depth understanding of MPEG-DASH. The spec can be downloaded from [Dynamic adaptive streaming over HTTP (DASH) -- Part 1: Media presentation description and segment formats](http://go.microsoft.com/fwlink/p/?LinkID=389862).
* [Overview of MPEG-DASH Standard](http://go.microsoft.com/fwlink/p/?LinkID=533900) is an overview of PEG-DASH and links to specs and features from the DASH Industry Forum.
* The [dash.js library on GitHub](http://go.microsoft.com/fwlink/p/?LinkID=386757) gives you a DASH player framework that runs on any browser that supports MSE. 
* [MPEG-DASH MPD Validator](http://go.microsoft.com/fwlink/p/?LinkID=389108) checks your MPD file to it's compliant with the ISO MPEG-DASH spec. 
* [MP4box](http://go.microsoft.com/fwlink/p/?LinkID=389881) is a multimedia packaging tool and is part of the [GPAC nightly builds](http://go.microsoft.com/fwlink/p/?LinkID=389881). MP4Box helps you create MPEG-DASH files, as well as a whole range of conversions, multiplexing, splitting, and and other tasks. The [GPAC toolset](http://go.microsoft.com/fwlink/p/?LinkID=389882) includes MP4Box, MP4Client (a multimedia client), and server side tools. You can install just MP4Box or the whole suite of tools for processing video. 
* [MP4box Documentation](http://go.microsoft.com/fwlink/p/?LinkID=386752) gives you the full scope of ways to use MP4Box. 



## API Reference
[HTML5 Audio and Video](https://msdn.microsoft.com/library/hh772500(v=vs.85).aspx)

## Related Topics
[Online Professional Quality Video: Premium media experiences without plug-ins in Internet Explorer 11](http://go.microsoft.com/fwlink/p/?LinkID=391814)

## Specification
[Media Source Extensions](http://go.microsoft.com/fwlink/p/?LinkID=389293)


