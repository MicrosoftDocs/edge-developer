---
title: Summarize, write, and rewrite text with the Writing Assistance APIs
description: Summarize, write, and rewrite text with the Writing Assistance APIs.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.date: 11/18/2026
---
# Summarize, write, and rewrite text with the Writing Assistance APIs
<!-- https://aka.ms/edge-writing-assistance-api-docs -->

The Writing Assistance APIs are experimental web APIs that allow you to summarize, write, and rewrite text by using a small language model (SLM) that is built into Microsoft Edge, from your website's or browser extension's JavaScript code.

For introductory information about the Summarizer API, Writer API, and Rewriter API, see [Writing Assistance APIs Explainer](https://github.com/webmachinelearning/writing-assistance-apis).

**Detailed contents:**

* [Availability of the Writing Assistance APIs](#availability-of-the-writing-assistance-apis)
* [Alternatives to and benefits of the Writing Assistance APIs](#alternatives-to-and-benefits-of-the-writing-assistance-apis)
* [The Aion Instruct model](#the-aion-instruct-model)
    * [Disclaimer](#disclaimer)
    * [Hardware requirements](#hardware-requirements)
    * [Availability of the Aion Instruct model](#availability-of-the-aion-instruct-model)
    * [Consideration for Edge Canary, Dev, and Beta](#consideration-for-edge-canary-dev-and-beta)
* [Enable the Writing Assistance APIs](#enable-the-writing-assistance-apis)
* [See working examples](#see-working-examples)
* [Use the Writing Assistance APIs](#use-the-writing-assistance-apis)
    * [Check if the APIs are enabled](#check-if-the-apis-are-enabled)
    * [Check if the model can be used](#check-if-the-model-can-be-used)
    * [Create a new session](#create-a-new-session)
        * [Monitor the progress of the model download](#monitor-the-progress-of-the-model-download)
        * [Set the type of summary](#set-the-type-of-summary)
        * [Set the tone of the generated text](#set-the-tone-of-the-generated-text)
        * [Set the length of the generated text](#set-the-length-of-the-generated-text)
        * [Set the format of the generated text](#set-the-format-of-the-generated-text)
    * [Run the Writing Assistance APIs](#run-the-writing-assistance-apis)
        * [Wait for the text to be generated](#wait-for-the-text-to-be-generated)
        * [Display tokens as they are generated](#display-tokens-as-they-are-generated)
    * [Stop generating text](#stop-generating-text)
    * [Destroy a session](#destroy-a-session)
        * [Destroy a session by using the destroy() method](#destroy-a-session-by-using-the-destroy-method)
        * [Destroy a session by using an AbortController](#destroy-a-session-by-using-an-abortcontroller)
    * [Account for the AI-generated content watermark](#account-for-the-ai-generated-content-watermark)
* [Send feedback](#send-feedback)
* [See also](#see-also)


<!-- ====================================================================== -->
## Availability of the Writing Assistance APIs

The Summarizer API, Writer API, and Rewriter API are available as a developer preview in Microsoft Edge, starting with version 158.  You can test the Writing Assistance APIs locally in Microsoft Edge, on your device only.  See [Enable the Writing Assistance APIs](#enable-the-writing-assistance-apis), below.

The Writing Assistance APIs are optimized for tasks specific to generating, modifying, and summarizing text content.  To learn more about an alternative for more custom prompt engineering scenarios that may not be served by these APIs, see [Prompt a built-in language model with the Prompt API](./prompt-api.md).


<!-- ====================================================================== -->
## Alternatives to and benefits of the Writing Assistance APIs

To leverage AI capabilities in websites and browser extensions, you can also use the following methods:

* Send network requests to cloud-based AI services, such as [Azure AI solutions](https://azure.microsoft.com/solutions/ai).

* Run local AI models using the [Web Neural Network (WebNN) API](https://webmachinelearning.github.io/webnn-intro/) or [ONNX Runtime for Web](https://onnxruntime.ai/docs/tutorials/web/).


The Writing Assistance APIs use a small language model (SLM) that runs on the same device where the inputs to and outputs of the model are used (that is, locally).  This has the following benefits compared to cloud-based solutions:

* **Reduced cost:** There's no cost associated with using a cloud AI service.

* **Network independence:** Beyond the initial model download, there's no network latency when prompting the model, and may also be used when the device is offline.

* **Improved privacy:** The data input to the model never leaves the device, and isn't collected to train AI models.

The Writing Assistance APIs use a model that's provided by Microsoft Edge and built into the browser, which comes with the additional benefits over custom local solutions such as those based on WebGPU, WebNN, or WebAssembly:

* **Shared one-time cost:** The browser-provided model is downloaded the very first time the API is called and shared across all websites that run in the browser, reducing network costs for developers and users.

* **Simplified usage for web developers:** The built-in model can be run by using straightforward web APIs and doesn't require AI/ML expertise or using third-party frameworks.


<!-- ====================================================================== -->
## The Aion Instruct model

In Microsoft Edge, the Writing Assistance APIs use the Aion Instruct model, which is built into the browser.  Aion Instruct is a capable 2.3B parameter small language model which excels at text-based tasks.  To learn more about the model, see the model card at [microsoft/Aion-1.0-Instruct](https://aka.ms/aion-instruct-hugging-face), at Hugging Face.


<!-- ------------------------------ -->
#### Disclaimer

Like other language models of this size, Aion Instruct can potentially behave in ways that are unreliable, inaccurate, unfair, or offensive.  You should consider the risks of passing untrusted content to the model, and validate the source and integrity of content before using the content as model input.  To learn more about the model's Responsible AI considerations, see [Responsible AI Considerations](https://aka.ms/aion-instruct-hugging-face-disclaimers), in _microsoft/Aion-1.0-Instruct_, at Hugging Face.


<!-- ------------------------------ -->
#### Hardware requirements

The Writing Assistance APIs developer preview is intended to work on devices with hardware capabilities that produce SLM outputs with predictable quality and latency.

The Writing Assistance APIs are currently limited to:

* **Operating system:** Windows 10 or 11 and macOS 13.3 or later.

* **Storage:** At least 20 GB available on the volume that contains your Edge profile.  If the available storage drops below 5 GB, the model will be deleted to ensure that other browser features have sufficient space to function.

* **GPU:** 3 GB of VRAM or more.

* **Network:** Unlimited data plan or unmetered connection.  The model isn't downloaded if using a metered connection.

To check if your device supports the Writing Assistance APIs developer preview, see [Enable the Writing Assistance APIs](#enable-the-writing-assistance-apis) below and check your device performance class.

Due to the experimental nature of the Writing Assistance APIs, you might observe issues on specific hardware configurations.  If you see issues on specific hardware configurations, please provide feedback by [opening a new issue](https://github.com/MicrosoftEdge/MSEdgeExplainers/issues/new?template=writing-assistance-api.md) at the MSEdgeExplainers repository.


<!-- ------------------------------ -->
#### Availability of the Aion Instruct model

An initial download of the Aion Instruct model is required the first time that a website calls an API that requires an on-device model.  To monitor the downloading of the model, use the `monitor` option when creating a new Summarizer, Writer, or Rewriter API session.  See [Monitor the progress of the model download](#monitor-the-progress-of-the-model-download), below.

The model is unavailable in the following conditions:

* If the **On-device AI** option is disabled under **Settings** > **Copilot and AI**.
* If the [GenAILocalFoundationalModelSettings](/deployedge/microsoft-edge-policies/genailocalfoundationalmodelsettings) or [ComponentUpdatesEnabled](/deployedge/microsoft-edge-policies/ComponentUpdatesEnabled) enterprise policies are configured to block the model download.
* If the device doesn't meet hardware, disk space, or network requirements.


<!-- ------------------------------ -->
#### Consideration for Edge Canary, Dev, and Beta

In Microsoft Edge Canary, Dev, and Beta, the **On-device AI** option is disabled by default under **Settings** > **Copilot and AI**, to avoid downloading the model separately for each channel.

If you enable the **Summarizer API**, **Writer API**, or **Rewriter API** flag in `edge://flags`, the **On-device AI** option is automatically enabled in Canary, Dev, and Beta.  See [Enable the Writing Assistance APIs](#enable-the-writing-assistance-apis), below.


<!-- ====================================================================== -->
## Enable the Writing Assistance APIs

To use the Summarizer API, Writer API, or Rewriter API in Microsoft Edge:

1. Make sure you're using Microsoft Edge version 158 or later.

1. In Microsoft Edge, open a new tab or window, and then go to `edge://flags`.

1. In the **Search flags** text box at the top of the page, enter **API**, or the name of the API that you want to use.

   The following flags are listed:

   * **Summarizer API**
   * **Writer API**
   * **Rewriter API**

1. Next to the flag for the API, select **Enabled**:

   ![Flags page of browser](./writing-assistance-apis-images/flags-rewriter-api.png)

1. Optionally, to log information locally that may be useful for debugging issues, also enable the **Enable on device AI model debug logs** flag.

1. Click the **Restart** button.

1. To check if your device meets the hardware requirements for the Writing Assistance APIs developer preview, open a new tab, go to `edge://on-device-internals`, and check the **Device performance class** value.

   If your device performance class is **Medium** or greater, the Writing Assistance APIs are supported on your device.

   If you notice issues with the model, please [file a new issue](https://github.com/MicrosoftEdge/MSEdgeExplainers/issues/new?template=writing-assistance-api.md) in the MSEdgeExplainers repo.


<!-- ====================================================================== -->
## See working examples

To see the Writing Assistance APIs in action, and review existing code that uses these APIs:

1. [Enable the Writing Assistance APIs](#enable-the-writing-assistance-apis), as described above.

1. In Microsoft Edge, open a tab or window and go to the [Summarizer API playground](https://microsoftedge.github.io/Demos/built-in-ai/playgrounds/summarizer-api/).

1. In the **Built-in AI playgrounds** navigation on the left:

   * For the Summarizer API playground, click **Summarizer**.
   * For the Writer API playground, click **Writer**.
   * For the Rewriter API playground, click **Rewriter**.

1. In the information banner at the top, check the status: it initially reads **Model downloading, please wait**:

   ![Status indicator showing model downloading progress](./writing-assistance-apis-images/model-downloading.png)

   After the model has downloaded, the information banner reads **API and model ready**, indicating that the API and model can be used:

   ![Status indicator showing API and model ready](./writing-assistance-apis-images/api-and-model-ready.png)

   If the model download doesn't start, restart Microsoft Edge and try again.

   The Writing Assistance APIs are only supported on devices that meet certain hardware requirements.  For more information, see [Hardware requirements](#hardware-requirements), above.

1. Optionally change the settings in the playground pages, such as the text to summarize, write, or rewrite, or the length and format of the expected output.

1. Click the **Summarize**, **Write**, or **Rewrite** button, at the bottom of the page.

   The output is generated in the response section of the page:

   ![The Summarizer demo page with settings and a Summarize button](./writing-assistance-apis-images/summarizing.png)

1. To stop generating the response, at any time, click the **Stop** button.

See also:
* [/built-in-ai/](https://github.com/MicrosoftEdge/Demos/tree/main/built-in-ai/) - Source code and Readme for the Built-in AI playgrounds demo.


<!-- ====================================================================== -->
## Use the Writing Assistance APIs

The three Writing Assistance APIs — Summarizer, Writer, and Rewriter — are used very similarly and are documented together in the sections below.


<!-- ------------------------------ -->
#### Check if the APIs are enabled

Before using any of the Writing Assistance APIs in your website's code, check that the API is enabled by testing the presence of the `Summarizer`, `Writer`, or `Rewriter` objects:

```javascript
if (!Summarizer) {
  // The Summarizer API is not available.
}

if (!Writer) {
  // The Writer API is not available.
}

if (!Rewriter) {
  // The Rewriter API is not available.
}
```


<!-- ------------------------------ -->
#### Check if the model can be used

The Writing Assistance APIs can only be used if the device supports running the model, and once the language model and model runtime have been downloaded by Microsoft Edge.

To check if the API can be used, use the API's `availability()` method.  For example, to check for the availability of the model with the Writer API:

```javascript
const availability = await Writer.availability();

if (availability == "unavailable") {
  // The model is not available.
}

if (availability == "downloadable" || availability == "downloading") {
  // The model can be used, but it needs to be downloaded first.
}

if (availability == "available") {
  // The model is available and can be used.
}
```

To check for the availability of the model with the Rewriter and Summarizer APIs, change `Writer` to `Rewriter` or `Summarizer` in the above code.


<!-- ------------------------------ -->
#### Create a new session

Creating a session instructs the browser to load the language model in memory, so that it can be used.  Before you can use the Writing Assistance APIs to summarize, write, or rewrite text, create a new session by using the `create()` method:

```javascript
// Create a Summarizer session.
const summarizerSession = await Summarizer.create();

// Create a Writer session.
const writerSession = await Writer.create();

// Create a Rewriter session.
const rewriterSession = await Rewriter.create();
```

To customize the model session, you can pass options to the `create()` method:

```javascript
// Create a Writer session with options.
const session = await Writer.create(options);
```

Some options are common to the three Writing Assistance APIs, while other options are different, or take different values.  The available options, per API, are listed below:

| **Option** | **Summarizer API** | **Writer API** | **Rewriter API** |
| --- | --- | --- | --- |
| `monitor` | Monitor object | Monitor object | Monitor object |
| `type` | String: `"tl;dr"`, `"key-points"`, `"teaser"`, `"headline"` | Not supported | Not supported |
| `tone` | Not supported | String: `"formal"`, `"neutral"`, `"casual"` | String: `"as-is"`, `"more-formal"`, `"more-casual"` |
| `length` | String: `"short"`, `"medium"`, `"long"` | String: `"short"`, `"medium"`, `"long"` | String: `"as-is"`, `"shorter"`, `"longer"` |
| `format` | String: `"plain-text"`, `"markdown"` | String: `"plain-text"`, `"markdown"` | String: `"as-is"`, `"plain-text"`, `"markdown"` |

These options are documented below.


<!-- ---------- -->
###### Monitor the progress of the model download

To follow the progress of the downloading of the model, use the `monitor` option.  This is useful when the model has not yet been fully downloaded onto the device on which the model will be used, to inform users of your website that they need to wait.

```javascript
// Create a Summarizer session with the monitor option to monitor the model
// download.
const session = await Summarizer.create({
  monitor: m => {
    // Use the monitor object argument to add an listener for the
    // downloadprogress event.
    m.addEventListener("downloadprogress", event => {
      // The event is an object with the loaded and total properties.
      if (event.loaded == event.total) {
        // The model is fully downloaded.
      } else {
        // The model is still downloading.
        const percentageComplete = (event.loaded / event.total) * 100;
      }
    });
  }
});
```


<!-- ---------- -->
###### Set the type of summary

The `type` option is only supported by the Summarizer API.  Use the `type` option to ask the language model to generate a summary of one of the following types:

* `tl;dr`
* `key-points`
* `teaser`
* `headline`

Example of creating a `Summarizer` session with summary `type` option of `key-points`:

```javascript
const session = await Summarizer.create({
  type: "key-points"
});
```


<!-- ---------- -->
###### Set the tone of the generated text

The Writer and Rewriter APIs support the `tone` option.

Use the `tone` option to set the tone of the text that will be written or rewritten.

The Writer API supports the following values for the `tone` option:

* `formal`
* `neutral`
* `casual`

The Rewriter API supports the following values for the `tone` option:

* `as-is`
* `more-formal`
* `more-casual`

Example of creating a `Rewriter` session, asking the model to rewrite text to use a `tone` of `more-formal`:

```javascript
const session = await Rewriter.create({
  tone: "more-formal"
});
```


<!-- ---------- -->
###### Set the length of the generated text

The `length` option is supported by the Summarizer, Writer, and Rewriter APIs, and is used to control the length of the generated text.

The Writer and Summarizer APIs support the following values:

* `short`
* `medium`
* `long`

The Rewriter API supports the following values:

* `as-is`
* `shorter`
* `longer`

Example of creating a `Writer` session, asking the model to generate text with `length` of `long`:

```javascript
const session = await Writer.create({
  length: "long"
});
```


<!-- ---------- -->
###### Set the format of the generated text

The `format` option is supported by the Summarizer, Writer, and Rewriter APIs, and is used to ask the model to generate either generate plain text, or text formatted as markdown.

The Writer and Summarizer APIs support the following values:

* `plain-text`
* `markdown`

The Rewriter API supports the following values:

* `as-is`
* `plain-text`
* `markdown`

Example of creating a `Rewriter` session, asking the model to rewrite the provided text to produce the `format` as `markdown`:

```javascript
const session = await Rewriter.create({
  format: "markdown"
});
```


<!-- ------------------------------ -->
#### Run the Writing Assistance APIs

To generate text, by using the Summarizer, Writer, or Rewriter APIs, after you have created the corresponding model session, use the following methods:

* `summarizerSession.summarize()`
* `writerSession.write()`
* `rewriterSession.rewrite()`

Or, to display the generated text as it's getting generated, use the streaming versions of the above methods:

* `summarizerSession.summarizeStreaming()`
* `writerSession.writeStreaming()`
* `rewriterSession.rewriteStreaming()`

The two versions of these methods are documented below.


<!-- ---------- -->
###### Wait for the text to be generated

To wait for the text to be fully generated before continuing to run code, use the `summarize()`, `write()`, and `rewrite()` asynchronous methods.  These methods return a promise that resolves once the corresponding API has finished generating text.

Example of using the `summarize()` async method of the Summarizer API:

```javascript
// Create a Summarizer session.
const summarizerSession = await Summarizer.create();

// Summarize text and wait for the summary to be done.
const summary = await summarizerSession.summarize(textToBeSummarized);

// Use the summary.
console.log(summary);
```


<!-- ---------- -->
###### Display tokens as they are generated

To display the tokens as they are being generated, use the streaming versions of the above methods instead.  The `summarizeStreaming()`, `writeStreaming()`, and `rewriteStreaming()` methods return a stream object right away.  Use the returned stream object to display the response tokens as they are being generated.

Example of using the `summarizeStreaming()` async method of the Summarizer API:

```javascript
// Create a Summarizer session.
const session = await Summarizer.create();

// Ask the model to summarize text.
const stream = session.summarizeStreaming(textToBeSummarized);

// Use the stream object to display tokens that are generated by the model, as
// they are being generated.
for await (const chunk of stream) {
  console.log(chunk);
}
```


<!-- ------------------------------ -->
#### Stop generating text

To stop generating text before the promise or stream returned by the above methods have resolved or ended, use an `AbortController` signal:

Example of a `Rewriter` session using an `AbortController` signal:

```javascript
// Create a Rewriter session.
const session = await Rewriter.create();

// Create an AbortController object.
const abortController = new AbortController();

// Use the model session to generate some text and pass the AbortController
// object by using the signal option.
const stream = session.rewriteStreaming(textToBeRewritten, {
    signal: abortController.signal
});

// Later, perhaps when the user presses a "Stop" button, call the abort()
// method on the AbortController object to stop generating text.
abortController.abort();
```

For a `Summarizer` or `Writer` session, in the above code:
* Change `Rewriter.create()` to `Summarizer.create()` or `Writer.create()`.
* Change from using `session.rewriteStreaming()`.


<!-- ------------------------------ -->
#### Destroy a session

Destroy the session to let the browser know that you don't need the language model anymore, so that the model can be unloaded from memory.

You can destroy a session in two different ways:
* By using the `destroy()` method.
* By using an `AbortController`.


<!-- ---------- -->
###### Destroy a session by using the destroy() method

You can use the `destroy()` method with a `Summarizer`, `Writer`, or `Rewriter` session.

Example using a `Summarizer` session:

```javascript
const session = await Summarizer.create();

// Later, destroy the session by using the destroy method.
session.destroy();
```


<!-- ---------- -->
###### Destroy a session by using an AbortController

Alternatively, you can create an `AbortController` object, create a `Summarizer`, `Writer`, or `Rewriter` session, and then call `abort()`.

Example using a `Writer` session:

```javascript
// Create an AbortController object.
const controller = new AbortController();

// Create a Summarizer, Writer, or Rewriter session and pass the
// AbortController object by using the signal option.
const session = await Writer.create({ signal: controller.signal });

// Later, perhaps when the user interacts with the UI, destroy the session by
// calling the abort() function of the AbortController object.
controller.abort();
```


<!-- ------------------------------ -->
#### Account for the AI-generated content watermark

Starting with Microsoft Edge version 158, text generated by the Writing Assistance APIs includes an invisible watermark, which indicates that the text is AI-generated. If your website or extension processes the generated text, make sure that your code accounts for the watermark when you render, parse, or convert the response.

To learn more about the watermarking scheme, see [Watermarking scheme](/windows/ai/apis/text-watermarking#watermarking-scheme) in _Watermarking in Windows AI text APIs_.

Before you remove the automatically inserted watermark, consider these requirements: you are responsible for making sure that your website or extension meets all applicable requirements for marking AI-generated content.


<!-- ====================================================================== -->
## Send feedback

We're interested in learning about:
* The range of scenarios for which you intend to use the Writing Assistance APIs.
* Any issues with the Writing Assistance APIs.
* Any issues with the language models.
* Whether new task-specific APIs would be useful.

To send feedback about your scenarios and the tasks you want to achieve, please add a comment to [the Writing Assistance APIs feedback issue](https://github.com/MicrosoftEdge/MSEdgeExplainers/issues/1031).

If you notice any issues when using the APIs instead, please [report it on the repo](https://github.com/MicrosoftEdge/MSEdgeExplainers/issues/new?template=writing-assistance-api.md).

You can also contribute to the discussion about the design of the Writing Assistance APIs at the [W3C Web Machine Learning Working Group repository](https://github.com/webmachinelearning/writing-assistance-apis).


<!-- ====================================================================== -->
## See also

* [Writing Assistance APIs Explainer](https://github.com/webmachinelearning/writing-assistance-apis), on the Web Machine Learning GitHub repo.
* [Prompt a built-in language model with the Prompt API](./prompt-api.md)
* [Correct grammar, spelling, and punctuation errors in text with the Proofreader API](./proofreader-api.md)
* [Translate text with the Translator API](./translator-api.md)

GitHub:
* [/built-in-ai/](https://github.com/MicrosoftEdge/Demos/tree/main/built-in-ai/) - Source code and Readme for the Built-in AI playgrounds demo
