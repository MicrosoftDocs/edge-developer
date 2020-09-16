---
description: Inspect and modify animations with the Microsoft Edge DevTools  Animation Inspector.
title: Inspect animations
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/15/2020 
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
<!-- Copyright Kayce Basques 

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->  

# Inspect animations  

Inspect and modify animations with the Microsoft Edge DevTools Animation Inspector.  

:::image type="complex" source="../media/inspect-styles-elements-styles-drawer-animations-completed.msft.png" alt-text="animation inspector" lightbox="../media/inspect-styles-elements-styles-drawer-animations-completed.msft.png":::
   animation inspector  
:::image-end:::  

### Summary  

*   Capture animations by opening the Animation Inspector.  The Animation Inspector automatically detects and sorts animations into groups.  
*   Inspect animations by slowing down each one, replaying each one, or viewing the source code.  
*   Modify animations by changing the timing, delay, duration, or keyframe offsets.  

## Overview  

The Microsoft Edge DevTools Animation Inspector has two main purposes.  

*   Inspecting animations.  You want to slow down, replay, or inspect the source code for an Animation Group.  
*   Modifying animations.  You want to modify the timing, delay, duration, or keyframe offsets of an Animation Group.  Bezier editing and keyframe editing are currently not supported.  

The Animation Inspector supports CSS animations, CSS transitions, and web animations.  `requestAnimationFrame` animations are currently not supported.  

### What is an Animation Group?  

An Animation Group is a group of animations that may be related to each other.  Currently, the web has no real concept of a group animation, so motion designers and developers have to compose and time individual animations so that the animations render as one coherent visual effect.  The Animation Inspector predicts which animations are related based on start time \(excluding delays, and so on\).  The Animation Inspector also groups the animations side-by-side.  
In other words, a set of animations that are all triggered in the same script block are grouped together.  If an animation is asynchronous, it is placed in a separate group.  

## Get started  

There are two ways to open the Animation Inspector:  

*   Open the **Customize and Control DevTools** menu  
    1.  Navigate to the **More tools** sub-menu.  
    1.  Select **Animations**:  
        
        :::image type="complex" source="../media/inspect-styles-elements-styles-more-tools-animations.msft.png" alt-text="Animations using Main Menu" lightbox="../media/inspect-styles-elements-styles-more-tools-animations.msft.png":::
           **Animations** using Main Menu  
    :::image-end:::  
        
*   Open the **Command Menu**  
    1.  Type `Drawer: Show Animations`.  

The Animation Inspector opens up as a tab next to the Console Drawer.  Since the Animation Inspector is a Drawer tab, you may use the Animation Inspector from any DevTools panel.  

:::image type="complex" source="../media/inspect-styles-elements-styles-drawer-animations.msft.png" alt-text="Empty Animation Inspector" lightbox="../media/inspect-styles-elements-styles-drawer-animations.msft.png":::
   Empty Animation Inspector  
:::image-end:::  

The Animation Inspector is grouped into four main sections \(or panes\).  This guide refers to each pane as follows:  

| Index | Pane | Description |  
|:--- |:--- |:--- |  
| 1 | **Controls** | From here you may clear all currently captured Animation Groups, or change the speed of the currently selected Animation Group. |  
| 2 | **Overview** | Select an Animation Group here to inspect and modify it in the **Details** pane. |  
| 3 | **Timeline** | Pause and start an animation from here, or jump to a specific point in the animation. |  
| 4 | **Details** | Inspect and modify the currently selected Animation Group. |  

:::image type="complex" source="../media/inspect-styles-elements-styles-drawer-animations-selected-paused.msft.png" alt-text="Annotated Animation Inspector" lightbox="../media/inspect-styles-elements-styles-drawer-animations-selected-paused.msft.png":::
   Annotated Animation Inspector  
:::image-end:::  

To capture an animation, just perform the interaction that triggers the animation while the Animation Inspector is open.  If an animation is triggered on page load, reload the page with the Animation Inspector open to detect the animation.  

<!--  old link: <video src="animations/capture-animations.mp4" autoplay loop muted controls></video>  -->  

<!--  import the video to ACOM using https://review.docs.microsoft.com/en-us/help/contribute/contribute-video-publish?branch=master  -->  

<!--  > [!VIDEO animations/capture-animations.mp4]  -->  

## Inspect animations  

After you capture an animation, there are a few ways to replay it:  

