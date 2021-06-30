---
description: Distribution options when releasing an app using Microsoft Edge WebView2
title: Distributing a WebView2 app
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/06/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, wpf apps, wpf, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---
# Distributing a WebView2 app

There are two different ways of distributing and installing your WebView2 app and the WebView2 Runtime: the Evergreen distribution mode and the Fixed Version distribution mode.

## Evergreen versus fixed-version distribution modes

*  In the _Evergreen_ distribution mode, you distribute and install your WebView2 app __.  You distribute and install the WebView2 Runtime __.

*  In the _Fixed Version_ distribution mode, you distribute and install your WebView2 app __.  You distribute and install the WebView2 Runtime __.

<!--
|Column1  |Column2  |Column3  |
|---------|---------|---------|
|Row1     |         |         |
|Row2     |         |         |
|Row3     |         |         |
|Row4     |         |         |
-->

*  **Evergreen** - The benefit of the Evergreen WebView2 Runtime is that it can be shared by all WebView2 apps on the system, thus saving disk space for the user.
*  **Fixed Version** - The benefit of Fixed Version Runtime is that it gives you more control over versioning, at the cost of increased disk space and needing to manage the runtime yourself.


*  **Fixed Version** - If you wanted to use Fixed Version, you would include it in your app package and deploy it yourself, and wouldn't use the registry key. There are no plans to make Fixed Version runtime be installable using an installer.

*  **Evergreen** - For Evergreen WebView2, the assumption is that clients have the latest Runtime, and developers don't have the control to say "I want this particular WebView2 version for the system". 

<!-- check paragraphing (sentence grouping, for Evergreen vs. Fixed Version) in orig Issue thread at github -->

By the time a Release SDK package is released, a compatible WebView2 Runtime version has already been rolled out to clients, so it's ok to use in most places. 
Updated versions of the WebView2 Runtime are deployed automatically.  Your app will also receive a `newVersionAvailable` event, signaling that a new version of WebView2 Runtime is available on the disk.

Once you re-create all of your WebView2 environment (or restart your app), you'll be on the latest WebView2 Runtime, since we cannot hot-swap runtime.  The exception to this general rule is that Enterprise can still turn off WebView2 updates, or some users are offline so we cannot reach them with updates.

The update policies for Microsoft Edge and the WebView2 Runtime are separate, so if admins disable Edge update (which is somewhat common), that doesn't impact WebView2.

You will have to specifically set something for WebView2 updates to stop. 

There are usually not a lot of good reasons for Enterprise to do this, <!--ie, to disable Edge updates?--> but Enterprise always have the final say on their devices, so the policies have to be there.

This means you will run into some cases where you have the latest SDK with some new APIs, but some Runtime is outdated because Enterprise or offline, which is why it's a best practice to QI <!--QueryInterface--> or try-catch on newer WebView2 APIs.

*  **Fixed Version** - With Fixed Version distribution mode, the binaries are 100% controlled by developers and are used only by your app.

<!-- not copied into the work item:
Our SDK is also forward-compatible since v1, so if you're using the current SDK, and never update it while the runtime keeps updating, it keeps working. What I've said applies to Release SDK and the stable APIs in them. Pre-release SDK only works with Edge Canary when it's first out, and the experimental API on there is not forward-compatible. It's meant for developer to try out things early and provide feedback before we promote an API to forward-compatible stable API.

In terms of maintaining compatibility, the best practice is to have some automated test against non-stable Edge channels, so that you know if some breaking change is heading your way. It's not supposed to happen often if at all since we (and Google, Mozilla, Apple, and other players in the space) don't want to break the web, but web is also constantly evolving. This is basically the same thing that web developers do for their websites. 
-->
<!-- / incoming content -->


## Understanding the WebView2 runtime

When distributing your WebView2 app, make sure that the backing web platform, the [WebView2 Runtime][Webview2Installer], is present before the app starts.  This requirement applies to both the Evergreen and Fixed Version distribution modes.<!-- is this true of fixed-version distr? -->

