---
title: Map the processed code to your original source code, for debugging
description: Keep your client-side code readable and debuggable even after you combine, minify, or compile it.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 01/29/2024
---
<!-- Copyright Meggin Kearney and Paul Bakaus

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->
# Map the processed code to your original source code, for debugging

To see and work with your original source code when you're debugging JavaScript in DevTools, rather than having to work with the compiled and minified version of your code that's returned by the web server, use source maps.

Source mapping keeps your client-side code readable and debuggable, even after your build process compiles and minifies your code and combines it into a single file.  Source maps map your compiled, minified code to your original source code files.  In DevTools, you can then read and debug your familiar, original source code, instead of the unrecognizable transformed and compiled code.

To use source maps, you must use a tool when you build your code that can produce source maps. There are many tools available, such as:

* [Sass](https://sass-lang.com/) or [PostCSS](https://postcss.org/), which can produce source maps for CSS.
* The [TypeScript](https://www.typescriptlang.org/) compiler, which compiles TypeScript to JavaScript and can produce source maps to debug the original TypeScript code.
* The [Babel](https://babeljs.io/) transpiler which can produce both CSS and JavaScript source maps.
* Build tools like [Webpack](https://webpack.js.org/), [Rollup](https://rollupjs.org/), [Vite](https://vitejs.dev/), and [Parcel](https://parceljs.org/), which can also produce source maps.

This article explains how to enable source maps in DevTools, and how to use them to debug your code. It doesn't explain how to produce source maps in your build process. To learn more about publishing source maps to the Azure Artifacts symbol server, see [Securely debug original code by publishing source maps to the Azure Artifacts symbol server](./publish-source-maps-to-azure.md).


<!-- ====================================================================== -->
## Source maps in DevTools

Source maps from build tools cause DevTools to load your original files in addition to your minified files, and replace the minified code with the original code. For example:

* In the **Sources** tool, you can see the original files and set breakpoints in them.
* In the **Performance** tool, you can see your original function names in the flame chart.
* In the **Console** tool, you can see your original file names and line numbers in stack traces.

Meanwhile, Microsoft Edge actually runs your minified code to render the webpage. Source maps are only used by DevTools, and only for displaying source code to developers.

DevTools knows how to load a source map when a `//# sourceMappingURL=` comment is found in a compiled file. For example, the following comment tells DevTools to load the source map from `http://example.com/path/to/your/sourcemap.map`:

```javascript
//# sourceMappingURL=http://example.com/path/to/your/sourcemap.map
```


<!-- ====================================================================== -->
## Enable source maps in DevTools

Source maps are enabled by default.

To make sure that source maps are enabled:

1. To open DevTools, in Microsoft Edge, right-click a webpage, and then select **Inspect**.  Or, press **Ctrl+Shift+I** (Windows, Linux) or **Command+Option+I** (macOS).

1. In DevTools, click **Customize and control DevTools** (![The Customize and control DevTools icon](./source-maps-images/customize-and-control-devtools-icon.png)) > **Settings** (![Settings icon](./source-maps-images/settings-gear-icon-light-theme.png)) > **Preferences**.

1. In the **Preferences** page, in the **Sources** section, make sure the **Enable JavaScript source maps** checkbox and the **Enable CSS source maps** checkbox are selected:

   ![The Preferences page's Sources section with the 'Enable source maps' checkboxes selected](./source-maps-images/javascript-settings-preferences-sources-enable-javascript-source-maps.png)

1. In the upper right of **Settings**, click the **Close** (![The close icon](./source-maps-images/close-icon.png)) button.


<!-- ------------------------------ -->
#### Enable loading source maps from remote file paths

By default, DevTools doesn't load source maps when the source map URL is a remote file path, such as when the source map URL starts with `file://` and targets a file that's not on the current device.

To enable loading source maps from file paths:

1. In DevTools, click **Customize and control DevTools** (![The Customize and control DevTools icon](./source-maps-images/customize-and-control-devtools-icon.png)) > **Settings** (![Settings icon](./source-maps-images/settings-gear-icon-light-theme.png)) > **Preferences**.

1. In the **Preferences** page, in the **Sources** section, select the checkbox **Allow DevTools to load resources, such as source maps, from remote file paths. Disabled by default for security reasons.**


<!-- ====================================================================== -->
## Debug with source maps

When debugging your code and when source maps are enabled, source maps are used in several places:

*  In the **Console** tool, links from log messages to source files go to the original files, not the compiled files.

*  When stepping through code in the **Sources** tool, the original files are displayed in the **Navigator** pane on the left. When you open an original file, its original code is displayed and you can set breakpoints in it. To learn more about debugging with breakpoints in the **Sources** tool, see [Pause code with breakpoints](./breakpoints.md).

*  In the **Sources** tool, the links to source files that appear in the **Call Stack** of the **Debugger** pane open the original source files.

*  In the **Performance** tool, the flame chart displays the original function names, not the compiled function names.


<!-- ====================================================================== -->
## See also

* [Securely debug original code by publishing source maps to the Azure Artifacts symbol server](publish-source-maps-to-azure.md)
* [Securely debug original code by using Azure Artifacts symbol server source maps](consume-source-maps-from-azure.md)
* [Source Maps Monitor tool](../source-maps-monitor/source-maps-monitor-tool.md)


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/devtools/javascript/source-maps/) and is authored by [Meggin Kearney](https://developers.google.com/web/resources/contributors#meggin-kearney) (Technical Writer) and [Paul Bakaus](https://developers.google.com/web/resources/contributors#paul-bakaus) (Open Web Developer Advocate, Google: Tools, Performance, Animation, and UX).

[![Creative Commons License](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
