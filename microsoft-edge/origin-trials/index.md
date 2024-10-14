---
title: Use Origin Trials in Microsoft Edge
description: Safely experiment for a fixed period of time and provide feedback on new platform features.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.date: 10/25/2023
---
# Use Origin Trials in Microsoft Edge

You can use Origin Trials to try out experimental APIs on your own live site for a limited period of time.  When using Origin Trials, users of Microsoft Edge that visit your site might run code that uses experimental APIs.

To support the experimental APIs, users don't need to go to `edge://flags` on their own device to access the experimental APIs that your site uses.  Instead, you register the origin that you want to use the experimental feature on (for example, `https://www.contoso.com:443`), and you'll then be sent a token that you add to the code of your website.

To see a list of the available origin trials and register your origin to give them a try, see [Microsoft Edge Origin Trials](https://developer.microsoft.com/microsoft-edge/origin-trials).  To assess the suitability of using the experimental APIs on your website, check the minimum version requirements for Microsoft Edge, and the trial end date.

You can also provide feedback to browser engineers and the web standards community about the design of the API, your use cases, or your experience using the APIs.

> [!IMPORTANT] 
> If you're interested in the Ad Selection API origin trial, please register [here](https://microsoftedge.github.io/MSEdgeExplainers/origin-trials/). [Learn more about sign-up.](../web-platform/ad-selection-api)

## Getting Started

To register for an origin trial, 
1. [Go to Microsoft Edge Origin Trials](https://developer.microsoft.com/microsoft-edge/origin-trials) and select an active trial.

2. Complete the registration form and click the **Submit** button to get a valid token. 

To use an origin trial token, you can use one of these two options: 
1. Using a `<meta>` Tag: Add an origin-trial tag to the head of any page. 

`<meta http-equiv="origin-trial" content="your-token-goes-here">` 

2. Using an HTTP Header: You can add an `Origin-Trial` header to your HTTP server response.

`Origin-Trial: your-token-goes-here `
                 
When a token is found in a document, Microsoft Edge will automatically turn on the Edge Feature Flag corresponding to the trial for which the token is valid. This will allow visitors of the application to use the feature despite it's off-by-default state in their local browser.

To submit feedback,  
1. [Go to Microsoft Edge Origin Trials](https://developer.microsoft.com/microsoft-edge/origin-trials) and select an active trial.

2. Click the **Feedback** button to submit feedback.

Tokens expire every 6 weeks by default. Once they expire, you’ll have to come back to the site to renew them. To renew an expired token, 
1. Go to **My Registered Trials** and select the origin trial you want to renew.

2. Click **Renew** to renew your token.

3. Copy and use your new token on your site.

## Developer Guidelines

**Allowed Origins**

Edge origin trials only support SSL-enabled domains. For localhost testing of a feature, please use the appropriate Edge Feature Flag located in edge://flags. In the future, we may publish public tokens that are valid for localhost testing. 

**Subdomains, URL Paths and Query Params**

Origin trial tokens can be configured to support a single domain or subdomain, but they can also be configured to support wild card subdomains for a specific domain. For example, a developer can register `https://beta.example.com` without subdomain support or a developer can register `https://example.com` with the subdomain support checkbox selected at registration time to enable all subdomains of that origin. 

Paths and query parameters are not supported by the origin trial system. URIs that are submitted with trailing paths or query parameters, such as `https://example.com/path/new-feature` will be registered as the root domain. 

**Origin Trial Duration**

Once you have registered for a trial, your token will be valid until the expiration date listed on the trial informational card. After this date, the token will no longer function and the feature associated with the trial will be considered ready to ship or be brought back for further development based on developer feedback. 

> [!NOTE] 
> A browser feature team may decide to early-end an experiment in case of any major security incidents caused by the feature, or they have collected enough feedback and concluded the currently proposed API does not meet the web developer needs, and a major redesign need to happen. We will be sending out emails to all developers enrolled in an experiment in the case of early-end. 

**Providing Feedback on an Origin Trial**

If you would like to provide *public* feedback for a particular trial, please click the issues button located next to the registration button for that trial. We track all feedback as GitHub issues in order to allow for public discourse on ergonomics and stability of a feature. 

**Opting out of an experiment**

To opt out of an experiment, you can simply remove the token we have provided from the `<meta>` tag or from the server response headers. 

**Experimental feature implementation best practices**

MDN has a great resource on best practices for feature detection, you can [view it here](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection). We encourage all developers to treat origin trials as experimental and provide graceful fallback mechanisms should the token expire or the browser team choose to discontinue an active trial. 

<!-- ====================================================================== -->
## See also

* [Experimental features and origin trials](../progressive-web-apps-chromium/how-to/origin-trials.md) in the Progressive Web Apps (PWA) docs
