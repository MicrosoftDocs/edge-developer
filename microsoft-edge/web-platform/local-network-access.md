---
title: Introducing Local Network Access in Microsoft Edge
description: Local Network Access in Microsoft Edge enables users to grant or deny sites' access to your local network.  # key words before col 158
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.date: 08/18/2025
---

# Introducing Local Network Access in Microsoft Edge
<!-- todo:
is the audience Dev, or end-users?  present repo is for Dev, not end-users

maybe move article out from this repo, to a place for end-user audience instead of Dev audience

'intro' article usually is too time-oriented for present repo, per
https://developers.google.com/style/timeless-documentation
the present repo does have some time-oriented docs, eg What's New, RelNotes, Origin Trials.
-->

Microsoft Edge is committed to delivering secure, privacy-respecting browsing experiences while maintaining compatibility with modern web standards.

One of the latest enhancements in Edge version 140+ is support for **Local Network Access**, a feature that enables users to grant or deny sites' access to your local network.

<!-- todo: add links
See also:
* []()
-->


<!-- ====================================================================== -->
## What is Local Network Access?

Local Network Access is a feature in Microsoft Edge that restricts websites' ability to send requests to servers on a user's local network.  This feature will display a prompt to users, requiring them to grant or deny the site permission before these requests can be made.

The ability to request this permission is restricted to secure contexts.


<!-- ====================================================================== -->
## How to Enable Local Network Access in Microsoft Edge

Starting with Edge 140, users can enable and manage Local Network Access permissions through the browser settings:

1. Open Microsoft Edge.

1. Navigate to `edge://settings/privacy/sitePermissions/allSitePermissions/localNetworkAccess`.

1. Toggle the permission settings for sites that request access to your local network.

Enterprise administrators can configure access by using the following policies:
* `LocalNetworkAccessAllowedForUrls`
* `LocalNetworkAccessBlockedForUrls`

These policies are supported in Edge 140+.  These policies provide granular control over which URLs are permitted or blocked from accessing local network resources.


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
<!-- todo: all links in the article -->

<!-- 
* []()
-->
