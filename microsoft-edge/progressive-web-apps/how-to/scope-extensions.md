---
title: Scope extensions
description: Scope extensions.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: pwa
ms.date: 11/05/2026
---
# Scope extensions

_todo: task-oriented title, or hint-words?_

_todo: fill in the yaml desc: field_


<!-- ====================================================================== -->
## Extending scope to other domains, subdomains, or paths

By using scope extensions, a PWA can span other domains, subdomains, or paths.  For example:

A PWA can span the following top-level domains:
* `contoso.com`
* `contoso.co.uk`
* `contoso.fr`

A PWA can span the following subdomains:
* `www.contoso.com`
* `bar.contoso.com`

A PWA can span the following paths:
* `www.contoso.com/app`
* `www.contoso.com/foo`


<!-- ====================================================================== -->
## The `scope_extensions` web app manifest member

The `scope_extensions` web app manifest member enables a web app to extend its scope to other origins.

For example, this web app manifest file resides at the domain `sample-app.com`, and extends the scope to a different domain, `example.com`:

```json
{
  "name": "Example app",
  "display": "standalone",
  "start_url": "/index.html",
  "scope_extensions": [
    {
      "type": "origin",
      "origin": "https://example.com"
    }
  ]
}
```

The origins that are listed in the `scope_extensions` member must confirm that they are associated with the web app by hosting a configuration file named `.well-known/web-app-origin-association`.  The configuration file must list the web app's origin.

For example, this `.well-known/web-app-origin-association` configuration file resides at the domain `example.com`, and lists the web app's origin as the domain `sample-app.com`:

```json
{
  "https://sample-app.com/": {
    "scope": "/"
  }
}
```

See also:
* [scope_extensions](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Manifest/Reference/scope_extensions) at MDN.
* [Scope Extensions for Web App Manifest](https://github.com/WICG/manifest-incubations/blob/gh-pages/scope_extensions-explainer.md) explainer.
