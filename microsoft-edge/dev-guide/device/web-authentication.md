---
ms.assetid: 88825563-5f5d-421d-861b-7cec01277dec
description: Learn how the Web Authentication API may be used to enable web applications to use Windows Hello biometrics for user authentication.
title: Dev guide - Web authentication
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/27/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Web authentication and Windows Hello  

The Web Authentication \(formerly FIDO 2.0\) API in Microsoft Edge enables web applications to use [Windows Hello][MicrosoftWindowsHello] biometrics for user authentication so that you and your users may avoid all the hassles and risks of password management, including password guessing, phishing, and keylogging attacks.  The current Microsoft Edge \(`ms-` prefixed\) implementation is based on an earlier draft of the Web Authentication specification and may change in the future.  

> [!NOTE]
> This topic shows you how to try out Windows Hello authentication with Microsoft Edge while also future-proofing your code against browser updates.

The Web Authentication API is an emerging standard put forth by the [FIDO Alliance][FidoallianceMain] with the aim of providing an interoperable way of doing web authentication using Windows Hello and other biometric devices across browsers.  The Web Authentication specification defines two authentication scenarios: password-less and two factor.  In the password-less case, the user does not need to log into the web page using a user name or password; the user may log-in solely using Windows Hello.  In the two factor case, the user logs in normally using a user name and password, but Windows Hello is used as a second factor check to make the overall authentication stronger.  

Using Web Authentication combined with Windows Hello, the server sends down a plain text challenge to the browser.  After Microsoft Edge is able to verify the user through Windows Hello, the system validates the challenge with a private key previously provisioned for the user and sends the signature back to the server.  If the server verifies the signature using the public key it has for that user and verifies the challenge is correct, then it authenticates the user securely.  With [asymmetric cryptography][WikiPublicKeyCryptography] such as this, the public key is individually meaningless and the private key is never shared.  Furthermore, the private key is not able to be moved from modern systems with TPM-enabled hardware.  

Use the following 2 basic steps of the Web Authentication API.  

1.  Register your user with `makeCredential` method.  
1.  Authenticate your user with `getAssertion` method. 

