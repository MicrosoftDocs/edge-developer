---
ms.assetid: ef705c70-73f8-445b-84ed-4f83679f1980
description: Learn how Object Real-Time Communications (ORTC) enables media streamed in real-time directly between web browsers, mobile devices, or servers.
title: Dev guide - Object RTC API
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/18/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Object RTC API  

Object Real-Time Communications \(ORTC\) enables media \(audio, video or audio and video\) streamed \(sent and received\) in real-time directly between web browsers, mobile devices, and servers using native Javascript APIs.  

> [!NOTE]
> Microsoft Edge now implements ORTC for Windows 10 devices.  However, the implementation differs from the most recent version of the [ORTC API][OrtcApiWebrtcMain].  ORTC continues to evolve since the development and release of Microsoft Edge.  The Microsoft Edge browser does not implement every object or method within the ORTC API, and includes extensions not currently incorporated within the specification.  Further development continues with the goal to enable developers around the world to build experiences that include the ability to talk to Skype users and other WebRTC compatible communication services.  

<!--
To get a hands-on experience with ORTC, try out these demos on Test Drive:  

*   [SimpleWebRTC][MicrosoftDeveloperEdgeTestdriveDemoSimplewebrtc]  
*   [ORTC phone call][MicrosoftDeveloperEdgeTestdriveDemoTwilioortc]  
*   [ORTC demo][MicrosoftDeveloperEdgeTestdriveDemoOrtc]  
-->  

For more information about ORTC, check out [ORTC API is now available in Microsoft Edge][WindowsBlogMsedgedev20150918] on the Microsoft Edge dev blog.  

## Overview Diagram  

The diagram below provides a summary describing relationships between ORTC objects.  Horizontal or slanted arrows denote the flow of media or data, whereas vertical arrows denote interactions using methods and events.  

ORTC uses **sender**, **receiver** and **transport** objects, which have capabilities describing what each are capable of doing, as well as parameters which define what each are configured to do.  **Tracks** capture and encode media streams by senders, traveling over transports, then decoded by receivers that render the media stream tracks to video and audio tags.  

:::image type="complex" source="../media/ortc_diagram.png" alt-text="Figure 1. Microsoft Edge ORTC Flow Diagram":::
   Figure 1. Microsoft Edge ORTC Flow Diagram
:::image-end:::

In Figure 1, the [RTCRtpSender][PreviousVersionsMt502516] encodes the track provided as input, which is transported over a [RTCDtlsTransport][PreviousVersionsMt502495] or an [RTCSrtpSdesTransport][PreviousVersionsMt502527].  Sending of Dual Tone Multi Frequency \(DTMF\) tones is supported using the [RTCDtmfSender][PreviousVersionsMt502496].  

The [RTCDtlsTransport][PreviousVersionsMt502495] and [RTCSrtpSdesTransport][PreviousVersionsMt502527] utilize an [RTCIceTransport][PreviousVersionsMt433112] to select a communication path to reach the `RTCIceTransport` of the receiving peer, which is in turn associated with an `RTCDtlsTransport` or `RTCSrtpSdesTransport` which de-multiplexes media to the [RTCRtpReceiver][PreviousVersionsMt502508].  The `RTCRtpReceiver` then decodes media, producing a track which is rendered by an audio or video tag.  

Several other objects also play a role.  The [RTCIceGatherer][PreviousVersionsMt433107] gathers local ICE candidates for use by a single [RTCIceTransport][PreviousVersionsMt433112] object.  Remaining sections of the API fill-in details relating to RTP capabilities and parameters, operational statistics and compatibility with the [WebRTC 1.0 API][W3cWebrtcMain].  

> [!NOTE]
> Since Microsoft Edge does not implement the data channel, the `RTCDataChannel` and `RTCSctpTransport` objects are not supported.  

## Components supported in the initial Microsoft Edge implementation  

