---
title: Temperature converter source files
description: How the code works in the Temperature converter Progressive Web App (PWA) sample.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: pwa
ms.date: 10/17/2025
---
# Temperature converter source files

The sample Temperature converter Progressive Web App (PWA) 

See also:
* [/temperature-converter/](https://github.com/MicrosoftEdge/Demos/tree/main/temperature-converter/) - source code directory.


<!-- ====================================================================== -->
## Overview of source code files

The sample Progressive Web App (PWA) consists of the following files, in the `/Demos/temperature-converter/` source code directory:

| File | Description | Section below |
|---|---|---|
| `index.html` | The initial webpage defining the content and controls that appear in the UI of the app.  This sample PWA has a single webpage. | [The app's initial webpage (`index.html`)](#the-apps-initial-webpage-indexhtml) |
| `converter.css` | The Cascading Style Sheets (CSS) file defines styling for the webpage of the app; the layout styling of each UI control in the main page of the app. | [The JavaScript app logic file (`converter.js`)](#the-css-style-sheet-file-convertercss) |
| `converter.js` | App logic, as JavaScript code. | [The JavaScript app logic file (`converter.js`)](#the-javascript-app-logic-file-converterjs) |
| `manifest.json` | Basic information about the app, for the device's operating system to use.  Manifest file that makes the Progressive Web App (PWA) installable on the device, unlike a regular web app. | [The web app manifest (`manifest.json`)](#the-web-app-manifest-manifestjson) |
| `icon512.png` | Image file to represent the app within the browser and on the local device. | [The image file to represent the app (`icon512.png`)](#the-image-file-to-represent-the-app-icon512png) |
| `sw.js` | Service worker that caches front-end files on the local device and serves out the cached files when there's no internet connection. | [The service worker to cache the app's files on the local device (`sw.js`)](#the-service-worker-to-cache-the-apps-files-on-the-local-device-swjs) |
| `README.md` | Brief information about the app, for people who are looking at the directory of source code; contains a link to access the live app from the github.io web server, and a link to the present article. | [The Readme file to explain the directory of source files (`README.md`)](#the-readme-file-to-explain-the-directory-of-source-files-readmemd) |

Details about each file are below.


<!-- ====================================================================== -->
## The app's initial webpage (`index.html`)

`index.html` defines the first page that users see when they access the Progressive Web App (PWA).

[index.html](https://github.com/MicrosoftEdge/Demos/blob/main/temperature-converter/index.html) defines the content of the webpage of the Progressive Web App (PWA), including the text, images, text fields, and buttons that appear in the user interface.

```html
<!DOCTYPE html>
<html lang="en-US" dir="ltr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="icon" type="image/png" href="./icon512.png">
    <link rel="stylesheet" href="./converter.css">
    <link rel="manifest" href="./manifest.json">
    <title>Temperature converter</title>
  </head>
  <body>
    <form id="converter">
       ...
    </form>
    <script src="./converter.js"></script>
    <script>
      if('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js', { scope: './' });
      }
    </script>
  </body>
</html>
```


<!-- ------------------------------ -->
#### How index.html references the CSS file

`index.html` references the `converter.css` CSS file via a line of code that's inside the `<head>` tag:

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <link rel="icon" type="image/png" href="./icon512.png">
  <link rel="stylesheet" href="./converter.css">
  <link rel="manifest" href="./manifest.json">
  <title>Temperature converter</title>
</head>
```


<!-- ------------------------------ -->
#### How index.html loads the JavaScript file

In `index.html`, after the closing `</form>` tag, a `<script>` element loads `converter.js`:

```html
  <output name="output-temp" id="output-temp" for="input-temp input-unit output-unit">68 F</output>
</form>
<script src="./converter.js"></script>
```

Conversely, `converter.js` references the form's `id`: `converter` in the following line:

```javascript
const form = document.getElementById('converter');
```


<!-- ------------------------------ -->
#### How `index.html` references the manifest

Inside the `<head>` tag, a `<link>` element references `manifest.json`:

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <link rel="icon" type="image/png" href="./icon512.png">
  <link rel="stylesheet" href="./converter.css">
  <link rel="manifest" href="./manifest.json">
  <title>Temperature converter</title>
</head>
```

This `<link rel="manifest" href="./manifest.json">` element links the web app manifest file to the app, making the web app a Progressive Web App (PWA).

The file name `manifest.json` is merely a common convention, not a strict requirement.  For example, you can change the manifest file name to `abcd.json`, and modify the line in `index.html` as:

```html
<link rel="manifest" href="./abcd.json">
```


<!-- ------------------------------ -->
#### How index.html references the service worker

Within a `<script>` element at the end of the `<body>` tag, the service worker file `sw.js` is registered by calling `navigator.serviceWorker.register()`:

```html
    <output name="output-temp" id="output-temp" for="input-temp input-unit output-unit">68 F</output>
  </form>
  <script src="./converter.js"></script>
  <script>
    if('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js', { scope: './' });
    }
  </script>
</body>
```


<!-- ====================================================================== -->
## The CSS style sheet file (`converter.css`)

[converter.css](https://github.com/MicrosoftEdge/Demos/blob/main/temperature-converter/converter.css) defines the styling for the webpage of the Progressive Web App (PWA), by using Cascading Style Sheet (CSS) rules to organize the HTML content in a layout, and to provide styles for elements.

The web app has CSS style rules, to make the app visually appealing.

The CSS file is `converter.css` in the sample's directory (`/Demos/temperature-converter/`), including the following code:

```css
html {
  background: rgb(243, 243, 243);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 15pt;
}

html, body {
  height: 100%;
  margin: 0;
}

body {
  display: grid;
  place-items: center;
}

#converter {
  ...
}

#converter input, #converter select {
  ...
}

#converter #output-temp {
  ...
}
```


<!-- ====================================================================== -->
## The JavaScript app logic file (`converter.js`)

To make the temperature converter work, the sample uses JavaScript code, in `converter.js`.  [converter.js](https://github.com/MicrosoftEdge/Demos/blob/main/temperature-converter/converter.js) contains the app logic for the Progressive Web App (PWA).  The JavaScript code adds user interactions to the user interface.

```javascript
const inputField = document.getElementById('input-temp');
const fromUnitField = document.getElementById('input-unit');
const toUnitField = document.getElementById('output-unit');
const outputField = document.getElementById('output-temp');
const form = document.getElementById('converter');

function convertTemp(value, fromUnit, toUnit) {
  if (fromUnit === 'c') {
    ...
    return value;
  }
  throw new Error('Invalid unit');
}

form.addEventListener('input', () => {
  const inputTemp = parseFloat(inputField.value);
  ...
  outputField.value = (Math.round(outputTemp * 100) / 100) + ' ' + toUnit.toUpperCase();
});
```


<!-- ====================================================================== -->
## The web app manifest (`manifest.json`)
<!-- a modified version of this section is in /how-to/index.md & /samples/temperature-converter.md -->

[manifest.json](https://github.com/MicrosoftEdge/Demos/blob/main/temperature-converter/manifest.json) provides basic information about the Progressive Web App (PWA), for the device's operating system to use.  The JSON code describes the app to the host operating system.

```json
{
  "lang": "en-us",
  "name": "Temperature converter app",
  "short_name": "Temperature converter",
  "description": "A basic temperature converter application that can convert to and from Celsius, Kelvin, and Fahrenheit",
  "start_url": "./",
  "background_color": "#2f3d58",
  "theme_color": "#2f3d58",
  "orientation": "any",
  "display": "standalone",
  "icons": [
      {
          "src": "./icon512.png",
          "sizes": "512x512"
      }
  ]
}
```

See also:
* [The web app manifest (`manifest.json`)](../how-to/index.md#the-web-app-manifest-manifestjson) in _Get started developing a PWA_.


<!-- ====================================================================== -->
## The image file to represent the app (`icon512.png`)

[icon512.png](https://github.com/MicrosoftEdge/Demos/blob/main/temperature-converter/icon512.png) is a 512x512 pixel app icon image.  This image file represents the Progressive Web App (PWA), such as in the Windows taskbar and Windows Start Menu:

![Icon file](./temperature-converter-images/icon-in-taskbar.png)


<!-- ====================================================================== -->
## The service worker to cache the app's files on the local device (`sw.js`)
<!-- a modified version of this section is in /how-to/index.md & /samples/temperature-converter.md -->

[sw.js](https://github.com/MicrosoftEdge/Demos/blob/main/temperature-converter/sw.js) is a service worker that manages caching files that are part of the Progressive Web App (PWA), caching the files to the local drive and serving them out when there's no internet connection.

```javascript
const CACHE_NAME = `temperature-converter-v1`;
    
// Use the install event to pre-cache all initial resources.
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    cache.addAll([
      './',
      './converter.js',
      './converter.css'
    ]);
  })());
});

self.addEventListener('fetch', event => {
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);

    // Get the resource from the cache.
    const cachedResponse = await cache.match(event.request);
    if (cachedResponse) {
      return cachedResponse;
    } else {
        try {
          // If the resource was not in the cache, try the network.
          const fetchResponse = await fetch(event.request);
    
          // Save the resource in the cache and return it.
          cache.put(event.request, fetchResponse.clone());
          return fetchResponse;
        } catch (e) {
          // The network failed
        }
    }
  })());
});
```

The service worker adds three files to the cache, explicitly (`.html`, `.css`, and `.js`).  The icon (`.png`) and manifest (`.json`) are cached automatically by the browser.

See also:
* [The service worker to cache the app's files on the local device (`sw.js`)](../how-to/index.md#the-service-worker-to-cache-the-apps-files-on-the-local-device-swjs) in _Get started developing a PWA_.


><!-- ====================================================================== -->
## The Readme file to explain the directory of source files (`README.md`)

[README.md](https://github.com/MicrosoftEdge/Demos/tree/main/temperature-converter#readme) contains brief information about the Progressive Web App (PWA):
* A link to open the app webpage.
* A link to the [Temperature converter sample](../samples/temperature-converter.md) article.

The main directory for a Progressive Web App (PWA)'s source code can contain a Readme file.  The app's end-users don't see the source code directory or the Readme file.


<!-- ====================================================================== -->
## See also
<!-- all links in article -->

<!-- Local: -->
* [The web app manifest (`manifest.json`)](../how-to/index.md#the-web-app-manifest-manifestjson) in _Get started developing a PWA_.
* [The service worker to cache the app's files on the local device (`sw.js`)](../how-to/index.md#the-service-worker-to-cache-the-apps-files-on-the-local-device-swjs) in _Get started developing a PWA_.
* [Temperature converter sample](../samples/temperature-converter.md) article.

Source code:
* [/temperature-converter/](https://github.com/MicrosoftEdge/Demos/tree/main/temperature-converter/)
   * [index.html](https://github.com/MicrosoftEdge/Demos/blob/main/temperature-converter/index.html) 
   * [converter.css](https://github.com/MicrosoftEdge/Demos/blob/main/temperature-converter/converter.css)
   * [converter.js](https://github.com/MicrosoftEdge/Demos/blob/main/temperature-converter/converter.js)
   * [manifest.json](https://github.com/MicrosoftEdge/Demos/blob/main/temperature-converter/manifest.json)
   * [icon512.png](https://github.com/MicrosoftEdge/Demos/blob/main/temperature-converter/icon512.png)
   * [sw.js](https://github.com/MicrosoftEdge/Demos/blob/main/temperature-converter/sw.js)
   * [README.md](https://github.com/MicrosoftEdge/Demos/tree/main/temperature-converter#readme)
