---
description: Learn how to create a Microsoft Edge extension
title: Creating an extension
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
ms.custom: seodec18
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# Creating A Microsoft Edge Extension  

[!INCLUDE [deprecation-note](../includes/deprecation-note.md)]  

In this guide, learn to create an extension for Microsoft Edge.  This example extension allows you to manipulate specific CSS for [docs.microsoft.com][MicrosoftDocs] pages including walking you through creation of a manifest file, the user interface, and background and content scripts.  

:::image type="complex" source="../media/color-changer_header.png" alt-text="Docs.microsoft.com body changed to blue":::
   Docs.microsoft.com body changed to blue
:::image-end:::

<!--![Docs.microsoft.com body changed to blue][ImageColorChangerHeader]  -->  

This tutorial assumes you have basic understanding of what a browser extension is and how it work.  For more imformation about the building blocks for extensions, see [Anatomy of an extension][MDNAnatomyExtension].  

Download the code for the [full sample on GitHub][GithubMicrosoftEdgeExtensionsDemosColorChanger].  

## Building the manifest file  

To begin, create a directory for your extension and name it `color-changer`.  

Inside the `color-changer` folder, create a file named `manifest.json`.  The `manifest.json` file is required for all extensions and provides important information for the extension, ranging from the extension name to the permissions.  

> [!NOTE] 
> This guide walks you through all the manifest keys you must use in this guide, but for a list of all supported and recommended manifest keys, see [Supported manifest keys][ExtensionsApisupportManifestKeys].  

Inside `manifest.json`, add the following code.  

```json
{
  "name": "Color Changer",
  "author": "Microsoft Edge Extension Developer",
  "version": "1.0",
  "description": "Change the color of the body on docs.microsoft.com",
  "permissions": [
    "*://docs.microsoft.com/*",
    "tabs"
  ], 
  "browser_action": {
    "default_icon": {
      "20": "images/color-changer20.png",
      "40": "images/color-changer40.png"
    },
    "default_title": "Color Changer",
    "default_popup": "popup.html"
  }
}
```  

### Manifest key definitions  

| Key | Details |  
|:--- |:--- |  
| [name][MDNManifestjsonName] | The name of the extension.  |  
| [author][MDNManifestjsonAuthor] | The author of the extension.  |  
| [version][MDNManifestjsonVersion] | The extension version number.  |  
| [description][MDNManifestjsonDescription] | The description of the extension displayed in the About section of the extension menu in Microsoft Edge.  |  
| [permissions][MDNManifestjsonPermissions] | An array of strings requesting permissions for the extension.  For your extension, you are requesting permissions to see the websites visited \("tabs"\) and to update content on URLs matching "`*://docs.microsoft.com/*`".  |  
| [browser_action][MDNManifestjsonBrowserAction] | Contains the information for an icon. The icon is placed on the Microsoft Edge toolbar, to the right of the address bar.  |  

#### browser_action Key definitions  

| Key | Details |  
|:--- |:--- |  
| `default_icon` | The icon that is used in the toolbar.  |  
| `default_title` | The text that is displayed when a user hovers over the icon in the toolbar.  |  
| `default_popup` | The path to the HTML file for the pop-up window.  |  

Now that you have created the manifest file, you need a user interface for the extension.  

## Creating the pop-up  

For your extension, create a pop-up for the user interface, like below.  

:::image type="complex" source="../media/color-changer_popup.png" alt-text="The pop-up interface of the extension":::
   The pop-up interface of the extension
:::image-end:::

<!--![The pop-up interface of the extension][ImageColorChangerPopup]  -->  

Create a file named `popup.html` in the root of your `color-changer` folder.  Paste the following code into `popup.html`.  

```html
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="css/styles.css" />
    </head>
    <body>
        <h1>Creating a Microsoft Edge Extension</h1>
        <p>Color Changer</p>
        <input id="aliceblue" type="button" value="Aliceblue" />
        <input id="cornsilk" type="button" value="Cornsilk" />
        <input id="reset" type="button" value="Reset" />
        <script src="js/popup.js"></script>
    </body>
</html>
```  

In `popup.html`, you create a title, a paragraph, and three buttons \(Aliceblue, Cornsilk, and Reset\).  

Now create a folder named `css` and inside create a file named `styles.css`.  Add the styles below.  

