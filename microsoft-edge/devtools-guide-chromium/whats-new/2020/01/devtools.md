---
title: What's new in DevTools (Microsoft Edge 81)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/17/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
<!-- Copyright Kayce Basques 

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  --> 







# What's New In DevTools (Microsoft Edge 81) 



## Announcements from the Chromium project

The following sections announce additional features available in Microsoft Edge 81 that were contributed to the open source Chromium project.

### Moto G4 support in Device Mode 

After [enabling the Device Toolbar][DeviceToolbar] you can now simulate the dimensions of a Moto G4 viewport from the **Device** list.

> ##### Figure 1 
> Simulating a Moto G4 viewport
> ![Simulating a Moto G4 viewport][ImageMotoG4]  

Click [Show Device Frame][DeviceFrame] to show the Moto G4 hardware around the viewport.

> ##### Figure 2 
> Showing the Moto G4 hardware
> ![Showing the Moto G4 hardware][ImageMotoG4Frame]  

Related features:

* Open the [Command Menu][CommandMenu] and run the `Capture screenshot` command to take a screenshot of the viewport that includes the Moto G4 hardware (after enabling **Show Device Frame**).
* [Throttle the network and CPU][ThrottleNetworkAndCpu] to more accurately simulate a mobile user's web browsing conditions.

