---
description: PWA related New Features
title: What's new in Progressive Web Apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/02/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, pwas, pwa, progressive web apps
---
# What's New In Progressive Web Apps

[!INCLUDE [contact DevTools team note](includes/edge-whats-new-note.md)]

> [!TIP]
> The **Microsoft Build 2021** conference was on May 25-27.  Here's a video from Build about the updates to PWA, DevTools and more:
> [Microsoft Edge | State of the Platform][YoutubeEdgeStateOfThePlatform] - Microsoft Edge brings a compelling and consistent platform with tools for developers.  As our legacy browsers phase out of support, Edge will soon be the only supported browser from Microsoft on Windows 10.  Join us to learn about the latest across the Edge platform, tools, and web apps.

## What's New in Edge 92

Edge 92 became the stable channel of Microsoft Edge on July 22, 2021. This article lists updates we made to PWAs from both a developer and consumer point of view.

## Streamlined App Info Menus

The app info menu is what is shown when a user clicks the 3 dot settings menu in the apps title bar. We've updated this menu and streamlined the experience for the user by:
* bringing the app publisher information to the top level and making it the first thing a user sees
* moving the privacy information and controls into a dedicated 2nd level "Privacy" menu
* moving content related tools into a dedicated 2nd level "More tools" menu

This change brings the settings menu more in line with what users expect from a desktop app experience and less like browser UI. 

### Updated App Info Menu

:::image type="complex" source="media/app-info.png" alt-text="Streamlined app info menu" lightbox="media/app-info.png":::
   Screen shot of the new streamlined app info menu
:::image-end:::

### Privacy Menu

:::image type="complex" source="media/privacy-menu.png" alt-text="Privacy controls found in the dedicated Privacy menu" lightbox="media/privacy-menu.png":::
   Privacy controls found in the dedicated Privacy menu
:::image-end:::

### More Tools Menu

:::image type="complex" source="media/more-tools.png" alt-text="Content related tools menu" lightbox="media/more-tools.png":::
   Content related tools now found in More tools menu
:::image-end:::

## Protocol Handlers Origin Trial 

<!-- Title: Improvements to tab interactions -->
<!-- Subtitle: Interactions related to hovering, selecting, and closing tools are more predictable. -->

Tabs for each tool have been reformatted to reduce the chance of accidentally closing a tool.  On each tab in the main toolbar and in 


## Window Controls Overlay Origin Trial

<!-- Title: Better screen reader support in the Console -->
<!-- Subtitle: Assistive technologies can now announce autocomplete suggestions and evaluated expressions in the Console. -->

Prior to Microsoft Edge version 92, in the **Console**, assistive technologies such as screen readers didn't announce autocomplete suggestions or the results of evaluated expressions. This has been fixed now.

## Source Order Viewer

<!--  Title: Source Order Viewer -->
<!--  Subtitle: The new Source Order Viewer displays numbers on the webpage indicating the order of page elements in the source file, independently of how the page sections are positioned by CSS. -->

You can now view the order of source elements overlaid on the rendered webpage, for better accessibility inspection.

The order of content in an HTML document is important for search engine optimization and accessibility.  CSS allows developers to create content that looks different in its on-screen order than the order in the HTML source document.  This is an accessibility problem, because screen-reader users could get a confusing experience.

## Download the Microsoft Edge preview channels

If you are on Windows, Linux, or macOS, consider using the [Microsoft Edge preview channels][MicrosoftEdgePreviewChannels] as your default development browser.  The preview channels give you access to the latest DevTools features.

