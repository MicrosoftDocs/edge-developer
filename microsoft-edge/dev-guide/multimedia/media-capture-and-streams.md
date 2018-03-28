---
ms.assetid: ebb66243-54f3-4350-99a8-50cbc1ed8747
description: Learn how the Media Capture and Streams API allows webpages to access media capture devices like webcams or microphones with permission from the user.
title: Dev guide - Media Capture and Streams
author: libbymc
ms.author: libbymc
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Media capture and streams


Microsoft Edge for Windows 10 introduced support for the [Media Capture and Streams APIs](https://msdn.microsoft.com/library/Mt131864) based on the [W3C Media Capture and Streams](http://go.microsoft.com/fwlink/p/?LinkID=534096) specification. These JavaScript APIs allow webpages to access media capture devices, like webcams or microphones, with permission from the user. By using the [Media Capture and Streams APIs](https://msdn.microsoft.com/library/Mt131864), you can create scenarios like capturing a photo using a webcam or capturing a voice message from a microphone.


Have you ever wanted to take a selfie while browsing the web? Now's your chance! Setup a webcam and check out our [demo](http://go.microsoft.com/fwlink/p/?LinkId=613639) on the [Microsoft Edge Dev](http://go.microsoft.com/fwlink/p/?LinkId=613640) site to see the APIs in action.

## A brief summary


Media Capture functionality is commonly referred to as [`getUserMedia`](https://msdn.microsoft.com/library/Mt131861), which is the main interface that allows webpages to access media capture devices. The `getUserMedia`() call takes `MediaStreamConstraints` as an input argument. These constraints define the preferences and/or requirements for capture devices and captured media streams like facingMode, aspectRatio, microphone volume, etc. Through `MediaStreamConstraints`, you can also pick the specific capture device using its [`deviceId`](https://msdn.microsoft.com/library/Mt131850), which can be derived from the [`enumerateDevices`](https://msdn.microsoft.com/library/Mt131870) method. Once the user grants permission, the `getUserMedia`() call will return a promise with a [`MediaStream`](https://msdn.microsoft.com/library/Mt131875) object if the specific `MediaStreamConstraints` can be met.

The [`MediaStream`](https://msdn.microsoft.com/library/Mt131875) object will have one or both of the following: one [`MediaStreamTrack`](https://msdn.microsoft.com/library/Mt131874) for the captured video stream from a webcam, and one `MediaStreamTrack` for the captured audio stream from a microphone. The `MediaStream` object can be rendered on multiple rendering targets, for example, by setting it on the [`srcObject`](https://msdn.microsoft.com/library/Mt131899) attribute of [`media`](https://msdn.microsoft.com/library/Ff975069) element (e.g. [`video`](https://msdn.microsoft.com/library/windows/apps/Hh465962) or [`audio`](https://msdn.microsoft.com/library/Hh772923) tags), or the source node of a [Web Audio](https://msdn.microsoft.com/library/Dn954912) graph.

The [`media`](https://msdn.microsoft.com/library/Ff975069) elements have also been updated, enabling them to be used as a rendering target for [`MediaStream`](https://msdn.microsoft.com/library/Mt131875) objects. For more information on certain restrictions on the behaviors of `media` elements, see the Media Element Attributes when Playing a MediaStream table on the `MediaStream` page.

## Capture device selection and settings


The [`getUserMedia`](https://msdn.microsoft.com/library/mt131861) method allows a lot of flexibility in capture device selection and settings through `MediaStreamConstraints`. Visit [`ConstrainablePattern`](https://msdn.microsoft.com/library/Mt170650) or the [W3C spec](http://w3c.github.io/mediacapture-main/getusermedia.html#constrainable-interface) for more information. 

The following table summarizes the default setting we have internally on some of the constraints:

| Constraints | Default Values                |
:------------ | :-------------
| width       | 640                           |
| aspectRatio | 1.7777777778 (16:9)           |
| frameRate   | 30                            |
| volume      | 1.0                           |
| sampleRate  | device default                |
| sampleSize  | device default (16 or 32-bit) |

 

When setting constraints, remember that capture devices tend to have a wide range of different capabilities. Allow flexibility in these constraints to avoid over constraining.

## Examples

### Capturing a photo with a webcam


Below is an example demonstrating how to use Media Capture functionality to capture a photo from a webcam.

First, get a video stream from a webcam and put it in a video tag for preview. Let's assume we have a video tag on the page and it is set to autoplay.

```javascript
navigator.mediaDevices.getUserMedia({
    video: {
        facingMode: "user"
}}).then(function (stream) {
    var video = document.getElementById('videoTag');
    video.srcObject = stream;
}).catch( function (error) {
    console.log(error.name + ": " + error.message);
});
```

Next, copy a video frame onto a canvas. Assume we have set up the event listener so when you tap the video tag, we will invoke the following function:

```javascript
function capturePhoto()
{
   var video = document.getElementById('videoTag');
   var canvas = document.getElementById('canvasTag');
   var videoWidth = video.videoWidth;
   var videoHeight = video.videoHeight;
   if (canvas.width !== videoWidth || canvas.height !== videoHeight)
   {
       canvas.width = videoWidth;
       canvas.height = videoHeight;
   }
   var ctx = canvas.getContext('2d');
   ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
}
```

Save the picture:

```javascript
function savePhoto()
{
   var canvas = document.getElementById('canvasTag');
   var imgData = canvas.msToBlob("image/jpeg");
   navigator.msSaveBlob(imgData, "myPhoto.jpg");
}
```

Release the webcam device after you complete the task:

```javascript
var video = document.getElementById('videoTag');
var videoTracks = mediaStream.getVideoTracks();
video.srcObject = null;
videoTracks[0].stop();
```



## API reference

[Media Capture and Streams APIs](https://msdn.microsoft.com/library/Mt131864)

## Related topics

[Announcing media capture functionality in Microsoft Edge](http://go.microsoft.com/fwlink/p/?LinkId=613637)

## Specification


[W3C Media Capture and Streams](http://go.microsoft.com/fwlink/p/?LinkID=534096)
