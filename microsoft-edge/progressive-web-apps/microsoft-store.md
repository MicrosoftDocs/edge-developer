---
description: Reach the world of Windows 10 customers by distributing your PWA through the Microsoft Store
title: Progressive Web Apps in the Microsoft Store
author: erikadoyle
ms.author: edoyle
ms.date: 1/10/2018
ms.topic: article
ms.prod: microsoft-edge
keywords: progressive web apps, PWA, edge, Windows, Microsoft Store, Bing PWA index
---

# Progressive Web Apps in the Microsoft Store

When you publish your Progressive Web App (PWA) to the [Microsoft Store](https://developer.microsoft.com/en-us/store), your potential app audience expands to the entire Windows 10 install base of 600 million active monthly users! 

PWAs in the Microsoft Store enjoy a number of advantages:

- **Discoverability** - Apps in the Microsoft Store are showcased through different categories, curated collections, and search filters, providing an easy browsing and shopping experience for potential customers of your app. You can even [enhance your Store listing]((https://docs.microsoft.com/en-us/windows/uwp/publish/app-screenshots-and-images)) with screenshots, a hero image, and video trailers!

- **Trustworthiness** - Windows customers know they can trust their Microsoft Store purchases and downloads because they adhere to Microsoft's rigorous [quality and safety standards](https://docs.microsoft.com/en-us/legal/windows/agreements/store-policies).

- **Frictionless install** - The Microsoft Store provides a consistent and user friendly install experience across [all Windows 10 apps](https://www.microsoft.com/en-us/store/apps/windows?icid=CNavAppsWindowsApps), making it easy for all customers to install your PWA, regardless of technical comfort level.

- **Business insights** - The [Windows Dev Center dashboard](https://docs.microsoft.com/en-us/windows/uwp/publish/using-the-windows-dev-center-dashboard) for the Microsoft Store provides you with [detailed analytics](https://docs.microsoft.com/en-us/windows/uwp/publish/analytics) about everything from how many Windows customers your PWA has reached to how they're using it and what they have to say. You can also find metrics on app health, ad usage, and more.

- **Monetization, promotional, and engagement opportunities** - The [Store Services](https://docs.microsoft.com/en-us/windows/uwp/monetize/) and [Microsoft Advertising](https://developer.microsoft.com/en-us/store/monetize/ads-in-apps) SDKs provide a host of options to [monetize](https://developer.microsoft.com/en-us/store/monetize) and [promote](https://developer.microsoft.com/en-us/store/promote-your-apps) your app and [engage](https://developer.microsoft.com/en-us/store/engage) with your customers on Windows. In-app purchases, Microsoft Store add campaigns, A/B feature testing experiments, and detailed customer feedback and bug reporting are just some of the many tools you have at your disposal.

There are two options for getting your PWA into the Microsoft Store:

1. You can [manually submit it](#submitting-your-PWA-manually), or

2. If your PWA meets [certain criteria](#criteria-for-automatic-submission), it can be [automatically submitted](#automatic-pwa-importing-with-bing). (You also have the option to [opt-out](#opting-out-of-automatic-microsoft-store-import) of auto-submission.)

Regardless of submission method, once your PWA is accepted to the Microsoft Store you'll gain immediate access to all the benefits outlined above.

## Submitting your PWA manually

In order to distribute and promote an app through the Microsoft Store, you'll need to submit it as a Windows app package (`.appx` file). For server-hosted web apps such as PWAs, this package simply contains app metadata and home screen icons (none of the actual application code). With this, your web app can be installed and launched from the home screen alongside other [Windows 10 apps](https://docs.microsoft.com/en-us/windows/uwp/get-started/whats-a-uwp) by running in a lightweight native app wrappper (`WWAHost.exe` process), independent from the Microsoft Edge browser window.

Here's how to do it.

### Prerequisites

- **An existing PWA**. [Here's an easy way](./get-started.md) to convert your web app into a PWA if it isn't one already. 
- [**Node.js**](https://nodejs.org/en/). *PWABuilder* (below) runs on Node. Installation includes [NPM](https://www.npmjs.com/).
- [**PWABuilder CLI**](https://www.pwabuilder.com/). Install it using NPM (`npm install pwabuilder -g`).
- [**Microsoft Store app developer account**](https://docs.microsoft.com/en-us/windows/uwp/publish/opening-a-developer-account). There is a [one-time fee](https://docs.microsoft.com/en-us/windows/uwp/publish/account-types-locations-and-fees) depending on your chosen account type and location, and registration requires a valid [Microsoft Account](https://account.microsoft.com/).

### 1. Generate your Windows 10 app 

> [!NOTE]
> You can skip this step if you've already generated your PWA and Windows 10 app using the [PWABuilder](http://manifoldjs.com/generator) web interface, as discussed in [*Get started with Progressive Web Apps*](./get-started-with-progressive-web-apps.md).

[PWABuilder](https://www.npmjs.com/package/pwabuilder) (formerly *ManifoldJS*) enables you to package your web experience as a native app for Windows 10 and other app platforms directly from the command prompt.

To generate a set of native app wrappers for your PWA, run the *pwabuilder* command on the URL of your PWA (specified here w/ optional debug logging):

```Command Prompt
pwabuilder https://samplepwa.azurewebsites.net -l debug
```

This will generate a folder in the current directory named after your PWA (as specified in your web app manifest). If you're using a Windows 10 machine, you can test out your PWA by sideloading it in developer mode:

 1. Turn on **Developer mode** from the Windows *Settings* menu (press Windows **Start** key and search for "Use developer features")

 2. Locate the script at `PWA\Store packages\windows10\test_install.ps`, right-click and select **Run with PowerShell** from the context menu. Once installed, you can launch your PWA from its tile in the Windows **Start** menu. For more, see [*Test and debug your PWA on Windows*](./get-started#test-and-debug-your-pwa-on-windows).

    > [!NOTE]
    > To uninstall your PWA, simply comment out (`#`) this line of the *test_install.ps1* script and re-run: `# Add-AppxPackage -Register $appxmanifest`

### 2. Reserve your app name for the Microsoft Store

Log into the [Windows Dev Center dashboard](https://developer.microsoft.com/en-us/dashboard/windows/overview) with your account info and follow the steps to [create your app by reserving a name](https://docs.microsoft.com/en-us/windows/uwp/publish/create-your-app-by-reserving-a-name). Each reserved name must be unique throughout the Microsoft Store.

### 3. Copy app identity info to your *appxmanifest*

When you upload your app's packages, the *DisplayName*, *Name*, *Publisher*, and *PublisherDisplayName* values in your `.appxmanifest` file must match the values assigned to your app in the Windows Dev Center dashboard [upon reserving its name](#2-reserve-your-app-name-for-the-microsoft-store). 

Log into the [Windows Dev Center dashboard](https://developer.microsoft.com/en-us/dashboard/windows/overview), and locate your app identity values under **App management** > **App identity**:

![Windows Dev Center dashboard, App identity settings](./media/dashboard-app-identity.png)

Next locate the `PWA\Store packages\windows10\manifest\appxmanifest.xml` file and open it in a text editor. Replace the following values with the ones assigned in the Windows Dev Center dashboard:

 - `<Identity Name="`*Package/Identity/Name*`"`
 - `<Identity Publisher="`*Package/Identity/Publisher*`"`
 - `<DisplayName>`*Name you reserved for your app*`</DisplayName>`
 - `<PublisherDisplayName>`*Package/Properties/PublisherDisplayName*`</PublisherDisplayName>`

### 4. Compile your app to an *.appx* file

Now you're ready to compile all your PWA resources into a single `.appx` file you can upload to the Microsoft Store. From a command prompt, navigate to the directory of your web manifest and create a Windows 10 package (specified below w/ optional debug logging):

```Command Prompt
pwabuilder package -p windows10 -l debug
```

The file will be generated to `PWA\Store packages\windows10\package\windows.appx`.

### 5. Upload your package and complete your submission

Log back into the [Windows Dev Center dashboard](https://developer.microsoft.com/en-us/dashboard/windows/overview) and expand the **Submissions** > **Submisison 1** panel. Follow the checklist to complete the [required store listing information](https://docs.microsoft.com/en-us/windows/uwp/publish/app-submissions) and [upload your app package](https://docs.microsoft.com/en-us/windows/uwp/publish/upload-app-packages).

For more on the all the features and services available to Microsoft Store app developers, see [*Publish Windows apps*](https://developer.microsoft.com/en-us/store/publish-apps) on the [Windows Dev Center](https://developer.microsoft.com/en-us/windows).

## Automatic PWA importing with Bing

Just as your PWA's [web app manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest) is a signal to supporting platforms that your app is offline-capable and ready to be presented as a fully integrated app experience, it's also a hint to the Bing web crawler that your PWA should be considered for automatic inclusion in the Microsoft Store. 

If your PWA meets the requirements below, the Bing indexing service will automatically package your PWA in the [`.appx`](#submitting-your-pwa-manually) format required for installation on Windows 10 and assemble your app's store product page based on the metadata in its web app manifest. After [claiming your PWA](#claiming-your-pwa), you'll be able to further customize your store page and gain access to user analytics and other app management tools throug the Windows Dev Center dashboard.

### Criteria for automatic submission

To be automatically packaged and listed for the Microsoft Store, your PWA will need:

- [X] A non-empty web app manifest file, with at minimum:

  - Name
  - Description
  - App icon icon that is at least 192 x 192 pixels

- [X] Unique core logic (not minimally modified code from an [app boilerplate](https://en.wikipedia.org/wiki/Boilerplate_code) template)

- [X] HTTPS

- [X] Service worker script(s)

- [X] To pass automated tests for quality and accessibility
    - TODO: find more details about the test process/criteria

- [X] To be offered free of charge

- [X] To not violate any laws or [Microsoft Store policies](https://docs.microsoft.com/en-us/legal/windows/agreements/store-policies).

Additionally, PWAs with the highest amounts of web traffic will be prioritized in the PWA indexing process.

### Claiming your PWA

TODO: Chase down details here

### Opting out of automatic Microsoft Store import

Your PWA can opt out of automatic import to the Microsoft Store by serving a `robot.txt` file containing the following:

```
User-agent: bingbot
Disallow: /manifest.json
```
This directs the Bing web crawler (Bingbot) to disregard your web manifest file for PWA indexing purposes. This will not affect your site's search ranking in Bing's regular [web indexing process](https://www.bing.com/webmaster/help/help-center-661b2d18).