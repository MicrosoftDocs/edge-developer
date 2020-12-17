---
description: This page provides an overview of what's new in EdgeHTML 13.
title: New features and APIs in EdgeHTML 13
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
ms.date: 12/02/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# What's new in EdgeHTML 13  

[!INCLUDE [deprecation-note](../../includes/legacy-edge-note.md)]  

Here are the changes shipped with EdgeHTML 13, the engine powering the Microsoft Edge browser in the [first major update](https://blogs.windows.com/windowsexperience/2015/11/12) for Windows 10 \(11/2015, Build 10586\).  For an overview of changes to the overall Microsoft Edge browser, see [Introducing EdgeHTML 13, our first platform update for Microsoft Edge](https://blogs.windows.com/msedgedev/2015/11/16).  

Here's the permalink for the following list of changes:  [https://aka.ms/devguide_edgehtml_13](./edgehtml-13.md).  

## Features  

### CSS  

EdgeHTML 13 supports new CSS features, including:  

*   [CSS Mutability Pseudo-classes](https://developer.microsoft.com/microsoft-edge/platform/status/cssmutabilitypseudoclasses)  
*   [CSS Range Pseudo-classes](https://developer.microsoft.com/microsoft-edge/platform/status/cssrangepseudoclasses)  
*   CSS [initial](https://developer.microsoft.com/microsoft-edge/platform/status/cssinitialvalue) and [unset](https://developer.microsoft.com/microsoft-edge/platform/status/cssunsetvalue) keywords  

### Encrypted Media Extensions  

Microsoft Edge now supports the new unprefixed [Encrypted Media Extensions](https://w3.org/TR/encrypted-media) APIs.  Encrypted Media Extensions \(EME\) extends the video and audio elements to enable Digital Rights Management \(DRM\) protected content without using plug-ins.  Read more about EME:  [Encrypted Media Extensions](https://developer.mozilla.org/docs/Web/API/Encrypted_Media_Extensions_API).  

### Graphics  

EdgeHTML 13 introduces the following graphics updates:  

*   [Canvas ellipse](https://developer.microsoft.com/microsoft-edge/platform/status/canvas2dellipse)  
*   [Canvas blending modes](https://developer.microsoft.com/microsoft-edge/platform/status/compositingandblendingincanvas2d)  
*   [<picture> element](https://developer.microsoft.com/microsoft-edge/platform/status/pictureelement)  
*   [SVG external content](https://developer.microsoft.com/microsoft-edge/platform/status/svgexternalcontent)  

### JavaScript  

EdgeHTML 13 includes [major improvements and new feature support in Chakra](https://blogs.windows.com/msedgedev/2015/09/30), the JavaScript engine powering Microsoft Edge, including:  

#### New features  

On by default  

*   [asm.js](https://developer.microsoft.com/microsoft-edge/platform/status/asmjs/?q=asm.js) enabled by default \([blog post](https://blogs.windows.com/msedgedev/2015/11/10), [demo](https://dev.windows.com/microsoft-edge/testdrive/demos/chess)\)  
*   [Classes](https://developer.microsoft.com/microsoft-edge/platform/status/asmjs/?q=classes) \(ES2015\)  

#### Experimental JavaScript features  

Enabled with `about:flags`  

*   [Async functions](https://developer.microsoft.com/microsoft-edge/platform/status/asyncfunctions/?q=async%20functions) \(ES2016\)  
*   [Exponentiation operator](https://developer.microsoft.com/microsoft-edge/platform/status/exponentiationoperatores2016/?q=exponentiation%20operator) \(ES2016\)  
*   [Destructuring](https://developer.microsoft.com/microsoft-edge/platform/status/destructuringES2015/?q=destructuring) \(ES2015\)  

### User Input  

The following features introduced in EdgeHTML 13 improve user input:  

*   [\<meter\> element](https://developer.microsoft.com/microsoft-edge/platform/status/meterelement)  
*   [oninvalid event handler for the element document and window](https://developer.microsoft.com/microsoft-edge/platform/status/oninvalideventhandler)  

### Pointer Lock  

Microsoft Edge now supports the Pointer Lock API \(previously called Mouse Lock\) for access to raw mouse movement, locking the target of mouse events to a single element, eliminating limits of how far mouse movement can go in a single direction, and removing the cursor from view.  

## New APIs in EdgeHTML 13  

Here's the full list of new APIs in EdgeHTML 13.  They are listed in the format of `[interface name].[api name]`.  

<iframe height='584' scrolling='no' title='New APIs in EdgeHTML 13' src='//codepen.io/MicrosoftEdgeDocumentation/embed/vmzxEY/?height=584&theme-id=23761&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width:  100%;'>See the Pen <a href='https://codepen.io/MicrosoftEdgeDocumentation/pen/vmzxEY/'>New APIs in EdgeHTML 13</a> by Microsoft Edge Docs (<a href='http://codepen.io/MicrosoftEdgeDocumentation'>@MicrosoftEdgeDocumentation</a>) on <a href='http://codepen.io'>CodePen</a>.</iframe>  
