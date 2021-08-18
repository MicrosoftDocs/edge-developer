---
description: REST endpoints to automate publishing updates to add-ons that are submitted to the Microsoft Edge Add-ons website.
title: Using the Microsoft Edge Add-ons API
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 08/10/2021
ms.topic: conceptual
ms.prod: microsoft-edge
keywords: edge-chromium, extensions development, browser extensions, add-ons, partner center, developer, add-ons api, publish api
---
# Using the Microsoft Edge Add-ons API

This article, along with the [Microsoft Edge Add-ons API Reference][AddonsAPIRef], provides an overview of the proposed Microsoft Edge Add-ons API.  We look forward to your suggestions and feedback on the proposed API contracts.  Please submit your feedback as an [Issue about the Add-ons API][GitHubMicrosoftDocsEdgeDeveloperNewIssue].

The Microsoft Edge Add-ons API provides a set of REST endpoints for programmatically publishing updates to add-ons submitted to the Microsoft Edge Add-ons website.  You can use these REST endpoints to automate the process of uploading and publishing add-ons into the Microsoft Edge Add-ons website.

The tentative date for the availability of the APIs is December 2021.


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

To use the Microsoft Edge Add-ons API, you need to enable the API for your project in the Microsoft Partner Center.

1. Visit Microsoft Partner Center and login to the account from which you have already published an add-on.

1. Under the **Microsoft Edge** program, a new page for **Publish APIs** appears.

1. Select the **Create API credentials** button to generate the API credentials.  This step may take a few minutes.  After the APIs are enabled, the **Client ID**, **Client Secret**, and **Auth Token URL** are displayed on this page.

1. Note the **ClientID**, **Client Secret** and the **Auth Token URL**.  You'll use them in the next step to get an access token.


<!-- ====================================================================== -->
## Retrieving the access token

After you've acquired the necessary authorization for your application, get access tokens for APIs.  To get a token using the client credentials grant, send a POST request to the Auth Token URL.  The tenant information is available in the URL that you received in the **Before you begin** steps above.

```rest
Endpoint: https://login.microsoftonline.com/{tenant}/oauth2/v2.0/token
Type: POST
Header Parameters: Content-Type: application/x-www-form-urlencoded
```

### Sample request

```console
> curl \
-X POST \
-H "Content-Type: application/x-www-form-urlencoded" \
-d "client_id={$Client_ID}" \
-d "scope=https://addons.edge.microsoft.com/.default" \
-d "client_secret={$Client_Secret}" \
-d "grant_type=client_credentials" \
-v \
https://login.microsoftonline.com/{tenant}/oauth2/v2.0/token
```

### Sample response

```json
{
  "token_type": "Bearer",
  "expires_in": 3599,
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBP..."
}
```

For more information, navigate to [OAuth 2.0 client credentials flow on the Microsoft identity platform][AzureOAuthGetToken].


<!-- ====================================================================== -->
## Using the API endpoints

Once you have an access token, you can use the Microsoft Edge Add-ons API.  This API exposes endpoints for getting a list of products, updating products, and publishing products.

> [!NOTE]
> Currently, there is no API for creating a new product or updating a product's metadata, such as a description.  You must complete these tasks manually in Microsoft Partner Center.

The examples below use the domain `https://addons.edge.microsoft.com/api`, which is a placeholder and might be replaced when the API is available in production.


<!-- ====================================================================== -->
## Uploading a package to update an existing submission

Use this API to update the package for an add-on.  This API uploads a package to update an existing draft submission of an add-on product.

```rest
Endpoint: /v1/products/$productID/submissions/draft/package
Type: PUT
Header Parameters: Authorization: Bearer $TOKEN; Content-Type: application/zip
Body content: the package file to upload
```

`$productID` is the ID of the Microsoft Edge Add-on that you want to update.  You can get the product ID in either of the following ways:

*  Login to Microsoft Partner Center.  Navigate to **Microsoft Edge > Overview**, and then select the extension you want the product ID for.  The extension overview page opens.  The GUID in the URL is the product ID.

*  Call the `/products` API to get a list of all products and their product IDs.  For more information about the `/products` API, navigate to [Get the list of products](addons-api-reference.md#get-the-list-of-products).

### Sample request

```console
> curl \
-H "Authorization: Bearer $TOKEN" \
-H "Content-Type: application/zip" \
-X PUT \
-T $FILE_NAME \
-v \
https://addons.edge.microsoft.com/api/v1/products/$productID/submissions/draft/package
```

If the request succeeded and the update process began, you receive a `202 Accepted` response status code with a `Location` header.  To find out the status of the operation, make `GET` requests to the URL in the `Location` header.

API reference: [Upload a package to update an existing submission](addons-api-reference.md#upload-a-package-to-update-an-existing-submission)


<!-- ====================================================================== -->
## Checking the status of a package upload

Use this API to check the status of package upload.

```rest
Endpoint: /v1/products/$productID/submissions/draft/package/operations/$operationID
Type: GET
Header Parameters: Authorization: Bearer $TOKEN
```

### Sample request

```console
> curl \
-H "Authorization: Bearer $TOKEN" \
-X GET \
-v \
https://addons.edge.microsoft.com/api/v1/products/$productID/submissions/draft/package/operations/$operationID
```

API reference: [Check the status of a package upload](addons-api-reference.md#check-the-status-of-a-package-upload)


<!-- ====================================================================== -->
## Publishing the submission

Use this API to publish the current draft of the product to the Microsoft Edge Add-ons website.

```rest
Endpoint: /v1/products/$productID/submissions
Type: POST
Header Parameters: Authorization: Bearer $TOKEN
Body content: Notes for certification, in plain text format
```

### Sample request

```console
> curl \
-H "Authorization: Bearer $TOKEN" \
-X POST \
-d "certificationNotes=text value" \
-v \
https://addons.edge.microsoft.com/api/v1/products/$productID/submissions
```

If the request succeeded and the publishing process began, you receive a `202 Accepted` response status code with a `Location` header.   To find out the status of the operation, make `GET` requests to the URL in the `Location` header.

API reference: [Publish the product draft submission](addons-api-reference.md#publish-the-product-draft-submission)


<!-- ====================================================================== -->
## Checking the publishing status

Use this API to check the status of the publish operation.

```rest
Endpoint: /v1/products/$productID/submissions/operations/$operationID
Type: GET
Header Parameters: Authorization: Bearer $TOKEN
```

### Sample request

```console
> curl \
-H "Authorization: Bearer $TOKEN" \
-X GET \
-v \ https://addons.edge.microsoft.com/api/v1/products/$productID/submissions/operations/{operationID}
```

API reference: [Check the publishing status](addons-api-reference.md#check-the-publishing-status)


<!-- links -->
[AddonsAPIRef]: addons-api-reference.md "Microsoft Edge Add-ons API Reference | Microsoft Docs "
<!-- external links -->
[GitHubMicrosoftDocsEdgeDeveloperNewIssue]: https://github.com/MicrosoftDocs/edge-developer/issues/new?title=[Add-ons%20API] "Enter feedback about the Add-ons API - MicrosoftDocs/edge-developer - GitHub"
[AzureOAuthGetToken]: /azure/active-directory/develop/v2-oauth2-client-creds-grant-flow#get-a-token "OAuth 2.0 client credentials flow on the Microsoft identity platform | Microsoft Docs"