:::row:::
   :::column span="1":::
      **ORTC API support**
   :::column-end:::
   :::column span="2":::
      Audio/video communications is the primary focus, including the following objects.  
      *   [RTCIceGatherer][PreviousVersionsMt433107]  
      *   [RTCIceTransport][PreviousVersionsMt433112]  
      *   [RTCDtlsTransport][PreviousVersionsMt502495]  
      *   [RTCRtpSender][PreviousVersionsMt502516]  
      *   [RTCRtpReceiver][PreviousVersionsMt502508]  
      *   [RTCStats][PreviousVersionsMt589726], the interfaces that are not shown directly in the diagram.  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **RTP/RTCP multiplexing support**
   :::column-end:::
   :::column span="2":::
      [RTP/RTCP multiplexing][PreviousVersionsMt502503] is required for use with the [DtlsTransport][PreviousVersionsMt502495].  A/V multiplexing is also supported.  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **STUN/TURN/ICE support**
   :::column-end:::
   :::column span="2":::
      The following components are supported.  
      *   STUN [(RFC 5389)][IetfToolsRfc5389]  
      *   TURN [(RFC 5766)][IetfToolsRfc5766]  
      *   ICE [(RFC 5245)][IetfToolsRfc5245], regular nomination is supported with aggressive nomination partially supported \(as a receiver\).  
      *   DTLS-SRTP [(RFC 5764)][IetfToolsRfc5764] is supported, based on DTLS 1.0 [(RFC4347)][IetfToolsRfc4347].  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Codec support**
   :::column-end:::
   :::column span="2":::
      For [audio codecs][PreviousVersionsMt599587], the Microsoft Edge team supports G.711, G.722, Opus, and SILK.  The Microsoft Edge team also support Comfort Noise \(CN\) and DTMF according to the RTCWEB audio requirements.  
      For video, the Microsoft Edge team currently supports the [H.264UC][PreviousVersionsMt589706] codec used by Skype services, supporting advanced features such as simulcast, scalable video coding and forward error correction.  The Microsoft Edge team is working to enable interoperable video with H.264.  
   :::column-end:::
:::row-end:::

<!--  
*   **ORTC API support.**  Audio/video communications is the primary focus, including the following objects:  [RTCIceGatherer][PreviousVersionsMt433107], [RTCIceTransport][PreviousVersionsMt433112], [RTCDtlsTransport][PreviousVersionsMt502495], [RTCRtpSender][PreviousVersionsMt502516], [RTCRtpReceiver][PreviousVersionsMt502508], as well as the [RTCStats][PreviousVersionsMt589726] interfaces that are not shown directly in the diagram.  
*   **RTP/RTCP multiplexing support.**  [RTP/RTCP multiplexing][PreviousVersionsMt502503] is required for use with the [DtlsTransport][PreviousVersionsMt502495].  A/V multiplexing is also supported.  
*   **STUN/TURN/ICE support.**  STUN [(RFC 5389)][IetfToolsRfc5389], TURN [(RFC 5766)][IetfToolsRfc5766] as well as ICE [(RFC 5245)][IetfToolsRfc5245], are supported.  Within ICE, regular nomination is supported, with aggressive nomination partially supported \(as a receiver\).  DTLS-SRTP [(RFC 5764)][IetfToolsRfc5764] is supported, based on DTLS 1.0 [(RFC4347)][IetfToolsRfc4347].  
*   **Codec support.**  For [audio codecs][PreviousVersionsMt599587], the Microsoft Edge team supports G.711, G.722, Opus, and SILK.  The Microsoft Edge team also support Comfort Noise \(CN\) and DTMF according to the RTCWEB audio requirements.  For video, the Microsoft Edge team currently supports the [H.264UC][PreviousVersionsMt589706] codec used by Skype services, supporting advanced features such as simulcast, scalable video coding and forward error correction.  The Microsoft Edge team is working to enable interoperable video with H.264.  
-->  

