---
description: An overview of the basics of Progressive Web Apps (PWAs), and tools for building Progressive Web Apps on Windows.
title: Get started with Progressive Web Apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 03/16/2021
ms.topic: conceptual
ms.prod: microsoft-edge
keywords: progressive web apps, PWA, Edge, Windows, PWABuilder, web manifest, service worker, push
---
# Get started with Progressive Web Apps

<!-- todo: make sure screenshots of DevTools are up-to-date -->

Progressive Web Apps (PWAs) are web apps that are [progressively enhanced][WikiProgressiveEnhancement].  The progressive enhancements include app-like features, such as installation, offline support, and push notifications.  You can also package your PWA for app stores.  Possible app stores include the Microsoft Store, Google Play, Mac App Store, and more.  The Microsoft Store is the commercial app store built into Windows 10.

The following guide gives you an overview of PWA basics by creating a simple web app and extending it as a PWA.  The finished project works across modern browsers.

> [!TIP]
> You can use [PWABuilder](pwabuilder.md) to create a new PWA, enhance your existing PWA, or package your PWA for app stores.


<!-- ====================================================================== -->
## Prerequisites

*   Use [Visual Studio Code][VisualstudioCodeMain] to edit your PWA source code.
*   Use [Node.js][NodejsMain] as your local web server.


<!-- ====================================================================== -->
## Creating a basic web app

To create an empty web app, follow the steps in [Node Express App Generator][ExpressjsApplicationGenerator], and name your app `MySamplePwa`.

In the prompt, run the following commands.

```shell
npx express-generator --no-view
```

```shell
npm install
```

The commands create an empty web app and install any dependencies.

You now have a simple, functional web app.  To start your web app, run the following command.

```shell
npm start
```

Now browse to `http://localhost:3000` to view your new web app.

:::image type="complex" source="./media/visual-studio-nodejs-express-index.png" alt-text="Running your new PWA on localhost" lightbox="./media/visual-studio-nodejs-express-index.png":::
   Running your new PWA on localhost
:::image-end:::


## Getting started building a PWA