Chromium issue [#924693][crbug924693]  

### Cookie-related updates 

#### Blocked cookies in the Cookies pane 

The Cookies pane in the Application panel now displays blocked cookies with a yellow background.

> ##### Figure 3 
> Blocked cookies in the Cookies pane of the Application panel
> ![Blocked cookies in the Cookies pane of the Application panel][BlockedCookies]  

Chromium issue [#1030258][crbug1030258]  

#### Cookie priority in the Cookie pane 

The Cookies tables in the Network and Application panels now include a **Priority** column.

>[!CAUTION]
> Chromium 81 browsers like Microsoft Edge are the only browsers that support cookie priority.

Chromium issue [#1026879][crbug1026879]  

#### Edit all cookie values 

All cells in the Cookie tables are editable now, except cells in the **Size** column because that column represents the network size of the cookie, in bytes. See [Fields][CookiesFields] for an explanation of each column.

> ##### Figure 4
> Editing a cookie value
> ![Editing a cookie value][EditCookie]  

#### Copy as Node.js fetch to include cookie data 

Right-click a network request and select **Copy** > **Copy as Node.js fetch** to get a
`fetch` expression that includes cookie data.

> ##### Figure 5
> Copy as Node.js fetch
> ![Copy as Node.js fetch][CopyFetch]  

Chromium issue [#1029826][crbug1029826]  

## More accurate web app manifest icons 

Previously, the Manifest pane in the Application panel would perform its own requests in order to
display web app manifest icons. DevTools now shows the exact same manifest icon that Microsoft Edge uses.

<!-- 
TODO: add back when string has been fixed for Edge branding
> ##### Figure 6
> Icons in the Manifest pane
> ![Icons in the Manifest pane][ManifestIcon]   
-->

Chromium issue [#985402][crbug985402]  

## Hover over CSS content properties to see unescaped values 

Hover over the value of a `content` property to see the unescaped version of the value.

For example, in this [demo][CSSContentDemo] when you inspect the `p::after` pseudo-element you see an
escaped string in the Styles pane:

> ##### Figure 7
> The escaped string
> ![The escaped string][EscapedString]   

When you hover over the `content` value you see the unescaped value:

> ##### Figure 8
> The unescaped value
> ![The unescaped value][UnescapedString]   

## More detailed source map errors in the Console 

The Console now provides more detail on why a source map failed to load or parse. Previously it just provided an error without explaining what went wrong.

> ##### Figure 9
> A source map loading error in the Console
> ![A source map loading error in the Console][SourcemapError]  

## Setting for disabling scrolling past the end of a file 
<!-- ZOHER, PICK UP HERE TOMORROW -->
<!-- Open [Settings][Settings] and then disable 
**Preferences** > **Sources** > **Allow scrolling past end of file** to disable the default UI behavior
that allows you to scroll well past the end of a file in the **Sources** panel. -->

## Feedback   



To discuss the new features and changes in this post, or anything else related to DevTools:  

*   Send your feedback using the **Feedback** icon in the DevTools 

> ##### Figure 18
> The **Feedback** icon in the Microsoft Edge DevTools  
> ![The **Feedback** icon in the Microsoft Edge DevTools][ImageFeedbackIcon]  

*   Tweet at [@EdgeDevTools][PostTweetEdgeDevTools]
*   Submit a suggestion to [The Web We Want][TheWebWeWant]
*   File bugs on this document in the [edge-developer][GitHubMicrosoftDocsEdgeDeveloperNewIssue] repository

## Download the Microsoft Edge preview channels   

If you are on Windows or macOS, consider using the [Microsoft Edge preview channels][MicrosoftEdgePreviewChannels] as your default development browser. The preview channels give you access to the latest DevTools features.

<!-- <<../../_shared/devtools-feedback.md>>

<<../../_shared/canary.md>>

<<../../_shared/discover.md>> -->



<!-- image links -->  

[ImageMotoG4]: ../../images/2020/01/motog4.msft.png "Figure 1: Simulating a Moto G4 viewport" 
[ImageMotoG4Frame]: ../../images/2020/01/motog4frame.msft.png "Figure 2: Showing the Moto G4 hardware" 
[BlockedCookies]: ../../images/2020/01/blockedcookies.msft.png "Figure 3: Blocked cookies in the Cookies pane of the Application panel"
[EditCookie]: ../../images/2020/01/editcookie.msft.png "Figure 4: Editing a cookie value"
[CopyFetch]: ../../images/2020/01/fetchcookies.msft.png "Figure 5: Copy as Node.js fetch"
[EscapedString]: ../../images/2020/01/escapedstring.msft.png "Figure 7: The escaped string"
[UnescapedString]: ../../images/2020/01/unescapedstring.msft.png "Figure 8: The unescaped value"
[SourcemapError]: ../../images/2020/01/sourcemap.msft.png "Figure 9: A source map loading error in the Console"
[ImageFeedbackIcon]: ../../images/2019/12/feedback-icon.msft.png "Figure 10: The **Feedback** icon in the Microsoft Edge DevTools"


<!-- links -->  

[DeviceToolbar]: ../../../device-mode/index.md#simulate-a-mobile-viewport "Simulate a mobile viewport with Device Mode in Microsoft Edge DevTools"
[DeviceFrame]: ../../../device-mode/index.md#show-device-frame "Select Show device frame to show the physical device frame around the viewport."
[CommandMenu]: ../../../command-menu/index.md "Run Commands With The Microsoft Edge DevTools Command Menu"  
[ThrottleNetworkAndCpu]: ../../../device-mode/index.md#throttle-the-network-and-cpu "Throttle network and CPU to more accurately simulate a mobile user's web browsing conditions."
[crbug924693]: https://crbug.com/924693 "924693: Feature Request: Add Moto G4 To Device Mode List"
[crbug1030258]: https://crbug.com/1030258 "1030258"
[crbug1026879]: https://crbug.com/1026879 "1026879: Cookie tab in the dev console doesn't show priority anymore"
[CookiesFields]: ../../../storage/cookies.md#fields "The fields in the Cookies table"
[crbug1029826]: https://crbug.com/1029826 "1029826: network tab -> right click to request -> copy -> copy as fetch does not copy cookies"
[crbug985402]: https://crbug.com/985402 "985402: web app manifest icon error strings are confusing"
[CSSContentDemo]: https://mathiasbynens.github.io/css-dbg-stories/css-escapes.html "Demo for unescaped CSS content"
[PostTweetEdgeDevTools]: https://aka.ms/tweet/edgedevtools "@EdgeDevTools | Post a Tweet"  
[GitHubMicrosoftDocsEdgeDeveloperNewIssue]: https://aka.ms/edgedevtoolsdocs/feedback "New Issue - MicrosoftDocs/edge-developer"  
[TheWebWeWant]: https://aka.ms/webwewant "The Web We Want"

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/updates/2020/01/devtools/index) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools & Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  