> [!NOTE]
> If you are familiar with WebRTC 1.0 implementations, and are interested in the evolution of object support within WebRTC 1.0 and ORTC, the Microsoft Edge team recommends the following presentation by Google, Microsoft, and Hookflash from the 2014 IIT RTC Conference:  "[ORTC API Update][RtcConference2016WpContentgravityForms22f7a537445fa703985ab4d2372ac42ca201410OrtcApiUpdate]."  

## App level code flow for 1:1 communications  

For this scenario, two Windows 10 machines acts as two peers with a webserver as the signaling channel to exchange information between the peers so that a connection may be established between them.  

The steps below are scoped to operations taken by one peer.  Both peers must go through similar steps in order to set up the 1:1 communications.  <!--To make better sense out of the code snippets below, refer to the [Microsoft Edge Test Drive Demo][MicrosoftDeveloperEdgeTestdriveDemoOrtc].  -->  

This example uses audio-video and RTP/RTCP multiplexing, so you are seeing only a single ICE and DTLS transport, used to transport RTP and RTCP packets for both audio and video.  

### Step 1:  Create MediaStream object  

Create [MediaStream][MDNMediastream] object \(for example, [Media Capture and Streams API][MDNMediaStreamsApi]\) with one audio track and one video track.  

```javascript
navigator.MediaDevices.getUserMedia ({
    "audio":  true,
    "video":  {
        width:  640,
        height:  360,
        facingMode:  "user"
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

### Step 2:  Create the ICE gatherer  

Create the [ICE gatherer][PreviousVersionsMt433107], and enable local [ICE candidates][PreviousVersionsMt502499] is signaled to remote peer.  

```javascript
var iceOptions = new RTCIceGatherOptions;
iceOptions.gatherPolicy = "all";
iceOptions.iceservers = ...  ;
var iceGathr = new RTCIceGatherer(iceOptions);
iceGathr.onlocalcandidate = function(evt) {
    mySignaller.signalMessage({
        "candidate":  evt.candidate
    });
};
```  

To help protect user privacy, Microsoft Edge introduces an option that allows a user to control whether local host IP addresses may be exposed by the [IceGatherer][PreviousVersionsMt433107] objects.  An interface option is provided to toggle this setting.  

<!--In the [Microsoft Edge Test Drive Demo][MicrosoftDeveloperEdgeTestdriveDemoOrtc], a TURN server has been set up.  The TURN server has a very limited throughput, so is limited to only demo page use.  -->  

### Step 3:  Create the ICE transport for audio and video  

Create the [ICE transport][PreviousVersionsMt433112] for audio and video, and prepare to handle remote [ICE candidates][PreviousVersionsMt502499] on the ICE transport.  

```javascript
var iceTr = new RTCIceTransport();
mySignaller.onRemoteCandidate = function(remote) {
    iceTr.addRemoteCandidate(remote.candidate);
}
```  

Another option here is to accumulate all the remote ICE candidates into an array `remoteCandidates` and call `iceTr.setRemoteCandidates(remoteCandidates)` to add all the remote candidates together.  

### Step 4:  Create the DTLS transport  

```javascript
var dtlsTr = new RTCDtlsTransport(iceTr);
```  

### Step 5.` Create the sender and receiver objects.  

```javascript
var audioTrack = mediaStreamLocal.getAudioTracks()[0];
var videoTrack = mediaStreamLocal.getVideoTracks()[0];
var audioSender = new RtpSender(audioTrack, dtlsTr);
var videoSender = new RtpSender(videoTrack, dtlsTr);
var audioReceiver = new RtpReceiver(dtlsTr, "audio");
var videoReceiver = new RtpReceiver(dtlsTr, "video");
```  

### Step 6:  Retrieve the receiver and sender capabilities  

```javascript
var recvAudioCaps = RTCRtpReceiver.getCapabilities("audio");
var recvVideoCaps = RTCRtpReceiver.getCapabilities("video");
var sendAudioCaps = RTCRtpSender.getCapabilities("audio");
var sendVideoCaps = RTCRtpSender.getCapabilities("video");
```  