Now that you have a simple web app, extend it as a PWA by adding the three requirements for PWAs: [HTTPS](#step-1---use-https), a [Web App Manifest](#step-2---create-a-web-app-manifest), and a [Service Worker](#step-3---add-a-service-worker).


## Step 1 - Use HTTPS

Key parts of the PWA platform, such as [Service Workers][MDNServiceWorkerApi], require the use of HTTPS.  When your PWA goes live, you must publish it to an HTTPS URL.

For debugging purposes, Microsoft Edge also permits `http://localhost` to use the PWA APIs.

[Publish your web app as a live site][VisualStudioNodejsTutorialPublishAzureAppService], but ensure your server is configured for HTTPS.  For example, you can create an [Azure free account][AzureCreateFreeAccount].  Host your site on the [Microsoft Azure App Service][AzureWebApps] and it is served over HTTPS by default.

Many hosts now offer HTTPS by default, but if your host doesn't, Let's Encrypt offers a free alternative for creating the necessary certificates.

In the following guide, you use `http://localhost` to build your PWA.


## Step 2 - Create a Web App Manifest

A [Web App Manifest][MDNWebAppManifest] is a JSON file containing metadata about your app, such as name, description, icons, and more.

To add an app manifest to the web app:

1.  In Visual Studio Code, select **File** > **Open Folder** and select the `MySamplePwa` directory you created earlier.
1.  Select `Ctrl`+`N` to create a new file, and paste in the following code snippet.

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
1.  Add a 512x512 app icon image named `icon512.png` to `/MySamplePwa/public/images`.  You can use the [sample image](./media/progressive-web-app.png) for testing purposes.
1.  In Visual Studio Code, open `/public/index.html`, and add the following code snippet inside the `<head>` tag.

    ```html
    <link rel="manifest" href="/manifest.json">
    ```


## Step 3 - Add a Service Worker

Service workers are the key technology behind PWAs, enabling scenarios like offline support, advanced caching, and running background tasks previously limited to native apps.

Service workers are background tasks that intercept network requests from your web app.  Service workers attempt to complete tasks, even when your PWA is not running.  Tasks include actions such as the following:

*   Serving requested resources from a cache.
*   Sending push notifications.
*   Running background fetch tasks.
*   Badging icons.

Service workers are defined in a special JavaScript file.  For more information, navigate to [Using Service Workers][MDNUsingServiceWorkers] and [Service Worker API][MDNServiceWorkerApi].

To build a service worker in your project, use the **Cache-first network** service worker recipe from [PWA Builder][PwaBuilderServiceWorker].

1.  Navigate to [pwabuilder.com/serviceworker][PwaBuilderServiceWorker], select the **Cache-first network** service worker, and select the **Download** button.  The downloaded file contains the following files:

    *   `pwabuilder-sw-register.js`
    *   `pwabuilder-sw.js`

1.  Copy the downloaded files to the `public` folder in your web app project.

1.  In Visual Studio Code, open `/public/index.html` and add the following code snippet inside the `<head>` tag.

    ```html
    <script type="module" src="/pwabuilder-sw-register.js"></script>
    ```

Your web app now has a service worker that uses the cache-first strategy.  You new service worker fetches resources from the cache first, and from the network only as needed.  Cached resources include images, JavaScript, CSS, and HTML.

Use the following steps to confirm that your service worker runs.

1.  Navigate to your web app using `http://localhost:3000`.  If your web app is not available, run the following command.

    ```shell
    npm start
    ```

1.  In Microsoft Edge, select `F12` to open the Microsoft Edge DevTools.  Select **Application**, then **Service Workers** to view the service workers.  If the service worker is not displayed, refresh the page.

    :::image type="complex" source="./media/devtools-sw-overview.png" alt-text="Microsoft Edge DevTools Service Worker overview" lightbox="./media/devtools-sw-overview.png":::
       Microsoft Edge DevTools Service Worker overview
    :::image-end:::

1.  View the service worker cache by expanding **Cache Storage** and select **pwabuilder-precache**.  All of the resources cached by the service worker should be displayed.  The resources cached by the service worker include the app icon, app manifest, CSS, and JavaScript files.

    :::image type="complex" source="./media/devtools-cache.png" alt-text="Service Worker cache in Microsoft Edge DevTools" lightbox="./media/devtools-cache.png":::
       Service Worker cache in Microsoft Edge DevTools (F12)
    :::image-end:::

1.  Try your PWA as an offline app.  In DevTools, select **Network** then change the **Online** status to **Offline**.

    :::image type="complex" source="./media/devtools-offline.png" alt-text="Setting app to offline mode in Microsoft Edge DevTools" lightbox="./media/devtools-offline.png":::
       Setting app to offline mode in Microsoft Edge DevTools
    :::image-end:::

1.  Refresh your app and it should display the offline mechanism for serving the resources of your app from the cache.

    :::image type="complex" source="./media/visual-studio-nodejs-express-index.png" alt-text="PWA running offline" lightbox="./media/visual-studio-nodejs-express-index.png":::
       PWA running offline
    :::image-end:::

<!-- todo: add an ending of the article here -->


<!-- ====================================================================== -->
## Next steps

The following steps include additional tasks to help you understand building real-world PWAs:

*   Manage and store push subscriptions.
*   [Encrypt][NPMWebPushEncrypt] payload data.
*   Responsive design.
*   Deep-linking.
*   [Cross-browser testing][BrowserStackTestEdgeBrowser].
*   Implement validation and testing practices such as [Webhint][Webhint].


<!-- ====================================================================== -->
## See also

*   [Progressive Web Apps on MDN web docs][MDNProgressiveWebApps]
*   [Progressive Web Apps on web.dev][WebDevProgressiveWebApps]
*   [Hacker News readers as Progressive Web Apps][HackerNewsProgressiveWebApps] - Compares different frameworks and performance patterns for implementing a sample PWA (Hacker News reader).
*   [Myth Busting PWAs][Davrous20191018MythBustingPwasNewEdgeEdition]
*   [A Progressive Roadmap for your Progressive Web App][CloudfourThinksProgressiveRoadmapYourWebApp]
*   [Offline POSTs with Progressive Web Apps][MediumWebEdgeOfflinePostsProgressiveWebApps]
*   [PWA Q&A][AaronGustafsonNotebookPwaQa]
*   [Betting on the Web][JoretegBlogBettingWeb]
*   [Naming Progressive Web Apps][Fberriman20170626NamingProgressiveWebApps]
*   [Designing And Building A Progressive Web Application Without A Framework (Part 1)][Smashingmagazine201907ProgressiveWebApplicationFrameworkPart1]
*   [Designing And Building A Progressive Web Application Without A Framework (Part 2)][Smashingmagazine201907ProgressiveWebApplicationFrameworkPart2]
*   [Designing And Building A Progressive Web Application Without A Framework (Part 3)][Smashingmagazine201907ProgressiveWebApplicationFrameworkPart3]


<!-- ====================================================================== -->
<!-- links -->
[VisualStudioNodejsTutorialPublishAzureAppService]: /azure/javascript/tutorial-vscode-azure-app-service-node-03 "Deploy a Node.js app to Azure with Visual Studio Code | Microsoft Docs"

[AzureCreateFreeAccount]: https://azure.microsoft.com/free "Create Azure free account | Microsoft Azure"
[AzureWebApps]: https://azure.microsoft.com/services/app-service/web "Web Apps | Microsoft Azure"

[WindowsBlogsWebNotificationsEdge]: https://blogs.windows.com/msedgedev/2016/05/16/web-notifications-microsoft-edge#UAbvU2ymUlHO8EUV.97 "Web Notifications in Microsoft Edge | Windows Blogs"

[VisualstudioCodeMain]: https://code.visualstudio.com "Visual Studio Code"

[AaronGustafsonNotebookPwaQa]: https://www.aaron-gustafson.com/notebook/pwa-qa "PWA Q&A"

[BrowserStackTestEdgeBrowser]: https://www.browserstack.com/test-on-microsoft-edge-browser "Free Microsoft Edge Browser Testing on Windows 10 | BrowserStack"

[CloudfourThinksProgressiveRoadmapYourWebApp]: https://cloudfour.com/thinks/a-progressive-roadmap-for-your-progressive-web-app "A Progressive Roadmap for your Progressive Web App"

[Davrous20191018MythBustingPwasNewEdgeEdition]: https://www.davrous.com/2019/10/18/myth-busting-pwas-the-new-edge-edition "Myth Busting PWAs – The New Edge Edition"

[ExpressjsApplicationGenerator]: https://expressjs.com/starter/generator.html "Express application generator | Express"

[Fberriman20170626NamingProgressiveWebApps]: https://fberriman.com/2017/06/26/naming-progressive-web-apps "Naming Progressive Web Apps"

[HackerNewsProgressiveWebApps]: https://hnpwa.com "Hacker News readers as Progressive Web Apps"

[JoretegBlogBettingWeb]: https://joreteg.com/blog/betting-on-the-web "Betting on the Web"

[MDNDedicatedWorkerGlobalScopePostMessage]: https://developer.mozilla.org/docs/Web/API/
[MDNNotificationsApi]: https://developer.mozilla.org/docs/Web/API/Notifications_API "Notifications API | MDN"
[MDNProgressiveWebApps]: https://developer.mozilla.org/Apps/Progressive "Progressive web apps (PWAs) | MDN"
[MDNPushApi]: https://developer.mozilla.org/docs/Web/API/Push_API "Push API | MDN"
[MDNPushManager]: https://developer.mozilla.org/docs/Web/API/PushManager "PushManager | MDN"
[MDNServiceWorkerApi]: https://developer.mozilla.org/docs/Web/API/Service_Worker_API "Service Worker API | MDN"
[MDNUsingServiceWorkers]: https://developer.mozilla.org/docs/Web/API/Service_Worker_API/Using_Service_Workers "Using Service Workers | MDN"
[MDNWebAppManifest]: https://developer.mozilla.org/docs/Web/Manifest "Web App Manifest | MDN"

[MediumWebEdgeOfflinePostsProgressiveWebApps]: https://medium.com/web-on-the-edge/offline-posts-with-progressive-web-apps-fc2dc4ad895 "Offline POSTs with Progressive Web Apps"

[MozillaServicesSendingVapidWebPushNotificationsPush]: https://blog.mozilla.org/services/2016/08/23/sending-vapid-identified-webpush-notifications-via-mozillas-push-service "Sending VAPID identified WebPush Notifications via Mozilla's Push Service | Mozilla Services"

[NodejsMain]: https://nodejs.org "Node.js"

[NPMWebPush]: https://www.npmjs.com/package/web-push "web-push | npm"
[NPMWebPushEncrypt]: https://www.npmjs.com/package/web-push#encryptuserpublickey-userauth-payload-contentencoding "encrypt(userPublicKey, userAuth, payload, contentEncoding) - web-push | NPM"
[NPMWebPushUsage]: https://www.npmjs.com/package/web-push#usage "Usage - web-push | NPM"

[ProgressiveWebApps]: https://pwa.rocks "Progressive Web Apps"

[PwaBuilderServiceWorker]: https://www.pwabuilder.com/serviceworker "Service Worker | PWA Builder"

[ServiceWorkerCookbookPushRichDemo]: https://serviceworke.rs/push-rich_demo.html "Push Rich Demo | ServiceWorker Cookbook"

[Smashingmagazine201907ProgressiveWebApplicationFrameworkPart1]: https://www.smashingmagazine.com/2019/07/progressive-web-application-pwa-framework-part-1 "Designing And Building A Progressive Web Application Without A Framework (Part 1)"

[Smashingmagazine201907ProgressiveWebApplicationFrameworkPart2]: https://www.smashingmagazine.com/2019/07/progressive-web-application-pwa-framework-part-2 "Designing And Building A Progressive Web Application Without A Framework (Part 2)"

[Smashingmagazine201907ProgressiveWebApplicationFrameworkPart3]: https://www.smashingmagazine.com/2019/07/progressive-web-application-pwa-framework-part-3 "Designing And Building A Progressive Web Application Without A Framework (Part 3)"

[VapidkeysMain]: https://vapidkeys.com "Secure VAPID Key Generator | VapidKeys"

[Webhint]: https://webhint.io "webhint"

[WebDevProgressiveWebApps]: https://developers.google.com/web/progressive-web-apps "Progressive Web Apps | web.dev"

[WikiProgressiveEnhancement]: https://en.wikipedia.org/wiki/Progressive_enhancement "Progressive enhancement | Wikipedia"
