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

The `password` input type in Microsoft Edge includes a **password reveal** button.  This control enables your user to verify the password is entered correctly in the **password** field.  After a user has entered text in the **password** field, the user may choose the **password reveal** button or select `Alt`+`F8` to toggle visibility of their input:  

:::image type="complex" source="../media/web-platform/password-reveal/password-eye.png" alt-text="A password field with dots hiding the characters entered by a user.  An icon shaped like an eye is displayed within the right-hand side of the password field." lightbox="../media/web-platform/password-reveal/password-eye.png":::
   The **password reveal** button appears during text entry  
:::image-end:::  

:::image type="complex" source="../media/web-platform/password-reveal/password-toggled.png" alt-text="The eye icon in the same password field now has a stroke through it, and the characters are revealed." lightbox="../media/web-platform/password-reveal/password-toggled.png":::
   Invoke the **password reveal** button to turn the obfuscated dots into original the user input  
:::image-end:::  

By default, the **password reveal** button is inserted into the Shadow DOM of all HTML inputs of that have `type` set to `"password"`.  Starting with Microsoft Edge Version 87, users or [enterprises][DeployedgeMicrosoftEdgePoliciesPasswordrevealenabled] may disable this feature globally.  Web designers and developers should expect most Microsoft Edge users to have the default experience.  


## Removing the password reveal control of the browser  

You \(the web developer\) may completely remove the **password reveal** control of the browser \(for example, in favor of your **password reveal** control\) by targeting the `::-ms-reveal` pseudo element.  

```javascript
::-ms-reveal {
    display: none;
}
```  

However, you should take advantage **password reveal** button of the browser on your website.  The behavior of the control has important built-in [security measures](#visibility-of-the-control).  

## Customizing control styling  

You may instead modify the styling of the **password reveal** button to better matches the visual language of the website.  The following code snippet implements a modification.  

```javascript
::-ms-reveal {
    border: 1px solid transparent;
    border-radius: 50%;
    box-shadow: 0 0 3px currentColor;
}
```  

The following list describes some things to keep in mind when styling the **password reveal** button.  

*   The **eye** iconography of the browser is implemented as a background image.  To add a background color to the **password reveal** button, use the CSS `background-color` property instead of the `background` shorthand property.  
*   You may adjust the size and scale of the **password reveal** button, but it is clipped by the bounds of the password input control \(if applicable\).  
*   No current state selectors are available to style the toggled state of the **password reveal** button.  
    
## Visibility of the control  

While trying out the **password reveal** button, you should understand when it is displayed.  The **password reveal** control is not available until the user enters text into the **password** field.  For added security, the following actions may occur.  

*   The **password reveal** button is removed if focus moves away from the **password** field.  
*   The **password reveal** button is removed if scripts modify the **password** field.  
*   If the **password reveal** button is removed at any point, the entire contents of the **password** field must be deleted before the **password reveal** button is displayed again.  The feature prevents changes that to display the password.  
    
The **password reveal** button is not available in fields that are autofilled using the  password manager of the browser.  

<!-- links -->  

[DeployedgeMicrosoftEdgePoliciesPasswordrevealenabled]: /deployedge/microsoft-edge-policies#passwordrevealenabled "PasswordRevealEnabled - Microsoft Edge - Policies | Microsoft Docs"  
