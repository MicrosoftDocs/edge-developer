---
description: Distribution options when releasing an app using Microsoft Edge WebView2
title: Distribute a WebView2 app and the WebView2 Runtime
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/23/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, wpf apps, wpf, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---
# Distribute a WebView2 app and the WebView2 Runtime

A WebView2 app depends on the WebView2 Runtime on client machines.  When you distribute your WebView2 app, you need to take into account how the WebView2 Runtime is distributed to client machines and updated on client machines.


## Introduction to the Runtime, Evergreen distribution, and Fixed Version distribution

### The WebView2 Runtime

The WebView2 Runtime is a redistributable runtime and serves as the underlying (or _backing_) web platform for WebView2 apps.  The concept is similar to Visual C++ or the .NET Runtime for C++/.NET apps.  The WebView2 Runtime contains modified Microsoft Edge \(Chromium\) binaries that are fine-tuned and tested for apps.  After the WebView2 Runtime is installed, it doesn't appear as a user-visible browser app.  For example, a user does not have a browser desktop shortcut or an entry in the **Start** menu.

There are two different ways of distributing the WebView2 Runtime: the Evergreen distribution mode, and the Fixed Version distribution mode.

### The Evergreen Runtime distribution mode

The Evergreen distribution mode is recommended for most developers.  In the _Evergreen_ distribution mode, the WebView2 Runtime is automatically updated on client machines.  You can then distribute updates of your WebView2 app that use the latest WebView2 APIs, from the latest WebView2 SDK.

Pros:
*  The underlying web platform (WebView2 Runtime) updates automatically without additional effort from you.
*  Less disk space is required for the WebView2 Runtime on client systems, because the WebView2 Runtime is shared by all WebView2 apps that are on the client.

Cons:
*  Your WebView2 app cannot specify that a particular version of the WebView2 Runtime is required.
*  Your app needs to test whether new WebView2 APIs are present in the installed Runtime, such as by using `QueryInterface` in C/C++, or a `try/catch` block in .NET or WinUI.  This is because there are a couple of cases where the WebView2 Runtime isn't updated on some clients.


### The Fixed Version Runtime distribution mode

In the _Fixed Version_ distribution mode, you package a specific version of the WebView2 Runtime together with your WebView2 app in your app package.  The WebView2 Runtime that you package with your app is used only by your WebView2 app, not by any other apps on the client's machine.

Pros:
*  You have more control over WebView2 Runtime versioning.  You know which WebView2 APIs are available to your app because you control which version of the WebView2 Runtime is available to your app.  Your app doesn't need to test whether the latest APIs are present.

Cons:
*  You need to manage the WebView2 Runtime yourself.  The WebView2 Runtime isn't automatically updated on clients, so to use the latest WebView2 APIs, you must periodically update your app together with the updated WebView2 Runtime.
*  More disk space is required on the client, if there are multiple WebView2 apps installed.
*  The Fixed Version WebView2 Runtime can't be installed by using an installer.


<!-- todo: Reduce duplication here with later in the article, eg the **Evergreen Bootstrapper** section here overlaps with the later "Online-only deployment" section. -->
## Understanding the options at the Runtime download page

The [Download the WebView2 Runtime][Webview2Installer] section of the **Microsoft Edge WebView2** page provides several options for ensuring that the WebView2 Runtime is on client machines.  Understanding the options at this page provides a good introduction, to help decide which approach you want to use.

:::image type="complex" source="../media/runtime-distrib-options.png" alt-text="Options for distributing and updating the WebView2 Runtime" lightbox="../media/runtime-distrib-options.png":::
    Options for distributing and updating the WebView2 Runtime
:::image-end:::

