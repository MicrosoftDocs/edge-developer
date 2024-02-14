---
title: Record and replay user flows and measure performance
description: Use the Recorder tool to record a series of steps in a browser window, and then replay them automatically, while optionally also measuring performance.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 02/14/2024
---
# Record and replay user flows and measure performance

Use the **Recorder** tool to record a series of steps in the browser window or tab where DevTools is opened, and then replay the steps automatically, while optionally also measuring performance.

This article is a step-by-step tutorial walkthrough of the **Recorder** tool. For a comprehensive description of the features of the **Recorder** tool, see [Recorder features reference](./reference.md).


<!-- ====================================================================== -->
## When to use the Recorder tool

Use the **Recorder** tool when you want to speed up repetitive tasks by automatically replaying a series of user interactions in the browser.

The **Recorder** tool records user interactions, such as mouse clicks, keyboard input, and page navigation events, and lets you replay the interactions automatically. You can also use the **Recorder** tool to measure the runtime performance while replaying the recorded user interactions. The **Recorder** tool lets you record as many user flows as you want, and replay them as many times as you want.

For the rest of this article, we'll use the **Recorder** tool to automate adding tasks to the demo [TODO app](https://microsoftedge.github.io/Demos/demo-to-do/).


<!-- ====================================================================== -->
## Open the Recorder tool

1. Open the [TODO app](https://microsoftedge.github.io/Demos/demo-to-do/) in a new tab or window.

1. To open DevTools, right-click the webpage, and then select **Inspect**.  Or, press **Ctrl+Shift+I** (Windows, Linux) or **Command+Option+I** (macOS).  DevTools opens.

1. In DevTools, on the **Activity Bar**, select the **Recorder** tab.  If that tab isn't visible, click the **More tools** (![More tools icon](./index-images/more-tools-icon.png)) button, and then select **Recorder**.  The **Recorder** tool opens:

   ![The demo TODO app and the Recorder tool in DevTools, next to it](./index-images/recorder-tool.png)


<!-- ====================================================================== -->
## Record a user flow

To start recording a new user flow:

1. Click **Create a new recording**.

1. Under **Recording name**, enter a name for the recording, such as "Adding TODO tasks".

1. Click **Start recording** at the bottom of the **Recorder** tool:

   ![The recording name and start recording button](./index-images/start-recording.png)

1. In the rendered webpage, interact with the page. For example, enter "task 1" in the **Add a task** input box, and then press **Enter**. Repeat these steps multiple times.

   A red circle appears next to the recording name, indicating that the recording is in progress. The **Recorder** tool records your interactions and displays them as a list of steps:

   ![The recorded user interactions displayed as a list in the Recorder tool](./index-images/list-of-interactions.png)

1. To stop the recording, at the bottom of the list of recorded interactions, click **End recording**.

   The recording stops, and the circle next to the recording name turns blue, indicating that the recording is complete:

   ![The finalized recording and the Replay button](./index-images/final-recording.png)


<!-- ====================================================================== -->
## Record other user flows

To record a new user flow, once you've stopped the recording of the previous user flow, click the **Create a new recording** (![Create a new recording button](./index-images/new-recording-icon.png)) button in the top-left corner of the **Recorder** tool, and then repeat the steps from [Record a user flow](#record-a-user-flow):

![The Create a new recording button](./index-images/create-new-recording.png)


<!-- ====================================================================== -->
## Replay a user flow

You can replay user flows either from the list of recorded user flows, or when viewing the details of a given user flow.

* To view the list of recorded user flows, click the dropdown menu that's in the **Recorder** tool toolbar, at the top, and select **2 recording(s)**. The label might show a different number of recordings, depending on how many recordings you've made.
* To view the details of a given user flow, click the dropdown menu that's in the **Recorder** tool toolbar, at the top, and click the name of the user flow you want to view.


<!-- ------------------------------ -->
#### Replay a user flow from the list of recordings

1. Click **Play recording** next to the recording that you want to replay:

   ![The list of recordings, and the play button next to each recording](./index-images/play-from-list.png)

1. Wait while the **Recorder** tool replays the previously recorded user interactions. An animation of the steps that are being replayed appears in the **Recorder** tool:

   ![The replayed interactions displayed as an animation in the Recorder tool](./index-images/replayed-interactions-animation.png)

   When the replay is complete, the animation stops, and the **Recorder** tool displays the recording's steps.


<!-- ------------------------------ -->
#### Replay a user flow from a recording

1. Click **Replay** in the top-right corner of the **Recorder** tool:

   ![The Replay button on a recorded user flow details page](./index-images/play-from-recording.png)

1. Wait while the **Recorder** tool replays the previously recorded user interactions. An animation of the steps that are being replayed appears in the **Recorder** tool:

   ![The replayed interactions displayed as an animation in the Recorder tool](./index-images/replayed-interactions-animation.png)

   When the replay is complete, the animation stops, and the **Recorder** tool displays the recording's steps.


<!-- ====================================================================== -->
## Measure performance

To measure how fast a website runs while replaying a series of user interactions, use the **Recorder** tool. By recording a user flow once, you can replay the recording many times, while working on improving the runtime performance of the website.

1. To record a new user flow, follow the steps from [Record a user flow](#record-a-user-flow).

1. To replay the user flow while measuring performance, click **Performance panel** in the top-right corner of the **Recorder** tool:

   ![The Performance panel button](./index-images/measure-performance.png)

1. Wait while the **Recorder** tool replays the previously recorded user interactions.

   The **Performance** tool opens, and displays a recording of the performance of the website while the user interactions were being replayed:

   ![The Performance tool displaying a recording of the performance of the website](./index-images/performance-tool.png)


<!-- ====================================================================== -->
## See also

* [Recorder features reference](./reference.md)
