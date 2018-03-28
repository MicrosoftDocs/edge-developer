---
ms.assetid: 8140b8da-e899-4541-9695-031884be8916
description: Guides about security policies, protocols, and API within Microsoft Edge.
title: Dev guide - Security
author: abbycar
ms.author: abigailc
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Security features

## Content Security Policy (CSP)

With [Content Security Policy](./security/content-Security-Policy.md), you create an allow list of sources of trusted content in the HTTP headers, pre-approving certain servers for content loaded into a webpage and instructing the browser to only execute or render resources from those sources. This can be used to prevent malicious content from being injected into sites.

## HTTP Strict Transport Security (HSTS)

[HSTS policy](./security/HSTS.md) protects against variants of man-in-the-middle attacks that can strip TLS out of communications with a server, leaving the user vulnerable. HSTS does this by allowing sites to specify that the browser should always use a secure connection to the server.

## Meta referrer

The [meta name="referrer"](./security/meta-referrer.md) tag lets you specify what information about a webpage should be passed in the HTTP header to any request sent from the page.

## Web Cryptography API
[Web Cryptography API](./security/web-Cryptography-API.md) provides basic cryptographic operations in web applications, such as hashing, signature generation and verification, and encryption and decryption.

## Transport Layer Security (TLS)

TLS, the successor to [SSL](http://blogs.msdn.com/b/kaushal/archive/2011/10/02/support-for-ssl-tls-protocols-on-windows.aspx), is a protocol that provides communications privacy and security between two applications communicating over a network. For more info about the TLS protocol, check out the [Windows Dev Center](https://msdn.microsoft.com/library/windows/desktop/aa380516).
