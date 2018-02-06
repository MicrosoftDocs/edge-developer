---
description: Progressive Web Apps run natively on Windows 10. Here's everything you need to know as a web developer.
title: Progressive Web Apps on Windows
author: erikadoyle
ms.author: edoyle
ms.date: 1/10/2018
ms.topic: article
ms.prod: microsoft-edge
keywords: progressive web apps, PWA, Edge, JavaScript, Windows, UWP, Microsoft Store
---

# Progressive Web Apps on Windows

With Progressive Web Apps (or simply *PWA*s) you dont have to decide between using open web technologies for cross-platform interoperability and providing your users with a native app-like experience customized for their device. That's because PWAs are just websites that are [*progressively enhanced*](https://alistapart.com/article/understandingprogressiveenhancement) to function like native apps on supporting platforms. The qualities of a PWA combine the best of the web and native apps. 

<table style="border:none;">
  <tr>
    <td style="vertical-align:top;">
      <img style="display:block;width:25%;" src="./progressive-web-apps/media/i_search.png" />
      <div style="font-weight:bold;"><a href="https://developer.mozilla.org/en-US/docs/Web/Apps/Modern/Discoverable">Discoverable</a></div>
      <div style="font-size:0.9em">From web search results and supporting app stores</div>
    </td>
    <td style="vertical-align:top;">
      <img style="display:block;width:25%;" src="./progressive-web-apps/media/i_package.png"/>
      <div style="font-weight:bold;"><a href="https://developer.mozilla.org/en-US/docs/Web/Apps/Modern/Installable">Installable</a></div>
      <div style="font-size:0.9em">Pin and launch from the home screen</div>
    </td>
    <td style="vertical-align:top;">
      <img style="display:block;width:25%;" src="./progressive-web-apps/media/i_push-notification.png" />
      <div style="font-weight:bold;"><a href="https://developer.mozilla.org/en-US/docs/Web/Apps/Modern/Re-engageable">Re-engageable</a></div>
      <div style="font-size:0.9em">Send push notifications, even when the app isn't active</div>
    </td>
    <td style="vertical-align:top;">
      <img style="display:block;width:25%;" src="./progressive-web-apps/media/i_offline.png" />
      <div style="font-weight:bold;"><a href="https://developer.mozilla.org/en-US/docs/Web/Apps/Modern/Network_independent">Network Independent</a></div>
      <div style="font-size:0.9em">Works offline and in low-network conditions </div>
    </td>
  </tr>
  <tr style="height:150px">
    <td style="vertical-align:top;">
      <img style="display:block;width:25%;" src="./progressive-web-apps/media/i_progressive.png" />
      <div style="font-weight:bold;"><a href="https://developer.mozilla.org/en-US/docs/Web/Apps/Modern/Progressive">Progressive</a></div>
      <div style="font-size:0.9em">Experience scales up (or down) with device capabilities</div>
    </td>
    <td style="vertical-align:top;">
      <img style="display:block;width:25%;" src="./progressive-web-apps/media/i_security.png" />
      <div style="font-weight:bold;"><a href="https://developer.mozilla.org/en-US/docs/Web/Apps/Modern/Safe">Safe</a></div>
      <div style="font-size:0.9em">Provides a secure HTTPS endpoint and other user safeguards</div>
    </td>
    <td style="vertical-align:top;">
      <img style="display:block;width:25%;" src="./progressive-web-apps/media/i_responsive.png" />
      <div style="font-weight:bold;"><a href="https://developer.mozilla.org/en-US/docs/Web/Apps/Modern/Responsive">Responsive</a></div>
      <div style="font-size:0.9em">Adapts to the user's screen size / orientation and input method</div>
    </td>
    <td style="vertical-align:top;">
      <img style="display:block;width:25%;" src="./progressive-web-apps/media/i_link.png" />
      <div style="font-weight:bold;"><a href="https://developer.mozilla.org/en-US/Apps/Progressive/Linkable">Linkable</a></div>
      <div style="font-size:0.9em">Share and launch from a standard hyperlink</div>
    </td>
  </tr>
</table>

By building or converting your existing site to a PWA, you can better engage your existing audience with push notifications and offline support. At the same time, you can continue building your audience on the open web, as users discover your PWA through search and link-sharing.

## PWAs on Windows 10

