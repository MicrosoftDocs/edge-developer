---
title: Enable App Actions on Windows for a PWA
description: How to author and test an App Action for the App Actions on Windows framework, for a Progressive Web App (PWA) that you've created.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: pwa
ms.date: 06/24/2025
---
# Enable App Actions on Windows for a PWA

You can author and test an App Action for the App Actions on Windows framework, for a Progressive Web App (PWA) that you've created.  An App Action on Windows is an individual unit of behavior that a Windows app can implement and register.  The App Action can then be accessed from other apps and experiences, seamlessly integrating into user workflows.

An app builds and registers each App Action, and then Windows apps and experiences can recommend registered App Actions to the user at contextually relevant times and locations within the user's workflow.

You can build Windows App Actions to increase discoverability and engagement of your app's features.

See also:
* [App Actions on Windows Overview](/windows/ai/app-actions/)

**Detailed contents:**

* [Recommended scenarios](#recommended-scenarios)
* [Define App Actions in the action definition manifest](#define-app-actions-in-the-action-definition-manifest)
   * [Properties supported in an action definition manifest](#properties-supported-in-an-action-definition-manifest)
   * [Supported Entity types for App Actions for PWAs](#supported-entity-types-for-app-actions-for-pwas)
* [How a PWA is launched through URI activation](#how-a-pwa-is-launched-through-uri-activation)
   * [uri in the action definition manifest](#uri-in-the-action-definition-manifest)
   * [Receive ValueSet data and map it to a share target](#receive-valueset-data-and-map-it-to-a-share-target)
* [Prerequisites for your PWA to support App Actions](#prerequisites-for-your-pwa-to-support-app-actions)
   * [share_target in the web app manifest](#share_target-in-the-web-app-manifest)
     * [Handle the entity of an App Action](#handle-the-entity-of-an-app-action)
   * [protocol_handlers in the web app manifest](#protocol_handlers-in-the-web-app-manifest)
   * [launch_handler in the web app manifest](#launch_handler-in-the-web-app-manifest)
* [Package a store PWA in Edge Stable](#package-a-store-pwa-in-edge-stable)
* [Package a store PWA in Edge Canary](#package-a-store-pwa-in-edge-canary)
* [Test App Actions for a PWA](#test-app-actions-for-a-pwa)
* [See also](#see-also)


<!-- ------------------------------ -->
#### Recommended scenarios

The Windows App Actions framework is for exposing and executing key pieces of app functionality, not generic user activities such as opening a right-click menu (context menu).  See [Recommended scenarios for App Actions](/windows/ai/app-actions#recommended-scenarios-for-app-actions) in _App Actions on Windows Overview_.


<!-- ====================================================================== -->
## Define App Actions in the action definition manifest

You define App Actions that your PWA supports in an action definition manifest file (such as `ActionsManifest.json`).  This is an action definition JSON file for App Actions on Windows.

The present article shows how to author an App Action that uses the sample PWA, [wami, the Web App to Manipulate Images](https://github.com/MicrosoftEdge/Demos/tree/main/wami).  The wami demo supports image manipulation tasks, such as resizing or applying post-processing styles.

The following example action definition manifest file (named `ActionsManifest.json`), defines a **Paint** App Action for the Paint feature of the wami sample app.  The Paint feature, referenced by the **Paint** App Action, generates an oil-painting-style version of the image.

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


<!-- ------------------------------ -->
#### Properties supported in an action definition manifest

The action definition manifest file (such as `ActionsManifest.json`) is a descriptive file which is used by Windows App Actions Runtime for an app, to declare the App Actions that the app supports.

For the definition of each supported JSON property, see [Action definition JSON properties](/windows/ai/app-actions/actions-json#action-definition-json-properties) in _Action definition JSON schema for App Actions on Windows_.

Under `Invocation`, only the `uri` type is supported.  The `com` type is not applicable for PWAs.


<!-- ------------------------------ -->
#### Supported Entity types for App Actions for PWAs

In the action definition manifest file (such as `ActionsManifest.json`), the `ActionEntityKind` enumeration specifies the types of entities that are supported by App Actions on Windows.

In the context of a JSON App Action definition, the entity kinds are string literals that are case-sensitive.  The supported entities are listed in [ActionEntityKind enumeration](/windows/ai/app-actions/actions-json#actionentitykind-enumeration) in _Action definition JSON schema for App Actions on Windows_.

`StreamingText` and `RemoteFile` are not yet supported for PWAs.  For `File`, `Photo`, `Document` and `Text` entity kinds, see [Entity properties](/windows/ai/app-actions/actions-json#entity-properties) in _Action definition JSON schema for App Actions on Windows_.


<!-- ====================================================================== -->
## How a PWA is launched through URI activation

When a PWA's App Action is called, the PWA App Action is launched by Windows through custom protocol URI activation.  A PWA must register for custom protocol handling by using the `protocol_handlers` field in the PWA's web app manifest, such as [Demos/wami/manifest.json](https://github.com/MicrosoftEdge/Demos/blob/main/wami/manifest.json).

Windows' `LaunchUriAsync(Uri, LauncherOptions, ValueSet)` method is used by the Action Framework for URI activation.  `LaunchUriAsync` doesn't return a value or error status.


<!-- ------------------------------ -->
#### `uri` in the action definition manifest

Use a custom protocol URI, not an HTTPS URI.

For a PWA that has multiple App Actions, use the syntax:

```json
"uri": "web+{app name}://{custom action name}"
```

For example:

```json
"uri": "web+wami://paint"
```

The above line is shown in context in [Define App Actions in the action definition manifest](#define-app-actions-in-the-action-definition-manifest), above.


<!-- ------------------------------ -->
#### Receive `ValueSet` data and map it to a share target

The activated protocol URI will be mapped to the `url` field of the share target data.

The input `ValueSet` will be converted to a valid JSON string and mapped to the `text` field of the share target data.  That enables Microsoft Edge to determine that the protocol handler launch represents an App Action.

The app's web app manifest (such as [Demos/wami/manifest.json](https://github.com/MicrosoftEdge/Demos/blob/main/wami/manifest.json)) must correctly configure the `share_target` field, to enable being launched as a share target for an App Action.  See [`share_target` in the web app manifest](#share_target-in-the-web-app-manifest), below.


<!-- ====================================================================== -->
## Prerequisites for your PWA to support App Actions

To correctly integrate your PWA with the App Actions on Windows framework, the following web app manifest members are required:

* `share_target`
* `protocol_handlers`
* `launch_handler`


<!-- ------------------------------ -->
#### `share_target` in the web app manifest

For a PWA to use App Actions, the `share_target` field must be present in the PWA's web app manifest file, such as [Demos/wami/manifest.json](https://github.com/MicrosoftEdge/Demos/blob/main/wami/manifest.json).

* The method must be "POST".
* The `enctype` must be `multipart/form-data`.
* `text` and `url` in `params` are required to support App Actions. 
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


<!-- ---------- -->
###### Handle the entity of an App Action

The entity of an App Action is passed to the PWA through POST share data.  To handle POST share data, you can use or combine the following approaches:

* Handle POST share data by using server-side code. 

* In a service worker, use a fetch event listener to intercept the HTTP POST request.  This provides a better experience for offline users.  See:

  * [share_target - Receiving share data using POST](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Manifest/Reference/share_target#receiving_share_data_using_post)
  * [share_target - Receiving shared files](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Manifest/Reference/share_target#receiving_shared_files)

The following code is from the wami demo's example service worker handler in [Demos/wami/sw.js](https://github.com/MicrosoftEdge/Demos/blob/main/wami/sw.js), to support App Action launch for the app:

```javascript
// Extract data
const data = {
   text: formData.get('text') || '',
   url: formData.get('url') || ''
};
const files = formData.getAll('windowsActionFiles');
```

Explanation of the `formData` keys:

* **text:** A JSON string that lists all input entities.  The input parameter value must be identical to the value you set in your PWA's web app manifest `share_target.params.text`.  The file paths that are contained in **text** are safe to consume.  To protect users' privacy, Edge sanitizes any user-supplied path information before it reaches your service worker, leaving only the file name.

* **url:** The protocol URI (for example, `web+wami://paint` in the sample) that identifies which App Action triggered the launch.  The input parameter value must be identical to the value that you set in the PWA's web app manifest `share_target.params.url`.

* **files:** File objects attached to the App Action invocation. 


<!-- ------------------------------ -->
#### `protocol_handlers` in the web app manifest

For a PWA to use App Actions, the `protocol_handlers` field must be present in the PWA's web app manifest file (such as [Demos/wami/manifest.json](https://github.com/MicrosoftEdge/Demos/blob/main/wami/manifest.json)).  The `protocol_handlers.protocol` field must match the first part of the `invocation.uri` in the action definition manifest file (such as `ActionsManifest.json`).

Example `protocol_handlers` declaration, from [Demos/wami/manifest.json](https://github.com/MicrosoftEdge/Demos/blob/main/wami/manifest.json):

```json
"protocol_handlers": [{
   "protocol": "web+wami",
   "url": "./?url=%s"
}]
```

The matching `invocation.uri` field from `ActionsManifest.json`:

```json
"invocation": {
   "type": "Uri",
   "uri": "web+wami://paint"
},
```

The above snippet is shown in context in [Define App Actions in the action definition manifest](#define-app-actions-in-the-action-definition-manifest), above.

See also:
* [Handle protocols in a PWA](./handle-protocols.md)


<!-- ------------------------------ -->
#### `launch_handler` in the web app manifest

If you want to keep a single PWA window, you can set [launch_handler](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Manifest/Reference/launch_handler) as `navigate-existing` in your PWA's web app manifest file (such as [Demos/wami/manifest.json](https://github.com/MicrosoftEdge/Demos/blob/main/wami/manifest.json)).

Example declaration:

```json
"launch_handler": {
   "client_mode": " navigate-existing"
}
```

The above code is not in [Demos/wami/manifest.json](https://github.com/MicrosoftEdge/Demos/blob/main/wami/manifest.json).


<!-- ====================================================================== -->
## Package a store PWA in Edge Stable

At the current stage, your PWA needs to be packaged as a Microsoft Store PWA, to be called by the Windows App Actions framework.  You must use Microsoft Edge 137 or greater.

The Stable release of Edge 137 will be available on May 29, 2025.  If you'd like to try it out before May 29, 2025, you can package your PWA in Edge Canary; see [Package a store PWA in Edge Canary](#package-a-store-pwa-in-edge-canary), below.

1. Upgrade to Edge Stable 137 version.  (Edge 137 stable will be available after May 29, 2025.)

1. Package your PWA for [PWABuilder.com](https://www.pwabuilder.com); see [Package your PWA for the Store](./microsoft-store.md#package-your-pwa-for-the-store) in _Publish a PWA to the Microsoft Store_.

1. In **All settings**, scroll down to **Actions – Enable Actions** at the bottom.

1. Make sure your PWA's web app manifest file (such as [Demos/wami/manifest.json](https://github.com/MicrosoftEdge/Demos/blob/main/wami/manifest.json)) has `protocol_handlers` and `share_target` fields.  PWABuilder.com will run a check, and if either field is missing from the app's web app manifest, the **Enable Actions** checkbox will be greyed out.

1. In the **Actions** section, click **Choose File**, and upload the action definition manifest file (such as `ActionsManifest.json`) that you prepared for your PWA.

1. Click the **Download** button.

1. Unzip your download archive. Install it by running `install.ps1`.

1. Launch your PWA by clicking the PWA icon.

1. Test your PWA actions locally by following [Test App Actions for a PWA](#test-app-actions-for-a-pwa), below, to validate the functionality.

1. Open the the Actions definition JSON file.<!-- todo: file name & location? -->

1. Set the initial availability of the app action<!-- todo: of which app action?  `#edge-app-actions-on-windows-for-web-apps`? --> to `false`, as described in [Set initial availability](/windows/ai/app-actions/actions-availability#set-initial-availability) in _Toggle availability of an App Action for Windows_.

   The feature `#edge-app-actions-on-windows-for-web-apps`<!-- todo: which feature?  name of feature? --> is disabled by default, because this is a new feature in the Edge browser and is currently in Developer <!--todo: change to "Origin"?  link to OT?--> Trial stage.  Therefore, before publishing your package, we recommend the above step.  If you don't set the initial availability of the app action to `false`, your action will only work if the user manually goes to `edge://flags` in Microsoft Edge and then enables the feature flag `#edge-app-actions-on-windows-for-web-apps`.

   When the feature<!--todo: which feature?--> is officially rolled out (later in 2025), Microsoft Edge will automatically switch the actions <!--todo: which actions?--> from `Disabled` to `Enabled`, allowing end users to utilize your app's actions without requiring any further changes on your part.

1. Publish your PWA, per [Publish a PWA to the Microsoft Store](/microsoft-edge/progressive-web-apps-chromium/how-to/microsoft-store).


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
   * `packageId`: Not needed if you won't publish the Edge Canary version of your app to the store; can be an empty string.
   * `url`: Your PWA's url.
   * `publisher.displayName`: The publisher's name.  Not needed if you won't publish the Edge Canary version of your app to the store; can be an empty string.
   * `publisher.commonName`: Your Publisher ID.  Not needed if you won't publish the Edge Canary version of your app to the store; can be an empty string.
   * `startUrl`: Your PWA's `startUrl`.

   Example JSON listing that you can copy and paste into the text field of the [PWABuilder.Windows.Chromium tester](https://pwabuilder-windows-docker.azurewebsites.net/):

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

1. Upload the action definition manifest file (such as `ActionsManifest.json`), and then click the **Download** button.

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

* [Receiving shared content](./share.md#receiving-shared-content)
* [Publish a PWA to the Microsoft Store](./microsoft-store.md) 
   * [Package your PWA for the Store](./microsoft-store.md#package-your-pwa-for-the-store) in _Publish a PWA to the Microsoft Store_.

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
   * [Demos/wami/sw.js](https://github.com/MicrosoftEdge/Demos/blob/main/wami/sw.js) - supports AI Action launch.
