---
title: Use origin trials in Microsoft Edge
description: Safely experiment for a fixed period of time and provide feedback on new platform features.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.date: 10/15/2024
---
# Use origin trials in Microsoft Edge

Use origin trials to try out experimental APIs on your own live site for a limited period of time.  When using origin trials, users of Microsoft Edge that visit your site can run code that uses experimental APIs.

To support using the experimental APIs in your website, you register the origin domain that you want to use the experimental feature on (for example, `https://example.com`), and then an origin trial token is sent to you.  You use the token at your website in a `<head>/<meta>` element, or in an `Origin-Trial` HTTP server response header.  When a Microsoft Edge user visits your website, the token turns on that origin-trial feature in the user's Microsoft Edge browser.  The user doesn't need to set any `edge://flags` in Microsoft Edge.

To see a list of the available origin trials and register your origin to try out any of the origin trials, see [Microsoft Edge Origin Trials](https://developer.microsoft.com/microsoft-edge/origin-trials).  To assess the suitability of using the experimental APIs on your website, check the minimum version requirements for Microsoft Edge, and check the trial expiration date.

You can also provide feedback to browser engineers and the web standards community about the design of the API, your use-cases, or your experience with using the APIs.


<!-- ====================================================================== -->
## Register for an origin trial
<!-- probably don't change wording of heading, b/c the "Register for an experiment" card at https://developer.microsoft.com/microsoft-edge/origin-trials probably links to this heading/anchor -->

To register for an origin trial:

1. Go to [Microsoft Edge Origin Trials](https://developer.microsoft.com/microsoft-edge/origin-trials).

1. Select an active trial.

1. Complete the registration form, and then click the **Submit** button to get a valid token.


<!-- ------------------------------ -->
#### Ad Selection API origin trial

To sign up for the Ad Selection API origin trial, you must use the old [Microsoft Edge Origin Trials](https://microsoftedge.github.io/MSEdgeExplainers/origin-trials/) portal that's at Github.io, rather than the new portal that's at Microsoft.com.  See [Sign up for the Ad Selection API](../web-platform/ad-selection-api.md).


<!-- ====================================================================== -->
## How to use the origin trial token
<!-- probably don't change wording of heading, b/c the "Enable the Origin Trial in your site's code" card at https://developer.microsoft.com/microsoft-edge/origin-trials probably links to this heading/anchor -->

When an origin trial token is found in a document, Microsoft Edge automatically turns on the Microsoft Edge feature flag that corresponds to the origin trial for which the token is valid.  This allows a user of the application to use the feature in their local browser, despite the feature's off-by-default state.

After you receive the origin trial token, use the token in one of the following two ways:


<!-- ------------------------------ -->
#### Option 1: A \<meta\> tag within the \<head\> element of a webpage

Within the `<head>` element of any webpage, include the following `<meta>` tag:

`<meta http-equiv="origin-trial" content="EXAMPLE_TOKEN">`

* In the `http-equiv` attribute, use the literal string `"origin-trial"`.
* In the `content` attribute, replace `EXAMPLE_TOKEN` by your token.


<!-- ------------------------------ -->
#### Option 2: An HTTP header in your HTTP server response

Use an HTTP header to add an `Origin-Trial` header to your HTTP server response:

`Origin-Trial: EXAMPLE_TOKEN`

Replace `EXAMPLE_TOKEN` by your token.


<!-- ====================================================================== -->
## Submit feedback about an origin trial


<!-- ------------------------------ -->
#### Submit private feedback about an origin trial

To submit private feedback about an origin trial to the Microsoft Edge feature team that owns the origin trial:

1. Go to [Microsoft Edge Origin Trials](https://developer.microsoft.com/microsoft-edge/origin-trials).

1. Select an active trial.

1. Click the **Feedback** button.


<!-- ------------------------------ -->
#### Submit public feedback about an origin trial

The GitHub Issues UI allows public discourse about ergonomics and stability of a feature.

To provide public feedback for an origin trial:

1. Go to [Microsoft Edge Origin Trials](https://developer.microsoft.com/microsoft-edge/origin-trials).

1. Select an active trial.

1. Click the **Issues** button next to the registration button for the origin trial.


<!-- ====================================================================== -->
## Renew an origin trial token

Origin trial tokens expire every 6 weeks by default.  After the origin trial token expires, you must renew the token.  You can renew the token before it expires.

To renew an origin trial token that has expired or is about to expire:

1. Go to **My Registered Trials** and select an origin trial.

1. Click **Renew**.  A fresh token is sent to you.

1. Copy the new token and use it on your site; see [How to use an origin trial token](#how-to-use-the-origin-trial-token), above.


<!-- ====================================================================== -->
## Allowed origins

Edge origin trials only support SSL-enabled domains. For localhost testing of a feature, please use the appropriate Edge Feature Flag located in `edge://flags`. In the future, we may publish public tokens that are valid for localhost testing.


<!-- ====================================================================== -->
## Subdomains, URL paths, and query parameters

To request an origin trial token, fill in the **New Origin Trial Registration** form:

![New Origin Trial Registration form](./index-images/reg-form.png)


<!-- ------------------------------ -->
#### Subdomains

When you fill in the **New Origin Trial Registration** form, you can configure the origin trial token to support any of the following:

* A single domain, without supporting its subdomains.  In the **Domain** text box, enter a root domain URL, such as `https://example.com`, and make sure the **Enable token for subdomains?** toggle is turned off.

* A single subdomain.  In the **Domain** text box, enter a subdomain URL, such as `https://beta.example.com`, and make sure the **Enable token for subdomains?** toggle is turned off.

* A domain and its subdomains.  In the **Domain** text box, enter a root domain URL, such as `https://example.com`, and turn on the **Enable token for subdomains?** toggle.


<!-- ------------------------------ -->
#### Paths in URLs, and query parameters

In URLs, paths and query parameters aren't supported by the origin trial system.  When registering for an origin trial, if a URI is submitted that has a trailing path or a query parameter, such as `https://example.com/path/new-feature`, the root domain (`https://example.com`) will be registered, without the trailing path or query parameter.


<!-- ====================================================================== -->
## Duration of an origin trial


<!-- ------------------------------ -->
#### A scheduled expiration date

After you register for a trial, your token remains valid until the trial expiration date shown on the origin trial's informational card.  After the origin trial's expiration date, the token will no longer function, and the feature that's associated with the origin trial will be considered ready to ship, or the feature will be withheld for further development.


<!-- ------------------------------ -->
#### Early end

A Microsoft Edge feature team may decide to end an experiment early, before the trial expiration date; for example:
* If a security incident is caused by the feature.
* If the feature team has collected enough feedback and has concluded that the currently proposed API doesn't meet the needs of web developers, and a major redesign needs to happen.

If an experiment ends early, the feature team that owns the origin trial sends emails to all developers who are enrolled in the experiment.


<!-- ====================================================================== -->
## Opting out of an origin trial experiment

To opt out of an experiment (origin trial) that you're enrolled in, remove the origin trial token from the `<meta>` tag or from the server response headers, shown in [How to use an origin trial token](#how-to-use-the-origin-trial-token), above.


<!-- ====================================================================== -->
## Best practices: Perform feature detection and provide graceful fallback

For best practices for feature detection, see [Implementing feature detection](https://developer.mozilla.org/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection) at MDN.

In your website, provide graceful fallback mechanisms in case the origin-trial token expires, or in case the Microsoft Edge feature team ends the origin trial.  Treat origin trials as experimental.


<!-- ====================================================================== -->
## See also
<!-- all links in the article -->

* [Experimental features and origin trials](../progressive-web-apps-chromium/how-to/origin-trials.md) in the Progressive Web Apps (PWA) docs.
* [Microsoft Edge Origin Trials](https://developer.microsoft.com/microsoft-edge/origin-trials) - Microsoft.com.
* [Implementing feature detection](https://developer.mozilla.org/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection) at MDN.
* [Get started with origin trials](https://developer.chrome.com/docs/web-platform/origin-trials) - Chrome docs.

Ad Selection API:
[Sign up for the Ad Selection API](../web-platform/ad-selection-api.md)
   [Microsoft Edge Origin Trials](https://microsoftedge.github.io/MSEdgeExplainers/origin-trials/) - portal at Github.io, for the Ad Selection API origin trial only.