The WebView2 Runtime is a redistributable runtime and serves as the underlying (or _backing_) web platform for WebView2 apps.  The concept is similar to Visual C++ or the .NET Runtime for C++/.NET apps.  The Runtime contains modified Microsoft Edge \(Chromium\) binaries that are fine-tuned and tested for apps.  After the WebView2 Runtime is installed, it doesn't appear as a user-visible browser app.  For example, a user does not have a browser desktop shortcut or an entry in the **Start** menu.

During development and testing, you can use either option as the backing web platform:
*   The WebView2 Runtime  
*   Any Insider \(non-stable\) Microsoft Edge \(Chromium\) browser channel  
    
In production environments, you must ensure that the WebView2 Runtime is present on user devices before your WebView2 app starts.  The Microsoft Edge Stable channel is unavailable for WebView2 usage.<!--todo: confirm, seems backwards-->  The decision prevents WebView2 apps from taking a dependency on the browser in production.

Do not take a dependency on the browser, because:

*   Microsoft Edge \(Chromium\) is not guaranteed to be present on all user devices.  For example, devices that are disconnected from Windows Update or are not managed by Microsoft directly \(a large portion of the Enterprise and EDU market\) might not have the browser.  Allowing you to distribute the WebView2 Runtime avoids taking a dependency on the browser as a pre-requisite for apps.  
*   Browsers and apps have different use cases, and so taking a dependency on a browser might have unintended side-effects on WebView2 apps.  For example, IT admins may version-control the browser for internal website compatibility.  The WebView2 Runtime allows WebView2 apps to stay evergreen while browser updates are being actively managed.  
*   As opposed to the browser, the WebView2 Runtime is developed and tested for app scenarios, and in some cases might include bug fixes that aren't yet available in the browser.  
    
We plan to ship the Evergreen WebView2 Runtime with future releases of Windows.  Until the Runtime becomes more universally available, deploy the Runtime with your production app.<!-- is that correct, or outdated? a contradiction?  Does that statement apply to the Fixed Version distribution mode? -->


<!-- ====================================================================== -->
## Evergreen distribution mode

> [!NOTE]
> The Evergreen distribution mode is recommended for most developers.  

The Evergreen distribution mode ensures that your WebView2 app is taking advantage of the latest WebView2 features and security updates.  The Evergreen distribution mode has the following characteristics:

*   The WebView2 Runtime updates automatically without additional effort from you.
*   All WebView2 apps that use the Evergreen distribution mode use a shared copy of the Evergreen WebView2 Runtime, which saves disk space.  


### Deploying the Evergreen WebView2 Runtime  

Only one installation of the Evergreen WebView2 Runtime is needed for all Evergreen apps on the device.  There are a number of tools available on the [WebView2 Runtime download page][Webview2Installer].  The following tools help you deploy the Evergreen Runtime.  

*   WebView2 Runtime Bootstrapper is a tiny \(approximately 2 MB\) installer.  WebView2 Runtime Bootstrapper downloads and installs the Evergreen Runtime from Microsoft servers that matches the user's device architecture.  
*   Use a link to programmatically download the bootstrapper.  
*   WebView2 Runtime Standalone Installer is a full installer that installs the Evergreen WebView2 Runtime in offline environments.  
    
Currently, both the bootstrapper and standalone installer only support per-machine installs, which requires elevation.  If an installer is run without elevation, the user is prompted to elevate permissions.  

Use following workflows to ensure the Runtime is already installed before your app launches.  You can adjust your workflow depending on your scenario.  Sample code is available in the [Samples repo][GitHubMicrosoftedgeWebView2samplesWebview2Deployment].  

#### Online-only deployment  

If you have an online-only deployment scenario where users are assumed to have internet access, complete the following steps.  

1.  During your app setup, run a test to make sure that the Runtime is already installed.  To verify that the Runtime is installed, use either of the following approaches:
    *   Inspect whether the `pv (REG_SZ)` regkey exists and is not `null` or empty.  Find  `pv (REG_SZ)` at the following location.  
        
        On 64-bit Windows:
        
        ```text
        HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\EdgeUpdate\Clients\{F3017226-FE2A-4295-8BDF-00C3A9A7E4C5}
        ```  
        
        On 32-bit Windows:
        
        ```text
        HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\EdgeUpdate\Clients\{F3017226-FE2A-4295-8BDF-00C3A9A7E4C5}
        ```  
        
    *   Run [GetAvailableCoreWebView2BrowserVersionString][ReferenceWin32Webview2IdlGetavailablecorewebview2browserversionstring] and ensure the `versionInfo` is `NULL`.  
