---
ms.assetid: 88825563-5f5d-421d-861b-7cec01277dec
description: Learn how the Web Authentication API can enable web applications to use Windows Hello and FIDO2 for user authentication.
title: Web Authentication - Dev guide  
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.prod: microsoft-edge
ms.technology: windows-integration
keywords: edge, web development, html, css, javascript, developer
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# Web Authentication and Windows Hello  

[!INCLUDE [deprecation-note](../../includes/legacy-edge-note.md)]  

The [Web Authentication API](https://w3c.github.io/webauthn) in Microsoft Edge enables web applications to use [Windows Hello](https://www.microsoft.com/windows/comprehensive-security) and [external FIDO2 devices](https://fidoalliance.org/fido2) for user authentication so that you and your users can avoid all the hassles and risks of password management, including password guessing, phishing, and key-logging attacks.  The current Microsoft Edge implementation is based on the Candidate Recommendation of the Web Authentication specification.  

> [!IMPORTANT]
> This topic will show you how to try out Windows Hello and FIDO2 authentication with Microsoft Edge.  

Using Web Authentication, the server sends down a plain text challenge to the browser.  Once Microsoft Edge is able to verify the user through Windows Hello or an external FIDO2 device, the system will sign the challenge with a private key previously provisioned for this user and send the signature back to the server.  If the server can validate the signature using the public key it has for that user and verify the challenge is correct, it can authenticate the user securely.  With [asymmetric cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography) such as this, the public key is meaningless on its own and the private key is never shared.  Furthermore, the private key can never be moved from secure elements or modern systems with TPM-enabled hardware.  

There are two basic steps to using the Web Authentication API:  

1.  Register your user with `create`  
1.  Authenticate your user with `get`  

The following dev guide will walk you through this flow using the [WebAuthn Sample App](https://github.com/MicrosoftEdge/webauthnsample).  

## Register your user  

Acting as an identity provider, you will first need to create a Web Authentication credential for your user with the `navigator.credentials.create` method.  Before you register that credential to the user on your server, you will need to confirm the identity of the user.  This can be done by sending the user an email confirmation or asking them to use their traditional login method.  

The `create` method takes the following parameters:  

:::row:::
   :::column span="1":::
      **relying party information**  
   :::column-end:::
   :::column span="3":::
      ```javascript
      rp: {
          name: "WebAuthn Sample App",
          icon: "https://example.com/rpIcon.png"
      },
      ```  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      **user account information**  
   :::column-end:::
   :::column span="3":::
      ```javascript
      user: {
          id: stringToArrayBuffer("some.user.id"),
          name: "bob.smith@contoso.com",
          displayName: "Bob Smith",
          icon: "https://example.com/userIcon.png"
      },
      ```  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      **crypto parameters**  
   :::column-end:::
   :::column span="3":::
      ```javascript
      pubKeyCredParams: [
          {
              //External authenticators support the ES256 algorithm
              type: "public-key",
              alg: -7                 
          }, 
          {
              //Windows Hello supports the RS256 algorithm
              type: "public-key",
              alg: -257
          }
      ],
      ```  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      **authenticator selection parameters**  
   :::column-end:::
   :::column span="3":::
      ```javascript
      authenticatorSelection: {
          //Select authenticators that support username-less flows
          requireResidentKey: true,
          //Select authenticators that have a second factor (such as PIN, Bio)
          userVerification: "required",
          //Selects between bound or detachable authenticators
          authenticatorAttachment: "platform"
      },
      ```  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      **other options**  
   :::column-end:::
   :::column span="3":::
      ```javascript
      //Select larger timeout values, as Microsoft Edge shows UI
      timeout: 50000,
      //an opaque challenge that the authenticator signs over
      challenge: challenge,
      //prevent re-registration by specifying existing credentials here
      excludeCredentials: [],
      //specifies whether you need an attestation statement
      attestation: "none" 
      ```  
   :::column-end:::
:::row-end:::  

You can use [credential creation parameters](https://w3c.github.io/webauthn#dictdef-publickeycredentialcreationoptions) to configure the credential you want to create.  In particular, you can choose to create a Windows Hello credential by setting `authenticatorAttachment` to `platform`, or a roaming credential on an external FIDO2 device by setting `authenticatorAttachment` to `cross-platform`.  

When you use the `create` method, Microsoft Edge will first ask the user to verify their presence by scanning their face or fingerprint, entering a PIN, or taking action on an external FIDO2 device.  Once this step is completed the authenticator will generate a publicprivate key pair and store the private key.  These credentials are created per origin, per account, and cannot be extracted because they are stored securely to the authentication device.  

The resulting promise returns an [attestation object](https://w3c.github.io/webauthn#sctn-attestation) representing the new credential.  The attestation object contains the public key for the credential.  You'll send this object to the server for validating future authentications.  Before sending back to the server, you'll need to base64-encode the raw data.  

**Client**  

```javascript
<script>
    navigator.credentials.create({
        publicKey: createCredentialOptions
    }).then(rawAttestation => {
        var attestation = {
            id: base64encode(rawAttestation.rawId),
            clientDataJSON: arrayBufferToString(rawAttestation.response.clientDataJSON),
            attestationObject: base64encode(rawAttestation.response.attestationObject)
        };
        return rest_put("/credentials", attestation);
    })
</script>
```  

The server should then decode the attestation object, perform verification steps, extract the public key for this credential, and store it for future authentications.  A detailed list of steps can be found in the [credential registration algorithm](https://w3c.github.io/webauthn#registering-a-new-credential) in the WebAuthn specification.  

**Server**  

```javascript
    attestationObject = cbor.decodeFirstSync(Buffer.from(attestation.attestationObject, 'base64'));
    authenticatorData = parseAuthenticatorData(attestationObject.authData);
    var credential = await storage.Credentials.create({
        id: authenticatorData.attestedCredentialData.credentialId.toString('base64'),
        publicKeyJwk: authenticatorData.attestedCredentialData.publicKeyJwk,
        signCount: authenticatorData.signCount
    });
```  

## Authenticate your user  

Once the credential is created on the client, the next time the user attempts to log into the site you can offer to sign them in using their Web Authentication credential instead of a password with a call to `navigator.credentials.get`.  

The `get` method takes the challenge as its only required parameter.  The challenge is an opaque sequence of bytes that the server will send down to a client to sign with the user's private key.  For example:  

**Server**  

```javascript
    var jwt = require('jsonwebtoken');
    var jwt_secret = "defaultsecret";
    fido.getChallenge = () => {
        return jwt.sign({}, jwt_secret, {
            expiresIn: 120 * 1000
        });
    };
```  

After retrieving a challenge from the server, you'll call the get API along with [credential request options](https://w3c.github.io/webauthn#credentialrequestoptions-extension).  Microsoft Edge will show a prompt, which will verify the identity of the user using Windows Hello or an external FIDO2 device.  After the user is verified, the challenge will be signed within the TPM or FIDO2 device and the promise will return with an [assertion object](https://w3c.github.io/webauthn#authenticatorassertionresponse) that contains the signature and other metadata for you to send to the server.  

**Client**  

```javascript
    var credentialRequestOptions = {
        //specifies which credential IDs are allowed to authenticate the user
        //if empty, any credential can authenticate the users
        allowCredentials: allowCredentials,
        //an opaque challenge that the authenticator signs over
        challenge: challenge,
        //Select larger timeout values, as Microsoft Edge shows UI
        timeout: 50000
    };

    navigator.credentials.get({
        publicKey: credentialRequestOptions
    }).then(rawAssertion => {
        var assertion = {
            id: base64encode(rawAssertion.rawId),
            clientDataJSON: arrayBufferToString(rawAssertion.response.clientDataJSON),
            userHandle: base64encode(rawAssertion.response.userHandle),
            signature: base64encode(rawAssertion.response.signature),
            authenticatorData: base64encode(rawAssertion.response.authenticatorData)
        };
        return rest_put("/assertion", assertion);
    })
```  

Once you receive the assertion on the server, you will need to validate the signature to authenticate the user.  The following is some sample code.  A detailed list of steps can be found in the [assertion verification algorithm](https://w3c.github.io/webauthn#verifying-assertion) in the WebAuthn specification.  

**Server**  

```javascript
    var jwkToPem = require('jwk-to-pem')
    var crypto = require('crypto');

    ...

    // Using credential’s id attribute, look up the corresponding 
    // credential public key.
    var credential = await storage.Credentials.findOne({
        id: assertion.id
    });

    //Refer to sample to see how to verify client data and authenticator data

    ...

    //Using the credential public key from lookup, verify that sig is a valid
    //signature over the binary concatenation of authData and hash.
    var publicKey = credential.publicKeyJwk;
    var verify = (publicKey.kty === "RSA") ? crypto.createVerify('RSA-SHA256') : crypto.createVerify('sha256');
    verify.update(authData);
    verify.update(hash);
    if (!verify.verify(jwkToPem(publicKey), sig))
        throw new Error("Could not verify signature");

    //Verify signCount has increased or is zero 
    if (authenticatorData.signCount != 0 &&
        authenticatorData.signCount < credential.signCount) {
        throw new Error("Received signCount of " + authenticatorData.signCount +
            " expected signCount > " + credential.signCount);
    }
```  

## Implementation notes  

### Supported platforms  

*   The Candidate Recommendation version of the Web Authentication API can be used from Microsoft Edge beginning with EdgeHTML 18 \(Windows Insider Preview version 17713 or newer\).  
*   The [prefixed, preview version](https://blogs.windows.com/msedgedev/2016/04/12) of the Web Authentication API has been removed and is no longer available.  
*   The Web Authentication API is not yet available to UWP apps and PWAs.  
*   Internet Explorer does not support the Web Authentication API.  

### Supported authenticators  

With the Web Authentication API in Microsoft Edge, you can authenticate users with the following technologies:  

*   **Windows Hello**  Enables passwordless on-device authentication with  face, fingerprint, or PIN  
*   **FIDO2**  Enables passwordless roaming authentication with a removable device and a fingerprint or PIN  
*   **U2F**  Enables strong second factor authentication for websites that are not ready to move to a passwordless model  

### Special considerations for Windows Hello  

A few things to note when using the Windows Hello authenticator:  

*   You can detect if Windows Hello is available on a PC by calling the `isUserVerifyingPlatformAuthenticatorAvailable` API.  Learn more about this API [here](https://www.w3.org/TR/webauthn#isUserVerifyingPlatformAuthenticatorAvailable).  
*   When creating a credential for Windows Hello, you should set `authenticatorAttachment` to `platform` for the best user experience.
*   Windows Hello only supports RS256 \(alg -257\) as its public key algorithm.  Be sure to specify this algorithm when creating a credential.  
*   To receive a [TPM attestation statement](https://w3c.github.io/webauthn#tpm-attestation), set attestation to "direct" when calling the `create` API.  TPM attestation is a best effort.  Only PCs with TPM 2.0 will return a TPM attestation statement, and the attestation process could fail for a variety of reasons.  
*   Windows Hello employs a variety of ways to protect user credentials.  You can check which method has been used to protect a credential by consuming the [AAGUID](https://w3c.github.io/webauthn#sec-attested-credential-data) field in the attestation object returned at credential creation.  The following is the list of AAGUIDs that Windows Hello may return:   
    *   Software backed authenticators  
        *   Windows Hello software authenticator:  `6028B017-B1D4-4C02-B4B3-AFCDAFC96BB2`  
        *   Windows Hello VBS software authenticator:  `6E96969E-A5CF-4AAD-9B56-305FE6C82795`  
    *   Trusted Platform Module \(TPM\) backed authenticators  
        *   Windows Hello hardware authenticator:  `08987058-CADC-4B81-B6E1-30DE50DCBE96`  
        *   Windows Hello VBS hardware authenticator:  `9DDD1817-AF5A-4672-A2B9-3E3DD95000A9`  

### API surface  

*   Microsoft Edge has a complete implementation of the Candidate Recommendation version of the core Web Authentication specification.  
*   The [AppID extension](https://w3c.github.io/webauthn#sctn-appid-extension) is supported.  
*   No other extensions are supported.  

## Demos  

[Client and server code sample](https://github.com/MicrosoftEdge/webauthnsample)  

[Windows Hello Test Drive demo](https://webauthnsample.azurewebsites.net)  

## Specification  

[Web Authentication: An API for accessing Public Key Credentials](http://w3c.github.io/webauthn)  