*   Hover over the thumbnail in the **Overview** pane to view a preview of it.  
*   Select the Animation Group from the **Overview** pane \(so that it is displayed in the **Details** pane\) and press the **replay** \(![replay icon][ImageReplayButtonIcon]\) icon.  The animation is replayed in the viewport.  Click on the **animation speed** \(![animation speed icons][ImageAnimationSpeedButtonsIcon]\) icons to change the preview speed of the currently selected Animation Group.  You may use the red vertical bar to change your current position.  
*   Click and drag the red vertical bar to scrub the viewport animation.  
    
### View animation details  

After you capture an Animation Group, click on it from the **Overview** pane to view the details.  In the **Details** pane each individual animation is assigned the a row.  

:::image type="complex" source="../media/inspect-styles-elements-styles-drawer-animations-selected-completed.msft.png" alt-text="Animation Group details" lightbox="../media/inspect-styles-elements-styles-drawer-animations-selected-completed.msft.png":::
   Animation Group details  
:::image-end:::  

Hover over an animation to highlight it in the viewport.  Click on the animation to select it in the **Elements** panel.  

:::image type="complex" source="../media/inspect-styles-split-elements-styles-drawer-animations-selected-completed.msft.png" alt-text="Hover over the animation to highlight it in viewport" lightbox="../media/inspect-styles-split-elements-styles-drawer-animations-selected-completed.msft.png":::
   Hover over the animation to highlight it in viewport  
:::image-end:::  

The leftmost, darker section of an animation is the definition.  The right, more faded section represents iterations.  For example, in the following figure, sections two and three represent iterations of section one.  

:::image type="complex" source="../media/inspect-styles-glitch-display-animations-highlight.msft.png" alt-text="Diagram of animation iterations" lightbox="../media/inspect-styles-glitch-display-animations-highlight.msft.png":::
   Diagram of animation iterations  
:::image-end:::  

If two elements have the same animation applied, the Animation Inspector assigns the same color to the elements.  The color is random and has no significance.  For example, in the following figure, the two elements `div.cwccw.earlier` and `div.cwccw.later` have the same animation \(`spinrightleft`\) applied, as do the `div.ccwcw.earlier` and `div.ccwcw.later` elements.  

:::image type="complex" source="../media/inspect-styles-glitch-display-animations.msft.png" alt-text="Color-coded animations" lightbox="../media/inspect-styles-glitch-display-animations.msft.png":::
   Color-coded animations  
:::image-end:::  

## Modify animations  

There are three ways you are able to modify an animation with the Animation Inspector.  

*   Animation duration.  
*   Keyframe timings.  
*   Start time delay.  
    
In the following figure, the original animation is represented.  

:::image type="complex" source="../media/inspect-styles-glitch-spin-animations-console-animations.msft.png" alt-text="Original animation before modification" lightbox="../media/inspect-styles-glitch-spin-animations-console-animations.msft.png":::
   Original animation before modification  
:::image-end:::  

To change the duration of an animation, click and drag the first or last circle.  

:::image type="complex" source="../media/inspect-styles-glitch-spin-animations-console-animations-shorter.msft.png" alt-text="Modified duration" lightbox="../media/inspect-styles-glitch-spin-animations-console-animations-shorter.msft.png":::
   Modified duration  
:::image-end:::  

If the animation defines any keyframe rules, then these are represented as white inner circles.  Click and drag one of these to change the timing of the keyframe.  

:::image type="complex" source="../media/inspect-styles-glitch-spin-animations-console-animations-keyframe-modification.msft.png" alt-text="Modified keyframe" lightbox="../media/inspect-styles-glitch-spin-animations-console-animations-keyframe-modification.msft.png":::
   Modified keyframe  
:::image-end:::  

To add a delay to an animation, click and drag it anywhere except the circles.  

:::image type="complex" source="../media/inspect-styles-glitch-spin-animations-console-animations-delay.msft.png" alt-text="Modified delay" lightbox="../media/inspect-styles-glitch-spin-animations-console-animations-delay.msft.png":::
   Modified delay  
:::image-end:::  

## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- image links -->  

[ImageAnimationSpeedButtonsIcon]: ../media/animation-speed-buttons-icon.msft.png  
[ImageReplayButtonIcon]: ../media/replay-button-icon.msft.png  

<!-- links -->  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/inspect-styles/animations) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
