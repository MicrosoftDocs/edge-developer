---
description: Make your PWA more discoverable by publishing in the Microsoft Store
title: Publish your Progressive Web App to the Microsoft Store
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/28/2021
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
      Users naturally look for apps in the app store.  When you publish to the Microsoft Store, millions of Windows users may discover your PWA alongside other Windows apps.  The Store showcases apps through categories, curated collections, and more.  The app discovery portals provide an easy browsing and shopping experience for potential users of your app.  You may even [enhance your Store listing][WindowsUwpPublishAppScreenshotsImages] with screenshots, a hero image, and video trailers.  
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
1.  Now, your account is enrolled in the app developer program. To create an app reservation, complete the following actions.  
    1.  Navigate to **Windows & Xbox**.  
    1.  Choose **Overview** > **Create a new app**.  
    1.  Type the name of your app in the prompt.  
    1.  Choose `Reserve product name`.  
        
    :::image type="complex" source="./media/windows-partner-center-create-app.msft.png" alt-text="Create an app reservation in Windows Partner Center" lightbox="./media/windows-partner-center-create-app.msft.png":::
       Create an app reservation in Windows Partner Center  
    :::image-end:::  
    
1.  To display your publisher details for use in the [Package your PWA](#package-your-pwa-for-the-store) section, choose **Product management** > **Product Identity**.  
    
    :::image type="complex" source="./media/windows-partner-center-publisher-info.msft.png" alt-text="Copy your publisher information from Windows Partner Center" lightbox="./media/windows-partner-center-publisher-info.msft.png":::
       Copy your publisher information from Windows Partner Center  
    :::image-end:::  
    
1.  Copy and save the following values.  
    *   **Package ID**  
    *   **Publisher ID**  
    *   **Publisher Display Name**  
        
## Package your PWA for the Store 

Now that you have your app publishing information, generate a Windows app package for your PWA.

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
1.  To download your Windows app package, choose **Download**.

Your download is a `.zip` archive that contains an `.msixbundle` file and a `.classic.appxbundle` file.  The two app packages allow your PWA to run on a wide variety of Windows versions.  For more information, navigate to [What is a classic package?][GithubPwaBuilderPwabuilderWindowsChromiumDocsClassicPackageMd].  

### Submit your app package to the Store  

To submit your app to the Store, complete the following actions.  

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
        
1.  On the **Packages** prompt, choose the `.msixbundle` and the `.classic.appxbundle` files you generated in the [Package your PWA](#package-your-pwa-for-the-store) section.  
    
After you complete your submission, your app is reviewed, typically within between 24 and 48 hours.  After you receive approval, your PWA is available in the Microsoft Store.  

### Measure usage of your Store-installed PWA

When your PWA is initially launched, if the PWA was installed from the Microsoft Store, Microsoft Edge includes the following `Referer` header with the request for the first navigation of your web app.

```
Referer: app-info://platform/microsoft-store
```

Use this feature to measure distinct traffic from your Store-installed PWA.  Based on the traffic, you can adjust your app’s content to improve the user experience.  This feature is accessible to both client and server code.

This feature was introduced in Microsoft Edge version 91.

## See also  

PWABuilder provides more documentation to help you get your PWA in the Microsoft Store.  

*   [Test and submit your PWA app package][GithubPwaBuilderPwabuilderWindowsChromiumDocsNextStepsMd]  
*   [Publish a new PWA to the Store][GithubPwaBuilderPwabuilderWindowsChromiumDocsPublishNewAppMd]  
*   [Update an existing Store app to a PWA][GithubPwaBuilderPwabuilderWindowsChromiumDocsUpdateExistingAppMd]  
*   [Image recommendations for PWAs in the Store][GithubPwaBuilderPwabuilderWindowsChromiumDocsImageRecommendationsMd]  
*   [App packaging explainer][GithubPwaBuilderPwabuilderWindowsChromiumDocsClassicPackageMd]  

<!-- links -->  

[LegalWindowsAgreementsStorePolicies]: /legal/windows/agreements/store-policies "Microsoft Store Policies | Microsoft Docs"  

[WindowsUwpPublishAnalytics]: /windows/uwp/publish/analytics "Analyze app performance | Microsoft Docs"  
[WindowsUwpPublishAppScreenshotsImages]: /windows/uwp/publish/app-screenshots-and-images "App screenshots, images, and trailers | Microsoft Docs"  
[WindowsUwpPublishIndex]: /windows/uwp/publish/index "Publish Windows apps and games | Microsoft Docs"  

[MicrosoftPartnerDashboardHome]: https://partner.microsoft.com/dashboard/home "Home | Microsoft Partner Center"  
[MicrosoftPartnerDashboardWindowsOverview]: https://partner.microsoft.com/dashboard/windows/overview "Resources for partners | Microsoft Partner Center"  

[MicrosoftStoreAppsWindows]: https://www.microsoft.com/store/apps/windows "Windows Apps | Microsoft Store"  

[WindowsBlogWindowsdeveloperHostedAppModel]: https://blogs.windows.com/windowsdeveloper/hosted-app-model "Hosted App Model | Windows Developer Blog"  

[GithubPwaBuilderPwabuilderWindowsChromiumDocsClassicPackageMd]: https://github.com/pwa-builder/pwabuilder-windows-chromium-docs/blob/master/classic-package.md "What is a classic package? | GitHub"  
[GithubPwaBuilderPwabuilderWindowsChromiumDocsImageRecommendationsMd]: https://github.com/pwa-builder/pwabuilder-windows-chromium-docs/blob/master/image-recommendations.md "Image recommendations for Windows PWA packages | GitHub"  
[GithubPwaBuilderPwabuilderWindowsChromiumDocsNextStepsMd]: https://github.com/pwa-builder/pwabuilder-windows-chromium-docs/blob/master/next-steps.md "Next steps for getting your PWA into the Microsoft Store | GitHub"  
[GithubPwaBuilderPwabuilderWindowsChromiumDocsPublishNewAppMd]: https://github.com/pwa-builder/pwabuilder-windows-chromium-docs/blob/master/publish-new-app.md "Publish a new app to the Store | GitHub"  
[GithubPwaBuilderPwabuilderWindowsChromiumDocsUpdateExistingAppMd]: https://github.com/pwa-builder/pwabuilder-windows-chromium-docs/blob/master/update-existing-app.md "Update an existing app in the Store | GitHub"  

[PwabuilderMain]: https://www.pwabuilder.com "PWABuilder"  
