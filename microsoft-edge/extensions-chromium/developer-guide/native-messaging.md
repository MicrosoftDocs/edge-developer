---
description: Native messaging documentation
title: Native Messaging
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 03/31/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, extensions development, browser extensions, addons, partner center, developer
---
# Native messaging

Extensions communicate with a native Win32 app installed on a user's device using message passing APIs.  The native app host sends and receives messages with extensions using standard input and standard output.  Extensions using native messaging are installed in Microsoft Edge similar to any other extension.  However, native apps are not installed or managed by Microsoft Edge.

To acquire the extension and native app host, you have two distribution models.

*   Package your extension and the host together.  When a user installs the package, both the extension and the host are installed.
*   Install your extension using the [Microsoft Edge Add-ons website](https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home), and your extension prompts users to install the host.

To create your extension to send and receive messages with native app hosts, complete the following steps.


<!-- ====================================================================== -->
## Step 1 - Add permissions to the extension manifest

Add the `nativeMessaging` permission to the **manifest.json** file of the extension.  The following code snippet is an example of **manifest.json**.

```json
{
    "name": "Native Messaging Example",
    "version": "1.0",
    "manifest_version": 2,
    "description": "Send a message to a native app.",
    "app": {
        "launch": {
            "local_path": "main.html"
        }
    },
    "icons": {
        "128": "icon-128.png"
    },
    "permissions": ["nativeMessaging"]
}
```


<!-- ====================================================================== -->
## Step 2 - Create your native messaging host manifest file

Native apps must provide a native messaging host manifest file.  The manifest file contains the following information.

*   The path to the native messaging host runtime.
*   The method of communication with the extension.
*   A list of allowed extensions to which it communicates.

The browser reads and validates the native messaging host manifest.  The browser doesn't install or manage the native messaging host manifest file.

```json
{
    "name": "com.my_company.my_app",
    "description": "My App",
    "path": "C:\\Program Files\\My App\\chrome_native_messaging_host.exe",
    "type": "stdio",
    "allowed_origins": [
        "chrome-extension://knldjmfmopnpolahpmmgbagdohdnhkik/"
    ]
}
```

The host manifest file must be a valid JSON file that contains the following keys.

