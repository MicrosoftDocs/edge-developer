---
title: Control a website's access to the local network
description: Local Network Access in Microsoft Edge enables end-users to grant or deny sites' access to their local network.  # key words before col 158
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.date: 08/18/2025
---

# Control a website's access to the local network
As an end-user, you can use the Local Network Access feature to grant or deny a website access to your local network, which are networks that use private IP address spaces.
As an enterprise administrator, configure the Local Network Access policies to grant or deny site access for your enterprise's devices.

This feature delivers secure, privacy-respecting browsing experiences, while maintaining compatibility with modern web standards.

This feature requires Microsoft Edge 140 or later.

<!-- ====================================================================== -->
## What is Local Network Access?

Local Network Access is a feature in Microsoft Edge that restricts a website's ability to send requests to servers on a user's local network.  This feature displays a prompt to end-users, requiring the end-user to grant or deny the site permission before these requests can be made.

The ability to request this permission is restricted to secure contexts.


<!-- ====================================================================== -->
## How to Enable Local Network Access in Microsoft Edge

End users can enable and manage Local Network Access permissions through the browser settings:

1. In Microsoft Edge, go to `edge://flags/#local-network-access-check`.

1. In the dropdown list for **Local Network Access Checks**, select **Enabled (Blocking)**.

   Selecting **Enabled** will show the end-user a warning, rather than blocking the network request.

1. Click the **Restart** button in the lower right.

1. In Microsoft Edge, select **Settings and more** (...) > **Settings**.

   The **Settings** page opens.

1. Select **Privacy, search, and services** > **Site permissions** > **All permissions**

   The **All permissions** page is displayed:

   ![The All permissions page in Edge Settings](./local-network-access-images/settings-all-permissions.png) 

   The sites that are listed are sites that requested access to your local network, such as by a dialog requesting permission.
   The Address bar shows `edge://settings/privacy/sitePermissions/allSitePermissions/localNetworkAccess`.

1. For the Local Network Access site permission, turn on the "Ask before accessing" toggle:
   ![Settings for the Local Network Access site permission](./local-network-access-images/settings-for-local-network-access.png)


<!-- ====================================================================== -->
## Configuring policies
Enterprise administrators can configure access on a per-site basis by using the following policies:
* `LocalNetworkAccessAllowedForUrls`
* `LocalNetworkAccessBlockedForUrls`

These policies provide granular control over which URLs are permitted or blocked from accessing local network resources.

See also:
* [LocalNetworkAccessAllowedForUrls](https://learn.microsoft.com/deployedge/microsoft-edge-browser-policies/localnetworkaccessallowedforurls)
* [LocalNetworkAccessBlockedForUrls](https://learn.microsoft.com/deployedge/microsoft-edge-browser-policies/localnetworkaccessblockedforurls)

Enterprise administrators can configure access on a per-device basis by using the following policy:
* `LocalNetworkAccessRestrictionsEnabled`

This policy will deny all local network requests without prompting the user.

See also:
* [LocalNetworkAccessRestrictionsEnabled](https://learn.microsoft.com/deployedge/microsoft-edge-browser-policies/localnetworkaccessrestrictionsenabled)

<!-- ====================================================================== -->
## Which requests are impacted

For the first milestone of Local Network Access, a _local network request_ is any request from the public network to a local network or loopback destination.

* A _local network_ is any destination that resolves to one of the following:
   * The private address space (such as `192.168.0.0/16`).
   * An IPv4-mapped IPv6 address, where the mapped IPv4 address is itself private.
   * An IPv6 address outside the `::1/128`, `2000::/3`, and `ff00::/8` subnets.

* _Loopback_ is any destination that resolves to one of the following:
   * The "loopback" space (`127.0.0.0/8`).
   * The "link-local" space (`169.254.0.0/16`).
   * The "Unique Local Address" prefix (`fcc00::/7`).
   * The "link-local" prefix (`fe80::/10`).

* A _public network_ is any other destination.


<!-- ====================================================================== -->
## How it's checked whether a request is going to the local network

* The request hostname is a private IP literal (such as `192.168.0.1`).

* The request hostname is a `.local` domain.

* The `fetch()` call is annotated with the option `targetAddressSpace: "local"`.


<!-- ====================================================================== -->
<!-- ## See also -->
<!-- 
[LocalNetworkAccessAllowedForUrls](https://learn.microsoft.com/deployedge/microsoft-edge-browser-policies/localnetworkaccessallowedforurls)
[LocalNetworkAccessBlockedForUrls](https://learn.microsoft.com/deployedge/microsoft-edge-browser-policies/localnetworkaccessblockedforurls)
[LocalNetworkAccessRestrictionsEnabled](https://learn.microsoft.com/deployedge/microsoft-edge-browser-policies/localnetworkaccessrestrictionsenabled)
-->
