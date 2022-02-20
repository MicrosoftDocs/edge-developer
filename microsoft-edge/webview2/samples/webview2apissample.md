---
title: Win32 C++ sample
description: This WebView2 sample demonstrates how to use the WebView2 control and WebView2 APIs to add features to a Win32 C++ app.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 02/18/2022
---
# Win32 C++ app with WebView2 features

This WebView2 sample demonstrates how to use the WebView2 control and WebView2 APIs to add features to a Win32 C++ app.

The WebView2APISample is an example of an application that embeds a WebView within a Win32 native application. It is built as a Win32 Visual Studio project and makes use of both C++ and HTML/CSS/JavaScript in the WebView2 environment.

The API Sample showcases a selection of WebView2's event handlers and API methods that allow a native Win32 application to directly interact with a WebView and vice versa.

See [WebView2 API Sample](https://github.com/MicrosoftEdge/WebView2Samples/tree/master/SampleApps/WebView2APISample#readme).

This sample is part of the `WebView2Samples` repo.  To use this sample, download or clone the `WebView2Samples` repo.  See [Download the WebView2Samples repo](../how-to/machine-setup.md#download-the-webview2samples-repo) in _Set up your Dev environment for WebView2_.


<!-- ====================================================================== -->
## Opening the solution file in Visual Studio

Per the README.md file, open the solution in Visual Studio.  Here's the directory path of the `.sln` file for this sample after you download or clone the repo:

*  `WebView2Samples/SampleApps/WebView2Samples.sln`

or:

*  `WebView2Samples-master/SampleApps/WebView2Samples.sln`

When you open `WebView2Samples.sln`, Solution Explorer shows several projects, including the **WebView2APISample** project:

![The WebView2APISample opened in Visual Studio in Solution Explorer.](media/webview2apisample-in-solution-explorer.png)

The `.sln` file is not in the sample repo directory that contains this sample's [README.md file](https://github.com/MicrosoftEdge/WebView2Samples/tree/master/SampleApps/WebView2APISample#readme), or the equivalent local filesystem directory.  Instead, the `.sln` file for this sample is in the parent directory that corresponds to the [SampleApps](https://github.com/MicrosoftEdge/WebView2Samples/tree/master/SampleApps) repo directory.
