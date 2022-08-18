---
title: About the list of tools
description: About the list of tools in DevTools.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 02/02/2022
---
# About the list of tools

DevTools provides 35 tools:

*  2 toolbar icons, for the **Inspect tool** (![Inspect tool icon.](media/inspect-tool-icon-light-theme.png)) and **Device Emulation** (![Device Emulation icon.](media/device-emulation-icon-light-theme.png)).
*  3 permanent activity bar tabs, for the **Elements**, **Console**, and **Sources** tools.
*  29 optional activity bar tabs, for the optional tools.

The default tools, including activity bar icons, activity bar tabs, and tools on the **More tabs** (![More tabs icon.](media/more-tools-icon-light-theme.png)) menu:

![All of the default tools of DevTools, including 2 toolbar icons and 11 toolbar tabs on the toolbar or More tabs menu.](media/all-default-tools.png)

The optional tools that aren't open by default, on the **More Tools** (![More Tools icon.](media/more-tools-icon-light-theme.png)) menu:

![All of the optional tools of DevTools, on the More Tools menu, with 22 optional tools.](media/all-optional-tools.png)

The following features are additional ways to access the tools:
*  The **Drawer** is an additional toolbar and area to hold tool tabs.
*  The **Command Menu** is a way to directly use features of tools.
*  The **Settings** pages can turn on additional features of tools.


<!-- ====================================================================== -->
## Overview of all tools

Microsoft Edge DevTools includes the following tools.

