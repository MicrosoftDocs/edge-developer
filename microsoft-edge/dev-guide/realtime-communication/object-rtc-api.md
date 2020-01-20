---
ms.assetid: ef705c70-73f8-445b-84ed-4f83679f1980
description: Learn how Object Real-Time Communications (ORTC) enables media to be streamed in real-time directly between web browsers, mobile devices, or servers.
title: Dev guide - Object RTC API
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/15/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Object RTC API

Object Real-Time Communications (ORTC) enables media (audio and/or video) to be streamed (sent and received) in real-time directly between web browsers, mobile devices, and servers via native Javascript APIs.

> [!NOTE]
> Microsoft Edge now implements ORTC for Windows 10 devices. However, this implementation differs from the most recent version of the [ORTC API](https://go.microsoft.com/fwlink/p/?LinkID=690096). ORTC has continued to evolve since the development and release of Microsoft Edge -- the browser does not implement every object or method within the ORTC API, and includes extensions not currently incorporated within the specification. Further development will continue with the goal to enable developers around the world to build experiences that include the ability to talk to Skype users and other WebRTC compatible communication services.



To get a hands-on experience with ORTC, try out these demos on Test Drive:
-  [SimpleWebRTC](https://developer.microsoft.com/en-us/microsoft-edge/testdrive/demos/simplewebrtc/)
-  [ORTC phone call](https://developer.microsoft.com/en-us/microsoft-edge/testdrive/demos/twilioortc/)
-  [ORTC demo](https://developer.microsoft.com/en-us/microsoft-edge/testdrive/demos/ortcdemo/)


For more information about ORTC, check out [ORTC API is now available in Microsoft Edge](https://go.microsoft.com/fwlink/p/?LinkID=627564) on the Microsoft Edge dev blog.


## Overview Diagram


The diagram below provides a summary describing relationships between ORTC objects. Horizontal or slanted arrows denote the flow of media or data, whereas vertical arrows denote interactions via methods and events.

ORTC uses "*sender*", "*receiver*" and "*transport*" objects, which have "*capabilities*" describing what they are capable of doing, as well as "*parameters*" which define what they are configured to do. "*Tracks*" capture and encode media streams by senders, traveling over transports, then decoded by receivers that render the media stream tracks to video/audio tags.

![Microsoft Edge ORTC Flow Diagram](./../media/ortc_diagram.png)
In the figure above, the [`RTCRtpSender`](https://msdn.microsoft.com/library/Mt502516) encodes the track provided as input, which is transported over a [`RTCDtlsTransport`](https://msdn.microsoft.com/library/Mt502495) or an [`RTCSrtpSdesTransport`](https://msdn.microsoft.com/library/Mt502527). Sending of Dual Tone Multi Frequency (DTMF) tones is supported via the [`RTCDtmfSender`](https://msdn.microsoft.com/library/Mt502496).

The [`RTCDtlsTransport`](https://msdn.microsoft.com/library/Mt502495) and [`RTCSrtpSdesTransport`](https://msdn.microsoft.com/library/Mt502527) utilize an [`RTCIceTransport`](https://msdn.microsoft.com/library/Mt433112) to select a communication path to reach the receiving peer's `RTCIceTransport`, which is in turn associated with an `RTCDtlsTransport` or `RTCSrtpSdesTransport` which de-multiplexes media to the [`RTCRtpReceiver`](https://msdn.microsoft.com/library/Mt502508). The `RTCRtpReceiver` then decodes media, producing a track which is rendered by an audio or video tag.

Several other objects also play a role. The [`RTCIceGatherer`](https://msdn.microsoft.com/library/Mt433107) gathers local ICE candidates for use by a single [`RTCIceTransport`](https://msdn.microsoft.com/library/Mt433112) object. Remaining sections of the API fill in details relating to RTP *capabilities* and *parameters*, *operational statistics* and compatibility with the [WebRTC 1.0 API](https://go.microsoft.com/fwlink/p/?LinkID=627573).

> [!NOTE]
> Since Microsoft Edge does not implement the data channel, the `RTCDataChannel` and `RTCSctpTransport` objects are not supported.




## Components supported in the initial Microsoft Edge implementation


* **ORTC API support.** Audio/video communications is the primary focus, including the following objects: [`RTCIceGatherer`](https://msdn.microsoft.com/library/Mt433107), [`RTCIceTransport`](https://msdn.microsoft.com/library/Mt433112), [`RTCDtlsTransport`](https://msdn.microsoft.com/library/Mt502495), [`RTCRtpSender`](https://msdn.microsoft.com/library/Mt502516), [`RTCRtpReceiver`](https://msdn.microsoft.com/library/Mt502508), as well as the [`RTCStats`](https://msdn.microsoft.com/library/Mt589726) interfaces that are not shown directly in the diagram.
* **RTP/RTCP multiplexing support.** [`RTP/RTCP multiplexing`](https://msdn.microsoft.com/library/Mt502503) is required for use with the [`DtlsTransport`](https://msdn.microsoft.com/library/Mt502495). A/V multiplexing is also supported.
* **STUN/TURN/ICE support.** STUN [(RFC 5389)](https://go.microsoft.com/fwlink/p/?LinkID=627619), TURN [(RFC 5766)](https://go.microsoft.com/fwlink/p/?LinkID=627620) as well as ICE [(RFC 5245)](https://go.microsoft.com/fwlink/p/?LinkID=627621), are supported. Within ICE, regular nomination is supported, with aggressive nomination partially supported (as a receiver). DTLS-SRTP [(RFC 5764)](https://go.microsoft.com/fwlink/p/?LinkID=627622) is supported, based on DTLS 1.0 [(RFC4347)](https://go.microsoft.com/fwlink/p/?LinkID=627629).
* **Codec support.** For [audio codecs](https://msdn.microsoft.com/library/Mt599587), we support G.711, G.722, Opus and SILK. We also support Comfort Noise (CN) and DTMF according to the RTCWEB audio requirements. For video we currently support the [`H.264UC`](https://msdn.microsoft.com/library/Mt589706) codec used by Skype services, supporting advanced features such as simulcast, scalable video coding and forward error correction. We're working toward to enabling interoperable video with H.264.

> [!NOTE]
> If you are familiar with WebRTC 1.0 implementations, and are interested in the evolution of object support within WebRTC 1.0 and ORTC, we recommend the following presentation by Google, Microsoft, and Hookflash from the 2014 IIT RTC Conference: “[ORTC API Update](http://www.rtc-conference.com/2016/wp-content/uploads/gravity_forms/2-2f7a537445fa703985ab4d2372ac42ca/2014/10/ORTC_API_Update.pdf).”




## App level code flow for 1:1 communications


For this scenario, two Windows 10 machines will act as two peers with a webserver as the signaling channel to exchange information between the peers so that a connection may be established between them.

The steps below are scoped to operations taken by one peer. Both peers must go through similar steps in order to set up the 1:1 communications. To make better sense out of the code snippets below, refer to the [Microsoft Edge Test Drive Demo](https://go.microsoft.com/fwlink/p/?LinkID=627635).

This example uses audio-video and RTP/RTCP multiplexing, so you will see only a single ICE and DTLS transport, used to transport RTP and RTCP packets for both audio and video.

`Step #1.` Create [`MediaStream`](https://msdn.microsoft.com/library/Mt131875) object (i.e. [Media Capture and Streams API](./../multimedia/media-Capture-and-Streams.md)) with one audio track and one video track.

```js
navigator.MediaDevices.getUserMedia ({
    "audio": true,
    "video": {
        width: 640,
        height: 360,
        facingMode: "user"
    }
}).then(
    gotStream
).catch(
    gotMediaError
);

function gotStream(stream) {
    var mediaStreamLocal = stream;
    …
}
```

`Step #2.` Create the [`ICE gatherer`](https://msdn.microsoft.com/library/mt433107(v=vs.85).aspx), and enable local [`ICE candidates`](https://msdn.microsoft.com/library/Mt502499) to be signaled to remote peer.

```js
var iceOptions = new RTCIceGatherOptions;
iceOptions.gatherPolicy = "all";
iceOptions.iceservers = ... ;
var iceGathr = new RTCIceGatherer(iceOptions);
iceGathr.onlocalcandidate = function(evt) {
    mySignaller.signalMessage({
        "candidate": evt.candidate
    });
};
```

To help protect user privacy, Microsoft Edge introduces an option that allows a user to control whether local host IP addresses can be exposed by the [`IceGatherer`](https://msdn.microsoft.com/library/Mt433107) objects. An interface option will be provided to toggle this setting.

In the [Microsoft Edge Test Drive Demo](https://go.microsoft.com/fwlink/p/?LinkID=627635), a TURN server has been set up. This TURN server has a very limited throughput, so is limited to only demo page use.

`Step #3.` Create the [`ICE transport`](https://msdn.microsoft.com/library/Mt433112) for audio and video, and prepare to handle remote [`ICE candidates`](https://msdn.microsoft.com/library/Mt502499) on the ICE transport.

```js
var iceTr = new RTCIceTransport();
mySignaller.onRemoteCandidate = function(remote) {
    iceTr.addRemoteCandidate(remote.candidate);
}
```

Another option here is to accumulate all the remote ICE candidates into an array `remoteCandidates` and call `iceTr.setRemoteCandidates(remoteCandidates)` to add all the remote candidates together.

`Step #4.` Create the DTLS transport.

```js
var dtlsTr = new RTCDtlsTransport(iceTr);
```

`Step #5.` Create the sender and receiver objects.

```js
var audioTrack = mediaStreamLocal.getAudioTracks()[0];
var videoTrack = mediaStreamLocal.getVideoTracks()[0];
var audioSender = new RtpSender(audioTrack, dtlsTr);
var videoSender = new RtpSender(videoTrack, dtlsTr);
var audioReceiver = new RtpReceiver(dtlsTr, "audio");
var videoReceiver = new RtpReceiver(dtlsTr, "video");
```

Step #6. Retrieve the receiver and sender capabilities.

```js
var recvAudioCaps = RTCRtpReceiver.getCapabilities("audio");
var recvVideoCaps = RTCRtpReceiver.getCapabilities("video");
var sendAudioCaps = RTCRtpSender.getCapabilities("audio");
var sendVideoCaps = RTCRtpSender.getCapabilities("video");
```

`Step #7.` ICE/DTLS parameters and Send/Receive capabilities can be exchanged.

```js
mySignaller.signalMessage({
    "ice": iceGathr.getLocalParameters(),
    "dtls": dtlsTr.getLocalParameters(),
    "recvAudioCaps": recvAudioCaps,
    "recvVideoCaps": recvVideoCaps,
    "sendAudioCaps": sendAudioCaps,
    "sendVideoCaps": sendVideoCaps
};
```

`Step #8.` Get remote params, start the [`ICE`](https://msdn.microsoft.com/library/Mt433112) and [`DTLS`](https://msdn.microsoft.com/library/Mt502495) transports, and set the audio and video send and receive parameters.

```js
mySignaller.onRemoteParams = function(params) {
    // The responder answers with its preferences, parameters and capabilities
    // Derive the send and receive parameters.
    var audioSendParams = myCapsToSendParams(sendAudioCaps, params.recvAudioCaps);
    var videoSendParams = myCapsToSendParams(sendVideoCaps, params.recvVideoCaps);
    var audioRecvParams = myCapsToRecvParams(recvAudioCaps, params.sendAudioCaps);
    var videoRecvParams = myCapsToRecvParams(recvVideoCaps, params.sendVideoCaps);
    iceTr.start(iceGathr, params.ice, RTCIceRole.controlling);
    dtlsTr.start(params.dtls);
    audioSender.send(audioSendParams);
    videoSender.send(videoSendParams);
    audioReceiver.receive(audioRecvParams);
    videoReceiver.receive(videoRecvParams);
};
```

Below is a skeleton of the helper functions. Find more details in the [Microsoft Edge Test Drive Demo](https://go.microsoft.com/fwlink/p/?LinkID=627635).

```js
RTCRtpParameters function myCapsToSendParams (RTCRtpCapabilities sendCaps, RTCRtpCapabilities remoteRecvCaps) {
    // Function returning the sender RTCRtpParameters, based on intersection of the local sender and remote receiver capabilities.
    // Steps to be followed:
    // 1. Determine the RTP features that the receiver and sender have in common.
    // 2. Determine the codecs that the sender and receiver have in common.
    // 3. Within each common codec, determine the common formats and rtcpFeedback mechanisms.
    // 4. Determine the payloadType to be used, based on the receiver preferredPayloadType.
    // 5. Set RTCRtcpParameters such as mux to their default values.  
}

RTCRtpParameters function myCapsToRecvParams(RTCRtpCapabilities recvCaps, RTCRtpCapabilities remoteSendCaps) {
    return myCapsToSendParams(remoteSendCaps, recvCaps);
}
```

`Step #9.` Render and play the remote media stream tracks through a video tag.

```js
var videoRenderer = document.getElementById("myRtcVideoTag");
var mediaStreamRemote = new MediaStream();
mediaStreamRemote.addTrack(audioReceiver.track);
mediaStreamRemote.addTrack(videoReceiver.track);
videoRenderer.srcObject = mediaStreamRemote;
videoRenderer.play();
```

Once familiar with setting up 1:1 calls, apply the same principles to set up small group calls using a mesh topology, where each peer will have a 1:1 connection with the rest of the group. Since parallel forking is not supported on the Microsoft Edge platform, this should be handled via 1:1 signaling, so that independent [`IceGatherer`](https://msdn.microsoft.com/library/Mt433107) and [`DtlsTransport`](https://msdn.microsoft.com/library/Mt502495) objects will be used for each connection.

## Implementation details in Microsoft Edge


The ORTC spec has been relatively stable since the ORTC Community Group issued the “Call for Implementations,” and significant challenges at the JavaScript API level are not expected. Based on this, Microsoft Edge implementation has been released for cross-browser interoperability testing at the protocol level.

A few limitations in the Microsoft Edge implementation should be noted:

* `RTCIceTransportController` is not supported. Microsoft Edge implementation handles ICE freezing/unfreezing on a per-transport basis, so that ordering all the `IceTransports` is not necessary. This approach should interoperate with existing implementations.
* `RtpListener` is not yet supported. This means that SSRCs (stream and synchronization sources) need to be specified in advance within the [`RtpReceiver`](https://msdn.microsoft.com/library/Mt502508).
* Forking is not yet supported in either `IceTransport`, `IceGatherer`, or `DtlsTransport`. The solution to `DtlsTransport` forking is still under discussion in the ORTC Community Group.
* RTP/RTCP non-mux with `DtlsTransport` is not yet supported. When using `DtlsTransport` your application will need to support RTP/RTCP mux.
* In [`RTCRtpEncodingParameters Dictionary`](https://msdn.microsoft.com/library/mt502505(v=vs.85).aspx), Microsoft Edge currently ignores most of the encoding quality controls, but does require setting the ‘active' and ‘ssrc' attributes.
* The `icecandidatepairchanged` event is not yet supported. You can extract the candidate pair information through the [`getNominatedCandidatePair`](https://msdn.microsoft.com/library/Mt433087) method.
* Microsoft Edge currently does not support any of the `DataChannel` functionality currently defined in the ORTC spec.

#### Looking forward

Microsoft Edge implementation is still early, expect the feature set to continue to grow in the coming months. The goal for Microsoft Edge implementation is interoperability across the web today as well as with the real-time communications industry in the long term.



## API reference

[ORTC (Object Real-Time Communications)](https://msdn.microsoft.com/library/Mt433097)

## Demos

[SimpleWebRTC](https://developer.microsoft.com/en-us/microsoft-edge/testdrive/demos/simplewebrtc/)

[ORTC phone call](https://developer.microsoft.com/en-us/microsoft-edge/testdrive/demos/twilioortc/)

[ORTC demo](https://developer.microsoft.com/en-us/microsoft-edge/testdrive/demos/ortcdemo/)

## Related topics

[ORTC API is now available in Microsoft Edge](https://go.microsoft.com/fwlink/p/?LinkID=627564)

[SimpleWebRTC: Use Microsoft Edge's ORTC API and the WebRTC APIs in Chrome and Firefox to make cross-browser conference calls.](https://go.microsoft.com/fwlink/p/?LinkID=629636)

[Enabling Seamless Communication Experiences for the Web with Skype, Skype for Business, and Microsoft Edge.](https://go.microsoft.com/fwlink/p/?LinkID=671722)

[ORTC (OBJECT REAL-TIME COMMUNICATIONS) COMMUNITY GROUP](https://go.microsoft.com/fwlink/p/?LinkID=671724)

## Specification

[W3C Object RTC (ORTC) API for WebRTC](http://draft.ortc.org/)  
