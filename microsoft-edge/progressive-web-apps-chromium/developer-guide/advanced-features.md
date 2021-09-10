---
title: Advanced Progressive Web Apps features
description: Discover multiple APIs that you can make use of in your PWAs.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/10/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: pwa
keywords: progressive web apps, PWA, API
---
# Advanced Progressive Web Apps features  

> [!NOTE]
> Some of the features listed below are still experimental. Navigate to a feature page to know if it is.
> Experimental features can be used in 2 ways:   
>
> *   By enabling the corresponding flag in Microsoft Edge.
> *   By enrolling your site in an origin trial. Navigate to [Origin Trials][OriginTrials] to learn more about how they can be used to test features in production with your users.  
>
> Experimental features are constantly updated and may cause performance issues.  To turn off an experimental feature, navigate to [Toggle experimental features](#toggle-experimental-features), navigate to the experiment, and then choose `Disabled`.  

| Feature | Description |  
|:--- |:---  
| [Handle files][FileHandling] | Register your PWA to natively handle files | 
| [Handle URLs and protocols][UrlsProtocolsHandling] | Register your PWA to handle URLs and protocols | 
| [Display content in the title bar][WindowControlsOverlay] | Use the full surface area of the window your PWA is in to display content | 
| [Sharing with other apps][Share] | Share content with other apps and accept shared content | 
| TODO | Add more APIs and link them to docs pages |   

## Toggle experimental features  

To turn on \(or off\) experimental features in Microsoft Edge, complete the following steps.  
  
1.  Open Microsoft Edge.  
1.  Navigate to `edge://flags`.  
1.  Navigate to the relevant experiment.  
1.  Select the dropdown menu next to the experiment description and select **Enabled** to enable the feature or **Disabled** to disable it.  
    
    :::image type="complex" source="../media/turn-on-experimental-flag.png" alt-text="Choose Enabled to turn on an experiment" lightbox="../media/turn-on-experimental-flag.png":::
       Choose **Enabled** to turn on an experiment  
    :::image-end:::  


<!-- links -->  

[OriginTrials]: ./origin-trials.md "Origin trials | Microsoft Docs"
[FileHandling]: ./handle-files.md "Handle files in Progressive Web Apps | Microsoft Docs"  
[UrlsProtocolsHandling]: ./handle-urls-protocols.md "Handle URLs and protocols in Progressive Web Apps | Microsoft Docs"  
[WindowControlsOverlay]: ./window-controls-overlay.md "Display content in the title bar | Microsoft Docs"  
[Share]: ./share.md "Sharing with other apps | Microsoft Docs"  
