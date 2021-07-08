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

<!-- todo: s/r repo: 
change: Distributing a WebView2 app
to:
Distribute a WebView2 app and the WebView2 Runtime
 -->

<!-- don't link to versioning article, distraction  -->

A WebView2 app uses the WebView2 Runtime on client machines.  When you distribute your WebView2 app, you need to take into account how the WebView2 Runtime is distributed to client machines and updated on client machines.  There are two different ways of distributing the WebView2 Runtime: the _Evergreen_ distribution mode and the _Fixed Version_ distribution mode.

<!-- incoming content: -->

## Choosing between Evergreen and Fixed Version distribution modes

The Evergreen distribution mode is recommended for most apps.

### Evergreen

In the _Evergreen_ distribution mode, the WebView2 Runtime is automatically updated on client machines.  You can then distribute updates of your WebView2 app that use the latest WebView2 APIs, from the latest WebView2 SDK.

Pros: 
*  The underlying web platform (WebView2 Runtime) updates automatically without additional effort from you.
*  Less disk space is required for the WebView2 Runtime on client systems, because the WebView2 runtime is shared by all WebView2 apps that are on the client.

Cons: 
*  Your WebView2 app cannot specify that a particular version of the WebView2 Runtime is required.
*  Your app needs to test whether new WebView2 APIs are present, such as by using `QueryInterface` or `try/catch`.  This is because there are a couple of cases where the WebView2 Runtime isn't updated on some clients.

### Fixed Version

In the _Fixed Version_ distribution mode, you package a particular version of the WebView2 Runtime together with your WebView2 app in your app package.  The WebView2 Runtime that you package with your app is used only by your WebView2 app, not by any other apps on the client's machine.

Pros: 
*  You have more control over WebView2 Runtime versioning.  You know which WebView2 APIs are available to your app because you control which version of the WebView2 Runtime is available to your app.  Your app doesn't need to test whether the latest APIs are present.

Cons: 
*  You need to manage the WebView2 Runtime yourself.  The WebView2 Runtime isn't automatically updated on clients, so to use the latest WebView2 APIs, you must periodically update your app together with the updated WebView2 Runtime.
*  More disk space is required on the client, if there are multiple WebView2 apps installed.
*  The Fixed Version WebView2 Runtime can't be installed by using an installer.
<!-- / incoming content -->


<!-- incoming content, where to place this section? -->
## Additional details about the Evergreen distribution mode

<!-- the below paragraphs are from github issue 341, and are about Evergreen -->

<!-- paragraph 1 of post: -->
For the Evergreen distribution model of the WebView2 runtime, the general assumption is that clients have the latest Runtime, and developers can't require a particular version of the WebView2 Runtime for all apps on the client.
By the time a WebView2 SDK package is released, a compatible version of the WebView2 Runtime has already been distributed to clients, so it's ok for your WebView2 app to use the APIs that are in the latest version of the WebView2 SDK.
For example, when Microsoft publishes the WebView2 SDK version 1.0.800.0, Microsoft Edge and WebView2 Runtime version 88.0.800.0 has been distributed to clients already, and therefore all of the APIs that are available in that version of the SDK are supported by the installed Runtime.

