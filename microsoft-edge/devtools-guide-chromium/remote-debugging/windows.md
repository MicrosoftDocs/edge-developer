---
description: Get started with Remote Debugging Windows 10 devices
title: Get started with remote debugging Windows 10 Devices
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/23/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, remote, debugging, windows 10, windows, device portal
---
# Get started with remote debugging Windows 10 Devices  

Remote debug live content on a Windows 10 device from your Windows or macOS computer.  This tutorial teaches you the following tasks.  

*   Set up your Windows 10 device for remote debugging and connect to it from your development machine.  
*   Inspect and debug live content on your Windows 10 device from your development machine.  
*   Screencast content from your Windows 10 device onto a DevTools instance on your development machine.  
    
## Step 1: Set up the host (debuggee machine)  

The host or debuggee machine is the Windows 10 device that you want to debug.  It may be a remote device that is hard for you to physically access or it may not have keyboard and mouse peripherals, making it difficult to interact with the Microsoft Edge DevTools on that device.  To set up the host \(debuggee\) machine, you need to complete the following actions.  

*   Install and configure [Microsoft Edge (Chromium)][MicrosoftEdgeMain]  
*   Install the [Remote Tools for Microsoft Edge (Beta)][MicrosoftStoreApps9p6cmfv44zlt] from the [Microsoft Store][MicrosoftStoreAppsWindows]  
*   Activate [Developer Mode][WindowsAppsGetStartedEnableYourDeviceForDevelopment] and enable [Device Portal][WindowsUwpDebugTestPerfDevicePortal]  
    
### Install and configure Microsoft Edge (Chromium)  

If you have not already, install Microsoft Edge \(Chromium\) from [this page][MicrosoftEdgeMain].  If you are using a pre-installed version of Microsoft Edge on the host \(debuggee\) machine, verify that you have Microsoft Edge \(Chromium\) and not Microsoft Edge \(EdgeHTML\).  A quick way to check is to load `edge://settings/help` in the browser and confirm that the version number is 75 or higher.  

Now navigate to `edge://flags` in Microsoft Edge \(Chromium\).  In **Search flags**, type in **Enable remote debugging through Windows Device Portal**.  Set that flag to **Enabled**.  Then, choose the **Restart** button to restart Microsoft Edge \(Chromium\).  

:::image type="complex" source="../media/remote-debugging-windows-media-edge-flags-on-host.msft.png" alt-text="Setting the Enable remote debugging through Windows Device Portal flag to Enabled" lightbox="../media/remote-debugging-windows-media-edge-flags-on-host.msft.png":::
   Setting the **Enable remote debugging through Windows Device Portal** flag to **Enabled**  
:::image-end:::  

### Install the Remote Tools for Microsoft Edge (Beta)  

Install the [Remote Tools for Microsoft Edge (Beta)][MicrosoftStoreApps9p6cmfv44zlt] from the [Microsoft Store][MicrosoftStoreAppsWindows].  

> [!NOTE]
> The **Get** button for the [Remote Tools for Microsoft Edge (Beta)][MicrosoftStoreApps9p6cmfv44zlt] may be disabled if you are on Windows 10 version 1809 or earlier.  To set up the host \(debuggee\) machine, it must be running Windows 10 version 1903 or later.  Update the host \(debuggee\) machine to acquire the [Remote Tools for Microsoft Edge (Beta)][MicrosoftStoreApps9p6cmfv44zlt].  

:::image type="complex" source="../media/remote-debugging-windows-media-remote-tools-in-store.msft.png" alt-text="The Remote Tools for Microsoft Edge \(Beta\) in the Microsoft Store" lightbox="../media/remote-debugging-windows-media-remote-tools-in-store.msft.png":::
   The [Remote Tools for Microsoft Edge (Beta)][MicrosoftStoreApps9p6cmfv44zlt] in the [Microsoft Store][MicrosoftStoreAppsWindows]  
:::image-end:::  

Launch the [Remote Tools for Microsoft Edge (Beta)][MicrosoftStoreApps9p6cmfv44zlt] and, if prompted, accept the permissions dialog in the app.  You are now able to close the [Remote Tools for Microsoft Edge (Beta)][MicrosoftStoreApps9p6cmfv44zlt] and you do not need to have it open for future remote debugging sessions.

