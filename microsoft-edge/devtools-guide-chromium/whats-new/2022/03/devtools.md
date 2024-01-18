---
title: What's New in DevTools (Microsoft Edge 99)
description: Host source maps on Azure DevOps Symbol Server to debug your original source code securely.  Use source maps to unminify performance profiles.  DevTools extension now for Microsoft Visual Studio.  3D View tool replaces Layers tool.  Improved accessibility in Network Console and 3D View tools.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 03/09/2022
---
# What's New in DevTools (Microsoft Edge 99)

[!INCLUDE [Microsoft Edge team note for top of What's New](../../includes/edge-whats-new-note.md)]


<!-- ====================================================================== -->
## Securely debug your production code with source maps from Azure Artifacts Symbol Server

<!-- Title: Debug JavaScript with source maps more easily -->
<!-- Subtitle: Publish your source maps to Azure Artifacts Symbol Server and connect DevTools to it for an easier debugging experience. -->

Azure Artifacts Symbol Server now supports storing the source maps that your build process produces when compiling, minifying, and bundling your code.  Instead of hosting source maps on your public server, you can now publish your source maps to the secure Azure Artifacts Symbol Server.  Then, connect DevTools to Symbol Server to have DevTools automatically fetch your source maps. 

By using source maps, you can see and debug your original source code in DevTools, rather than having to work with the compiled, minified, and bundled production code that's returned by your server.  Hosting your source maps on the Azure Artifacts Symbol Server allows you to see and work with your source code securely and privately, instead of placing your source maps on your server and revealing your original code publicly.

To try this feature:
1. [Publish your source maps to the Azure Artifacts symbol server](../../../javascript/publish-source-maps-to-azure.md).
1. Open DevTools > **Settings** > **Symbol Server** and connect DevTools to Azure Artifacts Symbol Server, by entering your Azure DevOps organization and personal access token.

![The 'Symbol Server' page in DevTools Settings, where you enter your Azure DevOps personal access token](./devtools-images/ado-pat-devtools.png)

See also:
*  [Map the processed code to your original source code, for debugging](../../../javascript/source-maps.md)
*  [Securely debug original code by publishing source maps to the Azure Artifacts symbol server](../../../javascript/publish-source-maps-to-azure.md)
*  [Securely debug original code by using Azure Artifacts symbol server source maps](../../../javascript/consume-source-maps-from-azure.md)


<!-- ====================================================================== -->
## Microsoft Edge DevTools extension for Visual Studio

<!-- Title: Debug your ASP.NET projects in Visual Studio with the Edge Developer Tools -->
<!-- Subtitle: Get the Edge Developer Tools extension for VS today! -->

Following up on the success of the Visual Studio Code integration, you can now also embed the Microsoft Edge Developer Tools in Microsoft Visual Studio to debug your ASP.NET projects live.  Download the [Microsoft Edge Developer Tools for Visual Studio](https://aka.ms/edgetools-for-vs) and try it out. 

To try this feature:
1. Make sure Visual Studio 2022 and the ASP.NET workload are installed.
1. Set up Web Live Preview as the default Web Forms Designer, as described at [Microsoft Edge Developer Tools for Visual Studio](https://aka.ms/edgetools-for-vs).
1. In an ASP.NET project, open a webpage of the project in the **Design** window.
1. In the upper left of the **Design** window, click the **Open Edge DevTools** (![Open Edge DevTools icon](./devtools-images/open-edge-dev-tools-v-s-icon.png)) button:

![An ASP.NET project, opening Edge DevTools](./devtools-images/devtools-extension-v-s-web-forms-designer.png)

Edge DevTools for Visual Studio opens, with the **Elements** tool selected:

![Microsoft Edge Developer Tools for Visual Studio: Elements tool of DevTools](./devtools-images/devtools-extension-visual-studio-elements.png)

The **Network** tool is also available by default:

![Microsoft Edge Developer Tools for Visual Studio: Network tool of DevTools](./devtools-images/devtools-extension-visual-studio-network.png)

The **Inspect tool** (![Inspect tool icon](./devtools-images/v-s-edge-devtools-inspect-tool-icon.png)) and **Toggle screencast** (![Toggle screencast icon](./devtools-images/v-s-edge-devtools-toggle-screencast-icon.png)) are available, and the **More Tools** (![More Tools icon](./devtools-images/more-tools-v-s-icon.png)) menu offers the [Issues](../../../issues/index.md), [Network conditions](../../../network-conditions/network-conditions-tool.md), and [Network request blocking](../../../network-request-blocking/network-request-blocking-tool.md) tools.

See also:

* [Edge Developer Tools for Visual Studio (Preview)](https://devblogs.microsoft.com/visualstudio/?p=237066&preview=1&_ppp=7aa7aef54f), at Visual Studio DevBlogs.
* [Edge DevTools extension for Visual Studio](../../../../visual-studio/index.md#edge-devtools-extension-for-visual-studio).


<!-- ====================================================================== -->
## Layers in 3D View

<!-- Title: Layers in 3D View -->
<!-- Subtitle: The Layers tool isn't going away - find it in the 3D View tool today. -->

Since [Microsoft Edge 88](../../2020/11/devtools.md#composited-layers-are-now-in-3d-view), the **3D View** tool has provided an improved version of the **Layers** tool.  Now, in Microsoft Edge 99, the functionality in the **Layers** tool has been removed, and the **Layers** tool instead contains a link that redirects you to the Composited Layers view within the **3D View** tool.  You can find all the features that were previously in the **Layers** tool, and more, in the **3D View** tool.

Update: the **Layers** tool has now been removed.

![The Layers tool now links to the 3D View tool](./devtools-images/layers-3d-view-tool.png)
<!-- work item > layersmove.gif -->

See also:
* [Navigate webpage layers, z-index, and DOM using the 3D View tool](../../../3d-view/index.md)


<!-- ====================================================================== -->
## Use your source maps to display original function names in performance profiles

<!-- Title: The Performance tool can now display unminified function names in the flame chart -->
<!-- Subtitle: Use the new Unminify button in the Performance tool to download an unminified version of the performance profile you recorded. -->

**Update:** In Microsoft Edge 111, this feature has been removed, because the **Performance** tool now automatically provides the original file and function names while profiling production code, as long as sourcemaps are hosted on Azure Artifacts Symbol Server.  See [Performance tool unminifies file and function names when profiling production code](../../2023/03/devtools-111.md#performance-tool-unminifies-file-and-function-names-when-profiling-production-code) in _What's New in DevTools (Microsoft Edge 111)_.


#### Deprecated What's New entry

Recording a performance profile in the Performance tool produces a minified flame chart.  In previous versions of Microsoft Edge, the flame chart didn't use source maps to display your original function names, even if you hosted the source maps on your server.

Starting in Microsoft Edge version 99, you can display your original function names in a performance profile, as follows:
1. Record a profile, in the **Performance** tool.
1. Click the new **Unminify** (![The Unminify icon](./devtools-images/unminify-icon.png)) button to create and download the unminified performance profile.
1. Load (import) (![The Load profile icon](./devtools-images/load-profile-icon.png)) the unminified performance profile into the **Performance** tool.

The **Unminify** button will use source maps, provided that they are hosted side-by-side with your production code, to unminify function names in the flame chart in the **Performance** tool.

The flame chart in the **Performance** tool initially shows function names as **b**, **O**, **Xt**, and **bn**, taken from the minified production code returned by the web server:

![Minified function names in the flame chart in the Performance tool](./devtools-images/minified-call-stack-performance-tool.png)

After clicking **Unminify** (![Unminify icon](./devtools-images/unminify-icon.png)) and then **Load profile** (![Load profile icon](./devtools-images/load-profile-icon.png)), the flame chart in the **Performance** tool now shows those functions labeled with meaningful names: **invokeFunc (b)**, **executeAction (O)**, **endBatch (Xt)**, and **runReactions (bn)**, retrieved from your source maps:

![Unminified function names in the flame chart in the Performance tool](./devtools-images/unminified-call-stack-performance-tool.png)

See also:
* [Unminifying function names in DevTools performance profiles](https://blogs.windows.com/msedgedev/2022/02/03/unminifying-function-names-in-devtools-performance-profiles/) at the Microsoft Edge Blog.
* [Display original function names in performance profiles](../../../evaluate-performance/unminify.md).


<!-- ====================================================================== -->
## Improved accessibility for Network Console and 3D View

<!-- Title: Improvements for using assistive technology with DevTools -->
<!-- Subtitle: Screen readers now announce better information in the Network Console and 3D View tools. -->

In previous versions of Microsoft Edge, assistive technology announced incorrect information when providing a custom bearer token in the Network Console tool.  In Microsoft Edge version 99, this issue has been fixed.  When selecting the text box for providing a custom bearer token, assistive technology now announces "Token edit text Request View group".

![The Network Console tool](./devtools-images/network-console-tool.png)

In previous versions of Microsoft Edge, assistive technology would only announce the radio button text in the 3D View tool, without announcing the group name that the button belongs to.  In Microsoft Edge version 99, this has been fixed.  For example, when focus is on the **Use screen texture** radio button, assistive technology will now announce: "Color type radio group, Use screen texture, radio button, selected".

![The 3D View tool](./devtools-images/3d-view-tool.png)

See also:
* [Navigate DevTools with assistive technology](../../../accessibility/navigation.md)


<!-- ====================================================================== -->
## Improved source folder tree in the Sources panel

In the **Page** tab of the **Sources** tool, the tree of source folders is now improved, with less clutter in the naming and outline of folders.  Unneeded path prefixes such as `../` and `./` have been removed.  The tree structure has been simplified by merging equivalent duplicate folders.

![Cleaner folder outline in the Page tab of the Sources tool](./devtools-images/folders-page-tab-sources-tool.png)

For the history of this feature in the Chromium open-source project, see Issue [1284737](https://crbug.com/1284737).

<!-- https://developer.chrome.com/blog/new-in-devtools-99/#source-tree -->

See also:
* [Using the Page tab to explore resources that construct the current webpage]() in _Sources tool overview_.


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

[![Creative Commons License](../../../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
