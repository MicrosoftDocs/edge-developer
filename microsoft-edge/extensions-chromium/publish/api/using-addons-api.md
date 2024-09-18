---
title: Using the Microsoft Edge Add-ons REST API
description: REST endpoints to automate publishing updates to add-ons that are submitted to the Microsoft Edge Add-ons store.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: extensions
ms.date: 03/12/2024
---
# Using the Microsoft Edge Add-ons REST API

To publish an extension, you first use Partner Center, and then optionally you can use this REST API to update the extension.

The Microsoft Edge Add-ons API provides a set of REST endpoints for programmatically publishing updates to add-ons submitted to the Microsoft Edge Add-ons store.  You can use these REST endpoints to automate the process of uploading and publishing new versions of your add-ons to the Microsoft Edge Add-ons store.  You use the **Publish API** page at Partner Center to enable the API and begin working with these API endpoints.

<!-- To publish an extension, you first use Partner Center, and then optionally you can use the REST API to update the extension (or use Partner Center instead). -->

To submit suggestions and feedback, enter an [Issue about the Add-ons API](https://github.com/MicrosoftDocs/edge-developer/issues/new?title=[Add-ons%20API]).

## Versions of the REST API
As of September 6, 2024, both v2 and v1 of this REST API are supported. Later, v1 will no longer be supported. The date for ending v1 support is not yet finalized.

## Important Notes 
Secrets are now API keys in v2
The new Publish API(v2) doesn't require sending an Access Token URL.

<!-- ====================================================================== -->
## Terminology

| Term | Definition |
|---|---|
| _operation_ | A REST operation such as GET or PUT. |
| _operation ID_ | The ID of a REST operation. |
| _package_ | The `.zip` package that contains the files for your Microsoft Edge Add-on. |
| _product_ | A Microsoft Edge extension or theme.  Also referred to as a Microsoft Edge _Add-on_. |
| _product ID_ | The product ID of the product whose draft needs to be published.  The product ID is a 128-bit GUID that is associated with a product at Partner Center.  For example: `d34f98f5-f9b7-42b1-bebb-98707202b21d`. |
| _submission_ | An update that is being submitted to an existing product at Partner Center.  Every update to a product is a submission, regardless of whether the status is `In Draft`, `In Review`, or `In the Store` (published). |

<!-- ====================================================================== -->
## Before you begin

To use the Microsoft Edge Add-ons API, you need to enable the API for your project in the Microsoft Partner Center, by creating API credentials. Use the following steps to create API credentials.

1. Visit Microsoft Partner Center and sign in to the account that you used to publish an add-on.

1. Under the **Microsoft Edge** program, select **Publish API**.

1. On the **Publish API** page, click the **Create API credentials** button.  This step may take a few minutes to finish.

   The API credentials have now been created; you've enabled or renewed the API.  The **Client ID**, **Client secret(API key for v2)**, **Expiry date**, and **Access token URL(v1)** are now displayed on the Publish APIs page:

   ![The 'Publish API' page at Partner Center after clicking 'Create API credentials', now showing Client ID, Client Secret, and Auth Token URL](./using-addons-api-images/create-api-credentials-button.png)

1. Write down the **Client ID**, **Client secret(API key for v2)** and the **Access token URL(v1)**.  You'll use these values in the next step, to get an access token.

> [!IMPORTANT]
> Publish API Version 1(v1)
> Be sure to write down the client secret now, because it's only visible immediately after enabling or renewing the API (that is, after creating API credentials). This particular secret isn't shown again.

You can generate multiple client secrets for your client ID.  For example, you can create multiple secrets for multiple projects.

>Publish API Version 2(v2)
>With the new Publish API, the API key is generated automatically by our backend services. This means that the ClientId and API Keys are regenerated for every developer.

<!-- ====================================================================== -->
## Retrieving the access token

After you've acquired the necessary authorization for your application, get access tokens for APIs.  To get a token using the client credentials grant, send a POST request to the Access token URL (the OAuth token).  The tenant information is available in the URL that you received in the **Before you begin** steps above.

```REST
Endpoint: https://login.microsoftonline.com/5c9eedce-81bc-42f3-8823-48ba6258b391/oauth2/v2.0/token
Type: POST
Header Parameters: Content-Type: application/x-www-form-urlencoded
```


<!-- ---------------------------------- -->
#### Sample request

```console
> curl \
-X POST \
-H "Content-Type: application/x-www-form-urlencoded" \
-d "client_id={$Client_ID}" \
-d "scope=https://api.addons.microsoftedge.microsoft.com/.default" \
-d "client_secret={$Client_Secret}" \
-d "grant_type=client_credentials" \
-v \
https://login.microsoftonline.com/5c9eedce-81bc-42f3-8823-48ba6258b391/oauth2/v2.0/token
```


<!-- ---------------------------------- -->
#### Sample response

```json
{
  "token_type": "Bearer",
  "expires_in": 3599,
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBP..."
}
```

For more information, see [Get a token](/azure/active-directory/develop/v2-oauth2-client-creds-grant-flow#get-a-token) in _Microsoft identity platform and the OAuth 2.0 client credentials flow_.


<!-- ====================================================================== -->
## Using the API endpoints

After you have an access token, you can use the Microsoft Edge Add-ons API.  This API exposes endpoints for getting a list of products, updating products, and publishing products.

> [!NOTE]
> There's no API for creating a new product or updating a product's metadata. For example, the description.  You must complete these tasks manually in Microsoft Partner Center.

The API is available at the endpoint `https://api.addons.microsoftedge.microsoft.com`


<!-- ====================================================================== -->
## Uploading a package to update an existing submission

Use this API to update the package for an add-on.  This API uploads a package to update an existing draft submission of an add-on product.

```REST
Endpoint: /v1/products/$productID/submissions/draft/package
Type: POST
Header Parameters: Authorization: Bearer $TOKEN; Content-Type: application/zip
Body content: the package file to upload
```

`$productID` is the product ID of the Microsoft Edge Add-on that you want to update. 

Follow these steps to get the product ID:

1. Sign in to Microsoft Partner Center.

1. Go to **Microsoft Edge** > **Overview**.

1. Select the extension for which you want the product ID.

   The **Extension overview** page opens.  The product ID is shown in the page.  (The product ID is also shown as the GUID in the URL in the Address bar, between `microsoftedge/` and `/packages`.)
 
1. In the **Extension identity** section (or from the Address bar), select and copy the **Product ID**.


<!-- ---------------------------------- -->
#### Sample request

```console
> curl \
-H "Authorization: Bearer $TOKEN" \
-H "Content-Type: application/zip" \
-X POST \
-T $FILE_NAME \
-v \
https://api.addons.microsoftedge.microsoft.com/v1/products/$productID/submissions/draft/package
```

If the request succeeds and the update process begins, you receive a `202 Accepted` response status code with a `Location` header.  This location header contains the `operationID` that's required for checking the status of the update operation.


See also:
* [Upload a package to update an existing submission](./addons-api-reference.md#upload-a-package-to-update-an-existing-submission) in _REST API Reference for Microsoft Edge Add-ons_.


<!-- ====================================================================== -->
## Checking the status of a package upload

Use this API to check the status of package upload.

```REST
Endpoint: /v1/products/$productID/submissions/draft/package/operations/$operationID
Type: GET
Header Parameters: Authorization: Bearer $TOKEN
```


<!-- ---------------------------------- -->
#### Sample request

```console
> curl \
-H "Authorization: Bearer $TOKEN" \
-X GET \
-v \
https://api.addons.microsoftedge.microsoft.com/v1/products/$productID/submissions/draft/package/operations/$operationID
```


See also:
* [Check the status of a package upload](./addons-api-reference.md#check-the-status-of-a-package-upload) in _REST API Reference for Microsoft Edge Add-ons_.


<!-- ====================================================================== -->
## Publishing the submission

Use this API to publish the current draft of the product to the Microsoft Edge Add-ons website.

```REST
Endpoint: /v1/products/$productID/submissions
Type: POST
Header Parameters: Authorization: Bearer $TOKEN
Body content: Notes for certification, in JSON format
```


<!-- ---------------------------------- -->
#### Sample request

```console
> curl \
-H "Authorization: Bearer $TOKEN" \
-X POST \
-d '{ "notes"="text value" }' \
-v \
https://api.addons.microsoftedge.microsoft.com/v1/products/$productID/submissions
```

If the request succeeds and the publishing process begins, you'll receive a `202 Accepted` response status code with a `Location` header.  This location header contains the `operationID` that's required for checking the status of the publish operation.

See also:
* [Publish the product draft submission](./addons-api-reference.md#publish-the-product-draft-submission) in _REST API Reference for Microsoft Edge Add-ons_.


<!-- ====================================================================== -->
## Checking the publishing status

Use this API to check the status of the publish operation.

```REST
Endpoint: /v1/products/$productID/submissions/operations/$operationID
Type: GET
Header Parameters: Authorization: Bearer $TOKEN
```


<!-- ---------------------------------- -->
#### Sample request

```console
> curl \
-H "Authorization: Bearer $TOKEN" \
-X GET \
-v \
https://api.addons.microsoftedge.microsoft.com/v1/products/$productID/submissions/operations/{operationID}
```


## Getting started with v2

> opt-in for the new API key management experience. 

> Next, regenerate your ClientId and secrets, which may require updates to your authentication workflows. 

> Finally, reconfigure any existing CI/CD pipelines that may be impacted by the changes to access token URL and API key. 

See also:
* [Check the publishing status](./addons-api-reference.md#check-the-publishing-status) in _REST API Reference for Microsoft Edge Add-ons_.


<!-- ====================================================================== -->
## See also

<!-- all article-level links in article body: -->
* [REST API Reference for Microsoft Edge Add-ons](./addons-api-reference.md)
* [Issues](https://github.com/MicrosoftDocs/edge-developer/issues/) in `edge-developer` Docs repo.
* [Microsoft identity platform and the OAuth 2.0 client credentials flow](/azure/active-directory/develop/v2-oauth2-client-creds-grant-flow)
* [Supported APIs for Microsoft Edge extensions](../../developer-guide/api-support.md) - JavaScript APIs for developing an extension.
