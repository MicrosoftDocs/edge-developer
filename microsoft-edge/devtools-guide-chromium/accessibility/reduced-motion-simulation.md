---
description: Simulate reduced motion using developer tools.
title: Simulate reduced motion using developer tools (CSS Prefers Reduced Motion)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/07/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# Reduced motion simulation  

Animation in web products may be an accessibility problem.  Operating systems deal with this problem by including an option to turn off animations to avoid user confusion and potential health-related problems, such as triggering seizures.  

On a webpage, you can use the [prefers-reduced-motion][MDNPrefersReducedMotion] CSS media query to detect whether the user prefers to display any animations.  Then wrap your animation code in a test, to conditionally run animations.  

```css
@media (prefers-reduced-motion: reduce) {
  /* in case the .header element has an animation, turn it off */
  .header {
    animation: none;
  }
}
```  

Then test your code, as follows.

To simulate the operating system's reduced motion setting, without having to change your operating system setting:

1.  Open the **Command Menu**.  
    1.  Select `Control`+`Shift`+`P` on Windows/Linux or `Command`+`Shift`+`P` on macOS.  
        
        :::image type="complex" source="../media/css-console-command-menu-rendering.msft.png" alt-text="The Command Menu" lightbox="../media/css-console-command-menu-rendering.msft.png":::
           The **Command Menu**  
        :::image-end:::  
        
1.  Type `reduced`, to turn the simulation on and off.  Choose the option and select `Enter`.  
    
    :::image type="complex" source="../media/css-elements-styles-qs-select-reduced-motion-command-menu.msft.png" alt-text="Turn on or off the prefers reduced motion setting from Command Menu" lightbox="../media/css-elements-styles-qs-select-reduced-motion-command-menu.msft.png":::
       Turn on or off the **prefers reduced motion** setting from **Command Menu**  
    :::image-end:::  
    
1.  Refresh the webpage and check whether your animations run.


## See also

* [Verify that the page is usable with UI animation turned off](test-reduced-ui-motion.md) - A walkthrough using a demo page, with explanations.

    
<!-- links -->  
[DevtoolsIndex]: ../index.md "Microsoft Edge (Chromium) Developer Tools | Microsoft Docs"  
[MDNPrefersReducedMotion]: https://developer.mozilla.org/docs/Web/CSS/@media/prefers-reduced-motion "prefers-reduced-motion | MDN"  
