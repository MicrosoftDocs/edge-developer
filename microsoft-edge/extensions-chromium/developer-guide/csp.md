---
title: Using Content Security Policy (CSP) to control which resources can be run
description: Using Content Security Policy (CSP) to control which resources can be loaded and run by a Microsoft Edge add-on.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: extensions
ms.date: 11/09/2022
---
# Using Content Security Policy (CSP) to control which resources can be run

To control which content can be run by your extension, in the extension's `manifest.json` file, use the `content_security_policy` key and its policy string value, per the following syntax:

```json
{
    ...,
    "content_security_policy": "[policy string]"
    ...
}
```

For example, the following is the default content security policy, as described below in [Default policy restrictions](#default-policy-restrictions):

```json
{
    ...,
    "content_security_policy": "script-src 'self'; object-src 'self'; worker-src 'self'"
    ...
}
```

To mitigate a large class of potential cross-site scripting issues, the Microsoft Edge extension system incorporates Content Security Policy (CSP).  CSP introduces some strict policies that make extensions more secure by default, and provides you with the ability to create and enforce rules governing the types of content that can be loaded and run by your extensions and applications.

In general, CSP works as a block/allowlisting mechanism for resources loaded or run by your extension.  Defining a reasonable policy for your extension enables you to carefully consider the resources that your extension requires, and to ask the browser to ensure that those are the only resources your extension has access to.  The policies provide security over and above the host permissions your extension requests; they are an additional layer of protection, not a replacement.

In contrast, in a webpage, such a policy is defined via an HTTP header or via a `meta` element.  But inside the Microsoft Edge extension system, an HTTP header or a `meta` element is not an appropriate mechanism.

See:
* [Content Security Policy (CSP)](https://developer.mozilla.org/docs/Web/HTTP/CSP) at MDN.
* [Manifest - Content Security Policy](https://developer.chrome.com/docs/extensions/reference/manifest/content-security-policy) in _Chrome Extensions_ > _Reference_.


<!-- ====================================================================== -->
## Default policy restrictions

Packages that don't define a `manifest_version` don't have a default content security policy.<!-- todo: update this; this might be outdated.  manifest_version is likely a required field; so there can't be extensions without it -->


Packages that use `manifest_version` have the following default content security policy:

##### [Manifest V3](#tab/v3)

<!-- todo: if feasible, to convey context, show entire line of JSON, not just the string value that's in quotes -->

```json
script-src 'self'; object-src 'self'; worker-src 'self'
```

##### [Manifest V2](#tab/v2)

```json
script-src 'self'; object-src 'self'
```

---

The policy adds security by limiting extensions and applications in three ways:


<!-- ------------------------------ -->
#### Eval and related functions are disabled

Code like the following doesn't work:

```javascript
alert(eval("foo.bar.baz"));
window.setTimeout("alert('hi')", 10);
window.setInterval("alert('hi')", 10);
new Function("return foo.bar.baz");
```

Evaluating strings of JavaScript like this is a common XSS attack vector.  Instead, you should write code like:

```javascript
alert(foo && foo.bar && foo.bar.baz);
window.setTimeout(function() { alert('hi'); }, 10);
window.setInterval(function() { alert('hi'); }, 10);
function() { return foo && foo.bar && foo.bar.baz };
```


<!-- ------------------------------ -->
#### Inline JavaScript aren't run<!-- todo: grammar -->

Inline JavaScript<!-- todo: grammar --> aren't run.  This restriction bans both inline `<script>` blocks and inline event handlers, such as `<button onclick="...">`.

The first restriction wipes out a huge class of cross-site scripting attacks by making it impossible for you to accidentally run the script provided by a malicious third-party.  It does, however, require you to write your code with a clean separation between content and behavior.  An example might make this clearer.  You could try to write a Browser Action pop-up as a single `pop-up.html` containing the following:

```html
<!doctype html>
<html>
    <head>
        <title>My Awesome Pop-up!</title>
        <script>
            function awesome() {
                // do something awesome!
            }

            function totallyAwesome() {
                // do something TOTALLY awesome!
            }

            function clickHandler(element) {
                setTimeout("awesome(); totallyAwesome()", 1000);
            }

            function main() {
                // Initialization work goes here.
            }
        </script>
    </head>
    <body onload="main();">
        <button onclick="clickHandler(this)">
            Click for awesomeness!
        </button>
    </body>
</html>
```

But three things must change in order to make this work the way you expect it to:

*  The `clickHandler` definition must be moved into an external JavaScript file (`popup.js` may be a good target).

*  The inline event handler definitions must be rewritten in terms of `addEventListener` and extracted into `popup.js`.  If you're currently starting your program using code like `<body onload="main();">`, consider replacing it by hooking into the `DOMContentLoaded` event of the document, or the `load` event of the window, depending on your requirements.  Use the former, since it generally triggers more quickly.

*  The `setTimeout` call must be rewritten to avoid converting the string `"awesome(); totallyAwesome()"` into JavaScript for running.

Those changes could look something like the following:

```javascript
function awesome() {
    // Do something awesome!
}

function totallyAwesome() {
    // do something TOTALLY awesome!
}

function awesomeTask() {
    awesome();
    totallyAwesome();
}

function clickHandler(e) {
    setTimeout(awesomeTask, 1000);
}

function main() {
    // Initialization work goes here.
}

// Add event listeners once the DOM has fully loaded by listening for the
// `DOMContentLoaded` event on the document, and adding your listeners to
// specific elements when it triggers.
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', clickHandler);
    main();
});
```

```html
<!doctype html>
<html>
    <head>
        <title>My Awesome Pop-up!</title>
        <script src="popup.js"></script>
    </head>
    <body>
        <button>Click for awesomeness!</button>
    </body>
</html>
```


<!-- ------------------------------ -->
#### Only local script and object resources are loaded

Script and object resources are only able to be loaded from the extension package, not from the web at large.  This ensures that your extension only runs the code you specifically approved, preventing an active network attacker from maliciously redirecting your request for a resource.

Instead of writing code that depends on jQuery (or any other library) loading from an external CDN, consider including the specific version of jQuery in your extension package.  That is, instead of:

```html
<!doctype html>
<html>
    <head>
        <title>My Awesome Pop-up!</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
    </head>
    <body>
        <button>Click for awesomeness!</button>
    </body>
</html>
```

Use the following approach instead.  Download the file, include it in your package, and write:

```html
<!doctype html>
<html>
    <head>
        <title>My Awesome Pop-up!</title>
        <script src="jquery.min.js"></script>
    </head>
    <body>
        <button>Click for awesomeness!</button>
    </body>
</html>
```


<!-- ====================================================================== -->
## Relaxing the default policy

You can allow running the following types of script:
* [Inline script](#inline-script)
* [Remote script](#remote-script)
* [Evaluated JavaScript](#evaluated-javascript)

Details are below.


<!-- ------------------------------ -->
#### Inline script

<!-- Up until Chrome 45, there was no mechanism for relaxing the restriction against running inline JavaScript.  In particular, setting a script policy that includes `'unsafe-inline'` has no effect.

As of Chrome 46, -->

Inline scripts can be allowed by specifying the base64-encoded hash of the source code in the policy.  This hash must be prefixed by the used hash algorithm (sha256, sha384 or sha512).  For an example, see [W3C > Hash usage for \<script\> elements](https://www.w3.org/TR/CSP2#script-src-hash-usage).


<!-- ------------------------------ -->
#### Remote script

If you require some external JavaScript or object resources, you can relax the policy to a limited extent by allowlisting secure origins from which scripts should be accepted.  Verify that runtime resources loaded with with elevated permissions of an extension are exactly the resources you expect, and aren't replaced by an active network attacker.  As [man-in-the-middle attacks](https://wikipedia.org/wiki/Man-in-the-middle_attack) are both trivial and undetectable over HTTP, those origins aren't accepted.

Currently, you can allowlist origins that have the following schemes: `blob`, `filesystem`, `https`, and `extension`.  The host part of the origin must explicitly be specified for the `https` and `extension` schemes.  Generic wildcards such as https:, `https://*` and `https://*.com` aren't allowed; subdomain wildcards such as `https://*.example.com` are allowed.  Domains in the [Public Suffix list](https://publicsuffix.org/list) are also viewed as generic top-level domains.  To load a resource from these domains, the subdomain must explicitly be listed.  For example, `https://*.cloudfront.net` is not valid, but `https://XXXX.cloudfront.net` and `https://*.XXXX.cloudfront.net` can be `allowlisted`.

For development ease, resources loaded over HTTP from servers on your local machine can be `allowlisted`.  You can allowlist script and object sources on any port of either `http://127.0.0.1` or `http://localhost`.

> [!NOTE]
> The restriction against resources loaded over HTTP applies only to those resources which are directly run.  You are still free, for example, to make `XMLHTTPRequest` connections to any origin you like; the default policy doesn't restrict `connect-src` or any of the other CSP directives in any way.

A relaxed policy definition which allows script resources to be loaded from `example.com` over HTTPS may look like:

```json
"content_security_policy": "script-src 'self' https://example.com; object-src 'self'"
```

> [!NOTE]
> Both `script-src` and `object-src` are defined by the policy.  Microsoft Edge doesn't accept a policy that doesn't limit each of these values to (at least) '`self`'.

<!-- Making use of Google Analytics is the canonical example for this sort of policy definition.  It is common enough that an Analytics boilerplate of sorts is provided in the Event Tracking with Google Analytics sample extension, and a brief tutorial that goes into more detail.  -->


<!-- ------------------------------ -->
#### Evaluated JavaScript

The policy against `eval()` and related functions like `setTimeout(String)`, `setInterval(String)`, and `new Function(String)` can be relaxed by adding `unsafe-eval` to your policy:

```json
"content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self'"
```

However, you should avoid relaxing policies.  These types of functions are notorious XSS attack vectors.


<!-- ====================================================================== -->
## Tightening the default policy

You can tighten this policy to whatever extent your extension allows, in order to increase security, at the expense of convenience.  To specify that your extension can only load resources of any type (images, and so on) from the associated extension package, for example, a policy of `default-src 'self'` might be appropriate.

<!-- The Mappy sample extension is a good example of an extension that is been locked down above and beyond the defaults.  -->


<!-- ====================================================================== -->
## Content scripts

The policy being discussing applies to the background pages and event pages of the extension.  How the content scripts apply to the content scripts of the extension is more complicated.

Content scripts are generally not subject to the CSP of the extension.  Since content scripts aren't HTML, the main impact of this is that they can use `eval` even if the CSP of the extension doesn't specify `unsafe-eval`, although this is not recommended.  Additionally, the CSP of the page doesn't apply to content scripts.  More complicated are `<script>` tags that content scripts create and put into the DOM of the page they are running on.  These are referenced as DOM injected scripts going forward.

DOM injected scripts that run immediately upon injection into the page run as you would expect.  Imagine a content script with the following code as a simple example:

```javascript
document.write("<script>alert(1);</script>");
 ```

This content script causes an `alert` immediately upon the `document.write()`.  Note that this runs regardless of the policy a page specifies.  However, the behavior becomes more complicated both inside that DOM injected script and for any script that doesn't immediately run upon injection.

Imagine that your extension is running on a page that provides an associated CSP that specifies `script-src 'self'`.  Now imagine the content script runs the following code:

```javascript
document.write("<button onclick='alert(1);'>click me</button>'");
```

If a user clicks that button, the `onclick` script doesn't run.  This is because the script didn't immediately run, and code that isn't interpreted until the `click` event occurs isn't considered part of the content script, so the CSP of the page (not of the extension) restricts the behavior.  And since that CSP doesn't specify `unsafe-inline`, the inline event handler is blocked.

The correct way to implement the desired behavior in this case is to add the `onclick` handler as a function from the content script, as follows:

```javascript
document.write("<button id='mybutton'>click me</button>'");
var button = document.getElementById('mybutton');
button.onclick = function() {
      alert(1);
};
```

Another similar issue arises if the content script runs the following:

```javascript
var script = document.createElement('script');
script.innerHTML = 'alert(1);'
document.getElementById('body').appendChild(script);
```

In this case, the script runs, and the alert appears.  However, consider this case:

```javascript
var script = document.createElement('script');
script.innerHTML = 'eval("alert(1);")';
=document.getElementById('body').appendChild(script);
```

While the initial script runs, the call to `eval` is blocked.  That is, while the initial script runtime is allowed, the behavior within the script is regulated by the CSP of the page.  Thus, depending on how you write DOM injected scripts in your extension, changes to the CSP of the page might affect the behavior of your extension.

Since content scripts aren't affected by the CSP of the page, this a great reason to put as much behavior as possible of your extension into the content script, rather than DOM injected scripts.


<!-- ====================================================================== -->
## See also

* [Content Security Policy (CSP)](https://developer.mozilla.org/docs/Web/HTTP/CSP) at MDN.
* [Manifest - Content Security Policy](https://developer.chrome.com/docs/extensions/reference/manifest/content-security-policy) in _Chrome Extensions_ > _Reference_.


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/extensions/reference/manifest/content-security-policy).<!-- or: https://developer.chrome.com/docs/privacy-security/csp -->
<!-- no correlation w/ either page outline -->

[![Creative Commons License](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
