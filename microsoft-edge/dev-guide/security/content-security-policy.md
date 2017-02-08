---
ms.assetid: fd33daa7-fe53-48a2-b78f-063172667f74
description: Learn how the Content Security Policy enables control of resources that a particular page can fetch or execute with the aim of preventing code injection attacks.
title: Dev guide - Content Security Policy
author: abbycar
ms.author: abigailc
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Content Security Policy


The latest preview release ([EdgeHTML 15.15002](https://developer.microsoft.com/en-us/microsoft-edge/platform/changelog/desktop/15002/)) of Microsoft Edge supports [Content Security Policy Level 2](http://www.w3.org/TR/CSP2/), which extends and replaces the original Content Security Policy (Level 1) support in the current stable public release.

The CSP security standard enables web developers to control the resources (script, CSS, plugins, images, etc.) which a particular page can fetch or execute with the aim of preventing cross-site scripting (XSS), clickjacking, and other code injection attacks seeking to execute malicious content in the context of a trusted web page. With CSP, web developers can create an allow list of sources of trusted content in the HTTP headers, pre-approving certain servers for content loaded into a webpage and instructing the browser to only execute or render resources from those sources.

## Changes between CSP Level 1 and Level 2
Sites already using CSP 1 should continue to work with Microsoft Edge support for CSP 2, however it's best to switch any `frame-src` directives that load worker scripts to the new `child-src` directive to future-proof your site. (In CSP 3, `frame-src` will no longer apply to workers.) CSP 2 also adds the following:

1. New directives: `base-uri`, `child-src`, `form-action`, `frame-ancestors` and `plugin-types`. See table below for more details.

2. Workers support: Background worker scripts are governed by their own policy, separate from the policy of the document loading them. As with host documents, you can set the CSP for a worker in the response header. Also new in CSP 2 is that the `allow-scripts` and `allow-same-origin` flags of the `sandbox` directive now affect worker thread creation.

3. Inline scripts and styles: CSP 2 allows for the execution of inline scripts and style blocks by providing nonces and hashes as a whitelisting mechanism. Nonces are random base-64 values generated on each page load that appears in both the CSP policy and in the script tags in the page. When the page is dynamically generated on load, the server generates a nonce value, inserts it into the NonceToken in the page and also declares it in the Content Security Policy HTTP header. Hashes are static values generated (via *sha256*, *sha384* or *sha512* algorithms) from the content of a `<script>` or `<style>` element that are then specified (via `script-src` or `style-src` directives) in the CSP policy.

4. CSP violation reporting: A new event, `SecurityPolicyViolationEvent` is now fired upon CSP violations. The earlier mechanism for CSP reporting, `report-uri`, continues to be supported. Several new fields have been added to the violation reports common to both, including `effectiveDirective` (the policy that was violated), `statusCode` (the HTTP response code), `sourceFile` (the URL of the offending resource), `lineNumber`, and `columnNumber`.

## CSP Directives

The `Content-Security-Policy` header value is made up of one or more directives (defined below), multiple directives are separated with a semicolon `;`. The directives below are based on the [Content Security Policy Level 2](http://www.w3.org/TR/CSP2/) specification.

Directive | Description
:------------ | :-------------
base-uri | Restricts which `href` values specified by the `<base>` element can be used as the document's base URL.
child-src | Defines valid source for loading frames and workers.
connect-src |  Applies to XMLHttpRequest (AJAX), WebSocket or EventSource. If not allowed the browser emulates a 400 HTTP status code.
default-src	| The default-src is the default policy for loading content such as JavaScript, Images, CSS, Font's, AJAX requests, Frames, or HTML5 Media. See the [Source List Reference](#Source-List-Reference) for possible values.
font-src | Defines valid sources of fonts.
form-action | Restricts which `action` URL values specified by the `<form>` element can be used to process the form.
frame-ancestors | Restricts how the document is embedded in other documents.
frame-src | Deprecated. Defines valid sources for loading frames.
img-src | Defines valid sources of images.
media-src | Defines valid sources of audio and video (e.g., HTML5 `<audio>`, `<video>` elements).
object-src | Defines valid sources of plugins (e.g.,  `<object>`, `<embed>` or `<applet>`).
plugin-types | Defines the plugin MIME types the document can load (e.g., `application/x-shockwave-flash`) via the `<embed>`, `<object>`, and `<applet>` elements.
report-uri | Instructs the browser to POST a reports of policy failures to this URI. You can also append -Report-Only to the HTTP header name to instruct the browser to only send reports (does not block anything).
sandbox | Enables a sandbox for the requested resource similar to the iframe sandbox attribute. The sandbox applies a same origin policy, prevents popups, plugins and script execution is blocked. You can keep the sandbox value empty to keep all restrictions in place, or specify these values: `allow-forms`, `allow-same-origin`, `allow-scripts`, `allow-top-navigation`.
script-src | Defines valid sources of JavaScript.
style-src | Defines valid sources of stylesheets.

## Source List Reference

All of the directives that end with `-src` and also `frame-ancestors` support values known as a "source list". Multiple source list values can be space separated with the exception of 'none' which should be the only value.

Source Value | Example | Description
:------------ | :------------- | :-------------
* | img-src * | Wildcard, allows any URL except data: blob: filesystem: schemes.
'none' | object-src 'none' | Prevents loading resources from any source.
'self' | script-src 'self' | Allows loading resources from the same origin (same scheme, host and port).
data: | img-src 'self' data: | Allows loading resources via the data scheme (eg Base64 encoded images).
domain.foo.com | img-src img.foo.com | Allows loading resources from the specified domain name.
*.foo.com | img-src *.foo.com | Allows loading resources from the any subdomain under foo.com.
`https://img.foo.com` | img-src `https://img.foo.com` | Allows loading resources only over HTTPS matching the given domain.
https: | img-src https: | Allows loading resources only over HTTPS on any domain.
'unsafe-inline' | script-src 'unsafe-inline' | Allows use of inline source elements such as style attribute, onclick, or script tag bodies (depends on the context of the source it is applied to)
'unsafe-eval' | script-src 'unsafe-eval' | Allows unsafe dynamic code evaluation such as JavaScript eval()


## CSP Examples
Here a few common scenarios for content security policies:

#### Allow everything but only from the same origin
```HTML
default-src 'self';
```

#### Only Allow Scripts from the same origin
```HTML
script-src 'self';
```

#### Allow Google Analytics, Google AJAX CDN and Same Origin
```HTML
script-src 'self' www.google-analytics.com ajax.googleapis.com;
```

#### Starter Policy

This policy allows images, scripts, AJAX, and CSS from the same origin, and does not allow any other resources to load (eg object, frame, media, etc). It is a good starting point for many sites.
```HTML
default-src 'none'; script-src 'self'; connect-src 'self'; img-src 'self'; style-src 'self';
```

## Inline script and onclick handlers
Unless explicitly whitelisted via nonce or hash (or the entire blocking mechanism is disabled via the `unsafe-inline` source value), inline code and `onclick` handlers are blocked from running when CSP is in effect.  Whenever possible, its best to use event listeners and maintain script in a separate file from markup. For more on whitelisting inline code, see Mozilla Security Blog, [CSP for the web we have](https://blog.mozilla.org/security/2014/10/04/csp-for-the-web-we-have/). 

## CSP error codes and reporting blocked resources

Resources blocked by CSP are reported through F12 tools and, optionally, as a report back to the server. For a list of CSP error codes, see the [Console error and status codes](../../f12-devtools-guide/console/console-error-and-status-codes.md) page of the F12 devtools guide.
[![CSP errors](http://i.imgur.com/KzyzDle.png)](../../f12-devtools-guide/console/console-error-and-status-codes.md)

> [!NOTE]
> For websites in a user's trusted security zone, Microsoft Edge won't check the MIME type of a style sheet.


## Related articles

[Keeping your Hosted Web App secure](https://blogs.windows.com/buildingapps/2016/03/22/keeping-your-hosted-web-app-secure/#z71oiBKiXOYXVQXp.97)

[Microsoft Edge: Building a safer browser](https://blogs.windows.com/msedgedev/2015/05/11/microsoft-edge-building-a-safer-browser/)


## Specification
[Content Security Policy 1.0](http://www.w3.org/TR/2012/CR-CSP-20121115/) *Supported on stable public release of Microsoft Edge

[Content Security Policy Level 2](http://www.w3.org/TR/CSP2/) *Supported on preview release build EdgeHTML 15.15002+

[Content Security Policy Level 3](http://w3c.github.io/webappsec-csp/) *Not yet implemented in Microsoft Edge
