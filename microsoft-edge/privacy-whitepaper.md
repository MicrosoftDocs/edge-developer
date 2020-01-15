---
description: Microsoft Edge Privacy Whitepaper
title: Microsoft Edge Privacy Whitepaper
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/15/2020
ms.topic: article
ms.prod: microsoft-edge
ms.technology: browser
keywords: microsoft edge, privacy, whitepaper, trust
---

# Microsoft Edge Privacy Whitepaper

Our browser privacy promise is to provide you with the protection, transparency, control and respect you deserve.  To uphold our commitment to give you transparency into our product, we’ve provided a privacy whitepaper that explains how Microsoft Edge features and services work and how they may affect your privacy.  Our goal is to give you a full understanding into how your data is used, how to control the different features, and how to manage your collected data, so you have the info you need to make the right privacy decisions for you.  

In certain sections of the paper we provide steps to go to Microsoft Edge settings and other pages.  For consistency, we’ve used a shortened format throughout the whitepaper: You’ll see URLs that begin with **edge://** such as **edge://favorites** or **edge://settings/privacy**.  To go to these pages, type the bolded text directly into the Microsoft Edge address bar.  These pages can only be viewed in Microsoft Edge.  

The whitepaper focuses on the desktop version of Microsoft Edge, and parts of the paper may include features or experiences that aren’t available for all users.  In addition, the whitepaper discusses features and services as they exist in the product today, but may be subject to change in the future.  Microsoft practices data collection minimization, which means we keep your data for the minimum amount of time, but retention times may vary depending on the feature or service being used and may change over time.  

## Address bar and suggestions

The address bar allows you to enter website URLs and search the web.  By default, the address bar provides search and site suggestions using the characters you type.  You’ll see suggestions from your favorites, browsing history, previous searches, and default search provider.  

![AddressBar](./media/WhitepaperMedia/AddressBar.png)

To make browsing and searching faster, as you type in the address bar, the typed characters are sent to your default search provider for the search provider to send back suggested search queries.  The address bar categorizes your entry as a URL, search, or unknown.  This information, along with which suggestion you select, position of selection, and other address bar data is sent to your default search provider.  A resettable identifier unique to your browser, an identifier unique to your device and other service identifiers are sent with this data to understand the search query and query session.  Your IP address and cookies are sent to your default search provider to increase the relevance of the search results.  A signal is sent to your default search provider when you select the address bar, to signal to the provider to get ready to provide suggestions.  The typed characters and search queries are not sent to Microsoft unless your search provider is Bing.  This data is only sent to your default search provider if you have **Show me search and site suggestions using my typed characters** turned on.  Turning off this feature stops your typed characters from being sent to the default search provider.  Your search queries are still sent to your default search provider to provide search results.  If Microsoft Edge detects that your typing in the address bar may contain sensitive information, such as authentication credentials, local file names, or URL data that is normally encrypted, it will not send the typed text.  If you have **Improve Microsoft products by sending crash reports and data about how you use the browser** turned on Microsoft Edge will collect diagnostic data about the address bar, such as how many queries were offered, regardless of your search provider.  

Keystrokes and the websites you visit are stored locally on the device per profile.  You can delete this data by going to **edge://settings/clearBrowserData**, selecting the check box for **Browsing history**, and selecting **Clear now**.  If Bing is your default search provider and you’re signed in to Bing, you can delete your searches through the [Microsoft privacy dashboard](https://go.microsoft.com/fwlink/?LinkId=529732).  You can clear your browsing history from **edge://history** to delete those websites from appearing as suggestions in the address bar.  On Windows 10, you can clear the data Microsoft collects from the address bar and search suggestions features by going to **Start** > **Settings** > **Privacy** > **Diagnostics & feedback**, and selecting **Delete** under **Delete diagnostic data**.  All other data is deleted after 36 months.  

If you’re signed in to Microsoft Edge with a Microsoft work or school account, and Microsoft Search is available, an anonymized token representing your account is sent with the query to provide account-specific functionality such as results specific to your company.

All data is transmitted securely over HTTPS.  If Bing is your default search provider, the searches and types characters are saved for up to 6 months.  

If you search for a single word in the address box, Microsoft Edge may send this word to your DNS server to see whether it corresponds to a host on your network, and may try to connect to the corresponding host.  This gives you the option to navigate to that host instead of searching.  For example, if your router goes by the hostname “router”, and you type “router” in the address bar, you’re given the option to navigate to https://router/, as well as to search for the word “router” with your default search provider.  This feature is not controlled by the **Show me search and site suggestions using my typed characters** setting since it does not involve sending data to your default search engine.

You can turn off **Show me search and site suggestions using my typed characters** setting and change your default search engine from **edge://settings/search**.  While browsing InPrivate or in Guest mode, autosuggestions are turned off.  InPrivate will show suggestions from your local browsing such as browsing history or past searches, but no typed characters are sent to your default search engine.  Guest mode does not display any suggestions or send typed characters to your default search engine.

Data collected by other search providers follow their company’s privacy policy. 

## Autofill

Autofill in Microsoft Edge helps you be more productive by letting you save passwords, payment info, addresses, and other form entry data.  When you visit a site and start to fill out a form, Microsoft Edge uses form fill info to match your saved autofill data to the form.  Microsoft Edge offers form entry data you’ve saved when you encounter similar forms.  Passwords and credit card info are only saved with your explicit permission for each password and card.  

Addresses and other form entries are saved by default.  However, you can turn off saving and autofill of address and other form data in **edge://settings/addresses**.  

You can also prevent Microsoft Edge from prompting you to save passwords by turning off **Offer to save passwords** in **edge://settings/passwords**.  If you don’t want Microsoft Edge to autofill existing saved passwords, you can delete your saved passwords by going to **edge://settings/passwords**.  To delete all autofill data go to **Clear browsing data** in Microsoft Edge Privacy and services settings.  Select **Autofill form data**, the desired time range and then **Clear now**.  

If you’ve turned on sync for your profile, your autofill data will be synced across all versions of Microsoft Edge where you’re signed in with the same credentials.  When sync is turned on, all autofill data is stored on encrypted Microsoft servers.  The autofill data stored on Microsoft servers is only used for sync purposes.  You can turn off syncing of your autofill data in **edge://settings/profiles/sync**.  If you’ve turned on sync for autofill, deleting autofill data from a device where you're signed in to Microsoft Edge will delete the autofill data from other devices where you're signed in.  

When you visit a webpage and submit a form, Microsoft Edge sends info about the form such as a hash of the hostname and autofill entry types (e.g., box 1 is looking for an email address, box 2 is looking for a password, etc.) to the Microsoft form fill service.  No user-entered info or user identifiers are sent to the service.  This info helps Microsoft Edge correctly identify forms across different webpages.  This data is used to help match your saved autofill data to the form.  

When you use guest mode, autofill is not available and new autofill entries won’t be added.  When you browse InPrivate, Microsoft Edge will offer autofill entries, but new autofill entries won’t be added.

## Cast

Cast in Microsoft Edge allows you to display your media to another screen using Google Cast.  You can access this feature from **Settings and more (…)** > **More tools** > **Cast media to device**.  Cast does not use any Microsoft or Google services.

## Collections

You can collect sites, text and images on the web and organize the content with Collections in Microsoft Edge.  All collections data is stored locally on the device and organized per Microsoft Edge profile.  If you have sync turned on for Collections, your collections created will be available across all signed in and syncing versions of Microsoft Edge.  

