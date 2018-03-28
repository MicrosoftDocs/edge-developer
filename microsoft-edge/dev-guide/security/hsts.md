---
ms.assetid: 75aa2c28-f3dd-4609-a431-6ddd2fe9412a
description: Learn how HTTP Strict Transport Security (HSTS) can ensure that users connect to secure sites in a secure way to help prevent a variety of attack scenarios.
title: Dev guide - HSTS
author: abbycar
ms.author: abigailc
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# HTTP Strict Transport Security (HSTS)

HTTP Strict Transport Security (HSTS) is a [IETF standard-compliant](https://tools.ietf.org/html/rfc6797) security feature in the header to ensure that users connect to secure sites in a secure way, helping to prevent a number of attack scenarios.


HSTS is used to declare that a website is only accessible over a secure connection, the browser may only request a given domain over the secure sockets layer (SSL). Using HSTS protects against a variety of man-in-the-middle attacks that can strip transport layer security (TLS) out of communications with a server, leaving the user vulnerable.

## Example Scenario

HSTS was designed to combat the threat model whereby an active network attacker is able to control the connection between a victim browser and the Internet at large. Imagine pulling out your laptop at the coffee shop and innocently enter *paypal.com* in the address bar. Your network request is likely to hit the network as an insecure request for *http://paypal.com*. An attacker can easily intercept this, replying with a fake version of PayPal to collect your log-in and password credentials.

Similarly, even if you were to type *https://paypal.com*, the attacker could intercept the request, and, after supplying a fake certificate, pose as the secure site. Your browser will typically show a certificate error page at this point, but too many users ignore such errors and proc
eed anyway. Researchers have built a variety of hacking tools, like *sslstrip*, to automate such attacks.

The stricter handling imposed by HSTS helps combat both of these threats.

## Enabling HSTS

Add the HTTP header for Strict-Transport-Security to enable HSTS on your site, including a `max-age` value and optionally an `includeSubDomains` directive. An example valid HSTS header:

```HTML
Strict-Transport-Security: max-age=10886400; includeSubDomains; preload
```

### Length of protection

Value | Description
:------------ | :------------- 
max-age | Defines the number of seconds for the browser to remember that access is only allowed via HTTPS. Longer values are preferable.

As a benchmark, PayPal’s current rule specifies a `max-age` of 14400 seconds, which means that the protection expires every four hours. If you were to load PayPal at home before bed, your HSTS protection would have evaporated by the time you opened your laptop at the coffee shop the following morning. In contrast, Twitter’s `max-age=631138519` rule provides an incredible 20 years of protection, and `addons.mozilla.org` is protected for a reasonable one year, `max-age=31536000`.

### The includeSubDomains Directive

Value | Description
:------------ | :------------- 
includeSubDomains | Optional parameter, if specified this rule applies to all of the site's subdomains.

The `includeSubDomains` directive enables a site to declare that the rule applies to subdomains of the current domain as well; a rule on *a.example.com* with `includeSubDomains` set will also apply to *b.a.example.com* and *c.a.example.com*, for instance. This directive is important because design flaws in HTTP cookies could lead to cookie injection and/or session fixation attacks if `includeSubDomains` is not set.

The crux of this threat is that browsers can’t indicate where cookies originated when they are sent back to the server. In addition, a child domain may set a cookie on its parent.  Even if you are interacting with `https://legit.example.com`, an active network attacker could create a fake `http://attacker.legit.example.com` and use it to set a cookie that would be sent to the secure site. The secure site would not have a trivial way to detect the phony cookie. By setting the `includeSubDomains` directive, a site can protect itself from an attacker-created insecure child, because any child domain would be required to present a valid certificate.

## Registering for a Preload List

Websites can also register to be hardcoded by Microsoft Edge to redirect HTTP traffic to HTTPS. Communications with these websites from the initial connection are automatically upgraded to be secure. Like other browsers which have implemented this feature, the Microsoft Edge preload list is based on the [Chromium HSTS preload list](https://hstspreload.appspot.com/).

Value | Description
:------------ | :------------- 
preload | Optional -- see [Chromium HSTS preload list](https://hstspreload.appspot.com/).

To be included on the HSTS preload list, your site must:
-  Have a valid certificate.
-  Redirect all HTTP traffic to HTTPS—i.e. be HTTPS only.
-  Serve all subdomains over HTTPS, specifically including the www subdomain if a DNS record for that subdomain exists.
-  Serve an HSTS header on the base domain for HTTPS requests: Expiry must be at least eighteen weeks (10886400 seconds).
-  The `includeSubdomains` token must be specified.
- The `preload` token must be specified.
-  If you are serving an additional redirect from your HTTPS site, that redirect must still have the HSTS header (not the page it redirects to).
-  **Be aware that inclusion in the preload list cannot really be undone.** You can request to be removed, but it will take months for the deleted entry to reach users. Don't request inclusion unless you're sure that you can support HTTPS for the long term.

HTTPS is not a magic bullet, but an serve to make hijacking secure information a lot more difficult. Read more about securing your site by adding [Content Security Policy (CSP)](./content-Security-Policy.md) to your header.

## Specification

[RFC 6797: HSTS specification](http://go.microsoft.com/fwlink/p/?LinkId=524408)

## Related articles

[How to enable HTTP Strict Transport Security (HSTS) in IIS7+](http://www.hanselman.com/blog/HowToEnableHTTPStrictTransportSecurityHSTSInIIS7.aspx)

[Strict Transport Security](http://blogs.msdn.com/b/ieinternals/archive/2014/08/18/hsts-strict-transport-security-attacks-mitigations-deployment-https.aspx)

[HTTP Strict Transport Security comes to Internet Explorer](https://blogs.msdn.microsoft.com/ie/2015/02/16/http-strict-transport-security-comes-to-internet-explorer/)

[HTTP Strict Transport Security comes to Internet Explorer 11 on Windows 8.1 and Windows 7](https://blogs.windows.com/msedgedev/2015/06/09/http-strict-transport-security-comes-to-internet-explorer-11-on-windows-8-1-and-windows-7/)

[Content Security Policy(CSP)](./content-Security-Policy.md)

[Securityheaders.io: Scan your site security now](https://securityheaders.io/)

