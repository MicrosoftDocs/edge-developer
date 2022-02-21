---
title: WiX Burn Bundle to deploy Runtime
description: A WebView2 sample demonstrating how to use a WiX Burn Bundle to deploy the WebView2 Runtime.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 02/18/2022
---
# WiX Burn Bundle to deploy Runtime

This is a WebView2 sample demonstrating how to use a WiX Burn Bundle to deploy the WebView2 Runtime.


<!-- ====================================================================== -->
## To use this sample (general-purpose steps)

The steps on the present page are general-purpose.  See the sample-specific steps in the README sections, which may override the present page.

1. In a separate window or tab, read the rendered README.md file for this project at GitHub: [README file for WV2DeploymentWiXBurnBundleSample](https://github.com/MicrosoftEdge/WebView2Samples/tree/master/SampleApps/WV2DeploymentWiXBurnBundleSample#readme).  Then return to this page and continue the steps below.

   * [README > Prerequisites](https://github.com/MicrosoftEdge/WebView2Samples/tree/master/SampleApps/WV2DeploymentWiXBurnBundleSample#prerequisites)

   * [README > Build steps](https://github.com/MicrosoftEdge/WebView2Samples/tree/master/SampleApps/WV2DeploymentWiXBurnBundleSample#build-steps)

   You can also view the README.md source file (non-rendered) in Visual Studio.  In **File Manager** or Visual Studio > Solution Explorer, open the file:<!-- todo: is there a .md preview capability locally? -->

   `<your-repos-directory>/WebView2Samples/SampleApps/WV2DeploymentWiXBurnBundleSample/README.md`

   or:

   `<your-repos-directory>/WebView2Samples-master/SampleApps/WV2DeploymentWiXBurnBundleSample/README.md`

1. If Visual Studio (minimum required version) is not already installed, in a separate window or tab, see [Install Visual Studio](../how-to/machine-setup.md#install-visual-studio) in _Set up your Dev environment for WebView2_.  Follow the steps in that section, and then return to this page and continue the steps below.

1. If not done already, download or clone the `WebView2Sample` repo to your local drive.

<!-- 1. On your local drive, open the `.sln` file in Visual Studio, in the directory:

   *  `<your-repos-directory>/WebView2Samples/SampleApps/WV2DeploymentWiXBurnBundleSample/WV2DeploymentWiXBurnBundleSample.sln`

   or:

   *  `<your-repos-directory>/WebView2Samples-master/SampleApps/WV2DeploymentWiXBurnBundleSample/WV2DeploymentWiXBurnBundleSample.sln` -->

1. If prompted, install any Visual Studio workloads that are requested.  In a separate window or tab, see [Install Visual Studio workloads](../how-to/machine-setup.md#install-visual-studio-workloads-if-prompted) in _Set up your Dev environment for WebView2_.  Follow the steps in that section, and then return to this page and continue below.

   Solution Explorer shows several projects, including the **WebView2APISample** project:

   ![The WebView2APISample opened in Visual Studio in Solution Explorer.](media/webview2apisample-in-solution-explorer.png)

1. If needed, install the WebView2 SDK on the project node (not the solution node) in Solution Explorer.  In a separate window or tab, see [Install the WebView2 SDK](../how-to/machine-setup.md#install-the-webview2-sdk) in _Set up your Dev environment for WebView2_.  Follow the steps in that section, and then return to this page and continue below.

1. In Visual Studio, select **Debug** > **Run debug** (`F5`).

   The sample app window opens.

1. In the sample app window, use the sample app.  In the Visual Studio code editor, inspect the code; see [README file for WV2DeploymentWiXBurnBundleSample](https://github.com/MicrosoftEdge/WebView2Samples/tree/master/SampleApps/WV2DeploymentWiXBurnBundleSample#readme).

1. Close the sample app window.