### Step 7: ICE/DTLS parameters and Send/Receive capabilities may be exchanged  

```javascript
mySignaller.signalMessage({
    "ice":  iceGathr.getLocalParameters(),
    "dtls":  dtlsTr.getLocalParameters(),
    "recvAudioCaps":  recvAudioCaps,
    "recvVideoCaps":  recvVideoCaps,
    "sendAudioCaps":  sendAudioCaps,
    "sendVideoCaps":  sendVideoCaps
};
```  

### Step 8:  Get remote params  

Get remote params, start the [ICE][PreviousVersionsMt433112] and [DTLS][PreviousVersionsMt502495] transports, and set the audio and video send and receive parameters.  

```javascript
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

The following code snippet is a skeleton of the helper functions.  <!--Find more details in the [Microsoft Edge Test Drive Demo][MicrosoftDeveloperEdgeTestdriveDemoOrtc].  -->  

```javascript
RTCRtpParameters function myCapsToSendParams (RTCRtpCapabilities sendCaps, RTCRtpCapabilities remoteRecvCaps) {
    // Function returning the sender RTCRtpParameters, based on intersection of the local sender and remote receiver capabilities.
    // Steps for you to follow:
    // 1.  Determine the RTP features that the receiver and sender have in common.
    // 2.  Determine the codecs that the sender and receiver have in common.
    // 3.  Within each common codec, determine the common formats and rtcpFeedback mechanisms.
    // 4.  Determine the payloadType that is used, based on the receiver preferredPayloadType.
    // 5.  Set RTCRtcpParameters such as mux to the default values.  
}

