---
title: Development tips for Microsoft Edge
description: Testing for coming changes that could impact compatibility of your site with Microsoft Edge.  Moving users from Internet Explorer.  Setting up tracking prevention.  Detecting Microsoft Edge from your website. Detecting Windows 11 via User-Agent Client Hints.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.date: 02/04/2025
---
# Development tips for Microsoft Edge

<!-- first sentence explains and disambiguates/clarifies the h1 title & the TOC bucket name: -->
This TOC bucket is named Web Platform and its scope is Edge-specific web-platform considerations.

See also:
* external docs
* external docs
* external docs


There are many tips and tricks to be aware of when building websites or web apps that work in Microsoft Edge, including:

<!-- todo: make this list match the h2 headings / toc entries? -->
*  Testing for coming changes that could impact compatibility of your website with Microsoft Edge.
*  Moving users to Microsoft Edge from Internet Explorer.
*  Configuring tracking prevention in Microsoft Edge.
*  Detecting Microsoft Edge from your website.
*  Developing experiences for the sidebar in Microsoft Edge.
*  Detecting Windows 11 by using User-Agent Client Hints.
*  Customizing the **password reveal** button.
*  Viewing formatted JSON responses and files in browser tabs.

<!-- compare summary overview table at top of https://learn.microsoft.com/en-us/microsoft-edge/test-and-automation/test-and-automation which summarizes each tool for test/automation -->

h2 headings in the present article = artices listed in TOC:
* Site compatibility-impacting changes coming to Microsoft Edge
* Move users to Microsoft Edge from Internet Explorer
* Tracking prevention in Microsoft Edge
* Detect Microsoft Edge from your website
* Develop experiences for the sidebar in Microsoft Edge
* Detect Windows 11 using User-Agent Client Hints
* Customize the password reveal button
* Display regional versions of your site, based on OS settings
* View formatted JSON responses or files
* Sign up for the Ad Selection API


These aspects of developing for, and with, Microsoft Edge are described below.


<!-- ====================================================================== -->
## Site compatibility-impacting changes coming to Microsoft Edge

This article lists the schedule of changes for Microsoft Edge and the Chromium project.  It also highlights any differences and high-impact changes which the Microsoft Edge team is tracking especially closely.

The web platform is a collection of technologies used for building webpages, including HTML, CSS, JavaScript, and many other open standards.  The web platform constantly evolves to improve the user experience, security, and privacy.  In some cases, changes may affect the functionality of existing webpages.

See [Site compatibility-impacting changes coming to Microsoft Edge](./site-impacting-changes.md).


<!-- ====================================================================== -->
## Move users to Microsoft Edge from Internet Explorer

When an Internet Explorer user visits an incompatible public website, the user may be informed by the website that the website is incompatible with Internet Explorer, and that the user must switch to a more up-to-date browser in order to use the website properly.

To minimize disruptions, Microsoft Edge supports a new capability that automatically redirects users.  When an Internet Explorer user goes to a website that's incompatible with Internet Explorer, Windows can automatically redirect the user to Microsoft Edge.  Only websites that are part of the _Need Microsoft Edge_ list are redirected.

See [Move users to Microsoft Edge from Internet Explorer](./ie-to-microsoft-edge-redirection.md).


<!-- ====================================================================== -->
## Tracking prevention in Microsoft Edge

The tracking prevention feature in Microsoft Edge protects users from online tracking by restricting the ability of trackers to access browser-based storage as well as the network.

The tracking prevention feature is built to uphold the Microsoft Edge _browser privacy promise_, while also ensuring that there is no impact by default to website compatibility or the economic viability of the web.

See [Tracking prevention in Microsoft Edge](./tracking-prevention.md).


<!-- ====================================================================== -->
## Detect Microsoft Edge from your website

Microsoft Edge enables your website to retrieve user agent information.  You use the user agent information to present webpages correctly for each user's browser.  Browsers provide mechanisms for websites to detect browser information such as brand, version number, and host operating system.

*  **User-Agent Client Hints** are an improved mechanism for retrieving browser information.

*  **User-Agent strings** are legacy; they are outdated and have a history of causing website compatibility problems.

You may want to provide different experiences to users based on their browser.  If you include steps about how to configure Microsoft Edge or another browser for use with your site, you may want to detect the browser and then show the appropriate content.

See [Detect Microsoft Edge from your website](./user-agent-guidance.md).


<!-- ====================================================================== -->
## Develop experiences for the sidebar in Microsoft Edge

The sidebar in Microsoft Edge is a persistent pane located on the side of the browser, which coexists with the primary content of the browser. The sidebar allows users to easily access popular websites and utilities alongside their browser tabs. The content in the sidebar augments the user's primary task by enabling side-by-side browsing and minimizing the need to switch contexts between browser tabs. With the sidebar in Microsoft Edge, users can access the productivity tools they need, while staying in their workflow.

As a developer, you can leverage the sidebar for your own experiences in two ways:

* By adapting your existing Progressive Web App (PWA) to run in the sidebar.
* By making use of the Sidebar API in your Microsoft Edge extension.

See [Develop experiences for the sidebar in Microsoft Edge](./sidebar.md).


<!-- ====================================================================== -->
## Detect Windows 11 using User-Agent Client Hints

Websites can differentiate between users on Windows 11 and Windows 10 by using User-Agent Client Hints (UA-CH).  The User-Agent Client Hints format is used by browsers to provide user agent information to websites.

Websites can use the user agent information that's sent from the browser to detect information such as:
*  The browser brand.
*  The browser version number.
*  The device platform on which the browser is running.

There are two approaches for sites to access user agent information:

*  User-Agent strings (legacy).
*  User-Agent Client Hints (recommended).

See [Detect Windows 11 using User-Agent Client Hints](./how-to-detect-win11.md).


<!-- ====================================================================== -->
## Customize the password reveal button

The `password` input control in Microsoft Edge includes a **password reveal** button.  To make sure that the password is entered correctly, a user can click the **password reveal** button or press **Alt+F8**, to show the characters in the password field.  You can remove the **password reveal** control, or customize the control styling.

See [Customize the password reveal button](./password-reveal.md).


<!-- ====================================================================== -->
## Display regional versions of your site, based on OS settings

Microsoft Edge provides operating system (OS) regional preference information to help website authors create regional experiences on their website, when viewing your site using Microsoft Edge. This feature allows website authors to deliver value to users who specifically change their regional preferences in the OS to reflect their personal preferences.

See [Display regional versions of your site, based on OS settings](./os-regional-settings.md).


<!-- ====================================================================== -->
## View formatted JSON responses or files

Microsoft Edge includes the **JSON viewer**, a tool that automatically reformats and highlights the JSON data shown in a browser to make it easier to read.

Formatting and highlighting JSON data is useful because sometimes a web server responds to HTTP requests by returning data encoded as JSON.  JSON data can be difficult to read when it's formatted as a single long, concatenated line of text. The same can occur when opening a JSON file from disk.  The **JSON viewer** reformats JSON server responses and local files, and indicates any lines that have syntax errors.

See [View formatted JSON responses or files](../devtools-guide-chromium/json-viewer/json-viewer.md).


<!-- ====================================================================== -->
## Sign up for the Ad Selection API

The Ad Selection API provides user-relevant ads on your site without using third-party cookies.  The Ad Selection API can be used by:
* **Sellers** running a supply-side platform (SSP), who can use the API to provide higher-quality ads for their publishers.
* **Buyers** running a demand-side platform (DSP), who can use the API to improve the effectiveness of advertising campaigns.

See [Sign up for the Ad Selection API](./ad-selection-api.md).
