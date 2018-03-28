---
ms.assetid: e2b7638a-b7c1-41f1-9a4c-df06185815a5
description: Learn how the Gamepag API can enable web-based games to take advantage of the specialized input functionality of gamepad devices.
title: Dev guide - Gamepad API
author: erikadoyle
ms.author: edoyle
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Gamepad API


The [Gamepad API](Http://go.microsoft.com/fwlink/p/?LinkID=398250) is an emerging W3C standard that fires events based on user interaction with a gamepad controller, such as an Xbox One or Xbox 360 controller.




Some of the highlights to the Gamepad API include:

* The [`navigator.getGamepads`](https://msdn.microsoft.com/library/Dn743639) method, which returns an array of gamepad objects, each representing a separate gamepad device.
* The [`gamepad`](https://msdn.microsoft.com/library/Dn743624) object, containing properties that identify the state of the various inputs associated with the controller (buttons, thumbsticks, and so on).
* The [`gamepad.buttons`](https://msdn.microsoft.com/library/dn743632) array, representing the states of the buttons supported by the controller.
* The [`gamepad.axes`](https://msdn.microsoft.com/library/dn743631) array representing the state of a controller thumbstick.

The following example shows one way to use the Gamepad API in a webpage.

```js
<!DOCTYPE html>
<html>
<head>
  <title>Gamepad API Sample</title>
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <script>
    function gameLoop() {
      var gamepads = navigator.getGamepads();
      for (var playerIndex = 0; playerIndex < gamepads.length; playerIndex++) {
        var gamepad = gamepads[playerIndex];
        if (gamepad) {
          if (gamepad.buttons[6].pressed || gamepad.buttons[7].pressed) {
            // A trigger is pressed, fire weapon.
            fireWeapon(playerIndex);
          }
        }
      }

      window.requestAnimationFrame(gameLoop);
    }
    gameLoop();
  </script>
</head>
<body>

</body>
</html>
```


To see the Gamepad API in action, plug an Xbox controller into a device running Microsoft Edge for Windows 10 and then head over to the [Flight Arcade](http://www.flightarcade.com/) demo on Test Drive. Check out this [Gamepad sample](http://internetexplorer.github.io/Gamepad-Sample/) on GitHub to see the Gamepad API in use.




For in-depth information about the Gamepad API, check out the [Flight Arcade demo's learning page](http://www.flightarcade.com/learn/gamepad).



## API reference
[GamePad](https://msdn.microsoft.com/library/Dn743624)

## Demos
[Flight Arcade](http://www.flightarcade.com/)

[Gamepad sample (Github)](http://internetexplorer.github.io/Gamepad-Sample/)

## Related topics
[Building Flight Arcade: Behind the scenes with WebGL, WebAudio and GamePad API](https://blogs.windows.com/msedgedev/2015/06/24/building-flight-arcade-behind-the-scenes-with-webgl-webaudio-and-gamepad-api/)

## Specification

[Gamepad](http://www.w3.org/TR/gamepad/)
