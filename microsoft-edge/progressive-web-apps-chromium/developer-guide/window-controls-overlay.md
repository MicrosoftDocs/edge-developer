---
title: Display content in the title bar
description: Learn how to use the Window Controls Overlay API to make use of the entire window area for your app.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/02/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: pwa
keywords: progressive web apps, PWA, Edge, JavaScript, window controls overlay, API
---
# Display content in the title bar

While it is possible for PWAs on mobile to define how they want to be displayed with the [`display`][MdnManifestDisplayProperty] property in the app manifest file, desktop PWAs can't use this to create an immersive, native-like, experience.  

By default, the app area starts right below the reserved title bar area.  

**TODO: add example screenshot**  

Having the ability to display content where the title bar normally is can help PWAs feel more native.  

Many desktop applications like Visual Studio Code, Microsoft Teams, Microsoft Edge, or Spotify already do this.  

**TODO: add example screenshot**  

The Window Controls Overlay API allows you to display web content over the entire surface area of the app, moves the critical system required window controls into an overlay, and makes it possible for your content to stay clear of this overlay.  

## Enable the Window Controls Overlay API in Microsoft Edge  

The Window Controls Overlay API is experimental and needs to be enabled in Microsoft Edge first.  

To enable the API:  

1.  Navigate to `edge://flags` in Microsoft Edge.  
1.  Select **Search flags** and type "window controls overlay".  
1.  Select **Default** > **Enabled** > **Restart**.  

    :::image type="complex" source="../media/enable-window-controls-overlay-experiment.png" alt-text="Edit a localStorage key" lightbox="../media/enable-window-controls-overlay-experiment.png":::
       Enable the Window Controls Overlay API experiment  
    :::image-end:::  

The Window Controls Overlay API is also available as an origin trials feature. You can use an origin trial for your app's users to benefit from this feature without having to enable it.  

For more information about Origin Trials, navigate to [Microsoft Edge Origin Trials Developer Console][MicrosoftDeveloperMicrosoftEdgeOriginTrials].  

## Enable the feature in your app  

The first thing to do is to enable the feature in your app [manifest file][ManifestFileDoc], using the `display_override` property, as shown in the code sample below.  

```json
{
    "display_override": ["window-controls-overlay"]
}
```  

## Toggle the title bar  

Once enabled, users of the app can choose to have the title bar or not by clicking on the title bar toggle button.  

**TODO screenshot**

Since users can make this choice, and because your app can also run in a web browser, or on a mobile device, your code can't make any assumptions as to whether the window controls overlay is displayed. It is therefore important for your code to react to title bar geometry changes.  

To learn more about this, navigate to [React to overlay changes](#react-to-overlay-changes).  

## Use CSS environment variables to stay clear of the overlay  

The [`env()`][MdnEnvCssFunction] CSS function can be used to access environment variables that the user agent defines.  

4 new environment variables come with the Window Controls Overlay feature.  

| Variable | Description |  
|:--- |:---  
| `titlebar-area-x` | Distance, in `px`, of the overlay from the left side of the window | 
| `titlebar-area-y` | Distance, in `px`, of the overlay from the top side of the window | 
| `titlebar-area-width` | Width of the overlay, in `px` |  
| `titlebar-area-height` | Height of the overlay, in `px` |  

Knowing where the overlay is, and how big it is is important as it may not always be on the same side (e.g. it is on the left side on macOS, and on the right side on Windows), and may not always be the same size.  

**TODO**

## Make regions of your app drag handlers for the window  

**TODO**

## React to overlay changes  

**TODO**

## Sample app  

**TODO** Link to an app on our sample catalog that uses this API, and link to its source code on GitHub.

<!-- links -->  

[MdnManifestDisplayProperty]: https://developer.mozilla.org/en-US/docs/Web/Manifest/display
[MdnEnvCssFunction]: https://developer.mozilla.org/en-US/docs/Web/CSS/env()
[ManifestFileDoc]: ./webappmanifests.md "Use the Web App Manifest to integrate your Progressive Web App into the Operating System | Microsoft Docs"  
[MicrosoftDeveloperMicrosoftEdgeOriginTrials]: https://developer.microsoft.com/microsoft-edge/origin-trials "Origin Trials | Microsoft Edge Developer"  