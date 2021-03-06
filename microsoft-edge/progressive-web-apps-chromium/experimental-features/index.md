---
description: The latest experimental features in Microsoft Edge for Web Apps
title: Experimental features
author: MSEdgeTeam
ms.author: msedgedevex
ms.date: 03/02/2021 
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, experiment, progressive web apps, web apps, PWAs, PWA
---
# Experimental features  

Microsoft Edge provides access to experimental features that are still in development.  You may test and [provide feedback](#providing-feedback-on-experimental-features) on these features to help us determine when and if to release them.  

While experimental features are available in all channels of Microsoft Edge, you will get the latest experimental features using the Microsoft Edge Canary channel.  

## Turn on experimental features  

To turn on \(or off\) experimental features in Microsoft Edge, complete the following steps.  

  
1.  Open the Microsoft Edge flags page by navigating to `edge://flags` using the address bar. Make sure you are using a version of Microsoft Edge that has the relevant feature flag listed in this article (see [Experimental features](#experimental-features)).

1.  Find the relevant experimental flag on the page and change it's status to `Enabled`. Each experiment will usually have it's own flag to toggle on or off.

1.  Close and restart Microsoft Edge  

:::image type="complex" source="../media/enable_flag.png" alt-text="Changing an experimental flag status" lightbox="../media/enable_flag.png":::
   Changing an experimental flag status  
:::image-end:::

If an experimental feature doesn't have an edge://flags entry, instructions will be provided on how to use the command line to start Microsoft Edge with that feature specifically enabled.
    
> [!NOTE]
> Experimental features are constantly being updated and may cause performance issues.  To turn off an experimental feature, open the **edge://flags** page and change the status of the feature to `Disabled`.  

## Experimental features  

The following sections describe the new experimental web app features that are available for testing and validation on Microsoft Edge.  

| Experimental feature | Microsoft Edge version | Platform 
|:--- |:--- | :--- 
| [URL Protocol Handling](#url-protocol-handling) | 91 or later | Windows 
| [URL Link Handling](#URL-link-handling) | 85 or later | Windows  
| [Window Controls Overlay for Installed Desktop Web Apps](#window-controls-overlay-for-installed-desktop-web-apps) | 91 or later | Windows, Mac 
| [Run on OS Login](#place-holder) | 87 or later | All |
| [Shortcuts](#place-holder) | 87 or later | All |
| [edge://apps Page Updates](#place-holder) | 87 or later | All |

### URL Protocol Handling  

URLs can be used to define more than just links to web pages and web content using the HTTP or FTP protocol - they can be used to describe links to anything you can codify into a schema. For example, the `mailto://` protocol is used to desicribe an email link and the operating system or browser can decide which application or site should handle that protocol. You can learn more about existing browser based support for [web based protocol handling here](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/registerProtocolHandler/Web-based_protocol_handlers). 

This feature allows you to register a PWA with the host operating system via the web app manifest, declaring that it can handle a specific URL protocol. After registering a PWA as a protocol handler, when a user clicks on a hyperlink with a specific scheme like `mailto://`, `ms-word://` or `web+music://` from a browser or a native app, the registered PWA would be activated by the operating system and receive the URL.

This feature requires you to update the web app manifest to include a `protocol_handlers` array, within the array you need to specify two fields:

*   `protocol`: Protocol to be handled e.g. `mailto`, `web+jngl`
*   `url`: HTTPS URL within the application scope that will handle the protocol. The %s token will be replaced by the URL starting with the protcol handlers scheme.

#### Example Manifest

In this example, a web app manifest declares that the app should be registered to handle the protocols `web+jngl` and `web+jnglstore`.

```json
{
  "name": "Jungle",
  "description": "A plant encyclopedia",
  "protocol_handlers": [
    {
      "protocol": "web+jngl",
      "url": "/lookup?type=%s"
    },
    {
      "protocol": "web+jnglstore",
      "url": "/shop?for=%s"
    }
  ],
  "icons": [
    {
      "src": "images/icons-44.png",
      "type": "image/png",
      "sizes": "44x44"
    },
    {
      "src": "images/icons-144.png",
      "type": "image/png",
      "sizes": "144x144"
    },
    {
      "src": "images/icons-192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
  ],
  "background_color": "#007f87",
  "display": "standalone",
  "start_url": "/",
}
```
You will need to update your manifest to support whatever protocol you'd like to register for. Once this feature is enabled, Microsoft Edge will detect the manifest change and register the application for the protocol. If more than one application has registered for a given protocol, the operating system or the browser will present a disambiguation selector to the user so that they can choose the appropriate application from the list. 


> [!IMPORTANT]
>To preview protocol handling in Microsoft Edge on Windows, look for and enable the edge://flags:
>**Desktop Web Apps support Protocol Handlers**
>
>Mac OS and Linux support is under development.
 

### URL Link Handling

Normally, tools such as **Elements** and **Network** may only open in the main panel that is located at the top of the DevTools.  Tools like **3D View** and **Issues** which normally only open in the **Drawer** panel that is located at the bottom of the DevTools.  After you choose the experiment, you may move tools between the top and bottom panels.  To move a tool, hover on the tab, open the contextual menu \(right-click\), and choose **Move to top** or **Move to bottom**.   

To preview protocol handling, look for:
**Desktop PWA URL Handling**
in edge://flags and Enable it.    


:::image type="complex" source="../media/experiments-move-panels.msft.png" alt-text="Moving tabs between panels" lightbox="../media/experiments-move-panels.msft.png":::
   Moving tabs between panels  
:::image-end:::  

<!--Available in Microsoft Edge version 85 and later.  -->  

### Window Controls Overlay for Installed Desktop Web Apps

To create an immersive, native like title bar for your desktop installed web application, the Window Contols Overlay feature removes the system reserved title bar that usually spans the width of the client frame and replaces it with an overlay that contains just the critical system required window controls necessary for a user to control the window itself. 

In providing an overlay, the entire web client area is available to the web developer to use. This feature includes a manifest update and provides ways for a developer to reason about the size and position of the overlay to arrange content around.
    
#### Examples of Title Bar Area Customization
The inspiration for this feature came from native applications where the developer can customize the title bar for important application actions or notificaitons. Here are a few examples:

**Visual Studio Code**

Visual Studio Code is a popular editor buit on Electron that ships on multiple desktop platforms. 

This example shows how VS Code uses the title bar to maximize available screen real estate to include the current file name and top level menu structure within the title bar space.

:::image type="complex" source="../media/VSCode.png" alt-text="Visual Studio Code title bar example" lightbox="../media/experiments-webhint.msft.png":::
   Visual Studio Code title bar customization example  
:::image-end:::  

**Microsoft Teams**

Workplace collaboration and communication tool Microsoft Teams is also built with Electron and available on multiple desktop platforms. In this example, Teams shows back/forward navigation buttons, a search box and user profile controls.

:::image type="complex" source="../media/MSTeams.png" alt-text="MS Teams title bar example" lightbox="../media/experiments-webhint.msft.png":::
   Microsoft Teams title bar customization example  
:::image-end:::  

#### Overlaying Window Controls on a Frameless Window
To provide the maximum addressable area for web content, the browser creates a frameless window, removing all browser UI with the exception of the window controls which are provided as an overlay.
The window controls overlay ensures users can still minimize, maximize or restore, and close the application. It also provides access to relevant brwooser controls via the web app menu. For Chromium based browsers the controls in the overlay are:
* A draggable region the same width and height of each of the window control buttons
* the "Settings and more" three-dot button
* the window control buttons minimize, maximize.resdtore and close.

There can be scenarios where the browser will show other content in  the controls overlay.  
* When an installed web app is launched, the origin of the page will display to the left of the three-dot menu for a few seconds, then disappear
* If a user interacts with an extension via the "Settings and more" menu, the icon of the extension will appear in the overlay to the left of the three-dot menu. After clicking out of any extension dialog, the icon is removed from the overlay.

For right to left based languages, the overlay is displayed in the upper right corner of the client area. For left to right based languages, the controls is flipped and is displayed on the upper left of the client area.

>[!IMPORTANT]
> The overlay will always be on top of the web content's Z order and will accept all user input without flowing it through to the web content.

#### Working Around the Window Controls Overlay
Your web content will need to be aware of the reserved area for the controls overlay and ensure that area isn't expecting user interaction. To accomplish this, you will need to query the browser for the bouding retangle and visibility of the controls overlay.  This information is provided to you through JavaScript APIs and CSS environment variables.

**JavaScript APIs**

A new object on the `window.navigator` property called `windowControlsOverlay` has been introduced to query the bounding rectangle of the controls overlay.

`windowControlsOverlay` has two objects:
* `getBoundingClientRect()` which returns a `DOMRect` representing the area under the window controls overlay. 
* `visible` a boolean to determine if the controls overlay has been rendered.

>[!IMPORTANT]
> For privacy reasons, the `windowControlsOverlay` will not be accessible to iframes within the web content

Whenever the overlay is resized, a `gemoetrychange` event will be fired on the `navigator.windowControlsOverlay` object to notify the client that it should recalculate the content layout based on the new bounding rectangle of the overlay. 

**CSS Environment Variables**

In addition to the JavaScript API above, the bounding rectangle of the controls overlay can also be queried using CSS. Four new CSS environment variables have been introduced to accomplish this:
* `titlebar-area-inset-top`
* `titlebar-area-inset-bottom`
* `titlebar-area-inset-left`
* `titlebar-area-inset-right`

#### Defining Draggable Regions in Web Content
Users expect to be able to grab and drag the upper region of a window and developers will need to accomodate that expectation by declaring certain parts of their web content as draggable. 
This is accomplished through a webkit prorprietary CSS property called `-webkit-app-region`. Effort to standardize the app-region property is ongoing with the CSS working group.  

>[!IMPORTANT]
>To enable this experimental feature, you must start Microsoft Edge with the following command line parameter:
>
> **--enable-features=WebAppWindowControlsOverlay,WebAppManifestDisplayOverride** 

#### Example

Below is an example of how these new features could be used to create a web application with a custom title bar. 

:::image type="complex" source="../media/CustomTitleBarExample.png" alt-text="Example of a custom title bar" lightbox="../media/CustomTitleBarExample.png":::
   Microsoft Teams title bar customization example  
:::image-end:::  

##### manifest.webmanifest
In the manifest, set `"display_override": ["window-controls-overlay"]`. Set the `theme_color` to be the desired color of the title bar. Set the display mode to an appropriate fallback for when either `display_override` or `window-controls-overlay` is not supported. 
```JSON
{
  "name": "Example PWA",
  "display": "standalone",
  "display_override": [ 
    "window-controls-overlay" 
  ],
  "theme_color": "#254B85"
}
```

#### index.html
There are two main regions below: the `titleBarContainer` and the `mainContent`. The `titleBar` is set to be `draggable` and the search box inside is set to be `nonDraggable`. 

Inside of the `titleBarContainer`, there is a `titleBar` element representing the visible portion of the title bar area.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Example PWA</title>
    <link rel="stylesheet" href="style.css">
    <link rel="manifest" href="./manifest.webmanifest">
  </head>
  <body>
    <div id="titleBarContainer">
      <div id="titleBar" class=" draggable">
        <span class="draggable">Example PWA</span>
        <input class="nonDraggable" type="text" placeholder="Search"></input>
      </div>
    </div>
    <div id="mainContent"><!-- The rest of the webpage --></div>
  </body>
</html>
```

#### style.css
The draggable regions are set using `-webkit-app-region: drag` and `-webkit-app-region: no-drag`. 

On the `body`, margins are set to 0 to ensure the title bar reaches to the edges of the window.

The `titleBarContainer` uses `position: absolute` and sets the `top` to `titlebar-area-inset-top`, fixing the container to the top of the page. The `bottom` is set to `titlebar-area-inset-bottom` or to fall back to `100% - var(--fallback-title-bar-height)` if the window controls overlay is not visible. The background color of the `titleBarContainer` is the same as the `theme_color`. The width is set to `100%` so that the div fills the width of the page, and flows under the overlay when it is visible for a seamless appearance.

The `titleBar` also uses `position: absolute` and `top: titlebar-area-inset-top` to pin it to the top of the window. By default, it consumes the full width of the window. The `left` and `right` edges are set to `titlebar-area-inset-left` and `titlebar-area-inset-right` respectively, both falling back to `0` when these values aren't set. It also sets `user-select: none` to prevent any attempts at dragging the window to be consumed instead by highlighting text inside of the div.

The container for the `mainContent` of the webpage is also fixed in place with `position: absolute` and is anchored to the bottom of the page. The `height` is set to `titlebar-area-inset-bottom`, or to fall back to `100% - var(--fallback-titlebar-height)`, filling in the remaining space below the title bar. It sets `overflow-y: scroll` to allow its contents to scroll vertically within the container.

For cases where the browser does not support the window controls overlay, a CSS variable is added to set a fallback title bar height. The bounds of the `titleBarContainer` and `mainContent` are initially set to fill the entire client area, and do not need to be changed if the overlay is not supported.

```css
:root {
  --fallback-title-bar-height: 40px;
}

.draggable {
  app-region: drag;
  /* Pre-fix app-region during standardization process */
  -webkit-app-region: drag;
}

.nonDraggable {
  app-region: no-drag;
  /* Pre-fix app-region during standardization process */
  -webkit-app-region: no-drag;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
}

#titleBarContainer {
  position: absolute;
  top: env(titlebar-area-inset-top, 0);
  bottom: env(titlebar-area-inset-bottom, calc(100% - var(--fallback-title-bar-height)));
  width: 100%;
  background-color:#254B85;
}

#titleBar {
  position: absolute;
  top: 0;
  display: flex;
  user-select: none;
  height: 100%;
  left: env(titlebar-area-inset-left, 0);
  right: env(titlebar-area-inset-right, 0);

  color: #FFFFFF;
  font-weight: bold;
  text-align: center;
}

#titleBar > span {
  margin: auto;
  padding: 0px 16px 0px 16px;
}

#titleBar > input {
  flex: 1;
  margin: 8px;
  border-radius: 5px;
  border: none;
  padding: 8px;
}

#mainContent {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: env(titlebar-area-inset-bottom, calc(100% - var(--fallback-title-bar-height)));
  overflow-y: scroll;
}
```


### Place Holder  

**New Feature placeholder**


## Previous experimental features  

*   [3D View][Devtools3dViewIndex] is now available and turned on by default in Microsoft Edge version 83 or later.  
*   [Turn on support to move tabs between panels][DevtoolsMoveTabs] is now available and turned on by default in Microsoft Edge version 85 or later.  
*   [Customize Keyboard Shortcuts][DevtoolsCustomKeyboardShortcuts] is now available and turned on by default in Microsoft Edge version 86 or later.  
*   [Emulation: Support dual screen mode][DevtoolsDeviceModeDualScreenAndFoldables] is now available and turned on by default in Microsoft Edge version 89 or later.  
*   [Turn on new CSS grid debugging features][DevtoolsCssGrid] is now available and turned on by default in Microsoft Edge version 89 or later.  
    
## Providing feedback on experimental features  

To provide feedback on Microsoft Edge web app experiments:  

*   Send your feedback using the **Send Feedback** menu item found in the `...` menu Or the keyboard shortcut `Alt-Shift-I` from within your application

:::image type="complex" source="../media/bing-devtools-send-feedback.msft.png" alt-text="The Send Feedback icon in Microsoft Edge DevTools" lightbox="../media/bing-devtools-send-feedback.msft.png":::
   The **Send Feedback** icon in Microsoft Edge DevTools  
:::image-end:::  


[MicrosoftEdge]: https://www.microsoft.com/edge "Microsoft Edge"  