The following instructions walk you through this flow using the recommended [Webauthn.js polyfill][GithubAdrianbaWebauthnJs].  The [complete code][GithubAdrianbaFidoSnippets] is available for this server and client side demo.  [C#][GithubAdrianbaFidoSnippetsCsharp], [PHP][GithubAdrianbaFidoSnippetsPhp], and [Node.JS][GithubAdrianbaFidoSnippetsNodejs] server side versions are available.  

## Register your user  

Acting as an identity provider, you must first to create a Web Authentication credential for your user with the `window.webauthn.makeCredential` method.  Before you register that credential to the user on your server, you must confirm the identity of the user.  To confirm identity, the user may be sent an email confirmation or requested using a traditional log-in process.  

The `makeCredential` method takes the following parameters.  

:::row:::
   :::column span="1":::
      **Parameter**
   :::column-end:::
   :::column span="2":::
      **Reference**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      `userAccountInformation`
   :::column-end:::
   :::column span="2":::
      ```javascript
      var userAccountInformation = {
          rpDisplayName: "fido-demo",
          displayName: email
      };
      ```  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      `cryptoParams`
   :::column-end:::
   :::column span="2":::
      ```javascript
      var cryptoParams = [
          {
              type: "ScopedCred",
              algorithm: "RSASSA-PKCS1-v1_5",
          }
      ];
      ```  
   :::column-end:::
:::row-end:::

<!--  
*   `userAccountInformation`  
    
    ```
    var userAccountInformation = {
        rpDisplayName: "fido-demo",
        displayName: email
    };
    ```  
    
*   `cryptoParams`  
    
    ```
    var cryptoParams = [
        {
            type: "ScopedCred",
            algorithm: "RSASSA-PKCS1-v1_5",
        }
    ];
    ```  
-->  

The resulting promise returns an object representing the credential that you then send back to the server for validating future authentications.  

### Client response for makeCredential  

```javascript
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
            // No acceptable authenticator or user refused consent.  Handle appropriately.
            alert(err);
        });
</script>
```  

When you use the `makeCredential` method, Microsoft Edge first asks Windows Hello to use face or fingerprint identification to verify that the user is the same user as the one logged into the Windows account.  After this step is completed, Microsoft Passport generates a public-private key pair and store the private key in the Trusted Platform Module \(TPM\), the dedicated crypto processor hardware used to store credentials.  If the user does not have a TPM-enabled device, the keys are stored in software.  The credentials are created per origin, per Windows account, and does not roam because both are tied to the device.  This means that you must verify that the user registers to use Windows Hello for every device in use.  

## Authenticate your user  

After the credential is created on the client, the next time the user attempts to log into the site you may offer to log-in the user using Windows Hello instead of a password with a request to `window.webauthn.getAssertion`.  

The `getAssertion` method takes the `challenge` as the only required parameter.  The `challenge` parameter is the randomly generated quantity that the server sends down to a client to log-in with the user's private key.  For example:  

### Server request for getAssertion  

```javascript
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

After the `getAssertion` request is made, Microsoft Edge shows the Windows Hello prompt, which verifies the identity of the user using biometrics.  After the user is verified, the `challenge` is validated within the TPM and the promise returns with an assertion object that contains the signature and other metadata for you to send to the server.  

### Client response for getAssertion  

```javascript
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

After you receive the assertion on the server, you must validate the signature to authenticate the user.  For example \(in Node.js\):  

### Server request for validateSignature  

```javascript
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
> When trying out the Web Authentication API with Windows Hello in Microsoft Edge, the Microsoft Edge team recommends using the `Webauthn.js` polyfill as shown in [Server request for validateSignature][#server-request-for-validatesignature] to avoid having to account for the discrepancies listed on this page.  The Microsoft Edge team updates this polyfill for every major published version of the specification.  


The current Microsoft Edge implementation is based on an earlier draft of the Web Authentication specification and may change in future builds and as the spec evolves.  The current differences include:  

*   Microsoft Edge APIs are `MS-` prefixed.  
*   Microsoft Edge does not yet support external credentials such as USB keys or Bluetooth devices.  The current API is limited to embedded credentials stored in the TPM.  
*   The currently logged in Windows user account must be configured to support at least a PIN, and preferably face or fingerprint biometrics.  This ensures that Windows authenticates the access to the TPM.  
*   The Microsoft Edge implementation does not yet support the account picker experience.  
*   A second `filters` parameter specifying the credential ID is currently required for requests to [msCredentials.getAssertion][PreviousVersionsMt697640].  As such, you must store your credential ID information in local storage on the client, either in `indexDB` or `localStorage` when making your credential.  If a user deletes browsing history, including local storage, the user must re-register to use Windows Hello during the next logs-in.
*   Microsoft Edge does not support all of the options in the current Web Authentication specification draft, such as extensions or timeouts.  

On that last point, the specific Microsoft Edge differences are noted in the following Web Authentication spec definitions.  

### W3C spec  

```javascript
partial interface Window {
    readonly attribute WebAuthentication webauthn; // msCredentials
};

interface WebAuthentication { // MSCredentials
    Promise <ScopedCredentialInfo> makeCredential (
        Account accountInformation,
        sequence <ScopedCredentialParameters> cryptoParameters,
        DOMString attestationChallenge, // Optional in Microsoft Edge
        optional unsigned long credentialTimeoutSeconds, // Not yet supported
        optional sequence <Credential> blacklist, // Not yet supported
        optional WebAuthnExtensions credentialExtensions // Not yet supported
    );

    Promise <WebAuthnAssertion> getAssertion (
        DOMString assertionChallenge,
        optional unsigned long assertionTimeoutSeconds, // Not yet supported
        optional sequence <Credential> whitelist, // Not yet supported
        optional WebAuthnExtensions assertionExtensions // Not yet supported
    );
};

interface ScopedCredentialInfo { // MSAssertion
    readonly attribute Credential credential;
    readonly attribute any publicKey;
    readonly attribute AttestationStatement attestation;
};

dictionary Account { // MSAccountInfo
    required DOMString rpDisplayName;
    required DOMString displayName;
    DOMString name; // Not yet supported
    DOMString id; // Not yet supported
    DOMString imageUri; // Not yet supported
};

dictionary ScopedCredentialParameters { // MSCredentialParameters
    required CredentialType type;
    required AlgorithmIdentifier algorithm;
};

enum CredentialType { // MSCredentialType
    "ScopedCred" // Must be "FIDO_2_0" in Microsoft Edge
};

interface Credential { // MSCredentialSpec
    readonly attribute CredentialType type;
    readonly attribute DOMString id;
};

dictionary WebAuthnExtensions { // Not supported
};
```  

## See also  

### API Reference  

*   [MSCredentials][PreviousVersionsMt697639]  
*   [makeCredential][PreviousVersionsMt697641]  
*   [getAssertion][PreviousVersionsMt697640]  

### Demos  

*   [Client and server code samples][GithubAdrianbaFidoSnippets]  
*   [Webauthn.js polyfill][GithubAdrianbaWebauthnJs]  <!--*   [Windows Hello Test Drive demo][AzureTestdriveFido]  -->

### Specification  

*   [Web Authentication: A Web API for accessing scoped credentials 1][GithubW3cWebauthn]  


<!-- image links -->  

<!-- links -->  

[PreviousVersionsMt697639]: /previous-versions/mt697639(v=vs.85) "MSCredentials object | Microsoft Docs"  
[PreviousVersionsMt697640]: /previous-versions/mt697640(v=vs.85) "getAssertion method | Microsoft Docs"  
[PreviousVersionsMt697641]: /previous-versions/mt697641(v=vs.85) "makeCredential method | Microsoft Docs"  

[AzureTestdriveFido]: https://testdrive-fido.azurewebsites.net "Windows Hello Test Drive demo"  <!--todo: Broken web app -->  

[GithubAdrianbaFidoSnippets]: https://github.com/adrianba/fido-snippets "FIDO snippets - adrianba | GitHub"  
[GithubAdrianbaFidoSnippetsCsharp]: https://github.com/adrianba/fido-snippets/tree/master/csharp "csharp - adrianba/fido-snippets | GitHub"  
[GithubAdrianbaFidoSnippetsNodejs]: https://github.com/adrianba/fido-snippets/tree/master/nodejs "nodejs - adrianba/fido-snippets | GitHub"  
[GithubAdrianbaFidoSnippetsPhp]: https://github.com/adrianba/fido-snippets/tree/master/php "php - adrianba/fido-snippets | GitHub"  
[GithubAdrianbaWebauthnJs]: https://github.com/adrianba/fido-snippets/blob/master/polyfill/webauthn.js "webauthn.js - adrianba/fido-snippets | GitHub"  
[GithubW3cWebauthn]: http://w3c.github.io/webauthn "Web Authentication: An API for accessing Public Key Credentials - Level 2 | GitHub"  

[MicrosoftWindowsHello]: https://www.microsoft.com/windows/windows-hello "Windows Hello | Microsoft"  

[FidoallianceMain]: https://fidoalliance.org "FIDO Alliance"  

[WikiPublicKeyCryptography]: https://en.wikipedia.org/wiki/Public-key_cryptography "Public-key cryptography | Wikipedia"  