With Evergreen, updated versions of the WebView2 Runtime are deployed to client machines automatically.  Your WebView2 app receives a `NewBrowserVersionAvailable` event, which signals that a new version of the WebView2 Runtime is available on the client's disk.  Your WebView2 app needs to listen for this event and then automatically restart when it receives this event.
<!--detail; move down:-->The WebView2 Runtime can't be hot-swapped to update it.  To make the latest WebView2 Runtime become available to your app, re-create all of your WebView2 environment, or restart your app.
(This event isn't relevant for Fixed Version distribution mode.)

<!-- paragraph 2 of post: -->
The WebView2 Runtime isn't always updated when using the Evergreen distribution mode.
An Enterprise admin can turn off updates of the WebView2 Runtime.  Also, some users are offline, so the client doesn't receive the updated WebView2 Runtime.
The update policies for Microsoft Edge and the WebView2 Runtime are separate, so if the user's admin disables updating Microsoft Edge (which is somewhat common), that doesn't impact which WebView2 APIs are available on the client machine.  Even though the admin disabled automatic updates of Microsoft Edge, automatic updating of the WebView2 Runtime can still occur.

If you use the Evergreen mode and you want WebView2 updates to stop, you must specifically set a setting.
Usually, an Enterprise shouldn't prevent automatically updating Microsoft Edge.  However, an Enterprise has control of updating their devices, so policies are available to prevent updating WebView2 Runtime and to prevent updating Microsoft Edge.
When your WebView2 app uses the latest WebView2 APIs in a recent SDK, you should use `QueryInterface` or `try-catch` to make sure the API is present on the client's machine.
The WebView2 Runtime on some clients might be outdated, because the client's Enterprise set a policy to prevent updating Edge or the WebView2 runtime.

<!-- from paragraph 3 of post: -->
The WebView2 SDK has been forward-compatible ever since version 1.  If your WebView2 app uses the current version of the SDK, your app continues to work even after the client's WebView2 Runtime is updated.  However, any experimental APIs that are in a version of the WebView2 SDK are not guaranteed to be forward-compatible.

A Release version of the WebView2 SDK, and the _stable_ APIs that are in that SDK version, are forward-compatible.
But when a pre-release version of the WebView2 SDK is first made available, that SDK only works with Microsoft Edge Canary.
Any experimental APIs in that pre-release SDK are not guaranteed to be forward-compatible.
A pre-release version of the WebView2 SDK is meant for developers to try out new APIs early and provide feedback before we promote the new APIs to become stable, forward-compatible APIs.

<!-- from paragraph 4 of post: -->
### Test your app against non-stable Edge channels

You must maintain compatibility between which version of the WebView2 SDK your app uses and which version of the WebView2 Runtime is present on a client's machine.  To maintain compatibility between the WebView2 SDK and Runtime, you should test your WebView2 app against non-stable Edge channels, so that you know if a breaking change is coming that will require updating your app.

Breaking changes are rare for the WebView2 API, but testing your app against non-stable Edge channels is a good practice.  Such testing is similar to a web developer testing a website against pre-release versions of browsers or libraries.

<!-- SORT -->
Refer to [Manage new versions of the runtime][Webview2ConceptsDevguideManageVersionsRuntime].

<!-- move/group with other paragraphs that make this point, add "or not updated bc offline" -->
It's possible that the client's WebView2 Runtime hasn't been updated to the latest version, even though your app is using the Evergreen distribution mode.  This can happen if the client's admin has set policies to prevent automatically updating the WebView2 Runtime.  <!-- Refer to [Understand WebView2 SDK versions](versioning.md).  don't add a distracting link to that article at this time.-->

<!-- / incoming content -->


## Understanding the WebView2 runtime

This section centers on the Evergreen distribution mode for the WebView2 Runtime.  If you instead use the Fixed Version distribution mode for the WebView2 Runtime, you can ignore these aspects; they just affect the WebView2 Runtime part of the app.  To use the Fixed Version approach, get the WebView2 Runtime from the NuGet SDK versions website, <!-- or, from the webpage [Download the WebView2 Runtime][Webview2Installer]? maybe move-away that detail of where you download it, since there appears to be two possible sites --> and then package the Runtime with your WebView2 app.

When distributing your WebView2 app, make sure that the backing web platform, the [WebView2 Runtime][Webview2Installer], is present before the app starts.  This requirement applies to both the Evergreen and Fixed Version distribution modes.

<!-- orig start of this section: -->
The WebView2 Runtime is a redistributable runtime and serves as the underlying (or _backing_) web platform for WebView2 apps.  The concept is similar to Visual C++ or the .NET Runtime for C++/.NET apps.  The Runtime contains modified Microsoft Edge \(Chromium\) binaries that are fine-tuned and tested for apps.  After the WebView2 Runtime is installed, it doesn't appear as a user-visible browser app.  For example, a user does not have a browser desktop shortcut or an entry in the **Start** menu.

During development and testing, you can use either option as the backing web platform:
*   The WebView2 Runtime.
*   As a convenience during development, you can use any Insider \(non-stable\) Microsoft Edge \(Chromium\) browser channel.

In production environments, you must ensure that the WebView2 Runtime is present on the client before your WebView2 app starts.

### Stable channel isn't supported

The Microsoft Edge Stable channel is unavailable for WebView2 usage, to prevent WebView2 apps from taking a dependency on the browser in production.

Do not take a dependency on the browser, because:

*   Microsoft Edge \(Chromium\) is not guaranteed to be present on all user devices.  For example, devices that are disconnected from Windows Update or are not managed by Microsoft directly \(a large portion of the Enterprise and EDU market\) might not have the browser.  Allowing you to distribute the WebView2 Runtime avoids taking a dependency on the browser as a prerequisite for apps.<!-- applies only to the Fixed Version distribution mode? -->
*   Browsers and apps have different use cases, so taking a dependency on a browser might have unintended side-effects on WebView2 apps.  For example, IT admins may version-control the browser for internal website compatibility.  The WebView2 Runtime allows WebView2 apps to stay evergreen while browser updates are being actively managed.  
*   As opposed to the browser, the WebView2 Runtime is developed and tested for app scenarios, and in some cases might include bug fixes that aren't yet available in the browser.  
    
We plan to ship the Evergreen WebView2 Runtime with future releases of Windows.  Until the Runtime becomes more universally available, deploy the Runtime with your production app.<!-- outdated?  applies to the Fixed Version distribution mode? -->


<!-- ====================================================================== -->
## Evergreen distribution mode

> [!NOTE]
> The Evergreen distribution mode is recommended for most developers.  

The Evergreen distribution mode ensures that your WebView2 app is taking advantage of the latest WebView2 features and security updates.  The Evergreen distribution mode has the following characteristics:

*   The WebView2 Runtime updates automatically without additional effort from you.
*   All WebView2 apps that use the Evergreen distribution mode use a shared copy of the Evergreen WebView2 Runtime, which saves disk space.  


### Deploying the Evergreen WebView2 Runtime  

Only one installation of the Evergreen WebView2 Runtime is needed for all Evergreen apps on the device.  There are a number of tools available on the [WebView2 Runtime download page][Webview2Installer].  The following tools help you deploy the Evergreen Runtime.  

*   _WebView2 Runtime Bootstrapper_ is a tiny \(approximately 2 MB\) installer.  WebView2 Runtime Bootstrapper downloads and installs the Evergreen Runtime from Microsoft servers that matches the user's device architecture.  Use a link to programmatically download the bootstrapper.
*   _WebView2 Runtime Standalone Installer_ is a full installer that installs the Evergreen WebView2 Runtime in offline environments.
    
Currently, both the bootstrapper and standalone installer only support per-machine installs, which requires elevation of permissions.  If an installer is run without elevation, the user is prompted to elevate permissions.  

Use the following workflows to ensure that the Runtime is already installed before your app launches.  You can adjust your workflow depending on your scenario.  Sample code is available in the [Samples repo][GitHubMicrosoftedgeWebView2samplesWebview2Deployment].  

#### Online-only deployment  

If you have an online-only deployment scenario where users are assumed to have internet access, complete the following steps.  

1.  During your app setup, run a test to make sure that the WebView2 Runtime is already installed.  To verify that the Runtime is installed, use either of the following approaches:
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
1.  If the Runtime is not installed, use the link to programmatically download the bootstrapper.  
1.  Invoke the WebView2 Runtime Bootstrapper from an elevated process or command prompt with `MicrosoftEdgeWebview2Setup.exe /silent /install` for silent install.  
    
The above workflow has several benefits:
*   The Runtime is installed only when needed, or when you are not required to package installers.  
*   The bootstrapper automatically detects the device architecture and installs the matching Runtime.  
*   The Runtime is installed silently.  
    
You can also package the bootstrapper with your app, instead of programmatically downloading the bootstrapper on-demand.

#### Offline deployment  

If you have an offline deployment scenario, where app deployment has to work entirely offline, complete the following steps.  

1.  Download the [standalone installer][Webview2Installer].  
1.  Include the installer in your app installer or updater.  
1.  During your app setup, ensure that the WebView2 Runtime is already installed.  To verify that the WebView2 Runtime is already installed, complete one of the following actions.
    *   Inspect the `pv (REG_SZ)` regkey to make sure that it exists and is not `null` or empty.  Find `pv (REG_SZ)` at the following location.  
        
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

Non-stable Microsoft Edge channels \(Beta, Dev, and Canary\) provide a sneak peek into what is coming next in the WebView2 Runtime.  Just like developing websites for Microsoft Edge, you should test your WebView2 app regularly.  Test your WebView2 app against one of the non-stable channels, and update your app or [report issues][GithubMicrosoftedgeWebviewfeedback] if issues arise.  Typically, Beta and Dev are the recommended channels.  To help you decide which channel is right, navigate to [Overview of the Microsoft Edge channels][DeployEdgeMicrosoftEdgeChannels].  You can download the [non-stable Microsoft Edge channel][DownloadNonstableEdge] on your test environment, and use `regkey` or environment variables to indicate the channel preference for your testing app.  For more information, navigate to [CreateCoreWebView2EnvironmentWithOptions][ReferenceWin32Webview2IdlCreatecorewebview2environmentwithoptions].  You can also use [WebDriver][HowToWebdriver] to automate WebView2 testing.


<!-- ====================================================================== -->
## Fixed-version distribution mode

For constrained environments with strict compatibility requirements, consider using the Fixed Version distribution mode.  In the Fixed Version distribution mode, you package a specific version of the WebView2 Runtime with your WebView2 app.  You can specify the timing of Runtime updates for your app.  The Fixed Version distribution mode does not receive any automatic updates, so you must periodically update your app together with the WebView2 Runtime.

The Fixed Version approach doesn't use the registry key.<!-- which regkey, for what? -->

> [!NOTE] 
> The Fixed Version distribution mode was previously called _bring-your-own_.

To use the Fixed Version distribution mode:

1.  Download a specific version of the WebView2 Runtime from [Download the WebView2 Runtime][Webview2Installer].
1.  Decompress the WebView2 Runtime package using the command-line command `expand {path to the package} -F:* {path to the destination folder}` or by using a decompression tool such as WinRAR.  Avoid decompressing through the File Explorer, because that approach might not generate the correct folder structure.
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
[Webview2ConceptsDevguideManageVersionsRuntime]: developer-guide.md#manage-new-versions-of-the-runtime "Manage new versions of the runtime | Microsoft Docs"
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
