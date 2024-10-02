---
title: Native messaging
description: To communicate with a native Win32 app that's installed on a user's device, an extension uses message-passing APIs.  The native app host sends and receives messages with extensions using standard input and standard output.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: extensions
ms.date: 01/09/2024
---
# Native messaging

To communicate with a native Win32 app that's installed on a user's device, an extension uses an API that's similar to the other [message passing](https://developer.chrome.com/docs/extensions/develop/concepts/messaging) APIs.  The native app host sends and receives messages with extensions using standard input and standard output.

Extensions that use native messaging are installed in Microsoft Edge similar to any other extension.  However, native apps aren't installed or managed by Microsoft Edge.

To acquire the extension and native app host, there are two different distribution models:

*  Package your extension and the host together.  When a user installs the package, both the extension and the host are installed.

*  Or, install your extension using the [Microsoft Edge Add-ons website](https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home), and your extension prompts users to install the host.

To create your extension to send and receive messages with native app hosts, do the following steps.


<!-- ====================================================================== -->
## Step 1: Add permissions to the extension manifest

Add the `nativeMessaging` permission to the **manifest.json** file of the extension.

This is the _extension manifest file_, not the _native messaging host manifest file_, which is covered in later sections.

The following is an example **manifest.json** file:


##### [Manifest V3](#tab/v3)

```json
{
    "name": "Native Messaging Example",
    "version": "1.0",
    "manifest_version": 3,
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

##### [Manifest V2](#tab/v2)

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

---


<!-- ====================================================================== -->
## Step 2: Create your native messaging host manifest file

Native apps must provide a native messaging host manifest file.  A native messaging host manifest file contains the following information:

*  The path to the native messaging host runtime.

*  The method of communication with the extension.

*  A list of allowed extensions to which it communicates.

The browser reads and validates the native messaging host manifest.  The browser doesn't install or manage the native messaging host manifest file.

The native messaging host manifest file is distinct from the Manifest V3 or V2 file that is part of the Microsoft Edge extension.

Example of a native messaging host manifest file:

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

---

The native messaging host manifest file must be a valid JSON file that contains the following keys:

| Key | Details |
| --- | --- |
| `name` | Specifies the name of the native messaging host.  Clients pass the string to `runtime.connectNative` or `runtime.sendNativeMessage`.<br/>  The value must only contain lowercase alphanumeric characters, underscores, and dots.<br/> The value must not start or end with a dot (a period), and a dot must not be followed by another dot. |
| `description` | Describes the app. |
| `path` | Specifies the path to the native messaging host binary.<br/> On Windows devices, you can use relative paths to the directory that contains the native messaging host manifest file.<br/>  On macOS and Linux, the path must be absolute.<br/>  The host process starts with the current directory set to the directory that contains the host binary.  For example (Windows), if the parameter is set to `C:\App\nm_host.exe`, the binary is started using the current directory (`C:\App\`). |
| `type` | Specifies the type of the interface used to communicate with the native messaging host.  The value instructs Microsoft Edge to use `stdin` and `stdout` to communicate with the host.  The only acceptable value is `stdio`. |
| `allowed_origins` | Specifies the list of extensions that have access to the native messaging host.  To turn on your app to identify and communicate with an extension, in your native messaging host manifest file, set the following value:<br/> `"allowed_origins": ["chrome-extension://{microsoft_catalog_extension_id}"]`|

Sideload your extension to test native messaging with the host.  To sideload your extension during development and retrieve `microsoft_catalog_extension_id`:

1. Go to `edge://extensions`, and then turn on the **Developer mode** toggle button.

1. Select **Load unpacked**, and then select your extension package to sideload.

1. Click **OK**.

1. Go to the `edge://extensions` page and verify that your extension is listed.

1. Copy the key from `microsoft_catalog_extension_id` (ID) from the extension listing on the page.

When you're ready to distribute your extension to users, publish your extension to the Microsoft Edge Add-ons website.  The extension ID of the published extension might differ from the ID that's used while sideloading your extension.  If the ID changed, update `allowed_origins` in the native messaging host manifest file with the ID of your published extension.


