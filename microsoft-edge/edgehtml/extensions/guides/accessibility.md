---
ms.assetid: c4544a19-de78-4c69-a042-c0415726548f
description: To ensure your extension’s icon is visible while in both light and dark mode, follow the accessibility guide.
title: Accessibility - Extensions (EdgeHTML)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/16/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Accessibility - Extensions (EdgeHTML)  

[!INCLUDE [deprecation-note](../includes/deprecation-note.md)]  

## Creating accessible extension icons for Microsoft Edge

Third-party extension developers are encouraged to use image assets that meet Microsoft’s strict accessibility requirements so that icons are clearly visible for both light and dark themes. We recommend that all extension icons have a 14:1 ratio between the icon’s background color and the dominant color of the icon itself.


First-party extensions developed by Microsoft apply a “stickering” visual treatment to satisfy these requirements.

### Examples of the "stickering"

The main goal of “stickering” is to make the icon visually accessible on any background color. The recommended color ratio between the white outer stroke and your icon should be 14:1 to support the high contrast requirements.

#### Good icon
With stickering, a primarily dark icon will remain visible on any background color.


![image of icon being visible on any background color](./../media/accessibility-light-to-dark-good.png)

#### Bad icon
Without stickering, an icon could blend in with the background and become impossible to see.


![image of icon blending into black background](./../media/accessibility-light-to-dark-bad.png)

### "Stickering" your extension icon

The following five steps outline the suggested method of creating an extension icon that meets Microsoft’s accessibility requirements:


| Step 1                                       | Step 2                                       | Step 3                                                                                 | Step 4                                                                          | Step 5                                                       |
|:---------------------------------------------|:---------------------------------------------|:---------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------|:-------------------------------------------------------------|
| Set your icon within your specified grid.    | Reduce your icon size by 2 pixels.           | Copy your icon and paste in place. Create a 2 pixel outer stroke with rounded corners. | Outline your stroke, release the compound path, and merge the remaining shapes. | Color the outer stroke white and the inner icon as you wish. |
| ![step1](./../media/accessibility-step1.png) | ![step2](./../media/accessibility-step2.png) | ![step3](./../media/accessibility-step3.png)                                           | ![step4](./../media/accessibility-step4.png)                                    | ![step5](./../media/accessibility-step5.png)                 |

