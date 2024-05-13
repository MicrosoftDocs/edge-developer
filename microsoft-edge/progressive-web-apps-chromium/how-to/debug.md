---
title: Debug Progressive Web Apps
description: Learn about the tools to inspect and debug Progressive Web Apps, service workers, and local storage.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: pwa
ms.date: 11/25/2022
---
# Debug Progressive Web Apps

Progressive Web Apps (PWAs) are built by using web technologies. Therefore, all the tools available in Microsoft Edge DevTools are also helpful for PWAs. To learn more, refer to the [Microsoft Edge DevTools documentation](../../devtools-guide-chromium/landing/index.yml).

PWAs also use service workers, web app manifests, and other specific features and APIs that require special debugging tools.


<!-- ====================================================================== -->
## Open DevTools

PWAs can be installed locally and used in a standalone window, or used in a web browser, just like a website.

You can open DevTools on your PWA in the same way in both cases. To open DevTools, use one the following ways:

* Right-click any item in the app user interface, and then select **Inspect**.
* Press **Ctrl+Shift+I** (Windows, Linux) or **Command+Option+I** (macOS).
* Press **F12**.

To learn more, see [Open DevTools](../../devtools-guide-chromium/overview.md#open-devtools) in _Overview of DevTools_.


<!-- ====================================================================== -->
## Test your changes

When developing your PWA, you make changes to your source code and then test them.

The fastest way to test your changes is to load your PWA in a web browser by using its local development URL, for example `http://localhost:8080`. Testing in a browser is faster because you don't need to install the PWA locally first.

To test your changes, refresh the browser tab where the PWA is loaded by pressing **F5**.

Once you have a service worker which caches static files, pressing **F5** might not always reload your latest changes in the browser. To force the browser to reload your changes, use one of the following ways:

* Open DevTools, right-click **Refresh** in the browser toolbar, and click **Empty cache and hard refresh**.
* Open DevTools, open the **Application** Tool, click **Service Workers**, and then select the **Bypass for network** checkbox.

To test PWA features that are enabled by adding code in your web app manifest, you must install your PWA. If you then make further changes to your web app manifest, you must uninstall and reinstall the PWA. To learn how to uninstall your PWA, see [Managing PWAs](../ux.md#managing-pwas) in _Use Progressive Web Apps in Microsoft Edge_.


<!-- ====================================================================== -->
## Debug your service worker

Your PWA service worker is responsible for making your app faster and more reliable to network conditions.

The service worker does this by running in parallel to your app and intercepting network requests. It has its own lifecycle that's independent from your app's lifecycle.

To check if your service worker was installed correctly, and which state of its lifecycle it currently is in, use the **Service Workers** pane of the **Application** tool. To learn more, see [Service workers](../../devtools-guide-chromium/progressive-web-apps/index.md#service-workers) in _Debug Progressive Web Apps (PWAs)_.

To debug the JavaScript code running in the service worker thread, by using breakpoints, switch to the service worker thread in the **Sources** tool. To learn more, see [Change the thread context](../../devtools-guide-chromium/javascript/reference.md#change-the-thread-context) in _JavaScript debugging features_.

Service workers can run even when your app isn't running and execute background tasks to keep your app up to date. For example, they can fetch data from the server or receive push messages.

To debug your service worker background tasks, use the **Background Services** section of the **Application** tool. To learn more, see [Debug background services](../../devtools-guide-chromium/javascript/background-services.md).


<!-- ====================================================================== -->
## View your web app manifest

Your web app manifest defines the name, description, icon, and features of your application. Whether these features work correctly can depend on whether they were correctly entered in the manifest JSON file.

To check if Microsoft Edge detects your manifest file and the features in it, use the **Manifest** pane of the **Application** tool. To learn more, see [Web app manifest](../../devtools-guide-chromium/progressive-web-apps/index.md#web-app-manifest) in _Debug Progressive Web Apps (PWAs)_.

Certain PWA manifest features have dedicated tools. For example, you can [Test Progressive Web App (PWA) protocol handling](../../devtools-guide-chromium/progressive-web-apps/protocol-handlers.md).


<!-- ====================================================================== -->
## View and edit local data

To provide a rich and fast experience to your users, your PWA can store data locally. To view, edit, and delete the stored data, refer to the following DevTools documentation, depending on the storage option you chose:

* [View Cache data](../../devtools-guide-chromium/storage/cache.md).
* [View and change IndexedDB data](../../devtools-guide-chromium/storage/indexeddb.md).
* [View and edit local storage](../../devtools-guide-chromium/storage/localstorage.md).
* [View and edit session storage](../../devtools-guide-chromium/storage/sessionstorage.md).

To view the total amount of stored data used by your PWA, the available quota, and delete the data, use the **Storage** pane of the **Application** tool. To learn more, see [Storage](../../devtools-guide-chromium/progressive-web-apps/index.md#storage) in _Debug Progressive Web Apps (PWAs)_.


<!-- ====================================================================== -->
## Simulate different screen sizes

With Progressive Web Apps, you deliver an app for all devices, from one codebase. To make sure your app adapts to all device's screen sizes, use the **Device Emulation** tool in DevTools.

To learn more, see [Emulate mobile devices (Device Emulation)](../../devtools-guide-chromium/device-mode/index.md).

Note that the **Device Emulation** tool is only available when DevTools is used in the browser, and not when DevTools is used in an installed PWA. Installed PWAs have their own standalone windows that are very easy to resize to test your app under different screen sizes.