Every 24 hours Microsoft Edge downloads a list of supported sites for which special entity extraction templates exists.  The templates are specific to each website.  When you create a new item in your collection, Microsoft Edge will check to see if the site you are creating the new collection item from is on the list of supported sites.  If the site is on the list, Microsoft Edge will ping the entity extraction service for the specific sites template.  No user identifiers are associated with this request to the service.  This template attempts to identify the name, price, ratings, primary image, and other data about the item being collected.  If the site from which you are creating a new collection item is not on the supported list site, Microsoft Edge will not download a template.  The templates enable all collection items to be created locally on the device.  No data about the collection items are sent to the service to create the collection.

The templates stored on the device can be deleted by clearing the cache data under **Clear browsing data** in **edge://settings/privacy**.  

This data is never used for targeting or suggesting content.  Collections is not available when using InPrivate browsing or Guest mode. 

## Crashes

If optional diagnostic data including crash reports are turned on, Microsoft will collect diagnostic data when Microsoft Edge crashes or encounters other reliability problems.  This diagnostic data is used to diagnose and fix reliability problems of Microsoft Edge and other Microsoft products and services.  

![Crashes](./media/WhitepaperMedia/Crashes2.png)

The diagnostic data collected is in the form of crash dumps, which contains device and software state captured at the time Microsoft Edge encountered the reliability problem.  The crash dump contains information about what was happening at the time of the reliability problem.  Information such as the website you were visiting at the time of the crash or your CPU usage may be included in this diagnostic data.  The crash diagnostic data is stored locally on the device and sent to Microsoft via an encrypted link when crash reporting is turned on.  Each crash dump contains an identifier unique to your device, a resettable identifier unique to your browser and extra diagnostic data (such as the URL, CPU usage, and network usage) to help identify the problem.  This extra diagnostic data is attached to the crash dump to help diagnose the reliability problem, such as understanding how many devices are encountering the problem and the severity.  

Crash dumps are sent to Microsoft and stored on secure Microsoft servers for up to 30 days and then deleted.  You can request to delete this diagnostic data on Windows 10 devices by going to **Start** > **Settings** > **Privacy** > **Diagnostics & feedback** and selecting **Delete** under **Delete diagnostic data**.  Aggregated crash information such as a count of types of crashes occurring are stored for reporting and product improvement purposes.  

Crash diagnostic data stored locally on the device can be cleared from the file system in **edge://crashes**.  

To turn off crash diagnostic data collection on Windows 10, go to **Diagnostics & feedback** in Windows Diagnostics & feedback settings.  For versions of Microsoft Edge on all other platforms go to **edge://settings/privacy** and turn off **Improve Microsoft products by sending crash reports and data about how you use the browser**.  This diagnostic data collection can also be turned off for enterprises through [group policies managed by your organization](https://docs.microsoft.com/DeployEdge/microsoft-edge-privacy-policy).  

## Diagnostic data about how you use the browser

Microsoft uses diagnostic data to improve our products and services, keep our products secure and up to date, and help us better understand how our products are performing. Whenever we collect data, we want to make sure it’s the right choice for you.  Microsoft believes in and practices information collection minimization.  We strive to gather only the info we need and to store it only for as long as it’s needed to improve our products and services.  

As you use features and services in Microsoft Edge and other applications that use the Microsoft Edge web platform, diagnostic data about how you use those features is sent to Microsoft.  This diagnostic data includes information like your installation of Microsoft Edge, feature usage, performance, and memory usage.  For example, if you favorite a website, we will receive info that the favorite button was clicked and a favorite was successfully added, but not which site was favorited.  This diagnostic data also includes performance information, such as how many milliseconds it took to open a new tab.  The features and services mentioned in this whitepaper collect diagnostic data.  

![DiagnosticData](./media/WhitepaperMedia/DiagnosticData2.png)

