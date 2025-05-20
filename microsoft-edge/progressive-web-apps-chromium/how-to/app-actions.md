---
title: Enable App Actions on Windows for a PWA
description: How to author and test an App Action for the App Actions on Windows framework, for a Progressive Web App (PWA) that you've created.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: pwa
ms.date: 05/19/2025
---
# Enable App Actions on Windows for a PWA

You can author and test an App Action for the App Actions on Windows framework, for a Progressive Web App (PWA) that you've created.

An App Action on Windows is an individual unit of behavior that a Windows app can implement and register.  The App Action can then be accessed from other apps and experiences, seamlessly integrating into user workflows.

App Actions are used for Windows apps and non-Windows apps.

See also:
* [App Actions on Windows Overview](/windows/ai/app-actions/)


<!-- ====================================================================== -->
## About App Actions

<!-- todo: are there App Actions other than Windows App Actions? -->

An App Action is an atomic unit of functionality.  An app builds and register each App Action, and then Windows or other apps can recommend registered App Actions to the user at contextually relevant times and locations within the user's workflow.

You can build Windows App Actions to increase discoverability and engagement of your app's features by using app-to-app and agentic interactions.  The Windows App Actions framework makes it possible to integrate your app with other apps or with AI agents.

The Windows App Actions framework is for exposing and executing key pieces of app functionality, not generic user activities such as opening a right-click menu (context menu).  See [Recommended scenarios for App Actions](/windows/ai/app-actions#recommended-scenarios-for-app-actions) in _App Actions on Windows Overview_.


<!-- ====================================================================== -->
## Define the App Actions that your PWA supports, in ActionsManifest.json

This guide illustrates how to author an App Action that uses a sample PWA, [wami, the Web App to Manipulate Images](https://github.com/MicrosoftEdge/Demos/tree/main/wami).  The wami demo supports image manipulation tasks, such as resizing or applying post-processing styles.

The following example `ActionsManifest.json` file defines a **Paint** App Action for the Paint feature of the wami sample app.  The Paint feature, referenced by the **Paint** App Action, generates an oil-painting-style version of the image.

```json
{
   "version": 1,
   "actions": [{
      "id": "Wami.Paint",
      "description": "Convert the image to oil paint style",
      "kind": "Search",
      "inputs": [{
         "name": "File",
         "kind": "Photo"
        }],
      "outputs": [],
      "invocation": {
         "type": "Uri",
         "uri": "web+wami://paint"
      },
      "inputCombinations": [{
         "inputs": [ "File" ],
         "description": "Photo to be converted to oil paint style."
      }]
   }]
}
```

As the input, the **Paint** App Action accepts the image file that user selected.

The **Paint** App Action returns the stylized output.


<!-- ====================================================================== -->
## Properties supported in ActionsManifest.json

`ActionsManifest.json` is a descriptive file which is used by Windows App Actions Runtime for an app, to declare the App Actions that the app supports.

For the definition of each supported JSON property, see [Action definition JSON properties](/windows/ai/app-actions/actions-json#action-definition-json-properties) in _Action definition JSON schema for App Actions on Windows_.

Under `Invocation`, only the `uri` type is supported.  The `com` type is not applicable for PWAs.


<!-- ====================================================================== -->
## Supported Entity types for App Actions for PWAs

The `ActionEntityKind` enumeration specifies the types of entities that are supported by App Actions on Windows.

In the context of a JSON App Action definition, the entity kinds are string literals that are case-sensitive.  The supported entities are listed in [ActionEntityKind enumeration](/windows/ai/app-actions/actions-json#actionentitykind-enumeration) in _Action definition JSON schema for App Actions on Windows_.

`StreamingText` and `RemoteFile` are not yet supported for PWA.  For `File`, `Photo`, `Document` and `Text` entity kinds, see [Entity properties](/windows/ai/app-actions/actions-json#entity-properties) in _Action definition JSON schema for App Actions on Windows_.


<!-- ====================================================================== -->
## How a PWA is launched through URI activation

When a PWA's App Action is called, the PWA App Action is launched by Windows through custom protocol URI activation.  A PWA must register for custom protocol handling by using the `protocol_handlers` field in the PWA's web app manifest, such as [Demos/wami/manifest.json](https://github.com/MicrosoftEdge/Demos/blob/main/wami/manifest.json).

Windows' `LaunchUriAsync(Uri, LauncherOptions, ValueSet)` method is used by the Action Framework for URI activation.  `LaunchUriAsync` doesn't return a value or error status.


<!-- ====================================================================== -->
## The URI field in ActionsManifest.json

Use a custom protocol URI, not an HTTPS URI.

For a PWA that has multiple App Actions, use the syntax:

```json
"uri": "web+{app name}://{custom action name}"
```

For example:

```json
"uri": "web+wami://paint"
```

That line is shown in context in [Define the App Actions that your PWA supports, in ActionsManifest.json](#define-the-app-actions-that-your-pwa-supports-in-actionsmanifestjson), above.


<!-- ====================================================================== -->
## Receive ValueSet data and map it to a Share Target

The activated protocol URI will be mapped to the `url` field of the share target data.

The input `ValueSet` will be converted to a valid JSON string and mapped to the `text` field of the share target data.  That enables Microsoft Edge to determine that the protocol handler launch represents an App Action.

The app's web app manifest (such as [Demos/wami/manifest.json](https://github.com/MicrosoftEdge/Demos/blob/main/wami/manifest.json)) must correctly configure the `share_target` field, to enable being launched as a share target for an App Action.  See [Web Manifest validation for `share_target`](#web-manifest-validation-for-share_target), below.


<!-- ====================================================================== -->
## Web Manifest validation for `protocol_handlers`

For a PWA to use App Actions, the `protocol_handlers` field must be present in the PWA's manifest file (such as [Demos/wami/manifest.json](https://github.com/MicrosoftEdge/Demos/blob/main/wami/manifest.json)), and the protocol field must be the same as the invocation uri in the `ActionsManifest.json` file.

Example `protocol_handlers` declaration, from [Demos/wami/manifest.json](https://github.com/MicrosoftEdge/Demos/blob/main/wami/manifest.json):

```json
"protocol_handlers": [{
   "protocol": "web+wami",
   "url": "./?url=%s"
}]
```

See also:
* [Handle protocols in a PWA](./handle-protocols.md)


<!-- ====================================================================== -->
## Web Manifest validation for `share_target`

For a PWA to use App Actions, the `share_target` field must be present in the PWA's manifest file, such as [Demos/wami/manifest.json](https://github.com/MicrosoftEdge/Demos/blob/main/wami/manifest.json).

* The method must be "POST".
* The `enctype` must be `multipart/form-data`.
* `title`, `text` and `url` in `params` are required.
* `files` is optional.  You can omit `files` if you don't want your PWA to support the normal _share target_ feature.

Example `share_target` declaration, from [Demos/wami/manifest.json](https://github.com/MicrosoftEdge/Demos/blob/main/wami/manifest.json):

```json
"share_target": {
   "action": "./share-target",
   "method": "POST",
   "enctype": "multipart/form-data",
   "params": {
      "title": "title",
      "text": "text",
      "url": "url"
   }
}
```

See also:
* [Receiving shared content](./share.md#receiving-shared-content)


<!-- ====================================================================== -->
## Web Manifest validation for `launch_handler`

If you want to keep a single PWA window, you can set [launch_handler](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Manifest/Reference/launch_handler) as `navigate-existing` in your PWA's manifest file (such as [Demos/wami/manifest.json](https://github.com/MicrosoftEdge/Demos/blob/main/wami/manifest.json)).

Example declaration:

```json
"launch_handler": {
   "client_mode": " navigate-existing"
}
```

The above code is not in [Demos/wami/manifest.json](https://github.com/MicrosoftEdge/Demos/blob/main/wami/manifest.json).


<!-- ====================================================================== -->
## Accept entity info on Windows

You can use or combine the following approaches:

* Handle POST share data by using server-side code.
   * For online users.

* Use a fetch event listener to intercept the HTTP <!-- todo: POST? --> request.  This approach allows accessing the data in a service worker.
   * This provides a better experience for offline users.

To use a service worker to handle POST share data:
<!-- todo:
does this apply to both approaches above?
use same wording as one of the above options.  which of the above options is this about?
For the App Action scenario of using a service worker (approach 2?) to handle POST (approach 1?) share data, 
-->
* [share_target - Receiving share data using POST](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Manifest/Reference/share_target#receiving_share_data_using_post)
* [share_target - Receiving shared files](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Manifest/Reference/share_target#receiving_shared_files)

The following code is from the wami demo's example service worker handler, to support AI Action launch for the app.  This code is from [Demos/wami/sw.js](https://github.com/MicrosoftEdge/Demos/blob/main/wami/sw.js):

```csharp
// Extract data
const data = {
   title: formData.get('title') || '',
   text: formData.get('text') || '',
   url: formData.get('url') || ''
};
const files = formData.getAll('windowsActionFiles');
```

The above code uses the following `formData`:

<!-- todo
* **title:** 
-->

* **text:** `formData[<share_target.params.text>]`: All entity info with JSON format.  The users' file path will be sanitized.<!-- todo: what is formData[<share_target.params.text>], where is that code from?  how does that relate to text: formData.get('text') above? -->

* **url:** `formData[<share_target.params.url>]`: The invocation uri, through which you can know which App Action this launch came from and handle related parameters if needed.

* **files:** `formData["windowsActionFiles"]`: All files' data from the App Action.


<!-- ====================================================================== -->
## Package a store PWA in Edge Stable

At the current stage, your PWA needs to be packaged as a Microsoft Store PWA, to be called by the Windows App Actions framework.  You must use Microsoft Edge 137 or greater.

The Stable release of Edge 137 will be available on May 29, 2025.  If you'd like to try it out before May 29, 2025, you can package your PWA in Edge Canary; see [Package a store PWA in Edge Canary](#package-a-store-pwa-in-edge-canary), below.

1. Upgrade to Edge Stable 137 version.  (Edge 137 stable will be available after May 29, 2025.)

1. Package your PWA for [PWABuilder.com](https://www.pwabuilder.com); see [Package your PWA for the Store](./microsoft-store.md#package-your-pwa-for-the-store) in _Publish a PWA to the Microsoft Store_.

1. In **All settings**, scroll down to **Actions – Enable Actions** at the bottom.

1. Make sure your PWA's manifest (such as [Demos/wami/manifest.json](https://github.com/MicrosoftEdge/Demos/blob/main/wami/manifest.json)) has `protocol_handlers` and `share_target` fields.  PWABuilder.com will run a check, and if either field is missing from the app's web app manifest, the **Enable Actions** checkbox will be greyed out.

1. In the **Actions** section, click **Choose File**, and upload the `ActionsManifest.json` file that you prepared for your PWA.

1. Click the **Download** button.

1. Unzip your download archive.  Then you can [publish your PWA to the Microsoft Store](./microsoft-store.md) and install the app from the Store, or install it directly by running `install.ps1`.

1. Launch your PWA by clicking the PWA icon.


<!-- ====================================================================== -->
## Package a store PWA in Edge Canary

The Stable release of Edge 137 will be available on May 29, 2025; see [Package a store PWA in Edge Stable](#package-a-store-pwa-in-edge-stable), above.

Edge Canary gives a preview of the functionalities that's not available in stable yet.

If you want to try out App Actions for PWAs before May 29, 2025, you can package your PWA in Edge Canary, as follows:

1. Install [Edge Canary](https://www.microsoft.com/edge/download/insider) and upgrade to the latest version.

1. Get the **Package ID**, **Publisher ID**, and **Publisher display name** of your PWA; see [Publish a PWA to the Microsoft Store](./microsoft-store.md).

1. Go to [PWABuilder.Windows.Chromium tester](https://pwabuilder-windows-docker.azurewebsites.net/).

1. Enter your PWA configs in the input box, for the following fields:

   * `name`: Your PWA's name.
   * `packageId`: Not needed if you won't publish the Canary-bind app<!-- todo: is "Canary-bind app" meaningful? 3x --> to the store; can be an empty string.
   * `url`: Your PWA's url.
   * `publisher` > `displayName`: The publisher's name.  Not needed if you won't publish the Canary-bind app to the store; can be an empty string.
   * `publisher` > `commonName`: Your Publisher ID.  Not needed if you won't publish the Canary-bind app to the store; can be an empty string.
   * `startUrl`: Your PWA's `startUrl`.

   Example of a JSON listing:<!-- todo: which file?  where is this snippet from?  need a lead-in, to introduce each code snippet and give context: --><!-- todo: is this the complete file/ JSON object? -->

   ```json
   {
      "name": "Wami for Canary",
      "packageId": "",
      "url": "https://microsoftedge.github.io/Demos/wami",
      "version": "1.0.2",
      "allowSigning": true,
      "classicPackage": {
         "generate": true,
         "version": "1.0.0"
      },
      "publisher": {
         "displayName": "",
         "commonName": ""
      },
      "edgeChannel": "canary",
      "appUserModelId": "Microsoft.Canary_8wekyb3d8bbwe!MSEDGE",
      "generateModernPackage": true,
      "resourceLanguage": "EN-US",
      "startUrl": "https://microsoftedge.github.io/Demos/wami"
   }
   ```

   Replace the above attributes with your app's actual attributes.

1. Upload your `ActionsManifest.json` file, and then click the **Download** button.

1. Your download is a `.zip` archive that contains files such as `.msix` and `.msixbundle` files.  Unzip it and run `install.ps1` to install your PWA directly.

1. Click the icon for your PWA.

   Your PWA starts.

1. Launch Edge Canary, and then go to `edge://apps`.

   Your PWA is listed.

1. Click the **Details** button.

   Your PWA is indicated as installed from Microsoft Store.

Your PWA has now been installed as a Store PWA in Edge Canary.


<!-- ====================================================================== -->
## Test App Actions for a PWA

To test App Actions for your PWA:

1. Make sure your PWA has been set up and packaged successfully, as discussed in the above sections.

1. Make sure Windows is updated to support App Actions; see [Windows 11 Insider Preview Build 26120.4151 (Beta Channel)](https://blogs.windows.com/windows-insider/2025/05/19/announcing-windows-11-insider-preview-build-26120-4151-beta-channel/).

1. Make sure Microsoft Edge is updated to the latest version, and install your PWA successfully; see [Package a store PWA in Edge Stable](#package-a-store-pwa-in-edge-stable) or [Package a store PWA in Edge Canary](#package-a-store-pwa-in-edge-canary), above.

1. Launch Edge Canary or Edge Stable (whichever channel you installed the PWA on).

1. Go to `edge://flags`, search for **App Actions**, and locate the entry **Enable App Actions on Windows for web apps**.  (The flag name is `#edge-app-actions-on-windows-for-web-apps`.)

1. Change the status to **Enabled**, and then click the **Restart** button in the lower right.

1. Launch your PWA.

   Your PWA must be launched at least one time, to initialize your PWA for the App Action, before being called by the App Actions runtime.

1. Use the [App Actions Testing Playground app](/windows/ai/app-actions/actions-test-tool) to test the App Actions for your PWA.

1. Add an entity that that App Action needs.  For example, if the App Action processes images, add an image.  Then run the App Action.

   The PWA is launched, and executes the App Action.


<!-- ====================================================================== -->
## See also
<!-- all links in file -->

Local articles:
* [Receiving shared content](./share.md#receiving-shared-content)
* [Package your PWA for the Store](./microsoft-store.md#package-your-pwa-for-the-store) in _Publish a PWA to the Microsoft Store_.
* [Publish a PWA to the Microsoft Store](./microsoft-store.md) 

Windows articles:
* [App Actions on Windows Overview](/windows/ai/app-actions/)
   * [Recommended scenarios for App Actions](/windows/ai/app-actions#recommended-scenarios-for-app-actions) in _App Actions on Windows Overview_.
* [Action definition JSON schema for App Actions on Windows](/windows/ai/app-actions/actions-json)
   * [Action definition JSON properties](/windows/ai/app-actions/actions-json#action-definition-json-properties)
   * [ActionEntityKind enumeration](/windows/ai/app-actions/actions-json#actionentitykind-enumeration)
   * [Entity properties](/windows/ai/app-actions/actions-json#entity-properties)
* [App Actions Testing Playground app](/windows/ai/app-actions/actions-test-tool)
* [Windows 11 Insider Preview Build 26120.4151 (Beta Channel)](https://blogs.windows.com/windows-insider/2025/05/19/announcing-windows-11-insider-preview-build-26120-4151-beta-channel/) - blog post.

Sites:
* [Become a Microsoft Edge Insider](https://www.microsoft.com/edge/download/insider) - install a preview channel of Edge.
* [PWABuilder.com](https://www.pwabuilder.com)
* [PWABuilder.Windows.Chromium tester](https://pwabuilder-windows-docker.azurewebsites.net/)

MDN:
* [launch_handler](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Manifest/Reference/launch_handler) 
* [share_target](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Manifest/Reference/share_target)
   * [Receiving share data using POST](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Manifest/Reference/share_target#receiving_share_data_using_post) in _share_target_.
   * [Receiving shared files](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Manifest/Reference/share_target#receiving_shared_files) in _share_target_.

Demos repo:
* [wami, the Web App to Manipulate Images](https://github.com/MicrosoftEdge/Demos/tree/main/wami)
   * [Support AI Action launch for Wami Web App](https://github.com/MicrosoftEdge/Demos/blob/main/wami/sw.js) - `/wami/sw.js`.