<!-- ====================================================================== -->
## Step 3: Copy the native messaging host manifest file to your system

The final step involves copying the native messaging host manifest file to your computer, and making sure that this manifest file is correctly configured.  To ensure your native messaging host manifest file is placed in the expected location, do the following steps.  The location varies by platform.

On Linux and macOS:
*  Make sure that you provide **read** permissions on the native messaging host manifest file. 
*  Make sure that you provide **run** permissions on the host runtime.

##### [Windows](#tab/windows/)

The native messaging host manifest file may be located anywhere in the file system.  The app installer must create a registry key and set the default value of the key to the full path of the native messaging host manifest file.

The following locations are examples of registry keys:

```output
HKEY_CURRENT_USER\SOFTWARE\Microsoft\Edge\NativeMessagingHosts\com.my_company.my_app

HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Edge\NativeMessagingHosts\com.my_company.my_app
```

To add a registry key to the directory with the manifest key, do either of the following:

*  Run a command in the command prompt:

   ```shell
   REG ADD "HKCU\Software\Microsoft\Edge\NativeMessagingHosts\com.my_company.my_app" /ve /t REG_SZ /d "C:\path\to\nmh-manifest.json" /f
   ```

*  Or, create a `.reg` file and run it, as follows:

    1. Copy the following command into a `.reg` file:

        ```shell
        Windows Registry Editor Version 5.00
        [HKEY_CURRENT_USER\Software\Microsoft\Edge\NativeMessagingHosts\com.my_company.my_app]
        @="C:\\path\\to\\nmh-manifest.json"
        ```

    1. Run the `.reg` file.  If you run your created `.reg` file as part of a batch script, make sure you run it using an administrator command prompt.

Microsoft Edge queries the `HKEY_CURRENT_USER` root key, followed by `HKEY_LOCAL_MACHINE`.  In both of the keys, the 32-bit registry is searched first, and then the 64-bit registry is searched to identify native messaging hosts.  The registry key specifies the location of the native messaging host manifest file.

If the registry entries for Microsoft Edge don't have the location of the native messaging host manifest file, the Chromium and Chrome registry locations are used as fallback options.

If Microsoft Edge finds the registry key at any of the previously listed locations, it doesn't query the locations that are listed in the following code snippet.

The search order for the registry locations is:

