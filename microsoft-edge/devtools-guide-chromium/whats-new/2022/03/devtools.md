---
title: What's new in DevTools (Microsoft Edge 99)
description: Host source maps on Azure DevOps Symbol Server to debug your original source code securely.  Use source maps to unminify performance profiles.  DevTools extension now for Microsoft Visual Studio.  3D View tool replaces Layers tool.  Improved accessibility in Network Console and 3D View tools.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 03/04/2022
---
# What's New in DevTools (Microsoft Edge 99)

The following sections list the announcements from the Microsoft Edge DevTools team.  To try the latest features of DevTools and the Microsoft Edge DevTools extension for Visual Studio Code, read these announcements.  To stay up to date with the latest and greatest features in your developer tools, download the [Microsoft Edge preview channels](https://www.microsoftedgeinsider.com/download) and [follow the Microsoft Edge DevTools team on Twitter](https://twitter.com/EdgeDevTools).

If you are on Windows, Linux, or macOS, consider using the Canary preview channel of Microsoft Edge as your default development browser.  The preview channels give you access to the latest features of Microsoft Edge DevTools.


<!-- ====================================================================== -->
## Securely debug your production code with source maps from Azure Artifacts Symbol Server

<!-- Title: Debug JavaScript with source maps more easily -->
<!-- Subtitle: Publish your source maps to Azure Artifacts Symbol Server and connect DevTools to it for an easier debugging experience. -->

<!-- todo: sequentially introduce "why source maps" and "why secure source maps" -->

Azure Artifacts Symbol Server now supports storing the source maps that your build process produces when compiling, minifying, and bundling your code.  Instead of hosting source maps on your public server, you can now publish your source maps to the secure Azure Artifacts Symbol Server.  Then, connect DevTools to Symbol Server to have DevTools automatically fetch your source maps. 

By using source maps, you can see and debug your original source code in DevTools, rather than having to work with the compiled, minified, and bundled production code that's returned by your server.  Hosting your source maps on the Azure Artifacts Symbol Server allows you to see and work with your source code securely and privately, instead of placing your source maps on your server and revealing your original code publicly.

To try this feature:
1. Publish your source maps to Azure Artifacts Symbol Server.
1. Open DevTools > **Settings** > **Symbol Server** and connect DevTools to Azure Artifacts Symbol Server, by entering your Azure DevOps organization and personal access token.

![The 'Symbol Server' page in DevTools Settings, where you enter your Azure DevOps personal access token.](../../media/2022/03/ado-pat-devtools.png)

See [Securely debug original code by publishing source maps to the Azure Artifacts symbol server](https://review.docs.microsoft.com/microsoft-edge/devtools-guide-chromium/javascript/publish-source-maps-to-azure?branch=pr-en-us-1766).  (temp link to an open PR)
 

<!-- ====================================================================== -->
## Microsoft Edge DevTools extension for Visual Studio

<!-- Title: Debug your ASP.NET projects in Visual Studio with the Edge Developer Tools -->
<!-- Subtitle: Get the Edge Developer Tools extension for VS today! -->

Following up on the success of the Visual Studio Code integration, you can now also embed the Microsoft Edge Developer Tools in Microsoft Visual Studio to debug your ASP.NET projects live.  Download the [Microsoft Edge Developer Tools for Visual Studio](https://aka.ms/edgetools-for-vs) and try it out. 

<!-- 1. Open Visual Studio, such as Visual Studio 2022 Professional. -->

<!-- 1. In Visual Studio, enable or re-enable Web Live Preview.  To do this, go to **Tools** -> **Options** -> **Web Live Preview (Preview)**.  (couldn't find; found per next list item instead)  Under the **Web Live Preview** category, set **Enable** to **true**.  Press **OK** and then restart Visual Studio. -->


**Set up Web Live Preview:**

First, enable Web Live Preview, as follows:

1. In Visual Studio, go to **Tools** -> **Options** -> **Web Forms Designer**.  In the **Web Forms Designer** page, select **Web Live Preview**.  Click the **OK** button, and then restart Visual Studio.

<!-- 1. might need to redo same step:  If needed, check the radio button as follows: In Visual Studio, enable or re-enable Web Live Preview.  To do this, go to **Tools** -> **Options** -> **Web Forms Designer**.  In the **Web Forms Designer** page, select **Web Live Preview**.  The radio button is still selected; click the **Cancel** button.  Or, if the radio button is cleared, select the radio button again, click the **OK** button, and then restart Visual Studio. -->


**Install the ASP.NET workload:**

Make sure the workload to create ASP.NET projects is installed, as follows:

1. In Visual Studio, open or create an ASP.NET project.  If ASP.NET is not listed, in Visual Studio, click **Tools** > **Get Tools and Features**.  The **Visual Studio Installer** > **Modifying** window appears.  In the **Workloads** tab, in the **Web and Cloud** section, select the **ASP.NET and web development** card.  Then click the **Modify** button.  The **User Account Control** window appears.

1. Click the **Yes** button.  The **Before we get started** dialog box appears.  Close the main Visual Studio window, and then click the **Retry** button.  The **Visual Studio Installer** runs and installs the packages.


**Install the Edge DevTools extension:**

Install the **Edge Developer Tools** extension for Visual Studio, as follows:

1. In Visual Studio, select **Extensions** > **Manage Extensions**.  The **Manage Extensions** window opens.

1. In the tree on the left, expand **Visual Studio Marketplace**.

1. In the **Search** box in the upper right, enter **Edge Developer Tools**.

1. In the **Edge Developer Tools** card, click the **Download** button.  A message appears at the bottom of the window: "Your changes will be scheduled."

1. Click the **Close** button.

1. Close and then reopen Visual Studio.  The **User Account Control** window appears.

1. Click the **Yes** button.  The Visual Studio startup window appears.

1. Press `Alt`+`Tab` to go to the **VSIX Installer** dialog box.  It reads: "Scheduled tasks: Install: Edge Developer Tools".  Click the **Modify** button.  The **VSIX Installer** shows **Modifications Complete** for **Edge Developer Tools**.  Click the **Close** button.


**Open an ASP.NET project:**

1. Click **Create a new project**.  In the search text box, enter **ASP.NET**.  Select the **C# ASP.NET Core Web App** card, and then click the **Next** button.

1. In the **Configure your new project** window, in the **Project name** text box, enter a name, such as MyWebApp1.  Enter a location in the **Location** text box.  Click the **Next** button.  In the **Additional information** page of the window, click the **Create** button.

1. In Visual Studio, in Solution Explore, click **Pages** > **Index.cshtml**.  In the lower left, click the **Preview** button.  A dialog box appears: "Web Live Preview: Browser Link needs to be enabled in order to use Web Live Preview.  Would you like to enable it?"

1. Click the **Yes** button.  The **Trust ASP.NET Core SSL Certificate** dialog box appears.  "Would you like to trust the ASP.NET Core SSL Certificate?"

1. Click the **Yes** button.  The **Security Warning** dialog box appears, saying: "localhost ... Do you want to install this certificate?"

1. Click the **Yes** button.  The **Welcome** page of your project appears:

   ![A new ASP.NET project in Visual Studio, with Edge Developer Tools extension and Web Forms Designer set up.](../../media/2022/03/devtools-extension-v-s-web-forms-designer.png)


**Open Edge DevTools:**

1. In the upper left of the **Design** window, click the **Open Edge DevTools** (![Open Edge DevTools icon.](../../media/2022/03/open-edge-dev-tools-v-s-icon.png)) button.

   The **Edge DevTools** window appears, undocked from Visual Studio.  It has **Elements** and **Network** tool tabs.  The **More Tools** (![More Tools icon.](../../media/2022/03/more-tools-v-s-icon.png)) button menu additionally offers the **Issues** tool, **Network conditions** tool, and the **Network request blocking** tool:

   ![The Edge DevTools window of Visual Studio.](../../media/2022/03/edge-devtools-v-s-window-undocked.png)

Microsoft Edge Developer Tools for Visual Studio (extra .png file for add'l screenshot, such as Edge DevTools docked inside main window):

![Microsoft Edge Developer Tools for Visual Studio.](../../media/2022/03/devtools-extension-visual-studio.png)

Microsoft Edge Developer Tools for Visual Studio: Elements tool of DevTools:

![Microsoft Edge Developer Tools for Visual Studio: Elements tool of DevTools.](../../media/2022/03/devtools-extension-visual-studio-elements.png)

Microsoft Edge Developer Tools for Visual Studio: Network tool of DevTools:

![Microsoft Edge Developer Tools for Visual Studio: Network tool of DevTools.](../../media/2022/03/devtools-extension-visual-studio-network.png)

<!-- Instructions for screenshot
Install Visual Studio 2022
Enable Web live preview
Install extension
see Attached pngs for Network and Elements.
see Attached GIFs for showing how it works. -->

<!-- Currently all the information is on the listing page, we're working on a more involved blog post and doc.
See [blog post]() and [doc page]().
-->


<!-- ====================================================================== -->
## Layers in 3D View

<!-- Title: Layers in 3D View -->
<!-- Subtitle: The Layers tool isn't going away - find it in the 3D View tool today. -->

We previously added an improved version of Layers in the **3D View** tool, and we're removing the stand-alone version (the **Layers** tool) after users have enough time to make the transition. The **Layers** tool will display a link that redirects you to the **Composited Layers** view within the **3D View** tool.  You can find all the functionality from the **Layers** tool there.

<!-- ![The Layers tool now links to the 3D View tool.](../../media/2022/03/layers-link-3d-view-tool.png) -->

In the following image, the **Focus Mode** UI is shown.  **Focus Mode** has a **Quick View** area at the bottom, in place of the **Drawer**.  The **Layers** tool, which is shown open in **Quick View**, contains only a link, to open the **3D View** tool above it:

![The Layers tool now links to the 3D View tool with the Composited Layers view open.](../../media/2022/03/layers-3d-view-tool.png)
<!-- work item > layersmove.gif -->

See [Navigate z-index, DOM, and layers using the 3D View tool](../../../3d-view/index.md).


<!-- ====================================================================== -->
## Use your source maps to unminify performance profiles

<!-- Title: The Performance tool can now display unminified call stacks -->
<!-- Subtitle: Use the new Unminify button in the Performance tool to download an unminified version of the performance profile you recorded. -->

In previous versions of Microsoft Edge, recording a performance profile in the Performance tool would produce a minified call stack. The call stack was not using source maps, even if you hosted them on your server, to unminify the call stack.

Starting in Microsoft Edge version 99, you can unminify a call stack in a performance profile, as follows:
1. After recording a profile, in the **Performance** tool, click the new **Unminify** button.
1. Download the unminified performance profile.<!--how?-->
1. Import the unminified performance profile into the **Performance** tool.<!--how?-->

The **Unminify** button will use source maps, provided that they are hosted side-by-side with your production code, to unminify the call stack in the **Performance** tool.

![The minified call stack in the Performance tool.](../../media/2022/03/minified-call-stack-performance-tool.png)
<!-- Image 1: Minified call stack in Performance tool
Navigate to: https://outlook-sdf.office.com/mail/
Open DevTools > Performance
Record a performance profile while scrolling through your inbox
Select a small section of the profile and look at the call stack
Draw red highlights around function names like n, O, i, Xt, Bn, Yn. It won't be these exactly in your screenshot but you can see these are minified function names
Remember the section of the profile that you are looking at
-->

![The unminified call stack in the Performance tool.](../../media/2022/03/unminified-call-stack-performance-tool.png)
<!-- Image 2: Unminified call stack
Select the Unminify button
Save the unminified profile (it'll be in the .json file format) to your Downloads folder
Select Load profile and load the unminified perf profile you just downloaded
Select the same section of the profile you looked at in the first image
Draw red highlights around function names that should now be unminified. In my demo, 
Xt => endBatch
bn => runReactions
i => finalDispatch
 -->

See [Unminifying function names in DevTools performance profiles](https://blogs.windows.com/msedgedev/2022/02/03/unminifying-function-names-in-devtools-performance-profiles/) at the Microsoft Edge Blog.
<!-- See [PR forthcoming to add a temp link to rendered page](). -->


<!-- ====================================================================== -->
## Improved accessibility for Network Console and 3D View

<!-- Title: Improvements for using assistive technology with DevTools -->
<!-- Subtitle: Screen readers now announce better information in the Network Console and 3D View tools. -->

In previous versions of Microsoft Edge, assistive technology would announce incorrect information when providing a custom bearer token in the Network Console tool.  In Microsoft Edge version 99, this issue has been fixed.  When selecting the textbox for providing a custom bearer token, assistive technology will now announce "Token edit text Request View group".

![The Network Console tool.](../../media/2022/03/network-console-tool.png)
<!--
1. Open DevTools.
2. Press Ctrl+Shift+P and enter "Network Console".
3. Open the Network Console tool.
4. Select "Create a request".
5. Select "Auth".
6. Select "Bearer Token".
7. Draw a red highlight around the "Token" edit textbox.
8. If you can't see the "Token" edit textbox, drag the slider above "Hit 'Send' to issue the request" down to the bottom.
-->

In previous versions of Microsoft Edge, assistive technology would only announce the radio button text in the 3D View tool, without announcing the group name that the button belongs to.  In Microsoft Edge version 99, this has been fixed.  For example, when focus is on the **Use screen texture** radio button, assistive technology will now announce: "Color Type radio group, Use screen texture, radio button, unselected".

![The 3D View tool.](../../media/2022/03/3d-view-tool.png)
<!--
1. Open DevTools.
2. Press Ctrl+Shift+P and enter "3D View".
3. Open the 3D View tool.
4. Select "DOM".
5. Draw a red highlight around the "Color type" section and all the radio buttons in that section.
-->

To learn more about how using assistive technology with DevTools, read [Navigate DevTools with assistive technology](../../../accessibility/navigation.md).


<!-- ====================================================================== -->
## Improved source folder tree in the Sources panel

In the **Page** tab of the **Sources** tool, the tree of source folders is now improved, with less clutter in the naming and outline of folders.  Unneeded path prefixes such as "../" and "./" have been removed.  The tree structure has been simplified by merging equivalent duplicate folders.  This was done by normalizing the absolute source URLs in the source maps.

![Cleaner folder outline in the Page tab of the Sources tool.](../../media/2022/03/folders-page-tab-sources-tool.png)

For the history of this feature in the Chromium open-source project, see Issue [1284737](https://crbug.com/1284737).

<!-- https://developer.chrome.com/blog/new-in-devtools-99/#source-tree -->


<!-- ====================================================================== -->
## Announcements from the Chromium project

Microsoft Edge version 99 also includes the following updates from the Chromium project:

* [Throttling WebSocket requests](https://developer.chrome.com/blog/new-in-devtools-99/#websocket)
* [New Reporting API pane in the Application panel](https://developer.chrome.com/blog/new-in-devtools-99/#reporting-api)
* [Better console styling, formatting and filtering](https://developer.chrome.com/blog/new-in-devtools-99/#console)
   * [Properly style log messages with ANSI escape code](https://developer.chrome.com/blog/new-in-devtools-99/#console-styling)
   * [Properly support %s, %d, %i and %f format specifiers](https://developer.chrome.com/blog/new-in-devtools-99/#console-format)
* [Sourcemaps improvements](https://developer.chrome.com/blog/new-in-devtools-99/#sourcemap) <!-- redundant w/ above?-->
   * [Debug extensions with sourcemap files](https://developer.chrome.com/blog/new-in-devtools-99/#extension)
   * [Display worker source files in the Sources panel](https://developer.chrome.com/blog/new-in-devtools-99/#worker-sourcemap)
* [Touch-friendly color-picker and split pane](https://developer.chrome.com/blog/new-in-devtools-99/#touch-friendly)


<!-- ====================================================================== -->
<!-- uncomment if content is copied from developer.chrome.com to this page -->

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page for announcements from the Chromium project is [What's New in DevTools (Chrome 99)](https://developer.chrome.com/blog/new-in-devtools-99) and is authored by [Jecelyn Yeen](https://developers.google.com/web/resources/contributors#jecelynyeen) (Developer advocate working on Chrome DevTools at Google).



<!-- ====================================================================== -->
<!-- uncomment if content is copied from developer.chrome.com to this page -->

[![Creative Commons License.](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