1.  If the Runtime is not installed, use the link to programmatically download the bootstrapper.  
1.  Invoke the bootstrapper from an elevated process or command prompt with `MicrosoftEdgeWebview2Setup.exe /silent /install` for silent install.  
    
The above workflow has several benefits:
*   The Runtime is installed only when needed, or when you are not required to package installers.  
*   The bootstrapper automatically detects device architecture and installs the matching Runtime.  
*   The Runtime is installed silently.  
    
You can also package the bootstrapper with your app, instead of programmatically downloading the bootstrapper on-demand.

#### Offline deployment  

If you have an offline deployment scenario, where app deployment has to work entirely offline, complete the following steps.  

1.  Download the [standalone installer][Webview2Installer].  
1.  Include the installer in your app installer or updater.  
1.  During your app setup, ensure the Runtime is already installed.  To verify, complete one of the following actions.  
    *   Inspect if the `pv (REG_SZ)` regkey exists and is not `null` or empty.  Find `pv (REG_SZ)` at the following location.  
        
        On 64-bit Windows:
        
        ```text
        HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\EdgeUpdate\Clients\{F3017226-FE2A-4295-8BDF-00C3A9A7E4C5}
        ```  
        
        On 32-bit Windows:
        
        ```text
        HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\EdgeUpdate\Clients\{F3017226-FE2A-4295-8BDF-00C3A9A7E4C5}
        ```  
        
    *   Run [GetAvailableCoreWebView2BrowserVersionString][ReferenceWin32Webview2IdlGetavailablecorewebview2browserversionstring] and ensure the `versionInfo` is `NULL`.  
1.  If the Runtime is not installed, run the standalone installer.  If you want to run a silent installation, either run the installer from an elevated process, or copy and run the following command.
    
    ```shell
    MicrosoftEdgeWebView2RuntimeInstaller{X64/X86/ARM64}.exe /silent /install
    ```  
    
### Stay compatible in Evergreen mode  

The Web is constantly evolving.  The Evergreen WebView2 Runtime is kept up to date to provide you with the latest features and security fixes.  To ensure your app stays compatible with the web, you should set up testing infrastructure.  

Non-stable Microsoft Edge channels \(Beta/Dev/Canary\) provide a sneak peek into what is coming next in the WebView2 Runtime.  Just like developing websites for Microsoft Edge, you should test your WebView2 app regularly.  Test your WebView2 app against one of the non-stable channels, and update your app or [report issues][GithubMicrosoftedgeWebviewfeedback] if issues arise. Typically Beta and Dev are the recommended channels.  To help you decide which channel is right, navigate to [Overview of the Microsoft Edge channels][DeployEdgeMicrosoftEdgeChannels].  You can download the [non-stable Microsoft Edge channel][DownloadNonstableEdge] on your test environment, and use `regkey` or environment variables to indicate the channel preference for your testing app.  For more information, navigate to [CreateCoreWebView2EnvironmentWithOptions][ReferenceWin32Webview2IdlCreatecorewebview2environmentwithoptions].  You can also use [WebDriver][HowToWebdriver] to automate WebView2 testing.


<!-- ====================================================================== -->
## Fixed-version distribution mode

For constrained environments with strict compatibility requirements, consider using the Fixed Version distribution mode.  In the Fixed Version distribution mode, you package a specific version of the WebView2 Runtime.  You can specify the timing of Runtime updates for your app.  The Fixed Version distribution mode does not receive any automatic updates, so you must periodically update your app and the Runtime.

> [!NOTE] 
> The Fixed Version distribution mode was previously called _bring-your-own_.

To use the Fixed Version mode:

