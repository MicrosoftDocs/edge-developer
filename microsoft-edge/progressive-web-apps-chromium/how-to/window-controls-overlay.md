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

A PWA can define how it should be displayed on mobile platforms, by using the [display](https://developer.mozilla.org/docs/Web/Manifest/display) property in the app manifest file.  However, to create an immersive, native-like experience, _desktop_ PWAs can't use this approach.

By default, the app area starts immediately below the reserved title bar area:

:::image type="content" source="../media/my-tracks-titlebar.png" alt-text="The default Windows app title bar shown on the My Tracks demo app.":::

Displaying content where the title bar normally is can help PWAs feel more native.  Many desktop applications, such as Visual Studio Code, Microsoft Teams, and Microsoft Edge already do this:

:::image type="content" source="../media/vscode-titlebar.png" alt-text="Visual Studio Code displays content in the title bar area.":::

The Window Controls Overlay API does the following:
*  Allows you to display web content over the entire surface area of the app.
*  Moves the critical system-required window controls into an overlay.
*  Makes it possible for your content to stay clear of this overlay.


<!-- ====================================================================== -->
## Enable the Window Controls Overlay API in Microsoft Edge

The Window Controls Overlay API is experimental and must be enabled in Microsoft Edge, to use it.

To enable the Window Controls Overlay API:

1.  In Microsoft Edge, go to `edge://flags`.
1.  Select **Search flags** and then type "window controls overlay".
1.  Select **Default** > **Enabled** > **Restart**.

    :::image type="content" source="../media/enable-window-controls-overlay-experiment.png" alt-text="Enable the Window Controls Overlay API experiment.":::

The Window Controls Overlay API is also available as an origin trials feature.  For your app's users to benefit from the Window Controls Overlay without having to enable it in Microsoft Edge, you can use an origin trial.

For more information about Origin Trials, go to [Microsoft Edge Origin Trials Developer Console](https://developer.microsoft.com/microsoft-edge/origin-trials).


<!-- ====================================================================== -->
## Enable the Window Controls Overlay in your app

The first thing to do is to enable the Window Controls Overlay feature in your app's [Web App Manifest file](./web-app-manifests.md).  To do this, in the manifest file, set the `display_override` property:

```json
{
    "display_override": ["window-controls-overlay"]
}
```


<!-- ====================================================================== -->
## Toggle the title bar

When the Window Controls Overlay feature is enabled, the user can choose to have the title bar or not, by clicking the title bar toggle button:

:::image type="content" source="../media/my-tracks-titlebar-toggle.png" alt-text="Select the title bar toggle button.":::

Your code can't assume that the window controls overlay is displayed, because:
*  The user can choose whether to display the title bar.
*  Your app can also run in a web browser or on a mobile device, as well as running as a desktop app.

Therefore, your code needs to react to title bar geometry changes.  To learn more, see [React to overlay changes](#react-to-overlay-changes).


<!-- ====================================================================== -->
## Use CSS environment variables to stay clear of the overlay

The [`env()`](https://developer.mozilla.org/docs/Web/CSS/env) CSS function can be used to access environment variables that the user agent defines.

Four environment variables are added by the Window Controls Overlay feature:

| Variable | Description |
|:--- |:---
| `titlebar-area-x` | Distance, in `px`, of the overlay from the left side of the window |
| `titlebar-area-y` | Distance, in `px`, of the overlay from the top side of the window |
| `titlebar-area-width` | Width of the overlay, in `px` |
| `titlebar-area-height` | Height of the overlay, in `px` |

You can use these environment variables to position and size your app's title bar:

```css
#title-bar {
    position: absolute;
    left: env(titlebar-area-x);
    top: env(titlebar-area-y);
    height: env(titlebar-area-height);
    width: env(titlebar-area-width);
}
```

Knowing where the overlay is and how big it is is important.  The overlay might not always be on the same side of the window; on macOS, the overlay is on the left side, but on Windows, the overlay is on the right side.  Also, the overlay might not always be the same size.


<!-- ====================================================================== -->
## Make regions of your app drag handlers for the window

When the title bar is hidden, only the system-critical window controls remain visible (the **Maximize**, **Minimize**, **Close**, and **App Info** icons).  This means that there is very little space available for users to move the app around.

You can use the `-webkit-app-region` CSS property to offer more ways for users to drag the app.  For example, if your app has its own titlebar, you can turn its titlebar into a window drag handler:

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

A user can toggle the title bar or change the window dimensions while the app is running.  Knowing when these things happen can be important for your app.  Your app might need to rearrange some of the content that's displayed in the title bar, or rearrange your layout elsewhere on the page.

To listen for changes, use the `geometrychange` event.  To detect whether the title bar is visible, use the `visible` property on the `navigator.windowControlsOverlay` object.

> [!NOTE]
> The `geometrychange` is fired very frequently when the user resizes the window.  To avoid running layout-changing code too often and causing performance problems in your app, use a `debounce` function to limit how many times the event is handled.  See [The Difference Between Throttling and Debouncing](https://css-tricks.com/the-difference-between-throttling-and-debouncing/).

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
## Demo app

My Tracks is a PWA demo app that uses the Window Controls Overlay feature.

1. In Microsoft Edge, [Enable the Window Controls Overlay](#enable-the-window-controls-overlay-in-your-app).

2. Go to [My Tracks](https://captainbrosset.github.io/mytracks/) and install the app.

3. Select the **Hide title bar** button from the app title bar.

   The app now displays content all the way to the top of the window frame, where the title bar used to be.  The top area of the map is a drag handler, to let the user move the window.

   :::image type="content" source="../media/my-tracks-draggable-titlebar.png" alt-text="The top area of the map can be used to move the window.":::

The source code for this app is in the [My Tracks](https://github.com/captainbrosset/mytracks) repo.

* The [manifest.json](https://github.com/captainbrosset/mytracks/blob/main/mytracks/manifest.json) source file declares the app's use of the Window Controls Overlay feature.

* The [overlay.js](https://github.com/captainbrosset/mytracks/blob/main/src/overlay.js) source file uses the `navigator.windowControlsOverlay` object.

* The [style.css](https://github.com/captainbrosset/mytracks/blob/main/mytracks/style.css) source file uses the `titlebar-area-height` CSS environment variable.


<!-- ====================================================================== -->
## See also

*   [Window Controls Overlay video tutorial](https://www.youtube.com/watch?v=NvClp35dFVI)
*   [Customize the window controls overlay of your PWA's title bar](https://web.dev/window-controls-overlay/)
