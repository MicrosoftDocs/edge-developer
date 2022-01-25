---
title: Managing WebView2 applications
description: Understand how to manage WebView2 applications
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 11/12/2021
---
# Managing WebView2 applications

[WebView2](../index.md) is a component that developers use to build their applications, and the developers can deploy a self-updating Evergreen WebView2 Runtime onto user devices to power their applications.  This document discusses how IT admins can manage WebView2 applications and the WebView2 Runtime.  Feedback from both IT admins and developers is welcome on [WebView2 Feedback repo](https://github.com/MicrosoftEdge/WebViewFeedback).


<!-- ====================================================================== -->
## Group policies for WebView2

IT admins can use group policy objects (GPO) to configure policy settings for WebView2.  The following policies are relevant to WebView2.

*   [Microsoft Edge - Update policies](/deployedge/microsoft-edge-update-policies) are available for IT admins to manage the install and update aspects of the WebView2 Runtime.  The Microsoft Edge browser and WebView2 Runtime are updated using the same update mechanism.  Unless a policy, such as `Update`, is channel-specific, it applies to both the browser and WebView2 Runtime.  For example, `UpdateSuppressed` allows IT admins to set time during each day to suppress auto-update for both the browser and WebView2 Runtime.  This enables IT admins to configure preferences and proxies once for both the browser and WebView2 Runtime to control their network bandwidth/traffic or for other purposes.  IT admins can follow [Microsoft Edge's guide](/deployedge/configure-microsoft-edge) to configure Microsoft Edge - Update policies.

*   [Microsoft Edge - Browser policies](/deployedge/microsoft-edge-policies) doesn't apply to WebView2 applications.  This is by design because apps and browsers have different use cases, and IT admins might not be aware of what applications use WebView2.  Applying browser policies on WebView2 would have unintended consequences.  For example, IT admins can block JavaScript in the browser, and that would break WebView2 apps that use JavaScript.  To prevent that, browser policies are separate from WebView2 policies.

*   [WebView2-specific policies](/deployedge/microsoft-edge-webview-policies) are available to for you<!--dev, or admin?--> to manage WebView2 directly.  However, we recommend that WebView2 app developers implement their own group policies to manage the use of WebView2, because it's easier for administrators to manage the app instead of managing WebView2 directly.


<!-- ====================================================================== -->
## Windows Server Update Services (WSUS)

[Windows Server Update Services (WSUS)](/windows-server/administration/windows-server-update-services/get-started/windows-server-update-services-wsus) enables information technology administrators to deploy the latest Microsoft product updates. You can use WSUS to fully manage the distribution of updates of WebView2 that are released through Microsoft Update to computers on your network.

> [!NOTE]
> The recommended way of receiving WebView2 updates is by using the default Microsoft Edge updater. Any modification of update and servicing paths should be done with caution.

### WebView2 Deployment and Update using WSUS

WebView2 options in Configuration Manager exist under the Microsoft Edge Management node. For more information, visit [Update Microsoft Edge](/mem/configmgr/apps/deploy-use/deploy-edge).


## See also

*  [Distribute a WebView2 app and the WebView2 Runtime](./distribution.md) - About the Evergreen, self-updating WebView2 Runtime.
