---
title: Enable App Actions on Windows for PWA
description: How to author and test an app action for the App Actions on Windows framework, for a Progressive Web App (PWA) that you've created.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: pwa
ms.date: 05/19/2025
---
# Enable App Actions on Windows for PWA
<!-- h2/h4/h5/h6 -->

**Detailed contents:**

* [Introduction](#introduction)
   * [What's App Actions on Windows](#whats-app-actions-on-windows)
   * [Why should you build an Action?](#why-should-you-build-an-action)
* [Get started](#get-started)
   * [Define the actions your PWA supports](#define-the-actions-your-pwa-supports)
      * [Prepare ActionsManifest.json](#prepare-actionsmanifestjson)
         * [Understanding the fields in ActionsManifest](#understanding-the-fields-in-actionsmanifest)
         * [Supported Entity types for PWA](#supported-entity-types-for-pwa)
      * [How does Windows App Actions framework call App Actions in a PWA?](#how-does-windows-app-actions-framework-call-app-actions-in-a-pwa)
         * [PWA launch through URI Activation](#pwa-launch-through-uri-activation)
         * [URI scheme](#uri-scheme)
         * [Receiving ValueSet data from Windows and mapping it to Share Target](#receiving-valueset-data-from-windows-and-mapping-it-to-share-target)
      * [Prerequisites for your PWA](#prerequisites-for-your-pwa)
         * [Web Manifest validation for protocol_handlers](#web-manifest-validation-for-protocol_handlers)
         * [Web Manifest validation for share_target](#web-manifest-validation-for-share_target)
         * [Web Manifest validation for launch_handler](#web-manifest-validation-for-launch_handler)
         * [Accept entity info from Windows App Actions framework](#accept-entity-info-from-windows-app-actions-framework)
   * [Package your PWA](#package-your-pwa)
      * [How to package store PWA in Edge Stable](#how-to-package-store-pwa-in-edge-stable)
      * [How to package store PWA in Edge Canary](#how-to-package-store-pwa-in-edge-canary)
   * [Testing your PWA in Windows](#testing-your-pwa-in-windows)
      * [Using Windows actions test tool](#using-windows-actions-test-tool)


<!-- ====================================================================== -->
## Introduction

Here's how to author and test an app action for the App Actions on Windows framework, for a Progressive Web App (PWA) that you've created.


<!-- ------------------------------ -->
#### What's App Actions on Windows

An App Action on Windows is an individual unit of behavior that a Windows app can implement and register.  The App Action can then be accessed from other apps and experiences, seamlessly integrating into user workflows.

An App Action is an atomic unit of functionality.  An app builds and registers actions, and then Windows or other apps can recommend registered actions to the user at contextually relevant times and locations within the user workflow.


<!-- ------------------------------ -->
#### Why should you build an Action?

App developers can build actions to increase discoverability and engagement for their features with app-to-app and agentic interactions.

The Windows App Actions framework is for exposing and executing key pieces of app functionality – it is not for generic user activities like opening context menus or right-clicking.

See [Recommended scenarios for App Actions](/windows/ai/app-actions#recommended-scenarios-for-app-actions) in _App Actions on Windows Overview_.


<!-- ====================================================================== -->
## Get started


<!-- ------------------------------ -->
#### Define the actions your PWA supports

This guide illustrates how to author an action using one of the sample PWAs, [wami, the Web App to Manipulate Images](https://github.com/MicrosoftEdge/Demos/tree/main/wami).  The Wami demo supports image manipulation tasks, such as resizing or applying post-processing styles.  The following example demonstrates creating a **Paint** action, which generates an oil-painting-style version of the image.

The **Paint** action accepts the image file that user selected and returns the stylized output.  The **Paint** action is defined in a descriptive file named `ActionsManifest.json`, per the next section.


<!-- -------------------- -->
##### Prepare ActionsManifest.json

`ActionsManifest.json` is the descriptive file that's used by Windows App Actions Runtime for an app to declare the actions that the app supports.  Below is the `ActionsManifest.json` populated with the information for the Paint feature of the Wami sample app.

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


<!-- ---------- -->
###### Understanding the fields in ActionsManifest

For the definition of each JSON property, see [Action definition JSON properties](/windows/ai/app-actions/actions-json#action-definition-json-properties) in _Action definition JSON schema for App Actions on Windows_.

Under `Invocation`, only the `uri` type is supported.  The `com` type is not applicable for PWAs.


<!-- ---------- -->
###### Supported Entity types for PWA

The `ActionEntityKind` enumeration specifies the types of entities that are supported by App Actions on Windows.  In the context of a JSON action definition, the entity kinds are string literals that are case-sensitive.  The supported entities are listed in [ActionEntityKind enumeration](/windows/ai/app-actions/actions-json#actionentitykind-enumeration) in _Action definition JSON schema for App Actions on Windows_.

`StreamingText` and `RemoteFile` are not yet supported for PWA.  For `File`, `Photo`, `Document` and `Text` entity kinds, see [Entity properties](/windows/ai/app-actions/actions-json#entity-properties) in _Action definition JSON schema for App Actions on Windows_.


<!-- -------------------- -->
##### How does Windows App Actions framework call App Actions in a PWA?


<!-- ---------- -->
###### PWA launch through URI Activation

A PWA action is launched by Windows through custom protocol URI activation.  A PWA must register for custom protocol handling with the `protocol_handlers` field in the web app manifest.  Windows' `LaunchUriAsync(Uri, LauncherOptions, ValueSet)` method is used by the Action Framework for URI activation.

`LaunchUriAsync` doesn't return a value or error status.


<!-- ---------- -->
###### URI scheme

A custom protocol URI should be used, not an HTTPS URI.

For PWAs with many actions, use syntax:

```json
"uri": "web+{app name://}{custom action name}"
```

For example:

```json
"uri": "web+wami://paint"
```


<!-- ---------- -->
###### Receiving ValueSet data from Windows and mapping it to Share Target

The activated protocol URI will be mapped to the "url" field of the share target data.

The input `ValueSet` will be converted to a valid JSON string and mapped to the "text" field of the share target data.  That way Edge would determine the protocol handler launch actually represents an Action.

The app's web app manifest must correctly configure the `share_target` field to enable being launched as a share target for an Action.  See [Web Manifest validation for `share_target`](#web-manifest-validation-for-share_target), below.


<!-- -------------------- -->
##### Prerequisites for your PWA


<!-- ---------- -->
###### Web Manifest validation for `protocol_handlers`

[Required] The `protocol_handlers` field must be present in the manifest, and the protocol field must be the same as the invocation uri in the `ActionsManifest.json` file.

Example `protocol_handlers` declaration:

```json
"protocol_handlers": [{
   "protocol": "web+wami",
   "url": "./?url=%s"
}]
```


<!-- ---------- -->
###### Web Manifest validation for `share_target`

[Required] The `share_target` field must be present in the manifest:

* The method must be "POST".
* The `enctype` must be `multipart/form-data`.
* `title`, `text` and `url` in `params` are required.  `files` is optional if you don't want your PWA to support the normal _share target_ feature.

Example `share_target` declaration:

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


<!-- ---------- -->
###### Web Manifest validation for `launch_handler`

[Optional] You can set [launch_handler](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Manifest/Reference/launch_handler) as `navigate-existing` into your PWA manifest, if you want to keep a single PWA window.

Example declaration:

```json
"launch_handler": {
   "client_mode": " navigate-existing"
}
```


<!-- ---------- -->
###### Accept entity info from Windows App Actions framework

You can do either of the following:

* Handle POST share data using server-side code.
* Use a fetch event listener to intercept the HTTP request which allows to access the data in a service worker.  This provides a better experience for offline users.

For action scenario, suggest using service worker to handle POST share data:
* [share_target - Receiving share data using POST](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Manifest/Reference/share_target#receiving_share_data_using_post)
* [share_target - Receiving shared files](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Manifest/Reference/share_target#receiving_shared_files)

Here is the example service worker handler: [Support AI Action launch for Wami Web App](https://github.com/MicrosoftEdge/Demos/blob/main/wami/sw.js).

The meaning of all `formData` is as follows:

* `formData[<share_target.params.text>]`: All entity info with JSON format (the users' file path will be sanitized).

* `formData[<share_target.params.url>]`: The invocation uri, through which you can know which action this launch came from and handle related parameters if needed.

* `formData["windowsActionFiles"]`: All files' data from action.

```csharp
// Extract data.
const data = {
   title: formData.get('title') || '',
   text: formData.get('text') || '',
   url: formData.get('url') || ''
};
const files = formData.getAll('windowsActionFiles');
```


<!-- ------------------------------ -->
#### Package your PWA

At the current stage, your PWA needs to be packaged as a Microsoft Store PWA, to be called by the Windows App Actions framework.  You would need an Edge browser with version number greater than 137.

The Stable release of Edge 137 will be available on May 29, 2025.  If you'd like to try it out before May 29, 2025, you can package your PWA in Edge Canary; see [How to package store PWA in Edge Canary](#how-to-package-store-pwa-in-edge-canary), below.


<!-- -------------------- -->
##### How to package store PWA in Edge Stable

1. Upgrade to Edge Stable 137 version.  (Edge 137 stable will be available after May 29, 2025.)

1. Package your PWA for [PWABuilder.com](https://www.pwabuilder.com); see [Package your PWA for the Store](./microsoft-store.md#package-your-pwa-for-the-store) in _Publish a PWA to the Microsoft Store_.

1. In **All settings**, scroll down to **Actions – Enable Actions** at the bottom.

1. Make sure your PWA has `protocol_handlers` and `share_target` fields.  PWABuilder.com will run a check, and if these two fields are absent from the web manifest, the **Enable Actions** checkbox will be greyed out.

1. In the **Actions** section, click **Choose File**, and upload the `ActionsManifest.json` file that you prepared for your PWA.

1. Click the **Download** button.

1. Unzip your download archive.  Then you can [publish your PWA to the Microsoft Store](./microsoft-store.md) and install the app from the Store, or install it directly by running `install.ps1`.

1. Launch your PWA by clicking the PWA icon.


<!-- -------------------- -->
##### How to package store PWA in Edge Canary

Edge Canary gives a preview of the functionalities that's not available in stable yet.

1. Install [Edge Canary](https://www.microsoft.com/edge/download/insider) and upgrade to the latest version.

1. Follow this guidance to get the **Package ID**, **Publisher ID**, and **Publisher display name** of your PWA: [Publish a PWA to the Microsoft Store](./microsoft-store.md).

1. Go to [PWABuilder.Windows.Chromium tester](https://pwabuilder-windows-docker.azurewebsites.net/).

1. Follow the configs below to input your PWA configs in the input box.

   * `name`: Your PWA's name.
   * `packageId`: Not needed if you won't publish the Canary-bind app to the store; can be an empty string.
   * `url`: Your PWA's url.
   * `publisher` -> `displayName`: The publisher's name.  Not needed if you won't publish the Canary-bind app to the store; can be an empty string.
   * `publisher` -> `commonName`: Your Publisher ID.  Not needed if you won't publish the Canary-bind app to the store; can be an empty string.
   * `startUrl`: Your PWA's `startUrl`.

   Example:

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

Your PWA was successfully installed as a Store PWA in Edge Canary.


<!-- ------------------------------ -->
#### Testing your PWA in Windows

Before testing, make sure that you have set up and packaged your PWA successfully as discussed in the above sections.


<!-- -------------------- -->
##### Using Windows actions test tool

1. Make sure Windows is updated to support App Actions; see [Windows 11 Insider Preview Build 26120.4151 (Beta Channel)](https://blogs.windows.com/windows-insider/2025/05/19/announcing-windows-11-insider-preview-build-26120-4151-beta-channel/).

1. Make sure Microsoft Edge is updated to the latest version, and install your PWA successfully; see [Package your PWA](#package-your-pwa), above.

1. Launch Edge Canary or Edge Stable, whichever channel you installed the PWA on.

1. Go to `edge://flags`, search for **app actions**, and locate the entry **Enable App Actions on Windows for web apps**.  (The flag name is `#edge-app-actions-on-windows-for-web-apps`.)

1. Change the status to **Enabled**, and then click the **Restart** button in the lower right.

1. Launch your PWA.

   Your PWA must be launched at least one time, to initialize your PWA for action, before being called by the App Actions runtime.

1. Use the [App Actions Testing Playground app](/windows/ai/app-actions/actions-test-tool) to test the actions for your PWA.

1. Add an entity that that action needs.  For example, if the action processes images, add an image.  Then run the action.

   The PWA will be launched and execute the action.


<!-- ====================================================================== -->
<!-- ## See also -->
