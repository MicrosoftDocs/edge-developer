---
description: Emulate Authenticators and Debug WebAuthn in Microsoft Edge DevTools.
title: Emulate authenticators and debug WebAuthn in Microsoft Edge DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/04/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# Emulate authenticators and debug WebAuthn in Microsoft Edge DevTools

Instead of debugging Web Authentication in your website or app with physical authenticators, use the **WebAuthn** tool in Microsoft Edge DevTools to create and interact with software-based virtual authenticators.


<!-- ====================================================================== -->
## Before you begin

A great place to get started with Web Authentication is the [Web Authentication API specification](https://w3c.github.io/webauthn).


<!-- ====================================================================== -->
## Set up the WebAuthn tool

1.  Navigate to a webpage that uses WebAuthn, such as the following demo website.

    [webauthndemo.appspot.com](https://webauthndemo.appspot.com)

1.  Sign into the website.
1.  [Open DevTools](../open/index.md).
1.  To open the **WebAuthn** tool, choose the **Customize and control DevTools** (`...`) icon > **More tools** > **WebAuthn**.

    :::image type="complex" source="../media/webauthn-webauthn-tab.msft.png" alt-text="WebAuthn tool" lightbox="../media/webauthn-webauthn-tab.msft.png":::
       **WebAuthn** tool
    :::image-end:::

1.  In the **WebAuthn** tool, turn on **Enable virtual authenticator environment** checkbox.
1.  After it is enabled, a new section named **New authenticator** is displayed.

    :::image type="complex" source="../media/webauthn-enable-virtual-auth.msft.png" alt-text="Enable virtual authenticator environment" lightbox="../media/webauthn-enable-virtual-auth.msft.png":::
        **Enable virtual authenticator environment**
    :::image-end:::

1.  In the **New authenticator** section, configure the following options.

    | Option | Value | Details |
    |:--- |:--- |:--- |
    | `Protocol` | [ctap2](https://fidoalliance.org/specs/fido-v2.0-id-20180227/fido-client-to-authenticator-protocol-v2.0-id-20180227.html) or [u2f](https://fidoalliance.org/specs/fido-u2f-v1.2-ps-20170411/fido-u2f-overview-v1.2-ps-20170411.html) | The protocol the virtual authenticator uses for encoding and decoding |
    | `Transport` |   `usb`, `nfc`, `ble`, or `internal` | The virtual authenticator simulates the selected transport for communicating with clients in order to obtain an assertion for a specific credential.  For more information, navigate to [Authenticator Transport Enumeration](https://w3c.github.io/webauthn#enum-transport) |
    |  `Supports resident keys` | Turn on (or off) using the checkbox | Turn on if your web app relies on resident keys (also known as client-side discoverable credentials).  For more information, navigate to [Resident Key Requirement Enumeration](https://w3c.github.io/webauthn#enum-residentKeyRequirement). |
    | `Supports user verification` | Turn on (or off) using the checkbox | Turn on if your web app relies on local authorization using gesture modalities like touch plus pin code, password entry, or biometric recognition.  For more information, navigate to [User Verification](https://w3c.github.io/webauthn#user-verification) |

1.  Choose the **Add** button.
1.  A new section of your newly created authenticator is displayed.

    :::image type="complex" source="../media/webauthn-authenticator.msft.png" alt-text="Authenticator" lightbox="../media/webauthn-authenticator.msft.png":::
       Authenticator
    :::image-end:::

The **Authenticator** section includes a **Credentials** table.  The table is empty until a credential is registered to the authenticator.

:::image type="complex" source="../media/webauthn-no-cred.msft.png" alt-text="No credentials" lightbox="../media/webauthn-no-cred.msft.png":::
   No credentials
:::image-end:::


<!-- ====================================================================== -->
## Register a new credential

To register a new credential, complete the following steps.  For more information about what the [Web Authentication API](https://w3c.github.io/webauthn) is doing when registering a new credential, navigate to [Create a New Credential](https://w3c.github.io/webauthn#sctn-createCredential).

1.  On the demo website, choose **Register new credential**.
1.  A new credential is now added to the **Credentials** table in the WebAuthn tool.

    :::image type="complex" source="../media/webauthn-view-cred.msft.png" alt-text="View credentials" lightbox="../media/webauthn-view-cred.msft.png":::
       View credentials
    :::image-end:::

On the demo website, choose the **Authenticate** button.  Verify that the [Sign Count](https://w3c.github.io/webauthn/#sctn-sign-counter) of the credential in the **Credentials** table increased by 1, which marks a successful [authenticatorGetAssertion](https://w3c.github.io/webauthn#authenticatorgetassertion) operation.


<!-- ====================================================================== -->
## Export and remove credentials

To export or remove a credential, choose the **Export** or **Remove** button.

:::image type="complex" source="../media/webauthn-export-remove.msft.png" alt-text="Export or remove a credential" lightbox="../media/webauthn-export-remove.msft.png":::
   Export or remove a credential
:::image-end:::


<!-- ====================================================================== -->
## Rename an authenticator

To rename an authenticator, complete the following steps.

1.  Next to the authenticator name, choose the **Edit** button.
1.  Edit the name, then choose **Enter** to save the changes.

:::image type="complex" source="../media/webauthn-rename.msft.png" alt-text="Rename an authenticator" lightbox="../media/webauthn-rename.msft.png":::
   Rename an authenticator
:::image-end:::


<!-- ====================================================================== -->
## Set the active authenticator

A newly created authenticator is automatically activated.  To use another virtual authenticator, choose the **Active** radio button next to the authenticator.

> [!NOTE]
> DevTools supports only one active virtual authenticator at any point of time.  If you remove the active authenticator, another authenticator is not automatically activated.

:::image type="complex" source="../media/webauthn-set-active.msft.png" alt-text="Set active authenticator" lightbox="../media/webauthn-set-active.msft.png":::
   Set active authenticator
:::image-end:::


<!-- ====================================================================== -->
## Remove a virtual authenticator

To remove a virtual authenticator, next to the authenticator, choose the **Remove** button.

:::image type="complex" source="../media/webauthn-remove-authenticator.msft.png" alt-text="Remove authenticator" lightbox="../media/webauthn-remove-authenticator.msft.png":::
   Remove authenticator
:::image-end:::


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/webauthn/index) and is authored by [Jecelyn Yeen](https://developers.google.com/web/resources/contributors#jecelyn-yeen) (Developer advocate, Chrome DevTools).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
