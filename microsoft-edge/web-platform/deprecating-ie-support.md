---
description: Moving users to Microsoft Edge from Internet Explorer 
title: Moving users to Microsoft Edge from Internet Explorer
author: MSEdgeTeam
ms.date: 11/04/2020
ms.author: msedgedevrel
ms.prod: microsoft-edge
keywords: microsoft edge, compatibility, web platform, internet explorer
---
# Moving users to Microsoft Edge from Internet Explorer 

Many modern websites have designs that are incompatible with Internet Explorer \(IE\).  When an IE user visits an incompatible public website, the user may get a message.  The message states that the website is incompatible with the browser.  After the message is displayed, the user is expected to manually switch to a modern browser.  To minimize disruptions, starting with version 84, Microsoft Edge supports a new capability that automatically redirects users.  When an IE user navigates to a website that is incompatible with IE, Windows automatically redirects the user to Microsoft Edge.  To review the websites on the list, navigate to [Need Microsoft Edge list][MicrosoftEdgeNeededgeV1].

This article describes the following concepts.  

*   The user experience for redirection  
*   How to add your website to the IE compatibility list  
*   How to remove your website from the IE compatibility list  
    
## Why is a website added to the IE compatibility list?  

The IE compatibility List only adds a website when the following actions occur.  

*   Shows an IE user a message suggesting the user should use a different browser for compatibility reasons.  
*   Owner requests to add the website to the IE compatibility list.  
    
## Update the IE compatibility list  

The IE compatibility list is an XML file on [microsoft.com][MicrosoftOfficialHome].  The list is regularly updated in response to user's and website developers requests to have websites added or removed.  Updates to the list are automatically downloaded on user's machine.  

Email the following information to [ietioedge@microsoft.com][MailtoMicrosoftIetioedge] for your website to be added or removed from the IE compatibility list.    

*   Owner name  
*   Corporate title  
*   Email address  
*   Company name  
*   Street address  
*   Website address  
<!--  *   Telephone number  -->  
<!--  *   Target platform \(desktop, phone, Xbox\)  -->  
    
<!-- links -->  

[MailtoMicrosoftIetioedge]: mailto:ietioedge@microsoft.com "Send an email to ietioedge@microsoft.com"  

[MicrosoftOfficialHome]: https://www.microsoft.com "Microsoft Official Home"  

[MicrosoftEdgeNeededgeV1]:  https://edge.microsoft.com/neededge/v1 "Need Microsoft Edge list v1 xml | Microsoft Edge"  
