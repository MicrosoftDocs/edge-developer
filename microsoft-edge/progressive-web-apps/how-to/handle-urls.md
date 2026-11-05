---
title: Handle links to a PWA
description: How links to your Progressive Web App (PWA) can be handled by your app rather than by the web browser.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: pwa
ms.date: 08/04/2026
---
# Handle links to a PWA
<!-- https://learn.microsoft.com/microsoft-edge/progressive-web-apps/how-to/handle-urls -->

A Progressive Web App (PWA) on the device's operating system can handle links, so that when an associated URL is activated, the PWA can request to be launched instead of the web browser, to create a more engaging experience.

This link handling is like how native apps handle links on many operating systems.

**Detailed contents:**
* [Handle links from other origins by using scope extensions](#handle-links-from-other-origins-by-using-scope-extensions)
    * [PWA scope when not using scope extensions](#pwa-scope-when-not-using-scope-extensions)
    * [Extending scope to other domains, subdomains, or paths](#extending-scope-to-other-domains-subdomains-or-paths)
    * [The scope_extensions web app manifest member](#the-scope_extensions-web-app-manifest-member)
* [See also](#see-also)

<!--
link handling vs. url handling:
Although the present file name is handle-urls.md, this file was repurposed to cover link handling (= `handle_links` manifest member?) rather than URL handlers (`url_handlers` manifest member).
The PWA URL handlers feature was removed from Chromium.
* [PWAs as URL Handlers](https://developer.chrome.com/docs/capabilities/pwa-url-handler) - "Warning: PWAs as URL Handlers was part of the capabilities project https://developer.chrome.com/docs/capabilities/status and support for the experimental `url_handlers` manifest member, documented below, is being phased out.  The `url_handlers` manifest member is being replaced by the new `handle_links` manifest member, which is currently being standardized and implemented. See the handle_links explainer. https://github.com/WICG/pwa-url-handler/blob/main/handle_links/explainer.md "

`handle_links` doesn't occur below:
-->


<!-- ====================================================================== -->
## Handle links from other origins by using scope extensions

Scope extensions make it possible for a Progressive Web App (PWA) to capture navigation to domains, subdomains, or paths other than its own scope.  Scope extensions allow web apps that rely on multiple top-level domains, multiple subdomains, or multiple paths to be presented as a single web app.

Scope extension can be useful for cases such as PWAs that handle localization by using multiple domains, subdomains, or paths.

See also:
* [Scope extensions](./scope-extensions.md)


<!-- ------------------------------ -->
#### PWA scope when not using scope extensions

The manifest of a PWA defines which part of the hosting domain, such as a specific path, the PWA is scoped to.  For example, the `www.contoso.com` domain name may have a PWA defined under the path `www.contoso.com/app`, with its scope set to `/app`.

In that case, all webpages within the `www.contoso.com/app` path are part of the PWA scope.  However, if you don't use scope extensions, the following webpages are not part of that PWA scope:

* Webpages at a different domain, such as `www.contoso.co.uk`.
* Webpages at a different subdomain, such as `bar.contoso.com`.
* Webpages at a different path, such as `www.contoso.com/foo`.


<!-- ====================================================================== -->
## The edge://apps toggle _todo: which toggle, where?_

The visible "Let this application open supported links" setting _todo: where?_ controls browser navigation capturing, not OS link handling.

todo: Equivalent Edge documentation is optional; if we add it, we can model it after Chrome's navigation-management guide: [Navigation management into installed PWAs](https://developer.chrome.com/docs/capabilities/pwa-navigation-management), adapted to Edge's behavior.


<!-- ====================================================================== -->
## See also
<!-- all links in article body -->

* [Scope extensions](./scope-extensions.md)

MDN:
* [scope_extensions](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Manifest/Reference/scope_extensions)

Explainers:
* [Scope Extensions for Web App Manifest](https://github.com/WICG/manifest-incubations/blob/gh-pages/scope_extensions-explainer.md)
* [Web App Link Handling Manifest Options](https://github.com/WICG/pwa-url-handler/blob/main/handle_links/explainer.md) - `handle_links` explainer.<!-- todo: relevant? the present article's body doesn't cover `handle_links` -->
