---
title: Network request blocking tool
description: Block network requests with the Network request blocking tool to find out how web pages look and behave when some resources are not available.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 02/10/2022
---
# Network request blocking tool

The **Network request blocking** tool can be used to verify how a web page looks and behave when some resources are not available.

When a web page depends on resources (e.g. images, JavaScript files, fonts, or CSS stylesheets) that are hosted on other servers than the web page itself, there is a risk that those resources are not available to all your users. The third-party servers may fail to return the needed resources or just not be available at all.

As a web developer, it is important to verify how a web page behaves when external resources fail to load and whether the page handles this gracefully or appears broken to your users.

The first way to block network requests is by using the **Network** tool. 

## Blocking requests from the Network request blocking tool