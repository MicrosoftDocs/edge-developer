---
description: Understand how to manage WebView2 applications
title: Managing WebView2 applications
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/21/2020
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html, enterprise, group policy, manageability 
---

# Managing WebView2 applications  

[WebView2][WebView2Landing] is a component that developers use to build their applications, and the developers may deploy a [self-updating Evergreen WebView2 Runtime][Webview2ConceptsDistributionUnderstandRuntimeInstallerPreview] on user device to power their applications.  This document discusses how IT admins may manage WebView2 applications and Runtime.  Feedback from both IT admins and developers is welcome on [WebView2 Feedback repo][GithubMicrosoftedgeWebviewfeddback].  

## Group policies for WebView2  

IT admins may use group policy objects \(GPO\) to configure policy settings for WebView2.  The following set of policies are/are not applicable to WebView2,  

*   [Microsoft Edge - Update policies][EdgeUpdatePolicies] are available for IT admins to manage the install and update aspects of the WebView2 Runtime.  The Microsoft Edge browser and WebView2 Runtime are updated using the same update mechanism.  Unless a policy, such as `Update`, is channel-specific, it applies to both the browser and WebView2 Runtime.  For example, `UpdateSuppressed` allows IT admins to set time during each day to suppress auto-update for both the browser and WebView2 Runtime.  This enables IT admins to configure preferences and proxies once for both the browser and WebView2 Runtime to control their network bandwidth/traffic or for other purposes.  IT admins may follow [Microsoft Edge's guide][ConfigureMicrosoftEdge] to configure Microsoft Edge - Update policies.  
*   [Microsoft Edge - Browser policies][EdgeBrowserPolicies] doesn't apply to WebView2 applications.  This is by design because apps and browsers have different use cases, and IT admins may not be aware of what applications use WebView2.  Applying browser policies on WebView2 may have unintended consequences.  For example, IT admins may block JavaScript in the browser and all WebView2 apps using JavaScript are broken.  
*   [WebView2-specific policies][WebView2Policies] are available to for you to manage WebView2 directly.  However, we recommend that developers implement their own group policies to manage the use of WebView2 because it is easier for administrators to manage the app instead of managing WebView2 directly.  

<!-- Links -->  

[Webview2ConceptsDistributionUnderstandRuntimeInstallerPreview]: ./distribution.md#understanding-the-webview2-runtime "Understand the WebView2 Runtime and installer (Preview) - Distribution of applications using WebView2 | Microsoft Docs"  

[WebView2Landing]: ../index.md "Introduction to Microsoft Edge WebView2 (Preview) | Microsoft Docs"  

[EdgeUpdatePolicies]: /deployedge/microsoft-edge-update-policies "Microsoft Edge - Update policies | Microsoft Docs"  
[EdgeBrowserPolicies]: /deployedge/microsoft-edge-policies "Microsoft Edge - Browser policies | Microsoft Docs"  
[ConfigureMicrosoftEdge]: /deployedge/configure-microsoft-edge "Configure Microsoft Edge policy settings on Windows | Microsoft Docs"  
[WebView2Policies]: /deployedge/microsoft-edge-webview-policies "Microsoft Edge WebView2 Policy Documentation | Microsoft Docs" 

[GithubMicrosoftedgeWebviewfeddback]: https://github.com/MicrosoftEdge/WebViewFeedback "WebView Feedback - MicrosoftEdge/WebViewFeedback | GitHub"  
