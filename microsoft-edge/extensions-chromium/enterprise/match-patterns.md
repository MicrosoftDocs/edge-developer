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