### Activate Developer Mode and enable Device Portal  

If you are on a WiFi network, ensure the network is marked as either **Domain** or **Private**.  You may verify the state by opening the **Windows Security** app, choosing on **Firewall & network protection** and checking if your network is listed as a **Domain** network or **Private** network.  

If it is listed as **Public**, navigate to **Settings** > **Network & Internet** > **Wi-Fi**, choose on your network and toggle the **Network profile** button to **Private**.  

Now, open the **Settings** app.  In **Find a setting**, enter `Developer settings` and choose it.  Toggle on **Developer Mode**.  You may now turn on the **Device Portal** by setting **Turn on remote diagnostics over local area network connections** to **On**.  You may then optionally turn **Authentication** on so that the client \(debugger\) device must provide the correct credentials to connect to this device.  

> [!NOTE]
> If **Turn on remote diagnostics over local area network connections.** was previously turned on, you must turn it off and turn it on again for **Device Portal** to work with the [Remote Tools for Microsoft Edge (Beta)][MicrosoftStoreApps9p6cmfv44zlt].  If  a **For developers** section is not displayed in **Settings**, **Device Portal** may already be turned on so try restarting the Windows 10 device instead.

:::image type="complex" source="../media/remote-debugging-windows-media-host-settings.msft.png" alt-text="The Settings app with Developer Mode and Device Portal configured" lightbox="../media/remote-debugging-windows-media-host-settings.msft.png":::
   The **Settings** app with **Developer Mode** and **Device Portal** configured  
:::image-end:::  

Note the machine IP address and connection port displayed under **Connect using:**.  The IP address in the image below is `192.168.86.78` and the connection port is `50080`.  

:::image type="complex" source="../media/remote-debugging-windows-media-host-settings-ip-address.msft.png" alt-text="Note the IP address and connection port in the Settings" lightbox="../media/remote-debugging-windows-media-host-settings-ip-address.msft.png":::
   Note the IP address and connection port in the **Settings**  
:::image-end:::  

