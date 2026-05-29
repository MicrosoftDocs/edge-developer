---
title: Convert speech to text with the SpeechRecognition API
description: Convert speech to text with the SpeechRecognition API.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.date: 05/29/2026
---
# Convert speech to text with the SpeechRecognition API

The SpeechRecognition API is a standard web API that allows you to convert speech from an audio source, such as a video file, audio file, or the user microphone, into text, from your website's JavaScript code.

This article covers using the SpeechRecognition API in Microsoft Edge to convert speech to text by using a local speech recognition model that's built into the browser.

For more information about the API itself, see [Web Speech API](https://developer.mozilla.org/docs/Web/API/Web_Speech_API), at MDN.

**Detailed contents:**

* ... TODO ...


<!-- ====================================================================== -->
## Availability of the local speech recognition model

The SpeechRecognition API can be used with cloud recognition services. This article focuses on using the SpeechRecognition API with a local speech recognition model that's built into Microsoft Edge.

The local model is available in Microsoft Edge version ... TODO (version, flag, hardware requirements, etc.) ...


<!-- ====================================================================== -->
## Alternatives to and benefits of the local speech recognition model

To leverage AI capabilities in websites and browser extensions, you can also use the following methods:

* Send network requests to cloud-based AI services, such as [Azure AI solutions](https://azure.microsoft.com/solutions/ai).

* Run local AI models using the [Web Neural Network (WebNN) API](https://webmachinelearning.github.io/webnn-intro/) or [ONNX Runtime for Web](https://onnxruntime.ai/docs/tutorials/web/).


The Writing Assistance APIs use a small language model (SLM) that runs on the same device where the inputs to and outputs of the model are used (that is, locally).  This has the following benefits compared to cloud-based solutions:

* **Reduced cost:** There's no cost associated with using a cloud AI service.

* **Network independence:** Beyond the initial model download, there's no network latency when prompting the model, and may also be used when the device is offline.

* **Improved privacy:** The data input to the model never leaves the device and is not collected to train AI models.

The Writing Assistance APIs use a model that's provided by Microsoft Edge and built into the browser, which comes with the additional benefits over custom local solutions such as those based on WebGPU, WebNN, or WebAssembly:

* **Shared one-time cost:** The browser-provided model is downloaded the very first time the API is called and shared across all websites that run in the browser, reducing network costs for the user and developer.

* **Simplified usage for web developers:** The built-in model can be run by using straightforward web APIs and doesn't require AI/ML expertise or using third-party frameworks.


<!-- ------------------------------ -->
#### Model availability

An initial download of the model will be required the first time a website uses the local speech recognition model with the SpeechRecognition API.

You can monitor the model download by using the promise that's returned by the SpeechRecognition API `install()` method.  To learn more, see [Check whether the local model is already installed](#check-whether-the-local-model-is-already-installed), below.


<!-- ====================================================================== -->
## Enable local speech recognition in Microsoft Edge

To use the local speech recognition model with the SpeechRecognition API, you need to enable the feature in Microsoft Edge Canary or Dev.  To enable the feature:

1. Make sure you're using the latest version of Microsoft Edge Canary or Dev (version XYZ or newer).  See [Become a Microsoft Edge Insider](https://www.microsoft.com/edge/download/insider).

1. In Microsoft Edge Canary or Dev, open a new tab or window and go to `edge://flags/`.

1. In the search box, at the top of the page, enter **On-Device Speech Recognition**.

   The page is filtered to show the matching flag.

1. Select **Enabled** next to the flag for the API you want to enable:

   ![Flags page of browser](./speech-recognition-apis-images/flag.png)

1. Restart Microsoft Edge Canary or Dev.


<!-- ====================================================================== -->
## See a working example

To see the SpeechRecognition API in action, and review existing code:

1. [Enable local speech recognition in Microsoft Edge](#enable-local-speech-recognition-in-microsoft-edge), as described above.

1. In Microsoft Edge Canary or Dev browser, open a tab or window and go to [SpeechRecognition API](https://microsoftedge.github.io/Demos/built-in-ai/playgrounds/speechrecognition-api/).

1. In the information banner at the top, check the status: it initially reads **...TODO...**:

   ![...TODO...](./speech-recognition-apis-images/....png)

TODO: describe the steps to download the local model.

1. Under **Input language**, choose the language you want to use for speech recognition.

1. Under **Audio source**, use the dropdown menu to select the audi to use for speech recognition:

   * Choose **Microphone** to use your device microphone as the audio source.
   * Choose **File** to use an audio or video file from your device as the audio source.

1. If you chose **File** as the audio source, click **Choose file** under the **Media file** section, and select an audio or video file from your device.

1. Click **Start** to start transcribing the input audio into text.

   The text transcription is displayed in the page:

   ... TODO screenshot with red boxes around the relevant sections ...

1. To stop converting speech to text, at any time, click the **Stop** button.

   The transcription might also stop automatically after a long period of silence in the input audio.

See also:
* [/built-in-ai/playgrounds/speechrecognition-api/](https://github.com/MicrosoftEdge/Demos/tree/main/built-in-ai/playgrounds/speechrecognition-api) - Source code for the SpeechRecognition API playground demo.


<!-- ====================================================================== -->
## Use the SpeechRecognition API with local recognition in your website

The following sections describe how to use the SpeechRecognition API with local speech recognition in your website's code.  For more details about the API itself, see [Web Speech API](https://developer.mozilla.org/docs/Web/API/Web_Speech_API), at MDN.


<!-- ------------------------------ -->
#### Check if the API is supported and instantiate a SpeechRecognition object

To ensure that the SpeechRecognition API is supported in the browser, test whether the `SpeechRecognition` object is available:

```js
if (!window.SpeechRecognition) {
  console.log("The SpeechRecognition API is not available in this browser.");
} else {
  console.log("The SpeechRecognition API is available.");

  const recognition = new SpeechRecognition();
}
```

See also:
* [SpeechRecognition](https://developer.mozilla.org/docs/Web/API/SpeechRecognition), at MDN.


<!-- ------------------------------ -->
#### Choose an input language and opt-in to local recognition

To configure speech recognition by using a local model, choose an input language and set the `processLocally` option: 

```js
recognition.lang = "en-US";
recognition.processLocally = true;
```

Also set the `continuous` and `interimResults` options to `true` to receive interim results and transcribe long audio sessions without stopping:

```js
recognition.continuous = true;
recognition.interimResults = true;
```

See also:
* [SpeechRecognition: lang property](https://developer.mozilla.org/docs/Web/API/SpeechRecognition/lang), at MDN.
* [SpeechRecognition: processLocally property](https://developer.mozilla.org/docs/Web/API/SpeechRecognition/processLocally), at MDN.
* [SpeechRecognition: continuous property](https://developer.mozilla.org/docs/Web/API/SpeechRecognition/continuous), at MDN.
* [SpeechRecognition: interimResults property](https://developer.mozilla.org/docs/Web/API/SpeechRecognition/interimResults), at MDN.


<!-- ------------------------------ -->
#### Check whether the local model is already installed

Before starting recognition, check model availability for your selected language. If the model is not yet installed, trigger the installation and wait for it to complete before starting recognition:

```js
async function ensureModelReady(lang) {
  const availability = await SpeechRecognition.available({
    langs: [lang],
    processLocally: true,
  });

  if (availability === "available") {
    return true;
  }

  if (availability === "downloadable" || availability === "downloading") {
    const installed = await SpeechRecognition.install({
      langs: [lang],
      processLocally: true,
    });

    if (!installed) {
      throw new Error(`Failed to install local model for ${lang}.`);
    }

    return true;
  }

   return false;
}
```

The promise returned by `SpeechRecognition.install()` resolves when installation succeeds or fails.

See also:
* [SpeechRecognition: available() static method](https://developer.mozilla.org/docs/Web/API/SpeechRecognition/available_static), at MDN.
* [SpeechRecognition: install() static method](https://developer.mozilla.org/docs/Web/API/SpeechRecognition/install_static), at MDN.


<!-- ------------------------------ -->
#### Start speech recognition

After you've made sure that the API and model are both ready, to start recognition, use the `start()` method.

When called without a parameter, the `start()` method recognizes audio from the user's microphone:

```js
recognition.start();
```

To recognize audio from a media file instead, pass a `MediaStreamTrack` instance as an argument to the `start()` method.  For example, you can create a `MediaStreamTrack` instance by creating a `MediaStreamDestinationNode` instance by using the WebAudio API:

```js
const audioContext = new AudioContext();
const mediaStreamDestination = audioContext.createMediaStreamDestination();
recognition.start(mediaStreamDestination.stream.getAudioTracks()[0]);
```

See also:
* [SpeechRecognition: start() method](https://developer.mozilla.org/docs/Web/API/SpeechRecognition/start), at MDN.
* [Web Audio API](https://developer.mozilla.org/docs/Web/API/Web_Audio_API), at MDN.


<!-- ------------------------------ -->
#### Stop recognition explicitly and on media end

To stop recognition, use the `stop()` method:

```js
recognition.stop();
```

You can also choose to stop recognition when the media input ends, by using the `onended` event handler of the media element that you're using as input.  For example, if you're using a `HTMLAudioElement` or `HTMLVideoElement` as the audio source, you can set up the event handler like this:

```js
mediaElement.onended = () => recognition.stop();
```

See also:
* [SpeechRecognition: stop() method](https://developer.mozilla.org/docs/Web/API/SpeechRecognition/stop), at MDN.


<!-- ====================================================================== -->
## Send feedback

... TODO: Sohum: what kind of feedback are we looking for, and where should it be sent? ...


<!-- ====================================================================== -->
## See also

... TODO ...
