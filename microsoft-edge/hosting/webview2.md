---
description: Host web content in your Win32 app with the Microsoft Edge WebView 2 control
title: Microsoft Edge WebView 2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/07/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---

# Microsoft Edge WebView2 (developer preview)  

The Microsoft Edge WebView2 control enables you \(the developer\) to host web content in your application using [Microsoft Edge (Chromium)][MicrosoftEdgeInsider] as the rendering engine.  

The WebView2 control is currently in developer preview, during which you can prototype your solutions and share feedback with us to shape the future stable API.  As the API evolves during preview, some braking changes may occur. When this happens, you must ensure that both the WebView2 SDK and Microsoft Edge \(Chromium\) are updated.  For breaking changes about the SDK, see the [release notes][HostingWebview2ReleaseNotes].  The changes are locked-down as WebView2 approaches beta and stable.  

## Supported Platforms  

A developer preview is available for Win32 C++ on Windows 10, Windows 8.1, Windows 8, Windows 7, Windows Server 2016, Windows Server 2012/2012R2, and Windows Server 2008 R2.  An [Alpha version for WinUI 3.0][UwpToolkitsWinui3Index] is available.  In the future, support is planned for WebView2 on .NET.  

## Getting Started  

To build and test your application using the WebView2 control, you need to have both [Microsoft Edge (Chromium)][MicrosoftEdgeInsiderDownload] and the [WebView2 SDK][NugetPackagesMicrosoftWebView2] installed.  See [Getting Started][HostingWebview2GettingStarted] for detailed instructions, [WebView2 API Sample][GithubMicrosoftEdgeWebView2SamplesWebView2ApiSample] for an interactive guide, [API reference][HostingWebview2Reference] to learn about the API, and [Release Notes][HostingWebview2ReleaseNotes] for changes made between releases.  

## WebView2 Samples 

The [WebView2 Samples][GithubMicrosoftEdgeWebView2Samples] repository contains samples that demonstrate all of the features and  API use-patterns for the WebView2 SDK.  The sample application is updated as more features are added to the WebView2 SDK.  

## Feedback  

Help build a richer WebView2 experience by sharing your feedback!  Visit the [feedback repo][GithubMicrosoftEdgeWebViewFeedback] to submit feature requests or bug reports.  It is also a good place to search for known issues.  

During developer preview, telemetry data is being collected to help build a better WebView.  Users may turn off WebView data collection by navigating to `edge://settings/privacy` in Microsoft Edge \(Chromium\) and turning off browser data collection.  

## Evergreen vs. Bring-your-own  

The WebView2 control relies on Microsoft Edge \(Chromium\) and currently has an evergreen distribution model.  Instead of packaging a browser in the app bundle, apps use the evergreen browser installed on a user machine.  The evergreen browser updates itself on a regular cadence, therefore apps targeting the evergreen WebView2 automatically get the latest feature and security updates for hosted web content.  The WebView2 SDK is updated separate from Microsoft Edge \(Chromium\) as new APIs become available.  This is the recommended model for most developers.  

In the future, a second bring-your-own \(BYO\) option is planned that allows you to bundle a re-distributable version of Microsoft Edge \(Chromium\) with their apps.  BYO brings a locked platform, but requires a larger disk footprint for the packaged browser and you must take on the responsibility of servicing and updating the control.  

## Browser Channels  

You may target different [channels][MicrosoftEdgeInsiderDownload] of Microsoft Edge \(Chromium\) to power the WebView2 control.  In most cases, production applications should target the Stable \(Official\) channel, but you should test on Beta, Dev, or Canary to ensure your application continues to work in the near future.  The WebView2 API allows you to programmatically target either the most stable or the least stable channel installed on a user machine.  Alternatively, you may use the below registry key to enforce a channel.  See more details in [CreateWebView2EnvironmentWithDetails][HostingWebview2ReferenceWebview2idl] function.  

## Debugging WebView2  

### Microsoft Edge DevTools  

