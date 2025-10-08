---
title: Enterprise management of WebView2 Runtimes
description: How IT admins can manage WebView2 applications and the WebView2 Runtime.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 11/12/2021
---
# Enterprise management of WebView2 Runtimes
<!-- old title: # Manage WebView2 applications -->

[WebView2](../index.md) is a component that developers use to build their applications, and the developers can deploy a self-updating Evergreen WebView2 Runtime onto user devices to power their applications.  This article discusses how IT admins can manage WebView2 applications and the WebView2 Runtime.  

Feedback from IT admins and developers is welcome, through the [WebView2 Feedback](https://github.com/MicrosoftEdge/WebViewFeedback) repo.


<!-- ====================================================================== -->
## Group policies for WebView2

IT admins can use group policy objects (GPO) to configure policy settings for WebView2.  The following policies are relevant to WebView2.


<!-- ------------------------------ -->
#### Update policies

[Microsoft Edge - Update policies](/deployedge/microsoft-edge-update-policies) are available for IT admins to manage the installing and updating aspects of the WebView2 Runtime.  The Microsoft Edge browser and WebView2 Runtime are updated using the same update mechanism.  Unless a policy, such as `Update`, is channel-specific, the policy applies to both the browser and WebView2 Runtime.

To configure update policies for Microsoft Edge (and the WebView2 Runtime), see [Configure Microsoft Edge policy settings on Windows devices](/deployedge/configure-microsoft-edge), in the Microsoft Edge Enterprise documentation.


<!-- ------------------------------ -->
#### Suppressing updating of the WebView2 Runtime

An IT admin can suppress updating of the WebView2 Runtime, if auto-updating needs to be suppressed for a short time.  After the time period, updating of the WebView2 Runtime resumes.  The [UpdatesSuppressed](/deployedge/microsoft-edge-update-policies#updatessuppressed) policy allows an IT admin to set the time during each day at which to suppress auto-update for both the browser and WebView2 Runtime.  This enables an IT admin to configure preferences and proxies once for both the browser and the WebView2 Runtime, to control their network bandwidth and traffic, or for other purposes.

However, users should not stop updating their WebView2 Runtime; users should not remain on an older version of the WebView2 Runtime.  Using older versions of the WebView2 Runtime isn't recommended.  Security updates and servicing updates are only available on the latest Stable channel release (Edge Stable) and the latest Beta channel release (Edge Beta).  If you use older releases of the Microsoft WebView2 Runtime, you won't receive the latest quality and security updates.


<!-- ---------- -->
###### Evergreen Runtime is recommended, rather than a fixed version

Using the Evergreen WebView2 Runtime is recommended, unless business-critical requirements necessitate a fixed version of the WebView2 Runtime.  Using the Evergreen WebView2 Runtime:
* Helps minimize exposure to known vulnerabilities.
* Ensures timely security improvements.
* Ensures that WebView2 benefits from continuous security updates that are delivered through Microsoft Edge releases.

For information about Evergreen vs. fixed version of the Runtime, see [Distribute your app and the WebView2 Runtime](./distribution.md).

For details about security fixes in Microsoft Edge (which apply to WebView2 as well), see [Release notes for Microsoft Edge Security Updates](/deployedge/microsoft-edge-relnotes-security), in the Microsoft Edge Enterprise documentation.


<!-- ---------- -->
###### Rapid Response to Chromium vulnerabilities

To help maintain a secure browsing environment, Microsoft Edge addresses Chromium engine-level vulnerabilities soon after the vulnerabilities are disclosed.

Security fixes address vulnerabilities such as:

* **Remote code execution** – Mitigates risks of arbitrary code execution via malicious content.
* **Privilege escalation** – Reduces chances of unauthorized system access.
* **Information disclosure and spoofing** – Protects sensitive data, and helps prevent phishing attacks.


<!-- ---------- -->
###### Microsoft Edge Lifecycle Policy

Microsoft WebView2 follows the Modern Lifecycle Policy.

See:
* [Modern Lifecycle Policy](/lifecycle/policies/modern), in the Modern Lifecycle Policy documentation.
* [Microsoft Edge Lifecycle Policy](/deployedge/microsoft-edge-support-lifecycle), in the Microsoft Edge Enterprise documentation.


<!-- ------------------------------ -->
#### Browser policies

[Microsoft Edge - Browser policies](/deployedge/microsoft-edge-policies) doesn't apply to WebView2 applications.  This is by design, because apps and browsers have different use cases, and IT admins might not be aware of what applications use WebView2.  

Applying browser policies on WebView2 would have unintended consequences.  For example, IT admins can block JavaScript in the browser, and that would break WebView2 apps that use JavaScript.  To prevent that, browser policies are separate from WebView2 policies.


<!-- ------------------------------ -->
#### WebView2-specific policies

[WebView2-specific policies](/deployedge/microsoft-edge-webview-policies) are available to for you<!--dev, or admin?--> to manage WebView2 directly.  However, we recommend that WebView2 app developers implement their own group policies to manage the use of WebView2, because it's easier for administrators to manage the app instead of managing WebView2 directly.


<!-- ====================================================================== -->
## Windows Server Update Services (WSUS)

[Windows Server Update Services (WSUS)](/windows-server/administration/windows-server-update-services/get-started/windows-server-update-services-wsus) enables information technology administrators to deploy the latest Microsoft product updates. You can use WSUS to fully manage the distribution of updates of WebView2 that are released through Microsoft Update to computers on your network.

The recommended way of receiving WebView2 updates is by using the default Microsoft Edge updater.  Any modification of update and servicing paths should be done with caution.


<!-- ------------------------------ -->
#### WebView2 Deployment and Update using WSUS

WebView2 options in Configuration Manager exist under the Microsoft Edge Management node. For more information, visit [Update Microsoft Edge](/mem/configmgr/apps/deploy-use/deploy-edge).


<!-- ====================================================================== -->
## See also

* [Distribute your app and the WebView2 Runtime](./distribution.md) - About the Evergreen, self-updating WebView2 Runtime.

<!-- External: -->
* [Microsoft Edge release schedule](/deployedge/microsoft-edge-release-schedule)