```output
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

#### WOW6432Node registry node

The `HKEY_CURRENT_USER\SOFTWARE\WOW6432Node` registry node is not searched on 64-bit machines, due to the way the registry works on them. For more information, see [Registry Keys Affected by Windows Installations That Include Windows on Windows (WOW) Support For Multiple Processor Architectures](/windows/win32/winprog64/shared-registry-keys).

#### Extension IDs required for both stores

If you have extensions on the Microsoft Edge Add-ons and the Chrome Web Store, you must add the extension IDs corresponding to both the stores in the `allowed_origins` of the native messaging host manifest file.  This is required because only the native messaging host manifest file that corresponds to the first registry location found is read.

##### [macOS](#tab/macos/)

To store the native messaging host manifest file:

*  System-wide native messaging hosts, which are available to all users, are stored in a fixed location.  For example, the native messaging host manifest file must be stored in the following location:

   ```bash
   /Library/Microsoft/Edge/NativeMessagingHosts/com.my_company.my_app.json
   ```

*  User-specific native messaging hosts, which are available to the current user only, are located in the `NativeMessagingHosts` subdirectory in the [user data directory](https://chromium.googlesource.com/chromium/src/+/HEAD/docs/user_data_dir.md).  For example, the native messaging host manifest file must be stored in the following location:

   ```bash
   ~/Library/Application Support/Microsoft Edge {Channel_Name}/NativeMessagingHosts/com.my_company.my_app.json
   ```

   The `{Channel_Name}` in `Microsoft Edge {Channel_Name}` must be one of the following values:

    * `Canary`
    * `Dev`
    * `Beta`

    When using the Stable channel, ` {Channel_Name}` isn't required.

##### [Linux](#tab/linux/)

To store the native messaging host manifest file:

*  System-wide native messaging hosts, which are available to all users, are stored in a fixed location.  The native messaging host manifest file must be stored in the following location:

   ```bash
   /etc/opt/edge/native-messaging-hosts
   ```

*  User-specific native messaging hosts, which are available to the current user only, are located in the `NativeMessagingHosts` subdirectory in the [user data directory](https://chromium.googlesource.com/chromium/src/+/HEAD/docs/user_data_dir.md).  The native messaging host manifest file must be stored in the following location:

   ```bash
   ~/.config/microsoft-edge/NativeMessagingHosts
   ```

---


<!-- ====================================================================== -->
## Native messaging protocol

Microsoft Edge starts each native messaging host in a separate process and communicates with it using standard input (`stdin`) and standard output (`stdout`).  The same format is used to send messages in
both directions; each message is serialized using JSON, UTF-8 encoded and is preceded with 32-bit message length in native byte order.  The maximum size of a single message from the native messaging
host is 1 MB, mainly to protect Microsoft Edge from misbehaving native applications.  The maximum size of the message sent to the native messaging host is 4 GB.

The first argument to the native messaging host is the origin of the caller, usually `chrome-extension://[ID of allowed extension]`.  This allows native messaging hosts to identify the source of the message when multiple extensions are specified in the `allowed_origins` key in the native messaging host manifest; see [Step 2: Create your native messaging host manifest file](#step-2-create-your-native-messaging-host-manifest-file), above.

On Windows, the native messaging host is also passed a command line argument with a handle to the calling Microsoft Edge native window: `--parent-window=<decimal handle value>`.  This lets the native messaging host create native UI windows that are correctly parented.  Note that this value will be 0 if the calling context is a service worker.

