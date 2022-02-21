---
title: "WebView2 sample: WinForms browser app"
description: This WebView2 sample demonstrates how to use the WebView2 control and WebView2 APIs to implement a web browser in a WinForms app.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 02/18/2022
---
# WebView2 sample: WinForms browser app

This WebView2 sample demonstrates how to use the WebView2 control and WebView2 APIs to implement a web browser in a WinForms app.

Directory &amp; project name: **WebView2WindowsFormsBrowser**.


**To use this sample (general-purpose steps):**

The steps on the present page are general-purpose.  See the sample-specific steps in the README sections, which may override the present page.

1. **README** - In a separate window or tab, read the rendered README.md file for this project at GitHub: [README file for WebView2WindowsFormsBrowser](https://github.com/MicrosoftEdge/WebView2Samples/tree/master/SampleApps/WebView2WindowsFormsBrowser#readme).  Then return to this page and continue the steps below.

   * [README > Prerequisites](https://github.com/MicrosoftEdge/WebView2Samples/tree/master/SampleApps/WebView2WindowsFormsBrowser#prerequisites)

   * [README > Build the WebView2 Windows Forms Browser](https://github.com/MicrosoftEdge/WebView2Samples/tree/master/SampleApps/WebView2WindowsFormsBrowser#build-the-webview2-windows-forms-browser)

   You can also view the README.md source file (non-rendered) in Visual Studio.  In **File Manager** or Visual Studio > Solution Explorer, open the file:<!-- todo: is there a .md preview capability locally? -->

   `<your-repos-directory>/WebView2Samples/SampleApps/WebView2WindowsFormsBrowser/README.md`

   or:

   `<your-repos-directory>/WebView2Samples-master/SampleApps/WebView2WindowsFormsBrowser/README.md`

1. **Visual Studio** - If Visual Studio (minimum required version) is not already installed, in a separate window or tab, see [Install Visual Studio](../how-to/machine-setup.md#install-visual-studio) in _Set up your Dev environment for WebView2_.  Follow the steps in that section, and then return to this page and continue the steps below.

1. **Preview channel of Microsoft Edge** - If a preview channel of Microsoft Edge (Beta, Dev, or Canary) is not already installed, in a separate window or tab, see [Install a preview channel of Microsoft Edge](../how-to/machine-setup.md#install-a-preview-channel-of-microsoft-edge) in _Set up your Dev environment for WebView2_.  Follow the steps in that section, and then return to this page and continue the steps below.

1. **Download samples** - If not done already, download or clone the `WebView2Sample` repo to your local drive.  In a separate window or tab, see [Download the WebView2Samples repo](../how-to/machine-setup.md#download-the-webview2samples-repo) in _Set up your Dev environment for WebView2_.  Follow the steps in that section, and then return to this page and continue below.

1. **Open .sln in Visual Studio** - On your local drive, open the `.sln` file in Visual Studio, in the directory:

   *  `<your-repos-directory>/WebView2Samples/SampleApps/WebView2WindowsFormsBrowser/WebView2WindowsFormsBrowser.sln`

   or:

   *  `<your-repos-directory>/WebView2Samples-master/SampleApps/WebView2WindowsFormsBrowser/WebView2WindowsFormsBrowser.sln`

1. **Visual Studio workloads** - If prompted, install any Visual Studio workloads that are requested.  In a separate window or tab, see [Install Visual Studio workloads](../how-to/machine-setup.md#install-visual-studio-workloads) in _Set up your Dev environment for WebView2_.  Follow the steps in that section, and then return to this page and continue below.

   Solution Explorer shows the **WebView2WindowsFormsBrowser** project.

   <!-- Solution Explorer shows the **WebView2WindowsFormsBrowser** project: -->

   <!-- ![The WebView2WindowsFormsBrowser sample opened in Visual Studio in Solution Explorer.](media/webview2windowsformsbrowser-in-solution-explorer.png) -->
   <!--todo: create png-->

1. **WebView2 SDK** - If needed, install (or update) the WebView2 SDK on the project node (not the solution node) in Solution Explorer.  In a separate window or tab, see [Install the WebView2 SDK](../how-to/machine-setup.md#install-the-webview2-sdk) in _Set up your Dev environment for WebView2_.  Follow the steps in that section, and then return to this page and continue below.

   <!-- this same png is used multiple times in this file -->
   ![The WebView2WindowsFormsBrowser project in Visual Studio](media/webview2windowsformsbrowser-in-visual-studio.png)

   _To zoom, right-click > **Open image in new tab**._


<!-- ====================================================================== -->
## Build the project

1. In **Solution Explorer**, right-click the **WebView2WindowsFormsBrowser** project, and then select **Build**.


<!-- ====================================================================== -->
## Install .NET Framework 4.6.2 Developer Pack

<!-- v4.8 might not be supported in this sample.  Try v4.0.-->

A build error might appear:

   > "1>C:\Program Files\Microsoft Visual Studio\2022\Professional\MSBuild\Current\Bin\amd64\Microsoft.Common.CurrentVersion.targets(1217,5):
   >
   > error MSB3644: The reference assemblies for .NETFramework,Version=v4.6.2 were not found.
   >
   > To resolve this, install the Developer Pack (SDK/Targeting Pack) for this framework version or retarget your application.
   >
   > You can download .NET Framework Developer Packs at https://aka.ms/msbuild/developerpacks"
       
1. Go to https://dotnet.microsoft.com/en-us/download/dotnet-framework/, select v4.6.2, and then click the **Download .NET Framework 4.6.2 Developer Pack** button:

   ![Downloading .NET Framework 4.6.2 Developer Pack](media/webview2windowsformsbrowser-dl-net-fwk.png)

1. In Microsoft Edge, select **Settings and more** > **Downloads** > **Show in folder** icon:

   ![Downloading .NET Framework Developer Pack](media/webview2windowsformsbrowser-thx-dl-net-fwk.png)

1. In the `Downloads` folder, double-click the file, such as `ndp462-devpack-kb3151934-enu.exe`.

   The **Microsoft .NET Framework Developer Pack** license agreement dialog box appears:

   ![The Microsoft .NET Framework Developer Pack license agreement dialog box.](media/webview2windowsformsbrowser-net-fwk-license-462.png)
   <!-- ![The Microsoft .NET Framework Developer Pack license agreement dialog box.](media/webview2windowsformsbrowser-net-fwk-license.png) 4.8, keep as-in, in case needed -->

1. Select the **I agree to the license terms and conditions** checkbox, and then click the **Install** button.

   A **User Account Control** window appears, asking "Do you want to allow this app to make changes to your device?"

1. Click the **Yes** button.

   The Microsoft .NET Framework Developer Pack **Setup Successful** dialog box appears:

   ![The Microsoft .NET Framework Developer Pack 'Setup Successful' dialog box.](media/webview2windowsformsbrowser-net-dev-pak-success-462.png)
   <!-- ![The Microsoft .NET Framework Developer Pack 'Setup Successful' dialog box.](media/webview2windowsformsbrowser-net-dev-pak-success.png) 4.8, keep as-in, in case needed -->

1. Click the **Close** button.

Microsoft .NET Framework 4.6.2 Developer Pack is now installed on your machine.


<!-- ====================================================================== -->
## Build the project again

1. Close Visual Studio and then re-open the solution file in Visual Studio.  If needed, reboot your computer.

1. In **Solution Explorer**, right-click the **WebView2WindowsFormsBrowser** project, and then select **Build**.

   This builds the project file `SampleApps/WebView2WindowsFormsBrowser/WebView2WindowsFormsBrowser.vcxproj`.  This might take a couple minutes.

1. In Visual Studio, select **Debug** > **Start Debugging** (`F5`).

   The sample app window opens:

   ![The WebView2WindowsFormsBrowser app window.](media/webview2windowsformsbrowser-app-window.png)

1. Use the sample app; see [README file for WebView2WindowsFormsBrowser](https://github.com/MicrosoftEdge/WebView2Samples/tree/master/SampleApps/WebView2WindowsFormsBrowser#readme).

1. In Visual Studio, select **Debug** > **Stop Debugging**.

1. In the Visual Studio code editor, inspect the code:

   <!-- this same png is used multiple times in this file -->
   ![The WebView2WindowsFormsBrowser project in Visual Studio](media/webview2windowsformsbrowser-in-visual-studio.png)

   _To zoom, right-click > **Open image in new tab**._


<!-- ====================================================================== -->
## See also

* [Get started with WebView2 in WinForms apps](../get-started/winforms.md)
