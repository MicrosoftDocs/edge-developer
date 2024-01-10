---
title: Alternative ways to distribute extensions
description: How to distribute extensions using alternate methods that don't use verified stores.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: extensions
ms.date: 05/05/2023
---
# Alternative ways to distribute extensions

Generally, extensions are distributed through the Microsoft Edge Add-ons website. There are some scenarios where developers may need to distribute extensions using alternate methods. For example:

1. The extension is associated with other software, and it should be installed together with the rest of the bundled software.

1. Network administrators want to distribute an extension throughout their organization.

Extensions that aren't loaded from the Edge Add-ons store are referred to as externally installed extensions. The following are alternate methods of distributing externally installed extensions:

*  Use the Windows registry (Windows only).
*  Use a preferences JSON file (macOS and Linux).

These approaches are described below.


<!-- ====================================================================== -->
## Before you begin

Make sure that you publish your extension in the Microsoft Edge Add-ons website, or package a `.crx` file and ensure that it installs successfully on your computer.  If you install the `.crx` file using the `update_url`, make sure you can go to your extension at that URL.

Also, make sure that you have the following information:

*  The file path of the `.crx` file, or the `update_url` of your extension.

*  The version of your extension.  The version information is available in your manifest file, or in Microsoft Edge at `edge://extensions` after you load the packed extension.

*  The ID of your extension.  The ID information is available in Microsoft Edge at `edge://extensions` after you load the packed extension.

The following examples use `1.0` as the version, and `aaaaaaaabbbbbbbbccccccccdddddddd` for the ID.


<!-- ====================================================================== -->
## Using the Windows registry (Windows only)

To distribute your extension using the Windows registry:

1. Find or create the following key in the registry:
   *  32-bit Windows: `HKEY_LOCAL_MACHINE\Software\Microsoft\Edge\Extensions`
   *  64-bit Windows: `HKEY_LOCAL_MACHINE\Software\Wow6432Node\Microsoft\Edge\Extensions`

1. Create a new key, or folder, under **Extensions** with the same name as the ID of your extension. For example, create the key with the name `aaaaaaaabbbbbbbbccccccccdddddddd`.

1. In the **Extensions** key, create the `update_url` property, and set the value to `https://edge.microsoft.com/extensionwebstorebase/v1/crx`.  The `update_url` property points to the `.crx` file of your extension in the Microsoft Edge Add-ons website.

   ```json
   {
       "update_url": "https://edge.microsoft.com/extensionwebstorebase/v1/crx"
   }
   ```

   > [!NOTE]
   > If you want to install an extension from the Chrome Web Store, set the value of `update_url` to `https://clients2.google.com/service/update2/crx`.

1. In Microsoft Edge, go to `edge://extensions`, and then verify that your extension is listed.


<!-- ====================================================================== -->
## Using a preferences JSON file (macOS and Linux)

To distribute your extension by using a preferences JSON file:

1. When using Linux, make sure your `.crx` extension file is available on the machine that the extension will be installed on.  Copy the `.crx` extension file to a local directory, or use a network share that is reachable from the machine.

1. Create a JSON file where the name of the file corresponds to the ID of your extension. For example, create a JSON file with the file name `aaaaaaaabbbbbbbbccccccccdddddddd.json`.

   The name of the preferences JSON file is your Microsoft Edge extension's CRX ID, followed by a `.json` extension.  The CRX ID is a unique 32-character code which is the letters that are present at the end of your extension's URL.

1. Depending on your operating system, save the JSON file to one of the following folders:

    *  **macOS**
        *  User-specific: `~USERNAME/Library/Application Support/Microsoft Edge/External Extensions/`
        *  For all users: `/Library/Application Support/Microsoft/Edge/External Extensions/`

        To prevent unauthorized users from installing extensions for all users, make sure your extension preferences file is read-only.

        Also make sure that the following conditions are met:

        *  Every directory in the path is owned by the user root.
        *  Every directory in the path is assigned to the `admin` or `wheel` group.
        *  Every directory in the path isn't `world` writable.
        *  The path must be free of symbolic links.

    *  **Linux**
        *  User-specific: `~/.config/microsoft-edge/External Extensions/`
        *  For all users: `/usr/share/microsoft-edge/extensions/`

1. Depending on your scenario, copy the appropriate code that follows, into your preferences JSON file.

    *  Applies to Linux only.  If you install from a file, specify the location and version in `external_crx` and `external_version`:

        ```json
        {
            "external_crx": "/home/share/extension.crx",
            "external_version": "1.0"
        }
        ```

    *  Applies to macOS and Linux.  If you install from an `update_url`, specify the update URL in `external_update_url`.

       Copy the following code into your preferences JSON file when installing from local `.crx` files on Linux only:

       ```json
       {
           "external_update_url": "http://myhost.com/mytestextension/updates.xml"
       }
       ```

    *  Copy the following code to your preferences JSON file when installing from the Microsoft Edge Add-ons website on macOS and Linux:

       ```json
       {
           "external_update_url": "https://edge.microsoft.com/extensionwebstorebase/v1/crx"
       }
       ```

1. To install extensions for specific locales, list the supported locales, in `supported_locales`.

   You can specify parent locales, to install your extension for all language locales that use that parent.  For example, when using the parent locale `en`, your extension installs for all English locales, such as `en-US`, `en-GB`, and so on.  When users change their locale in their browser, externally installed extensions are uninstalled.  To install your extension for _any_ locale, don't use `supported_locales`.

    ```json
    {
        "external_update_url": "https://edge.microsoft.com/extensionwebstorebase/v1/crx",
        "supported_locales": [ "en", "fr", "de" ]
    }
    ```

1. Verify that your extension is installed in Microsoft Edge, by going to `edge://extensions`.


<!-- ====================================================================== -->
## Update and uninstall externally installed extensions

Microsoft Edge scans the metadata entries in the registry each time the browser starts, and makes any changes to the externally installed extensions.

To update your extension to a new version, update the `version` string in the extension manifest file, and then update the version in the registry.

You may need to uninstall externally installed extensions, which were installed as part of a bundle of software that was previously installed on the machine.  To uninstall your extension, remove your preferences JSON file or remove the key from the registry.


See also:
* [Manifest file format for extensions](../getting-started/manifest-format.md)


<!-- ====================================================================== -->
## Blocking of extensions

The policies for `ExtensionInstallForcelist`, block list, and `ExtensionSettings` are used when enterprises want to install or block specific extensions on the client machines.  Extensions and their origin that are configured in [ExtensionInstallForcelist](/deployedge/microsoft-edge-policies#extensioninstallforcelist), [ExtensionInstallSources](/deployedge/microsoft-edge-policies#extensioninstallsources), or [ExtensionSettings](/deployedge/microsoft-edge-policies#extensionsettings) take precedence over [BlockExternalExtensions](/deployedge/microsoft-edge-policies#blockexternalextensions).

If the `BlockExternalExtensions` policy is set to `Not Configured` or `Disabled`, that doesn't have any effect.  If the `BlockExternalExtensions` policy is set to `Enabled`, external extension installation (by third party software) is prevented.


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).  The original page is found [here](https://developer.chrome.com/docs/extensions/how-to/distribute/install-extensions).

<!-- the original page for MV2 is found [here](https://developer.chrome.com/docs/extensions/mv2/external-extensions) -->

[![Creative Commons License](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