When a messaging port is created by using [`runtime.connectNative`](https://developer.chrome.com/docs/extensions/reference/runtime/#method-connectNative), Microsoft Edge starts a native messaging host process and keeps it running until the port is destroyed.  On the other hand, when a message is sent by using [`runtime.sendNativeMessage`](https://developer.chrome.com/docs/extensions/reference/api/runtime#method-sendNativeMessage), without creating a messaging port, Microsoft Edge starts a new native messaging host process for each message.  In that case, the first message that's generated by the host process is handled as a response to the original request, and Microsoft Edge will pass it to the response callback specified when [`runtime.sendNativeMessage`](https://developer.chrome.com/docs/extensions/reference/api/runtime#method-sendNativeMessage) is called.  All other messages  generated by the native messaging host in that case are ignored.


<!-- ====================================================================== -->
## Connecting to a native application

Sending and receiving messages to and from a native application is very similar to cross-extension messaging.  The main difference is that [`runtime.connectNative`](https://developer.chrome.com/docs/extensions/reference/runtime/#method-connectNative) is used instead of [`runtime.connect`](https://developer.chrome.com/docs/extensions/reference/runtime/#method-connect), and [`runtime.sendNativeMessage`](https://developer.chrome.com/docs/extensions/reference/api/runtime#method-sendNativeMessage) is used instead of [`runtime.sendMessage`](https://developer.chrome.com/docs/extensions/reference/runtime/#method-sendMessage).

To use these methods, the `nativeMessaging` permission must be declared in your extensions's manifest file; see [Step 1: Add permissions to the extension manifest](#step-1-add-permissions-to-the-extension-manifest), above.<!-- or [Declare permissions](https://developer.chrome.com/docs/extensions/mv3/declare_permissions) -->

These methods are not available inside content scripts, only inside your extension's pages and service worker.  If you want to communicate from a content script to the native application, send the message to your service worker to pass it along to the native application.

The following example creates a [`runtime.Port`](https://developer.chrome.com/docs/extensions/reference/runtime/#type-Port) object that's connected to native messaging host `com.my_company.my_application`, starts listening for messages from that port and sends one outgoing message:

```js
var port = chrome.runtime.connectNative('com.my_company.my_application');
port.onMessage.addListener(function (msg) {
  console.log('Received' + msg);
});
port.onDisconnect.addListener(function () {
  console.log('Disconnected');
});
port.postMessage({text: 'Hello, my_application'});
```

Use [`runtime.sendNativeMessage`](https://developer.chrome.com/docs/extensions/reference/api/runtime#method-sendNativeMessage) to send a message to the native application without creating a port; for example:

```js
chrome.runtime.sendNativeMessage(
  'com.my_company.my_application',
  {text: 'Hello'},
  function (response) {
    console.log('Received ' + response);
  }
);
```


<!-- ====================================================================== -->
## Debugging native messaging

When certain native messaging failures occur, output is written to the error log of Microsoft Edge.  This includes when the native messaging host fails to start, writes to `stderr` or violates the communication protocol.  On
Linux and macOS, this log can easily be accessed by starting Microsoft Edge from the command line and watching its output in the terminal.  On Windows, use `--enable-logging` as explained at [How to enable logging](https://www.chromium.org/for-testers/enable-logging).

Here are some common errors and tips for solving them:


<!-- ------------------------------ -->
**Failed to start native messaging host.**

Check whether you have sufficient permissions to execute the native messaging host file.


<!-- ------------------------------ -->
**Invalid native messaging host name specified.**

Check whether the name contains invalid characters.  Only lowercase alphanumeric characters, underscores, and dots (periods) are allowed.  A name cannot start or end with a dot, and a dot cannot be followed by another dot.


<!-- ------------------------------ -->
**Native host has exited.**

The pipe to the native messaging host was broken before the message was read by Microsoft Edge.  This is most likely initiated from your native messaging host.


<!-- ------------------------------ -->
**Specified native messaging host not found.**

Check the following:

* Is the name spelled correctly in the extension and in the manifest file?

* Is the manifest in the right directory and with the correct name? See [native messaging host location](#step-3-copy-the-native-messaging-host-manifest-file-to-your-system) for the expected formats.

* Is the manifest file in the correct format?  In particular, is the JSON valid and well-formed, and do the values match the definition of a _native messaging host manifest_, per [Step 2: Create your native messaging host manifest file](#step-2-create-your-native-messaging-host-manifest-file) above?

* Does the file specified in `path` exist? On Windows, paths may be relative, but on macOS and Linux, the paths must be absolute.


<!-- ------------------------------ -->
**Native messaging host _host name_ is not registered. (Windows-only)**

The native messaging host was not found in the Windows registry.  Double-check using `regedit` whether the key was really created and matches the required format as documented at [native messaging host location](#step-3-copy-the-native-messaging-host-manifest-file-to-your-system).


<!-- ------------------------------ -->
**Access to the specified native messaging host is forbidden.**

Is the extension's origin listed in `allowed_origins`?


<!-- ------------------------------ -->
**Error when communicating with the native messaging host.**

This indicates an incorrect implementation of the communication protocol in the native messaging host.

* Make sure that all output in `stdout` adheres to the [native messaging protocol](#native-messaging-protocol).  If you want to print some data for debugging purposes, write to `stderr`.

* Make sure that the 32-bit message length is in the platform's native integer format (little-endian or big-endian).

* The message length must not exceed 1024\*1024.

* The message size must be equal to the number of bytes in the message.  This may differ from the "length" of a string, because characters may be represented by multiple bytes.

* **Windows-only:** Make sure that the program's I/O mode is set to `O_BINARY`.  By default, the I/O mode is `O_TEXT`, which corrupts the message format as line breaks (`\n` = `0A`) are replaced with Windows-style line endings (`\r\n` = `0D 0A`).  The I/O mode can be set by using [`__setmode`](/cpp/c-runtime-library/reference/setmode).


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/extensions/develop/concepts/native-messaging).

[![Creative Commons License](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
