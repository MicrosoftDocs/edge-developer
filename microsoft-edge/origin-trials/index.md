---
title: Use Origin Trials in Microsoft Edge
description: Safely experiment for a fixed period of time and provide feedback on new platform features.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 10/20/2023
---
# Use Origin Trials in Microsoft Edge

You can use Origin Trials to try out experimental APIs on live sites for a limited period of time.  When using Origin Trials, users of Microsoft Edge that visit your site may run code that uses experimental APIs.  To access the experimental APIs on each user machine, you don't need to go to `edge://flags` and turn on feature flags.

Instead, you register the origin (for example, `https://www.contoso.com:443`) that you want to use the experimental feature on and you'll be issued a token that you add to the code of your website.

To see a list of the available origin trials and register your origin to give them a try, see the [Microsoft Edge Origin Trials Developer Console](https://developer.microsoft.com/microsoft-edge/origin-trials/).  You can also provide feedback to browser engineers and the web standards community about the design of the API, your use cases, or your experience using the APIs.

For more information about the experimental APIs available in Microsoft Edge, see [Microsoft Edge Origin Trials Developer Console](https://developer.microsoft.com/microsoft-edge/origin-trials).  To assess the suitability of using the experimental APIs on your website, check the minimum version requirements for Microsoft Edge, and the trial end date.


#### End date for an origin trial experiment

An origin trial experiment may end earlier than planned, if any of the following situations occur:
*  A major security incident.
*  If sufficient feedback is collected that indicates a major redesign is needed to meet the needs of web developers.

In either case, a notification email is sent to all developers who are currently enrolled in the experiment.


<!-- ====================================================================== -->
## Register for a trial of an experimental API

To register for a trial of an experimental API:

1. Go to [Microsoft Edge Origin Trials](https://microsoftedge.github.io/MSEdgeExplainers/origin-trials/).

1. Click the **Register** button on any of the available experiments.

1. Sign in to the Developer Console using your GitHub username and password.

1. Click **Authorize MicrosoftEdge**.

1. Complete the form.

   To enroll a single or all subdomains, for the setting `Do you need to match all subdomains for the provided origin?`, select `Yes`.  For example, `https://dev.contoso.com` is a single domain, and `https://*.contoso.com` uses a wildcard to represent all subdomains.

   The following origin formats aren't allowed:
   * Specifying a subfolder on the origin.  For example, `https://contoso.com/path/subfolder`
   * Using an origin with query string parameters.  For example, `https://contoso.com/path/feature?query_parameter=12345`
   
1. Click the **ACCEPT and REGISTER** button.<!--todo: confirm it's a button, not link -->

   A token is immediately generated and is displayed in the [Microsoft Edge Origin Trials Developer Console](https://developer.microsoft.com/microsoft-edge/origin-trials).

1. Keep a record of the token.

Continue to the next section below.


<!-- ====================================================================== -->
## Apply your token

To begin using the trial on your website, use either of the following approaches to apply the token to your webpage:

* Approach 1: In every webpage that uses the experimental API, add the following `<meta>` tag, where the `content` attribute value is your token:

   ```html
   <meta http-equiv="origin-trial" content="replace-with-your-token">
   ```

* Approach 2: Add `Origin-Trial` to the HTTP response header of your server, specifying your token:

   ```json
   Origin-Trial: replace-with-your-token
   ```

Your token is valid for 6 weeks.  Before your trial ends, reminder emails are sent to you that ask for your feedback and ask you to consider renewing your trial before your token expires.


<!-- ====================================================================== -->
## Opt out of an experiment

To opt out of an experiment, use one of the following approaches to remove your token:

* Approach 1: Remove the following `meta` tag from every webpage that used the experimental API:

   ```html
   <meta http-equiv="origin-trial" content="your-token">
   ```

* Approach 2: Remove `Origin-Trial` from the HTTP response header of your server:

   ```json
   Origin-Trial: your-token
   ```


<!-- ====================================================================== -->
## Detect experimental features and provide a fallback

When using an experimental API, make sure to provide a working experience to all visitors of your website.

* A visitor might use a browser that doesn't support the experimental API that's used in your code.

* If your token expires before you renew it, the experimental API is no longer available for your webpage, which might result in errors.

To avoid this situation, make sure you detect features available in your browser.  See [Implementing feature detection](https://developer.mozilla.org/docs/learn/tools_and_testing/cross_browser_testing/feature_detection).


<!-- ====================================================================== -->
## Roadmap for Allowed Origins

<!-- todo: update -->
The Microsoft Edge Origin Trials portal only supports SSL Enabled Origins.  This means that to register for an experiment, the website must have HTTPS properly implemented.  In the future, the following secure origins are planned:

* You'll be able to register `http://localhost` as the origin for experiments.  To use `http://localhost` today, go to `edge://flags` and set the experiment to **Enabled**.

* To enroll in experiments, you'll be able to use extensions that have an origin prefixed with: `extensions://`


<!-- ====================================================================== -->
## See also

* [Experimental features and origin trials](../progressive-web-apps-chromium/how-to/origin-trials.md) in the Progressive Web Apps (PWA) docs