You enter the information on the client \(debugger\) device in the [next section](#step-2-set-up-the-client-debugger-machine).  Open tabs in Microsoft Edge and [Progressive Web Apps (PWAs)][DevtoolsProgressiveWebApps] on the host \(debuggee\) machine that you want to debug from the client \(debugger\) machine.  

## Step 2: Set up the client (debugger machine)  

The client or debugger machine is the device you want to debug from.  This device may be your daily development machine or it may just be your PC or MacBook when working from home.  

To set up the client \(debugger\) machine, install Microsoft Edge \(Chromium\) from [this page][MicrosoftEdgeMain] if you have not already.  If you are using a pre-installed version of Microsoft Edge on the host \(debuggee\) machine, verify that you have Microsoft Edge \(Chromium\) and not Microsoft Edge \(EdgeHTML\).  A quick way to check is to load `edge://settings/help` in the browser and confirm that the version number is 75 or higher.  

Now navigate to `edge://flags` in Microsoft Edge \(Chromium\).  In **Search flags**, type in **Enable remote Windows device debugging in edge://inspect**.  Set that flag to **Enabled**.  Then, choose the **Restart** button to restart Microsoft Edge \(Chromium\).  

:::image type="complex" source="../media/remote-debugging-windows-media-edge-flags-on-client.msft.png" alt-text="Setting the Enable remote Windows device debugging through edge://inspect flag to Enabled" lightbox="../media/remote-debugging-windows-media-edge-flags-on-client.msft.png":::
   Setting the **Enable remote Windows device debugging through edge://inspect** flag to **Enabled**  
:::image-end:::  

Now navigate to the `edge://inspect` page in Microsoft Edge \(Chromium\).  By default, you should be on the **Devices** section.  Under **Connect to a remote Windows device**, enter the IP address and the connection port of the host \(debuggee\) machine in the textbox following this pattern: http://`IP address`:`connection port`.  Now choose **Connect to Device**.  

:::image type="complex" source="../media/remote-debugging-windows-media-edge-inspect.msft.png" alt-text="The edge://inspect page on the client" lightbox="../media/remote-debugging-windows-media-edge-inspect.msft.png":::
   The `edge://inspect` page on the client  
:::image-end:::  

If you set up authentication for the host \(debuggee\) machine, you are prompted to enter the **Username** and **Password** for the client \(debugger\) machine to connect successfully.  

### Using https instead of http  

If you want to connect to the host \(debuggee\) machine using `https` instead of `http`, you must navigate to `http://IP address:50080/config/rootcertificate` in Microsoft Edge on the client \(debugger\) machine.  This automatically downloads a security certificate named `rootcertificate.cer`.

Choose `rootcertificate.cer`.  This opens the [Windows Certificate Manager tool][DotnetFrameworkWcfFeatureDetailsHowToViewCertificatesWithMmcSnapInViewCertificatesWithCertificateManagerTool].

Choose **Install certificate...**, ensure that **Current User** is turned on, and choose **Next**.  Now choose **Place all certificates in the following store** and choose **Browse...**.  Choose the **Trusted Root Certification Authorities** store and choose **OK**.  Choose **Next** and then choose **Finish**.  If prompted, confirm that you want to install this certificate to the **Trusted Root Certification Authorities** store.

Now, when connecting to the host \(debuggee\) machine from the client \(debugger\) machine using the `edge://inspect` page, you must use a different `connection port` value.  By default, for desktop Windows, the Device Portal uses `50080` as the `connection port` for `http`.  For `https`, the Device Portal uses `50043` so follow this pattern: https://`IP address`:`50043` on the `edge://inspect` page.  [Read more about the default ports used by Device Portal][WindowsUwpDebugTestPerfDevicePortalSetup].  

> [!NOTE]
> The default port for `http` is `50080` and the default port for `https` is `50043` but this is not always the case as Device Portal on desktop claims ports in the ephemeral range \(\>50,000\) to prevent collisions with existing port claims on the device.  To learn more, navigate to the  [Port Settings][WindowsUwpDebugTestPerfDevicePortalDesktopRegistryBasedConfigurationForDevicePortal] section for Device Portal on Windows desktop.  

## Step 3: Debug content on the host from the client  

If the client \(debugger\) machine successfully connects to the host \(debuggee\) machine, the `edge://inspect` page on the client now displays a list of the tabs in Microsoft Edge and any open PWAs on the host.  

:::image type="complex" source="../media/remote-debugging-windows-media-edge-inspect-connected.msft.png" alt-text="The edge://inspect page on the client displays the tabs in Microsoft Edge and PWAs on the host" lightbox="../media/remote-debugging-windows-media-edge-inspect-connected.msft.png":::
   The `edge://inspect` page on the client displays the tabs in Microsoft Edge and PWAs on the host  
:::image-end:::  

Determine the content you want to debug and choose **inspect**.  The Microsoft Edge DevTools opens in a new tab and screencast the content from the host \(debuggee\) machine to the client \(debugger\) machine.  You are now able to use the full power of the Microsoft Edge DevTools on the client for content running on the host.  Learn more about how to use the Microsoft Edge DevTools [here][DevtoolsIndex].  

:::image type="complex" source="../media/remote-debugging-windows-media-devtools-client.msft.png" alt-text="The Microsoft Edge DevTools on the client debugging a tab in Microsoft Edge on the host" lightbox="../media/remote-debugging-windows-media-devtools-client.msft.png":::
   The [Microsoft Edge DevTools][DevtoolsIndex] on the client debugging a tab in Microsoft Edge on the host  
:::image-end:::  

### Inspect elements  

For example, try inspecting an element.  Navigate to the **Elements** tool of your DevTools instance on the client, and hover on an element to highlight it in the viewport of the host device.  

You may also tap an element on your host device screen to choose it in the **Elements** tool.  Choose **Select Element** on your DevTools instance on the client, and then tap the element on your host device screen.  

> [!NOTE]
> **Select Element** is disabled after the first touch, so you need to turn it on again every time you want to use this feature.  

> [!IMPORTANT]
> The **Event Listeners** pane in the **Elements** tool is blank on Windows 10 version 1903.  This is a known issue and the team plans to fix the **Event Listeners** pane in a servicing update to Windows 10 version 1903.  

## Step 4: Screencast your host screen to your client device  

By default, the DevTools instance on the client have screencasting turned on, which allows you to view the content on the host device in your DevTools instance on your client device.  Choose **Toggle Screencast** to turn off or on this feature.  

:::image type="complex" source="../media/remote-debugging-windows-media-toggle-screencast.msft.png" alt-text="The Toggle Screencast button in the Microsoft Edge DevTools on the client" lightbox="../media/remote-debugging-windows-media-toggle-screencast.msft.png":::
   The **Toggle Screencast** button in the Microsoft Edge DevTools on the client  
:::image-end:::  

You are able to interact with the screencast in multiple ways:  
*   Chooses are translated into taps, firing proper touch events on the device.  
*   Keystrokes on your computer are sent to the device.  
*   To simulate a pinch gesture, hold `Shift` while dragging.  
*   To scroll, use your trackpad or mouse wheel, or fling with your mouse pointer.  

Some notes on screencasts:  
*   Screencasts only display page content.  Transparent portions of the screencast represent device interfaces, such as the Microsoft Edge address bar, the Windows 10 taskbar, or the Windows 10 keyboard.  
*   Screencasts negatively affect frame rates.  Disable screencasting while measuring scrolls or animations to get a more accurate picture of the performance of your page.  
*   If your host device screen locks, the content of your screencast disappears.  Unlock your host device screen to automatically resume the screencast.  

## Known Issues  

The **Event Listeners** pane in the **Elements** tool is blank on Windows 10 version 1903.  The team plans to fix the **Event Listeners** pane in a servicing update to Windows 10 version 1903.  

The **Cookies** pane in the **Application** panel is blank on Windows 10 version 1903.  The team plans to fix the **Cookies** pane in a service update to Windows 10 version 1903.  

The **Audits** tool, the **3D View** tool, the **Emulated Devices** section in **Settings**, and the **Accessibility tree** pane in the **Elements** tool are not currently working as expected.  The team plans to fix the listed tools in a future update of Microsoft Edge.  

The file explorer does not launch from the DevTools in the **Sources** tool or in the **Security** panel when you remote debug.  The team plans to fix the tools in a future update of Microsoft Edge.  

<!-- links -->

[DevtoolsIndex]: ../index.md "Microsoft Edge (Chromium) Developer Tools overview | Microsoft Docs"  
[DevtoolsProgressiveWebApps]: ../progressive-web-apps/index.md "Debug Progressive Web Apps | Microsoft Docs"  

[DotnetFrameworkWcfFeatureDetailsHowToViewCertificatesWithMmcSnapInViewCertificatesWithCertificateManagerTool]: /dotnet/framework/wcf/feature-details/how-to-view-certificates-with-the-mmc-snap-in#view-certificates-with-the-certificate-manager-tool "View certificates with the Certificate Manager tool - How to: View certificates with the MMC snap-in | Microsoft Docs"  

[WindowsAppsGetStartedEnableYourDeviceForDevelopment]: /windows/apps/get-started/enable-your-device-for-development "Enable your device for development | Microsoft Docs"  

[WindowsUwpDebugTestPerfDevicePortal]: /windows/uwp/debug-test-perf/device-portal "Windows Device Portal overview | Microsoft Docs"  
[WindowsUwpDebugTestPerfDevicePortalSetup]: /windows/uwp/debug-test-perf/device-portal#setup "Setup - Windows Device Portal overview | Microsoft Docs"  
[WindowsUwpDebugTestPerfDevicePortalDesktopRegistryBasedConfigurationForDevicePortal]: /windows/uwp/debug-test-perf/device-portal-desktop#registry-based-configuration-for-device-portal "Registry-based configuration for Device Portal - Device Portal for Windows Desktop | Microsoft Docs"  

[MicrosoftEdgeMain]: https://www.microsoft.com/edge "Download New Microsoft Edge Browser"  

[MicrosoftStoreAppsWindows]: https://www.microsoft.com/store/apps/windows "Windows Apps | Microsoft Store"  

[MicrosoftStoreApps9p6cmfv44zlt]: https://www.microsoft.com/store/apps/9P6CMFV44ZLT "Remote Tools for Microsoft Edge (Beta) | Microsoft Store"  
