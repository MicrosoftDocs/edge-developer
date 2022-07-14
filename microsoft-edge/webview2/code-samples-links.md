---
title: Sample apps
description: Sample apps for WebView2, for various frameworks or platforms including WinUI 2 (UWP), WinUI 3 (Windows App SDK), WPF, WPF with Chrome DevTools Protocol extension, WinForms, Win32/C++, and Win32 with Visual Composition.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 07/14/2022
---
# Sample apps

Sample apps that use WebView2 are available in the **WebView2Samples** repo, for various frameworks or platforms.

| Framework or platform | Article | Sample in repo | Comments |
|---|---|---|---|
| WinUI 2 (UWP) | [WinUI 2 (UWP) sample app](samples/webview2_sample_uwp.md) | [webview2_sample_uwp](https://github.com/MicrosoftEdge/WebView2Samples/tree/main/SampleApps/webview2_sample_uwp) | &nbsp; |
| WinUI 3 (Windows App SDK) | n/a | n/a | [Tutorial](get-started/winui.md).<br/> [Completed tutorial project](https://github.com/MicrosoftEdge/WebView2Samples/tree/main/GettingStartedGuides/WinUI3_GettingStarted). |
| WPF | [WPF sample app](samples/webview2wpfbrowser.md) | [WebView2WpfBrowser](https://github.com/MicrosoftEdge/WebView2Samples/tree/main/SampleApps/WebView2WpfBrowser) | &nbsp; |
| WPF with CDP | [WPF app with CDP extension](samples/wv2cdpextensionwpfsample.md) | [WV2CDPExtensionWPFSample](https://github.com/MicrosoftEdge/WebView2Samples/tree/main/SampleApps/WV2CDPExtensionWPFSample) | &nbsp; |
| WinForms | [WinForms sample app](samples/webview2windowsformsbrowser.md) | [WebView2WindowsFormsBrowser](https://github.com/MicrosoftEdge/WebView2Samples/tree/main/SampleApps/WebView2WindowsFormsBrowser) | &nbsp; |
| Win32 | [Win32 sample app](samples/webview2apissample.md) | [WebView2APISample](https://github.com/MicrosoftEdge/WebView2Samples/tree/main/SampleApps/WebView2APISample) | Main sample; extensive.  Detailed Readme. |
| Win32 with Visual Composition | [Win32 sample app with Visual Composition](samples/webview2samplewincomp.md) | [WebView2SampleWinComp](https://github.com/MicrosoftEdge/WebView2Samples/tree/main/SampleApps/WebView2SampleWinComp) | &nbsp; |

These articles provide the specific steps to set up your machine and build, update, and run each sample.


#### Sample apps vs. completed Getting Started tutorials

For some frameworks or platforms, the samples repo contains both a completed Getting Started tutorial and a sample app.  The sample apps demonstrate more features than the completed Getting Started tutorials.


#### Articles, readmes, sample directories, and solution files

For each sample app in the samples repo, there's an article here.  In the samples repo, each sample has a short Readme, a directory, and a solution file.


#### Installed SDK package versions

Typically, for these samples, you do the following sequence:
1.  Build and run the sample as-is from the repo.
1.  Update the sample's project's packages, such as the WebView2 prerelease SDK.  The prerelease SDK allows you to try the latest APIs.
1.  Build and run the sample using the updated SDK packages.


<!-- ====================================================================== -->
## See also

* [WebView2Samples repo](https://github.com/MicrosoftEdge/WebView2Samples#readme)