:::row:::
   :::column span="1":::
      **Key**
   :::column-end:::
   :::column span="3":::
      **Details**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      ---

      `name`
   :::column-end:::
   :::column span="3":::
      ---

      Specifies the name of the native messaging host.  Clients pass the string to `runtime.connectNative` or `runtime.sendNativeMessage`.

      *   The value must only contain lowercase alphanumeric characters, underscores, and dots.
      *   The value must not start or end with a dot, and a dot must not be followed by another dot.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      ---

      `description`
   :::column-end:::
   :::column span="3":::
      ---

      Describes the app.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      ---

      `path`
   :::column-end:::
   :::column span="3":::
      ---

      Specifies the path to the native messaging host binary.

      *   On Windows devices, you may use relative paths to the directory that contains the manifest file.
      *   On macOS and Linux, the path must be absolute.

      The host process starts with the current directory set to the directory that contains the host binary.  For example (Windows), if the parameter is set to `C:\App\nm_host.exe`, the binary is started using the current directory (`C:\App\`).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      ---

      `type`
   :::column-end:::
   :::column span="3":::
      ---

      Specifies the type of the interface used to communicate with the native messaging host.  The value instructs Microsoft Edge to use `stdin` and `stdout` to communicate with the host.
      The only acceptable value is `stdio`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      ---

      `allowed_origins`
   :::column-end:::
   :::column span="3":::
      ---

      Specifies the list of extensions that have access to the native messaging host.  To turn on your app to identify and communicate with an extension, in your native messaging host manifest file set the following value.

      ```json
      "allowed_origins": ["chrome-extension://{microsoft_catalog_extension_id}"]
      ```
   :::column-end:::
:::row-end:::

Sideload your extension to test native messaging with the host.
To sideload your extension during development and retrieve `microsoft_catalog_extension_id`, complete the following actions.

1.  Navigate to `edge://extensions`, and then turn on the Developer mode toggle button.
1.  Choose **Load unpacked**, and then choose your extension package to sideload.
1.  Choose **OK**.
1.  Navigate to `edge://extensions` page and verify your extension is listed.
1.  Copy the key from `microsoft_catalog_extension_id` (ID) from the extension listing on the page.

When you're ready to distribute your extension to users, publish your extension to the Microsoft Edge Add-ons website.  The extension ID of the published extension may differ from the ID used while sideloading your extension.  If the ID changed, update `allowed_origins` in the host manifest file with the ID of your published extension.


<!-- ====================================================================== -->
## Step 3 - Copy the native messaging host manifest file to your system

The final step involves copying the native messaging host manifest file to your computer, and ensuring the manifest file is correctly configured.  To ensure your manifest file is placed in the expected location, complete the following the actions.  The location varies by platform.

> [!NOTE]
> Ensure that you provide read permissions on the manifest file, and run permissions on the host runtime.

### [Windows](#tab/windows/)

<a id="copy-manifest-file"></a>

The manifest file may be located anywhere in the file system.  The app installer must create a registry key and set the default value of the key to the full path of the manifest file.  The following locations are examples of registry keys.

```output
HKEY_CURRENT_USER\SOFTWARE\Microsoft\Edge\NativeMessagingHosts\com.my_company.my_app

HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Edge\NativeMessagingHosts\com.my_company.my_app
```

To add a registry key to the directory with the manifest key, complete one of the following actions.

*   Run command in command prompt.

    1.  Run the following command.

        ```shell
        REG ADD "HKCU\Software\Microsoft\Edge\NativeMessagingHosts\com.my_company.my_app" /ve /t REG_SZ /d "C:\path\to\nmh-manifest.json" /f
        ```

*   Create a `.reg` file and run it.

    1.  Copy the following command into a `.reg` file.

        ```shell
        Windows Registry Editor Version 5.00
        [HKEY_CURRENT_USER\Software\Microsoft\Edge\NativeMessagingHosts\com.my_company.my_app]
        @="C:\\path\\to\\nmh-manifest.json"
        ```

    1.  Run the `.reg` file.

Microsoft Edge queries the `HKEY_CURRENT_USER` root key followed by `HKEY_LOCAL_MACHINE`.  In both of the keys, the 32-bit registry is searched first, and then the 64-bit registry is searched to identify native messaging hosts.  The registry key specifies the location of the native messaging host manifest.  If the registry entries for Microsoft Edge don't have the location of the host manifest, the Chromium and Chrome registry locations are used as fallback options.  If Microsoft Edge finds the registry key at any of the previously listed locations, it doesn't query the locations that are listed in the following code snippet.  If you run your created `.reg` file as part of a batch script, ensure you run it using an administrator command prompt.

The following list is the search order for the registry locations.

```output
HKEY_CURRENT_USER\SOFTWARE\WOW6432Node\Microsoft\Edge\NativeMessagingHosts\
HKEY_CURRENT_USER\SOFTWARE\WOW6432Node\Chromium\NativeMessagingHosts\
HKEY_CURRENT_USER\SOFTWARE\WOW6432Node\Google\Chrome\NativeMessagingHosts\
HKEY_CURRENT_USER\SOFTWARE\Microsoft\Edge\NativeMessagingHosts\
HKEY_CURRENT_USER\SOFTWARE\Chromium\NativeMessagingHosts\
HKEY_CURRENT_USER\SOFTWARE\Google\Chrome\NativeMessagingHosts\

HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\Edge\NativeMessagingHosts\
HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Chromium\NativeMessagingHosts\
HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Google\Chrome\NativeMessagingHosts\
HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Edge\NativeMessagingHosts\
HKEY_LOCAL_MACHINE\SOFTWARE\Chromium\NativeMessagingHosts\
HKEY_LOCAL_MACHINE\SOFTWARE\Google\Chrome\NativeMessagingHosts\
```

> [!NOTE]
> If you have extensions on the Microsoft Edge Add-ons and the Chrome Webstore, you must add the extension IDs corresponding to both the stores in the `allowed_origins` of the host manifest file because only the host manifest corresponding to the first registry location found is read.

### [macOS](#tab/macos/)

<a id="copy-manifest-file"></a>

To store the manifest file, complete one of the following actions.

*   System-wide native messaging hosts, which are available to all users, are stored in a fixed location.  For example, the manifest file must be stored in following location.

    ```bash
    /Library/Microsoft/Edge/NativeMessagingHosts/com.my_company.my_app.json
    ```

*   User-specific native messaging hosts, which are available to the current user only, are located in the `NativeMessagingHosts` subdirectory in the user profile directory.  For example, the manifest file must be stored in following location.

    ```bash
    ~/Library/Application Support/Microsoft Edge {Channel_Name}/NativeMessagingHosts/com.my_company.my_app.json
    ```

    The  `{Channel_Name}` in `Microsoft Edge {Channel_Name}` must be one of the following values.

    *   `Canary`
    *   `Dev`
    *   `Beta`

    When using the Stable channel, ` {Channel_Name}` isn't required.

### [Linux](#tab/linux/)

<a id="copy-manifest-file"></a>

To store the manifest file, complete one of the following actions.

*   System-wide native messaging hosts, which are available to all users, are stored in a fixed location.  The manifest file must be stored in following location.

    ```bash
    /etc/opt/edge/native-messaging-hosts
    ```

*   User-specific native messaging hosts, which are available to the current user only, are located in the `NativeMessagingHosts` subdirectory in the user profile directory.  The manifest file must be stored in following location.

    ```bash
    ~/.config/microsoft-edge/NativeMessagingHosts
    ```

* * *


> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/extensions/nativeMessaging).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