You may use [Microsoft Edge (Chromium) Developer Tools][DevtoolsGuideChromium] to debug web content displayed in WebView, just as you would in Microsoft Edge \(Chromium\).  While you have focus on the WebView window, press `F12`, or press `Ctrl`+`Shift`+`i`, or right-click + choose `Inspect` to open Developer Tools.  

![F12][ImageF12]  

> [!NOTE]
> When debugging application in Visual Studio with the native debugger attached, `F12` may trigger the native debugger instead of Developer Tools.  Use `Ctrl`+`Shift`+`i`, or right- + `Inspect` to avoid potential hotkey conflict.  

### Visual Studio  

You can use the script debugger in Visual Studio 2019 \(minimum version 16.4 Preview 2\) to debug your script within WebView2 right from the IDE.  Make sure the **JavaScript diagnostics** component in **Desktop development with C++** workload is installed.  

![VSJSDiagnostics][ImageVsJsDiagnostics]  

Right-click on your project and select **Properties**.  Under **Configuration Properties** > **Debugging** > **Debugger Type**,  choose the **JavaScript (WebView2)** option to enable WebView2 script debugging.  More details to follow soon.  

![VSScriptDebugger][ImageVsScriptDebugger]  

### Visual Studio Code  

You can also use Visual Studio Code to debug your script within the WebView2 right from the IDE.  For more details, see [Microsoft Edge (Chromium) WebView applications][GithubMicrosoftVscodeEdgeDebug2ReadmeChromiumWebviewApplications].  

<!-- image links -->  

[ImageF12]: webview2/media/f12.png "F12"  
[ImageVsJsDiagnostics]: webview2/media/vs-js-diagnostics.png "VS JS Diagnostics"  
[ImageVsScriptDebugger]: webview2/media/vs-script-debugger.png "VS Script Debugger"  

<!-- links -->  

[DevtoolsGuideChromium]: /microsoft-edge/devtools-guide-chromium "Microsoft Edge (Chromium) Developer Tools"  

[HostingWebview2GettingStarted]: webview2/getting-started.md "Getting Started With WebView2 (Developer Preview)"  
[HostingWebview2Reference]:  webview2/reference-webview2.md "Reference (WebView2)"
[HostingWebview2ReferenceWebview2idl]: webview2/reference/webview2.idl.md "interface ICoreWebView2"  

[HostingWebview2ReleaseNotes]: webview2/release-notes.md "WebView2 SDK Release Notes"  

[UwpToolkitsWinui3Index]: /uwp/toolkits/winui3/index "WinUI 3.0 Alpha (February 2020)"  

[GithubMicrosoftEdgeWebViewFeedback]: https://github.com/MicrosoftEdge/WebViewFeedback "MicrosoftEdge/WebViewFeedback | GitHub"  
[GithubMicrosoftEdgeWebView2Samples]: https://github.com/MicrosoftEdge/WebView2Samples "MicrosoftEdge/WebView2Samples | GitHub"
[GithubMicrosoftEdgeWebView2SamplesWebView2ApiSample]: https://github.com/MicrosoftEdge/WebView2Samples/tree/master/WebView2APISample "WebView2Sample - MicrosoftEdge/WebView2Samples | GitHub"  

[GithubMicrosoftVscodeEdgeDebug2ReadmeChromiumWebviewApplications]: https://github.com/microsoft/vscode-edge-debug2/blob/master/README.md#microsoft-edge-chromium-webview-applications "Microsoft Edge (Chromium) WebView applications - VS Code - Debugger for Microsoft Edge - microsoft/vscode-edge-debug2 | GitHub"  

[MicrosoftEdgeInsider]: https://www.microsoftedgeinsider.com "Microsoft Edge Insider"  
[MicrosoftEdgeInsiderDownload]: https://www.microsoftedgeinsider.com/download "Microsoft Edge Insider Channels"  

[NugetPackagesMicrosoftWebView2]: https://www.nuget.org/packages/Microsoft.Web.WebView2 "Microsoft.Web.WebView2 | nuget"  
