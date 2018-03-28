---
ms.assetid: 50a044fe-9ce4-46b1-8e50-d95b8aa89cf7
description: Learn how the Web Audio API can be used to process and synthesize audio in web applications.
title: Dev guide - Web Audio
author: libbymc
ms.author: libbymc
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

#  Web Audio

Microsoft Edge for Windows 10 introduced support for the [W3C Web Audio API](http://go.microsoft.com/fwlink/p/?LinkID=512167) specification. Web Audio is a high-level JavaScript API for processing and synthesizing audio in web applications to provide rich audio and music experiences.

## Web Audio Capabilities

While the HTML5 [`audio`](https://msdn.microsoft.com/library/hh772923(v=vs.85).aspx) element allows for basic streaming audio playback, [Web Audio API](https://msdn.microsoft.com/library/dn954912(v=vs.85).aspx) provides a range of APIs that allow you to play multiple sounds with tight synchronization, and apply gain, fades, transitions, and basic effects on mixed audio. Web Audio is primarily targeted at JavaScript applications running on the desktop and in modern browsers. It is also available to UWP apps using JavaScript.

Web Audio has three main components: audio sources, audio processing, and audio playback.


### Audio Sources

Web Audio consumes several different audio sources by:

* Decoding MP3, WMA, AAC, and WAV files. This is primarily used for sound effects, as fully decoded audio buffers consume a lot of memory.
* Streaming the [`audio`](https://msdn.microsoft.com/library/hh772923(v=vs.85).aspx) and [`video`](https://msdn.microsoft.com/library/ff975073(v=vs.85).aspx) elements. This is primarily used for longer files, like music, to save memory by streaming.
* Streaming a [`MediaStream`](https://msdn.microsoft.com/library/mt131875.aspx) from the W3C Capture and Streams specification. This is primarily used for capturing audio from input devices, like a web camera.
* Web Audio's [`OscillatorNode`](https://msdn.microsoft.com/library/dn954887(v=vs.85).aspx) provides basic synthesis by generating waveforms.

### Audio Processing

After retrieving the audio sources, the web page constructs a Web Audio graph to mix sources together and add effects through processing. The graph must connect to an [`AudioDestinationNode`](https://msdn.microsoft.com/library/dn954820(v=vs.85).aspx) to enable playback. The other nodes in the graph provide audio effects for analysis. For example:

![Diagram of a conceptual Audio Context](./../media/webaudio_audiocontext.png)

SourceBufferNodes are typically used to hold small audio fragments.  These get connected to different processing nodes, and eventually to the [`AudioDestinationNode`](https://msdn.microsoft.com/library/dn954876(v=vs.85).aspx), which sends the output stream to the audio stack to play through speakers.

Web Audio also includes a range of audio effects that are supported through a variety of processing nodes:

* [`GainNode`](https://msdn.microsoft.com/library/dn954873(v=vs.85).aspx) - used to control the volume of an audio signal.
* [`DelayNode`](https://msdn.microsoft.com/library/dn954863(v=vs.85).aspx) - represents a variable delay line node.
* [`PannerNode`](https://msdn.microsoft.com/library/dn954892(v=vs.85).aspx) - an [`AudioNode`](https://msdn.microsoft.com/library/dn954827(v=vs.85).aspx) used to spatializeand position audio in 3D space.
* [`ConvolverNode`](https://msdn.microsoft.com/library/dn954858(v=vs.85).aspx) - used to create real-time linear effects such as reverb.
* [`DynamicsCompressorNode`](https://msdn.microsoft.com/library/dn954865(v=vs.85).aspx) - represents dynamics compression to lower the volume of loud passages and increase the volume of soft parts, producing a louder and fuller sound.
* [`WaveShaperNode`](https://msdn.microsoft.com/library/dn954909(v=vs.85).aspx) - used to apply non-linear waveshape effects to a media stream to create distortion and other effects.
* [`BiquadFilterNode`](https://msdn.microsoft.com/library/dn954849.aspx) - an [`AudioNode`](https://msdn.microsoft.com/library/dn954827.aspx) processor that implements common low order filters used for effects such as tone controls, graphic equalizers, and phasers.

Web Audio also provides the following utility nodes. Each node exposes parameters through the [`AudioParam`](https://msdn.microsoft.com/library/dn954836.aspx) interface. These parameters can be set, scheduled, or animated to control the node's effect.

* [`ScriptProcessorNode`](https://msdn.microsoft.com/library/dn954904.aspx) - an [`AudioNode`](https://msdn.microsoft.com/library/dn954827.aspx) that processes, analyses, or generates audio using Javascript.
* [`AnalyserNode`](https://msdn.microsoft.com/library/dn954770.aspx) - provides real-time frequency and time-domain analysis information for music visualization and analysis.
* [`ChannelSplitterNode`](https://msdn.microsoft.com/library/dn954857.aspx) - an [`AudioNode`](https://msdn.microsoft.com/library/dn954827.aspx) used to access individual channels of an audio stream.
* [`ChannelMergerNode`](https://msdn.microsoft.com/library/dn954856.aspx) - an [`AudioNode`](https://msdn.microsoft.com/library/dn954827.aspx) used to combine or merge individual channels into a single audio stream.

### Audio Playback

Web Audio provides three outputs:

* Output to the speakers
* Record to a buffer. Recording occurs faster than real-time, allowing web sites to cache expensive effect processing. The recorded buffer may also be saved to a file or replayed through Web Audio.
* Output to a [`MediaStream`](https://msdn.microsoft.com/library/dn954836(v=vs.85).aspx) for Object Real-Time Communications (ORTC).

## Web Audio Demo
The following gives a short walkthrough of the [Microphone Streaming & Web Audio Demo](https://developer.microsoft.com/en-us/microsoft-edge/testdrive/demos/microphone/) that allows local audio to be recorded and played.

### Create the AudioContext
Set up the audio context and audio graph with basic JavaScript by creating the necessary nodes (in this case, source, gain, filter, convolver and analyzer nodes), and connect them from one to the next.

To set up audioContext:
```js
var audioContext = new (window.AudioContext || window.webkitAudioContext)();
```

### Connect the Audio Nodes
Additional nodes get created by calling node specific create methods on audioContext:

```js
var micGain = audioContext.createGain();
var sourceMix = audioContext.createGain();
var visualizerInput = audioContext.createGain();
var outputGain = audioContext.createGain();
var dynComp = audioContext.createDynamicsCompressor();
```
### Connect the Streaming Source

To set up the streaming source:

```js
sourceMic = audioContext.createMediaStreamSource(stream);
```

Nodes are connected from source to processing nodes to the destination node with connect calls:

```js
sourceMic.connect(notchFilter);
notchFilter.connect(micGain);
micGain.connect(sourceMix);
sourceAudio.connect(sourceMix);
```

### Mute and Unmute
The mic and speakers have mute controls to manage situations where audio feedback happens.  They are implemented by toggling the gain on nodes at the stream source and just before the [`AudioDestinationNode`](https://msdn.microsoft.com/library/dn954820(v=vs.85).aspx):

```js
var toggleGainState = function(elementId, elementClass, outputElement){
     var ele = document.getElementById(elementId);
     return function(){
          if (outputElement.gain.value === 0) {
               outputElement.gain.value = 1;
               ele.classList.remove(elementClass);
          } else {
               outputElement.gain.value = 0;
               ele.classList.add(elementClass);
          }
     };
};

var toggleSpeakerMute = toggleGainState('speakerMute', 'button--selected', outputGain);
var toggleMicMute = toggleGainState('micMute', 'button--selected', micGain);
```

### Apply Room Effects
Room effects are applied by loading impulse response files into a [`convolverNode`](https://msdn.microsoft.com/library/dn954858(v=vs.85).aspx) connected in the stream path:

```js
var effects = {
     none: {
          file: 'sounds/impulse-response/trigroom.wav'
     },
     telephone: {
          file: 'sounds/impulse-response/telephone.wav'
     },
     garage: {
          file: 'sounds/impulse-response/parkinggarage.wav'
     },
     muffler: {
          file: 'sounds/impulse-response/muffler.wav'
     }
};

var applyEffect = function() {
     var effectName = document.getElementById('effectmic-controls').value;
     var selectedEffect = effects[effectName];
     var effectFile = selectedEffect.file;
```

Note that we took a small liberty in using the "trigroom" environment as a surrogate for no environmental effect being applied.  No offense is intended for fans of trigonometry!

### Visualize the Audio Signal

Visualizations were implemented by configuring [`analyzerNodes`](https://msdn.microsoft.com/library/dn954770(v=vs.85).aspx) for time and frequency domain data, and using the results to manipulate canvas based presentations.

```js
var drawTime = function() {
     requestAnimationFrame(drawTime);
     timeAnalyser.getByteTimeDomainData(timeDataArray);
     }

var drawFreq = function() {
     requestAnimationFrame(drawFreq);
     freqAnalyser.getByteFrequencyData(freqDataArray);
     }
```

### Record & Play

Recorder features use the *recorder.js* open source sample written by Matt Diamond, and used previously in other Web Audio based recorder demos.  Live audio in the demo uses the [`MediaStreamAudioSource`](https://msdn.microsoft.com/library/dn954879(v=vs.85).aspx), but recorded audio is played using the [`MediaElementAudioSource`](https://msdn.microsoft.com/library/dn954876(v=vs.85).aspx).  Gapless looping can be tested by activating the loop control during playback.



## API Reference
[Web Audio API](https://msdn.microsoft.com/library/dn954912.aspx)

## Demo

[Microphone Streaming & Web Audio Demo](https://developer.microsoft.com/en-us/microsoft-edge/testdrive/demos/microphone/)
 -- Demo code is available on [GitHub](https://github.com/MicrosoftEdge/Demos/tree/master/microphone)

 [Microsoft Edge Audio Mixer](https://developer.microsoft.com/en-us/microsoft-edge/testdrive/demos/audiomixer/)  -- Demo code is available on [GitHub](https://github.com/MicrosoftEdge/Demos/tree/master/audiomixer)

## Related Topics
[Bringing Web Audio to Microsoft Edge for interoperable gaming and enthusiast media](http://go.microsoft.com/fwlink/p/?LinkID=613657)

## Specification
[Web Audio API](http://go.microsoft.com/fwlink/p/?LinkID=512167)
