---
description: Enterprise policy documentation for Edge (Chromium) Extensions.
title: Match Patterns
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 12/05/2019
ms.topic: article
ms.prod: microsoft-edge-chromium
keywords: edge-chromium, extensions development, browser extensions, addons, partner center, developer
---

# Match Patterns

Host permissions and content script matching are based on a set of URLs defined by match patterns.  A match pattern is essentially a URL that begins with a permitted scheme (`http`, `https`, `file`, or `ftp`, and that can contain '`*`' characters.  The special pattern `<all_urls>` matches any URL that starts with a permitted scheme.  Each match pattern has 3 parts:  

*   _scheme_ — for example, `http` or `file` or `*`  

> [!NOTE]
> Access to `file` URLs is not automatic.  The user must visit the Extensions management page and opt in to `file` access for each Extension that requests it.  

*   `_host_` — for example, `www.google.com` or `*.google.com` or `*`; if the scheme is file, there is no host part.  
*   `_path_` — for example, `/*`, `/foo*`, or `/foo/bar`.  The path must be present in a host permission, but is always treated as `/*`.  

The basic syntax:  

```shell
<url-pattern> := <scheme>://<host><path>
<scheme> := '*' | 'http' | 'https' | 'file' | 'ftp'
<host> := '*' | '*.' <any char except '/' and '*'>+
<path> := '/' <any chars>
```  

The meaning of `*` depends on whether it is in the scheme, host, or path part.  If the scheme is `*`, then it matches either `http` or `https`, and not `file`, or `ftp`.  If the host is just `*`, then it matches any host. If the host is `*.hostname`, then it matches the specified host or any of the subdomains.  In the path section, each `*` matches 0 or more characters.  The following table shows some valid patterns.  

| Pattern | What it does | Examples of matching URLs |  
|:--- |:--- |:--- |  
| `http://*/*` | Matches any URL that uses the http scheme | `http://www.google.com` `http://example.org/foo/bar.html` |  
| `http://*/foo*` | Matches any URL that uses the http scheme, on any host, as long as the path starts with `/foo` | `http://example.com/foo/bar.html` `http://www.google.com/foo` |  
| `https://*.google.com/foo*bar` | Matches any URL that uses the https scheme, is on a `google.com` host \(such as `www.google.com`, `docs.google.com`, or `google.com`\), as long as the path starts with `/foo` and ends with `bar` | `https://www.google.com/foo/baz/bar` `https://docs.google.com/foobar` |  
| `http://example.org/foo/bar.html` | Matches the specified URL | `http://example.org/foo/bar.html` |  
|`file:///foo*` | Matches any local file whose path starts with `/foo` | `file:///foo/bar.html` `file:///foo` |  
| `http://127.0.0.1/*` | Matches any URL that uses the `http` scheme and is on the host `127.0.0.1` | `http://127.0.0.1` `http://127.0.0.1/foo/bar.html` |  
| `*://mail.google.com/*` | Matches any URL that starts with `http://mail.google.com` or `https://mail.google.com`. | `http://mail.google.com/foo/baz/bar` `https://mail.google.com/foobar` |  
| `<all_urls>` | Matches any URL that uses a permitted scheme. \(See the beginning of this section for the list of permitted schemes.\) | `http://example.org/foo/bar.html` `file:///bar/baz.html` |  

Here are some examples of `_invalid_` pattern matches:

| Bad pattern | Why it is bad |  
|:--- |:--- |  
| `http://www.foo.com` | No `_path_` |  
| `http://*foo/bar` | '`*`' in the host can be followed only by a '`.`' or '`/`' |  
| `http://foo.*.bar/baz` | If '`*`' is in the `_host_`, it must be the first character |  
| `http:/bar` | Missing `_scheme_` separator \('`/`' should be "`//`"\) |  
| `foo://*` | Invalid `_scheme_` |  

Some schemes are not supported in all contexts.

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developer.chrome.com/extensions/match_patterns/).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
