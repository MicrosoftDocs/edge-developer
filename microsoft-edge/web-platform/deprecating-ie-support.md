---
description: Moving users to Microsoft Edge from Internet Explorer 
title: Moving users to Microsoft Edge from Internet Explorer
author: MSEdgeTeam
ms.date: 11/03/2020
ms.author: msedgedevrel
ms.prod: microsoft-edge
keywords: microsoft edge, compatibility, web platform, internet explorer
---
# Moving users to Microsoft Edge from Internet Explorer 

Many modern websites have designs that are incompatible with Internet Explorer \(IE\).  Whenever a user of IE visits an incompatible public site, the user may get a message  stating the site is incompatible with the browser.  After the message is displayed, the user must manually switch to a different browser.  To minimize disruptions, starting with version 84, Microsoft Edge supports a new capability.  The new capability automatically redirect the user.  When a user navigates using IE to a site that is incompatible with IE, Windows automatically redirects the user to Microsoft Edge.  To review the sites on the list, navigate to [Need Edge list][MicrosoftEdgeNeededgeV1].

This article describes the following concepts.  

*   The user experience for redirection  
*   How a site gets added to the IE compatibility list  
*   How to get your site added or removed from the list  
    
## Why is a site added to the CV List?  

The Compatibility View List only adds a site when the following actions occur.  

*   Shows an IE user a message suggesting the user should use a different browser for compatibility reasons.  
*   Owner requests to add the site to the IE compatibility list.  
    
## Update the IE Compatibility List  

The IE compatibility list is an XML file on [microsoft.com][MicrosoftOfficialHome].  The list is regularly updated in response to user's and site developers requests to have sites added or removed.  Updates to the list are automatically downloaded onto user's machine.  

Email the following information to [ietioedge@microsoft.com][MailtoMicrosoftIetioedge] for your site to be added or removed from the IE compatibility list:  

*   Owner name  
*   Corporate title  
*   Email address  
*   Telephone number  
*   Company name  
*   Street address  
*   Website address  
*   Target platform \(desktop, phone, Xbox\)  
    
<!-- links -->  

[MailtoMicrosoftIetioedge]: mailto:ietioedge@microsoft.com "Send an email to ietioedge@microsoft.com"  

[MicrosoftOfficialHome]: https://www.microsoft.com "Microsoft Official Home"  

[MicrosoftEdgeNeededgeV1]:  https://edge.microsoft.com/neededge/v1 "Need Edge list v1 xml | Microsoft Edge"  