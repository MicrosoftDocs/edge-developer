---
description: Emulate Authenticators and Debug WebAuthn in Microsoft Edge DevTools.
title: Emulate authenticators and debug WebAuthn in Microsoft Edge DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 10/21/2020 
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---

# Emulate authenticators and debug WebAuthn in Microsoft Edge DevTools  

Use the **WebAuthn** tab in Microsoft Edge DevTools to create and interact with software-based virtual authenticators.  

## Open the WebAuthn tab  

1.  Navigate to a webpage that uses WebAuthn, such as the following demo website.  
    
    [webauthndemo.appspot.com][AppspotWebauthndemo]  
    
1.  Sign into the website.  
1.  [Open DevTools][DevtoolsGuideChromiumOpen].  
1.  To open the **WebAuthn** tab, choose the **Customize and control DevTools** \(`...`\) icon > **More tools** > **WebAuthn**.  
    
    :::image type="complex" source="../media/webauthn-webauthn-tab.msft.png" alt-text="WebAuthn tab" lightbox="../media/webauthn-webauthn-tab.msft.png":::
       **WebAuthn** tab  
    :::image-end:::  
    
## Enable the virtual authenticator environment  

1. On the **WebAuthn** tab, choose the checkbox next to **Enable virtual authenticator environment**.  
1. After it is enabled, a new section named **New authenticator** is displayed.  

:::image type="complex" source="../media/webauthn-enable-virtual-auth.msft.png" alt-text="Enable virtual authenticator environment" lightbox="../media/webauthn-enable-virtual-auth.msft.png":::
   **Enable virtual authenticator environment**  
:::image-end:::  

## Add a virtual authenticator  

1.  On the **New authenticator** section, configure the options.  
1.  Choose the **Add** button.  
1.  A new section of your newly created authenticator is displayed.  

:::image type="complex" source="../media/webauthn-authenticator.msft.png" alt-text="Authenticator" lightbox="../media/webauthn-authenticator.msft.png":::
   Authenticator  
:::image-end:::  

The **Authenticator** section includes a **Credentials** table.  The table is empty until a credential is registered to the authenticator.  

:::image type="complex" source="../media/webauthn-no-cred.msft.png" alt-text="No credentials" lightbox="../media/webauthn-no-cred.msft.png":::
   No credentials  
:::image-end:::  

### Register a new credential  

To register a new credential, complete the following steps.

1.  On the demo website, choose **Register new credential**.  
1.  A new credential is now added to the **Credentials** table in the WebAuthn tab.  
    
    :::image type="complex" source="../media/webauthn-view-cred.msft.png" alt-text="View credentials" lightbox="../media/webauthn-view-cred.msft.png":::
       View credentials  
    :::image-end:::  
    
On the demo website, choose the **Authenticate** button.  Verify that the **Sign Count** of the credential in the **Credentials** table increased by 1.  

### Export and remove credentials  

To export or remove a credential, choose the **Export** or **Remove** button.  

:::image type="complex" source="../media/webauthn-export-remove.msft.png" alt-text="Export or remove a credential" lightbox="../media/webauthn-export-remove.msft.png":::
   Export or remove a credential  
:::image-end:::  

## Rename an authenticator  

To rename an authenticator, complete the following steps.  

1.  Next to the authenticator name, choose the **Edit** button.  
1.  Edit the name, then choose **Enter** to save the changes.  

:::image type="complex" source="../media/webauthn-rename.msft.png" alt-text="Rename an authenticator" lightbox="../media/webauthn-rename.msft.png":::
   Rename an authenticator  
:::image-end:::  

## Set the active authenticator  

A newly created authenticator is automatically activated.  DevTools supports only one active virtual authenticator at any point of time.  If you remove the active authenticator, another authenticator is not automatically activated.  To use another virtual authenticator, choose the **Active** radio button next to the authenticator.  

> [!NOTE]
> If you remove the currently active authenticator, another authenticator that you added is not automatically activated.  To continue using virtual authenticators, next to the authenticator, choose the **Active** radio button.  

To set an authenticator as the active authenticator, next to the authenticator, choose the **Active** radio button.  

:::image type="complex" source="../media/webauthn-set-active.msft.png" alt-text="Set active authenticator" lightbox="../media/webauthn-set-active.msft.png":::
   Set active authenticator  
:::image-end:::  

## Remove a virtual authenticator  

To remove a virtual authenticator, next to the authenticator, choose the **Remove** button.  

:::image type="complex" source="../media/webauthn-remove-authenticator.msft.png" alt-text="Remove authenticator" lightbox="../media/webauthn-remove-authenticator.msft.png":::
   Remove authenticator  
:::image-end:::  

## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- links -->  

[DevtoolsGuideChromiumOpen]: ../open.md "Open Microsoft Edge DevTools | Microsoft Docs"  

[AppspotWebauthndemo]: https://webauthndemo.appspot.com "Webauthn demo | Appspot"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/webauthn/index) and is authored by [Jecelyn Yeen][JecelynYeen] \(Developer advocate, Chrome DevTools\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[JecelynYeen]: https://developers.google.com/web/resources/contributors/jecelynyeen  
