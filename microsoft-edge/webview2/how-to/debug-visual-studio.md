---
title: Debug WebView2 apps with Visual Studio
description: How to debug WebView2 apps with Microsoft Visual Studio.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 07/22/2024
---
# Debug WebView2 apps with Visual Studio

Microsoft Visual Studio provides various debugging tools for web and native code in WebView2 apps, to debug web and native code in Win32 apps or Office Add-ins.  This article focuses on debugging WebView2 controls.  The other methods of debugging in Visual Studio are available, as well.


<!-- ====================================================================== -->
## Open DevTools using an approach other than F12

When you debug your app in Visual Studio with the native debugger attached, pressing **F12** may trigger the native debugger instead of Developer Tools.  To avoid that situation, press **Ctrl+Shift+I**.  Or, right-click the page, and then select `Inspect`.


<!-- ====================================================================== -->
## Requirements

*  To debug scripts, the app must be launched from within Visual Studio.  You can install both Visual Studio 2019 (to work with most of the WebView2 sample apps) and Visual Studio 2022 (for example, for your own WebView2 app).

*  You cannot attach a debugger to a running WebView2 process.

*  Install Visual Studio 2019 (version 16.4 Preview 2 or later).  If that's not done yet, see [If you're installing Visual Studio now](#if-youre-installing-visual-studio-now), below.


To debug your code, first install and set up the script debugger tools in Visual Studio, per the following two sections.


<!-- ====================================================================== -->
## Install the JavaScript diagnostics component

First, install the **JavaScript diagnostics** component in the **Desktop development with C++** workload of Visual Studio, as follows.


<!-- ------------------------------ -->
#### If you're installing Visual Studio now

1. To work with the WebView2 samples, download Visual Studio 2019 (version 16.4 Preview 2 or later), from [Downloads](https://visualstudio.microsoft.com/downloads/), and then run the downloaded installer file.  To work with your own WebView2 app, you might want to do these steps for Visual Studio 2022 as well.

1. In the Visual Studio Installer, select the **Desktop development with C++** workload, so that a checkmark appears, similar to the screenshot in the next section.

1. In the tree of components for the **Desktop development with C++** workload, on the right, select the **JavaScript diagnostics** component, similar to that checkbox shown in the screenshot in the next section.

1. Click the **Install** button.  When the installer finishes, you can reboot your machine to clean up, as the installer suggests.

See also:
* [Install Visual Studio](./machine-setup.md#install-visual-studio) in _Set up your Dev environment for WebView2_.

Continue with [Enable script debugging for WebView2 apps](#enable-script-debugging-for-webview2-apps), below.


<!-- ------------------------------ -->
#### If you've already installed Visual Studio

To work with most of the WebView2 samples, use Visual Studio 2019.  To work with your own WebView2 app, you might want to do these steps for Visual Studio 2022 as well.

1. In the Windows Explorer bar, type `Visual Studio Installer`.

1. Select **Visual Studio Installer** to open it.

1. In the Visual Studio Installer, on the installed version, click the **More** button, and then select **Modify**.

1. In Visual Studio, under **Workloads**, select the **Desktop Development with C++** workload, so that a checkmark appears:

   ![Visual Studio Modifying Workloads Screen](./debug-visual-studio-images/workloads.png)

1. Select **Individual components**, at the top.

1. In the search box, enter `JavaScript diagnostics`.

1. Select the **JavaScript diagnostics** checkbox:

   ![Visual Studio: Modifying values in the 'Individual components' tab](./debug-visual-studio-images/indiv-comp.png)

1. Click the **Modify** button.


<!-- ====================================================================== -->
## Enable script debugging for WebView2 apps

Second, enable script debugging for WebView2 apps, as follows.  You can open your own WebView2 app in Visual Studio 2019 or 2022.  The following steps walk you through:
* Using the Win32APISample, which was written using Visual Studio 2019.
* Opening the sample in Visual Studio 2022 Community edition, which includes updating the project from Visual Studio 2019 to Visual Studio 2022.
* Working within your own working branch of the WebView2Samples repo, where some of the project files are modified during updating to Visual Studio 2022.

1. Open Visual Studio 2022, with no project.

1. If not done already, do the steps in [Win32 sample app](../samples/webview2apissample.md), in a new window or tab.

1. Within that article: In the git UI in VS, create your own working branch, such as `user/myalias/WebView2Samples`.<!-- todo: ui steps -->

1. In VS, open the project solution file `WebView2Samples.sln`, such as (on Windows) `C:\Users\myalias\GitHub\WebView2Samples\SampleApps\WebView2Samples.sln`.

1. Right-click the WebView2 project, and then select **Properties**.

1. Under the **Configuration Properties**, select **Debugging**.

1. Under the **Debugger Type**, select **JavaScript (WebView2)**:

   ![The 'Debugging' configuration property in Visual Studio](./debug-visual-studio-images/enb-js.png)<!-- WebView2APISample -->


<!-- ====================================================================== -->
## Debug your WebView2 app

After doing the above setup, debug your WebView2 app, as follows.

1. To set a breakpoint in your source code, hover to the left of the line number, and click to set a breakpoint.  The JS/TS debug adapter doesn't perform source path mapping.  You must open the exact same path associated with your WebView2.

   ![Adding a breakpoint in Visual Studio](./debug-visual-studio-images/breakpoint.png)

1. To run the debugger, select the bit size of the platform, and then click the green Play button next to **Local Windows Debugger**.  The app runs and the debugger connects to the first WebView2 process that is created.

   ![The Local Windows Debugger in Visual Studio](./debug-visual-studio-images/run.png)

1. In the **Debug Console**, find the output from the debugger.

   ![Debug Console in Visual Studio](./debug-visual-studio-images/console.png)<!-- todo: update png and maybe other pngs -->


<!-- ====================================================================== -->
## Troubleshooting

### Virtual source path mapping not supported in Visual Studio 2019

If you use the WebView2 [SetVirtualHostNameToFolderMapping](/dotnet/api/microsoft.web.webview2.core.corewebview2.setvirtualhostnametofoldermapping) method, the debugger in Visual Studio 2019 doesn't understand the virtual source path mapping, so breakpoints don't work correctly.

Virtual source path mapping works when you use the debugger in <!-- Visual Studio 2022 or? -->Visual Studio Code.


<!-- ====================================================================== -->
## See also

* [Get started with WebView2](../get-started/get-started.md)
* [WebView2Samples repo](https://github.com/MicrosoftEdge/WebView2Samples) - a comprehensive example of WebView2 capabilities.
* [WebView2 API reference](../webview2-api-reference.md)
