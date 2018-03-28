---
ms.assetid: 7db36198-6342-49e5-a030-28e8bfdc0587
description: Learn how the Geolocation API can be used determine latitude and longitude on the computer or device running the browser.
title: Dev guide - Geolocation
author: abbycar
ms.author: abigailc
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# The Geolocation API

This topic provides an introduction to the Geolocation API, explains how to determine if Geolocation is supported, and discusses how user privacy is protected.

The Geolocation API is a built-in location provider that uses Wi-Fi location data and Internet Protocol (IP) address information to determine the latitude and longitude of the computer or device running the browser. The Geolocation API exposes the latitude and longitude to JavaScript in a webpage by using the [`geolocation`](https://msdn.microsoft.com/library/gg593041.aspx) object, which is a child object of the [`window.navigator`](https://msdn.microsoft.com/library/ms535867.aspx). The `geolocation` object enables a webpage to do the following:

-   Get the current geographic position by using the [`getCurrentPosition`](https://msdn.microsoft.com/library/gg593067.aspx) method.
-   Watch the position as it changes over time, by using the [`watchPosition`](https://msdn.microsoft.com/library/gg593068(v=vs.85).aspx) method. A call to `watchPosition` has the effect of subscribing to continuing location updates, until [`clearWatch`](https://msdn.microsoft.com/library/gg593066.aspx) is called to stop watching for changes.

Both of these methods return immediately when they are called. The result of the method call arrives asynchronously - each of these methods take an argument for a callback method you implement to receive the location when it is determined.
A simple call to `getCurrentPosition`, without detection or error checking, might look like the following line of code:

```JS
 window.navigator.geolocation.getCurrentPosition(show_map);
```

The `show_map` callback function receives the latitude and longitude coordinates.

```JS
function show_map(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  // Add code to show a map here
}
```

## Detecting Geolocation Support

Before you use the Geolocation API, your application should check whether the browser supports it. If the Geolocation API is not available, [`window.navigator.geolocation`](https://msdn.microsoft.com/library/gg593041.aspx) will be null. The following code example checks whether or not the Geolocation API is available. When the user clicks a button, a function displays an alert box that indicates whether `geolocation` is supported.

```JS
<!DOCTYPE html>
<html>
<head>
  <title>Geolocation example: Checking for geolocation support</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- Remove this line in production. -->
</head>

<body>
  <p>
    <input type="button" onclick="show_islocationenabled();" value="Is Geolocation supported?" />
  </p>
  <div></div>
  <script>
    function show_islocationenabled() {
      var str = "No, geolocation is not supported.";

      if (window.navigator.geolocation) {
        str = "Yes, geolocation is supported.";
      }
      document.getElementsByTagName('div')[0].textContent = str;
    }
  </script>
</body>
</html>
```

## Considering Privacy

Privacy is an obvious concern when sharing physical location with a remote web server. Therefore, the Geolocation API requires users to provide permission for the web application to access location information. The first time a webpage that requests geolocation data is visited, the browser displays a notification bar to prompt for access to the user's location. A call to [`getCurrentPosition`](https://msdn.microsoft.com/library/gg593067.aspx) or [`watchPosition`](https://msdn.microsoft.com/library/gg593068.aspx) triggers the prompt.

The prompt gives the user the following options:

-   **Allow one time.** The notification bar will be displayed again the next time the user visits the site.
-   **Always allow**, or **always deny**. Microsoft Edge remembers the user's choice so that the notification bar won't be displayed again.

The notification blocks until the user makes a choice, so there is no chance of the website determining location while waiting for the user's response.

If the user does not grant permission, location information will not be available to the web application. Calls to `getCurrentPosition` and `watchPosition` do not trigger a success callback. If an error callback is provided, it will be triggered with an error code of `PERMISSION\_DENIED`.

Developers of web applications that collect location data should consider the following guidelines for privacy:

-   Request location information only when necessary, and use the location information only for the task for which it was provided.
-   Dispose of location information when the task for which it was provided is complete, unless explicitly permitted to store it by the user.
-   If location information is stored on a web server, make sure to protect location information from unauthorized access, and allow users to update and delete this information.
-   Disclose the fact that the application is collecting location data. This disclosure must include an explanation of any exceptions to the guidelines listed above.



## API Reference

[Geolocation](https://msdn.microsoft.com/library/hh772290.aspx)

## Related Topics

[12 Cool HTML5 Geolocation Ideas](http://go.microsoft.com/fwlink/p/?LinkId=247122)

[Using Geolocation in the Browser and with Hosted Services](http://go.microsoft.com/fwlink/p/?LinkId=278842)


## Specification

[Geolocation API Specification](http://go.microsoft.com/fwlink/p/?LinkId=208506)


