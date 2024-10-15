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

Use origin trials to try out experimental APIs on your own live site for a limited period of time.  When using origin trials, users of Microsoft Edge that visit your site might run code that uses experimental APIs.

To support the experimental APIs, a user doesn't need to go to `edge://flags` on their own device to access the experimental APIs that your site uses.  Instead, as the developer, you register the origin that you want to use the experimental feature on (for example, `https://www.contoso.com:443`), and you'll then be sent a token that you add to the code of your website.

To see a list of the available origin trials and register your origin to try out any of the origin trials, see [Microsoft Edge Origin Trials](https://developer.microsoft.com/microsoft-edge/origin-trials).  To assess the suitability of using the experimental APIs on your website, check the minimum version requirements for Microsoft Edge, and the trial end date.

You can also provide feedback to browser engineers and the web standards community about the design of the API, your use-cases, or your experience with using the APIs.


<!-- ====================================================================== -->
## Register for an origin trial

To register for an origin trial (other than Ad Selection API):

1. [Go to Microsoft Edge Origin Trials](https://developer.microsoft.com/microsoft-edge/origin-trials) and select an active trial.

2. Complete the registration form, and then click the **Submit** button to get a valid token. 


<!-- ------------------------------ -->
#### Ad Selection API origin trial

To sign up for the Ad Selection API origin trial, you must use the [Microsoft Edge Origin Trials](https://microsoftedge.github.io/MSEdgeExplainers/origin-trials/) portal that's at Github.io, rather than at Microsoft.com.  See [Sign up for the Ad Selection API](../web-platform/ad-selection-api.md).


<!-- ====================================================================== -->
## How to use an origin trial token

After you receive the origin trial token, use the token in one of the following two ways:

* Use a `<meta>` tag to add an origin-trial tag to the head of any page:

   `<meta http-equiv="origin-trial" content="your-token-goes-here">` 

* Use an HTTP Header to add an `Origin-Trial` header to your HTTP server response:

   `Origin-Trial: your-token-goes-here `

                 
When a token is found in a document, Microsoft Edge automatically turns on the Microsoft Edge Feature Flag that corresponds to the origin trial for which the token is valid.  This allows a user of the application to use the feature in their local browser, despite the feature's off-by-default state.


<!-- ====================================================================== -->
## Submit feedback about an origin trial


<!-- ------------------------------ -->
#### Submit private feedback about an origin trial

To submit private feedback about an origin trial to the browser feature team that owns the origin trial:

1. Go to [Microsoft Edge Origin Trials](https://developer.microsoft.com/microsoft-edge/origin-trials).

1. Select an active origin trial.

1. Click the **Feedback** button.


<!-- ------------------------------ -->
#### Submit public feedback about an origin trial

The GitHub Issues UI allows public discourse about ergonomics and stability of a feature.

To provide public feedback for an origin trial:

1. Go to [Microsoft Edge Origin Trials](https://developer.microsoft.com/microsoft-edge/origin-trials).

1. Select an active origin trial.

1. Click the **Issues** button next to the registration button for the origin trial.


<!-- ====================================================================== -->
## Renew an origin trial token

Origin trial tokens expire every 6 weeks by default.  After the origin trial token expires, you must renew the token.  You can renew the token before it expires.

To renew an origin trial token that has expired or is about to expire:

1. Go to **My Registered Trials** and select an origin trial.

1. Click **Renew**.  A fresh token is sent to you.

1. Copy the new token and use it on your site; see [How to use an origin trial token](#how-to-use-an-origin-trial-token), above.


<!-- ====================================================================== -->
## Developer guidelines


<!-- ------------------------------ -->
#### Allowed origins

Edge origin trials only support SSL-enabled domains. For localhost testing of a feature, please use the appropriate Edge Feature Flag located in `edge://flags`. In the future, we may publish public tokens that are valid for localhost testing. 


<!-- ------------------------------ -->
#### Subdomains, URL paths, and query parameters


<!-- ---------- -->
###### Subdomains

Origin trial tokens can be configured to support any of the following:
* A single domain, without supporting its subdomains.  For example, register `https://example.com`, and in the **Subdomain Support** section, select the **No** option button.
* A single subdomain.  For example, register `https://beta.example.com`, and in the **Subdomain Support** section, select the **No** option button.
* A domain and its subdomains.  For example, register `https://example.com`, and in the **Subdomain Support** section, select the **Yes** option button.
<!-- todo: check section heading & option button labels at microsoft.com portal; the above ui is from github.io portal -->


<!-- ---------- -->
###### Paths in URLs, and query parameters

In URLs, paths and query parameters aren't supported by the origin trial system.  When registering for an origin trial, if a URI is submitted that has a trailing path or a query parameter, such as `https://example.com/path/new-feature`, the root domain (`https://example.com`) will be registered, without the trailing path or query parameter.


<!-- ------------------------------ -->
#### Duration of an origin trial


<!-- ---------- -->
###### A scheduled expiration date

Once you have registered for a trial, your token will be valid until the expiration date that's listed on the origin trial's informational card.  After this date, the token will no longer function, and the feature that's associated with the trial will be considered ready to ship, or will be brought back<!-- todo: clarify "brought back" - removed from OT portal? --> for further development based on developer feedback. 


<!-- ---------- -->
###### Early end

A browser feature team may decide to early-end an experiment; for example:
* If a security incident is caused by the feature.
* If the feature team has collected enough feedback and has concluded that the currently proposed API doesn't meet the web developer needs, and a major redesign needs to happen.

If an experiment ends early, the feature team that owns the origin trial sends emails to all developers who are enrolled in the experiment. 


<!-- ------------------------------ -->
#### Opting out of an experiment

To opt out of an experiment that you're enrolled in, remove the origin trial token from the `<meta>` tag or from the server response headers, shown in [How to use an origin trial token](#how-to-use-an-origin-trial-token), above.


<!-- ------------------------------ -->
#### Best practices for experimental feature implementation

Treat origin trials as experimental.  Provide graceful fallback mechanisms in case the origin trial token expires, or in case the browser feature team ends the origin trial.

For best practices for feature detection, see [Implementing feature detection](https://developer.mozilla.org/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection) at MDN.


<!-- ====================================================================== -->
## See also
<!-- all links in the article -->

* [Experimental features and origin trials](../progressive-web-apps-chromium/how-to/origin-trials.md) in the Progressive Web Apps (PWA) docs.
* [Microsoft Edge Origin Trials](https://developer.microsoft.com/microsoft-edge/origin-trials) - Microsoft.com.
* [Implementing feature detection](https://developer.mozilla.org/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection) at MDN.

Ad Selection API:
[Sign up for the Ad Selection API](../web-platform/ad-selection-api.md)
   [Microsoft Edge Origin Trials](https://microsoftedge.github.io/MSEdgeExplainers/origin-trials/) - portal at Github.io, for the Ad Selection API.
