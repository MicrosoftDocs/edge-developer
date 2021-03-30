---
description: The latest experimental features in Microsoft Edge for Web Apps
title: Experimental features | Progressive Web Apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 03/16/2021 
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, experiment, progressive web apps, web apps, PWAs, PWA
---
# Experimental features in Progressive Web Apps

Microsoft Edge provides access to experimental features that are still in development.  You may test and [provide feedback](#providing-feedback-on-experimental-features) on these features to help to determine when and if to release them.  

While experimental features are available in all channels of Microsoft Edge, you will get the latest experimental features using the Microsoft Edge Canary channel.  

## Turn on experimental features  

To turn on \(or off\) experimental features in Microsoft Edge, complete the following steps.  
  
1.  Open the Microsoft Edge flags webpage by navigating to `edge://flags` using the address bar. Make sure you are using a version of Microsoft Edge that has the relevant feature flag listed in this article.  Navigate to [Experimental features](#experimental-features-in-progressive-web-apps).  
1.  Find the relevant experimental flag on the webpage and change it's status to `Enabled`. Each experiment will usually have it's own flag to toggle on or off.
1.  Close and restart Microsoft Edge  

:::image type="complex" source="../media/turn-on-experimental-flag.png" alt-text="Change an experimental flag status" lightbox="../media/turn-on-experimental-flag.png":::
   Change an experimental flag status  
:::image-end:::

If an experimental feature doesn't have an `edge://flags` entry, instructions will be provided on how to use the command line to start Microsoft Edge with that feature specifically turned on.

### Origin Trials
Microsoft Edge sometimes uses origin trials to test features on for particular domains/sites. If you are a site owner that would like to participate in an origin trial for your site with a particular feature, you can enrol to participate in an origin trial so that features are automatically enabled for a percentage of Microsoft Edge users visiting your site.

Learn more here: [Microsoft Edge Origin Trials](#https://developer.microsoft.com/en-us/microsoft-edge/origin-trials/)
    
> [!NOTE]
> Experimental features are constantly being updated and may cause performance issues.  To turn off an experimental feature, open the `edge://flags` webpage and change the status of the feature to `Disabled`.  

## Features Available to Test  

The following sections describe the new experimental web app features that are available for testing and validation on Microsoft Edge.  

| Feature | Microsoft Edge version | Platform |  
|:--- |:--- |:--- |  
| [URL Protocol Handling](#url-protocol-handling) | 91 or later | Windows |  
| [Window Controls Overlay for Installed Desktop Web Apps](#window-controls-overlay-for-installed-desktop-web-apps) | 91 or later | Windows 10|  
| [URL Link Handling](#url-link-handling) | 91 or later | Windows|  
| [Run on OS Login](#run-on-os-login) | 88 or later | All |  
| [Shortcuts](#shortcuts) | 87 or later | All |  
| [File Handling](#file-handling) | 83 or later | All Desktop|  

## Features Coming Soon  

This table includes features that are work in progress that may come out in a future release for testing.  

| Feature | Platform |  
|:--- |:--- |   
| [URL Protocol Handling](#url-protocol-handling) |  macOS, Linux |  
| [Window Controls Overlay for Installed Desktop Web Apps](#window-controls-overlay-for-installed-desktop-web-apps) |  macOS, Linux |  
| Improvements to App Management| All |  
| Support for Desktop Share Target| Windows 10 |  

## URL Protocol Handling  

URLs can be used to define more than just links to webpages and web content using the HTTP or FTP protocol - they can be used to describe links to anything you can codify into a schema. For example, the `mailto://` protocol is used to describe an email link and the operating system or browser can decide which webpage or app should handle that protocol. You can learn more about existing browser based support for [web based protocol handling here](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/registerProtocolHandler/Web-based_protocol_handlers). 

This feature allows you to register a PWA with the host operating system via the web app manifest, declaring that it can handle a specific URL protocol. After registering a PWA as a protocol handler, when a user chooses a hyperlink with a specific scheme like `mailto://` or `web+music://` from a browser or a native app, the registered PWA would be activated by the operating system and receive the URL.

This feature requires you to update the web app manifest to include a `protocol_handlers` array, within the array you need to specify two fields:

*   `protocol`: Protocol to be handled e.g. `mailto`, `web+jngl`  
*   `url`: HTTPS URL within the app scope that will handle the protocol. The `%s` token will be replaced by the URL starting with the protocol handlers scheme.  

### Example Manifest

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

You will need to update your manifest to support whatever protocol you'd like to register for. Once this feature is turned on, Microsoft Edge will detect the manifest change and register the app for the protocol. If more than one app has registered for a given protocol, the operating system or the browser will present a disambiguation selector to the user so that they can choose the appropriate app from the list. 

> [!IMPORTANT]
> To preview protocol handling in Microsoft Edge on Windows, look for and turn on the `edge://flags`:
> 
> **Desktop Web Apps support Protocol Handlers**
> 
> Origin trial is running for Protocol Handlers
> [Register Your Origin Here](#https://developer.microsoft.com/en-us/microsoft-edge/origin-trials/web-app-protocol-handler-registration/registration/)
>
> 
 
## URL Link Handling

Developers can create a more engaging experience if Progressive Web Apps \(PWAs\) are able to register as handlers for https uniform resource identifiers (URLs). This means that PWAs can request to be launched when associated URLs are activated. For example, a user may choose on a link to a news story from an e-mail. An associated PWA for viewing news stories would automatically be launched to handle the activation of the link.

This feature allows you to register a PWA with the browser via the web app manifest, declaring that it can handle specific links. To do this, you must add to the manifest file the optional `url_handlers` member. This member is an `object[]` that groups the origins of URLs that the app wishes to handle.

### Example Manifest

Example web app manifest with `url_handlers` member:

```json 
{
    "name": "Contoso Business App",
    "display": "standalone",
    "icons": [
        {
            "src": "images/icons-144.png",
            "type": "image/png",
            "sizes": "144x144"
        }
    ],
    "capture_links": "existing_client_event",
    "url_handlers" : [
        {
            "origin": "https://contoso.com"
        },
        {
            "origin": "https://conto.so"
        },
        {
            "origin": "https://*.contoso.com"
        }
    ]
}
```  

A PWA matches a URL for URL handling if the URL matches one of the origin strings in `url_handlers` and the browser is able to validate that the origin agrees to let this app handle such a URL. 

`url_handlers` can contain an origin that encompasses requesting PWA's scope and also other unrelated origins. Not restricting URLs to the same scope or domain as the requesting PWA allows the developer to use different domain names for the same content but handle them with the same PWA.

**Wildcard Matching**

The wildcard character `*` can be used to match one or more characters.

A wildcard prefix can be used in `url_handlers` origin strings to match for different subdomains. The prefix must be `*`. for this usage. The scheme is still assumed to be https when using a wildcard prefix.

For eg. `*.contoso.com` matches `tenant.contoso.com` and `www.tenant.contoso.com` but not `contoso.com`.

For detailed instructions on testing URL handler refer to the [explainer](https://github.com/WICG/pwa-url-handler/blob/main/explainer.md).


## Window Controls Overlay for Installed Desktop Web Apps

To create an immersive, native like title bar for your desktop installed web app, the Window Controls Overlay feature removes the system reserved title bar that usually spans the width of the client frame and replaces it with an overlay that contains just the critical system required window controls necessary for a user to control the window itself. 

In providing an overlay, the entire web client area is available to the web developer to use. This feature includes a manifest update and provides ways for a developer to reason about the size and position of the overlay to arrange content around.
    
### Examples of Title Bar Area Customization

The inspiration for this feature came from native apps where the developer can customize the title bar for important app actions or notifications. Here are a few examples:

**Visual Studio Code**

Visual Studio Code is a popular editor built on Electron that ships on multiple desktop platforms. 

This example shows how Visual Studio Code uses the title bar to maximize available screen real estate to include the current file name and top level menu structure within the title bar space.

:::image type="complex" source="../media/visual-studio-code-title-customization.png" alt-text="Visual Studio Code title bar example" lightbox="../media/visual-studio-code-title-customization.png":::
   Visual Studio Code title bar customization example  
:::image-end:::  

**Microsoft Teams**

Workplace collaboration and communication tool Microsoft Teams is also built with Electron and available on multiple desktop platforms. In this example, Teams shows back/forward navigation buttons, a search box and user profile controls.

:::image type="complex" source="../media/teams-title-customization.png" alt-text="MS Teams title bar example" lightbox="../media/teams-title-customization.png":::
   Microsoft Teams title bar customization example  
:::image-end:::  

### Overlaying Window Controls on a Frameless Window

To provide the maximum addressable area for web content, the browser creates a frameless window, removing all browser UI with the exception of the window controls which are provided as an overlay.
The window controls overlay ensures users can still minimize, maximize or restore, and close the app. It also provides access to relevant browser controls via the web app menu. For Chromium based browsers the controls in the overlay are:  

*   A draggable region the same width and height of each of the window control buttons  
*   the "Settings and more" three-dot button  
*   the window control buttons minimize, maximize, restore and close.  
    
There can be scenarios where the browser will show other content in  the controls overlay.  

*   When an installed web app is launched, the origin of the webpage will display to the left of the three-dot menu for a few seconds, then disappear  
*   If a user interacts with an extension via the **Settings and more** menu, the icon of the extension will appear in the overlay to the left of the three-dot menu.  After you exit any extension dialog, the icon is removed from the overlay.  
    
For right to left based languages, the overlay is displayed in the upper right corner of the client area. For left to right based languages, the controls is flipped and is displayed on the upper left of the client area.

>[!IMPORTANT]
> The overlay will always be on top of the web content's Z order and will accept all user input without flowing it through to the web content.  

### Working Around the Window Controls Overlay

Your web content will need to be aware of the reserved area for the controls overlay and ensure that area isn't expecting user interaction. To accomplish this, you will need to query the browser for the bounding rectangle and visibility of the controls overlay.  This information is provided to you through JavaScript APIs and CSS environment variables.

**JavaScript APIs**

A new object on the `window.navigator` property called `windowControlsOverlay` has been introduced to query the bounding rectangle of the controls overlay.

`windowControlsOverlay` has two objects:  

*   `getBoundingClientRect()` which returns a `DOMRect` representing the area under the window controls overlay.  
*   `visible` a boolean to determine if the controls overlay has been rendered.  
    
> [!IMPORTANT]
> For privacy reasons, the `windowControlsOverlay` will not be accessible to iframes within the web content

Whenever the overlay is resized, a `geometrychange` event will be fired on the `navigator.windowControlsOverlay` object to notify the client that it should recalculate the content layout based on the new bounding rectangle of the overlay. 

**CSS Environment Variables**

In addition to the JavaScript API above, the bounding rectangle of the controls overlay can also be queried using CSS. Four new CSS environment variables have been introduced to accomplish this:  

*   `titlebar-area-x`  
*   `titlebar-area-y`  
*   `titlebar-area-width`  
*   `titlebar-area-height`  
    
### Defining Draggable Regions in Web Content

Users expect to be able to grab and drag the upper region of a window and developers will need to accommodate that expectation by declaring certain parts of their web content as draggable. 
This is accomplished through a webkit proprietary CSS property called `-webkit-app-region`. Effort to standardize the app-region property is ongoing with the CSS working group.  

> [!IMPORTANT]
> To preview file handling in Microsoft Edge for desktop operating systems, look for and turn on the `edge://flags`:
> 
> **Desktop PWA Window Controls Overlay**
> 
> This experimental feature is off by default.

### Example

Below is an example of how these new features could be used to create a web app with a custom title bar. 

:::image type="complex" source="../media/teams-title-customization-example.png" alt-text="Example of a custom title bar" lightbox="../media/teams-title-customization-example.png":::
   Microsoft Teams title bar customization example  
:::image-end:::  

#### manifest.webmanifest

In the manifest, set `"display_override": ["window-controls-overlay"]`. Set the `theme_color` to be the desired color of the title bar. Set the display mode to an appropriate fallback for when either `display_override` or `window-controls-overlay` is not supported. 

```json
{
  "name": "Example PWA",
  "display": "standalone",
  "display_override": [ 
    "window-controls-overlay" 
  ],
  "theme_color": "#254B85"
}
```  

### index.html

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

### style.css

The draggable regions are set using `-webkit-app-region: drag` and `-webkit-app-region: no-drag`. 

On the `body`, margins are set to 0 to ensure the title bar reaches to the edges of the window.

The `titleBarContainer` uses `position: absolute` and sets the `top` to `titlebar-area-inset-top`, fixing the container to the top of the webpage. The `bottom` is set to `titlebar-area-inset-bottom` or to fall back to `100% - var(--fallback-title-bar-height)` if the window controls overlay is not visible. The background color of the `titleBarContainer` is the same as the `theme_color`. The width is set to `100%` so that the div fills the width of the webpage, and flows under the overlay when it is visible for a seamless appearance.

The `titleBar` also uses `position: absolute` and `top: titlebar-area-inset-top` to pin it to the top of the window. By default, it consumes the full width of the window. The `left` and `right` edges are set to `titlebar-area-inset-left` and `titlebar-area-inset-right` respectively, both falling back to `0` when these values aren't set. It also sets `user-select: none` to prevent any attempts at dragging the window to be consumed instead by highlighting text inside of the div.

The container for the `mainContent` of the webpage is also fixed in place with `position: absolute` and is anchored to the bottom of the webpage. The `height` is set to `titlebar-area-inset-bottom`, or to fall back to `100% - var(--fallback-titlebar-height)`, filling in the remaining space below the title bar. It sets `overflow-y: scroll` to allow its contents to scroll vertically within the container.

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
  top: env(titlebar-area-y, 0);
  bottom: env(titlebar-area-height, calc(100% - var(--fallback-title-bar-height)));
  width: 100%;
  background-color:#254B85;
}

#titleBar {
  position: absolute;
  top: 0;
  display: flex;
  user-select: none;
  height: 100%;
  left: env(titlebar-area-x, 0);
  right: env(titlebar-area-width, 0);
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
  height: env(titlebar-area-height, calc(100% - var(--fallback-title-bar-height)));
  overflow-y: scroll;
}
```  

## Run On OS Login  

Microsoft Windows offers the ability to configure an app to launch automatically when the user logs into their OS session. Certain class of apps, including email, chat, monitoring dashboards and real-time data display apps can take advantage of this capability. It allows users to engage with those apps as soon as they log into the OS. This feature will auto-start the PWA in the same way as if it were launched manually.

> [!IMPORTANT]
> Run on OS Login is a [powerful feature](https://w3c.github.io/permissions/#powerful-feature). Users should decide whether to turn on the capability for the installed web app. 

### Enabling Run On OS Login

To turn on Run On OS Login capabilities for your PWA, you should turn on the `Desktop PWAs run on OS login` flag and restart the browser.

:::image type="complex" source="../media/desktop-pwas-run-on-os-login-flag.png" alt-text="Desktop PWAs run on OS Login flag" lightbox="../media/desktop-pwas-run-on-os-login-flag.png":::
   `Desktop PWAs run on OS Login` flag  
:::image-end:::  

### Enabling or disabling the Capability

To toggle the `Run on OS Login` feature for an installed PWA, you can browse to the `edge://apps` webpage and hover on the desired installed app, open the contextual menu \(right-click\) and choose to grant it permission to run once the user logs in.

:::image type="complex" source="../media/turn-on-run-on-os-login-flag.png" alt-text="Turn on Run on OS Login for a PWA in Microsoft Edge" lightbox="../media/turn-on-run-on-os-login-flag.png":::
   Turn on Run on OS Login for a PWA in Microsoft Edge  
:::image-end:::  

## Shortcuts

`Shortcuts` is a new member of the manifest file. It allows you to define links to parts, key webpages, or actions within your web app. They are integrated on Microsoft Windows as 'Jumplists', which are popup menus that appear when your right-click a tile on the Start Menu or an icon on the Taskbar. When a user invokes a shortcut, they navigate to the address that is specified by that shortcut's ``url`` member. 
  
:::image type="complex" source="../media/jumplists-on-windows-10.png" alt-text="Jumplists on Windows 10" lightbox="../media/jumplists-on-windows-10.png":::
   Jumplists on Windows 10  
:::image-end:::  

### Shortcuts in the Manifest file

```json
"shortcuts" : [
  {
    "name": "Today's agenda",
    "url": "/today",
    "description": "List of events planned for today"
  },
  {
    "name": "New event",
    "url": "/create/event"
  },
  {
    "name": "New reminder",
    "url": "/create/reminder"
  }
]
```  

#### Item Values:

*   **name**:  A string that is displayed to the user on the jumplist or context menu.
*   **short_name**: A string that can be displayed where there is insufficient space to display the full name of the shortcut.
*   **description**: A string that describes the purpose of the shortcut. It might be used for assistive technology.
*   **url**: The URL within the web app that opens when the shortcut is activated.
*   **icons**: A set of icons that represent the shortcut.

## File Handling

The ability to register as a file type handler has been in experimentation phase for some time. By providing a manifest entry for the file types your app can handle, once installed, your app is registered with the host operating system as a file handler for those file types. You then check for the existence of the feature `launchQueue` within your apps startup code and handle the file.

Chromium based browsers are broadly testing and shaping this feature. You can find more information including code examples over at [web.dev](https://web.dev/file-handling/).

> [!IMPORTANT]
> To preview file handling in Microsoft Edge for desktop operating systems, look for and turn on the `edge://flags`:
> 
> **File Handling API**
> 
> This experimental feature is off by default.
  
    
## Providing feedback on experimental features  

To provide feedback on Microsoft Edge web app experiments:  

*   Send your feedback using the **Send feedback to Microsoft** menu item found in the `...` menu or select `Alt`+`Shift`+`I` from within your app
    
:::image type="complex" source="../media/send-feedback-from-progressive-web-app.png" alt-text="Send Feedback from PWA" lightbox="../media/send-feedback-from-progressive-web-app.png":::
   Send Feedback from PWA  
:::image-end:::  

<!-- links -->  

[MicrosoftEdgeMain]: https://www.microsoft.com/edge "Microsoft Edge"  
