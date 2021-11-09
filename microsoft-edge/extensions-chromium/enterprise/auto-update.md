---
description: Learn about automatic updates to extensions in Microsoft Edge
title: Automatically update extensions in Microsoft Edge
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/13/2021
ms.topic: conceptual
ms.prod: microsoft-edge
keywords: edge-chromium, extensions development, browser extensions, add-ons, partner center, developer
---
<!-- Copyright A. W. Fuchs

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->
# Automatically update extensions in Microsoft Edge

When you set your extension to automatically update, your extension shares the following benefits with Microsoft Edge when set to automatically update.

*   Incorporate bug and security fixes.
*   Add new features or performance enhancements.
*   Improve the user interface.

Previously, non-store based extensions were supported.  Also, you updated the native binaries and the extension at the same time.

Now, the Microsoft Edge Add-ons website hosts your extensions and you update your extension using the same mechanism as Microsoft Edge.  You don't control the update mechanism.  Be careful when you update extensions that have a dependency on native binaries.

> [!NOTE]
> This article does not apply to extensions that you publish using the [Partner Center](https://partner.microsoft.com/dashboard/microsoftedge/public/login?ref=dd) dashboard.  You may use the dashboard to release updated versions to your users and to the Microsoft Edge Add-ons website.  For more information, navigate to [Update a Microsoft Edge extension](../publish/update-extension.md).


<!-- ====================================================================== -->
## Overview

Every few hours, Microsoft Edge checks whether each installed extension or app has an update URL.  To specify an update URL for your extension, use the `update_url` field in the manifest.  The `update_url` field in the manifest points to a location to complete an update check.  For each `update_url`, it sends requests for updated manifest XML files.  If the update manifest XML file lists a newer version than that installed, Microsoft Edge downloads and installs the newer version.  The same process works for manual updates, where the new `.crx` file must be signed with the same private key as the currently installed version.

> [!NOTE]
> In order to maintain user privacy, Microsoft Edge does not send any `Cookie` headers with auto-update manifest requests, and ignores any `Set-Cookie` headers in the responses to those requests.


<!-- ====================================================================== -->
## Update URL

If you host your own extension or app, you must add the `update_url` field to your `manifest.json` file.  Review the following code snippet for an example of the `update_url`.

```json
{
  "name": "My extension",
  ...
  "update_url": "http://contoso.com/mytestextension/updates.xml",
  ...
}
```


<!-- ====================================================================== -->
## Update manifest

The updated manifest returned by the server should be an XML document.  Review the following code snippet for an example of the updated manifest XML file.

```xml
<?xml version='1.0' encoding='UTF-8'?>
<gupdate xmlns='http://www.google.com/update2/response' protocol='2.0'>
  <app appid='aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'>
    <updatecheck codebase='http://contoso.com/mytestextension/mte_v2.crx' version='2.0' />
  </app>
</gupdate>
```

The following table describes attributes of the updated manifest XML file.

| Attribute | Details |
|:--- |:--- |
| `appid` | The extension ID is generated based on a hash of the public key.  To find the ID of an extension, open Microsoft Edge and navigate to `edge://extensions`. |
| `codebase` | A URL to the `.crx` file. |
| `version` | This attribute value is used by Microsoft Edge to determine whether it should download the `.crx` file specified by `codebase`.  It should match the value of `version` in the `manifest.json` file of the `.crx` file. |

The update manifest XML file may contain information about multiple extensions by including multiple elements.


<!-- ====================================================================== -->
## Testing

The default update check frequency is several hours.  To force an update, navigate to `edge://extensions` and choose the **Update extensions now** button.


<!-- ====================================================================== -->
## Advanced usage: request parameters

The basic mechanism is simple.  To automatically update your extension:

1.  Upload your static XML file on your web server, such as Apache.
1.  Update the XML file as you release new versions of your extensions.

Take advantage of the fact that some parameters added to the update manifest request indicate the extension `ID` and `version`.  You may use the same `update URL` for all your extensions instead of a static XML file.  To use the same `update URL` for all your extensions, point to a URL that runs dynamic server-side code to test the parameters.

The following example demonstrates the format of the request parameters of update URL.

```url
?x={extension_data}
```

In this example, `{extension_data}` is a URL-encoded string that uses the following format.

```url
id={id}&v={version}
```

For example, the following two extensions both point to the same update URL `http://contoso.com/extension_updates.php`.

*   Extension 1
    *   ID: `aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`
    *   update URL: `http://contoso.com/extension_updates.php`
    *   Version: `1.1`
*   Extension 2
    *   ID: `bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb`
    *   update URL: `http://contoso.com/extension_updates.php`
    *   Version: `0.4`


The following are the requests to update each extension.

```https
http://contoso.com/extension_updates.php?x=id%3Daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa%26v%3D1.1
```

```https
http://contoso.com/extension_updates.php?x=id%3Dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb%26v%3D0.4
```

You may also list multiple extensions in a single request for each unique update URL.  The following example merges the previous requests into a single request.

```https
http://contoso.com/extension_updates.php?x=id%3Daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa%26v%3D1.1&x=id%3Dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb%26v%3D0.4
```

If you send a single request and the number of installed extensions that use the same update URL is too long, the update check issues more `GET` requests.  A `GET` request URL is too long if it's approximately 2000 characters.

> [!NOTE]
> In the future, a single `POST` request may replace multiple `GET` requests.  The `POST` request may contain the request parameters in the `POST` body.


<!-- ====================================================================== -->
## Advanced usage: minimum browser version

As new APIs release for the Microsoft Edge extensions system, you may release an updated version of your extension or app that only works with newer Microsoft Edge versions.  When Microsoft Edge is automatically updated, it may take a few days before most of your users update to that new release.

To make sure that a specific update applies only to Microsoft Edge versions that are current or newer than a specific version, add the `prodversionmin` attribute in your update manifest.  In the following code snippet, the `prodversionmin` attribute value of `3.0.193.0` specifies that your app automatically updated to version `2.0` only when the user is running Microsoft Edge `3.0.193.0` or newer.

```xml
<?xml version='1.0' encoding='UTF-8'?>
<gupdate xmlns='http://www.google.com/update2/response' protocol='2.0'>
  <app appid='aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'>
    <updatecheck codebase='http://contoso.com/mytestextension/mte_v2.crx' version='2.0' prodversionmin='3.0.193.0' />
  </app>
</gupdate>
```


> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/apps/autoupdate).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
