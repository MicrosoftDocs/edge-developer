---
description: The latest experimental features in Microsoft Edge for Web Apps
title: Experimental features | Progressive Web Apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/13/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, experiment, progressive web apps, web apps, PWAs, PWA
---
# Experimental features in Progressive Web Apps (PWAs)  

Microsoft Edge provides access to experimental features that are still in development.  To determine if each feature is ready and when to release each, test and [provide feedback](#providing-feedback-on-experimental-features).  

Experimental features are available in all channels of Microsoft Edge, but the latest experimental features are only available in the Microsoft Edge Canary channel.  

## Turn on experimental features  

To turn on \(or off\) experimental features in Microsoft Edge, complete the following steps.  
  
1.  Open Microsoft Edge.   
    
    > [!NOTE]
    > Ensure you use a Microsoft Edge version that has the Experiment listed in this article.  Navigate to [Experimental features](#features-that-are-available-to-test).  
    
1.  Navigate to `edge://flags`.  
1.  Navigate to the relevant experiment.  
1.  Choose the dropdown menu next to the experiment description and choose `Enabled`.  
    
    :::image type="complex" source="../media/turn-on-experimental-flag.png" alt-text="Choose Enabled to turn on an experiment" lightbox="../media/turn-on-experimental-flag.png":::
       Choose **Enabled** to turn on an experiment  
    :::image-end:::  
    
    > [!NOTE]
    > Each experiment usually has a dropdown menu to choose the following values.  If an experimental feature doesn't have an entry on **Experiments**, instructions are provided to start Microsoft Edge with that feature using the command-line.
    > 
    > *   `Default`  
    > *   `Disabled`  
    > *   `Enabled`  
    
1.  Restart Microsoft Edge.  
    
### Origin Trials  

Microsoft Edge sometimes uses origin trials to test features for specific domains or websites.  You may want to use an origin trial for your website to apply a specific feature.  If you're a website owner, you may enroll in an origin trial.  An origin trial provides features to a percentage of Microsoft Edge users who visit your website.

For more information about Origin Trials, navigate to [Microsoft Edge Origin Trials Developer Console][MicrosoftDeveloperMicrosoftEdgeOriginTrials].  
    
> [!NOTE]
> Experimental features are constantly updated and may cause performance issues.  To turn off an experimental feature, navigate to [Turn on experimental features](#turn-on-experimental-features), navigate to the experiment, and then choose `Disabled`.  

## Features that are available to test  

The following list describes the new experimental web app features that are available to test and validate on Microsoft Edge.  

| Feature | Microsoft Edge version | Platform |  
|:--- |:--- |:--- |  
| [URI Protocol Handling](#uri-protocol-handling) | 91 or later | Windows and Linux |    
| [URL Link Handling](#url-link-handling) | 91 or later | Windows|
| [Window Controls Overlay for Desktop Apps](#window-controls-overlay-for-installed-desktop-web-apps) | 91 or later | Windows 10|   
| [Run on OS Login](#run-on-os-login) | 88 or later | All |  
| [Shortcuts](#shortcuts) | 87 or later | All |  
| [File Handling](#file-handling) | 83 or later | All Desktop |  

## URI Protocol Handling  

A uniform resource identifier \(URI\) may be used to define more than just links to webpages and web content using the HTTP or FTP protocol.  URIs may be used to describe links to anything that you codify into a schema.  For example, the `mailto://` protocol is used to describe an email link and the operating system \(OS\) or browser decides which webpage or app should handle that protocol.  

For more information about existing browser-based support, navigate to [Web-based protocol handlers][MdnDocsWebApiNavigatorRegisterprotocolhandlerWebBasedProtocolHandlers].  

This feature allows you to complete the following actions.  

*   Register your PWA with the host OS using the manifest of your web app
*   Declare that a PWA handles a specific URI protocol  
    
After you register a PWA as a protocol handler, when a user chooses a hyperlink with a specific scheme such as `mailto://` or `web+music://` from a browser or a native app, the registered PWA is activated by the OS and receives the URI.  

This feature requires you to update the web app manifest to include a `protocol_handlers` array, in the array you need to specify two fields:  

*   `protocol`:  The protocol to handle the request, for example `mailto` or `web+jngl`.  
*   `url`: The HTTPS URI in the app scope that handles the protocol.  In the future, the URI starting with the protocol handlers scheme is planned to replace the `%s` token.  
    
Update your manifest to support the protocol that you want to register.  After you turn on this feature, Microsoft Edge completes the following actions.  

1.  Detects changes in the manifest  
1.  Registers the app for the protocol  
    
If more than one app registers a protocol, the user is presented with a prompt.  The user chooses the appropriate app from the list presented by the OS or browser.  

To preview protocol handling in Microsoft Edge on Windows, navigate to [Turn on experimental features](#turn-on-experimental-features) and turn on **Desktop PWA Protocol handling**.  

For more information about origin trial is running for protocol handlers, navigate to [Register for Web App Protocol Handler Registration][MicrosoftDeveloperMicrosoftEdgeOriginTrialsWebAppProtocolHandlerRegistrationRegistration].  

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
 
## URL Link Handling  

A uniform resource locator \(URL\) is a type of URI.  Create a more engaging experience when Progressive Web Apps \(PWAs\) register as handlers for https URIs.  PWAs may request to launch when associated URIs are activated.  For example, if a user chooses a link to a news story from an email message.  An associated PWA to display news stories is automatically launched to handle the activation of the link.  

This feature allows you to register a PWA with the browser using the web app manifest and declare that the browser handles specific links.  To register a PWA with the browser, add the optional `url_handlers` member to the manifest file.  The `url_handlers` member is an `object[]` that groups the origins of URIs that the app wishes to handle.  

Link handling is validated by the browser using a `web-app-origin-association` JSON file that is located on the origin.  The origin file further fine-tunes the included or excluded paths at the origin.  For detailed instructions about testing the URL handler, navigate to [PWAs as URL Handlers][GithubWicgPwaUrlHandlerBlobMainExplainerMd].  

To preview URL link handling in Microsoft Edge on Windows, navigate to [Turn on experimental features](#turn-on-experimental-features) and turn on **Desktop PWA URL Handling**.  

### Example of the url_handlers in the manifest  

The following code snippet is an example web app manifest with the `url_handlers` member.  

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

A PWA matches a URI for URL handling if the URI matches one of the origin strings in `url_handlers` and the browser validates that the origin agrees to allow this app handle such a URI.  

The `url_handlers` member contains an origin that encompasses the scope and other unrelated origins of the requesting PWA.  Not restricting URIs to the same scope or domain as the requesting PWA allows you to use different domain names for the same content but handle them with the same PWA.  

#### Wildcard matching  

Use the wildcard character \(`*`\) to match one or more characters.  

A wildcard prefix is used in origin strings of the `url_handlers` member to match for different subdomains.  The prefix must be `*.` for this usage.  The `https` scheme is assumed when you use a wildcard prefix.  

For example, the `url_handlers` member value is set to `*.contoso.com` matches `tenant.contoso.com` and `www.tenant.contoso.com`, but doesn't match `contoso.com`.  

## Window Controls Overlay for installed desktop web apps  

To create an immersive title bar like a native app for your desktop installed web app, the **Window Controls Overlay** feature completes the following actions.  
    
1.  Removes the system reserved title bar.  It usually spans the width of the client frame.  
1.  Replaces it with an overlay.  It contains just the critical system required window controls necessary for a user to control the window itself.  
    
After it provides an overlay, the entire web client area is available for you to use.  This feature includes a manifest update.  It provides ways for you to determine the size and position of the overlay to help you arrange content.  

To preview the Window Controls Overlays in Microsoft Edge for Windows 10, navigate to [Turn on experimental features](#turn-on-experimental-features) and navigate to **Desktop PWA Window Controls Overlay**.   

### Examples of title bar area customization  

This feature is based on the ability in native apps to customize the title bar.  You may customize a title bar for important app actions or notifications.  Review the following examples for Microsoft Visual Studio Code and Microsoft Teams.  

#### Visual Studio Code  

Microsoft Visual Studio Code is a popular editor built on Electron that ships on multiple desktop platforms.  

The following example displays how Visual Studio Code uses the title bar to maximize available screen real estate to include the current file name and top-level menu structure in the title bar.  

:::image type="complex" source="../media/visual-studio-code-title-customization.png" alt-text="An example of the title bar in Visual Studio Code" lightbox="../media/visual-studio-code-title-customization.png":::
   An example of the title bar in Visual Studio Code  
:::image-end:::  

#### Microsoft Teams  

Workplace collaboration and communication tool Microsoft Teams is also built with Electron and available on multiple desktop platforms.  In the following example, Microsoft Teams displays `back` and `forward` navigation buttons, a search box, and user profile controls.  

:::image type="complex" source="../media/teams-title-customization.png" alt-text="An example of the title bar in Microsoft Teams" lightbox="../media/teams-title-customization.png":::
   An example of the title bar in Microsoft Teams  
:::image-end:::  

### Overlay Window Controls on a Frameless Window  

To maximize the addressable area for web content, the browser creates a frameless window.  A frameless window removes all browser UI, except for the window controls provided as an overlay.  The window controls overlay allows users to still minimize, maximize, restore, and close the app.  It also provides access to relevant browser controls using the web app menu.  For Chromium-based browsers, the overlay includes the following controls.  

*   A draggable region the same width and height of each of the window control buttons  
*   The **Settings and more** \(...\) button  
*   The window control buttons minimize, maximize, restore, and close  
    
Besides the previously listed controls, the UI displayed in the overlay is dynamically resized in the following scenarios.  

*   When an installed web app is launched, the origin of the webpage displays to the left of the **Settings and more** \(...\) menu for a few seconds and then disappears.  
*   If a user interacts with an extension using the **Settings and more** \(...\) menu, the icon of the extension displays in the overlay to the left of the three-dot menu.  After you exit any extension dialog, the icon is removed from the overlay.  
    
| Language direction | Overlay location | Details |  
|:--- |:--- |:--- |  
| Left-to-right \(LTR\) | Upper left of the client area | The controls are flipped |  
| Right-to-left \(RTL\) | Upper right corner of the client area |  |  

> [!IMPORTANT]
> The overlay is always on top of the Z-index of the web content and accepts all user input without flowing it through to the web content.  

### Working around the Window Controls Overlay  

Your web content must be aware of the reserved area for the controls overlay.  Ensure the reserved area doesn't expect user interaction.  Query the browser for the bounding rectangle and visibility of the controls overlay.  The information is provided to you through JavaScript APIs and CSS environment variables.  

#### JavaScript APIs  

A new `windowControlsOverlay` object on the `window.navigator` property allows you to query the bounding rectangle of the controls overlay.  

The `windowControlsOverlay` object has the following two objects.  

*   `getBoundingClientRect()` returns a `DOMRect` object.  The `DOMRect` object represents the area under the window controls overlay.  
*   `visible` is a boolean that indicates that the controls overlay is rendered and displayed.  
    
> [!IMPORTANT]
> For privacy reasons, the `windowControlsOverlay` isn't accessible to `iframe` elements in the web content.  

Whenever the overlay is resized, a `geometrychange` event runs on the `navigator.windowControlsOverlay` object to notify the client to recalculate the content layout.  The recalculated content layout is based on the new bounding rectangle of the overlay.  

#### CSS Environment Variables  

Besides the JavaScript API, you may use CSS to query the bounding rectangle of the controls overlay.  Use the following four new CSS environment variables to accomplish to query.  

*   `titlebar-area-x`  
*   `titlebar-area-y`  
*   `titlebar-area-width`  
*   `titlebar-area-height`  
    
### Define Draggable Regions in Web Content  

Users expect to grab and drag the upper region of a window.  To accommodate the expectation, declare specific parts of the web content as draggable.  
To specify an element is draggable, use the WebKit-proprietary `-webkit-app-region` CSS property.  The CSS working group continues efforts to standardize the `app-region` property.  

### Custom title bar example  

The following example displays how the new features create a web app with a custom title bar.  

:::image type="complex" source="../media/teams-title-customization-example.png" alt-text="Example of a custom title bar in Microsoft Teams" lightbox="../media/teams-title-customization-example.png":::
   Example of a custom title bar in Microsoft Teams  
:::image-end:::  

#### manifest.webmanifest  

In the manifest, set `display_override` array to  `window-controls-overlay`.  Set the `theme_color` to your choice of color for the title bar.  Set the display mode to an appropriate fallback for when either `display_override` or `window-controls-overlay` isn't supported.  

The following code snippet includes the recommended manifest updates.  

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

The following IDs represent the two main regions of the webpage.  

*   `titleBarContainer`  
*   `mainContent`  
    
The `div` element with the `titleBar` ID is set to `draggable` and the search box `input` child element is set to `nonDraggable`.  

```html
<div id="titleBar" class=" draggable">
    <span class="draggable">Example PWA</span>
    <input class="nonDraggable" type="text" placeholder="Search"></input>
</div>
```

In the `div` element with the `titleBarContainer` ID, the `div` with the `titleBar` ID represents the visible portion of the title bar area.  

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

The draggable and non-draggable regions are set using `-webkit-app-region: drag` and `-webkit-app-region: no-drag`.  

```css
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
```  

For the `body` element, margins are set to `0` to ensure the title bar reaches to the edges of the window.  

```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
}
```  

The `titleBarContainer` ID uses `position: absolute` and sets the `top` to `titlebar-area-inset-top`, which attaches the container to the top of the webpage.  The `bottom` is set to `titlebar-area-inset-bottom` and falls back to `100% - var(--fallback-title-bar-height)` if the window controls overlay isn't visible.  The background color of the `titleBarContainer` ID is the same as the `theme_color`.  The width is set to `100%`, so that the `div` element fills the width of the webpage and flows under the overlay when it's visible for a contiguous appearance.  

```css
#titleBarContainer {
    position: absolute;
    top: env(titlebar-area-y, 0);
    bottom: env(titlebar-area-height, calc(100% - var(--fallback-title-bar-height)));
    width: 100%;
    background-color:#254B85;
}
```  

The `titleBar` ID also uses `position: absolute` and `top: titlebar-area-inset-top` to attaches it to the top of the window.  By default, it consumes the full width of the window.  The `left` and `right` edges are set to `titlebar-area-inset-left` and `titlebar-area-inset-right` respectively, both fall back to `0` when the values aren't set.  It also sets `user-select: none` to prevent any attempts to drag the window consumed instead it highlights text in the `div` element.  

```css
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
```

The container for the `mainContent` ID is also fixed in place with `position: absolute` and is attached to the bottom of the webpage.  The `height` is set to `titlebar-area-inset-bottom` and falls back to `100% - var(--fallback-titlebar-height)` to fill the remaining space below the title bar.  It sets `overflow-y: scroll` to allow the contents to scroll vertically in the container.  

```css
#mainContent {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: env(titlebar-area-height, calc(100% - var(--fallback-title-bar-height)));
    overflow-y: scroll;
}
```

For cases where the browser doesn't support the window controls overlay, a CSS variable is added to set a default height for the title bar.  The bounds of the `titleBarContainer` and `mainContent` IDs are initially set to fill the entire client area, and you don't need to change it if the overlay isn't supported.  

The following code snippet includes all the recommended CSS updates.

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

Chromium-based browsers are testing and shaping this feature.  For more information including code examples, navigate to [Customize the window controls overlay of your PWA's title bar][WebDevWindowControlsOverlay].  

## Run On OS Login  

This feature allows you to configure your app to automatically launch when the user logs into Microsoft Windows.  Several classes of apps take advantage of the capability.  The classes of apps include email, chat, monitoring dashboard, and real-time data display apps.  The capability allows a user to engage with the apps as soon as the user logs into the OS.  This feature automatically starts the PWA the same way it's launched manually.  

> [!IMPORTANT]
> **Run on OS Login** is a [powerful feature][GithubW3cPermissionsPowerfulFeature].  Users should decide whether to turn on the capability for the installed web app.  

### Turn on Run On OS Login  

To preview the **Run On OS Login** capabilities for your PWA, navigate to [Turn on experimental features](#turn-on-experimental-features) and turn on **Desktop PWAs run on OS login**.  

:::image type="complex" source="../media/desktop-pwas-run-on-os-login-flag.png" alt-text="Turn on the Desktop PWAs run on OS Login experiment" lightbox="../media/desktop-pwas-run-on-os-login-flag.png":::
   Turn on the **Desktop PWAs run on OS login** experiment  
:::image-end:::  

### Turn on the feature for the installed web app  

To turn on the `Start app when you sign in` feature for an installed PWA, 

1.  Open Microsoft Edge.   
1.  Navigate to `edge://apps`.  
1.  Hover on your app.  
1.  Open the contextual menu \(right-click\) and then choose **Start app when you sign in**.  
    
    :::image type="complex" source="../media/turn-on-run-on-os-login-flag.png" alt-text="Use the contextual menu to turn on the Start app when you sign in feature in Microsoft Edge" lightbox="../media/turn-on-run-on-os-login-flag.png":::
       Use the contextual menu to turn on the **Start app when you sign in** feature in Microsoft Edge  
    :::image-end:::  
    
## Shortcuts  

`Shortcuts` is a new member of the manifest file.  It allows you to define links to parts, key webpages, or actions in your web app.  Microsoft Windows integrates it as **Jumplists**.  **Jumplists** define popup menus that appear when you on one of the following UI elements and open a contextual menu \(right-click\).  

*   A tile on the Start Menu  
*   An icon on the Taskbar  
    
When a user invokes a shortcut, the user navigates to the address specified by the `url` member of the shortcut.  
  
:::image type="complex" source="../media/jumplists-on-windows-10.png" alt-text="An example of Jumplists on Windows 10" lightbox="../media/jumplists-on-windows-10.png":::
   An example of **Jumplists** on Windows 10  
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

#### Properties of shortcuts  

The following properties define each shortcut.  

| Property | Details |  
|:--- |:--- |  
| `name` | A string that is displayed to the user on **Jumplists** or the contextual menu. |  
| `short_name` | A string that is displayed when insufficient space exists to display the full name of the shortcut. |  
| `description` | A string that describes the purpose of the shortcut.  It may be accessed by assistive technology. |  
| `url` | The URI in the web app that opens when the shortcut is activated. |  
| `icons` | A set of icons that represents the shortcut. |  

## File Handling  

The ability to register as a file type handler is in the experimentation phase.  You may specify the file types that your app handles in a manifest entry.  During installation, the user's host OS registers your app as a file handler for the listed file types.  Ensure the existence of the feature `launchQueue` in your apps startup code and that it handles the file.  

Chromium-based browsers are testing and shaping this feature.  For more information including code examples, navigate to [Let web applications be file handlers][WebDevFileHandling].  

To preview file handling in Microsoft Edge for Windows 10, navigate to [Turn on experimental features](#turn-on-experimental-features) and turn on **File Handling API**.  
    
## Providing feedback on experimental features  

To provide feedback on Microsoft Edge web app experiments.  

*   Send your feedback using **Settings and More** \(`...`\) > **Send Feedback to Microsoft**.  
*   Select `Alt`+`Shift`+`I`.  
    
:::image type="complex" source="../media/send-feedback-from-progressive-web-app.png" alt-text="Send Feedback from your PWA" lightbox="../media/send-feedback-from-progressive-web-app.png":::
   Send Feedback from your PWA  
:::image-end:::  

<!-- links -->  

[MicrosoftEdgeMain]: https://www.microsoft.com/edge "Microsoft Edge"  

[MicrosoftDeveloperMicrosoftEdgeOriginTrials]: https://developer.microsoft.com/microsoft-edge/origin-trials "Origin Trials | Microsoft Edge Developer"  
[MicrosoftDeveloperMicrosoftEdgeOriginTrialsWebAppProtocolHandlerRegistrationRegistration]: https://developer.microsoft.com/microsoft-edge/origin-trials/web-app-protocol-handler-registration/registration "Register for Web App Protocol Handler Registration | Microsoft Developer"  

[MdnDocsWebApiNavigatorRegisterprotocolhandlerWebBasedProtocolHandlers]: https://developer.mozilla.org/docs/Web/API/Navigator/registerProtocolHandler/Web-based_protocol_handlers "Web-based protocol handlers | MDN"  

[GithubW3cPermissionsPowerfulFeature]: https://w3c.github.io/permissions#powerful-feature "Powerful feature - Permissions | GitHub"  

[GithubWicgPwaUrlHandlerBlobMainExplainerMd]: https://github.com/WICG/pwa-url-handler/blob/main/explainer.md "PWAs as URL Handlers | GitHub"  

[WebDevFileHandling]: https://web.dev/file-handling "Let web applications be file handlers | web.dev"  
[WebDevWindowControlsOverlay]: https://web.dev/window-controls-overlay "Customize the window controls overlay of your PWA's title bar | web.dev"  
