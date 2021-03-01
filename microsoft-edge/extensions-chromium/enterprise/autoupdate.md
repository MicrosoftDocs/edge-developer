---
description: Extensions
title: Autoupdating extensions in Microsoft Edge
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 03/01/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: edge-chromium, extensions development, browser extensions, add-ons, partner center, developer
---


# Autoupdating

We want extensions and apps to be auto updated for some of the same reasons as Microsoft Edge itself: to incorporate bug and security fixes, add new features or performance enhancements, and improve user interfaces.

If you publish using Partner center dashboard, you can ignore this page. You can use the dashboard to release updated versions to users, as well as to the Edge add-ons website.

Previously when off-store extensions were supported, it was possible to have the native binaries and the extension be updated in lock step. However, extensions hosted on the Edge add-ons website are updated via the Edge update mechanism which developers do not control. Extension developers should be careful about updating extensions that have a dependency on the native binary.


## Overview

* A manifest may contain an "update_url" field, pointing to a location for doing update checks.
* The content returned by an update check is an update manifest XML document listing the latest version of an extension.

Every few hours, the browser checks whether any installed extensions or apps have an update URL. For each one, it makes a request to that URL looking for an update manifest XML file. If the update manifest mentions a version that is more recent than what's installed, the browser downloads and installs the new version. As with manual updates, the new .crx file must be signed with the same private key as the currently installed version.

> [!NOTE]
> In order to maintain user privacy, Microsoft Edge does not send any Cookie headers with auto update manifest requests, and ignores any Set-Cookie headers in the responses to those requests.


## Update URL

If you're hosting your own extension or app, you need to add the "update_url" field to your manifest.json file, like this:

```json
{
  "name": "My extension",
  ...
  "update_url": "http://myhost.com/mytestextension/updates.xml",
  ...
}
```

## Update manifest

The update manifest returned by the server should be an XML document that looks like this:

```xml
<?xml version='1.0' encoding='UTF-8'?>
<gupdate xmlns='http://www.microsoft.com/update2/response' protocol='2.0'>
  <app appid='aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'>
    <updatecheck codebase='http://myhost.com/mytestextension/mte_v2.crx' version='2.0' />
  </app>
</gupdate>
```


The extensions system uses the following attributes for the and elements of the update manifest:

1. **appid** - The extension ID is generated based on a hash of the public key. You can find the ID of an extension by going to the Extensions page (edge://extensions).

2. **codebase** - A URL to the .crx file.

3. **version** - Used by the client to determine whether it should download the .crx file specified by codebase. It should match the value of "version" in the .crx file's manifest.json file.

The update manifest XML file may contain information about multiple extensions by including multiple elements.


## Testing

The default update check frequency is several hours, but you can force an update using the Extensions page's **Update extensions now** button.


## Advanced usage: request parameters

The basic auto update mechanism is designed to make the server-side work as easy as just dropping a static XML file onto any plain web server such as Apache, and updating that XML file as you release new versions of your extensions.

More advanced developers may wish to take advantage of the fact that we add on parameters to the request for the update manifest to indicate the extension ID and version. Then they can use the same update URL for all of their extensions, pointing to a URL running dynamic server-side code instead of a static XML file.

The format of the request parameters is: ?x=_<extension_data>_ 

Here _<extension_data>_ is a URL-encoded string of the format: _id=<id>_&v=_<version>_

For example, say you have two extensions, both of which point to the same update URL (http://test.com/extension_updates.php):

Extension 1
ID: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
Version: "1.1"

Extension 2
ID: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"
Version: "0.4"

The request to update each individual extension would be:

http://test.com/extension_updates.php?x=id%3Daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa%26v%3D1.1
http://test.com/extension_updates.php?x=id%3Dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb%26v%3D0.4

Multiple extensions can be listed in a single request for each unique update URL. For the above example, if a user has both of the extensions installed, then the two requests are merged into a single request:

http://test.com/extension_updates.php?x=id%3Daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa%26v%3D1.1&x=id%3Dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb%26v%3D0.4

If the number of installed extensions using the same update URL is large enough that a GET request URL is too long (over 2000 characters or so), the update check issues additional GET requests as necessary.

> [!NOTE]
> In the future, instead of issuing multiple GET requests, a single POST request might be issued with the request parameters in the POST body.


## Advanced usage: minimum browser version 

As we add more APIs to the extensions system, it's possible you will want to release an updated version of an extension or app that will work only with newer versions of the browser. While Microsoft Edge itself is auto updated, it can take a few days before the majority of the user base has updated to any given new release. To ensure that a given update will apply only to Microsoft Edge versions at or higher than a specific version, you add the "prodversionmin" attribute in your update manifest. For example:

```xml
<?xml version='1.0' encoding='UTF-8'?>
<gupdate xmlns='http://www.google.com/update2/response' protocol='2.0'>
  <app appid='aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'>
    <updatecheck codebase='http://myhost.com/mytestextension/mte_v2.crx' version='2.0' prodversionmin='3.0.193.0'/>
  </app>
</gupdate>
```

This would ensure that users would auto update to version 2 only if they are running Microsoft Edge 3.0.193.0 or greater.


> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developer.chrome.com/extensions/match_patterns/).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  