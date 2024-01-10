---
title: Test and automation in Microsoft Edge
description: DevTools Protocol instruments, debugs, profiles browsers.  Origin Trials to try experimental APIs.  Playwright cross-browser automation via 1 API.  Puppeteer API automates via DevTools Protocol.  WebDriver simulates user interaction.  webhint linting checks for errors, best practices.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 02/02/2023
---
# Test and automation in Microsoft Edge

There are many tools to automate your testing of Microsoft Edge:

| Tool | Description |
| --- | --- |
| DevTools Protocol | Instrument, inspect, debug, and profile browsers including Microsoft Edge. |
| Origin Trials | Try out experimental APIs on live sites for a limited period of time. |
| Playwright | The Playwright library provides cross-browser automation through a single API. |
| Puppeteer | The Puppeteer library provides a high-level API to control browsers, including Microsoft Edge, using the DevTools Protocol. |
| WebDriver | Automates testing in Microsoft Edge by simulating user interaction.  Provides advantages over JavaScript unit tests. |
| webhint | Checks your code for best practices and common errors, to test and improve accessibility, performance, cross-browser and PWA compatibility, and security of your site. |

These tools are described below.


<!-- ====================================================================== -->
## DevTools Protocol

Use the DevTools Protocol to instrument, inspect, debug, and profile browsers, including Microsoft Edge.  By building Microsoft Edge on the Chromium open-source project, the Microsoft Edge DevTools Protocol matches the APIs of the Chrome DevTools Protocol.  For information about how Microsoft Edge uses the Chromium open-source project, see [Microsoft Edge and Chromium Open Source: Our Intent](https://github.com/MicrosoftEdge/MSEdge/blob/master/README.md).

See [DevTools Protocol](devtools-protocol.md).


<!-- ====================================================================== -->
## Origin Trials

You can use Origin Trials to try out experimental APIs on live sites for a limited period of time.  When using Origin Trials, users of Microsoft Edge that visit your site may run code that uses experimental APIs.  To access the experimental APIs on each user machine, you don't need to go to `edge://flags` and turn on feature flags.

To see a list of the available origin trials and register your origin to give them a try, see [Microsoft Edge Origin Trials](https://microsoftedge.github.io/MSEdgeExplainers/origin-trials/).  You can also provide feedback to browser engineers and the web standards community about the design of the API, your use cases, or your experience using the APIs.


<!-- ====================================================================== -->
## Playwright

The Playwright library provides cross-browser automation through a single API.  Playwright enables cross-browser web automation that is evergreen, capable, reliable, and fast.

Playwright launches browsers as headless, by default.  Headless browsers don't display a UI; so generally you use the command line - however, you can also configure Playwright to run the full Microsoft Edge UI.

See [Use Playwright to automate and test in Microsoft Edge](../playwright/index.md).


<!-- ====================================================================== -->
## Puppeteer

The Puppeteer library provides a high-level API to control Chromium-based browsers, including Microsoft Edge, using the DevTools Protocol.

Puppeteer launches headless browsers by default.  Headless browsers don't display a UI, so you must use the command line.  You can also configure Puppeteer to run full (non-headless) Microsoft Edge.

With Microsoft Edge, you can use `puppeteer-core`, a lightweight version of Puppeteer that launches an existing browser installation, like Microsoft Edge.

See [Puppeteer overview](../puppeteer/index.md).


<!-- ====================================================================== -->
## WebDriver

WebDriver allows you to automate Microsoft Edge by simulating user interaction.  Tests that use WebDriver have some advantages over JavaScript unit tests that run in the browser:

*  Accesses functionality and information that's not available to JavaScript running in browsers.

*  Simulates user events or OS-level events more accurately than JavaScript unit tests.

*  Manages multiple windows, tabs, and webpages in a single test session.

*  Runs multiple sessions of Microsoft Edge on a specific machine.

See [Use WebDriver to automate Microsoft Edge](../webdriver-chromium/index.md).


<!-- ====================================================================== -->
## webhint extension for Visual Studio Code

Use webhint, a customizable linting tool, to improve the accessibility, performance, cross-browser compatibility, PWA compatibility, and security of your site.  The webhint extension checks your code for best practices and common errors.

See [webhint extension for Visual Studio Code](webhint.md).