| Tool | Purpose | Article |
| --- | --- | --- |
| **3D View** tool | Explore the web page translated into a 3D perspective.  Debug your webpage by navigating through the DOM or z-index stacking context. | [Navigate webpage layers, z-index, and DOM using the 3D View tool](3d-view/index.md) |
| **Animations** tool | Inspect and modify CSS animation effects by using the **Animation Inspector** in the **Animations** tool. | [Inspect and modify CSS animation effects](inspect-styles/animations.md) |
| **Application** tool | Use the **Application** tool to manage storage for web app pages, including manifest, service workers, local storage, cookies, cache storage, and background services. | [The Application tool, to manage storage](storage/application-tool.md) |
| **Changes** tool | Tracks any changes you've made to CSS or JavaScript in DevTools.  Shows you what changes to make to your actual source files after you use DevTools to modify your webpage files sent from the server. | [Track changes to files using the Changes tool](changes/changes-tool.md) |
| **Console** tool | An intelligent, rich command line within DevTools.  A great companion tool to use with others tools.  Provides a powerful way to script functionality, inspect the current webpage, and manipulate the current webpage using JavaScript. | [Console overview](console/index.md) |
| **Coverage** tool | Help you find unused JavaScript and CSS code, to speed up your page load and save your mobile users cellular data. | [Find unused JavaScript and CSS code with the Coverage tool](coverage/index.md) |
| **CSS Overview** tool | Help you better understand your page's CSS and identify potential improvements. | [CSS Overview tool](css/css-overview-tool.md) |
| **Detached Elements** tool | To increase the performance of your page, this tool finds detached elements that the browser cannot garbage-collect, and identifies the JavaScript object that is still referencing the detached element.  By changing your JavaScript to release the element, you reduce the number of detached elements on your page, increasing page performance and responsiveness. | [Debug DOM memory leaks with the Detached Elements tool](memory-problems/dom-leaks.md) |
| **Developer Resources** | Shows resource URLs for the webpage. | [Developer Resources tool](developer-resources/developer-resources.md) |
| **Device Emulation** | Use the **Device Emulation** tool, sometimes called _Device Mode_, to approximate how your page looks and responds on a mobile device. | [Emulate mobile devices (Device Emulation)](device-mode/index.md) |
| **Elements** tool | Inspect, edit, and debug your HTML and CSS.  You can edit in the tool while displaying the changes live in the browser.  Debug your HTML using the DOM tree, and inspect and work on the CSS for your webpage. | [Inspect, edit, and debug HTML and CSS with the Elements tool](elements-tool/elements-tool.md) |
| **Inspect** tool | Use the **Inspect** tool to see information about an item within a rendered webpage.  When the **Inspect** tool is active, you _hover_ over items in the webpage, and DevTools adds an information overlay information and grid highlighting on the webpage. | [Analyze pages using the Inspect tool](css/inspect.md) |
| **Issues** tool | The **Issues** tool automatically analyzes the current webpage, reports issues grouped by type, and provides documentation to help explain and resolve the issues. | [Find and fix problems using the Issues tool](issues/index.md) |
| **JavaScript Profiler** tool | This tool has been replaced by the **Performance** tool and the **Memory** tool. | [JavaScript Profiler tool](javascript-profiler/javascript-profiler-tool.md) |
| **Lighthouse** tool | Use the Lighthouse tool to identify and fix common problems that affect your site's performance, accessibility, and user experience. | [Lighthouse tool](lighthouse/lighthouse-tool.md) |
| **Media** tool | Use this tool to view information and debug the media players per browser tab. | [View and debug media players information](media-panel/index.md) |
| **Memory** tool | Find memory issues that affect page performance, including memory leaks, memory bloat, and frequent garbage collections. | [Fix memory problems](memory-problems/index.md) |
| **Memory Inspector** tool | Inspect JavaScript ArrayBuffer with the Memory Inspector. | [Inspect a JavaScript ArrayBuffer with the Memory Inspector tool](memory-inspector/memory-inspector-tool.md) |
| **Network** tool | Use the **Network** tool to make sure that resources are being downloaded or uploaded as expected.  Inspect the properties of an individual resource, such as the HTTP headers, content, or size. | [Inspect network activity](network/index.md) |
| **Network conditions** tool | Use the **Network conditions** tool to disable the browser cache, set network throttling, set the user agent string, and set Content-Encodings such as deflate, gzip, and br. | [Network conditions tool](network-conditions/network-conditions-tool.md) |
| **Network Console** tool | Use the **Network Console** tool to make changes to network requests (network calls) to see why they fail.  Change and replay any of the network requests, and make detailed network API calls.  | [Network Console tool](network-console/network-console-tool.md) |
| **Network request blocking** tool | Use the **Network request blocking** tool to test blocking network requests to a specified URL pattern and see how a webpage behaves. | [Network request blocking tool](network-request-blocking/network-request-blocking-tool.md) |
| **Performance** tool | Analyze runtime performance, which is how your page performs when it's running, as opposed to loading. | [Get started analyzing runtime performance](evaluate-performance/index.md) |
| **Performance monitor** tool | Provides a real-time view of the runtime performance of a webpage, to determine where performance problems come from, making a website run slowly.  Finds whether problems are from high memory or CPU usage, too-frequent layout and style calculations, or too many DOM nodes and event listeners. | [Measure runtime performance of a page using the Performance monitor tool](performance-monitor/performance-monitor-tool.md) |
| **Quick source** tool | Use the **Quick source** tool to display or edit source files when using a tool other than the **Sources** tool. | [Display or edit source files using the Quick source tool](quick-source/quick-source-tool.md) |
| **Rendering** tool | Use the **Rendering** tool to see what your webpage looks like with different display options or vision deficiencies. | [Rendering tool, to see what a webpage looks like with different display options or vision deficiencies](rendering-tools/rendering-tool.md) |
| **Search** tool | Use the **Search** tool to find specific source files for a webpage, including HTML, CSS, JavaScript, and image files. | [Find source files for a page using the Search tool](search/search-tool.md) |
| **Security** tool | Inspects the security of a page. | [Understand security issues using the Security tool](security/index.md) |
| **Sensors** tool | Simulates different device orientations. | [Simulate device orientation with the Sensors tool](device-mode/orientation.md) |
| **Source Maps Monitor** tool | Use the **Source Maps Monitor** tool to monitor your source maps. | [Source Maps Monitor tool](source-maps-monitor/source-maps-monitor-tool.md) |
| **Sources** tool | Use the **Sources** tool to view, modify, and debug front-end JavaScript code, and inspect and edit the HTML and CSS files that make up the current webpage. | [Sources tool overview](sources/index.md) |
| **WebAudio** tool | Use the **WebAudio** tool to monitor WebAudio traffic.  The **WebAudio** tool uses the WebAudio API. | [WebAudio tool](webaudio/webaudio-tool.md) |
| **WebAuthn** tool | Use the **WebAuthn** tool to create and interact with software-based virtual authenticators. | [Emulate authenticators and debug WebAuthn](webauthn/index.md) |
| **Welcome** tool | The **Welcome** tool opens when you first open DevTools.  It displays links to developer docs, latest features, Release Notes, and an option to contact the Microsoft Edge DevTools team. | [Welcome tool](welcome/welcome-tool.md) |

