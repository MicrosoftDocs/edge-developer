---
title: What's new in DevTools (Microsoft Edge 105)
description: "Focus Mode: Improved location controls for DevTools, Activity Bar, and Quick View. Improved reliability in Issues tool. And more."
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 09/01/2022
---
# What's New in DevTools (Microsoft Edge 105)

[!INCLUDE [Microsoft Edge team note for top of What's New](../../includes/edge-whats-new-note.md)]

<!-- ====================================================================== -->
## Test your PWA's protocol handlers from the Application tool  

<!-- Rank: 1 -->
<!-- Title: Test your PWA's protocol handlers from the Application tool  -->
<!-- Subtitle: From the Manifest section of the Application tool, you can now provide custom protocols to launch your PWA. -->

In Microsoft Edge 105, the Application tool now supports testing protocol handlers. Since Microsoft Edge 96, you've been able to define protocol handlers in the application manifest of your PWA. Now you can  test those protocols from the Application tool itself in DevTools if you have your PWA installed. 

With DevTools open against your PWA:
1. Open the Application tool.
1. Expand the **Manifest** dropdown.
1. Select the Protocol Handlers entry in the dropdown.
1. Select the protocol you want to test from the dropdown.
1. Enter in the URL or endpoint that you would like to test.
1. Select **Test Protocol**.

The Application tool will attempt to launch your PWA with the protocol and URL you specified. The browser asks for permission to open the application, and then prompts you to confirm that you want to handle the protocol and the app you'd like to launch. If you give permission, your app will open with the specified content.

<!-- (how to configure the DevTools correctly, a website or CodePen that the writer can use, where to navigate in the DevTools UI for the screenshot, etc.)
Refer to the attachment.

To take your own screenshot:
1. Open Microsoft Edge Beta, Dev, or Canary (just go to edge://version and ensure you're on version 105+)
2. Navigate to URL protocol handler (protocol-handler.glitch.me).
3. Install the PWA (see docs).
4. Open DevTools > Application tool.
5. Select the Manifest dropdown to expand it.
6. Select the Protocol Handler entry in the dropdown.
7 With the web+coffee:// protocol selected, enter into the textbox "americano".
8 Take a screenshot. Draw red highlight boxes over the "Protocol handlers" entry in the Manifest dropdown and around the Protocol Handlers section in the panel. -->

![1](./devtools-105-images/protocol-handler.png)

See also:

* [Test Progressive Web App (PWA) protocol handling](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/progressive-web-apps/protocol-handlers)

<!-- ====================================================================== -->

## Edit and resend network requests more reliably in the Network Console tool

<!-- RANK 3 -->
<!-- Title: Edit and resend network requests more reliably in the Network Console tool  -->
<!-- Subtitle: Modify and resend network requests that have been logged in the Network tool with the Network Console tool. -->

Previously in Microsoft Edge, selecting **Edit and resend** for a network request from the Network tool may not have reliably opened the Network Console tool and prepopulated it with the values from the request. 

In Microsoft Edge 105, this issue has been fixed. The **Edit and resend** now prepopulates the Network Console tool with the values for the network request that you are looking to resend. You can continue to modify these values before sending the request from the Network Console tool. Thank you for sending us your feedback about this issue!

Right-click the network request that you want to change and resend, and then select *Edit and Resend*.

[1](./devtools-105-images/edit-and-resend.msft.png

In the Network Console, edit the network request information, and then click the *Send* button.
[2](./devtools-105-images/networkconsole-edit.msft.png


See also:
* [Compose and send web API requests using the Network Console tool](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/network-console/network-console-tool#starting-from-the-network-tool)

<!-- ====================================================================== -->
## Focus Mode: Improved location controls for DevTools, Activity Bar, and Quick View

<!-- Rank 3 -->
<!-- Title: Focus Mode: Improved location controls for DevTools, Activity Bar, and Quick View -->
<!-- Subtitle: Focus Mode: Improved location controls for DevTools, Activity Bar, and Quick View. -->

Several improvements to [Focus Mode](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/experimental-features/focus-mode) in existing location controls for DevTools have been made, including a new control for changing the orientation of Quick View.

The Settings menu now provides options for changing DevTools between docked locations and a separate window. This menu also contains settings for how the Activity Bar is displayed. Starting in Edge 105, these options can be navigated and changed more quickly. The previous submenus have been replaced with toggle buttons. Additionally, improved contrast means the option you have selected is more easily visible at a glance.

Before:

![1 before](./devtools-105-images/before-docking-menu.msft.png)

After:

![1 after](./devtools-105-images/after-docking-menu.msft.png)

<!-- 
Screenshot 1, "before" in Edge 104: Ensure Focus Mode is enabled. Open Settings menu, then navigate to the docking submenu to show options.
Screenshot 1, "after" in Edge 105: Ensure Focus Mode is enabled. Open Settings menu to show DevTools docking location and Activity Bar location settings. -->

You can now change the orientation of the Quick View panel as well. To change Quick View to a vertical split, select the location toggle (**Dock Quick View to the right**). Selecting this toggle a second time will return Quick View to a horizontal split.

![2](./devtools-105-images/quickview-console.png) 

<!-- 
Screenshot 2: Ensure Focus Mode is enabled. With Elements open in main panel and Console in Quick View, press the location toggle at the top right of Quick View to change its orientation to vertical. -->

To minimize Quick View, use the **Collapse** toggle or press `Escape`:

![3](./devtools-105-images/focus-mode-improved-location-controls3.png)
<!-- Screenshot 3: Continuation of previous screenshot. Minimize Quick View in vertical orientation with with Esc keyboard shortcut. See below. -->

See also:
* [Simplify DevTools using Focus Mode](../../../experimental-features/focus-mode.md)

<!-- ====================================================================== -->

## Fix: Search in the Sources and Network tools now works as expected in Focus Mode

<!-- Rank 4 -->
<!-- Title: Fix: Search in the Sources and Network tools now works as expected in Focus Mode  -->
<!-- Subtitle: Try Focus Mode, a new, more simplified, and streamlined UI for DevTools!-->

[Focus Mode experiment](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/experimental-features/focus-mode#enable-focus-mode) in previous versions of Microsoft Edge didn't properly showcase the Search feature in the Network tool nor the *Search in all files* feature in the Sources tool. In Microsoft Edge version 105, these issues have been fixed.

You can now search in the Network tool via the Search icon.  

![1](./devtools-105-images/networking-search.png)

You can leverage the *Search in all files* feature in the Sources tool by opening the context menu on files in the Page section.  This will display the Search tool in the Quick View.

![2](./devtools-105-images/search2.png)

<!-- Open Edge Beta, Dev, or Canary (navigate to edge://version and ensure you're on 105+)
1. Navigate to:  Simplify DevTools using Focus Mode - Microsoft Edge Development | Microsoft Docs
2. Open DevTools. Go to Settings > Experiments. Turn on Focus Mode. Reload DevTools
3. Open the Network tool. Refresh the page so you can see some network requests. Now select the Search (magnifying glass icon)
4. Take a screenshot
5. Open the Sources tool
6. Right-click docs.microsoft.com
7. Take a screenshot of the "Search in all files" context menu entry
8. Draw red highlight boxes around the Search icon and Search pane in the Network tool. Draw a red highlight box around the "Search in all files" entry in the context menu in the Sources tool. -->


See also:
* [Inspect network activity - Microsoft Edge Development](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/network/#search-network-headers-and-responses)
* [Find source files for a page using the Search tool ](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/search/search-tool)

<!-- ====================================================================== -->
## Improved reliability in Issues tool
<!-- Rank 6 -->
<!-- Title: Improved reliability in Issues tool -->
<!-- Subtitle: Improved reliability in Issues tool. -->

In previous versions of Microsoft Edge, there was a bug that that caused issues not appearing in the **Issues** tool.  This bug has been fixed resulting in improved reliability.  

<!-- See also:
* []()
* []() -->

<!-- ====================================================================== -->
## Announcements from the Chromium project

Microsoft Edge 105 also includes the following updates from the Chromium project:  

* [Attach Wasm debugging information at runtime](https://developer.chrome.com/blog/new-in-devtools-105/#wasm)
* [Support live edit during debugging](https://developer.chrome.com/blog/new-in-devtools-105/#live-edit)
* [View and edit @scope at rules in the Styles pane](https://developer.chrome.com/blog/new-in-devtools-105/#scope)
* [Sourcemap improvements](https://developer.chrome.com/blog/new-in-devtools-105/#sourcemaps)

<!-- ====================================================================== -->
<!-- uncomment if content is copied from developer.chrome.com to this page -->

<!-- > [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page for announcements from the Chromium project is [What's New in DevTools (Chrome 105)](https://developer.chrome.com/blog/new-in-devtools-105) and is authored by [Jecelyn Yeen](https://developers.google.com/web/resources/contributors#jecelynyeen) (Developer advocate working on Chrome DevTools at Google). -->


<!-- ====================================================================== -->
<!-- uncomment if content is copied from developer.chrome.com to this page -->

<!-- [![Creative Commons License.](../../../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0). -->
