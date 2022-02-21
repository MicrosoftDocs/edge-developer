---
title: "WebView2 sample: Win32 C++ app with Visual Composition"
description: This WebView2 sample demonstrates creating an application that embeds a WebView2 control within a Win32 native application.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 02/18/2022
---
# WebView2 sample: Win32 C++ app with Visual Composition

This WebView2 sample demonstrates creating an application that embeds a WebView2 control within a Win32 native application.

It is built as a Win32 Visual Studio 2019 project and makes use of both C++ and HTML/CSS/JavaScript in the WebView2 environment.

It also uses Windows Runtime Composition APIs (also called the Visual layer) to take avantage of the Windows UI features and create a better look, feel, and functionality in C++ Win32 applications.


<!-- ====================================================================== -->
## To use this sample (general-purpose steps)

The steps on the present page are general-purpose.  See the sample-specific steps in the README sections, which may override the present page.

1. In a separate window or tab, read the rendered README.md file for this project at GitHub: [README file for WebView2SampleWinComp](https://github.com/MicrosoftEdge/WebView2Samples/tree/master/SampleApps/WebView2SampleWinComp#readme).  Then return to this page and continue the steps below.

   * [README > Prerequisites](https://github.com/MicrosoftEdge/WebView2Samples/tree/master/SampleApps/WebView2SampleWinComp#prerequisites)

   * [README > Build the WebView2 Sample WinComp](https://github.com/MicrosoftEdge/WebView2Samples/tree/master/SampleApps/WebView2SampleWinComp#build-the-webview2-sample-wincomp)

   You can also view the README.md source file (non-rendered) in Visual Studio.  In **File Manager** or Visual Studio > Solution Explorer, open the file:<!-- todo: is there a .md preview capability locally? -->

   `<your-repos-directory>/WebView2Samples/SampleApps/WebView2SampleWinComp/README.md`

   or:

   `<your-repos-directory>/WebView2Samples-master/SampleApps/WebView2SampleWinComp/README.md`

1. If Visual Studio (minimum required version) is not already installed, in a separate window or tab, see [Install Visual Studio](../how-to/machine-setup.md#install-visual-studio) in _Set up your Dev environment for WebView2_.  Follow the steps in that section, and then return to this page and continue the steps below.

1. If not done already, download or clone the `WebView2Sample` repo to your local drive.

1. On your local drive, open the `.sln` file in Visual Studio, in the directory:

   *  `<your-repos-directory>/WebView2Samples/SampleApps/WebView2SampleWinComp/WebView2SampleWinComp.sln`

   or:

   *  `<your-repos-directory>/WebView2Samples-master/SampleApps/WebView2SampleWinComp/WebView2SampleWinComp.sln`

1. If prompted, install any Visual Studio workloads that are requested.  In a separate window or tab, see [Install Visual Studio workloads](../how-to/machine-setup.md#install-visual-studio-workloads) in _Set up your Dev environment for WebView2_.  Follow the steps in that section, and then return to this page and continue below.

   Solution Explorer shows several projects, including the **WebView2APISample** project:

   ![The WebView2APISample opened in Visual Studio in Solution Explorer.](media/webview2apisample-in-solution-explorer.png)

1. If needed, install the WebView2 SDK on the project node (not the solution node) in Solution Explorer.  In a separate window or tab, see [Install the WebView2 SDK](../how-to/machine-setup.md#install-the-webview2-sdk) in _Set up your Dev environment for WebView2_.  Follow the steps in that section, and then return to this page and continue below.

1. In Visual Studio, select **Debug** > **Run debug** (`F5`).

   The sample app window opens.

1. In the sample app window, use the sample app.

1. In the Visual Studio code editor, inspect the code; see [README file for WebView2SampleWinComp](https://github.com/MicrosoftEdge/WebView2Samples/tree/master/SampleApps/WebView2SampleWinComp#readme).

1. Close the sample app window.
