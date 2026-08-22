---
title: Enterprise management of WebView2 Runtimes
description: How IT Administrators can manage WebView2 applications and the WebView2 Runtime.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 08/21/2026
---
# Enterprise management of WebView2 Runtimes
<!-- old title: # Manage WebView2 applications -->
<!-- https://learn.microsoft.com/microsoft-edge/webview2/concepts/enterprise -->

IT Admins can use group policy objects (GPO) to configure policy settings for WebView2, to manage WebView2 applications and the WebView2 Runtime.  The following policies are relevant to WebView2.

Many policies are about updating the WebView2 Runtime.  A developer can integrate the WebView2 component into their app, and then deploy the self-updating Evergreen WebView2 Runtime (along with the app) onto user devices, to power the latest WebView2 features of the app and get the latest security improvements.

**Detailed contents:**
* [Update policies](#update-policies)
   * [Evergreen Runtime is recommended, rather than a fixed version](#evergreen-runtime-is-recommended-rather-than-a-fixed-version)
   * [Rapid Response to Chromium vulnerabilities](#rapid-response-to-chromium-vulnerabilities)
   * [Microsoft Edge Lifecycle Policy](#microsoft-edge-lifecycle-policy)
   * [Suppressing WebView2 Runtime updates (`UpdatesSuppressed`)](#suppressing-webview2-runtime-updates-updatessuppressed)
* [WebView2-specific policies](#webview2-specific-policies)
   * [Downgrading the WebView Runtime to an earlier version (`DowngradeVersion`)](#downgrading-the-webview-runtime-to-an-earlier-version-downgradeversion)
* [Browser policies vs. WebView2 policies](#browser-policies-vs-webview2-policies)
* [Windows Server Update Services (WSUS)](#windows-server-update-services-wsus)
   * [WebView2 deployment and update using Configuration Manager](#webview2-deployment-and-update-using-configuration-manager)
* [Providing feedback](#providing-feedback)
* [See also](#see-also)


<!-- ====================================================================== -->
## Update policies

Microsoft Edge update policies are available for IT Admins to manage the installing and updating aspects of the WebView2 Runtime.  The Microsoft Edge browser and WebView2 Runtime are updated using the same update mechanism.

A Microsoft Edge update policy applies to both Microsoft Edge and the WebView2 Runtime, unless the policy is channel-specific, such as:
* [Update](/deployedge/microsoft-edge-update-policies#update), in _Microsoft Edge - Update policies_.
* [Update (WebView)](/deployedge/microsoft-edge-update-policies#update-webview), in _Microsoft Edge - Update policies_.

To configure update policies for Microsoft Edge and the WebView2 Runtime, see:
* [Configure Microsoft Edge policy settings on Windows devices](/deployedge/configure-microsoft-edge), in the Microsoft Edge Enterprise documentation.

See:
* [Microsoft Edge - Update policies](/deployedge/microsoft-edge-update-policies), in the Microsoft Edge Enterprise documentation.


<!-- ------------------------------ -->
#### Evergreen Runtime is recommended, rather than a fixed version

Using the Evergreen WebView2 Runtime is recommended, unless business-critical requirements necessitate using a fixed version of the WebView2 Runtime.  Using the Evergreen WebView2 Runtime:
* Helps minimize exposure to known vulnerabilities.
* Ensures timely security improvements.
* Ensures that WebView2 benefits from continuous security updates that are delivered through Microsoft Edge releases.

For details about security fixes in Microsoft Edge (which also apply to WebView2), see:
* [Release notes for Microsoft Edge Security Updates](/deployedge/microsoft-edge-relnotes-security), in the Microsoft Edge Enterprise documentation.

See:
* [Evergreen vs. fixed version of the WebView2 Runtime](./evergreen-vs-fixed-version.md)


<!-- ------------------------------ -->
#### Rapid Response to Chromium vulnerabilities

To help maintain a secure browsing environment, Microsoft Edge addresses vulnerabilities in the Chromium browser engine soon after the vulnerabilities are disclosed.

Security fixes in the Chromium browser engine address vulnerabilities such as:

* **Remote code execution** – Mitigates risks of arbitrary code execution via malicious content.
* **Privilege escalation** – Reduces chances of unauthorized system access.
* **Information disclosure and spoofing** – Protects sensitive data, and helps prevent phishing attacks.


<!-- ------------------------------ -->
#### Microsoft Edge Lifecycle Policy

Microsoft WebView2 follows the Modern Lifecycle Policy.

See:
* [Modern Lifecycle Policy](/lifecycle/policies/modern), in the Modern Lifecycle Policy documentation.
* [Microsoft Edge Lifecycle Policy](/deployedge/microsoft-edge-support-lifecycle), in the Microsoft Edge Enterprise documentation.


<!-- ------------------------------ -->
#### Suppressing WebView2 Runtime updates (`UpdatesSuppressed`)

An IT Admin can suppress updating of the WebView2 Runtime, if auto-updating needs to be suppressed for a short time.  After the time period, updating of the WebView2 Runtime resumes.  The `UpdatesSuppressed` policy allows an IT Admin to set the time during each day at which to suppress auto-update for both Microsoft Edge and the WebView2 Runtime.  This enables an IT Admin to configure preferences and proxies once for both the browser and the WebView2 Runtime, to control their network bandwidth and traffic, or for other purposes.

However, users should not stop updating their WebView2 Runtime; users should not remain on an older version of the WebView2 Runtime.  Using older versions of the WebView2 Runtime isn't recommended.  Security updates and servicing updates are only available on the latest Stable channel release (Edge Stable) and the latest Beta channel release (Edge Beta).  If you use older releases of the Microsoft WebView2 Runtime, you won't receive the latest quality and security updates.

See:
* [UpdatesSuppressed](/deployedge/microsoft-edge-update-policies#updatessuppressed), in _Microsoft Edge - Update policies_.


<!-- ====================================================================== -->
## WebView2-specific policies

Policies that are specific to the WebView2 Runtime are available to the IT Admin, to manage the WebView2 Runtime directly.  However, we recommend that the WebView2 app developer implement their own group policies to manage the use of the WebView2 Runtime, because it's easier for the IT Admin to manage a WebView2 app, rather than managing the WebView2 Runtime directly.

See:
* [Microsoft Edge WebView2 - Policies](/deployedge/microsoft-edge-webview-policies), in the Microsoft Edge Enterprise documentation.


<!-- ------------------------------ -->
#### Downgrading the WebView Runtime to an earlier version (`DowngradeVersion`)

Enterprise Downgrade is a temporary, IT Admin-controlled capability that allows a specific WebView2 app to revert to using an earlier version of the WebView2 Runtime, if there's a critical regression in the WebView2 app when using the latest version of the WebView2 Runtime.

The Enterprise Downgrade feature is controlled via the `DowngradeVersion` policy.

See:
* [Downgrade the WebView2 Runtime to an earlier version](/deployedge/webview2-downgrade-runtime), in the Microsoft Edge Enterprise documentation.
* [DowngradeVersion](/deployedge/microsoft-edge-webview-policies#downgradeversion) in _Microsoft Edge WebView2 - Policies_.


<!-- ====================================================================== -->
## Browser policies vs. WebView2 policies

Browser policies are separate from WebView2 policies.  Policies for Microsoft Edge don't apply to the WebView2 Runtime and WebView2 apps.  This is by design, because apps and browsers have different use cases, and an IT Admin might not know which apps use WebView2.

Applying browser policies on the WebView2 Runtime would have unintended consequences.  For example, the IT Admin can block JavaScript in the browser, and that would break WebView2 apps that use JavaScript.  To prevent that, browser policies are separate from WebView2 policies.

See:
* [Microsoft Edge - Policies](/deployedge/microsoft-edge-policies), in the Microsoft Edge Enterprise documentation.
* [Microsoft Edge WebView2 - Policies](/deployedge/microsoft-edge-webview-policies), in the Microsoft Edge Enterprise documentation.


<!-- ====================================================================== -->
## Windows Server Update Services (WSUS)<!-- todo: deprecated -->

Windows Server Update Services (WSUS) enables IT Admins to deploy the latest Microsoft product updates. You can use WSUS to fully manage the distribution of updates of WebView2 that are released through Microsoft Update<!-- todo: "Microsoft Update" vs. "Microsoft Edge updater" --> to computers on your network.

See:
* [Windows Server Update Services (WSUS) overview](/windows-server/administration/windows-server-update-services/get-started/windows-server-update-services-wsus)

The recommended way of receiving WebView2 updates is by using the default Microsoft Edge updater<!-- todo: "Microsoft Update" vs. "Microsoft Edge updater" -->.  Any modification of update and servicing paths should be done with caution.


<!-- ------------------------------ -->
#### WebView2 deployment and update using Configuration Manager
<!-- is this option recommended?  is this section details about the above section?  is Configuration Manager indep from WSUS? -->

In Configuration Manager, WebView2 options exist under the **Microsoft Edge Management** node.

See:
* [Update Microsoft Edge](/intune/configmgr/apps/deploy-use/deploy-edge#update-microsoft-edge) in _Microsoft Edge Management_, in the App management documentation.


<!-- ====================================================================== -->
## Providing feedback

Feedback from IT Admins and developers is welcome, through the [WebView2Feedback](https://github.com/MicrosoftEdge/WebViewFeedback) repo.

See also:
* [Contact the WebView2 team](../contact.md)


<!-- ====================================================================== -->
## See also
<!-- all links in article -->

* [Distribute your app and the WebView2 Runtime](./distribution.md) - Evergreen vs. fixed version of the WebView2 Runtime.
* [Contact the WebView2 team](../contact.md)

<!-- toc order -->
Microsoft Edge Enterprise documentation:
* [Microsoft Edge Lifecycle Policy](/deployedge/microsoft-edge-support-lifecycle)<!-- bucket 2 -->
* [Microsoft Edge release schedule](/deployedge/microsoft-edge-release-schedule)<!-- bucket 3 top -->
* [Release notes for Microsoft Edge Security Updates](/deployedge/microsoft-edge-relnotes-security)<!-- bucket 3 bottom -->
* [Configure Microsoft Edge policy settings on Windows devices](/deployedge/configure-microsoft-edge)<!-- bucket 5 top -->
* [Downgrade the WebView2 Runtime to an earlier version](/deployedge/webview2-downgrade-runtime)<!-- bucket 6.7 -->
* [Microsoft Edge - Policies](/deployedge/microsoft-edge-policies)<!-- bucket 9 top -->
* [Microsoft Edge - Update policies](/deployedge/microsoft-edge-update-policies)<!-- bucket 9 -->
   * [Update](/deployedge/microsoft-edge-update-policies#update)
   * [UpdatesSuppressed](/deployedge/microsoft-edge-update-policies#updatessuppressed)
   * [Update (WebView)](/deployedge/microsoft-edge-update-policies#update-webview)
* [Microsoft Edge WebView2 - Policies](/deployedge/microsoft-edge-webview-policies)<!-- bucket 9 bottom -->
   * [DowngradeVersion](/deployedge/microsoft-edge-webview-policies#downgradeversion)

Modern Lifecycle Policy documentation:
* [Modern Lifecycle Policy](/lifecycle/policies/modern)

App management documentation:
* [Update Microsoft Edge](/intune/configmgr/apps/deploy-use/deploy-edge#update-microsoft-edge) in _Microsoft Edge Management_.

Windows Server Management documentation:
* [Windows Server Update Services (WSUS) overview](/windows-server/administration/windows-server-update-services/get-started/windows-server-update-services-wsus)<!-- todo: deprecated -->

GitHub:
* [WebView2Feedback](https://github.com/MicrosoftEdge/WebViewFeedback) repo.
