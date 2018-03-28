---
ms.assetid: fbe3f1ef-d8f7-4a28-b379-3f06df0f70f4
description: Learn how Encrypted Media Extensions extends the video and audio elements to enable Digital Rights Management (DRM) protected content without using plug-ins.
title: Dev guide - Encrypted Media Extensions
author: libbymc
ms.author: libbymc
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Encrypted Media Extensions

Encrypted Media Extensions (EME) extends the video and audio elements to enable Digital Rights Management (DRM) protected content without using plug-ins. 

Both prefixed and the new unprefixed APIs are supported in Microsoft Edge.  For more information about the legacy implementation of Encrypted Media Extensions in IE11, see the compatibility cookbook article, [Encrypted Media Extensions updates](https://msdn.microsoft.com/library/mt598601(v=vs.85).aspx).

## Multiple Digital Rights Management (DRM) Providers

EME was designed to support multiple Digital Rights Management (DRM) providers ("keySystems") using Content Decryption Modules.  The API itself is intended to be DRM neutral.  Each browser that supports Encrypted Media Extensions has at least one CDM implemented.

A key underpinning that makes this work is the development of [ISO MPEG Common Encryption](http://www.iso.org/iso/home/store/catalogue_ics/catalogue_detail_ics.htm?csnumber=65271).  By using common encryption, web media services can set up uniform content libraries that are compatible with more than one DRM solution.  A service can choose to support more than one DRM without having to encrypt content for each individual DRM.

In practice, this means that websites encrypt files once, and support one or more DRM license servers to enable playback on individual web browsers.  So they can support a PlayReady DRM license server to enable playback on Microsoft Edge or a non-Windows browser which supports a PlayReady CDM; and other DRM license servers (Widevine, Adobe Access, FairPlay, etc.) to enable playback on other browsers.  This ability to have one encrypted library work with multiple keySystems is an important feature of EME. Though websites must include some code for each keySystem and browser combination the designers wish to support.

## Interoperable Demo

To demonstrate these concepts, we’ve updated our Professional Quality Video demo from three years ago. We had two goals for this update:

1. Implement prefixed/unprefixed EME selection so that the demo works properly on existing IE11 browsers using the prefixed API, and on Microsoft Edge using the updated unprefixed API.
2. Implement keySystem switching to allow the demo to run on Microsoft browsers and other browsers.

The following sections explain key implementation points from the [Professional Quality Video Updated – Interoperable Playback](https://developer.microsoft.com/en-us/microsoft-edge/testdrive/demos/eme/) demo.

### Detect Updated EME

In the code below, we feature detect to see if [`requestMediaKeySystemAccess`](https://msdn.microsoft.com/library/mt573145(v=vs.85).aspx) is supported, and use that as an indicator for the updated EME support in the browser:

``` js
if (window.navigator.requestMediaKeySystemAccess) {
	// unprefixed EME (Microsoft Edge/Chrome)
	videoElement.addEventListener('encrypted', this.getNewKeySession, false);
}
else {
// prefixed EME (IE11)
	videoElement.addEventListener('msneedkey', this.getNewPrefixedKeySession, false);
}
```

The demo elects to use the unprefixed EME when it is available, but the choice here is up to the webpage developers.  Unprefixed EME doesn’t isolate the browser to Microsoft Edge only.  For our supported browser set, it could be either Microsoft Edge or Chrome.

### Detect keySystem

Next, we call [`requestMediaKeySystemAccess`](https://msdn.microsoft.com/library/mt573145(v=vs.85).aspx) with a PlayReady configuration that has its keySystem string and formats we’d like to play.  This API is implemented as a Promise.  If PlayReady isn’t supported, the Promise is rejected.  If that happens, we call `requestMediaKeySystemAccess` again, but this time with a Widevine configuration.  If that Promise is rejected, then no playback of protected media is possible for our demo.  A successful Promise return on either configuration means playback can proceed with the supported keySystem.  Here’s a code snippet that demonstrates this:

``` js
// Try PlayReady
navigator.requestMediaKeySystemAccess('com.microsoft.playready', [{
	initDataTypes: ['keyids', 'cenc'],
	audioCapabilities: [{ contentType: 'audio/mp4; codecs="mp4a"' }],
	videoCapabilities: [{ contentType: 'video/mp4; codecs="avc1"' }]
}
]).then(function (keySystemAccess) { /* Promise succeeded. Call createMediaKeys */},function () {
	// Promise was rejected for PlayReady. Try Widevine.
	navigator.requestMediaKeySystemAccess('com.widevine.alpha', [{
	initDataTypes: ['keyids', 'webm'],
	audioCapabilities: [{ contentType: 'audio/webm; codecs="opus"'}],
	videoCapabilities: [{ contentType: 'video/webm; codecs="vp9"'}]
}
]).then(function (keySystemAccess) { /* Promise succeeded. Call createMediaKeys */ }, function () {
	// Neither Promise succeeded. Browser does not support Widevine or PlayReady
	});
});
```

### Accommodate DRM Specifics
A key difference between PlayReady and Widevine involves how the DRM challenge is handled.  For PlayReady, the challenge must be parsed from the XML returned by the EME onmessage event and the app must then set the header values to fetch the key via XMLHttpRequest. This works the same as the prefixed EME support for PlayReady:

``` js
// In the keySession.addEventListener(‘message’) callback.
... Set up an XHR to the license server ...
if (/*keySystem type is PlayReady*/) {
	// For PlayReady CDMs, we need to dig the Challenge out of the XML.
	var keyMessageXml = new DOMParser().parseFromString(String.fromCharCode.apply(null, new Uint16Array(event.message)), 'application/xml');
challenge = atob(keyMessageXml.getElementsByTagName('Challenge')[0].childNodes[0].nodeValue);
	// Set up the headers for XHR
	var headerNames = keyMessageXml.getElementsByTagName('name');
	var headerValues = keyMessageXml.getElementsByTagName('value');
	for (var i = 0; i < headerNames.length; i++) {
		xhr.setRequestHeader(headerNames[i].childNodes[0].nodeValue, headerValues[i].childNodes[0].nodeValue);
	}
}
else
{
	// For WideVine CDMs, the challenge is the keyMessage.
	challenge = event.message;
}
xhr.send(challenge);
```
Something else to notice is the way the license URL is used between prefixed EME and unprefixed EME.  In prefixed EME, the license server URL is passed to the [`onmskeymessage`](https://msdn.microsoft.com/library/dn255026(v=vs.85).aspx) event. In unprefixed EME, the website needs to supply the license server URL directly.



## API Reference 
[HTML5 Audio and Video](https://msdn.microsoft.com/library/hh772500(v=vs.85).aspx)

## Related Topics
[Using Encrypted Media Extensions for interoperable protected media](https://blogs.windows.com/msedgedev/2015/10/27/using-encrypted-media-extensions-for-interoperable-protected-media/)

## Specification 
[W3C Encrypted Media Extensions](http://go.microsoft.com/fwlink/p/?linkid=386755)


