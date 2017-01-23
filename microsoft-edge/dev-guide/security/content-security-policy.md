---
description: Learn aboute how the Content Security Policy enables web developers to control the resources that a particular page can fetch or execute with the aim of preventing cross-site scripting (XSS), clickjacking, and other code injection attacks seeking to execute malicious content.
title: Content Security Policy
author: abbycar
---

# Content Security Policy


Microsoft Edge now implements Content Security Policy (CSP) 1.0. For extended details, see the [W3C Content Security Policy specification](http://www.w3.org/TR/2012/CR-CSP-20121115/).

> NOTE: Content Security Policy 1.0 is supported in Microsoft Edge build 10240+. [Content Security Policy Level 2](http://go.microsoft.com/fwlink/p/?LinkID=524582), an evolution of the specification, is currently [under consideration](https://developer.microsoft.com/en-us/microsoft-edge/platform/status/contentsecuritypolicylevel2?filter=f3f0000bf&search=content%20security) for implementation in the Microsoft Edge browser pending the spec stabilization, foundational work, and an evaluation of community input.

The CSP security standard enables web developers to control the resources (JS, CSS, plugins, images, etc) which a particular page can fetch or execute with the aim of preventing cross-site scripting (XSS), clickjacking, and other code injection attacks seeking to execute malicious content in the context of a trusted web page. With CSP, web developers can create an allow list of sources of trusted content in the HTTP headers, pre-approving certain servers for content loaded into a webpage and instructing the browser to only execute or render resources from those sources.

For example, say you want to protect your site against Cross Site Scripting (XSS) attacks, and you're loading all your files from your own server and a 3rd party content delivery network (CDN) hosting a library you use. Using CSP, you would send a header with 'self' (your server) and the CDN as your approved list.

## CSP Directives

The `Content-Security-Policy` header value is made up of one or more directives (defined below), multiple directives are separated with a semicolon `;`. The directives below are based on the [Content Security Policy 1.0 W3C Candidate Recommendation](http://www.w3.org/TR/2012/CR-CSP-20121115/).

Directive | Example Value | Description 
:------------ | :------------- | :-------------
default-src	|'self' cdn.foo.com	| The default-src is the default policy for loading content such as JavaScript, Images, CSS, Font's, AJAX requests, Frames, or HTML5 Media. See the [Source List Reference](#Source-List-Reference) for possible values.
script-src | 'self' js.foo.com | Defines valid sources of JavaScript.
style-src | 'self' css.foo.com | Defines valid sources of stylesheets.
img-src | 'self' img.foo.com | Defines valid sources of images.
connect-src | 'self' | Applies to XMLHttpRequest (AJAX), WebSocket or EventSource. If not allowed the browser emulates a 400 HTTP status code.
font-src | font.foo.com | Defines valid sources of fonts.
object-src | 'self' | Defines valid sources of plugins, eg  `<object>`, `<embed>` or `<applet>`.
media-src | media.foo.com | Defines valid sources of audio and video, eg HTML5 `<audio>`, `<video>` elements.
frame-src | 'self' | Defines valid sources for loading frames.
sandbox | allow-forms allow-scripts | Enables a sandbox for the requested resource similar to the iframe sandbox attribute. The sandbox applies a same origin policy, prevents popups, plugins and script execution is blocked. You can keep the sandbox value empty to keep all restrictions in place, or add values: allow-forms allow-same-origin allow-scripts, and allow-top-navigation
report-uri | /some-report-uri | Instructs the browser to POST a reports of policy failures to this URI. You can also append -Report-Only to the HTTP header name to instruct the browser to only send reports (does not block anything).

## Source List Reference

All of the directives that end with `-src` support similar values known as a source list. Multiple source list values can be space separated with the exception of 'none' which should be the only value.

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

## CSP 1.0 breaks inline script and onClick handlers
**A Common 'Gotcha'**: To prevent script injection, you can't execute any code in the page. That means *onClick* handlers in HTML elements and inline code are banned when CSP is in effect. The current best-practice recommendation is to use event listeners and have all code in a separate file. If you're doing that, you'll be fine. But if you have older pages or have been falling back on old habits, you'll need to clean up your HTML before you implement CSP or you could end up with unexpected failures.

For compatibility, if you implement CSP at the server level, it will disable or break inline JavaScript code and `onClick` handlers. While those are not current best practice, they do appear more often in older webpages. For best performance, or to workaround these errors, load all JavaScript from external files, importing them with `<script src="[name of file]">` elements and replace all `onClick` handlers in your HTML with [`addEventListener`](https://msdn.microsoft.com/library/ff975245(v=vs.85).aspx) for handling clicks in your JavaScript code.

## CSP error codes and reporting blocked resources

Resources blocked by CSP are reported through F12 tools and, optionally, as a report back to the server. For a list of CSP error codes, see the [Console error and status codes](https://developer.microsoft.com/en-us/microsoft-edge/platform/documentation/f12-devtools-guide/console/console-error-and-status-codes/) page of the F12 devtools guide.
[![CSP errors](http://i.imgur.com/KzyzDle.png)](https://developer.microsoft.com/en-us/microsoft-edge/platform/documentation/f12-devtools-guide/console/console-error-and-status-codes/)

> NOTE: For websites in a user's trusted security zone, Microsoft Edge won't check the MIME type of a style sheet.

## Related articles

[Microsoft Edge: Building a safer browser](https://blogs.windows.com/msedgedev/2015/05/11/microsoft-edge-building-a-safer-browser/)

[Living on the edge – our next step in helping the web just work](https://blogs.windows.com/msedgedev/2014/11/11/living-on-the-edge-our-next-step-in-helping-the-web-just-work/)


## Specification
[Content Security Policy 1.0](http://www.w3.org/TR/2012/CR-CSP-20121115/) *Currently implemented on Microsoft Edge.

[Content Security Policy Level 2](http://www.w3.org/TR/CSP2/)

[Content Security Policy Level 3](http://w3c.github.io/webappsec-csp/)
