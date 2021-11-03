---
description: The Add-ons API Reference, for REST endpoints to automate publishing updates to add-ons that are submitted to the Microsoft Edge Add-ons website.
title: Microsoft Edge Add-ons API Reference
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 08/19/2021
ms.topic: conceptual
ms.prod: microsoft-edge
keywords: edge-chromium, extensions development, browser extensions, add-ons, partner center, developer, add-ons api, publish api
---
# Microsoft Edge Add-ons API Reference (under development)

> [!NOTE]
> This article is a Request for Comments.  The Microsoft Edge Add-ons API is not yet available for testing, and the Publish APIs page is not yet available at Partner Center.  The Microsoft Edge Add-ons API is under active development and the roadmap continues to evolve based on market changes and customer feedback.  The plans outlined here are not exhaustive and are subject to change.

This is the REST endpoint reference for the Microsoft Edge Add-ons API.  This API automates publishing updates to add-ons that have been submitted to the Microsoft Edge Add-ons website.

For an overview, navigate to [Using the Microsoft Edge Add-ons API](using-addons-api.md).


<!-- ====================================================================== -->
## Get the list of products

Gets a list of all products that belong to the account.

### Request

| Method | Request URI |
|---|---|
| `GET` | `/products` |

#### URI parameters

None.

#### Request headers

* Required.  `Authorization: Bearer <auth token>`

#### Request body

None.

### Response

The response includes a list of products, with details for each product.  The template for this response is as follows.

```json
[
    {
        "id": "<productID1>",
        "name": "<Name of Product 1>",
        "status": "In review",
        "lastUpdatedDate": "7/19/2021"
    },
    {
        "id": "<productID2>",
        "name": "<Name of Product 2>",
        "status": "In the store",
        "lastUpdatedDate": "5/21/2021"
    }
]
```

For the first version of a product, the status field has the following values:
*  In Draft
*  In Review
*  In the Store, or Failed

For subsequent submissions, you'll receive either of the following values:
*  In Review
*  In the Store, or Failed

#### Status codes

This API has the following expected status codes.

