---
description: Content Security Policy for Edge (Chromium) Extensions.
title: Content Security Policy (CSP)
author: MSEdgeTeam
ms.author: XXX
ms.date: 11/20/2019
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, extensions development, browser extensions, addons, partner center, developer
---

# Content Security Policy (CSP)  

In order to mitigate a large class of potential cross-site scripting issues, Microsoft Edge's extension system has incorporated the general concept of [Content Security Policy (CSP)](https://w3c.github.io/webappsec-csp/) . This introduces some fairly strict policies that will make extensions more secure by default, and provides you with the ability to create and enforce rules governing the types of content that can be loaded and executed by your extensions and applications.

In general, CSP works as a block/allowlisting mechanism for resources loaded or executed by your extensions. Defining a reasonable policy for your extension enables you to carefully consider the resources that your extension requires, and to ask the browser to ensure that those are the only resources your extension has access to. These policies provide security over and above the host permissions your extension requests; they're an additional layer of protection, not a replacement.

On the web, such a policy is defined via an HTTP header or `meta` element. Inside Microsoft Edge's extension system, neither is an appropriate mechanism. Instead, an extension's policy is defined via the extension's manifest.json file as follows:

``` js
{
  ...,
  "content_security_policy": "[POLICY STRING GOES HERE]"
  ...
}
```
> For full details regarding CSP's syntax, please take a look at the [Content Security Policy specification](https://w3c.github.io/webappsec-csp/) , and the ["An Introduction to Content Security Policy"](https://www.html5rocks.com/en/tutorials/security/content-security-policy/) article on HTML5Rocks.

## Default Policy Restrictions
Packages that do not define a manifest_version have no default content security policy. Those that select `manifest_version` 2, have a default content security policy of:

``` js
script-src 'self'; object-src 'self'
```
This policy adds security by limiting extensions and applications in three ways:

**Eval and related functions are disabled**  

Code like the following does not work:

``` js
alert(eval("foo.bar.baz"));
window.setTimeout("alert('hi')", 10);
window.setInterval("alert('hi')", 10);
new Function("return foo.bar.baz");
```

Evaluating strings of JavaScript like this is a common XSS attack vector. Instead, you should write code like:

``` js
alert(foo && foo.bar && foo.bar.baz);
window.setTimeout(function() { alert('hi'); }, 10);
window.setInterval(function() { alert('hi'); }, 10);
function() { return foo && foo.bar && foo.bar.baz };
```

**Inline JavaScript will not be executed**  

Inline JavaScript will not be executed. This restriction bans both inline `<script>` blocks and inline event handlers (e.g. `<button onclick="...">`).

The first restriction wipes out a huge class of cross-site scripting attacks by making it impossible for you to accidentally execute script provided by a malicious third-party. It does, however, require you to write your code with a clean separation between content and behavior (which you should of course do anyway, right?). An example might make this clearer. You might try to write a Browser Action's popup as a single popup.html containing:

``` HTML
<!doctype html>
<html>
  <head>
    <title>My Awesome Popup!</title>
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

Three things will need to change in order to make this work the way you expect it to:

- The `clickHandler` definition needs to move into an external JavaScript file (`popup.js` would be a good target).

- The inline event handler definitions must be rewritten in terms of `addEventListener` and extracted into `popup.js`.  

    If you're currently kicking off your program's execution via code like `<body onload="main();">`, consider replacing it by hooking into the document's `DOMContentLoaded` event, or the window's `load` event, depending on your needs. Below we'll use the former, as it generally triggers more quickly.

- The `setTimeout` call will need to be rewritten to avoid converting the string `"awesome(); totallyAwesome()"` into JavaScript for execution.
Those changes might look something like the following:

``` js
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

``` html
<!doctype html>
<html>
  <head>
    <title>My Awesome Popup!</title>
    <script src="popup.js"></script>
  </head>
  <body>
    <button>Click for awesomeness!</button>
  </body>
</html>
```

**Only local script and and object resources are loaded**  
Script and object resources can only be loaded from the extension's package, not from the web at large. This ensures that your extension only executes the code you've specifically approved, preventing an active network attacker from maliciously redirecting your request for a resource.

Instead of writing code that depends on jQuery (or any other library) loading from an external CDN, consider including the specific version of jQuery in your extension package. That is, instead of:

``` html
<!doctype html>
<html>
  <head>
    <title>My Awesome Popup!</title>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
  </head>
  <body>
    <button>Click for awesomeness!</button>
  </body>
</html>
```

Download the file, include it in your package, and write:

``` html
<!doctype html>
<html>
  <head>
    <title>My Awesome Popup!</title>
    <script src="jquery.min.js"></script>
  </head>
  <body>
    <button>Click for awesomeness!</button>
  </body>
</html>
```

## Relaxing the default policy

**Inline Script**  

<!-- Up until Chrome 45, there was no mechanism for relaxing the restriction against executing inline JavaScript. In particular, setting a script policy that includes `'unsafe-inline'` will have no effect.

As of Chrome 46, -->

