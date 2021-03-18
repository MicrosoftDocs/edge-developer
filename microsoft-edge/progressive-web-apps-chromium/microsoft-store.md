---
description: Make your PWA more discoverable by publishing in the Microsoft Store
title: Publish your Progressive Web App to the Microsoft Store
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 03/18/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: progressive web apps, PWA, Edge, Windows, Microsoft Store
---
# Publish your Progressive Web App to the Microsoft Store  

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

To publish your PWA to the Microsoft Store, no code changes are required.  Instead, you create an app reservation, package your PWA, and submit your package to the Store.  The following sections explain the steps.   

## Create an app reservation  

[Windows Partner Center][MicrosoftPartnerDashboardWindowsOverview] is the hub for you to submit your app to the Microsoft Store.  

To create an app reservation, complete the following actions.  

1.  To display your enrolled programs, complete the following actions.  
    1.  Sign into Windows Partner Center with your Microsoft account and navigate to the [Partner Center Dashboard][MicrosoftPartnerDashboardHome].  
    1.  Navigate to **Windows & Xbox**  
        *   If **Windows & Xbox** is displayed, your app is already enrolled.  
        *   If **Windows & Xbox** isn't displayed, choose **Add program**.  
    
    :::image type="complex" source="./media/windows-partner-center-add-program.msft.png" alt-text="Add a program in the Windows Partner Center dashboard" lightbox="./media/windows-partner-center-add-program.msft.png":::
       Add a program in the Windows Partner Center dashboard
    :::image-end:::  
    
1.  To enroll in the developer program, complete the following actions.  
    1.  Navigate to **Windows & Xbox**.  
    1.  Choose **Get started**.  
    1.  Follow the prompts.  
1.  Now, your app is enrolled in the app developer program. To create an app reservation, complete the following actions.  
    1.  Navigate to **Windows & Xbox**.  
    1.  Choose **Overview** > **Create a new app**.  
    1.  Type your PWA name in the prompt.  
    1.  Choose `Reserve product name`.  
    
    :::image type="complex" source="./media/windows-partner-center-create-app.msft.png" alt-text="Create an app reservation in Windows Partner Center" lightbox="./media/windows-partner-center-create-app.msft.png":::
       Create an app reservation in Windows Partner Center  
    :::image-end:::  

1.  To display your publisher details for use in the [Package your PWA](#package-your-pwa) section, choose **Product management** > **Product Identity**.  
    
    :::image type="complex" source="./media/windows-partner-center-publisher-info.msft.png" alt-text="Copy your publisher information from Windows Partner Center" lightbox="./media/windows-partner-center-publisher-info.msft.png":::
       Copy your publisher information from Windows Partner Center  
    :::image-end:::  

1.  Copy and save the following values.  
    *   **Package ID**  
    *   **Publisher ID**  
    *   **Publisher Display Name**  
        
## Package your PWA  

Generate a Windows app package for your PWA.  

Your app package is an `.msixbundle` file that contains the metadata of your app including the name, description, icons, and so on.  It uses the [Hosted App Model][WindowsBlogWindowsdeveloperHostedAppModel], with Microsoft Edge powering your PWA.  In this model, your PWA uses modern web capabilities while functioning as a Windows app.  Modern web capabilities include service worker, offline, push notifications, badging, and more.  

To generate an app package, complete the following actions.  

1.  Navigate to [PWA Builder][PwabuilderMain].  
1.  Type the URL of your PWA.  
1.  Choose **Start** > **Build My PWA** > **Windows** > **Options**.  
1.  Paste the following values that you saved in the [Create an app reservation](#create-an-app-reservation) section.  
    *   **Package ID**  
    *   **Publisher ID**  
    *   **Publisher Display Name**  
        
    :::image type="complex" source="./media/pwabuilder-publisher-info.msft.png" alt-text="Paste publisher information into PWABuilder" lightbox="./media/pwabuilder-publisher-info.msft.png":::
       Paste publisher information into PWABuilder  
    :::image-end:::  
    
1.  Choose **Done**.  
1.  To download your Windows app package, choose **Download**.  Your download is a `.zip` archive containing an `.msixbundle` file.  Use the `.msixbundle` file in the [Submit your app package to the Store](#submit-your-app-package-to-the-store) section.  

### Submit your app package to the Store  

Now, you have your `.msixbundle` app package.  To submit your app package to the Store, complete the following actions.  

1.  Navigate to [Windows Partner Center][MicrosoftPartnerDashboardWindowsOverview] 
1.  Choose your app.  
1.  Choose **Start your Submission**.  
    
    :::image type="complex" source="./media/windows-partner-center-start-submission.msft.png" alt-text="Start a new app submission on Windows Partner Center" lightbox="./media/windows-partner-center-start-submission.msft.png":::
       Start a new app submission on Windows Partner Center  
    :::image-end:::  
    
1.  Complete the following prompts for information about your app.
    *   pricing  
    *   age rating  
    *   and more  
        
1.  On the **Packages** prompt, choose the `.msixbundle` file your generated in the [Package your PWA](#package-your-pwa) section.  

After you complete your submission, your app is reviewed, typically within between 24 and 48 hours.  After you receive approval, your PWA is available in the Microsoft Store.  

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