1.  [Download][Webview2Installer] the Fixed Version package. 
1.  Decompress the package using command-line command `expand {path to the package} -F:* {path to the destination folder}` or with tools such as WinRAR.  Avoid decompressing through the File Explorer, because that approach might not generate the correct folder structure.
1.  Include the decompressed Fixed Version binaries in your project.  
1.  Indicate the path to the Fixed Version binaries when creating the WebView2 environment.  
    *   For Win32 C/C++, you can create the environment using the [CreateCoreWebView2EnvironmentWithOptions][ReferenceWin32Webview2IdlCreatecorewebview2environmentwithoptions] function.  Use the `browserExecutableFolder` parameter to indicate the path to the folder that contains `msedgewebview2.exe`.
    *   For .NET, you can use either of the following approaches to specify the environment:
        
        > [!NOTE]
        > You must specify the environment before the WebView2 `Source` property takes effect.  
        
        *   Set the `CreationProperties` \([WPF][ReferenceWpfMicrosoftWebWebview2WpfWebview2Creationproperties]/[WinForms][ReferenceWinFormsMicrosoftWebWebview2WinFormsWebview2]\) property on the WebView2 element.  Use the `BrowserExecutableFolder` member in the `CoreWebView2CreationProperties` \([WPF][ReferenceWpfMicrosoftWebWebview2WpfCorewebview2creationpropertiesCorewebview2creationproperties]/[WinForms][ReferenceWinFormsMicrosoftWebWebview2WinForms]\) class to indicate the path to the Fixed Version binaries.  
        *   Use `EnsureCoreWebView2Async` \([WPF][ReferenceWpfMicrosoftWebWebview2WpfWebview2Ensurecorewebview2async]/[WinForms][ReferenceWinformsMicrosoftWebWebview2WinformsWebview2Ensurecorewebview2async]\) to specify the environment.  Use the `browserExecutableFolder` parameter in [CoreWebView2Environment.CreateAsync][ReferenceDotnetMicrosoftWebWebview2CoreCorewebview2environmentCreateasync] to indicate the path to the Fixed Version binaries.  
1.  Package and ship the Fixed Version binaries with your app.  Update the binaries as appropriate.  
    
### Known issues for Fixed Version  

Compared to the Evergreen Runtime, Fixed Version does not have an installation process, which causes [Microsoft PlayReady][MicrosoftPlayReady] to not work without modification.  You can mitigate the problem as follows.

1.  Locate the path where you deploy the Fixed Version package on the user's device, such as the following location.
    
    ```text
    D:\myapp\Microsoft.WebView2.FixedVersionRuntime.87.0.664.8.x64
    ```  
    
1.  Run the following commands on the user's device.

    ```shell
    icacls {Fixed Version path} /grant *S-1-15-2-2:(OI)(CI)(RX)
    icacls {Fixed Version path} /grant *S-1-15-2-1:(OI)(CI)(RX)
    ```  

1.  PlayReady should be working now on the user's device.  In the **Security** tab of the **Fixed Version** folder, it should include permissions for `ALL APPLICATION PACKAGES` and `ALL RESTRICTED APPLICATION PACKAGES`.  

    :::image type="complex" source="../media/play-ready-permission.png" alt-text="Permission for PlayReady" lightbox="../media/play-ready-permission.png":::
        Permission for PlayReady  
    :::image-end:::  

<!-- links -->  
[ConceptsVersioning]: ./versioning.md "Understanding browser versions and WebView2 | Microsoft Docs"  
[HowToWebdriver]: ../how-to/webdriver.md "Automating and testing WebView2 with Microsoft Edge Driver | Microsoft Docs"  
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

[Webview2Installer]: https://developer.microsoft.com/microsoft-edge/webview2 "WebView2 Installer | Microsoft Developer"  

[DownloadNonstableEdge]: https://www.microsoftedgeinsider.com/download "Download Microsoft Edge Insider Channels"  

[GithubMicrosoftedgeWebviewfeedback]: https://github.com/MicrosoftEdge/WebViewFeedback "WebView Feedback | GitHub"  

[GitHubMicrosoftEdgeWebView2SamplesWebview2Deployment]: https://github.com/MicrosoftEdge/WebView2Samples#webview2-deployment "WebView2 Deployment - MicrosoftEdge/WebView2Samples | GitHub"  

[MicrosoftPlayReady]: https://www.microsoft.com/playready "Microsoft PlayReady"  
