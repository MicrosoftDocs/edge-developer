---
title: Introducing Local Network Access in Microsoft Edge
description: Introducing Local Network Access in Microsoft Edge, which provides users the ability to grant or deny sites' access to your local network.
author: MSEdgeTeam
ms.author: murphys
ms.topic: conceptual
ms.service: microsoft-edge
ms.date: 08/18/2025
---

# Introducing Local Network Access in Microsoft Edge

Microsoft Edge is committed to delivering secure, privacy-respecting browsing experiences while maintaining compatibility with modern web standards. One of the latest enhancements in Edge version 140+ is support for **Local Network Access**, a feature that enables users to grant or deny sites' access to your local network.

## What is Local Network Access?

Local Network Access is a feature in Microsoft Edge that restricts websites' ability to send requests to servers on a user's local network.  This feature will display a prompt to users, requiring them to grant or deny the site permission before these requests can be made. The ability to request this permission is restricted to secure contexts.

## How to Enable Local Network Access in Microsoft Edge

Starting with Edge version 140, users can enable and manage Local Network Access permissions through the browser settings:

1. Open Microsoft Edge.
2. Navigate to `edge://settings/privacy/sitePermissions/allSitePermissions/localNetworkAccess`.
3. Toggle the permission settings for sites that request access to your local network.

Enterprise administrators can configure access using the following policies:
   - `LocalNetworkAccessAllowedForUrls`
   - `LocalNetworkAccessBlockedForUrls`

These policies are supported in Edge 140+ and provide granular control over which URLs are permitted or blocked from accessing local network resources.

## Learn More
### Which requests are impacted?
For the first milestone of Local Network Access, a "local network request" is any request from the public network to a local network or loopback destination.

    - A local network is any destination that resolves to the private address space (e.g., 192.168.0.0/16), an IPv4-mapped IPv6 address where the mapped IPv4 address is itself private, or an IPv6 address outside the ::1/128, 2000::/3, and ff00::/8 subnets.
    - Loopback is any destination that resolves to the "loopback" space (127.0.0.0/8), the "link-local" space (169.254.0.0/16), the "Unique Local Address" prefix (fcc00::/7), or the "link-local" prefix (fe80::/10).
    - A public network is any other destination.

### How we check if a request is going to the local network:
    - The request hostname is a private IP literal (e.g., 192.168.0.1).
    - The request hostname is a .local domain.
    - The fetch() call is annotated with the option targetAddressSpace: "local".
