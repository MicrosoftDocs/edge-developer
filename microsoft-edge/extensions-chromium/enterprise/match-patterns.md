---
ms.assetid: c4544a19-de78-4c69-a042-c0415726548f
description: Learn how to create a new submission for publishing extension on Microsoft Edge Addons Store.
title: create-new-submission
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/08/2019
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, extensions development, browser extensions, addons, partner center, developer
---

# Match Patterns

Host permissions and content script matching are based on a set of URLs defined by match patterns. A match pattern is essentially a URL that begins with a permitted scheme (`http`, `https`, `file`, or `ftp`, and that can contain '*' characters. The special pattern `<all_urls>` matches any URL that starts with a permitted scheme. Each match pattern has 3 parts:

- _scheme_ — for example, `http` or `file` or `*`  

> [!NOTE]
> Access to `file` URLs isn't automatic. The user must visit the extensions management page and opt in to `file` access for each extension that requests it.

- _host_ — for example, `www.google.com` or `*.google.com` or `*`; if the scheme is file, there is no host part
- _path_ — for example, `/*`, `/foo*`, or `/foo/bar`. The path must be present in a host permission, but is always treated as `/*`.
 
Here's the basic syntax:

```
<url-pattern> := <scheme>://<host><path>
<scheme> := '*' | 'http' | 'https' | 'file' | 'ftp'
<host> := '*' | '*.' <any char except '/' and '*'>+
<path> := '/' <any chars>
```

The meaning of `*` depends on whether it's in the scheme, host, or path part. If the scheme is `*`, then it matches either `http` or `https`, and not `file`, or `ftp`. If the host is just `*`, then it matches any host. If the host is `*.hostname`, then it matches the specified host or any of its subdomains. In the path section, each `*` matches 0 or more characters. The following table shows some valid patterns.

 <table style="width:100%">
      <tr>
        <th><b>Pattern</b></th>
        <th><b>What it does</b></th>
        <th><b>Examples of matching URLs</b></th>
      </tr>
      <tr>
        <td>http://*/*</td>
        <td>Matches any URL that uses the http scheme</td>
        <td>http://www.google.com/
http://example.org/foo/bar.html</td>
      </tr>
    <tr>
        <td>http://*/foo*</td>
        <td>Matches any URL that uses the http scheme, on any host, as long as the path starts with /foo</td>
        <td>http://example.com/foo/bar.html
http://www.google.com/foo</td>
      </tr>
     <tr>
        <td>https://*.google.com/foo*bar</td>
        <td>Matches any URL that uses the https scheme, is on a google.com host (such as www.google.com, docs.google.com, or google.com), as long as the path starts with /foo and ends with bar</td>
        <td>https://www.google.com/foo/baz/bar
https://docs.google.com/foobar</td>
      </tr>
    <tr>
        <td>http://example.org/foo/bar.html</td>
        <td>Matches the specified URL</td>
        <td>http://example.org/foo/bar.html</td>
      </tr>
    <tr>
        <td>file:///foo*</td>
        <td>Matches any local file whose path starts with /foo</td>
        <td>file:///foo/bar.html
file:///foo</td>
      </tr>
    <tr>
        <td>http://127.0.0.1/*</td>
        <td>Matches any URL that uses the http scheme and is on the host 127.0.0.1</td>
        <td>http://127.0.0.1/
http://127.0.0.1/foo/bar.html</td>
      </tr>
    <tr>
        <td>*://mail.google.com/*</td>
        <td>Matches any URL that starts with http://mail.google.com or https://mail.google.com.</td>
        <td>http://mail.google.com/foo/baz/bar
https://mail.google.com/foobar</td>
      </tr>
    <tr>
        <td>&ltall_urls&gt</td>
        <td>Matches any URL that uses a permitted scheme. (See the beginning of this section for the list of permitted schemes.)</td>
        <td>http://example.org/foo/bar.html
file:///bar/baz.html</td>
      </tr>
    </table>

Here are some examples of _invalid_ pattern matches:

| **Bad pattern**  |  **Why it's bad** |
|---|---|
|  http://www.google.com | No _path_ |
| http://*foo/bar | '*' in the host can be followed only by a '.' or '/' |
| http://foo.*.bar/baz | If '*' is in the _host_, it must be the first character |
| http:/bar | Missing _scheme_ separator ("/" should be "//") |
| foo://* | Invalid _scheme_ |

Some schemes are not supported in all contexts.

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google] and used according to terms described in the [Creative Commons Attribution 4.0 International License]. The original page can be found [here].

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.

[shared by Google]: https://developers.google.com/terms/site-policies
[Creative Commons Attribution 4.0 International License]: https://creativecommons.org/licenses/by/4.0/
[here]: https://developer.chrome.com/extensions/match_patterns
