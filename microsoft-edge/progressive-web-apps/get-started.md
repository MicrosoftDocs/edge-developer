# Get started with Progressive Web Apps

Progressive Web Apps (PWAs) are simply web apps that are [progressively enhanced](https://en.wikipedia.org/wiki/Progressive_enhancement) with native app-like features on supporting platforms and browser engines, such as launch-from-homescreen installation, offline support, and push notifications. On Windows 10 with the Microsoft Edge (EdgeHTML) engine, PWAs enjoy the added advantage of running independently of the browser window as [Universal Windows Platform](https://docs.microsoft.com/en-us/windows/uwp/get-started/whats-a-uwp) apps.

Follow this guide to turn a simple, *localhost* web app into an installable PWA for testing and debugging on Windows with Visual Studio.

> [!TIP]
> If you have an existing live site and want to convert it to a PWA for  Windows 10 and other app platforms, check out [PWA Builder](https://www.pwabuilder.com/). 

## Prerequisites

1. Download the (free) [Visual Studio Community 2017](https://www.visualstudio.com/downloads/). You can also use the *Professional*, *Enterprise*, or [*Preview*](https://www.visualstudio.com/vs/preview/) editions).

2. From the *Visual Studio Installer*, choose the following Workloads:

    - **Universal Windows Platform development**
    - **Node.js development**

## 1. Set up a basic web app

For the sake of simplicity, we'll use the Visual Studio [Node.js and Express app](https://docs.microsoft.com/en-us/visualstudio/nodejs/tutorial-nodejs) template to create a basic, localhost web app that serves up an *index.html* page. Imagine this as a placeholder for the awesome web app you'll be developing as a PWA.

1. Launch Visual Studio, and start a new project (**File** > **New** > **Project...** *or* Ctrl+Shift+N).

2. Under **JavaScript**, select **Basic Node.js Express 4 Application**. Set the name and location and click **OK**.

    ![Selecting the Node.js Express 4 project template in Visual Studio](./media/vs-nodejs-express-template.png)

3. Once your new project loads, **Build** (Ctrl+Shift+B) and **Start Debugging** (F5). Verify that your *index.html* file is loading on *http://localhost:1337*.

    ![Running your new site on localhost](./media/vs-nodejs-express-index.png)

## 2. Turn your app into a PWA

Now its time to wire up the basic [PWA requirements](../progressive-web-apps.md#requirements) for your web app: a *Web App Manifest*, *HTTPS* and *Service Workers*.

### Web App Manifest


### HTTPS

[Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) and other key PWA technologies that work with service workers (such as the [Cache](https://developer.mozilla.org/en-US/docs/Web/API/Cache), [Push](https://developer.mozilla.org/en-US/docs/Web/API/Push_API), and [Background Sync](https://developer.mozilla.org/en-US/docs/Web/API/SyncManager) APIs) only work across secure connections, which means [*HTTPS*](https://en.wikipedia.org/wiki/HTTPS) for live sites or *localhost* for  debugging purposes.

If you were to [publish this web app as a live site](https://docs.microsoft.com/en-us/visualstudio/nodejs/tutorial-nodejs#optional-publish-to-azure-app-service) (for example, by setting up an [*Azure free account*](https://azure.microsoft.com/en-us/free/)), you'll want to ensure your server is configured for HTTPS. If you're using the [Microsoft Azure App Service](https://azure.microsoft.com/en-us/services/app-service/web/) to host your site, it will will be served over HTTPS by default.

For this guide we'll continue using *http://localhost* as a placeholder for a live site served over *https://*.

### Service Workers

*Service Workers* is the key technology behind PWAs. They act as a proxy between your PWA and the network, enabling your website to act as an installed native app: serving up offline scenarios, responding to server push notifications, and running background tasks.

Service workers are event-driven background threads that run from JavaScript files served up alongside the regular scripts that power your web app. You associate a service worker with your app by *registering* it to your site's URL origin (or a specified path within it). Once registered, the service worker file is then *downloaded*, *installed*, and *activated* on the client machine. For more, *MDN web docs* has a comprehensive guide on [Using Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers) and a detailed [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) reference.

For this tutorial, we'll use a ready-made "Offline page" service worker script courtesy of [PWA Builder](https://www.pwabuilder.com/serviceworker). Mozilla's [Service Worker Cookbook](https://serviceworke.rs/) also features a number of useful service worker "recipes" you can try out and modify for your needs.

1. Open https://www.pwabuilder.com/serviceworker and select the (default) **Offline page** service worker and click the **Download service worker** button.

2. Open the download folder and copy these two files:

    - ServiceWorker1\pwabuilder-sw-register.js
    - ServiceWorker1\pwabuilder-sw.js
    
    ...to the *public* folder of your Visual Studio web app project. (From Visual Studio, use Ctrl+O to open file explorer to your project and navigate to the *public* folder). 

    Its worth reviewing the code in both of these files, to get the jist of how to register a service worker that caches a designated page (*offline.html*) and serves it when a network fetch fails. Next, we need to create a simple "offline.html" page as a placeholder for our app's offline functionality.

3. In *Solution Explorer*, right-click on the *public* folder and select **Add** > **HTML file**. Name it **offline.html**, and add a `<title>` and some body content, for example:

    ```HTML
    <!DOCTYPE html>

    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta charset="utf-8" />
        <title>Offline mode</title>
    </head>
    <body>
        You are now offline.
    </body>
    </html>
    ```
    At this point, your *public* folder should have three new files:

    ![Files added to the solution's public folder](./media/vs-nodejs-express-public.png)

4. In *Solution Explorer*, open the *routes\index.js* file, and add the following code just before the final command (`module.exports = router;`):

    ```JavaScript
    router.get('/offline.html', function (req, res) {
        res.sendFile('public/offline.html');
    });
    ```

    ...this instructs your app to serve the *offline.html* file (when your service worker fetches it for the offline cache).

5. Let's test out your PWA! Build (Ctrl+Shift+B) and Run (F5) your web app to launch Microsoft Edge and open your *localhost* page. Then,

    1. Open the Edge DevTools **Console** (Ctrl+Shift+J) and verify your *Service worker has been registered*.
    2. In the **Debugger** panel, expand the **Service Workers** control and click on your origin. In the *Service Worker Overview*, verify your service worker is activated and running:

        ![Edge DevTools Service Worker overview](./media/devtools-sw-overview.png)
    3. Still in the Debugger, expand the **Cache** control and verify that the *offline.html* page has been cached.

        ![Edge DevTools service worker Cache](./media/devtools-cache.png)

6. Time to try your PWA as an offline app! In Visual Studio, **Stop Debugging** (Shift+F5) your web app, then open Microsoft Edge (or reload) to your website's localhost address. It should now load the *offline.html* page (thanks to your service worker and offline cache)!

    ![offline.html from http://localhost:1337 loaded in Microsoft Edge](./media/offline-html.png)

## Going further

Check out the PWA guides in these areas to learn how to increase customer engagement and provide a more seamless, OS-integrated app experience:

 - **Push notifications.** Set up a push messaging service, service worker handler, and custom toast notifications to re-engage your users. Check out the Push API / Notification API examples in [*Service Workers: Going beyond the page*](https://blogs.windows.com/msedgedev/2017/12/19/service-workers-going-beyond-page/#8mU5rebKOuTt5HwG.97) to get started.

 - [**Windows tailoring.**](./windows-features.md) Using simple feature detection, your PWA can be progressively enhanced for Windows 10 customers through native Windows Runtime (WinRT) APIs, such as those for customizing Windows **Start** menu tile notifications and taskbar jumplists, and (upon permission) working with user resources, such as photos, music and calendar.

 - [**PWAs in the Microsoft Store.**](./microsoft-store.md) Learn more about the benefits of app store distribution and how to submit your PWA..
