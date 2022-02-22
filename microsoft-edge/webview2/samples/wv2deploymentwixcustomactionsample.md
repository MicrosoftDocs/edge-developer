---
title: WiX Custom Action to deploy the WebView2 Runtime
description: A WebView2 sample demonstrating how to use a WiX Custom Action to deploy the WebView2 Runtime.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 02/18/2022
---
# WiX Custom Action to deploy the WebView2 Runtime

This is a WebView2 sample demonstrating how to use a WiX Custom Action to deploy the WebView2 Runtime.

Directory &amp; project name: **WV2DeploymentWiXCustomActionSample**.


<!-- ====================================================================== -->
## Step 1 - View the Readme

The steps on the present page are general-purpose.  See the sample-specific steps in the README sections, which may override the present page.

1. In a separate window or tab, read the rendered README.md file for this project at GitHub: [README file for WV2DeploymentWiXCustomActionSample](https://github.com/MicrosoftEdge/WebView2Samples/tree/master/SampleApps/WV2DeploymentWiXCustomActionSample#readme).  Then return to this page and continue the steps below.

   * [README > Prerequisites](https://github.com/MicrosoftEdge/WebView2Samples/tree/master/SampleApps/WV2DeploymentWiXCustomActionSample#prerequisites)

   * [README > Build steps](https://github.com/MicrosoftEdge/WebView2Samples/tree/master/SampleApps/WV2DeploymentWiXCustomActionSample#build-steps)

   You can also view the README.md source file (non-rendered) in Visual Studio.  In **File Manager** or Visual Studio > Solution Explorer, open the file:<!-- todo: is there a .md preview capability locally? -->

   `<your-repos-directory>/WebView2Samples/SampleApps/WV2DeploymentWiXCustomActionSample/README.md`

   or:

   `<your-repos-directory>/WebView2Samples-master/SampleApps/WV2DeploymentWiXCustomActionSample/README.md`


<!-- ====================================================================== -->
## Step 2 - Install Visual Studio

1. **Visual Studio** - If Visual Studio (minimum required version) is not already installed, in a separate window or tab, see [Install Visual Studio](../how-to/machine-setup.md#install-visual-studio) in _Set up your Dev environment for WebView2_.  Follow the steps in that section, and then return to this page and continue the steps below.


<!-- ====================================================================== -->
## Step 3 - Install a preview channel of Microsoft Edge

1. **Preview channel of Microsoft Edge** - If a preview channel of Microsoft Edge (Beta, Dev, or Canary) is not already installed, in a separate window or tab, see [Install a preview channel of Microsoft Edge](../how-to/machine-setup.md#install-a-preview-channel-of-microsoft-edge) in _Set up your Dev environment for WebView2_.  Follow the steps in that section, and then return to this page and continue the steps below.


<!-- ====================================================================== -->
## Step 4 - Download or clone the WebView2Samples repo

1. If not done already, download or clone the `WebView2Sample` repo to your local drive.  In a separate window or tab, see [Download the WebView2Samples repo](../how-to/machine-setup.md#download-the-webview2samples-repo) in _Set up your Dev environment for WebView2_.  Follow the steps in that section, and then return to this page and continue below.


<!-- ====================================================================== -->
<!-- ## Step 5 - Open .sln in Visual Studio -->

<!-- 1. On your local drive, open the `.sln` file in Visual Studio, in the directory:

   *  `<your-repos-directory>/WebView2Samples/SampleApps/WV2DeploymentWiXCustomActionSample/WV2DeploymentWiXCustomActionSample.sln`

   or:

   *  `<your-repos-directory>/WebView2Samples-master/SampleApps/WV2DeploymentWiXCustomActionSample/WV2DeploymentWiXCustomActionSample.sln` -->


<!-- ====================================================================== -->
<!-- 1. **Visual Studio workloads** - If prompted, install any Visual Studio workloads that are requested.  In a separate window or tab, see [Install Visual Studio workloads](../how-to/machine-setup.md#install-visual-studio-workloads) in _Set up your Dev environment for WebView2_.  Follow the steps in that section, and then return to this page and continue below. -->


<!-- ====================================================================== -->
   <!-- Solution Explorer shows the **WV2DeploymentWiXCustomActionSample** project: -->

   <!-- ![The WV2DeploymentWiXCustomActionSample sample opened in Visual Studio in Solution Explorer.](media/wv2deploymentwixcustomactionsample-in-solution-explorer.png) -->
   <!--todo: create png-->


<!-- ====================================================================== -->
## Step 5 - Install or update the WebView2 SDK

1. **WebView2 SDK** - If needed, install (or update) the WebView2 SDK on the project node (not the solution node) in Solution Explorer.  In a separate window or tab, see [Install the WebView2 SDK](../how-to/machine-setup.md#install-the-webview2-sdk) in _Set up your Dev environment for WebView2_.  You can follow these steps to determine whether the WebView2 SDK is installed for the project.  Follow the steps in that section, and then return to this page and continue below.


<!-- ====================================================================== -->
<!-- 1. In Visual Studio, select **Debug** > **Start Debugging** (`F5`). -->

   <!-- The sample app window opens. -->

<!-- 1. In the sample app window, use the sample app.  In the Visual Studio code editor, inspect the code; see [README file for WV2DeploymentWiXCustomActionSample](https://github.com/MicrosoftEdge/WebView2Samples/tree/master/SampleApps/WV2DeploymentWiXCustomActionSample#readme). -->

<!-- 1. Close the sample app window. -->


<!-- ====================================================================== -->
## See also

* [README file for WV2DeploymentWiXCustomActionSample](https://github.com/MicrosoftEdge/WebView2Samples/tree/master/SampleApps/WV2DeploymentWiXCustomActionSample#readme)