Inline scripts can be allowed by specifying the base64-encoded hash of the source code in the policy. This hash must be prefixed by the used hash algorithm (sha256, sha384 or sha512). See [Hash usage for \<script\> elements](https://www.w3.org/TR/CSP2/) for an example.

**Remote Script**  

If you have a need for some external JavaScript or object resources, you can relax the policy to a limited extent by allowlisting secure origins from which scripts should be accepted. We want to ensure that executable resources loaded with an extension's elevated permissions are exactly the resources you expect, and haven't been replaced by an active network attacker. As [man-in-the-middle attacks](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) are both trivial and undetectable over HTTP, those origins will not be accepted.

Currently, developers can allowlist origins with the following schemes: `blob`, `filesystem`, `https`, and `extension`. The host part of the origin must explicitly be specified for the `https` and `extension` schemes. Generic wildcards such as https:, `https://*` and `https://*.com` are not allowed; subdomain wildcards such as `https://*.example.co`m are allowed. Domains in the [Public Suffix list](https://publicsuffix.org/list/) are also viewed as generic top-level domains. To load a resource from these domains, the subdomain must explicitly be listed. For example, `https://*.cloudfront.net` is invalid, but `https://XXXX.cloudfront.net` and `https://*.XXXX.cloudfront.net` can be allowlisted.

For development ease, resources loaded over HTTP from servers on your local machine can be allowlisted. You may allowlist script and object sources on any port of either `http://127.0.0.1` or `http://localhost`.

> [!NOTE]
> The restriction against resources loaded over HTTP applies only to those resources which are directly executed. You're still free, for example, to make XMLHTTPRequest connections to any origin you like; the default policy doesn't restrict `connect-src` or any of the other CSP directives in any way.

A relaxed policy definition which allows script resources to be loaded from example.com over HTTPS might look like:

```js
"content_security_policy": "script-src 'self' https://example.com; object-src 'self'"
```

> [!NOTE]
> Note that both script-src and object-src are defined by the policy. Microsoft Edge will not accept a policy that doesn't limit each of these values to (at least) 'self'.

<!-- Making use of Google Analytics is the canonical example for this sort of policy definition. It's common enough that we've provided an Analytics boilerplate of sorts in the Event Tracking with Google Analytics sample extension, and a brief tutorial that goes into more detail. -->

**Evaluated JavaScript**  

The policy against `eval()` and its relatives like `setTimeout(String)`, `setInterval(String)`, and `new Function(String)` can be relaxed by adding `unsafe-eval` to your policy:

``` js
"content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self'"
```

However, we strongly recommend against doing this. These functions are notorious XSS attack vectors.

## Tightening the default policy
You may, of course, tighten this policy to whatever extent your extension allows in order to increase security at the expense of convenience. To specify that your extension can only load resources of any type (images, etc) from its own package, for example, a policy of `default-src 'self'` would be appropriate. 

<!-- The Mappy sample extension is a good example of an extension that's been locked down above and beyond the defaults. -->

## Content Scripts
The policy that we have been discussing applies to the background pages and event pages of the extension. How they apply to the content scripts of the extension is more complicated.

Content scripts are generally not subject to the CSP of the extension. Since content scripts are not HTML, the main impact of this is that they may use `eval` even if the extension's CSP does not specify `unsafe-eval`, although this is not recommended. Additionally, the CSP of the page does not apply to content scripts. More complicated are `<script>` tags that content scripts create and put into the DOM of the page they are running on. We will refer to these as DOM injected scripts going forward.

DOM injected scripts that would be executed immediately upon injection into the page will execute as you might expect. Imagine a content script with the following code as a simple example:

``` js
 document.write("<script>alert(1);</script>");
 ```

This content script will cause an `alert` immediately upon the `document.write()`. Note that this will execute regardless of the policy a page may specify.
However, the behavior becomes more complicated both inside that DOM injected script and for any script that does not immediately execute upon injection. Imagine that our extension is running on a page that provides its own CSP that specifies `script-src 'self'`. Now imagine the content script executes the following code:

``` js
document.write("<button onclick='alert(1);'>click me</button>'");
```

If a user clicks on that button, the onclick script will not execute. This is because the script did not immediately execute and code not interpreted until the click event occurs is not considered part of the content script, so the CSP of the page (not of the extension) restricts its behavior. And since that CSP does not specify unsafe-inline, the inline event handler is blocked.
The correct way to implement the desired behavior in this case would be to add the onclick handler as a function from the content script as follows:

``` js
document.write("<button id='mybutton'>click me</button>'");
var button = document.getElementById('mybutton');
button.onclick = function() {
      alert(1);
};
```
Another similar issue arises if the content script executes the following:

``` js
  var script = document.createElement('script');
    script.innerHTML = 'alert(1);'
    document.getElementById('body').appendChild(script);
```

In this case, the script will execute and the alert will pop up. However, take this case:

``` js
    var script = document.createElement('script');
    script.innerHTML = 'eval("alert(1);")';
    document.getElementById('body').appendChild(script);
```

While the initial script will execute, the call to eval will be blocked. That is, while the initial script execution is allowed, the behavior within the script will be regulated by the page's CSP.  
Thus, depending on how you write DOM injected scripts in your extension, changes to the page's CSP may affect the behavior of your extension. Since content scripts are not affected by the page's CSP, this a great reason to put as much behavior as possible of your extension into the content script rather than DOM injected scripts.

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developer.chrome.com/extensions/hosting/).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: http://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
