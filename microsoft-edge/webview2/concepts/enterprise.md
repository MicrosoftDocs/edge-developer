---
description: Understand how to manage WebView2 applications
title: Managing WebView2 applications
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/15/2020
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html, enterprise, group policy, manageability 
---

# Managing WebView2 applications  

[WebView2][WebView2Landing] is a component that developers use to build their applications, and the developers may deploy a [self-updating Evergreen WebView2 Runtime][Webview2ConceptsDistributionUnderstandRuntimeInstallerPreview] on user device to power their applications. This document discusses how IT admins may manage WebView2 applications and Runtime. Feedback from both IT admins and developers are welcomed on [WebView2 Feedback repo][GithubMicrosoftedgeWebviewfeddback].  

## Group policies for WebView2

IT admins may use group policy objects (GPO) to configure policy settings for WebView2. The following set of policies are/are not applicable to WebView2,

* [Microsoft Edge - Update policies][EdgeUpdatePolicies] are available for IT admins to manage the install and update aspects of WebView2 Runtime. Microsoft Edge browser and WebView2 Runtime are updated through the same update mechanism. Unless a policy is channel-specific (e.g. `Update`), it applies to both the browser and WebView2 Runtime. e.g. `UpdateSuppressed` allows IT admins to set time during each day to suppress auto-update for both the browser and WebView2 Runtime. This enables IT admins to configure preferences and proxies once for browser and WebView2 Runtime to control their network bandwidth/traffic or for other purposes. IT admins may follow [Microsoft Edge's guide][ConfigureMicrosoftEdge] to configure Microsoft Edge - Update policies.
* [Microsoft Edge - Browser policies][EdgeBrowserPolicies] are disconnected from WebView2. This means the browser policies IT admins configure for Microsoft Edge browser do not apply to WebView2 applications. This is by design due to the fact that apps and browsers are often distinct use cases and that IT admins may not be aware of what applications use WebView2. Applying browser policies on WebView2 may have unintended consequences, e.g. IT admins disable JavaScript in the browser and all WebView2 apps using JavaScript are broken.  
* (Coming soon) WebView2-specific policies – WebView2 will expose a small additional set of group policies in cases where managing WebView2 directly makes sense. Generally speaking, app developers are encouraged to build and expose their own group policies controlling their use of WebView2, as it is more straightforward for IT admins to manage the app rather than WebView2 directly.  

<!-- Links -->  

[Webview2ConceptsDistributionUnderstandRuntimeInstallerPreview]: ./distribution.md#understanding-the-webview2-runtime "Understand the WebView2 Runtime and installer (Preview) - Distribution of applications using WebView2 | Microsoft Docs"  

[EdgeUpdatePolicies]: https://docs.microsoft.com/deployedge/microsoft-edge-update-policies "Microsoft Edge - Update policies"  

[EdgeBrowserPolicies]: https://docs.microsoft.com/deployedge/microsoft-edge-policies "Microsoft Edge - Browser policies"  

[ConfigureMicrosoftEdge]: https://docs.microsoft.com/deployedge/configure-microsoft-edge "Configure Microsoft Edge policy settings on Windows"  

[WebView2Landing]: ../index.md "WebView2 docs"
[GithubMicrosoftedgeWebviewfeddback]: https://github.com/MicrosoftEdge/WebViewFeedback "WebView Feedback - MicrosoftEdge/WebViewFeedback | GitHub"  