<!-- when no longer experimental, move into table:
| **CSP Violations** tool | Displays any Content Security Policy (CSP) violations that are detected on the inspected webpage. | [CSP Violations tool](csp-violations/csp-violations-tool.md) |
https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/experimental-features/#show-csp-violations-view
-->


<!-- ====================================================================== -->
## The More Tools menus

The **More Tools** (**+**) menu on the main toolbar and on the Drawer toolbar is dynamic: it omits any tab tools that are open on that toolbar.

The **More tools** menu in the **Customize and control DevTools** (![Customize icon.](media/customize-devtools-icon-light-theme.png)) menu is static: it always lists all of the optional tools.  The selected tool opens in the main toolbar if it's a Panel tool, or on the Drawer if it's a Drawer tool.  You can right-click the tool's tab to move it to the other toolbar.


<!-- ====================================================================== -->
## Panel tools vs. Drawer tools

In the **Command Menu**:

* _Panel tools_ are tools which open in the main toolbar by default.

* _Drawer tools_ are tools which open in the Drawer toolbar by default, at the bottom of DevTools.  Press `Esc` to show or hide the Drawer.

The **Command Menu** first lists the Panel tools, and then the Drawer tools:

![The Command Menu, showing the Panel tools grouped together, and then the Drawer tools.](media/command-menu-panel-vs-drawer-tools.png)

To move a tool to the other toolbar, right-click the tool's tab and then select **Move to bottom** or **Move to top**.

To open the **Command Menu**, press `Ctrl`+`Shift`+`P` (Windows, Linux) or `Command`+`Shift`+`P` (macOS).  Or, click the **Customize and control DevTools** (![Customize icon.](media/customize-devtools-icon-light-theme.png)) button and then select **Run command**.


<!-- ====================================================================== -->
## Closing tool tabs

To close a tool tab that's on a toolbar:

*  Click the **x** on the tab.

   The **Elements**, **Console**, and **Sources** tool tabs cannot be closed.


To close all of the optional tabs at once:

*  Right-click an optional tab on the toolbar (a tab that has an **x** button), and then select **Close all**.

   Only the **Elements**, **Console**, and **Sources** remain on the main toolbar.  (The **Drawer** toolbar is unaffected.)

   If you closed all tabs on the **Drawer**, only the **Console** tab remains on the **Drawer** toolbar.  (The main toolbar is unaffected.)


<!-- ====================================================================== -->
## Restoring the default tool tabs

To restore all of the default tabs on the main toolbar:

1. In DevTools, select **Settings** (![Settings icon.](media/settings-gear-icon-light-theme.png)) > **Preferences**.

1. Click the **Restore defaults and refresh** button.

   The main toolbar again has all of the default tabs.  The **Drawer** then has only the **Console** tab.


<!-- ====================================================================== -->
## See also
 
* [Overview of DevTools](overview.md) - Similar to the present article, but broader coverage, with a top-level introduction of DevTools.
* [Simplify DevTools using Focus Mode](experimental-features/focus-mode.md), in _Experimental features_.  In **Focus Mode**, the **Activity Bar** is a compact replacement for the main toolbar, and the **Quick View** list is a replacement for the tabs on the Drawer toolbar.
