---
description: Learn about the format of the manifest file in an extension package
title: Manifest file format
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/02/2021
ms.topic: conceptual
ms.prod: microsoft-edge
keywords: edge-chromium, web development, html, css, javascript, developer, extensions, mv2, mv3, manifest
---

# Manifest file format

Every extension has a JSON-formatted manifest file, named `manifest.json`, that provides important information. The manifest file is the blueprint of your extension and includes the version of your extension, the title, permissions needed for the extension to run, and so on.

## Field summary

The following code shows the supported manifest fields for Extensions, with links to the page that discusses each field.

```json
{
    // Required
  "manifest_version": 3,
  "name": "My test Extension",
  "version": "versionString",

  // Recommended
  "action": {...},
  "default_locale": "en",
  "description": "A plain text description",
  "icons": {...},

  // Optional
  "action": ...,
  "author": ...,
  "automation": ...,
  "background": {
    // Required
    "service_worker":
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
    "matches": ["*://*.example.com/*"]
  },
  "file_browser_handlers": [...],
  "file_system_provider_capabilities": {
    "configurable": true,
    "multiple_mounts": true,
    "source": "network"
  },
  "homepage_url": "http://path/to/homepage",
  "host_permissions": [...],
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
  "version_name": "aString",
  "web_accessible_resources": [...]
}
```

## Next steps



<!-- links -->
