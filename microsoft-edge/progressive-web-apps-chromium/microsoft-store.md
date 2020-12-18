---
description: Make your PWA more discoverable by publishing in the Microsoft Store
title: Publish Your Progressive Web App to the Microsoft Store
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 12/18/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: progressive web apps, PWA, Edge, Windows, Microsoft Store
---
# Publish Your Progressive Web App to the Microsoft Store  

Publishing your Progressive Web App \(PWA\) to the [Microsoft Store][WindowsUwpPublishIndex] brings the following advantages.  

:::row:::
   :::column span="1":::
      **Discoverability**  
   :::column-end:::
   :::column span="2":::
      Users naturally look for apps in the app store.  By publishing to the Microsoft Store, millions of Windows users may discover your PWA alongside other Windows apps.  The Store showcases apps through categories, curated collections, and more.  The app discovery portals provide an easy browsing and shopping experience for potential users of your app.  You may even [enhance your Store listing][WindowsUwpPublishAppScreenshotsImages] with screenshots, a hero image, and video trailers.  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      **Trustworthiness**  
   :::column-end:::
   :::column span="2":::
      Windows customers know they may trust their Microsoft Store purchases and downloads, because they adhere to the rigorous Microsoft [quality and safety standards][LegalWindowsAgreementsStorePolicies].  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      **Easy install**  
   :::column-end:::
   :::column span="2":::
      The Microsoft Store provides a consistent and user-friendly install experience across [all Windows 10 apps][MicrosoftStoreAppsWindows].  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      **App analytics**  
   :::column-end:::
   :::column span="2":::
      The [Windows Partner Center dashboard][WindowsUwpPublishIndex] provides you with [detailed analytics][WindowsUwpPublishAnalytics] about your app health, usage, and more.  
   :::column-end:::
:::row-end:::  

<!--  
*   **Discoverability** - Users naturally look for apps in the app store.  By publishing to the Microsoft Store, millions of Windows users may discover your PWA alongside other Windows apps.  The Store showcases apps through categories, curated collections, and more.  The app discovery portals provide an easy browsing and shopping experience for potential users of your app.  You may even [enhance your Store listing][WindowsUwpPublishAppScreenshotsImages] with screenshots, a hero image, and video trailers.  
*   **Trustworthiness** - Windows customers know they are able to trust their Microsoft Store purchases and downloads, because they adhere to the rigorous Microsoft [quality and safety standards][LegalWindowsAgreementsStorePolicies].  
*   **Easy install** - The Microsoft Store provides a consistent and user-friendly install experience across [all Windows 10 apps][MicrosoftStoreAppsWindows].  
*   **App analytics** - The [Windows Partner Center dashboard][WindowsUwpPublishIndex] provides you with [detailed analytics][WindowsUwpPublishAnalytics] about your app health, usage, and more.  
-->  

To publish your PWA to the Microsoft Store, no code changes are required.  Instead, you create an app reservation, package your PWA, and submit your package to the Store.  The following sections explain the steps.   

## Create an app reservation  

[Windows Partner Center][MicrosoftPartnerDashboardWindowsOverview] is the hub for submitting apps to the Microsoft Store.  

Sign into Windows Partner Center with your Microsoft account, then navigate to the [Partner Center Dashboard][MicrosoftPartnerDashboardHome] to display your enrolled programs.  If `Windows & Xbox` is listed, your app is already enrolled.  If not, choose `Add program`.  

:::image type="complex" source="./media/windows-partner-center-add-program.msft.png" alt-text="Windows Partner Center dashboard, add a program" lightbox="./media/windows-partner-center-add-program.msft.png":::
   Windows Partner Center dashboard, add a program  
:::image-end:::  

Then, under `Windows & Xbox`, choose `Get started` and follow the prompts to enroll in the developer program.  

Now that your app is enrolled in the app developer program, you may create an app reservation.  Under `Windows & Xbox`, choose `Overview` > `Create a new app`.  

:::image type="complex" source="./media/windows-partner-center-create-app.msft.png" alt-text="Create an app reservation in Windows Partner Center" lightbox="./media/windows-partner-center-create-app.msft.png":::
   Create an app reservation in Windows Partner Center  
