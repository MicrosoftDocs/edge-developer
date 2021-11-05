---
description: Microsoft Edge Privacy Whitepaper
title: Microsoft Edge Privacy Whitepaper
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/11/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, privacy, whitepaper, trust
ms.localizationpriority: high
no-loc: [Cast, Google Cast]
---
# Microsoft Edge Privacy Whitepaper  

The Microsoft Edge browser privacy promise is to provide you with the protection, insight, control, and respect you deserve.  To uphold commitments and to give insight into Microsoft products, the Microsoft Edge team provided a privacy whitepaper.  This privacy whitepaper explains how Microsoft Edge features and services work and how each may affect your privacy.  To make the right privacy decisions for you, the goal of the Microsoft Edge team gives you the information to understand the following tasks.  

*   Your data usage  
*   Control of the different features  
*   Management of your collected data  
    
In certain sections of this privacy whitepaper, the Microsoft Team provides steps to navigate to Microsoft Edge settings and other webpages.  For consistency, the Microsoft Edge team used a shortened format throughout this privacy whitepaper.  The shortened format displays with URIs that begin with `edge://`, such as `edge://favorites` or `edge://settings/privacy`.  To navigate to the webpages, type the bolded text directly into the Microsoft Edge address bar.  The webpages only display in Microsoft Edge.  

This privacy whitepaper focuses on the desktop version of Microsoft Edge.  Parts of this privacy whitepaper may include features or experiences that aren't available to all users.  Also, this privacy whitepaper discusses features and services that exist in the current product.  The features and services are subject to change in the future.  Microsoft practices data collection minimization.  Data collection minimization means your data is kept for the minimum amount of time.  Retention times vary based on the feature or service being used and change over time.  

## Navigate to Privacy  

1.  Navigate to `edge://settings/privacy`.  
    
## Navigate to Privacy blocked trackers  

1.  Navigate to `edge://settings/privacy`.  
1.  Navigate to **Tracking prevention**.  
1.  Choose **Blocked trackers**.  
    
or  

1.  Navigate to `edge://settings/privacy/blockedTrackers`
    
## Navigate to Clear browsing data  

1.  Navigate to `edge://settings/privacy`.  
1.  Navigate to **Clear browsing data**.  
1.  Navigate to **Clear browsing data now**.  
1.  Choose the **Choose what to clear** button.  
    
or  

1.  Navigate to `edge://settings/clearBrowserData`.  

## Navigate to Clear browsing data on close  

1.  Navigate to `edge://settings/privacy`.  
1.  Navigate to **Clear browsing data**.  
1.  Choose **Choose what to clear every time you close the browser**.  
    
or  

1.  Navigate to `edge://settings/clearBrowsingDataOnClose`.  
    
## Navigate to Installed extensions  

1.  Navigate to `edge://extensions`.  
    
## Navigate to Languages  

1.  Navigate to `edge://settings/languages`.  
    
## Navigate to Privacy optional diagnostic data  

1.  Navigate to `edge://settings/privacy`.  
1.  Navigate to **Optional diagnostic data**.  
   
## Navigate to Privacy personalize your web experience  

1.  Navigate to `edge://settings/privacy`.  
1.  Navigate to **Personalize your web experience**.  
    
## Navigate to Privacy privacy  

1.  Navigate to `edge://settings/privacy`.  
1.  Navigate to **Privacy**.  
    
## Navigate to Privacy services  

1.  Navigate to `edge://settings/privacy`.  
1.  Navigate to **Services**.  
    
## Navigate to Privacy tracking prevention  

1.  Navigate to `edge://settings/privacy`.  
1.  Navigate to **Tracking prevention**.  
    
## Navigate to Profiles  

1.  Navigate to `edge://settings/profiles`.  
    
## Navigate to Profiles sync  

1.  Navigate to `edge://settings/profiles`.  
1.  Choose **Sync**.  

Or  

1.  Navigate to `edge://settings/profiles/sync`.  
    
## Address bar and suggestions  

The address bar allows you to enter website URLs and search the web.  By default, the address bar provides search and website suggestions using the characters you type.  The address bar should display suggestions from your favorites, browsing history, previous searches, and default search provider.  

:::image type="complex" source="./media/address-bar.png" alt-text="Address bar" lightbox="./media/address-bar.png":::
   Address bar  
:::image-end:::  