```css
/* main styles */
* {
    font-family: 'Segoe UI';
}

h1 {
    font-weight: 600;
    font-size: .9em;
}

p {
    font-weight: 500;
    font-size: .8em;
    margin-bottom: 10px;  
}
```  

This CSS gives our extension some basic styles.  Feel free to add more styles to customize your extension.  

Next, you must create the JavaScript file that interacts with the pop-up.  Create a `js` folder and a file named `popup.js` inside.  Update `popup.js` with the following code.  

```JavaScript
// get the buttons by id
let aliceblue = document.getElementById('aliceblue');
let cornsilk = document.getElementById('cornsilk');
let reset = document.getElementById('reset');

// use tabs.insertCSS to change header color on button click

// aliceblue
aliceblue.onclick = () => {
  browser.tabs.insertCSS({code: "body { background: aliceblue !important; }"});
};

// cornsilk
cornsilk.onclick = () => {
  browser.tabs.insertCSS({code: "body { background: cornsilk !important; }"});
};

// back to original
reset.onclick = () => {
  browser.tabs.insertCSS({code: "body { background: none !important; }"});
};
```  

In `popup.js`, the [tabs][MDNApiTabs] API allows you to interact with the tabs of the browser and inject script and styles into the page content.  Using the [tabs.insertCSS()][MDNApiTabsInsertcss] method, you inject the specified CSS into the page which changes the header on [docs.microsoft.com][MicrosoftDocs] to a different color when the specified button is clicked.  

Now that you have the basic pop-up functionality, add icons to the extension.  

## Adding icons  

Icons are used to represent the extension in the browser toolbar, the extensions menu, and other places.  Download the [icons for your extension on GitHub][GithubMicrosoftEdgeExtensionsDemosColorChangerImages]. For more information about extension icons in Microsoft Edge, see [Design Guide][ExtensionsGuidesDesignIcons].  

After you download the extension icons, save the icons in an `images` folder inside `color-changer`.  

The icon that appears in the toolbar is set using `default_icon` inside of the [browser_action][MDNManifestjsonBrowserAction] key, which you already added to your manifest file in an earlier section.  

The `icons` key defines which icons should be used in the Extensions settings menus.  Below, you are specifying multiple icons with different sizes to account for different screen resolutions.  The name of the icons, `25` and `48` are the heights in pixels of the icons.  

In the [manifest.json][GithubMicrosoftEdgeExtensionsDemosColorChangerManifestjson] file, include a top-level key for `icons`.  

```json
  "icons": {
    "25": "images/color-changer25.png",
    "48": "images/color-changer48.png"
  }
```  

### Manifest Key definitions  

| Key | Details |  
|:--- |:--- |  
| [icons][MDNManifestjsonIcons] | The icons for your extension with key-value pairs of image size in `px` and image path relative to the root directory of the extension. |  

> [!NOTE]
> Use the icons named `inactive##.png` located in the images folder later in this guide.  

## Testing the extension  

Now that you have added the user interface and created icons, test your extension.  Walk through the steps for [Adding an extension][ExtensionsGuidesAddingRemovingExtensionsAdding] to Microsoft Edge.  Afterwards, return to this guide.  

After you add your extension, navigate to any [docs.microsoft.com][MicrosoftDocs] page.  You should see the following pop-up after clicking on the browser action.  The color of the [docs.microsoft.com][MicrosoftDocs] body should also change color.  

:::row:::
   :::column span="1":::
      :::image type="complex" source="../media/color-changer_header_aliceblue.png" alt-text="Docs.microsoft.com header changed to Aliceblue":::
         Docs.microsoft.com header changed to Aliceblue
      :::image-end:::
      
      <!--![Docs.microsoft.com header changed to Aliceblue][ImageColorChangerHeaderAliceblue]  -->
   :::column-end:::
   :::column span="1":::
      :::image type="complex" source="../media/color-changer_header_cornsilk.png" alt-text="Docs.microsoft.com header changed to Cornsilk":::
         Docs.microsoft.com header changed to Cornsilk
      :::image-end:::
      
      <!--![Docs.microsoft.com header changed to Cornsilk][ImageColorChangerHeaderCornsilk]  -->
   :::column-end:::
:::row-end:::