In addition, Microsoft Edge collects a set of required diagnostic data necessary to keep the product up to date, secure and performing properly.  This includes device connectivity and configuration information about the current data collection consent setting, app version, and installation state.  This can only be turned off with group policies managed by your organization.  [Learn more](https://go.microsoft.com/fwlink/?linkid=2099569)

Microsoft Edge generates this diagnostic data, stores it locally, and periodically sends it to Microsoft.  The diagnostic data is sent via HTTPS and stored on Microsoft servers.  This diagnostic data is associated with an identifier unique to your device and a resettable identifier unique to your browser.  The identifiers do not contain your personal information.  To reset the identifier unique to your browser on Windows 10 devices, you can go to **Start** > **Settings** > **Privacy** > **Diagnostics & feedback** and select **Delete** under **Delete diagnostic data** or change your setting under **Diagnostic data** from **Full** to **Basic**.  On other platforms, the resettable identifier unique to your browser is generated again whenever you change the **Improve Microsoft products by sending data about how you use the browser** setting in **edge://settings/privacy** from **on** to **off**.  This reset functionality may be different for devices managed with group policies set by your organization.  

If you’re using Windows 10 version 1803 (April 2018 Update) or above, you can view product data shared with Microsoft in the Diagnostic Data Viewer by going to **Start** > **Settings** > **Privacy** > **Diagnostics & feedback** and selecting **Open Diagnostic Data Viewer** under **View diagnostic data**.  

For other platforms or versions of Windows 10 lower than version 1803, go to **edge://data-viewer** to view this diagnostic data.  Data is sent to Microsoft periodically, and **edge://data-viewer** only shows data that has been sent to Microsoft since the last time the viewer was opened.  You might need to refresh the viewer to see what data has been sent to Microsoft for your given session.  The data used to populate **edge://data-viewer** is stored locally on the device.  To clear this data in the viewer, simply close the **edge://data-viewer** tab.  

The diagnostic data is stored on Microsoft servers for up to 18 months.  On Windows 10 you can delete this diagnostic data by going to **Start** > **Settings** > **Privacy** > **Diagnostics & feedback** and selecting **Delete** under **Delete diagnostic data**.  The Delete diagnostic data functionality is only supported on Windows 10, April 2018 update and newer.  For more information see [Diagnostics, feedback, and privacy in Windows 10](https://support.microsoft.com/help/4468236/diagnostics-feedback-and-privacy-in-windows-10-microsoft-privacy).  

For Windows 10 Stable and Beta channels of Microsoft Edge, this setting is determined by your Windows diagnostic data setting.  This is reflected in your Microsoft Edge Privacy and services settings.  You can change this Windows settings by going to **Start** > **Settings** > **Privacy** > **Diagnostics & feedback**.  On all other channels and platforms, you can control this diagnostic data collection by going to **edge://settings/privacy** and turning on or off **Improve Microsoft products by sending crash reports and data about how you use the browser**.  This setting is the same for all profiles associated with the installation of Microsoft Edge on your device.  This setting is not synced across devices. The setting applies to InPrivate browsing and Guest mode. If your device is managed with group policies set by your organization, this will be reflected in **edge://settings/privacy**.  

## Digital Rights Management and Media Licenses

When a website offers media content that’s protected by Digital Rights Management (DRM), Microsoft Edge uses a secure playback pipeline to ensure the content is not copied or accessed improperly.  As part of this feature, Microsoft Edge may store DRM-related data on your device, including a unique identifier and media licenses, and may transmit that unique identifier to a media licensing server specified by the content provider.  When you use the website, Microsoft Edge retrieves the DRM info to make sure you have permission to use the content.  This data helps to validate access to the protected content and ensure a seamless media experience.

Microsoft Edge supports DRM via the Encrypted Media Extensions (EME) API for HTML5 sites.  The EME API allows websites to communicate with a DRM provider called a Content Decryption Module (CDM).  Different DRM systems, such as Google's Widevine or Microsoft's PlayReady, may be supported by their own CDM implementation.  Content providers may choose to support one or more potential DRM systems and may utilize the functionality of the EME API to decide which DRM system to use for a specific client.  [Learn more about EME privacy](https://www.w3.org/TR/encrypted-media/#privacy).  

Microsoft Edge supports PlayReady DRM only on Windows 10.  PlayReady is an DRM implementation to deliver media experiences such as 4K video and Dolby Atmos audio.  Microsoft Edge uses the Windows Platform Media Foundation APIs to support PlayReady.  To validate access to protected content, Microsoft Edge utilizes the Windows 10 operating system which uses a unique identifier and communicates that with the PlayReady service.  All EME, CDM, and browser data for PlayReady that persists on the device is stored and maintained on Microsoft Edge.  [Learn more](https://docs.microsoft.com/playready/overview/simple-end-to-end-system)

Microsoft Edge supports Google’s Widevine DRM and this option is on by default.  Microsoft Edge will periodically fetch updates for Widevine from Google servers.  The use of Widevine may include communications to Google.  Users may opt out of using Widevine in Microsoft Edge by disabling the Widevine DRM flag at **edge://flags/#edge-widevine-drm**.  Widevine has the capability to create a unique device identifier and transmit it to Google.  For more specific information on Widevine and privacy, see Google’s privacy policy.

Microsoft Edge supports Adobe’s Flash Access DRM, which is used by some sites instead of HTML5.  You must give permission to allow Adobe Flash when a site requests it.  When a site uses Adobe Flash Access DRM, Microsoft Edge will give Adobe access to a unique device identifier.  You can clear and reset any locally stored instances of this identifier by going to **edge://settings/privacy**.  Under **Clear browsing data**, select **Choose what to clear**, select the check box for **Cookies and other site data**, and select **Clear now** to remove any stored identifiers.  You can stop Adobe Flash DRM from ever being used by going to **edge://settings/content/flash**.  

When you request access to encrypted HTML5 media like an online movie, Microsoft Edge will create a license request to decrypt the media.  The CDM being used will create the license request which contains a request ID.  This request is sent to the license server.  No part of the license request contains any personally identifiable information, and the license request is not stored on the device.  

When returning the media license, a media identifier is created which is unique to the user and the site.  This ID is not shared between sites and is different for each site.  A session ID, used to identify a playback session, is sent with the media identifier to decrypt the media.  The media identifier is stored locally on the device and may be stored with the content provider.  

All DRM and content protections can be turned off by going to **edge://settings/content/protectedContent**.  

- Turning off **Allow sites to play protected content** will disable playback for CDM-based DRM systems such as PlayReady and Widevine, but not for non-CDM-based systems like Flash Access DRM.  Flash is managed by a separate site permission at **edge://settings/content/flash**.  Turning this off will cause media functionality to stop working properly.  
- Turning off **Allow identifiers for protected content** will prevent the creation of identifiers for Flash Access DRM and prevents Widevine from periodically fetching updates from Google.  This may cause some media functionality on some sites to stop working properly.  

## Do Not Track

When you turn on **Send “Do Not Track” requests** in **edge://settings/privacy**, Microsoft Edge will send a DNT:1 HTTP header with your outgoing HTTP, HTTPS and SPDY browsing traffic requests to websites you visit to request that they not use trackers.  However, turning on **Send “Do Not Track” requests** doesn’t guarantee that websites won’t track you.  Some sites might honor this request by showing you ads not based on any previous browsing.  Microsoft Edge does not have control if this request will be honored or not.  To help prevent websites from tracking you, change your **Tracking prevention** settings in **edge://settings/privacy** to **Balanced** or **Strict**.  

When you use guest mode, Microsoft Edge won’t send “Do Not Track” requests.  When you use InPrivate browsing, Microsoft Edge will only send “Do Not Track” requests if **Send “Do Not Track” requests** is turned on for the profile you’re using.   

## Downloads

Microsoft Edge lets you download files safely and securely.  You can choose where files are downloaded on your device in  **edge://settings/downloads**.  If SmartScreen is enabled, info about your file, such as the filename and URL, are sent to SmartScreen to check the file’s reputation.  This helps you avoid accidentally downloading known malware that can hurt your device.  You can turn on or off SmartScreen in **edge://settings/privacy**.  Learn more about [SmartScreen](#smartscreen).  

A history of your previous downloads can be viewed from **edge://downloads**.  Clearing your browsing data from **edge://settings/clearBrowserData** can be used to delete your browsing data, including your download history.  Deleting your download history from Microsoft Edge will not remove the files from your device.  Deleting downloaded files from your computer does not remove them from your download history.  When you use InPrivate browsing or Guest mode, the download history from that session is cleared when you close the InPrivate or Guest windows, but the files will be saved on the device you’re using.

## Extensions and Microsoft Edge Addons

You can install extensions in Microsoft Edge that add functionality to the browser.  When you install an extension from Microsoft Edge Addons or another extension store, Microsoft collects information about the extensions to help developers and Microsoft understand how they’re used.  Microsoft Edge will collect aggregated data including the number of times an extension has been downloaded and information about how it’s performing, such as crash data.  Microsoft shares this aggregated data with the developers of the extensions.  Comments and reviews from users are public on the store and are also shared with the developers.  If you’re signed in to Microsoft Edge, requests to install extensions will contain cookies and the installation will be associated with your account.  This data is used in aggregate to understand the popularity of extensions.  

If you’ve turned on sync for extensions in your profile settings, your extensions and preferences for those extensions will be synced across all your signed-in syncing versions of Microsoft Edge.  

Installing extensions is optional, and all extensions can be uninstalled at any time by going to **edge://extensions** in Microsoft Edge.  Extensions are updated using the Microsoft Edge update service, which sends a list of the installed extensions to the update service to check if an update is available.  At the time of an extension installation, extensions will specify what user data they need to access, and Microsoft Edge will ask for your consent before installing the extension.  Always make sure an extension is credible and secure before installing it, and review the developer’s privacy policy for that extension.  

## Family safety

Microsoft offers a number of tools to help families stay connected and keep kids safer on Windows 10, Xbox, and Android devices running Microsoft Launcher.  

Within a family group, there are family settings that can be enabled for children while using Microsoft Edge.  The family group organizer must enable these settings for users in the group.  The three main features offered to a family group are web filtering, activity reporting, and safe search.  

Web filtering protects children in the family group from going to mature websites or websites specifically blocked by the family organizer.  

Activity reporting records info about the websites children visit, as well as searches, screen time, devices used, and attempts to visit blocked sites.  The family group organizer can see this info at [family.microsoft.com](https://family.microsoft.com).  This data is collected, encrypted in transit, and sent to Microsoft and stored on secure Microsoft storage servers.  This data is collected with the child's Microsoft account so it can be managed.  Activity reports are stored on [family.microsoft.com](https://family.microsoft.com) for up to 30 days and then deleted after.  

Safe search adds a safe keyword to the header request to search engines.  Bing reads this keyword and filters search results returned to the child.  Other search engines may return filtered results due to this keyword as well.  All of the child's searches are collected and made available for the family organizer to view in activity reports or at [family.microsoft.com](https://family.microsoft.com).  This data is collected with the child's Microsoft account so it can be properly managed.  

The child's browsing data is stored on Microsoft’s secured servers and made available to parents for up to 30 days, then immediately deleted.  This data can be deleted at any time from the [Microsoft privacy dashboard](https://account.microsoft.com/account/privacy).  Browsing data stored locally on a device must be Clear browsing data from Microsoft Edge in **edge://settings/clearBrowserData**.  

The child must be signed in to Windows 10 with their Microsoft account, and the activity reporting setting must be turned on by the family organizer, for this data to be collected and shared with the family group organizer.  The child does not need to be signed into Microsoft Edge for this data to be collected.  If family safety features are not available on your version of Windows 10, you can update to the most recent version of Windows to get these features.  

Guest mode and InPrivate browsing are disabled if web filtering or activity reporting is turned on.  

The family group organizer can stop this data collection from the family safety portal.  [Learn more](https://support.microsoft.com/help/4090274) 

## Feedback

We’re always listening to customers and value your feedback.  To provide feedback in Microsoft Edge, select the **Settings and more** > **Help and feedback** > **Send feedback**.  You must provide details about the feedback, but all other information is optional.  If an email is detected from your Microsoft Edge profile it is prepopulated along with the current URL of the site you are on and relevant diagnostic data.  The diagnostic data can include data about the features you’ve turned on and your usage of the browser.  A screenshot, file from your device, and recording of your browser can also be optionally included.  The optional additional recording you provide may include personally identifiable information.  This diagnostic data is only used for diagnostic and product improvement purposes.  

User feedback is securely sent to Microsoft via HTTPS and stored on secure Microsoft servers.  If you optionally provide a recording of your problem or attach a file in your feedback, an identifier unique to your device will be associated with this diagnostic data.  If you include your email address and **Improve Microsoft products by sending crash reports and data about how you use the browser** is turned on in your Microsoft Edge privacy settings, a resettable identifier unique to your browser installation on your device will be associated with your feedback.  The additional diagnostic data including diagnostic logs, recordings, and files are stored for up to 30 days.  The remaining feedback data is stored up to 15 months.  On Windows 10 you can delete your feedback via the Windows Diagnostic delete button if an email was provided with your feedback item.  On other operating systems, you can [request](https://www.microsoft.com/concern/privacy) to delete your feedback if you provided an email with your feedback item.  

## Geolocation

Microsoft Edge supports the [Geolocation API](https://www.w3.org/TR/geolocation-API/), which allows websites to access your location information with your permission.  Websites may ask for your location, for example, when trying to find the closet coffee shop to you.  Microsoft Edge will always ask for your permission before granting websites access to your location.  To manage this permission or to always block sites from accessing your location, go to **edge://settings/content/location**.  

On the right side of the address bar, Microsoft Edge will indicate when your location is or is not being shared.  

![Location](./media/WhitepaperMedia/Geolocation2.png)

If you allow your location to be shared with a site, Microsoft Edge will send local network information such as your IP address and nearby Wi-Fi access points to the Microsoft location service.  The Microsoft service uses this info to estimate your geolocation coordinates.  This geolocation estimate is then shared with the site with which you agreed to share your location.  On Windows 10, Microsoft Edge will only use the Microsoft location service if you’ve turned on your [Windows location setting](https://go.microsoft.com/fwlink/?linkid=2114213).  

A new randomly generated ID is used when making requests to the Microsoft location service.  Microsoft Edge location service does not store your geolocation coordinates for any period of time.  

InPrivate browsing will use the location permission setting of the profile from which the InPrivate session was launched.  Guest mode will always ask you for permission before granting the site your location.

## Install and update

You can download and install Microsoft Edge on platforms such as Windows and macOS.  Microsoft Edge uses the updater service to keep your version of Microsoft Edge up to date and secure.  

When you download and install Microsoft Edge, information about your device, such as your release channel, basic hardware information, update identifiers, an identifier unique to your device and a resettable identifier unique to your browser are sent to Microsoft during the installation process.  The device’s IP address is sent to the updater service, but the last decimal is scrubbed for added privacy protections.  During each browsing session, a newly randomly generated token is created to install updated versions of Microsoft Edge.  This token isn’t associated with any personal information and is only used for the installation and update process and to improve the updater service.  

Microsoft Edge pings the Microsoft Edge updater service about the stages of installation and update.  If an installation or update fails and crash reporting is turned on, a log is created and sent to Microsoft.  [Learn about sending crash reports to Microsoft](#crashes).  Microsoft collects info about how you downloaded Microsoft Edge, the success of the installation, and any uninstallations to better understand the success of Microsoft Edge downloads.  

Automatic updates are turned on by default for all Microsoft Edge users.  On all platforms, Microsoft Edge checks for updates on startup and periodically while running.  On MacOS devices, Microsoft AutoUpdate checks for updates for Microsoft products periodically as well.  Additional controls and configurations are available for organizations.  [Learn more](https://go.microsoft.com/fwlink/?linkid=2112132)

## Internet Explorer mode

Microsoft Edge offers a simplified experience with the integration of Internet Explorer (IE).  Microsoft Edge only supports IE 11, and IE mode and is only available on Windows.  This feature is available for organizations through group policies.  The administrator chooses a list of sites to be opened in IE mode in Microsoft Edge.  

![Location](./media/WhitepaperMedia/IEMode.png)

Microsoft Edge downloads the list of sites from a location defined by the admin through a policy, and caches the file to determine which sites need to be opened in IE mode.  Depending on your Windows or IE 11 settings, Microsoft Edge collects diagnostic data about the use of IE mode, such as which sites users go to, performance data, reliability data, and feature usage data.  On Windows 10, this diagnostic data is collected according to your Windows Diagnostic data setting.  On Windows 8.1, website info is collected if the user has opted in to the Flip Ahead or Suggested Sites feature in IE.  IE mode may not follow the same data collection toggles in the Microsoft Edge Privacy and services settings.  

If your administrator turned on Enterprise Site Discovery, browsing history data is collected to help administrators review the sites that users visit periodically and ensure that any system upgrades continue to support those sites.  [Learn more](https://go.microsoft.com/fwlink/?linkid=2114123) 

Internet Explorer browsing is stored locally in Microsoft Edge and Internet Explorer.  This data can be cleared from Clear browsing data and Clear browsing data for Internet Explorer in **edge://settings/privacy**. 

## Intrusive ads

To provide a better browsing experience, Microsoft Edge offers Ads Blocking, which prevents advertisements from loading on sites that show intrusive or misleading ads.  When Ads Blocking is turned on, Microsoft Edge periodically downloads, from Microsoft servers, the most recent list of sites that show intrusive or misleading ads and stores it locally on your device.  No user identifiers are included in the download request.  If you visit a site that is on this list, Microsoft Edge will block all ads on that site, and you’ll see the message “Ads blocked”.  You can allow ads on this site, by managing Ads settings in **edge://settings/content/ads**.  Other than downloading the list of sites with intrusive ads, the Ads Blocking feature doesn’t send additional information to Microsoft or request additional information from Microsoft while you’re browsing the web.

## Jump list

The jump list in Microsoft Edge lets you easily find your most recently closed sites by right-clicking on the Microsoft Edge icon in the task bar.  The last three closed tabs are stored locally for each profile.  You can delete sites from the jump list by right-clicking on them on Windows 10.  If you don’t want your recently closed tabs to be visible in the jump list, you can either [Clear your browsing data](https://support.microsoft.com/help/10607) or change your settings to Clear browsing data when you close the browser.  When using an InPrivate window, Microsoft Edge doesn’t add closed tab information to the jump list.  When using Guest mode, the jump list isn’t available.  

## Network time

Microsoft Edge uses a Microsoft network time service to track time from an external source like a time server.  At random intervals or when Microsoft Edge encounters an expired SSL certificate, Microsoft Edge may send requests to Microsoft to obtain the time from a trusted source.  These requests will occur more frequently if Microsoft Edge detects the system clock is inaccurate.  This can happen if the user changes the time on the operating system and that conflicts with the correct time zone.  The Microsoft network time service is used to get the Coordinated Universal Time (UTC).  These requests contain no cookies or user identifiers, and no data is logged.  

## New tab page

Microsoft Edge provides an engaging and user centric new tab page experience with a search box powered by `Bing.com`, quick link tiles for the sites you visit most frequently, and relevant content from Microsoft News or Office 365.  You can customize the appearance of the new tab page by selecting the customize button.  Your new tab page preferences are set for each profile and stored locally on your device, and these preferences are not synced across devices.  

![NTP](./media/WhitepaperMedia/NTP1.png)

### Microsoft News 

To tailor content to your interactions and preferences, the new tab page in Microsoft Edge stores cookies with randomly generated identifiers on the device.  A scrubbed version of your IP address is also used to tailor the content to your general region.  The cookies persist on your device until they’re cleared by going to **edge://settings/siteData**.  

You can prevent ads from being personalized by going to [Ad settings](https://go.microsoft.com/fwlink/?linkid=286759) on the Microsoft privacy dashboard and turning off **See personalized ads in your browser**.  You can also turn off the quick link tiles by selecting the **customize button** > **Custom** and turn off **Show quick links**.  Microsoft Edge uses your local browsing history to personalize the quick link tiles, and you can delete or create new tiles.  This data is only stored locally on the device, per profile.  

The search box on the new tab page performs a Bing search based on the search query you type.  To automatically provide search suggestions and results, Microsoft Edge shares your typed characters, search query, IP address, and search identifiers with Bing.  The search box can be configured with group policies to provide search results from Microsoft Search, returning information from your organization such as documents and intranet content.  To provide an integrated search experience, Microsoft Edge stores cookies locally on the device.  

If you’re signed in to Microsoft Edge with your Microsoft account, you can manage your browsing activity associated with the new tab page from the [Microsoft privacy dashboard](https://go.microsoft.com/fwlink/?LinkId=529732).  

Microsoft Edge collects diagnostic data about how you use the new tab page, such as interactions with the search box and clicks on quick link tiles, if **Improve Microsoft products by sending crash reports and data about how you use the browser** in **edge://settings/privacy** is turned **on**.  The browser sends diagnostic data about how you use the Microsoft News page to Microsoft to help us understand users' interactions with news content and improve our products.  You can turn off Microsoft News content by selecting the customize button on the new tab page.  News data is sent to Microsoft via HTTPS and stored for up to 13 months, after which it’s aggregated and anonymized.  

The new tab page also allows you to add a custom image to be the background.  This image is stored locally on the device and can be deleted by removing the image or uploading a new image.  No info about the image is sent to Microsoft.  

### Office 365

If you’re signed in to Microsoft Edge with a work or school account, your organization may turn on Office 365 as an option for page content on the new tab page. This feature is currently available only for commercial customers, and is governed under the [Microsoft Online Services Terms (OST)](https://www.microsoft.com/licensing/product-licensing/products). [Learn more about privacy for Office 365](https://docs.microsoft.com/deployoffice/privacy/overview-privacy-controls).

InPrivate browsing and Guest mode offer alternative new tab page experiences.

## On startup

Microsoft Edge lets you pick up your browsing where you left off by opening your last open tabs from your previous browsing session.  If you choose **Continue where you left off** in **edge://settings/onStartup**, information from your previous session, including session cookies, remains available on startup to restore tabs from your previous session and keep you signed into sites you visited.  If you clear browsing data each time you close the browser but selected **Continue where you left off**, the data you specified will be deleted but the URL will persist for the next session.  

You can also set Microsoft Edge to open specific pages on startup.  The pages you specify are stored locally on your device and are profile specific.  If you’ve turned on sync for Settings in **edge://settings/profiles/sync**, these specified pages will be synced across all versions of Microsoft Edge where you’re signed in.  

InPrivate and guest tabs won’t be restored on startup.  

## Payments

Microsoft Edge helps you be more productive by letting you save your payment info to your browser profile and offering to automatically fill in payment forms with this info when you need it while browsing.  When you encounter a similar payment form, Microsoft Edge will offer to fill in the form with this saved info.  Credit card and other payment info is only saved with your explicit permission.  

Microsoft Edge will ask you if you want to store your payment info if payment autofill is turned on.  This info is encrypted locally on your device.  You can delete any saved payment info in **edge://settings/payments**.  When you delete saved payment info, that info will no longer appear as an autofill suggestion.  You can choose not to save any payment info by turning off this feature in **edge://settings/payments**.  

Microsoft Edge supports the PaymentRequest API by letting you pay for purchases with payment info you’ve saved using autofill.  PaymentRequest API allows the merchant to request the following information: credit card number, credit card expiration, full name, billing address, email address, phone number, and shipping address.  The API tells the merchant that the user has credit card info saved but doesn’t share any info with the merchant until you agree.  You can turn off this feature in **edge://settings/privacy**.  

If you’ve saved payment info to your Microsoft account, it’s also available for autofill in the browser.  Payment info stored in your Microsoft account syncs across devices.  If you’ve made any Xbox or Microsoft Store purchases in the past, you might already have payment info saved to your Microsoft account.  During payment autofill, a card from your Microsoft account is masked and is only fully revealed after two-factor authentication.  This provides additional security while retrieving your payment info. 

## Personalizing advertising, search, news and other Microsoft services

If you’ve allowed personalization, we will collect and use your Microsoft Edge browsing history to personalize experiences and advertising on `Bing.com`, Microsoft News, and other Microsoft services.  This will provide more relevant and useful search results, ads, and news content.  For example, if we infer based on your browsing that you prefer shopping at a particular store, the ads you see may be tailored to that store’s products.  Similarly, if you frequently look at travel blogs and read travel articles, your news feed may include more relevant news content about traveling.  
 
This feature is only available for users with a non-child Microsoft account.  This feature is not available for users signed in to Microsoft Edge with a work account.  

Your browsing history is collected and used for personalization only if all four conditions are met: 

- You’re signed in with a non-child Microsoft account  
- You’ve given permission for the collection and use of this data for personalization 
- Group policies managed by your organization allow personalization 
- You’re not using the browser in Guest mode or InPrivate mode 

Your browsing history and other relevant data is transferred over HTTPS and attached to your Microsoft account info.  Your browsing history is stored on secure Microsoft servers.  You can view and delete previously shared browsing history by going to the [Microsoft privacy dashboard](https://go.microsoft.com/fwlink/?LinkId=529732).  Your browsing history is stored on secure Microsoft servers for up to 45 days.  After 45 days this data will be deleted and not be used for personalization.  

You can modify your interests or opt out of personalized ads from the [Microsoft privacy dashboard ad settings](https://go.microsoft.com/fwlink/?linkid=2105263).  Note that opting out of personalized ads on the Microsoft privacy dashboard doesn’t turn off the collection and use of your browsing history for personalization of search results and content in your news feed.  To turn off the collection and use of your Microsoft Edge browsing history for personalized search results and news, go to **edge://settings/privacy** and turn off **Improve your web experience by allowing Microsoft to use your browsing history from this account for personalizing advertising, search, news and other Microsoft services** under **Personalize your web experience**.  If you stop sharing this data, Microsoft will no longer collect and use your browsing history to personalize ads, search results, and news.  [Learn more](https://go.microsoft.com/fwlink/?linkid=2105403) 

## Print

Microsoft Edge lets you print webpages, PDF files, or other content using a variety of devices and applications.  When you print to a printer, application, or PDF, Microsoft Edge sends the commands and file info to your device’s operating system.  This info is not sent to Microsoft, and all data sent to your device’s operating system for printing is deleted immediately after printing is completed or canceled.  To change your printing destination, go to **edge://settings/printing**.  

You can also print webpages and files to PDF format using Microsoft Print to PDF, which does not send any data about the file back to Microsoft.  Any annotations made to the PDF file are saved locally to the file itself. 

## Profiles

Profiles in Microsoft Edge allow you to separate your browsing data into independent profiles.  Data associated with one profile is separate from data associated with other profiles.  Your personal favorites and history, for example, won’t sync with your work account if you’ve set them up in different profiles.  

However, users can easily switch between existing profiles in Microsoft Edge without the need for passwords.  If they have access to the same device, users can get to another profile on the same version of Microsoft Edge without the permission of the profile owner.  Removing the profile from Microsoft Edge settings will permanently delete browsing data stored on the device like browsing history, favorites, form fill data, and passwords.  Data synced to your account may still be stored in the Microsoft cloud and can be cleared from the [Microsoft privacy dashboard](https://go.microsoft.com/fwlink/?LinkId=529732).  

Guest mode is a temporary instance of a fresh profile.  It allows you to browse on another person's computer without modifying their profile.  Browsing data from Guest mode such as favorites, browsing history, passwords, and form fill data won’t persist once you close all Guest mode windows.  Downloads will be stored on the device, but the history of the downloads will be deleted.  Guest mode allows you to browse the web without being signed in to other sites automatically.  Microsoft Edge doesn’t send websites any info to indicate that the user is browsing in Guest mode.  When you use Guest mode, permission to collect diagnostic data about how you use the browser and websites you visit is taken from the profile of Microsoft Edge from which the Guest mode session was launched.  All browsing data for that Guest mode session is cleared after all Guest windows are closed.

InPrivate browsing is a private browsing mode in which no browsing history, download history, cookies and site data, and form fill data will be remembered.  Microsoft Edge will save downloaded files as well as any new favorites created while browsing InPrivate.  By default, while browsing InPrivate, Microsoft won’t collect any info about websites you visit for product improvement purposes.  Your school, workplace, or internet service provider might still be able to see your browsing activity.  Browsing data for that InPrivate session is cleared after all InPrivate windows are closed.  [Learn more](https://support.microsoft.com/help/4533513)

## Read aloud

Microsoft Edge offers Read aloud, which can read out loud the content of a webpage to users.  You can start Read aloud from either the right-click context menu on a page or by going to **Settings and more (...)** > **Read aloud**.  Read Aloud offers multiple voices that can be used to read the webpage content.  If you’re using voices that are [installed on Windows 10](https://support.office.com/article/download-voices-for-immersive-reader-read-mode-and-read-aloud-4c83a8d8-7486-42f7-8e46-2b0fdf753130) via the “Time & Language” section of Windows 10 Settings, any voices you’ve previously used are stored in the local cache and can be cleared from **edge://settings/clearBrowserData**.  

When you start Read aloud, Microsoft Edge will use the [Web Speech API](https://wicg.github.io/speech-api/).  Depending on the voice you select, the content of the page will be converted from text to speech using either a platform-supplied, client-side library (i.e.  one specific to your operating system) or a server-side library powered by Microsoft Cognitive Services.  If your content is converted to speech using a client-side library, no information will be sent to Microsoft servers.  If your content is converted to speech using Microsoft Cognitive Services (as indicated by the word “Online” in any of the voice names), the text, along with a randomly generated token, is sent to Microsoft.  Once conversion is complete, the service returns the spoken text in an audio file to your device.  All data is encrypted while being transferred from your device to Microsoft and vice versa.  The text that is sent to Microsoft and the audio file that is generated are both deleted immediately after conversion occurs; no other data about your web content is stored for any period of time.

## Resolve navigation errors

If Microsoft Edge detects SSL connection timeouts, certificate errors,or other network issues that might be caused by a captive portal (for example, a Wi-Fi network at a hotel or airport), Microsoft Edge will make a request to `http://edge.microsoft.com/captiveportal/generate_204` and check the response code.  If the request is redirected to another URL, Microsoft Edge will open that URL in a new tab, assuming that it’s a sign-in page.  Requests to the captive portal detection page is a stateless service, and requests aren’t logged and cookies aren’t sent or saved.  On Windows platforms, Microsoft Edge will use a Windows captive portal service.  Otherwise, the Microsoft Edge captive portal service is used.  To turn this service off, go to **edge://settings/privacy** and turn off **Use a web service to help resolve navigation errors**.

## Sign in and Identity

Signing in to Microsoft Edge provides additional features to make the browser more productive for you.  To sign you in seamlessly, when you first launch Microsoft Edge, we’ll attempt to detect your identity from the operating system.  If we detect your identity from the operating system but you don’t want to remain signed in to Microsoft Edge, go to your Microsoft Edge profile settings and either sign out or remove your profile.  If we don’t detect your identity from the operating system, you can sign in to Microsoft Edge from your profile.  

If a new identity is added to the operating system and your Microsoft Edge profile doesn’t currently have an identity, Microsoft Edge will add that identity to your profile.  If you sign in to Microsoft Edge with a Microsoft account or a work or school account and don’t have an identity on your Windows 10 profile, that account will be added to your Windows 10 profile unless you specifically choose to not add it to Windows 10 while signing in.

Your signed-in profile won’t begin syncing your data without your explicit permission while either launching Microsoft Edge for the first time or signing in to the browser.  

Being signed in to Microsoft Edge enables single sign-on (you will be signed in when you visit sites such as `Bing.com`) and other identity-powered experiences such as sync.  If you’d like to only sign in to Microsoft Edge and not to other Microsoft sites such as Bing.com, you can sign out of the specific site.  We’ll create a sign out cookie that tells Microsoft Edge to not sign in to that site for future visits.  You can sign in to that again site by either entering your username and password or clearing your cookies from Microsoft Edge settings.  [Learn more about clearing browsing data](https://support.microsoft.com/help/10607).  

To prevent any identity from being associated with Microsoft Edge, remove your Microsoft Edge profile or sign out of Microsoft Edge.  To delete all data associated with your Microsoft Edge profile on your device, you must remove your Microsoft Edge profile.  This won’t delete previously synced data associated with this identity.  

Your identity in Microsoft Edge on MacOS is shared between Microsoft apps.  This allows you to sign in to a Microsoft app without having to separately enter your credentials if you’re signed in to another Microsoft app on the device.  On MacOS, you won’t be automatically signed in to Microsoft Edge based on your authentication state in another Microsoft app.  When you try to sign in to Microsoft Edge, we’ll offer to use the credentials from another Microsoft app to sign you in to Microsoft Edge seamlessly.  Similarly, when you are signed in with an account to Microsoft Edge, if you try to sign into other Microsoft apps, your Microsoft Edge credentials can be used to help you sign in to those other Microsoft apps on the device without requiring you to enter your credentials again.  

You can’t sign in to Microsoft Edge when using Guest mode or InPrivate browsing. 

## SmartScreen

SmartScreen is designed to help you safely browse the web.  When you go to websites or download files, SmartScreen checks the reputation of the URL or file.  If SmartScreen determines that the site or file is malicious, it will block you from going to the site or downloading the file.  

![SmartScreen](./media/WhitepaperMedia/SmartScreen.png)

As you browse the web, SmartScreen categorizes websites and downloads as top traffic, dangerous, or unknown.  Top traffic is popular sites that SmartScreen has determined are trustworthy.  If you go to a site marked as dangerous, SmartScreen immediately blocks you from accessing the site.  When you go to an unknown site, SmartScreen checks its reputation to determine if you should access the site.  

SmartScreen uses three types of reputation checks.  First, SmartScreen checks the URL of sites you visit against a local list to determine if the site is part of top traffic or is a known dangerous site.  When you visit a top traffic site, SmartScreen doesn’t send the URL to the SmartScreen service.  If the URL is on the local list of dangerous sites, SmartScreen will block it, which prevents any portion of the malicious web content from loading.  Microsoft Edge periodically downloads an updated list of top traffic and dangerous sites to the device.  The second type of URL check is an asynchronous reputation check to the SmartScreen service.  SmartScreen performs this check on all URLs that aren’t categorized as top traffic.  Microsoft Edge passes the URL, relevant info about the site, an identifier unique to your device, and general location to the SmartScreen service to determine the safety of the site.  This allows the service to identify new dangerous sites and stay up to date with the latest security threats.  The results of URL checks are stored locally on the device and are automatically cleared at the end of the browser session.  All requests to the SmartScreen service are made with TLS encryption.  

Third, SmartScreen checks downloaded files to ensure they won’t harm your device.  SmartScreen performs a binary file reputation check synchronously as your download completes.  Microsoft Edge sends info about the file such as the file hash, file name, download URI and an identifier unique to your device is sent to SmartScreen to perform the reputation check.  All SmartScreen requests are made with TLS encryption.  The SmartScreen service sends back the result of the check which allows the file to either fully download or not.  These results are stored locally on the device.  

The SmartScreen service stores data about the reputation checks and builds a database of known malicious URLs and files.  This data is stored on secure Microsoft servers and is only used for Microsoft security services.  This data will never be used to identify or target you in any way.  

SmartScreen is turned on by default for Microsoft Edge.  To turn off SmartScreen, go to **edge://settings/privacy**.  Closing your current browsing session clears all locally stored SmartScreen URL data.  Clearing your download history will remove any locally stored SmartScreen data about file downloads.  InPrivate browsing uses the SmartScreen preference from the profile in which the InPrivate session was launched.  SmartScreen is always enabled for Guest mode.  [Learn more about SmartScreen](https://support.microsoft.com/help/17443).  

### Block potentially unwanted apps 

Optionally, SmartScreen can check the URL of files you download to see if it’s been categorized as potentially unwanted apps.  Blocking potentially unwanted apps helps deliver more productive, performant, and delightful Windows experiences.  This setting is turned off by default and is only available on Windows 10 devices.  You can turn on **Block potentially unwanted apps** by going to **edge://settings/privacy**.  Learn [how potentially unwanted apps are categorized](https://docs.microsoft.com/windows/security/threat-protection/intelligence/criteria#potentially-unwanted-application-pua) or how to [configure](https://docs.microsoft.com/windows/security/threat-protection/windows-defender-antivirus/detect-block-potentially-unwanted-apps-windows-defender-antivirus) this setting.  

## Spellcheck

Microsoft Edge checks your spelling as you type in the browser.  The spellcheck service is completed locally on the device—Microsoft Edge does not send info about your typing to Microsoft for spellcheck.  You can turn off spellcheck by going to **edge://settings/languages**.  

When you add a new language to Microsoft Edge, the browser will download the new language’s dictionary to the device via HTTPS.  The dictionary is used for the built-in spellcheck service.  You can also add or remove words to your local dictionary by going to **edge://settings/languages**.  Deleting the language from your Microsoft Edge settings will delete the dictionary from the device.  Guest mode will not use the profile’s custom dictionary or any added languages.

## Suggest similar sites

To help resolve URL typos in the address bar that result in a website error, Microsoft Edge may recommend a corrected URL.  When a website navigation error occurs, Microsoft Edge sends the domain of the web address to the Microsoft service to suggest a corrected URL.  Microsoft Edge does not include identifiers or tokens with the domain.  If the service finds a suggestion, it will return the suggested URL.  Microsoft stores the incorrect domain and suggested domain to help improve the service.  To help you navigate to the correct sites, this feature is turned on by default.  To turn off this feature, go to **edge://settings/privacy** and turn off Suggest similar sites when a website can’t be found.

## Sync

Signing in to Microsoft Edge with a Microsoft account allows you to sync your browsing data across all your signed-in versions of Microsoft Edge. You can sync your favorites, settings, form fill data (addresses and more), and passwords.  You must allow permission to turn on sync in Microsoft Edge, and each synced data type can be turned on or off individually.  Favorites includes any swept tabs if you used that feature from the prior version of Microsoft Edge and will sync along with your favorites.   Deleting or modifications to favorites, and other data types from one signed-in version of Microsoft Edge will sync to all other signed-in versions of Microsoft Edge where sync is turned on.  Sync configurations can be managed from **edge://settings/profiles/sync**.  

![Sync](./media/WhitepaperMedia/Sync.png)

For sync to function, there is additional device connectivity and config data such as name of your device, make and model, necessary to provide the sync experience.  This data can be deleted from the [Microsoft device dashboard](https://account.microsoft.com/devices/).  You can manage synced favorites from **edge://favorites**.  All other data types can be managed from your Microsoft Edge profile settings at **edge://settings/profiles**.  

All synced data is encrypted in transit over HTTPS when transferred between the browser and Microsoft servers.  The synced data is also stored in an encrypted state in Microsoft servers.  Sensitive data types such as addresses and passwords are further encrypted on the device before being synced.  If you’re using a work account, all data types are further encrypted before being synced using Microsoft Information Protection.  All other synced data types will be stored until you delete the data, the account is deleted, or the account becomes inactive.  An account ID is attached to all synced data—this is necessary to perform sync across multiple devices.  

InPrivate and Guest mode browsing data doesn’t sync to your Microsoft account.  However, favorites created during InPrivate sessions will be synced across your signed-in versions of Microsoft Edge where sync is turned on. 

## Testing new functionality 

To provide the best experience for everyone, we’re always learning from our users. As part of this learning, random subsets of users may get to experience new functionality before it’s made available to everyone. To receive random assignments and enable updates with new functionality, Microsoft Edge regularly sends info about your operating system, channel, version, country and other census data to the Microsoft Edge feature rollout service.  This data is sent with a resettable identifier unique to your browser.  Additional unique identifiers are sent to the Microsoft Edge feature rollout service if you are signed into Microsoft Edge with a Microsoft Employee account.  Data is transmitted to the service over HTTPS and is only used for testing and updating purposes.  Additional controls and configurations are available for organizations.  [Learn more](https://go.microsoft.com/fwlink/?linkid=2112125) 

Depending on your privacy settings, crash reports and info about how you use the browser may be collected and used to determine the success of these features.  This is to ensure we build the best browser for everyone.  As a user, you cannot turn off randomly assigned feature rollouts, but you can control whether your diagnostic data is sent to Microsoft by going to **edge://settings/privacy** and changing the settings under **Help improve Microsoft Edge**.  

## Tracking prevention

Microsoft Edge is designed to detect and block known trackers.  Users can choose from three levels of tracking prevention—Basic, Balanced, and Strict.  To protect our users’ privacy, balanced is selected by default.  Microsoft Edge detects trackers before they load on the page by using an open source list of known trackers.  This list is downloaded on to the device periodically as the list is updated.  The number of trackers blocked and names of those trackers are stored locally on the device for statistical purposes.  This data can be cleared by going to **edge://settings/privacy/blockedTrackers**.  The detection and blocking of trackers occurs locally on the device.  You can turn off tracking prevention by going to **edge://settings/privacy**.  [Learn more](https://support.microsoft.com/help/4533959)  

You can turn off list updates via the group policy: [Enable component updates in Microsoft Edge](https://docs.microsoft.com/deployedge/microsoft-edge-policies#componentupdatesenabled).  

![TrackingPrevention](./media/WhitepaperMedia/TrackingPrevention.png)

## Translate

In Microsoft Edge, you can browse the web and translate webpages into a language of your choice.  The built-in translation feature uses a service on your device that takes random portions of a webpage to detect the original language.  If the detected language is not one of your default languages, Microsoft Edge will offer to translate the webpage to your displayed language or another language you choose.  Microsoft Edge will not translate a webpage without your permission.  You can also translate a webpage by right-clicking the page and selecting **Translate**.  To translate the webpage, Microsoft Edge sends the content of the page and a randomly generated token to the Microsoft Azure translation service over a secure SSL connection.  The content of the page is not stored for any purposes.  To stop Microsoft Edge from offering to translate webpages, go to **edge://settings/** languages and turn off **Offer to translate pages that aren’t in a language you read**.

## Web apps and Pinned sites

Microsoft Edge allows you to install web apps made by website developers and pin your favorite sites.  

Web apps are designed to create unique experiences for a website.  When you install a web app, the site for which it was installed and the app’s unique name are stored locally on the device.  This data is not sent to Microsoft and is not synced across devices.  Your installed web apps are separated by profile.  Web apps use site permissions for the profile of which the app was installed.  You can manage your web apps by going to **edge://apps**.  These web apps may send info about how you use the web app and the sites you visit in the web app to Microsoft.  This diagnostic data collection is determined by your **Help improve Microsoft Edge** settings in Microsoft Edge Privacy and services settings.  To turn off this diagnostic data collection for Windows 10 Microsoft Edge Stable and Beta channels, go to Windows diagnostic data settings.  To turn off this diagnostic data collection for all other channels, go to **edge://settings/privacy** in a normal browsing session and turn off both **Improve Microsoft products by sending crash reports and data about how you use the browser** and **Make searches and Microsoft products better by sending info about websites you visit in Microsoft Edge**.  Clearing your browsing data from Microsoft Edge will clear your browsing data from web apps.   

When you pin a site, it will be added to your taskbar or dock.  This data is stored locally on your device.  For some sites, info about whether the site has been pinned is shared with the site, so the site knows not to prompt to be pinned.  You can manage your pinned sites from the taskbar or dock.  Pinned sites open in Microsoft Edge windows and use the same site permissions and diagnostic data about how you use the browser and sites you visit as that version of Microsoft Edge.  

## WebView

Microsoft Edge WebView allows app developers to host web content in their native applications on Windows 10 and Windows 7.  The applications hosting the Microsoft Edge WebView may send diagnostic data about how you use the Microsoft Edge web platform and sites you visit in the application to Microsoft.  This diagnostic data collection is determined by your **Help improve Microsoft Edge** settings in Microsoft Edge Privacy and services settings.  To turn off this diagnostic data collection for Windows 10 Microsoft Edge Stable and Beta channels, go to Windows diagnostic data settings.  To turn off this diagnostic data collection for all other channels, go to **edge://settings/privacy** in a normal browsing session and turn off both **Improve Microsoft products by sending crash reports and data about how you use the browser** and **Make searches and Microsoft products better by sending info about websites you visit in Microsoft Edge.**  The applications hosting the Microsoft Edge WebView may collect other data and have their own data collection management and privacy policies. 

## Websites you visit for product and service improvement

If you’ve chosen to improve searches and other Microsoft products and services, we send info about websites you visit to Microsoft.  This diagnostic data is used in aggregate to improve Microsoft products and services for all users and is not collected or stored with your Microsoft account.  Sending info about sites you visit in Microsoft Edge helps us understand how quickly sites load and increases the relevance of search results.  

This diagnostic data includes the URL of the page you visit, website metrics, title of the page, how you accessed the page, info about the page content, and other relevant info about the page navigation.  Some diagnostic data is attached with an identifier unique to your device.  Otherwise the diagnostic data is associated with a resettable identifier unique to your browser.  These identifiers do not contain your personal information.  We respect the sensitivity of the diagnostic data by restricting data access and/or scrubbing of personally identifiable information.  To reset the identifier unique to your browser on Windows 10 devices, you can and change your setting under **Diagnostic data** from **Full** to **Basic**.  On other platforms, the resettable identifier unique to your browser is generated again whenever you change the **Make searches and Microsoft products better by sending info about websites you visit in Microsoft Edge** setting in **edge://settings/privacy** from **on** to **off**.  This reset functionality may be different for devices managed with group policies set by your organization.  

For Windows 10 Stable and Beta channels of Microsoft Edge, this setting is determined by your Windows diagnostic data setting.  This is reflected in your Microsoft Edge Privacy and services settings.  You can change this Windows settings by going to **Start** > **Settings** > **Privacy** > **Diagnostics & feedback**.  On all other channels and platforms, you can control this diagnostic data collection by going to **edge://settings/privacy** and turning on or off **Make searches and Microsoft products better by sending info about websites you visit in Microsoft Edge**.  This setting is the same for all profiles associated with the installation of Microsoft Edge on your device.  This setting is not synced across devices.  If your device is managed with group policies set by your organization, this will be reflected in **edge://settings/privacy**.  

This diagnostic data is encrypted in transit and stored on secure Microsoft servers in raw form for up to 30 days.  After the diagnostic data is de-identified and aggregated or the raw diagnostic data is deleted.  The de-identified and aggregated diagnostic data is stored for up to 2 years to continue to improve Microsoft products and services.  Because this diagnostic data is not collected from or stored with your Microsoft account, this diagnostic data cannot be viewed or deleted from your Microsoft privacy dashboard.  On Windows 10 devices, you can request to delete the diagnostic data associated with your device by going to **Start** > **Settings** > **Privacy** > **Diagnostics & feedback** and selecting **Delete** under **Delete diagnostic data**.  On other platforms this diagnostic data is deleted or fully aggregated and anonymized within 30 days.

You can view diagnostic data being collected on Windows 10 via the Diagnostic data viewer by going to **Start** > **Settings** > **Privacy** > **Diagnostics & feedback** > **View diagnostic data**.  On other platforms you can view this data from **edge://data-viewer**, if you’ve turned on **Make searches and Microsoft products better by sending info about websites you visit in Microsoft Edge** at **edge://settings/privacy**.  

This diagnostic data is never sent while browsing InPrivate or in Guest mode.  

## Windows Defender Application Guard

Windows Defender Application Guard (WDAG) is a feature available for organizations.  When Windows Defender Application Guard is turned on, Microsoft Edge will open untrusted sites inside an isolated container to protect the organization’s resources from malicious sites or phishing attacks.  This feature can only be turned on with group policies managed by your organization  and is only available on recent versions of Windows 10 devices.  WDAG collects product improvement diagnostic data about opening untrusted sites in the isolated container, such as how long it takes to open a new Application Guard window.  

With your permission, WDAG can also collect info about how you use the browser and information about sites you visit.  To turn off this diagnostic data collection for Windows 10 Microsoft Edge Stable and Beta channels, go to Windows diagnostic data settings.  To turn off this diagnostic data collection for all other channels, go to **edge://settings/privacy** in a normal browsing session and turn off both **Improve Microsoft products by sending crash reports and data about how you use the browser** and **Make searches and Microsoft products better by sending info about websites you visit in Microsoft Edge**.

## Windows Information Protection

Windows Information Protection (WIP) helps prevent the accidental leaking of corporate information.  It is only available for organizations through  group policies managed by your organization.  WIP will be enabled for those sites that are identified as corporate assets.  You can identify which sites are corporate assets from the management icon in the address bar.  WIP enforces features such as preventing copying and pasting from the browser or uploading certain files to sites outside your organization.  

![WIP](./media/WhitepaperMedia/WIP.png)

If WIP is turned on for your version of Microsoft Edge, the browser collects event logs and sends them to your organization.  [Learn more about the event logs captured by WIP](https://docs.microsoft.com/windows/security/information-protection/windows-information-protection/collect-wip-audit-event-logs).  If WIP is turned on, you can’t opt out of this data collection.  WIP is only available on releases of Windows 10 from August 2016 and newer.

## Thank you!

Microsoft Edge is made possible by the [Chromium](https://www.chromium.org/) open source project and other open source software **edge://credits/**.  [Google Chrome’s Privacy Whitepaper](https://www.google.com/chrome/privacy/whitepaper.html) was used as a source for gathering related information about the Chromium open source project.  

Microsoft Edge is committed to protecting and respecting your privacy, while giving the transparency and control you deserve.  Reach out to [@MSEdgeDev](https://twitter.com/MSEdgeDev) on Twitter or submit feedback by going to **Settings and more (…)** > **Help and feedback** > **Send feedback** with questions or comments.  