To increase the speed while you browse and search, Microsoft Edge sends the typed characters to your default search provider while you type in the address bar.  
Your default search provider responds with suggested search queries.  
The address bar categorizes your entry as a URL, search, or unknown.  
The information, along with which suggestion you choose, position of choice, and other address bar data is sent to your default search provider.  
If your search provider is [Microsoft Bing](https://bing.com), a resettable identifier unique to your browser is sent with the data to understand the search query and query session.  
Other autosuggest service identifiers are sent to your default search engine to complete the search suggestions.  
Your IP address and cookies are sent to your default search provider to increase the relevance of the search results.  
A signal is sent to your default search provider when you choose the address bar to signal to the provider to get ready to provide suggestions.  
The typed characters and search queries aren't sent to Microsoft unless your search provider is [Microsoft Bing](https://bing.com).  

To turn on sending data to your default search provider, complete the following actions.  

1.  [Navigate to Privacy services](#navigate-to-privacy-services).  
1.  Choose **Address bar**.  
1.  Turn on the **Show me search and site suggestions using my typed characters** setting.  
    
If you turn off the setting, your typed characters are no longer sent to your default search provider.  Your search queries are still sent to your default search provider to provide search results.  If the text that you type in the address bar contains sensitive information, Microsoft Edge doesn't send the typed text.  Sensitive information includes authentication credentials, local file names, or URL data that is normally encrypted.  To allow Microsoft Edge to collect diagnostic data about the address bar, complete the following actions.   Diagnostic data about the address bar includes the number of offered queries for all search providers.  

1.  [Navigate to Privacy personalize your web experience](#navigate-to-privacy-personalize-your-web-experience).  
1.  Turn on the **Improve your web experience by allowing Microsoft to use your browsing history from this account for personalizing advertising, search, news, and other Microsoft services** setting.  
    
The characters that you type and the websites that you visit are stored locally on the device per profile.  To delete the data, complete the following actions.  

1.  [Navigate to Clear browsing data](#navigate-to-clear-browsing-data).  
1.  Choose the checkbox next to **Browsing history**.  
1.  Choose the **Clear now** button.  
    
If [Microsoft Bing](https://bing.com) is your default search provider and your Microsoft account is active, you may delete your searches on the [Microsoft Privacy dashboard](https://account.microsoft.com/privacy/).  To clear your browsing history and delete websites from displaying as suggestions in the address bar, complete the following actions.  

1.  Navigate to `edge://history`.  
1.  Choose **Clear browsing data**.  
    
To clear the data Microsoft collects from the address bar and search suggestions features on Windows 10, complete the following actions.  

1.  Choose **Start** > **Settings** > **Privacy** > **Diagnostics & feedback**.  
1.  Navigate to **Delete diagnostic data**.  
1.  Choose **Delete**.  
    
All other data is deleted after 36 months.  

If you use Microsoft Search and your Microsoft work or school account is active, Microsoft Edge sends an anonymous token with the query.   The anonymous token represents your account and provides account-specific functionality, such as results specific to your company.  

All data is transmitted securely over HTTPS.  If [Microsoft Bing](https://bing.com) is your default search provider, the searches and typed characters are saved for up to six months.  

If you search for a single word in the address box, Microsoft Edge may send the single word to your DNS server.   Microsoft Edge sends the word to verify if your request corresponds to a host on your network.  Microsoft Edge may try to connect to the corresponding host.  The option allows you to navigate to the specific host instead of searching.  

For example, your router uses the `router` hostname and if you type `router` in the address bar, Microsoft Edge displays the following options.  

*   Navigate to `https://router`.  
*   Use your default search provider to search for the `router` term.  
    
The single word search feature doesn't involve sending data to your default search engine.  Changes made to the **Show me search and site suggestions using my typed characters** setting don't affect the single word search feature.  

Another way to turn on \(or off\) sending data to your default search provider, complete the following actions.  

1.  Navigate to `edge://settings/search`.  
1.  Turn on \(or off\) the **Show me search and site suggestions using my typed characters** setting.  
    
To change your default search engine, complete the following action.  

1.  Navigate to `edge://settings/search`.  
1.  Choose the **Search engine used in the address bar** drop-down menu.  
    
If you browse while you use InPrivate or Guest mode, your automatic suggestions are turned off.  InPrivate displays suggestions from your local browsing, such as browsing history or past searches, but no typed characters are sent to your default search engine.  Guest mode doesn't display any suggestions or send typed characters to your default search engine.  

Data collected by other search providers follow the privacy policy of the company.  

## Autofill  

Autofill in Microsoft Edge helps you be more productive.  Autofill allows you to save passwords, payment information, addresses, and other form entry data. For example, birthdays.  When you navigate to a website and start to fill out a form, Microsoft Edge uses form fill information to match your saved autofill data to the form.  Microsoft Edge offers form entry data you previously saved when you displayed similar forms.  Passwords and credit card information are only saved with your explicit permission for each password and card.  

Addresses and other form entries are saved by default.  To turn off saving and autofill of address and other form data, complete the following actions.  

1.  Navigate to `edge://settings/addresses`.  
1.  Turn off the **Save and fill addresses** setting.  
    
To prevent Microsoft Edge from prompting you to save passwords, complete the following actions.  

1.  Navigate to `edge://settings/passwords`.  
1.  Turn off the **Offer to save passwords** setting.  

If you don't want Microsoft Edge to autofill existing saved passwords and want to delete your saved passwords, complete the following actions.  

1.  Navigate to `edge://settings/passwords`.  
1.  Choose **Saved passwords**.  
    
To delete all autofill data, complete the following actions.  

1.  [Navigate to Clear browsing data](#navigate-to-clear-browsing-data).  
1.  Choose **Autofill form data**.  
1.  Choose the wanted time range.  
1.  Choose **Clear now**.  
    
If you turned on synchronization in your profile, your autofill data is synced across all versions of Microsoft Edge where your account is active.  When synchronization is turned on, all autofill data is stored on encrypted Microsoft servers.  The autofill data stored on Microsoft servers is used only for synchronization purposes.  To turn off synchronizing of your autofill data, complete the following actions.  

1.  [Navigate to Profiles sync](#navigate-to-profiles-sync).  
1.  Choose the **Turn off sync** button.  
    
To synchronize removal of autofill data, complete the following actions.  

1.  Sign into your account in Microsoft Edge.  
1.  Turn on synchronization for autofill.  
1.  Delete autofill data.  
    
When you navigate to a webpage and submit a form, Microsoft Edge sends information about the form to the Microsoft form fill service.  The information may include a hash of the hostname and autofill entry types.  For example, box 1 searches for an email address, box 2 searches for a password, and so on.  No user-entered information or user identifiers are sent to the service.  The information helps Microsoft Edge correctly identify forms across different webpages.  The data is used to help match your saved autofill data to the form.  

If you use Guest mode, autofill isn't available and new autofill entries aren't added.  If you browse InPrivate, Microsoft Edge offers autofill entries, but new autofill entries aren't added.  

## Cast  

Cast in Microsoft Edge allows you to display your media to another screen using Google Cast.  To access the Cast feature, complete the following actions.  

1.  Choose **Settings and more (...)** > **More tools**.  
1.  Choose **Cast media to device**.  
    
Cast relies on the Media Router extension that isn't included in Microsoft Edge by default.  When you first use Cast, Microsoft Edge prompts for permission to install the Media Router extension.  

Choose **restart** to install the Media Router extensions from the Chrome Web Store.  To keep the Media Router extension up to date, when Microsoft Edge starts and at regular intervals, Microsoft Edge sends update requests to the Chrome Web Store.  The update requests include basic data about your version of Microsoft Edge.  Google may collect some data associated with the Media Router extension.  To uninstall the Media Router extension, complete the following action.  

1.  Navigate to `edge://flags`.  
1.  Changes the **Edge-On-Demand-Media-Router** setting to `Enabled`.  
    
After you uninstall the Media Router extension, the updates stop from the Chrome Web Store.  The extension is hidden and doesn't appear on the **Installed extensions** list.  To display the **Installed extensions** list, [navigate to Installed extensions](#navigate-to-installed-extensions).  

## Collections  

You may collect web content and organize it with Collections in Microsoft Edge.  Web content includes webpages, text, and images.  All collections data is stored locally on the device and organized per Microsoft Edge profile.  To synchronize additions and changes to your Collections, complete the following actions.  

1.  Sign into your account in Microsoft Edge.  
1.  Turn on synchronization for Collections.  
1.  Create or change a Collection.  
    
Your collections may include notes or comments.  

Every 24 hours Microsoft Edge downloads a list of supported webpages.  
The list of supported webpages includes webpages with special entity extraction templates.  
The templates are specific to each webpage.  
When you create an item in your collection, Microsoft Edge verifies that the webpage from which you create the new collection item is listed in the supported websites.  
If the webpage is on the list, Microsoft Edge sends a request to the entity extraction service for the template of the specific website.  
No user identifiers are associated with the request to the service.  
The template attempts to identify the name, price, ratings, primary image, and other data about the item being collected.  
If the webpage from which you create a new collection item isn't on the supported list webpage, Microsoft Edge doesn't download a template.  
The templates allow you to locally create of all collection items on the device.  
No data about the collection items are sent to the service to create the collection.  

To delete the templates stored on the device and clear the cache data, complete the following actions.  

1.  [Navigate to Clear browsing data](#navigate-to-clear-browsing-data).  
1.  Choose your wanted time range and type of data.  
1.  Choose the **Clear now** button.  
    
Turn on the **Show suggestions from Pinterest in Collections** setting and Collections uses [Microsoft Bing](https://bing.com) search and the title of your collection to find relevant Pinterest Topic webpages.  Microsoft Edge doesn't send data about your collections to Pinterest.  To remove the suggestions and stop searches for Pinterest Topic webpages, complete the following actions.  

1.  [Navigate to Privacy services](#navigate-to-privacy-services).  
1.  Turn off the **Show suggestions from Pinterest in Collections** setting.  
    
The Collections feature isn't available when you use InPrivate browsing or in Guest mode.  

## Crashes  

If optional diagnostic data are turned on, Microsoft collects diagnostic data when Microsoft Edge crashes or finds other reliability problems.  Optional diagnostic data may include crash reports.  The diagnostic data is used to diagnose and fix reliability problems of Microsoft Edge and other Microsoft products and services.  

:::image type="complex" source="./media/crashes2.png" alt-text="Crashes" lightbox="./media/crashes2.png":::
   Crashes  
:::image-end:::  

Microsoft Edge collects diagnostic data in the form of crash dumps.  The crash dump contains the device and software state that were captured at the time Microsoft Edge found the reliability problem.  Information at the time of the crash is included in the diagnostic data. The information includes the displayed webpage or your CPU usage.  The crash diagnostic data is stored locally on the device.  If you turn on crash reporting, the crash diagnostic data uses an encrypted link to send to Microsoft.  Each crash dump contains the following information to help identify the problem.  

*   An identifier unique to your device.  
*   A resettable identifier unique to your browser.  
*   Extra diagnostic data, such as the URL, CPU usage, and network usage.  
    
The extra diagnostic data is attached to the crash dump to help diagnose the reliability problem, such as understanding how many devices experience the problem and the severity.  

The lifecycle for a crash dump on Microsoft Edge.  

1.  Microsoft Edge sends the crash dump to Microsoft.  
1.  Microsoft stores the crash dump on secure Microsoft servers for up to 30 days.  
1.  Microsoft deletes the crash dump.  
    
To request deletion of the diagnostic data on Windows 10, complete the following actions.  

1.  Navigate to **Start** > **Settings** > **Privacy** > **Diagnostics & feedback**.  
1.  Navigate to **Delete diagnostic data**.  
1.  Choose **Delete**.  
    
Aggregated crash information is stored for reports and product improvement purposes.  Aggregated crash information may include the count of the types of crashes.  

To clear the crash diagnostic data stored locally from the file system on the device, complete the following actions.  

1.  Navigate to `edge://crashes`.  
1.  Choose the **Clear all** button.  
    
To turn off crash diagnostic data collection on Windows 10, complete the following actions.  

1.  Navigate to **Start** > **Settings** > **Privacy**.  
1.  Choose **Diagnostics & feedback**.  
    
For versions of Microsoft Edge on all other platforms, complete the following actions.  

1.  [Navigate to Privacy optional diagnostic data](#navigate-to-privacy-optional-diagnostic-data).  
1.  Turn off the **Help improve Microsoft products by sending optional diagnostic data about how you use the browser, websites you visit, and crash reports** setting.  
    
Also, an enterprise may use [group policies managed by your organization](/deployedge/microsoft-edge-enterprise-privacy-settings) to turn off the diagnostic data collection feature.  

## Developer tools

Microsoft Edge Developer Tools provide tools for website debugging and testing.  To access Developer Tools, complete the following actions.  

1.  Choose **Settings and more (...)** > **More tools**.  
1.  Choose **Developer tools**.  
    
When you turn on certain features in Developer Tools, Microsoft Edge requests modules from Microsoft servers and download each to your device.  The request for the modules sent is over a secure HTTPS connection and contains a non-unique identifier representing the version of Microsoft Edge being used.  Specific experiences that require the remote download include **3D View**, **Elements**, and **Accessibility** tools.  Webhint integration requires a remote module that is automatically requested when you open the Developer Tools.  

## Diagnostic data

Microsoft uses diagnostic data to improve existing products and services.  Also, Microsoft uses diagnostic data to keep existing products secure, up to date, and running as expected.  Whenever Microsoft Edge collects data, Microsoft makes sure the choice is right for you.  Microsoft believes in and practices information collection minimization.  Microsoft strives to gather only the information needed at that time, and to store it only for as long as it helps to improve Microsoft products and services.  

Microsoft Edge collects a set of required diagnostic data to keep the product secure, up to date, and properly running.  The required diagnostic data may include data such as device connectivity, configuration information, software settings, and inventory data.  Microsoft uses the required diagnostic data to troubleshoot issues.  Also, Microsoft uses the required diagnostic data to keep existing products and services reliable, secure, and operating normally.  For more information about diagnostic data on managed devices, navigate to [Configure Windows diagnostic data in your organization](/windows/privacy/configure-windows-diagnostic-data-in-your-organization) and [Microsoft Edge diagnostic data group policy](/deployedge/microsoft-edge-enterprise-privacy-settings).  

:::image type="complex" source="./media/diagnostic-data2.png" alt-text="Diagnostic data" lightbox="./media/diagnostic-data2.png":::
   Diagnostic data  
:::image-end:::  

Additionally, you may choose to share optional diagnostic data.  When you use the following features or platforms, Microsoft Edge sends optional diagnostic data about your feature use and your navigation history. 

*   Microsoft Edge features  
*   Microsoft Edge services  
*   Apps that use the Microsoft Edge web platform  
    
With your permission, the optional diagnostic data is sent to Microsoft to improve Microsoft products and services for everyone.  The optional diagnostic data isn't collected or stored with your Microsoft account.  

Optional diagnostic data may include the following information.  

*   Feature usage  
*   Performance data  
*   Website load times  
*   Memory usage  
*   Websites you visit  
    
When you set a webpage as a Favorite, optional diagnostic data is created.  The optional diagnostic data includes the following information.  

*   You chose the Favorites button.  
*   A Favorite was successfully added.   
    
The optional diagnostic data doesn't include which webpage was set as a Favorite.  

Information about webpages you visit in Microsoft Edge helps Microsoft understand how quickly webpages load and increases the relevance of search results for all users.  The data may include the following information about the webpage.  

*   The URL of the webpage you visit.  
*   Webpage metrics.  
*   The title of the webpage.  
*   How you accessed the webpage.  
*   Information about the content of the webpage.  
*   Other relevant information about the webpage navigation.  

Diagnostic data is sent using HTTPS and stored on Microsoft servers.  On Windows devices, diagnostic data is sent with an identifier unique to your device.  On other devices, the diagnostic data is associated with a resettable identifier unique to your browser.  The resettable identifier unique to your browser is randomly generated and doesn't contain your personal data.  

The Microsoft Edge team respects the sensitivity of diagnostic data by restricting data access or removing personal data.  To reset the identifier unique to your browser on Windows 10, complete one of the following actions.  

*   Method one  
    1.  Choose **Start** > **Settings** > **Privacy** > **Diagnostics & feedback**.  
    1.  Navigate to **Delete diagnostic data**.  
    1.  Choose **Delete**.  
*   Method two  
    1.  Navigate to **Diagnostic data**.  
    1.  Change your setting from **Full** to **Basic**.  
*   Method three  
    1.  Turn off **Optional diagnostic data**.  
        
On other platforms, to generate a new resettable identifier \(ID\) that is unique to your browser, complete the following actions.  

1.  [Navigate to Privacy optional diagnostic data](#navigate-to-privacy-optional-diagnostic-data).  
1.  Turn off the **Help improve Microsoft products by sending optional diagnostic data about how you use the browser, websites you visit, and crash reports** setting.  
    
The reset \(ID\) functionality may be different for devices managed with group policies set by your organization.  

If you run on Windows 10 version 1803 \(April 2018 Update\) or later, to display product data shared with Microsoft in the Diagnostic Data Viewer, complete the following actions.  

1.  Choose **Start** > **Settings** > **Privacy** > **Diagnostics & feedback**.  
1.  Navigate to **View diagnostic data**.  
1.  Choose **Open Diagnostic Data Viewer**.  
    
For other platforms or versions of Windows 10 version 1803 or earlier, to display the diagnostic data, navigate to `edge://data-viewer`.  To display the data that Microsoft Edge periodically sent to Microsoft since the last time the viewer was opened, navigate to `edge://data-viewer`.  To display the data that is sent to Microsoft for your specific session, refresh the viewer.  The data used to populate `edge://data-viewer` is stored locally on the device.  To clear the data in the viewer, close the `edge://data-viewer` tab.  

To help improve Microsoft products and services, de-identified and aggregated diagnostic data is stored for up to two years.  You may not display or delete the diagnostic data from your [Microsoft privacy dashboard](https://account.microsoft.com/privacy/), because your Microsoft account doesn't collect or store the diagnostic data.  To delete the diagnostic data on Windows 10, complete the following actions.  

1.  Choose **Start** > **Settings** > **Privacy** > **Diagnostics & feedback**.  
1.  Navigate to **Delete diagnostic data**.  
1.  Choose **Delete**.  
    
The delete diagnostic data functionality is only supported on Windows 10 version 1803 or later.  For more information, navigate to [Diagnostics, feedback, and privacy in Windows 10](https://support.microsoft.com/help/4468236).  

For Microsoft Edge on Windows 10, sending Optional diagnostic data is determined by your Windows diagnostic data setting.  To display the setting, [navigate to Privacy optional diagnostic data](#navigate-to-privacy-optional-diagnostic-data).  To change the Windows settings, complete the following actions.  

1.  Navigate to **Start** > **Settings** > **Privacy** > **Diagnostics & feedback**.  
    
On all other platforms, to control the collection of diagnostic data, complete the following actions.  

1.  [Navigate to Privacy optional diagnostic data](#navigate-to-privacy-optional-diagnostic-data).  
1.  Turn on \(or off\) the **Help improve Microsoft products by sending optional diagnostic data about how you use the browser, websites you visit, and crash reports** setting.  
    
The setting is used for all profiles associated with the installation of Microsoft Edge on your device.  The setting isn't synced across devices.  The setting applies to InPrivate browsing and Guest mode.  Information about websites you visit is never sent while browsing InPrivate or in Guest mode.  If your device is managed with group policies set by your organization, to review your managed state, [navigate to Privacy](#navigate-to-privacy).  

## Digital Rights Management and Media Licenses  

When a webpage provides media content that is protected by Digital Rights Management \(DRM\), Microsoft Edge uses a secure playback pipeline to ensure the you don't copy or improperly access the content.  As part of the feature, Microsoft Edge may store DRM-related data on your device. The DRM-related data on your device may include a unique identifier and media licenses.  Microsoft Edge may transmit the unique identifier to a media licensing server specified by the content provider.  When you use the webpage, Microsoft Edge retrieves the DRM information to make sure you have permission to use the content.  The data helps to validate access to the protected content and ensure a seamless media experience.  

Microsoft Edge supports DRM using the Encrypted Media Extensions API \(EME API\) for HTML5 websites.  The EME API allows websites to communicate with a DRM provider called a Content Decryption Module \(CDM\).  Different DRM systems may be supported by the CDM implementation of the developer.  DRM systems may include Widevine by Google or PlayReady by Microsoft.  Content providers may choose to support one or more potential DRM systems.  Also, content providers may use the functionality of the EME API to decide which DRM system to use for a specific client.  For more information about EME privacy, navigate to [Encrypted Media Extensions Privacy](https://w3.org/TR/encrypted-media#privacy).  

Microsoft Edge supports PlayReady DRM only on Windows 10.  PlayReady is a DRM implementation to deliver media experiences such as 4K video and Dolby Atmos audio.  Microsoft Edge uses the Windows Platform Media Foundation APIs to support PlayReady.  To validate access to protected content, Microsoft Edge on Windows 10 uses a unique identifier \(ID\) and communicates the ID with the PlayReady service.  All EME, CDM, and browser data for PlayReady that persists on the device is stored and maintained on Microsoft Edge.  For more information about PlayReady, navigate to [Simple End to End System](/playready/overview/simple-end-to-end-system).  

Microsoft Edge supports Widevine by Google DRM, and the option is turned on by default.  Microsoft Edge periodically fetches updates for Widevine from Google servers.  The use of Widevine may include communications to Google.  To opt-out of using Widevine in Microsoft Edge, complete the following actions.  

1.  Navigate to `edge://flags/#edge-widevine-drm`.  
1.  Turn off the Widevine DRM setting.  
    
Widevine has the capability to create a unique device identifier and transmit it to Google.  For more specific information on Widevine and privacy, navigate to the Google privacy policy.  

Microsoft Edge supports the Flash Access DRM by Adobe, which is used by some websites instead of HTML5.  Give permission to allow Adobe Flash when a website requests it.  When a website uses the Flash Access DRM by Adobe, Microsoft Edge gives Adobe access to a unique device identifier.  To clear and reset any locally stored instances of the identifier, complete the following actions.  

1.  [Navigate to Clear browsing data](#navigate-to-clear-browsing-data).  
1.  Choose the checkbox next to **Cookies and other site data**.  
1.  Choose **Clear now**.  
    
To stop Adobe Flash DRM from ever being used, navigate to `edge://settings/content/flash`.  

When you request access to encrypted HTML5 media like an online movie, Microsoft Edge creates a license request to decrypt the media.  The CDM being used creates the license request that contains a request ID.  The request is sent to the license server.  No part of the license request contains any personal data, and the license request isn't stored on the device.  

When returning the media license, a media identifier is created which is unique to the user and the website.  The ID isn't shared between websites and is different for each website.  A session ID, used to identify a playback session, is sent with the media identifier to decrypt the media.  The media identifier is stored locally on the device and may be stored with the content provider.  

To turn off all DRM and content protections, complete the following actions.  

1.  Navigate to `edge://settings/content/protectedContent`.  
1.  Turn off the following settings.  
    *   **Allow sites to play protected content (recommended)**  
    *   **Allow identifiers for protected content (computer restart may be required)**  
        
> [!NOTE]
> If you turn off the **Allow sites to play protected content** setting, playback for CDM-based DRM systems such as PlayReady and Widevine is blocked and turned off, but not for non-CDM-based systems like Flash Access DRM.  To manage Flash website permissions, navigate to `edge://settings/content/flash`.  If you turn off the setting, media functionality may stop working properly.  
> 
> If you turn off the **Allow identifiers for protected content** setting, the creation of identifiers for Flash Access DRM is blocked and Widevine is prevented from periodically fetching updates from Google.  If you turn off the setting, media functionality on some websites to stop working properly.  

## Do not Track  

To turn on the**"Do Not Track** feature on Microsoft Edge, complete the following actions.  

1.  [Navigate to Privacy privacy](#navigate-to-privacy-privacy).  
1.  Turn on the **Send "Do Not Track" requests** setting.  
    
If you turn on the **Do Not Track** feature, Microsoft Edge sends a `DNT:1` HTTP header with your outgoing HTTP, HTTPS, and SPDY browsing traffic requests to websites you visit to request that each doesn't use trackers.  However, when you turn on the **Send "Do Not Track" requests** setting it doesn't guarantee that the webpage doesn't track you.  Some websites may honor the request and display your advertisements based on none of your previous browsing.  Microsoft Edge doesn't control if the request is honored or not.  To help prevent websites from tracking you, complete the following actions.  

1.  [Navigate to Privacy tracking prevention](#navigate-to-privacy-tracking-prevention).  
1.  Turn on the **Tracking prevention** setting.  
1.  Change the **Tracking prevention** setting to **Balanced** or **Strict**.  
    
When you use Guest mode, Microsoft Edge doesn't send **don't Track** requests.  When you use InPrivate browsing and if you turned on the **Send "Do Not Track" requests** setting for the active profile, Microsoft Edge only sends **don't Track** requests.  

## Downloads  

Microsoft Edge lets you download files safely and securely.  To choose where files are downloaded on your device, navigate to `edge://settings/downloads`.  If you turn on SmartScreen, Microsoft Edge sends information about your file to SmartScreen to verify the reputation of the file.  Information about your file includes the file name and URL.  The reputation verification helps you avoid accidentally downloading known malware that is known to hurt your device.  To turn on \(or off\) SmartScreen, complete the following actions.  

1.  [Navigate to Privacy](#navigate-to-privacy).  
1.  Turn on \(or off\) SmartScreen.  
    
For more information about SmartScreen, navigate to the [SmartScreen](#smartscreen) section.  

To display the history of your previous downloads, navigate to `edge://downloads`.  To clear your browsing data and delete your download history, [navigate to Clear browsing data](#navigate-to-clear-browsing-data).  When you delete your download history from Microsoft Edge, it doesn't remove the files from your device.  When you delete downloaded files from your device, it doesn't remove the files from your download history.  When you use InPrivate browsing or Guest mode, the download history from the session is cleared when you close the InPrivate or Guest windows.   Also, when you use InPrivate browsing or Guest mode, the files are saved on the device.  

## Extensions and Microsoft Edge Add-ons  

You may install extensions in Microsoft Edge to add functionality to the browser.  When you install an extension from the Microsoft Edge Add-ons website or another extension store, Microsoft collects information about the extension.  The collected information helps developers and Microsoft understand how you use the extension.  Microsoft Edge collects aggregated data including the number of times an extension was downloaded and information about recent performance, such as crash data.  Microsoft shares the aggregated data with the developers of the extension.  Comments and reviews from users are public on the Add-ons website and are also shared with the developers.  If your account is active, Microsoft Edge associates installed extensions from the Microsoft Edge Add-ons website with your account to provide extension recommendations.  The data is used in aggregate to understand the popularity of extensions.  

If you want your extensions and preferences for your extensions to synchronize across all your signed-in syncing versions of Microsoft Edge, complete the following actions.  

1.  [Navigate to Profiles sync](#navigate-to-profiles-sync).  
1.  Choose the **turn on sync** button.  
    
Installing extensions is optional, and to uninstall any extension at any time, [navigate to Installed extensions](#navigate-to-installed-extensions).  When an extension is installed, the extension specifies what user data it needs to access.  Microsoft Edge asks for your permission before installing the extension.  Always make sure an extension is credible and secure before installing it and review the privacy policy of the developer for the specific extension.  

Extensions are updated using the Microsoft Edge update service.  Microsoft Edge sends a list of installed extensions to the update service to verify if an update is available.  If you install an extension from the Chrome Web Store, requests are sent to the Chrome Web Store at regular intervals to determine if extension updates exist.  The extension identifier, extension version, and information about Microsoft Edge are included in the request to search for updates.  To stop requests to the Chrome Web Store, complete the following actions.  

1.  [Navigate to Installed extensions](#navigate-to-installed-extensions).  
1.  Navigate to **From other sources**.  
1.  Uninstall extensions.  
    
When you import an extension from other browsers like Google Chrome, Microsoft Edge completes the following actions.  

1.  Microsoft Edge searches for the extension in the Microsoft Edge Add-ons website.  
1.  If the Microsoft Edge extension is found, Microsoft Edge downloads it.  
    1.  Microsoft Edge installs the Microsoft Edge extension.  
    1.  If the imported extension was turned on, Microsoft Edge turns on the extension.  
1.  If the Microsoft Edge extension isn't found, Microsoft Edge locally copies the extension from Google Chrome.  
    1.  Microsoft Edge installs the Google Chrome extension.  
    1.  Microsoft Edge doesn't turn on the Google Chrome extension and doesn't connect to the Chrome Web Store.  
    1.  Microsoft Edge asks for your permission to turn on the Google Chrome extension and to allow extensions from other stores.  
    1.  If you grant permission, Microsoft Edge allows you to install extensions from other stores and updates to your extensions using the Chrome Web Store.  
        
To turn on \(or turn off\) the import an extension option, complete the following actions.  

1.  [Navigate to Installed extensions](#navigate-to-installed-extensions).  
1.  Turn on \(or off\) **Allow extensions from other stores** setting.  
    
## Family safety  

Microsoft offers many tools to help families stay connected and keep kids safer on Windows 10, Xbox, and Android devices running Microsoft Launcher.  

Within a family group, family settings exist that should be turned on for children while using Microsoft Edge.  The family group organizer must turn on the settings for users in the group.  The three main features offered to a family group are web filtering, activity reporting, and safe search.  

Web filters protect children in the family group from going to mature websites or websites blocked by the family organizer.  

Activity reporting records information about the websites that child visits.  Also, activity reporting records information about searches, screen time, devices used, and navigation attempts to blocked webpages.  The family group organizer may review the information at [family.microsoft.com](https://account.microsoft.com/family).  The data is collected, encrypted in transit, sent to Microsoft, and stored on secure Microsoft storage servers.  The data is collected with the child's Microsoft account so it may be properly managed.  Activity reports are stored on [family.microsoft.com](https://account.microsoft.com/family) for up to 30 days and then deleted after.  

Safe search adds a safe keyword to the header request to search engines.  [Microsoft Bing](https://bing.com) reads the safe keyword and filters search results returned to the child.  Other search engines may return filtered results for the keyword as well.  All the child's searches are collected and made available for the family organizer to display in activity reports or at [family.microsoft.com](https://account.microsoft.com/family).  The data is collected with the child's Microsoft account so it may be properly managed.  

Microsoft stores the child's browsing data on secure Microsoft servers. Parents may display the child's browsing data for up to 30 days, then immediately the data is deleted.  To delete your child's browsing data at any time, navigate to your [Microsoft privacy dashboard](https://account.microsoft.com/privacy/).  To clear browsing data stored locally on a device, [navigate to Clear browsing data](#navigate-to-clear-browsing-data).  

to turn on collection of the data and sharing with the family group organizer, you must complete the following actions.  

*   The child's Microsoft account is associated with the child's Windows 10 profile.  
*   The child's Windows 10 profile is active.  
*   The family organizer turns on the activity report setting.  
    
You don't need the child account active in Microsoft Edge to collect the data.  If family safety features aren't available on your version of Windows 10, you may update to the most recent version of Windows to get the features.  

Guest mode and InPrivate browsing are turned off if web filtering or activity reporting is turned on.  

The family group organizer may stop the data collection from the family safety portal.  For more information about Microsoft family safety features, navigate to [What is a Microsoft family group?](https://support.microsoft.com/help/12413)  

## Geolocation  

Microsoft Edge supports the [Geolocation API](https://w3.org/TR/geolocation-api), which allows websites to access your location information with your permission.  Websites may ask for your location, for example, when trying to find the closest coffee shop near you.  Microsoft Edge always asks for your permission before granting websites access to your location.  To manage the permission or to always block websites from accessing your location, navigate to `edge://settings/content/location`.  

On the right side of the address bar, Microsoft Edge indicates when your location is or isn't being shared.  

:::image type="complex" source="./media/geolocation2.png" alt-text="Location" lightbox="./media/geolocation2.png":::
   Location  
:::image-end:::  

If you allow sharing of your location with a website, Microsoft Edge sends local network information such as your IP address and nearby Wi-Fi access points to the Microsoft location service.  The Microsoft service uses the information to estimate your geolocation coordinates.  The geolocation estimate is shared with the website with which you agreed to share your location.  To specify that Microsoft Edge provides the requesting website with a more precise location on Windows 10, complete the following actions.  

1.  Choose **Settings** > **Privacy** > **Location**.  
1.  Turn on the **Allow access to location on this device** and **Allow apps to access your location** settings.  
    
If you turn off the **Allow access to location on this device** and **Allow apps to access your location** settings, Microsoft Edge provides an approximate location to the requesting website.  The information is only shared with a requesting website if you previously allowed to it to capture your location.  For more information about Windows location settings, navigate to [Windows 10 location service and privacy](https://support.microsoft.com/help/4468240).  

A new randomly generated ID is used when making requests to the Microsoft Edge location service.  The Microsoft Edge location service doesn't store your geolocation coordinates.  

InPrivate browsing uses the location permission setting of the profile from which the InPrivate session was launched.  Guest mode always asks you for permission before granting the website your location.  

## Import browser data  

Microsoft Edge offers an interactive and flowing experience when you launch the browser for the first time.  As part of the experience, you may import your browser data to Microsoft Edge from another browser.  During the import experience, you may either keep your imported data or delete it and start fresh.  The data includes your favorites, browsing history, autofill data, extensions, settings, and other browsing data.  Your browsing data from older versions of Microsoft Edge is automatically imported when you update to the new Microsoft Edge.  

To import and update browser data from other browsers, complete the following actions.  

1.  Choose to import.  
1.  Confirm your choice.  
1.  Microsoft Edge imports browser data from your other browsers.  Other browsers include Google Chrome, Mozilla Firefox, and Internet Explorer.  Which browser it targets for import is based on your most used browser defined by your OS.  

Microsoft Edge locally imports your data on your device, locally stores it, and doesn't sent it to Microsoft unless you agree to synchronize your browsing data.  

:::image type="complex" source="./media/migration.png" alt-text="Import" lightbox="./media/migration.png":::
   Import  
:::image-end:::  

When you import your extensions from a different browser such as Google Chrome, Microsoft Edge imports a local copy and asks for permission before it turns on the extension if the extension isn't available on the Microsoft Edge Add-ons website.  The permissions for some of the extensions may have changed.  To review the extension permissions, [navigate to Installed extensions](#navigate-to-installed-extensions).  

To import data from another browser at any time, navigate to `edge://settings/importData`.  

## Install and update  

You may download and install Microsoft Edge on platforms such as Windows and macOS.  Microsoft Edge uses the updater service to keep your version of Microsoft Edge up to date and secure.  

When you download and install or update Microsoft Edge, the installer  sends information about your device and a resettable identifier to Microsoft during the installation or update process.  The information about your device includes your release channel, basic hardware information, update identifiers, and an identifier unique to your device.  The resettable identifier is unique to your browser.  The IP address of the device is sent to the updater service, but the last decimal is scrubbed for added privacy protections.  During each browsing session, a new randomly generated token is created to install updated versions of Microsoft Edge.  The token isn't associated with any personal information and is only used for the installation and update process and to improve the updater service.  

Microsoft Edge pings the Microsoft Edge updater service about the progress of installation and update.  If an installation or update fails and if you turned on crash reporting, Microsoft Edge creates a log and sends it to Microsoft.  For more information about sending crash reports to Microsoft, navigate to the [Crashes](#crashes) section.  Microsoft collects installation information to better understand the success of Microsoft Edge downloads. The installation information includes how you downloaded Microsoft Edge, the success of the installation, and any uninstalls.  

Automatic updates are turned on by default for all Microsoft Edge users.  On all platforms, Microsoft Edge verifies if updates exist on startup and periodically while running.  On macOS devices, Microsoft AutoUpdate periodically verifies if updates for Microsoft products exist as well.  More controls and configurations are available for organizations.  For more information about other controls and configurations, navigate to [Update](/deployedge/microsoft-edge-update-policies#update).  

## Internet Explorer mode  

Microsoft Edge offers a simplified experience with the integration of Internet Explorer \(IE\).  Microsoft Edge only supports IE 11, and IE mode is only available on Windows.  The IE mode feature is available for organizations through group policies.  The administrator chooses to open certain websites in IE mode in Microsoft Edge.  

:::image type="complex" source="./media/ie-mode.png" alt-text="IE mode" lightbox="./media/ie-mode.png":::
   IE mode  
:::image-end:::  

Microsoft Edge downloads the list of websites from a location that the administrator defined through a policy.  Microsoft Edge caches the file that determines which websites must be opened in IE mode.  Based on your Windows or IE 11 settings, Microsoft Edge collects diagnostic data about the use of IE mode, such as which websites the user visits, performance data, reliability data, and feature usage data.  On Windows 10, the diagnostic data is collected according to your Windows Diagnostic data setting.  On Windows 8.1, website information is collected if the user has opted into the **Flip Ahead** or **Suggested Sites** feature in IE.  IE mode may not follow the same data collection settings in the Microsoft Edge Privacy settings.  

If your administrator turned on **Enterprise Site Discovery**, Microsoft Edge periodically collects browsing history data to help administrators review the websites that the user visits and ensure that any system upgrades continue to support the websites.  For more information about **Enterprise Site Discovery** in IE11, navigate to [Collect data using Enterprise Site Discovery](/internet-explorer/ie11-deploy-guide/collect-data-using-enterprise-site-discovery).  

Non-enterprise users on Windows devices may also access IE mode.  To turn on IE mode, complete the following actions.  

1.  Navigate to `edge://settings/defaultBrowser`.  
1.  Choose the **Allow sites to be reloaded in Internet Explorer mode** setting.  
    
To open tabs in IE mode, complete the following actions.  

1.  Choose **Settings and more (...)** > **More tools**.  
1.  Choose **Reload in Internet Explorer mode**.  
    
After you turn on IE mode, Microsoft Edge periodically requests a list of unsupported websites from a Microsoft service.  The request is sent over HTTPS and doesn't contain any identifiers.  

Internet Explorer browsing data is stored locally in Microsoft Edge and Internet Explorer.  To delete browsing data while browsing in IE mode, complete the following actions.  

1.  [Navigate to Privacy](#navigate-to-privacy).  
1.  Clear the data from both **Clear browsing data** and **Clear browsing data for Internet Explorer**.  
    
## Intrusive ads  

To provide a better browsing experience, Microsoft Edge offers to block advertisements from loading on websites that show intrusive or misleading ads.  When you turn on Ads Blocking, Microsoft Edge periodically downloads from Microsoft servers the most recent list of websites that show intrusive or misleading ads and stores it locally on your device.  No user identifiers are included in the download request.  If you navigate to a website on the list, Microsoft Edge blocks all ads on the website and the `Ads blocked` message should display.  To allow ads for the website, complete the following actions.  

1.  Navigate to `edge://settings/content/ads`.  
1.  Change the settings.  
    
When you download the list of websites with intrusive ads, Microsoft Edge sends information to Microsoft, otherwise the Ads Blocking feature doesn't send additional information to Microsoft or request additional information from Microsoft while you browse the web.  

## Jump list  

The jump list in Microsoft Edge allows you easily find your most recently closed websites.  To open the jump list, complete the following actions.  

1.  Hovering on the Microsoft Edge icon in the task bar. 
1.  Open the contextual menu \(right-click\).  
    
The last three closed tabs are stored locally for each profile.  To delete a websites from the jump list in Windows 10, complete th following actions.  

1.  Open the jump list.  
1.  Hover on a website.  
1.  Open a contextual menu \(right-click\).  
    
To clear the display of your recently closed tabs in the jump list, complete the following actions.  

1.  [Navigate to Clear browsing data on close](#navigate-to-clear-browsing-data-on-close).  
1.  Turn on the **Browsing history** setting.  
    
When using an InPrivate window, Microsoft Edge doesn't add closed tab information to the jump list.  When using Guest mode, the jump list isn't available.  For more information about clearing your browsing data, navigate to [View and delete browser history in Microsoft Edge](https://support.microsoft.com/help/10607).  

## Kids Mode

Kids Mode is a convenient browsing mode designed for kids inside Microsoft Edge.  With the kid-friendly features and safety guardrails in place, Kids Mode is a great place for children to safely explore the web.  Kids Mode includes features like custom browser themes, kid-friendly content, browsing based on an allowlist, [Microsoft Bing](https://bing.com) SafeSearch set to strict, and a password requirement to exit.  Microsoft Edge does not allow you to sign into Kids Mode, because Kids Mode doesn't require a child account or profile.  

:::image type="complex" source="./media/kids-mode.png" alt-text="Kids Mode" lightbox="./media/kids-mode.png":::
   Kids Mode  
:::image-end:::  

Browsing in Kids Mode is limited to a default list of kid-friendly websites.  Upon navigation, the website is compared to a local list of allowed websites.  Since the browsing in Kids Mode isn't associated with any account, when you navigate to webpage in Kids Mode, it doesn't display on [family.microsoft.com](https://account.microsoft.com/family).  Allowed website exceptions are added through the profile in which Kids Mode was launched.  When synchronization is turned on, Microsoft Edge synchronizes the exceptions to the Windows 10 profile in which Kids Mode was launched.  

To enhance the Kids Mode experience, Microsoft Edge adds a safe keyword to the header request to [Microsoft Bing](https://bing.com) and Microsoft News.  The safe keywords help filter out inappropriate search results and news.  Kids Mode sets preferences for Microsoft Edge settings such as setting tracking prevention to Strict to block most trackers on websites.  Clear browsing data on close has also been turned on which clears things like Cookies and other website data when Kids Mode closes.  To clear browsing data at any time within Kids Mode, complete the following actions.  

1.  Choose **Settings** > **Privacy**.  
1.  Choose the **Choose what to clear** button.  
    
Kids Mode doesn't collect data for personalization of the news feed or other Microsoft services.  You may not change the privacy settings for Kids Mode.  Other settings like Windows Defender SmartScreen and diagnostic data are configured according to the profile in which Kids Mode was launched.  For more information about diagnostic data about how you use the browser and Windows Defender SmartScreen, navigate to the [Diagnostic Data](#diagnostic-data) and [SmartScreen](#smartscreen).  


## Network time  

Microsoft Edge uses a Microsoft network time service to track time from an external source such as a time server.  At random intervals or when Microsoft Edge finds an expired TSL/SSL certificate, Microsoft Edge may send requests to Microsoft to obtain the time from a trusted source.  The requests occur more frequently if Microsoft Edge detects the system clock is inaccurate.  A system clock inaccuracy happens if the user changes the time on the operating system and that conflicts with the correct time zone.  The Microsoft network time service is used to get the Coordinated Universal Time \(UTC\).  The requests contain no cookies or user identifiers, and no data is logged.  

## New tab page  

Microsoft Edge provides an engaging and user-centric new tab page experience.  The new tab page experience includes the following features.  

*   A search box powered by [Microsoft Bing](https://bing.com).  
*   A quick link tiles for the websites you visit most frequently.  
*   Relevant content from Microsoft News or Office 365.  
    
Customize the appearance of the new tab page by choosing the customize button.  You set your new tab page preferences for each profile.  Microsoft Edge locally stores the new tab page preferences on your device and doesn't synchronize the preferences across devices.  

To enhance the load times of the new tab page, the Microsoft new tab page may be loaded in the background to make it faster.  The content that is loaded may include cookies, if you allow cookies.  To block loading the Microsoft new tab page in the background, complete the following actions.  

1.  Navigate to `edge://settings/newTabPage`.  
1.  Turn off the **Preload the new tab page for a faster experience** setting.  
    
:::image type="complex" source="./media/n-t-p1.png" alt-text="New tab page" lightbox="./media/n-t-p1.png":::
   New tab page  
:::image-end:::  

### Microsoft News  

To tailor content to your interactions and preferences, the new tab page in Microsoft Edge stores cookies with randomly generated identifiers on the device.  A scrubbed version of your IP address is also used to tailor the content to your general region.  TO clear the cookies that persist on your device, navigate to `edge://settings/siteData`.  

To prevent ads from being personalized, complete the following actions.  

1.  Navigate to the [Microsoft privacy dashboard](https://account.microsoft.com/privacy/).  
1.  Navigate to [Ad settings](https://account.microsoft.com/privacy/ad-settings).  
1.  Turn off the **See personalized ads in your browser** setting.  
    
To turn off the quick link tiles, complete the following actions.  

1.  Choose **customize button** > **Custom**.  
1.  Turn off the **Show quick links** setting.  
    
Microsoft Edge uses your local browsing history to personalize the quick link tiles, and you may delete or create new tiles.  The data is only stored locally on the device, per profile.  

The search box on the new tab page uses [Microsoft Bing](https://bing.com) to search based on the search query you type.  To provide search suggestions and results, Microsoft Edge shares your typed characters, search query, IP address, and search identifiers with [Microsoft Bing](https://bing.com).  The search box may be configured with group policies to provide search results from Microsoft Search, and returns information from your organization such as documents and intranet content.  To provide an integrated search experience, Microsoft Edge stores cookies locally on the device.  

If your Microsoft account is active in Microsoft Edge, manage your browsing activity associated with the new tab page from the [Microsoft privacy dashboard](https://account.microsoft.com/privacy/ad-settings).  

Microsoft Edge collects diagnostic data about how you use the new tab page.  The diagnostic data includes interactions with the search box and choices on quick link tiles.  To allow collection of diagnostic data about how you use the new tab page, complete the following actions.  

1.  [Navigate to Privacy optional diagnostic data](#navigate-to-privacy-optional-diagnostic-data).  
1.  Turn on the **Help improve Microsoft products by sending optional diagnostic data about how you use the browser, websites you visit, and crash reports** setting.  
    
The browser sends diagnostic data about how you use the Microsoft News page to Microsoft to help understand user interactions with news content and improve Microsoft products.  You may turn off Microsoft News content by choosing the customize button on the new tab page.  News data is sent to Microsoft using HTTPS and stored.  Up to 13 months later, the news data is aggregated and made anonymous.  

The new tab page also allows you to set a custom image as the background.  Microsoft Edge locally stores the image on the device.  To delete the image, remove the existing image.  To replace the image, upload a new image.  No information about the image is sent to Microsoft.  

### Office 365  

If your work or school account is active in Microsoft Edge, your organization may turn on Office 365 as an option for webpage content on the new tab page.  The feature is currently available only for commercial customers, and is governed under the [Microsoft Online Services Terms (OST)](https://www.microsoft.com/licensing/product-licensing/products).  For more information about privacy for Office 365, navigate to [Overview of privacy controls for Microsoft 365 Apps for enterprise](/deployoffice/privacy/overview-privacy-controls).  

InPrivate browsing and Guest mode offer alternative new tab page experiences.  

## On startup  

Microsoft Edge allows you to return to your previous browsing session.  The option to open the last open tabs from your previous browsing session, including session cookies, remains available on startup to restore tabs from your previous session and keep you signed into websites you visited.  To turn on opening your last open tabs from your previous browsing session, complete the following actions.  

1.  Navigate to `edge://settings/onStartup`.  
1.  Turn on the **Continue where you left off** setting.  
    
If you choose the **Continue where you left off** setting and clear browsing data each time you close the browser, Microsoft Edge deletes the specified data.  However, the URL persists for the next session.  

You may also set Microsoft Edge to open specific webpages on startup.  The webpages you specify are stored locally on your device and are specific to your profile.  If you turned on synchronization for Settings, the specified webpages are synced across all versions of Microsoft Edge where your account is active.  To turn on syncing your settings, complete the following actions.  

1.  [Navigate to Profiles sync](#navigate-to-profiles-sync).  
1.  Turn on the **Settings** setting.  
    
InPrivate and Guest mode tabs aren't restored on startup.  

## Password Monitor
Microsoft Edge is committed to keeping you safe on the web.  To safeguard and secure your personal data, if your account is active in Microsoft Edge, Password Monitor alerts you if your credentials are exposed in a third-party data theft.  If you turn on Password Monitor, your saved credentials are hashed and encrypted locally on your device, sent to Microsoft servers over HTTPS, and compared against an encrypted list of known stolen credentials.  Your signed-in account identifier is securely sent along with your hashed and encrypted credentials to the Password Monitor service.  If Microsoft finds a credential in the list of known stolen credentials, Microsoft sends an encrypted response back to your Microsoft Edge instance to warn you that your credential was detected as part of a hack or theft.  No data is stored on Microsoft servers after the verification is complete.  

The feature is only available for users signed into Microsoft Edge.  Microsoft Edge asks for your permission to turn on Password Monitor.  To turn Password Monitor on \(or off\), navigate to `edge://passwords`.

## Payments  

Microsoft Edge helps you be more productive.  Microsoft Edge allows you to save your payment information to your profile and offers to fill payment forms with your payment information when you need it.  When you navigate to a similar payment form, Microsoft Edge offers to fill in the form with the saved info.  Information about Credit cards and other payment option is only saved with your explicit permission.  

Microsoft Edge asks you if you want to store your payment information if payment autofill is turned on.  The information is encrypted locally on your device.  To delete saved payment information, complete the following actions.  

1.  Navigate to `edge://settings/payments`.  
1.  Navigate to **Cards you've saved on this device**.  
1.  Delete saved payment information.  
    
When you delete saved payment information, the information no longer appears as an autofill suggestion.  To not save any payment information, complete the following actions.  

1.  Navigate to `edge://settings/payments`.  
1.  Turn off the **Save and fill payment info** setting.  

Microsoft Edge supports the `PaymentRequest` API by letting you pay for purchases with payment information you previously saved using autofill.  `PaymentRequest` API allows the merchant to request the following information: credit card number, credit card expiration, full name, billing address, email address, phone number, and shipping address.  The `PaymentRequest` API informs the merchant that the user has saved credit card information.  The `PaymentRequest` API doesn't share any information with the merchant until after the user agrees.  To turn off the Payments feature, complete the following actions.  

1.  [Navigate to Privacy privacy](#navigate-to-privacy-privacy).  
1.  Turn off the **Allow sites to check if you have payment methods saved** setting.  
    
If you previously saved payment information to your Microsoft account, the payment information is also available for autofill in the browser.  Payment information stored in your Microsoft account syncs across devices.  If you previously made any Xbox or Microsoft Store purchases, you may already have payment information saved to your Microsoft account.  During payment autofill, a card from your Microsoft account is masked and is only fully revealed after two-factor authentication.  The masking provides extra security while retrieving your payment information.  

## Personalize advertisements, search, news, and other Microsoft services  

If you allow personalization, the Microsoft Edge team collects and uses your Microsoft Edge browsing history to personalize experiences and advertisements on [Microsoft Bing](https://bing.com), Microsoft News, and other Microsoft services.  Personalization provides more relevant and useful search results, ads, and news content.  For example, if Microsoft Edge infers you prefer shopping at a particular store based on your browsing history, Microsoft Edge displays advertisements that closely match products from the specific store.  Similarly, if you frequently read travel blogs and travel articles, your news feed may include more relevant news content about traveling.  
 
The feature is only available for users with a non-child Microsoft account.  The feature isn't available for users signed into Microsoft Edge with a work or school account.  

Your browsing history is collected and used for personalization only if all four conditions are met.  

*   The user is signed into a non-child Microsoft account.  
*   The user has granted permission for the collection and use of the data for personalization.  
*   The user's group policies managed by the organization \(employer, school, and so on\) allow personalization.  
*   The user isn't using the browser in Guest mode or InPrivate.  
    
Your browsing history and other relevant data are transferred over HTTPS and attached to your Microsoft account information.  Your browsing history is stored on secure Microsoft servers.  You may display and delete previously shared browsing history by going to the [Microsoft privacy dashboard](https://account.microsoft.com/privacy/).  Your browsing history is stored on secure Microsoft servers for up to 45 days.  In 45 days, the data is deleted and not used for personalization.  

You may modify your interests or opt-out of personalized ads from the [Ad settings](https://account.microsoft.com/privacy/ad-settings) on the [Microsoft privacy dashboard](https://account.microsoft.com/privacy/).  

> [!NOTE]
> Opting out of personalized ads on the [Microsoft privacy dashboard](https://account.microsoft.com/privacy/) doesn't turn off the collection and use of your browsing history for personalization of search results and content in your news feed.  To turn off the collection and use of your Microsoft Edge browsing history for personalized search results and news, complete the following actions.  
> 
> 1.  [Navigate to Privacy personalize your web experience](#navigate-to-privacy-personalize-your-web-experience).  
> 1.  Turn off the **Improve your web experience by allowing Microsoft to use your browsing history from the account for personalizing advertising, search, news and other Microsoft services** setting.  
>     
> If you stop sharing the data, Microsoft no longer collects and uses your browsing history to personalize ads, search results, and news.  For more information about personalization in Microsoft Edge, navigate to [Microsoft Edge browsing history for personalized advertising and experiences](https://support.microsoft.com/help/4532583).  

## Print  

Microsoft Edge lets you print webpages, PDF files, or other content using various devices and apps.  When you print to a printer, app, or PDF, Microsoft Edge sends the commands and file information to the operating system of your device.  The information isn't sent to Microsoft.  Immediately after you complete or cancel your print job, all the print data sent to the operating system on your device is deleted.  To change your printing destination, navigate to `edge://settings/printing`.  

You may also print webpages and files to a PDF using Microsoft Print to PDF, which doesn't send any data about the file back to Microsoft.  Any annotations made to the PDF file are saved locally to the file.  

## Profiles  

Profiles in Microsoft Edge allow you to separate your browsing data into independent profiles.  Data associated with one profile is separate from data associated with other profiles.  Your personal favorites and history, for example, aren't synchronized with your work account if you set each up in different profiles.  

However, users may easily switch between existing profiles in Microsoft Edge without the need for passwords.  If users have access to the same device, users may create another profile on the same version of Microsoft Edge without the permission of the current profile owner.  When you remove the profile from Microsoft Edge settings, Microsoft Edge permanently deletes browsing data for the specific profile stored on the device.  The browsing data includes browsing history, favorites, form fill data, and passwords.  Data synced to your account may still be stored in the Microsoft cloud and may be cleared from the [Microsoft privacy dashboard](https://account.microsoft.com/privacy/).  

Guest mode is a temporary instance of a fresh profile.  It allows you to browse on another user's device without modifying the signed-in profile.  Browsing data from Guest mode such as favorites, browsing history, passwords, and form fill data doesn't persist after you close all Guest mode windows.  Downloaded files are stored on the device, but the history of the downloads is deleted.  Guest mode allows you to browse the web without being automatically signed into other websites.  Microsoft Edge doesn't send websites any information to indicate that the user is browsing in Guest mode.  When you use Guest mode, permission to collect diagnostic data about following actions is taken from the profile in which you launched the Guest mode session.  

*   Your browser usage.  
*   List of webpages to which you navigate.  
    
All browsing data for the specific Guest mode session is cleared after all Guest windows are closed.  

InPrivate browsing is a private browsing mode in which the following data sources aren't remembered.  

*   Browsing history.  
*   download history.  
*   Cookies.  
*   Website data.  
*   Form fill data.  
    
Microsoft Edge saves downloaded files and any new favorites created while browsing InPrivate.  By default, while browsing InPrivate, Microsoft doesn't collect any information about websites you visit for product improvement purposes.  Your school, workplace, or internet service provider may still have access to your browsing activity.  Browsing data for the specific InPrivate session is cleared after all InPrivate windows are closed.  When using the Windows Input Method Editor \(IME\) keyboard for typing and inking, data may be collected to improve language recognition and suggestion capabilities.  To stop Microsoft from collecting ink and type input data while you use the Windows IME keyboard in InPrivate and normal browsing windows, complete the following actions.  

1.  Choose **Start** > **Settings** > **Privacy**.  
1.  Choose **Inking & typing personalization**.  
    
For more information about InPrivate browsing, navigate to [Browse InPrivate in Microsoft Edge](https://support.microsoft.com/help/4533513).  

## Read aloud  

Microsoft Edge offers Read aloud, which reads the content of a webpage to the user.  To start Read aloud, complete the following actions.  

1.  Hover on anywhere on the webpage and open the contextual menu \(right-click\) or 
    *  You may also choose **Settings and more (...)**.  
1.  Choose **Read aloud**.  
    
Read aloud offers multiple voices that may be used to read the webpage content.  If you use voices [installed on Windows 10](https://support.office.com/article/4c83a8d8-7486-42f7-8e46-2b0fdf753130) under the **Time & Language** section of Windows 10 Settings and want to clear the local cache for any voices you previously used, [navigate to Clear browsing data](#navigate-to-clear-browsing-data).  

When you start Read aloud, Microsoft Edge uses the [Web Speech API](https://wicg.github.io/speech-api).  After you choose a voice, Microsoft Edge converts the contents of the webpage from text to speech using either a client-side library or a server-side library.  The platform-supplied, client-side library is specific to your operating system or device.  The server-side library is powered by Azure Cognitive Services.  If your content is converted to speech using a client-side library, no information is sent to Microsoft servers.  If your content is converted to speech using Azure Cognitive Services, the text, along with a randomly generated token, is sent to Microsoft.  Azure Cognitive Services is indicated by the `Online` term in any of the voice names.  Once conversion is complete, the service returns the spoken text in an audio file to your device.  All data is encrypted during transmission from your device to Microsoft and from Microsoft back to your device.  The text sent to Microsoft and the generated audio file are both deleted immediately after conversion occurs.  Microsoft doesn't store any other data about your web content.  

## Releasing new functionality  

To improve Microsoft Edge, the Microsoft Edge team is always learning from users.  As part of the learning, some users may experience new functionality before the feature is available to everyone.  To turn on new functionality for randomly chosen users, Microsoft Edge regularly sends required information to the Microsoft Edge configuration service.  The required information includes required information about your operating system, channel, version, country or region, and other device configuration data.  Microsoft Edge sends the data with a resettable identifier that is unique to your browser.  Data is transmitted to the service over HTTPS.  The data is used for receiving updates to allow new functionality, to keep Microsoft Edge up to date and properly working, and to improve Microsoft products and services.  More controls and configurations are available for organizations.  For more information about other controls and configurations for organizations, navigate to [Microsoft Edge configurations and experimentation](/deployedge/edge-configuration-and-experiments).  

Microsoft Edge blocks users from turning off the browser updates controlled or configured by your organization.  To control whether Microsoft Edge sends your product usage data to Microsoft, complete the following actions.  

1.  [Navigate to Privacy optional diagnostic data](#navigate-to-privacy-optional-diagnostic-data).  
1.  Change the settings.  
    
To understand how new functionality affects Microsoft Edge and Microsoft services, Microsoft Edge sends a resettable identifier and a functionality tag to Microsoft Edge and Microsoft services.  The resettable identifier is unique to your browser.  The functionality tag encodes that you turned on new functionality.  New functionality helps to build the best experiences and the best browser for everyone.  The functionality tag isn't unique to your installation of Microsoft Edge.  All Microsoft Edge installations that share the same set of active features share the same functionality tag.  Microsoft Edge sends the information in HTTPS to Microsoft services.  The browser doesn't send the information when you browse InPrivate or in Guest mode.  To prevent the data from being sent, complete the following actions.  

1.  [Navigate to Privacy optional diagnostic data](#navigate-to-privacy-optional-diagnostic-data).  
1.  Turn off the **Help improve Microsoft products by sending optional diagnostic data about how you use the browser, websites you visit, and crash reports** setting.  
    
For more information about how to reset the identifier unique to your browser, navigate to the [Diagnostic data about how you use the browser](#diagnostic-data) section.  

## Resolve navigation errors  

If Microsoft Edge detects TSL/SSL connection timeouts, certificate errors, or other network issues that may be caused by a captive portal \(for example, a Wi-Fi network at a hotel or airport\), Microsoft Edge sends a request to `http://edge.microsoft.com/captiveportal/generate_204` and verifies the response code.  If the request is redirected to another URL that is an authentication webpage, Microsoft Edge opens the URL in a new tab.  Requests to the captive portal detection webpage are a stateless service.  Requests aren't logged and cookies aren't sent or saved.  On Windows platforms, Microsoft Edge uses a Windows captive portal service.  Otherwise, the Microsoft Edge captive portal service is used.  To turn off the service, complete the following actions.  

1.  [Navigate to Privacy services](#navigate-to-privacy-services).  
1.  Turn off the **Use a web service to help resolve navigation errors** setting.  
    
## Secure DNS

To navigate to a webpage, the browser searches for the network address associated with the host name used in the URL of the website.  An example of a network address is `93.184.216.34`.  An example of a host name is `example.com`.  Secure DNS uses a service over an HTTPS connection to the DNS service provider to complete the lookup.  Use of a secure DNS protects the lookups from modification or eavesdropping by attackers on the network.  

By default, your current DNS service provider is used to avoid disruptions to your browsing.  Not all service providers offer secure DNS.  To avoid disruption to your browsing, if the secure DNS connection fails, Microsoft Edge attempts an unencrypted DNS lookup with your current DNS service provider.  Microsoft Edge allows you to use a specific secure DNS provider.  If a secure DNS provider is chosen, then Microsoft Edge doesn't fall back to regular DNS lookup if the secure lookup fails.  To choose your secure DNS settings, navigate to `edge://setting/privacy`.  

Secure DNS is turned off by default for managed machines in an organization. but an administrator may configure it using administrative policies.  InPrivate browsing uses the secure DNS setting of the profile from which the InPrivate session was launched.  Guest mode always uses your current service provider.

## Shopping

Microsoft Edge helps you find coupons, rebates, and better prices while shopping online.  To help you find coupons or the best price while shopping online, Microsoft Edge downloads a list of shopping domains locally to the client from the Microsoft shopping service.  When you navigate to a webpage or save an item to your Collections, Microsoft Edge locally determines if the webpage is a shopping domain or product detail webpage.  If the website is identified as a shopping webpage, Microsoft Edge sends the URL with personal data removed to the Microsoft shopping service.  Also, Microsoft sends the following information to the Microsoft shopping service.  

*   The product price.  
*   The product image.  
*   The product name.  
*   The ratings.  
*   The reviews.  
*   Information about Microsoft Edge.  
*   Information about your operating system version.    
    
The data is sent over HTTPS with a randomly generated identifier and cookies if cookies are allowed.  The Microsoft Edge shopping feature requires sharing of cookie information with [Microsoft Bing](https://bing.com).  For example, the cookies may be used for debugging, fraud detection, and analytics.  The Microsoft shopping service returns prices from other retailers, historical price trends, and any available coupons for that website.  

When you're applying coupons, cookies are stored on your device to correctly attribute the coupon provider.  Cookies are saved by Microsoft-trusted coupon providers only after a coupon is successfully applied on the cart.  After the webpage applies the coupons, Microsoft Edge sends information about the success of the coupons to the Microsoft shopping service.  The information helps the Microsoft shopping service understand which coupons succeeded or failed.  Data sent to the Microsoft shopping service is sent over HTTPS with a randomly generated identifier, which changes per coupon lookup.  

:::image type="complex" source="./media/shopping.png" alt-text="Shopping and coupons" lightbox="./media/shopping.png":::
   Shopping and coupons  
:::image-end:::  

When you navigate to a shopping domain and you have a [Microsoft Bing](https://bing.com) Rebates account, Microsoft Edge sends the domain along with cookies to the Microsoft shopping service to retrieve your [Microsoft Bing](https://bing.com) Rebates profile and cash back offers for the domain.  If you activate the cash back feature, Microsoft Edge sends your URL to the Microsoft shopping service to receive an affiliate URL.  Cookies may be stored on your device to correctly attribute the rebates provider.  

The shopping service is turned on by default for all users.  To change the shopping setting in Microsoft Edge, complete the following actions.  

1.  [Navigate to Privacy services](#navigate-to-privacy-services).  
1.  Turn off the **Save time and money with Shopping in Microsoft Edge** setting.  
    
InPrivate browsing uses the shopping setting of the profile launched the InPrivate session.  

## Sign in and Identity  

Signing into Microsoft Edge provides other features to make the browser more productive for you.  To sign you in seamlessly, when you first launch Microsoft Edge, it attempts to detect your identity from the operating system.  If Microsoft Edge detects your identity from the operating system but you don't want to remain signed into Microsoft Edge, complete the following actions.  

1.  [Navigate to Profiles](#navigate-to-profiles).  
1.  Either sign out or remove your profile.  
    
To sign into Microsoft Edge, your identity in not detected from the operating system, [navigate to Profiles](#navigate-to-profiles).  

If you add new identity to the operating system and your Microsoft Edge profile doesn't currently have an identity, Microsoft Edge adds the identity to your profile.  If your Microsoft account or a work or school account is active in Microsoft Edge and you don't have an identity on your Windows 10 profile, Windows 10 adds the active account to your profile.  You Choose to not add it to your profile when you sign into your account.  

Your signed-in profile doesn't begin syncing your data without your explicit permission while either launching Microsoft Edge for the first time or signing into the browser.  

If your account is active in Microsoft Edge, other features are included.  The features include single sign-on and other identity-powered experiences such as synchronization.  Also, your account is automatically signed into websites including [Microsoft Bing](https://bing.com).  If you want to only sign into Microsoft Edge and no other Microsoft websites, sign out of each website.  Microsoft Edge creates a `sign-out` cookie to command Microsoft Edge to not sign into the specific website for future visits.  To sign into specific websites again using your user name and password or clear your cookies, [navigate to Privacy](#navigate-to-privacy).  For more information about how to clear your browsing data, navigate to [View and delete browser history in Microsoft Edge](https://support.microsoft.com/help/10607).  

To prevent any identity from being associated with Microsoft Edge, complete one of the following actions.  

*   Remove your Microsoft Edge profile.  
*   Sign out of your account in Microsoft Edge.  
    
To delete all data associated with your Microsoft Edge profile from your device, you must remove your Microsoft Edge profile.  If you delete all data, Microsoft Edge does not delete previously synchronized data associated with the identity.  

Your identity in Microsoft Edge on macOS is shared between Microsoft apps.  If your account is active in another Microsoft app on the device, a shared identity allows you to sign into a Microsoft app without reentering your credentials.  On macOS, Microsoft Edge doesn't automatically sign you into it based on your authentication state in other Microsoft apps.  When you try to sign into Microsoft Edge, it offers to use the credentials from another Microsoft app on the device to sign into Microsoft Edge seamlessly.  When your account is active in Microsoft Edge and you try to sign into other Microsoft apps, your Microsoft Edge credentials are used sign into the other Microsoft app on the device without requiring you to enter your credentials again.  

You may not sign into Microsoft Edge when you use Guest mode or InPrivate.  

## SmartScreen  

SmartScreen is designed to help you safely browse the web.  When you navigate to websites or download files, SmartScreen verifies the reputation of the URL or file.  If SmartScreen determines the webpage or file is malicious, Microsoft Edge blocks you from navigating to the website or downloading the file.  

:::image type="complex" source="./media/smart-screen.png" alt-text="SmartScreen" lightbox="./media/smart-screen.png":::
   SmartScreen  
:::image-end:::  

As you browse the web, SmartScreen categorizes websites and downloads as top traffic, dangerous, or unknown.  Top traffic is popular websites that SmartScreen has determined are trustworthy.  If you navigate to a website marked as dangerous, SmartScreen immediately blocks you from accessing the website.  When you navigate to an unknown website, SmartScreen verifies the reputation to determine if you should access the website.  

SmartScreen uses three types of reputation verification of the URL against a local list.  

The first type verifies if the website is part of top traffic or is a known dangerous website.  When you navigate to a top traffic website, SmartScreen doesn't send the URL to the SmartScreen service.  If the URL is on the local list of dangerous websites, SmartScreen blocks it, which prevents any portion of the malicious web content from loading.  Microsoft Edge periodically downloads an updated list of top traffic and dangerous websites to the device.  

The second type asynchronous verifies the reputation to the SmartScreen service.  SmartScreen verifies all URLs that aren't categorized as top traffic.  Microsoft Edge passes the following information to the SmartScreen service to determine the safety of the webpage.  

*   The URL.  
*   Relevant information about the webpage.  
*   An identifier unique to your device.  
*   General location information.  
    
The information provided by Microsoft Edge allows the service to identify new dangerous websites and stay up to date with the latest security threats.  The results of URL verification are stored locally on the device and are automatically cleared at the end of the browser session.  All requests to the SmartScreen service are made with HTTPS encryption.  

The third type verifies downloaded files to help prevent harm to your device.  SmartScreen verifies the reputation of the binary files synchronously as your download completes.  Microsoft Edge sends information about the file such as the file hash, file name, download URI, and an identifier unique to your device to SmartScreen to verify the reputation.  All SmartScreen requests are made with HTTPS encryption.  The SmartScreen service sends back the result of the verification, which allows the file to either fully download or not.  The results are stored locally on the device.  The SmartScreen service stores data about the reputation verifications and builds a database of known malicious URLs and files.  The data is stored on secure Microsoft servers and is used only for Microsoft security services.  The data is never used to identify or target you in any way.  When you clear your browser cache, Microsoft Edge clears all locally stored SmartScreen URL data.  Clear your download history to remove any locally stored SmartScreen data about file downloads.  SmartScreen is turned on by default for Microsoft Edge.  To turn off SmartScreen, complete the following actions.  

1.  [Navigate to Privacy](#navigate-to-privacy).  
1.  Navigate to **Security**.  
1.  Turn off the **Microsoft Defender SmartScreen** setting.  
    
The setting is the same for all profiles associated with the installation of Microsoft Edge on your device.  The setting isn't synced across devices.  The setting applies to InPrivate browsing and Guest mode.  If your device is managed with group policies set by your organization, the setting is reflected in Microsoft Edge.  To display the setting, [navigate to Privacy](#navigate-to-privacy).  For more information about SmartScreen, navigate to [SmartScreen: FAQ](https://support.microsoft.com/help/17443).  

Optionally, SmartScreen verifies the URLs of files you download to confirm if any are categorized as potentially unwanted apps.  SmartScreen blocks potentially unwanted apps to deliver a more productive, performant, and delightful Windows experiences.  The setting is turned off by default and is only available on Windows 10 devices.  To turn on the feature, complete the following actions.  

1.  [Navigate to Privacy](#navigate-to-privacy).  
1.  Turn on the **Block potentially unwanted apps** setting.  
    
For more information about how potentially unwanted apps are categorized, navigate to [Potentially unwanted application (PUA)](/windows/security/threat-protection/intelligence/criteria#potentially-unwanted-application-pua).  For more information about how to configure the setting, navigate to [Detect and block potentially unwanted applications](/windows/security/threat-protection/windows-defender-antivirus/detect-block-potentially-unwanted-apps-windows-defender-antivirus).  

## Speech recognition

To convert your speech into text, Microsoft Edge supports the [Web Speech API](https://wicg.github.io/speech-api).  If a webpage includes a web feature with the following workflow,  Microsoft Edge sends the captured audio to a Microsoft service where it's translated into text.  

1.  Request access to your microphone.  
1.  Capture your speech audio.  
1.  Translate your speech audio to text.  
    
The recorded speech audio is sent with a randomly generated token.  The recorded speech audio is sent over a secure HTTPS connection to the Microsoft Azure Cognitive Services.  The recorded speech audio content isn't stored for any purposes.  The text is sent to your device and then sent to the webpage.  

To turn off speech translated to text, deny microphone access from any website that prompts for permission.  To turn off the Microphone permission for all websites, navigate to `edge://settings/content/microphone`.  

## Spellcheck  

Microsoft Edge verifies your spelling as you type in the browser.  The spellcheck service is run locally on the device.  Microsoft Edge doesn't send information about your typed input to Microsoft for spellcheck.  To turn off the feature, complete the following actions.  

1.  [Navigate to Languages](#navigate-to-languages).  
1.  Navigate to **Check Spelling**.  
1.  Turn off the setting for each language.  
    
When you add a new language to Microsoft Edge, the browser downloads the dictionary for the new language to the device using HTTPS.  The dictionary is used for the built-in spellcheck service.  Deleting the language from your Microsoft Edge settings deletes the dictionary from the device.  Guest mode doesn't use the custom dictionary from the profile or any added languages.  To add or remove words in your local dictionary, complete the following actions.  

1.  [Navigate to Languages](#navigate-to-languages).  
1.  Navigate to **Check Spelling**.  
1.  Choose **Add or delete words**.  
    
## Suggest similar websites  

To help resolve URL typos in the address bar that result in a website error, Microsoft Edge may recommend a corrected URL.  When a website navigation error occurs, Microsoft Edge sends the domain of the web address to the Microsoft service to suggest a corrected URL.  Microsoft Edge doesn't include identifiers or tokens with the domain.  If the service finds a suggestion, it returns the suggested URL.  To help improve the service, Microsoft stores the incorrect domain and suggested domain.  To help you navigate to the correct websites, the feature is turned on by default.  To turn off the feature, complete the following actions.  

1.  [Navigate to Privacy services](#navigate-to-privacy-services).  
1.  Turn off the **Suggest similar sites when a website can't be found** setting.  
    
## Synchronization  

Sign into Microsoft Edge with a Microsoft account to synchronize your browsing data across all the versions of Microsoft Edge in which your account is active.  You may synchronize your browsing history, favorites, settings, form fill data \(addresses and more\), passwords, extensions, open tabs, and collections.  Allow Microsoft Edge permission to turn on synchronization, and each synchronized data type may be turned on or off individually.  Your Favorites include any tabs you previously set aside in Legacy Microsoft Edge, which synchronize along with the rest of your favorites.  To synchronize deletion or modification of your data, complete the following actions.   

1.  Sign into your account in Microsoft Edge.  
1.  Turn on synchronization.  
1.  Delete or modify data.  

The data may include Favorites or other types of data.  To manage synchronization configurations, [navigate to Profiles sync](#navigate-to-profiles-sync).  Your synchronization settings may be managed by your organization.

:::image type="complex" source="./media/sync.png" alt-text="Synchronization setting is on" lightbox="./media/sync.png":::
   Synchronization setting is on
:::image-end:::  

For synchronization to function, Microsoft Edge sends extra device connectivity and configuration data needed to provide the synchronization experience.  The extra device connectivity and configuration data include the name of your device, make, and model.  To delete the data, navigate to [Devices](https://account.microsoft.com/devices).  To manage your synced favorites, navigate to `edge://favorites`.  To manage all other data types, [navigate to Profiles](#navigate-to-profiles).  

All synchronized data is encrypted in transit over HTTPS when transferred between the browser and Microsoft servers.  The synced data is also stored in an encrypted state on Microsoft servers.  Sensitive data types are further encrypted on the device before being synced.  Sensitive data types include addresses and passwords.  If you use a work or school account, all data types are further encrypted before being synced using Microsoft Information Protection.  All other synced data types are stored until one of the following situations occurs.  

*   You delete the data.  
*   The account is deleted.  
*   The account becomes inactive.  
    
An account ID is attached to all synced data.  The ID is necessary to synchronize across multiple devices.  

InPrivate and Guest mode browsing data doesn't synchronize to your Microsoft account.  To synchronize Favorites created during InPrivate sessions, complete the following actions.   

1.  Sign into your account in Microsoft Edge.  
1.  Turn on synchronization.  
1.  Add or update a Favorite.  
    
## Tips and recommendations

Microsoft Edge wants to provide you with relevant tips and recommendations to get the best experience using the browser.  Microsoft Edge uses available device connectivity and configuration data to provide relevant tips and recommendations.  The device connectivity and configuration data include the following data.  

*   Your operating system  
*   Your locale  
*   Your browser settings  
*   other device connectivity data  
*   other configuration data  
    
The device connectivity and configuration data are sent over a secure HTTPS connection.  Microsoft Edge sends the device connectivity and configuration data with a resettable identifier that is unique to your browser.  For Windows 10 devices while Microsoft Edge is setting up, Microsoft honors tailored experiences in Windows.  For more information about tailored experiences in Windows, navigate to [Learn more about tailored experiences in Windows](https://support.microsoft.com/help/4468236).  

This data isn't sent during InPrivate browsing or Guest mode.  

## Tracking prevention  

Microsoft Edge is designed to detect and block known trackers.  Users may choose from three levels of tracking prevention.  

*   **Basic**  
*   **Balanced**  
*   **Strict**  
    
To protect user privacy, Balanced is chosen by default.  Microsoft Edge uses an open-source list of known trackers to detect trackers before any are loaded on the webpage.  The list is downloaded to the device periodically as the list is updated.  The number of blocked trackers and names of the trackers are stored locally on the device for statistical purposes.  To clear the data, complete the following actions.  

1.  [Navigate to Privacy blocked trackers](#navigate-to-privacy-blocked-trackers).  
1.  Choose the **Clear Data** button.  
    
The detection and blocking of trackers occur locally on the device.  To turn off tracking prevention, complete the following actions.  

1.  [Navigate to Privacy tracking prevention](#navigate-to-privacy-tracking-prevention).  
1.  Turn off the **Tracking prevention** setting.  
    
For more information about Tracking prevention, navigate to [Learn about tracking prevention in Microsoft Edge](https://support.microsoft.com/help/4533959).  

You may turn off list updates using the following group policy, [Enable component updates in Microsoft Edge](/deployedge/microsoft-edge-policies#componentupdatesenabled).  

:::image type="complex" source="./media/tracking-prevention.png" alt-text="Tracking prevention" lightbox="./media/tracking-prevention.png":::
   Tracking prevention  
:::image-end:::  

## Translate  

In Microsoft Edge, you may browse the web and translate webpages into a language of your choice.  The built-in translation feature uses a service on your device that samples random portions of a webpage to detect the original language.  If Microsoft Edge doesn't detect one of your default languages, it offers to translate the webpage to your displayed language or another language you choose.  Microsoft Edge doesn't translate a webpage without your permission.  To translate a webpage, open the contextual menu \(right-click\), and choose **Translate**.  To translate the webpage, Microsoft Edge sends the following information to the Microsoft Azure translation service over a secure HTTPS connection.  

*   The content of the webpage.  
*   A randomly generated token.  
    
The content of the webpage isn't stored for any purpose.  To stop Microsoft Edge from offering to translate webpages, complete the following actions.  

1.  [Navigate to Languages](#navigate-to-languages).  
1.  Turn off the **Offer to translate pages that aren't in a language you read** setting.  
    
## Web apps and Pinned webpages  

Microsoft Edge allows you to install web apps made by website developers and pin your favorite webpages.  

When you pin a webpage, the pinned webpage is added to your taskbar or dock.  The data is stored locally on your device.  For some webpages, information about whether the webpage has been pinned is shared with the webpage, so the webpage knows not to prompt to pin.  You may manage your pinned webpages from the taskbar or dock.  Pinned webpages open in Microsoft Edge windows and use the same website permissions and diagnostic data settings as the specific version of Microsoft Edge.  

## WebView

Microsoft Edge WebView allows app developers to host web content in native apps on Windows 10 and Windows 7.  The apps that host the Microsoft Edge WebView may send diagnostic data to Microsoft.  The diagnostic data may include how you use the Microsoft Edge web platform and the websites to which you navigate in the app.  To turn on the diagnostic data collection, complete the following actions.  

1.  [Navigate to Privacy optional diagnostic data](#navigate-to-privacy-optional-diagnostic-data).  
1.  Turn on the **Help improve Microsoft products by sending optional diagnostic data about how you use the browser, websites you visit, and crash reports.** setting.  
    
To turn off the diagnostic data collection for Microsoft Edge on Windows 10, complete the following actions.  

1.  Open **Start** > **Settings** > **Privacy**.  
1.  Choose **Diagnostics & feedback**.  
    
To turn off the diagnostic data collection for all other platforms, complete the following actions.  


1.  [Navigate to Privacy optional diagnostic data](#navigate-to-privacy-optional-diagnostic-data) in a normal browsing session.  
1.  Turn off the **Help improve Microsoft products by sending optional diagnostic data about how you use the browser, websites you visit, and crash reports** setting.  
    
The apps that host the Microsoft Edge WebView may collect other data.  The other data is governed by the data collection management of the developer and relevant privacy policies.  

## Windows Defender Application Guard  

Windows Defender Application Guard \(WDAG\) is a feature available for organizations.  When you turn on Windows Defender Application Guard, Microsoft Edge opens untrusted websites inside an isolated container.  WDAG protects the resources in your organization from malicious websites or phishing attacks.  WDAG is only turned on with group policies that are managed by your organization.  WDAG is only available on recent versions of Windows 10.  WDAG collects product improvement diagnostic data when you open untrusted websites in the isolated container.  The diagnostic data about untrusted websites may include the timeline when you open a new Application Guard window.  

With your permission, WDAG also collects information about how you use the browser and information about websites you visit.  To turn off the diagnostic data collection for Microsoft Edge on Windows 10, complete the following actions.  

1.  Choose **Start** > **Settings** > **Privacy**.  
1.  Choose **Diagnostics & feedback**.  
    
To turn off diagnostic data collection for all other platforms, complete the following actions.  


1.  [Navigate to Privacy optional diagnostic data](#navigate-to-privacy-optional-diagnostic-data) in a normal browsing session.  
1.  Turn off the **Help improve Microsoft products by sending optional diagnostic data about how you use the browser, websites you visit, and crash reports** setting.  
    
## Windows Information Protection  

Windows Information Protection \(WIP\) helps prevent the accidental leaking of corporate information.  WIP is only available for organizations through  group policies that are managed by your organization.  WIP is turned on for the websites that are identified as corporate assets.  Identify which websites are corporate assets from the management icon in the address bar.  WIP enforces features, such as the following features.  

*   Prevention of copying and pasting from the browser.  
*   Prevention of uploading certain files to websites outside your organization.  
    
:::image type="complex" source="./media/w-i-p.png" alt-text="Windows Information Protection" lightbox="./media/w-i-p.png":::
   Windows Information Protection  
:::image-end:::  

If WIP is turned on, Microsoft Edge collects event logs and sends each to your organization.  Also, if WIP is turned on, you may not opt out of the data collection.  WIP is only available on releases of Windows 10 from August 2016 or later.  For more information about the event logs captured by WIP, navigate to [How to collect Windows Information Protection (WIP) audit event logs](/windows/security/information-protection/windows-information-protection/collect-wip-audit-event-logs).  

## Thank you  

Microsoft Edge is made possible by the [Chromium](https://www.chromium.org) open-source project and other open-source software.  To display all the software credits, navigate to `edge://credits`.  [Google Chrome Privacy Whitepaper](https://www.google.com/chrome/privacy/whitepaper.html) was used as a source for gathering related information about the Chromium open-source project.  

<!--  Microsoft Edge is committed to protecting and respecting your privacy while giving you the transparency and control you deserve.  Reach out to [@MSEdgeDev](https://www.twitter.com/MSEdgeDev) on Twitter or submit feedback by opening **Settings and more (...)** > **Help and feedback** and choosing **Send feedback** with questions or comments.  -->  

## Getting in touch with the Microsoft Edge team  

The Microsoft Edge team is always listening to customers and values your feedback.  To provide feedback in Microsoft Edge, complete the following actions.  

1.  Choose **Settings and more** > **Help and feedback**.  
1.  Choose **Send feedback**.  
    
For Progressive Web Apps \(PWAs\), complete the following actions.  

1.  Choose **Settings and more (...)**. 
1.  Choose **Send feedback to Microsoft**.  
    
Provide details about the feedback and optionally provide all other information.  If your Microsoft Edge profile includes an email address, your email address is pre-populated, along with the current URL of your website, and relevant diagnostic data.  The diagnostic data may include data about Microsoft Edge features you turned on and your usage of the browser.  A screenshot, files from your device, and recording of your browser may also be optionally included.  The optional screenshot, files, or recording you provide may include personal data.  The data is only used for diagnostic and product improvement purposes.  

User feedback is securely sent to Microsoft using HTTPS and stored on secure Microsoft servers.  If you include your email address and you turned on the **Help improve Microsoft products by sending optional diagnostic data about how you use the browser, websites you visit, and crash reports** setting, an identifier is associated with your feedback.  The identifier is unique to your browser installation on your device.  If you Microsoft account is active in Microsoft Edge, your feedback is associated with your account.  All diagnostic data, including diagnostic logs, recordings, and attachments, are stored for up to 30 days.  The remaining feedback data, including an optional screenshot, is stored for up to 15 months.  Make a [request](https://www.microsoft.com/concern/privacy) to delete your feedback if you provided an email with your feedback item.  