If you encounter any errors or functionality that does not work, see the [Debugging extensions][ExtensionsGuidesDebuggingExtensions] guide or download the [full sample on GitHub][GithubMicrosoftEdgeExtensionsDemosColorChanger].  

## Adding content and background scripts  

Go one step further and add logic to disable the extension from working on pages outside the [docs.microsoft.com][MicrosoftDocs] domain.  

You must first create a [content script][MDNContentScripts].  Next, you must create content scripts that run in the context of a particular web page, are able to access the content of a web page, and are able to communicate with background scripts.  Inside of your `js` directory, create a file named `content.js` and add the following code.  

```javascript
// get the URL of the page
var url = document.location.href;

// if not on a docs.microsoft.com domain
if (url.indexOf("//docs.microsoft.com") === -1) {
    // send inactive icons
    browser.runtime.sendMessage({
        "iconPath20": "images/inactive20.png",
        "iconPath40": "images/inactive40.png"
    });
}
```  

This script gets the URL of the current page through `document.location.href` and verifies whether the current page is on the [docs.microsoft.com][MicrosoftDocs] domain.  If the page is not on the [docs.microsoft.com][MicrosoftDocs] domain \(for example  [https://www.bing.com/][Bing]\), the paths to the inactive icons \(grayed out icons\) are sent to the background script using [runtime.sendMessage()][MDNApiRuntimeSendmessage].  

You must update the [manifest.json][GithubMicrosoftEdgeExtensionsDemosColorChangerManifestjson] file to include the following `content_scripts` key.  

```json
  "content_scripts": [{
    "matches": [
        "<all_urls>"
    ],
    "js": ["js/content.js"],
    "run_at": "document_end"
}]
```  

### Manifest Key definitions  

| Key | Details |  
|:--- |:---- |  
| [content_scripts][MDNManifestjsonContentScripts] | Contains the information about which content scripts the browser should load. |  

#### content_scripts Key definitions  

| Key | Details |  
|:--- |:---- |  
| `matches` \(required\) | The URL pattern to match prior to loading the content script. |  
| `js` | The script that should be loaded on matching URLs. |  
| `run_at` | Specifies where the JavaScript files from the `js` key are injected. |  

Next, you must create a [background script][MDNAnatomyExtensionBackgroundScripts].  Background scripts run in the background of the browser, run independently of the lifetime of a web page or browser window, and are able to communicate with content scripts.  

Inside of your `js` folder, create a file named `background.js` and add the following code.  

```javascript
// listen for sendMessage() from content script
browser.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        // set the icon for the browser action from sendMessage() in content script
        browser.browserAction.setIcon({
            path: {
                "20": request.iconPath20,
                "40": request.iconPath40
            },
            tabId: sender.tab.id
        });
        // disable browser action for the current tab
        browser.browserAction.disable(sender.tab.id);
    });
```  

The [runtime.onMessage][MDNApiRuntimeOnmessage] method listens for [runtime.sendMessage()][MDNApiRuntimeSendmessage] from the content script.  If the domain of the page is not [docs.microsoft.com][MicrosoftDocs], then [browserAction.setIcon()][MDNApiBrowseractionSeticon] method sets the icon paths to the inactive images.  

The script also disables the browser action \([browserAction.disable][MDApiBrowseractionDisable]\), so that users are not able to click on the browser action outside of a [docs.microsoft.com][MicrosoftDocs] page.  

You must add the background script to the [manifest.json][GithubMicrosoftEdgeExtensionsDemosColorChangerManifestjson] file.  Add the following `background` key to your manifest.  

```json
"background": {
    "scripts": ["js/background.js"],
    "persistent": true
  }
```  

### Manifest Key definitions  

| Key | Details|  
|:--- |:--- |  
| [background][MDNManifestjsonBackground] | Contains the background scripts. |  

#### background Key definitions  

| Key | Details |  
|:--- |:--- |  
| `scripts` | The path to a JavaScript file. |  
| `persistent` (required) | This must be set to `true` or `false`.  If set to `true`, the background script is loaded and persists for the entire browsing section.  If set to `false`, the background script is loaded with a delay and persists for the browsing session. |  

Reload your extension and test again.  To reload your extension: click the **...** for settings and more in Microsoft Edge, click **Extensions**, click on your extension \(**Color Changer**\), and click **Reload extension**.  

Now, open a new tab or refresh an existing tab that is not a [docs.microsoft.com][MicrosoftDocs] page.  You should see the inactive icon and not be able to click on the browser action.  

Congratulations!  You created an extension for Microsoft Edge!  View the [full sample on GitHub][GithubMicrosoftEdgeExtensionsDemosColorChanger].  Continue reading to learn more about extensions.  

## Writing a more complex extension  

Want to write a more complex extension?  Take a look at the Beastify extension on MDN in the article, [Your second extension][MDNYourSecondWebextension].  The extension model for Microsoft Edge differs slightly from the extension model for Firefox, the Beastify extension created in [Your second extension][MDNYourSecondWebextension] was adapted to function in Microsoft Edge.  Check it out on [GitHub][GithubMicrosoftEdgeExtensionsDemosBeastify].  

While walking through the article on MDN, [Your second extension][MDNYourSecondWebextension], keep in mind the following sections.  

### APIs  

See the [Supported APIs][ExtensionsAPIsupportApis] page for a list of supported extensions APIs in Microsoft Edge.  

### Icon sizes  

Preferred extension icon sizes for Microsoft Edge are `20px`, `25px`, `30px`, and `40px`.  Other supported sizes are `19px`, `35px`, and `38px`.  For more info on icon sizes and best practices, see the [Design][ExtensionsGuidesDesign] guide.  

### JavaScript  

The extension model for Microsoft Edge does not support JavaScript Promises.  Instead, use callbacks.  For more examples of using callbacks in an extension, take a look at the  [Quick Print][GithubMicrosoftEdgeExtensionsDemosQuickPrint] and [Text Swap][GithubMicrosoftEdgeExtensionsDemosTextSwap] demos.  

Walk through the [Quick Print][GithubMicrosoftEdgeExtensionsDemosQuickPrint] example in the following video.  

> [!VIDEO https://channel9.msdn.com/Blogs/One-Dev-Minute/Adding-a-Background-Script-to-you-Edge-Extension/player]  

### Manifest.json  

*   The `author` key is required in Microsoft Edge  
*   The `activeTab` key is not supported in Microsoft Edge  

For more information on [Browser Extensions][MDNBrowserExtensions], see [MDN web docs][MDNWebDocs].  

<!-- image links -->  

<!--[ImageColorChangerHeader]: ../media/color-changer_header.png "Docs.microsoft.com body changed to blue"  -->  
<!--[ImageColorChangerPopup]: ../media/color-changer_popup.png "The pop-up interface of the extension"  -->  
<!--[ImageColorChangerHeaderAliceblue]: ../media/color-changer_header_aliceblue.png "[Docs.microsoft.com header changed to Aliceblue"  -->  
<!--[ImageColorChangerHeaderCornsilk]: ../media/color-changer_header_cornsilk.png "Docs.microsoft.com header changed to Cornsilk"  -->  

<!-- links -->  

[ExtensionsGuidesAddingRemovingExtensionsAdding]: ./adding-and-removing-extensions.md#adding-an-extension "Adding an Extension - Adding, moving, And Removing Extensions For Microsoft Edge | Microsoft Docs"  
[ExtensionsGuidesDebuggingExtensions]: ./debugging-extensions.md "Debugging Extensions | Microsoft Docs"  
[ExtensionsGuidesDesign]: ./design.md "Design Guidelines For Microsoft Edge Extensions | Microsoft Docs"  
[ExtensionsGuidesDesignIcons]: ./design.md#icons "Icons - Design Guidelines For Microsoft Edge Extensions | Microsoft Docs"  
[ExtensionsAPIsupportApis]: ../api-support/supported-apis.md " Supported APIs | Microsoft Docs"  
[ExtensionsApisupportManifestKeys]: ../api-support/supported-manifest-keys.md "Supported Manifest Keys | Microsoft Docs"  

[MicrosoftDocs]: https://docs.microsoft.com "Microsoft Docs"  

[MDNWebDocs]: https://developer.mozilla.org "MDN Web Docs"  
[MDNBrowserExtensions]: https://developer.mozilla.org/Add-ons/WebExtensions "Browser Extensions | MDN"  
[MDNAnatomyExtension]: https://developer.mozilla.org/Add-ons/WebExtensions/Anatomy_of_a_WebExtension "Anatomy of an extension | MDN"  
[MDNAnatomyExtensionBackgroundScripts]: https://developer.mozilla.org/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Background_scripts "Background scripts - Anatomy of an extension | MDN"  
[MDApiBrowseractionDisable]: https://developer.mozilla.org/Add-ons/WebExtensions/API/browserAction/disable "browserAction.disable() - API | MDN" 
[MDNApiBrowseractionSeticon]: https://developer.mozilla.org/Add-ons/WebExtensions/API/browserAction/setIcon "browserAction.setIcon() - API | MDN"  
[MDNApiRuntimeOnmessage]: https://developer.mozilla.org/Add-ons/WebExtensions/API/runtime/onmessage "runtime.onMessage - API | MDN"  
[MDNApiRuntimeSendmessage]: https://developer.mozilla.org/Add-ons/WebExtensions/API/runtime/sendMessage "runtime.sendMessage() - API | MDN"  
[MDNApiTabs]: https://developer.mozilla.org/Add-ons/WebExtensions/API/tabs "tabs - API | MDN"  
[MDNApiTabsInsertcss]: https://developer.mozilla.org/Add-ons/WebExtensions/API/tabs/insertCSS "tabs.insertCSS() - API | MDN"  
[MDNContentScripts]: https://developer.mozilla.org/Add-ons/WebExtensions/Content_scripts "Content scripts | MDN"  
[MDNManifestjsonAuthor]: https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json/author "author - manifest.json | MDN"  
[MDNManifestjsonBackground]: https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json/background "background - manifest.json | MDN"  
[MDNManifestjsonBrowserAction]: https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json/browser_action "browser_action - manifest.json | MDN"  
[MDNManifestjsonContentScripts]: https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json/content_scripts "content_scripts - manifest.json | MDN"  
[MDNManifestjsonDescription]: https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json/description "description - manifest.json | MDN"  
[MDNManifestjsonIcons]: https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json/icons "icons - manifest.json | MDN"  
[MDNManifestjsonName]: https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json/name "name - manifest.json | MDN"  
[MDNManifestjsonPermissions]: https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json/permissions "permissions - manifest.json | MDN"  
[MDNManifestjsonVersion]: https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json/version "version - manifest.json | MDN"  
[MDNYourSecondWebextension]: https://developer.mozilla.org/Add-ons/WebExtensions/Your_second_WebExtension "Your second extension | MDN"  

[Bing]: https://www.bing.com "Bing"  

[GithubMicrosoftEdgeExtensionsDemosBeastify]: https://github.com/MicrosoftEdge/MicrosoftEdge-Extensions-Demos/tree/master/beastify_edge "Beastify - MicrosoftEdge/MicrosoftEdge-Extensions-Demos | GitHub"  
[GithubMicrosoftEdgeExtensionsDemosColorChanger]: https://github.com/MicrosoftEdge/MicrosoftEdge-Extensions-Demos/tree/master/color_changer "Color Changer - MicrosoftEdge/MicrosoftEdge-Extensions-Demos | GitHub"  
[GithubMicrosoftEdgeExtensionsDemosColorChangerImages]: https://github.com/MicrosoftEdge/MicrosoftEdge-Extensions-Demos/tree/master/color_changer/images "Images - Color Changer - MicrosoftEdge/MicrosoftEdge-Extensions-Demos | GitHub"  
[GithubMicrosoftEdgeExtensionsDemosColorChangerManifestjson]: https://github.com/MicrosoftEdge/MicrosoftEdge-Extensions-Demos/blob/master/color_changer/manifest.json "Manifest.json - Color Changer - MicrosoftEdge/MicrosoftEdge-Extensions-Demos | GitHub"  
[GithubMicrosoftEdgeExtensionsDemosQuickPrint]: https://github.com/MicrosoftEdge/MicrosoftEdge-Extensions-Demos/tree/master/quick_print "Quick Print - MicrosoftEdge/MicrosoftEdge-Extensions-Demos | GitHub"  
[GithubMicrosoftEdgeExtensionsDemosTextSwap]: https://github.com/MicrosoftEdge/MicrosoftEdge-Extensions-Demos/tree/master/text_swap "Text Swap - MicrosoftEdge/MicrosoftEdge-Extensions-Demos | GitHub"  