When you distribute your *Progressive Web App* through the [Microsoft Store](https://developer.microsoft.com/en-us/store), the entire Windows 10 install base of 600 million active monthly users is your potential app audience!

When installed on Windows 10, PWAs run as [Universal Windows Platform](https://docs.microsoft.com/en-us/windows/uwp/get-started/universal-application-platform-guide) apps and gain these technical advantages over running in the browser:

 - Standalone window

 - Independent process from browser (isolated cache, less overhead)

 - No storage quota (for IndexedDB, local storage, etc.)

 - Offline and background processes

 - Access to [Windows Runtime (WinRT)](https://docs.microsoft.com/en-us/uwp/api/) APIs via JavaScript (for device camera, calendar, speech interaction,...)

 [Here's how to get started](./progressive-web-apps/get-started.md) converting your web app to a PWA, making sure it works great on Windows 10, and distributing it in the Microsoft Store.

## Requirements

To be a *Progressive Web App*, your server-hosted web app will at minimum require:

  - [X] [**Web app manifest**](https://developer.mozilla.org/en-US/docs/Web/Manifest). Provide a JSON-based metadata file describing key information about your web app (such as icons, language, and URL entry point) so that Windows 10 and other host platforms can provide your PWA users with an installable, native app-like experience.

  - [X] [**HTTPS**](https://en.wikipedia.org/wiki/HTTPS). Protect your users by providing a secure connection for server/app communication. 
  
  - [X] [**Service workers**](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API). Use *service worker* threads to act as network proxies between your server and client app in order to provide offline experiences, push notifications, and background data syncing.

To be a *great* PWA, your app will also need:

  - [X] [**Cross-browser compatibility**](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing). Ensure your PWA works by [testing](https://developer.microsoft.com/en-us/microsoft-edge/tools/remote/) in different browsers and environments. On Windows 10, be sure to test your app both in the Microsoft Edge browser and also in its full PWA experience: as an installed, standalone Windows 10 app (powered by the *EdgeHTML* engine). 
  
  - [X] [**Responsive design**](https://en.wikipedia.org/wiki/Responsive_web_design). Employ fluid layouts and flexible images with CSS [grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) and/or [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout), [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries), and [responsive images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) to adapt your UX to your user's device. Use device [emulation tools](./devtools-guide/emulation.md) from your browser to test locally, or set up a [remote debugging session](./progressive-web-apps/get-started.md#remote-debugging-with-edge-devtools-protocol) to test directly on a target device. On Windows 10, PWAs can also be [tailored for form factors](https://docs.microsoft.com/en-us/windows/uwp/design/devices/index#windows-iot-devices) beyond desktop, phone and tablet, including: [Xbox and TV](https://docs.microsoft.com/en-us/windows/uwp/design/devices/designing-for-tv), [Surface Hub](https://developer.microsoft.com/en-us/windows/surfacehub), [Windows IoT](https://developer.microsoft.com/en-us/windows/iot) and [Windows Mixed Reality](https://developer.microsoft.com/en-us/windows/mixed-reality) devices.
  
  - [X] [**Deep linking**](https://en.wikipedia.org/wiki/Deep_linking). Route each page of your site to a unique URL so existing users can help you engage an even broader audience through social media sharing.

  - [X] [**Best practices**](https://sonarwhal.com/). Use code quality tools like the [Sonarwhal](https://sonarwhal.com/) linter and Google's [Lighthouse](https://developers.google.com/web/tools/lighthouse/) auditing system to optimize the efficiency, robustness, safety and accessibility of your app.

To submit your *Progressive Web App* to the [Microsoft Store](https://developer.microsoft.com/en-us/store), you'll need:

 - [X] A [Microsoft developer account](https://docs.microsoft.com/en-us/windows/uwp/publish/opening-a-developer-account)
 - [X] Completed [steps for publishing a Windows app](https://docs.microsoft.com/en-us/windows/uwp/publish/)

In the coming months, existing PWAs on the web meeting [specific criteria](./progressive-web-apps/microsoft-store.md#criteria-for-automatic-submission) will be auto-indexed by the Bing search engine into the Microsoft Store (where developers can directly manage them for their Windows 10 audience).

Check out [PWAs in the Microsoft Store](./progressive-web-apps/microsoft-store.md) for further details.

## Current availability

Browser engine support for *Progressive Web Apps* calls for a number of architectural components, the most significant being the networking infrastructure underlying the [*Fetch API*](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). We've been building out PWA support in EdgeHTML for several releases now. 

Here's the current status of standards-based PWA technologies in EdgeHTML and Windows:

Technology | Purpose | Availability | Usage notes
| - | - | - | -
[Web Application Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest) | Provides app metadata to the host OS for enabling installation and app store promotion. Required for PWAs in the Microsoft Store. | [In development](https://developer.microsoft.com/en-us/microsoft-edge/platform/status/webapplicationmanifest/)  | For now, you can use [PWA Builder](https://www.pwabuilder.com/generator) to generate a W3C-compliant JSON manifest and package your app for various OS platforms. For Windows, *PWA Builder* will translate your JSON manifest into the `.appxmanifest` (XML) format required by Windows 10 apps.
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) | Provides asynchronous networking (requests, reponses) for page resources |[EdgeHTML 14+](https://docs.microsoft.com/en-us/microsoft-edge/dev-guide/whats-new/edgehtml-14) / Build 14393+ | The *Service Worker API* syntax is based on Fetch-based networking APIs. You can also use Fetch API more generally as a modern alternative to *XMLHttpRequest*. 
[Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) | Provides an offline-capable web app model / network proxy, where event-driven scripts run independent of web pages  | **[EdgeHTML16+](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide/debugger/progressive-web-apps) / Build 16299+ | **Experimental support (behind a flag) shipped in EdgeHTML 16. This feature is [turned on by default](https://developer.microsoft.com/en-us/microsoft-edge/platform/changelog/desktop/17063/) in current Windows Insider Preview builds (17063+).
[Cache API](https://developer.mozilla.org/en-US/docs/Web/API/Push_API) | Provides a storage mechanism for network request/response pairs | **[EdgeHTML16+](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide/debugger/progressive-web-apps) / Build 16299+ | ***Cache API* is technically part of *Service Worker API*  and shares the same status (experimental) and option in `about:flags` ("Enable service workers").
[Push API](https://developer.mozilla.org/en-US/docs/Web/API/Push_API) | Enables a service worker to subscribe to push notifications |**[EdgeHTML16+](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide/debugger/progressive-web-apps) / Build 16299+ | **Experimental *Push API* is also part of the service worker flag. <br /><br /> Windows 10 apps (including PWAs) require the [Windows Push Notification Service](https://docs.microsoft.com/en-us/windows/uwp/controls-and-patterns/tiles-and-notifications-windows-push-notification-services--wns--overview) (WNS) to deliver push notifications. WNS recently added support for the W3C *Push API*.
[Notifications API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API) | Enables a service worker to display a system notification to the user upon push message | [EdgeHTML 14+](https://docs.microsoft.com/en-us/microsoft-edge/dev-guide/whats-new/edgehtml-14) / Build 14393+ | *Web Notifications* in EdgeHTML are fully integrated with the Windows 10 [*Action Center*](https://support.microsoft.com/en-us/help/4028678/windows-change-notification-settings-in-action-center), where users can manage app notifications and set [*Quiet Hours*](https://support.microsoft.com/en-us/help/4026996/windows-turn-quiet-hours-on-in-windows-10).
[Background Sync API](https://developer.mozilla.org/en-US/docs/Web/API/SyncManager) | Provides an API for notifying a service worker that the user has come back online and for scheduling periodic events to synchronize local data with the server | [In development](https://developer.microsoft.com/en-us/microsoft-edge/platform/status/backgroundsyncapi/) | 

Here's the current status of *Microsoft Store* support for PWAs on Windows 10:

Store submission method | Status | Details
| - | - | -
Manual (developer initiated) | Available | Check out [*PWAs in the Microsoft Store*](./progressive-web-apps/microsoft-store.md) to get started. 
Automatic (auto-indexed with Bing) | Just starting | We're currently piloting the PWA onboarding process with a limited subset of app partners. In the coming months we'll be welcoming PWAs across the mainstream web to the Microsoft Store. Check out [*PWA indexing with Bing*](./progressive-web-apps/microsoft-store.md#criteria-for-automatic-submission) to learn more about Microsoft Store requirements for automatic PWA listings. 