*   The **Evergreen Bootstrapper** section of the page provides a small Evergreen runtime bootstrapper that runs on the client machine, for online users.  You can use the bootstrapper a couple different ways:

    *   Link to the bootstrapper, using a link you obtain from the **Get the Link** button.  Your app uses this link to programmatically download the bootstrapper on the user's device and invoke the bootstrapper.  This approach avoids the need to package anything with your app.  This approach has a dependency on Microsoft's Content Delivery Network (CDN).  This approach only works with clients that are online.

    *   Download the bootstrapper (using the **Download** button in the **Bootstrapper** section) and then distribute the bootstrapper with your app.  In this approach, you package the bootstrapper with your app installer/updater or with your app itself, and invoke the bootstrapper that you included with your app.  This approach avoids dependency on Microsoft's CDN.  This approach only works with clients that are online.

*  The **Evergreen Standalone Installer** section of the page provides a large, standalone Evergreen installer, primarily for offline users.  In this approach, you package the standalone installer with your app installer/updater or app itself, and invoke the Evergreen Standalone installer.  This approach avoids dependency on Microsoft's CDN.

*  The **Fixed Version** section of the page provides a Fixed Version runtime that you distribute along with your app.

The Evergreen distribution mode is recommended for most apps.


<!-- ====================================================================== -->
## Details about the WebView2 Runtime

When distributing your WebView2 app, make sure that the WebView2 Runtime is present on the client machine.  This requirement applies to both the Evergreen and Fixed Version distribution modes.

