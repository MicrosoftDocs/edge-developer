---
title: Move users to Microsoft Edge from Internet Explorer
description: Move users to Microsoft Edge from Internet Explorer.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 11/13/2020
---
# Move users to Microsoft Edge from Internet Explorer

Many modern websites have designs that are incompatible with Internet Explorer.  When an Internet Explorer user visits an incompatible public website, the user may get a message.  The message states that the website is incompatible with the browser.  After the message is displayed, the user is expected to manually switch to a modern browser.

To minimize disruptions, starting with version 84, Microsoft Edge supports a new capability that automatically redirects users.  When an Internet Explorer user goes to a website that's incompatible with Internet Explorer, Windows automatically redirects the user to Microsoft Edge.  For the list of websites that are redirected, see [Need Microsoft Edge list](https://edge.microsoft.com/neededge/v1).

This article describes the following concepts:

*  Why a website is added to the redirection list.
*  The User Experience for redirection.
*  Requesting an update to the list.


<!-- ====================================================================== -->
## Why is a website added to the Internet Explorer compatibility list?

The Internet Explorer compatibility List only adds a website when the following actions occur.

*   Shows an Internet Explorer user a message suggesting the user should use a different browser for compatibility reasons.
*   Owner requests to add the website to the Internet Explorer compatibility list.


<!-- ====================================================================== -->
## Redirection experience

On redirection to Microsoft Edge, the user is shown the one-time dialog in the next screenshot.  The dialog provides the user with the following information:
*  It explains why the website is being redirected.
*  It prompts the user for consent to copy browsing data and preferences from Internet Explorer to Microsoft Edge.

The following browsing data is imported:
*  Favorites
*  Passwords
*  Search engines
*  Open tabs
*  History
*  Settings
*  Cookies
*  The Home Page

Browsing notification and prompt to import data and preferences:

:::image type="content" source="../media/neededge-dialog1.msft.png" alt-text="Browsing notification and prompt to import data and preferences." lightbox="../media/neededge-dialog1.msft.png":::

If the user doesn't consent by selecting the **Always bring over my browsing data and preferences from Internet Explorer** checkbox, the user may choose **Continue browsing** to continue the browsing session.

Finally, a website incompatibility banner is displayed under the address bar for each redirection.  An example of a website incompatibility banner is displayed in following figure.

:::image type="complex" source="../media/neededge-banner.msft.png" alt-text="Notification about modern sites and prompt to set Microsoft Edge as default browser or explore Microsoft Edge." lightbox="../media/neededge-banner.msft.png":::
   Notification about modern sites and prompt to set Microsoft Edge as default browser or explore Microsoft Edge
:::image-end:::

The website incompatibility banner provides the following details to the user.

*   Recommends that the user to switch to Microsoft Edge.
*   Offers to set Microsoft Edge as the default browser.
*   Gives the user the option to explore Microsoft Edge.

When a website is redirected from Internet Explorer to Microsoft Edge, one of the following actions occurs.

*   If the active Internet Explorer tab had no prior content, it is closed.
*   If the active Internet Explorer tab had prior content, it navigates to the [Microsoft support page that explains why the website was redirected to Microsoft Edge](https://support.microsoft.com/office/the-website-you-were-trying-to-reach-doesn-t-work-with-internet-explorer-8f5fc675-cd47-414c-9535-12821ddfc554).

> [!NOTE]
> After a redirection, users may continue to use Internet Explorer for websites that aren't on the Internet Explorer compatibility list.


<!-- ====================================================================== -->
## Request an update to the Internet Explorer compatibility list

The Internet Explorer compatibility list is an XML file on [microsoft.com](https://www.microsoft.com).  The list is regularly updated in response to user and website developer requests to have websites added or removed.  Updates to the list are automatically downloaded to user machines.

Email the following information to [ietoedge@microsoft.com](mailto:ietoedge@microsoft.com) for your website to be added or removed from the Internet Explorer compatibility list.

*   Owner name
*   Corporate title
*   Email address
*   Company name
*   Street address
*   Website address

The Internet Explorer compatibility list is updated within a week.

> [!NOTE]
> The Internet Explorer compatibility list is designed to work with public sites only.
