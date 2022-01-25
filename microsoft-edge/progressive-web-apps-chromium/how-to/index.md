---
title: Get started with Progressive Web Apps
description: Overview of the basics of Progressive Web Apps (PWAs), and tools for building Progressive Web Apps on Windows.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 11/19/2021
---
# Get started with Progressive Web Apps

<!-- todo: make sure screenshots of DevTools are up-to-date -->

Progressive Web Apps (PWAs) are web apps that are [progressively enhanced](https://en.wikipedia.org/wiki/Progressive_enhancement).  The progressive enhancements include app-like features, such as installation, offline support, and push notifications.

You can also package your PWA for app stores, such as Microsoft Store, Google Play, and Mac App Store.  The Microsoft Store is the commercial app store that's built into Windows 10 and later.

In this overview of PWA basics, you create a simple web app and extend it as a PWA.  The finished project works across modern browsers.

> [!TIP]
> You can use [PWABuilder](https://www.pwabuilder.com) to create a new PWA, enhance your existing PWA, or package your PWA for app stores.


<!-- ====================================================================== -->
## Prerequisites

*   Install [Visual Studio Code](https://code.visualstudio.com) to edit your PWA source code.
*   Install [Node.js](https://nodejs.org) as your local web server.


<!-- ====================================================================== -->
## Creating a basic web app

To create an empty web app, follow the steps in [Node Express App Generator](https://expressjs.com/starter/generator.html), and name your app `MySamplePwa`.

In the prompt, run the following commands, which create an empty web app and install any dependencies:

```Shell
npx express-generator --no-view
```

```Shell
npm install
```

You now have a simple, functional web app.  To start your web app, run the following command:

```Shell
npm start
```

Now browse to `http://localhost:3000` to view your new web app.

:::image type="content" source="../media/visual-studio-nodejs-express-index.png" alt-text="Running your new PWA on localhost.":::


<!-- ====================================================================== -->
## Getting started building a PWA

Now that you have a simple web app, extend it as a Progressive Web App (PWA) by adding the three requirements for PWAs:

*  [HTTPS](#step-1---use-https).
*  A [Web App Manifest](#step-2---create-a-web-app-manifest).
*  A [Service Worker](#step-3---add-a-service-worker).


<!-- ====================================================================== -->
## Step 1 - Use HTTPS

Key parts of the Progressive Web Apps platform, such as [Service Workers](https://developer.mozilla.org/docs/Web/API/Service_Worker_API), require using HTTPS.  When your PWA goes live, you must publish it to an HTTPS URL.  Many hosts now offer HTTPS by default, but if your host doesn't, Let's Encrypt offers a free alternative for creating the necessary certificates.

For debugging purposes, Microsoft Edge also permits `http://localhost` to use the PWA APIs.  In this tutorial, you use `http://localhost` to build your PWA.

[Publish your web app as a live site](/azure/javascript/tutorial-vscode-azure-app-service-node-03), but make sure your server is configured for HTTPS.  For example, you can create an [Azure free account](https://azure.microsoft.com/free).  If you host your app site on the [Microsoft Azure App Service](https://azure.microsoft.com/services/app-service/web), it's served over HTTPS by default.


<!-- ====================================================================== -->
## Step 2 - Create a Web App Manifest

A [Web App Manifest](https://developer.mozilla.org/docs/Web/Manifest) is a JSON file containing metadata about your app, such as name, description, icons, and more.

To add an app manifest to the web app:

1.  In Visual Studio Code, select **File** > **Open Folder** and then select the `MySamplePwa` directory that you created earlier.
1.  Press `Ctrl`+`N` to create a new file.
1.  Copy and paste the following code into the new file:

    ```json
    {
        "lang": "en-us",
        "name": "My Sample PWA",
        "short_name": "SamplePWA",
        "description": "A sample PWA for testing purposes",
        "start_url": "/",
        "background_color": "#2f3d58",
        "theme_color": "#2f3d58",
        "orientation": "any",
        "display": "standalone",
        "icons": [
            {
                "src": "/icon512.png",
                "sizes": "512x512"
            }
        ]
    }
    ```

1.  Save the file as `/MySamplePwa/public/manifest.json`.
1.  Add a 512x512 app icon image named `icon512.png` to `/MySamplePwa/public/images`.  You can use the [sample image](../media/progressive-web-app.png) for testing purposes.
1.  In Visual Studio Code, open `/public/index.html`, and add the following code inside the `<head>` tag.

    ```html
    <link rel="manifest" href="/manifest.json">
    ```


<!-- ====================================================================== -->
## Step 3 - Add a Service Worker

Service workers are the key technology behind PWAs.  Service workers enable scenarios that were previously limited to native apps, including:
*  Offline support.
*  Advanced caching.
*  Running background tasks.

Service workers are specialized [Web Workers](https://developer.mozilla.org/docs/Web/API/Web_Workers_API) that intercept network requests from your web app.  Service workers can run tasks even when your PWA isn't running, including:

*   Serving requested resources from a cache.
*   Sending push notifications.
*   Running background fetch tasks.
*   Badging icons.

Service workers are defined in a special JavaScript file, described in [Using Service Workers](https://developer.mozilla.org/docs/Web/API/Service_Worker_API/Using_Service_Workers) and [Service Worker API](https://developer.mozilla.org/docs/Web/API/Service_Worker_API).

To build a service worker in your project, use the **Cache-first network** Service Worker recipe from PWA Builder, as follows.

1. Copy the source files [pwabuilder-sw-register.js](https://github.com/pwa-builder/pwabuilder-serviceworkers/blob/master/serviceWorker6/pwabuilder-sw-register.js) and [pwabuilder-sw.js](https://github.com/pwa-builder/pwabuilder-serviceworkers/blob/master/serviceWorker6/pwabuilder-sw.js) to the `public` folder in your web app project.

1.  In Visual Studio Code, open `/public/index.html`.

1.  Inside the `<head>` tag, add the following code.

    ```html
    <script type="module" src="/pwabuilder-sw-register.js"></script>
    ```

Your web app now has a service worker that uses the cache-first strategy.  The new service worker fetches resources from the cache first, and from the network only as needed.  Cached resources include images, JavaScript, CSS, and HTML.

Confirm that your service worker runs, as follows:

1.  Go to your web app at `http://localhost:3000`.  If your web app isn't available, run the following command:

    ```Shell
    npm start
    ```

1.  In Microsoft Edge, select `F12` to open DevTools.  Select **Application**, then **Service Workers** to view the service workers.  If the service worker isn't displayed, refresh the page.

    :::image type="content" source="../media/devtools-sw-overview.png" alt-text="DevTools Service Worker overview." lightbox="../media/devtools-sw-overview.png":::
    <!-- lightbox justified because large, detailed image -->

1.  View the service worker cache by expanding **Cache Storage** and select **pwabuilder-precache**.  All of the resources cached by the service worker should be displayed.  The resources cached by the service worker include the app icon, app manifest, CSS, and JavaScript files.

    :::image type="content" source="../media/devtools-cache.png" alt-text="Service Worker cache in DevTools." lightbox="../media/devtools-cache.png":::
    <!-- lightbox justified because large, detailed image -->

1.  Try your PWA as an offline app, as follows.  In DevTools, select **Network**, and then change the status from **Online** to **Offline**.

    :::image type="content" source="../media/devtools-offline.png" alt-text="Setting the app to offline mode in DevTools." lightbox="../media/devtools-offline.png":::
    <!-- lightbox justified because large, detailed image -->

1.  Refresh your app.  It should display the offline mechanism for serving the resources of your app from the cache.

    :::image type="content" source="../media/visual-studio-nodejs-express-index.png" alt-text="A PWA running offline.":::

The app can now be installed.
<!-- todo: Expand the ending of the article or section.  Show a breakdown of what the service worker does. -->


<!-- ====================================================================== -->
## Best practices and next steps

To build a robust, real-world PWA, consider the following best practices for web app development.

### Cross-browser compatibility

Test your app for [cross-browser compatibility](https://developer.mozilla.org/docs/Learn/Tools_and_testing/Cross_browser_testing).  Make sure your PWA works, by testing it in different browsers and environments.  See [Tools](https://developer.microsoft.com/microsoft-edge/tools/remote) at _Microsoft Edge Developer_.

### Responsive design

Use fluid layouts and flexible images.  [Responsive design](https://en.wikipedia.org/wiki/Responsive_web_design) includes the following elements that adapt your UX to your user's device:

*   CSS [grid](https://developer.mozilla.org/docs/Web/CSS/CSS_Grid_Layout).
*   [Flexbox](https://developer.mozilla.org/docs/Web/CSS/CSS_Flexible_Box_Layout).
*   [Media queries](https://developer.mozilla.org/docs/Web/CSS/Media_Queries).
*   [Responsive images](https://developer.mozilla.org/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images).

To test your app locally, use [device emulation tools](../../devtools-guide-chromium/device-mode/testing-other-browsers.md) from your browser.  To test your app directly on a target device, create a remote debugging session on [Windows](../../devtools-guide-chromium/remote-debugging/windows.md) or [Android](../../devtools-guide-chromium/remote-debugging/index.md).

### Support deep linking

Support [Deep linking](https://en.wikipedia.org/wiki/Deep_linking).  Route each page of your site to a unique URL so existing users can help you engage an even broader audience through social media sharing.

### Provide a rich offline experience

Provide a rich [Offline experience](./offline.md).  Make the app work even if the user's device is offline.  Provide a custom offline page rather than using the browser's default offline page.

### Use validation and testing practices

Use software validation and testing practices.  Use code quality tools such as the [Webhint](https://webhint.io) linter to optimize the efficiency, robustness, safety, and accessibility of your app.


<!-- ====================================================================== -->
## See also

*   [Progressive Web Apps on MDN web docs](https://developer.mozilla.org/Apps/Progressive)
*   [Progressive Web Apps on web.dev](https://developers.google.com/web/progressive-web-apps)
*   [Hacker News readers as Progressive Web Apps](https://hnpwa.com) - Compares different frameworks and performance patterns for implementing a sample PWA.
*   [Myth Busting PWAs](https://www.davrous.com/2019/10/18/myth-busting-pwas-the-new-edge-edition)
*   [A Progressive Roadmap for your Progressive Web App](https://cloudfour.com/thinks/a-progressive-roadmap-for-your-progressive-web-app)
*   [Offline POSTs with Progressive Web Apps](https://medium.com/web-on-the-edge/offline-posts-with-progressive-web-apps-fc2dc4ad895)
*   [PWA Q&A](https://www.aaron-gustafson.com/notebook/pwa-qa)
*   [Betting on the Web](https://joreteg.com/blog/betting-on-the-web)
*   [Naming Progressive Web Apps](https://fberriman.com/2017/06/26/naming-progressive-web-apps)
*   [Designing And Building A Progressive Web Application Without A Framework (Part 1)](https://www.smashingmagazine.com/2019/07/progressive-web-application-pwa-framework-part-1)
*   [Designing And Building A Progressive Web Application Without A Framework (Part 2)](https://www.smashingmagazine.com/2019/07/progressive-web-application-pwa-framework-part-2)
*   [Designing And Building A Progressive Web Application Without A Framework (Part 3)](https://www.smashingmagazine.com/2019/07/progressive-web-application-pwa-framework-part-3)
