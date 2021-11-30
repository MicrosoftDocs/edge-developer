---
description: Distribution options when releasing an app using Microsoft Edge WebView2
title: Distribute a WebView2 app and the WebView2 Runtime
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 08/03/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, wpf apps, wpf, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---
# Distribute a WebView2 app and the WebView2 Runtime

A WebView2 app depends on the WebView2 Runtime on client machines.  When you distribute your WebView2 app, you need to take into account how the WebView2 Runtime is distributed to and updated on client machines.


<!-- ====================================================================== -->
## Introduction to the Runtime, Evergreen distribution, and Fixed Version distribution

### The WebView2 Runtime

The WebView2 Runtime is a redistributable runtime and serves as the underlying (or _backing_) web platform for WebView2 apps.  The concept is similar to Visual C++ or the .NET Runtime for C++/.NET apps.  The WebView2 Runtime contains modified Microsoft Edge binaries that are fine-tuned and tested for WebView2 apps.  After the WebView2 Runtime is installed, it doesn't appear as a user-visible browser app.  For example, a user doesn't have a browser desktop shortcut or an entry in the **Start** menu.

There are two different ways of distributing and updating the WebView2 Runtime to client machines: the Evergreen distribution mode, and the Fixed Version distribution mode.

### The Evergreen Runtime distribution mode

In the _Evergreen_ distribution mode, the WebView2 Runtime isn't packaged with your app, but is initially installed onto clients using an online bootstrapper or an offline installer.  Afterwards, the WebView2 Runtime is automatically updated on client machines.  You can then distribute updates of your WebView2 app that use the latest WebView2 APIs, from the latest WebView2 SDK.  The Evergreen distribution mode is recommended for most developers.

Pros:
*  The underlying web platform (WebView2 Runtime) updates automatically without more effort from you.
*  Less disk space is required for the WebView2 Runtime on client systems, because the WebView2 Runtime is shared by all WebView2 apps that are on the client.
*  On eligible systems, binaries for Microsoft Edge and the Evergreen WebView2 Runtime are hard-linked together when they are on the same version.  This linking provides benefits for disk footprint, memory, and performance.

Cons:
*  Your WebView2 app cannot specify that a particular version of the WebView2 Runtime is required.

### The Fixed Version runtime distribution mode

In the _Fixed Version_ distribution mode, you download a specific version of the WebView2 Runtime and package it together with your WebView2 app in your app package.  The WebView2 Runtime that you package with your app is used only by your WebView2 app, not by any other apps on the client's machine.

Pros:
*  You have more control over versioning of the WebView2 Runtime.  You know which WebView2 APIs are available to your app, because you control which version of the WebView2 Runtime is available to your app.  Your app doesn't need to test whether the latest APIs are present.

Cons:
*  You need to manage the WebView2 Runtime yourself.  The WebView2 Runtime isn't automatically updated on clients, so to use the latest WebView2 APIs, you must periodically update your app together with the updated WebView2 Runtime.
*  More disk space is required on the client, if there are multiple WebView2 apps installed.
*  The Fixed Version runtime can't be installed by using an installer.


<!-- ====================================================================== -->
## Understanding the options at the Runtime download page

