---
title: Manifest V2 file format for extensions (deprecated)
description: Learn about the format of the manifest file in an extension package.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: extensions
ms.date: 06/23/2023
---
# Manifest V2 file format for extensions (deprecated)

Use Manifest V3 for new code, per [Manifest file format for extensions](./manifest-format.md).  To migrate a Manifest V2 extension to Manifest V3, see [Migrate an extension from Manifest V2 to V3](../developer-guide/migrate-your-extension-from-manifest-v2-to-v3.md).


<!-- ====================================================================== -->
## Format of manifest.json for extensions

The following code shows the fields that are supported in `manifest.json` for extensions, for a Manifest V2 package.

For reference information about each field, see [Manifest file format](https://developer.chrome.com/docs/extensions/mv2/manifest) (V2) and then select the links on the fields.

```json
{
  // Required
  "manifest_version": 2,
  "name": "My V2 Extension",
  "version": "versionString",

  // Recommended
  "default_locale": "en",
  "description": "A plain-text description",
  "icons": {...},

  // Pick one or none
  "browser_action": {...},
  "page_action": {...},

  // Optional
  "action": ...,
  "author": ...,
  "automation": ...,
  "background": {
    // If `background` is included, `persistent` is recommended
    "persistent": false,
    // If `background` is included, `service_worker` is optional
    "service_worker": ...
  },
  "chrome_settings_overrides": {...},
  "chrome_url_overrides": {...},
  "commands": {...},
  "content_capabilities": ...,
  "content_scripts": [{...}],
  "content_security_policy": "policyString",
  "converted_from_user_script": ...,
  "current_locale": ...,
  "declarative_net_request": ...,
  "devtools_page": "devtools.html",
  "differential_fingerprint": ...,
  "event_rules": [{...}],
  "externally_connectable": {
    "matches": ["*://*.contoso.com/*"]
  },
  "file_browser_handlers": [...],
  "file_system_provider_capabilities": {
    "configurable": true,
    "multiple_mounts": true,
    "source": "network"
  },
  "homepage_url": "http://path/to/homepage",
  "host_permissions": ...,
  "import": [{"id": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}],
  "incognito": "spanning, split, or not_allowed",
  "input_components": ...,
  "key": "publicKey",
  "minimum_chrome_version": "versionString",
  "nacl_modules": [...],
  "natively_connectable": ...,
  "oauth2": ...,
  "offline_enabled": true,
  "omnibox": {
    "keyword": "aString"
  },
  "optional_permissions": ["tabs"],
  "options_page": "options.html",
  "options_ui": {
    "chrome_style": true,
    "page": "options.html"
  },
  "permissions": ["tabs"],
  "platforms": ...,
  "replacement_web_app": ...,
  "requirements": {...},
  "sandbox": [...],
  "short_name": "Short Name",
  "storage": {
    "managed_schema": "schema.json"
  },
  "system_indicator": ...,
  "tts_engine": {...},
  "update_url": "http://path/to/updateInfo.xml",
  "version_name": ...,
  "web_accessible_resources": [...]
}
```

---


<!-- ====================================================================== -->
## Changes in manifest.json V3 vs. V2

| V3 | V2 |
|---|---|
| `  "manifest_version": 3,` | `"manifest_version": 2,` |
| `"action": {...},` | `"browser_action": {...},` |
| `"action": {...},` | `"page_action": {...},` |
| removed | `"persistent": false,` |
| If `background` is included, `service_ worker` is required | If `background` is included, `service_ worker` is optional |
| Separated into two different keys: `"permissions": [...], "host_permissions": [...],` | `"permissions": [...],` |


<!-- ====================================================================== -->
## See also
<!-- all links in article -->

* [Migrate an extension from Manifest V2 to V3](../developer-guide/migrate-your-extension-from-manifest-v2-to-v3.md)
* [Manifest file format](https://developer.chrome.com/docs/extensions/reference/manifest) (V3) - _Chrome Extensions_ > _Reference_.
* [Manifest file format](https://developer.chrome.com/docs/extensions/mv2/manifest) (V2) in _Chrome Extensions_ > _Reference_.


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/extensions/reference/manifest).

[![Creative Commons License](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
