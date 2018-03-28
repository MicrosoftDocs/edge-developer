---
ms.assetid: bd08f0fc-e08b-4289-a873-aece57dd82ac
description: Learn how the Web Speech API can be used to support speech synthesis within Microsoft Edge.
title: Dev guide - Web Speech API
author: libbymc
ms.author: libbymc
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Web Speech API: Speech Synthesis

The [Web Speech API](https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html) is a JavaScript API made up of two parts: speech recognition and speech synthesis (or text to speech). At this time Microsoft Edge supports only speech synthesis. Speech synthesis involves the conversion of text to speech that a user hears through their speakers. 

The web speech synthesis API has four objects that control the text to speech: [`SpeechSynthesis`](https://msdn.microsoft.com/en-us/library/mt718509(v=vs.85).aspx), [`SpeechSynthesisUtterance`](https://msdn.microsoft.com/en-us/library/mt718742(v=vs.85).aspx), [`SpeechSynthesisEvent`](https://msdn.microsoft.com/en-us/library/mt718846(v=vs.85).aspx), and [`SpeechSynthesisVoice`](https://msdn.microsoft.com/en-us/library/mt718851(v=vs.85).aspx).

Take a look at the demo of a speech synthesizer on [Test Drive](https://developer.microsoft.com/en-us/microsoft-edge/testdrive/demos/speechsynthesis/). 

## Making your website talk

You can make your website talk with only one line of code:

```js
window.speechSynthesis.speak(new SpeechSynthesisUtterance("Hello world!"));
```

In this example, you create a new instance of the [`SpeechSynthesisUtterance`](https://msdn.microsoft.com/en-us/library/mt718742(v=vs.85).aspx) object and pass it the text to synthesize: hello world! This text is then spoken using the system’s default voice. 

The [`SpeechSynthesis`](https://msdn.microsoft.com/en-us/library/mt718509(v=vs.85).aspx) object controls the text to speech output and contains a queue of utterances, or the text to be spoken. After calling `speechSynthesis.speak`, the first utterance in the queue will begin speaking, and if there are additional utterances in the queue, the remaining utterances will speak after the first utterance is completed.  

The text to be synthesized, using `speechSynthesis.text`, can simply be plain text, like "hello world", or you can use a well-formed [Speech Synthesis Markup Language (SSML)](http://www.w3.org/TR/speech-synthesis/) document.

To accept text from an input, use the following code to create an [`<input>`](https://msdn.microsoft.com/en-us/library/ms535260(v=vs.85).aspx) and a [`<button>`](https://msdn.microsoft.com/en-us/library/ms535211(v=vs.85).aspx) that calls the `speakText()` function:

```html
Text: <input type="text" id="textInputBox" />
<button onclick="speakText()">Speak</button>
```

```js
function speakText() {
    var textInput = document.getElementById("textInputBox").value;
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(textInput));
}
```

You can also call [`pause`](https://msdn.microsoft.com/en-us/library/mt718510(v=vs.85).aspx), [`resume`](https://msdn.microsoft.com/en-us/library/mt718513(v=vs.85).aspx), and [`cancel`](https://msdn.microsoft.com/en-us/library/mt718507(v=vs.85).aspx) to control the playback of the utterances. Canceling clears the queue, while pausing and then resuming will begin speaking where the utterance left off. The buttons below will resume, pause, and cancel the playback of the utterances. 

```html
<button onclick="speechSynthesis.resume()">Resume</button>
<button onclick="speechSynthesis.pause()">Pause</button>
<button onclick="speechSynthesis.cancel()">Cancel</button>
```


## Changing the sound of the utterance

You can control the parameters that affect the sound of the speech with the [`SpeechSynthesisUtterance`](https://msdn.microsoft.com/en-us/library/mt718742(v=vs.85).aspx) object like [`voice`](https://msdn.microsoft.com/en-us/library/mt718761(v=vs.85).aspx), [`volume`](https://msdn.microsoft.com/en-us/library/mt718764(v=vs.85).aspx), [`rate`](https://msdn.microsoft.com/en-us/library/mt718757(v=vs.85).aspx), and [`pitch`](https://msdn.microsoft.com/en-us/library/mt718756(v=vs.85).aspx).  

```js 
var myUtterance = new SpeechSynthesisUtterance();

myUtterance.text = "Hello world!"
myUtterance.pitch = 1;  // accepted values: 0-2 inclusive, default value: 1
myUtterance.rate = 1.5; // accepted values: 0.1-10 inclusive, default value: 1
myUtterance.volume = .5; // accepted values: 0-1, default value: 1

speechSynthesis.speak(myUtterance);
```

> [!NOTE]
> In Microsoft Edge, the value for `pitch` will always be 1.0. 


Alternatively, you can allow users to input values for the `volume`, `rate`, and `pitch` properties using the following lines of code:

```html
Rate: <input type="number" id="numRate" />
```

```js
// get the value from id="numRate"
var nRate = document.getElementById("numRate").value;

// set the rate of utterance to nRate
utterance.rate = nRate;
```

## Voices  

The Web Speech API allows you to change the speaking voice. To check which voices are available on your browser, run the following code in your browser's console:

```js
speechSynthesis.getVoices().forEach(function (voice) {
   console.log(voice.name);
});
```

The example below populates the available voices into a drop-down list and changes the speaking voice to the one selected in the drop-down list. Create a [`<select>`](https://msdn.microsoft.com/en-us/library/ms535893(v=vs.85).aspx) element with `id="ddlVoices"` and use the following code to create the drop-down. 

```js
function voicesChangedHandler() {
  // load select element "ddlVoices" with available voice options
  var select = document.getElementById("ddlVoices");
  for (var i = 0; i < speechSynthesis.getVoices().length; i++) {
    var voice = speechSynthesis.getVoices()[i];

    // create an option element with voice name
    var option = document.createElement("option");
    option.textContent = voice.name;
    option.value = i;

    // add voice as option to select element
    select.appendChild(option);
  }
}

// populate drop-down list for the first time
voicesChangedHandler();
// update drop-down list whenever the voices change 
speechSynthesis.onvoiceschanged = voicesChangedHandler;
        
// set utterance.voice equal to the selected voice from the drop-down list
utterance.voice = speechSynthesis.getVoices()[parseInt(document.getElementById("ddlVoices").value)];
```

See the full example of a speech synthesizer on [Test Drive](https://developer.microsoft.com/en-us/microsoft-edge/testdrive/demos/speechsynthesis/). 



## API Reference

[Web Speech API](https://msdn.microsoft.com/en-us/library/mt703368(v=vs.85).aspx)

## Demos
[Speech Synthesis API Demo](https://developer.microsoft.com/en-us/microsoft-edge/testdrive/demos/speechsynthesis/)

## Related Topics
[Introducing the Speech Synthesis API in Microsoft Edge](https://blogs.windows.com/msedgedev/2016/06/01/introducing-speech-synthesis-api/)

## Specification

[Web Speech API](https://dvcs.w3.org/hg/speech-api/raw-file/tip/webspeechapi.html)