The [Download the WebView2 Runtime](https://developer.microsoft.com/microsoft-edge/webview2#download-section) section of the **Microsoft Edge WebView2** page provides several options for distributing the WebView2 Runtime onto client machines.  Understanding the options at this page provides a good introduction, to help decide which approach you want to use.

:::image type="complex" source="../media/runtime-distrib-options.png" alt-text="Options for distributing and updating the WebView2 Runtime" lightbox="../media/runtime-distrib-options.png":::
    Options for distributing and updating the WebView2 Runtime
:::image-end:::

*   The **Evergreen Bootstrapper** section of the page provides a small Evergreen Runtime bootstrapper that runs on the client machine, for online users.  The bootstrapper downloads and installs the appropriate WebView2 Evergreen Runtime onto the client.  You can use the bootstrapper a couple different ways:

    *   Link to the bootstrapper, using a link that you obtain from the **Get the Link** button.  Your app uses this link to programmatically download the bootstrapper onto the client and invoke the bootstrapper.  This approach avoids the need to package the bootstrapper with your app.  This approach has a dependency on Microsoft's Content Delivery Network (CDN), to get the bootstrapper.

    *   Download the bootstrapper (using the **Download** button in the **Bootstrapper** section) and then distribute the bootstrapper with your app.  In this approach, you package the bootstrapper with your app installer/updater or with your app itself, and invoke the bootstrapper that you included with your app.  This approach avoids dependency on Microsoft's CDN, to get the bootstrapper.

*  The **Evergreen Standalone Installer** section of the page provides a large, standalone Evergreen installer, primarily for offline users.  In this approach, you package the standalone installer with your app installer/updater or app itself, and invoke the Evergreen Standalone installer.  This approach avoids dependency on Microsoft's CDN, to get the Runtime.

*  The **Fixed Version** section of the page provides a Fixed Version runtime, which is a specific version of the WebView2 Runtime that you distribute along with your app.

The Evergreen distribution mode is recommended for most apps.


<!-- ====================================================================== -->
## Details about the WebView2 Runtime

When distributing your WebView2 app, make sure that the WebView2 Runtime is present on the client machine.  This requirement applies to both the Evergreen and Fixed Version distribution modes.

If you want to use the Fixed Version distribution mode, you can skip the next couple of sections and navigate to [Details about the Fixed Version runtime distribution mode](#details-about-the-fixed-version-runtime-distribution-mode).

### Runtime or browser support during development or production

During development and testing, a WebView2 app can use either option as the backing web platform:
*   The WebView2 Runtime.  The Runtime generally provides the same web platform capabilities and update cadence as the Stable channel of the Microsoft Edge browser.  Use the WebView2 Runtime in a production environment or to develop and test against the web platform that your users have today.
*   A preview (Insider) Microsoft Edge browser channel.  These Microsoft Edge preview channels are Beta, Dev, and Canary.  Use this approach to test your app for forward-compatibility, so that you know if a breaking change is coming that will require updating your app.  For more information, navigate to [Switch to a preview channel to test upcoming APIs and features](../how-to/set-preview-channel.md).

A production release of a WebView2 app can only use the WebView2 Runtime as the backing web platform, not Microsoft Edge.

#### Microsoft Edge Stable channel isn't supported for WebView2

WebView2 apps aren't permitted to use the Stable channel of Microsoft Edge as the backing web platform.  This restriction prevents a production release of a WebView2 app from taking a dependency on the browser.  A WebView2 app cannot take a dependency on the browser during production, for the following reasons.

*   Microsoft Edge isn't guaranteed to be present on all user devices.  Many devices in enterprises and in education are disconnected from Windows Update or are not managed by Microsoft directly.  Such devices might not have Microsoft Edge installed.  Requiring the production version of WebView2 apps to use the WebView2 Runtime rather than Microsoft Edge avoids making Microsoft Edge a prerequisite for running a WebView2 app.

*   Browsers and apps have different use cases.  If a WebView2 app required the presence of Microsoft Edge on the client, that would potentially have unintended side-effects on the WebView2 app.  For example, an IT admin can prevent the browser from being updated from a specific version, to keep the browser compatible with an internal website.  Requiring the production version of a WebView2 app to use the WebView2 Runtime rather than the browser allows the WebView2 app to stay evergreen even if browser updates are prevented by the clients' admin.

*   As opposed to the browser, the WebView2 Runtime is developed and tested for app scenarios, and in some cases the WebView2 Runtime might include bug fixes that aren't yet available in the browser.

The Evergreen WebView2 Runtime will be included as part of the Windows 11 operating system. Various WebView2 apps have installed the Evergreen Runtime on devices with an operating system prior to Windows 11.  However, some devices might not have the Runtime pre-installed, so it's a good practice to check whether the Runtime is present on the client.

Before your app creates a WebView2, the app should check whether the WebView2 Runtime is present (either by checking a registry key or by calling an API) and install the Runtime if it is missing.  The app can do this check when installing or updating your app (recommended), or at app runtime.  To check whether the Runtime is present, navigate to [Deploying the Evergreen WebView2 Runtime](#deploying-the-evergreen-webview2-runtime) below.


<!-- ====================================================================== -->
## Details about the Evergreen Runtime distribution mode

The Evergreen distribution mode ensures that your WebView2 app is taking advantage of the latest WebView2 features and security updates.  The Evergreen distribution mode has the following characteristics:

*  The WebView2 Runtime updates automatically without more effort from you.
*  All WebView2 apps that use the Evergreen distribution mode use a shared copy of the Evergreen WebView2 Runtime, which saves disk space.
*  On eligible systems, binaries for Microsoft Edge and the Evergreen WebView2 Runtime are hard-linked together when they are on the same version.  This linking provides benefits for disk footprint, memory, and performance.

When you use the Evergreen distribution mode of the WebView2 Runtime, your WebView2 app assumes that clients have the latest Runtime.  Your app cannot require a particular version of the WebView2 Runtime for all apps on the client.  By the time a new WebView2 SDK package is released, a compatible version of the WebView2 Runtime has already been distributed to clients.  Therefore it's ok for your WebView2 app to use the APIs that are in the latest version of the WebView2 SDK.

For more information, navigate to [Understanding browser versions and WebView2](./versioning.md).

### Deploying the Evergreen WebView2 Runtime

Only one installation of the Evergreen WebView2 Runtime is needed for all Evergreen apps on the device.  Several tools are available at [Download the WebView2 Runtime](https://developer.microsoft.com/microsoft-edge/webview2#download-section) to help you deploy the Evergreen Runtime.

*   For online clients: _WebView2 Runtime Bootstrapper_ is a tiny (approximately 2 MB) installer.  The WebView2 Runtime Bootstrapper downloads and installs the Evergreen Runtime from Microsoft servers that matches the user's device architecture.
    *   In the setup part of your WebView2 app, link to the bootstrapper.  Use a link to programmatically download the bootstrapper; select the **Get the Link** button at the above download page.
    *   Or, download the bootstrapper and package it with your WebView2 app.

*   For offline clients: _WebView2 Runtime Standalone Installer_ is a full installer that installs the Evergreen WebView2 Runtime in offline environments.

Currently, both the bootstrapper and standalone installer only support per-machine installs, which requires elevation of permissions.  If an installer is run without elevation, the user is prompted to elevate permissions.

Use the following online deployment workflow or offline deployment workflow to ensure that the Runtime is already installed before your app launches.  You can adjust your workflow depending on your scenario.  Sample code is available in the [Samples repo](https://github.com/MicrosoftEdge/WebView2Samples#webview2-deployment).

#### Online-only deployment

If you have an online-only deployment scenario where users are assumed to have internet access, use the following workflow.

1.  During your app setup, run a test to make sure that the WebView2 Runtime is already installed.  To verify that the Runtime is installed, use either of the following approaches:

    *   Inspect the `pv (REG_SZ)` registry key for the WebView2 Runtime at the following location.  If this regkey doesn't exist, or if exists and is `null` or an empty string, this means that the WebView2 Runtime is not installed on the client.  Use this regkey to detect whether the WebView2 Runtime is installed, and to get the version of the WebView2 Runtime.  Find `pv (REG_SZ)` at the following location.

        On 64-bit Windows:

        ```text
        HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\EdgeUpdate\Clients\{F3017226-FE2A-4295-8BDF-00C3A9A7E4C5}
        ```

        On 32-bit Windows:

        ```text
        HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\EdgeUpdate\Clients\{F3017226-FE2A-4295-8BDF-00C3A9A7E4C5}
        ```

    *   Alternatively, run [GetAvailableCoreWebView2BrowserVersionString](/microsoft-edge/webview2/reference/win32/webview2-idl#getavailablecorewebview2browserversionstring) and evaluate whether the `versionInfo` is `NULL`.  `NULL` indicates that the Runtime isn't installed.

1.  If the Runtime is not installed, in your app setup process, use the link (from the **Get the Link** button on the download page) to programmatically download the WebView2 Runtime Bootstrapper.

1.  Invoke the WebView2 Runtime Bootstrapper from an elevated process or command prompt by issuing the command `MicrosoftEdgeWebview2Setup.exe /silent /install`.

The above workflow has several benefits:
*   The Runtime is installed only when needed.
*   You aren't required to package a Runtime installer with your WebView2 app.
*   The WebView2 Runtime Bootstrapper automatically detects the device's architecture (platform) and then installs the matching WebView2 Runtime.
*   The Runtime is installed silently.

Alternatively, instead of programmatically downloading the bootstrapper on-demand by getting a link, as shown above, you can package the Evergreen Bootstrapper for the WebView2 Runtime with your app.

#### Offline deployment

If you have an offline deployment scenario, where app deployment has to work entirely offline, use the following workflow.

1.  Download the Evergreen Standalone Installer from [Download the WebView2 Runtime](https://developer.microsoft.com/microsoft-edge/webview2#download-section) to your development machine.  The Evergreen Standalone Installer installs the WebView2 Evergreen Runtime on the client.

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

    *   Alternatively, call [GetAvailableCoreWebView2BrowserVersionString](/microsoft-edge/webview2/reference/win32/webview2-idl#getavailablecorewebview2browserversionstring) and check whether the `versionInfo` is `NULL`.  If `versionInfo` is `NULL`, the WebView2 Runtime isn't currently installed on the client.

1.  If the WebView2 Runtime is not installed, run the Evergreen Standalone Installer.  If you want to run a silent installation, either run the installer from an elevated process, or copy and run the following command:

    ```shell
    MicrosoftEdgeWebView2RuntimeInstaller{X64/X86/ARM64}.exe /silent /install
    ```

### Test your app for forward-compatibility

The Web is constantly evolving.  In the Evergreen distribution mode, the WebView2 Runtime is automatically kept up to date on the client to provide the latest features and security fixes.  If you use Evergreen distribution, to ensure that your WebView2 app stays compatible with the web, you should set up testing infrastructure.

Microsoft Edge preview channels (Beta, Dev, and Canary) provide a sneak peek into what is coming next in the WebView2 Runtime.  Test your WebView2 app regularly against a  Microsoft Edge preview channel, and update your app or [report issues](https://github.com/MicrosoftEdge/WebViewFeedback) if issues arise.  Canary is the recommended preview channel, because it ships at the fastest cadence and has the newest APIs.

To help you decide which channel is right, navigate to [Overview of the Microsoft Edge channels](/deployedge/microsoft-edge-channels).  You can [Download Microsoft Edge Insider Channels](https://www.microsoftedgeinsider.com/download) on your test environment, and use `regkey` or environment variables to indicate the channel preference for your testing app.

For more information, navigate to [CreateCoreWebView2EnvironmentWithOptions](/microsoft-edge/webview2/reference/win32/webview2-idl#createcorewebview2environmentwithoptions).  You can also use WebDriver to automate WebView2 testing, as described in [Automate, and test WebView2 with Microsoft Edge Driver](../how-to/webdriver.md).

### Feature-detect when using recent APIs

<!-- the main section about QueryInterface is in versioning.md; this section should be only a couple paragraphs -->

If you use the Evergreen mode, when your WebView2 app uses a new WebView2 API from a recent SDK, you should use an approach such as `QueryInterface` or `try-catch` to make sure the new API is present on the client's machine.  This feature-detecting is a best practice, because there are cases where the WebView2 Runtime isn't updated.

Even if you use the Evergreen distribution mode, the WebView2 Runtime might not be updated, for the following reasons:
*   An IT Admin can turn off updates of the WebView2 Runtime, because an Admin has control of updating their devices.
*   Clients that are offline don't receive the updated WebView2 Runtime.

The update policies for Microsoft Edge and the WebView2 Runtime are separate.  Even if the IT Admin has disabled automatic updates of Microsoft _Edge_, the WebView2 _Runtime_ is still automatically updated, unless the Admin turns off Runtime updating.  If the Admin disables updating Microsoft Edge (which is somewhat common), that doesn't affect which WebView2 APIs are available on the client machine.

For more information, navigate to [Feature-detecting to test whether the installed Runtime supports recently added APIs](../concepts/versioning.md#feature-detecting-to-test-whether-the-installed-runtime-supports-recently-added-apis).


<!-- ====================================================================== -->
## Details about the Fixed Version runtime distribution mode

For constrained environments with strict compatibility requirements, consider using the Fixed Version distribution mode.  The Fixed Version distribution mode was previously called _bring-your-own_.

In the Fixed Version distribution mode, you control the timing of updating the WebView2 Runtime for your app.  You download a specific version of the WebView2 Runtime and then package it with your WebView2 app.  The WebView2 Runtime on the client isn't automatically updated.  Instead, you periodically update the WebView2 Runtime that's packaged and distributed together with your updated app.  The Fixed Version approach doesn't use a registry key for the WebView2 Runtime.

To use the Fixed Version distribution mode:

1.  Download the Fixed Version of the WebView2 Runtime from [Download the WebView2 Runtime](https://developer.microsoft.com/microsoft-edge/webview2#download-section), as a package.

    The most-patched version of the latest and second-latest major release are available for download at this site.  Keep an archived copy of any versions you need.

1.  Decompress the WebView2 Runtime package using the command-line command `expand {path to the package} -F:* {path to the destination folder}` or by using a decompression tool such as WinRAR.  Avoid decompressing through the File Explorer, because that approach might not generate the correct folder structure.

1.  Include the decompressed Fixed Version binaries in your project.

1.  Indicate the path to the Fixed Version binaries when creating the WebView2 environment.

    *   For Win32 C/C++, you can create the environment using the [CreateCoreWebView2EnvironmentWithOptions](/microsoft-edge/webview2/reference/win32/webview2-idl#createcorewebview2environmentwithoptions) function.  Use the `browserExecutableFolder` parameter to indicate the path to the folder that contains `msedgewebview2.exe`.

    *   For .NET, you must specify the environment before the WebView2 `Source` property takes effect.  For .NET, you can use either of the following approaches to specify the environment:

        *   Set the `CreationProperties` ([WPF](/dotnet/api/microsoft.web.webview2.wpf.webview2.creationproperties)/[WinForms](/dotnet/api/microsoft.web.webview2.winforms.webview2)) property on the `WebView2` element.  Use the `BrowserExecutableFolder` member in the `CoreWebView2CreationProperties` ([WPF](/dotnet/api/microsoft.web.webview2.wpf.corewebview2creationproperties)/[WinForms](/dotnet/api/microsoft.web.webview2.winforms)) class to indicate the path to the Fixed Version binaries.

        *   Alternatively, use `EnsureCoreWebView2Async` ([WPF](/dotnet/api/microsoft.web.webview2.wpf.webview2.ensurecorewebview2async)/[WinForms](/dotnet/api/microsoft.web.webview2.winforms.webview2.ensurecorewebview2async)) to specify the environment.  Use the `browserExecutableFolder` parameter in [CoreWebView2Environment.CreateAsync](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createasync) to indicate the path to the Fixed Version binaries.

1.  Package and ship the Fixed Version binaries with your app.  Update the binaries as appropriate.

### Known issues for Fixed Version

*   Currently, Fixed Version cannot be run from a network location or UNC path.

*   Installing the Fixed Version of the WebView2 Runtime on the client causes [Microsoft PlayReady](https://www.microsoft.com/playready) to stop working.  Fix the PlayReady setup as follows.

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

### Files to ship with the app

The `WebView2Loader` code needs to be shipped with the app.  This can be done by [statically linking](../how-to/static.md) `WebView2Loader.lib` into the app binaries, or by including the `WebView2Loader.dll` that matches the app's architecture.

`WebView2Loader.dll` is a native and architecture-specific binary, so you need to include all flavors of this binary that you expect your app to run in.  For example, for x86 you would include the x86 version of `WebView2Loader.dll`, and for AnyCPU you would include the x86, x64, and arm64 versions of `WebView2Loader.dll`.  For a managed app, the correct version of `WebView2Loader.dll` is loaded from the appropriate architecture-specific folder.

Example native app folder structure:

```
\<myApp>
    \WebView2Loader.dll
```

For .NET managed apps, you also need to include the WebView2 .NET assemblies for the core WebView2 functionality (`Microsoft.Web.WebView2.Core.dll`) and for the WPF/WinForms-specific functionality (`Microsoft.Web.WebView2.Winforms.dll` or `Microsoft.Web.WebView2.WPF.dll`).

Example native app folder structure:

```
\<myApp>
    \Microsoft.Web.WebView2.Core.dll
    \Microsoft.Web.WebView2.Winforms.dll
    \Microsoft.Web.WebView2.WPF.dll
    \runtimes
        \win-arm64\native\WebView2Loader.dll (arm64)
        \win-x64\native\WebView2Loader.dll (x64)
        \win-x86\native\WebView2Loader.dll (x86)
```
