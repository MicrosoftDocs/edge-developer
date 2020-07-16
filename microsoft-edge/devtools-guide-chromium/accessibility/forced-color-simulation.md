---
description: Display the current web site in high contrast mode (CSS Forced Color)
title: High Contrast simulation
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/16/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---

# High Contrast simulation  

Windows and other operating systems \(OSs\) contain a [setting that allows users to show the interface with a set of reduced colors][WindowsHighContrastMode].  The setting may be either pre-set color schemes or defined by the user.  The setting helps people with several needs including those with limited vision, suffering from migraines, suffering from [Irlen Syndrome][WikiIrlenSyndrome], or living with [Dyslexia][WikiDyslexia].  

The exact numbers are not available, but roughly 4% of all Windows users \(roughly 55 million people\) have display settings using the reduced colors setting, commonly known as **High Contrast Mode**.  According to the [2018 Survey of Users with low Vision][WebaimProjectsLowvisionsurvey2Contrastmode] provided by WebAIM, more than half of low vision users use **High Contrast Mode**.  

To make it easier for you \(the developer\) to test how your products appear in **High Contrast Mode**, [Microsoft Edge DevTools][DevtoolsGuideChromiumMain] include a way to simulate it without changing your Operating System settings.  The simulation also helps users of other OSs that do not have the same functionality and therefore are not able to test it.  

The [CSS Media Queries Level 5 specification][CsswgDraftsMediaqueries5ForcedColors] also defines a programmatic way for you to react to the setting.  

```css
@media (forced-colors: active) {
  /* Apply these overrides in high contrast mode */
}
```  

> [!IMPORTANT]
> You may be tempted to define your own settings for **High Contrast Mode**, but you should remember that each user must be able to define the setting exactly as needed.  Instead of defining your own colors, you may use the [CSS System Color keywords][CsswgDraftsColorsSystem].  

## Navigate to the Rendering Tools  

To simulate what your web product looks like in forced color mode, open the [Rendering Tools][DevtoolsGuideChromiumRenderingTools].  

1.  To open the Rendering Tools, select the `...` menu item in the toolbar  
1.  Select `More tools`  
1.  Select `Rendering`  
    
    :::image type="complex" source="../media/getting-to-the-rendering-tools.msft.png" alt-text="Opening the Rendering Tools" lightbox="../media/getting-to-the-rendering-tools.msft.png":::
       Opening the **Rendering Tools**  
    :::image-end:::  

The **Rendering** menu appears in the drawer.  

1.  Scroll down to the `Emulate CSS media feature forced-colors` menu item and select the drop-down menu to display the options.  
    
    :::image type="complex" source="../media/accessibility-forced-colors-rendering-dropdown.msft.png" alt-text="The Forced Colors menu on the Rendering drawer" lightbox="../media/accessibility-forced-colors-rendering-dropdown.msft.png":::
       The **Forced Colors** menu on the **Rendering** drawer  
    :::image-end:::  
    
1.  Choose to either `No emulation` or `forced-colors: active`.  
    
1.  The main windows displays the simulation of your selected option applied to the current page.  
    
    :::row:::
       :::column span="":::
          :::image type="complex" source="../media/accessibility-forced-colors-rendering-no-modification.msft.png" alt-text="Displaying a web site without high contrast simulation" lightbox="../media/accessibility-forced-colors-rendering-no-modification.msft.png":::
             Display without simulated High Contrast  
          :::image-end:::  
       :::column-end:::
       :::column span="":::
          :::image type="complex" source="../media/accessibility-forced-colors-rendering-dropdown-active.msft.png" alt-text="Displaying a web site in high contrast simulation" lightbox="../media/accessibility-forced-colors-rendering-dropdown-active.msft.png":::
             Display in simulated High Contrast  
          :::image-end:::  
       :::column-end:::
    :::row-end:::
    
## Use the Command Menu  

1.  [Open the Command Menu][DevtoolsGuideChromiumCommandMenuIndexOpen].  
1.  Type `forced-c`, select either **Emulate CSS forced-colors: active** or **Do not emulate CSS forced-colors**  and then press `Enter`.  
    :::row:::
       :::column span="":::
          :::image type="complex" source="../media/accessibility-forced-colors-command-menu-emulate.msft.png" alt-text="Turning on High Contrast simulation using the Command Menu" lightbox="../media/accessibility-forced-colors-command-menu-emulate.msft.png":::
              Turning on forced colors simulation using the **Command** Menu  
          :::image-end:::  
       :::column-end:::
       :::column span="":::
          :::image type="complex" source="../media/accessibility-forced-colors-command-menu-donotemulate.msft.png" alt-text="Turning off High Contrast simulation using the Command Menu" lightbox="../media/accessibility-forced-colors-command-menu-donotemulate.msft.png":::
             Turning off forced colors simulation using the **Command** Menu  
          :::image-end:::  
       :::column-end:::
    :::row-end:::  

View and change your CSS like any other web page.  For more information, see [Get Started With Viewing And Changing CSS][DevtoolsGuideChromiumCssIndex].  

<!-- links --> 

[DevtoolsGuideChromiumMain]: ../../devtools-guide-chromium.md "Microsoft Edge (Chromium) Developer Tools  Microsoft | Microsoft Docs"  
[DevtoolsGuideChromiumCommandMenuIndexOpen]: ../command-menu/index.md#open-the-command-menu "Open the Command Menu - Run Commands With The Microsoft Edge DevTools Command Menu | Microsoft Docs"  
[DevtoolsGuideChromiumCssIndex]: ../css/index.md "Get Started With Viewing And Changing CSS | Microsoft Docs"  
[DevtoolsGuideChromiumRenderingTools]: ../rendering-tools/index.md "Microsoft Edge (Chromium) Rendering Tools | Microsoft Docs"  

[CsswgDraftsColorsSystem]: https://drafts.csswg.org/css-color#css-system-colors "CSS System Colors"  
[CsswgDraftsMediaqueries5ForcedColors]: https://drafts.csswg.org/mediaqueries-5#forced-colors "CSS Media Queries Specification on forced colors "  

[WebaimProjectsLowvisionsurvey2Contrastmode]: https://webaim.org/projects/lowvisionsurvey2#contrastMode "High Contrast Modes - Survey of Users with Low Vision #2 Results | WebAIM"  

[WindowsHighContrastMode]: https://support.microsoft.com/help/13862 "How to enable high contrast mode in Windows 10"  

[WikiDyslexia]: https://en.wikipedia.org/wiki/Dyslexia "Dyslexia | Wikipedia"  
[WikiIrlenSyndrome]: https://en.wikipedia.org/wiki/Irlen_syndrome "Irlen Syndrome | Wikipedia"  