| HTTP status code | Description |
|---|---|
| 200 | The request is OK |
| 4XX | For more details see [Error codes](#error-codes). |
| 5XX | For more details see [Error codes](#error-codes). |


<!-- ====================================================================== -->
## Upload a package to update an existing submission

Uploads a package to update an existing draft submission of an add-on product.

### Request

| Method | Request URI |
|---|---|
| `PUT` | `/products/{productID}/submissions/draft/package` |

#### URI parameters

| URI parameter | Description |
|---|---|
| `productID` | Required.  The product ID of the product to which the package must be uploaded. |

#### Request headers

*  Required.  `Authorization: Bearer <auth token>`

*  Required.  `Content-Type: application/zip`

#### Request body

* `<Zip package>`

### Response

#### Response headers

*  Location: `/products/{productID}/submissions/draft/package/operations/{operationID}`

#### Status codes

This API has the following expected status codes.

| HTTP status code | Description |
|---|---|
| 202 | The request is accepted for processing, but the processing isn't complete. |
| 4XX | See [Error codes](#error-codes). |
| 5XX | See [Error codes](#error-codes). |


<!-- ====================================================================== -->
## Check the status of a package upload

Gets the status of the package upload.

### Request

| Method | Request URI |
|---|---|
| `GET` | `/products/{productID}/submissions/draft/package/operations/{operationID}` |

#### URI parameters

| URI parameter | Description |
|---|---|
| `operationID` | Required.  The operation ID of the upload request submitted in the previous step.  This information is available in the response header.

#### Request headers

* Required.  `Authorization: Bearer <auth token>`

#### Request body

None.

### Response

There are several responses, for different scenarios.

#### Response when the operation is still in progress

```json
{
    "id": "{operationID}",
    "status": "IN-PROGRESS",
    "message": "The package upload is in progress. Please check the status after some time."
}
```

#### Response when the operation succeeds

```json
{
    "id": "{operationID}",
    "status": "SUCCESS",
    "message": "Package upload successfully completed. Please proceed with publishing."
}
```

#### Response when the operation fails with errors

```json
{
    "id": "{operationID}",
    "status": "FAILED",
    "message": "The package upload failed. Please fix the errors and make the request again.",
    "errors": [
       {
           "id": "MANIFEST_FILE_MISSING",
           "message": "Zip file must contain a manifest.json file."
       },
       {
           "id": "SIZE_LIMIT_EXCEEDED",
           "message": "Zip file size must not exceed 500MB."
       }
    ]
}
```

#### Response headers

None.

#### Status codes

This API has the following expected status codes.

| HTTP status code | Description |
|---|---|
| 200 | The request is OK. |
| 4XX | See [Error codes](#error-codes). |
| 5XX | See [Error codes](#error-codes). |


<!-- ====================================================================== -->
## Publish the product draft submission

Publishes the current draft of the product to Microsoft Edge Add-ons.

### Request

| Method | Request URI |
|---|---|
| `POST` | `/products/{productID}/submissions` |

#### URI parameters


| URI parameter | Description |
|---|---|
| `productID` | Required.  The product ID of the product whose draft must be published. |

#### Request headers

* Required.  `Authorization: Bearer <auth token>`

#### Request body

`<Notes for certification>`, in plain text format.

### Response

#### Response headers

* Location: `/products/{productID}/submissions/operations/{operationID}`

#### Status codes

This API has the following expected status codes.

| HTTP status code | Description |
|---|---|
| 202 | The request is accepted for processing, but the processing isn't complete. |
| 4XX | See [Error codes](#error-codes). |
| 5XX | See [Error codes](#error-codes). |


<!-- ====================================================================== -->
## Check the publishing status

Checks the status of the publish operation.

### Request

| Method | Request URI |
|---|---|
| `GET` | `/products/{productID}/submissions/operations/{operationID}` |

#### URI parameters

None.

#### Request headers

* Required.  `Authorization: Bearer <auth token>`

#### Request body

None.

### Response

A `GET` operation status API can be called in the following scenarios.  In all valid scenarios, `200 OK` is returned, with different status messages.

#### Response when there is nothing new to be published

```json
{
    "id": "{operationID}",
    "status": "NOTHING-TO-PUBLISH",
    "message": "There is no draft available to publish. Please update the draft before publishing."
}
```

#### Response when there is an in-review submission for the same product

```json
{
    "id": "{operationID}",
    "status": "CONFLICT",
    "message": "There is another in-review submission for this product. Please wait for that submission to be completed before triggering a new publish."
}
```

#### Response when the publish call succeeds

```json
{
    "id": "{operationID}",
    "status": "IN-REVIEW",
    "message": "The draft has been successfully submitted and is in review. The review may take up to 7 business days."
}
```

#### Response when the publish call fails with an irrecoverable failure

```json
{
    "id": "{operationID}",
    "status": "FAILED",
    "message": "The operation failed due to an unknown error. Please re-trigger the publish call."
}
```

#### Response headers

None.

#### Status codes

This API has the following expected status codes.

| HTTP status code | Description |
|---|---|
| 200 | The request is OK. |
| 4XX | See [Error codes](#error-codes). |
| 5XX | See [Error codes](#error-codes). |


<!-- ====================================================================== -->
## Error codes

Here are a list of common error codes and possible reasons.  For a full list, navigate to [Partner Center REST error codes](/partner-center/develop/error-codes) or [List of HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes).

### 4xx: Client error

| Message | Description | Example scenario |
|---|---|---|
| 400 Bad Request | The server didn't understand the request. | There's no package (zip file) in the body.  Or, `Content-Type` header is missing or its value is incorrect. |
| 401 Unauthorized | The request page needs an authorization. | The auth token is missing, expired, or not valid. |
| 404 Not Found | The server can't find the requested page. | The specified `productID` or `operationID` isn't valid, or doesn't belong to the developer who is making the request. |
| 408 Request Timeout | The request took longer than the server was prepared to wait. | There was a timeout while uploading a package. |
| 429 Too many requests | Too many requests were sent by the user. | Too many requests were sent and they got throttled. |

### 5xx: Server error

| Message  | Description  | Example scenario |
|---|---|---|
| 500 Internal Server Error | The request wasn't completed. | The server met an unexpected condition. |


<!-- ====================================================================== -->
## See also

*  [Using the Microsoft Edge Add-ons API](using-addons-api.md)
