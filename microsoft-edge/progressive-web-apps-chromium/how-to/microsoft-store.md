---
description: Make your PWA more discoverable by publishing in the Microsoft Store
title: Publish a Progressive Web App in the Microsoft Store
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 08/09/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: progressive web apps, PWA, Edge, Windows, Microsoft Store
---

# Publish your Progressive Web App to the Microsoft Store

Publishing your Progressive Web App (PWA) to the [Microsoft Store](/windows/uwp/publish/index) brings the following advantages.

:::row:::
   :::column span="1":::
      **Discoverability**
   :::column-end:::
   :::column span="2":::

      Users naturally look for apps in the app store.  When you publish to the Microsoft Store, millions of Windows users can discover your PWA alongside other Windows apps.  The Store showcases apps through categories, curated collections, and more.  The app discovery portals provide an easy browsing and shopping experience for potential users of your app.  You can even [enhance your Store listing](/windows/uwp/publish/app-screenshots-and-images) with screenshots, a hero image, and video trailers.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Trustworthiness**
   :::column-end:::
   :::column span="2":::

      Windows customers know they can trust their Microsoft Store purchases and downloads, because they adhere to the rigorous Microsoft [quality and safety standards](/legal/windows/agreements/store-policies).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Easy install**
   :::column-end:::
   :::column span="2":::
      The Microsoft Store provides a consistent and user-friendly install experience across [all Windows 10 or later apps](https://www.microsoft.com/store/apps/windows).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **App analytics**
   :::column-end:::
   :::column span="2":::
      The [Windows Partner Center dashboard](/windows/uwp/publish/index) provides you with [detailed analytics](/windows/uwp/publish/analytics) about your app health, usage, and more.
   :::column-end:::
:::row-end:::

To publish your PWA to the Microsoft Store, no code changes are required.  Instead, you create an app reservation, package your PWA, and submit your package to the Store.  The following sections explain the steps.


<!-- ====================================================================== -->
## Create an app reservation

[Windows Partner Center](https://partner.microsoft.com/dashboard/windows/overview) is the hub for you to submit your app to the Microsoft Store.

To create an app reservation:

1.  To display your enrolled programs:
    1.  Sign into Windows Partner Center with your Microsoft account and go to the [Partner Center Dashboard](https://partner.microsoft.com/dashboard/home).
    1.  Navigate to **Windows & Xbox**.
        *   If **Windows & Xbox** is displayed, your app is already enrolled.
        *   If **Windows & Xbox** isn't displayed, select **Add program**.

    :::image type="content" source="../media/windows-partner-center-add-program.msft.png" alt-text="Add a program in the Windows Partner Center dashboard." lightbox="../media/windows-partner-center-add-program.msft.png":::

1.  To enroll in the developer program:
    1.  Navigate to **Windows & Xbox**.
    1.  Select **Get started**.
    1.  Follow the prompts.
1.  Now, your account is enrolled in the app developer program. To create an app reservation:
    1.  Navigate to **Windows & Xbox**.
    1.  Select **Overview** > **Create a new app**.
    1.  Type the name of your app in the prompt.
    1.  Select `Reserve product name`.


    :::image type="content" source="../media/windows-partner-center-create-app.msft.png" alt-text="Create an app reservation in Windows Partner Center." lightbox="../media/windows-partner-center-create-app.msft.png":::

1.  To display your publisher details for use in the [Package your PWA](#package-your-pwa-for-the-store) section, select **Product management** > **Product Identity**.


    :::image type="content" source="../media/windows-partner-center-publisher-info.msft.png" alt-text="Copy your publisher information from Windows Partner Center." lightbox="../media/windows-partner-center-publisher-info.msft.png":::

1.  Copy and save the following values.
    *   **Package ID**
    *   **Publisher ID**
    *   **Publisher Display Name**


<!-- ====================================================================== -->
## Package your PWA for the Store

Now that you have your app publishing information, generate a Windows app package for your PWA.

To generate an app package:

1.  Go to [PWA Builder](https://www.pwabuilder.com).
1.  Type the URL of your PWA and click **Start**.
1.  Once your report is complete, make sure your PWA is store-ready. If your PWA score is too low, you can visit the **Manifest Options** and **Service Worker Options** and check out the sections that need work.
1.  When your PWA is ready to be published, click **Next**, and then select the **Store Package** button in the **Windows** section of the publish page.
1.  Paste the following values, which you saved in the [Create an app reservation](#create-an-app-reservation) section:
    *   **Package ID**
    *   **Publisher ID**
    *   **Publisher Display Name**

    :::image type="content" source="../media/pwabuilder-windows-package-options.png" alt-text="Paste publisher information into PWABuilder." lightbox="../media/pwabuilder-windows-package-options.png":::

1.  Select **Generate**.
1.  To download your Windows app package, select **Download**.

Your download is a `.zip` archive that contains an `.msixbundle` file and a `.classic.appxbundle` file.  The two app packages allow your PWA to run on a wide variety of Windows versions.  For more information, see [What is a classic package?](https://github.com/pwa-builder/pwabuilder-windows-chromium-docs/blob/master/classic-package.md).


### Submit your app package to the Store

To submit your app to the Store:

1.  Go to [Windows Partner Center](https://partner.microsoft.com/dashboard/windows/overview)
1.  Select your app.
1.  Select **Start your Submission**.

    :::image type="content" source="../media/windows-partner-center-start-submission.msft.png" alt-text="Start a new app submission on Windows Partner Center." lightbox="../media/windows-partner-center-start-submission.msft.png":::

1.  When you are prompted, provide information about your app, such as pricing and age rating.

1.  On the **Packages** prompt, select the `.msixbundle` and the `.classic.appxbundle` files you generated in the [Package your PWA](#package-your-pwa-for-the-store) section.

After you complete your submission, your app is reviewed, typically within 24 to 48 hours.  After you receive approval, your PWA is available in the Microsoft Store.


<!-- ====================================================================== -->
## Measure usage of your Store-installed PWA

When your PWA is initially launched, if the PWA was installed from the Microsoft Store, Microsoft Edge includes the following `Referer` header with the request for the first navigation of your web app.

```
Referer: app-info://platform/microsoft-store
```

Use this feature to measure distinct traffic from your Store-installed PWA.  Based on the traffic, you can adjust your app’s content to improve the user experience.  This feature is accessible to both client and server code. To access this information on the client side, you can query `document.referrer` in your JavaScript.

This feature was first introduced in Microsoft Edge version 91, and the DOM API was introduced in Microsoft Edge version 93.


<!-- ====================================================================== -->
## See also

*   [Test and submit your PWA app package](https://github.com/pwa-builder/pwabuilder-windows-chromium-docs/blob/master/next-steps.md)
*   [Publish a new PWA to the Store](https://github.com/pwa-builder/pwabuilder-windows-chromium-docs/blob/master/publish-new-app.md)
*   [Update an existing Store app to a PWA](https://github.com/pwa-builder/pwabuilder-windows-chromium-docs/blob/master/update-existing-app.md)
*   [Image recommendations for PWAs in the Store](https://github.com/pwa-builder/pwabuilder-windows-chromium-docs/blob/master/image-recommendations.md)
*   [App packaging explainer](https://github.com/pwa-builder/pwabuilder-windows-chromium-docs/blob/master/classic-package.md)
