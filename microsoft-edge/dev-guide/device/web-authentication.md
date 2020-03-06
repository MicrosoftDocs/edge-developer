---
ms.assetid: 88825563-5f5d-421d-861b-7cec01277dec
description: Learn how the Web Authentication API can be used to enable web applications to use Windows Hello biometrics for user authentication.
title: Dev guide - Web authentication
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/15/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Web authentication and Windows Hello

The Web Authentication (formerly *FIDO 2.0* ) API in Microsoft Edge enables web applications to use [Windows Hello](https://go.microsoft.com/fwlink/p/?LinkID=624961) biometrics for user authentication so that you and your users can avoid all the hassles and risks of password management, including password guessing, phishing, and keylogging attacks. The current Microsoft Edge (*ms-* prefixed) implementation is based on an earlier draft of the Web Authentication specification and is likely to change in the future. **This topic will show you how to try out Windows Hello authentication with Microsoft Edge while also future-proofing your code against browser updates.**

The Web Authentication API is an emerging standard put forth by the [FIDO Alliance](https://fidoalliance.org/) with the aim of providing an interoperable way of doing web authentication using Windows Hello and other biometric devices across browsers. The Web Authentication specification defines two authentication scenarios: password-less and two factor. In the password-less case, the user does not need to log into the web page using a user name or password – they can login solely using Windows Hello. In the two factor case, the user logs in normally using a username and password, but Windows Hello is used as a second factor check to make the overall authentication stronger.

Using Web Authentication combined with Windows Hello, the server sends down a plain text challenge to the browser. Once Microsoft Edge is able to verify the user through Windows Hello, the system will sign the challenge with a private key previously provisioned for this user and send the signature back to the server. If the server can validate the signature using the public key it has for that user and verify the challenge is correct, it can authenticate the user securely. With [asymmetric cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography) such as this, the public key is meaningless on its own and the private key is never shared. Furthermore, the private key can never be moved from modern systems with TPM-enabled hardware.

There are two basic steps to using the Web Authentication API:

**1. Register your user with `makeCredential`**

**2. Authenticate your user with `getAssertion`**

The following will walk you through this flow using the recommended [Webauthn.js polyfill](https://github.com/adrianba/fido-snippets/blob/master/polyfill/webauthn.js). The [complete code](https://github.com/adrianba/fido-snippets/) is available for this server and client side demo. [C#](https://github.com/adrianba/fido-snippets/tree/master/csharp), [PHP](https://github.com/adrianba/fido-snippets/tree/master/php), and [Node.JS](https://github.com/adrianba/fido-snippets/tree/master/nodejs) server side versions are available.

## Register your user

Acting as an *identity provider*, you will first need to create a Web Authentication credential for your user with the window.webauthn.**makeCredential** method. Before you register that credential to the user on your server, you will need to confirm the identity of the user. This can be done by sending the user an email confirmation or asking them to use their traditional login method.

The makeCredential method takes the following parameters:
 - **user account information**

```
    var userAccountInformation = {
        rpDisplayName: "fido-demo",
        displayName: email
    };
```

 - **crypto parameters**

```
    var cryptoParams = [
        {
            type: "ScopedCred",
            algorithm: "RSASSA-PKCS1-v1_5",
        }
    ];
```

The resulting promise returns an object representing the credential that you then send back to the server for validating future authentications:

**Client**
```
<script src="webauthn.js"><!-- polyfill to map Microsoft Edge experimental implementation to current W3C spec --></script>
<script>
    var email = '<%=user.email%>';
    var name = '<%=user.name%>';

    webauthn.makeCredential(userAccountInformation, cryptoParams)
        .then(function (creds) {
            document.getElementById('form-id').value = creds.credential.id;
            document.getElementById('form-pk').value = JSON.stringify(creds.publicKey);
            document.getElementById('form-email').value = email;
            document.getElementById('form-name').value = name;
            document.getElementById('theform').submit();
        }).catch(function (err) {
            // No acceptable authenticator or user refused consent. Handle appropriately.
            alert(err);
        });
</script>
```

When you use the makeCredential method, Microsoft Edge will first ask Windows Hello to use face or fingerprint identification to verify that the user is the same user as the one logged into the Windows account. Once this step is completed, Microsoft Passport will generate a public/private key pair and store the private key in the Trusted Platform Module (TPM), the dedicated crypto processor hardware used to store credentials. If the user doesn’t have a TPM enabled device, these keys will be stored in software. These credentials are created per origin, per Windows account, and will not be roamed because they are tied to the device. This means that you’ll need to make sure the user registers to use Windows Hello for every device they use.

## Authenticate your user

Once the credential is created on the client, the next time the user attempts to log into the site you can offer to sign them in using Windows Hello instead of a password with a call to window.webauthn.**getAssertion**.

The getAssertion method takes the *challenge* as its only required parameter. The challenge is the randomly generated quantity that the server will send down to a client to sign with the user's private key. For example:

**Server**
```
var crypto = require('crypto');

Strategy.prototype.generateChallenge = function() {
    return this.generateVerifiableString(crypto.randomBytes(32));
};

Strategy.prototype.generateVerifiableString = function(data) {
    // Create cipher using secret
    var d = new Buffer(data);
    var c = crypto.createCipher('aes192',new Buffer(this._secret));

    // Encrypt data
    c.update(d);

    // Hash results of encrypting data
    var hash = crypto.createHash('sha256');
    hash.update(c.final());

    // Combine original data with hash
    return d.toString('hex') + string_separator + hash.digest('hex');
};
```

Once the getAssertion call is made, Microsoft Edge will show the Windows Hello prompt, which will verify the identity of the user using biometrics. After the user is verified, the challenge will be signed within the TPM and the promise will return with an assertion object that contains the signature and other metadata for you to send to the server:

**Client**
```
<script src="webauthn.js"><!-- polyfill to map Microsoft Edge experimental implementation to current W3C spec --></script>
<script>
    var challenge = '<%=challenge%>';

    webauthn.getAssertion(challenge)
    .then(function(assertion) {
      document.getElementById("form-id").value = assertion.credential.id;
      document.getElementById("form-type").value = assertion.credential.type;
      document.getElementById("form-data").value = assertion.clientData;
      document.getElementById("form-sig").value = assertion.signature;
      document.getElementById("form-authnr").value = assertion.authenticatorData;
      document.getElementById("form-challenge").value = challenge;
      document.getElementById("theform").submit();
    })
    .catch(function(err) {
      if(err && err.name) {
        document.getElementById("form-err").value = err.name;
      } else {
        document.getElementById("form-err").value = "unknown";
      }
      document.getElementById("theform").submit();
    });

</script>
```

Once you receive the assertion on the server, you will need to validate the signature to authenticate the user. For example (in Node.JS):

**Server**

```
var jwkToPem = require('jwk-to-pem')
var crypto = require('crypto');

var fidoAuthenticator = {
     validateSignature: function (publicKey, clientData, authnrData, signature, challenge) {
         // Make sure the challenge in the client data
         // matches the expected challenge
         var c = new Buffer(clientData, 'base64');
         var cc = JSON.parse(c.toString().replace(/\0/g,''));
         if(cc.challenge != challenge) return false;

         // Hash data with sha256
         const hash = crypto.createHash('sha256');
         hash.update(c);
         var h = hash.digest();

         // Verify signature is correct for authnrData + hash
         var verify = crypto.createVerify('RSA-SHA256');
         verify.update(new Buffer(authnrData,'base64'));
         verify.update(h);
         return verify.verify(jwkToPem(JSON.parse(publicKey)), signature, 'base64');
     }
};   
```

## Differences between Microsoft Edge and the spec

> [!NOTE]
> When trying out the Web Authentication API with Windows Hello in Microsoft Edge, we recommend using the Webauthn.js polyfill as shown above to avoid having to account for the discrepancies listed here. We'll update this polyfill for every major published version of the specification.


The current Microsoft Edge implementation is based on an earlier draft of the Web Authentication specification and is likely to change in future builds and as the spec evolves. The current differences include:

- Microsoft Edge APIs are MS- prefixed.
- Microsoft Edge does not yet support external credentials like USB keys or Bluetooth devices. The current API is limited to embedded credentials stored in the TPM.
- The currently logged in Windows user account must be configured to support at least a PIN, and preferably face or fingerprint biometrics. This is to ensure that Windows can authenticate the access to the TPM.
- The Microsoft Edge implementation does not yet support the account picker experience.
- A second *filters* parameter specifying the credential id is currently required for calls to msCredentials.[getAssertion](https://msdn.microsoft.com/library/mt697640). As such, you’ll need to store your credential ID information in local storage on the client, either in indexDB or localStorage when making your credential. If a user deletes their browsing history, including local storage, they will need to re-register to use Windows Hello the next time they log in.
- Microsoft Edge does not support all of the options in the current Web Authentication specification draft, such as extensions or timeouts.

On that last point, the specific Microsoft Edge differences are noted in the following Web Authentication spec definitions:

### W3C spec
```
partial interface Window {
    readonly attribute WebAuthentication webauthn; // msCredentials
};

interface WebAuthentication { // MSCredentials
    Promise <ScopedCredentialInfo> makeCredential (
        Account                                 accountInformation,
        sequence <ScopedCredentialParameters>   cryptoParameters,
        DOMString                               attestationChallenge, // Optional in Microsoft Edge
        optional unsigned long                  credentialTimeoutSeconds, // Not yet supported
        optional sequence <Credential>          blacklist, // Not yet supported
        optional WebAuthnExtensions             credentialExtensions // Not yet supported
    );

    Promise <WebAuthnAssertion> getAssertion (
        DOMString                        assertionChallenge,
        optional unsigned long           assertionTimeoutSeconds, // Not yet supported
        optional sequence <Credential>   whitelist, // Not yet supported
        optional WebAuthnExtensions      assertionExtensions // Not yet supported
    );
};

interface ScopedCredentialInfo { // MSAssertion
    readonly attribute Credential           credential;
    readonly attribute any                  publicKey;
    readonly attribute AttestationStatement attestation;
};

dictionary Account { // MSAccountInfo
    required DOMString rpDisplayName;
    required DOMString displayName;
    DOMString          name; // Not yet supported
    DOMString          id; // Not yet supported
    DOMString          imageUri; // Not yet supported
};

dictionary ScopedCredentialParameters { // MSCredentialParameters
    required CredentialType        type;
    required AlgorithmIdentifier   algorithm;
};

enum CredentialType { // MSCredentialType
    "ScopedCred" // Must be "FIDO_2_0" in Microsoft Edge
};

interface Credential { // MSCredentialSpec
    readonly attribute CredentialType type;
    readonly attribute DOMString      id;
};

dictionary WebAuthnExtensions { // Not supported
};
```



## API Reference

[MSCredentials](https://msdn.microsoft.com/library/mt697639)

[makeCredential](https://msdn.microsoft.com/library/mt697641)

[getAssertion](https://msdn.microsoft.com/library/mt697640)

## Demos

[Client and server code samples](https://github.com/adrianba/fido-snippets/)

[Webauthn.js polyfill](https://github.com/adrianba/fido-snippets/blob/master/polyfill/webauthn.js)

[Windows Hello Test Drive demo](https://testdrive-fido.azurewebsites.net/)

## Specification

[Web Authentication: A Web API for accessing scoped credentials 1](http://w3c.github.io/webauthn/)  
