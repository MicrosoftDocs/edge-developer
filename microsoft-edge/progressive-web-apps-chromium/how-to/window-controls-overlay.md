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

While it is possible for PWAs on mobile to define how they want to be displayed with the [display](https://developer.mozilla.org/docs/Web/Manifest/display) property in the app manifest file, desktop PWAs can't use this to create an immersive, native-like, experience.

By default, the app area starts right below the reserved title bar area.

:::image type="content" source="../media/my-tracks-titlebar.png" alt-text="The default Windows app title bar shown on the My Tracks demo PWA." lightbox="../media/my-tracks-titlebar.png":::

Having the ability to display content where the title bar normally is can help PWAs feel more native.

Many desktop applications like Visual Studio Code, Microsoft Teams, or Microsoft Edge already do this.

:::image type="content" source="../media/vscode-titlebar.png" alt-text="Visual Studio Code displays content in the title bar area." lightbox="../media/vscode-titlebar.png":::

The Window Controls Overlay API allows you to display web content over the entire surface area of the app, moves the critical system required window controls into an overlay, and makes it possible for your content to stay clear of this overlay.


<!-- ====================================================================== -->
## Enable the Window Controls Overlay API in Microsoft Edge

The Window Controls Overlay API is experimental and needs to be enabled in Microsoft Edge first.

To enable the API:

1.  Go to `edge://flags` in Microsoft Edge.
1.  Select **Search flags** and type "window controls overlay".
1.  Select **Default** > **Enabled** > **Restart**.

    :::image type="content" source="../media/enable-window-controls-overlay-experiment.png" alt-text="Enable the Window Controls Overlay API experiment." lightbox="../media/enable-window-controls-overlay-experiment.png":::

The Window Controls Overlay API is also available as an origin trials feature. You can use an origin trial for your app's users to benefit from this feature without having to enable it.

For more information about Origin Trials, go to [Microsoft Edge Origin Trials Developer Console](https://developer.microsoft.com/microsoft-edge/origin-trials).


<!-- ====================================================================== -->
## Enable the feature in your app

The first thing to do is to enable the feature in your app [manifest file](./web-app-manifests.md), using the `display_override` property, as shown in the code sample below.

```json
{
    "display_override": ["window-controls-overlay"]
}
```


<!-- ====================================================================== -->
## Toggle the title bar

Once enabled, users of the app can choose to have the title bar or not, by clicking the title bar toggle button.

:::image type="content" source="../media/my-tracks-titlebar-toggle.png" alt-text="Select the title bar toggle button." lightbox="../media/my-tracks-titlebar-toggle.png":::

Since users can make this choice, and because your app can also run in a web browser, or on a mobile device, your code can't make any assumptions as to whether the window controls overlay is displayed. It is therefore important for your code to react to title bar geometry changes.

To learn more, see [React to overlay changes](#react-to-overlay-changes).


<!-- ====================================================================== -->
## Use CSS environment variables to stay clear of the overlay

The [`env()`](https://developer.mozilla.org/docs/Web/CSS/env) CSS function can be used to access environment variables that the user agent defines.

Four new environment variables come with the Window Controls Overlay feature.

| Variable | Description |
|:--- |:---
| `titlebar-area-x` | Distance, in `px`, of the overlay from the left side of the window |
| `titlebar-area-y` | Distance, in `px`, of the overlay from the top side of the window |
| `titlebar-area-width` | Width of the overlay, in `px` |
| `titlebar-area-height` | Height of the overlay, in `px` |

You can use these variables to position and size your own title bar for example.

```css
#title-bar {
    position: absolute;
    left: env(titlebar-area-x);
    top: env(titlebar-area-y);
    height: env(titlebar-area-height);
    width: env(titlebar-area-width);
}
```

Knowing where the overlay is, and how big it is is important as it may not always be on the same side (e.g. it is on the left side on macOS, and on the right side on Windows), and might not always be the same size.


<!-- ====================================================================== -->
## Make regions of your app drag handlers for the window

When the title bar is hidden, only the system critical window controls remain visible (the maximize, minimize, close, and app info buttons), which means that there is very little space available for users to move the app around.

You can use the `-webkit-app-region` CSS property to offer more ways for users to drag the app. If you have your own title bar for example, you can turn it into a window drag handler.

```css
#title-bar {
    position: absolute;
    left: env(titlebar-area-x);
    top: env(titlebar-area-y);
    height: env(titlebar-area-height);
    width: env(titlebar-area-width);
    -webkit-app-region: drag;
}
```


<!-- ====================================================================== -->
## React to overlay changes

A user can toggle the title bar or change the window dimensions while the app is running. Knowing when these things happen can be important for your app. You might need to re-arrange some of the content displayed in the title bar, or parts of your layout elsewhere on the page.

You can use the `geometrychange` event and the `visible` property on the `navigator.windowControlsOverlay` object to listen to changes and know if the title bar is visible.

> [!NOTE]
> The `geometrychange` is fired very frequently when the user resizes the window. To avoid running layout-changing code too often and cause performance problems in your app, it is recommended to use a `debounce` function to limit how many times the event is handled.
> To learn more about `debounce`, see [The Difference Between Throttling and Debouncing](https://css-tricks.com/the-difference-between-throttling-and-debouncing/).

```javascript
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

if ('windowControlsOverlay' in navigator) {
    navigator.windowControlsOverlay.addEventListener('geometrychange', debounce(e => {
        // Detect if the Window Controls Overlay is visible.
        const isOverlayVisible = navigator.windowControlsOverlay.visible;
        // Get the size and position of the title bar area.
        const titleBarRect = e.boundingRect;

        console.log(`The overlay is ${isOverlayVisible ? 'visible' : 'hidden'}, the title bar width is ${titleBarRect.width}px`);
    }, 200));
}
```


<!-- ====================================================================== -->
## Demo PWA

My Tracks is a PWA demo app that uses the Window Controls Overlay feature.

* [Enable the feature](#enable-the-feature-in-your-app) in Microsoft Edge.
* Go to [My Tracks](https://captainbrosset.github.io/mytracks/) and install the app.
* Select the **Hide title bar** button from the app title bar.

Notice that the app now displays content all the way to the top of the window frame, where the title bar used to be. The top area of the map is also a drag handler to let users move the window.

:::image type="content" source="../media/my-tracks-draggable-titlebar.png" alt-text="The top area of the map can be used to move the window." lightbox="../media/my-tracks-draggable-titlebar.png":::

The source code for this app can be accessed on the [My Tracks GitHub repository](https://github.com/captainbrosset/mytracks).

* The [manifest.json](https://github.com/captainbrosset/mytracks/blob/main/mytracks/manifest.json) source file declares the app's use of the Window Controls Overlay feature.
* The [overlay.js](https://github.com/captainbrosset/mytracks/blob/main/src/overlay.js) source file uses the `navigator.windowControlsOverlay` object.
* The [style.css](https://github.com/captainbrosset/mytracks/blob/main/mytracks/style.css) source file uses the `titlebar-area-height` CSS environment variable.


<!-- ====================================================================== -->
## See also

*   [Window Controls Overlay video tutorial](https://www.youtube.com/watch?v=NvClp35dFVI)
*   [Customize the window controls overlay of your PWA's title bar](https://web.dev/window-controls-overlay/)