RTCRtpParameters function myCapsToRecvParams(RTCRtpCapabilities recvCaps, RTCRtpCapabilities remoteSendCaps) {
    return myCapsToSendParams(remoteSendCaps, recvCaps);
}
```  

### Step 9:  Render and play the remote media stream tracks through a video tag  

```javascript
var videoRenderer = document.getElementById("myRtcVideoTag");
var mediaStreamRemote = new MediaStream();
mediaStreamRemote.addTrack(audioReceiver.track);
mediaStreamRemote.addTrack(videoReceiver.track);
videoRenderer.srcObject = mediaStreamRemote;
videoRenderer.play();
```  

Once familiar with setting up 1:1 calls, apply the same principles to set up small group calls using a mesh topology, where each peer has a 1:1 connection with the rest of the group.  Since parallel forking is not supported on the Microsoft Edge platform, this should be handled using 1:1 signaling, so that independent [IceGatherer][PreviousVersionsMt433107] and [DtlsTransport][PreviousVersionsMt502495] objects is used for each connection.  

## Implementation details in Microsoft Edge  

The ORTC spec has been relatively stable since the ORTC Community Group issued the "Call for Implementations", and significant challenges at the JavaScript API level are not expected.  Based on this, Microsoft Edge implementation has been released for cross-browser interoperability testing at the protocol level.  

A few limitations in the Microsoft Edge implementation should be noted:   

*   `RTCIceTransportController` is not supported.  Microsoft Edge implementation handles ICE freezing/unfreezing on a per-transport basis, so that ordering all the `IceTransports` is not necessary.  This approach should interoperate with existing implementations.  
*   `RtpListener` is not yet supported.  This means that SSRCs \(stream and synchronization sources\) must be specified in advance within the [RtpReceiver][PreviousVersionsMt502508] object.  
*   Forking is not yet supported in either `IceTransport`, `IceGatherer`, or `DtlsTransport`.  The solution to `DtlsTransport` forking is still under discussion in the ORTC Community Group.  
*   RTP/RTCP non-mux with `DtlsTransport` is not yet supported.  When using `DtlsTransport` your application must support RTP/RTCP mux.  
*   In [RTCRtpEncodingParameters Dictionary][PreviousVersionsMt502505] object, Microsoft Edge currently ignores most of the encoding quality controls, but does require setting the `active` and `ssrc` attributes.  
*   The `icecandidatepairchanged` event is not yet supported.  You may extract the candidate pair information through the [getNominatedCandidatePair][PreviousVersionsMt433087] method.  
*   Microsoft Edge currently does not support any of the `DataChannel` functionality currently defined in the ORTC spec.  

#### Looking forward  

Microsoft Edge implementation is still early, expect the feature set to continue to grow in the coming months.  The goal for Microsoft Edge implementation is interoperability across the web today as well as with the real-time communications industry in the long term.  

## See also  

### API reference  

*   [ORTC (Object Real-Time Communications)][PreviousVersionsMt433097]  

<!--
### Demos  

*   [SimpleWebRTC][MicrosoftDeveloperEdgeTestdriveDemoSimplewebrtc]  
*   [ORTC phone call][MicrosoftDeveloperEdgeTestdriveDemoTwilioortc]  
*   [ORTC demo][MicrosoftDeveloperEdgeTestdriveDemoOrtc]  
-->

### Related topics  

*   [ORTC API is now available in Microsoft Edge][WindowsBlogMsedgedev20150918]  <!--*   [SimpleWebRTC:  Use ORTC API of Microsoft Edge and the WebRTC APIs in Chrome and Firefox to make cross-browser conference calls][ModernDevIeTestdriveDemoSimplewebtrc]  -->  
*   [Enabling Seamless Communication Experiences for the Web with Skype, Skype for Business, and Microsoft Edge][Microsoft365Blog20150918EndlessSeamless]  
*   [ORTC (Object Real-time Communications) Community Group][W3cOrtcCommunityGroup]  

### Specification  

*   [W3C Object RTC (ORTC) API for WebRTC][OrtcApiWebrtcDraftMain]  

<!-- image links -->  

<!-- links -->  

[PreviousVersionsMt433087]: /previous-versions/mt433087(v=vs.85) "getNominatedCandidatePair method | Microsoft Docs"  
[PreviousVersionsMt433097]: /previous-versions/mt433097(v=vs.85) "ORTC (Object Real-Time Communications) | Microsoft Docs"  
[PreviousVersionsMt433107]: /previous-versions/mt433107(v=vs.85) "RTCIceGatherer object | Microsoft Docs"  
[PreviousVersionsMt433112]: /previous-versions/mt433112(v=vs.85) "RTCIceTransport object | Microsoft Docs"  
[PreviousVersionsMt502495]: /previous-versions/mt502495(v=vs.85) "RTCDtlsTransport object | Microsoft Docs"  
[PreviousVersionsMt502496]: /previous-versions/mt502496(v=vs.85) "RTCDtmfSender object | Microsoft Docs"  
[PreviousVersionsMt502499]: /previous-versions/mt502499(v=vs.85) "RTCIceCandidate object | Microsoft Docs"  
[PreviousVersionsMt502503]: /previous-versions/mt502503(v=vs.85) "RTCRtpCapabilities Dictionary object | Microsoft Docs"  
[PreviousVersionsMt502505]: /previous-versions/mt502505(v=vs.85) "RTCRtpParameters Dictionary object | Microsoft Docs"  
[PreviousVersionsMt502508]: /previous-versions/mt502508(v=vs.85) "RTCRtpReceiver object | Microsoft Docs"  
[PreviousVersionsMt502516]: /previous-versions/mt502516(v=vs.85) "RTCRtpSender object | Microsoft Docs"  
[PreviousVersionsMt502527]: /previous-versions/mt502527(v=vs.85) "RTCSrtpSdesTransport object | Microsoft Docs"  
[PreviousVersionsMt589706]: /previous-versions/mt589706(v=vs.85) "H.264UC extensions object | Microsoft Docs"  
[PreviousVersionsMt589726]: /previous-versions/mt589726(v=vs.85) "RTCStats Extension Dictionary object | Microsoft Docs"  
[PreviousVersionsMt599587]: /previous-versions/mt599587(v=vs.85) "Microsoft Edge Codec Capabilities | Microsoft Docs"  

[Microsoft365Blog20150918EndlessSeamless]: https://www.microsoft.com/microsoft-365/blog/2015/09/18/enabling-seamless-communication-experiences-for-the-web-with-skype-skype-for-business-and-microsoft-edge "Enabling seamless communication experiences for the web with Skype, Skype for Business and Microsoft Edge | Microsoft 365 Blog"  

<!--[MicrosoftDeveloperEdgeTestdriveDemoSimplewebrtc]: https://developer.microsoft.com/microsoft-edge/testdrive/demos/simplewebrtc "Not Found"  -->  
<!--[MicrosoftDeveloperEdgeTestdriveDemoTwilioortc]: https://developer.microsoft.com/microsoft-edge/testdrive/demos/twilioortc "Not Found"  -->  
<!--[MicrosoftDeveloperEdgeTestdriveDemoOrtc]: https://developer.microsoft.com/microsoft-edge/testdrive/demos/ortcdemo "Not Found"  -->  

<!--[ModernDevIeTestdriveDemoSimplewebtrc]: http://dev.modern.ie/testdrive/demos/simplewebrtc "Not Found"  -->  

[WindowsBlogMsedgedev20150918]: https://blogs.windows.com/msedgedev/2015/09/18/ortc-api-is-now-available-in-microsoft-edge "ORTC API is now available in Microsoft Edge | Microsoft Edge Blog"  

[IetfToolsRfc5245]: https://tools.ietf.org/html/rfc5245 "RFC 5245: Interactive Connectivity Establishment (ICE): A Protocol for Network Address Translator (NAT) Traversal for Offer/Answer Protocols"  
[IetfToolsRfc4347]: https://tools.ietf.org/html/rfc4347 "RFC 4347: Datagram Transport Layer Security"  
[IetfToolsRfc5389]: https://tools.ietf.org/html/rfc5389 "RFC 5389: Traversal Utilities for NAT (STUN)"
[IetfToolsRfc5764]: https://tools.ietf.org/html/rfc5764 "RFC 5764: Datagram Transport Layer Security (DTLS) Extension to Establish Keys for the Secure Real-time Transport Protocol (SRTP)"  
[IetfToolsRfc5766]: https://tools.ietf.org/html/rfc5766 "RFC 5766: Traversal Using Relays around NAT (TURN): Relay Extensions to Session Traversal Utilities for NAT (STUN)" 

[MDNMediastream]: https://developer.mozilla.org/docs/Web/API/MediaStream "MediaStream | MDN"  
[MDNMediaStreamsApi]: https://developer.mozilla.org/docs/Web/API/Media_Streams_API "Media Capture and Streams API (Media Stream) | MDN"  

[OrtcApiWebrtcDraftMain]: http://draft.ortc.org "Draft of Object RTC (ORTC) API for WebRTC | ORTC"  
[OrtcApiWebrtcMain]: https://ortc.org "Object RTC (ORTC) API for WebRTC | OTRC"  

[RtcConference2016WpContentgravityForms22f7a537445fa703985ab4d2372ac42ca201410OrtcApiUpdate]: http://www.rtc-conference.com/2016/wp-content/uploads/gravity_forms/2-2f7a537445fa703985ab4d2372ac42ca/2014/10/ORTC_API_Update.pdf "ORTC API Update | RTC Conference"  

[W3cOrtcCommunityGroup]: https://w3.org/community/ortc "ORTC (Object Real-time Communications) Community Group | W3C"  
[W3cWebrtcMain]: https://w3.org/TR/webrtc "WebRTC 1.0: Real-time Communication Between Browsers | W3C"  
