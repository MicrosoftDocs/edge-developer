---
description: Moving users to Microsoft Edge from Internet Explorer 
title: Moving users to Microsoft Edge from Internet Explorer
author: MSEdgeTeam
ms.date: 11/06/2020
ms.author: msedgedevrel
ms.prod: microsoft-edge
keywords: microsoft edge, compatibility, web platform, internet explorer
---
# Moving users to Microsoft Edge from Internet Explorer 

Many modern websites have designs that are incompatible with Internet Explorer \(IE\).  When an IE user visits an incompatible public website, the user may get a message.  The message states that the website is incompatible with the browser.  After the message is displayed, the user is expected to manually switch to a modern browser.  To minimize disruptions, starting with version 84, Microsoft Edge supports a new capability that automatically redirects users.  When an IE user navigates to a website that is incompatible with IE, Windows automatically redirects the user to Microsoft Edge.  To review the websites on the list, navigate to [Need Microsoft Edge list][MicrosoftEdgeNeededgeV1].

This article describes the following concepts.  

*   Why a website is added to the list  
*   The user experience for redirection  
*   Request an update to the list  
    
## Why a website is added to the IE compatibility list?  

The IE compatibility List only adds a website when the following actions occur.  

*   Shows an IE user a message suggesting the user should use a different browser for compatibility reasons.  
*   Owner requests to add the website to the IE compatibility list.  

## Redirection experience

On redirection to Microsoft Edge, users are shown the one-time dialog in the next screenshot. This dialog explains why they're getting redirected and prompts for consent to copy their browsing data and preferences from Internet Explorer to Microsoft Edge. The following browsing data will be imported: Favorites, Passwords, Search engines, open tabs, History, settings, cookies, and the Home Page.

![Browsing notification and prompt to import data and preferences.](media/edge-learnmore-neededge/neededge-dialog1.png)

Even if they don't give their consent by checking "Always bring over my browsing data and preferences from Internet Explorer", they can click **Continue browsing** to continue their session.

Finally, a website incompatibility banner, shown in the next screenshot, appears below the address bar for every redirection.

![Notification about modern sites and prompt to set Microsoft Edge as default browser or explore Microsoft Edge.](media/edge-learnmore-neededge/neededge-banner.png)

The website incompatibility banner:

- encourages the user to switch to Microsoft Edge
- offers to make Microsoft Edge as the default browser
- gives the user the option to explore Microsoft Edge

When a site is redirected from Internet Explorer to Microsoft Edge, the Internet Explorer tab that started loading the site is closed if it had no prior content. Otherwise, the active tab view goes to a  Microsoft [support](https://support.microsoft.com/office/the-website-you-were-trying-to-reach-doesn-t-work-with-internet-explorer-8f5fc675-cd47-414c-9535-12821ddfc554?ui=en-US&rs=en-US&ad=US) page that explains why the site was redirected to Microsoft Edge.

> [!NOTE]
> After 

## Request an update to the IE compatibility list  

The IE compatibility list is an XML file on [microsoft.com][MicrosoftOfficialHome].  The list is regularly updated in response to user and website developer requests to have websites added or removed.  Updates to the list are automatically downloaded to user machines.  

Email the following information to [ietoedge@microsoft.com][MailtoMicrosoftIetoedge] for your website to be added or removed from the IE compatibility list.    

*   Owner name  
*   Corporate title  
*   Email address  
*   Company name  
*   Street address  
*   Website address  
    
> [!NOTE]
> The IE compatibility list is designed to work with public sites only.  

<!-- links -->  

[MailtoMicrosoftIetoedge]: mailto:ietoedge@microsoft.com "Send an email to ietoedge@microsoft.com"  

[MicrosoftOfficialHome]: https://www.microsoft.com "Microsoft Official Home"  

[MicrosoftEdgeNeededgeV1]:  https://edge.microsoft.com/neededge/v1 "Need Microsoft Edge list v1 xml | Microsoft Edge"  