:::image-end:::  

Type your PWA name in the prompt, and choose `Reserve product name` to complete your app reservation.  

Lastly, you need to grab your publisher details for use in the next step.  Choose `Product management` > `Product Identity`.  

:::image type="complex" source="./media/windows-partner-center-publisher-info.msft.png" alt-text="Copy publisher information from Windows Partner Center" lightbox="./media/windows-partner-center-publisher-info.msft.png":::
   Copy publisher information from Windows Partner Center  
:::image-end:::  

Here, your **Package ID**, **Publisher ID**, and **Publisher Display Name** are displayed.  Save or copy the values to use in the next step.  

## Package your PWA  

Next, you generate a Windows app package for your PWA.  

Your app package is an `.msixbundle` file that contains the metadata of your app including the name, description, icons, and so on.  It uses the [Hosted App Model][WindowsBlogWindowsdeveloperHostedAppModel], with Microsoft Edge powering your PWA.  In this model, your PWA may use modern web capabilities while functioning as a Windows app.  Modern web capabilities include service worker, offline, push notifications, badging, and more.  

To generate an app package, navigate to [PWA Builder][PwabuilderMain] and enter the URL of your PWA.  Choose `Start` > `Build My PWA` > `Windows` > `Options`.  Paste the values you saved for **Package ID**, **Publisher ID**, and **Publisher Display Name** from the preview step.  

:::image type="complex" source="./media/pwabuilder-publisher-info.msft.png" alt-text="Paste publisher information into PWABuilder" lightbox="./media/pwabuilder-publisher-info.msft.png":::
   Paste publisher information into PWABuilder  
:::image-end:::  

Choose `Done`, then `Download` to download your Windows app package.  Your download is a .zip archive containing an `.msixbundle` file that may be submitted to the Store in the next step.  

### Submit your app package to the Store  

Now that you have your `.msixbundle` app package, you may submit it to the Store.  

Navigate to [Windows Partner Center][MicrosoftPartnerDashboardWindowsOverview] and choose your app, then `Start your Submission`.  

:::image type="complex" source="./media/windows-partner-center-start-submission.msft.png" alt-text="Start a new app submission on Windows Partner Center" lightbox="./media/windows-partner-center-start-submission.msft.png":::
   Start a new app submission on Windows Partner Center  
:::image-end:::  

Prompts for information about your app, like pricing, age rating, and more are displayed.  Complete the prompts.  

When asked for `Packages`, choose the `.msixbundle` file generated in the previous step.  

When your submission is complete, your app is reviewed, typically within between 24 and 48 hours.  Upon approval, your PWA is available in the Microsoft Store.  

<!-- links -->  

[LegalWindowsAgreementsStorePolicies]: /legal/windows/agreements/store-policies "Microsoft Store Policies | Microsoft Docs"  

[WindowsUwpPublishAnalytics]: /windows/uwp/publish/analytics "Analyze app performance | Microsoft Docs"  
[WindowsUwpPublishAppScreenshotsImages]: /windows/uwp/publish/app-screenshots-and-images "App screenshots, images, and trailers | Microsoft Docs"  
[WindowsUwpPublishIndex]: /windows/uwp/publish/index "Publish Windows apps and games | Microsoft Docs"  

[MicrosoftPartnerDashboardHome]: https://partner.microsoft.com/dashboard/home "Home | Microsoft Partner Center"  
[MicrosoftPartnerDashboardWindowsOverview]: https://partner.microsoft.com/dashboard/windows/overview "Resources for partners | Microsoft Partner Center"  

[MicrosoftStoreAppsWindows]: https://www.microsoft.com/store/apps/windows "Windows Apps | Microsoft Store"  

[WindowsBlogWindowsdeveloperHostedAppModel]: https://blogs.windows.com/windowsdeveloper/hosted-app-model "Hosted App Model | Windows Developer Blog"  

[PwabuilderMain]: https://www.pwabuilder.com "PWABuilder"  

