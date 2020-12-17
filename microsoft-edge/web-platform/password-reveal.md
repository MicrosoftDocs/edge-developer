---
description: This page provides guidance on controlling the display of the password reveal button
title: Customizing the password reveal button
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 11/25/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, compatibility, web platform, password reveal, eye icon
---
# Customizing the password reveal button  

The `password` input type in Microsoft Edge includes a **password reveal** button.  This control enables a user to verify their password is entered correctly in the **password** field.  After a user has entered text in the **password** field, they may choose the **password reveal** button or select `Alt`+`F8` to toggle visibility of their input:  

:::row:::
   :::column span="":::
      The password reveal button appears during text entry
      
      :::image type="complex" source="../media/web-platform/password-reveal/password-eye.png" alt-text="A **password** field with dots hiding the characters entered by a user.  An icon shaped like an eye is displayed within the right-hand side of the **password** field.  " lightbox="../media/web-platform/password-reveal/password-eye.png":::
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      Invoke the password reveal button to turn the obfuscated dots into original the user input
      
      :::image type="complex" source="../media/web-platform/password-reveal/password-toggled.png" alt-text="The eye icon in the same **password** field now has a stroke through it, and the characters are revealed." lightbox="../media/web-platform/password-reveal/password-toggled.png":::
      :::image-end:::  
   :::column-end:::
:::row-end:::  

By default, the **password reveal** button is inserted into the Shadow DOM of all HTML `input`s with `type` set to `"password"`.  Starting with Microsoft Edge Version 87, users or [enterprises][DeployedgeMicrosoftEdgePoliciesPasswordrevealenabled] may disable this feature globally.  Web designers and developers should expect most Microsoft Edge users to have the default experience.  


## Removing the browser's password reveal control

Web developers may completely remove the browser's **password reveal** control by targeting the `::-ms-reveal` pseudo element.  

```css
::-ms-reveal {
    display: none;
}
```  

However, web developers should consider taking advantage of the browser's **password reveal** button. The native **password reveal** control has important [security measures](#visibility-of-the-control) built into its behavior.  

## Customizing control styling  

Instead of fully removing the control, web developers can instead modify the styling of the **password reveal** button to better match the visual language of the website. The following snippet provides an example of such styling.  

```css
::-ms-reveal {
    border: 1px solid transparent;
    border-radius: 50%;
    box-shadow: 0 0 3px currentColor;
}
```  

There are a few things to keep in mind when styling the **password reveal** button:  

*   The browser's **eye** iconography is implemented as a background image.  To add a background color to the **password reveal** button, use the CSS `background-color` property instead of the `background` shorthand property.  
*   Developers may adjust the size and scale of the **password reveal** button, but any overflow \(if applicable\) past the bounds of the password input control will be hidden.  
*   At present, no state selectors are available to style the toggled state of the **password reveal** button.  
    
## Visibility of the control  

The **password reveal** button is not available until the user enters text into the **password** field. The button is suppressed in the following scenarios, in order to help keep the user's password entry secure.

*   The **password reveal** button is removed if focus moves away from the **password** field.  
*   The **password reveal** button is removed if scripts modify the **password** field.  
*   If a user removes the **password reveal** button, the user must delete the content of the **password** field before the **password reveal** button displays again.  This feature prevents someone from making a minor adjustment in order to view the password, should the user step away from an unlocked device.
    
The **password reveal** button is not available in fields that are autofilled using the browser's password manager.  

<!-- links -->  

[DeployedgeMicrosoftEdgePoliciesPasswordrevealenabled]: /deployedge/microsoft-edge-policies#passwordrevealenabled "PasswordRevealEnabled - Microsoft Edge - Policies | Microsoft Docs"  