If you use the Fixed Version distribution mode, you can skip the next couple of sections and navigate to [Details about the Fixed Version Runtime distribution mode](#details-about-the-fixed-version-runtime-distribution-mode).

### Runtime or browser support during development or production

During development and testing, a WebView2 app can use either option as the backing web platform:
*   The WebView2 Runtime.  The Runtime generally provides the same web platform capabilities and update cadence as the Stable channel of the Microsoft Edge browser.  Use the WebView2 Runtime in a production environment or to develop and test against the web platform that your users have today.
*   A preview (Insider) Microsoft Edge \(Chromium\) browser channel.  Use this approach to test your app for forward-compatibility, so that you know if a breaking change is coming that will require updating your app.

A production release of a WebView2 app can only use the WebView2 Runtime as the backing web platform, not Microsoft Edge.

#### Microsoft Edge Stable channel isn't supported for WebView2

WebView2 apps aren't permitted to use the stable channel of Microsoft Edge as the backing web platform.  This restriction prevents a production release of a WebView2 app from taking a dependency on the browser.  A WebView2 app cannot take a dependency on the browser during production, because:

*   Microsoft Edge \(Chromium\) is not guaranteed to be present on all user devices.  Many devices in enterprises and in education are disconnected from Windows Update or are not managed by Microsoft directly.  Such devices might not have Microsoft Edge installed.  Requiring the production version of WebView2 apps to use the WebView2 Runtime rather than Microsoft Edge avoids making Microsoft Edge a prerequisite for running a WebView2 app.

*   Browsers and apps have different use cases.  If a WebView2 app required the presence of Microsoft Edge on the client, that would potentially have unintended side-effects on the WebView2 app.  For example, an IT admin can prevent the browser from being updated from a specific version, to keep the browser compatible with an internal website.  Requiring the production version of a WebView2 app to use the WebView2 Runtime rather than the browser allows the WebView2 app to stay evergreen even if browser updates are prevented by the admin.

*   As opposed to the browser, the WebView2 Runtime is developed and tested for app scenarios, and in some cases the WebView2 Runtime might include bug fixes that aren't yet available in the browser.  
    
The Evergreen WebView2 Runtime will be included as part of the Windows 11 operating system. Various WebView2 apps have installed the Evergreen Runtime on devices with an operating system prior to Windows 11. However, some devices might not have the Runtime pre-installed, so it's a good practice to check whether the Runtime is present on the client, and install the Runtime on the client if it's not already present.  Before your app creates a WebView, the app should check whether the WebView2 Runtime is present (either by checking a registry key or by calling an API) and install the Runtime if it is missing.  The app can do this check when installing or updating your app (recommended), or at app runtime.


<!-- ====================================================================== -->
## Details about the Evergreen Runtime distribution mode

The Evergreen distribution mode ensures that your WebView2 app is taking advantage of the latest WebView2 features and security updates.  The Evergreen distribution mode has the following characteristics:

*   The WebView2 Runtime updates automatically without additional effort from you.
*   All WebView2 apps that use the Evergreen distribution mode use a shared copy of the Evergreen WebView2 Runtime, which saves disk space.  

<!-- first half of paragraph 1 of post from github issue 341: https://github.com/MicrosoftEdge/WebView2Feedback/issues/341#issuecomment-747084537 -->
When you use the Evergreen distribution mode of the WebView2 Runtime, your WebView2 app assumes that clients have the latest Runtime.  Your app cannot require a particular version of the WebView2 Runtime for all apps on the client.  By the time a new WebView2 SDK package is released, a compatible version of the WebView2 Runtime has already been distributed to clients.  Therefore it's ok for your WebView2 app to use the APIs that are in the latest version of the WebView2 SDK.

<!-- cover in versioning article instead? -->
For example, when Microsoft publishes the WebView2 SDK version 1.0.800.0, WebView2 Runtime version 88.0.800.0 (and a compatible Microsoft Edge preview channel) has been distributed to clients already, and therefore all of the APIs that are available in version 800 of the SDK are supported by the installed Runtime (version 800 or higher).
<!-- /first half of para1 -->

### Deploying the Evergreen WebView2 Runtime

Only one installation of the Evergreen WebView2 Runtime is needed for all Evergreen apps on the device.  There are a number of tools available at [Download the WebView2 Runtime][Webview2Installer].  The following tools help you deploy the Evergreen Runtime.

*   For online clients: _WebView2 Runtime Bootstrapper_ is a tiny \(approximately 2 MB\) installer.  The WebView2 Runtime Bootstrapper downloads and installs the Evergreen Runtime from Microsoft servers that matches the user's device architecture.
    *   In the setup part of your WebView2 app, link to the bootstrapper.  Use a link to programmatically download the bootstrapper; select the **Get the Link** button at the above download page.
    *   Or, download the bootstrapper and package it with your WebView2 app.

*   For offline clients: _WebView2 Runtime Standalone Installer_ is a full installer that installs the Evergreen WebView2 Runtime in offline environments.
    
Currently, both the bootstrapper and standalone installer only support per-machine installs, which requires elevation of permissions.  If an installer is run without elevation, the user is prompted to elevate permissions.  

Use the following online deployment workflow or offline deployment workflow to ensure that the Runtime is already installed before your app launches.  You can adjust your workflow depending on your scenario.  Sample code is available in the [Samples repo][GitHubMicrosoftedgeWebView2samplesWebview2Deployment].  

#### Online-only deployment  

If you have an online-only deployment scenario where users are assumed to have internet access, complete the following steps.  

1.  During your app setup, run a test to make sure that the WebView2 Runtime is already installed.  To verify that the Runtime is installed, use either of the following approaches:

    *   Inspect the `pv (REG_SZ)` registry key for the WebView2 runtime at the following location.  If this regkey doesn't exist, or if exists and is `null` or an empty string, this means that the WebView2 Runtime is not installed on the client.  Use this regkey to detect whether the WebView2 Runtime is installed, and to get the version of the WebView2 Runtime.  Find `pv (REG_SZ)` at the following location.  
        
        On 64-bit Windows:
        
        ```text
        HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\EdgeUpdate\Clients\{F3017226-FE2A-4295-8BDF-00C3A9A7E4C5}
        ```  
        
        On 32-bit Windows:
        
        ```text
        HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\EdgeUpdate\Clients\{F3017226-FE2A-4295-8BDF-00C3A9A7E4C5}
        ```  
        
    *   Alternatively, run [GetAvailableCoreWebView2BrowserVersionString][ReferenceWin32Webview2IdlGetavailablecorewebview2browserversionstring] and evaluate whether the `versionInfo` is `NULL`.  `NULL` indicates that the Runtime isn't installed.

1.  If the Runtime is not installed, in your app setup process, use the link (from the **Get the Link** button on the download page) to programmatically download the WebView2 Runtime Bootstrapper.

1.  Invoke the WebView2 Runtime Bootstrapper from an elevated process or command prompt by issuing the command `MicrosoftEdgeWebview2Setup.exe /silent /install`.
    
The above workflow has several benefits:
*   The Runtime is installed only when needed.
*   You are not required to package a Runtime installer with your WebView2 app.
*   The WebView2 Runtime Bootstrapper automatically detects the device's architecture (platform) and then installs the matching WebView2 Runtime.
*   The Runtime is installed silently.  
    
Alternatively, instead of programmatically downloading the bootstrapper on-demand by getting a link, as shown above, you can package the Evergreen Bootstrapper for the WebView2 Runtime with your app.

#### Offline deployment  

If you have an offline deployment scenario, where app deployment has to work entirely offline, complete the following steps.  

1.  Download the Evergreen Standalone Installer from [Download the WebView2 Runtime][Webview2Installer] to your development machine.  This is a tool to install the WebView2 Runtime on the client.

1.  Include the Evergreen Standalone Installer in your app installer or updater.  

1.  During your app setup, test whether the WebView2 Runtime is already installed, using either of the following approaches:

    *   Check whether the `pv (REG_SZ)` regkey exists and whether the regkey is `null` or empty.  If this regkey doesn't exist, or it is `null` or an empty string, the WebView2 Runtime isn't currently installed on the client.  Find `pv (REG_SZ)` at the following location:
        
        On 64-bit Windows:
        
        ```text
        HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\EdgeUpdate\Clients\{F3017226-FE2A-4295-8BDF-00C3A9A7E4C5}
        ```  
        
        On 32-bit Windows:
        
        ```text
        HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\EdgeUpdate\Clients\{F3017226-FE2A-4295-8BDF-00C3A9A7E4C5}
        ```  
        
    *   Alternatively, call [GetAvailableCoreWebView2BrowserVersionString][ReferenceWin32Webview2IdlGetavailablecorewebview2browserversionstring] and check whether the `versionInfo` is `NULL`.  If `versionInfo` is `NULL`, the WebView2 Runtime isn't currently installed on the client.

1.  If the WebView2 Runtime is not installed, run the Evergreen Standalone Installer.  If you want to run a silent installation, either run the installer from an elevated process, or copy and run the following command:
    
    ```shell
    MicrosoftEdgeWebView2RuntimeInstaller{X64/X86/ARM64}.exe /silent /install
    ```  

### Test your app for forward-compatibility

The Web is constantly evolving.  In the Evergreen distribution mode, the WebView2 Runtime is automatically kept up to date on the client to provide the latest features and security fixes.  If you use Evergreen distribution, to ensure that your WebView2 app stays compatible with the web, you should set up testing infrastructure.  

Microsoft Edge preview channels \(Beta, Dev, and Canary\) provide a sneak peek into what is coming next in the WebView2 Runtime.  Test your WebView2 app regularly against a  Microsoft Edge preview channel, and update your app or [report issues][GithubMicrosoftedgeWebviewfeedback] if issues arise.  Typically, Beta and Dev are the recommended channels.
<!-- but relnotes says "recommends that you use the Canary channel when you develop using the prerelease packages" -->
To help you decide which channel is right, navigate to [Overview of the Microsoft Edge channels][DeployEdgeMicrosoftEdgeChannels].  You can [Download Microsoft Edge Insider Channels][MicrosoftEdgeInsiderDownload] on your test environment, and use `regkey` or environment variables to indicate the channel preference for your testing app.

<!-- from paragraph 4 of post from github issue 341: -->
Maintain compatibility between the version of the WebView2 SDK that your app uses, and the version of the WebView2 Runtime on a client's machine.  To maintain compatibility between the WebView2 SDK and Runtime, you should test your WebView2 app against Microsoft Edge preview channels, so that you know if a breaking change is coming that will require updating your app.

Breaking changes are rare for the WebView2 API, but testing your app against Microsoft Edge preview channels is a good practice.  Such testing is similar to a web developer testing a website against a pre-release version of a browser or library.
<!-- / paragraph 4 of post -->

For more information, navigate to [CreateCoreWebView2EnvironmentWithOptions][ReferenceWin32Webview2IdlCreatecorewebview2environmentwithoptions].  You can also use WebDriver to automate WebView2 testing, as described in [Automate and test WebView2 with Microsoft Edge Driver][HowToWebdriver].

<!-- second half of paragraph 1 of post from github issue 341: -->
### Listening for the new version event
<!-- 
Maybe move-out or delete this section from this article.  d/k if we really want to get into the new version event, feature-detection, and experimental API here.
The new version event is already covered in the development best practices article.
Feature detection is already covered in the versioning doc. info about the Experimental APIs is more suited for the versioning doc than here.

De-dup much of this content (across several articles).  Instead, link to the versioning doc and development best practices article as follow-up reading.
-->
With the Evergreen mode, updated versions of the WebView2 Runtime are deployed to client machines automatically.  Your WebView2 app receives a `NewBrowserVersionAvailable` event, which signals that a new version of the WebView2 Runtime is available on the client's disk.  Your WebView2 app needs to listen for this event and then automatically restart when it receives this event.  To make the latest WebView2 Runtime become available to your app, re-create all of your WebView2 environment, or restart your app.  Restarting is required because the WebView2 Runtime can't be hot-swapped to update it.
<!-- /second half of para1 -->

<!-- paragraph 2 of post from github issue 341: -->
### Feature-detect when using recent APIs

<!-- de-dup. This paragraph is covered again in para3 -->
It's possible that the client's WebView2 Runtime hasn't been updated to the latest version, even though your app is using the Evergreen distribution mode.  This can happen if the client's IT admin has set policies to prevent automatically updating the WebView2 Runtime.

If you use the Evergreen mode, when your WebView2 app uses a new WebView2 API from a recent SDK, you should use an approach such as `QueryInterface` or `try-catch` to make sure the new API is present on the client's machine.  This is a best practice, because there are cases where the WebView2 Runtime isn't updated.

Even if you use the Evergreen distribution mode, the WebView2 Runtime might not be updated, for the following reasons:
*   An IT Admin can turn off updates of the WebView2 Runtime, because an Admin has control of updating their devices.
*   Clients that are offline don't receive the updated WebView2 Runtime.

The update policies for Microsoft Edge and the WebView2 Runtime are separate.  Even if the IT Admin has disabled automatic updates of Microsoft _Edge_, the WebView2 _Runtime_ is still automatically updated, unless the Admin turns off Runtime updating.  If the Admin disables updating Microsoft Edge (which is somewhat common), that doesn't affect which WebView2 APIs are available on the client machine.

<!-- de-dup: This and the previous paragraph are saying the same thing. Consider merge/deletion. -->
If an IT Admin wants WebView2 Runtime updates to stop, the Admin must specifically set a setting.  Usually, an Admin shouldn't prevent automatically updating the WebView2 Runtime.
<!-- /para2 -->


<!-- ====================================================================== -->
## Details about the Fixed Version Runtime distribution mode

For constrained environments with strict compatibility requirements, consider using the Fixed Version distribution mode.  The Fixed Version distribution mode was previously called _bring-your-own_.

To use the Fixed Version approach, get the WebView2 Runtime from [Download the WebView2 Runtime][Webview2Installer], and then package the Runtime with your WebView2 app.

In the Fixed Version distribution mode, you package a specific version of the WebView2 Runtime with your WebView2 app.  You can specify the timing of updating the WebView2 Runtime for your app.<!--really?-->  In the Fixed Version distribution mode, the WebView2 Runtime on the client isn't automatically updated.  You periodically update your app together with the WebView2 Runtime.

The Fixed Version approach doesn't use a registry key for the WebView2 Runtime.

To use the Fixed Version distribution mode:

1.  Download the Fixed Version of the WebView2 Runtime from [Download the WebView2 Runtime](https://developer.microsoft.com/microsoft-edge/webview2/#download-section), as a package.

    The most-patched version of the latest and second-latest major release are available for download at this site.  You should keep an archived copy of any versions you need.

1.  Decompress the WebView2 Runtime package using the command-line command `expand {path to the package} -F:* {path to the destination folder}` or by using a decompression tool such as WinRAR.  Avoid decompressing through the File Explorer, because that approach might not generate the correct folder structure.

1.  Include the decompressed Fixed Version binaries in your project.  

1.  Indicate the path to the Fixed Version binaries when creating the WebView2 environment.  

    *   For Win32 C/C++, you can create the environment using the [CreateCoreWebView2EnvironmentWithOptions][ReferenceWin32Webview2IdlCreatecorewebview2environmentwithoptions] function.  Use the `browserExecutableFolder` parameter to indicate the path to the folder that contains `msedgewebview2.exe`.

    *   For .NET, you must specify the environment before the WebView2 `Source` property takes effect.  For .NET, you can use either of the following approaches to specify the environment:

        *   Set the `CreationProperties` \([WPF][ReferenceWpfMicrosoftWebWebview2WpfWebview2Creationproperties]/[WinForms][ReferenceWinFormsMicrosoftWebWebview2WinFormsWebview2]\) property on the `WebView2` element.  Use the `BrowserExecutableFolder` member in the `CoreWebView2CreationProperties` \([WPF][ReferenceWpfMicrosoftWebWebview2WpfCorewebview2creationpropertiesCorewebview2creationproperties]/[WinForms][ReferenceWinFormsMicrosoftWebWebview2WinForms]\) class to indicate the path to the Fixed Version binaries.  

        *   Alternatively, use `EnsureCoreWebView2Async` \([WPF][ReferenceWpfMicrosoftWebWebview2WpfWebview2Ensurecorewebview2async]/[WinForms][ReferenceWinformsMicrosoftWebWebview2WinformsWebview2Ensurecorewebview2async]\) to specify the environment.  Use the `browserExecutableFolder` parameter in [CoreWebView2Environment.CreateAsync][ReferenceDotnetMicrosoftWebWebview2CoreCorewebview2environmentCreateasync] to indicate the path to the Fixed Version binaries.  

1.  Package and ship the Fixed Version binaries with your app.  Update the binaries as appropriate.  
    
### Known issues for Fixed Version  

Installing the Fixed Version of the WebView2 Runtime on the client causes [Microsoft PlayReady][MicrosoftPlayReady] to stop working.  Fix the PlayReady setup as follows.

1.  Locate the path where you deploy the Fixed Version package on the user's device, such as the following location.
    
    ```text
    D:\myapp\Microsoft.WebView2.FixedVersionRuntime.87.0.664.8.x64
    ```  
    
1.  Run the following commands on the user's device.

    ```shell
    icacls {Fixed Version path} /grant *S-1-15-2-2:(OI)(CI)(RX)
    icacls {Fixed Version path} /grant *S-1-15-2-1:(OI)(CI)(RX)
    ```  

1.  PlayReady should be working now on the user's device.  To confirm that PlayReady is installed correctly, in the **Security** tab of the **Fixed Version** folder, make sure permissions are granted for `ALL APPLICATION PACKAGES` and `ALL RESTRICTED APPLICATION PACKAGES`, as shown below.

    :::image type="complex" source="../media/play-ready-permission.png" alt-text="Permission for PlayReady" lightbox="../media/play-ready-permission.png":::
        Permission for PlayReady  
    :::image-end:::  


<!-- ====================================================================== -->
<!-- links -->  
[ConceptsVersioning]: ./versioning.md "Understanding browser versions and WebView2 | Microsoft Docs"  
[HowToWebdriver]: ../how-to/webdriver.md "Automating and testing WebView2 with Microsoft Edge Driver | Microsoft Docs"  
[Webview2ConceptsDevguideManageVersionsRuntime]: developer-guide.md#manage-new-versions-of-the-runtime "Manage new versions of the Runtime | Microsoft Docs"
<!-- external links -->
[ReferenceWin32Webview2IdlCreatecorewebview2environmentwithoptions]: /microsoft-edge/webview2/reference/win32/webview2-idl#createcorewebview2environmentwithoptions "CreateCoreWebView2EnvironmentWithOptions - Globals | Microsoft Docs"  
[ReferenceWin32Webview2IdlGetavailablecorewebview2browserversionstring]: /microsoft-edge/webview2/reference/win32/webview2-idl#getavailablecorewebview2browserversionstring "GetAvailableCoreWebView2BrowserVersionString - Globals | Microsoft Docs"  

[DeployEdgeMicrosoftEdgeChannels]: /deployedge/microsoft-edge-channels "Overview of the Microsoft Edge channels | Microsoft Docs"  

[ReferenceDotnetMicrosoftWebWebview2CoreCorewebview2environmentCreateasync]: /dotnet/api/microsoft.web.webview2.core.corewebview2environment.createasync "CreateAsync - Microsoft.Web.WebView2.Core.CoreWebView2Environment class | Microsoft Docs"  
[ReferenceWpfMicrosoftWebWebview2WpfWebview2Ensurecorewebview2async]: /dotnet/api/microsoft.web.webview2.wpf.webview2.ensurecorewebview2async "EnsureCoreWebView2Async -Microsoft.Web.WebView2.Wpf.WebView2 class | Microsoft Docs"  
[ReferenceWinformsMicrosoftWebWebview2WinformsWebview2Ensurecorewebview2async]: /dotnet/api/microsoft.web.webview2.winforms.webview2.ensurecorewebview2async "EnsureCoreWebView2Async - Microsoft.Web.WebView2.WinForms.WebView2 class | Microsoft Docs"  
[ReferenceWpfMicrosoftWebWebview2WpfCorewebview2creationpropertiesCorewebview2creationproperties]: /dotnet/api/microsoft.web.webview2.wpf.corewebview2creationproperties "CoreWebView2CreationProperties - Microsoft.Web.WebView2.Wpf.CoreWebView2CreationProperties class | Microsoft Docs"  
[ReferenceWinFormsMicrosoftWebWebview2WinForms]: /dotnet/api/microsoft.web.webview2.winforms "Microsoft.Web.WebView2.WinForms class | Microsoft Docs"  
[ReferenceWpfMicrosoftWebWebview2WpfWebview2Creationproperties]: /dotnet/api/microsoft.web.webview2.wpf.webview2.creationproperties "CreationProperties - Microsoft.Web.WebView2.Wpf.WebView2 class | Microsoft Docs"  
[ReferenceWinFormsMicrosoftWebWebview2WinFormsWebview2]: /dotnet/api/microsoft.web.webview2.winforms.webview2 "Microsoft.Web.WebView2.WinForms.WebView2 class | Microsoft Docs"  

[Webview2Installer]: https://developer.microsoft.com/microsoft-edge/webview2#download-section "Download the WebView2 Runtime | Microsoft Developer"  

[MicrosoftEdgeInsiderDownload]: https://www.microsoftedgeinsider.com/download "Download Microsoft Edge Insider Channels"  

[GithubMicrosoftedgeWebviewfeedback]: https://github.com/MicrosoftEdge/WebViewFeedback "WebView Feedback | GitHub"  

[GitHubMicrosoftEdgeWebView2SamplesWebview2Deployment]: https://github.com/MicrosoftEdge/WebView2Samples#webview2-deployment "WebView2 Deployment - MicrosoftEdge/WebView2Samples | GitHub"  

[MicrosoftPlayReady]: https://www.microsoft.com/playready "Microsoft PlayReady"  
