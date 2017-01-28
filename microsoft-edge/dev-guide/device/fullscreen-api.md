---
description: Learn how the Fullscreen API can be used to direct a user’s attention to specific elements by presenting content in the browser’s full screen mode.
title: Dev guide - Fullscreen API - Microsoft Edge Development
author: abbycar
---

# Fullscreen API

Using the Fullscreen API, you can direct a user's attention to specific elements while you hide distracting backgrounds or other apps, presenting content in the browser's full screen (kiosk) mode.

> [!NOTE]
>  As of Microsoft Edge (build 10240+), this API is unprefixed. Because the W3C fullscreen specification is not yet final, most browser vendors prefix the API with a unique identifier. It's a good idea to have a single function that requests full-screen mode across all prefixes, like most of the examples shown here. For better performance, put the W3C API name first, followed by the prefixed versions.


This table shows the JavaScript and CSS members of the Fullscreen API.

Unprefixed API | Prefixed API | Type | Description
:------------ | :------------- | :------------- | :-------------
[requestFullscreen](https://msdn.microsoft.com/library/dn254939) | msRequestFullscreen | Method | Requests full-screen display of an image, video, or other element.
[exitFullscreen](https://msdn.microsoft.com/library/dn254936) | msExitFullscreen | Method | Returns an element to its original size from full-screen mode.
[fullscreenElement](https://msdn.microsoft.com/library/dn254937) | msFullscreenElement | Property | Returns the top or current element that's being displayed in full-screen mode. Otherwise it returns undefined.
[fullscreenEnabled](https://msdn.microsoft.com/library/dn254938) | msFullscreenEnabled | Property | Returns true if a document lets elements be displayed in full-screen mode. Otherwise it returns false.
[fullscreenChange](https://msdn.microsoft.com/library/dn312066) | MSFullscreenChange | Event | Fires when an element is displayed in full-screen mode, or when it exits full-screen mode.
[fullscreenError](https://msdn.microsoft.com/library/dn312067) | MSFullscreenError | Event | Fires when a full-screen display is requested of an element, but this request can't be fulfilled.
[:fullscreen](https://msdn.microsoft.com/library/dn312073) | :-ms-fullscreen | Pseudo class | Enables you to set specific CSS properties based on whether an element is in full-screen mode or not.
[::backdrop](https://msdn.microsoft.com/library/dn312072) | ::-ms-backdrop | Pseudo element | Enables you to set the background properties when an element is displayed in full-screen mode.
[allowfullscreen](https://msdn.microsoft.com/library/dn312070) | allowfullscreen | Attribute | Enables an iframe's content to display in full-screen mode. If missing, only the iframe (and not the content within the frame) can go to full-screen mode.

## Open an element in full-screen mode

Open a video, image, or other element in full-screen mode by calling the `requestFullscreen()` method. A video will fill the screen, while anything else (paragraph, div, or image elements) stay the same size. The rest of the screen is black unless you style the background with ::backdrop.

```js
document.getElementById("myImage").requestFullscreen();
```

To prevent untrusted content from opening in full-screen mode, call `requestFullscreen` from a user-initiated event, such as a button click, rather than automatically from script. When content enters full-screen mode, the browser will ask the user for permission to open it. Assuming the user accepts, the content opens, and is surrounded by a black background so that the content is the only thing visible on the screen. If the user has more than one monitor, the full-screen display fills only one monitor.

```js
// Initiated by a user click on an element

    function makeFullScreen(divObj) {
       //Use the specification method before using prefixed versions
      if (divObj.requestFullscreen) {
        divObj.requestFullscreen();
      }
      else if (divObj.msRequestFullscreen) {
        divObj.msRequestFullscreen();
      }
      else if (divObj.mozRequestFullScreen) {
        divObj.mozRequestFullScreen();
      }
      else if (divObj.webkitRequestFullscreen) {
        divObj.webkitRequestFullscreen();
      } else {
        console.log("Fullscreen API is not supported");
      }
    }
```

## Get out of full-screen mode

Users can easily leave full-screen mode at any time by pressing the 'ESC' key. To exit full-screen mode under program control, use the `exitFullscreen` method. Unlike `requestFullscreen` which applies to an element, `exitFullscreen` applies to the document element, so it doesn't matter which element is currently open in full-screen mode. Using this example you can open an element in full-screen mode when you click it, then return the element to its original size when you click again.

<div class="codepen-wrap"><p data-height="300" data-theme-id="23761" data-slug-hash="vGEwQr" data-default-tab="result" data-user="MicrosoftEdgeDocumentation" data-embed-version="2" data-editable="true" class="codepen">See this example by <a href="https://codepen.io/MicrosoftEdgeDocumentation">Microsoft Edge Docs</a> on <a href="https://codepen.io/MicrosoftEdgeDocumentation/pen/vGEwQr">CodePen</a>.</p></div><script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Other actions can force an element out of full-screen mode, like when a user:
-  Selects a charm.
-  Snaps an instance of the browser to the side of the screen.
-  Clicks the Windows button on a tablet computer without a keyboard.
-  Removes the element currently in full screen from the Document Object Model (DOM).
-  Navigates to a new URL.
-  Swiped down from the top of the screen.
-  Swiped up from the bottom of the screen.

> [!NOTE]
>  If an element loses focus while it's in full-screen mode, it doesn't exit full-screen mode.


## Find an element in full-screen mode

You can find the top element that's currently displayed in full-screen mode using the `FullscreenElement` property on the document element. This property returns the element that's displayed in full-screen mode. If no element is currently open in full-screen mode, it returns null.

This example shows two elements that when clicked, print the `FullscreenElement` to their `innerHTML`.

![codepen](https://codepen.io/MicrosoftEdgeDocumentation/pen/dMoWZR)

Click the yellow box to open in full-screen mode, and the element ID (Element1) is printed in the div's [`innerHTML'](https://msdn.microsoft.com/library/ms533897). Click again to exit full-screen mode. Click the red box, it doesn't go into full-screen mode, and the word 'undefined' is displayed in the box.

## Using an iframe in full-screen mode

By default, an iframe opens in full-screen mode, but not its content. This is because the iframe is a child of the original document, but not the content which belongs to the iframe. The content of the iframe might be of unknown origin, possibly a malicious site. To allow an iframe's content to open in full-screen mode, set the [`allowfullscreen`](https://msdn.microsoft.com/library/dn312070) attribute on the iframe element.

One exception is with Adobe Flash. When a Flash control is embedded via an iframe, it always is allowed to show full screen, regardless of whether the iframe has the `allowfullscreen` attribute set.

This example shows how setting `allowfullscreen` affects how an iframe displays full-screen content. The two iframes each show the exact same webpage. When you click the buttons marked Frame 1 or Frame 2, an iframe opens in full-screen mode. The content displayed in each iframe is the same HTML page for both frames. Because only the first iframe has the `allowfullscreen` attribute set, only the content in the first iframe can go into full-screen mode. The second iframe's content stays original size when clicked, and an `fullscreenError` event is fired.

![codepen](https://codepen.io/MicrosoftEdgeDocumentation/pen/yONzew)

## Determining if full-screen mode is possible

The [`fullscreenEnabled`](https://msdn.microsoft.com/library/dn254938) property returns whether a document is capable of full-screen mode. The primary use is to check if an iframe's [`contentDocument`](https://msdn.microsoft.com/library/cc196985) has the `allowfullscreen` attribute set. When an iframe's `contentDocument` has the `allowfullscreen` attribute, `fullscreenEnabled` returns true, otherwise it returns false. `fullscreenEnabled` shouldn't be used to detect the fullscreen feature in general.

```javascript
var isFullScreenEnabled;
if(document.fullscreenEnabled){
   isFullScreenEnabled = document.fullscreenEnabled;
}
else if(document.msFullscreenEnabled){
   isFullScreenEnabled = document.msFullscreenEnabled;
}
else if (document.mozFullScreenEnabled){
   isFullScreenEnabled = document.mozFullScreenEnabled;
}
```

## Detect full-screen mode changes

The [`fullscreenChange`](https://msdn.microsoft.com/library/dn312066) event detects when elements go into full-screen mode or leave full-screen mode. The following code sample prints a message to the console when an element enters or exits full-screen mode.

```javascript
if (document.requestFullscreen) {
  document.addEventListener("fullscreenchange", function () {
    if (document.fullscreenElement != null) {
      console.info("Went full screen");
    } else {
      console.info("Exited full screen");
    }
  });
}
else if (document.msRequestFullscreen) {
  document.addEventListener("MSFullscreenChange", function () {
    if (document.msFullscreenElement != null) {
      console.info("Went full screen");
    } else {
      console.info("Exited full screen");
    }
  });
}
```

The `fullscreenChange` event is fired after an element enters or exits full-screen mode, so you can get the current state. In the code sample, we check the `fullscreenElement` to see if any elements are in full screen. If an element is in full-screen mode, the element is returned, otherwise `fullscreenElement` returns null.

> [!NOTE]
>  Press F12 to open the Microsoft Edge developer tools to access the [Console Tool](../../f12-devtools-guide/console.md) and see the messages. When the example goes into full screen mode, you'll see "Went full screen", and when it exits, you'll see "Exited full screen."


## Catch full-screen mode errors

Full-screen mode has its own error event, [`fullscreenError`](https://msdn.microsoft.com/library/dn312067). This event is fired when a request for full-screen mode is made, but the request can't be fulfilled. This code snippet shows a simple event handler for `fullscreenError`.

```javascript
document.addEventListener("MSFullscreenError", function (evt) {
  console.error("full screen error has occured " + evt.target);
}, true);
```

## Use CSS pseudo elements for full-screen styling

Using the [`:fullscreen`](https://msdn.microsoft.com/library/dn312073) CSS pseudo class and [`::backdrop`](https://msdn.microsoft.com/library/dn312072) CSS pseudo element, you can change page element styling based on full-screen mode state. With `:fullscreen`, you can change the style of how an element is displayed when in full-screen mode. For most elements, like a `<div>`, styles you can change typically include position, color, or size.

Except for the video element, elements in full-screen mode stay the same size and are surrounded by a black background. You can change the background using the `::backdrop` pseudo element. This can be an image, another color, or a border. Backgrounds for a video element displayed in letterbox or pillarbox are not affected by `::backdrop`.

The example below initially displays a blue box. When clicked, the box expands to full-screen mode, moving 200 pixels down and 200 pixels over, and its color changes to green. This is done by detecting full-screen mode using the `:fullscreen` pseudo class and applying new styles. The background around the box changes color to magenta using the `::backdrop` pseudo element.

![codepen](https://codepen.io/MicrosoftEdgeDocumentation/pen/QNbOyw)

How an element appears in full-screen mode varies from browser to browser. Other browsers may expand the element to fill the screen, and not support the background pseudo element.

You can use `:fullscreen` to change behavior so that the element expands to fill the screen, losing the black background. When the element goes into full-screen mode, you can set the CSS width and height properties to 100% to fit the window. 

This example expands a small box to fill the full screen. It also contains the Webkit equivalent of :fullscreen.

![codepen](https://codepen.io/MicrosoftEdgeDocumentation/pen/qZdVYy)



## API Reference

[requestFullscreen](https://msdn.microsoft.com/library/dn254939)

[exitFullscreen](https://msdn.microsoft.com/library/dn254936)

[::background](https://msdn.microsoft.com/library/dn312072)

[:fullscreen](https://msdn.microsoft.com/library/dn312073)

[fullscreenChange](https://msdn.microsoft.com/library/dn312066)

[fullscreenError](https://msdn.microsoft.com/library/dn312067)

[fullscreenEnabled](https://msdn.microsoft.com/library/dn254938)

[fullscreenElement](https://msdn.microsoft.com/library/dn254937)

[allowfullscreen](https://msdn.microsoft.com/library/dn312070)


## Demos

[Fullscreen API Codepen demos](https://codepen.io/MicrosoftEdgeDocumentation/pen/qZdVYy)

## Specification

[Fullscreen API](https://dvcs.w3.org/hg/fullscreen/raw-file/tip/Overview.html)
