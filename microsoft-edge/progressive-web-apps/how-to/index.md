---
title: Get started developing a PWA
description: Learn to build a web app that's a Progressive Web App so that it can be installed as a local app.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: pwa
ms.date: 10/01/2025
---
# Get started developing a PWA

A Progressive Web App (PWA) is a web app that you build by using web technologies such as HTML, CSS, and JavaScript, and can also be installed and run on various device operating systems, from a single codebase.

By using this article along with [Temperature converter sample](../samples/temperature-converter.md), you'll be able to:

* Customize the sample Progressive Web App (PWA) by making minor modifications of the sample's code.

* Create your own, different Progressive Web App (PWA) by copying and pasting the entire sample directory and extensively modifying the code.

This sample Progressive Web App (PWA) is built by using web technologies.  A Progressive Web App (PWA) can be installed and run on all devices, from a single codebase.

See also:
* [Temperature converter sample](../samples/temperature-converter.md) - steps to use the sample that's explained below.
* [Installing a PWA](../ux.md#installing-a-pwa) in _Use PWAs in Microsoft Edge_.


<!-- ====================================================================== -->
## The architecture of a Progressive Web App (PWA)
<!-- https://learn.microsoft.com/microsoft-edge/progressive-web-apps/how-to/#the-architecture-of-a-pwa -->

The following diagram shows the high-level architecture of a Progressive Web App (PWA):

![Architecture diagram of a PWA](./index-images/pwa-architecture.png)

On the left, the device has some files of a PWA.

On the right, the web server has back-end files (or database content) of a PWA.

The device contains the front-end code, including HTML, CSS, JavaScript, the service worker, and the manifest.  This is true regardless of whether the Progressive Web App (PWA) is used as a web app in the browser, or as a local app that's installed on the device.

Like a regular web app, a Progressive Web App is written using the programming languages of the web: HTML, CSS, and JavaScript, and is distributed to your users by using a web server.  If the web app is a Progressive Web App, the user initially sees the web app within a web browser, and the Address bar also has an **App available** button that prompts the user to install the app locally.


<!-- ====================================================================== -->
## Deploying a PWA on a production web server

To make a Progressive Web App (PWA) available to users, you deploy the Progressive Web App (PWA) on a web server that's accessible via HTTPS (unlike localhost).  The web server contains front-end code and back-end code for the web app.

If the Progressive Web App (PWA) has no backend code, the Progressive Web App (PWA) can be served out from github.io, such as [Temperature converter](https://microsoftedge.github.io/Demos/pwa-getting-started/) at `https://microsoftedge.github.io/Demos/pwa-getting-started/`.

[Temperature converter sample](../samples/temperature-converter.md) has you run and test the sample Progressive Web App (PWA) on your local server.  When your own Progressive Web App (PWA) has been tested and is ready to distribute, you distribute the tested Progressive Web App (PWA) to your users via a web server (a web hosting provider).


<!-- ------------------------------ -->
#### Hosting the Progressive Web App (PWA) on a web server for users

Some parts of the Progressive Web Apps (PWAs) platform, such as service workers, require using HTTPS.  For debugging purposes, Microsoft Edge permits a `localhost` web server to use the Progressive Web App (PWA) APIs without HTTPS.

When your own Progressive Web App (PWA) goes live, you must publish it to an HTTPS URL.  Many hosts use HTTPS by default, but if your host doesn't offer HTTPS, [Let's Encrypt](https://letsencrypt.org/) offers a free alternative for creating the necessary certificates.

For example, you can create an [Azure free account](https://azure.microsoft.com/free).  If you host your website on the [Microsoft Azure App Service](https://azure.microsoft.com/services/app-service/web), it's served over HTTPS by default.

You can also host your website on [GitHub Pages](https://pages.github.com/) (`pages.github.com`) which supports HTTPS too.

todo: capabilities of pages.github.com vs. github.io - just a different URL?


<!-- ------------------------------ -->
#### About localhost http vs. production server https

When using localhost web server, the URL begins with `http`, not `https`.  Key parts of the Progressive Web Apps platform, such as service workers, require using HTTPS, not HTTP.

For development and debugging purposes, Microsoft Edge (or a window hosting a PWA local app) permits a `localhost` web server to use the Progressive Web App (PWA) APIs without HTTPS.

When your Progressive Web App (PWA) goes live, you must publish it to an HTTPS URL.  Many hosts use HTTPS by default, but if your host doesn't offer HTTPS, [Let's Encrypt](https://letsencrypt.org/) offers a free alternative for creating the necessary certificates.

For example, you can create an [Azure free account](https://azure.microsoft.com/free).  If you host your website on the [Microsoft Azure App Service](https://azure.microsoft.com/services/app-service/web), it's served over HTTPS by default.

You can also host your website on [GitHub Pages](https://pages.github.com/) which supports HTTPS too.


<!-- ====================================================================== -->
## Front-end code files (UI code)

A Progressive Web App (PWA) has front-end code files that are sent by the web server to the browser on the local device.

Front-end code is the resources needed for the app to be installed on the user's device, such as HTML, CSS, and JavaScript code.

A Progressive Web App (PWA) includes the following front-end code files:

* An HTML file to describe the content in your app, such as the text, images, text fields, or buttons that appear in the user interface.

* A CSS file to organize the HTML content in a layout, and provide styles to elements.

* A JavaScript file to add user interactions to your user interface.

* A JSON manifest file to describe your app to the host operating system.

The front-end code for a Progressive Web App (PWA) runs by using the device's web browser.  The browser's own UI is not visible when the app is run in a standalone window, which is a streamlined browser window with minimal browser UI controls.

The sample Progressive Web App (PWA) consists of the following files, in the `/Demos/pwa-getting-started/` source code directory:

| File | Description | Section below |
|---|---|---|
| `index.html` | The initial webpage defining the UI controls.  The webpage layout of the app.  This sample PWA has a single webpage. | [The app's initial webpage (`index.html`)](#the-apps-initial-webpage-indexhtml) |
| `converter.css` | The Cascading Style Sheets (CSS) file defines styling for the webpage of the app; the layout styling of each UI control in the main page of the app. | [The JavaScript app logic file (`converter.js`)](#the-css-style-sheet-file-convertercss) |
| `converter.js` | App logic, as JavaScript code. | [The JavaScript app logic file (`converter.js`)](#the-javascript-app-logic-file-converterjs) |
| `manifest.json` | Basic information about the app, for the device's operating system to use.  Manifest file that makes the Progressive Web App (PWA) installable on the device, unlike a regular web app. | [The web app manifest (`manifest.json`)](#the-web-app-manifest-manifestjson) |
| `icon512.png` | Image file to represent the app within the browser and on the local device. | [The image file to represent the app (`icon512.png`)](#the-image-file-to-represent-the-app-icon512png) |
| `sw.js` | Service worker that caches front-end files on the local device and serves out the cached files when there's no internet connection. | [The service worker to cache the app's files on the local device (`sw.js`)](#the-service-worker-to-cache-the-apps-files-on-the-local-device-swjs) |
| `README.md` | Brief information about the app, for people who are looking at the directory of source code; contains a link to access the live app from the github.io web server, and a link to the present article.  Brief information about the app: a link to open the app webpage, and a link to the present article. | [The Readme file to explain the directory of source files (`README.md`)](#the-readme-file-to-explain-the-directory-of-source-files-readmemd) |

Details about each file are below.


<!-- ====================================================================== -->
## Back-end code, files, endpoints, and data (server-side code)

A PWA potentially has back-end code that resides and runs on the web server.

The temperature converter sample Progressive Web App (PWA) doesn't have any server-side code, because the app exclusively runs on the device it's installed on, and doesn't need any server-side data.

Like a web app, a Progressive Web App (PWA) can include some _back-end code_ (_server-side code_) that implements any web service API endpoints that are needed by your app, when connected to the internet, to retrieve dynamic content that may be stored in a database on your server.

The back-end code for a Progressive Web App (PWA) can use the server-side languages of your choice, such as:
* ASP.NET
* Java
* Node.js
* PHP

Server-side web service API endpoints might not be required, depending on the app your're building.

The remaining sections explain the files that make up the PWA sample.


<!-- ====================================================================== -->
## The app's initial webpage (`index.html`)

`index.html` defines the first page that users see when they access the Progressive Web App (PWA).

[index.html](https://github.com/MicrosoftEdge/Demos/blob/main/pwa-getting-started/index.html) defines the webpage layout of the Progressive Web App (PWA).  The HTML describes the content in the app, including the text, images, text fields, and buttons that appear in the user interface.

```html
<!DOCTYPE html>
<html lang="en-US" dir="ltr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="icon" type="image/png" href="https://edgestatic.azureedge.net/welcome/static/favicon.png">
    <link rel="stylesheet" href="./converter.css">
    <link rel="manifest" href="./manifest.json">
    <title>Temperature converter</title>
  </head>
  <body>
    <form id="converter">
      <label for="input-temp">temperature</label>
      <input type="text" id="input-temp" name="input-temp" value="20" />
      <label for="input-unit">from</label>
      <select id="input-unit" name="input-unit">
        <option value="c" selected>Celsius</option>
        <option value="f">Fahrenheit</option>
        <option value="k">Kelvin</option>
      </select>
      <label for="output-unit">to</label>
      <select id="output-unit" name="output-unit">
        <option value="c">Celsius</option>
        <option value="f" selected>Fahrenheit</option>
        <option value="k">Kelvin</option>
      </select>
      <output name="output-temp" id="output-temp" for="input-temp input-unit output-unit">68 F</output>
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
#### The app's user interface defined as a form in index.html

The app's user interface defined in `index.html` defines the main app functionality.

This form defines input controls as elements that your app will use to convert a temperature value from one unit to another unit.

The `index.html` file contains a form:

```html
  <body>
    <form id="converter">
      <label for="input-temp">temperature</label>
      <input type="text" id="input-temp" name="input-temp" value="20" />
      <label for="input-unit">from</label>
      <select id="input-unit" name="input-unit">
        <option value="c" selected>Celsius</option>
        <option value="f">Fahrenheit</option>
        <option value="k">Kelvin</option>
      </select>
      <label for="output-unit">to</label>
      <select id="output-unit" name="output-unit">
        <option value="c">Celsius</option>
        <option value="f" selected>Fahrenheit</option>
        <option value="k">Kelvin</option>
      </select>
      <output name="output-temp" id="output-temp" for="input-temp input-unit output-unit">68 F</output>
    </form>
    <script src="./converter.js"></script>
```

The \<script\> element loads `converter.js`, which references the form's `id`: `converter` in the following line:

```javascript
const form = document.getElementById('converter');
```


<!-- ------------------------------ -->
#### How index.html references the CSS file

`index.html` references the `converter.css` CSS file via a line of code that's inside the `<head>` tag:

```html
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="icon" type="image/png" href="https://edgestatic.azureedge.net/welcome/static/favicon.png">
    <link rel="stylesheet" href="./converter.css">
    <link rel="manifest" href="./manifest.json">
    <title>Temperature converter</title>
  </head>
```


<!-- ------------------------------ -->
#### How index.html loads the JavaScript file

The `index.html` file loads the `converter.js` app logic JavaScript file via a line of code after the closing `</form>` tag:

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


<!-- ------------------------------ -->
#### How `index.html` references the manifest

`index.html` has a line of code inside the `<head>` tag to reference `manifest.json`.  This line of code links the new web app manifest file to your web app, making the web app a Progressive Web App (PWA).

```html
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="icon" type="image/png" href="https://edgestatic.azureedge.net/welcome/static/favicon.png">
    <link rel="stylesheet" href="./converter.css">
    <link rel="manifest" href="./manifest.json">
    <title>Temperature converter</title>
  </head>
```


<!-- ------------------------------ -->
#### How index.html references the service worker

The `index.html` file registers the service worker file `sw.js` via a line of code at the end of the `<body>` tag:

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

[converter.css](https://github.com/MicrosoftEdge/Demos/blob/main/pwa-getting-started/converter.css) defines the styling for the webpage of the Progressive Web App (PWA), by using Cascading Style Sheet (CSS) rules to organize the HTML content in a layout, and to provide styles for elements.

The web app has CSS style rules, to make the app visually appealing.

The CSS file is `converter.css` in the sample's directory (`/Demos/pwa-getting-started/`), including the following code:

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
  width: 15rem;
  padding: 2rem;
  border-radius: .5rem;
  box-shadow: 0 0 2rem 0 #0001;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#converter input, #converter select {
  font-family: inherit;
  font-size: inherit;
  margin-block-end: 1rem;
  text-align: center;
  width: 10rem;
}

#converter #output-temp {
  font-size: 2rem;
  font-weight: bold;
}
```


<!-- ====================================================================== -->
## The JavaScript app logic file (`converter.js`)

To make the temperature converter work, the sample uses JavaScript code, in `converter.js`, in the `/Demos/pwa-getting-started/` directory.

[converter.js](https://github.com/MicrosoftEdge/Demos/blob/main/pwa-getting-started/converter.js) contains the app logic for the Progressive Web App (PWA).  The JavaScript code adds user interactions to the user interface.

```javascript
const inputField = document.getElementById('input-temp');
const fromUnitField = document.getElementById('input-unit');
const toUnitField = document.getElementById('output-unit');
const outputField = document.getElementById('output-temp');
const form = document.getElementById('converter');

function convertTemp(value, fromUnit, toUnit) {
  if (fromUnit === 'c') {
    if (toUnit === 'f') {
      return value * 9 / 5 + 32;
    } else if (toUnit === 'k') {
      return value + 273.15;
    }
    return value;
  }
  if (fromUnit === 'f') {
    if (toUnit === 'c') {
      return (value - 32) * 5 / 9;
    } else if (toUnit === 'k') {
      return (value + 459.67) * 5 / 9;
    }
    return value;
  }
  if (fromUnit === 'k') {
    if (toUnit === 'c') {
      return value - 273.15;
    } else if (toUnit === 'f') {
      return value * 9 / 5 - 459.67;
    }
    return value;
  }
  throw new Error('Invalid unit');
}

form.addEventListener('input', () => {
  const inputTemp = parseFloat(inputField.value);
  const fromUnit = fromUnitField.value;
  const toUnit = toUnitField.value;

  const outputTemp = convertTemp(inputTemp, fromUnit, toUnit);
  outputField.value = (Math.round(outputTemp * 100) / 100) + ' ' + toUnit.toUpperCase();
});
```


<!-- ====================================================================== -->
## The web app manifest (`manifest.json`)

A regular web app only runs in the browser.  By adding a web app manifest, the web app becomes a Progressive Web App (PWA) and thus becomes installable on the device.

The web app manifest enables browsers that support Progressive Web App (PWA) to install the web app as a Progressive Web App (PWA) on the device.

A _web app manifest_ is a JSON file containing metadata about the Progressive Web App (PWA), such as its name, description, icons, and the various operating system features it uses.

[manifest.json](https://github.com/MicrosoftEdge/Demos/blob/main/pwa-getting-started/manifest.json) provides basic information about the Progressive Web App (PWA), for the device's operating system to use.  The JSON code describes the app to the host operating system.

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
* [The web app manifest](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest) in _Making PWAs installable_ at MDN > References > Progressive web apps > Guides.
* [Web app manifests](https://developer.mozilla.org/docs/Web/Manifest) at MDN > References.


<!-- ====================================================================== -->
## The image file to represent the app (`icon512.png`)

[icon512.png](https://github.com/MicrosoftEdge/Demos/blob/main/pwa-getting-started/icon512.png) is a 512x512 pixel app icon image.  This image file represents the Progressive Web App (PWA), such as in the Windows taskbar and Windows Start Menu:

![Icon file](./index-images/icon-in-taskbar.png)


<!-- ====================================================================== -->
## The service worker to cache the app's files on the local device (`sw.js`)

The sample Progressive Web App (PWA) uses a service worker JavaScript file (such as `sw.js`), to cache front-end, UI files to the local device.

The service worker makes the app:
* Faster.
* More reliable.
* Network-independent; the app continues to work (in some way), even with a missing or intermittent internet connection.

[sw.js](https://github.com/MicrosoftEdge/Demos/blob/main/pwa-getting-started/sw.js) is a service worker that manages caching files that are part of the Progressive Web App (PWA), caching the files to the local drive and serving them out when there's no internet connection.

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

The service worker explicitly caches three files:
* `./` means `index.html`
*  `./converter.js`
* `./converter.css`

Two additional files are are cached automatically by the browser: 
* The icon file (`.png`).
* The manifest file (`.json`).

This sample PWA does something useful without requiring an internet connection and server-side processing such as database operations.  The PWA can be installed as a standalone app by users.  To enable installing the app, a JavaScript service worker file makes the app able to work offline (without always having an internet connection), by caching needed front-end files on the local device.

A service worker is a key technology that help make a Progressive Web App (PWA) fast and independent of network conditions.

A service worker is a specialized web worker that can intercept network requests from your Progressive Web App (PWA), and enables scenarios such as:
* Offline support, including intermittent connection to the internet.
* Advanced caching on the device.
* Running background tasks such as receiving PUSH messages, adding badges to the app icon, or fetching data from a server.

A Progressive Web App (PWA) doesn't need to have a service worker for Microsoft Edge to be able to install the app.  However, we recommend including a service worker in your own Progressive Web App (PWA) to make it faster, and to make your Progressive Web App (PWA) more reliable, such as when your device has an intermittent network connection or is offline.

A service worker is defined in a JavaScript file that's loaded by the app.

In the sample PWA, the `sw.js` file acts as the Progressive Web App (PWA)'s service worker.  The service worker listens to the `install` event, which is triggered when the user installs the app, and uses it to cache the resources that your app needs to function offline, such as the initial HTML page, the converter JavaScript file, and the converter CSS file.

The code also intercepts `fetch` events, which happen every time your app sends a request to the server, and applies a cache-first strategy.  The service worker returns cached resources so your app can work offline, and if that fails, the service worker attempts to download the file from the server instead.

See also:
* [Examine the service worker handling offline caching](../samples/temperature-converter.md#examine-the-service-worker-handling-offline-caching) in _Temperature converter sample_.
* [Service Worker API](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) at MDN.


<!-- ====================================================================== -->
## The Readme file to explain the directory of source files (`README.md`)

[README.md](https://github.com/MicrosoftEdge/Demos/tree/main/pwa-getting-started#readme) is technically not part of the sample's source code.

The Readme contains brief information about the Progressive Web App (PWA):
* A link to open the app webpage.
* A link to the [Temperature converter sample](../samples/temperature-converter.md) article.

It's recommended that the main directory for a Progressive Web App (PWA)'s source code contain a Readme file.  The app's end-users don't see the source code directory or the Readme file.


<!-- ====================================================================== -->
## Next steps

To create your own Progressive Web App (PWA), you can copy, paste, and modify the `Demos\pwa-getting-started` directory.

After that, to update your Progressive Web App (PWA), you deploy the new version to your web server again.

The temperature converter sample demonstrates only a small sample of what Progressive Web Apps (PWAs) can do.  The sample demonstrates code that's important for any Progressive Web App (PWA), such as working when there's no internet connection.

There are additional [Best practices for PWAs](./best-practices.md) to make a Progressive Web App (PWA) feel like a native app:

* Integrate within the operating system, such as by handling files.
* Perform non-trivial computing tasks.
* Get the app from app stores.


<!-- ====================================================================== -->
## See also
<!-- todo: all links in article -->
