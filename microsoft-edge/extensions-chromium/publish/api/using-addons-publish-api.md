---
description: Using the Microsoft Edge Add-ons Publish API.
title: Using the Microsoft Edge Add-ons Publish API
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 08/10/2021
ms.topic: conceptual
ms.prod: microsoft-edge
keywords: edge-chromium, extensions development, browser extensions, add-ons, partner center, developer, publish api, add-ons publish api
---
# Using the Microsoft Edge Add-ons Publish API

<!-- find and resolve: tbd, html comments -->

This article, along with the [Add-ons Publish API Reference](addons-publish-api-ref.md), provides an overview of the proposed Microsoft Edge Add-ons Publish API.  We look forward to your suggestions and feedback on the proposed API contracts.  Please submit your feedback at (link TBD).

The Microsoft Edge Add-ons Publish API provides a set of REST endpoints for programmatically publishing updates to add-ons submitted to the Microsoft Edge Add-ons website.  You can use these REST endpoints to automate the process of uploading and publishing add-ons into the Microsoft Edge Add-ons website.

The tentative date for the availability of the APIs is December 2021.


## Terminology

| Term | Definition |
|---|---|
| _product_ | A single product for which you have an entire entry at Partner Center. |
| _product ID_ | The product ID of your product as shown at Partner Center. |
| _submission_ | A product which has not yet been approved for publishing at Partner Center.  The process of submitting a product for approval has several steps. |
| _operation_ | A REST operation such as GET or PUT.  There are several operations, defined at [Add-ons Publish API Reference](addons-publish-api-ref.md). |
| _operation ID_ | The ID of a REST operation. |


## Before you begin

To use the Microsoft Edge Add-ons Publish API, you need to enable the API for your project in the Microsoft Partner Center.

1. Visit Microsoft Partner Center and login to the account from which you have already published an add-on.

1. Under the **Microsoft Edge** program, a new page for **Publish APIs** appears.

1. Enable the APIs.<!-- what UI action to do that?--> This step may take a few minutes.  After the APIs are enabled, the **Client ID**, **Client Secret**, and **Auth Token URL** are displayed on this page.

1. Note the **ClientID**, **Client Secret** and the **Auth Token URL**. You will use them in the next step to get an access token.


## Retrieving the access token

After you've acquired the necessary authorization for your application, proceed with acquiring access tokens for APIs.

1. To get a token using the client credentials grant, send a POST request to the Auth Token URL.  The tenant information is available in the URL that you received in the **Before you begin** steps above.

```console
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

<!-- is that token ok to show? has ... at end -->

For more information, navigate to [OAuth 2.0 client credentials flow on the Microsoft identity platform](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-client-creds-grant-flow#get-a-token).


## Using the Publish API

Once you have an access token, your app can use the Microsoft Edge Add-ons Publish API.  There are endpoints for getting a list of products, updating a product, and publishing a product.<!-- correct list of actions? -->

> [!NOTE] Currently, there is no API for creating a new product or updating a product's metadata, such as a description.  You must complete these tasks manually in Microsoft Partner Center.  <!-- delete sentence? -->For more information about the publishing APIs, navigate to [Add-ons Publish API Reference](addons-publish-api-ref.md).

The examples below use the placeholder `https://addons.edge.microsoft.com/api`<!-- placeholder, replace by dummy --> domain, which needs to be updated to a dummy one, given that this is not live yet.


## Uploading a package to update an existing product

Use this API to update the package for an add-on.

```
Endpoint: /v1/products/$productID/submissions/draft/package
Type: PUT
Header Parameters: $TOKEN: the access token; Content-Type: application/zip
Body content: the package file to upload
```

`$productID` is the ID of the Microsoft Edge Add-on that you want to update.  You can get the product ID in either of the following ways:

*  Login to Microsoft Partner Center.  Navigate to **Microsoft Edge > Overview**, and then select the extension you want the product ID for.  The extension overview page opens.  The GUID in the URL is the Product ID.
*  Call the `/products` API to get a list of all products and their product IDs.  For more information about the `/products` API, navigate to the [Add-ons Publish API Reference](addons-publish-api-ref.md).

### Sample request

```console
> curl \
-H "Authorization: Bearer $TOKEN"  \
-H "Content-Type: application/zip" \
-X PUT \
-T $FILE_NAME \
-v \
https://api.partnercenter.microsoft.com/edgeaddons/v1/products/$productID/submissions/draft/package
```


## Checking the upload status of a package

Use this API to check the status of package upload.

```
Endpoint: /v1/products/$productID/submissions/draft/package/operations/$operationsID
Type: GET
Header Parameters: $TOKEN: the access token
```

### Sample request

```console
> curl \
-H "Authorization: Bearer $TOKEN"  \
-X GET \
-v \
https://addons.edge.microsoft.com/api/v1/products/$productID/submissions/draft/package/operations/$operationsID
```


## Publishing the draft submission

Use this API to publish the current draft of the product to the Edge Add-ons website.

`https://addons.edge.microsoft.com/api`<!-- placeholder, replace by dummy --> is a placeholder and needs to be replaced by another example.

```
Endpoint: /v1/products/$productID/submissions
Type: POST
Header Parameters: $TOKEN: the access token
Body content: Notes for certification, in plain text format
```

### Sample request

```console
> curl \
-H "Authorization: Bearer $TOKEN"  \
-X POST \
-d “Notes=text value” \
-v \
https://addons.edge.microsoft.com/api/v1/products/$productID/submissions
```

`https://addons.edge.microsoft.com/api`<!-- placeholder, replace by dummy --> is a placeholder and needs to be replaced by another example.


## Checking the publish status of an item

Use this API to check the status of the publish operation.

```
Endpoint: /v1/products/$productID/submissions/operations/$OperationID}
Type: GET
Header Parameters: $TOKEN: the access token
```

### Sample request

```console
> curl \
-H "Authorization: Bearer $TOKEN"  \
-X GET \
-v \ https://addons.edge.microsoft.com/api/v1/products/$productID/submissions/operations/{operationID}
```

`https://addons.edge.microsoft.com/api`<!-- placeholder, replace by dummy --> is a placeholder and needs to be replaced by another example.
