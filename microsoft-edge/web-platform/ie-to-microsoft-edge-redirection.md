---
description: Moving users to Microsoft Edge from Internet Explorer
title: Moving users to Microsoft Edge from Internet Explorer
author: MSEdgeTeam
ms.date: 11/13/2020
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
keywords: microsoft edge, compatibility, web platform, internet explorer
---
# Moving users to Microsoft Edge from Internet Explorer

Many modern websites have designs that are incompatible with Internet Explorer (IE).  When an IE user visits an incompatible public website, the user may get a message.  The message states that the website is incompatible with the browser.  After the message is displayed, the user is expected to manually switch to a modern browser.  To minimize disruptions, starting with version 84, Microsoft Edge supports a new capability that automatically redirects users.  When an IE user navigates to a website that is incompatible with IE, Windows automatically redirects the user to Microsoft Edge.  To review the websites on the list, navigate to [Need Microsoft Edge list](https://edge.microsoft.com/neededge/v1).

This article describes the following concepts.

*   Why a website is added to the list
*   The user experience for redirection
*   Request an update to the list


<!-- ====================================================================== -->
## Why is a website added to the IE compatibility list?

The IE compatibility List only adds a website when the following actions occur.

*   Shows an IE user a message suggesting the user should use a different browser for compatibility reasons.
*   Owner requests to add the website to the IE compatibility list.


<!-- ====================================================================== -->
## Redirection experience

On redirection to Microsoft Edge, the user is shown the one-time dialog in the next screenshot.  The dialog provides the user with the following information.

*   It explains why the website is being redirected.
*   It prompts the user for consent to copy browsing data and preferences from IE to Microsoft Edge.

:::row:::
   :::column span="":::
      The following browsing data is imported.

      *   Favorites
      *   Passwords
      *   Search engines
      *   Open tabs
      *   History
      *   Settings
      *   Cookies
      *   The Home Page
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../media/neededge-dialog1.msft.png" alt-text="Browsing notification and prompt to import data and preferences" lightbox="../media/neededge-dialog1.msft.png":::
         Browsing notification and prompt to import data and preferences
      :::image-end:::
   :::column-end:::
:::row-end:::

If the user does not consent by choosing the **Always bring over my browsing data and preferences from Internet Explorer** checkbox, the user may choose **Continue browsing** to continue the browsing session.

Finally, a website incompatibility banner is displayed under the address bar for each redirection.  An example of a website incompatibility banner is displayed in following figure.

:::image type="complex" source="../media/neededge-banner.msft.png" alt-text="Notification about modern sites and prompt to set Microsoft Edge as default browser or explore Microsoft Edge" lightbox="../media/neededge-banner.msft.png":::
   Notification about modern sites and prompt to set Microsoft Edge as default browser or explore Microsoft Edge
:::image-end:::

The website incompatibility banner provides the following details to the user.

*   Recommends that the user to switch to Microsoft Edge.
*   Offers to set Microsoft Edge as the default browser.
*   Gives the user the option to explore Microsoft Edge.

When a website is redirected from Internet Explorer to Microsoft Edge, one of the following actions occurs.

*   If the active IE tab had no prior content, it is closed.
*   If the active IE tab had prior content, it navigates to the [Microsoft support page that explains why the website was redirected to Microsoft Edge](https://support.microsoft.com/office/the-website-you-were-trying-to-reach-doesn-t-work-with-internet-explorer-8f5fc675-cd47-414c-9535-12821ddfc554).

> [!NOTE]
> After a redirection, users may continue to use IE for websites that are not on the IE compatibility list.


<!-- ====================================================================== -->
## Request an update to the IE compatibility list

The IE compatibility list is an XML file on [microsoft.com](https://www.microsoft.com).  The list is regularly updated in response to user and website developer requests to have websites added or removed.  Updates to the list are automatically downloaded to user machines.

Email the following information to [ietoedge@microsoft.com](mailto:ietoedge@microsoft.com) for your website to be added or removed from the IE compatibility list.

*   Owner name
*   Corporate title
*   Email address
*   Company name
*   Street address
*   Website address

The IE compatibility list is updated within a week.

> [!NOTE]
> The IE compatibility list is designed to work with public sites only.
