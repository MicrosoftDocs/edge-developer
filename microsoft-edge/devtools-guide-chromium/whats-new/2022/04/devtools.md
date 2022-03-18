---
title: What's new in DevTools (Microsoft Edge 100)
description: What's new in DevTools (Microsoft Edge 100).
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 04/02/2022
---
# What's New in DevTools (Microsoft Edge 100)

The following sections list the announcements from the Microsoft Edge DevTools team.  To try the latest features of Microsoft Edge DevTools and of the Edge DevTools extension for Microsoft Visual Studio and Visual Studio Code, read these announcements.  To stay up to date with the latest and greatest features in your developer tools, download the [Microsoft Edge preview channels](https://www.microsoftedgeinsider.com/download) and [follow the Microsoft Edge DevTools team on Twitter](https://twitter.com/EdgeDevTools).

If you are on Windows, Linux, or macOS, consider using the Canary preview channel of Microsoft Edge as your default development browser.  The preview channels give you access to the latest features of Microsoft Edge DevTools.

To report a problem with DevTools or ask for a new feature, file an issue at the new [Microsoft Edge DevTools feedback repo](https://github.com/MicrosoftEdge/DevTools).
<!-- note: dup of first item below -->


<!-- ====================================================================== -->
## Join the Microsoft Edge DevTools community on GitHub

<!-- Title: Head to the new DevTools repo on GitHub to send ideas, feedback, suggestions, and bugs -->
<!-- Subtitle: You can file feedback, ask questions, and have discussions about DevTools in our GitHub repo. -->

We're excited to announce the new [MicrosoftEdge/DevTools: Feedback and discussions about Microsoft Edge Developer Tools (github.com)](https://github.com/MicrosoftEdge/DevTools) repo on GitHub!  This new repo is a place for our community of developers to send us ideas, feedback, suggestions, and tips to improve DevTools. We're eager to discuss with you how DevTools can better serve your needs and meet the challenges you face every day in building great web experiences.

![The DevTools feedback repo.](../../media/2022/04/devtools-feedback-repo.png)

<!-- Instructions for screenshot
(how to configure the DevTools correctly, a website or CodePen that the writer can use, where to navigate in the DevTools UI for the screenshot, etc.)
Navigate to MicrosoftEdge/DevTools: Feedback and discussions about Microsoft Edge Developer Tools (github.com)
Take a screenshot-->

Head to [our repo on GitHub](https://github.com/MicrosoftEdge/DevTools) to become a part of the Edge DevTools community.


<!-- ====================================================================== -->
## Fix: The Waterfall view in the Network tool now matches Visual Studio Code themes

<!-- Title: Themes from Visual Studio Code now apply to the Waterfall view -->
<!-- Subtitle: The Waterfall view of requests in the Network tool now match the VS Code themes. -->

In previous versions of Microsoft Edge, the Waterfall view of requests in the Network tool did not match the themes from Visual Studio Code that apply to the rest of the DevTools. In Microsoft Edge 100, this issue has been fixed.

![Waterfall view.](../../media/2022/04/waterfall-view.png)

<!-- Instructions for screenshot
(how to configure the DevTools correctly, a website or CodePen that the writer can use, where to navigate in the DevTools UI for the screenshot, etc.)
1. In Microsoft Edge Stable, go to edge://version and ensure you are on version 99.
2. Go to Microsoft Edge DevTools documentation.
3. Open DevTools > Settings > Theme, and then select either Solarized Light or Quiet Light themes.
4. Note, if the DevTools disappear and you get a blank box where the DevTools would normally be, use the keyboard to close the DevTools and then re-open them and they should be in the theme you set in Step 3.
5. Open the Network tool.
6. Refresh the page.
7. Take a screenshot and draw a red highlight box specifically around the Waterfall view.
Repeat the above steps in Microsoft Edge Dev (ensure you are on version 100+). There are also screenshots in the PR that you can use for reference: Pull request 6942401: Fix VS Code themes on Network Waterfall View -->

<!-- Video recording of feature in action
See attachments -->

For more information about using themes from Visual Studio Code in the DevTools, see [Apply a color theme to DevTools](../../../customize/theme.md).  For more information about the Waterfall view for requests in the Network tool, see [Network features reference](../../../network/reference.md#display-the-timing-relationship-of-requests).


<!-- ====================================================================== -->
## Announcements from the Chromium project

Microsoft Edge version 100 also includes the following updates from the Chromium project:

* [View and edit @supports at rules in the Styles pane](https://developer.chrome.com/blog/new-in-devtools-100/#supports)
* [Recorder panel improvements](https://developer.chrome.com/blog/new-in-devtools-100/#recorder)
   * [Support common selectors by default](https://developer.chrome.com/blog/new-in-devtools-100/#selector)
   * [Customize the recording's selector](https://developer.chrome.com/blog/new-in-devtools-100/#customize-selector)
   * [Rename a recording](https://developer.chrome.com/blog/new-in-devtools-100/#recorder-rename)
* [Preview class/function properties on hover](https://developer.chrome.com/blog/new-in-devtools-100/#properties)
* [Partially presented frames in the Performance panel](https://developer.chrome.com/blog/new-in-devtools-100/#perf)
* [Miscellaneous highlights](https://developer.chrome.com/blog/new-in-devtools-100/#misc)


<!-- ====================================================================== -->
<!-- uncomment if content is copied from developer.chrome.com to this page -->

<!-- > [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page for announcements from the Chromium project is [What's New in DevTools (Chrome 100)](https://developer.chrome.com/blog/new-in-devtools-100) and is authored by [Jecelyn Yeen](https://developers.google.com/web/resources/contributors#jecelynyeen) (Developer advocate working on Chrome DevTools at Google). -->



<!-- ====================================================================== -->
<!-- uncomment if content is copied from developer.chrome.com to this page -->

<!-- [![Creative Commons License.](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0). -->
