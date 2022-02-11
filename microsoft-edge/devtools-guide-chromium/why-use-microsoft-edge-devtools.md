---
title: Why use Microsoft Edge DevTools?
description: Reasons to use Microsoft Edge DevTools, including ease of use, customization, and unique tools.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: devtools
ms.date: 02/04/2022
---
# Why use Microsoft Edge DevTools?

The Microsoft Edge DevTools team has added a lot of features based on feedback we got from the community to enhance the experience of Developers. Here is a list of features that are unique to Microsoft Edge, available on Windows, Mac and Linux.

<!-- ====================================================================== -->
## Ease of use

As the browser developer tools grew organically over the years, they can be overwhelming and you could be confused how to find different functionality. Therefore we made an effort to ease new users into the tools by providing explanations. For seasoned users we made it easy to customize the tools to their needs.

*  Open and close tools easily. By activating the `+` button on any menu bar you can add tools without having to use the `…` menu. You can activate the `x` button on any tool tab to remove the tool. Some tools like Elements, Sources and Console can't be closed and don't show an `x`.
![Adding a new tool to a menu bar by activating the + button and selecting it](media/xxx.msft.png)
![Removing a tool by activating the x button on the tab of the tool](media/xxx.msft.png)
*  Move tools around in the UI. Using the context menu on any of the tabs in the menu bar you can move tools from the top to the bottom and vice versa. 
![Moving a tool to the bottom drawer using the context menu](media/xxx.msft.png)
![The tool now appears on the bottom drawer](media/xxx.msft.png)
*  Focus Mode, to make the UI even easier to use. The DevTools team learned in interviews and feedback sessions that the amount tools displayed at each time can be overwhelming. This is why we introduced Focus Mode, which collates tools into different tasks and shows only the relevant ones.
![Focus mode showing only tools related to Elements Debugging](media/xxx.msft.png)
![Focus mode showing only tools related to Source editing](media/xxx.msft.png)

<!-- This is disabled for now until we can fix it 
*  Enable Tooltips mode, to learn about the tools. In Focus Mode, you can turn on the Tooltips Mode which allows you to learn more about the different tools by moving around DevTools.
![Tool explanations shown when Tooltips mode is enabled](media/xxx.msft.png)
-->

<!-- ====================================================================== -->
## Customization

*  You can choose a different language. Our usage data shows that users of DevTools come from all over the world, so it made sense to offer them in different languages.
![Developer Tools displayed in German](media/xxx.msft.png)
![Developer Tools displayed in Japanese](media/xxx.msft.png)
*  You can choose a different theme. Themes can make your user experience mich better and you can change the look of DevTools to your needs.
![Switching to a different theme in DevTools settings](media/xxx.msft.png)
![DevTools displayed in the Monokai theme](media/xxx.msft.png)

<!-- ====================================================================== -->
## Unique tools

These tools are only available in Microsoft Edge and aren't part of the Chromium project Developer Tools.

*  Detached element panel. This is a tool built on feedback from a Microsoft team that needed to find out about memory leaks in one of our products. You can find out what elements are using up memory although they aren't part of the DOM any longer.
![The Detached Elements panel showing elements that need to be removed from memory](media/xxx.msft.png)
*  Console error search. In user studies we found that people often copy and paste error messages from the Console to a search engine to find out more about the problem. We added an icon to these Console messages to make that easier.
![Console with highlighted search icon that would open a web search with the error message in a new browser tab](media/xxx.msft.png)
*  3D View. The 3D view displays either the DOM, the composited layers or the parts of th page that have a z-index assigned to them as a three dimensional interface. This allows you to gauge the complexity of your products and find out about memory problems.
![This document displayed in the 3D view showing the depth of the Document Object Model](media/xxx.msft.png)
*  Integration with webhint. The Issues tool shows you all the things that need fixing in the current web product. Under the hood, it uses [webhint](https://webhint.io), a testing tool for the web reporting on various issues. You do not only learn what's wrong, but also why it is a problem, where in your document the problem exists and how to fix it.
![Current problems of a document displayed in the Issues panel](media/xxx.msft.png)
*  Integration of Microsoft Edge DevTools with Visual Studio Code. Changing from editor to browser to debug a certain problem, using DevTools to analyze it and then going back to fix them in your source code is annoying. This is why we created a Visual Studio Code extension that embeds DevTools into your editor workflow. Instead of fixing CSS in the final product and having to remember the changes, you can now use DevTools to change your source code.
![Screenshot of DevTools integrated into Visual Studio Code](media/xxx.msft.png)

<!-- still an experiment for now 
*  Network Console. Inspecting the network traffic of your web product is already insightful, but often you need to make some changes to the requests to see why they fail. Using the Network Console you can change and replay any of the request and you can make detailed API calls.
![Network Console showing options of how you can change a network call](media/xxx.msft.png)
-->

<!-- ====================================================================== -->
## Next steps

As a demo tour of Microsoft Edge DevTools, open these demo webpages and follow the steps in the linked articles:

* [Sample code for DevTools](sample-code/sample-code.md)

<!--
* [Demo tour of DevTools](demo-tour/demo-tour-of-microsoft-edge-devtools.md)
-->
